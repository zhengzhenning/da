# 问题与风险（QR）

# 问题

## 定制任务结点、扩展任务属性

可以参考这篇[文章](https://blog.csdn.net/makeryan/article/details/77000412)。

## 使用重试机制解决流程不匹配时仍导致监听触发推消息给业务方

解决方案：

```
// 重试组件
compile 'com.github.rholder:guava-retrying:2.0.0'
```

> 调用

```java
    public Boolean validateProcessInstanceStartedNew(String processInstanceId) {
        try {
            Boolean result = this.validateProcessInstanceStartedRetryer(processInstanceId);
            log.info("[流程实例]校验流程实例{}是否启动成功:{}", processInstanceId, result);
            return result;
        } catch (ExecutionException | RetryException e) {
            e.printStackTrace();
        }
        log.info("[流程实例]校验流程实例{}启动失败:{}", processInstanceId, Boolean.FALSE);
        return Boolean.FALSE;
    }
```

> 重试规则

```java
    private Boolean validateProcessInstanceStartedRetryer(String processInstanceId) throws ExecutionException, RetryException {
        Callable<Boolean> callable = () -> {
            return validateProcessInstanceStartedRevoke(processInstanceId);
        };
        Retryer<Boolean> retryer = RetryerBuilder.<Boolean>newBuilder()
                // 返回false时重试
                .retryIfResult(Boolean.FALSE::equals)
                // 抛出运行时异常时重试
                .retryIfRuntimeException()
                // 每次间隔1秒
                .withWaitStrategy(WaitStrategies.fixedWait(1, TimeUnit.SECONDS))
                // 重试6次
               .withStopStrategy(StopStrategies.stopAfterAttempt(6))
                .withRetryListener(new ValidateProcessInstanceStaredListener<Boolean>())
                .build();
        // 调用目标函数
        return retryer.call(callable);
    }
```

> 重试依据

```java
    private Boolean validateProcessInstanceStartedRevoke(String processInstanceId) {
        Boolean isStarted = Boolean.FALSE;
        List<Task> tasks = taskService.createTaskQuery().processInstanceId(processInstanceId).list();
        if (CollectionUtil.isNotEmpty(tasks)) {
            isStarted = Boolean.TRUE;
        }
        return isStarted;
    }
```



## Node对象转Java对象的问题

ObjectNode和TextNode转换成Java对象或类型时，需要使用该工具进行转换，否则会报错。

```java
package com.wk.workflow.infrastructure.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.TextNode;

import java.util.Map;

/**
 * @program: workflow-engine
 * @description: Node转换器
 * @packagename: com.wk.workflow.infrastructure.util
 * @author: 振振
 * @date: 2022-05-26 17:08
 **/
public class NodeCoverter2JavaUtils {
    /**
     * 溶解Node为Java 对象
     *
     * @param value
     * @return
     */
    public static  <T extends Object> T dissolveNode(Object value) {
        if (value instanceof ObjectNode) {
            ObjectNode objectNode = (ObjectNode) value;
            Map<String, Object> values = new ObjectMapper().convertValue(value, Map.class);
            return (T) values;
        }
        if (value instanceof TextNode) {
            TextNode textNode = (TextNode) value;
            String textStr = new ObjectMapper().convertValue(textNode, String.class);
            return (T) textStr;
        }
        return (T) value;
    }
}
```

# 风险

Activiti7极致的面向对象设计与实现提高了二开的时间成本，对于使用者仅关注实现是不够的，期间隐藏着很微小的细节问题，很难遇见这些细节对特定场景、特定业务的影响，因此在实际开发中，应当注重验证，多次反复验证，结合现有业务场景、抽象一般场景进行验证。

这些微小的问题包括但不限于：

1. 表操作顺序（需要开启sql打印，需要比对数据变化、流转等）
2. 事件触发（什么时候触发什么样的事件，宏观上显而易见，微观上有些微差异）

等等...


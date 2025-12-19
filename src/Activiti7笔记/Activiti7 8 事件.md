---
head:
  - - meta
    - name: keywords
      content: Activiti7,事件处理,事件驱动,业务流程,工作流事件
---

# 事件处理

推进业务流程的方式有很多种，事件驱动是其中一种，也是使用最广泛的。依托事件驱动业务流程往下走，需要搞清楚3个问题：

1. 事件的类型有哪些 🔗 [看各种事件类型](https://www.activiti.org/userguide/index.html#eventDispatcherEventTypes)
2. 各类型事件触发的顺序  
3. 各类型事件触发的时机

弄清这3个问题，才能保证"事件驱动"不会对业务流程造成破坏。在实践过程中，**多实例实现会签**和**并行网关实现会签**触发的事件机制不同会对业务流程造成破坏。

<b style="color:red">全局统一事件处理（策略模式）</b>

![image-20220630211507112](https://tva1.sinaimg.cn/large/008vxvgGly1h74vcr633aj30vk0l4my8.jpg)

核心代码：

```java
/**
 * @program: workflow-engine
 * @description: 流程实例运行时监听器
 * @packagename: com.wk.workflow.service.act.listener
 * @author: 振振
 * @date: 2022-04-20 16:16
 **/
@Component
public class GlobalActListener implements ActivitiEventListener {

    private static final Logger log= LoggerFactory.getLogger(GlobalActListener.class);

    /**
     * TODO Spring 自动将类型注入到此集合里
     */
    @Autowired
    public List<EventHandler> handlerList;

    /**
     * 各细分事件处理类集合
     */
    private Map<ActivitiEventType, EventHandler> handlers = new ConcurrentHashMap<>();

    /**
     * TODO 注入
     */
    @PostConstruct
    public void inject() {

        log.info("[全局事件]待注入元素:{} size", Optional.ofNullable(handlerList).orElse(Lists.newArrayList()).size());

        handlers.clear();
        log.info("[全局事件]清理 handlers 完成，清理完成，剩余元素:{} size", handlers.size());

        handlers = handlerList.stream().collect(Collectors.toMap(EventHandler::getType, Function.identity()));
        log.info("[全局事件]注入 handlers 完成，注入完成，注入元素:{} size", handlers.size());

        log.info("[全局事件]事件策略初始化完成！");

    }


    /**
     * Called when an event has been fired
     *
     * @param event the event
     */
    @Override
    public void onEvent(ActivitiEvent event) {
        if (!handlers.containsKey(event.getType()) || !handlers.get(event.getType()).pass()) {
            return;
        }
        log.info("[全局事件] {}事件触发了... processDefinitionId:{},processInstanceId:{}", event.getType().name(), event.getProcessDefinitionId(), event.getProcessInstanceId());
        EventHandler eventHandler = handlers.get(event.getType());
        if (eventHandler != null) {
            eventHandler.handler(event);
        }

    }

    /**
     * @return whether or not the current operation should fail when this listeners execution throws an exception.
     */
    @Override
    public boolean isFailOnException() {
        return false;
    }


}

```

> 事件统一处理类

```java
/**
 * @program: workflow-engine
 * @description: Activiti事件统一处理类
 * @packagename: com.wk.workflow.service.act.listener
 * @author: 振振
 * @date: 2022-04-20 16:25
 **/
public interface EventHandler {

    Boolean pass();

    ActivitiEventType getType();

    void handler(ActivitiEvent event);
}
```

> 某个具体的实现类

```java
/**
 * @program: workflow-engine
 * @description: 任务创建时
 * @packagename: com.wk.workflow.service.act.listener.impl
 * @author: 振振
 * @date: 2022-04-20 16:37
 **/
@Component
public class ActVariableUpdatedEventListener implements EventHandler {

    private static final Logger log= LoggerFactory.getLogger(ActVariableUpdatedEventListener.class);

    @Override
    public Boolean pass() {
        return Boolean.FALSE;
    }

    @Override
    public ActivitiEventType getType() {
        return ActivitiEventType.VARIABLE_UPDATED;
    }

    @Override
    public void handler(ActivitiEvent event) {
        log.info("[全局事件] {} handler executing...", event.getType().name());
    }
}
```


# 流程变量

<b style="color:orange">关于流程变量需要注意以下几点：</b>

1. 流程变量可以干预流程的运转。
2. 流程变量可以存储业务数据。
3. 流程变量是有作用域的（从大到小）：流程实例>任务>执行实例
4. 可以使用流程变量进行任务分派。

## UEL表达式



```
${assignee} // 单个名字
```



```
${deployment.name} // 对象的某个属性
```



### UEL方法

- 🔗 [activiti方法表达式method-expression用法](http://www.yayihouse.com/yayishuwu/chapter/2304) 

```
${condition.validate(ruleId)}
```

> 使用UEL方法设置分支条件

![image-20221014171243155](https://tva1.sinaimg.cn/large/008vxvgGly1h74xmmxm0bj31bu0u0488.jpg)

> 验证UEL方法，匹配 ruleId=5 的分支

![image-20221014171556750](https://tva1.sinaimg.cn/large/008vxvgGly1h74xq17ankj31bu0u0n96.jpg)

> 实例启动成功后，符合[王五]审的预期

![image-20221014171710763](https://tva1.sinaimg.cn/large/008vxvgGly1h74xr8ym7rj31vg0dydi6.jpg)

> 分别传入[李四]和[王五]验证审批，验证结果如下：

| ![image-20221014171756725](https://tva1.sinaimg.cn/large/008vxvgGly1h74xwjtht3j31bu0u0qbe.jpg) | ![image-20221014171922926](https://tva1.sinaimg.cn/large/008vxvgGly1h74xwp37bcj31bu0u042u.jpg) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |



**设置流程变量**：

1. 启动流程时设置
2. 任务完成时设置
3. 为运行时流程实例设置（尚未完成的流程实例）
4. 通过当前任务设置流程变量

**获取流程变量**

相关表：

- 流程变量表(act_ru_variable)
- 历史流程变量表(act_hi_varinst)
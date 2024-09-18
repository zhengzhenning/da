# 网关

通俗讲，网关用来控制流程，不同网关的流程控制方式不一样。在Activiti7有4种网关：排他、并行、包含、事件。

## 排他网关

排他网关，选择符合条件（true）的一个分支进行流程推进。

为此，我们关系的情况有可能有3种：

1. 符合一个条件
2. 符合多个条件
3. 不符合条件

假如符合的条件不止一个，Activit7默认选择第一个命中的，同理如果过一个符合条件的都没有，则抛异常。

官网给出依据：

![image-20220708140852305](https://tva1.sinaimg.cn/large/008vxvgGly1h74vd1yv1fj30wk0cwwgt.jpg)

示例图：

![image-20220708141241734](https://tva1.sinaimg.cn/large/008vxvgGly1h74vd2ono3j30x00noaa1.jpg)



## 并行网关

并行网关的基本思想来自：分治思想，即[FORK/JOIN](https://en.wikipedia.org/wiki/Fork–join_model)。

![image-20220708144837985](https://tva1.sinaimg.cn/large/008vxvgGly1h74vd287adj30x40cyq3l.jpg)

在流程审批中，会签的实现方式有两种：

1. 使用多实例会签。
2. 并行网关实现会签。

不论使用哪种方式实现，一般地需关注2个问题：

1. 如何推送"待审批人"给业务方
2. 如何在不影响"非会签"模式下，实现多种模式并存。比如：或签下，无具体的assignee值；会签下，多个assignee值共存等问题。



## 包含网关

包含网关：排他网关与并行网关的组合。

与**排他网关**的区别：当条件**满足多个分支时，多个分支流程都会被触**发；排他网关则默认只生效第一条分支。

与**并行网关**的区别：包含网关**可以设置条件**并且可以生效，并行网关即使设置了条件也无法生效。

## 事件网关

不在讨论范围，感兴趣可以看：
🔗 [https://www.activiti.org/userguide/#bpmnEventbasedGateway](https://www.activiti.org/userguide/#bpmnEventbasedGateway)

# 任务

任务类型有很多，这里只讲一种：用户任务（User Task）

## 用户任务

![bpmn.user.task](https://tva1.sinaimg.cn/large/008vxvgGly1h74vd3csknj302t028jr6.jpg)

在工作流中，需要人参与的，都使用这一任务类型。对于用户任务（User Task）的使用，可以指定特定一个人、候选人、候选组。对于用户任务（User Task）的使用要点是**给用户任务设置一些属性**：

- 截止日期
- 办理人（assignee） ⚠️ 或签模式下assignee是空的，需要去 `act_ru_identitylink` 找
- 候选人、候选组等等
# 表结构

4类17张表，对于表结构，熟悉数据的流向很重要，比如：

1. 部署流程时，会向哪些表插入数据？
2. 启动实例时，会向哪些表插入数据？
3. 任务办理时，会向哪些表插入数据？

## 命名规则

![image-20210816155645097](https://tva1.sinaimg.cn/large/008vxvgGly1h74vc9csj1j315m09qq5s.jpg)

![image-20210819094148109](https://tva1.sinaimg.cn/large/008vxvgGly1h74vc8vekaj30uv0u0t9y.jpg)





# API接口

![api.services](https://tva1.sinaimg.cn/large/008vxvgGly1h74vc8chlsj30dr05rgm2.jpg)



| Service接口                                                  | 说明                       |
| ------------------------------------------------------------ | :------------------------- |
| [RepositoryService](https://www.activiti.org/javadocs/index.html) | Activiti的资源管理接口     |
| RuntimeService                                               | Activiti的流程运行管理接口 |
| TaskService                                                  | Activiti的任务管理接口     |
| HistoryService                                               | Activiti的历史管理接口     |
| ManagementService                                            | Activiti的引擎管理接口     |


# 流程部署

进行流程部署时，需要**关注3张表，忽略1张表：**

1. **ACT_RE_DEPLOYMENT** 部署一次新增一条记录，是流程定义部署记录表。
2. **ACT_RE_PROCDEF ** 此表的KEY_字段用来区分不同的流程定义（如：工单流程、白名单流程、请假流程、辞职流程等）。
3. **ACT_GE_BYTEARRAY** ：`.bpmn` 、 `.png`等二进制文件都放在这里。
4. ACT_GE_PROPERTY ： 操作属性表，每次操作数据库，这张表都会变动。

基于模型部署的时候需要解决一个问题：**==流程图数据结构的解析与反解析==**。

## 流程图数据结构解析与反解析

开发工作流引擎，需要前后端定义好流程图的数据结构，一般有两种：**JSON** 或 **XML**，这一步决定了流程能否成功部署。

> **==JSON 2 BpmlModel 2 XML==**

```java
// modelEditorSource 为JSON结构时
ObjectNode objectNode = (ObjectNode) new ObjectMapper().readTree(modelEditorSource);
BpmnModel bpmnModel = new BpmnJsonConverter().convertToBpmnModel(objectNode);
byte[] bytes = new BpmnXMLConverter().convertToXML(bpmnModel);
new String(bytes, StandardCharsets.UTF_8);
```

JSON格式的流程图：

![image-20220523113023420](https://tva1.sinaimg.cn/large/008vxvgGly1h74v9mp03ij30x20u0wj4.jpg)

转换成XML后：

![image-20220523113357725](https://tva1.sinaimg.cn/large/008vxvgGly1h74v9lznm5j30xe0u07bd.jpg)

> **==XML 2 BpmnModel 2 XML==**

略。
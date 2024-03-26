# 流程模型

使用流程设计器设计**流程模型**，可以使用**Camunda Modeler**。也可以使用 **IDEA actiBPM插件（IDEA要使用2019版）**。

设计完流程后可以导出 `.bpmn` 文件，这个文件一般在**单测环节**使用：

<img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74v8zbi7aj30io0cc74w.jpg" alt="image-20220630214012926" style="zoom:25%;" />

使用 <b style="color:red">Camunda Modeler工具</b> 开发工作流引擎时需要注意改两个地方

⚠️ ：仅针对**==版本7==**，版本8的格式又不一样了

|                          选择版本7                           |                       输出bpmn格式文件                       |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![image-20220420172131237](https://tva1.sinaimg.cn/large/008vxvgGly1h74x1mzylij30io0cc74w.jpg) | ![image-20220413134125324](https://tva1.sinaimg.cn/large/008vxvgGly1h74x1r45o0j30ck07wglw.jpg) |

**改动1：** **camunda:assignee, 需要换成activiti:assignee**

**改动2：** 把**约束标签**替换成这个

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:activiti="http://activiti.org/bpmn" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_03io3g1"
                  targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="4.9.0"
                  modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.15.0">
```


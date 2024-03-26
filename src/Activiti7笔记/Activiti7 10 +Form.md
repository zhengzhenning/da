# 表单


⚠️ **Activiti7 **移除了 **IdentityService** 和 **FormService** 。因此对于 Activiti6 官方文档提供的实例代码无法在7中使用。

和表单结合的意思就是在流程中，手动添加表单，类似于人工卡点的意思。表单形式有两种：

1. 自带 

2. **自定义**。

实际使用时，一般使用 **【② 自定义】** 方式。这同 Java 语法中的基本类型和引用类型一样，既有内置也可自定义。

***All information relevant to a business** process is either **included in the process variables themselves** or **referenced through the process variables*** 📝 在Activiti7中，所有业务相关的信息（数据）都是通过**流程变量**呈现的：

```java// Activiti7中，流程变量的数据结构
Map<String,String>
```

捋清**表单属性与流程变量的映射关系**，是实现**工作流表单引擎**的关键：

> **Properties are derived from process variables, but they don’t have to be stored as process variables.** For example, a process variable could be a JPA entity of class Address. And a form property `StreetName` used by the UI technology could be linked with an expression `#{address.street}`  
>
> Analogue, the properties that a user is supposed to submit in a form can be stored **as a process variable** or **as a nested property in one of the process variables with a UEL value expression** like e.g. `#{address.street}` .
>
> Analogue **the default behavior of properties that are submitted is that they will be stored as process variables** unless a `formProperty` declaration specifies otherwise. 📝 默认情况下，表单属性会当做流程变量进行存储，除非使用`formProperty`进行额外声明。

Also type conversions can be applied as part of the processing between form properties and process variables.
![image-20220727135533165](https://tva1.sinaimg.cn/large/e6c9d24ely1h4lfz5yvkyj21ko0rqdnm.jpg)

其他XML示例：

> 官方示例2

```xml
<startEvent id="start">
  <extensionElements>
    <activiti:formProperty id="speaker"
      name="Speaker"
      variable="SpeakerName"
      type="string" />

    <activiti:formProperty id="start"
      type="date"
      datePattern="dd-MMM-yyyy" />

    <activiti:formProperty id="direction" type="enum">
      <activiti:value id="left" name="Go Left" />
      <activiti:value id="right" name="Go Right" />
      <activiti:value id="up" name="Go Up" />
      <activiti:value id="down" name="Go Down" />
    </activiti:formProperty>

  </extensionElements>
</startEvent>
```

> 官方示例2

```xml
<startEvent>
  <extensionElements>
    <activiti:formProperty id="numberOfDays" name="Number of days" value="${numberOfDays}" type="long" required="true"/>
    <activiti:formProperty id="startDate" name="First day of holiday (dd-MM-yyy)" value="${startDate}" datePattern="dd-MM-yyyy hh:mm" type="date" required="true" />
    <activiti:formProperty id="vacationMotivation" name="Motivation" value="${vacationMotivation}" type="string" />
  </extensionElements>
</userTask>
```

## 在activiti7中使用表单


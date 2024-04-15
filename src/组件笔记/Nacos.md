# Nacos

> [!important]
> 构建云原生应用的动态服务发现、配置管理和服务管理平台

- [官方文档](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html) 。文档提供 `Spring`、 `Spring Boot`、`Spring Cloud` 快速集成指南，应当以文档为准，不必赘述。
- [Spring Cloud Alibaba Nacos Config](https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-config) 。



# 解决方案

## 共享配置方案设计

[SCA Nacos Config 共享配置方案设计](https://github.com/alibaba/spring-cloud-alibaba/issues/141)，可以解决多地区、多环境问题。比如：项目独立部署北京、上海、成都等地区；项目部署测试环境、回装环境、正式环境等环境。

该方案基于 `spring.cloud.nacos.shared.dataids` 配置实现共享，示例：

```yaml
spring.cloud.nacos.shared.dataids=global.yaml,app-common.yaml,app-local-common.yaml
```

其配置文件读取优先级如下：

![配置文件读取优先级](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1gsjym4xzuvj30pk0iwdid.jpg)

在《安全治理》的部署模式中，存在多环境依赖于多配置的问题，此类问题可通过 **Nacos 共享配置方案**解决。

![安全治理配置管理的痛点](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1grm6ucrsgwj31lh0u0dpi-20240415170816869.jpg)

此处不赘述方案实现步骤，仅提供解决思路：按照Nacos的配置文件加载顺序，在 `spring.cloud.nacos.shared.dataids` 声明需要加载的配置文件集，一般需要提供通用公共配置文件以及微服务自身的配置文件。

> [!tip] 
>
> 100












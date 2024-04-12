# [Nacos](https://github.com/alibaba/nacos)

# 动态配置 ==*==

![image-20210717210645847](https://tva1.sinaimg.cn/large/008i3skNgy1gsk927gkt0j31cm0fgdi7.jpg)

**命名空间**

使用场景：不同环境的区分隔离，如开发环境、生产环境、测试环境。

**配置**

**Data ID**

官方称其为“配置集ID”,用来划分系统的配置集。一个系统或应用可以包含多个配置集，每个配置集都可以被一个有意义的名称标识，即Data ID。*官方建议：Data ID 通常采用类 Java 包（如 com.taobao.tc.refund.log.level）的命名规则保证全局唯一性。此命名规则非强制。*

<b style="color:red">为什么以及什么时候使用Data ID ?</b>

**GROUP**

官方称其为“配置分组”，对**配置集**进行分组。默认分组名：`DEFAULT_GROUP`

使用场景：不同的应用或组件使用了相同的配置类型。





# 服务发现 ==*==

![image-20210717210624005](https://tva1.sinaimg.cn/large/008i3skNgy1gsk91tyg27j31c60getbh.jpg)



# 动态DNS

![image-20210717210538655](https://tva1.sinaimg.cn/large/008i3skNgy1gsk911ye7xj31bo0h0n03.jpg)

[nacos架构](https://nacos.io/zh-cn/docs/architecture.html)

# SpringBoot Nacos

 **必须使用 bootstrap.properties (bootstrap.yml) 配置文件来配置Nacos Server 地址**

bootstrap.properties

```properties
spring.cloud.nacos.config.server-addr=127.0.0.1:8848
```

bootstrap.yml

```yml
spring:
  cloud:
    nacos:
      # 生产环境将以下三个key 配置在密文中
      # 1. 服务器地址
      server-addr: 10.50.125.143:31848
      discovery:
        server-addr: ${spring.cloud.nacos.server-addr}
      config:
        server-addr: ${spring.cloud.nacos.server-addr}
        # 共享以下配置文件列表
        shared-dataids: aqzl-global.yml,terminal-data.yml,application.yml
        refreshable-dataids: true
        file-extension: yaml
```

# SpringBoot

配置文件加载顺序：

1. bootstrap.yml
2. application.yml
3. application-xxx.yml  (xxx通过 spring.profile.active指定)



# 共享配置方案设计

多个应用间共享一些通用的配置

## 自定义的方式来命名 Data Id

配置文件读取的优先级：

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gsjym4xzuvj30pk0iwdid.jpg)

多个共享配置间的一个**优先级的关系我们约定**：**按照配置出现的先后顺序**，即**后面的优先级要高于前面的**。
风险：扩展性不强，且是最后读取加载到配置文件，比application.yml加载还慢。

# 业务场景

## 多地多环境

### 方案

> 场景诉求
>
> ![image-20210618100048104](https://tva1.sinaimg.cn/large/008i3skNgy1grm6ucrsgwj31lh0u0dpi.jpg)
>
> 安全治理是一个典型的多环境、多配置场景。



关注点:

![image-20210511113848782](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9yz4p8j31cc07m75y.jpg)

![image-20210511113928062](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9xitaxj319o08gtaj.jpg)

![image-20210511114003729](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9zh8t9j318c080tac.jpg)

![image-20210511114256094](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9wkyygj31ka0b8jtn.jpg)

spring-cloud-config已经支持，具体见文件
https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/Nacos-config

共享配置方案：https://github.com/alibaba/spring-cloud-alibaba/issues/141

**业务场景**

![IMG_7E8A1467FC6A-1](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9zvd1cj312w0u077k.jpg)

![image-20210511135420792](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9v7i0rj31j80nags1.jpg)

![image-20210511135732608](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9x2fb0j31ha0gggok.jpg)

**Data ID 能解决安全治理的问题**

![image-20210511140223143](https://tva1.sinaimg.cn/large/008i3skNgy1grlba0dtzuj31gp0u0aet.jpg)

![image-20210511165646668](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9xzp1zj31he0ewad7.jpg)

> ![image-20210616155254611](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9wdwjfj31j80nags1.jpg)
>
> 配置单一原则。

以`terminal-data`为例：

```yaml
#bootstrap.yml
spring:
  cloud:
    nacos:
      # 生产环境将以下三个key 配置在密文中
      # 1. 服务器地址
      server-addr: 10.50.125.143:31848
      discovery:
        server-addr: ${spring.cloud.nacos.server-addr}
      config:
        server-addr: ${spring.cloud.nacos.server-addr}
        # 共享以下配置文件列表
        shared-dataids: aqzl-global.yml,resource-center.yml
        refreshable-dataids: true
        file-extension: yaml
```

**aqzl-global**

```
spring:
  # KAFKA
  kafka:
    bootstrap-servers: 10.50.125.141:9092
  # REDIS
  redis:
    host: 10.50.125.142
    port: 6379
    password: dIdjkMSOk-129sJJEKwkk1
  # MONGODB
  data:
    mongodb:
      host: 10.50.125.142
      port: 27017
      username: root
      password: 123456
      authentication-database: admin
  # INFLUX
  influx:
    # 服务器地址
    url: http://10.50.125.140:8086
    # 数据库名：终端数据_数据库（库下有）
    database: terminal_db
    # 用户
    user: admin
    # 密码
    password: super.123.abc
  # MYSQL
  datasource:
    username: root
    password: hxc@069.root_mysql
# FDFS
fdfs:
  tracker-list: 10.50.125.140:22122
  storage: 10.50.125.140
db:
  mysql:
    url: 10.50.125.141:3306 
custom:
  parameter:
    flag: nacosEnv
    # 全局变量 - 公众微信模板id
    templateid-public: JJajTPvGKKRnKVB3oSuRZfalnjQ0kxEXzGxxebm5__I
    # 全局变量 - 从业微信模板id
    templateid-practitioners: JJajTPvGKKRnKVB3oSuRZfalnjQ0kxEXzGxxebm5__I
    # 全局变量 - 行业端微信模板id
    templateid-industry: JJajTPvGKKRnKVB3oSuRZfalnjQ0kxEXzGxxebm5__I
    # 全局变量 - 企业端微信模板id
    templateid-company: JJajTPvGKKRnKVB3oSuRZfalnjQ0kxEXzGxxebm5__I
    # 全局变量 - 报告生成微信模板id
    templateid-report: d_PSk5dGjF8j624YH3sazocT1OfQYqpJHqpKkOW3m5A
    # 全局变量 - 审核提醒微信模板id
    templateid-audit-remind: QhjIkqUa2jL9dQxVNRpakBB2YbxKn6SjiAsA7QmIE2o
    # 全局变量 - 审核通过微信模板id
    templateid-approved: M5r-1hb1x9r1ZAgv3Tv-LBq7uTesWi9uRkCNg6weIqo
    # 全局变量 - 审核不通过微信模板id
    templateid-not-approved: WPqa_wL3XSxs3emTP7J_kGcWK7UoEl-_ny02bVhXv68
    # 全局变量 - 报警类微信模板id
    templateid-alarm: AtuNi_hgJ4sCykbUwsLWTMc-2Hbcq4f9H8e4fq5OXKU
    # 全局变量 - 微信跳转（行、司、众）
    uri-industry: http://dev.chengkebus.com/
    # 全局变量 - 微信跳转（企）
    uri-company: http://dev1.chengkebus.com/
    host-http: http://10.50.125.143:32186
    #####################################
# 用户中心
wk:
  user:
    center:
      # address: user-center:8080
      address: 10.50.125.143:30080
```

**dev** 和 nacos里的 terminal-data.yml保持一致

```yaml
spring:
  influx:
    database: terminal_db
  data:
    mongodb:
      database: terminal-data    #指定操作的数据库
      autoIndexCreation: true
  cloud:
    nacos:
      discovery:
        server-addr: 10.50.125.143:31848
  kafka:
    # 生产者
    producer:
      # 重试次数
      retries: 3
      # 批量发送消息数量
      batch-size: 16384
      # 32MB的批处理缓存区
      buffer-memory: 33554432
    # 消费者
    consumer:
      # 是否开启自动提交
      enable-auto-commit: true
      # 自动提交的时间间隔
      auto-commit-interval: 1000
      # 最早未被消费的offset earliest latest
      auto-offset-reset: earliest
      # key的解码方式
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      # value的解码方式
      value-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      # 默认消费者组
      group-id: group_terminal_data
      #location_consumers
      # 批量一次最大拉取数据量
      max-poll-records: 500
  redis:
    # 数据库索引
    database: 0
system:
  param:
    default_district_priority: 430000,440000,410000,150000,230000,650000,420000,210000,370000,320000,310000,610000,520000,500000,540000,340000,350000,460000,630000,450000,640000,360000,330000,130000,810000,820000,710000,620000,510000,220000,120000,530000,140000,110000
    # Influxdb线上/开发时区区分：开发加时区
    infludb_time_zone_controll: 8
```

输出：

![image-20210616161914877](https://tva1.sinaimg.cn/large/008i3skNgy1grlb9yg12dj31gp0u0gsr.jpg)

验证：

```java
// 通过 ConfigurableApplicationContext 验证配置变量的值是否正确
@SpringBootApplication
public class GovernanceCenterApplication {


    public static void main(String[] args) {

        ConfigurableApplicationContext context = SpringApplication.run(GovernanceCenterApplication.class, args);
        System.err.println("=====================================================================");
        String userCenterAddress = context.getEnvironment().getProperty("wk.user.center.address");
        System.err.println("用户中心：" + userCenterAddress);
        String flag = context.getEnvironment().getProperty("custom.parameter.flag");
        System.err.println("配置环境标识：" + flag);
        System.err.println("=====================================================================");
    }
}
```

> ![image-20210618165102324](https://tva1.sinaimg.cn/large/008i3skNgy1grmip7a3krj30yw0a0q3y.jpg)
>
> 正确读取nacos里的配置文件✅

**配置读取顺序（优先级）**：

待补充说明一张图。

### 风险


# [Prometheus](https://prometheus.io)

![architecture](https://tva1.sinaimg.cn/large/008i3skNgy1gsffp140x9j311j0mjjtq.jpg)



# [Metric Types](https://prometheus.io/docs/concepts/metric_types/)

*四种监控指标*，可以参考[这篇](https://blog.csdn.net/liangcha007/article/details/86699013?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.base)。

## Counter



```java
import io.prometheus.client.Counter;
class YourClass {
  static final Counter requests = Counter.build()
     .name("requests_total").help("Total requests.").register();

  void processRequest() {
    requests.inc();
    // Your code here.
  }
}
```



## Gauge

计量器，可增可减，可升可降。

一般用于：

- 监测并发请求数量
- 监测CPU使用率
- 监测JVM线程数量等

```java
class YourClass {
  static final Gauge inprogressRequests = Gauge.build()
     .name("inprogress_requests").help("Inprogress requests.").register();

  void processRequest() {
    inprogressRequests.inc();
    // Your code here.
    inprogressRequests.dec();
  }
}
```



## Summary

```java
class YourClass {
  static final Summary receivedBytes = Summary.build()
     .name("requests_size_bytes").help("Request size in bytes.").register();
  static final Summary requestLatency = Summary.build()
     .name("requests_latency_seconds").help("Request latency in seconds.").register();

  void processRequest(Request req) {
    Summary.Timer requestTimer = requestLatency.startTimer();
    try {
      // Your code here.
    } finally {
      receivedBytes.observe(req.size());
      requestTimer.observeDuration();
    }
  }
}
```



## Histogram

```java
class YourClass {
  static final Histogram requestLatency = Histogram.build()
     .name("requests_latency_seconds").help("Request latency in seconds.").register();

  void processRequest(Request req) {
    Histogram.Timer requestTimer = requestLatency.startTimer();
    try {
      // Your code here.
    } finally {
      requestTimer.observeDuration();
    }
  }
}
```

# [命名规范](https://prometheus.io/docs/practices/naming/)

# 网络

![image-20210713170454537](https://tva1.sinaimg.cn/large/008i3skNgy1gsffldhokij316006ugno.jpg)

> [PushProxy](https://github.com/prometheus-community/PushProx)



# 网阔监控

## 基础信息

开发环境api地址：
prometheus：http://10.50.125.141:9090
aletmanager：http://10.50.125.141:9093

## 系统结构

```
原始数据
	原始数据查询
	
报警管理
	规则模板（低优先级）
	规则管理
	报警记录

推送管理
	全局配置
	接收人
	路由规则（主规则、分支规则）
	消息模板
	静默配置

监控中心：
	监控模板
	数据监控快照

系统设置：
	项目管理
	操作日志（低优先级）
```

## 核心技术

promethues相关知识与配置、aletmanager配置及原理。

> vcolco-lookout 现阶段

![image-20210728141052416](https://tva1.sinaimg.cn/large/008i3skNgy1gswmuvdxefj31c60s2juh.jpg)

## 待监控

**JVM监控**

> 为什么要监控JVM？
>
> - 为排查问题提供科学可靠的线索
> - 结合jvm监控数据可以对应用程序功能及性能进行一定程度的优化
>
> GC的次数，一次GC所需要的时间
> GC各个时代的数据
> 进程占用的CPU
> 进程占用的内存
> 堆内存
> 线程数
> 类加载情况
> 业务名

**监控JVM线程**

| JVM线程                                      | 是否监控 |
| :------------------------------------------- | -------- |
| 当前的活动线程数（包括：守护线程、用户线程） | 是       |
| 当前的守护线程活动线程数                     | 是       |
| JVM启动以来的线程数量                        | 是       |
| 当前处于就绪状态的线程数                     | 是       |
| 当前处于运行状态的线程数量                   | 是       |
| 当前处于阻塞状态的线程数量                   | 是       |
| 当前处于等待状态的线程数量                   | 是       |
| 当前已执行完的线程的数量                     | 是       |
|                                              |          |

<b style="color:red">为什么要监控JVM的线程？</b>

**监控JVM GC**

**监控JVM 堆**

**HTTP连接数**

**Redis健康检查**

```

```

**MySQL健康检查**

**MongoDB健康检查**

**InfluxDB健康检查**

**Kafka健康检查**

**RabbitMq健康检查**




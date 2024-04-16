# Prometheus

> [!important]
>
> Prometheus 是开源的监控和警报工具套件，适用于微服务、容器和动态计算环境，在 Kubernetes 等容器编排平台的社区中非常流行。
>
> - [https://prometheus.io](https://prometheus.io) 

![architecture](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1gsffp140x9j311j0mjjtq.jpg)



# 指标类型（Metric Types）

- [https://prometheus.io/docs/concepts/metric_types/](https://prometheus.io/docs/concepts/metric_types/) 指标介绍
- Java 集成 Prometheus，参考[这篇](https://blog.csdn.net/liangcha007/article/details/86699013?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.base)。

## 计数器（Counter）

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



## 计量器（Gauge）

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



## 摘要（Summary）

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

## 直方图（Histogram）

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

# 命名规范

- [https://prometheus.io/docs/practices/naming/](https://prometheus.io/docs/practices/naming/)  命名规范最佳实践






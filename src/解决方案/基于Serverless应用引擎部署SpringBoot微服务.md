# 基于Serverless应用引擎部署SpringBoot微服务

Serverless 应用引擎 SAE（Serverless App Engine）是一款零代码改造、极简易用、自适应弹性的应用全托管平台。SAE能够让您免运维IaaS和K8s，秒级完成从源代码、代码包、Docker镜像部署任意语言的在线应用（例如微服务、Job任务）到SAE，并自动伸缩实例按使用量计费，开箱即用日志、监控、负载均衡等配套能力。**SAE优势：让企业从容应对突发性流量洪流和灵活启停应用环境，降低资源成本**。

![p862404](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/p862404.png)

# 总体思路

对于测试环境：

1. 通过 `Jenkins` 流水线完成jar包的镜像制作并推送至阿里云镜像仓库
2. 在阿里云SAE控制台上部署应用

对于生产环境：

1. 基于云效流水线一键部署



# 常见问题

1. 网络问题，比如：SAE需要被公网访问、SAE需要访问公网等等，详见：[SAE网络相关概念和能力](https://help.aliyun.com/zh/sae/sae-network-related-concepts-and-capabilities/?spm=a2c4g.11186623.help-menu-118957.d_2_3.eb6c707606g3h0)。

1. 日志采集问题。微服务多节点不方便查阅日志，需要将日志集中上报，详见：[设置日志收集至SLS](https://help.aliyun.com/zh/sae/set-log-collection-to-sls-2-0?spm=a2c4g.11186623.help-menu-118957.d_2_2_9_0.8dee50aausSvAP)。

   

   

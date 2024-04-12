

# [Helm](https://helm.sh/zh/)

![image-20210201171914273](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgrnq4i4bj313z0u0dl6.jpg)

![Helm 架构图（来自 IBM Developer Blog）](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgrnoxlzlj30rq0ju75f.jpg)

![什么是Helm](https://tva1.sinaimg.cn/large/008i3skNgy1gse42mrhwlj31qw0fk78x.jpg)





![helm](https://tva1.sinaimg.cn/large/008i3skNgy1gse42iunz8j31la0sk7c9.jpg)

![什么是helm-jessicaCherry](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgrnp6ge9j31t20agtbm.jpg)

> Helm中的Chart是什么？干什么用？怎么用？

![Helm有什么用](https://tva1.sinaimg.cn/large/008i3skNgy1gse42kn03lj30v00fuwg2.jpg)



创建可配置化的部署环境。（一键部署的关键）

![image-20210201172744312](https://tva1.sinaimg.cn/large/008i3skNgy1gse42k24x8j30wg08q40b.jpg)



# 安装Helm

![安装helm的先决条件](https://tva1.sinaimg.cn/large/008i3skNgy1gse42ku9jfj30tu0fk75k.jpg)

[1.安装minikube](https://minikube.sigs.k8s.io/docs/start/)

2.启动minikube

```
minikube start
```

![minikube start](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgrnpoeq8j30v80u0ago.jpg)

![vbox minikube](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgrns16ncj31co0tqq74.jpg)

3.查看kube版本：

```
kubectl version
```

![kubectl version](https://tva1.sinaimg.cn/large/008i3skNgy1gse42lf0v4j31k00ic0zg.jpg)

4.查看kube信息

```
minikube dashboard
```

5.安装第一个集群”hello-minikube“

官网镜像不可用，参考[这个](https://blog.csdn.net/qq_43920024/article/details/112734814)。

6.成功后访问效果：

![启动第一集群](https://tva1.sinaimg.cn/large/008i3skNgy1gse42jhtdyj31do0u041z.jpg)

7.安装Helm [参考](https://github.com/helm/helm#install)

![helm的使命](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgrnskz12j319e086q3s.jpg)

```
brew install helm
```

8.创建第一个`hellochart`

```powershell
# buildachart 是
helm create buildachart 
```

9.上传`hellochart`到[chart repo(仓库)](https://helm.sh/zh/docs/topics/chart_repository/) 

10.



# 使用Helm

## value.xml

> **Helm的value.xml 结合 K8s 模板(templates)** ，
>
> 比如：values.xml 与 deployment.yaml相结合。

在value.xml声明k8s的相关配置，再通过{ .Values.valueName } 方式引用，比如：

`values.xml`：

![image-20210723134138051](https://tva1.sinaimg.cn/large/008i3skNgy1gsqtwwl9hij30ji08sq36.jpg)

K8s模板：`deployment.yaml`：

![image-20210723134106818](https://tva1.sinaimg.cn/large/008i3skNgy1gsqtweqwvlj30u60g2gmx.jpg)



## 与子CHART共享模板

![image-20210317163225910](https://tva1.sinaimg.cn/large/008i3skNgy1gse42mbpnyj31k20u0tcs.jpg)

![父子chart共享模板](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgrnsxe3rj31or0u0q7o.jpg)

# 管理Chart

每次发版迭代chart时，都要打包到Chart仓库里。

## helm create

## helm package *



# 调试Helm

## [helm template](https://helm.sh/zh/docs/helm/helm_template/)

## [helm test](https://helm.sh/zh/docs/helm/helm_test/)

## helm lint 

验证chart是否遵循最佳实践。

```shell
# 检查chart文件的依赖项和模板配置是否正确
helm linit chartName/
```



## helm install *

```shell
# 检查基于chart的部署是否符合预期
helm install [test] [2021.4.16/] --debug --dry-run
```



```
# 渲染模板
helm template --debug 
```

```
helm template [NAME] [CHART] [flags]
```



```
# 查看安装在服务器上的模板
helm get manifest
```



# 

[十分钟，创建一个Helm chart](https://mp.weixin.qq.com/s/RvfGfjTcHn_ocXqwozUs0A)

[mac安装minikube](https://www.jianshu.com/p/3b419cc7d290)

[k8s 部署利器 helm v3 安装及使用指南](https://cloud.tencent.com/developer/article/1647255)

[自定义chart](https://blog.csdn.net/u010606397/article/details/112062312)


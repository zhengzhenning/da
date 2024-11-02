# CAT

> [!important]
>
> CAT 是基于 Java 开发的实时应用监控平台，为美团点评提供了全面的实时监控告警服务。

# 部署环境

- 虚拟机 Linux Centos8

```
[root@localhost cat]# uname -a
Linux localhost.localdomain 4.18.0-348.7.1.el8_5.x86_64 #1 SMP Wed Dec 22 13:25:12 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
```

- JAVA8

```
[root@localhost cat]# java -version
java version "1.8.0_431"
Java(TM) SE Runtime Environment (build 1.8.0_431-b10)
Java HotSpot(TM) Server VM (build 25.431-b10, mixed mode)
```

- Tomcat7

```
[root@localhost tomcat]# ls
apache-tomcat-7.0.99.tar.gz   tomcat7
```

- Maven3

```
[root@localhost tomcat]# mvn -v
Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: /opt/maven/apache-maven-3.6.3
Java version: 1.8.0_431, vendor: Oracle Corporation, runtime: /usr/java/jdk1.8.0_431/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: "linux", version: "4.18.0-348.7.1.el8_5.x86_64", arch: "i386", family: "unix"
```


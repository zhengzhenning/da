# 服务端操作

## 查看基础信息

以 `Linux/Mac` 为例，查看前需确保下手环境变量已经配置到配置文件（如 `.bash_profile`）里。

```shell
# 查看Oracle数据文件的根目录
echo $ORACLE_BASE

# 查看Oracle软件的安装目录
echo $ORACLE_HOME
```

![image-20240428113532750](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240428113532750.png)

## 查看Net监听状态

```
# 查看 Oracle Net 监听器的状态
lsnrctl status 
```

![image-20240426162950086](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240426162950086.png)

## 登录服务端O库

```shell
# 以系统管理员的身份登录
sqlplus / as sysdba

# 或其他用户身份登录 sqlplus username/password@hostname:port/service_name
sqlplus system/ztOra#2024@localhost:1521/dvdgdb
```

![image-20240426163329519](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240426163329519.png)

## 查看O库日志

Alert 日志提供了关于 Oracle 实例和数据库警告、错误和其他重要事件的信息。

```shell
cd $ORACLE_BASE/diag/rdbms/<db_name>/<db_unique_name>/trace
less alert_<db_name>.log
```

![image-20240426172656742](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240426172656742.png)

Listener 日志记录了 Oracle Net 监听器的活动，包括连接请求、错误和其他相关信息。

```shell
cd $ORACLE_HOME/network/admin/
less listener.log
```


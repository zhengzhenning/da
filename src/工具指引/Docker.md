# 注意事项

1. 拉取镜像慢时，需自行更换镜像源，并重载配置、重启Docker

```json
{
  "registry-mirrors": [
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://pee6w651.mirror.aliyuncs.com"
  ]
}
```



# 常用镜像

## MySQL

> 下载镜像

```shell
  sudo docker pull mysql:5.6
```

> 启动镜像

```shell
docker run -d --restart=always --name mysql \
-v /datas/mysql/data:/var/lib/mysql \
-v /datas/mysql/conf:/etc/mysql \
-v /datas/mysql/log:/var/log/mysql \
-p 3306:3306 \
-e TZ=Asia/Shanghai \
-e MYSQL_ROOT_PASSWORD=root \
mysql:5.6 \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_general_ci
```

```
-v /datas/mysql/data:/var/lib/mysql：将数据文件夹挂载到主机
-v /datas/mysql/conf:/etc/mysql：将配置文件夹挂在到主机，可以在宿主机放一份自定义 my.cnf文件，那么容器就会按自定义配置启动
-v /datas/mysql/log:/var/log/mysql：将日志文件夹挂载到主机
-p 3306:3306：将容器的3306端口映射到主机的3306端口
-e MYSQL_ROOT_PASSWORD=root：初始化root用户的密码
--character-set-server=utf8mb4：设置字符集
--collation-server=utf8mb4_general_ci：排序方式
```


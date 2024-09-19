# 常用镜像

## Mysql

启动 MySQL

```shell
docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=seata --publish 3306:3306 -d mysql:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```


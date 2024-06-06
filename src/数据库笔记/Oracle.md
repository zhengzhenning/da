# SQL调优

## 使用执行计划

### 使用 AUTOTRACE

在 `SQLPLUS `中执行：

```sql
set autot trace 
-- 该命令会运行SQL，但不显示运行结果，会显示执行计划和统计信息。
set autot off
-- 关闭AUTOTRACE
```

关注几个信息：

- `consistent gets` 表示逻辑读，单位是块。在进行SQL优化的时候，我们应该想方设法减少逻辑读个数。通常情况下**逻辑读越小，性能也就越好**。怎么通过逻辑读判断一个SQL还存在较大优化空间呢？如果SQL的逻辑读远远大于SQL语句中所有表的段大小之和（假设所有表都走全表扫描，表关联方式为HASH JOIN），那么该SQL就存在较大优化空间。
- `rows processed` 表示SQL一共返回多少行数据。做SQL优化的时候最关心这部分数据，因为可以根据SQL返回的行数判断整个SQL应该是走HASH连接还是走嵌套循环。如果 `rows  processed` 很大，一般走HASH连接；如果 `rows processed` 很小，一般走嵌套循环。

### 使用 EXPLAIN

在客户端执行：

```sql
-- 先执行：
explain plan for SQL语句;
-- 再执行：
select * from table(dbms_xplan.display); -- 普通模式
-- 或执行：
select * from table(dbms_xplan.display(NULL, NULL, 'advanced -projection')); -- 高级模式
```

### 使用带有 A-TIME 的执行计划

在客户端执行：

```sql
alter session set statistics_level=all;
```

或者在 SQL 语句中添加 hint ：

```sql
/*+  gather_plan_statistics */
```

然后执行：

```SQL
select * from table(dbms_xplan.display_cursor(null,null,'allstats last'));
```

## 定制执行计划

执行完 `EXPLAIN PLAN FOR` 后执行《SQL优化核心思想》提供的脚本：

```SQL
select case
         when access_predicates is not null or filter_predicates is not null then
          '*' || id
         else
          ' ' || id
       end as "Id",
       lpad(' ', level) || operation || ' ' || options "Operation",
       object_name "Name",
       cardinality "Rows",
       b.size_mb "Mb",
       case
         when object_type like '%TABLE%' then
          REGEXP_COUNT(a.projection, ']') || '/' || c.column_cnt
       end as "Column",
       access_predicates "Access",
       filter_predicates "Filter",
       case
         when object_type like '%TABLE%' then
          projection
       end as "Projection"
  from plan_table a,
       (select owner, segment_name, sum(bytes / 1024 / 1024) size_mb
          from dba_segments
         group by owner, segment_name) b,
       (select owner, table_name, count(*) column_cnt
          from dba_tab_cols
         group by owner, table_name) c
 where a.object_owner = b.owner(+)
   and a.object_name = b.segment_name(+)
   and a.object_owner = c.owner(+)
   and a.object_name = c.table_name(+)
 start with id = 0
connect by prior id = parent_id;
```



# 常见错误

## ORA-00972: 标识符过长

> ORA-00972: 标识符过长
>
> 长度尽量不超过30字符。



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


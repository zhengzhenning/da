---
title: Linux
order: 1
icon: file
category:
  - Linux	
  - 操作系统
---
# 配置文件

- 主配置文件：`/etc/bashrc`
- 用户配置文件：`~/.bashrc` 或 `~/.bash_profile`
- 系统级配置文件：`/etc/profile` 或 `~/.profile`

```
# 查看主配置文件
cat ~/.bashrc
```

![image-20240428114853311](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240428114853311.png)

```
# 查看用户配置文文件
cat ~/.bash_profile
```

![image-20240428115034316](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240428115034316.png)

# 常用指令

自上而下获取系统信息

## 系统信息

```shell
uname -a 
```

> Linux dvdgdb 3.10.0-957.el7.x86_64 #1 SMP Thu Nov 8 23:39:32 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux
>
> - `Linux`: 内核名称，表示这是一个基于 Linux 的操作系统。
> - `dvdgdb`: 系统的主机名。
> - `3.10.0-957.el7.x86_64`: 内核版本号和特定的发行版信息。`el7` 表示这是为 Red Hat Enterprise Linux 7 或 CentOS 7 编译的内核。
> - `#1`: 内核构建的序列号。
> - `Thu Nov 8 23:39:32 UTC 2018`: 内核编译完成的日期和时间。
> - `x86_64`: 系统使用的硬件架构，表示这是一个 64 位的 x86 架构系统。
> - `x86_64 x86_64 x86_64`: 连续三个 `x86_64` 表示用户级别的硬件平台、编译时的硬件平台和内核支持的硬件平台。通常它们是相同的，意味着系统运行在原生硬件上。
> - `GNU/Linux`: 表示这是一个使用 GNU 工具和库的 Linux 系统。

##  CPU信息

```shell
lscpu
```

> 

## CPU情况

## 内存情况

```
free -m 
```

## 带宽情况

```
netstat -tunlp | grep :1521
```

![image-20240426161500981](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240426161500981.png)

> `netstat -tunlp | grep :1521`  命令的输出显示了以下信息：
>
> - 一条提示信息表明，由于当前用户权限限制，无法查看所有进程的详细信息。只有 root 用户才能看到所有信息。
> - `tcp6` 表示这是一个 IPv6 上的 TCP 协议连接。
> - `0 0` 表示在接收队列和发送队列中都没有数据。
> - `:::1521` 表示该进程正在监听 IPv6 上的 1521 端口。`::` 是 IPv6 中的“任意地址”。
> - `:::*` 表示该监听对所有 IPv6 地址上的连接请求都是开放的。
> - `LISTEN` 表示该进程目前处于监听状态，等待新的连接请求。
> - `10600/tnslsnr` 表示监听 1521 端口的进程 ID 是 10600，而 `tnslsnr` 是 Oracle 数据库的网络监听进程，它负责监听进来的数据库连接请求。
>
> 总结来说，输出表明 Oracle 数据库的网络监听进程正在监听 1521 端口上的 IPv6 连接请求，且当前用户没有足够的权限查看所有相关进程信息。

## 磁盘IO情况

使用 `dd` 命令

```shell
# 测试写入速度：从/dev/zero（一个产生NULL字节的设备）复制1个1G大小的块到testfile文件中，以此来测试写入速度
dd if=/dev/zero of=testfile bs=1G count=1 status=progress

# 测试读取速度
dd if=testfile of=/dev/null bs=1G count=1 status=progress

# 移除测试文件
rm testfile
```

![image-20240428112509319](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240428112509319.png)


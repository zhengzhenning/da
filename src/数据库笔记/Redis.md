# Redis

![79da7093ed998a99d9abe91e610b74e7.jpg](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/79da7093ed998a99d9abe91e610b74e7.jpg.webp)

![70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg](https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg.webp)

# Redis 性能优化

引起Redis性能问题的原因有多种，以下是常见的几种：

- 大量key集中过期
- 大Key引起内存和网络带宽过载
- 热Key引起CPU和网络带宽过载
- 慢查询指令引起性能问题，如 KEYS * 、HGETALL 、LRANGE、SMEMBERS等
- 内存碎片引起性能问题，内存碎片率超1.5

## 大量KEY集中过期的解决办法

1. 给KEY设置随机时间
2. 开启 lazy-free，Redis会通过单独的子线程来释放清理过期的KEY

## 大KEY引起内存和网络带宽过载的解决办法

- 分隔大KEY：






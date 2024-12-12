import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    // 主页
    "",
    // 侧边栏配置 - 《系统结构》
    {
      text: "系统结构",
      icon: "icon-book",
      prefix: "系统结构/",
      link: "系统结构/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 《网络原理》
    {
      text: "网络原理",
      icon: "icon-book",
      prefix: "网络原理/",
      link: "网络原理/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 操作系统
    {
      text: "操作系统",
      icon: "icon-book",
      prefix: "操作系统/",
      link: "操作系统/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 数据库笔记
    {
      text: "数据库笔记",
      icon: "icon-book",
      prefix: "数据库笔记/",
      link: "数据库笔记/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 《Java笔记》
    {
      text: "Java笔记",
      icon: "icon-book",
      prefix: "Java笔记/",
      link: "Java笔记/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 《微服务架构》
    {
      text: "微服务架构",
      icon: "icon-book",
      prefix: "微服务架构/",
      link: "微服务架构/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 《组件笔记》
    {
      text: "组件笔记",
      icon: "icon-book",
      prefix: "组件笔记/",
      link: "组件笔记/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - Activiti7笔记
    {
      text: "Activiti7笔记",
      icon: "icon-book",
      prefix: "Activiti7笔记/",
      link: "Activiti7笔记/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 编程日志
    {
      text: "编程日志",
      icon: "icon-book",
      prefix: "编程日志/",
      link: "编程日志/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
    // 侧边栏配置 - 投研日志
    {
      text: "投研日志",
      icon: "icon-book",
      prefix: "投研日志/",
      link: "投研日志/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
    },
  ],
});
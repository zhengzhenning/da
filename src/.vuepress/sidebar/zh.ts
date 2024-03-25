import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    // 主页
    "",
    // 侧边栏配置 - 《Java笔记》
    {
      text: "Java笔记",
      icon: "book",
      prefix: "Java笔记/",
      link: "Java笔记/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true, 
    },
    // 侧边栏配置 - 业务沉淀
    {
      text: "业务沉淀",
      icon: "book",
      prefix: "业务沉淀/",
      link: "业务沉淀/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true, 
    },
    // 侧边栏配置 - 数据库笔记
    {
      text: "数据库笔记",
      icon: "book",
      prefix: "数据库笔记/",
      link: "数据库笔记/",
      // 自动生成侧边栏
      children: "structure",
      // // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true, 
    },
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});

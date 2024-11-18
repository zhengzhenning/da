import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme.js";

// 必应壁纸与名言轮播
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/yibu_zzn/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "郑振宁",
      description: "数字资产园区",
    },
  },

  theme,

  alias: {
    // 引用BlogHero.vue文件实现必应壁纸与名言轮播
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});

import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme.js";

// 必应壁纸与名言轮播
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/yibu_zzn/",

  // 引入图标资源
  iconAssets: "fontawesome",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "郑振宁的数字资产中心",
      description: "数字资产",
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

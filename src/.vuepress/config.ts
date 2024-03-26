import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "郑振宁的数字资产中心",
      description: "数字资产",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

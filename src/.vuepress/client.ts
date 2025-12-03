import { defineEChartsConfig } from "vuepress-plugin-md-enhance/client";

defineEChartsConfig({
  setup: async () => {
    // 导入 echarts-wordcloud 扩展
    await import("echarts-wordcloud");
  },
});


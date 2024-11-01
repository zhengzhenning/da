import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
import { MR_HOPE_AVATAR } from "./logo.js";
import { seoPlugin } from '@vuepress/plugin-seo' // 引入SEO插件

export default hopeTheme({


  hostname: "https://mister-hope.github.io",

  author: {
    name: "郑振宁",
    url: "https://mister-hope.com",
  },

  // 引入图标资源
  iconAssets: ["fontawesome-with-brands",
    // 引入自己的图标资源库，注意：每次 DA-ICON 项目资源有更新都需要更新下面的配置 →  https://www.iconfont.cn/
      "//at.alicdn.com/t/c/font_4726896_zv4lkyf5yk.css"
  ],
  // 设置自己的图标资源库前缀
  iconPrefix:"iconfont ",

  // 网站图标
  logo: "/avatar.jpg",

  // Git 仓库和编辑链接
  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  blog: {
    // medias: {
    //   Baidu: "https://example.com",
    //   BiliBili: "https://example.com",
    //   Bitbucket: "https://example.com",
    //   Dingding: "https://example.com",
    //   Discord: "https://example.com",
    //   Dribbble: "https://example.com",
    //   Email: "mailto:info@example.com",
    //   Evernote: "https://example.com",
    //   Facebook: "https://example.com",
    //   Flipboard: "https://example.com",
    //   Gitee: "https://example.com",
    //   GitHub: "https://example.com",
    //   Gitlab: "https://example.com",
    //   Gmail: "mailto:info@example.com",
    //   Instagram: "https://example.com",
    //   Lark: "https://example.com",
    //   Lines: "https://example.com",
    //   Linkedin: "https://example.com",
    //   Pinterest: "https://example.com",
    //   Pocket: "https://example.com",
    //   QQ: "https://example.com",
    //   Qzone: "https://example.com",
    //   Reddit: "https://example.com",
    //   Rss: "https://example.com",
    //   Steam: "https://example.com",
    //   Twitter: "https://example.com",
    //   Wechat: "https://example.com",
    //   Weibo: "https://example.com",
    //   Whatsapp: "https://example.com",
    //   Youtube: "https://example.com",
    //   Zhihu: "https://example.com",
    //   MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    // },
  },

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "郑振宁的数字资产中心",

      displayFooter: true,

      // 博客基本信息
      blog: {
        // 博客名
        name: "郑振宁",
        // 博客头像
        avatar: "/avatar.jpg",
        // 博客头像-裁剪成圆形
        roundAvatar: true,
        description: "后端研发工程师（Java），善于业务流程设计、代码重构、设计模式落地应用、SQL性能分析与优化、单元测试、项目需求全过程跟踪闭环等",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    seo: true, // 开启SEO
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard","PDF"],
      componentOptions:{
        pdf:{
          pdfjs:"/pdfjs-4.7.76-dist"
        }
      }
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      // 启用 GFM 警告
      alert: true,
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true, // 开启组件支持
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      // 启动脚注
      footnote: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},{ custom: true }); // 开启组件自定义

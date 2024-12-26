import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar/index.js";
import {zhSidebar} from "./sidebar/index.js";
import {MR_HOPE_AVATAR} from "./logo.js";
// 引入SEO插件
import {seoPlugin} from "@vuepress/plugin-seo";
// 引入搜索功能
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default hopeTheme({

    // 加密
    encrypt:{
        config:{
            // 目录加密
            "/投研日志/": "0000",
        }
    },

    hostname: "https://zhengzhenning.github.io/yibu_zzn/",

    author: {
        name: "郑振宁",
        url: "https://zhengzhenning.github.io/yibu_zzn/",
    },

    // 引入图标资源
    iconAssets: ["fontawesome-with-brands",
        // 引入自己的图标资源库，注意：每次 DA-ICON 项目资源有更新都需要更新下面的配置 →  https://www.iconfont.cn/
        "//at.alicdn.com/t/c/font_4726896_xi4ta1j6egg.css"
    ],
    // 设置自己的图标资源库前缀
    iconPrefix: "iconfont ",

    // 网站图标
    logo: "/avatar.jpg",

    // Git 仓库和编辑链接
    // repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "src",

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
            },

            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    },


    // enable it to preview all changes in time
    hotReload: true,

    plugins: {

        docsearch: {
            // 你的选项
            // appId, apiKey 和 indexName 是必填的
            appId: "QU55N1GJBX",
            apiKey: "c88395c158b5a58f81378534b01bc08c",
            indexName: "zhengzhenningio",
          },

        // 由于 git 插件需要调用 Git 程序并且涉及文件 IO，因此此功能会对启动与热更新速度造成严重影响，
        // 所以默认情况下主题不会在开发模式下启用。
        // 如有需要，请在主题选项中设置 plugins.git: true 或 hotReload: true。
        git: true,

        // 开启SEO
        seo: true,
        blog: true,

        // install @waline/client before enabling it
        // WARNING: This is a test server for demo only.
        // You should create and use your own comment service in production.
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },

        components: {
            components: ["Badge", "VPCard", "PDF"],
            componentOptions: {
                pdf: {
                    pdfjs: "/pdfjs-4.7.76-dist"
                }
            }
        },

        // all features are enabled for demo, only preserve features you need here
        mdEnhance: {
            // 启用 GFM 警告
            gfm: true,
            align: true,
            attrs: true,
            component: true, // 开启组件支持
            demo: true,
            include: true,
            mark: true,
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
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
        markdownHint:{
            alert:true
        }
    },
}, {custom: true}); // 开启组件自定义

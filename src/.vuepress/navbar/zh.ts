import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "方案地图",
        link: "/solution.md",
    }
    , {
        text: "技能地图",
        link: "/skill-map.md",
    },  {
        text: "链接地图",
        link: "/awesome-site.md",
    },  {
        text: "经典文献",
        link: "/classical-doc.md",
    }
]);


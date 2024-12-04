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
    }, {
        text: "技术笔记",
        link: "/tech-note.md",
    }, {
        text: "外部链接",
        link: "/awesome-site.md",
    }
]);


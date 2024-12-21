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
        text: "学习日志",
        link: "/learn-log.md",
    }, {
        text: "外部链接",
        link: "/awesome-site.md",
    }
]);


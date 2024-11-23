import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "解决方案",
        link: "/solution.md",
    }
    , {
        text: "技能图谱",
        link: "/skill-map.md",
    }, {
        text: "技术笔记",
        link: "/tech-note.md",
    }
]);


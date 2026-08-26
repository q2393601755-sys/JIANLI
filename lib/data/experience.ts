import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    id: "architecture-design",
    company: {
      zh: "福州市广度建筑装饰工程有限公司",
      en: "Fuzhou Guangdu Architectural Decoration Engineering Co., Ltd.",
    },
    role: { zh: "建筑装饰设计师", en: "Architectural Decoration Designer" },
    period: { zh: "约2022 — 2023年底", en: "Approx. 2022 — End of 2023" },
    location: { zh: "福州", en: "Fuzhou" },
    description: {
      zh: "负责建筑装饰设计全流程工作，从方案构思到现场落地，涵盖平面布置、效果呈现与施工对接。",
      en: "Responsible for the full workflow of architectural decoration design, from concept to on-site execution, including layout planning, visualization, and construction coordination.",
    },
    achievements: [
      {
        zh: "完成项目平面布置与彩屏设计",
        en: "Completed floor layout and color screen design for projects",
      },
      {
        zh: "制作PPT方案用于客户汇报",
        en: "Created PPT presentations for client meetings",
      },
      {
        zh: "使用SketchUp建模并对接效果图输出",
        en: "Built SketchUp models and coordinated render output",
      },
      {
        zh: "负责软装方案对接与现场放样",
        en: "Coordinated soft furnishing plans and on-site layout marking",
      },
      {
        zh: "参与工地沟通，确保设计落地",
        en: "Communicated with construction sites to ensure design implementation",
      },
    ],
  },
  {
    id: "new-media-tianbao",
    company: { zh: "福清天宝美容医院", en: "Fuqing Tianbao Beauty Hospital" },
    role: { zh: "新媒体运营", en: "New Media Operator" },
    period: { zh: "2024.02 — 2025.02", en: "Feb 2024 — Feb 2025" },
    location: { zh: "福清", en: "Fuqing" },
    description: {
      zh: "负责医院品牌在主流内容平台的新媒体运营，覆盖抖音、小红书、视频号与公众号，独立完成内容策划与生产。",
      en: "Managed the hospital brand's new media operations across Douyin, Xiaohongshu, Video Channel, and WeChat Official Account, independently handling content planning and production.",
    },
    achievements: [
      {
        zh: "运营抖音账号，持续输出视频内容",
        en: "Operated Douyin account with consistent video content output",
      },
      {
        zh: "运营小红书账号，产出图文与视频内容",
        en: "Operated Xiaohongshu account, producing image-text and video content",
      },
      {
        zh: "运营视频号，同步分发内容",
        en: "Operated Video Channel, distributing content in sync",
      },
      {
        zh: "负责公众号内容运营与发布",
        en: "Managed WeChat Official Account content operation and publishing",
      },
    ],
  },
  {
    id: "new-media-century21",
    company: { zh: "21世纪不动产", en: "Century 21 Real Estate" },
    role: { zh: "新媒体运营 + AI内容", en: "New Media Operator & AI Content" },
    period: { zh: "2025.04 — 至今", en: "Apr 2025 — Present" },
    location: { zh: "福清", en: "Fuqing" },
    current: true,
    description: {
      zh: "负责房产领域新媒体内容生产，搭建三个账号体系，并引入AI工具提升内容效率与质量。",
      en: "Responsible for real estate new media content production, built a three-account system, and integrated AI tools to improve content efficiency and quality.",
    },
    achievements: [
      {
        zh: "运营公司主账号，输出品牌内容",
        en: "Operated the company's main account, producing brand content",
      },
      {
        zh: "从0运营福清泛流量账号，达到2000粉丝",
        en: "Built a Fuqing general-traffic account from scratch, reaching 2,000 followers",
      },
      {
        zh: "运营房产专业账号，部分视频获4-5个客户留资",
        en: "Operated a real estate professional account; some videos generated 4-5 customer leads",
      },
      {
        zh: "应用AI工具辅助内容生产，提升效率",
        en: "Applied AI tools to assist content production, improving efficiency",
      },
    ],
  },
  {
    id: "ai-training",
    company: { zh: "独立AI培训", en: "Independent AI Training" },
    role: { zh: "AI培训讲师", en: "AI Training Instructor" },
    period: { zh: "2025", en: "2025" },
    description: {
      zh: "曾培训普通员工使用AI，包括AI基础使用、AI写脚本、AI生成视频、AI辅助内容创作、视频剪辑、内容发布流程。",
      en: "Trained employees to use AI, including AI basics, AI scripting, AI video generation, AI-assisted content creation, video editing, and content publishing workflows.",
    },
    achievements: [
      {
        zh: "教授AI基础使用方法",
        en: "Taught AI fundamentals and usage methods",
      },
      {
        zh: "教授AI辅助脚本写作",
        en: "Taught AI-assisted script writing",
      },
      {
        zh: "教授AI视频生成与内容创作流程",
        en: "Taught AI video generation and content creation workflows",
      },
      {
        zh: "教授视频剪辑与内容发布流程",
        en: "Taught video editing and content publishing workflows",
      },
    ],
  },
];

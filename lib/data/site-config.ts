import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: {
    zh: "章程",
    en: "CHENG ZHANG",
  },
  title: {
    zh: "AI视觉创作者",
    en: "AI Visual Creator",
  },
  bio: {
    zh: "从建筑空间设计到数字内容创作，我正在探索AI如何重新定义视觉表达与内容生产。",
    en: "From architectural visualization to AI-powered storytelling, I explore new ways of creating visual experiences with emerging technologies.",
  },
  email: "2393601755@qq.com",
  wechatId: "q2393601755",
  social: [
    {
      platform: "wechat",
      url: "#",
      label: { zh: "微信", en: "WeChat" },
    },
    {
      platform: "email",
      url: "mailto:2393601755@qq.com",
      label: { zh: "邮箱", en: "Email" },
    },
  ],
};

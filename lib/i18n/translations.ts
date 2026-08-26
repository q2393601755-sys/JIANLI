export const translations = {
  "nav.home": { zh: "首页", en: "Home" },
  "nav.about": { zh: "关于", en: "About" },
  "nav.projects": { zh: "精选作品", en: "Projects" },
  "nav.workflow": { zh: "AI工作流", en: "Workflow" },
  "nav.growthLog": { zh: "AI成长日志", en: "Growth Log" },
  "nav.experience": { zh: "工作经历", en: "Experience" },
  "nav.resume": { zh: "简历", en: "Resume" },
  "nav.contact": { zh: "联系", en: "Contact" },

  "hero.name": { zh: "章程", en: "章程" },
  "hero.nameEn": { zh: "CHENG ZHANG", en: "CHENG ZHANG" },
  "hero.title": { zh: "AI视觉创作者", en: "AI Visual Creator" },
  "hero.subtitle": {
    zh: "从建筑空间设计到数字内容创作，我正在探索AI如何重新定义视觉表达与内容生产。",
    en: "From architectural visualization to AI-powered storytelling, I explore new ways of creating visual experiences with emerging technologies.",
  },
  "hero.viewProjects": { zh: "查看作品", en: "View Projects" },
  "hero.workflow": { zh: "AI工作流", en: "AI Workflow" },
  "hero.resume": { zh: "下载简历", en: "Resume" },

  "section.featured": { zh: "精选作品", en: "Featured Work" },
  "section.abilities": { zh: "核心能力", en: "Core Abilities" },
  "section.cta": {
    zh: "如果你正在寻找一个能将AI转化为内容生产力的人",
    en: "If you're looking for someone who can turn AI into content productivity",
  },
  "section.ctaButton": { zh: "联系我", en: "Get in Touch" },

  "about.title": { zh: "我的成长路径", en: "My Journey" },
  "about.futureGoals": { zh: "未来方向", en: "Future Direction" },

  "projects.title": { zh: "精选作品", en: "Projects" },
  "projects.viewDetail": { zh: "查看详情", en: "View Details" },
  "projects.myRole": { zh: "我的职责", en: "My Role" },
  "projects.tools": { zh: "使用工具", en: "Tools" },
  "projects.process": { zh: "创作流程", en: "Creative Process" },
  "projects.challenges": { zh: "挑战与解决方案", en: "Challenges & Solutions" },
  "projects.gallery": { zh: "作品展示", en: "Gallery" },
  "projects.problem": { zh: "问题", en: "Problem" },
  "projects.solution": { zh: "解决方案", en: "Solution" },
  "projects.back": { zh: "返回作品列表", en: "Back to Projects" },
  "projects.videoUrl": { zh: "观看视频", en: "Watch Video" },
  "projects.localVideo": { zh: "本地视频", en: "Local Video" },

  "workflow.title": { zh: "我如何使用AI", en: "How I Work With AI" },
  "workflow.creation": { zh: "创作流程", en: "Creation Pipeline" },
  "workflow.strategy": { zh: "内容策略流程", en: "Content Strategy Pipeline" },
  "workflow.tools": { zh: "工具", en: "Tools" },
  "workflow.agent": { zh: "AI Agent 使用", en: "AI Agent Usage" },
  "workflow.agentDesc": {
    zh: "使用Agent分析视频、输出选题、生成脚本、辅助AI视频制作。使用Trae下载Skill扩展Agent能力。",
    en: "Using Agents to analyze videos, generate topics, create scripts, and assist AI video production. Downloading Skills via Trae to extend Agent capabilities.",
  },

  "growthLog.title": { zh: "AI成长日志", en: "AI Growth Log" },
  "growthLog.insights": { zh: "关键收获", en: "Key Insights" },

  "experience.title": { zh: "工作经历", en: "Experience" },
  "experience.current": { zh: "至今", en: "Present" },
  "home.viewAllExperience": { zh: "查看完整经历", en: "View Full Experience" },
  "experience.training": { zh: "AI培训经历", en: "AI Training Experience" },
  "experience.trainingDesc": {
    zh: "曾培训普通员工使用AI，包括AI基础使用、AI写脚本、AI生成视频、AI辅助内容创作、视频剪辑、内容发布流程。",
    en: "Trained employees to use AI, including AI basics, AI scripting, AI video generation, AI-assisted content creation, video editing, and content publishing workflows.",
  },

  "resume.title": { zh: "简历", en: "Resume" },
  "resume.download": { zh: "下载PDF", en: "Download PDF" },
  "resume.preview": { zh: "在线预览", en: "Online Preview" },

  "contact.title": { zh: "联系我", en: "Contact" },
  "contact.wechat": { zh: "微信二维码", en: "WeChat QR Code" },
  "contact.wechatId": { zh: "微信号", en: "WeChat ID" },
  "contact.email": { zh: "邮箱", en: "Email" },
  "contact.desc": {
    zh: "如果你正在寻找一个能将设计、内容和AI结合的人，欢迎联系。",
    en: "If you're looking for someone who combines design, content, and AI, feel free to reach out.",
  },

  "footer.rights": { zh: "保留所有权利", en: "All rights reserved" },
  "footer.madeWith": { zh: "使用 Next.js + Framer Motion 构建", en: "Built with Next.js + Framer Motion" },

  "common.current": { zh: "至今", en: "Present" },
} as const;

export type TranslationKey = keyof typeof translations;

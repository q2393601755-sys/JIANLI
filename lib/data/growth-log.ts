import type { GrowthLogEntry } from "@/lib/types";

export const growthLog: GrowthLogEntry[] = [
  {
    id: "ai-video-workflow",
    date: "2026.08",
    title: { zh: "探索AI视频工作流", en: "Exploring AI Video Workflows" },
    content: {
      zh: "系统梳理AI视频创作的完整工作流，从想法到成片，将各环节工具与AI能力串联，形成可复用的生产流程。",
      en: "Systematically mapped the complete AI video creation workflow, from idea to final film, connecting tools and AI capabilities at each stage into a reusable production process.",
    },
    insights: {
      zh: "工作流的核心不是单点工具，而是各环节之间的衔接与质量控制。",
      en: "The core of a workflow is not individual tools, but the handoff and quality control between stages.",
    },
    tags: ["AI视频", "工作流", "流程优化"],
  },
  {
    id: "echo-short-film",
    date: "2026.07",
    title: { zh: "创建AI短片《回音Echo》", en: "Created AI Short Film \"Echo\"" },
    content: {
      zh: "完成AI叙事短片《回音Echo》的创作，涵盖剧本、分镜、角色设计、AI图片与视频生成、配音、音乐、剪辑全流程。故事讲述一个女孩逐渐被世界遗忘，男孩为救她停止时间，时间恢复后男孩成为被遗忘的人。",
      en: "Completed the AI narrative short film \"Echo,\" covering the full pipeline from script, storyboard, character design, AI image and video generation, to voiceover, music, and editing. The story follows a girl gradually forgotten by the world; a boy stops time to save her, and when time resumes, he becomes the forgotten one.",
    },
    insights: {
      zh: "AI短片创作最大的挑战是人物一致性与镜头连续性，需要反复迭代提示词与生成参数。",
      en: "The biggest challenges in AI short film creation are character consistency and shot continuity, requiring iterative prompt and parameter tuning.",
    },
    tags: ["AI视频", "AI短片", "叙事", "Seedance"],
  },
  {
    id: "ai-agent-experiment",
    date: "2026.06",
    title: { zh: "实验AI Agent", en: "Experimenting with AI Agents" },
    content: {
      zh: "开始实验AI Agent的应用，尝试用Agent分析视频、输出选题、生成脚本、辅助AI视频制作。通过Trae下载Skill扩展Agent能力，探索Agent在内容生产中的实际价值。",
      en: "Began experimenting with AI Agent applications, trying to use Agents to analyze videos, generate topics, create scripts, and assist AI video production. Downloaded Skills via Trae to extend Agent capabilities, exploring the practical value of Agents in content production.",
    },
    insights: {
      zh: "Agent的价值在于将分散的AI能力编排为自动化流程，减少人工重复操作。",
      en: "The value of Agents lies in orchestrating scattered AI capabilities into automated flows, reducing repetitive manual operations.",
    },
    tags: ["AI Agent", "Trae", "自动化"],
  },
  {
    id: "ai-account-strategy",
    date: "2026.05",
    title: { zh: "AI辅助账号分析与内容策略", en: "AI-Assisted Account Analysis & Content Strategy" },
    content: {
      zh: "使用AI工具对运营账号进行数据分析与诊断，结合热点分析制定内容策略，优化选题方向与发布节奏。",
      en: "Used AI tools to analyze and diagnose operated accounts, combined with trend analysis to develop content strategies, optimizing topic direction and publishing cadence.",
    },
    insights: {
      zh: "AI能快速处理账号数据并给出方向建议，但最终的内容判断仍需结合行业经验。",
      en: "AI can quickly process account data and suggest directions, but final content decisions still require industry experience.",
    },
    tags: ["AI策略", "账号分析", "内容策略"],
  },
  {
    id: "ai-training-practice",
    date: "2026.04",
    title: { zh: "AI培训实践", en: "AI Training Practice" },
    content: {
      zh: "对普通员工进行AI使用培训，涵盖AI基础使用、AI写脚本、AI生成视频、AI辅助内容创作、视频剪辑与内容发布流程，验证了将AI方法系统化传授的可行性。",
      en: "Conducted AI usage training for employees, covering AI basics, AI scripting, AI video generation, AI-assisted content creation, video editing, and content publishing workflows, validating the feasibility of systematically teaching AI methods.",
    },
    insights: {
      zh: "培训的关键是将AI能力拆解为可操作的步骤，降低学习门槛。",
      en: "The key to training is breaking down AI capabilities into actionable steps, lowering the learning barrier.",
    },
    tags: ["AI培训", "知识传授", "流程化"],
  },
];

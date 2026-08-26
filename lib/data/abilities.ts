import type { Ability } from "@/lib/types";

export const abilities: Ability[] = [
  {
    id: "ai-video",
    title: { zh: "AI视频创作", en: "AI Video Creation" },
    description: {
      zh: "从概念到成片，使用AI工具完成视频的生成、剪辑与调色。",
      en: "From concept to final cut, using AI tools for video generation, editing, and color grading.",
    },
    icon: "clapperboard",
  },
  {
    id: "ai-design",
    title: { zh: "AI视觉设计", en: "AI Visual Design" },
    description: {
      zh: "利用AI生成品牌视觉、社媒素材与商业插画，快速迭代方案。",
      en: "Using AI to generate brand visuals, social media assets, and commercial illustrations with rapid iteration.",
    },
    icon: "palette",
  },
  {
    id: "content-strategy",
    title: { zh: "内容策略", en: "Content Strategy" },
    description: {
      zh: "基于数据与AI分析，制定内容选题、发布节奏与增长策略。",
      en: "Using data and AI analysis to define content topics, publishing rhythm, and growth strategies.",
    },
    icon: "lightbulb",
  },
  {
    id: "ai-workflow",
    title: { zh: "AI工作流", en: "AI Workflow" },
    description: {
      zh: "构建AI Agent驱动的自动化工作流，提升内容生产效率。",
      en: "Building AI Agent-driven automated workflows to boost content production efficiency.",
    },
    icon: "zap",
  },
  {
    id: "ai-training",
    title: { zh: "AI培训", en: "AI Training" },
    description: {
      zh: "为非技术团队设计AI实操培训，覆盖完整内容生产链路。",
      en: "Designing hands-on AI training for non-technical teams, covering the full content production chain.",
    },
    icon: "graduation",
  },
  {
    id: "creative-direction",
    title: { zh: "创意指导", en: "Creative Direction" },
    description: {
      zh: "将建筑空间设计的叙事思维转化为视觉创作的创意框架。",
      en: "Translating spatial design narrative thinking into creative frameworks for visual production.",
    },
    icon: "sparkles",
  },
  {
    id: "team-collaboration",
    title: { zh: "团队协作", en: "Team Collaboration" },
    description: {
      zh: "连接设计、技术与运营团队，推动AI工具在组织中的落地。",
      en: "Bridging design, tech, and operations teams to drive AI tool adoption across organizations.",
    },
    icon: "users",
  },
  {
    id: "cross-discipline",
    title: { zh: "跨领域整合", en: "Cross-Disciplinary Integration" },
    description: {
      zh: "融合建筑设计、内容创作与AI技术，创造独特的视觉表达。",
      en: "Fusing architectural design, content creation, and AI technology for unique visual expression.",
    },
    icon: "switch",
  },
];

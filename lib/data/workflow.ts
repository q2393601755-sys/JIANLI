import type { BilingualText, WorkflowStep } from "@/lib/types";

export interface ToolGroup {
  id: string;
  title: BilingualText;
  tools: string[];
}

export const creationPipeline: WorkflowStep[] = [
  {
    id: "idea",
    order: 1,
    title: { zh: "想法", en: "Idea" },
    description: {
      zh: "从灵感出发，确定创作的核心概念与方向。",
      en: "Start from inspiration, define the core concept and direction of the creation.",
    },
    tools: ["ChatGPT", "DeepSeek"],
  },
  {
    id: "story",
    order: 2,
    title: { zh: "故事", en: "Story" },
    description: {
      zh: "将想法发展成完整的故事框架，明确主题与情感线。",
      en: "Develop the idea into a complete story framework, clarifying the theme and emotional arc.",
    },
    tools: ["ChatGPT", "Gemini"],
  },
  {
    id: "script",
    order: 3,
    title: { zh: "剧本", en: "Script" },
    description: {
      zh: "将故事细化为剧本，写出场景描述与对白。",
      en: "Refine the story into a script with scene descriptions and dialogue.",
    },
    tools: ["ChatGPT", "DeepSeek"],
  },
  {
    id: "storyboard",
    order: 4,
    title: { zh: "分镜", en: "Storyboard" },
    description: {
      zh: "根据剧本拆解分镜，规划每个镜头的画面与节奏。",
      en: "Break down the script into storyboards, planning the composition and pacing of each shot.",
    },
    tools: ["ChatGPT", "Gemini"],
  },
  {
    id: "character-design",
    order: 5,
    title: { zh: "角色设计", en: "Character Design" },
    description: {
      zh: "设计角色的外观、服装与特征，确保后续生成的角色一致性。",
      en: "Design character appearance, clothing, and features to ensure consistency in subsequent generation.",
    },
    tools: ["ChatGPT", "即梦"],
  },
  {
    id: "scene-design",
    order: 6,
    title: { zh: "场景设计", en: "Scene Design" },
    description: {
      zh: "设计场景的视觉风格与空间布局，为AI生成提供明确参考。",
      en: "Design the visual style and spatial layout of scenes, providing clear references for AI generation.",
    },
    tools: ["ChatGPT", "即梦"],
  },
  {
    id: "ai-image-generation",
    order: 7,
    title: { zh: "AI图片生成", en: "AI Image Generation" },
    description: {
      zh: "使用AI图片工具生成分镜画面，作为视频生成的基础帧。",
      en: "Use AI image tools to generate storyboard frames as base images for video generation.",
    },
    tools: ["即梦", "本地部署"],
  },
  {
    id: "ai-video-generation",
    order: 8,
    title: { zh: "AI视频生成", en: "AI Video Generation" },
    description: {
      zh: "将静态图片转化为动态视频片段，控制镜头运动与画面连贯性。",
      en: "Transform static images into dynamic video clips, controlling camera movement and visual continuity.",
    },
    tools: ["Seedance", "MiniMax", "可灵"],
  },
  {
    id: "voiceover",
    order: 9,
    title: { zh: "配音", en: "Voiceover" },
    description: {
      zh: "为视频录制或生成配音，对齐画面节奏与情感表达。",
      en: "Record or generate voiceover for the video, aligning with visual pacing and emotional expression.",
    },
    tools: ["豆包"],
  },
  {
    id: "music",
    order: 10,
    title: { zh: "音乐", en: "Music" },
    description: {
      zh: "选择或生成配乐，烘托氛围与情绪。",
      en: "Select or generate background music to enhance atmosphere and emotion.",
    },
    tools: ["Tunee"],
  },
  {
    id: "editing",
    order: 11,
    title: { zh: "剪辑", en: "Editing" },
    description: {
      zh: "将视频、配音、音乐整合剪辑，调整节奏与转场。",
      en: "Combine video, voiceover, and music through editing, adjusting pacing and transitions.",
    },
    tools: ["剪映"],
  },
  {
    id: "final-film",
    order: 12,
    title: { zh: "最终成片", en: "Final Film" },
    description: {
      zh: "完成最终调色、字幕与输出，形成可发布的成片。",
      en: "Complete final color grading, subtitles, and export, producing a publishable final film.",
    },
    tools: ["剪映"],
  },
];

export const strategyPipeline: WorkflowStep[] = [
  {
    id: "identify-problem",
    order: 1,
    title: { zh: "发现问题", en: "Identify Problem" },
    description: {
      zh: "识别账号运营中的问题与改进空间，明确策略目标。",
      en: "Identify problems and areas for improvement in account operations, defining strategy goals.",
    },
    tools: ["ChatGPT", "DeepSeek"],
  },
  {
    id: "ai-research",
    order: 2,
    title: { zh: "AI研究", en: "AI Research" },
    description: {
      zh: "使用AI工具对问题进行深入研究，收集背景信息与数据。",
      en: "Use AI tools to conduct in-depth research on the problem, gathering background information and data.",
    },
    tools: ["ChatGPT", "Gemini", "DeepSeek"],
  },
  {
    id: "trend-analysis",
    order: 3,
    title: { zh: "热点分析", en: "Trend Analysis" },
    description: {
      zh: "分析平台热点与内容趋势，找到选题方向。",
      en: "Analyze platform trends and content directions to find topic opportunities.",
    },
    tools: ["豆包", "DeepSeek"],
  },
  {
    id: "content-planning",
    order: 4,
    title: { zh: "内容策划", en: "Content Planning" },
    description: {
      zh: "结合问题与热点，制定内容选题与发布计划。",
      en: "Combine problems and trends to develop content topics and publishing plans.",
    },
    tools: ["ChatGPT", "Gemini"],
  },
  {
    id: "script-generation",
    order: 5,
    title: { zh: "脚本生成", en: "Script Generation" },
    description: {
      zh: "使用AI生成内容脚本，包括文案与分镜描述。",
      en: "Use AI to generate content scripts, including copywriting and storyboard descriptions.",
    },
    tools: ["ChatGPT", "DeepSeek", "豆包"],
  },
  {
    id: "visual-design",
    order: 6,
    title: { zh: "视觉设计", en: "Visual Design" },
    description: {
      zh: "规划内容视觉风格与画面设计，确保品牌一致性。",
      en: "Plan content visual style and composition design, ensuring brand consistency.",
    },
    tools: ["即梦"],
  },
  {
    id: "ai-generation",
    order: 7,
    title: { zh: "AI生成", en: "AI Generation" },
    description: {
      zh: "使用AI工具生成图片、视频等视觉素材。",
      en: "Use AI tools to generate visual assets such as images and videos.",
    },
    tools: ["Seedance", "MiniMax", "可灵", "即梦"],
  },
  {
    id: "manual-optimization",
    order: 8,
    title: { zh: "人工优化", en: "Manual Optimization" },
    description: {
      zh: "对AI生成的素材进行人工调整与优化，确保内容质量。",
      en: "Manually adjust and optimize AI-generated assets to ensure content quality.",
    },
    tools: ["剪映"],
  },
  {
    id: "publish",
    order: 9,
    title: { zh: "发布", en: "Publish" },
    description: {
      zh: "按计划在各平台发布内容，把控发布节奏。",
      en: "Publish content across platforms according to plan, controlling publishing cadence.",
    },
    tools: [],
  },
  {
    id: "review",
    order: 10,
    title: { zh: "复盘", en: "Review" },
    description: {
      zh: "分析发布后的数据表现，总结经验并优化下一轮策略。",
      en: "Analyze post-publish performance data, summarize learnings, and optimize the next strategy cycle.",
    },
    tools: ["ChatGPT", "DeepSeek"],
  },
];

export const toolGroups: ToolGroup[] = [
  {
    id: "ai-models",
    title: { zh: "AI模型", en: "AI Models" },
    tools: ["ChatGPT", "Gemini", "豆包", "DeepSeek"],
  },
  {
    id: "ai-video",
    title: { zh: "AI视频", en: "AI Video" },
    tools: ["Seedance", "MiniMax", "可灵"],
  },
  {
    id: "ai-image",
    title: { zh: "AI图片", en: "AI Image" },
    tools: ["即梦", "本地部署"],
  },
  {
    id: "ai-development",
    title: { zh: "AI开发", en: "AI Development" },
    tools: ["Trae", "WorkBuddy", "Codex"],
  },
];

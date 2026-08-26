// ===== 基础双语结构 =====
export interface BilingualText {
  zh: string;
  en: string;
}

// ===== 媒体资源 =====
export interface MediaAsset {
  type: "image" | "video";
  url: string;
  poster?: string;
  alt: BilingualText;
  width?: number;
  height?: number;
}

// ===== 创作流程步骤 =====
export interface ProcessStep {
  step: number;
  title: BilingualText;
  description?: BilingualText;
  tools?: string[];
}

// ===== 挑战与解决方案 =====
export interface Challenge {
  title: BilingualText;
  problem: BilingualText;
  solution: BilingualText;
}

// ===== 项目（核心模块化数据结构） =====
export interface Project {
  id: string;
  slug: string;
  title: BilingualText;
  subtitle: BilingualText;
  summary: BilingualText;
  description: BilingualText;
  year: number;
  category: BilingualText;
  tags: string[];
  tools: string[];
  cover: MediaAsset;
  gallery?: MediaAsset[];
  videoUrl?: string;
  videoFile?: string;
  featured: boolean;
  process?: ProcessStep[];
  challenges?: Challenge[];
  createdAt: string;
}

// ===== AI工作流节点 =====
export interface WorkflowStep {
  id: string;
  title: BilingualText;
  description?: BilingualText;
  tools?: string[];
  order: number;
}

// ===== AI成长日志条目 =====
export interface GrowthLogEntry {
  id: string;
  date: string;
  title: BilingualText;
  content: BilingualText;
  insights?: BilingualText;
  tags?: string[];
}

// ===== 工作经历 =====
export interface ExperienceItem {
  id: string;
  company: BilingualText;
  role: BilingualText;
  period: BilingualText;
  location?: BilingualText;
  description: BilingualText;
  achievements: BilingualText[];
  current?: boolean;
}

// ===== 成长时间线阶段 =====
export interface TimelineStage {
  id: string;
  title: BilingualText;
  period: BilingualText;
  organization: BilingualText;
  skills?: string[];
  description: BilingualText;
  highlights?: BilingualText[];
}

// ===== 核心能力 =====
export interface Ability {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon?: string;
}

// ===== 站点配置 =====
export interface SiteConfig {
  name: BilingualText;
  title: BilingualText;
  bio: BilingualText;
  email: string;
  wechatId?: string;
  social: {
    platform: string;
    url: string;
    label: BilingualText;
  }[];
}

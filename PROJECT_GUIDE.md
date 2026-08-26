# 章程个人作品集网站 - AI Agent 项目指南

> 本文件专为AI Agent设计，帮助新Agent快速理解项目结构并进行修改。

## 项目概述

- **名称**: 章程 CHENG ZHANG - AI视觉创作者个人作品集网站
- **技术栈**: Next.js 16 (静态导出) + React 19 + Tailwind CSS v4 + Framer Motion
- **构建命令**: `npm run build`（会自动运行 post-build 脚本处理U盘路径）
- **预览命令**: `npm run dev`（打开 http://localhost:3000）
- **部署方式**: 静态导出到 `out/` 文件夹，支持U盘直接打开（file://协议）

## 关键数据文件

| 文件 | 作用 |
|------|------|
| `lib/data/projects.ts` | 项目/作品数据，每个项目是一个对象 |
| `lib/data/experience.ts` | 工作经历数据 |
| `lib/data/site-config.ts` | 个人信息（邮箱、微信、姓名、简介） |
| `lib/data/growth-log.ts` | AI成长日志 |
| `lib/data/timeline.ts` | About页面成长时间线 |
| `lib/data/abilities.ts` | 核心能力卡片 |
| `lib/data/workflow.ts` | AI工作流步骤和工具 |
| `lib/i18n/translations.ts` | 所有界面文字（中英双语） |
| `lib/types/index.ts` | TypeScript类型定义 |

## 数据格式说明

所有文字字段使用双语格式：
```typescript
{ zh: "中文内容", en: "English content" }
```

### 添加新项目的模板

在 `lib/data/projects.ts` 的 `projects` 数组中添加：

```typescript
{
  id: "project-id",           // 唯一英文ID
  slug: "project-id",         // URL路径，与id相同
  title: { zh: "项目名", en: "Project Name" },
  subtitle: { zh: "副标题", en: "Subtitle" },
  summary: { zh: "简介", en: "Summary" },
  description: { zh: "详细描述", en: "Description" },
  year: 2026,
  category: { zh: "分类", en: "Category" },
  tags: ["标签1", "标签2"],
  tools: ["工具1", "工具2"],
  cover: {
    type: "image",
    url: "/images/projects/cover.png",  // 图片放在 public/images/projects/
    alt: { zh: "封面", en: "Cover" },
  },
  videoUrl: "https://...",     // 可选：外部视频链接
  videoFile: "/videos/xxx.mp4", // 可选：本地视频路径
  featured: false,              // true=首页展示
  createdAt: "2026-08-13",
  process: [...],              // 可选：创作流程
  challenges: [...],           // 可选：挑战与解决方案
  gallery: [...],              // 可选：图片画廊
}
```

## 媒体文件位置

- 图片: `public/images/` (hero/, projects/, about/, qr-code/)
- 视频: `public/videos/`
- 音乐: `public/audio/bgm.mp3`
- 简历: `public/resume/cheng-zhang-resume.pdf`

## 构建与部署

1. `npm run build` → 生成 `out/` 文件夹 + 自动运行 `scripts/post-build.js` 转换路径
2. `out/` 文件夹可直接复制到U盘
3. U盘里双击 `启动网站.bat` 打开网站
4. 也可直接双击 `out/index.html` 打开

## 注意事项

- 不要删除 `scripts/post-build.js`，它负责将绝对路径转为相对路径以支持U盘部署
- `next.config.ts` 中 `output: "export"` 和 `trailingSlash: true` 是必须的
- 不要添加 `assetPrefix: "./"`，会导致开发服务器黑屏
- 图片使用 `next/image` 组件，`images.unoptimized: true` 已配置
- 所有页面都是静态预渲染的（SSG）

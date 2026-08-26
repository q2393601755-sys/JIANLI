"use client";

import { useLanguage } from "@/lib/i18n/context";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Timeline from "@/components/ui/Timeline";
import { timelineStages } from "@/lib/data/timeline";
import { siteConfig } from "@/lib/data/site-config";
import type { BilingualText } from "@/lib/types";

const futureGoals: { title: BilingualText; description: BilingualText }[] = [
  {
    title: { zh: "AI视觉导演", en: "AI Visual Director" },
    description: {
      zh: "探索AI如何重新定义视觉叙事，从工具使用者走向创意决策者。",
      en: "Exploring how AI redefines visual storytelling, from tool user to creative decision-maker.",
    },
  },
  {
    title: { zh: "AI Agent + 内容创作", en: "AI Agent + Content Creation" },
    description: {
      zh: "将AI Agent融入内容生产全流程，从选题、脚本到生成、发布。",
      en: "Integrating AI Agents into the full content production pipeline, from topics and scripts to generation and publishing.",
    },
  },
  {
    title: { zh: "AIGC内容创作者", en: "AIGC Content Creator" },
    description: {
      zh: "持续探索AI生成内容的边界，创造有温度、有故事的视觉作品。",
      en: "Continuously exploring the boundaries of AI-generated content, creating visual works with warmth and story.",
    },
  },
];

export default function AboutPage() {
  const { t, bt } = useLanguage();

  const timelineItems = timelineStages.map((stage) => ({
    title: stage.title,
    subtitle: stage.organization,
    period: stage.period,
    description: stage.description,
    highlights: [
      ...(stage.highlights ?? []),
      ...(stage.skills?.map((s) => ({ zh: s, en: s })) ?? []),
    ],
  }));

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle title={{ zh: "我的成长路径", en: "My Journey" }} />

      {/* Portrait + Bio */}
      <ScrollReveal>
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-3xl">
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0">
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-glow/30">
              <img
                src="/images/about/portrait.png"
                alt="章程 CHENG ZHANG"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-glow/20" style={{ transform: "scale(1.08)" }} />
          </div>
          <div>
            <h2 className="text-snow text-2xl md:text-3xl font-light mb-2">{siteConfig.name.zh}</h2>
            <p className="text-glow text-sm tracking-wider mb-4">{siteConfig.name.en}</p>
            <p className="text-silver text-sm leading-relaxed">{bt(siteConfig.bio)}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-12 max-w-3xl">
          <Timeline items={timelineItems} />
        </div>
      </ScrollReveal>

      {/* Future Goals */}
      <div className="mt-20 md:mt-32">
        <SectionTitle
          title={{ zh: "未来方向", en: "Future Direction" }}
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {futureGoals.map((goal, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border border-glow/20 bg-ink-800 p-8 h-full hover:border-glow/40 hover:bg-ink-700 transition-all duration-500">
                <h3 className="text-snow text-lg mb-3">{bt(goal.title)}</h3>
                <p className="text-silver text-sm leading-relaxed">
                  {bt(goal.description)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

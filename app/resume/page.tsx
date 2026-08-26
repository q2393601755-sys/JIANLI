"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ResumePage() {
  const { t, isZh } = useLanguage();

  const education = isZh
    ? "厦门城市职业大学 — 建筑装饰工程技术"
    : "Xiamen City Vocational College — Architectural Decoration Engineering Technology";

  const workOverview = isZh
    ? "建筑装饰设计（约2年）→ 新媒体运营（福清天宝美容医院）→ 新媒体运营 + AI内容方向（21世纪不动产，至今）。具备从空间设计到内容生产到AI创作的跨领域能力。"
    : "Architectural decoration design (~2 years) → New media operations (Fuqing Tianbao Beauty Hospital) → New media operations + AI content (21st Century Real Estate, present). Cross-domain capabilities from spatial design to content production to AI creation.";

  const coreSkills = isZh
    ? [
        "AI视频创作：Seedance、MiniMax、可灵",
        "AI辅助内容：ChatGPT、DeepSeek、豆包、Gemini",
        "视频制作：拍摄、无人机、运镜、剪辑、配音",
        "内容运营：抖音、小红书、视频号、公众号",
        "设计工具：Photoshop、SketchUp、3ds Max、AutoCAD、Enscape",
        "AI开发/Agent：Trae、WorkBuddy、Codex",
      ]
    : [
        "AI Video: Seedance, MiniMax, Kling",
        "AI-Assisted Content: ChatGPT, DeepSeek, Doubao, Gemini",
        "Video Production: Filming, Drone, Camera Movement, Editing, Voiceover",
        "Content Operations: TikTok, RED, Video Channel, WeChat Official Account",
        "Design Tools: Photoshop, SketchUp, 3ds Max, AutoCAD, Enscape",
        "AI Development/Agent: Trae, WorkBuddy, Codex",
      ];

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle title={{ zh: "简历", en: "Resume" }} />

      {/* Download Button */}
      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center mt-12">
          <Link
            href="/resume/cheng-zhang-resume.pdf"
            download
            className="inline-flex items-center gap-3 px-10 py-5 border border-glow/30 text-snow hover:border-glow hover:bg-glow/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 text-lg tracking-wider"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            {t("resume.download")}
          </Link>
        </div>
      </ScrollReveal>

      {/* Resume Summary */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto mt-16 space-y-10">
          {/* Education */}
          <section>
            <h2 className="text-glow text-sm uppercase tracking-wider mb-3">
              {isZh ? "教育背景" : "Education"}
            </h2>
            <p className="text-silver leading-relaxed">{education}</p>
          </section>

          {/* Work Overview */}
          <section>
            <h2 className="text-glow text-sm uppercase tracking-wider mb-3">
              {isZh ? "工作概要" : "Work Overview"}
            </h2>
            <p className="text-silver leading-relaxed">{workOverview}</p>
          </section>

          {/* Core Skills */}
          <section>
            <h2 className="text-glow text-sm uppercase tracking-wider mb-3">
              {isZh ? "核心技能" : "Core Skills"}
            </h2>
            <ul className="space-y-2">
              {coreSkills.map((skill, i) => (
                <li
                  key={i}
                  className="text-silver text-sm flex gap-2 leading-relaxed"
                >
                  <span className="text-glow shrink-0">{"\u2014"}</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </ScrollReveal>
    </div>
  );
}

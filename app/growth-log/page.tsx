"use client";

import { useLanguage } from "@/lib/i18n/context";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";
import { growthLog } from "@/lib/data/growth-log";

export default function GrowthLogPage() {
  const { t, bt } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle title={{ zh: "AI成长日志", en: "AI Growth Log" }} />

      <div className="mt-12 max-w-3xl">
        {growthLog.map((entry, i) => (
          <ScrollReveal key={entry.id} delay={i * 0.05}>
            <div className="flex gap-6 pb-12 last:pb-0">
              {/* Node + connector */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-glow shrink-0 mt-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                {i < growthLog.length - 1 && (
                  <div className="w-px flex-1 bg-glow/20 mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="flex-1 -mt-1">
                <p className="text-glow text-xs tracking-wider mb-1">
                  {entry.date}
                </p>
                <h3 className="text-snow text-lg mb-2">{bt(entry.title)}</h3>
                <p className="text-silver text-sm leading-relaxed mb-3">
                  {bt(entry.content)}
                </p>
                {entry.insights && (
                  <div className="border-l-2 border-glow/40 pl-4 mb-3">
                    <p className="text-glow text-xs uppercase tracking-wider mb-1">
                      {t("growthLog.insights")}
                    </p>
                    <p className="text-silver-light text-sm leading-relaxed">
                      {bt(entry.insights)}
                    </p>
                  </div>
                )}
                {entry.tags && entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <Tag key={tag} variant="dim">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

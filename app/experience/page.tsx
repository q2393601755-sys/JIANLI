"use client";

import { useLanguage } from "@/lib/i18n/context";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/lib/data/experience";

export default function ExperiencePage() {
  const { t, bt } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle title={{ zh: "工作经历", en: "Experience" }} />

      <div className="mt-12 space-y-6 max-w-4xl">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.id} delay={i * 0.05}>
            <div
              className={`border p-6 md:p-8 transition-all duration-500 ${
                exp.current
                  ? "border-glow/40 bg-glow-dim/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                  : "border-glow/20 bg-ink-800 hover:border-glow/30"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-snow text-xl">{bt(exp.company)}</h3>
                  <p className="text-glow text-sm mt-1">{bt(exp.role)}</p>
                </div>
                <div className="text-right">
                  <p className="text-silver text-sm">{bt(exp.period)}</p>
                  {exp.current && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs text-glow-bright border border-glow/40 tracking-wider">
                      {t("common.current")}
                    </span>
                  )}
                </div>
              </div>

              {exp.location && (
                <p className="text-silver-dark text-xs mb-3">
                  {bt(exp.location)}
                </p>
              )}

              <p className="text-silver text-sm leading-relaxed mb-4">
                {bt(exp.description)}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, j) => (
                  <li
                    key={j}
                    className="text-silver-light text-sm flex gap-2"
                  >
                    <span className="text-glow shrink-0">{"\u2014"}</span>
                    <span>{bt(achievement)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* AI Training */}
      <ScrollReveal>
        <div className="mt-16 border border-glow/20 bg-ink-800 p-6 md:p-8 max-w-4xl">
          <h3 className="text-glow text-sm uppercase tracking-wider mb-3">
            {t("experience.training")}
          </h3>
          <p className="text-silver text-sm leading-relaxed">
            {t("experience.trainingDesc")}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}

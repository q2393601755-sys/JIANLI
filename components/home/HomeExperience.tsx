"use client";

import { useLanguage } from "@/lib/i18n/context";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/lib/data/experience";
import Link from "next/link";

export default function HomeExperience() {
  const { bt, t } = useLanguage();

  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle
        title={{ zh: "工作经历", en: "Experience" }}
        align="center"
      />

      <div className="mt-12 max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.id} delay={i * 0.08}>
            <div className="border border-glow/15 bg-ink-800/50 p-6 md:p-8 hover:border-glow/30 hover:bg-ink-800 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-snow text-lg md:text-xl">
                    {bt(exp.company)}
                  </h3>
                  <p className="text-glow text-sm mt-1">{bt(exp.role)}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-silver text-xs tracking-wider">
                    {bt(exp.period)}
                  </span>
                  {exp.current && (
                    <span className="px-2 py-0.5 border border-glow/40 text-glow text-[10px] uppercase tracking-wider">
                      {t("experience.current")}
                    </span>
                  )}
                </div>
              </div>

              {exp.description && (
                <p className="text-silver text-sm leading-relaxed mb-4">
                  {bt(exp.description)}
                </p>
              )}

              <ul className="space-y-1.5">
                {exp.achievements.slice(0, 3).map((a, j) => (
                  <li
                    key={j}
                    className="text-silver-dark text-xs flex items-start gap-2"
                  >
                    <span className="text-glow mt-1">·</span>
                    <span>{bt(a)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="text-center mt-10">
          <Link
            href="/experience"
            className="inline-block text-sm text-silver hover:text-glow transition-colors duration-300 tracking-wider"
          >
            {t("home.viewAllExperience")} →
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

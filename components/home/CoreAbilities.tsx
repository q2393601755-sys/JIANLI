"use client";

import { useLanguage } from "@/lib/i18n/context";
import { abilities } from "@/lib/data/abilities";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Lightbulb,
  GraduationCap,
  Zap,
  Clapperboard,
  Sparkles,
  Palette,
  Users,
  ArrowRightLeft,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  graduation: GraduationCap,
  zap: Zap,
  clapperboard: Clapperboard,
  sparkles: Sparkles,
  palette: Palette,
  users: Users,
  switch: ArrowRightLeft,
};

export default function CoreAbilities() {
  const { bt } = useLanguage();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle
        title={{ zh: "核心能力", en: "Core Abilities" }}
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {abilities.map((ability, index) => {
          const Icon = iconMap[ability.icon || "sparkles"] || Sparkles;
          return (
            <ScrollReveal key={ability.id} delay={index * 0.1}>
              <div className="h-full p-6 bg-ink-800 border border-white/5 rounded-lg hover:border-glow/20 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-glow/10 text-glow group-hover:bg-glow/20 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-display font-bold text-snow">
                  {bt(ability.title)}
                </h3>
                <p className="mt-1 text-xs text-silver-dark uppercase tracking-wider">
                  {ability.title.en}
                </p>
                <p className="mt-3 text-sm text-silver leading-relaxed">
                  {bt(ability.description)}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

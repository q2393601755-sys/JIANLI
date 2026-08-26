"use client";

import { useLanguage } from "@/lib/i18n/context";
import type { BilingualText } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

export interface TimelineItem {
  title: BilingualText;
  subtitle?: BilingualText;
  period?: BilingualText;
  description?: BilingualText;
  highlights?: BilingualText[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const { bt } = useLanguage();

  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

      <div className="space-y-10">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="relative">
              {/* Node dot */}
              <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-glow shadow-blue-glow ring-4 ring-ink" />

              <div className="space-y-2">
                {item.period && (
                  <p className="text-xs text-silver-dark tracking-wider uppercase">
                    {bt(item.period)}
                  </p>
                )}
                <h3 className="text-lg font-display font-bold text-snow">
                  {bt(item.title)}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-glow">{bt(item.subtitle)}</p>
                )}
                {item.description && (
                  <p className="text-sm text-silver leading-relaxed">
                    {bt(item.description)}
                  </p>
                )}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1 pt-1">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-silver-light flex items-start gap-2"
                      >
                        <span className="text-glow/60 mt-0.5 shrink-0">•</span>
                        <span>{bt(h)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

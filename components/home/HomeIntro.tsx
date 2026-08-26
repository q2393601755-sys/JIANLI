"use client";

import { useLanguage } from "@/lib/i18n/context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data/site-config";

export default function HomeIntro() {
  const { bt } = useLanguage();

  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Portrait */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 shrink-0">
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-glow/30">
              <img
                src="/images/about/portrait.png"
                alt="章程 CHENG ZHANG"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 rounded-full border border-glow/20"
              style={{ transform: "scale(1.08)" }}
            />
          </div>

          {/* Bio */}
          <div className="text-center md:text-left">
            <h2 className="text-snow text-2xl md:text-3xl font-light mb-1">
              {bt(siteConfig.name)}
            </h2>
            <p className="text-glow text-sm tracking-wider mb-4">
              {bt(siteConfig.title)}
            </p>
            <p className="text-silver text-sm leading-relaxed max-w-md">
              {bt(siteConfig.bio)}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

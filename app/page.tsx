"use client";

import Link from "next/link";
import Hero from "@/components/home/Hero";
import HomeIntro from "@/components/home/HomeIntro";
import FeaturedWork from "@/components/home/FeaturedWork";
import CoreAbilities from "@/components/home/CoreAbilities";
import HomeExperience from "@/components/home/HomeExperience";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowDivider from "@/components/ui/GlowDivider";
import { useLanguage } from "@/lib/i18n/context";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <HomeIntro />
      <FeaturedWork />
      <CoreAbilities />
      <HomeExperience />

      {/* Contact CTA */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
        <GlowDivider />
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mt-16">
            <p className="text-xl md:text-2xl text-silver leading-relaxed mb-8">
              {t("section.cta")}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border border-glow/30 text-snow hover:border-glow hover:bg-glow/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-500 tracking-wider"
            >
              {t("section.ctaButton")}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

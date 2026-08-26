"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import type { TranslationKey } from "@/lib/i18n/translations";

const quickLinks: { key: TranslationKey; href: string }[] = [
  { key: "nav.projects", href: "/projects/" },
  { key: "nav.workflow", href: "/workflow/" },
  { key: "nav.growthLog", href: "/growth-log/" },
  { key: "nav.experience", href: "/experience/" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-ink-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: copyright */}
          <div className="space-y-2">
            <Link href="/" className="flex items-baseline gap-2 group">
              <span className="text-lg font-display font-bold text-snow group-hover:text-glow transition-colors">
                章程
              </span>
              <span className="text-xs text-silver tracking-[0.2em] uppercase">
                CHENG ZHANG
              </span>
            </Link>
            <p className="text-xs text-silver-dark">
              © 2026 章程 CHENG ZHANG. {t("footer.rights")}
            </p>
          </div>

          {/* Center: quick links */}
          <div className="space-y-3">
            <p className="text-xs text-silver-dark uppercase tracking-wider">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-sm text-silver hover:text-glow transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: contact */}
          <div className="space-y-3">
            <p className="text-xs text-silver-dark uppercase tracking-wider">
              Contact
            </p>
            <Link
              href="/contact/"
              className="text-sm text-silver hover:text-glow transition-colors inline-flex items-center gap-2 group"
            >
              {t("nav.contact")}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-xs text-silver-dark text-center">
            {t("footer.madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}

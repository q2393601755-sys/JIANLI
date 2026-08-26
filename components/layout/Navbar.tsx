"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import type { TranslationKey } from "@/lib/i18n/translations";

const navItems: { key: TranslationKey; href: string }[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about/" },
  { key: "nav.projects", href: "/projects/" },
  { key: "nav.workflow", href: "/workflow/" },
  { key: "nav.growthLog", href: "/growth-log/" },
  { key: "nav.experience", href: "/experience/" },
  { key: "nav.resume", href: "/resume/" },
  { key: "nav.contact", href: "/contact/" },
];

export default function Navbar() {
  const { t, toggleLang, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2 group shrink-0">
            <span className="text-lg font-display font-bold text-snow group-hover:text-glow transition-colors">
              章程
            </span>
            <span className="text-xs text-silver tracking-[0.2em] uppercase hidden sm:inline">
              CHENG ZHANG
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-glow" : "text-silver hover:text-snow"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 text-xs border border-white/10 rounded-sm hover:border-glow/40 hover:text-glow transition-colors"
              aria-label="Toggle language"
            >
              <span
                className={
                  lang === "zh" ? "text-snow" : "text-silver-dark"
                }
              >
                中
              </span>
              <span className="text-silver-dark">/</span>
              <span
                className={
                  lang === "en" ? "text-snow" : "text-silver-dark"
                }
              >
                EN
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-snow"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`text-xl font-display transition-colors ${
                      isActive ? "text-glow" : "text-silver hover:text-snow"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

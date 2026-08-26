"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import FilmGrain from "./FilmGrain";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Layer 1: Ken Burns still frame */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero/echo-still.png)" }}
        animate={{
          scale: [1, 1.12, 1.08, 1],
          x: [0, -15, 10, 0],
          y: [0, 8, -12, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 2: Light/shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 3: Film grain */}
      <FilmGrain />

      {/* Layer 4: Cold blue glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 h-[500px] w-[700px] rounded-full bg-glow/8 blur-[140px] -translate-x-1/2"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center text */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-snow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.name")}
        </motion.h1>

        <motion.p
          className="mt-4 text-sm md:text-base text-silver tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.nameEn")}
        </motion.p>

        <motion.p
          className="mt-6 text-lg md:text-xl text-glow font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.title")}
        </motion.p>

        <motion.p
          className="mt-4 text-sm md:text-base text-silver max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/projects/"
            className="px-6 py-3 bg-glow text-snow text-sm font-medium rounded-sm hover:bg-glow-bright transition-colors shadow-blue-glow"
          >
            {t("hero.viewProjects")}
          </Link>
          <Link
            href="/workflow/"
            className="px-6 py-3 border border-white/20 text-snow text-sm font-medium rounded-sm hover:border-glow/50 hover:text-glow transition-colors"
          >
            {t("hero.workflow")}
          </Link>
          <Link
            href="/resume/"
            className="px-6 py-3 text-silver text-sm font-medium hover:text-snow transition-colors"
          >
            {t("hero.resume")}
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import type { BilingualText } from "@/lib/types";

interface SectionTitleProps {
  title: BilingualText;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  align = "left",
}: SectionTitleProps) {
  const { bt, lang } = useLanguage();
  const isCenter = align === "center";

  return (
    <motion.div
      className={`flex flex-col gap-2 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-snow">
        {bt(title)}
      </h2>
      <p className="text-sm text-silver uppercase tracking-[0.2em]">
        {lang === "zh" ? title.en : title.zh}
      </p>
    </motion.div>
  );
}

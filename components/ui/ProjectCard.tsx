"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import type { Project } from "@/lib/types";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  const { bt } = useLanguage();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-ink-800 border border-white/5 rounded-lg overflow-hidden h-full"
    >
      <Link href={`/projects/${project.slug}/`} className="block h-full">
        {/* Image area */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.cover.url}
            alt={bt(project.cover.alt)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/20 to-transparent" />
        </div>

        {/* Text area */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-2 text-xs text-silver-dark">
            <span>{project.year}</span>
            <span className="text-glow/50">/</span>
            <span>{bt(project.category)}</span>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold text-snow">
              {bt(project.title)}
            </h3>
            <p className="text-sm text-silver tracking-wide mt-0.5">
              {project.title.en}
            </p>
          </div>

          <p className="text-sm text-silver leading-relaxed line-clamp-2">
            {bt(project.summary)}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {/* Bottom cold blue line - hover expand */}
        <div className="h-px bg-gradient-to-r from-transparent via-glow/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.article>
  );
}

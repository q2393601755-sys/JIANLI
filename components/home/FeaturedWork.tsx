"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { getFeaturedProjects } from "@/lib/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturedWork() {
  const { t, bt } = useLanguage();
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle
        title={{ zh: t("section.featured"), en: "Featured Work" }}
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.15}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects/"
          className="inline-flex items-center gap-2 text-sm text-silver hover:text-glow transition-colors group"
        >
          <span>
            {bt({ zh: "查看全部作品", en: "View All Works" })}
          </span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

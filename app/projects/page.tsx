import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "精选作品 Projects",
  description:
    "章程的AI视觉创作作品集 — AI短片《回音Echo》、MG动画短片、AI短片《未完成的人生》、商业房地产宣传片、昌荣苑探盘Vlog、职场情景短剧、建筑空间视觉。",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle title={{ zh: "精选作品", en: "Projects" }} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {getFeaturedProjects().map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

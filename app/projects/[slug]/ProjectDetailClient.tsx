"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/types";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { t, bt } = useLanguage();

  return (
    <article className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      {/* Cover */}
      <ScrollReveal>
        <div className="relative w-full aspect-video overflow-hidden mb-12 border border-glow/10">
          <img
            src={project.cover.url}
            alt={bt(project.cover.alt)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </ScrollReveal>

      {/* Local Video Player */}
      {project.videoFile && (
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-silver-dark text-xs uppercase tracking-wider mb-3">
              {t("projects.localVideo")}
            </p>
            <video
              src={project.videoFile}
              controls
              preload="metadata"
              className="w-full aspect-video bg-ink-900 border border-glow/20"
            />
          </div>
        </ScrollReveal>
      )}

      {/* Video Link */}
      {project.videoUrl && (
        <ScrollReveal>
          <div className="mb-12">
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-glow/10 border border-glow/30 text-glow text-sm hover:bg-glow/20 transition-colors rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t("projects.videoUrl")}
            </a>
          </div>
        </ScrollReveal>
      )}

      {/* Title + Meta */}
      <ScrollReveal>
        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-5xl text-snow font-bold mb-2">
            {bt(project.title)}
          </h1>
          <p className="text-silver text-lg mb-4">{bt(project.subtitle)}</p>
          <div className="flex flex-wrap items-center gap-3 text-silver-dark text-sm">
            <span>{project.year}</span>
            <span className="text-glow">|</span>
            <span>{bt(project.category)}</span>
          </div>
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </header>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal>
        <section className="mb-12 max-w-3xl">
          <p className="text-silver leading-relaxed whitespace-pre-line">
            {bt(project.description)}
          </p>
        </section>
      </ScrollReveal>

      {/* Tools */}
      <ScrollReveal>
        <section className="mb-12">
          <h2 className="text-snow text-xl mb-4 tracking-wide">
            {t("projects.tools")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Creative Process */}
      {project.process && project.process.length > 0 && (
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-snow text-xl mb-6 tracking-wide">
              {t("projects.process")}
            </h2>
            <div>
              {project.process.map((step, i) => (
                <div key={step.step} className="flex gap-4 md:gap-6">
                  {/* Node + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-glow/40 bg-ink-800 flex items-center justify-center text-glow text-sm shrink-0">
                      {step.step}
                    </div>
                    {i < project.process!.length - 1 && (
                      <div className="w-px flex-1 bg-glow/20 my-2 min-h-[2rem]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-snow mb-1">{bt(step.title)}</h3>
                    {step.description && (
                      <p className="text-silver text-sm leading-relaxed">
                        {bt(step.description)}
                      </p>
                    )}
                    {step.tools && step.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {step.tools.map((tool) => (
                          <Tag key={tool} variant="dim">
                            {tool}
                          </Tag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-snow text-xl mb-6 tracking-wide">
              {t("projects.challenges")}
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="border border-glow/20 bg-ink-800 p-6"
                >
                  <h3 className="text-snow mb-4">{bt(challenge.title)}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-glow text-xs uppercase tracking-wider mb-2">
                        {t("projects.problem")}
                      </p>
                      <p className="text-silver text-sm leading-relaxed">
                        {bt(challenge.problem)}
                      </p>
                    </div>
                    <div>
                      <p className="text-glow text-xs uppercase tracking-wider mb-2">
                        {t("projects.solution")}
                      </p>
                      <p className="text-silver text-sm leading-relaxed">
                        {bt(challenge.solution)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <ScrollReveal>
          <section className="mb-12">
            <h2 className="text-snow text-xl mb-6 tracking-wide">
              {t("projects.gallery")}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.gallery.map((item, i) => (
                <div
                  key={i}
                  className="relative aspect-video overflow-hidden border border-glow/10"
                >
                  <img
                    src={item.url}
                    alt={bt(item.alt)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Back to Projects */}
      <ScrollReveal>
        <div className="mt-16 pt-8 border-t border-glow/20">
          <Link
            href="/projects"
            className="text-silver hover:text-glow transition-colors duration-300"
          >
            {"\u2190 "} {t("projects.back")}
          </Link>
        </div>
      </ScrollReveal>
    </article>
  );
}

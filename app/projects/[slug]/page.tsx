import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "作品未找到",
    };
  }

  return {
    title: `${project.title.zh} | ${project.title.en}`,
    description: project.summary.zh,
    openGraph: {
      title: `${project.title.zh} | ${project.title.en}`,
      description: project.summary.zh,
      images: [{ url: project.cover.url }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

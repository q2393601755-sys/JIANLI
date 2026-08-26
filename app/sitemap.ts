import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/data/projects";

export const dynamic = "force-static";

const baseUrl = "https://chengzhang.art";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "about",
    "projects",
    "workflow",
    "growth-log",
    "experience",
    "resume",
    "contact",
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: route === "" ? `${baseUrl}/` : `${baseUrl}/${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${baseUrl}/projects/${slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...projectRoutes];
}

import { projects } from "@/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rovor-studio.vercel.app";

export default function sitemap() {
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "monthly" },
    { route: "/studio", priority: 0.8, changeFrequency: "monthly" },
    { route: "/work", priority: 0.9, changeFrequency: "weekly" },
    { route: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  const projectRoutes = projects.map((project) => ({
    route: `/projects/${project.slug}`,
    priority: 0.75,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...projectRoutes].map(({ route, priority, changeFrequency }) => ({
    url: `${siteUrl}${route}`,
    changeFrequency,
    priority,
  }));
}

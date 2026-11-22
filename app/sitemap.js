import { projects } from "@/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rovor-studio.vercel.app";

export default function sitemap() {
  const staticRoutes = [
    ["", 1, "monthly"], ["/studio", .8, "monthly"], ["/work", .9, "weekly"], ["/contact", .7, "yearly"],
    ["/fa", 1, "monthly"], ["/fa/studio", .8, "monthly"], ["/fa/work", .9, "weekly"], ["/fa/contact", .7, "yearly"],
  ];
  const projectRoutes = projects.flatMap(project => [
    [`/projects/${project.slug}`, .75, "monthly"],
    [`/fa/projects/${project.slug}`, .75, "monthly"],
  ]);
  return [...staticRoutes, ...projectRoutes].map(([route, priority, changeFrequency]) => ({
    url: `${siteUrl}${route}`, changeFrequency, priority,
  }));
}

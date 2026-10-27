import type { MetadataRoute } from "next";
import { projects } from "../content/portfolio";

function getSiteOrigin() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const railwayDomain = process.env.RAILWAY_PUBLIC_DOMAIN;
  if (configured) return configured.replace(/\/$/, "");
  if (railwayDomain) return `https://${railwayDomain.replace(/\/$/, "")}`;
  return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  if (!origin) return [];
  const routes = ["", "/about", "/experience", "/projects", "/projects/games"];
  return [
    ...routes.map((route) => ({
      url: `${origin}${route}`,
      changeFrequency: "monthly" as const,
    })),
    ...projects.map((project) => ({
      url: `${origin}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
    })),
  ];
}

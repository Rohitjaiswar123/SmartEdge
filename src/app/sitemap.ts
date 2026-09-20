import { MetadataRoute } from "next";
import { SERVICES, INDUSTRIES } from "@/data/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartedgebusiness.com";

  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/portfolio",
    "/about",
    // "/academy",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services#${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: service.isPrimary ? 0.9 : 0.7,
  }));

  const industryRoutes = INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industries#${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}

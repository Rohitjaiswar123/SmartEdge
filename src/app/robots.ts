import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "CCBot"],
        allow: "/",
      },
    ],
    sitemap: "https://smartedgebusiness.com/sitemap.xml",
  };
}

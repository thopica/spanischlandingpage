import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";

const SITE_URL = "https://onlinespanischlernen.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const cityPages = CITIES.map((city) => ({
    url: `${SITE_URL}/spanisch-lernen/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/spanisch-fur-senioren`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    ...cityPages,
    {
      url: `${SITE_URL}/impressum`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}

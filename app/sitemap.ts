import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wetracking.co",
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
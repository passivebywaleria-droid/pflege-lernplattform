import type { MetadataRoute } from "next"
import { SITE_URL, wissenUrl } from "@/lib/seo/site"
import { wissenPages } from "@/lib/wissen/wissen-content"

// Nur öffentlich indexierbare, deutschsprachige Seiten.
export default function sitemap(): MetadataRoute.Sitemap {
  const detailPages: MetadataRoute.Sitemap = wissenPages.map((p) => ({
    url: wissenUrl(p.slug),
    lastModified: p.updated,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: `${SITE_URL}/de`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: wissenUrl(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...detailPages,
  ]
}

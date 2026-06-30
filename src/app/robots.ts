import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo/site"

// AI-Crawler explizit erlauben (AEO) + Login-/App-Bereich vom Crawling ausnehmen.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-Web",
  "Google-Extended",
  "CCBot",
]

export default function robots(): MetadataRoute.Robots {
  const disallow = [
    "/api/",
    "/de/dashboard",
    "/de/lernen",
    "/de/pruefung",
    "/de/lehrer",
    "/de/admin",
    "/de/einstufung",
    "/de/fortschritt",
    "/de/lernzeit",
    "/de/wochenplan",
    "/de/review",
    "/de/dev",
  ]

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}

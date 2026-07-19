import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import withSerwistInit from "@serwist/next"

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts")

const withSerwist = withSerwistInit({
  swSrc: "src/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
  register: true,
  reloadOnOnline: true,
  cacheOnNavigation: true,
})

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["192.168.178.88"],
  async headers() {
    return [
      {
        // Cross-Origin-Isolation app-weit: Pflicht für SharedArrayBuffer →
        // On-Device-Whisper (pthread-WASM). Geprüft 2026-07-19: kein
        // eingebettetes Stripe.js (Hosted Checkout per Redirect), keine
        // OAuth-Popups, keine externen Client-Ressourcen — gefahrlos.
        // ZUKUNFTS-CONSTRAINT: OAuth (Google-Login) MUSS Redirect-Flow
        // nutzen, externe Embeds brauchen CORP-Header.
        source: "/:path*",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
      {
        // Whisper-Modell: unveränderlich versioniert über Dateinamen —
        // aggressiv cachen (57 MB sollen pro Gerät nur 1× fließen).
        source: "/whisper/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },
}

export default withSerwist(withNextIntl(nextConfig))

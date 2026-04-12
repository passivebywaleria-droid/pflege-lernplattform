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
}

export default withSerwist(withNextIntl(nextConfig))

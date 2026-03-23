import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts")

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["192.168.178.88"],
}

export default withNextIntl(nextConfig)

# syntax=docker/dockerfile:1
# Pflege-Lernplattform — Next.js 15 Standalone (DSGVO-Hosting Hetzner DE)
# Multi-Stage: deps -> builder -> runner. Runner enthält nur das standalone-Bundle.

FROM node:22-alpine AS base
# libc6-compat: einige native Module (z. B. sharp) brauchen es unter alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---- Dependencies (inkl. devDeps, fuer den Build noetig) ----
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ---- Build ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* muessen zur Build-Zeit vorliegen (werden ins Client-Bundle gebacken).
ARG NEXT_PUBLIC_VAPID_PUBLIC_KEY
ENV NEXT_PUBLIC_VAPID_PUBLIC_KEY=${NEXT_PUBLIC_VAPID_PUBLIC_KEY}
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Runner (Production) ----
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Nicht als root laufen
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
# Standalone-Output (server.js + minimal node_modules) und statische Assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]

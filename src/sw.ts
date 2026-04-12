/// <reference lib="webworker" />
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist, NetworkFirst, StaleWhileRevalidate, CacheFirst, ExpirationPlugin } from "serwist";

declare const self: ServiceWorkerGlobalScope &
  typeof globalThis &
  SerwistGlobalConfig & {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  };

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    ...defaultCache,

    // Lektions-Seiten: NetworkFirst mit Cache-Fallback
    {
      matcher: ({ url }) => url.pathname.includes("/lernen/"),
      handler: new NetworkFirst({
        cacheName: "lektion-pages",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Tage
          }),
        ],
      }),
    },

    // API-Responses (Glossar, etc.): NetworkFirst
    {
      matcher: ({ url }) =>
        url.pathname.startsWith("/api/") &&
        !url.pathname.includes("/ki-chat"),
      handler: new NetworkFirst({
        cacheName: "api-responses",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 30,
            maxAgeSeconds: 24 * 60 * 60, // 1 Tag
          }),
        ],
      }),
    },

    // Statische Assets (Icons, Bilder): CacheFirst
    {
      matcher: ({ url }) =>
        url.pathname.startsWith("/icons/") ||
        url.pathname.startsWith("/images/"),
      handler: new CacheFirst({
        cacheName: "static-assets",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Tage
          }),
        ],
      }),
    },

    // Content-Daten (Steps, Manifests): StaleWhileRevalidate
    {
      matcher: ({ url }) =>
        url.pathname.includes("/_next/static/") ||
        url.pathname.includes("/content/"),
      handler: new StaleWhileRevalidate({
        cacheName: "content-data",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 200,
            maxAgeSeconds: 14 * 24 * 60 * 60, // 14 Tage
          }),
        ],
      }),
    },
  ],
  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();

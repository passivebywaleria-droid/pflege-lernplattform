/// <reference lib="webworker" />
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import {
  Serwist,
  NetworkFirst,
  NetworkOnly,
  StaleWhileRevalidate,
  CacheFirst,
  ExpirationPlugin,
  BackgroundSyncPlugin,
} from "serwist";

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
  // WICHTIG: first-match-wins. Eigene Routen MÜSSEN vor `...defaultCache`
  // stehen — dessen RSC/HTML/Catch-all-Matcher greifen sonst zuerst (die
  // früheren Custom-Routen hinter defaultCache waren toter Code).
  runtimeCaching: [
    // Fortschritt-Sync: offline abgeschickte POSTs in eine Queue legen und
    // automatisch nachsenden, sobald wieder Netz da ist (Klassenzimmer-Szenario:
    // eingeloggte Schüler verlieren sonst ihren Server-Fortschritt).
    {
      method: "POST",
      matcher: ({ url }) => url.pathname === "/api/progress/situation",
      handler: new NetworkOnly({
        plugins: [
          new BackgroundSyncPlugin("progress-sync", {
            maxRetentionTime: 24 * 60, // Minuten — 1 Schultag reicht
          }),
        ],
      }),
    },

    // Lern-Seiten, RSC-Navigation (Client-Übergänge CE-Übersicht → Situation):
    // eigener Cache, weil RSC- und HTML-Antworten getrennt gehören.
    // networkTimeoutSeconds: im schlechten Schul-WLAN nicht ewig auf das Netz
    // warten, sondern nach 3 s auf den Cache zurückfallen.
    {
      matcher: ({ url, request, sameOrigin }) =>
        sameOrigin &&
        url.pathname.includes("/lernen/") &&
        request.headers.get("RSC") === "1",
      handler: new NetworkFirst({
        cacheName: "lektion-rsc",
        networkTimeoutSeconds: 3,
        plugins: [
          new ExpirationPlugin({
            maxEntries: 80,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Tage
          }),
        ],
      }),
    },

    // Lern-Seiten, volle Dokumente (Erstaufruf, Reload, Offline-Hard-Nav)
    {
      matcher: ({ url, sameOrigin }) =>
        sameOrigin && url.pathname.includes("/lernen/"),
      handler: new NetworkFirst({
        cacheName: "lektion-pages",
        networkTimeoutSeconds: 3,
        plugins: [
          new ExpirationPlugin({
            maxEntries: 80,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Tage
          }),
        ],
      }),
    },

    // API-Responses (Glossar, etc.): NetworkFirst — KI-Endpoints ausgenommen
    // (POST wird eh nicht gecached, und deren Offline-Verhalten regeln die
    // Komponenten selbst mit ehrlichen Hinweisen).
    {
      matcher: ({ url, sameOrigin }) =>
        sameOrigin &&
        url.pathname.startsWith("/api/") &&
        // Auth nie cachen (defaultCache-NetworkOnly soll greifen) …
        !url.pathname.startsWith("/api/auth/") &&
        // … KI-Endpoints regeln ihr Offline-Verhalten selbst.
        !url.pathname.includes("/ki-chat") &&
        !url.pathname.includes("/erklaer-anders"),
      handler: new NetworkFirst({
        cacheName: "api-responses",
        networkTimeoutSeconds: 4,
        plugins: [
          new ExpirationPlugin({
            maxEntries: 30,
            maxAgeSeconds: 24 * 60 * 60, // 1 Tag
          }),
        ],
      }),
    },

    ...defaultCache,

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

// ── Push Notifications ──

self.addEventListener("push", (event) => {
  if (!event.data) return;

  try {
    const data = event.data.json() as {
      title?: string;
      body?: string;
      icon?: string;
      url?: string;
    };

    const title = data.title ?? "Pflege-Lernplattform";
    const options: NotificationOptions = {
      body: data.body ?? "Zeit zum Lernen!",
      icon: data.icon ?? "/icons/icon-192x192.svg",
      badge: "/icons/icon-192x192.svg",
      data: { url: data.url ?? "/lernen" },
      tag: "pflege-reminder",
    };

    event.waitUntil(self.registration.showNotification(title, options));
  } catch {
    // Ungültiges Push-Format ignorieren
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url = (event.notification.data?.url as string) ?? "/lernen";

  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clientList) => {
      // Existierendes Fenster fokussieren
      for (const client of clientList) {
        if ("focus" in client) {
          client.focus();
          client.navigate(url);
          return;
        }
      }
      // Neues Fenster öffnen
      self.clients.openWindow(url);
    })
  );
});

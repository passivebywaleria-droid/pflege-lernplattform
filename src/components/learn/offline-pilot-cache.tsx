"use client";

// Offline-Vorcache für den Klassenzimmer-Pilot (25 Phones, schlechtes Schul-WLAN).
//
// Sobald ein Schüler die CE-Übersicht online öffnet, werden die Dokumente aller
// Situationen dieser CE still in den Service-Worker-Cache gelegt („lektion-pages",
// gleiche Cache-Namen wie in src/sw.ts). Die JS-Chunks (Step-Komponenten +
// Content) kommen über das Precache-Manifest des Service Workers — hier geht es
// um die HTML-Dokumente, die NetworkFirst sonst nur nach Besuch kennt.
//
// Bewusst unsichtbar: kein UI, kein Spinner — höchstens ein console.debug.
// Drosselung über localStorage (1× pro Tag pro CE + Build).

import { useEffect } from "react";

const CACHE_NAME = "lektion-pages";
const THROTTLE_PREFIX = "pflege-offline-warm:";
const THROTTLE_MS = 24 * 60 * 60 * 1000; // 1 Tag

interface OfflinePilotCacheProps {
  locale: string;
  ceId: string;
  situationIds: string[];
}

/** Baut die Player-URL exakt so, wie die CE-Übersicht sie verlinkt (inkl. ?ce=). */
export function situationUrls(
  locale: string,
  ceId: string,
  situationIds: string[]
): string[] {
  return situationIds.flatMap((id) => [
    `/${locale}/lernen/situation/${id}?ce=${ceId}`,
    // Fallback ohne Query — falls jemand die URL direkt/geteilt öffnet.
    `/${locale}/lernen/situation/${id}`,
  ]);
}

/** Legt alle Situations-Dokumente einer CE in den SW-Cache (best effort). */
export async function warmSituationCache(
  locale: string,
  ceId: string,
  situationIds: string[]
): Promise<number> {
  if (typeof caches === "undefined") return 0;
  const cache = await caches.open(CACHE_NAME);
  let cached = 0;
  // Sequenziell, um das (womöglich schwache) Netz nicht zu fluten.
  for (const url of situationUrls(locale, ceId, situationIds)) {
    try {
      const response = await fetch(url, { credentials: "same-origin" });
      if (response.ok) {
        await cache.put(url, response);
        cached++;
      }
    } catch {
      // Einzelfehler ignorieren — was nicht klappt, holt NetworkFirst später.
    }
  }
  return cached;
}

export function OfflinePilotCache({
  locale,
  ceId,
  situationIds,
}: OfflinePilotCacheProps) {
  useEffect(() => {
    if (situationIds.length === 0) return;
    if (typeof navigator === "undefined" || !navigator.onLine) return;
    if (!("serviceWorker" in navigator) || typeof caches === "undefined") return;

    const throttleKey = `${THROTTLE_PREFIX}${ceId}`;
    try {
      const last = Number(localStorage.getItem(throttleKey) ?? 0);
      if (Date.now() - last < THROTTLE_MS) return;
    } catch {
      // localStorage nicht verfügbar → trotzdem wärmen
    }

    let cancelled = false;
    // Erst wenn der SW aktiv ist — sonst landen die Antworten zwar im Cache,
    // aber niemand bedient sie offline.
    navigator.serviceWorker.ready
      .then(() => {
        if (cancelled) return;
        return warmSituationCache(locale, ceId, situationIds);
      })
      .then((count) => {
        if (cancelled || count === undefined) return;
        try {
          localStorage.setItem(throttleKey, String(Date.now()));
        } catch {
          // ignorieren
        }
        console.debug(`[offline] ${count} Situations-Dokumente vorgecacht (${ceId})`);
      })
      .catch(() => {
        // best effort — nächster Besuch versucht es erneut
      });
    return () => {
      cancelled = true;
    };
  }, [locale, ceId, situationIds]);

  return null;
}

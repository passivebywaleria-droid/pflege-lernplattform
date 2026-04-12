"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OfflineDownloadProps {
  leId: string;
  leTitle: string;
  sessionCount?: number;
}

const CACHE_KEY_PREFIX = "pflege-offline-le-";

/** Prüft ob eine LE im Offline-Cache ist */
function isLeOfflineCached(leId: string): boolean {
  try {
    return localStorage.getItem(`${CACHE_KEY_PREFIX}${leId}`) === "true";
  } catch {
    return false;
  }
}

/** Markiert eine LE als offline verfügbar */
function markLeOfflineCached(leId: string, cached: boolean) {
  try {
    if (cached) {
      localStorage.setItem(`${CACHE_KEY_PREFIX}${leId}`, "true");
    } else {
      localStorage.removeItem(`${CACHE_KEY_PREFIX}${leId}`);
    }
  } catch {
    // localStorage voll
  }
}

/** Gibt alle offline gecachten LE-IDs zurück */
export function getOfflineLektionen(): string[] {
  const result: string[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(CACHE_KEY_PREFIX)) {
        result.push(key.replace(CACHE_KEY_PREFIX, ""));
      }
    }
  } catch {
    // Fehler ignorieren
  }
  return result;
}

export function OfflineDownload({ leId, leTitle, sessionCount = 8 }: OfflineDownloadProps) {
  const [isCached, setIsCached] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsCached(isLeOfflineCached(leId));
  }, [leId]);

  const downloadForOffline = useCallback(async () => {
    if (downloading) return;
    setDownloading(true);
    setProgress(0);

    try {
      // Cache die Lektions-Seite selbst
      const cache = await caches.open("lektion-pages");

      // Seiten-URLs die gecacht werden sollen
      const urls = [
        `/de/lernen/${leId}`,
      ];

      // Sessions 1-8 (Steps werden als JS-Bundles geladen)
      for (let s = 1; s <= sessionCount; s++) {
        urls.push(`/de/lernen/${leId}?session=${s}`);
      }

      let done = 0;
      for (const url of urls) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            await cache.put(url, response);
          }
        } catch {
          // Einzelne Fehler ignorieren
        }
        done++;
        setProgress(Math.round((done / urls.length) * 100));
      }

      markLeOfflineCached(leId, true);
      setIsCached(true);
    } catch {
      // Cache API nicht verfügbar
    } finally {
      setDownloading(false);
    }
  }, [leId, sessionCount, downloading]);

  const removeOfflineCache = useCallback(async () => {
    try {
      const cache = await caches.open("lektion-pages");
      const keys = await cache.keys();
      for (const request of keys) {
        if (request.url.includes(leId)) {
          await cache.delete(request);
        }
      }
      markLeOfflineCached(leId, false);
      setIsCached(false);
    } catch {
      // Fehler ignorieren
    }
  }, [leId]);

  return (
    <div className="rounded-xl border border-[var(--lern-border)]/50 bg-[var(--lern-bg-primary)] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Offline-Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isCached ? "#6B8F71" : "var(--lern-text-tertiary)"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <div>
            <p className="text-xs font-medium text-[var(--lern-text-primary)]">
              {isCached ? "Offline verfügbar" : "Für Offline speichern"}
            </p>
            <p className="text-[10px] text-[var(--lern-text-tertiary)]">{leTitle}</p>
          </div>
        </div>

        {isCached ? (
          <button
            onClick={removeOfflineCache}
            className="rounded-lg bg-[var(--lern-bg)] px-3 py-1.5 text-xs font-medium text-[var(--lern-text-secondary)] transition-all active:scale-95"
          >
            Entfernen
          </button>
        ) : (
          <button
            onClick={downloadForOffline}
            disabled={downloading}
            className="rounded-lg bg-[var(--lern-accent)] px-3 py-1.5 text-xs font-medium text-white transition-all active:scale-95 disabled:opacity-50"
          >
            {downloading ? `${progress}%` : "Speichern"}
          </button>
        )}
      </div>

      {/* Download-Fortschritt */}
      <AnimatePresence>
        {downloading && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-2 h-1.5 rounded-full bg-[var(--lern-bg)]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full rounded-full bg-[var(--lern-accent)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

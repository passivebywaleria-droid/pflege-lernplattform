"use client";

import { useCallback, useEffect, useRef } from "react";
import type { LernProfil, SessionFortschritt, SchwachstellenKarte } from "./use-lern-fortschritt";

/**
 * Server-Sync-Hook: Sendet localStorage-Änderungen async an den Server.
 *
 * Architektur: Dual-Write
 *   1. localStorage bleibt als sofortiger Cache (kein Latenz-Gefühl)
 *   2. Dieser Hook sendet Änderungen async an /api/progress/*
 *   3. Bei Offline: Queue wächst, wird bei Reconnect geflusht
 *
 * Usage: In der Root-Komponente neben useLernFortschritt() aufrufen.
 */

interface SyncQueue {
  sessions: Array<{ data: Record<string, unknown>; timestamp: number }>;
  leProgress: Array<{ data: Record<string, unknown>; timestamp: number }>;
  daily: Array<{ data: Record<string, unknown>; timestamp: number }>;
  schwaechen: Array<{ data: Record<string, unknown>; timestamp: number }>;
  xp: Array<{ data: Record<string, unknown>; timestamp: number }>;
}

const SYNC_QUEUE_KEY = "pflege-sync-queue";

function loadQueue(): SyncQueue {
  try {
    const raw = localStorage.getItem(SYNC_QUEUE_KEY);
    if (raw) return JSON.parse(raw) as SyncQueue;
  } catch { /* ignore */ }
  return { sessions: [], leProgress: [], daily: [], schwaechen: [], xp: [] };
}

function saveQueue(queue: SyncQueue) {
  try {
    localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
  } catch { /* quota exceeded */ }
}

async function postJSON(url: string, data: unknown): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });
    return res.ok;
  } catch {
    return false; // Offline oder Netzwerkfehler
  }
}

export function useServerSync() {
  const queueRef = useRef<SyncQueue>(loadQueue());
  const flushingRef = useRef(false);

  // Queue flushen: Alle pending Items an Server senden
  const flushQueue = useCallback(async () => {
    if (flushingRef.current) return;
    flushingRef.current = true;

    const queue = queueRef.current;
    let changed = false;

    // Sessions
    while (queue.sessions.length > 0) {
      const item = queue.sessions[0];
      if (await postJSON("/api/progress/session", item.data)) {
        queue.sessions.shift();
        changed = true;
      } else {
        break; // Offline → aufhören
      }
    }

    // LE Progress
    while (queue.leProgress.length > 0) {
      const item = queue.leProgress[0];
      if (await postJSON("/api/progress/le", item.data)) {
        queue.leProgress.shift();
        changed = true;
      } else {
        break;
      }
    }

    // Daily
    while (queue.daily.length > 0) {
      const item = queue.daily[0];
      if (await postJSON("/api/progress/daily", item.data)) {
        queue.daily.shift();
        changed = true;
      } else {
        break;
      }
    }

    // Schwächen
    while (queue.schwaechen.length > 0) {
      const item = queue.schwaechen[0];
      if (await postJSON("/api/progress/schwaechen", item.data)) {
        queue.schwaechen.shift();
        changed = true;
      } else {
        break;
      }
    }

    // XP
    while (queue.xp.length > 0) {
      const item = queue.xp[0];
      if (await postJSON("/api/progress/xp", item.data)) {
        queue.xp.shift();
        changed = true;
      } else {
        break;
      }
    }

    if (changed) {
      saveQueue(queue);
    }

    flushingRef.current = false;
  }, []);

  // Session abgeschlossen → Server syncen
  const syncSession = useCallback(
    (sessionData: SessionFortschritt, ceId: string) => {
      const data = {
        leId: sessionData.leId,
        ceId,
        session: `s${sessionData.session}`,
        startzeit: new Date(Date.now() - sessionData.antworten.length * 30000).toISOString(),
        endzeit: new Date().toISOString(),
        aktivMinuten: Math.round(sessionData.antworten.reduce((s, a) => s + a.zeitMs, 0) / 60000),
        stepsBearbeitet: sessionData.currentStep + 1,
        stepsGesamt: sessionData.totalSteps,
        score: sessionData.totalQuestions > 0
          ? Math.round((sessionData.score / sessionData.totalQuestions) * 100)
          : 0,
        xpEarned: sessionData.xp,
        isComplete: sessionData.currentStep >= sessionData.totalSteps - 1,
        antworten: sessionData.antworten,
      };

      queueRef.current.sessions.push({ data, timestamp: Date.now() });
      saveQueue(queueRef.current);
      flushQueue();
    },
    [flushQueue]
  );

  // LE-Fortschritt syncen
  const syncLeProgress = useCallback(
    (leId: string, gesamtXp: number, abgeschlossen: boolean, letzterScore?: number, naechsteWiederholung?: string) => {
      const data = {
        leId,
        gesamtXp,
        abgeschlossen,
        letzterScore,
        naechsteWiederholung,
        sessionProgress: {},
      };

      queueRef.current.leProgress.push({ data, timestamp: Date.now() });
      saveQueue(queueRef.current);
      flushQueue();
    },
    [flushQueue]
  );

  // Tagesaktivität syncen
  const syncDaily = useCallback(
    (datum: string, minutenAktiv: number, xpVerdient: number, sessionsAbgeschlossen: number) => {
      const data = { datum, minutenAktiv, xpVerdient, sessionsAbgeschlossen, stepsBearbeitet: 0 };

      queueRef.current.daily.push({ data, timestamp: Date.now() });
      saveQueue(queueRef.current);
      flushQueue();
    },
    [flushQueue]
  );

  // Schwäche syncen
  const syncSchwaeche = useCallback(
    (karte: SchwachstellenKarte) => {
      const data = {
        leId: karte.leId,
        begriff: karte.begriff,
        fragetext: karte.fragetext,
        richtigeAntwort: karte.richtigeAntwort,
        falscheAntwort: karte.falscheAntwort,
        naechsteWiederholung: karte.naechsteWiederholung,
        intervallTage: karte.intervallTage,
      };

      queueRef.current.schwaechen.push({ data, timestamp: Date.now() });
      saveQueue(queueRef.current);
      flushQueue();
    },
    [flushQueue]
  );

  // XP-Event syncen
  const syncXp = useCallback(
    (xpAmount: number, source: string, referenceId?: string) => {
      const data = { xpAmount, source, referenceId };

      queueRef.current.xp.push({ data, timestamp: Date.now() });
      saveQueue(queueRef.current);
      flushQueue();
    },
    [flushQueue]
  );

  // Full-Sync: Ganzes Profil hochladen (für Migration localStorage → Server)
  const syncFullProfile = useCallback(
    async (profil: LernProfil): Promise<boolean> => {
      const data = {
        leProgress: Object.values(profil.fortschritte).map((le) => ({
          leId: le.leId,
          gesamtXp: le.gesamtXp,
          abgeschlossen: le.abgeschlossen,
          letzterScore: le.letzterScore,
          naechsteWiederholung: le.naechsteWiederholung,
          sessionProgress: le.sessions,
        })),
        tagesAktivitaeten: profil.tagesAktivitaeten,
        streak: {
          currentStreak: profil.streakTage,
          longestStreak: profil.streakTage,
          lastActivityDate: profil.letzterStreakTag,
        },
        einstufung: profil.achsen
          ? {
              sprachLevel: profil.achsen.sprache,
              fachwissenLevel: profil.achsen.fachwissen,
              details: profil.einstufungsErgebnis ?? {},
            }
          : undefined,
        gesamtXp: profil.gesamtXp,
      };

      return postJSON("/api/progress/sync", data);
    },
    []
  );

  // Bei Reconnect: Queue flushen
  useEffect(() => {
    const handleOnline = () => flushQueue();
    window.addEventListener("online", handleOnline);

    // Initial flush bei Mount (falls Queue aus vorherigem Tab übrig)
    if (navigator.onLine) {
      flushQueue();
    }

    return () => window.removeEventListener("online", handleOnline);
  }, [flushQueue]);

  // Pending-Count für UI
  const getPendingCount = useCallback((): number => {
    const q = queueRef.current;
    return q.sessions.length + q.leProgress.length + q.daily.length + q.schwaechen.length + q.xp.length;
  }, []);

  return {
    syncSession,
    syncLeProgress,
    syncDaily,
    syncSchwaeche,
    syncXp,
    syncFullProfile,
    flushQueue,
    getPendingCount,
  };
}

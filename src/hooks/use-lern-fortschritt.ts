"use client";

import { useCallback, useEffect, useState } from "react";

// --- Types ---

export interface StepAntwort {
  stepId: string;
  correct: boolean | null;  // null = Text/Reflexion (kein richtig/falsch)
  gewaehlteOption?: string;
  freitextAntwort?: string;
  zeitMs?: number;
}

export interface SessionFortschritt {
  leId: string;
  session: number;
  currentStep: number;
  totalSteps: number;
  xp: number;
  score: number;
  totalQuestions: number;
  hearts: number;
  streak: number;
  reflexionText: string | null;
  antworten: StepAntwort[];
  updatedAt: string;
}

export interface LeFortschritt {
  leId: string;
  sessions: Record<number, SessionFortschritt>;
  gesamtXp: number;
  abgeschlossen: boolean;
  letzteAktivitaet: string;
}

export interface TagesAktivitaet {
  datum: string;  // "2026-03-23"
  minutenAktiv: number;
  xpVerdient: number;
  sessionsAbgeschlossen: number;
}

export interface LernProfil {
  fortschritte: Record<string, LeFortschritt>;  // Key: leId
  tagesAktivitaeten: TagesAktivitaet[];
  streakTage: number;
  letzterStreakTag: string | null;
  gesamtXp: number;
  schwaechen: SchwachstellenKarte[];
}

export interface SchwachstellenKarte {
  id: string;
  leId: string;
  begriff: string;
  fragetext: string;
  richtigeAntwort: string;
  falscheAntwort: string;
  erstelltAm: string;
  naechsteWiederholung: string;
  intervallTage: number;
}

// --- Storage Keys ---

const STORAGE_KEY = "pflege-lernprofil";

// --- Hook ---

export function useLernFortschritt() {
  const [profil, setProfil] = useState<LernProfil | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Laden aus localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setProfil(JSON.parse(raw));
      } else {
        setProfil(createEmptyProfil());
      }
    } catch {
      setProfil(createEmptyProfil());
    }
    setLoaded(true);
  }, []);

  // Speichern bei Änderung
  useEffect(() => {
    if (profil && loaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profil));
      } catch {
        // localStorage voll — später IndexedDB
      }
    }
  }, [profil, loaded]);

  // Session-Fortschritt speichern
  const saveSessionFortschritt = useCallback(
    (data: SessionFortschritt) => {
      setProfil((prev) => {
        if (!prev) return prev;
        const next = { ...prev };
        const fortschritte = { ...next.fortschritte };

        if (!fortschritte[data.leId]) {
          fortschritte[data.leId] = {
            leId: data.leId,
            sessions: {},
            gesamtXp: 0,
            abgeschlossen: false,
            letzteAktivitaet: new Date().toISOString(),
          };
        }

        const le = { ...fortschritte[data.leId] };
        le.sessions = { ...le.sessions, [data.session]: data };
        le.letzteAktivitaet = new Date().toISOString();

        // Gesamt-XP berechnen
        le.gesamtXp = Object.values(le.sessions).reduce(
          (sum, s) => sum + s.xp,
          0
        );

        fortschritte[data.leId] = le;
        next.fortschritte = fortschritte;

        // Gesamt-XP
        next.gesamtXp = Object.values(fortschritte).reduce(
          (sum, l) => sum + l.gesamtXp,
          0
        );

        return next;
      });
    },
    []
  );

  // Tages-Streak aktualisieren
  const updateStreakTag = useCallback(() => {
    setProfil((prev) => {
      if (!prev) return prev;
      const heute = new Date().toISOString().split("T")[0];

      if (prev.letzterStreakTag === heute) return prev; // Schon gezählt

      const gestern = new Date(Date.now() - 86400000)
        .toISOString()
        .split("T")[0];
      const next = { ...prev };

      if (prev.letzterStreakTag === gestern) {
        next.streakTage = prev.streakTage + 1;
      } else if (prev.letzterStreakTag !== heute) {
        next.streakTage = 1; // Reset
      }

      next.letzterStreakTag = heute;
      return next;
    });
  }, []);

  // Schwachstelle hinzufügen (für Karteikarten)
  const addSchwaeche = useCallback(
    (karte: Omit<SchwachstellenKarte, "id" | "erstelltAm" | "naechsteWiederholung" | "intervallTage">) => {
      setProfil((prev) => {
        if (!prev) return prev;
        const next = { ...prev };
        next.schwaechen = [
          ...prev.schwaechen,
          {
            ...karte,
            id: `sw-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            erstelltAm: new Date().toISOString(),
            naechsteWiederholung: new Date().toISOString(), // Sofort
            intervallTage: 1, // Spaced Repetition: 1 → 3 → 7 → 14 → 30
          },
        ];
        return next;
      });
    },
    []
  );

  // Tagesaktivität loggen
  const logAktivitaet = useCallback(
    (minuten: number, xp: number, sessionsAbgeschlossen: number) => {
      setProfil((prev) => {
        if (!prev) return prev;
        const heute = new Date().toISOString().split("T")[0];
        const next = { ...prev };
        const aktivitaeten = [...prev.tagesAktivitaeten];

        const heuteIdx = aktivitaeten.findIndex((a) => a.datum === heute);
        if (heuteIdx >= 0) {
          aktivitaeten[heuteIdx] = {
            ...aktivitaeten[heuteIdx],
            minutenAktiv: aktivitaeten[heuteIdx].minutenAktiv + minuten,
            xpVerdient: aktivitaeten[heuteIdx].xpVerdient + xp,
            sessionsAbgeschlossen:
              aktivitaeten[heuteIdx].sessionsAbgeschlossen + sessionsAbgeschlossen,
          };
        } else {
          aktivitaeten.push({
            datum: heute,
            minutenAktiv: minuten,
            xpVerdient: xp,
            sessionsAbgeschlossen,
          });
        }

        // Nur letzte 90 Tage behalten
        next.tagesAktivitaeten = aktivitaeten.slice(-90);
        return next;
      });
    },
    []
  );

  // Fortschritt für eine LE laden
  const getLeFortschritt = useCallback(
    (leId: string): LeFortschritt | null => {
      return profil?.fortschritte[leId] ?? null;
    },
    [profil]
  );

  // Letzter aktiver Punkt (für "Weitermachen")
  const getLetztePosition = useCallback((): {
    leId: string;
    session: number;
    step: number;
    totalSteps: number;
  } | null => {
    if (!profil) return null;

    let latest: { leId: string; session: number; data: SessionFortschritt } | null = null;

    for (const [leId, le] of Object.entries(profil.fortschritte)) {
      for (const [sess, data] of Object.entries(le.sessions)) {
        if (
          data.currentStep < data.totalSteps - 1 &&
          (!latest || data.updatedAt > latest.data.updatedAt)
        ) {
          latest = { leId, session: parseInt(sess), data };
        }
      }
    }

    if (!latest) return null;

    return {
      leId: latest.leId,
      session: latest.session,
      step: latest.data.currentStep,
      totalSteps: latest.data.totalSteps,
    };
  }, [profil]);

  return {
    profil,
    loaded,
    saveSessionFortschritt,
    updateStreakTag,
    addSchwaeche,
    logAktivitaet,
    getLeFortschritt,
    getLetztePosition,
  };
}

// --- Helpers ---

function createEmptyProfil(): LernProfil {
  return {
    fortschritte: {},
    tagesAktivitaeten: [],
    streakTage: 0,
    letzterStreakTag: null,
    gesamtXp: 0,
    schwaechen: [],
  };
}

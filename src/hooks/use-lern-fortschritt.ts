"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { berechneAchsen } from "@/lib/adaptive/lern-profil";
import { updateKompetenz, lernzielVonStep, type KompetenzRegister } from "@/lib/adaptive/kompetenz-register";
import type { EinstufungsErgebnis } from "@/lib/einstufung/algorithmus";

// --- Types ---

export interface StepAntwort {
  stepId: string;
  stepType: string;
  correct: boolean | null;  // null = Text/Reflexion (kein richtig/falsch)
  gewaehlteOption?: string;
  freitextAntwort?: string;
  zeitMs: number;            // Antwortzeit in ms (Pflicht!)
  bloomLevel?: number;
  fehlerKategorie?: "raten" | "konzept" | "sprache" | "verwechslung" | "fluechtig";
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

export interface FaelligeWiederholung {
  leId: string;
  faelligSeitTagen: number;
  letzterScore: number;
}

export interface LeFortschritt {
  leId: string;
  sessions: Record<number, SessionFortschritt>;
  gesamtXp: number;
  abgeschlossen: boolean;
  letzteAktivitaet: string;
  naechsteWiederholung?: string;  // ISO-Timestamp für Spaced Repetition
  letzterScore?: number;          // Durchschnittlicher Score der letzten Session (0-100)
}

export interface TagesAktivitaet {
  datum: string;  // "2026-03-23"
  minutenAktiv: number;
  xpVerdient: number;
  sessionsAbgeschlossen: number;
}

// Detailliertes Session-Log für Lernzeit-Nachweis
export interface SessionLog {
  leId: string;
  ceId: string;
  session: number;
  startzeit: string;  // ISO-Timestamp
  endzeit: string;    // ISO-Timestamp
  aktivMinuten: number;
  stepsBearbeitet: number;
  stepsGesamt: number;
  score: number;      // 0-100
}

export interface LernAchsen {
  sprache: number;           // 1-5 (1=B1 schwach, 5=C1+ Muttersprachler)
  fachwissen: number;        // 1-5 (1=Anfänger, 5=Fortgeschritten)
  letzteBerechnung: string;  // ISO-String
}

export interface LernProfil {
  fortschritte: Record<string, LeFortschritt>;  // Key: leId
  tagesAktivitaeten: TagesAktivitaet[];
  streakTage: number;
  letzterStreakTag: string | null;
  gesamtXp: number;
  schwaechen: SchwachstellenKarte[];
  achsen?: LernAchsen;                      // Zwei-Achsen-Profil (global)
  achsenProCe?: Record<string, LernAchsen>; // Pro CE differenziert
  b1ToggleCount?: number;                   // Wie oft wurde B1-Toggle genutzt
  alleAntworten?: StepAntwort[];            // Letzte 200 Antworten (für Profil-Berechnung)
  kompetenzRegister?: KompetenzRegister;    // Pro-Lernziel Mastery-Tracking
  sessionLogs?: SessionLog[];               // Detaillierte Session-Logs für Lernzeit-Nachweis (max 500)
  einstufungsErgebnis?: EinstufungsErgebnis; // Vollständiges Einstufungsergebnis (aus einstufung/page.tsx)
  modus?: "theorie" | "praxis";             // Praktikums-Modus (default: theorie)
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

// --- IndexedDB Restore Helper ---

function tryRestoreFromIndexedDB(): Promise<LernProfil | null> {
  return new Promise((resolve) => {
    try {
      if (typeof indexedDB === "undefined") {
        resolve(null);
        return;
      }
      const request = indexedDB.open("pflege-backup", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("profil")) {
          db.createObjectStore("profil");
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction("profil", "readonly");
        const store = tx.objectStore("profil");
        const getReq = store.get("backup");
        getReq.onsuccess = () => {
          db.close();
          if (getReq.result) {
            try {
              const parsed = JSON.parse(getReq.result as string) as LernProfil;
              resolve(parsed);
              return;
            } catch {
              // Parsing fehlgeschlagen
            }
          }
          resolve(null);
        };
        getReq.onerror = () => {
          db.close();
          resolve(null);
        };
      };
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

// --- Hook ---

export function useLernFortschritt() {
  const [profil, setProfil] = useState<LernProfil | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Laden aus localStorage + IndexedDB, neuere Daten gewinnen
  useEffect(() => {
    let cancelled = false;

    async function loadProfil() {
      let lsProfil: LernProfil | null = null;
      let idbProfil: LernProfil | null = null;

      // 1. localStorage synchron lesen
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          lsProfil = JSON.parse(raw) as LernProfil;
        }
      } catch {
        // localStorage beschädigt — ignorieren
      }

      // 2. IndexedDB async lesen
      try {
        idbProfil = await tryRestoreFromIndexedDB();
      } catch {
        // IndexedDB nicht verfügbar — ignorieren
      }

      if (cancelled) return;

      // 3. Neuere Daten wählen (via letzteAktivitaet der Fortschritte)
      const getNewestTimestamp = (p: LernProfil): string => {
        let newest = "";
        for (const le of Object.values(p.fortschritte)) {
          if (le.letzteAktivitaet > newest) newest = le.letzteAktivitaet;
        }
        return newest;
      };

      let gewinner: LernProfil | null = null;

      if (lsProfil && idbProfil) {
        // Beide vorhanden → neuere Daten gewinnen
        const lsTime = getNewestTimestamp(lsProfil);
        const idbTime = getNewestTimestamp(idbProfil);
        gewinner = idbTime > lsTime ? idbProfil : lsProfil;
      } else if (lsProfil) {
        gewinner = lsProfil;
      } else if (idbProfil) {
        gewinner = idbProfil;
      }

      if (gewinner) {
        setProfil(gewinner);
        // localStorage synchronisieren falls IndexedDB neuer war
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(gewinner));
        } catch {
          // localStorage voll — ignorieren
        }
      } else {
        setProfil(createEmptyProfil());
      }
      setLoaded(true);
    }

    loadProfil();
    return () => { cancelled = true; };
  }, []);

  // Debounced Speichern bei Änderung (bündelt schnelle State-Updates)
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const profilRef = useRef<LernProfil | null>(null);
  profilRef.current = profil;

  const flushSave = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    if (!profilRef.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profilRef.current));
    } catch { /* quota exceeded */ }
  }, []);

  useEffect(() => {
    if (profil && loaded) {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(profil));
        } catch { /* quota exceeded */ }
      }, 300);
    }
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [profil, loaded]);

  // Sofort speichern bei Tab-/Fenster-Schließen (kein Debounce)
  useEffect(() => {
    const handleBeforeUnloadSave = () => flushSave();
    window.addEventListener("beforeunload", handleBeforeUnloadSave);
    return () => window.removeEventListener("beforeunload", handleBeforeUnloadSave);
  }, [flushSave]);

  // Session-Fortschritt speichern (mit Spaced Repetition + Store-Sync)
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

        // --- Spaced Repetition (#37) ---
        // Score berechnen (0-100)
        const scoreProzent = data.totalQuestions > 0
          ? Math.round((data.score / data.totalQuestions) * 100)
          : 0;
        le.letzterScore = scoreProzent;

        // Nächste Wiederholung basierend auf Performance
        const jetzt = Date.now();
        let intervallTage: number;
        if (scoreProzent >= 85) {
          intervallTage = 7;  // Gut verstanden → 7 Tage
        } else if (scoreProzent >= 60) {
          intervallTage = 3;  // Mittelmäßig → 3 Tage
        } else {
          intervallTage = 1;  // Schwach → morgen wiederholen
        }
        le.naechsteWiederholung = new Date(jetzt + intervallTage * 24 * 60 * 60 * 1000).toISOString();

        // --- Store-Sync (#39): Schwächen ins KompetenzRegister eintragen ---
        const register = { ...(next.kompetenzRegister ?? {}) };
        for (const antwort of data.antworten) {
          if (antwort.correct === false && antwort.fehlerKategorie) {
            // Falsche Antwort → Kompetenz-Eintrag aktualisieren
            const lernzielId = lernzielVonStep(antwort.stepId, undefined, data.leId);
            register[lernzielId] = updateKompetenz(register[lernzielId], lernzielId, antwort);
          }
        }
        next.kompetenzRegister = register;

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

  // Session-Log hinzufügen (für Lernzeit-Nachweis)
  const logSession = useCallback(
    (log: SessionLog) => {
      setProfil((prev) => {
        if (!prev) return prev;
        const logs = [...(prev.sessionLogs ?? []), log].slice(-500);
        return { ...prev, sessionLogs: logs };
      });
    },
    [],
  );

  // Einzelne Antwort speichern (für Adaptivität)
  const saveAntwort = useCallback(
    (antwort: StepAntwort) => {
      setProfil((prev) => {
        if (!prev) return prev;
        const alleAntworten = [...(prev.alleAntworten ?? []), antwort].slice(-200);
        return { ...prev, alleAntworten };
      });
      // Aktivität bei jeder Antwort loggen (nicht nur Dashboard-Besuch)
      try {
        localStorage.setItem("pflege-letzte-aktivitaet", Date.now().toString());
      } catch {
        // localStorage voll — ignorieren
      }
    },
    []
  );

  // B1-Toggle zählen
  const incrementB1Toggle = useCallback(() => {
    setProfil((prev) => {
      if (!prev) return prev;
      return { ...prev, b1ToggleCount: (prev.b1ToggleCount ?? 0) + 1 };
    });
  }, []);

  // Kompetenz-Eintrag nach Antwort aktualisieren
  const updateKompetenzEintrag = useCallback(
    (antwort: StepAntwort, lernziel?: string, leId?: string) => {
      setProfil((prev) => {
        if (!prev) return prev;
        const register = { ...(prev.kompetenzRegister ?? {}) };
        const lernzielId = lernzielVonStep(antwort.stepId, lernziel, leId);
        register[lernzielId] = updateKompetenz(register[lernzielId], lernzielId, antwort);
        return { ...prev, kompetenzRegister: register };
      });
    },
    [],
  );

  // Einstufungsergebnis speichern (statt direktem localStorage-Zugriff)
  const setEinstufungsErgebnis = useCallback(
    (ergebnis: EinstufungsErgebnis) => {
      setProfil((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          achsen: {
            sprache: ergebnis.sprache.level,
            fachwissen: ergebnis.fachwissen.level,
            letzteBerechnung: ergebnis.abgeschlossenAm,
          },
          einstufungsErgebnis: ergebnis,
        };
      });
    },
    [],
  );

  // Lernprofil-Achsen neu berechnen (nach jeder Session)
  const updateAchsen = useCallback(() => {
    setProfil((prev) => {
      if (!prev) return prev;
      const antworten = prev.alleAntworten ?? [];
      if (antworten.length < 5) return prev; // Zu wenig Daten
      const totalSteps = antworten.length;
      const achsen = berechneAchsen(antworten, prev.schwaechen, prev.b1ToggleCount ?? 0, totalSteps);
      return { ...prev, achsen };
    });
  }, []);

  // Export: Profil als JSON-String
  const exportProfil = useCallback((): string | null => {
    if (!profil) return null;
    return JSON.stringify(profil, null, 2);
  }, [profil]);

  // Import: Profil aus JSON-String laden
  const importProfil = useCallback((json: string): boolean => {
    try {
      const parsed = JSON.parse(json) as LernProfil;
      // Minimale Validierung: Pflichtfelder prüfen
      if (
        typeof parsed.gesamtXp !== "number" ||
        typeof parsed.streakTage !== "number" ||
        !parsed.fortschritte ||
        !Array.isArray(parsed.tagesAktivitaeten) ||
        !Array.isArray(parsed.schwaechen)
      ) {
        return false;
      }
      setProfil(parsed);
      return true;
    } catch {
      return false;
    }
  }, []);

  // Auto-Backup in IndexedDB
  const backupToIndexedDB = useCallback(() => {
    if (!profil) return;
    if (typeof indexedDB === "undefined") return;
    try {
      const request = indexedDB.open("pflege-backup", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("profil")) {
          db.createObjectStore("profil");
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction("profil", "readwrite");
        const store = tx.objectStore("profil");
        store.put(JSON.stringify(profil), "backup");
        tx.oncomplete = () => db.close();
      };
    } catch {
      // IndexedDB nicht verfügbar — stille Fehlerbehandlung
    }
  }, [profil]);

  // Restore aus IndexedDB (falls localStorage leer)
  const restoreFromIndexedDB = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof indexedDB === "undefined") { resolve(false); return; }
      try {
        const request = indexedDB.open("pflege-backup", 1);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains("profil")) {
            db.createObjectStore("profil");
          }
        };
        request.onsuccess = () => {
          const db = request.result;
          const tx = db.transaction("profil", "readonly");
          const store = tx.objectStore("profil");
          const getReq = store.get("backup");
          getReq.onsuccess = () => {
            if (getReq.result) {
              try {
                const parsed = JSON.parse(getReq.result as string) as LernProfil;
                setProfil(parsed);
                // Auch localStorage wiederherstellen
                localStorage.setItem(STORAGE_KEY, getReq.result as string);
                db.close();
                resolve(true);
                return;
              } catch {
                // Parsing fehlgeschlagen
              }
            }
            db.close();
            resolve(false);
          };
          getReq.onerror = () => {
            db.close();
            resolve(false);
          };
        };
        request.onerror = () => resolve(false);
      } catch {
        resolve(false);
      }
    });
  }, []);

  // --- Spaced Repetition: Fällige LE-Wiederholungen (#37) ---
  const getFaelligeWiederholungen = useCallback((): FaelligeWiederholung[] => {
    if (!profil) return [];
    const jetzt = new Date();
    const ergebnis: FaelligeWiederholung[] = [];

    for (const [leId, le] of Object.entries(profil.fortschritte)) {
      if (!le.naechsteWiederholung || !le.letzterScore) continue;
      const faelligDatum = new Date(le.naechsteWiederholung);
      if (faelligDatum <= jetzt) {
        ergebnis.push({
          leId,
          faelligSeitTagen: (jetzt.getTime() - faelligDatum.getTime()) / (24 * 60 * 60 * 1000),
          letzterScore: le.letzterScore,
        });
      }
    }

    // Dringendste zuerst (längste Überfälligkeit)
    return ergebnis.sort((a, b) => b.faelligSeitTagen - a.faelligSeitTagen);
  }, [profil]);

  // --- Store-Synchronisation (#39) ---
  const synchronisiereStores = useCallback(
    (gemeistarteKarten: Array<{ leId: string; begriff: string }>) => {
      setProfil((prev) => {
        if (!prev) return prev;
        const register = { ...(prev.kompetenzRegister ?? {}) };

        for (const karte of gemeistarteKarten) {
          // Gemeisterte Karteikarte → Kompetenz auf "vertraut" setzen (mindestens)
          const lernzielId = `${karte.leId}-${karte.begriff.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`;
          const existing = register[lernzielId];
          if (!existing || existing.stufe === "unbekannt" || existing.stufe === "versucht") {
            register[lernzielId] = {
              lernzielId,
              stufe: "vertraut",
              richtigInFolge: 1,
              gesamtVersuche: existing?.gesamtVersuche ?? 1,
              gesamtRichtig: existing?.gesamtRichtig ?? 1,
              letzteAntwort: new Date().toISOString(),
              naechsteWiederholung: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
              bloomMax: existing?.bloomMax ?? 1,
            };
          }
        }

        return { ...prev, kompetenzRegister: register };
      });
    },
    []
  );

  // --- localStorage Cleanup (#47) ---
  const bereinigeDaten = useCallback(() => {
    setProfil((prev) => {
      if (!prev) return prev;
      const next = { ...prev };

      // 1. Aktivitäten älter als 90 Tage löschen
      const grenze90Tage = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
      next.tagesAktivitaeten = prev.tagesAktivitaeten.filter((a) => a.datum >= grenze90Tage);

      // 2. Nur die letzten 500 Antworten behalten
      if (prev.alleAntworten && prev.alleAntworten.length > 500) {
        next.alleAntworten = prev.alleAntworten.slice(-500);
      }

      // 3. Session-Antworten komprimieren (nur Zusammenfassung für Sessions älter als 30 Tage)
      const grenze30Tage = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
      const fortschritte = { ...prev.fortschritte };
      for (const [leId, le] of Object.entries(fortschritte)) {
        const sessions = { ...le.sessions };
        let geaendert = false;
        for (const [sessNr, sess] of Object.entries(sessions)) {
          if (sess.updatedAt < grenze30Tage && sess.antworten.length > 5) {
            // Komprimiere: Behalte nur die ersten 5 und letzten 5 Antworten
            sessions[parseInt(sessNr)] = {
              ...sess,
              antworten: [
                ...sess.antworten.slice(0, 3),
                ...sess.antworten.slice(-2),
              ],
            };
            geaendert = true;
          }
        }
        if (geaendert) {
          fortschritte[leId] = { ...le, sessions };
        }
      }
      next.fortschritte = fortschritte;

      // 4. Schwächen-Karten: Nur die neuesten 200 behalten
      if (prev.schwaechen.length > 200) {
        next.schwaechen = prev.schwaechen
          .sort((a, b) => b.erstelltAm.localeCompare(a.erstelltAm))
          .slice(0, 200);
      }

      return next;
    });
  }, []);

  // localStorage-Nutzung in KB
  const getStorageNutzungKB = useCallback((): number => {
    if (!profil) return 0;
    return Math.round(JSON.stringify(profil).length / 1024);
  }, [profil]);

  // Bereinigung bei App-Start
  useEffect(() => {
    if (loaded && profil) {
      bereinigeDaten();
    }
    // Nur einmal beim ersten Laden ausführen
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  // Auto-Backup bei Session-Ende (vor beforeunload)
  // Ref-Pattern: Listener wird nur 1x registriert, Ref hält aktuelle Funktion
  const backupRef = useRef(backupToIndexedDB);
  backupRef.current = backupToIndexedDB;

  useEffect(() => {
    const handler = () => backupRef.current();
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []); // Leeres Array = nur 1x registriert

  // Praktikums-Modus umschalten
  const toggleModus = useCallback(() => {
    setProfil((prev) => {
      if (!prev) return prev;
      const neuerModus = prev.modus === "praxis" ? "theorie" : "praxis";
      return { ...prev, modus: neuerModus };
    });
  }, []);

  return {
    profil,
    loaded,
    saveSessionFortschritt,
    updateStreakTag,
    addSchwaeche,
    logAktivitaet,
    logSession,
    getLeFortschritt,
    getLetztePosition,
    saveAntwort,
    incrementB1Toggle,
    setEinstufungsErgebnis,
    updateAchsen,
    updateKompetenzEintrag,
    exportProfil,
    importProfil,
    backupToIndexedDB,
    restoreFromIndexedDB,
    getFaelligeWiederholungen,
    synchronisiereStores,
    bereinigeDaten,
    getStorageNutzungKB,
    toggleModus,
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

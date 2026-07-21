"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Languages } from "lucide-react";
import {
  loadSituation as staticLoadSituation,
  loadSituationen as staticLoadSituationen,
} from "../../../../../../content/content-loader";
import type {
  Lernsituation,
  AnyPhase,
  ContentStep,
  GlossarEntry,
} from "../../../../../../content/_types";
import { StepRenderer } from "@/components/learn/step-renderer";
import { PatientAvatar } from "@/components/learn/patient-avatar";
import { PlayGate } from "@/components/learn/play-gate";
import { PaywallGate } from "@/components/learn/paywall-gate";
import { SpracheSheet } from "@/components/learn/sprache-sheet";
import { useMutterspracheInit } from "@/hooks/use-muttersprache";
import { trackFunnel } from "@/lib/funnel/track";
import { verteileSpickzettel } from "@/lib/learn/spickzettel-verteilung";
import { Spickzettel } from "@/components/learn/spickzettel";
import { AbschlussScreen } from "@/components/learn/abschluss-screen";
import { AuftaktScreen } from "@/components/learn/auftakt-screen";
import { WiedereinstiegScreen } from "@/components/learn/wiedereinstieg-screen";
import { prefetchWhisperAssets } from "@/hooks/use-whisper";
import { RecheckIntermezzo } from "@/components/learn/recheck-intermezzo";
import { sammleAbschlussDaten } from "@/lib/learn/abschluss-daten";
import { recordLearningActivity } from "@/components/pwa/learning-reminder-banner";
import {
  markiereWackelig,
  markiereGefestigt,
  markiereRecheckGestellt,
} from "@/lib/adaptive/kernfakt-register";
import {
  generiereRecheck,
  type RecheckFrage,
} from "@/lib/adaptive/recheck-generator";
import { markiereLerntagLokal, type StepAntwort } from "@/hooks/use-lern-fortschritt";
import { berechneAchsen, type LernAchsen } from "@/lib/adaptive/lern-profil";
import { klassifiziereZeit } from "@/lib/adaptive/antwortzeit";
import { CE02_THEMA_STURZ_PROPHYLAXE_GLOSSAR } from "../../../../../../content/ce-02/themen/sturz-prophylaxe/glossar";
import { CE06_GLOSSAR } from "../../../../../../content/ce-06/glossar";

/**
 * Glossar-Mapping pro Situation — welche Themen-Glossare relevant sind.
 * Pilot 2026-04-28: Frau-M.-Sturz nutzt das Sturz-Prophylaxe-Glossar als Basis.
 * Ausbau geplant: pro Situation alle berührten Themen-Glossare mergen + zentrales
 * Pflege-Glossar als Fallback (siehe specs/PLAN-INLINE-WISSEN-2026-04-26.md).
 */
const SITUATION_GLOSSAR: Record<string, GlossarEntry[]> = {
  "frau-m-nacht-sturz": CE02_THEMA_STURZ_PROPHYLAXE_GLOSSAR,
  // Alle CE-06-Situationen teilen das zentrale CE-06-Glossar (wächst mit jedem Wissens-Tab).
  "ls-wagner-reanimation": CE06_GLOSSAR,
  "ls-rios-synkope": CE06_GLOSSAR,
  "ls-lehmann-sturz-sht": CE06_GLOSSAR,
  "ls-novak-erregung": CE06_GLOSSAR,
  "ls-yildiz-thoraxschmerz": CE06_GLOSSAR,
  "ls-gruber-schock": CE06_GLOSSAR,
  "ls-kortmann-abdomen": CE06_GLOSSAR,
  "ls-radtke-brand": CE06_GLOSSAR,
  "ls-erlemann-organspende": CE06_GLOSSAR,
  "ls-sander-verbruehung": CE06_GLOSSAR,
  "ls-capstone-am-boden": CE06_GLOSSAR,
};

export default function SituationLernenPage() {
  const locale = useLocale();
  const params = useParams();
  const searchParams = useSearchParams();
  const situationId = params.situationId as string;
  const ceId = searchParams.get("ce") ?? "ce-02";
  const t = useTranslations("situation");

  const [situation, setSituation] = useState<Lernsituation | null>(null);
  const [loading, setLoading] = useState(true);
  // Cross-Link-Rückweg (Spickzettel „Kennst du schon?"): ?von=<situationId>
  // → Rückkehr-Chip zur Quell-Situation, die dort am gespeicherten Schritt
  // weitermacht (Fortschritt wird pro Situation persistiert).
  const vonSituationId = searchParams.get("von");
  const [vonPatientName, setVonPatientName] = useState<string | null>(null);
  const [currentPhaseId, setCurrentPhaseId] = useState<AnyPhase>("informieren");
  const [completedPhases, setCompletedPhases] = useState<AnyPhase[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  // Zwei Sprach-Achsen im Demo-Pfad: Niveau (C1/B1) + Muttersprache (Glossar-Übersetzung).
  const [spracheSheetOpen, setSpracheSheetOpen] = useState(false);
  // Lazy-Init statt Effect: hydrationssicher, weil der Header erst nach dem
  // asynchronen Situation-Load rendert (SSR/Erst-Render zeigt nur den Loading-State).
  const [sprachLevel, setSprachLevelState] = useState<"c1" | "b1">(() => {
    if (typeof window === "undefined") return "c1";
    return localStorage.getItem("pflege-sprachlevel") === "b1" ? "b1" : "c1";
  });
  useMutterspracheInit();
  const setSprachLevel = useCallback((level: "c1" | "b1") => {
    localStorage.setItem("pflege-sprachlevel", level);
    setSprachLevelState(level);
  }, []);
  // Micro-Narration: erzählerischer Übergang — wird als Intro-Text
  // OBEN im nächsten Step angezeigt (vom vorherigen Step mitgegeben).
  const [transitionText, setTransitionText] = useState<string | null>(null);

  // Play-then-Gate: Gast-Status + Gate-Zustand.
  // isGuest: null = noch unbekannt, true = nicht eingeloggt, false = eingeloggt.
  const [isGuest, setIsGuest] = useState<boolean | null>(null);
  // "idle" = noch nicht gezeigt · "soft" = soft-Gate offen (wegtippbar) ·
  // "dismissed" = einmal weggetippt, ab jetzt greift das harte Gate.
  const [gateStatus, setGateStatus] = useState<"idle" | "soft" | "dismissed">(
    "idle"
  );
  const hydratedRef = useRef(false);
  const gastStartFiredRef = useRef(false);

  // Abschluss-Screen: Antwort-Ergebnisse dieser Session (stepId → erster
  // Versuch korrekt?). Session-only — bei Resume mitten in der Situation
  // fehlen frühere Antworten, dann bleibt die Schwächen-Zeile ehrlich weg.
  const [antworten, setAntworten] = useState<ReadonlyMap<string, boolean>>(
    () => new Map()
  );
  // Reicheres Event-Log DERSELBEN Session (inkl. Antwortzeit + Bloom-Level) —
  // die Wahrheit, aus der die verdiente Zwei-Achsen-Auswertung am Abschluss
  // gerechnet wird (Adaptivität sichtbar). Nur erster Versuch je Step.
  const [antwortEvents, setAntwortEvents] = useState<StepAntwort[]>([]);
  // Tages-Streak (geteilter Store, gesetzt bei Abschluss) — Retention-Motivator.
  const [streakTage, setStreakTage] = useState(0);
  const [sessionVonAnfang, setSessionVonAnfang] = useState(true);
  // Auftakt-Screen (Audit-Lücke 1): nur bei frischem Start — Resume mitten in
  // der Situation springt direkt in den Step. Wird nach Hydration gesetzt.
  const [auftaktAktiv, setAuftaktAktiv] = useState(false);
  // Wiedereinstieg (Waleria 2026-07-20): kommt der Schüler MITTEN in eine
  // Situation zurück, wählt er selbst „weiter" oder „neu" — statt still an der
  // alten Stelle zu landen. Nur nach Hydration, nur bei mittigem Resume.
  const [wiedereinstiegAktiv, setWiedereinstiegAktiv] = useState(false);

  // Adaptiv-v1 (PLAN-ADAPTIV-V1): „Erinnerst du dich?"-Intermezzo.
  // Queue wackeliger Kernfakten (Position = globaler Schritt-Zähler, Recheck
  // frühestens 2 Steps nach dem Fehler), max. 3 pro Situation, nie zwei
  // hintereinander, für Gäste erst nach dem Gate-Fenster.
  const [aktiverRecheck, setAktiverRecheck] = useState<RecheckFrage | null>(null);
  const recheckQueueRef = useRef<{ kernfaktId: string; beiPos: number }[]>([]);
  const recheckAnzahlRef = useRef(0);
  const letzterRecheckPosRef = useRef(-99);
  const globalPosRef = useRef(0);
  const falschZaehlerRef = useRef(0);
  // Antwortzeit-Messung (VISION: „Die Zeit ist ein ehrlicheres Signal als die
  // Antwort selbst"). Startzeitpunkt des aktuell sichtbaren Antwort-Steps.
  const stepStartRef = useRef<number>(0);
  // Wie viele beantwortete Steps liefen im B1-Modus — Proxy für die Sprach-Achse.
  const b1StepsRef = useRef(0);
  // Sprach-Angebot (Station ⑤): nach der 2. falschen Antwort EINMALIG anbieten,
  // einfacher zu erklären (öffnet B1) — v1-Trigger bewusst simpel (2× falsch),
  // die Antwortzeit-Kategorie folgt in v2.
  const [sprachAngebot, setSprachAngebot] = useState<"aus" | "zeigen" | "erledigt">("aus");
  // Ref, über die das AnswerSheet den Spickzettel des aktuellen Steps öffnet.
  const spickzettelOeffnenRef = useRef<(() => void) | null>(null);
  // Nächste Situation der CE (für den „Als Nächstes"-Ausblick).
  const [naechsteSituation, setNaechsteSituation] =
    useState<Lernsituation | null>(null);

  // Freemium-Paywall (nur eingeloggt): gesetzt, wenn diese Situation über der
  // freien Grenze liegt und kein aktiver Zugang besteht.
  const [paywall, setPaywall] = useState<{
    isAdult: boolean;
    freeLimit: number;
  } | null>(null);

  useEffect(() => {
    setLoading(true);
    staticLoadSituation(ceId, situationId)
      .then((sit) => {
        setSituation(sit);
        // Phasenmodell-agnostisch: auf die ERSTE Phase der Situation setzen
        // (Pflegeprozess startet bei "informieren", Beratung bei "wahrnehmen" …)
        if (sit?.phasen?.length) {
          setCurrentPhaseId(sit.phasen[0].phase);
          setCompletedPhases([]);
          setCurrentStepIndex(0);
        }
        // Sprech-Step in der Situation? → Whisper-Modell (57 MB) im Leerlauf
        // vorwärmen, damit beim Step niemand auf den Download wartet.
        if (
          sit?.phasen?.some((p) =>
            [...p.kernSteps, ...p.optionaleSteps].some(
              (s) => s.stepType === "speech"
            )
          )
        ) {
          prefetchWhisperAssets();
        }
      })
      .finally(() => setLoading(false));
  }, [ceId, situationId]);

  // Nächste Situation der CE laden — für den „Als Nächstes"-Teaser
  // auf dem Abschluss-Screen (statisch aus dem Bundle, offline-fähig).
  useEffect(() => {
    let cancelled = false;
    staticLoadSituationen(ceId)
      .then((liste) => {
        if (cancelled) return;
        const idx = liste.findIndex((s) => s.situationId === situationId);
        setNaechsteSituation(idx >= 0 ? (liste[idx + 1] ?? null) : null);
      })
      .catch(() => {
        if (!cancelled) setNaechsteSituation(null);
      });
    return () => {
      cancelled = true;
    };
  }, [ceId, situationId]);

  // Quell-Situation des Cross-Links laden (nur Patient-Name für den Chip).
  useEffect(() => {
    if (!vonSituationId || vonSituationId === situationId) {
      setVonPatientName(null);
      return;
    }
    let cancelled = false;
    staticLoadSituation(ceId, vonSituationId)
      .then((s) => {
        if (!cancelled) setVonPatientName(s?.patient?.name ?? s?.titel ?? null);
      })
      .catch(() => {
        if (!cancelled) setVonPatientName(null);
      });
    return () => {
      cancelled = true;
    };
  }, [vonSituationId, situationId, ceId]);

  // Gast-Status ermitteln (Session-Cookie ist httpOnly → nur via API lesbar).
  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) setIsGuest(!d.authenticated);
      })
      .catch(() => {
        // Fehler → als Gast behandeln (Pilot-Zielgruppe sind Nicht-Registrierte).
        if (!cancelled) setIsGuest(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Fortschritt wiederherstellen (einmalig, nach Content + Auth-Status).
  // Gast: aus localStorage. Eingeloggt: frisch gespielter Gast-Stand gewinnt
  // (Play-then-Gate-Rückkehr nach Signup) und wird zum Account gemergt —
  // sonst Server-Stand laden (anderes Gerät / früherer Besuch).
  useEffect(() => {
    if (hydratedRef.current) return;
    if (!situation || isGuest === null) return;
    hydratedRef.current = true;

    const validPhases = situation.phasen.map((p) => p.phase);
    const applySaved = (saved: {
      currentPhaseId?: AnyPhase;
      completedPhases?: AnyPhase[];
      currentStepIndex?: number;
      gateStatus?: string;
    } | null): boolean => {
      if (
        !saved?.currentPhaseId ||
        !validPhases.includes(saved.currentPhaseId)
      ) {
        return false;
      }
      setCurrentPhaseId(saved.currentPhaseId);
      setCompletedPhases(
        (saved.completedPhases ?? []).filter((p) => validPhases.includes(p))
      );
      setCurrentStepIndex(saved.currentStepIndex ?? 0);
      // Wiedereinstieg mitten in der Situation → Antwort-Daten dieser Session
      // sind unvollständig; der Abschluss-Screen lässt die Schwächen-Zeile weg.
      if (
        saved.currentPhaseId !== validPhases[0] ||
        (saved.currentStepIndex ?? 0) > 0 ||
        (saved.completedPhases ?? []).length > 0
      ) {
        setSessionVonAnfang(false);
      }
      if (isGuest && saved.gateStatus === "dismissed") {
        setGateStatus("dismissed");
      }
      return true;
    };

    // Frischer Start = kein (gültiger) Stand ODER Stand ganz am Anfang →
    // Auftakt-Screen zeigen. Resume mitten in der Situation überspringt ihn.
    const amStart = (s: Parameters<typeof applySaved>[0]): boolean =>
      !s?.currentPhaseId ||
      !validPhases.includes(s.currentPhaseId) ||
      (s.currentPhaseId === validPhases[0] &&
        (s.currentStepIndex ?? 0) === 0 &&
        (s.completedPhases ?? []).length === 0);

    let localSaved: Parameters<typeof applySaved>[0] = null;
    try {
      localSaved = JSON.parse(
        window.localStorage.getItem(`pflege:guest:${situationId}`) ?? "null"
      );
    } catch {
      // beschädigter/leerer Eintrag — frisch starten
    }

    if (isGuest) {
      const applied = applySaved(localSaved);
      const start = amStart(localSaved);
      setAuftaktAktiv(start);
      setWiedereinstiegAktiv(applied && !start);
      return;
    }

    // Gast→Account-Merge: lokalen Stand übernehmen, zum Server schieben,
    // lokal aufräumen (Fortschritt gehört jetzt dem Account).
    if (applySaved(localSaved) && localSaved) {
      const start = amStart(localSaved);
      setAuftaktAktiv(start);
      setWiedereinstiegAktiv(!start);
      const completed = (localSaved.completedPhases ?? []).filter((p) =>
        validPhases.includes(p)
      );
      void fetch("/api/progress/situation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          situationId,
          ceId,
          currentPhase: localSaved.currentPhaseId,
          completedPhases: completed,
          currentStepIndex: localSaved.currentStepIndex ?? 0,
          isComplete: validPhases.every((p) => completed.includes(p)),
        }),
      }).catch(() => {
        // best effort — der Debounce-Sync unten versucht es erneut
      });
      try {
        window.localStorage.removeItem(`pflege:guest:${situationId}`);
      } catch {
        // localStorage nicht verfügbar — ignorieren
      }
      return;
    }

    let cancelled = false;
    fetch(
      `/api/progress/situation?situationId=${encodeURIComponent(situationId)}`
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled) return;
        if (!d?.progress) {
          setAuftaktAktiv(true);
          return;
        }
        const serverSaved = {
          currentPhaseId: d.progress.currentPhase,
          completedPhases: d.progress.resumeState?.completedPhases,
          currentStepIndex: d.progress.resumeState?.currentStepIndex,
        };
        const applied = applySaved(serverSaved);
        // Abgeschlossene Situation → Abschluss-Screen, kein Auftakt.
        const fertig = validPhases.every((p) =>
          (serverSaved.completedPhases ?? []).includes(p)
        );
        const start = amStart(serverSaved);
        setAuftaktAktiv(!fertig && start);
        setWiedereinstiegAktiv(!fertig && applied && !start);
      })
      .catch(() => {
        // offline/Fehler — frisch starten ist ok
        if (!cancelled) setAuftaktAktiv(true);
      });
    return () => {
      cancelled = true;
    };
  }, [situation, isGuest, situationId, ceId]);

  // Gast-Fortschritt persistieren (erst nach Hydration, um den gespeicherten
  // Stand nicht mit den Default-Werten zu überschreiben).
  useEffect(() => {
    if (isGuest !== true || !situation || !hydratedRef.current) return;
    try {
      window.localStorage.setItem(
        `pflege:guest:${situationId}`,
        JSON.stringify({
          currentPhaseId,
          completedPhases,
          currentStepIndex,
          gateStatus,
        })
      );
    } catch {
      // localStorage nicht verfügbar (privater Modus) — ignorieren
    }
  }, [
    isGuest,
    situation,
    situationId,
    currentPhaseId,
    completedPhases,
    currentStepIndex,
    gateStatus,
  ]);

  // Eingeloggten Fortschritt zum Server persistieren (debounced, best effort).
  useEffect(() => {
    if (isGuest !== false || !situation || !hydratedRef.current) return;
    // Paywall aktiv → diese (gesperrte) Situation NICHT als „begonnen"
    // speichern, sonst zählte sie fälschlich zur Freemium-Grenze.
    if (paywall) return;
    const validPhases = situation.phasen.map((p) => p.phase);
    const timer = setTimeout(() => {
      void fetch("/api/progress/situation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          situationId,
          ceId,
          currentPhase: currentPhaseId,
          completedPhases,
          currentStepIndex,
          isComplete:
            validPhases.length > 0 &&
            validPhases.every((p) => completedPhases.includes(p)),
        }),
      }).catch(() => {
        // offline — nächste Zustandsänderung versucht es erneut
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, [
    isGuest,
    situation,
    situationId,
    ceId,
    currentPhaseId,
    completedPhases,
    currentStepIndex,
    paywall,
  ]);

  // Funnel: Gast öffnet die Situation (einmalig).
  useEffect(() => {
    if (isGuest === true && situation && !gastStartFiredRef.current) {
      gastStartFiredRef.current = true;
      trackFunnel("gast_start", { situationId });
    }
  }, [isGuest, situation, situationId]);

  // Freemium-Grenze prüfen (nur eingeloggt). Gäste sind durch das Account-Gate
  // begrenzt und haben keinen DB-Fortschritt.
  useEffect(() => {
    if (isGuest !== false || !situation) return;
    let cancelled = false;
    fetch(`/api/billing/access?situationId=${encodeURIComponent(situationId)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled || !d) return;
        if (d.canOpen === false) {
          setPaywall({ isAdult: !!d.isAdult, freeLimit: d.freeLimit ?? 3 });
        }
      })
      .catch(() => {
        // Fehler → im Zweifel nicht sperren (Lernfluss geht vor).
      });
    return () => {
      cancelled = true;
    };
  }, [isGuest, situation, situationId]);

  // Antwortzeit-Timer auf den SICHTBAREN Antwort-Step zurücksetzen. Übergangs-
  // Narration und Recheck-Intermezzo sind Overlays vor dem Step → sie zählen
  // nicht zur Nachdenkzeit (Timer startet erst, wenn der Step wirklich dran ist).
  useEffect(() => {
    if (!aktiverRecheck && !transitionText) {
      stepStartRef.current = Date.now();
    }
  }, [currentPhaseId, currentStepIndex, aktiverRecheck, transitionText]);

  // Lerntag festhalten, sobald die Situation abgeschlossen ist. EIN Signal
  // (localStorage „pflege-letzte-aktivitaet"), das der app-weite Reminder-Banner
  // liest → „heute gelernt" statt fälschlich „heute noch nicht gelernt", und die
  // Grundlage für den Streak. Bisher schrieb NUR der alte LE-Player dieses Signal
  // — der Situations-Player (Pilot) war davon abgeklemmt.
  useEffect(() => {
    if (!situation) return;
    const phasen = situation.phasen.map((p) => p.phase);
    if (phasen.length > 0 && phasen.every((p) => completedPhases.includes(p))) {
      recordLearningActivity();
      setStreakTage(markiereLerntagLokal());
    }
  }, [situation, completedPhases]);

  // Reihenfolge der Phasen dieser Situation (situationsTyp-abhängig)
  const phaseOrder: AnyPhase[] = situation?.phasen.map((p) => p.phase) ?? [];

  const currentPhase =
    situation?.phasen.find((p) => p.phase === currentPhaseId) ??
    situation?.phasen[0];
  // Option A (KERN-LOOP-STANDARD): verlagerte Wissens-Steps sind KEINE eigenen
  // Screens mehr — sie hängen als Spickzettel am nächsten Antwort-Step.
  const { sichtbareSteps: phaseSteps, spickzettel } = verteileSpickzettel(
    currentPhase ? [...currentPhase.kernSteps, ...currentPhase.optionaleSteps] : []
  );
  const currentStep = phaseSteps[currentStepIndex] ?? null;
  const currentSpickzettel = currentStep
    ? (spickzettel.get(currentStep.stepId) ?? [])
    : [];

  const advanceStep = useCallback(() => {
    if (isGuest) trackFunnel("step_fertig", { situationId });
    // Adaptiv-v1: globaler Schritt-Zähler + fälliges Intermezzo prüfen.
    globalPosRef.current += 1;
    const pos = globalPosRef.current;
    const gateOffenFuerGast = isGuest !== true || gateStatus === "dismissed";
    if (
      situation &&
      recheckAnzahlRef.current < 3 &&
      gateOffenFuerGast &&
      pos - letzterRecheckPosRef.current >= 2
    ) {
      const idx = recheckQueueRef.current.findIndex((e) => pos - e.beiPos >= 2);
      if (idx !== -1) {
        const [eintrag] = recheckQueueRef.current.splice(idx, 1);
        markiereRecheckGestellt(situationId, eintrag.kernfaktId);
        const frage = generiereRecheck(
          situation,
          eintrag.kernfaktId,
          sprachLevel === "b1"
        );
        if (frage) {
          recheckAnzahlRef.current += 1;
          letzterRecheckPosRef.current = pos;
          setAktiverRecheck(frage);
          trackFunnel("recheck_gezeigt", {
            situationId,
            kernfaktId: eintrag.kernfaktId,
          });
        }
      }
    }
    if (currentStepIndex < phaseSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      if (!completedPhases.includes(currentPhaseId)) {
        setCompletedPhases((prev) => [...prev, currentPhaseId]);
      }
      const currentIdx = phaseOrder.indexOf(currentPhaseId);
      if (currentIdx >= 0 && currentIdx < phaseOrder.length - 1) {
        setCurrentPhaseId(phaseOrder[currentIdx + 1]);
        setCurrentStepIndex(0);
      }
    }
  }, [currentStepIndex, phaseSteps.length, completedPhases, currentPhaseId, phaseOrder, isGuest, situationId, situation, gateStatus, sprachLevel]);

  const handleNextStep = useCallback(() => {
    // Micro-Narration: wenn Step ein transition-Feld hat, kurzen
    // Erzähl-Übergang zeigen bevor der nächste Step kommt.
    const step = phaseSteps[currentStepIndex];
    const trans = step?.transition;
    if (trans && trans.trim().length > 0) {
      // Zwischenscreen — Lesezeit nach Textlänge: min 4s, B1-Tempo (12 chars/s) + 2.5s Pause
      setTransitionText(trans);
      const readMs = Math.max(3000, Math.round((trans.length / 14) * 1000) + 1500);
      setTimeout(() => {
        setTransitionText(null);
        advanceStep();
      }, readMs);
    } else {
      setTransitionText(null);
      advanceStep();
    }
  }, [currentStepIndex, phaseSteps, advanceStep]);

  if (loading) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--lern-text-secondary)]">
          Laden…
        </div>
      </div>
    );
  }

  if (!situation) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center flex-col gap-4">
        <p className="text-[var(--lern-text-secondary)]">
          Lernsituation nicht gefunden.
        </p>
        <Link
          href={`/${locale}/lernen/ce/${ceId}`}
          className="text-sm text-[var(--lern-accent)] hover:underline"
        >
          {t("zurueckZurUebersicht")}
        </Link>
      </div>
    );
  }

  // Freemium-Paywall: Situation-Inhalt gar nicht erst rendern (kein Leak),
  // nur das Bezahl-Overlay zeigen. Zahlung führt zurück in genau diese Situation.
  if (paywall) {
    const situationNext = `/${locale}/lernen/situation/${situationId}?ce=${ceId}`;
    return (
      <div className="h-dvh bg-[var(--lern-bg)]">
        <PaywallGate
          locale={locale}
          situationId={situationId}
          next={situationNext}
          isAdult={paywall.isAdult}
          freeLimit={paywall.freeLimit}
          onDismiss={() => {
            window.location.href = `/${locale}/lernen/ce/${ceId}`;
          }}
        />
      </div>
    );
  }

  const allPhasesCompleted =
    phaseOrder.length > 0 && completedPhases.length === phaseOrder.length;
  const phaseLabel = t(`phasen.${currentPhaseId}`);
  const totalSteps = phaseSteps.length;

  // Gesamtfortschritt über ALLE Phasen — damit sich die Länge begrenzt anfühlt
  // (Dozentin-Feedback 2026-07-16: Phasen-Punkte + phasenlokaler Zähler wirkten
  // unbegrenzt; „1/2" las sich fast fertig, obwohl noch 4 Phasen kommen).
  // Nur SICHTBARE Steps zählen (verlagerte Spickzettel-Bausteine sind keine
  // Screens) — sonst zeigt der Zähler 17, obwohl 12 gespielt werden.
  const stepsProPhase = situation.phasen.map(
    (p) =>
      verteileSpickzettel([...p.kernSteps, ...p.optionaleSteps]).sichtbareSteps
        .length
  );
  const totalSituationSteps = stepsProPhase.reduce((a, b) => a + b, 0);
  const currentPhaseIdx = Math.max(
    0,
    situation.phasen.findIndex((p) => p.phase === currentPhaseId)
  );
  const globalStepIndex =
    stepsProPhase.slice(0, currentPhaseIdx).reduce((a, b) => a + b, 0) +
    currentStepIndex;
  const overallPct =
    totalSituationSteps > 0
      ? Math.min(100, Math.round((globalStepIndex / totalSituationSteps) * 100))
      : 0;
  // Phasengrenzen als Prozent-Positionen auf dem EINEN Balken — so zeigt eine
  // einzige, step-genaue Leiste zugleich die Phasenstruktur (statt einer zweiten
  // 5-Segment-Leiste, die zu „1/17" nicht passte — Dozentin 2026-07-16).
  const phaseBoundaryPcts: number[] = [];
  {
    let acc = 0;
    for (let i = 0; i < stepsProPhase.length - 1; i++) {
      acc += stepsProPhase[i];
      if (totalSituationSteps > 0)
        phaseBoundaryPcts.push((acc / totalSituationSteps) * 100);
    }
  }

  // Play-then-Gate: greift am 2. ANTWORT-Step der ersten Phase (der 1. ist der
  // Hook mit vollem Reveal). Lese-Bausteine ohne `question` (z.B. inlineWissen)
  // zählen NICHT mit — so lassen sich Wissens-Tabs frei zwischen die Fragen
  // setzen, ohne das Gate zu verschieben.
  const firstPhaseId = situation.phasen[0]?.phase;
  const zweiterAntwortStepId =
    currentPhaseId === firstPhaseId
      ? phaseSteps.filter((s) => !!s.question)[1]?.stepId
      : undefined;
  const isGateStep =
    !!zweiterAntwortStepId && currentStep?.stepId === zweiterAntwortStepId;
  // soft-Gate: offen, wegtippbar. Nur für Gäste.
  const showSoftGate = isGuest === true && gateStatus === "soft";
  // hartes Gate: nach einmaligem Wegtippen — greift ab dem nächsten Step,
  // blockiert bis zur Registrierung.
  const showHardGate =
    isGuest === true &&
    gateStatus === "dismissed" &&
    !isGateStep &&
    !allPhasesCompleted;

  // Verdiente Zwei-Achsen-Auswertung (Adaptivität sichtbar) — aus dem Event-Log
  // dieser Session. Nur bei Abschluss + echten Antworten; der Abschluss-Screen
  // blendet sie ohne vollständige Session-Daten ohnehin aus (nie raten).
  const achsen: LernAchsen | null =
    allPhasesCompleted && antwortEvents.length > 0
      ? berechneAchsen(antwortEvents, [], b1StepsRef.current, totalSituationSteps)
      : null;

  return (
    <div className="h-dvh bg-[var(--lern-bg)] flex flex-col overflow-hidden">
      {/* Sticky Header — KERN-LOOP-STANDARD (2026-07-16): EINE Meta-Zeile.
          Pfeil · step-genauer Balken (mit Phasen-Markern) · Zähler · Patient-Avatar
          (Tap → Modal mit Name/Setting/Lebensgeschichte) · Sprache. Kein Phasen-Text,
          keine Patientenzeile — der größte Text auf dem Screen ist der Inhalt. */}
      <header className="shrink-0 bg-[var(--lern-bg)] border-b border-[var(--lern-border)]">
        <div className="mx-auto max-w-3xl px-4 py-2.5 flex items-center gap-3">
          <Link
            href={`/${locale}/lernen/ce/${ceId}`}
            aria-label={t("zurueckZurUebersicht")}
            className="shrink-0 text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)]"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div
            className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--lern-border)]"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={totalSituationSteps}
            aria-valuenow={globalStepIndex + 1}
            aria-label={`${phaseLabel} — Schritt ${globalStepIndex + 1} von ${totalSituationSteps}`}
          >
            <div
              className="h-full rounded-full bg-[var(--lern-accent)] transition-[width] duration-500"
              style={{ width: `${overallPct}%` }}
            />
            {phaseBoundaryPcts.map((pct, i) => (
              <span
                key={i}
                className="absolute top-0 h-full w-px bg-[var(--lern-bg)]"
                style={{ left: `${pct}%` }}
                aria-hidden="true"
              />
            ))}
          </div>
          {totalSituationSteps > 0 && (
            <span className="shrink-0 text-[11px] text-[var(--lern-text-tertiary)] tabular-nums">
              {globalStepIndex + 1}/{totalSituationSteps}
            </span>
          )}
          {situation.patient && (
            <PatientAvatar
              name={situation.patient.name}
              size={28}
              onClick={() => setPatientModalOpen(true)}
            />
          )}
          <button
            onClick={() => setSpracheSheetOpen(true)}
            aria-label="Sprache wählen"
            aria-expanded={spracheSheetOpen}
            className={`shrink-0 text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] ${
              sprachLevel === "b1" ? "text-[var(--lern-accent)]" : ""
            }`}
          >
            <Languages className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-5 pb-24">
          {/* Rückkehr-Chip nach Spickzettel-Ausflug: ein Tap zurück zur
              Quell-Situation, die am gespeicherten Schritt weitermacht. */}
          {vonSituationId && vonSituationId !== situationId && vonPatientName && (
            <Link
              href={`/${locale}/lernen/situation/${vonSituationId}?ce=${ceId}`}
              className="mb-4 flex items-center gap-2 rounded-2xl border-[1.5px] border-[var(--lern-accent)]/35 bg-[var(--lern-accent-bg)] px-3.5 py-2.5 text-sm font-medium text-[var(--lern-accent)] transition-transform active:scale-[0.98]"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0 truncate">
                Zurück zu {vonPatientName} — dort weitermachen
              </span>
            </Link>
          )}
          {allPhasesCompleted ? (
            /* Abschluss-Screen (Audit-Lücke 2): Faustregeln-Abruf wortgleich,
               ehrliche Schwächen-Zeile (C1 Coach), „Als Nächstes"-Teaser.
               CTA bleibt der Post-Situation-Sog nach vorn (Kante D3). */
            <AbschlussScreen
              situation={situation}
              daten={sammleAbschlussDaten(situation, antworten)}
              achsen={achsen}
              streakTage={streakTage}
              antwortDatenVollstaendig={sessionVonAnfang}
              sprachLevel={sprachLevel}
              isGuest={isGuest === true}
              naechsteSituation={naechsteSituation}
              gesamtSteps={totalSituationSteps}
              locale={locale}
              ceId={ceId}
            />
          ) : auftaktAktiv ? (
            /* Auftakt (Audit-Lücke 1): Patient + Szene + Rahmenlehrplan-
               Lernziele in Schülersprache — nur bei frischem Start. */
            <AuftaktScreen
              situation={situation}
              sprachLevel={sprachLevel}
              gesamtSteps={totalSituationSteps}
              onStart={() => setAuftaktAktiv(false)}
              onPatientTap={() => setPatientModalOpen(true)}
            />
          ) : wiedereinstiegAktiv ? (
            /* Wiedereinstieg (Waleria 2026-07-20): weiter oder neu — der
               Schüler entscheidet, statt still an der alten Stelle zu landen. */
            <WiedereinstiegScreen
              situation={situation}
              schrittNummer={globalStepIndex + 1}
              gesamtSteps={totalSituationSteps}
              sprachLevel={sprachLevel}
              onWeiter={() => setWiedereinstiegAktiv(false)}
              onNeuBeginnen={() => {
                setWiedereinstiegAktiv(false);
                setCurrentPhaseId(situation.phasen[0].phase);
                setCurrentStepIndex(0);
                setCompletedPhases([]);
                setAntworten(new Map());
                setAntwortEvents([]);
                b1StepsRef.current = 0;
                setSessionVonAnfang(true);
                setAuftaktAktiv(true);
                trackFunnel("situation_neu_begonnen", { situationId });
              }}
            />
          ) : transitionText ? (
            /* Micro-Narration — Zwischenscreen, länger sichtbar (4.5-7s je nach Textlänge) */
            <AnimatePresence mode="wait">
              <motion.div
                key="transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center py-24"
              >
                <p
                  className="text-center text-base italic leading-relaxed max-w-sm px-6"
                  style={{ color: "var(--lern-text-secondary)" }}
                >
                  {transitionText}
                </p>
              </motion.div>
            </AnimatePresence>
          ) : aktiverRecheck ? (
            /* Adaptiv-v1 (Station ③): Intermezzo statt nächstem Step —
               zählt nicht im x/12-Zähler, die Situation wird nicht länger. */
            <RecheckIntermezzo
              frage={aktiverRecheck}
              sprachLevel={sprachLevel}
              onFertig={(richtig) => {
                if (richtig) {
                  markiereGefestigt(situationId, aktiverRecheck.kernfaktId);
                  trackFunnel("recheck_richtig", {
                    situationId,
                    kernfaktId: aktiverRecheck.kernfaktId,
                  });
                } else {
                  trackFunnel("recheck_falsch", {
                    situationId,
                    kernfaktId: aktiverRecheck.kernfaktId,
                  });
                }
                setAktiverRecheck(null);
              }}
            />
          ) : currentStep ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPhaseId}-${currentStepIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Sprach-Angebot (Station ⑤): einmalig, dezent, wegklickbar */}
                {sprachAngebot === "zeigen" && (
                  <div className="mb-3 flex items-center gap-2 rounded-2xl border-[1.5px] border-[var(--lern-accent)]/35 bg-[var(--lern-accent-bg)] px-3.5 py-2.5">
                    <p className="min-w-0 flex-1 text-sm text-[var(--lern-text-primary)]">
                      {t("sprachangebot.frage")}
                    </p>
                    <button
                      type="button"
                      className="shrink-0 rounded-xl bg-[var(--lern-accent)] px-3 py-1.5 text-xs font-semibold text-white"
                      onClick={() => {
                        setSprachLevel("b1");
                        setSprachAngebot("erledigt");
                        trackFunnel("sprache_angebot_angenommen", { situationId });
                      }}
                    >
                      {t("sprachangebot.an")}
                    </button>
                    <button
                      type="button"
                      aria-label={t("sprachangebot.spaeter")}
                      className="shrink-0 px-1 text-sm text-[var(--lern-text-secondary)]"
                      onClick={() => setSprachAngebot("erledigt")}
                    >
                      ✕
                    </button>
                  </div>
                )}
                <StepRenderer
                  step={currentStep}
                  sprachLevel={sprachLevel}
                  glossar={SITUATION_GLOSSAR[situationId] ?? []}
                  erklaerKontext={{ ceId, situationId }}
                  onNext={(correct) => {
                    // Erster Versuch zählt — für die ehrliche Schwächen-Zeile
                    // des Abschluss-Screens (Info-Steps liefern kein correct).
                    if (correct !== undefined) {
                      const stepId = currentStep.stepId;
                      const zeitMs = Date.now() - stepStartRef.current;
                      setAntworten((prev) =>
                        prev.has(stepId)
                          ? prev
                          : new Map(prev).set(stepId, correct)
                      );
                      // Reicheres Event (Antwortzeit + Bloom) — nur erster
                      // Versuch, gleiche Guard wie die Boolean-Map oben.
                      setAntwortEvents((prev) =>
                        prev.some((e) => e.stepId === stepId)
                          ? prev
                          : [
                              ...prev,
                              {
                                stepId,
                                stepType: currentStep.stepType,
                                correct,
                                zeitMs,
                                bloomLevel: currentStep.bloomLevel,
                              },
                            ]
                      );
                      if (sprachLevel === "b1") b1StepsRef.current += 1;
                      // Adaptiv-v1 (Station ①): Kernfakt-Register + Recheck-Queue.
                      if (correct === false) {
                        const kernfakte = currentStep.kernfaktId ?? [];
                        if (kernfakte.length > 0) {
                          const register = markiereWackelig(
                            situationId,
                            kernfakte,
                            stepId
                          );
                          // EIN Recheck pro verpatzter Frage: erster Kernfakt,
                          // der noch keinen Recheck bekommen hat.
                          const kandidat = kernfakte.find(
                            (id) =>
                              !register[id]?.recheckGestellt &&
                              !recheckQueueRef.current.some(
                                (e) => e.kernfaktId === id
                              )
                          );
                          if (kandidat) {
                            recheckQueueRef.current.push({
                              kernfaktId: kandidat,
                              beiPos: globalPosRef.current,
                            });
                          }
                        }
                        // Sprach-Angebot (Adaptiv v2): einmalig, wenn der Schüler
                        // KÄMPFT — nach der 2. falschen Antwort ODER schon nach
                        // der 1., wenn die Antwortzeit „unsicher"/„geraten" war.
                        // Die Zeit ist das ehrlichere Signal als der reine Fehler
                        // (VISION) — reagiert so auf Ringen, nicht nur auf Klick.
                        falschZaehlerRef.current += 1;
                        const zeitKlasse = klassifiziereZeit(
                          zeitMs,
                          currentStep.stepType
                        );
                        const kampfSignal =
                          zeitKlasse === "unsicher" || zeitKlasse === "geraten";
                        if (
                          sprachLevel === "c1" &&
                          sprachAngebot === "aus" &&
                          (falschZaehlerRef.current >= 2 ||
                            (falschZaehlerRef.current >= 1 && kampfSignal))
                        ) {
                          setSprachAngebot("zeigen");
                          trackFunnel("sprache_angebot_gezeigt", { situationId });
                        }
                      }
                    }
                    handleNextStep();
                  }}
                  onSelfRating={() => handleNextStep()}
                  onReflection={() => handleNextStep()}
                  reflexionText={null}
                  score={0}
                  totalQuestions={phaseSteps.length}
                  onGatedAnswer={
                    isGuest === true && isGateStep && gateStatus === "idle"
                      ? () => {
                          setGateStatus("soft");
                          trackFunnel("gate_gezeigt", { situationId });
                        }
                      : undefined
                  }
                  gateReleased={gateStatus === "dismissed"}
                  spickzettelOeffnen={
                    currentSpickzettel.length > 0
                      ? () => {
                          spickzettelOeffnenRef.current?.();
                          trackFunnel("spickzettel_angebot_angenommen", {
                            situationId,
                          });
                        }
                      : undefined
                  }
                />
                {/* Option A: vollständige Wissens-Bausteine als Spickzettel
                    am Anwendungs-Step (Chip unter der Interaktion) */}
                {currentSpickzettel.length > 0 && (
                  <Spickzettel
                    bausteine={currentSpickzettel}
                    situationId={situationId}
                    ceId={ceId}
                    locale={locale}
                    sprachLevel={sprachLevel}
                    glossar={SITUATION_GLOSSAR[situationId] ?? []}
                    oeffnenRef={spickzettelOeffnenRef}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-12">
              <button
                onClick={handleNextStep}
                className="rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#4C6A52]"
              >
                {t("fortschritt")}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Patient-Modal (Avatar-Klick) — Lebensgeschichte */}
      {patientModalOpen && situation.patient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setPatientModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPatientModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--lern-text-tertiary)] hover:text-[var(--lern-text-primary)] text-2xl leading-none"
              aria-label="Schließen"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-4">
              <PatientAvatar name={situation.patient.name} size={56} />
              <div>
                <h2 className="text-lg font-bold text-[var(--lern-text-primary)]">
                  {situation.patient.name}, {situation.patient.alter}
                </h2>
                <p className="text-[11px] text-[var(--lern-text-tertiary)]">
                  {situation.patient.setting}
                </p>
              </div>
            </div>

            {situation.patient.diagnosen.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {situation.patient.diagnosen.map((d) => (
                  <span
                    key={d}
                    className="rounded-md bg-[var(--lern-bg)] px-2 py-0.5 text-[10px] text-[var(--lern-text-secondary)]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            )}

            {situation.patient.hintergrund && (
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Lebensgeschichte
                </h3>
                <div className="text-sm text-[var(--lern-text-primary)] whitespace-pre-line leading-relaxed">
                  {situation.patient.hintergrund}
                </div>
                {situation.patient.hintergrundB1 && (
                  <details className="mt-3 text-xs">
                    <summary className="cursor-pointer text-[var(--lern-accent)] font-semibold">
                      Einfache Sprache (B1)
                    </summary>
                    <div className="mt-2 text-[var(--lern-text-secondary)] whitespace-pre-line">
                      {situation.patient.hintergrundB1}
                    </div>
                  </details>
                )}
              </section>
            )}

            {situation.patient.persoenlichkeit && (
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Persönlichkeit
                </h3>
                <div className="text-sm text-[var(--lern-text-primary)] whitespace-pre-line leading-relaxed">
                  {situation.patient.persoenlichkeit}
                </div>
              </section>
            )}

            {situation.patient.zitate && situation.patient.zitate.length > 0 && (
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Originalton ({situation.patient.zitate.length})
                </h3>
                <div className="space-y-2">
                  {situation.patient.zitate.map((z, i) => (
                    <blockquote
                      key={i}
                      className="rounded-xl bg-[var(--lern-accent-bg)] border-l-2 border-[var(--lern-accent)] px-4 py-2 text-sm italic text-[var(--lern-text-primary)]"
                    >
                      „{z}"
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            <button
              onClick={() => setPatientModalOpen(false)}
              className="w-full rounded-xl bg-[var(--lern-accent)] px-6 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52]"
            >
              Zurück
            </button>
          </motion.div>
        </div>
      )}

      {/* Sprache-Sheet — Sprachniveau (C1/B1) + Muttersprache (Glossar-Übersetzung, z. B. Arabisch) */}
      <SpracheSheet
        open={spracheSheetOpen}
        onClose={() => setSpracheSheetOpen(false)}
        sprachLevel={sprachLevel}
        onSprachLevelChange={setSprachLevel}
      />

      {/* Play-then-Gate — soft (wegtippbar) bzw. hart (verpflichtend) */}
      {(showSoftGate || showHardGate) && (
        <PlayGate
          locale={locale}
          situationId={situationId}
          ceId={ceId}
          soft={showSoftGate}
          onDismiss={() => setGateStatus("dismissed")}
        />
      )}
    </div>
  );
}

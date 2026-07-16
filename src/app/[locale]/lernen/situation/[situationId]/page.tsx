"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Languages } from "lucide-react";
import { loadSituation as staticLoadSituation } from "../../../../../../content/content-loader";
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
      })
      .finally(() => setLoading(false));
  }, [ceId, situationId]);

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
      if (isGuest && saved.gateStatus === "dismissed") {
        setGateStatus("dismissed");
      }
      return true;
    };

    let localSaved: Parameters<typeof applySaved>[0] = null;
    try {
      localSaved = JSON.parse(
        window.localStorage.getItem(`pflege:guest:${situationId}`) ?? "null"
      );
    } catch {
      // beschädigter/leerer Eintrag — frisch starten
    }

    if (isGuest) {
      applySaved(localSaved);
      return;
    }

    // Gast→Account-Merge: lokalen Stand übernehmen, zum Server schieben,
    // lokal aufräumen (Fortschritt gehört jetzt dem Account).
    if (applySaved(localSaved) && localSaved) {
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
        if (cancelled || !d?.progress) return;
        applySaved({
          currentPhaseId: d.progress.currentPhase,
          completedPhases: d.progress.resumeState?.completedPhases,
          currentStepIndex: d.progress.resumeState?.currentStepIndex,
        });
      })
      .catch(() => {
        // offline/Fehler — frisch starten ist ok
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

  // Reihenfolge der Phasen dieser Situation (situationsTyp-abhängig)
  const phaseOrder: AnyPhase[] = situation?.phasen.map((p) => p.phase) ?? [];

  const currentPhase =
    situation?.phasen.find((p) => p.phase === currentPhaseId) ??
    situation?.phasen[0];
  const phaseSteps: ContentStep[] = currentPhase
    ? [...currentPhase.kernSteps, ...currentPhase.optionaleSteps]
    : [];
  const currentStep = phaseSteps[currentStepIndex] ?? null;

  const advanceStep = useCallback(() => {
    if (isGuest) trackFunnel("step_fertig", { situationId });
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
  }, [currentStepIndex, phaseSteps.length, completedPhases, currentPhaseId, phaseOrder, isGuest, situationId]);

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
  const stepsProPhase = situation.phasen.map(
    (p) => p.kernSteps.length + p.optionaleSteps.length
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
          {allPhasesCompleted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-[var(--lern-accent-bg)] border-[1.5px] border-[var(--lern-accent)]/30 p-8 text-center"
            >
              <span className="text-4xl mb-4 block">🎉</span>
              <h2 className="text-lg font-bold text-[var(--lern-text-primary)] mb-2">
                {t("alleAbgeschlossen")}
              </h2>
              <p className="text-sm text-[var(--lern-text-secondary)] mb-4">
                {situation.titel}
              </p>
              {/* Post-Situation-Sog (Kante D3): nach vorn („Weiter lernen" →
                  nächster Fall / ggf. Paywall) statt Sackgassen-„zurück". */}
              <Link
                href={`/${locale}/lernen/ce/${ceId}`}
                className="inline-block rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#4C6A52]"
              >
                {t("continueSituation")}
              </Link>
            </motion.div>
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
          ) : currentStep ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPhaseId}-${currentStepIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <StepRenderer
                  step={currentStep}
                  sprachLevel={sprachLevel}
                  glossar={SITUATION_GLOSSAR[situationId] ?? []}
                  erklaerKontext={{ ceId, situationId }}
                  onNext={() => handleNextStep()}
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
                />
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

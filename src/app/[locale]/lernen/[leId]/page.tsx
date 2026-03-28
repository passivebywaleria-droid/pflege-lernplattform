"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { loadLektion, getLektionManifest, loadSession, getAvailableSessions } from "@/lib/content-loader";
import type { SessionNumber } from "@/lib/content-loader";
import type { ContentStep, GlossarEntry, LektionMetadata, ErlebnisModus } from "../../../../../content/ce-05/_types";
import { kategorisiereFehler } from "@/lib/adaptive/fehler-analyse";
import { AdaptiveSequencer, createSequencer } from "@/lib/adaptive/sequencer";
import { getSessionEmpfehlungen, getRepetitionPings, zaehleWiederholungen } from "@/lib/adaptive/session-planner";
import { getAllLektionen } from "@/lib/content-loader";
import type { SequencerContext } from "@/lib/adaptive/sequencer";
import { StepText } from "@/components/learn/step-text";
import { StepMC } from "@/components/learn/step-mc";
import { StepMatching } from "@/components/learn/step-matching";
import { StepSorting } from "@/components/learn/step-sorting";
import { StepBranching } from "@/components/learn/step-branching";
import { StepFreetext } from "@/components/learn/step-freetext";
import { StepSelfrating } from "@/components/learn/step-selfrating";
import { StepReflection } from "@/components/learn/step-reflection";
import { StepHotspot } from "@/components/learn/step-hotspot";
import { StepConfidence } from "@/components/learn/step-confidence";
import { StepCloze } from "@/components/learn/step-cloze";
import { StepSequencing } from "@/components/learn/step-sequencing";
import { StepSlider } from "@/components/learn/step-slider";
import { StepSummary } from "@/components/learn/step-summary";
import { StepFillIn } from "@/components/learn/step-fillin";
import { StepTrueFalse } from "@/components/learn/step-truefalse";
import { StepTimer } from "@/components/learn/step-timer";
import { StepMemory } from "@/components/learn/step-memory";
import { StepCrossword } from "@/components/learn/step-crossword";
import { StepCategorize } from "@/components/learn/step-categorize";
import { StepHighlight } from "@/components/learn/step-highlight";
import { StepDialog } from "@/components/learn/step-dialog";
import { StepSwipe } from "@/components/learn/step-swipe";
import { StepFlipCard } from "@/components/learn/step-flipcard";
import { StepReveal } from "@/components/learn/step-reveal";
import { StepTimeline } from "@/components/learn/step-timeline";
import { StepComparison } from "@/components/learn/step-comparison";
import { KiChat } from "@/components/learn/ki-chat";
import { StreakBadge } from "@/components/learn/streak-badge";
import { Confetti } from "@/components/learn/confetti";
import { SprachlevelToggle } from "@/components/learn/sprachlevel-toggle";
import { ModusTransition, MODUS_CONFIG } from "@/components/learn/modus-transition";
import { BloomFeedback } from "@/components/learn/bloom-feedback";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";

const PHASE_LABELS: Record<number, string> = {
  1: "Ankommen",
  2: "Situierung",
  3: "Wissenserwerb",
  4: "Anwendung",
  5: "Reflexion",
  6: "Transfer",
};

const PHASE_COLORS: Record<number, string> = {
  1: "#0071e3",
  2: "#FF9500",
  3: "#30D158",
  4: "#AF52DE",
  5: "#FF3B30",
  6: "#5AC8FA",
};

const BLOOM_LABELS: Record<number, string> = {
  1: "Erinnern",
  2: "Verstehen",
  3: "Anwenden",
  4: "Analysieren",
  5: "Bewerten",
  6: "Erschaffen",
};

export default function LernenPage() {
  const params = useParams();
  const leId = params.leId as string;
  const { saveSessionFortschritt, updateStreakTag, getLeFortschritt, addSchwaeche, saveAntwort, incrementB1Toggle, updateAchsen, updateKompetenzEintrag, profil, loaded: profilLoaded } = useLernFortschritt();

  const [steps, setSteps] = useState<ContentStep[]>([]);
  const [metadata, setMetadata] = useState<LektionMetadata | null>(null);
  const [glossar, setGlossar] = useState<GlossarEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [showWeitermachen, setShowWeitermachen] = useState(false);
  const [savedStep, setSavedStep] = useState<number | null>(null);

  const [activeSession, setActiveSession] = useState<SessionNumber>(1);
  const [availableSessions, setAvailableSessions] = useState<SessionNumber[]>([1]);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [xp, setXp] = useState(0);
  const [showXpToast, setShowXpToast] = useState(false);
  const [xpToastAmount, setXpToastAmount] = useState(0);
  const [selfRating, setSelfRating] = useState<number | null>(null);
  const [reflexionText, setReflexionText] = useState<string | null>(null);
  const [showGlossar, setShowGlossar] = useState(false);
  const [showStepNav, setShowStepNav] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [sprachLevel, setSprachLevel] = useState<"c1" | "b1">("c1");
  const [showModusTransition, setShowModusTransition] = useState(false);
  const [currentModus, setCurrentModus] = useState<ErlebnisModus | null>(null);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const [showBloomFeedback, setShowBloomFeedback] = useState(false);
  // Antwort-History für Zurück-Navigation
  const [answerHistory, setAnswerHistory] = useState<Record<number, { correct: boolean | null; answered: boolean }>>({});
  const [isReviewMode, setIsReviewMode] = useState(false);
  // Fehler-Wiederholung: Queue von Retry-Steps (Duolingo-Prinzip)
  const [retryQueue, setRetryQueue] = useState<{ step: ContentStep; insertAfter: number }[]>([]);
  const [activeRetryStep, setActiveRetryStep] = useState<ContentStep | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasCheckedWeitermachen = useRef(false);
  const stepStartTime = useRef<number>(Date.now());
  const sequencerRef = useRef<AdaptiveSequencer | null>(null);
  const [sessionAntworten, setSessionAntworten] = useState<import("@/hooks/use-lern-fortschritt").StepAntwort[]>([]);
  const [adaptiveStep, setAdaptiveStep] = useState<ContentStep | null>(null);
  const [adaptiveReason, setAdaptiveReason] = useState<string | null>(null);
  const [completionEmpfehlungen, setCompletionEmpfehlungen] = useState<ReturnType<typeof getSessionEmpfehlungen>>([]);
  const [pingCount, setPingCount] = useState(0);

  // Ping-Count berechnen
  useEffect(() => {
    if (profil?.kompetenzRegister) {
      setPingCount(zaehleWiederholungen(profil.kompetenzRegister));
    }
  }, [profil]);

  // Sequencer initialisieren wenn Steps + Profil bereit
  useEffect(() => {
    if (steps.length > 0 && profil) {
      sequencerRef.current = createSequencer(steps, profil);
    }
  }, [steps, profil]);

  // Profil im Sequencer aktualisieren
  useEffect(() => {
    if (sequencerRef.current && profil) {
      sequencerRef.current.updateProfil(profil);
    }
  }, [profil]);

  const SESSION_LABELS: Record<number, string> = {
    1: "Einstieg",
    2: "Vertiefung",
    3: "Transfer",
  };

  // Lektion + Sessions laden
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);

    const manifest = getLektionManifest(leId);
    if (!manifest) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setAvailableSessions(getAvailableSessions(leId));

    loadLektion(leId).then((data) => {
      if (cancelled) return;
      if (!data) {
        setNotFound(true);
      } else {
        setSteps(data.steps);
        setMetadata(data.metadata);
        setGlossar(data.glossar);
      }
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, [leId]);

  // Session wechseln
  const switchSession = useCallback((session: SessionNumber) => {
    setLoading(true);
    setActiveSession(session);
    setCurrentStep(0);
    setScore(0);
    setTotalQuestions(0);
    setIsComplete(false);
    setStreak(0);
    setShowConfetti(false);
    setReflexionText(null);

    loadSession(leId, session).then((sessionSteps) => {
      if (sessionSteps) {
        setSteps(sessionSteps);
      }
      setLoading(false);
    });
  }, [leId]);

  const step = adaptiveStep ?? activeRetryStep ?? steps[currentStep];
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  const awardXp = useCallback((amount: number) => {
    setXp((prev) => prev + amount);
    setXpToastAmount(amount);
    setShowXpToast(true);
    setTimeout(() => setShowXpToast(false), 1500);
  }, []);

  // Retry-Step erzeugen: gleicher Inhalt, anderer Typ
  const createRetryStep = useCallback((original: ContentStep): ContentStep | null => {
    // Nur für Fragetypen mit Optionen
    if (!original.question?.optionen || !original.question.fragetext) return null;

    // MC → TrueFalse Retry
    if (original.stepType === "mc" && original.question.optionen.length >= 2) {
      const correct = original.question.optionen.find((o) => o.isCorrect);
      if (!correct) return null;
      return {
        ...original,
        stepId: `${original.stepId}-retry`,
        stepType: "truefalse",
        modus: "challenge",
        xpValue: 5,
        question: {
          ...original.question,
          trueFalseCards: [
            {
              statement: `${correct.text} — stimmt das zum Thema "${original.contentC1.title}"?`,
              isTrue: true,
              explanation: correct.explanation,
            },
          ],
        },
      };
    }

    // Andere Typen → MC-Retry mit leicht geaenderter Frage
    if (original.stepType !== "mc" && original.question.optionen) {
      return {
        ...original,
        stepId: `${original.stepId}-retry`,
        stepType: "mc",
        modus: "challenge",
        xpValue: 5,
        contentC1: {
          ...original.contentC1,
          title: `Nochmal: ${original.contentC1.title}`,
        },
      };
    }

    return null;
  }, []);

  const goPrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setIsReviewMode(true);
      setShowBloomFeedback(false);
      setLastAnswerCorrect(null);
    }
  }, [currentStep]);

  const advanceStep = useCallback(() => {
    // Adaptiven Step zurücksetzen wenn einer aktiv war
    if (adaptiveStep) {
      setAdaptiveStep(null);
      setAdaptiveReason(null);
      return; // Nach adaptivem Step → weiter zum normalen nächsten
    }

    // Legacy Retry-System (Fallback wenn Sequencer keinen Insert hat)
    if (activeRetryStep === null) {
      const dueRetry = retryQueue.find((r) => r.insertAfter <= currentStep);
      if (dueRetry) {
        setRetryQueue((q) => q.filter((r) => r !== dueRetry));
        setActiveRetryStep(dueRetry.step);
        return;
      }
    } else {
      setActiveRetryStep(null);
    }

    setIsReviewMode(false);

    if (currentStep < steps.length - 1) {
      // --- Adaptive Sequencer prüfen ---
      if (sequencerRef.current) {
        const ctx: SequencerContext = {
          currentIndex: currentStep,
          lastAntwort: sessionAntworten[sessionAntworten.length - 1] ?? null,
          sessionAntworten,
          streak,
          sprachLevel,
          sessionStartTime: 0,
        };

        const result = sequencerRef.current.getNextStep(ctx);

        // Eingefügter Step?
        if (result.isInserted) {
          setAdaptiveStep(result.step);
          setAdaptiveReason(result.reason ?? null);
          return; // Zeigt adaptiven Step, currentStep bleibt
        }

        // Überspringen?
        if (result.shouldSkip && currentStep < steps.length - 2) {
          // Überspringe den nächsten und gehe einen weiter
          setCurrentStep((s) => s + 2);
          const skipToStep = steps[currentStep + 2];
          if (skipToStep?.modus && skipToStep.modus !== currentModus) {
            setCurrentModus(skipToStep.modus);
            setShowModusTransition(true);
          }
          return;
        }

        // Auto B1-Wechsel?
        if (sequencerRef.current.shouldSwitchToB1(ctx) && sprachLevel !== "b1") {
          setSprachLevel("b1");
        }
      }

      const nextStep = steps[currentStep + 1];
      const nextModus = nextStep?.modus;

      if (nextModus && nextModus !== currentModus) {
        setCurrentModus(nextModus);
        setShowModusTransition(true);
      }

      setCurrentStep((s) => s + 1);
    } else {
      setShowConfetti(true);
      setIsComplete(true);
      updateAchsen();
      // Empfehlungen für "Was kommt als nächstes?" berechnen
      if (profil) {
        const manifest = getAllLektionen();
        setCompletionEmpfehlungen(getSessionEmpfehlungen(profil, manifest));
      }
    }
  }, [currentStep, steps, currentModus, retryQueue, activeRetryStep, updateAchsen, adaptiveStep, sessionAntworten, streak, sprachLevel]);

  const goNext = useCallback(
    (correct?: boolean) => {
      const currentStepData = steps[currentStep];
      const zeitMs = Date.now() - stepStartTime.current;

      // Antwort in History speichern
      setAnswerHistory((prev) => ({
        ...prev,
        [currentStep]: { correct: correct ?? null, answered: true },
      }));

      // --- Adaptive Datensammlung: StepAntwort erstellen ---
      if (currentStepData) {
        const sprachAchse = profil?.achsen?.sprache ?? 3;
        const antwort: import("@/hooks/use-lern-fortschritt").StepAntwort = {
          stepId: currentStepData.stepId,
          stepType: currentStepData.stepType,
          correct: correct ?? null,
          zeitMs,
          bloomLevel: currentStepData.bloomLevel,
        };

        // Fehler-Kategorisierung bei falscher Antwort
        if (correct === false) {
          antwort.fehlerKategorie = kategorisiereFehler(
            antwort,
            sessionAntworten,
            sprachAchse,
          );
        }

        // In Session-Antworten und globales Profil speichern
        setSessionAntworten((prev) => [...prev, antwort]);
        saveAntwort(antwort);
        updateKompetenzEintrag(antwort, currentStepData.lernziel, leId);
      }

      if (correct !== undefined) {
        setTotalQuestions((t) => t + 1);
        setLastAnswerCorrect(correct);
        setShowBloomFeedback(true);

        if (correct) {
          setScore((s) => s + 1);
          setStreak((s) => s + 1);
          awardXp(currentStepData?.xpValue ?? 10);
        } else {
          setStreak(0);
          awardXp(3);

          // Karteikarte aus Schwäche generieren
          if (currentStepData?.question?.fragetext) {
            addSchwaeche({
              leId,
              begriff: currentStepData.contentC1.title,
              fragetext: currentStepData.question.fragetext,
              richtigeAntwort: currentStepData.question.optionen?.find((o) => o.isCorrect)?.text ?? "",
              falscheAntwort: "",
            });
          }

          // Fehler-Wiederholung: Retry 3-5 Steps später (max 3 Retries in Queue)
          if (retryQueue.length < 3 && currentStepData) {
            const retry = createRetryStep(currentStepData);
            if (retry) {
              const insertAfter = currentStep + 3 + Math.floor(Math.random() * 3);
              setRetryQueue((q) => [...q, { step: retry, insertAfter }]);
            }
          }
        }
      } else {
        setLastAnswerCorrect(null);
        setShowBloomFeedback(false);
        awardXp(currentStepData?.xpValue ?? 5);
      }

      advanceStep();
    },
    [currentStep, steps, awardXp, addSchwaeche, leId, advanceStep, retryQueue, createRetryStep, profil, sessionAntworten, saveAntwort, updateKompetenzEintrag],
  );

  // Fortschritt nach jedem Step speichern
  useEffect(() => {
    if (steps.length > 0 && profilLoaded) {
      saveSessionFortschritt({
        leId,
        session: activeSession,
        currentStep,
        totalSteps: steps.length,
        xp,
        score,
        totalQuestions,
        hearts: 0,
        streak,
        reflexionText,
        antworten: sessionAntworten,
        updatedAt: new Date().toISOString(),
      });
    }
  }, [currentStep, leId, activeSession, steps.length, xp, score, totalQuestions, streak, reflexionText, saveSessionFortschritt, profilLoaded]);

  // Streak-Tag bei Aktivität zählen
  useEffect(() => {
    if (profilLoaded && steps.length > 0) {
      updateStreakTag();
    }
  }, [profilLoaded, steps.length, updateStreakTag]);

  // "Weitermachen" NUR einmal beim initialen Laden prüfen
  useEffect(() => {
    if (hasCheckedWeitermachen.current) return;
    if (profilLoaded && steps.length > 0) {
      hasCheckedWeitermachen.current = true;
      const le = getLeFortschritt(leId);
      const saved = le?.sessions[activeSession];
      if (saved && saved.currentStep > 0 && saved.currentStep < saved.totalSteps - 1) {
        setSavedStep(saved.currentStep);
        setShowWeitermachen(true);
      }
    }
  }, [profilLoaded, steps.length, leId, activeSession, getLeFortschritt]);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    stepStartTime.current = Date.now();
  }, [currentStep]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#0071e3] border-t-transparent" />
          <p className="text-sm text-[#6e6e73]">Lektion wird geladen...</p>
        </div>
      </div>
    );
  }

  // Weitermachen-Dialog
  if (showWeitermachen && savedStep !== null && metadata) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-md rounded-3xl bg-white border border-[#d2d2d7] p-8 text-center space-y-5"
        >
          <div className="text-4xl">👋</div>
          <h1 className="text-xl font-bold text-[#1d1d1f]">
            Willkommen zurück!
          </h1>
          <p className="text-sm text-[#6e6e73]">
            Du warst bei:<br />
            <strong className="text-[#1d1d1f]">
              {metadata.title} · Session {activeSession} · Step {savedStep + 1}/{steps.length}
            </strong>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setShowWeitermachen(false);
              }}
              className="flex-1 rounded-2xl bg-[#f5f5f7] px-5 py-3.5 text-sm font-semibold text-[#1d1d1f] transition-all active:scale-[0.98]"
            >
              Von vorn
            </button>
            <button
              onClick={() => {
                setCurrentStep(savedStep);
                setShowWeitermachen(false);
              }}
              className="flex-1 rounded-2xl bg-[#0071e3] px-5 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98]"
            >
              Weitermachen
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // 404 State
  if (notFound || !metadata || !step) {
    const manifest = getLektionManifest(leId);
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="mx-auto max-w-md text-center space-y-4 px-4">
          <div className="text-5xl">📚</div>
          <h1 className="text-2xl font-bold text-[#1d1d1f]">
            {manifest ? manifest.title : "Lektion nicht gefunden"}
          </h1>
          <p className="text-[#6e6e73]">
            {manifest
              ? "Diese Lektion wird gerade erstellt. Der Content-Loop laeuft noch."
              : `Die Lektion "${leId}" existiert nicht.`}
          </p>
          <a
            href="/de/lernen"
            className="inline-block rounded-2xl bg-[#0071e3] px-6 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
          >
            Zur Uebersicht
          </a>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (isComplete) {
    const percentage =
      totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 100;
    return (
      <div
        ref={containerRef}
        className="min-h-screen bg-[#f5f5f7]"
      >
        <div className="mx-auto max-w-2xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-white border border-[#d2d2d7] p-8 text-center space-y-6"
          >
            <div className="text-6xl">
              {percentage >= 80 ? "🎉" : percentage >= 60 ? "👏" : "💪"}
            </div>
            <h1 className="text-3xl font-bold text-[#1d1d1f]">
              Lerneinheit abgeschlossen!
            </h1>
            <p className="text-lg text-[#6e6e73]">{metadata.title}</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#0071e3]/5 p-4">
                <p className="text-2xl font-bold text-[#0071e3]">{xp} XP</p>
                <p className="text-xs text-[#6e6e73]">Erfahrung</p>
              </div>
              <div className="rounded-2xl bg-[#30D158]/5 p-4">
                <p className="text-2xl font-bold text-[#30D158]">
                  {score}/{totalQuestions}
                </p>
                <p className="text-xs text-[#6e6e73]">Richtig</p>
              </div>
              <div className="rounded-2xl bg-[#AF52DE]/5 p-4">
                <p className="text-2xl font-bold text-[#AF52DE]">
                  {percentage}%
                </p>
                <p className="text-xs text-[#6e6e73]">Score</p>
              </div>
            </div>

            {selfRating !== null && (
              <div className="rounded-2xl bg-[#FFF9E6] border border-[#FFD60A]/30 p-4">
                <p className="text-sm text-[#6e6e73]">
                  Deine Selbsteinschaetzung am Anfang:{" "}
                  <strong>{selfRating}/5</strong>
                </p>
                <p className="text-sm text-[#6e6e73]">
                  Hat sich dein Wissen verbessert?
                </p>
              </div>
            )}

            {/* Spaced-Repetition-Hinweis */}
            {pingCount > 0 && (
              <div className="rounded-2xl bg-[#FF9500]/5 border border-[#FF9500]/20 px-4 py-3 text-left">
                <p className="text-sm text-[#FF9500] font-medium">
                  {pingCount} Lernziel{pingCount > 1 ? "e" : ""} zur Auffrischung fällig
                </p>
                <p className="text-xs text-[#86868b] mt-0.5">
                  Wird in deine nächste Session eingebaut
                </p>
              </div>
            )}

            {/* Empfehlungen: Was kommt als nächstes? */}
            {completionEmpfehlungen.length > 0 && (
              <div className="space-y-2 text-left">
                <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wide">
                  Empfohlen als Nächstes
                </p>
                {completionEmpfehlungen.slice(0, 2).map((emp) => (
                  <a
                    key={`${emp.leId}-${emp.session}`}
                    href={emp.leId ? `/de/lernen/${emp.leId}` : "/de/dashboard"}
                    className="flex items-center gap-3 rounded-xl bg-[#f5f5f7] p-3 transition-all active:scale-[0.98]"
                  >
                    <span className="text-lg shrink-0">
                      {emp.typ === "weiter" ? "▶️" : emp.typ === "neue-session" ? "📖" : emp.typ === "neue-le" ? "🆕" : emp.typ === "wiederholung" ? "🔄" : "⚡"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#1d1d1f] truncate">{emp.grund}</p>
                      <p className="text-xs text-[#86868b]">~{emp.geschaetzteMinuten} Min</p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setScore(0);
                  setTotalQuestions(0);
                  setXp(0);
                  setSelfRating(null);
                  setIsComplete(false);
                }}
                className="flex-1 rounded-2xl bg-[#f5f5f7] px-6 py-4 text-base font-semibold text-[#1d1d1f] transition-all active:scale-[0.98]"
              >
                Nochmal
              </button>
              {activeSession < 3 && availableSessions.includes((activeSession + 1) as SessionNumber) ? (
                <button
                  onClick={() => switchSession((activeSession + 1) as SessionNumber)}
                  className="flex-1 rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
                >
                  Session {activeSession + 1}: {SESSION_LABELS[activeSession + 1]}
                </button>
              ) : (
                <a
                  href="/de/dashboard"
                  className="flex-1 rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white text-center transition-all active:scale-[0.98]"
                >
                  Dashboard
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#f5f5f7] overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/50">
        <div className="mx-auto max-w-2xl px-4 py-3">
          {/* Session Tabs (nur wenn mehrere Sessions verfuegbar) */}
          {availableSessions.length > 1 && (
            <div className="flex gap-1 mb-2 p-0.5 rounded-xl bg-[#f5f5f7]">
              {availableSessions.map((s) => (
                <button
                  key={s}
                  onClick={() => switchSession(s)}
                  className={`flex-1 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeSession === s
                      ? "bg-white text-[#1d1d1f] shadow-sm"
                      : "text-[#86868b] active:opacity-60"
                  }`}
                >
                  S{s}: {SESSION_LABELS[s]}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {currentStep > 0 && (
                <button
                  onClick={goPrev}
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#f5f5f7] text-[#6e6e73] active:scale-95 transition-transform"
                  aria-label="Zurück"
                >
                  ‹
                </button>
              )}
              {step.modus && MODUS_CONFIG[step.modus] ? (
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: MODUS_CONFIG[step.modus].farbe }}
                >
                  {MODUS_CONFIG[step.modus].icon} {MODUS_CONFIG[step.modus].label}
                </span>
              ) : (
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: PHASE_COLORS[step.phase] }}
                >
                  {PHASE_LABELS[step.phase]}
                </span>
              )}
              <span className="text-xs text-[#86868b]">
                Bloom {step.bloomLevel}: {BLOOM_LABELS[step.bloomLevel]}
              </span>
              <StreakBadge streak={streak} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#0071e3]">
                {xp} XP
              </span>
            </div>
          </div>

          {/* Zweite Zeile: Glossar + Sprachlevel */}
          <div className="flex items-center justify-between mb-2">
            <SprachlevelToggle level={sprachLevel} onChange={(l) => { setSprachLevel(l); if (l === "b1") incrementB1Toggle(); }} />
            <button
              onClick={() => setShowGlossar(!showGlossar)}
              className="text-xs font-medium text-[#0071e3] active:opacity-60"
            >
              Glossar
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 rounded-full bg-[#f5f5f7]">
            <motion.div
              className="h-full rounded-full bg-[#0071e3]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
            />
          </div>
          <button
            onClick={() => setShowStepNav(true)}
            className="text-[10px] text-[#0071e3] font-medium text-right mt-1 w-full active:opacity-60"
          >
            {currentStep + 1} / {steps.length} — Alle Steps
          </button>
        </div>
      </div>

      {/* XP Toast */}
      <AnimatePresence>
        {showXpToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -10, x: "-50%" }}
            className="fixed bottom-24 left-1/2 z-50 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-bold text-white shadow-lg"
          >
            +{xpToastAmount} XP
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glossar Overlay */}
      <AnimatePresence>
        {showGlossar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowGlossar(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-3xl bg-white p-6"
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#d2d2d7]" />
              <h3 className="text-lg font-bold mb-4 text-[#1d1d1f]">
                Glossar — {metadata.titleShort}
              </h3>
              {glossar.length === 0 ? (
                <p className="text-sm text-[#6e6e73]">Noch keine Glossar-Eintraege.</p>
              ) : (
                <div className="space-y-3">
                  {glossar.map((g) => (
                    <div
                      key={g.begriff}
                      className="rounded-xl bg-[#f5f5f7] p-3"
                    >
                      <p className="font-semibold text-sm text-[#1d1d1f]">
                        {g.begriff}
                      </p>
                      <p className="text-sm text-[#6e6e73]">{g.erklaerung}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step Navigator Overlay */}
      <AnimatePresence>
        {showStepNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowStepNav(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 max-h-[75vh] overflow-y-auto rounded-t-3xl bg-white p-6"
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#d2d2d7]" />
              <h3 className="text-lg font-bold mb-1 text-[#1d1d1f]">
                Step-Navigator
              </h3>
              <p className="text-xs text-[#6e6e73] mb-4">
                Session {activeSession} — {steps.length} Steps
              </p>
              <div className="space-y-1.5">
                {steps.map((s, i) => {
                  const sContent = sprachLevel === "b1" && s.contentB1 ? s.contentB1 : s.contentC1;
                  const isCurrent = i === currentStep;
                  const isAnswered = answerHistory[i]?.answered;
                  const wasCorrect = answerHistory[i]?.correct;
                  return (
                    <button
                      key={s.stepId}
                      onClick={() => {
                        setCurrentStep(i);
                        setIsReviewMode(i < currentStep);
                        setShowStepNav(false);
                        setShowBloomFeedback(false);
                        setLastAnswerCorrect(null);
                      }}
                      className={`w-full text-left rounded-xl px-3 py-2.5 flex items-center gap-3 transition-all active:scale-[0.98] ${
                        isCurrent
                          ? "bg-[#0071e3]/10 border border-[#0071e3]/30"
                          : "bg-[#f9f9fb] hover:bg-[#f0f0f5]"
                      }`}
                    >
                      {/* Step Number + Status */}
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                        isCurrent
                          ? "bg-[#0071e3] text-white"
                          : isAnswered
                            ? wasCorrect
                              ? "bg-[#30D158]/20 text-[#30D158]"
                              : wasCorrect === false
                                ? "bg-[#FF3B30]/20 text-[#FF3B30]"
                                : "bg-[#0071e3]/20 text-[#0071e3]"
                            : "bg-[#e8e8ed] text-[#6e6e73]"
                      }`}>
                        {i + 1}
                      </div>
                      {/* Title + Type */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          isCurrent ? "text-[#0071e3]" : "text-[#1d1d1f]"
                        }`}>
                          {sContent.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-[#6e6e73] uppercase tracking-wider font-semibold">
                            {s.stepType}
                          </span>
                          {s.modus && MODUS_CONFIG[s.modus] && (
                            <span className="text-[10px]">
                              {MODUS_CONFIG[s.modus].icon}
                            </span>
                          )}
                          <span className="text-[10px] text-[#86868b]">
                            B{s.bloomLevel}
                          </span>
                          {s.xpValue && (
                            <span className="text-[10px] text-[#0071e3]">
                              {s.xpValue} XP
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step Content */}
      <div className="mx-auto max-w-2xl px-4 py-6">
        {/* Review-Modus Banner */}
        {isReviewMode && answerHistory[currentStep] && (
          <div className={`mb-4 rounded-2xl px-4 py-3 flex items-center justify-between ${
            answerHistory[currentStep].correct === true
              ? "bg-[#30D158]/10 border border-[#30D158]/30"
              : answerHistory[currentStep].correct === false
                ? "bg-[#FF3B30]/10 border border-[#FF3B30]/30"
                : "bg-[#0071e3]/10 border border-[#0071e3]/30"
          }`}>
            <span className="text-sm font-medium text-[#1d1d1f]">
              {answerHistory[currentStep].correct === true
                ? "✓ Richtig beantwortet"
                : answerHistory[currentStep].correct === false
                  ? "✗ Falsch beantwortet"
                  : "✓ Abgeschlossen"}
            </span>
            <button
              onClick={() => advanceStep()}
              className="text-sm font-semibold text-[#0071e3] active:opacity-60"
            >
              Weiter ›
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {showModusTransition && currentModus ? (
            <motion.div
              key={`modus-${currentModus}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModusTransition
                modus={currentModus}
                onDone={() => setShowModusTransition(false)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={step.stepId}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
            >
              <StepRenderer
                step={step}
                sprachLevel={sprachLevel}
                glossar={glossar}
                onNext={goNext}
                onSelfRating={(r) => {
                  setSelfRating(r);
                  goNext();
                }}
                onReflection={(text) => {
                  setReflexionText(text);
                }}
                reflexionText={reflexionText}
                xp={xp}
                score={score}
                totalQuestions={totalQuestions}
              />
              {showBloomFeedback && lastAnswerCorrect !== null && step.bloomLevel > 0 && (
                <BloomFeedback
                  bloomLevel={step.bloomLevel}
                  correct={lastAnswerCorrect}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confetti bei Session-Ende */}
      <Confetti active={showConfetti} />

      {/* KI-Chat Floating Button */}
      {metadata && (
        <KiChat
          leTitle={metadata.title}
          stepTitle={step.contentC1.title}
          glossar={glossar.map((g) => g.begriff)}
        />
      )}
    </div>
  );
}

function StepRenderer({
  step,
  sprachLevel,
  glossar,
  onNext,
  onSelfRating,
  onReflection,
  reflexionText,
  xp,
  score,
  totalQuestions,
}: {
  step: ContentStep;
  sprachLevel: "c1" | "b1";
  glossar: GlossarEntry[];
  onNext: (correct?: boolean) => void;
  onSelfRating: (rating: number) => void;
  onReflection: (text: string) => void;
  reflexionText: string | null;
  xp: number;
  score: number;
  totalQuestions: number;
}) {
  const content = sprachLevel === "b1" && step.contentB1 ? step.contentB1 : step.contentC1;

  switch (step.stepType) {
    case "selfrating":
      return (
        <StepSelfrating
          title={content.title}
          body={content.body}
          glossar={glossar}
          fragetext={step.question?.fragetext ?? ""}
          onNext={onSelfRating}
        />
      );

    case "reflection":
      if (!step.question?.reflection) return null;
      return (
        <StepReflection
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          prompt={step.question.reflection.prompt}
          placeholder={step.question.reflection.placeholder}
          systemPrompt={step.question.reflection.systemPrompt}
          onTextSubmit={(text) => onReflection(text)}
          onNext={() => onNext()}
        />
      );

    case "hotspot":
      if (!step.question?.hotspot) return null;
      return (
        <StepHotspot
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          imageUrl={step.question.hotspot.imageUrl}
          imageAlt={step.question.hotspot.imageAlt}
          instruction={step.question.hotspot.instruction}
          zones={step.question.hotspot.zones}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "confidence":
      if (!step.question?.confidenceCards) return null;
      return (
        <StepConfidence
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          cards={step.question.confidenceCards}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "cloze":
      if (!step.question?.cloze) return null;
      return (
        <StepCloze
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          textWithBlanks={step.question.cloze.textWithBlanks}
          blanks={step.question.cloze.blanks}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "sequencing":
      if (!step.question?.sequencing) return null;
      return (
        <StepSequencing
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={step.question.sequencing.instruction}
          items={step.question.sequencing.items}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "slider":
      if (!step.question?.slider) return null;
      return (
        <StepSlider
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={step.question.slider.instruction}
          unit={step.question.slider.unit}
          min={step.question.slider.min}
          max={step.question.slider.max}
          step={step.question.slider.step}
          correctValue={step.question.slider.correctValue}
          tolerance={step.question.slider.tolerance}
          explanation={step.question.slider.explanation}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "summary":
      if (!step.question?.summary) return null;
      return (
        <StepSummary
          title={content.title}
          glossar={glossar}
          reflexionText={reflexionText ?? undefined}
          rueckbezug={step.question.summary.reflexionRueckbezug}
          kernaussagen={step.question.summary.kernaussagen}
          xp={xp}
          score={score}
          totalQuestions={totalQuestions}
          onNext={() => onNext()}
        />
      );

    case "text":
      return (
        <StepText
          title={content.title}
          body={content.body}
          glossar={glossar}
          fallbezug={content.fallbezug}
          glossarBegriffe={content.glossarBegriffe}
          imageUrl={step.imageUrl}
          imageAlt={step.imageAlt}
          wusstestDuDas={step.wusstestDuDas}
          carousel={step.modus === "entdecker"}
          onNext={() => onNext()}
        />
      );

    case "mc":
      if (!step.question?.optionen) return null;
      return (
        <StepMC
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          fragetext={step.question.fragetext}
          optionen={step.question.optionen}
          multiSelect={step.question.multiSelect}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "matching":
      if (!step.question?.matchingPairs) return null;
      return (
        <StepMatching
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          fragetext={step.question.fragetext}
          pairs={step.question.matchingPairs}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "sorting":
      if (!step.question?.sortItems) return null;
      return (
        <StepSorting
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          fragetext={step.question.fragetext}
          items={step.question.sortItems}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "branching":
      if (!step.question?.branchingOptions) return null;
      return (
        <StepBranching
          title={content.title}
          body={content.body}
          glossar={glossar}
          fragetext={step.question.fragetext}
          options={step.question.branchingOptions}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "freetext":
      return (
        <StepFreetext
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          fragetext={step.question?.fragetext ?? ""}
          musterantwort={step.question?.musterantwort}
          bewertungskriterien={step.question?.bewertungskriterien}
          satzanfaengeB1={step.question?.satzanfaengeB1}
          onNext={() => onNext(true)}
        />
      );

    case "fillin":
      if (!step.question?.fillin) return null;
      return (
        <StepFillIn
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sentence={step.question.fillin.sentence}
          options={step.question.fillin.options}
          correctIndex={step.question.fillin.correctIndex}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "truefalse":
      if (!step.question?.trueFalseCards) return null;
      return (
        <StepTrueFalse
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          cards={step.question.trueFalseCards}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "timer":
      if (!step.question?.timerQuestions) return null;
      return (
        <StepTimer
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          questions={step.question.timerQuestions}
          timeLimitSeconds={step.question.timeLimitSeconds}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "memory":
      if (!step.question?.memoryPairs) return null;
      return (
        <StepMemory
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          pairs={step.question.memoryPairs}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "crossword":
      if (!step.question?.crosswordWords) return null;
      return (
        <StepCrossword
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          words={step.question.crosswordWords}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "categorize":
      if (!step.question?.categories || !step.question?.categoryItems)
        return null;
      return (
        <StepCategorize
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          categories={step.question.categories}
          items={step.question.categoryItems}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "highlight":
      if (!step.question?.highlightSegments) return null;
      return (
        <StepHighlight
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          segments={step.question.highlightSegments}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "dialog":
      if (!step.question?.dialogPhases) return null;
      return (
        <StepDialog
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          patientName={step.question.patientName ?? "Patient"}
          phases={step.question.dialogPhases}
          onNext={(correct) => onNext(correct)}
          sprachLevel={sprachLevel}
        />
      );

    case "swipe":
      if (!step.question?.swipe) return null;
      return (
        <StepSwipe
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={step.question.swipe.instruction}
          cards={step.question.swipe.cards}
          sprachLevel={sprachLevel}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "flipcard":
      if (!step.question?.flipcard) return null;
      return (
        <StepFlipCard
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={step.question.flipcard.instruction}
          cards={step.question.flipcard.cards}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );

    case "reveal":
      if (!step.question?.reveal) return null;
      return (
        <StepReveal
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={step.question.reveal.instruction}
          cards={step.question.reveal.cards}
          revealMode={step.question.reveal.revealMode}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );

    case "timeline":
      if (!step.question?.timeline) return null;
      return (
        <StepTimeline
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={step.question.timeline.instruction}
          events={step.question.timeline.events}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );

    case "comparison":
      if (!step.question?.comparison) return null;
      return (
        <StepComparison
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={step.question.comparison.instruction}
          columns={step.question.comparison.columns}
          rows={step.question.comparison.rows}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );

    default:
      return (
        <StepText
          title={content.title}
          body={content.body}
          glossar={glossar}
          onNext={() => onNext()}
        />
      );
  }
}

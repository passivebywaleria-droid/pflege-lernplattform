"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { getLektionManifest, getAllLektionen, loadKarteikarten } from "@/lib/content-loader";
import type { SessionNumber, LeManifestEntry } from "@/lib/content-loader";
import { getSessionEmpfehlungen } from "@/lib/adaptive/session-planner";
import { StepRenderer } from "@/components/learn/step-renderer";
import { KiChat } from "@/components/learn/ki-chat";
import { LehrerChat } from "@/components/learn/lehrer-chat";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";
import { StreakBadge } from "@/components/learn/streak-badge";
import { Confetti } from "@/components/learn/confetti";
import { FeedbackOverlay } from "@/components/learn/lottie-feedback";
import { ModusTransition } from "@/components/learn/modus-transition";
import { CheckpointFeedback } from "@/components/learn/checkpoint-feedback";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import { useKarteikarten } from "@/hooks/use-karteikarten";
import { XpPop, SessionXpCounter } from "@/components/learn/xp-display";
import { SessionSummary } from "@/components/learn/session-summary";
import type { StepType, ThemenblockPhase } from "../../../../../content/_types";
import { SprachLevelProvider } from "@/components/learn/fachbegriff-tooltip";
import { useSessionLoader } from "@/hooks/use-session-loader";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import { useAdaptiveEngine, filterStepsByTrack } from "@/hooks/use-adaptive-engine";
import { useGamification } from "@/hooks/use-gamification";
import { useDarkModeStore, useDarkModeInit } from "@/hooks/use-dark-mode";
import { useMutterspracheStore, useMutterspracheInit } from "@/hooks/use-muttersprache";
import { MutterspracheModal } from "@/components/learn/muttersprache-modal";
import { ScaffoldingOverlay } from "@/components/learn/scaffolding-overlay";
import { Sun, Moon } from "lucide-react";
import { getMotivationsText, resetMotivationsTracking } from "@/lib/motivation";
import { LeTabs } from "@/components/learn/le-tabs";
import type { LeTab } from "@/components/learn/le-tabs";
import { ArtikelRenderer } from "@/components/learn/artikel-renderer";
import { LE08_ARTIKEL } from "../../../../../content/le-08/artikel";
import { FallZeitleiste } from "@/components/learn/fall-zeitleiste";
import { LE08_FALLVERLAEUFE } from "../../../../../content/le-08/fallverlaeufe";
import { PraxisUebungen } from "@/components/learn/praxis-uebungen";
import { LE08_PRAXIS } from "../../../../../content/le-08/praxis";
import { ExamCaseStart } from "@/components/learn/exam-case-start";
import { LE08_PRUEFUNGSFALL } from "../../../../../content/le-08/pruefungsfall";
import { PfadPicker } from "@/components/learn/pfad-picker";


export default function LernenPage() {
  const locale = useLocale();
  const params = useParams();
  const leId = params.leId as string;
  const { saveSessionFortschritt, updateStreakTag, getLeFortschritt, addSchwaeche, saveAntwort, updateAchsen, updateKompetenzEintrag, logSession, logAktivitaet, profil, loaded: profilLoaded, incrementB1Toggle, synchronisiereStores } = useLernFortschritt();

  // Dark Mode
  useDarkModeInit();
  const { isDark, toggle: toggleDarkMode } = useDarkModeStore();

  // Muttersprache — Modal beim ersten Besuch anzeigen
  useMutterspracheInit();
  const mutterspracheBrauchtAuswahl = useMutterspracheStore((s) => s.needsSelection);
  const [showMuttersprachModal, setShowMuttersprachModal] = useState(false);
  useEffect(() => {
    // Zeige Modal nach kurzem Delay beim ersten Besuch (nicht sofort, damit Seite laden kann)
    if (mutterspracheBrauchtAuswahl && profilLoaded) {
      const timer = setTimeout(() => setShowMuttersprachModal(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [mutterspracheBrauchtAuswahl, profilLoaded]);

  // Karteikarten: automatisch bei falschen Antworten erstellen + pre-generierte importieren
  const { addKarteikarte, getGemeistarteKarten, importVorlagen } = useKarteikarten();

  // Tab-Navigation (5-Tabs Redesign)
  const [activeTab, setActiveTab] = useState<LeTab>("ueben");
  const [geleseneKapitel, setGeleseneKapitel] = useState<Set<string>>(new Set());

  // Artikel-Daten laden (nur für LE-08 Prototyp — später dynamisch)
  const artikelKapitel = leId === "le-08" ? LE08_ARTIKEL : undefined;
  const fallverlaeufe = leId === "le-08" ? LE08_FALLVERLAEUFE : undefined;
  const praxisUebungen = leId === "le-08" ? LE08_PRAXIS : undefined;
  const pruefungsfall = leId === "le-08" ? LE08_PRUEFUNGSFALL : undefined;

  const handleKapitelGelesen = useCallback((kapitelId: string) => {
    setGeleseneKapitel((prev) => new Set(prev).add(kapitelId));
  }, []);

  const handleKapitelNavigieren = useCallback((kapitelId: string) => {
    setActiveTab("wissen");
  }, []);

  const [selfRating, setSelfRating] = useState<number | null>(null);
  const [reflexionText, setReflexionText] = useState<string | null>(null);
  const [showGlossar, setShowGlossar] = useState(false);
  const [showStepNav, setShowStepNav] = useState(false);
  const [showLeDrawer, setShowLeDrawer] = useState(false);
  const [showSessionIntro, setShowSessionIntro] = useState(true);
  const [completionEmpfehlungen, setCompletionEmpfehlungen] = useState<ReturnType<typeof getSessionEmpfehlungen>>([]);
  const [motivationText, setMotivationText] = useState<string | null>(null);
  const sessionStartTimeRef = useRef<string>(new Date().toISOString());

  const allLektionen = getAllLektionen();

  // activeTrack state lives here to break circular dependency
  const [activeTrack, setActiveTrack] = useState<"basis" | "all">("all");

  // --- Session Loader ---
  const session = useSessionLoader({
    leId,
    profilLoaded,
    getLeFortschritt,
    activeTrack,
  });

  // --- Adaptive Engine ---
  const adaptive = useAdaptiveEngine({
    steps: session.steps,
    profil,
    currentStep: 0,
    allStepsRef: session.allStepsRef,
  });

  // --- Gamification ---
  const gamification = useGamification();

  // --- Step Navigation ---
  const navigation = useStepNavigation({
    steps: session.steps,
    leId,
    currentModus: adaptive.currentModus,
    setCurrentModus: adaptive.setCurrentModus,
    setShowModusTransition: adaptive.setShowModusTransition,
    sprachLevel: adaptive.sprachLevel,
    setSprachLevel: adaptive.setSprachLevel,
    sequencerRef: adaptive.sequencerRef,
    profil,
    saveAntwort,
    updateKompetenzEintrag,
    addSchwaeche,
    updateAchsen,
    isReviewingPhase: adaptive.isReviewingPhase,
    setIsReviewingPhase: adaptive.setIsReviewingPhase,
    reviewSteps: adaptive.reviewSteps,
    reviewIndex: adaptive.reviewIndex,
    setReviewIndex: adaptive.setReviewIndex,
    onSessionComplete: () => {
      gamification.setShowConfetti(true);
      if (profil) {
        const manifest = getAllLektionen();
        setCompletionEmpfehlungen(getSessionEmpfehlungen(profil, manifest));
      }
      // Gemeisterte Karteikarten → KompetenzRegister synchronisieren
      const gemeistert = getGemeistarteKarten();
      if (gemeistert.length > 0) {
        synchronisiereStores(gemeistert);
      }
    },
    onXpEarned: gamification.onXpEarned,
    onCorrect: () => {},
    onWrong: () => {},
    setFeedbackType: gamification.setFeedbackType,
    incrementB1Toggle,
  });

  // Vertiefungs-Prompt bei Streak >= 3
  useEffect(() => {
    adaptive.checkVertiefungPrompt(navigation.streak);
  }, [navigation.streak, adaptive.checkVertiefungPrompt]);

  // Session wechseln Wrapper
  const switchSession = useCallback((s: SessionNumber) => {
    session.switchSession(s, () => {
      navigation.resetNavigation();
      gamification.resetGamification();
      resetMotivationsTracking();
      setReflexionText(null);
      setShowSessionIntro(true);
      sessionStartTimeRef.current = new Date().toISOString();
    });
  }, [session, navigation, gamification]);

  // Track umschalten
  const toggleTrack = useCallback((newTrack: "basis" | "all") => {
    setActiveTrack(newTrack);
    const filtered = filterStepsByTrack(session.allStepsRef.current, newTrack);
    session.setSteps(filtered);
    navigation.setCurrentStep((s: number) => s >= filtered.length ? Math.max(0, filtered.length - 1) : s);
    adaptive.setShowVertiefungPrompt(false);
  }, [session, navigation, adaptive]);

  // Fortschritt nach jedem Step speichern
  useEffect(() => {
    if (session.steps.length > 0 && profilLoaded) {
      saveSessionFortschritt({
        leId,
        session: session.activeSession,
        currentStep: navigation.currentStep,
        totalSteps: session.steps.length,
        xp: gamification.sessionXp,
        score: navigation.score,
        totalQuestions: navigation.totalQuestions,
        hearts: 0,
        streak: navigation.streak,
        reflexionText,
        antworten: navigation.sessionAntworten,
        updatedAt: new Date().toISOString(),
      });
    }
  }, [navigation.currentStep, leId, session.activeSession, session.steps.length, navigation.score, navigation.totalQuestions, navigation.streak, reflexionText, saveSessionFortschritt, profilLoaded, gamification.sessionXp]);

  // Bug #52 + #59: Bei Session-Ende finalen Fortschritt speichern + Session loggen
  useEffect(() => {
    if (!navigation.isComplete || !profilLoaded || session.steps.length === 0) return;

    // Finaler saveSessionFortschritt mit endgültigem Score
    saveSessionFortschritt({
      leId,
      session: session.activeSession,
      currentStep: session.steps.length - 1,
      totalSteps: session.steps.length,
      xp: gamification.sessionXp,
      score: navigation.score,
      totalQuestions: navigation.totalQuestions,
      hearts: 0,
      streak: navigation.streak,
      reflexionText,
      antworten: navigation.sessionAntworten,
      updatedAt: new Date().toISOString(),
    });

    // Session-Log für Lernzeit-Nachweis
    const endzeit = new Date().toISOString();
    const startMs = new Date(sessionStartTimeRef.current).getTime();
    const endMs = new Date(endzeit).getTime();
    const aktivMinuten = Math.round((endMs - startMs) / 60000);
    const scoreProzent = navigation.totalQuestions > 0
      ? Math.round((navigation.score / navigation.totalQuestions) * 100)
      : 0;

    logSession({
      leId,
      ceId: metadata?.ceId ?? leId.replace(/le-(\d+)/, "ce-$1").slice(0, 5),
      session: session.activeSession,
      startzeit: sessionStartTimeRef.current,
      endzeit,
      aktivMinuten,
      stepsBearbeitet: navigation.currentStep + 1,
      stepsGesamt: session.steps.length,
      score: scoreProzent,
    });

    // Tagesaktivität loggen
    logAktivitaet(aktivMinuten, gamification.sessionXp, 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation.isComplete]);

  // Karteikarten automatisch aus Schwächen erstellen
  useEffect(() => {
    if (!profil?.schwaechen?.length) return;
    const neueste = profil.schwaechen[profil.schwaechen.length - 1];
    if (neueste && neueste.fragetext && neueste.richtigeAntwort) {
      addKarteikarte({
        vorderseite: neueste.fragetext,
        rueckseite: `${neueste.richtigeAntwort}${neueste.begriff ? ` (${neueste.begriff})` : ""}`,
        leId: neueste.leId,
      });
    }
  }, [profil?.schwaechen?.length, addKarteikarte]);

  // Pre-generierte Karteikarten beim LE-Start importieren
  const karteikartenImportiert = useRef(false);
  useEffect(() => {
    if (karteikartenImportiert.current || !leId || !profilLoaded) return;
    karteikartenImportiert.current = true;
    loadKarteikarten(leId).then((vorlagen) => {
      if (vorlagen && vorlagen.length > 0) {
        const niveau = (profil?.b1ToggleCount ?? 0) > 0 ? "b1" : "c1";
        importVorlagen(vorlagen, leId, niveau);
      }
    });
  }, [leId, profilLoaded, profil?.b1ToggleCount, importVorlagen]);

  // Streak-Tag bei Aktivität zählen
  useEffect(() => {
    if (profilLoaded && session.steps.length > 0) {
      updateStreakTag();
    }
  }, [profilLoaded, session.steps.length, updateStreakTag]);

  // Scroll to top bei Step-Wechsel (nur bei echtem Step-Wechsel, nicht bei Re-Renders)
  const prevStepRef = useRef<number>(-1);
  useEffect(() => {
    if (prevStepRef.current !== navigation.currentStep) {
      prevStepRef.current = navigation.currentStep;
      navigation.containerRef.current?.scrollTo({ top: 0, behavior: "instant" });
      navigation.stepStartTime.current = Date.now();
    }
  }, [navigation.currentStep]);

  // Motivations-Text zwischen Steps einblenden
  useEffect(() => {
    const motiv = getMotivationsText(navigation.currentStep);
    if (motiv) {
      setMotivationText(motiv.text);
      const timer = setTimeout(() => setMotivationText(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [navigation.currentStep]);

  const SESSION_LABELS: Record<number, string> = {
    1: "Einstieg",
    2: "Vertiefung",
    3: "Transfer",
    4: "Anwendung",
    5: "Theorien",
    6: "Evidenz",
    7: "Abschluss",
    8: "Prüfung",
  };

  // Pfad-Modell: Dynamische Labels aus Manifest (falls vorhanden)
  const manifest = getLektionManifest(leId);
  const hasPfadLabels = !!manifest?.sessionLabels;
  const [showPfadPicker, setShowPfadPicker] = useState(false);

  const getSessionTitle = (s: number): string => {
    const label = manifest?.sessionLabels?.[`s${s}`];
    return label?.titleShort ?? SESSION_LABELS[s] ?? `Session ${s}`;
  };

  const { step, progress } = navigation;
  const { metadata, glossar, steps, activeSession, availableSessions } = session;

  // Loading State
  if (session.loading) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#C4877F] border-t-transparent" />
          <p className="text-sm text-[var(--lern-text-secondary)]">Lektion wird geladen...</p>
        </div>
      </div>
    );
  }

  // Weitermachen-Dialog
  if (session.showWeitermachen && session.savedStep !== null && metadata) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-md rounded-3xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-8 text-center space-y-5"
        >
          <div className="text-4xl">👋</div>
          <h1 className="text-xl font-bold text-[var(--lern-text-primary)]">
            Willkommen zurück!
          </h1>
          <p className="text-sm text-[var(--lern-text-secondary)]">
            Du warst bei:<br />
            <strong className="text-[var(--lern-text-primary)]">
              {metadata.title} · {hasPfadLabels ? getSessionTitle(activeSession) : `Session ${activeSession}`} · Step {session.savedStep + 1}/{steps.length}
            </strong>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => {
                session.setShowWeitermachen(false);
              }}
              className="flex-1 rounded-2xl bg-[var(--lern-card-bg)] px-5 py-3.5 text-sm font-semibold text-[var(--lern-text-primary)] transition-all active:scale-[0.98]"
            >
              Von vorn
            </button>
            <button
              onClick={() => {
                navigation.setCurrentStep(session.savedStep!);
                session.setShowWeitermachen(false);
                setShowSessionIntro(false);
              }}
              className="flex-1 rounded-2xl bg-[#C4877F] px-5 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98]"
            >
              Weitermachen
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // 404 State
  if (session.notFound || !metadata || !step) {
    const manifest = getLektionManifest(leId);
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="mx-auto max-w-md text-center space-y-4 px-4">
          <HandDrawnIcon name="books" size={48} color="var(--lern-text-secondary)" />
          <h1 className="text-2xl font-bold text-[var(--lern-text-primary)]">
            {manifest ? manifest.title : "Lektion nicht gefunden"}
          </h1>
          <p className="text-[var(--lern-text-secondary)]">
            {manifest
              ? "Diese Lektion wird gerade erstellt. Der Content-Loop laeuft noch."
              : `Die Lektion "${leId}" existiert nicht.`}
          </p>
          <a
            href={`/${locale}/lernen`}
            className="inline-block rounded-2xl bg-[#C4877F] px-6 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
          >
            Zur Uebersicht
          </a>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (navigation.isComplete) {
    const percentage =
      navigation.totalQuestions > 0 ? Math.round((navigation.score / navigation.totalQuestions) * 100) : 100;
    return (
      <div
        ref={navigation.containerRef}
        className="min-h-screen bg-[var(--lern-bg)]"
      >
        <div className="mx-auto max-w-2xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-8 text-center space-y-6"
          >
            <div>
              <HandDrawnIcon name={percentage >= 80 ? "celebration" : percentage >= 60 ? "clap" : "muscle"} size={56} color={percentage >= 80 ? "#6B8F71" : percentage >= 60 ? "#D4956A" : "#C4877F"} />
            </div>
            <h1 className="text-3xl font-bold text-[var(--lern-text-primary)]">
              Lerneinheit abgeschlossen!
            </h1>
            <p className="text-lg text-[var(--lern-text-secondary)]">{metadata.title}</p>

            <SessionSummary
              sessionXp={gamification.sessionXp}
              score={navigation.score}
              totalQuestions={navigation.totalQuestions}
              streak={navigation.maxStreak}
              stepsCompleted={steps.length}
              streakTage={profil?.streakTage ?? 0}
              sessionSteps={steps}
              schwaechen={
                profil?.schwaechen
                  ?.filter(s => s.leId === leId)
                  ?.map(s => ({ begriff: s.begriff })) ?? []
              }
              nextSessionTitle={
                availableSessions.includes((activeSession + 1) as typeof availableSessions[number])
                  ? `${hasPfadLabels ? "Pfad" : "Session"} ${activeSession + 1}: ${getSessionTitle(activeSession + 1)}`
                  : null
              }
              sessionAntworten={navigation.sessionAntworten}
            />

            {selfRating !== null && (
              <div className="rounded-2xl bg-[#FAF5EC] border border-[#BFA48E]/30 p-4">
                <p className="text-sm text-[var(--lern-text-secondary)]">
                  Deine Selbsteinschaetzung am Anfang:{" "}
                  <strong>{selfRating}/5</strong>
                </p>
                <p className="text-sm text-[var(--lern-text-secondary)]">
                  Hat sich dein Wissen verbessert?
                </p>
              </div>
            )}

            {adaptive.pingCount > 0 && (
              <div className="rounded-2xl bg-[#D4956A]/5 border border-[#D4956A]/20 px-4 py-3 text-left">
                <p className="text-sm text-[#D4956A] font-medium">
                  {adaptive.pingCount} Lernziel{adaptive.pingCount > 1 ? "e" : ""} zur Auffrischung fällig
                </p>
                <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">
                  Wird in deine nächste Session eingebaut
                </p>
              </div>
            )}

            {completionEmpfehlungen.length > 0 && (
              <div className="space-y-2 text-left">
                <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wide">
                  Empfohlen als Nächstes
                </p>
                {completionEmpfehlungen.slice(0, 2).map((emp) => (
                  <a
                    key={`${emp.leId}-${emp.session}`}
                    href={emp.leId ? `/${locale}/lernen/${emp.leId}` : `/${locale}/dashboard`}
                    className="flex items-center gap-3 rounded-xl bg-[var(--lern-card-bg)] p-3 transition-all active:scale-[0.98]"
                  >
                    <span className="shrink-0">
                      <HandDrawnIcon name={emp.typ === "weiter" ? "arrow-right" : emp.typ === "neue-session" ? "book" : emp.typ === "neue-le" ? "new" : emp.typ === "wiederholung" ? "refresh" : "lightning"} size={20} color="var(--lern-text-primary)" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[var(--lern-text-primary)] truncate">{emp.grund}</p>
                      <p className="text-xs text-[var(--lern-text-tertiary)]">~{emp.geschaetzteMinuten} Min</p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  navigation.setCurrentStep(0);
                  navigation.setScore(0);
                  navigation.setTotalQuestions(0);
                  setSelfRating(null);
                  navigation.setIsComplete(false);
                }}
                className="flex-1 rounded-2xl bg-[var(--lern-card-bg)] px-6 py-4 text-base font-semibold text-[var(--lern-text-primary)] transition-all active:scale-[0.98]"
              >
                Nochmal
              </button>
              {availableSessions.includes((activeSession + 1) as SessionNumber) ? (
                <button
                  onClick={() => switchSession((activeSession + 1) as SessionNumber)}
                  className="flex-1 rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
                >
                  {hasPfadLabels ? "Pfad" : "Session"} {activeSession + 1}: {getSessionTitle(activeSession + 1)}
                </button>
              ) : (
                <a
                  href={`/${locale}/dashboard`}
                  className="flex-1 rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white text-center transition-all active:scale-[0.98]"
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
      ref={navigation.containerRef}
      className="min-h-screen bg-[var(--lern-bg)] overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[var(--lern-topbar-bg)] backdrop-blur-xl border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-2xl px-4 py-3">
          {/* Breadcrumb: CE > LE > Session */}
          <div className="flex items-center gap-1 mb-2 text-xs">
            <button
              onClick={() => setShowLeDrawer(true)}
              className="font-medium text-[#C4877F] active:opacity-60 truncate max-w-[80px]"
            >
              {metadata?.ceId?.replace("ce-", "CE ").toUpperCase() ?? "CE"}
            </button>
            <span className="text-[var(--lern-text-tertiary)]">›</span>
            <button
              onClick={() => setShowLeDrawer(true)}
              className="font-medium text-[#C4877F] active:opacity-60 truncate max-w-[140px]"
            >
              {metadata?.titleShort ?? leId}
            </button>
            <span className="text-[var(--lern-text-tertiary)]">›</span>
            {hasPfadLabels ? (
              <button
                onClick={() => setShowPfadPicker(true)}
                className="flex items-center gap-1 rounded-full bg-[#C4877F]/10 px-2.5 py-0.5 text-xs font-semibold text-[#C4877F] active:opacity-60 transition-all"
              >
                {getSessionTitle(activeSession)} ▾
              </button>
            ) : availableSessions.length > 1 ? (
              <div className="flex gap-1">
                {availableSessions.map((s) => (
                  <button
                    key={s}
                    onClick={() => switchSession(s)}
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold transition-all ${
                      activeSession === s
                        ? "bg-[#C4877F] text-white"
                        : "text-[var(--lern-text-tertiary)] active:opacity-60"
                    }`}
                  >
                    S{s}
                  </button>
                ))}
              </div>
            ) : (
              <span className="text-[var(--lern-text-primary)] font-semibold">S{activeSession}</span>
            )}
            <div className="flex-1" />
            {/* Track-Badge (nur wenn Vertiefungs-Steps existieren UND Schüler Checkpoint A hatte oder bereits umgeschaltet) */}
            {session.allStepsRef.current.some((s) => s.track === "vertiefung") &&
              (navigation.lastCheckpointScore === "A" || activeTrack !== "all") && (
              <button
                onClick={() => toggleTrack(activeTrack === "all" ? "basis" : "all")}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full mr-2 transition-colors ${
                  activeTrack === "all"
                    ? "bg-[#9B7EA6]/10 text-[#9B7EA6]"
                    : "bg-[var(--lern-card-bg)] text-[var(--lern-text-tertiary)]"
                }`}
              >
                {activeTrack === "all" ? "Alle Steps" : "Basis"}
              </button>
            )}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--lern-card-bg)] active:scale-95 transition-transform shrink-0"
              aria-label={isDark ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
            >
              {isDark ? <Sun size={14} className="text-[var(--lern-text-secondary)]" /> : <Moon size={14} className="text-[var(--lern-text-secondary)]" />}
            </button>
            <button
              onClick={() => setShowGlossar(!showGlossar)}
              className="text-xs font-medium text-[#C4877F] active:opacity-60 shrink-0"
            >
              Glossar
            </button>
          </div>

          <div className="flex items-center justify-between mb-1 relative">
            <div className="flex items-center gap-2">
              {navigation.currentStep > 0 && (
                <button
                  onClick={navigation.goPrev}
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--lern-card-bg)] text-[var(--lern-text-secondary)] active:scale-95 transition-transform"
                  aria-label="Zurück"
                >
                  ‹
                </button>
              )}
              <StreakBadge streak={navigation.streak} />
              {adaptive.sprachLevel === "b1" && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#6B8F71]/10 text-[#6B8F71]">
                  Einfache Sprache
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <SessionXpCounter sessionXp={gamification.sessionXp} />
              <button
                onClick={() => setShowStepNav(true)}
                className="text-[10px] text-[#C4877F] font-medium active:opacity-60"
              >
                {navigation.currentStep + 1} / {steps.length}
              </button>
            </div>
            <XpPop
              stepId={gamification.lastAnsweredStepId}
              stepType={(step?.stepType as StepType) ?? "text"}
              bloomLevel={step?.bloomLevel ?? 1}
              show={gamification.showXpPop}
            />
          </div>

          {/* Progress bar */}
          <div className="h-1.5 rounded-full bg-[var(--lern-card-bg)]">
            <motion.div
              className="h-full rounded-full bg-[#C4877F]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
            />
          </div>
        </div>
      </div>

      {/* Tab-Navigation (5-Tabs: Wissen, Üben, Fall, Praxis, Prüfung) */}
      <LeTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        hasArtikel={!!artikelKapitel && artikelKapitel.length > 0}
        hasFallverlaeufe={!!fallverlaeufe && fallverlaeufe.length > 0}
        hasPraxis={!!praxisUebungen && praxisUebungen.length > 0}
      />

      {/* === TAB CONTENT === */}

      {/* Wissen-Tab: AMBOSS-Stil Artikel */}
      {activeTab === "wissen" && artikelKapitel && (
        <div className="mx-auto max-w-2xl">
          <ArtikelRenderer
            kapitel={artikelKapitel}
            sprachLevel={adaptive.sprachLevel === "b1" ? "B1" : "C1"}
            glossar={glossar}
            onKapitelGelesen={handleKapitelGelesen}
            geleseneKapitel={geleseneKapitel}
          />
        </div>
      )}

      {/* Fall-Tab: Patienten-Zeitleiste */}
      {activeTab === "fall" && fallverlaeufe && (
        <div className="mx-auto max-w-2xl">
          <FallZeitleiste
            fallverlaeufe={fallverlaeufe}
            sprachLevel={adaptive.sprachLevel}
            onKapitelNavigieren={handleKapitelNavigieren}
          />
        </div>
      )}
      {activeTab === "fall" && !fallverlaeufe && (
        <div className="mx-auto max-w-2xl px-4 py-12 text-center">
          <p className="text-4xl mb-4">👤</p>
          <h2 className="text-lg font-bold text-[var(--lern-text-primary)] mb-2">Fallverläufe</h2>
          <p className="text-sm text-[var(--lern-text-secondary)]">Patientenfälle werden hier bald verfügbar sein.</p>
        </div>
      )}

      {/* Praxis-Tab */}
      {activeTab === "praxis" && praxisUebungen && (
        <div className="mx-auto max-w-2xl">
          <PraxisUebungen
            uebungen={praxisUebungen}
            sprachLevel={adaptive.sprachLevel === "b1" ? "b1" : "c1"}
          />
        </div>
      )}
      {activeTab === "praxis" && !praxisUebungen && (
        <div className="mx-auto max-w-2xl px-4 py-12 text-center">
          <p className="text-4xl mb-4">🏥</p>
          <h2 className="text-lg font-bold text-[var(--lern-text-primary)] mb-2">Praxis-Simulationen</h2>
          <p className="text-sm text-[var(--lern-text-secondary)]">Dialog-Simulationen und Pflegeplanung kommen bald.</p>
        </div>
      )}

      {/* Prüfung-Tab */}
      {activeTab === "pruefung" && pruefungsfall && (
        <div className="mx-auto max-w-2xl">
          <ExamCaseStart
            examCase={pruefungsfall}
            leTitle={getLektionManifest(leId)?.title ?? leId}
            onExit={() => setActiveTab("ueben")}
          />
        </div>
      )}
      {activeTab === "pruefung" && !pruefungsfall && (
        <div className="mx-auto max-w-2xl px-4 py-12 text-center">
          <p className="text-4xl mb-4">📝</p>
          <h2 className="text-lg font-bold text-[var(--lern-text-primary)] mb-2">Pruefungsvorbereitung</h2>
          <p className="text-sm text-[var(--lern-text-secondary)]">Pruefungssimulation und Schwaechen-Analyse kommen bald.</p>
        </div>
      )}

      {/* Üben-Tab: Bestehende Step-Engine (nur anzeigen wenn Üben aktiv) */}
      {activeTab === "ueben" && (
      <>
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
              className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-3xl bg-[var(--lern-overlay-bg)] p-6"
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[var(--lern-divider)]" />
              <h3 className="text-lg font-bold mb-4 text-[var(--lern-text-primary)]">
                Glossar — {metadata.titleShort}
              </h3>
              {glossar.length === 0 ? (
                <p className="text-sm text-[var(--lern-text-secondary)]">Noch keine Glossar-Eintraege.</p>
              ) : (
                <div className="space-y-3">
                  {glossar.map((g) => (
                    <div
                      key={g.begriff}
                      className="rounded-xl bg-[var(--lern-card-bg)] p-3"
                    >
                      <p className="font-semibold text-sm text-[var(--lern-text-primary)]">
                        {g.begriff}
                      </p>
                      <p className="text-sm text-[var(--lern-text-secondary)]">{g.erklaerung}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LE-Drawer: Curriculum-Navigation */}
      <AnimatePresence>
        {showLeDrawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowLeDrawer(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-3xl bg-[var(--lern-overlay-bg)] p-6"
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[var(--lern-divider)]" />
              <h3 className="text-lg font-bold mb-1 text-[var(--lern-text-primary)]">
                {metadata?.ceId?.replace("ce-", "CE ").toUpperCase() ?? "CE"} — {metadata?.title ?? "Lerneinheiten"}
              </h3>
              <p className="text-xs text-[var(--lern-text-tertiary)] mb-4">
                {allLektionen.filter((l) => l.status === "geprueft" || l.status === "steps").length}/{allLektionen.length} Lerneinheiten verfügbar
              </p>

              <div className="space-y-1">
                {allLektionen.map((le) => {
                  const isCurrent = le.leId === leId;
                  const hasContent = le.status === "geprueft" || le.status === "steps";
                  return (
                    <a
                      key={le.leId}
                      href={hasContent ? `/${locale}/lernen/${le.leId}` : undefined}
                      onClick={(e) => {
                        if (!hasContent) { e.preventDefault(); return; }
                        setShowLeDrawer(false);
                      }}
                      className={`flex items-center gap-3 rounded-xl p-3 transition-all ${
                        isCurrent
                          ? "bg-[#C4877F]/10 border border-[#C4877F]/20"
                          : hasContent
                            ? "bg-[var(--lern-card-bg)] active:scale-[0.98]"
                            : "bg-[var(--lern-card-bg)] opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        isCurrent
                          ? "bg-[#C4877F] text-white"
                          : hasContent
                            ? "bg-[#6B8F71] text-white"
                            : "bg-[var(--lern-divider)] text-white"
                      }`}>
                        {isCurrent ? "●" : hasContent ? "✓" : "·"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          isCurrent ? "text-[#C4877F]" : "text-[var(--lern-text-primary)]"
                        }`}>
                          {le.titleShort}
                        </p>
                        <p className="text-[10px] text-[var(--lern-text-tertiary)]">
                          {le.sessions.length} Sessions · {le.zeitrichtwert} UE
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pfad-Picker Overlay */}
      {showPfadPicker && hasPfadLabels && manifest?.sessionLabels && (
        <PfadPicker
          activeSession={activeSession}
          availableSessions={availableSessions}
          sessionLabels={manifest.sessionLabels}
          onSelect={(s) => switchSession(s as SessionNumber)}
          onClose={() => setShowPfadPicker(false)}
        />
      )}

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
              className="absolute bottom-0 left-0 right-0 max-h-[75vh] overflow-y-auto rounded-t-3xl bg-[var(--lern-overlay-bg)] p-6"
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[var(--lern-divider)]" />
              <h3 className="text-lg font-bold mb-1 text-[var(--lern-text-primary)]">
                Step-Navigator
              </h3>
              <p className="text-xs text-[var(--lern-text-secondary)] mb-4">
                {hasPfadLabels ? `Pfad ${activeSession}: ${getSessionTitle(activeSession)}` : `Session ${activeSession}`} — {steps.length} Steps
              </p>
              <div className="space-y-1.5">
                {steps.map((s, i) => {
                  const sContent = adaptive.sprachLevel === "b1" && s.contentB1 ? s.contentB1 : s.contentC1;
                  const isCurrent = i === navigation.currentStep;
                  const isAnswered = navigation.answerHistory[i]?.answered;
                  const wasCorrect = navigation.answerHistory[i]?.correct;
                  return (
                    <button
                      key={s.stepId}
                      onClick={() => {
                        navigation.setCurrentStep(i);
                        navigation.setIsReviewMode(i < navigation.currentStep);
                        setShowStepNav(false);
                                                        }}
                      className={`w-full text-left rounded-xl px-3 py-2.5 flex items-center gap-3 transition-all active:scale-[0.98] ${
                        isCurrent
                          ? "bg-[#C4877F]/10 border border-[#C4877F]/30"
                          : "bg-[#f9f9fb] hover:bg-[#f0f0f5]"
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                        isCurrent
                          ? "bg-[#C4877F] text-white"
                          : isAnswered
                            ? wasCorrect
                              ? "bg-[#6B8F71]/20 text-[#6B8F71]"
                              : wasCorrect === false
                                ? "bg-[#C96B5C]/20 text-[#C96B5C]"
                                : "bg-[#C4877F]/20 text-[#C4877F]"
                            : "bg-[var(--lern-divider)] text-[var(--lern-text-secondary)]"
                      }`}>
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          isCurrent ? "text-[#C4877F]" : "text-[var(--lern-text-primary)]"
                        }`}>
                          {sContent.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-[var(--lern-text-secondary)] uppercase tracking-wider font-semibold">
                            {s.stepType}
                          </span>
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

      {/* Vertiefungs-Prompt (adaptiv nach 3+ richtigen Antworten) */}
      <AnimatePresence>
        {adaptive.showVertiefungPrompt && activeTrack === "basis" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto max-w-2xl px-4 pt-4"
          >
            <div className="rounded-2xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20 p-4 flex items-center gap-3">
              <HandDrawnIcon name="lightning" size={24} color="#9B7EA6" className="shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
                  Läuft bei dir! Mehr Herausforderung?
                </p>
                <p className="text-xs text-[var(--lern-text-secondary)] mt-0.5">
                  Es gibt Bonus-Aufgaben für Fortgeschrittene.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => adaptive.setShowVertiefungPrompt(false)}
                  className="text-xs text-[var(--lern-text-secondary)] px-3 py-1.5 rounded-full active:opacity-60"
                >
                  Nein
                </button>
                <button
                  onClick={() => toggleTrack("all")}
                  className="text-xs font-semibold text-white bg-[#9B7EA6] px-3 py-1.5 rounded-full active:scale-95"
                >
                  Ja!
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Motivations-Overlay */}
      <AnimatePresence>
        {motivationText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="rounded-3xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] px-8 py-6 shadow-lg text-center max-w-xs">
              <p className="text-lg font-bold text-[var(--lern-text-primary)]">
                {motivationText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Session-Intro: Themenübersicht bevor es losgeht */}
      {showSessionIntro && metadata && session.steps.length > 0 && (
        <div className="mx-auto max-w-2xl px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-6 shadow-sm"
          >
            {/* Session-Nummer */}
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lern-accent)] text-sm font-bold text-white">
                {session.activeSession}
              </span>
              <span className="text-sm font-medium text-[var(--lern-text-secondary)]">
                {hasPfadLabels ? `Pfad ${session.activeSession} von ${session.availableSessions.length}` : `Session ${session.activeSession} von ${session.availableSessions.length}`}
              </span>
            </div>

            {/* Pfad-Titel (wenn Pfad-Modell) */}
            {hasPfadLabels && manifest?.sessionLabels?.[`s${session.activeSession}`] && (
              <p className="mb-1 text-sm font-semibold text-[var(--lern-accent)]">
                {manifest.sessionLabels[`s${session.activeSession}`].title}
              </p>
            )}

            {/* LE-Titel */}
            <h2 className="mb-2 text-xl font-bold text-[var(--lern-text-primary)]">
              {metadata.titleShort || metadata.title}
            </h2>

            {/* Themen dieser Session */}
            {(() => {
              // Einzigartige Themen aus den Step-Titeln extrahieren
              const themen = Array.from(new Set(
                session.steps
                  .filter(s => s.themenblockPhase === "ERKLÄRUNG" || s.themenblockPhase === "SZENE")
                  .map(s => (adaptive.sprachLevel === "b1" && s.contentB1?.title) ? s.contentB1.title : s.contentC1.title)
              )).slice(0, 4);
              if (themen.length === 0) return null;
              return (
                <div className="mb-4">
                  <p className="mb-2 text-sm font-semibold text-[var(--lern-text-secondary)]">Das lernst du heute:</p>
                  <ul className="space-y-1.5">
                    {themen.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--lern-text-primary)]">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--lern-accent)]/10 text-xs font-bold text-[var(--lern-accent)]">{i + 1}</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* Leitfall */}
            {metadata.leitfall && (
              <div className="mb-5 rounded-xl bg-[var(--lern-bg)] p-4 border border-[var(--lern-border)]/60">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--lern-accent)]">Leitfall</p>
                <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
                  {metadata.leitfall.name}, {metadata.leitfall.alter} Jahre
                </p>
                <p className="text-sm text-[var(--lern-text-secondary)]">
                  {metadata.leitfall.diagnose}
                </p>
                {metadata.leitfall.setting && (
                  <p className="mt-1 text-xs text-[var(--lern-text-tertiary)]">
                    {metadata.leitfall.setting}
                  </p>
                )}
              </div>
            )}

            {/* Meta-Infos */}
            <div className="mb-5 flex flex-wrap gap-3 text-xs text-[var(--lern-text-secondary)]">
              <span className="rounded-full bg-[var(--lern-bg)] px-3 py-1 border border-[var(--lern-border)]/60">
                {session.steps.length} Steps
              </span>
              <span className="rounded-full bg-[var(--lern-bg)] px-3 py-1 border border-[var(--lern-border)]/60">
                ~{metadata.geschaetzteLernzeit?.[adaptive.sprachLevel] ?? 30} Min
              </span>
              <span className="rounded-full bg-[var(--lern-bg)] px-3 py-1 border border-[var(--lern-border)]/60">
                Bloom {metadata.bloomStufen?.join("-") ?? "1-3"}
              </span>
            </div>

            {/* Start-Button */}
            <button
              onClick={() => setShowSessionIntro(false)}
              className="w-full rounded-full bg-[var(--lern-accent)] py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--lern-accent)]/20 transition-all hover:bg-[#B07A72] hover:shadow-xl active:scale-[0.98]"
            >
              Los geht&apos;s
            </button>
          </motion.div>
        </div>
      )}

      {/* Step Content */}
      {!showSessionIntro && (
      <SprachLevelProvider level={adaptive.sprachLevel}>
        <div className="mx-auto max-w-2xl px-4 py-6">
        {/* Checkpoint-Score Feedback (#35) */}
        {navigation.lastCheckpointScore && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 rounded-2xl px-4 py-3 flex items-center gap-3 ${
              navigation.lastCheckpointScore === "A"
                ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                : navigation.lastCheckpointScore === "B"
                  ? "bg-[#D4956A]/10 border border-[#D4956A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <span className="text-lg font-bold">
              {navigation.lastCheckpointScore === "A" ? "🎯" : navigation.lastCheckpointScore === "B" ? "📊" : "💪"}
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
                Checkpoint: Stufe {navigation.lastCheckpointScore}
              </p>
              <p className="text-xs text-[var(--lern-text-secondary)]">
                {navigation.lastCheckpointScore === "A"
                  ? `Sehr gut! ${navigation.checkpointSkipCount > 0 ? `${navigation.checkpointSkipCount} Steps übersprungen.` : "Du beherrschst das Thema."}`
                  : navigation.lastCheckpointScore === "B"
                    ? "Guter Stand — weiter vertiefen."
                    : "Kein Problem — wir erklären es nochmal anders."}
              </p>
            </div>
          </motion.div>
        )}

        {/* KI-Scaffolding Overlay: Strategiewechsel bei falscher Antwort */}
        <ScaffoldingOverlay
          data={navigation.scaffoldingData}
          loading={navigation.scaffoldingLoading}
          onClose={() => {
            navigation.setScaffoldingData(null);
            navigation.setScaffoldingText(null);
          }}
        />

        {/* Review-Modus Banner */}
        {navigation.isReviewMode && navigation.answerHistory[navigation.currentStep] && (
          <div className={`mb-4 rounded-2xl px-4 py-3 flex items-center justify-between ${
            navigation.answerHistory[navigation.currentStep].correct === true
              ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
              : navigation.answerHistory[navigation.currentStep].correct === false
                ? "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
                : "bg-[#C4877F]/10 border border-[#C4877F]/30"
          }`}>
            <span className="text-sm font-medium text-[var(--lern-text-primary)]">
              {navigation.answerHistory[navigation.currentStep].correct === true
                ? "✓ Richtig beantwortet"
                : navigation.answerHistory[navigation.currentStep].correct === false
                  ? "✗ Falsch beantwortet"
                  : "✓ Abgeschlossen"}
            </span>
            <button
              onClick={() => navigation.advanceStep()}
              className="text-sm font-semibold text-[#C4877F] active:opacity-60"
            >
              Weiter ›
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {adaptive.showModusTransition && adaptive.currentModus ? (
            <motion.div
              key={`modus-${adaptive.currentModus}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModusTransition
                modus={adaptive.currentModus}
                onDone={() => adaptive.setShowModusTransition(false)}
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
              <PhaseLabel phase={step.themenblockPhase as ThemenblockPhase | undefined} />

              <LeitfallBanner
                fallbezug={
                  (adaptive.sprachLevel === "b1" && step.contentB1?.fallbezug)
                    ? step.contentB1.fallbezug
                    : step.contentC1.fallbezug
                }
                stepType={step.stepType}
              />

              <PraxisTipp phase={step.themenblockPhase as ThemenblockPhase | undefined} />

              {/* Step-Card: Visueller Rahmen um jeden Step */}
              <div className="rounded-2xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-5 shadow-sm">
                <StepRenderer
                  step={step}
                  sprachLevel={adaptive.sprachLevel}
                  glossar={glossar}
                  onNext={navigation.goNext}
                  onSelfRating={(r) => {
                    setSelfRating(r);
                    navigation.goNext();
                  }}
                  onReflection={(text) => {
                    setReflexionText(text);
                  }}
                  reflexionText={reflexionText}
                  score={navigation.score}
                  totalQuestions={navigation.totalQuestions}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </SprachLevelProvider>
      )}
      </>
      )}

      {/* Muttersprache-Auswahl — beim ersten Besuch */}
      <MutterspracheModal
        open={showMuttersprachModal}
        onClose={() => setShowMuttersprachModal(false)}
      />

      {/* Pfad-Picker (Bottom-Sheet für LEs mit Pfad-Modell) */}
      {showPfadPicker && hasPfadLabels && manifest?.sessionLabels && (
        <PfadPicker
          activeSession={activeSession}
          availableSessions={availableSessions}
          sessionLabels={manifest.sessionLabels}
          onSelect={(s) => switchSession(s as SessionNumber)}
          onClose={() => setShowPfadPicker(false)}
        />
      )}

      <Confetti active={gamification.showConfetti} />
      <FeedbackOverlay type={gamification.feedbackType} onDone={() => gamification.setFeedbackType(null)} />
      <CheckpointFeedback
        score={navigation.lastCheckpointScore}
        skippedCount={navigation.checkpointSkipCount}
        onDone={() => {}}
      />

      {metadata && (
        <KiChat
          leTitle={metadata.title}
          stepTitle={step.contentC1.title}
          glossar={glossar.map((g) => g.begriff)}
        />
      )}

      {metadata && (
        <LehrerChat
          lernKontext={{
            leId,
            ceId: metadata.ceId,
            stepId: step.stepId,
            thema: step.contentC1.title,
          }}
        />
      )}
    </div>
  );
}

// === Phasen-Label ===
const PHASE_LABELS: Record<string, { label: string; icon: string; color: string }> = {
  "BRÜCKE":              { label: "Vorwissen",            icon: "🔗", color: "#D4956A" },
  "SZENE":               { label: "Szene",                icon: "🎬", color: "#B07A72" },
  "ERKLÄRUNG":           { label: "Erklärung",            icon: "📖", color: "#C4877F" },
  "CHECKPOINT":          { label: "Checkpoint",           icon: "✅", color: "#6B8F71" },
  "ANDERS_ERKLÄRT":      { label: "Anders erklärt",       icon: "🔄", color: "#9B7EA6" },
  "STORYTELLING":        { label: "Geschichte",           icon: "📚", color: "#D4956A" },
  "PRAXIS_DIALOG":       { label: "Praxis-Dialog",        icon: "💬", color: "#6B8F71" },
  "PATIENTEN_PERSPEKTIVE": { label: "Patienten-Sicht",    icon: "🎭", color: "#B07A72" },
  "ANGEHÖRIGEN_BERATUNG": { label: "Beratung",            icon: "🤝", color: "#D4956A" },
  "PFLEGEPLANUNG":       { label: "Pflegeplanung",        icon: "📋", color: "#C4877F" },
  "ANWENDUNG":           { label: "Anwendung",            icon: "🔧", color: "#6B8F71" },
  "REFLEXION":           { label: "Reflexion",            icon: "🪞", color: "#9B7EA6" },
};

function PhaseLabel({ phase }: { phase?: ThemenblockPhase }) {
  if (!phase) return null;
  const config = PHASE_LABELS[phase];
  if (!config) return null;
  return (
    <div className="mb-3">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
        style={{
          backgroundColor: `${config.color}10`,
          color: config.color,
          border: `1px solid ${config.color}25`,
        }}
      >
        <span>{config.icon}</span>
        {config.label}
      </span>
    </div>
  );
}

// === Leitfall-Banner ===
function LeitfallBanner({ fallbezug, stepType }: { fallbezug?: string; stepType: string }) {
  if (!fallbezug || stepType === "text") return null;

  const nameMatch = fallbezug.match(/^([A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)?)/);
  const personName = nameMatch ? nameMatch[1] : null;

  return (
    <div
      className="mb-3 flex items-start gap-3 rounded-2xl px-4 py-3"
      style={{
        backgroundColor: "rgba(0, 113, 227, 0.05)",
        border: "1px solid rgba(0, 113, 227, 0.15)",
        color: "var(--lern-text-primary)",
      }}
    >
      <span className="mt-0.5 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#C4877F]/10 text-sm">
        👤
      </span>
      <div className="min-w-0">
        {personName && (
          <p className="text-xs font-semibold text-[#C4877F] mb-0.5">
            Leitfall: {personName}
          </p>
        )}
        <p className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed">
          {fallbezug}
        </p>
      </div>
    </div>
  );
}

// === Praxis-Tipp ===
function PraxisTipp({ phase }: { phase?: ThemenblockPhase }) {
  if (phase !== "PFLEGEPLANUNG" && phase !== "ANWENDUNG") return null;

  const tipText = phase === "PFLEGEPLANUNG"
    ? "Überlege dir bei jeder Maßnahme: Welches Problem adressiert sie? Welches Ziel soll erreicht werden?"
    : "Versuche, das Gelernte auf eine konkrete Situation aus deinem Praxiseinsatz zu übertragen.";

  return (
    <div
      className="mb-3 flex items-start gap-3 rounded-2xl px-4 py-3"
      style={{
        backgroundColor: "rgba(48, 209, 88, 0.05)",
        border: "1px solid rgba(48, 209, 88, 0.15)",
        color: "var(--lern-text-primary)",
      }}
    >
      <span className="mt-0.5 shrink-0 text-sm">💡</span>
      <div>
        <p className="text-xs font-semibold text-[#6B8F71] mb-0.5">Praxis-Tipp</p>
        <p className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed">{tipText}</p>
      </div>
    </div>
  );
}


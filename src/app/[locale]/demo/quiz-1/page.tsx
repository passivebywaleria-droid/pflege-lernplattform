"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctIndex: number;
  explanation?: string;
}

interface FloatingXP {
  id: number;
  x: number;
  y: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

// ─── Quiz Data ────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Was ist das Hauptziel der Pflegedokumentation?",
    answers: [
      "Rechtliche Absicherung",
      "Zeitvertreib",
      "Kostenreduzierung",
      "Personalplanung",
    ],
    correctIndex: 0,
    explanation:
      "Die Pflegedokumentation dient primär der rechtlichen Absicherung und Nachvollziehbarkeit der Pflegemaßnahmen.",
  },
  {
    id: 2,
    question: "Welches Modell beschreibt die Aktivitäten des täglichen Lebens?",
    answers: [
      "AEDL-Modell",
      "ABC-Modell",
      "XYZ-Modell",
      "RGB-Modell",
    ],
    correctIndex: 0,
    explanation:
      "Das AEDL-Modell (Aktivitäten und existenzielle Erfahrungen des Lebens) nach Monika Krohwinkel beschreibt die Aktivitäten des täglichen Lebens.",
  },
  {
    id: 3,
    question: "Was gehört NICHT zu den Vitalzeichen?",
    answers: [
      "Haarfarbe",
      "Blutdruck",
      "Puls",
      "Temperatur",
    ],
    correctIndex: 0,
    explanation:
      "Vitalzeichen umfassen Blutdruck, Puls, Temperatur und Atemfrequenz. Die Haarfarbe ist kein Vitalzeichen.",
  },
  {
    id: 4,
    question:
      "Wie oft sollte eine Dekubitusprophylaxe-Lagerung mindestens durchgeführt werden?",
    answers: [
      "Alle 2 Stunden",
      "Einmal täglich",
      "Einmal pro Woche",
      "Nur bei Bedarf",
    ],
    correctIndex: 0,
    explanation:
      "Zur Dekubitusprophylaxe wird eine Umlagerung mindestens alle 2 Stunden empfohlen.",
  },
  {
    id: 5,
    question: "Was bedeutet die Abkürzung 'BZ' in der Pflege?",
    answers: [
      "Blutzucker",
      "Behandlungsziel",
      "Bettenzahl",
      "Berufszeugnis",
    ],
    correctIndex: 0,
    explanation:
      "BZ steht in der Pflege für Blutzucker und bezeichnet den Glukosegehalt im Blut.",
  },
  {
    id: 6,
    question: "Welche Hygienemaßnahme hat die höchste Priorität?",
    answers: [
      "Händedesinfektion",
      "Mundschutz tragen",
      "Handschuhe anziehen",
      "Schutzkittel anlegen",
    ],
    correctIndex: 0,
    explanation:
      "Die Händedesinfektion hat die höchste Priorität bei der Infektionsprävention im Pflegealltag.",
  },
  {
    id: 7,
    question: "Was ist ein Symptom einer Dehydration?",
    answers: [
      "Stehende Hautfalten",
      "Übermäßiges Schwitzen",
      "Gewichtszunahme",
      "Rote Hautfarbe",
    ],
    correctIndex: 0,
    explanation:
      "Stehende Hautfalten (Hautturgordminderung) sind ein klassisches Zeichen einer Dehydration.",
  },
  {
    id: 8,
    question: "Welches Recht hat jeder Patient?",
    answers: [
      "Recht auf Selbstbestimmung",
      "Recht auf Einzelzimmer",
      "Recht auf täglichen Arztbesuch",
      "Recht auf Fernsehen",
    ],
    correctIndex: 0,
    explanation:
      "Das Recht auf Selbstbestimmung ist ein grundlegendes Patientenrecht, verankert im Patientenrechtegesetz.",
  },
  {
    id: 9,
    question: "Was beschreibt der Pflegeprozess?",
    answers: [
      "Systematische Problemlösung",
      "Medikamentenausgabe",
      "Dienstplanerstellung",
      "Gebäudereinigung",
    ],
    correctIndex: 0,
    explanation:
      "Der Pflegeprozess ist ein systematisches, zielorientiertes Verfahren zur Problemlösung in der Pflege.",
  },
  {
    id: 10,
    question: "Welche Aussage zur Sturzprophylaxe ist richtig?",
    answers: [
      "Gutes Schuhwerk reduziert Sturzrisiko",
      "Stürze sind unvermeidbar",
      "Bettgitter verhindern alle Stürze",
      "Nur junge Patienten stürzen",
    ],
    correctIndex: 0,
    explanation:
      "Rutschfestes, gut sitzendes Schuhwerk ist eine effektive Maßnahme zur Sturzprophylaxe.",
  },
];

const TOTAL_HEARTS = 5;
const XP_PER_CORRECT = 10;

// ─── Helper: generate confetti ────────────────────────────────────────────────

function generateConfetti(): ConfettiPiece[] {
  const colors = ["#58CC02", "#FFC800", "#1CB0F6", "#FF9600", "#FF4B4B", "#CE82FF"];
  return Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 0.8,
    duration: 1.5 + Math.random() * 1.5,
    size: 6 + Math.random() * 10,
  }));
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="w-7 h-7"
      initial={false}
      animate={filled ? { scale: 1 } : { scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={filled ? "#FF4B4B" : "#E5E7EB"}
        stroke={filled ? "#CC3333" : "#D1D5DB"}
        strokeWidth="0.5"
      />
    </motion.svg>
  );
}

function StreakBadge({ count }: { count: number }) {
  return (
    <motion.div
      className="flex items-center gap-1 bg-orange-50 border border-orange-200 rounded-full px-3 py-1"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      key={count}
    >
      <span className="text-lg">🔥</span>
      <span className="font-bold text-[#FF9600] text-sm">{count}</span>
    </motion.div>
  );
}

function XPBadge({ xp }: { xp: number }) {
  return (
    <motion.div
      className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1"
      key={xp}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span className="text-lg">⚡</span>
      <span className="font-bold text-[#FFC800] text-sm">{xp} XP</span>
    </motion.div>
  );
}

function FloatingXPLabel({ item }: { item: FloatingXP }) {
  return (
    <motion.div
      key={item.id}
      className="fixed pointer-events-none z-50 font-black text-[#58CC02] text-2xl select-none drop-shadow-md"
      style={{ left: item.x, top: item.y }}
      initial={{ opacity: 1, y: 0, scale: 0.5 }}
      animate={{ opacity: 0, y: -80, scale: 1.2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      +10 XP
    </motion.div>
  );
}

function ConfettiOverlay({ pieces }: { pieces: ConfettiPiece[] }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.x}%`,
            top: "-20px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 40 : 900,
            rotate: 720 * (Math.random() > 0.5 ? 1 : -1),
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────

function ResultsScreen({
  xp,
  correctCount,
  totalQuestions,
  heartsLeft,
  onRestart,
  confettiPieces,
}: {
  xp: number;
  correctCount: number;
  totalQuestions: number;
  heartsLeft: number;
  onRestart: () => void;
  confettiPieces: ConfettiPiece[];
}) {
  const { locale } = useParams();
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  const isPerfect = correctCount === totalQuestions;
  const isGood = accuracy >= 70;

  return (
    <>
      <ConfettiOverlay pieces={confettiPieces} />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <motion.div
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        >
          {/* Trophy / Emoji */}
          <motion.div
            className="text-7xl mb-4"
            animate={{ rotate: [0, -10, 10, -8, 8, 0] }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {isPerfect ? "🏆" : isGood ? "🎉" : "💪"}
          </motion.div>

          <h1 className="text-3xl font-black text-zinc-800 mb-2">
            {isPerfect
              ? "Perfekt! Ausgezeichnet!"
              : isGood
              ? "Lektion abgeschlossen!"
              : "Weiter üben!"}
          </h1>
          <p className="text-zinc-500 text-base mb-8">
            {isPerfect
              ? "Du hast alle Fragen richtig beantwortet!"
              : `Du hast ${correctCount} von ${totalQuestions} Fragen richtig.`}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <motion.div
              className="bg-yellow-50 border-2 border-yellow-200 border-b-4 border-b-yellow-300 rounded-2xl p-4 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-2xl mb-1">⚡</span>
              <span className="font-black text-2xl text-[#FFC800]">{xp}</span>
              <span className="text-xs text-zinc-500 font-semibold">XP verdient</span>
            </motion.div>

            <motion.div
              className="bg-green-50 border-2 border-green-200 border-b-4 border-b-green-300 rounded-2xl p-4 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-2xl mb-1">🎯</span>
              <span className="font-black text-2xl text-[#58CC02]">{accuracy}%</span>
              <span className="text-xs text-zinc-500 font-semibold">Genauigkeit</span>
            </motion.div>

            <motion.div
              className="bg-red-50 border-2 border-red-200 border-b-4 border-b-red-300 rounded-2xl p-4 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-2xl mb-1">❤️</span>
              <span className="font-black text-2xl text-[#FF4B4B]">{heartsLeft}</span>
              <span className="text-xs text-zinc-500 font-semibold">Herzen übrig</span>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <motion.button
              onClick={onRestart}
              className="w-full bg-gradient-to-b from-[#58CC02] to-[#45A800] text-white font-black text-lg rounded-2xl py-4 border-b-4 border-[#3D8C00] active:border-b-0 active:translate-y-1 transition-all duration-100 shadow-lg"
              whileTap={{ scale: 0.97 }}
            >
              Nochmal spielen
            </motion.button>

            <Link
              href={`/${locale}/demo`}
              className="w-full bg-white text-[#1CB0F6] font-black text-lg rounded-2xl py-4 border-2 border-[#1CB0F6] border-b-4 border-b-[#0090CC] text-center block active:border-b-0 active:translate-y-1 transition-all duration-100"
            >
              Zur Ubersicht
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// ─── Main Quiz Page ───────────────────────────────────────────────────────────

export default function QuizPage() {
  const { locale } = useParams();
  // ── State ──────────────────────────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [hearts, setHearts] = useState(TOTAL_HEARTS);
  const [xp, setXP] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [floatingXPs, setFloatingXPs] = useState<FloatingXP[]>([]);
  const [floatingXPCounter, setFloatingXPCounter] = useState(0);
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const [shakingAnswer, setShakingAnswer] = useState<number | null>(null);
  const [pulsing, setPulsing] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = (currentIndex / QUESTIONS.length) * 100;
  const isCorrect = selectedAnswer === currentQuestion.correctIndex;

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleSelectAnswer = useCallback(
    (index: number) => {
      if (isChecked) return;
      setSelectedAnswer(index);
    },
    [isChecked]
  );

  const handleCheck = useCallback(() => {
    if (selectedAnswer === null || isChecked) return;
    setIsChecked(true);

    if (selectedAnswer === currentQuestion.correctIndex) {
      setXP((prev) => prev + XP_PER_CORRECT);
      setStreak((prev) => prev + 1);
      setCorrectCount((prev) => prev + 1);
      setPulsing(true);
      setTimeout(() => setPulsing(false), 600);

      // Spawn floating XP label near center-ish
      const newXP: FloatingXP = {
        id: floatingXPCounter,
        x: typeof window !== "undefined" ? window.innerWidth / 2 - 40 : 200,
        y: typeof window !== "undefined" ? window.innerHeight / 2 : 300,
      };
      setFloatingXPCounter((c) => c + 1);
      setFloatingXPs((prev) => [...prev, newXP]);
      setTimeout(() => {
        setFloatingXPs((prev) => prev.filter((f) => f.id !== newXP.id));
      }, 1400);
    } else {
      setHearts((prev) => Math.max(0, prev - 1));
      setStreak(0);
      // Shake the wrong selected answer
      setShakingAnswer(selectedAnswer);
      setTimeout(() => setShakingAnswer(null), 600);
    }
  }, [selectedAnswer, isChecked, currentQuestion.correctIndex, floatingXPCounter]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= QUESTIONS.length) {
      setConfettiPieces(generateConfetti());
      setIsComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsChecked(false);
    }
  }, [currentIndex]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsChecked(false);
    setHearts(TOTAL_HEARTS);
    setXP(0);
    setStreak(0);
    setCorrectCount(0);
    setIsComplete(false);
    setConfettiPieces([]);
    setFloatingXPs([]);
  }, []);

  // ── Keyboard shortcut (1-4 for answers, Enter to check/next) ──────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isComplete) return;
      if (["1", "2", "3", "4"].includes(e.key) && !isChecked) {
        handleSelectAnswer(parseInt(e.key) - 1);
      }
      if (e.key === "Enter") {
        if (!isChecked) {
          handleCheck();
        } else {
          handleNext();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isChecked, isComplete, handleSelectAnswer, handleCheck, handleNext]);

  // ── Results Screen ─────────────────────────────────────────────────────────
  if (isComplete) {
    return (
      <ResultsScreen
        xp={xp}
        correctCount={correctCount}
        totalQuestions={QUESTIONS.length}
        heartsLeft={hearts}
        onRestart={handleRestart}
        confettiPieces={confettiPieces}
      />
    );
  }

  // ── Quiz UI ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Floating XP Labels */}
      <AnimatePresence>
        {floatingXPs.map((item) => (
          <FloatingXPLabel key={item.id} item={item} />
        ))}
      </AnimatePresence>

      {/* ── Progress Bar (very top) ───────────────────────────────────────── */}
      <div className="w-full h-3 bg-zinc-100 sticky top-0 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-[#58CC02] to-[#45A800] rounded-full"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* ── Header Bar ───────────────────────────────────────────────────── */}
      <div className="sticky top-3 z-20 bg-white border-b border-zinc-100 px-4 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          {/* Back link */}
          <Link
            href={`/${locale}/demo`}
            className="flex items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors"
            aria-label="Zuruck zur Ubersicht"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-bold hidden sm:inline">Ubersicht</span>
          </Link>

          {/* Hearts */}
          <div className="flex items-center gap-1">
            {Array.from({ length: TOTAL_HEARTS }, (_, i) => (
              <AnimatePresence key={i} mode="wait">
                <motion.div
                  key={`heart-${i}-${hearts}`}
                  initial={i >= hearts && i < hearts + 1 ? { scale: 1.4, y: -4 } : {}}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <HeartIcon filled={i < hearts} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          {/* XP + Streak */}
          <div className="flex items-center gap-2">
            <XPBadge xp={xp} />
            {streak >= 2 && <StreakBadge count={streak} />}
          </div>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col max-w-xl mx-auto w-full px-4 pt-6 pb-32">
        {/* Question counter */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-zinc-400 uppercase tracking-wide">
            Frage {currentIndex + 1} / {QUESTIONS.length}
          </span>
          <span className="text-sm font-semibold text-zinc-300">
            Pflege Grundlagen
          </span>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`question-${currentIndex}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="mb-6"
          >
            {/* Owl / mascot hint */}
            <div className="flex items-start gap-3 mb-5">
              <div className="text-4xl flex-shrink-0 mt-1">🦉</div>
              <div className="bg-zinc-50 border-2 border-zinc-100 rounded-2xl rounded-tl-none px-4 py-3">
                <p className="text-base font-bold text-zinc-700 leading-snug">
                  {currentQuestion.question}
                </p>
              </div>
            </div>

            {/* Answer Options */}
            <div className="flex flex-col gap-3">
              {currentQuestion.answers.map((answer, idx) => {
                const isSelected = selectedAnswer === idx;
                const isThisCorrect = idx === currentQuestion.correctIndex;

                // Determine button style
                let borderClass =
                  "border-zinc-200 border-b-zinc-300 bg-white hover:bg-zinc-50 hover:border-zinc-300";
                let textClass = "text-zinc-700";
                let iconEl: React.ReactNode = null;

                if (isChecked) {
                  if (isThisCorrect) {
                    borderClass =
                      "border-[#58CC02] border-b-[#3D8C00] bg-[#58CC02]/10";
                    textClass = "text-[#2D7A00] font-black";
                    iconEl = (
                      <motion.span
                        className="text-[#58CC02] text-xl"
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 18, delay: 0.05 }}
                      >
                        ✓
                      </motion.span>
                    );
                  } else if (isSelected && !isThisCorrect) {
                    borderClass =
                      "border-[#FF4B4B] border-b-[#CC3333] bg-[#FF4B4B]/10";
                    textClass = "text-[#CC3333] font-black";
                    iconEl = (
                      <motion.span
                        className="text-[#FF4B4B] text-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 18 }}
                      >
                        ✗
                      </motion.span>
                    );
                  }
                } else if (isSelected) {
                  borderClass =
                    "border-[#1CB0F6] border-b-[#0090CC] bg-[#1CB0F6]/10";
                  textClass = "text-[#0078BB] font-black";
                }

                return (
                  <motion.button
                    key={`${currentIndex}-${idx}`}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`w-full text-left rounded-2xl border-2 border-b-4 px-4 py-3.5 transition-colors duration-150 flex items-center justify-between ${borderClass}`}
                    animate={
                      shakingAnswer === idx
                        ? { x: [0, -10, 10, -8, 8, -5, 5, 0] }
                        : isChecked && isThisCorrect && isSelected
                        ? { y: [0, -6, 0, -4, 0] }
                        : {}
                    }
                    transition={
                      shakingAnswer === idx
                        ? { duration: 0.5, ease: "easeInOut" }
                        : { duration: 0.5, ease: "easeInOut" }
                    }
                    whileTap={!isChecked ? { scale: 0.97 } : {}}
                    disabled={isChecked}
                  >
                    <div className="flex items-center gap-3">
                      {/* Letter badge */}
                      <span
                        className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center text-sm font-black flex-shrink-0 ${
                          isChecked && isThisCorrect
                            ? "border-[#58CC02] text-[#58CC02] bg-[#58CC02]/10"
                            : isChecked && isSelected && !isThisCorrect
                            ? "border-[#FF4B4B] text-[#FF4B4B] bg-[#FF4B4B]/10"
                            : isSelected
                            ? "border-[#1CB0F6] text-[#1CB0F6] bg-[#1CB0F6]/10"
                            : "border-zinc-300 text-zinc-400"
                        }`}
                      >
                        {["A", "B", "C", "D"][idx]}
                      </span>
                      <span className={`text-base ${textClass}`}>{answer}</span>
                    </div>
                    {iconEl && <div className="flex-shrink-0 ml-2">{iconEl}</div>}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback Banner */}
        <AnimatePresence>
          {isChecked && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`rounded-2xl p-4 border-2 ${
                isCorrect
                  ? "bg-[#58CC02]/10 border-[#58CC02]"
                  : "bg-[#FF4B4B]/10 border-[#FF4B4B]"
              }`}
            >
              <div className="flex items-start gap-3">
                <motion.span
                  className="text-2xl flex-shrink-0"
                  animate={isCorrect ? { rotate: [0, -15, 15, 0], scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {isCorrect ? "🎉" : "😔"}
                </motion.span>
                <div>
                  <p
                    className={`font-black text-base mb-1 ${
                      isCorrect ? "text-[#2D7A00]" : "text-[#CC3333]"
                    }`}
                  >
                    {isCorrect ? "Richtig!" : "Nicht ganz richtig"}
                  </p>
                  {currentQuestion.explanation && (
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom Bar (fixed) ────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-zinc-100 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-xl mx-auto">
          {!isChecked ? (
            <motion.button
              onClick={handleCheck}
              disabled={selectedAnswer === null}
              className={`w-full font-black text-lg rounded-2xl py-4 border-b-4 transition-all duration-150 ${
                selectedAnswer === null
                  ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed"
                  : "bg-gradient-to-b from-[#58CC02] to-[#45A800] text-white border-[#3D8C00] active:border-b-0 active:translate-y-1 shadow-lg"
              }`}
              whileTap={selectedAnswer !== null ? { scale: 0.97 } : {}}
            >
              {selectedAnswer === null ? "Antwort auswahlen" : "Prufen"}
            </motion.button>
          ) : (
            <motion.button
              onClick={handleNext}
              className={`w-full font-black text-lg rounded-2xl py-4 border-b-4 active:border-b-0 active:translate-y-1 transition-all duration-100 shadow-lg ${
                isCorrect
                  ? "bg-gradient-to-b from-[#58CC02] to-[#45A800] text-white border-[#3D8C00]"
                  : "bg-gradient-to-b from-[#FF4B4B] to-[#CC3333] text-white border-[#AA1111]"
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              whileTap={{ scale: 0.97 }}
            >
              {currentIndex + 1 >= QUESTIONS.length ? "Ergebnisse sehen" : "Weiter"}
            </motion.button>
          )}

          {/* Pulse ring on correct */}
          {pulsing && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-[#58CC02]/20 pointer-events-none"
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

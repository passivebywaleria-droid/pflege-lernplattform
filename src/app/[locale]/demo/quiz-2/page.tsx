"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type AnswerIndex = 0 | 1 | 2 | 3;

interface Question {
  text: string;
  answers: [string, string, string, string];
  correct: AnswerIndex;
}

interface Player {
  id: string;
  name: string;
  score: number;
  isYou: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    text: "Was ist der normale Ruhepuls eines Erwachsenen?",
    answers: ["30–40 bpm", "60–100 bpm", "120–150 bpm", "150–200 bpm"],
    correct: 1,
  },
  {
    text: "Welche Temperatur gilt als Fieber?",
    answers: ["Ab 36,0 °C", "Ab 37,0 °C", "Ab 38,0 °C", "Ab 40,0 °C"],
    correct: 2,
  },
  {
    text: "Was ist die korrekte Technik beim Anziehen steriler Handschuhe?",
    answers: [
      "Erst links, dann rechts",
      "Innenseite zuerst berühren",
      "Von außen greifen",
      "Reihenfolge egal",
    ],
    correct: 1,
  },
  {
    text: "Welcher Blutdruck gilt als normal?",
    answers: [
      "90/50 mmHg",
      "120/80 mmHg",
      "160/100 mmHg",
      "200/120 mmHg",
    ],
    correct: 1,
  },
  {
    text: "Was beschreibt die Abkürzung 'RR'?",
    answers: [
      "Riva-Rocci (Blutdruck)",
      "Reanimationsrichtlinie",
      "Ruheraum",
      "Rückruf",
    ],
    correct: 0,
  },
  {
    text: "Wie viele Stufen hat die WHO-Schmerzskala?",
    answers: ["2 Stufen", "3 Stufen", "5 Stufen", "10 Stufen"],
    correct: 1,
  },
  {
    text: "Was gehört zur basalen Stimulation?",
    answers: [
      "Medikamentengabe",
      "Beruhigende Ganzkörperwaschung",
      "Blutentnahme",
      "Röntgenuntersuchung",
    ],
    correct: 1,
  },
  {
    text: "Welches Organ produziert Insulin?",
    answers: ["Leber", "Niere", "Bauchspeicheldrüse", "Milz"],
    correct: 2,
  },
];

const TOTAL_TIME = 20;

// ─── Answer block config ──────────────────────────────────────────────────────

const BLOCK_CONFIG = [
  {
    color: "#E21B3C",
    lightColor: "#fde8ec",
    shape: "▲",
    label: "Dreieck",
    enterFrom: { x: -120, y: -120 },
  },
  {
    color: "#1368CE",
    lightColor: "#e0ecfb",
    shape: "◆",
    label: "Raute",
    enterFrom: { x: 120, y: -120 },
  },
  {
    color: "#D89E00",
    lightColor: "#fdf3d0",
    shape: "●",
    label: "Kreis",
    enterFrom: { x: -120, y: 120 },
  },
  {
    color: "#26890C",
    lightColor: "#d8f5d1",
    shape: "■",
    label: "Quadrat",
    enterFrom: { x: 120, y: 120 },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function calcPoints(timeLeft: number): number {
  return Math.round(1000 * (timeLeft / TOTAL_TIME));
}

function shuffleLeaderboard(
  players: Player[],
  yourScore: number
): Player[] {
  const updated = players.map((p) => {
    if (p.isYou) return { ...p, score: yourScore };
    // Other players get random points 400-950
    const rand = Math.floor(Math.random() * 550) + 400;
    return { ...p, score: p.score + rand };
  });
  return updated.sort((a, b) => b.score - a.score);
}

// ─── Circular Timer ───────────────────────────────────────────────────────────

function CircularTimer({
  timeLeft,
  total,
}: {
  timeLeft: number;
  total: number;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / total;
  const dashOffset = circumference * (1 - progress);
  const isLow = timeLeft <= 5;

  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={isLow ? { scale: [1, 1.08, 1] } : { scale: 1 }}
      transition={
        isLow ? { repeat: Infinity, duration: 0.6 } : { duration: 0 }
      }
    >
      <svg width={96} height={96} viewBox="0 0 96 96">
        {/* Background circle */}
        <circle
          cx={48}
          cy={48}
          r={radius}
          fill="white"
          stroke="#e5e7eb"
          strokeWidth={8}
        />
        {/* Progress arc */}
        <circle
          cx={48}
          cy={48}
          r={radius}
          fill="none"
          stroke={isLow ? "#E21B3C" : "#1368CE"}
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 48 48)"
          style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.3s" }}
        />
      </svg>
      <span
        className="absolute text-2xl font-extrabold"
        style={{ color: isLow ? "#E21B3C" : "#1368CE" }}
      >
        {timeLeft}
      </span>
    </motion.div>
  );
}

// ─── Music Beat Indicator ─────────────────────────────────────────────────────

function BeatIndicator({ active }: { active: boolean }) {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: 8,
            height: 8,
            background: "#1368CE",
          }}
          animate={
            active
              ? {
                  scale: [1, 1.6, 1],
                  opacity: [0.4, 1, 0.4],
                }
              : { scale: 1, opacity: 0.3 }
          }
          transition={
            active
              ? {
                  repeat: Infinity,
                  duration: 0.6,
                  delay: i * 0.2,
                }
              : {}
          }
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">
        Live
      </span>
    </div>
  );
}

// ─── Answer Block ─────────────────────────────────────────────────────────────

function AnswerBlock({
  index,
  text,
  selected,
  revealed,
  isCorrect,
  disabled,
  onClick,
  delay,
}: {
  index: number;
  text: string;
  selected: boolean;
  revealed: boolean;
  isCorrect: boolean;
  disabled: boolean;
  onClick: () => void;
  delay: number;
}) {
  const cfg = BLOCK_CONFIG[index];

  let bg = cfg.color;
  let opacity = 1;
  let scale = 1;
  let ringStyle: React.CSSProperties = {};

  if (revealed) {
    if (isCorrect) {
      scale = selected ? 1.04 : 1;
      opacity = 1;
    } else {
      opacity = selected ? 0.55 : 0.3;
      scale = 0.97;
    }
  }

  if (selected && !revealed) {
    ringStyle = {
      outline: "4px solid white",
      outlineOffset: "2px",
    };
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: cfg.enterFrom.x, y: cfg.enterFrom.y }}
      animate={{ opacity, scale, x: 0, y: 0 }}
      transition={{ duration: 0.45, delay, type: "spring", stiffness: 140 }}
      whileHover={!disabled ? { scale: scale * 1.03 } : {}}
      whileTap={!disabled ? { scale: scale * 0.97 } : {}}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled && !revealed}
      className="relative flex items-center gap-3 rounded-2xl p-4 sm:p-5 cursor-pointer select-none text-left w-full"
      style={{
        background: bg,
        ...ringStyle,
        boxShadow: isCorrect && revealed
          ? `0 0 0 4px white, 0 0 0 7px ${cfg.color}`
          : "0 4px 14px rgba(0,0,0,0.15)",
      }}
      aria-label={`${cfg.label}: ${text}`}
    >
      {/* Shape icon */}
      <span
        className="flex-shrink-0 flex items-center justify-center rounded-lg text-white font-bold text-xl"
        style={{
          width: 40,
          height: 40,
          background: "rgba(0,0,0,0.18)",
        }}
      >
        {cfg.shape}
      </span>

      {/* Text */}
      <span className="font-bold text-white text-base sm:text-lg leading-tight flex-1">
        {text}
      </span>

      {/* Correct checkmark */}
      <AnimatePresence>
        {revealed && isCorrect && (
          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            className="flex-shrink-0 text-2xl text-white"
          >
            ✓
          </motion.span>
        )}
      </AnimatePresence>

      {/* Wrong X */}
      <AnimatePresence>
        {revealed && !isCorrect && selected && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex-shrink-0 text-2xl text-white opacity-80"
          >
            ✗
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Leaderboard ──────────────────────────────────────────────────────────────

function Leaderboard({
  players,
  onNext,
  questionIndex,
  totalQuestions,
}: {
  players: Player[];
  onNext: () => void;
  questionIndex: number;
  totalQuestions: number;
}) {
  const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"];
  const medalLabels = ["1.", "2.", "3."];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto px-4"
    >
      <div className="text-center">
        <div className="text-4xl mb-1">🏆</div>
        <h2 className="text-2xl font-extrabold text-gray-800">
          Rangliste
        </h2>
        <p className="text-sm text-gray-500">
          Frage {questionIndex} von {totalQuestions}
        </p>
      </div>

      <LayoutGroup>
        <div className="w-full flex flex-col gap-2">
          {players.map((player, rank) => (
            <motion.div
              key={player.id}
              layout
              initial={{ opacity: 0, x: rank % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: rank * 0.08, duration: 0.35 }}
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: player.isYou ? "#e0ecfb" : "white",
                border: player.isYou
                  ? "2px solid #1368CE"
                  : "2px solid #f3f4f6",
                boxShadow: player.isYou
                  ? "0 0 0 2px #1368CE33"
                  : "0 1px 4px rgba(0,0,0,0.07)",
              }}
            >
              <span
                className="font-extrabold text-lg w-8 text-center"
                style={{
                  color:
                    rank < 3
                      ? medalColors[rank]
                      : "#9ca3af",
                }}
              >
                {rank < 3 ? medalLabels[rank] : `${rank + 1}.`}
              </span>
              <span
                className="flex-1 font-bold text-base"
                style={{ color: player.isYou ? "#1368CE" : "#374151" }}
              >
                {player.name}
                {player.isYou && (
                  <span className="ml-2 text-xs font-normal text-blue-500">
                    (Du)
                  </span>
                )}
              </span>
              <motion.span
                key={player.score}
                initial={{ scale: 1.3, color: "#26890C" }}
                animate={{ scale: 1, color: "#374151" }}
                transition={{ duration: 0.4 }}
                className="font-extrabold text-base tabular-nums"
              >
                {player.score.toLocaleString("de-DE")}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="mt-2 px-8 py-3 rounded-2xl font-extrabold text-white text-lg shadow-md"
        style={{ background: "#1368CE" }}
      >
        {questionIndex < totalQuestions ? "Nächste Frage →" : "Endergebnis →"}
      </motion.button>
    </motion.div>
  );
}

// ─── Podium / Final Screen ────────────────────────────────────────────────────

function FinalPodium({
  players,
  onRestart,
}: {
  players: Player[];
  onRestart: () => void;
}) {
  const { locale } = useParams();
  const top3 = players.slice(0, 3);
  const you = players.find((p) => p.isYou)!;
  const yourRank = players.findIndex((p) => p.isYou) + 1;

  // Podium order: 2nd, 1st, 3rd
  const podiumOrder = [top3[1], top3[0], top3[2]].filter(Boolean);
  const podiumHeights = [180, 240, 140];
  const podiumColors = ["#C0C0C0", "#FFD700", "#CD7F32"];
  const podiumLabels = ["2.", "1.", "3."];

  // Confetti pieces
  const confettiColors = [
    "#E21B3C",
    "#1368CE",
    "#D89E00",
    "#26890C",
    "#9333ea",
    "#f97316",
  ];
  const confettiPieces = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    color: confettiColors[i % confettiColors.length],
    x: Math.random() * 100,
    delay: Math.random() * 1.2,
    duration: 1.5 + Math.random() * 1,
    rotate: Math.random() * 360,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col items-center gap-8 w-full max-w-lg mx-auto px-4 pb-10 overflow-hidden"
    >
      {/* Confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confettiPieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ y: -20, opacity: 1, rotate: 0, x: `${piece.x}vw` }}
            animate={{ y: 600, opacity: 0, rotate: piece.rotate + 360 }}
            transition={{
              delay: piece.delay,
              duration: piece.duration,
              ease: "easeIn",
            }}
            className="absolute top-0"
            style={{
              width: 10,
              height: 10,
              background: piece.color,
              borderRadius: piece.id % 3 === 0 ? "50%" : 2,
              left: `${piece.x}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
          className="text-6xl mb-2"
        >
          🎉
        </motion.div>
        <h2 className="text-3xl font-extrabold text-gray-800">Quiz beendet!</h2>
        <p className="text-gray-500 mt-1">Fantastische Leistung!</p>
      </div>

      {/* Your score */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="rounded-2xl px-8 py-4 text-center shadow-lg"
        style={{
          background: "linear-gradient(135deg, #1368CE 0%, #0d4fa0 100%)",
          color: "white",
        }}
      >
        <div className="text-sm font-semibold opacity-80 mb-1">Dein Ergebnis</div>
        <div className="text-4xl font-extrabold">
          {you.score.toLocaleString("de-DE")} Pkt.
        </div>
        <div className="text-sm opacity-80 mt-1">
          Platz {yourRank} von {players.length}
        </div>
      </motion.div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-2 w-full mt-2">
        {podiumOrder.map((player, i) => (
          <motion.div
            key={player?.id ?? i}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 120 }}
            className="flex flex-col items-center"
            style={{ width: "30%" }}
          >
            <div
              className="font-bold text-sm text-center mb-1 text-gray-700 truncate w-full text-center"
              style={{ fontSize: "0.7rem" }}
            >
              {player?.name}
            </div>
            <div
              className="text-xs font-semibold text-gray-500 mb-1 tabular-nums"
            >
              {player?.score.toLocaleString("de-DE")} Pkt.
            </div>
            <div
              className="flex flex-col items-center justify-start rounded-t-xl w-full pt-3"
              style={{
                height: podiumHeights[i],
                background: podiumColors[i],
                boxShadow: "0 -4px 12px rgba(0,0,0,0.12)",
              }}
            >
              <span className="text-2xl font-extrabold text-white">
                {podiumLabels[i]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full leaderboard */}
      <div className="w-full flex flex-col gap-1 mt-2">
        {players.slice(3).map((player, idx) => (
          <div
            key={player.id}
            className="flex items-center gap-3 rounded-xl px-4 py-2"
            style={{
              background: player.isYou ? "#e0ecfb" : "#f9fafb",
              border: player.isYou ? "2px solid #1368CE" : "2px solid #f3f4f6",
            }}
          >
            <span className="font-bold text-gray-400 w-6 text-center">
              {idx + 4}.
            </span>
            <span
              className="flex-1 font-semibold text-sm"
              style={{ color: player.isYou ? "#1368CE" : "#374151" }}
            >
              {player.name}
              {player.isYou && (
                <span className="ml-2 text-xs font-normal text-blue-400">
                  (Du)
                </span>
              )}
            </span>
            <span className="font-bold text-sm tabular-nums text-gray-600">
              {player.score.toLocaleString("de-DE")}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRestart}
          className="flex-1 px-6 py-3 rounded-2xl font-extrabold text-white text-base shadow-md"
          style={{ background: "#26890C" }}
        >
          Nochmal spielen
        </motion.button>
        <Link href={`/${locale}/demo`} className="flex-1">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-6 py-3 rounded-2xl font-extrabold text-white text-base shadow-md text-center"
            style={{ background: "#1368CE" }}
          >
            Zur Übersicht
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type Phase = "question" | "reveal" | "leaderboard" | "final";

export default function KahootQuizPage() {
  const { locale } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("question");
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [selected, setSelected] = useState<AnswerIndex | null>(null);
  const [yourTotalScore, setYourTotalScore] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [players, setPlayers] = useState<Player[]>([
    { id: "you", name: "Du (Anna)", score: 0, isYou: true },
    { id: "max", name: "Max M.", score: 0, isYou: false },
    { id: "lisa", name: "Lisa K.", score: 0, isYou: false },
    { id: "tom", name: "Tom B.", score: 0, isYou: false },
    { id: "sara", name: "Sara W.", score: 0, isYou: false },
  ]);

  const currentQuestion = QUESTIONS[questionIndex];

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const revealAnswer = useCallback(
    (answeredTimeLeft: number, answeredIndex: AnswerIndex | null) => {
      stopTimer();
      const points =
        answeredIndex === currentQuestion.correct
          ? calcPoints(answeredTimeLeft)
          : 0;

      setYourTotalScore((prev) => {
        const newTotal = prev + points;
        setPlayers((prev) => shuffleLeaderboard(prev, newTotal));
        return newTotal;
      });

      setPhase("reveal");

      // After 2s show leaderboard
      setTimeout(() => {
        setPhase("leaderboard");
      }, 2200);
    },
    [currentQuestion.correct, stopTimer]
  );

  // Timer effect
  useEffect(() => {
    if (phase !== "question") return;

    setTimeLeft(TOTAL_TIME);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up — reveal with no selection
          revealAnswer(0, null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => stopTimer();
  }, [phase, questionIndex, revealAnswer, stopTimer]);

  function handleSelect(index: AnswerIndex) {
    if (phase !== "question" || selected !== null) return;
    setSelected(index);
    revealAnswer(timeLeft, index);
  }

  function handleNext() {
    if (questionIndex + 1 >= QUESTIONS.length) {
      setPhase("final");
    } else {
      setQuestionIndex((i) => i + 1);
      setSelected(null);
      setPhase("question");
    }
  }

  function handleRestart() {
    setQuestionIndex(0);
    setSelected(null);
    setPhase("question");
    setYourTotalScore(0);
    setPlayers([
      { id: "you", name: "Du (Anna)", score: 0, isYou: true },
      { id: "max", name: "Max M.", score: 0, isYou: false },
      { id: "lisa", name: "Lisa K.", score: 0, isYou: false },
      { id: "tom", name: "Tom B.", score: 0, isYou: false },
      { id: "sara", name: "Sara W.", score: 0, isYou: false },
    ]);
  }

  const isActive = phase === "question";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#f8fafc" }}
    >
      {/* ── Top Bar ── */}
      <header
        className="sticky top-0 z-30 flex items-center justify-between px-4 py-2 border-b border-gray-200"
        style={{ background: "white", boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}
      >
        <Link
          href={`/${locale}/demo`}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-semibold text-sm transition-colors"
        >
          ← Zurück zur Übersicht
        </Link>

        <div className="flex items-center gap-3">
          <BeatIndicator active={phase === "question"} />
          {phase !== "final" && (
            <span
              className="hidden sm:inline rounded-full px-3 py-1 text-xs font-bold"
              style={{ background: "#e0ecfb", color: "#1368CE" }}
            >
              Frage {questionIndex + 1} / {QUESTIONS.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400">Punkte</span>
          <motion.span
            key={yourTotalScore}
            initial={{ scale: 1.3, color: "#26890C" }}
            animate={{ scale: 1, color: "#1368CE" }}
            transition={{ duration: 0.3 }}
            className="text-base font-extrabold tabular-nums"
            style={{ color: "#1368CE" }}
          >
            {yourTotalScore.toLocaleString("de-DE")}
          </motion.span>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col items-center py-6 px-4">
        <AnimatePresence mode="wait">
          {phase === "final" ? (
            <motion.div
              key="final"
              className="w-full max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FinalPodium players={players} onRestart={handleRestart} />
            </motion.div>
          ) : phase === "leaderboard" ? (
            <motion.div
              key={`lb-${questionIndex}`}
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Leaderboard
                players={players}
                onNext={handleNext}
                questionIndex={questionIndex + 1}
                totalQuestions={QUESTIONS.length}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`q-${questionIndex}`}
              className="w-full max-w-2xl flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35 }}
            >
              {/* Timer */}
              <CircularTimer timeLeft={timeLeft} total={TOTAL_TIME} />

              {/* Points bar hint */}
              {phase === "question" && (
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ background: "#26890C" }}
                  />
                  Schnell antworten = mehr Punkte (max. 1.000)
                </div>
              )}

              {/* Question card */}
              <motion.div
                layout
                className="w-full rounded-3xl shadow-lg px-6 py-7 text-center"
                style={{ background: "white", border: "2px solid #e5e7eb" }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#9ca3af" }}
                >
                  Frage {questionIndex + 1}
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug">
                  {currentQuestion.text}
                </p>
              </motion.div>

              {/* Answer blocks — 2x2 grid */}
              <div className="w-full grid grid-cols-2 gap-3 sm:gap-4">
                {currentQuestion.answers.map((answer, i) => (
                  <AnswerBlock
                    key={i}
                    index={i}
                    text={answer}
                    selected={selected === i}
                    revealed={phase === "reveal"}
                    isCorrect={i === currentQuestion.correct}
                    disabled={phase !== "question"}
                    onClick={() => handleSelect(i as AnswerIndex)}
                    delay={i * 0.07}
                  />
                ))}
              </div>

              {/* Reveal feedback */}
              <AnimatePresence>
                {phase === "reveal" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-2xl px-6 py-3 text-center font-extrabold text-lg shadow"
                    style={{
                      background:
                        selected === currentQuestion.correct
                          ? "#26890C"
                          : selected === null
                          ? "#E21B3C"
                          : "#E21B3C",
                      color: "white",
                    }}
                  >
                    {selected === currentQuestion.correct
                      ? `✓ Richtig! +${calcPoints(timeLeft + 1).toLocaleString("de-DE")} Punkte`
                      : selected === null
                      ? "⏱ Zeit abgelaufen!"
                      : `✗ Leider falsch!`}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex gap-2 mt-1">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === questionIndex ? 20 : 8,
                      height: 8,
                      background:
                        i < questionIndex
                          ? "#26890C"
                          : i === questionIndex
                          ? "#1368CE"
                          : "#e5e7eb",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── Footer ── */}
      <footer className="text-center py-3 text-xs text-gray-300 font-medium border-t border-gray-100">
        Pflege-Lernplattform · Quiz-Demo · 8 Fragen · Pflegeausbildung
      </footer>
    </div>
  );
}

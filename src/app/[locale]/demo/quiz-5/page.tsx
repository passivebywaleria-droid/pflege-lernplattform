"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Flashcard {
  id: number;
  term: string;
  definition: string;
  mastery: number; // 0–3
  known: boolean;
}

const RAW_CARDS: Omit<Flashcard, "mastery" | "known">[] = [
  { id: 1, term: "Anamnese", definition: "Systematische Erfassung der Krankengeschichte eines Patienten" },
  { id: 2, term: "Dekubitus", definition: "Druckgeschwür durch anhaltende Druckbelastung der Haut" },
  { id: 3, term: "Bradykardie", definition: "Herzfrequenz unter 60 Schläge pro Minute" },
  { id: 4, term: "Tachykardie", definition: "Herzfrequenz über 100 Schläge pro Minute" },
  { id: 5, term: "Aspiration", definition: "Eindringen von Material in die Atemwege" },
  { id: 6, term: "Kontraktur", definition: "Funktions- und Bewegungseinschränkung von Gelenken" },
  { id: 7, term: "Obstipation", definition: "Verzögerte oder erschwerte Darmentleerung" },
  { id: 8, term: "Dyspnoe", definition: "Subjektiv empfundene Atemnot" },
  { id: 9, term: "Exsikkose", definition: "Austrocknung durch Flüssigkeitsmangel" },
  { id: 10, term: "Thrombose", definition: "Blutgerinnsel in einem Blutgefäß" },
  { id: 11, term: "Embolie", definition: "Verschluss eines Blutgefäßes durch verschlepptes Material" },
  { id: 12, term: "Prophylaxe", definition: "Vorbeugende Maßnahme zur Krankheitsverhütung" },
  { id: 13, term: "Mobilisation", definition: "Förderung der Bewegungsfähigkeit eines Patienten" },
  { id: 14, term: "Compliance", definition: "Bereitschaft des Patienten zur Mitwirkung bei der Therapie" },
  { id: 15, term: "Vitalzeichen", definition: "Messbare Lebenszeichen (Puls, Blutdruck, Temperatur, Atmung)" },
];

function initCards(): Flashcard[] {
  return RAW_CARDS.map((c) => ({ ...c, mastery: 0, known: false }));
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Mode = "karteikarten" | "lernen" | "test";

interface TestQuestion {
  cardId: number;
  definition: string;
  correctTerm: string;
  options: string[];
  selectedOption: string | null;
  isCorrect: boolean | null;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

// Progress bar
function ProgressBar({ value, max, color = "#4F46E5" }: { value: number; max: number; color?: string }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}

// Tab bar
function TabBar({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  const tabs: { key: Mode; label: string }[] = [
    { key: "karteikarten", label: "Karteikarten" },
    { key: "lernen", label: "Lernen" },
    { key: "test", label: "Test" },
  ];
  return (
    <div className="flex gap-1 border-b border-slate-200 mb-6">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className="relative px-5 py-3 text-sm font-semibold transition-colors"
          style={{ color: mode === t.key ? "#4F46E5" : "#64748b" }}
        >
          {t.label}
          {mode === t.key && (
            <motion.div
              layoutId="tab-underline"
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
              style={{ backgroundColor: "#4F46E5" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mode 1 — Karteikarten
// ---------------------------------------------------------------------------

function KarteikartenMode({ cards: initialCards }: { cards: Flashcard[] }) {
  const [cards, setCards] = useState<Flashcard[]>(initialCards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [learningCount, setLearningCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentCard = cards[index];
  const total = cards.length;

  const navigate = useCallback(
    (dir: "left" | "right") => {
      setDirection(dir);
      setFlipped(false);
      setTimeout(() => {
        setIndex((i) => {
          if (dir === "right") return Math.min(i + 1, total - 1);
          return Math.max(i - 1, 0);
        });
        setDirection(null);
      }, 200);
    },
    [total]
  );

  const handleFlip = useCallback(() => setFlipped((f) => !f), []);

  const handleKnown = () => {
    setKnownCount((k) => k + 1);
    setCards((prev) =>
      prev.map((c, i) => (i === index ? { ...c, known: true } : c))
    );
    if (index < total - 1) navigate("right");
    else setFinished(true);
  };

  const handleLearning = () => {
    setLearningCount((l) => l + 1);
    if (index < total - 1) navigate("right");
    else setFinished(true);
  };

  const handleShuffle = () => {
    setCards(shuffle(cards));
    setIndex(0);
    setFlipped(false);
    setKnownCount(0);
    setLearningCount(0);
    setFinished(false);
  };

  const handleReset = () => {
    setCards(initialCards);
    setIndex(0);
    setFlipped(false);
    setKnownCount(0);
    setLearningCount(0);
    setFinished(false);
  };

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space") { e.preventDefault(); handleFlip(); }
      if (e.code === "ArrowRight") navigate("right");
      if (e.code === "ArrowLeft") navigate("left");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleFlip, navigate]);

  // Auto-play
  useEffect(() => {
    if (autoPlay) {
      autoTimer.current = setTimeout(() => navigate("right"), 3000);
    }
    return () => { if (autoTimer.current) clearTimeout(autoTimer.current); };
  }, [autoPlay, index, navigate]);

  if (finished) {
    return (
      <div className="flex flex-col items-center gap-6 py-16">
        <div className="text-6xl">🎉</div>
        <h2 className="text-2xl font-bold text-slate-800">Runde abgeschlossen!</h2>
        <div className="flex gap-8 text-center">
          <div className="bg-emerald-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-emerald-600">{knownCount}</div>
            <div className="text-sm text-slate-500 mt-1">Gewusst</div>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-orange-500">{learningCount}</div>
            <div className="text-sm text-slate-500 mt-1">Noch lernen</div>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="mt-4 px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#4F46E5" }}
        >
          Nochmal von vorne
        </button>
      </div>
    );
  }

  const cardVariants = {
    enter: (dir: string) => ({
      x: dir === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: string) => ({
      x: dir === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Counter + progress */}
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-500">
            {index + 1} / {total}
          </span>
          <div className="flex items-center gap-4">
            <span className="text-xs text-emerald-600 font-medium">✓ {knownCount} gewusst</span>
            <span className="text-xs text-orange-500 font-medium">↻ {learningCount} lernen</span>
          </div>
        </div>
        <ProgressBar value={index + 1} max={total} />
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl" style={{ perspective: "1000px" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentCard.id + "-" + index}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative w-full cursor-pointer select-none"
              style={{
                height: 280,
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onClick={handleFlip}
            >
              {/* Front */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white border border-slate-200 px-8"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  boxShadow: flipped
                    ? "0 10px 25px -5px rgba(0,0,0,0.15)"
                    : "0 4px 12px -2px rgba(0,0,0,0.08)",
                }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                  Begriff
                </span>
                <p className="text-2xl font-bold text-slate-800 text-center">{currentCard.term}</p>
                <span className="mt-6 text-xs text-slate-400">Klicken zum Umdrehen · Leertaste</span>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white border border-indigo-200 px-8"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  boxShadow: "0 10px 25px -5px rgba(79,70,229,0.15)",
                }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                  Definition
                </span>
                <p className="text-xl font-medium text-slate-700 text-center leading-relaxed">
                  {currentCard.definition}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Self-assessment buttons */}
      <AnimatePresence>
        {flipped && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex gap-4"
          >
            <button
              onClick={handleLearning}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 flex items-center gap-2"
              style={{ backgroundColor: "#F97316" }}
            >
              <span>↻</span> Noch lernen
            </button>
            <button
              onClick={handleKnown}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 flex items-center gap-2"
              style={{ backgroundColor: "#10B981" }}
            >
              <span>✓</span> Wusste ich
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("left")}
          disabled={index === 0}
          className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 transition-all hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <div className="flex gap-3">
          <button
            onClick={handleShuffle}
            className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
          >
            🔀 Mischen
          </button>
          <button
            onClick={() => setAutoPlay((a) => !a)}
            className="px-4 py-2 rounded-lg border text-xs font-medium transition-colors"
            style={{
              borderColor: autoPlay ? "#4F46E5" : "#e2e8f0",
              color: autoPlay ? "#4F46E5" : "#475569",
            }}
          >
            {autoPlay ? "⏸ Auto-Stop" : "▶ Auto-Play"}
          </button>
        </div>
        <button
          onClick={() => navigate("right")}
          disabled={index === total - 1}
          className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 transition-all hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 flex-wrap justify-center max-w-xs">
        {cards.map((c, i) => (
          <button
            key={c.id}
            onClick={() => { setIndex(i); setFlipped(false); }}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{
              backgroundColor:
                i === index ? "#4F46E5" : c.known ? "#10B981" : "#cbd5e1",
              transform: i === index ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mode 2 — Lernen (Type answer)
// ---------------------------------------------------------------------------

function LernenMode({ cards: initialCards }: { cards: Flashcard[] }) {
  const [cards, setCards] = useState<Flashcard[]>(initialCards);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [showCorrect, setShowCorrect] = useState(false);
  const [overridden, setOverridden] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<number>>(new Set());
  const [streak, setStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const current = cards[index];
  const total = cards.length;
  const masteredCount = masteredIds.size;

  useEffect(() => {
    if (status === "idle") inputRef.current?.focus();
  }, [index, status]);

  const handleSubmit = () => {
    if (!input.trim() || status !== "idle") return;
    const correct = input.trim().toLowerCase() === current.term.toLowerCase();
    if (correct) {
      setStatus("correct");
      setStreak((s) => s + 1);
      const newMastery = current.mastery + 1;
      setCards((prev) =>
        prev.map((c, i) =>
          i === index ? { ...c, mastery: Math.min(newMastery, 3) } : c
        )
      );
      if (newMastery >= 3) {
        setMasteredIds((m) => new Set([...m, current.id]));
      }
    } else {
      setStatus("wrong");
      setShowCorrect(true);
      setStreak(0);
    }
  };

  const handleNext = () => {
    setInput("");
    setStatus("idle");
    setShowCorrect(false);
    setOverridden(false);
    if (index < total - 1) setIndex((i) => i + 1);
    else setFinished(true);
  };

  const handleOverride = () => {
    setOverridden(true);
    setStatus("correct");
    const newMastery = current.mastery + 1;
    setCards((prev) =>
      prev.map((c, i) =>
        i === index ? { ...c, mastery: Math.min(newMastery, 3) } : c
      )
    );
    if (newMastery >= 3) {
      setMasteredIds((m) => new Set([...m, current.id]));
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        if (status === "idle") handleSubmit();
        else handleNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  if (finished) {
    return (
      <div className="flex flex-col items-center gap-6 py-16">
        <div className="text-6xl">⭐</div>
        <h2 className="text-2xl font-bold text-slate-800">Lernsession abgeschlossen!</h2>
        <p className="text-slate-500">
          {masteredCount} von {total} Begriffen gemeistert
        </p>
        <ProgressBar value={masteredCount} max={total} color="#10B981" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[1, 2, 3].map((level) => {
            const count = cards.filter((c) => c.mastery === level).length;
            return (
              <div key={level} className="bg-slate-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">{count}</div>
                <div className="text-xs text-slate-500 mt-1">Stufe {level}</div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => { setCards(initialCards); setIndex(0); setInput(""); setStatus("idle"); setMasteredIds(new Set()); setFinished(false); }}
          className="mt-4 px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#4F46E5" }}
        >
          Nochmal üben
        </button>
      </div>
    );
  }

  const borderColor =
    status === "correct" ? "#10B981" : status === "wrong" ? "#EF4444" : "#e2e8f0";

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Progress */}
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-500">{index + 1} / {total}</span>
          <div className="flex items-center gap-4">
            <span className="text-xs text-indigo-600 font-medium">⭐ {masteredCount} gemeistert</span>
            {streak > 1 && (
              <span className="text-xs text-orange-500 font-medium">🔥 {streak} in Folge</span>
            )}
          </div>
        </div>
        <ProgressBar value={masteredCount} max={total} color="#10B981" />
      </div>

      {/* Definition card */}
      <div className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200 p-8 text-center"
        style={{ boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08)" }}>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-4">
          Definition
        </span>
        <p className="text-xl font-medium text-slate-700 leading-relaxed">{current.definition}</p>

        {/* Mastery dots */}
        <div className="flex justify-center gap-1.5 mt-5">
          {[0, 1, 2].map((lvl) => (
            <div
              key={lvl}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: lvl < current.mastery ? "#4F46E5" : "#e2e8f0" }}
            />
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="w-full max-w-2xl flex flex-col gap-3">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={status !== "idle"}
            placeholder="Begriff eingeben…"
            className="w-full rounded-xl px-4 py-4 text-lg font-medium outline-none transition-all border-2"
            style={{
              borderColor,
              backgroundColor: status === "correct" ? "#f0fdf4" : status === "wrong" ? "#fff5f5" : "white",
              color: "#1e293b",
            }}
            onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
          />
          {status === "correct" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
              style={{ backgroundColor: "#10B981" }}
            >
              ✓
            </motion.div>
          )}
          {status === "wrong" && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
              style={{ backgroundColor: "#EF4444" }}>
              ✗
            </div>
          )}
        </div>

        {status === "idle" ? (
          <button
            onClick={handleSubmit}
            className="w-full py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Antwort prüfen
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            {status === "wrong" && showCorrect && !overridden && (
              <div className="rounded-xl p-4 text-center"
                style={{ backgroundColor: "#fff5f5", border: "1px solid #fecaca" }}>
                <p className="text-xs text-red-400 font-semibold uppercase mb-1">Richtige Antwort</p>
                <p className="text-lg font-bold text-red-600">{current.term}</p>
                <button
                  onClick={handleOverride}
                  className="mt-2 text-xs text-slate-400 underline hover:text-slate-600"
                >
                  Override — Ich hatte recht
                </button>
              </div>
            )}
            {status === "correct" && (
              <div className="rounded-xl p-3 text-center"
                style={{ backgroundColor: "#f0fdf4", border: "1px solid #a7f3d0" }}>
                <p className="text-sm font-semibold text-emerald-600">
                  {overridden ? "Als richtig gewertet ✓" : "Richtig! 🎉"}
                </p>
              </div>
            )}
            <button
              onClick={handleNext}
              className="w-full py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#4F46E5" }}
            >
              Weiter →
            </button>
          </div>
        )}
      </div>

      {/* Card list overview */}
      <div className="w-full max-w-2xl grid grid-cols-5 gap-2 mt-2">
        {cards.map((c, i) => (
          <div
            key={c.id}
            className="rounded-lg p-2 text-center text-xs font-medium transition-all"
            style={{
              backgroundColor:
                i === index ? "#eef2ff" :
                  masteredIds.has(c.id) ? "#d1fae5" :
                    c.mastery > 0 ? "#fef3c7" : "#f8fafc",
              color:
                i === index ? "#4F46E5" :
                  masteredIds.has(c.id) ? "#10B981" :
                    c.mastery > 0 ? "#F59E0B" : "#94a3b8",
              border: `1px solid ${i === index ? "#c7d2fe" : "transparent"}`,
            }}
          >
            {masteredIds.has(c.id) ? "⭐" : c.mastery > 0 ? c.mastery : "○"}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mode 3 — Test (Multiple Choice)
// ---------------------------------------------------------------------------

function buildTestQuestions(cards: Flashcard[]): TestQuestion[] {
  return shuffle(cards).map((card) => {
    const others = cards.filter((c) => c.id !== card.id);
    const wrongs = shuffle(others).slice(0, 3).map((c) => c.term);
    const options = shuffle([card.term, ...wrongs]);
    return {
      cardId: card.id,
      definition: card.definition,
      correctTerm: card.term,
      options,
      selectedOption: null,
      isCorrect: null,
    };
  });
}

function TestMode({ cards }: { cards: Flashcard[] }) {
  const [questions, setQuestions] = useState<TestQuestion[]>(() => buildTestQuestions(cards));
  const [currentQ, setCurrentQ] = useState(0);
  const [startTime] = useState(Date.now());
  const [endTime, setEndTime] = useState<number | null>(null);
  const [showReview, setShowReview] = useState(false);

  const q = questions[currentQ];
  const total = questions.length;
  const answered = questions.filter((q) => q.isCorrect !== null).length;
  const correctCount = questions.filter((q) => q.isCorrect === true).length;

  const handleSelect = (opt: string) => {
    if (q.isCorrect !== null) return;
    const correct = opt === q.correctTerm;
    setQuestions((prev) =>
      prev.map((item, i) =>
        i === currentQ
          ? { ...item, selectedOption: opt, isCorrect: correct }
          : item
      )
    );
    setTimeout(() => {
      if (currentQ < total - 1) setCurrentQ((i) => i + 1);
      else setEndTime(Date.now());
    }, 800);
  };

  const elapsed = endTime
    ? Math.round((endTime - startTime) / 1000)
    : Math.round((Date.now() - startTime) / 1000);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  // Finished screen
  if (endTime !== null && !showReview) {
    const pct = Math.round((correctCount / total) * 100);
    const grade =
      pct >= 90 ? "Ausgezeichnet!" :
        pct >= 75 ? "Sehr gut!" :
          pct >= 60 ? "Gut gemacht!" :
            pct >= 50 ? "Weiter üben!" : "Mehr Übung nötig";
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <div className="text-6xl">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
        <h2 className="text-2xl font-bold text-slate-800">{grade}</h2>
        <div className="w-full max-w-xs">
          <div className="text-center mb-3">
            <span className="text-5xl font-black" style={{ color: pct >= 60 ? "#10B981" : "#EF4444" }}>
              {correctCount}/{total}
            </span>
            <span className="text-lg text-slate-400 ml-2">({pct}%)</span>
          </div>
          <ProgressBar value={correctCount} max={total} color={pct >= 60 ? "#10B981" : "#EF4444"} />
        </div>
        <div className="flex gap-6 text-center">
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="text-xl font-bold text-slate-700">{formatTime(elapsed)}</div>
            <div className="text-xs text-slate-400 mt-1">Zeit</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-4">
            <div className="text-xl font-bold text-emerald-600">{correctCount}</div>
            <div className="text-xs text-slate-400 mt-1">Richtig</div>
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <div className="text-xl font-bold text-red-500">{total - correctCount}</div>
            <div className="text-xs text-slate-400 mt-1">Falsch</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowReview(true)}
            className="px-6 py-3 rounded-xl font-semibold border-2 transition-colors"
            style={{ borderColor: "#4F46E5", color: "#4F46E5" }}
          >
            Fehler anzeigen
          </button>
          <button
            onClick={() => { setQuestions(buildTestQuestions(cards)); setCurrentQ(0); setEndTime(null); setShowReview(false); }}
            className="px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Neuer Test
          </button>
        </div>
      </div>
    );
  }

  // Review wrong answers
  if (showReview) {
    const wrong = questions.filter((q) => q.isCorrect === false);
    return (
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-slate-800">Falsch beantwortet ({wrong.length})</h3>
        {wrong.map((q, i) => (
          <div key={i} className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-xs text-red-400 font-semibold uppercase mb-1">Definition</p>
            <p className="text-sm text-slate-700 mb-3">{q.definition}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-slate-400">Deine Antwort</p>
                <p className="font-semibold text-red-600">{q.selectedOption}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Richtige Antwort</p>
                <p className="font-semibold text-emerald-600">{q.correctTerm}</p>
              </div>
            </div>
          </div>
        ))}
        {wrong.length === 0 && (
          <p className="text-center text-emerald-600 font-semibold py-8">
            Keine Fehler! Perfektes Ergebnis 🎉
          </p>
        )}
        <button
          onClick={() => setShowReview(false)}
          className="px-6 py-3 rounded-xl font-semibold text-white w-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#4F46E5" }}
        >
          Zurück zur Auswertung
        </button>
      </div>
    );
  }

  // Active test
  const optionStyle = (opt: string) => {
    if (q.isCorrect === null) {
      return {
        backgroundColor: "white",
        borderColor: "#e2e8f0",
        color: "#1e293b",
      };
    }
    if (opt === q.correctTerm) {
      return { backgroundColor: "#f0fdf4", borderColor: "#10B981", color: "#065f46" };
    }
    if (opt === q.selectedOption && !q.isCorrect) {
      return { backgroundColor: "#fff5f5", borderColor: "#EF4444", color: "#991b1b" };
    }
    return { backgroundColor: "white", borderColor: "#e2e8f0", color: "#94a3b8" };
  };

  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto w-full">
      {/* Progress */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-500">Frage {currentQ + 1} / {total}</span>
          <span className="text-sm font-medium text-slate-500">{correctCount} richtig</span>
        </div>
        <ProgressBar value={answered} max={total} />
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <div className="rounded-2xl bg-white border border-slate-200 p-8 text-center mb-6"
            style={{ boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08)" }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-4">
              Welcher Begriff passt zur Definition?
            </span>
            <p className="text-lg font-medium text-slate-700 leading-relaxed">{q.definition}</p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className="w-full rounded-xl border-2 px-6 py-4 text-left font-semibold transition-all hover:shadow-md"
                style={optionStyle(opt)}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs flex-shrink-0"
                    style={{
                      borderColor: optionStyle(opt).borderColor,
                      backgroundColor:
                        opt === q.correctTerm && q.isCorrect !== null ? "#10B981" :
                          opt === q.selectedOption && q.isCorrect === false ? "#EF4444" : "transparent",
                      color: (opt === q.correctTerm && q.isCorrect !== null) || (opt === q.selectedOption && q.isCorrect === false) ? "white" : "inherit",
                    }}>
                    {opt === q.correctTerm && q.isCorrect !== null ? "✓" :
                      opt === q.selectedOption && q.isCorrect === false ? "✗" : ""}
                  </span>
                  {opt}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export default function Quiz5Page() {
  const { locale } = useParams();
  const [mode, setMode] = useState<Mode>("karteikarten");
  const cards = initCards();

  const handleModeChange = (m: Mode) => setMode(m);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}/demo`}
              className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium flex items-center gap-1"
            >
              ← Übersicht
            </Link>
            <span className="text-slate-200">|</span>
            <span className="text-sm font-bold text-slate-700">Pflege-Fachbegriffe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: "#4F46E5" }}>
              15 Karten
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-black text-slate-800">Pflege Fachbegriffe</h1>
          <p className="text-slate-500 text-sm mt-1">
            Grundlegende medizinische und pflegerische Begriffe der Pflegeausbildung
          </p>
        </div>

        {/* Tab bar */}
        <TabBar mode={mode} onChange={handleModeChange} />

        {/* Mode content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {mode === "karteikarten" && <KarteikartenMode cards={cards} />}
            {mode === "lernen" && <LernenMode cards={cards} />}
            {mode === "test" && <TestMode cards={cards} />}
          </motion.div>
        </AnimatePresence>

        {/* Keyboard hint */}
        {mode === "karteikarten" && (
          <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 rounded border border-slate-200 bg-white font-mono">Space</kbd>
              <span>Umdrehen</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 rounded border border-slate-200 bg-white font-mono">←</kbd>
              <kbd className="px-2 py-1 rounded border border-slate-200 bg-white font-mono">→</kbd>
              <span>Navigieren</span>
            </span>
          </div>
        )}
        {mode === "lernen" && (
          <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 rounded border border-slate-200 bg-white font-mono">Enter</kbd>
              <span>Prüfen / Weiter</span>
            </span>
          </div>
        )}
      </main>
    </div>
  );
}

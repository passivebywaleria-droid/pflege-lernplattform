"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TimerQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface StepTimerProps {
  title: string;
  body?: string;
  questions: TimerQuestion[];
  timeLimitSeconds?: number;
  onNext: (correct: boolean) => void;
}

export function StepTimer({
  title,
  body,
  questions,
  timeLimitSeconds = 60,
  onNext,
}: StepTimerProps) {
  const [started, setStarted] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [timerScore, setTimerScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimitSeconds);
  const [done, setDone] = useState(false);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!started || done) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, done]);

  const answer = (i: number) => {
    const correct = i === questions[qIdx].correctIndex;
    if (correct) setTimerScore((s) => s + 1);
    setFlash(correct ? "correct" : "wrong");
    setTimeout(() => {
      setFlash(null);
      if (qIdx + 1 >= questions.length) setDone(true);
      else setQIdx((q) => q + 1);
    }, 400);
  };

  // Start screen
  if (!started) {
    return (
      <div className="space-y-6 text-center pb-20" style={{ color: "#1d1d1f" }}>
        <h2 className="text-2xl font-bold text-[#1d1d1f]">
          {title}
        </h2>
        {body && (
          <p className="text-[#1d1d1f]/70">
            {body}
          </p>
        )}
        <div className="rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/30 p-6">
          <p className="text-4xl font-bold text-[#FF3B30] mb-2">
            {timeLimitSeconds}s
          </p>
          <p className="text-sm text-[#6e6e73]">
            {questions.length} Fragen in {timeLimitSeconds} Sekunden
          </p>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="w-full rounded-2xl bg-[#FF3B30] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#FF453A] animate-pulse"
        >
          Los geht&apos;s!
        </button>
      </div>
    );
  }

  // Done screen
  if (done) {
    const totalAnswered = Math.min(qIdx + 1, questions.length);
    const allCorrect = timerScore === totalAnswered && totalAnswered === questions.length;
    return (
      <div className="space-y-6 text-center pb-20" style={{ color: "#1d1d1f" }}>
        <h2 className="text-2xl font-bold text-[#1d1d1f]">
          Blitzrunde geschafft!
        </h2>
        <div className="text-5xl font-bold text-[#0071e3]">
          {timerScore}/{totalAnswered}
        </div>
        <p className="text-[#6e6e73]">
          richtig in {timeLimitSeconds - timeLeft} Sekunden
        </p>
        <button
          onClick={() => onNext(allCorrect)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Weiter
        </button>
      </div>
    );
  }

  // Quiz screen
  const q = questions[qIdx];
  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#1d1d1f]">
          Blitzrunde
        </h2>
        <span
          className={`text-lg font-bold ${
            timeLeft <= 10
              ? "text-[#FF3B30] animate-pulse"
              : "text-[#1d1d1f]"
          }`}
        >
          {timeLeft}s
        </span>
      </div>

      {/* Timer bar */}
      <div className="h-1.5 bg-[#e8e8ed] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#FF3B30] rounded-full"
          animate={{ width: `${(timeLeft / timeLimitSeconds) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        animate={
          flash === "correct"
            ? {
                backgroundColor: [
                  "rgba(48,209,88,0.1)",
                  "rgba(0,0,0,0)",
                ],
              }
            : flash === "wrong"
              ? {
                  backgroundColor: [
                    "rgba(255,59,48,0.1)",
                    "rgba(0,0,0,0)",
                  ],
                }
              : {}
        }
        transition={{ duration: 0.4 }}
        className="rounded-2xl p-1"
      >
        <h3 className="text-lg font-bold text-[#1d1d1f] mb-4">
          {q.question}
        </h3>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <motion.button
              key={i}
              onClick={() => answer(i)}
              whileTap={{ scale: 0.97 }}
              className="w-full text-left p-3.5 rounded-xl border-2 border-[#d2d2d7] bg-white text-sm font-medium text-[#1d1d1f] hover:border-[#0071e3] transition-all"
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <p className="text-center text-xs text-[#6e6e73]">
        Frage {qIdx + 1} von {questions.length} &middot; {timerScore} richtig
      </p>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DialogOption {
  text: string;
  patientResponse: string;
  score: number;
  feedback: string;
}

interface DialogPhase {
  context: string;
  vitals?: string;
  options: DialogOption[];
}

interface StepDialogProps {
  title: string;
  body?: string;
  patientName: string;
  phases: DialogPhase[];
  onNext: (correct: boolean) => void;
}

export function StepDialog({
  title,
  body,
  patientName,
  phases,
  onNext,
}: StepDialogProps) {
  const [phase, setPhase] = useState(0);
  const [messages, setMessages] = useState<
    { sender: "patient" | "pflege"; text: string }[]
  >([]);
  const [totalScore, setTotalScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const current = phases[phase];

  useEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const choose = (opt: DialogOption) => {
    setMessages((m) => [...m, { sender: "pflege", text: opt.text }]);
    setTyping(true);
    setTotalScore((s) => s + opt.score);
    setMaxScore((s) => s + 3);

    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { sender: "patient", text: opt.patientResponse },
      ]);
      setShowFeedback(opt.feedback);

      setTimeout(() => {
        setShowFeedback(null);
        if (phase + 1 < phases.length) setPhase((p) => p + 1);
        else setFinished(true);
      }, 2500);
    }, 1200);
  };

  const scorePercent =
    maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}

      {/* Vitals monitor */}
      {current && !finished && current.vitals && (
        <div className="bg-[#1d1d1f] dark:bg-white/90 rounded-xl px-4 py-2.5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
          <span className="text-xs text-[#30D158] dark:text-[#1d1d1f] font-mono">
            {current.vitals}
          </span>
        </div>
      )}

      {/* Chat */}
      <div
        ref={chatRef}
        className="space-y-3 max-h-72 overflow-y-auto rounded-2xl bg-[#f5f5f7] dark:bg-white/5 p-4"
      >
        {messages.length === 0 && !finished && (
          <p className="text-xs text-[#6e6e73] text-center py-4">
            Waehle eine Antwort, um den Dialog zu starten.
          </p>
        )}
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${
              m.sender === "pflege" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.sender === "pflege"
                  ? "bg-[#0071e3] text-white rounded-br-md"
                  : "bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-bl-md border border-[#d2d2d7] dark:border-white/15"
              }`}
            >
              {m.sender === "patient" && (
                <span className="text-xs text-[#6e6e73] block mb-1">
                  {patientName}
                </span>
              )}
              {m.text}
            </div>
          </motion.div>
        ))}
        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white dark:bg-white/10 rounded-2xl rounded-bl-md px-4 py-3 border border-[#d2d2d7] dark:border-white/15">
              <div className="flex gap-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-[#6e6e73] animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#6e6e73] animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#6e6e73] animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Context */}
      {!finished && !typing && current && (
        <div className="rounded-xl bg-[#FF9500]/10 border border-[#FF9500]/30 p-3">
          <p className="text-xs text-[#1d1d1f] dark:text-white">
            {current.context}
          </p>
        </div>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl bg-[#0071e3]/10 border border-[#0071e3]/30 p-3"
          >
            <p className="text-xs text-[#0071e3]">{showFeedback}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choices */}
      {!finished && !showFeedback && !typing && current && (
        <div className="space-y-2">
          {current.options.map((opt, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => choose(opt)}
              className="w-full text-left px-4 py-3.5 border-2 border-[#d2d2d7] dark:border-white/15 rounded-2xl text-sm text-[#1d1d1f] dark:text-white hover:border-[#0071e3] transition-colors bg-white dark:bg-white/5"
            >
              {opt.text}
            </motion.button>
          ))}
        </div>
      )}

      {/* End */}
      {finished && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className="relative inline-flex items-center justify-center w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="currentColor"
                className="text-[#e8e8ed] dark:text-white/10"
                strokeWidth="3"
              />
              <motion.circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke={scorePercent >= 70 ? "#30D158" : "#FF9500"}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${scorePercent} 100`}
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: `${scorePercent} 100` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </svg>
            <span className="absolute text-xl font-bold text-[#1d1d1f] dark:text-white">
              {scorePercent}%
            </span>
          </div>
          <p className="text-sm text-[#6e6e73]">
            {scorePercent >= 80
              ? "Hervorragende Kommunikation!"
              : scorePercent >= 50
                ? "Gute Ansaetze, Potential nach oben."
                : "Hier gibt es Uebungsbedarf."}
          </p>

          <button
            onClick={() => onNext(scorePercent >= 70)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </motion.div>
      )}
    </div>
  );
}

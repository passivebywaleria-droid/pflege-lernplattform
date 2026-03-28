"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeedbackText } from "./feedback-text";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface DialogOption {
  text: string;
  patientResponse: string;
  score: number;
  feedback: string;
  // B1-Varianten für einfache Sprache
  textB1?: string;
  patientResponseB1?: string;
  feedbackB1?: string;
}

interface DialogPhase {
  context: string;
  speaker?: string;
  vitals?: string;
  options: DialogOption[];
  contextB1?: string;
}

interface StepDialogProps {
  title: string;
  body?: string;
  patientName: string;
  phases: DialogPhase[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
  sprachLevel?: "c1" | "b1";
}

type ChatMessage = {
  sender: "patient" | "pflege" | "system";
  text: string;
  speakerName?: string;
};

// Helper: Wählt Text basierend auf Sprachlevel
function t(c1: string, b1: string | undefined, level: "c1" | "b1"): string {
  return level === "b1" && b1 ? b1 : c1;
}

export function StepDialog({
  title,
  body,
  patientName,
  phases,
  glossar,
  onNext,
  sprachLevel = "c1",
}: StepDialogProps) {
  const [phase, setPhase] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [waitingForUser, setWaitingForUser] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [finished, setFinished] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const current = phases[phase];

  useEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing, showChoices]);

  // Erste Patient-Nachricht automatisch als Chat-Bubble anzeigen
  const showContextMessage = useCallback(() => {
    const ctx = phases[phase];
    if (!ctx) return;
    const speaker = ctx.speaker ?? patientName;
    const contextText = t(ctx.context, ctx.contextB1, sprachLevel);
    setShowChoices(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { sender: "patient", text: contextText, speakerName: speaker }]);
      setTimeout(() => setShowChoices(true), 400);
    }, 800);
  }, [phase, phases, patientName, sprachLevel]);

  // Beim Start die erste Context-Nachricht zeigen
  useEffect(() => {
    if (!initialized && phases.length > 0) {
      setInitialized(true);
      showContextMessage();
    }
  }, [initialized, phases.length, showContextMessage]);

  const choose = (opt: DialogOption) => {
    const speaker = current?.speaker ?? patientName;
    const optText = t(opt.text, opt.textB1, sprachLevel);
    const optResponse = t(opt.patientResponse, opt.patientResponseB1, sprachLevel);
    const optFeedback = t(opt.feedback, opt.feedbackB1, sprachLevel);

    setShowChoices(false);
    setMessages((m) => [...m, { sender: "pflege", text: optText }]);
    setTyping(true);
    setTotalScore((s) => s + opt.score);
    setMaxScore((s) => s + 3);

    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { sender: "patient", text: optResponse, speakerName: speaker },
      ]);
      setShowFeedback(optFeedback);
      setWaitingForUser(true);
    }, 1200);
  };

  const nextPhase = () => {
    setShowFeedback(null);
    setWaitingForUser(false);
    if (phase + 1 < phases.length) {
      const nextP = phase + 1;
      setPhase(nextP);
      const ctx = phases[nextP];
      if (ctx) {
        const speaker = ctx.speaker ?? patientName;
        const contextText = t(ctx.context, ctx.contextB1, sprachLevel);
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setMessages((m) => [...m, { sender: "patient", text: contextText, speakerName: speaker }]);
          setTimeout(() => setShowChoices(true), 400);
        }, 800);
      }
    } else {
      setFinished(true);
    }
  };

  const scorePercent =
    maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  return (
    <div className="space-y-4 pb-20" style={{ color: "#1d1d1f" }}>
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#1d1d1f]">
          {title}
        </h2>
        {body && (
          <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
            <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
          </p>
        )}
      </div>

      {/* Vitals monitor */}
      {current && !finished && current.vitals && (
        <div className="bg-[#1d1d1f] rounded-xl px-4 py-2.5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
          <span className="text-xs text-[#30D158] font-mono">
            {current.vitals}
          </span>
        </div>
      )}

      {/* Chat — WhatsApp-Style */}
      <div
        ref={chatRef}
        className="space-y-3 max-h-[50vh] overflow-y-auto rounded-2xl bg-[#efeae2] p-4"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      >
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`flex ${
              m.sender === "pflege" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                m.sender === "pflege"
                  ? "bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-tr-md"
                  : "bg-white text-[#111b21] rounded-2xl rounded-tl-md"
              }`}
            >
              {m.sender === "patient" && (
                <span className="text-xs font-semibold text-[#0071e3] block mb-0.5">
                  {m.speakerName ?? patientName}
                </span>
              )}
              {m.sender === "pflege" && (
                <span className="text-xs font-semibold text-[#30D158] block mb-0.5">
                  Du (Pflege)
                </span>
              )}
              {m.text}
              <span className="block text-right text-[10px] text-[#667781] mt-1">
                {new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span
                  className="w-2 h-2 rounded-full bg-[#667781] animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#667781] animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#667781] animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/20 p-4"
          >
            <p className="text-xs font-semibold text-[#0071e3] mb-1">Feedback</p>
            <p className="text-sm text-[#1d1d1f] leading-relaxed">
              <FeedbackText sprachLevel={sprachLevel}>{showFeedback}</FeedbackText>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Weiter-Button nach Feedback */}
      {waitingForUser && showFeedback && (
        <button
          onClick={nextPhase}
          className="w-full rounded-2xl bg-[#f5f5f7] px-6 py-4 text-base font-semibold text-[#1d1d1f] transition-all active:scale-[0.98]"
        >
          Weiter
        </button>
      )}

      {/* Choices — als Antwort-Vorschläge unter dem Chat */}
      <AnimatePresence>
        {showChoices && !finished && !showFeedback && !typing && current && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="space-y-2"
          >
            <p className="text-xs text-[#6e6e73] font-medium px-1">Wähle deine Antwort:</p>
            {current.options.map((opt, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => choose(opt)}
                className="w-full text-left px-4 py-3.5 border-2 border-[#d2d2d7] rounded-2xl text-sm text-[#1d1d1f] hover:border-[#0071e3] transition-colors bg-white"
              >
                {t(opt.text, opt.textB1, sprachLevel)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* End — Ergebnis */}
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
                className="text-[#e8e8ed]"
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
            <span className="absolute text-xl font-bold text-[#1d1d1f]">
              {scorePercent}%
            </span>
          </div>
          <p className="text-sm text-[#6e6e73]">
            {scorePercent >= 80
              ? "Hervorragende Kommunikation!"
              : scorePercent >= 50
                ? "Gute Ansätze, Potential nach oben."
                : "Hier gibt es Übungsbedarf."}
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
interface RevealCard {
  id: string;
  label: string;
  content: string;
  contentB1?: string;
  icon?: string;
}

interface StepRevealProps {
  title: string;
  body?: string;
  instruction: string;
  cards: RevealCard[];
  revealMode: "free" | "sequential";
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

export function StepReveal({
  title,
  body,
  instruction,
  cards,
  revealMode,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepRevealProps) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allRevealed = revealed.size === cards.length;
  const nextSequentialIdx = cards.findIndex((c) => !revealed.has(c.id));

  const canReveal = (card: RevealCard) => {
    if (revealMode === "free") return true;
    return cards[nextSequentialIdx]?.id === card.id;
  };

  const handleReveal = (card: RevealCard) => {
    if (revealed.has(card.id)) {
      setExpandedId(expandedId === card.id ? null : card.id);
      return;
    }
    if (!canReveal(card)) return;
    setRevealed((prev) => new Set(prev).add(card.id));
    setExpandedId(card.id);
  };

  return (
    <div className="space-y-5 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-sm" style={{ color: "#6e6e73" }}>{instruction}</p>

      {/* Counter */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[#0071e3]">
          {revealed.size} von {cards.length} enthüllt
        </span>
        <div className="h-1.5 flex-1 mx-3 bg-[#e8e8ed] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#0071e3] rounded-full"
            animate={{ width: `${(revealed.size / cards.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {cards.map((card, i) => {
          const isRevealed = revealed.has(card.id);
          const isExpanded = expandedId === card.id;
          const isLocked = !isRevealed && !canReveal(card);
          const content =
            sprachLevel === "b1" && card.contentB1
              ? card.contentB1
              : card.content;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => handleReveal(card)}
              className={`rounded-2xl border-2 overflow-hidden transition-all ${
                isLocked
                  ? "border-[#e8e8ed] bg-[#f5f5f7] opacity-50 cursor-not-allowed"
                  : isRevealed
                    ? "border-[#0071e3]/30 bg-white cursor-pointer shadow-sm"
                    : "border-[#d2d2d7] bg-white cursor-pointer hover:border-[#0071e3]/50 hover:shadow-sm"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-4">
                <span className="text-xl">
                  {isRevealed
                    ? card.icon || "\u2705"
                    : isLocked
                      ? "\uD83D\uDD12"
                      : "\uD83D\uDC49"}
                </span>
                <span
                  className={`font-medium text-sm flex-1 ${
                    isRevealed ? "text-[#1d1d1f]" : "text-[#6e6e73]"
                  }`}
                >
                  {card.label}
                </span>
                {isRevealed && (
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-[#6e6e73] text-xs"
                  >
                    &#9660;
                  </motion.span>
                )}
              </div>

              {/* Content */}
              <AnimatePresence>
                {isRevealed && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0">
                      <div className="border-t border-[#e8e8ed] pt-3">
                        <p className="text-sm text-[#1d1d1f]/80 leading-relaxed">
                          {content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Continue — immer sichtbar, Reveal ist Info-Step */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => onNext(true)}
        className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
      >
        Weiter
      </motion.button>
    </div>
  );
}

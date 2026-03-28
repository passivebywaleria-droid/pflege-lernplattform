"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { TtsButton } from "./tts-button";

interface StepTextProps {
  title: string;
  body: string;
  fallbezug?: string;
  glossarBegriffe?: string[];
  imageUrl?: string;
  imageAlt?: string;
  wusstestDuDas?: string;
  carousel?: boolean;
  onNext: () => void;
}

function splitIntoCards(body: string): string[] {
  // Erst nach Doppel-Absatz splitten
  const paragraphs = body.split("\n\n").filter((p) => p.trim().length > 0);
  if (paragraphs.length >= 2) return paragraphs;

  // Sonst nach Sätzen (je 2-3 pro Karte)
  const sentences = body.match(/[^.!?]+[.!?]+/g) || [body];
  const cards: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    cards.push(sentences.slice(i, i + 2).join(" ").trim());
  }
  return cards.length > 0 ? cards : [body];
}

function CarouselView({
  title,
  cards,
  wusstestDuDas,
  onNext,
}: {
  title: string;
  cards: string[];
  wusstestDuDas?: string;
  onNext: () => void;
}) {
  const allCards = wusstestDuDas ? [...cards, wusstestDuDas] : cards;
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(0);
  const isLast = activeCard === allCards.length - 1;
  const isWusstestDuDas = wusstestDuDas && activeCard === allCards.length - 1;

  const goToCard = useCallback(
    (next: number) => {
      if (next < 0 || next >= allCards.length) return;
      setDirection(next > activeCard ? 1 : -1);
      setActiveCard(next);
    },
    [activeCard, allCards.length],
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      if (info.offset.x < -50 && activeCard < allCards.length - 1) {
        goToCard(activeCard + 1);
      } else if (info.offset.x > 50 && activeCard > 0) {
        goToCard(activeCard - 1);
      }
    },
    [activeCard, allCards.length, goToCard],
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="space-y-5 pb-20" style={{ color: "#1d1d1f" }}>
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-2xl font-bold text-[#1d1d1f]">
          {title}
        </h2>
        <TtsButton text={`${title}. ${allCards[activeCard]}`} className="shrink-0 mt-1" />
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-[#d2d2d7] min-h-[140px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeCard}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="p-5"
          >
            {isWusstestDuDas ? (
              <div>
                <p className="text-xs font-bold text-[#FFD60A] mb-2 uppercase tracking-wide">
                  Wusstest du?
                </p>
                <p className="text-sm text-[#1d1d1f]/80 leading-relaxed">
                  {allCards[activeCard]}
                </p>
              </div>
            ) : (
              <p className="text-[15px] text-[#1d1d1f]/80 leading-relaxed whitespace-pre-line">
                {allCards[activeCard]}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {allCards.map((_, i) => (
          <button
            key={i}
            onClick={() => goToCard(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeCard
                ? "w-6 bg-[#0071e3]"
                : "w-2 bg-[#d2d2d7]"
            }`}
          />
        ))}
      </div>

      {/* Navigation */}
      {isLast ? (
        <button
          onClick={onNext}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Weiter
        </button>
      ) : (
        <button
          onClick={() => goToCard(activeCard + 1)}
          className="w-full rounded-2xl bg-[#f5f5f7] px-6 py-4 text-base font-semibold text-[#1d1d1f] transition-all active:scale-[0.98]"
        >
          Naechste Karte ({activeCard + 1}/{allCards.length})
        </button>
      )}
    </div>
  );
}

export function StepText({
  title,
  body,
  fallbezug,
  glossarBegriffe,
  imageUrl,
  imageAlt,
  wusstestDuDas,
  carousel,
  onNext,
}: StepTextProps) {
  const [showFunFact, setShowFunFact] = useState(false);

  // Carousel-Modus: bei carousel=true ODER langem Body (>3 Absätze)
  const cards = splitIntoCards(body);
  const useCarousel = carousel || cards.length >= 3;

  if (useCarousel) {
    return (
      <CarouselView
        title={title}
        cards={cards}
        wusstestDuDas={wusstestDuDas}
        onNext={onNext}
      />
    );
  }

  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-2xl font-bold text-[#1d1d1f]">
          {title}
        </h2>
        <TtsButton text={`${title}. ${body}`} className="shrink-0 mt-1" />
      </div>

      <div className="space-y-4 text-[#1d1d1f]/80 leading-relaxed">
        {body.split("\n\n").map((paragraph, i) => (
          <div key={i}>
            {paragraph.startsWith("- ") || paragraph.startsWith("1.") ? (
              <ul className="space-y-2 pl-1">
                {paragraph.split("\n").map((line, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-[#0071e3] mt-1 shrink-0">
                      {line.match(/^\d\./) ? line.match(/^\d\./)![0] : "•"}
                    </span>
                    <span>{line.replace(/^[-\d.]\s*/, "")}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="whitespace-pre-line">{paragraph}</p>
            )}
          </div>
        ))}
      </div>

      {/* Inline-Illustration */}
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-[#d2d2d7]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-auto"
          />
          {imageAlt && (
            <p className="text-xs text-[#86868b] text-center py-2 px-4">
              {imageAlt}
            </p>
          )}
        </motion.div>
      )}

      {/* Wusstest du? — Collapsible */}
      {wusstestDuDas && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setShowFunFact(!showFunFact)}
            className="w-full flex items-center justify-between rounded-2xl bg-[#FFD60A]/10 border border-[#FFD60A]/30 px-4 py-3 transition-colors active:bg-[#FFD60A]/15"
          >
            <span className="text-sm font-medium text-[#1d1d1f]">
              Wusstest du?
            </span>
            <span className="text-sm text-[#6e6e73]">
              {showFunFact ? "▲" : "▼"}
            </span>
          </button>
          {showFunFact && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="rounded-b-2xl bg-[#FFD60A]/5 border border-t-0 border-[#FFD60A]/30 px-4 py-3"
            >
              <p className="text-sm text-[#1d1d1f]/70 leading-relaxed">
                {wusstestDuDas}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}

      {fallbezug && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4"
        >
          <p className="text-sm font-medium text-[#0071e3] mb-1">
            Fallbezug
          </p>
          <p className="text-sm text-[#1d1d1f]/70">
            {fallbezug}
          </p>
        </motion.div>
      )}

      {glossarBegriffe && glossarBegriffe.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {glossarBegriffe.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1 rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#6e6e73]"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={onNext}
        className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
      >
        Weiter
      </button>
    </div>
  );
}

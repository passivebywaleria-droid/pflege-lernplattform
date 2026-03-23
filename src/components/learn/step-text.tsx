"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TtsButton } from "./tts-button";

interface StepTextProps {
  title: string;
  body: string;
  fallbezug?: string;
  glossarBegriffe?: string[];
  imageUrl?: string;
  imageAlt?: string;
  wusstestDuDas?: string;
  onNext: () => void;
}

export function StepText({
  title,
  body,
  fallbezug,
  glossarBegriffe,
  imageUrl,
  imageAlt,
  wusstestDuDas,
  onNext,
}: StepTextProps) {
  const [showFunFact, setShowFunFact] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
          {title}
        </h2>
        <TtsButton text={`${title}. ${body}`} className="shrink-0 mt-1" />
      </div>

      <div className="space-y-4 text-[#1d1d1f]/80 dark:text-white/80 leading-relaxed">
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
          className="rounded-2xl overflow-hidden border border-[#d2d2d7] dark:border-white/10"
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
            <span className="text-sm font-medium text-[#1d1d1f] dark:text-white">
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
              <p className="text-sm text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed">
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
          className="rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4 dark:bg-[#0071e3]/10"
        >
          <p className="text-sm font-medium text-[#0071e3] mb-1">
            Fallbezug
          </p>
          <p className="text-sm text-[#1d1d1f]/70 dark:text-white/70">
            {fallbezug}
          </p>
        </motion.div>
      )}

      {glossarBegriffe && glossarBegriffe.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {glossarBegriffe.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1 rounded-full bg-[#f5f5f7] dark:bg-white/10 px-3 py-1 text-xs font-medium text-[#6e6e73] dark:text-white/60"
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

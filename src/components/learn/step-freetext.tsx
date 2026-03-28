"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepFreetextProps {
  title: string;
  body?: string;
  fragetext: string;
  musterantwort?: string;
  bewertungskriterien?: string[];
  satzanfaengeB1?: string[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

export function StepFreetext({
  title,
  body,
  fragetext,
  musterantwort,
  bewertungskriterien,
  satzanfaengeB1,
  glossar,
  onNext,
}: StepFreetextProps) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
  const minWords = 15;

  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[#1d1d1f]">
        {fragetext}
      </p>

      {satzanfaengeB1 && satzanfaengeB1.length > 0 && !submitted && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-[#6e6e73]">Satzanfaenge:</p>
          <div className="flex flex-wrap gap-2">
            {satzanfaengeB1.map((sa) => (
              <button
                key={sa}
                onClick={() =>
                  setText((prev) => (prev ? `${prev} ${sa}` : sa))
                }
                className="rounded-full bg-[#0071e3]/10 px-3 py-1.5 text-sm text-[#0071e3] font-medium active:bg-[#0071e3]/20 transition-colors"
              >
                {sa}
              </button>
            ))}
          </div>
        </div>
      )}

      {!submitted && (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Schreibe hier deine Antwort..."
            rows={5}
            className="w-full rounded-2xl border-2 border-[#d2d2d7] bg-white p-4 text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#0071e3] focus:outline-none resize-none transition-colors"
          />
          <div className="flex items-center justify-between">
            <p
              className={`text-sm ${wordCount >= minWords ? "text-[#30D158]" : "text-[#6e6e73]"}`}
            >
              {wordCount} Woerter {wordCount < minWords && `(mind. ${minWords})`}
            </p>
          </div>
        </>
      )}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={wordCount < minWords}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Antwort abgeben
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4 space-y-3"
          >
            <p className="font-semibold text-[#0071e3]">
              ✍️ Deine Antwort wurde gespeichert
            </p>
            <p className="text-sm text-[#1d1d1f]/70 whitespace-pre-line bg-white/50 rounded-xl p-3">
              {text}
            </p>
          </motion.div>

          {bewertungskriterien && bewertungskriterien.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl bg-[#AF52DE]/5 border border-[#AF52DE]/15 p-4"
            >
              <p className="font-semibold text-[#AF52DE] mb-2">
                🤖 KI-Feedback (kommt bald)
              </p>
              <p className="text-sm text-[#6e6e73] mb-2">
                In der fertigen Plattform bewertet die KI deine Antwort nach:
              </p>
              <ul className="space-y-1">
                {bewertungskriterien.map((k, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#6e6e73] flex items-start gap-2"
                  >
                    <span className="text-[#AF52DE]">•</span>
                    {k}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {musterantwort && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-[#30D158]/5 border border-[#30D158]/15 p-4"
            >
              <p className="font-semibold text-[#30D158] mb-2">
                💡 Musterantwort
              </p>
              <p className="text-sm text-[#1d1d1f]/70 italic">
                &ldquo;{musterantwort}&rdquo;
              </p>
            </motion.div>
          )}

          <button
            onClick={() => onNext(true)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";

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
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">
        <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
      </p>

      {satzanfaengeB1 && satzanfaengeB1.length > 0 && !submitted && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-[var(--lern-text-secondary)]">Satzanfänge:</p>
          <div className="flex flex-wrap gap-2">
            {satzanfaengeB1.map((sa) => (
              <button
                key={sa}
                onClick={() =>
                  setText((prev) => (prev ? `${prev} ${sa}` : sa))
                }
                className="rounded-full bg-[var(--lern-accent)]/10 px-3 py-1.5 text-sm text-[var(--lern-accent)] font-medium active:bg-[var(--lern-accent)]/20 transition-colors"
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
            aria-label="Freitextantwort"
            className="w-full rounded-2xl border-2 border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-4 text-[var(--lern-text-primary)] placeholder:text-[var(--lern-text-tertiary)] focus:border-[var(--lern-accent)] focus:outline-2 focus:outline-[var(--lern-accent)] resize-none transition-colors"
          />
          <div className="flex items-center justify-between">
            <p
              className={`text-sm ${wordCount >= minWords ? "text-[var(--lern-success)]" : "text-[var(--lern-text-secondary)]"}`}
            >
              {wordCount} Wörter {wordCount < minWords && `(mind. ${minWords})`}
            </p>
          </div>
        </>
      )}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={wordCount < minWords}
          aria-label="Antwort abgeben"
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
        >
          Antwort abgeben
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-4 space-y-3"
          >
            <p className="font-semibold text-[var(--lern-accent)]">
              ✍️ Deine Antwort wurde gespeichert
            </p>
            <p className="text-sm text-[var(--lern-text-primary)]/70 whitespace-pre-line bg-[var(--lern-bg-primary)]/50 rounded-xl p-3">
              {text}
            </p>
          </motion.div>

          {bewertungskriterien && bewertungskriterien.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl bg-[var(--lern-info)]/5 border border-[var(--lern-info)]/15 p-4"
            >
              <p className="font-semibold text-[var(--lern-info)] mb-2">
                🤖 KI-Feedback (kommt bald)
              </p>
              <p className="text-sm text-[var(--lern-text-secondary)] mb-2">
                In der fertigen Plattform bewertet die KI deine Antwort nach:
              </p>
              <ul className="space-y-1">
                {bewertungskriterien.map((k, i) => (
                  <li
                    key={i}
                    className="text-sm text-[var(--lern-text-secondary)] flex items-start gap-2"
                  >
                    <span className="text-[var(--lern-info)]">•</span>
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
              className="rounded-2xl bg-[var(--lern-success)]/5 border border-[var(--lern-success)]/15 p-4"
            >
              <p className="font-semibold text-[var(--lern-success)] mb-2">
                <HandDrawnIcon name="lightbulb" size={16} color="#D4956A" className="inline-block mr-1" /> Musterantwort
              </p>
              <p className="text-sm text-[var(--lern-text-primary)]/70 italic">
                &ldquo;{musterantwort}&rdquo;
              </p>
            </motion.div>
          )}

          <button
            onClick={() => onNext(true)}
            aria-label="Weiter zum nächsten Schritt"
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}

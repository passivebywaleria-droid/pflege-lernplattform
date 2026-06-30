"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";
import { StepShell } from "./step-shell";
import { StepActionBar } from "./step-action-bar";

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

  const safeTitle = title ?? "";
  const safeFragetext = fragetext ?? "";
  const titleEqualsFrage =
    safeTitle.trim().toLowerCase() === safeFragetext.trim().toLowerCase();
  const question = titleEqualsFrage
    ? safeFragetext
    : safeTitle || safeFragetext;

  return (
    <div style={{ color: "var(--lern-text-primary)" }}>
      <StepShell
        kindLabel="Freitext"
        question={question}
        body={body}
        glossar={glossar}
      >
        {!titleEqualsFrage && title && (
          <p className="-mt-2 mb-3 text-sm font-medium text-[var(--lern-text-primary)]">
            <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
          </p>
        )}

        {satzanfaengeB1 && satzanfaengeB1.length > 0 && !submitted && (
          <div className="mb-3 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              Satzanfänge
            </p>
            <div className="flex flex-wrap gap-1.5">
              {satzanfaengeB1.map((sa) => (
                <button
                  key={sa}
                  onClick={() =>
                    setText((prev) => (prev ? `${prev} ${sa}` : sa))
                  }
                  className="rounded-full bg-[var(--lern-accent-bg)] px-3 py-1 text-xs text-[var(--lern-accent)] font-medium active:bg-[var(--lern-accent)]/20 transition-colors"
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
              className="w-full rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3 text-sm text-[var(--lern-text-primary)] placeholder:text-[var(--lern-text-tertiary)] focus:border-[var(--lern-accent)] focus:outline-2 focus:outline-[var(--lern-accent)] resize-none transition-colors"
            />
            <p
              className={`mt-2 text-xs ${
                wordCount >= minWords
                  ? "text-[var(--lern-success)]"
                  : "text-[var(--lern-text-tertiary)]"
              }`}
            >
              {wordCount} Wörter {wordCount < minWords && `· mind. ${minWords}`}
            </p>
          </>
        )}

        {submitted && (
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-3 space-y-2"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
                Deine Antwort
              </p>
              <p className="text-sm text-[var(--lern-text-primary)]/80 whitespace-pre-line bg-[var(--lern-bg-primary)] rounded-lg p-2.5">
                {text}
              </p>
            </motion.div>

            {bewertungskriterien && bewertungskriterien.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl bg-[var(--lern-info)]/5 border border-[var(--lern-info)]/15 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lern-info)] mb-2">
                  KI-Feedback (kommt bald)
                </p>
                <ul className="space-y-1">
                  {bewertungskriterien.map((k, i) => (
                    <li
                      key={i}
                      className="text-xs text-[var(--lern-text-secondary)] flex items-start gap-2"
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
                transition={{ delay: 0.2 }}
                className="rounded-xl bg-[var(--lern-success)]/5 border border-[var(--lern-success)]/15 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lern-success)] mb-1">
                  <HandDrawnIcon
                    name="lightbulb"
                    size={12}
                    color="#D4956A"
                    className="inline-block mr-1 align-middle"
                  />
                  Musterantwort
                </p>
                <p className="text-sm text-[var(--lern-text-primary)]/80 italic">
                  &ldquo;{musterantwort.replace(/\s*\[I Care[^\]]*\]/g, "")}&rdquo;
                </p>
              </motion.div>
            )}
          </div>
        )}
      </StepShell>

      {/* Action-Bar fix unten */}
      {!submitted ? (
        <StepActionBar>
          <button
            onClick={() => setSubmitted(true)}
            disabled={wordCount < minWords}
            aria-label="Antwort abgeben"
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
          >
            Antwort abgeben
          </button>
        </StepActionBar>
      ) : (
        <StepActionBar>
          <button
            onClick={() => onNext(true)}
            aria-label="Weiter zum nächsten Schritt"
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52] focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </div>
  );
}

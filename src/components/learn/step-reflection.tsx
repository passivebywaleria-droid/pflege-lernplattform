"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";

interface StepReflectionProps {
  title: string;
  body?: string;
  prompt: string;
  placeholder: string;
  systemPrompt: string;
  glossar?: GlossarEntry[];
  onNext: () => void;
  onTextSubmit?: (text: string) => void;
}

export function StepReflection({
  title,
  body,
  prompt,
  placeholder,
  systemPrompt,
  glossar,
  onNext,
  onTextSubmit,
}: StepReflectionProps) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [kiFeedback, setKiFeedback] = useState<string | null>(null);

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const handleSubmit = async () => {
    setSubmitted(true);
    setLoading(true);
    onTextSubmit?.(text);

    try {
      // Nebius KI-Feedback (Llama 3.3 70B)
      const response = await fetch("/api/ki-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt,
          userMessage: text,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setKiFeedback(data.feedback);
      } else {
        // Fallback bei API-Fehler
        setKiFeedback(
          "Danke für deine Gedanken! Lass uns gemeinsam herausfinden, was hinter diesem Thema steckt."
        );
      }
    } catch {
      // Offline-Fallback
      setKiFeedback(
        "Ich bin gerade offline. Deine Gedanken wurden gespeichert — ich antworte dir sobald du wieder online bist."
      );
    } finally {
      setLoading(false);
    }
  };

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

      <div className="rounded-2xl bg-[var(--lern-info)]/5 border border-[var(--lern-info)]/15 p-4">
        <p className="text-lg font-medium text-[var(--lern-text-primary)]">
          {renderBold(prompt)}
        </p>
      </div>

      {!submitted && (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={4}
            aria-label="Reflexion schreiben"
            className="w-full rounded-2xl border-2 border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-4 text-[var(--lern-text-primary)] placeholder:text-[var(--lern-text-tertiary)] focus:border-[var(--lern-info)] focus:outline-2 focus:outline-[var(--lern-accent)] resize-none transition-colors"
          />
          <p className="text-sm text-[var(--lern-text-secondary)]">
            {wordCount > 0
              ? `${wordCount} Wörter`
              : "Schreib einfach drauf los — es gibt kein richtig oder falsch."}
          </p>
          <button
            onClick={handleSubmit}
            disabled={wordCount < 3}
            aria-label="Gedanken teilen"
            className="w-full rounded-2xl bg-[var(--lern-info)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:brightness-90 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
          >
            Gedanken teilen
          </button>
        </>
      )}

      {submitted && (
        <div className="space-y-4">
          {/* Eigener Text */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[var(--lern-bg)] p-4"
          >
            <p className="text-xs font-medium text-[var(--lern-text-secondary)] mb-2">
              Deine Gedanken:
            </p>
            <p className="text-sm text-[var(--lern-text-primary)]/70 italic">
              &ldquo;{text}&rdquo;
            </p>
          </motion.div>

          {/* KI-Feedback */}
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl bg-[var(--lern-info)]/5 border border-[var(--lern-info)]/15 p-4 flex items-center gap-3"
            >
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--lern-info)] border-t-transparent" />
              <p className="text-sm text-[var(--lern-info)] font-medium">
                Lese deine Gedanken...
              </p>
            </motion.div>
          ) : (
            kiFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-[var(--lern-info)]/5 border border-[var(--lern-info)]/15 p-4"
              >
                <p className="text-sm font-medium text-[var(--lern-info)] mb-2">
                  Feedback
                </p>
                <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed">
                  {renderBold(kiFeedback)}
                </p>
              </motion.div>
            )
          )}

          {!loading && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={onNext}
              aria-label="Weiter zum nächsten Schritt"
              className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[var(--lern-accent)] focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
            >
              Weiter
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface StepReflectionProps {
  title: string;
  body?: string;
  prompt: string;
  placeholder: string;
  systemPrompt: string;
  onNext: () => void;
  onTextSubmit?: (text: string) => void;
}

export function StepReflection({
  title,
  body,
  prompt,
  placeholder,
  systemPrompt,
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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}

      <div className="rounded-2xl bg-[#AF52DE]/5 border border-[#AF52DE]/15 p-4">
        <p className="text-lg font-medium text-[#1d1d1f] dark:text-white">
          {prompt}
        </p>
      </div>

      {!submitted && (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={4}
            className="w-full rounded-2xl border-2 border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5 p-4 text-[#1d1d1f] dark:text-white placeholder:text-[#86868b] focus:border-[#AF52DE] focus:outline-none resize-none transition-colors"
          />
          <p className="text-sm text-[#6e6e73]">
            {wordCount > 0
              ? `${wordCount} Wörter`
              : "Schreib einfach drauf los — es gibt kein richtig oder falsch."}
          </p>
          <button
            onClick={handleSubmit}
            disabled={wordCount < 3}
            className="w-full rounded-2xl bg-[#AF52DE] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#9B3DC8] disabled:opacity-40 disabled:cursor-not-allowed"
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
            className="rounded-2xl bg-[#f5f5f7] dark:bg-white/5 p-4"
          >
            <p className="text-xs font-medium text-[#6e6e73] mb-2">
              Deine Gedanken:
            </p>
            <p className="text-sm text-[#1d1d1f]/70 dark:text-white/70 italic">
              &ldquo;{text}&rdquo;
            </p>
          </motion.div>

          {/* KI-Feedback */}
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl bg-[#AF52DE]/5 border border-[#AF52DE]/15 p-4 flex items-center gap-3"
            >
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#AF52DE] border-t-transparent" />
              <p className="text-sm text-[#AF52DE] font-medium">
                Lese deine Gedanken...
              </p>
            </motion.div>
          ) : (
            kiFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-[#AF52DE]/5 border border-[#AF52DE]/15 p-4"
              >
                <p className="text-sm font-medium text-[#AF52DE] mb-2">
                  Feedback
                </p>
                <p className="text-sm text-[#1d1d1f]/80 dark:text-white/80 leading-relaxed">
                  {kiFeedback}
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
              className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
            >
              Weiter
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
}

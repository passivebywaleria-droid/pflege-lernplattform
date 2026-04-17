"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { CrowdPollData, GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepCrowdPollProps {
  title: string;
  body?: string;
  pollData: CrowdPollData;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: () => void;
}

export function StepCrowdPoll({
  title,
  body,
  pollData,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepCrowdPollProps) {
  const [submitted, setSubmitted] = useState(false);
  const [freetextValue, setFreetextValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const question =
    sprachLevel === "b1" && pollData.questionB1
      ? pollData.questionB1
      : pollData.question;

  const placeholder =
    sprachLevel === "b1" && pollData.placeholderB1
      ? pollData.placeholderB1
      : pollData.placeholder ?? "Schreibe hier...";

  const fazit =
    sprachLevel === "b1" && pollData.fazitB1
      ? pollData.fazitB1
      : pollData.fazit;

  const totalVotes =
    pollData.totalVotes ??
    pollData.seedResponses.reduce((sum, r) => sum + r.count, 0);

  const maxCount = Math.max(...pollData.seedResponses.map((r) => r.count));

  const wordCount = freetextValue
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
  const minWords = 3;

  const canSubmit =
    pollData.inputType === "freetext"
      ? wordCount >= minWords
      : selectedOptions.length > 0;

  function handleOptionToggle(id: string) {
    if (pollData.allowMultiple) {
      setSelectedOptions((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    } else {
      setSelectedOptions([id]);
    }
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  // ── Input Phase ──
  if (!submitted) {
    return (
      <div
        className="space-y-6 pb-20"
        style={{ color: "var(--lern-text-primary)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">📊</span>
          <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
            {title}
          </h2>
        </div>

        {body && (
          <p className="text-[var(--lern-text-primary)]/70 leading-relaxed">
            <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
          </p>
        )}

        <p className="text-lg font-medium text-[var(--lern-text-primary)]">
          <FachbegriffText glossar={glossar ?? []}>
            {question}
          </FachbegriffText>
        </p>

        {/* Freetext-Modus */}
        {pollData.inputType === "freetext" && (
          <>
            <textarea
              value={freetextValue}
              onChange={(e) => setFreetextValue(e.target.value)}
              placeholder={placeholder}
              rows={4}
              aria-label="Deine Antwort"
              className="w-full rounded-2xl border-2 border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-4 text-[var(--lern-text-primary)] placeholder:text-[var(--lern-text-tertiary)] focus:border-[var(--lern-accent)] focus:outline-2 focus:outline-[var(--lern-accent)] resize-none transition-colors"
            />
            <p
              className={`text-sm ${
                wordCount >= minWords
                  ? "text-[var(--lern-success)]"
                  : "text-[var(--lern-text-secondary)]"
              }`}
            >
              {wordCount} Wörter {wordCount < minWords && `(mind. ${minWords})`}
            </p>
          </>
        )}

        {/* Choice-Modus */}
        {pollData.inputType === "choice" && pollData.options && (
          <div className="space-y-2">
            {pollData.options.map((opt) => {
              const isSelected = selectedOptions.includes(opt.id);
              const label =
                sprachLevel === "b1" && opt.textB1 ? opt.textB1 : opt.text;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleOptionToggle(opt.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    isSelected
                      ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] font-medium"
                      : "bg-[var(--lern-bg-primary)] border-[var(--lern-border)] hover:border-[var(--lern-accent)]/40"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          aria-label="Abstimmung abgeben"
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
        >
          Abstimmen
        </button>
      </div>
    );
  }

  // ── Results Phase ──
  return (
    <div
      className="space-y-6 pb-20"
      style={{ color: "var(--lern-text-primary)" }}
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl">📊</span>
        <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
          {title}
        </h2>
      </div>

      {/* Eigene Antwort */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[var(--lern-accent)]/8 border border-[var(--lern-accent)]/20 p-4"
      >
        <p className="text-sm font-semibold text-[var(--lern-accent)] mb-1">
          🙋 Deine Antwort
        </p>
        <p className="text-[var(--lern-text-primary)]">
          {pollData.inputType === "freetext"
            ? freetextValue
            : pollData.options
                ?.filter((o) => selectedOptions.includes(o.id))
                .map((o) =>
                  sprachLevel === "b1" && o.textB1 ? o.textB1 : o.text
                )
                .join(", ")}
        </p>
      </motion.div>

      {/* Ergebnisse der anderen */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <p className="text-sm font-semibold text-[var(--lern-text-secondary)]">
          👥 {totalVotes} andere Schüler haben geantwortet:
        </p>

        <div className="space-y-2">
          {pollData.seedResponses
            .slice()
            .sort((a, b) => b.count - a.count)
            .map((response, idx) => {
              const percentage = Math.round((response.count / totalVotes) * 100);
              const barWidth = Math.round((response.count / maxCount) * 100);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className={`rounded-xl p-3 ${
                    response.highlight
                      ? "bg-[var(--lern-accent)]/8 border border-[var(--lern-accent)]/15"
                      : "bg-[var(--lern-bg-secondary)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <p
                      className={`text-sm ${
                        response.highlight
                          ? "font-semibold text-[var(--lern-text-primary)]"
                          : "text-[var(--lern-text-primary)]"
                      }`}
                    >
                      {response.text}
                    </p>
                    <span className="text-xs font-medium text-[var(--lern-text-secondary)] ml-2 shrink-0">
                      {percentage}%
                    </span>
                  </div>

                  {/* Balken */}
                  <div className="h-2 rounded-full bg-[var(--lern-border)]/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidth}%` }}
                      transition={{
                        delay: 0.5 + idx * 0.08,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full ${
                        response.highlight
                          ? "bg-[var(--lern-accent)]"
                          : "bg-[var(--lern-accent)]/50"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
        </div>
      </motion.div>

      {/* Fazit */}
      {fazit && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="rounded-2xl bg-[var(--lern-info)]/5 border border-[var(--lern-info)]/15 p-4"
        >
          <p className="text-sm font-semibold text-[var(--lern-info)] mb-1">
            💡 Einordnung
          </p>
          <p className="text-sm text-[var(--lern-text-primary)]/80">
            {fazit}
          </p>
        </motion.div>
      )}

      <button
        onClick={() => onNext()}
        aria-label="Weiter zum nächsten Schritt"
        className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
      >
        Weiter
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";

interface TableFillInCell {
  value: string;
  isBlank: boolean;
  options?: string[];
}

interface StepTableFillInProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  instruction: string;
  headers: string[];
  rows: TableFillInCell[][];
  onNext: (correct: boolean) => void;
}

export function StepTableFillIn({
  title,
  body,
  glossar: _glossar,
  instruction,
  headers,
  rows,
  onNext,
}: StepTableFillInProps) {
  // Zustand: user-Antworten als [row][col] = string
  const [answers, setAnswers] = useState<string[][]>(
    rows.map((row) => row.map((cell) => (cell.isBlank ? "" : cell.value)))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (rowIdx: number, colIdx: number, value: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const copy = prev.map((r) => [...r]);
      copy[rowIdx][colIdx] = value;
      return copy;
    });
  };

  // Korrektheit prüfen
  const results = rows.map((row, ri) =>
    row.map((cell, ci) => {
      if (!cell.isBlank) return true;
      return answers[ri][ci].trim().toLowerCase() === cell.value.trim().toLowerCase();
    })
  );
  const totalBlanks = rows.flat().filter((c) => c.isBlank).length;
  const correctBlanks = results.flat().filter(Boolean).length - rows.flat().filter((c) => !c.isBlank).length;
  const allFilled = rows.every((row, ri) =>
    row.every((cell, ci) => !cell.isBlank || answers[ri][ci].trim() !== "")
  );

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">{body}</p>
      )}

      <div className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-4">
        <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>
      </div>

      {/* Tabelle */}
      <div className="overflow-x-auto rounded-2xl border border-[var(--lern-border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--lern-accent)]/8">
              {headers.map((h, i) => (
                <th key={i} className="px-3 py-2 text-left font-semibold text-[var(--lern-accent)] border-b border-[var(--lern-border)]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-[var(--lern-border)] last:border-b-0">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2">
                    {cell.isBlank ? (
                      cell.options && cell.options.length > 0 ? (
                        <select
                          value={answers[ri][ci]}
                          onChange={(e) => handleChange(ri, ci, e.target.value)}
                          disabled={submitted}
                          className={`w-full rounded-lg border px-2 py-1.5 text-sm bg-[var(--lern-card-bg)] ${
                            submitted
                              ? results[ri][ci]
                                ? "border-[#6B8F71] bg-[#6B8F71]/8"
                                : "border-[#C96B5C] bg-[#C96B5C]/8"
                              : "border-[var(--lern-border)] focus:outline-2 focus:outline-[var(--lern-accent)]"
                          } disabled:opacity-80`}
                        >
                          <option value="">— wählen —</option>
                          {cell.options.map((opt, oi) => (
                            <option key={oi} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={answers[ri][ci]}
                          onChange={(e) => handleChange(ri, ci, e.target.value)}
                          disabled={submitted}
                          placeholder="…"
                          className={`w-full rounded-lg border px-2 py-1.5 text-sm bg-[var(--lern-card-bg)] ${
                            submitted
                              ? results[ri][ci]
                                ? "border-[#6B8F71] bg-[#6B8F71]/8"
                                : "border-[#C96B5C] bg-[#C96B5C]/8"
                              : "border-[var(--lern-border)] focus:outline-2 focus:outline-[var(--lern-accent)]"
                          } disabled:opacity-80`}
                        />
                      )
                    ) : (
                      <span className="text-[var(--lern-text-primary)]/80">{cell.value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Korrekturen bei submitted */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 ${
            correctBlanks === totalBlanks
              ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
              : correctBlanks >= totalBlanks / 2
                ? "bg-[#D4956A]/10 border border-[#D4956A]/30"
                : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
          }`}
        >
          <p className="font-semibold">
            {correctBlanks === totalBlanks
              ? "Alles richtig!"
              : `${correctBlanks} von ${totalBlanks} Feldern korrekt.`}
          </p>
          {correctBlanks < totalBlanks && (
            <div className="mt-2 space-y-1">
              {rows.map((row, ri) =>
                row.map((cell, ci) =>
                  cell.isBlank && !results[ri][ci] ? (
                    <p key={`${ri}-${ci}`} className="text-sm text-[var(--lern-text-primary)]/70">
                      {headers[ci]}: <span className="line-through text-[#C96B5C]">{answers[ri][ci] || "(leer)"}</span>
                      {" → "}
                      <span className="font-semibold text-[#6B8F71]">{cell.value}</span>
                    </p>
                  ) : null
                )
              )}
            </div>
          )}
        </motion.div>
      )}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allFilled}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40"
        >
          Antwort prüfen
        </button>
      ) : (
        <button
          onClick={() => onNext(correctBlanks === totalBlanks)}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
        >
          Weiter
        </button>
      )}
    </div>
  );
}

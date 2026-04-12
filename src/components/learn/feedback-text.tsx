"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { feedbackGlossar, type FeedbackGlossarEntry } from "./feedback-glossar";

interface FeedbackTextProps {
  children: string;
  sprachLevel?: "c1" | "b1";
}

/**
 * Rendert Feedback-Text und macht Fachbegriffe/Kommunikationsmodelle klickbar.
 * Bei Tap → Bottom-Sheet mit Erklärung (C1 oder B1 je nach Sprachlevel).
 */
export function FeedbackText({ children, sprachLevel = "c1" }: FeedbackTextProps) {
  const [activeEntry, setActiveEntry] = useState<FeedbackGlossarEntry | null>(null);

  const parts = highlightTerms(children, feedbackGlossar);

  return (
    <>
      <span>
        {parts.map((part, i) => {
          if (part.entry) {
            return (
              <button
                key={i}
                onClick={() => setActiveEntry(part.entry!)}
                className="inline text-[var(--lern-accent)] underline decoration-[var(--lern-accent)]/30 underline-offset-2 font-medium"
              >
                {part.text}
              </button>
            );
          }
          return <span key={i}>{part.text}</span>;
        })}
      </span>

      {/* Bottom-Sheet */}
      <AnimatePresence>
        {activeEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveEntry(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 max-h-[60vh] overflow-y-auto rounded-t-3xl bg-[var(--lern-bg-primary)] p-6 pb-10 shadow-xl"
            >
              {/* Drag Handle */}
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[var(--lern-border)]" />

              {/* Begriff */}
              <h3 className="text-xl font-bold text-[var(--lern-text-primary)] mb-1">
                {activeEntry.begriff}
              </h3>

              {/* Sprachlevel-Badge */}
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-accent)] bg-[var(--lern-accent)]/10 px-2 py-0.5 rounded-full mb-3">
                {sprachLevel === "b1" ? "Einfache Sprache" : "Fachsprache"}
              </span>

              {/* Erklärung */}
              <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed mb-4">
                {sprachLevel === "b1"
                  ? activeEntry.erklaerungB1
                  : activeEntry.erklaerungC1}
              </p>

              {/* Akronym / Aufschlüsselung */}
              {activeEntry.akronym && activeEntry.akronym.length > 0 && (
                <div className="space-y-1.5 rounded-xl bg-[var(--lern-bg)] p-3">
                  {activeEntry.akronym.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--lern-accent)]/10 text-xs font-bold text-[var(--lern-accent)]">
                        {item.buchstabe}
                      </span>
                      <span className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed pt-0.5">
                        {item.bedeutung}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Schließen-Button */}
              <button
                onClick={() => setActiveEntry(null)}
                className="mt-4 w-full rounded-2xl bg-[var(--lern-bg)] py-3 text-sm font-semibold text-[var(--lern-text-primary)] active:bg-[var(--lern-divider)]"
              >
                Verstanden
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Begriffe + Aliase im Text finden und in Segmente aufteilen
function highlightTerms(
  text: string,
  glossar: FeedbackGlossarEntry[]
): { text: string; entry?: FeedbackGlossarEntry }[] {
  if (!text || glossar.length === 0) return [{ text }];

  // Alle suchbaren Begriffe sammeln (Begriff + Aliase)
  const searchTerms: { term: string; entry: FeedbackGlossarEntry }[] = [];
  for (const entry of glossar) {
    searchTerms.push({ term: entry.begriff, entry });
    if (entry.aliase) {
      for (const alias of entry.aliase) {
        searchTerms.push({ term: alias, entry });
      }
    }
  }

  // Sortiere nach Länge (längste zuerst)
  searchTerms.sort((a, b) => b.term.length - a.term.length);

  // Regex bauen
  const escapedTerms = searchTerms.map((s) =>
    s.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  const parts: { text: string; entry?: FeedbackGlossarEntry }[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index) });
    }
    const matchedTerm = match[0];
    const found = searchTerms.find(
      (s) => s.term.toLowerCase() === matchedTerm.toLowerCase()
    );
    parts.push({ text: matchedTerm, entry: found?.entry });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex) });
  }

  return parts;
}

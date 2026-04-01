"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";

interface FachbegriffTooltipProps {
  glossar: GlossarEntry[];
  children: string;
}

/**
 * Rendert Text und markiert alle Glossar-Begriffe als tippbare Elemente.
 * Bei Tap → Bottom-Sheet mit Erklärung + Übersetzung + Aussprache.
 */
export function FachbegriffText({ glossar, children }: FachbegriffTooltipProps) {
  const [activeEntry, setActiveEntry] = useState<GlossarEntry | null>(null);

  if (!glossar || glossar.length === 0) {
    return <span>{renderBold(children)}</span>;
  }

  // Glossar-Begriffe im Text finden und markieren
  const parts = highlightTerms(children, glossar);

  return (
    <>
      <span>
        {parts.map((part, i) => {
          if (part.entry) {
            return (
              <button
                key={i}
                onClick={() => setActiveEntry(part.entry!)}
                className="inline text-[#0071e3] underline decoration-[#0071e3]/30 underline-offset-2 font-medium"
              >
                {part.text}
              </button>
            );
          }
          return <span key={i}>{renderBold(part.text)}</span>;
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
              className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white p-6 pb-10 shadow-xl"
            >
              {/* Drag Handle */}
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#d2d2d7]" />

              {/* Begriff + Aussprache */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-[#1d1d1f]">
                  {activeEntry.begriff}
                </h3>
                {activeEntry.ausspracheAudio && (
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3] active:bg-[#0071e3]/20">
                    🔊
                  </button>
                )}
              </div>

              {/* Erklärung */}
              <p className="text-sm text-[#1d1d1f]/80 leading-relaxed mb-4">
                {activeEntry.erklaerung}
              </p>

              {/* Übersetzungen */}
              {(activeEntry.uebersetzungTr || activeEntry.uebersetzungAr) && (
                <div className="space-y-2 rounded-xl bg-[#f5f5f7] p-3">
                  {activeEntry.uebersetzungTr && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🇹🇷</span>
                      <span className="text-sm text-[#1d1d1f]/70">
                        {activeEntry.uebersetzungTr}
                      </span>
                    </div>
                  )}
                  {activeEntry.uebersetzungAr && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🇸🇦</span>
                      <span className="text-sm text-[#1d1d1f]/70" dir="rtl">
                        {activeEntry.uebersetzungAr}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Wandelt **bold** Markdown in <strong> Elemente um. Exportiert für Nutzung in allen Step-Komponenten. */
export function renderBold(text: string): React.ReactNode {
  if (!text || !text.includes("**")) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// Hilfsfunktion: Begriffe im Text finden und in Segmente aufteilen
function highlightTerms(
  text: string,
  glossar: GlossarEntry[]
): { text: string; entry?: GlossarEntry }[] {
  if (!text || glossar.length === 0) return [{ text }];

  // Sortiere nach Länge (längste zuerst), um "Synovialmembran" vor "Membran" zu matchen
  const sorted = [...glossar].sort((a, b) => b.begriff.length - a.begriff.length);

  // Regex bauen: alle Begriffe als Alternativen
  const escapedTerms = sorted.map((g) =>
    g.begriff.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  const parts: { text: string; entry?: GlossarEntry }[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Text vor dem Match
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index) });
    }
    // Matched Begriff
    const matchedTerm = match[0];
    const entry = sorted.find(
      (g) => g.begriff.toLowerCase() === matchedTerm.toLowerCase()
    );
    parts.push({ text: matchedTerm, entry });
    lastIndex = match.index + match[0].length;
  }

  // Rest nach letztem Match
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex) });
  }

  return parts;
}

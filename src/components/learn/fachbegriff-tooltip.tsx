"use client";

import { useState, useMemo, useEffect, useCallback, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { pflegeGlossar, type GlossarEintrag } from "@/lib/glossar/pflege-glossar";
import { useTts } from "@/hooks/use-tts";
import { useMutterspracheStore, MUTTERSPRACHE_OPTIONS } from "@/hooks/use-muttersprache";

/** Context für globales SprachLevel — setzt B1/C1 für alle FachbegriffText-Instanzen */
const SprachLevelContext = createContext<"c1" | "b1">("c1");

/** Provider für SprachLevel — in der Lern-Engine um alle Steps wrappen */
export function SprachLevelProvider({ level, children }: { level: "c1" | "b1"; children: React.ReactNode }) {
  return <SprachLevelContext.Provider value={level}>{children}</SprachLevelContext.Provider>;
}

interface FachbegriffTooltipProps {
  glossar: GlossarEntry[];
  children: string;
  /** Im B1-Modus: Fachbegriffe mit Hintergrund hervorheben + TTS-Buttons. Falls nicht gesetzt, wird Context genutzt. */
  sprachLevel?: "c1" | "b1";
}

/** Mini-TTS für einzelne Fachbegriffe — Azure KatjaNeural mit Browser-Fallback */
function FachbegriffTtsButton({ text }: { text: string }) {
  const { speak, playing } = useTts();

  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(text, 0.85); }}
      className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] ml-0.5 align-middle transition-colors ${
        playing ? "bg-[var(--lern-accent)] text-white" : "bg-[var(--lern-accent)]/10 text-[var(--lern-accent)]"
      }`}
      title="Vorlesen"
      aria-label={`${text} vorlesen`}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    </button>
  );
}

/**
 * Rendert Text und markiert alle Glossar-Begriffe als tippbare Elemente.
 * Bei Tap → Bottom-Sheet mit Erklärung + Übersetzung + Aussprache.
 * Im B1-Modus: Fachbegriffe mit gelbem Hintergrund hervorgehoben + TTS-Button.
 */
export function FachbegriffText({ glossar, children, sprachLevel }: FachbegriffTooltipProps) {
  const contextLevel = useContext(SprachLevelContext);
  const effectiveLevel = sprachLevel ?? contextLevel;
  const [activeEntry, setActiveEntry] = useState<GlossarEntry | null>(null);
  const isB1 = effectiveLevel === "b1";

  const closeSheet = useCallback(() => setActiveEntry(null), []);

  // Body-Scroll-Lock wenn Bottom-Sheet offen — Scroll-Position beibehalten
  useEffect(() => {
    if (activeEntry) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [activeEntry]);

  /** Zentralen Glossar-Eintrag zum aktiven Begriff finden (für AR/TR Übersetzungen) */
  const zentralerEintrag: GlossarEintrag | undefined = useMemo(() => {
    if (!activeEntry) return undefined;
    return pflegeGlossar.find(
      (e) => e.begriffDe.toLowerCase() === activeEntry.begriff.toLowerCase()
    );
  }, [activeEntry]);

  if (!glossar || glossar.length === 0) {
    return <span>{renderBold(children)}</span>;
  }

  // Phase 1: **bold** Marker entfernen, aber merken welche Wörter bold waren
  const { cleanText, boldRanges } = stripBoldMarkers(children);

  // Phase 2: Glossar-Begriffe im bereinigten Text finden
  const parts = highlightTerms(cleanText, glossar);

  // Phase 3: Für jedes Teil prüfen ob es (teilweise) in einem Bold-Range liegt
  let charOffset = 0;
  return (
    <>
      <span>
        {parts.map((part, i) => {
          const partStart = charOffset;
          const partEnd = charOffset + part.text.length;
          charOffset = partEnd;
          const isBold = boldRanges.some(
            (r) => r.start <= partStart && r.end >= partEnd
          );

          if (part.entry) {
            return (
              <span key={i} className="inline">
                <button
                  onClick={() => setActiveEntry(part.entry!)}
                  className={`inline underline-offset-2 ${isBold ? "font-bold" : "font-medium"} ${
                    isB1
                      ? "bg-[#BFA48E]/20 text-[var(--lern-accent)] underline decoration-[var(--lern-accent)]/30 rounded px-0.5 -mx-0.5"
                      : "text-[var(--lern-accent)] underline decoration-[var(--lern-accent)]/30"
                  }`}
                >
                  {part.text}
                </button>
                {isB1 && <FachbegriffTtsButton text={part.entry!.begriff} />}
              </span>
            );
          }
          // Normaler Text — renderBold für verbleibende ** (falls nicht schon gestrippt)
          if (isBold) {
            return <strong key={i} className="font-semibold">{part.text}</strong>;
          }
          return <span key={i}>{renderBold(part.text)}</span>;
        })}
      </span>

      {/* Bottom-Sheet */}
      <AnimatePresence>
        {activeEntry && (
          <motion.div
            key="glossar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={closeSheet}
            onTouchEnd={closeSheet}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-[var(--lern-bg-primary)] p-6 pb-10 shadow-xl max-h-[70vh] overflow-y-auto"
            >
              {/* Drag Handle — tippbar zum Schließen */}
              <button
                onClick={closeSheet}
                className="mx-auto mb-4 block h-1 w-12 rounded-full bg-[var(--lern-border)]"
                aria-label="Schließen"
              />

              {/* Close-Button oben rechts */}
              <button
                onClick={closeSheet}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--lern-border)]/50 text-[var(--lern-text-primary)]/60 hover:bg-[var(--lern-border)]"
                aria-label="Glossar schließen"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Begriff + Aussprache */}
              <div className="flex items-center justify-between mb-3 pr-8">
                <h3 className="text-xl font-bold text-[var(--lern-text-primary)]">
                  {activeEntry.begriff}
                </h3>
                <FachbegriffTtsButton text={activeEntry.begriff} />
              </div>

              {/* Erklärung */}
              <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed mb-4">
                {activeEntry.erklaerung}
              </p>

              {/* Übersetzung — nur die gewählte Muttersprache anzeigen */}
              <MuttersprachenUebersetzung
                activeEntry={activeEntry}
                zentralerEintrag={zentralerEintrag}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Zeigt nur die Übersetzung in der gewählten Muttersprache */
function MuttersprachenUebersetzung({
  activeEntry,
  zentralerEintrag,
}: {
  activeEntry: GlossarEntry;
  zentralerEintrag?: GlossarEintrag;
}) {
  const sprache = useMutterspracheStore((s) => s.sprache);

  // Deutsch = Muttersprachler → keine Übersetzung nötig
  if (!sprache || sprache === "de") return null;

  // Übersetzungs-Map: code → { begriff, erklaerung }
  const translations: Record<string, { begriff?: string; erklaerung?: string; isRtl?: boolean }> = {
    tr: {
      begriff: zentralerEintrag?.begriffTr ?? activeEntry.uebersetzungTr,
      erklaerung: zentralerEintrag?.erklaerungTr,
    },
    ar: {
      begriff: zentralerEintrag?.begriffAr ?? activeEntry.uebersetzungAr,
      erklaerung: zentralerEintrag?.erklaerungAr,
      isRtl: true,
    },
    // Neue Sprachen — aus erweiterten GlossarEntry-Feldern (wenn vorhanden)
    en: { begriff: (activeEntry as unknown as Record<string, string | undefined>).uebersetzungEn },
    vi: { begriff: (activeEntry as unknown as Record<string, string | undefined>).uebersetzungVi },
    tl: { begriff: (activeEntry as unknown as Record<string, string | undefined>).uebersetzungTl },
    bs: { begriff: (activeEntry as unknown as Record<string, string | undefined>).uebersetzungBs },
    uk: { begriff: (activeEntry as unknown as Record<string, string | undefined>).uebersetzungUk },
    ro: { begriff: (activeEntry as unknown as Record<string, string | undefined>).uebersetzungRo },
  };

  const t = translations[sprache];
  if (!t?.begriff) return null;

  const label = MUTTERSPRACHE_OPTIONS.find(o => o.code === sprache)?.code.toUpperCase() ?? sprache.toUpperCase();

  return (
    <div className="space-y-2 rounded-xl bg-[var(--lern-bg)] p-3">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#8e8e93] w-6">{label}</span>
          <span className="text-sm font-medium text-[var(--lern-text-primary)]/70" dir={t.isRtl ? "rtl" : undefined}>
            {t.begriff}
          </span>
        </div>
        {t.erklaerung && (
          <p className="text-xs text-[var(--lern-text-primary)]/50 ml-8 mt-0.5" dir={t.isRtl ? "rtl" : undefined}>
            {t.erklaerung}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Entfernt **bold** Marker aus dem Text und gibt die Positionen der fetten Bereiche zurück.
 * Wird VOR highlightTerms aufgerufen, damit Glossar-Matching nicht durch ** gestört wird.
 */
function stripBoldMarkers(text: string): { cleanText: string; boldRanges: { start: number; end: number }[] } {
  const boldRanges: { start: number; end: number }[] = [];
  let cleanText = "";
  let i = 0;
  while (i < text.length) {
    if (text[i] === "*" && text[i + 1] === "*") {
      // Suche das schließende **
      const closeIdx = text.indexOf("**", i + 2);
      if (closeIdx !== -1) {
        const innerText = text.slice(i + 2, closeIdx);
        const start = cleanText.length;
        cleanText += innerText;
        boldRanges.push({ start, end: cleanText.length });
        i = closeIdx + 2;
        continue;
      }
    }
    cleanText += text[i];
    i++;
  }
  return { cleanText, boldRanges };
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

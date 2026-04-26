"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Calculator,
  HelpCircle,
  ChevronDownCircle,
  Volume2,
  VolumeX,
  Loader2,
  Minus,
  Plus,
} from "lucide-react";
import type { ArtikelKapitel, ArtikelBlock } from "../../../content/_types";

/** Entfernt Quellen-Referenzen wie [I Care Pflege S.20] aus dem angezeigten Text */
function stripQuellenRefs(text: string): string {
  return text.replace(/\s*\[I Care[^\]]*\]/g, "");
}

// ── TTS Vorlese-Button ──

type TtsState = "idle" | "loading" | "playing";

function VorleseButton({ text }: { text: string }) {
  const [state, setState] = useState<TtsState>("idle");
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      URL.revokeObjectURL(audioRef.current.src);
      audioRef.current = null;
    }
    setState("idle");
  }, []);

  const play = useCallback(async () => {
    if (state === "playing") {
      stop();
      return;
    }

    const trimmed = text.slice(0, 5000).trim();
    if (!trimmed) return;

    setState("loading");
    setError(false);

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      });

      if (!res.ok) {
        setError(true);
        setState("idle");
        setTimeout(() => setError(false), 3000);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        URL.revokeObjectURL(url);
        audioRef.current = null;
        setState("idle");
      };
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        audioRef.current = null;
        setState("idle");
      };
      await audio.play();
      setState("playing");
    } catch {
      setError(true);
      setState("idle");
      setTimeout(() => setError(false), 3000);
    }
  }, [text, state, stop]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
    };
  }, []);

  if (error) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--lern-error)]/10 px-2.5 py-1.5 text-[11px] text-[var(--lern-error)]">
        Vorlesen nicht verfügbar
      </span>
    );
  }

  return (
    <button
      onClick={play}
      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--lern-bg-secondary)] px-3 py-2 text-xs font-medium text-[var(--lern-text-secondary)] transition-colors hover:text-[var(--lern-text)] active:bg-[var(--lern-accent)]/10"
      title={state === "playing" ? "Stopp" : "Vorlesen"}
    >
      {state === "loading" ? (
        <Loader2 size={16} className="animate-spin" />
      ) : state === "playing" ? (
        <VolumeX size={16} />
      ) : (
        <Volume2 size={16} />
      )}
      <span>{state === "playing" ? "Stopp" : "Vorlesen"}</span>
    </button>
  );
}

// ── Interaktiver Zeitstrahl (Kap 1: Geschichte) ──

interface ZeitstrahlEvent {
  jahr: string;
  titel: string;
  detail: string;
  farbe: string;
}

const ZEITSTRAHL_EVENTS: ZeitstrahlEvent[] = [
  {
    jahr: "~500 v. Chr.",
    titel: "Erste Pflegende in Indien",
    detail: "In altindischen Schriften werden erstmals Menschen beschrieben, die Kranke organisiert versorgten — neben Ärzten, mit festen Aufgaben.",
    farbe: "#218C71",
  },
  {
    jahr: "1845",
    titel: "Nightingale in Kaiserswerth",
    detail: "Florence Nightingale lernt an der Kaiserswerther Diakonie bei Düsseldorf systematische Krankenpflege.",
    farbe: "#218C71",
  },
  {
    jahr: "1853–1856",
    titel: "Krimkrieg",
    detail: "Nightingale senkt die Sterblichkeitsrate verwundeter Soldaten von über 40 % auf unter 5 % — durch Hygiene und Organisation.",
    farbe: "#218C71",
  },
  {
    jahr: "1860",
    titel: "Erste Pflegeschule",
    detail: "Nightingale eröffnet in London die erste professionelle Pflegeschule — der Beginn systematischer Pflegeausbildung.",
    farbe: "#3E5A6A",
  },
  {
    jahr: "1903",
    titel: "Agnes Karll: Berufsorganisation",
    detail: "Agnes Karll gründet die erste deutsche Standesorganisation für Pflegende. Daraus entsteht später der DBfK.",
    farbe: "#3E5A6A",
  },
  {
    jahr: "1906",
    titel: "Erste staatliche Pflegeprüfung",
    detail: "Preußen führt die erste staatliche Pflegeprüfung ein — Pflege ist erstmals gesetzlich als Beruf verankert.",
    farbe: "#3E5A6A",
  },
  {
    jahr: "1933–1945",
    titel: "NS-Zeit: Dunkelstes Kapitel",
    detail: "Berufsverbände werden gleichgeschaltet. Im \u201EEuthanasie\u201C-Programm werden hunderttausende Menschen ermordet \u2014 Pflegepersonal war aktiv beteiligt.",
    farbe: "#8B4513",
  },
  {
    jahr: "2020",
    titel: "Pflegeberufegesetz (PflBG)",
    detail: "Das PflBG führt die generalistische Pflegeausbildung ein: Alten-, Kranken- und Kinderkrankenpflege werden vereint.",
    farbe: "#3E5A6A",
  },
];

function InteraktiverZeitstrahl() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="my-4 rounded-xl border border-[var(--lern-border)] bg-gradient-to-br from-[#FDF2F0] to-[#EFF5F0] p-4">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[#6B5450]">
        Meilensteine der Pflege — tippe für Details
      </p>
      <div className="relative ml-6">
        {/* Vertikale Linie */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-[#218C71]/30" />

        {ZEITSTRAHL_EVENTS.map((evt, i) => (
          <div key={i} className="relative mb-3 last:mb-0">
            {/* Punkt */}
            <div
              className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-white transition-transform"
              style={{
                backgroundColor: evt.farbe,
                transform: activeIdx === i ? "scale(1.4)" : "scale(1)",
              }}
            />
            {/* Event */}
            <button
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className="ml-5 w-full text-left"
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="shrink-0 text-xs font-bold"
                  style={{ color: evt.farbe }}
                >
                  {evt.jahr}
                </span>
                <span className="text-sm font-medium text-[#1d1d1f]">
                  {evt.titel}
                </span>
              </div>
            </button>
            <AnimatePresence>
              {activeIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-5 overflow-hidden"
                >
                  <p className="mt-1 rounded-lg bg-white/70 px-3 py-2 text-xs leading-relaxed text-[#4A4A4A]">
                    {evt.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Glossar-Chip: Tappbarer Fachbegriff mit Inline-Erklärung (#1) ──

function GlossarChip({
  begriff,
  erklaerung,
}: {
  begriff: string;
  erklaerung: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline">
      <button
        onClick={() => setOpen(!open)}
        className="inline rounded-md bg-[var(--lern-accent)]/10 px-1.5 py-0.5 text-xs font-medium text-[var(--lern-accent)] transition-colors hover:bg-[var(--lern-accent)]/20"
      >
        {begriff}
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="mt-1 block rounded-lg border border-[var(--lern-accent)]/20 bg-[var(--lern-accent)]/5 px-3 py-2 text-xs leading-relaxed text-[var(--lern-text)]"
          >
            <strong>{begriff}:</strong> {erklaerung}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

// ── Vertiefungs-Block: Collapsible "Mehr erfahren" (#5) ──

function VertiefungsBlock({
  text,
}: {
  text: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-3 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-secondary)]/50">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-medium text-[var(--lern-text-secondary)] transition-colors hover:text-[var(--lern-text)]"
      >
        <ChevronDownCircle
          size={16}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
        <span>Mehr erfahren</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Block-Renderer ──

type TextTiefe = "kurz" | "standard" | "erweitert";

function ArtikelBlockView({
  block,
  sprachLevel,
  glossar,
}: {
  block: ArtikelBlock;
  sprachLevel: "C1" | "B1";
  glossar?: { begriff: string; erklaerung: string; erklaerungB1?: string }[];
}) {
  const [tiefe, setTiefe] = useState<TextTiefe>("standard");

  // Text je nach Tiefe wählen
  const rawStandard = sprachLevel === "B1" && block.contentB1 ? block.contentB1 : block.contentC1;
  const rawKurz = sprachLevel === "B1" && block.contentKurzB1
    ? block.contentKurzB1
    : block.contentKurz;
  const rawErweitert = sprachLevel === "B1" && block.contentErweitertB1
    ? block.contentErweitertB1
    : block.contentErweitert;

  const hasKurz = !!rawKurz;
  const hasErweitert = !!rawErweitert;
  const hasTiefeToggle = hasKurz || hasErweitert;

  const activeRaw = tiefe === "kurz" && rawKurz
    ? rawKurz
    : tiefe === "erweitert" && rawErweitert
      ? rawErweitert
      : rawStandard;
  const text = stripQuellenRefs(activeRaw);

  // Kernaussage-Highlight (#8): Rendert Kernaussage als hervorgehobenen Lead
  const kernaussageRaw = sprachLevel === "B1" && block.kernaussageB1 ? block.kernaussageB1 : block.kernaussage;
  const kernaussage = kernaussageRaw ? stripQuellenRefs(kernaussageRaw) : null;

  // Glossar-Chip-Injection: Fachbegriffe im Text durch tappbare Chips ersetzen (#1)
  const renderTextWithGlossar = useCallback(
    (content: string) => {
      if (!glossar || glossar.length === 0) {
        return content;
      }

      // Sortiere nach Länge (längere Begriffe zuerst, um Teilmatches zu vermeiden)
      const sorted = [...glossar].sort((a, b) => b.begriff.length - a.begriff.length);
      const parts: (string | { begriff: string; erklaerung: string })[] = [];
      let remaining = content;

      while (remaining.length > 0) {
        let earliestIndex = remaining.length;
        let matchedEntry: { begriff: string; erklaerung: string } | null = null;

        for (const entry of sorted) {
          const idx = remaining.indexOf(entry.begriff);
          if (idx !== -1 && idx < earliestIndex) {
            earliestIndex = idx;
            matchedEntry = {
              begriff: entry.begriff,
              erklaerung: sprachLevel === "B1" && entry.erklaerungB1
                ? entry.erklaerungB1
                : entry.erklaerung,
            };
          }
        }

        if (matchedEntry && earliestIndex < remaining.length) {
          if (earliestIndex > 0) {
            parts.push(remaining.slice(0, earliestIndex));
          }
          parts.push(matchedEntry);
          remaining = remaining.slice(earliestIndex + matchedEntry.begriff.length);
        } else {
          parts.push(remaining);
          break;
        }
      }

      // Nur erste Erwähnung jedes Begriffs wird zum Chip
      const seen = new Set<string>();
      return (
        <>
          {parts.map((part, i) => {
            if (typeof part === "string") {
              return <span key={i}>{part}</span>;
            }
            if (seen.has(part.begriff)) {
              return <span key={i}>{part.begriff}</span>;
            }
            seen.add(part.begriff);
            return (
              <GlossarChip
                key={i}
                begriff={part.begriff}
                erklaerung={part.erklaerung}
              />
            );
          })}
        </>
      );
    },
    [glossar, sprachLevel],
  );

  // Der eigentliche Block-Content
  let blockContent: React.ReactNode;

  switch (block.type) {
    case "text":
      blockContent = (
        <div>
          {kernaussage && (
            <p className="mb-2 border-l-2 border-[var(--lern-accent)] pl-3 text-sm font-medium leading-relaxed text-[var(--lern-accent)]">
              {kernaussage}
            </p>
          )}
          <p className="leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {renderTextWithGlossar(text)}
          </p>
        </div>
      );
      break;

    case "warnung":
      blockContent = (
        <div className="my-3 flex gap-3 rounded-xl border border-[var(--lern-error)]/30 bg-[var(--lern-error)]/5 p-4">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[var(--lern-error)]" />
          <div>
            <p className="font-semibold text-[var(--lern-error)]">Achtung</p>
            <p className="mt-1 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{renderTextWithGlossar(text)}</p>
          </div>
        </div>
      );
      break;

    case "merke":
      blockContent = (
        <div className="my-3 flex gap-3 rounded-xl border border-[var(--lern-accent)]/30 bg-[var(--lern-accent)]/5 p-4">
          <Lightbulb size={20} className="mt-0.5 shrink-0 text-[var(--lern-accent)]" />
          <div>
            <p className="font-semibold text-[var(--lern-accent)]">Merke</p>
            <p className="mt-1 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{renderTextWithGlossar(text)}</p>
          </div>
        </div>
      );
      break;

    case "wusstestdu":
      blockContent = (
        <div className="my-3 flex gap-3 rounded-xl border border-purple-200 bg-purple-50 p-4">
          <HelpCircle size={20} className="mt-0.5 shrink-0 text-purple-600" />
          <div>
            <p className="font-semibold text-purple-700">Wusstest du?</p>
            <p className="mt-1 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{renderTextWithGlossar(text)}</p>
          </div>
        </div>
      );
      break;

    case "vertiefung":
      blockContent = <VertiefungsBlock text={text} />;
      break;

    case "tabelle":
      if (!block.headers || !block.rows) return null;
      blockContent = (
        <div className="my-3 overflow-x-auto rounded-xl border border-[var(--lern-border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--lern-bg-secondary)]">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-[var(--lern-border)]">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      break;

    case "bild":
      blockContent = (
        <figure className="my-4">
          {block.imageUrl && (
            <img
              src={block.imageUrl}
              alt={block.imageAlt || ""}
              className="w-full rounded-xl border border-[var(--lern-border)]"
            />
          )}
          {block.imageAlt && (
            <figcaption className="mt-2 text-center text-xs text-[var(--lern-text-secondary)]">
              {block.imageAlt}
            </figcaption>
          )}
        </figure>
      );
      break;

    case "querverweis":
      blockContent = (
        <div className="my-2 flex items-center gap-2 rounded-lg bg-[var(--lern-accent)]/5 px-3 py-2 text-sm">
          <ArrowRight size={14} className="text-[var(--lern-accent)]" />
          <span>{text}</span>
        </div>
      );
      break;

    case "rechner":
      blockContent = (
        <div className="my-3 flex gap-3 rounded-xl border border-[var(--lern-info)]/30 bg-[var(--lern-info)]/5 p-4">
          <Calculator size={20} className="mt-0.5 shrink-0 text-[var(--lern-info)]" />
          <div>
            <p className="font-semibold text-[var(--lern-info)]">Rechner</p>
            <p className="mt-1 text-sm leading-relaxed">{text}</p>
            {block.formel && (
              <p className="mt-2 rounded bg-[var(--lern-bg-secondary)] px-3 py-1.5 font-mono text-xs">
                {block.formel}
              </p>
            )}
          </div>
        </div>
      );
      break;

    default:
      blockContent = <p>{text}</p>;
  }

  return (
    <div>
      {/* Tiefe-Indikator wenn nicht standard */}
      {tiefe !== "standard" && (
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            tiefe === "kurz"
              ? "bg-blue-100 text-blue-700"
              : "bg-amber-100 text-amber-700"
          }`}>
            {tiefe === "kurz" ? "Vereinfacht" : "Vertieft"}
          </span>
          <button
            onClick={() => setTiefe("standard")}
            className="text-xs text-[var(--lern-text-secondary)] underline"
          >
            Zurück zum Standard
          </button>
        </div>
      )}

      {blockContent}

      {/* Aktions-Zeile: TTS + Tiefe-Toggle */}
      {block.type !== "bild" && text.length > 20 && (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <VorleseButton text={text} />
          {hasTiefeToggle && (
            <>
              {hasKurz && tiefe !== "kurz" && (
                <button
                  onClick={() => setTiefe("kurz")}
                  className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700 transition-colors active:bg-blue-100"
                >
                  <Minus size={13} />
                  <span>Einfacher</span>
                </button>
              )}
              {hasErweitert && tiefe !== "erweitert" && (
                <button
                  onClick={() => setTiefe("erweitert")}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1.5 text-xs font-medium text-amber-700 transition-colors active:bg-amber-100"
                >
                  <Plus size={13} />
                  <span>Detaillierter</span>
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── Scroll-Fortschritt im Kapitel (#7) ──

function BlockProgressDots({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  if (total <= 2) return null;
  return (
    <div className="flex items-center justify-center gap-1 py-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i <= current
              ? "w-3 bg-[var(--lern-accent)]"
              : "w-1.5 bg-[var(--lern-border)]"
          }`}
        />
      ))}
    </div>
  );
}

// ── Kapitel-Accordion ──

function KapitelAccordion({
  kapitel,
  sprachLevel,
  isGelesen,
  onGelesen,
  glossar,
}: {
  kapitel: ArtikelKapitel;
  sprachLevel: "C1" | "B1";
  isGelesen: boolean;
  onGelesen: () => void;
  glossar?: { begriff: string; erklaerung: string; erklaerungB1?: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleBlocks, setVisibleBlocks] = useState(0);

  const isGeschichteKapitel = kapitel.kapitelId === "le01-kap-01";

  const handleToggle = () => {
    const opening = !isOpen;
    setIsOpen(opening);
    if (opening && !isGelesen) {
      onGelesen();
    }
  };

  // Zusammenfassung (#2)
  const zusammenfassung =
    sprachLevel === "B1" && kapitel.zusammenfassungB1
      ? kapitel.zusammenfassungB1
      : kapitel.zusammenfassung;

  const tagColors: Record<string, string> = {
    anatomie: "bg-[#7A93A8]/10 text-[#7A93A8]",
    pflege: "bg-[#3E5A6A]/10 text-[#3E5A6A]",
    krankheitslehre: "bg-[#218C71]/10 text-[#218C71]",
  };

  // Filtere Glossar-Einträge auf dieses Kapitel
  const kapitelGlossar = glossar?.filter((g) =>
    kapitel.glossarBegriffe?.includes(g.begriff),
  );

  return (
    <div className="border-b border-[var(--lern-border)]">
      <button
        onClick={handleToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-[var(--lern-bg-secondary)]"
      >
        <div className="flex size-6 shrink-0 items-center justify-center">
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{kapitel.titel}</span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${tagColors[kapitel.tag] || ""}`}>
              {kapitel.tag}
            </span>
          </div>
          {/* TL;DR unter dem Titel wenn geschlossen (#2) */}
          {!isOpen && zusammenfassung && (
            <p className="mt-0.5 text-xs leading-snug text-[var(--lern-text-secondary)]">
              {zusammenfassung}
            </p>
          )}
          <span className="text-xs text-[var(--lern-text-secondary)]">
            ~{kapitel.geschaetzteDauer} Min
          </span>
        </div>
        {isGelesen && (
          <span className="text-sm text-[var(--lern-success)]">✓</span>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 px-4 pb-6 pt-2 text-sm" style={{ color: "var(--lern-text-primary)" }}>
              {/* Header-Bild (#6) */}
              {kapitel.headerImageUrl && (
                <img
                  src={kapitel.headerImageUrl}
                  alt={kapitel.titel}
                  className="mb-3 w-full rounded-xl border border-[var(--lern-border)]"
                />
              )}

              {/* Interaktiver Zeitstrahl für Kap 1 */}
              {isGeschichteKapitel && <InteraktiverZeitstrahl />}

              {/* TL;DR als Box wenn geöffnet (#2) */}
              {zusammenfassung && (
                <div className="flex gap-2 rounded-xl bg-[var(--lern-bg-secondary)] px-3 py-2.5">
                  <BookOpen size={14} className="mt-0.5 shrink-0 text-[var(--lern-text-secondary)]" />
                  <p className="text-xs leading-relaxed text-[var(--lern-text-secondary)]">
                    <strong>Kurzfassung:</strong> {zusammenfassung}
                  </p>
                </div>
              )}

              {/* Blöcke mit Scroll-Fortschritt (#7) */}
              {kapitel.bloecke.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onViewportEnter={() => setVisibleBlocks((prev) => Math.max(prev, i))}
                >
                  <ArtikelBlockView
                    block={block}
                    sprachLevel={sprachLevel}
                    glossar={kapitelGlossar}
                  />
                </motion.div>
              ))}

              {/* Block-Fortschritt Dots (#7) */}
              <BlockProgressDots total={kapitel.bloecke.length} current={visibleBlocks} />

              {/* Glossar-Begriffe */}
              {kapitel.glossarBegriffe && kapitel.glossarBegriffe.length > 0 && (
                <div className="mt-4 rounded-xl bg-[var(--lern-bg-secondary)] p-3">
                  <p className="mb-2 text-xs font-semibold text-[var(--lern-text-secondary)]">
                    Fachbegriffe in diesem Kapitel
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {kapitel.glossarBegriffe.map((b) => (
                      <span key={b} className="rounded-full bg-[var(--lern-accent)]/10 px-2.5 py-1 text-xs font-medium text-[var(--lern-accent)]">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Hauptkomponente ──

interface ArtikelRendererProps {
  kapitel: ArtikelKapitel[];
  sprachLevel: "C1" | "B1";
  glossar?: { begriff: string; erklaerung: string; erklaerungB1?: string }[];
  onKapitelGelesen?: (kapitelId: string) => void;
  geleseneKapitel?: Set<string>;
  leId?: string;
}

export function ArtikelRenderer({ kapitel, sprachLevel, glossar, onKapitelGelesen, geleseneKapitel }: ArtikelRendererProps) {
  const gelesen = geleseneKapitel || new Set<string>();
  const gesamtKapitel = kapitel.length;
  const geleseneAnzahl = kapitel.filter((k) => gelesen.has(k.kapitelId)).length;
  const fortschritt = gesamtKapitel > 0 ? Math.round((geleseneAnzahl / gesamtKapitel) * 100) : 0;

  return (
    <div style={{ color: "var(--lern-text-primary)" }}>
      {/* Fortschrittsbalken */}
      <div className="border-b border-[var(--lern-border)] px-4 py-3">
        <div className="flex items-center justify-between text-xs text-[var(--lern-text-secondary)]">
          <div className="flex items-center gap-2">
            <BookOpen size={14} />
            <span>{geleseneAnzahl}/{gesamtKapitel} Kapitel gelesen</span>
          </div>
          <span>{fortschritt}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--lern-border)]">
          <motion.div
            className="h-full rounded-full bg-[var(--lern-accent)]"
            initial={{ width: 0 }}
            animate={{ width: `${fortschritt}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Kapitel-Liste */}
      <div>
        {kapitel.map((kap) => (
          <KapitelAccordion
            key={kap.kapitelId}
            kapitel={kap}
            sprachLevel={sprachLevel}
            isGelesen={gelesen.has(kap.kapitelId)}
            onGelesen={() => onKapitelGelesen?.(kap.kapitelId)}
            glossar={glossar}
          />
        ))}
      </div>
    </div>
  );
}

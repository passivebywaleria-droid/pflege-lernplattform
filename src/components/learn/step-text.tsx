"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { TtsButton } from "./tts-button";
import { AudioPlayer } from "./audio-player";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

import type { DisplayFormat } from "../../../content/_types";

/** Lädt SVGs inline statt als <img> — Text bleibt sichtbar und skaliert sauber */
function InlineSvg({ src, alt }: { src: string; alt?: string }) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((res) => res.ok ? res.text() : null)
      .then((text) => {
        if (!cancelled && text) setSvgContent(text);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [src]);

  if (!svgContent) {
    // Fallback: normales img während SVG lädt
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt || ""} className="w-full h-auto" />;
  }

  return (
    <div
      className="w-full [&>svg]:w-full [&>svg]:h-auto"
      role="img"
      aria-label={alt || ""}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

interface StepTextProps {
  title: string;
  body: string;
  fallbezug?: string;
  glossarBegriffe?: string[];
  imageUrl?: string;
  imageAlt?: string;
  audioUrl?: string;
  audioLabel?: string;
  wusstestDuDas?: string;
  carousel?: boolean;
  glossar?: GlossarEntry[];
  displayFormat?: DisplayFormat;
  onNext: () => void;
}

function splitIntoCards(body: string): string[] {
  // Erst nach Doppel-Absatz splitten
  const paragraphs = body.split("\n\n").filter((p) => p.trim().length > 0);
  if (paragraphs.length >= 2) return paragraphs;

  // Sonst nach Sätzen (je 2-3 pro Karte)
  const sentences = body.match(/[^.!?]+[.!?]+/g) || [body];
  const cards: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    cards.push(sentences.slice(i, i + 2).join(" ").trim());
  }
  return cards.length > 0 ? cards : [body];
}

function CarouselView({
  title,
  cards,
  wusstestDuDas,
  imageUrl,
  imageAlt,
  audioUrl,
  audioLabel,
  glossar,
  onNext,
}: {
  title: string;
  cards: string[];
  wusstestDuDas?: string;
  imageUrl?: string;
  imageAlt?: string;
  audioUrl?: string;
  audioLabel?: string;
  glossar?: GlossarEntry[];
  onNext: () => void;
}) {
  const allCards = wusstestDuDas ? [...cards, wusstestDuDas] : cards;
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(0);
  const isLast = activeCard === allCards.length - 1;
  const isWusstestDuDas = wusstestDuDas && activeCard === allCards.length - 1;

  const goToCard = useCallback(
    (next: number) => {
      if (next < 0 || next >= allCards.length) return;
      setDirection(next > activeCard ? 1 : -1);
      setActiveCard(next);
    },
    [activeCard, allCards.length],
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      if (info.offset.x < -50 && activeCard < allCards.length - 1) {
        goToCard(activeCard + 1);
      } else if (info.offset.x > 50 && activeCard > 0) {
        goToCard(activeCard - 1);
      }
    },
    [activeCard, allCards.length, goToCard],
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="space-y-5 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
          {title}
        </h2>
        <TtsButton text={`${title}. ${allCards[activeCard]}`} className="shrink-0 mt-1" />
      </div>

      {/* Inline-Illustration — SVG inline, sonst als img */}
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-[var(--lern-border)]"
        >
          {imageUrl.endsWith(".svg") ? (
            <InlineSvg src={imageUrl} alt={imageAlt || title} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt={imageAlt || title} className="w-full h-auto" />
          )}
          {imageAlt && <p className="text-xs text-[var(--lern-text-tertiary)] text-center py-2 px-4">{imageAlt}</p>}
        </motion.div>
      )}

      {/* Carousel — Text-Karten */}
      {!imageUrl && (
        <>
          <div className="relative overflow-hidden rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] min-h-[140px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeCard}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                className="p-5"
              >
                {isWusstestDuDas ? (
                  <div>
                    <p className="text-xs font-bold text-[#BFA48E] mb-2 uppercase tracking-wide">
                      Wusstest du?
                    </p>
                    <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed">
                      <FachbegriffText glossar={glossar ?? []}>{allCards[activeCard]}</FachbegriffText>
                    </p>
                  </div>
                ) : (
                  <p className="text-[15px] text-[var(--lern-text-primary)]/80 leading-relaxed whitespace-pre-line">
                    <FachbegriffText glossar={glossar ?? []}>{allCards[activeCard]}</FachbegriffText>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5" role="tablist" aria-label="Kartennavigation">
            {allCards.map((_, i) => (
              <button
                key={i}
                onClick={() => goToCard(i)}
                role="tab"
                aria-selected={i === activeCard}
                aria-label={`Karte ${i + 1} von ${allCards.length}`}
                className={`h-2 rounded-full transition-all focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2 ${
                  i === activeCard
                    ? "w-6 bg-[#C4877F]"
                    : "w-2 bg-[var(--lern-border)]"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Audio-Player */}
      {audioUrl && (
        <AudioPlayer src={audioUrl} label={audioLabel} />
      )}

      {/* Navigation */}
      {isLast ? (
        <button
          onClick={onNext}
          className="w-full rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
        >
          Weiter
        </button>
      ) : (
        <button
          onClick={() => goToCard(activeCard + 1)}
          className="w-full rounded-2xl bg-[var(--lern-card-bg)] px-6 py-4 text-base font-semibold text-[var(--lern-text-primary)] transition-all active:scale-[0.98]"
        >
          Nächste Karte ({activeCard + 1}/{allCards.length})
        </button>
      )}
    </div>
  );
}

/** displayFormat-Renderer: Zeigt body in einem speziellen Layout an */
function DisplayFormatView({ format, title, body, glossar }: { format: DisplayFormat; title: string; body: string; glossar?: GlossarEntry[] }) {
  // Body in Zeilen aufteilen für strukturierte Formate
  const lines = body.split("\n").filter(l => l.trim().length > 0);

  switch (format) {
    case "mnemonic": {
      // Zeilen als Buchstaben-Karten (z.B. N-U-R-S-E)
      return (
        <div className="space-y-2">
          {lines.map((line, i) => {
            const match = line.match(/^([A-ZÄÖÜ])\s*[—–-]\s*(.+)$/);
            if (match) {
              return (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-[var(--lern-card-bg)] p-3 border border-[var(--lern-border)]">
                  <span className="shrink-0 w-9 h-9 rounded-lg bg-[var(--lern-accent)]/10 text-[var(--lern-accent)] font-bold text-lg flex items-center justify-center">{match[1]}</span>
                  <span className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed pt-1.5"><FachbegriffText glossar={glossar ?? []}>{match[2]}</FachbegriffText></span>
                </div>
              );
            }
            return <p key={i} className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{line}</FachbegriffText></p>;
          })}
        </div>
      );
    }

    case "analogy": {
      // Split: Bekannt ↔ Neu (erwartet 2 Absätze getrennt durch \n\n oder ↔)
      const parts = body.split(/↔|\n\n/).map(p => p.trim()).filter(Boolean);
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#BFA48E]/10 border border-[#BFA48E]/30 p-4">
            <p className="text-xs font-bold text-[#B8A100] mb-2 uppercase tracking-wide">Bekannt</p>
            <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{parts[0] || body}</FachbegriffText></p>
          </div>
          <div className="rounded-xl bg-[var(--lern-accent)]/10 border border-[var(--lern-accent)]/30 p-4">
            <p className="text-xs font-bold text-[var(--lern-accent)] mb-2 uppercase tracking-wide">Neu</p>
            <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{parts[1] || ""}</FachbegriffText></p>
          </div>
        </div>
      );
    }

    case "beforeafter": {
      const parts = body.split(/\n\n/).map(p => p.trim()).filter(Boolean);
      return (
        <div className="space-y-3">
          <div className="rounded-xl bg-[#C96B5C]/8 border border-[#C96B5C]/20 p-4">
            <p className="text-xs font-bold text-[#C96B5C] mb-2 uppercase tracking-wide">Vorher</p>
            <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{parts[0] || body}</FachbegriffText></p>
          </div>
          <div className="flex justify-center"><span className="text-[var(--lern-text-tertiary)] text-lg">↓</span></div>
          <div className="rounded-xl bg-[#6B8F71]/8 border border-[#6B8F71]/20 p-4">
            <p className="text-xs font-bold text-[#6B8F71] mb-2 uppercase tracking-wide">Nachher</p>
            <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{parts[1] || ""}</FachbegriffText></p>
          </div>
        </div>
      );
    }

    case "procontra": {
      const parts = body.split(/\n\n/).map(p => p.trim()).filter(Boolean);
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#6B8F71]/8 border border-[#6B8F71]/20 p-4">
            <p className="text-xs font-bold text-[#6B8F71] mb-2 uppercase tracking-wide">Pro</p>
            <div className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed space-y-1">
              {(parts[0] || body).split("\n").map((l, i) => <p key={i}><FachbegriffText glossar={glossar ?? []}>{l.replace(/^[-•]\s*/, "")}</FachbegriffText></p>)}
            </div>
          </div>
          <div className="rounded-xl bg-[#C96B5C]/8 border border-[#C96B5C]/20 p-4">
            <p className="text-xs font-bold text-[#C96B5C] mb-2 uppercase tracking-wide">Contra</p>
            <div className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed space-y-1">
              {(parts[1] || "").split("\n").map((l, i) => <p key={i}><FachbegriffText glossar={glossar ?? []}>{l.replace(/^[-•]\s*/, "")}</FachbegriffText></p>)}
            </div>
          </div>
        </div>
      );
    }

    case "quote": {
      const quoteMatch = body.match(/^["„"«](.+?)[""\»"]\s*[-—–]\s*(.+)$/m);
      return (
        <div className="rounded-xl bg-[var(--lern-card-bg)] border-l-4 border-[var(--lern-accent)] p-5">
          <p className="text-lg italic text-[var(--lern-text-primary)] leading-relaxed mb-3">
            {quoteMatch ? `„${quoteMatch[1]}"` : <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>}
          </p>
          {quoteMatch && <p className="text-sm text-[var(--lern-text-tertiary)] font-medium">— {quoteMatch[2]}</p>}
        </div>
      );
    }

    case "news": {
      return (
        <div className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] overflow-hidden">
          <div className="bg-[var(--lern-accent)]/10 px-4 py-2 border-b border-[var(--lern-border)]">
            <p className="text-xs font-bold text-[var(--lern-accent)] uppercase tracking-widest">Pflege-Aktuell</p>
          </div>
          <div className="p-4">
            <h3 className="text-base font-bold text-[var(--lern-text-primary)] mb-2">{title}</h3>
            <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText></p>
          </div>
        </div>
      );
    }

    case "diary": {
      return (
        <div className="rounded-xl bg-[#FFF8E7] dark:bg-[#2C2820] border border-[#E5D5B0] dark:border-[#4A4030] p-5" style={{ fontFamily: "'Georgia', serif" }}>
          <p className="text-xs text-[var(--lern-text-tertiary)] mb-3 italic">Tagebuch-Eintrag</p>
          <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed italic whitespace-pre-line"><FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText></p>
        </div>
      );
    }

    case "glossary": {
      return (
        <div className="space-y-2">
          {lines.map((line, i) => {
            const match = line.match(/^(.+?):\s*(.+)$/);
            if (match) {
              return (
                <div key={i} className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-4">
                  <p className="text-sm font-bold text-[var(--lern-accent)] mb-1">{match[1]}</p>
                  <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{match[2]}</FachbegriffText></p>
                </div>
              );
            }
            return <p key={i} className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{line}</FachbegriffText></p>;
          })}
        </div>
      );
    }

    case "checklist": {
      return (
        <div className="space-y-2">
          {lines.map((line, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl bg-[var(--lern-card-bg)] p-3 border border-[var(--lern-border)]">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#6B8F71]/15 text-[#6B8F71] flex items-center justify-center text-sm mt-0.5">✓</span>
              <span className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{line.replace(/^[-•✓✔]\s*/, "")}</FachbegriffText></span>
            </div>
          ))}
        </div>
      );
    }

    case "stepbystep": {
      return (
        <div className="space-y-3">
          {lines.map((line, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--lern-accent)]/10 text-[var(--lern-accent)] font-bold text-sm flex items-center justify-center">{i + 1}</span>
              <div className="flex-1 rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-3">
                <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{line.replace(/^\d+[.)]\s*/, "")}</FachbegriffText></p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "scenario": {
      // Erwartet: Erste Zeile = Rollenangabe/Setting, Rest = Situationsbeschreibung
      const setting = lines[0] || "";
      const description = lines.slice(1).join("\n") || body;
      return (
        <div className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] overflow-hidden">
          <div className="bg-[#D4956A]/10 px-4 py-2 border-b border-[var(--lern-border)]">
            <p className="text-xs font-bold text-[#D4956A] uppercase tracking-widest">Situation</p>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-sm font-semibold text-[var(--lern-text-primary)]"><FachbegriffText glossar={glossar ?? []}>{setting}</FachbegriffText></p>
            <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed whitespace-pre-line"><FachbegriffText glossar={glossar ?? []}>{description}</FachbegriffText></p>
          </div>
        </div>
      );
    }

    case "crossref": {
      return (
        <div className="space-y-2">
          {lines.map((line, i) => {
            const match = line.match(/^(.+?):\s*(.+)$/);
            return (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-3">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-[var(--lern-accent)]/10 text-[var(--lern-accent)] flex items-center justify-center text-sm">↗</span>
                <div className="flex-1">
                  {match ? (
                    <>
                      <p className="text-xs font-bold text-[var(--lern-accent)] uppercase">{match[1]}</p>
                      <p className="text-sm text-[var(--lern-text-primary)]/80"><FachbegriffText glossar={glossar ?? []}>{match[2]}</FachbegriffText></p>
                    </>
                  ) : (
                    <p className="text-sm text-[var(--lern-text-primary)]/80"><FachbegriffText glossar={glossar ?? []}>{line}</FachbegriffText></p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    case "interview": {
      return (
        <div className="space-y-3">
          {lines.map((line, i) => {
            const match = line.match(/^(.+?)[?？]\s*[-—–]\s*(.+)$/) || line.match(/^(.+?)\?\s*(.+)$/);
            if (match) {
              return (
                <div key={i} className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-4 space-y-2">
                  <p className="text-sm font-semibold text-[var(--lern-accent)]">{match[1]}?</p>
                  <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{match[2]}</FachbegriffText></p>
                </div>
              );
            }
            // Fallback für Q: A Format
            const qaMatch = line.match(/^[QF]:\s*(.+)$/i);
            if (qaMatch) {
              return (
                <p key={i} className="text-sm font-semibold text-[var(--lern-accent)] px-4">{qaMatch[1]}</p>
              );
            }
            const aMatch = line.match(/^A:\s*(.+)$/i);
            if (aMatch) {
              return (
                <p key={i} className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed px-4 pb-2"><FachbegriffText glossar={glossar ?? []}>{aMatch[1]}</FachbegriffText></p>
              );
            }
            return <p key={i} className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed"><FachbegriffText glossar={glossar ?? []}>{line}</FachbegriffText></p>;
          })}
        </div>
      );
    }

    default:
      return null;
  }
}

export function StepText({
  title,
  body,
  fallbezug,
  glossarBegriffe,
  imageUrl,
  imageAlt,
  audioUrl,
  audioLabel,
  wusstestDuDas,
  carousel,
  glossar,
  displayFormat,
  onNext,
}: StepTextProps) {
  const [showFunFact, setShowFunFact] = useState(false);

  // displayFormat hat Vorrang — kein Carousel bei speziellem Format
  const cards = splitIntoCards(body);
  const useCarousel = !displayFormat && (carousel || cards.length >= 3);

  if (useCarousel) {
    return (
      <CarouselView
        title={title}
        cards={cards}
        wusstestDuDas={wusstestDuDas}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        audioUrl={audioUrl}
        audioLabel={audioLabel}
        glossar={glossar}
        onNext={onNext}
      />
    );
  }

  return (
    <div className="space-y-5" style={{ color: "var(--lern-text-primary)" }} role="article" aria-label={title}>
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
          {title}
        </h2>
        <TtsButton text={`${title}. ${body}`} className="shrink-0 mt-1" />
      </div>

      {/* Inline-Illustration — SVG inline, sonst img */}
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-[var(--lern-border)]"
        >
          {imageUrl.endsWith(".svg") ? (
            <InlineSvg src={imageUrl} alt={imageAlt || title} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt={imageAlt || title} className="w-full h-auto" />
          )}
          {imageAlt && <p className="text-xs text-[var(--lern-text-tertiary)] text-center py-2 px-4">{imageAlt}</p>}
        </motion.div>
      )}

      {/* Body-Text — displayFormat oder Standard (immer anzeigen, auch bei Bild) */}
      {displayFormat ? (
        <DisplayFormatView format={displayFormat} title={title} body={body} glossar={glossar} />
      ) : (
        <div className="space-y-4 text-[var(--lern-text-primary)]/80 leading-relaxed">
          {body.split("\n\n").map((paragraph, i) => (
            <div key={i}>
              {paragraph.startsWith("- ") || paragraph.startsWith("1.") ? (
                <ul className="space-y-2 pl-1">
                  {paragraph.split("\n").map((line, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[#C4877F] mt-1 shrink-0">
                        {line.match(/^\d\./) ? line.match(/^\d\./)![0] : "•"}
                      </span>
                      <span><FachbegriffText glossar={glossar ?? []}>{line.replace(/^[-\d.]\s*/, "")}</FachbegriffText></span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="whitespace-pre-line"><FachbegriffText glossar={glossar ?? []}>{paragraph}</FachbegriffText></p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Audio-Player */}
      {audioUrl && (
        <AudioPlayer src={audioUrl} label={audioLabel} />
      )}

      {/* Wusstest du? — Collapsible */}
      {wusstestDuDas && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setShowFunFact(!showFunFact)}
            className="w-full flex items-center justify-between rounded-2xl bg-[#BFA48E]/10 border border-[#BFA48E]/30 px-4 py-3 transition-colors active:bg-[#BFA48E]/15"
          >
            <span className="text-sm font-medium text-[var(--lern-text-primary)]">
              Wusstest du?
            </span>
            <span className="text-sm text-[var(--lern-text-secondary)]">
              {showFunFact ? "▲" : "▼"}
            </span>
          </button>
          {showFunFact && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="rounded-b-2xl bg-[#BFA48E]/5 border border-t-0 border-[#BFA48E]/30 px-4 py-3"
            >
              <p className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed">
                {wusstestDuDas}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}

      {fallbezug && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-[#C4877F]/5 border border-[#C4877F]/15 p-4"
        >
          <p className="text-sm font-medium text-[#C4877F] mb-1">
            Fallbezug
          </p>
          <p className="text-sm text-[var(--lern-text-primary)]/70">
            {fallbezug}
          </p>
        </motion.div>
      )}

      {glossarBegriffe && glossarBegriffe.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {glossarBegriffe.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1 rounded-full bg-[var(--lern-card-bg)] px-3 py-1 text-xs font-medium text-[var(--lern-text-secondary)]"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={onNext}
        aria-label="Weiter zum nächsten Schritt"
        className="w-full rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2"
      >
        Weiter
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, BookOpen, AlertTriangle, Lightbulb, ArrowRight, Calculator } from "lucide-react";
import type { ArtikelKapitel, ArtikelBlock } from "../../../content/_types";

/** Entfernt Quellen-Referenzen wie [I Care Pflege S.20] aus dem angezeigten Text */
function stripQuellenRefs(text: string): string {
  return text.replace(/\s*\[I Care[^\]]*\]/g, "");
}

interface ArtikelRendererProps {
  kapitel: ArtikelKapitel[];
  sprachLevel: "C1" | "B1";
  glossar?: { begriff: string; erklaerung: string; erklaerungB1?: string }[];
  onKapitelGelesen?: (kapitelId: string) => void;
  geleseneKapitel?: Set<string>;
}

function ArtikelBlockView({
  block,
  sprachLevel,
}: {
  block: ArtikelBlock;
  sprachLevel: "C1" | "B1";
}) {
  const raw = sprachLevel === "B1" && block.contentB1 ? block.contentB1 : block.contentC1;
  const text = stripQuellenRefs(raw);

  switch (block.type) {
    case "text":
      return (
        <p className="leading-relaxed" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
      );

    case "warnung":
      return (
        <div className="my-3 flex gap-3 rounded-xl border border-[var(--lern-error)]/30 bg-[var(--lern-error)]/5 p-4">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[var(--lern-error)]" />
          <div>
            <p className="font-semibold text-[var(--lern-error)]">Achtung</p>
            <p className="mt-1 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{text}</p>
          </div>
        </div>
      );

    case "merke":
      return (
        <div className="my-3 flex gap-3 rounded-xl border border-[var(--lern-accent)]/30 bg-[var(--lern-accent)]/5 p-4">
          <Lightbulb size={20} className="mt-0.5 shrink-0 text-[var(--lern-accent)]" />
          <div>
            <p className="font-semibold text-[var(--lern-accent)]">Merke</p>
            <p className="mt-1 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{text}</p>
          </div>
        </div>
      );

    case "tabelle":
      if (!block.headers || !block.rows) return null;
      return (
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

    case "bild":
      return (
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

    case "querverweis":
      return (
        <div className="my-2 flex items-center gap-2 rounded-lg bg-[var(--lern-accent)]/5 px-3 py-2 text-sm">
          <ArrowRight size={14} className="text-[var(--lern-accent)]" />
          <span>{text}</span>
        </div>
      );

    case "rechner":
      return (
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

    default:
      return <p>{text}</p>;
  }
}

function KapitelAccordion({
  kapitel,
  sprachLevel,
  isGelesen,
  onGelesen,
}: {
  kapitel: ArtikelKapitel;
  sprachLevel: "C1" | "B1";
  isGelesen: boolean;
  onGelesen: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const opening = !isOpen;
    setIsOpen(opening);
    if (opening && !isGelesen) {
      onGelesen();
    }
  };

  const tagColors: Record<string, string> = {
    anatomie: "bg-blue-100 text-blue-700",
    pflege: "bg-green-100 text-green-700",
    krankheitslehre: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="border-b border-[var(--lern-border)]">
      <button
        onClick={handleToggle}
        className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-[var(--lern-bg-secondary)]"
      >
        <div className="flex size-6 shrink-0 items-center justify-center">
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{kapitel.titel}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagColors[kapitel.tag] || ""}`}>
              {kapitel.tag}
            </span>
          </div>
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
            <div className="space-y-3 px-4 pb-6 pt-2 text-sm" style={{ color: "#1d1d1f" }}>
              {kapitel.bloecke.map((block, i) => (
                <ArtikelBlockView key={i} block={block} sprachLevel={sprachLevel} />
              ))}
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

export function ArtikelRenderer({ kapitel, sprachLevel, onKapitelGelesen, geleseneKapitel }: ArtikelRendererProps) {
  const gelesen = geleseneKapitel || new Set<string>();
  const gesamtKapitel = kapitel.length;
  const geleseneAnzahl = kapitel.filter((k) => gelesen.has(k.kapitelId)).length;
  const fortschritt = gesamtKapitel > 0 ? Math.round((geleseneAnzahl / gesamtKapitel) * 100) : 0;

  return (
    <div style={{ color: "#1d1d1f" }}>
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
          />
        ))}
      </div>
    </div>
  );
}

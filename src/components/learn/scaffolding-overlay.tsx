"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ScaffoldingResult } from "@/app/api/ki-scaffolding/route";

interface ScaffoldingOverlayProps {
  /** Scaffolding-Daten vom KI-Endpoint */
  data: ScaffoldingResult | null;
  /** Lädt KI-Antwort noch */
  loading: boolean;
  /** Overlay schließen → weiter zum nächsten Step */
  onClose: () => void;
}

/**
 * Bottom-Sheet Overlay das nach einer falschen Antwort erscheint.
 * Zeigt KI-generiertes Sandwich-Feedback + alternative Erklärung.
 * VISION.md: "Nicht 'Falsch. Richtig ist B.' — sondern erklären"
 */
export function ScaffoldingOverlay({ data, loading, onClose }: ScaffoldingOverlayProps) {
  const show = loading || data !== null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-[var(--lern-bg-primary)] shadow-xl max-h-[85vh] overflow-y-auto"
          >
            {/* Drag Handle */}
            <div className="sticky top-0 bg-[var(--lern-bg-primary)] pt-4 pb-2 px-6 rounded-t-3xl">
              <div className="mx-auto h-1 w-12 rounded-full bg-[var(--lern-border)]" />
            </div>

            <div className="px-6 pb-8 space-y-4">
              {loading ? (
                <LoadingState />
              ) : data ? (
                <FeedbackContent data={data} onClose={onClose} />
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LoadingState() {
  return (
    <div className="py-8 text-center space-y-4">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[var(--lern-accent)] border-t-transparent" />
      <p className="text-sm text-[var(--lern-text-secondary)]">
        Lass mich dir das anders erklären...
      </p>
    </div>
  );
}

function FeedbackContent({ data, onClose }: { data: ScaffoldingResult; onClose: () => void }) {
  return (
    <>
      {/* Sandwich: Lob */}
      <div className="rounded-xl bg-[#6B8F71]/8 border border-[#6B8F71]/20 p-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 w-7 h-7 rounded-full bg-[#6B8F71]/15 flex items-center justify-center text-[#6B8F71] text-sm font-bold">
            +
          </span>
          <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">
            {data.sandwich.lob}
          </p>
        </div>
      </div>

      {/* Sandwich: Korrektur */}
      <div className="rounded-xl bg-[#D4956A]/8 border border-[#D4956A]/20 p-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 w-7 h-7 rounded-full bg-[#D4956A]/15 flex items-center justify-center text-[#D4956A] text-sm font-bold">
            !
          </span>
          <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">
            {data.sandwich.korrektur}
          </p>
        </div>
      </div>

      {/* Alternative Erklärung */}
      {data.alternativeErklaerung && (
        <div className="rounded-xl bg-[var(--lern-accent)]/8 border border-[var(--lern-accent)]/20 p-4">
          <p className="text-xs font-bold text-[var(--lern-accent)] mb-2 uppercase tracking-wide">
            {strategieLabel(data.strategieTyp)}
          </p>
          <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">
            {data.alternativeErklaerung}
          </p>
        </div>
      )}

      {/* Sandwich: Ermutigung */}
      <div className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-4">
        <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed font-medium">
          {data.sandwich.ermutigung}
        </p>
      </div>

      {/* Weiter-Button */}
      <button
        onClick={onClose}
        className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:opacity-90"
      >
        Verstanden, weiter
      </button>
    </>
  );
}

function strategieLabel(typ: string): string {
  switch (typ) {
    case "analogie": return "Anders gedacht";
    case "geschichte": return "Eine Geschichte";
    case "vergleich": return "Im Vergleich";
    case "schritt-fuer-schritt": return "Schritt für Schritt";
    case "alltagsbezug": return "Aus dem Alltag";
    case "eselsbruecke": return "Eselsbrücke";
    default: return "Anders erklärt";
  }
}

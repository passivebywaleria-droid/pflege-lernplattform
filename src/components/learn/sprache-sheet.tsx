"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMutterspracheStore, MUTTERSPRACHE_OPTIONS, type Muttersprache } from "@/hooks/use-muttersprache";

interface SpracheSheetProps {
  open: boolean;
  onClose: () => void;
  sprachLevel: "c1" | "b1";
  onSprachLevelChange: (level: "c1" | "b1") => void;
}

/**
 * Bottom-Sheet für die beiden Sprach-Achsen im Situation-Player:
 * 1. Sprachniveau (C1 Fachsprache / B1 einfache Sprache) — schaltet contentB1/explanationB1 etc.
 * 2. Muttersprache — schaltet die Glossar-Übersetzung im Fachbegriff-Tooltip (z. B. Arabisch, RTL).
 * Demo-Pfad Sahne-Pilot: macht B1-Tabs + AR-Sprachbrücke im Player erreichbar.
 */
export function SpracheSheet({ open, onClose, sprachLevel, onSprachLevelChange }: SpracheSheetProps) {
  const { sprache, setSprache } = useMutterspracheStore();

  const handleMuttersprache = (code: Muttersprache) => {
    setSprache(code);
  };

  return (
    <AnimatePresence>
      {open && (
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
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-[var(--lern-bg-primary)] p-6 pb-10 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            {/* Drag Handle — tippbar zum Schließen */}
            <button
              onClick={onClose}
              className="mx-auto mb-4 block h-1 w-12 rounded-full bg-[var(--lern-border)]"
              aria-label="Schließen"
            />

            <h2 className="text-base font-bold text-[var(--lern-text-primary)] mb-1">
              Sprache
            </h2>
            <p className="text-sm text-[var(--lern-text-secondary)] mb-4">
              Wähle dein Sprachniveau und deine Muttersprache — beides kannst du jederzeit ändern.
            </p>

            {/* Achse 1: Sprachniveau */}
            <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-2">Sprachniveau</h3>
            <div className="grid grid-cols-2 gap-2 mb-5">
              <button
                onClick={() => onSprachLevelChange("c1")}
                aria-pressed={sprachLevel === "c1"}
                className={`rounded-xl p-3.5 text-left transition-all border-[1.5px] ${
                  sprachLevel === "c1"
                    ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] ring-2 ring-[var(--lern-accent)]/30"
                    : "bg-[var(--lern-card-bg)] border-[var(--lern-border)] active:scale-[0.97]"
                }`}
              >
                <p className="text-sm font-semibold text-[var(--lern-text-primary)]">Fachsprache</p>
                <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">Volle Fachtexte (C1)</p>
              </button>
              <button
                onClick={() => onSprachLevelChange("b1")}
                aria-pressed={sprachLevel === "b1"}
                className={`rounded-xl p-3.5 text-left transition-all border-[1.5px] ${
                  sprachLevel === "b1"
                    ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] ring-2 ring-[var(--lern-accent)]/30"
                    : "bg-[var(--lern-card-bg)] border-[var(--lern-border)] active:scale-[0.97]"
                }`}
              >
                <p className="text-sm font-semibold text-[var(--lern-text-primary)]">Einfache Sprache</p>
                <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">Kurze Sätze, Fachwörter erklärt (B1)</p>
              </button>
            </div>

            {/* Achse 2: Muttersprache — steuert die Glossar-Übersetzung */}
            <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-1">Muttersprache</h3>
            <p className="text-xs text-[var(--lern-text-tertiary)] mb-2">
              Fachbegriffe im Glossar werden zusätzlich in deiner Sprache angezeigt.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {MUTTERSPRACHE_OPTIONS.filter((o) => o.code !== "de").map((option) => (
                <button
                  key={option.code}
                  onClick={() => handleMuttersprache(option.code)}
                  aria-pressed={sprache === option.code}
                  className={`rounded-xl p-3.5 text-left transition-all border-[1.5px] ${
                    sprache === option.code
                      ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] ring-2 ring-[var(--lern-accent)]/30"
                      : "bg-[var(--lern-card-bg)] border-[var(--lern-border)] active:scale-[0.97]"
                  }`}
                >
                  <p className="text-sm font-medium text-[var(--lern-text-primary)]">{option.label}</p>
                  <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">{option.labelDe}</p>
                </button>
              ))}
            </div>
            <button
              onClick={() => handleMuttersprache("de")}
              aria-pressed={sprache === "de"}
              className={`w-full mt-2 rounded-xl p-3.5 text-left transition-all border-[1.5px] ${
                sprache === "de"
                  ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] ring-2 ring-[var(--lern-accent)]/30"
                  : "bg-[var(--lern-card-bg)] border-[var(--lern-border)] active:scale-[0.97]"
              }`}
            >
              <p className="text-sm font-medium text-[var(--lern-text-primary)]">Deutsch ist meine Muttersprache</p>
              <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">Keine Übersetzungen nötig</p>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

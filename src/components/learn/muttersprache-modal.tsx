"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMutterspracheStore, MUTTERSPRACHE_OPTIONS, type Muttersprache } from "@/hooks/use-muttersprache";

interface MutterspracheModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Bottom-Sheet-Modal zur Auswahl der Muttersprache.
 * Wird beim ersten Besuch einer Lern-Session angezeigt.
 * Schüler wählt seine Sprache → nur diese wird im Glossar-Tooltip angezeigt.
 */
export function MutterspracheModal({ open, onClose }: MutterspracheModalProps) {
  const { sprache, setSprache } = useMutterspracheStore();

  const handleSelect = (code: Muttersprache) => {
    setSprache(code);
    onClose();
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
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-[var(--lern-bg-primary)] p-6 pb-10 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {/* Drag Handle */}
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[var(--lern-border)]" />

            <h2 className="text-xl font-bold text-[var(--lern-text-primary)] mb-2">
              Deine Muttersprache
            </h2>
            <p className="text-sm text-[var(--lern-text-secondary)] mb-5">
              Wähle deine Muttersprache. Fachbegriffe werden dann in deiner Sprache übersetzt.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {MUTTERSPRACHE_OPTIONS.filter(o => o.code !== "de").map((option) => (
                <button
                  key={option.code}
                  onClick={() => handleSelect(option.code)}
                  className={`rounded-xl p-4 text-left transition-all border ${
                    sprache === option.code
                      ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] ring-2 ring-[var(--lern-accent)]/30"
                      : "bg-[var(--lern-card-bg)] border-[var(--lern-border)] active:scale-[0.97]"
                  }`}
                >
                  <p className="text-base font-medium text-[var(--lern-text-primary)]">{option.label}</p>
                  <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">{option.labelDe}</p>
                </button>
              ))}
            </div>

            {/* Deutsch als Muttersprachler — braucht keine Übersetzung */}
            <button
              onClick={() => handleSelect("de")}
              className={`w-full mt-3 rounded-xl p-4 text-left transition-all border ${
                sprache === "de"
                  ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] ring-2 ring-[var(--lern-accent)]/30"
                  : "bg-[var(--lern-card-bg)] border-[var(--lern-border)] active:scale-[0.97]"
              }`}
            >
              <p className="text-base font-medium text-[var(--lern-text-primary)]">Deutsch ist meine Muttersprache</p>
              <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">Keine Übersetzungen nötig</p>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

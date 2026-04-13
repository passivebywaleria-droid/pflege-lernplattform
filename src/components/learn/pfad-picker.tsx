"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { SessionLabel } from "@/lib/content-loader";

interface PfadPickerProps {
  activeSession: number;
  availableSessions: number[];
  sessionLabels: Record<string, SessionLabel>;
  onSelect: (session: number) => void;
  onClose: () => void;
}

const TAG_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  anatomie: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  pflege: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  krankheitslehre: { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
};

const GROUPS = [
  { label: "Grundlagen", range: [1, 2, 3] },
  { label: "Klinische Pflege", range: [4, 5, 6, 7, 8, 9] },
  { label: "Spezialwissen", range: [10, 11, 12] },
];

export function PfadPicker({
  activeSession,
  availableSessions,
  sessionLabels,
  onSelect,
  onClose,
}: PfadPickerProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Sheet */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl"
          style={{ color: "#1d1d1f" }}
        >
          {/* Handle */}
          <div className="sticky top-0 bg-white pt-3 pb-2 px-6 rounded-t-3xl z-10">
            <div className="w-10 h-1 rounded-full bg-gray-300 mx-auto mb-3" />
            <h2 className="text-lg font-bold">Übungspfad wählen</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Wähle ein Thema zum Üben
            </p>
          </div>

          <div className="px-4 pb-6 space-y-5">
            {GROUPS.map((group) => {
              const groupSessions = group.range.filter((s) =>
                availableSessions.includes(s)
              );
              if (groupSessions.length === 0) return null;

              return (
                <div key={group.label}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                    {group.label}
                  </p>
                  <div className="space-y-1.5">
                    {groupSessions.map((s) => {
                      const label = sessionLabels[`s${s}`];
                      if (!label) return null;

                      const isActive = s === activeSession;
                      const tagColor = TAG_COLORS[label.tag] ?? TAG_COLORS.pflege;
                      const hasSteps = true; // TODO: check actual step count

                      return (
                        <button
                          key={s}
                          onClick={() => {
                            onSelect(s);
                            onClose();
                          }}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                            isActive
                              ? "bg-[#C4877F]/10 border-2 border-[#C4877F]"
                              : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 active:scale-[0.98]"
                          }`}
                        >
                          {/* Nummer */}
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                              isActive
                                ? "bg-[#C4877F] text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {s}
                          </div>

                          {/* Titel + Meta */}
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-semibold truncate ${
                                isActive ? "text-[#C4877F]" : "text-gray-800"
                              }`}
                            >
                              {label.title}
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span
                                className={`inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full ${tagColor.bg} ${tagColor.text}`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${tagColor.dot}`}
                                />
                                {label.tag === "krankheitslehre"
                                  ? "Krankheitsl."
                                  : label.tag.charAt(0).toUpperCase() +
                                    label.tag.slice(1)}
                              </span>
                              <span className="text-[10px] text-gray-400">
                                Bloom {label.bloomRange}
                              </span>
                            </div>
                          </div>

                          {/* Status */}
                          {isActive && (
                            <span className="text-xs font-semibold text-[#C4877F] shrink-0">
                              Aktiv
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

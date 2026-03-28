"use client";

import { motion } from "framer-motion";
import type { ErlebnisModus } from "../../../content/ce-05/_types";

const MODUS_CONFIG: Record<
  ErlebnisModus,
  { icon: string; label: string; slogan: string; farbe: string }
> = {
  story: {
    icon: "📖",
    label: "Story",
    slogan: "Der Leitfall lebt",
    farbe: "#0071e3",
  },
  challenge: {
    icon: "⚡",
    label: "Challenge",
    slogan: "Zeig was du weisst",
    farbe: "#FF9500",
  },
  puzzle: {
    icon: "🧩",
    label: "Puzzle",
    slogan: "Zusammenhaenge entdecken",
    farbe: "#AF52DE",
  },
  entdecker: {
    icon: "🔍",
    label: "Entdecker",
    slogan: "Neues Wissen aufnehmen",
    farbe: "#30D158",
  },
  sortierstation: {
    icon: "📋",
    label: "Sortierstation",
    slogan: "Ordnung schaffen",
    farbe: "#5AC8FA",
  },
  schreibtisch: {
    icon: "✍️",
    label: "Schreibtisch",
    slogan: "Selber formulieren",
    farbe: "#FF3B30",
  },
  "praxis-sim": {
    icon: "🏥",
    label: "Praxis-Simulation",
    slogan: "Handeln lernen",
    farbe: "#FF375F",
  },
  checkpoint: {
    icon: "📊",
    label: "Checkpoint",
    slogan: "Wo stehst du?",
    farbe: "#FFD60A",
  },
};

interface ModusTransitionProps {
  modus: ErlebnisModus;
  onDone: () => void;
}

export function ModusTransition({ modus, onDone }: ModusTransitionProps) {
  const config = MODUS_CONFIG[modus];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onAnimationComplete={() => {
        setTimeout(onDone, 1200);
      }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 12 }}
        className="text-5xl mb-4"
      >
        {config.icon}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span
          className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold text-white mb-2"
          style={{ backgroundColor: config.farbe }}
        >
          {config.label}
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-[#6e6e73] mt-2"
      >
        {config.slogan}
      </motion.p>
    </motion.div>
  );
}

export { MODUS_CONFIG };

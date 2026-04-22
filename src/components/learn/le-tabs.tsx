"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Zap, Puzzle, User, Building2, FileText } from "lucide-react";

export type LeTab = "wissen" | "snack" | "ueben" | "fall" | "praxis" | "pruefung";

interface LeTabsProps {
  activeTab: LeTab;
  onTabChange: (tab: LeTab) => void;
  /** Ob Artikel-Content vorhanden ist (sonst Tab ausgegraut) */
  hasArtikel?: boolean;
  /** Ob Fallverläufe vorhanden sind */
  hasFallverlaeufe?: boolean;
  /** Ob Praxis-Übungen vorhanden sind */
  hasPraxis?: boolean;
  /** Ob Lern-Snacks vorhanden sind */
  hasLernSnack?: boolean;
}

const TABS: { id: LeTab; label: string; icon: typeof BookOpen }[] = [
  { id: "wissen", label: "Wissen", icon: BookOpen },
  { id: "snack", label: "Snack", icon: Zap },
  { id: "ueben", label: "Üben", icon: Puzzle },
  { id: "fall", label: "Fall", icon: User },
  { id: "praxis", label: "Praxis", icon: Building2 },
  { id: "pruefung", label: "Prüfung", icon: FileText },
];

export function LeTabs({ activeTab, onTabChange, hasArtikel, hasFallverlaeufe, hasPraxis, hasLernSnack }: LeTabsProps) {
  const isDisabled = (tab: LeTab): boolean => {
    if (tab === "wissen" && !hasArtikel) return true;
    if (tab === "snack" && !hasLernSnack) return true;
    if (tab === "fall" && !hasFallverlaeufe) return true;
    if (tab === "praxis" && !hasPraxis) return true;
    return false;
  };

  return (
    <div className="flex w-full shrink-0 border-t border-[var(--lern-border)] bg-[var(--lern-bg)] pb-[env(safe-area-inset-bottom)]" style={{ color: "var(--lern-text-primary)" }}>
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const disabled = isDisabled(tab.id);
        const active = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => !disabled && onTabChange(tab.id)}
            disabled={disabled}
            className={`relative flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-all active:scale-95 ${
              disabled
                ? "cursor-not-allowed opacity-30"
                : active
                  ? "text-[var(--lern-accent)]"
                  : "text-[var(--lern-text-secondary)] hover:text-[var(--lern-text)]"
            }`}
          >
            <Icon size={18} strokeWidth={active ? 2.2 : 1.5} />
            <span>{tab.label}</span>
            {active && (
              <motion.div
                layoutId="le-tab-indicator"
                className="absolute top-0 left-2 right-2 h-0.5 rounded-full bg-[var(--lern-accent)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

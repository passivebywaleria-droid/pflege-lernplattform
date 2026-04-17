"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import type { LernSnack } from "../../../content/_types";

interface LernSnackTabProps {
  snacks: LernSnack[];
  sprachLevel: "B1" | "C1";
  leId: string;
}

const TAG_COLORS: Record<string, string> = {
  pflege: "bg-blue-100 text-blue-700",
  anatomie: "bg-green-100 text-green-700",
  krankheitslehre: "bg-red-100 text-red-700",
};

function storageKey(leId: string, itemId: string): string {
  return `lernSnack:${leId}:${itemId}`;
}

export function LernSnackTab({ snacks, sprachLevel, leId }: LernSnackTabProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  // Gespeicherte Haken aus localStorage laden
  useEffect(() => {
    const loaded = new Set<string>();
    for (const snack of snacks) {
      for (const item of snack.items) {
        if (localStorage.getItem(storageKey(leId, item.id)) === "1") {
          loaded.add(item.id);
        }
      }
    }
    setChecked(loaded);
  }, [snacks, leId]);

  const totalItems = snacks.reduce((sum, s) => sum + s.items.length, 0);
  const checkedCount = checked.size;

  const toggleItem = useCallback(
    (itemId: string) => {
      setChecked((prev) => {
        const next = new Set(prev);
        if (next.has(itemId)) {
          next.delete(itemId);
          localStorage.removeItem(storageKey(leId, itemId));
        } else {
          next.add(itemId);
          localStorage.setItem(storageKey(leId, itemId), "1");
        }
        return next;
      });
    },
    [leId],
  );

  const toggleCollapse = useCallback((kapitelId: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(kapitelId)) {
        next.delete(kapitelId);
      } else {
        next.add(kapitelId);
      }
      return next;
    });
  }, []);

  const progressPercent = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="space-y-6 pb-12">
      {/* Header + Fortschritt */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold" style={{ color: "var(--lern-text)" }}>
          Lern-Snack
        </h2>
        <p className="text-sm" style={{ color: "var(--lern-text-secondary)" }}>
          Kernwissen auf einen Blick — hake ab, was du kannst.
        </p>

        {/* Fortschrittsbalken */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs" style={{ color: "var(--lern-text-secondary)" }}>
            <span>{checkedCount} von {totalItems} Kernfakten</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full" style={{ backgroundColor: "var(--lern-border)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "var(--lern-accent)" }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Kapitel-Snacks */}
      {snacks.map((snack) => {
        const isCollapsed = collapsed.has(snack.kapitelId);
        const kapitelChecked = snack.items.filter((i) => checked.has(i.id)).length;
        const allDone = kapitelChecked === snack.items.length;
        const titel = sprachLevel === "B1" && snack.titelB1 ? snack.titelB1 : snack.titel;

        return (
          <div
            key={snack.kapitelId}
            className="overflow-hidden rounded-lg border"
            style={{ borderColor: "var(--lern-border)", backgroundColor: "var(--lern-card)" }}
          >
            {/* Kapitel-Header */}
            <button
              onClick={() => toggleCollapse(snack.kapitelId)}
              aria-expanded={!isCollapsed}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
            >
              <div className="flex items-center gap-2">
                <span className={`inline-block rounded px-1.5 py-0.5 text-xs font-medium ${TAG_COLORS[snack.tag] ?? "bg-gray-100 text-gray-700"}`}>
                  {snack.tag}
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--lern-text)" }}>
                  {titel}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs tabular-nums"
                  style={{ color: allDone ? "var(--lern-accent)" : "var(--lern-text-secondary)" }}
                >
                  {kapitelChecked}/{snack.items.length}
                </span>
                {isCollapsed ? (
                  <ChevronDown size={16} style={{ color: "var(--lern-text-secondary)" }} />
                ) : (
                  <ChevronUp size={16} style={{ color: "var(--lern-text-secondary)" }} />
                )}
              </div>
            </button>

            {/* Items */}
            {!isCollapsed && (
              <div className="border-t px-4 pb-3 pt-1" style={{ borderColor: "var(--lern-border)" }}>
                {snack.items.map((item) => {
                  const isChecked = checked.has(item.id);
                  const text = sprachLevel === "B1" && item.faktB1 ? item.faktB1 : item.faktC1;

                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-start gap-3 py-2.5 text-left"
                    >
                      {/* Checkbox */}
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                          isChecked
                            ? "border-transparent"
                            : ""
                        }`}
                        style={{
                          borderColor: isChecked ? "transparent" : "var(--lern-border)",
                          backgroundColor: isChecked ? "var(--lern-accent)" : "transparent",
                        }}
                      >
                        {isChecked && <Check size={14} className="text-white" strokeWidth={2.5} />}
                      </div>

                      {/* Text */}
                      <span
                        className={`text-sm leading-relaxed transition-colors ${isChecked ? "line-through opacity-60" : ""}`}
                        style={{ color: "var(--lern-text)" }}
                      >
                        {text}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* Alles geschafft */}
      {checkedCount === totalItems && totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg p-4 text-center text-sm font-medium"
          style={{ backgroundColor: "var(--lern-accent)", color: "white" }}
        >
          Alle Kernfakten abgehakt!
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
  type DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type {
  GlossarEntry,
  PflegewagenZone,
  PflegewagenItem,
} from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import {
  generiereSandwichFeedback,
  SandwichFeedbackDisplay,
} from "./bloom-feedback";
import { StepActionBar } from "./step-action-bar";
import { StepShell } from "./step-shell";

interface StepPflegewagenProps {
  title: string;
  body?: string;
  fragetext: string;
  zonen: PflegewagenZone[];
  items: PflegewagenItem[];
  begruendung: string;
  glossar?: GlossarEntry[];
  sprachLevel: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

const ZONE_VARIANTS: Record<
  NonNullable<PflegewagenZone["variant"]>,
  { border: string; bg: string; text: string; itemBg: string; label: string }
> = {
  primary: {
    border: "border-[#3E5A6A]/40",
    bg: "bg-[#3E5A6A]/8",
    text: "text-[#2F4654]",
    itemBg: "bg-[#3E5A6A]/10",
    label: "Auf den Wagen",
  },
  secondary: {
    border: "border-[#5A7D60]/40",
    bg: "bg-[#5A7D60]/8",
    text: "text-[#4C6A52]",
    itemBg: "bg-[#5A7D60]/10",
    label: "Auf den Wagen",
  },
  discard: {
    border: "border-[var(--lern-text-tertiary)]/30",
    bg: "bg-[var(--lern-text-tertiary)]/5",
    text: "text-[var(--lern-text-secondary)]",
    itemBg: "bg-[var(--lern-text-tertiary)]/8",
    label: "Brauche ich nicht",
  },
};

function DroppableZone({ id, children }: { id: string; children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className={`transition-all ${isOver ? "ring-2 ring-[var(--lern-accent)] rounded-2xl" : ""}`}>
      {children}
    </div>
  );
}

function DraggablePoolItem({ id, disabled, children }: { id: string; disabled: boolean; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id, disabled });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`touch-none ${isDragging ? "opacity-40" : ""}`}
      style={{ cursor: disabled ? "default" : "grab" }}
    >
      {children}
    </div>
  );
}

function getIcon(name: string): LucideIcon {
  const iconKey = name as keyof typeof LucideIcons;
  const Icon = (LucideIcons[iconKey] ?? LucideIcons.Package) as LucideIcon;
  return Icon;
}

export function StepPflegewagen({
  title,
  body,
  fragetext,
  zonen,
  items,
  begruendung,
  glossar,
  sprachLevel,
  onNext,
}: StepPflegewagenProps) {
  const initialPool = useRef([...items].sort(() => Math.random() - 0.5));
  const [pool, setPool] = useState<PflegewagenItem[]>(initialPool.current);
  const [placement, setPlacement] = useState<Record<string, string>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const isB1 = sprachLevel === "b1";

  // DnD Sensoren
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  const [activeId, setActiveId] = useState<string | null>(null);

  // Item in Zone setzen (oder Discard-Zone via id "__discard")
  const handlePlace = (zoneId: string) => {
    if (checked || !selectedItemId) return;
    const item = pool.find((i) => i.id === selectedItemId);
    if (!item) return;
    setPool((p) => p.filter((i) => i.id !== selectedItemId));
    setPlacement((pl) => ({ ...pl, [selectedItemId]: zoneId }));
    setSelectedItemId(null);
  };

  // DnD: Item in Zone droppen
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      setActiveId(null);
      if (!over) return;
      const itemId = active.id as string;
      const zoneId = over.id as string;
      const item = pool.find((i) => i.id === itemId);
      if (!item) return;
      setPool((p) => p.filter((i) => i.id !== itemId));
      setPlacement((pl) => ({ ...pl, [itemId]: zoneId }));
      setSelectedItemId(null);
    },
    [pool]
  );

  // Item aus Zone zurück in Pool
  const handleUnplace = (itemId: string) => {
    if (checked) return;
    const item = items.find((i) => i.id === itemId);
    if (!item) return;
    setPool((p) => [item, ...p]);
    setPlacement((pl) => {
      const next = { ...pl };
      delete next[itemId];
      return next;
    });
  };

  const allPlaced = pool.length === 0;

  const evaluation = items.map((item) => {
    const placedZoneId = placement[item.id];
    const expected = item.korrekteZoneId ?? "__discard";
    return {
      item,
      placedZoneId,
      expected,
      isCorrect: placedZoneId === expected,
    };
  });

  const correctCount = evaluation.filter((e) => e.isCorrect).length;
  const allCorrect = correctCount === items.length;

  const handleCheck = () => {
    if (!allPlaced) return;
    setChecked(true);
  };

  // Hilfs-Renderer für ein Item-Chip
  const renderItem = (
    item: PflegewagenItem,
    opts: {
      selected?: boolean;
      onClick?: () => void;
      isCorrect?: boolean;
      submitted?: boolean;
      compact?: boolean;
    }
  ) => {
    const Icon = getIcon(item.icon);
    const label = (isB1 && item.labelB1) || item.label;

    const borderColor = opts.submitted
      ? opts.isCorrect
        ? "border-[#3E5A6A]"
        : "border-[#C96B5C]"
      : opts.selected
        ? "border-[#5A7D60]"
        : "border-[var(--lern-border)]";

    const bgColor = opts.submitted
      ? opts.isCorrect
        ? "bg-[#3E5A6A]/10"
        : "bg-[#C96B5C]/10"
      : opts.selected
        ? "bg-[#5A7D60]/10"
        : "bg-[var(--lern-bg-primary)]";

    const iconColor = opts.submitted
      ? opts.isCorrect
        ? "text-[#2F4654]"
        : "text-[#3E5A6A]"
      : "text-[var(--lern-text-primary)]";

    return (
      <motion.button
        key={item.id}
        whileTap={!opts.submitted ? { scale: 0.95 } : undefined}
        onClick={opts.onClick}
        disabled={opts.submitted}
        className={`flex ${opts.compact ? "flex-row items-center gap-2 px-3 py-2" : "flex-col items-center gap-1.5 px-3 py-3"} rounded-xl border-[1.5px] ${borderColor} ${bgColor} transition-all ${
          !opts.submitted ? "hover:shadow-sm cursor-pointer" : "cursor-default"
        } focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2 min-w-[80px]`}
        aria-label={label}
      >
        <Icon
          className={`${opts.compact ? "h-5 w-5" : "h-6 w-6"} ${iconColor} shrink-0`}
          aria-hidden="true"
        />
        <span
          className={`text-xs font-medium ${opts.compact ? "" : "text-center"} ${iconColor}`}
        >
          {label}
        </span>
      </motion.button>
    );
  };

  // Titel weglassen wenn ≈ Frage
  const safeTitle = title ?? "";
  const safeFragetext = fragetext ?? "";
  const titleEqualsFrage =
    safeTitle.trim().toLowerCase() === safeFragetext.trim().toLowerCase();
  const question = titleEqualsFrage
    ? safeFragetext
    : safeTitle || safeFragetext;

  return (
    <div style={{ color: "var(--lern-text-primary)" }}>
      <StepShell
        kindLabel="Pflegewagen"
        question={question}
        body={body}
        glossar={glossar}
        tip={
          !checked
            ? "Tippe ein Material an, dann auf den passenden Bereich."
            : undefined
        }
      >
        {!titleEqualsFrage && title && (
          <p className="-mt-2 mb-3 text-sm font-medium text-[var(--lern-text-primary)]">
            <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
          </p>
        )}
        {/* Zonen (Pflegewagen-Bereiche) — Drag-and-Drop + Tap-Fallback */}
        <DndContext
          sensors={sensors}
          onDragStart={(e) => setActiveId(e.active.id as string)}
          onDragEnd={handleDragEnd}
        >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {zonen.map((zone) => {
          const variant = zone.variant ?? "primary";
          const colors = ZONE_VARIANTS[variant];
          const zoneItems = items.filter(
            (item) => placement[item.id] === zone.id
          );
          const zoneLabel = (isB1 && zone.labelB1) || zone.label;
          const zoneDescription =
            (isB1 && zone.beschreibungB1) || zone.beschreibung;

          return (
            <DroppableZone key={zone.id} id={zone.id}>
            <button
              type="button"
              onClick={() => selectedItemId && handlePlace(zone.id)}
              disabled={checked || !selectedItemId}
              className={`w-full text-left rounded-2xl border-[1.5px] ${colors.border} ${colors.bg} p-4 min-h-[140px] flex flex-col gap-2 transition-all ${
                selectedItemId && !checked
                  ? "ring-2 ring-[var(--lern-accent)] ring-offset-2 cursor-pointer"
                  : "cursor-default"
              }`}
              aria-label={`Bereich ${zoneLabel} — ${zoneItems.length} Materialien`}
            >
              <div className="flex items-baseline justify-between">
                <span className={`text-sm font-bold ${colors.text}`}>
                  {zoneLabel}
                </span>
                <span className="text-xs text-[var(--lern-text-tertiary)]">
                  {zoneItems.length}
                </span>
              </div>
              {zoneDescription && (
                <span className="text-xs text-[var(--lern-text-tertiary)]">
                  {zoneDescription}
                </span>
              )}

              {/* Items in dieser Zone */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                <AnimatePresence>
                  {zoneItems.length === 0 && !selectedItemId && !checked && (
                    <span className="text-xs text-[var(--lern-text-tertiary)]/70 italic">
                      noch leer
                    </span>
                  )}
                  {zoneItems.map((item) => {
                    const evalEntry = evaluation.find(
                      (e) => e.item.id === item.id
                    );
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!checked) handleUnplace(item.id);
                        }}
                        role={!checked ? "button" : undefined}
                        tabIndex={!checked ? 0 : undefined}
                      >
                        {renderItem(item, {
                          submitted: checked,
                          isCorrect: evalEntry?.isCorrect,
                          compact: true,
                        })}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </button>
            </DroppableZone>
          );
        })}
      </div>

      {/* Pool — verfügbare Materialien (draggable + tap) */}
      {!checked && pool.length > 0 && (
        <div className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-card-bg,#fafafa)] p-3">
          <span className="text-xs font-bold text-[var(--lern-text-secondary)] block mb-2">
            Material-Pool ({pool.length})
          </span>
          <div className="flex flex-wrap gap-2">
            {pool.map((item) => (
              <DraggablePoolItem key={item.id} id={item.id} disabled={checked}>
                {renderItem(item, {
                  selected: selectedItemId === item.id,
                  onClick: () =>
                    setSelectedItemId(
                      selectedItemId === item.id ? null : item.id
                    ),
                })}
              </DraggablePoolItem>
            ))}
          </div>
        </div>
      )}

      {/* Drag-Overlay */}
      <DragOverlay>
        {activeId && (() => {
          const item = items.find((i) => i.id === activeId);
          if (!item) return null;
          const Icon = getIcon(item.icon);
          return (
            <div className="rounded-xl px-3 py-2 bg-[var(--lern-accent)] text-white shadow-lg flex items-center gap-2 text-sm font-medium">
              <Icon className="h-5 w-5" aria-hidden="true" />
              {item.label}
            </div>
          );
        })()}
      </DragOverlay>
      </DndContext>

      {/* Feedback nach Check (im Content) */}
      {checked && (
        <div className="space-y-3">
          <SandwichFeedbackDisplay
            correct={allCorrect}
            feedback={generiereSandwichFeedback(
              allCorrect,
              `${correctCount} von ${items.length} richtig zugeordnet`,
              begruendung
            )}
          />

          <details className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-card-bg,#fafafa)] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--lern-text-secondary)]">
              Warum welches Material?
            </summary>
            <ul className="mt-3 space-y-2 text-sm">
              {evaluation.map(({ item, isCorrect }) => {
                const Icon = getIcon(item.icon);
                const erklaerung =
                  (isB1 && item.erklaerungB1) || item.erklaerung;
                const label = (isB1 && item.labelB1) || item.label;
                return (
                  <li
                    key={item.id}
                    className="flex gap-3 items-start pb-2 border-b border-[var(--lern-border)]/40 last:border-b-0 last:pb-0"
                  >
                    <Icon
                      className={`h-5 w-5 mt-0.5 shrink-0 ${
                        isCorrect ? "text-[#2F4654]" : "text-[#3E5A6A]"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-[var(--lern-text-primary)]">
                        {label}
                      </span>
                      <p className="text-xs text-[var(--lern-text-secondary)] leading-relaxed mt-0.5">
                        {erklaerung}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
      )}
      </StepShell>

      {/* Action-Bar fix unten (Bundle-Stil) */}
      {!checked && allPlaced && (
        <StepActionBar>
          <button
            onClick={handleCheck}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] text-white font-semibold py-3.5 hover:bg-[#4C6A52] transition-colors"
          >
            Prüfen
          </button>
        </StepActionBar>
      )}
      {checked && (
        <StepActionBar>
          <button
            onClick={() => onNext(allCorrect)}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] text-white font-semibold py-3.5 hover:bg-[#4C6A52] transition-colors"
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </div>
  );
}

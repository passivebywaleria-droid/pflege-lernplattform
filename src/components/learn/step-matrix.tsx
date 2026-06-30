"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
  type DragEndEvent,
  type DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { StepActionBar } from "./step-action-bar";

interface MatrixItem {
  id: string;
  text: string;
  correctQuadrant: 1 | 2 | 3 | 4;
}

interface StepMatrixProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  instruction: string;
  axisX: { label: string; low: string; high: string };
  axisY: { label: string; low: string; high: string };
  items: MatrixItem[];
  onNext: (correct: boolean) => void;
}

function DraggableItem({
  item,
  isSelected,
  disabled,
}: {
  item: MatrixItem;
  isSelected: boolean;
  disabled: boolean;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    disabled,
  });
  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      className={`rounded-xl px-3 py-2 text-sm font-medium border transition-all select-none touch-none ${
        isDragging
          ? "opacity-40"
          : isSelected
            ? "bg-[var(--lern-accent)]/15 border-[var(--lern-accent)] text-[var(--lern-accent)]"
            : "bg-[var(--lern-bg-primary)] border-[var(--lern-border)] text-[var(--lern-text-primary)]"
      }`}
      style={{ cursor: disabled ? "default" : "grab" }}
    >
      {item.text}
    </motion.div>
  );
}

function DroppableQuadrant({
  q,
  label,
  colorClass,
  items,
  submitted,
  isOver,
  children,
}: {
  q: number;
  label: string;
  colorClass: string;
  items: MatrixItem[];
  submitted: boolean;
  isOver: boolean;
  children?: React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({ id: `q${q}` });
  return (
    <div
      ref={setNodeRef}
      className={`min-h-[90px] rounded-xl border-[1.5px] p-2.5 transition-all ${colorClass} ${
        isOver ? "ring-2 ring-[var(--lern-accent)] scale-[1.02]" : ""
      }`}
    >
      <p className="text-[10px] font-medium text-[var(--lern-text-tertiary)] mb-1.5">
        {label}
      </p>
      <div className="flex flex-wrap gap-1">
        {items.map((it) => (
          <span
            key={it.id}
            className={`text-xs rounded-lg px-2 py-1 font-medium ${
              submitted
                ? it.correctQuadrant === q
                  ? "bg-[#3E5A6A]/20 text-[#3E5A6A]"
                  : "bg-[#C96B5C]/20 text-[#C96B5C] line-through"
                : "bg-[var(--lern-accent)]/15 text-[var(--lern-accent)]"
            }`}
          >
            {it.text}
          </span>
        ))}
        {children}
      </div>
    </div>
  );
}

export function StepMatrix({
  title,
  body,
  glossar,
  instruction,
  axisX,
  axisY,
  items,
  onNext,
}: StepMatrixProps) {
  const [placements, setPlacements] = useState<Record<string, number | null>>(
    Object.fromEntries(items.map((it) => [it.id, null]))
  );
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [overQ, setOverQ] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      setActiveId(null);
      setOverQ(null);
      if (over && over.id.toString().startsWith("q")) {
        const quadrant = parseInt(over.id.toString().replace("q", ""));
        setPlacements((prev) => ({ ...prev, [active.id]: quadrant }));
      }
    },
    []
  );

  const handleDragOver = useCallback((event: { over: { id: string | number } | null }) => {
    setOverQ(event.over?.id?.toString() ?? null);
  }, []);

  // Fallback: Tap-to-Select + Tap-Quadrant (für Accessibility + wenn Drag schwierig)
  const handleQuadrantTap = useCallback(
    (quadrant: number) => {
      if (submitted || !selectedItem) return;
      setPlacements((prev) => ({ ...prev, [selectedItem]: quadrant }));
      setSelectedItem(null);
    },
    [submitted, selectedItem]
  );

  const handleItemTap = useCallback(
    (itemId: string) => {
      if (submitted) return;
      setSelectedItem((prev) => (prev === itemId ? null : itemId));
    },
    [submitted]
  );

  const unplaced = items.filter((it) => placements[it.id] === null);
  const allPlaced = unplaced.length === 0;
  const correctCount = items.filter(
    (it) => placements[it.id] === it.correctQuadrant
  ).length;
  const allCorrect = correctCount === items.length;

  const quadrantColors = [
    "",
    "bg-[#3E5A6A]/8 border-[#3E5A6A]/20",
    "bg-[#D4956A]/8 border-[#D4956A]/20",
    "bg-[#5A7D60]/8 border-[#5A7D60]/20",
    "bg-[#C96B5C]/8 border-[#C96B5C]/20",
  ];

  const quadrantLabels = [
    "",
    `${axisY.high} + ${axisX.low}`,
    `${axisY.high} + ${axisX.high}`,
    `${axisY.low} + ${axisX.low}`,
    `${axisY.low} + ${axisX.high}`,
  ];

  const activeItem = activeId ? items.find((it) => it.id === activeId) : null;

  return (
    <>
      <div
        className="space-y-5 pb-20"
        style={{ color: "var(--lern-text-primary)" }}
      >
        <h2 className="text-base font-bold">{title}</h2>

        {body && (
          <p className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
            <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
          </p>
        )}

        <div className="rounded-xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-3">
          <p className="text-sm font-medium">{instruction}</p>
          {selectedItem && !activeId && (
            <p className="text-xs text-[var(--lern-accent)] mt-1">
              Tippe auf ein Feld — oder ziehe das Element dorthin.
            </p>
          )}
        </div>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver as any}
        >
          {/* Achsen */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-medium text-[var(--lern-text-tertiary)]">
              <span>{axisX.low}</span>
              <span className="font-semibold text-[var(--lern-text-secondary)]">
                {axisX.label} →
              </span>
              <span>{axisX.high}</span>
            </div>

            <div className="text-[10px] font-semibold text-[var(--lern-text-secondary)] text-center mb-1">
              ↑ {axisY.label}
            </div>

            {/* 2×2 Grid */}
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((q) => (
                <div key={q} onClick={() => handleQuadrantTap(q)}>
                  <DroppableQuadrant
                    q={q}
                    label={quadrantLabels[q]}
                    colorClass={quadrantColors[q]}
                    items={items.filter((it) => placements[it.id] === q)}
                    submitted={submitted}
                    isOver={overQ === `q${q}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Unplatzierte Items — draggable */}
          {unplaced.length > 0 && !submitted && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-[var(--lern-text-tertiary)]">
                Noch einzuordnen:
              </p>
              <div className="flex flex-wrap gap-2">
                {unplaced.map((it) => (
                  <div key={it.id} onClick={() => handleItemTap(it.id)}>
                    <DraggableItem
                      item={it}
                      isSelected={selectedItem === it.id}
                      disabled={submitted}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <DragOverlay>
            {activeItem && (
              <div className="rounded-xl px-3 py-2 text-sm font-medium bg-[var(--lern-accent)] text-white shadow-lg">
                {activeItem.text}
              </div>
            )}
          </DragOverlay>
        </DndContext>

        {/* Feedback nach Submit */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl p-4 ${
              allCorrect
                ? "bg-[#3E5A6A]/10 border border-[#3E5A6A]/30"
                : correctCount >= items.length / 2
                  ? "bg-[#D4956A]/10 border border-[#D4956A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <p className="font-semibold text-sm">
              {allCorrect
                ? "Alle richtig eingeordnet!"
                : `${correctCount} von ${items.length} richtig.`}
            </p>
          </motion.div>
        )}
      </div>

      {!submitted ? (
        <StepActionBar>
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allPlaced}
            className="flex-1 rounded-xl py-3 text-sm font-semibold text-white transition-colors disabled:opacity-40"
            style={{ backgroundColor: "var(--lern-accent)" }}
          >
            Prüfen
          </button>
        </StepActionBar>
      ) : (
        <StepActionBar>
          <button
            onClick={() => onNext(allCorrect)}
            className="flex-1 rounded-xl py-3 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--lern-accent)" }}
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </>
  );
}

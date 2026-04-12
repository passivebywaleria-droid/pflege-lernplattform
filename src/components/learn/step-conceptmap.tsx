"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";

interface ConceptMapNode {
  id: string;
  label: string;
  fixed?: boolean;
}

interface ConceptMapConnection {
  from: string;
  to: string;
  label?: string;
}

interface StepConceptMapProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  instruction: string;
  nodes: ConceptMapNode[];
  correctConnections: ConceptMapConnection[];
  availableLabels?: string[];
  onNext: (correct: boolean) => void;
}

export function StepConceptMap({
  title,
  body,
  glossar: _glossar,
  instruction,
  nodes,
  correctConnections,
  onNext,
}: StepConceptMapProps) {
  // Vereinfacht: Schüler wählt Paare aus (from → to)
  const [connections, setConnections] = useState<{ from: string; to: string }[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleNodeClick = useCallback(
    (nodeId: string) => {
      if (submitted) return;
      if (selectedNode === null) {
        setSelectedNode(nodeId);
      } else if (selectedNode === nodeId) {
        setSelectedNode(null);
      } else {
        // Verbindung erstellen (vermeiden von Duplikaten)
        const exists = connections.some(
          (c) => (c.from === selectedNode && c.to === nodeId) || (c.from === nodeId && c.to === selectedNode)
        );
        if (!exists) {
          setConnections((prev) => [...prev, { from: selectedNode, to: nodeId }]);
        }
        setSelectedNode(null);
      }
    },
    [submitted, selectedNode, connections],
  );

  const removeConnection = useCallback(
    (idx: number) => {
      if (submitted) return;
      setConnections((prev) => prev.filter((_, i) => i !== idx));
    },
    [submitted],
  );

  // Prüfen: Wie viele correctConnections wurden gefunden?
  const matchedCorrect = correctConnections.filter((cc) =>
    connections.some(
      (uc) =>
        (uc.from === cc.from && uc.to === cc.to) ||
        (uc.from === cc.to && uc.to === cc.from)
    )
  );
  const wrongConnections = connections.filter(
    (uc) =>
      !correctConnections.some(
        (cc) =>
          (uc.from === cc.from && uc.to === cc.to) ||
          (uc.from === cc.to && uc.to === cc.from)
      )
  );
  const score = correctConnections.length > 0
    ? matchedCorrect.length / correctConnections.length
    : 0;

  // Einfaches Grid-Layout für Nodes
  const nodePositions = nodes.map((_, i) => {
    const cols = Math.min(3, nodes.length);
    const col = i % cols;
    const row = Math.floor(i / cols);
    return { x: (col / Math.max(cols - 1, 1)) * 100, y: row * 100 };
  });

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">{body}</p>
      )}

      <div className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-4">
        <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>
        <p className="text-sm text-[var(--lern-text-tertiary)] mt-1">
          Tippe nacheinander auf zwei Begriffe, um sie zu verbinden.
        </p>
      </div>

      {/* Concept Map — Node Grid */}
      <div className="relative rounded-2xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-6 min-h-[200px]">
        {/* SVG Verbindungslinien */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {connections.map((conn, i) => {
            const fromIdx = nodes.findIndex((n) => n.id === conn.from);
            const toIdx = nodes.findIndex((n) => n.id === conn.to);
            if (fromIdx < 0 || toIdx < 0) return null;
            const cols = Math.min(3, nodes.length);
            const fromX = 48 + (fromIdx % cols) * ((100 - 96 / cols) / Math.max(cols - 1, 1)) * 2.5;
            const fromY = 32 + Math.floor(fromIdx / cols) * 64;
            const toX = 48 + (toIdx % cols) * ((100 - 96 / cols) / Math.max(cols - 1, 1)) * 2.5;
            const toY = 32 + Math.floor(toIdx / cols) * 64;

            const isCorrectConn = correctConnections.some(
              (cc) =>
                (cc.from === conn.from && cc.to === conn.to) ||
                (cc.from === conn.to && cc.to === conn.from)
            );

            return (
              <line
                key={i}
                x1={`${fromX}%`}
                y1={fromY}
                x2={`${toX}%`}
                y2={toY}
                stroke={submitted ? (isCorrectConn ? "#6B8F71" : "#C96B5C") : "var(--lern-accent)"}
                strokeWidth={2}
                strokeDasharray={submitted && !isCorrectConn ? "4 4" : "none"}
                opacity={0.5}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="relative grid gap-4" style={{
          gridTemplateColumns: `repeat(${Math.min(3, nodes.length)}, 1fr)`,
          zIndex: 1,
        }}>
          {nodes.map((node, i) => (
            <motion.button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              disabled={submitted}
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl px-3 py-3 text-sm font-medium text-center border-2 transition-all ${
                selectedNode === node.id
                  ? "border-[var(--lern-accent)] bg-[var(--lern-accent)]/15 text-[var(--lern-accent)] shadow-md"
                  : submitted
                    ? "border-[var(--lern-border)] bg-[var(--lern-card-bg)] text-[var(--lern-text-primary)]"
                    : "border-[var(--lern-border)] bg-white dark:bg-[var(--lern-card-bg)] text-[var(--lern-text-primary)] hover:border-[var(--lern-accent)]/50"
              }`}
              style={{ position: "relative" }}
            >
              {node.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Verbindungsliste */}
      {connections.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-medium text-[var(--lern-text-tertiary)]">Verbindungen ({connections.length}):</p>
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from);
            const toNode = nodes.find((n) => n.id === conn.to);
            const isCorrectConn = submitted && correctConnections.some(
              (cc) =>
                (cc.from === conn.from && cc.to === conn.to) ||
                (cc.from === conn.to && cc.to === conn.from)
            );
            return (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ${
                  submitted
                    ? isCorrectConn
                      ? "bg-[#6B8F71]/10 text-[#6B8F71]"
                      : "bg-[#C96B5C]/10 text-[#C96B5C]"
                    : "bg-[var(--lern-card-bg)]"
                }`}
              >
                <span>{fromNode?.label}</span>
                <span className="text-[var(--lern-text-tertiary)]">↔</span>
                <span>{toNode?.label}</span>
                {!submitted && (
                  <button
                    onClick={() => removeConnection(i)}
                    className="ml-auto text-[var(--lern-text-tertiary)] hover:text-[#C96B5C] text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={connections.length === 0}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40"
        >
          Antwort prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              score >= 0.8
                ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                : score >= 0.5
                  ? "bg-[#D4956A]/10 border border-[#D4956A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <p className="font-semibold">
              {score === 1
                ? "Alle Verbindungen stimmen!"
                : `${matchedCorrect.length} von ${correctConnections.length} Verbindungen richtig.`}
              {wrongConnections.length > 0 && ` ${wrongConnections.length} falsche Verbindung${wrongConnections.length > 1 ? "en" : ""}.`}
            </p>
          </motion.div>

          {/* Fehlende korrekte Verbindungen zeigen */}
          {matchedCorrect.length < correctConnections.length && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-3"
            >
              <p className="text-xs font-bold text-[var(--lern-accent)] mb-2">Fehlende Verbindungen:</p>
              {correctConnections
                .filter(
                  (cc) =>
                    !connections.some(
                      (uc) =>
                        (uc.from === cc.from && uc.to === cc.to) ||
                        (uc.from === cc.to && uc.to === cc.from)
                    )
                )
                .map((cc, i) => (
                  <p key={i} className="text-sm text-[var(--lern-text-primary)]/70">
                    {nodes.find((n) => n.id === cc.from)?.label} ↔ {nodes.find((n) => n.id === cc.to)?.label}
                    {cc.label && <span className="text-[var(--lern-text-tertiary)]"> ({cc.label})</span>}
                  </p>
                ))}
            </motion.div>
          )}

          <button
            onClick={() => onNext(score >= 0.8)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}

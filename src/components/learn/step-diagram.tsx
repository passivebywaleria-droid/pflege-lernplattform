"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DiagramNode, DiagramEdge, GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepDiagramProps {
  title: string;
  body?: string;
  instruction: string;
  diagramType: "flowchart" | "mindmap" | "comparison" | "cycle";
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  interactive?: boolean;
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

function FlowchartDiagram({
  nodes,
  edges,
  interactive,
  expandedNode,
  onNodeClick,
}: {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  interactive?: boolean;
  expandedNode: string | null;
  onNodeClick: (id: string) => void;
}) {
  // Simple top-down layout
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // Find root (node that no edge points to)
  const targets = new Set(edges.map((e) => e.to));
  const roots = nodes.filter((n) => !targets.has(n.id));
  if (roots.length === 0 && nodes.length > 0) roots.push(nodes[0]);

  // BFS to get levels
  const levels: DiagramNode[][] = [];
  const visited = new Set<string>();
  let current = roots.map((r) => r.id);

  while (current.length > 0) {
    const levelNodes = current
      .filter((id) => !visited.has(id))
      .map((id) => {
        visited.add(id);
        return nodeMap.get(id)!;
      })
      .filter(Boolean);

    if (levelNodes.length > 0) levels.push(levelNodes);

    const next: string[] = [];
    current.forEach((id) => {
      edges
        .filter((e) => e.from === id)
        .forEach((e) => {
          if (!visited.has(e.to)) next.push(e.to);
        });
    });
    current = next;
  }

  // Add any unvisited nodes
  const unvisited = nodes.filter((n) => !visited.has(n.id));
  if (unvisited.length > 0) levels.push(unvisited);

  return (
    <div className="space-y-3">
      {levels.map((level, li) => (
        <div key={li}>
          <div className="flex flex-wrap justify-center gap-3">
            {level.map((node) => (
              <button
                key={node.id}
                onClick={() => interactive && onNodeClick(node.id)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all border-2 min-w-[120px] ${
                  interactive ? "cursor-pointer active:scale-95" : "cursor-default"
                } ${
                  node.highlight
                    ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] text-[var(--lern-accent)]"
                    : expandedNode === node.id
                    ? "bg-[#D4956A]/10 border-[#D4956A] text-[var(--lern-text-primary)]"
                    : "bg-[var(--lern-bg)] border-[var(--lern-border)] text-[var(--lern-text-primary)]"
                }`}
              >
                {node.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={node.imageUrl}
                    alt={node.label}
                    className="h-8 w-8 mx-auto mb-1 object-contain"
                  />
                )}
                <span>{node.label}</span>
                {interactive && (
                  <span className="block text-[10px] text-[var(--lern-text-secondary)] mt-0.5">
                    Tippen für Details
                  </span>
                )}
              </button>
            ))}
          </div>
          {/* Pfeile zwischen Levels */}
          {li < levels.length - 1 && (
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center">
                <div className="h-4 w-0.5 bg-[var(--lern-border)]" />
                <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[var(--lern-border)]" />
                {/* Edge label */}
                {edges
                  .filter(
                    (e) =>
                      level.some((n) => n.id === e.from) &&
                      levels[li + 1]?.some((n) => n.id === e.to)
                  )
                  .slice(0, 1)
                  .map((e) =>
                    e.label ? (
                      <span
                        key={`${e.from}-${e.to}`}
                        className="text-[10px] text-[var(--lern-text-secondary)] mt-0.5"
                      >
                        {e.label}
                      </span>
                    ) : null
                  )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MindmapDiagram({
  nodes,
  edges,
  interactive,
  expandedNode,
  onNodeClick,
}: {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  interactive?: boolean;
  expandedNode: string | null;
  onNodeClick: (id: string) => void;
}) {
  // Center node + radial children
  const targets = new Set(edges.map((e) => e.to));
  const center = nodes.find((n) => !targets.has(n.id)) || nodes[0];
  const children = center
    ? edges.filter((e) => e.from === center.id).map((e) => nodes.find((n) => n.id === e.to)!).filter(Boolean)
    : nodes.slice(1);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Center — nicht klickbar, nur Label */}
      {center && (
        <div
          className="rounded-2xl px-6 py-4 text-base font-bold border-2 bg-[var(--lern-accent)]/10 border-[var(--lern-accent)] text-[var(--lern-accent)]"
        >
          {center.label}
        </div>
      )}

      {/* Lines + Children */}
      <div className="w-full border-t-2 border-[var(--lern-border)]" />
      <div className="grid grid-cols-2 gap-3 w-full">
        {children.map((child) => {
          const edge = edges.find((e) => e.to === child.id);
          return (
            <button
              key={child.id}
              onClick={() => interactive && onNodeClick(child.id)}
              className={`rounded-xl px-3 py-2.5 text-sm font-medium border-2 transition-all text-left ${
                interactive ? "cursor-pointer active:scale-95" : "cursor-default"
              } ${
                child.highlight
                  ? "bg-[#D4956A]/10 border-[#D4956A] text-[var(--lern-text-primary)]"
                  : expandedNode === child.id
                  ? "bg-[var(--lern-accent)]/5 border-[var(--lern-accent)] text-[var(--lern-text-primary)]"
                  : "bg-[var(--lern-bg)] border-[var(--lern-border)] text-[var(--lern-text-primary)]"
              }`}
            >
              {child.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={child.imageUrl}
                  alt={child.label}
                  className="h-6 w-6 mb-1 object-contain"
                />
              )}
              <span className="block">{child.label}</span>
              {edge?.label && (
                <span className="block text-[10px] text-[var(--lern-text-secondary)] mt-0.5">
                  {edge.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CycleDiagram({
  nodes,
  edges,
  interactive,
  expandedNode,
  onNodeClick,
}: {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  interactive?: boolean;
  expandedNode: string | null;
  onNodeClick: (id: string) => void;
}) {
  // Vertical cycle with arrows
  return (
    <div className="space-y-2">
      {nodes.map((node, i) => {
        const edge = edges.find((e) => e.from === node.id);
        return (
          <div key={node.id}>
            <button
              onClick={() => interactive && onNodeClick(node.id)}
              className={`w-full rounded-xl px-4 py-3 text-sm font-medium border-2 transition-all text-left flex items-center gap-3 ${
                interactive ? "cursor-pointer active:scale-95" : "cursor-default"
              } ${
                node.highlight
                  ? "bg-[var(--lern-accent)]/10 border-[var(--lern-accent)]"
                  : expandedNode === node.id
                  ? "bg-[#D4956A]/10 border-[#D4956A]"
                  : "bg-[var(--lern-bg)] border-[var(--lern-border)]"
              }`}
            >
              <span
                className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  node.highlight
                    ? "bg-[var(--lern-accent)] text-white"
                    : "bg-[var(--lern-border)] text-[var(--lern-text-secondary)]"
                }`}
              >
                {i + 1}
              </span>
              <span className="text-[var(--lern-text-primary)]">{node.label}</span>
            </button>

            {/* Arrow to next */}
            {i < nodes.length - 1 && (
              <div className="flex items-center justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-0.5 bg-[var(--lern-border)]" />
                  <div className="h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--lern-border)]" />
                </div>
                {edge?.label && (
                  <span className="text-[10px] text-[var(--lern-text-secondary)] ml-2">
                    {edge.label}
                  </span>
                )}
              </div>
            )}

            {/* Loop-back arrow for last node */}
            {i === nodes.length - 1 && edges.some((e) => e.from === node.id && e.to === nodes[0]?.id) && (
              <div className="flex items-center justify-center py-1">
                <span className="text-[10px] text-[var(--lern-text-secondary)]">↻ Zyklus wiederholt sich</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function StepDiagram({
  title,
  body,
  instruction,
  diagramType,
  nodes,
  edges,
  interactive,
  glossar,
  onNext,
}: StepDiagramProps) {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [viewed, setViewed] = useState<Set<string>>(new Set());

  // Explorable = nur Kindknoten (nicht Root, nicht Enkel) bei Mindmap
  const explorableNodes = useMemo(() => {
    if (diagramType === "mindmap") {
      const targets = new Set(edges.map((e) => e.to));
      const center = nodes.find((n) => !targets.has(n.id)) || nodes[0];
      if (!center) return nodes;
      const childIds = new Set(
        edges.filter((e) => e.from === center.id).map((e) => e.to)
      );
      return nodes.filter((n) => childIds.has(n.id));
    }
    return nodes;
  }, [diagramType, nodes, edges]);

  const explorableIds = useMemo(
    () => new Set(explorableNodes.map((n) => n.id)),
    [explorableNodes]
  );

  const handleNodeClick = (id: string) => {
    setExpandedNode(expandedNode === id ? null : id);
    if (explorableIds.has(id)) {
      setViewed((prev) => new Set([...prev, id]));
    }
  };

  const viewedExplorableCount = [...viewed].filter((id) => explorableIds.has(id)).length;
  const allViewed = !interactive || viewedExplorableCount >= explorableNodes.length;
  const expandedData = nodes.find((n) => n.id === expandedNode);

  const DiagramComponent = useMemo(() => {
    switch (diagramType) {
      case "mindmap":
        return MindmapDiagram;
      case "cycle":
        return CycleDiagram;
      case "flowchart":
      case "comparison":
      default:
        return FlowchartDiagram;
    }
  }, [diagramType]);

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>

      {/* Fortschritt bei interaktiv */}
      {interactive && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--lern-text-secondary)]">
            {viewedExplorableCount} von {explorableNodes.length} erkundet
          </span>
          <div className="flex gap-1">
            {explorableNodes.map((n) => (
              <div
                key={n.id}
                className={`h-2 w-2 rounded-full transition-colors ${
                  viewed.has(n.id) ? "bg-[var(--lern-accent)]" : "bg-[var(--lern-border)]"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Diagramm */}
      <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4">
        <DiagramComponent
          nodes={nodes}
          edges={edges}
          interactive={interactive}
          expandedNode={expandedNode}
          onNodeClick={handleNodeClick}
        />
      </div>

      {/* Expanded Node Detail */}
      <AnimatePresence>
        {expandedData && (
          <motion.div
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="rounded-2xl bg-[var(--lern-accent)]/5 border border-[var(--lern-accent)]/30 p-4 overflow-hidden"
          >
            <h3 className="font-semibold text-[var(--lern-accent)] mb-1">
              {expandedData.label}
            </h3>
            {expandedData.labelB1 && (
              <p className="text-sm text-[var(--lern-text-secondary)]">
                Einfach: {expandedData.labelB1}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Weiter-Button */}
      {allViewed && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => onNext(true)}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
        >
          Weiter
        </motion.button>
      )}
    </div>
  );
}

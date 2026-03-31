"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DiagramNode, DiagramEdge, GlossarEntry } from "../../../content/ce-05/_types";
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
                    ? "bg-[#0071e3]/10 border-[#0071e3] text-[#0071e3]"
                    : expandedNode === node.id
                    ? "bg-[#FF9500]/10 border-[#FF9500] text-[#1d1d1f]"
                    : "bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f]"
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
                  <span className="block text-[10px] text-[#6e6e73] mt-0.5">
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
                <div className="h-4 w-0.5 bg-[#d2d2d7]" />
                <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#d2d2d7]" />
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
                        className="text-[10px] text-[#6e6e73] mt-0.5"
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
      {/* Center */}
      {center && (
        <button
          onClick={() => interactive && onNodeClick(center.id)}
          className={`rounded-2xl px-6 py-4 text-base font-bold border-2 transition-all ${
            interactive ? "cursor-pointer active:scale-95" : "cursor-default"
          } bg-[#0071e3]/10 border-[#0071e3] text-[#0071e3]`}
        >
          {center.label}
        </button>
      )}

      {/* Lines + Children */}
      <div className="w-full border-t-2 border-[#d2d2d7]" />
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
                  ? "bg-[#FF9500]/10 border-[#FF9500] text-[#1d1d1f]"
                  : expandedNode === child.id
                  ? "bg-[#0071e3]/5 border-[#0071e3] text-[#1d1d1f]"
                  : "bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f]"
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
                <span className="block text-[10px] text-[#6e6e73] mt-0.5">
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
                  ? "bg-[#0071e3]/10 border-[#0071e3]"
                  : expandedNode === node.id
                  ? "bg-[#FF9500]/10 border-[#FF9500]"
                  : "bg-[#f5f5f7] border-[#d2d2d7]"
              }`}
            >
              <span
                className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  node.highlight
                    ? "bg-[#0071e3] text-white"
                    : "bg-[#d2d2d7] text-[#6e6e73]"
                }`}
              >
                {i + 1}
              </span>
              <span className="text-[#1d1d1f]">{node.label}</span>
            </button>

            {/* Arrow to next */}
            {i < nodes.length - 1 && (
              <div className="flex items-center justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-0.5 bg-[#d2d2d7]" />
                  <div className="h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#d2d2d7]" />
                </div>
                {edge?.label && (
                  <span className="text-[10px] text-[#6e6e73] ml-2">
                    {edge.label}
                  </span>
                )}
              </div>
            )}

            {/* Loop-back arrow for last node */}
            {i === nodes.length - 1 && edges.some((e) => e.from === node.id && e.to === nodes[0]?.id) && (
              <div className="flex items-center justify-center py-1">
                <span className="text-[10px] text-[#6e6e73]">↻ Zyklus wiederholt sich</span>
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

  const handleNodeClick = (id: string) => {
    setExpandedNode(expandedNode === id ? null : id);
    setViewed((prev) => new Set([...prev, id]));
  };

  const allViewed = !interactive || viewed.size >= nodes.length;
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
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">{title}</h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[#1d1d1f]">{instruction}</p>

      {/* Fortschritt bei interaktiv */}
      {interactive && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6e6e73]">
            {viewed.size} von {nodes.length} erkundet
          </span>
          <div className="flex gap-1">
            {nodes.map((n) => (
              <div
                key={n.id}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  viewed.has(n.id) ? "bg-[#0071e3]" : "bg-[#d2d2d7]"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Diagramm */}
      <div className="rounded-2xl bg-white border border-[#d2d2d7] p-4">
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
            className="rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/30 p-4 overflow-hidden"
          >
            <h3 className="font-semibold text-[#0071e3] mb-1">
              {expandedData.label}
            </h3>
            {expandedData.labelB1 && (
              <p className="text-sm text-[#6e6e73]">
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
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Weiter
        </motion.button>
      )}
    </div>
  );
}

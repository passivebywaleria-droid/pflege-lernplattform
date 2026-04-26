"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { renderBold, FachbegriffText } from "./fachbegriff-tooltip";
import type { GlossarEntry } from "../../../content/_types";

interface StepShellProps {
  /** Kind-Label oben (Caps, Teal, 10px). Beispiel: "Entscheiden · Multiple Choice" */
  kindLabel?: string;
  /** Hauptfrage oder Titel des Steps (18-20px, font-semibold) */
  question: string;
  /** Optionaler Body-Text — wird per Default eingeklappt wenn länger als 80 Zeichen */
  body?: string;
  /** Glossar für Fachbegriff-Tooltips */
  glossar?: GlossarEntry[];
  /** Optionaler Tipp/Hinweis unten (12px, text-tertiary) */
  tip?: string;
  /** Hauptinhalt: Optionen, Cards, Drag&Drop etc. */
  children: ReactNode;
}

/**
 * StepShell — gemeinsamer Wrapper für alle Step-Renderer im Bundle-Stil
 * (claude-design-bundle/v1-situation-flow.jsx Step-Layout).
 *
 * Strukturiert Steps in:
 *   1. Kind-Label (Caps Teal 10px)
 *   2. Frage (18-20px / 600)
 *   3. Body (collapsed wenn länger, sonst inline)
 *   4. Content-Slot
 *   5. Tipp unten
 *
 * Action-Buttons werden NICHT hier gerendert — die kommen in <StepActionBar>
 * vom Renderer selbst (sticky bottom).
 *
 * Spacing-Tokens 1:1 aus Bundle:
 * - kind-label → question: 8px
 * - question → body: 6-8px
 * - body → content: 14px
 * - content → tip: 14px
 */
export function StepShell({
  kindLabel,
  question,
  body,
  glossar,
  tip,
  children,
}: StepShellProps) {
  const longBody = !!body && body.trim().length > 80;
  const [bodyOpen, setBodyOpen] = useState(!longBody);

  return (
    <div
      className="flex flex-col gap-3.5"
      style={{ color: "var(--lern-text-primary)" }}
    >
      {/* Kind-Label */}
      {kindLabel && (
        <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
          {kindLabel}
        </div>
      )}

      {/* Frage */}
      <h2 className="text-[19px] leading-[1.3] font-semibold text-[var(--lern-text-primary)]">
        {renderBold(question)}
      </h2>

      {/* Body (eingeklappt wenn länger) */}
      {body && (
        <>
          {!longBody && (
            <p className="text-sm leading-relaxed text-[var(--lern-text-secondary)] whitespace-pre-line">
              <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
            </p>
          )}
          {longBody && (
            <div>
              <button
                type="button"
                onClick={() => setBodyOpen((v) => !v)}
                aria-expanded={bodyOpen}
                className="inline-flex items-center gap-1 text-xs font-medium text-[var(--lern-accent)] hover:underline"
              >
                {bodyOpen ? "Kontext ausblenden" : "Mehr Kontext"}
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${
                    bodyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {bodyOpen && (
                <p className="mt-2 text-sm leading-relaxed text-[var(--lern-text-secondary)] whitespace-pre-line">
                  <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
                </p>
              )}
            </div>
          )}
        </>
      )}

      {/* Content-Slot */}
      <div className="mt-1">{children}</div>

      {/* Tipp */}
      {tip && (
        <p className="mt-1 text-xs text-[var(--lern-text-tertiary)]">{tip}</p>
      )}
    </div>
  );
}

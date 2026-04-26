"use client";

import type { ReactNode } from "react";

interface StepActionBarProps {
  children: ReactNode;
  /** Wenn true, kein border-top (z. B. wenn Bar transparent über Content liegt) */
  borderless?: boolean;
}

/**
 * Sticky-Bottom-Action-Bar im Bundle-Stil
 * (claude-design-bundle/v1-situation-flow.jsx FlowContainer-BottomBar).
 *
 * - sticky bottom-0 → klebt am unteren Rand des Scroll-Containers
 * - bg + backdrop-blur → trennt visuell vom scrollenden Content darüber
 * - border-top + paddings 1:1 aus Bundle (12px 16px 20px)
 * - safe-area-inset-bottom für iOS-Home-Indicator
 *
 * Verwendung in Step-Renderern:
 *   <StepActionBar>
 *     <button onClick={handleCheck} className="...">Prüfen</button>
 *   </StepActionBar>
 */
export function StepActionBar({ children, borderless = false }: StepActionBarProps) {
  return (
    <div
      className={`sticky bottom-0 -mx-4 mt-6 px-4 pt-3 bg-[var(--lern-bg-primary)]/95 backdrop-blur-sm flex items-stretch gap-2.5 ${
        borderless ? "" : "border-t border-[var(--lern-border)]"
      }`}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom, 16px), 16px)" }}
    >
      {children}
    </div>
  );
}

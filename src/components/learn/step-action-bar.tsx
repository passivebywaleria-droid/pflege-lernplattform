"use client";

import type { ReactNode } from "react";

interface StepActionBarProps {
  children: ReactNode;
  /** Wenn true, kein border-top */
  borderless?: boolean;
}

/**
 * Fixed-Bottom-Action-Bar im Bundle-Stil
 * (claude-design-bundle/v1-situation-flow.jsx FlowContainer-BottomBar).
 *
 * - fixed bottom-0 → klebt am Viewport-Bottom (auch bei kurzem Content)
 * - inner max-w-3xl mx-auto entspricht der Page-Container-Breite
 * - bg + backdrop-blur trennt visuell vom Content darüber
 * - border-top + paddings 1:1 aus Bundle (12px 16px 20px)
 * - safe-area-inset-bottom für iOS-Home-Indicator
 *
 * Sicher zu nutzen weil im Walkthrough die Bottom-Tab-Bar
 * ausgeblendet wird (siehe global-tab-bar.tsx Hide-Pattern).
 *
 * Verwendung:
 *   <StepActionBar>
 *     <button onClick={handleCheck} className="flex-1 ...">Prüfen</button>
 *   </StepActionBar>
 */
export function StepActionBar({
  children,
  borderless = false,
}: StepActionBarProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-[var(--lern-bg-primary)]/95 backdrop-blur-sm ${
        borderless ? "" : "border-t border-[var(--lern-border)]"
      }`}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom, 16px), 16px)" }}
    >
      <div className="mx-auto max-w-3xl px-4 pt-3 flex items-stretch gap-2.5">
        {children}
      </div>
    </div>
  );
}

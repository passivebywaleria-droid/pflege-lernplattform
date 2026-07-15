/**
 * SpracheSheet — Sprachniveau (C1/B1) + Muttersprache-Auswahl im Situation-Player.
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

vi.mock("framer-motion", () => {
  const motion = new Proxy({} as Record<string, unknown>, {
    get: (_target, prop: string) =>
      React.forwardRef(function MotionComponent(
        props: Record<string, unknown>,
        ref: React.Ref<HTMLElement>
      ) {
        const { initial: _i, animate: _a, exit: _e, transition: _t, ...rest } = props;
        return React.createElement(prop, { ...rest, ref });
      }),
  });
  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});

import { SpracheSheet } from "@/components/learn/sprache-sheet";
import { useMutterspracheStore } from "@/hooks/use-muttersprache";

describe("SpracheSheet", () => {
  beforeEach(() => {
    // jsdom-localStorage ist im Test-Setup nicht voll funktionsfähig — Minimal-Stub
    const store: Record<string, string> = {};
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v; },
      removeItem: (k: string) => { delete store[k]; },
    });
    useMutterspracheStore.setState({ sprache: null, needsSelection: true });
  });

  it("rendert beide Sprach-Achsen (Niveau + Muttersprache)", () => {
    render(
      <SpracheSheet open={true} onClose={() => {}} sprachLevel="c1" onSprachLevelChange={() => {}} />
    );
    expect(screen.getByText("Sprachniveau")).toBeTruthy();
    expect(screen.getByText("Fachsprache")).toBeTruthy();
    expect(screen.getByText("Einfache Sprache")).toBeTruthy();
    expect(screen.getByText("Muttersprache")).toBeTruthy();
    expect(screen.getByText("العربية")).toBeTruthy();
  });

  it("rendert nichts wenn geschlossen", () => {
    render(
      <SpracheSheet open={false} onClose={() => {}} sprachLevel="c1" onSprachLevelChange={() => {}} />
    );
    expect(screen.queryByText("Sprachniveau")).toBeNull();
  });

  it("meldet Niveau-Wechsel auf B1", () => {
    const onChange = vi.fn();
    render(
      <SpracheSheet open={true} onClose={() => {}} sprachLevel="c1" onSprachLevelChange={onChange} />
    );
    fireEvent.click(screen.getByText("Einfache Sprache"));
    expect(onChange).toHaveBeenCalledWith("b1");
  });

  it("setzt Muttersprache Arabisch im Store (Demo-Pfad AR)", () => {
    render(
      <SpracheSheet open={true} onClose={() => {}} sprachLevel="c1" onSprachLevelChange={() => {}} />
    );
    fireEvent.click(screen.getByText("العربية"));
    expect(useMutterspracheStore.getState().sprache).toBe("ar");
  });
});

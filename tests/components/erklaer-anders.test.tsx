/**
 * ErklaerAnders — „Erklär mir das anders"-Button im AnswerSheet.
 * Lädt eine RAG-gebundene Alternativ-Erklärung von /api/erklaer-anders.
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

import { ErklaerAnders } from "@/components/learn/erklaer-anders";

const KONTEXT = {
  ceId: "ce-06",
  situationId: "ls-wagner-reanimation",
  stepId: "ce06-wagner-erk-01",
  frage: "Wie wertest du die schnappende Atmung?",
  gewaehlteAntwort: "Stabile Seitenlage",
  richtigeAntwort: "Herz-Kreislauf-Stillstand annehmen",
  sprachLevel: "c1" as const,
};

describe("ErklaerAnders", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("zeigt den Button initial an", () => {
    render(<ErklaerAnders kontext={KONTEXT} />);
    expect(screen.getByText("Erklär mir das anders")).toBeTruthy();
  });

  it("zeigt nach erfolgreichem Fetch die Alternativ-Erklärung", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({
        erklaerung: "Stell dir einen Motor vor, der nur noch stottert.",
        source: "nebius",
      }),
    });

    render(<ErklaerAnders kontext={KONTEXT} />);
    fireEvent.click(screen.getByText("Erklär mir das anders"));

    await waitFor(() =>
      expect(
        screen.getByText("Stell dir einen Motor vor, der nur noch stottert.")
      ).toBeTruthy()
    );
    // Zweiter Versuch wird angeboten
    expect(screen.getByText("Noch mal anders erklären")).toBeTruthy();
    // Payload anonymisiert + Versuch 1
    const body = JSON.parse(
      (fetch as ReturnType<typeof vi.fn>).mock.calls[0][1].body as string
    );
    expect(body.versuch).toBe(1);
    expect(body.situationId).toBe("ls-wagner-reanimation");
    expect(Object.keys(body)).not.toContain("userId");
    expect(Object.keys(body)).not.toContain("name");
  });

  it("versteckt den Button nach dem Nicht-im-Lernstoff-Fallback", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({
        erklaerung: "Dazu finde ich in deinem Lernstoff keine sichere andere Erklärung.",
        source: "nicht-im-lernstoff",
      }),
    });

    render(<ErklaerAnders kontext={KONTEXT} />);
    fireEvent.click(screen.getByText("Erklär mir das anders"));

    await waitFor(() =>
      expect(
        screen.getByText(/keine sichere andere Erklärung/)
      ).toBeTruthy()
    );
    expect(screen.queryByText("Erklär mir das anders")).toBeNull();
    expect(screen.queryByText("Noch mal anders erklären")).toBeNull();
  });

  it("zeigt bei Netzwerkfehler einen freundlichen Hinweis und behält den Button", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new Error("network"));

    render(<ErklaerAnders kontext={KONTEXT} />);
    fireEvent.click(screen.getByText("Erklär mir das anders"));

    await waitFor(() =>
      expect(screen.getByText(/klappt gerade nicht/)).toBeTruthy()
    );
    // Fehlversuch zählt nicht — Button bleibt für Retry
    expect(screen.getByText("Erklär mir das anders")).toBeTruthy();
  });

  it("erkennt offline und ruft die API gar nicht erst auf", async () => {
    const onLineSpy = vi
      .spyOn(window.navigator, "onLine", "get")
      .mockReturnValue(false);

    render(<ErklaerAnders kontext={KONTEXT} />);
    fireEvent.click(screen.getByText("Erklär mir das anders"));

    await waitFor(() =>
      expect(screen.getByText(/gerade offline/)).toBeTruthy()
    );
    expect(fetch).not.toHaveBeenCalled();
    onLineSpy.mockRestore();
  });

  it("bietet nach 2 Erklärungen keinen weiteren Versuch an", async () => {
    (fetch as ReturnType<typeof vi.fn>)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ erklaerung: "Erklärung eins.", source: "nebius" }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ erklaerung: "Erklärung zwei.", source: "nebius" }),
      });

    render(<ErklaerAnders kontext={KONTEXT} />);
    fireEvent.click(screen.getByText("Erklär mir das anders"));
    await waitFor(() => expect(screen.getByText("Erklärung eins.")).toBeTruthy());
    fireEvent.click(screen.getByText("Noch mal anders erklären"));
    await waitFor(() => expect(screen.getByText("Erklärung zwei.")).toBeTruthy());

    expect(screen.queryByText("Erklär mir das anders")).toBeNull();
    expect(screen.queryByText("Noch mal anders erklären")).toBeNull();

    const body2 = JSON.parse(
      (fetch as ReturnType<typeof vi.fn>).mock.calls[1][1].body as string
    );
    expect(body2.versuch).toBe(2);
  });
});

/**
 * Spickzettel (Option A) — vollständiger Baustein als Sheet am Anwendungs-Step.
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

const pushMock = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

import { Spickzettel, spickzettelBesuchtKey } from "@/components/learn/spickzettel";
import type { ContentStep } from "../../content/_types";

const BAUSTEIN = {
  stepId: "w1",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.4",
  quellen: ["ERC-Leitlinien 2021"],
  praesentation: "amAnwendungsStep",
  contentC1: { title: "Stillstand erkennen", body: "" },
  inlineWissen: {
    storyAufhaenger: "Story, die inline NICHT gezeigt wird.",
    kerntext: "Absatz eins vollständig.\n\nAbsatz zwei vollständig.",
    faustregel: "Schnappen ist kein Atmen.",
    spektrum: [
      {
        patientName: "Frau Ríos",
        situationsId: "ls-rios-synkope",
        hauptfaktor: "Synkope",
        kurzbeschreibung: "Kreislauf läuft weiter.",
      },
      {
        patientName: "Herr Wagner",
        situationsId: "ls-wagner-reanimation",
        hauptfaktor: "Schnappatmung",
        kurzbeschreibung: "Das ist der Stillstand.",
      },
    ],
    karteikarte: { vorderseite: "v", rueckseite: "r" },
  },
} as unknown as ContentStep;

function renderSpickzettel() {
  return render(
    <Spickzettel
      bausteine={[BAUSTEIN]}
      situationId="ls-wagner-reanimation"
      ceId="ce-06"
      locale="de"
      sprachLevel="c1"
    />
  );
}

describe("Spickzettel", () => {
  beforeEach(() => {
    pushMock.mockClear();
    const store: Record<string, string> = {};
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => {
        store[k] = v;
      },
      removeItem: (k: string) => {
        delete store[k];
      },
      get __store() {
        return store;
      },
    });
  });

  it("zeigt Chip; Sheet öffnet mit VOLLSTÄNDIGEM Baustein (ohne Story-Aufhänger)", () => {
    renderSpickzettel();
    const chip = screen.getByText(/Spickzettel: Stillstand erkennen/);
    fireEvent.click(chip);

    expect(screen.getByText("Schnappen ist kein Atmen.")).toBeTruthy();
    expect(screen.getByText("Absatz eins vollständig.")).toBeTruthy();
    expect(screen.getByText("Absatz zwei vollständig.")).toBeTruthy();
    expect(screen.queryByText(/Story, die inline/)).toBeNull();
    // Quelle sichtbar (Fachlichkeit)
    expect(screen.getByText("ERC-Leitlinien 2021")).toBeTruthy();
  });

  it("filtert den Selbstbezug aus den Kennst-du-schon-Pills und navigiert mit von-Param", () => {
    renderSpickzettel();
    fireEvent.click(screen.getByText(/Spickzettel: Stillstand erkennen/));

    // Wagner (eigene Situation) taucht NICHT als Pill auf
    expect(screen.queryByText(/Herr Wagner · Schnappatmung/)).toBeNull();

    fireEvent.click(screen.getByText(/Frau Ríos · Synkope/));
    expect(pushMock).toHaveBeenCalledWith(
      "/de/lernen/situation/ls-rios-synkope?ce=ce-06&von=ls-wagner-reanimation"
    );
  });

  it("setzt das Besucht-Flag beim Öffnen (Adaptivitäts-Signal)", () => {
    renderSpickzettel();
    fireEvent.click(screen.getByText(/Spickzettel: Stillstand erkennen/));
    expect(
      localStorage.getItem(
        spickzettelBesuchtKey("ls-wagner-reanimation", "w1")
      )
    ).toBeTruthy();
  });
});

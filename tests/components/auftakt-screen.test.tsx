/**
 * Auftakt-Screen — Advance Organizer gegen den kalten Einstieg (Audit-Lücke 1):
 * Patient-Karte, Szene (Phase-1-kontext wortgleich), Rahmenlehrplan-Lernziele
 * in Schülersprache, eine Aktion. Ehrlichkeits-Regel: ohne lernzieleSchueler
 * entfällt der Lernziel-Block ersatzlos.
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import deMessages from "../../messages/de.json";

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

vi.mock("next-intl", () => ({
  useTranslations: (namespace: string) => {
    const resolve = (obj: unknown, path: string): unknown =>
      path.split(".").reduce(
        (acc, part) => (acc as Record<string, unknown> | undefined)?.[part],
        obj
      );
    return (key: string, params?: Record<string, string | number>) => {
      let text = resolve(deMessages, `${namespace}.${key}`);
      if (typeof text !== "string") return `${namespace}.${key}`;
      for (const [k, v] of Object.entries(params ?? {})) {
        text = (text as string).replaceAll(`{${k}}`, String(v));
      }
      return text;
    };
  },
}));

import { AuftaktScreen } from "@/components/learn/auftakt-screen";
import type { Lernsituation } from "../../content/_types";

const SITUATION = {
  situationId: "ls-wagner-reanimation",
  ceId: "ce-06",
  situationsTyp: "akutsituation",
  titel: "Herr Wagner — Reanimation auf Normalstation",
  themen: [],
  spirale: 1,
  geschaetzteUE: 1,
  patient: {
    patientId: "pat-wagner-rea",
    name: "Klaus Wagner",
    alter: 67,
    geschlecht: "m",
    diagnosen: [],
    setting: "Kardiologische Normalstation, 08:15 Uhr",
    hintergrund: "",
    persoenlichkeit: "",
  },
  phasen: [
    {
      phaseId: "p1",
      phase: "erkennen",
      titel: "Der Zusammenbruch",
      kontext: "Du kommst mit dem Frühdienst auf den Flur, als Herr Wagner zu Boden geht.",
      kontextB1: "Du kommst auf den Flur. Herr Wagner fällt vor dir um.",
      kernSteps: [],
      optionaleSteps: [],
      geschaetzteDauer: 5,
    },
  ],
  komplikationen: [],
  bausteinTrigger: [],
  lernzieleSchueler: [
    {
      lernergebnisId: "CE06-LE1-K2",
      text: "Du führst lebenserhaltende Sofortmaßnahmen durch — Schritt für Schritt.",
      textB1: "Du machst lebensrettende Sofortmaßnahmen — Schritt für Schritt.",
    },
  ],
} as unknown as Lernsituation;

function renderAuftakt(overrides: Partial<React.ComponentProps<typeof AuftaktScreen>> = {}) {
  return render(
    <AuftaktScreen
      situation={SITUATION}
      sprachLevel="c1"
      gesamtSteps={12}
      onStart={() => {}}
      {...overrides}
    />
  );
}

describe("AuftaktScreen", () => {
  it("zeigt Patient, Szene (Phase-1-kontext wortgleich), Lernziel und Schrittzahl", () => {
    renderAuftakt();
    expect(screen.getByText("Klaus Wagner · 67")).toBeTruthy();
    expect(screen.getByText(/Du kommst mit dem Frühdienst auf den Flur/)).toBeTruthy();
    expect(
      screen.getByText("Du führst lebenserhaltende Sofortmaßnahmen durch — Schritt für Schritt.")
    ).toBeTruthy();
    expect(screen.getByText("Lernziele nach Rahmenlehrplan")).toBeTruthy();
    expect(screen.getByText("12 Schritte")).toBeTruthy();
  });

  it("Los geht's löst onStart aus", () => {
    const onStart = vi.fn();
    renderAuftakt({ onStart });
    fireEvent.click(screen.getByText("Los geht's"));
    expect(onStart).toHaveBeenCalledOnce();
  });

  it("B1 nutzt kontextB1 und textB1", () => {
    renderAuftakt({ sprachLevel: "b1" });
    expect(screen.getByText(/Herr Wagner fällt vor dir um/)).toBeTruthy();
    expect(
      screen.getByText("Du machst lebensrettende Sofortmaßnahmen — Schritt für Schritt.")
    ).toBeTruthy();
  });

  it("ohne lernzieleSchueler entfällt der Lernziel-Block ersatzlos (kein Blabla)", () => {
    renderAuftakt({
      situation: { ...SITUATION, lernzieleSchueler: undefined } as unknown as Lernsituation,
    });
    expect(screen.queryByText("Das lernst du hier")).toBeNull();
    expect(screen.queryByText("Lernziele nach Rahmenlehrplan")).toBeNull();
    // Patient + Szene + CTA tragen den Auftakt allein
    expect(screen.getByText("Klaus Wagner · 67")).toBeTruthy();
    expect(screen.getByText("Los geht's")).toBeTruthy();
  });
});

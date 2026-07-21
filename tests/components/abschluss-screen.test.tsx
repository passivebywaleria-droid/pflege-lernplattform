/**
 * Abschluss-Screen — Faustregeln-Abruf (B-Abruf), ehrliche Schwächen-Zeile
 * (Ton C1), Teaser + Gast-Zeile. Ehrlichkeits-Regeln aus dem Entwurf.
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

// next-intl: echte deutsche Texte aus messages/de.json + simple {var}-Interpolation,
// damit die Assertions gegen die echten Formulierungen laufen.
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

import { AbschlussScreen } from "@/components/learn/abschluss-screen";
import type { AbschlussDaten } from "@/lib/learn/abschluss-daten";
import type { Lernsituation } from "../../content/_types";

const SITUATION = {
  situationId: "ls-wagner-reanimation",
  ceId: "ce-06",
  situationsTyp: "akutsituation",
  titel: "Herr Wagner — Reanimation auf Normalstation",
  themen: [],
  spirale: 1,
  geschaetzteUE: 1,
  phasen: [],
  komplikationen: [],
  bausteinTrigger: [],
  abschlussText: "Herr Wagner ist auf der Intensivstation, sein Kreislauf ist zurück.",
} as unknown as Lernsituation;

const NAECHSTE = {
  situationId: "ls-rios-synkope",
  titel: "Herr Ríos — Kollaps während der Dialyse",
  teaser: "Herr Ríos sackt während der Dialyse weg — und kommt von allein wieder zu sich.",
} as unknown as Lernsituation;

const DATEN: AbschlussDaten = {
  bausteine: [
    {
      stepId: "w1",
      titel: "Herz-Kreislauf-Stillstand erkennen",
      faustregel: "Schnappen ist kein Atmen.",
      abrufFrage: "Woran erkennst du den Kreislauf-Stillstand?",
      kerntext:
        "Zwei Fragen entscheiden alles.\n\nDer Brustkorb muss beim Erwachsenen fünf bis sechs Zentimeter nachgeben.",
      wacklig: true,
    },
    {
      stepId: "w2",
      titel: "Hilfe holen — aber richtig",
      faustregel: "Erst das Team rufen, dann sofort drücken.",
      abrufFrage: "Was kommt zuerst?",
      kerntext: "Vier Schritte, immer in derselben Ordnung.",
      wacklig: false,
    },
  ],
  beantwortet: 11,
  falsch: 1,
  wackligeTitel: ["Herz-Kreislauf-Stillstand erkennen"],
};

function renderScreen(overrides: Partial<React.ComponentProps<typeof AbschlussScreen>> = {}) {
  return render(
    <AbschlussScreen
      situation={SITUATION}
      daten={DATEN}
      antwortDatenVollstaendig={true}
      sprachLevel="c1"
      isGuest={false}
      naechsteSituation={NAECHSTE}
      gesamtSteps={12}
      locale="de"
      ceId="ce-06"
      {...overrides}
    />
  );
}

describe("AbschlussScreen", () => {
  it("zeigt Story-Abschluss, Abruf-Fragen (Faustregel erst nach Tap) und Teaser", () => {
    renderScreen();
    expect(screen.getByText(/Intensivstation/)).toBeTruthy();
    // Abruf: Frage sichtbar, Faustregel noch NICHT
    expect(screen.getByText("Woran erkennst du den Kreislauf-Stillstand?")).toBeTruthy();
    expect(screen.queryByText("Schnappen ist kein Atmen.")).toBeNull();
    // Tap deckt wortgleich auf
    fireEvent.click(screen.getByText("Woran erkennst du den Kreislauf-Stillstand?"));
    expect(screen.getByText("Schnappen ist kein Atmen.")).toBeTruthy();
    // Teaser der nächsten Situation
    expect(screen.getByText(/sackt während der Dialyse weg/)).toBeTruthy();
  });

  it("aufgedeckte Karte bietet den VOLLSTÄNDIGEN Kerntext an (kein Halbwissen-Ende)", () => {
    renderScreen();
    fireEvent.click(screen.getByText("Woran erkennst du den Kreislauf-Stillstand?"));
    // Expander vorhanden, Kerntext wortgleich (inkl. der Zahlen aus der Literatur)
    expect(screen.getByText("Ganzen Baustein lesen")).toBeTruthy();
    expect(
      screen.getByText(/fünf bis sechs Zentimeter nachgeben/)
    ).toBeTruthy();
  });

  it("Schwächen-Zeile (C1): kurzer ermutigender Zeiger statt Fehler-Liste, wackliger Baustein markiert oben", () => {
    renderScreen();
    // Keine Namens-LISTE mehr (die stünde doppelt zu den 🟠-Karten) — ein kurzer,
    // ermutigender Zeiger, Ende auf Ermutigung (Sandwich).
    expect(screen.getByText(/Nächstes Mal sitzen sie/)).toBeTruthy();
    expect(screen.queryByText(/Daneben lagst du/)).toBeNull();
    // Wackliger Baustein bleibt oben markiert.
    expect(screen.getByText("Nochmal ansehen")).toBeTruthy();
  });

  it("Profil formt sich: unter Ziel zeigt es sich formend, kein hartes Niveau", () => {
    renderScreen({
      profilAggregat: {
        fachwissen: 2,
        sprache: null,
        situationenAbsolviert: 1,
        scoredStepsGesamt: 10,
      },
    });
    expect(screen.getByText("Dein Profil baut sich auf")).toBeTruthy();
    expect(screen.getByText(/bis dein Profil scharf ist/)).toBeTruthy();
    // Ohne Sprach-Signal: positive, ehrliche Zeile statt „braucht einfache Sprache".
    expect(screen.getByText(/kein Hindernis/)).toBeTruthy();
    // Kein hartes Fachwissen-Verdikt, solange unscharf.
    expect(screen.queryByText(/Theorie lückenhaft/)).toBeNull();
  });

  it("Profil scharf: ab Ziel-Situationen hartes Niveau und Dein Stand", () => {
    renderScreen({
      profilAggregat: {
        fachwissen: 2,
        sprache: null,
        situationenAbsolviert: 4,
        scoredStepsGesamt: 40,
      },
    });
    expect(screen.getByText("Dein Stand")).toBeTruthy();
    expect(screen.getByText(/Theorie lückenhaft/)).toBeTruthy();
    expect(screen.queryByText(/bis dein Profil scharf ist/)).toBeNull();
  });

  it("0 Fehler → ehrliches Lob statt Schwächen", () => {
    renderScreen({ daten: { ...DATEN, falsch: 0, wackligeTitel: [], bausteine: DATEN.bausteine.map((b) => ({ ...b, wacklig: false })) } });
    expect(screen.getByText(/beim ersten Versuch — wirklich stark/)).toBeTruthy();
    expect(screen.queryByText(/Daneben lagst du/)).toBeNull();
  });

  it("unvollständige Session-Daten → KEINE Schwächen-Aussage (nie raten)", () => {
    renderScreen({ antwortDatenVollstaendig: false });
    expect(screen.queryByText(/Daneben lagst du/)).toBeNull();
    expect(screen.queryByText(/wirklich stark/)).toBeNull();
  });

  it("Gast sieht die dezente Konto-Zeile, eingeloggt nicht", () => {
    const { unmount } = renderScreen({ isGuest: true });
    expect(screen.getByText(/Kostenloses Konto sichern/)).toBeTruthy();
    unmount();
    renderScreen({ isGuest: false });
    expect(screen.queryByText(/Kostenloses Konto sichern/)).toBeNull();
  });
});

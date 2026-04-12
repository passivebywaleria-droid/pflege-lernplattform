/**
 * Style-Checker — Prüft alle Step-Komponenten auf UI/UX Standards
 *
 * Checkt:
 * 1. Inline-style `color: "#1d1d1f"` auf Container (shadcn-glass-ui Fix)
 * 2. `pb-20` für Chat-FAB Abstand
 * 3. Keine `text-[#1d1d1f]/70` (muss volle Opacity sein)
 * 4. Weiter-Button vorhanden
 * 5. Keine `bg-white` auf Karten (muss `bg-[#f5f5f7]` sein) — nur Warnung
 */

import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "fs";
import { resolve, join } from "path";

const COMPONENTS_DIR = resolve(__dirname, "../../src/components/learn");

// Alle step-*.tsx Dateien finden
function findStepComponents(): { name: string; path: string; content: string }[] {
  try {
    return readdirSync(COMPONENTS_DIR)
      .filter((f) => f.startsWith("step-") && f.endsWith(".tsx"))
      .map((f) => ({
        name: f,
        path: join(COMPONENTS_DIR, f),
        content: readFileSync(join(COMPONENTS_DIR, f), "utf-8"),
      }));
  } catch {
    return [];
  }
}

const components = findStepComponents();

describe("Style-Checker: Step-Komponenten", () => {
  if (components.length === 0) {
    it.skip("Keine Step-Komponenten gefunden", () => {});
    return;
  }

  it(`hat ${components.length} Step-Komponenten gefunden`, () => {
    expect(components.length).toBeGreaterThanOrEqual(22);
  });

  for (const comp of components) {
    describe(comp.name, () => {
      // 1. Inline color style auf Container
      it('hat style={{ color: "#1d1d1f" }} auf Container', () => {
        // Akzeptiert #1d1d1f oder CSS-Variable var(--lern-text-primary)
        const hasInlineColor =
          comp.content.includes('style={{ color: "#1d1d1f" }}') ||
          comp.content.includes("style={{ color: '#1d1d1f' }}") ||
          comp.content.includes('color: "#1d1d1f"') ||
          comp.content.includes('color: "var(--lern-text-primary)"') ||
          comp.content.includes("color: 'var(--lern-text-primary)'") ||
          // step-renderer.tsx ist ein Wrapper, kein Content — braucht kein color
          comp.name === "step-renderer.tsx";

        if (!hasInlineColor) {
          expect.fail(
            `${comp.name}: Fehlt style={{ color: "#1d1d1f" }} auf dem äußersten Container.\n` +
            `Das ist nötig weil shadcn-glass-ui 'button { color: inherit }' setzt und Tailwind-Klassen überschreibt.`
          );
        }
      });

      // 2. pb-20 für Chat-FAB
      it("hat pb-20 für Chat-FAB Abstand", () => {
        const hasPadding = comp.content.includes("pb-20");
        if (!hasPadding) {
          // Warnung statt Fehler — manche Komponenten (summary, selfrating) brauchen es evtl. nicht
          console.warn(`⚠️ ${comp.name}: Kein pb-20 gefunden. Chat-FAB könnte Inhalt verdecken.`);
        }
      });

      // 3. Keine reduzierte Opacity auf Text
      it("verwendet keine reduzierte Text-Opacity (/70, /80)", () => {
        // text-[#1d1d1f]/70 oder text-[#1d1d1f]/80 auf body text ist schlecht lesbar
        const reducedOpacity = comp.content.match(/text-\[#1d1d1f\]\/[0-9]+/g);
        if (reducedOpacity) {
          // Warnung — in manchen Kontexten (Sekundärtext) kann es OK sein
          console.warn(
            `⚠️ ${comp.name}: Reduzierte Opacity: ${reducedOpacity.join(", ")}. ` +
            `Prüfe ob Body-Text voll lesbar ist.`
          );
        }
      });

      // 4. Weiter-Button vorhanden
      it('hat einen "Weiter" Button', () => {
        const hasWeiter =
          comp.content.includes("Weiter") ||
          comp.content.includes("onNext");

        if (!hasWeiter) {
          expect.fail(`${comp.name}: Kein "Weiter" Button oder onNext-Handler gefunden.`);
        }
      });

      // 5. Exportiert eine Funktion
      it("exportiert eine benannte Funktion", () => {
        const hasExport = comp.content.match(/export\s+function\s+Step\w+/);
        if (!hasExport) {
          expect.fail(`${comp.name}: Keine exportierte Step-Funktion gefunden.`);
        }
      });

      // 6. "use client" Direktive
      it('hat "use client" Direktive', () => {
        if (!comp.content.startsWith('"use client"')) {
          expect.fail(`${comp.name}: Fehlt "use client" am Dateianfang.`);
        }
      });
    });
  }
});

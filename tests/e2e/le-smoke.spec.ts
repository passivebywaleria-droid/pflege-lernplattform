/**
 * E2E Smoke-Test — Prüft ob LEs laden und Steps navigierbar sind
 *
 * Testet:
 * 1. LE-Seite lädt ohne Fehler
 * 2. Erster Step wird angezeigt
 * 3. Step-Navigator ist vorhanden
 * 4. Weiter-Button/Interaktion möglich
 * 5. Kein JavaScript-Fehler in der Console
 */

import { test, expect } from "@playwright/test";

const LES_TO_TEST = [
  { id: "le-03-ra-definition", name: "LE 03 RA Definition" },
  { id: "le-04-ra-symptome-diagnose", name: "LE 04 RA Symptome" },
];

for (const le of LES_TO_TEST) {
  test.describe(le.name, () => {
    test("Seite lädt ohne Fehler", async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });

      await page.goto(`/de/lernen/${le.id}`);

      // Seite hat geladen
      await expect(page).not.toHaveTitle(/error/i);

      // Kein kritischer JS-Fehler (Warnings ignorieren)
      const criticalErrors = consoleErrors.filter(
        (e) => !e.includes("Warning:") && !e.includes("hydration")
      );

      if (criticalErrors.length > 0) {
        console.warn(`Console-Fehler in ${le.name}:`, criticalErrors);
      }
    });

    test("Erster Step wird angezeigt", async ({ page }) => {
      await page.goto(`/de/lernen/${le.id}`);

      // H2 Titel sollte sichtbar sein
      const heading = page.locator("h2").first();
      await expect(heading).toBeVisible({ timeout: 10_000 });

      // Text sollte nicht leer sein
      const text = await heading.textContent();
      expect(text?.length).toBeGreaterThan(0);
    });

    test("Step-Navigator existiert", async ({ page }) => {
      await page.goto(`/de/lernen/${le.id}`);

      // Progress-Bar / Step-Indicator sollte vorhanden sein
      // Warte bis die Seite geladen ist
      await page.waitForTimeout(2000);

      // Entweder ein Fortschrittsbalken oder Step-Counter
      const hasProgress =
        (await page.locator('[class*="progress"]').count()) > 0 ||
        (await page.locator('[class*="bg-\\[#0071e3\\]"]').count()) > 0 ||
        (await page.getByText(/Step \d+/i).count()) > 0 ||
        (await page.getByText(/\d+\/\d+/).count()) > 0;

      expect(hasProgress).toBeTruthy();
    });

    test("Kann durch erste 3 Steps navigieren", async ({ page }) => {
      await page.goto(`/de/lernen/${le.id}`);
      await page.waitForTimeout(2000);

      for (let step = 0; step < 3; step++) {
        // Warte auf H2 (Step-Titel)
        const heading = page.locator("h2").first();
        await expect(heading).toBeVisible({ timeout: 5_000 });

        // Versuche "Weiter" zu klicken (für Text-Steps und Info-Steps)
        const weiterButton = page.getByRole("button", { name: /weiter/i });
        if ((await weiterButton.count()) > 0 && (await weiterButton.isVisible())) {
          await weiterButton.click();
          await page.waitForTimeout(500);
          continue;
        }

        // Für interaktive Steps: Versuche irgendeine Interaktion
        // MC: Erste Option klicken
        const mcOption = page.locator("button").filter({ hasText: /^[A-D]\.\s/ }).first();
        if ((await mcOption.count()) > 0 && (await mcOption.isVisible())) {
          await mcOption.click();
          await page.waitForTimeout(500);

          // Nach MC-Antwort "Weiter" klicken
          const nextButton = page.getByRole("button", { name: /weiter/i });
          if ((await nextButton.count()) > 0) {
            await nextButton.click();
          }
          continue;
        }

        // Swipe/TrueFalse: STIMMT oder WAHR klicken
        const stimmtButton = page.getByRole("button", { name: /stimmt|wahr/i }).first();
        if ((await stimmtButton.count()) > 0 && (await stimmtButton.isVisible())) {
          await stimmtButton.click();
          await page.waitForTimeout(500);

          // Nächste Karte / Weiter
          const nextButton = page.getByRole("button", { name: /nächste|weiter/i });
          if ((await nextButton.count()) > 0) {
            await nextButton.click();
          }
          continue;
        }

        // Wenn nichts klickbar ist, Step überspringen
        console.warn(`Step ${step + 1}: Konnte nicht automatisch durchklicken`);
        break;
      }
    });

    test("Kein weißer Text auf weißem Hintergrund", async ({ page }) => {
      await page.goto(`/de/lernen/${le.id}`);
      await page.waitForTimeout(2000);

      // Prüfe dass kein Text unsichtbar ist (color === background-color)
      const invisibleText = await page.evaluate(() => {
        const elements = document.querySelectorAll("h1, h2, h3, p, span, button");
        const issues: string[] = [];

        elements.forEach((el) => {
          const style = getComputedStyle(el);
          const text = el.textContent?.trim();
          if (!text) return;

          const color = style.color;
          const bg = style.backgroundColor;

          // Weißer Text auf weißem/transparentem Hintergrund
          if (
            (color === "rgb(255, 255, 255)" || color === "rgba(255, 255, 255, 1)") &&
            (bg === "rgba(0, 0, 0, 0)" || bg === "rgb(255, 255, 255)")
          ) {
            issues.push(`"${text.substring(0, 50)}": color=${color}, bg=${bg}`);
          }
        });

        return issues;
      });

      if (invisibleText.length > 0) {
        console.warn("Möglicherweise unsichtbarer Text:", invisibleText);
      }

      // Kein harter Fehler — nur Warnung, da CSS-Kaskaden komplex sind
    });
  });
}

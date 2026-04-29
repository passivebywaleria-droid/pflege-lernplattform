#!/usr/bin/env npx tsx
/**
 * Vollständiger Pilot-Walkthrough Frau-M.-Sturz — alle 6 Phasen, Mobile-Viewport.
 * Klickt durch jeden Step, macht Screenshot pro Step, sammelt Console-Errors.
 *
 * Usage: npx tsx scripts/pilot-walkthrough-full.ts
 */

import { chromium, type ConsoleMessage, type Page } from "playwright";
import * as fs from "fs";
import * as path from "path";

const URL =
  "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02";
const SCREENSHOT_DIR = path.join(
  process.cwd(),
  "scripts",
  "_pilot-screenshots"
);

const findings: { sev: string; phase: string; step: string; text: string }[] =
  [];
const consoleErrors: string[] = [];
const consoleWarnings: string[] = [];

function f(sev: "OK" | "WARN" | "ERR", phase: string, step: string, text: string) {
  const icon = sev === "OK" ? "🟢" : sev === "WARN" ? "🟡" : "🔴";
  findings.push({ sev: icon, phase, step, text });
  console.log(`${icon} [${phase} · ${step}] ${text}`);
}

async function shot(page: Page, name: string) {
  if (!fs.existsSync(SCREENSHOT_DIR))
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  const file = path.join(SCREENSHOT_DIR, `${name}.png`);
  try {
    await page.screenshot({ path: file, fullPage: true, timeout: 5000 });
  } catch {}
}

async function clickWeiter(
  page: Page,
  phase: string,
  step: string
): Promise<boolean> {
  const candidates = [
    "button:has-text('Weiter')",
    "button:has-text('Antworten')",
    "button:has-text('Prüfen')",
    "button:has-text('Abstimmen')",
    "button:has-text('Fertig')",
  ];
  for (const sel of candidates) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 1000 })) {
        await btn.scrollIntoViewIfNeeded();
        await btn.click({ timeout: 2000 });
        return true;
      }
    } catch {}
  }
  f("ERR", phase, step, `Kein Weiter/Antworten/Prüfen-Button gefunden`);
  return false;
}

async function trySelectAnswer(page: Page) {
  // MC-Optionen: button[role=radio]
  const radio = page.locator("button[role='radio']");
  if ((await radio.count()) > 0) {
    await radio.nth(1).click().catch(() => {});
    return true;
  }
  // CrowdPoll-Optionen
  const pillBtn = page
    .locator("button:has-text('Halb sicher'), button:has-text('Unsicher')")
    .first();
  if (await pillBtn.isVisible({ timeout: 500 }).catch(() => false)) {
    await pillBtn.click().catch(() => {});
    return true;
  }
  return false;
}

async function dismissGlossarSheet(page: Page) {
  const sheet = page.locator(".fixed.inset-0").first();
  if ((await sheet.count()) > 0) {
    await page.keyboard.press("Escape");
    await page.waitForTimeout(400);
  }
}

async function walkPhase(
  page: Page,
  phase: string,
  expectedSteps: number,
  startIdx: number
): Promise<number> {
  let idx = startIdx;
  for (let i = 0; i < expectedSteps + 2; i++) {
    await page.waitForTimeout(700);
    await dismissGlossarSheet(page);

    const fileName = `${String(idx).padStart(2, "0")}-${phase}-step${i + 1}`;
    await shot(page, fileName);

    const stepLabel = `Schritt ${i + 1}`;

    // Step-Inhalt erkennen
    const isInlineWissen =
      (await page
        .locator("text=/Pflege-Wissen/")
        .count()
        .catch(() => 0)) > 0;
    const isDialog =
      (await page.locator("text=Dialog").count().catch(() => 0)) > 0 &&
      (await page
        .locator("[class*='whatsapp'], [style*='efeae2']")
        .count()
        .catch(() => 0)) > 0;
    const isSorting =
      (await page.locator("[class*='drag']").count().catch(() => 0)) > 0;
    const hasOptions =
      (await page
        .locator("button[role='radio']")
        .count()
        .catch(() => 0)) > 0;

    if (isInlineWissen) {
      const lese = await page
        .locator("text=/Pflege-Wissen.*ca\\./")
        .first()
        .textContent()
        .catch(() => "");
      f("OK", phase, stepLabel, `Inline-Wissen: "${lese?.trim()}"`);

      // Faustregel sichtbar?
      const hasFaustregel =
        (await page.locator("text=/FAUSTREGEL/i").count()) > 0;
      f(
        hasFaustregel ? "OK" : "WARN",
        phase,
        stepLabel,
        `Faustregel-Box: ${hasFaustregel ? "ja" : "nein"}`
      );
    } else if (isDialog) {
      f("OK", phase, stepLabel, "Dialog-Step");
    } else if (hasOptions) {
      f("OK", phase, stepLabel, "MC/Branching/CrowdPoll");
      await trySelectAnswer(page);
      await page.waitForTimeout(400);
    }

    // Versuche Weiter zu klicken
    await page.waitForTimeout(500);
    const success = await clickWeiter(page, phase, stepLabel);
    if (!success) {
      // Probiere Antwort auszuwählen, dann erneut
      const ok = await trySelectAnswer(page);
      if (ok) {
        await page.waitForTimeout(500);
        const second = await clickWeiter(page, phase, stepLabel);
        if (!second) break;
      } else {
        break;
      }
    }

    idx++;

    // Phase-Wechsel-Detector — wenn neuer Phase-Header erscheint
    const phaseHeader = await page
      .locator("h1, h2")
      .first()
      .textContent()
      .catch(() => "");
    if (phaseHeader && !phaseHeader.includes(phase)) {
      // möglicherweise Phasen-Übergang
      break;
    }
  }
  return idx;
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  page.on("console", (m: ConsoleMessage) => {
    const t = m.text();
    if (m.type() === "error") consoleErrors.push(t);
    if (m.type() === "warning") consoleWarnings.push(t);
  });
  page.on("pageerror", (e) => consoleErrors.push(`PageError: ${e.message}`));

  console.log("\n→ Lade Frau-M.-Sturz\n");
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 30_000 });
  await page.waitForTimeout(1500);
  await shot(page, "00-start");

  let idx = 1;

  // Phase 1 — informieren (8 Steps mit 3 Inline-Wissen)
  idx = await walkPhase(page, "informieren", 8, idx);

  // Phase 2 — beobachten (8 Steps mit 2 Inline-Wissen)
  idx = await walkPhase(page, "beobachten", 8, idx);

  // Phase 3 — planen (8 Steps mit 3 Inline-Wissen)
  idx = await walkPhase(page, "planen", 8, idx);

  // Phase 4 — durchfuehren
  idx = await walkPhase(page, "durchfuehren", 8, idx);

  // Phase 5 — evaluieren
  idx = await walkPhase(page, "evaluieren", 5, idx);

  // Phase 6 — dokumentieren
  idx = await walkPhase(page, "dokumentieren", 4, idx);

  await shot(page, `${String(idx).padStart(2, "0")}-final`);

  await ctx.close();
  await browser.close();

  // Bericht
  console.log("\n" + "═".repeat(72));
  console.log("  FULL-WALKTHROUGH ZUSAMMENFASSUNG");
  console.log("═".repeat(72));

  const ok = findings.filter((x) => x.sev === "🟢").length;
  const warn = findings.filter((x) => x.sev === "🟡").length;
  const err = findings.filter((x) => x.sev === "🔴").length;

  console.log(`\n✅ ${ok} OK   |   🟡 ${warn} Warnungen   |   🔴 ${err} Fehler`);
  console.log(`\n📝 Console-Errors: ${consoleErrors.length}`);
  for (const e of consoleErrors.slice(0, 5))
    console.log(`   ${e.slice(0, 250)}`);
  console.log(`\n📝 Console-Warnings: ${consoleWarnings.length}`);

  if (err > 0) {
    console.log("\n🔴 ERRORS:");
    findings
      .filter((x) => x.sev === "🔴")
      .forEach((x) => console.log(`   ${x.phase}/${x.step}: ${x.text}`));
  }

  console.log(`\n📸 ${SCREENSHOT_DIR}\n`);
}

run().catch((e) => {
  console.error("Walkthrough crash:", e);
  process.exit(1);
});

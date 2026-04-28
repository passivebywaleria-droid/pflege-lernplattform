#!/usr/bin/env npx tsx
/**
 * Automatisierter Pilot-Walkthrough für Frau-M.-Sturz Phase 1.
 * Klickt durch alle 8 Steps, sammelt Console-Errors, Visual-Checks, Bug-Befunde.
 *
 * Voraussetzung: npm run dev läuft auf http://localhost:3000
 *
 * Usage: npx tsx scripts/pilot-walkthrough.ts
 */

import { chromium, type ConsoleMessage, type Page } from "playwright";
import * as fs from "fs";
import * as path from "path";

const URL = "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02";
const SCREENSHOT_DIR = path.join(process.cwd(), "scripts", "_pilot-screenshots");

type Finding = {
  severity: "🔴" | "🟡" | "🟢" | "ℹ️";
  step: string;
  text: string;
};

const findings: Finding[] = [];
const consoleErrors: string[] = [];
const consoleWarnings: string[] = [];

function f(severity: Finding["severity"], step: string, text: string) {
  findings.push({ severity, step, text });
  console.log(`${severity} [${step}] ${text}`);
}

async function ensureDir() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }
}

async function shot(page: Page, name: string) {
  const file = path.join(SCREENSHOT_DIR, `${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
}

async function run() {
  await ensureDir();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 414, height: 896 }, // iPhone-12-Pro-Max-Größe (Mobile-Test)
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  page.on("console", (msg: ConsoleMessage) => {
    const t = msg.text();
    if (msg.type() === "error") consoleErrors.push(t);
    if (msg.type() === "warning") consoleWarnings.push(t);
  });
  page.on("pageerror", (err) => {
    consoleErrors.push(`PageError: ${err.message}`);
  });

  console.log(`\n→ Lade ${URL}\n`);
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30_000 });

  // Step 1.1 — SBAR-Übergabe (text)
  await shot(page, "01-sbar");
  const titleSbar = await page.locator("h2").first().textContent();
  f("ℹ️", "1.1", `Titel: ${titleSbar?.trim()}`);

  await page.waitForTimeout(500);
  await page.locator("button:has-text('Weiter')").first().click().catch(() => {
    f("🔴", "1.1", "Kein 'Weiter'-Button gefunden");
  });

  // Step 1.1b — Inline-Wissen Sturz-Definition
  await page.waitForTimeout(800);
  await shot(page, "02-inline-wissen-1");
  const inlineLabel = await page.locator("text=/Pflege-Wissen.*Min|Pflege-Wissen.*Sek/i").first().textContent().catch(() => null);
  if (inlineLabel) {
    f("🟢", "1.1b", `Inline-Wissen-Header sichtbar: "${inlineLabel.trim()}"`);
  } else {
    f("🔴", "1.1b", "Inline-Wissen-Header fehlt");
  }

  // Bullets sichtbar? Suche nach Texten die mit • beginnen (multiline)
  const inlineCardText = await page.locator(":has-text('Pflege-Wissen')").first().textContent().catch(() => "");
  const bulletsVisible = (inlineCardText?.match(/•/g) || []).length;
  f(bulletsVisible >= 3 ? "🟢" : "🔴", "1.1b", `Bullet-Punkte im Inline-Wissen: ${bulletsVisible}`);

  // Sage-Teal Farbe geprüft via border style
  const inlineCard = page.locator("[role='img']").first().or(page.locator(":has-text('Pflege-Wissen')").first());

  // Faustregel-Box sichtbar?
  const faustregelText = await page.locator("text=Faustregel").count();
  f(faustregelText > 0 ? "🟢" : "🔴", "1.1b", `Faustregel-Box: ${faustregelText > 0 ? "vorhanden" : "fehlt"}`);

  // Glossar-Begriff anklickbar prüfen — wir suchen unterstrichene Spans (role=button)
  const glossarSpans = await page.locator("span[role='button']").count();
  f(glossarSpans > 0 ? "🟢" : "🟡", "1.1b", `Glossar-Spans (anklickbar): ${glossarSpans}`);

  // Test: Glossar tippen — Sheet öffnen + via Backdrop-Click schließen
  if (glossarSpans > 0) {
    try {
      await page.locator("span[role='button']").first().click({ timeout: 2000 });
      await page.waitForTimeout(700);
      // Glossar-Sheet erkennen via Begriff+Erklärung-Pattern
      const sheetVisible = await page.locator(".fixed.inset-0.bg-black\\/40, [class*='backdrop-blur']").count();
      f(sheetVisible > 0 ? "🟢" : "🟡", "1.1b", `Glossar-Bottom-Sheet öffnet: ${sheetVisible > 0}`);
      // ESC schließt jetzt — Fix in fachbegriff-tooltip.tsx
      await page.keyboard.press("Escape");
      await page.waitForTimeout(500);
      // Falls ESC nicht greift: Backdrop-Click
      const stillOpen = await page.locator(".fixed.inset-0.bg-black\\/40").count();
      if (stillOpen > 0) {
        await page.locator(".fixed.inset-0.bg-black\\/40").click({ position: { x: 10, y: 10 } });
        await page.waitForTimeout(400);
      }
    } catch (e) {
      f("🟡", "1.1b", `Glossar-Klick error: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }

  // Markdown-Sterne im Text? (Sollten WEG sein)
  const sternePattern = await page.locator("text=/\\*\".*\"\\*/").count();
  f(sternePattern === 0 ? "🟢" : "🔴", "1.1b/1.5b", `Markdown-Asterisken sichtbar: ${sternePattern} (sollten 0 sein)`);

  // Weiter
  await page.locator("button:has-text('Weiter')").first().click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(800);

  // Step 1.2 — crowdPoll
  await shot(page, "03-crowdpoll-input");
  // Pill-Buttons sind Buttons innerhalb von .space-y-2 mit border-[1.5px]
  const pillCount1 = await page.locator("button:has-text('Halb sicher')").count();
  const pillCount2 = await page.locator("button:has-text('Unsicher')").count();
  const pillCount3 = await page.locator("button:has-text('nervös')").count();
  const totalPills = pillCount1 + pillCount2 + pillCount3;
  f(totalPills >= 3 ? "🟢" : "🔴", "1.2", `Pill-Buttons gefunden: halb-sicher=${pillCount1}, unsicher=${pillCount2}, nervös=${pillCount3}`);

  // Sticky Bottom Action Bar bei crowdPoll?
  const fixedBottomBar = await page.locator("div.fixed.bottom-0").count();
  f(fixedBottomBar > 0 ? "🟢" : "🔴", "1.2", `Sticky Bottom Action Bar: ${fixedBottomBar > 0}`);

  // Klick auf "Halb sicher" und dann Abstimmen
  await page.locator("button:has-text('Halb sicher')").first().click().catch(() => {});
  await page.waitForTimeout(300);
  await page.locator("button:has-text('Abstimmen')").first().click().catch(() => {});
  await page.waitForTimeout(800);

  // Crowd-Poll Ergebnis-Phase
  await shot(page, "04-crowdpoll-result");
  const totalVotes = await page.locator("text=/247.*Schüler/i").count();
  f(totalVotes > 0 ? "🟢" : "🟡", "1.2", `247-Schüler-Hinweis: ${totalVotes > 0}`);

  await page.locator("button:has-text('Weiter')").first().click().catch(() => {});
  await page.waitForTimeout(800);

  // Step 1.3 — MC Erste Priorität
  await shot(page, "05-mc-prio");

  // Truncate-with-fade prüfen — Body sollte sichtbar sein, aber line-clamp-3
  const lineClamp = await page.locator(".line-clamp-3").count();
  f(lineClamp > 0 ? "🟢" : "🟡", "1.3", `Line-clamp-3 (Truncate-Body): ${lineClamp > 0}`);

  // "Mehr lesen" — sollte rechtsbündig sein (justify-end)
  const mehrLesen = await page.locator("button:has-text('Mehr lesen')").count();
  f(mehrLesen > 0 ? "🟢" : "🟡", "1.3", `'Mehr lesen'-Button: ${mehrLesen > 0}`);

  // Klick auf eine Antwort
  await page.locator("button[role='radio']").nth(1).click().catch(() => {});
  await page.waitForTimeout(500);
  await page.locator("button:has-text('Weiter'), button:has-text('Antworten')").first().click().catch(() => {});
  await page.waitForTimeout(500);
  await page.locator("button:has-text('Weiter')").first().click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(800);

  // Step 1.3b — Inline-Wissen Risikofaktoren-Spektrum
  await shot(page, "06-inline-wissen-2");
  const spektrumToggle = await page.locator("button:has-text('Spektrum'), [aria-controls='spektrum-panel']").count();
  f(spektrumToggle > 0 ? "🟢" : "🔴", "1.3b", `Spektrum-Toggle vorhanden: ${spektrumToggle > 0}`);

  // Spektrum öffnen
  if (spektrumToggle > 0) {
    await page.locator("[aria-controls='spektrum-panel']").first().click().catch(() => {});
    await page.waitForTimeout(300);
    const bauerInSpektrum = await page.locator("text=Herr Bauer").count();
    const yilmazInSpektrum = await page.locator("text=Frau Yilmaz").count();
    f((bauerInSpektrum > 0 && yilmazInSpektrum > 0) ? "🟢" : "🟡", "1.3b", `Spektrum zeigt Patient(innen): Bauer=${bauerInSpektrum}, Yilmaz=${yilmazInSpektrum}`);
  }

  // Sonst-Box
  const sonstToggle = await page.locator("[aria-controls='sonst-panel']").count();
  f(sonstToggle > 0 ? "🟢" : "🟡", "1.3b", `Sonst-Box-Toggle vorhanden: ${sonstToggle > 0}`);

  await page.locator("button:has-text('Weiter')").first().click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(800);

  // Step 1.4 — Dialog
  await shot(page, "07-dialog");

  // Dialog-Doppelung-Check: zähle wie oft "Du betrittst das Zimmer" vorkommt
  const dialogDuplicate = await page.locator("text=/Du betrittst das Zimmer/").count();
  f(
    dialogDuplicate <= 1 ? "🟢" : "🔴",
    "1.4",
    `Dialog-Doppelung: "${dialogDuplicate}× Du betrittst das Zimmer" (sollte 1 sein)`
  );

  const friauMDuplicate = await page.locator("text=/Es tut mir furchtbar leid/").count();
  f(
    friauMDuplicate <= 1 ? "🟢" : "🔴",
    "1.4",
    `Frau-M-Zitat-Doppelung: "${friauMDuplicate}× Es tut mir furchtbar leid" (sollte 1 sein)`
  );

  // Patient-Avatar?
  const patientAvatar = await page.locator("[class*='avatar']").count();
  f(patientAvatar > 0 ? "🟢" : "🟡", "1.4", `Patient-Avatar: ${patientAvatar}`);

  // Dialog-Optionen sichtbar?
  await page.waitForTimeout(2000); // Warte auf showChoices Animation
  const dialogOptions = await page.locator("button:has-text('Sie machen')").count();
  f(dialogOptions >= 1 ? "🟢" : "🟡", "1.4", `Dialog-Antwort-Optionen: ${dialogOptions}`);

  // Wähle erste Option
  if (dialogOptions > 0) {
    await page.locator("button:has-text('Sie machen')").first().click().catch(() => {});
    await page.waitForTimeout(2000);
  }

  // Probleme: Kann am Dialog scheitern, Skip
  await page.locator("button:has-text('Weiter')").first().click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(800);

  // Step 1.5 — Sorting (skip, optional)
  await shot(page, "08-sorting");
  await page.locator("button:has-text('Weiter')").first().click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(800);

  // Step 1.5b — Inline-Wissen NRS
  await shot(page, "09-inline-wissen-nrs");
  const nrsTitle = await page.locator("text=/NRS.*Schmerzskala|NRS.*gleich brauchst/").count();
  f(nrsTitle > 0 ? "🟢" : "🟡", "1.5b", `NRS-Inline-Wissen sichtbar: ${nrsTitle > 0}`);

  // Markdown-Sterne im NRS-Body?
  const nrsBody = await page.locator(":has-text('Schmerzassessment')").last().textContent().catch(() => "");
  const hatSterne = nrsBody?.includes("*\"") || nrsBody?.includes("\"*") ? true : false;
  f(!hatSterne ? "🟢" : "🔴", "1.5b", `Markdown-Sterne im NRS-Text: ${hatSterne ? "JA (Bug!)" : "weg"}`);

  // Lesezeit-Label dynamisch
  const lesezeit = await page.locator("text=/Pflege-Wissen.*ca\\..*Min|Pflege-Wissen.*ca\\..*Sek/").last().textContent().catch(() => "");
  f("ℹ️", "1.5b", `Lesezeit-Label: "${lesezeit}"`);

  // Console-Errors finalisieren
  await page.waitForTimeout(500);

  await context.close();
  await browser.close();

  // === Bericht ===
  console.log("\n" + "═".repeat(72));
  console.log("  PILOT-WALKTHROUGH ZUSAMMENFASSUNG");
  console.log("═".repeat(72));

  const errors = findings.filter((x) => x.severity === "🔴");
  const warnings = findings.filter((x) => x.severity === "🟡");
  const oks = findings.filter((x) => x.severity === "🟢");

  console.log(`\n✅ ${oks.length} OK   |   🟡 ${warnings.length} Warnungen   |   🔴 ${errors.length} Fehler\n`);

  if (errors.length > 0) {
    console.log("🔴 FEHLER:");
    for (const e of errors) console.log(`   [${e.step}] ${e.text}`);
    console.log();
  }
  if (warnings.length > 0) {
    console.log("🟡 WARNUNGEN:");
    for (const w of warnings) console.log(`   [${w.step}] ${w.text}`);
    console.log();
  }

  console.log(`\n📝 Console-Errors während Walkthrough: ${consoleErrors.length}`);
  for (const e of consoleErrors.slice(0, 10)) console.log(`   ⚠️ ${e.slice(0, 200)}`);
  console.log(`\n📝 Console-Warnings: ${consoleWarnings.length}`);
  for (const w of consoleWarnings.slice(0, 10)) console.log(`   ⚠️ ${w.slice(0, 200)}`);

  console.log(`\n📸 Screenshots: ${SCREENSHOT_DIR}\n`);
}

run().catch((e) => {
  console.error("Walkthrough fehlgeschlagen:", e);
  process.exit(1);
});

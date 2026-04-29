#!/usr/bin/env npx tsx
/**
 * Step-by-step-Walkthrough — pro Step ein Screenshot, robuste Klick-Logik.
 * Macht max 60 Steps Screenshots durch alle Phasen.
 *
 * Usage: npx tsx scripts/pilot-walkthrough-step.ts
 */

import { chromium, type ConsoleMessage, type Page } from "playwright";
import * as fs from "fs";
import * as path from "path";

const URL =
  "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02";
const SCREENSHOT_DIR = path.join(
  process.cwd(),
  "scripts",
  "_step-screenshots"
);
const MAX_STEPS = 60;

const errors: string[] = [];
const consoleErrors: string[] = [];
const consoleWarnings: string[] = [];

async function shot(page: Page, name: string) {
  if (!fs.existsSync(SCREENSHOT_DIR))
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  try {
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `${name}.png`),
      fullPage: true,
      timeout: 5000,
    });
  } catch {}
}

async function getCurrentStepInfo(page: Page) {
  const phaseHeader = await page
    .locator(".text-\\[10px\\].uppercase, [class*='uppercase']")
    .first()
    .textContent()
    .catch(() => "?");
  const title = await page
    .locator("h1, h2")
    .first()
    .textContent()
    .catch(() => "?");
  // Inline-Wissen erkennt man am sticky-bottom + Faustregel-Box
  // ODER an "Pflege-Wissen"-Header (case-insensitive search)
  const allText = await page
    .locator("body")
    .textContent()
    .catch(() => "");
  const isInlineWissen =
    !!allText &&
    (allText.includes("Pflege-Wissen") || allText.includes("Faustregel"));
  return {
    phaseHeader: (phaseHeader || "").trim().slice(0, 50),
    title: (title || "").trim().slice(0, 80),
    isInlineWissen,
  };
}

async function dismissOverlay(page: Page) {
  for (let i = 0; i < 3; i++) {
    const overlay = page.locator(".fixed.inset-0.bg-black\\/40");
    if ((await overlay.count()) === 0) return;
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
  }
  // Fallback: force click on overlay
  try {
    await page
      .locator(".fixed.inset-0.bg-black\\/40")
      .click({ position: { x: 5, y: 5 }, force: true, timeout: 1000 });
  } catch {}
}

async function pickAnyAnswer(page: Page): Promise<boolean> {
  // Versuche verschiedene Auswahl-Patterns
  // 1) Radio (MC)
  const radios = page.locator("button[role='radio']");
  if ((await radios.count()) > 0) {
    await radios.first().click().catch(() => {});
    return true;
  }
  // 2) TrueFalse: button mit "wahr"/"falsch"
  const tfBtn = page
    .locator(
      "button:has-text('Wahr'), button:has-text('Falsch'), button:has-text('Richtig')"
    )
    .first();
  if (await tfBtn.isVisible({ timeout: 300 }).catch(() => false)) {
    await tfBtn.click().catch(() => {});
    return true;
  }
  // 3) CrowdPoll Pill-Buttons
  const pill = page
    .locator(
      "button:has-text('Halb sicher'), button:has-text('Unsicher'), button:has-text('Sicher'), button:has-text('nervös')"
    )
    .first();
  if (await pill.isVisible({ timeout: 300 }).catch(() => false)) {
    await pill.click().catch(() => {});
    return true;
  }
  // 4) Selfrating: button mit numerischem aria-label oder rating
  const rating = page.locator("[aria-label*='Stern'], button[role='radio']");
  if ((await rating.count()) > 0) {
    await rating.first().click().catch(() => {});
    return true;
  }
  // 5) Branching-Optionen
  const branchingBtn = page
    .locator("button.rounded-xl, button.border-\\[1\\.5px\\]")
    .first();
  if (await branchingBtn.isVisible({ timeout: 300 }).catch(() => false)) {
    await branchingBtn.click().catch(() => {});
    return true;
  }
  return false;
}

async function clickPrimary(page: Page): Promise<boolean> {
  const candidates = [
    "button:has-text('Weiter')",
    "button:has-text('Antworten')",
    "button:has-text('Prüfen')",
    "button:has-text('Abstimmen')",
    "button:has-text('Fertig')",
    "button:has-text('Bestätigen')",
    "button:has-text('Absenden')",
  ];
  for (const sel of candidates) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 800 })) {
        const isDisabled = await btn.isDisabled().catch(() => false);
        if (isDisabled) continue;
        await btn.click({ timeout: 2000 });
        return true;
      }
    } catch {}
  }
  return false;
}

async function run() {
  // Clean screenshots
  if (fs.existsSync(SCREENSHOT_DIR)) {
    for (const f of fs.readdirSync(SCREENSHOT_DIR)) {
      if (f.endsWith(".png"))
        fs.unlinkSync(path.join(SCREENSHOT_DIR, f));
    }
  }

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

  console.log(`\n→ Lade ${URL}\n`);
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 30_000 });
  await page.waitForTimeout(2000);

  const seenTitles = new Map<string, number>();

  for (let i = 1; i <= MAX_STEPS; i++) {
    await dismissOverlay(page);
    // Warte auf vollständigen Step-Render (h2 vorhanden + nicht Skeleton)
    await page.waitForTimeout(800);
    try {
      await page.waitForFunction(
        () => {
          const h2 = document.querySelector("h2");
          const skel = document.querySelector(".animate-pulse");
          return h2 && h2.textContent && h2.textContent.length > 3 && !skel;
        },
        { timeout: 6000 }
      );
    } catch {}
    await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(400);

    const info = await getCurrentStepInfo(page);
    const titleKey = info.title;
    const seenCount = (seenTitles.get(titleKey) ?? 0) + 1;
    seenTitles.set(titleKey, seenCount);

    if (seenCount > 3) {
      // Stuck on same step — exit
      console.log(`\n⚠️  Stuck auf "${info.title}" (3× gleicher Titel)`);
      break;
    }

    const fname = `${String(i).padStart(2, "0")}-${info.title
      .toLowerCase()
      .replace(/[^a-z0-9äöüß]+/gi, "-")
      .slice(0, 40)}`;
    await shot(page, fname);

    const tag = info.isInlineWissen ? "📖" : "▶";
    console.log(`${tag} Step ${i.toString().padStart(2)}: [${info.phaseHeader}] ${info.title}`);

    // Versuche Antwort auszuwählen — aber NICHT in Inline-Wissen-Steps
    // (dort sind nur Lese-Karten + Spektrum-Toggle, kein Quiz)
    if (!info.isInlineWissen) {
      await pickAnyAnswer(page);
      await page.waitForTimeout(500);
    }

    // Klick Primary Button — vorher kurz warten, damit Animation/Mount fertig ist
    await page.waitForTimeout(300);
    let ok = await clickPrimary(page);
    if (!ok && !info.isInlineWissen) {
      // Try answer + click sequence multiple times (nur Anwendungs-Steps)
      for (let attempt = 0; attempt < 3; attempt++) {
        await pickAnyAnswer(page);
        await page.waitForTimeout(600);
        ok = await clickPrimary(page);
        if (ok) break;
      }
    }
    if (!ok) {
      console.log(`   ⚠️  Stuck — kein Klick möglich`);
      await shot(page, `${String(i).padStart(2, "0")}-STUCK`);
      break;
    }

    // Längere Pause nach Klick — Lazy-Loading + AnimatePresence + Hot-Reload
    await page.waitForTimeout(2500);
  }

  await ctx.close();
  await browser.close();

  console.log("\n" + "═".repeat(72));
  console.log("  STEP-BY-STEP-WALKTHROUGH FINAL");
  console.log("═".repeat(72));

  console.log(`\n📝 Console-Errors: ${consoleErrors.length}`);
  for (const e of consoleErrors.slice(0, 10))
    console.log(`   ${e.slice(0, 250)}`);

  console.log(`\n📝 Console-Warnings: ${consoleWarnings.length}`);
  for (const w of consoleWarnings.slice(0, 5))
    console.log(`   ${w.slice(0, 200)}`);

  const screenshots = fs.existsSync(SCREENSHOT_DIR)
    ? fs.readdirSync(SCREENSHOT_DIR).filter((f) => f.endsWith(".png"))
    : [];
  console.log(`\n📸 ${screenshots.length} Screenshots in ${SCREENSHOT_DIR}\n`);
}

run().catch((e) => {
  console.error("Crash:", e);
  process.exit(1);
});

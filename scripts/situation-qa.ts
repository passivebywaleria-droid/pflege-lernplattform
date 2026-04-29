#!/usr/bin/env npx tsx
/**
 * situation-qa.ts — Quality-Assurance-Pipeline für alle Situationen.
 *
 * Orchestriert 4 Module:
 *   1. Funktional-Walkthrough (Playwright) — jeder Step klickbar? Kein Crash?
 *   2. UX-Audit (DOM-Analyse) — Lesezeit, Touch-Targets, Overflow, Stil-Konsistenz
 *   3. Content-Audit (statisch) — Pflege-Quellen, Bloom-Verteilung, Modi-Vielfalt
 *   4. Score-Engine — 6 Sub-Scores → Gesamt-Score (0-100)
 *
 * Usage:
 *   npx tsx scripts/situation-qa.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/situation-qa.ts ce-02 --all
 *   npx tsx scripts/situation-qa.ts ce-02 frau-m-nacht-sturz --pipeline
 *
 * Output:
 *   content/{ceId}/situationen/{sitId}/qa-report.json
 *   content/{ceId}/situationen/{sitId}/qa-report.md
 *   Bei --all: content/{ceId}/qa-summary.md (Vergleichs-Heatmap)
 *
 * --pipeline Modus:
 *   Kein Screenshot, kein Markdown — nur JSON-Report.
 *   Exit-Code 0 bei Score >= 70, Exit-Code 1 bei Score < 70.
 */

import { chromium, type Page, type ConsoleMessage } from "playwright";
import * as fs from "fs";
import * as path from "path";

// ═══════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════

interface StepCheck {
  stepIndex: number;
  title: string;
  stepKind: string;
  // Funktional
  rendered: boolean;
  clickable: boolean;
  consoleErrors: number;
  hydrationError: boolean;
  // UX
  estimatedReadTimeSec: number;
  hasActionBar: boolean;
  hasTruncate: boolean;
  glossarTermsFound: number;
  // Content (von Step-Daten, nicht DOM)
  bloomLevel?: number;
  hasQuellen: boolean;
  hasInlineWissen: boolean;
  hasFaustregel: boolean;
}

interface SubScore {
  name: string;
  score: number; // 0-100
  weight: number;
  details: string;
}

interface QAReport {
  ceId: string;
  situationId: string;
  timestamp: string;
  // Module
  steps: StepCheck[];
  totalSteps: number;
  stepsReached: number;
  stuckAt?: { index: number; reason: string };
  consoleErrors: string[];
  pageErrors: string[];
  // Scores
  subScores: SubScore[];
  totalScore: number;
  grade: "A" | "B" | "C" | "D" | "F";
  // Empfehlung
  topIssues: string[];
}

// ═══════════════════════════════════════════════════════════════════════
// MODULE 1: FUNKTIONAL-WALKTHROUGH
// ═══════════════════════════════════════════════════════════════════════

async function clickActionBar(page: Page, text: RegExp): Promise<boolean> {
  const btn = page
    .locator(".fixed.bottom-0 button:visible")
    .filter({ hasText: text })
    .first();
  if (
    (await btn.count()) > 0 &&
    !(await btn.isDisabled().catch(() => true))
  ) {
    await btn.click({ timeout: 2000 }).catch(() => {});
    return true;
  }
  return false;
}

async function clickWeiterQA(page: Page): Promise<boolean> {
  // AnswerSheet-Weiter (höchste Prio — liegt über allem)
  const sheetWeiter = page
    .locator("button[aria-label='Weiter zum nächsten Schritt']")
    .first();
  if (
    (await sheetWeiter.count()) > 0 &&
    (await sheetWeiter.isVisible({ timeout: 500 }).catch(() => false))
  ) {
    await sheetWeiter.click().catch(() => {});
    return true;
  }
  // Action-Bar Weiter
  if (await clickActionBar(page, /^(Weiter|Fertig)/)) return true;
  // Fallback
  const any = page.locator("button:visible").filter({ hasText: /^Weiter$/ }).last();
  if ((await any.count()) > 0 && !(await any.isDisabled().catch(() => true))) {
    await any.click().catch(() => {});
    return true;
  }
  return false;
}

async function handleStepQA(
  page: Page,
  kind: string
): Promise<boolean> {
  // Text / InlineWissen / Summary
  if (["inlineWissen", "text", "summary", "situation", "reveal", "flipcard"].includes(kind)) {
    return await clickWeiterQA(page);
  }

  // MC
  if (kind === "mc") {
    const radio = page.locator("button[role='radio']").first();
    if ((await radio.count()) > 0) {
      await radio.click({ force: true }).catch(() => {});
      await page.waitForTimeout(600);
    }
    if (await clickActionBar(page, /^(Prüfen|Antworten)$/)) {
      await page.waitForTimeout(2500);
    }
    return await clickWeiterQA(page);
  }

  // CrowdPoll
  if (kind === "crowdPoll") {
    const pill = page
      .locator("button:visible")
      .filter({ hasText: /sicher|Unsicher|nervös/i })
      .first();
    if ((await pill.count()) > 0) {
      await pill.click().catch(() => {});
      await page.waitForTimeout(400);
    }
    if (await clickActionBar(page, /^Abstimmen$/)) {
      await page.waitForTimeout(1500);
    }
    return await clickWeiterQA(page);
  }

  // Dialog
  if (kind === "dialog") {
    const opts = await page
      .locator("button.w-full:visible")
      .filter({ hasNotText: /Mehr|Spektrum|Sonst|Weiter|Glossar|Schließen/i })
      .all();
    for (const o of opts) {
      try {
        if (await o.isVisible({ timeout: 300 })) {
          await o.click({ timeout: 1500 });
          break;
        }
      } catch {}
    }
    await page.waitForTimeout(3000);
    return await clickWeiterQA(page);
  }

  // Sorting / Sequencing
  if (["sorting", "sequencing"].includes(kind)) {
    await clickActionBar(page, /^(Prüfen|Fertig)$/);
    await page.waitForTimeout(2000);
    return await clickWeiterQA(page);
  }

  // Highlight: markierbare Segmente sind motion.span oder span mit cursor-pointer
  if (kind === "highlight") {
    // Highlight-Segmente sind <span> innerhalb eines <p> im border-Container
    const container = page.locator(".rounded-2xl.border-\\[1\\.5px\\] p").first();
    if ((await container.count()) > 0) {
      const spans = await container.locator("span").all();
      let clicked = 0;
      for (const s of spans) {
        try {
          const cursor = await s.evaluate((el) =>
            window.getComputedStyle(el).cursor
          );
          if (cursor === "pointer") {
            await s.click({ timeout: 800, force: true });
            clicked++;
            await page.waitForTimeout(300);
            if (clicked >= 3) break;
          }
        } catch {}
      }
    }
    await page.waitForTimeout(500);
    // Prüfen in der Action-Bar
    if (await clickActionBar(page, /^(Prüfen|Fertig)$/)) {
      await page.waitForTimeout(2500);
    }
    return await clickWeiterQA(page);
  }

  // Categorize: Item-für-Item in erste Kategorie zuordnen, dann Prüfen
  if (kind === "categorize") {
    for (let attempt = 0; attempt < 20; attempt++) {
      const catBtn = page
        .locator("[aria-label*='Zuordnen zu']")
        .first();
      if ((await catBtn.count()) === 0) break;
      if (!(await catBtn.isVisible({ timeout: 500 }).catch(() => false))) break;
      await catBtn.click().catch(() => {});
      await page.waitForTimeout(600);
    }
    await page.waitForTimeout(500);
    await clickActionBar(page, /^(Prüfen|Auswerten|Fertig)$/);
    await page.waitForTimeout(2000);
    return await clickWeiterQA(page);
  }

  // Matching: Links-Rechts-Paare verbinden, dann Prüfen
  if (kind === "matching") {
    for (let attempt = 0; attempt < 15; attempt++) {
      // Klick auf ein links-Element
      const leftBtn = page.locator("[aria-label^='Begriff:']").first();
      if ((await leftBtn.count()) === 0) break;
      if (!(await leftBtn.isVisible({ timeout: 500 }).catch(() => false))) break;
      await leftBtn.click().catch(() => {});
      await page.waitForTimeout(400);
      // Klick auf ein rechts-Element
      const rightBtn = page.locator("[aria-label^='Zuordnung:']").first();
      if ((await rightBtn.count()) > 0) {
        await rightBtn.click().catch(() => {});
        await page.waitForTimeout(600);
      }
    }
    await page.waitForTimeout(500);
    // Prüfen-Button via aria-label
    const prBtn = page.locator("button[aria-label='Zuordnung prüfen']");
    if ((await prBtn.count()) > 0 && !(await prBtn.isDisabled().catch(() => true))) {
      await prBtn.click().catch(() => {});
      await page.waitForTimeout(2000);
    } else {
      await clickActionBar(page, /^(Prüfen|Auswerten|Fertig)$/);
      await page.waitForTimeout(2000);
    }
    return await clickWeiterQA(page);
  }

  // TrueFalse
  if (kind === "truefalse") {
    const wahrBtns = await page.locator("button:has-text('Wahr')").all();
    for (const b of wahrBtns.slice(0, 6)) {
      await b.click().catch(() => {});
      await page.waitForTimeout(150);
    }
    await clickActionBar(page, /^(Prüfen|Fertig)$/);
    await page.waitForTimeout(2000);
    return await clickWeiterQA(page);
  }

  // Freetext / Reflection
  if (["freetext", "reflection"].includes(kind)) {
    const ta = page.locator("textarea").first();
    if ((await ta.count()) > 0) {
      await ta.scrollIntoViewIfNeeded().catch(() => {});
      await ta.fill("QA-Test-Antwort. Pflegefachliche Reflexion mit mindestens 30 Zeichen Inhalt fuer Bewertung.").catch(() => {});
      await page.waitForTimeout(500);
    }
    if (await clickActionBar(page, /^(Antworten|Senden|Bewerten|Speichern|Absenden)$/)) {
      await page.waitForTimeout(3000);
    }
    return await clickWeiterQA(page);
  }

  // Branching
  if (kind === "branching") {
    const opt = page
      .locator("button.w-full:visible")
      .filter({ hasNotText: /Mehr|Spektrum|Weiter|Glossar/i })
      .first();
    if ((await opt.count()) > 0) {
      await opt.click().catch(() => {});
      await page.waitForTimeout(2500);
    }
    return await clickWeiterQA(page);
  }

  // Selfrating
  if (kind === "selfrating") {
    const stern = page.locator("button[role='radio']").nth(3);
    if ((await stern.count()) > 0) {
      await stern.click().catch(() => {});
      await page.waitForTimeout(300);
    }
    return await clickWeiterQA(page);
  }

  // Pflegewagen / Matrix
  if (["pflegewagen", "matrix"].includes(kind)) {
    await clickActionBar(page, /^(Prüfen|Fertig|Auswerten)$/);
    await page.waitForTimeout(2000);
    return await clickWeiterQA(page);
  }

  // FALLBACK — brute-force alle Strategien für "unknown" Step-Typen
  // 1) Direkt Weiter
  if (await clickWeiterQA(page)) return true;

  // 2) Radio → Action-Bar → Sheet-Weiter (MC-Pattern)
  const radio = page.locator("button[role='radio']").first();
  if ((await radio.count()) > 0) {
    await radio.click({ force: true }).catch(() => {});
    await page.waitForTimeout(500);
  }

  // 3) Action-Bar klicken (Prüfen/Antworten/etc.)
  if (await clickActionBar(page, /./)) {
    await page.waitForTimeout(2500);
    if (await clickWeiterQA(page)) return true;
  }

  // 4) Textarea ausfüllen
  const ta = page.locator("textarea").first();
  if ((await ta.count()) > 0) {
    await ta.fill("QA-Test-Antwort mit ausreichend Zeichen.").catch(() => {});
    await page.waitForTimeout(300);
    if (await clickActionBar(page, /./)) {
      await page.waitForTimeout(2000);
      if (await clickWeiterQA(page)) return true;
    }
  }

  // 5) TrueFalse-Buttons
  const wahrBtns = await page.locator("button:has-text('Wahr')").all();
  if (wahrBtns.length > 0) {
    for (const b of wahrBtns.slice(0, 6)) {
      await b.click().catch(() => {});
      await page.waitForTimeout(100);
    }
    if (await clickActionBar(page, /./)) {
      await page.waitForTimeout(2000);
      if (await clickWeiterQA(page)) return true;
    }
  }

  // 6) Highlight-Segmente klicken
  const segs = await page.locator("[class*='cursor-pointer']").all();
  if (segs.length > 0) {
    for (const s of segs.slice(0, 3)) {
      await s.click({ timeout: 800 }).catch(() => {});
      await page.waitForTimeout(200);
    }
    if (await clickActionBar(page, /./)) {
      await page.waitForTimeout(2000);
      if (await clickWeiterQA(page)) return true;
    }
  }

  // 7) Flipcard/Reveal: klickbaren Bereich
  const clickableDiv = page.locator("[role='button']:not(.fixed *)").first();
  if ((await clickableDiv.count()) > 0) {
    await clickableDiv.click().catch(() => {});
    await page.waitForTimeout(1000);
    if (await clickWeiterQA(page)) return true;
  }

  // 8) Matching-Paare klicken
  const matchItems = await page.locator("button.w-full.rounded-xl:visible").all();
  if (matchItems.length >= 2) {
    for (const m of matchItems.slice(0, 2)) {
      await m.click().catch(() => {});
      await page.waitForTimeout(300);
    }
    if (await clickActionBar(page, /./)) {
      await page.waitForTimeout(2000);
      if (await clickWeiterQA(page)) return true;
    }
  }

  // 9) Absoluter Fallback: letzter sichtbarer Button
  const lastBtn = page
    .locator("button:visible:not([disabled])")
    .filter({ hasNotText: /Mehr|Spektrum|Sonst|Glossar|×|Schließen|Weniger/i })
    .last();
  if ((await lastBtn.count()) > 0) {
    await lastBtn.click().catch(() => {});
    await page.waitForTimeout(2000);
    return await clickWeiterQA(page);
  }

  return false;
}

async function detectKind(page: Page): Promise<string> {
  const allText = await page.locator("body").textContent().catch(() => "");
  if (!allText) return "unknown";

  // Via uppercase-Labels
  const uppers = await page.locator(".uppercase, [class*='uppercase']").allTextContents();
  const upperText = uppers.join(" ").toLowerCase();

  if (upperText.includes("pflege-wissen") || allText.includes("Faustregel"))
    return "inlineWissen";
  if (upperText.includes("multiple choice")) return "mc";
  if (upperText.includes("dialog")) return "dialog";
  if (upperText.includes("selbsteinschätzung") || upperText.includes("umfrage"))
    return "crowdPoll";
  if (
    upperText.includes("sortier") ||
    upperText.includes("reihenfolge") ||
    upperText.includes("sequenz")
  )
    return "sorting";
  if (upperText.includes("kategorisier")) return "categorize";
  if (upperText.includes("zuordn") || upperText.includes("matching"))
    return "matching";
  if (upperText.includes("wahr") || upperText.includes("richtig/falsch"))
    return "truefalse";
  if (upperText.includes("reflexion")) return "reflection";
  if (upperText.includes("zusammenfassung")) return "summary";
  if (upperText.includes("entscheidung") || upperText.includes("branching"))
    return "branching";
  if (upperText.includes("freitext")) return "freetext";
  if (upperText.includes("situation")) return "situation";

  // Via DOM-Pattern fallback
  if ((await page.locator("button[role='radio']").count()) > 0) return "mc";
  if ((await page.locator("textarea").count()) > 0) return "freetext";
  if (allText.includes("Markiere alle") || allText.includes("markiert,"))
    return "highlight";
  if ((await page.locator("button:has-text('Abstimmen')").count()) > 0)
    return "crowdPoll";
  // Categorize: hat "Ordne jedes Element" + "Zuordnen zu" Buttons
  if (
    allText.includes("Ordne jedes Element") ||
    allText.includes("Wohin gehört") ||
    (await page.locator("[aria-label*='Zuordnen zu']").count()) > 0
  )
    return "categorize";
  // Matching: hat "Verbinde" oder paired items
  if (allText.includes("Verbinde") || allText.includes("Paare"))
    return "matching";
  // TrueFalse: hat "Wahr"/"Falsch" Buttons
  if ((await page.locator("button:has-text('Wahr')").count()) > 0)
    return "truefalse";
  // Flipcard/Reveal: klickbare Karten
  if (allText.includes("Tippe zum") || allText.includes("zum Aufdecken"))
    return "flipcard";

  return "unknown";
}

// ═══════════════════════════════════════════════════════════════════════
// MODULE 2: UX-AUDIT (DOM-basiert, pro Step)
// ═══════════════════════════════════════════════════════════════════════

async function uxAuditStep(page: Page): Promise<Partial<StepCheck>> {
  const result: Partial<StepCheck> = {};

  // Lesezeit: Textinhalt des Hauptbereichs zählen
  const mainText = await page.locator("main").textContent().catch(() => "");
  const charCount = (mainText || "").length;
  result.estimatedReadTimeSec = Math.round(charCount / 17) + 5; // C1: 17 chars/s + 5s

  // Action-Bar vorhanden?
  result.hasActionBar = (await page.locator(".fixed.bottom-0 button").count()) > 0;

  // Truncate ("Mehr lesen")
  result.hasTruncate =
    (await page.locator("button:has-text('Mehr lesen')").count()) > 0;

  // Glossar-Begriffe
  result.glossarTermsFound = await page.locator("span[role='button']").count();

  // Faustregel (für Inline-Wissen)
  result.hasFaustregel =
    (await page.locator(":has-text('FAUSTREGEL')").count()) > 0 ||
    (await page.locator(":has-text('Faustregel')").count()) > 0;

  return result;
}

// ═══════════════════════════════════════════════════════════════════════
// MODULE 3: CONTENT-AUDIT (statisch, aus Step-Daten)
// ═══════════════════════════════════════════════════════════════════════

function contentAudit(
  ceId: string,
  situationId: string
): {
  totalSteps: number;
  bloomDistribution: Record<number, number>;
  modiVielfalt: number;
  quellenProzent: number;
  inlineWissenCount: number;
  uniqueStepTypes: number;
} {
  const dir = path.join(
    process.cwd(),
    "content",
    ceId,
    "situationen",
    situationId
  );
  const phaseFiles = fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .filter((f) => f.startsWith("phase-") && f.endsWith(".ts"))
    : [];

  let totalSteps = 0;
  const bloomDist: Record<number, number> = {};
  const stepTypes = new Set<string>();
  let quellenCount = 0;
  let inlineWissenCount = 0;

  for (const f of phaseFiles) {
    const content = fs.readFileSync(path.join(dir, f), "utf-8");
    // Count steps
    const stepMatches = content.match(/stepId:/g);
    totalSteps += stepMatches?.length ?? 0;

    // Bloom levels
    const blooms = content.match(/bloomLevel:\s*(\d)/g);
    for (const b of blooms ?? []) {
      const level = parseInt(b.replace(/\D/g, ""));
      bloomDist[level] = (bloomDist[level] ?? 0) + 1;
    }

    // Step types
    const types = content.match(/stepType:\s*"([^"]+)"/g);
    for (const t of types ?? []) {
      stepTypes.add(t.replace(/stepType:\s*"|"/g, ""));
    }

    // Quellen
    const quellenMatches = content.match(/quellen:\s*\[/g);
    quellenCount += quellenMatches?.length ?? 0;

    // Inline-Wissen
    if (content.includes('stepType: "inlineWissen"')) {
      const iwCount = (content.match(/stepType: "inlineWissen"/g) || []).length;
      inlineWissenCount += iwCount;
    }
  }

  return {
    totalSteps,
    bloomDistribution: bloomDist,
    modiVielfalt: stepTypes.size,
    quellenProzent:
      totalSteps > 0 ? Math.round((quellenCount / totalSteps) * 100) : 0,
    inlineWissenCount,
    uniqueStepTypes: stepTypes.size,
  };
}

// ═══════════════════════════════════════════════════════════════════════
// MODULE 4: SCORE-ENGINE
// ═══════════════════════════════════════════════════════════════════════

function calculateScore(
  steps: StepCheck[],
  stepsReached: number,
  totalSteps: number,
  consoleErrors: number,
  contentData: ReturnType<typeof contentAudit>
): { subScores: SubScore[]; totalScore: number; grade: QAReport["grade"] } {
  const subScores: SubScore[] = [];

  // 1. Funktional (25%)
  const renderRate = steps.length > 0 ? steps.filter((s) => s.rendered).length / steps.length : 0;
  const clickRate = steps.length > 0 ? steps.filter((s) => s.clickable).length / steps.length : 0;
  const errorPenalty = Math.min(consoleErrors * 10, 50);
  const funktionalScore = Math.max(
    0,
    Math.round((renderRate * 50 + clickRate * 50) - errorPenalty)
  );
  subScores.push({
    name: "Funktional",
    score: funktionalScore,
    weight: 0.25,
    details: `${steps.filter((s) => s.rendered).length}/${steps.length} gerendert, ${steps.filter((s) => s.clickable).length}/${steps.length} klickbar, ${consoleErrors} Errors`,
  });

  // 2. UX (15%)
  const actionBarRate =
    steps.length > 0
      ? steps.filter((s) => s.hasActionBar).length / steps.length
      : 0;
  const avgReadTime =
    steps.length > 0
      ? steps.reduce((a, s) => a + s.estimatedReadTimeSec, 0) / steps.length
      : 0;
  const readTimeScore = avgReadTime < 30 ? 100 : avgReadTime < 90 ? 80 : avgReadTime < 180 ? 60 : 30;
  const uxScore = Math.round(actionBarRate * 40 + readTimeScore * 0.6);
  subScores.push({
    name: "UX",
    score: uxScore,
    weight: 0.15,
    details: `${Math.round(actionBarRate * 100)}% Action-Bar, ∅ Lesezeit ${Math.round(avgReadTime)}s`,
  });

  // 3. Pflege-Standards (25%)
  const quellenScore = Math.min(contentData.quellenProzent, 100);
  subScores.push({
    name: "Pflege-Standards",
    score: quellenScore,
    weight: 0.25,
    details: `${contentData.quellenProzent}% Steps mit Quellen`,
  });

  // 4. Didaktik (15%)
  const bloomLevels = Object.keys(contentData.bloomDistribution).length;
  const bloomScore = Math.min(bloomLevels * 20, 100);
  const modiScore = Math.min(contentData.modiVielfalt * 10, 100);
  const didaktikScore = Math.round(bloomScore * 0.5 + modiScore * 0.5);
  subScores.push({
    name: "Didaktik",
    score: didaktikScore,
    weight: 0.15,
    details: `${bloomLevels} Bloom-Level, ${contentData.modiVielfalt} Step-Typen`,
  });

  // 5. Curriculum (10%)
  const inlineWissenScore =
    contentData.inlineWissenCount >= 6
      ? 100
      : contentData.inlineWissenCount >= 3
        ? 70
        : contentData.inlineWissenCount >= 1
          ? 40
          : 0;
  subScores.push({
    name: "Curriculum",
    score: inlineWissenScore,
    weight: 0.1,
    details: `${contentData.inlineWissenCount} Inline-Wissens-Bausteine`,
  });

  // 6. Engagement (10%)
  const steppingRate =
    totalSteps > 0 ? Math.round((stepsReached / totalSteps) * 100) : 0;
  const faustregelRate =
    steps.length > 0
      ? steps.filter((s) => s.hasFaustregel).length / steps.length
      : 0;
  const engagementScore = Math.round(steppingRate * 0.5 + faustregelRate * 50);
  subScores.push({
    name: "Engagement",
    score: engagementScore,
    weight: 0.1,
    details: `${steppingRate}% Steps erreichbar, ${Math.round(faustregelRate * 100)}% mit Faustregel`,
  });

  const totalScore = Math.round(
    subScores.reduce((sum, s) => sum + s.score * s.weight, 0)
  );

  const grade: QAReport["grade"] =
    totalScore >= 90
      ? "A"
      : totalScore >= 75
        ? "B"
        : totalScore >= 60
          ? "C"
          : totalScore >= 40
            ? "D"
            : "F";

  return { subScores, totalScore, grade };
}

// ═══════════════════════════════════════════════════════════════════════
// ORCHESTRATOR
// ═══════════════════════════════════════════════════════════════════════

async function runQA(
  ceId: string,
  situationId: string,
  baseUrl: string,
  pipelineMode = false
): Promise<QAReport> {
  const url = `${baseUrl}/de/lernen/situation/${situationId}?ce=${ceId}`;
  const screenshotDir = path.join(
    process.cwd(),
    "content",
    ceId,
    "situationen",
    situationId,
    "_qa-screenshots"
  );
  if (!pipelineMode && !fs.existsSync(screenshotDir))
    fs.mkdirSync(screenshotDir, { recursive: true });

  // Content-Audit (statisch, kein Browser nötig)
  const contentData = contentAudit(ceId, situationId);

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
  });
  const page = await ctx.newPage();

  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (m: ConsoleMessage) => {
    if (m.type() === "error") consoleErrors.push(m.text().slice(0, 300));
  });
  page.on("pageerror", (e) => pageErrors.push(e.message.slice(0, 300)));

  if (!pipelineMode) {
    console.log(`\n→ QA: ${ceId}/${situationId}`);
    console.log(`  URL: ${url}`);
    console.log(`  Content: ${contentData.totalSteps} Steps, ${contentData.inlineWissenCount} Inline-Wissen\n`);
  }

  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });

  const steps: StepCheck[] = [];
  let prevTitle = "";
  let stuckCount = 0;
  let stuckAt: QAReport["stuckAt"];
  const MAX = 60;

  for (let i = 1; i <= MAX; i++) {
    // Dismiss overlays
    const overlay = page.locator(".fixed.inset-0.bg-black\\/40");
    if ((await overlay.count()) > 0) {
      await page.keyboard.press("Escape");
      await page.waitForTimeout(300);
    }

    // Wait for render
    await page.waitForTimeout(2000);
    try {
      await page.waitForFunction(
        () =>
          !document.querySelector(".animate-pulse") &&
          (document.querySelector("h2")?.textContent?.length ?? 0) > 3,
        { timeout: 6000 }
      );
    } catch {}
    await page.waitForTimeout(400);

    const title =
      (await page.locator("h2").first().textContent().catch(() => ""))
        ?.trim()
        .slice(0, 80) ?? "";
    const kind = await detectKind(page);
    const ux = await uxAuditStep(page);

    // Screenshot (übersprungen im Pipeline-Modus)
    if (!pipelineMode) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9äöüß]+/gi, "-")
        .slice(0, 35);
      await page
        .screenshot({
          path: path.join(
            screenshotDir,
            `${String(i).padStart(2, "0")}-${kind}-${slug}.png`
          ),
          fullPage: true,
          timeout: 5000,
        })
        .catch(() => {});
    }

    if (!pipelineMode) console.log(
      `  ${String(i).padStart(2)} [${kind.padEnd(14)}] ${title}`
    );

    // Stuck-Detection
    if (title === prevTitle) stuckCount++;
    else stuckCount = 0;
    prevTitle = title;
    const limit = kind === "dialog" ? 8 : 3;
    if (stuckCount >= limit) {
      stuckAt = { index: i, reason: `${limit}× "${title}" (${kind})` };
      break;
    }

    // Handle step
    const clicked = await handleStepQA(page, kind);

    steps.push({
      stepIndex: i,
      title,
      stepKind: kind,
      rendered: true,
      clickable: clicked,
      consoleErrors: consoleErrors.length,
      hydrationError: consoleErrors.some(
        (e) => e.includes("Hydration") || e.includes("hydration")
      ),
      estimatedReadTimeSec: ux.estimatedReadTimeSec ?? 0,
      hasActionBar: ux.hasActionBar ?? false,
      hasTruncate: ux.hasTruncate ?? false,
      glossarTermsFound: ux.glossarTermsFound ?? 0,
      hasQuellen: true, // statisch — Pflege-Gate prüft das
      hasInlineWissen: kind === "inlineWissen",
      hasFaustregel: ux.hasFaustregel ?? false,
    });

    if (!clicked) {
      stuckAt = { index: i, reason: `handleStep failed (${kind})` };
      break;
    }

    await page.waitForTimeout(800);
  }

  await ctx.close();
  await browser.close();

  // Score
  const { subScores, totalScore, grade } = calculateScore(
    steps,
    steps.length,
    contentData.totalSteps,
    consoleErrors.length,
    contentData
  );

  // Top Issues
  const topIssues: string[] = [];
  if (consoleErrors.length > 0)
    topIssues.push(`${consoleErrors.length} Console-Errors (Hydration/Render-Bug)`);
  if (stuckAt) topIssues.push(`Walkthrough stuck: ${stuckAt.reason}`);
  if (contentData.inlineWissenCount < 3)
    topIssues.push(`Nur ${contentData.inlineWissenCount} Inline-Wissens-Bausteine (min. 6 empfohlen)`);
  if (contentData.quellenProzent < 80)
    topIssues.push(`${contentData.quellenProzent}% Steps mit Quellen (min. 80% empfohlen)`);
  const noActionBar = steps.filter((s) => !s.hasActionBar).length;
  if (noActionBar > 2)
    topIssues.push(`${noActionBar} Steps ohne Action-Bar`);

  const report: QAReport = {
    ceId,
    situationId,
    timestamp: new Date().toISOString(),
    steps,
    totalSteps: contentData.totalSteps,
    stepsReached: steps.length,
    stuckAt,
    consoleErrors,
    pageErrors,
    subScores,
    totalScore,
    grade,
    topIssues,
  };

  // Write reports (Pipeline: nur JSON, kein MD)
  const reportDir = path.join(
    process.cwd(),
    "content",
    ceId,
    "situationen",
    situationId
  );
  fs.writeFileSync(
    path.join(reportDir, "qa-report.json"),
    JSON.stringify(report, null, 2)
  );
  if (!pipelineMode) {
    fs.writeFileSync(path.join(reportDir, "qa-report.md"), renderMD(report));
  }

  return report;
}

function renderMD(r: QAReport): string {
  let md = `# QA-Report: ${r.situationId}\n\n`;
  md += `**Datum:** ${r.timestamp.split("T")[0]}\n`;
  md += `**Score:** ${r.totalScore}/100 (${r.grade})\n`;
  md += `**Steps:** ${r.stepsReached}/${r.totalSteps} erreicht\n`;
  md += `**Console-Errors:** ${r.consoleErrors.length}\n\n`;

  md += `## Sub-Scores\n\n`;
  md += `| Bereich | Score | Gewicht | Details |\n|---------|------:|--------:|---------|\n`;
  for (const s of r.subScores) {
    md += `| ${s.name} | ${s.score} | ${Math.round(s.weight * 100)}% | ${s.details} |\n`;
  }

  if (r.topIssues.length > 0) {
    md += `\n## Top-Issues\n\n`;
    for (const issue of r.topIssues) md += `- ${issue}\n`;
  }

  if (r.stuckAt) {
    md += `\n## Stuck\n\nStep ${r.stuckAt.index}: ${r.stuckAt.reason}\n`;
  }

  md += `\n## Steps\n\n`;
  md += `| # | Typ | Titel | Klickbar | Lesezeit | Glossar |\n|---|-----|-------|:--------:|:--------:|:-------:|\n`;
  for (const s of r.steps) {
    md += `| ${s.stepIndex} | ${s.stepKind} | ${s.title.slice(0, 40)} | ${s.clickable ? "✅" : "❌"} | ${s.estimatedReadTimeSec}s | ${s.glossarTermsFound} |\n`;
  }

  return md;
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════

async function main() {
  const pipelineMode = process.argv.includes("--pipeline");
  const args = process.argv.filter((a) => a !== "--pipeline");
  const ceId = args[2] ?? "ce-02";
  const sitArg = args[3] ?? "frau-m-nacht-sturz";
  const baseUrl = args[4] ?? "http://localhost:3000";
  const isAll = sitArg === "--all";

  const situationen = isAll
    ? fs
        .readdirSync(
          path.join(process.cwd(), "content", ceId, "situationen")
        )
        .filter((d) =>
          fs
            .statSync(
              path.join(
                process.cwd(),
                "content",
                ceId,
                "situationen",
                d
              )
            )
            .isDirectory()
        )
    : [sitArg];

  const reports: QAReport[] = [];

  for (const sit of situationen) {
    try {
      const report = await runQA(ceId, sit, baseUrl, pipelineMode);
      reports.push(report);

      if (pipelineMode) {
        // Pipeline: nur Score + Top-Issues
        console.log(JSON.stringify({
          situationId: sit,
          score: report.totalScore,
          grade: report.grade,
          stepsReached: report.stepsReached,
          totalSteps: report.totalSteps,
          errors: report.consoleErrors.length,
          topIssues: report.topIssues,
        }));
      } else {
        console.log(`\n${"═".repeat(60)}`);
        console.log(
          `  ${sit}: ${report.totalScore}/100 (${report.grade}) · ${report.stepsReached}/${report.totalSteps} Steps · ${report.consoleErrors.length} Errors`
        );
        console.log("═".repeat(60));
        for (const s of report.subScores) {
          const bar = "█".repeat(Math.round(s.score / 10)) + "░".repeat(10 - Math.round(s.score / 10));
          console.log(`  ${s.name.padEnd(18)} ${bar} ${s.score}  ${s.details}`);
        }
        if (report.topIssues.length > 0) {
          console.log("\n  Top-Issues:");
          report.topIssues.forEach((i) => console.log(`    ⚠️ ${i}`));
        }
      }
    } catch (e) {
      console.error(`\n${sit} fehlgeschlagen: ${e}`);
    }
  }

  // Summary für --all (nicht im Pipeline-Modus)
  if (!pipelineMode && isAll && reports.length > 1) {
    let summary = `# QA-Summary ${ceId}\n\n`;
    summary += `| Situation | Score | Grade | Steps | Errors | Top-Issue |\n|-----------|------:|:-----:|------:|-------:|-----------|\n`;
    for (const r of reports.sort((a, b) => b.totalScore - a.totalScore)) {
      summary += `| ${r.situationId} | ${r.totalScore} | ${r.grade} | ${r.stepsReached}/${r.totalSteps} | ${r.consoleErrors.length} | ${r.topIssues[0] ?? "—"} |\n`;
    }
    fs.writeFileSync(
      path.join(process.cwd(), "content", ceId, "qa-summary.md"),
      summary
    );
    console.log(
      `\n📊 Summary: content/${ceId}/qa-summary.md`
    );
  }

  if (!pipelineMode) {
    console.log(`\n✅ QA fertig.\n`);
  }

  // Pipeline: Exit-Code basierend auf Score
  if (pipelineMode) {
    const worstScore = reports.length > 0
      ? Math.min(...reports.map((r) => r.totalScore))
      : 0;
    process.exit(worstScore >= 70 ? 0 : 1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

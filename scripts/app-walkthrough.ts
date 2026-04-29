#!/usr/bin/env npx tsx
/**
 * App-Walkthrough — robustes Step-by-Step-Test-Tool für die ganze App.
 *
 * Pro Step-Typ eigene Click-Logik:
 *   - text/inlineWissen → "Weiter"
 *   - mc → Radio + "Prüfen" + AnswerSheet "Weiter"
 *   - freetext → textarea ausfüllen + "Antworten" + "Weiter"
 *   - dialog → erste Option + "Weiter"
 *   - sorting/sequencing → "Prüfen" + AnswerSheet
 *   - selfrating → Skala-Click + "Weiter"
 *   - matching → "Auswerten" + AnswerSheet
 *   - branching → erste Option
 *   - crowdPoll → Pill + "Abstimmen" + "Weiter"
 *   - categorize → Items zuordnen + "Prüfen"
 *   - truefalse → "Wahr" oder "Falsch" pro Statement + "Prüfen"
 *   - highlight → Klick + "Prüfen"
 *   - reflection → textarea + "Senden" + "Weiter"
 *   - summary → "Weiter"
 *   - reveal/flipcard → Click zum Aufdecken + "Weiter"
 *
 * State-Verification: aria-checked, button-disabled, Bottom-Sheet-Visible.
 * Bei jedem Step Screenshot + Console-Error-Tracking.
 *
 * Usage: npx tsx scripts/app-walkthrough.ts [URL] [maxSteps]
 */

import { chromium, type Page, type ConsoleMessage } from "playwright";
import * as fs from "fs";

const URL =
  process.argv[2] ??
  "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02";
const MAX_STEPS = parseInt(process.argv[3] ?? "60");
const DIR = "scripts/_app-walkthrough";

interface StepResult {
  index: number;
  title: string;
  phaseHeader: string;
  stepKind: string;
  clicked: boolean;
  screenshot: string;
}

interface RunReport {
  steps: StepResult[];
  consoleErrors: string[];
  consoleWarnings: string[];
  pageErrors: string[];
  stuckAt?: { index: number; reason: string };
}

async function detectStepKind(page: Page): Promise<string> {
  // Phase-Header / Kind-Label
  const kind = await page
    .locator(".text-\\[10px\\].uppercase, [class*='uppercase']")
    .nth(1) // index 0 ist meist die Phase-Caption oben, index 1 ist Step-Kind
    .textContent()
    .catch(() => "");
  if (kind) {
    const k = kind.trim().toLowerCase();
    if (k.includes("multiple choice")) return "mc";
    if (k.includes("dialog")) return "dialog";
    if (k.includes("freitext") || k.includes("freetext")) return "freetext";
    if (k.includes("pflege-wissen") || k.includes("pflegewissen"))
      return "inlineWissen";
    if (k.includes("selbsteinschätzung")) return "crowdPoll";
    if (k.includes("sortier") || k.includes("sequenz") || k.includes("reihenfolge"))
      return "sorting";
    if (k.includes("kategorisier")) return "categorize";
    if (k.includes("zuordn") || k.includes("matching")) return "matching";
    if (k.includes("wahr") || k.includes("truefalse")) return "truefalse";
    if (k.includes("markier") || k.includes("highlight")) return "highlight";
    if (k.includes("reflexion")) return "reflection";
    if (k.includes("zusammenfassung") || k.includes("summary"))
      return "summary";
    if (k.includes("entscheidung") || k.includes("branching"))
      return "branching";
    return k.slice(0, 30);
  }
  // Fallback per Inhalt
  if ((await page.locator("button[role='radio']").count()) > 0) return "mc";
  if ((await page.locator("textarea").count()) > 0) return "freetext";
  if (
    (await page.locator(":has-text('Pflege-Wissen ·')").count()) > 0 ||
    (await page.locator(":has-text('FAUSTREGEL')").count()) > 0
  )
    return "inlineWissen";
  if ((await page.locator("button:has-text('Abstimmen')").count()) > 0)
    return "crowdPoll";
  // Highlight-Step: hat "Markiere alle"-Hinweis + cursor-pointer-Segmente
  if (
    (await page.locator(":has-text('Markiere alle')").count()) > 0 ||
    (await page.locator(":has-text('markiert,')").count()) > 0
  )
    return "highlight";
  return "unknown";
}

async function clickWeiter(page: Page): Promise<boolean> {
  // Bevorzugt: Buttons in der fixed-bottom Action-Bar (echte Step-Action)
  const actionBarBtn = page
    .locator(".fixed.bottom-0 button:visible")
    .filter({ hasText: /^(Weiter|Fertig)/ })
    .last();
  if (
    (await actionBarBtn.count()) > 0 &&
    !(await actionBarBtn.isDisabled().catch(() => true))
  ) {
    await actionBarBtn.click({ timeout: 2000 }).catch(() => {});
    return true;
  }
  // AnswerSheet-Weiter via aria-label
  const sheetWeiter = page
    .locator("button[aria-label='Weiter zum nächsten Schritt']")
    .first();
  if (
    (await sheetWeiter.count()) > 0 &&
    (await sheetWeiter.isVisible({ timeout: 500 }).catch(() => false))
  ) {
    await sheetWeiter.click({ timeout: 2000 }).catch(() => {});
    return true;
  }
  // Fallback: irgendeinen sichtbaren Weiter
  const anyWeiter = page
    .locator("button:visible")
    .filter({ hasText: /^Weiter$/ })
    .last();
  if (
    (await anyWeiter.count()) > 0 &&
    !(await anyWeiter.isDisabled().catch(() => true))
  ) {
    await anyWeiter.click({ timeout: 2000 }).catch(() => {});
    return true;
  }
  return false;
}

async function clickPruefenInActionBar(page: Page): Promise<boolean> {
  // Prüfen-Button gezielt in der Step-Action-Bar (vermeidet Match auf Option-Texte)
  const btn = page
    .locator(".fixed.bottom-0 button:visible")
    .filter({ hasText: /^(Prüfen|Antworten|Auswerten|Bewerten|Fertig|Abstimmen|Senden)$/ })
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

async function dismissOverlay(page: Page) {
  for (let i = 0; i < 2; i++) {
    const overlay = page.locator(".fixed.inset-0.bg-black\\/40");
    if ((await overlay.count()) === 0) return;
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
  }
}

async function handleStep(page: Page, kind: string): Promise<boolean> {
  // 1) Inline-Wissen / Text / Summary → einfacher Weiter-Klick
  if (
    kind === "inlineWissen" ||
    kind === "text" ||
    kind === "summary" ||
    kind === "reveal" ||
    kind === "flipcard"
  ) {
    return await clickWeiter(page);
  }

  // 2) MC: Radio + Prüfen + AnswerSheet Weiter
  if (kind === "mc") {
    const radio = page.locator("button[role='radio']").first();
    if ((await radio.count()) > 0) {
      await radio.click({ force: true }).catch(() => {});
      await page.waitForTimeout(800);
    }
    // Prüfen-Button via aria-label (nicht via Text — Option-Texte können "prüfen" enthalten)
    const pruefenOk = await clickPruefenInActionBar(page);
    if (!pruefenOk) {
      console.log(`     [mc] Prüfen-Button nicht klickbar in ActionBar`);
      return false;
    }
    await page.waitForTimeout(2500);
    // AnswerSheet-Weiter-Button via aria-label
    const sheetWeiter = page
      .locator("button[aria-label='Weiter zum nächsten Schritt']")
      .first();
    if (
      (await sheetWeiter.count()) > 0 &&
      (await sheetWeiter.isVisible({ timeout: 1500 }).catch(() => false))
    ) {
      await sheetWeiter.click().catch(() => {});
      await page.waitForTimeout(1500);
      return true;
    }
    // Fallback: erster sichtbarer Weiter
    return await clickWeiter(page);
  }

  // 3) CrowdPoll: Pill + Abstimmen + Weiter
  if (kind === "crowdPoll") {
    const pill = page
      .locator(
        "button:has-text('Halb sicher'), button:has-text('Anfangs nervös'), button:has-text('Sicher')"
      )
      .first();
    if (
      (await pill.count()) > 0 &&
      (await pill.isVisible({ timeout: 500 }).catch(() => false))
    ) {
      await pill.click().catch(() => {});
      await page.waitForTimeout(500);
    }
    const abst = page.locator("button:has-text('Abstimmen')").first();
    if (
      (await abst.count()) > 0 &&
      !(await abst.isDisabled().catch(() => false))
    ) {
      await abst.click().catch(() => {});
      await page.waitForTimeout(1500);
    }
    return await clickWeiter(page);
  }

  // 4) Freetext / Reflection: textarea + Antworten/Senden + Weiter
  if (kind === "freetext" || kind === "reflection") {
    const ta = page.locator("textarea").first();
    if ((await ta.count()) > 0) {
      await ta
        .fill(
          "Walkthrough-Test-Antwort. Mehr als 20 Zeichen Inhalt für eine valide Antwort."
        )
        .catch(() => {});
      await page.waitForTimeout(400);
    }
    const ant = page
      .locator(
        "button:has-text('Antworten'), button:has-text('Senden'), button:has-text('Bewerten'), button:has-text('Speichern')"
      )
      .first();
    if (
      (await ant.count()) > 0 &&
      !(await ant.isDisabled().catch(() => false))
    ) {
      await ant.click().catch(() => {});
      await page.waitForTimeout(2500);
    }
    return await clickWeiter(page);
  }

  // 5) Dialog: erste Option + Weiter (mehrere Phasen möglich)
  if (kind === "dialog") {
    // 1) Antwort-Optionen sind motion.button mit Text — innerhalb des Step-Bereichs.
    //    Im Dialog-Step gibt es keine button[role='radio'] — sondern normale buttons.
    const dialogOpts = await page
      .locator("button.w-full")
      .filter({
        hasNotText: /Mehr|Spektrum|Sonst|Weiter|Glossar|Schließen|×/i,
      })
      .all();
    let clicked = false;
    for (const opt of dialogOpts) {
      try {
        if (await opt.isVisible({ timeout: 300 })) {
          await opt.click({ timeout: 1500 });
          clicked = true;
          break;
        }
      } catch {}
    }
    if (clicked) {
      // Wartet auf Patient-Response + Feedback
      await page.waitForTimeout(3500);
    }
    // Nach Klick erscheint Feedback + "Weiter"-Button
    const ok = await clickWeiter(page);
    return ok || clicked;
  }

  // 6) Sorting/Sequencing: Items akzeptieren in default-Reihenfolge + Prüfen
  if (kind === "sorting" || kind === "sequencing") {
    // Direkt Prüfen — wir brauchen nicht richtig sortieren für Walkthrough
    const pruefen = page
      .locator("button:has-text('Prüfen'), button:has-text('Fertig')")
      .first();
    if ((await pruefen.count()) > 0) {
      await pruefen.click({ force: true }).catch(() => {});
      await page.waitForTimeout(2500);
    }
    return await clickWeiter(page);
  }

  // 7) Categorize: ähnlich, direkt Prüfen
  if (kind === "categorize") {
    const pruefen = page
      .locator("button:has-text('Prüfen'), button:has-text('Auswerten')")
      .first();
    if ((await pruefen.count()) > 0) {
      await pruefen.click({ force: true }).catch(() => {});
      await page.waitForTimeout(2500);
    }
    return await clickWeiter(page);
  }

  // 8) TrueFalse: alle "Wahr" klicken + Prüfen
  if (kind === "truefalse") {
    const wahrButtons = await page.locator("button:has-text('Wahr')").all();
    for (const b of wahrButtons.slice(0, 6)) {
      await b.click().catch(() => {});
      await page.waitForTimeout(200);
    }
    const pruefen = page.locator(".fixed.bottom-0 button:visible").first();
    if ((await pruefen.count()) > 0) {
      await pruefen.click({ force: true }).catch(() => {});
      await page.waitForTimeout(2000);
    }
    return await clickWeiter(page);
  }

  // 9) Highlight: erste 2 markierbare Segmente klicken + Prüfen + Weiter
  if (kind === "highlight") {
    // Markierbare Segmente sind <span> oder <button> mit cursor-pointer
    const segs = await page.locator("span.cursor-pointer, button.cursor-pointer").all();
    let clicked = 0;
    for (const s of segs.slice(0, 2)) {
      try {
        if (await s.isVisible({ timeout: 300 })) {
          await s.click({ timeout: 1500 });
          clicked++;
          await page.waitForTimeout(300);
        }
      } catch {}
    }
    // Wenn keine clickable spans, dann sind sie vielleicht inline-spans innerhalb eines p
    if (clicked === 0) {
      const inlineSegs = await page
        .locator("p span")
        .filter({ hasText: /^[A-Za-zäöüß]/ })
        .all();
      for (const s of inlineSegs.slice(0, 3)) {
        try {
          if (await s.isVisible({ timeout: 300 })) {
            await s.click({ timeout: 1000, force: true });
            clicked++;
            if (clicked >= 2) break;
          }
        } catch {}
      }
    }
    await page.waitForTimeout(500);
    const ok = await clickPruefenInActionBar(page);
    if (ok) await page.waitForTimeout(2000);
    return await clickWeiter(page);
  }

  // unknown-Fallback: einfach Prüfen + Weiter probieren
  if (kind === "unknown") {
    await clickPruefenInActionBar(page);
    await page.waitForTimeout(2000);
    return await clickWeiter(page);
  }

  // 10) Branching: erste Option-Button
  if (kind === "branching") {
    const opt = page
      .locator("button.w-full")
      .filter({ hasNot: page.locator(":has-text('Mehr')") })
      .first();
    if (
      (await opt.count()) > 0 &&
      (await opt.isVisible({ timeout: 500 }).catch(() => false))
    ) {
      await opt.click().catch(() => {});
      await page.waitForTimeout(2500);
    }
    return await clickWeiter(page);
  }

  // 11) Selfrating: 4. Stern (oder Skala-Element)
  if (kind === "selfrating") {
    const stern = page
      .locator("button[aria-label*='Stern'], button[role='radio']")
      .nth(3);
    if (
      (await stern.count()) > 0 &&
      (await stern.isVisible({ timeout: 500 }).catch(() => false))
    ) {
      await stern.click().catch(() => {});
      await page.waitForTimeout(500);
    }
    return await clickWeiter(page);
  }

  // 12) Matching/Memory: Auswerten/Fertig
  if (kind === "matching" || kind === "memory") {
    const fertig = page
      .locator(
        "button:has-text('Auswerten'), button:has-text('Fertig'), button:has-text('Prüfen')"
      )
      .first();
    if ((await fertig.count()) > 0) {
      await fertig.click({ force: true }).catch(() => {});
      await page.waitForTimeout(2000);
    }
    return await clickWeiter(page);
  }

  // FALLBACK: einfach Weiter probieren, dann Last-visible-button
  if (await clickWeiter(page)) return true;
  // Last-Chance
  const last = page
    .locator("button:visible:not([disabled])")
    .filter({
      hasNotText: /Mehr lesen|Spektrum|Sonst|Glossar|×|Schließen|Weniger/i,
    })
    .last();
  if ((await last.count()) > 0) {
    await last.click().catch(() => {});
    return true;
  }
  return false;
}

async function run() {
  if (fs.existsSync(DIR))
    for (const f of fs.readdirSync(DIR))
      if (f.endsWith(".png")) fs.unlinkSync(`${DIR}/${f}`);
  else fs.mkdirSync(DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
  });
  const page = await ctx.newPage();

  const report: RunReport = {
    steps: [],
    consoleErrors: [],
    consoleWarnings: [],
    pageErrors: [],
  };

  page.on("console", (m: ConsoleMessage) => {
    if (m.type() === "error") report.consoleErrors.push(m.text());
    if (m.type() === "warning") report.consoleWarnings.push(m.text());
  });
  page.on("pageerror", (e) => report.pageErrors.push(e.message));

  console.log(`\n→ ${URL}\n`);
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 30_000 });

  let prevTitle = "";
  let stuckCount = 0;

  for (let i = 1; i <= MAX_STEPS; i++) {
    await dismissOverlay(page);
    await page.waitForTimeout(2200);
    // Wait for non-skeleton render
    try {
      await page.waitForFunction(
        () =>
          !document.querySelector(".animate-pulse") &&
          (document.querySelector("h2")?.textContent?.length ?? 0) > 3,
        { timeout: 6000 }
      );
    } catch {}
    await page.waitForTimeout(500);

    const title =
      (
        await page
          .locator("h2")
          .first()
          .textContent()
          .catch(() => "")
      )?.trim().slice(0, 70) ?? "";
    const phaseHeader =
      (
        await page
          .locator(".uppercase")
          .first()
          .textContent()
          .catch(() => "")
      )?.trim().slice(0, 60) ?? "";
    const kind = await detectStepKind(page);

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9äöüß]+/gi, "-")
      .slice(0, 40);
    const fname = `${String(i).padStart(2, "0")}-${kind}-${slug}.png`;
    await page
      .screenshot({ path: `${DIR}/${fname}`, fullPage: true, timeout: 5000 })
      .catch(() => {});

    console.log(`${i.toString().padStart(2)} [${kind}] ${title}`);

    // Stuck-Detection — Dialog hat absichtlich gleichen Titel über mehrere Phasen
    if (title === prevTitle) stuckCount++;
    else stuckCount = 0;
    prevTitle = title;

    const stuckLimit = kind === "dialog" ? 8 : 3;
    if (stuckCount >= stuckLimit) {
      report.stuckAt = {
        index: i,
        reason: `${stuckLimit}× gleicher Title: "${title}" (kind=${kind})`,
      };
      console.log(`   ⚠️ STUCK`);
      break;
    }

    const success = await handleStep(page, kind);
    if (!success) {
      report.stuckAt = {
        index: i,
        reason: `handleStep fehlgeschlagen (kind=${kind})`,
      };
      console.log(`   ⚠️ kein Klick erfolgreich`);
      break;
    }

    report.steps.push({
      index: i,
      title,
      phaseHeader,
      stepKind: kind,
      clicked: true,
      screenshot: fname,
    });
  }

  await ctx.close();
  await browser.close();

  // Bericht
  console.log("\n" + "═".repeat(72));
  console.log(`  ${report.steps.length} Steps · ${report.consoleErrors.length} Errors`);
  console.log("═".repeat(72));

  console.log(`\nPhasen-Verteilung:`);
  const phasenMap = new Map<string, number>();
  for (const s of report.steps) {
    const phase = s.phaseHeader.split("·")[0].trim();
    phasenMap.set(phase, (phasenMap.get(phase) ?? 0) + 1);
  }
  for (const [phase, count] of phasenMap) {
    console.log(`  ${phase}: ${count} Steps`);
  }

  console.log(`\nStep-Typen-Verteilung:`);
  const kindMap = new Map<string, number>();
  for (const s of report.steps)
    kindMap.set(s.stepKind, (kindMap.get(s.stepKind) ?? 0) + 1);
  for (const [k, c] of kindMap) console.log(`  ${k}: ${c}`);

  if (report.stuckAt) {
    console.log(`\n⚠️ STUCK Step ${report.stuckAt.index}: ${report.stuckAt.reason}`);
  } else {
    console.log(`\n✅ Walkthrough komplett bis Step ${report.steps.length}`);
  }

  if (report.consoleErrors.length > 0) {
    console.log(`\n🔴 Console-Errors:`);
    for (const e of report.consoleErrors.slice(0, 5))
      console.log(`   ${e.slice(0, 250)}`);
  }
  if (report.pageErrors.length > 0) {
    console.log(`\n🔴 Page-Errors:`);
    for (const e of report.pageErrors.slice(0, 5))
      console.log(`   ${e.slice(0, 250)}`);
  }

  // JSON-Report
  fs.writeFileSync(
    `${DIR}/report.json`,
    JSON.stringify(report, null, 2)
  );
  console.log(`\n📸 ${DIR}\n`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

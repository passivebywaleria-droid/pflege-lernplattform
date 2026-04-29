#!/usr/bin/env npx tsx
import { chromium } from "playwright";
import * as fs from "fs";

const DIR = "scripts/_tour";

async function run() {
  if (fs.existsSync(DIR)) {
    for (const f of fs.readdirSync(DIR))
      if (f.endsWith(".png")) fs.unlinkSync(`${DIR}/${f}`);
  } else {
    fs.mkdirSync(DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
  });
  const page = await ctx.newPage();
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto(
    "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02",
    { waitUntil: "domcontentloaded" }
  );

  for (let i = 1; i <= 50; i++) {
    await page.waitForTimeout(2500);

    const t = await page.locator("h2").first().textContent().catch(() => "?");
    const title = (t || "").trim().slice(0, 60);
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9äöüß]+/gi, "-")
      .slice(0, 40);

    await page.screenshot({
      path: `${DIR}/${String(i).padStart(2, "0")}-${slug}.png`,
      fullPage: true,
    });
    console.log(`  ${String(i).padStart(2)} → ${title}`);

    // Versuche, weiter zu kommen — exakt EIN Klick
    let clicked = false;

    const weiter = page
      .locator("button:has-text('Weiter'):visible:not([disabled])")
      .first();
    if ((await weiter.count()) > 0) {
      await weiter.click().catch(() => {});
      clicked = true;
    }

    if (!clicked) {
      const abst = page.locator("button:has-text('Abstimmen')").first();
      if ((await abst.count()) > 0) {
        const pill = page
          .locator("button:has-text('Halb sicher')")
          .first();
        if ((await pill.count()) > 0) await pill.click().catch(() => {});
        await page.waitForTimeout(400);
        await abst.click().catch(() => {});
        clicked = true;
      }
    }

    if (!clicked) {
      // MC: Radio + Antworten/Prüfen
      const radio = page.locator("button[role='radio']").first();
      if ((await radio.count()) > 0) {
        await radio.click({ force: true }).catch(() => {});
        await page.waitForTimeout(800);
        // Versuche Prüfen — auch falls disabled scheint
        const ant = page
          .locator(
            "button:has-text('Antworten'), button:has-text('Prüfen'), button:has-text('Bestätigen')"
          )
          .first();
        if ((await ant.count()) > 0) {
          await ant.click({ force: true, timeout: 3000 }).catch(() => {});
          clicked = true;
          // Nach Prüfen oft "Weiter" — separat klicken
          await page.waitForTimeout(1500);
          const w = page.locator("button:has-text('Weiter')").first();
          if (await w.isVisible({ timeout: 1000 }).catch(() => false)) {
            await w.click().catch(() => {});
          }
        }
      }
    }

    if (!clicked) {
      // Sorting/Sequencing: skip durch direkt Prüfen ohne sortieren
      const pruefen = page.locator("button:has-text('Prüfen')").first();
      if ((await pruefen.count()) > 0) {
        await pruefen.click({ force: true }).catch(() => {});
        clicked = true;
        await page.waitForTimeout(1500);
        const w = page.locator("button:has-text('Weiter')").first();
        if (await w.isVisible({ timeout: 1000 }).catch(() => false)) {
          await w.click().catch(() => {});
        }
      }
    }

    if (!clicked) {
      // Freetext: tippe Dummy + Antworten
      const textarea = page.locator("textarea").first();
      if ((await textarea.count()) > 0) {
        await textarea.fill("Test-Antwort für Walkthrough — mindestens 20 Zeichen.").catch(() => {});
        await page.waitForTimeout(400);
        const ant = page.locator("button:has-text('Antworten'), button:has-text('Bewerten')").first();
        if ((await ant.count()) > 0) {
          await ant.click({ force: true }).catch(() => {});
          clicked = true;
          await page.waitForTimeout(2000);
          const w = page.locator("button:has-text('Weiter')").first();
          if (await w.isVisible({ timeout: 1000 }).catch(() => false)) {
            await w.click().catch(() => {});
          }
        }
      }
    }

    if (!clicked) {
      // Categorize/Matching: direkt Prüfen
      const fertigBtn = page
        .locator(
          "button:has-text('Fertig'), button:has-text('Auswerten'), button:has-text('Check')"
        )
        .first();
      if ((await fertigBtn.count()) > 0) {
        await fertigBtn.click({ force: true }).catch(() => {});
        clicked = true;
      }
    }

    if (!clicked) {
      // Branching/Dialog: erste Option-Button
      const optBtn = page
        .locator(
          "button.w-full.rounded-xl, button.w-full.rounded-2xl, button.flex-1"
        )
        .first();
      if (
        (await optBtn.count()) > 0 &&
        (await optBtn.isVisible({ timeout: 300 }).catch(() => false))
      ) {
        await optBtn.click().catch(() => {});
        clicked = true;
      }
    }

    if (!clicked) {
      // Sorting/Drag: skip mit "Überspringen" / "Skip"
      const skip = page
        .locator("button:has-text('Überspringen'), button:has-text('Skip')")
        .first();
      if ((await skip.count()) > 0) {
        await skip.click().catch(() => {});
        clicked = true;
      }
    }

    if (!clicked) {
      // Lass mich nochmal versuchen mit längerer Wartezeit + Generic Click
      await page.waitForTimeout(1000);
      const lastChance = page
        .locator("button:visible:not([disabled])")
        .filter({
          hasNotText: /Mehr|Spektrum|Sonst|Glossar|×|Schließen/i,
        });
      const cnt = await lastChance.count();
      if (cnt > 0) {
        // Pick last (wahrscheinlich Action-Bar-Button)
        await lastChance.last().click().catch(() => {});
        clicked = true;
      }
    }

    if (!clicked) {
      console.log(`   ⚠️  Kein Klick möglich — Stop bei "${title}"`);
      await page.screenshot({
        path: `${DIR}/${String(i + 1).padStart(2, "0")}-STUCK.png`,
        fullPage: true,
      });
      break;
    }
  }

  console.log(`\n📝 Errors: ${errors.length}`);
  errors.forEach((e) => console.log(`   ${e.slice(0, 200)}`));
  console.log(`📸 ${DIR}\n`);

  await ctx.close();
  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

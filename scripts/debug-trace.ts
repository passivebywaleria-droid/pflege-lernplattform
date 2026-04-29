#!/usr/bin/env npx tsx
import { chromium } from "playwright";
import * as fs from "fs";

async function run() {
  if (!fs.existsSync("scripts/_debug")) fs.mkdirSync("scripts/_debug", { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
  const page = await ctx.newPage();

  await page.goto(
    "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02",
    { waitUntil: "domcontentloaded" }
  );

  for (let i = 0; i < 5; i++) {
    await page.waitForTimeout(2500);
    const t = await page.locator("h2").first().textContent().catch(() => "?");
    const counter = await page.locator(":has-text('/8')").first().textContent().catch(() => "?");
    const buttons = await page.locator("button:visible").allTextContents();
    console.log(`\n[Iter ${i}] Counter="${counter?.slice(0, 30)}" Title="${t?.trim().slice(0, 60)}"`);
    console.log(`Buttons: ${buttons.filter(b => b.length > 0 && b.length < 50).slice(0, 8).join(" | ")}`);
    await page.screenshot({ path: `scripts/_debug/iter-${i}.png`, fullPage: true });

    // Klick auf ersten Weiter sichtbar
    const weiter = page.locator("button:has-text('Weiter'):visible").first();
    if (await weiter.count() > 0) {
      await weiter.click();
      console.log("→ Klick Weiter");
    } else {
      const abst = page.locator("button:has-text('Abstimmen'):visible").first();
      if (await abst.count() > 0) {
        // Vorher Pill auswählen
        const pill = page.locator("button:has-text('Halb sicher')").first();
        if (await pill.count() > 0) await pill.click();
        await page.waitForTimeout(300);
        await abst.click();
        console.log("→ Klick Abstimmen (mit Pill)");
      } else {
        console.log("→ Kein Weiter/Abstimmen sichtbar");
        // Pick MC option
        const radio = page.locator("button[role='radio']").first();
        if (await radio.count() > 0) {
          await radio.click();
          await page.waitForTimeout(300);
          const ant = page.locator("button:has-text('Antworten')").first();
          if (await ant.count() > 0) {
            await ant.click();
            console.log("→ MC: Radio+Antworten");
          }
        }
      }
    }
  }

  await ctx.close();
  await browser.close();
}

run().catch((e) => { console.error(e); process.exit(1); });

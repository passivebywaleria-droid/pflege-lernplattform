#!/usr/bin/env npx tsx
import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
  const page = await ctx.newPage();

  await page.goto(
    "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02"
  );

  // Quickly to MC
  for (let i = 0; i < 5; i++) {
    await page.waitForTimeout(2500);
    const t = await page.locator("h2").first().textContent();
    console.log(`At: ${t?.trim().slice(0, 50)}`);
    if (t?.includes("Erste Priorität")) break;

    const w = page.locator("button:has-text('Weiter'):visible").first();
    if ((await w.count()) > 0) {
      await w.click();
      continue;
    }
    const pill = page.locator("button:has-text('Halb sicher')").first();
    if ((await pill.count()) > 0) {
      await pill.click();
      await page.waitForTimeout(300);
      const ab = page.locator("button:has-text('Abstimmen')").first();
      if ((await ab.count()) > 0) await ab.click();
    }
  }

  // MC angekommen
  await page.waitForTimeout(2000);
  console.log("\n=== AT MC ===");

  // Buttons VOR Klick
  const before = await page.locator("button:visible").allTextContents();
  console.log(`Buttons VOR: ${before.filter(b => b.length > 0 && b.length < 60).join(" | ")}`);

  // Radio[1] click
  await page.locator("button[role='radio']").nth(1).click({ force: true });
  await page.waitForTimeout(800);

  // Prüfen click
  await page.locator("button:has-text('Prüfen')").click({ force: true });
  await page.waitForTimeout(3000);

  // Buttons NACH Prüfen
  const after = await page.locator("button:visible").allTextContents();
  console.log(`\nButtons NACH Prüfen: ${after.filter(b => b.length > 0 && b.length < 80).join(" | ")}`);

  await page.screenshot({ path: "scripts/_debug/mc-after-pruefen.png", fullPage: true });

  // Probiere alle Weiter-Selektoren
  console.log(`\nWeiter-Selector-Tests:`);
  console.log(`  button:has-text('Weiter') count = ${await page.locator("button:has-text('Weiter')").count()}`);
  console.log(`  visible Weiter count = ${await page.locator("button:has-text('Weiter'):visible").count()}`);
  console.log(`  rounded-t-3xl button = ${await page.locator(".rounded-t-3xl button").count()}`);
  console.log(`  fixed bottom-0 button = ${await page.locator(".fixed.bottom-0 button").count()}`);

  // Try fixed bottom-0 button "Weiter"
  const bottomWeiter = page.locator(".fixed.bottom-0 button:has-text('Weiter')").first();
  if ((await bottomWeiter.count()) > 0) {
    console.log(`\n→ Klicke .fixed.bottom-0 'Weiter'`);
    await bottomWeiter.click();
    await page.waitForTimeout(2000);
    const t2 = await page.locator("h2").first().textContent();
    console.log(`Nach Klick: ${t2?.trim().slice(0, 50)}`);
  }

  await ctx.close();
  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

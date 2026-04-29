#!/usr/bin/env npx tsx
import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
  });
  const page = await ctx.newPage();
  await page.goto(
    "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02"
  );

  // Schnell durch Step 1, 1.1b, 1.2 zu Step 1.3 (MC)
  for (let i = 0; i < 4; i++) {
    await page.waitForTimeout(2500);
    const t = await page.locator("h2").first().textContent();
    console.log(`At: ${t?.trim().slice(0, 50)}`);
    if (t?.includes("Erste Priorität")) break;
    const w = page.locator("button:has-text('Weiter'):visible").first();
    if ((await w.count()) > 0) {
      await w.click();
    } else {
      const pill = page.locator("button:has-text('Halb sicher')").first();
      if ((await pill.count()) > 0) {
        await pill.click();
        await page.waitForTimeout(300);
        await page.locator("button:has-text('Abstimmen')").click();
      }
    }
  }

  // Jetzt sind wir bei MC. Inspect.
  await page.waitForTimeout(2000);
  console.log("\n=== MC INSPECTION ===");

  const radios = await page.locator("button[role='radio']").all();
  console.log(`Radios gefunden: ${radios.length}`);

  // Status vor Klick
  const pruefenBefore = page.locator("button:has-text('Prüfen')").first();
  const disBefore = await pruefenBefore.isDisabled();
  console.log(`Prüfen-Button disabled VOR Klick: ${disBefore}`);

  // Klick auf 2. Option (Licht voll einschalten)
  if (radios.length >= 2) {
    console.log("\nKlicke auf radios[1] (Licht voll einschalten)");
    await radios[1].click({ force: true });
    await page.waitForTimeout(800);

    const ariaChecked = await radios[1].getAttribute("aria-checked");
    console.log(`aria-checked nach Klick: ${ariaChecked}`);

    const disAfter = await pruefenBefore.isDisabled();
    console.log(`Prüfen-Button disabled NACH Klick: ${disAfter}`);

    if (!disAfter) {
      console.log("→ Klicke Prüfen");
      await pruefenBefore.click();
      await page.waitForTimeout(2000);
      const t = await page.locator("h2").first().textContent();
      console.log(`Nach Prüfen: ${t?.trim().slice(0, 50)}`);
    }
  }

  await ctx.close();
  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

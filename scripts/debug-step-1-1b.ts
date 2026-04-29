#!/usr/bin/env npx tsx
import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
  });
  const page = await ctx.newPage();

  page.on("console", (m) => console.log(`[${m.type()}] ${m.text().slice(0, 200)}`));
  page.on("pageerror", (e) => console.log(`[err] ${e.message}`));

  await page.goto(
    "http://localhost:3000/de/lernen/situation/frau-m-nacht-sturz?ce=ce-02",
    { waitUntil: "domcontentloaded" }
  );
  await page.waitForTimeout(2500);

  // Initial state
  const t1 = await page.locator("h2").first().textContent();
  const h1 = await page
    .locator(":has-text('1/8'), :has-text('2/8'), :has-text('3/8')")
    .first()
    .textContent()
    .catch(() => "?");
  console.log(`\n[INITIAL] Title="${t1?.trim()}" Counter="${h1?.trim()}"`);
  await page.screenshot({
    path: "scripts/_debug/01-initial.png",
    fullPage: true,
  });

  // Click Weiter
  await page.locator("button:has-text('Weiter')").first().click();
  await page.waitForTimeout(2500);

  const t2 = await page.locator("h2").first().textContent();
  const h2 = await page
    .locator(":has-text('1/8'), :has-text('2/8'), :has-text('3/8')")
    .first()
    .textContent()
    .catch(() => "?");
  console.log(`\n[NACH KLICK 1] Title="${t2?.trim()}" Counter="${h2?.trim()}"`);
  await page.screenshot({
    path: "scripts/_debug/02-after-click.png",
    fullPage: true,
  });

  // Inspect — gibt es eine Pflege-Wissen-Karte?
  const inlineWissenCount = await page
    .locator(":has-text('Pflege-Wissen ·')")
    .count();
  console.log(`Inline-Wissen-Cards sichtbar: ${inlineWissenCount}`);

  // Inspect — DOM-Struktur des Hauptbereichs
  const mainHtml = await page
    .locator("main")
    .first()
    .innerHTML()
    .catch(() => "");
  console.log(`\nMain-HTML-Länge: ${mainHtml.length}`);
  console.log(`Erste 500 Zeichen: ${mainHtml.slice(0, 500)}`);

  await ctx.close();
  await browser.close();
}

run().catch((e) => {
  console.error("crash:", e);
  process.exit(1);
});

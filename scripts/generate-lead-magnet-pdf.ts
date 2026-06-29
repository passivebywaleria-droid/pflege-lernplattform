/**
 * Lead-Magnet-Generator: "100 Pflege-Fachbegriffe DE / TR / AR" als PDF.
 *
 * Aggregiert alle Glossar-Einträge aus CE-02 + CE-04, die eine türkische UND
 * arabische Übersetzung haben, dedupliziert nach Begriff, sortiert alphabetisch
 * und rendert ein druckfertiges PDF nach public/lead-magnets/.
 *
 * Aufruf:  npx tsx scripts/generate-lead-magnet-pdf.ts
 *
 * Quelle: content/ce-*\/themen/*\/glossar.ts (verbatim belegt, kein erfundener Content).
 */
import { readdirSync, existsSync, mkdirSync } from "node:fs"
import { join, resolve } from "node:path"
import { pathToFileURL } from "node:url"
import { chromium } from "playwright"
import type { GlossarEntry } from "../content/_types"

const ROOT = resolve(__dirname, "..")
const OUT_DIR = join(ROOT, "public", "lead-magnets")
const OUT_FILE = join(OUT_DIR, "pflege-fachbegriffe-de-tr-ar.pdf")
const MAX_ENTRIES = 100
const WAITLIST_URL = "178-105-176-161.nip.io/de/early"
const THEMEN_DIRS = [
  join(ROOT, "content", "ce-02", "themen"),
  join(ROOT, "content", "ce-04", "themen"),
]

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/** Quellenverweis am Ende der Erklärung entfernen (z. B. "(I Care, Kap. 5)"). */
function stripQuelle(s: string): string {
  return s.replace(/\s*\([^)]*(?:Kap\.|I Care|DNQP|Kommunikation im|S\.\s*\d)[^)]*\)\s*$/u, "").trim()
}

async function collectGlossarFiles(): Promise<string[]> {
  const files: string[] = []
  for (const themenDir of THEMEN_DIRS) {
    if (!existsSync(themenDir)) continue
    for (const thema of readdirSync(themenDir, { withFileTypes: true })) {
      if (!thema.isDirectory()) continue
      const g = join(themenDir, thema.name, "glossar.ts")
      if (existsSync(g)) files.push(g)
    }
  }
  return files
}

async function loadEntries(files: string[]): Promise<GlossarEntry[]> {
  const all: GlossarEntry[] = []
  for (const file of files) {
    const mod = await import(pathToFileURL(file).href)
    for (const value of Object.values(mod)) {
      if (Array.isArray(value)) {
        all.push(...(value as GlossarEntry[]))
      }
    }
  }
  return all
}

function selectEntries(entries: GlossarEntry[]): GlossarEntry[] {
  const seen = new Set<string>()
  const result: GlossarEntry[] = []
  for (const e of entries) {
    const tr = (e.uebersetzungTr || "").trim()
    const ar = (e.uebersetzungAr || "").trim()
    const begriff = (e.begriff || "").trim()
    if (!begriff || !tr || !ar) continue
    const key = begriff.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    result.push(e)
  }
  result.sort((a, b) => a.begriff.localeCompare(b.begriff, "de"))
  return result.slice(0, MAX_ENTRIES)
}

function buildHtml(entries: GlossarEntry[]): string {
  const cards = entries
    .map((e, i) => {
      const erkl = stripQuelle(e.erklaerungB1 || e.erklaerung || "")
      return `
      <article class="card">
        <div class="num">${i + 1}</div>
        <h3 class="begriff">${escapeHtml(e.begriff)}</h3>
        <p class="erkl">${escapeHtml(erkl)}</p>
        <div class="uebersetzungen">
          <div class="ue"><span class="flag">🇹🇷</span><span class="ue-text">${escapeHtml(e.uebersetzungTr!.trim())}</span></div>
          <div class="ue"><span class="flag">🇸🇦</span><span class="ue-text" dir="rtl" lang="ar">${escapeHtml(e.uebersetzungAr!.trim())}</span></div>
        </div>
      </article>`
    })
    .join("")

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<style>
  @page { size: A4; margin: 14mm 12mm; }
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, "Segoe UI", system-ui, "Noto Sans", "Noto Sans Arabic", sans-serif;
    color: #1A1815; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .accent { color: #218C71; }
  /* Cover */
  .cover {
    height: 255mm; display: flex; flex-direction: column; justify-content: center;
    page-break-after: always; text-align: center; padding: 0 8mm;
  }
  .cover .badge {
    align-self: center; border: 1.5px solid #218C71; color: #218C71; border-radius: 999px;
    padding: 5px 16px; font-size: 13px; font-weight: 600; margin-bottom: 24px;
  }
  .cover h1 { font-size: 34px; line-height: 1.2; margin: 0 0 14px; }
  .cover .langs { font-size: 20px; font-weight: 700; color: #218C71; margin-bottom: 18px; }
  .cover p { font-size: 15px; color: #57534E; max-width: 130mm; margin: 0 auto 6px; line-height: 1.5; }
  .cover .foot { margin-top: 30px; font-size: 13px; color: #78716C; }
  /* Cards */
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
  .card {
    border: 1px solid #E7E2DB; border-radius: 10px; padding: 9px 11px; position: relative;
    page-break-inside: avoid; background: #fff;
  }
  .num {
    position: absolute; top: 8px; right: 10px; font-size: 11px; font-weight: 700; color: #C8BEB2;
  }
  .begriff { font-size: 13.5px; font-weight: 700; margin: 0 18px 4px 0; line-height: 1.25; }
  .erkl { font-size: 10.5px; line-height: 1.4; color: #44403C; margin: 0 0 7px; }
  .uebersetzungen { display: flex; flex-direction: column; gap: 3px; border-top: 1px solid #F0EBE4; padding-top: 6px; }
  .ue { display: flex; align-items: center; gap: 6px; font-size: 11px; }
  .flag { font-size: 12px; }
  .ue-text { color: #218C71; font-weight: 600; }
  .ue-text[dir="rtl"] { font-size: 13px; }
  .section-title { font-size: 14px; font-weight: 700; margin: 0 0 10px; }
  .footer-note { margin-top: 14px; font-size: 10px; color: #A8A29E; text-align: center; }
</style>
</head>
<body>
  <section class="cover">
    <span class="badge">Kostenloses Lern-Set</span>
    <h1>100 Pflege-Fachbegriffe,<br>die du im Examen brauchst</h1>
    <div class="langs">Deutsch · Türkçe · العربية</div>
    <p>Die wichtigsten Begriffe aus der generalistischen Pflegeausbildung — einfach erklärt, mit türkischer und arabischer Übersetzung.</p>
    <p>Lern sie unterwegs, in der Pause, vor der Prüfung.</p>
    <div class="foot">Pflege-Lernplattform · Früher Zugang: ${WAITLIST_URL}</div>
  </section>

  <h2 class="section-title accent">Fachbegriffe A–Z</h2>
  <div class="grid">
    ${cards}
  </div>
  <p class="footer-note">Alle Begriffe stammen aus geprüften Pflege-Fachquellen (I Care, DNQP-Expertenstandards, Kommunikation im Gesundheitswesen). © Pflege-Lernplattform · ${WAITLIST_URL}</p>
</body>
</html>`
}

async function main() {
  const files = await collectGlossarFiles()
  const raw = await loadEntries(files)
  const selected = selectEntries(raw)

  console.log(`[lead-magnet] ${files.length} Glossar-Dateien, ${raw.length} Einträge gesamt, ${selected.length} mit DE+TR+AR ausgewählt.`)
  if (selected.length === 0) {
    throw new Error("Keine Einträge mit TR+AR gefunden — Abbruch.")
  }

  const html = buildHtml(selected)

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

  const browser = await chromium.launch()
  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: "networkidle" })
    await page.pdf({ path: OUT_FILE, format: "A4", printBackground: true })
  } finally {
    await browser.close()
  }

  console.log(`[lead-magnet] PDF geschrieben: ${OUT_FILE}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

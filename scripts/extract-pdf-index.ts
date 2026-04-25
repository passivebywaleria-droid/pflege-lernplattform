#!/usr/bin/env npx tsx
/**
 * extract-pdf-index.ts
 * Extrahiert Text aus einem PDF und schreibt kap-XX.md Dateien
 * im Format von recherche/icare-index/
 *
 * Verwendung:
 *   npx tsx scripts/extract-pdf-index.ts <pdf-pfad> <ausgabe-ordner> [--split=pages|chapters]
 *
 * Beispiele:
 *   npx tsx scripts/extract-pdf-index.ts recherche/icare/pflege-heute.pdf recherche/pflege-heute-index
 *   npx tsx scripts/extract-pdf-index.ts recherche/icare/I\ Care\ -\ Krankheitslehre_080753.pdf recherche/krankheitslehre-index
 *
 * Voraussetzung: pdftotext installiert (Homebrew: brew install poppler)
 */

import { execSync, spawnSync } from "child_process"
import * as fs from "fs"
import * as path from "path"

const args = process.argv.slice(2)
if (args.length < 2) {
  console.error(
    "Verwendung: npx tsx scripts/extract-pdf-index.ts <pdf-pfad> <ausgabe-ordner>"
  )
  process.exit(1)
}

const pdfPath = path.resolve(args[0])
const outputDir = path.resolve(args[1])
const splitMode = args.find((a) => a.startsWith("--split="))?.split("=")[1] ?? "pages"

// Prüfen ob pdftotext verfügbar
function checkPdfToText(): boolean {
  try {
    execSync("which pdftotext", { stdio: "pipe" })
    return true
  } catch {
    return false
  }
}

// Seitenanzahl bestimmen
function getPageCount(pdf: string): number {
  try {
    const result = execSync(`pdfinfo "${pdf}" 2>/dev/null | grep "^Pages:" | awk '{print $2}'`, {
      stdio: "pipe",
    })
    return parseInt(result.toString().trim(), 10) || 0
  } catch {
    return 0
  }
}

// Seite X bis Y extrahieren
function extractPages(pdf: string, from: number, to: number): string {
  try {
    const result = spawnSync(
      "pdftotext",
      ["-f", String(from), "-l", String(to), "-layout", pdf, "-"],
      { maxBuffer: 50 * 1024 * 1024 }
    )
    if (result.status !== 0) return ""
    return result.stdout.toString("utf-8")
  } catch {
    return ""
  }
}

// Gesamttext extrahieren
function extractAllText(pdf: string): string {
  try {
    const result = spawnSync("pdftotext", ["-layout", pdf, "-"], {
      maxBuffer: 200 * 1024 * 1024,
    })
    if (result.status !== 0) {
      console.error("pdftotext Fehler:", result.stderr?.toString())
      return ""
    }
    return result.stdout.toString("utf-8")
  } catch (e) {
    console.error("Fehler beim Extrahieren:", e)
    return ""
  }
}

// Text in Abschnitte aufteilen (grob nach Kapiteln/Seitenblöcken)
function splitIntoChapters(text: string, linesPerChunk: number = 500): string[] {
  const lines = text.split("\n")
  const chunks: string[] = []
  for (let i = 0; i < lines.length; i += linesPerChunk) {
    chunks.push(lines.slice(i, i + linesPerChunk).join("\n"))
  }
  return chunks
}

// Kapiteltrennung anhand von Mustern versuchen
function splitByChapterHeadings(text: string): { title: string; content: string }[] {
  // Muster für Kapitel-Überschriften (Zahl am Zeilenanfang, gefolgt von Text)
  const chapterPattern = /^(?:\f)?(\d{1,3})\s+([A-ZÄÖÜ][^\n]{5,60})\s*\n/gm
  const chapters: { title: string; content: string; start: number }[] = []

  let match
  while ((match = chapterPattern.exec(text)) !== null) {
    const num = parseInt(match[1], 10)
    if (num >= 1 && num <= 99) {
      chapters.push({
        title: `Kapitel ${match[1]}: ${match[2].trim()}`,
        content: "",
        start: match.index,
      })
    }
  }

  // Inhalt zwischen Kapiteln zuweisen
  return chapters.map((ch, i) => {
    const end = i + 1 < chapters.length ? chapters[i + 1].start : text.length
    return {
      title: ch.title,
      content: text.slice(ch.start, end),
    }
  })
}

// Ausgabe-Ordner erstellen
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Buchtitel aus Pfad ableiten
const bookName = path
  .basename(pdfPath, ".pdf")
  .replace(/dokumen\.pub_/, "")
  .replace(/-\d+nbsped.*/, "")
  .replace(/-/g, " ")
  .trim()

console.log(`📖 Extrahiere: ${path.basename(pdfPath)}`)
console.log(`📁 Ausgabe:    ${outputDir}`)

// pdftotext verfügbar?
if (!checkPdfToText()) {
  console.error("❌ pdftotext nicht gefunden. Installieren mit: brew install poppler")
  process.exit(1)
}

// Seitenanzahl
const pages = getPageCount(pdfPath)
console.log(`📄 Seiten:     ${pages || "unbekannt"}`)

// Text extrahieren
console.log("⏳ Extrahiere Text...")
const fullText = extractAllText(pdfPath)

if (!fullText.trim()) {
  console.error("❌ Kein Text extrahiert. PDF evtl. gesichert oder nur Bilder.")
  process.exit(1)
}

console.log(`✅ ${fullText.length.toLocaleString()} Zeichen extrahiert`)

// Aufteilen
let chapters: { title: string; content: string }[]

if (splitMode === "chapters") {
  chapters = splitByChapterHeadings(fullText)
  if (chapters.length < 3) {
    console.log("⚠️  Kapitel-Erkennung erfolglos, wechsle auf Seiten-Split")
    const chunks = splitIntoChapters(fullText, 600)
    chapters = chunks.map((c, i) => ({
      title: `Abschnitt ${String(i + 1).padStart(2, "0")}`,
      content: c,
    }))
  }
} else {
  // Standard: ~600 Zeilen pro Datei
  const chunks = splitIntoChapters(fullText, 600)
  chapters = chunks.map((c, i) => ({
    title: `Teil ${String(i + 1).padStart(2, "0")}`,
    content: c,
  }))
}

console.log(`📑 ${chapters.length} Abschnitte erkannt`)

// kap-XX.md Dateien schreiben
chapters.forEach((ch, i) => {
  const num = String(i + 1).padStart(2, "0")
  const filename = path.join(outputDir, `kap-${num}.md`)

  const header = `# ${ch.title}\n\n> Quelle: ${bookName}\n> Automatisch extrahiert — Formatierung kann abweichen\n\n---\n\n`

  fs.writeFileSync(filename, header + ch.content, "utf-8")
  process.stdout.write(`  ✓ kap-${num}.md\n`)
})

// index.md erstellen
const indexContent = `# ${bookName} — Index

**Extrahiert:** ${new Date().toISOString().split("T")[0]}
**Quelle:** ${path.basename(pdfPath)}
**Seiten:** ${pages || "?"}
**Abschnitte:** ${chapters.length}

---

## Kapitel

${chapters.map((ch, i) => `- [${ch.title}](kap-${String(i + 1).padStart(2, "0")}.md)`).join("\n")}
`

fs.writeFileSync(path.join(outputDir, "index.md"), indexContent, "utf-8")

console.log(`\n✅ Fertig! ${chapters.length} kap-XX.md + index.md in ${outputDir}`)
console.log("\nNächste Schritte:")
console.log("  1. Lies index.md um die Struktur zu prüfen")
console.log("  2. Kapitel ggf. manuell umbenennen falls Titel-Erkennung ungenau")
console.log("  3. Für bessere Kapitel-Erkennung: --split=chapters Flag verwenden")

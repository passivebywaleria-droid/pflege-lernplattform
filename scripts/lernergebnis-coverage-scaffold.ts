/**
 * lernergebnis-coverage-scaffold.ts
 *
 * Lernergebnis-First-Gate (leichtgewichtig). Erzeugt aus dem Rahmenlehrplan-Katalog
 * (`specs/curriculum/ce-{NN}-lernergebnisse.json`) ein Coverage-Gerüst pro CE:
 *   - Tabelle mit JEDEM Lernergebnis als Zeile (Status/Quelle/Bloom offen)
 *   - automatische Liste der vorhandenen Content-Orte (themen + situationen)
 *   - eingebetteter, wiederverwendbarer 5-Agenten-Prüf-Prompt
 *
 * Doppelfunktion:
 *   1. BUILD-Spec  — beim Lernergebnis-First-Bauen die Zeilen als Checkliste abarbeiten.
 *   2. RECHECK     — nach dem Bauen mit den Prüf-Agenten Status (VOLL/TEILW/FEHLT) füllen.
 *
 * Das Skript MISST NICHT semantisch (das leisten die Agenten/das Urteil) — es bereitet
 * die Messung deterministisch vor. So wird "Coverage prüfen" ein 1-Kommando-Schritt.
 *
 * Aufruf:  npx tsx scripts/lernergebnis-coverage-scaffold.ts <ce-nummer>
 *   z.B.   npx tsx scripts/lernergebnis-coverage-scaffold.ts 3
 * Output:  specs/ce-{NN}/lernergebnis-coverage-scaffold.md
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "node:fs"

interface Lernergebnis {
  id: string; ce: number; leIndex: number; quellzeile: number
  text: string; typ: "wissen" | "koennen" | "einstellung"
  bloomVerb: string; bloomStufe: number; altersbezug: boolean; motorisch: boolean
}

const ceArg = process.argv[2]
if (!ceArg || !/^\d{1,2}$/.test(ceArg)) {
  console.error("Aufruf: npx tsx scripts/lernergebnis-coverage-scaffold.ts <ce-nummer 1-11>")
  process.exit(1)
}
const ce = parseInt(ceArg, 10)
const NN = String(ce).padStart(2, "0")

const katalogPath = `specs/curriculum/ce-${NN}-lernergebnisse.json`
if (!existsSync(katalogPath)) {
  console.error(`Katalog fehlt: ${katalogPath} — erst build-lernergebnis-katalog.ts laufen lassen.`)
  process.exit(1)
}
const katalog = JSON.parse(readFileSync(katalogPath, "utf-8")) as {
  ce: number; quelle: string; anzahl: number; lernergebnisse: Lernergebnis[]
}
const les = katalog.lernergebnisse

// Content-Orte automatisch auflisten (themen + situationen)
const themenDir = `content/ce-${NN}/themen`
const sitDir = `content/ce-${NN}/situationen`
const themen = existsSync(themenDir) ? readdirSync(themenDir).filter((d) => !d.startsWith(".")) : []
const situationen = existsSync(sitDir) ? readdirSync(sitDir).filter((d) => !d.startsWith(".")) : []

const typLabel: Record<string, string> = { wissen: "W", koennen: "K", einstellung: "E" }
const byLE = new Map<number, Lernergebnis[]>()
for (const x of les) {
  if (!byLE.has(x.leIndex)) byLE.set(x.leIndex, [])
  byLE.get(x.leIndex)!.push(x)
}

const esc = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ").trim()

let md = ""
md += `# CE-${NN} Lernergebnis-Coverage-Gerüst\n\n`
md += `> **Generiert** aus \`${katalogPath}\` (${katalog.anzahl} Lernergebnisse, ${byLE.size} LEs). `
md += `Quelle: ${katalog.quelle}.\n>\n`
md += `> **Gate-Regel:** Erst wenn jedes Lernergebnis VOLL (oder begründet by-design-TEILWEISE) ist, gilt der CE als rahmenplan-vollständig. FEHLT = blockiert.\n>\n`
md += `> ⚠️ **Vor Gebrauch Katalog-Vollständigkeit prüfen:** Stichprobe gegen \`recherche/curriculum-generalistik-volltext/\` — stimmt Anzahl/Bloom je LE? (Heuristische Extraktion kann Bullets über Seitenumbrüche verlieren.)\n\n`

md += `## Content-Orte (Stand Generierung)\n\n`
md += `**Themen (${themen.length}):** ${themen.length ? themen.join(", ") : "_keine_"}\n\n`
md += `**Situationen (${situationen.length}):** ${situationen.length ? situationen.join(", ") : "_keine_"}\n\n`

md += `## Bilanz (nach Recheck ausfüllen)\n\n`
md += `| LE | n | VOLL | TEILW | FEHLT |\n|----|---|------|-------|-------|\n`
for (const li of [...byLE.keys()].sort((a, b) => a - b)) {
  md += `| ${li} | ${byLE.get(li)!.length} |  |  |  |\n`
}
md += `| **Σ** | **${les.length}** |  |  |  |\n\n`

for (const li of [...byLE.keys()].sort((a, b) => a - b)) {
  const items = byLE.get(li)!
  md += `## LE-Index ${li} (${items.length} Lernergebnisse)\n\n`
  md += `| ID | Typ | Bloom-Soll | Lernergebnis | Status | Deckende Quelle (bausteinId/stepId) | Bloom erreicht? |\n`
  md += `|----|-----|-----------|--------------|--------|--------------------------------------|------------------|\n`
  for (const x of items) {
    const flags = [x.altersbezug ? "👶 Alter" : "", x.motorisch ? "✋ motor." : ""].filter(Boolean).join(" ")
    md += `| ${x.id} | ${typLabel[x.typ]} | ${x.bloomStufe} (${x.bloomVerb}) | ${esc(x.text)}${flags ? " _" + flags + "_" : ""} |  |  |  |\n`
  }
  md += `\n`
}

md += `## Prüf-Prompt (je LE-Index 1 Agent, parallel) — wiederverwendbar\n\n`
md += "```\n"
md += `Du bist Coverage-Prüfer für die Pflege-Lernplattform. NUR LESEN.\n`
md += `AUFGABE: Bewerte die Rahmenlehrplan-Lernergebnisse von CE-${NN} LE-Index <N>\n`
md += `(Katalog \`${katalogPath}\`, filtere "leIndex" == <N>) gegen den AKTUELLEN Content.\n`
md += `Pro Lernergebnis: VOLL / TEILWEISE / FEHLT + Bloom-Soll erreicht? + deckende bausteinId/stepId.\n\n`
md += `QUELLEN:\n`
md += `- Katalog: ${katalogPath}\n`
md += `- Content: content/ce-${NN}/themen/*/bausteine.ts, content/ce-${NN}/situationen/*/phase-*.ts\n`
md += `- Grounding-Korpus zum Gegenprüfen: recherche/*-volltext/\n\n`
md += `REGELN:\n`
md += `- "VOLL" nur wenn Inhalt UND Bloom-Verb des Lernergebnisses erreicht sind.\n`
md += `- Einstellungs-/Reflexionsziele (diskutieren/reflektieren) brauchen ein reflection-/Diskussions-Format, nicht nur Lehrtext.\n`
md += `- "👶 Alter"-Ziele: prüfe ob die geforderten Altersstufen (Kind/Säugling/alter Mensch) eingelöst sind.\n`
md += `- "✋ motor."-Ziele: die Plattform deckt nur kognitiv vor — Handausführung als by-design-TEILWEISE markieren, kein FEHLT.\n`
md += `- Sei streng und unabhängig.\n\n`
md += `OUTPUT: Tabelle (ID | Status | Quelle | Bloom?), Bilanz (n VOLL / n TEILW / n FEHLT), explizite Liste verbleibender FEHLT mit Begründung.\n`
md += "```\n"

const outDir = `specs/ce-${NN}`
mkdirSync(outDir, { recursive: true })
const outPath = `${outDir}/lernergebnis-coverage-scaffold.md`
writeFileSync(outPath, md)
console.log(`CE-${NN}: ${les.length} Lernergebnisse, ${byLE.size} LEs, ${themen.length} Themen, ${situationen.length} Situationen`)
console.log(`→ ${outPath}`)

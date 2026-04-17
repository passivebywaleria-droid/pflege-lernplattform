#!/usr/bin/env npx ts-node
/**
 * Konvertiert rohmaterial.md → rohmaterial.json (strukturiert)
 *
 * Usage: npx ts-node scripts/convert-rohmaterial.ts le-01
 *        npx ts-node scripts/convert-rohmaterial.ts le-06
 *        npx ts-node scripts/convert-rohmaterial.ts --all
 *
 * Das JSON muss danach MANUELL nachbearbeitet werden:
 * - schluesselwoerter[] für jeden Kernfakt ergänzen
 * - zahlen[] und namen[] prüfen
 * - dozentinGeprueft auf true setzen nach Review
 */

import * as fs from 'fs'
import * as path from 'path'

interface ParsedQuelle {
  id: string
  typ: string
  titel: string
  jahr: number
  seiten?: string
  url?: string
}

interface ParsedKernfakt {
  id: string
  text: string
  schluesselwoerter: string[]
  zahlen: { wert: string; kontext: string }[]
  namen: { name: string; rolle: string }[]
  bloomLevel: number
  kompetenzbereich: string
  quelleId: string
  quelleSeite: string
  dozentinGeprueft: boolean
}

interface ParsedGlossarEintrag {
  begriff: string
  erklaerungC1: string
  erklaerungB1: string
  ar: string
  tr: string
}

interface ParsedLeitfall {
  patientId: string
  name: string
  alter: number
  geschlecht: 'w' | 'm' | 'd'
  diagnose: string
  setting: string
  kernproblem: string
  szenen: { szeneId: string; kontext: string; pflegefrage: string }[]
}

// --- Parser-Hilfsfunktionen ---

function parseBloom(bloomStr: string): number {
  const match = bloomStr.match(/B(\d)/)
  return match ? parseInt(match[1]) : 1
}

function extractQuelleId(quelleStr: string): { quelleId: string; quelleSeite: string } {
  // "Q2 S.78-79" → { quelleId: "Q2", quelleSeite: "S.78-79" }
  const match = quelleStr.match(/(Q\d+)\s*(S\..+)?/)
  return {
    quelleId: match?.[1] ?? 'Q?',
    quelleSeite: match?.[2]?.trim() ?? '',
  }
}

function extractNumbers(text: string): { wert: string; kontext: string }[] {
  const results: { wert: string; kontext: string }[] = []
  // Zahlen mit Kontext: "6 Schritte", "12 ATL", "4 Bereiche", etc.
  const patterns = [
    /(\d+)\s+(Schritte|Stufen|Phasen|Bereiche|Artikel|ATL|ABEDL|Grundbedürfnisse|Lebensaktivitäten|Konzepte|Ebenen|Säulen|Prinzipien|Distanzzonen|Teiltheorien)/gi,
    /(\d{4})\s*(?:veröffentlichte|gründete|formulierte|beschrieb|definiert)/gi,
    /Art\.\s*(\d+)/gi,
    /§\s*(\d+)/gi,
  ]
  for (const pattern of patterns) {
    let match
    while ((match = pattern.exec(text)) !== null) {
      results.push({ wert: match[1], kontext: match[0] })
    }
  }
  return results
}

function extractNames(text: string): { name: string; rolle: string }[] {
  const results: { name: string; rolle: string }[] = []
  // Bekannte Pflegetheoretiker/innen
  const knownNames = [
    'Nightingale', 'Henderson', 'Orem', 'Roper', 'Logan', 'Tierney',
    'Krohwinkel', 'Peplau', 'Juchli', 'Benner', 'Leininger', 'Rogers',
    'Roy', 'Levine', 'Orlando', 'Fiechter', 'Meier', 'Meleis',
    'Corbin', 'Strauss', 'Schulz von Thun', 'Watzlawick', 'Tuckman',
    'Beauchamp', 'Childress', 'Haker', 'Agnes Karll',
  ]
  for (const name of knownNames) {
    if (text.includes(name)) {
      // Kontext: Satz in dem der Name vorkommt (gekürzt)
      const idx = text.indexOf(name)
      const context = text.substring(Math.max(0, idx - 30), Math.min(text.length, idx + name.length + 50)).trim()
      results.push({ name, rolle: context.substring(0, 80) })
    }
  }
  return results
}

function extractKeywords(text: string): string[] {
  // Fachbegriffe: Wörter mit Großbuchstaben, zusammengesetzte Wörter, Abkürzungen
  const keywords: Set<string> = new Set()

  // Abkürzungen (2+ Großbuchstaben)
  const abbrMatches = text.match(/\b[A-ZÄÖÜ]{2,}\b/g)
  if (abbrMatches) abbrMatches.forEach(m => keywords.add(m))

  // Fachbegriffe in Anführungszeichen
  const quotedMatches = text.match(/[„""]([^""]+)[""]/g)
  if (quotedMatches) quotedMatches.forEach(m => keywords.add(m.replace(/[„"""]/g, '')))

  // Zusammengesetzte Nomen (Pflege*, *theorie, *modell, etc.)
  const compoundMatches = text.match(/\b[A-ZÄÖÜ][a-zäöüß]*(?:theorie|modell|prozess|empfänger|beziehung|diagnose|anamnese|konzept|wissenschaft|forschung|kodex|charta|prinzip|kompetenz|bedürfnis|aktivität)\b/g)
  if (compoundMatches) compoundMatches.forEach(m => keywords.add(m))

  // Namen (bereits separat extrahiert, aber auch als Keywords)
  const nameMatches = text.match(/\b(?:Nightingale|Henderson|Orem|Roper|Krohwinkel|Peplau|Juchli|Benner|Leininger|Fiechter|Meier)\b/g)
  if (nameMatches) nameMatches.forEach(m => keywords.add(m))

  return [...keywords]
}

// --- Hauptparser ---

function parseKernfakten(content: string, currentKB: string): ParsedKernfakt[] {
  const fakten: ParsedKernfakt[] = []
  const lines = content.split('\n')
  let kb = currentKB
  let faktCounter = 0

  for (const line of lines) {
    // KB-Überschrift erkennen: "### KB I —" oder "### KB I.1 —"
    const kbMatch = line.match(/###\s+KB\s+([IVX]+(?:\.\d+)?)\s+[—-]\s+(.+)/)
    if (kbMatch) {
      kb = `KB-${kbMatch[1]}`
      continue
    }

    // Format 1: Tabellen-Zeile: | F01 | Text | B1 | Q2 S.78 |
    const faktMatch = line.match(/\|\s*(F\d+)\s*\|\s*(.+?)\s*\|\s*(B\d)\s*\|\s*(.+?)\s*\|/)
    if (faktMatch) {
      const [, id, text, bloom, quelle] = faktMatch
      const { quelleId, quelleSeite } = extractQuelleId(quelle)
      faktCounter++

      fakten.push({
        id,
        text: text.trim(),
        schluesselwoerter: extractKeywords(text),
        zahlen: extractNumbers(text),
        namen: extractNames(text),
        bloomLevel: parseBloom(bloom),
        kompetenzbereich: kb,
        quelleId,
        quelleSeite,
        dozentinGeprueft: false,
      })
      continue
    }

    // Format 2: Fließtext: **I-01** Text [Q1 S.342-343] oder **A&P-01** Text [Q-AP]
    const proseMatch = line.match(/^\*\*([A-Z&-]+\d+)\*\*\s+(.+)/)
    if (proseMatch) {
      faktCounter++
      const rawId = proseMatch[1]   // "I-01", "A&P-01", "II-03"
      const fullText = proseMatch[2]

      // Quelle am Ende extrahieren: [Q1 S.342-343] oder [Q1, Q2]
      const quelleMatch = fullText.match(/\[(Q[\w-]+(?:\s+S\.[^\]]*)?(?:,\s*Q[\w-]+)*)\]\s*$/)
      let quelleId = 'Q?'
      let quelleSeite = ''
      if (quelleMatch) {
        const qStr = quelleMatch[1]
        const qParts = qStr.match(/(Q[\w-]+)/)
        if (qParts) quelleId = qParts[1]
        const sMatch = qStr.match(/(S\.\S+)/)
        if (sMatch) quelleSeite = sMatch[1]
      }

      // Text ohne Quellenreferenz
      const text = fullText.replace(/\s*\[Q[\w-]+[^\]]*\]\s*$/, '').trim()

      // KB aus ID ableiten: I-01 → KB-I, II-03 → KB-II, A&P-01 → KB-A&P
      const kbFromId = rawId.match(/^([A-Z&]+(?:[IVX]+)?)-/)
      const derivedKb = kbFromId ? `KB-${kbFromId[1]}` : kb

      // ID normalisieren: I-01 → F01 (aufsteigend)
      const id = `F${String(faktCounter).padStart(2, '0')}`

      fakten.push({
        id,
        text,
        schluesselwoerter: extractKeywords(text),
        zahlen: extractNumbers(text),
        namen: extractNames(text),
        bloomLevel: 1, // Fließtext-Format hat kein explizites Bloom-Level
        kompetenzbereich: derivedKb || kb,
        quelleId,
        quelleSeite,
        dozentinGeprueft: false,
      })
    }
  }

  return fakten
}

function parseQuellen(content: string): ParsedQuelle[] {
  const quellen: ParsedQuelle[] = []
  const lines = content.split('\n')

  for (const line of lines) {
    // Format 1 (5 Spalten): | Q1 | Lehrbuch | Titel | 2020 | Seite |
    const match5 = line.match(/\|\s*(Q\d+)\s*\|\s*(\w+)\s*\|\s*(.+?)\s*\|\s*(\d{4}(?:\/\d{4})?)\s*\|\s*(.+?)\s*\|/)
    if (match5) {
      const [, id, typ, titel, jahrStr, seiten] = match5
      const typMap: Record<string, string> = {
        'Lehrbuch': 'buch', 'Leitlinie': 'leitlinie', 'Studie': 'studie',
        'Website': 'website', 'Gesetz': 'gesetz', 'Kodex': 'kodex', 'Charta': 'charta',
      }
      quellen.push({
        id,
        typ: typMap[typ] ?? 'buch',
        titel: titel.trim(),
        jahr: parseInt(jahrStr.split('/')[0]),
        seiten: seiten.trim(),
      })
      continue
    }

    // Format 2 (3 Spalten): | Q1 | I Care Pflege (Thieme, 2020) — Kap. 15 | PDF S. 342-372 |
    const match3 = line.match(/\|\s*(Q[\w-]+)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|/)
    if (match3) {
      const [, id, quelleStr, seiten] = match3
      // Header/Separator überspringen
      if (id.includes('Kürzel') || id.includes('---') || quelleStr.includes('---')) continue

      // Jahr extrahieren
      const jahrMatch = quelleStr.match(/(\d{4})/)
      const jahr = jahrMatch ? parseInt(jahrMatch[1]) : 2020

      // Typ ableiten
      let typ = 'buch'
      if (quelleStr.match(/DNQP|Expertenstandard|Leitlinie/i)) typ = 'leitlinie'
      else if (quelleStr.match(/Studie|RCT|Meta/i)) typ = 'studie'

      quellen.push({
        id,
        typ,
        titel: quelleStr.trim(),
        jahr,
        seiten: seiten.trim(),
      })
    }
  }

  return quellen
}

function parseGlossar(content: string): ParsedGlossarEintrag[] {
  const glossar: ParsedGlossarEintrag[] = []
  const lines = content.split('\n')

  for (const line of lines) {
    // | Begriff | C1 | B1 | AR | TR |
    const match = line.match(/\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/)
    if (match) {
      const [, begriff, c1, b1, ar, tr] = match
      // Header-Zeile skippen
      if (begriff.includes('Begriff') || begriff.includes('---')) continue
      glossar.push({
        begriff: begriff.trim(),
        erklaerungC1: c1.trim(),
        erklaerungB1: b1.trim(),
        ar: ar.trim(),
        tr: tr.trim(),
      })
    }
  }

  return glossar
}

function parseLeitfaelle(content: string): ParsedLeitfall[] {
  const leitfaelle: ParsedLeitfall[] = []
  // Parse Patient-Blöcke
  const patientBlocks = content.split(/###\s+Patient\s+([A-C])/)

  for (let i = 1; i < patientBlocks.length; i += 2) {
    const patientId = patientBlocks[i]
    const block = patientBlocks[i + 1] || ''

    // Name extrahieren
    const nameMatch = block.match(/\*\*Name:\*\*\s*(?:Frau|Herr)?\s*(.+)/)
    const alterMatch = block.match(/\*\*Alter:\*\*\s*(\d+)/)
    const geschlechtMatch = block.match(/\*\*Geschlecht:\*\*\s*(\w+)/)
    const diagnoseMatch = block.match(/\*\*Diagnose\/Situation:\*\*\s*(.+)/)
    const settingMatch = block.match(/\*\*Setting:\*\*\s*(.+)/)
    const kernproblemMatch = block.match(/\*\*Kernproblem:\*\*\s*(.+)/)

    // Szenen extrahieren
    const szenen: { szeneId: string; kontext: string; pflegefrage: string }[] = []
    const szeneBlocks = block.split(/\*\*Szene\s+(S\d+)/)
    for (let j = 1; j < szeneBlocks.length; j += 2) {
      const szeneId = szeneBlocks[j]
      const szeneBlock = szeneBlocks[j + 1] || ''
      const kontextMatch = szeneBlock.match(/\*\*Was passiert:\*\*\s*([^]*?)(?=\n\*\*|$)/)
      const frageMatch = szeneBlock.match(/\*\*(?:Pflegerische Frage|Transfer-Frage|Entscheidungssituation):\*\*\s*([^]*?)(?=\n\*\*|$)/)

      szenen.push({
        szeneId,
        kontext: kontextMatch?.[1]?.trim() ?? '',
        pflegefrage: frageMatch?.[1]?.trim() ?? '',
      })
    }

    const geschlechtMap: Record<string, 'w' | 'm' | 'd'> = {
      'weiblich': 'w', 'männlich': 'm', 'w': 'w', 'm': 'm', 'divers': 'd',
    }

    leitfaelle.push({
      patientId,
      name: nameMatch?.[1]?.trim() ?? 'UNBEKANNT',
      alter: alterMatch ? parseInt(alterMatch[1]) : 0,
      geschlecht: geschlechtMap[geschlechtMatch?.[1]?.trim() ?? ''] ?? 'w',
      diagnose: diagnoseMatch?.[1]?.trim() ?? '',
      setting: settingMatch?.[1]?.trim() ?? '',
      kernproblem: kernproblemMatch?.[1]?.trim() ?? '',
      szenen,
    })
  }

  return leitfaelle
}

function parseRohmaterial(leId: string, content: string): Record<string, unknown> {
  // CE-ID aus Header extrahieren
  const ceMatch = content.match(/CE\s+(\d+)/)
  const ceId = ceMatch ? `ce-${ceMatch[1].padStart(2, '0')}` : 'ce-??'

  // Titel aus erster Zeile
  const titelMatch = content.match(/^#\s+Rohmaterial:\s+CE\s+\d+(?:\/CE\s+\d+)?\s+—\s+(.+)/m)
  const titel = titelMatch?.[1]?.trim() ?? leId

  // Sektionen splitten
  const quellenSection = content.match(/## Quellenverzeichnis\s*\n([\s\S]*?)(?=\n---|\n## [A-Z]\))/)?.[1] ?? ''
  const kernfaktenSection = content.match(/## A\) Kernfakten[\s\S]*?(?=\n---\s*\n## B\))/)?.[0] ?? ''
  const glossarSection = content.match(/## B\) Glossar[\s\S]*?(?=\n---\s*\n## C\))/)?.[0] ?? ''
  const leitfaelleSection = content.match(/## C\) Leitfälle[\s\S]*?(?=\n---\s*\n## D\)|\n---\s*\n## [E-K]\))/)?.[0] ?? ''

  return {
    leId,
    ceId,
    titel,
    quellen: parseQuellen(quellenSection),
    kernfakten: parseKernfakten(kernfaktenSection, ''),
    glossar: parseGlossar(glossarSection),
    leitfaelle: parseLeitfaelle(leitfaelleSection),
    dozentinFreigabeRohmaterial: false,
    dozentinFreigabeDatum: null,
  }
}

// --- Main ---

const target = process.argv[2]
if (!target) {
  console.log('Usage: npx ts-node scripts/convert-rohmaterial.ts <le-id|--all>')
  console.log('  npx ts-node scripts/convert-rohmaterial.ts le-01')
  console.log('  npx ts-node scripts/convert-rohmaterial.ts --all')
  process.exit(1)
}

const contentDir = path.resolve(__dirname, '..', 'content')

function convertLE(leId: string): void {
  const mdPath = path.join(contentDir, leId, 'rohmaterial.md')
  const jsonPath = path.join(contentDir, leId, 'rohmaterial.json')

  if (!fs.existsSync(mdPath)) {
    console.error(`❌ ${mdPath} nicht gefunden`)
    return
  }

  const content = fs.readFileSync(mdPath, 'utf-8')
  const parsed = parseRohmaterial(leId, content)

  // Zod-Validierung vor Speicherung
  const kernfakten = (parsed.kernfakten as ParsedKernfakt[]) || []
  const glossar = (parsed.glossar as ParsedGlossarEintrag[]) || []
  const leitfaelle = (parsed.leitfaelle as ParsedLeitfall[]) || []

  const zodErrors: string[] = []
  if (kernfakten.length === 0) zodErrors.push('Keine Kernfakten gefunden')
  if (glossar.length === 0) zodErrors.push('Keine Glossar-Einträge gefunden')
  for (const lf of leitfaelle) {
    if (lf.name === 'UNBEKANNT') zodErrors.push(`Leitfall ${lf.patientId}: Name ist UNBEKANNT`)
    if (lf.alter === 0) zodErrors.push(`Leitfall ${lf.patientId}: Alter ist 0`)
    if (!lf.diagnose) zodErrors.push(`Leitfall ${lf.patientId}: Diagnose fehlt`)
    if (lf.szenen.length === 0) zodErrors.push(`Leitfall ${lf.patientId}: Keine Szenen`)
  }
  for (const fakt of kernfakten) {
    if (fakt.text.length < 10) zodErrors.push(`${fakt.id}: Text zu kurz (${fakt.text.length} Zeichen)`)
    if (fakt.quelleId === 'Q?') zodErrors.push(`${fakt.id}: Quelle nicht erkannt`)
  }

  if (zodErrors.length > 0) {
    console.warn(`\n⚠️  Validierungs-Warnungen (${zodErrors.length}):`)
    zodErrors.forEach(e => console.warn(`   - ${e}`))
  }

  fs.writeFileSync(jsonPath, JSON.stringify(parsed, null, 2), 'utf-8')

  console.log(`✅ ${leId}: ${jsonPath}`)
  console.log(`   Kernfakten: ${kernfakten.length}`)
  console.log(`   Glossar: ${glossar.length}`)
  console.log(`   Leitfälle: ${leitfaelle.length}`)
  if (zodErrors.length === 0) {
    console.log(`   ⚠️  Nachbearbeitung nötig: schluesselwoerter[], zahlen[], namen[] prüfen`)
  } else {
    console.log(`   ❌ ${zodErrors.length} Validierungs-Warnungen — siehe oben`)
  }
}

if (target === '--all') {
  const dirs = fs.readdirSync(contentDir).filter(d => d.startsWith('le-') && fs.existsSync(path.join(contentDir, d, 'rohmaterial.md')))
  console.log(`Konvertiere ${dirs.length} LEs...\n`)
  dirs.forEach(convertLE)
  console.log(`\n✅ Fertig. ${dirs.length} JSON-Dateien erstellt.`)
} else {
  convertLE(target)
}

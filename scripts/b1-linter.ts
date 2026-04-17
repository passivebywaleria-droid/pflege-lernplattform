#!/usr/bin/env npx ts-node
/**
 * B1-Linter — Prüft B1-Texte auf sprachliche Korrektheit.
 * Basiert auf content/_b1-pflegedeutsch.md (Abschnitt 3: Verbotene Konstruktionen).
 *
 * Usage: npx tsx scripts/b1-linter.ts le-{N}
 */

import * as fs from 'fs'
import * as path from 'path'

// --- Severity ---
type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

interface B1Error {
  stepId: string
  feld: string
  regel: string
  gefunden: string
  severity: Severity
}

// --- Verbotene Wörter (aus _b1-pflegedeutsch.md 3.2) ---
const VERBOTENE_WOERTER = [
  'durchführen', 'evaluieren', 'eruieren', 'adäquat', 'insuffizient',
  'alteriert', 'compliance', 'assessment', 'eruktieren', 'defäzieren',
  'miktionieren', 'somnolent', 'soporös', 'komatös',
  // Weitere C1/C2-Wörter
  'indiziert', 'kontraindiziert', 'manifestieren', 'exazerbieren',
  'palliativ', 'progredient', 'rezidivierend',
]

// --- Verbotene Konstruktionen (Regex-Patterns) ---

// Konjunktiv I (indirekte Rede) — Abschnitt 3.1 + 3.3
const KONJUNKTIV_I = /\b(?:sei|habe|werde|könne|solle|müsse|dürfe|möge|gehe|stehe|liege|komme|gebe|nehme|lasse|finde|halte|bleibe|bringe|denke|wisse|sehe|stehe)\b/gi

// Passiv + Modalverb — "muss dokumentiert werden", "soll durchgeführt werden"
const PASSIV_MODAL = /\b(?:muss|soll|kann|darf|müssen|sollen|können|dürfen)\s+[\wäöüß]+(?:\s+[\wäöüß]+)?\s+werden\b/gi

// Genitivketten — "des ... des ..." in einem Satz
const GENITIVKETTE = /\bdes\s+[\wäöüß]+\s+(?:[\wäöüß]+\s+)?des\s+/gi

// Doppelte Verneinung — "nicht un..."
const DOPPELTE_VERNEINUNG = /\bnicht\s+un[\wäöüß]+/gi

// Funktionsverbgefüge — "zur Anwendung bringen", "in Betracht ziehen"
const FUNKTIONSVERB = /\b(?:zur|in|unter|zum)\s+[\wäöüß]+\s+(?:bringen|ziehen|kommen|stellen|nehmen|setzen|geben|halten)\b/gi

// --- Satz-Analyse ---

function splitSaetze(text: string): string[] {
  // Sätze aufteilen an . ! ? (nicht bei Abkürzungen wie z.B.)
  return text
    .replace(/(?:z\.B\.|u\.a\.|d\.h\.|o\.ä\.|usw\.|etc\.|ca\.|ggf\.|bzw\.|vgl\.)/g, (m) => m.replace(/\./g, '§'))
    .split(/[.!?]+/)
    .map(s => s.replace(/§/g, '.').trim())
    .filter(s => s.length > 5)
}

function zaehlWoerter(satz: string): number {
  return satz.split(/\s+/).filter(w => w.length > 0).length
}

// --- Komposita-Check ---

function findeKomposita(text: string): string[] {
  // Finde Wörter > 20 Zeichen die keine Klammer-Erklärung haben
  const words = text.match(/\b[A-ZÄÖÜ][\wäöüß]{19,}\b/g) || []
  return words.filter(w => {
    // Prüfe ob danach eine Klammer kommt
    const idx = text.indexOf(w)
    const after = text.slice(idx + w.length, idx + w.length + 30)
    return !after.match(/^\s*\(/)
  })
}

// --- Fachbegriff ohne Erklärung ---

// Fachbegriffe die in B1-Text erklärt werden müssen (Auswahl)
const FACHBEGRIFFE_B1 = [
  'Dekubitus', 'Kontraktur', 'Prophylaxe', 'Aspiration', 'Thrombose',
  'Embolie', 'Exsikkose', 'Inkontinenz', 'Dyspnoe', 'Zyanose',
  'Obstipation', 'Diarrhoe', 'Pneumonie', 'Apoplex', 'Demenz',
  'Diabetes', 'Hypertonie', 'Hypotonie', 'Anamnese', 'Diagnose',
  'Mobilisation', 'Rehabilitation', 'Dokumentation', 'Evaluation',
  'Intervention', 'Prävention', 'Kachexie', 'Adipositas',
  'Bradykardie', 'Tachykardie', 'Hypoglykämie', 'Hyperglykämie',
]

function findeFachbegriffeOhneErklaerung(text: string): string[] {
  const ergebnisse: string[] = []
  for (const begriff of FACHBEGRIFFE_B1) {
    const regex = new RegExp(`\\b${begriff}\\b`, 'gi')
    const match = regex.exec(text)
    if (match) {
      // Prüfe ob nach dem Begriff eine Klammer kommt
      const after = text.slice(match.index + match[0].length, match.index + match[0].length + 50)
      if (!after.match(/^\s*\(/)) {
        ergebnisse.push(begriff)
      }
    }
  }
  return ergebnisse
}

// --- Haupt-Validierung ---

function validateB1Text(text: string, stepId: string, feld: string): B1Error[] {
  const errors: B1Error[] = []
  if (!text || text.length < 10) return errors

  // 1. Verbotene Wörter
  const textLower = text.toLowerCase()
  for (const wort of VERBOTENE_WOERTER) {
    if (textLower.includes(wort.toLowerCase())) {
      errors.push({
        stepId, feld,
        regel: 'VERBOTENES_WORT',
        gefunden: `'${wort}' gefunden`,
        severity: 'MEDIUM',
      })
    }
  }

  // 2. Konjunktiv I
  const konjMatches = text.match(KONJUNKTIV_I)
  if (konjMatches) {
    // Filtere Falsch-Positive: "sei" in "seit", "seine", "Seife"
    const echte = konjMatches.filter(m => {
      const idx = text.toLowerCase().indexOf(m.toLowerCase())
      const before = text.slice(Math.max(0, idx - 1), idx)
      const after = text.slice(idx + m.length, idx + m.length + 2)
      // "seit" und "seine" sind keine Konjunktive
      if (m.toLowerCase() === 'sei' && (after.startsWith('t') || after.startsWith('n'))) return false
      return true
    })
    if (echte.length > 0) {
      errors.push({
        stepId, feld,
        regel: 'VERBOTENE_KONSTRUKTION',
        gefunden: `Konjunktiv I: ${echte.slice(0, 3).join(', ')}`,
        severity: 'MEDIUM',
      })
    }
  }

  // 3. Passiv + Modalverb
  const passivMatches = text.match(PASSIV_MODAL)
  if (passivMatches) {
    errors.push({
      stepId, feld,
      regel: 'VERBOTENE_KONSTRUKTION',
      gefunden: `Passiv+Modal: '${passivMatches[0]}'`,
      severity: 'MEDIUM',
    })
  }

  // 4. Genitivketten
  const genitivMatches = text.match(GENITIVKETTE)
  if (genitivMatches) {
    errors.push({
      stepId, feld,
      regel: 'VERBOTENE_KONSTRUKTION',
      gefunden: `Genitivkette: '${genitivMatches[0].trim()}'`,
      severity: 'MEDIUM',
    })
  }

  // 5. Doppelte Verneinung
  const doppeltMatches = text.match(DOPPELTE_VERNEINUNG)
  if (doppeltMatches) {
    errors.push({
      stepId, feld,
      regel: 'VERBOTENE_KONSTRUKTION',
      gefunden: `Doppelte Verneinung: '${doppeltMatches[0]}'`,
      severity: 'LOW',
    })
  }

  // 6. Funktionsverbgefüge
  const fvgMatches = text.match(FUNKTIONSVERB)
  if (fvgMatches) {
    errors.push({
      stepId, feld,
      regel: 'VERBOTENE_KONSTRUKTION',
      gefunden: `Funktionsverbgefüge: '${fvgMatches[0]}'`,
      severity: 'LOW',
    })
  }

  // 7. Satzlänge > 15 Wörter
  const saetze = splitSaetze(text)
  for (const satz of saetze) {
    const woerter = zaehlWoerter(satz)
    if (woerter > 15) {
      errors.push({
        stepId, feld,
        regel: 'SATZLAENGE_B1',
        gefunden: `${woerter} Wörter: '${satz.slice(0, 60)}...'`,
        severity: 'LOW',
      })
    }
  }

  // 8. Lange Komposita ohne Erklärung
  const komposita = findeKomposita(text)
  for (const k of komposita) {
    errors.push({
      stepId, feld,
      regel: 'KOMPOSITA_LANG',
      gefunden: `'${k}' (${k.length} Zeichen) ohne Klammer-Erklärung`,
      severity: 'LOW',
    })
  }

  // 9. Fachbegriffe ohne Erklärung (nur bei Erstnennung)
  const ohneErklaerung = findeFachbegriffeOhneErklaerung(text)
  for (const fb of ohneErklaerung) {
    errors.push({
      stepId, feld,
      regel: 'FACHBEGRIFF_OHNE_ERKLAERUNG',
      gefunden: `'${fb}' ohne (...) Erklärung bei Erstnennung`,
      severity: 'MEDIUM',
    })
  }

  return errors
}

// --- Step-Level-Check ---

interface StepLike {
  stepId: string
  stepType: string
  contentC1?: { title?: string; body?: string; glossarBegriffe?: string[] }
  contentB1?: { title?: string; body?: string }
  question?: Record<string, unknown>
}

function validateStep(step: StepLike): B1Error[] {
  const errors: B1Error[] = []

  // Check 1: contentB1 fehlt aber contentC1 existiert
  if (step.contentC1 && !step.contentB1) {
    errors.push({
      stepId: step.stepId,
      feld: 'contentB1',
      regel: 'B1_SUBFELD_FEHLT',
      gefunden: 'contentC1 vorhanden, aber contentB1 fehlt',
      severity: 'HIGH',
    })
    return errors // Keine weiteren B1-Checks möglich
  }

  // Check 2: B1-Body prüfen
  if (step.contentB1?.body) {
    errors.push(...validateB1Text(step.contentB1.body, step.stepId, 'contentB1.body'))
  }

  // Check 3: B1-Title prüfen
  if (step.contentB1?.title) {
    errors.push(...validateB1Text(step.contentB1.title, step.stepId, 'contentB1.title'))
  }

  // Check 4: B1-Felder in question prüfen
  if (step.question) {
    const q = step.question
    // explanationB1 auf Optionen
    const optionen = (q.optionen ?? q.options) as Array<{ explanationB1?: string }> | undefined
    if (optionen) {
      for (let i = 0; i < optionen.length; i++) {
        if (optionen[i]?.explanationB1) {
          errors.push(...validateB1Text(optionen[i].explanationB1!, step.stepId, `question.optionen[${i}].explanationB1`))
        }
      }
    }

    // contextB1 auf dialogPhases
    const dialogPhases = q.dialogPhases as Array<{ contextB1?: string; options?: Array<{ textB1?: string; feedbackB1?: string }> }> | undefined
    if (dialogPhases) {
      for (let i = 0; i < dialogPhases.length; i++) {
        if (dialogPhases[i]?.contextB1) {
          errors.push(...validateB1Text(dialogPhases[i].contextB1!, step.stepId, `question.dialogPhases[${i}].contextB1`))
        }
        if (dialogPhases[i]?.options) {
          for (let j = 0; j < dialogPhases[i].options!.length; j++) {
            const opt = dialogPhases[i].options![j]
            if (opt.textB1) {
              errors.push(...validateB1Text(opt.textB1, step.stepId, `question.dialogPhases[${i}].options[${j}].textB1`))
            }
            if (opt.feedbackB1) {
              errors.push(...validateB1Text(opt.feedbackB1, step.stepId, `question.dialogPhases[${i}].options[${j}].feedbackB1`))
            }
          }
        }
      }
    }
  }

  return errors
}

// --- Main ---

function main() {
  const leArg = process.argv[2]
  if (!leArg) {
    console.error('Usage: npx tsx scripts/b1-linter.ts le-{N}')
    process.exit(1)
  }

  const leDir = path.resolve('content', leArg)
  if (!fs.existsSync(leDir)) {
    console.error(`Verzeichnis nicht gefunden: ${leDir}`)
    process.exit(1)
  }

  console.log(`\n🔍 B1-Linter — ${leArg}`)
  console.log('═'.repeat(50))

  // Alle steps-s*.ts Dateien laden
  const stepFiles = fs.readdirSync(leDir)
    .filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))
    .sort()

  if (stepFiles.length === 0) {
    console.log('⚠️  Keine Step-Dateien gefunden.')
    process.exit(0)
  }

  const allErrors: B1Error[] = []
  let totalSteps = 0

  for (const file of stepFiles) {
    const filePath = path.join(leDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')

    // Steps aus dem TypeScript-Array extrahieren (vereinfacht: JSON-ähnlich parsen)
    // Wir nutzen eval-freies Parsing: Suche nach stepId-Mustern und extrahiere Objekte
    const stepIdMatches = content.match(/stepId:\s*['"]([^'"]+)['"]/g) || []
    totalSteps += stepIdMatches.length

    // Alternative: Datei als Modul importieren wäre besser, aber für Script reicht Regex
    // Wir extrahieren B1-relevante Texte direkt aus dem Raw-Content
    const steps = extractStepsFromContent(content)
    for (const step of steps) {
      allErrors.push(...validateStep(step))
    }
  }

  // Ergebnisse gruppiert ausgeben
  const bySeverity: Record<Severity, B1Error[]> = {
    CRITICAL: allErrors.filter(e => e.severity === 'CRITICAL'),
    HIGH: allErrors.filter(e => e.severity === 'HIGH'),
    MEDIUM: allErrors.filter(e => e.severity === 'MEDIUM'),
    LOW: allErrors.filter(e => e.severity === 'LOW'),
  }

  console.log(`\nGeprüft: ${totalSteps} Steps in ${stepFiles.length} Dateien`)
  console.log('')

  if (bySeverity.CRITICAL.length > 0) {
    console.log(`❌ CRITICAL (${bySeverity.CRITICAL.length}):`)
    bySeverity.CRITICAL.forEach(e => console.log(`   ${e.stepId} | ${e.feld} | ${e.regel}: ${e.gefunden}`))
  }

  if (bySeverity.HIGH.length > 0) {
    console.log(`⚠️  HIGH (${bySeverity.HIGH.length}):`)
    bySeverity.HIGH.forEach(e => console.log(`   ${e.stepId} | ${e.feld} | ${e.regel}: ${e.gefunden}`))
  }

  if (bySeverity.MEDIUM.length > 0) {
    console.log(`📋 MEDIUM (${bySeverity.MEDIUM.length}):`)
    bySeverity.MEDIUM.forEach(e => console.log(`   ${e.stepId} | ${e.feld} | ${e.regel}: ${e.gefunden}`))
  }

  if (bySeverity.LOW.length > 0) {
    console.log(`ℹ️  LOW (${bySeverity.LOW.length}):`)
    bySeverity.LOW.forEach(e => console.log(`   ${e.stepId} | ${e.feld} | ${e.regel}: ${e.gefunden}`))
  }

  const total = allErrors.length
  if (total === 0) {
    console.log('✅ Keine B1-Probleme gefunden!')
  } else {
    console.log(`\n📊 Gesamt: ${total} Probleme (${bySeverity.CRITICAL.length} CRITICAL, ${bySeverity.HIGH.length} HIGH, ${bySeverity.MEDIUM.length} MEDIUM, ${bySeverity.LOW.length} LOW)`)
  }
}

// --- Step-Extraktor (Regex-basiert, kein eval) ---

function extractStepsFromContent(content: string): StepLike[] {
  const steps: StepLike[] = []

  // Finde alle stepId-Vorkommen und extrahiere den umgebenden Block
  const stepIdRegex = /stepId:\s*['"]([^'"]+)['"]/g
  let match: RegExpExecArray | null

  while ((match = stepIdRegex.exec(content)) !== null) {
    const stepId = match[1]

    // Finde stepType
    const afterStepId = content.slice(match.index, match.index + 2000)
    const typeMatch = afterStepId.match(/stepType:\s*['"]([^'"]+)['"]/)
    const stepType = typeMatch ? typeMatch[1] : 'unknown'

    // Prüfe ob contentB1 existiert
    const hasContentB1 = afterStepId.includes('contentB1:') || afterStepId.includes('contentB1 :')
    const hasContentC1 = afterStepId.includes('contentC1:') || afterStepId.includes('contentC1 :')

    // Extrahiere B1-Body (vereinfacht)
    let b1Body: string | undefined
    const b1BodyMatch = afterStepId.match(/contentB1:\s*\{[^}]*body:\s*['"`]([^'"`]{10,}?)['"`]/)
    if (b1BodyMatch) b1Body = b1BodyMatch[1]

    // Extrahiere B1-Texte aus mehrzeiligen Template-Literals
    if (!b1Body) {
      const b1BlockMatch = afterStepId.match(/contentB1:\s*\{[\s\S]*?body:\s*`([\s\S]*?)`/)
      if (b1BlockMatch) b1Body = b1BlockMatch[1]
    }

    const step: StepLike = {
      stepId,
      stepType,
      contentC1: hasContentC1 ? { title: '', body: '' } : undefined,
      contentB1: hasContentB1 ? { title: '', body: b1Body || '' } : undefined,
    }

    // Check: C1 vorhanden, B1 fehlt
    if (hasContentC1 && !hasContentB1) {
      step.contentB1 = undefined
    }

    steps.push(step)
  }

  return steps
}

main()

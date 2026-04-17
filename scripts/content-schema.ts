#!/usr/bin/env npx ts-node
/**
 * Zod-Schema-Validierung für ContentSteps.
 * Prüft ob jeder Step-Typ die richtigen Pflichtfelder hat.
 * Eliminiert Renderer-Bugs (Kat. E: 14 Fehler).
 *
 * Usage: npx ts-node scripts/content-schema.ts content/le-01/
 */

import * as fs from 'fs'
import * as path from 'path'

interface StepLike {
  stepId: string
  stepType: string
  phase?: string
  bloomLevel?: number
  track?: string
  modus?: string
  lernziel?: string
  tag?: string
  contentC1?: { title?: string; body?: string; glossarBegriffe?: string[] }
  contentB1?: { title?: string; body?: string }
  question?: Record<string, unknown>
}

type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

interface SchemaError {
  stepId: string
  stepType: string
  feld: string
  erwartet: string
  gefunden: string
  severity: Severity
}

// --- Pflichtfeld-Regeln pro StepType ---

type FieldCheck = (step: StepLike) => SchemaError | null

function resolveFieldPath(obj: unknown, fieldPath: string): unknown {
  const parts = fieldPath.split('.')
  let current: unknown = obj
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined
    current = (current as Record<string, unknown>)[part]
  }
  return current
}

function requireField(fieldPath: string, description: string, severity: Severity = 'CRITICAL'): FieldCheck {
  return (step: StepLike) => {
    const value = resolveFieldPath(step, fieldPath)
    if (value == null || value === undefined) {
      return {
        stepId: step.stepId,
        stepType: step.stepType,
        feld: fieldPath,
        erwartet: description,
        gefunden: 'undefined',
        severity,
      }
    }
    return null
  }
}

function forbidField(fieldPath: string, correctField: string): FieldCheck {
  return (step: StepLike) => {
    const value = resolveFieldPath(step, fieldPath)
    if (value != null && value !== undefined) {
      return {
        stepId: step.stepId,
        stepType: step.stepType,
        feld: fieldPath,
        erwartet: `Nicht ${fieldPath} sondern ${correctField}`,
        gefunden: `${fieldPath} vorhanden (falscher Feldname)`,
        severity: 'CRITICAL',
      }
    }
    return null
  }
}

function requireArray(fieldPath: string, minLength: number, description: string, severity: Severity = 'CRITICAL'): FieldCheck {
  return (step: StepLike) => {
    const value = resolveFieldPath(step, fieldPath)
    if (value === undefined || value === null) {
      return {
        stepId: step.stepId,
        stepType: step.stepType,
        feld: fieldPath,
        erwartet: `Array mit mind. ${minLength} Einträgen (${description})`,
        gefunden: 'undefined',
        severity,
      }
    }
    if (!Array.isArray(value)) {
      return {
        stepId: step.stepId,
        stepType: step.stepType,
        feld: fieldPath,
        erwartet: `Array (${description})`,
        gefunden: typeof value,
        severity,
      }
    }
    if (value.length < minLength) {
      return {
        stepId: step.stepId,
        stepType: step.stepType,
        feld: fieldPath,
        erwartet: `Mind. ${minLength} Einträge`,
        gefunden: `${value.length} Einträge`,
        severity,
      }
    }
    return null
  }
}

// --- StepType-spezifische Regeln ---

const STEP_RULES: Record<string, FieldCheck[]> = {
  mc: [
    requireArray('question.optionen', 2, 'MC-Optionen'),
    forbidField('question.options', 'question.optionen'),
  ],
  dialog: [
    requireArray('question.dialogPhases', 1, 'Dialog-Phasen'),
    forbidField('question.dialogLines', 'question.dialogPhases'),
  ],
  reveal: [
    requireField('question.reveal', 'Reveal-Daten'),
    requireArray('question.reveal.cards', 1, 'Reveal-Karten'),
    forbidField('question.revealItems', 'question.reveal.cards'),
  ],
  timeline: [
    requireField('question.timeline', 'Timeline-Daten'),
    requireArray('question.timeline.events', 1, 'Timeline-Events'),
    forbidField('question.timelineEvents', 'question.timeline.events'),
  ],
  swipe: [
    requireField('question.swipe', 'Swipe-Daten'),
    requireArray('question.swipe.cards', 1, 'Swipe-Karten'),
  ],
  matching: [
    requireArray('question.matchingPairs', 2, 'Matching-Paare'),
    forbidField('question.pairs', 'question.matchingPairs'),
  ],
  sorting: [
    requireArray('question.sortItems', 2, 'Sort-Items'),
    forbidField('question.items', 'question.sortItems'),
  ],
  categorize: [
    requireArray('question.categoryItems', 2, 'Category-Items'),
    requireArray('question.categories', 2, 'Kategorien'),
    forbidField('question.items', 'question.categoryItems'),
  ],
  crossword: [
    requireArray('question.crosswordWords', 2, 'Kreuzwort-Wörter'),
    forbidField('question.words', 'question.crosswordWords'),
  ],
  confidence: [
    requireArray('question.statements', 1, 'Statements als string[]'),
    forbidField('question.confidenceCards', 'question.statements (als string[])'),
  ],
  reflection: [
    requireField('question.reflection', 'Reflection-Daten'),
    requireField('question.reflection.prompt', 'Reflection-Prompt'),
  ],
  memory: [
    requireArray('question.memoryPairs', 2, 'Memory-Paare'),
  ],
  fillin: [
    requireField('question.fillin', 'FillIn-Daten'),
    requireField('question.fillin.sentence', 'FillIn-Satz'),
  ],
  truefalse: [
    requireArray('question.trueFalseCards', 2, 'TrueFalse-Karten'),
  ],
  timer: [
    requireArray('question.timerQuestions', 1, 'Timer-Fragen'),
    requireField('question.timeLimitSeconds', 'Zeitlimit'),
  ],
  highlight: [
    requireArray('question.highlightSegments', 1, 'Highlight-Segmente'),
  ],
  hotspot: [
    requireField('question.hotspot', 'Hotspot-Daten'),
    requireField('question.hotspot.imageUrl', 'Hotspot-Bild'),
    requireArray('question.hotspot.zones', 1, 'Hotspot-Zonen'),
  ],
  cloze: [
    requireField('question.cloze', 'Cloze-Daten'),
    requireField('question.cloze.textWithBlanks', 'Cloze-Text'),
    requireArray('question.cloze.blanks', 1, 'Cloze-Lücken'),
  ],
  sequencing: [
    requireField('question.sequencing', 'Sequencing-Daten'),
    requireArray('question.sequencing.items', 2, 'Sequencing-Items'),
  ],
  slider: [
    requireField('question.slider', 'Slider-Daten'),
    requireField('question.slider.correctValue', 'Slider-Korrekt-Wert'),
  ],
  summary: [
    requireField('question.summary', 'Summary-Daten'),
    requireArray('question.summary.kernaussagen', 1, 'Kernaussagen'),
  ],
  flipcard: [
    requireField('question.flipcard', 'Flipcard-Daten'),
    requireArray('question.flipcard.cards', 1, 'Flipcard-Karten'),
  ],
  comparison: [
    requireField('question.comparison', 'Comparison-Daten'),
    requireArray('question.comparison.columns', 2, 'Vergleichs-Spalten'),
    requireArray('question.comparison.rows', 1, 'Vergleichs-Zeilen'),
  ],
  branching: [
    requireArray('question.branchingOptions', 2, 'Branching-Optionen'),
    forbidField('question.options', 'question.branchingOptions'),
  ],
  selfrating: [
    requireArray('question.statements', 1, 'Selfrating-Statements'),
  ],
  labelImage: [
    requireField('question.labelImage', 'LabelImage-Daten'),
    requireArray('question.labelImage.labels', 1, 'LabelImage-Labels'),
  ],
  diagram: [
    requireField('question.diagram', 'Diagram-Daten'),
    requireArray('question.diagram.nodes', 2, 'Diagram-Knoten'),
  ],
  wordorder: [
    requireField('question.wordorder', 'WordOrder-Daten'),
    requireArray('question.wordorder.words', 2, 'Wörter'),
  ],
  calculation: [
    requireField('question.calculation', 'Calculation-Daten'),
    requireField('question.calculation.correctValue', 'Korrekt-Wert'),
  ],
  tablefillin: [
    requireField('question.tablefillin', 'TableFillIn-Daten'),
    requireArray('question.tablefillin.headers', 1, 'Tabellen-Header'),
  ],
  errorspot: [
    requireField('question.errorspot', 'ErrorSpot-Daten'),
    requireField('question.errorspot.text', 'Fehler-Text'),
    requireArray('question.errorspot.errors', 1, 'Fehler'),
  ],
  matrix: [
    requireField('question.matrix', 'Matrix-Daten'),
    requireArray('question.matrix.items', 1, 'Matrix-Items'),
  ],
  conceptmap: [
    requireField('question.conceptmap', 'ConceptMap-Daten'),
    requireArray('question.conceptmap.nodes', 2, 'ConceptMap-Knoten'),
  ],
  chatSim: [
    requireField('question.chatSim', 'ChatSim-Daten'),
    requireField('question.chatSim.systemPrompt', 'System-Prompt'),
  ],
  estimation: [
    requireField('question.estimation', 'Estimation-Daten'),
    requireField('question.estimation.correctValue', 'Korrekt-Wert'),
  ],
  speech: [
    requireField('question.speech', 'Speech-Daten'),
  ],
  audio: [
    requireField('question.audio', 'Audio-Daten'),
    requireField('question.audio.audioUrl', 'Audio-URL'),
  ],
  careplan: [
    requireField('question.careplan', 'CarePlan-Daten'),
    requireArray('question.careplan.steps', 1, 'CarePlan-Schritte'),
  ],
}

// Globale Pflichtfelder für JEDEN Step — mit Severity
const GLOBAL_RULES: FieldCheck[] = [
  requireField('stepId', 'Step-ID', 'CRITICAL'),
  requireField('stepType', 'Step-Typ', 'CRITICAL'),
  requireField('contentC1', 'C1-Content', 'CRITICAL'),
  requireField('contentC1.title', 'C1-Titel', 'HIGH'),
  requireField('contentC1.body', 'C1-Body', 'HIGH'),
  requireField('contentB1', 'B1-Content', 'HIGH'),
  requireField('contentB1.title', 'B1-Titel', 'HIGH'),
  requireField('contentB1.body', 'B1-Body', 'HIGH'),
  requireField('track', 'Track (basis/vertiefung)', 'MEDIUM'),
  requireField('modus', 'Erlebnis-Modus', 'MEDIUM'),
  requireField('lernziel', 'Lernziel-ID', 'MEDIUM'),
  requireField('tag', 'Content-Tag (anatomie/pflege/krankheitslehre)', 'LOW'),
]

// B1 ≠ C1 Check: B1 muss kürzer und einfacher sein als C1
function checkB1vsC1(step: StepLike): SchemaError[] {
  const errors: SchemaError[] = []
  const c1Body = step.contentC1?.body
  const b1Body = (step as unknown as Record<string, unknown>).contentB1 as { body?: string } | undefined

  if (!c1Body || !b1Body?.body) return errors

  // B1 body ≤ 85% Länge von C1 body
  if (b1Body.body.length > c1Body.length * 0.85 && c1Body.length > 50) {
    errors.push({
      stepId: step.stepId,
      stepType: step.stepType,
      feld: 'contentB1.body',
      erwartet: `B1 ≤85% von C1 (max ${Math.round(c1Body.length * 0.85)} Zeichen)`,
      gefunden: `${b1Body.body.length} Zeichen (C1: ${c1Body.length})`,
      severity: 'MEDIUM',
    })
  }

  // B1 Satzlänge: Durchschnitt ≤ 15 Wörter
  const b1Sentences = b1Body.body.split(/[.!?]+/).filter(s => s.trim().length > 0)
  if (b1Sentences.length > 0) {
    const avgWords = b1Sentences.reduce((sum, s) => sum + s.trim().split(/\s+/).length, 0) / b1Sentences.length
    if (avgWords > 18) {
      errors.push({
        stepId: step.stepId,
        stepType: step.stepType,
        feld: 'contentB1.body',
        erwartet: 'B1 Satzlänge ≤18 Wörter Durchschnitt',
        gefunden: `Ø ${Math.round(avgWords)} Wörter pro Satz`,
        severity: 'LOW',
      })
    }
  }

  return errors
}

// --- Bloom-Validierung ---

// Bloom-Range: Muss 1-6 sein
function checkBloomRange(step: StepLike): SchemaError[] {
  const errors: SchemaError[] = []
  const bloom = step.bloomLevel
  if (bloom == null) {
    errors.push({
      stepId: step.stepId,
      stepType: step.stepType,
      feld: 'bloomLevel',
      erwartet: 'Bloom-Level 1-6 (Pflicht)',
      gefunden: 'undefined',
      severity: 'HIGH',
    })
    return errors
  }
  if (bloom < 1 || bloom > 6 || !Number.isInteger(bloom)) {
    errors.push({
      stepId: step.stepId,
      stepType: step.stepType,
      feld: 'bloomLevel',
      erwartet: 'Ganzzahl 1-6',
      gefunden: String(bloom),
      severity: 'CRITICAL',
    })
  }
  return errors
}

// Step-Typ ↔ Bloom Plausibilität
// Bestimmte Step-Typen passen nur zu bestimmten Bloom-Leveln
const BLOOM_MAX_FOR_TYPE: Record<string, number> = {
  memory: 2,       // Erinnern/Verstehen
  crossword: 2,    // Erinnern/Verstehen
  slider: 3,       // max Anwenden
  swipe: 3,        // max Anwenden
  flipcard: 3,     // max Anwenden
}

const BLOOM_MIN_FOR_TYPE: Record<string, number> = {
  freetext: 3,     // mindestens Anwenden (meistens B4-B6)
  chatSim: 4,      // mindestens Analysieren
  conceptmap: 3,   // mindestens Anwenden
  matrix: 4,       // mindestens Analysieren
  careplan: 3,     // mindestens Anwenden
}

function checkStepTypeBloomPlausibility(step: StepLike): SchemaError[] {
  const errors: SchemaError[] = []
  const bloom = step.bloomLevel
  if (bloom == null) return errors

  const maxBloom = BLOOM_MAX_FOR_TYPE[step.stepType]
  if (maxBloom && bloom > maxBloom) {
    errors.push({
      stepId: step.stepId,
      stepType: step.stepType,
      feld: 'bloomLevel',
      erwartet: `${step.stepType} max Bloom ${maxBloom}`,
      gefunden: `Bloom ${bloom}`,
      severity: 'LOW',
    })
  }

  const minBloom = BLOOM_MIN_FOR_TYPE[step.stepType]
  if (minBloom && bloom < minBloom) {
    errors.push({
      stepId: step.stepId,
      stepType: step.stepType,
      feld: 'bloomLevel',
      erwartet: `${step.stepType} min Bloom ${minBloom}`,
      gefunden: `Bloom ${bloom}`,
      severity: 'LOW',
    })
  }

  return errors
}

// --- Validierung ---

export function validateStep(step: StepLike): SchemaError[] {
  const errors: SchemaError[] = []

  // Globale Checks
  for (const check of GLOBAL_RULES) {
    const err = check(step)
    if (err) errors.push(err)
  }

  // StepType-spezifische Checks
  const rules = STEP_RULES[step.stepType]
  if (rules) {
    for (const check of rules) {
      const err = check(step)
      if (err) errors.push(err)
    }
  }

  // Text-Steps brauchen kein question-Objekt
  if (step.stepType !== 'text' && step.stepType !== 'imageInteraction') {
    const qErr = requireField('question', 'Question-Objekt', 'CRITICAL')(step)
    if (qErr) errors.push(qErr)
  }

  // B1 ≠ C1 Check
  errors.push(...checkB1vsC1(step))

  // Bloom-Range Check (1-6)
  errors.push(...checkBloomRange(step))

  // Step-Typ ↔ Bloom Plausibilität
  errors.push(...checkStepTypeBloomPlausibility(step))

  // A11y-Block: Accessibility-Checks
  errors.push(...checkAccessibility(step))

  return errors
}

// --- A11y-Block ---

const IMAGE_STEP_TYPES = new Set(['hotspot', 'labelImage', 'imageInteraction', 'diagram'])

function checkAccessibility(step: StepLike): SchemaError[] {
  const errors: SchemaError[] = []
  const q = step.question ?? {} as Record<string, unknown>

  // A11y-1: Bild-Steps brauchen bildhinweis oder altText
  if (IMAGE_STEP_TYPES.has(step.stepType)) {
    const stepAny = step as unknown as Record<string, unknown>
    const hasAlt = !!q.altText
      || !!q.bildhinweis
      || !!stepAny.bildhinweis
    const hotspot = q.hotspot as Record<string, unknown> | undefined
    const hasImageUrl = !!q.imageUrl
      || !!hotspot?.imageUrl
    if (hasImageUrl && !hasAlt) {
      errors.push({
        stepId: step.stepId,
        stepType: step.stepType,
        feld: 'bildhinweis/altText',
        erwartet: 'Bild-Step braucht bildhinweis oder altText für Screenreader',
        gefunden: 'fehlt',
        severity: 'MEDIUM',
      })
    }
  }

  // A11y-2: Dialog-Steps: Phasen brauchen sprecherRolle für Screenreader-Kontext
  if (step.stepType === 'dialog' && Array.isArray((q as Record<string, unknown>).dialogPhases)) {
    const phases = (q as Record<string, unknown>).dialogPhases as Record<string, unknown>[]
    for (let i = 0; i < phases.length; i++) {
      if (!phases[i].sprecher && !phases[i].sprecherRolle) {
        errors.push({
          stepId: step.stepId,
          stepType: step.stepType,
          feld: `question.dialogPhases[${i}].sprecher`,
          erwartet: 'Sprecher-Rolle für Screenreader-Kontext',
          gefunden: 'fehlt',
          severity: 'LOW',
        })
      }
    }
  }

  return errors
}

// Severity-Hilfsfunktionen für externe Nutzung
export function groupBySeverity(errors: SchemaError[]): Record<Severity, SchemaError[]> {
  const grouped: Record<Severity, SchemaError[]> = { CRITICAL: [], HIGH: [], MEDIUM: [], LOW: [] }
  for (const err of errors) {
    grouped[err.severity].push(err)
  }
  return grouped
}

export type { SchemaError, Severity }

export function validateSteps(steps: StepLike[]): { errors: SchemaError[]; total: number; passed: number } {
  const allErrors: SchemaError[] = []
  for (const step of steps) {
    allErrors.push(...validateStep(step))
  }
  return {
    errors: allErrors,
    total: steps.length,
    passed: steps.length - new Set(allErrors.map(e => e.stepId)).size,
  }
}

// --- CLI ---

if (require.main === module) {
  const targetPath = process.argv[2]
  if (!targetPath) {
    console.log('Usage: npx ts-node scripts/content-schema.ts <path-to-le-dir>')
    process.exit(1)
  }

  // Dynamisch alle step-Dateien laden
  const absPath = path.resolve(targetPath)
  const stepFiles = fs.readdirSync(absPath).filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))

  if (stepFiles.length === 0) {
    console.error(`❌ Keine steps-s*.ts Dateien in ${absPath}`)
    process.exit(1)
  }

  console.log(`\n🔍 Schema-Check: ${stepFiles.length} Session-Dateien\n`)

  // ts-node register für Imports

  let totalErrors = 0
  let totalSteps = 0

  for (const file of stepFiles) {
    const filePath = path.join(absPath, file)
    try {
      const mod = require(filePath)
      // Finde das Steps-Array (Naming-Standard 2026-04-16: LE{NN}_STEPS_S{N}, Fallback STEPS_S{N})
      const stepsKey = Object.keys(mod).find((k) => /(_STEPS_S\d|^STEPS_)/.test(k))
      if (!stepsKey) {
        console.log(`  ⚠️  ${file}: Kein STEPS_* Export gefunden`)
        continue
      }
      const steps = mod[stepsKey] as StepLike[]
      const result = validateSteps(steps)
      totalSteps += result.total
      totalErrors += result.errors.length

      if (result.errors.length > 0) {
        console.log(`  ❌ ${file}: ${result.errors.length} Schema-Fehler`)
        for (const err of result.errors) {
          console.log(`     ${err.stepId}: ${err.feld} — erwartet: ${err.erwartet}, gefunden: ${err.gefunden}`)
        }
      } else {
        console.log(`  ✅ ${file}: ${result.total} Steps OK`)
      }
    } catch (e) {
      console.error(`  ❌ ${file}: Import-Fehler — ${(e as Error).message}`)
    }
  }

  console.log(`\n${'═'.repeat(50)}`)
  console.log(`Schema-Check: ${totalErrors === 0 ? '✅ PASS' : '❌ FAIL'}`)
  console.log(`Steps: ${totalSteps} | Fehler: ${totalErrors}`)
  console.log('═'.repeat(50))

  process.exit(totalErrors > 0 ? 1 : 0)
}

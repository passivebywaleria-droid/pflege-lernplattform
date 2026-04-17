#!/usr/bin/env npx ts-node
/**
 * Fakten-Checker: Prüft Steps deterministisch gegen rohmaterial.json.
 * Eliminiert Kat. A (Faktenfehler) + Kat. B (fehlende Inhalte).
 *
 * Usage: npx ts-node scripts/fact-checker.ts le-01
 */

import * as fs from 'fs'
import * as path from 'path'

// --- Types ---

interface Kernfakt {
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

interface Leitfall {
  patientId: string
  name: string
  alter: number
  geschlecht: string
  diagnose: string
  setting: string
  kernproblem: string
  szenen: { szeneId: string; kontext: string; pflegefrage: string }[]
}

interface Rohmaterial {
  leId: string
  ceId: string
  titel: string
  kernfakten: Kernfakt[]
  leitfaelle: Leitfall[]
  dozentinFreigabeRohmaterial: boolean
}

interface StepLike {
  stepId: string
  stepType: string
  contentC1: { title: string; body: string; fallbezug?: string; glossarBegriffe?: string[] }
  contentB1?: { title: string; body: string; fallbezug?: string }
  question?: Record<string, unknown>
}

type FaktStatus = 'COVERED' | 'PARTIAL' | 'MISSING' | 'MISMATCH'

interface FaktResult {
  faktId: string
  status: FaktStatus
  detail: string
  matchedStepIds: string[]
  mismatches: string[]
}

interface LeitfallResult {
  patientId: string
  name: string
  status: FaktStatus
  detail: string
  matchedStepIds: string[]
}

// --- Hilfsfunktionen ---

function extractAllText(step: StepLike): string {
  const parts: string[] = [
    step.contentC1.title,
    step.contentC1.body,
    step.contentC1.fallbezug ?? '',
    step.contentB1?.title ?? '',
    step.contentB1?.body ?? '',
    step.contentB1?.fallbezug ?? '',
  ]

  // Question-Felder extrahieren
  if (step.question) {
    const q = step.question
    if (typeof q.fragetext === 'string') parts.push(q.fragetext)
    if (typeof q.musterantwort === 'string') parts.push(q.musterantwort)

    // Optionen (MC)
    if (Array.isArray(q.optionen)) {
      for (const opt of q.optionen) {
        if (typeof opt === 'object' && opt !== null) {
          const o = opt as Record<string, string>
          if (o.text) parts.push(o.text)
          if (o.explanation) parts.push(o.explanation)
        }
      }
    }

    // Branching
    if (Array.isArray(q.branchingOptions)) {
      for (const opt of q.branchingOptions) {
        if (typeof opt === 'object' && opt !== null) {
          const o = opt as Record<string, string>
          if (o.text) parts.push(o.text)
          if (o.feedback) parts.push(o.feedback)
        }
      }
    }

    // Dialog
    if (Array.isArray(q.dialogPhases)) {
      for (const phase of q.dialogPhases) {
        if (typeof phase === 'object' && phase !== null) {
          const p = phase as Record<string, unknown>
          if (typeof p.context === 'string') parts.push(p.context)
          if (Array.isArray(p.options)) {
            for (const opt of p.options) {
              if (typeof opt === 'object' && opt !== null) {
                const o = opt as Record<string, string>
                if (o.text) parts.push(o.text)
                if (o.feedback) parts.push(o.feedback)
                if (o.patientResponse) parts.push(o.patientResponse)
              }
            }
          }
        }
      }
    }

    // Feedback-Texte in diversen Formaten
    for (const key of ['explanation', 'explanationB1', 'feedback', 'feedbackB1']) {
      if (typeof q[key] === 'string') parts.push(q[key] as string)
    }

    // Reveal, Flipcard, etc. — generisch verschachtelte Texte
    for (const key of Object.keys(q)) {
      const val = q[key]
      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        const obj = val as Record<string, unknown>
        if (typeof obj.instruction === 'string') parts.push(obj.instruction)
        if (Array.isArray(obj.cards)) {
          for (const card of obj.cards) {
            if (typeof card === 'object' && card !== null) {
              const c = card as Record<string, string>
              for (const cKey of ['content', 'label', 'statement', 'front', 'back', 'text', 'title', 'description']) {
                if (c[cKey]) parts.push(c[cKey])
              }
            }
          }
        }
        if (Array.isArray(obj.events)) {
          for (const evt of obj.events) {
            if (typeof evt === 'object' && evt !== null) {
              const e = evt as Record<string, string>
              if (e.title) parts.push(e.title)
              if (e.description) parts.push(e.description)
            }
          }
        }
      }
    }
  }

  return parts.join(' ').toLowerCase()
}

function checkKeywords(text: string, keywords: string[]): { found: string[]; missing: string[] } {
  const found: string[] = []
  const missing: string[] = []
  for (const kw of keywords) {
    if (text.includes(kw.toLowerCase())) {
      found.push(kw)
    } else {
      missing.push(kw)
    }
  }
  return { found, missing }
}

function checkNumbers(text: string, zahlen: { wert: string; kontext: string }[]): { matched: string[]; mismatched: string[] } {
  const matched: string[] = []
  const mismatched: string[] = []
  for (const z of zahlen) {
    if (text.includes(z.wert)) {
      matched.push(`${z.wert} (${z.kontext})`)
    } else {
      mismatched.push(`${z.wert} (${z.kontext})`)
    }
  }
  return { matched, mismatched }
}

function checkNames(text: string, namen: { name: string; rolle: string }[]): { found: string[]; missing: string[] } {
  const found: string[] = []
  const missing: string[] = []
  for (const n of namen) {
    if (text.includes(n.name.toLowerCase())) {
      found.push(n.name)
    } else {
      missing.push(n.name)
    }
  }
  return { found, missing }
}

// --- Fakten-Check ---

export function checkFakten(rohmaterial: Rohmaterial, steps: StepLike[]): FaktResult[] {
  const results: FaktResult[] = []

  // Gesamttext aller Steps
  const stepTexts = steps.map(s => ({ stepId: s.stepId, text: extractAllText(s) }))
  const allText = stepTexts.map(s => s.text).join(' ')

  for (const fakt of rohmaterial.kernfakten) {
    const matchedStepIds: string[] = []
    const mismatches: string[] = []

    // Keywords prüfen
    const kwResult = checkKeywords(allText, fakt.schluesselwoerter)

    // Welche Steps matchen?
    for (const st of stepTexts) {
      const stKw = checkKeywords(st.text, fakt.schluesselwoerter)
      if (stKw.found.length >= Math.ceil(fakt.schluesselwoerter.length * 0.5)) {
        matchedStepIds.push(st.stepId)
      }
    }

    // Zahlen prüfen
    if (fakt.zahlen.length > 0) {
      const numResult = checkNumbers(allText, fakt.zahlen)
      if (numResult.mismatched.length > 0) {
        mismatches.push(`Zahlen fehlen: ${numResult.mismatched.join(', ')}`)
      }
    }

    // Namen prüfen
    if (fakt.namen.length > 0) {
      const nameResult = checkNames(allText, fakt.namen)
      if (nameResult.missing.length > 0) {
        mismatches.push(`Namen fehlen: ${nameResult.missing.join(', ')}`)
      }
    }

    // Status bestimmen
    let status: FaktStatus
    let detail: string

    if (matchedStepIds.length === 0 && kwResult.found.length < 2) {
      status = 'MISSING'
      detail = `Keine Steps mit Keywords [${fakt.schluesselwoerter.join(', ')}]`
    } else if (mismatches.length > 0) {
      status = 'MISMATCH'
      detail = mismatches.join('; ')
    } else if (kwResult.missing.length > 0) {
      status = 'PARTIAL'
      detail = `Keywords fehlen: ${kwResult.missing.join(', ')}`
    } else {
      status = 'COVERED'
      detail = `In ${matchedStepIds.length} Steps gefunden`
    }

    results.push({
      faktId: fakt.id,
      status,
      detail,
      matchedStepIds,
      mismatches,
    })
  }

  return results
}

export function checkLeitfaelle(rohmaterial: Rohmaterial, steps: StepLike[]): LeitfallResult[] {
  const results: LeitfallResult[] = []
  const allText = steps.map(s => extractAllText(s)).join(' ')

  for (const lf of rohmaterial.leitfaelle) {
    const matchedStepIds: string[] = []

    // Name im Text suchen
    const nameFound = allText.includes(lf.name.toLowerCase())
    // Alter im Text suchen
    const alterStr = `${lf.alter}`
    const alterFound = allText.includes(alterStr)

    // Steps finden die den Leitfall referenzieren
    for (const step of steps) {
      const text = extractAllText(step)
      if (text.includes(lf.name.toLowerCase())) {
        matchedStepIds.push(step.stepId)

        // Alter-Mismatch in diesem Step prüfen
        if (!text.includes(alterStr)) {
          // Prüfe ob ein anderes Alter genannt wird
          const alterMatch = text.match(new RegExp(`${lf.name.toLowerCase()}[^.]*?(\\d+)\\s*(?:jahre|j\\.|jährig)`, 'i'))
          if (alterMatch && alterMatch[1] !== alterStr) {
            results.push({
              patientId: lf.patientId,
              name: lf.name,
              status: 'MISMATCH',
              detail: `Alter: JSON sagt ${lf.alter}, Step ${step.stepId} sagt ${alterMatch[1]}`,
              matchedStepIds,
            })
            continue
          }
        }
      }
    }

    if (!nameFound) {
      results.push({
        patientId: lf.patientId,
        name: lf.name,
        status: 'MISSING',
        detail: 'Name nicht in Steps gefunden',
        matchedStepIds: [],
      })
    } else if (results.find(r => r.patientId === lf.patientId)) {
      // Bereits ein MISMATCH gemeldet
    } else {
      results.push({
        patientId: lf.patientId,
        name: lf.name,
        status: 'COVERED',
        detail: `In ${matchedStepIds.length} Steps referenziert`,
        matchedStepIds,
      })
    }
  }

  return results
}

// --- CLI ---

if (require.main === module) {
  const leId = process.argv[2]
  if (!leId) {
    console.log('Usage: npx ts-node scripts/fact-checker.ts <le-id>')
    process.exit(1)
  }

  const contentDir = path.resolve(__dirname, '..', 'content')
  const jsonPath = path.join(contentDir, leId, 'rohmaterial.json')

  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ ${jsonPath} nicht gefunden. Erst convert-rohmaterial.ts laufen lassen.`)
    process.exit(1)
  }

  const rohmaterial: Rohmaterial = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  // Steps laden

  const leDir = path.join(contentDir, leId)
  const stepFiles = fs.readdirSync(leDir).filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))
  const allSteps: StepLike[] = []

  for (const file of stepFiles) {
    try {
      const mod = require(path.join(leDir, file))
      const stepsKey = Object.keys(mod).find(k => /STEPS_S\d+/.test(k))
      if (stepsKey) allSteps.push(...(mod[stepsKey] as StepLike[]))
    } catch (e) {
      console.error(`  ❌ ${file}: ${(e as Error).message}`)
    }
  }

  console.log(`\n🔍 Fakten-Check: ${leId} (${rohmaterial.kernfakten.length} Fakten, ${allSteps.length} Steps)\n`)

  // Fakten prüfen
  const faktResults = checkFakten(rohmaterial, allSteps)
  const covered = faktResults.filter(r => r.status === 'COVERED').length
  const partial = faktResults.filter(r => r.status === 'PARTIAL').length
  const missing = faktResults.filter(r => r.status === 'MISSING').length
  const mismatch = faktResults.filter(r => r.status === 'MISMATCH').length

  console.log(`Fakten: ${covered} ✅ | ${partial} ⚠️  | ${missing} ❌ | ${mismatch} 🔴\n`)

  for (const r of faktResults) {
    if (r.status !== 'COVERED') {
      const icon = r.status === 'MISSING' ? '❌' : r.status === 'MISMATCH' ? '🔴' : '⚠️'
      console.log(`  ${icon} ${r.faktId} [${r.status}]: ${r.detail}`)
    }
  }

  // Leitfälle prüfen
  const lfResults = checkLeitfaelle(rohmaterial, allSteps)
  console.log(`\nLeitfälle:`)
  for (const r of lfResults) {
    const icon = r.status === 'COVERED' ? '✅' : r.status === 'MISMATCH' ? '🔴' : '❌'
    console.log(`  ${icon} ${r.name} (${r.patientId}): ${r.detail}`)
  }

  // Rohmaterial-Freigabe prüfen
  if (!rohmaterial.dozentinFreigabeRohmaterial) {
    console.log('\n⚠️  WARNUNG: Rohmaterial noch nicht von Dozentin freigegeben!')
  }

  const hasErrors = missing > 0 || mismatch > 0 || lfResults.some(r => r.status !== 'COVERED')
  console.log(`\n${'═'.repeat(50)}`)
  console.log(`Fakten-Check: ${hasErrors ? '❌ FAIL' : '✅ PASS'}`)
  console.log('═'.repeat(50))

  process.exit(hasErrors ? 1 : 0)
}

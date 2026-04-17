#!/usr/bin/env npx ts-node
/**
 * MC-Linter: Prüft Multiple-Choice-Steps auf systematische Verzerrungen.
 * Eliminiert Kat. C (18 MC-Bias-Fehler).
 *
 * Checks:
 * 1. Antwortlänge: Korrekte Antwort darf nicht >30% länger als Distraktoren sein
 * 2. Fachbegriff-Bias: Fachbegriff darf nicht NUR in korrekter Option stehen
 * 3. Position-Bias: Korrekte Antwort darf nicht zu oft auf selber Position sein
 * 4. "Alle oben genannten" → Warnung
 *
 * Usage: npx ts-node scripts/mc-linter.ts content/le-01/
 */

import * as fs from 'fs'
import * as path from 'path'

interface McOption {
  text: string
  isCorrect: boolean
  explanation?: string
}

interface StepLike {
  stepId: string
  stepType: string
  question?: {
    optionen?: McOption[]
    [key: string]: unknown
  }
}

interface McWarning {
  stepId: string
  typ: 'LAENGE' | 'FACHBEGRIFF' | 'POSITION' | 'ALLE_OBEN' | 'ZU_WENIGE'
  detail: string
  fix: string
}

// --- Checks ---

function checkLength(step: StepLike, optionen: McOption[]): McWarning | null {
  const correct = optionen.find(o => o.isCorrect)
  const distractors = optionen.filter(o => !o.isCorrect)

  if (!correct || distractors.length === 0) return null

  const correctLen = correct.text.length
  const avgDistractorLen = distractors.reduce((sum, d) => sum + d.text.length, 0) / distractors.length

  const ratio = correctLen / avgDistractorLen
  if (ratio > 1.35) {
    return {
      stepId: step.stepId,
      typ: 'LAENGE',
      detail: `Korrekte Antwort ${correctLen} Zeichen, Distraktoren Ø ${Math.round(avgDistractorLen)} Zeichen (${Math.round(ratio * 100 - 100)}% länger)`,
      fix: 'Distraktoren verlängern oder korrekte Antwort kürzen',
    }
  }
  if (ratio < 0.65) {
    return {
      stepId: step.stepId,
      typ: 'LAENGE',
      detail: `Korrekte Antwort ${correctLen} Zeichen, Distraktoren Ø ${Math.round(avgDistractorLen)} Zeichen (korrekte zu kurz)`,
      fix: 'Korrekte Antwort ausführlicher formulieren',
    }
  }

  return null
}

function checkFachbegriff(step: StepLike, optionen: McOption[]): McWarning | null {
  const correct = optionen.find(o => o.isCorrect)
  const distractors = optionen.filter(o => !o.isCorrect)
  if (!correct || distractors.length === 0) return null

  // Fachbegriffe: Wörter mit >8 Zeichen und Großbuchstabe
  const fachbegriffe = correct.text.match(/\b[A-ZÄÖÜ][a-zäöüß]{7,}\b/g) ?? []

  for (const fb of fachbegriffe) {
    const inDistractors = distractors.some(d => d.text.includes(fb))
    if (!inDistractors) {
      return {
        stepId: step.stepId,
        typ: 'FACHBEGRIFF',
        detail: `"${fb}" nur in korrekter Antwort, nicht in Distraktoren`,
        fix: `"${fb}" auch in mindestens einem Distraktor verwenden`,
      }
    }
  }

  return null
}

function checkAlleOben(step: StepLike, optionen: McOption[]): McWarning | null {
  for (const opt of optionen) {
    const text = opt.text.toLowerCase()
    if (text.includes('alle oben') || text.includes('alle genannten') || text.includes('a und b') || text.includes('a, b und c')) {
      return {
        stepId: step.stepId,
        typ: 'ALLE_OBEN',
        detail: `Option "${opt.text}" — typischer MC-Bias`,
        fix: 'Eigenständige Distraktoren formulieren',
      }
    }
  }
  return null
}

export function lintMcSteps(steps: StepLike[]): { warnings: McWarning[]; positionStats: Record<number, number>; totalMc: number } {
  const warnings: McWarning[] = []
  const positionOfCorrect: number[] = []
  let totalMc = 0

  for (const step of steps) {
    if (step.stepType !== 'mc') continue
    const optionen = step.question?.optionen as McOption[] | undefined
    if (!optionen || optionen.length < 2) {
      warnings.push({
        stepId: step.stepId,
        typ: 'ZU_WENIGE',
        detail: `Nur ${optionen?.length ?? 0} Optionen`,
        fix: 'Mind. 3, besser 4 Optionen',
      })
      continue
    }

    totalMc++

    // Position der korrekten Antwort tracken
    const correctIdx = optionen.findIndex(o => o.isCorrect)
    if (correctIdx >= 0) positionOfCorrect.push(correctIdx)

    // Checks
    const lenWarn = checkLength(step, optionen)
    if (lenWarn) warnings.push(lenWarn)

    const fbWarn = checkFachbegriff(step, optionen)
    if (fbWarn) warnings.push(fbWarn)

    const alleWarn = checkAlleOben(step, optionen)
    if (alleWarn) warnings.push(alleWarn)
  }

  // Position-Bias prüfen
  const positionStats: Record<number, number> = {}
  for (const pos of positionOfCorrect) {
    positionStats[pos] = (positionStats[pos] || 0) + 1
  }

  if (totalMc >= 5) {
    for (const [pos, count] of Object.entries(positionStats)) {
      const pct = (count / totalMc) * 100
      if (pct > 40) {
        warnings.push({
          stepId: 'GESAMT',
          typ: 'POSITION',
          detail: `Position ${String.fromCharCode(65 + parseInt(pos))} ist ${Math.round(pct)}% korrekt (${count}/${totalMc})`,
          fix: 'Korrekte Antworten gleichmäßiger auf Positionen verteilen',
        })
      }
    }
  }

  return { warnings, positionStats, totalMc }
}

// --- CLI ---

if (require.main === module) {
  const targetPath = process.argv[2]
  if (!targetPath) {
    console.log('Usage: npx ts-node scripts/mc-linter.ts <path-to-le-dir>')
    process.exit(1)
  }


  const absPath = path.resolve(targetPath)
  const stepFiles = fs.readdirSync(absPath).filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))
  const allSteps: StepLike[] = []

  for (const file of stepFiles) {
    try {
      const mod = require(path.join(absPath, file))
      const stepsKey = Object.keys(mod).find(k => k.startsWith('STEPS_'))
      if (stepsKey) allSteps.push(...(mod[stepsKey] as StepLike[]))
    } catch (e) {
      console.error(`  ❌ ${file}: ${(e as Error).message}`)
    }
  }

  console.log(`\n🔍 MC-Linter: ${allSteps.filter(s => s.stepType === 'mc').length} MC-Steps\n`)

  const { warnings, positionStats, totalMc } = lintMcSteps(allSteps)

  if (warnings.length > 0) {
    for (const w of warnings) {
      console.log(`  ⚠️  [${w.typ}] ${w.stepId}: ${w.detail}`)
      console.log(`     Fix: ${w.fix}`)
    }
  }

  console.log(`\nPositions-Verteilung (${totalMc} MC):`)
  for (let i = 0; i < 4; i++) {
    const count = positionStats[i] || 0
    const pct = totalMc > 0 ? Math.round((count / totalMc) * 100) : 0
    const bar = '█'.repeat(Math.round(pct / 5)) + '░'.repeat(20 - Math.round(pct / 5))
    console.log(`  ${String.fromCharCode(65 + i)}: ${bar} ${pct}% (${count})`)
  }

  console.log(`\n${'═'.repeat(50)}`)
  console.log(`MC-Linter: ${warnings.length === 0 ? '✅ PASS' : `⚠️  ${warnings.length} Warnungen`}`)
  console.log('═'.repeat(50))
}

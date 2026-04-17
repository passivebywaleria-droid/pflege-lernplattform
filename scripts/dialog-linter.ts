#!/usr/bin/env npx ts-node
/**
 * Dialog-Linter: Prüft Dialog-Steps auf Score-Position-Bias.
 * Eliminiert Kat. D (8 Dialog-Pattern-Fehler — "A = immer Score 3").
 *
 * Usage: npx ts-node scripts/dialog-linter.ts content/le-01/
 */

import * as fs from 'fs'
import * as path from 'path'

interface DialogOption {
  text: string
  score: number
  [key: string]: unknown
}

interface DialogPhase {
  context: string
  options: DialogOption[]
  [key: string]: unknown
}

interface StepLike {
  stepId: string
  stepType: string
  question?: {
    dialogPhases?: DialogPhase[]
    [key: string]: unknown
  }
}

interface DialogWarning {
  stepId: string
  typ: 'POSITION_BIAS' | 'SCORE_RANGE' | 'IDENTISCHE_SCORES' | 'FEHLENDE_PHASES' | 'MINDEST_PHASEN'
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  detail: string
  fix: string
}

export function lintDialogSteps(steps: StepLike[]): { warnings: DialogWarning[]; totalDialogs: number; positionStats: Record<number, number> } {
  const warnings: DialogWarning[] = []
  const bestScorePositions: number[] = []
  let totalDialogs = 0
  let totalPhases = 0

  for (const step of steps) {
    if (step.stepType !== 'dialog') continue

    const phases = step.question?.dialogPhases as DialogPhase[] | undefined
    if (!phases || phases.length === 0) {
      warnings.push({
        stepId: step.stepId,
        typ: 'FEHLENDE_PHASES',
        severity: 'CRITICAL',
        detail: 'Keine dialogPhases gefunden',
        fix: 'dialogPhases[] mit mindestens 3 Phasen hinzufügen',
      })
      continue
    }

    totalDialogs++

    // Mindest-Phasen: Reguläre Dialoge brauchen ≥3 Phasen
    // Brücken-Steps (bk im stepId) dürfen 1-2 Phasen haben
    const isBruecke = step.stepId.includes('-bk-')
    if (!isBruecke && phases.length < 3) {
      warnings.push({
        stepId: step.stepId,
        typ: 'MINDEST_PHASEN',
        severity: 'HIGH',
        detail: `Nur ${phases.length} Phase(n) — reguläre Dialoge brauchen ≥3 Phasen (Szenenverlauf mit Eskalation)`,
        fix: `${3 - phases.length} Phase(n) ergänzen: Situation verschärft sich → Schüler reagiert → Auflösung`,
      })
    }

    // Multi-Phase-Check: Beste Position pro Phase innerhalb eines Dialogs
    const dialogBestPositions: number[] = []

    for (let phaseIdx = 0; phaseIdx < phases.length; phaseIdx++) {
      const phase = phases[phaseIdx]
      if (!phase.options || phase.options.length === 0) continue
      totalPhases++

      // Höchsten Score finden
      let maxScore = -Infinity
      let maxScoreIdx = -1
      const scores: number[] = []

      for (let optIdx = 0; optIdx < phase.options.length; optIdx++) {
        const score = phase.options[optIdx].score
        scores.push(score)
        if (score > maxScore) {
          maxScore = score
          maxScoreIdx = optIdx
        }
      }

      bestScorePositions.push(maxScoreIdx)
      dialogBestPositions.push(maxScoreIdx)

      // Identische Scores prüfen
      const uniqueScores = new Set(scores)
      if (uniqueScores.size === 1 && phase.options.length > 1) {
        warnings.push({
          stepId: step.stepId,
          typ: 'IDENTISCHE_SCORES',
          severity: 'MEDIUM',
          detail: `Phase ${phaseIdx + 1}: Alle Optionen haben Score ${scores[0]}`,
          fix: 'Scores differenzieren (z.B. 1, 2, 3)',
        })
      }

      // Score-Range prüfen (sollte 1-3 oder ähnlich sein)
      if (maxScore === Math.min(...scores)) {
        warnings.push({
          stepId: step.stepId,
          typ: 'SCORE_RANGE',
          severity: 'LOW',
          detail: `Phase ${phaseIdx + 1}: Kein Score-Unterschied (alle = ${maxScore})`,
          fix: 'Unterschiedliche Scores für verschiedene Antwort-Qualitäten vergeben',
        })
      }
    }

    // Multi-Phase-Check: Konsekutive beste Position innerhalb eines Dialogs
    if (dialogBestPositions.length >= 3) {
      let consecutive = 1
      for (let i = 1; i < dialogBestPositions.length; i++) {
        if (dialogBestPositions[i] === dialogBestPositions[i - 1]) {
          consecutive++
          if (consecutive >= 3) {
            warnings.push({
              stepId: step.stepId,
              typ: 'POSITION_BIAS',
              severity: 'MEDIUM',
              detail: `${consecutive}x hintereinander beste Antwort auf Position ${String.fromCharCode(65 + dialogBestPositions[i])}`,
              fix: 'Beste Antwort-Position innerhalb des Dialogs variieren',
            })
            break
          }
        } else {
          consecutive = 1
        }
      }
    }
  }

  // Positions-Bias prüfen
  const positionStats: Record<number, number> = {}
  for (const pos of bestScorePositions) {
    positionStats[pos] = (positionStats[pos] || 0) + 1
  }

  if (totalPhases >= 3) {
    for (const [pos, count] of Object.entries(positionStats)) {
      const pct = (count / totalPhases) * 100
      if (pct > 40) {
        warnings.push({
          stepId: 'GESAMT',
          typ: 'POSITION_BIAS',
          severity: 'HIGH',
          detail: `Position ${String.fromCharCode(65 + parseInt(pos))} hat den besten Score in ${Math.round(pct)}% aller Phasen (${count}/${totalPhases})`,
          fix: `Beste Antwort gleichmäßig auf Positionen verteilen. Aktuell: ${Object.entries(positionStats).map(([p, c]) => `${String.fromCharCode(65 + parseInt(p))}=${c}`).join(', ')}`,
        })
      }
    }
  }

  return { warnings, totalDialogs, positionStats }
}

// --- CLI ---

if (require.main === module) {
  const targetPath = process.argv[2]
  if (!targetPath) {
    console.log('Usage: npx ts-node scripts/dialog-linter.ts <path-to-le-dir>')
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

  const dialogSteps = allSteps.filter(s => s.stepType === 'dialog')
  console.log(`\n🔍 Dialog-Linter: ${dialogSteps.length} Dialog-Steps\n`)

  const { warnings, totalDialogs, positionStats } = lintDialogSteps(allSteps)

  if (warnings.length > 0) {
    const severityOrder = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 }
    const sorted = [...warnings].sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity])
    for (const w of sorted) {
      const icon = w.severity === 'CRITICAL' ? '🔴' : w.severity === 'HIGH' ? '🟠' : w.severity === 'MEDIUM' ? '🟡' : 'ℹ️ '
      console.log(`  ${icon} [${w.severity}] [${w.typ}] ${w.stepId}: ${w.detail}`)
      console.log(`     Fix: ${w.fix}`)
    }
  } else {
    console.log('  ✅ Keine Probleme gefunden')
  }

  console.log(`\nBeste-Score-Position (${totalDialogs} Dialoge):`)
  for (let i = 0; i < 3; i++) {
    const count = positionStats[i] || 0
    const total = Object.values(positionStats).reduce((s, c) => s + c, 0)
    const pct = total > 0 ? Math.round((count / total) * 100) : 0
    const bar = '█'.repeat(Math.round(pct / 5)) + '░'.repeat(20 - Math.round(pct / 5))
    console.log(`  ${String.fromCharCode(65 + i)}: ${bar} ${pct}% (${count})`)
  }

  console.log(`\n${'═'.repeat(50)}`)
  const highCount = warnings.filter(w => w.severity === 'CRITICAL' || w.severity === 'HIGH').length
  console.log(`Dialog-Linter: ${warnings.length === 0 ? '✅ PASS' : `⚠️  ${warnings.length} Warnungen (${highCount} HIGH+)`}`)
  console.log('═'.repeat(50))
}

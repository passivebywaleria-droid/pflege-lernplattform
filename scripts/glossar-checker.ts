#!/usr/bin/env npx ts-node
/**
 * Glossar-Checker: Prüft ob alle Fachbegriffe in Steps auch im Glossar existieren.
 * Eliminiert Kat. H (19 Glossar-Lücken).
 *
 * Checks:
 * 1. Step referenziert Fachbegriff → existiert er im Glossar?
 * 2. Glossar-Eintrag existiert → wird er in mindestens einem Step referenziert?
 * 3. Rohmaterial-Glossar → vollständig in glossar.ts übernommen?
 *
 * Usage: npx ts-node scripts/glossar-checker.ts content/le-01/
 */

import * as fs from 'fs'
import * as path from 'path'

interface GlossarEntry {
  begriff: string
  erklaerung?: string
  erklaerungB1?: string
  uebersetzungAr?: string
  uebersetzungTr?: string
  [key: string]: unknown
}

interface StepLike {
  stepId: string
  stepType: string
  contentC1: { glossarBegriffe?: string[]; body?: string; title?: string }
  contentB1?: { glossarBegriffe?: string[] }
  question?: Record<string, unknown>
}

interface RohmaterialGlossar {
  begriff: string
  erklaerungC1: string
  erklaerungB1: string
  ar: string
  tr: string
}

interface GlossarWarning {
  typ: 'FEHLT_IN_GLOSSAR' | 'UNGENUTZT' | 'FEHLT_AUS_ROHMATERIAL' | 'FEHLENDE_UEBERSETZUNG' | 'LEERE_B1'
  begriff: string
  detail: string
  referenziertIn?: string[]
}

export function checkGlossar(
  glossar: GlossarEntry[],
  steps: StepLike[],
  rohmaterialGlossar?: RohmaterialGlossar[],
): { warnings: GlossarWarning[]; stats: { inGlossar: number; referenziert: number; fehlt: number; ungenutzt: number } } {
  const warnings: GlossarWarning[] = []
  const glossarSet = new Set(glossar.map(g => g.begriff.toLowerCase()))

  // 1. Alle referenzierten Begriffe sammeln
  const referenziert = new Map<string, string[]>() // begriff → stepIds
  for (const step of steps) {
    const begriffe = [
      ...(step.contentC1.glossarBegriffe ?? []),
      ...(step.contentB1?.glossarBegriffe ?? []),
    ]
    for (const b of begriffe) {
      const key = b.toLowerCase()
      if (!referenziert.has(key)) referenziert.set(key, [])
      referenziert.get(key)!.push(step.stepId)
    }
  }

  // 2. Check: Referenziert aber nicht im Glossar
  let fehlt = 0
  for (const [begriff, stepIds] of referenziert) {
    if (!glossarSet.has(begriff)) {
      fehlt++
      warnings.push({
        typ: 'FEHLT_IN_GLOSSAR',
        begriff: begriff,
        detail: `In ${stepIds.length} Steps referenziert, aber nicht im Glossar`,
        referenziertIn: stepIds,
      })
    }
  }

  // 3. Check: Im Glossar aber nie referenziert
  let ungenutzt = 0
  for (const entry of glossar) {
    const key = entry.begriff.toLowerCase()
    if (!referenziert.has(key)) {
      ungenutzt++
      warnings.push({
        typ: 'UNGENUTZT',
        begriff: entry.begriff,
        detail: 'Im Glossar vorhanden, aber in keinem Step referenziert',
      })
    }
  }

  // 4. Check: Rohmaterial-Glossar → glossar.ts
  if (rohmaterialGlossar) {
    for (const rmEntry of rohmaterialGlossar) {
      if (!glossarSet.has(rmEntry.begriff.toLowerCase())) {
        warnings.push({
          typ: 'FEHLT_AUS_ROHMATERIAL',
          begriff: rmEntry.begriff,
          detail: 'Im Rohmaterial-Glossar, aber nicht in glossar.ts',
        })
      }
    }
  }

  // 5. Check: Fehlende Übersetzungen
  for (const entry of glossar) {
    if (!entry.uebersetzungAr && !entry.uebersetzungTr) {
      // Prüfe alternative Feldnamen
      const hasAr = entry.uebersetzungAr || (entry as Record<string, unknown>).ar
      const hasTr = entry.uebersetzungTr || (entry as Record<string, unknown>).tr
      if (!hasAr || !hasTr) {
        warnings.push({
          typ: 'FEHLENDE_UEBERSETZUNG',
          begriff: entry.begriff,
          detail: `AR: ${hasAr ? '✅' : '❌'}, TR: ${hasTr ? '✅' : '❌'}`,
        })
      }
    }
  }

  // 6. Check: Leere B1-Erklärung
  for (const entry of glossar) {
    if (!entry.erklaerungB1 || entry.erklaerungB1.trim().length < 10) {
      warnings.push({
        typ: 'LEERE_B1',
        begriff: entry.begriff,
        detail: `B1-Erklärung fehlt oder zu kurz (${entry.erklaerungB1?.length ?? 0} Zeichen)`,
      })
    }
  }

  return {
    warnings,
    stats: {
      inGlossar: glossar.length,
      referenziert: referenziert.size,
      fehlt,
      ungenutzt,
    },
  }
}

// --- CLI ---

if (require.main === module) {
  const targetPath = process.argv[2]
  if (!targetPath) {
    console.log('Usage: npx ts-node scripts/glossar-checker.ts <path-to-le-dir>')
    process.exit(1)
  }


  const absPath = path.resolve(targetPath)

  // Glossar laden
  const glossarPath = path.join(absPath, 'glossar.ts')
  let glossar: GlossarEntry[] = []
  try {
    const glossarMod = require(glossarPath)
    // Naming-Standard 2026-04-16: `LE{NN}_GLOSSAR`. Fallback auf alten `GLOSSAR`-Export.
    const glossarKey = Object.keys(glossarMod).find((k) => k.endsWith("_GLOSSAR")) ?? "GLOSSAR"
    glossar = glossarMod[glossarKey] || []
  } catch (e) {
    console.error(`❌ ${glossarPath}: ${(e as Error).message}`)
    process.exit(1)
  }

  // Steps laden
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

  // Rohmaterial-JSON laden (optional)
  let rohmaterialGlossar: RohmaterialGlossar[] | undefined
  const jsonPath = path.join(absPath, 'rohmaterial.json')
  if (fs.existsSync(jsonPath)) {
    try {
      const rm = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
      rohmaterialGlossar = rm.glossar
    } catch { /* optional */ }
  }

  console.log(`\n🔍 Glossar-Checker: ${glossar.length} Einträge, ${allSteps.length} Steps\n`)

  const { warnings, stats } = checkGlossar(glossar, allSteps, rohmaterialGlossar)

  console.log(`  Glossar: ${stats.inGlossar} Einträge`)
  console.log(`  Referenziert: ${stats.referenziert} verschiedene Begriffe`)
  console.log(`  Fehlen im Glossar: ${stats.fehlt}`)
  console.log(`  Ungenutzt im Glossar: ${stats.ungenutzt}\n`)

  const grouped: Record<string, GlossarWarning[]> = {}
  for (const w of warnings) {
    if (!grouped[w.typ]) grouped[w.typ] = []
    grouped[w.typ].push(w)
  }

  for (const [typ, warns] of Object.entries(grouped)) {
    const icon = typ === 'FEHLT_IN_GLOSSAR' ? '❌' : typ === 'FEHLT_AUS_ROHMATERIAL' ? '🔴' : '⚠️'
    console.log(`${icon} ${typ} (${warns.length}):`)
    for (const w of warns) {
      console.log(`  - ${w.begriff}: ${w.detail}`)
    }
    console.log('')
  }

  console.log('═'.repeat(50))
  console.log(`Glossar-Checker: ${warnings.filter(w => w.typ === 'FEHLT_IN_GLOSSAR').length === 0 ? '✅ PASS' : `❌ ${stats.fehlt} fehlende Einträge`}`)
  console.log('═'.repeat(50))
}

#!/usr/bin/env npx tsx
/**
 * Pre-Live-Gate: 7-Punkt-Checkliste vor Go-Live.
 * ALLE Checks müssen bestanden sein bevor eine LE live gehen darf.
 *
 * Usage: npx tsx scripts/pre-live-check.ts le-01
 */

import * as fs from 'fs'
import * as path from 'path'

interface CheckResult {
  name: string
  passed: boolean
  detail: string
}

function preLiveCheck(leId: string): boolean {
  const contentDir = path.resolve(__dirname, '..', 'content')
  const leDir = path.join(contentDir, leId)

  if (!fs.existsSync(leDir)) {
    console.error(`❌ ${leDir} nicht gefunden`)
    return false
  }

  console.log(`\n${'═'.repeat(55)}`)
  console.log(`  PRE-LIVE-GATE: ${leId.toUpperCase()}`)
  console.log('═'.repeat(55))

  const checks: CheckResult[] = []

  // 1. rohmaterial.json existiert
  const jsonPath = path.join(leDir, 'rohmaterial.json')
  if (fs.existsSync(jsonPath)) {
    try {
      JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
      checks.push({ name: 'Rohmaterial-JSON', passed: true, detail: 'Vorhanden + valides JSON' })
    } catch {
      checks.push({ name: 'Rohmaterial-JSON', passed: false, detail: 'Parse-Fehler' })
    }
  } else {
    checks.push({ name: 'Rohmaterial-JSON', passed: false, detail: 'Datei fehlt' })
  }

  // 2. Dozentin-Freigabe Rohmaterial
  let rohmaterial: Record<string, unknown> | null = null
  if (fs.existsSync(jsonPath)) {
    try { rohmaterial = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) } catch { /* handled above */ }
  }
  const freigabe = rohmaterial?.dozentinFreigabeRohmaterial === true
  checks.push({
    name: 'Dozentin-Freigabe Rohmaterial',
    passed: freigabe,
    detail: freigabe ? `✅ ${rohmaterial?.dozentinFreigabeDatum ?? ''}` : 'NICHT freigegeben',
  })

  // 3. Steps vorhanden (≥150)
  const stepFiles = fs.readdirSync(leDir).filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))
  let totalSteps = 0
  for (const file of stepFiles) {
    try {
      const mod = require(path.join(leDir, file))
      const stepsKey = Object.keys(mod).find(k => k.startsWith('STEPS_'))
      if (stepsKey) totalSteps += (mod[stepsKey] as unknown[]).length
    } catch { /* skip */ }
  }
  checks.push({
    name: 'Mindest-Steps (≥100)',
    passed: totalSteps >= 100,
    detail: `${totalSteps} Steps in ${stepFiles.length} Sessions`,
  })

  // 4. Glossar vorhanden
  const glossarPath = path.join(leDir, 'glossar.ts')
  const hasGlossar = fs.existsSync(glossarPath)
  checks.push({
    name: 'Glossar vorhanden',
    passed: hasGlossar,
    detail: hasGlossar ? 'glossar.ts existiert' : 'glossar.ts fehlt',
  })

  // 5. Dozentin-Checkliste vorhanden + Freigabe-Marker
  const checklistePath = path.join(leDir, 'dozentin-checkliste.md')
  let stepsFreigabe = false
  if (fs.existsSync(checklistePath)) {
    const content = fs.readFileSync(checklistePath, 'utf-8')
    stepsFreigabe = content.includes('[x]') || content.includes('[X]')
    checks.push({
      name: 'Dozentin-Checkliste Steps',
      passed: stepsFreigabe,
      detail: stepsFreigabe ? 'Freigabe-Checkboxen gesetzt' : 'Keine Freigabe-Checkboxen angekreuzt',
    })
  } else {
    checks.push({ name: 'Dozentin-Checkliste Steps', passed: false, detail: 'Datei fehlt' })
  }

  // 6. Feedback-Regeln aktuell
  const feedbackPath = path.join(contentDir, '_generator-feedback.md')
  const hasFeedback = fs.existsSync(feedbackPath)
  checks.push({
    name: 'Generator-Feedback existiert',
    passed: hasFeedback,
    detail: hasFeedback ? '_generator-feedback.md vorhanden' : 'Datei fehlt',
  })

  // 7. Content-Loader Eintrag
  const loaderPath = path.join(contentDir, 'content-loader.ts')
  let inLoader = false
  if (fs.existsSync(loaderPath)) {
    const loaderContent = fs.readFileSync(loaderPath, 'utf-8')
    inLoader = loaderContent.includes(`'${leId}'`) || loaderContent.includes(`"${leId}"`)
  }
  checks.push({
    name: 'Content-Loader Eintrag',
    passed: inLoader,
    detail: inLoader ? `${leId} in content-loader.ts` : `${leId} NICHT in content-loader.ts`,
  })

  // Output
  console.log('')
  let allPassed = true
  for (const check of checks) {
    const icon = check.passed ? '✅' : '❌'
    console.log(`  ${icon} ${check.name.padEnd(32)} ${check.detail}`)
    if (!check.passed) allPassed = false
  }

  console.log(`\n${'═'.repeat(55)}`)
  if (allPassed) {
    console.log(`  🟢 READY — ${leId.toUpperCase()} darf live gehen`)
  } else {
    const blockers = checks.filter(c => !c.passed)
    console.log(`  🔴 BLOCKED — ${blockers.length} Checks nicht bestanden:`)
    for (const b of blockers) {
      console.log(`     - ${b.name}: ${b.detail}`)
    }
  }
  console.log('═'.repeat(55))

  return allPassed
}

// --- Entry Point ---

const target = process.argv[2]
if (!target) {
  console.log('Usage: npx tsx scripts/pre-live-check.ts <le-id>')
  process.exit(1)
}

process.exit(preLiveCheck(target) ? 0 : 1)

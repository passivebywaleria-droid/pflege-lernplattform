#!/usr/bin/env npx ts-node
/**
 * Unified Validator: Führt alle 5 Checks aus und generiert Dozentin-Checkliste.
 *
 * Usage: npx ts-node scripts/validate-le.ts le-01
 *        npx ts-node scripts/validate-le.ts le-06
 *        npx ts-node scripts/validate-le.ts --all
 */

import * as fs from 'fs'
import * as path from 'path'

// Import checkers
import { validateSteps, groupBySeverity } from './content-schema'
import type { Severity } from './content-schema'
import { checkFakten, checkLeitfaelle } from './fact-checker'
import { lintMcSteps } from './mc-linter'
import { lintDialogSteps } from './dialog-linter'
import { checkGlossar } from './glossar-checker'

// --- Types ---

interface StepLike {
  stepId: string
  stepType: string
  contentC1: { title: string; body: string; glossarBegriffe?: string[] }
  contentB1?: { title: string; body: string; glossarBegriffe?: string[] }
  question?: Record<string, unknown>
  [key: string]: unknown
}

interface GlossarEntry {
  begriff: string
  [key: string]: unknown
}

interface Rohmaterial {
  leId: string
  ceId: string
  titel: string
  kernfakten: { id: string; text: string; schluesselwoerter: string[]; zahlen: { wert: string; kontext: string }[]; namen: { name: string; rolle: string }[]; bloomLevel: number; kompetenzbereich: string; quelleId: string; quelleSeite: string; dozentinGeprueft: boolean }[]
  glossar: { begriff: string; erklaerungC1: string; erklaerungB1: string; ar: string; tr: string }[]
  leitfaelle: { patientId: string; name: string; alter: number; geschlecht: string; diagnose: string; setting: string; kernproblem: string; szenen: { szeneId: string; kontext: string; pflegefrage: string }[] }[]
  quellen?: { id: string; titel: string; jahr: number; seiten?: string }[]
  dozentinFreigabeRohmaterial: boolean
  dozentinFreigabeDatum?: string
}

// --- Loader ---

function loadSteps(leDir: string): StepLike[] {
  const stepFiles = fs.readdirSync(leDir)
    .filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))
    .sort() // Deterministische Reihenfolge
  const allSteps: StepLike[] = []
  for (const file of stepFiles) {
    try {
      // Jede Datei einzeln laden und sofort zum Array pushen
      // Bei großen LEs verhindert dies dass alle Module gleichzeitig im require-Cache liegen
      const filePath = path.join(leDir, file)
      const mod = require(filePath)
      // Naming-Standard 2026-04-16: `LE{NN}_STEPS_S{N}`. Fallback auf `STEPS_*`/`STEPS_LE{NN}_S{N}`.
      const stepsKey = Object.keys(mod).find((k) => /(_STEPS_S\d|^STEPS_)/.test(k))
      if (stepsKey) allSteps.push(...(mod[stepsKey] as StepLike[]))
      // Cache freigeben nach Verarbeitung
      delete require.cache[require.resolve(filePath)]
    } catch (e) {
      console.error(`  ❌ ${file}: ${(e as Error).message}`)
    }
  }
  return allSteps
}

function loadGlossar(leDir: string): GlossarEntry[] {
  try {
    const mod = require(path.join(leDir, 'glossar.ts'))
    // Naming-Standard 2026-04-16: `LE{NN}_GLOSSAR`. Fallback auf alten `GLOSSAR`-Export.
    const key = Object.keys(mod).find((k) => k.endsWith('_GLOSSAR')) ?? 'GLOSSAR'
    return mod[key] || []
  } catch {
    return []
  }
}

// --- Dozentin-Checkliste Generator ---

function generateCheckliste(
  leId: string,
  rohmaterial: Rohmaterial,
  steps: StepLike[],
  faktResults: { faktId: string; status: string; detail: string; matchedStepIds: string[] }[],
  lfResults: { patientId: string; name: string; status: string; detail: string }[],
  schemaErrors: number,
  mcWarnings: number,
  dialogWarnings: number,
  glossarFehlt: number,
): string {
  const now = new Date().toISOString().split('T')[0]

  let md = `# Dozentin-Checkliste: ${leId.toUpperCase()}\n\n`
  md += `Generiert: ${now}\n`
  md += `Rohmaterial freigegeben: ${rohmaterial.dozentinFreigabeRohmaterial ? `✅ ${rohmaterial.dozentinFreigabeDatum ?? ''}` : '❌ NOCH NICHT'}\n`
  md += `Validator: Schema ${schemaErrors}, MC ${mcWarnings}, Dialog ${dialogWarnings}, Glossar ${glossarFehlt} Warnungen\n\n`

  // A) Kernfakt-Abgleich
  md += `## A) Kernfakt-Abgleich (${rohmaterial.kernfakten.length} Fakten)\n\n`
  md += `Anweisung: Für JEDEN Fakt prüfen ob der Step-Text korrekt ist.\n`
  md += `Bei Abweichung: ❌ ankreuzen + Korrektur in Spalte "Anmerkung".\n\n`
  md += `| # | Kernfakt (aus Rohmaterial) | Step-IDs | Status | ✅/❌ | Anmerkung |\n`
  md += `|---|--------------------------|----------|--------|-------|----------|\n`

  for (const fakt of rohmaterial.kernfakten) {
    const result = faktResults.find(r => r.faktId === fakt.id)
    const status = result?.status ?? 'UNKNOWN'
    const stepIds = result?.matchedStepIds?.slice(0, 3).join(', ') ?? '—'
    const icon = status === 'COVERED' ? '✅' : status === 'PARTIAL' ? '⚠️' : status === 'MISMATCH' ? '🔴' : '❌'
    const faktText = fakt.text.length > 80 ? fakt.text.substring(0, 80) + '...' : fakt.text
    md += `| ${fakt.id} | ${faktText} | ${stepIds} | ${icon} ${status} | ☐ | |\n`
  }

  // B) Leitfall-Check
  md += `\n## B) Leitfall-Check (${rohmaterial.leitfaelle.length} Fälle)\n\n`
  md += `| Patient | Name | Alter | Diagnose | Status | ✅/❌ | Anmerkung |\n`
  md += `|---------|------|-------|----------|--------|-------|----------|\n`

  for (const lf of rohmaterial.leitfaelle) {
    const result = lfResults.find(r => r.patientId === lf.patientId)
    const status = result?.status ?? 'UNKNOWN'
    const icon = status === 'COVERED' ? '✅' : status === 'MISMATCH' ? '🔴' : '❌'
    md += `| ${lf.patientId} | ${lf.name} | ${lf.alter} | ${lf.diagnose.substring(0, 40)} | ${icon} ${result?.detail ?? ''} | ☐ | |\n`
  }

  // C) Auto-Flags (MC + Dialog + Glossar)
  md += `\n## C) Automatische Warnungen\n\n`
  md += `| Typ | Anzahl | Details |\n`
  md += `|-----|--------|--------|\n`
  md += `| Schema-Fehler | ${schemaErrors} | ${schemaErrors > 0 ? 'Renderer-Bugs — MUSS vor Live gefixt werden' : '✅'} |\n`
  md += `| MC-Bias | ${mcWarnings} | ${mcWarnings > 0 ? 'Antwortlänge/Position ungleich verteilt' : '✅'} |\n`
  md += `| Dialog-Bias | ${dialogWarnings} | ${dialogWarnings > 0 ? 'Beste Antwort immer auf gleicher Position' : '✅'} |\n`
  md += `| Glossar-Lücken | ${glossarFehlt} | ${glossarFehlt > 0 ? 'Fachbegriffe in Steps ohne Glossar-Eintrag' : '✅'} |\n`

  // D) Freigabe
  md += `\n## D) Freigabe\n\n`
  md += `- [ ] Alle MISMATCH/MISSING Fakten geprüft und korrigiert (Abschnitt A)\n`
  md += `- [ ] Alle Leitfälle korrekt (Abschnitt B)\n`
  md += `- [ ] Automatische Warnungen bearbeitet (Abschnitt C)\n`
  md += `- [ ] **FREIGABE**: ${leId.toUpperCase()} ist inhaltlich korrekt und darf live gehen\n\n`
  md += `Unterschrift: _________________ Datum: _____________\n`

  // E) Feedback für Generator
  md += `\n## E) Feedback für Generator (PFLICHT bei Korrekturen)\n\n`
  md += `Wenn du etwas korrigiert hast, schreibe hier WAS und WARUM:\n\n`
  md += `| Was war falsch | Warum | Neue Regel für Generator |\n`
  md += `|----------------|-------|--------------------------|\n`
  md += `| | | |\n`
  md += `| | | |\n`
  md += `| | | |\n`

  return md
}

// --- Rohmaterial-Checkliste ---

function generateRohmaterialCheckliste(leId: string, rohmaterial: Rohmaterial): string {
  const now = new Date().toISOString().split('T')[0]

  let md = `# Rohmaterial-Prüfung: ${leId.toUpperCase()}\n\n`
  md += `Generiert: ${now}\n\n`

  md += `## Kernfakten (${rohmaterial.kernfakten.length} Stück)\n\n`
  md += `| # | Fakt (gekürzt) | Quelle | Seite | Aktuell? | ✅/❌ |\n`
  md += `|---|---------------|--------|-------|----------|-------|\n`

  for (const fakt of rohmaterial.kernfakten) {
    const quelleInfo = rohmaterial.quellen?.find(q => q.id === fakt.quelleId)
    const quelleTitel = quelleInfo?.titel ?? fakt.quelleId
    const faktText = fakt.text.length > 60 ? fakt.text.substring(0, 60) + '...' : fakt.text
    md += `| ${fakt.id} | ${faktText} | ${quelleTitel} | ${fakt.quelleSeite} | ☐ | ☐ |\n`
  }

  md += `\n## Leitfälle (${rohmaterial.leitfaelle.length} Stück)\n\n`
  md += `| Patient | Name | Alter | Diagnose | Realistisch? | ✅/❌ |\n`
  md += `|---------|------|-------|----------|--------------|-------|\n`

  for (const lf of rohmaterial.leitfaelle) {
    md += `| ${lf.patientId} | ${lf.name} | ${lf.alter} | ${lf.diagnose.substring(0, 40)} | ☐ | ☐ |\n`
  }

  md += `\n## Freigabe Rohmaterial\n\n`
  md += `- [ ] Alle Fakten geprüft\n`
  md += `- [ ] Alle Quellen aktuell (keine veralteten Leitlinien)\n`
  md += `- [ ] Alle Leitfälle realistisch\n`
  md += `- [ ] **FREIGABE Rohmaterial** — Darf generiert werden\n\n`
  md += `Unterschrift: _________________ Datum: _____________\n`

  return md
}

// --- Track + Lernziel Checks ---

interface TrackWarning {
  typ: 'TRACK_RATIO' | 'LERNZIEL_MISSING'
  detail: string
}

function checkTrackVerteilung(steps: StepLike[]): TrackWarning[] {
  const warnings: TrackWarning[] = []
  const basis = steps.filter(s => (s as Record<string, unknown>).track === 'basis').length
  const vertiefung = steps.filter(s => (s as Record<string, unknown>).track === 'vertiefung').length
  const withTrack = basis + vertiefung

  if (withTrack === 0) return warnings

  const basisPct = (basis / withTrack) * 100
  if (basisPct < 55) {
    warnings.push({
      typ: 'TRACK_RATIO',
      detail: `Zu wenig basis: ${basis}/${withTrack} (${Math.round(basisPct)}%, soll ≥60%)`,
    })
  }
  if (basisPct > 85) {
    warnings.push({
      typ: 'TRACK_RATIO',
      detail: `Zu wenig vertiefung: ${vertiefung}/${withTrack} (${Math.round(100 - basisPct)}%, soll ≥15%)`,
    })
  }
  return warnings
}

// --- Bloom-Progression + B5/B6-Quote ---

interface BloomWarning {
  typ: 'BLOOM_SESSION_RANGE' | 'BLOOM_PROGRESSION' | 'BLOOM_B56_QUOTA'
  detail: string
}

function checkBloomProgression(leDir: string): BloomWarning[] {
  const warnings: BloomWarning[] = []

  // Lade Steps pro Session separat um Progression zu prüfen
  const stepFiles = fs.readdirSync(leDir)
    .filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))
    .sort()

  if (stepFiles.length < 2) return warnings

  const sessionBlooms: { session: string; levels: number[]; avg: number }[] = []
  let allBlooms: number[] = []

  for (const file of stepFiles) {
    try {
      const filePath = path.join(leDir, file)
      const mod = require(filePath)
      const stepsKey = Object.keys(mod).find(k => k.startsWith('STEPS_'))
      if (!stepsKey) continue
      const steps = mod[stepsKey] as StepLike[]
      const blooms = steps
        .map(s => (s as Record<string, unknown>).bloomLevel as number | undefined)
        .filter((b): b is number => b != null && b >= 1 && b <= 6)

      const avg = blooms.length > 0 ? blooms.reduce((a, b) => a + b, 0) / blooms.length : 0
      sessionBlooms.push({ session: file.replace('.ts', ''), levels: blooms, avg })
      allBlooms = allBlooms.concat(blooms)

      delete require.cache[require.resolve(filePath)]
    } catch { /* skip */ }
  }

  if (sessionBlooms.length < 2) return warnings

  // Check 1: S1 sollte max Bloom 3 haben (B1-B3)
  const s1 = sessionBlooms[0]
  const s1Max = Math.max(...s1.levels)
  if (s1Max > 3) {
    warnings.push({
      typ: 'BLOOM_SESSION_RANGE',
      detail: `${s1.session}: Max Bloom ${s1Max} (soll ≤3 für S1)`,
    })
  }

  // Check 2: Letzte Session sollte min Bloom 4 haben
  const sLast = sessionBlooms[sessionBlooms.length - 1]
  const sLastAvg = sLast.avg
  if (sLastAvg < 3.5) {
    warnings.push({
      typ: 'BLOOM_SESSION_RANGE',
      detail: `${sLast.session}: Ø Bloom ${sLastAvg.toFixed(1)} (soll ≥3.5 für letzte Session, Ziel: B4-B6)`,
    })
  }

  // Check 3: Bloom-Progression (letzte Session Ø > erste Session Ø)
  if (sLast.avg <= s1.avg) {
    warnings.push({
      typ: 'BLOOM_PROGRESSION',
      detail: `Keine Bloom-Steigerung: ${s1.session} Ø${s1.avg.toFixed(1)} → ${sLast.session} Ø${sLast.avg.toFixed(1)}`,
    })
  }

  // Check 4: B5+B6 Mindestquote (≥5% über alle Sessions)
  const totalSteps = allBlooms.length
  const b56Count = allBlooms.filter(b => b >= 5).length
  const b56Pct = totalSteps > 0 ? (b56Count / totalSteps) * 100 : 0
  if (b56Pct < 5 && totalSteps > 50) {
    warnings.push({
      typ: 'BLOOM_B56_QUOTA',
      detail: `B5+B6 nur ${b56Count}/${totalSteps} Steps (${b56Pct.toFixed(1)}%, soll ≥5%)`,
    })
  }

  return warnings
}

function checkLernzielAbdeckung(steps: StepLike[], rohmaterial: Rohmaterial): TrackWarning[] {
  const warnings: TrackWarning[] = []

  // Alle Lernziele aus Steps sammeln
  const stepLernziele = new Set<string>()
  for (const step of steps) {
    const lz = (step as Record<string, unknown>).lernziel as string | undefined
    if (lz) stepLernziele.add(lz)
  }

  // Alle Kompetenzbereiche aus Rohmaterial-Kernfakten extrahieren
  const rohmaterialKBs = new Set<string>()
  for (const fakt of rohmaterial.kernfakten) {
    if (fakt.kompetenzbereich) rohmaterialKBs.add(fakt.kompetenzbereich)
  }

  // Prüfe ob jeder KB mindestens 1 Step hat
  for (const kb of rohmaterialKBs) {
    const hasStep = steps.some(s => {
      const lz = (s as Record<string, unknown>).lernziel as string | undefined
      return lz && lz.includes(kb.replace('KB-', ''))
    })
    if (!hasStep) {
      warnings.push({
        typ: 'LERNZIEL_MISSING',
        detail: `Kompetenzbereich ${kb} hat keine zugeordneten Steps`,
      })
    }
  }

  return warnings
}

// --- Naming-Standard Check (V01-V03, V10) ---

interface NamingResult {
  pass: boolean
  errors: string[]
  warnings: string[]
}

function checkNamingStandard(leId: string, leDir: string, contentDir: string): NamingResult {
  const errors: string[] = []
  const warnings: string[] = []
  const prefix = leId.replace('-', '').toUpperCase() // "LE01"

  // Manifest-Check (V10): LE muss im Manifest registriert sein
  const manifestPath = path.join(contentDir, '_manifest.ts')
  let sessions: string[] = ['s1', 's2', 's3', 's4', 's5', 's6']
  let manifestStatus = ''
  if (!fs.existsSync(manifestPath)) {
    errors.push(`V10: content/_manifest.ts fehlt`)
  } else {
    const manifestSrc = fs.readFileSync(manifestPath, 'utf-8')
    const reLeId = new RegExp(`leId:\\s*["']${leId}["']`)
    if (!reLeId.test(manifestSrc)) {
      errors.push(`V10: ${leId} nicht im LE_MANIFEST registriert`)
    } else {
      // Sessions aus Manifest extrahieren
      const block = manifestSrc.match(new RegExp(`leId:\\s*["']${leId}["'][^}]*sessions:\\s*\\[([^\\]]*)\\]`, 's'))
      if (block) {
        sessions = (block[1].match(/["']s\d+["']/g) || []).map((s) => s.replace(/['"]/g, ''))
      }
      const statusMatch = manifestSrc.match(new RegExp(`leId:\\s*["']${leId}["'][^}]*status:\\s*["']([^"']+)["']`, 's'))
      if (statusMatch) manifestStatus = statusMatch[1]
    }
  }

  // V01: Alle Pflicht-Dateien
  const stepFiles = sessions.map((s) => `steps-${s}.ts`)
  const requiredFiles = [
    'metadata.ts',
    'artikel.ts',
    'glossar.ts',
    'karteikarten.ts',
    'lern-snack.ts',
    ...stepFiles,
    'fallverlaeufe.ts',
    'praxis.ts',
    'pruefungsfall.ts',
    'index.ts',
  ]
  const missing: string[] = []
  for (const f of requiredFiles) {
    if (!fs.existsSync(path.join(leDir, f))) missing.push(f)
  }
  if (missing.length > 0) {
    errors.push(`V01: Fehlende Pflicht-Dateien: ${missing.join(', ')}`)
  }

  // V02 + V03: Export-Namen prüfen
  const expectedExports: Record<string, string[]> = {
    'metadata.ts': [`${prefix}_METADATA`],
    'artikel.ts': [`${prefix}_ARTIKEL`],
    'glossar.ts': [`${prefix}_GLOSSAR`],
    'karteikarten.ts': [`${prefix}_KARTEIKARTEN`],
    'lern-snack.ts': [`${prefix}_LERN_SNACK`],
    'fallverlaeufe.ts': [`${prefix}_FALLVERLAEUFE`],
    'praxis.ts': [`${prefix}_PRAXIS`],
    'pruefungsfall.ts': [`${prefix}_PRUEFUNGSFALL`],
  }
  for (const s of sessions) {
    expectedExports[`steps-${s}.ts`] = [`${prefix}_STEPS_${s.toUpperCase()}`]
  }

  for (const [file, exports] of Object.entries(expectedExports)) {
    const fpath = path.join(leDir, file)
    if (!fs.existsSync(fpath)) continue
    const src = fs.readFileSync(fpath, 'utf-8')
    for (const exp of exports) {
      const re = new RegExp(`export\\s+const\\s+${exp}\\b`)
      if (!re.test(src)) {
        errors.push(`V03: ${file} hat keinen \`export const ${exp}\``)
      }
    }
  }

  // V02: index.ts re-exportiert alle
  const indexPath = path.join(leDir, 'index.ts')
  if (fs.existsSync(indexPath)) {
    const indexSrc = fs.readFileSync(indexPath, 'utf-8')
    const allExpected = Object.values(expectedExports).flat()
    const missingFromBarrel = allExpected.filter((e) => !indexSrc.includes(e))
    if (missingFromBarrel.length > 0) {
      errors.push(`V02: index.ts re-exportiert nicht: ${missingFromBarrel.join(', ')}`)
    }
  }

  if (manifestStatus) {
    warnings.push(`Manifest-Status: ${manifestStatus}`)
  }

  return { pass: errors.length === 0, errors, warnings }
}

// --- Main ---

function validateLE(leId: string): boolean {
  const contentDir = path.resolve(__dirname, '..', 'content')
  const leDir = path.join(contentDir, leId)

  if (!fs.existsSync(leDir)) {
    console.error(`❌ ${leDir} nicht gefunden`)
    return false
  }

  console.log(`\n${'═'.repeat(55)}`)
  console.log(`  VALIDIERUNG: ${leId.toUpperCase()}`)
  console.log('═'.repeat(55))

  // Naming-Standard (K.O.) — V01, V02, V03, V10
  const naming = checkNamingStandard(leId, leDir, contentDir)
  const namingIcon = naming.pass ? '✅' : '❌'
  console.log(`\nN. Naming-Standard ........... ${namingIcon} (${naming.errors.length} Fehler, ${naming.warnings.length} Hinweise)`)
  for (const e of naming.errors) console.log(`   ❌ ${e}`)
  for (const w of naming.warnings) console.log(`   ℹ️  ${w}`)
  if (!naming.pass) {
    console.log(`\n${'═'.repeat(55)}`)
    console.log(`  ERGEBNIS: ❌ Naming-Standard FAIL — siehe specs/LE-SCHABLONE.md`)
    console.log('═'.repeat(55))
    return false
  }

  // 0. Rohmaterial-JSON prüfen
  const jsonPath = path.join(leDir, 'rohmaterial.json')
  let rohmaterial: Rohmaterial | null = null
  let hasFaktCheck = false

  if (fs.existsSync(jsonPath)) {
    try {
      rohmaterial = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
      console.log(`\n0. Rohmaterial-JSON .......... ✅ Vorhanden`)
      if (rohmaterial!.dozentinFreigabeRohmaterial) {
        console.log(`   Dozentin-Freigabe ......... ✅ ${rohmaterial!.dozentinFreigabeDatum ?? ''}`)
      } else {
        console.log(`   Dozentin-Freigabe ......... ⚠️  NOCH NICHT`)
      }
      hasFaktCheck = true
    } catch (e) {
      console.log(`\n0. Rohmaterial-JSON .......... ❌ Parse-Fehler: ${(e as Error).message}`)
    }
  } else {
    console.log(`\n0. Rohmaterial-JSON .......... ⚠️  Nicht vorhanden (Fakten-Check deaktiviert)`)
  }

  // Steps + Glossar laden
  const steps = loadSteps(leDir)
  const glossar = loadGlossar(leDir)
  console.log(`   Steps geladen ............. ${steps.length}`)
  console.log(`   Glossar geladen ........... ${glossar.length}`)

  if (steps.length === 0) {
    console.log(`\n❌ Keine Steps gefunden. Abbruch.`)
    return false
  }

  // 1. Schema-Check (mit Severity)
  const schemaResult = validateSteps(steps)
  const grouped = groupBySeverity(schemaResult.errors)
  const critCount = grouped.CRITICAL.length
  const highCount = grouped.HIGH.length
  const medCount = grouped.MEDIUM.length
  const lowCount = grouped.LOW.length
  const schemaIcon = schemaResult.errors.length === 0 ? '✅' : critCount > 0 ? '❌' : '⚠️'
  console.log(`\n1. Schema-Check .............. ${schemaResult.passed}/${schemaResult.total} ${schemaIcon} (${schemaResult.errors.length} Fehler)`)
  if (schemaResult.errors.length > 0) {
    if (critCount > 0) console.log(`   ❌ CRITICAL (${critCount}): ${grouped.CRITICAL.slice(0, 3).map(e => `${e.stepId}:${e.feld}`).join(', ')}${critCount > 3 ? ` +${critCount - 3}` : ''}`)
    if (highCount > 0) console.log(`   ⚠️  HIGH (${highCount}): ${grouped.HIGH.slice(0, 3).map(e => `${e.stepId}:${e.feld}`).join(', ')}${highCount > 3 ? ` +${highCount - 3}` : ''}`)
    if (medCount > 0) console.log(`   📋 MEDIUM (${medCount}): B1≈C1, Track, Modus, Lernziel`)
    if (lowCount > 0) console.log(`   ℹ️  LOW (${lowCount}): Tag, Satzlänge`)
  }

  // 2. Fakten-Check (nur wenn JSON vorhanden)
  let faktResults: { faktId: string; status: string; detail: string; matchedStepIds: string[] }[] = []
  let lfResults: { patientId: string; name: string; status: string; detail: string }[] = []
  if (hasFaktCheck && rohmaterial) {
    faktResults = checkFakten(rohmaterial as never, steps as never)
    lfResults = checkLeitfaelle(rohmaterial as never, steps as never)
    const covered = faktResults.filter(r => r.status === 'COVERED').length
    const missing = faktResults.filter(r => r.status === 'MISSING').length
    const mismatch = faktResults.filter(r => r.status === 'MISMATCH').length
    const partial = faktResults.filter(r => r.status === 'PARTIAL').length
    const total = rohmaterial.kernfakten.length
    const icon = missing + mismatch === 0 ? '✅' : '⚠️'
    console.log(`2. Fakten-Abdeckung .......... ${covered}/${total} ${icon} (${missing} MISSING, ${mismatch} MISMATCH, ${partial} PARTIAL)`)
  } else {
    console.log(`2. Fakten-Abdeckung .......... ⏭️  Übersprungen (kein JSON)`)
  }

  // 3. MC-Bias
  const mcResult = lintMcSteps(steps as never)
  const mcIcon = mcResult.warnings.length === 0 ? '✅' : '⚠️'
  console.log(`3. MC-Bias ................... ${mcResult.totalMc} MC ${mcIcon} (${mcResult.warnings.length} Warnungen)`)

  // 4. Dialog-Bias
  const dialogResult = lintDialogSteps(steps as never)
  const dialogIcon = dialogResult.warnings.length === 0 ? '✅' : '⚠️'
  console.log(`4. Dialog-Bias ............... ${dialogResult.totalDialogs} Dialoge ${dialogIcon} (${dialogResult.warnings.length} Warnungen)`)

  // 5. Glossar
  const glossarResult = checkGlossar(glossar as never, steps as never, rohmaterial?.glossar as never)
  const glossarIcon = glossarResult.stats.fehlt === 0 ? '✅' : '⚠️'
  console.log(`5. Glossar-Vollständigkeit ... ${glossarResult.stats.inGlossar} Einträge ${glossarIcon} (${glossarResult.stats.fehlt} FEHLT)`)

  // 6. Track-Verteilung
  const trackWarnings = checkTrackVerteilung(steps)
  const trackIcon = trackWarnings.length === 0 ? '✅' : '⚠️'
  const basisCount = steps.filter(s => (s as Record<string, unknown>).track === 'basis').length
  const vertCount = steps.filter(s => (s as Record<string, unknown>).track === 'vertiefung').length
  console.log(`6. Track-Verteilung .......... ${basisCount}b/${vertCount}v ${trackIcon} (${trackWarnings.length} Warnungen)`)
  for (const w of trackWarnings) console.log(`   ⚠️  ${w.detail}`)

  // 7. Lernziel-Abdeckung
  let lernzielWarnings: TrackWarning[] = []
  if (rohmaterial) {
    lernzielWarnings = checkLernzielAbdeckung(steps, rohmaterial)
    const lzIcon = lernzielWarnings.length === 0 ? '✅' : '⚠️'
    console.log(`7. Lernziel-Abdeckung ........ ${lzIcon} (${lernzielWarnings.length} Warnungen)`)
    for (const w of lernzielWarnings) console.log(`   ⚠️  ${w.detail}`)
  }

  // 8. Bloom-Progression + B5/B6-Quote
  const bloomWarnings = checkBloomProgression(leDir)
  const bloomIcon = bloomWarnings.length === 0 ? '✅' : '⚠️'
  console.log(`8. Bloom-Progression ......... ${bloomIcon} (${bloomWarnings.length} Warnungen)`)
  for (const w of bloomWarnings) console.log(`   ⚠️  ${w.detail}`)

  // 9. Dozentin-Checklisten generieren
  if (rohmaterial) {
    // Steps-Checkliste
    const checkliste = generateCheckliste(
      leId, rohmaterial, steps as never,
      faktResults, lfResults,
      schemaResult.errors.length,
      mcResult.warnings.length,
      dialogResult.warnings.length,
      glossarResult.stats.fehlt,
    )
    const checklistePath = path.join(leDir, 'dozentin-checkliste.md')
    fs.writeFileSync(checklistePath, checkliste, 'utf-8')
    console.log(`\n  → ${checklistePath}`)

    // Rohmaterial-Checkliste
    const rmCheckliste = generateRohmaterialCheckliste(leId, rohmaterial)
    const rmChecklistePath = path.join(leDir, 'dozentin-rohmaterial-checkliste.md')
    fs.writeFileSync(rmChecklistePath, rmCheckliste, 'utf-8')
    console.log(`  → ${rmChecklistePath}`)
  }

  console.log(`\n${'═'.repeat(55)}`)
  const hasErrors = schemaResult.errors.length > 0 || faktResults.some(r => r.status === 'MISMATCH' || r.status === 'MISSING')
  console.log(`  ERGEBNIS: ${hasErrors ? '❌ Fehler gefunden — siehe Checkliste' : '✅ Alle Checks bestanden'}`)
  console.log('═'.repeat(55))

  return !hasErrors
}

// --- Entry Point ---

const target = process.argv[2]
if (!target) {
  console.log('Usage: npx ts-node scripts/validate-le.ts <le-id|--all>')
  process.exit(1)
}

if (target === '--all') {
  const contentDir = path.resolve(__dirname, '..', 'content')
  const dirs = fs.readdirSync(contentDir)
    .filter(d => d.startsWith('le-') && fs.existsSync(path.join(contentDir, d, 'steps-s1.ts')))
  console.log(`\nValidiere ${dirs.length} LEs...\n`)
  let allPass = true
  for (const dir of dirs) {
    if (!validateLE(dir)) allPass = false
  }
  process.exit(allPass ? 0 : 1)
} else {
  process.exit(validateLE(target) ? 0 : 1)
}

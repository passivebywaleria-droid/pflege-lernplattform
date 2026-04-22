/**
 * Migration-Script: .ts Content → PostgreSQL (LE-agnostisch via Manifest)
 *
 * Liest alle in `content/_manifest.ts` registrierten LEs mit Status
 * "geprueft" oder "published" und insertet sie in die Neon-DB.
 *
 * Idempotent (Upsert via onConflictDoNothing).
 *
 * Usage:
 *   DATABASE_URL="..." npx tsx scripts/import-content-to-db.ts                # alle importable LEs
 *   DATABASE_URL="..." npx tsx scripts/import-content-to-db.ts le-01          # nur LE-01
 *   DATABASE_URL="..." npx tsx scripts/import-content-to-db.ts --include-draft # auch draft/steps
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import * as schema from "../src/lib/db/schema"

import { LE_MANIFEST, lePrefix } from "../content/_manifest"
import type { LeManifestEntry } from "../content/_types"

// ── Static module map (Webpack/tsx-friendly) ──
// LEs entfernt — Plattform nutzt CE+Themen+Situationen Format
const LE_MODULES: Record<string, () => Promise<Record<string, any>>> = {}

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  console.error("DATABASE_URL nicht gesetzt")
  process.exit(1)
}

const client = postgres(connectionString, { max: 1 })
const db = drizzle(client, { schema })

function mapTag(tag: string | undefined): "anatomie" | "pflege" | "krankheitslehre" {
  if (tag === "anatomie") return "anatomie"
  if (tag === "krankheitslehre") return "krankheitslehre"
  return "pflege"
}

interface LeContent {
  metadata: any
  steps: any[]
  artikel: any[]
  glossar: any[]
  karteikarten: any[]
  snack: any[]
  fall: any[]
  praxis: any[]
  pruefung: any | null
}

async function loadLeContent(le: LeManifestEntry): Promise<LeContent | null> {
  const loader = LE_MODULES[le.leId]
  if (!loader) {
    console.warn(`⚠️  ${le.leId}: nicht in LE_MODULES registriert — skip`)
    return null
  }
  const mod = await loader()
  const prefix = lePrefix(le.leId)

  const steps = le.sessions
    .map((s) => mod[`${prefix}_STEPS_${s.toUpperCase()}`])
    .filter(Boolean)
    .flat()

  return {
    metadata: mod[`${prefix}_METADATA`],
    steps,
    artikel: mod[`${prefix}_ARTIKEL`] ?? [],
    glossar: mod[`${prefix}_GLOSSAR`] ?? [],
    karteikarten: mod[`${prefix}_KARTEIKARTEN`] ?? [],
    snack: mod[`${prefix}_LERN_SNACK`] ?? [],
    fall: mod[`${prefix}_FALLVERLAEUFE`] ?? [],
    praxis: mod[`${prefix}_PRAXIS`] ?? [],
    pruefung: mod[`${prefix}_PRUEFUNGSFALL`] ?? null,
  }
}

async function ensureCeUnit(le: LeManifestEntry): Promise<string> {
  const number = le.ceNumber ?? 1
  const existing = await db.query.ceUnits.findFirst({
    where: (t, { eq }) => eq(t.number, number),
  })
  if (existing) return existing.id

  const [ce] = await db
    .insert(schema.ceUnits)
    .values({
      number,
      titleDe: `CE ${String(number).padStart(2, "0")}`,
      ausbildungsdrittel: 1,
      zeitrichtwertH: 70,
    })
    .returning()
  return ce.id
}

async function ensureLerneinheit(le: LeManifestEntry, ceId: string, metadata: any): Promise<string> {
  const existing = await db.query.lerneinheiten.findFirst({
    where: (t, { eq }) => eq(t.leId, le.leId),
  })
  if (existing) return existing.id

  const [row] = await db
    .insert(schema.lerneinheiten)
    .values({
      leId: le.leId,
      ceId,
      title: metadata?.title ?? le.title,
      titleShort: metadata?.titleShort ?? le.titleShort,
      zeitrichtwert: metadata?.zeitrichtwert ?? le.zeitrichtwert,
      sessionCount: metadata?.sessionCount ?? le.sessions.length,
      geschaetzteLernzeit: metadata?.geschaetzteLernzeit ?? { c1: 30, b1: 40 },
      kompetenzbereiche: metadata?.kompetenzbereiche ?? ["KB-V.1"],
      bloomStufen: metadata?.bloomStufen ?? [1, 2, 3],
      voraussetzungen: metadata?.voraussetzungen ?? [],
      sortOrder: le.sortOrder ?? 1,
      status: "published",
      publishedAt: new Date(),
    })
    .returning()
  return row.id
}

async function importLE(le: LeManifestEntry): Promise<void> {
  console.log(`\n=== ${le.leId.toUpperCase()} (${le.title}) ===`)

  const content = await loadLeContent(le)
  if (!content) return

  const { metadata, steps, artikel, glossar, karteikarten, snack, fall, praxis, pruefung } = content

  // 1. CE
  const ceId = await ensureCeUnit(le)
  console.log(`1️⃣  CE Unit: ${ceId}`)

  // 2. LE
  const leDbId = await ensureLerneinheit(le, ceId, metadata)
  console.log(`2️⃣  Lerneinheit: ${leDbId}`)

  // 3. Lernziele aus Steps extrahieren
  const lernzielMap = new Map<string, { kb: string; tag: string; bloom: number }>()
  for (const step of steps) {
    const lz = (step as any).lernziel as string | undefined
    if (lz && !lernzielMap.has(lz)) {
      lernzielMap.set(lz, {
        kb: step.kompetenzbereich || "KB-V.1",
        tag: step.tag || "pflege",
        bloom: step.bloomLevel || 1,
      })
    }
  }
  let lzOrder = 0
  for (const [lzId, meta] of lernzielMap) {
    await db
      .insert(schema.lernziele)
      .values({
        lernzielId: lzId,
        leId: leDbId,
        title: lzId.replace(/-/g, " ").replace(/ce\d+ le\d+ /, ""),
        kompetenzbereich: meta.kb,
        bloomTarget: meta.bloom,
        tag: mapTag(meta.tag),
        sortOrder: lzOrder++,
      })
      .onConflictDoNothing()
  }
  console.log(`3️⃣  ${lernzielMap.size} Lernziele`)

  // 4. Content Steps
  let stepOrder = 0
  for (const step of steps) {
    const s = step as any
    await db
      .insert(schema.contentSteps)
      .values({
        stepId: step.stepId,
        leId: leDbId,
        session: s.phase || "s1",
        stepType: step.stepType as string,
        bloomLevel: step.bloomLevel || 1,
        kompetenzbereich: step.kompetenzbereich || "KB-V.1",
        track: step.track === "vertiefung" ? "vertiefung" : "basis",
        modus: s.modus || null,
        tag: mapTag(step.tag),
        lernzielId: s.lernziel || null,
        themenblockPhase: s.themenblockPhase || null,
        strategyVariant: 1,
        contentC1: step.contentC1 || { title: "", body: "" },
        contentB1: step.contentB1 || null,
        question: step.question || null,
        displayFormat: s.displayFormat || null,
        imageUrl: s.imageUrl || null,
        imageAlt: s.imageAlt || null,
        audioUrl: s.audioUrl || null,
        bildkategorie: s.bildkategorie || null,
        difficulty: s.difficulty || null,
        xpValue: s.xpValue || null,
        quellen: s.quellen || [],
        patientId: s.patientId || null,
        status: "published",
        sortOrder: stepOrder++,
      })
      .onConflictDoNothing()
  }
  console.log(`4️⃣  ${steps.length} Steps`)

  // 5. Artikel
  for (let i = 0; i < artikel.length; i++) {
    const kap = artikel[i] as any
    await db
      .insert(schema.artikelKapitel)
      .values({
        kapitelId: kap.kapitelId,
        leId: leDbId,
        titel: kap.titel,
        titelB1: kap.titelB1 || null,
        tag: mapTag(kap.tag),
        geschaetzteDauer: kap.geschaetzteDauer || 5,
        bloecke: kap.bloecke,
        glossarBegriffe: kap.glossarBegriffe || null,
        zusammenfassung: kap.zusammenfassung || null,
        zusammenfassungB1: kap.zusammenfassungB1 || null,
        headerImageUrl: kap.headerImageUrl || null,
        lernzielRef: kap.lernzielRef || null,
        sortOrder: i,
      })
      .onConflictDoNothing()
  }
  console.log(`5️⃣  ${artikel.length} Artikel-Kapitel`)

  // 6. Glossar
  for (let i = 0; i < glossar.length; i++) {
    const g = glossar[i] as any
    const uebersetzungen: Record<string, string> = {}
    if (g.uebersetzungTr) uebersetzungen.tr = g.uebersetzungTr
    if (g.uebersetzungAr) uebersetzungen.ar = g.uebersetzungAr
    if (g.uebersetzungEn) uebersetzungen.en = g.uebersetzungEn

    await db
      .insert(schema.glossarEntries)
      .values({
        leId: leDbId,
        begriff: g.begriff,
        erklaerung: g.erklaerung,
        erklaerungB1: g.erklaerungB1 || null,
        uebersetzungen,
        ausspracheAudio: g.ausspracheAudio || null,
        istB1Alltagswort: g.istB1Alltagswort || false,
        vorsilbeNachsilbe: g.vorsilbeNachsilbe || null,
        sortOrder: i,
      })
      .onConflictDoNothing()
  }
  console.log(`6️⃣  ${glossar.length} Glossar-Begriffe`)

  // 7. Karteikarten
  const prefix = lePrefix(le.leId).toLowerCase() // "le01"
  for (let i = 0; i < karteikarten.length; i++) {
    const k = karteikarten[i] as any
    await db
      .insert(schema.karteikarten)
      .values({
        karteikarteId: k.id || `${prefix}-kk-${i + 1}`,
        leId: leDbId,
        vorderseite: k.vorderseite,
        rueckseiteC1: k.rueckseiteC1,
        rueckseiteB1: k.rueckseiteB1 || k.rueckseiteC1,
        tag: mapTag(k.tag),
        kategorie: k.kategorie || "fachbegriff",
        pruefungsrelevant: k.pruefungsrelevant || false,
        quelle: k.quelle || null,
        sortOrder: i,
      })
      .onConflictDoNothing()
  }
  console.log(`7️⃣  ${karteikarten.length} Karteikarten`)

  // 8. Lern-Snacks
  for (let i = 0; i < snack.length; i++) {
    const s = snack[i] as any
    await db
      .insert(schema.lernSnacks)
      .values({
        leId: leDbId,
        kapitelId: s.kapitelId,
        titel: s.titel,
        titelB1: s.titelB1 || null,
        tag: mapTag(s.tag),
        items: s.items,
        sortOrder: i,
      })
      .onConflictDoNothing()
  }
  console.log(`8️⃣  ${snack.length} Snack-Kapitel`)

  // 9. Patienten + Fallverläufe
  for (let i = 0; i < fall.length; i++) {
    const f = fall[i] as any
    const patient = f.patient
    const patId = patient?.patientId || `${prefix}-pat-${i + 1}`

    await db
      .insert(schema.examPatients)
      .values({
        patientId: patId,
        name: patient?.name || `Patient ${i + 1}`,
        alter: patient?.alter || 70,
        geschlecht: patient?.geschlecht || "w",
        diagnosen: patient?.diagnosen || [],
        sourceLEs: [le.leId],
        steckbrief: patient?.steckbrief || patient?.name || "",
      })
      .onConflictDoNothing()

    await db
      .insert(schema.fallverlaeufe)
      .values({
        fallId: f.fallId || `${prefix}-fall-${i + 1}`,
        leId: leDbId,
        patientId: patId,
        titel: f.titel,
        titelB1: f.titelB1 || null,
        fokus: mapTag(f.fokus || "pflege"),
        stationen: f.stationen,
        sortOrder: i,
      })
      .onConflictDoNothing()
  }
  console.log(`9️⃣  ${fall.length} Fallverläufe`)

  // 10. Praxis-Übungen + deren Steps
  let praxisStepCount = 0
  for (let i = 0; i < praxis.length; i++) {
    const p = praxis[i] as any
    const praxisSteps = p.steps || []
    const stepIds = praxisSteps.map((s: any) => s.stepId)

    for (const step of praxisSteps) {
      const s = step as any
      await db
        .insert(schema.contentSteps)
        .values({
          stepId: step.stepId,
          leId: leDbId,
          session: s.phase || "s1",
          stepType: step.stepType as string,
          bloomLevel: step.bloomLevel || 1,
          kompetenzbereich: step.kompetenzbereich || "KB-V.1",
          track: step.track === "vertiefung" ? "vertiefung" : "basis",
          modus: s.modus || null,
          tag: mapTag(step.tag),
          lernzielId: s.lernziel || null,
          themenblockPhase: s.themenblockPhase || null,
          strategyVariant: 1,
          contentC1: step.contentC1 || { title: "", body: "" },
          contentB1: step.contentB1 || null,
          question: step.question || null,
          displayFormat: s.displayFormat || null,
          imageUrl: s.imageUrl || null,
          imageAlt: s.imageAlt || null,
          audioUrl: s.audioUrl || null,
          bildkategorie: s.bildkategorie || null,
          difficulty: s.difficulty || null,
          xpValue: s.xpValue || null,
          quellen: s.quellen || [],
          patientId: s.patientId || null,
          status: "published",
          sortOrder: stepOrder++,
        })
        .onConflictDoNothing()
      praxisStepCount++
    }

    await db
      .insert(schema.praxisUebungen)
      .values({
        uebungId: p.uebungId || `${prefix}-praxis-${i + 1}`,
        leId: leDbId,
        typ: p.typ || "prozedur",
        titel: p.titel,
        titelB1: p.titelB1 || null,
        beschreibungC1: p.beschreibungC1 || "",
        beschreibungB1: p.beschreibungB1 || null,
        bloomLevel: p.bloomLevel || 4,
        stepIds,
        sortOrder: i,
      })
      .onConflictDoNothing()
  }
  console.log(`🔟  ${praxis.length} Praxis-Übungen, ${praxisStepCount} Praxis-Steps`)

  // 11. Prüfungsfall
  if (pruefung) {
    const exam = pruefung as any
    const patient = exam.patient
    const examPatId = patient?.patientId || `${prefix}-exam-pat`

    await db
      .insert(schema.examPatients)
      .values({
        patientId: examPatId,
        name: patient?.name || "Prüfungspatient",
        alter: patient?.alter || 65,
        geschlecht: patient?.geschlecht || "m",
        diagnosen: patient?.diagnosen || [],
        sourceLEs: [le.leId],
        steckbrief: patient?.steckbrief || "",
      })
      .onConflictDoNothing()

    await db
      .insert(schema.examCases)
      .values({
        caseId: exam.caseId || `${prefix}-exam-01`,
        leId: leDbId,
        patientId: examPatId,
        titel: exam.titel || `Prüfungsfall ${le.leId.toUpperCase()}`,
        schwierigkeit: exam.schwierigkeit || "mittel",
        bloomRange: exam.bloomRange || [3, 5],
        zeitLimitMinuten: exam.zeitLimitMinuten || 45,
        phasen: exam.phasen || [],
      })
      .onConflictDoNothing()
    console.log(`1️⃣1️⃣  1 Prüfungsfall`)
  }

  console.log(`✅ ${le.leId} importiert`)
}

async function main() {
  const args = process.argv.slice(2)
  const includeDraft = args.includes("--include-draft")
  const leFilter = args.find((a) => a.startsWith("le-"))

  console.log("🚀 Migration startet...")
  if (leFilter) console.log(`   Filter: ${leFilter}`)
  if (includeDraft) console.log(`   --include-draft aktiv`)

  let imported = 0
  let skipped = 0
  for (const le of LE_MANIFEST) {
    if (leFilter && le.leId !== leFilter) continue
    const importable = le.status === "geprueft" || le.status === "published"
    if (!importable && !includeDraft) {
      console.log(`⏭️  ${le.leId} (status: ${le.status}) — skip (nutze --include-draft)`)
      skipped++
      continue
    }
    try {
      await importLE(le)
      imported++
    } catch (err) {
      console.error(`❌ ${le.leId} fehlgeschlagen:`, err)
      throw err
    }
  }

  console.log(`\n✅ Migration abgeschlossen: ${imported} importiert, ${skipped} übersprungen`)
  await client.end()
}

main().catch((err) => {
  console.error("❌ Migration fehlgeschlagen:", err)
  client.end()
  process.exit(1)
})

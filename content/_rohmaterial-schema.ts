// Rohmaterial-Schema: Strukturierte JSON-Version des Rohmaterials
// Verwendet von: fact-checker.ts, validate-le.ts, Dozentin-Checkliste
// Wahrheitsquelle: VISION.md → Rohmaterial.md → Rohmaterial.json → Steps

import { z } from 'zod'

export const QuelleSchema = z.object({
  id: z.string(),                // "Q1"
  typ: z.enum(['buch', 'leitlinie', 'studie', 'website', 'gesetz', 'kodex', 'charta']),
  titel: z.string(),             // "I Care Pflege, 2. Aufl., Thieme"
  jahr: z.number(),
  seiten: z.string().optional(), // "S. 78-79"
  url: z.string().optional(),
})

export const KernfaktSchema = z.object({
  id: z.string(),                // "F01"
  text: z.string(),              // Der Kernfakt als vollständige Aussage
  schluesselwoerter: z.array(z.string()),  // Prüfbare Keywords: ["Pflegeprozess", "Fiechter", "Meier", "6 Schritte"]
  zahlen: z.array(z.object({
    wert: z.string(),            // "6", "1859", "8 Artikel"
    kontext: z.string(),         // "Schritte des Pflegeprozesses"
  })).default([]),
  namen: z.array(z.object({
    name: z.string(),            // "Fiechter und Meier"
    rolle: z.string(),           // "Autorinnen Pflegeprozessmodell"
  })).default([]),
  bloomLevel: z.number().min(1).max(6),
  kompetenzbereich: z.string(),  // "KB-I.1"
  quelleId: z.string(),          // "Q2"
  quelleSeite: z.string(),       // "S.78-79"
  dozentinGeprueft: z.boolean().default(false),
})

export const GlossarEintragSchema = z.object({
  begriff: z.string(),
  erklaerungC1: z.string(),
  erklaerungB1: z.string(),
  ar: z.string(),
  tr: z.string(),
  en: z.string().optional(),
})

export const LeitfallSchema = z.object({
  patientId: z.string(),         // "A", "B", "C"
  name: z.string(),              // "Yasemin Demirci"
  alter: z.number(),             // 22
  geschlecht: z.enum(['w', 'm', 'd']),
  diagnose: z.string(),
  setting: z.string(),
  kernproblem: z.string(),
  szenen: z.array(z.object({
    szeneId: z.string(),
    kontext: z.string(),
    pflegefrage: z.string(),
  })),
})

export const RohmaterialSchema = z.object({
  leId: z.string(),
  ceId: z.string(),
  titel: z.string(),
  quellen: z.array(QuelleSchema),
  kernfakten: z.array(KernfaktSchema),
  glossar: z.array(GlossarEintragSchema),
  leitfaelle: z.array(LeitfallSchema),
  bloomVerteilung: z.record(z.string(), z.number()).optional(),
  dozentinFreigabeRohmaterial: z.boolean().default(false),
  dozentinFreigabeDatum: z.string().optional(),
})

// TypeScript types abgeleitet aus Zod
export type Quelle = z.infer<typeof QuelleSchema>
export type Kernfakt = z.infer<typeof KernfaktSchema>
export type GlossarEintrag = z.infer<typeof GlossarEintragSchema>
export type Leitfall = z.infer<typeof LeitfallSchema>
export type Rohmaterial = z.infer<typeof RohmaterialSchema>

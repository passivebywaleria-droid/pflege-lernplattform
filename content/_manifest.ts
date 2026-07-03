/**
 * CE-MANIFEST — Single Source of Truth für alle Curricularen Einheiten.
 *
 * Plattform nutzt ausschließlich CE+Themen+Situationen Format.
 * Keine LEs mehr.
 */

import type { LeManifestEntry, CEManifestEntry } from "./_types";

// LE-MANIFEST bleibt als leeres Array (API-Kompatibilität)
export const LE_MANIFEST: LeManifestEntry[] = [];

// ═══════════════════════════════════════════════════
// CE-MANIFEST (Situationsbasiert — ab CE-02)
// ═══════════════════════════════════════════════════

export const CE_MANIFEST: CEManifestEntry[] = [
  // ─── 1. Ausbildungsdrittel ───────────────────────────────────────────────
  {
    ceId: "ce-01",
    ceNumber: 1,
    titel: "Ausbildungsstart: Pflegefachfrau/Pflegefachmann werden",
    titelShort: "Ausbildungsstart",
    gesamtUE: 70,
    themen: [
      // Cluster A — Beruf & Recht
      "berufsbild",
      "rechtliche-grundlagen",
      // Cluster B — Lernen & Kontakt
      "lernstrategien",
      "erste-kontaktgestaltung",
      "pflegeprozess-orientierung",
      // Cluster C — Selbstfürsorge
      "selbstfuersorge",
    ],
    situationen: [], // SituationsTyp: orientierung — Rollensituationen (kein Patientenfall)
    status: "themen-rohmaterial",
    sortOrder: 1,
  },
  {
    ceId: "ce-02",
    ceNumber: 2,
    titel: "An der Pflege von Menschen in kurativen Prozessen mitwirken",
    titelShort: "Pflege in kurativen Prozessen",
    gesamtUE: 170,
    themen: [
      // Cluster A — Pflegeprozess (30 UE)
      "pflegeprozess",
      "pflegeplanung",
      "pflegedokumentation",
      "assessments-expertenstandards",
      // Cluster B — Mobilität (40 UE)
      "kinaesthetik",
      "positionierung",
      "mobilisation",
      "dekubitus-prophylaxe",
      "thrombose-prophylaxe",
      "sturz-prophylaxe",
      "kontraktur-prophylaxe",
      "pneumonie-prophylaxe",
      "schlaf",
      // Cluster C — Körperpflege (50 UE)
      "haut",
      "ganzkörperpflege",
      "mundpflege",
      "saeuglingspflege",
      "basale-stimulation",
      // Cluster D — Ernährung (30 UE)
      "ernaehrungsgrundlagen",
      "ernaehrungsassessment",
      "essen-anreichen",
      "enterale-ernaehrung",
      // Cluster E — Ausscheidung (30 UE)
      "harnausscheidung",
      "blasenkatheter",
      "stuhlausscheidung",
    ],
    situationen: [
      // Spirale 1
      "frau-m-nacht-sturz", // ✅ PILOT — fertig produziert durch Pipeline v9
      "ls-yilmaz-hueft-tep",
      "ls-bauer-demenz-sturz",
      "ls-emilia-saeugling",
      "ls-petrov-schlaganfall",
      // Spirale 2
      "ls-schmidt-adipositas",
      "ls-yilmaz-spirale2",
      // Spirale 3
      "ls-kovac-ambulant",
      "ls-nguyen-stoma",
      "ls-lukas-verbruehung",
      // Spirale 4
      "ls-pruefung-ce02",
    ],
    status: "published",
    sortOrder: 2,
  },
  {
    ceId: "ce-03",
    ceNumber: 3,
    titel: "Erste Pflegeerfahrungen reflektieren — verständigungsorientiert kommunizieren",
    titelShort: "Kommunikation und Reflexion",
    gesamtUE: 80,
    themen: [
      // Cluster A — Reflexion & Theorie
      "praxisreflexion",
      "kommunikationsmodelle",
      // Cluster B — Gesprächsführung
      "gespraechsfuehrung",
      "beziehungsgestaltung",
      // Cluster C — Dokumentation & Team
      "pflegedokumentation-sis",
      "interprofessionelle-kommunikation",
    ],
    situationen: [], // SituationsTyp: kommunikation — Gesprächsphasen
    status: "themen-rohmaterial",
    sortOrder: 3,
  },
  // ─── 1./2. Ausbildungsdrittel (flexible Einplanung) ──────────────────────
  {
    ceId: "ce-04",
    ceNumber: 4,
    titel: "Gesundheit fördern und präventiv handeln",
    titelShort: "Gesundheitsförderung",
    gesamtUE: 160, // 80 UE 1./2. AD + 80 UE 3. AD
    themen: [
      // Cluster A — Kommunikation (LE1 + LE3) — GEBAUT (Lernergebnis-First, 2026-06-13)
      "kommunikationsmodelle",
      "gespraechsfuehrung",
      "beratung",
      "konflikt-deeskalation",
      "kultursensible-kommunikation",
      // Cluster B — Gesundheitsförderung (LE2) — nur Pläne, separate Welle:
      // gesundheitsmodelle, impfungen-infektionsschutz, betriebliche-gesundheitsfoerderung,
      // eigengesundheit, gesundheitsfoerderung-patienten, patientenberatung,
      // gesundheitsfoerderung-kinder, gesundheitsfoerderung-aeltere, gesundheitsprojekt
    ],
    situationen: ["ls-demir-diabetes", "ls-wagner-konflikt"], // SituationsTyp: beratung
    status: "steps",
    sortOrder: 4,
  },
  {
    ceId: "ce-05",
    ceNumber: 5,
    titel: "Menschen in kurativen Prozessen pflegerisch unterstützen und Patientensicherheit stärken",
    titelShort: "Kurative Pflege & Patientensicherheit",
    gesamtUE: 340, // 200 UE 1./2. AD + 140 UE 3. AD
    themen: [
      // Cluster A — Chirurgie
      "perioperative-pflege",
      "wundversorgung",
      "drainagemanagement",
      // Cluster B — Innere Medizin
      "herzkreislauf-pflege",
      "atemwegs-pflege",
      "infusionstherapie",
      "akutes-schmerzmanagement",
      "vitalzeichenmonitoring",
      // Cluster C — Pharmakologie
      "arzneimittellehre",
      "medikamentengabe",
      // Cluster D — Infektionsschutz & Sicherheit
      "basishygiene-isolierung",
      "patientensicherheit-cirs",
    ],
    situationen: [], // SituationsTyp: pflegeprozess — Standard 6-Phasen
    status: "themen-rohmaterial",
    sortOrder: 5,
  },
  {
    ceId: "ce-06",
    ceNumber: 6,
    titel: "In Akutsituationen sicher handeln",
    titelShort: "Notfallpflege",
    gesamtUE: 120, // 60 UE 1./2. AD + 60 UE 3. AD
    themen: [
      // Cluster A — Notfälle erkennen
      "kardiovaskulaere-notfaelle",
      "respiratorische-notfaelle",
      "schockzustaende",
      "neurologische-notfaelle",
      // Cluster B — Handeln
      "reanimation-bls",
      "traumatologische-erstversorgung",
      // Cluster C — Kommunikation & Ethik
      "notfallkommunikation-sbar",
      "suizidalitaet-erstintervention",
    ],
    situationen: ["ls-wagner-reanimation"], // SituationsTyp: akutsituation — Welle 1: Reanimation (LE1)
    status: "steps",
    sortOrder: 6,
  },
  {
    ceId: "ce-07",
    ceNumber: 7,
    titel: "Rehabilitatives Pflegehandeln im interprofessionellen Team",
    titelShort: "Rehabilitative Pflege",
    gesamtUE: 80,
    themen: [
      // Cluster A — Assessment & Konzepte
      "barthel-index-icf",
      "bobath-kinästhetik",
      "kommunikation-aphasie-dysphagie",
      // Cluster B — Interprofessionalität
      "hilfsmittelversorgung",
      "interprofessionelles-reha-team",
      "sozialrecht-reha",
      // Cluster C — Übergänge
      "case-management-ueberleitung",
    ],
    situationen: [], // SituationsTyp: pflegeprozess mit Rehabilitations-Fokus
    status: "themen-rohmaterial",
    sortOrder: 7,
  },
  {
    ceId: "ce-08",
    ceNumber: 8,
    titel: "Menschen in kritischen Lebenssituationen und in der letzten Lebensphase begleiten",
    titelShort: "Kritische Situationen & Sterbebegleitung",
    gesamtUE: 160, // 60 UE 1./2. AD + 100 UE 3. AD
    themen: [
      // Cluster A — Kritische Lebenssituationen
      "onkologische-pflege",
      "psychische-krisen",
      "chronisch-limitierend",
      // Cluster B — Palliative Care
      "palliative-care-grundlagen",
      "symptommanagement-palliativ",
      "hospiz-sterbebegleitung",
      // Cluster C — Ethik & Kommunikation
      "patientenverfuegung-acp",
      "emotionsarbeit-trauer",
      "spiritualitaet-religion-tod",
    ],
    situationen: [], // SituationsTyp: begleitung — Begleitungsphasen
    status: "themen-rohmaterial",
    sortOrder: 8,
  },
  // ─── 3. Ausbildungsdrittel ───────────────────────────────────────────────
  {
    ceId: "ce-09",
    ceNumber: 9,
    titel: "Menschen bei der Lebensgestaltung lebensweltorientiert unterstützen",
    titelShort: "Lebensgestaltung & Sozialraum",
    gesamtUE: 200, // 150 UE 1./2. AD + 50 UE 3. AD (AP-Vertiefung: +110 UE)
    themen: [
      // Cluster A — Lebenswelt
      "biografiearbeit",
      "lebensweltorientierung",
      "soziale-netzwerke-isolation",
      // Cluster B — Alltag & Recht
      "wohnraum-wohnumfeld",
      "pflegebeduerftigkeit-sgbxi",
      "alltagsgestaltung-aktivitaet",
      // Cluster C — Beratung & Vernetzung
      "pflegende-angehoerige",
      "pflegeberatung-sozialraum",
      "kommunikation-demenz",
    ],
    situationen: [], // SituationsTyp: lebensgestaltung — ambulant/biografisch
    status: "themen-rohmaterial",
    sortOrder: 9,
  },
  {
    ceId: "ce-10",
    ceNumber: 10,
    titel: "Entwicklung und Gesundheit in Kindheit und Jugend in pflegerischen Situationen fördern",
    titelShort: "Kinderkrankenpflege & Entwicklung",
    gesamtUE: 180, // 120 UE 1./2. AD + 60 UE 3. AD (KP-Vertiefung: +110 UE)
    themen: [
      // Cluster A — Neugeborene & Frühgeborene
      "perinatale-pflege-neugeborene",
      "fruehgeborene-pflege",
      "elternkompetenz-bindung",
      // Cluster B — Chronische Erkrankungen Kinder
      "kindliche-entwicklung",
      "neurodermitis-kindesalter",
      "asthma-bronchiale-kind",
      "diabetes-typ1-jugendliche",
      // Cluster C — Rechtlich & Ethisch
      "kinderrechte-kindesschutz",
      "familiengesundheitspflege",
    ],
    situationen: [], // SituationsTyp: pflegeprozess — Pädiatrie-Fokus
    status: "themen-rohmaterial",
    sortOrder: 10,
  },
  {
    ceId: "ce-11",
    ceNumber: 11,
    titel: "Menschen mit psychischen Gesundheitsproblemen und kognitiven Beeinträchtigungen personenzentriert und lebensweltbezogen unterstützen",
    titelShort: "Psychiatrische Pflege",
    gesamtUE: 160, // 80 UE 1./2. AD + 80 UE 3. AD (KP/AP-Vertiefung je +80 UE)
    themen: [
      // Cluster A — Erkrankungen & Assessments
      "demenz-pflege",
      "depression-angststoerungen",
      "schizophrenie-psychosen",
      // Cluster B — Beziehungsgestaltung
      "psychiatrische-kommunikation",
      "biografiearbeit-psychiatrisch",
      "milieugestaltung",
      // Cluster C — Krisenintervention & Recht
      "krisenintervention-deeskalation",
      "psychkg-betreuungsrecht",
      "sucht-essstoerungen",
    ],
    situationen: [], // SituationsTyp: psychiatrisch — Psychiatrie-Phasen
    status: "themen-rohmaterial",
    sortOrder: 11,
  },
];

// ── LE-Helper (Legacy) ──

/** LEs filtern, die für DB-Import bereit sind (geprueft oder published). */
export function getImportableLEs(): LeManifestEntry[] {
  return LE_MANIFEST.filter((le) => le.status === "geprueft" || le.status === "published");
}

/** LE per leId finden. */
export function findLE(leId: string): LeManifestEntry | undefined {
  return LE_MANIFEST.find((le) => le.leId === leId);
}

/** Prefix aus leId ableiten: "le-01" → "LE01". */
export function lePrefix(leId: string): string {
  return leId.replace("-", "").toUpperCase();
}

// ═══════════════════════════════════════════════════
// UE-VERTEILUNG pro Thema (CE-02, freigegeben 2026-04-19)
// ═══════════════════════════════════════════════════

/** Geschätzte UE pro Thema (à 45 Min). Summe = 170 UE. */
export const THEMEN_UE: Record<string, number> = {
  // Cluster A — Pflegeprozess (30 UE)
  "pflegeprozess": 8,
  "pflegeplanung": 8,
  "pflegedokumentation": 7,
  "assessments-expertenstandards": 7,
  // Cluster B — Mobilität (40 UE)
  "kinaesthetik": 5,
  "positionierung": 5,
  "mobilisation": 6,
  "dekubitus-prophylaxe": 6,
  "thrombose-prophylaxe": 4,
  "sturz-prophylaxe": 4,
  "kontraktur-prophylaxe": 3,
  "pneumonie-prophylaxe": 4,
  "schlaf": 3,
  // Cluster C — Körperpflege (50 UE)
  "haut": 12,
  "ganzkörperpflege": 12,
  "mundpflege": 7,
  "saeuglingspflege": 10,
  "basale-stimulation": 9,
  // Cluster D — Ernährung (30 UE)
  "ernaehrungsgrundlagen": 8,
  "ernaehrungsassessment": 8,
  "essen-anreichen": 7,
  "enterale-ernaehrung": 7,
  // Cluster E — Ausscheidung (30 UE)
  "harnausscheidung": 10,
  "blasenkatheter": 10,
  "stuhlausscheidung": 10,
};

// ── CE-Helper (Neu) ──

/** CE per ceId finden. */
export function findCE(ceId: string): CEManifestEntry | undefined {
  return CE_MANIFEST.find((ce) => ce.ceId === ceId);
}

/** CEs filtern die importierbar sind (geprueft oder published). */
export function getImportableCEs(): CEManifestEntry[] {
  return CE_MANIFEST.filter((ce) => ce.status === "geprueft" || ce.status === "published");
}

/** Alle verfügbaren CEs (synchron). */
export function getAllCEs(): CEManifestEntry[] {
  return CE_MANIFEST;
}

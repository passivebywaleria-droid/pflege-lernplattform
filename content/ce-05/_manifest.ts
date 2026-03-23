// CE 05 — Manifest aller 16 Lektionen (34 UE + 6 UE Puffer = 40 UE)
// Struktur: Krankheitsbild-zentriert nach 12-Punkte-Struktur
// Quelle: Plan CE 05 Neustrukturierung (2026-03-22)

export interface LektionManifest {
  leId: string;
  ceId: string;
  block: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  order: number;
  title: string;
  titleShort: string;
  ueCount: number;
  estimatedSteps: number;
  estimatedMinC1: number;
  estimatedMinB1: number;
  kompetenzbereiche: string[];
  bloomRange: [number, number];
  pruefungsrelevanz: "hoch" | "mittel";
  voraussetzungen: string[];
  status: "fertig" | "entwurf" | "geplant";
  /** Welche Punkte der 12-Punkte-Struktur diese LE abdeckt */
  inhaltspunkte: number[];
}

export const CE05_MANIFEST: LektionManifest[] = [
  // ==========================================
  // BLOCK A: Grundlagen (4 UE)
  // ==========================================
  {
    leId: "le-01-einfuehrung",
    ceId: "ce-05",
    block: "A",
    order: 1,
    title: "Einführung — Der rheumatische Formenkreis",
    titleShort: "Einführung Rheuma",
    ueCount: 2,
    estimatedSteps: 10,
    estimatedMinC1: 15,
    estimatedMinB1: 25,
    kompetenzbereiche: ["KB-I.1", "KB-V.1"],
    bloomRange: [1, 2],
    pruefungsrelevanz: "hoch",
    voraussetzungen: [],
    status: "entwurf",
    inhaltspunkte: [1, 2, 6],
  },
  {
    leId: "le-02-anatomie-immunologie",
    ceId: "ce-05",
    block: "A",
    order: 2,
    title: "Anatomie, Physiologie & Immunologie",
    titleShort: "Anatomie & Immun",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.1", "KB-V.1"],
    bloomRange: [1, 3],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-01-einfuehrung"],
    status: "entwurf",
    inhaltspunkte: [3, 4],
  },

  // ==========================================
  // BLOCK B: Rheumatoide Arthritis — KOMPLETT (10 UE)
  // 12-Punkte-Struktur vollständig abgedeckt
  // ==========================================
  {
    leId: "le-03-ra-definition",
    ceId: "ce-05",
    block: "B",
    order: 3,
    title: "RA: Definition, Ursachen, Pathomechanismus",
    titleShort: "RA: Grundlagen",
    ueCount: 2,
    estimatedSteps: 67,
    estimatedMinC1: 30,
    estimatedMinB1: 45,
    kompetenzbereiche: ["KB-I.1", "KB-V.1"],
    bloomRange: [1, 3],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-02-anatomie-immunologie"],
    status: "fertig",
    inhaltspunkte: [1, 2, 3, 4],
  },
  {
    leId: "le-04-ra-symptome-diagnose",
    ceId: "ce-05",
    block: "B",
    order: 4,
    title: "RA: Symptome, Formen, Diagnose",
    titleShort: "RA: Symptome & Dx",
    ueCount: 3,
    estimatedSteps: 15,
    estimatedMinC1: 25,
    estimatedMinB1: 40,
    kompetenzbereiche: ["KB-I.1", "KB-I.3", "KB-III.2"],
    bloomRange: [2, 4],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-03-ra-definition"],
    status: "entwurf",
    inhaltspunkte: [5, 6, 7],
  },
  {
    leId: "le-05-ra-therapie",
    ceId: "ce-05",
    block: "B",
    order: 5,
    title: "RA: Therapie (medikamentös & nicht-medikamentös)",
    titleShort: "RA: Therapie",
    ueCount: 3,
    estimatedSteps: 15,
    estimatedMinC1: 25,
    estimatedMinB1: 40,
    kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-IV.1"],
    bloomRange: [2, 4],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-04-ra-symptome-diagnose"],
    status: "entwurf",
    inhaltspunkte: [8],
  },
  {
    leId: "le-06-ra-pflege-prognose",
    ceId: "ce-05",
    block: "B",
    order: 6,
    title: "RA: Pflege, Komplikationen, Prognose",
    titleShort: "RA: Pflege",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.1", "KB-I.3", "KB-II.2", "KB-III.2", "KB-V.1"],
    bloomRange: [3, 6],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-05-ra-therapie"],
    status: "entwurf",
    inhaltspunkte: [9, 10, 11, 12],
  },

  // ==========================================
  // BLOCK C: Gicht & Kristallarthropathien — KOMPLETT (4 UE)
  // ==========================================
  {
    leId: "le-07-gicht-definition-diagnose",
    ceId: "ce-05",
    block: "C",
    order: 7,
    title: "Gicht: Definition bis Diagnose",
    titleShort: "Gicht: Grundlagen",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.1", "KB-V.1"],
    bloomRange: [1, 3],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-02-anatomie-immunologie"],
    status: "entwurf",
    inhaltspunkte: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    leId: "le-08-gicht-therapie-pflege",
    ceId: "ce-05",
    block: "C",
    order: 8,
    title: "Gicht: Therapie, Pflege, Prognose",
    titleShort: "Gicht: Therapie",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.1", "KB-II.2"],
    bloomRange: [2, 5],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-07-gicht-definition-diagnose"],
    status: "entwurf",
    inhaltspunkte: [8, 9, 10, 11, 12],
  },

  // ==========================================
  // BLOCK D: Spondyloarthritiden — KOMPLETT (3 UE)
  // ==========================================
  {
    leId: "le-09-spa",
    ceId: "ce-05",
    block: "D",
    order: 9,
    title: "SpA: Bechterew, Psoriasis-Arthritis, Reaktive Arthritis",
    titleShort: "SpA komplett",
    ueCount: 3,
    estimatedSteps: 15,
    estimatedMinC1: 25,
    estimatedMinB1: 40,
    kompetenzbereiche: ["KB-I.1", "KB-I.3", "KB-II.2"],
    bloomRange: [1, 4],
    pruefungsrelevanz: "mittel",
    voraussetzungen: ["le-02-anatomie-immunologie"],
    status: "entwurf",
    inhaltspunkte: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },

  // ==========================================
  // BLOCK E: Kollagenosen & Vaskulitiden — KOMPLETT (3 UE)
  // ==========================================
  {
    leId: "le-10-kollagenosen",
    ceId: "ce-05",
    block: "E",
    order: 10,
    title: "Kollagenosen: SLE, Sklerose, Sjögren",
    titleShort: "Kollagenosen",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.1", "KB-V.1"],
    bloomRange: [1, 4],
    pruefungsrelevanz: "mittel",
    voraussetzungen: ["le-02-anatomie-immunologie"],
    status: "entwurf",
    inhaltspunkte: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    leId: "le-11-vaskulitiden",
    ceId: "ce-05",
    block: "E",
    order: 11,
    title: "Vaskulitiden: Überblick & Pflege",
    titleShort: "Vaskulitiden",
    ueCount: 1,
    estimatedSteps: 8,
    estimatedMinC1: 10,
    estimatedMinB1: 15,
    kompetenzbereiche: ["KB-I.1", "KB-III.2"],
    bloomRange: [1, 3],
    pruefungsrelevanz: "mittel",
    voraussetzungen: ["le-10-kollagenosen"],
    status: "entwurf",
    inhaltspunkte: [1, 2, 5, 7, 8, 9],
  },

  // ==========================================
  // BLOCK F: Querschnittsthemen (6 UE)
  // ==========================================
  {
    leId: "le-12-schmerzmanagement",
    ceId: "ce-05",
    block: "F",
    order: 12,
    title: "Schmerzmanagement bei rheumatischen Erkrankungen",
    titleShort: "Schmerz",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.1", "KB-IV.1", "KB-V.1"],
    bloomRange: [2, 5],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-06-ra-pflege-prognose"],
    status: "entwurf",
    inhaltspunkte: [],
  },
  {
    leId: "le-13-reha-interprofessionell",
    ceId: "ce-05",
    block: "F",
    order: 13,
    title: "Rehabilitation & Interprofessionelle Zusammenarbeit",
    titleShort: "Reha & Team",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.1", "KB-III.2", "KB-IV.1"],
    bloomRange: [2, 4],
    pruefungsrelevanz: "mittel",
    voraussetzungen: ["le-06-ra-pflege-prognose"],
    status: "entwurf",
    inhaltspunkte: [],
  },
  {
    leId: "le-14-psychosoziales",
    ceId: "ce-05",
    block: "F",
    order: 14,
    title: "Psychosoziale Aspekte & Krankheitsbewältigung",
    titleShort: "Psychosoziales",
    ueCount: 2,
    estimatedSteps: 12,
    estimatedMinC1: 20,
    estimatedMinB1: 30,
    kompetenzbereiche: ["KB-I.3", "KB-II.2", "KB-V.1"],
    bloomRange: [3, 5],
    pruefungsrelevanz: "mittel",
    voraussetzungen: ["le-06-ra-pflege-prognose"],
    status: "entwurf",
    inhaltspunkte: [],
  },

  // ==========================================
  // BLOCK G: Vertiefung & Prüfung (4 UE)
  // ==========================================
  {
    leId: "le-15-evidenz-leitlinien",
    ceId: "ce-05",
    block: "G",
    order: 15,
    title: "Evidenzbasierte Pflege & Leitlinien",
    titleShort: "Evidenz",
    ueCount: 2,
    estimatedSteps: 10,
    estimatedMinC1: 15,
    estimatedMinB1: 25,
    kompetenzbereiche: ["KB-IV.1", "KB-V.1"],
    bloomRange: [3, 5],
    pruefungsrelevanz: "mittel",
    voraussetzungen: ["le-12-schmerzmanagement"],
    status: "entwurf",
    inhaltspunkte: [],
  },
  {
    leId: "le-16-fallarbeit-pruefung",
    ceId: "ce-05",
    block: "G",
    order: 16,
    title: "Komplexe Fallarbeit & Prüfungsvorbereitung",
    titleShort: "Prüfung",
    ueCount: 2,
    estimatedSteps: 15,
    estimatedMinC1: 25,
    estimatedMinB1: 40,
    kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-III.2", "KB-IV.1", "KB-V.1"],
    bloomRange: [3, 6],
    pruefungsrelevanz: "hoch",
    voraussetzungen: ["le-15-evidenz-leitlinien"],
    status: "entwurf",
    inhaltspunkte: [],
  },
];

// Hilfsfunktion: Lektion per leId finden
export function findLektion(leId: string): LektionManifest | undefined {
  return CE05_MANIFEST.find((l) => l.leId === leId);
}

// Blöcke mit Labels
export const BLOCK_LABELS: Record<string, string> = {
  A: "Grundlagen",
  B: "Rheumatoide Arthritis",
  C: "Gicht & Kristallarthropathien",
  D: "Spondyloarthritiden",
  E: "Kollagenosen & Vaskulitiden",
  F: "Querschnittsthemen",
  G: "Vertiefung & Prüfung",
};

// 12-Punkte-Struktur Labels
export const INHALTSPUNKTE_LABELS: Record<number, string> = {
  1: "Kurzbeschreibung",
  2: "Definition",
  3: "Ursachen & Risikofaktoren",
  4: "Pathomechanismus",
  5: "Symptome",
  6: "Formen / Klassifikation",
  7: "Diagnose",
  8: "Therapie (med. + nicht-med.)",
  9: "Pflege & Beratung",
  10: "Komplikationen",
  11: "Prognose",
  12: "Kompetenzbereiche & Literatur",
};

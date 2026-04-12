/**
 * CE-Übersichtsdaten für die Fortschrittsseite.
 * Alle 11 Curricularen Einheiten der generalistischen Pflegeausbildung.
 */

export interface CeInfo {
  id: string;
  titel: string;
  les: number;
  farbe: string;
}

export const ceUebersicht: CeInfo[] = [
  { id: "ce-01", titel: "Ausbildungsstart", les: 5, farbe: "#C4877F" },
  { id: "ce-02", titel: "Zu pflegende Menschen", les: 6, farbe: "#6B8F71" },
  { id: "ce-03", titel: "Erste Pflegeerfahrungen", les: 5, farbe: "#D4956A" },
  { id: "ce-04", titel: "Gesundheit fördern", les: 5, farbe: "#9B7EA6" },
  { id: "ce-05", titel: "Pflegeprozess gestalten", les: 5, farbe: "#C96B5C" },
  { id: "ce-06", titel: "In Akutsituationen handeln", les: 4, farbe: "#B07A72" },
  { id: "ce-07", titel: "Rehabilitativ pflegen", les: 5, farbe: "#5856D6" },
  { id: "ce-08", titel: "Menschen in Krisen begleiten", les: 5, farbe: "#00C7BE" },
  { id: "ce-09", titel: "Langzeitpflegesettings", les: 5, farbe: "#FF6482" },
  { id: "ce-10", titel: "Entwicklung + Sozialisation", les: 5, farbe: "#64D2FF" },
  { id: "ce-11", titel: "Berufliches Handeln", les: 5, farbe: "#FFD60A" },
];

/** Gesamtanzahl aller LEs über alle CEs */
export const TOTAL_LES = ceUebersicht.reduce((sum, ce) => sum + ce.les, 0);

/**
 * Berechnet die LE-IDs die zu einer CE gehören.
 * z.B. ce-01 → ["le-01", "le-02", "le-03", "le-04", "le-05"]
 */
export function getLeIdsFuerCe(ceId: string): string[] {
  const ceIndex = ceUebersicht.findIndex((ce) => ce.id === ceId);
  if (ceIndex === -1) return [];

  let startLe = 1;
  for (let i = 0; i < ceIndex; i++) {
    startLe += ceUebersicht[i].les;
  }

  const count = ceUebersicht[ceIndex].les;
  return Array.from({ length: count }, (_, i) => {
    const num = startLe + i;
    return `le-${num.toString().padStart(2, "0")}`;
  });
}

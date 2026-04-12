// Globales Patienten-Register — LE-übergreifende Leitfälle
// Jeder Patient kann in mehreren LEs vorkommen (Fallverlauf über die Ausbildung)

import type { ExamPatient } from "./_types";

/**
 * Globales Register aller Patienten die in LEs vorkommen.
 * Wird vom Cross-LE-Loader und Prüfungsmodus genutzt.
 *
 * Konvention: patientId = "pat-{vorname}-{nn}"
 * sourceLEs = alle LEs in denen dieser Patient vorkommt
 */
export const PATIENTEN_REGISTER: ExamPatient[] = [
  // --- LE-01: Ausbildungsstart (CE 01) ---
  {
    patientId: "pat-margarete-01",
    name: "Margarete Weber",
    alter: 82,
    geschlecht: "w",
    diagnosen: ["Demenz (Alzheimer Typ)", "Sturzrisiko"],
    sourceLEs: ["le-01"],
    steckbrief: "82 Jahre, lebt im Pflegeheim, Demenz im mittleren Stadium. Ehemann verstorben, Tochter besucht regelmäßig.",
  },

  // --- LE-06: Mobilität (CE 02) ---
  {
    patientId: "pat-ahmed-01",
    name: "Ahmed Yılmaz",
    alter: 68,
    geschlecht: "m",
    diagnosen: ["Hüft-TEP links", "Diabetes mellitus Typ 2"],
    sourceLEs: ["le-06"],
    steckbrief: "68 Jahre, nach Hüft-OP, Diabetes seit 15 Jahren. Spricht Deutsch auf B1-Niveau, Familie sehr involviert.",
  },

  // --- LE-08: Ernährung (CE 02) ---
  {
    patientId: "pat-elisabeth-01",
    name: "Elisabeth Kramer",
    alter: 42,
    geschlecht: "w",
    diagnosen: ["Multiple Sklerose (schubförmig)", "Dysphagie Grad 2", "Mangelernährung (BMI 17,8)"],
    sourceLEs: ["le-08"],
    steckbrief: "42 Jahre, Lehrerin, seit 5 Jahren MS-Diagnose. Aktueller Schub mit Schluckstörungen, 6 kg Gewichtsverlust in 3 Monaten. Lebt allein, Schwester unterstützt.",
  },
  {
    patientId: "pat-emre-01",
    name: "Emre Demir",
    alter: 0,
    geschlecht: "m",
    diagnosen: ["Gedeihstörung", "Trinkschwäche"],
    sourceLEs: ["le-08"],
    steckbrief: "6 Monate alt, Gewicht unter 3. Perzentile. Eltern türkischstämmig, Mutter stillt, Vater spricht wenig Deutsch. Kinderarzt überweist zur stationären Abklärung.",
  },
  {
    patientId: "pat-walter-01",
    name: "Walter Bergmann",
    alter: 84,
    geschlecht: "m",
    diagnosen: ["Demenz (vaskulär, fortgeschritten)", "PEG seit 4 Wochen", "Herzinsuffizienz NYHA II"],
    sourceLEs: ["le-08"],
    steckbrief: "84 Jahre, lebt im Pflegeheim. Schluckt kaum noch, PEG-Sonde vor 4 Wochen angelegt. Ehefrau (79) besucht täglich, hadert mit der PEG-Entscheidung.",
  },

  // --- Weitere Patienten werden bei LE-Generierung ergänzt ---
];

/**
 * Findet einen Patienten nach ID.
 */
export function getPatient(patientId: string): ExamPatient | undefined {
  return PATIENTEN_REGISTER.find((p) => p.patientId === patientId);
}

/**
 * Findet alle Patienten die in einer bestimmten LE vorkommen.
 */
export function getPatientenFuerLE(leId: string): ExamPatient[] {
  return PATIENTEN_REGISTER.filter((p) => p.sourceLEs.includes(leId));
}

/**
 * Findet Patienten die in mindestens 2 LEs vorkommen (für Cross-LE-Fälle).
 */
export function getCrossLEPatienten(): ExamPatient[] {
  return PATIENTEN_REGISTER.filter((p) => p.sourceLEs.length >= 2);
}

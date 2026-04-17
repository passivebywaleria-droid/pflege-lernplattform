// LE-01 Metadata — extrahiert aus steps-s1.ts (Naming-Standard 2026-04-16)

import type { LektionMetadata } from "../_types";

export const LE01_METADATA: LektionMetadata = {
  leId: "le-01",
  ceId: "ce-01",
  title: "Personen- und situationsorientiert professionell pflegen",
  titleShort: "Professionell pflegen",
  zeitrichtwert: 40,
  sessionCount: 6,
  geschaetzteLernzeit: { c1: 30, b1: 40 },
  kompetenzbereiche: ["KB-V.1"],
  bloomStufen: [1, 2, 3],
  voraussetzungen: [],
  leitfall: {
    name: "Lina M.",
    alter: 16,
    beruf: "Pflegeschülerin",
    diagnose: "Ausbildungsbeginn, erster Praxistag",
    setting: "Pflegeschule und Krankenhaus",
    kernproblem: "Orientierung im neuen Beruf, Rollenverständnis",
  },
  glossarCount: 25,
  quellenCount: 3,
};

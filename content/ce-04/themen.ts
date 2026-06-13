// CE-04 — Themen-Array für content-loader (Kommunikations-Welle, LE1+LE3)
// Lernergebnis-First (specs/ce-04/kommunikation-build-plan.md)
// Registriert die Themen, die vollständig mit TS-Dateien vorliegen.

import type { Thema } from "../_types";

import {
  CE04_THEMA_KOMMUNIKATIONSMODELLE_BAUSTEINE,
  CE04_THEMA_KOMMUNIKATIONSMODELLE_GLOSSAR,
  CE04_THEMA_KOMMUNIKATIONSMODELLE_KARTEIKARTEN,
} from "./themen/kommunikationsmodelle";

import {
  CE04_THEMA_GESPRAECHSFUEHRUNG_BAUSTEINE,
  CE04_THEMA_GESPRAECHSFUEHRUNG_GLOSSAR,
  CE04_THEMA_GESPRAECHSFUEHRUNG_KARTEIKARTEN,
} from "./themen/gespraechsfuehrung";

import {
  CE04_THEMA_BERATUNG_BAUSTEINE,
  CE04_THEMA_BERATUNG_GLOSSAR,
  CE04_THEMA_BERATUNG_KARTEIKARTEN,
} from "./themen/beratung";

import {
  CE04_THEMA_KONFLIKT_DEESKALATION_BAUSTEINE,
  CE04_THEMA_KONFLIKT_DEESKALATION_GLOSSAR,
  CE04_THEMA_KONFLIKT_DEESKALATION_KARTEIKARTEN,
} from "./themen/konflikt-deeskalation";

import {
  CE04_THEMA_KULTURSENSIBLE_KOMMUNIKATION_BAUSTEINE,
  CE04_THEMA_KULTURSENSIBLE_KOMMUNIKATION_GLOSSAR,
  CE04_THEMA_KULTURSENSIBLE_KOMMUNIKATION_KARTEIKARTEN,
} from "./themen/kultursensible-kommunikation";

export const CE04_THEMEN: Thema[] = [
  // Cluster A — Kommunikation (LE1)
  {
    themaId: "kommunikationsmodelle",
    ceId: "ce-04",
    titel: "Kommunikationsmodelle",
    kompetenzbereich: "II.1",
    wissensart: "konzept",
    voraussetzungen: [],
    cluster: "A",
    geschaetzteUE: 6,
    bausteine: CE04_THEMA_KOMMUNIKATIONSMODELLE_BAUSTEINE,
    glossar: CE04_THEMA_KOMMUNIKATIONSMODELLE_GLOSSAR,
    karteikarten: CE04_THEMA_KOMMUNIKATIONSMODELLE_KARTEIKARTEN,
  },
  {
    themaId: "gespraechsfuehrung",
    ceId: "ce-04",
    titel: "Gesprächsführung",
    kompetenzbereich: "II.1",
    wissensart: "konzept",
    voraussetzungen: ["kommunikationsmodelle"],
    cluster: "A",
    geschaetzteUE: 6,
    bausteine: CE04_THEMA_GESPRAECHSFUEHRUNG_BAUSTEINE,
    glossar: CE04_THEMA_GESPRAECHSFUEHRUNG_GLOSSAR,
    karteikarten: CE04_THEMA_GESPRAECHSFUEHRUNG_KARTEIKARTEN,
  },
  {
    themaId: "beratung",
    ceId: "ce-04",
    titel: "Beratung",
    kompetenzbereich: "II.2",
    wissensart: "konzept",
    voraussetzungen: ["gespraechsfuehrung"],
    cluster: "A",
    geschaetzteUE: 6,
    bausteine: CE04_THEMA_BERATUNG_BAUSTEINE,
    glossar: CE04_THEMA_BERATUNG_GLOSSAR,
    karteikarten: CE04_THEMA_BERATUNG_KARTEIKARTEN,
  },
  {
    themaId: "konflikt-deeskalation",
    ceId: "ce-04",
    titel: "Konflikt & Deeskalation",
    kompetenzbereich: "II.1",
    wissensart: "konzept",
    voraussetzungen: ["gespraechsfuehrung"],
    cluster: "A",
    geschaetzteUE: 6,
    bausteine: CE04_THEMA_KONFLIKT_DEESKALATION_BAUSTEINE,
    glossar: CE04_THEMA_KONFLIKT_DEESKALATION_GLOSSAR,
    karteikarten: CE04_THEMA_KONFLIKT_DEESKALATION_KARTEIKARTEN,
  },
  {
    themaId: "kultursensible-kommunikation",
    ceId: "ce-04",
    titel: "Kultursensible Kommunikation",
    kompetenzbereich: "II.1",
    wissensart: "konzept",
    voraussetzungen: ["kommunikationsmodelle"],
    cluster: "A",
    geschaetzteUE: 8,
    bausteine: CE04_THEMA_KULTURSENSIBLE_KOMMUNIKATION_BAUSTEINE,
    glossar: CE04_THEMA_KULTURSENSIBLE_KOMMUNIKATION_GLOSSAR,
    karteikarten: CE04_THEMA_KULTURSENSIBLE_KOMMUNIKATION_KARTEIKARTEN,
  },
];

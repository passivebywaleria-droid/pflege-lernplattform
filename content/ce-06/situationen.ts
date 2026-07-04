// CE-06 — Situationen-Array für content-loader (SituationsTyp "akutsituation")
// Welle 1: Reanimation (LE1) — Demo-Wow „Branching unter Zeitdruck".
import type { Lernsituation } from "../_types";

import {
  CE06_SIT_WAGNER_PATIENT,
  CE06_SIT_WAGNER_ERKENNEN,
  CE06_SIT_WAGNER_ALARMIEREN,
  CE06_SIT_WAGNER_ERSTMASSNAHMEN,
  CE06_SIT_WAGNER_UEBERGEBEN,
  CE06_SIT_WAGNER_REFLEKTIEREN,
} from "./situationen/ls-wagner-reanimation";

import {
  CE06_SIT_RIOS_PATIENT,
  CE06_SIT_RIOS_ERKENNEN,
  CE06_SIT_RIOS_ALARMIEREN,
  CE06_SIT_RIOS_ERSTMASSNAHMEN,
  CE06_SIT_RIOS_UEBERGEBEN,
  CE06_SIT_RIOS_REFLEKTIEREN,
} from "./situationen/ls-rios-synkope";

import {
  CE06_SIT_LEHMANN_PATIENT,
  CE06_SIT_LEHMANN_ERKENNEN,
  CE06_SIT_LEHMANN_ALARMIEREN,
  CE06_SIT_LEHMANN_ERSTMASSNAHMEN,
  CE06_SIT_LEHMANN_UEBERGEBEN,
  CE06_SIT_LEHMANN_REFLEKTIEREN,
} from "./situationen/ls-lehmann-sturz-sht";

import {
  CE06_SIT_NOVAK_PATIENT,
  CE06_SIT_NOVAK_ERKENNEN,
  CE06_SIT_NOVAK_ALARMIEREN,
  CE06_SIT_NOVAK_ERSTMASSNAHMEN,
  CE06_SIT_NOVAK_UEBERGEBEN,
  CE06_SIT_NOVAK_REFLEKTIEREN,
} from "./situationen/ls-novak-erregung";

import {
  CE06_SIT_YILDIZ_PATIENT,
  CE06_SIT_YILDIZ_ERKENNEN,
  CE06_SIT_YILDIZ_ALARMIEREN,
  CE06_SIT_YILDIZ_ERSTMASSNAHMEN,
  CE06_SIT_YILDIZ_UEBERGEBEN,
  CE06_SIT_YILDIZ_REFLEKTIEREN,
} from "./situationen/ls-yildiz-thoraxschmerz";

import {
  CE06_SIT_GRUBER_PATIENT,
  CE06_SIT_GRUBER_ERKENNEN,
  CE06_SIT_GRUBER_ALARMIEREN,
  CE06_SIT_GRUBER_ERSTMASSNAHMEN,
  CE06_SIT_GRUBER_UEBERGEBEN,
  CE06_SIT_GRUBER_REFLEKTIEREN,
} from "./situationen/ls-gruber-schock";

export const CE06_SITUATIONEN: Lernsituation[] = [
  {
    situationId: "ls-wagner-reanimation",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_WAGNER_PATIENT,
    titel: "Herr Wagner — Reanimation auf Normalstation",
    titelB1: "Herr Wagner — Reanimation auf der Station",
    themen: ["reanimation-bls", "notfallassessment", "notfallkommunikation-sbar"],
    spirale: 1,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_WAGNER_ERKENNEN,
      CE06_SIT_WAGNER_ALARMIEREN,
      CE06_SIT_WAGNER_ERSTMASSNAHMEN,
      CE06_SIT_WAGNER_UEBERGEBEN,
      CE06_SIT_WAGNER_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-rios-synkope",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_RIOS_PATIENT,
    titel: "Herr Ríos — Synkope während der Dialyse",
    titelB1: "Herr Ríos — Ohnmacht bei der Dialyse",
    themen: ["neurologische-akutsituationen", "notfallkommunikation-sbar"],
    spirale: 2,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_RIOS_ERKENNEN,
      CE06_SIT_RIOS_ALARMIEREN,
      CE06_SIT_RIOS_ERSTMASSNAHMEN,
      CE06_SIT_RIOS_UEBERGEBEN,
      CE06_SIT_RIOS_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-lehmann-sturz-sht",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_LEHMANN_PATIENT,
    titel: "Frau Lehmann — Sturz mit Kopfverletzung im Pflegeheim",
    titelB1: "Frau Lehmann — Sturz mit Kopfverletzung",
    themen: ["traumatologische-erstversorgung", "notfallassessment", "notfallkommunikation-sbar"],
    spirale: 2,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_LEHMANN_ERKENNEN,
      CE06_SIT_LEHMANN_ALARMIEREN,
      CE06_SIT_LEHMANN_ERSTMASSNAHMEN,
      CE06_SIT_LEHMANN_UEBERGEBEN,
      CE06_SIT_LEHMANN_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-novak-erregung",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_NOVAK_PATIENT,
    titel: "Herr Novak — akute psychotische Erregung",
    titelB1: "Herr Novak — akute Erregung",
    themen: ["psychische-akutsituationen", "notfallkommunikation-sbar"],
    spirale: 2,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_NOVAK_ERKENNEN,
      CE06_SIT_NOVAK_ALARMIEREN,
      CE06_SIT_NOVAK_ERSTMASSNAHMEN,
      CE06_SIT_NOVAK_UEBERGEBEN,
      CE06_SIT_NOVAK_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-yildiz-thoraxschmerz",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_YILDIZ_PATIENT,
    titel: "Frau Yıldız — akuter Thoraxschmerz (Verdacht Herzinfarkt)",
    titelB1: "Frau Yıldız — Brustschmerz (Verdacht Herzinfarkt)",
    themen: ["herz-kreislauf-akut", "notfallkommunikation-sbar"],
    spirale: 2,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_YILDIZ_ERKENNEN,
      CE06_SIT_YILDIZ_ALARMIEREN,
      CE06_SIT_YILDIZ_ERSTMASSNAHMEN,
      CE06_SIT_YILDIZ_UEBERGEBEN,
      CE06_SIT_YILDIZ_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-gruber-schock",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_GRUBER_PATIENT,
    titel: "Herr Gruber — hypovolämischer Schock bei Magenblutung",
    titelB1: "Herr Gruber — Schock bei Magenblutung",
    themen: ["schock-und-kreislauf", "notfallkommunikation-sbar"],
    spirale: 2,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_GRUBER_ERKENNEN,
      CE06_SIT_GRUBER_ALARMIEREN,
      CE06_SIT_GRUBER_ERSTMASSNAHMEN,
      CE06_SIT_GRUBER_UEBERGEBEN,
      CE06_SIT_GRUBER_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
];

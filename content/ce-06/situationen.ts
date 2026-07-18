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

import {
  CE06_SIT_KORTMANN_PATIENT,
  CE06_SIT_KORTMANN_ERKENNEN,
  CE06_SIT_KORTMANN_ALARMIEREN,
  CE06_SIT_KORTMANN_ERSTMASSNAHMEN,
  CE06_SIT_KORTMANN_UEBERGEBEN,
  CE06_SIT_KORTMANN_REFLEKTIEREN,
} from "./situationen/ls-kortmann-abdomen";

import {
  CE06_SIT_RADTKE_PATIENT,
  CE06_SIT_RADTKE_ERKENNEN,
  CE06_SIT_RADTKE_ALARMIEREN,
  CE06_SIT_RADTKE_ERSTMASSNAHMEN,
  CE06_SIT_RADTKE_UEBERGEBEN,
  CE06_SIT_RADTKE_REFLEKTIEREN,
} from "./situationen/ls-radtke-brand";

import {
  CE06_SIT_ERLEMANN_PATIENT,
  CE06_SIT_ERLEMANN_ERKENNEN,
  CE06_SIT_ERLEMANN_ALARMIEREN,
  CE06_SIT_ERLEMANN_ERSTMASSNAHMEN,
  CE06_SIT_ERLEMANN_UEBERGEBEN,
  CE06_SIT_ERLEMANN_REFLEKTIEREN,
} from "./situationen/ls-erlemann-organspende";

import {
  CE06_SIT_SANDER_PATIENT,
  CE06_SIT_SANDER_ERKENNEN,
  CE06_SIT_SANDER_ALARMIEREN,
  CE06_SIT_SANDER_ERSTMASSNAHMEN,
  CE06_SIT_SANDER_UEBERGEBEN,
  CE06_SIT_SANDER_REFLEKTIEREN,
} from "./situationen/ls-sander-verbruehung";

import {
  CE06_SIT_PETROVA_PATIENT,
  CE06_SIT_PETROVA_ERKENNEN,
  CE06_SIT_PETROVA_ALARMIEREN,
  CE06_SIT_PETROVA_ERSTMASSNAHMEN,
  CE06_SIT_PETROVA_UEBERGEBEN,
  CE06_SIT_PETROVA_REFLEKTIEREN,
} from "./situationen/ls-capstone-am-boden";

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
    // Abschluss-Screen: Outcome wortgetreu aus Phase 5 („Danach"): Verlegung
    // auf die Intensivstation mit wiederkehrendem Kreislauf.
    abschlussText:
      "Herr Wagner ist auf der Intensivstation, sein Kreislauf ist zurück. Die Rettungskette hat gehalten — weil du sie sofort in Gang gesetzt hast.",
    abschlussTextB1:
      "Herr Wagner ist auf der Intensivstation. Sein Kreislauf ist zurück. Die Rettungskette hat gehalten — weil du sofort gehandelt hast.",
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
    // Teaser erscheint auf dem Wagner-Abschluss; Fakten aus der Situation
    // (Synkope während der Dialyse, kommt von allein zurück, BZ-Stich).
    teaser:
      "Herr Ríos sackt während der Dialyse weg — und kommt von allein wieder zu sich. Kein zweiter Wagner. Aber was dann? Ein einziger Handgriff entscheidet.",
    teaserB1:
      "Herr Ríos wird bei der Dialyse plötzlich ohnmächtig — und wacht von allein wieder auf. Kein zweiter Wagner. Aber was jetzt? Ein einziger Handgriff entscheidet.",
    // Outcome wortgetreu aus der Übergeben-Phase: Glukose vom Arzt,
    // Kontroll-BZ 120 mg/dl, Verlegung zur Überwachung.
    abschlussText:
      "Herr Ríos ist wach, der Kontroll-Blutzucker liegt bei 120 — er wird zur Überwachung verlegt. Gemessen statt geraten: Das hat den Unterschied gemacht.",
    abschlussTextB1:
      "Herr Ríos ist wach. Der Blutzucker ist wieder 120. Er kommt zur Überwachung auf die Station. Du hast gemessen statt geraten — das war der Unterschied.",
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
    // Teaser erscheint auf dem Ríos-Abschluss; Fakten aus patient.ts
    // (86, nachts im Pflegeheim, Kopfplatzwunde, V. a. SHT).
    teaser:
      "Nachtdienst im Pflegeheim: Frau Lehmann, 86, liegt neben ihrem Bett — eine Platzwunde am Kopf. Wie ernst das ist, entscheidet sich in den nächsten Minuten. Mit dir.",
    teaserB1:
      "Nachtdienst im Pflegeheim: Frau Lehmann (86) liegt neben ihrem Bett. Sie hat eine Wunde am Kopf. Wie ernst ist das? Das entscheidet sich jetzt — mit dir.",
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
  {
    situationId: "ls-kortmann-abdomen",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_KORTMANN_PATIENT,
    titel: "Herr Kortmann — akutes Abdomen, Kolostoma & Drainagen (post-OP)",
    titelB1: "Herr Kortmann — nach der Bauch-OP: Stoma, Drainagen, Nachblutung",
    themen: ["abdomen-stoma-drainagen", "notfallkommunikation-sbar"],
    spirale: 2,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_KORTMANN_ERKENNEN,
      CE06_SIT_KORTMANN_ALARMIEREN,
      CE06_SIT_KORTMANN_ERSTMASSNAHMEN,
      CE06_SIT_KORTMANN_UEBERGEBEN,
      CE06_SIT_KORTMANN_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-radtke-brand",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_RADTKE_PATIENT,
    titel: "Nächtlicher Brand im Pflegeheim — Katastrophe, Triage & Krisenintervention",
    titelB1: "Brand im Pflegeheim — Katastrophe, Triage, Krisenhilfe",
    themen: ["katastrophe-triage-krise"],
    spirale: 3,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_RADTKE_ERKENNEN,
      CE06_SIT_RADTKE_ALARMIEREN,
      CE06_SIT_RADTKE_ERSTMASSNAHMEN,
      CE06_SIT_RADTKE_UEBERGEBEN,
      CE06_SIT_RADTKE_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-erlemann-organspende",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_ERLEMANN_PATIENT,
    titel: "Organspende & Hirntod — ein junger Mensch auf der Intensivstation",
    titelB1: "Organspende & Hirntod — auf der Intensivstation",
    themen: ["organspende-hirntod"],
    spirale: 3,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_ERLEMANN_ERKENNEN,
      CE06_SIT_ERLEMANN_ALARMIEREN,
      CE06_SIT_ERLEMANN_ERSTMASSNAHMEN,
      CE06_SIT_ERLEMANN_UEBERGEBEN,
      CE06_SIT_ERLEMANN_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-sander-verbruehung",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_SANDER_PATIENT,
    titel: "Frau Sander — Verbrühung im ambulanten Pflegebesuch",
    titelB1: "Frau Sander — Verbrühung mit heißem Wasser",
    themen: ["thermisch-chemische-notfaelle", "notfallkommunikation-sbar"],
    spirale: 2,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_SANDER_ERKENNEN,
      CE06_SIT_SANDER_ALARMIEREN,
      CE06_SIT_SANDER_ERSTMASSNAHMEN,
      CE06_SIT_SANDER_UEBERGEBEN,
      CE06_SIT_SANDER_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-capstone-am-boden",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    patient: CE06_SIT_PETROVA_PATIENT,
    titel: "Jemand liegt am Boden — was ist es? (Differenzierungs-Capstone)",
    titelB1: "Jemand liegt am Boden — was ist es?",
    themen: ["notfallassessment", "neurologische-akutsituationen", "reanimation-bls", "notfallkommunikation-sbar"],
    spirale: 3,
    geschaetzteUE: 1,
    phasen: [
      CE06_SIT_PETROVA_ERKENNEN,
      CE06_SIT_PETROVA_ALARMIEREN,
      CE06_SIT_PETROVA_ERSTMASSNAHMEN,
      CE06_SIT_PETROVA_UEBERGEBEN,
      CE06_SIT_PETROVA_REFLEKTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
];

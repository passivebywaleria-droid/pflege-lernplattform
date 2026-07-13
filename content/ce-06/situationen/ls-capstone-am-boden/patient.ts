// CE-06 Differenzierungs-Capstone „Jemand liegt am Boden — was ist es?“ — Patient
// SituationsTyp: akutsituation. Retrieval/Interleaving-Capstone über LE1: verzahnt K2 (HKS/Reanimation),
// K3 (Synkope/Hypoglykämie/Apoplex/Krampfanfall) und K4 (organische Erregung). KEIN neuer Kernfakt —
// nutzt reanimation-bls + neurologische-akutsituationen + psychische-akutsituationen + notfallassessment.
// Frau Petrova ist der rote Faden (eine Synkope); daneben stehen andere „liegt am Boden“-Fälle zum Unterscheiden.

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_PETROVA_PATIENT: PatientBeschreibung = {
  patientId: "pat-petrova-kollaps",
  name: "Wanda Petrova",
  alter: 68,
  geschlecht: "w",
  diagnosen: ["Synkope (kurze Bewusstlosigkeit, Ursache in Abklärung)"],
  nebendiagnosen: [
    "arterielle Hypertonie",
    "in den letzten Wochen gelegentlich Schwindel beim Aufstehen",
  ],
  setting: "Aufenthaltsraum einer geriatrischen Station, Vormittag — du bist die zuerst hinzukommende Pflegekraft",
  hintergrund:
    "Frau Petrova sitzt im Aufenthaltsraum, steht zum Fenster auf — und sackt vor den Augen der anderen langsam zu Boden. Du bist als Erste bei ihr. In den nächsten Minuten musst du herausfinden, was los ist. Genau darin liegt die Kunst dieser Situation: nicht raten und nicht sofort das Schlimmste annehmen, sondern der Reihe nach prüfen. Ihr Fall ist der rote Faden; daneben tauchen weitere Menschen auf, die plötzlich am Boden liegen — jeder mit einer anderen Ursache.",
  hintergrundB1:
    "Frau Petrova steht im Aufenthaltsraum auf und sackt langsam zu Boden. Du bist als Erste bei ihr. Du musst herausfinden, was los ist — nicht raten, sondern der Reihe nach prüfen. Später kommen weitere Fälle dazu, bei denen jemand am Boden liegt, jeder mit einer anderen Ursache.",
  persoenlichkeit:
    "Normalerweise wach und orientiert. Nach dem Kollaps kurz benommen und blass, kommt aber innerhalb von etwa einer Minute von selbst wieder zu sich und ist dann wieder ansprechbar.",
  persoenlichkeitB1:
    "Normalerweise wach und klar. Nach dem Umkippen kurz benommen und blass, aber sie kommt nach etwa einer Minute von selbst wieder zu sich.",
  zitate: [
    "Mir wurde so schwarz vor Augen... was ist denn passiert?",
  ],
};

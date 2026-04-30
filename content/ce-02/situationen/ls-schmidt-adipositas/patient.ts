// CE-02 Situation Frau Helga Schmidt — Patientenbeschreibung
// Quelle: content/ce-02/situationen/ls-schmidt-adipositas/patient-plan.md
// Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_PATIENT: PatientBeschreibung = {
  patientId: "pat-helga-schmidt",
  name: "Helga Schmidt",
  alter: 68,
  geschlecht: "w",
  diagnosen: [
    "Diabetes mellitus Typ 2 — seit 8 Jahren, heute Metformin 500 mg 2× tgl. neu angesetzt",
    "Adipositas Grad II — BMI 38 (98 kg / 1,60 m)",
    "Diabetisches Fußsyndrom Wagner Grad 1 (Wagner-Armstrong 1A — oberflächliche Läsion ohne Infektion und ohne Ischämie) — trockene Haut, erste Rissbildung plantar, keine offene Wunde",
    "Belastungsinkontinenz — seit ca. 2 Jahren, bisher unbehandelt",
    "Intertrigogefahr (Intertrigo Grad 0) — Rötungsgefahr in Hautfalten (Abdomen, Leisten, submammär)",
    "Mangelernährungs-Risiko trotz Adipositas — Albumin 31 g/l (Norm: 35–52 g/l). NRS-2002-Score 1 (unauffällig). GLIM-Diagnostik positiv: phänotypisch reduzierte Muskelmasse, ätiologisch reduzierte Proteinzufuhr + Inflammation (entgleister Diabetes) → GLIM-Diagnose Mangelernährung Stadium 1",
  ],
  nebendiagnosen: ["Blutzucker-Tagesprofil noch außerhalb Zielbereich: nüchtern 187 mg/dl, postprandial 298 mg/dl"],
  setting: "Innere Station, Krankenhaus, seit 3 Tagen stationär, Aufnahme wegen entgleistenem Blutzucker (BZ 398 mg/dl bei Einlieferung)",
  hintergrund:
    "Helga Schmidt wuchs in einem Haushalt auf, in dem Essen immer 'Freude und Fülle' bedeutete — sie war das jüngste von vier Kindern, die Mutter kochte täglich für alle, reichlich und deftig. Diese Prägung sitzt tief. Nach der Scheidung vor 15 Jahren lebte sie allein, verlor die Freude am Kochen. Fertigprodukte wurden zur Gewohnheit — schnell, praktisch, billig. Sie ist geschieden, lebt allein in einer 2-Zimmer-Erdgeschoss-Wohnung ohne Stufen, kein Pflegegrad. Sohn Markus (41) wohnt 200 km entfernt und kommt selten.",
  hintergrundB1:
    "Frau Helga Schmidt ist 68 Jahre alt. Sie ist seit 3 Tagen im Krankenhaus auf der Inneren Station. Sie hat Diabetes Typ 2 (= Zucker-Krankheit) seit 8 Jahren. Frau Schmidt hat Adipositas Grad II (BMI 38). Die Nägel darf nur ein Podologe (= Fußpflege-Spezialist) schneiden. Frau Schmidt verliert manchmal unkontrolliert Urin — das nennt man Belastungs-Inkontinenz. Frau Schmidts Albumin-Wert ist niedrig: 31 g/l. Das ist das Paradox: Sie hat Adipositas, aber ihr Körper hat zu wenig Eiweiß (= Mangelernährung trotz Übergewicht). Frau Schmidt lebt allein. Ihr Sohn wohnt weit weg und kommt selten.",
  persoenlichkeit:
    "Lebhaft und selbstironisch — benutzt Humor als Schutzschild. Wenn die Sprache auf ihr Gewicht kommt, macht sie schnell einen Witz. Dahinter steckt echter Schmerz: Sie hat mehrfach versucht abzunehmen, immer gescheitert. Der Begriff 'Diät' löst bei ihr reflexartigen Widerstand aus. Bewegung vermeidet sie aktiv — jede körperliche Anstrengung ist ihr unangenehm, sie wird schnell atemlos. Zentrale emotionale Themen: Scham (über das Gewicht, die Inkontinenz), Kontrollverlust, Isolation. Bayerischer Dialekt, einfacher Wortschatz. Medizinische Begriffe sind ihr fremd — 'Albumin' kennt sie nicht, 'Diabetes' schon.",
  zitate: [
    "Mir sagt ja keiner, was ich essen soll. Hauptsache satt.",
    "Ich esse doch genug — schaün Sie mich an! Wie kann ich da Eiweiß-Mangel haben? Das versteh ich nicht.",
    "Die Füße pflege ich selbst. Schon immer. Die Nägel schneide ich mir zweimal im Jahr, das reicht doch.",
    "Ich hab's versucht, wirklich. Aber dann bin ich so außer Atem. Das ist mir unangenehm, wenn alle zuschaün.",
    "Salat? Ich bin doch kein Kaninchen. Aber wenn Sie sagen, was ich konkret machen soll — ich mein's ernst.",
    "Wissen Sie, was mich überrascht hat? Dass mein Essen so viel mit dem Zucker zu tun hat. Ich hab gedacht, das ist einfach mein Schicksal.",
  ],
};

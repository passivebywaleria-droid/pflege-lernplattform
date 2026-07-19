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
    // Auftakt: schülersprachliche 1:1-Übersetzungen der Rahmenlehrplan-
    // Lernergebnisse dieser Situation (specs/ce-06/lernergebnis-mapping.json).
    lernzieleSchueler: [
      {
        // „führen lebenserhaltende Sofortmaßnahmen durch"
        lernergebnisId: "CE06-LE1-K2",
        text: "Du führst lebenserhaltende Sofortmaßnahmen durch — Schritt für Schritt.",
        textB1: "Du machst lebensrettende Sofortmaßnahmen — Schritt für Schritt.",
      },
      {
        // „erläutern rechtliche und ethische Aspekte zur Ersten Hilfe … BLS/ALS/KPR-Indikation/AED"
        lernergebnisId: "CE06-LE1-W1",
        text: "Du erklärst die medizinischen, rechtlichen und ethischen Grundlagen der Reanimation.",
        textB1: "Du erklärst die Grundlagen der Reanimation: medizinisch, rechtlich und ethisch.",
      },
      {
        // „analysieren einrichtungsspezifische Notfallpläne und identifizieren das Aufgabenfeld von Pflegefachkräften"
        lernergebnisId: "CE06-LE1-K5",
        text: "Du kennst den Notfallplan der Station und weißt, was deine Aufgabe darin ist.",
        textB1: "Du kennst den Notfallplan der Station. Und du weißt, was deine Aufgabe ist.",
      },
      {
        // „reflektieren eigene Gefühle und erfahrene Hilfen in Not-/Unfallsituationen … empathisches Handeln"
        lernergebnisId: "CE06-LE1-E1",
        text: "Du reflektierst, was so ein Notfall mit dir und dem Team macht.",
        textB1: "Du denkst darüber nach: Was macht so ein Notfall mit dir und dem Team?",
      },
    ],
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
    // Text-Audit F-02 + Waleria 2026-07-19: „Synkope" als Titel war fachlich
    // falsch für DIESEN Fall (Synkope = kommt von allein zurück — Ríos nicht).
    // „Kollaps" ist neutral; der Hypoglykämie-Twist bleibt im Spielverlauf.
    titel: "Herr Ríos — Kollaps während der Dialyse",
    titelB1: "Herr Ríos — Kollaps bei der Dialyse",
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
    // Auftakt: schülersprachliche 1:1-Übersetzung des Rahmenlehrplan-
    // Lernergebnisses CE06-LE1-K3 (in zwei Zeilen aufgeteilt) — Spoiler-Regel
    // beachtet: die Auflösung (Hypoglykämie) wird nicht verraten.
    lernzieleSchueler: [
      {
        // „diagnostizieren neurologische Akutsituationen (z. B. Synkopen, Apoplex, epileptischer Anfall) …"
        lernergebnisId: "CE06-LE1-K3",
        text: "Du erkennst neurologische Akutsituationen — Synkope, Schlaganfall, Krampfanfall — und hältst sie auseinander.",
        textB1: "Du erkennst neurologische Notfälle: Synkope (kurze Ohnmacht), Schlaganfall, Krampfanfall. Und du hältst sie auseinander.",
      },
      {
        // „… und leiten Maßnahmen der 1. Hilfe ein"
        lernergebnisId: "CE06-LE1-K3",
        text: "Du leitest die richtigen Erste-Hilfe-Maßnahmen ein.",
        textB1: "Du startest die richtige Erste Hilfe.",
      },
    ],
    // Teaser erscheint auf dem Wagner-Abschluss. Text-Audit F-01 (2026-07-19):
    // Ríos kommt NICHT von allein zurück — er bleibt bewusstseinsgetrübt und
    // klart erst nach ärztlicher Glukose auf (Phase-4-kontext wörtlich).
    teaser:
      "Herr Ríos sackt während der Dialyse weg — kein zweiter Wagner, sein Kreislauf läuft. Aber er wacht nicht von allein auf. Ein einziger Handgriff entscheidet, was jetzt zu tun ist.",
    teaserB1:
      "Herr Ríos sackt bei der Dialyse plötzlich weg. Kein zweiter Wagner: Sein Kreislauf läuft. Aber er wacht nicht von allein auf. Ein einziger Handgriff zeigt dir, was zu tun ist.",
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
    // Auftakt: 1:1 aus CE06-LE1-K1 („führen Erste-Hilfemaßnahmen bei Wunden,
    // Blutungen, Sturz … durch"), auf die Situations-Inhalte aufgeteilt.
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE1-K1",
        text: "Du führst die Erste Hilfe nach einem Sturz durch — Wunde versorgen, Blutung stillen, richtig lagern.",
        textB1: "Du machst die Erste Hilfe nach einem Sturz: Wunde versorgen, Blutung stillen, richtig lagern.",
      },
      {
        lernergebnisId: "CE06-LE1-K1",
        text: "Du erkennst, wann ein Sturz zum Notfall wird — und überwachst, bis der Rettungsdienst da ist.",
        textB1: "Du erkennst: Wann wird ein Sturz zum Notfall? Und du überwachst, bis der Rettungsdienst kommt.",
      },
    ],
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
    // Auftakt: 1:1 aus CE06-LE1-K4 („diagnostizieren akute psychotische
    // Erregungszustände und leiten Maßnahmen der 1. Hilfe ein"), in zwei Zeilen.
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE1-K4",
        text: "Du erkennst einen akuten psychotischen Erregungszustand — und was auch dahinterstecken kann.",
        textB1: "Du erkennst eine akute psychotische Erregung. Und du weißt: Es kann auch etwas anderes dahinterstecken.",
      },
      {
        lernergebnisId: "CE06-LE1-K4",
        text: "Du leitest die richtigen ersten Maßnahmen ein — mit deiner eigenen Sicherheit zuerst.",
        textB1: "Du startest die richtigen ersten Maßnahmen. Deine eigene Sicherheit kommt zuerst.",
      },
    ],
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
    // Auftakt: 1:1 aus CE06-LE2-W3 (Klinik/Therapie Herzinfarkt),
    // CE06-LE2-K3 (atemunterstützende Lagerungen), CE06-LE2-K1 (Vitalzeichen).
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE2-W3",
        text: "Du erklärst, woran man einen Herzinfarkt erkennt — und was sofort zu tun ist.",
        textB1: "Du erklärst: Woran erkennt man einen Herzinfarkt? Und was tut man sofort?",
      },
      {
        lernergebnisId: "CE06-LE2-K3",
        text: "Du führst atemunterstützende Lagerungen durch — und weißt, wann welche passt.",
        textB1: "Du lagerst so, dass das Atmen leichter wird. Und du weißt, wann welche Lagerung passt.",
      },
      {
        lernergebnisId: "CE06-LE2-K1",
        text: "Du überwachst die Vitalzeichen engmaschig und erkennst eine Verschlechterung früh.",
        textB1: "Du überwachst die Vitalzeichen genau. So erkennst du früh, wenn es schlechter wird.",
      },
    ],
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
    // Auftakt: 1:1 aus CE06-LE2-W2 (Schockursachen/-formen), CE06-LE2-K1
    // (Vitalzeichen/Geräte), CE06-LE2-K2 (Material venöse Zugänge),
    // CE06-LE2-W3 (Teil: Sauerstoffgabe/Infusionen).
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE2-W2",
        text: "Du erklärst, wie ein Schock entsteht und welche Formen es gibt.",
        textB1: "Du erklärst: Wie entsteht ein Schock? Und welche Formen gibt es?",
      },
      {
        lernergebnisId: "CE06-LE2-K1",
        text: "Du beobachtest die Vitalzeichen — auch mit Monitor und intensivmedizinischen Geräten.",
        textB1: "Du beobachtest die Vitalzeichen. Auch mit Monitor und Geräten der Intensivmedizin.",
      },
      {
        lernergebnisId: "CE06-LE2-K2",
        text: "Du bereitest die Materialien für venöse Zugänge vor.",
        textB1: "Du bereitest das Material für Zugänge in die Vene vor.",
      },
      {
        lernergebnisId: "CE06-LE2-W3",
        text: "Du erklärst die Sauerstoffgabe und den Umgang mit Infusionen im Notfall.",
        textB1: "Du erklärst: Wie gibt man Sauerstoff? Und wie geht man mit Infusionen um?",
      },
    ],
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
    // Auftakt: 1:1 aus CE06-LE3-W1 (akutes Abdomen), CE06-LE3-W2
    // (Ileo-/Kolostoma), CE06-LE3-W3 (Drainagesysteme), CE06-LE3-K1 (Stoma-
    // Versorgung). Spoiler-Regel: Nachblutungs-Dramaturgie bleibt verborgen.
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE3-W1",
        text: "Du beschreibst, woran man ein akutes Abdomen erkennt.",
        textB1: "Du beschreibst: Woran erkennt man ein akutes Abdomen (einen akuten Bauch)?",
      },
      {
        lernergebnisId: "CE06-LE3-W2",
        text: "Du erklärst den Unterschied zwischen Ileostoma und Kolostoma — und was er für die Versorgung bedeutet.",
        textB1: "Du erklärst den Unterschied: Ileostoma und Kolostoma. Und was das für die Pflege heißt.",
      },
      {
        lernergebnisId: "CE06-LE3-W3",
        text: "Du erklärst, wie die verschiedenen Drainagen wirken — mit Sog und ohne.",
        textB1: "Du erklärst, wie Drainagen arbeiten: mit Sog und ohne Sog.",
      },
      {
        lernergebnisId: "CE06-LE3-K1",
        text: "Du versorgst einen Menschen nach einer frischen Stoma-Anlage.",
        textB1: "Du pflegst einen Menschen mit einem neuen Stoma.",
      },
    ],
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
    // Auftakt: 1:1 aus CE06-LE4-K2 (Brandschutz/Notfallplan), CE06-LE4-W1
    // (Teil: Triage), CE06-LE4-K3 (Krisenintervention), CE06-LE4-E2 (Supervision).
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE4-K2",
        text: "Du planst dein Handeln bei einem Brand — nach Brandschutzordnung und Notfallplan.",
        textB1: "Du planst: Was tue ich bei einem Brand? Nach Brandschutz-Ordnung und Notfallplan.",
      },
      {
        lernergebnisId: "CE06-LE4-W1",
        text: "Du erklärst, wie die Sichtung (Triage) funktioniert, wenn viele Menschen verletzt sind.",
        textB1: "Du erklärst die Sichtung (Triage): Wer bekommt zuerst Hilfe, wenn viele verletzt sind?",
      },
      {
        lernergebnisId: "CE06-LE4-K3",
        text: "Du stellst dar, wie eine Krisenintervention abläuft.",
        textB1: "Du zeigst: So läuft eine Krisen-Hilfe ab.",
      },
      {
        lernergebnisId: "CE06-LE4-E2",
        text: "Du diskutierst, wie Supervision hilft, selbst stabil zu bleiben.",
        textB1: "Du sprichst darüber: Wie hilft Supervision, selbst stark zu bleiben?",
      },
    ],
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
    // Auftakt: 1:1 aus CE06-LE5-W3 (Ablauf postmortale Organspende),
    // CE06-LE5-K1 (Recht/Ethik), CE06-LE5-W4 (Pflege eines hirntoten Menschen),
    // CE06-LE5-W1 (fehlende Spenderorgane).
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE5-W3",
        text: "Du erklärst, wie eine postmortale Organspende abläuft.",
        textB1: "Du erklärst: Wie läuft eine Organspende nach dem Tod ab?",
      },
      {
        lernergebnisId: "CE06-LE5-K1",
        text: "Du skizzierst die rechtlichen Grundlagen — und die ethischen Fragen dahinter.",
        textB1: "Du kennst die wichtigsten Regeln im Gesetz. Und die ethischen Fragen dazu.",
      },
      {
        lernergebnisId: "CE06-LE5-W4",
        text: "Du erläuterst, was die Pflege eines hirntoten Menschen besonders macht.",
        textB1: "Du erklärst: Was ist bei der Pflege eines hirntoten Menschen besonders?",
      },
      {
        lernergebnisId: "CE06-LE5-W1",
        text: "Du erläuterst, warum Spenderorgane fehlen — und welche Folgen das hat.",
        textB1: "Du erklärst: Warum fehlen Spender-Organe? Und welche Folgen hat das?",
      },
    ],
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
    // Auftakt: 1:1 aus CE06-LE1-K1 („führen Erste-Hilfemaßnahmen bei …
    // Hitzeerschöpfung, Verbrennungen, Erfrierungen, Verätzungen durch") —
    // Sander deckt die im Scaffold als „offen" markierten K1-Teile ab.
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE1-K1",
        text: "Du führst die Erste Hilfe bei Verbrühungen und Verbrennungen durch — kühlen, versorgen, einschätzen.",
        textB1: "Du machst die Erste Hilfe bei Verbrühungen: kühlen, versorgen, einschätzen.",
      },
      {
        lernergebnisId: "CE06-LE1-K1",
        text: "Du weißt, was bei Verätzungen und Unterkühlung zu tun ist — und was auf keinen Fall.",
        textB1: "Du weißt: Was tut man bei Verätzung und Unterkühlung? Und was darf man nicht tun?",
      },
    ],
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
    // Auftakt: Capstone integriert die LE1-Kernkompetenzen — 1:1 aus
    // CE06-LE1-K2 (lebenserhaltende Sofortmaßnahmen, hier die Entscheidung)
    // und CE06-LE1-K3 (neurologische Akutsituationen differenzieren).
    lernzieleSchueler: [
      {
        lernergebnisId: "CE06-LE1-K2",
        text: "Du entscheidest in Sekunden, ob reanimiert werden muss.",
        textB1: "Du entscheidest in Sekunden: Muss ich reanimieren?",
      },
      {
        lernergebnisId: "CE06-LE1-K3",
        text: "Du hältst Synkope, Schlaganfall und Krampfanfall auseinander und leitest die richtige Erste Hilfe ein.",
        textB1: "Du hältst Synkope (kurze Ohnmacht), Schlaganfall und Krampfanfall auseinander. Und du startest die richtige Erste Hilfe.",
      },
    ],
  },
];

// CE-02 Thema Thrombose-Prophylaxe — Karteikarten (13 Karten, 1 pro Baustein)
// Quelle: content/ce-02/themen/thrombose-prophylaxe/karteikarten-plan.md
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_THROMBOSE_PROPHYLAXE_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-thrombose-kk-01",
    vorderseite: "Nenne die drei Säulen der Virchow-Trias.",
    rueckseiteC1:
      "(1) Gefäßwandschaden (Endothel), (2) Stase (verlangsamter Blutfluss), (3) Hyperkoagulabilität (veränderte Blutzusammensetzung). Die Kombination mehrerer Faktoren erhöht das Risiko — z.B. postoperativ: alle drei gleichzeitig aktiv.",
    rueckseiteB1:
      "Drei Gründe für ein Gerinnsel: (1) Schaden an der Gefäßwand, (2) Blut fließt zu langsam, (3) Blut gerinnt leichter als normal. Zusammen sind sie besonders gefährlich.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Virchow 1856; AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-02",
    vorderseite:
      "Was ist der wichtigste Unterschied zwischen TVT und Thrombophlebitis — und welche ist gefährlicher?",
    rueckseiteC1:
      "TVT = Gerinnsel in tiefer Leitvene, Lungenembolie-Risiko, oft klinisch stumm. Thrombophlebitis = Entzündung/Gerinnsel in oberflächlicher Vene, meist harmlos. Aber: Aszendierende Thrombophlebitis kann in tiefe Venen einwachsen → TVT.",
    rueckseiteB1:
      "TVT ist gefährlicher: Das Gerinnsel sitzt tief, man sieht es nicht, und es kann in die Lunge wandern. Thrombophlebitis sieht man als roten Strang — meist harmlos, aber auch sie kann zur TVT werden.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-03",
    vorderseite:
      "Wie wandert ein Thrombus bei einer Lungenembolie durch den Körper? Nenne alle Stationen.",
    rueckseiteC1:
      "Tiefe Beinvene → untere Hohlvene → rechter Vorhof → rechte Kammer → Lungenarterie. Dort Verschluss → reduzierte O₂-Aufnahme → Rechtsherzbelastung → potenziell tödlich.",
    rueckseiteB1:
      "Das Gerinnsel wandert: Beinvene → Hohlvene → rechtes Herz → Lungenader. Dort verstopft es. Das Blut bekommt keinen Sauerstoff mehr. Das kann tödlich sein.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-04",
    vorderseite:
      "Welcher Score ist für internistische, welcher für chirurgische Patienten empfohlen — und wann muss das Assessment wiederholt werden?",
    rueckseiteC1:
      "Padua-Prediction-Score → internistisch (ACCP-Leitlinie). Caprini-Score → chirurgisch (AWMF S3 VTE 2015). Re-Assessment bei jeder Zustandsänderung (neue OP, Infekt, Immobilität) — nicht nur einmalig bei Aufnahme.",
    rueckseiteB1:
      "Für Patienten nach einer OP: Caprini-Score. Für kranke Patienten ohne OP: Padua-Score. Das Assessment wird wiederholt, wenn sich der Zustand ändert.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015; ACCP-Leitlinie",
  },
  {
    id: "ce02-thrombose-kk-05",
    vorderseite:
      "Welche Maßnahme der Thromboseprophylaxe hat die stärkste Evidenz — und warum?",
    rueckseiteC1:
      "Frühmobilisation. Sie aktiviert die Wadenmuskelpumpe, die ca. 80% des venösen Rückflusses aus dem Bein leistet. Schon wenige Schritte am 1. postoperativen Tag wirken. Wirksamer als jede einzelne medikamentöse oder physikalische Maßnahme allein.",
    rueckseiteB1:
      "Frühmobilisation — Bewegung so früh wie möglich. Die Wadenmuskeln pumpen das Blut nach oben. Das macht 80% des Blutrückflusses. Schon wenige Schritte helfen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-06",
    vorderseite:
      "Was beobachtest du täglich bei einem Patienten, der NMH bekommt?",
    rueckseiteC1:
      "Blutungszeichen (blaue Flecken, Nasenbluten, Blut im Urin/Stuhl, Kopfschmerz), Thrombozyten-Verlauf (HIT-Verdacht bei >50% Abfall nach 5-14 Tagen), Nierenfunktion (NMH wird renal ausgeschieden). Bei Auffälligkeit: sofort Arzt informieren.",
    rueckseiteB1:
      "Gibt es Blutungszeichen? Blaue Flecken, Nasenbluten, Blut im Urin oder Stuhl? Nach 5-14 Tagen: Blutplättchen prüfen (HIT). Nierenwerte beachten. Bei allem Auffälligen: sofort Arzt rufen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-07",
    vorderseite:
      "Nenne die drei 'Nicht-Regeln' bei der subkutanen NMH-Injektion — und erkläre jeweils warum.",
    rueckseiteC1:
      "(1) NICHT aspirieren → erhöht Hämatom-Risiko ohne Nutzen (s.c., nicht i.m.). (2) NICHT reiben nach Injektion → Hauptursache für Hämatome. (3) Luftbläschen NICHT entfernen → absichtlicher Luftblock, damit Wirkstoff vollständig im Gewebe bleibt.",
    rueckseiteB1:
      "(1) Nicht zurückziehen und prüfen — macht blaue Flecken. (2) Nicht reiben danach — macht blaue Flecken. (3) Luftblasen nicht rausmachen — die sind so gewollt, damit alles im Gewebe bleibt.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-08",
    vorderseite:
      "Wann ist die Indikation für MTPS nach aktueller AWMF-Leitlinie klar — und wann ist der Zusatznutzen nicht belegt?",
    rueckseiteC1:
      "Klare Indikation: wenn medikamentöse Prophylaxe (NMH) kontraindiziert ist (z.B. akute Blutung, HIT). Zusatznutzen zu NMH: nicht eindeutig belegt (CLOTS, Hüft-TEP-Studien). Kein Routineeinsatz für alle stationären Patienten — Indikation prüfen.",
    rueckseiteB1:
      "MTPS nur wenn die Spritze (NMH) nicht möglich ist (z.B. wegen Blutungsgefahr). Ob sie zusätzlich zur Spritze hilft — das ist nicht bewiesen. Nicht bei allen Patienten anlegen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-09",
    vorderseite:
      "Welchen Index musst du bei Verdacht auf pAVK vor MTPS-Anlage prüfen — und was bedeuten die Grenzwerte?",
    rueckseiteC1:
      "Knöchel-Arm-Index (ABI = Blutdruck Knöchel / Blutdruck Arm). Normwert: >0,9. ABI <0,5 = schwere pAVK = absolute Kontraindikation für MTPS. ABI 0,5-0,9 = relative KI, nur mit Arzt-Freigabe und engmaschiger Kontrolle. Zeichen für pAVK: kühle, blasse oder livide Füße.",
    rueckseiteB1:
      "Knöchel-Arm-Index (ABI): Blutdruck am Knöchel durch Blutdruck am Arm. Normal: über 0,9. Unter 0,5 = MTPS absolut verboten. Zeichen für pAVK: kalte, blasse oder bläuliche Füße.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-10",
    vorderseite:
      "Wann ist IPK indiziert — und bei welcher Diagnose ist sie absolut kontraindiziert?",
    rueckseiteC1:
      "Indiziert: wenn medikamentöse Prophylaxe kontraindiziert ist, oder zusätzlich zu NMH bei Hochrisikopatienten (z.B. nach Schlaganfall). Absolut kontraindiziert: bei akuter TVT (Embolie-Risiko durch Thrombuslösung!), pAVK, schwerer Herzinsuffizienz.",
    rueckseiteB1:
      "IPK einsetzen: wenn die Spritze nicht möglich ist, oder bei sehr hohem Risiko zusätzlich. Verboten bei: bestehender Thrombose (Gerinnsel könnte sich lösen!), schlechter Arteriendurchblutung, schwerer Herzschwäche.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015; CLOTS-3-Studie 2013",
  },
  {
    id: "ce02-thrombose-kk-11",
    vorderseite:
      "Warum wird das Homans-Zeichen heute nicht mehr empfohlen — und was ist der moderne Diagnosestandard?",
    rueckseiteC1:
      "Homans-Zeichen ist unzuverlässig (Sensitivität 60-90%, schlechte Spezifität) und gefährlich: Das Dorsalflexions-Manöver kann Thrombusteile lösen → Lungenembolie. Moderner Standard: Wells-Score (strukturierte Risikoeinschätzung) + D-Dimer + Kompressionssonographie (Goldstandard).",
    rueckseiteB1:
      "Das Homans-Zeichen ist veraltet und gefährlich — der Test kann das Gerinnsel lösen und eine Lungenembolie auslösen. Heute nutzt man: Wells-Score + Labortest (D-Dimer) + Ultraschall (Kompressionssonographie).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-12",
    vorderseite:
      "Nenne die 3 häufigsten Symptome einer akuten Lungenembolie und die ersten 4 Sofortmaßnahmen.",
    rueckseiteC1:
      "Symptome: (1) plötzliche Atemnot (80%), (2) atemabhängiger Thoraxschmerz, (3) Tachykardie >100/min. Sofortmaßnahmen: (1) Notruf/Arzt SOFORT — Zeit = Leben. (2) Patient NICHT allein lassen, beruhigen. (3) Lagerung (Dyspnoe → Oberkörper hoch; Schock → flach) + O₂-Gabe. (4) KEINE Bewegung zulassen.",
    rueckseiteB1:
      "Zeichen: (1) Plötzliche Atemnot, (2) Brustschmerz beim Einatmen, (3) schneller Puls. Sofort: (1) Arzt/Notruf rufen. (2) Nicht allein lassen, beruhigen. (3) Oberkörper hoch, Sauerstoff geben. (4) Keine Bewegung — Patient darf nicht aufstehen.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie VTE 2015",
  },
  {
    id: "ce02-thrombose-kk-13",
    vorderseite:
      "Nenne die 5 pflegerischen Kernaufgaben bei der Thromboseprophylaxe.",
    rueckseiteC1:
      "(1) Beobachten (Beine täglich vergleichen, Vitalzeichen). (2) Assessment (Risikoscore bei Aufnahme + Zustandsänderung, dokumentieren). (3) Durchführen (NMH, MTPS nach Indikation, Frühmobilisation). (4) Melden bei Verdacht (sofort, nicht auf Visite warten). (5) Dokumentieren aller Beobachtungen und Maßnahmen. Rechtsgrundlage: vorbehaltene Tätigkeit (§ 4 PflBG).",
    rueckseiteB1:
      "(1) Beine täglich vergleichen, Vitalzeichen. (2) Risiko einschätzen und aufschreiben. (3) Spritzen geben, Strümpfe anlegen (wenn erlaubt), Patient bewegen. (4) Bei Verdacht sofort Arzt rufen. (5) Alles dokumentieren.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 4 PflBG; AWMF S3-Leitlinie VTE 2015",
  },
];

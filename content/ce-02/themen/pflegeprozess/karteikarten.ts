// CE-02 Thema Pflegeprozess — Karteikarten (15 Karten, 1 pro Baustein)
// Quelle: content/ce-02/themen/pflegeprozess/karteikarten-plan.md
// Pipeline v9 — 2026-04-23
// FSRS aktiv — alle 15 prüfungsrelevant

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_PFLEGEPROZESS_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-pflegeprozess-kk-01",
    vorderseite: "Was ist der Pflegeprozess? (3 Kernmerkmale)",
    rueckseiteC1:
      "(1) Systematisches Denkmodell professionellen Pflegehandelns. (2) Zirkulärer Regelkreis — kein linearer Ablauf. (3) 6 Schritte nach Fiechter/Meier (1981): Informationen sammeln → Probleme/Ressourcen erkennen → Ziele festlegen → Maßnahmen planen → Durchführen → Beurteilen.",
    rueckseiteB1:
      "Der Pflegeprozess hat 6 Schritte: sammeln → erkennen → Ziele → planen → tun → beurteilen. Er ist ein Kreislauf — kein einmaliger Ablauf.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981; § 4 PflBG",
  },
  {
    id: "ce02-pflegeprozess-kk-02",
    vorderseite: "Nenne die 3 wichtigsten Pflegeprozess-Modelle mit Jahreszahl und Herkunft.",
    rueckseiteC1:
      "WHO (1973): 4 Schritte — erster internationaler Standard (Genf). ANA (2021): 5 Schritte — US-amerikanisch, mit Pflegediagnose als eigenem Schritt. Fiechter/Meier (1981): 6 Schritte — deutschsprachiger Standard, heute in DE verbindlich.",
    rueckseiteB1:
      "WHO (1973) = 4 Schritte. ANA (2021) = 5 Schritte. Fiechter/Meier (1981) = 6 Schritte. In Deutschland gilt: 6 Schritte.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "WHO 1973; ANA 2021; Fiechter/Meier 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-03",
    vorderseite:
      "Welche gesetzliche Grundlage verpflichtet Pflegefachpersonen zur Anwendung des Pflegeprozesses?",
    rueckseiteC1:
      "§ 4 PflBG (Pflegeberufegesetz) — verpflichtet zur eigenverantwortlichen Planung, Durchführung und Evaluation von Pflege. Der Pflegeprozess ist das methodische Instrument zur Umsetzung dieser Verantwortung. Gültig seit 2020.",
    rueckseiteB1:
      "§ 4 PflBG — das Pflegeberufegesetz. Es sagt: Examinierte Pflegefachpersonen planen, führen durch und kontrollieren Pflege selbst. Das gilt seit 2020.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 4 PflBG",
  },
  {
    id: "ce02-pflegeprozess-kk-04",
    vorderseite:
      "Was wird in Schritt 1 des Pflegeprozesses gesammelt und wie unterscheidest du subjektive von objektiven Daten?",
    rueckseiteC1:
      "Schritt 1 = Informationen sammeln. Subjektiv: Selbstauskunft des Patienten ('Ich habe Schmerzen'). Objektiv: Beobachtung und Messung durch die Pflegekraft (Wundgröße, Gewicht, Hautfarbe). Vier Quellen: direkte Befragung, indirekte Befragung, Beobachtung, Dokumente.",
    rueckseiteB1:
      "Schritt 1: Informationen sammeln. Subjektiv = was der Patient sagt. Objektiv = was du siehst und misst. Vier Wege: direkt fragen, Angehörige fragen, beobachten, Unterlagen lesen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-05",
    vorderseite:
      "Was passiert in Schritt 2 des Pflegeprozesses und was ist der Unterschied zwischen Problem und Ressource?",
    rueckseiteC1:
      "Schritt 2 = Probleme UND Ressourcen erkennen. Problem: Was ist beeinträchtigt? Ressource: Was kann der Patient noch selbst? Drei Kategorien: aktuelle Probleme, Risikoprobleme, Gesundheitsförderungspotenziale. Ressourcen sind gleichwertig — nicht nur Defizite erfassen.",
    rueckseiteB1:
      "Schritt 2: Was läuft schief (Problem) — und was kann er noch selbst (Ressource)? Beide sind wichtig. Du schaust nicht nur auf Probleme, sondern auch auf Stärken.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-06",
    vorderseite: "Was macht ein Pflegeziel 'gut'? Nenne 4 Kriterien (SMART).",
    rueckseiteC1:
      "(1) Messbar: nicht 'besser fühlen', sondern konkret nachprüfbar. (2) Erreichbar: realistisch für diesen Patienten. (3) Patientenorientiert: beschreibt was der Patient erreicht, nicht was du tust. (4) Terminiert: Kurzzeitziel (Tage) oder Langzeitziel (Wochen). SMART: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert.",
    rueckseiteB1:
      "SMART: Spezifisch, Messbar, Akzeptiert, Realistisch, mit Datum. Schlechtes Ziel: 'besser fühlen'. Gutes Ziel: 'bis Freitag 10m mit Rollator selbstständig gehen'.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Doran SMART, 1981; Fiechter/Meier, 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-07",
    vorderseite:
      "Was unterscheidet Schritt 4 (Planen) von Schritt 5 (Durchführen) im Pflegeprozess?",
    rueckseiteC1:
      "Schritt 4: Was WIE WER WANN getan wird — schriftlich festgelegt (5-W-Regel), vor der Handlung. Schritt 5: tatsächliche Durchführung + sofortige Dokumentation (Durchführungsnachweis). Planänderungen in Schritt 5 brauchen eine Begründung.",
    rueckseiteB1:
      "Schritt 4 = planen (was, wer, wann, wie, womit). Schritt 5 = tun und sofort aufschreiben. Erst Plan, dann Handlung, dann Nachweis.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-08",
    vorderseite:
      "Welche 3 möglichen Ergebnisse hat eine Pflegeevaluation und was folgt jeweils daraus?",
    rueckseiteC1:
      "(1) Ziel erreicht → Maßnahmen beenden oder reduzieren. (2) Ziel teilweise erreicht → Maßnahmen anpassen, Zeitraum verlängern. (3) Ziel nicht erreicht → Ursachen analysieren, neu planen (zurück zu Schritt 2-3). Jede Evaluation löst neuen Zyklus aus.",
    rueckseiteB1:
      "Drei Möglichkeiten: Ziel erreicht (weiter so oder stoppen). Ziel halb erreicht (anpassen). Ziel nicht erreicht (von vorn anfangen). Immer zurück zum Anfang — Regelkreis.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-09",
    vorderseite:
      "Warum ist der Pflegeprozess ein Regelkreis und kein linearer Ablauf? Was sichert das Regelkreis-Prinzip?",
    rueckseiteC1:
      "Regelkreis = Evaluation (Schritt 6) löst automatisch neues Assessment (Schritt 1) aus. Linearer Ablauf hätte ein Ende — der Regelkreis nicht. Damit gesichert: kontinuierliche Anpassung an veränderten Patientenstatus. Ohne Regelkreis: Pflege nach Plan ohne Rückkopplung = Routinerisiko.",
    rueckseiteB1:
      "Weil Schritt 6 (beurteilen) wieder zu Schritt 1 (sammeln) führt. Der Kreis geht immer weiter. Warum? Weil sich Menschen verändern — und die Pflege sich mitverändern muss.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-10",
    vorderseite:
      "Warum reicht ein Standardpflegeplan für eine Diagnose (z.B. 'alle Patienten mit Dekubitus') nicht aus?",
    rueckseiteC1:
      "Weil der Pflegeprozess auf den individuellen Menschen ausgerichtet ist, nicht auf die Diagnose. Zwei Patienten mit Dekubitus haben unterschiedliche Ressourcen, Ziele und Lebensumstände. § 4 PflBG fordert individuelle Pflege explizit.",
    rueckseiteB1:
      "Weil jeder Mensch anders ist. Gleiche Diagnose bedeutet nicht gleiche Pflege. § 4 PflBG sagt: Pflege muss individuell sein.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981; § 4 PflBG",
  },
  {
    id: "ce02-pflegeprozess-kk-11",
    vorderseite:
      "Vergleiche WHO, ANA und Fiechter/Meier nach Anzahl der Schritte und Herkunft.",
    rueckseiteC1:
      "WHO (1973): 4 Schritte — internationaler Grundstandard / ANA (2021): 5 Schritte — US-amerikanisch, mit Pflegediagnose als eigenem Schritt / Fiechter/Meier (1981): 6 Schritte — deutschsprachiger Standard, verbindlich in DE.",
    rueckseiteB1:
      "WHO = 4 (international). ANA = 5 (USA). Fiechter/Meier = 6 (Deutschland). Für deine Ausbildung: 6 Schritte.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "WHO 1973; ANA 2021; Fiechter/Meier 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-12",
    vorderseite:
      "Was beschreibt der Pflegeprozess — was gibt er vor, was nicht?",
    rueckseiteC1:
      "Er beschreibt WIE professionell gepflegt wird (Denkstruktur, Systematik, Individualität) — NICHT was in jedem Fall getan werden muss. Das 'Was' ergibt sich aus der individuellen Situation. Pflegeprozess = Methode, nicht Vorschriftskatalog.",
    rueckseiteB1:
      "WIE = der Pflegeprozess (Methode). WAS = hängt vom Menschen ab. Er sagt dir nicht, was du immer tun musst — er zeigt dir, wie du es herausfindest.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981",
  },
  {
    id: "ce02-pflegeprozess-kk-13",
    vorderseite: "Was ist die SIS und wofür wird sie eingesetzt?",
    rueckseiteC1:
      "Strukturierte Informationssammlung (BMG SIS 2014) — standardisiertes Erstassessment in der stationären Langzeitpflege. Erfasst 5 Themenfelder: Kognition, Kommunikation, Mobilität, Selbstversorgung, krankheitsbezogene Anforderungen. Ist Schritt 1 des Pflegeprozesses — ersetzt viele alte Einzelformulare.",
    rueckseiteB1:
      "SIS = das erste Formular beim neuen Bewohner (seit 2014). 5 Themenfelder: was er kann, was er braucht, wie er sich bewegt, was ihn bewegt. Alle im Team sehen dieselben Infos.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "BMG SIS 2014",
  },
  {
    id: "ce02-pflegeprozess-kk-14",
    vorderseite: "In welchen 3 Intensitätsstufen läuft der Pflegeprozess in der Praxis ab?",
    rueckseiteC1:
      "(1) Routinehandeln — implizite Prozesslogik bei Alltagspflege / (2) Angepasstes Handeln — Reaktion auf Veränderungen (neues Symptom) / (3) Vollständige Neubewertung — bei klinischer Statusveränderung (Sturz, Fieber, Schmerz). Priorisierung ist Kernkompetenz, kein Notbehelf.",
    rueckseiteB1:
      "3 Stufen: (1) Alltag läuft automatisch. (2) Etwas Neues? → anpassen. (3) Sturz, Fieber, Schmerz? → komplett neu denken. Immer priorisieren: Was zuerst?",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981; § 4 PflBG; DNQP",
  },
  {
    id: "ce02-pflegeprozess-kk-15",
    vorderseite:
      "Was bedeutet PESR und wie verbindet es Pflegeprozess mit Pflegeplanung?",
    rueckseiteC1:
      "PESR = Problem — Etiologie (Ursache) — Symptom (Zeichen) — Ressource (Stärke). PESR überführt den Pflegeprozess (Denken) in die Pflegeplanung (Aufschreiben). Aus dem Assessment (Schritte 1-2) entsteht per PESR das dokumentierte Pflegeproblem — Grundlage für Ziele und Maßnahmen.",
    rueckseiteB1:
      "PESR: Problem — Ursache — Zeichen — Stärke. PESR macht aus deinem Denken einen schriftlichen Plan. Pflegeprozess im Kopf → PESR auf Papier → Pflegeplanung fürs Team.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Fiechter/Meier, 1981; § 4 PflBG",
  },
];

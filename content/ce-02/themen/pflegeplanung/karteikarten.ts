// CE-02 Thema Pflegeplanung — Karteikarten
// Quelle: content/ce-02/themen/pflegeplanung/karteikarten-plan.md (15 Karteikarten, 1 pro Baustein)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_PFLEGEPLANUNG_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-pflegeplanung-kk-01",
    vorderseite: "Welche 6 Schritte hat der Pflegeprozess in der richtigen Reihenfolge?",
    rueckseiteC1:
      "1. Informationssammlung (Assessment), 2. Pflegediagnose, 3. Pflegeziel festlegen, 4. Pflegemaßnahmen planen, 5. Durchführen, 6. Evaluieren. → Zyklisch: nach Evaluation beginnt es neu.",
    rueckseiteB1:
      "1. Informieren, 2. Problem benennen, 3. Ziel setzen, 4. Plan schreiben, 5. Umsetzen, 6. Prüfen ob es geholfen hat. Danach beginnt alles wieder von vorne.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "WHO 1977; § 4 PflBG",
  },
  {
    id: "ce02-pflegeplanung-kk-02",
    vorderseite: "Was ist der Unterschied zwischen Pflegebedarf und Pflegediagnose?",
    rueckseiteC1:
      "Pflegebedarf = rohe Sammlung von Beobachtungen. Pflegediagnose = strukturiertes klinisches Urteil nach PÄS-Format (Problem — Ätiologie — Symptome). Die Pflegediagnose ist die fachliche Interpretation des Pflegebedarfs.",
    rueckseiteB1:
      "Pflegebedarf = alles was du beobachtest. Pflegediagnose = du ordnest die Beobachtungen und sagst genau was das Problem ist und warum.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "NANDA-I 2021",
  },
  {
    id: "ce02-pflegeplanung-kk-03",
    vorderseite: "Wofür steht PÄS bei der Pflegediagnose? Gib ein Beispiel.",
    rueckseiteC1:
      "P = Problem (Was?), Ä = Ätiologie (Warum/Ursache?), S = Symptome (Woran erkennbar?). Beispiel: Eingeschränkte Aktivitätstoleranz (P), bedingt durch Herzinsuffizienz Grad III (Ä), erkennbar an Dyspnoe bei 10 m Gehstrecke und NRS 4/10 (S).",
    rueckseiteB1:
      "P = Problem (was?), Ä = Ursache (warum?), S = Zeichen (woran sieht man es?). Beispiel: Atemnot, weil das Herz schwach ist, erkennbar daran dass der Patient nach 10 m erschöpft ist.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "NANDA-I 2021",
  },
  {
    id: "ce02-pflegeplanung-kk-04",
    vorderseite: "Welche 4 Elemente muss ein vollständiger Pflegebericht enthalten?",
    rueckseiteC1:
      "1. Datum und Uhrzeit, 2. Beobachtung/Situation (Was ist passiert?), 3. Maßnahme (Was wurde getan?), 4. Ergebnis/Reaktion des Patienten + Kürzel der Pflegeperson.",
    rueckseiteB1:
      "1. Datum + Uhrzeit, 2. Was ist passiert?, 3. Was habe ich getan?, 4. Wie hat der Patient reagiert? + dein Kürzel.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 4 PflBG",
  },
  {
    id: "ce02-pflegeplanung-kk-05",
    vorderseite: "Welche 5 W-Fragen muss eine vollständig formulierte Pflegemaßnahme beantworten?",
    rueckseiteC1:
      "Wer (Qualifikation/Person), Wann (Uhrzeit/Rhythmus), Wie (Methode/Technik), Wie oft (Häufigkeit), Womit (Hilfsmittel/Material). Erst wenn alle 5 beantwortet sind, ist die Maßnahme handlungsleitend für alle Schichten.",
    rueckseiteB1:
      "Wer macht es? Wann? Wie? Wie oft? Womit? Wenn du alle 5 beantwortest, kann jede Schicht genau wissen was zu tun ist.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "NANDA-I 2021; § 4 PflBG",
  },
  {
    id: "ce02-pflegeplanung-kk-06",
    vorderseite: "Was ist der Unterschied zwischen medizinischer Diagnose und Pflegediagnose?",
    rueckseiteC1:
      "Medizinische Diagnose (Arzt): beschreibt die Krankheit — stabil. Pflegediagnose (Pflegefachperson): beschreibt die menschliche Reaktion des Patienten — verändert sich täglich. Beide sind notwendig und ergänzen sich. (NANDA-I 2021)",
    rueckseiteB1:
      "Arzt schreibt: die Krankheit (z.B. Herzinsuffizienz). Das bleibt meist gleich. Du schreibst: wie der Patient damit umgeht — das ändert sich täglich.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "NANDA-I 2021",
  },
  {
    id: "ce02-pflegeplanung-kk-07",
    vorderseite: "Welche 3 vorbehaltenen Tätigkeiten dürfen nur Pflegefachpersonen ausführen (§ 4 PflBG)?",
    rueckseiteC1:
      "1. Pflegebedarf erheben (Assessment), 2. Pflegeprozess planen, steuern und organisieren, 3. Pflege evaluieren. Nicht delegierbar — auch nicht an sehr erfahrene Pflegehilfskräfte.",
    rueckseiteB1:
      "1. Einschätzen was der Patient braucht, 2. Den Pflegeplan schreiben und organisieren, 3. Prüfen ob die Pflege wirkt. Nur ausgebildete Pflegefachpersonen dürfen das.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 4 PflBG",
  },
  {
    id: "ce02-pflegeplanung-kk-08",
    vorderseite: "Was ist das Selbstpflegedefizit nach Orem, und welche 3 Pflegesysteme gibt es?",
    rueckseiteC1:
      "Selbstpflegedefizit = Selbstpflegeanforderung übersteigt Selbstpflegekompetenz. 3 Systeme: 1. Wholly Compensatory (Pflege übernimmt alles), 2. Partly Compensatory (Pflege ergänzt), 3. Supportive-Educative (Pflege berät und lehrt). (Orem 1971)",
    rueckseiteB1:
      "Der Patient kann nicht alles selbst was er braucht. Die Pflege schließt die Lücke. Je nach Lücke: 1. Pflege macht alles, 2. Pflege hilft teilweise, 3. Pflege berät nur.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Orem 1971",
  },
  {
    id: "ce02-pflegeplanung-kk-09",
    vorderseite: "Wofür steht ABEDL, und welche 3 Kategorien hat das Modell?",
    rueckseiteC1:
      "ABEDL = Aktivitäten, Beziehungen und Existenzielle Erfahrungen des Lebens. 13 Bereiche. 3 Kategorien: körperlich (Bewegen, Atmen, Waschen …), psycho-sozial (Kommunizieren, Kontakte, Freizeit …), existenziell (Sinn, sicheres Umfeld, Sterben). (Krohwinkel 1993)",
    rueckseiteB1:
      "ABEDL = 13 Lebensbereiche nach Krohwinkel (1993). 3 Gruppen: was der Körper tut, wie der Mensch mit anderen lebt, was im Leben Sinn gibt.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Krohwinkel 1993",
  },
  {
    id: "ce02-pflegeplanung-kk-10",
    vorderseite: "Was ist das Abhängigkeits-Unabhängigkeits-Kontinuum nach Roper/Logan/Tierney?",
    rueckseiteC1:
      "Jede der 12 Lebensaktivitäten (ATLs) liegt auf einem Spektrum von völliger Abhängigkeit bis völliger Unabhängigkeit. Pflege fördert maximale Unabhängigkeit — respektiert aber würdevolle Abhängigkeit wo nötig (z.B. beim Sterben). (Roper/Logan/Tierney 1980)",
    rueckseiteB1:
      "Für jede der 12 Lebensaktivitäten: Wie selbstständig ist der Patient — von ganz abhängig bis ganz selbstständig? Dein Ziel: so viel Selbstständigkeit wie möglich.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Roper/Logan/Tierney 1980",
  },
  {
    id: "ce02-pflegeplanung-kk-11",
    vorderseite: "Wie oft muss ein Pflegeplan evaluiert werden, und was löst eine sofortige Anpassung aus?",
    rueckseiteC1:
      "Mindestens 1× pro Dienst. Sofortige Anpassung bei: Sturz, neuem Symptom, Zustandsveränderung (besser oder schlechter), Medikamentenänderung, neuer ärztlicher Anordnung. Jede Evaluation dokumentieren: Datum, Uhrzeit, Kürzel.",
    rueckseiteB1:
      "Mindestens einmal pro Schicht. Sofort anpassen wenn: Patient stürzt, sich etwas ändert (schlechter oder besser), neue Medikamente, neue Anordnung. Immer aufschreiben.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 4 PflBG; NANDA-I 2021",
  },
  {
    id: "ce02-pflegeplanung-kk-12",
    vorderseite: "Wofür steht das SMART-Prinzip bei Pflegezielen? Gib ein Beispiel für ein SMART-Ziel.",
    rueckseiteC1:
      "S = Spezifisch, M = Messbar, A = Akzeptabel (für Patienten realistisch), R = Realistisch (machbar), T = Terminiert (Zeitrahmen). Beispiel: 'Frau Yilmaz läuft bis Donnerstag täglich 2× 30 m auf dem Flur mit Unterarmgehstützen.' Subjekt ist immer der Patient.",
    rueckseiteB1:
      "S = genau was, M = messbar, A = für den Patienten realistisch, R = wirklich machbar, T = bis wann. Beispiel: 'Herr K. trinkt bis morgen täglich 1,5 l.' — Das Ziel gehört dem Patienten.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "NANDA-I 2021; § 4 PflBG",
  },
  {
    id: "ce02-pflegeplanung-kk-13",
    vorderseite: "Was ist ressourcenorientierte Pflege, und welche 4 Ressourcen-Kategorien gibt es?",
    rueckseiteC1:
      "Ressourcenorientiert = zuerst erfassen was der Patient noch kann, dann Defizite bearbeiten. Kategorien: körperlich, kognitiv, sozial, emotional. Gegenteil: defizitorientiert. Ressourcenorientierung erhält Autonomie, fördert Rehabilitation, verhindert Überversorgung. (Krohwinkel 1993)",
    rueckseiteB1:
      "Zuerst: Was kann der Patient noch? Dann erst: Was fehlt? 4 Arten: Körper, Denken, soziale Unterstützung, Gefühle. Wer zu viel abnimmt, macht den Patienten abhängiger.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Krohwinkel 1993",
  },
  {
    id: "ce02-pflegeplanung-kk-14",
    vorderseite: "Was bedeutet Shared Decision Making (SDM) in der Pflegeplanung, und in welchen 4 Schritten läuft es ab?",
    rueckseiteC1:
      "SDM = Patient und Pflegefachperson entscheiden gemeinsam. Patient = Experte seines Lebens, Pflegefachperson = Expertin der Pflege. 4 Schritte: 1. Informieren, 2. Präferenzen erfragen, 3. Gemeinsam entscheiden, 4. Patientenpräferenzen dokumentieren.",
    rueckseiteB1:
      "Gemeinsam entscheiden. 4 Schritte: 1. Du erklärst die Situation, 2. Du fragst was der Patient will, 3. Ihr entscheidet zusammen, 4. Du schreibst auf was der Patient möchte.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Patientenrechtegesetz; NANDA-I 2021",
  },
  {
    id: "ce02-pflegeplanung-kk-15",
    vorderseite: "Nenne die 3 wichtigsten Pflegemodelle und ihr zentrales Konzept.",
    rueckseiteC1:
      "1. Orem (1971): Selbstpflegedefizit — Pflege füllt die Lücke zwischen Können und Bedarf (3 Systeme). 2. Krohwinkel (1993): ABEDL — 13 Lebensbereiche, ganzheitlich, ressourcenorientiert. 3. Roper/Logan/Tierney (1980): 12 ATLs auf Abhängigkeits-Unabhängigkeits-Kontinuum.",
    rueckseiteB1:
      "1. Orem (1971): Was kann der Patient noch selbst? 2. Krohwinkel (1993): 13 Lebensbereiche ganzheitlich anschauen. 3. Roper (1980): 12 Lebensaktivitäten — wie selbstständig ist der Patient bei jeder?",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Orem 1971; Krohwinkel 1993; Roper/Logan/Tierney 1980",
  },
];

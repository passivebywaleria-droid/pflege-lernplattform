// CE-02 Thema Ernährungsassessment & Mangelernährung — Wissensbausteine (16 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/ernaehrungsassessment/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (Vorerfahrung aktivieren)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_ERNAEHRUNGSASSESSMENT_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: bmi-berechnung (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-bmi-berechnung",
    themaId: "ernaehrungsassessment",
    titel: "BMI berechnen und einordnen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient ist 1,70 m groß und wiegt 75 kg, ein anderer ist 1,90 m und wiegt ebenfalls 75 kg. Wer ist 'dicker'? Warum brauchst du dafür eine Formel?",
      antwort:
        "Der BMI (Body-Mass-Index) setzt Gewicht und Größe ins Verhältnis: BMI = Gewicht (kg) / Größe (m)². Beispiel: 75 kg / (1,70 m × 1,70 m) = 25,9 kg/m². Er ist ein Screeningwert, keine Diagnose. (WHO, BMI-Klassifikation)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der BMI (Body-Mass-Index) setzt Gewicht und Größe ins Verhältnis: BMI = Gewicht (kg) / Größe (m)². Beispiel: 75 kg / (1,70 m × 1,70 m) = 25,9 kg/m². Er ist ein Screeningwert, keine Diagnose. (WHO, BMI-Klassifikation)",
      textB1:
        "Der BMI zeigt, ob das Gewicht zur Größe passt. Die Formel: Gewicht in kg geteilt durch Größe in Metern × Größe in Metern. Beispiel: 75 kg geteilt durch (1,70 × 1,70) = 25,9. Der BMI ist nur ein erster Hinweis.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["WHO (1995): BMI-Klassifikation", "DGEM/ESPEN (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-bmi-berechnung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "BMI berechnen und einordnen",
          body: "Der **Body-Mass-Index (BMI)** ist das international anerkannte Screening-Maß für Über- und Untergewicht bei Erwachsenen (WHO, BMI-Klassifikation). Die Formel lautet:\n\n**BMI = Körpergewicht (kg) ÷ Körpergröße² (m²)**\n\nRechenbeispiel: Ein Patient wiegt 82 kg bei 1,75 m Größe. BMI = 82 / (1,75 × 1,75) = 82 / 3,0625 = **26,8 kg/m²** → Übergewicht.\n\n**Einschränkungen:**\n- Nicht aussagekräftig bei Muskelsportlern (hoher Muskelanteil → hoher BMI ohne Adipositas)\n- Nicht anwendbar bei Ödemen, Aszites, Amputationen\n- Bei über 65-Jährigen gelten leicht höhere Normbereiche (22-27 kg/m²)\n- Nicht geeignet für Kinder (dort: BMI-Perzentilen)\n- Keine Aussage über Fettverteilung (bauchbetont oder hüftbetont? → Taillenumfang zusätzlich)\n\nWichtig: Der BMI ist ein Screening, nicht die Diagnose.",
          glossarBegriffe: ["BMI", "Screening"],
        },
        contentB1: {
          title: "BMI berechnen und einordnen",
          body: "Der **BMI** zeigt, ob dein Gewicht zur Größe passt. Die Formel:\n\n**BMI = Gewicht (kg) geteilt durch Größe × Größe (m)**\n\nBeispiel: Ein Patient wiegt 82 kg und ist 1,75 m groß. Rechne: 82 geteilt durch (1,75 × 1,75) = 26,8. Das ist Übergewicht.\n\n**Wann hilft der BMI nicht?**\n- Bei Sportlern mit viel Muskel (Muskel ist schwer)\n- Bei Patienten mit viel Wasser im Körper (Ödeme)\n- Bei alten Menschen: Der Normbereich ist höher (22-27)\n- Bei Kindern: Andere Tabellen (Perzentilen)\n- Der BMI sagt nicht, WO das Fett sitzt. Bauch ist gefährlicher als Hüfte.\n\nWichtig: Der BMI ist nur ein Hinweis, keine Diagnose.",
          glossarBegriffe: ["BMI", "Screening"],
        },
      },
    },
    glossarBegriffe: ["BMI", "Screening"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: bmi-kategorien (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-bmi-kategorien",
    themaId: "ernaehrungsassessment",
    titel: "BMI-Kategorien nach WHO",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Drei Patienten: BMI 17, BMI 23, BMI 37. Wer hat welches Risiko? Was würdest du bei jedem als Erstes anschauen?",
      antwort:
        "WHO-Kategorien: <18,5 Untergewicht (Mangelernährungsrisiko → Screening), 18,5-24,9 Normalgewicht, 25-29,9 Übergewicht, 30-34,9 Adipositas Grad I, 35-39,9 Adipositas Grad II, ≥40 Adipositas Grad III. Bei älteren Menschen (>65) ist ein BMI von 22-27 optimal. (WHO; DGEM/ESPEN 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "WHO-Kategorien: <18,5 Untergewicht, 18,5-24,9 Normalgewicht, 25,0-29,9 Übergewicht (Präadipositas), 30,0-34,9 Adipositas Grad I, 35,0-39,9 Adipositas Grad II, ≥40 Adipositas Grad III (früher 'morbide Adipositas'). (WHO)",
      textB1:
        "Die WHO hat BMI-Bereiche festgelegt. Unter 18,5 = Untergewicht. 18,5 bis 24,9 = normal. 25 bis 29,9 = Übergewicht. 30 bis 34,9 = Adipositas Grad 1. 35 bis 39,9 = Adipositas Grad 2. Ab 40 = Adipositas Grad 3.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["WHO (1995): BMI-Klassifikation", "DGEM/ESPEN (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-bmi-kategorien",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "BMI-Kategorien nach WHO",
          body: "Die WHO-Klassifikation des BMI (in kg/m²) für Erwachsene (18-65 Jahre):\n\n| Kategorie | BMI | Gesundheitsrisiko |\n|-----------|-----|-------------------|\n| Untergewicht | <18,5 | erhöht (Mangelernährung, Osteoporose) |\n| Normalgewicht | 18,5-24,9 | durchschnittlich |\n| Übergewicht / Präadipositas | 25,0-29,9 | leicht erhöht |\n| Adipositas Grad I | 30,0-34,9 | erhöht |\n| Adipositas Grad II | 35,0-39,9 | hoch |\n| Adipositas Grad III | ≥40,0 | sehr hoch (früher: 'morbide Adipositas') |\n\n**Besonderheiten bei älteren Menschen (>65):** Studien der DGEM zeigen, dass ein BMI von 22-27 kg/m² mit der niedrigsten Sterblichkeit verbunden ist. Ab 65 gilt daher **BMI <22 als Warnsignal** — auch wenn er formal noch 'normal' wäre.\n\n**Achtung:** Bei Untergewicht (BMI <18,5) besteht immer Verdacht auf Mangelernährung — das Screening (MNA oder NRS-2002) muss folgen. (WHO; DGEM/ESPEN 2020)",
          glossarBegriffe: ["BMI", "Adipositas", "Untergewicht"],
        },
        contentB1: {
          title: "BMI-Kategorien nach WHO",
          body: "Die WHO teilt den BMI in 6 Stufen ein:\n\n- **Unter 18,5** = Untergewicht (Risiko für Mangelernährung)\n- **18,5 bis 24,9** = Normalgewicht\n- **25 bis 29,9** = Übergewicht\n- **30 bis 34,9** = Adipositas Grad 1\n- **35 bis 39,9** = Adipositas Grad 2\n- **Ab 40** = Adipositas Grad 3 (sehr schweres Übergewicht)\n\n**Bei alten Menschen (über 65):** Hier ist ein BMI von 22 bis 27 am gesündesten. Ein BMI unter 22 ist bei alten Menschen schon ein Warnsignal — auch wenn er formal noch 'normal' heißt.\n\n**Wichtig:** Bei Untergewicht immer weiter prüfen. Mach das MNA (alte Menschen) oder NRS-2002 (Krankenhaus).",
          glossarBegriffe: ["BMI", "Adipositas", "Untergewicht"],
        },
      },
    },
    glossarBegriffe: ["BMI", "Adipositas", "Untergewicht"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: screening-vs-assessment (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-screening-vs-assessment",
    themaId: "ernaehrungsassessment",
    titel: "Screening vs. Assessment — der Unterschied",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast 50 neue Patienten auf Station. Du kannst nicht bei allen 30 Minuten lang den Ernährungsstatus prüfen. Wie findest du trotzdem die, die ein Problem haben?",
      antwort:
        "Screening ist ein kurzer Risiko-Check (2-5 Min, Frage 'Risiko ja oder nein?') für alle Patienten. Assessment ist die tiefe Analyse (15-30 Min) — nur bei Patienten mit positivem Screening. Screening wirft das Netz, Assessment geht in die Tiefe.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Screening ist ein kurzer Risiko-Check (2-5 Min, Frage 'Risiko ja oder nein?') für alle Patienten. Assessment ist die tiefe Analyse (15-30 Min) — nur bei Patienten mit positivem Screening. Screening wirft das Netz, Assessment geht in die Tiefe.",
      textB1:
        "Screening = schneller Check für alle. Dauert 2-5 Minuten. Frage: 'Gibt es ein Risiko?' Assessment = tiefe Untersuchung. Dauert 15-30 Minuten. Nur bei Patienten, bei denen das Screening ein Risiko zeigt. Screening zuerst, Assessment danach.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-03",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Ernährungsmanagement (2017)", "Kondrup J. et al. (2003): NRS-2002", "Guigoz Y. (1994): MNA"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-screening-vs-assessment",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Screening vs. Assessment — der Unterschied",
          body: "Der DNQP-Expertenstandard Ernährungsmanagement (2017) schreibt ein **zweistufiges Vorgehen** vor:\n\n**Stufe 1 — Screening** (bei jedem Patienten, innerhalb von 24 Stunden nach Aufnahme):\n- Ziel: Risiko für Mangelernährung erkennen\n- Dauer: 2-5 Minuten\n- Werkzeuge: **NRS-2002** (Klinik), **MNA-Short Form** (ab 65 Jahre), **MUST** (Community)\n- Ergebnis: 'Risiko ja/nein' oder Score mit Cut-off\n\n**Stufe 2 — Assessment** (nur bei positivem Screening):\n- Ziel: Ursachen und Schweregrad klären, Pflegeplan ableiten\n- Dauer: 15-30 Minuten\n- Werkzeuge: **MNA-Long Form**, **PEMU** (Pflegerische Erfassung von Mangelernährung und deren Ursachen), Anamnese, Laborwerte\n- Ergebnis: Pflegediagnose + individuelle Maßnahmenplanung\n\n**Wichtig:** Screening ist Pflicht für ALLE Patienten — nicht nur für die, die 'dünn aussehen'. Auch Adipöse können mangelernährt sein. (DNQP Ernährungsmanagement, 2017)",
          glossarBegriffe: ["Screening", "Assessment", "MNA", "NRS-2002", "PEMU"],
        },
        contentB1: {
          title: "Screening vs. Assessment — der Unterschied",
          body: "Der DNQP (Experten für Pflege) hat einen Plan in **2 Schritten** festgelegt:\n\n**Schritt 1 — Screening** (bei allen Patienten, in den ersten 24 Stunden):\n- Ziel: Schnell sehen, wer ein Risiko hat\n- Dauer: 2-5 Minuten\n- Werkzeuge: **NRS-2002** (im Krankenhaus), **MNA kurz** (für alte Menschen ab 65)\n- Ergebnis: Risiko ja oder nein\n\n**Schritt 2 — Assessment** (nur bei positivem Screening):\n- Ziel: Genauer schauen: Warum? Wie schlimm? Was tun?\n- Dauer: 15-30 Minuten\n- Werkzeuge: **MNA lang**, **PEMU**, Laborwerte, Gespräch\n- Ergebnis: Pflegeplan für diesen Patienten\n\n**Wichtig:** Alle Patienten werden gescreent — auch dicke. Auch dicke Menschen können Mangelernährung haben.",
          glossarBegriffe: ["Screening", "Assessment", "MNA", "NRS-2002", "PEMU"],
        },
      },
    },
    glossarBegriffe: ["Screening", "Assessment", "MNA", "NRS-2002", "PEMU"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: mna-mini-nutritional-assessment (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-mna",
    themaId: "ernaehrungsassessment",
    titel: "MNA — Mini Nutritional Assessment",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K., 82 Jahre, wird ins Pflegeheim aufgenommen. Welches Screening nimmst du — und warum gerade dieses, nicht ein anderes?",
      antwort:
        "Das MNA (Mini Nutritional Assessment) wurde speziell für Menschen ab 65 Jahren entwickelt (Guigoz, MNA 1994). MNA-Short Form: 6 Fragen, 0-14 Punkte. 12-14 = normal, 8-11 = Risiko (→ MNA-Long), 0-7 = Mangelernährung. Wenn BMI nicht messbar: Wadenumfang <31 cm als Alternative.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das MNA (Mini Nutritional Assessment) wurde speziell für Menschen ab 65 Jahren entwickelt (Guigoz, MNA 1994). Es besteht aus einem kurzen Screening (6 Fragen, MNA-Short Form) und bei Auffälligkeit aus einem Assessment (12 Fragen, MNA-Long Form).",
      textB1:
        "Das MNA ist ein Test für Menschen ab 65 Jahren (Guigoz, MNA 1994). Er hat zwei Teile: Ein kurzer Test mit 6 Fragen (MNA-Short) und ein langer Test mit 12 Fragen (MNA-Long). Der kurze Test kommt zuerst, der lange nur bei Problemen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-04",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Guigoz Y. (1994): Mini Nutritional Assessment (MNA)", "DNQP Ernährungsmanagement (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-mna",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "MNA — Mini Nutritional Assessment",
          body: "Das **MNA (Mini Nutritional Assessment)** ist das international meistgenutzte Screening-Instrument für Ernährungsstatus bei älteren Menschen (≥65 Jahre, Guigoz, MNA 1994).\n\n**MNA-Short Form (Screening, 6 Fragen):**\n1. Nahrungszufuhr in den letzten 3 Monaten gesunken?\n2. Ungewollter Gewichtsverlust in 3 Monaten?\n3. Mobilität (bettlägerig → normal)\n4. Akute Erkrankung oder psychischer Stress in 3 Monaten?\n5. Neuropsychologische Probleme (Demenz, Depression)?\n6. BMI ODER Wadenumfang (wenn BMI nicht messbar)\n\n**Punktebewertung MNA-Short (0-14 Punkte):**\n- **12-14 Punkte:** normaler Ernährungsstatus\n- **8-11 Punkte:** Risiko für Mangelernährung → MNA-Long durchführen\n- **0-7 Punkte:** Mangelernährung → MNA-Long + Intervention\n\n**MNA-Long Form (Assessment, 12 zusätzliche Fragen):** ergänzt Screening um Fragen zu selbstständigem Leben, Medikamenten, Hautdruckstellen, Mahlzeitenanzahl, Flüssigkeitsaufnahme, Selbstbeurteilung, Oberarm- und Wadenumfang. Gesamt-Score 0-30.\n\n**Wichtig:** Wenn BMI nicht erhebbar (Rollstuhl, Amputation, Kontraktur) → **Wadenumfang <31 cm** als Alternative. (Guigoz, MNA 1994)",
          glossarBegriffe: ["MNA", "Wadenumfang", "Screening"],
        },
        contentB1: {
          title: "MNA — Mini Nutritional Assessment",
          body: "Das **MNA** ist der wichtigste Test für alte Menschen (ab 65). (Guigoz, MNA 1994)\n\n**Der kurze Test (MNA-Short) hat 6 Fragen:**\n1. Weniger gegessen in den letzten 3 Monaten?\n2. Ungewollt Gewicht verloren?\n3. Wie beweglich ist der Patient?\n4. War er krank oder gestresst?\n5. Hat er Demenz oder Depression?\n6. Wie ist der BMI? (oder der Wadenumfang)\n\n**Die Auswertung (0 bis 14 Punkte):**\n- **12-14 Punkte:** alles gut, normal\n- **8-11 Punkte:** Risiko, jetzt den langen Test machen\n- **0-7 Punkte:** schon Mangelernährung, sofort handeln\n\n**Der lange Test (MNA-Long)** hat 12 weitere Fragen: Wohnt er alleine? Wie viele Mahlzeiten pro Tag? Wie viel trinkt er?\n\n**Wichtig:** Wenn du den BMI nicht messen kannst, nimm den **Wadenumfang**. Unter 31 cm ist ein Warnsignal.",
          glossarBegriffe: ["MNA", "Wadenumfang", "Screening"],
        },
      },
    },
    glossarBegriffe: ["MNA", "Wadenumfang", "Screening"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: nrs-2002-nutritional-risk-screening (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-nrs-2002",
    themaId: "ernaehrungsassessment",
    titel: "NRS-2002 — Nutritional Risk Screening",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr B., 52 Jahre, wird nach Bauch-OP auf Station aufgenommen. Welches Screening nimmst du — und welche 4 Fragen kommen als Erstes?",
      antwort:
        "Das NRS-2002 (Nutritional Risk Screening) ist das Standardinstrument für den stationären Klinikbereich (Kondrup, NRS-2002 2003). Es prüft zuerst 4 initiale Fragen. Nur bei 'ja' bei mindestens einer Frage folgt der ausführliche Hauptteil.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das NRS-2002 (Nutritional Risk Screening) ist das Standardinstrument für den stationären Klinikbereich (Kondrup, NRS-2002 2003). Es prüft zuerst 4 initiale Fragen. Nur bei 'ja' bei mindestens einer Frage folgt der ausführliche Hauptteil.",
      textB1:
        "Das NRS-2002 ist der Test für das Krankenhaus (Kondrup, NRS-2002 2003). Er hat 4 kurze Startfragen. Nur wenn bei einer 'ja' ankommt, gehst du zum langen Teil. So geht der Test bei gesunden Patienten sehr schnell.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-05",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Kondrup J. et al. (2003): NRS-2002, ESPEN guidelines", "DNQP Ernährungsmanagement (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-nrs-2002",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "NRS-2002 — Nutritional Risk Screening",
          body: "Das **NRS-2002** ist das ESPEN-empfohlene Screening für hospitalisierte Erwachsene (Kondrup, NRS-2002 2003).\n\n**4 Initiale Fragen (Pre-Screening):**\n1. BMI <20,5?\n2. Gewichtsverlust in den letzten 3 Monaten?\n3. Reduzierte Nahrungszufuhr in der letzten Woche?\n4. Schwere Erkrankung (z.B. Intensivtherapie)?\n\n**Auswertung Pre-Screening:**\n- **Alle 4× nein:** wöchentliche Wiederholung, kein Hauptscreening\n- **Mind. 1× ja:** Hauptscreening durchführen\n\n**Hauptscreening — zwei Teile (jeweils 0-3 Punkte):**\n\n**Teil A — Ernährungszustand:**\n- 0 = normaler Ernährungszustand\n- 1 = leichte Mangelernährung (Gewichtsverlust >5%/3 Mo oder 50-75% Nahrungszufuhr)\n- 2 = mäßig (Gewichtsverlust >5%/2 Mo oder BMI 18,5-20,5 + schlechter Allgemeinzustand)\n- 3 = schwer (Gewichtsverlust >5%/1 Mo oder BMI <18,5 + schlechter AZ)\n\n**Teil B — Schwere der Erkrankung:**\n- 0 = normale Anforderungen\n- 1 = leicht (z.B. Schenkelhalsfraktur)\n- 2 = mäßig (z.B. große Bauch-OP, Schlaganfall)\n- 3 = schwer (z.B. intensivpflichtig)\n\n**Plus 1 Punkt bei Alter ≥70 Jahre.**\n\n**Gesamt-Cut-off:**\n- **≥3 Punkte:** ernährungsmedizinisches Risiko → Ernährungstherapie-Plan\n- **<3 Punkte:** wöchentlich wiederholen",
          glossarBegriffe: ["NRS-2002", "Screening"],
        },
        contentB1: {
          title: "NRS-2002 — Nutritional Risk Screening",
          body: "Das **NRS-2002** ist der Test für das Krankenhaus. (Kondrup, NRS-2002 2003)\n\n**Zuerst 4 kurze Fragen:**\n1. Ist der BMI unter 20,5?\n2. Hat der Patient in 3 Monaten ungewollt Gewicht verloren?\n3. Hat er in der letzten Woche weniger gegessen?\n4. Ist er schwer krank (zum Beispiel Intensivstation)?\n\n**Wenn alle 4× nein:** nichts weiter, einmal pro Woche wieder fragen.\n**Wenn einmal ja:** den langen Teil machen.\n\n**Langer Teil — zwei Punktezahlen:**\n- **Ernährung:** 0 (gut) bis 3 (schwere Mangelernährung)\n- **Krankheit:** 0 (leicht) bis 3 (Intensivstation)\n- **Plus 1 Punkt bei über 70 Jahren**\n\n**Auswertung (Gesamtpunkte):**\n- **3 oder mehr Punkte:** Risiko! Jetzt Ernährungstherapie planen\n- **Weniger als 3 Punkte:** einmal pro Woche wieder testen",
          glossarBegriffe: ["NRS-2002", "Screening"],
        },
      },
    },
    glossarBegriffe: ["NRS-2002", "Screening"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: pemu-pflegerische-erfassung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-pemu",
    themaId: "ernaehrungsassessment",
    titel: "PEMU — Pflegerische Erfassung von Mangelernährung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr T., 74 Jahre, hat im Screening ein Mangelernährungsrisiko. Jetzt willst du wissen: Warum isst er zu wenig? Wie findest du das heraus?",
      antwort:
        "Das PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen) ist das deutschsprachige Pflege-Assessment des DNQP (Bartholomeyczik et al. 2008). Es fragt systematisch nach Ursachen in 5 Bereichen: Essen/Trinken-Signale, Mundgesundheit, Fähigkeiten, Umgebung/Angebot, weitere Gründe.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen) ist das deutschsprachige Pflege-Assessment des DNQP (Bartholomeyczik et al. 2008). Es fragt systematisch nach Ursachen in 5 Bereichen, nicht nur nach Symptomen.",
      textB1:
        "Das PEMU ist der Test, den die Pflege macht, wenn das Screening ein Risiko zeigt (DNQP, Bartholomeyczik 2008). PEMU heißt: Pflegerische Erfassung von Mangelernährung und deren Ursachen. Es sucht Gründe, warum jemand wenig isst.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-06",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bartholomeyczik S. et al. (2008): PEMU", "DNQP Ernährungsmanagement (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-pemu",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "PEMU — Pflegerische Erfassung von Mangelernährung",
          body: "Das **PEMU** ist das pflegerische Assessment-Instrument zum DNQP-Expertenstandard Ernährungsmanagement (Bartholomeyczik et al. 2008, DNQP Ernährungsmanagement 2017).\n\n**Zwei Teile:**\n\n**Teil 1 — Erfassung des Ernährungszustandes:** Gewicht, Größe, BMI, Gewichtsverlauf, Nahrungs- und Flüssigkeitsmenge in den letzten 3 Tagen.\n\n**Teil 2 — Erfassung der Ursachen** (Kern des PEMU!) in fünf Bereichen:\n\n1. **Essen/Trinken-Signale:** Bittet um Hilfe? Schmerzen? Übelkeit? Appetitverlust?\n2. **Mundgesundheit:** Zahnprobleme, schlechte Zahnprothese, Soor, Schluckstörung, trockener Mund?\n3. **Fähigkeiten:** Kann er selbst essen? Motorisch eingeschränkt? Kognitive Einschränkung? Sieht er das Essen?\n4. **Umgebung/Angebot:** Passt die Kost? Kultur/Religion berücksichtigt? Lieblingsspeisen? Essenszeit passend?\n5. **Weitere Gründe:** Medikamentennebenwirkungen (Appetitverlust), Depression, soziale Isolation, Wasseraufnahme?\n\n**Ergebnis:** individuelle Pflegediagnose und zielgerichtete Maßnahmen — nicht 'Patient isst zu wenig', sondern 'Patient isst zu wenig, weil Zahnprothese drückt und er allein isst'.",
          glossarBegriffe: ["PEMU", "Pflegediagnose", "Dysphagie"],
        },
        contentB1: {
          title: "PEMU — Pflegerische Erfassung von Mangelernährung",
          body: "Das **PEMU** ist ein Werkzeug der Pflege (DNQP, Bartholomeyczik 2008). Es hilft, den **Grund** für wenig Essen zu finden.\n\n**Zwei Teile:**\n\n**Teil 1 — Zustand messen:** Gewicht, Größe, BMI, Gewichtsverlauf, wie viel isst und trinkt er in 3 Tagen?\n\n**Teil 2 — Warum isst er wenig?** Fünf Bereiche:\n\n1. **Essen und Trinken:** Hat er Schmerzen? Übelkeit? Wenig Appetit?\n2. **Mund:** Schmerzen an den Zähnen? Passt die Prothese? Soor? Kann er schlucken?\n3. **Fähigkeiten:** Kann er selbst essen? Kann er das Essen sehen? Versteht er die Situation?\n4. **Umgebung:** Schmeckt das Essen? Passt es zu seiner Kultur/Religion? Isst er allein?\n5. **Weitere Gründe:** Medikamente? Depression? Einsam?\n\n**Ergebnis:** Du weißt jetzt: 'Er isst wenig, weil die Prothese drückt und er allein isst.' Das ist wichtiger als nur: 'Er isst wenig.'",
          glossarBegriffe: ["PEMU", "Pflegediagnose", "Dysphagie"],
        },
      },
    },
    glossarBegriffe: ["PEMU", "Pflegediagnose", "Dysphagie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: dnqp-expertenstandard-ernaehrung (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-dnqp-standard",
    themaId: "ernaehrungsassessment",
    titel: "DNQP-Expertenstandard Ernährungsmanagement",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum braucht es überhaupt einen bundesweit einheitlichen Standard für Ernährungsmanagement? Was würde passieren, wenn jede Einrichtung es anders macht?",
      antwort:
        "Der DNQP-Expertenstandard Ernährungsmanagement (2017) ist nach § 113a SGB XI rechtlich verbindlich für alle Pflegeeinrichtungen. Er verlangt: Screening binnen 24h nach Aufnahme, Assessment (PEMU) bei Risiko, individuelle Maßnahmenplanung, Dokumentation. Gilt in allen Pflegesettings.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der DNQP-Expertenstandard Ernährungsmanagement (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege, 2017) legt fest: Jeder Patient erhält bei Aufnahme ein Screening — und bei Risiko ein Assessment plus individuelle Maßnahmenplanung.",
      textB1:
        "Der DNQP-Expertenstandard Ernährungsmanagement (2017) sagt, was die Pflege beim Thema Ernährung machen muss. Er gilt bundesweit: Jeder Patient bekommt ein Screening. Bei Risiko: ein genaueres Assessment und einen Plan.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Ernährungsmanagement (2017)", "§ 113a SGB XI"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-dnqp-standard",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "DNQP-Expertenstandard Ernährungsmanagement",
          body: "Der **DNQP-Expertenstandard Ernährungsmanagement** (DNQP Ernährungsmanagement, 2017) ist einer von 12 nationalen Expertenstandards und **rechtlich verbindlich** für alle Pflegeeinrichtungen (§ 113a SGB XI).\n\n**Struktur nach S-P-E (Struktur → Prozess → Ergebnis):**\n\n**S1:** Die Pflegefachkraft verfügt über aktuelles Wissen zum Ernährungsmanagement.\n**S2:** Geeignete Screening- und Assessmentinstrumente stehen zur Verfügung.\n**S3:** Einrichtung hat Regeln für interdisziplinäre Zusammenarbeit.\n\n**P1 (Prozess):** Bei Aufnahme → Screening (binnen 24h).\n**P2:** Bei Risiko → tiefes Assessment mit PEMU.\n**P3:** Gemeinsam mit Patient/Angehörigen: individuelle Maßnahmen planen.\n**P4:** Umsetzung, Überprüfung, Dokumentation.\n\n**E1 (Ergebnis):** Mangelernährung wird früh erkannt und behandelt.\n**E2:** Der Patient hat eine bedarfsgerechte Ernährung.\n\n**Haftungsrelevant:** Wer den Standard ignoriert, haftet im Schadensfall. Wer ihn einhält, ist rechtlich gut abgesichert.",
          glossarBegriffe: ["DNQP"],
        },
        contentB1: {
          title: "DNQP-Expertenstandard Ernährungsmanagement",
          body: "Der **DNQP** ist eine Gruppe von Experten für Pflege. Er schreibt Regeln, die in allen Pflegeheimen und Kliniken gelten.\n\nDer Standard 'Ernährungsmanagement' (2017) sagt:\n\n**Struktur — Was braucht die Einrichtung?**\n- Pflegekräfte mit Wissen\n- Screening-Werkzeuge (NRS, MNA)\n- Zusammenarbeit mit Arzt und Küche\n\n**Prozess — Was muss die Pflege tun?**\n- Bei jeder Aufnahme: **Screening** in 24 Stunden\n- Bei Risiko: **Assessment** mit PEMU\n- Gemeinsam mit Patient einen Plan machen\n- Umsetzen, prüfen, dokumentieren\n\n**Ergebnis — Was soll rauskommen?**\n- Mangelernährung wird früh erkannt\n- Der Patient bekommt, was er braucht\n\n**Wichtig:** Der Standard ist **rechtlich bindend**. Wer ihn nicht einhält, kann bei Problemen haften.",
          glossarBegriffe: ["DNQP"],
        },
      },
    },
    glossarBegriffe: ["DNQP"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: formen-der-mangelernaehrung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-formen-mangel",
    themaId: "ernaehrungsassessment",
    titel: "Formen der Mangelernährung: PEM, Kachexie, Sarkopenie",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Drei Patienten sind dünn und schwach: Frau A., 80, wohnt allein und vergisst zu essen. Herr B., 55, Krebspatient, nimmt trotz Essen ab. Herr C., 82, hat kaum noch Muskeln. Sind das drei gleiche Probleme?",
      antwort:
        "Nein. Es gibt drei Formen: PEM (Protein-Energie-Mangelernährung) = zu wenig Nahrung, reversibel. Kachexie = Gewichtsverlust bei chronischer Krankheit (Krebs, Herzinsuffizienz, COPD), trotz Nahrungszufuhr — Zytokin-vermittelt. Sarkopenie = altersbedingter Muskelverlust. (DGEM/ESPEN 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Formen werden unterschieden: Protein-Energie-Mangelernährung (PEM) = zu wenig Nahrung, reversibel. Kachexie = Gewichtsverlust bei chronischer Krankheit (Krebs, Herzinsuffizienz, COPD), trotz Nahrungszufuhr. Sarkopenie = altersbedingter Muskelverlust. (DGEM/ESPEN 2020)",
      textB1:
        "Es gibt drei Formen von Mangelernährung: PEM = zu wenig gegessen (kann wieder besser werden). Kachexie = Gewichtsverlust bei schwerer Krankheit (zum Beispiel Krebs) — trotz Essen. Sarkopenie = Muskel-Schwund im Alter. Alle drei haben andere Gründe.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-08",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGEM/ESPEN (2020): S3-Leitlinie Klinische Ernährung", "Cederholm T. et al. (2019): GLIM-Kriterien"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-formen-mangel",
        tag: "krankheitslehre",
        displayFormat: "checklist",
        contentC1: {
          title: "Formen der Mangelernährung: PEM, Kachexie, Sarkopenie",
          body: "Drei klinisch relevante Formen der Mangelernährung (DGEM/ESPEN 2020, GLIM-Kriterien, Cederholm 2019):\n\n**1. Protein-Energie-Mangelernährung (PEM) / einfache Mangelernährung:**\n- Ursache: zu geringe Nahrungsaufnahme (Appetitverlust, soziale Isolation, Demenz, Schluckstörung)\n- Merkmal: Gewichtsverlust + reduzierter BMI\n- **Reversibel:** Erholung durch ausreichende Kalorien- und Eiweißzufuhr möglich\n- Typisch: alleinlebende Senioren, Demenz, Depression\n\n**2. Kachexie (krankheitsassoziiert):**\n- Ursache: **chronisch-entzündlicher Prozess** (Krebs, Herzinsuffizienz, COPD, Niereninsuffizienz)\n- Mechanismus: Zytokin-vermittelter Muskelabbau, auch **trotz Nahrungszufuhr**\n- Merkmal: Verlust an Fett UND Muskelmasse\n- **Nicht einfach reversibel** — Grunderkrankung muss behandelt werden\n\n**3. Sarkopenie:**\n- Ursache: altersbedingter **Muskelabbau** (ab 50 ca. 1-2%/Jahr, ab 65 beschleunigt)\n- Merkmal: reduzierte Muskelmasse + Muskelkraft + Muskelfunktion\n- Folge: Sturzrisiko, Mobilitätsverlust, Abhängigkeit\n- **Teilweise reversibel** durch Krafttraining + Eiweißzufuhr (1,0-1,5 g/kgKG)\n\n**Praktisch:** Du kannst alle drei nebeneinander bei **einem** Patienten finden — z.B. alter Krebspatient, alleinlebend.",
          glossarBegriffe: ["Mangelernährung", "Kachexie", "Sarkopenie"],
        },
        contentB1: {
          title: "Formen der Mangelernährung: PEM, Kachexie, Sarkopenie",
          body: "Drei Formen von Mangelernährung (DGEM/ESPEN 2020):\n\n**1. PEM (Protein-Energie-Mangelernährung):**\n- Grund: zu wenig gegessen\n- Wer? Alleinlebende alte Menschen, Demenz, Depression\n- Reversibel: Mit mehr Essen wird es wieder besser\n- Merkmal: Gewicht fällt, BMI fällt\n\n**2. Kachexie:**\n- Grund: schwere Krankheit (Krebs, Herz, COPD)\n- Der Körper baut Muskel ab — **auch wenn der Patient isst**\n- Nicht einfach zu stoppen: Die Krankheit muss behandelt werden\n- Merkmal: Muskel und Fett gehen weg\n\n**3. Sarkopenie:**\n- Grund: das Alter\n- Ab 50 verliert man 1-2% Muskeln pro Jahr, ab 65 schneller\n- Folgen: Schwäche, Stürze, Pflegebedarf\n- Besserung: Krafttraining + Eiweiß (1-1,5 g pro kg Körpergewicht pro Tag)\n\n**Wichtig:** Ein Patient kann alle drei Formen gleichzeitig haben — zum Beispiel ein alter Krebspatient, der allein lebt.",
          glossarBegriffe: ["Mangelernährung", "Kachexie", "Sarkopenie"],
        },
      },
    },
    glossarBegriffe: ["Mangelernährung", "Kachexie", "Sarkopenie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: gewichtsverlust-grenzen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-gewichtsverlust",
    themaId: "ernaehrungsassessment",
    titel: "Ungewollter Gewichtsverlust — klinische Grenzen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr M., 70 kg, hat in 3 Monaten 5 kg verloren. Ist das viel oder normal? Wie rechnest du das aus — und was sagen die Prozent?",
      antwort:
        "Klinisch relevant: >5% in 3 Monaten = auffällig, >10% in 6 Monaten = schwer, >5% in 1 Monat = Alarmzeichen. Rechnung: (Altgewicht − aktuelles Gewicht) ÷ Altgewicht × 100. Beispiel: 70 → 65 kg = (70−65)/70×100 = 7,1% → auffällig. (DGEM/ESPEN 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Klinisch relevant ist ein ungewollter Gewichtsverlust: >5% in 3 Monaten oder >10% in 6 Monaten ist auffällig (DGEM/ESPEN 2020). Rechnung: (Altgewicht − Neugewicht) ÷ Altgewicht × 100. Beispiel: 70 kg → 65 kg = 7,1%.",
      textB1:
        "Ein Gewichtsverlust ist wichtig, wenn er ungewollt passiert: Mehr als 5% in 3 Monaten oder mehr als 10% in 6 Monaten. Rechnung: (altes Gewicht − neues Gewicht) geteilt durch altes Gewicht × 100. Beispiel: 70 → 65 = 7,1%.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-09",
        phase: 1,
        stepType: "calculation",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGEM/ESPEN (2020): S3-Leitlinie Klinische Ernährung", "DNQP Ernährungsmanagement (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-gewichtsverlust",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Ungewollter Gewichtsverlust — klinische Grenzen",
          body: "Ein ungewollter Gewichtsverlust ist einer der **stärksten Prädiktoren** für ein ernährungsmedizinisches Risiko (DGEM/ESPEN 2020; DNQP Ernährungsmanagement 2017):\n\n**Klinisch relevante Grenzen:**\n- **>5% in 3 Monaten** → auffällig, Screening positiv\n- **>10% in 6 Monaten** → schwer, meist Mangelernährung\n- **>5% in 1 Monat** → Alarmzeichen, oft krankheitsbedingt\n\n**Berechnung des prozentualen Gewichtsverlustes:**\n\nProzent = (Altgewicht − aktuelles Gewicht) ÷ Altgewicht × 100\n\nBeispiel: Frau M. wog vor 3 Monaten 68 kg, jetzt 63 kg.\n**(68 − 63) ÷ 68 × 100 = 7,35%** → auffällig\n\n**Wichtig zu unterscheiden:**\n- **Ungewollt** = relevant → Screening/Assessment starten\n- **Gewollt** (Diät, Bariatrie) = kein Alarmzeichen, aber dokumentieren\n\n**Fehlerquellen:**\n- Gewicht nicht genau bekannt → Angehörige fragen, alte Dokumentation\n- Ödeme verschleiern Muskel-/Fettverlust → Gewicht normal, aber Patient unterernährt\n- Dehydratation täuscht Gewichtsverlust vor → Trinkmenge prüfen",
          glossarBegriffe: ["ungewollter Gewichtsverlust"],
        },
        contentB1: {
          title: "Ungewollter Gewichtsverlust — klinische Grenzen",
          body: "Ungewollter Gewichtsverlust ist ein wichtiges Warnsignal (DGEM/ESPEN 2020):\n\n**Wichtige Grenzen:**\n- **Mehr als 5% in 3 Monaten** = auffällig\n- **Mehr als 10% in 6 Monaten** = schwer\n- **Mehr als 5% in 1 Monat** = Alarm, meist eine Krankheit\n\n**Wie rechnest du Prozent aus?**\n\nProzent = (altes Gewicht − neues Gewicht) geteilt durch altes Gewicht × 100\n\nBeispiel: Frau M. hatte 68 kg, jetzt hat sie 63 kg.\n**(68 − 63) geteilt durch 68 × 100 = 7,35%** → auffällig\n\n**Wichtig:**\n- **Ungewollt** verloren = wichtig, Screening starten\n- **Gewollt** verloren (Diät) = kein Alarm, nur dokumentieren\n\n**Achtung bei:**\n- Patient weiß sein altes Gewicht nicht → Angehörige fragen\n- Wasser im Körper (Ödeme) kann den Verlust verstecken\n- Wenig trinken macht das Gewicht niedriger (ohne Mangelernährung)",
          glossarBegriffe: ["ungewollter Gewichtsverlust"],
        },
      },
    },
    glossarBegriffe: ["ungewollter Gewichtsverlust"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: klinische-zeichen-mangelernaehrung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-klinische-zeichen",
    themaId: "ernaehrungsassessment",
    titel: "Klinische Zeichen der Mangelernährung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du betrittst ein Zimmer. Woran erkennst du auf den ersten Blick, ob der Patient mangelernährt sein könnte? Nenne mindestens 3 sichtbare Zeichen.",
      antwort:
        "Sichtbare Zeichen: eingefallene Wangen, schlaffe Oberarm-/Oberschenkelmuskeln, hervorstehende Schlüsselbeine, trockene schuppige Haut, brüchige Nägel und Haare. Dazu: lockere Kleidung, lockerer Ehering, Dekubitus-Gefahr durch weniger Polsterung. Wadenumfang <31 cm = Warnsignal. (DGEM/ESPEN 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Sichtbare Zeichen: eingefallene Wangen, schlaffe Oberarm-/Oberschenkelmuskeln, hervorstehende Schlüsselbeine, trockene schuppige Haut, brüchige Nägel und Haare. Dazu: lockere Kleidung, lockerer Ehering, Dekubitus-Gefahr durch weniger Polsterung.",
      textB1:
        "Zeichen, die du sehen kannst: eingefallene Wangen, dünne Oberarme, hervorstehende Schlüsselbeine, trockene Haut, brüchige Nägel, dünne Haare. Dazu: Kleidung ist zu weit, Ring passt nicht mehr, schneller Dekubitus.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-10",
        phase: 1,
        stepType: "hotspot",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGEM/ESPEN (2020): S3-Leitlinie Klinische Ernährung", "Guigoz Y. (1994): MNA"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-klinische-zeichen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Klinische Zeichen der Mangelernährung",
          body: "Klinische Zeichen der Mangelernährung — **systematische Beobachtung von Kopf bis Fuß**:\n\n**Gesicht:**\n- Eingefallene Wangen (Bichat-Fettkörper geschrumpft)\n- Temporalisatrophie (Schläfenmuskel eingesunken)\n- Trockene Mundschleimhaut, rissige Mundwinkel\n\n**Rumpf / Arme:**\n- Hervorstehende Schlüsselbeine und Rippen\n- Oberarmumfang (MUAC) <22 cm bei Männern, <21 cm bei Frauen = Warnsignal\n- Schlaffe Oberarmmuskulatur\n\n**Beine:**\n- **Wadenumfang <31 cm** = Warnsignal (auch im MNA)\n- Schlaffe Oberschenkelmuskulatur\n\n**Haut, Haare, Nägel:**\n- Trockene schuppige Haut, schlechte Wundheilung\n- Brüchige, stumpfe Haare; Haarausfall\n- Löffelnägel, Querrillen, brüchig\n- Dekubitus tritt schneller auf (weniger Fettpolster)\n\n**Weitere:**\n- Lockere Kleidung, lockerer Ehering\n- Müde Ausstrahlung, eingefallene Augen\n\n**Wichtig:** Diese Zeichen sind **spät**. Wenn sie sichtbar sind, ist die Mangelernährung oft schon fortgeschritten. Screening sollte früher greifen. (DGEM/ESPEN 2020)",
          glossarBegriffe: ["Wadenumfang", "Mangelernährung"],
        },
        contentB1: {
          title: "Klinische Zeichen der Mangelernährung",
          body: "Zeichen der Mangelernährung — schau systematisch:\n\n**Gesicht:**\n- Eingefallene Wangen\n- Schläfen sind eingesunken\n- Trockener Mund, rissige Mundwinkel\n\n**Oberkörper und Arme:**\n- Schlüsselbeine stehen hervor\n- Rippen sind zu sehen\n- **Oberarm** dünn (unter 22 cm bei Männern, 21 cm bei Frauen = Warnung)\n\n**Beine:**\n- **Wadenumfang unter 31 cm** = Warnung\n- Dünne Oberschenkel\n\n**Haut, Haare, Nägel:**\n- Trockene schuppige Haut\n- Wunden heilen schlecht\n- Dünne Haare, Haarausfall\n- Brüchige Nägel mit Rillen\n- Dekubitus kommt schneller\n\n**Auch wichtig:**\n- Kleidung sitzt zu weit, Ring ist zu groß\n\n**Wichtig:** Wenn du diese Zeichen siehst, ist die Mangelernährung schon weit. Screening soll sie früher finden.",
          glossarBegriffe: ["Wadenumfang", "Mangelernährung"],
        },
      },
    },
    glossarBegriffe: ["Wadenumfang", "Mangelernährung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: laborwerte-mangelernaehrung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-laborwerte",
    themaId: "ernaehrungsassessment",
    titel: "Laborwerte bei Mangelernährung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Der Arzt nimmt Blut ab. Welche Werte zeigen, ob der Patient genug Eiweiß hat? Und warum nicht ein einziger Wert?",
      antwort:
        "Zentrale Laborwerte: Albumin (langsam, Halbwertszeit 20 Tage, <35 g/l auffällig), Präalbumin (schnell, 2-3 Tage), Transferrin (8 Tage), Gesamteiweiß (<65 g/l niedrig). Einzelwert reicht nicht — Kombination + klinisches Bild. Albumin immer mit CRP kombinieren. (DGEM/ESPEN 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Zentrale Laborwerte: Albumin (langsam, Halbwertszeit 20 Tage, <35 g/l auffällig), Präalbumin (schnell, 2-3 Tage), Transferrin (8 Tage), Gesamteiweiß (<65 g/l niedrig). Einzelwert reicht nicht — Kombination + klinisches Bild. (DGEM/ESPEN 2020)",
      textB1:
        "Laborwerte für Eiweiß: Albumin (langsam, unter 35 g/l = wenig), Präalbumin (reagiert schnell, 2-3 Tage), Transferrin (8 Tage), Gesamteiweiß (unter 65 g/l niedrig). Ein Wert allein reicht nicht — du brauchst mehrere plus Augen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-11",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGEM/ESPEN (2020): S3-Leitlinie Klinische Ernährung"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-laborwerte",
        tag: "krankheitslehre",
        displayFormat: "checklist",
        contentC1: {
          title: "Laborwerte bei Mangelernährung",
          body: "Relevante Laborwerte im Ernährungs-Assessment (DGEM/ESPEN 2020):\n\n| Wert | Normbereich | Halbwertszeit | Aussage |\n|------|-------------|---------------|---------|\n| **Albumin** | 35-53 g/l | ca. 20 Tage | Langfristige Eiweißversorgung; <35 g/l = auffällig |\n| **Präalbumin** | 20-40 mg/dl | 2-3 Tage | Kurzfristige Veränderung, Therapie-Monitoring |\n| **Transferrin** | 200-400 mg/dl | ca. 8 Tage | Mittelfristig, auch Eisenstatus |\n| **Gesamteiweiß** | 65-85 g/l | — | Überblick |\n| **Lymphozyten** | >1500/µl | — | Immunstatus |\n| **CRP** | <5 mg/l | — | Entzündung senkt Albumin unabhängig von Ernährung |\n\n**Wichtig — Fallstricke:**\n1. **Entzündung/Infektion** senkt Albumin und Präalbumin **unabhängig** vom Ernährungsstatus. CRP immer mitbestimmen.\n2. **Leberinsuffizienz** senkt Albumin (Synthese reduziert).\n3. **Niereninsuffizienz** → Proteinurie → Albuminverlust über die Niere.\n4. **Dehydratation** erhöht alle Proteinwerte (Pseudonormalisierung).\n\n**Fazit:** Laborwerte sind **Baustein**, nicht Diagnose. Sie müssen mit BMI, Gewichtsverlust und klinischer Beobachtung kombiniert werden.",
          glossarBegriffe: ["Albumin", "Präalbumin"],
        },
        contentB1: {
          title: "Laborwerte bei Mangelernährung",
          body: "Wichtige Laborwerte:\n\n| Wert | Normal | Wie schnell ändert er sich? | Bedeutung |\n|------|--------|------------------------------|-----------|\n| **Albumin** | 35-53 g/l | langsam (20 Tage) | Langfristig; unter 35 = wenig Eiweiß |\n| **Präalbumin** | 20-40 mg/dl | schnell (2-3 Tage) | Zeigt Therapie-Erfolg schnell |\n| **Transferrin** | 200-400 mg/dl | mittel (8 Tage) | Eiweiß + Eisen |\n| **Gesamteiweiß** | 65-85 g/l | — | Alle Eiweiße zusammen |\n| **CRP** | unter 5 mg/l | — | Entzündung |\n\n**Vorsicht — Fallen:**\n1. **Entzündung oder Infekt** senkt Albumin — auch wenn der Patient gut isst. Immer CRP messen.\n2. **Kranke Leber** macht wenig Albumin — nicht die Ernährung.\n3. **Kranke Niere** verliert Albumin im Urin.\n4. **Wenig getrunken** macht alle Werte zu hoch (falsch normal).\n\n**Merke:** Laborwerte sind nur **ein Teil**. Du musst auch BMI, Gewicht und das Aussehen anschauen.",
          glossarBegriffe: ["Albumin", "Präalbumin"],
        },
      },
    },
    glossarBegriffe: ["Albumin", "Präalbumin"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: fluessigkeitsbilanz (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-fluessigkeitsbilanz",
    themaId: "ernaehrungsassessment",
    titel: "Flüssigkeitsbilanz — Einfuhr und Ausfuhr",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient soll seine Flüssigkeit bilanzieren. Was musst du alles messen — und warum nicht nur das Trinken?",
      antwort:
        "Flüssigkeitsbilanz = Einfuhr minus Ausfuhr pro 24 h. Einfuhr: alles Getrunkene + Sondenkost + Infusionen + Wassergehalt Nahrung. Ausfuhr: Urin + Stuhl + Erbrochenes + Drainage + Perspiratio insensibilis (700-900 ml/d, +500 ml pro Grad Fieber) + Schwitzen. Ziel: ausgeglichen (±200 ml). (DNQP Ernährungsmanagement 2017)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Flüssigkeitsbilanz = Einfuhr minus Ausfuhr pro 24 h. Einfuhr: alles Getrunkene + Sondenkost + Infusionen + Wassergehalt Nahrung. Ausfuhr: Urin + Stuhl + Erbrochenes + Drainage + Schwitzen + Atmung. Ziel: ausgeglichen (ca. 0 ml).",
      textB1:
        "Flüssigkeitsbilanz = Einfuhr − Ausfuhr in 24 Stunden. Einfuhr: Trinken + Suppe + Infusion + Sondenkost. Ausfuhr: Urin + Stuhl + Erbrochenes + Drainage + Schweiß + Atemluft. Ziel: beides ungefähr gleich (null).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-12",
        phase: 1,
        stepType: "tablefillin",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Ernährungsmanagement (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-fluessigkeitsbilanz",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Flüssigkeitsbilanz — Einfuhr und Ausfuhr",
          body: "Die **Flüssigkeitsbilanz** dokumentiert den Ein- und Austritt von Flüssigkeit in 24 Stunden — zentral bei Herzinsuffizienz, Niereninsuffizienz, Infektionen, hohem Fieber, postoperativ (DNQP Ernährungsmanagement 2017).\n\n**Einfuhr (alles was hineinkommt):**\n- Getränke (Wasser, Tee, Kaffee, Säfte, Milch)\n- Suppen, Eis, Götterspeise\n- Infusionen (i.v.)\n- Sondenkost + Spülvolumen\n- Wassergehalt fester Nahrung (ca. 500-1000 ml/d)\n\n**Ausfuhr (alles was hinausgeht):**\n- Urin (Sammelbeutel oder Messbecher)\n- Stuhl (besonders bei Durchfall — ca. 200 ml/Stuhlgang)\n- Erbrochenes\n- Drainagen (Wund-, Magen-, Thoraxdrainagen)\n- Perspiratio insensibilis (ca. 700-900 ml/d über Haut und Atmung — bei Fieber pro °C +500 ml)\n- Schwitzen (bei starkem Schweiß +500-1000 ml)\n\n**Bilanz-Formel:**\nEinfuhr − Ausfuhr = Bilanz\n\n- **Ausgeglichen** (±200 ml): Normalzustand\n- **Positive Bilanz** (Einfuhr > Ausfuhr): Flüssigkeits-Einlagerung\n- **Negative Bilanz** (Ausfuhr > Einfuhr): Dehydratation-Gefahr\n\n**Wichtig:** Gleichzeitig **täglich wiegen** (nüchtern, gleiche Uhrzeit, gleiche Kleidung). 1 kg Gewichtsveränderung ≈ 1 Liter Wasser.",
          glossarBegriffe: ["Flüssigkeitsbilanz", "Perspiratio insensibilis"],
        },
        contentB1: {
          title: "Flüssigkeitsbilanz — Einfuhr und Ausfuhr",
          body: "Die **Flüssigkeitsbilanz** zeigt, wie viel der Patient in 24 Stunden aufnimmt und wieder ausscheidet. Wichtig bei Herz- oder Nierenkrankheit, Fieber, nach einer OP.\n\n**Einfuhr — Was kommt hinein?**\n- Trinken (Wasser, Tee, Saft, Milch)\n- Suppe, Eis, Wackelpudding\n- Infusionen (Tropf)\n- Sondenkost und Spülung\n- Wasser in fester Nahrung\n\n**Ausfuhr — Was geht hinaus?**\n- Urin\n- Stuhl (bei Durchfall viel — ca. 200 ml pro Gang)\n- Erbrochenes\n- Drainagen\n- Perspiratio (Wasser aus Haut und Atem, ca. 700-900 ml pro Tag)\n- Bei Fieber: plus 500 ml pro Grad mehr\n- Starkes Schwitzen: plus 500-1000 ml\n\n**Rechnung:**\nEinfuhr − Ausfuhr = Bilanz\n\n- **Ausgeglichen** (±200 ml): alles gut\n- **Positiv** (mehr rein als raus): Patient lagert Wasser ein\n- **Negativ** (mehr raus als rein): Dehydratation droht\n\n**Wichtig:** Dazu **täglich wiegen** (morgens, nüchtern, gleiche Kleidung). 1 kg mehr/weniger = ungefähr 1 Liter Wasser.",
          glossarBegriffe: ["Flüssigkeitsbilanz", "Perspiratio insensibilis"],
        },
      },
    },
    glossarBegriffe: ["Flüssigkeitsbilanz", "Perspiratio insensibilis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: exsikkosezeichen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-exsikkose",
    themaId: "ernaehrungsassessment",
    titel: "Exsikkose — Zeichen und Besonderheiten bei Älteren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau L., 85 Jahre, wirkt verwirrt. Sie trinkt seit 2 Tagen kaum. Woran erkennst du, dass sie ausgetrocknet ist? Nenne 3 Zeichen, die du sofort prüfen kannst.",
      antwort:
        "Exsikkosezeichen: stehende Hautfalten (Turgor — bei älteren Menschen unzuverlässig!), trockene Schleimhäute, eingefallene Augen, dunkler konzentrierter Urin (Oligurie), Tachykardie, niedriger Blutdruck, Verwirrtheit/Delir. Bei alten Menschen: Durstempfinden ist reduziert — plötzliche Verwirrtheit ist oft das erste Zeichen!",
    },
    stufe2: {
      typ: "hinweis",
      text: "Exsikkosezeichen: stehende Hautfalten (Turgor am Handrücken prüfen), trockene Schleimhäute, eingefallene Augen, dunkler konzentrierter Urin, Tachykardie, niedriger Blutdruck, Verwirrtheit. Bei alten Menschen oft keine Durstäußerung.",
      textB1:
        "Zeichen für Austrocknung: stehende Hautfalte (ziehe die Haut am Handrücken hoch — bleibt sie stehen = trocken), trockener Mund, eingefallene Augen, dunkler Urin, schneller Puls, niedriger Blutdruck, verwirrt. Alte Menschen haben oft keinen Durst.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-13",
        phase: 1,
        stepType: "hotspot",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Ernährungsmanagement (2017)", "DGEM/ESPEN (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-exsikkose",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Exsikkose — Zeichen und Besonderheiten bei Älteren",
          body: "**Exsikkose (Dehydratation)** = Flüssigkeitsmangel im Körper. Bei älteren Menschen eine der häufigsten und gefährlichsten Komplikationen.\n\n**Klassische klinische Zeichen:**\n\n**Haut / Schleimhäute:**\n- **Stehende Hautfalten** (Turgor am Handrücken oder Sternum — bei Älteren wegen Hautelastizität nicht immer verlässlich)\n- Trockene Mundschleimhaut, trockene Zunge mit Längsfurchen\n- Eingefallene Augen, weiche Bulbi\n\n**Urin:**\n- **Oligurie** (<500 ml/24 h)\n- Dunkler, konzentrierter Urin\n\n**Kreislauf:**\n- **Tachykardie** (Herzfrequenz steigt kompensatorisch)\n- Orthostase / niedriger Blutdruck\n\n**Neurologisch:**\n- **Verwirrtheit, Somnolenz, Delir** (besonders bei Älteren oft erstes Zeichen!)\n- Muskelkrämpfe\n\n**Laborwerte:**\n- Harnstoff hoch, Kreatinin hoch\n- Hämatokrit ↑ (Bluteindickung)\n\n**Besonderheit bei Älteren:**\n- Durstempfinden ist **reduziert** → kein zuverlässiges Signal\n- Polypharmazie (Diuretika, Laxanzien) verstärkt Risiko\n- Plötzlich verwirrt? → **immer zuerst an Exsikkose denken**!",
          glossarBegriffe: ["Exsikkose", "Dehydratation", "Oligurie"],
        },
        contentB1: {
          title: "Exsikkose — Zeichen und Besonderheiten bei Älteren",
          body: "**Exsikkose** (Austrocknung) heißt: zu wenig Wasser im Körper. Bei alten Menschen häufig und gefährlich.\n\n**Haut und Mund:**\n- **Stehende Hautfalte** (zieh die Haut am Handrücken hoch — bleibt sie stehen, ist der Patient trocken. Bei alten Menschen nicht immer sicher!)\n- Trockener Mund, Zunge mit Furchen\n- Eingefallene Augen\n\n**Urin:**\n- **Oligurie** (wenig Urin, unter 500 ml am Tag)\n- Dunkler Urin (konzentriert)\n\n**Kreislauf:**\n- **Schneller Puls** (Tachykardie)\n- Niedriger Blutdruck, Schwindel beim Aufstehen\n\n**Nervensystem:**\n- **Verwirrt, müde, schläfrig, Delir** (bei alten Menschen oft **das erste Zeichen!**)\n\n**Wichtig bei Alten:**\n- Sie haben oft **keinen Durst** — verlass dich nicht darauf!\n- Plötzlich verwirrt? **Zuerst an Austrocknung denken**, nicht an Demenz!",
          glossarBegriffe: ["Exsikkose", "Dehydratation", "Oligurie"],
        },
      },
    },
    glossarBegriffe: ["Exsikkose", "Dehydratation", "Oligurie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: fluessigkeitsbedarf (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-fluessigkeitsbedarf",
    themaId: "ernaehrungsassessment",
    titel: "Flüssigkeitsbedarf — Richtwerte und Besonderheiten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr K. wiegt 70 kg. Wie viel soll er pro Tag trinken? Und zählen Tee und Suppe mit?",
      antwort:
        "Richtwert: 30-35 ml/kg Körpergewicht/Tag. Ein 70-kg-Mensch: 70 × 30 = 2,1 Liter pro Tag. Davon ca. 1,5 Liter über Getränke, der Rest aus Nahrung. Bei Fieber +500 ml pro Grad über 37°C. Bei Herzinsuffizienz oft Restriktion auf 1000-1500 ml (ärztliche Anordnung!). (DGE; DGEM/ESPEN 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Richtwert für Erwachsene: 30-35 ml/kg Körpergewicht/Tag (DGE). Ein 70-kg-Mensch: 70 × 30 = 2,1 Liter pro Tag. Davon ca. 1,5 Liter über Getränke, der Rest aus Nahrung. Bei Fieber, Durchfall, Schwitzen, Hitze: +500-1000 ml zusätzlich.",
      textB1:
        "Ein Erwachsener braucht etwa 30-35 ml Flüssigkeit pro Kilogramm Körpergewicht am Tag. Beispiel: 70 kg × 30 = 2,1 Liter. Davon ca. 1,5 Liter zum Trinken, der Rest kommt aus dem Essen. Bei Fieber, Durchfall oder Hitze: plus 500-1000 ml.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-14",
        phase: 1,
        stepType: "calculation",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGE — Deutsche Gesellschaft für Ernährung", "DGEM/ESPEN (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-fluessigkeitsbedarf",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Flüssigkeitsbedarf — Richtwerte und Besonderheiten",
          body: "Der **Flüssigkeitsbedarf** ist individuell, aber es gibt klare Richtwerte (DGE; DGEM/ESPEN 2020):\n\n**Erwachsene:** 30-35 ml/kg Körpergewicht/Tag (Gesamt-Flüssigkeit inkl. Nahrung).\n- Beispielrechnung: 70 kg × 30 ml = **2100 ml/Tag**.\n- Davon typischerweise **~1500 ml als Getränke**, der Rest (~600 ml) aus der Nahrung.\n\n**Ältere Menschen (>65 J.):** Etwa gleiche Formel, aber Durstempfinden reduziert → **aktive Zufuhr nötig**, nicht auf Durst verlassen.\n\n**Zusätzlicher Bedarf:**\n- **Fieber:** +500 ml pro Grad über 37 °C\n- **Durchfall:** +500-1000 ml (plus Elektrolyte)\n- **Starkes Schwitzen:** +500-1000 ml\n- **Erbrechen, Drainagen:** je nach Verlustmenge\n\n**Reduzierter Bedarf:**\n- **Herzinsuffizienz (schwer):** oft Trinkmenge-Beschränkung 1000-1500 ml/d (ärztliche Anordnung!)\n- **Dialyse-Patienten:** ärztlich angeordnete Beschränkung\n\n**Merke:** Die Formel ist ein **Startwert** — bei Niereninsuffizienz und Herzinsuffizienz gelten immer ärztliche Anordnungen.",
          glossarBegriffe: ["Flüssigkeitsbedarf"],
        },
        contentB1: {
          title: "Flüssigkeitsbedarf — Richtwerte und Besonderheiten",
          body: "Richtwerte für den Flüssigkeitsbedarf (DGE):\n\n**Erwachsene:** 30-35 ml pro Kilogramm Körpergewicht pro Tag (alle Flüssigkeit zusammen).\n- Beispiel: 70 kg × 30 = **2100 ml am Tag**.\n- Davon: **ca. 1500 ml trinken**, der Rest (etwa 600 ml) kommt aus dem Essen.\n\n**Alte Menschen (über 65):** Gleiche Formel, aber: Sie **merken den Durst nicht gut**. Die Pflege muss aktiv helfen — regelmäßig anbieten, Trinkplan machen.\n\n**Mehr Bedarf bei:**\n- **Fieber:** +500 ml pro Grad über 37°C\n- **Durchfall:** +500-1000 ml\n- **Starkes Schwitzen:** +500-1000 ml\n\n**Weniger Bedarf bei:**\n- **Schwere Herzinsuffizienz:** oft nur 1000-1500 ml pro Tag (ärztlich angeordnet!)\n- **Dialyse:** vom Arzt festgelegt\n\n**Merke:** Die Formel ist nur ein Startwert. Bei kranker Niere oder krankem Herz zählt immer die ärztliche Anordnung.",
          glossarBegriffe: ["Flüssigkeitsbedarf"],
        },
      },
    },
    glossarBegriffe: ["Flüssigkeitsbedarf"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: massnahmen-ableitung (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-massnahmen",
    themaId: "ernaehrungsassessment",
    titel: "Pflegemaßnahmen aus PEMU ableiten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau M., 78, NRS-2002 = 4 Punkte, PEMU zeigt: Zahnprothese drückt und sie isst allein. Welche 3 konkreten Pflegemaßnahmen planst du in den nächsten 24 Stunden?",
      antwort:
        "Maßnahmen leiten sich aus den PEMU-Ursachen ab: Prothese → Zahnarzt anfragen + weiche Kost als Übergang. Allein → Esskreis/Tischgemeinschaft organisieren, Angehörige zur Essenszeit einladen. Bei Mangelernährung zusätzlich: 5-6 kleine Portionen, Anreichern (Sahne, Öl), Trinknahrung zwischen Mahlzeiten, täglich wiegen, Evaluation nach 1-2 Wochen. (DNQP Ernährungsmanagement 2017)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Maßnahmen leiten sich aus den PEMU-Ursachen ab — nicht pauschal 'mehr essen'. Beispiele: Zahnprothese drückt → Konsultation Zahnarzt + weiche Kost. Isst allein → Esskreis organisieren. Kein Appetit → Lieblingsspeisen, häufige kleine Portionen.",
      textB1:
        "Die Maßnahmen kommen aus den Gründen im PEMU — nicht einfach 'mehr essen'. Beispiele: Prothese drückt → Zahnarzt + weiches Essen. Einsam → Esskreis. Kein Appetit → Lieblingsessen, kleine Portionen, aber mehrmals am Tag.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-15",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Ernährungsmanagement (2017)", "DGEM/ESPEN (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-massnahmen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflegemaßnahmen aus PEMU ableiten",
          body: "Pflegemaßnahmen bei Mangelernährungs-Risiko werden **individuell aus dem Assessment abgeleitet** (DNQP Ernährungsmanagement 2017).\n\n**Grundprinzip:** Für jede im PEMU erkannte Ursache gibt es eine Maßnahme.\n\n**Typische Ursachen → Maßnahmen:**\n\n| PEMU-Ursache | Konkrete Pflegemaßnahme |\n|--------------|---------------------------|\n| Zahnprothese drückt/schlecht | Zahnarztkonsil, weiche/pürierte Kost als Übergang |\n| Schluckstörung (Dysphagie) | Logopädie anfragen, Konsistenz anpassen (angedickt, breiig) |\n| Kein Appetit | Lieblingsspeisen, 5-6 kleine Portionen, ansprechendes Anrichten |\n| Einsamkeit beim Essen | Esskreis/Tischgemeinschaft, Angehörige zur Essenszeit einladen |\n| Bewegungseinschränkung | Hilfsmittel (Spezialbesteck, hoher Teller), beim Essen anreichen |\n| Demenz | Fingerfood, einfache Kost, feste Essenszeiten, ruhige Umgebung |\n| Kultur/Religion missachtet | Kost anpassen (halal, koscher, vegetarisch) |\n| Medikamentennebenwirkung | mit Arzt sprechen (Anti-Übelkeit, Medikamenten-Review) |\n| Mundtrockenheit/Soor | Mundpflege intensivieren, Mundspülungen |\n\n**Ergänzende Maßnahmen bei bestätigter Mangelernährung:**\n- **Trinknahrung (Supplemente):** ca. 300 kcal / 10 g Eiweiß pro Portion, zwischen Mahlzeiten\n- **Anreichern:** Sahne, Butter, Öl, Maltodextrin in die Speisen\n- **Eiweißreich:** 1,0-1,5 g Eiweiß/kg KG/Tag\n- **Tägliches Wiegen** und Ernährungsprotokoll\n\n**Immer dokumentieren und nach 1-2 Wochen evaluieren.**",
          glossarBegriffe: ["Trinknahrung", "Dysphagie", "PEMU"],
        },
        contentB1: {
          title: "Pflegemaßnahmen aus PEMU ableiten",
          body: "Maßnahmen kommen aus den **Gründen im PEMU**. Für jeden Grund gibt es eine Lösung.\n\n**Typische Gründe → was tun:**\n\n| Grund | Was tun? |\n|-------|-----------|\n| Prothese drückt | Zahnarzt, weiches Essen als Übergang |\n| Schluckstörung | Logopädie, Essen andicken |\n| Kein Appetit | Lieblingsessen, 5-6 kleine Portionen, schön anrichten |\n| Isst allein | Esskreis, Angehörige einladen |\n| Kann nicht selbst essen | Hilfsmittel (Besteck), beim Essen helfen |\n| Demenz | Fingerfood, feste Zeiten, ruhige Umgebung |\n| Kultur/Religion | Essen anpassen (halal, koscher) |\n| Medikamenten-Nebenwirkung | Arzt fragen |\n| Trockener Mund/Soor | Mundpflege, Mundspülung |\n\n**Bei bestätigter Mangelernährung zusätzlich:**\n- **Trinknahrung** (300 kcal / 10 g Eiweiß pro Flasche, zwischen Mahlzeiten)\n- **Essen anreichern** (Sahne, Butter, Öl)\n- **Mehr Eiweiß** (1,0-1,5 g pro kg pro Tag)\n- **Jeden Tag wiegen** und Essprotokoll führen\n\n**Nach 1-2 Wochen evaluieren:** Wirkt es? Ziel erreicht?",
          glossarBegriffe: ["Trinknahrung", "Dysphagie", "PEMU"],
        },
      },
    },
    glossarBegriffe: ["Trinknahrung", "Dysphagie", "PEMU"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: dokumentation-ernaehrung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsassessment-dokumentation",
    themaId: "ernaehrungsassessment",
    titel: "Ernährungs-Pflegedokumentation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast heute mit Frau M. alles durchgegangen: Screening, Assessment, Maßnahmenplan. Was schreibst du in die Dokumentation, damit die Kollegen morgen weitermachen können?",
      antwort:
        "Dokumentiert werden: Screening-Score + Datum, Assessment-Ergebnis (PEMU-Ursachen), BMI/Gewicht/Gewichtsverlauf, Trinkplan/Bilanz, Maßnahmen mit Verantwortlichkeit, Evaluation-Termin. Alles sachlich, nachvollziehbar, wertfrei. 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.' (DNQP Ernährungsmanagement 2017)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Dokumentiert werden: Screening-Score + Datum, Assessment-Ergebnis (PEMU-Ursachen), BMI/Gewicht/Gewichtsverlauf, Trinkplan/Bilanz, Maßnahmen mit Verantwortlichkeit, Evaluation-Termin. Alles sachlich, nachvollziehbar, wertfrei.",
      textB1:
        "Du dokumentierst: Screening-Score + Datum, Assessment (Gründe aus PEMU), Gewicht/BMI/Gewichtsverlauf, Trinkplan und Bilanz, Maßnahmen und wer macht was, nächster Prüftermin. Sachlich und nachvollziehbar schreiben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-16",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Ernährungsmanagement (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehr-dokumentation",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Ernährungs-Pflegedokumentation",
          body: "Dokumentation ist **Pflicht und Nachweis** des DNQP-Expertenstandards (DNQP Ernährungsmanagement 2017). 'Was nicht dokumentiert ist, gilt als nicht durchgeführt' — haftungsrelevant.\n\n**Mindestinhalte:**\n\n1. **Screening:** Instrument (NRS-2002 oder MNA-Short), Datum, Score, Ergebnis.\n   - Beispiel: 'NRS-2002 am 15.04.2026: 4 Punkte → ernährungsmedizinisches Risiko'\n\n2. **Assessment:** Bei positivem Screening PEMU-Ergebnis.\n   - Beispiel: 'PEMU: Ursachen = schlecht sitzende Prothese, isst allein, Appetitverlust seit OP'\n\n3. **Objektive Daten:** Aktuelles Gewicht, Größe, BMI, Gewichtsverlauf der letzten 3-6 Monate.\n   - Beispiel: 'Gewicht 52 kg bei 1,65 m → BMI 19,1. Verlust 4 kg in 3 Monaten = 7,1%.'\n\n4. **Flüssigkeitsbilanz (wenn angeordnet):** Ein-/Ausfuhr pro Schicht + Bilanzsumme.\n\n5. **Pflegediagnose:** z.B. nach NANDA-I 'Mangelernährung, Risiko für'.\n\n6. **Maßnahmen + Verantwortlichkeit + Zeitplan:** Wer macht was wann?\n\n7. **Evaluation:** Termin (nach 1-2 Wochen), Kriterien (Gewicht, Essmenge, Präalbumin).\n\n**Formale Regeln:**\n- **Sachlich und wertfrei** ('isst wenig' — nicht 'will nicht essen')\n- **Chronologisch** mit Datum/Uhrzeit/Handzeichen\n- **Veränderungen sofort** dokumentieren (nicht am Schichtende nachholen)",
          glossarBegriffe: ["Pflegediagnose", "DNQP"],
        },
        contentB1: {
          title: "Ernährungs-Pflegedokumentation",
          body: "Dokumentation ist **Pflicht** (DNQP). 'Was nicht aufgeschrieben ist, zählt nicht.'\n\n**Das musst du schreiben:**\n\n1. **Screening:** Welches Werkzeug (NRS-2002 oder MNA), Datum, Punkte, Ergebnis.\n   - Beispiel: 'NRS-2002 am 15.04.2026: 4 Punkte → Risiko für Mangelernährung'\n\n2. **Assessment:** Bei Risiko die PEMU-Gründe.\n   - Beispiel: 'PEMU: Gründe sind drückende Prothese, isst allein, seit OP kein Appetit'\n\n3. **Zahlen:** Gewicht, Größe, BMI, Gewicht vor 3-6 Monaten (wie viel verloren?).\n   - Beispiel: 'Gewicht 52 kg bei 1,65 m → BMI 19,1. In 3 Monaten 4 kg weg = 7,1%.'\n\n4. **Bilanz (wenn nötig):** Einfuhr und Ausfuhr pro Schicht.\n\n5. **Pflegediagnose:** Zum Beispiel 'Risiko für Mangelernährung' (NANDA-I).\n\n6. **Maßnahmen:** Was wird gemacht, von wem, wann?\n\n7. **Wiedervorlage:** In 1-2 Wochen — was wird dann geprüft?\n\n**Regeln:**\n- **Sachlich** schreiben ('isst wenig' — nicht 'will nicht essen')\n- **Datum, Uhrzeit, Handzeichen** bei jedem Eintrag\n- **Sofort dokumentieren**, nicht am Schichtende",
          glossarBegriffe: ["Pflegediagnose", "DNQP"],
        },
      },
    },
    glossarBegriffe: ["Pflegediagnose", "DNQP"],
    karteikarten: [],
  },
];

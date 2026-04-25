// CE-02 Thema Ernährungsassessment — Karteikarten
// Quelle: content/ce-02/themen/ernaehrungsassessment/karteikarten-plan.md (16 Karteikarten, 1 pro Baustein)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_ERNAEHRUNGSASSESSMENT_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-ernaehr-kk-01",
    vorderseite: "Wie lautet die BMI-Formel und was sind die Einschränkungen bei älteren Menschen?",
    rueckseiteC1:
      "BMI = Körpergewicht (kg) ÷ Körpergröße² (m²). Bei über 65-Jährigen gilt BMI 22-27 als günstigster Bereich — ein BMI <22 ist dort bereits Warnsignal. (WHO)",
    rueckseiteB1:
      "Formel: Gewicht in kg geteilt durch Größe mal Größe (in Metern). Bei alten Menschen ab 65 Jahren: unter 22 ist schon ein Warnsignal.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "WHO (1995); DGEM/ESPEN (2020)",
  },
  {
    id: "ce02-ernaehr-kk-02",
    vorderseite: "Nenne die 6 WHO-BMI-Kategorien mit Grenzwerten.",
    rueckseiteC1:
      "<18,5 Untergewicht | 18,5-24,9 Normalgewicht | 25-29,9 Übergewicht | 30-34,9 Adipositas Grad I | 35-39,9 Adipositas Grad II | ≥40 Adipositas Grad III. (WHO)",
    rueckseiteB1:
      "Unter 18,5 = zu leicht. 18,5-24,9 = normal. 25-29,9 = zu schwer. Ab 30 = sehr zu schwer (3 Stufen).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "WHO (1995)",
  },
  {
    id: "ce02-ernaehr-kk-03",
    vorderseite: "Was ist der Unterschied zwischen Ernährungs-Screening und -Assessment?",
    rueckseiteC1:
      "Screening: 2-5 Min, alle Patienten, Risiko ja/nein (NRS-2002, MNA-Short). Assessment: 15-30 Min, nur bei Risiko, Ursachenanalyse (PEMU, MNA-Long). (DNQP Ernährungsmanagement, 2017)",
    rueckseiteB1:
      "Screening: schnell (2-5 Min), alle Patienten, fragt nur: Risiko ja oder nein? Assessment: langsamer (15-30 Min), nur bei Risiko, fragt: Warum? Was tun?",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DNQP Ernährungsmanagement (2017)",
  },
  {
    id: "ce02-ernaehr-kk-04",
    vorderseite: "Wann ist das MNA das richtige Screening-Werkzeug und wie wird es ausgewertet?",
    rueckseiteC1:
      "Bei Menschen ab 65 Jahren. MNA-Short (6 Fragen, 0-14 P.): 12-14 = normal, 8-11 = Risiko (→ MNA-Long), 0-7 = Mangelernährung. Kein BMI messbar? → Wadenumfang <31 cm. (Guigoz, MNA 1994)",
    rueckseiteB1:
      "Für Menschen ab 65 Jahren. 6 Fragen, 0-14 Punkte: 12-14 = gut, 8-11 = Risiko (dann 12 weitere Fragen), 0-7 = Mangelernährung.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Guigoz Y. (1994): MNA",
  },
  {
    id: "ce02-ernaehr-kk-05",
    vorderseite: "Was ist der Cut-off beim NRS-2002 und was folgt daraus?",
    rueckseiteC1:
      "≥3 Punkte = ernährungsmedizinisches Risiko → Ernährungstherapie-Plan. <3 Punkte: wöchentlich wiederholen. Aufbau: Ernährungs-Score + Krankheits-Score + Altersbonus ≥70 (+1 Punkt). (Kondrup, NRS-2002 2003)",
    rueckseiteB1:
      "Ab 3 Punkten: Ernährungstherapie einleiten. Unter 3 Punkte: Test jede Woche wiederholen. Punkte kommen aus: Ernährung, Krankheit, Alter (ab 70 = 1 Punkt extra).",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Kondrup J. et al. (2003): NRS-2002, ESPEN guidelines",
  },
  {
    id: "ce02-ernaehr-kk-06",
    vorderseite: "Welche 5 Ursachenbereiche erfasst das PEMU?",
    rueckseiteC1:
      "1) Essen/Trinken-Signale (Schmerz, Übelkeit, Appetit), 2) Mundgesundheit (Prothese, Soor, Dysphagie), 3) Fähigkeiten (Motorik, Kognition), 4) Umgebung/Angebot (Kost, Kultur, Tischgemeinschaft), 5) weitere Gründe (Medikamente, Depression, Einsamkeit). (DNQP Ernährungsmanagement, 2017; Bartholomeyczik 2008)",
    rueckseiteB1:
      "1) Wie fühlt sich das Essen an (Schmerzen, Appetit)? 2) Mund und Zähne. 3) Kann der Patient selbst essen? 4) Umgebung und Angebot. 5) Andere Gründe (Medikamente, Einsamkeit, Depression).",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Bartholomeyczik S. et al. (2008): PEMU; DNQP (2017)",
  },
  {
    id: "ce02-ernaehr-kk-07",
    vorderseite: "Welche 4 Prozess-Schritte verlangt der DNQP-Expertenstandard Ernährungsmanagement?",
    rueckseiteC1:
      "1) Screening binnen 24h nach Aufnahme. 2) Bei Risiko: PEMU-Assessment. 3) Individuelle Maßnahmenplanung mit Patient. 4) Umsetzung + Evaluation + Dokumentation. Rechtlich verbindlich (§ 113a SGB XI). (DNQP Ernährungsmanagement, 2017)",
    rueckseiteB1:
      "1) Screening in den ersten 24 Stunden. 2) Bei Risiko: genauer untersuchen (PEMU). 3) Maßnahmen planen. 4) Umsetzen, prüfen, dokumentieren. Das ist Pflicht per Gesetz.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "DNQP Ernährungsmanagement (2017); § 113a SGB XI",
  },
  {
    id: "ce02-ernaehr-kk-08",
    vorderseite: "Nenne die 3 Formen der Mangelernährung mit je einer Ursache und Reversibilität.",
    rueckseiteC1:
      "1) PEM — zu geringe Nahrungszufuhr, reversibel. 2) Kachexie — chronisch-entzündliche Erkrankung (Krebs, Herzinsuffizienz), nur reversibel durch Behandlung der Grunderkrankung. 3) Sarkopenie — altersbedingter Muskelabbau, teilweise reversibel durch Krafttraining + Eiweiß. (DGEM/ESPEN 2020)",
    rueckseiteB1:
      "1) PEM: zu wenig gegessen, heilbar durch Essen. 2) Kachexie: schwere Krankheit (Krebs, Herz), heilbar nur wenn Krankheit behandelt wird. 3) Sarkopenie: Muskel-Schwund durch Alter, teilweise heilbar durch Training und Eiweiß.",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DGEM/ESPEN (2020); Cederholm T. et al. (2019): GLIM-Kriterien",
  },
  {
    id: "ce02-ernaehr-kk-09",
    vorderseite: "Ab wann ist ungewollter Gewichtsverlust klinisch relevant — und wie berechnest du ihn?",
    rueckseiteC1:
      ">5% in 3 Monaten = auffällig. >10% in 6 Monaten = schwer. >5% in 1 Monat = Alarmzeichen. Rechnung: (Altgewicht − aktuelles Gewicht) ÷ Altgewicht × 100. Achtung: Ödeme können den Verlust verschleiern. (DGEM/ESPEN 2020)",
    rueckseiteB1:
      "Mehr als 5% in 3 Monaten = auffällig. Mehr als 10% in 6 Monaten = schwer. Mehr als 5% in 1 Monat = Alarm. Rechnung: altes Gewicht minus neues Gewicht, geteilt durch altes Gewicht, mal 100.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DGEM/ESPEN (2020)",
  },
  {
    id: "ce02-ernaehr-kk-10",
    vorderseite: "Welcher Wadenumfang gilt als Warnsignal für Mangelernährung — und warum?",
    rueckseiteC1:
      "Wadenumfang <31 cm ist ein Warnsignal (Bestandteil des MNA). Steht für Muskelmasse-Verlust und erhöhtes Sturzrisiko. Gilt unabhängig von Alter und Geschlecht — nie als 'nur Alter' abtun. (Guigoz, MNA 1994)",
    rueckseiteB1:
      "Unter 31 cm ist ein Warnsignal. Das zeigt, dass Muskeln fehlen — egal wie alt der Patient ist. Nicht ignorieren!",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Guigoz Y. (1994): MNA",
  },
  {
    id: "ce02-ernaehr-kk-11",
    vorderseite: "Welcher Laborwert eignet sich am besten zum kurzfristigen Therapie-Monitoring bei Mangelernährung — und warum?",
    rueckseiteC1:
      "Präalbumin (Halbwertszeit 2-3 Tage). Albumin reagiert erst nach ~20 Tagen und ist für kurzfristiges Monitoring ungeeignet. Wichtig: Albumin immer zusammen mit CRP interpretieren — Entzündung senkt Albumin unabhängig vom Ernährungsstatus. (DGEM/ESPEN 2020)",
    rueckseiteB1:
      "Präalbumin — weil es sich schon nach 2-3 Tagen ändert. Albumin ist zu langsam (20 Tage). Albumin-Wert immer zusammen mit CRP anschauen.",
    tag: "krankheitslehre",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGEM/ESPEN (2020)",
  },
  {
    id: "ce02-ernaehr-kk-12",
    vorderseite: "Welche 6 Kategorien gehören zur Ausfuhr bei der Flüssigkeitsbilanz?",
    rueckseiteC1:
      "1) Urin, 2) Stuhl (besonders bei Durchfall ~200 ml/Gang), 3) Erbrochenes, 4) Drainagen, 5) Perspiratio insensibilis (700-900 ml/d), 6) Schwitzen/Fieber (+500 ml pro Grad über 37°C). Dazu täglich wiegen: 1 kg ≈ 1 Liter kurzfristig. (DNQP Ernährungsmanagement, 2017)",
    rueckseiteB1:
      "1) Urin, 2) Stuhl (bei Durchfall mehr), 3) Erbrochenes, 4) Drainagen, 5) Schweiß und Atem (700-900 ml täglich), 6) Fieber (pro Grad über 37°C noch 500 ml extra).",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP Ernährungsmanagement (2017)",
  },
  {
    id: "ce02-ernaehr-kk-13",
    vorderseite: "Warum ist plötzliche Verwirrtheit bei älteren Menschen ein Alarmzeichen für Exsikkose?",
    rueckseiteC1:
      "Bei Älteren ist das Durstempfinden deutlich reduziert — sie äußern kein Durstgefühl. Das Gehirn reagiert empfindlich auf Flüssigkeitsmangel, sodass Delir (akute Verwirrtheit) oft das erste Exsikkosezeichen ist. Demenz entwickelt sich dagegen schleichend über Wochen/Monate.",
    rueckseiteB1:
      "Alte Menschen spüren keinen Durst. Wenn das Gehirn zu wenig Wasser bekommt, wird der Mensch verwirrt — und das passiert schnell. Demenz kommt langsam — Verwirrtheit von heute ist oft Austrocknung!",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP Ernährungsmanagement (2017); DGEM/ESPEN (2020)",
  },
  {
    id: "ce02-ernaehr-kk-14",
    vorderseite: "Wie viel Flüssigkeit pro kg Körpergewicht braucht ein Erwachsener täglich — und wie viel mehr bei Fieber?",
    rueckseiteC1:
      "30-35 ml/kg Körpergewicht/Tag (davon ca. 1,5 L als Getränke). Bei Fieber: +500 ml pro Grad über 37°C. Bei Durchfall: +500-1000 ml. Herzinsuffizienz = ärztliche Restriktion (oft 1000-1500 ml/d). (DGE; DGEM/ESPEN 2020)",
    rueckseiteB1:
      "30-35 ml pro Kilogramm Körpergewicht täglich. Bei Fieber: nochmal 500 ml extra pro Grad über 37°C. Bei Herzerkrankung: weniger — Arzt fragt.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGE; DGEM/ESPEN (2020)",
  },
  {
    id: "ce02-ernaehr-kk-15",
    vorderseite: "Wie leitest du Pflegemaßnahmen bei Mangelernährung aus dem PEMU ab? Nenne 3 Ursache-Maßnahmen-Paare.",
    rueckseiteC1:
      "Jede PEMU-Ursache bekommt eine passende Maßnahme: Prothese drückt → Zahnarzt + weiche Kost. Einsam → Esskreis/Tischgemeinschaft. Kein Appetit → 5-6 kleine Portionen + Lieblingsspeisen. Bei Mangelernährung ergänzend: Anreichern (Sahne, Öl), Trinknahrung, 1,0-1,5 g Eiweiß/kg/Tag, täglich wiegen, Evaluation nach 1-2 Wochen. (DNQP Ernährungsmanagement, 2017)",
    rueckseiteB1:
      "PEMU zeigt die Ursache → Maßnahme folgt: Prothese drückt → Zahnarzt, weiches Essen. Einsamkeit → gemeinsam essen. Kein Appetit → kleine Portionen, Lieblingsessen. Auch: kalorienreiches Essen, Trinknahrung, viel Eiweiß.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP Ernährungsmanagement (2017)",
  },
  {
    id: "ce02-ernaehr-kk-16",
    vorderseite: "Welche 7 Inhalte muss die Ernährungs-Pflegedokumentation enthalten?",
    rueckseiteC1:
      "1) Screening-Instrument+Score+Datum, 2) PEMU-Assessment (Ursachen), 3) Gewicht/BMI/Gewichtsverlauf, 4) Flüssigkeitsbilanz (wenn angeordnet), 5) Pflegediagnose (NANDA-I), 6) Maßnahmen + Verantwortlichkeit + Zeitplan, 7) Evaluations-Termin. Sachlich, wertfrei, zeitnah, mit Handzeichen. (DNQP Ernährungsmanagement, 2017)",
    rueckseiteB1:
      "1) Screening (Werkzeug, Punkte, Datum). 2) PEMU-Ursachen. 3) Gewicht und BMI. 4) Flüssigkeitsbilanz. 5) Pflegediagnose. 6) Maßnahmen mit Namen und Zeitplan. 7) Wann wird geprüft (Evaluation).",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP Ernährungsmanagement (2017)",
  },
];

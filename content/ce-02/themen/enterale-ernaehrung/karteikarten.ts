// CE-02 Thema Enterale & parenterale Ernährung — Karteikarten
// Quelle: content/ce-02/themen/enterale-ernaehrung/karteikarten-plan.md (14 Karten, 1 pro Baustein)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_ENTERALE_ERNAEHRUNG_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-enterale-kk-01",
    vorderseite: "Was ist der Unterschied zwischen enteraler und parenteraler Ernährung? Welches ist erste Wahl?",
    rueckseiteC1:
      "Enteral = über Magen-Darm-Trakt (normal, Sonde, PEG). Parenteral = direkt in die Vene. DGEM-Regel: 'If the gut works, use it' — enteral hat Vorrang, weil der Darm aktiv bleibt, das GALT trainiert wird und das Infektionsrisiko sinkt.",
    rueckseiteB1:
      "Enteral = durch Magen und Darm. Parenteral = direkt ins Blut. Regel: Wenn der Darm arbeitet, nehmen wir ihn. Enteral ist fast immer besser.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-02",
    vorderseite: "Welche 4 Sondenformen gibt es? Wann wählst du welche?",
    rueckseiteC1:
      "NG-Sonde (Nase→Magen, <4 Wo), NJ-Sonde (Nase→Dünndarm, bei Aspiration), PEG (Bauch→Magen, >4 Wo), PEJ (Bauch→Dünndarm, >4 Wo + Aspiration). Faustregel 4 Wochen: darunter nasal, darüber perkutan.",
    rueckseiteB1:
      "NG-Sonde (Nase, Magen, kurz), NJ-Sonde (Nase, Dünndarm, bei Verschlucken), PEG (Bauch, Magen, lang), PEJ (Bauch, Dünndarm, lang + Verschlucken). Unter 4 Wochen = Nase, über 4 Wochen = Bauch.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-03",
    vorderseite: "Wie prüfst du die korrekte Lage einer NG-Sonde? Welche Methode ist Standard, welche veraltet?",
    rueckseiteC1:
      "Goldstandard: pH-Test aspirierter Flüssigkeit (pH <5,5 = Magen). Veraltet: Luftinsufflation mit Stethoskop (unsicher — Geräusche auch bei Fehllage). Bei PPI-Therapie oder Unsicherheit: Röntgen. Vor jeder Gabe + 1× pro Schicht prüfen.",
    rueckseiteB1:
      "pH-Test ist der Standard: Flüssigkeit aus der Sonde ziehen, auf Teststreifen — pH unter 5,5 ist gut. Luft blasen und Stethoskop ist nicht sicher. Bei Zweifel: Röntgen. Vor jeder Gabe prüfen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-04",
    vorderseite: "Welche 3 Applikationsformen gibt es? Welche Regel gilt bei Dünndarm-Sonden?",
    rueckseiteC1:
      "Bolus (Spritze, 200-400 ml, nur Magen), Schwerkraft (1-3 h), Pumpe (20-150 ml/h). Dünndarm-Sonden (NJ, PEJ): immer Pumpe — sonst Dumping-Syndrom (Durchfall, Kreislaufprobleme). Immer spülen mit 20-50 ml Wasser.",
    rueckseiteB1:
      "Bolus (große Spritze, nur im Magen), Schwerkraft (langsam, 1-3 h), Pumpe (konstant, immer bei Dünndarm-Sonden). Dünndarm = immer Pumpe. Sonst kommt Durchfall. Vor und nach Gabe spülen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-05",
    vorderseite: "Nenne 3 Energiestufen und 3 Spezialformen von Sondenkost.",
    rueckseiteC1:
      "Energie: normokalorisch (1 kcal/ml), hochkalorisch (1,5-2 kcal/ml, bei Untergewicht/Flüssigkeitsrestriktion), niederkalorisch (<1). Spezial: Diabetes (langsame KH), Niere (eiweißarm, elektrolytadaptiert), Lunge (fettreich → weniger CO₂). Arzt ordnet an.",
    rueckseiteB1:
      "Normal (1 kcal/ml), hochkalorisch (1,5-2 kcal/ml), niederkalorisch. Spezial: Diabetes (langsame Kohlenhydrate), Niere (wenig Eiweiß), Lunge (mehr Fett). Arzt entscheidet.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-06",
    vorderseite: "Was sind die 4 Schritte der täglichen PEG-Pflege? Warum ist Mobilisieren so wichtig?",
    rueckseiteC1:
      "1) Mobilisieren (1-2 cm rein-drehen-raus) gegen Buried-Bumper-Syndrom. 2) Reinigung mit Wasser/NaCl 0,9%, trocken tupfen. 3) Halteplatte spannungsfrei (1 Finger Platz). 4) Einstichstelle inspizieren. Erste 7-10 Tage: steril verbinden, noch nicht drehen.",
    rueckseiteB1:
      "1) Schlauch drehen (rein-drehen-raus, damit die innere Platte nicht festwächst). 2) Mit Wasser abwischen. 3) Äußere Platte locker (ein Finger darunter). 4) Haut anschauen. Erste 7-10 Tage: noch nicht drehen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-07",
    vorderseite: "Was ist Aspiration? Nenne 3 Prophylaxe-Maßnahmen und die Sofortreaktion.",
    rueckseiteC1:
      "Aspiration = Eindringen von Nahrung/Mageninhalt in die Atemwege → Aspirationspneumonie, Atemnot. Prophylaxe: Oberkörper 30-45° während + 30-60 Min nach Gabe, Pumpe statt Bolus bei Risiko, Magenrest messen. Sofort: Gabe stoppen, aufrecht, Mund absaugen, Arzt.",
    rueckseiteB1:
      "Aspiration = Essen kommt in die Lunge, lebensgefährlich. Vorbeugen: Oberkörper 30-45°, Pumpe statt Bolus, Magenrest prüfen. Wenn es passiert: sofort stoppen, aufrecht, absaugen, Arzt rufen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-08",
    vorderseite: "Nenne 5 häufige Ursachen für Durchfall bei Sondenkost und die erste Maßnahme.",
    rueckseiteC1:
      "Ursachen: zu schnelle Applikationsrate, Hyperosmolarität, Kontamination (>4-6 h gehängt), Antibiotika (C. difficile!), Sorbit in flüssigen Medikamenten. Weitere: Laktose-Intoleranz, Pankreasinsuffizienz. Erste Maßnahme: Rate reduzieren, Ursache suchen, Arzt informieren — nicht komplett stoppen.",
    rueckseiteB1:
      "Zu schnell, zu konzentriert, schmutzige Nahrung, Antibiotika (C. difficile!), Sorbit in Medikamenten. Erste Maßnahme: langsamer geben, Ursache suchen, Arzt informieren — nicht ganz abstellen.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-09",
    vorderseite: "Wie beugst du Sondenverstopfung vor? Was tust du, wenn sie trotzdem verstopft?",
    rueckseiteC1:
      "Prophylaxe: 20-50 ml Wasser vor/nach jeder Gabe + Medikation, Medikamente einzeln, bei Pumpe alle 4-6 h spülen. Bei Verstopfung: warmes Wasser, sanft drücken/ziehen im Wechsel. Kein Cola, keine Gewalt (Leckage-Gefahr). Sonst: Sonde wechseln lassen.",
    rueckseiteB1:
      "Immer spülen (20-50 ml Wasser vor und nach der Gabe). Bei Verstopfung: warmes Wasser, sanft drücken. Kein Cola, keine Gewalt. Wenn es nicht hilft: Sonde wechseln lassen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-10",
    vorderseite: "Was ist das Refeeding-Syndrom? Wer ist gefährdet? Wie beugst du vor?",
    rueckseiteC1:
      "Lebensbedrohliche Elektrolyt-Verschiebung (P, K, Mg rauschen in Zellen) durch Insulin bei schneller Wiederernährung nach langer Mangelernährung. Risiko: Herzstillstand. Gefährdet: Anorexie, Tumor, Alkoholiker, BMI<18,5, >5-10 d ohne adäquate Nahrung. Prophylaxe: 10-20 kcal/kg/d Start, Steigerung 5-7 d, Thiamin + Elektrolyte, täglich Labor.",
    rueckseiteB1:
      "Gefährliche Elektrolytstörung, wenn man nach langem Hungern zu schnell wieder Nahrung gibt. Risiko: Herzstillstand. Gefährdet: Magersucht, Tumor, Alkohol, lang nicht gegessen. Lösung: langsam anfangen, Vitamin B1 und Elektrolyte vorher geben, täglich Blut kontrollieren.",
    tag: "krankheitslehre",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020); ESPEN Guidelines",
  },
  {
    id: "ce02-enterale-kk-11",
    vorderseite: "Vergleiche periphervenöse und zentralvenöse parenterale Ernährung: Wo? Wie lange? Wie konzentriert?",
    rueckseiteC1:
      "PPE: Armvene, isoosmolar (≤800 mosmol/l), max. 7-10 Tage, nur Überbrückung. ZPE: ZVK/Port (subclavia, jugularis), hyperosmolar möglich, Langzeit. ZPE höheres Risiko (Katheter-Sepsis, Thrombose, Pneumothorax), separates Lumen, strenge Asepsis.",
    rueckseiteB1:
      "Armvene: verdünnte Lösung, kurze Zeit (bis 10 Tage). Katheter zum Herz (ZVK, Port): konzentrierte Lösung, lange Zeit. Katheter hat mehr Infektionsrisiko — sehr sauber arbeiten.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020)",
  },
  {
    id: "ce02-enterale-kk-12",
    vorderseite: "Nenne 4 Hauptindikationen für eine PEG. Welche Indikation ist umstritten?",
    rueckseiteC1:
      "1) Neurogene Dysphagie (Schlaganfall, ALS, Parkinson spät). 2) HNO-/Ösophagus-Tumoren (vor/während Bestrahlung). 3) Koma/Wachkoma. 4) Schwere Mukositis bei Chemo. Umstritten: fortgeschrittene Demenz (DGN/DGG/DGP 2014: keine Indikation im Endstadium). Voraussetzung immer: >4 Wochen Dauer.",
    rueckseiteB1:
      "1) Schlaganfall mit Schluckstörung. 2) Tumor im Hals/Mund (vor Bestrahlung). 3) Koma. 4) Entzündung im Mund durch Chemo. Umstritten: schwere Demenz am Lebensende (hilft meistens nicht).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020); DGN/DGG/DGP 2014",
  },
  {
    id: "ce02-enterale-kk-13",
    vorderseite: "Warum ist eine PEG bei fortgeschrittener Demenz ethisch umstritten? Welche Alternative gibt es?",
    rueckseiteC1:
      "Studien (DGN/DGG/DGP 2014, Cochrane Sampson 2009): Keine Lebensverlängerung, keine weniger Aspirationspneumonien, Lebensqualität sinkt (Fixierung). Nahrungsverweigerung im Endstadium = Teil des Sterbens. Entscheidend: Patientenverfügung (§ 1901a BGB) oder mutmaßlicher Wille. Alternative: Comfort Feeding Only (kleine Mengen, Mundpflege, Nähe). Beenden ≠ aktive Sterbehilfe (BÄK 2011).",
    rueckseiteB1:
      "Studien zeigen: Kein längeres Leben, keine weniger Lungenentzündungen — aber mehr Leiden. Wichtig: Was hat der Patient früher gewollt (Patientenverfügung)? Alternative: kleine Mengen Lieblingsspeise + Mundpflege (Comfort Feeding Only). Nicht legen ist kein Töten.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "DGN/DGG/DGP 2014; Cochrane Sampson 2009; § 1901a BGB; BÄK 2011",
  },
  {
    id: "ce02-enterale-kk-14",
    vorderseite: "Nenne 4 wichtige Hygieneregeln bei enteraler Ernährung.",
    rueckseiteC1:
      "1) Hände desinfizieren + aseptisch arbeiten (Konnektor nicht berühren). 2) Raumtemperatur: 30 Min vorher aus Kühlschrank — NICHT erwärmen (Mikrowelle verboten). 3) Hängedauer max. 4-6 h (Pumpe mit sterilem Beutel max. 8 h). 4) Überleitungssystem alle 24 h wechseln. Immer spülen: 20-50 ml Wasser vor + nach Gabe.",
    rueckseiteB1:
      "1) Hände desinfizieren, sauber anschließen. 2) Nahrung auf Raumtemperatur (30 Min vorher raus, nicht aufwärmen). 3) Maximal 4-6 Stunden hängen. 4) Schlauch jeden Tag (24 h) wechseln. Immer spülen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGEM S3-Leitlinie Klinische Ernährung (2013/2020); ESPEN Guidelines",
  },
];

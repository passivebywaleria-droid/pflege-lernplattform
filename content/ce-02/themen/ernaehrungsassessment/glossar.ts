// CE-02 Thema Ernährungsassessment — Glossar
// Quelle: content/ce-02/themen/ernaehrungsassessment/glossar-plan.md (20 Einträge)
// Pipeline v9 — 2026-04-23

import type { GlossarEntry } from "../../../_types";

export const CE02_THEMA_ERNAEHRUNGSASSESSMENT_GLOSSAR: GlossarEntry[] = [
  {
    begriff: "BMI (Body-Mass-Index)",
    erklaerung:
      "Screeningmaß für Über- und Untergewicht: BMI = Körpergewicht (kg) ÷ Körpergröße² (m²). Begrenzt aussagekräftig bei Muskelsportlern, Ödemen, Amputationen und Kindern. Bei über 65-Jährigen gilt ein BMI von 22-27 kg/m² als günstigster Bereich. (WHO 1995; DGEM/ESPEN 2020)",
    erklaerungB1:
      "Eine Zahl, die zeigt ob das Gewicht zur Größe passt. Formel: Gewicht in kg geteilt durch Größe × Größe (in Metern). Nicht bei allen Menschen gleich aussagekräftig — zum Beispiel bei Sportlern oder sehr alten Menschen.",
    uebersetzungTr: "Vücut kitle indeksi (VKİ)",
    uebersetzungAr: "مؤشر كتلة الجسم",
  },
  {
    begriff: "Screening",
    erklaerung:
      "Kurzer Risiko-Check (2-5 Min) für alle Patienten bei Aufnahme. Ziel: Mangelernährungsrisiko erkennen — Antwort ist ja oder nein. Werkzeuge: NRS-2002 (Klinik), MNA-Short Form (≥65 Jahre), MUST (ambulant). Screening ist Pflicht gemäß DNQP (2017) für alle, unabhängig vom Aussehen.",
    erklaerungB1:
      "Ein schneller Test (2-5 Minuten) für alle Patienten. Er fragt: Gibt es ein Risiko? Antwort: ja oder nein. Er kommt vor dem Assessment.",
    uebersetzungTr: "Tarama",
    uebersetzungAr: "الفحص الأولي",
  },
  {
    begriff: "Assessment (Ernährungs-)",
    erklaerung:
      "Tiefe Ursachenanalyse (15-30 Min) des Ernährungsstatus, nur bei positivem Screening. Ziel: Ursachen und Schweregrad klären, individuelle Pflegediagnose ableiten. Werkzeuge: PEMU, MNA-Long Form, Anamnese, Laborwerte. (DNQP Ernährungsmanagement 2017; Bartholomeyczik PEMU 2008)",
    erklaerungB1:
      "Eine genaue Untersuchung (15-30 Minuten), die nur bei Risiko-Patienten gemacht wird. Sie fragt: Warum isst der Patient wenig? Wie schlimm ist es? Was tun?",
    uebersetzungTr: "Değerlendirme",
    uebersetzungAr: "التقييم التغذوي",
  },
  {
    begriff: "MNA (Mini Nutritional Assessment)",
    erklaerung:
      "International validiertes Screening- und Assessment-Instrument für Menschen ab 65 Jahren (Guigoz, MNA 1994). MNA-Short Form: 6 Fragen, 0-14 Punkte. Auswertung: 12-14 Punkte = normal, 8-11 Punkte = Risiko (dann MNA-Long), 0-7 Punkte = Mangelernährung. Wenn BMI nicht messbar: Wadenumfang <31 cm als Alternative.",
    erklaerungB1:
      "Ein Test für alte Menschen ab 65 Jahren. Zuerst 6 kurze Fragen (MNA-Short), dann wenn nötig 12 weitere (MNA-Long). 12-14 Punkte = gut, 8-11 = Risiko, 0-7 = schon Mangelernährung.",
    uebersetzungTr: "Mini Beslenme Değerlendirmesi",
    uebersetzungAr: "تقييم التغذية المصغّر",
  },
  {
    begriff: "NRS-2002 (Nutritional Risk Screening)",
    erklaerung:
      "ESPEN-empfohlenes Screening für hospitalisierte Patienten (Kondrup, NRS-2002 2003). Zweistufig: 4 Initialfragen (Pre-Screening), dann Hauptscreening mit Ernährungs-Score + Krankheits-Score + Altersbonus (≥70 Jahre +1 Punkt). Cut-off: ≥3 Punkte = Handlungspflicht.",
    erklaerungB1:
      "Das Standard-Screening im Krankenhaus. Zuerst 4 kurze Fragen, dann ein langer Teil mit Punkten für Ernährung und Krankheit. Ab 3 Punkten: Ernährungstherapie einleiten.",
    uebersetzungTr: "Beslenme Riski Taraması",
    uebersetzungAr: "فحص خطر سوء التغذية",
  },
  {
    begriff: "PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen)",
    erklaerung:
      "Deutschsprachiges pflegerisches Assessment-Instrument des DNQP (Bartholomeyczik et al. 2008). Zwei Teile: (1) Ernährungszustand messen (Gewicht, BMI, Verlauf), (2) Ursachen in 5 Bereichen suchen: Essen/Trinken-Signale, Mundgesundheit, Fähigkeiten, Umgebung/Angebot, weitere Gründe.",
    erklaerungB1:
      "Ein Werkzeug der Pflege, das nach dem Screening eingesetzt wird. Teil 1: Messen. Teil 2: Warum isst der Patient wenig? In 5 Bereichen. Ergebnis: Der Grund wird klar, dann kann gezielt geholfen werden.",
    uebersetzungTr: "Beslenme Yetersizliğinin Hemşirelik Değerlendirmesi",
    uebersetzungAr: "تقييم سوء التغذية التمريضي",
  },
  {
    begriff: "Mangelernährung (Protein-Energie-Mangelernährung, PEM)",
    erklaerung:
      "Zu geringe Nahrungsaufnahme von Energie und Proteinen. Ursachen: Appetitverlust, soziale Isolation, Demenz, Schluckstörung. Merkmale: Gewichtsverlust, reduzierter BMI. Reversibel durch ausreichende Kalorien- und Eiweißzufuhr. (DGEM/ESPEN 2020; GLIM-Kriterien, Cederholm et al. 2019)",
    erklaerungB1:
      "Zu wenig gegessen — der Körper bekommt nicht genug Energie und Eiweiß. Kann besser werden, wenn der Patient wieder ausreichend isst. Typisch bei alleinlebenden alten Menschen, bei Demenz oder Depression.",
    uebersetzungTr: "Yetersiz beslenme (protein-enerji yetersizliği)",
    uebersetzungAr: "سوء التغذية (نقص البروتين والطاقة)",
  },
  {
    begriff: "Kachexie",
    erklaerung:
      "Krankheitsassoziierter Gewichtsverlust durch chronische Entzündungsprozesse (Krebs, Herzinsuffizienz, COPD, Niereninsuffizienz). Zytokin-vermittelter Muskel- und Fettabbau — auch trotz ausreichender Nahrungszufuhr. Nicht allein durch Essen reversibel — Grunderkrankung muss behandelt werden. (DGEM/ESPEN 2020)",
    erklaerungB1:
      "Gewichtsverlust bei einer schweren Krankheit (Krebs, Herz, COPD). Der Körper baut Muskeln ab — auch wenn der Patient ausreichend isst. Nur besserbar, wenn die Grundkrankheit behandelt wird.",
    uebersetzungTr: "Kaşeksi",
    uebersetzungAr: "الدنف (كاكيكسيا)",
  },
  {
    begriff: "Sarkopenie",
    erklaerung:
      "Altersbedingter Verlust an Muskelmasse, Muskelkraft und Muskelfunktion. Ab 50 Jahren ca. 1-2% Muskelverlust pro Jahr, ab 65 Jahren beschleunigt. Folgen: Sturzrisiko, Mobilitätsverlust, Pflegebedarf. Teilweise reversibel durch Krafttraining und Eiweißzufuhr (1,0-1,5 g/kg KG/Tag). (DGEM/ESPEN 2020)",
    erklaerungB1:
      "Muskel-Schwund durch das Alter — ab 50 Jahren verliert der Körper jedes Jahr ca. 1-2% Muskeln. Folgen: Stürze, Schwäche, Pflegebedarf. Kann durch Krafttraining und ausreichend Eiweiß verbessert werden.",
    uebersetzungTr: "Sarkopeni",
    uebersetzungAr: "ضمور العضلات (ساركوبينيا)",
  },
  {
    begriff: "Wadenumfang",
    erklaerung:
      "Messung des Umfangs der Wade am dicksten Punkt. Gilt als Indikator für Muskelmasse. Grenzwert <31 cm = Warnsignal für Mangelernährung und Sarkopenie (MNA-Bestandteil). Wird eingesetzt wenn BMI nicht messbar ist (Rollstuhl, Amputation, Kontraktur). (Guigoz, MNA 1994)",
    erklaerungB1:
      "Der Umfang der Wade, gemessen am dicksten Punkt. Unter 31 cm ist ein Warnsignal für Mangelernährung und Muskelschwund. Wird gemessen, wenn man den BMI nicht bestimmen kann (z.B. im Rollstuhl).",
    uebersetzungTr: "Baldır çevresi",
    uebersetzungAr: "محيط الساق",
  },
  {
    begriff: "Ungewollter Gewichtsverlust",
    erklaerung:
      "Gewichtsabnahme ohne gezielte Maßnahmen wie Diät. Klinisch relevante Grenzen: >5% in 3 Monaten = auffällig, >10% in 6 Monaten = schwer, >5% in 1 Monat = Alarmzeichen. Berechnung: (Altgewicht − aktuelles Gewicht) ÷ Altgewicht × 100. (DGEM/ESPEN 2020)",
    erklaerungB1:
      "Gewicht verlieren ohne es zu wollen (keine Diät). Wichtig: mehr als 5% in 3 Monaten, mehr als 10% in 6 Monaten. Rechnung: altes Gewicht minus neues Gewicht, geteilt durch altes Gewicht, mal 100.",
    uebersetzungTr: "İstem dışı kilo kaybı",
    uebersetzungAr: "فقدان الوزن غير المقصود",
  },
  {
    begriff: "Albumin",
    erklaerung:
      "Wichtigstes Transportprotein im Blut. Normwert: 35-53 g/l. Halbwertszeit ca. 20 Tage → zeigt langfristigen Ernährungsstatus. <35 g/l auffällig. Einschränkung: Entzündungen, Leberinsuffizienz und Niereninsuffizienz senken Albumin unabhängig vom Ernährungsstatus. Immer mit CRP kombiniert interpretieren. (DGEM/ESPEN 2020)",
    erklaerungB1:
      "Ein Eiweiß im Blut. Normbereich: 35-53 g/l. Reagiert langsam (ändert sich erst nach 20 Tagen). Unter 35 g/l ist ein Warnsignal. Achtung: Entzündungen und kranke Leber senken Albumin auch — deshalb immer zusammen mit dem CRP-Wert anschauen.",
    uebersetzungTr: "Albümin",
    uebersetzungAr: "الألبومين",
  },
  {
    begriff: "Präalbumin",
    erklaerung:
      "Transportprotein im Blut. Normwert: 20-40 mg/dl. Halbwertszeit 2-3 Tage → reagiert schnell auf Veränderungen. Geeignet für kurzfristiges Therapie-Monitoring bei Mangelernährung (Präalbumin steigt schnell bei Besserung). (DGEM/ESPEN 2020)",
    erklaerungB1:
      "Ein Eiweiß-Wert im Blut, der schnell reagiert (ändert sich in 2-3 Tagen). Daher gut geeignet, um zu prüfen, ob die Ernährungstherapie hilft. Normwert: 20-40 mg/dl.",
    uebersetzungTr: "Prealbümin",
    uebersetzungAr: "ما قبل الألبومين",
  },
  {
    begriff: "Flüssigkeitsbilanz",
    erklaerung:
      "Dokumentation und Berechnung von Einfuhr minus Ausfuhr in 24 Stunden. Einfuhr: Getränke, Suppen, Infusionen, Sondenkost. Ausfuhr: Urin, Stuhl, Erbrochenes, Drainagen, Perspiratio insensibilis (700-900 ml/d, bei Fieber +500 ml/°C). Ziel: ausgeglichene Bilanz (±200 ml). (DNQP Ernährungsmanagement 2017)",
    erklaerungB1:
      "Was kommt rein, was geht raus — in 24 Stunden gemessen. Rein: Trinken, Suppe, Infusion, Sondenkost. Raus: Urin, Stuhl, Erbrochenes, Drainagen, Schweiß/Atem (700-900 ml täglich). Das Ziel: beides ungefähr gleich.",
    uebersetzungTr: "Sıvı dengesi",
    uebersetzungAr: "موازنة السوائل",
  },
  {
    begriff: "Perspiratio insensibilis",
    erklaerung:
      "Unmerklicher Wasserverlust über Haut und Atmung, ca. 700-900 ml pro Tag. Bei Fieber: +500 ml pro Grad über 37°C. Wird in der Flüssigkeitsbilanz als fixer Ausfuhr-Posten eingerechnet. Bei beatmeten Patienten kann sie variieren. (DNQP Ernährungsmanagement 2017)",
    erklaerungB1:
      "Wasser, das der Körper durch Haut und Atem verliert — ohne dass man es sieht. Täglich ca. 700-900 ml. Bei Fieber: nochmal 500 ml extra pro Grad über 37°C. Muss in die Flüssigkeitsbilanz eingerechnet werden.",
    uebersetzungTr: "Fark edilmez terleme (perspiratio insensibilis)",
    uebersetzungAr: "التعرق الخفي (perspiratio insensibilis)",
  },
  {
    begriff: "Exsikkose (Dehydratation)",
    erklaerung:
      "Flüssigkeitsmangel im Körper. Klinische Zeichen: stehende Hautfalten (bei Älteren unzuverlässig!), trockene Schleimhäute, eingefallene Augen, Oligurie, Tachykardie, niedriger Blutdruck, Verwirrtheit/Delir. Bei älteren Menschen ist das Durstempfinden reduziert — plötzliche Verwirrtheit ist oft das erste Zeichen. (DNQP Ernährungsmanagement 2017; DGEM/ESPEN 2020)",
    erklaerungB1:
      "Zu wenig Wasser im Körper. Zeichen: trockener Mund, eingefallene Augen, dunkler Urin, schneller Puls, Verwirrtheit. Alte Menschen merken Durst oft nicht. Plötzliche Verwirrtheit bei alten Menschen = zuerst an Austrocknung denken!",
    uebersetzungTr: "Dehidrasyon (susuzluk)",
    uebersetzungAr: "الجفاف",
  },
  {
    begriff: "DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege)",
    erklaerung:
      "Nationales Expertengremium, das Pflegestandards entwickelt. Der Expertenstandard Ernährungsmanagement (2017) ist rechtlich verbindlich nach § 113a SGB XI für alle Pflegeeinrichtungen. Struktur: S-P-E (Struktur → Prozess → Ergebnis).",
    erklaerungB1:
      "Eine Gruppe von Pflege-Experten in Deutschland, die Regeln schreiben. Diese Regeln sind Pflicht für alle Pflegeheime und Kliniken (§ 113a SGB XI). Der Ernährungs-Standard von 2017 gilt bundesweit.",
    uebersetzungTr: "Almanya Hemşirelik Kalite Geliştirme Ağı",
    uebersetzungAr: "الشبكة الألمانية لتطوير جودة التمريض",
  },
  {
    begriff: "Dysphagie (Schluckstörung)",
    erklaerung:
      "Beeinträchtigte Schluckfunktion. Ursachen: neurologische Erkrankungen (Schlaganfall, ALS, Parkinson), mechanische Hindernisse (Tumor, Ösophagusstenose), altersbedingte Veränderungen. Relevant für das Ernährungs-Assessment, da Dysphagie zu reduzierter Nahrungsaufnahme führt. Maßnahme: Logopädie, Konsistenzanpassung. (DNQP Ernährungsmanagement 2017; DGEM/ESPEN 2020)",
    erklaerungB1:
      "Der Patient kann nicht richtig schlucken. Häufig nach einem Schlaganfall oder bei Parkinson. Führt dazu, dass er wenig isst. Maßnahme: Logopädie anfragen und Essen in der Konsistenz anpassen (z.B. andicken).",
    uebersetzungTr: "Disfaji (yutma güçlüğü)",
    uebersetzungAr: "عسر البلع",
  },
  {
    begriff: "Pflegediagnose (NANDA-I)",
    erklaerung:
      "Standardisierte Bezeichnung eines pflegerischen Problems, abgeleitet aus dem Assessment. In der Ernährungspflege z.B. 'Mangelernährung, Risiko für' (NANDA-I). Grundlage für Maßnahmenplanung und Dokumentation. NANDA-I: North American Nursing Diagnosis Association International. (DNQP Ernährungsmanagement 2017)",
    erklaerungB1:
      "Eine standardisierte Beschreibung des pflegerischen Problems nach Assessment. Beispiel: 'Risiko für Mangelernährung'. Aus der Pflegediagnose folgen die Maßnahmen und die Dokumentation.",
    uebersetzungTr: "Hemşirelik tanısı",
    uebersetzungAr: "التشخيص التمريضي",
  },
  {
    begriff: "Trinknahrung (Supplemente)",
    erklaerung:
      "Kalorienreiche Flüssignahrung zur Ergänzung der normalen Ernährung bei Mangelernährung. Typisch: ca. 300 kcal und 10-15 g Eiweiß pro Portion (125-200 ml). Wird zwischen den Mahlzeiten gegeben, nicht als Mahlzeitenersatz. Maßnahme nach PEMU-Assessment — nur wenn normale Kost nicht ausreicht. (DNQP Ernährungsmanagement 2017; DGEM/ESPEN 2020)",
    erklaerungB1:
      "Eine Flüssigkeit mit viel Energie und Eiweiß, die zwischen den Mahlzeiten gegeben wird — nicht anstelle von Mahlzeiten. Nur einsetzen, wenn normales Essen nicht ausreicht. Ca. 300 kcal pro Flasche.",
    uebersetzungTr: "Takviye içecek (oral beslenme takviyesi)",
    uebersetzungAr: "التغذية التكميلية (المشروبات الغذائية)",
  },
];

// CE-02 Thema Ernährungsgrundlagen — Karteikarten
// Quelle: content/ce-02/themen/ernaehrungsgrundlagen/karteikarten-plan.md (16 Karteikarten, 1 pro Baustein)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-ernaehrung-kk-01",
    vorderseite: "Was ist der Unterschied zwischen Makro- und Mikronährstoffen?",
    rueckseiteC1:
      "Makronährstoffe (Kohlenhydrate, Fette, Proteine, Wasser, Ballaststoffe) — liefern Energie und Baustoffe, der Körper braucht sie in Gramm-Mengen. Mikronährstoffe (Vitamine, Mineralstoffe, Spurenelemente) — regulieren den Stoffwechsel, der Körper braucht sie in Milligramm oder Mikrogramm. (DGE/ÖGE/SGE 2024)",
    rueckseiteB1:
      "Makronährstoffe (Kohlenhydrate, Fette, Eiweiß, Wasser, Ballaststoffe) — gibt Energie. Der Körper braucht viel davon (Gramm). Mikronährstoffe (Vitamine, Mineralstoffe) — regulieren den Stoffwechsel. Der Körper braucht wenig davon (Milligramm).",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DGE/ÖGE/SGE 2024 (D-A-CH-Referenzwerte)",
  },
  {
    id: "ce02-ernaehrung-kk-02",
    vorderseite: "Wie viel Energie liefert 1 g Kohlenhydrate und wie hoch ist die DGE-Empfehlung für Kohlenhydrate am Tag?",
    rueckseiteC1:
      "4 kcal pro Gramm (Atwater-Faktor 1899). DGE 2024: Mehr als 50% der täglichen Energiezufuhr aus Kohlenhydraten — vorwiegend komplex, mit Ballaststoffen (Vollkorn, Hülsenfrüchte). WHO-Empfehlung für freien Zucker: unter 10% der Tagesenergie, besser unter 5%.",
    rueckseiteB1:
      "1 g Kohlenhydrate = 4 kcal. Die DGE empfiehlt: mehr als die Hälfte der täglichen Energie aus Kohlenhydraten. Am besten aus Vollkorn und Hülsenfrüchten. Zucker möglichst wenig: unter 10% der Tagesenergie.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGE 2024, WHO 2015, Atwater 1899",
  },
  {
    id: "ce02-ernaehrung-kk-03",
    vorderseite: "Wie viel kcal liefert 1 g Fett und wie hoch ist die DGE-Fett-Empfehlung?",
    rueckseiteC1:
      "9 kcal pro Gramm — über doppelt so viel wie Kohlenhydrate oder Proteine. DGE 2024: ca. 30% der Tagesenergie aus Fett, davon <10% gesättigte Fettsäuren, Trans-Fettsäuren so wenig wie möglich (<1%). Essentielle Fettsäuren: Omega-3 und Omega-6 — müssen über die Nahrung aufgenommen werden.",
    rueckseiteB1:
      "1 g Fett = 9 kcal. Die DGE empfiehlt: etwa 30% der Tagesenergie aus Fett. Davon weniger als 10% gesättigte Fettsäuren (in Butter, Wurst). Essentielle Fettsäuren (Omega-3, Omega-6) muss man mit dem Essen aufnehmen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGE 2024, Atwater 1899",
  },
  {
    id: "ce02-ernaehrung-kk-04",
    vorderseite: "Wie hoch ist die DGE-Protein-Empfehlung für Erwachsene unter und über 65 Jahren — und warum der Unterschied?",
    rueckseiteC1:
      "Erwachsene unter 65 Jahre: 0,8 g/kg Körpergewicht/Tag. Ab 65 Jahre: 1,0 g/kg/Tag. Grund: Prävention der Sarkopenie (altersbedingter Muskelabbau). Mehr Protein schützt Muskelmasse — und damit vor Stürzen und Pflegebedürftigkeit. Energiewert Protein: 4 kcal/g.",
    rueckseiteB1:
      "Unter 65: 0,8 g Eiweiß pro kg Körpergewicht pro Tag. Über 65: 1,0 g/kg/Tag. Warum mehr? Ab 65 baut man schneller Muskeln ab (Sarkopenie). Mehr Eiweiß schützt vor Stürzen und Pflegebedürftigkeit.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGE/ÖGE/SGE 2024, DGEM 2019",
  },
  {
    id: "ce02-ernaehrung-kk-05",
    vorderseite: "Wie viele kcal pro Gramm haben Kohlenhydrate, Proteine, Fette und Alkohol?",
    rueckseiteC1:
      "Atwater-Faktoren (1899): Kohlenhydrate: 4 kcal/g — Proteine: 4 kcal/g — Fette: 9 kcal/g — Alkohol: 7 kcal/g — Ballaststoffe: 2 kcal/g — Wasser: 0 kcal/g. Merke: 1 g Fett hat so viel Energie wie 2,25 g Kohlenhydrate.",
    rueckseiteB1:
      "Kohlenhydrate: 4 kcal pro Gramm. Eiweiß: 4 kcal. Fett: 9 kcal. Alkohol: 7 kcal. Ballaststoffe: 2 kcal. Wasser: 0 kcal. Fett hat über doppelt so viel Energie wie Kohlenhydrate oder Eiweiß.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Atwater 1899, DGE 2024",
  },
  {
    id: "ce02-ernaehrung-kk-06",
    vorderseite: "Wie hoch ist die DGE-Empfehlung für Ballaststoffe pro Tag und warum muss man dazu viel trinken?",
    rueckseiteC1:
      "DGE 2024: mindestens 30 g Ballaststoffe pro Tag. Trinken: mindestens 1,5 Liter/Tag, weil Ballaststoffe Wasser im Darm binden. Ohne ausreichend Flüssigkeit drohen Verstopfung und Bauchbeschwerden. Wirkungen: Darmgesundheit, Obstipationsprophylaxe, Blutzucker-Stabilität, Cholesterin-Senkung, Sättigung, Darmkrebsprävention.",
    rueckseiteB1:
      "Mindestens 30 g Ballaststoffe pro Tag — so sagt es die DGE. Und dazu mindestens 1,5 Liter trinken. Warum? Ballaststoffe binden Wasser im Darm. Ohne Wasser droht Verstopfung. Mit ausreichend Flüssigkeit helfen sie dem Darm.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGE/ÖGE/SGE 2024, WHO 2020",
  },
  {
    id: "ce02-ernaehrung-kk-07",
    vorderseite: "Welche Vitamine sind fettlöslich (Merkhilfe) und was bedeutet das in der Praxis?",
    rueckseiteC1:
      "EDEKA: E (Tocopherol), D (Calciferol), K (Phyllochinon), A (Retinol). Praktisch: werden in Leber und Fettgewebe gespeichert — Aufnahme braucht Nahrungsfett (z.B. Öl an Möhrensalat) — Überdosierung möglich (besonders A und D). Wasserlöslich sind dagegen: Vitamin C und die 8 B-Vitamine — werden nicht gespeichert (Ausnahme B12).",
    rueckseiteB1:
      "Fettlösliche Vitamine: E, D, K, A — Merkhilfe EDEKA. Sie werden im Körper gespeichert. Du brauchst Fett im Essen damit der Körper sie aufnimmt (z.B. Öl auf den Salat). Zu viel davon kann schädlich sein. Wasserlösliche Vitamine (B, C) werden nicht gespeichert.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DGE/ÖGE/SGE 2024",
  },
  {
    id: "ce02-ernaehrung-kk-08",
    vorderseite: "Warum ist Vitamin-D-Mangel bei älteren Menschen in Pflegeheimen besonders häufig und warum ist er gefährlich?",
    rueckseiteC1:
      "Gründe: wenig Sonnenexposition (selten draußen), reduzierte Hautsynthese im Alter, in Deutschland (ab 50° N) nur April–September genug UVB-Strahlung, wenig Vitamin D über Nahrung (fetter Fisch, Eigelb). Folgen: Osteoporose, Muskelschwäche, erhöhtes Sturzrisiko, Frakturen. DGE-Empfehlung bei fehlender Eigensynthese: 20 µg/Tag (800 IE).",
    rueckseiteB1:
      "Ältere im Pflegeheim gehen selten raus — und die Haut bildet im Alter weniger Vitamin D aus Sonne. In Deutschland reicht die Sonne nur von April bis September. Folgen: schwache Knochen, Muskelschwäche, Sturzrisiko. DGE empfiehlt: 20 µg Vitamin D pro Tag (800 IE).",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DGE/ÖGE/SGE 2024, RKI",
  },
  {
    id: "ce02-ernaehrung-kk-09",
    vorderseite: "Was ist der Unterschied zwischen Mengenelementen und Spurenelementen und welcher Mangel ist in Deutschland am häufigsten?",
    rueckseiteC1:
      "Mengenelemente: Bedarf >50 mg/Tag — Natrium, Kalium, Calcium, Magnesium, Phosphor, Chlorid, Schwefel. Spurenelemente: Bedarf <50 mg/Tag — Eisen, Zink, Jod, Selen, Kupfer, Mangan, Chrom, Molybdän, Fluorid. Häufigster Mangel in DE: Eisen (Frauen im gebärfähigen Alter, Schwangere), Jod (Deutschland ist Jodmangelgebiet — Jodsalz wichtig), Magnesium (Sportler, ältere Menschen).",
    rueckseiteB1:
      "Mengenelemente: Bedarf mehr als 50 mg pro Tag (Natrium, Kalium, Calcium). Spurenelemente: Bedarf weniger als 50 mg pro Tag (Eisen, Zink, Jod). Häufige Mängel in Deutschland: Eisen (besonders Frauen), Jod (deshalb Jodsalz), Magnesium (ältere Menschen, Sportler).",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DGE/ÖGE/SGE 2024",
  },
  {
    id: "ce02-ernaehrung-kk-10",
    vorderseite: "Wie hoch ist der Flüssigkeitsbedarf pro kg Körpergewicht bei Erwachsenen und wie verteilt er sich auf Getränke und Nahrung?",
    rueckseiteC1:
      "30–35 ml pro kg Körpergewicht pro Tag bei Erwachsenen (Senioren eher 30 ml/kg). Bei 70 kg: 2,1–2,5 Liter Gesamtbedarf am Tag. Verteilung: Getränke ca. 1,5 l (DGE-Empfehlung), feste Nahrung ca. 0,9 l (Obst, Gemüse, Suppen), Oxidationswasser (Stoffwechsel) ca. 0,3 l. Mehrbedarf: Fieber (+0,5–1 l pro °C >37 °C), Hitze, Sport, Stillen (+700 ml).",
    rueckseiteB1:
      "30–35 ml pro kg Körpergewicht pro Tag. Bei 70 kg: etwa 2,1–2,5 Liter pro Tag. Davon 1,5 Liter durch Trinken. Der Rest kommt aus dem Essen (Obst, Gemüse, Suppen). Bei Fieber: noch 0,5–1 Liter mehr pro Grad Celsius über 37 °C.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "EFSA 2010, DGE 2024",
  },
  {
    id: "ce02-ernaehrung-kk-11",
    vorderseite: "Wie berechnest du den Energiebedarf eines Patienten — Faustregel und Formel?",
    rueckseiteC1:
      "Faustregel Pflege: 30 kcal/kg Körpergewicht/Tag bei mittlerer Aktivität. Formel: Gesamtbedarf = Grundumsatz × PAL-Wert. Grundumsatz: ca. 24 kcal/kg/Tag (1 kcal/kg/h). PAL-Wert: 1,2 (bettlägerig) — 1,4–1,5 (Büro) — 1,8–1,9 (Pflege) — 2,0–2,4 (Schwerarbeit). Beispiel: 70 kg, PAL 1,5 → 1680 × 1,5 = 2520 kcal/Tag. Bei Mangelernährung: 35–40 kcal/kg/Tag zum Aufbau (DGEM 2019).",
    rueckseiteB1:
      "Faustregel: 30 kcal pro kg pro Tag. Genauer: Grundumsatz × PAL-Wert. PAL 1,2 = liegt im Bett. PAL 1,9 = aktive Pflegekraft. Beispiel: 70 kg × 24 kcal = 1680 kcal Grundumsatz × PAL 1,5 = 2520 kcal pro Tag. Bei Mangelernährung: 35–40 kcal/kg/Tag.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "FAO/WHO/UNU 2004, Harris/Benedict 1919, DGEM 2019",
  },
  {
    id: "ce02-ernaehrung-kk-12",
    vorderseite: "Wie sieht die DGE-Empfehlung zur Makronährstoff-Verteilung aus und was ist die Plattenregel?",
    rueckseiteC1:
      "DGE-Verteilung (% Tagesenergie): Kohlenhydrate >50%, Fette ~30%, Proteine 15–20%. Plattenregel: ½ Teller Gemüse/Obst — ¼ Teller Beilage (Kartoffeln, Vollkorn-Getreide) — ¼ Teller Proteinquelle (Hülsenfrüchte, Fisch, Ei, mageres Fleisch). Grundlage: 10 Regeln der DGE (2024) und D-A-CH-Referenzwerte.",
    rueckseiteB1:
      "DGE empfiehlt: mehr als die Hälfte der Energie aus Kohlenhydraten, etwa 30% aus Fett, 15–20% aus Eiweiß. Plattenregel: die Hälfte des Tellers ist Gemüse oder Obst, ein Viertel Beilage (Vollkorn), ein Viertel Eiweiß (Hülsenfrüchte, Fisch, Ei).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGE/ÖGE/SGE 2024",
  },
  {
    id: "ce02-ernaehrung-kk-13",
    vorderseite: "Was musst du als Pflegekraft beachten, wenn ein muslimischer Patient im Ramadan im Krankenhaus liegt?",
    rueckseiteC1:
      "Kranke sind vom Fasten befreit (Koran 2:184), viele wollen aber trotzdem fasten — Wunsch respektieren, aber medizinisch aufklären. Arzt einbinden — Auswirkung auf Medikation, Diabetes, Niereninsuffizienz prüfen. Küche informieren — Mahlzeiten nach Sonnenuntergang (Iftar) und vor Sonnenaufgang (Suhoor) planen. Alkohol in Medikamenten erfragen (orale Lösungen, manche Antihistaminika). Dokumentieren, individuell fragen — nicht pauschalisieren. Gesetzliche Grundlage: § 5 PflBG — kultursensible Pflege ist Ausbildungsziel.",
    rueckseiteB1:
      "Kranke müssen im Ramadan nicht fasten — aber viele wollen es trotzdem. Respektiere das, aber informiere über Risiken. Den Arzt einbinden (Medikamente, Diabetes). Die Küche informieren: Essen nach Sonnenuntergang und vor Sonnenaufgang anbieten. Auf Alkohol in Medikamenten achten. Alles dokumentieren.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 5 PflBG, Koran 2:184",
  },
  {
    id: "ce02-ernaehrung-kk-14",
    vorderseite: "Ab welchem ungewollten Gewichtsverlust spricht man von Mangelernährung?",
    rueckseiteC1:
      "Kriterien (DGEM/ESPEN): >5% ungewollter Gewichtsverlust in 3 Monaten ODER >10% in 6 Monaten ODER BMI <18,5 (Senioren <20) ODER reduzierte Nahrungsaufnahme <50% über >5 Tage. Häufigkeit Deutschland: 25% aller Krankenhauspatienten, bis 50% in Pflegeheimen. Zeichen: Müdigkeit, Sarkopenie, schlechte Wundheilung, Infektanfälligkeit, erhöhtes Dekubitus- und Sturzrisiko. Pflicht: DNQP-Expertenstandard Ernährungsmanagement (2017/2024) fordert Früherkennung.",
    rueckseiteB1:
      "Mehr als 5% Gewichtsverlust in 3 Monaten = Mangelernährung. Oder mehr als 10% in 6 Monaten. Oder BMI unter 18,5. Im Krankenhaus ist jeder 4. Patient mangelernährt, im Pflegeheim sogar jeder 2. Zeichen: Müdigkeit, schlechte Wundheilung, häufige Infekte. Der DNQP-Standard fordert Früherkennung.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DGEM 2019, DNQP 2017/2024",
  },
  {
    id: "ce02-ernaehrung-kk-15",
    vorderseite: "Was ist der Unterschied zwischen leichter Vollkost und pürierter Kost — und wann setzt du welche ein?",
    rueckseiteC1:
      "Leichte Vollkost: vollwertig, aber ohne bekannt unverträgliche Lebensmittel (Hülsenfrüchte, fette Speisen, scharfe Gewürze). Indikation: nach Operation, Magen-/Darmbeschwerden, allgemeine Schonung. Normale Konsistenz. Pürierte Kost: alle Speisen zu Brei (gleichmäßig, klumpenfrei, IDDSI-Level 4–5). Indikation: Schluckstörungen (Dysphagie) nach Schlaganfall, bei Demenz, Parkinson, Tumoren. Tipp: Komponenten getrennt pürieren — appetitlicher, farblich unterscheidbar.",
    rueckseiteB1:
      "Leichte Vollkost: normales Essen, aber ohne schwer Verdauliches. Nach Operationen oder bei Magen-Darm-Problemen. Pürierte Kost: alles weich und cremig (IDDSI-Level 4–5). Bei Schluckstörungen nach Schlaganfall, bei Demenz, bei Parkinson. Tipp: Gemüse, Fleisch und Beilage getrennt pürieren — sieht besser aus.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGEM 2019, IDDSI 2019",
  },
  {
    id: "ce02-ernaehrung-kk-16",
    vorderseite: "Wann musst du bei einer Patientin mit reduzierter Nahrungsaufnahme welche andere Berufsgruppe einbinden?",
    rueckseiteC1:
      "Ernährungsberater/Diätassistent: komplexe Diäten, diagnostizierte Mangelernährung, Wunschkost-Planung. Arzt: Diagnostik (Laborwerte), Trinknahrung verordnen, PEG-Indikation stellen. Logopäde: bei Dysphagie (Schluckdiagnostik, Konsistenz-Empfehlung). Sozialdienst: bei sozialen Ursachen (Einsamkeit, Armut, Vereinsamung). Psychologe/Seelsorge: bei depressiver Ursache, Appetitverlust durch Trauma. Grundlage: DNQP-Expertenstandard Ernährungsmanagement (2017/2024) + § 5 PflBG.",
    rueckseiteB1:
      "Ernährungsberater: bei komplexen Diäten oder Mangelernährung. Arzt: für Laborwerte, Trinknahrung, PEG-Sonde. Logopäde: wenn jemand schlecht schluckt. Sozialdienst: wenn Einsamkeit oder Armut das Problem ist. Psychologe: wenn Depression hinter dem Appetitverlust steckt. Das steht im DNQP-Standard und § 5 PflBG.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024, § 5 PflBG",
  },
];

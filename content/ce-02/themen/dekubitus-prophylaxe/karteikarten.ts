// CE-02 Thema Dekubitus-Prophylaxe — Karteikarten (14 Karten)
// Quelle: content/ce-02/themen/dekubitus-prophylaxe/karteikarten-plan.md
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_DEKUBITUS_PROPHYLAXE_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-deku-kk-01",
    vorderseite: "Was ist ein Dekubitus? (NPUAP/EPUAP-Definition, 2 Kernelemente)",
    rueckseiteC1:
      "Lokale Schädigung der Haut und/oder des darunterliegenden Gewebes durch Druck allein oder Druck + Scherkräfte — meist über Knochenvorsprüngen. Laut DNQP 2024: weitgehend vermeidbar.",
    rueckseiteB1:
      "Eine Wunde durch zu langen Druck — meistens da, wo der Knochen nah unter der Haut liegt. Der DNQP sagt: Die meisten Dekubiti können verhindert werden.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "NPUAP/EPUAP/PPPIA 2019",
  },
  {
    id: "ce02-deku-kk-02",
    vorderseite: "Nenne die 4 Dekubitus-Kategorien und erkläre, woran du Kategorie I erkennst.",
    rueckseiteC1:
      "I = nicht-wegdrückbare Rötung bei intakter Haut (Fingertest: bleibt rot). II = Blase oder flache offene Wunde. III = Hautverlust bis Unterhautfettgewebe. IV = Muskel/Knochen/Sehne freiliegend. Sonderformen: 'Nicht einstufbar' + Deep Tissue Injury. Kategorie geht NIE zurück — einmal IV bleibt IV.",
    rueckseiteB1:
      "I = rote Stelle, Haut ganz (Fingertest: bleibt rot). II = Blase oder kleine Wunde. III = tiefe Wunde mit Fett. IV = Muskel oder Knochen zu sehen. Dazu: 'Nicht einstufbar' und Deep Tissue Injury. Die Kategorie geht nie zurück.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "NPUAP/EPUAP/PPPIA 2019",
  },
  {
    id: "ce02-deku-kk-03",
    vorderseite: "Erkläre in 4 Schritten, wie ein Dekubitus entsteht. Ab wann beginnt die Zellschädigung?",
    rueckseiteC1:
      "(1) Druck komprimiert Kapillargefäße. (2) Sauerstoffversorgung der Zellen bricht zusammen (Ischämie). (3) Nach ca. 30–120 Minuten: Zellschädigung. (4) Ohne Druckentlastung: Nekrose → Dekubitus. Verstärker: Scherkräfte (tief), Friktion (oberflächlich), Feuchtigkeit (Mazeration).",
    rueckseiteB1:
      "(1) Druck drückt die Blutgefäße zu. (2) Kein Sauerstoff mehr. (3) Nach 30–120 Minuten: Zellen sterben. (4) Ohne Hilfe: Wunde. Dazu: Scherkräfte tief innen, Reibung oben, Feuchtigkeit macht die Haut schwächer.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "NPUAP/EPUAP/PPPIA 2019",
  },
  {
    id: "ce02-deku-kk-04",
    vorderseite: "Was ist die häufigste Dekubitus-Lokalisation und wie hoch ist ihr Anteil? Nenne außerdem 2 Stellen, die durch medizinische Geräte entstehen.",
    rueckseiteC1:
      "Häufigste Stelle: Sakrum/Steißbein (~46% aller Dekubiti) — in Rückenlage. Zweithäufig: Ferse (~19%). Geräte-Dekubiti (MDRPI): z.B. Nasenrücken (Sauerstoffbrille), Ohren (O₂-Brille-Schlauch). MDRPI = bis zu 34% aller Dekubiti im Krankenhaus.",
    rueckseiteB1:
      "Am häufigsten: Steißbein (46%). Zweite Stelle: Ferse (19%). Durch Geräte (MDRPI): z.B. Nase (Sauerstoffbrille), Ohren (Schlauch der Brille). Bis zu 34% aller Dekubiti im Krankenhaus kommen durch Geräte.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "NPUAP/EPUAP/PPPIA 2019; RKI 2023",
  },
  {
    id: "ce02-deku-kk-05",
    vorderseite: "Welche 6 Items misst die Braden-Skala? Ab welchem Gesamtwert liegt ein Risiko vor?",
    rueckseiteC1:
      "6 Items: (1) Sensorische Wahrnehmung, (2) Feuchtigkeit, (3) Aktivität, (4) Mobilität, (5) Ernährung, (6) Reibung/Scherkräfte. Gesamt 6–23 Punkte. < 18 Punkte = Risiko. Je niedriger der Wert, desto höher das Risiko. Wichtig: Klinische Einschätzung führt — kein reiner Cut-off-Wert (DNQP 2024).",
    rueckseiteB1:
      "6 Bereiche: (1) Sinne, (2) Feuchtigkeit, (3) Aktivität, (4) Mobilität, (5) Ernährung, (6) Reibung. Ergibt 6–23 Punkte. Weniger als 18 = Risiko. Je weniger Punkte, desto größer die Gefahr. Aber: Die Pflegekraft muss selbst denken.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Braden & Bergstrom 1987; DNQP 2024",
  },
  {
    id: "ce02-deku-kk-06",
    vorderseite: "Wie ist der DNQP-Expertenstandard Dekubitusprophylaxe rechtlich verankert? Nenne die 5 Kriterien.",
    rueckseiteC1:
      "Rechtlich verbindlich über § 113a SGB XI für alle Pflegeeinrichtungen. Abweichungen müssen schriftlich begründet werden. 5 Kriterien: K1 Risikoeinschätzung (in 2h nach Aufnahme), K2 Hautbeurteilung, K3 Bewegung/Druckentlastung (individuell, keine starre 2h-Regel mehr!), K4 Hilfsmittel, K5 Information/Anleitung.",
    rueckseiteB1:
      "Gesetz: § 113a SGB XI — alle Pflegeeinrichtungen müssen es befolgen. 5 Regeln: K1 Risiko einschätzen (in 2 Stunden), K2 Haut anschauen, K3 Bewegen/Umlagern (individuell, nicht mehr feste 2 Stunden!), K4 Hilfsmittel, K5 Informieren.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024; § 113a SGB XI",
  },
  {
    id: "ce02-deku-kk-07",
    vorderseite: "Warum ist die 30°-Schräglagerung besser als die 90°-Seitenlage? Was sind Mikrobewegungen?",
    rueckseiteC1:
      "30°-Schräglage verteilt das Körpergewicht auf Weichteile statt auf den Trochanter major — deutlich geringerer Punktdruck. 90°-Seitenlage bringt volles Gewicht auf kleine Knochenfläche. Mikrobewegungen: kleine Lageveränderungen alle 15–30 Min (z.B. Kissen leicht verschieben) — ergänzen komplette Umlagerungen. Absolute No-Gos: Ringkissen, Massage, Franzbranntwein.",
    rueckseiteB1:
      "30°-Schräglage drückt weniger auf den Hüftknochen — das Gewicht verteilt sich auf mehr Fläche. 90° bringt alles auf eine kleine Stelle. Mikrobewegungen: kleine Bewegungen alle 15–30 Min (z.B. Kissen leicht verschieben). Verboten: Ringkissen, Massage, Franzbranntwein.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2024; Cochrane Moore 2022",
  },
  {
    id: "ce02-deku-kk-08",
    vorderseite: "Ab welchem Braden-Wert ist eine Wechseldruckmatratze indiziert? Ersetzt sie das Umlagern?",
    rueckseiteC1:
      "Wechseldruckmatratze: ab Braden ≤ 12 (hohes Risiko) oder bei bereits bestehendem Dekubitus. Sie ersetzt das Umlagern NICHT — reduziert nur die Frequenz. Matratzen-Übersicht: Standard (Braden ≥ 15), Weichlagerung (12–14), Wechseldruck (≤ 12 oder Dekubitus).",
    rueckseiteB1:
      "Wechseldruck: ab Braden 12 oder weniger, oder bei schon bestehendem Dekubitus. Sie ersetzt das Umlagern NICHT — man muss trotzdem umlagern. Standard (≥ 15), Weichlagerung (12–14), Wechseldruck (≤ 12).",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2024",
  },
  {
    id: "ce02-deku-kk-09",
    vorderseite: "Wie hoch ist der tägliche Eiweiß- und Flüssigkeitsbedarf eines dekubitus-gefährdeten Patienten? Was ist bei der Hautpflege verboten?",
    rueckseiteC1:
      "Eiweiß: 1,2–1,5 g/kg KG/Tag (Grundbaustein für Gewebereparatur). Flüssigkeit: 30–35 ml/kg KG/Tag (Ausnahme: Herz-/Niereninsuffizienz). Hautpflege verboten: Seife (alkalisch), Franzbranntwein (trocknet aus), Massieren geröteter Stellen, Föhnen. Richtig: pH-neutrale Reinigung (Syndet pH 5,5), bei trockener Haut W/O-Emulsion.",
    rueckseiteB1:
      "Eiweiß: 1,2–1,5 g/kg am Tag. Trinken: 30–35 ml/kg am Tag. Verboten bei Hautpflege: Seife, Franzbranntwein, Massieren roter Stellen, Föhnen. Richtig: pH-neutral waschen, bei trockener Haut eincremen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2024; NPUAP/EPUAP/PPPIA 2019",
  },
  {
    id: "ce02-deku-kk-10",
    vorderseite: "Was bedeutet das T-I-M-E-Prinzip in der Dekubitus-Wundversorgung? Was ist die absolute Pflicht?",
    rueckseiteC1:
      "T = Tissue (Débridement — totes Gewebe entfernen). I = Infection (Zeichen erkennen: Rötung, Schmerz, Wärme; Abstrich; Antibiotika nach Arztanordnung). M = Moisture (feuchte Wundbehandlung: Hydrokolloid, Hydrogel, Alginat, Schaum — je nach Exsudat). E = Edge (Wundrand schützen, Mazeration vermeiden). ABSOLUTE PFLICHT: Druckentlastung der betroffenen Region.",
    rueckseiteB1:
      "T = Totes Gewebe weg. I = Infektion erkennen und behandeln. M = Feuchte Wundbehandlung (Hydrokolloid, Hydrogel, Alginat, Schaum). E = Wundrand schützen. ABSOLUT WICHTIG: Den Druck von der Wunde nehmen — sonst heilt nichts.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "EWMA; NPUAP/EPUAP/PPPIA 2019",
  },
  {
    id: "ce02-deku-kk-11",
    vorderseite: "Warum sind Massieren, Ringkissen und Franzbranntwein bei Dekubitus kontraindiziert?",
    rueckseiteC1:
      "Massieren: schädigt bereits geschwächtes Gewebe zusätzlich, beschleunigt Dekubitusentstehung (NPUAP/EPUAP, DNQP). Ringkissen: komprimieren randständige Gefäße — Durchblutung des umliegenden Gewebes wird schlechter, nicht besser. Franzbranntwein: Alkohol trocknet Haut aus, schädigt Säureschutzmantel. Alle drei: obsolet, wissenschaftlich widerlegt.",
    rueckseiteB1:
      "Massieren: macht das Gewebe noch kaputter. Ringkissen: drücken am Rand und verschlechtern die Durchblutung. Franzbranntwein: trocknet die Haut aus. Alle drei sind verboten — die Wissenschaft hat gezeigt, dass sie schaden.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2024; NPUAP/EPUAP/PPPIA 2019",
  },
  {
    id: "ce02-deku-kk-12",
    vorderseite: "Welche 5 Angaben sind bei der Wunddokumentation eines Dekubitus pro Verbandswechsel Pflicht?",
    rueckseiteC1:
      "(1) Kategorie (I–IV oder 'nicht einstufbar'). (2) Größe: Länge × Breite × Tiefe in cm. (3) Wundgrund: Anteile rot/gelb/schwarz/rosa in %. (4) Exsudat: Menge, Farbe, Geruch. (5) Wundrand (mazeriert, unterminiert, scharf). Plus: Foto mit Maßstab (Einwilligung!), Datum, Unterschrift. Grundsatz: Was nicht dokumentiert ist, gilt als nicht getan (MDK-Prüfung, SGB XI).",
    rueckseiteB1:
      "(1) Kategorie (I–IV). (2) Größe in cm. (3) Wundgrund (rot/gelb/schwarz/rosa in %). (4) Flüssigkeit (Menge, Farbe, Geruch). (5) Wundrand. Dazu: Foto mit Maßstab, Datum, Unterschrift. Regel: Was nicht aufgeschrieben ist, gilt als nicht gemacht.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "DNQP 2024; § SGB XI",
  },
  {
    id: "ce02-deku-kk-13",
    vorderseite: "Wie hoch ist die Dekubitus-Prävalenz im deutschen Krankenhaus? Wo ist die Prävalenz am höchsten?",
    rueckseiteC1:
      "Krankenhaus: ca. 12,5% (DNQP-Daten). Pflegeheim: 5–8%. Ambulante Pflege: 3–5%. Intensivstation: bis 20% (höchstes Risiko-Setting). Kosten Kategorie III–IV: 10.000–30.000 € pro Fall. Wichtig: Dekubitus ist ein Qualitätsindikator bei MDK-Prüfungen. DNQP: weitgehend vermeidbar.",
    rueckseiteB1:
      "Krankenhaus: ca. 12,5%. Pflegeheim: 5–8%. Ambulant: 3–5%. Intensivstation: bis 20% — am höchsten. Schwere Dekubiti kosten 10.000–30.000 Euro pro Fall. Der DNQP sagt: Die meisten kann man verhindern.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024; RKI 2023",
  },
  {
    id: "ce02-deku-kk-14",
    vorderseite: "Wie reagierst du, wenn ein einwilligungsfähiger Patient die Umlagerung ablehnt?",
    rueckseiteC1:
      "Autonomie respektieren — kein Zwingen (das wäre rechtlich Nötigung). Aufklären: Welche Konsequenzen hat die Ablehnung? Alternativen anbieten: Mikrobewegungen? Anderer Zeitpunkt? Ursache erfragen: Schmerz? Müdigkeit? Scham? Dokumentieren: Aufklärung + Ablehnung schriftlich festhalten. Bei wiederholter Ablehnung: Arzt informieren. Grundlage: DNQP K5 — Partizipative Entscheidungsfindung.",
    rueckseiteB1:
      "Nicht zwingen — er darf Nein sagen. Erklären, was passieren kann. Alternativen anbieten (kleine Bewegungen? Anderer Zeitpunkt?). Fragen, warum er ablehnt (Schmerz? Müde? Scham?). Aufschreiben. Bei öfterem Nein: Arzt informieren.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "DNQP 2024 K5; Selbstbestimmungsrecht",
  },
];

// CE-02 Thema Positionierung — Karteikarten (13 Karten, 1 pro Baustein)
// Quelle: content/ce-02/themen/positionierung/karteikarten-plan.md
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_POSITIONIERUNG_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-pos-kk-01",
    vorderseite:
      "Was ist Positionierung — und wie unterscheidet sie sich von 'Lagerung'?",
    rueckseiteC1:
      "Aktive Pflegehandlung: Patient in eine gezielte Körperhaltung bringen — zur Druckentlastung, Funktionsförderung, Aktivitäts-Ermöglichung. Unterschied: 'Lagerung' = passiv (abgelegt); 'Positionierung' = aktiv (mit Patient, Eigenbewegung einbezogen).",
    rueckseiteB1:
      "Aktive Pflege-Maßnahme: Du bringst den Patienten in eine Körperhaltung. Zusammen mit ihm. 'Lagerung' klingt passiv — der Patient wird abgelegt. 'Positionierung' heißt: Er macht mit.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024",
  },
  {
    id: "ce02-pos-kk-02",
    vorderseite:
      "Welche Positionierung ist bei einem Patienten mit akuter Herzinsuffizienz und Dyspnoe indiziert — und warum?",
    rueckseiteC1:
      "Herzbett: Oberkörper 30-45° hoch, Knie leicht gebeugt (Kissen unter den Knien). Wirkung: Entlastet die Atmung (Zwerchfell tiefer), senkt die kardiale Vorlast. Knie-Beugung verhindert Hinunterrutschen.",
    rueckseiteB1:
      "Herzbett: Oberkörper hoch, Kissen unter die Knie. Hilft bei Atemnot und Herz-Problemen. Knie-Kissen verhindert, dass der Patient rutscht.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024",
  },
  {
    id: "ce02-pos-kk-03",
    vorderseite:
      "Nenne 3 Kontrollpunkte für eine korrekt ausgeführte 30°-Seitenlage.",
    rueckseiteC1:
      "1. Trochanter major (seitlicher Hüftknochen) vollständig frei von Matratzenkontakt. 2. Beide Gesäßhälften haben noch Bodenkontakt (sonst zu stark gekippt). 3. Fersen separat entlastet (Kissen unter den Waden, Fersen frei).",
    rueckseiteB1:
      "1. Hüftknochen darf die Matratze nicht berühren. 2. Beide Pobacken berühren noch die Matratze. 3. Fersen frei (Kissen unter den Waden).",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "NPUAP/EPUAP 2019; DNQP 2017/2024",
  },
  {
    id: "ce02-pos-kk-04",
    vorderseite: "Warum ist die 90°-Seitenlage heute selten indiziert?",
    rueckseiteC1:
      "Gesamtes Körpergewicht ruht auf dem Trochanter major — einer kleinen, knochigen Fläche ohne Polster. Hohes Dekubitusrisiko auf kleiner Fläche. Die 30°-Seitenlage verteilt den Druck deutlich besser auf Becken und Rücken.",
    rueckseiteB1:
      "Das ganze Gewicht drückt auf den Hüftknochen. Wenig Polster, hoher Druck. Die 30°-Seitenlage verteilt den Druck viel besser. Deshalb: 90° nur kurz.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024",
  },
  {
    id: "ce02-pos-kk-05",
    vorderseite:
      "Wann ist die 135°-Lage besonders indiziert — und welche 2 wichtigen Kontraindikationen gibt es?",
    rueckseiteC1:
      "Indikation: bestehender Sakral-Dekubitus oder Hochrisiko, wenn alle Rücken-/Seitenlagen ausfallen. Entlastet Rücken und Sakrum komplett. Kontraindikationen: frische abdominelle OP, schwere Dyspnoe (weitere: Hirndruck, instabile Wirbelsäule).",
    rueckseiteB1:
      "Wann? Wenn der Patient schon einen Dekubitus am Steißbein hat oder alle anderen Positionen nicht gehen. Nicht bei: frischer Bauch-OP, schwerer Atemnot.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024; NPUAP/EPUAP 2019",
  },
  {
    id: "ce02-pos-kk-06",
    vorderseite:
      "Welche 3 Prädilektionsstellen hat ein Patient in 30°-Seitenlage?",
    rueckseiteC1:
      "Trochanter major unten (obwohl entlastet — bei Ausführungsfehler drückt er), Ohrmuschel unten, Malleolus (Knöchel) am unten liegenden Fuß. Plus Schulter (Akromion) und Ellenbogen.",
    rueckseiteB1:
      "Hüftknochen unten (wenn schlecht ausgeführt), Ohr unten, Knöchel unten. Auch Schulter und Ellenbogen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "NPUAP/EPUAP 2019",
  },
  {
    id: "ce02-pos-kk-07",
    vorderseite:
      "Was sind Mikrobewegungen — und worin unterscheiden sie sich von der klassischen Umlagerung?",
    rueckseiteC1:
      "Mikrobewegungen sind kleine Gewichtsverlagerungen (wenige Zentimeter), die der Patient selbst oder angeleitet ausführt und den Dauerdruck unterbrechen. Unterschied zur klassischen Umlagerung: häufiger und kleiner. Sie ergänzen die großen Positionswechsel, ersetzen sie aber nicht.",
    rueckseiteB1:
      "Kleine Bewegung: Patient verlagert sein Gewicht ein paar Zentimeter. Reicht, damit die Haut wieder Blut bekommt. Ergänzung zum Umlagern — kein Ersatz.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024; Moore 2022",
  },
  {
    id: "ce02-pos-kk-08",
    vorderseite:
      "Welche 5 Faktoren bestimmen den individuellen Umlagerungsrhythmus laut DNQP (2017/2024)?",
    rueckseiteC1:
      "1. Individuelles Risiko (Braden-Skala, klinischer Blick). 2. Hautzustand nach der letzten Umlagerung. 3. Matratzen-System (Wechseldruck/Weichlagerung erlaubt längere Intervalle). 4. Aktivität/Eigenbewegung des Patienten. 5. Toleranz (Schlaf, Schmerzen).",
    rueckseiteB1:
      "1. Risiko des Patienten. 2. Haut nach der letzten Umlagerung. 3. Welche Matratze. 4. Kann er sich selbst bewegen? 5. Schläft er durch Umlagern schlecht?",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "DNQP 2017/2024",
  },
  {
    id: "ce02-pos-kk-09",
    vorderseite:
      "Wann setzt du eine Wechseldruckmatratze ein — und wann eine Weichlagerungsmatratze?",
    rueckseiteC1:
      "Wechseldruck: sehr hohes Risiko, stark immobil (mechanische Umlagerung durch sich abwechselnd füllende Luftkammern). Weichlagerung: mittleres Risiko, Restmobilität erhalten (der Körper sinkt ein, Druck verteilt sich auf große Fläche).",
    rueckseiteB1:
      "Wechseldruck: hohes Risiko, Patient bewegt sich gar nicht. Weichlagerung: mittleres Risiko, Patient kann sich noch etwas bewegen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "NPUAP/EPUAP 2019; DNQP 2017/2024",
  },
  {
    id: "ce02-pos-kk-10",
    vorderseite:
      "Welche 5 Angaben gehören in jeden Positionierungsprotokoll-Eintrag?",
    rueckseiteC1:
      "1. Uhrzeit. 2. Position (z.B. LSL 30° = linke Seitenlage 30°). 3. Handzeichen oder Name. 4. Hautbeobachtung (unauffällig/Rötung/Wunde). 5. Besonderheiten (Patientenreaktion, Schmerz, Kooperation). Grundlage: § 630f BGB + DNQP 2017/2024.",
    rueckseiteB1:
      "1. Uhr-Zeit. 2. Position. 3. Name oder Handzeichen. 4. Haut-Zustand. 5. Besonderheiten. Gesetz: § 630f BGB.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 630f BGB; DNQP 2017/2024",
  },
  {
    id: "ce02-pos-kk-11",
    vorderseite:
      "Welche Positionierung bei hypovolämischem Schock? Welche bei kardiogenem Schock? (Achtung: Unterschied!)",
    rueckseiteC1:
      "Hypovolämischer Schock (Blutverlust, Volumenmangel) → Schocklage (Beine 20-30° hoch, Kopf flach — Blutrückfluss zum Herzen fördern). Kardiogener Schock (Herz pumpt nicht) → KEINE Schocklage (überlastet Herz), stattdessen Oberkörper leicht hochlagern.",
    rueckseiteB1:
      "Blutverlust → Schock-Lage (Beine hoch, Kopf flach). Herz pumpt nicht → KEIN Schock-Lage. Stattdessen Oberkörper leicht hoch.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Notfallmedizinische Leitlinien",
  },
  {
    id: "ce02-pos-kk-12",
    vorderseite:
      "Warum ist ein hochgezogenes Bettgitter eine freiheitsentziehende Maßnahme — und welche 3 Alternativen gibt es (Werdenfelser Weg)?",
    rueckseiteC1:
      "Bettgitter hindert den Patienten am Verlassen des Bettes ohne seine echte Zustimmung → FeM, genehmigungspflichtig nach § 1831 BGB. Alternativen: 1. Niederflurbett (nah am Boden). 2. Sensormatte vor dem Bett. 3. Mehr Betreuung/Aktivierung. Zusätzlich: Ursachensuche (Delir, Schmerz, Durst).",
    rueckseiteB1:
      "Bettgitter nimmt dem Patienten die Freiheit → FeM, Erlaubnis vom Richter nötig (§ 1831 BGB). Alternativen: 1. Bett niedrig stellen. 2. Sensor-Matte. 3. Mehr Betreuung.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 1831 BGB; Werdenfelser Weg",
  },
  {
    id: "ce02-pos-kk-13",
    vorderseite:
      "Nenne 5 praktische Regeln für rückenschonendes Arbeiten bei der Positionierung — und die rechtliche Grundlage.",
    rueckseiteC1:
      "1. Bett auf Hüfthöhe (Arbeitshöhe). 2. Kinästhetik statt Heben. 3. Zu zweit bei schweren/immobilen Patienten. 4. Hilfsmittel nutzen (Rutschbrett, Drehscheibe, Lifter). 5. Aus den Beinen heben (Knie gebeugt, Rücken gerade). Rechtliche Grundlage: § 3 Arbeitsschutzgesetz + TRBS 2121.",
    rueckseiteB1:
      "1. Bett auf Hüft-Höhe. 2. Kinästhetik statt Heben. 3. Zu zweit bei schweren Patienten. 4. Hilfsmittel (Rutsch-Brett, Lifter). 5. Knie beugen, Rücken gerade. Gesetz: § 3 ArbSchG.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 3 ArbSchG; TRBS 2121",
  },
];

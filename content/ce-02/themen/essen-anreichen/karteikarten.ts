// CE-02 Thema Essen & Trinken anreichen — Karteikarten (13 Karten, 1 pro Baustein)
// Quelle: content/ce-02/themen/essen-anreichen/karteikarten-plan.md
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_ESSEN_ANREICHEN_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-essen-kk-01",
    vorderseite:
      "Welche Sitzposition braucht ein Patient mindestens, wenn er Essen angereicht bekommt? Warum?",
    rueckseiteC1:
      "Oberkörper über 60° aufrecht (besser 90°). Grund: Die Schwerkraft leitet den Bolus in die Speiseröhre statt in die Luftröhre — Aspirationsschutz. Bei Bettlägerigkeit: Bettkopfteil hoch, Kissen im Rücken, Füße stabil.",
    rueckseiteB1:
      "Oberkörper über 60 Grad aufrecht, besser 90 Grad. Warum? Die Schwerkraft hilft — das Essen geht in die Speiseröhre, nicht in die Lunge.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGE (2024); Expertenstandard Ernährungsmanagement DNQP 2017",
  },
  {
    id: "ce02-essen-kk-02",
    vorderseite:
      "Warum reichst du Essen immer auf Augenhöhe an — was passiert nonverbal, wenn du stehst?",
    rueckseiteC1:
      "Stehen erzeugt Machtgefälle (nonverbal), der Patient fühlt sich klein. Sitzen signalisiert: Ich habe Zeit für dich. Würde ist Teil der Pflegequalität. Zusätzlich: Der Patient bestimmt das Tempo, nicht der Zeitdruck.",
    rueckseiteB1:
      "Wenn du stehst, muss der Patient hochschauen. Das macht ihn klein. Wenn du sitzt, zeigst du: Ich habe Zeit für dich. Das ist Respekt.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "WHO (2015) Mealtime Care and Dignity",
  },
  {
    id: "ce02-essen-kk-03",
    vorderseite:
      "In welche Richtung muss der Kopf beim Schlucken stehen — und warum?",
    rueckseiteC1:
      "Kinn Richtung Brust (leicht nach vorne). Die Epiglottis verschließt so die Trachea. Kopf nach hinten (Reklination) öffnet die Luftröhre — Aspirationsgefahr. Bei Schlaganfall mit Halbseitenlähmung: Kopf zur nicht-gelähmten Seite drehen.",
    rueckseiteB1:
      "Kinn zur Brust, Kopf leicht nach vorne. So macht der Kehldeckel die Luftröhre zu. Kopf nach hinten ist gefährlich — dann ist der Weg zur Lunge offen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGG/DGN S1-Leitlinie Neurogene Dysphagie (2020)",
  },
  {
    id: "ce02-essen-kk-04",
    vorderseite:
      "Nenne 5 Warnzeichen für eine Dysphagie, die du beim Anreichen siehst.",
    rueckseiteC1:
      "(1) Husten/Räuspern beim Schlucken, (2) Nahrungsreste im Mund (Taschenbildung), (3) gurgelnde/nasse Stimme nach dem Schlucken, (4) Essdauer >45 Min, (5) Leaking (Speichel/Essen läuft raus). Plus: wiederkehrende Pneumonien (stille Aspiration).",
    rueckseiteB1:
      "(1) Husten beim Schlucken, (2) Essen bleibt im Mund, (3) nasse Stimme nach dem Schlucken, (4) Essen dauert über 45 Minuten, (5) Essen/Speichel läuft aus dem Mund. Dazu: oft Lungenentzündung (stille Aspiration).",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DGG/DGN S1-Leitlinie Neurogene Dysphagie (2020)",
  },
  {
    id: "ce02-essen-kk-05",
    vorderseite:
      "Was sind die 4 Stufen des GUSS-Tests in richtiger Reihenfolge?",
    rueckseiteC1:
      "1. Speichel (trockener Schluck), 2. Pudding (halbfeste Konsistenz), 3. Wasser (flüssig), 4. Brot (fest). Bei Versagen einer Stufe: sofort stopp + Logopädie. Punkte 0-20 zeigen Schweregrad. (Trapl et al. 2007, Stroke)",
    rueckseiteB1:
      "1. Speichel schlucken, 2. Pudding, 3. Wasser, 4. Brot. Wenn eine Stufe nicht klappt: sofort aufhören und Logopädie rufen.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Trapl M. et al. (2007): GUSS — Stroke 38:2948-2952",
  },
  {
    id: "ce02-essen-kk-06",
    vorderseite:
      "Was ist IDDSI und welche Level gibt es für Getränke vs. Nahrung?",
    rueckseiteC1:
      "IDDSI = International Dysphagia Diet Standardisation Initiative (2019). Getränke: Level 0-4 (dünn → Pudding-Konsistenz). Nahrung: Level 3-7 (Liquidised → Regular). Weltweit einheitlicher Standard, ersetzt alte Namen. Test: Flow-Test mit 10-ml-Spritze.",
    rueckseiteB1:
      "IDDSI ist ein internationaler Standard für Dysphagie-Kost (seit 2019). Getränke: Level 0-4. Essen: Level 3-7. Test: 10-ml-Spritze (Flow-Test). Ersetzt alte Namen wie Nektar oder Honig.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "IDDSI (2019)",
  },
  {
    id: "ce02-essen-kk-07",
    vorderseite:
      "Warum musst du nach dem Einrühren von Andickungspulver 2 Minuten warten?",
    rueckseiteC1:
      "Modifizierte Stärke/Xanthan braucht Zeit zum Quellen. Sofort gegeben ist das Getränk noch zu dünn und dickt erst im Mund/Rachen nach — mitten im Schluckakt → Aspirationsgefahr. Immer 2 Min warten, dann prüfen (Flow-Test).",
    rueckseiteB1:
      "Das Pulver braucht 2 Minuten, um zu quellen. Sofort ist es zu dünn — im Mund wird es dann erst richtig dick. Das ist gefährlich. Immer warten und dann prüfen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "IDDSI (2019); Hersteller-Fachinfos (Nestlé, Fresenius, Nutricia)",
  },
  {
    id: "ce02-essen-kk-08",
    vorderseite:
      "Wofür ist der Nasenschlitzbecher gedacht und was ist sein Vorteil?",
    rueckseiteC1:
      "Becher mit Ausschnitt für die Nase. Vorteil: Der Becher kann bis zum Rest gekippt werden, ohne dass der Kopf nach hinten muss (Reklination vermieden). Schutz vor Aspiration bei Dysphagie-Patienten (Schlaganfall, Parkinson, Demenz).",
    rueckseiteB1:
      "Becher mit Ausschnitt für die Nase. Vorteil: Der Becher kippt, der Kopf bleibt vorne. So ist der Weg zur Lunge geschlossen. Gut bei Schluckstörung.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGG/DGN (2020)",
  },
  {
    id: "ce02-essen-kk-09",
    vorderseite:
      "Warum darfst du während des Kauens oder Schluckens nicht mit dem Patienten sprechen?",
    rueckseiteC1:
      "Sprechen bei gefüllter Mundhöhle erhöht das Aspirationsrisiko (Koordination Schlucken/Sprechen gestört). Kommunikationsregel: Entweder essen ODER sprechen. Gespräche in Pausen zwischen Bissen. Schweigen ist ok — Empathie durch Präsenz und Blickkontakt zeigen.",
    rueckseiteB1:
      "Beim Kauen oder Schlucken sprechen ist gefährlich — der Patient verschluckt sich leichter. Regel: Entweder essen oder reden. Gespräche zwischen den Bissen. Schweigen ist ok.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "WHO (2015); DGG/DGN (2020)",
  },
  {
    id: "ce02-essen-kk-10",
    vorderseite:
      "Nenne drei Besonderheiten beim Anreichen von Essen bei Kindern (im Vergleich zu Erwachsenen).",
    rueckseiteC1:
      "(1) Wunschkost anbieten, (2) spielerisch anreichen (Löffel = Flugzeug, Fingerfood ab 1 Jahr), (3) kein Druck/keine Strafe (Ablehnung = Stopp), (4) kleine Portionen öfter, (5) Eltern als Partner einbeziehen — nicht ausschließen.",
    rueckseiteB1:
      "(1) Wunschkost: was mag es gern? (2) Spielerisch: Löffel als Flugzeug. (3) Kein Zwang: Nein ist Nein. (4) Kleine Portionen öfter. (5) Eltern fragen und einbeziehen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGE (2024)",
  },
  {
    id: "ce02-essen-kk-11",
    vorderseite:
      "Warum ist Fingerfood bei fortgeschrittener Demenz oft sinnvoller als Besteck?",
    rueckseiteC1:
      "Apraxie (Unfähigkeit, Besteck zu benutzen trotz intakter Motorik) tritt bei mittlerer bis fortgeschrittener Demenz (GDS 5-6) auf. Fingerfood umgeht dieses Defizit — der Patient kann selbstständig essen, Würde und Selbstwert bleiben erhalten. Mundgerecht vorbereiten.",
    rueckseiteB1:
      "Bei Demenz wissen viele Patienten nicht mehr, wie man Besteck benutzt (Apraxie). Fingerfood umgeht das — sie können selbst essen. Das ist Würde. Alles mundgerecht vorbereiten.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGN S3-LL Demenz; DGE (2024)",
  },
  {
    id: "ce02-essen-kk-12",
    vorderseite:
      "Warum muss der Oberkörper nach dem Essen mindestens 30 Min hoch bleiben?",
    rueckseiteC1:
      "Schutz vor Reflux und Aspirationspneumonie. Mageninhalt kann sonst zurückfließen und in die Lunge gelangen (besonders bei Dysphagie-Patienten). 30 Min minimum, bei PEG-Sondenkost 60 Min. Oberkörper >60°, Knieknick gegen Hochrutschen.",
    rueckseiteB1:
      "Nach dem Essen kann Magensaft zurücklaufen und in die Lunge kommen — Gefahr von Lungenentzündung. Deshalb: Oberkörper 30 Minuten hoch lassen. Bei Sondenkost: 60 Minuten.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGG/DGN (2020)",
  },
  {
    id: "ce02-essen-kk-13",
    vorderseite:
      "Welche 5 Angaben musst du bei jeder Mahlzeit dokumentieren — laut Expertenstandard Ernährungsmanagement?",
    rueckseiteC1:
      "(1) Essmenge (Portion in ¼, ½, ¾, voll oder g), (2) Trinkmenge (ml exakt), (3) Konsistenz (IDDSI-Level), (4) Selbstständigkeit (selbst/Teilhilfe/Vollhilfe), (5) Auffälligkeiten (Husten, Verweigerung, Schmerzen). Plus: Kürzel + Uhrzeit. Pflicht nach § 630f BGB.",
    rueckseiteB1:
      "(1) Wie viel gegessen (Viertel bis alles oder Gramm), (2) wie viel getrunken (ml), (3) welches IDDSI-Level, (4) ob selbst oder Hilfe, (5) was aufgefallen ist (Husten, nicht gewollt). Dazu: Kürzel + Uhrzeit. Das ist Pflicht.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "Expertenstandard Ernährungsmanagement DNQP 2017; § 630f BGB",
  },
];

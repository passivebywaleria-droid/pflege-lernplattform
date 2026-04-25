// CE-02 Thema Mobilisation & Transfer — Karteikarten (13 Karten, eine pro Baustein)
// Quelle: content/ce-02/themen/mobilisation/karteikarten-plan.md
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_MOBILISATION_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-mob-kk-01",
    vorderseite: "Welche 5 typischen Folgen hat Immobilität?",
    rueckseiteC1:
      "Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz. Dazu Muskelabbau (Sarkopenie, bis zu 10 % pro Woche bei älteren Menschen) und Obstipation. Alle fünf werden durch Mobilisation gleichzeitig verhindert.",
    rueckseiteB1:
      "5 Folgen: Dekubitus (Druckwunde), Thrombose (Blutgerinnsel), Pneumonie (Lungenentzündung), Kontraktur (steife Gelenke), Sturz. Dazu: Muskelabbau, Verstopfung. Mobilisation verhindert alle fünf.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP, Expertenstandard Mobilität, 2020",
  },
  {
    id: "ce02-mob-kk-02",
    vorderseite: "Welche 6 Kriterien hat der DNQP-Expertenstandard Mobilität (2020)?",
    rueckseiteC1:
      "1. Mobilität einschätzen (Tinetti, TUG, Barthel), 2. informieren und beraten, 3. Maßnahmen planen (SMART), 4. Maßnahmen durchführen, 5. evaluieren, 6. dokumentieren und überleiten. Verbindlich nach § 113a SGB XI.",
    rueckseiteB1:
      "6 Schritte: 1. Einschätzen (Tinetti, TUG, Barthel), 2. beraten, 3. planen (SMART), 4. durchführen, 5. prüfen, 6. aufschreiben und weitergeben. Das ist Pflicht (§ 113a SGB XI).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP, Expertenstandard Mobilität, 2020",
  },
  {
    id: "ce02-mob-kk-03",
    vorderseite: "Was machst du immer, bevor ein Patient nach 3 Tagen Bettruhe aufsteht?",
    rueckseiteC1:
      "Orthostase-Check an der Bettkante: 2-3 Minuten sitzen lassen, RR und Puls messen (Baseline und an der Kante). Bei Schwindel, Blässe oder systolischem RR-Abfall > 20 mmHg: zurücklegen, Beine hochlagern, später neu versuchen.",
    rueckseiteB1:
      "Orthostase-Check an der Bettkante: 2-3 Minuten sitzen lassen. Blutdruck und Puls messen. Bei Schwindel oder starkem Blutdruck-Abfall: wieder hinlegen, Beine hoch, später neu versuchen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP Mobilität 2020",
  },
  {
    id: "ce02-mob-kk-04",
    vorderseite: "Warum ist Frühmobilisation die wirksamste Einzelmaßnahme der Pflege?",
    rueckseiteC1:
      "Sie wirkt gleichzeitig auf 5 Systeme: Gefäße (Thrombose), Lunge (Pneumonie), Haut (Dekubitus), Muskeln (Abbau-Prävention), Darm (Peristaltik gegen Obstipation). Voraussetzung: Kreislauf stabil, Schmerzen NRS ≤ 3, Patient wach und orientiert.",
    rueckseiteB1:
      "Frühmobilisation hilft gegen 5 Probleme gleichzeitig: Thrombose, Lungenentzündung, Druckwunde, Muskelabbau, Verstopfung. Voraussetzung: Kreislauf stabil, Schmerzen niedrig (NRS höchstens 3), Patient wach.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGG, S1-Leitlinie Frühmobilisation 2022; DNQP 2020",
  },
  {
    id: "ce02-mob-kk-05",
    vorderseite: "Wo darf der Patient beim Transfer anfassen — und wo NICHT?",
    rueckseiteC1:
      "Patient fasst an die Schulterblätter der Pflegekraft. NIEMALS an den Hals — akute Verletzungsgefahr der Halswirbelsäule für die Pflegekraft. Pflegekraft stellt Fuß vor Fuß des Patienten (Stoppfunktion). Arbeitet mit Gewichtsverlagerung, nicht mit Hebekraft.",
    rueckseiteB1:
      "Patient fasst an deine Schulterblätter. NIE an deinen Hals — das ist sehr gefährlich für deine Halswirbelsäule. Du stellst deinen Fuß vor den Fuß des Patienten (Stoppfunktion). Nutze Gewicht, nicht Kraft.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Hatch/Maietta, Kinästhetik; BGW 2019",
  },
  {
    id: "ce02-mob-kk-06",
    vorderseite: "In welcher Hand hält der Patient einen Gehstock — und warum?",
    rueckseiteC1:
      "In der gesunden Hand. Der Stock verlängert funktional den gesunden Arm und entlastet so die betroffene Seite. Höhe: Handgelenk beim aufrechten Stehen (ca. Trochanter-Höhe). Stock in der betroffenen Hand würde die schwache Seite zusätzlich belasten.",
    rueckseiteB1:
      "In der gesunden Hand. Der Stock verlängert den gesunden Arm. So geht das Gewicht über die gesunde Seite auf den Boden. Die kranke Seite wird entlastet. Höhe: Handgelenk im aufrechten Stand.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP Mobilität 2020",
  },
  {
    id: "ce02-mob-kk-07",
    vorderseite: "Ab wann ist ein Lifter laut BGW (2019) das Standardhilfsmittel beim Transfer?",
    rueckseiteC1:
      "Immer wenn der Patient nicht stehen kann. Der Lifter ist keine Notlösung, sondern Standard — auch für junge, fitte Pflegekräfte. Rund 50 % der berufsbedingten Rückenerkrankungen in der Pflege stammen aus manuellem Heben. Richtwert: ab ca. 40 kg Transfergewicht.",
    rueckseiteB1:
      "Immer wenn der Patient nicht stehen kann. Der Lifter ist Standard, nicht Notlösung — auch für junge, starke Pflegekräfte. Etwa 50 % aller Rückenerkrankungen in der Pflege kommen vom Heben. Richtwert: ab ca. 40 kg.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "BGW, Rückengerechtes Arbeiten in der Pflege, 2019",
  },
  {
    id: "ce02-mob-kk-08",
    vorderseite: "Was ist das Grundprinzip des Bobath-Konzepts bei Patienten nach Schlaganfall?",
    rueckseiteC1:
      "Die betroffene Seite bewusst einbeziehen — Berührung, Ansprache, Transfer und Gewichtsverlagerung gehen dorthin. Ziel: Neglect verhindern, Spastik und assoziierte Reaktionen vermeiden, Lagerung in Aktivität. 24-Stunden-Konzept: alle Pflegekräfte müssen es können.",
    rueckseiteB1:
      "Die kranke Seite immer einbeziehen — sprechen, berühren, Transfer, Gewicht dorthin. So vergisst das Gehirn die kranke Seite nicht (Neglect verhindern). Bewegung erlauben, nicht fixieren. 24 Stunden — alle Pfleger machen mit.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Bobath B./K., 1948 ff.",
  },
  {
    id: "ce02-mob-kk-09",
    vorderseite: "Welches Recht gibt dir § 15 ArbSchG, wenn auf deiner Station kein Lifter vorhanden ist?",
    rueckseiteC1:
      "Recht auf Eigenschutz. Du darfst die Mobilisation begründet verweigern, wenn die Arbeitsbedingungen gefährlich sind. Vorgehen: der PDL schriftlich melden, in der Pflegedokumentation vermerken ('Hilfsmittel nicht verfügbar'), Nachrüstung verlangen. Dein Arbeitgeber muss reagieren.",
    rueckseiteB1:
      "Recht auf Eigenschutz. Du darfst die Mobilisation ablehnen, wenn es gefährlich ist. Was tun: Chef schriftlich informieren, in die Dokumentation schreiben 'kein Lifter da', Nachrüstung fordern. Der Chef muss etwas tun.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "ArbSchG § 15; BGW 2019",
  },
  {
    id: "ce02-mob-kk-10",
    vorderseite: "Was ist das Post-Fall-Syndrom und wie gehst du damit um?",
    rueckseiteC1:
      "Psychische Folge eines Sturzes: pathologische Sturzangst, Vermeidung von Bewegung, Rückzug, Muskelabbau, neuer Sturz (Teufelskreis). Bei bis zu 50 % der Älteren nach einem Sturz. Behandlung: Angst ernst nehmen, Ursachen klären, kleine Schritte, Sicherheit vermitteln, Hilfsmittel normalisieren, Falls-Efficacy-Assessment. Nie Zwang.",
    rueckseiteB1:
      "Angst nach einem Sturz mit Teufelskreis (Angst → keine Bewegung → Muskelabbau → neuer Sturz). Bei bis zu 50 % der Älteren. Behandlung: Angst ernst nehmen, Sturz besprechen, kleine Schritte, Sicherheit geben, Hilfsmittel normalisieren. Nie Zwang — das macht alles schlimmer.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "Tinetti M., 1988",
  },
  {
    id: "ce02-mob-kk-11",
    vorderseite: "Welches sind die klassischen Abbruchkriterien bei einer Mobilisation?",
    rueckseiteC1:
      "RR-Abfall systolisch > 20 mmHg oder diastolisch > 10 mmHg, Puls > 120/min in Ruhe, Präsynkope/Synkope, Schwindel, Blässe, kalter Schweiß, starke Schmerzen (NRS > 5). Vorgehen: Patient hinlegen, Beine hochlagern, Vitalwerte engmaschig messen, Arzt informieren, dokumentieren.",
    rueckseiteB1:
      "RR fällt stark (systolisch > 20 mmHg oder diastolisch > 10 mmHg), Puls über 120, fast Ohnmacht oder Ohnmacht, Schwindel, Blässe, kalter Schweiß, starke Schmerzen (NRS über 5). Dann: Hinlegen, Beine hoch, messen, Arzt informieren, aufschreiben.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "S3-Leitlinie Schmerz 2020; DNQP Mobilität 2020",
  },
  {
    id: "ce02-mob-kk-12",
    vorderseite: "Ein einwilligungsfähiger Patient lehnt die Mobilisation ab. Wie reagierst du rechtlich korrekt?",
    rueckseiteC1:
      "Selbstbestimmung nach § 630d BGB respektieren. Vorgehen: zuhören → Ursache erfragen (Schmerz? Angst? Depression?) → aufklären (Konsequenzen) → Alternativen anbieten → dokumentieren → bei wiederholter Ablehnung Arzt informieren. Kein Zwang — das wäre Körperverletzung (§ 223 StGB).",
    rueckseiteB1:
      "Selbstbestimmung nach § 630d BGB. Vorgehen: zuhören → Grund fragen (Schmerz? Angst? Traurig?) → aufklären → Alternativen anbieten → aufschreiben → bei immer wieder Ablehnung: Arzt informieren. Kein Zwang — das wäre Körperverletzung (§ 223 StGB).",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 630d BGB; § 1906a BGB; § 223 StGB",
  },
  {
    id: "ce02-mob-kk-13",
    vorderseite: "Formuliere ein SMART-Mobilisationsziel für Frau M., 70 Jahre, 3 Tage nach Hüft-TEP.",
    rueckseiteC1:
      "'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator und Begleitung schmerzarm (NRS ≤ 3).' — Spezifisch (steht und geht), Messbar (5 Schritte), Attraktiv (mit Patient vereinbart), Realistisch (Tag 3 postop machbar), Terminiert (bis Freitag).",
    rueckseiteB1:
      "'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator und Begleitung schmerzarm (NRS höchstens 3).' — Spezifisch (steht und geht), Messbar (5 Schritte), Attraktiv (Patient will es), Realistisch (Tag 3 nach OP geht das), Terminiert (bis Freitag).",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP Mobilität 2020; Fiechter V./Meier M., 1981",
  },
];

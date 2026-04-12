// LE-01 Prüfungs-Tab: Prüfungsfall — 1 ExamCase
// Quelle: pruefung-plan.md | Dozentin Phase 2 | 2026-04-12
// CE01+CE03, KB V.1, Drittel 1, Bloom B2–B3
// Kein KI-Feedback während der Bearbeitung (PflAPrV-Simulation)

import type { ExamCase, ContentStep } from "../_types";

// === PRÜFUNGSFALL: Amara D. / Frau H. ===
// Neuer Patient — nicht im Fall-Tab. Setting: geriatrische Station.

const EXAM_PHASE1_STEPS: ContentStep[] = [
  {
    stepId: "le01-exam-ft-01",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 23–26"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-berufliche-pflege",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Aufgabe 1: Berufliche Pflege vs. Laienpflege",
      body: "Erklären Sie den Unterschied zwischen beruflicher Pflege und Laienpflege. Nennen Sie mindestens drei Merkmale, die professionelle Pflege kennzeichnen, und erläutern Sie, warum diese Abgrenzung für den Pflegealltag von Amara relevant ist.",
    },
    contentB1: {
      title: "Aufgabe 1: Berufliche Pflege vs. Laienpflege",
      body: "Was ist der Unterschied zwischen beruflicher Pflege und Laienpflege? Nennen Sie 3 Merkmale von beruflicher Pflege. Warum ist das für Amara wichtig?",
    },
    question: {
      fragetext:
        "Erklären Sie den Unterschied zwischen beruflicher Pflege und Laienpflege. Nennen Sie mindestens drei Merkmale professioneller Pflege und deren Relevanz für Amaras Situation.",
      musterantwort:
        "Berufliche Pflege setzt eine pflegerische Ausbildung voraus, wird gegen tarifliches Gehalt ausgeübt, basiert auf wissenschaftlichen Grundlagen und orientiert sich an einem Berufsbild und Berufskodex [I Care Pflege S. 26]. Laienpflege wird von Menschen ohne pflegerische Ausbildung geleistet — meist Angehörige oder Bezugspersonen. Relevanz für Amara: Als ausgebildete Pflegefachkraft handelt sie auf wissenschaftlicher Grundlage und nach dem Ethikkodex — unabhängig davon, ob eine Bewohnerin sie persönlich akzeptiert oder nicht.",
      bewertungskriterien: [
        "Mindestens 3 Abgrenzungsmerkmale korrekt benannt",
        "Bezug zur Fallsituation hergestellt",
        "Fachsprache korrekt verwendet",
      ],
    },
  },
];

const EXAM_PHASE2_STEPS: ContentStep[] = [
  {
    stepId: "le01-exam-careplan-02",
    phase: "s2",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 78–84"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Aufgabe 2: Pflegeplanung für Frau H.",
      body: "Erstellen Sie für Frau H. (84 J., Demenz, Nahrungsverweigerung seit 2 Tagen, Trinkmenge 400 ml/24 Std.) eine Pflegeplanung nach dem Pflegeprozess. Benennen Sie: (a) aktuelle und potenzielle Pflegeprobleme, (b) Ressourcen, (c) Pflegeziele, (d) Pflegemaßnahmen.",
    },
    contentB1: {
      title: "Aufgabe 2: Pflegeplanung für Frau H.",
      body: "Frau H. (84 Jahre, Demenz) isst seit 2 Tagen nicht. Sie trinkt sehr wenig (400 ml am Tag). Erstellen Sie eine Pflegeplanung:\n(a) Aktuelle und potenzielle Probleme\n(b) Ressourcen\n(c) Pflegeziele\n(d) Maßnahmen",
    },
    question: {
      fragetext:
        "Erstellen Sie eine Pflegeplanung für Frau H. mit: (a) aktuellen und potenziellen Pflegeproblemen, (b) Ressourcen, (c) Pflegezielen, (d) Pflegemaßnahmen.",
      careplan: {
        patientName: "Frau H.",
        situation:
          "84 Jahre, fortgeschrittene Demenz, Nahrungsverweigerung seit 2 Tagen, Trinkmenge 400 ml/24 Std., trockene Schleimhäute, verminderte Hautturgor, zunehmend apathisch. Nachts unruhig.",
        situationB1:
          "Frau H. ist 84 Jahre alt. Sie hat Demenz. Sie isst seit 2 Tagen nicht. Sie trinkt nur 400 ml am Tag. Ihre Schleimhäute sind trocken. Sie ist schwächer als sonst.",
        steps: [
          {
            phase: "problem",
            prompt:
              "Nennen Sie die aktuellen Pflegeprobleme und die potenziellen Pflegeprobleme von Frau H.",
            promptB1: "Was sind die aktuellen Probleme? Was könnte noch passieren (potenzielle Probleme)?",
            options: [
              {
                text: "Aktuell: Nahrungsverweigerung; unzureichende Flüssigkeitsaufnahme (400 ml/24 Std.); trockene Schleimhäute und verminderte Hautturgor. Potenziell: Dehydratation; Mangelernährung; Obstipation; Sturzgefahr durch Schwäche.",
                isCorrect: true,
                explanation:
                  "Vollständig! Sie haben aktuelle und potenzielle Pflegeprobleme korrekt unterschieden.",
              },
              {
                text: "Problem: Frau H. isst nicht.",
                isCorrect: false,
                explanation:
                  "Das ist ein Teilelement. Die Antwort muss aktuelle UND potenzielle Pflegeprobleme unterscheiden und konkrete Befunde benennen (Trinkmenge, Schleimhäute, Hautturgor).",
              },
            ],
          },
          {
            phase: "ziel",
            prompt:
              "Formulieren Sie die Pflegeziele für Frau H. Die Ziele müssen messbar und terminiert sein.",
            promptB1: "Was soll Frau H. in 24 Stunden erreichen? Schreiben Sie ein konkretes, messbares Ziel.",
            options: [
              {
                text: "Frau H. trinkt innerhalb der nächsten 24 Stunden mindestens 1000 ml; die Nahrungsverweigerung wird als Pflegeproblem systematisch erfasst und evaluiert.",
                isCorrect: true,
                explanation:
                  "Korrekt! Beide Ziele sind messbar (1000 ml, 24 Std.) und konkret auf den Fall bezogen.",
              },
              {
                text: "Frau H. soll mehr trinken und essen.",
                isCorrect: false,
                explanation:
                  "Nicht messbar. Pflegeziele brauchen konkrete Mengen und Zeitangaben: 'Frau H. trinkt innerhalb von 24 Stunden mindestens 1000 ml.'",
              },
            ],
          },
          {
            phase: "massnahme",
            prompt:
              "Planen Sie die Pflegemaßnahmen für Frau H. Die Maßnahmen sollen logisch aus den Zielen abgeleitet sein.",
            promptB1: "Was tun Sie, damit Frau H. mehr trinkt? Schreiben Sie konkrete Maßnahmen.",
            options: [
              {
                text: "Trinkprotokoll führen; Getränke in kleinen Mengen regelmäßig anbieten; Lieblingsgetränke erfragen (ggf. bei Angehörigen); Mundpflege intensivieren; Arzt informieren bei weiterem Rückgang; ggf. Bezugspflege durch akzeptierte Pflegekraft organisieren.",
                isCorrect: true,
                explanation:
                  "Umfassend! Sie kombinieren Monitoring (Trinkprotokoll), aktive Maßnahmen (regelmäßiges Anbieten), Ressourcennutzung (Lieblingsgetränke, Angehörige) und Eskalation (Arzt).",
              },
              {
                text: "Frau H. öfter Wasser anbieten.",
                isCorrect: false,
                explanation:
                  "Das ist ein Ansatz, aber zu unvollständig. Pflegemaßnahmen müssen das Monitoring (Trinkprotokoll), die Ursachenklärung (Lieblingsgetränke), die Mundpflege und die Eskalation umfassen.",
              },
            ],
          },
        ],
      },
    },
  },
];

const EXAM_PHASE3_STEPS: ContentStep[] = [
  {
    stepId: "le01-exam-ft-03",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 80"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-informationssammlung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Aufgabe 3: Informationssammlung nach Pflegeprozess-Schritt 1",
      body: `Amara bemerkt bei Frau H. trockene Schleimhäute und eine verminderte Hautturgor. Im Nachtprotokoll steht: "Bewohnerin lehnt Nahrungsangebot ab." Die Trinkmenge der letzten 24 Stunden beträgt 400 ml. Welche weiteren Informationen muss Amara im Rahmen der Informationssammlung (Schritt 1 des Pflegeprozesses) erheben? Ordnen Sie Ihre Antworten den Kategorien direkte/indirekte und objektive/subjektive Informationen zu.`,
    },
    contentB1: {
      title: "Aufgabe 3: Welche Informationen braucht Amara?",
      body: "Amara sieht: Frau H. hat trockene Schleimhäute und trinkt nur 400 ml am Tag. Was muss Amara noch wissen? Ordnen Sie Ihre Antworten zu: direkt/indirekt und objektiv/subjektiv.",
    },
    question: {
      fragetext:
        "Welche Informationen muss Amara im Rahmen der Informationssammlung (Schritt 1) noch erheben? Ordnen Sie nach direkt/indirekt und objektiv/subjektiv.",
      musterantwort:
        "Direkte Informationen: Beobachtung der Bewohnerin (Hautturgor, Schleimhäute, Bewusstseinslage, Urinfarbe/-menge), Befragung der Bewohnerin selbst (soweit möglich bei Demenz). Indirekte Informationen: Nachtprotokoll, Übergabegespräch, Pflegedokumentation, Befragung von Angehörigen, ärztliche Befunde, Medikamentenliste (Diuretika?). Objektive Informationen: Trinkmenge (400 ml/24 Std.), Hautturgor, Schleimhautzustand, Körpergewicht, Laborwerte (falls vorhanden). Subjektive Informationen: Äußerung der Bewohnerin ('Schmeckt nicht'), Einschätzung der Nachtschwester ('unruhig'), Amaras eigene Beobachtung des Allgemeinzustands.",
      bewertungskriterien: [
        "Alle 4 Informationskategorien korrekt unterschieden",
        "Jeweils mindestens 2 fallbezogene Beispiele",
        "Bezug zum konkreten Fall (nicht nur abstrakte Definitionen)",
      ],
    },
  },
];

const EXAM_PHASE4_STEPS: ContentStep[] = [
  {
    stepId: "le01-exam-cloze-04",
    phase: "s4",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 23", "I Care Pflege S. 78"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Aufgabe 4: Pflegeprozess und vorbehaltene Tätigkeiten",
      body: "Erklären Sie die 6 Schritte des Pflegeprozessmodells nach Fiechter und Meier in der richtigen Reihenfolge. Erläutern Sie anschließend, warum der Pflegeprozess als 'Regelkreis' bezeichnet wird, und begründen Sie, warum er laut § 4 PflBG zu den vorbehaltenen Tätigkeiten zählt.",
    },
    contentB1: {
      title: "Aufgabe 4: Pflegeprozess und vorbehaltene Tätigkeiten",
      body: "Nennen Sie die 6 Schritte des Pflegeprozesses. Erklären Sie: Warum ist es ein Regelkreis? Und warum ist der Pflegeprozess eine vorbehaltene Tätigkeit?",
    },
    question: {
      fragetext:
        "Füllen Sie die Lücken aus: Die 6 Schritte des Pflegeprozesses nach Fiechter und Meier, das Regelkreis-Prinzip und die 3 vorbehaltenen Tätigkeiten nach § 4 PflBG.",
      cloze: {
        textWithBlanks:
          "Das Pflegeprozessmodell nach Fiechter und Meier besteht aus 6 Schritten: (1) [1], (2) Erkennen von Pflegeproblemen und Ressourcen, (3) Festlegung der [2], (4) Planung der Pflegemaßnahmen, (5) Durchführung, (6) [3]. Nach Schritt 6 beginnt der Prozess erneut bei Schritt 1 — deshalb wird er als [4] bezeichnet. Gemäß § 4 PflBG zählen folgende vorbehaltene Tätigkeiten zu den Aufgaben von Pflegefachkräften: (1) Erhebung und Feststellung des [5], (2) Organisation, Gestaltung und Steuerung des Pflegeprozesses, (3) Analyse, Evaluation, Sicherung und Entwicklung der [6] der Pflege.",
        blanks: [
          {
            id: 1,
            correct: "Informationssammlung",
            distractors: ["Pflegediagnose", "Pflegeanamnese", "Bedarfsermittlung"],
          },
          {
            id: 2,
            correct: "Pflegeziele",
            distractors: ["Pflegepläne", "Pflegemaßnahmen", "Pflegestandards"],
          },
          {
            id: 3,
            correct: "Evaluation",
            distractors: ["Dokumentation", "Kontrolle", "Abschluss"],
          },
          {
            id: 4,
            correct: "Regelkreis",
            distractors: ["linearer Prozess", "Stufenmodell", "Entscheidungsbaum"],
          },
          {
            id: 5,
            correct: "Pflegebedarfs",
            distractors: ["Krankheitsbildes", "Pflegestatus", "Gesundheitszustands"],
          },
          {
            id: 6,
            correct: "Qualität",
            distractors: ["Effizienz", "Kompetenz", "Sicherheit"],
          },
        ],
      },
    },
  },
];

const EXAM_PHASE5_STEPS: ContentStep[] = [
  {
    stepId: "le01-exam-ft-05",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 753–754", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Aufgabe 5: Ethische Analyse der Situation",
      body: "Amara wird von Frau H. rassistisch beleidigt. Analysieren Sie die Situation anhand der 4 ethischen Prinzipien nach Beauchamp und Childress (Autonomie, Fürsorge, Gerechtigkeit, Nicht-Schaden). Entwickeln Sie einen Vorschlag, wie das Team in der Dienstbesprechung reagieren sollte.",
    },
    contentB1: {
      title: "Aufgabe 5: Ethische Analyse",
      body: "Frau H. beleidigt Amara wegen ihrer Hautfarbe. Analysieren Sie die Situation mit den 4 ethischen Prinzipien:\n• Autonomie\n• Fürsorge\n• Gerechtigkeit\n• Nicht-Schaden\nWas soll das Team in der Dienstbesprechung entscheiden?",
    },
    question: {
      fragetext:
        "Analysieren Sie die Situation anhand der 4 ethischen Prinzipien nach Beauchamp und Childress und entwickeln Sie einen Vorschlag für die Teamreaktion.",
      musterantwort:
        "Autonomie: Frau H. hat das Recht auf Selbstbestimmung — aber Demenz schränkt die Einsichtsfähigkeit ein. Die Äußerungen sind möglicherweise krankheitsbedingt enthemmt, nicht Ausdruck einer bewussten Entscheidung. Fürsorge: Das Team muss sowohl für Frau H. (bestmögliche Pflege trotz Demenz) als auch für Amara (Schutz vor psychischer Belastung) sorgen. Gerechtigkeit: Amara hat das Recht auf einen diskriminierungsfreien Arbeitsplatz. Frau H. hat das Recht auf gleiche Pflege wie alle Bewohnerinnen. Nicht-Schaden: Rassistische Äußerungen schaden Amara psychisch. Aber auch ein Abzug von Amara könnte schaden — es bestätigt das diskriminierende Verhalten. Teamreaktion: Klare Haltung gegen Rassismus auch bei dementen Bewohnerinnen; Bezugspflege-Konzept prüfen; Amara nicht allein lassen; Supervision anbieten; keine stillschweigende Akzeptanz.",
      bewertungskriterien: [
        "Alle 4 ethischen Prinzipien korrekt auf den Fall angewendet",
        "Spannungsfeld zwischen den Prinzipien erkannt",
        "Konkreter und umsetzbarer Teamvorschlag",
        "Differenzierte Betrachtung (nicht schwarz-weiß)",
      ],
    },
  },
];

const EXAM_PHASE6_STEPS: ContentStep[] = [
  {
    stepId: "le01-exam-ft-06",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 23", "I Care Pflege S. 38"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-vorbehalte-taetigkeiten",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Aufgabe 6: Vorbehaltene Tätigkeiten nach § 4 PflBG",
      body: "Das Pflegeberufegesetz (PflBG) definiert in § 4 sogenannte 'vorbehaltene Tätigkeiten'. Nennen Sie die drei vorbehaltenen Tätigkeiten. Erklären Sie, warum diese ausschließlich von Pflegefachkräften ausgeübt werden dürfen, und erläutern Sie, welche Bedeutung dies für Amaras professionelles Handeln auf der geriatrischen Station hat.",
    },
    contentB1: {
      title: "Aufgabe 6: Vorbehaltene Tätigkeiten",
      body: "Das PflBG sagt: Manche Aufgaben dürfen nur Pflegefachkräfte machen (§ 4 PflBG).\n(1) Welche 3 Aufgaben sind das?\n(2) Warum dürfen nur Pflegefachkräfte das?\n(3) Was bedeutet das für Amara auf der geriatrischen Station?",
    },
    question: {
      fragetext:
        "Nennen Sie die 3 vorbehaltenen Tätigkeiten nach § 4 PflBG, begründen Sie den Vorbehalt und erläutern Sie die Bedeutung für Amara.",
      musterantwort:
        "Drei vorbehaltene Tätigkeiten nach § 4 PflBG: (1) Erhebung und Feststellung des Pflegebedarfs, (2) Organisation, Gestaltung und Steuerung des Pflegeprozesses, (3) Analyse, Evaluation, Sicherung und Entwicklung der Qualität der Pflege [I Care Pflege S. 23]. Begründung: Diese Tätigkeiten erfordern eine wissenschaftlich fundierte Ausbildung, systematisches Vorgehen und die Fähigkeit zur eigenverantwortlichen Entscheidungsfindung. Nur Pflegefachkräfte verfügen über die notwendige Kompetenz, den Pflegeprozess eigenständig zu steuern. Bedeutung für Amara: Als angehende Pflegefachfrau im 2. Ausbildungsjahr lernt sie, diese vorbehaltenen Tätigkeiten auszuüben. Die Pflegeplanung für Frau H. ist ein direktes Beispiel: Sie erhebt den Pflegebedarf (trockene Schleimhäute, verminderte Trinkmenge), steuert den Pflegeprozess (Planung der Maßnahmen) und evaluiert die Wirksamkeit.",
      bewertungskriterien: [
        "Alle 3 vorbehaltenen Tätigkeiten korrekt benannt",
        "Begründung für den Vorbehalt fachlich schlüssig",
        "Konkreter Fallbezug zu Amaras Situation hergestellt",
      ],
    },
  },
];

// === EXPORT ===

export const LE01_PRUEFUNGSFALL: ExamCase = {
  caseId: "le01-exam-amara",
  patient: {
    patientId: "pat-amara-01",
    name: "Amara D.",
    alter: 28,
    geschlecht: "w",
    diagnosen: ["Pflegeschülerin im 2. Ausbildungsjahr"],
    sourceLEs: ["le-01"],
    steckbrief:
      "28-jährige Pflegeschülerin, eritreisch, seit 4 Jahren in Deutschland, Ausbildungsduldung. Fachlich kompetent, im 2. Ausbildungsjahr. Praxiseinsatz auf geriatrischer Station. Betreut Frau H. (84 J., Demenz), die sie wegen ihrer Hautfarbe rassistisch ablehnt. Frau H. verweigert seit 2 Tagen Essen und Trinken — Amara muss professionell handeln trotz persönlicher Ablehnung.",
  },
  titel: "Amara D. — Professionelles Handeln unter schwierigen Bedingungen",
  schwierigkeit: "mittel",
  sourceLEs: ["le-01"],
  phasen: [
    {
      phaseId: "le01-exam-phase1",
      zeitpunkt: "Situationsanalyse: Berufliche Pflege",
      kontext:
        "Sie sind Pflegeschüler*in im 2. Ausbildungsjahr auf einer geriatrischen Station. Ihre Kollegin Amara D. (28 Jahre) betreut seit drei Wochen Frau H. (84 Jahre). Frau H. leidet an einer fortgeschrittenen Demenz und ist in allen Aktivitäten des täglichen Lebens auf Unterstützung angewiesen. Seit dem ersten Tag lehnt Frau H. Amara ab. Sie sagt wiederholt: 'Ich will keine Schwarze. Holt mir eine richtige Schwester.' Amara verhält sich professionell. Sie pflegt Frau H. genauso sorgfältig wie alle anderen Bewohnerinnen. Doch die Situation belastet sie.",
      kontextB1:
        "Sie arbeiten auf einer geriatrischen Station. Amara D. (28 Jahre) pflegt Frau H. (84 Jahre). Frau H. hat Demenz. Sie lehnt Amara ab und beleidigt sie. Amara arbeitet trotzdem professionell.",
      sourceLE: "le-01",
      steps: EXAM_PHASE1_STEPS,
    },
    {
      phaseId: "le01-exam-phase2",
      zeitpunkt: "Pflegeplanung: Nahrungsverweigerung und Dehydratation",
      kontext:
        "Seit zwei Tagen hat sich die Lage verschärft: Frau H. verweigert das Essen und trinkt nur noch sehr wenig. Beim Mundpflege-Rundgang bemerken Sie gemeinsam mit Amara: Die Schleimhäute von Frau H. sind trocken, die Hautturgor ist vermindert, und sie wirkt zunehmend apathisch. Die Trinkmengenerfassung der letzten 24 Stunden ergibt 400 ml. Im Übergabegespräch berichtet die Nachtschwester, dass Frau H. in der Nacht unruhig war. Im Nachtprotokoll steht: 'Bewohnerin lehnt Nahrungsangebot ab. Begründung: Schmeckt nicht. Trinkt nur auf Aufforderung wenige Schlucke.' Die Stationsleitung bittet Sie und Amara, gemeinsam eine Pflegeplanung für das Problem der Nahrungsverweigerung und drohenden Dehydratation zu erstellen.",
      kontextB1:
        "Frau H. isst seit 2 Tagen nicht. Sie trinkt nur 400 ml am Tag. Ihre Schleimhäute sind trocken. Die Stationsleitung sagt: Erstellen Sie eine Pflegeplanung.",
      sourceLE: "le-01",
      steps: EXAM_PHASE2_STEPS,
    },
    {
      phaseId: "le01-exam-phase3",
      zeitpunkt: "Informationssammlung nach Pflegeprozess",
      kontext:
        "Amara bemerkt bei Frau H. trockene Schleimhäute und eine verminderte Hautturgor. Im Nachtprotokoll steht: 'Bewohnerin lehnt Nahrungsangebot ab.' Die Trinkmenge der letzten 24 Stunden beträgt 400 ml. Schritt 1 des Pflegeprozesses nach Fiechter und Meier verlangt eine systematische Informationssammlung.",
      kontextB1:
        "Amara sieht: Frau H. hat trockene Schleimhäute. Sie trinkt zu wenig. Schritt 1 des Pflegeprozesses: Informationen sammeln.",
      sourceLE: "le-01",
      steps: EXAM_PHASE3_STEPS,
    },
    {
      phaseId: "le01-exam-phase4",
      zeitpunkt: "Pflegeprozess und vorbehaltene Tätigkeiten",
      kontext:
        "Die Praxisanleiterin nutzt die Situation, um mit Amara den Pflegeprozess nach Fiechter und Meier zu besprechen und die Bedeutung der vorbehaltenen Tätigkeiten nach § 4 PflBG zu klären.",
      kontextB1:
        "Die Anleiterin erklärt: Der Pflegeprozess hat 6 Schritte. Er ist ein Regelkreis. Bestimmte Tätigkeiten dürfen nur Pflegefachkräfte machen (§ 4 PflBG).",
      sourceLE: "le-01",
      steps: EXAM_PHASE4_STEPS,
    },
    {
      phaseId: "le01-exam-phase5",
      zeitpunkt: "Ethische Analyse: Rassismus und Demenz",
      kontext:
        "Das Team soll in der nächsten Dienstbesprechung klären, wie mit der rassistischen Ablehnung gegenüber Amara umgegangen werden soll. Die Reaktionen im Team sind gespalten: Einige Kolleginnen sagen: 'Die Frau hat Demenz, die meint das nicht so.' Andere sagen: 'Rassismus ist Rassismus — auch bei Demenz.'",
      kontextB1:
        "Im Team gibt es verschiedene Meinungen. Einige sagen: 'Frau H. hat Demenz, sie meint es nicht so.' Andere sagen: 'Rassismus ist Rassismus.' Was ist richtig? Die 4 ethischen Prinzipien helfen bei der Analyse.",
      sourceLE: "le-01",
      steps: EXAM_PHASE5_STEPS,
    },
    {
      phaseId: "le01-exam-phase6",
      zeitpunkt: "Rechtliche Grundlagen: § 4 PflBG",
      kontext:
        "Die Stationsleitung erklärt Amara, welche Tätigkeiten nach § 4 PflBG ausschließlich Pflegefachkräften vorbehalten sind. Diese Kenntnis ist für Amaras Berufspraktik entscheidend.",
      kontextB1:
        "Das PflBG (Pflegeberufegesetz) regelt: Was dürfen nur Pflegefachkräfte? Amara lernt, was § 4 PflBG bedeutet.",
      sourceLE: "le-01",
      steps: EXAM_PHASE6_STEPS,
    },
  ],
  bloomRange: [2, 3],
  zeitLimitMinuten: 60,
};

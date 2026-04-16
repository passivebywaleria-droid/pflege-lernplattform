// LE-06 Prüfungs-Tab: Prüfungsfall — 1 ExamCase
// Quelle: pruefung-plan.md | Dozentin Phase 2 | 2026-04-16
// CE02, KB I.1, Drittel 1, Bloom B1–B3
// Kein KI-Feedback während der Bearbeitung (PflAPrV-Simulation)

import type { ExamCase, ContentStep } from "../_types";

// === PRÜFUNGSFALL: Walter Brückner ===
// Neuer Patient — nicht im Fall-Tab. Setting: Innere Medizin.
// 74 Jahre, Pneumonie + Diabetes + Adipositas + beginnende Demenz.

const EXAM_PHASE1_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-01",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 410-416"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 27,
    contentC1: {
      title: "Aufgabe 1: Virchow-Trias und Thromboseprophylaxe",
      body: "Nenne die drei Faktoren der Virchow-Trias und ordne jedem Faktor eine konkrete Maßnahme der Thromboseprophylaxe bei Herrn Brückner zu.",
    },
    contentB1: {
      title: "Aufgabe 1: Virchow-Trias und Thromboseprophylaxe",
      body: "Die Virchow-Trias erklärt, warum eine Thrombose entsteht. Es sind 3 Faktoren. Nenne die 3 Faktoren. Ordne jedem Faktor eine konkrete Maßnahme bei Herrn Brückner zu.",
    },
    question: {
      fragetext:
        "Nenne die drei Faktoren der Virchow-Trias und ordne jedem Faktor eine konkrete Maßnahme der Thromboseprophylaxe bei Herrn Brückner zu.",
      musterantwort:
        "1. Veränderung der Blutströmungsgeschwindigkeit (Stase): Maßnahme z.B. Fußbewegungsübungen (Muskelvenenpumpe aktivieren), Frühmobilisation, MTS. 2. Veränderung der Gefäßwand (Endothelschaden): Maßnahme z.B. keine einschnürende Kleidung, Beine nicht übereinanderschlagen, schonender Umgang mit Venenzugängen. 3. Veränderung der Blutzusammensetzung (Hyperkoagulabilität): Maßnahme z.B. ausreichende Flüssigkeitszufuhr (mind. 1,5 l/Tag), medikamentöse Prophylaxe nach ärztlicher Anordnung (z.B. niedermolekulares Heparin).",
      bewertungskriterien: [
        "Alle 3 Faktoren korrekt benannt (3 Punkte)",
        "Jedem Faktor mindestens 1 konkrete Maßnahme zugeordnet (3 Punkte)",
        "Maßnahmen sind auf Herrn Brückner bezogen (nicht abstrakt) (2 Punkte)",
        "Fachsprachlich korrekt (1 Punkt)",
      ],
    },
  },
];

const EXAM_PHASE2_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-02",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 399-400"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 27,
    contentC1: {
      title: "Aufgabe 2: 30°-Seitenlage vs. 90°-Seitenlage",
      body: "Erkläre, warum die 30°-Seitenlage für die Dekubitusprophylaxe besser geeignet ist als die 90°-Seitenlage. Beziehe dich auf die Druckverteilung an den Prädilektionsstellen.",
    },
    contentB1: {
      title: "Aufgabe 2: 30°-Seitenlage vs. 90°-Seitenlage",
      body: "Die 30°-Seitenlage ist besser als die 90°-Seitenlage zum Schutz vor Dekubitus. Erkläre warum. Nutze dabei die Begriffe Druck und Prädilektionsstellen.",
    },
    question: {
      fragetext:
        "Erkläre, warum die 30°-Seitenlage für die Dekubitusprophylaxe besser geeignet ist als die 90°-Seitenlage. Beziehe dich auf die Druckverteilung an den Prädilektionsstellen.",
      musterantwort:
        "In der 90°-Seitenlage liegt der Patient direkt auf dem Trochanter major — einem der wichtigsten Prädilektionsstellen. Das gesamte Körpergewicht drückt auf eine kleine Fläche, der Druck pro cm² ist hoch. In der 30°-Seitenlage liegt der Patient schräg, das Gewicht verteilt sich auf eine große Fläche (Rücken + Gesäßhälfte). Der Trochanter major wird NICHT belastet. Bei Herrn Brückner mit BMI 34 ist die Druckverteilung besonders wichtig, weil das hohe Gewicht den Auflagedruck zusätzlich erhöht.",
      bewertungskriterien: [
        "Druckverteilung korrekt erklärt (3 Punkte)",
        "Trochanter major als Prädilektionsstelle benannt (2 Punkte)",
        "Vergleich 30° vs. 90° nachvollziehbar (2 Punkte)",
        "Bezug auf Herrn Brückners Adipositas (1 Punkt)",
      ],
    },
  },
];

const EXAM_PHASE3_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-03",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 398"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 27,
    contentC1: {
      title: "Aufgabe 3: Braden-Score interpretieren",
      body: "Herr Brückner hat einen Braden-Score von 15 Punkten. Was sagt dir dieser Wert? Welche Konsequenzen hat er für deine Pflegeplanung?",
    },
    contentB1: {
      title: "Aufgabe 3: Braden-Score interpretieren",
      body: "Herr Brückner hat einen Braden-Score von 15 Punkten. Was bedeutet das? Was musst du jetzt in der Pflegeplanung tun?",
    },
    question: {
      fragetext:
        "Herr Brückner hat einen Braden-Score von 15 Punkten. Was sagt dir dieser Wert? Welche Konsequenzen hat er für deine Pflegeplanung?",
      musterantwort:
        "Braden-Skala: 6 Subskalen (Sensorische Wahrnehmung, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte), Score-Bereich 6-23. 15 Punkte = leicht erhöhtes Dekubitusrisiko (Schwellenwert für Risikopatient liegt je nach Quelle bei 18-20). Konsequenzen: Regelmäßige Hautinspektion (mind. 1× pro Schicht), individueller Positionierungsplan (Intervall bestimmen, nicht starr alle 2 Stunden), druckverteilende Matratze prüfen, Ernährungszustand verbessern (Diabetes beachten!), Mobilisation so früh wie möglich. Bei Herrn Brückner: Adipositas erhöht Scherkräfte, Diabetes beeinträchtigt Wundheilung, Demenz erschwert Kooperation bei Positionswechseln.",
      bewertungskriterien: [
        "Braden-Skala korrekt erklärt (2 Punkte)",
        "Score-Interpretation nachvollziehbar (2 Punkte)",
        "Mindestens 3 konkrete Konsequenzen für die Pflegeplanung (3 Punkte)",
        "Bezug auf Herrn Brückners spezifische Risikofaktoren (2 Punkte)",
      ],
    },
  },
];

const EXAM_PHASE4_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-careplan-04",
    phase: "s4",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 355ff"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Aufgabe 4: Mobilisationsplan für 3 Tage",
      body: "Erstelle einen Mobilisationsplan für Herrn Brückner für die nächsten 3 Tage. Berücksichtige seine Vorerkrankungen und den aktuellen Zustand.",
    },
    contentB1: {
      title: "Aufgabe 4: Mobilisationsplan für 3 Tage",
      body: "Erstelle einen Mobilisationsplan für Herrn Brückner für die nächsten 3 Tage. Denke an seine Vorerkrankungen: Pneumonie, Diabetes, Adipositas, Demenz.",
    },
    question: {
      fragetext:
        "Erstelle einen Mobilisationsplan für Herrn Brückner für die nächsten 3 Tage. Berücksichtige seine Vorerkrankungen und den aktuellen Zustand.",
      careplan: {
        patientName: "Herr Brückner",
        situation:
          "74 Jahre, beidseitige Pneumonie, Diabetes mellitus Typ 2, Adipositas (BMI 34), beginnende Demenz (MMST 22/30). Seit 3 Tagen stationär. Fieber 38,8 °C. Barthel-Index 35 Punkte. Braden-Score 15 Punkte. Stark geschwächt, liegt überwiegend im Bett.",
        situationB1:
          "Herr Brückner ist 74 Jahre alt. Er hat eine Pneumonie, Diabetes, Adipositas und beginnende Demenz. Er hat Fieber (38,8 °C). Er liegt meistens im Bett. Er ist stark geschwächt.",
        steps: [
          {
            phase: "problem",
            prompt:
              "Welche Probleme und Risiken musst du bei der Mobilisation von Herrn Brückner berücksichtigen?",
            promptB1:
              "Welche Probleme und Risiken hat Herr Brückner? Was musst du beachten, wenn du ihn mobilisierst?",
            options: [
              {
                text: "Fieber (Kreislaufrisiko), Adipositas (Belastbarkeit), Diabetes (BZ-Schwankungen), Demenz (Anleitung erschwert), Pneumonie (SpO2/Atemnot), Schwäche (Sturzrisiko).",
                isCorrect: true,
                explanation:
                  "Vollständig! Du hast alle relevanten Risikofaktoren erkannt, die den Mobilisationsplan beeinflussen.",
              },
              {
                text: "Herr Brückner ist krank und sollte im Bett bleiben.",
                isCorrect: false,
                explanation:
                  "Zu pauschal. Immobilität wäre sogar gefährlich (Pneumonie, Thrombose, Dekubitus). Du musst die konkreten Risiken benennen, um einen stufenweisen Plan zu erstellen.",
              },
            ],
          },
          {
            phase: "ziel",
            prompt:
              "Formuliere Mobilisationsziele für Tag 1, Tag 2 und Tag 3. Die Ziele müssen messbar und auf den Zustand abgestimmt sein.",
            promptB1:
              "Was soll Herr Brückner an Tag 1, Tag 2 und Tag 3 schaffen? Schreibe konkrete Ziele.",
            options: [
              {
                text: "Tag 1: Bettkantensitzen 2× tägl. (5-10 Min.), passive Fußbewegungsübungen. Tag 2: Transfer Bett→Stuhl mit Hilfe, Bettkantensitzen 10-15 Min. Tag 3: Kurze Gehstrecke (Zimmer), Sitzen am Tisch zu den Mahlzeiten.",
                isCorrect: true,
                explanation:
                  "Korrekt! Die Ziele zeigen eine stufenweise Steigerung und sind konkret messbar.",
              },
              {
                text: "Herr Brückner soll wieder mobil werden.",
                isCorrect: false,
                explanation:
                  "Nicht messbar. Pflegeziele brauchen konkrete Zeit- und Mengenangaben. Schreibe: 'Tag 1: Bettkantensitzen 2× tägl., je 5-10 Min.'",
              },
            ],
          },
          {
            phase: "massnahme",
            prompt:
              "Plane die konkreten Mobilisationsmaßnahmen für die 3 Tage inkl. Vorsichtsmaßnahmen bei Vorerkrankungen.",
            promptB1:
              "Was machst du konkret an Tag 1, Tag 2 und Tag 3? Schreibe die Maßnahmen auf. Denk an die Vorsicht bei Diabetes, Pneumonie und Demenz.",
            options: [
              {
                text: "Tag 1: Mobilisation an die Bettkante (2× tägl., je 5-10 Min.), Sitzen mit erhöhtem Oberkörper, passive Fußbewegungsübungen, Atemübungen (Kontaktatmung, Lippenbremse). Cave: Fieber → Kreislauf kontrollieren, BZ vor/nach Mobilisation messen. Tag 2: Bettkantensitzen verlängern (10-15 Min.), erster Transfer Bett→Stuhl mit Hilfe, Toilettengang mit Begleitung, aktive Bewegungsübungen. Cave: Desorientierung → klare kurze Anweisungen, Sturzrisiko. Tag 3: Transfer mit weniger Unterstützung, kurze Gehstrecke (Zimmer), Sitzen am Tisch für Mahlzeiten. Cave: Belastungstoleranz beobachten (SpO2, Atemnot, Puls). Durchgängig: MTS tragen, Positionswechsel im Bett alle 2-3 Stunden, BZ-Kontrollen, Flüssigkeitsbilanz.",
                isCorrect: true,
                explanation:
                  "Umfassend! Du hast stufenweise Steigerung, Prophylaxen und Vorsichtsmaßnahmen für alle Vorerkrankungen integriert.",
              },
              {
                text: "Tag 1-3: Herrn Brückner mobilisieren.",
                isCorrect: false,
                explanation:
                  "Zu unvollständig. Die Pflegemaßnahmen müssen konkrete Handlungen, Zeitangaben, Prophylaxen und Vorsichtsmaßnahmen enthalten.",
              },
            ],
          },
        ],
      },
    },
  },
];

const EXAM_PHASE5_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-05",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 355ff", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Aufgabe 5: Umgang mit Mobilisations-Verweigerung",
      body: 'Herr Brückner verweigert die Mobilisation: „Ich bin krank, lassen Sie mich in Ruhe." Beschreibe dein Vorgehen — von der Gesprächsführung bis zur Dokumentation.',
    },
    contentB1: {
      title: "Aufgabe 5: Umgang mit Mobilisations-Verweigerung",
      body: 'Herr Brückner will nicht mobilisiert werden. Er sagt: „Ich bin krank, lassen Sie mich in Ruhe." Was machst du? Beschreibe Schritt für Schritt: Wie sprichst du mit ihm? Was dokumentierst du?',
    },
    question: {
      fragetext:
        'Herr Brückner verweigert die Mobilisation: „Ich bin krank, lassen Sie mich in Ruhe." Beschreibe dein Vorgehen — von der Gesprächsführung bis zur Dokumentation.',
      musterantwort:
        'Gesprächsführung: Empathie zeigen, Wunsch nach Ruhe ernst nehmen. Kurze, einfache Sätze (Demenz!). Nicht zwingen — Mobilisation gegen den Willen ist keine Option. Konkretes Angebot: „Wir setzen uns nur 5 Minuten an die Bettkante. Wenn es nicht geht, legen wir uns wieder hin." Motivationsstrategien: Konkretes Ziel benennen („Damit Sie bald wieder zu Hause bei Ihrer Frau sein können"), Erfolge benennen („Gestern haben Sie es 3 Minuten geschafft"), Zeitpunkt anpassen (morgens nach Schmerzmedikation, nicht nachmittags bei Müdigkeit). Wenn weiterhin Verweigerung: Respektieren, dokumentieren, Arzt und Team informieren, Pflegeplan anpassen (z.B. häufigere Positionswechsel im Bett als Ersatz). Dokumentation: Verweigerung dokumentieren (Zeitpunkt, Situation, Wortlaut, eigenes Vorgehen, Folgemaßnahmen). Arzt informiert: ja/nein. Alternative Maßnahmen.',
      bewertungskriterien: [
        "Empathische Gesprächsführung erkennbar (2 Punkte)",
        "Demenz-gerechte Kommunikation (kurze Sätze, Wiederholung) (2 Punkte)",
        "Alternativen bei Verweigerung benannt (2 Punkte)",
        "Dokumentation der Verweigerung (2 Punkte)",
        "Ethische Reflexion (Autonomie vs. Fürsorge) (1 Punkt)",
      ],
    },
  },
];

const EXAM_PHASE6_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-06",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 420-421"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Aufgabe 6: Pneumonieprophylaxe nach LISA-Prinzip",
      body: "Erkläre den Zusammenhang zwischen Immobilität und Pneumonie. Welche Maßnahmen der Pneumonieprophylaxe setzt du bei Herrn Brückner ein? Nutze das LISA-Prinzip.",
    },
    contentB1: {
      title: "Aufgabe 6: Pneumonieprophylaxe nach LISA-Prinzip",
      body: "Wie hängen Immobilität und Pneumonie zusammen? Welche Maßnahmen gegen Pneumonie setzt du bei Herrn Brückner ein? Das LISA-Prinzip hilft dabei. LISA = Lungenbelüftung, Infektionen vermeiden, Sekret mobilisieren, Aspiration vermeiden.",
    },
    question: {
      fragetext:
        "Erkläre den Zusammenhang zwischen Immobilität und Pneumonie. Welche Maßnahmen der Pneumonieprophylaxe setzt du bei Herrn Brückner ein? Nutze das LISA-Prinzip.",
      musterantwort:
        "Zusammenhang: Immobilität → flache Atmung (Schonatmung) → Minderbelüftung der unteren Lungenabschnitte → Sekretstau → idealer Nährboden für Erreger → Pneumonie. Bei Herrn Brückner: Die Pneumonie besteht bereits → Ziel ist VERHINDERUNG DER VERSCHLECHTERUNG. LISA-Maßnahmen: L — Lungenbelüftung fördern: Oberkörperhochlagerung, Atemübungen (Kontaktatmung, Lippenbremse, tiefes Einatmen gegen Widerstand), Mobilisation so früh wie möglich. I — Infektionen vermeiden: Händehygiene, Mundpflege (Keimreduktion im Mund-Rachen-Raum), Raumhygiene. S — Sekret mobilisieren: Ausreichende Flüssigkeitszufuhr (Sekret wird dünnflüssiger), Positionswechsel (mobilisiert Sekret), Inhalation nach ärztlicher Anordnung. A — Aspiration vermeiden: Oberkörper erhöht beim Essen, Schluckfähigkeit beobachten (Cave: Desorientierung).",
      bewertungskriterien: [
        "Pathophysiologischer Zusammenhang Immobilität → Pneumonie korrekt (2 Punkte)",
        "Alle 4 LISA-Buchstaben benannt und erklärt (4 Punkte)",
        "Konkrete Maßnahmen pro Buchstabe (2 Punkte)",
        "Bezug auf Herrn Brückners Situation (bereits bestehende Pneumonie) (1 Punkt)",
      ],
    },
  },
];

const EXAM_PHASE7_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-07",
    phase: "s7",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 393", "I Care Pflege S. 399"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Aufgabe 7: Dekubitus Kategorie I erkennen und handeln",
      body: "Herr Brückner zeigt eine nicht wegdrückbare Rötung am Kreuzbein. Beschreibe: (a) Was du siehst, (b) Wie du es klassifizierst, (c) Was du sofort tust, (d) Was du dokumentierst.",
    },
    contentB1: {
      title: "Aufgabe 7: Dekubitus Kategorie I erkennen und handeln",
      body: "Herr Brückner hat eine rote Stelle am Kreuzbein. Wenn du mit dem Finger drückst, bleibt die Rötung. Beschreibe: (a) Was siehst du? (b) Was ist das? (c) Was machst du sofort? (d) Was dokumentierst du?",
    },
    question: {
      fragetext:
        "Herr Brückner zeigt eine nicht wegdrückbare Rötung am Kreuzbein. Beschreibe: (a) Was du siehst, (b) Wie du es klassifizierst, (c) Was du sofort tust, (d) Was du dokumentierst.",
      musterantwort:
        "(a) Beobachtung: Gerötete Hautstelle am Kreuzbein (Sakrum), ca. X cm Durchmesser. Rötung verschwindet bei Fingerdruck NICHT. Haut ist intakt (keine Blase, kein offener Defekt). Umgebende Haut unauffällig. (b) Klassifikation: Dekubitus Kategorie I (nicht wegdrückbare Rötung bei intakter Haut) nach NPUAP/EPUAP. (c) Sofortmaßnahmen: Sofortige Druckentlastung (Positionswechsel, NICHT auf das Kreuzbein lagern), Arzt informieren, Positionierungsintervall verkürzen (z.B. 2-stündlich statt 3-stündlich), Hautpflege (keine Massage der geröteten Stelle!), druckverteilende Unterlage prüfen/anpassen, Ernährung optimieren (Eiweiß, Vitamine). (d) Dokumentation: Lokalisation (Kreuzbein), Größe (Durchmesser in cm), Farbe, Fingertest-Ergebnis (nicht wegdrückbar), Kategorie (I), eingeleitete Maßnahmen, Arzt informiert (ja/nein), nächster Kontrolltermin, Foto (wenn im Haus üblich).",
      bewertungskriterien: [
        "Beobachtung strukturiert und vollständig (2 Punkte)",
        "Korrekte Klassifikation als Kategorie I mit Begründung (2 Punkte)",
        "Sofortmaßnahmen vollständig (mindestens 4 genannt) (3 Punkte)",
        "Dokumentation vollständig (mindestens 5 Parameter) (2 Punkte)",
        "Cave: Massage erwähnt als KONTRAINDIZIERT (1 Punkt)",
      ],
    },
  },
];

const EXAM_PHASE8_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-08",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 437-440"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-sturz",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Aufgabe 8: Sturzprophylaxe bei Demenz",
      body: "Herr Brückner hat eine beginnende Demenz (MMST 22/30). Wie beeinflusst das deine Sturzprophylaxe-Maßnahmen? Nenne 3 spezifische Anpassungen.",
    },
    contentB1: {
      title: "Aufgabe 8: Sturzprophylaxe bei Demenz",
      body: "Herr Brückner hat beginnende Demenz. Er vergisst Dinge und kann sich schlecht orientieren. Wie musst du die Sturzprophylaxe anpassen? Nenne 3 konkrete Anpassungen.",
    },
    question: {
      fragetext:
        "Herr Brückner hat eine beginnende Demenz (MMST 22/30). Wie beeinflusst das deine Sturzprophylaxe-Maßnahmen? Nenne 3 spezifische Anpassungen.",
      musterantwort:
        'Anpassung 1: Umgebungssicherheit erhöhen — Herr Brückner vergisst, die Klingel zu benutzen, und steht unkontrolliert auf. Maßnahmen: Nachtlicht, Hindernisse entfernen, Schuhe statt Socken, niedrige Betthöhe, Klingel sichtbar und erinnerbar (z.B. in die Hand geben, nicht nur auf den Tisch legen). Anpassung 2: Kommunikation vereinfachen — Komplexe Erklärungen wie „Bitte klingeln Sie, wenn Sie aufstehen möchten, damit wir Ihnen helfen können" versteht er nicht oder vergisst sie. Stattdessen: Kurze Sätze, häufige Wiederholung, visuelle Hinweise (Schild an der Bettkante: „Bitte klingeln"). Anpassung 3: Engmaschigere Beobachtung — Herr Brückner kann sein eigenes Sturzrisiko nicht einschätzen (fehlende Einsicht bei Demenz). Desorientierung und psychomotorische Unruhe (besonders abends/nachts = Sundowning) erhöhen das Risiko. Maßnahmen: Häufigere Zimmerkontrolle, Sensormatten (nach ärztlicher Anordnung und ethischer Abwägung), Tagesstruktur anbieten.',
      bewertungskriterien: [
        "3 spezifische Anpassungen benannt (3 Punkte)",
        "Bezug auf Demenz-spezifische Probleme (Vergessen, fehlende Einsicht, Desorientierung) (3 Punkte)",
        'Konkrete Maßnahmen (nicht nur „aufpassen") (2 Punkte)',
        "Ethische Abwägung bei Sensormatten/Fixierung angedeutet (1 Punkt)",
      ],
    },
  },
];

const EXAM_PHASE9_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-careplan-09",
    phase: "s8",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "I Care Pflege S. 392ff",
      "I Care Pflege S. 404ff",
      "I Care Pflege S. 410ff",
      "I Care Pflege S. 420ff",
      "I Care Pflege S. 437ff",
    ],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-prophylaxen",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Aufgabe 9: Vollständiges Prophylaxe-Bündel",
      body: "Plane ein vollständiges Prophylaxe-Bündel für Herrn Brückner. Ordne jeder der 5 Prophylaxen mindestens 2 konkrete Maßnahmen zu.",
    },
    contentB1: {
      title: "Aufgabe 9: Vollständiges Prophylaxe-Bündel",
      body: "Plane ein Prophylaxe-Bündel für Herrn Brückner. Es gibt 5 Prophylaxen: Dekubitus, Thrombose, Pneumonie, Kontrakturen, Sturz. Schreibe zu jeder Prophylaxe mindestens 2 konkrete Maßnahmen.",
    },
    question: {
      fragetext:
        "Plane ein vollständiges Prophylaxe-Bündel für Herrn Brückner. Ordne jeder der 5 Prophylaxen mindestens 2 konkrete Maßnahmen zu.",
      careplan: {
        patientName: "Herr Brückner",
        situation:
          "74 Jahre, Pneumonie, Diabetes mellitus Typ 2, Adipositas (BMI 34), beginnende Demenz. Braden-Score 15, Barthel-Index 35. Stark geschwächt, liegt überwiegend im Bett. Fieber 38,8 °C.",
        situationB1:
          "Herr Brückner ist 74 Jahre alt. Er hat viele Krankheiten: Pneumonie, Diabetes, Adipositas, Demenz. Er liegt meistens im Bett. Er hat ein hohes Risiko für alle Prophylaxe-Themen.",
        steps: [
          {
            phase: "problem",
            prompt:
              "Welche 5 Prophylaxen sind bei Herrn Brückner erforderlich? Begründe kurz, warum jede relevant ist.",
            promptB1:
              "Welche 5 Prophylaxen braucht Herr Brückner? Warum ist jede wichtig?",
            options: [
              {
                text: "Dekubitus (Immobilität + Braden 15 + Adipositas), Thrombose (Immobilität + Adipositas), Pneumonie (besteht bereits, Verschlechterung verhindern), Kontraktur (Bettlägerigkeit), Sturz (Demenz + Schwäche + Desorientierung).",
                isCorrect: true,
                explanation:
                  "Vollständig! Du hast alle 5 Prophylaxen korrekt auf Herrn Brückners Risikofaktoren bezogen.",
              },
              {
                text: "Alle Prophylaxen sind wichtig.",
                isCorrect: false,
                explanation:
                  "Zu pauschal. Die Begründung pro Prophylaxe muss konkret auf die Risikofaktoren des Patienten eingehen.",
              },
            ],
          },
          {
            phase: "ziel",
            prompt:
              "Formuliere ein übergeordnetes Pflegeziel für das gesamte Prophylaxe-Bündel.",
            promptB1:
              "Was ist das Hauptziel für alle 5 Prophylaxen zusammen? Schreibe ein kurzes Ziel.",
            options: [
              {
                text: "Herr Brückner entwickelt während des Krankenhausaufenthalts keine Immobilitätsfolgen (Dekubitus, Thrombose, Verschlechterung der Pneumonie, Kontrakturen, Sturz). Er wird stufenweise mobilisiert und erreicht den Vor-Erkrankungs-Zustand (Barthel 85).",
                isCorrect: true,
                explanation:
                  "Korrekt! Das Ziel umfasst das gesamte Bündel und ist konkret am Vor-Zustand (Barthel 85) ausgerichtet.",
              },
              {
                text: "Herr Brückner soll nicht krank werden.",
                isCorrect: false,
                explanation:
                  "Zu unkonkret. Pflegeziele brauchen messbare Parameter (z.B. Barthel-Index) und konkrete Negativ-Outcomes, die vermieden werden sollen.",
              },
            ],
          },
          {
            phase: "massnahme",
            prompt:
              "Ordne jeder der 5 Prophylaxen mindestens 2 konkrete Maßnahmen zu. Berücksichtige Adipositas, Diabetes und Demenz.",
            promptB1:
              "Schreibe pro Prophylaxe mindestens 2 konkrete Maßnahmen. Denk an Adipositas, Diabetes und Demenz.",
            options: [
              {
                text: "Dekubitus: (1) Positionswechsel alle 2-3 Stunden mit Positionierungsprotokoll, (2) Hautinspektion 1× pro Schicht an allen Prädilektionsstellen (Kreuzbein, Fersen, Schulterblätter) inkl. Fingertest, (3) Druckverteilende Matratze (Adipositas!), (4) Ernährungsoptimierung (Protein, cave Diabetes). Thrombose: (1) MTS anziehen (morgens vor dem Aufstehen), (2) Fußbewegungsübungen 3× tägl. (Muskelvenenpumpe), (3) Ausreichende Flüssigkeitszufuhr (mind. 1,5 l/Tag), (4) Medikamentöse Prophylaxe nach ärztlicher Anordnung. Pneumonie: (1) Oberkörperhochlagerung (30-45°), (2) Atemübungen anleiten (Kontaktatmung, Lippenbremse), (3) Mobilisation so früh wie möglich, (4) Mundpflege (Keimreduktion). Kontraktur: (1) Füße in Funktionsstellung lagern (Spitzfuß-Prophylaxe), (2) Passive Bewegungsübungen der Extremitäten 2× tägl., (3) Bei Besserung: aktive Übungen anleiten. Sturz: (1) Nachtlicht, Hindernisse entfernen, (2) Klingel in Reichweite (in die Hand geben — Demenz!), (3) Begleitung bei allen Transfers, (4) Schuhe statt Socken.",
                isCorrect: true,
                explanation:
                  "Umfassend! Alle 5 Prophylaxen sind mit mindestens 2 konkreten Maßnahmen versehen, und die Vorerkrankungen werden berücksichtigt.",
              },
              {
                text: "Dekubitus: Umlagern. Thrombose: MTS. Pneumonie: Atemübungen. Kontraktur: Bewegen. Sturz: Aufpassen.",
                isCorrect: false,
                explanation:
                  "Zu knapp. Jede Prophylaxe braucht mindestens 2 konkrete, auf Herrn Brückner bezogene Maßnahmen mit Häufigkeit, Technik und Vorsichtsmaßnahmen.",
              },
            ],
          },
        ],
      },
    },
  },
];

const EXAM_PHASE10_STEPS: ContentStep[] = [
  {
    stepId: "le06-exam-ft-10",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["I Care Pflege S. 438"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 27,
    contentC1: {
      title: "Aufgabe 10: Timed-Up-and-Go-Test",
      body: "Erkläre den Timed-Up-and-Go-Test: Ablauf, Interpretation der Ergebnisse, und warum er bei Herrn Brückner aktuell möglicherweise nicht durchführbar ist.",
    },
    contentB1: {
      title: "Aufgabe 10: Timed-Up-and-Go-Test",
      body: "Der Timed-Up-and-Go-Test (TUG) misst die Mobilität. Erkläre: (a) Wie läuft der Test ab? (b) Was bedeuten die Ergebnisse? (c) Warum kann Herr Brückner den Test aktuell vielleicht nicht machen?",
    },
    question: {
      fragetext:
        "Erkläre den Timed-Up-and-Go-Test: Ablauf, Interpretation der Ergebnisse, und warum er bei Herrn Brückner aktuell möglicherweise nicht durchführbar ist.",
      musterantwort:
        "Ablauf: Patient sitzt auf einem Stuhl mit Armlehnen. Auf Kommando: Aufstehen, 3 Meter gehen (normales Gehtempo), Umdrehen, zurückgehen, hinsetzen. Zeit wird gemessen. Interpretation: Unter 10 Sekunden: Alltagsmobilität uneingeschränkt. 10-19 Sekunden: Geringe Mobilitätseinschränkung, Sturzrisiko leicht erhöht. 20-29 Sekunden: Funktionelle Mobilitätseinschränkung, Sturzrisiko erhöht. Ab 30 Sekunden: Ausgeprägte Mobilitätseinschränkung, hohes Sturzrisiko, Hilfsmittel nötig. Warum aktuell nicht durchführbar: Herr Brückner hat Fieber (38,8 °C), ist stark geschwächt, liegt überwiegend im Bett (Barthel-Index 35), ist desorientiert (Demenz + Infektion). Der Test erfordert sicheres Stehen und Gehen — das ist aktuell nicht gegeben. Risiko eines Sturzes während des Tests. Test sollte durchgeführt werden, sobald sich der Allgemeinzustand stabilisiert hat.",
      bewertungskriterien: [
        "Ablauf korrekt beschrieben (3 Punkte)",
        "Interpretation mit Zeitwerten korrekt (3 Punkte)",
        "Begründung der Nicht-Durchführbarkeit bei Herrn Brückner nachvollziehbar (3 Punkte)",
        "Fachsprachlich korrekt (1 Punkt)",
      ],
    },
  },
];

// === EXPORT ===

export const LE06_PRUEFUNGSFALL: ExamCase = {
  caseId: "exam-brueckner-mobilitaet",
  patient: {
    patientId: "pat-brueckner-01",
    name: "Walter Brückner",
    alter: 74,
    geschlecht: "m",
    diagnosen: [
      "Beidseitige Pneumonie (ambulant erworben)",
      "Diabetes mellitus Typ 2",
      "Adipositas (BMI 34)",
      "Beginnende Demenz (MMST 22/30)",
    ],
    sourceLEs: ["le-06"],
    steckbrief:
      "74-jähriger Patient auf der Inneren Medizin. Seit 3 Tagen stationär wegen beidseitiger Pneumonie. Hohes Fieber (38,8 °C), stark geschwächt, liegt überwiegend im Bett. Barthel-Index 35, Braden-Score 15. Vorerkrankungen: Diabetes mellitus Typ 2, Adipositas (BMI 34), beginnende Demenz (MMST 22/30). Lebt mit seiner Ehefrau in einer barrierefreien Erdgeschosswohnung. Hochrisikopatient für alle Immobilitätsfolgen — das gesamte Prophylaxe-Bündel muss angewendet werden, mit besonderer Berücksichtigung der kognitiven Einschränkungen.",
  },
  titel: "Herr Brückner — Prophylaxe-Bündel bei Pneumonie und Demenz",
  schwierigkeit: "mittel",
  sourceLEs: ["le-06"],
  phasen: [
    {
      phaseId: "le06-exam-phase-01",
      zeitpunkt: "Aufgabe 1: Thromboseprophylaxe — Virchow-Trias",
      kontext:
        "Herr Walter Brückner (74) liegt seit 3 Tagen auf der Inneren Medizin mit einer beidseitigen Pneumonie. Durch die Immobilität, sein hohes Körpergewicht (BMI 34) und die reduzierte Flüssigkeitsaufnahme besteht ein deutlich erhöhtes Thromboserisiko. Die Pflegeplanung muss die drei Faktoren der Virchow-Trias berücksichtigen.",
      kontextB1:
        "Herr Brückner (74) liegt seit 3 Tagen im Bett. Er hat eine Pneumonie und Adipositas. Er trinkt wenig. Sein Thromboserisiko ist hoch. Die Virchow-Trias beschreibt 3 Faktoren, die zu einer Thrombose führen.",
      sourceLE: "le-06",
      steps: EXAM_PHASE1_STEPS,
    },
    {
      phaseId: "le06-exam-phase-02",
      zeitpunkt: "Aufgabe 2: Dekubitusprophylaxe — 30° vs. 90° Seitenlage",
      kontext:
        "Bei der Dekubitusprophylaxe ist die Wahl der Positionierung entscheidend. Herr Brückner hat durch Adipositas (BMI 34) einen hohen Auflagedruck. Die Entscheidung zwischen 30°- und 90°-Seitenlage beeinflusst direkt die Druckverteilung an den Prädilektionsstellen.",
      kontextB1:
        "Herr Brückner muss regelmäßig umgelagert werden. Es gibt die 30°-Seitenlage und die 90°-Seitenlage. Eine Position ist besser als die andere für den Schutz vor Dekubitus.",
      sourceLE: "le-06",
      steps: EXAM_PHASE2_STEPS,
    },
    {
      phaseId: "le06-exam-phase-03",
      zeitpunkt: "Aufgabe 3: Braden-Score interpretieren",
      kontext:
        "Bei der Aufnahme wurde bei Herrn Brückner ein Braden-Score von 15 Punkten erhoben. Dieser Wert muss korrekt interpretiert werden, damit die Pflegeplanung passgenau erfolgen kann. Zusätzlich beeinflussen Adipositas, Diabetes und Demenz die konkreten Maßnahmen.",
      kontextB1:
        "Herr Brückner hat einen Braden-Score von 15 Punkten. Die Braden-Skala misst das Dekubitusrisiko. Der Wert 15 muss richtig eingeordnet werden.",
      sourceLE: "le-06",
      steps: EXAM_PHASE3_STEPS,
    },
    {
      phaseId: "le06-exam-phase-04",
      zeitpunkt: "Aufgabe 4: Mobilisationsplan für 3 Tage",
      kontext:
        "Die ärztliche Anordnung lautet: Frühmobilisation, soweit der Allgemeinzustand es zulässt. Herr Brückner ist aktuell stark geschwächt (Fieber, Barthel 35). Der Mobilisationsplan muss stufenweise aufgebaut sein und alle Vorerkrankungen (Pneumonie, Diabetes, Adipositas, Demenz) berücksichtigen.",
      kontextB1:
        "Der Arzt sagt: Herr Brückner soll früh mobilisiert werden. Aber er ist schwach. Du brauchst einen stufenweisen Plan für die nächsten 3 Tage.",
      sourceLE: "le-06",
      steps: EXAM_PHASE4_STEPS,
    },
    {
      phaseId: "le06-exam-phase-05",
      zeitpunkt: "Aufgabe 5: Umgang mit Mobilisations-Verweigerung",
      kontext:
        'Als du Herrn Brückner morgens mobilisieren möchtest, verweigert er: „Ich bin krank, lassen Sie mich in Ruhe." Als Pflegekraft musst du professionell reagieren — empathisch, aber auch fachlich fundiert, dabei die Demenz berücksichtigend und alles dokumentieren.',
      kontextB1:
        'Du willst Herrn Brückner mobilisieren. Er will nicht. Er sagt: „Ich bin krank, lassen Sie mich in Ruhe." Wie reagierst du? Was dokumentierst du?',
      sourceLE: "le-06",
      steps: EXAM_PHASE5_STEPS,
    },
    {
      phaseId: "le06-exam-phase-06",
      zeitpunkt: "Aufgabe 6: Pneumonieprophylaxe — LISA-Prinzip",
      kontext:
        "Herr Brückner hat bereits eine Pneumonie — das Ziel der Pneumonieprophylaxe ist nun, eine Verschlechterung zu verhindern. Das LISA-Prinzip (Lungenbelüftung, Infektionen vermeiden, Sekret mobilisieren, Aspiration vermeiden) strukturiert die Maßnahmen.",
      kontextB1:
        "Herr Brückner hat schon eine Pneumonie. Es darf nicht schlimmer werden. Das LISA-Prinzip hilft bei der Pneumonieprophylaxe. LISA = Lungenbelüftung, Infektionen vermeiden, Sekret mobilisieren, Aspiration vermeiden.",
      sourceLE: "le-06",
      steps: EXAM_PHASE6_STEPS,
    },
    {
      phaseId: "le06-exam-phase-07",
      zeitpunkt: "Aufgabe 7: Dekubitus Kategorie I erkennen und handeln",
      kontext:
        "Bei der morgendlichen Hautinspektion entdeckst du am Kreuzbein von Herrn Brückner eine gerötete Stelle. Der Fingertest ergibt: Die Rötung verschwindet bei Fingerdruck nicht. Die Haut ist intakt. Du musst die Stelle klassifizieren, sofort handeln und die Befunde dokumentieren.",
      kontextB1:
        "Du machst die Hautinspektion. Am Kreuzbein von Herrn Brückner siehst du eine rote Stelle. Du drückst mit dem Finger — die Rötung bleibt. Die Haut ist noch nicht offen. Was bedeutet das? Was machst du?",
      sourceLE: "le-06",
      steps: EXAM_PHASE7_STEPS,
    },
    {
      phaseId: "le06-exam-phase-08",
      zeitpunkt: "Aufgabe 8: Sturzprophylaxe bei Demenz",
      kontext:
        "Herrn Brückners beginnende Demenz (MMST 22/30) beeinflusst die Sturzprophylaxe erheblich: Er vergisst Absprachen, kann komplexe Anweisungen nicht umsetzen und unterschätzt sein eigenes Risiko. Die üblichen Sturzprophylaxe-Maßnahmen müssen an seine kognitiven Einschränkungen angepasst werden.",
      kontextB1:
        "Herr Brückner hat Demenz. Er vergisst Absprachen. Er versteht komplizierte Erklärungen nicht. Die normale Sturzprophylaxe reicht nicht. Du musst sie an die Demenz anpassen.",
      sourceLE: "le-06",
      steps: EXAM_PHASE8_STEPS,
    },
    {
      phaseId: "le06-exam-phase-09",
      zeitpunkt: "Aufgabe 9: Vollständiges Prophylaxe-Bündel",
      kontext:
        "Die Pflegedienstleitung fordert eine strukturierte Übersicht: Herr Brückner ist ein Hochrisikopatient für alle Immobilitätsfolgen. Plane ein vollständiges Prophylaxe-Bündel mit allen 5 Prophylaxen (Dekubitus, Thrombose, Pneumonie, Kontraktur, Sturz) und jeweils mindestens 2 konkreten Maßnahmen.",
      kontextB1:
        "Die Pflegedienstleitung möchte eine Übersicht. Herr Brückner braucht alle 5 Prophylaxen. Plane ein komplettes Bündel. Pro Prophylaxe mindestens 2 Maßnahmen.",
      sourceLE: "le-06",
      steps: EXAM_PHASE9_STEPS,
    },
    {
      phaseId: "le06-exam-phase-10",
      zeitpunkt: "Aufgabe 10: Timed-Up-and-Go-Test",
      kontext:
        "Der Timed-Up-and-Go-Test (TUG) ist ein Standardinstrument zur Sturzrisiko-Einschätzung. Die Praxisanleiterin fragt dich: Wie läuft der Test ab, wie interpretierst du die Ergebnisse, und warum ist er bei Herrn Brückner aktuell möglicherweise nicht durchführbar?",
      kontextB1:
        "Der TUG-Test misst das Sturzrisiko. Die Praxisanleiterin fragt dich: Wie geht der Test? Was bedeuten die Zeiten? Warum kannst du den Test bei Herrn Brückner jetzt vielleicht nicht machen?",
      sourceLE: "le-06",
      steps: EXAM_PHASE10_STEPS,
    },
  ],
  bloomRange: [1, 3],
  zeitLimitMinuten: 60,
};

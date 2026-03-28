// Lektion 04: RA — Symptome, Formen, Diagnose
// CE 05 — Block B: Rheumatoide Arthritis
// Session 1: "Was sind die Symptome?" (Punkte 5-7: Symptome, Formen, Diagnose)
// Erlebnis-Konzept v2 — 8 Modi, Brilliant-Prinzip, 12 Modus-Wechsel

import type {
  ContentStep,
  GlossarEntry,
  LektionMetadata,
} from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-04-ra-symptome-diagnose",
  ceId: "ce-05",
  title: "RA: Symptome, Formen, Diagnose",
  titleShort: "RA: Symptome & Diagnose",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 25, b1: 35 },
  kompetenzbereiche: ["KB-I.1", "KB-I.2", "KB-V.1"],
  bloomStufen: [1, 2, 3],
  voraussetzungen: ["le-03-ra-definition"],
  leitfall: {
    name: "Mehmet Demir",
    alter: 43,
    beruf: "Fliesenleger",
    diagnose: "V.a. Rheumatoide Arthritis",
    setting: "Rheumatologische Ambulanz",
    kernproblem:
      "Neue Symptome: Morgensteifigkeit >60 Min, geschwollene Finger, Fatigue",
  },
  glossarCount: 12,
  quellenCount: 6,
};

export const STEPS: ContentStep[] = [
  // =============================================================
  // Phase 1 (Min 0-3): CHALLENGE — Anticipation Guide (Swipe)
  // Brilliant-Prinzip: Erst fragen, dann erklären
  // =============================================================
  {
    stepId: "s1-01-swipe-anticipation",
    phase: 1,
    stepType: "swipe",
    modus: "challenge",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024"],
    xpValue: 15,
    contentC1: {
      title: "Was glaubst du über Rheuma?",
      body: "6 Aussagen über Rheuma und Gelenke. Einiges stimmt, einiges nicht.",
      fallbezug:
        "Mehmet meldet sich mit neuen Beschwerden zurück.",
      glossarBegriffe: ["Morgensteifigkeit", "Rheumatoide Arthritis"],
    },
    contentB1: {
      title: "Was glaubst du über Rheuma?",
      body: "6 Aussagen über Rheuma. Stimmt das oder nicht?",
      fallbezug:
        "Mehmet hat neue Beschwerden.",
    },
    question: {
      fragetext: "Stimmt das oder nicht?",
      swipe: {
        instruction: "Stimmt oder stimmt nicht?",
        cards: [
          {
            statement: "Rheuma ist eine Alterskrankheit.",
            statementB1: "Rheuma bekommen nur alte Menschen.",
            isCorrect: false,
            explanation:
              "Falsch! RA beginnt am häufigsten zwischen 30 und 50 Jahren. Frauen sind 3x häufiger betroffen.",
            explanationB1:
              "Falsch! RA beginnt oft zwischen 30 und 50 Jahren. Frauen bekommen RA 3x öfter.",
          },
          {
            statement: "Steife Gelenke am Morgen sind normal im Alter.",
            statementB1: "Steife Gelenke am Morgen sind normal wenn man älter wird.",
            isCorrect: false,
            explanation:
              "Nicht unbedingt! Morgensteifigkeit >60 Min ist ein Warnsignal für RA. Bei Arthrose dauert sie nur 15-30 Minuten.",
            explanationB1:
              "Nicht immer! Steife Gelenke über 60 Minuten am Morgen können ein Zeichen für RA sein. Bei Arthrose dauert es nur 15 bis 30 Minuten.",
          },
          {
            statement: "Gelenkschmerzen kommen immer von Verschleiß.",
            statementB1: "Wenn Gelenke weh tun, sind sie abgenutzt.",
            isCorrect: false,
            explanation:
              "Falsch! Bei RA greift das Immunsystem die Gelenke an — das ist Entzündung, nicht Verschleiß. Arthrose ist Verschleiß, RA ist Autoimmunerkrankung.",
            explanationB1:
              "Falsch! Bei RA greift das Immunsystem die Gelenke an. Das ist nicht Verschleiß sondern Entzündung.",
          },
          {
            statement: "Rheuma betrifft nur die Gelenke.",
            statementB1: "Rheuma ist nur in den Gelenken.",
            isCorrect: false,
            explanation:
              "Falsch! RA ist eine systemische Erkrankung. Sie kann auch Augen, Lunge und Gefäße betreffen.",
            explanationB1:
              "Falsch! RA kann auch die Augen, die Lunge und die Gefäße krank machen.",
          },
          {
            statement: "Man kann mit einem Bluttest sicher feststellen ob jemand Rheuma hat.",
            statementB1: "Ein Bluttest zeigt sicher ob man Rheuma hat.",
            isCorrect: false,
            explanation:
              "So einfach ist es nicht! 20-30% der RA-Patienten haben keinen Rheumafaktor im Blut. Die Diagnose braucht mehrere Puzzleteile.",
            explanationB1:
              "Nicht ganz! Bei 20 bis 30 von 100 RA-Patienten findet man nichts im Blut. Man braucht mehrere Untersuchungen.",
          },
          {
            statement: "Müdigkeit hat nichts mit Gelenkproblemen zu tun.",
            statementB1: "Wenn man müde ist, hat das nichts mit den Gelenken zu tun.",
            isCorrect: false,
            explanation:
              "Falsch! Fatigue ist eines der häufigsten RA-Symptome. Bis zu 80% der Betroffenen leiden darunter.",
            explanationB1:
              "Falsch! Viele RA-Patienten sind sehr müde. Bis zu 80 von 100 Betroffenen haben das.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 1 (Min 3-4): ENTDECKER — Rückbezug auf Swipe
  // =============================================================
  {
    stepId: "s1-02-text-ergebnis",
    phase: 1,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [],
    xpValue: 5,
    contentC1: {
      title: "Überrascht?",
      body: "Die meisten Annahmen über Rheuma sind falsch. Jetzt schauen wir, was wirklich dahintersteckt.",
      fallbezug:
        "Mehmet hat sich mit neuen Beschwerden gemeldet.",
    },
    contentB1: {
      title: "Überrascht?",
      body: "Vieles über Rheuma ist anders als gedacht.",
      fallbezug:
        "Mehmet hat neue Beschwerden.",
    },
  },

  // =============================================================
  // Phase 2 (Min 4-9): STORY — Mehmet meldet sich mit neuen Symptomen
  // WhatsApp-Style Dialog, 3 Phasen
  // =============================================================
  {
    stepId: "s1-03-dialog-mehmet",
    phase: 2,
    stepType: "dialog",
    modus: "story",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: [
      "S3-Leitlinie RA DGRh 2024",
      "Herold Innere Medizin 2024",
    ],
    xpValue: 30,
    wusstestDuDas:
      "Die durchschnittliche Dauer vom ersten Symptom bis zur RA-Diagnose beträgt 9 Monate. Je früher die Diagnose, desto besser die Prognose — das 'Window of Opportunity' liegt bei den ersten 12 Wochen.",
    contentC1: {
      title: "Mehmet meldet sich zurück",
      body: "Zwei Wochen nach dem Erstbesuch meldet sich Mehmet per Nachricht. Die Beschwerden haben sich verändert.",
      fallbezug:
        "Mehmet hat neue Symptome entwickelt und ist verunsichert.",
      glossarBegriffe: ["Morgensteifigkeit", "Fatigue", "MCP-Gelenke"],
    },
    contentB1: {
      title: "Mehmet schreibt eine Nachricht",
      body: "Zwei Wochen später schreibt Mehmet eine Nachricht. Er hat neue Beschwerden.",
      fallbezug:
        "Mehmet hat neue Symptome und macht sich Sorgen.",
    },
    question: {
      patientName: "Mehmet",
      fragetext: "Mehmet meldet sich über das Patientenportal.",
      dialogPhases: [
        // === Phase 1: Mehmet beschreibt neue Symptome ===
        {
          context:
            "Hallo! Ich bin's, der Demir. Seit dem letzten Mal ist es schlimmer geworden. Morgens sind jetzt nicht nur die Finger steif — auch die Handgelenke. Und das dauert jetzt fast zwei Stunden! Meine Frau sagt, die Finger sehen auch dicker aus. Ich bin total kaputt, den ganzen Tag müde. Was ist los mit mir?",
          contextB1:
            "Hallo! Hier ist Herr Demir. Es ist schlimmer geworden. Morgens sind jetzt auch die Handgelenke steif. Fast zwei Stunden lang! Meine Frau sagt, meine Finger sind dicker. Und ich bin den ganzen Tag müde. Was ist mit mir los?",
          speaker: "Mehmet",
          vitals: "Mehmet Demir, 43 J. · Kontroll-Nachricht 2 Wochen nach Erstbesuch",
          options: [
            {
              text: "Herr Demir, danke dass Sie sich melden. Die Symptome die Sie beschreiben — Morgensteifigkeit über zwei Stunden, Schwellung der Finger, Müdigkeit — passen zu dem Verdacht, der beim letzten Mal geäußert wurde. Es ist wichtig, dass Sie zum geplanten Kontrolltermin kommen. Können Sie mir noch sagen: Sind beide Hände gleich betroffen?",
              textB1: "Herr Demir, danke für Ihre Nachricht. Steife Gelenke am Morgen, dicke Finger, Müdigkeit — das sind wichtige Zeichen. Bitte kommen Sie zum nächsten Termin. Noch eine Frage: Sind beide Hände betroffen?",
              patientResponse:
                "Ja, beide Hände! Links und rechts. Und wissen Sie was? Mein Kollege meinte, ich soll einfach Ibuprofen nehmen und weiterarbeiten. Aber das hilft nur ein paar Stunden.",
              patientResponseB1:
                "Ja, beide Hände! Links und rechts gleich. Mein Kollege sagt, ich soll Ibuprofen nehmen. Aber das hilft nur kurz.",
              score: 3,
              feedback:
                "Gut! Du fragst gezielt nach Symmetrie — ein ACR/EULAR-Kriterium. Und du stellst keine Diagnose, sondern verweist auf den Kontrolltermin.",
              feedbackB1:
                "Gut! Du fragst nach beiden Händen — das ist wichtig. Beide Seiten gleich betroffen spricht für RA.",
            },
            {
              text: "Das klingt wirklich unangenehm. Machen Sie sich keine Sorgen, das wird schon wieder. Nehmen Sie erstmal Schmerztabletten.",
              textB1: "Das tut mir leid. Machen Sie sich keine Sorgen. Nehmen Sie Schmerztabletten.",
              patientResponse:
                "Meinen Sie? Meine Frau sagt, ich soll unbedingt nochmal zum Arzt. Aber wenn Sie sagen, das wird schon...",
              patientResponseB1:
                "Wirklich? Meine Frau sagt, ich soll zum Arzt. Aber wenn Sie sagen, es wird besser...",
              score: 1,
              feedback:
                "Vorsicht! Du verharmlosst die Symptome und empfiehlst Medikamente — beides liegt außerhalb deiner Kompetenz. Besser: Symptome ernst nehmen, Arztbesuch dringend empfehlen.",
              feedbackB1:
                "Nicht gut! Die Symptome sind ernst. Du sollst keine Medikamente empfehlen. Besser: Sag ihm, er soll zum Arzt.",
            },
            {
              text: "Herr Demir, ich verstehe dass Sie besorgt sind. Die Beschwerden klingen so, als sollten sie ärztlich abgeklärt werden. Wann ist Ihr nächster Termin?",
              textB1: "Herr Demir, ich verstehe, dass Sie Sorgen haben. Die Beschwerden müssen vom Arzt untersucht werden. Wann ist Ihr nächster Termin?",
              patientResponse:
                "In zwei Wochen erst! Soll ich vorher kommen? Meine Frau macht sich total verrückt. Sie googelt die ganze Zeit und sagt, das könnte Rheuma sein.",
              patientResponseB1:
                "Erst in zwei Wochen! Soll ich früher kommen? Meine Frau googelt die ganze Zeit. Sie sagt, das ist Rheuma.",
              score: 2,
              feedback:
                "Guter Ansatz! Du nimmst die Beschwerden ernst und verweist an den Arzt. Tipp: Frage bei Gelenkbeschwerden immer nach Symmetrie (beide Seiten gleich?) und Dauer der Morgensteifigkeit — das sind diagnostische Schlüsselinformationen.",
              feedbackB1:
                "Guter Ansatz! Du nimmst das ernst und sagst, dass er zum Arzt soll. Tipp: Frage immer, ob beide Seiten betroffen sind und wie lange die Steifigkeit morgens dauert.",
            },
          ],
        },
        // === Phase 2: Mehmet kommt zum Kontrolltermin ===
        {
          context:
            "So, jetzt bin ich also nochmal hier. Meine Frau hat einen früheren Termin organisiert. Schauen Sie mal meine Hände — sehen Sie das? Die Fingerknöchel sind richtig geschwollen. Und hier am Handgelenk auch. Meine Frau sagt, sie fühlen sich warm an.",
          contextB1:
            "Da bin ich wieder. Meine Frau hat einen früheren Termin bekommen. Schauen Sie meine Hände. Die Fingerknöchel sind dick. Und das Handgelenk auch. Meine Frau sagt, die Hände fühlen sich warm an.",
          speaker: "Mehmet",
          vitals: "Mehmet Demir, 43 J. · MCP-Gelenke bds. geschwollen · Handgelenke druckschmerzhaft · Temp. 37,2 °C",
          options: [
            {
              text: "Ich sehe die Schwellungen, Herr Demir. Darf ich Ihre Hände kurz anfassen? Ich möchte fühlen, ob sie warm sind. Und können Sie versuchen, eine Faust zu machen?",
              textB1: "Ich sehe die Schwellungen. Darf ich Ihre Hände anfassen? Ich möchte fühlen, ob sie warm sind. Können Sie eine Faust machen?",
              patientResponse:
                "Ja, klar... Au! Das tut weh beim Drücken. Und Faust machen... geht nicht ganz. Sehen Sie? Die Finger gehen nicht richtig zu.",
              patientResponseB1:
                "Ja, okay... Au! Das tut weh! Und Faust machen... geht nicht richtig. Sehen Sie? Die Finger gehen nicht ganz zu.",
              score: 3,
              feedback:
                "Perfekt! Du prüfst alle 3 Säulen der Gelenkbeurteilung: Inspektion, Palpation, Funktionsprüfung — und fragst vorher um Erlaubnis.",
              feedbackB1:
                "Sehr gut! Du fragst um Erlaubnis und testest 3 Dinge: Sehen, Fühlen, Funktion.",
            },
            {
              text: "Das sieht entzündet aus. Ich hole sofort den Arzt.",
              textB1: "Das sieht entzündet aus. Ich hole den Arzt.",
              patientResponse:
                "Entzündet?! Ist das schlimm? Jetzt machen Sie mir Angst!",
              patientResponseB1:
                "Entzündet?! Ist das schlimm? Jetzt habe ich Angst!",
              score: 1,
              feedback:
                "Vorsicht! 'Entzündet' ist eine Diagnose — das liegt beim Arzt. Besser: 'Ich möchte mir das genauer anschauen.'",
              feedbackB1:
                "'Entzündet' darf nur der Arzt sagen. Besser: 'Ich möchte mir das genauer anschauen.'",
            },
            {
              text: "Herr Demir, ich sehe dass die Gelenke geschwollen sind. Das möchte ich genauer anschauen. Darf ich fühlen ob die Gelenke warm sind?",
              textB1: "Herr Demir, ich sehe die Schwellungen. Darf ich Ihre Hände anfassen und fühlen?",
              patientResponse:
                "Ja, machen Sie. Die sind bestimmt warm, meine Frau hat das auch schon gesagt.",
              patientResponseB1:
                "Ja, okay. Meine Frau hat auch gesagt, die fühlen sich warm an.",
              score: 2,
              feedback:
                "Gut! Tipp: Teste auch die Funktion (Faustschluss) — das vervollständigt die Beurteilung.",
              feedbackB1:
                "Gut! Tipp: Frage auch, ob er eine Faust machen kann.",
            },
          ],
        },
        // === Phase 3: Symptom-Zusammenfassung für Arzt ===
        {
          context:
            "Die Ärztin kommt gleich. Können Sie ihr schon mal zusammenfassen, was Sie bei Herrn Demir beobachtet haben?",
          contextB1:
            "Die Ärztin kommt gleich. Können Sie ihr sagen, was Sie bei Herrn Demir gesehen haben?",
          speaker: "Sarah",
          options: [
            {
              text: "Herr Demir, 43 Jahre, berichtet über zunehmende Morgensteifigkeit in Fingern und Handgelenken, Dauer jetzt fast zwei Stunden. Symmetrische Schwellung der MCP-Gelenke beidseits, Handgelenke druckschmerzhaft, überwärmt. Faustschluss eingeschränkt. Zusätzlich ausgeprägte Fatigue. NSAR wirken nur kurzfristig.",
              textB1: "Herr Demir, 43 Jahre. Seine Finger und Handgelenke sind morgens steif — fast 2 Stunden. Die Fingerknöchel sind auf beiden Seiten geschwollen und warm. Er kann keine Faust machen. Er ist sehr müde. Schmerztabletten helfen nur kurz.",
              patientResponse:
                "Sehr gute Zusammenfassung! Strukturiert und mit allen relevanten Befunden. Das hilft der Ärztin enorm.",
              patientResponseB1:
                "Super Zusammenfassung! Alle wichtigen Sachen sind drin. Das hilft der Ärztin sehr.",
              score: 3,
              feedback:
                "Perfekte SBAR-Struktur! Subjektiv + Objektiv + Symmetrie + Medikamentenwirkung — genau was die Ärztin braucht.",
              feedbackB1:
                "Perfekt! Alle 4 Punkte drin: Beschwerden, Befunde, beide Seiten, Medikamente.",
            },
            {
              text: "Der Patient hat geschwollene Hände und Morgensteifigkeit.",
              textB1: "Der Patient hat dicke Hände und morgens steife Finger.",
              patientResponse:
                "Das stimmt, aber mir fehlen Details. Wie lange ist die Steifigkeit? Welche Gelenke genau? Symmetrisch?",
              patientResponseB1:
                "Das stimmt. Aber mir fehlen Details. Wie lange ist die Steifigkeit? Welche Gelenke? Beide Seiten?",
              score: 1,
              feedback:
                "Zu knapp! Es fehlen: Dauer, betroffene Gelenke, Seitenverteilung, Begleitsymptome. Tipp: SBAR-Schema nutzen.",
              feedbackB1:
                "Zu wenig! Es fehlt: Wie lange steif? Welche Gelenke? Beide Seiten? Müdigkeit? Medikamente?",
            },
            {
              text: "Herr Demir hat seit zwei Wochen zunehmende Beschwerden: Morgensteifigkeit in den Händen, die fast zwei Stunden dauert. Die Fingergelenke und Handgelenke sind geschwollen, beide Seiten. Er ist sehr müde. Ibuprofen hilft kaum.",
              textB1: "Herr Demir hat seit 2 Wochen mehr Beschwerden. Die Hände sind morgens fast 2 Stunden steif. Finger und Handgelenke sind auf beiden Seiten geschwollen. Er ist sehr müde. Ibuprofen hilft kaum.",
              patientResponse:
                "Gute Zusammenfassung! Mir fehlt noch der Tastbefund — warm oder nicht? Und der Funktionstest?",
              patientResponseB1:
                "Gute Zusammenfassung! Mir fehlt noch: Sind die Gelenke warm? Kann er eine Faust machen?",
              score: 2,
              feedback:
                "Gut! Es fehlen noch die objektiven Befunde: Überwärmung und Faustschluss.",
              feedbackB1:
                "Gut! Es fehlt noch: Sind die Gelenke warm? Kann er eine Faust machen?",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Phase 2 (Min 9-12): ENTDECKER — Die 7 Leitsymptome der RA (Reveal)
  // =============================================================
  {
    stepId: "s1-04-reveal-leitsymptome",
    phase: 2,
    stepType: "reveal",
    modus: "entdecker",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
      "AMBOSS: Rheumatoide Arthritis",
    ],
    xpValue: 20,
    contentC1: {
      title: "Die 7 Leitsymptome der Rheumatoiden Arthritis",
      body: "Die RA hat 7 typische Leitsymptome. Achte darauf, welche davon bei Mehmet bereits aufgetreten sind.",
      fallbezug:
        "Welche dieser Symptome hat Mehmet bereits beschrieben?",
      glossarBegriffe: [
        "Morgensteifigkeit",
        "Synovitis",
        "Fatigue",
        "MCP-Gelenke",
      ],
    },
    contentB1: {
      title: "Die 7 wichtigsten Zeichen der RA",
      body: "Die RA hat 7 wichtige Zeichen. Achte darauf: Welche hat Mehmet schon?",
      fallbezug: "Welche Zeichen hat Mehmet schon?",
    },
    question: {
      fragetext: "Entdecke die 7 Leitsymptome der RA.",
      reveal: {
        instruction: "Tippe auf jede Karte, um das Symptom zu entdecken.",
        revealMode: "free",
        cards: [
          {
            id: "morgensteif",
            label: "1. Morgensteifigkeit",
            icon: "🌅",
            content:
              "Steifigkeit der Gelenke nach dem Aufwachen, typischerweise >60 Minuten. Das Leitsymptom der RA — bei Arthrose nur 15-30 Min. Mehmet beschreibt fast 2 Stunden Steifigkeit.",
            contentB1:
              "Die Gelenke sind morgens steif. Bei RA dauert das über 60 Minuten. Bei Arthrose nur 15 bis 30 Minuten. Mehmet sagt: Fast 2 Stunden.",
          },
          {
            id: "symmetrie",
            label: "2. Symmetrischer Befall",
            icon: "🤲",
            content:
              "RA befällt beide Körperseiten gleichzeitig — z.B. beide Hände, beide Handgelenke. Das unterscheidet RA von vielen anderen Gelenkerkrankungen wie Gicht (meist einseitig).",
            contentB1:
              "RA betrifft beide Seiten gleich. Zum Beispiel: beide Hände. Gicht betrifft oft nur eine Seite.",
          },
          {
            id: "mcp-pip",
            label: "3. MCP- und PIP-Gelenke",
            icon: "✋",
            content:
              "RA befällt bevorzugt die kleinen Gelenke: Fingergrundgelenke (MCP) und Fingermittelgelenke (PIP). Die Fingerendgelenke (DIP) sind typischerweise NICHT betroffen — das wäre eher Arthrose.",
            contentB1:
              "RA befällt vor allem kleine Gelenke: Fingerknöchel (MCP) und mittlere Fingergelenke (PIP). Die Fingerspitzen sind bei RA meist frei — das wäre Arthrose.",
          },
          {
            id: "schwellung",
            label: "4. Schwellung (Synovitis)",
            icon: "🔴",
            content:
              "Weiche, prall-elastische Schwellung der Gelenke durch Entzündung der Gelenkinnenhaut (Synovitis). Die Gelenke fühlen sich warm an. Mehmets Frau hat die geschwollenen Finger bemerkt.",
            contentB1:
              "Die Gelenke schwellen an — weich und warm. Das kommt von der Entzündung der Gelenkinnenhaut. Mehmets Frau hat die dicken Finger gesehen.",
          },
          {
            id: "schmerz",
            label: "5. Schmerz",
            icon: "⚡",
            content:
              "Ruheschmerz und Druckschmerz, besonders nachts und morgens. Anders als Arthrose-Schmerz (Belastungsschmerz, wird schlimmer bei Bewegung). RA-Schmerz bessert sich bei Bewegung (Anlaufschmerz).",
            contentB1:
              "Die Gelenke tun weh — auch in Ruhe. Vor allem nachts und morgens. Bei Arthrose tut es bei Bewegung weh. Bei RA wird es durch Bewegung besser.",
          },
          {
            id: "funktion",
            label: "6. Funktionsverlust",
            icon: "🔒",
            content:
              "Eingeschränkte Beweglichkeit: Faust kann nicht geschlossen werden, Greifen fällt schwer, Drehbewegungen schmerzhaft. Mehmet kann sein Werkzeug nicht mehr greifen.",
            contentB1:
              "Die Hand funktioniert nicht mehr richtig. Faust machen geht nicht. Greifen ist schwer. Mehmet kann sein Werkzeug nicht mehr halten.",
          },
          {
            id: "fatigue",
            label: "7. Fatigue",
            icon: "🪫",
            content:
              "Extreme Müdigkeit und Erschöpfung — weit über normale Müdigkeit hinaus. Betrifft 80% der RA-Patienten. Wird oft unterschätzt, belastet aber massiv die Lebensqualität. Mehmet: 'Ich bin den ganzen Tag kaputt.'",
            contentB1:
              "Sehr starke Müdigkeit, den ganzen Tag lang. 80 von 100 RA-Patienten haben das. Es heißt Fatigue. Mehmet sagt: 'Ich bin den ganzen Tag kaputt.'",
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 2 (Min 12-13): CHALLENGE — MC auf Dialog
  // =============================================================
  {
    stepId: "s1-05-mc-dialog-bezug",
    phase: 2,
    stepType: "mc",
    modus: "challenge",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024"],
    xpValue: 10,
    contentC1: {
      title: "Mehmets Beschwerden",
      body: "Mehmet beschreibt Morgensteifigkeit, geschwollene Finger, Fatigue und Griffschwäche. Nicht alle Symptome sind gleich spezifisch für RA.",
      fallbezug:
        "Mehmet beschrieb seine Morgensteifigkeit, Schwellung und Müdigkeit.",
      glossarBegriffe: ["Morgensteifigkeit"],
    },
    contentB1: {
      title: "Mehmets Beschwerden",
      body: "Mehmet hat steife Finger, geschwollene Gelenke, Müdigkeit und wenig Kraft. Was ist besonders typisch für RA?",
      fallbezug:
        "Mehmet hat über steife Finger, Schwellungen und Müdigkeit gesprochen.",
    },
    question: {
      fragetext:
        "Welches von Mehmets Symptomen ist das wichtigste diagnostische Kriterium für RA?",
      optionen: [
        {
          text: "Morgensteifigkeit >60 Minuten in mehreren Gelenken",
          isCorrect: true,
          explanation:
            "Richtig! Morgensteifigkeit >60 Min ist ein ACR/EULAR-Klassifikationskriterium und das klinische Leitsymptom der RA. Es unterscheidet RA von Arthrose (nur 15-30 Min).",
        },
        {
          text: "Starke Müdigkeit den ganzen Tag",
          isCorrect: false,
          explanation:
            "Fatigue ist ein häufiges Begleitsymptom, aber kein spezifisches diagnostisches Kriterium. Müdigkeit kommt bei vielen Erkrankungen vor.",
        },
        {
          text: "Schmerzen beim Greifen von Werkzeug",
          isCorrect: false,
          explanation:
            "Funktionsverlust ist eine Folge, aber kein spezifisches Diagnosekriterium. Auch Arthrose oder Karpaltunnelsyndrom verursachen Greifprobleme.",
        },
        {
          text: "Ibuprofen hilft nur kurzfristig",
          isCorrect: false,
          explanation:
            "Die begrenzte Wirkung von NSAR ist ein Hinweis auf eine entzündliche Ursache, aber kein diagnostisches Kriterium für RA.",
        },
      ],
    },
  },

  // =============================================================
  // Phase 3 (Min 13-16): PUZZLE — Flipcard Fachbegriffe
  // =============================================================
  {
    stepId: "s1-06-flipcard-fachbegriffe",
    phase: 3,
    stepType: "flipcard",
    modus: "puzzle",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "Herold Innere Medizin 2024",
      "AMBOSS: Rheumatoide Arthritis",
      "Pschyrembel Online",
    ],
    xpValue: 15,
    contentC1: {
      title: "Fachbegriffe der RA-Symptomatik",
      body: "Zentrale Fachbegriffe der RA-Symptomatik — für Pflegebericht und Arztgespräch.",
      glossarBegriffe: [
        "Synovitis",
        "Pannus",
        "DAS28",
        "Rheumafaktor",
        "Ulnardeviation",
      ],
    },
    contentB1: {
      title: "Fachbegriffe der RA",
      body: "Fachbegriffe der RA — wichtig für Pflege und Prüfung.",
    },
    question: {
      fragetext: "Entdecke die Fachbegriffe.",
      flipcard: {
        instruction: "Tippe auf eine Karte um sie umzudrehen.",
        cards: [
          {
            front: "Morgensteifigkeit",
            back: "Steifigkeit der Gelenke nach dem Aufwachen. Bei RA >60 Min, bei Arthrose <30 Min. Leitsymptom der RA und Teil der ACR/EULAR-Klassifikation.",
            backB1:
              "Die Gelenke sind morgens steif. Bei RA über 60 Minuten. Bei Arthrose unter 30 Minuten. Wichtiges Zeichen für RA.",
          },
          {
            front: "Pannus",
            back: "Aggressives Entzündungsgewebe, das sich bei chronischer Synovitis über den Gelenkknorpel legt und ihn zerstört. Typisch für fortgeschrittene RA.",
            backB1:
              "Entzündungsgewebe das sich über den Knorpel legt. Es zerstört den Knorpel langsam. Passiert bei RA die lange besteht.",
          },
          {
            front: "Synovitis",
            back: "Entzündung der Synovialmembran (Gelenkinnenhaut). Führt zu Schwellung, Überwärmung und Schmerz. Der zentrale Entzündungsprozess bei RA.",
            backB1:
              "Entzündung der Gelenkinnenhaut. Das Gelenk schwillt an, wird warm und tut weh. Das ist der Hauptprozess bei RA.",
          },
          {
            front: "DAS28",
            back: "Disease Activity Score 28: Messinstrument zur Bewertung der RA-Aktivität. Berücksichtigt 28 Gelenke, BSG/CRP und Patienteneinschätzung. <2,6 = Remission.",
            backB1:
              "Ein Punktesystem für die RA. Es zählt 28 Gelenke und misst wie aktiv die Krankheit ist. Unter 2,6 Punkte = keine Entzündung mehr.",
          },
          {
            front: "MCP-Gelenke",
            back: "Metacarpophalangealgelenke = Fingergrundgelenke. Bei RA typischerweise als erstes betroffen — zusammen mit PIP und Handgelenken.",
            backB1:
              "Fingerknöchel. Die Gelenke zwischen Hand und Finger. Bei RA sind sie oft als erstes betroffen.",
          },
          {
            front: "PIP-Gelenke",
            back: "Proximale Interphalangealgelenke = Fingermittelgelenke. Bei RA häufig betroffen. Die DIP-Gelenke (Fingerendgelenke) sind typischerweise NICHT betroffen.",
            backB1:
              "Mittlere Fingergelenke. Bei RA oft betroffen. Die letzten Fingergelenke (ganz oben) sind bei RA meistens frei.",
          },
          {
            front: "Rheumaknoten",
            back: "Subkutane Knoten an druckbelasteten Stellen (Ellenbogen, Finger). Treten bei 20-30% der seropositiven RA-Patienten auf. Ein Zeichen für fortgeschrittene Erkrankung.",
            backB1:
              "Harte Knoten unter der Haut, z.B. am Ellenbogen. Haben 20 bis 30 von 100 RA-Patienten. Zeichen für eine schwere RA.",
          },
          {
            front: "Ulnardeviation",
            back: "Abweichung der Finger zur Kleinfingerseite (ulnar). Typische Spätdeformität der RA durch Zerstörung der Gelenkkapseln und Bänder. Heute selten dank früher Therapie.",
            backB1:
              "Die Finger zeigen zum kleinen Finger hin. Das passiert bei schwerer RA. Die Gelenke sind kaputt. Heute passiert das selten, weil RA früher behandelt wird.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 3 (Min 16-18): CHALLENGE — Timer Speed-Check
  // =============================================================
  {
    stepId: "s1-07-timer-symptome",
    phase: 3,
    stepType: "timer",
    modus: "challenge",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "AMBOSS: Rheumatoide Arthritis"],
    xpValue: 20,
    contentC1: {
      title: "Speed-Check: Symptome zuordnen",
      body: "5 Fragen in 60 Sekunden! Wie viele schaffst du richtig?",
      fallbezug: "Mehmets Symptome zuordnen.",
    },
    contentB1: {
      title: "Schnell-Quiz: Symptome",
      body: "5 Fragen in 60 Sekunden! Wie viele kannst du richtig beantworten?",
      fallbezug: "Mehmets Symptome zuordnen.",
    },
    question: {
      fragetext: "Beantworte so viele Fragen wie möglich!",
      timeLimitSeconds: 60,
      timerQuestions: [
        {
          question:
            "Wie lange dauert die Morgensteifigkeit bei RA typischerweise?",
          options: ["<15 Minuten", "15-30 Minuten", ">60 Minuten", "Genau 45 Minuten"],
          correctIndex: 2,
        },
        {
          question: "Welche Gelenke sind bei RA typischerweise zuerst betroffen?",
          options: [
            "Knie und Hüfte",
            "MCP- und PIP-Gelenke",
            "DIP-Gelenke",
            "Wirbelsäule",
          ],
          correctIndex: 1,
        },
        {
          question: "Was misst der DAS28?",
          options: [
            "Blutdruck",
            "Knochendichte",
            "Krankheitsaktivität der RA",
            "Schmerzstärke",
          ],
          correctIndex: 2,
        },
        {
          question: "Was ist Fatigue?",
          options: [
            "Gelenksteifigkeit",
            "Extreme Müdigkeit und Erschöpfung",
            "Gelenkdeformität",
            "Hautausschlag",
          ],
          correctIndex: 1,
        },
        {
          question: "RA befällt Gelenke typischerweise...",
          options: [
            "nur einseitig",
            "symmetrisch (beide Seiten)",
            "nur große Gelenke",
            "nur in der rechten Hand",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // =============================================================
  // Phase 3 (Min 18-20): ENTDECKER — Frühsymptome vs. Spätsymptome
  // =============================================================
  {
    stepId: "s1-08-text-frueh-spaet",
    phase: 3,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
    ],
    xpValue: 5,
    wusstestDuDas:
      "Dank moderner Medikamente (Biologika, JAK-Inhibitoren) erreichen heute 50% der RA-Patienten eine Remission. Ulnardeviation und andere schwere Deformitäten sind viel seltener geworden.",
    contentC1: {
      title: "Frühsymptome vs. Spätsymptome",
      body: "Die RA verläuft in Stadien. Früh erkannt, kann man sie gut behandeln. Spät erkannt, drohen irreversible Schäden.\n\nFrühsymptome (Monate 1-6):\n- Morgensteifigkeit >60 Min\n- Schwellung der Finger- und Handgelenke\n- Druckschmerz (Gaenslen-Zeichen: Querdruck auf MCP-Gelenke)\n- Fatigue und allgemeines Krankheitsgefühl\n- Leichtes Fieber, Nachtschweiß\n\nSpätsymptome (Jahre):\n- Gelenkdeformitäten (Ulnardeviation, Schwanenhals, Knopfloch)\n- Rheumaknoten\n- Organbeteiligung (Augen, Lunge, Herz, Gefäße)\n- Osteoporose durch chronische Entzündung\n- Amyloidose (selten)",
      fallbezug:
        "Mehmet ist im Frühstadium — das ist gut! Je früher die Diagnose, desto besser die Prognose.",
      glossarBegriffe: ["Ulnardeviation", "Rheumaknoten"],
    },
    contentB1: {
      title: "Frühe Zeichen vs. Späte Zeichen",
      body: "RA verändert sich mit der Zeit. Am Anfang kann man sie gut behandeln. Später können Schäden bleiben.\n\nFrühe Zeichen (erste Monate):\n- Morgens steife Gelenke, über 60 Minuten\n- Geschwollene Finger und Handgelenke\n- Schmerz bei Druck auf die Fingerknöchel\n- Starke Müdigkeit\n- Leichtes Fieber\n\nSpäte Zeichen (nach Jahren):\n- Finger verformen sich\n- Knoten unter der Haut\n- Augen, Lunge oder Herz können betroffen sein\n- Knochen werden schwach (Osteoporose)",
      fallbezug:
        "Mehmet ist am Anfang der Krankheit. Das ist gut. Früh behandeln ist besser.",
    },
  },

  // =============================================================
  // Phase 3 (Min 20-22): ENTDECKER — Timeline RA-Verlauf
  // =============================================================
  {
    stepId: "s1-09-timeline-verlauf",
    phase: 3,
    stepType: "timeline",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
    ],
    xpValue: 20,
    contentC1: {
      title: "Der typische RA-Verlauf",
      body: "So verläuft eine Rheumatoide Arthritis ohne und mit Behandlung — vom ersten Symptom bis zur möglichen Remission.",
      fallbezug:
        "Mehmet befindet sich zwischen Station 1 und 2 — noch keine gesicherte Diagnose.",
    },
    contentB1: {
      title: "So verläuft eine RA",
      body: "Eine RA verändert sich mit der Zeit. Von den ersten Beschwerden bis zur Behandlung passiert viel.",
      fallbezug: "Mehmet ist noch ganz am Anfang. Zwischen Punkt 1 und 2.",
    },
    question: {
      fragetext: "Entdecke den typischen Krankheitsverlauf.",
      timeline: {
        instruction: "Tippe auf die Stationen des RA-Verlaufs.",
        events: [
          {
            id: "t1-beschwerden",
            time: "Monat 0-3",
            title: "Erste Beschwerden",
            description:
              "Unspezifische Gelenkschmerzen, leichte Morgensteifigkeit, Müdigkeit. Oft als Überlastung fehlgedeutet. Mehmet dachte auch: 'Das ist nur von der Arbeit.'",
            descriptionB1:
              "Die Gelenke tun etwas weh. Morgens sind sie steif. Man ist müde. Viele denken: Das ist nur Überlastung. So dachte auch Mehmet.",
            icon: "⚠️",
          },
          {
            id: "t2-arztbesuch",
            time: "Monat 3-9",
            title: "Erster Arztbesuch",
            description:
              "Die Beschwerden nehmen zu. Hausarzt überweist zum Rheumatologen. Durchschnittlich 9 Monate vom ersten Symptom bis zur Diagnose — das muss schneller werden!",
            descriptionB1:
              "Die Beschwerden werden schlimmer. Der Hausarzt schickt den Patienten zum Rheumatologen. Im Schnitt dauert es 9 Monate bis zur Diagnose.",
            icon: "🩺",
            highlight: true,
          },
          {
            id: "t3-diagnose",
            time: "Monat 6-12",
            title: "Diagnosestellung",
            description:
              "Blutuntersuchung (RF, Anti-CCP, CRP, BSG) + Bildgebung (Ultraschall, Röntgen). ACR/EULAR-Klassifikationskriterien: Score >=6 = RA. Frühzeitige Diagnose im 'Window of Opportunity'.",
            descriptionB1:
              "Bluttest und Bilder der Gelenke (Ultraschall, Röntgen). Der Arzt prüft die Kriterien. Je früher die Diagnose, desto besser die Behandlung.",
            icon: "🔬",
          },
          {
            id: "t4-schub",
            time: "Jahr 1-2",
            title: "Erster Schub",
            description:
              "RA verläuft schubförmig: Phasen mit hoher Entzündungsaktivität (Schub) wechseln mit ruhigeren Phasen (Remission). Ein Schub kann Tage bis Wochen dauern.",
            descriptionB1:
              "RA kommt in Schüben: Mal ist die Entzündung stark (Schub), mal ist sie ruhig (Remission). Ein Schub dauert Tage bis Wochen.",
            icon: "🔥",
          },
          {
            id: "t5-remission",
            time: "Jahr 1-5",
            title: "Remission unter Therapie",
            description:
              "Mit moderner Therapie (MTX, Biologika) erreichen 50% der Patienten eine Remission (DAS28 <2,6). Die Entzündung ist dann kontrolliert, aber nicht geheilt.",
            descriptionB1:
              "Mit modernen Medikamenten werden 50 von 100 Patienten fast beschwerdefrei. Die Krankheit ist dann ruhig. Aber geheilt ist sie nicht.",
            icon: "☀️",
          },
          {
            id: "t6-spaetfolgen",
            time: "Jahr 10+",
            title: "Spätfolgen (ohne Therapie)",
            description:
              "Ohne Behandlung: Gelenkzerstörung, Deformitäten (Ulnardeviation), Funktionsverlust, Organbeteiligung. Mit Therapie: Deutlich bessere Prognose, Gelenkerhalt möglich.",
            descriptionB1:
              "Ohne Behandlung: Die Gelenke werden zerstört. Die Finger verformen sich. Mit Behandlung: Die Gelenke bleiben viel länger gesund.",
            icon: "🛡️",
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 3 (Min 22-23): PUZZLE — Matching Symptom → Stadium
  // =============================================================
  {
    stepId: "s1-10-matching-stadien",
    phase: 3,
    stepType: "matching",
    modus: "puzzle",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024"],
    xpValue: 15,
    contentC1: {
      title: "Symptom dem Stadium zuordnen",
      body: "RA-Symptome treten nicht alle gleichzeitig auf — manche zeigen sich früh, andere erst nach Jahren ohne Behandlung.",
      fallbezug:
        "Mehmets Symptome gehören alle zum Frühstadium — ein gutes Zeichen!",
    },
    contentB1: {
      title: "Symptom zum Stadium zuordnen",
      body: "Manche Symptome kommen früh, andere erst nach Jahren. Welche gehören wohin?",
      fallbezug: "Mehmets Symptome sind alle früh. Das ist gut.",
    },
    question: {
      fragetext: "Ziehe jedes Symptom zum passenden Stadium.",
      matchingPairs: [
        { left: "Morgensteifigkeit >60 Min", right: "Frühstadium" },
        { left: "Symmetrische MCP-Schwellung", right: "Frühstadium" },
        { left: "Rheumaknoten am Ellenbogen", right: "Fortgeschritten" },
        { left: "Ulnardeviation der Finger", right: "Spätfolge" },
        {
          left: "Fatigue und allgemeines Krankheitsgefühl",
          right: "Frühstadium",
        },
        {
          left: "Keratokonjunktivitis sicca (trockene Augen)",
          right: "Fortgeschritten",
        },
      ],
    },
  },

  // =============================================================
  // Phase 4 (Min 23-24): STORY — Überleitung zu Formen
  // =============================================================
  {
    stepId: "s1-11-text-ueberleitung",
    phase: 4,
    stepType: "text",
    modus: "story",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.2",
    quellen: [],
    xpValue: 5,
    contentC1: {
      title: "Mehmet fragt: 'Gibt es verschiedene Arten?'",
      body: "Mehmet sitzt im Wartezimmer. Seine Frau hat im Internet recherchiert und ihm eine Frage mitgegeben: 'Meine Frau hat gelesen, dass es verschiedene Formen von Rheuma gibt. Dass bei manchen der Bluttest positiv ist und bei manchen nicht. Was bedeutet das? Ist die eine Form schlimmer als die andere?'\n\nEine gute Frage! Tatsächlich unterscheidet man zwei Hauptformen der RA.",
      fallbezug:
        "Mehmets Blutuntersuchung steht noch aus. Bald wird man wissen, welche Form er hat.",
    },
    contentB1: {
      title: "Mehmet fragt: 'Gibt es verschiedene Arten?'",
      body: "Mehmets Frau hat im Internet gelesen: Es gibt verschiedene Formen von RA. Bei manchen ist der Bluttest positiv. Bei manchen nicht. Mehmet fragt: 'Ist eine Form schlimmer?'\n\nGute Frage! Es gibt zwei Hauptformen von RA.",
      fallbezug:
        "Mehmets Bluttest ist noch nicht da. Dann weiß man welche Form.",
    },
  },

  // =============================================================
  // Phase 4 (Min 24-25): ENTDECKER — Seropositive vs. Seronegative RA
  // =============================================================
  {
    stepId: "s1-12-text-formen",
    phase: 4,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "AMBOSS: Rheumatoide Arthritis",
    ],
    xpValue: 5,
    contentC1: {
      title: "Seropositive vs. Seronegative RA",
      body: "Seropositive RA (70-80% der Fälle):\nRheumafaktor (RF) und/oder Anti-CCP-Antikörper im Blut nachweisbar. Tendenziell aggressiverer Verlauf, häufiger extra-artikuläre Manifestationen (Rheumaknoten, Vaskulitis), früherer Gelenkschaden.\n\nSeronegative RA (20-30% der Fälle):\nKein RF, kein Anti-CCP im Blut. Diagnose wird klinisch + per Bildgebung gestellt. Kann trotzdem schwer verlaufen! 'Seronegativ' heißt NICHT 'harmlos'.\n\nWichtig: Anti-CCP ist spezifischer als RF. RF kann auch bei Gesunden oder anderen Erkrankungen positiv sein (Hepatitis C, Sjögren-Syndrom).",
      fallbezug:
        "Wenn Mehmets Bluttest Anti-CCP-positiv zeigt, ist die Diagnose RA sehr wahrscheinlich (Spezifität >95%).",
      glossarBegriffe: [
        "Rheumafaktor",
        "Anti-CCP-Antikörper",
        "Seropositiv",
        "Seronegativ",
      ],
    },
    contentB1: {
      title: "Zwei Formen von RA",
      body: "Seropositive RA (70 bis 80 von 100 Patienten):\nIm Blut findet man den Rheumafaktor oder Anti-CCP. Diese Form ist oft stärker. Die Gelenke können schneller kaputt gehen.\n\nSeronegative RA (20 bis 30 von 100 Patienten):\nIm Blut findet man KEINEN Rheumafaktor. Aber die Krankheit kann trotzdem schwer sein! Ohne Bluttest heißt nicht harmlos.\n\nWichtig: Anti-CCP ist genauer als der Rheumafaktor. Der Rheumafaktor kann auch bei anderen Krankheiten positiv sein.",
      fallbezug:
        "Wenn Mehmets Bluttest Anti-CCP zeigt, ist es sehr wahrscheinlich RA.",
    },
  },

  // =============================================================
  // Phase 4 (Min 25-26): ENTDECKER — Vergleichstabelle
  // =============================================================
  {
    stepId: "s1-13-comparison-formen",
    phase: 4,
    stepType: "comparison",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
    ],
    xpValue: 15,
    contentC1: {
      title: "Vergleich: Seropositive vs. Seronegative RA",
      body: "Die beiden Formen im direkten Vergleich. Seropositive RA ist häufiger und oft aggressiver — aber seronegative RA wird dafür manchmal zu spät erkannt.",
    },
    contentB1: {
      title: "Die zwei RA-Formen im Vergleich",
      body: "So unterscheiden sich die beiden Formen. Seropositive RA ist häufiger und oft schwerer. Seronegative RA wird manchmal spät erkannt.",
    },
    question: {
      fragetext: "Vergleiche die beiden RA-Formen.",
      comparison: {
        instruction:
          "Scrolle durch die Tabelle und vergleiche die beiden Formen.",
        columns: [
          { label: "Seropositiv (RF+/CCP+)", icon: "🧪" },
          { label: "Seronegativ (RF-/CCP-)", icon: "🚫" },
        ],
        rows: [
          {
            criterion: "Antikörper im Blut",
            values: [
              "RF und/oder Anti-CCP nachweisbar",
              "Kein RF, kein Anti-CCP",
            ],
            valuesB1: [
              "Rheumafaktor oder Anti-CCP im Blut",
              "Kein Rheumafaktor im Blut",
            ],
          },
          {
            criterion: "Häufigkeit",
            values: ["70-80% aller RA-Patienten", "20-30% aller RA-Patienten"],
            valuesB1: [
              "70 bis 80 von 100 RA-Patienten",
              "20 bis 30 von 100 RA-Patienten",
            ],
          },
          {
            criterion: "Verlauf",
            values: [
              "Oft aggressiver, früherer Gelenkschaden",
              "Variabel, manchmal milder",
            ],
            valuesB1: [
              "Oft schwerer, Gelenke schneller kaputt",
              "Unterschiedlich, manchmal leichter",
            ],
            highlight: 0,
          },
          {
            criterion: "Organbeteiligung",
            values: [
              "Häufiger: Rheumaknoten, Vaskulitis, Lunge",
              "Seltener, aber möglich",
            ],
            valuesB1: [
              "Öfter: Knoten, Gefäße, Lunge betroffen",
              "Seltener, aber auch möglich",
            ],
          },
          {
            criterion: "Prognose",
            values: [
              "Unter Therapie gut, ohne Therapie: Gelenkzerstörung",
              "Unter Therapie gut, Diagnose oft verspätet",
            ],
            valuesB1: [
              "Mit Behandlung gut. Ohne: Gelenke gehen kaputt",
              "Mit Behandlung gut. Aber Diagnose kommt oft spät",
            ],
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 4 (Min 26-27): CHALLENGE — TrueFalse Mythen
  // =============================================================
  {
    stepId: "s1-14-truefalse-mythen",
    phase: 4,
    stepType: "truefalse",
    modus: "challenge",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "AMBOSS: Rheumatoide Arthritis"],
    xpValue: 15,
    contentC1: {
      title: "Mythen über RA-Symptome",
      body: "RA und Arthrose werden häufig verwechselt. Auch ein negativer Laborbefund schließt RA nicht aus.",
      fallbezug:
        "Mehmet hat einige dieser Mythen von Kollegen gehört. Kannst du aufklären?",
    },
    contentB1: {
      title: "Mythen über RA-Symptome",
      body: "Manche denken, RA und Arthrose sind dasselbe. Oder: Kein Rheumafaktor im Blut = kein Rheuma. Beides stimmt nicht.",
      fallbezug: "Mehmet hat einige von diesen Sachen gehört. Was stimmt?",
    },
    question: {
      fragetext: "Beurteile jede Aussage: Stimmt sie oder nicht?",
      trueFalseCards: [
        {
          statement:
            "RA-Schmerzen verschlimmern sich bei Bewegung, wie bei Arthrose.",
          isTrue: false,
          explanation:
            "Falsch! RA-Schmerz bessert sich bei Bewegung (Anlaufschmerz). Arthrose wird bei Belastung schlimmer (Belastungsschmerz). Das ist ein wichtiger Unterschied!",
        },
        {
          statement:
            "Ein negativer Rheumafaktor schließt eine RA aus.",
          isTrue: false,
          explanation:
            "Falsch! 20-30% der RA-Patienten sind seronegativ. Ein negativer RF schließt RA nicht aus. Darum ist Anti-CCP wichtig (Spezifität >95%).",
        },
        {
          statement:
            "RA befällt typischerweise zuerst die kleinen Gelenke der Hände und Füße.",
          isTrue: true,
          explanation:
            "Richtig! MCP-, PIP- und MTP-Gelenke (Zehengrundgelenke) sind typischerweise zuerst betroffen. Große Gelenke können im Verlauf hinzukommen.",
        },
        {
          statement:
            "Frauen erkranken etwa 3x häufiger an RA als Männer.",
          isTrue: true,
          explanation:
            "Richtig! Das Geschlechterverhältnis ist ca. 3:1. Östrogene spielen eine Rolle — daher tritt RA häufig nach der Menopause oder nach Schwangerschaften auf.",
        },
      ],
    },
  },

  // =============================================================
  // Phase 4 (Min 27-28): SORTIERSTATION — Gelenkbeteiligung vs. Extra-artikulär
  // =============================================================
  {
    stepId: "s1-15-categorize-manifestation",
    phase: 4,
    stepType: "categorize",
    modus: "sortierstation",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "AMBOSS: Rheumatoide Arthritis"],
    xpValue: 15,
    contentC1: {
      title: "Symptome sortieren: Gelenk vs. Extra-artikulär",
      body: "RA ist eine systemische Erkrankung — sie betrifft nicht nur die Gelenke. Extra-artikuläre Manifestationen können Augen, Lunge und Gefäße befallen.",
      glossarBegriffe: ["Synovitis", "Rheumaknoten"],
    },
    contentB1: {
      title: "Sortiere: Gelenk-Symptome oder andere?",
      body: "RA ist nicht nur eine Gelenk-Krankheit. Sie kann auch die Augen, die Lunge oder die Blutgefäße betreffen. Solche Beschwerden außerhalb der Gelenke heißen extra-artikuläre Manifestationen.",
    },
    question: {
      fragetext:
        "Ziehe jedes Symptom in die richtige Kategorie.",
      categories: [
        { name: "Gelenk-Symptome" },
        { name: "Extra-artikulär" },
      ],
      categoryItems: [
        { text: "Morgensteifigkeit der Fingergelenke", correctCategory: 0 },
        { text: "Symmetrische MCP-Schwellung", correctCategory: 0 },
        { text: "Trockene Augen (Keratokonjunktivitis sicca)", correctCategory: 1 },
        { text: "Druckschmerz im Handgelenk", correctCategory: 0 },
        { text: "Rheumaknoten am Ellenbogen", correctCategory: 1 },
        { text: "Pleuritis (Rippenfellentzündung)", correctCategory: 1 },
        { text: "Eingeschränkter Faustschluss", correctCategory: 0 },
        { text: "Vaskulitis (Gefäßentzündung)", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // Phase 4 (Min 28-29): PUZZLE — Cloze Lückentext
  // =============================================================
  {
    stepId: "s1-16-cloze-symptomkomplex",
    phase: 4,
    stepType: "cloze",
    modus: "puzzle",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024"],
    xpValue: 15,
    contentC1: {
      title: "Lückentext: Der RA-Symptomkomplex",
      body: "Die RA zeigt ein charakteristisches Symptommuster: symmetrischer Befall kleiner Gelenke, ausgeprägte Morgensteifigkeit und typische Laborveränderungen. Dieses Muster unterscheidet sie von anderen Gelenkerkrankungen wie Arthrose oder Gicht.",
      fallbezug: "Beschreibe Mehmets typisches Krankheitsbild.",
    },
    contentB1: {
      title: "Lückentext: RA-Symptome",
      body: "RA hat ein typisches Muster: Beide Hände sind betroffen (symmetrisch), die Finger sind morgens steif, und bestimmte Blutwerte sind verändert. Dieses Muster hilft bei der Diagnose.",
      fallbezug: "Beschreibe, was bei Mehmet passiert.",
    },
    question: {
      fragetext: "Ergänze die fehlenden Begriffe.",
      cloze: {
        textWithBlanks:
          "Die RA beginnt typischerweise mit {{1}} in den {{2}}-Gelenken. Diese dauert bei RA typischerweise über {{3}} Minuten. Der Befall ist charakteristisch {{4}}, also beide Körperseiten gleich betroffen.",
        blanks: [
          {
            id: 1,
            correct: "Morgensteifigkeit",
            distractors: ["Belastungsschmerz", "Nachtschmerz", "Fieber"],
          },
          {
            id: 2,
            correct: "MCP/PIP",
            distractors: ["DIP", "Knie", "Hüft"],
          },
          {
            id: 3,
            correct: "60",
            distractors: ["15", "30", "120"],
          },
          {
            id: 4,
            correct: "symmetrisch",
            distractors: ["einseitig", "wandernd", "alternierend"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 4 (Min 29-30): PRAXIS-SIM — Branching: Trockene Augen
  // =============================================================
  {
    stepId: "s1-17-branching-augen",
    phase: 4,
    stepType: "branching",
    modus: "praxis-sim",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "AMBOSS: Sjögren-Syndrom",
    ],
    xpValue: 20,
    wusstestDuDas:
      "Das sekundäre Sjögren-Syndrom tritt bei ca. 10-30% der RA-Patienten auf. Es verursacht trockene Augen und trockenen Mund durch Entzündung der Speichel- und Tränendrüsen.",
    contentC1: {
      title: "Mehmet klagt über neue Beschwerden",
      body: "Mehmet erwähnt beim Kontrolltermin: 'Ach ja, noch was — meine Augen sind total trocken in letzter Zeit. Und der Mund auch. Meine Frau sagt, ich soll zum Augenarzt. Aber das hat doch nichts mit den Händen zu tun, oder?'",
      fallbezug:
        "Hat Mehmets Augentrockenheit etwas mit seiner RA zu tun?",
      glossarBegriffe: ["Sjögren-Syndrom"],
    },
    contentB1: {
      title: "Mehmet hat noch ein Problem",
      body: "Mehmet sagt: 'Meine Augen sind sehr trocken. Und der Mund auch. Meine Frau sagt, ich soll zum Augenarzt. Aber das hat doch nichts mit meinen Händen zu tun?'",
      fallbezug: "Hängen die trockenen Augen mit der RA zusammen?",
    },
    question: {
      fragetext:
        "Was antwortest du Mehmet?",
      branchingOptions: [
        {
          text: "Herr Demir, das ist eine wichtige Information! Trockene Augen und trockener Mund können tatsächlich mit einer RA zusammenhängen. Das nennt man Sjögren-Syndrom. Ich notiere das für die Ärztin — sie sollte das wissen.",
          feedback:
            "Ausgezeichnet! Du erkennst die Verbindung: Sekundäres Sjögren-Syndrom ist eine häufige extra-artikuläre Manifestation der RA (10-30%). Trockene Augen + Mundtrockenheit + RA = Verdacht auf Sjögren. Wichtig: Information an die Ärztin weitergeben!",
          isCorrect: true,
        },
        {
          text: "Da haben Sie recht, Herr Demir — das hat wahrscheinlich nichts miteinander zu tun. Gehen Sie einfach zum Augenarzt.",
          feedback:
            "Vorsicht! Trockene Augen bei einem RA-Patienten sind KEIN Zufall. Das sekundäre Sjögren-Syndrom tritt bei 10-30% der RA-Patienten auf. Nie Symptome isoliert betrachten — immer im Gesamtbild sehen!",
          isCorrect: false,
        },
        {
          text: "Das sollten wir auf jeden Fall der Ärztin sagen. Bei Gelenkerkrankungen können manchmal auch andere Organe betroffen sein.",
          feedback:
            "Guter Instinkt! Du erkennst, dass es eine Verbindung geben könnte und gibst die Info weiter. Noch besser wäre: Sjögren-Syndrom als mögliche Ursache benennen (extra-artikuläre Manifestation der RA).",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Phase 5 (Min 30-32): SCHREIBTISCH — Freetext Symptombild
  // =============================================================
  {
    stepId: "s1-18-freetext-symptombild",
    phase: 5,
    stepType: "freetext",
    modus: "schreibtisch",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
    ],
    xpValue: 20,
    contentC1: {
      title: "Beschreibe Mehmets Symptombild",
      body: "Fasse zusammen, welche RA-typischen Symptome Mehmet zeigt. Nenne mindestens 4 Symptome und ordne sie als Frühsymptome oder mögliche extra-artikuläre Manifestationen ein.",
      fallbezug:
        "Denke an alle Gespräche mit Mehmet und deine Beobachtungen.",
    },
    contentB1: {
      title: "Beschreibe Mehmets Symptome",
      body: "Schreibe auf: Welche RA-Symptome hat Mehmet? Nenne 4 oder mehr. Sind es frühe oder späte Zeichen?",
      fallbezug:
        "Denke an alles, was Mehmet gesagt hat und was du gesehen hast.",
    },
    question: {
      fragetext:
        "Beschreibe Mehmets RA-typisches Symptombild in eigenen Worten. Nenne mindestens 4 Symptome.",
      musterantwort:
        "Mehmet zeigt folgende RA-typische Frühsymptome: 1) Morgensteifigkeit >60 Min (fast 2 Stunden) in Fingern und Handgelenken, 2) Symmetrische Schwellung der MCP-Gelenke beidseits mit Überwärmung, 3) Eingeschränkter Faustschluss (Funktionsverlust), 4) Ausgeprägte Fatigue. Zusätzlich berichtet er über trockene Augen und Mundtrockenheit — Verdacht auf sekundäres Sjögren-Syndrom als extra-artikuläre Manifestation.",
      bewertungskriterien: [
        "Morgensteifigkeit mit Dauer (>60 Min) genannt",
        "Symmetrischer Befall erwähnt",
        "Schwellung/Überwärmung der Gelenke genannt",
        "Fatigue als Begleitsymptom erwähnt",
        "Einordnung als Frühsymptome",
        "Optional: Sjögren-Syndrom/trockene Augen erwähnt",
      ],
      satzanfaengeB1: [
        "Mehmet hat folgende Symptome: ...",
        "Seine Finger sind morgens ...",
        "Die Gelenke sind auf beiden Seiten ...",
        "Außerdem ist er ...",
      ],
    },
  },

  // =============================================================
  // Phase 5 (Min 32-33): CHALLENGE — Fillin Morgensteifigkeit
  // =============================================================
  {
    stepId: "s1-19-fillin-morgensteifigkeit",
    phase: 5,
    stepType: "fillin",
    modus: "challenge",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["S3-Leitlinie RA DGRh 2024", "ACR/EULAR-Kriterien 2010"],
    xpValue: 10,
    contentC1: {
      title: "Lückensatz: Morgensteifigkeit",
      body: "Die Dauer der Morgensteifigkeit ist ein wichtiges diagnostisches Kriterium der ACR/EULAR-Klassifikation. Sie unterscheidet entzündliche Gelenkerkrankungen von degenerativen: Bei Arthrose beträgt sie nur 15-30 Minuten, bei RA deutlich länger.",
      fallbezug: "Mehmets Morgensteifigkeit dauert sogar fast 2 Stunden — weit über dem Grenzwert.",
    },
    contentB1: {
      title: "Lücke ausfüllen: Morgensteifigkeit",
      body: "Wie lange die Finger morgens steif sind, ist ein wichtiger Hinweis für die Diagnose. Bei Arthrose dauert die Steifigkeit nur kurz (15-30 Minuten). Bei RA dauert sie viel länger.",
      fallbezug: "Bei Mehmet dauert die Steifigkeit fast 2 Stunden. Das ist viel mehr als der Grenzwert.",
    },
    question: {
      fragetext: "Ergänze den fehlenden Wert.",
      fillin: {
        sentence:
          "Morgensteifigkeit bei RA dauert typischerweise länger als ___ Minuten und ist ein ACR/EULAR-Klassifikationskriterium.",
        options: ["30", "60", "90", "120"],
        correctIndex: 1,
      },
    },
  },

  // =============================================================
  // Phase 5 (Min 33-35): PUZZLE — Memory Symptom ↔ Fachbegriff
  // =============================================================
  {
    stepId: "s1-20-memory-begriffe",
    phase: 5,
    stepType: "memory",
    modus: "puzzle",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Pschyrembel Online", "Herold Innere Medizin 2024"],
    xpValue: 15,
    contentC1: {
      title: "Memory: Symptom und Fachbegriff",
      body: "Pflegekräfte müssen beide Sprachen sprechen: Alltagssprache für Patienten, Fachbegriffe für die Dokumentation.",
    },
    contentB1: {
      title: "Memory: Einfach und Fachsprache",
      body: "Einfaches Wort und Fachbegriff gehören zusammen. Du brauchst beides in der Pflege.",
    },
    question: {
      fragetext: "Finde die 6 Paare.",
      memoryPairs: [
        { a: "Steife Gelenke am Morgen", b: "Morgensteifigkeit" },
        { a: "Geschwollene Gelenkinnenhaut", b: "Synovitis" },
        { a: "Extreme Müdigkeit", b: "Fatigue" },
        { a: "Finger zeigen zum kleinen Finger", b: "Ulnardeviation" },
        { a: "Fingerknöchel-Gelenke", b: "MCP-Gelenke" },
        { a: "Knoten unter der Haut", b: "Rheumaknoten" },
      ],
    },
  },

  // =============================================================
  // Phase 6 (Min 35-36): CHALLENGE — Slider Prävalenz
  // =============================================================
  {
    stepId: "s1-21-slider-praevalenz",
    phase: 6,
    stepType: "slider",
    modus: "challenge",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "RKI Gesundheitsberichterstattung"],
    xpValue: 10,
    contentC1: {
      title: "Schätzfrage: Wie häufig ist RA?",
      body: "Wie viel Prozent der Bevölkerung ist von Rheumatoider Arthritis betroffen? Schiebe den Regler.",
    },
    contentB1: {
      title: "Schätze: Wie viele Menschen haben RA?",
      body: "Wie viel Prozent der Menschen haben RA? Schiebe den Regler.",
    },
    question: {
      fragetext: "Schätze die Prävalenz der RA in der Bevölkerung.",
      slider: {
        instruction: "Schiebe den Regler auf deinen geschätzten Wert.",
        unit: "%",
        min: 0,
        max: 10,
        step: 0.1,
        correctValue: 0.8,
        tolerance: 0.3,
        explanation:
          "Die Prävalenz der RA liegt bei 0,5-1% der Bevölkerung (ca. 0,8% in Deutschland). Das klingt wenig, bedeutet aber ca. 660.000 Betroffene allein in Deutschland. Frauen sind 3x häufiger betroffen, Altersgipfel 55-75 Jahre.",
      },
    },
  },

  // =============================================================
  // Phase 6 (Min 36-37): CHECKPOINT — Summary + Rückbezug
  // =============================================================
  {
    stepId: "s1-22-summary-ergebnis",
    phase: 6,
    stepType: "summary",
    modus: "checkpoint",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [],
    xpValue: 5,
    contentC1: {
      title: "Session 1 — Dein Ergebnis",
      body: "Am Anfang hast du über Rheuma-Mythen abgestimmt. Jetzt weißt du, was wirklich stimmt — und warum.",
      fallbezug:
        "In Session 2 erfährst du, wie die Diagnose gesichert wird und welche Therapie Mehmet bekommt.",
    },
    contentB1: {
      title: "Session 1 — Dein Ergebnis",
      body: "Am Anfang hast du geraten. Jetzt weißt du die Antworten! Du hast die wichtigsten Symptome und Formen der RA gelernt.",
      fallbezug:
        "In Session 2 lernst du die Diagnose und die Behandlung.",
    },
    question: {
      fragetext: "Zusammenfassung",
      summary: {
        reflexionRueckbezug:
          "Am Anfang hast du geraten — jetzt kannst du jede Aussage begründen!",
        kernaussagen: [
          "Die 7 Leitsymptome der RA: Morgensteifigkeit >60 Min, symmetrischer Befall, MCP/PIP-Gelenke, Schwellung, Schmerz, Funktionsverlust, Fatigue",
          "Frühsymptome (Steifigkeit, Schwellung) vs. Spätsymptome (Deformität, Organbeteiligung)",
          "Seropositive RA (RF+/CCP+, 70-80%) vs. Seronegative RA (RF-/CCP-, 20-30%)",
          "RA ist systemisch — auch Augen (Sjögren), Lunge und Gefäße können betroffen sein",
          "Frühe Diagnose im 'Window of Opportunity' verbessert die Prognose erheblich",
        ],
      },
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Morgensteifigkeit",
    erklaerung:
      "Steifigkeit der Gelenke nach dem Aufwachen. Bei RA typischerweise >60 Minuten, bei Arthrose <30 Minuten. Leitsymptom der RA.",
    uebersetzungTr: "Sabah tutukluğu",
    uebersetzungAr: "تيبس صباحي",
  },
  {
    begriff: "Synovitis",
    erklaerung:
      "Entzündung der Synovialmembran (Gelenkinnenhaut). Führt zu Schwellung, Überwärmung und Schmerz. Zentraler Entzündungsprozess bei RA.",
    uebersetzungTr: "Sinovit",
    uebersetzungAr: "التهاب الغشاء الزليلي",
  },
  {
    begriff: "Fatigue",
    erklaerung:
      "Extreme Müdigkeit und Erschöpfung, die weit über normale Müdigkeit hinausgeht. Betrifft ca. 80% der RA-Patienten.",
    uebersetzungTr: "Yorgunluk / Bitkinlik",
    uebersetzungAr: "إرهاق شديد",
  },
  {
    begriff: "MCP-Gelenke",
    erklaerung:
      "Metacarpophalangealgelenke (Fingergrundgelenke). Bei RA typischerweise als erstes betroffen.",
    uebersetzungTr: "MKF eklemleri (parmak kök eklemleri)",
    uebersetzungAr: "مفاصل المشط السلامية",
  },
  {
    begriff: "Pannus",
    erklaerung:
      "Aggressives Entzündungsgewebe, das sich bei chronischer Synovitis über den Gelenkknorpel legt und ihn zerstört.",
    uebersetzungTr: "Pannus (iltihaplı doku)",
    uebersetzungAr: "نسيج التهابي (بانوس)",
  },
  {
    begriff: "DAS28",
    erklaerung:
      "Disease Activity Score 28: Messinstrument zur Bewertung der RA-Aktivität. Berücksichtigt 28 Gelenke, Entzündungswerte und Patienteneinschätzung.",
    uebersetzungTr: "DAS28 (Hastalık Aktivite Skoru)",
    uebersetzungAr: "مؤشر نشاط المرض 28",
  },
  {
    begriff: "Rheumafaktor",
    erklaerung:
      "Autoantikörper gegen den Fc-Teil von IgG. Positiv bei 70-80% der RA-Patienten, aber nicht spezifisch (auch bei anderen Erkrankungen positiv).",
    uebersetzungTr: "Romatoid faktör",
    uebersetzungAr: "عامل الروماتويد",
  },
  {
    begriff: "Anti-CCP-Antikörper",
    erklaerung:
      "Antikörper gegen citrullinierte Peptide. Hochspezifisch für RA (>95%). Wichtiger als der Rheumafaktor für die Diagnose.",
    uebersetzungTr: "Anti-CCP antikoru",
    uebersetzungAr: "أجسام مضادة للببتيد السيتروليني",
  },
  {
    begriff: "Ulnardeviation",
    erklaerung:
      "Abweichung der Finger zur Kleinfingerseite. Typische Spätdeformität der RA. Heute selten dank früher Therapie.",
    uebersetzungTr: "Ulnar deviasyon (parmak sapması)",
    uebersetzungAr: "انحراف زندي للأصابع",
  },
  {
    begriff: "Rheumaknoten",
    erklaerung:
      "Subkutane Knoten an druckbelasteten Stellen (Ellenbogen, Finger). Bei 20-30% der seropositiven RA-Patienten.",
    uebersetzungTr: "Romatoid nodül",
    uebersetzungAr: "عقيدات روماتويدية",
  },
  {
    begriff: "Sjögren-Syndrom",
    erklaerung:
      "Autoimmunerkrankung der Speichel- und Tränendrüsen. Sekundär bei 10-30% der RA-Patienten. Verursacht trockene Augen und trockenen Mund.",
    uebersetzungTr: "Sjögren sendromu",
    uebersetzungAr: "متلازمة شوغرن",
  },
  {
    begriff: "Seropositiv/Seronegativ",
    erklaerung:
      "Seropositiv: Rheumafaktor und/oder Anti-CCP im Blut nachweisbar. Seronegativ: keine dieser Antikörper nachweisbar. Beide Formen können schwer verlaufen.",
    uebersetzungTr: "Seropozitif/Seronegatif",
    uebersetzungAr: "إيجابي المصل / سلبي المصل",
  },
];

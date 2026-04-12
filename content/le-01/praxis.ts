// LE-01 Praxis-Tab: Simulationen und Übungen — 4 Übungen
// Quelle: praxis-plan.md | Dozentin Phase 2 | 2026-04-12
// CE01+CE03, KB V.1, Drittel 1, Bloom B1–B3

import type { PraxisUebung, ContentStep } from "../_types";

// === ÜBUNG 1: Pflegeanamnese durchführen ===

const PRAX01_STEPS: ContentStep[] = [
  {
    stepId: "le01-prax01-text-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeanamnese",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 5,
    displayFormat: "scenario",
    contentC1: {
      title: "Dein Auftrag: Aufnahmegespräch mit Fatma K.",
      body: `Du bist Pflegeschülerin im 1. Ausbildungsjahr auf einer inneren Station. Deine Patientin Fatma K. (71 Jahre, türkischstämmig, seit 1972 in Deutschland) wurde mit einer Pneumonie aufgenommen. Fatma spricht gutes Alltagsdeutsch, versteht aber medizinische Fachbegriffe nicht. Sie ist ängstlich und sagt: "Ich verstehe die Wörter nicht, aber ich verstehe, ob jemand es gut meint."\n\nDeine Praxisanleiterin bittet dich: "Führe bitte das Aufnahmegespräch mit Frau K. Sammle alle pflegerelevanten Informationen. Achte darauf, dass sie sich wohlfühlt — und sprich einfach."\n\nDu hast einen leeren Pflegeanamnesebogen vor dir. Fatma sitzt im Bett, ihre Hände liegen auf der Bettdecke, sie lächelt unsicher.\n\nFatma sagt: "In meiner Kultur fragt man nicht 'Was haben Sie?' — man fragt 'Wie geht es Ihrem Herzen?'"`,
    },
    contentB1: {
      title: "Dein Auftrag: Gespräch mit Fatma K.",
      body: "Du bist Pflegeschülerin. Fatma K. (71 Jahre) kommt auf die Station. Sie hat eine Lungenentzündung. Sie spricht Deutsch, aber schwierige Wörter versteht sie nicht.\n\nDeine Anleiterin sagt: 'Führe das Aufnahmegespräch. Sprich einfach. Sie soll sich wohlfühlen.'\n\nFatma sitzt im Bett. Sie lächelt unsicher. Du hast den Anamnesebogen in der Hand.",
    },
  },
  {
    stepId: "le01-prax01-mc-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 80", "I Care Pflege S. 23"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeanamnese",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Gesprächsatmosphäre schaffen",
      body: "Wie schaffst du eine angenehme Gesprächsatmosphäre für das Aufnahmegespräch mit Fatma?",
    },
    contentB1: {
      title: "Wie beginnst du das Gespräch?",
      body: "Fatma sitzt im Bett. Du kommst rein. Was machst du zuerst, damit sie sich wohlfühlt?",
    },
    question: {
      fragetext: "Wie schaffst du eine angenehme Gesprächsatmosphäre für das Aufnahmegespräch mit Fatma?",
      optionen: [
        {
          text: "Du setzt dich auf Augenhöhe, stellst dich namentlich vor und fragst Fatma, wie sie angesprochen werden möchte",
          isCorrect: true,
          explanation:
            "Genau richtig! Augenhöhe signalisiert Respekt, Vorstellung schafft Vertrauen, und die Frage nach dem gewünschten Anreden zeigt individuelle Wertschätzung.",
          explanationB1: "Richtig! Hinsetzen = gleiche Höhe = Respekt. Vorstellung + Frage nach dem Namen = Vertrauen.",
        },
        {
          text: "Du bleibst stehen, nimmst den Anamnesebogen und fragst direkt nach den Vorerkrankungen",
          isCorrect: false,
          explanation:
            "Guter Ansatz, dass du strukturiert vorgehst! Aber: Im Stehen entsteht ein Machtgefälle. Setz dich auf Augenhöhe — das signalisiert: Ich nehme mir Zeit für dich. Probier es nochmal.",
          explanationB1:
            "Du bist fleißig — das ist gut! Aber stehend zu reden ist nicht gut. Setz dich. Das zeigt: Ich habe Zeit für dich.",
        },
        {
          text: "Du fragst die Kollegin Ayşe, ob sie übersetzen kann, und lässt Ayşe das Gespräch führen",
          isCorrect: false,
          explanation:
            "Es ist gut, dass du an die Sprachbarriere denkst! Aber: Die Pflegeanamnese ist eine vorbehaltene Tätigkeit — du lernst sie, indem du sie selbst durchführst. Ayşe kann unterstützen, aber du führst das Gespräch.",
          explanationB1:
            "Gut gedacht! Aber das Gespräch führst du — nicht Ayşe. Ayşe kann helfen, wenn Fatma etwas nicht versteht.",
        },
        {
          text: "Du wartest, bis der Arzt kommt, und machst die Anamnese zusammen mit ihm",
          isCorrect: false,
          explanation:
            "Teamarbeit ist wichtig! Aber: Die Pflegeanamnese ist pflegerisch — sie gehört zu den vorbehaltenen Tätigkeiten nach § 4 PflBG. Du brauchst den Arzt dafür nicht.",
          explanationB1: "Der Arzt ist nicht nötig hier. Die Pflegeanamnese ist deine Aufgabe als Pflegeschülerin.",
        },
      ],
    },
  },
  {
    stepId: "le01-prax01-chatSim-03",
    phase: "s1",
    stepType: "chatSim",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegeanamnese",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Aufnahmegespräch führen",
      body: "Führe jetzt das Aufnahmegespräch mit Fatma K. Frage alle relevanten Lebensbereiche ab: körperliche Beschwerden, Medikamente, Ernährung, kulturelle und religiöse Bedürfnisse, soziales Umfeld. Benutze einfache Sprache — keine Fachbegriffe.",
    },
    contentB1: {
      title: "Sprich mit Fatma K.",
      body: "Führe das Gespräch mit Fatma. Frage nach: Beschwerden, Medikamente, Essen (halal?), Beten, Familie. Benutze einfache Wörter.",
    },
    question: {
      fragetext: "Führe das Aufnahmegespräch mit Fatma K. Benutze einfache Sprache.",
      chatSim: {
        patientName: "Fatma K.",
        situation:
          "Fatma K., 71 Jahre, türkischstämmig, Pneumonie. Sitzt im Bett, lächelt unsicher. Spricht gut Alltagsdeutsch, versteht keine medizinische Fachsprache.",
        situationB1:
          "Fatma K. ist 71 Jahre alt. Sie hat eine Lungenentzündung. Sie spricht Deutsch, aber schwierige Wörter nicht.",
        systemPrompt:
          "Du bist Fatma K., 71 Jahre alte türkischstämmige Patientin. Du bist ängstlich aber herzlich. Du sprichst gutes Alltagsdeutsch, verstehst aber keine medizinischen Fachbegriffe — wenn der Schüler Fachwörter benutzt, sage: 'Das verstehe ich nicht. Können Sie das einfacher sagen?' Bei Fragen nach Medikamenten: 'Mein Sohn hat die immer bestellt. Ich weiß nicht alle Namen. Die weißen Tabletten morgens, die roten abends.' Bei Schmerzen zeige auf die Brust und sage: 'Hier tut es weh. Beim Atmen.' Bei Ernährung: 'Ich esse nur halal. Gibt es das hier?' Bei Religion: 'Ich bete fünfmal am Tag. Gibt es einen ruhigen Platz?' Reagiere positiv, wenn der Schüler sich vorstellt, auf Augenhöhe sitzt und einfach spricht.",
        maxTurns: 8,
        evaluationCriteria: [
          "Offene Fragen gestellt",
          "Einfache Sprache verwendet (keine Fachbegriffe)",
          "Körperliche Beschwerden erfragt",
          "Medikamentensituation erfragt",
          "Ernährungsbedürfnisse (halal) erfragt",
          "Religiöse Bedürfnisse erfragt",
          "Soziales Umfeld erfragt",
        ],
      },
    },
  },
  {
    stepId: "le01-prax01-categorize-04",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 80"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-informationssammlung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Informationsarten zuordnen",
      body: "Ordne die Informationen aus dem Gespräch mit Fatma den richtigen Kategorien zu.",
    },
    contentB1: {
      title: "Welche Art von Information ist das?",
      body: "Ordne die Informationen aus dem Gespräch mit Fatma zu. Es gibt 2 Einteilungen: direkt/indirekt und objektiv/subjektiv.",
    },
    question: {
      fragetext: "Ordne die Informationen den richtigen Kategorien zu.",
      categories: [
        { name: "direkt + subjektiv" },
        { name: "direkt + objektiv" },
        { name: "indirekt + subjektiv" },
        { name: "indirekt + objektiv" },
      ],
      categoryItems: [
        { text: "'Hier tut es weh' (zeigt auf Brust)", correctCategory: 0 },
        { text: "Atemfrequenz 24/min (du zählst mit)", correctCategory: 1 },
        { text: "Sohn berichtet: 'Sie verwechselt manchmal Tabletten'", correctCategory: 2 },
        { text: "Medikamentenliste vom Hausarzt", correctCategory: 3 },
        { text: "Fatma: 'Ich schlafe schlecht seit ich hier bin'", correctCategory: 0 },
        { text: "Temperatur 38,2 °C", correctCategory: 1 },
      ],
    },
  },
  {
    stepId: "le01-prax01-freetext-05",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 80", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-dokumentation",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Pflegeanamnese dokumentieren",
      body: "Dokumentiere die wichtigsten Ergebnisse deines Aufnahmegesprächs mit Fatma. Nutze folgende Struktur:\n(1) Aufnahmegrund\n(2) Aktuelle Beschwerden\n(3) Vorerkrankungen/Medikamente\n(4) Ressourcen\n(5) Besondere Bedürfnisse (kulturell, religiös, sprachlich)",
    },
    contentB1: {
      title: "Schreibe die Pflegeanamnese auf",
      body: "Schreibe auf, was du von Fatma erfahren hast. Benutze diese Struktur:\n(1) Warum ist sie im Krankenhaus?\n(2) Was tut weh?\n(3) Welche Medikamente nimmt sie?\n(4) Was kann sie gut?\n(5) Besondere Bedürfnisse (Essen, Beten, Sprache)",
    },
    question: {
      fragetext: "Dokumentiere die Pflegeanamnese von Fatma K. in der vorgegebenen Struktur.",
      musterantwort:
        "Erwartete Elemente: Pneumonie als Aufnahmegrund, Brustschmerzen beim Atmen, unvollständige Medikamentenliste als Problem, Alltagsdeutsch als Ressource, halal-Essen und Gebetsplatz als kulturelle Bedürfnisse.",
      bewertungskriterien: [
        "Alle 5 Punkte der Struktur bearbeitet",
        "Pneumonie als Aufnahmegrund benannt",
        "Brustschmerzen und Atemnot als aktuelle Beschwerden",
        "Unvollständige Medikamentenliste dokumentiert",
        "Ressourcen identifiziert (Alltagsdeutsch, Kollegin Ayşe)",
        "Kulturelle und religiöse Bedürfnisse erfasst (halal, Gebetsplatz)",
      ],
    },
  },
];

// === ÜBUNG 2: Pflegeplanung erstellen ===

const PRAX02_STEPS: ContentStep[] = [
  {
    stepId: "le01-prax02-text-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeplanung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 5,
    displayFormat: "scenario",
    contentC1: {
      title: "Fallvorstellung: Herr S. nach Knie-TEP",
      body: `Markus T. (34 Jahre, Umschüler) ist auf der chirurgischen Station im Orientierungseinsatz. Sein Patient Herr S. (78 Jahre) wurde nach einer Knie-TEP (Kniegelenks-Totalendoprothese) aufgenommen. Markus hat folgende Informationen gesammelt:\n\n**Informationssammlung (Schritt 1 — bereits durchgeführt):**\n- Herr S., 78 J., lebt mit Ehefrau, 2 erwachsene Kinder in der Nähe\n- Knie-TEP rechts vor 2 Tagen, Wunde reizlos, Verband trocken\n- Schmerzen: VAS 6/10 bei Bewegung, VAS 3/10 in Ruhe\n- Mobilität: Kann aktuell nicht alleine aufstehen, braucht Hilfe beim Transfer\n- Ernährung: Isst wenig, "kein Appetit seit der OP"\n- Herr S. sagt: "Ich will so schnell wie möglich wieder nach Hause. Meine Frau schafft das nicht alleine im Garten."\n- Ressourcen: Motiviert, kooperativ, stabile Ehefrau als Bezugsperson, will aktiv mitarbeiten\n\nMarkus sagt: "Das ist ja wie ein Regelkreis — Ist-Zustand ermitteln, Ziel definieren, Maßnahme planen, prüfen ob es klappt. Das kenne ich aus der Technik!" Du hilfst Markus jetzt bei der Pflegeplanung für Herrn S.`,
    },
    contentB1: {
      title: "Fall: Herr S. nach Knie-Operation",
      body: "Herr S. (78 Jahre) hatte eine Knie-Operation vor 2 Tagen.\n- Er hat Schmerzen (6 von 10 bei Bewegung)\n- Er kann nicht alleine aufstehen\n- Er isst wenig\n- Er sagt: 'Ich will schnell wieder nach Hause'\n- Er ist motiviert und arbeitet mit\n\nMarkus und du machen jetzt die Pflegeplanung.",
    },
  },
  {
    stepId: "le01-prax02-categorize-02",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 81–82"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeprobleme",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Pflegeprobleme identifizieren",
      body: "Ordne die folgenden Aussagen: Ist das ein aktuelles Pflegeproblem, ein potenzielles Pflegeproblem oder eine Ressource?",
    },
    contentB1: {
      title: "Problem oder Ressource?",
      body: "Ordne diese Aussagen über Herrn S. zu: Aktuelles Problem, potenzielles Problem oder Ressource?",
    },
    question: {
      fragetext: "Ordne die Aussagen der richtigen Kategorie zu.",
      categories: [
        { name: "Aktuelles Pflegeproblem" },
        { name: "Potenzielles Pflegeproblem" },
        { name: "Ressource" },
      ],
      categoryItems: [
        { text: "Schmerzen VAS 6/10 bei Bewegung", correctCategory: 0 },
        { text: "Kann nicht alleine aufstehen", correctCategory: 0 },
        { text: "Isst wenig seit der OP", correctCategory: 0 },
        { text: "Motiviert und will aktiv mitarbeiten", correctCategory: 2 },
        { text: "Ehefrau als stabile Bezugsperson", correctCategory: 2 },
        { text: "Sturzgefahr durch eingeschränkte Mobilität", correctCategory: 1 },
        { text: "Risiko einer Wundheilungsstörung", correctCategory: 1 },
      ],
    },
  },
  {
    stepId: "le01-prax02-freetext-03",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 81–82"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeproblem-formulieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Pflegeproblem formulieren (PESR)",
      body: "Formuliere ein Pflegeproblem für Herrn S. nach dem PESR-Schema: P = Problem, E = Einflussfaktor (Ätiologie), S = Symptom/Zeichen, R = Ressource.",
    },
    contentB1: {
      title: "Pflegeproblem schreiben (PESR)",
      body: "Schreibe ein Pflegeproblem für Herrn S. nach dem PESR-Schema:\nP = Problem (Was ist das Problem?)\nE = Ursache (Warum?)\nS = Zeichen (Wie sieht man das?)\nR = Ressource (Was hilft?)",
    },
    question: {
      fragetext:
        "Formuliere ein Pflegeproblem für Herrn S. nach dem PESR-Schema (P = Problem, E = Einflussfaktor, S = Symptom, R = Ressource).",
      musterantwort:
        "P: Eingeschränkte Mobilität. E: Knie-TEP rechts vor 2 Tagen. S: Kann nicht alleine aufstehen, Schmerzen VAS 6/10 bei Bewegung. R: Motiviert, will aktiv mitarbeiten, kooperativ.",
      bewertungskriterien: [
        "Alle 4 PESR-Bestandteile benannt",
        "Problem korrekt formuliert (Mobilität)",
        "Einflussfaktor benannt (Knie-TEP)",
        "Symptome konkret beschrieben",
        "Ressourcen identifiziert (Motivation)",
      ],
      satzanfaengeB1: [
        "P: Das Problem ist ...",
        "E: Die Ursache ist ...",
        "S: Man sieht das, weil ...",
        "R: Herr S. kann ...",
      ],
    },
  },
  {
    stepId: "le01-prax02-careplan-04",
    phase: "s1",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 82–83"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegeziel",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Pflegeziel SMART formulieren",
      body: "Formuliere ein Pflegeziel für das Problem 'Eingeschränkte Mobilität'. Das Ziel soll SMART sein: spezifisch, messbar, akzeptiert, realisierbar, terminierbar.",
    },
    contentB1: {
      title: "Ein gutes Pflegeziel schreiben",
      body: "Schreibe ein Ziel für Herrn S. Das Ziel soll SMART sein: konkret, messbar, erreichbar.",
    },
    question: {
      fragetext: "Formuliere ein SMART-Pflegeziel für das Problem 'Eingeschränkte Mobilität' bei Herrn S.",
      careplan: {
        patientName: "Herr S.",
        situation: "78 Jahre, Knie-TEP rechts vor 2 Tagen, VAS 6/10 bei Bewegung, kann nicht alleine aufstehen.",
        situationB1: "Herr S. hat Schmerzen und kann nicht alleine aufstehen. Er ist motiviert.",
        steps: [
          {
            phase: "ziel",
            prompt:
              "Formuliere ein SMART-Pflegeziel für Herrn S. (spezifisch, messbar, akzeptiert, realisierbar, terminierbar).",
            promptB1: "Schreibe: Was soll Herr S. in wie vielen Tagen können? Wie weit? Mit welchem Hilfsmittel?",
            options: [
              {
                text: "Herr S. kann innerhalb von 5 Tagen mit Unterarmgehstützen 20 Meter auf dem Stationsflur gehen.",
                isCorrect: true,
                explanation:
                  "Genau! Das Ziel ist SMART: spezifisch (20 m auf dem Flur, mit Gehstützen), messbar (Meter), realisierbar, terminiert (5 Tage).",
              },
              {
                text: "Herr S. soll wieder laufen können.",
                isCorrect: false,
                explanation:
                  "Guter Ansatz! Aber: 'wieder laufen können' ist zu ungenau. Bis wann? Wie weit? Mit welchem Hilfsmittel? Je konkreter dein Ziel, desto besser kannst du später prüfen, ob es erreicht wurde.",
              },
              {
                text: "Herr S. soll sich besser fühlen.",
                isCorrect: false,
                explanation:
                  "Das ist nicht messbar. Pflegeziele müssen SMART sein. Was bedeutet 'besser fühlen' genau? Wie lange soll das dauern?",
              },
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le01-prax02-sorting-05",
    phase: "s1",
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 82–83", "Transfer"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegemassnahmen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Pflegemaßnahmen in die richtige Reihenfolge",
      body: "Bringe die Pflegemaßnahmen für die Mobilisation von Herrn S. in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Was machst du zuerst?",
      body: "Bringe die Maßnahmen zur Mobilisation von Herrn S. in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Bringe die Pflegemaßnahmen für die Mobilisation von Herrn S. in die richtige Reihenfolge.",
      sortItems: [
        "Schmerzmedikation 30 Min. vor Mobilisation sicherstellen",
        "Herrn S. über geplante Mobilisation informieren und motivieren",
        "Bett auf Arbeitshöhe bringen, rutschfeste Schuhe anziehen",
        "Herrn S. an die Bettkante setzen, Kreislauf prüfen",
        "Transfer in den Stand mit Unterstützung",
        "Erste Gehstrecke mit Unterarmgehstützen (5–10 Meter)",
        "Schmerzlevel und Befinden nach Mobilisation dokumentieren",
      ],
    },
  },
  {
    stepId: "le01-prax02-reflection-06",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 78", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeverstaendnis",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Mensch ≠ Maschine",
      body: `Markus sagt: "In der Technik gibt es für jedes Problem eine Lösung. In der Pflege gibt es manchmal nur ein 'Es kommt darauf an'." — Was meint er damit? Inwiefern unterscheidet sich der Pflegeprozess von einem technischen Regelkreis?`,
    },
    contentB1: {
      title: "Pflege ist anders als Technik",
      body: "Markus sagt: 'In der Technik gibt es eine Lösung. In der Pflege: Es kommt darauf an.' Was meint er? Warum ist Pflege nicht wie eine Maschine reparieren?",
    },
    question: {
      fragetext:
        "Inwiefern unterscheidet sich der Pflegeprozess von einem technischen Regelkreis? Was meint Markus mit 'Es kommt darauf an'?",
      reflection: {
        prompt:
          "Beschreibe, warum der Pflegeprozess zwar systematisch ist wie ein Regelkreis, aber der Mensch keine Maschine ist. Was macht Pflege individuell?",
        placeholder: "Schreibe deine Gedanken...",
        systemPrompt:
          "Bestätige Antworten, die individuelle Faktoren erwähnen (Motivation, Schmerz, Tagesform, persönliche Ziele). Hebe hervor, wenn der Schüler die Flexibilität des Pflegeprozesses erkennt. Ergänze sanft: Der Pflegeprozess ist zwar systematisch, aber Pflege braucht immer individuelle Anpassung — darin liegt der Unterschied zur Technik.",
      },
    },
  },
];

// === ÜBUNG 3: Ethische Fallbesprechung ===

const PRAX03_STEPS: ContentStep[] = [
  {
    stepId: "le01-prax03-text-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 5,
    displayFormat: "scenario",
    contentC1: {
      title: "Ethisches Dilemma: Herr R. und die Sauerstofftherapie",
      body: `Herr R. (82 Jahre) hat eine fortgeschrittene COPD und wurde wegen einer akuten Exazerbation eingeliefert. Der Arzt empfiehlt eine dauerhafte Sauerstofftherapie. Herr R. lehnt ab: "Ich will nicht an einem Schlauch hängen. Wenn es so weit ist, ist es so weit."\n\nSeine Tochter (55 J.) kommt aufgelöst zum Stützpunkt: "Bitte überzeugen Sie meinen Vater! Er wird sterben, wenn er den Sauerstoff nicht nimmt!"\n\nDu bist als Pflegeschüler im 1. Ausbildungsjahr dabei. Herr R. sitzt im Bett, Sauerstoffsättigung 88%, atmet schwer. Die Praxisanleiterin erklärt: "In solchen Situationen hilft es, die 4 ethischen Prinzipien durchzugehen."`,
    },
    contentB1: {
      title: "Schwierige Situation: Herr R.",
      body: "Herr R. (82 Jahre) ist krank. Er will keine Sauerstofftherapie. Er sagt: 'Ich will nicht an einem Schlauch hängen.'\n\nSeine Tochter weint. Sie will, dass er die Therapie macht.\n\nDeine Anleiterin sagt: 'Lass uns die ethischen Prinzipien anwenden.'",
    },
  },
  {
    stepId: "le01-prax03-matching-02",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 753–754"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Die 4 ethischen Prinzipien",
      body: "Ordne die 4 ethischen Prinzipien nach Beauchamp und Childress den richtigen Beschreibungen zu.",
    },
    contentB1: {
      title: "4 Prinzipien — was bedeuten sie?",
      body: "Es gibt 4 ethische Prinzipien. Ordne jeden Begriff der richtigen Erklärung zu.",
    },
    question: {
      fragetext: "Ordne die 4 ethischen Prinzipien nach Beauchamp und Childress den richtigen Beschreibungen zu.",
      matchingPairs: [
        { left: "Autonomie", right: "Selbstbestimmung des Pflegeempfängers" },
        { left: "Fürsorge", right: "Handeln zum Wohl des Pflegeempfängers" },
        { left: "Gerechtigkeit", right: "Gleiche Versorgung für alle" },
        { left: "Nicht-Schaden", right: "Vermeidung von Schaden" },
      ],
    },
  },
  {
    stepId: "le01-prax03-branching-03",
    phase: "s1",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 753–754", "Transfer"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Ethische Entscheidung: Was tust du?",
      body: "Herr R. hat klar gesagt: Er will keine Sauerstofftherapie. Du stehst jetzt vor einer Entscheidung. Was tust du?",
    },
    contentB1: {
      title: "Was machst du jetzt?",
      body: "Herr R. will keine Therapie. Was machst du? Wähle eine Option.",
    },
    question: {
      fragetext: "Herr R. lehnt die Sauerstofftherapie ab. Was tust du?",
      branchingOptions: [
        {
          text: "Du versuchst, Herrn R. doch noch zur Sauerstofftherapie zu überreden, weil du weißt, dass er sie braucht.",
          feedback:
            "Du willst das Beste für Herrn R. — das zeigt Fürsorge. Aber: Überreden verletzt sein Recht auf Autonomie. Er ist einwilligungsfähig und hat das Recht, eine Behandlung abzulehnen — auch wenn wir das schwer aushalten. Was könntest du stattdessen tun?",
          feedbackB1:
            "Du machst dir Sorgen — das ist gut! Aber Herr R. darf selbst entscheiden. Das ist sein Recht (Autonomie). Überreden ist nicht richtig.",
          isCorrect: false,
        },
        {
          text: "Du hörst Herrn R. zu, fragst nach seinen Gründen und informierst ihn sachlich über die Folgen — respektierst aber seine Entscheidung.",
          feedback:
            "Genau richtig. Du respektierst seine Autonomie, informierst ihn (Fürsorge durch Aufklärung) und schadest ihm nicht durch Zwang. Das ist ethisch fundiertes Handeln.",
          feedbackB1:
            "Sehr gut! Du hörst zu (Autonomie), informierst (Fürsorge) und zwingst nicht (Nicht-Schaden). Das ist ethisch richtig.",
          isCorrect: true,
        },
        {
          text: "Du gehst zur Tochter und sagst: 'Wir müssen den Wunsch Ihres Vaters respektieren. Da können wir nichts machen.'",
          feedback:
            "Gut, dass du die Autonomie des Vaters anerkennst! Aber: Die Tochter braucht auch Unterstützung. 'Da können wir nichts machen' klingt hilflos. Fürsorge gilt auch für Angehörige. Wie könntest du die Tochter besser einbeziehen?",
          feedbackB1:
            "Du respektierst Herrn R. — gut! Aber 'wir können nichts machen' ist nicht gut. Die Tochter braucht Unterstützung. Fürsorge gilt auch für Angehörige.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "le01-prax03-categorize-04",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 753–754", "Transfer"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Prinzipien auf den Fall anwenden",
      body: "Ordne die folgenden Aussagen dem passenden ethischen Prinzip zu.",
    },
    contentB1: {
      title: "Welches Prinzip ist das?",
      body: "Ordne die Aussagen dem richtigen ethischen Prinzip zu.",
    },
    question: {
      fragetext: "Ordne die Aussagen dem richtigen ethischen Prinzip zu.",
      categories: [
        { name: "Autonomie" },
        { name: "Fürsorge" },
        { name: "Gerechtigkeit" },
        { name: "Nicht-Schaden" },
      ],
      categoryItems: [
        { text: "Herr R. hat das Recht, die Therapie abzulehnen", correctCategory: 0 },
        { text: "Wir informieren Herrn R. über die Folgen der Ablehnung", correctCategory: 1 },
        { text: "Wir behandeln Herrn R. genauso respektvoll wie jeden anderen Patienten", correctCategory: 2 },
        { text: "Wir zwingen Herrn R. nicht zur Therapie", correctCategory: 3 },
        { text: "Wir bieten der Tochter ein Gespräch an", correctCategory: 1 },
        { text: "Wir dokumentieren die informierte Ablehnung", correctCategory: 3 },
      ],
    },
  },
  {
    stepId: "le01-prax03-reflection-05",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Deine eigene ethische Haltung",
      body: "Stell dir vor, du wärst in dieser Situation. Was fällt dir schwerer: Die Entscheidung von Herrn R. zu respektieren — oder der Tochter zu erklären, dass ihr Vater das Recht hat, die Therapie abzulehnen? Begründe deine Antwort.",
    },
    contentB1: {
      title: "Was fällt dir schwerer?",
      body: "Was ist für dich schwieriger?\n(a) Herrn R.s Entscheidung akzeptieren?\n(b) Der Tochter erklären, dass ihr Vater selbst entscheidet?\nEs gibt keine richtige Antwort. Schreibe deine Meinung.",
    },
    question: {
      fragetext:
        "Was fällt dir schwerer: Die Entscheidung von Herrn R. zu respektieren oder der Tochter die Situation zu erklären? Begründe deine Antwort.",
      reflection: {
        prompt:
          "Reflektiere deine eigene Haltung. Es gibt keine 'richtige' Antwort — es geht um das Erkennen des ethischen Dilemmas.",
        placeholder: "Schreibe deine Gedanken...",
        systemPrompt:
          "Validiere beide Antworten empathisch. Wenn der Schüler die Tochter als schwieriger nennt, bestätige: Angehörige in ethischen Konflikten zu begleiten ist oft emotional belastender. Wenn der Schüler Herrn R.s Entscheidung als schwieriger nennt, bestätige: Das Aushalten von Autonomie gegen eigene Fürsorgeimpulse ist eine zentrale ethische Herausforderung in der Pflege.",
      },
    },
  },
];

// === ÜBUNG 4: Selbstpflege-Plan erstellen ===

const PRAX04_STEPS: ContentStep[] = [
  {
    stepId: "le01-prax04-text-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 56–63"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-selbstpflege",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 5,
    displayFormat: "checklist",
    contentC1: {
      title: "Belastungsfaktoren im Pflegeberuf",
      body: `Checkliste der typischen Belastungsfaktoren:\n• Schichtarbeit mit sozialem Jetlag\n• Körperliche Belastung (Heben, Tragen, langes Stehen)\n• Emotionale Belastung (Leid, Tod, Angehörige)\n• Zeitdruck und hohe Verantwortung\n• Fachsprache und Prüfungsdruck in der Ausbildung\n\nMarkus T. kennt das: "Wenn ich Spätdienst habe, kann ich Emma nicht ins Bett bringen." Seit Ausbildungsbeginn: 5 Kilo zugenommen, schläft schlecht, isst unregelmäßig.\n\nAchtung: Burnout-Gefährdung ist in Pflegeberufen überdurchschnittlich hoch. Selbstpflege ist kein Luxus — sie ist professionelle Pflicht.`,
    },
    contentB1: {
      title: "Was macht den Pflegeberuf schwer?",
      body: "Im Pflegeberuf gibt es viele Belastungen:\n• Schichtarbeit (Tag + Nacht)\n• Schweres Heben\n• Emotionale Belastung (Patienten leiden, sterben)\n• Stress und Prüfungen\n\nMarkus schläft schlecht. Er hat 5 Kilo zugenommen. Er hat keine Zeit für seine Tochter.\n\nSelbstpflege ist wichtig! Nur wer auf sich achtet, kann gut für andere sorgen.",
    },
  },
  {
    stepId: "le01-prax04-sorting-02",
    phase: "s1",
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 73"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-selbstpflege",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Eisenhower-Matrix: Aufgaben priorisieren",
      body: "Sortiere die folgenden Aufgaben in die richtige Kategorie der Eisenhower-Matrix. Besonders wichtig: Kategorie 2 (wichtig, nicht dringend) ist die Kategorie der Selbstpflege — sie wird oft unterschätzt!",
    },
    contentB1: {
      title: "Was ist wichtig? Was ist dringend?",
      body: "Sortiere die Aufgaben in 4 Gruppen:\n1. Wichtig + Dringend (sofort!)\n2. Wichtig + Nicht dringend (planen!)\n3. Nicht wichtig + Dringend (schnell erledigen)\n4. Nicht wichtig + Nicht dringend (weglassen)",
    },
    question: {
      fragetext: "Sortiere die Aufgaben nach der Eisenhower-Matrix in die richtige Reihenfolge (von Kategorie 1 bis 4).",
      sortItems: [
        "Für die Klausur am Montag lernen (sofort erledigen)",
        "E-Mail von der Schule beantworten (Deadline heute) (sofort erledigen)",
        "Joggen gehen mit Freundin (terminieren!)",
        "Praxisbericht für nächste Woche schreiben (terminieren)",
        "Schlaf nachholen (früh ins Bett) (terminieren!)",
        "Mitbewohnerin wegen Küche ansprechen (kurz erledigen)",
        "Instagram durchscrollen (nicht bearbeiten)",
        "Neue Schuhe bestellen (nicht bearbeiten)",
      ],
    },
  },
  {
    stepId: "le01-prax04-swipe-03",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 75–77"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-selbstpflege",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Stressbewältigungsstrategien: hilfreich oder nicht?",
      body: "Wische nach rechts (hilfreich) oder links (nicht hilfreich).",
    },
    contentB1: {
      title: "Was hilft gegen Stress?",
      body: "Wische rechts = hilfreich. Wische links = nicht hilfreich.",
    },
    question: {
      fragetext: "Wische nach rechts (hilfreich) oder links (nicht hilfreich).",
      swipe: {
        instruction: "Wische nach rechts wenn die Strategie hilfreich ist, nach links wenn nicht.",
        cards: [
          {
            statement: "4-6-8-Atemtechnik bei akutem Stress",
            statementB1: "4-6-8-Atemtechnik: 4 Sek. einatmen, 6 Sek. halten, 8 Sek. ausatmen",
            isCorrect: true,
            explanation:
              "Richtig! 4 Sekunden einatmen, 6 Sekunden halten, 8 Sekunden ausatmen. Schnell wirksam, überall anwendbar.",
            explanationB1: "Richtig! Diese Technik beruhigt schnell. Du kannst sie überall machen.",
          },
          {
            statement: "Abends 2 Glas Wein zum Entspannen",
            statementB1: "Abends Alkohol trinken zum Entspannen",
            isCorrect: false,
            explanation:
              "Verständlicher Impuls, aber: Alkohol verschlechtert die Schlafqualität und ist keine Bewältigungsstrategie.",
            explanationB1: "Alkohol ist keine gute Lösung. Er macht den Schlaf schlechter.",
          },
          {
            statement: "Progressive Muskelentspannung nach Jacobson",
            statementB1: "Muskeln anspannen und entspannen (PME)",
            isCorrect: true,
            explanation:
              "Genau. Abwechselndes Anspannen und Entspannen einzelner Muskelgruppen — leicht erlernbar.",
            explanationB1: "Richtig! Du spannst Muskeln an und lässt dann los. Das hilft bei Stress.",
          },
          {
            statement: "Probleme mit Kolleginnen besprechen",
            statementB1: "Über Probleme mit Kolleginnen sprechen",
            isCorrect: true,
            explanation: "Ja! Soziale Unterstützung ist eine der wichtigsten Ressourcen gegen Stress.",
            explanationB1: "Richtig! Reden hilft. Kolleginnen verstehen dich.",
          },
          {
            statement: "Alle Gefühle runterschlucken und weitermachen",
            statementB1: "Gefühle verstecken und weitermachen",
            isCorrect: false,
            explanation:
              "Kurzfristig vielleicht nötig, langfristig führt das zu emotionaler Erschöpfung.",
            explanationB1: "Nicht hilfreich. Wer immer Gefühle versteckt, wird krank. Sprich mit jemandem.",
          },
          {
            statement: "Regelmäßig Sport treiben (Joggen, Schwimmen)",
            statementB1: "Regelmäßig Sport machen",
            isCorrect: true,
            explanation: "Richtig. Körperliche Bewegung ist eine der wirksamsten langfristigen Methoden.",
            explanationB1: "Richtig! Sport ist sehr gut gegen Stress. Regelmäßig ist wichtig.",
          },
          {
            statement: "Koffein am Abend, um noch lernen zu können",
            statementB1: "Abends Kaffee trinken um zu lernen",
            isCorrect: false,
            explanation: "Koffein am Abend stört den Schlaf — und Schlaf ist deine wichtigste Erholungsressource.",
            explanationB1: "Nicht hilfreich. Kaffee am Abend stört den Schlaf. Schlaf ist wichtig!",
          },
          {
            statement: "Positives Selbstgespräch: 'Ich schaffe das Schritt für Schritt'",
            statementB1: "Sich selbst sagen: 'Ich schaffe das!'",
            isCorrect: true,
            explanation: "Genau. Wahrnehmungslenkung und positives Selbstgespräch helfen bei akutem Stress.",
            explanationB1: "Richtig! Positive Gedanken helfen. Sage dir: 'Ich schaffe das.'",
          },
        ],
      },
    },
  },
  {
    stepId: "le01-prax04-timer-04",
    phase: "s1",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 75"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-selbstpflege",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "4-6-8-Atemübung: Jetzt ausprobieren",
      body: "Probiere es jetzt aus: Die 4-6-8-Atemtechnik. Atme 4 Sekunden ein — halte 6 Sekunden — atme 8 Sekunden aus. Wiederhole 3 Runden. Nach der Übung: Wie fühlst du dich? Selbst eine kurze Atemübung kann den Stresspegel senken.",
    },
    contentB1: {
      title: "Atemübung machen",
      body: "Mach die 4-6-8-Atemtechnik:\n1. Einatmen: 4 Sekunden\n2. Halten: 6 Sekunden\n3. Ausatmen: 8 Sekunden\nWiederhole 3 Mal.",
    },
    question: {
      fragetext: "Führe die 4-6-8-Atemtechnik 3 Runden durch.",
      timeLimitSeconds: 54,
      timerQuestions: [
        {
          question: "Wie lange dauert eine Runde der 4-6-8-Atemtechnik?",
          options: ["12 Sekunden", "18 Sekunden", "24 Sekunden", "30 Sekunden"],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    stepId: "le01-prax04-freetext-05",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 73–77", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-selbstpflege",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Persönlicher Selbstpflege-Plan",
      body: "Erstelle deinen persönlichen Selbstpflege-Plan für die nächste Woche. Beantworte:\n(1) Welche Kategorie-2-Aufgabe (wichtig, nicht dringend) planst du fest ein? Wann genau?\n(2) Welche Stressbewältigungsmethode willst du ausprobieren?\n(3) Was ist dein persönliches 'Warnsignal', dass du eine Pause brauchst?",
    },
    contentB1: {
      title: "Mein Selbstpflege-Plan",
      body: "Schreibe deinen Selbstpflege-Plan:\n(1) Was planst du für dich nächste Woche ein? Wann genau?\n(2) Welche Methode gegen Stress willst du ausprobieren?\n(3) Woran merkst du, dass du eine Pause brauchst?",
    },
    question: {
      fragetext:
        "Erstelle deinen persönlichen Selbstpflege-Plan. Beantworte alle 3 Fragen konkret und mit Zeitangaben.",
      musterantwort:
        "Erwartete Elemente: Konkrete Zeitangabe für Erholung/Sport (z.B. 'Mittwoch 18 Uhr joggen'), mindestens eine Methode aus dem Unterricht, Selbstreflexion über eigene Warnsignale.",
      bewertungskriterien: [
        "Konkrete Zeitangabe für Kategorie-2-Aufgabe",
        "Mindestens eine Stressbewältigungsmethode genannt",
        "Persönliches Warnsignal beschrieben",
        "Plan realistisch und umsetzbar",
      ],
      satzanfaengeB1: [
        "Nächste Woche plane ich ... um ... Uhr ein.",
        "Ich will die Methode ... ausprobieren.",
        "Mein Warnsignal ist ...",
      ],
    },
  },
];

// === EXPORT ===

export const LE01_PRAXIS: PraxisUebung[] = [
  {
    uebungId: "le01-prax01",
    typ: "pflegeplan",
    titel: "Pflegeanamnese durchführen",
    titelB1: "Gespräch und Dokumentation mit Fatma K.",
    beschreibungC1:
      "Führe das Aufnahmegespräch mit Fatma K. (71 Jahre, Pneumonie, türkischstämmig) durch. Wende dabei kultursensible Kommunikation an, sammle alle pflegerelevanten Informationen und dokumentiere die Pflegeanamnese strukturiert.",
    beschreibungB1:
      "Du führst ein Gespräch mit Fatma K. Sie hat eine Lungenentzündung. Du fragst nach ihren Beschwerden, Medikamenten und Bedürfnissen. Dann schreibst du alles auf.",
    bloomLevel: 3,
    steps: PRAX01_STEPS,
  },
  {
    uebungId: "le01-prax02",
    typ: "pflegeplan",
    titel: "Pflegeplanung erstellen",
    titelB1: "Pflegeplanung für Herrn S. nach Knie-Operation",
    beschreibungC1:
      "Wende die Schritte 2–4 des Pflegeprozesses an: Pflegeprobleme und Ressourcen erkennen, Pflegeziele SMART formulieren, Pflegemaßnahmen planen und in die richtige Reihenfolge bringen. Patient: Herr S. (78 Jahre, Knie-TEP).",
    beschreibungB1:
      "Du hilfst Markus bei der Pflegeplanung für Herrn S. (78 Jahre, Knie-Operation). Du erkennst Probleme, schreibst ein Ziel und planst Maßnahmen.",
    bloomLevel: 3,
    steps: PRAX02_STEPS,
  },
  {
    uebungId: "le01-prax03",
    typ: "beratung",
    titel: "Ethische Fallbesprechung",
    titelB1: "Schwierige Entscheidung: Herr R. und die Sauerstofftherapie",
    beschreibungC1:
      "Wende die 4 ethischen Prinzipien nach Beauchamp und Childress auf ein konkretes Dilemma an: Herr R. (82 Jahre, COPD) lehnt die empfohlene Sauerstofftherapie ab. Triff eine begründete Handlungsentscheidung und reflektiere deine eigene ethische Haltung.",
    beschreibungB1:
      "Herr R. will keine Therapie. Seine Tochter ist verzweifelt. Du lernst die 4 ethischen Prinzipien anwenden: Autonomie, Fürsorge, Gerechtigkeit, Nicht-Schaden.",
    bloomLevel: 3,
    steps: PRAX03_STEPS,
  },
  {
    uebungId: "le01-prax04",
    typ: "prozedur",
    titel: "Selbstpflege-Plan erstellen",
    titelB1: "Selbstfürsorge im Pflegeberuf",
    beschreibungC1:
      "Erkenne Belastungsfaktoren im Pflegeberuf, priorisiere Aufgaben mit der Eisenhower-Matrix, unterscheide hilfreiche von nicht hilfreichen Stressbewältigungsstrategien, wende die 4-6-8-Atemtechnik an und erstelle einen persönlichen Selbstpflege-Plan.",
    beschreibungB1:
      "Du lernst, auf dich selbst zu achten. Du sortierst Aufgaben nach Wichtigkeit, übst Atemtechniken und schreibst einen Plan für deine eigene Gesundheit.",
    bloomLevel: 3,
    steps: PRAX04_STEPS,
  },
];

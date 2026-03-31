// Session 8: "Prüfungsreif?" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB14: Prüfung & Synthese — Gesamte LE-01 Wiederholung + Transfer + Offene Fragen
// Leitfall: Frau Weber (67, Demenz, Fixierung) + Yasemin Abschluss
// Bloom: B3-B6, 22 Steps, ~35 Min

import type { ContentStep } from "../_types";

export const STEPS_S8: ContentStep[] = [
  // =============================================================
  // Step 1: Selbsteinschätzung — Vorher-Nachher
  // =============================================================
  {
    stepId: "le01-s8-tb14-01",
    phase: "s8",
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Prüfungsreif? Deine Selbsteinschätzung",
      body: "Du hast 7 Sessions hinter dir. Bevor wir dein Wissen testen: Wie sicher fühlst du dich jetzt?",
    },
    contentB1: {
      title: "Was kannst du jetzt?",
      body: "Du hast viel gelernt. Schätze dich ein: Was kannst du gut? Was noch nicht?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Themen?",
      statements: [
        "Ich kann erklären, was professionelle Pflege von Laienpflege unterscheidet.",
        "Ich kenne den Pflegeprozess nach Fiechter/Meier und kann ihn anwenden.",
        "Ich kann die 4 ethischen Prinzipien benennen und auf einen Fall anwenden.",
        "Ich kann mindestens 2 Pflegetheorien vergleichen.",
        "Ich kann eine Pflegesituation ethisch beurteilen und begründen.",
      ],
    },
  },

  // =============================================================
  // Step 2: Prüfungs-MC — ICN + Pflegeprozess
  // =============================================================
  {
    stepId: "le01-s8-tb14-02",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q2 S.78"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Prüfungsfrage 1",
      body: "Diese Frage könnte so in deiner Abschlussprüfung stehen. Lies genau und wähle die richtige Antwort.",
    },
    contentB1: {
      title: "Prüfungsfrage 1",
      body: "Lies genau. Welche Antwort ist richtig?",
    },
    question: {
      fragetext: "Welche der folgenden Aussagen beschreibt korrekt den Zusammenhang zwischen ICN-Definition und Pflegeprozess?",
      options: [
        { text: "Die ICN-Definition nennt eigenverantwortliche Versorgung als Schlüsselaufgabe — der Pflegeprozess ist das Instrument, mit dem diese Eigenverantwortung systematisch umgesetzt wird.", isCorrect: true, explanation: "Richtig! Die ICN betont Eigenverantwortung, der Pflegeprozess nach Fiechter/Meier liefert das systematische Werkzeug dafür: von der Informationssammlung bis zur Evaluation." },
        { text: "Der Pflegeprozess ersetzt die ICN-Definition, weil er konkreter ist.", isCorrect: false, explanation: "Falsch. Der Pflegeprozess ist ein Handlungsinstrument, die ICN-Definition beschreibt den Auftrag der Pflege. Beides ergänzt sich." },
        { text: "Die ICN-Definition und der Pflegeprozess haben nichts miteinander zu tun — sie stammen aus unterschiedlichen Quellen.", isCorrect: false, explanation: "Falsch. Der Pflegeprozess setzt den von der ICN formulierten Anspruch der eigenverantwortlichen Pflege in die Praxis um." },
        { text: "Der Pflegeprozess wurde von der ICN entwickelt und ist weltweit identisch.", isCorrect: false, explanation: "Falsch. Der Pflegeprozess wurde von verschiedenen Autorinnen beschrieben (Fiechter/Meier, WHO-Modell). Die ICN hat ihn nicht selbst entwickelt." },
      ],
    },
  },

  // =============================================================
  // Step 3: Prüfungs-MC — 4-Ohren, Kongruenz
  // =============================================================
  {
    stepId: "le01-s8-tb14-03",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.249, S.252"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Prüfungsfrage 2",
      body: "Kommunikation ist ein Kernthema der Pflege. Zeige, dass du die Modelle anwenden kannst.",
    },
    contentB1: {
      title: "Prüfungsfrage 2",
      body: "Eine Frage zur Kommunikation in der Pflege.",
    },
    question: {
      fragetext: "Eine Patientin sagt lächelnd: 'Mir geht es gut', aber ihre Hände zittern und sie vermeidet Blickkontakt. Welche Aussage ist fachlich korrekt?",
      options: [
        { text: "Es liegt inkongruente Kommunikation vor — die nonverbalen Signale widersprechen der verbalen Aussage. Das 4-Ohren-Modell zeigt: Auf dem Selbstoffenbarungsohr hört die Pflegekraft etwas anderes als auf dem Sachohr.", isCorrect: true, explanation: "Richtig! Inkongruenz (Widerspruch verbal/nonverbal) ist ein wichtiges Warnsignal. Auf dem Sachohr hört man 'Es geht mir gut', auf dem Selbstoffenbarungsohr 'Ich habe Angst/Schmerzen'." },
        { text: "Die Patientin hat das Recht zu lügen — Pflegekräfte sollten die verbale Aussage akzeptieren.", isCorrect: false, explanation: "Natürlich hat sie das Recht. Aber professionelle Pflege erfordert systematische Beobachtung. Die nonverbalen Signale nicht zu beachten, wäre ein Wahrnehmungsfehler." },
        { text: "Kongruente Kommunikation liegt vor, weil die Patientin lächelt.", isCorrect: false, explanation: "Falsch. Kongruenz bedeutet, dass verbale und nonverbale Signale übereinstimmen. Hier widersprechen Zittern und Blickvermeidung dem Lächeln." },
        { text: "Das 4-Ohren-Modell ist hier nicht anwendbar, weil die Patientin nicht direkt kommuniziert.", isCorrect: false, explanation: "Falsch. Watzlawick sagt: 'Man kann nicht nicht kommunizieren.' Das 4-Ohren-Modell ist bei jeder Nachricht anwendbar." },
      ],
    },
  },

  // =============================================================
  // Step 4: Prüfungs-MC — Ethik-Fallbeispiel
  // =============================================================
  {
    stepId: "le01-s8-tb14-04",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285", "Q7 S.283-284"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Prüfungsfrage 3",
      body: "Ethische Analyse ist Bloom-Stufe 4 — du musst analysieren, nicht nur wissen.",
    },
    contentB1: {
      title: "Prüfungsfrage 3",
      body: "Eine Frage zur Ethik. Denke gut nach.",
    },
    question: {
      fragetext: "Ein Patient mit chronischen Schmerzen bittet um mehr Schmerzmittel. Die Ärztin lehnt ab — Suchtgefahr. Der Patient leidet sichtbar. Welche ethischen Prinzipien stehen hier im Konflikt?",
      options: [
        { text: "Autonomie (Patient will Schmerzfreiheit) vs. Nonmalefizienz (Ärztin will Sucht vermeiden) — ein klassischer Prinzipienkonflikt nach Beauchamp/Childress", isCorrect: true, explanation: "Richtig! Der Patient übt sein Recht auf Selbstbestimmung aus (Autonomie), die Ärztin will Schaden vermeiden (Nonmalefizienz). Es gibt keine einfache Lösung — nur eine ethische Abwägung." },
        { text: "Benefizienz vs. Gerechtigkeit — der Patient bekommt weniger als andere", isCorrect: false, explanation: "Gerechtigkeit wäre relevant, wenn es um die Verteilung knapper Ressourcen ginge. Hier geht es primär um Autonomie vs. Nichtschaden." },
        { text: "Es gibt keinen ethischen Konflikt — die Ärztin entscheidet allein", isCorrect: false, explanation: "Falsch. Auch wenn die Ärztin das Medikament verschreibt, haben Pflegefachkräfte die Pflicht, ethische Konflikte zu erkennen und anzusprechen." },
        { text: "Pflege-Charta Art. 8 (würdevolles Sterben) ist hier das zentrale Prinzip", isCorrect: false, explanation: "Art. 8 betrifft die letzte Lebensphase. Hier geht es um Schmerzmanagement bei chronischen Schmerzen — also Autonomie vs. Nonmalefizienz." },
      ],
    },
  },

  // =============================================================
  // Step 5: "Welche Theorie passt?" — Neuer Fall
  // =============================================================
  {
    stepId: "le01-s8-tb14-05",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-129"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Prüfungsfrage 4",
      body: "Du kennst jetzt mehrere Pflegetheorien. Wende sie auf einen neuen Fall an.",
    },
    contentB1: {
      title: "Prüfungsfrage 4",
      body: "Welche Pflegetheorie passt zu dieser Situation?",
    },
    question: {
      fragetext: "Herr Fischer, 55, hat nach einem Schlaganfall eine Halbseitenlähmung. Er war vorher sehr selbstständig und möchte alles allein schaffen — aber er überschätzt sich und stürzt. Welche Pflegetheorie eignet sich am besten?",
      options: [
        { text: "Orem — Selbstpflege-Defizit-Theorie: Herr Fischer braucht ein teilkompensatorisches System, das seine Selbstpflege fördert, ohne ihn zu überfordern", isCorrect: true, explanation: "Richtig! Orem unterscheidet 3 Pflegesysteme. Herr Fischer kann vieles selbst, braucht aber Unterstützung bei bestimmten Aktivitäten. Das teilkompensatorische System passt: Pflege und Patient arbeiten zusammen." },
        { text: "Peplau — weil die Beziehung im Mittelpunkt steht", isCorrect: false, explanation: "Peplau ist eine Interaktionstheorie, die besonders bei psychischen Krisen passt. Herr Fischers Hauptproblem ist physisch: Selbstpflegedefizit durch die Halbseitenlähmung." },
        { text: "Leininger — weil kulturelle Faktoren berücksichtigt werden müssen", isCorrect: false, explanation: "Leininger ist wichtig bei kulturellen Unterschieden. Hier gibt es keine Hinweise auf kulturelle Aspekte — das Kernproblem ist das Selbstpflegedefizit." },
        { text: "Krohwinkel — weil die 13 ABEDLs alle betroffen sind", isCorrect: false, explanation: "Krohwinkel ist ein gutes Assessment-Instrument, aber nicht alle 13 ABEDLs sind betroffen. Orem passt besser, weil sie das Verhältnis von Selbstpflegefähigkeit zu Selbstpflegebedarf beschreibt." },
      ],
    },
  },

  // =============================================================
  // Step 6: Auflösung der 4 Prüfungsfragen
  // =============================================================
  {
    stepId: "le01-s8-tb14-06",
    phase: "s8",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q2 S.78", "Q5 S.249", "Q7 S.285", "Q4 S.120-129"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Prüfungsauswertung: Die 4 Kernkompetenzen",
      body: "Du hast gerade 4 Prüfungsfragen beantwortet, die jeweils eine zentrale Kompetenz testen:\n\n**1. Pflegeverständnis (ICN + Pflegeprozess):** Du musst den Zusammenhang zwischen dem Auftrag der Pflege (ICN) und dem Instrument (Pflegeprozess) erklären können.\n\n**2. Kommunikation (4-Ohren + Kongruenz):** Du musst Kommunikationsmodelle auf konkrete Pflegesituationen anwenden und Inkongruenz erkennen können.\n\n**3. Ethik (Prinzipienethik):** Du musst ethische Konflikte identifizieren und die 4 Prinzipien nach Beauchamp/Childress zuordnen können.\n\n**4. Pflegetheorien (Zuordnung):** Du musst die richtige Theorie für eine Patientensituation auswählen und begründen können.\n\nIn der Prüfung wirst du alle 4 Kompetenzen brauchen — oft in einer einzigen Fallsituation.",
      fallbezug: "Yasemin wird am Ende ihres 1. Ausbildungsdrittels genau diese Themen in der Prüfung wiedersehen.",
    },
    contentB1: {
      title: "Was wurde geprüft?",
      body: "Du hast 4 wichtige Themen geübt:\n\n**1. Was ist Pflege?** — ICN-Definition und Pflegeprozess gehören zusammen.\n\n**2. Kommunikation** — Wenn Worte und Körpersprache nicht zusammenpassen, musst du das erkennen.\n\n**3. Ethik** — Manchmal gibt es keinen einfachen Weg. Du musst erklären können, warum du so handelst.\n\n**4. Pflegetheorien** — Die richtige Theorie für den richtigen Patienten auswählen.",
      fallbezug: "Diese Themen kommen in der Prüfung vor.",
    },
  },

  // =============================================================
  // Step 7: Neuer Fall — Frau Weber, Demenz, Fixierung (TA3)
  // =============================================================
  {
    stepId: "le01-s8-tb14-07",
    phase: "s8",
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Neuer Fall: Frau Weber",
      body: "Eine Situation, die dein ethisches Urteilsvermögen fordert — Bloom-Stufe 6 steht bevor.",
      fallbezug: "Frau Weber, 67 Jahre, Diagnose Demenz. Sie liegt auf der internistischen Station. Seit 2 Tagen zieht sie sich immer wieder den Venenzugang heraus.",
    },
    contentB1: {
      title: "Ein neuer Fall: Frau Weber",
      body: "Frau Weber hat Demenz und zieht sich die Infusionsnadel immer wieder heraus.",
      fallbezug: "Sie ist 67 Jahre alt und auf der Station. Die Ärztin hat eine Entscheidung getroffen.",
    },
    question: {
      fragetext: "Auf der Station:",
      dialogLines: [
        { speaker: "Ärztin", text: "Frau Weber hat sich heute zum dritten Mal den Venenzugang gezogen. Ich ordne eine Fixierung der Hände an." },
        { speaker: "Yasemin", text: "Fixierung? Ist das nicht... ein schwerer Eingriff?" },
        { speaker: "Praxisanleiterin", text: "Ja. Fixierung schränkt die Bewegungsfreiheit ein. Dafür braucht man eine richterliche Genehmigung — oder eine akute Notsituation." },
        { speaker: "Ärztin", text: "Sie braucht die Infusion. Ohne den Zugang können wir die Antibiotika nicht geben." },
        { speaker: "Yasemin", text: "Aber Frau Weber versteht nicht, warum sie fixiert wird. Sie wird Angst haben..." },
      ],
    },
  },

  // =============================================================
  // Step 8: Ethisches Dilemma — Branching (B5)
  // =============================================================
  {
    stepId: "le01-s8-tb14-08",
    phase: "s8",
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-285"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Was tust du?",
      body: "Du bist Yasemin. Die Ärztin hat die Fixierung angeordnet. Du hast Bedenken. Drei Optionen — jede hat Konsequenzen.",
    },
    contentB1: {
      title: "Was machst du?",
      body: "Die Ärztin will Frau Webers Hände fixieren. Du musst entscheiden.",
    },
    question: {
      fragetext: "Wie reagierst du als Pflegefachkraft auf die Fixierungsanordnung?",
      branchingOptions: [
        {
          text: "Ich führe die Fixierung sofort aus — die Ärztin hat es angeordnet",
          feedback: "Problematisch. Auch wenn die Ärztin die Anordnung gibt, hast du als Pflegefachkraft eine eigenverantwortliche Rolle. Du musst prüfen, ob Alternativen möglich sind. Pflege-Charta Art. 2 (körperliche Unversehrtheit) und das Autonomie-Prinzip werden verletzt, wenn du nicht erst Alternativen prüfst. PflBG §4 gibt dir die Pflicht, den Pflegeprozess eigenverantwortlich zu steuern.",
          feedbackB1: "Das ist nicht die beste Antwort. Du solltest erst nach anderen Möglichkeiten suchen.",
          isCorrect: false,
        },
        {
          text: "Ich schlage Alternativen vor: 1:1-Betreuung, Armschiene statt Fixierung, Zugang an geschützter Stelle — und spreche die Ärztin respektvoll an",
          feedback: "Sehr gut! Du zeigst professionelle Eigenverantwortung. Du respektierst die ärztliche Anordnung, bringst aber dein pflegerisches Fachwissen ein. Autonomie der Patientin wird geschützt, Nonmalefizienz (Nichtschaden) wird angestrebt, und die Benefizienz (Wohltun — die Antibiotika) wird nicht aufgegeben. Das ist ethisch fundiertes Handeln auf Bloom B5.",
          feedbackB1: "Richtig! Du suchst nach besseren Lösungen und sprichst mit der Ärztin. So schützt du Frau Weber.",
          isCorrect: true,
        },
        {
          text: "Ich verweigere die Fixierung komplett — Frau Weber darf nicht gegen ihren Willen fixiert werden",
          feedback: "Nachvollziehbar, aber zu einseitig. Du schützt die Autonomie — aber ignorierst, dass Frau Weber die Antibiotika braucht (Benefizienz). Wenn die Infektion nicht behandelt wird, schadet ihr das (Nonmalefizienz wird verletzt). Die Lösung liegt nicht in der Verweigerung, sondern in der Suche nach Alternativen, die BEIDE Prinzipien wahren.",
          feedbackB1: "Das ist nicht ganz richtig. Frau Weber braucht die Medikamente. Suche nach einer besseren Lösung.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 9: TA3 — Ethische Stellungnahme (B6!)
  // =============================================================
  {
    stepId: "le01-s8-tb14-09",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 6,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-285", "Q9"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Transfer-Aufgabe: Ethische Stellungnahme",
      body: "Bloom-Stufe 6 — die höchste Stufe. Du sollst nicht nur analysieren, sondern eine eigene Position entwickeln und begründen. Das ist Prüfungsniveau für die mündliche Abschlussprüfung.",
      fallbezug: "Frau Weber, 67, Demenz, Fixierungsanordnung wegen Venenzugang.",
    },
    contentB1: {
      title: "Schreibe deine Meinung",
      body: "Was denkst du über die Fixierung? Begründe deine Meinung mit ethischen Prinzipien.",
      fallbezug: "Frau Weber hat Demenz. Die Ärztin will ihre Hände fixieren.",
    },
    question: {
      fragetext: "Schreibe eine ethische Stellungnahme (5-8 Sätze): Welche ethischen Prinzipien stehen bei Frau Weber im Konflikt? Wie würdest du als Pflegefachkraft argumentieren? Welche Alternativen siehst du?",
      musterantwort: "Autonomie der Patientin vs. Fürsorge/Nonmalefizienz (sie braucht den Zugang). Pflege-Charta Art. 2 (körperliche/seelische Unversehrtheit) vs. Art. 4 (qualifizierte Pflege). Alternativen zur Fixierung prüfen: 1:1-Betreuung, Armschiene statt Fixierung, Zugang an anderer Stelle. Fixierung nur als letztes Mittel, mit richterlicher Genehmigung.",
      bewertungskriterien: [
        "Mindestens 2 ethische Prinzipien korrekt benannt",
        "Pflege-Charta oder ICN-Ethikkodex einbezogen",
        "Mindestens 1 Alternative zur Fixierung genannt",
        "Eigene Position begründet (nicht nur beschrieben)",
      ],
      satzanfaengeB1: [
        "Bei Frau Weber stehen zwei Prinzipien im Konflikt: ...",
        "Ich würde als Pflegekraft argumentieren, dass ...",
        "Eine Alternative zur Fixierung wäre ...",
      ],
    },
  },

  // =============================================================
  // Step 10: TA1 — Orem-Grenzen bei Herr Brenner
  // =============================================================
  {
    stepId: "le01-s8-tb14-10",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-122", "Q4 S.128-129"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Transfer: Pflegetheorie wechseln",
      body: "Herr Brenner (82) wird nach dem Orem-Modell betreut: Fokus auf Selbstpflege-Defizite. Er kann sich waschen und essen — aber er trauert um seine Frau und weint täglich. Welche Pflegetheorie wäre besser geeignet?",
      fallbezug: "Herr Brenner aus Session 3: Der trauernde Patient, bei dem Yasemin die Balance zwischen Nähe und Distanz lernte.",
    },
    contentB1: {
      title: "Welche Theorie passt besser?",
      body: "Herr Brenner kann sich selbst waschen und essen. Aber er ist traurig und weint. Das Orem-Modell hilft hier nicht gut. Welche Theorie wäre besser?",
      fallbezug: "Herr Brenner aus einer früheren Session: Er trauert um seine Frau.",
    },
    question: {
      fragetext: "Analysiere, warum das Orem-Modell bei Herrn Brenner an seine Grenzen stößt. Welche Theorie wäre passender und wie würde sich die Pflegeplanung ändern? (3-5 Sätze)",
      musterantwort: "Orem fokussiert auf physische Selbstpflegedefizite — Herr Brenner kann sich aber selbst waschen und essen. Peplaus Interaktionstheorie wäre besser: Die Beziehung steht im Mittelpunkt, therapeutisches Gespräch. Pflegeplanung ändert sich: statt 'Hilfe bei der Körperpflege' zu 'Regelmäßige Gesprächsangebote, emotionale Unterstützung'.",
      bewertungskriterien: [
        "Orem-Grenze erkannt (physisch gut, emotional unzureichend)",
        "Peplau als Alternative genannt und begründet",
        "Änderung der Pflegeplanung beschrieben",
      ],
      satzanfaengeB1: [
        "Das Orem-Modell passt nicht gut, weil ...",
        "Besser wäre die Theorie von Peplau, weil ...",
        "Die Pflegeplanung ändert sich: statt ... jetzt ...",
      ],
    },
  },

  // =============================================================
  // Step 11: TA2 — Jonas Entlassung, Setting-Wechsel
  // =============================================================
  {
    stepId: "le01-s8-tb14-11",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["Q4 S.120-122", "Q2 S.78-83"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Transfer: Setting-Wechsel",
      body: "Jonas Berger (8) wird nach der Blinddarm-OP entlassen. Seine Mutter soll den Verband zu Hause wechseln. Wie ändert sich die Pflegebeziehung? Welche Rolle übernimmt die Mutter?",
      fallbezug: "Jonas aus früheren Sessions: Der Junge, der 'Mir geht's gut' sagt, aber Schmerzen verbirgt.",
    },
    contentB1: {
      title: "Jonas geht nach Hause",
      body: "Jonas war im Krankenhaus. Jetzt geht er heim. Seine Mutter muss den Verband wechseln. Was ändert sich?",
      fallbezug: "Jonas ist 8 Jahre alt und hatte eine Operation.",
    },
    question: {
      fragetext: "Wie ändert sich die Pflegebeziehung, wenn Jonas nach Hause kommt? Welche Rolle übernimmt die Mutter — und welche Herausforderungen entstehen? (3-5 Sätze)",
      musterantwort: "Im Krankenhaus: professionelle Pflege, Pflegekraft übernimmt Beobachtung. Zu Hause: Mutter wird zur Dependenzpflegerin (Orem) — braucht Anleitung. Herausforderung: Mutter muss Schmerzen erkennen, die Jonas verschweigt — Schulung zu altersgerechter Schmerzbeobachtung (z.B. KUSS-Skala für Eltern erklären).",
      bewertungskriterien: [
        "Rollenwechsel erkannt (professionelle Pflege zu Laienpflege)",
        "Begriff Dependenzpflege oder Anleitung verwendet",
        "Herausforderung benannt (Schmerzerkennung bei Kindern)",
      ],
      satzanfaengeB1: [
        "Im Krankenhaus pflegt die Pflegekraft Jonas. Zu Hause ...",
        "Die Mutter übernimmt jetzt die Rolle der ...",
        "Eine Herausforderung ist ...",
      ],
    },
  },

  // =============================================================
  // Step 12: Quick-Recall-Karten (Swipe)
  // =============================================================
  {
    stepId: "le01-s8-tb14-12",
    phase: "s8",
    stepType: "swipe",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q4 S.119-135", "Q7 S.280-285"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Quick Recall: Stimmt das?",
      body: "Schnelle Runde! Wische nach rechts (stimmt) oder links (stimmt nicht). Teste, wie viel hängengeblieben ist.",
    },
    contentB1: {
      title: "Schnelles Quiz",
      body: "Stimmt oder stimmt nicht? Wische nach rechts oder links.",
    },
    question: {
      fragetext: "Quick Recall — stimmt das?",
      cards: [
        { statement: "Orem unterscheidet 3 Pflegesysteme: vollständig, teilkompensatorisch und unterstützend-edukativ.", isTrue: true, explanation: "Richtig! Die 3 Systeme beschreiben, wie viel der Patient selbst kann und wie viel die Pflege übernimmt." },
        { statement: "Der ICN-Ethikkodex wurde 2017 zusammen mit dem PflBG verabschiedet.", isTrue: false, explanation: "Falsch! Der ICN-Ethikkodex wurde 1953 verabschiedet. Das PflBG kam 2017 — über 60 Jahre später." },
        { statement: "Peplau beschreibt 4 Phasen der Pflegebeziehung: Orientierung, Identifikation, Nutzung, Ablösung.", isTrue: true, explanation: "Richtig! Peplaus Interaktionstheorie betont: Die Beziehung selbst hat therapeutische Wirkung." },
        { statement: "Nonmalefizienz bedeutet 'Gutes tun'.", isTrue: false, explanation: "Falsch! Nonmalefizienz bedeutet 'Nicht schaden'. 'Gutes tun' ist Benefizienz." },
        { statement: "Der Pflegeprozess nach Fiechter/Meier hat 4 Schritte.", isTrue: false, explanation: "Falsch! 6 Schritte: Informationssammlung, Probleme erkennen, Ziele, Maßnahmen planen, durchführen, evaluieren." },
        { statement: "Pflege-Charta Art. 1 garantiert das Recht auf Selbstbestimmung.", isTrue: true, explanation: "Richtig! Art. 1 der Pflege-Charta: Jeder hilfe- und pflegebedürftige Mensch hat das Recht auf Selbstbestimmung." },
      ],
    },
  },

  // =============================================================
  // Step 13: Speed-Timer — 5 Fragen in 60 Sek
  // =============================================================
  {
    stepId: "le01-s8-tb14-13",
    phase: "s8",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-83", "Q5 S.248-256", "Q4 S.119-135"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Speed-Runde!",
      body: "5 Fragen in 60 Sekunden — quer durch alle Themen der LE 01. Zeige, wie schnell du abrufen kannst!",
    },
    contentB1: {
      title: "Schnell antworten!",
      body: "5 Fragen, 60 Sekunden. Los geht's!",
    },
    question: {
      fragetext: "Beantworte so schnell wie möglich:",
      timeLimitSeconds: 60,
      timerQuestions: [
        { question: "Wie viele Schritte hat der Pflegeprozess nach Fiechter/Meier?", options: ["4", "5", "6", "8"], correctIndex: 2 },
        { question: "Welche Theorie betont die Pflegebeziehung als therapeutisches Mittel?", options: ["Orem", "Peplau", "Krohwinkel", "Roper"], correctIndex: 1 },
        { question: "Wie heißen die 4 Seiten einer Nachricht nach Schulz von Thun?", options: ["Sach, Beziehung, Appell, Selbstoffenbarung", "Verbal, paraverbal, nonverbal, digital", "Sender, Empfänger, Kanal, Code", "Frage, Antwort, Feedback, Zusammenfassung"], correctIndex: 0 },
        { question: "Was ist das Ziel von EBN (Evidence-based Nursing)?", options: ["Tradition bewahren", "Pflege auf wissenschaftliche Evidenz stützen", "Ärztliche Anordnungen umsetzen", "Intuition trainieren"], correctIndex: 1 },
        { question: "Wer gründete 1903 die erste deutsche Berufsorganisation?", options: ["Nightingale", "Henderson", "Agnes Karll", "Juchli"], correctIndex: 2 },
      ],
    },
  },

  // =============================================================
  // Step 14: Kreuzworträtsel — 8 Wörter
  // =============================================================
  {
    stepId: "le01-s8-tb14-14",
    phase: "s8",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Abschluss-Kreuzworträtsel",
      body: "8 Begriffe aus der gesamten LE 01 — von ICN bis Peplau. Finde sie alle!",
    },
    contentB1: {
      title: "Kreuzworträtsel",
      body: "8 Wörter aus allem, was du gelernt hast. Lies die Hinweise.",
    },
    question: {
      fragetext: "Finde die 8 Begriffe:",
      crosswordWords: [
        { word: "AUTONOMIE", clue: "Ethisches Prinzip: Recht auf Selbstbestimmung" },
        { word: "PEPLAU", clue: "Pflegetheoretikerin: Die Beziehung heilt" },
        { word: "EVALUATION", clue: "Letzter Schritt im Pflegeprozess: Wirkung beurteilen" },
        { word: "KONGRUENZ", clue: "Wenn Worte und Körpersprache übereinstimmen" },
        { word: "OREM", clue: "Selbstpflege-Defizit-Theorie: 3 Pflegesysteme" },
        { word: "WUERDE", clue: "Art. 1 GG: Die ... des Menschen ist unantastbar" },
        { word: "ABEDL", clue: "Krohwinkels 13 Aktivitäten, Beziehungen und existenzielle Erfahrungen" },
        { word: "EVIDENZ", clue: "EBN: Pflege auf wissenschaftliche ... stützen" },
      ],
    },
  },

  // =============================================================
  // Step 15: TrueFalse — Pflegewissenschaft
  // =============================================================
  {
    stepId: "le01-s8-tb14-15",
    phase: "s8",
    stepType: "truefalse",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-113"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Pflegewissenschaft: Stimmt das?",
      body: "Subtile Unterschiede — hier zeigt sich, ob du wirklich verstanden hast.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Lies genau. Manche Aussagen klingen richtig, sind aber falsch.",
    },
    question: {
      fragetext: "Stimmt das?",
      trueFalseCards: [
        { statement: "Erfahrungswissen ist genauso verlässlich wie wissenschaftliche Evidenz, wenn es von einer erfahrenen Pflegekraft kommt.", isTrue: false, explanation: "Falsch! Erfahrungswissen (nach Benner) ist wertvoll, aber subjektiv und nicht verallgemeinerbar. Es muss durch wissenschaftliche Evidenz ergänzt werden." },
        { statement: "EBN integriert drei Quellen: externe Evidenz, klinische Expertise und Patientenpräferenzen.", isTrue: true, explanation: "Richtig! EBN ist keine reine Zahlen-Medizin, sondern verbindet Forschung mit Erfahrung und den Wünschen des Patienten." },
        { statement: "Pflegeforschung findet nur an Universitäten statt.", isTrue: false, explanation: "Falsch! Study Nurses arbeiten direkt in der Praxis mit — Pflegeforschung auf der Mikro-Ebene findet auf Station statt." },
        { statement: "Tradition ('Das machen wir schon immer so') ist eine unstrukturierte Wissensquelle, die kritisch hinterfragt werden muss.", isTrue: true, explanation: "Richtig! Traditionen können wirksam sein, aber auch schaden — wie z.B. die jahrzehntelange Wundbehandlung mit Rivanol trotz fehlender Evidenz." },
      ],
    },
  },

  // =============================================================
  // Step 16: OQ1 — Professionelle vs. Laienpflege
  // =============================================================
  {
    stepId: "le01-s8-tb14-16",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24", "Q3 S.113"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Offene Frage: Professionelle vs. Laienpflege",
      body: "Diese Frage ist prüfungsrelevant — sie kommt in ähnlicher Form in Abschlussprüfungen vor. Nimm dir Zeit für eine durchdachte Antwort.",
    },
    contentB1: {
      title: "Was ist der Unterschied?",
      body: "Was unterscheidet professionelle Pflege von der Pflege durch die Familie?",
    },
    question: {
      fragetext: "Was unterscheidet professionelle Pflege von der Pflege durch Angehörige? Nenne mindestens 3 Merkmale und begründe, warum diese Unterscheidung wichtig ist.",
      musterantwort: "Professionelle Pflege basiert auf wissenschaftlichem Wissen (EBN), folgt einem systematischen Pflegeprozess, richtet sich nach einem Ethikkodex, wird durch eine Ausbildung erlernt und wird vergütet. Laienpflege basiert auf Intuition, Erfahrung und emotionaler Bindung. Die Unterscheidung ist wichtig, weil professionelle Pflege nachprüfbar, standardisiert und qualitätsgesichert sein muss.",
      bewertungskriterien: [
        "Mindestens 3 Merkmale korrekt benannt",
        "Begründung nachvollziehbar",
        "Fachsprache angemessen verwendet",
      ],
      satzanfaengeB1: [
        "Professionelle Pflege unterscheidet sich von Laienpflege, weil ...",
        "Ein wichtiges Merkmal ist ...",
        "Die Unterscheidung ist wichtig, weil ...",
      ],
    },
  },

  // =============================================================
  // Step 17: OQ5 — Orem vs. Peplau
  // =============================================================
  {
    stepId: "le01-s8-tb14-17",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-122", "Q4 S.128-129"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Offene Frage: Orem vs. Peplau",
      body: "Bloom-Stufe 5 — Evaluation. Du musst zwei Theorien vergleichen und ihre Eignung für verschiedene Patienten beurteilen.",
    },
    contentB1: {
      title: "Zwei Theorien vergleichen",
      body: "Was ist bei Orem anders als bei Peplau? Für welchen Patienten passt welche Theorie?",
    },
    question: {
      fragetext: "Vergleiche die Pflegetheorien von Orem und Peplau: Was steht jeweils im Mittelpunkt? Für welchen Patienten wäre welche Theorie besser geeignet? (4-6 Sätze)",
      musterantwort: "Orem (Bedürfnistheorie): Im Mittelpunkt steht die Selbstpflege. Pflege kompensiert Defizite, wenn der Patient nicht selbst für sich sorgen kann. Geeignet z.B. für chronisch Kranke, die Anleitung zur Selbstpflege brauchen. Peplau (Interaktionstheorie): Im Mittelpunkt steht die Beziehung. Die Pflegebeziehung selbst hat therapeutische Wirkung. Geeignet z.B. für psychiatrische Patienten oder Menschen in Krisensituationen.",
      bewertungskriterien: [
        "Schwerpunkte korrekt unterschieden",
        "Jeweilige Zielgruppe benannt",
        "Begründung logisch",
      ],
      satzanfaengeB1: [
        "Bei Orem geht es vor allem um ...",
        "Peplau sagt dagegen, dass ...",
        "Orem passt besser für ..., weil ...",
      ],
    },
  },

  // =============================================================
  // Step 18: Yasemin — Abschluss-Dialog
  // =============================================================
  {
    stepId: "le01-s8-tb14-18",
    phase: "s8",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Yasemins Erkenntnis",
      body: "Am Ende der ersten Lerneinheit. Yasemin reflektiert mit ihrer Praxisanleiterin.",
    },
    contentB1: {
      title: "Yasemin am Ende",
      body: "Yasemin hat viel gelernt. Sie spricht mit der Praxisanleiterin.",
    },
    question: {
      fragetext: "Yasemin und die Praxisanleiterin:",
      dialogLines: [
        { speaker: "Praxisanleiterin", text: "Yasemin, du hast jetzt die Grundlagen drauf. Was nimmst du mit?" },
        { speaker: "Yasemin", text: "Pflege ist Wissenschaft UND Menschlichkeit. Beides gehört zusammen." },
        { speaker: "Praxisanleiterin", text: "Das klingt wie ein Satz aus dem Lehrbuch. Was meinst du damit — ganz konkret?" },
        { speaker: "Yasemin", text: "Bei Frau Weber habe ich gesehen: Ohne Ethik ist Pflege nur Technik. Und ohne Fachwissen ist Empathie hilflos. Ich brauche beides." },
        { speaker: "Praxisanleiterin", text: "Genau. Und das ist der Grund, warum Pflege eine Profession ist — nicht nur ein Beruf." },
      ],
    },
  },

  // =============================================================
  // Step 19: "Das hast du gelernt" — 8 Kompetenzen
  // =============================================================
  {
    stepId: "le01-s8-tb14-19",
    phase: "s8",
    stepType: "reveal",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Das hast du gelernt: 8 Kompetenzen",
      body: "Tippe auf jede Karte, um deine Kompetenzen aus LE 01 zu sehen — alles, was du jetzt kannst.",
    },
    contentB1: {
      title: "8 Dinge, die du jetzt kannst",
      body: "Tippe auf jede Karte. Das hast du in LE 01 gelernt.",
    },
    question: {
      fragetext: "Deine 8 Kompetenzen aus LE 01:",
      reveal: {
        instruction: "Entdecke alle 8 Kompetenzen:",
        cards: [
          { id: "k1", label: "Pflegeverständnis", content: "Du kannst Pflege nach ICN und WHO definieren und professionelle von Laienpflege unterscheiden.", icon: "heart-pulse" },
          { id: "k2", label: "Pflegeprozess", content: "Du kennst die 6 Schritte nach Fiechter/Meier und kannst sie auf Fallbeispiele anwenden.", icon: "list-checks" },
          { id: "k3", label: "Kommunikation", content: "Du kennst das 4-Ohren-Modell, erkennst Inkongruenz und verstehst Distanzzonen.", icon: "message-circle" },
          { id: "k4", label: "Ethik", content: "Du kennst die 4 Prinzipien (Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit) und kannst ethische Konflikte analysieren.", icon: "scale" },
          { id: "k5", label: "Pflegetheorien", content: "Du kannst Orem, Roper, Krohwinkel und Peplau unterscheiden und situativ zuordnen.", icon: "book-open" },
          { id: "k6", label: "Menschenbild", content: "Du verstehst Würde, Verletzlichkeit und die Pflege-Charta als Grundlage pflegerischen Handelns.", icon: "shield" },
          { id: "k7", label: "Pflegewissenschaft", content: "Du kennst den Unterschied zwischen EBN und Tradition und weißt, warum Pflegeforschung wichtig ist.", icon: "microscope" },
          { id: "k8", label: "Pflegebeziehung", content: "Du kannst professionelle Nähe und Distanz reflektieren und Rollenkonflikte erkennen.", icon: "users" },
        ],
        revealMode: "free",
      },
    },
  },

  // =============================================================
  // Step 20: Confidence — Nachher-Messung
  // =============================================================
  {
    stepId: "le01-s8-tb14-20",
    phase: "s8",
    stepType: "confidence",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Nachher-Check: Wie sicher bist du jetzt?",
      body: "Dieselben Fragen wie am Anfang der Session. Hat sich deine Einschätzung verändert?",
    },
    contentB1: {
      title: "Wie sicher bist du jetzt?",
      body: "Die gleichen Fragen wie vorher. Was hat sich geändert?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich jetzt?",
      confidenceCards: [
        { statement: "Ich kann erklären, was professionelle Pflege von Laienpflege unterscheidet.", isTrue: true, explanation: "Professionelle Pflege basiert auf Wissenschaft (EBN), folgt dem Pflegeprozess, hat einen Ethikkodex und wird durch eine Ausbildung erlernt." },
        { statement: "Ich kenne den Pflegeprozess und kann ihn auf einen neuen Fall anwenden.", isTrue: true, explanation: "6 Schritte nach Fiechter/Meier: Informationssammlung, Probleme erkennen, Ziele, Maßnahmen planen, durchführen, evaluieren." },
        { statement: "Ich kann ethische Konflikte erkennen und mit den 4 Prinzipien analysieren.", isTrue: true, explanation: "Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit — kein Prinzip ist wichtiger als ein anderes. Jeder Fall erfordert Abwägung." },
        { statement: "Ich kann mindestens 2 Pflegetheorien vergleichen und einem Patienten zuordnen.", isTrue: true, explanation: "Orem (Selbstpflege), Peplau (Beziehung), Roper (12 LA), Krohwinkel (13 ABEDLs) — jede hat ihren Platz." },
      ],
    },
  },

  // =============================================================
  // Step 21: Abschluss-Selfrating — Vorher/Nachher
  // =============================================================
  {
    stepId: "le01-s8-tb14-21",
    phase: "s8",
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Finale Selbsteinschätzung",
      body: "Vergleiche dich mit dir selbst: Wie viel hast du seit Session 1 dazugelernt? Sei ehrlich — Selbstreflexion ist eine Kernkompetenz.",
    },
    contentB1: {
      title: "Wie hast du dich verbessert?",
      body: "Denke an deinen ersten Tag. Was kannst du jetzt besser?",
    },
    question: {
      fragetext: "Wie gut kannst du diese Dinge jetzt — verglichen mit Session 1?",
      statements: [
        "Ich kann Pflege als Profession definieren und begründen.",
        "Ich kann den Pflegeprozess auf einen neuen Patienten anwenden.",
        "Ich kann ein ethisches Dilemma analysieren und eine Stellungnahme schreiben.",
        "Ich kann die richtige Pflegetheorie für einen Patienten auswählen.",
        "Ich fühle mich bereit für eine Prüfung zu diesen Themen.",
      ],
    },
  },

  // =============================================================
  // Step 22: LE-01 Zusammenfassung
  // =============================================================
  {
    stepId: "le01-s8-tb14-22",
    phase: "s8",
    stepType: "summary",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "LE 01 abgeschlossen!",
      body: "Du hast alle 8 Sessions der Lerneinheit 'Personen- und situationsorientiert professionell pflegen' absolviert. Das sind deine Kernerkenntnisse.",
    },
    contentB1: {
      title: "Geschafft! LE 01 ist fertig!",
      body: "Du hast alles gelernt. Hier ist die Zusammenfassung.",
    },
    question: {
      fragetext: "Deine Kernerkenntnisse aus LE 01:",
      summary: {
        reflexionRueckbezug: "Yasemin hat am Anfang gesagt: 'Mein Kopf ist leer.' Jetzt weiß sie: Pflege ist Wissenschaft UND Menschlichkeit — und sie ist Teil einer Profession, die seit Nightingale und Karll gewachsen ist.",
        kernaussagen: [
          "**Pflege ist eigenverantwortlich:** ICN-Definition, 5 Schlüsselaufgaben, PflBG §4 — Pflege ist kein Hilfsberuf, sondern eine Profession mit eigener Wissenschaft.",
          "**Der Pflegeprozess ist das Werkzeug:** 6 Schritte nach Fiechter/Meier — systematisch, zielgerichtet, evaluierbar. Jeder Patient bekommt individuelle Pflege.",
          "**Ethik ist nicht optional:** 4 Prinzipien (Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit), ICN-Ethikkodex und Pflege-Charta geben Orientierung — auch wenn es keine einfache Antwort gibt.",
          "**Pflegetheorien leiten die Praxis:** Orem (Selbstpflege), Peplau (Beziehung), Roper (Lebensaktivitäten), Krohwinkel (ABEDLs) — die richtige Theorie für den richtigen Patienten.",
          "**Kommunikation ist mehr als Worte:** 4-Ohren-Modell, Kongruenz, Distanzzonen — wer gut beobachtet und zuhört, pflegt besser.",
          "**EBN statt Tradition:** Pflege muss auf Evidenz basieren, nicht auf 'Das machen wir schon immer so'.",
        ],
      },
    },
  },
];

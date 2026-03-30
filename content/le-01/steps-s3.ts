// Session 3: "Wie redet man professionell?" — LE 01
// Generiert vom Content-Generator v2
// Themen: Kommunikationsebenen, 4-Ohren-Modell, Distanzzonen, professionelle Naehe/Distanz
// Leitfall: Yasemin — Naehe-Distanz-Konflikt bei Herr Brenner (Szene S2)
// Bloom: B2-B3, 22 Steps, ~30 Min
// Interleaving: 1 Frage aus anderem Thema (Step 19 Timer, Maslow I5)

import type { ContentStep } from "../_types";

export const STEPS_S3: ContentStep[] = [
  // =============================================================
  // Step 1: Dialog — Yasemin: Herr Brenner weint (STORY)
  // =============================================================
  {
    stepId: "le01-s3-01",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-249"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Tag 3: Der weinende Patient",
      body: "Yasemin erlebt eine Situation, die sie an ihre Grenzen bringt.",
      fallbezug: "Mittwoch, Nachmittagsschicht. Herr Brenner, 82, hat gerade Besuch von seiner Tochter gehabt.",
    },
    contentB1: {
      title: "Tag 3: Der Patient weint",
      body: "Yasemin erlebt eine schwierige Situation.",
      fallbezug: "Es ist Mittwoch. Herr Brenner, 82 Jahre alt, hat gerade Besuch von seiner Tochter gehabt.",
    },
    question: {
      fragetext: "Begleite Yasemin in dieser schwierigen Situation.",
      patientName: "Herr Brenner",
      dialogPhases: [
        {
          context: "Herr Brenner weint. Seine Frau ist vor 3 Monaten gestorben. Er sagt zu Yasemin: 'Du bist die Einzige, die mir zuhoert, Kind.'",
          contextB1: "Herr Brenner weint. Seine Frau ist vor 3 Monaten gestorben. Er sagt: 'Du bist die Einzige, die mir zuhoert.'",
          speaker: "Yasemin (denkt)",
          options: [
            {
              text: "Ich bleibe bei ihm. Er braucht mich jetzt. Die Vitalzeichen bei den anderen Patienten koennen warten.",
              textB1: "Ich bleibe bei ihm. Er braucht mich jetzt. Die anderen Patienten koennen warten.",
              patientResponse: "Yasemin bleibt 40 Minuten bei Herrn Brenner. Sie hoert zu, haelt seine Hand. Dabei vergisst sie die Vitalzeichenkontrolle bei zwei anderen Patienten.",
              patientResponseB1: "Yasemin bleibt 40 Minuten. Sie hoert zu und haelt seine Hand. Aber sie vergisst zwei andere Patienten.",
              score: 1,
              feedback: "Empathie ist wichtig — aber ohne Struktur koennen andere Patienten gefaehrdet werden. Professionelle Naehe braucht eine Balance.",
              feedbackB1: "Mitgefuehl ist wichtig! Aber 40 Minuten sind zu lang, wenn andere Patienten warten.",
            },
            {
              text: "Ich hoere 3 Minuten zu, sage ihm, dass ich wiederkomme — und pruefe dann die Vitalzeichen bei den anderen.",
              textB1: "Ich hoere kurz zu, sage ihm: Ich komme wieder. Dann gehe ich zu den anderen Patienten.",
              patientResponse: "Herr Brenner nickt. Yasemin geht, prueft die Vitalzeichen und kommt nach 20 Minuten zurueck. Herr Brenner laechelt: 'Du hast Wort gehalten.'",
              patientResponseB1: "Herr Brenner versteht. Yasemin kommt nach 20 Minuten zurueck. Herr Brenner laechelt: 'Du hast Wort gehalten.'",
              score: 3,
              feedback: "Professionelle Empathie: Praesent sein, ohne die Verantwortung fuer andere zu vergessen. Ein klares Versprechen wiederzukommen schafft Vertrauen.",
              feedbackB1: "Genau richtig! Kurz zuhoeren, versprechen wiederzukommen und dann die anderen Patienten versorgen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: Swipe — Brilliant-Prinzip: Reaktionen bewerten (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-02",
    phase: "s3",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Wie haettest du reagiert?",
      body: "Ein Patient weint und bittet dich zu bleiben. Es gibt verschiedene Reaktionen.",
    },
    contentB1: {
      title: "Was wuerdest du tun?",
      body: "Ein Patient weint. Er will, dass du bleibst. Was ist richtig?",
    },
    question: {
      fragetext: "Wische rechts fuer 'professionell' und links fuer 'nicht professionell'.",
      swipe: {
        instruction: "Ist diese Reaktion professionell?",
        cards: [
          {
            statement: "Ich bleibe so lange wie noetig — die anderen Patienten koennen warten.",
            statementB1: "Ich bleibe so lange er will. Die anderen koennen warten.",
            isCorrect: false,
            explanation: "Empathie ohne Zeitmanagement gefaehrdet andere Patienten. Professionelle Naehe hat Grenzen.",
            explanationB1: "Mitgefuehl ist gut, aber andere Patienten brauchen dich auch.",
          },
          {
            statement: "Ich hoere kurz zu, sage wann ich wiederkomme und gehe dann zu den anderen Patienten.",
            statementB1: "Ich hoere kurz zu, sage wann ich zurueckkomme und gehe dann.",
            isCorrect: true,
            explanation: "Professionelle Empathie: Praesent sein, Versprechen geben, Verantwortung wahren.",
            explanationB1: "Richtig! Kurz zuhoeren, versprechen wiederzukommen, dann weiterarbeiten.",
          },
          {
            statement: "Ich sage: 'Tut mir leid, ich muss zu einer anderen Patientin' und gehe sofort.",
            statementB1: "Ich sage: 'Ich muss jetzt gehen' und gehe sofort.",
            isCorrect: false,
            explanation: "Abruptes Gehen beschaedigt das Vertrauensverhaeltnis. Ein Satz wie 'Ich komme wieder' kann alles veraendern.",
            explanationB1: "Einfach gehen ist nicht gut. Ein kurzer Satz hilft: 'Ich komme in 20 Minuten wieder.'",
          },
          {
            statement: "Ich frage eine Kollegin, ob sie kurz bei ihm bleiben kann, waehrend ich die Vitalzeichen pruefe.",
            statementB1: "Ich frage eine Kollegin: 'Kannst du kurz bei ihm bleiben?'",
            isCorrect: true,
            explanation: "Teamarbeit nutzen: Eine Kollegin informieren zeigt Verantwortung fuer den Patienten UND das Team.",
            explanationB1: "Gute Idee! Eine Kollegin bitten ist professionell. So ist er nicht allein.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 3: Text — Kommunikationsebenen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-03",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-249"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Drei Ebenen der Kommunikation",
      body: "Kommunikation besteht aus drei Ebenen: verbal (gesprochenes und geschriebenes Wort), paraverbal (Tonfall, Sprechtempo, Lautstaerke) und nonverbal (Koerpersprache, Mimik, Gestik). Watzlawicks Grundaussage lautet: 'Man kann nicht nicht kommunizieren.' Auch Schweigen ist Kommunikation.",
      glossarBegriffe: ["Empathie"],
    },
    contentB1: {
      title: "Wie kommunizieren wir?",
      body: "Kommunikation hat drei Ebenen: verbal (Worte), paraverbal (Stimme, Lautstaerke) und nonverbal (Koerpersprache, Gesichtsausdruck). Wichtig: Auch wenn du nichts sagst, kommunizierst du. Dein Koerper spricht immer.",
      glossarBegriffe: ["Empathie"],
    },
  },

  // =============================================================
  // Step 4: Diagram — Mindmap Kommunikation (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-04",
    phase: "s3",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-251"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    imageUrl: "/images/le01/mindmap-kommunikation.svg",
    imageAlt: "Mindmap: 3 Kommunikationsebenen mit Beispielen",
    contentC1: {
      title: "Kommunikation im Ueberblick",
      body: "Drei Ebenen der Kommunikation — jede mit eigenen Signalen.",
    },
    contentB1: {
      title: "Kommunikation im Ueberblick",
      body: "Drei Arten zu kommunizieren — mit verschiedenen Signalen.",
    },
    question: {
      fragetext: "Erkunde die drei Ebenen der Kommunikation.",
      diagram: {
        diagramType: "mindmap",
        instruction: "Tippe auf die Bereiche, um Beispiele zu sehen.",
        nodes: [
          { id: "komm", label: "Kommunikation", labelB1: "Kommunikation", highlight: true },
          { id: "verbal", label: "Verbal", labelB1: "Verbal (Worte)" },
          { id: "paraverbal", label: "Paraverbal", labelB1: "Paraverbal (Stimme)" },
          { id: "nonverbal", label: "Nonverbal", labelB1: "Nonverbal (Koerper)" },
          { id: "v1", label: "Gesprochenes Wort", labelB1: "Sprechen" },
          { id: "v2", label: "Geschriebenes Wort", labelB1: "Schreiben" },
          { id: "p1", label: "Tonfall", labelB1: "Tonfall" },
          { id: "p2", label: "Lautstaerke", labelB1: "Lautstaerke" },
          { id: "n1", label: "Mimik", labelB1: "Gesichtsausdruck" },
          { id: "n2", label: "Gestik", labelB1: "Handbewegungen" },
        ],
        edges: [
          { from: "komm", to: "verbal" },
          { from: "komm", to: "paraverbal" },
          { from: "komm", to: "nonverbal" },
          { from: "verbal", to: "v1" },
          { from: "verbal", to: "v2" },
          { from: "paraverbal", to: "p1" },
          { from: "paraverbal", to: "p2" },
          { from: "nonverbal", to: "n1" },
          { from: "nonverbal", to: "n2" },
        ],
        interactive: true,
      },
    },
  },

  // =============================================================
  // Step 5: Categorize — Signale sortieren (SORTIERSTATION)
  // =============================================================
  {
    stepId: "le01-s3-05",
    phase: "s3",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-251"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Kommunikationssignale sortieren",
      body: "Jedes Signal gehoert zu einer der drei Kommunikationsebenen.",
    },
    contentB1: {
      title: "Signale sortieren",
      body: "Ordne die Signale der richtigen Ebene zu.",
    },
    question: {
      fragetext: "Ordne die Signale der richtigen Kommunikationsebene zu.",
      categories: [
        { name: "Verbal" },
        { name: "Paraverbal" },
        { name: "Nonverbal" },
      ],
      categoryItems: [
        { text: "'Mir geht es gut.'", correctCategory: 0 },
        { text: "Laute, hektische Stimme", correctCategory: 1 },
        { text: "Verschraenkte Arme", correctCategory: 2 },
        { text: "Pflegebericht schreiben", correctCategory: 0 },
        { text: "Langsames, ruhiges Sprechtempo", correctCategory: 1 },
        { text: "Nicken", correctCategory: 2 },
        { text: "Zitternde Stimme", correctCategory: 1 },
        { text: "Augenkontakt vermeiden", correctCategory: 2 },
      ],
    },
  },

  // =============================================================
  // Step 6: Text — 4-Ohren-Modell (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-06",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.252"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Das 4-Ohren-Modell",
      body: "Nach Schulz von Thun hat jede Nachricht 4 Seiten: Sachinhalt (Wortueber was?), Beziehung (Was halte ich von dir?), Selbstoffenbarung (Was sage ich ueber mich?) und Appell (Was soll der andere tun?). Der Empfaenger hoert mit 4 verschiedenen Ohren. Beispiel: 'Das Fenster ist offen' — Sachinhalt, Aufforderung, Beziehungsaussage und Selbstoffenbarung gleichzeitig.",
    },
    contentB1: {
      title: "Vier Ohren beim Zuhoeren",
      body: "Jede Nachricht hat 4 Seiten: Was sage ich? Was denke ich ueber dich? Was sage ich ueber mich? Was soll der andere tun? Der Zuhoerer hoert diese 4 Dinge. Beispiel: 'Das Fenster ist offen.' Das kann vieles bedeuten.",
    },
  },

  // =============================================================
  // Step 7: Flipcard — 4-Ohren-Modell Beispiele (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-07",
    phase: "s3",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.252"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    imageUrl: "/images/le01/4-ohren-modell.svg",
    imageAlt: "4 Karten: Vier Ohren des Kommunikationsmodells",
    contentC1: {
      title: "Vier Ohren — ein Beispiel",
      body: "'Das Fenster ist offen.' — Jedes Ohr hoert etwas anderes.",
    },
    contentB1: {
      title: "Vier Ohren — ein Beispiel",
      body: "'Das Fenster ist offen.' — Was hoert jedes Ohr?",
    },
    question: {
      fragetext: "Tippe auf ein Ohr, um zu sehen, was es hoert.",
      flipcard: {
        instruction: "Drehe die Karten um.",
        cards: [
          {
            front: "Sachohr",
            back: "'Das Fenster ist offen.' = Es ist ein Fenster offen. Reine Information.",
            backB1: "'Das Fenster ist offen.' = Ein Fenster ist auf. Eine einfache Information.",
            category: "4-Ohren",
          },
          {
            front: "Beziehungsohr",
            back: "'Das Fenster ist offen.' = Du merkst nicht mal, dass es kalt ist. Du kuemerst dich nicht.",
            backB1: "'Das Fenster ist offen.' = Du merkst nicht, dass es kalt ist. Du passt nicht auf.",
            category: "4-Ohren",
          },
          {
            front: "Selbstoffenbarungsohr",
            back: "'Das Fenster ist offen.' = Mir ist kalt. Ich fuehle mich unwohl.",
            backB1: "'Das Fenster ist offen.' = Mir ist kalt. Es ist mir nicht angenehm.",
            category: "4-Ohren",
          },
          {
            front: "Appellohr",
            back: "'Das Fenster ist offen.' = Mach bitte das Fenster zu!",
            backB1: "'Das Fenster ist offen.' = Bitte mach das Fenster zu!",
            category: "4-Ohren",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 8: MC — 4-Ohren in der Pflege (CHALLENGE, AMBOSS)
  // =============================================================
  {
    stepId: "le01-s3-08",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.252"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "4-Ohren-Modell auf Station",
      body: "Ein Patient sagt etwas. Auf welchem Ohr hoert Yasemin?",
    },
    contentB1: {
      title: "Was hoert Yasemin?",
      body: "Ein Patient sagt etwas zu Yasemin. Was meint er damit?",
    },
    question: {
      fragetext: "Patient sagt zu Yasemin: 'Schon wieder eine Neue.' Auf welchem Ohr reagiert Yasemin, wenn sie denkt: 'Er mag mich nicht'?",
      optionen: [
        {
          text: "Beziehungsohr",
          isCorrect: true,
          explanation: "Yasemin hoert die Aussage als Beziehungsbotschaft: 'Du bist mir nicht willkommen.' Das Beziehungsohr deutet die Nachricht auf die Beziehung zwischen Sender und Empfaenger.",
          explanationB1: "Richtig! Yasemin hoert: 'Du bist mir nicht willkommen.' Das ist das Beziehungsohr.",
        },
        {
          text: "Sachohr",
          isCorrect: false,
          explanation: "Das Sachohr wuerde nur die Information hoeren: Es gibt eine neue Pflegende. Yasemin bezieht es aber auf sich persoenlich.",
          explanationB1: "Das Sachohr hoert nur die Information: Eine neue Pflegende ist da. Aber Yasemin denkt an sich.",
        },
        {
          text: "Appellohr",
          isCorrect: false,
          explanation: "Das Appellohr wuerde hoeren: 'Schick mir jemand anderen.' Yasemin deutet es aber als persoenliche Abwertung.",
          explanationB1: "Das Appellohr hoert: 'Schick jemand anderen.' Aber Yasemin denkt: Er mag mich nicht.",
        },
        {
          text: "Selbstoffenbarungsohr",
          isCorrect: false,
          explanation: "Das Selbstoffenbarungsohr wuerde hoeren: 'Ich habe Angst vor Veraenderung.' Yasemin bezieht es aber auf die Beziehung.",
          explanationB1: "Das Selbstoffenbarungsohr hoert: 'Ich habe Angst.' Aber Yasemin bezieht es auf sich.",
        },
      ],
    },
  },

  // =============================================================
  // Step 9: Matching — 4-Ohren zuordnen (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s3-09",
    phase: "s3",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.252"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Vier Ohren zuordnen",
      body: "Ordne die Pflege-Aussagen dem richtigen Ohr zu.",
    },
    contentB1: {
      title: "Welches Ohr hoert was?",
      body: "Verbinde die Aussage mit dem passenden Ohr.",
    },
    question: {
      fragetext: "Verbinde jede Deutung mit dem richtigen Ohr.",
      matchingPairs: [
        { left: "Sachohr", right: "'Die Suppe ist kalt.' = Information ueber die Temperatur" },
        { left: "Beziehungsohr", right: "'Du kuemmerst dich nicht richtig um mich.'" },
        { left: "Selbstoffenbarungsohr", right: "'Ich bin unzufrieden und frustriert.'" },
        { left: "Appellohr", right: "'Bring mir bitte eine warme Suppe.'" },
      ],
    },
  },

  // =============================================================
  // Step 10: Text — Distanzzonen und Kongruenz (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-10",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.249-251"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Distanzzonen und kongruente Kommunikation",
      body: "Distanzzonen: Intimdistanz reicht bis 50 cm, die persoenliche Distanz von 50-120 cm. Pflegende ueberschreiten bei Pflegetaetigkeiten regelmaessig die Intimdistanz — das erfordert Achtsamkeit. Kongruente Kommunikation bedeutet, dass verbale und nonverbale Botschaften uebereinstimmen. Inkongruenz irritiert.",
    },
    contentB1: {
      title: "Abstand und ehrliche Kommunikation",
      body: "Intimdistanz: bis 50 cm — nur fuer sehr vertraute Personen. Bei der Pflege kommt man dem Patienten oft sehr nah. Das braucht Respekt. Kongruent bedeutet: Was du sagst und was dein Koerper zeigt, passt zusammen. Wenn nicht, wird der Patient unsicher.",
    },
  },

  // =============================================================
  // Step 11: Slider — Intimdistanz (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s3-11",
    phase: "s3",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.251"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Distanzzonen",
      body: "Jeder Mensch hat unsichtbare Grenzen um sich herum.",
    },
    contentB1: {
      title: "Wie nah ist zu nah?",
      body: "Jeder Mensch hat einen unsichtbaren Abstand um sich.",
    },
    question: {
      fragetext: "Ab welcher Entfernung (in cm) beginnt die Intimdistanz?",
      slider: {
        instruction: "Bewege den Regler auf den richtigen Wert.",
        unit: "cm",
        min: 0,
        max: 200,
        step: 10,
        correctValue: 50,
        tolerance: 10,
        explanation: "Die Intimdistanz reicht bis 50 cm. Nur sehr vertraute Personen duerfen so nah kommen. Pflegende ueberschreiten diese Grenze regelmaessig.",
        explanationB1: "Die Intimdistanz ist bis 50 cm. Nur Menschen, die man gut kennt, kommen so nah. In der Pflege passiert das oft.",
      },
    },
  },

  // =============================================================
  // Step 12: Hotspot — Intimdistanz in Pflegesituation (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s3-12",
    phase: "s3",
    stepType: "hotspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q5 S.251"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    imageUrl: "/images/le01/pflegesituation-distanz.svg",
    imageAlt: "Illustration einer Pflegesituation mit Koerperkontakt",
    contentC1: {
      title: "Distanzzonen in der Pflege",
      body: "Pflegende ueberschreiten regelmaessig die Intimdistanz. Wo genau passiert das?",
    },
    contentB1: {
      title: "Nah am Patienten",
      body: "In der Pflege kommt man dem Patienten sehr nah. Wo passiert das?",
    },
    question: {
      fragetext: "Tippe auf die Bereiche, in denen die Intimdistanz ueberschritten wird.",
      hotspot: {
        imageUrl: "/images/le01/pflegesituation-distanz.svg",
        imageAlt: "Pflegekraft bei der Koerperpflege",
        instruction: "Finde die Bereiche mit Intimdistanz-Ueberschreitung.",
        zones: [
          { id: "waschung", x: 45, y: 45, radius: 12, label: "Koerperpflege: direkter Hautkontakt innerhalb der Intimdistanz" },
          { id: "gesicht", x: 40, y: 15, radius: 10, label: "Gesichtspflege: sehr naher Kontakt, Augenkontakt unvermeidlich" },
          { id: "verband", x: 60, y: 55, radius: 10, label: "Verbandwechsel: konzentrierter Nahkontakt am Koerper" },
        ],
      },
    },
  },

  // =============================================================
  // Step 13: Reveal — Professionelle Gespraechsfuehrung (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-13",
    phase: "s3",
    stepType: "reveal",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256", "Q5 S.250"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Professionelle Gespraechsfuehrung",
      body: "Vier zentrale Elemente fuer gute Kommunikation in der Pflege.",
    },
    contentB1: {
      title: "Gut reden als Pflegende",
      body: "Vier wichtige Dinge fuer gute Gespraeche in der Pflege.",
    },
    question: {
      fragetext: "Decke die vier Elemente auf.",
      reveal: {
        instruction: "Tippe auf jede Karte.",
        revealMode: "free",
        cards: [
          {
            id: "r1",
            label: "Element 1",
            content: "Empathie: Sich in die Gefuehle des anderen hineinversetzen — ohne die professionelle Distanz zu verlieren.",
            contentB1: "Mitfuehlen: Verstehen, wie der andere sich fuehlt. Aber trotzdem professionell bleiben.",
            icon: "heart",
          },
          {
            id: "r2",
            label: "Element 2",
            content: "Offene Fragen: 'Wie geht es Ihnen heute?' statt 'Geht es Ihnen gut?' — der Patient oeffnet sich ohne Druck.",
            contentB1: "Offene Fragen: Fragen, die der Patient frei beantworten kann. Zum Beispiel: 'Wie geht es Ihnen?'",
            icon: "message-circle",
          },
          {
            id: "r3",
            label: "Element 3",
            content: "Aktives Zuhoeren: Blickkontakt halten, nicken, nachfragen. Zeigen: Ich hoere dir wirklich zu.",
            contentB1: "Aktives Zuhoeren: Anschauen, nicken, nachfragen. Zeigen: Ich hoere dir zu.",
            icon: "ear",
          },
          {
            id: "r4",
            label: "Element 4",
            content: "Mimik als Diagnose-Hinweis: Reduzierte Mimik kann auf Depression hindeuten, Maskengesicht auf Parkinson, Grimassieren auf Chorea Huntington.",
            contentB1: "Gesichtsausdruck beobachten: Ein starres Gesicht kann auf Krankheiten hinweisen.",
            icon: "eye",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 14: Dialog — Praxisanleiterin erklaert Naehe-Distanz (STORY)
  // =============================================================
  {
    stepId: "le01-s3-14",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Professionelle Naehe",
      body: "Die Praxisanleiterin spricht mit Yasemin ueber die Situation mit Herr Brenner.",
      fallbezug: "Spaeter am Nachmittag. Die Praxisanleiterin hat Yasemin zur Seite genommen.",
    },
    contentB1: {
      title: "Was ist professionelle Naehe?",
      body: "Die Praxisanleiterin spricht mit Yasemin ueber den weinenden Patienten.",
      fallbezug: "Am Nachmittag nimmt die Praxisanleiterin Yasemin zur Seite.",
    },
    question: {
      fragetext: "Was sagt die Praxisanleiterin?",
      patientName: "Praxisanleiterin",
      dialogPhases: [
        {
          context: "Praxisanleiterin: 'Yasemin, du warst empathisch — das ist gut. Aber du hast 2 Patienten vergessen. Professionelle Naehe heisst: praesent sein, ohne die Verantwortung zu vergessen.'",
          contextB1: "Praxisanleiterin: 'Yasemin, du warst einfuehlsam. Aber du hast 2 andere Patienten vergessen. Professionell heisst: fuer alle da sein.'",
          speaker: "Yasemin",
          options: [
            {
              text: "Ich verstehe. Empathie allein reicht nicht — ich muss auch an die anderen Patienten denken und meine Zeit einteilen.",
              textB1: "Ich verstehe. Mitgefuehl ist wichtig, aber ich muss auch an die anderen Patienten denken.",
              patientResponse: "Genau. Professionelle Naehe heisst: Ich bin fuer dich da — UND fuer die anderen. Das ist keine Kaelte, das ist Verantwortung.",
              patientResponseB1: "Genau! Fuer alle da sein — das ist keine Kaelte. Das ist Verantwortung.",
              score: 3,
              feedback: "Professionelle Empathie verbindet Mitgefuehl mit Verantwortung. Balance ist der Schluessel.",
              feedbackB1: "Richtig! Mitgefuehl und Verantwortung zusammen — das ist professionelle Pflege.",
            },
            {
              text: "Aber der Patient hat geweint! Ich konnte ihn doch nicht allein lassen!",
              textB1: "Aber er hat geweint! Ich konnte nicht einfach gehen!",
              patientResponse: "Ich verstehe dein Gefuehl. Aber in 3 Minuten kannst du viel Empathie zeigen — und dann deine anderen Patienten versorgen. Das lernst du mit der Zeit.",
              patientResponseB1: "Ich verstehe. Aber in 3 Minuten kannst du viel tun. Und dann gehst du zu den anderen. Das lernst du noch.",
              score: 1,
              feedback: "Verstaendliche Reaktion. Professionelle Abgrenzung ist nicht angeboren — sie wird in der Ausbildung trainiert.",
              feedbackB1: "Das ist normal am Anfang. Abgrenzung lernt man in der Ausbildung. Du wirst besser darin.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 15: Branching — Naehe-Distanz-Entscheidung (PRAXIS-SIM)
  // =============================================================
  {
    stepId: "le01-s3-15",
    phase: "s3",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Entscheidung: Herr Brenner weint",
      body: "Herr Brenner weint erneut. Gleichzeitig muss bei Frau Klein der Blutdruck kontrolliert werden — sie hatte heute morgen erhoehte Werte.",
      fallbezug: "Die gleiche Situation wie vorhin — aber jetzt musst du entscheiden.",
    },
    contentB1: {
      title: "Was tust du jetzt?",
      body: "Herr Brenner weint. Aber Frau Klein braucht eine Blutdruckkontrolle. Ihr Blutdruck war heute morgen zu hoch.",
      fallbezug: "Du musst dich entscheiden.",
    },
    question: {
      fragetext: "Wie reagierst du?",
      branchingOptions: [
        {
          text: "Ich bleibe bei Herr Brenner und verschiebe die Vitalzeichen bei Frau Klein.",
          feedbackB1: "Herr Brenner fuehlt sich gehoert. Aber Frau Kleins Blutdruck wird nicht kontrolliert. Wenn er weiter steigt, kann das gefaehrlich werden.",
          feedback: "Herr Brenner fuehlt sich gehoert. Aber Frau Kleins Blutdruck wird nicht kontrolliert — bei vorbestehend erhoehten Werten kann das gefaehrlich werden. Die Praxisanleiterin kritisiert die fehlende Priorisierung.",
          isCorrect: false,
        },
        {
          text: "Ich hoere 3 Minuten zu, sage Herr Brenner, dass ich in 20 Minuten wiederkomme, und kontrolliere dann Frau Kleins Blutdruck.",
          feedbackB1: "Herr Brenner weiss, dass du wiederkommst. Frau Kleins Blutdruck wird rechtzeitig gemessen. Du zeigst Empathie UND Verantwortung.",
          feedback: "Herr Brenner weiss, dass er nicht vergessen wird. Frau Kleins Werte werden rechtzeitig erhoben. Empathie und Verantwortung sind im Gleichgewicht.",
          isCorrect: true,
        },
        {
          text: "Ich sage: 'Tut mir leid, ich muss jetzt zu einer anderen Patientin' und gehe sofort.",
          feedbackB1: "Herr Brenner fuehlt sich zurueckgewiesen. Am Abend klingelt er immer wieder — er fuehlt sich allein. Ein kurzer Satz haette geholfen.",
          feedback: "Herr Brenner fuehlt sich zurueckgewiesen. Das Vertrauensverhaeltnis ist beschaedigt. Am Abend klingelt er stuendlich. Kommunikation beim Grenzen-Setzen ist der Schluessel.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 16: TrueFalse — Kommunikation (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s3-16",
    phase: "s3",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-249", "Q5 S.251"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Richtig oder falsch?",
      body: "Teste dein Wissen ueber Kommunikation in der Pflege.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Welche Aussagen stimmen?",
    },
    question: {
      fragetext: "Welche Aussagen sind richtig?",
      trueFalseCards: [
        {
          statement: "Kongruente Kommunikation bedeutet: Verbal und nonverbal stimmen ueberein.",
          isTrue: true,
          explanation: "Kongruenz bedeutet Uebereinstimmung. Wenn Worte und Koerpersprache dasselbe sagen, vertraut der Empfaenger der Botschaft.",
        },
        {
          statement: "Schweigen ist keine Kommunikation.",
          isTrue: false,
          explanation: "Watzlawick: 'Man kann nicht nicht kommunizieren.' Auch Schweigen sendet Signale — Ablehnung, Nachdenklichkeit oder Ueberforderung.",
        },
        {
          statement: "Die Intimdistanz reicht bis 50 cm.",
          isTrue: true,
          explanation: "Die Intimdistanz (bis 50 cm) ist normalerweise nur sehr vertrauten Personen vorbehalten. Pflegende ueberschreiten sie regelmaessig.",
        },
        {
          statement: "Das 4-Ohren-Modell hat 3 Ebenen.",
          isTrue: false,
          explanation: "Das 4-Ohren-Modell nach Schulz von Thun hat 4 Seiten: Sachinhalt, Beziehung, Selbstoffenbarung und Appell.",
        },
      ],
    },
  },

  // =============================================================
  // Step 17: Crossword — Kommunikation (PUZZLE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s3-17",
    phase: "s3",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-256"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Kreuzwortraetsel: Kommunikation",
      body: "Teste dein Wissen spielerisch.",
    },
    contentB1: {
      title: "Kreuzwortraetsel",
      body: "Loese das Raetsel. Alle Woerter kennst du schon.",
    },
    question: {
      fragetext: "Fuelle das Kreuzwortraetsel aus.",
      crosswordWords: [
        { word: "EMPATHIE", clue: "Sich in andere hineinversetzen koennen" },
        { word: "DISTANZZONEN", clue: "Unsichtbare Abstandsbereiche um jeden Menschen" },
        { word: "APPELL", clue: "Was soll der andere tun? (4-Ohren-Modell)" },
        { word: "MIMIK", clue: "Gesichtsausdruck als Kommunikationssignal" },
        { word: "KONGRUENZ", clue: "Wenn Worte und Koerpersprache uebereinstimmen" },
        { word: "NONVERBAL", clue: "Kommunikation ohne Worte (Koerpersprache)" },
      ],
    },
  },

  // =============================================================
  // Step 18: Comparison — Professionelle vs. Private Naehe (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s3-18",
    phase: "s3",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    imageUrl: "/images/le01/naehe-distanz-vergleich.svg",
    imageAlt: "Vergleichstabelle: Professionelle Naehe vs. Private Naehe",
    contentC1: {
      title: "Professionelle vs. Private Naehe",
      body: "Die Unterscheidung ist zentral fuer die Pflegebeziehung.",
    },
    contentB1: {
      title: "Berufliche Naehe oder private Naehe?",
      body: "In der Pflege ist Naehe anders als in privaten Beziehungen.",
    },
    question: {
      fragetext: "Vergleiche die beiden Arten von Naehe.",
      comparison: {
        instruction: "Schau dir die Unterschiede an.",
        columns: [
          { label: "Professionelle Naehe", icon: "briefcase" },
          { label: "Private Naehe", icon: "heart" },
        ],
        rows: [
          {
            criterion: "Grundhaltung",
            values: ["Empathie (Mitfuehlen)", "Mitleid (Mitlciden)"],
            valuesB1: ["Mitfuehlen: Ich verstehe dich", "Mitleiden: Ich leide mit dir"],
            highlight: 0,
          },
          {
            criterion: "Zeitrahmen",
            values: ["Zeitbegrenzt, strukturiert", "Unbegrenzt, spontan"],
            valuesB1: ["Hat feste Zeiten", "Hat keine festen Zeiten"],
          },
          {
            criterion: "Reflexion",
            values: ["Reflektiert: Warum handle ich so?", "Unreflektiert: Gefuehlsgesteuert"],
            valuesB1: ["Man denkt nach: Warum mache ich das?", "Man handelt aus dem Bauch heraus"],
            highlight: 0,
          },
          {
            criterion: "Ziel",
            values: ["Dem Patienten helfen UND andere nicht vergessen", "Fuer den einen Menschen da sein"],
            valuesB1: ["Allen Patienten helfen", "Fuer einen Menschen da sein"],
          },
          {
            criterion: "Abgrenzung",
            values: ["Professionelle Distanz: Ich gehe nach Hause ohne Leid mitzunehmen", "Emotionale Verstrickung moeglich"],
            valuesB1: ["Man laesst die Arbeit auf der Arbeit", "Man nimmt alles mit nach Hause"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 19: Timer — Speed-Fragen mit Interleaving (CHALLENGE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s3-19",
    phase: "s3",
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-252"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Speed-Runde: Kommunikation",
      body: "4 schnelle Fragen. Eine davon ist ein Rueckblick auf ein anderes Thema.",
    },
    contentB1: {
      title: "Schnelle Fragen",
      body: "4 Fragen. Du hast 15 Sekunden pro Frage. Eine Frage ist aus einem anderen Thema.",
    },
    question: {
      fragetext: "Beantworte die Fragen so schnell wie moeglich.",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Wie viele Seiten hat das 4-Ohren-Modell?",
          options: ["3", "4", "5"],
          correctIndex: 1,
        },
        {
          question: "Was bedeutet 'kongruent' in der Kommunikation?",
          options: ["Laut sprechen", "Worte und Koerpersprache stimmen ueberein", "Schweigen"],
          correctIndex: 1,
        },
        {
          question: "Welches Grundbeduerfnis steht bei Maslow an der Basis?",
          options: ["Sicherheit", "Physiologische Beduerfnisse", "Soziale Beduerfnisse"],
          correctIndex: 1,
        },
        {
          question: "Bis zu welcher Entfernung reicht die Intimdistanz?",
          options: ["30 cm", "50 cm", "100 cm"],
          correctIndex: 1,
        },
      ],
    },
    wusstestDuDas: "Interleaving: Die Maslow-Frage stammt aus einem anderen Thema. So bleibt Wissen laenger im Gedaechtnis.",
  },

  // =============================================================
  // Step 20: Reflection — Naehe-Distanz-Dilemma (SCHREIBTISCH, vertiefung)
  // =============================================================
  {
    stepId: "le01-s3-20",
    phase: "s3",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Reflexion: Naehe und Distanz",
      body: "Denke ueber die Situation mit Herr Brenner nach.",
    },
    contentB1: {
      title: "Nachdenken: Nah sein und Abstand halten",
      body: "Denke ueber die Situation nach. Schreibe deine Gedanken auf.",
    },
    question: {
      fragetext: "Eine Patientin weint und bittet dich zu bleiben. Du hast aber noch 3 andere Patienten zu versorgen. Was tust du — und warum?",
      musterantwort: "Ich signalisiere der Patientin, dass ich ihre Gefuehle wahrnehme und ernst nehme. Ich bleibe kurz (2-3 Minuten), hoere aktiv zu und sage ihr, dass ich wiederkommen werde. Dann versorge ich die anderen Patienten. Professionelle Naehe bedeutet: praesent sein, ohne die Verantwortung fuer andere zu vergessen.",
      bewertungskriterien: [
        "Balance zwischen Empathie und Verantwortung",
        "Konkreter Handlungsvorschlag",
        "Begruendung mit Bezug auf professionelle Pflegebeziehung",
      ],
      satzanfaengeB1: [
        "In dieser Situation wuerde ich...",
        "Ich finde es wichtig, dass...",
        "Professionelle Naehe bedeutet fuer mich...",
      ],
      reflection: {
        prompt: "Eine Patientin weint und bittet dich zu bleiben. Du hast noch 3 andere Patienten. Was tust du — und warum?",
        placeholder: "In dieser Situation wuerde ich...",
        systemPrompt: "Bewerte ob der Schueler eine Balance zwischen Empathie und Verantwortung zeigt. Positiv: Konkreter Handlungsvorschlag mit Begruendung. Feedback nach Sandwich-Prinzip.",
      },
    },
  },

  // =============================================================
  // Step 21: Dialog — Yasemin: Tagesreflexion (STORY)
  // =============================================================
  {
    stepId: "le01-s3-21",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Yasemin reflektiert",
      body: "Abends denkt Yasemin ueber den Tag nach.",
      fallbezug: "Auf dem Weg nach Hause. Der Tag war emotional.",
    },
    contentB1: {
      title: "Yasemin denkt nach",
      body: "Am Abend denkt Yasemin ueber den Tag nach.",
      fallbezug: "Auf dem Weg nach Hause. Es war ein schwieriger Tag.",
    },
    question: {
      fragetext: "Was hat Yasemin heute gelernt?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Yasemin denkt: 'Heute war schwierig. Herr Brenner hat geweint und ich wollte helfen. Aber ich habe die anderen vergessen.'",
          contextB1: "Yasemin denkt: 'Heute war schwierig. Herr Brenner hat geweint. Ich wollte helfen. Aber ich habe die anderen vergessen.'",
          speaker: "Yasemin (denkt)",
          options: [
            {
              text: "Ich glaube, ich muss lernen, professionell nah zu sein — nicht privat nah. Empathie und Struktur gehoeren zusammen.",
              textB1: "Ich muss lernen: professionell nah sein, nicht privat nah. Mitgefuehl und Planung gehoeren zusammen.",
              patientResponse: "Diese Erkenntnis ist der Anfang professionellen Handelns. Yasemin waechst.",
              patientResponseB1: "Das ist eine wichtige Erkenntnis. Yasemin wird besser.",
              score: 3,
              feedback: "Yasemin erkennt: Professionelle Naehe verbindet Empathie mit Verantwortung. Das ist der Kern der Pflegebeziehung.",
              feedbackB1: "Yasemin versteht: Mitgefuehl und Verantwortung zusammen — das ist professionelle Pflege.",
            },
            {
              text: "Naechstes Mal bleibe ich laenger. Herr Brenner braucht mich.",
              textB1: "Naechstes Mal bleibe ich laenger. Er braucht mich.",
              patientResponse: "Empathie ist gut — aber ohne professionelle Distanz kann sie schaden. Die Praxisanleiterin wuerde sagen: Plane deine Empathie.",
              patientResponseB1: "Mitgefuehl ist gut. Aber ohne Plan kann es schaden. Die Praxisanleiterin wuerde sagen: Teile deine Zeit ein.",
              score: 1,
              feedback: "Verstaendlich, aber riskant. Professionelle Naehe braucht Zeitmanagement und Abgrenzung.",
              feedbackB1: "Das ist verstaendlich. Aber in der Pflege muss man Zeit fuer alle Patienten haben.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Rueckblick Session 3 (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s3-22",
    phase: "s3",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Das hast du gelernt",
      body: "Session 3 ist geschafft. Hier sind die wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Session 3 ist fertig! Hier ist eine Zusammenfassung.",
    },
    question: {
      fragetext: "Deine Kernerkenntnisse aus Session 3:",
      summary: {
        reflexionRueckbezug: "Erinnerst du dich an den Swipe am Anfang? Du hast Reaktionen auf den weinenden Patienten bewertet. Jetzt weisst du: Professionelle Naehe verbindet Empathie mit Verantwortung.",
        kernaussagen: [
          "Kommunikation hat 3 Ebenen: verbal, paraverbal und nonverbal.",
          "Das 4-Ohren-Modell nach Schulz von Thun: Jede Nachricht hat 4 Seiten — Sachinhalt, Beziehung, Selbstoffenbarung, Appell.",
          "Distanzzonen: Intimdistanz bis 50 cm — Pflegende ueberschreiten sie regelmaessig und muessen dabei achtsam sein.",
          "Professionelle Naehe ist nicht private Naehe: Empathie ja, aber mit Zeitmanagement und Reflexion.",
        ],
      },
    },
  },
];

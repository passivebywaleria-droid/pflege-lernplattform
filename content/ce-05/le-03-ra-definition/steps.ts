// Lektion 03: RA — Definition, Ursachen, Pathomechanismus
// CE 05 — Block B: Rheumatoide Arthritis
// Session 1: "Was ist das?" (Punkte 1-2: Kurzbeschreibung, Definition)
// Generiert durch Didaktik-Loop v2 — 2026-03-22

import type {
  ContentStep,
  GlossarEntry,
  LektionMetadata,
} from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-03-ra-definition",
  ceId: "ce-05",
  title: "RA: Definition, Ursachen, Pathomechanismus",
  titleShort: "RA: Grundlagen",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-V.1"],
  bloomStufen: [1, 3],
  voraussetzungen: ["le-02-anatomie-immunologie"],
  leitfall: {
    name: "Mehmet Demir",
    alter: 43,
    beruf: "Fliesenleger",
    diagnose: "V.a. Rheumatoide Arthritis",
    setting: "Rheumatologische Ambulanz",
    kernproblem:
      "Morgensteifigkeit >60 Min, kann Werkzeug nicht mehr greifen",
  },
  glossarCount: 6,
  quellenCount: 5,
};

export const STEPS: ContentStep[] = [
  // ─── Step 1: Selbsteinschaetzung ───
  {
    stepId: "ra-def-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    contentC1: {
      title: "Was weisst du ueber Rheuma?",
      body: "Bevor wir starten: Schaetze dein Vorwissen ein. Es gibt keine falsche Antwort — das hilft uns, die Lektion an dich anzupassen.",
    },
    contentB1: {
      title: "Was weisst du ueber Rheuma?",
      body: "Wie viel weisst du schon ueber Rheuma? Es gibt keine falsche Antwort.",
    },
    question: {
      fragetext: "Wie viel weisst du ueber Rheumatoide Arthritis?",
      optionen: [
        {
          text: "Noch gar nichts — hoere den Begriff zum ersten Mal",
          isCorrect: false,
          explanation: "Kein Problem! Wir fangen ganz von vorne an.",
        },
        {
          text: "Etwas gehoert — weiss aber nicht genau was es ist",
          isCorrect: false,
          explanation: "Gut, dann bauen wir auf deinem Grundwissen auf.",
        },
        {
          text: "Grundlagen bekannt — weiss dass es eine Gelenkerkrankung ist",
          isCorrect: false,
          explanation: "Super, dann vertiefen wir dein Wissen.",
        },
        {
          text: "Viel Wissen — kenne Ursachen und Mechanismen",
          isCorrect: false,
          explanation: "Toll! Dann wird die Lektion eine gute Wiederholung.",
        },
      ],
    },
  },

  // ─── Step 2: Leitfall Mehmet — Wartezimmer ───
  {
    stepId: "ra-def-02",
    phase: 1,
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.2",
    quellen: [],
    contentC1: {
      title: "Im Wartezimmer der Rheuma-Ambulanz",
      body: "Mehmet Demir, 43 Jahre, Fliesenleger. Er sitzt im Wartezimmer und schaut sich um. Lauter aeltere Frauen. Er fuehlt sich fehl am Platz.",
      fallbezug: "Mehmet wurde von seiner Frau Fatma zum Termin geschickt.",
      glossarBegriffe: ["Rheumatoide Arthritis"],
    },
    contentB1: {
      title: "Im Wartezimmer",
      body: "Mehmet Demir ist 43 Jahre alt. Er arbeitet als Fliesenleger. Heute ist er zum ersten Mal beim Rheuma-Arzt. Er schaut sich um: Alle anderen Patienten sind aelter als er.",
      fallbezug: "Seine Frau Fatma hat den Termin fuer ihn gemacht.",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Mehmet sitzt nervoes im Wartezimmer. Wie reagierst du?",
      dialogPhases: [
        {
          context:
            "Mehmet sagt: 'Ich bin nur hier weil meine Frau mich hergeschickt hat. Ich glaub das ist nur Ueberlastung — ich hab halt viel gefliest in letzter Zeit.'",
          options: [
            {
              text: "Gut, dass Sie da sind. Erzaehlen Sie mal — was genau macht Ihnen Probleme?",
              patientResponse:
                "Na ja... morgens sind meine Haende steif. Wie eingerostet. Das dauert ueber eine Stunde bis das besser wird.",
              score: 3,
              feedback:
                "Sehr gut! Du laesst ihn erzaehlen, ohne zu werten. Offene Fragen helfen dem Patienten sich zu oeffnen.",
            },
            {
              text: "Ueberlastung kann viele Ursachen haben. Lassen Sie uns das abklaeren.",
              patientResponse:
                "Ja, genau. Abklaeren. Ich mein, es ist wahrscheinlich nichts Schlimmes, oder?",
              score: 2,
              feedback:
                "Okay, aber du gehst nicht auf seine Gefuehle ein. Er ist verunsichert — zeig Verstaendnis.",
            },
            {
              text: "Rheuma hat nichts mit Ueberlastung zu tun. Sie sollten das ernst nehmen.",
              patientResponse: "...okay.",
              score: 1,
              feedback:
                "Zu direkt! Der Patient verharmlost seine Symptome, aber er braucht Verstaendnis, keine Belehrung.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 3: Brilliant-Frage ───
  {
    stepId: "ra-def-03",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Was glaubst du?",
      body: "Ein 43-jaehriger Fliesenleger mit symmetrischen Gelenkschwellungen und Morgensteifigkeit ueber 60 Minuten. Er sitzt in einer rheumatologischen Ambulanz. Was hat er wahrscheinlich?",
      fallbezug: "Mehmet hat seit 3 Monaten Probleme mit beiden Haenden.",
      glossarBegriffe: ["Morgensteifigkeit"],
    },
    contentB1: {
      title: "Was hat Mehmet?",
      body: "Mehmet ist 43 Jahre alt. Beide Haende sind geschwollen. Morgens sind sie ueber 60 Minuten steif. Was hat er wahrscheinlich?",
    },
    question: {
      fragetext:
        "Was glaubst du — welche Erkrankung hat Mehmet wahrscheinlich?",
      optionen: [
        {
          text: "Gicht — durch zu viel Fleisch und Bier",
          isCorrect: false,
          explanation:
            "Gicht betrifft typischerweise EIN Gelenk (Grosszehe), nicht symmetrisch beide Haende. Ausserdem ist Gicht eher akut, nicht schleichend.",
        },
        {
          text: "Arthrose — Verschleiss durch schwere Arbeit",
          isCorrect: false,
          explanation:
            "Verstaendlich gedacht! Aber Arthrose verursacht keine Morgensteifigkeit ueber 60 Minuten. Bei Arthrose ist der Anlaufschmerz kurz (<30 Min).",
        },
        {
          text: "Rheumatoide Arthritis — eine Autoimmunerkrankung",
          isCorrect: true,
          explanation:
            "Richtig! Symmetrische Schwellung der kleinen Handgelenke + Morgensteifigkeit >60 Min = typisch fuer RA. Aber warte — warum greift das Immunsystem die eigenen Gelenke an? Das klaeren wir gleich.",
        },
        {
          text: "Ueberlastung — er hat einfach zu viel gearbeitet",
          isCorrect: false,
          explanation:
            "Das denkt Mehmet auch! Aber Ueberlastung erklaert nicht die symmetrische Schwellung BEIDER Haende und die lange Morgensteifigkeit. Da steckt mehr dahinter.",
        },
      ],
    },
  },

  // ─── Step 4: Info-Karten Grundlagen ───
  {
    stepId: "ra-def-04",
    phase: 2,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Rheumatoide Arthritis — die Grundlagen",
      body: "Die Rheumatoide Arthritis (RA) ist die haeufigste chronisch-entzuendliche Gelenkerkrankung. Sie gehoert zum rheumatischen Formenkreis — einer Gruppe von ueber 400 Erkrankungen des Bewegungsapparats.\n\nDas Besondere an RA: Es ist eine Autoimmunerkrankung. Das bedeutet, das Immunsystem greift koerpereigenes Gewebe an — in diesem Fall die Gelenkinnenhaut (Synovialmembran).",
      glossarBegriffe: [
        "Rheumatoide Arthritis",
        "Autoimmunerkrankung",
        "Synovialmembran",
        "Formenkreis",
      ],
    },
    contentB1: {
      title: "Was ist Rheumatoide Arthritis?",
      body: "Rheumatoide Arthritis (kurz: RA) ist eine Krankheit der Gelenke. Die Gelenke sind dauerhaft entzuendet.\n\nRA ist eine Autoimmunerkrankung. Das heisst: Das Immunsystem macht einen Fehler. Es greift die eigenen Gelenke an.\n\nRA gehoert zum rheumatischen Formenkreis. Das sind ueber 400 verschiedene Krankheiten.",
      glossarBegriffe: [
        "Rheumatoide Arthritis",
        "Autoimmunerkrankung",
        "Synovialmembran",
      ],
    },
  },

  // ─── Step 5: Zahlen und Fakten ───
  {
    stepId: "ra-def-05",
    phase: 2,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Zahlen und Fakten",
      body: "RA betrifft ca. 0,5-1% der Bevoelkerung — in Deutschland etwa 550.000 Menschen. Frauen erkranken 2-3 Mal haeufiger als Maenner.\n\nDer Erkrankungsgipfel liegt zwischen dem 50. und 70. Lebensjahr. ABER: RA kann in jedem Alter auftreten. Mehmet ist 43 — kein typischer Patient, aber auch nicht ungewoehnlich.",
      fallbezug:
        "Mehmet bricht ein Vorurteil: RA trifft nicht nur aeltere Frauen.",
    },
    contentB1: {
      title: "Wie haeufig ist RA?",
      body: "Etwa 1 von 100 Menschen hat RA. In Deutschland sind das ueber 500.000 Menschen.\n\nFrauen bekommen RA 2 bis 3 Mal oefter als Maenner. Die meisten Menschen erkranken zwischen 50 und 70 Jahren.\n\nABER: Auch juengere Menschen koennen RA bekommen. Mehmet ist 43 Jahre alt.",
    },
  },

  // ─── Step 6: TrueFalse Swipe-Karten ───
  {
    stepId: "ra-def-06",
    phase: 2,
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Wahr oder Falsch?",
      body: "Wische nach rechts fuer WAHR, nach links fuer FALSCH.",
    },
    question: {
      fragetext: "Entscheide: Wahr oder Falsch?",
      trueFalseCards: [
        {
          statement: "Rheuma bekommen nur aeltere Frauen",
          isTrue: false,
          explanation:
            "Falsch! RA kann Maenner und Frauen in jedem Alter treffen. Mehmet ist 43 und maennlich.",
        },
        {
          statement: "RA gehoert zum rheumatischen Formenkreis",
          isTrue: true,
          explanation:
            "Richtig! Der Formenkreis umfasst ueber 400 Erkrankungen, RA ist die haeufigste entzuendliche.",
        },
        {
          statement:
            "Bei RA greift das Immunsystem fremde Krankheitserreger an",
          isTrue: false,
          explanation:
            "Falsch! Bei RA greift das Immunsystem EIGENES Gewebe an — das ist der Kern einer Autoimmunerkrankung.",
        },
        {
          statement: "Maenner koennen auch Rheumatoide Arthritis bekommen",
          isTrue: true,
          explanation:
            "Richtig! Frauen sind zwar 2-3x haeufiger betroffen, aber auch Maenner erkranken an RA.",
        },
      ],
    },
  },

  // ─── Step 7: Leitfall — Untersuchung ───
  {
    stepId: "ra-def-07",
    phase: 2,
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Die Untersuchung",
      body: "Die Aerztin untersucht Mehmets Haende. Die MCP-Gelenke II-IV sind beidseits geschwollen und druckschmerzhaft. Der Befund ist symmetrisch.",
      fallbezug:
        "Mehmet zuckt zusammen als die Aerztin seine Fingergrundgelenke abtastet.",
      glossarBegriffe: ["Symmetrisch"],
    },
    contentB1: {
      title: "Beim Arzt",
      body: "Die Aerztin schaut sich Mehmets Haende an. Die Fingergelenke sind auf beiden Seiten geschwollen. Sie drueckt vorsichtig darauf — Mehmet zuckt zusammen.",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Die Aerztin untersucht Mehmets Haende.",
      dialogPhases: [
        {
          context:
            "Mehmet sagt leise: 'Morgens kann ich nicht mal die Zahnbuerste halten. Meine Tochter Elif schmiert mir jetzt das Brot. Sie ist 11.'",
          vitals:
            "Befund: MCP II-IV bds. geschwollen, Griffkraft reduziert, Morgensteifigkeit >60 Min",
          options: [
            {
              text: "Das klingt belastend. Die Schwellung ist auf beiden Seiten gleich — das ist ein wichtiger Hinweis fuer die Diagnose.",
              patientResponse:
                "Auf beiden Seiten? Ja stimmt, links und rechts. Ist das schlimm?",
              score: 3,
              feedback:
                "Gut! Du zeigst Empathie und erklaerst fachlich korrekt. Symmetrischer Befall ist typisch fuer RA.",
            },
            {
              text: "Das wird schon wieder. Warten wir die Blutuntersuchung ab.",
              patientResponse: "Ja... hoffentlich.",
              score: 1,
              feedback:
                "Zu unverbindlich. Der Patient braucht Informationen, nicht nur Vertroestung.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 8: Definition aufbauen ───
  {
    stepId: "ra-def-08",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Die Definition Schritt fuer Schritt",
      body: "RA ist definiert als chronische, systemische Autoimmunerkrankung der Synovialmembran. Was bedeuten diese Woerter?\n\n**Chronisch:** Nicht heilbar, aber behandelbar. Der Verlauf ist lebenslang und schubfoermig.\n\n**Systemisch:** RA kann neben Gelenken auch Organe befallen — Lunge, Herz, Augen, Gefaesse.\n\n**Symmetrisch:** RA befaellt meist die gleichen Gelenke auf beiden Koerperseiten — wie bei Mehmet.",
      glossarBegriffe: ["Chronisch", "Symmetrisch"],
    },
    contentB1: {
      title: "Was bedeutet die Diagnose?",
      body: "**Chronisch:** Die Krankheit bleibt ein Leben lang. Man kann sie behandeln, aber nicht heilen.\n\n**Systemisch:** Nicht nur die Gelenke sind betroffen. Auch Lunge, Herz oder Augen koennen Probleme bekommen.\n\n**Symmetrisch:** Die gleichen Gelenke auf BEIDEN Seiten sind betroffen. Zum Beispiel: beide Haende, nicht nur eine.",
    },
  },

  // ─── Step 9: Matching Begriffe ───
  {
    stepId: "ra-def-09",
    phase: 3,
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Ordne die Begriffe zu",
      body: "Verbinde jeden Fachbegriff mit seiner Bedeutung.",
    },
    question: {
      fragetext: "Ordne die Begriffe der richtigen Erklaerung zu:",
      matchingPairs: [
        { left: "Chronisch", right: "Nicht heilbar, aber behandelbar" },
        { left: "Systemisch", right: "Kann auch Organe befallen" },
        { left: "Symmetrisch", right: "Beide Koerperseiten betroffen" },
        {
          left: "Autoimmun",
          right: "Immunsystem greift eigenes Gewebe an",
        },
        { left: "Synovialmembran", right: "Gelenkinnenhaut" },
      ],
    },
  },

  // ─── Step 10: MC Typischer Befall ───
  {
    stepId: "ra-def-10",
    phase: 3,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Typischer Gelenkbefall",
      body: "Welche Gelenke sind bei RA typischerweise als ERSTES betroffen?",
    },
    question: {
      fragetext: "Welche Gelenke sind bei RA typischerweise ZUERST betroffen?",
      optionen: [
        {
          text: "Knie- und Hueftgelenke",
          isCorrect: false,
          explanation:
            "Falsch. Grosse Gelenke koennen spaeter betroffen sein, aber RA beginnt typischerweise an den kleinen Gelenken.",
        },
        {
          text: "MCP- und PIP-Gelenke der Haende",
          isCorrect: true,
          explanation:
            "Richtig! Die Fingergrund- (MCP) und Fingermittelgelenke (PIP) sind der typische Erstbefall — symmetrisch, also beidseits.",
        },
        {
          text: "Wirbelsaeule und Becken",
          isCorrect: false,
          explanation:
            "Falsch. Wirbelsaeulenbeteiligung ist eher typisch fuer Spondyloarthritiden (z.B. M. Bechterew), nicht fuer RA.",
        },
        {
          text: "Schultergelenke",
          isCorrect: false,
          explanation:
            "Falsch. Schultern koennen spaeter betroffen sein, aber der Beginn ist typischerweise an den kleinen Handgelenken.",
        },
      ],
    },
  },

  // ─── Step 11: Memory ───
  {
    stepId: "ra-def-11",
    phase: 3,
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Memory — Finde die Paare",
      body: "Finde die zusammengehoerenden Paare. Jeder Begriff hat eine passende Erklaerung.",
    },
    question: {
      fragetext: "Finde die 6 Paare:",
      memoryPairs: [
        { a: "RA", b: "Autoimmunerkrankung" },
        { a: "Arthrose", b: "Verschleiss" },
        { a: "Synovialmembran", b: "Gelenkinnenhaut" },
        { a: "Chronisch", b: "Lebenslang" },
        { a: "MCP", b: "Fingergrundgelenke" },
        { a: "Symmetrisch", b: "Beide Seiten" },
      ],
    },
  },

  // ─── Step 12: RA vs. Arthrose ───
  {
    stepId: "ra-def-12",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3"],
    contentC1: {
      title: "RA vs. Arthrose — der wichtige Unterschied",
      body: "RA und Arthrose werden oft verwechselt. Aber sie sind grundverschieden:\n\n| | RA | Arthrose |\n|---|---|---|\n| Ursache | Autoimmun (Entzuendung) | Verschleiss (Degeneration) |\n| Morgensteifigkeit | >30 Min, oft >60 Min | <30 Min (Anlaufschmerz) |\n| Befall | Symmetrisch | Oft einseitig |\n| Alter | Jedes Alter | Eher aelter |\n| Gelenke | Kleine Gelenke zuerst | Grosse Gelenke (Knie, Huefte) |",
      glossarBegriffe: ["Morgensteifigkeit"],
    },
    contentB1: {
      title: "RA und Arthrose — was ist der Unterschied?",
      body: "RA und Arthrose klingen aehnlich, sind aber sehr verschieden:\n\n**RA:** Entzuendung. Das Immunsystem greift die Gelenke an. Morgens sind die Gelenke lange steif (mehr als 30 Minuten).\n\n**Arthrose:** Verschleiss. Der Knorpel ist abgenutzt. Der Schmerz kommt beim Aufstehen und geht schnell weg (weniger als 30 Minuten).",
    },
  },

  // ─── Step 13: Categorize RA/Arthrose ───
  {
    stepId: "ra-def-13",
    phase: 3,
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3"],
    contentC1: {
      title: "Sortiere: RA oder Arthrose?",
      body: "Ordne die Merkmale der richtigen Erkrankung zu.",
    },
    question: {
      fragetext: "Welches Merkmal gehoert zu RA, welches zu Arthrose?",
      categories: [{ name: "Rheumatoide Arthritis" }, { name: "Arthrose" }],
      categoryItems: [
        { text: "Morgensteifigkeit >60 Minuten", correctCategory: 0 },
        { text: "Anlaufschmerz <30 Minuten", correctCategory: 1 },
        { text: "Symmetrischer Befall", correctCategory: 0 },
        { text: "Oft einseitig", correctCategory: 1 },
        { text: "Autoimmunerkrankung", correctCategory: 0 },
        { text: "Verschleiss/Degeneration", correctCategory: 1 },
        { text: "Systemisch (auch Organe)", correctCategory: 0 },
        { text: "Vor allem grosse Gelenke", correctCategory: 1 },
      ],
    },
  },

  // ─── Step 14: Mehmet telefoniert mit Elif ───
  {
    stepId: "ra-def-14",
    phase: 3,
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: [],
    contentC1: {
      title: "Zuhause am Telefon",
      body: "Mehmet erzaehlt seiner Tochter Elif am Telefon von seinem Arztbesuch.",
      fallbezug:
        "Elif ist 14 und macht sich Sorgen. Ihre Oma hat Arthrose im Knie.",
    },
    contentB1: {
      title: "Mehmet telefoniert mit seiner Tochter",
      body: "Mehmet ruft seine Tochter Elif an. Sie ist 14 Jahre alt. Ihre Oma hat Arthrose. Elif fragt: 'Hast du das auch?'",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Elif fragt: 'Papa, ist das wie bei Oma?'",
      dialogPhases: [
        {
          context:
            "Mehmet: 'Der Arzt sagt ich hab eine Entzuendung in den Gelenken. Mein Koerper greift sich selbst an. Verrueckt oder?' Elif: 'Ist das wie Arthrose? Oma hat das doch auch im Knie.'",
          options: [
            {
              text: "Helfe Mehmet erklaeren: 'Bei dir ist es eine Entzuendung — dein Immunsystem macht einen Fehler. Bei Oma ist es Verschleiss.'",
              patientResponse:
                "Aha, also was anderes. Aber beides tut weh, oder Papa?",
              score: 3,
              feedback:
                "Perfekt! Du hilfst den Unterschied verstaendlich zu erklaeren — Entzuendung vs. Verschleiss.",
            },
            {
              text: "Sage: 'Nein Elif, das ist etwas ganz anderes. Das ist viel schlimmer als Arthrose.'",
              patientResponse: "Was?! Papa, geht es dir sehr schlecht?!",
              score: 1,
              feedback:
                "Zu dramatisch. RA ist ernst, aber 'viel schlimmer' macht unnoetig Angst — besonders bei einem Kind.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 15: MC Hauptunterschied ───
  {
    stepId: "ra-def-15",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3"],
    contentC1: {
      title: "Der wichtigste Unterschied",
      body: "Elif fragt ihren Vater: 'Ist das wie bei Oma?' Was ist der WICHTIGSTE Unterschied zwischen RA und Arthrose?",
      fallbezug: "Elifs Oma hat Arthrose im Knie.",
    },
    question: {
      fragetext:
        "Was ist der WICHTIGSTE Unterschied zwischen RA und Arthrose?",
      optionen: [
        {
          text: "RA ist schlimmer als Arthrose",
          isCorrect: false,
          explanation:
            "Nicht so einfach. Beide koennen schwer verlaufen. Der Unterschied liegt in der URSACHE, nicht im Schweregrad.",
        },
        {
          text: "RA ist entzuendlich/autoimmun, Arthrose ist degenerativ/Verschleiss",
          isCorrect: true,
          explanation:
            "Genau! Das ist der Kernunterschied. Bei RA greift das Immunsystem die Gelenke an (Entzuendung). Bei Arthrose nutzt sich der Knorpel ab (Verschleiss). Das bestimmt auch die Therapie.",
        },
        {
          text: "RA befaellt nur die Haende, Arthrose nur die Knie",
          isCorrect: false,
          explanation:
            "Nicht korrekt. RA beginnt zwar oft an den Haenden und Arthrose haeufig am Knie — aber beide koennen verschiedene Gelenke befallen.",
        },
        {
          text: "Arthrose ist heilbar, RA nicht",
          isCorrect: false,
          explanation:
            "Leider sind BEIDE nicht heilbar. Aber beide sind behandelbar. Der Unterschied liegt in der Ursache.",
        },
      ],
    },
  },

  // ─── Step 16: Kreuzwortraetsel ───
  {
    stepId: "ra-def-16",
    phase: 3,
    stepType: "crossword",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Kreuzwortraetsel — Teste dein Wissen",
      body: "Fuege die richtigen Fachbegriffe ein.",
    },
    question: {
      fragetext: "Finde die 6 Begriffe:",
      crosswordWords: [
        {
          word: "AUTOIMMUN",
          clue: "Das Immunsystem greift den eigenen Koerper an",
        },
        {
          word: "SYNOVIAL",
          clue: "Die ____membran ist die Gelenkinnenhaut",
        },
        { word: "CHRONISCH", clue: "Dauerhaft, nicht heilbar" },
        { word: "SYMMETRISCH", clue: "Beide Koerperseiten gleich betroffen" },
        {
          word: "FORMENKREIS",
          clue: "Der rheumatische ____ umfasst ueber 400 Erkrankungen",
        },
        {
          word: "ARTHROSE",
          clue: "Gelenkerkrankung durch Verschleiss (Gegenteil von RA)",
        },
      ],
    },
  },

  // ─── Step 17: MC Systemisch ───
  {
    stepId: "ra-def-17",
    phase: 3,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Systemisch — was bedeutet das?",
      body: "Welche Aussage ueber RA ist FALSCH?",
    },
    question: {
      fragetext: "Welche Aussage ueber RA ist FALSCH?",
      optionen: [
        {
          text: "RA befaellt ausschliesslich die Gelenke",
          isCorrect: true,
          explanation:
            "FALSCH — und das ist die richtige Antwort! RA ist SYSTEMISCH: Sie kann auch Lunge, Herz, Augen und Gefaesse befallen. Deshalb ist sie mehr als 'nur' eine Gelenkerkrankung.",
        },
        {
          text: "RA ist eine chronische Erkrankung",
          isCorrect: false,
          explanation: "Diese Aussage ist RICHTIG. RA ist lebenslang.",
        },
        {
          text: "Frauen sind haeufiger betroffen als Maenner",
          isCorrect: false,
          explanation:
            "Diese Aussage ist RICHTIG. Frauen erkranken 2-3x haeufiger.",
        },
        {
          text: "Typischerweise sind zuerst die kleinen Gelenke betroffen",
          isCorrect: false,
          explanation:
            "Diese Aussage ist RICHTIG. MCP und PIP der Haende sind der typische Erstbefall.",
        },
      ],
    },
  },

  // ─── Step 18: Freetext Autoimmun erklaeren ───
  {
    stepId: "ra-def-18",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1"],
    contentC1: {
      title: "Erklaere es Mehmet",
      body: "Mehmet hat gerade die Verdachtsdiagnose RA erhalten. Er versteht nicht, warum sein eigener Koerper seine Gelenke angreift.",
      fallbezug:
        "Mehmet fragt: 'Was heisst das — mein Immunsystem greift mich selbst an?'",
    },
    contentB1: {
      title: "Erklaere Mehmet seine Krankheit",
      body: "Mehmet fragt: 'Was heisst das? Mein Koerper greift sich selbst an? Wieso macht der das?'",
    },
    question: {
      fragetext:
        "Erklaere Mehmet in einfachen Worten, was eine Autoimmunerkrankung ist.",
      musterantwort:
        "Normalerweise schuetzt das Immunsystem den Koerper vor Krankheitserregern. Bei einer Autoimmunerkrankung macht das Immunsystem einen Fehler: Es verwechselt eigenes Gewebe mit einem Feind. Bei RA greift es die Gelenkinnenhaut an und verursacht dort eine dauerhafte Entzuendung.",
      bewertungskriterien: [
        "Erklaerung der normalen Immunfunktion als Vergleich",
        "Verwechslung eigen/fremd als Kernkonzept benannt",
        "Bezug auf Gelenke oder Gelenkinnenhaut hergestellt",
      ],
      satzanfaengeB1: [
        "Das Immunsystem schuetzt normalerweise...",
        "Bei Rheuma passiert ein Fehler...",
        "Der Koerper greift die Gelenke an, weil...",
      ],
    },
  },

  // ─── Step 19: Timer Speed-Review ───
  {
    stepId: "ra-def-19",
    phase: 5,
    stepType: "timer",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Speed-Review!",
      body: "5 Fragen, 15 Sekunden pro Frage. Wie viele schaffst du?",
    },
    question: {
      fragetext: "Beantworte so schnell du kannst!",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Wie viel Prozent der Bevoelkerung hat RA?",
          options: ["0,01%", "0,5-1%", "5-10%", "20%"],
          correctIndex: 1,
        },
        {
          question: "Wer ist HAEUFIGER von RA betroffen?",
          options: ["Maenner", "Frauen", "Kinder", "Gleich haeufig"],
          correctIndex: 1,
        },
        {
          question: "Was bedeutet 'chronisch'?",
          options: [
            "Ansteckend",
            "Nicht heilbar, aber behandelbar",
            "Nur bei alten Menschen",
            "Immer toedlich",
          ],
          correctIndex: 1,
        },
        {
          question: "Welche Gelenke sind bei RA ZUERST betroffen?",
          options: [
            "Kniegelenke",
            "Hueftgelenke",
            "Kleine Handgelenke (MCP/PIP)",
            "Schultergelenke",
          ],
          correctIndex: 2,
        },
        {
          question: "Morgensteifigkeit >60 Min: RA oder Arthrose?",
          options: ["RA", "Arthrose", "Beide", "Keine"],
          correctIndex: 0,
        },
      ],
    },
  },

  // ─── Step 20: Ausblick Session 2 ───
  {
    stepId: "ra-def-20",
    phase: 6,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    contentC1: {
      title: "Was kommt als Naechstes?",
      body: "Du weisst jetzt WAS Rheumatoide Arthritis ist. Du kannst RA definieren, von Arthrose unterscheiden und die wichtigsten Merkmale benennen.\n\nAber WARUM bekommt man RA? Was passiert dabei im Gelenk? Das schauen wir uns in der naechsten Session an.\n\nUnd Mehmet? Er muss jetzt auf seine Laborergebnisse warten. Anti-CCP, Rheumafaktor, CRP — was wird das Blut zeigen?",
      fallbezug: "Mehmet wartet nervoes auf seine Blutwerte.",
    },
    contentB1: {
      title: "Geschafft!",
      body: "Du weisst jetzt, was RA ist. Du kannst RA und Arthrose unterscheiden.\n\nIn der naechsten Session lernst du: Warum bekommt man RA? Was passiert im Gelenk?\n\nMehmet wartet auf seine Blutergebnisse. Was werden die Werte zeigen?",
    },
  },

  // ─── Step 21: Checkpoint ───
  {
    stepId: "ra-def-21",
    phase: 6,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    contentC1: {
      title: "Session 1 — Das hast du gelernt",
      body: "5 Kernaussagen dieser Session:\n\n1. RA ist eine Autoimmunerkrankung — das Immunsystem greift die Gelenkinnenhaut an\n2. RA ist chronisch (lebenslang) und systemisch (kann auch Organe befallen)\n3. Typisch: Symmetrischer Befall der kleinen Handgelenke\n4. RA ist NICHT Arthrose — Entzuendung vs. Verschleiss\n5. RA kann jeden treffen — nicht nur aeltere Frauen",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "5 wichtige Dinge:\n\n1. RA ist eine Autoimmunerkrankung. Das Immunsystem greift die eigenen Gelenke an.\n2. RA ist chronisch. Die Krankheit bleibt.\n3. RA betrifft kleine Gelenke auf BEIDEN Seiten.\n4. RA ist nicht Arthrose. RA = Entzuendung. Arthrose = Verschleiss.\n5. Auch junge Menschen und Maenner koennen RA bekommen.",
    },
    question: {
      fragetext: "Wie sicher fuehlst du dich jetzt mit dem Thema?",
      optionen: [
        {
          text: "Sehr sicher — ich kann RA definieren und von Arthrose unterscheiden",
          isCorrect: false,
          explanation: "Super! In Session 2 geht es um die Ursachen.",
        },
        {
          text: "Ziemlich sicher — ein paar Begriffe muss ich noch festigen",
          isCorrect: false,
          explanation:
            "Gut! Die Begriffe kommen in Session 2 und 3 nochmal vor.",
        },
        {
          text: "Noch unsicher — ich brauche mehr Uebung",
          isCorrect: false,
          explanation:
            "Kein Problem. Session 2 wiederholt die wichtigsten Begriffe nochmal.",
        },
      ],
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Rheumatoide Arthritis",
    erklaerung:
      "Haeufigste chronisch-entzuendliche Autoimmunerkrankung der Gelenke mit symmetrischem Befall kleiner Gelenke",
  },
  {
    begriff: "Autoimmunerkrankung",
    erklaerung:
      "Erkrankung, bei der das Immunsystem koerpereigenes Gewebe als fremd erkennt und angreift",
  },
  {
    begriff: "Synovialmembran",
    erklaerung:
      "Innere Schicht der Gelenkkapsel, die Synovialfluessigkeit produziert und das Gelenk schmiert",
  },
  {
    begriff: "Chronisch",
    erklaerung:
      "Langandauernd, nicht heilbar aber behandelbar. Gegenteil von akut.",
  },
  {
    begriff: "Symmetrisch",
    erklaerung:
      "Beide Koerperseiten gleich betroffen, z.B. beide Haende.",
  },
  {
    begriff: "Morgensteifigkeit",
    erklaerung:
      "Steifigkeit der Gelenke nach dem Aufwachen. Bei RA typischerweise >30 Minuten.",
  },
];

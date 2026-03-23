// Lektion 03: RA — Definition, Ursachen, Pathomechanismus
// CE 05 — Block B: Rheumatoide Arthritis
// Session 2: "Warum bekommt man RA?" (Punkte 3-4: Ursachen, Pathomechanismus)
// Generiert durch Didaktik-Loop v2 — 2026-03-22

import type { ContentStep } from "../_types";

export const STEPS_S2: ContentStep[] = [
  // ─── Step 1: Story — Befundbesprechung ───
  {
    stepId: "ra-def-s2-01",
    phase: 1,
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.2",
    quellen: [],
    contentC1: {
      title: "2 Wochen spaeter — die Ergebnisse",
      body: "Mehmet sitzt wieder in der Ambulanz. Diesmal ist Fatma dabei. Die Laborergebnisse sind da.",
      fallbezug:
        "Mehmet macht Witze: 'Hoffentlich sagen die mir, dass ich gesund bin.' Aber seine Haende zittern leicht.",
    },
    contentB1: {
      title: "Die Ergebnisse sind da",
      body: "Mehmet ist wieder beim Arzt. Seine Frau Fatma ist auch da. Heute bekommt er die Ergebnisse von seinem Blut.",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Mehmet wartet auf seine Ergebnisse.",
      dialogPhases: [
        {
          context:
            "Mehmet dreht nervoes seinen Ehering. Er bemerkt: Der Ring geht schwerer als frueher. 'Letztes Jahr konnte ich den leicht ab- und anziehen. Jetzt geht er kaum noch runter.'",
          options: [
            {
              text: "Das kann ein Zeichen fuer die Schwellung sein. Wie geht es Ihnen heute Morgen mit den Haenden?",
              patientResponse:
                "Heute morgen... puh. Ueber eine Stunde bis ich die Finger bewegen konnte. Fatma musste mir die Schuhe binden.",
              score: 3,
              feedback:
                "Gut! Du nimmst sein Symptom auf und fragst gezielt nach. Die Morgensteifigkeit ist ein wichtiger Verlaufsparameter.",
            },
            {
              text: "Ach, vielleicht haben Sie einfach etwas zugenommen an den Fingern.",
              patientResponse: "...",
              score: 1,
              feedback:
                "Nein! Die Schwellung der Fingergelenke bei RA ist nicht gleich Gewichtszunahme. Nimm die Symptome ernst.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 2: Recall-Karten ───
  {
    stepId: "ra-def-s2-02",
    phase: 1,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Zur Erinnerung",
      body: "Bevor wir weitergehen — kurze Wiederholung aus Session 1:\n\n**RA** = Chronische, systemische Autoimmunerkrankung der Synovialmembran.\n\n**Typisch:** Symmetrischer Befall kleiner Gelenke, Morgensteifigkeit >30 Min.\n\n**Nicht Arthrose!** RA = Entzuendung. Arthrose = Verschleiss.\n\nHeute klaeren wir: WARUM bekommt man RA? Und was passiert dabei im Gelenk?",
    },
    contentB1: {
      title: "Erinnerst du dich?",
      body: "Kurze Wiederholung:\n\nRA ist eine Autoimmunerkrankung. Das Immunsystem greift die eigenen Gelenke an.\n\nTypisch: Beide Haende gleichzeitig. Morgens lange steife Gelenke.\n\nHeute lernst du: WARUM bekommt man RA? Was passiert im Gelenk?",
    },
  },

  // ─── Step 3: Recall TrueFalse ───
  {
    stepId: "ra-def-s2-03",
    phase: 2,
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Schnell-Check: Was weisst du noch?",
      body: "4 Aussagen — Wahr oder Falsch? Neue Formulierungen, gleiches Wissen.",
    },
    question: {
      fragetext: "Wahr oder Falsch?",
      trueFalseCards: [
        {
          statement:
            "RA befaellt typischerweise die grossen Gelenke wie Knie und Huefte",
          isTrue: false,
          explanation:
            "Falsch! RA beginnt typischerweise an kleinen Gelenken (MCP, PIP der Haende). Grosse Gelenke koennen spaeter betroffen sein.",
        },
        {
          statement: "RA ist eine Autoimmunerkrankung",
          isTrue: true,
          explanation:
            "Richtig! Das Immunsystem greift die Synovialmembran (Gelenkinnenhaut) an.",
        },
        {
          statement:
            "Bei Arthrose dauert die Morgensteifigkeit ueber 60 Minuten",
          isTrue: false,
          explanation:
            "Falsch! Das ist typisch fuer RA. Bei Arthrose ist der Anlaufschmerz kurz (<30 Min).",
        },
        {
          statement: "RA kann auch Organe wie Lunge und Herz befallen",
          isTrue: true,
          explanation:
            "Richtig! RA ist systemisch. Extraartikulaere Manifestationen betreffen Lunge, Herz, Augen, Gefaesse.",
        },
      ],
    },
  },

  // ─── Step 3b: Brilliant-Moment — Denkanstoß VOR Erklaerung ───
  {
    stepId: "ra-def-s2-03b",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Denkanstoß",
      body: "Mehmet ist 43, maennlich, Handwerker. Im Wartezimmer sitzen nur aeltere Frauen. RA betrifft 3x mehr Frauen als Maenner. Trotzdem hat ER es.",
      fallbezug: "Was glaubst du — BEVOR wir es erklaeren?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Mehmet ist 43 Jahre alt. RA trifft meistens aeltere Frauen. Warum hat er trotzdem RA?",
    },
    question: {
      fragetext:
        "Mehmet ist 43 und maennlich — RA trifft typischerweise aeltere Frauen. Was koennte bei Mehmet ANDERS sein, das sein Risiko erhoeht?",
      optionen: [
        {
          text: "Nichts — es ist reiner Zufall",
          isCorrect: false,
          explanation:
            "Nicht ganz. RA ist NICHT rein zufaellig. Es gibt Risikofaktoren die das Risiko erhoehen — auch bei jungen Maennern. Lies weiter!",
        },
        {
          text: "Rauchen und/oder genetische Veranlagung koennten sein Risiko erhoeht haben",
          isCorrect: true,
          explanation:
            "Guter Gedanke! Rauchen und Gene sind die wichtigsten Risikofaktoren — sie koennen auch bei jungen Maennern RA ausloesen. Gleich erfaehrst du die Details.",
        },
        {
          text: "Sein Beruf als Fliesenleger hat die RA verursacht",
          isCorrect: false,
          explanation:
            "Koerperliche Arbeit verursacht Verschleiss (Arthrose), aber RA ist eine Autoimmunerkrankung — die hat andere Ursachen. Gleich mehr dazu!",
        },
        {
          text: "RA trifft NUR Frauen",
          isCorrect: false,
          explanation:
            "Falsch. RA trifft Frauen 3x haeufiger, aber auch Maenner koennen RA bekommen. Mehmet ist der Beweis!",
        },
      ],
    },
  },

  // ─── Step 4: Ursachen Teil 1 — Multifaktoriell ───
  {
    stepId: "ra-def-s2-04",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Warum bekommt man RA?",
      body: "Die ehrliche Antwort: Niemand weiss es genau. RA ist multifaktoriell — mehrere Faktoren muessen zusammenkommen:\n\n1. **Gene** — erhoehen das Risiko, aber verursachen allein keine RA\n2. **Umwelt** — Rauchen, Infektionen, Stress\n3. **Trigger** — der Ausloeser der die Krankheit startet\n\nStell es dir vor wie ein Puzzle: Erst wenn genug Teile zusammenkommen, entsteht RA.",
      glossarBegriffe: ["HLA-DR4"],
    },
    contentB1: {
      title: "Warum bekommt man RA?",
      body: "Niemand weiss genau, warum man RA bekommt. Es sind immer MEHRERE Gruende zusammen:\n\n1. Die Gene (von den Eltern)\n2. Die Umwelt (zum Beispiel Rauchen)\n3. Ein Ausloeser (zum Beispiel Stress)\n\nAlle drei muessen zusammenkommen. Ein Grund allein reicht nicht.",
    },
  },

  // ─── Step 5: Genetik ───
  {
    stepId: "ra-def-s2-05",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Faktor 1: Die Gene",
      body: "**HLA-DR4** — ein Gen das das RA-Risiko um das 5-fache erhoeht. Wer es traegt, hat ein hoeheres Risiko. ABER:\n\nGenetik erklaert nur ca. 50% des Risikos. Eineiige Zwillinge haben nur eine Konkordanz von 15-30%. Das heisst: Selbst wenn ein Zwilling RA hat, bekommt der andere es in 70-85% der Faelle NICHT.\n\n**Merke:** Gene laden die Waffe — die Umwelt drueckt ab.",
      glossarBegriffe: ["HLA-DR4"],
    },
    contentB1: {
      title: "Die Gene",
      body: "Es gibt ein Gen namens HLA-DR4. Wer dieses Gen hat, hat ein 5-mal hoeheres Risiko fuer RA.\n\nABER: Gene sind nicht alles. Sie erklaeren nur die Haelfte. Auch bei Zwillingen: Wenn einer RA hat, bekommt der andere es meistens NICHT.\n\nGene allein machen keine Krankheit.",
    },
  },

  // ─── Step 6: Rauchen ───
  {
    stepId: "ra-def-s2-06",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Faktor 2: Rauchen — der staerkste Risikofaktor",
      body: "Rauchen erhoeht das RA-Risiko um das 2-3-fache UND verschlechtert den Krankheitsverlauf.\n\nWarum? Rauchen veraendert Proteine in der Lunge durch einen Prozess namens **Citrullinierung**: Die Aminosaeure Arginin wird zu Citrullin umgewandelt. Diese veraenderten Proteine erkennt das Immunsystem als fremd — und bildet Antikoerper dagegen (Anti-CCP).\n\n**Mehmet raucht seit 25 Jahren (20 Pack-Years).** Das ist bei seiner Erkrankung besonders problematisch.",
      fallbezug: "Mehmet ist Raucher — das verschlechtert seine Prognose.",
      glossarBegriffe: ["Citrullinierung", "Anti-CCP"],
    },
    contentB1: {
      title: "Rauchen macht Rheuma schlimmer",
      body: "Rauchen ist der groesste Risikofaktor fuer RA. Raucher bekommen 2 bis 3 Mal oefter RA.\n\nDas Rauchen veraendert Eiweisse in der Lunge. Das Immunsystem erkennt diese Eiweisse als fremd und greift sie an. So beginnt die Krankheit.\n\nMehmet raucht seit 25 Jahren. Das ist ein grosses Problem.",
    },
  },

  // ─── Step 7: MC Verstaendnis — Risikofaktoren ───
  {
    stepId: "ra-def-s2-07",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Mehmets Risikofaktoren",
      body: "Mehmet raucht seit 25 Jahren. Sein Vater hatte 'etwas mit den Gelenken'. Er hat einen stressigen Beruf als selbststaendiger Fliesenleger.",
      fallbezug: "Welche Faktoren spielen bei Mehmet zusammen?",
    },
    question: {
      fragetext:
        "Welche Aussage zu Mehmets Risikofaktoren ist am TREFFENDSTEN?",
      optionen: [
        {
          text: "Rauchen ist der einzige Grund fuer seine RA",
          isCorrect: false,
          explanation:
            "Falsch. Rauchen ist der staerkste MODIFIZIERBARE Risikofaktor, aber RA ist multifaktoriell.",
        },
        {
          text: "Die Gene seines Vaters sind der einzige Grund",
          isCorrect: false,
          explanation:
            "Falsch. Genetik erklaert nur ca. 50% des Risikos. Umweltfaktoren sind genauso wichtig.",
        },
        {
          text: "Gene, Rauchen und Stress spielen zusammen — Rauchen ist dabei der staerkste modifizierbare Faktor",
          isCorrect: true,
          explanation:
            "Genau! RA ist multifaktoriell. Bei Mehmet kommen genetische Veranlagung (Vater), Rauchen (25 Jahre) und Stress (Selbststaendigkeit) zusammen. Am Rauchen kann er etwas aendern.",
        },
        {
          text: "RA hat keine bekannten Risikofaktoren",
          isCorrect: false,
          explanation:
            "Falsch! Es gibt mehrere bekannte Risikofaktoren: HLA-DR4, Rauchen, Geschlecht, Stress, Adipositas.",
        },
      ],
    },
  },

  // ─── Step 8: Categorize Risikofaktoren ───
  {
    stepId: "ra-def-s2-08",
    phase: 3,
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q4"],
    contentC1: {
      title: "Ordne die Risikofaktoren",
      body: "Es gibt verschiedene Arten von Risikofaktoren. Manche kann man aendern, manche nicht.",
    },
    question: {
      fragetext:
        "Ordne jeden Risikofaktor der richtigen Kategorie zu:",
      categories: [
        { name: "Genetisch (nicht aenderbar)" },
        { name: "Modifizierbar (aenderbar)" },
        { name: "Hormonell" },
      ],
      categoryItems: [
        { text: "HLA-DR4 (Shared Epitope)", correctCategory: 0 },
        { text: "Rauchen", correctCategory: 1 },
        { text: "Oestrogene / Menopause", correctCategory: 2 },
        { text: "Chronischer Stress", correctCategory: 1 },
        { text: "Adipositas (Uebergewicht)", correctCategory: 1 },
        { text: "Infektionen (EBV, Parodontitis)", correctCategory: 1 },
      ],
    },
  },

  // ─── Step 9: Story — Rauchen ───
  {
    stepId: "ra-def-s2-09",
    phase: 3,
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1"],
    contentC1: {
      title: "Die schwierige Frage",
      body: "Die Aerztin erklaert Mehmet die Diagnose. Dann kommt die Frage nach dem Rauchen.",
      fallbezug:
        "Fatma schaut Mehmet mit einem vielsagenden Blick an. Sie hat ihm schon oft gesagt er soll aufhoeren.",
    },
    contentB1: {
      title: "Die Aerztin fragt nach dem Rauchen",
      body: "Die Aerztin sagt: 'Herr Demir, Sie haben Rheumatoide Arthritis.' Dann fragt sie: 'Rauchen Sie?'",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Mehmet fragt: 'Muss ich aufhoeren zu rauchen?'",
      dialogPhases: [
        {
          context:
            "Die Aerztin sagt: 'Rauchen ist der staerkste veraenderbare Risikofaktor fuer RA. Es verschlechtert den Verlauf und reduziert die Wirksamkeit der Medikamente.' Mehmet schweigt. Dann: 'Muss ich aufhoeren? Ehrlich?'",
          options: [
            {
              text: "Ja, ein Rauchstopp wuerde Ihre Behandlung deutlich unterstuetzen. Es gibt Hilfsangebote — soll ich Ihnen Informationen mitgeben?",
              patientResponse:
                "Informationen... ja okay. Versprechen kann ich nichts. Ich rauch seit ich 18 bin.",
              score: 3,
              feedback:
                "Sehr gut! Ehrlich, aber nicht verurteilend. Du bietest konkrete Hilfe an statt nur zu belehren.",
            },
            {
              text: "Sie MUESSEN sofort aufhoeren! Sonst wird alles schlimmer!",
              patientResponse:
                "Ja ja, das hoer ich seit 20 Jahren. Von meiner Frau, vom Arzt, von allen...",
              score: 1,
              feedback:
                "Zu autoritaer. Rauchentwoehnung funktioniert nur mit Motivation, nicht mit Druck. Verstaendnis zeigen, Hilfe anbieten.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 10: Pathomechanismus Teil 1 ───
  {
    stepId: "ra-def-s2-10",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Was passiert im Gelenk? (Teil 1)",
      body: "Der Pathomechanismus der RA laeuft in 4 Phasen ab:\n\n**Phase 1 — Initiation:** Ein unbekannter Trigger aktiviert T-Zellen. Sie erkennen koerpereigene Proteine faelschlich als fremd (Verlust der Selbsttoleranz).\n\n**Phase 2 — Entzuendung:** Die aktivierten T-Zellen stimulieren B-Zellen und Makrophagen. Diese setzen entzuendungsfoerdernde Zytokine frei — vor allem TNF-alpha, IL-1 und IL-6.",
      glossarBegriffe: ["Zytokin", "TNF-alpha"],
    },
    contentB1: {
      title: "Was passiert im Gelenk? (Teil 1)",
      body: "Die Krankheit laeuft in 4 Schritten ab:\n\n**Schritt 1:** Ein Ausloeser aktiviert die Immunzellen. Die Immunzellen machen einen Fehler: Sie denken, das eigene Gelenk ist ein Feind.\n\n**Schritt 2:** Die Immunzellen schicken Botenstoffe aus. Diese Botenstoffe heissen Zytokine. Der wichtigste heisst TNF-alpha. Er macht Entzuendung.",
    },
  },

  // ─── Step 11: Pathomechanismus Teil 2 ───
  {
    stepId: "ra-def-s2-11",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Was passiert im Gelenk? (Teil 2)",
      body: "**Phase 3 — Synovitis:** Die Synovialmembran (Gelenkinnenhaut) entzuendet sich massiv. Sie schwillt an und bildet den **Pannus** — ein aggressives Granulationsgewebe das in den Gelenkspalt waechst.\n\n**Phase 4 — Destruktion:** Der Pannus zerstoert Knorpel und Knochen durch Enzyme (Metalloproteinasen) und Osteoklasten. Dieser Schaden ist **irreversibel** — zerstoerter Knorpel waechst nicht nach.\n\n**Ohne Behandlung:** 70% der Patienten haben innerhalb von 2 Jahren irreversible Gelenkschaeden.",
      glossarBegriffe: ["Pannus", "Synovitis"],
    },
    contentB1: {
      title: "Was passiert im Gelenk? (Teil 2)",
      body: "**Schritt 3:** Die Gelenkinnenhaut entzuendet sich. Es waechst ein krankes Gewebe namens PANNUS. Der Pannus ist wie ein Unkraut im Gelenk.\n\n**Schritt 4:** Der Pannus frisst den Knorpel und den Knochen auf. Das ist NICHT mehr rueckgaengig zu machen.\n\nOhne Behandlung: Bei 70 von 100 Patienten sind die Gelenke nach 2 Jahren dauerhaft kaputt.",
    },
  },

  // ─── Step 12: Sorting — 4 Phasen ───
  {
    stepId: "ra-def-s2-12",
    phase: 3,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Bringe die 4 Phasen in die richtige Reihenfolge",
      body: "Was passiert zuerst, was zuletzt?",
    },
    question: {
      fragetext:
        "Sortiere die 4 Phasen des RA-Pathomechanismus in die richtige Reihenfolge:",
      sortItems: [
        "T-Zellen werden aktiviert (erkennen Eigenes als fremd)",
        "Zytokine (TNF-alpha, IL-6) werden freigesetzt",
        "Synovialmembran entzuendet sich, Pannus bildet sich",
        "Pannus zerstoert Knorpel und Knochen (irreversibel)",
      ],
    },
  },

  // ─── Step 13: MC TNF-alpha ───
  {
    stepId: "ra-def-s2-13",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Das zentrale Zytokin",
      body: "Welches Zytokin ist das ZENTRALE Entzuendungszytokin bei RA — und gleichzeitig Ziel wichtiger Medikamente?",
    },
    question: {
      fragetext: "Welches Zytokin ist bei RA am wichtigsten?",
      optionen: [
        {
          text: "IL-10",
          isCorrect: false,
          explanation:
            "Falsch. IL-10 ist sogar entzuendungshemmend. Bei RA sind die entzuendungsfoerdernden Zytokine das Problem.",
        },
        {
          text: "TNF-alpha (Tumornekrosefaktor alpha)",
          isCorrect: true,
          explanation:
            "Richtig! TNF-alpha ist das zentrale Entzuendungszytokin bei RA. Deshalb gibt es TNF-alpha-Blocker als Therapie (z.B. Adalimumab, Infliximab). Mehr dazu in LE 05.",
        },
        {
          text: "Interferon-gamma",
          isCorrect: false,
          explanation:
            "Falsch. Interferon-gamma spielt bei Virusinfektionen eine groessere Rolle als bei RA.",
        },
        {
          text: "Histamin",
          isCorrect: false,
          explanation:
            "Falsch. Histamin ist wichtig bei Allergien, nicht bei RA. Die RA-Entzuendung laeuft ueber Zytokine wie TNF-alpha und IL-6.",
        },
      ],
    },
  },

  // ─── Step 14: Branching — Beratung ───
  {
    stepId: "ra-def-s2-14",
    phase: 4,
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1"],
    contentC1: {
      title: "Mehmets Frage",
      body: "Mehmet hat die Diagnose verstanden. Jetzt will er wissen: 'Kann ich was tun damit es nicht schlimmer wird?'",
      fallbezug:
        "Mehmet ist bereit zuzuhoeren. Ein wichtiger Moment fuer die Beratung.",
    },
    contentB1: {
      title: "Was kann Mehmet tun?",
      body: "Mehmet fragt: 'Kann ich selbst etwas tun?'",
    },
    question: {
      fragetext:
        "Mehmet fragt: 'Kann ich was tun damit es nicht schlimmer wird?' Was raetst du ihm?",
      branchingOptions: [
        {
          text: "Rauchen aufhoeren ist das Wichtigste — der Rest kommt vom Arzt",
          feedback:
            "Teilweise richtig. Rauchstopp ist wichtig, aber es gibt MEHR was Mehmet tun kann: frueher Therapiebeginn, Stressreduktion, regelmaessige Bewegung. Nicht alles auf eine Karte setzen.",
          isCorrect: false,
        },
        {
          text: "Rauchen aufhoeren + fruehe Therapie starten + Stress reduzieren + Bewegung",
          feedback:
            "Perfekt! Alle modifizierbaren Faktoren angesprochen. Rauchen aufhoeren reduziert das Risiko, fruehe Therapie nutzt das Window of Opportunity (12 Wochen!), Stressreduktion und Bewegung unterstuetzen den Verlauf.",
          isCorrect: true,
        },
        {
          text: "Da kann man leider nichts machen, das ist genetisch bedingt",
          feedback:
            "Falsch und gefaehrlich! Genetik erklaert nur 50% des Risikos. Es gibt VIEL was Mehmet tun kann. Mit dieser Aussage nimmt man dem Patienten die Motivation zur Verhaltensaenderung.",
          isCorrect: false,
        },
      ],
    },
  },

  // ─── Step 15: Fillin Pannus ───
  {
    stepId: "ra-def-s2-15",
    phase: 4,
    stepType: "fillin",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Fuelle die Luecken",
      body: "Setze die richtigen Begriffe ein.",
    },
    question: {
      fragetext: "Ergaenze den Satz mit dem richtigen Begriff:",
      fillin: {
        sentence:
          "Der _____ ist ein aggressives Gewebe, das in der entzuendeten _____ waechst und den _____ zerstoert.",
        options: ["Pannus", "Synovialmembran", "Knorpel"],
        correctIndex: 0,
      },
    },
  },

  // ─── Step 16: MC Window of Opportunity ───
  {
    stepId: "ra-def-s2-16",
    phase: 4,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Warum ist Fruehe Therapie so wichtig?",
      body: "Es gibt ein Zeitfenster in dem die Therapie besonders wirksam ist. Man nennt es 'Window of Opportunity'.",
      glossarBegriffe: ["Window of Opportunity"],
    },
    question: {
      fragetext:
        "Warum ist eine fruehe Therapie innerhalb von 12 Wochen nach Symptombeginn so wichtig?",
      optionen: [
        {
          text: "Weil der Pannus sich nach 12 Wochen zurueckbildet",
          isCorrect: false,
          explanation:
            "Falsch. Der Pannus bildet sich nicht von selbst zurueck. Genau deshalb ist fruehe Therapie so wichtig.",
        },
        {
          text: "Weil Gelenkzerstoerung irreversibel ist und das Window of Opportunity nur ca. 12 Wochen offen ist",
          isCorrect: true,
          explanation:
            "Richtig! Zerstoerter Knorpel waechst nicht nach. In den ersten 12 Wochen spricht die Krankheit am besten auf Therapie an. Jede Woche Verzoegerung kann bleibende Schaeden bedeuten.",
        },
        {
          text: "Weil RA nach 12 Wochen von selbst heilt",
          isCorrect: false,
          explanation:
            "Falsch. RA ist chronisch — sie heilt nicht von selbst. Ohne Therapie schreitet sie fort.",
        },
        {
          text: "Weil Medikamente nach 12 Wochen nicht mehr wirken",
          isCorrect: false,
          explanation:
            "Falsch. Medikamente wirken auch spaeter, aber in den ersten 12 Wochen ist die Chance auf Remission am groessten.",
        },
      ],
    },
  },

  // ─── Step 17: Freetext Pathomechanismus ───
  {
    stepId: "ra-def-s2-17",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Beschreibe den Pathomechanismus",
      body: "Du hast gerade die 4 Phasen gelernt. Jetzt beschreibe sie in eigenen Worten.",
    },
    contentB1: {
      title: "Beschreibe die 4 Schritte",
      body: "Du hast gerade die 4 Schritte gelernt. Erklaere sie jetzt selbst.",
    },
    question: {
      fragetext:
        "Beschreibe in eigenen Worten die 4 Phasen des Entzuendungsprozesses bei RA — von der Ausloesung bis zur Gelenkzerstoerung.",
      musterantwort:
        "Phase 1 (Initiation): Ein Trigger aktiviert T-Zellen, die koerpereigene Proteine als fremd erkennen. Phase 2 (Entzuendung): T-Zellen aktivieren B-Zellen und Makrophagen, die Entzuendungsbotenstoffe freisetzen (TNF-alpha, IL-6). Phase 3 (Synovitis): Die Gelenkinnenhaut entzuendet sich und bildet den Pannus. Phase 4 (Destruktion): Der Pannus dringt in den Gelenkspalt ein und zerstoert Knorpel und Knochen irreversibel.",
      bewertungskriterien: [
        "Alle 4 Phasen in richtiger Reihenfolge genannt",
        "Rolle der Zytokine (TNF-alpha oder IL-6) erwaehnt",
        "Pannus als Schluessel der Gelenkzerstoerung benannt",
      ],
      satzanfaengeB1: [
        "Zuerst passiert Folgendes: ...",
        "Dann setzen die Immunzellen... frei",
        "Am Ende zerstoert der Pannus...",
      ],
    },
  },

  // ─── Step 18: Memory Vertiefung ───
  {
    stepId: "ra-def-s2-18",
    phase: 5,
    stepType: "memory",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Memory — Fachbegriffe festigen",
      body: "Finde die zusammengehoerenden Paare aus Session 2.",
    },
    question: {
      fragetext: "Finde die 6 Paare:",
      memoryPairs: [
        { a: "TNF-alpha", b: "Entzuendungszytokin" },
        { a: "Pannus", b: "Zerstoert Knorpel" },
        { a: "HLA-DR4", b: "Genetischer Risikofaktor" },
        { a: "Citrullinierung", b: "Proteinveraenderung" },
        { a: "Synovitis", b: "Gelenkentzuendung" },
        { a: "Anti-CCP", b: "Spezifischer Antikoerper" },
      ],
    },
  },

  // ─── Step 18b: Interleaving — LE 02 Anatomie ───
  {
    stepId: "ra-def-s2-18b",
    phase: 5,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [],
    contentC1: {
      title: "Interleaving: Anatomie",
      body: "Kurzer Rueckblick auf LE 02 — Anatomie des synovialen Gelenks.",
    },
    question: {
      fragetext:
        "Welche Struktur schuetzt die Gelenkflaechen vor Reibung und wird bei RA durch den Pannus zerstoert?",
      optionen: [
        {
          text: "Gelenkkapsel",
          isCorrect: false,
          explanation:
            "Falsch. Die Gelenkkapsel umschliesst das Gelenk, aber sie schuetzt nicht direkt vor Reibung. Der Pannus zerstoert vor allem den Gelenkknorpel.",
        },
        {
          text: "Gelenkknorpel (hyaliner Knorpel)",
          isCorrect: true,
          explanation:
            "Richtig! Der hyaline Gelenkknorpel schuetzt die Knochenenden vor Reibung. Bei RA zerstoert der Pannus genau diesen Knorpel — und er waechst nicht nach.",
        },
        {
          text: "Sehnen",
          isCorrect: false,
          explanation:
            "Falsch. Sehnen verbinden Muskeln mit Knochen, schuetzen aber nicht vor Reibung. Der Knorpel ist die richtige Antwort.",
        },
        {
          text: "Periost (Knochenhaut)",
          isCorrect: false,
          explanation:
            "Falsch. Das Periost umhuellt den Knochen ausserhalb des Gelenks. Im Gelenk schuetzt der Knorpel.",
        },
      ],
    },
  },

  // ─── Step 19: Timer Speed-Review ───
  {
    stepId: "ra-def-s2-19",
    phase: 5,
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3"],
    contentC1: {
      title: "Speed-Review S1+S2!",
      body: "6 Fragen, 15 Sekunden. Mix aus beiden Sessions. Plus 1 Frage aus einer anderen LE!",
    },
    question: {
      fragetext: "Beantworte so schnell du kannst!",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Staerkster MODIFIZIERBARER Risikofaktor fuer RA?",
          options: ["HLA-DR4", "Rauchen", "Alter", "Geschlecht"],
          correctIndex: 1,
        },
        {
          question: "Phase 3 des Pathomechanismus = ?",
          options: [
            "Destruktion",
            "Initiation",
            "Synovitis + Pannus",
            "Zytokinfreisetzung",
          ],
          correctIndex: 2,
        },
        {
          question: "RA oder Arthrose: Pannusbildung?",
          options: ["RA", "Arthrose", "Beide", "Keine"],
          correctIndex: 0,
        },
        {
          question: "Welches Zytokin ist bei RA ZENTRAL?",
          options: ["Histamin", "TNF-alpha", "Insulin", "Adrenalin"],
          correctIndex: 1,
        },
        {
          question: "Was bedeutet 'symmetrisch' bei RA?",
          options: [
            "Nur rechts",
            "Beide Seiten betroffen",
            "Nur Haende",
            "Abwechselnd",
          ],
          correctIndex: 1,
        },
        {
          question:
            "Interleaving: Welche Zellen gehoeren zum Immunsystem?",
          options: [
            "Erythrozyten",
            "Leukozyten",
            "Thrombozyten",
            "Hepatozyten",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ─── Step 20: Ausblick S3 ───
  {
    stepId: "ra-def-s2-20",
    phase: 6,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    contentC1: {
      title: "Was kommt in Session 3?",
      body: "Du weisst jetzt WAS RA ist und WARUM sie entsteht. In der naechsten Session triffst du eine neue Patientin:\n\n**Elisabeth Richter, 67 Jahre.** Sie lebt seit 8 Jahren mit RA. Ihr MTX wirkt nicht mehr. Ihre Fingergelenke sind sichtbar deformiert.\n\nWas hat der Pannus in 8 Jahren angerichtet? Was bedeutet das fuer die Pflege? Das klaeren wir in Session 3.",
    },
    contentB1: {
      title: "Naechste Session",
      body: "Du weisst jetzt, was RA ist und warum man sie bekommt.\n\nIn der naechsten Session lernst du eine neue Patientin kennen: Frau Richter. Sie hat seit 8 Jahren RA. Ihre Finger sind verformt. Was ist passiert?",
    },
  },

  // ─── Step 21: Checkpoint ───
  {
    stepId: "ra-def-s2-21",
    phase: 6,
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    contentC1: {
      title: "Session 2 — Das hast du gelernt",
      body: "5 Kernaussagen dieser Session:\n\n1. RA-Ursache = multifaktoriell (Gene + Umwelt + Trigger)\n2. Rauchen = staerkster modifizierbarer Risikofaktor (foerdert Citrullinierung)\n3. 4 Phasen: Initiation → Entzuendung (Zytokine) → Synovitis (Pannus) → Destruktion\n4. Pannus = aggressives Gewebe das Knorpel und Knochen irreversibel zerstoert\n5. Window of Opportunity = fruehe Therapie innerhalb von 12 Wochen",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "5 wichtige Dinge:\n\n1. RA hat mehrere Ursachen: Gene + Umwelt\n2. Rauchen ist der groesste Risikofaktor\n3. Im Gelenk passieren 4 Schritte\n4. Der Pannus zerstoert den Knorpel\n5. Fruehe Therapie ist sehr wichtig (12 Wochen!)",
    },
    question: {
      fragetext: "Wie sicher fuehlst du dich jetzt?",
      optionen: [
        {
          text: "Sehr sicher — ich kann den Pathomechanismus erklaeren",
          isCorrect: false,
          explanation: "Klasse! In Session 3 wendest du dein Wissen auf einen neuen Fall an.",
        },
        {
          text: "Ziemlich sicher — die 4 Phasen sitzen, Risikofaktoren auch",
          isCorrect: false,
          explanation: "Gut! Session 3 wiederholt die Kernbegriffe nochmal im neuen Kontext.",
        },
        {
          text: "Noch unsicher — brauche mehr Uebung",
          isCorrect: false,
          explanation: "Kein Problem! Session 3 baut alles nochmal auf. Du schaffst das!",
        },
      ],
    },
  },
];

// Lektion 04: RA — Symptome, Formen, Diagnose
// CE 05 — Block B: Rheumatoide Arthritis
// Session 2: "Wie wird diagnostiziert?" (Diagnostik-Algorithmus, Labor, Bildgebung)
// Bloom B2-B4, ~30 Min, 21 Steps
// Patient: Mehmet Demir, 43, Fliesenleger

import type { ContentStep } from "../_types";

export const STEPS_S2: ContentStep[] = [
  // =============================================================
  // Phase 1 (Min 0-5): ENTDECKER — Brilliant-Prinzip (Röntgenbild)
  // =============================================================

  // ─── Step 1: Hotspot — Röntgenbild der Hand ───
  {
    stepId: "s2-01-hotspot-roentgen",
    phase: 1,
    stepType: "hotspot",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024"],
    xpValue: 20,
    imageUrl: "/images/ra-hand-xray.svg",
    imageAlt: "Röntgenbild einer Hand mit RA-typischen Veränderungen",
    contentC1: {
      title: "Was siehst du auf diesem Röntgenbild?",
      body: "Mehmets Rheumatologe hat ein Röntgenbild seiner rechten Hand anfertigen lassen.",
      fallbezug:
        "Mehmet sitzt im Wartezimmer und dreht nervös das Röntgenbild in der Hand. 'Sieht das schlimm aus?'",
      glossarBegriffe: ["Erosion", "Gelenkspaltverschmälerung"],
    },
    contentB1: {
      title: "Was siehst du auf dem Röntgenbild?",
      body: "Der Arzt hat ein Röntgenbild von Mehmets Hand gemacht.",
      fallbezug: "Mehmet fragt: 'Ist das schlimm?'",
    },
    question: {
      fragetext: "Tippe auf die auffälligen Bereiche im Röntgenbild.",
      hotspot: {
        imageUrl: "/images/ra-hand-xray.svg",
        imageAlt: "Röntgenbild einer Hand mit RA-Veränderungen",
        instruction:
          "Tippe auf alle Stellen, die dir auffällig oder verändert vorkommen.",
        zones: [
          {
            id: "erosion-mcp",
            x: 45,
            y: 55,
            radius: 8,
            label: "Erosionen an den MCP-Gelenken",
          },
          {
            id: "gelenkspalt",
            x: 50,
            y: 48,
            radius: 7,
            label: "Gelenkspaltverschmälerung",
          },
          {
            id: "weichteil",
            x: 40,
            y: 60,
            radius: 9,
            label: "Weichteilschwellung periarticulär",
          },
          {
            id: "usuren",
            x: 55,
            y: 52,
            radius: 7,
            label: "Usuren (kleine Knochendefekte)",
          },
        ],
      },
    },
  },

  // ─── Step 2: Text — Bildgebung bei RA ───
  {
    stepId: "s2-02-text-bildgebung",
    phase: 1,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
      "AMBOSS",
    ],
    xpValue: 5,
    contentC1: {
      title: "Bildgebung bei RA: Was Röntgen zeigt",
      body: "RA-typische Veränderungen im Röntgenbild:\n\nErosionen: Kleine Knochendefekte an den Gelenkrändern\nGelenkspaltverschmälerung: Dünnerer Knorpel durch Pannus-Zerstörung\nWeichteilschwellung: Geschwollene Gelenke bei aktiver Entzündung\nUsuren: Tiefe Knochendefekte bei fortgeschrittener RA\n\nWichtig: Röntgen zeigt nur Spätschäden. Frühveränderungen brauchen MRT oder Sonografie.",
      glossarBegriffe: [
        "Erosion",
        "Usur",
        "Gelenkspaltverschmälerung",
        "Pannus",
      ],
    },
    contentB1: {
      title: "Was zeigt das Röntgenbild?",
      body: "Das Röntgenbild zeigt Schäden:\n\nErosionen: Kleine Löcher im Knochen\nDünner Gelenkspalt: Weniger Knorpel\nSchwellung: Gelenke geschwollen durch Entzündung\nUsuren: Tiefe Löcher im Knochen (weit fortgeschritten)\n\nWichtig: Röntgen zeigt nur SPÄTE Schäden. Für frühe Zeichen braucht man MRT oder Ultraschall.",
    },
    wusstestDuDas:
      "Im MRT können RA-Veränderungen bereits 6-12 Monate BEVOR sie im Röntgen sichtbar werden, nachgewiesen werden. Deshalb ist die Sonografie heute oft das erste Bildgebungsverfahren.",
  },

  // ─── Step 3: MC — Brilliant-Frage: Warum reicht Röntgen nicht? ───
  {
    stepId: "s2-03-mc-roentgen-grenzen",
    phase: 1,
    stepType: "mc",
    modus: "challenge",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024", "AMBOSS"],
    xpValue: 10,
    contentC1: {
      title: "Grenzen der Röntgendiagnostik",
      body: "Röntgen zeigt Erosionen und Gelenkspaltverschmälerung — aber erst bei bereits eingetretenen Schäden. Frühzeichen wie Synovitis, Erguss oder Knochenmarködem bleiben unsichtbar. Deshalb braucht die RA-Diagnostik ergänzende Verfahren.",
      fallbezug:
        "Mehmets Rheumatologe hat neben dem Röntgen noch eine Ultraschalluntersuchung angeordnet. Warum wohl?",
    },
    contentB1: {
      title: "Grenzen vom Röntgen",
      body: "Röntgen zeigt die Knochen gut. Aber frühe Entzündungen in den Gelenken sieht man im Röntgen nicht. Dafür braucht man andere Untersuchungen wie Ultraschall.",
    },
    question: {
      fragetext:
        "Warum reicht ein Röntgenbild allein NICHT aus, um eine RA sicher und früh zu diagnostizieren?",
      optionen: [
        {
          text: "Röntgen zeigt erst Spätschäden — Frühveränderungen wie Synovitis und Erguss werden übersehen",
          isCorrect: true,
          explanation:
            "Genau! Röntgen zeigt Knochenveränderungen erst bei bereits eingetretenen Schäden. Frühzeichen wie Synovitis oder Knochenmarködem sind nur im MRT oder Ultraschall sichtbar.",
        },
        {
          text: "Röntgen ist zu teuer für die Routine-Diagnostik",
          isCorrect: false,
          explanation:
            "Röntgen ist günstig und weit verbreitet. Das Problem ist die eingeschränkte Sensitivität für Frühveränderungen.",
        },
        {
          text: "Röntgen kann keine Gelenke darstellen",
          isCorrect: false,
          explanation:
            "Röntgen stellt knöcherne Strukturen gut dar. Weichteilveränderungen und frühe Entzündungen sieht man besser im Ultraschall oder MRT.",
        },
        {
          text: "Röntgen ist gefährlich wegen der Strahlenbelastung",
          isCorrect: false,
          explanation:
            "Strahlenbelastung ist ein Faktor, aber nicht der Hauptgrund. Röntgen zeigt keine Frühveränderungen. Sonografie ist strahlenfrei UND zeigt Frühzeichen.",
        },
      ],
    },
  },

  // =============================================================
  // Phase 2 (Min 5-10): ENTDECKER — Die 5 Säulen + Kriterien
  // =============================================================

  // ─── Step 4: Reveal — Die 5 Säulen der RA-Diagnostik ───
  {
    stepId: "s2-04-reveal-diagnostik-saeulen",
    phase: 2,
    stepType: "reveal",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
      "ACR/EULAR 2010",
    ],
    xpValue: 20,
    contentC1: {
      title: "Die 5 Säulen der RA-Diagnostik",
      body: "RA wird nicht durch einen einzelnen Test diagnostiziert. Es braucht 5 Bausteine.",
      fallbezug:
        "Bei Mehmet wurden alle 5 Bausteine untersucht.",
    },
    contentB1: {
      title: "5 Untersuchungen bei RA",
      body: "RA erkennt man nicht mit nur einer Untersuchung. Es braucht 5 verschiedene Bausteine.",
    },
    question: {
      fragetext: "Decke alle 5 Säulen auf:",
      reveal: {
        instruction: "Tippe der Reihe nach auf jede Karte.",
        revealMode: "sequential",
        cards: [
          {
            id: "anamnese",
            label: "Säule 1",
            icon: "📋",
            content:
              "Anamnese: Gezielte Befragung — Wann? Wo? Wie lange? Morgensteifigkeit? Familienanamnese? Die Anamnese steuert die weitere Diagnostik.",
            contentB1:
              "Anamnese: Der Arzt fragt: Wo tut es weh? Seit wann? Sind die Gelenke morgens steif? Hat jemand in der Familie Rheuma? Die Antworten helfen bei der Diagnose.",
          },
          {
            id: "klinisch",
            label: "Säule 2",
            icon: "✋",
            content:
              "Klinische Untersuchung: Inspektion (Schwellung, Rötung, Deformitäten) und Palpation (Druckschmerz, Überwärmung, Erguss). Gaenslen-Handgriff: Querdruck auf MCP-Gelenke — Schmerz = positiv.",
            contentB1:
              "Körperliche Untersuchung: Der Arzt schaut die Gelenke an und tastet sie ab. Sind sie geschwollen? Warm? Schmerzhaft? Der Gaenslen-Handgriff: Der Arzt drückt die Fingergrundgelenke zusammen. Wenn es wehtut, ist das ein Zeichen für RA.",
          },
          {
            id: "labor",
            label: "Säule 3",
            icon: "🧪",
            content:
              "Labordiagnostik: RF und Anti-CCP (Autoantikörper gegen eigenes Gewebe) plus CRP und BSG (Entzündungsaktivität).",
            contentB1:
              "Blutuntersuchung: Der Arzt nimmt Blut ab. Er sucht nach Rheumafaktor (RF) und Anti-CCP. Das sind Antikörper, die zeigen, dass das Immunsystem die eigenen Gelenke angreift. CRP und BSG zeigen, wie stark die Entzündung ist.",
          },
          {
            id: "bildgebung",
            label: "Säule 4",
            icon: "🔍",
            content:
              "Bildgebung: Sonografie (Ultraschall) als Erstverfahren — zeigt Synovitis, Erguss, Erosionen in Echtzeit. Röntgen für Baseline-Dokumentation. MRT bei unklaren Fällen — erkennt Frühveränderungen wie Knochenmarködem.",
            contentB1:
              "Bildgebung: Ultraschall ist die erste Untersuchung — er zeigt Entzündung und Schwellung sofort. Röntgen zeigt Knochenschäden. MRT zeigt auch sehr frühe Veränderungen, die man sonst nicht sieht.",
          },
          {
            id: "klassifikation",
            label: "Säule 5",
            icon: "🧮",
            content:
              "ACR/EULAR-Klassifikation (2010): 4 Domänen — Gelenkbefall, Serologie, Akute-Phase, Symptomdauer. Ab 6 von 10 Punkten gilt RA als gesichert.",
            contentB1:
              "Punktesystem (ACR/EULAR 2010): Es gibt 4 Bereiche: Welche Gelenke betroffen sind, Blutwerte, Entzündungswerte und wie lange die Symptome dauern. Ab 6 von 10 Punkten ist die Diagnose RA sicher.",
          },
        ],
      },
    },
  },

  // ─── Step 5: Text — ACR/EULAR-Kriterien 2010 ───
  {
    stepId: "s2-05-text-acr-eular",
    phase: 2,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: ["ACR/EULAR 2010", "Herold Innere Medizin 2024"],
    xpValue: 5,
    contentC1: {
      title: "ACR/EULAR-Klassifikationskriterien 2010",
      body: 'Das Punktesystem im Detail:\n\nA. Gelenkbefall (0-5 Punkte)\n- 1 großes Gelenk: 0 Pkt\n- 2-10 große Gelenke: 1 Pkt\n- 1-3 kleine Gelenke: 2 Pkt\n- 4-10 kleine Gelenke: 3 Pkt\n- >10 Gelenke (mind. 1 klein): 5 Pkt\n\nB. Serologie (0-3 Punkte)\n- RF UND Anti-CCP negativ: 0 Pkt\n- RF ODER Anti-CCP niedrig positiv: 2 Pkt\n- RF ODER Anti-CCP hoch positiv: 3 Pkt\n\nC. Akute-Phase-Reaktanten (0-1 Punkt)\n- CRP UND BSG normal: 0 Pkt\n- CRP ODER BSG erhöht: 1 Pkt\n\nD. Symptomdauer (0-1 Punkt)\n- <6 Wochen: 0 Pkt\n- ≥6 Wochen: 1 Pkt\n\n≥6 Punkte = Gesicherte RA\n\nVoraussetzung: Mindestens 1 Gelenk mit definitiver Synovitis, die nicht besser durch eine andere Erkrankung erklärbar ist.',
      glossarBegriffe: ["ACR/EULAR-Kriterien", "Synovitis"],
    },
    contentB1: {
      title: "Das Punktesystem für RA",
      body: "So wird RA festgestellt — ein Punktesystem:\n\nGelenke (0-5 Punkte):\nJe mehr kleine Gelenke betroffen sind, desto mehr Punkte. Über 10 Gelenke = 5 Punkte.\n\nBlutwerte (0-3 Punkte):\nRF und Anti-CCP im Blut. Je höher die Werte, desto mehr Punkte.\n\nEntzündung (0-1 Punkt):\nCRP oder BSG erhöht = 1 Punkt.\n\nDauer (0-1 Punkt):\nSymptome seit 6 Wochen oder länger = 1 Punkt.\n\nAb 6 Punkten = RA ist sicher.",
    },
    wusstestDuDas:
      "Die ACR/EULAR-Kriterien 2010 haben die älteren ACR-Kriterien von 1987 abgelöst, weil die alten erst späte Stadien erfassten. Die neuen Kriterien ermöglichen eine Diagnose im Frühstadium — bevor irreversible Gelenkschäden entstehen.",
  },

  // ─── Step 6: Comparison — Laborwerte RF vs. Anti-CCP vs. CRP vs. BSG ───
  {
    stepId: "s2-06-comparison-labor",
    phase: 2,
    stepType: "comparison",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "AMBOSS",
      "S3-Leitlinie RA DGRh 2024",
    ],
    xpValue: 15,
    contentC1: {
      title: "Laborwerte im Vergleich: RF vs. Anti-CCP vs. CRP vs. BSG",
      body: "Vier wichtige Laborwerte bei RA — jeder misst etwas anderes.",
      glossarBegriffe: [
        "Rheumafaktor",
        "Anti-CCP",
        "CRP",
        "Blutsenkungsgeschwindigkeit",
      ],
    },
    contentB1: {
      title: "4 wichtige Blutwerte bei RA",
      body: "Bei RA werden 4 Werte im Blut gemessen. Jeder Wert zeigt etwas anderes.",
    },
    question: {
      fragetext: "Vergleiche die 4 Laborwerte:",
      comparison: {
        instruction:
          "Scrolle durch die Tabelle und vergleiche die 4 wichtigsten RA-Laborwerte.",
        columns: [
          { label: "Rheumafaktor (RF)", icon: "🧪" },
          { label: "Anti-CCP", icon: "🧪" },
          { label: "CRP", icon: "💓" },
          { label: "BSG", icon: "💓" },
        ],
        rows: [
          {
            criterion: "Was misst es?",
            values: [
              "Autoantikörper gegen Fc-Fragment von IgG",
              "Autoantikörper gegen citrullinierte Proteine",
              "Akute-Phase-Protein (Entzündungsmarker)",
              "Blutsenkungsgeschwindigkeit (unspezifischer Entzündungsmarker)",
            ],
            valuesB1: [
              "Ein Antikörper gegen eigene Eiweisse",
              "Ein Antikörper gegen veränderte Eiweisse",
              "Zeigt aktuelle Entzündung an",
              "Zeigt Entzündung an (aber langsamer als CRP)",
            ],
          },
          {
            criterion: "Sensitivität bei RA",
            values: ["~65-70%", "~65-70%", "Nicht spezifisch für RA", "Nicht spezifisch für RA"],
            valuesB1: [
              "65-70 von 100 RA-Patienten sind positiv",
              "65-70 von 100 RA-Patienten sind positiv",
              "Zeigt jede Entzündung, nicht nur RA",
              "Zeigt jede Entzündung, nicht nur RA",
            ],
          },
          {
            criterion: "Spezifität für RA",
            values: [
              "~80% — auch bei anderen Erkrankungen positiv",
              "~95% — hochspezifisch für RA!",
              "Niedrig — steigt bei jeder Entzündung",
              "Niedrig — steigt bei jeder Entzündung",
            ],
            valuesB1: [
              "80% — manchmal auch bei anderen Krankheiten positiv",
              "95% — fast nur bei RA positiv!",
              "Nicht speziell für RA",
              "Nicht speziell für RA",
            ],
            highlight: 1,
          },
          {
            criterion: "Normwert",
            values: [
              "<14 IU/ml (laborabhängig)",
              "Negativ (<20 U/ml)",
              "<5 mg/L",
              "Altersabhängig: Frauen <(Alter/2) mm/h, Männer <(Alter/2) mm/h",
            ],
            valuesB1: [
              "Unter 14 (normal = negativ)",
              "Negativ (normal = unter 20)",
              "Unter 5 mg/L",
              "Abhängig vom Alter",
            ],
          },
          {
            criterion: "RA-typisches Ergebnis",
            values: [
              "Positiv bei ~70% der RA-Patienten (seropositiv)",
              "Positiv — bestätigt RA mit hoher Sicherheit",
              "Erhöht (oft >10 mg/L im Schub)",
              "Erhöht (oft >30 mm/h)",
            ],
            valuesB1: [
              "Positiv bei 70 von 100 RA-Patienten",
              "Wenn positiv: sehr wahrscheinlich RA",
              "Höher als 5 (zeigt aktive Entzündung)",
              "Höher als normal (zeigt Entzündung)",
            ],
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 3 (Min 10-17): SORTIERSTATION + STORY — Praxis & Dialog
  // =============================================================

  // ─── Step 7: Sorting — Diagnostik-Schritte ───
  {
    stepId: "s2-07-sorting-diagnostik-schritte",
    phase: 3,
    stepType: "sorting",
    modus: "sortierstation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024", "Herold Innere Medizin 2024"],
    xpValue: 15,
    contentC1: {
      title: "Der RA-Diagnostik-Ablauf",
      body: "Die RA-Diagnostik folgt einem festen Ablauf — vom Erstkontakt bis zur gesicherten Diagnose.",
    },
    contentB1: {
      title: "Der Ablauf bei RA-Diagnostik",
      body: "Die Untersuchung bei RA hat eine feste Reihenfolge.",
    },
    question: {
      fragetext:
        "Sortiere die Diagnostik-Schritte in die richtige Reihenfolge:",
      sortItems: [
        "Anamnese: Symptome erfragen (Morgensteifigkeit, Gelenkschmerzen, Dauer)",
        "Inspektion und Palpation: Gelenke anschauen und abtasten (Gaenslen-Griff)",
        "Labordiagnostik: RF, Anti-CCP, CRP, BSG bestimmen",
        "Bildgebung: Sonografie und/oder Röntgen der Hände und Füße",
        "ACR/EULAR-Klassifikation: Punkte berechnen (≥6 = RA gesichert)",
        "Diagnosestellung und Therapieeinleitung (Window of Opportunity!)",
      ],
    },
  },

  // ─── Step 8: Dialog — Mehmet beim Rheumatologen ───
  {
    stepId: "s2-08-dialog-rheumatologe",
    phase: 3,
    stepType: "dialog",
    modus: "story",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: [
      "S3-Leitlinie RA DGRh 2024",
      "Herold Innere Medizin 2024",
      "AMBOSS",
    ],
    xpValue: 30,
    contentC1: {
      title: "Mehmet beim Rheumatologen — Die Befundbesprechung",
      body: "Die Laborergebnisse und die Bildgebung liegen vor. Mehmets Rheumatologe bespricht die Befunde.",
      fallbezug:
        "Mehmet sitzt steif auf dem Stuhl. Fatma hält seine Hand. Er hat Angst vor dem Ergebnis.",
    },
    contentB1: {
      title: "Mehmets Ergebnisse",
      body: "Der Arzt hat Mehmets Blut untersucht und Bilder gemacht. Jetzt erklärt er die Ergebnisse.",
      fallbezug: "Mehmet hat Angst vor dem Ergebnis. Seine Frau Fatma ist bei ihm.",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Begleite Mehmet durch die Befundbesprechung.",
      dialogPhases: [
        {
          context:
            "Der Rheumatologe sagt: 'Herr Demir, Ihr Rheumafaktor ist positiv, Ihr Anti-CCP-Wert deutlich erhöht, und der CRP-Wert liegt bei 18 mg/L. Zusammen mit der Sonografie zeigt das eine aktive Entzündung in mehreren Gelenken.' Mehmet wird blass: 'Das klingt nicht gut. Was heißt das genau?'",
          contextB1:
            "Der Arzt sagt: 'Herr Demir, Ihre Blutwerte zeigen: Ihr Immunsystem greift Ihre Gelenke an. Die Entzündung ist aktiv.' Mehmet wird blass: 'Was heißt das?'",
          options: [
            {
              text: "Die Werte zeigen, dass Ihr Immunsystem Antikörper gegen Ihre eigenen Gelenke bildet. Der erhöhte CRP-Wert bestätigt eine aktive Entzündung. Zusammen mit der Bildgebung können wir sicher sagen: Es ist eine Rheumatoide Arthritis.",
              textB1:
                "Die Werte zeigen: Ihr Körper greift die eigenen Gelenke an. Die Entzündung ist gerade aktiv. Sie haben Rheumatoide Arthritis.",
              patientResponse:
                "Rheuma... Mein Vater hatte das auch. Heißt das, meine Hände werden so wie seine? Er konnte am Ende kaum noch greifen.",
              patientResponseB1:
                "Rheuma... Mein Vater hatte das auch. Werden meine Hände auch so schlimm?",
              score: 3,
              feedback:
                "Sehr gut! Du verbindest Laborwerte mit klinischer Bedeutung und kommunizierst die Diagnose sachlich.",
              feedbackB1:
                "Gut! Du erklärst die Blutwerte einfach und gibst eine klare Diagnose.",
            },
            {
              text: "Na ja, Ihre Werte sind ein bisschen auffällig. Warten wir mal ab.",
              textB1: "Ihre Werte sind etwas anders als normal. Wir warten ab.",
              patientResponse:
                "Abwarten? Aber meine Hände tun jeden Morgen weh! Wie lange soll ich noch warten?",
              patientResponseB1:
                "Abwarten? Aber es tut doch jeden Tag weh!",
              score: 1,
              feedback:
                "Zu vage! Bei positiver Serologie und klinischer Synovitis ist Abwarten gefährlich — das Window of Opportunity schließt sich.",
              feedbackB1:
                "Zu unklar! Mehmet hat eindeutige Ergebnisse. Abwarten ist bei RA gefährlich, weil die Gelenke weiter kaputtgehen.",
            },
          ],
        },
        {
          context:
            "Der Rheumatologe erklärt: 'Anders als bei Ihrem Vater können wir heute viel früher behandeln. Es gibt neue Medikamente.' Mehmet fragt dich als Pflegekraft: 'Können Sie mir das nochmal erklären? Was ist denn dieser Anti-CCP?'",
          contextB1:
            "Der Arzt sagt, heute gibt es bessere Medikamente als früher. Mehmet fragt dich: 'Was ist denn dieser Anti-CCP?'",
          options: [
            {
              text: "Anti-CCP sind Antikörper, die Ihr Körper gegen veränderte eigene Eiweiße bildet. Dass dieser Wert bei Ihnen hoch positiv ist, bestätigt die RA-Diagnose mit über 95% Sicherheit. Das ist eigentlich eine gute Nachricht — weil wir jetzt wissen, was es ist und gezielt behandeln können.",
              textB1:
                "Anti-CCP sind Stoffe in Ihrem Blut. Sie zeigen: Ihr Immunsystem greift die eigenen Gelenke an. Dieser Wert ist bei Ihnen hoch. Das bestätigt die Diagnose RA. Jetzt können wir gezielt behandeln.",
              patientResponse:
                "Also 95% sicher... Okay. Und die gute Nachricht ist, dass man es behandeln kann? Das macht mir ein bisschen Hoffnung.",
              patientResponseB1:
                "Also es ist sicher, dass ich Rheuma habe. Aber man kann was tun?",
              score: 3,
              feedback:
                "Exzellent! Du erklärst Anti-CCP patientenverständlich und rahmst die Diagnose positiv.",
              feedbackB1:
                "Sehr gut! Du erklärst einfach und machst Mehmet Hoffnung, dass man die Krankheit behandeln kann.",
            },
            {
              text: "Das ist ein komplizierter Laborwert. Fragen Sie am besten den Arzt nochmal.",
              textB1: "Das ist ein Laborwert. Fragen Sie den Arzt.",
              patientResponse:
                "Ich frage ja SIE, weil der Arzt so schnell erklärt hat...",
              patientResponseB1:
                "Ich verstehe den Arzt nicht so gut. Können SIE es mir erklären?",
              score: 1,
              feedback:
                "Patientenedukation ist eine Kernaufgabe der Pflege. RF und Anti-CCP sind RA-Standarddiagnostik — die musst du erklären können.",
              feedbackB1:
                "Als Pflegekraft musst du Patienten die wichtigsten Werte erklären können. Anti-CCP ist ein sehr wichtiger Wert bei RA.",
            },
          ],
        },
        {
          context:
            "Der Rheumatologe zeigt Mehmet die Ultraschallbilder: 'Hier sehen Sie die Entzündung in Ihren Fingergrundgelenken. Der rote Bereich zeigt die vermehrte Durchblutung — das ist die aktive Synovitis.' Mehmet schaut betroffen: 'Und jetzt?'",
          contextB1:
            "Der Arzt zeigt das Ultraschallbild: 'Hier sieht man die Entzündung in Ihren Fingern.' Mehmet fragt: 'Und was passiert jetzt?'",
          options: [
            {
              text: "Jetzt ist das Wichtigste: So schnell wie möglich mit der Behandlung starten. Es gibt ein Zeitfenster — je früher wir beginnen, desto besser stehen Ihre Chancen, dass die Gelenke nicht weiter geschädigt werden.",
              textB1:
                "Jetzt muss die Behandlung schnell starten. Je früher, desto besser. Dann bleiben Ihre Gelenke besser geschützt.",
              patientResponse:
                "Schnell... Okay. Wie schnell? Morgen? Nächste Woche?",
              patientResponseB1: "Wie schnell muss das gehen?",
              score: 3,
              feedback:
                "Perfekt! Du kommunizierst die Dringlichkeit ohne Panik.",
              feedbackB1:
                "Gut! Du sagst, dass es schnell gehen muss, ohne Angst zu machen.",
            },
            {
              text: "Machen Sie sich keine Sorgen, das wird schon.",
              textB1: "Keine Sorge, das wird schon.",
              patientResponse:
                "Alle sagen 'wird schon'... Aber mein Vater hat das auch gesagt und jetzt kann er seine Enkel nicht mehr auf den Arm nehmen.",
              patientResponseB1:
                "Das hat mein Vater auch gesagt. Jetzt kann er nichts mehr greifen.",
              score: 1,
              feedback:
                "Leere Floskeln helfen nicht! Mehmet braucht ehrliche Kommunikation. Früher Therapiebeginn = bessere Prognose — das muss er wissen.",
              feedbackB1:
                "Zu vage! Mehmet braucht eine ehrliche Antwort mit Hoffnung, nicht leere Worte.",
            },
          ],
        },
        {
          context:
            "Fatma meldet sich: 'Ich habe gelesen, dass man bei Rheuma auch auf die Ernährung achten soll. Stimmt das?' Mehmet ergänzt: 'Und ich hab gehört, Kälte soll helfen.'",
          contextB1:
            "Fatma fragt: 'Soll man bei Rheuma auf das Essen achten?' Mehmet fragt: 'Hilft Kälte?'",
          speaker: "Fatma",
          options: [
            {
              text: "Gute Fragen! Ernährung kann die Entzündung beeinflussen — Omega-3-Fettsäuren aus Fisch wirken entzündungshemmend. Und ob Kälte oder Wärme hilft, hängt vom Stadium ab: Im akuten Schub hilft Kälte, in ruhigen Phasen eher Wärme. Das besprechen wir ausführlich in der Patientenschulung.",
              textB1:
                "Gute Fragen! Fisch mit Omega-3 ist gut gegen Entzündung. Kälte hilft wenn die Gelenke gerade entzündet sind. Wärme hilft wenn es ruhiger ist. Das lernen Sie noch genauer.",
              patientResponse:
                "Also Fisch essen und bei Schub kühlen. Das kann ich mir merken.",
              patientResponseB1:
                "Fisch essen und kühlen wenn es weh tut. Das mache ich.",
              score: 3,
              feedback:
                "Hervorragend! Beide Fragen evidenzbasiert beantwortet mit Differenzierung Kälte vs. Wärme je nach Phase.",
              feedbackB1:
                "Super! Du beantwortest beide Fragen und erklärst, wann Kälte und wann Wärme hilft.",
            },
            {
              text: "Das sind Hausmittel, die bringen bei Rheuma nichts.",
              textB1: "Hausmittel helfen nicht bei Rheuma.",
              patientResponse:
                "Also nur Tabletten? Ich will aber auch selbst was tun können!",
              patientResponseB1:
                "Also kann ich gar nichts selbst machen?",
              score: 1,
              feedback:
                "Falsch! Omega-3-Fettsäuren haben nachgewiesene antiinflammatorische Effekte, Kryotherapie steht in den Leitlinien. Nicht-medikamentöse Maßnahmen stärken die Selbstwirksamkeit.",
              feedbackB1:
                "Falsch! Ernährung und Kälte/Wärme sind wissenschaftlich belegt. Patienten wollen auch selbst etwas tun — das ist wichtig für die Therapie.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 9: Timeline — Mehmets Diagnostik-Weg ───
  {
    stepId: "s2-09-timeline-diagnostik-weg",
    phase: 3,
    stepType: "timeline",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024"],
    xpValue: 15,
    contentC1: {
      title: "Mehmets Diagnostik-Weg",
      body: "Vom ersten Symptom bis zur gesicherten Diagnose — 8 Wochen, viele Stationen.",
      fallbezug:
        "8 Wochen ist Durchschnitt — viele Patienten warten deutlich länger.",
    },
    contentB1: {
      title: "Mehmets Weg zur Diagnose",
      body: "So lief die Untersuchung bei Mehmet ab — von der ersten Beschwerde bis zur Diagnose.",
    },
    question: {
      fragetext: "Verfolge Mehmets Diagnostik-Weg:",
      timeline: {
        instruction:
          "Tippe auf jede Station, um Mehmets Erfahrungen zu lesen.",
        events: [
          {
            id: "hausarzt",
            time: "Woche 1",
            title: "Hausarzt",
            description:
              "Mehmet geht zum Hausarzt wegen Morgensteifigkeit und geschwollener Finger. Der Hausarzt nimmt Blut ab (CRP: 14 mg/L, BSG: 28 mm/h) und überweist zum Rheumatologen. Verdachtsdiagnose: V.a. rheumatische Erkrankung.",
            descriptionB1:
              "Mehmet geht zum Hausarzt. Seine Finger sind morgens steif und geschwollen. Der Arzt nimmt Blut ab. Die Entzündungswerte sind erhöht. Er schickt Mehmet zum Spezialisten.",
            icon: "🩺",
          },
          {
            id: "ueberweisung",
            time: "Woche 2-3",
            title: "Warten auf Termin",
            description:
              "Mehmet wartet 2 Wochen auf den Termin beim Rheumatologen. In dieser Zeit wird die Morgensteifigkeit schlimmer — jetzt über 60 Minuten. Er kann morgens kaum noch die Kaffeetasse halten.",
            descriptionB1:
              "Mehmet wartet 2 Wochen auf den Termin beim Rheuma-Arzt. Die Steifigkeit wird schlimmer. Morgens kann er die Tasse nicht mehr halten.",
            icon: "⏰",
            highlight: true,
          },
          {
            id: "rheumatologe",
            time: "Woche 4",
            title: "Rheumatologe — Ersttermin",
            description:
              "Anamnese: Morgensteifigkeit >60 Min, symmetrisch MCP+PIP geschwollen. Gaenslen-Handgriff positiv beidseits. Gezielte Blutabnahme: RF, Anti-CCP, CRP, BSG, Differentialblutbild. Sonografie beider Hände und Füße.",
            descriptionB1:
              "Der Rheuma-Arzt untersucht Mehmets Hände. Er fragt nach den Symptomen. Er drückt die Fingergelenke zusammen — es tut weh (Gaenslen-Griff). Er nimmt Blut ab und macht Ultraschall.",
            icon: "🔍",
          },
          {
            id: "befund",
            time: "Woche 5",
            title: "Befundbesprechung",
            description:
              "Ergebnisse: RF positiv (48 IU/ml), Anti-CCP hoch positiv (215 U/ml), CRP 18 mg/L, BSG 34 mm/h. Sonografie: Synovitis in MCP 2-4 beidseits, Erguss PIP 3 links. Röntgen: noch keine Erosionen. ACR/EULAR-Score: 8/10.",
            descriptionB1:
              "Die Ergebnisse sind da: Rheumafaktor positiv. Anti-CCP sehr hoch. Entzündungswerte erhöht. Im Ultraschall sieht man Entzündung in den Fingergelenken. Ergebnis: 8 von 10 Punkten = RA ist sicher.",
            icon: "📋",
            highlight: true,
          },
          {
            id: "diagnose",
            time: "Woche 5",
            title: "Diagnose und Therapiestart",
            description:
              "Diagnose: Seropositive Rheumatoide Arthritis (RF+, Anti-CCP+). DAS28-CRP: 4,8 (moderate Aktivität). Therapiestart: Methotrexat 15mg/Woche + Folsäure + kurzfristig Prednisolon. Nächster Termin in 4 Wochen zur Verlaufskontrolle.",
            descriptionB1:
              "Diagnose: Rheumatoide Arthritis. Die Krankheit ist mäßig aktiv. Mehmet bekommt Medikamente: Methotrexat (1x pro Woche) und kurzfristig Cortison. In 4 Wochen kommt er wieder.",
            icon: "💊",
          },
        ],
      },
    },
  },

  // ─── Step 10: Crossword — Diagnostik-Begriffe ───
  {
    stepId: "s2-10-crossword-diagnostik",
    phase: 3,
    stepType: "crossword",
    modus: "puzzle",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: ["Herold Innere Medizin 2024", "AMBOSS"],
    xpValue: 20,
    contentC1: {
      title: "Kreuzworträtsel: Diagnostik-Begriffe",
      body: "6 wichtige Begriffe aus der RA-Diagnostik.",
    },
    contentB1: {
      title: "Kreuzworträtsel: Begriffe aus der Diagnostik",
      body: "6 wichtige Wörter aus der Diagnostik.",
    },
    question: {
      fragetext: "Löse das Kreuzworträtsel:",
      crosswordWords: [
        {
          word: "EROSION",
          clue: "Kleiner Knochendefekt am Gelenkrand, sichtbar im Röntgen",
        },
        {
          word: "ANTIKOERPER",
          clue: "RF und Anti-CCP sind solche Abwehr-Eiweiße — bei RA gegen den eigenen Körper gerichtet",
        },
        {
          word: "SYNOVIA",
          clue: "Die Gelenkflüssigkeit, die bei RA vermehrt produziert wird (Erguss)",
        },
        {
          word: "RHEUMAFAKTOR",
          clue: "Autoantikörper mit ~70% Sensitivität und ~80% Spezifität für RA",
        },
        {
          word: "SONOGRAFIE",
          clue: "Bildgebungsverfahren mit Ultraschall — zeigt Synovitis und Erguss ohne Strahlung",
        },
        {
          word: "PALPATION",
          clue: "Untersuchung durch Abtasten — z.B. bei Überwärmung und Schwellung der Gelenke",
        },
      ],
    },
  },

  // ─── Step 11: Slider — ACR/EULAR Score ───
  {
    stepId: "s2-11-slider-acr-score",
    phase: 3,
    stepType: "slider",
    modus: "challenge",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: ["ACR/EULAR 2010"],
    xpValue: 10,
    contentC1: {
      title: "ACR/EULAR-Klassifikationskriterien",
      body: "Die ACR/EULAR-Kriterien bewerten: Gelenkbeteiligung (0-5), Serologie (0-3), Akute-Phase (0-1), Symptomdauer (0-1). Maximal 10 Punkte.",
    },
    contentB1: {
      title: "Das RA-Punkte-System",
      body: "Ein Punkte-System für die RA-Diagnose: Gelenke, Blutwerte, Entzündung und Dauer der Beschwerden. Insgesamt 10 Punkte möglich.",
    },
    question: {
      fragetext:
        "Stelle den Regler ein: Ab welchem ACR/EULAR-Score gilt RA als gesichert?",
      slider: {
        instruction:
          "Ziehe den Regler auf den richtigen Wert. Maximal 10 Punkte möglich.",
        unit: "Punkte",
        min: 0,
        max: 10,
        step: 1,
        correctValue: 6,
        tolerance: 0,
        explanation:
          "Ab ≥6 von 10 Punkten gilt die RA-Diagnose als gesichert nach den ACR/EULAR-Klassifikationskriterien 2010. Mehmet erreichte 8 Punkte — seine Diagnose ist eindeutig.",
      },
    },
  },

  // =============================================================
  // Phase 4 (Min 17-23): PUZZLE + SORTIERSTATION — Vertiefung
  // =============================================================

  // ─── Step 12: Highlight — Fehler im Arztbrief ───
  {
    stepId: "s2-12-highlight-arztbrief",
    phase: 4,
    stepType: "highlight",
    modus: "puzzle",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "AMBOSS",
      "ACR/EULAR 2010",
    ],
    xpValue: 20,
    contentC1: {
      title: "Fehler im Arztbrief finden",
      body: "In diesem Arztbrief stecken 4 fachliche Fehler.",
      fallbezug:
        "Du liest den Arztbrief eines Kollegen zur Qualitätssicherung.",
    },
    contentB1: {
      title: "Finde die Fehler im Arztbrief",
      body: "In diesem Brief sind 4 Fehler versteckt. Kannst du sie alle finden?",
    },
    question: {
      fragetext: "Tippe auf die fehlerhaften Stellen:",
      highlightSegments: [
        {
          text: "Patient Mehmet Demir, 43 Jahre, stellt sich vor mit symmetrischer Schwellung der MCP-Gelenke beidseits und Morgensteifigkeit von über 60 Minuten.",
          isError: false,
        },
        {
          text: " Der Rheumafaktor ist mit einer Spezifität von 99% der wichtigste diagnostische Marker.",
          isError: true,
          reason:
            "Falsch! Der Rheumafaktor hat nur ~80% Spezifität. Anti-CCP hat ~95% Spezifität und ist der spezifischere Marker. RF ist NICHT 99% spezifisch!",
        },
        {
          text: " Der CRP-Normwert liegt bei <15 mg/L.",
          isError: true,
          reason:
            "Falsch! Der CRP-Normwert liegt bei <5 mg/L, nicht bei <15 mg/L. 15 mg/L wäre bereits deutlich erhöht und ein Zeichen aktiver Entzündung.",
        },
        {
          text: " Die Sonografie zeigt eine aktive Synovitis in den betroffenen Gelenken.",
          isError: false,
        },
        {
          text: " Ein negativer Anti-CCP-Wert schließt eine RA sicher aus.",
          isError: true,
          reason:
            "Falsch! Ca. 30% der RA-Patienten sind Anti-CCP-negativ (seronegative RA). Ein negativer Wert schließt RA NICHT aus! Die Diagnose basiert auf dem Gesamtbild.",
        },
        {
          text: " Die ACR/EULAR-Kriterien 2010 erfordern mindestens 8 von 10 Punkten für die Diagnose.",
          isError: true,
          reason:
            "Falsch! Es sind ≥6 von 10 Punkten, nicht 8. Ab 6 Punkten gilt die RA-Diagnose als gesichert. Mehmet hatte 8 Punkte, aber 6 hätten bereits gereicht.",
        },
      ],
    },
  },

  // ─── Step 13: Confidence — Diagnostik-Aussagen bewerten ───
  {
    stepId: "s2-13-confidence-diagnostik",
    phase: 4,
    stepType: "confidence",
    modus: "challenge",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
      "AMBOSS",
    ],
    xpValue: 15,
    contentC1: {
      title: "Wie sicher bist du? Diagnostik-Aussagen",
      body: "Stimmt die Aussage? Wie sicher bist du dir? Richtig + sicher = mehr Punkte.",
    },
    contentB1: {
      title: "Stimmt das? Wie sicher bist du?",
      body: "Lies jede Aussage. Stimmt sie oder nicht? Sage auch, wie sicher du dir bist.",
    },
    question: {
      fragetext: "Bewerte jede Aussage und deine Sicherheit:",
      confidenceCards: [
        {
          statement:
            "Anti-CCP hat eine höhere Spezifität für RA als der Rheumafaktor.",
          isTrue: true,
          explanation:
            "Anti-CCP: ~95% Spezifität vs. RF: ~80%. Anti-CCP ist der spezifischere Marker.",
        },
        {
          statement:
            "Ein negativer Rheumafaktor schließt eine RA sicher aus.",
          isTrue: false,
          explanation:
            "Ca. 30% der RA-Patienten sind RF-negativ (seronegative RA). Ein negativer RF schließt RA nicht aus.",
        },
        {
          statement:
            "Die BSG steigt bei RA-Schüben an und zeigt die Entzündungsaktivität.",
          isTrue: true,
          explanation:
            "BSG ist ein unspezifischer Entzündungsmarker, der bei RA-Schüben ansteigt. Reagiert langsamer als CRP.",
        },
        {
          statement:
            "Für die ACR/EULAR-Klassifikation 2010 ist ein positiver Röntgenbefund zwingend erforderlich.",
          isTrue: false,
          explanation:
            "Die ACR/EULAR-Kriterien bewerten Gelenkbefall, Serologie, Akute-Phase und Symptomdauer. Röntgen ist kein Kriterium im Score.",
        },
      ],
    },
  },

  // ─── Step 14: FlipCard — Laborwerte-Vokabeln ───
  {
    stepId: "s2-14-flipcard-labor",
    phase: 4,
    stepType: "flipcard",
    modus: "puzzle",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.2",
    quellen: ["Herold Innere Medizin 2024", "AMBOSS"],
    xpValue: 15,
    contentC1: {
      title: "Laborwerte-Vokabeln: Flip die Karten!",
      body: "6 wichtige Laborparameter bei RA — mit Normwerten und klinischer Bedeutung.",
    },
    contentB1: {
      title: "Laborwerte lernen — Karten umdrehen!",
      body: "6 wichtige Blutwerte bei RA. Diese Werte musst du kennen.",
    },
    question: {
      fragetext: "Tippe auf jede Karte, um sie umzudrehen:",
      flipcard: {
        instruction: "Tippe auf eine Karte, um die Rückseite zu sehen.",
        cards: [
          {
            front: "CRP",
            back: "C-reaktives Protein\nNormwert: <5 mg/L\nSteigt bei Entzündung innerhalb von 6-8 Stunden. Schnellster Entzündungsmarker. Bei Mehmet: 18 mg/L (deutlich erhöht).",
            backB1:
              "C-reaktives Protein\nNormal: unter 5 mg/L\nZeigt Entzündung schnell an. Bei Mehmet: 18 (zu hoch).",
            category: "Entzündungsmarker",
          },
          {
            front: "BSG",
            back: "Blutsenkungsgeschwindigkeit\nNormwert: altersabhängig (Faustregel: Alter/2 mm/h)\nSteigt langsamer als CRP, bleibt länger erhöht. Unspezifisch — steigt bei jeder Entzündung.",
            backB1:
              "Blutsenkungsgeschwindigkeit\nNormal: abhängig vom Alter\nZeigt Entzündung an, aber langsamer als CRP.",
            category: "Entzündungsmarker",
          },
          {
            front: "RF",
            back: "Rheumafaktor\nNormwert: <14 IU/ml (laborabhängig)\nAutoantikörper gegen IgG. Sensitivität ~70%, Spezifität ~80%. Positiv bei 70% der RA-Patienten, ABER auch bei Hepatitis C, Sjögren und sogar bei 5% Gesunder.",
            backB1:
              "Rheumafaktor\nNormal: negativ (unter 14)\nEin Antikörper, der bei 70 von 100 RA-Patienten positiv ist. Kann aber auch bei anderen Krankheiten positiv sein.",
            category: "Autoantikörper",
          },
          {
            front: "Anti-CCP",
            back: "Anti-CCP (Anti-citrulliniertes Peptid)\nNormwert: negativ (<20 U/ml)\nSpezifität ~95% — der spezifischste RA-Marker! Kann Jahre VOR Krankheitsbeginn positiv sein. Bei Mehmet: 215 U/ml (hoch positiv).",
            backB1:
              "Anti-CCP-Antikörper\nNormal: negativ (unter 20)\nFast nur bei RA positiv (95% sicher). Kann schon positiv sein, BEVOR Symptome anfangen. Bei Mehmet: 215 (sehr hoch).",
            category: "Autoantikörper",
          },
          {
            front: "ANA",
            back: "Antinukleäre Antikörper\nNormwert: negativ (Titer <1:80)\nAutoantikörper gegen Zellkerne. Bei RA manchmal niedrig positiv. Hauptsächlich wichtig bei Lupus (SLE) und anderen Kollagenosen. Dient der Differentialdiagnose.",
            backB1:
              "Antinukleäre Antikörper\nNormal: negativ\nAutoantikörper gegen Zellkerne. Bei RA manchmal leicht positiv. Wichtiger bei Lupus. Hilft zu unterscheiden: Ist es RA oder eine andere Krankheit?",
            category: "Differentialdiagnose",
          },
          {
            front: "HLA-B27",
            back: "HLA-B27 (Gen-Marker)\nKein Normwert — positiv oder negativ.\nBei RA in der Regel NEGATIV. Typisch für Spondyloarthritiden (Morbus Bechterew). Wird bestimmt, um RA von SpA abzugrenzen.",
            backB1:
              "HLA-B27 (Gen-Test)\nPositiv oder negativ.\nBei RA meistens NEGATIV. Positiv bei Morbus Bechterew (Wirbelsäulen-Rheuma). Hilft zu unterscheiden, welche Rheuma-Art es ist.",
            category: "Differentialdiagnose",
          },
        ],
        shuffled: true,
      },
    },
  },

  // ─── Step 15: Categorize — RA-typisch vs. RA-untypisch ───
  {
    stepId: "s2-15-categorize-befunde",
    phase: 4,
    stepType: "categorize",
    modus: "sortierstation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
      "AMBOSS",
    ],
    xpValue: 15,
    contentC1: {
      title: "Befunde sortieren: RA-typisch vs. RA-untypisch",
      body: "Nicht jeder Gelenkbefund spricht für RA — manche passen eher zu Arthrose oder anderen Erkrankungen.",
    },
    contentB1: {
      title: "Was passt zu RA, was nicht?",
      body: "Manche Beschwerden sprechen für RA, andere eher für Arthrose.",
    },
    question: {
      fragetext: "Ordne jeden Befund der richtigen Kategorie zu:",
      categories: [
        { name: "RA-typisch" },
        { name: "RA-untypisch (eher Arthrose/andere)" },
      ],
      categoryItems: [
        {
          text: "Symmetrischer Befall der MCP- und PIP-Gelenke",
          correctCategory: 0,
        },
        {
          text: "Isolierter Befall der DIP-Gelenke (Fingerspitzen)",
          correctCategory: 1,
        },
        {
          text: "Rheumafaktor und Anti-CCP positiv",
          correctCategory: 0,
        },
        {
          text: "Morgensteifigkeit >60 Minuten",
          correctCategory: 0,
        },
        {
          text: "Asymmetrischer Befall eines Großzehengrundgelenks",
          correctCategory: 1,
        },
        {
          text: "Kurzer Anlaufschmerz (<15 Min), besser in Ruhe",
          correctCategory: 1,
        },
        {
          text: "Fatigue und allgemeines Krankheitsgefühl",
          correctCategory: 0,
        },
        {
          text: "Nur mechanischer Belastungsschmerz, keine Schwellung",
          correctCategory: 1,
        },
      ],
    },
  },

  // ─── Step 16: Cloze — Diagnostik-Algorithmus ───
  {
    stepId: "s2-16-cloze-algorithmus",
    phase: 4,
    stepType: "cloze",
    modus: "puzzle",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "S3-Leitlinie RA DGRh 2024",
      "ACR/EULAR 2010",
      "Herold Innere Medizin 2024",
    ],
    xpValue: 15,
    contentC1: {
      title: "Lückentext: Der Diagnostik-Algorithmus",
      body: "Die RA-Diagnostik folgt einem festen Algorithmus: Labor, Entzündungsmarker, Bildgebung und Klassifikations-Score.",
    },
    contentB1: {
      title: "Lückentext: So wird RA festgestellt",
      body: "Bei Verdacht auf RA macht der Arzt bestimmte Bluttests, misst die Entzündung und macht Ultraschall oder Röntgen. Am Ende zählt er die Punkte zusammen.",
    },
    question: {
      fragetext: "Fülle die Lücken aus:",
      cloze: {
        textWithBlanks:
          "Bei Verdacht auf RA werden {{1}} und {{2}} im Labor bestimmt. Die Entzündungsaktivität misst man mit {{3}} und BSG. Zur Bildgebung wird als erstes eine {{4}} durchgeführt, weil sie Synovitis in Echtzeit zeigt. Ab {{5}} Punkten im ACR/EULAR-Score gilt die RA als gesichert.",
        blanks: [
          {
            id: 1,
            correct: "Rheumafaktor",
            distractors: ["Blutzucker", "Cholesterin", "Hämoglobin"],
          },
          {
            id: 2,
            correct: "Anti-CCP",
            distractors: ["HLA-B27", "ANA", "TSH"],
          },
          {
            id: 3,
            correct: "CRP",
            distractors: ["RF", "Anti-CCP", "Kreatinin"],
          },
          {
            id: 4,
            correct: "Sonografie",
            distractors: ["CT", "PET-Scan", "Szintigrafie"],
          },
          {
            id: 5,
            correct: "6",
            distractors: ["4", "8", "10"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Phase 5 (Min 23-27): PRAXIS-SIM + CHALLENGE — Transfer
  // =============================================================

  // ─── Step 17: Branching — Differentialdiagnose: RA oder Arthrose? ───
  {
    stepId: "s2-17-branching-differentialdiagnose",
    phase: 5,
    stepType: "branching",
    modus: "praxis-sim",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
      "AMBOSS",
    ],
    xpValue: 25,
    contentC1: {
      title: "Differentialdiagnose: RA oder Arthrose?",
      body: "Neue Patientin: Frau Weber, 62 Jahre, Handschmerzen seit 4 Monaten. Sie wurde an eure Abteilung überwiesen. Ihre Symptome:\n\n- Schmerzen in beiden Händen, vor allem morgens\n- Schwellung der Fingerendgelenke (DIP) beidseits\n- Bouchard-Knoten an PIP 3 und 4\n- Morgensteifigkeit ca. 20 Minuten\n- RF negativ, Anti-CCP negativ, CRP 3 mg/L\n- Röntgen: Osteophyten an DIP, kein Gelenkerguss",
      fallbezug:
        "Anders als bei Mehmet: Hier ist nicht alles eindeutig.",
    },
    contentB1: {
      title: "RA oder Arthrose?",
      body: "Neue Patientin: Frau Weber, 62 Jahre. Sie hat Schmerzen in den Händen.\n\nIhre Symptome:\n- Schmerzen an den Fingerendgelenken (DIP)\n- Knoten an den Fingergelenken\n- Morgensteifigkeit nur 20 Minuten\n- Blutwerte: RF negativ, Anti-CCP negativ, CRP normal\n- Röntgen: Knochenanbauten, kein Erguss\n\nWas hat sie?",
    },
    question: {
      fragetext:
        "Welche Diagnose stellst du bei Frau Weber? Achte auf die Details!",
      branchingOptions: [
        {
          text: "Rheumatoide Arthritis — sie hat ja Schmerzen in beiden Händen",
          feedback:
            "Bilateral allein reicht nicht. DIP-Befall, Bouchard-Knoten, kurze Morgensteifigkeit, negative Serologie und Osteophyten sprechen klar für Arthrose.",
          isCorrect: false,
        },
        {
          text: "Fingerpolyarthrose — DIP-Befall, Knoten, kurze Steifigkeit, negative Serologie, normale Entzündungswerte",
          feedback:
            "Exzellent! DIP-Befall, Bouchard-Knoten, kurze Morgensteifigkeit, negative Serologie, Osteophyten — Lehrbuchfall für Fingerpolyarthrose.",
          isCorrect: true,
        },
        {
          text: "Gicht — wegen der Knotenbildung an den Fingergelenken",
          feedback:
            "Gicht betrifft typisch das Großzehengrundgelenk mit akuten Schüben. Frau Webers Knoten sind Bouchard-Knoten (Arthrose), keine Gichttophi.",
          isCorrect: false,
        },
        {
          text: "Psoriasis-Arthritis — wegen der DIP-Beteiligung",
          feedback:
            "PsA kann DIP-Gelenke betreffen, aber Frau Weber hat keine Psoriasis und keine Nageldystrophie. Bouchard-Knoten und Osteophyten sprechen für Arthrose.",
          isCorrect: false,
        },
      ],
    },
  },

  // ─── Step 18: Swipe — Diagnostik-Mythen ───
  {
    stepId: "s2-18-swipe-mythen",
    phase: 5,
    stepType: "swipe",
    modus: "challenge",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "S3-Leitlinie RA DGRh 2024",
      "Herold Innere Medizin 2024",
      "AMBOSS",
    ],
    xpValue: 15,
    contentC1: {
      title: "Diagnostik-Mythen: Stimmt oder stimmt nicht?",
      body: "5 verbreitete Aussagen über RA-Diagnostik — manche stimmen, manche sind gefährliche Irrtümer.",
    },
    contentB1: {
      title: "Stimmt das oder nicht?",
      body: "5 Aussagen über RA-Untersuchungen. Was stimmt und was nicht?",
    },
    question: {
      fragetext: "Stimmt oder stimmt nicht? Wische!",
      swipe: {
        instruction: "Rechts = Stimmt, Links = Stimmt nicht",
        cards: [
          {
            statement:
              "Ein negativer Rheumafaktor schließt eine RA sicher aus.",
            statementB1:
              "Wenn der Rheumafaktor negativ ist, hat man sicher kein Rheuma.",
            isCorrect: false,
            explanation:
              "Ca. 30% der RA-Patienten sind RF-negativ (seronegative RA). Die Diagnose basiert auf dem Gesamtbild.",
            explanationB1:
              "Falsch! 30 von 100 RA-Patienten haben einen negativen Rheumafaktor. Ein negativer Wert bedeutet NICHT, dass man kein Rheuma hat.",
          },
          {
            statement:
              "Sonografie kann RA-Veränderungen früher zeigen als Röntgen.",
            statementB1:
              "Ultraschall zeigt RA-Veränderungen früher als Röntgen.",
            isCorrect: true,
            explanation:
              "Sonografie zeigt Synovitis, Erguss und frühe Erosionen in Echtzeit. Röntgen zeigt erst Spätveränderungen.",
            explanationB1:
              "Richtig! Ultraschall zeigt Entzündung und Schwellung sofort. Im Röntgen sieht man erst Schäden, die schon weiter fortgeschritten sind.",
          },
          {
            statement:
              "Anti-CCP kann bereits Jahre vor dem Auftreten von Symptomen positiv sein.",
            statementB1:
              "Anti-CCP kann schon positiv sein, bevor Symptome anfangen.",
            isCorrect: true,
            explanation:
              "Anti-CCP-Antikörper können bis zu 10 Jahre VOR dem klinischen Ausbruch nachweisbar sein. Die Autoimmunreaktion beginnt lange vor den Symptomen.",
            explanationB1:
              "Richtig! Anti-CCP kann bis zu 10 Jahre VOR den ersten Symptomen im Blut sein. Die Krankheit beginnt im Körper, bevor man etwas merkt.",
          },
          {
            statement:
              "Für die RA-Diagnose reicht ein einziger Blutwert aus.",
            statementB1:
              "Man braucht nur einen Blutwert, um RA zu diagnostizieren.",
            isCorrect: false,
            explanation:
              "RA wird nie durch einen einzelnen Wert diagnostiziert. Es braucht Anamnese, Untersuchung, Labor, Bildgebung und ACR/EULAR-Scoring.",
            explanationB1:
              "Falsch! Ein einziger Blutwert reicht nicht. Man braucht: Befragung, Untersuchung, mehrere Blutwerte, Bildgebung UND den Punkte-Score.",
          },
          {
            statement:
              "Der DAS28-Score dient der Verlaufskontrolle bei RA.",
            statementB1:
              "Der DAS28-Score zeigt, wie aktiv die RA gerade ist.",
            isCorrect: true,
            explanation:
              "DAS28 berechnet die Krankheitsaktivität anhand von 28 Gelenken, Entzündungswerten und Patienteneinschätzung. <2,6 = Remission, >5,1 = hoch aktiv.",
            explanationB1:
              "Richtig! DAS28 misst, wie aktiv die RA ist. Der Arzt zählt geschwollene Gelenke, Blutwerte und fragt den Patienten. Unter 2,6 = die Krankheit ist ruhig.",
          },
        ],
      },
    },
  },

  // ─── Step 19: Reflection — Warum ist Frühdiagnostik wichtig? ───
  {
    stepId: "s2-19-reflection-fruehdiagnostik",
    phase: 5,
    stepType: "reflection",
    modus: "schreibtisch",
    bloomLevel: 4,
    kompetenzbereich: "KB-V.1",
    quellen: [
      "S3-Leitlinie RA DGRh 2024",
      "Herold Innere Medizin 2024",
    ],
    xpValue: 20,
    contentC1: {
      title: "Warum ist Frühdiagnostik bei RA so wichtig?",
      body: "Mehmet brauchte 8 Wochen bis zur Diagnose. Viele Patienten warten 6-12 Monate oder länger.",
      fallbezug:
        "Mehmets Vater — nach Jahren ohne Behandlung waren seine Hände deformiert.",
    },
    contentB1: {
      title: "Warum muss die Diagnose schnell kommen?",
      body: "Mehmet hat 8 Wochen auf die Diagnose gewartet. Manche Patienten warten viel länger. Was passiert, wenn die Diagnose zu spät kommt?",
    },
    question: {
      fragetext:
        "Erkläre in 3-5 Sätzen: Warum ist Frühdiagnostik bei RA so wichtig? Was können Pflegekräfte dazu beitragen?",
      musterantwort:
        "Frühdiagnostik ist bei RA entscheidend, weil das Window of Opportunity nur etwa 12 Wochen beträgt. In diesem Zeitfenster spricht die Krankheit am besten auf Therapie an, und die Chance auf Remission ist am größten. Ohne frühe Behandlung zerstört der Pannus irreversibel Knorpel und Knochen — wie bei Mehmets Vater. Pflegekräfte können beitragen, indem sie bei Patienten auf Warnzeichen achten (Morgensteifigkeit >60 Min, symmetrische Gelenkschwellung, Fatigue) und frühzeitig auf eine rheumatologische Abklärung hinweisen.",
      bewertungskriterien: [
        "Window of Opportunity (~12 Wochen) erwähnt",
        "Irreversibilität der Gelenkzerstörung als Begründung",
        "Rolle der Pflegekraft bei Früherkennung angesprochen",
      ],
      satzanfaengeB1: [
        "Frühdiagnostik ist wichtig, weil...",
        "Wenn die Diagnose zu spät kommt, dann...",
        "Pflegekräfte können helfen, indem...",
      ],
      reflection: {
        prompt:
          "Erkläre in eigenen Worten, warum Frühdiagnostik bei RA so wichtig ist und welche Rolle Pflegekräfte dabei spielen können.",
        placeholder:
          "Frühdiagnostik ist bei RA wichtig, weil...",
        systemPrompt:
          "Du bist ein Pflege-Didaktik-Tutor. Bewerte die Reflexion zu Frühdiagnostik bei RA. Erwartete Kernpunkte: 1) Window of Opportunity (~12 Wochen), 2) Irreversible Gelenkzerstörung durch Pannus ohne Behandlung, 3) Rolle der Pflege bei Früherkennung (Warnzeichen erkennen, Überweisung anregen). Gib Feedback nach dem Sandwich-Prinzip: Lobe was gut ist, korrigiere Fehlendes, ermutige.",
      },
    },
  },

  // =============================================================
  // Phase 6 (Min 27-30): CHALLENGE + CHECKPOINT — Speed-Review & Ergebnis
  // =============================================================

  // ─── Step 20: Timer — Final-Quiz: Mix S1+S2 + Interleaving ───
  {
    stepId: "s2-20-timer-finalquiz",
    phase: 6,
    stepType: "timer",
    modus: "challenge",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.2",
    quellen: [
      "Herold Innere Medizin 2024",
      "S3-Leitlinie RA DGRh 2024",
      "ACR/EULAR 2010",
      "AMBOSS",
    ],
    xpValue: 20,
    contentC1: {
      title: "Final-Quiz: Mix aus S1 + S2 + Interleaving!",
      body: "6 Fragen in 90 Sekunden — Wissen aus beiden Sessions plus 1 Interleaving-Frage.",
    },
    contentB1: {
      title: "Schnell-Quiz: 6 Fragen, 90 Sekunden!",
      body: "Fragen aus Session 1 und 2 plus eine Interleaving-Frage.",
    },
    question: {
      fragetext: "Beantworte so schnell du kannst!",
      timeLimitSeconds: 90,
      timerQuestions: [
        {
          question:
            "Ab wie vielen Punkten im ACR/EULAR-Score = RA gesichert?",
          options: ["4 Punkte", "6 Punkte", "8 Punkte", "10 Punkte"],
          correctIndex: 1,
        },
        {
          question: "Welcher Laborwert hat die höchste Spezifität für RA?",
          options: ["Rheumafaktor", "CRP", "Anti-CCP", "BSG"],
          correctIndex: 2,
        },
        {
          question:
            "Aus S1: Wie lange dauert die typische Morgensteifigkeit bei RA?",
          options: [
            "<15 Minuten",
            "15-30 Minuten",
            ">60 Minuten",
            "Keine Steifigkeit",
          ],
          correctIndex: 2,
        },
        {
          question:
            "Welches Bildgebungsverfahren zeigt Frühveränderungen am besten?",
          options: [
            "Röntgen",
            "Sonografie/MRT",
            "CT",
            "Szintigrafie",
          ],
          correctIndex: 1,
        },
        {
          question:
            "Aus S1: Welche Gelenke sind bei RA TYPISCH als erste betroffen?",
          options: [
            "DIP (Fingerspitzen)",
            "MCP und PIP (Finger-Grundgelenke)",
            "Hüfte",
            "Knie",
          ],
          correctIndex: 1,
        },
        {
          question:
            "Interleaving (Gicht): Welcher Laborwert ist bei Gicht TYPISCH erhöht?",
          options: ["Anti-CCP", "Rheumafaktor", "Harnsäure", "CRP"],
          correctIndex: 2,
        },
      ],
    },
  },

  // ─── Step 21: Summary — Session 2 Ergebnis ───
  {
    stepId: "s2-21-summary-ergebnis",
    phase: 6,
    stepType: "summary",
    modus: "checkpoint",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    xpValue: 5,
    contentC1: {
      title: "Session 2 — Dein Ergebnis",
      body: "Du hast die RA-Diagnostik durchgearbeitet! Hier sind deine Key-Takeaways:\n\n1. 5 Säulen der RA-Diagnostik: Anamnese → Klinische Untersuchung → Labor → Bildgebung → ACR/EULAR-Klassifikation\n2. Anti-CCP (~95% Spezifität) > RF (~80%) — Anti-CCP ist der spezifischere Marker\n3. Negativer RF schließt RA NICHT aus — 30% der RA-Patienten sind seronegativ\n4. Sonografie zeigt Frühveränderungen — Röntgen erst Spätschäden\n5. ACR/EULAR ≥6 Punkte = RA gesichert — Mehmet hatte 8/10\n6. Window of Opportunity — Frühe Therapie innerhalb von 12 Wochen rettet Gelenke\n\nIn Session 3 geht es um Therapie und Pflege: Wie wird RA behandelt? Was ist deine Rolle als Pflegefachkraft?",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Gut gemacht! Das Wichtigste aus Session 2:\n\n1. RA wird mit 5 Schritten festgestellt: Befragung, Untersuchung, Blut, Bildgebung, Punkte-System\n2. Anti-CCP ist der sicherste Blutwert für RA (95%)\n3. Negativer Rheumafaktor heißt NICHT 'kein Rheuma'\n4. Ultraschall zeigt Entzündung früher als Röntgen\n5. Ab 6 Punkten im Score = RA sicher\n6. Frühe Behandlung ist sehr wichtig (12-Wochen-Fenster)\n\nIn Session 3 lernst du: Wie wird RA behandelt? Was machst du als Pflegekraft?",
    },
    question: {
      fragetext: "Session 2 abgeschlossen!",
      summary: {
        reflexionRueckbezug:
          "Am Anfang konntest du das Röntgenbild nicht einordnen. Jetzt kennst du den Diagnostik-Algorithmus, interpretierst Laborwerte und stellst Differentialdiagnosen.",
        kernaussagen: [
          "5 Säulen der RA-Diagnostik: Anamnese, klinische Untersuchung, Labor, Bildgebung, Klassifikation",
          "Anti-CCP: ~95% Spezifität — spezifischster RA-Marker, kann Jahre vor Symptomen positiv sein",
          "RF-negativ schließt RA NICHT aus — 30% der RA-Patienten sind seronegativ",
          "Sonografie > Röntgen für Früherkennung (Synovitis, Erguss in Echtzeit)",
          "ACR/EULAR 2010: ≥6/10 Punkte = gesicherte RA-Diagnose",
          "Window of Opportunity: Therapiestart innerhalb von 12 Wochen maximiert die Remissionschance",
        ],
      },
    },
  },
];

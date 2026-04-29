// CE-02 Situation Frau M. — Phase 5: Evaluieren
// Steps: 4 · Bloom: B4-B5 (B6 in Reflexion)
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-frau-m-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren",
  titelB1: "Bewerten",
  kontext:
    "Szenen-Sprung. 24 Stunden später, 06:42 Uhr. Frühdienst. Du stehst wieder auf demselben Flur, aber alles ist anders. Das Stationslicht ist hell, die Neonleuchten brummen leise und gleichmäßig, draußen vor den Fenstern dämmert es bläulich, eine Amsel hat irgendwo zu singen begonnen. Es riecht nach frischem Kaffee aus der Stationsküche, nach Toast und nach dem dezent süßen Duft des Pflegelotion-Spenders, den jemand neu aufgefüllt hat. Aus Zimmer 12 kommt das gedämpfte Klappern von Frühstücksgeschirr, Frau Schmidts Lachen, das Geräusch eines Verbandwagens, der über die Türschwelle rollt. Eine Reinigungskraft schiebt einen Wagen mit Mopps vorbei, nickt dir zu. Du hast zu Hause nicht gut geschlafen. Bilder sind dir geblieben — Frau M. am Boden, ihre Hand in deiner, der Satz 'Sind Sie böse?'. Du hast lange in der U-Bahn aus dem Fenster gesehen und überlegt, ob du etwas hättest anders machen können, früher, schneller, ruhiger. Frau Keller steht jetzt neben dir am Stationstresen, hat schon eine Tasse Kaffee in der Hand, ihre Augen sind ruhig, fast warm. 'Komm', sagt sie, 'wir gucken zusammen.' Auf dem Bildschirm liest du die Übergabe der Spätschicht: Zolpidem wurde gegen 09:00 vom Stationsarzt abgesetzt, neuer Eintrag mit Begründung steht im Verlauf. Nachtlicht hat über Nacht gebrannt. Toilettenstuhl wurde einmal um 02:50 genutzt — Frau M. hat geklingelt, die Spätschicht-Schülerin war innerhalb von 90 Sekunden im Zimmer. Vitalzeichen stabil. Schmerz NRS 2 morgens, keine neuen Auffälligkeiten, kein zweiter Sturz. Du gehst mit Frau Keller in Zimmer 14. Die Tür steht halb offen, das Morgenlicht fällt durchs Fenster auf die Bettdecke. Frau M. sitzt aufrecht im Bett, die Brille wieder auf der Nase — irgendjemand hat den verbogenen Bügel zurechtgedrückt — eine Tasse Tee in der Hand, sie lächelt vorsichtig, als sie dich sieht. Ihre Haare sind frisch gekämmt. 'Sie sind die von der Nacht', sagt sie. 'Sie haben geklingelt', sagst du. Sie nickt: 'Ja. Es ging.' Drei Worte, und du spürst, wie etwas Großes in dir aufatmet, ein Knoten in der Brust, der sich löst. Aber Routine ist das nicht. Jetzt brauchst du den klaren Blick zurück: Was von dem, was ihr in der Nacht geplant und durchgeführt habt, hat tatsächlich gewirkt? Was war eher Aktivismus, gut gemeint, aber überflüssig — vielleicht sogar belastend für die Patientin? Und was fehlt noch — Physiotherapie, HCT-Review, Hüftprotektor-Gespräch mit der Tochter, das Entlass-Management? Reflexion ist kein Luxus, sie ist Teil deines Berufs. Frau Keller wartet darauf, dass du das jetzt strukturiert benennst. Und du selbst willst es auch — für die nächste Schicht, für die nächste Frau M., für dich.",
  kontextB1:
    "24 Stunden später. 06:42 Uhr. Frühdienst. Du stehst wieder auf dem Flur. Alles ist anders. Das Licht ist hell. Draußen wird es langsam blau. Eine Amsel singt. Es riecht nach Kaffee und Toast. Du hast zuhause schlecht geschlafen. Du denkst noch an Frau M. — wie sie am Boden lag, wie sie deine Hand hielt. Frau Keller steht neben dir. Sie hat eine Tasse Kaffee. Sie sagt: 'Komm, wir gucken zusammen.' Du liest die Übergabe von der Spätschicht. Zolpidem wurde abgesetzt. Nachtlicht hat gebrannt. Toilettenstuhl wurde benutzt — Frau M. hat geklingelt um 02:50. Vitalzeichen sind stabil. Schmerzen: 2 von 10. Du gehst mit Frau Keller zu Frau M. Sie sitzt im Bett. Sie hat ihre Brille auf. Sie trinkt Tee. Sie lächelt vorsichtig. Sie sagt: 'Sie sind die von der Nacht.' Du sagst: 'Sie haben geklingelt.' Sie nickt: 'Ja. Es ging.' Etwas in dir wird ruhig. Aber jetzt ist die Frage: Was hat wirklich geholfen? Was war zu viel? Was fehlt noch — zum Beispiel Physiotherapie, Hüftprotektor, HCT-Review? Du musst es klar sagen. Frau Keller wartet. Du selbst willst es auch wissen — für die nächste Schicht und für dich.",
  kernSteps: [
    // Step 5.0b — Inline-Wissen "Re-Assessment-Zeiten + NRS-Wiederbegegnung"
    // PILOT (Inline-Wissen v1, Phase 5): WIEDERBEGEGNUNG mit NRS aus Phase 1.
    // Cross-Linking-Schema: kein voller Lese-Snack, nur Vertiefung mit Frau-M.-spezifischen
    // Werten + Re-Assessment-Schwellen.
    {
      stepId: "ce02-frau-m-eval-00b-reassessment-zeiten",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Schmerzmanagement 2020 (akute Schmerzen)",
        "DGSS — Deutsche Schmerzgesellschaft, Re-Assessment-Empfehlung 2023",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-eval-reassessment",
      tag: "pflege",
      transition: "24 Stunden spaeter. Was hat funktioniert?",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["pflegeprozess", "pflegedokumentation"],
      contentC1: {
        title: "Re-Assessment — was hat funktioniert, was nicht?",
        body: "",
        glossarBegriffe: ["Re-Assessment", "NRS"],
      },
      contentB1: {
        title: "Nochmal prüfen — hat es geholfen?",
        body: "",
        glossarBegriffe: ["Re-Assessment", "NRS"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-reassessment",
        wiederbegegnung: {
          basisBausteinId: "sturz-prophylaxe-nrs",
          basisPatient: "Frau M. (Phase 1)",
          vertiefung:
            "Du kennst NRS aus Phase 1 (\\\"NRS \\u22654 ist nicht wenig\\\"). Bei Frau M. heute Morgen: NRS 2 — funktioniert die Schmerzmedikation, oder hat sie nur \\\"runtergespielt\\\"?",
          vertiefungB1:
            "NRS kennst du aus Phase 1. Bei Frau M. heute: NRS 2 — wirkt die Tablette wirklich, oder \\\"spielt sie es runter\\\" wie immer?",
        },
        storyAufhaenger:
          "Frau M. sagt: \\\"Schmerzen sind besser, NRS 2.\\\" Aber sie ist auch die, die NRS 4 als \\\"etwas unangenehm\\\" verkauft hat. Wie weißt du, ob das Re-Assessment ehrlich ist?",
        storyAufhaengerB1:
          "Frau M. sagt: \\\"Schmerzen sind besser, NRS 2.\\\" Aber sie sagt oft, dass alles ok ist. Wie weißt du, ob es wirklich besser ist?",
        kerntext:
          "**Re-Assessment ist nicht nur Score-Wiederholung.** Du prüfst:\n\n• **Hat die Intervention gewirkt?** (NRS-Reduktion ≥30 % oder absolut auf < 4 = Erfolg laut DGSS 2023)\n\n• **War der Wirkbeginn zeitlich richtig erwartet?** (oral 30 Min, i.v. 15 Min, transdermal 30-60 Min)\n\n• **Stimmt der subjektive Score mit objektiven Zeichen?** (Mimik, Atemfrequenz, Bewegungs-Toleranz, Schlafqualität)\n\n• **Was war die Nebenwirkung?** (z.B. Sedierung, Übelkeit, Obstipation bei Opioiden)\n\n**Bei Frau M. heute Morgen:**\n\n• **NRS 2** (von 4-5 vorher) = Reduktion 2-3 Punkte = klarer Erfolg.\n\n• Aber: Sie ist auch die, die in Phase 1 \\\"etwas unangenehm\\\" für NRS 8 sagte → **Bias prüfen**.\n\n• Objektive Hinweise: Sie sitzt aufrecht, lächelt vorsichtig, trinkt Tee. Atmung ruhig. Bewegung links nicht eingeschränkt → konsistent mit niedrigem Schmerz.\n\n**Pflegerische Konsequenz:**\n\n• Schmerztherapie weiter so + 24h-Beobachtung + nicht reduzieren bevor Mobilisations-Belastung getestet ist (NRS bei Bewegung kann höher sein als in Ruhe).\n\n• Wenn Mobilisation NRS > 4 verursacht → Bedarfsanalgesie 30 Min vor nächster Mobi.\n\n**Wichtige Erinnerung:** Re-Assessment auch bei nicht-medikamentösen Maßnahmen (Lagerung, Eis, Wärme) — gleiche Logik, andere Zeiten.",
        kerntextB1:
          "**Re-Assessment ist mehr als nochmal Schmerz fragen.** Du prüfst 4 Dinge:\n\n• **Hat die Behandlung geholfen?** (NRS muss um 30 % runter oder unter 4 sein = Erfolg laut DGSS 2023)\n\n• **War der Zeitpunkt richtig?** (Tablette wirkt nach 30 Min, Spritze nach 15 Min, Pflaster nach 30-60 Min)\n\n• **Passt der Score zu dem, was du siehst?** (Gesicht, Atmung, Bewegung, Schlaf)\n\n• **Gibt es Nebenwirkungen?** (Müdigkeit, Übelkeit, Verstopfung)\n\n**Bei Frau M. heute Morgen:**\n\n• **NRS 2** (vorher 4-5) = 2-3 Punkte besser. Klarer Erfolg.\n\n• Aber: Sie hat in Phase 1 NRS 4 als \\\"etwas unangenehm\\\" gesagt → **Bist du sicher?**\n\n• Was du siehst: Sie sitzt aufrecht, lächelt, trinkt Tee. Atmung normal. → Passt zu wenig Schmerz.\n\n**Was du jetzt tust:**\n\n• Schmerztherapie weiterlaufen lassen + 24h beobachten.\n\n• Nicht zu früh reduzieren — bei Bewegung tut es vielleicht mehr weh als in Ruhe.\n\n• Wenn Mobilisation NRS > 4 macht → 30 Min vorher Bedarfs-Schmerzmittel.\n\n**Wichtig:** Re-Assessment auch bei nicht-Medikamenten (Lagerung, Eis, Wärme).",
        faustregel:
          "Erfolg = NRS-Reduktion ≥ 30 % oder absolut unter 4. Bei \\\"runterspielenden\\\" Patient(inn)en: Score + Mimik + Atmung + Bewegung kombinieren.",
        faustregelB1:
          "Erfolg = NRS um 30 % runter ODER unter 4. Bei Patienten die runterspielen: Schau auch auf Gesicht, Atmung, Bewegung — nicht nur die Zahl.",
        spektrum: [
          {
            patientName: "Lukas (Verbrühung, KUSS)",
            situationsId: "ls-lukas-verbruehung",
            hauptfaktor: "Re-Assessment mit KUSS statt NRS",
            kurzbeschreibung:
              "Bei Säuglingen/Kleinkindern (< 4 J.) Re-Assessment mit KUSS-Skala. Erfolg = KUSS-Reduktion auf < 4. Beobachtung wichtig wegen fehlender verbaler Selbstauskunft.",
          },
          {
            patientName: "Herr Bauer (Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Re-Assessment mit BESD/PAINAD",
            kurzbeschreibung:
              "Bei fortgeschrittener Demenz keine NRS möglich — BESD oder PAINAD bewertet Atmung, Lautäußerung, Mimik, Körpersprache, Trostbarkeit. Re-Assessment alle 30-60 Min nach Intervention.",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Re-Assessment in Ruhe + Bewegung",
            kurzbeschreibung:
              "Bei post-OP-Patient(inn)en NRS in Ruhe + Bewegung getrennt erheben. Mobilisation gelingt nur bei NRS-Bewegung ≤ 3-4 — sonst Analgesie 30 Min vor Mobi.",
          },
        ],
        sonstBox:
          "Andere Re-Assessment-Tools die du kennen solltest: **VAS** (visuelle Analogskala 10 cm), **Faces Pain Scale** (Smileys, Kinder + Sprachbarriere), **CPOT** (intensivpflichtige nicht-kommunikationsfähige Patient(inn)en). Mehr in DNQP Schmerzmanagement 2020 (akut + chronisch).",
        sonstBoxB1:
          "Andere Schmerz-Skalen für Re-Assessment: **VAS** (Strich auf einer Linie), **Smiley-Skala** (für Kinder), **CPOT** (für Intensivpatienten die nicht sprechen können).",
        karteikarte: {
          vorderseite:
            "Frau M. (Sturz vor 24h, NRS 4-5 → 2 nach Schmerzmittel) — wie machst du Re-Assessment, was sind Erfolgs-Kriterien?",
          rueckseite:
            "Re-Assessment nach DNQP/DGSS:\n\n4 Punkte:\n1. Wirkung? (NRS-Reduktion ≥ 30 % oder < 4 = Erfolg)\n2. Zeitpunkt richtig? (oral 30 Min, i.v. 15 Min, transdermal 30-60 Min)\n3. Score plausibel mit objektiven Zeichen? (Mimik, Atmung, Bewegung)\n4. Nebenwirkungen?\n\nBei Frau M.: NRS 2 = 6 Punkte Reduktion = Erfolg. Aber Bias-Prüfung wegen \\\"runterspielenden\\\"-Stil → Mimik/Atmung/Bewegung kongruent → ok.\n\nFaustregel: Bei runterspielenden Patient(inn)en immer Score + objektive Zeichen kombinieren.",
        },
      },
    },

    // Step 5.1 — Categorize: Reassessment
    {
      stepId: "ce02-frau-m-eval-01-reassessment",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-eval-reassessment",
      tag: "pflege",
      transition: "Frau M. sitzt im Bett. Sie trinkt Tee. Sie laechelt.",
      contentC1: {
        title: "Maßnahmen-Reassessment",
        body: "Du schaust dir die umgesetzten Maßnahmen an und ordnest sie drei Kategorien zu: (1) **Hat gewirkt** — ist eingetreten und hat Frau M. geholfen. (2) **War überflüssig** — hätte man weglassen können. (3) **Fehlt noch** — muss als Nächstes gemacht werden.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was hat funktioniert?",
        body: "Du schaust: Was hat funktioniert? Was war unnötig? Was fehlt noch? Sortiere die Maßnahmen in 3 Gruppen.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Ordne jede Maßnahme einer der 3 Kategorien zu.",
        categories: [
          { name: "Hat gewirkt" },
          { name: "War überflüssig" },
          { name: "Fehlt noch" },
        ],
        categoryItems: [
          { text: "Zolpidem vom Arzt abgesetzt", correctCategory: 0 },
          {
            text: "Nachtlicht die ganze Nacht eingeschaltet",
            correctCategory: 0,
          },
          { text: "Toilettenstuhl neben dem Bett", correctCategory: 0 },
          { text: "Rutschfeste Socken angezogen", correctCategory: 0 },
          {
            text: "Physiotherapie-Termin für heute organisiert",
            correctCategory: 2,
          },
          {
            text: "HCT-Review (morgens noch nötig durch Tag-Schicht)",
            correctCategory: 2,
          },
          {
            text: "Hüftprotektor-Gespräch mit Tochter vorbereiten",
            correctCategory: 2,
          },
          {
            text: "Stündliche Vitalzeichen-Kontrolle die ganze Nacht",
            correctCategory: 1,
          },
        ],
      },
    },

    // Step 5.2 — Quote: Patientensicht
    {
      stepId: "ce02-frau-m-eval-02-patientensicht",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-eval-patientensicht",
      tag: "pflege",
      transition: "Wie sicher fuehlst du dich jetzt — nach dieser Nacht?",
      displayFormat: "quote",
      contentC1: {
        title: "Was Frau M. am Morgen sagt",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt am Frühstückstisch, ihre Tochter Birgit sitzt neben ihr (sie kam extra früh vorbei). Als du eintrittst, sagt Frau M. zu dir:\n\n> \"Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte, ich werde einfach nur alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes.\"\n\nDieser Satz ist didaktisch zentral. Frau M. hat durch die **Ursachenaufklärung** das Post-Fall-Syndrom durchbrechen können. Kontroll-Erleben statt Schicksalserleben. 'Ich werde alt' = unveränderbar, passiv → Sturzangst bleibt. 'Es waren die Tabletten' = veränderbar, aktiv → Hoffnung + Handlungsfähigkeit. Das ist die Wirkung, die durch gute Beratung (Baustein 1 der Angst-Adressierung aus Phase 4) entsteht. Merke: Aufklärung ist nicht nur Information — sie ist eine Intervention gegen das Post-Fall-Syndrom.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
      contentB1: {
        title: "Frau M. am Morgen",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt beim Frühstück. Ihre Tochter Birgit ist da. Frau M. sagt zu dir:\n\n> \"Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte: Ich werde einfach alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes.\"\n\nDieser Satz ist wichtig. Durch die Erklärung hat Frau M. den Teufelskreis der Angst durchbrochen. 'Ich werde alt' = ich kann nichts ändern → Angst bleibt. 'Es waren die Tabletten' = ich kann etwas ändern → Hoffnung kommt. Merke: Erklären ist nicht nur Information — es ist Therapie gegen Angst.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
    },

    // Step 5.3 — Selbsteinschätzung nachher
    // FIX (walkthrough B-04): stepType confidence → selfrating, confidenceCards entfernt.
    // Gleicher Grund wie B-01: Eine subjektive Selbsteinschätzung am Ende der Situation
    // darf nicht mit "Falsch!"-Header bewertet werden. selfrating nutzt Skala statt
    // isTrue/isFalse-Logik.
    {
      stepId: "ce02-frau-m-eval-03-konfidenz-nachher",
      phase: 5,
      stepType: "selfrating",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-frau-m-eval-confidence-nachher",
      tag: "pflege",
      transition: "Eine letzte Frage. Ehrlich.",
      contentC1: {
        // FIX (walkthrough B-13): Titel differenziert vom Phase-1-Step (info-02 "Wie sicher fühlst du dich?"),
        // damit Schüler spürt: Ende, nicht Anfang.
        title: "Dein Ende-Check — wie sicher fühlst du dich jetzt?",
        body: "Erinnerst du dich? Ganz am Anfang (vor dem Zimmer von Frau M.) haben wir dich gefragt, wie sicher du dich fühlst.\n\nJetzt — nach Assessment, Transfer, SBAR-Anruf, Bettgitter-Entscheidung, Haupt-Branching — fragen wir dich nochmal. Das ist kein Test — es ist eine Spiegelung deines Lernens.",
        glossarBegriffe: [],
      },
      contentB1: {
        // FIX (walkthrough B-13): Titel differenziert vom Phase-1-Step.
        title: "Dein Ende-Check — wie sicher fühlst du dich jetzt?",
        body: "Am Anfang haben wir dich gefragt, wie sicher du dich fühlst. Jetzt — nach allem, was du gemacht hast — fragen wir dich nochmal. Das ist kein Test. Das ist, damit du siehst, was du gelernt hast.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie sicher fühlst du dich jetzt, als Pflegekraft bei einer ähnlichen Situation?",
      },
    },

    // Step 5.4 — Freetext: Reflexion
    {
      stepId: "ce02-frau-m-eval-04-reflexion-frage",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-frau-m-eval-reflexion",
      tag: "krankheitslehre",
      contentC1: {
        title: "Reflexion: Was hättest du anders gemacht?",
        body: "Die KI gibt dir ein Sandwich-Feedback zu deiner Antwort (Lob + konkrete Rückmeldung + Ermutigung). Keine Musterantwort — deine Überlegungen sind der Kern.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Reflexion: Was wäre anders?",
        body: "Die KI gibt dir ein Feedback (Lob + Verbesserung + Ermutigung). Keine perfekte Antwort — deine Gedanken sind wichtig.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was hättest du anders gemacht, wenn du von Anfang an gewusst hättest, dass Zolpidem das Problem ist?",
        bewertungskriterien: [
          "Früher proaktiv zu Medikamenten nachfragen (Anamnese-Schärfung)",
          "Medikamentenreview proaktiv vorschlagen (statt zu warten bis Arzt-Visite)",
          "Schlafhygienische Alternativen anbieten (Warmmilch, Ruhe, Sitzen mit Lavendeltee)",
          "Ursache-Dialog mit Patientin aktiv führen (Anti-Schicksalserleben früher einleiten)",
        ],
        satzanfaengeB1: [
          "Wenn ich gewusst hätte, dass Zolpidem das Problem ist, hätte ich als erstes …",
          "Ich hätte gefragt: …",
          "Statt Zolpidem hätte man vielleicht versuchen können …",
          "Mit Frau M. hätte ich früher über … gesprochen.",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};

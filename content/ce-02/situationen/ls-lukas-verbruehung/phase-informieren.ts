// CE-02 Situation Lukas — Phase 1: Informieren & Ankommen
// Steps: 5 · Bloom: B2–B3 · Zeit: ~15–25 Min
// Quelle: phase-informieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-lukas-informieren",
  phase: "informieren",
  titel: "Informieren & Ankommen",
  titelB1: "Ankommen bei Lukas und den Eltern",
  kontext:
    "Du betrittst Zimmer 3 der Kinderstation. Lukas sitzt auf Sandras Schoß. Sein linker Arm ist mit einem provisorischen feuchten Verband aus der Notaufnahme abgedeckt. Er weint nicht mehr laut — nur noch schluchzend. Sandra hält ihn fest, ihr Gesicht ist verweint. Kevin steht neben dem Bett, Arme verschränkt, schaut dich abwartend an.\n\nAuf dem Nachttisch liegt die Notaufnahmekarte mit wenigen Angaben: Lukas K., 2,5 J., Verbrühung 2a, ~15 % KOF, Erstversorgung durchgeführt, Schmerzmittel i.v. verabreicht. Du hast fünf Minuten bevor Kathrin kommt.\n\nDein erstes Ziel: Vertrauen aufbauen — bei Lukas, bei Sandra, und auch bei Kevin. Das gelingt nicht mit einer Checkliste in der Hand, sondern durch ruhige Präsenz, klare Worte und den ersten echten Blick auf Kind und Eltern. Gleichzeitig sammelst du Informationen: Unfallhergang, Erstversorgung, Vorerkrankungen, Entwicklungsstand, Allergien — und du führst das standardmäßige Kinderschutz-Screening durch, das bei jeder Verbrühung eines Kleinkindes stattfindet.",
  kontextB1:
    "Du gehst in Zimmer 3. Lukas sitzt auf dem Schoß von Sandra. Sein linker Arm hat einen Verband. Lukas schluchzt leise. Sandra hat geweint. Ihr Gesicht ist blass. Kevin steht neben dem Bett. Er schaut dich abwartend an.\n\nDu hast 5 Minuten bevor Kathrin kommt. Dein erstes Ziel: Vertrauen aufbauen. Das gelingt durch ruhige Präsenz und klare Worte.\n\nDu sammelst auch Informationen: Wie ist der Unfall passiert? Was haben die Eltern zuerst getan? Hat Lukas Vorerkrankungen? Hat er Allergien? Du führst auch das Kinderschutz-Screening durch — das ist Standard bei jeder Verbrühung eines kleinen Kindes.",
  kernSteps: [
    // Step 1.1 — MC: Erstbegegnung — was tust du zuerst?
    {
      stepId: "ce02-lukas-info-01-erstbegegnung-prio",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-lukas-info-erstbegegnung",
      tag: "pflege",
      contentC1: {
        title: "Was tust du ZUERST?",
        body: "Du betrittst das Zimmer. Lukas weint, Sandra ist aufgewühlt, Kevin schaut dich abwartend an. Du hast fünf Minuten bevor Kathrin kommt.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Du gehst in das Zimmer. Lukas weint. Sandra ist aufgewühlt. Kevin schaut dich an. Was machst du ZUERST?",
        glossarBegriffe: [],
      },
      transition: "Gut. Du hast dich vorgestellt. Bevor Sandra erzählt — kurz: Wie kühlt man ein verbrühtes Kind richtig?",
      question: {
        fragetext: "Du betrittst das Zimmer — was tust du ZUERST?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Verband abschauen und die Wunde einschätzen",
            isCorrect: false,
            explanation:
              "Nicht so. Wundinspektion ohne Vorbereitung und Beziehungsaufbau verstärkt das Abwehrverhalten von Lukas. Er hat Angst vor Berührung — wenn du sofort anfasst, schlägt er um sich. Vertrauen kommt vor Information.",
            explanationB1:
              "Nicht so. Wenn du zuerst den Verband anschaust: Lukas hat Angst. Er wehrt sich. Erst vorstellen, dann schauen.",
          },
          {
            text: "Dich vorstellen, kurz erklären was du jetzt machst, Lukas auf Augenhöhe ansprechen",
            isCorrect: true,
            explanation:
              "Richtig. Vertrauen kommt vor Informationssammlung. Dich vorstellen gibt Sicherheit. Kurz erklären was du tust gibt Kontrolle zurück. Auf Augenhöhe zu Lukas gehen — nicht über ihn hinweg sprechen — zeigt Respekt auch dem kleinen Patienten gegenüber. Erst dann folgt die strukturierte Aufnahme.",
            explanationB1:
              "Richtig. Vertrauen kommt zuerst — dann Information. Dich vorstellen, erklären was du tust, auf Augenhöhe zu Lukas. Das braucht nur 30 Sekunden — aber es ändert alles.",
          },
          {
            text: "Sofort die Aufnahmedaten abfragen",
            isCorrect: false,
            explanation:
              "Nicht als erstes. Formale Aufnahme erst nach erstem Kontakt. Wenn du sofort Daten abfragst, fühlt sich das kalt an — Sandra und Kevin werden dir nicht vertrauen. Und Lukas sieht: Du interessierst dich nicht für ihn.",
            explanationB1:
              "Nicht zuerst. Das fühlt sich kalt an. Die Eltern vertrauen dir dann nicht.",
          },
          {
            text: "Kevin fragen was passiert ist",
            isCorrect: false,
            explanation:
              "Kevin ist gerade angespannt und defensiv. Ihn als erstes direkt anzusprechen ohne vorher Beziehung aufgebaut zu haben, kann schnell eskalieren. Besser: Erst alle begrüßen, Lukas einbeziehen, dann strukturiert den Unfallhergang erfassen.",
            explanationB1:
              "Kevin ist gerade angespannt. Ihn als erstes zu fragen kann schwierig werden. Erst alle begrüßen — dann Fragen stellen.",
          },
        ],
      },
    },

    // Step 1.1b — Inline-Wissen: Kühlung bei Verbrühung Kleinkind
    // Schüler hat in Step 1.1 die Erstbegegnung gemeistert. Bevor Sandra den Unfallhergang
    // erzählt (1.2), braucht der Schüler das Hintergrundwissen: Wie kühlt man ein verbrühtes
    // Kleinkind korrekt? Sandra hat es richtig gemacht — aber der Schüler soll das VORHER wissen.
    {
      stepId: "ce02-lukas-info-01b-kuehlung-verbruehung",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DGV 2023 — Leitlinie Thermische Verletzungen im Kindesalter",
        "GNPI 2022 — Erstversorgung thermischer Verletzungen bei Kindern",
        "AWMF S2k-Leitlinie 2023 — Thermische Verletzungen",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-info-kuehlung",
      tag: "krankheitslehre",
      themaPrimaer: "haut",
      themenSekundaer: ["saeuglingspflege"],
      transition: "Sandra hat also genau richtig reagiert. Hör jetzt genau hin, was sie erzählt.",
      contentC1: {
        title: "Kühlung bei Verbrühung — Kleinkinder sind keine kleinen Erwachsenen",
        body: "",
        glossarBegriffe: ["Hypothermie", "KOF (Körperoberfläche)", "Vasokonstriktion"],
      },
      contentB1: {
        title: "Wie kühlt man ein verbrühtes Kind richtig?",
        body: "",
        glossarBegriffe: ["Hypothermie (= Unterkühlung)", "KOF (= Körperoberfläche)"],
      },
      inlineWissen: {
        bausteinRef: "haut-kuehlung-verbruehung-kleinkind",
        storyAufhaenger:
          "Sandra wird dir gleich erzählen, dass sie Lukas sofort unter lauwarmes Wasser gehalten hat — etwa 8 Minuten, nur lokal. War das richtig? Bei Erwachsenen heißt es oft \"20 Minuten kühlen\". Bei Kleinkindern gelten andere Regeln.",
        storyAufhaengerB1:
          "Sandra hat Lukas sofort unter lauwarmes Wasser gehalten — etwa 8 Minuten. War das richtig? Bei Erwachsenen kühlt man oft 20 Minuten. Bei kleinen Kindern ist das anders.",
        kerntext:
          "**Kühlung bei Kindern unter 8 Jahren / >10 % KOF (DGV/GNPI 2023):**\n\n• **Maximal 10 Minuten** lokal kühlen — nicht den ganzen Körper.\n\n• **Lauwarmes Wasser (~20 °C)** — kein Eis, kein kaltes Leitungswasser.\n\n• **Restkörper warm halten** — Decke, Kleidung am nicht betroffenen Körper belassen.\n\n• **Warum so kurz?** Kleinkinder haben ein hohes Oberfläche-Masse-Verhältnis. Sie kühlen schnell systemisch aus. Hypothermie verschlechtert die Wundheilung, verstärkt den Schock und erhöht die Mortalität (DGV 2023).\n\n• **Nasse Kleidung sofort entfernen** — nasse Kleidung hält die Hitze an der Haut und verstärkt den Schaden.\n\n**Der häufigste Fehler:** Gut gemeintes Überkühlen. \"Ich hab ihn 30 Minuten unter kaltes Wasser gehalten\" — das macht den Schaden bei Kindern größer, nicht kleiner.\n\nSandras Reaktion — 8 Min lauwarmes Wasser, nur lokal, Restkörper warm — war **leitlinienkonform**.",
        kerntextB1:
          "**Kühlung bei kleinen Kindern (DGV/GNPI 2023):**\n\n• **Höchstens 10 Minuten** kühlen — nur an der verletzten Stelle.\n\n• **Lauwarmes Wasser** (~20 °C) — kein Eis, kein kaltes Wasser.\n\n• **Rest des Körpers warm halten** — Decke drüber.\n\n**Warum so kurz?** Kleine Kinder kühlen schnell aus. Das heißt: Der ganze Körper wird kalt (= Hypothermie). Das ist gefährlich — es macht die Wundheilung schlechter und kann den Kreislauf verschlechtern.\n\n**Häufigster Fehler:** Zu lange kühlen. 30 Minuten kaltes Wasser schadet Kindern.\n\nSandra hat es richtig gemacht: 8 Minuten, lauwarmes Wasser, nur lokal, Lukas warm zugedeckt.",
        faustregel:
          "Kleinkinder: **Max. 10 Min, lauwarm, lokal** — Überkühlung ist gefährlicher als Unterkühlung.",
        faustregelB1:
          "Bei kleinen Kindern: Höchstens 10 Minuten kühlen, lauwarmes Wasser, nur an der verletzten Stelle.",
        spektrum: [
          {
            patientName: "Frau M. (82, Sturz)",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Erwachsene — andere Kühlregeln",
            kurzbeschreibung:
              "Bei Erwachsenen gelten bis zu 20 Min Kühlung als vertretbar — das Oberfläche-Masse-Verhältnis ist günstiger, Hypothermie-Risiko geringer. Aber auch bei Erwachsenen: kein Eis, kein eiskaltes Wasser.",
          },
          {
            patientName: "Emilia (8 Wochen, Bronchiolitis)",
            situationsId: "ls-emilia-saeugling",
            hauptfaktor: "Säugling — noch empfindlicher als Kleinkind",
            kurzbeschreibung:
              "Bei Säuglingen (<1 Jahr) ist das Hypothermie-Risiko noch höher als bei Lukas. Kühldauer bei Verbrühung noch kürzer (max. 5 Min), Wärmeerhalt noch wichtiger. Emilia hat keine Verbrühung — aber das Prinzip Thermoregulation gilt auch bei ihr.",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Kälteanwendung post-OP vs. Verbrühungskühlung",
            kurzbeschreibung:
              "Bei Frau Yilmaz wird Kälte therapeutisch eingesetzt (Kryotherapie post-OP zur Schwellungsreduktion). Anderes Prinzip als Verbrühungskühlung — aber auch hier gilt: max. 20 Min, keine direkte Eisauflage auf der Haut.",
          },
        ],
        sonstBox:
          "Sonderfälle, die hier nicht vertieft werden: **Chemische Verätzungen** (Kühlung mit Wasser kontraindiziert bei bestimmten Substanzen wie Flusssäure), **Stromverbrennungen** (tiefe Gewebsschädigung ohne große Hautveränderung — Kühlung wenig wirksam), **Inhalationstrauma** (Kühlung der Atemwege nicht möglich — CE-06 Notfallmedizin).",
        sonstBoxB1:
          "Andere Situationen: **Chemische Verätzungen** — kein Wasser bei bestimmten Stoffen. **Stromverbrennungen** — Kühlung hilft kaum. **Verbrühung der Atemwege** — man kann sie nicht kühlen. Mehr dazu in CE-06 (Notfälle).",
        karteikarte: {
          vorderseite:
            "Sandra hat Lukas 8 Minuten mit lauwarmem Wasser lokal gekühlt und ihn dann warm zugedeckt. War das korrekt — und warum gelten bei Kleinkindern andere Regeln als bei Erwachsenen?",
          rueckseite:
            "Ja, leitlinienkonform (DGV/GNPI 2023). Kleinkinder: max. 10 Min, lauwarm (~20 °C), nur lokal, Restkörper warm. Grund: hohes Oberfläche-Masse-Verhältnis → schnelle systemische Auskühlung (Hypothermie). Hypothermie verschlechtert Wundheilung + verstärkt Schock.\n\nSpektrum: Erwachsene (Frau M.) bis 20 Min, Säugling (Emilia) max. 5 Min. Faustregel: **Max. 10 Min, lauwarm, lokal — Überkühlung ist gefährlicher als Unterkühlung.**",
        },
      },
    },

    // Step 1.2 — Text (scenario): Unfallhergang aufnehmen
    {
      stepId: "ce02-lukas-info-02-unfallhergang-aufnehmen",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022", "GNPI 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-info-unfallhergang",
      tag: "pflege",
      displayFormat: "scenario",
      transition: "Sandra hat die Fakten erzählt. Jetzt kommt der heikle Teil: Das Kinderschutz-Screening.",
      bildkategorie: "szene",
      imageAlt:
        "Kinderstation, junge Mutter hält weinendes Kleinkind auf dem Schoß, Pflegeperson kniet auf Augenhöhe, ruhige Atmosphäre",
      bildhinweis:
        "Pediatric hospital room, young mother holding toddler on her lap with bandaged arm, nurse kneeling at child eye level, warm soft light, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Unfallhergang aufnehmen",
        body: "Du hast dich vorgestellt. Sandra atmet hörbar aus. Du bittest sie zu erzählen.\n\nSandra berichtet: **S** = Verbrühung linker Arm + Thorax, heute 09:20 Uhr. **B** = Lukas 2,5 J., bisher gesund, keine Vorerkrankungen, keine Allergien, U-Heft liegt vor. **A** = KUSS 8/10 bei Aufnahme, Schmerzmittel i.v. bereits verabreicht, provisorische Abdeckung angelegt. **R** = Aufnahme + Wundversorgung + Flüssigkeitsbilanz + Kinderschutz-Screening.\n\nWas Sandra als erstes erzählt: \"Ich hab nur kurz nicht hingeschaut. Eine Sekunde. Das war alles meine Schuld.\"\n\nWichtig — und das sagst du Sandra jetzt: **\"Sie haben das schnell und richtig gemacht.\"** Sandra hat die nasse Kleidung sofort entfernt, kurz lokal mit lauwarmem Wasser gekühlt (~8 Min) und Lukas dann warm zugedeckt — genau das ist nach aktueller DGV/GNPI-Empfehlung der Standard für Kleinkinder. Bei Kindern unter 8 Jahren bzw. >10 % KOF gilt: nur kurz lokal kühlen (max. 10 Min), lauwarmes Wasser (~20 °C), Wärmeerhalt am Restkörper — sonst droht Hypothermie und der Schock verstärkt sich. Das ist keine Beruhigung aus der Luft — das ist eine fachliche Rückmeldung. Sandra muss das wissen, und Kevin auch. Dieser Satz ist Kommunikation — nicht nur Befund.",
        fallbezug:
          "Lukas K., 2,5 J., Verbrühung Grad 2a ~15 % KOF linker Arm + Thorax. Du bist Pflegeschüler/in im 2. Ausbildungsdrittel auf der Kinderstation. Praxisanleiterin Kathrin kommt in 5 Minuten.",
        glossarBegriffe: ["SBAR", "KOF (Körperoberfläche)", "KUSS-Skala"],
      },
      contentB1: {
        title: "Was Sandra erzählt",
        body: "Du hast dich vorgestellt. Sandra erzählt:\n\nLukas hat heute Morgen um 9:20 Uhr eine Teetasse vom Tisch gezogen. Der heiße Tee ist auf seinen linken Arm und Oberkörper gefallen. Sandra hat sofort die nasse Kleidung ausgezogen. Dann hat sie die Stelle kurz mit lauwarmem Wasser gekühlt — etwa 8 Minuten, nur lokal. Dann hat sie Lukas warm zugedeckt und den Notruf gerufen.\n\nWichtig: Du sagst Sandra jetzt: **\"Sie haben das schnell und richtig gemacht.\"** Bei kleinen Kindern darf man nicht zu lange kühlen. Kinder kühlen schnell aus — das ist gefährlich (Hypothermie = zu kalter Körper). Die Regel: kurz lokal kühlen (max. 10 Minuten), lauwarmes Wasser, Restkörper warm halten. Sandra hat das genau so gemacht. Sandra braucht das zu hören.\n\nLukas hat keine Vorerkrankungen. Er hat keine Allergien. Das Impfheft liegt vor. Er hat in der Notaufnahme schon Schmerzmittel in die Vene bekommen (i.v.). Der Verband wurde schon angelegt.",
        fallbezug:
          "Lukas K., 2,5 J., Verbrühung Grad 2a. Du bist Schüler/in im 2. Ausbildungsdrittel auf der Kinderstation.",
        glossarBegriffe: ["KUSS-Skala", "KOF (Körperoberfläche)", "Hypothermie"],
      },
    },

    // Step 1.2b — Inline-Wissen: § 4 KKG Kinderschutz-Screening
    // Schüler hat in Step 1.2 den Unfallhergang gehört. Bevor der Dialog mit Kevin startet
    // (1.3), muss er wissen: Was ist das Kinderschutz-Screening, warum ist es Standard, und
    // warum ist es KEIN Verdacht? Ohne dieses Wissen kann er Kevin nicht richtig antworten.
    {
      stepId: "ce02-lukas-info-02b-kinderschutz-screening",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "II.1",
      quellen: [
        "§ 4 KKG 2012 — Beratung und Übermittlung von Informationen durch Geheimnisträger",
        "§ 8a SGB VIII 2012 — Schutzauftrag bei Kindeswohlgefährdung",
        "Bundesarbeitsgemeinschaft Kinderschutz 2020",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-info-kinderschutz-grundlagen",
      tag: "pflege",
      themaPrimaer: "pflegeprozess",
      themenSekundaer: ["saeuglingspflege", "pflegedokumentation"],
      transition: "Mit diesem Wissen gehst du jetzt ins Gespräch. Kevin wird laut werden — du bist vorbereitet.",
      contentC1: {
        title: "Kinderschutz-Screening — Standard, nicht Verdacht",
        body: "",
        glossarBegriffe: ["§ 4 KKG", "§ 8a SGB VIII", "Kinderschutz-Screening", "Kindeswohlgefährdung"],
      },
      contentB1: {
        title: "Kinderschutz-Screening — was ist das?",
        body: "",
        glossarBegriffe: ["§ 4 KKG", "Kinderschutz-Screening"],
      },
      inlineWissen: {
        bausteinRef: "pflegeprozess-kinderschutz-screening",
        storyAufhaenger:
          "Du musst gleich Kevin erklären, dass bei Lukas ein Kinderschutz-Screening stattfindet. Kevin wird das als Vorwurf verstehen — \"Ihr beschuldigt uns!\" Bevor du dieses Gespräch führst, musst du selbst verstehen: Was ist das Screening, warum gibt es das, und warum ist es KEIN Verdacht?",
        storyAufhaengerB1:
          "Du musst Kevin gleich sagen: Es kommt ein Gespräch zum Kinderschutz. Kevin wird das als Vorwurf verstehen. Bevor du mit ihm sprichst: Was ist das Kinderschutz-Screening genau?",
        kerntext:
          "**§ 4 KKG (Gesetz zur Kooperation und Information im Kinderschutz, 2012):**\n\nBei jeder **Verbrühung/Verbrennung eines Kindes unter 6 Jahren mit >10 % KOF** ist ein standardisiertes Kinderschutz-Screening vorgeschrieben — nicht weil die Eltern verdächtig sind, sondern weil die **Statistik es erfordert**.\n\n**Die 4 Schritte:**\n\n• **Hinschauen** — Unfallhergang plausibel? Verletzungsmuster passend? Entwicklungsstand des Kindes altersentsprechend?\n\n• **Einschätzen** — geschulte Fachkraft (Sozialarbeit) führt das Gespräch, nicht die Pflege allein.\n\n• **Handeln** — bei konkretem Verdacht: § 8a SGB VIII (Jugendamt einschalten). Ohne konkreten Verdacht: Dokumentation + Empfehlung.\n\n• **Dokumentieren** — sachlich, nicht wertend. Was wurde beobachtet, nicht was vermutet wird.\n\n**Wichtig für dich:** Du führst das Screening nicht durch — das macht die Sozialarbeiterin (Frau Fink). Aber du musst es **ankündigen, erklären und die Eltern vorbereiten**. Und du beobachtest fachlich — Interaktion, Verletzungsmuster, Entwicklungsstand.\n\n**Bei Lukas:** Unfallhergang plausibel (Teetasse, Küche, 2,5 J. = Greifhöhe). Erstversorgung korrekt. U-Heft vorhanden. Kein Hinweis auf Gefährdung.",
        kerntextB1:
          "**§ 4 KKG (Kinderschutz-Gesetz, 2012):**\n\nBei jeder **Verbrühung eines kleinen Kindes (unter 6 Jahre, mehr als 10 % KOF)** gibt es ein Kinderschutz-Screening. Das ist **kein Verdacht** — das ist ein Standard.\n\n**4 Schritte:**\n\n• **Hinschauen** — Passt der Unfallhergang? Ist die Verletzung logisch?\n\n• **Einschätzen** — Die Sozialarbeiterin führt das Gespräch.\n\n• **Handeln** — Bei Verdacht: Jugendamt. Ohne Verdacht: Dokumentation.\n\n• **Dokumentieren** — Sachlich aufschreiben, was du beobachtet hast.\n\n**Deine Aufgabe:** Du führst das Screening NICHT durch. Frau Fink macht das. Aber du sagst den Eltern Bescheid. Und du beobachtest: Wie verhalten sich die Eltern? Wie sieht die Verletzung aus?\n\n**Bei Lukas:** Alles passt zusammen. Unfallhergang logisch. Sandra hat richtig reagiert. Kein Verdacht.",
        faustregel:
          "Kinderschutz-Screening = Hinschauen, nicht Beschuldigen. Standard bei jedem Kind <6 J. mit Verbrühung >10 % KOF.",
        faustregelB1:
          "Kinderschutz-Screening ist Standard, kein Vorwurf. Es gibt das bei jedem kleinen Kind mit Verbrühung.",
        spektrum: [
          {
            patientName: "Emilia (8 Wochen, Bronchiolitis)",
            situationsId: "ls-emilia-saeugling",
            hauptfaktor: "Säugling — besonders enge Kinderschutz-Aufmerksamkeit",
            kurzbeschreibung:
              "Bei Säuglingen unter 12 Monaten ist die Schwelle für ein Kinderschutz-Screening noch niedriger. Jede stationäre Aufnahme eines Säuglings mit Verletzung triggert automatisch die Abklärung. Bei Emilia (Bronchiolitis, keine Verletzung) läuft kein Screening — aber die grundsätzliche Aufmerksamkeit ist Teil des pädiatrischen Standards.",
          },
          {
            patientName: "Herr Bauer (82, Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Erwachsenenschutz — ähnliches Prinzip, anderes Gesetz",
            kurzbeschreibung:
              "Auch bei älteren Menschen gibt es Schutzverfahren: Gewalt in der Pflege, Vernachlässigung in Heimen (§ 19 WTG / § 5 LWTG). Das Prinzip ist dasselbe — standardisiertes Hinschauen, nicht Verdacht. Bauer lebt allein mit Demenz — Vernachlässigungsrisiko wird bei der Entlassung geprüft.",
          },
          {
            patientName: "Frau Schmidt (BMI 38, Polyneuropathie)",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Kein Kinderschutz — aber Selbstvernachlässigung",
            kurzbeschreibung:
              "Bei Frau Schmidt geht es nicht um Kinderschutz, sondern um die Frage der Selbstvernachlässigung bei chronischer Erkrankung. Prinzip der sachlichen Einschätzung ist ähnlich: beobachten, nicht werten.",
          },
        ],
        sonstBox:
          "Erweiterte Kinderschutz-Systematik: **Anhaltsbogen für ein vertiefendes Gespräch** (Bundesarbeitsgemeinschaft Kinderschutz 2020) — 15 standardisierte Items zu Verletzungsmuster, Eltern-Kind-Interaktion, Anamnese-Konsistenz. **Rechtsmedizinische Konsultation** — bei unklarem Verletzungsmuster kann ein rechtsmedizinisches Gutachten angefordert werden (CE-Übergreifend: CE-06 Notfallmedizin, CE-11 Psychiatrie).",
        sonstBoxB1:
          "Mehr zum Kinderschutz: Es gibt einen **Anhaltsbogen** (= Liste mit 15 Fragen, die man systematisch prüft). Bei unklaren Verletzungen kann ein **Rechtsmediziner** um Einschätzung gebeten werden. Das lernst du vertieft in CE-06 und CE-11.",
        karteikarte: {
          vorderseite:
            "Kevin fragt dich aufgebracht: \"Warum kommt eine Sozialarbeiterin? Beschuldigt ihr uns?\" — Was antwortest du, und auf welcher gesetzlichen Grundlage basiert das Screening?",
          rueckseite:
            "§ 4 KKG 2012: Bei jeder Verbrühung/Verbrennung eines Kindes <6 J. mit >10 % KOF ist ein standardisiertes Kinderschutz-Screening Pflicht. 4 Schritte: Hinschauen → Einschätzen → Handeln → Dokumentieren. Es ist kein Verdacht, sondern ein systematischer Abklärungsprozess.\n\nSpektrum: Bei Säuglingen (Emilia) noch niedrigere Schwelle, bei Erwachsenen (Bauer) ähnliches Prinzip über WTG.\n\nFaustregel: **Kinderschutz-Screening = Hinschauen, nicht Beschuldigen.**",
        },
      },
    },

    // Step 1.3 — Dialog (3 Phasen): Kinderschutz-Screening ansprechen
    {
      stepId: "ce02-lukas-info-03-kinderschutz-erklaeren",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["§ 4 KKG 2012", "§ 8a SGB VIII", "DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-info-kinderschutz",
      tag: "pflege",
      contentC1: {
        title: "Kinderschutz-Screening ansprechen",
        body: "Du musst das Kinderschutz-Screening ansprechen. Bei jeder Verbrühung eines Kleinkindes über 10 % KOF ist das Standard (§ 4 KKG 2012) — nicht weil die Eltern verdächtig sind, sondern weil dies der Abklärungsprozess ist. Kevin reagiert sofort defensiv.",
        glossarBegriffe: ["§ 4 KKG", "Kinderschutz-Screening"],
      },
      contentB1: {
        title: "Kinderschutz-Screening erklären",
        body: "Du musst Kevin und Sandra sagen: Es kommt noch ein Gespräch zum Kinderschutz. Das ist Pflicht bei jeder Verbrühung eines kleinen Kindes. Kevin hört das — und reagiert sofort laut.",
        glossarBegriffe: ["§ 4 KKG", "Kinderschutz-Screening"],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Kevins Reaktion.",
        patientName: "Kevin",
        dialogPhases: [
          {
            context:
              "Du erklärst Sandra und Kevin, dass bei jeder Verbrühung eines Kleinkindes ein standardisiertes Gespräch mit einer Sozialarbeiterin stattfindet. Kevin hört das. Er wird sofort laut:",
            contextB1:
              "Du sagst Kevin und Sandra: Es kommt ein Gespräch zum Kinderschutz. Das ist bei jedem kleinen Kind mit Verbrühung so. Kevin hört das. Er reagiert sofort:",
            speaker: "Kevin",
            options: [
              {
                text: "\"Das ist Vorschrift — ich kann das nicht ändern.\"",
                textB1: "\"Das ist Vorschrift. Ich kann nichts daran ändern.\"",
                patientResponse:
                  "Kevin verschränkt die Arme. \"Vorschrift. Klar. Dann sind wir jetzt Verdächtige.\" Er dreht sich weg.",
                patientResponseB1:
                  "Kevin macht die Arme vor der Brust. \"Vorschrift. Klar. Dann sind wir Verdächtige.\" Er dreht sich weg.",
                score: 0,
                feedback:
                  "Das stimmt zwar rechtlich — aber es eskaliert die Situation. 'Vorschrift' vermittelt: Bürokratie statt Fürsorge. Kevin fühlt sich nicht gehört. Er dreht sich weg, und du hast die Beziehung zu ihm verloren. Beim nächsten Mal: Fürsorge in den Vordergrund, Regelwerk in den Hintergrund.",
                feedbackB1:
                  "Das stimmt, aber Kevin fühlt sich nicht ernst genommen. 'Vorschrift' klingt kalt. Kevin dreht sich weg. Du hast das Gespräch verloren.",
              },
              {
                text: "\"Bei jeder Verbrühung eines kleinen Kindes führen wir dieses Gespräch — nicht weil wir zweifeln, sondern weil uns wichtig ist dass es Lukas gut geht. Das ist eine Abklärung, kein Vorwurf.\"",
                textB1:
                  "\"Bei jeder Verbrühung eines kleinen Kindes führen wir dieses Gespräch. Nicht weil wir zweifeln. Weil uns Lukas wichtig ist. Das ist keine Beschuldigung.\"",
                patientResponse:
                  "Kevin schaut dich an. Kurze Pause. \"Und was bedeutet das jetzt praktisch?\"",
                patientResponseB1:
                  "Kevin schaut dich an. Kurze Pause. \"Was bedeutet das für uns?\"",
                score: 3,
                feedback:
                  "Gut. Transparent und nicht anklagend. Du nennst den Standard, du benennst das Ziel (Lukas' Wohlbefinden), du entkräftest den impliziten Vorwurf direkt. Kevin fragt nach — das ist Kooperation. Jetzt kannst du den Ablauf erklären.",
                feedbackB1:
                  "Richtig. Du sagst klar: Das ist Standard. Nicht Verdacht. Lukas steht im Mittelpunkt. Kevin fragt jetzt nach — das ist gut. Er kooperiert.",
              },
              {
                text: "\"Keine Sorge, das ist nichts Schlimmes.\"",
                textB1: "\"Keine Sorge. Das ist nicht schlimm.\"",
                patientResponse:
                  "Kevin schaut skeptisch. \"Nichts Schlimmes. Ich weiß nicht. Fühlt sich nicht so an.\"",
                patientResponseB1:
                  "Kevin schaut skeptisch. \"Nicht schlimm. Für mich fühlt es sich schlimm an.\"",
                score: 1,
                feedback:
                  "Zu verharmlosend. Kevin fühlt sich nicht ernst genommen — er spürt dass etwas bedeutsam ist, und du sagst das Gegenteil. Das wirkt unehrlich. Besser: Die Bedeutung anerkennen, aber klar machen was Abklärung bedeutet (kein Vorwurf, kein Verdacht).",
                feedbackB1:
                  "Nicht gut. Kevin fühlt sich nicht ernst genommen. Er spürt: Das ist ernst. Du sagst: Kein Problem. Das wirkt nicht ehrlich.",
              },
            ],
          },
          {
            context:
              "Kevin hat gefragt: 'Was bedeutet das jetzt praktisch?' Du erklärst:",
            contextB1: "Kevin fragt: 'Was bedeutet das für uns?' Du erklärst:",
            speaker: "Du",
            options: [
              {
                text: "\"Heute Nachmittag kommt Frau Fink, unsere Sozialarbeiterin. Sie führt ein kurzes Gespräch mit euch — ohne Lukas dabei. Sie schaut sich an: Gibt es Unterstützungsbedarf? Gibt es Ressourcen die ihr braucht? Es geht nicht um Schuld, sondern darum, wie es euch als Familie gerade geht.\"",
                textB1:
                  "\"Heute Nachmittag kommt Frau Fink. Sie ist Sozialarbeiterin. Sie redet kurz mit euch — ohne Lukas. Sie fragt: Braucht ihr Hilfe? Wie geht es euch? Nicht: Was habt ihr falsch gemacht.\"",
                patientResponse:
                  "Kevin nickt langsam. Sandra sagt leise: \"Okay. Wenn das für Lukas wichtig ist.\"",
                patientResponseB1:
                  "Kevin nickt. Sandra sagt leise: \"Okay. Wenn das für Lukas gut ist.\"",
                score: 3,
                feedback:
                  "Klar, konkret, ressourcenorientiert. Du erklärst den Ablauf (Frau Fink, heute Nachmittag, ohne Lukas), du nennst den Fokus (Unterstützungsbedarf), und du nimmst den Vorwurfs-Frame wieder weg. Sandra signalisiert Kooperation — Kevin auch (langsames Nicken).",
                feedbackB1:
                  "Sehr gut. Du erklärst klar was passiert. Wer kommt, wann, wozu. Kevin nickt. Sandra sagt Ja. Du hast die Situation stabilisiert.",
              },
              {
                text: "\"Das wird die Sozialarbeiterin euch dann erklären.\"",
                textB1:
                  "\"Das erklärt euch dann die Sozialarbeiterin.\"",
                patientResponse:
                  "Kevin runzelt die Stirn. \"Also wissen Sie auch nicht was da passiert.\"",
                patientResponseB1:
                  "Kevin runzelt die Stirn. \"Also wissen Sie das auch nicht.\"",
                score: 1,
                feedback:
                  "Abschieben. Kevin hat direkt gefragt — und du gibst die Verantwortung weiter. Das wirkt unsicher und erzeugt Misstrauen. Du weißt den Ablauf: Erkläre ihn kurz selbst, dann kommt Frau Fink mit Details.",
                feedbackB1:
                  "Abschieben ist nicht gut. Kevin hat gefragt. Du weißt die Antwort. Erkläre sie kurz — dann kommt Frau Fink mit Details.",
              },
            ],
          },
          {
            context:
              "Sandra fragt dich leise, während Kevin kurz aus dem Zimmer geht: \"Meinen die, wir haben was falsch gemacht?\"",
            contextB1:
              "Sandra fragt leise: \"Denken die hier, wir haben etwas falsch gemacht?\"",
            speaker: "Du",
            options: [
              {
                text: "\"Nein. Was du heute Morgen gemacht hast — sofort Kühlen, sofort Notruf — das war genau richtig. Das Screening ist Standard für alle Kinder mit Verbrühung. Es geht um Lukas, nicht um euch als Eltern.\"",
                textB1:
                  "\"Nein. Du hast heute Morgen alles richtig gemacht — sofort Kühlen, sofort Notruf. Das Gespräch ist für alle kleinen Kinder mit Verbrühung. Es geht um Lukas.\"",
                patientResponse:
                  "Sandra nickt. Eine Träne läuft. \"Danke. Das hilft.\"",
                patientResponseB1:
                  "Sandra nickt. Eine Träne läuft ihr übers Gesicht. \"Danke. Das hilft.\"",
                score: 3,
                feedback:
                  "Sandwich-Prinzip in der Praxis: Erst die fachliche Bestätigung (Kühlen + Notruf = richtig), dann der Kontext (Standard für alle), dann der Fokus (Lukas, nicht die Eltern). Sandra fühlt sich entlastet. Das ist Beziehungsarbeit.",
                feedbackB1:
                  "Sehr gut. Du bestätigst: Du hast alles richtig gemacht. Du erklärst: Das gilt für alle Kinder. Sandra fühlt sich entlastet. Das ist gute Kommunikation.",
              },
              {
                text: "\"Das weiß ich nicht, das entscheidet die Sozialarbeiterin.\"",
                textB1:
                  "\"Das weiß ich nicht. Das entscheidet Frau Fink.\"",
                patientResponse:
                  "Sandra zieht sich zurück. \"Okay.\" Sie schaut zum Boden.",
                patientResponseB1:
                  "Sandra zieht sich zurück. \"Okay.\" Sie schaut weg.",
                score: 0,
                feedback:
                  "Du weißt mehr als du sagst. Sandra hat etwas Falsches getan? Nein — sie hat alles richtig gemacht. Das weißt du aus dem Unfallhergang. Eine Abschiebung an Frau Fink lässt Sandra mit ihrer Angst allein. Das schadet dem Vertrauen.",
                feedbackB1:
                  "Du weißt mehr. Sandra hat alles richtig gemacht — das weißt du schon. Sage es ihr. Sonst bleibt sie mit ihrer Angst allein.",
              },
            ],
          },
        ],
      },
    },

    // Step 1.4 — Highlight: U-Heft-Impfstatus
    {
      stepId: "ce02-lukas-info-04-u-heft-impfstatus",
      phase: 1,
      stepType: "highlight",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["STIKO 2024", "GNPI 2022"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-info-u-heft",
      tag: "krankheitslehre",
      contentC1: {
        title: "U-Heft sichten — was ist relevant?",
        body: "Sandra hat das U-Heft mitgebracht. Vor dir liegt eine vereinfachte Darstellung der Seiten. Markiere alle Informationen, die für Lukas' aktuelle Situation medizinisch relevant sind.",
        glossarBegriffe: ["U-Untersuchungen", "Tetanus-Impfung", "STIKO"],
      },
      contentB1: {
        title: "U-Heft anschauen — was ist wichtig?",
        body: "Sandra hat das U-Heft dabei. Markiere alles, das für Lukas jetzt wichtig ist.",
        glossarBegriffe: ["U-Untersuchungen", "Tetanus-Impfung"],
      },
      question: {
        fragetext:
          "Markiere alle Informationen im U-Heft, die für Lukas' aktuelle Situation medizinisch relevant sind.",
        highlightSegments: [
          {
            text: "Gewicht 13,2 kg, Körperlänge 92 cm (U6-Eintragung, 18 Monate)",
            isError: true,
            reason:
              "Relevant — aktuelles Gewicht wird für Flüssigkeits- und Medikamentenberechnung gebraucht (Holliday-Segar-Regel, Schmerzmedikation nach kg/KG).",
            reasonB1:
              "Wichtig — das Gewicht brauchen wir für Medikamente und Flüssigkeitsberechnung.",
          },
          {
            text: "U6 (18 Monate) — unauffällig, Entwicklungsstand altersentsprechend",
            isError: true,
            reason:
              "Relevant — zeigt, dass Lukas' Entwicklungsstand (Sprache, Motorik) beim letzten Check normal war. Das ist Teil des Kinderschutz-Screenings: Entwicklungsstand entspricht Alter → kein Hinweis auf chronische Vernachlässigung.",
            reasonB1:
              "Relevant — zeigt: Lukas hat sich normal entwickelt. Das ist wichtig für das Kinderschutz-Gespräch.",
          },
          {
            text: "U7 (24 Monate) — noch nicht durchgeführt, steht noch aus",
            isError: false,
            reason:
              "Kein direkter Befund — U7 steht noch aus (Lukas ist 30 Monate alt, U7 wäre bei 24 Monaten gewesen). Das wird dem Kinderarzt nach Entlassung gemeldet. In der akuten Situation kein Handlungsbedarf.",
          },
          {
            text: "Impfstatus: Tetanus-Auffrischung zuletzt bei U5 (9 Monate) — Grundimmunisierung vollständig",
            isError: true,
            reason:
              "Relevant zu prüfen — der Tetanus-Status sollte bei Aufnahme dokumentiert sein. Bei reiner Verbrühung (Hitze sterilisiert die Wundfläche) ist das Tetanus-Risiko gering — die STIKO sieht eine Auffrischung primär bei tieferen, kontaminierten oder nekrotischen Wunden vor (z. B. tiefe Stich-/Quetsch-/Bisswunden mit Erdkontakt). Bei Lukas: Grundimmunisierung vollständig → kein Handlungsbedarf, nur Dokumentation.",
            reasonB1:
              "Wichtig zu prüfen — Tetanus-Status sollte dokumentiert sein. Bei reiner Verbrühung ist das Risiko gering (Hitze macht die Wunde keimarm). Lukas ist vollständig geimpft. Alles gut.",
          },
          {
            text: "Keine bekannten Allergien laut Eintragung",
            isError: true,
            reason:
              "Relevant — Allergien beeinflussen Wundauflage-Wahl und Schmerzmedikation. 'Keine bekannten Allergien' ist ein positiver Befund.",
            reasonB1:
              "Wichtig — keine Allergien. Das ist gut für die Wundversorgung.",
          },
          {
            text: "Beratungsinhalt U6: Sicherheit im Haushalt, Sturzsicherung, Giftzentrale",
            isError: false,
            reason:
              "Standard-Beratungsinhalt — nicht akut relevant. Die Beratung hat stattgefunden (wie überall bei U6). Kein Befund für den aktuellen Fall.",
          },
        ],
      },
    },

    // Step 1.5 — Sorting: Informationssammlung Reihenfolge
    {
      stepId: "ce02-lukas-info-05-aufnahme-reihenfolge",
      phase: 1,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022", "§ 4 KKG 2012"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-lukas-info-reihenfolge",
      tag: "pflege",
      contentC1: {
        title: "Reihenfolge der Informationssammlung",
        body: "Du führst die Aufnahme von Lukas durch. Bringe die folgenden Informationsbausteine in die richtige Reihenfolge — nach Priorität für die akute Versorgung.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was fragst du als nächstes?",
        body: "Du sprichst mit Sandra. In welcher Reihenfolge sammelst du die Informationen? Sortiere die Karten.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Bringe die Informationsbausteine in die richtige Reihenfolge — nach Priorität für die Aufnahme.",
        sortItems: [
          "Unfallhergang + Zeitpunkt (wann, wie, womit?)",
          "Erstversorgung zuhause (Kühlung korrekt?)",
          "Vorerkrankungen, Allergien, aktuelle Medikamente",
          "Entwicklungsstand (Sprache, Motorik altersgerecht?)",
          "Familienanamnese: Weitere Unfälle? Frühere Krankenhausbesuche?",
          "Kinderschutz-Screening einleiten und Ablauf erklären",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};

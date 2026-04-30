// CE-02 Situation Petrov — Phase 4: Durchführen
// Steps: 9 (inkl. 2 Komplikationen) · Bloom: B4-B5 · Zeit: ~40-60 Min
// Quelle: phase-durchfuehren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-petrov-durchführen",
  phase: "durchführen",
  titel: "Durchführen — Morgenpflege & Komplikationen",
  titelB1: "Die Pflege durchführen",
  kontext:
    "07:55 Uhr. Du hast alles vorbereitet: frische Bettwäsche, Waschschüssel, angedickte Flüssigkeit, Einmalhandschuhe. Das Zimmer ist auf 22°C aufgeheizt, die Tür ist zu. Herr Petrov schaut dich an. Er hat sein Foto von Natalya in die linke Hand genommen.\n\n\"Bitte... langsam.\"\n\nDas ist sein Wunsch. Du nimmst ihn als Leitprinzip.",
  kontextB1:
    "Es ist 07:55 Uhr. Du hast alles vorbereitet. Du hast: frische Bett-Wäsche, eine Wasch-Schüssel, angedickte Flüssigkeit, Einmal-Handschuhe. Das Zimmer ist warm: 22 Grad. Die Tür ist zu. Herr Petrov schaut dich an. Er hält das Foto von seiner Frau Natalya in der linken Hand. Er sagt: \"Bitte... langsam.\" Das ist sein Wunsch. Du machst alles langsam und sagst immer vorher, was du tust.",
  kernSteps: [
    // Step 4.1 — Text: Vorbereitung nach Bobath (stepbystep)
    {
      stepId: "ce02-petrov-dur-01-vorbereitung-bobath-lagerung",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bobath B. 1990 Adult Hemiplegia",
        "LasthandhabV §2",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-vorbereitung",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Vier Schritte vor der Körperpflege",
        body: "Bevor du anfängst, 4 Vorbereitungsschritte nach Bobath-Prinzip:\n\n1) **Bett auf Arbeitshöhe** bringen — Rückenprävention (LasthandhabV §2). Du arbeitest sicher, wenn du nicht gebückt bist.\n2) **Herrn Petrov über alles informieren** was als nächstes kommt — jeder Handgriff wird angekündigt. \"Ich drehe jetzt Ihren Arm leicht nach außen.\" Nie überraschend anfassen.\n3) **Betroffene Seite (rechts) als gleichwertige Seite einbeziehen** — nicht übergehen, nicht kompensieren. Bobath: Die betroffene Seite ist nicht weg — sie braucht gezielte Angebote.\n4) **Ressourcen aktivieren:** Was kann er selbst? Linke Hand am Waschvorgang beteiligen. Grundsatz Bobath: Bewegungsangebote machen, nicht übernehmen. (Bobath B. 1990)",
        glossarBegriffe: ["Bobath-Konzept", "betroffene Seite", "Ressourcen"],
      },
      contentB1: {
        title: "Vor der Körper-Pflege — 4 Schritte",
        body: "Schritt 1: Stelle das Bett auf die richtige Höhe. Das schützt deinen Rücken.\nSchritt 2: Sage Herrn Petrov immer vorher, was du machst. Zum Beispiel: \"Jetzt drehe ich Sie auf die Seite.\"\nSchritt 3: Die rechte Seite ist die betroffene Seite. Sie ist genauso wichtig. Übergehe sie nicht. Beziehe sie mit ein.\nSchritt 4: Was kann Herr Petrov selbst tun? Seine linke Hand ist aktiv. Lass ihn mitmachen. Das ist das Bobath-Prinzip: Bewegung anbieten — nicht übernehmen.",
        glossarBegriffe: ["Bobath-Konzept"],
      },
    },

    // Step 4.2 — Sequencing: Ganzkörperpflege nach Bobath
    {
      stepId: "ce02-petrov-dur-02-ganzkörperpflege-seqüncing",
      phase: 4,
      stepType: "sequencing",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Bobath B. 1990 Adult Hemiplegia",
        "Fröhlich A. 1998 Basale Stimulation",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-petrov-dur-ganzkörperpflege",
      tag: "pflege",
      contentC1: {
        title: "Ganzkörperpflege — richtige Reihenfolge",
        body: "Bringe die Schritte der Ganzkörperpflege beim halbseitig betroffenen Patienten in die richtige Reihenfolge nach Bobath. Merkhilfe: \"Ausziehen: Gesunde zürst — Anziehen: Betroffene zürst.\"",
        glossarBegriffe: [
          "Bobath-Konzept",
          "betroffene Seite",
          "Körperpflege",
          "Seitenlage",
        ],
      },
      contentB1: {
        title: "Die Reihenfolge der Körper-Pflege",
        body: "Bringe die Schritte in die richtige Reihenfolge. Merkhilfe: \"Ausziehen: Gesunde zürst. Anziehen: Betroffene zürst.\"",
        glossarBegriffe: ["Bobath-Konzept", "Körperpflege"],
      },
      question: {
        fragetext:
          "Bringe die Schritte der Ganzkörperpflege in die richtige Reihenfolge nach Bobath.",
        sequencing: {
          instruction: "Ordne die Schritte in der richtigen Reihenfolge.",
          items: [
            {
              id: "gesicht",
              label:
                "Gesicht und Hals waschen — Herr Petrov beginnt selbst mit linker Hand",
            },
            {
              id: "oberkörper",
              label:
                "Oberkörper: gesunde Seite zürst entkleiden, betroffene Seite zürst ankleiden",
            },
            {
              id: "rücken",
              label: "Rücken: Seitlage nach Bobath-Prinzip (auf betroffene Seite)",
            },
            {
              id: "intimpflege",
              label: "Intimpflege: Anleitung zur Eigenpflege soweit möglich",
            },
            {
              id: "beine",
              label:
                "Beine: gesunde Seite zürst waschen, betroffene Seite aktiv-assistiv einbeziehen",
            },
            {
              id: "fersen",
              label:
                "Fersen und Prädilektionsstellen inspizieren und eincremen",
            },
          ],
        },
      },
    },

    // Step 4.3 — Diagram: Drehen und Seitenlage (Ablaufdiagramm)
    {
      stepId: "ce02-petrov-dur-03-drehen-seitenlage",
      phase: 4,
      stepType: "diagram",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bobath B. 1948/1990",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-drehen",
      tag: "anatomie",
      bildkategorie: "prozedur",
      imageAlt:
        "Ablaufdiagramm 5 Schritte für das Drehen eines Schlaganfall-Patienten auf die betroffene Seite nach Bobath",
      bildhinweis:
        "Step-by-step diagram showing 5 steps of turning a hemiplegic patient to their affected side using Bobath technique, annotated arrows, clear numbered panels, medical illustration style, absolutely no text no labels no words",
      contentC1: {
        title: "Drehen auf die betroffene Seite — 5 Schritte",
        body: "Ablauf: Drehen von Herrn Petrov auf die betroffene Seite (rechts) nach Bobath-Prinzip.\n\nGriffpunkte: Schultergürtel (am Schulterblatt entlang Richtung Akromion begleiten — nicht aufs Skapula drücken) und Beckenkamm. Die Bewegung wird begleitet, nicht gehebelt — der Patient bewegt selbst, du sicherst.\n\nMerkhilfe: \"Schultergürtel und Beckenkamm — nicht Achsel und Taille.\"",
        glossarBegriffe: [
          "Bobath-Konzept",
          "Schultergürtel",
          "Schulterblatt",
          "Beckenkamm",
          "Seitenlage",
        ],
      },
      contentB1: {
        title: "Drehen auf die Seite — 5 Schritte",
        body: "Du drehst Herrn Petrov auf die Seite. 5 Schritte:\n1. Linkes Bein anstellen: Der Fuß ist auf der Matratze, das Knie zeigt nach oben (90°).\n2. Linken Arm über die Brust legen.\n3. Deine rechte Hand begleitet seinen Schulter-Gürtel (nicht drücken auf das Schulter-Blatt — sondern führen Richtung Schulter vorne). Deine linke Hand liegt am Becken-Kamm.\n4. Drehe ihn langsam — er macht die Bewegung mit, du sicherst.\n5. Korrekte Seiten-Lage: Schulter nach vorne ziehen. Arm gestreckt auf Kissen. Bein ein wenig gebeugt.\nMerkhilfe: \"Schulter-Gürtel und Becken-Kamm — nicht Achsel und Taille.\"",
        glossarBegriffe: ["Seitenlage", "Schultergürtel", "Beckenkamm"],
      },
      question: {
        fragetext:
          "Ordne die 5 Schritte des Drehens in die richtige Reihenfolge.",
        diagram: {
          diagramType: "flowchart",
          instruction: "Ablauf: Drehen auf die betroffene Seite nach Bobath.",
          nodes: [
            {
              id: "s1",
              label: "Linkes Bein anstellen (90°, Fuß auf Matratze)",
              highlight: true,
            },
            { id: "s2", label: "Linken Arm qür über die Brust" },
            {
              id: "s3",
              label: "Schultergürtel begleiten (nicht aufs Schulterblatt drücken) + Hand am Beckenkamm",
            },
            { id: "s4", label: "Drehen in gleichmäßigem Zug" },
            {
              id: "s5",
              label:
                "Seitenlage: Schulter nach vorne, Arm auf Kissen, Bein leicht gebeugt",
              highlight: true,
            },
          ],
          edges: [
            { from: "s1", to: "s2" },
            { from: "s2", to: "s3" },
            { from: "s3", to: "s4" },
            { from: "s4", to: "s5" },
          ],
          interactive: false,
        },
      },
    },

    // Step 4.4 — Matching: Atemübungen + Pneumonieprophylaxe
    {
      stepId: "ce02-petrov-dur-04-atemübungen",
      phase: 4,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "KRINKO/RKI 2013 Nosokomiale Pneumonie",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "DGG 2022 S1-Leitlinie Frühmobilisation",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-petrov-dur-pneumonieprophylaxe",
      tag: "krankheitslehre",
      transition: "Atemübungen geschafft. Bevor das Frühstück kommt: Erst Mundpflege.",
      contentC1: {
        title: "Pneumonieprophylaxe — Maßnahmen und Wirkung",
        body: "Ordne die Maßnahmen der Pneumonieprophylaxe ihrer jeweiligen Wirkung zu.",
        glossarBegriffe: [
          "Atelektase",
          "Lippenbremse",
          "Frühmobilisation",
          "Oberkörperhochlagerung",
        ],
      },
      contentB1: {
        title: "Pneumonie-Prophylaxe — Was wirkt wie?",
        body: "Ordne jede Maßnahme ihrer Wirkung zu.",
        glossarBegriffe: ["Pneumonie", "Atelektase", "Mobilisation"],
      },
      question: {
        fragetext:
          "Ordne die Pneumonieprophylaxe-Maßnahmen ihrer Wirkung zu.",
        matchingPairs: [
          {
            left: "Oberkörperhochlagerung 30°",
            right:
              "Zwerchfell wird entlastet, Atemvolumen steigt; Sekret kann besser abfließen",
          },
          {
            left: "Tiefatemübungen, Lippenbremse",
            right:
              "Alveolen bleiben offen, Atelektasen werden verhindert",
          },
          {
            left: "Abhusten auf Anleitung",
            right: "Sekret wird mobilisiert und abtransportiert",
          },
          {
            left: "Frühmobilisation — Bettkante",
            right:
              "Vertikale Körperhaltung verbessert Atemvolumen messbar",
          },
        ],
      },
    },

    // Step 4.4b — Inline-Wissen: Mundpflege bei Aspirationsrisiko
    // Bevor der Schüler das Frühstück anreicht, muss er wissen: Mundpflege VOR dem Essen senkt
    // die Aspirationspneumonie-Rate. Bei Herrn Petrov besonders relevant.
    {
      stepId: "ce02-petrov-dur-04b-mundpflege-aspiration",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Sjögren P. et al. 2008 — Systematic review oral hygiene and pneumonia, JAGS 56:2124-2130",
        "KRINKO/RKI 2013 — Nosokomiale Pneumonie",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-mundpflege",
      tag: "pflege",
      themaPrimaer: "mundpflege",
      themenSekundaer: ["essen-anreichen"],
      transition: "Mundpflege erledigt. Jetzt: das Frühstück vorbereiten und sicher anreichen.",
      contentC1: {
        title: "Mundpflege vor dem Essen — Pneumonieschutz beginnt im Mund",
        body: "",
        glossarBegriffe: ["Mundpflege", "Aspirationspneumonie", "Oral Health"],
      },
      contentB1: {
        title: "Mundpflege vor dem Essen — warum?",
        body: "",
        glossarBegriffe: ["Mundpflege", "Pneumonie"],
      },
      inlineWissen: {
        bausteinRef: "mundpflege-bei-aspirationsrisiko",
        storyAufhaenger:
          "Bevor du Herrn Petrov das Frühstück reichst, machst du eines: Mundpflege. Klingt nach Routine. Ist aber bei einem Dysphagie-Patienten ein Schutzschild gegen Aspirationspneumonie. Denn was beim Verschlucken in die Lunge gelangt, ist nicht nur Nahrung — es sind auch die Keime aus dem Mundraum.",
        storyAufhaengerB1:
          "Vor dem Frühstück machst du Mundpflege bei Herrn Petrov. Warum? Weil die Keime im Mund bei Verschlucken in die Lunge kommen können. Mundpflege schützt vor Lungenentzündung.",
        kerntext:
          "**Warum Mundpflege vor dem Essen?** Bei Aspiration gelangen nicht nur Nahrungspartikel in die unteren Atemwege, sondern auch Mundflora-Keime. Sjögren et al. (2008) zeigten in einer Metaanalyse: **Regelmäßige Mundpflege senkt die Aspirationspneumonie-Rate um bis zu 40 %.**\n\n**Bei Herrn Petrov besonders wichtig:**\n\n• Dysphagie Grad 2 = erhöhtes Aspirationsrisiko\n\n• Aphasie = er kann nicht sagen wenn etwas im Mund stört\n\n• Hemiparese rechts = er kann die rechte Wangentasche nicht selbst kontrollieren — Speisereste sammeln sich dort unbemerkt\n\n**Vorgehen:**\n\n• Weiche Zahnbürste, sanft, systematisch (links beginnen — gesunde Seite, er kann mithelfen)\n\n• Rechte Wangentasche gezielt ausstreichen — dort sammeln sich bei Hemiparese Reste\n\n• Kein Mundwasser (Aspirationsgefahr durch dünne Flüssigkeit)\n\n• Oberkörper mindestens 30° aufgerichtet während der Mundpflege\n\n• Absaugen bereithalten bei schwerer Dysphagie (hier: nicht nötig, Grad 2)",
        kerntextB1:
          "**Warum Mundpflege vor dem Essen?** Beim Verschlucken kommen die **Keime aus dem Mund** in die Lunge. Sauberer Mund = weniger Keime = weniger Lungenentzündung.\n\nStudien zeigen: Regelmäßige Mundpflege senkt das Risiko um **40 %**.\n\n**Bei Herrn Petrov:**\n\n• Er kann nicht sagen, wenn etwas im Mund stört (Aphasie).\n\n• In der rechten Wange sammeln sich Essens-Reste (Hemiparese).\n\n**So machst du es:**\n\n• Weiche Zahnbürste, sanft putzen.\n\n• Rechte Wangen-Tasche mit dem Finger ausstreichen.\n\n• Kein Mundwasser (zu dünn — Aspirations-Gefahr).\n\n• Oberkörper auf mindestens 30° aufgerichtet.",
        faustregel: "Mundpflege vor dem Essen = Pneumonieschutz. Rechte Wangentasche bei Hemiparese immer kontrollieren.",
        faustregelB1: "Sauberer Mund = weniger Keime in der Lunge. Rechte Wangentasche kontrollieren.",
        spektrum: [
          {
            patientName: "Herr Baür",
            situationsId: "ls-baür-demenz-sturz",
            hauptfaktor: "Demenz, wehrt sich bei Mundpflege",
            kurzbeschreibung:
              "Baür versteht die Mundpflege nicht und wehrt sich. Strategie: Basale Stimulation — bekannte Zahnpasta, eigene Zahnbürste, rhythmisches Vorgehen, Ablenkung statt Zwang.",
          },
          {
            patientName: "Emilia",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Säugling, orale Stimulation",
            kurzbeschreibung:
              "Bei Emilia ist \"Mundpflege\" etwas ganz anderes: orale Stimulation mit feuchtem Tupfer an Zahnleiste und Gaumen — Saugreflex fördern nach NGS-Phase.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "COPD, Cortison-Inhalatoren → Soor-Risiko",
            kurzbeschreibung:
              "Kovac inhaliert Cortison (COPD). Ohne Mundpflege nach Inhalation: Soor-Pilz im Mundraum. Bei ihr ist Mundpflege nach der Inhalation Pflicht — andere Indikation, gleiche Konseqünz.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Du machst Mundpflege bei Herrn Petrov vor dem Frühstück. Warum streichst du gezielt die rechte Wangentasche aus?",
          rueckseite:
            "Hemiparese rechts = fehlende Sensibilität und Motorik der rechten Wange. Speisereste sammeln sich dort unbemerkt (kein Feedback). Keime aus dem Mund gelangen bei Aspiration in die Lunge. Sjögren 2008: regelmäßige Mundpflege senkt Aspirationspneumonie-Rate um 40 %. Spektrum: Baür (wehrt sich, Basale Stimulation), Emilia (orale Stimulation beim Säugling), Kovac (Soor-Risiko durch Cortison). Faustregel: **Rechte Wangentasche bei Hemiparese immer kontrollieren.**",
        },
      },
    },

    // Step 4.5 — Text: Essen anreichen (checklist)
    {
      stepId: "ce02-petrov-dur-05-essen-anreichen",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "IDDSI 2019 International Dysphagia Diet Standardisation Initiative",
        "DGG/DGN 2020 Neurogene Dysphagie",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-essen-anreichen",
      tag: "pflege",
      displayFormat: "checklist",
      contentC1: {
        title: "Frühstück anreichen — 6 Punkte",
        body: "Checkliste für das Anreichen bei Herrn Petrov (Dysphagie Grad 2, IDDSI Level 2):\n\n☐ Oberkörper auf 90° aufgerichtet (Aspirationsschutz, IDDSI 2019)\n☐ Angedickte Flüssigkeit Level 2 bereitgestellt — kein normales Wasser\n☐ Löffel von der gesunden Seite (links) anreichen — Schluckreiz stimulieren\n☐ Kleine Portionen: max. 5 ml pro Löffel\n☐ Ruhige Atmosphäre: kein Radio, kein Gesprächsdruck\n☐ Beobachten: Hustet er? Feuchte Stimme? Verschluckt er sich? → Wenn ja: sofort Stop.\n\n(IDDSI 2019; DGG/DGN 2020 Neurogene Dysphagie)",
        glossarBegriffe: ["IDDSI", "Dysphagie", "Aspiration", "Schluckreiz"],
      },
      contentB1: {
        title: "Frühstück anreichen — 6 Punkte",
        body: "Herr Petrov isst Frühstück. Du reichst ihm das Essen an. 6 Punkte:\nOber-Körper auf 90° aufgerichtet — das schützt vor Verschlucken.\nAngedickte Flüssigkeit Level 2 bereitstellen — kein normales Wasser.\nLöffel von links anreichen — das ist seine gesunde Seite.\nKleine Portionen: max. 5 ml pro Löffel.\nRuhige Atmosphäre: Kein Radio. Kein Gesprächs-Druck.\nBeobachten: Hustet er? Klingt die Stimme feucht? Verschluckt er sich? Wenn ja: Sofort aufhören.",
        glossarBegriffe: ["IDDSI", "Dysphagie", "Aspiration"],
      },
    },

    // KOMPLIKATION 1 — Step 4.6: Verschlucken (großes Branching)
    {
      stepId: "ce02-petrov-dur-06-komp1-verschlucken",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: [
        "DGG/DGN 2020 Neurogene Dysphagie",
        "IDDSI 2019",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-petrov-dur-aspiration-akut",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 1 — Herr Petrov verschluckt sich",
        body: "Während des Frühstücks: Herr Petrov hustet plötzlich heftig. Er greift mit der linken Hand zur Kehle.\n\n*(hustet heftig, greift mit linker Hand zur Kehle)*\n\nWas tust du als erstes?",
        glossarBegriffe: ["Aspiration", "Aspirationspneumonie", "Obstruktion"],
      },
      contentB1: {
        title: "Komplikation 1 — Herr Petrov hustet stark",
        body: "Beim Frühstück: Herr Petrov hustet stark. Er greift mit der linken Hand an den Hals. Was tust du als erstes?",
        glossarBegriffe: ["Aspiration", "Husten"],
      },
      question: {
        fragetext: "Herr Petrov hustet stark beim Trinken. Was tust du als erstes?",
        branchingOptions: [
          {
            text: "Ich schlage ihm fest auf den Rücken, damit er frei bekommt.",
            isCorrect: false,
            feedback:
              "Hier falsch. Rückenschläge gehören zum Choking-Algorithmus (ERC 2021) bei mechanischer Atemwegsverlegung durch einen festen Bolus — bei ineffektivem Husten zürst 5 Rückenschläge, dann 5 Bauchstöße (Heimlich-Manöver). Bei Herrn Petrov liegt aber eine Aspiration vor (Flüssigkeit in die Atemwege) — kein Bolusverschluss. Sein aktives Husten zeigt: Atemwege nicht vollständig verlegt, der Schutzreflex funktioniert. Bei komplettem Atemwegsverschluss (kein Husten, Zyanose) wären Rückenschläge und Heimlich-Manöver indiziert (ERC 2021). Hier ist Husten der wirksamste Selbstreinigungs-Mechanismus. Die richtige Reaktion ist: Anreichen stoppen, aufrichten, Husten fördern, beobachten.",
            feedbackB1:
              "Hier falsch. Rücken-Schläge macht man bei einem festen Stück Essen, das die Atemwege verschließt (= Bolus). Hier ist es Flüssigkeit in der Lunge (= Aspiration). Husten ist die beste Hilfe — der Körper reinigt sich selbst. Stoppen, aufrichten, Husten anregen, beobachten.",
          },
          {
            text: "Ich stoppe das Anreichen sofort, fordere Herrn Petrov auf zu husten wenn er kann, halte ihn aufrecht (90°) mit Kopf leicht nach vorne, beobachte Atemgeräusch und Sättigung.",
            isCorrect: true,
            feedback:
              "Richtig vorgegangen. 5 Maßnahmen bei Aspirationsereignis im Bett-Setting: 1) Sofort Stop — kein weiteres Anreichen. 2) Husten fördern — aktiver Schutzmechanismus, der Aspirat entfernt. 3) Aufrichten 90° + Kopf leicht nach vorne (NICHT vornüber neigen — bei Hemiparese und im Bett ist Kontroll-/Sturzgefahr; Vorbeugen gilt für sitzend/stehend stabile Patienten). Schwerkraft unterstützt Selbstreinigung der Atemwege. 4) Atemgeräusch beurteilen: klar = gut, gurgelnd/feucht = stille Aspiration. 5) SpO2 (per Pulsoximeter) und Puls beobachten wenn verfügbar. Dann: Befund dokumentieren + Schlucktherapeutin/Arzt informieren. (DGG/DGN 2020 Neurogene Dysphagie; AWMF S3 Schlaganfall)",
            feedbackB1:
              "Richtig. Das sind die Schritte: 1. Stopp. 2. Husten anregen. 3. Aufrichten auf 90° — Kopf leicht nach vorne (nicht vornüber beugen, das ist bei Halbseiten-Schwäche im Bett gefährlich). 4. Atmung und Sättigung beobachten. 5. Dokumentieren und Schluck-Therapeutin informieren.",
          },
          {
            text: "Ich rufe sofort den Arzt — das ist ein Notfall.",
            isCorrect: false,
            feedback:
              "Zu früh. Erst die Situation stabilisieren, dann bewerten ob ärztliche Intervention nötig ist. Wenn du sofort den Arzt rufst ohne vorher zu stabilisieren, ist Herrn Petrov in diesen Minuten niemand zur Seite — und du kannst dem Arzt keinen klaren Befund liefern. Erst stabilisieren → dann beurteilen → dann ggf. Arzt informieren mit SBAR.",
            feedbackB1:
              "Zu früh für den Arzt. Erst: Stopp, Aufrichten, Beobachten. Wenn es danach nicht besser wird — dann Arzt rufen mit klarem Befund.",
          },
        ],
      },
    },

    // Step 4.7 — Timer: Nachbeobachtungsprotokoll
    {
      stepId: "ce02-petrov-dur-07-komp1-nachbeobachtung",
      phase: 4,
      stepType: "timer",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "DGG/DGN 2020 Neurogene Dysphagie",
        "KRINKO/RKI 2013 Nosokomiale Pneumonie",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-dur-nachbeobachtung",
      tag: "krankheitslehre",
      contentC1: {
        title: "3-Minuten-Beobachtungsprotokoll + 24-48 h Verlaufskontrolle",
        body: "Nach dem Aspirationsereignis beobachtest du strukturiert — 3 Minuten am Bett, 7 Punkte. Tick ab was du beobachtet hast.\n\nWichtig: Bei neurogener Dysphagie ist die stille Aspiration mit verzögerter Pneumonie-Entwicklung (24-48 h) der gefährlichste Verlauf. Die Nachbeobachtung endet nicht nach 3 Minuten — Atemfreqünz, Temperatur, Sputumveränderung und Allgemeinzustand müssen über 24-48 h im Verlauf kontrolliert und im Pflegebericht festgehalten werden. (DGG/DGN 2020)",
        glossarBegriffe: [
          "Atemfreqünz",
          "Saürstoffsättigung",
          "Pulsoximeter",
          "stille Aspiration",
        ],
      },
      contentB1: {
        title: "3 Minuten beobachten — und im Verlauf 24-48 Stunden",
        body: "Nach dem Verschlucken beobachtest du 3 Minuten am Bett. 7 Punkte.\nWichtig: Eine stille Aspiration kann erst nach 24-48 Stunden eine Lungen-Entzündung machen. Du beobachtest weiter: Atemfreqünz, Temperatur, Husten, Schleim. Du dokumentierst alles.",
        glossarBegriffe: ["Atemfreqünz", "Saürstoffsättigung", "stille Aspiration"],
      },
      question: {
        fragetext: "Beobachte 3 Minuten strukturiert — tick ab was du prüfst.",
        timeLimitSeconds: 180,
        timerVariant: "standard",
        timerQuestions: [
          {
            question: "Atemfreqünz jetzt: zähle 15 Sekunden × 4.",
            options: ["12-18/Min (normal)", ">18/Min (erhöht — beachten)", "<12/Min (erniedrigt — beachten)"],
            correctIndex: 0,
          },
          {
            question:
              "Atemgeräusch: klingt die Atmung klar oder feucht-rasselnd?",
            options: [
              "Klar — kein Hinweis auf Aspiration in den Bronchien",
              "Feucht/gurgelnd — mögliche stille Aspiration",
            ],
            correctIndex: 0,
          },
          {
            question: "Saürstoffsättigung (wenn Pulsox verfügbar)?",
            options: [
              "≥ 95% — kein akuter Handlungsbedarf",
              "< 95% — sofort Arzt informieren",
            ],
            correctIndex: 0,
          },
          {
            question:
              "Wie geht es Herrn Petrov nach 1 Minute — ruhiger oder weiter Husten?",
            options: [
              "Ruhiger, kein weiterer Husten",
              "Hustet weiter — Befund dokumentieren, Arzt informieren",
            ],
            correctIndex: 0,
          },
          {
            question: "Klingt die Stimme noch feucht? Bitte ihn, etwas zu sagen.",
            options: [
              "Stimme klar — kein Hinweis auf Flüssigkeit in den Stimmlippen",
              "Feuchte Stimme — mögliche residülle Aspiration",
            ],
            correctIndex: 0,
          },
          {
            question:
              "Entscheidung: Was jetzt? (Reihenfolge beachten — Konsistenzanpassung ist nicht Pflege-Eigenkompetenz)",
            options: [
              "Schlucktherapeutin und behandelnden Arzt informieren — gemeinsame Entscheidung über Konsistenzanpassung (Level 3 oder Pause)",
              "Konsistenz selbst auf Level 3 erhöhen — die Therapeutin wird das später bestätigen",
            ],
            correctIndex: 0,
          },
          {
            question:
              "Wenn die SpO2 abweicht — was tust du, sobald SpO2 < 95 % ist oder die Atmung gurgelnd klingt?",
            options: [
              "Sofort Arzt informieren, halbsitzende Lagerung halten, O2-Gabe nach ärztlicher Anordnung vorbereiten, weiter engmaschig dokumentieren",
              "Erst noch 5 Minuten abwarten, ob es sich von selbst bessert",
            ],
            correctIndex: 0,
          },
        ],
      },
    },

    // KOMPLIKATION 2 — Step 4.8: Natalya mit normalem Tee (ChatSim)
    {
      stepId: "ce02-petrov-dur-08-komp2-natalya",
      phase: 4,
      stepType: "chatSim",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "IDDSI 2019",
        "DGG/DGN 2020 Neurogene Dysphagie",
        "ICN 2021 Code of Ethics",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-dur-angehörige-beratung",
      tag: "pflege",
      transition: "Natalya ist informiert und einbezogen. Jetzt der nächste Meilenstein: Herr Petrov soll sitzen.",
      contentC1: {
        title: "KOMPLIKATION 2 — Ehefrau Natalya möchte normalen Tee geben",
        body: "09:00 Uhr. Natalya betritt das Zimmer mit einer Thermoskanne. Sie lächelt. Sie sagt:\n\n\"Ich habe Tee mitgebracht, normalen — er trinkt immer ohne Zucker. Darf ich ihm geben?\"\n\nSimuliertes Beratungsgespräch: Wähle bei jedem Schritt die beste Antwort.",
        glossarBegriffe: ["Angehörigenberatung", "Dysphagie", "IDDSI"],
      },
      contentB1: {
        title: "Komplikation 2 — Natalya kommt mit Tee",
        body: "09:00 Uhr. Natalya kommt ins Zimmer. Sie hat eine Thermos-Kanne dabei. Sie lächelt. Sie sagt: \"Ich habe Tee mitgebracht — normalen. Er trinkt immer ohne Zucker. Darf ich ihm geben?\" Du führst ein Gespräch mit ihr.",
        glossarBegriffe: ["Angehörigenberatung", "Dysphagie"],
      },
      question: {
        fragetext:
          "Simuliertes Beratungsgespräch mit Natalya — wähle bei jedem Schritt die beste Antwort.",
        chatSim: {
          patientName: "Natalya (Ehefrau)",
          situation:
            "Natalya betritt das Zimmer mit einer Thermoskanne und möchte ihrem Mann normalen Tee geben. Sie weiß nichts über seine Schluckstörung. Du musst sie informieren und einbeziehen.",
          situationB1:
            "Natalya kommt mit Tee. Sie weiß nicht, dass ihr Mann keine dünnen Flüssigkeiten trinken darf. Du erklärst es ihr.",
          systemPrompt:
            "Du spielst Natalya, die liebende Ehefrau von Viktor Petrov. Du bist besorgt und willst helfen. Du wirst kooperativ wenn man dir freundlich und klar erklärt warum normaler Tee gefährlich ist. Du reagierst positiv auf Einbeziehung — du möchtest mithelfen, nicht ausgeschlossen werden. Spreche auf Deutsch, einfach und emotional.",
          maxTurns: 4,
          evaluationCriteria: [
            "Natalya freundlich begrüßt (nicht abgewiesen)",
            "Dysphagie in einfacher Sprache erklärt (ohne Fachbegriffe oder mit Erklärung)",
            "Konkreter Grund für die Gefahr genannt (Lungenaspiration)",
            "Alternative angeboten (angedickte Flüssigkeit zeigen/erklären)",
            "Natalya aktiv einbezogen (sie darf anreichen mit Anleitung)",
          ],
        },
      },
    },

    // Step 4.8b — Inline-Wissen: Mobilisation — Bettkante bei Hemiparese
    // Wiederbegegnung Bobath (Phase 2) + Vertiefung Kreislauf-Vorkontrolle.
    {
      stepId: "ce02-petrov-dur-08b-mobilisation-bettkante",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DGG 2022 — S1-Leitlinie Frühmobilisation",
        "Bobath B. 1990 — Adult Hemiplegia",
        "DNQP 2020 — Expertenstandard Mobilität",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-mobilisation-grundlagen",
      tag: "pflege",
      themaPrimaer: "mobilisation",
      themenSekundaer: ["kontraktur-prophylaxe"],
      transition: "Die Theorie steht. Jetzt gehst du mit Herrn Petrov an die Bettkante — Schritt für Schritt.",
      contentC1: {
        title: "Mobilisation zur Bettkante — warum sie alles verändert",
        body: "",
        glossarBegriffe: ["Frühmobilisation", "Bettkante", "Orthostase", "Neuroplastizität"],
      },
      contentB1: {
        title: "An die Bett-Kante — warum ist das so wichtig?",
        body: "",
        glossarBegriffe: ["Frühmobilisation", "Bettkante", "Orthostase"],
      },
      inlineWissen: {
        bausteinRef: "mobilisation-bettkante-hemiparese",
        wiederbegegnung: {
          basisBausteinId: "mobilisation-bobath-konzept",
          basisPatient: "Herr Petrov",
          vertiefung:
            "Du kennst Bobath aus Phase 2 — Bewegungsangebot statt Übernahme. Jetzt die praktische Anwendung: Bettkante. Die DGG 2022 sagt: Frühmobilisation ab Tag 1 nach Schlaganfall verbessert das Outcome messbar.",
          vertiefungB1:
            "Du kennst Bobath aus Phase 2. Jetzt die Praxis: An die Bett-Kante. Ab Tag 1 nach Schlaganfall: Mobilisation verbessert die Erholung.",
        },
        storyAufhaenger:
          "Herr Petrov liegt seit 5 Tagen. Sein rechter Arm ist schlaff, sein rechtes Bein partiell. Er hat seit dem Schlaganfall nicht gesessen. Jetzt willst du ihn an die Bettkante bringen. Zehn Minuten sitzen — das klingt nach wenig. Aber für Herrn Petrov ist es ein Meilenstein.",
        storyAufhaengerB1:
          "Herr Petrov hat seit 5 Tagen nicht gesessen. Heute soll er zum ersten Mal an die Bett-Kante. 10 Minuten sitzen — das klingt wenig. Aber für ihn ist es sehr viel.",
        kerntext:
          "**Warum Bettkante?** Drei Effekte gleichzeitig:\n\n• **Atmung:** Vertikale Position verbessert das Atemvolumen. Die Lunge dehnt sich basale besser aus (weniger Atelektasen).\n\n• **Kreislauf:** Orthostase-Training. Nach 5 Tagen Bettruhe ist der Kreislauf dekonditioniert. Schrittweise Adaptation: Liegen → Sitzen → Stehen.\n\n• **Neuroplastizität:** Aufrechte Haltung aktiviert Gleichgewichtsrezeptoren und vestibuläre Bahnen. Das Gehirn lernt neue Kompensationswege.\n\n**Kreislauf-Vorkontrolle (Pflicht):**\n\n• RR + Puls im Liegen messen\n\n• RR + Puls im Sitzen messen (sofort nach Aufsetzen)\n\n• Aktiv fragen: Schwindel? Übelkeit? Schwarzwerden vor Augen?\n\n• Bei systolischem RR-Abfall > 20 mmHg oder Puls > 20/Min: vorsichtig zurücklegen\n\n**Bei Herrn Petrov:** Hypertonie (Ramipril 5 mg) = orthostatische Dysregulation realistisch. Deshalb: Nicht einfach aufsetzen, sondern messen-setzen-messen.\n\n**Ziel Tag 5:** 10-15 Minuten an der Bettkante, begleitet, kein allein Lassen.",
        kerntextB1:
          "**Warum an die Bett-Kante?** Drei Gründe:\n\n• **Atmung:** Sitzen ist besser als Liegen. Die Lunge kann sich mehr ausdehnen.\n\n• **Kreislauf:** Nach 5 Tagen im Bett ist der Kreislauf schwach. Er muss langsam wieder an \"aufrecht\" gewöhnt werden.\n\n• **Gehirn:** Sitzen aktiviert das Gleichgewicht. Das Gehirn lernt neue Wege.\n\n**Vorher prüfen:**\n\n• Blutdruck und Puls im Liegen messen.\n\n• Beim Sitzen: wieder messen.\n\n• Fragen: Schwindel? Übelkeit?\n\n• Wenn der Blutdruck stark fällt: zurücklegen.\n\n**Bei Herrn Petrov:** Er nimmt Blutdruck-Tabletten (Ramipril). Deshalb kann ihm beim Aufsetzen schwindelig werden.\n\n**Ziel:** 10-15 Minuten sitzen. Nie allein lassen.",
        faustregel: "Bettkante = Atmung + Kreislauf + Gehirn gleichzeitig trainieren. Immer mit Kreislauf-Vorkontrolle.",
        faustregelB1: "Sitzen an der Bett-Kante = gut für Lunge, Kreislauf und Gehirn. Immer vorher Blutdruck messen.",
        spektrum: [
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Post-OP Hüft-TEP, Erstmobilisation am 1. POT",
            kurzbeschreibung:
              "Yilmaz sitzt schon am 1. Tag nach der OP an der Bettkante — Physiotherapie ab Tag 1. Bei ihr: Belastungsgrenze des operierten Beins beachten (keine Adduktion, keine Innenrotation).",
          },
          {
            patientName: "Frau M.",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Parkinson + Pneumonie, Aufstehen vom Boden",
            kurzbeschreibung:
              "Bei Frau M. ging es nicht um Bettkante sondern um den Transfer vom Boden ins Bett (Kinästhetik). Anderes Setting, aber dasselbe Prinzip: Kreislauf prüfen, Schritt für Schritt, nie allein.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Adipositas BMI 38, Bariatrisches Equipment",
            kurzbeschreibung:
              "Mobilisation bei Schmidt: Schwerlast-Bett (Belastungsgrenze prüfen), Mobilisation mit 2-3 Helfern ab BMI > 35, Anti-Rutsch-Strümpfe. Die Bettkante hält, aber die Standard-Möbel haben Gewichtsgrenzen.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Du willst Herrn Petrov (Tag 5 nach Apoplex, Ramipril 5 mg) an die Bettkante bringen. Was misst du wann?",
          rueckseite:
            "Kreislauf-Vorkontrolle: RR + Puls im Liegen, RR + Puls im Sitzen (sofort nach Aufsetzen), aktiv nach Schwindel/Übelkeit fragen. Bei systolischem Abfall > 20 mmHg: zurücklegen. Ramipril = erhöhtes Orthostase-Risiko. Ziel: 10-15 Min begleitet. Spektrum: Yilmaz (1. POT, Belastungsgrenze), Frau M. (Kinästhetik-Transfer), Schmidt (Bariatrisches Equipment). Faustregel: **Bettkante = Atmung + Kreislauf + Gehirn gleichzeitig. Immer mit Kreislauf-Vorkontrolle.**",
        },
      },
    },

    // Step 4.9 — Dialog: Mobilisation Bettkante (4 Phasen)
    {
      stepId: "ce02-petrov-dur-09-mobilisation-bettkante",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DGG 2022 S1-Leitlinie Frühmobilisation",
        "Bobath B. 1948/1990",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-dur-mobilisation",
      tag: "pflege",
      contentC1: {
        title: "Mobilisation: Bettkante",
        body: "Du möchtest Herrn Petrov an die Bettkante bringen. Das ist der wichtigste Mobilisationsschritt des Tages — für die Atmung, für die Lage, für das Selbstgefühl.\n\nVor jeder Erstmobilisation gehört eine Kreislauf-Vorkontrolle dazu: Liege-RR und Puls messen, nach dem Aufrichten/Sitzen erneut RR und Puls, aktiv nach Schwindel/Übelkeit fragen. Herr Petrov ist Tag 5 nach Schlaganfall, hat Hypertonie und nimmt Ramipril 5 mg — orthostatische Dysregulation ist ein realistisches Risiko. (DGG 2022 Frühmobilisation; AWMF S3 Schlaganfall)",
        glossarBegriffe: [
          "Frühmobilisation",
          "Bettkante",
          "Orthostase",
          "Bobath-Konzept",
          "RR-Kontrolle",
        ],
      },
      contentB1: {
        title: "An die Bett-Kante",
        body: "Du möchtest Herrn Petrov an die Bett-Kante bringen. Das ist wichtig für die Atmung und für den Arm.\nVor dem Aufstehen misst du Blutdruck (RR) und Puls. Beim Sitzen misst du wieder. Du fragst aktiv nach Schwindel. Das ist wichtig: Herr Petrov hat Bluthochdruck und nimmt Ramipril. Beim ersten Aufrichten kann ihm schwindelig werden.",
        glossarBegriffe: ["Frühmobilisation", "Bettkante", "RR-Kontrolle"],
      },
      question: {
        fragetext:
          "Wähle bei jeder Phase die beste Handlung.",
        patientName: "Herr Petrov",
        dialogPhases: [
          {
            context:
              "Du möchtest Herrn Petrov ankündigen, dass ihr jetzt an die Bettkante geht. Was sagst du?",
            contextB1:
              "Du willst Herrn Petrov erklären, was jetzt kommt. Was sagst du?",
            speaker: "Du",
            options: [
              {
                text: "\"Herr Petrov, wir gehen gleich an die Bettkante. Vorher messe ich noch einmal Blutdruck und Puls im Liegen — und gleich wieder, wenn Sie sitzen. Wenn Ihnen schwindelig wird oder es zu viel wird, zeigen Sie es mir bitte mit Kopfschütteln.\" (RR liegend gemessen, dokumentiert; Patient hat Schwindel-Signal verstanden)",
                textB1:
                  "\"Herr Petrov, wir gehen gleich an die Bett-Kante. Vorher messe ich Blutdruck und Puls. Beim Sitzen messe ich wieder. Wenn Sie Schwindel haben — schütteln Sie den Kopf.\"",
                patientResponse:
                  "Herr Petrov nickt. Er schaut auf seine Beine. RR liegend: 138/82, Puls 76, regelmäßig.",
                patientResponseB1: "Herr Petrov nickt. Blutdruck im Liegen: 138/82. Puls: 76.",
                score: 3,
                feedback:
                  "Richtig: Ankündigen was kommt, Kreislauf-Vorkontrolle (RR + Puls liegend), Schwindel-Signal vereinbart, Kontrollmöglichkeit gegeben. Bei Tag-5-Schlaganfall mit Hypertonie + Ramipril ist die orthostatische Dysregulation ein realistisches Risiko — Vitalzeichen vor und nach der Mobilisation gehören zum Standard. (DGG 2022 Frühmobilisation)",
                feedbackB1:
                  "Sehr gut. Du erklärst was kommt. Du misst Blutdruck und Puls vorher. Du gibst Herrn Petrov ein Stopp-Signal. Das ist sicher.",
              },
              {
                text: "\"Wir heben Sie jetzt mal kurz an die Kante — kein Problem.\"",
                textB1:
                  "\"Wir heben Sie kurz an die Kante. Kein Problem.\"",
                patientResponse:
                  "Herr Petrov schaut unsicher. Er greift mit der linken Hand an die Bettkante.",
                patientResponseB1:
                  "Herr Petrov schaut unsicher. Er greift an die Kante.",
                score: 0,
                feedback:
                  "\"Heben\" ist falsch: Bobath bedeutet Bewegungsangebot machen, nicht übernehmen/heben. \"Kein Problem\" minimiert seine Anstrengung — für ihn ist es sehr anstrengend. Kein Grund genannt warum es wichtig ist.",
                feedbackB1:
                  "\"Heben\" ist falsch. Nach Bobath: Bewegung anbieten, nicht übernehmen. Außerdem: Sage warum es wichtig ist.",
              },
              {
                text: "\"Ich frage schnell Frau Wegner ob wir das machen sollen.\"",
                textB1:
                  "\"Ich frage erst Frau Wegner.\"",
                patientResponse:
                  "Herr Petrov schaut zur Decke.",
                patientResponseB1: "Herr Petrov wartet.",
                score: 1,
                feedback:
                  "Nicht nötig. Mobilisation zur Bettkante ist ein geplanter Teil der Frühschicht — du hast bereits die Priorisierung erledigt (Phase 3). Frau Wegner ist erreichbar, aber diese Maßnahme ist in deiner Kompetenz.",
                feedbackB1:
                  "Nicht nötig. Mobilisation war im Plan. Du kannst das allein entscheiden.",
              },
            ],
          },
          {
            context:
              "Du willst Herrn Petrov von der Rückenlage in die Sitzposition an der Bettkante bringen. Welches Vorgehen ist Bobath-gerecht?",
            contextB1:
              "Wie setzt du Herrn Petrov auf? Welcher Weg ist richtig?",
            speaker: "Du",
            options: [
              {
                text: "Drehen zur betroffenen Seite (Bobath), dann Beine über die Kante und mit linker Hand abstützen lassen — langsam, kein Zug am rechten Arm.",
                textB1:
                  "Drehen auf die Seite (Bobath), Beine über die Kante, linker Arm stützt — langsam, kein Zug am rechten Arm.",
                patientResponse:
                  "Herr Petrov dreht sich mit. Es daürt. Nach 2 Minuten sitzt er an der Kante.",
                patientResponseB1:
                  "Herr Petrov dreht sich mit. Langsam. Er sitzt an der Kante.",
                score: 3,
                feedback:
                  "Korrekt nach Bobath. Drehen über die betroffene Seite: Der Patient kann mitarbeiten, gesunde Seite übernimmt nicht. Kein Zug am rechten Arm: Schultergelenk eines hemiparetischen Patienten ist luxationsgefährdet — das ist ein Schmerz- und Verletzungsrisiko.",
                feedbackB1:
                  "Richtig nach Bobath. Drehen — nicht heben. Kein Zug am rechten Arm — das ist wichtig: Der Schulter-Gelenk kann verletzt werden.",
              },
              {
                text: "Ich hebe Herrn Petrov unter den Achseln auf — geht schneller.",
                textB1:
                  "Ich hebe ihn unter den Achseln hoch — geht schneller.",
                patientResponse:
                  "Herr Petrov zieht scharf die Luft ein.",
                patientResponseB1: "Herr Petrov zieht scharf die Luft ein.",
                score: 0,
                feedback:
                  "Gefährlich. Heben unter den Achseln bei Hemiparese: Subluxationsgefahr des Schultergelenks rechts (der betroffenen Seite). Das kann massive Schmerzen und daürhafte Schäden verursachen. Außerdem: Bobath-Prinzip = Bewegungsangebot, nicht Übernehmen.",
                feedbackB1:
                  "Sehr gefährlich. Bei Hemiparese: Das Schulter-Gelenk kann herausspringen (= Subluxation). Das verursacht starke Schmerzen. Immer nach Bobath drehen.",
              },
              {
                text: "Ich ziehe ihn an beiden Händen in die Sitzposition.",
                textB1:
                  "Ich ziehe ihn an beiden Händen hoch.",
                patientResponse:
                  "Herr Petrov winkt mit der linken Hand — Stopp-Geste.",
                patientResponseB1:
                  "Herr Petrov macht eine Stopp-Geste mit der linken Hand.",
                score: 0,
                feedback:
                  "Falsch und gefährlich. Zug an beiden Händen: Rechter Arm hat keinen Muskeltonus — kein gezielter Griff möglich, Zug führt zu Überstreckung des Ellenbogen- und Schultergelenks. Herr Petrov selbst reagiert richtig: Stopp-Signal.",
                feedbackB1:
                  "Falsch. Zug am rechten Arm ist gefährlich. Der Arm hat keine Kraft — er kann beim Zug verletzt werden.",
              },
            ],
          },
          {
            context:
              "Herr Petrov sitzt an der Bettkante. Seine Beine hängen herunter. Er hält mit der linken Hand die Kante. RR im Sitzen direkt nach dem Aufrichten: 132/80, Puls 84, regelmäßig — keine orthostatische Dysregulation. Nach 8 Minuten zeigt er den linken Daumen hoch. Du beurteilst: Was jetzt?",
            contextB1:
              "Herr Petrov sitzt 8 Minuten an der Bett-Kante. Du hast direkt nach dem Aufsitzen RR und Puls gemessen: 132/80, Puls 84 — alles stabil. Er zeigt den Daumen hoch. Was machst du jetzt?",
            speaker: "Du",
            options: [
              {
                text: "\"Super! Noch 5 Minuten — Sie schaffen das.\" (Blickkontakt, Hand kurz an die linke (gesunde) Schulter)",
                textB1:
                  "\"Noch 5 Minuten — das schaffen Sie!\" (Augenkontakt, Hand an die linke Schulter — die gesunde Seite)",
                patientResponse:
                  "Herr Petrov nickt. Er sitzt weiter.",
                patientResponseB1:
                  "Herr Petrov nickt. Er sitzt weiter.",
                score: 3,
                feedback:
                  "Richtig. Daumen hoch = er ist noch okay. 5 Minuten mehr sind realistisch. Positive Verstärkung + Kontakt an der linken (gesunden) Schulter = Sicherheit und Ermutigung. Wichtig: Niemals an die rechte (betroffene) Schulter fassen — sie ist subluxationsgefährdet (kein Tonus, hängender Arm). Nach Bobath/DNQP Mobilität wird die betroffene Schulter nur abgestützt unter Kontrolle berührt, nie zur Begrüßung oder Ermutigung.",
                feedbackB1:
                  "Gut. Er signalisiert: Es geht. Dann sind 5 Minuten mehr richtig. Wichtig: Hand an die linke (gesunde) Schulter — nicht an die rechte. Die rechte Schulter kann verletzt werden (= Subluxation).",
              },
              {
                text: "Sofort zurück ins Bett — 8 Minuten ist genug für Tag 1.",
                textB1:
                  "Zurück ins Bett — 8 Minuten reichen.",
                patientResponse:
                  "Herr Petrov schüttelt den Kopf. Er sitzt weiter.",
                patientResponseB1:
                  "Herr Petrov schüttelt den Kopf.",
                score: 2,
                feedback:
                  "Pflegerisch sicher — 8 Minuten ist bei Erstmobilisation Tag 5 ein gutes Ergebnis und bei Vitalzeichen-Auffälligkeiten (RR-Abfall, Schwindel, Übelkeit, Tachykardie) wäre ein konservativer Abbruch absolut richtig. Hier sind die Vitalzeichen aber stabil und Herr Petrov zeigt aktiv Daumen hoch — er will noch. Sein autonomer Wunsch zählt. Score 3 wäre: weiter sitzen lassen mit weiterer Vitalzeichen-Kontrolle. Score 2 hier, weil sicher, aber Patientenautonomie nicht voll genutzt.",
                feedbackB1:
                  "Sicher gehandelt. Bei Schwindel oder schlechtem Blutdruck wäre das richtig. Hier sind die Werte stabil — er zeigt Daumen hoch. Lass ihn bestimmen wenn es sicher ist. Score 3 wäre: weiter sitzen mit weiterer Kontrolle.",
              },
              {
                text: "Ich lasse ihn allein — er sitzt ja gut.",
                textB1:
                  "Ich gehe kurz — er sitzt ja gut.",
                patientResponse:
                  "Herr Petrov schaut dir nach.",
                patientResponseB1: "Herr Petrov schaut dir nach.",
                score: 0,
                feedback:
                  "Gefährlich. Sturzgefahr! Ein hemiparetischer Patient an der Bettkante ohne Begleitung: Wenn er das Gleichgewicht verliert oder orthostatische Dysregulation einsetzt, kann er ohne Gegenwehr fallen. Mobilisation = immer begleitet, nie allein lassen.",
                feedbackB1:
                  "Gefährlich! Herr Petrov darf nicht alleine an der Kante sitzen. Sturzgefahr. Immer bei ihm bleiben.",
              },
            ],
          },
          {
            context:
              "Herr Petrov hat insgesamt 13 Minuten an der Bettkante gesessen. Er signalisiert: genug. Du bringst ihn zurück in die Rückenlage.",
            contextB1:
              "Herr Petrov hat 13 Minuten gesessen. Er will zurück. Du legst ihn wieder hin.",
            speaker: "Du",
            options: [
              {
                text: "\"Sehr gut, Herr Petrov. 13 Minuten — das ist mehr als das Ziel. Ich lege Sie jetzt wieder hin und lagere Sie nach Bobath.\" (Dokumentation im Kopf: Ziel übertroffen, RR/Puls und pflegerische Atembeobachtung nach Hinlegen prüfen)",
                textB1:
                  "\"13 Minuten — sehr gut! Ich lege Sie jetzt hin und lagere Sie.\" (Notiz: Ziel übertroffen, danach Blutdruck, Puls und Atmung prüfen)",
                patientResponse:
                  "Herr Petrov nickt. Er lehnt sich leicht zu dir.",
                patientResponseB1: "Herr Petrov nickt.",
                score: 3,
                feedback:
                  "Perfekt. Lob konkret (13 Minuten, Zielübertreffen), nächsten Schritt ankündigen (Hinlegen + Bobath-Lagerung), Evaluation im Kopf (RR/Puls nach Hinlegen, pflegerische Atembeobachtung — Atemfreqünz, hörbare Geräusche, Atemtiefe). Auskultation mit Stethoskop ist ärztliche Aufgabe, bei Auffälligkeiten veranlasst du sie. Das ist professionelle Pflege.",
                feedbackB1:
                  "Sehr gut. Lob konkret. Nächsten Schritt ankündigen. Danach Blutdruck, Puls und Atmung prüfen — keine Auskultation mit Stethoskop, das macht der Arzt.",
              },
              {
                text: "\"Super! Können wir das morgen nochmal machen?\"",
                textB1:
                  "\"Gut! Morgen machen wir das nochmal?\"",
                patientResponse:
                  "Herr Petrov nickt, schaut zur Decke.",
                patientResponseB1: "Herr Petrov nickt.",
                score: 1,
                feedback:
                  "Gut gemeint — aber du springst zu schnell in die Zukunft. Morgen ist Spätdienst, andere Kollegen. Und: Du hast das Hinlegen + die Bobath-Lagerung noch nicht angekündigt. Erst Gegenwart abschließen, dann Ausblick.",
                feedbackB1:
                  "Morgen ist gut — aber erst: Jetzt hinlegen und lagern. Das haben wir noch nicht gemacht.",
              },
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 55,
};

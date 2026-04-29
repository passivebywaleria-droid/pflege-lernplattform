// CE-02 Situation Petrov — Phase 1: Informieren
// Steps: 5 · Bloom: B2-B3 · Zeit: ~20-30 Min
// Quelle: phase-informieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-petrov-informieren",
  phase: "informieren",
  titel: "Informieren & Vorbereiten",
  titelB1: "Herrn Petrov kennenlernen",
  kontext:
    "Es ist 07:15 Uhr, Frühschicht auf der neurologischen Normalstation. Frau Wegner, deine Praxisanleiterin, bringt dich vor Zimmer 112 zum Stehen. Sie flüstert: \"Viktor Petrov, 58, gestern von der Stroke Unit verlegt. Ischämischer Apoplex links, Hemiparese rechts, Dysphagie, leichte Aphasie. Hat einen Blasenkatheter. Frühschicht heißt: Körperpflege, Mobilisation, Frühstück anreichen, Kathetercheck. Er versteht alles, kann aber kaum sprechen. Ich bin nebenan — du machst das.\" Du nimmst die Patientenakte und liest kurz. Fünf Tage nach dem Schlaganfall. Ein 58-jähriger Ingenieur.",
  kontextB1:
    "Es ist 07:15 Uhr. Du bist in der Früh-Schicht. Frau Wegner ist deine Praxisanleiterin. Sie bringt dich vor Zimmer 112. Sie sagt leise: \"Viktor Petrov, 58 Jahre. Er hatte einen Schlaganfall (= Apoplex). Das war vor 5 Tagen. Sein rechter Arm und sein rechtes Bein sind schwach (= Hemiparese). Er kann schlecht schlucken (= Dysphagie). Er hat Schwierigkeiten beim Sprechen (= Aphasie). Er hat einen Katheter in der Blase (= BVK). Er versteht alles. Aber er kann kaum antworten. Ich bin nebenan. Du machst das.\" Du nimmst die Akte von Herrn Petrov und liest.",
  kernSteps: [
    // Step 1.1 — SBAR-Akte (text, scenario)
    {
      stepId: "ce02-petrov-info-01-akte-sichten",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["AWMF S3-Leitlinie Schlaganfall (021-023)", "§ 4 PflBG"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Pflegeschüler hält Patientenakte, blickt auf Stationsflur, Frühschicht-Atmosphäre",
      bildhinweis:
        "Hospital ward morning shift, nursing student holding patient chart, soft morning light through corridor windows, calm professional atmosphere, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Die Akte — SBAR-Übergabe",
        body: "Du hältst die Akte in der Hand. Frau Wegner hat dir eine SBAR-Kurzübergabe gegeben.\n\n**S** — Situation: Herr Petrov, 58, ischämischer Apoplex Tag 5. Gestern von Stroke Unit verlegt.\n**B** — Background: Hemiparese rechts (Arm funktionell komplett ausgefallen, Bein partiell). Dysphagie Grad 2 nach GUSS: breiige Konsistenz sicher, Dünnflüssiges aspirationsgefährdet. Aphasie: versteht alles, spricht kaum. BVK seit Tag 1.\n**A** — Assessment: Stabile Vitalzeichen, keine Dekubituszeichen. Orale Ernährung mit angedicktener Flüssigkeit (IDDSI Level 2) + Kostform B möglich. Pneumonieprophylaxe aktiv.\n**R** — Recommendation: Körperpflege nach Bobath, Mobilisation (Bettkante anstreben), Frühstück anreichen, Kathetercheck, Vitalzeichen.\n\nSBAR macht Übergaben vollständig und klar — jede Pflegekraft weltweit liest dasselbe heraus.",
        fallbezug:
          "Herr Petrov, 58, Ischämischer Apoplex Tag 5, Hemiparese rechts, Dysphagie, Aphasie, BVK. Du übernimmst ihn für die Frühschicht.",
        glossarBegriffe: ["SBAR", "Apoplex", "Hemiparese", "Dysphagie", "BVK"],
      },
      contentB1: {
        title: "Die Akte lesen",
        body: "Du liest die Akte von Herrn Petrov. Das ist die Situation (= S):\nHerr Petrov, 58 Jahre alt. Er hatte einen Schlaganfall. Das war vor 5 Tagen.\nDas ist der Hintergrund (= B):\nRechter Arm: bewegt sich nicht. Rechtes Bein: nur ein wenig bewegbar.\nSchlucken ist schwach (= Dysphagie Grad 2). Sprechen ist schwer (= Aphasie).\nEr hat einen Blasen-Katheter (= BVK).\nDas ist dein Auftrag (= A + R):\nDu machst die Körper-Pflege. Du hilfst beim Frühstück. Du kontrollierst den Katheter.\nDu misst die Vitalzeichen (= Blutdruck, Puls, Temperatur, Atmung).",
        fallbezug:
          "Herr Petrov ist 58. Er hatte vor 5 Tagen einen Schlaganfall. Du betreust ihn in der Früh-Schicht.",
        glossarBegriffe: ["Schlaganfall", "Hemiparese", "Dysphagie", "BVK"],
      },
    },

    // Step 1.1b — Inline-Wissen: Blasenverweilkatheter (BVK)
    // Schüler hat in Step 1.1 gelesen: "BVK seit Tag 1". Bevor er den Pflegeprozess einordnet,
    // soll er wissen: Was ist ein BVK, warum liegt er, und warum zählt jeder Tag?
    {
      stepId: "ce02-petrov-info-01b-bvk-grundlagen",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 1,
      kompetenzbereich: "I.1",
      quellen: [
        "KRINKO 2015 — Prävention katheter-assoziierter Harnwegsinfektionen",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-info-bvk-grundlagen",
      tag: "pflege",
      themaPrimaer: "harnausscheidung",
      themenSekundaer: ["blasenkatheter"],
      transition: "Du weißt jetzt was ein BVK ist und warum jeder Tag zählt. Zurück zum Pflegeprozess.",
      contentC1: {
        title: "Blasenverweilkatheter (BVK) — warum jeder Tag zählt",
        body: "",
        glossarBegriffe: ["BVK", "CAUTI", "Katheter", "KRINKO"],
      },
      contentB1: {
        title: "Was ist ein Blasen-Katheter?",
        body: "",
        glossarBegriffe: ["BVK", "Katheter"],
      },
      inlineWissen: {
        bausteinRef: "harnausscheidung-bvk-grundlagen",
        storyAufhaenger:
          "In der Akte steht: \"BVK seit Tag 1.\" Fünf Tage liegt der Katheter jetzt. Herr Petrov kann nicht aufstehen, um zur Toilette zu gehen — deshalb leitet ein Schlauch den Urin direkt aus der Blase in einen Beutel. Klingt praktisch. Aber jeder Tag mit Katheter ist ein Tag mit Risiko.",
        storyAufhaengerB1:
          "In der Akte steht: \"BVK seit Tag 1.\" BVK = Blasen-Verweil-Katheter. Das ist ein dünner Schlauch. Er geht durch die Harnröhre in die Blase. Der Urin fließt in einen Beutel. Herr Petrov hat den Katheter seit 5 Tagen. Warum ist das wichtig?",
        kerntext:
          "**Was ist ein BVK?** Ein dünner Silikonschlauch (hier: Ch 16) wird über die Harnröhre in die Blase eingeführt. Ein kleiner Ballon hält ihn in der Blase fest. Der Urin fließt in ein geschlossenes System mit Auffangbeutel.\n\n**Warum liegt er bei Herrn Petrov?** Tag 1-5 nach Schlaganfall: Hemiparese macht den Toilettengang unmöglich, Immobilität erfordert kontinuierliche Bilanzierung.\n\n**Das Risiko:** Jeder Tag mit BVK erhöht die Wahrscheinlichkeit einer **CAUTI** (katheter-assoziierter Harnwegsinfekt). Die KRINKO 2015 fordert: **Tägliche Indikationsprüfung** und Entfernung so früh wie möglich.\n\n• Tag 1-3: Infektionsrate ca. 3-5 %\n• Tag 5-7: Infektionsrate steigt auf 10-15 %\n• Ab Tag 14: Bakteriurie bei fast allen Patienten\n\n**Pflege-Aufgabe:** Beobachten (Urinfarbe, Menge, Eintrittsstelle), Beutel korrekt hängen lassen, Hygiene bei Manipulation, und vor allem: **aktiv fragen — braucht er den Katheter noch?**",
        kerntextB1:
          "**Was ist ein BVK?** Ein dünner Schlauch geht durch die Harnröhre in die Blase. Ein kleiner Ballon hält ihn fest. Der Urin fließt in einen Beutel.\n\n**Warum hat Herr Petrov einen?** Er kann nicht aufstehen. Er kann nicht zur Toilette gehen. Der Katheter leitet den Urin ab.\n\n**Das Problem:** Jeder Tag mit Katheter erhöht das Risiko für eine **Harnwegs-Infektion**. Das heißt CAUTI.\n\n• Nach 5 Tagen: 10-15 von 100 Patienten bekommen eine Infektion.\n\n**Deine Aufgabe als Pflege:** Urin-Farbe prüfen. Beutel richtig hängen lassen. Und: Jeden Tag fragen — braucht er den Katheter noch?",
        faustregel: "Jeder Tag mit Katheter ist ein Tag zu viel — tägliche Indikationsprüfung ist Pflege-Pflicht.",
        faustregelB1: "Jeder Tag mit Katheter erhöht das Infektions-Risiko. Deshalb: Jeden Tag prüfen ob er noch nötig ist.",
        spektrum: [
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Post-OP Hüft-TEP, kurzfristige Immobilität",
            kurzbeschreibung:
              "BVK nur 24-48 h post-OP bis Erstmobilisation. Dann sofort Entfernung — sie kann zur Toilette sobald sie steht.",
          },
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz, zieht am Katheter",
            kurzbeschreibung:
              "Bauer versteht nicht warum der Schlauch da ist. Er zieht daran — Verletzungsgefahr. Hier ist der BVK ein eigenes Risiko, nicht nur eine Hilfe.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Ambulant, intermittierender Einmalkatheter",
            kurzbeschreibung:
              "Bei Kovac kein Dauerkatheter — sie verwendet zu Hause einen intermittierenden Einmalkatheter (ISK). Weniger Infektionsrisiko, aber Anleitung zur Selbstkatheterisierung nötig.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Adipositas BMI 38, erschwerte Katheter-Pflege",
            kurzbeschreibung:
              "Katheter-Pflege bei Adipositas: eingeschränkte Sicht auf die Eintrittsstelle, Hautfalten als Feuchtigkeitsfalle, erhöhtes Infektionsrisiko durch Schwitzen.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Herr Petrovs BVK liegt seit 5 Tagen. Der Arzt hat Re-Evaluation für Tag 14 angeordnet. Ist das ausreichend?",
          rueckseite:
            "Nein. KRINKO 2015 fordert tägliche Indikationsprüfung, nicht festes 14-Tage-Intervall. Infektionsrate steigt mit jedem Tag: Tag 5-7 ca. 10-15 %. Pflege-Pflicht: aktiv beim Arzt nachfragen ob der BVK noch nötig ist. Spektrum: Yilmaz (24-48 h post-OP), Bauer (Demenz, zieht am Katheter), Kovac (ISK ambulant), Schmidt (Adipositas-Hygiene). Faustregel: **Jeder Tag mit Katheter ist ein Tag zu viel.**",
        },
      },
    },

    // Step 1.2 — MC Pflegeprozess-Einordnung
    {
      stepId: "ce02-petrov-info-02-pflegeprozess-check",
      phase: 1,
      stepType: "mc",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981 — Pflegeprozess"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-info-pflegeprozess",
      tag: "pflege",
      contentC1: {
        title: "Pflegeprozess einordnen",
        body: "Bevor du das Zimmer betrittst: Du hast die Akte gelesen, Frau Wegner hat die Übergabe gemacht. In welchem Schritt des Pflegeprozesses befindest du dich gerade?",
        glossarBegriffe: ["Pflegeprozess"],
      },
      contentB1: {
        title: "Wo bist du gerade im Pflege-Prozess?",
        body: "Du hast die Akte gelesen. Frau Wegner hat gesprochen. In welchem Schritt bist du gerade?",
        glossarBegriffe: ["Pflegeprozess"],
      },
      transition: "Du hast die Akte gelesen. Frau Wegner hat SBAR-Struktur geliefert. Aber ein Begriff sticht heraus: BVK. Was steckt dahinter?",
      question: {
        fragetext:
          "Bevor du das Zimmer betrittst: In welchem Schritt des Pflegeprozesses befindest du dich gerade?",
        optionen: [
          {
            text: "Planen — weil du die Maßnahmen schon kennst",
            isCorrect: false,
            explanation:
              "Planen kommt nach dem Einschätzen. Du hast noch nicht selbst beobachtet, du kennst nur die Übergabe. Erst sammeln, dann einordnen, dann planen.",
            explanationB1:
              "Planen kommt später. Zuerst sammelst du Informationen. Dann planst du.",
          },
          {
            text: "Informationssammlung — weil du dir ein Bild machst, bevor du handelst",
            isCorrect: true,
            explanation:
              "Genau. Du liest die Akte, hörst die Übergabe, machst dir ein erstes Bild — das ist Schritt 1 des Pflegeprozesses nach Fiechter/Meier (1981): Informationssammlung. Handeln kommt erst danach.",
            explanationB1:
              "Richtig. Du sammelst zuerst alle Informationen. Dann planst du. Handeln ohne Informationen ist gefährlich.",
          },
          {
            text: "Durchführen — weil die Schicht beginnt und du anfangen musst",
            isCorrect: false,
            explanation:
              "Handeln ohne Informationssammlung ist ein häufiger Fehler — die Priorisierung fehlt dann. Du weißt noch nicht genug über Herrn Petrov um sicher zu handeln.",
            explanationB1:
              "Nein. Erst sammeln, dann handeln. Handeln ohne Wissen ist nicht sicher.",
          },
          {
            text: "Evaluieren — weil du den gestrigen Tag nachbereitest",
            isCorrect: false,
            explanation:
              "Evaluieren passiert am Ende — wenn du prüfst ob deine Ziele erreicht wurden. Am Anfang der Schicht stehst du noch ganz am Anfang des Pflegeprozesses.",
            explanationB1:
              "Evaluieren ist der letzte Schritt. Das machst du am Ende der Schicht.",
          },
        ],
      },
    },

    // Step 1.3 — Flipcard Schlaganfall-Akutwissen (3 Karten)
    {
      stepId: "ce02-petrov-info-03-schlaganfall-akutwissen",
      phase: 1,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "GUSS (Trapl M. et al. 2007, Stroke 38:2948-2952)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-info-schlaganfall-basics",
      tag: "krankheitslehre",
      contentC1: {
        title: "3 Karten — Orientierungswissen",
        body: "Kurze Flipcards als Basis für die Situation. Drehe jede Karte um — sie geben dir das nötige Hintergrundwissen für die nächsten Stunden mit Herrn Petrov.",
        glossarBegriffe: [
          "Apoplex",
          "Hemiparese",
          "Dysphagie",
          "MCA",
          "GUSS",
        ],
      },
      contentB1: {
        title: "3 Karten zum Lernen",
        body: "Drehe jede Karte um. Du lernst das Wichtigste über Herrn Petrovs Schlaganfall.",
        glossarBegriffe: ["Schlaganfall", "Hemiparese", "Dysphagie"],
      },
      question: {
        fragetext: "Drehe jede Karte um und lies die Rückseite.",
        flipcard: {
          instruction: "Karte umdrehen und Erklärung lesen.",
          cards: [
            {
              front: "Was ist ein ischämischer Apoplex?",
              back: "Unterbrechung der Blutversorgung eines Hirnbereichs durch Gefäßverschluss. Beim linken MCA-Infarkt: rechte Körperhälfte betroffen + Sprachzentrum (Broca-Areal). Akuttherapie: i.v.-Lyse bis 4,5 Stunden nach Symptombeginn. (AWMF S3 Schlaganfall)",
              backB1:
                "Ein Blutgefäß im Gehirn ist verstopft. Das Blut kommt nicht mehr durch. Ein Teil des Gehirns bekommt keinen Sauerstoff. Er stirbt ab. Bei Herrn Petrov: Die linke Seite des Gehirns ist betroffen. Deshalb funktioniert die rechte Körperseite nicht gut. Das Sprachzentrum liegt auch links. Deshalb kann er kaum sprechen.",
              category: "krankheitslehre",
            },
            {
              front: "Was ist Hemiparese?",
              back: "Halbseitige Muskelschwäche (nicht vollständige Lähmung = Plegie). Hemi = halb, Parese = Schwäche. Bei Herrn Petrov: Arm funktionell komplett ausgefallen (kein gezielter Griff), Bein partiell (Anheben möglich, Belasten kaum, Fuß-Dorsalflexion schwach). (DNQP Mobilität 2020)",
              backB1:
                "Hemi = halb. Parese = Schwäche. Herr Petrovs rechter Arm: Er kann ihn nicht bewegen. Herr Petrovs rechtes Bein: Er kann es ein wenig heben. Aber er kann nicht darauf stehen.",
              category: "krankheitslehre",
            },
            {
              front: "Was ist Dysphagie — und was bedeutet Grad 2 bei Herrn Petrov?",
              back: "Schluckstörung. GUSS-Assessment (Trapl et al. 2007) klassifiziert Schweregrade. Grad 2: breiige Konsistenz sicher schluckbar. Dünnflüssige Getränke: Husten + feuchte Stimme nach dem Schlucken → Aspirationsgefahr. Ernährung: IDDSI Level 2 (Flüssigkeiten) + Kostform B (weich, zerteilbar). (IDDSI 2019; GUSS Trapl 2007)",
              backB1:
                "Dysphagie bedeutet: Schlucken ist schwierig. Herr Petrov hat Dysphagie Grad 2 (nach GUSS-Test). Er schluckt breies Essen sicher. Aber dünne Flüssigkeit ist gefährlich. Sie kann in die Lunge kommen (= Aspiration).",
              category: "krankheitslehre",
            },
          ],
        },
      },
    },

    // Step 1.3b — Inline-Wissen: Dysphagie & IDDSI-Stufen
    // Schüler hat in Flipcard 1.3 die Grunddefinition gehört. Bevor er den Dialog führt
    // (Essen/Trinken wird thematisiert), vertieft dieser Baustein die IDDSI-Systematik.
    {
      stepId: "ce02-petrov-info-03b-dysphagie-iddsi",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "II.1",
      quellen: [
        "IDDSI 2019 — International Dysphagia Diet Standardisation Initiative",
        "DGG/DGN 2020 — Neurogene Dysphagie",
        "GUSS (Trapl M. et al. 2007, Stroke 38:2948-2952)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-info-dysphagie-iddsi",
      tag: "krankheitslehre",
      themaPrimaer: "enterale-ernaehrung",
      themenSekundaer: ["essen-anreichen", "mundpflege"],
      transition: "Angedickt, breiig, püriert — du weißt jetzt was Herr Petrov schlucken darf. Und was nicht.",
      contentC1: {
        title: "Dysphagie & IDDSI — was darf Herr Petrov schlucken?",
        body: "",
        glossarBegriffe: ["IDDSI", "Dysphagie", "Aspiration", "Konsistenz"],
      },
      contentB1: {
        title: "IDDSI — Welche Flüssigkeit ist sicher?",
        body: "",
        glossarBegriffe: ["IDDSI", "Dysphagie", "Aspiration"],
      },
      inlineWissen: {
        bausteinRef: "enterale-ernaehrung-iddsi-stufen",
        storyAufhaenger:
          "Auf dem Nachttisch von Herrn Petrov steht eine Flasche mit angedickt aussehender Flüssigkeit. Daneben eine normale Wasserflasche. Welche darf er trinken? Das IDDSI-Framework gibt weltweit die Antwort — und du musst es kennen, bevor du ihm das Frühstück reichst.",
        storyAufhaengerB1:
          "Auf dem Nachttisch stehen zwei Flaschen: Eine mit dicker Flüssigkeit, eine mit normalem Wasser. Welche ist sicher für Herrn Petrov? Dafür gibt es das IDDSI-System.",
        kerntext:
          "**IDDSI** (International Dysphagia Diet Standardisation Initiative, 2019) ist der internationale Standard für Konsistenzstufen bei Schluckstörungen.\n\n**Flüssigkeiten — 5 Stufen:**\n\n• **Level 0** — Dünn (Wasser, Tee, Saft). Bei Herrn Petrov: **verboten**.\n\n• **Level 1** — Leicht verdickt (fließt schneller als Level 2).\n\n• **Level 2** — Mäßig verdickt. **Herrn Petrovs Verordnung.** Fließt langsam vom Löffel.\n\n• **Level 3** — Stark verdickt. Fällt in Klumpen vom Löffel.\n\n• **Level 4** — Extrem verdickt / püriert.\n\n**Kostformen:** Dazu gibt es IDDSI-Stufen 3-7 für Nahrung (püriert bis normal). Herr Petrov: Kostform B = weich, zerteilbar.\n\n**Warum ist das so wichtig?** Level 0 (dünne Flüssigkeit) rauscht schnell am Kehldeckel vorbei. Bei Dysphagie Grad 2 schließt der Kehldeckel zu langsam — die Flüssigkeit gelangt in die Luftröhre. Das heißt **Aspiration**. Eingedickte Flüssigkeit fließt langsamer, gibt dem Kehldeckel Zeit.\n\n**GUSS-Assessment** (Trapl 2007) bestimmt den Grad. Es wird durch geschultes Personal durchgeführt — nicht eigenständig wiederholt.",
        kerntextB1:
          "**IDDSI** ist ein internationales System. Es sagt: Welche Flüssigkeit ist sicher bei Schluck-Störungen?\n\n**5 Stufen für Flüssigkeiten:**\n\n• **Level 0** = dünn (Wasser, Tee). **Verboten** für Herrn Petrov.\n\n• **Level 2** = mäßig verdickt. **Das darf Herr Petrov trinken.** Es fließt langsam vom Löffel.\n\n• **Level 3** = stark verdickt. Es fällt in Klumpen.\n\n**Warum kein normales Wasser?** Dünne Flüssigkeit fließt sehr schnell. Der Kehldeckel schließt bei Dysphagie zu langsam. Die Flüssigkeit kommt in die Lunge. Das heißt **Aspiration**.\n\nEingedickte Flüssigkeit fließt langsamer. Der Kehldeckel hat Zeit zu schließen.",
        faustregel: "Dysphagie Grad 2 = IDDSI Level 2. Dünnflüssig ist der Feind — angedickt ist der Schutz.",
        faustregelB1: "Dysphagie Grad 2 = dünne Flüssigkeit verboten. Angedickte Flüssigkeit ist sicher.",
        spektrum: [
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Adipositas + Mangelernährung",
            kurzbeschreibung:
              "Schmidt hat keine Dysphagie — aber ein anderes Ernährungsproblem: trotz BMI 38 ist sie mangelernährt (Proteinmangel). Andere Ursache, gleiche Überwachungspflicht.",
          },
          {
            patientName: "Herr Nguyen",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Stoma, enterale Ernährung post-OP",
            kurzbeschreibung:
              "Bei Nguyen geht das Essen nicht über den Mund — er wird nach der Stoma-OP vorübergehend parenteral ernährt. Ganz andere Zugangswege, aber dieselbe Frage: Bekommt er genug Kalorien?",
          },
          {
            patientName: "Emilia",
            situationsId: "ls-emilia-saeugling",
            hauptfaktor: "Säugling mit Bronchiolitis, Trinkschwäche",
            kurzbeschreibung:
              "Emilia trinkt zu wenig wegen Atemnot (Bronchiolitis). Keine Dysphagie im klassischen Sinn — aber ein ähnliches Problem: orale Aufnahme reicht nicht, nasogastrale Sonde als Brücke.",
          },
        ],
        sonstBox:
          "IDDSI ersetzt seit 2019 alle nationalen Systeme (vorher: in DE die \"Bremer Skala\", in UK die NDD). Vorteile: einheitliche Farb-Codierung, international verständlich, gabeltaugliche Prüfmethoden (\"Fork Drip Test\", \"Spoon Tilt Test\"). Bei PEG-Patienten: IDDSI gilt auch für die Bolusgabe über die Sonde.",
        sonstBoxB1:
          "IDDSI gibt es seit 2019. Vorher hatte jedes Land eigene Regeln. Jetzt gibt es ein einheitliches System mit Farben. Die Konsistenz kann man mit einem Löffel oder einer Gabel testen (\"Löffel-Test\", \"Gabel-Test\").",
        karteikarte: {
          vorderseite:
            "Herr Petrov hat Dysphagie Grad 2 nach GUSS. Natalya bringt normalen Tee mit (Level 0). Was ist das Problem?",
          rueckseite:
            "Level 0 (dünnflüssig) ist bei Dysphagie Grad 2 aspirationsgefährdet. Herr Petrov darf nur IDDSI Level 2 (mäßig verdickt) trinken. Dünne Flüssigkeit rauscht zu schnell am verzögert schließenden Kehldeckel vorbei. Natalya muss über IDDSI informiert und einbezogen werden. Spektrum: Schmidt (Mangelernährung trotz Adipositas), Nguyen (parenterale Ernährung post-OP-Stoma), Emilia (Trinkschwäche Bronchiolitis). Faustregel: **Dysphagie Grad 2 = IDDSI Level 2. Dünnflüssig ist der Feind.**",
        },
      },
    },

    // Step 1.4 — Dialog: Zimmer betreten (3 Phasen)
    {
      stepId: "ce02-petrov-info-04-zimmer-betreten",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP Mobilität 2020", "Bobath B. 1990 Adult Hemiplegia"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-info-dialog",
      tag: "pflege",
      contentC1: {
        title: "Das Zimmer betreten",
        body: "Du betrittst das Zimmer. Herr Petrov liegt leicht aufgerichtet (Oberkörper ca. 30°), schaut dich an. Du stellst dich vor. Er hat Aphasie — versteht alles, spricht kaum. Jede Formulierung zählt.",
        glossarBegriffe: ["Aphasie", "Kommunikation"],
      },
      contentB1: {
        title: "Ins Zimmer gehen",
        body: "Du gehst ins Zimmer. Herr Petrov ist wach. Er schaut dich an. Er hat Aphasie — er versteht alles, aber er kann kaum sprechen. Wie stellst du dich vor?",
        glossarBegriffe: ["Aphasie"],
      },
      question: {
        fragetext: "Wähle deine Reaktion.",
        patientName: "Herr Petrov",
        dialogPhases: [
          {
            context:
              "Du betrittst das Zimmer. Das Licht ist bereits an. Herr Petrov liegt leicht aufgerichtet, schaut dich ruhig an. Du stellst dich vor.",
            contextB1:
              "Du gehst ins Zimmer. Herr Petrov ist wach. Er schaut dich an. Wie stellst du dich vor?",
            speaker: "Du",
            options: [
              {
                text: "\"Guten Morgen, Herr Petrov. Ich bin [Name], Pflegeschüler. Frau Wegner schickt mich — wir machen heute zusammen Ihre Morgenpflege.\" (Augenkontakt, langsam gesprochen)",
                textB1:
                  "\"Guten Morgen, Herr Petrov. Ich bin [Name], Pflegeschüler. Frau Wegner schickt mich. Wir machen heute zusammen Ihre Morgenpflege.\"",
                patientResponse:
                  "Herr Petrov nickt. Er schaut dich ruhig an. Dann, nach einer Pause: \"Morgen... besser?\"",
                patientResponseB1:
                  "Herr Petrov nickt. Er schaut dich an. Nach kurzer Pause sagt er: \"Morgen... besser?\"",
                score: 3,
                feedback:
                  "Genau richtig. Kurze, klare Sätze — essenziell bei Aphasie. Du sagst wer du bist, warum du hier bist und was kommt. Herr Petrov kann sich orientieren. Langsam sprechen + Augenkontakt = Respekt für seine eingeschränkte Kommunikation.",
                feedbackB1:
                  "Sehr gut. Kurze Sätze. Du sagst wer du bist und was kommt. Das ist wichtig bei Aphasie. Herr Petrov kann alles verstehen — er braucht klare, kurze Sätze.",
              },
              {
                text: "\"Hallo, ich bin neu hier, also keine Sorge, ich mach das schon.\"",
                textB1:
                  "\"Hallo. Ich bin neu, aber keine Sorge, das wird schon.\"",
                patientResponse:
                  "Herr Petrov schaut dich kurz an, dann zur Decke. Keine Reaktion.",
                patientResponseB1:
                  "Herr Petrov schaut kurz, dann zur Decke. Er sagt nichts.",
                score: 1,
                feedback:
                  "Zu beiläufig. Du gibst keine Orientierung: Wer bist du? Was kommt jetzt? Warum bist du hier? Für einen Aphasie-Patienten ist Struktur besonders wichtig — er kann nachfragen, aber nicht so wie andere Patienten es könnten.",
                feedbackB1:
                  "Nicht gut. Du sagst nicht: Wer bist du? Was kommt jetzt? Herr Petrov braucht kurze, klare Informationen. Er kann nicht gut nachfragen.",
              },
              {
                text: "\"Guten Morgen! Können Sie mir sagen, wie es Ihnen heute geht?\"",
                textB1:
                  "\"Guten Morgen! Wie geht es Ihnen heute?\"",
                patientResponse:
                  "Herr Petrov öffnet den Mund. Schließt ihn wieder. Greift frustriert an sein rechtes Bein.",
                patientResponseB1:
                  "Herr Petrov öffnet den Mund. Schließt ihn. Er greift an sein Bein — er ist frustriert.",
                score: 1,
                feedback:
                  "Sozial üblich, aber bei Broca-Aphasie ungeeignet. \"Wie geht es Ihnen?\" ist eine offene Frage — die braucht eine offene Antwort. Herr Petrov versteht die Frage, kann aber keine vollständige Antwort formulieren. Du siehst die Frustration. Merke: Ja/Nein-Fragen bevorzugen, z.B. \"Haben Sie Schmerzen? — Nicken oder Kopfschütteln.\"",
                feedbackB1:
                  "Höflich gemeint, aber zu schwer für Herrn Petrov. \"Wie geht es Ihnen?\" ist eine offene Frage. Er kann kaum sprechen. Frage besser: \"Haben Sie Schmerzen?\" — das kann er mit Nicken oder Kopfschütteln beantworten.",
              },
            ],
          },
          {
            context:
              "Herr Petrov hat geantwortet: \"Morgen... besser?\" Er schaut auf seinen rechten Arm, dann zu dir. Du willst ihm kurz erklären wie der heutige Morgen aussieht.",
            contextB1:
              "Herr Petrov hat gefragt: \"Morgen... besser?\" Er schaut auf seinen Arm. Du erklärst ihm, was heute passiert.",
            speaker: "Du",
            options: [
              {
                text: "\"Ich weiß nicht ob es morgen besser ist. Was ich weiß: Wir arbeiten heute zusammen daran. Körperpflege, ein bisschen Sitzen an der Bettkante — das hilft Ihrem Arm und Ihrer Lunge. Schritt für Schritt.\"",
                textB1:
                  "\"Ich weiß es nicht. Aber heute machen wir: Waschen, Sitzen an der Bett-Kante. Das ist gut für den Arm und für die Lunge. Schritt für Schritt.\"",
                patientResponse:
                  "Herr Petrov nickt langsam. Er schaut wieder auf seinen Arm.",
                patientResponseB1:
                  "Herr Petrov nickt. Er schaut auf seinen Arm.",
                score: 3,
                feedback:
                  "Ehrlich und handlungsorientiert. Du versprichst nichts, das du nicht halten kannst — und gibst gleichzeitig Struktur und Hoffnung. Der Hinweis auf Bettkante und Lunge zeigt ihm: Du weißt was du tust, und du erklärst warum.",
                feedbackB1:
                  "Sehr gut. Ehrlich: Du weißt es nicht. Aber du sagst was heute passiert. Das gibt Herrn Petrov Struktur.",
              },
              {
                text: "\"Ja, jeden Tag wird es besser! Sie machen das super!\"",
                textB1:
                  "\"Ja, jeden Tag wird es besser! Sie machen das toll!\"",
                patientResponse:
                  "Herr Petrov schaut dich kurz an. Dann wendet er sich ab.",
                patientResponseB1:
                  "Herr Petrov schaut kurz. Dann weg.",
                score: 0,
                feedback:
                  "Unehrlich. Herr Petrov ist 58, Ingenieur — er merkt wenn jemand schönredet. Er versteht jeden Satz, jede leere Floskel. Falsche Versprechen machen die Kommunikation kaputt. Lieber ehrlich mit Perspektive als optimistisch ohne Basis.",
                feedbackB1:
                  "Nicht gut. Das ist nicht ehrlich. Herr Petrov versteht alles. Er merkt, wenn jemand nicht die Wahrheit sagt. Sage die Wahrheit — mit Hoffnung.",
              },
              {
                text: "\"Das können nur die Ärzte sagen. Fragen Sie die beim Morgenvisite.\"",
                textB1:
                  "\"Das sagen die Ärzte. Fragen Sie die.\"",
                patientResponse:
                  "Herr Petrov nickt kurz. Kein weiterer Blickkontakt.",
                patientResponseB1:
                  "Herr Petrov nickt kurz. Kein Augenkontakt mehr.",
                score: 1,
                feedback:
                  "Nicht falsch — Ärzten die Prognose überlassen ist richtig. Aber du hast die Möglichkeit verpasst, ihm zu sagen was heute passiert. Herr Petrov bleibt ohne Orientierung für den Morgen. Besseres Sandwich: Ärzte für die Prognose + du für den heutigen Plan.",
                feedbackB1:
                  "Nicht komplett falsch — Ärzte entscheiden über die Prognose. Aber: Sage auch was heute passiert. Herr Petrov braucht Orientierung.",
              },
            ],
          },
          {
            context:
              "Du hast dich vorgestellt und erklärt was heute kommt. Herr Petrov nickt. Jetzt willst du sicherstellen, dass er dich versteht und mitentscheiden kann.",
            contextB1:
              "Du hast Herrn Petrov erklärt, was heute passiert. Er nickt. Jetzt prüfst du ob er dich versteht.",
            speaker: "Du",
            options: [
              {
                text: "\"Herr Petrov, ich erkläre Ihnen jeden Schritt bevor ich ihn tue. Wenn Sie möchten, dass ich aufhöre oder warte — schütteln Sie den Kopf. Ist das okay?\"",
                textB1:
                  "\"Herr Petrov, ich erkläre immer was ich mache. Wenn Sie wollen, dass ich stoppe — schütteln Sie den Kopf. Okay?\"",
                patientResponse:
                  "Herr Petrov nickt. Einmal, klar, mit Blickkontakt.",
                patientResponseB1:
                  "Herr Petrov nickt. Klar, mit Blick auf dich.",
                score: 3,
                feedback:
                  "Perfekt. Du schaffst Kontrollmöglichkeiten für jemanden, dem Kontrolle genommen wurde. Das Kopfschütteln als Signal ist konkret, einfach, non-verbal — passt genau zur Aphasie. Du respektierst seine Autonomie trotz eingeschränkter Kommunikation. Das Bobath-Prinzip fängt hier an: bei der Würde.",
                feedbackB1:
                  "Sehr gut. Du gibst Herrn Petrov Kontrolle zurück. Er kann Kopf schütteln — das ist ein klares Signal. Das ist wichtig: Er versteht alles. Er soll auch mitentscheiden können.",
              },
              {
                text: "\"Dann fangen wir an — Waschen zuerst, dann Frühstück. Dauert ungefähr eine Stunde.\"",
                textB1:
                  "\"Fangen wir an. Waschen, dann Frühstück. Circa eine Stunde.\"",
                patientResponse:
                  "Herr Petrov schaut zur Decke. Seine linke Hand schließt sich zur Faust.",
                patientResponseB1:
                  "Herr Petrov schaut zur Decke. Er macht die linke Hand zur Faust.",
                score: 1,
                feedback:
                  "Zu schnell. Du übst Kontrolle aus ohne sie zu teilen. Herr Petrov hat keine Möglichkeit, auf deinen Plan Einfluss zu nehmen. Er merkt das — seine Körpersprache sagt es dir. Besser: Erst fragen, ob er einverstanden ist, bevor du anfängst.",
                feedbackB1:
                  "Zu schnell. Du fragst nicht ob er einverstanden ist. Herr Petrov hat keine Wahl. Das ist nicht gut.",
              },
              {
                text: "\"Alles klar? Dann los.\"",
                textB1:
                  "\"Alles klar? Los!\"",
                patientResponse:
                  "Herr Petrov schaut dich an. Kein Nicken, kein Schütteln.",
                patientResponseB1:
                  "Herr Petrov schaut. Keine Antwort.",
                score: 0,
                feedback:
                  "\"Alles klar?\" ist eine geschlossene Frage, die Zustimmung voraussetzt — und keinen Raum für Einwände lässt. Für einen Aphasie-Patienten ist das besonders problematisch: Er kann nicht spontan widersprechen. Frag konkret und gib ihm Signalmöglichkeiten.",
                feedbackB1:
                  "\"Alles klar?\" gibt Herrn Petrov keine Möglichkeit zu antworten. Er hat Aphasie. Frage konkret: \"Ist das okay — nicken oder Kopf schütteln?\"",
              },
            ],
          },
        ],
      },
    },

    // Step 1.5 — Matching: Kommunikation mit Aphasie-Patienten
    {
      stepId: "ce02-petrov-info-05-aphasie-kommunikation",
      phase: 1,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: [
        "Bobath B. 1990 Adult Hemiplegia",
        "DNQP Mobilität 2020",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-petrov-info-aphasie-kommunikation",
      tag: "pflege",
      contentC1: {
        title: "Kommunikation mit Aphasie-Patienten",
        body: "Du hast jetzt die ersten Minuten mit Herrn Petrov hinter dir. Ordne jede Kommunikationsregel ihrer fachlichen Begründung zu. Alle 5 Regeln sind gleichwertig wichtig — es gibt keine Rangfolge, sondern jede Regel adressiert einen anderen Aspekt der Aphasie-Kommunikation.",
        glossarBegriffe: ["Broca-Aphasie", "nonverbale Kommunikation"],
      },
      contentB1: {
        title: "Wie kommunizierst du mit Herrn Petrov?",
        body: "Herr Petrov hat Aphasie. Ordne jede Regel der richtigen Begründung zu. Alle Regeln sind gleich wichtig.",
        glossarBegriffe: ["Aphasie"],
      },
      question: {
        fragetext:
          "Ordne jede Kommunikationsregel der passenden Begründung zu.",
        matchingPairs: [
          {
            left: "Kurze, einfache Sätze verwenden (max. 5-7 Wörter)",
            right:
              "Reduziert die kognitive Sprachverarbeitung — bei Broca-Aphasie ist Verstehen leichter als Produzieren, lange Sätze ermüden trotzdem",
          },
          {
            left: "Ja/Nein-Fragen stellen — keine offenen Fragen",
            right:
              "Patient kann mit Nicken/Kopfschütteln antworten, ohne Wörter formulieren zu müssen",
          },
          {
            left: "Zeit lassen für die Reaktion (10-15 Sekunden warten)",
            right:
              "Sprachverarbeitung dauert bei Aphasie länger — vorschnelles Antworten oder Helfen blockiert die Eigenleistung",
          },
          {
            left: "Blickkontakt halten — nicht wegschauen während er antwortet",
            right:
              "Nonverbale Signale (Mimik, Gestik) ergänzen die wenigen Wörter und zeigen Wertschätzung",
          },
          {
            left: "Nicht laut sprechen — normale Lautstärke wählen",
            right:
              "Aphasie ist eine Sprach-, keine Hörstörung — lautes Sprechen wirkt entwürdigend und hilft nicht",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 25,
};

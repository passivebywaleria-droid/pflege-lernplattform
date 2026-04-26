// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 2: Beobachten & Risiken erkennen
// Steps: 7 (5 Kern + 2 Optional) · Bloom: B3-B4 · Brilliant-Prinzip: Step 2.1
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-beobachten.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-bauer-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Risiken erkennen",
  titelB1: "Schauen und Risiken finden",
  kontext:
    "Herr Bauer hat sich etwas beruhigt. Er sitzt noch im Bett, schaut dich manchmal an, manchmal an die Wand. Du hast kurz seine Hand gehalten — das hat geholfen. Jetzt musst du beobachten: Was hat der Sturz hinterlassen? Was zeigt sein Körper dir heute Morgen? Menschen mit Demenz können Schmerzen oft nicht verbalisieren. Sie sagen nicht 'mein Knie tut weh' — sie zeigen es durch Abwehr, durch veränderte Mimik, durch ein Zucken beim Bewegen. Du lernst heute, wie man beobachtet, wenn Worte fehlen.",
  kontextB1:
    "Herr Bauer ist etwas ruhiger. Er sitzt im Bett. Du hast seine Hand gehalten — das hat geholfen. Jetzt schaust du: Was hat der Sturz hinterlassen? Was zeigt sein Körper dir heute Morgen? Menschen mit Demenz sagen nicht immer: \"Ich habe Schmerzen.\" Sie zeigen es mit dem Gesicht, mit der Körperhaltung. Du lernst heute: Wie beobachte ich, wenn jemand nicht sprechen kann?",
  kernSteps: [
    // Step 2.1 — Brilliant-Frage: Erstblick
    {
      stepId: "ce02-bauer-beob-01-brilliant-erstblick",
      phase: 2,
      stepType: "freetext",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-beob-erstblick",
      tag: "pflege",
      bildkategorie: "szene",
      imageAlt:
        "Älterer Mann sitzt im Krankenbett, linkes Bein angewinkelt, rechtes Bein leicht nach außen gedreht, Gesichtsausdruck angespannt, Decke zur Hälfte abgeworfen",
      bildhinweis:
        "Elderly man sitting in hospital bed, left leg bent, right leg slightly externally rotated, tense facial expression, blanket half-thrown aside, morning light through window, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Was nimmst du wahr — vor jeder Messung?",
        body: "BRILLIANT-FRAGE: Bevor du irgendetwas misst oder untersuchst — schau dir Herrn Bauer kurz an. Sein Gesicht, seine Haltung, wie er die Beine hält. Was fällt dir auf?",
        glossarBegriffe: ["Schonhaltung", "Außenrotation"],
      },
      contentB1: {
        title: "Was siehst du — bevor du etwas misst?",
        body: "BEOBACHTUNGS-FRAGE: Schau Herrn Bauer an. Schau sein Gesicht an. Schau wie er sitzt. Schau wie er die Beine hält. Beschreibe in 2-3 Sätzen: Was fällt dir auf?",
        glossarBegriffe: ["Schonhaltung"],
      },
      question: {
        fragetext:
          "Beschreibe in 2–3 Sätzen: Was nimmst du wahr, bevor du irgendetwas messst? (Haltung, Mimik, Beinstellung)",
        musterantwort:
          "Das rechte Bein ist leicht nach außen gedreht — möglicher Hinweis auf Schonhaltung nach Sturz oder Kontraktur. Herrn Bauers Gesichtsausdruck ist angespannt, die Augenbrauen etwas zusammengezogen. Die Decke ist zur Hälfte weggeworfen — er war unruhig.",
        bewertungskriterien: [
          "Beinstellung beschrieben (Außenrotation / Anwinkelung)",
          "Gesichtsausdruck / Mimik erwähnt",
          "Körperhaltung oder Spannung beschrieben",
        ],
      },
    },

    // Step 2.2 — Sequencing: Sturz-Assessment-Reihenfolge
    {
      stepId: "ce02-bauer-beob-02-sturz-assessment",
      phase: 2,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022, Kriterium 3b"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-beob-assessment-reihenfolge",
      tag: "pflege",
      contentC1: {
        title: "Sturz-Folge-Assessment — richtige Reihenfolge",
        body: "Lege die Reihenfolge des strukturierten Sturz-Folge-Assessments fest. Orientierung: ABCDE-Schema (Bewusstsein und Vitalzeichen zuerst — eine Synkope kann Sturzursache sein und muss vor Bewegung der Extremitäten ausgeschlossen werden) und DNQP Sturzprophylaxe 2022, Kriterium 3b. Hinweis: Vitalzeichen und Verletzungscheck fließen später ins Sturzprotokoll (Phase 6) — saubere Erfassung jetzt = solide Dokumentation am Ende. Was kommt wann?",
        glossarBegriffe: ["BESD-Skala", "Assessment", "Vitalzeichen", "ABCDE-Schema", "Synkope", "Sturzprotokoll"],
      },
      contentB1: {
        title: "Sturz-Assessment — welche Reihenfolge?",
        body: "In welcher Reihenfolge prüfst du nach einem Sturz? Wichtig: Erst Bewusstsein und Vitalzeichen (RR, Puls) prüfen — sonst weißt du nicht, ob ein Kreislaufproblem den Sturz ausgelöst hat. Erst dann den Körper bewegen. Hinweis: Was du jetzt misst, schreibst du später ins Sturzprotokoll.",
        glossarBegriffe: ["BESD-Skala", "Vitalzeichen", "ABCDE", "Sturzprotokoll"],
      },
      question: {
        fragetext:
          "Sortiere die Assessment-Schritte in die richtige Reihenfolge (1 = zuerst).",
        sequencing: {
          instruction: "Ziehe die Karten in die richtige Reihenfolge.",
          items: [
            {
              id: "a1",
              label: "Ansprechbarkeit und grobe Orientierung prüfen (wach? reagiert er?)",
            },
            {
              id: "a2",
              label: "Vitalzeichen messen (RR, Puls, SpO₂) — Synkope/Kollaps als Sturzursache ausschließen",
            },
            {
              id: "a3",
              label: "Kopf und Wirbelsäule — Sturzrichtung beachten",
            },
            {
              id: "a4",
              label:
                "Schmerzerfassung mit BESD-Skala bei Demenz (Verhalten beobachten, nicht fragen)",
            },
            {
              id: "a5",
              label: "Extremitäten: Arme und Beine soweit möglich bewegen lassen",
            },
            {
              id: "a6",
              label: "Hämatome und Hautdefekte sichtbar prüfen",
            },
          ],
        },
      },
    },

    // Step 2.3 — Dialog: Knie-Kontraktur-Prüfung
    {
      stepId: "ce02-bauer-beob-03-knie-kontraktur",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022",
        "Bienstein C./Fröhlich A. (2021)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-bauer-beob-gelenkpruefung",
      tag: "pflege",
      contentC1: {
        title: "Gelenkbeweglichkeit prüfen",
        body: "Du möchtest die Gelenkbeweglichkeit von Herrn Bauers Knien prüfen. Er reagiert auf Sprache kaum. Du nährst dich behutsam seinem rechten Knie. Was passiert?",
        glossarBegriffe: ["Kontraktur", "Schmerzsignal", "BESD-Skala"],
      },
      contentB1: {
        title: "Knie prüfen",
        body: "Du willst Herrn Bauers Knie prüfen. Er hört auf Worte kaum. Du gehst langsam zu seinem rechten Knie hin. Was passiert?",
        glossarBegriffe: ["Kontraktur", "Schmerzsignal"],
      },
      question: {
        fragetext:
          "Herr Bauer zeigt beim Bewegen seines rechten Knies ein Schmerzsignal. Wie reagierst du?",
        patientName: "Herr Bauer",
        dialogPhases: [
          {
            context:
              "Du nimmst behutsam Herrn Bauers rechtes Knie. Beim langsamen Beugen zieht er scharf die Luft ein und sagt:",
            contextB1:
              "Du hältst Herrn Bauers rechtes Knie. Du beugst es langsam. Er zieht die Luft ein und sagt:",
            speaker: "Herr Bauer",
            options: [
              {
                text: "Ich halte inne, sage ruhig: 'Ich mache kurz Pause, Herr Bauer', und warte. Dann prüfe ich minimal weiter, ohne Schmerzen zu provozieren.",
                textB1:
                  "Ich stoppe. Ich sage ruhig: 'Pause, Herr Bauer.' Ich warte. Dann prüfe ich vorsichtig weiter.",
                patientResponse:
                  "Herr Bauer entspannt sich leicht nach der Pause. Er schaut zur Seite.",
                patientResponseB1:
                  "Herr Bauer wird etwas ruhiger nach der Pause.",
                score: 3,
                feedback:
                  "Richtig. Schmerzsignal bei Demenz ernst nehmen — auch ohne vollständige Verbalisierung. Innehalten, ankündigen, dann minimal weiterprüfen um das Bewegungsausmaß einzuschätzen, nicht um Schmerzen zu provozieren. Das entspricht dem BESD-Prinzip: Verhalten als Schmerz-Indikator.",
                feedbackB1:
                  "Sehr gut. Du hörst das Schmerzsignal. Du machst Pause. Du sagst, was du tust. Das ist wichtig bei Demenz: Er versteht nicht immer Worte — aber er spürt ob du rücksichtsvoll bist.",
              },
              {
                text: "Ich mache weiter — das Assessment muss vollständig sein, auch wenn es kurz wehtut.",
                textB1:
                  "Ich mache weiter. Das Assessment ist wichtig.",
                patientResponse:
                  "Herr Bauer schlägt nach deiner Hand.",
                patientResponseB1:
                  "Herr Bauer schlägt nach dir.",
                score: 0,
                feedback:
                  "Falsch. Schmerz bei Demenz-Patienten ist ein Stopsignal — nicht zu übergehen. Zwang führt zu Agitation, Vertrauensverlust und kann Verletzungen verschlimmern. Assessment ist wichtig, aber Würde und Schutz haben Vorrang vor Vollständigkeit.",
                feedbackB1:
                  "Falsch. Schmerz ist ein Stopsignal. Nicht übergehen. Er schlägt nach dir — weil er Angst hat. Zuerst stoppen, dann behutsam weiterschauen.",
              },
              {
                text: "Ich breche das Assessment ab und komme später wieder.",
                textB1:
                  "Ich höre auf und komme später wieder.",
                patientResponse:
                  "Herr Bauer bleibt sitzen. Er schaut weg.",
                patientResponseB1:
                  "Herr Bauer schaut weg.",
                score: 1,
                feedback:
                  "Manchmal sinnvoll — aber hier: Assessment nach Sturz ist dringlich, Schmerzerfassung gehört dazu. Besser: kurz innehalten, ankündigen, dann minimal weitermachen. Abbrechen ist der letzte Ausweg, nicht die erste Reaktion.",
                feedbackB1:
                  "Manchmal ok — aber hier ist das Assessment nach dem Sturz wichtig. Besser: kurze Pause, dann behutsam weiterschauen. Ganz aufhören ist die letzte Option.",
              },
            ],
          },
        ],
      },
    },

    // Step 2.4 — Highlight: Pflegebericht der letzten 3 Tage
    {
      stepId: "ce02-bauer-beob-04-haut-trinkprotokoll",
      phase: 2,
      stepType: "highlight",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Förderung Harnkontinenz 2014",
        "DNQP Mundpflege 2023",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-risikofaktoren-pflege",
      tag: "krankheitslehre",
      contentC1: {
        title: "Pflegebericht der letzten 3 Tage — Risiken finden",
        body: "Du bekommst den Pflegebericht der letzten 3 Tage als Textblock. Markiere alle Zeilen, die dir als Risikofaktoren für Exsikkose oder Hautprobleme auffallen. BRILLIANT-VARIANTE: erst markieren, dann erklären wir.",
        glossarBegriffe: [
          "Exsikkose",
          "Soor",
          "Miktionsprotokoll",
          "Dekubitusgefahr",
        ],
      },
      contentB1: {
        title: "Pflegebericht lesen — Risiken markieren",
        body: "Du liest den Pflegebericht der letzten Tage. Markiere alle Stellen, die auf Risiken für Austrocknung (Exsikkose) oder Hautprobleme hinweisen.",
        glossarBegriffe: ["Exsikkose", "Soor", "Risiko"],
      },
      question: {
        fragetext:
          "Markiere alle Textstellen, die auf Exsikkose- oder Hautrisiken hinweisen.",
        highlightSegments: [
          {
            text: "Tag 1 (Fr): Stimmung unruhig, Körperpflege mit Mühe abgeschlossen.",
            isError: false,
          },
          {
            text: " Trinkmenge: 900 ml.",
            isError: true,
            reason:
              "Deutlich unter dem Trinkziel von 1500 ml — Exsikkosegefahr. Tagestrinkziel sollte Pflege aktiv begleiten.",
            reasonB1:
              "Zu wenig. Ziel ist 1500 ml. 900 ml = Austrocknung droht.",
          },
          {
            text: " Inkontinenzversorgung 2× gewechselt, Haut im Intimbereich unauffällig.",
            isError: false,
          },
          {
            text: "\n\nTag 2 (Sa): Mondscheinpflege um 03:00 Uhr, sehr unruhig, wollte weglaufen.",
            isError: false,
          },
          {
            text: " Mundschleimhaut leicht trocken notiert.",
            isError: true,
            reason:
              "Hinweis auf beginnende Austrocknung der Mundschleimhaut — Soor-Prophylaxe-Bedarf, Mundpflege intensivieren.",
            reasonB1:
              "Trocken im Mund = Zeichen für Austrocknung. Mundpflege wichtiger machen.",
          },
          {
            text: " Trinkprotokoll nicht geführt.",
            isError: true,
            reason:
              "Lückenhafte Dokumentation — ohne Trinkprotokoll kann die Pflegeplanung die Exsikkosegefahr nicht steuern.",
            reasonB1:
              "Kein Trinkprotokoll geführt = niemand weiß wie viel er getrunken hat. Gefährlich.",
          },
          {
            text: "\n\nTag 3 (So): Inkontinenzversorgung 3× gewechselt in der Nacht,",
            isError: true,
            reason:
              "Hinweis auf hohe nächtliche Inkontinenz-Frequenz / nächtliche Polyurie. Der Wechsel selbst ist Schutzmaßnahme — das Risiko liegt in der Feuchtigkeitsbelastung der Haut zwischen den Wechseln (IAD-Risiko, DNQP Förderung Harnkontinenz / Hinweispapier IAD). Zusätzlich = nächtliche Toilettengang-Auslöser → Sturzrisiko-Faktor (passt zum Sturzereignis 02:30 Uhr).",
            reasonB1:
              "3× Wechsel nachts = er ist nachts oft nass. Der Wechsel selbst schützt die Haut. Aber die Zeit dazwischen reizt die Haut (IAD = Wundsein durch Feuchtigkeit). Außerdem: Wenn er nachts viel Urin hat, steht er auf — und kann stürzen.",
          },
          {
            text: " kein Urinprotokoll geführt.",
            isError: true,
            reason:
              "Ohne Miktionsprotokoll fehlen Daten für Flüssigkeitsbilanz und Inkontinenz-Management.",
            reasonB1:
              "Kein Urinprotokoll = man weiß nicht wie viel Urin er hat. Das fehlt für die Pflege.",
          },
          {
            text: " Schlaf unruhig, Sturz letzte Nacht 02:30 Uhr.",
            isError: false,
          },
        ],
      },
    },

    // Step 2.5 — Categorize: Risikofaktoren nach 3 Kategorien
    {
      stepId: "ce02-bauer-beob-05-risiken-einordnen",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022", "DNQP Kontrakturprophylaxe 2014"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-beob-risikokategorien",
      tag: "pflege",
      contentC1: {
        title: "Risikofaktoren kategorisieren",
        body: "Kategorisiere die Risikofaktoren von Herrn Bauer in drei Gruppen: Sturzrisiko, Kontrakturrisiko, Hautrisiko. Manche Faktoren gelten für mehrere Kategorien — ordne sie der wichtigsten zu.",
        glossarBegriffe: [
          "Sturzrisiko",
          "Kontrakturrisiko",
          "Exsikkose",
          "Inkontinenz-assoziierte Dermatitis",
        ],
      },
      contentB1: {
        title: "Risiken sortieren",
        body: "Sortiere die Risiko-Karten in drei Gruppen: Sturzrisiko, Kontraktur-Risiko (Gelenke werden steif), Haut-Risiko.",
        glossarBegriffe: ["Sturzrisiko", "Kontraktur", "Haut"],
      },
      question: {
        fragetext:
          "Ordne jeden Risikofaktor der passenden Risikokategorie zu.",
        categories: [
          { name: "Sturzrisiko" },
          { name: "Kontrakturrisiko" },
          { name: "Hautrisiko" },
        ],
        categoryItems: [
          {
            text: "Demenz-Desorientierung und Nachtaktivität",
            correctCategory: 0,
          },
          { text: "Mirtazapin (Antidepressivum mit dosisabhängiger Sedierung, PRISCUS-Liste)", correctCategory: 0 },
          {
            text: "Inkontinenz mit Drangsymptomatik nachts",
            correctCategory: 0,
          },
          { text: "Weglauftendenz und unbegleitetes Aufstehen", correctCategory: 0 },
          {
            text: "Streckdefizit rechtes Knie 20°, linkes Knie 10°",
            correctCategory: 1,
          },
          { text: "Schonhaltung nach Sturz", correctCategory: 1 },
          {
            text: "Abwehr bei aktiver Bewegung (Pflege-Abwehr)",
            correctCategory: 1,
          },
          { text: "Trinkmenge 900–1100 ml täglich (Exsikkose)", correctCategory: 2 },
          { text: "Inkontinenzversorgung häufig nass (Feuchtigkeit)", correctCategory: 2 },
          {
            text: "Eingeschränkte Mobilität (Immobilitätsgefahr)",
            correctCategory: 2,
          },
        ],
      },
    },
  ],

  optionaleSteps: [
    // Step 2.6 — Erklär-Step: BESD-Skala
    {
      stepId: "ce02-bauer-beob-06-besd-skala",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Basler B. et al. (2006): BESD-Skala"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-besd",
      tag: "krankheitslehre",
      displayFormat: "stepbystep",
      contentC1: {
        title: "BESD-Skala — Schmerz bei Demenz erfassen",
        body: "Die BESD-Skala (Beurteilung von Schmerzen bei Demenz) erfasst Schmerz über Verhaltensbeobachtung — weil Demenz-Patienten Schmerz oft nicht verbalisieren können. 5 Kategorien, je 0–2 Punkte:\n\n1. Atmung — verändert, stoßweise (0–2)\n2. Negative Lautäußerungen — Stöhnen, Schreien (0–2)\n3. Gesichtsausdruck — Grimassieren, Stirnrunzeln (0–2)\n4. Körpersprache — Steifheit, Abwehr, Schonhaltung (0–2)\n5. Trost — beruhigbar oder nicht (0–2)\n\nGesamtwert ≥ 3 = Schmerz wahrscheinlich → Maßnahmen einleiten. Bei Herrn Bauer: BESD vor und nach Bewegungsübungen.",
        glossarBegriffe: ["BESD-Skala", "Schmerzerfassung", "Verhaltensbeobachtung"],
      },
      contentB1: {
        title: "BESD: Schmerz erkennen ohne Worte",
        body: "Herr Bauer kann Schmerzen nicht gut beschreiben. Die BESD-Skala hilft: Du beobachtest sein Verhalten. 5 Bereiche, je 0–2 Punkte:\n\n1. Atmung — normal oder verändert?\n2. Geräusche — stöhnt er? schreit er?\n3. Gesicht — zieht er die Stirn zusammen?\n4. Körper — steif? Abwehr?\n5. Trost — wird er ruhig wenn du ihn berühigst?\n\nWert ≥ 3 = Schmerz wahrscheinlich. Dann musst du handeln.",
        glossarBegriffe: ["BESD-Skala", "Schmerz", "Verhalten beobachten"],
      },
    },

    // Step 2.7 — Comparison: Funktionsstellung vs. Kontrakturstellung
    {
      stepId: "ce02-bauer-beob-07-kontraktur-neutral-null",
      phase: 2,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontrakturprophylaxe 2014", "Neutralnull-Methode"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-kontraktur-stellung",
      tag: "anatomie",
      contentC1: {
        title: "Funktionsstellung vs. Kontrakturstellung",
        body: "Was droht Herrn Bauer wenn die Kniegelenke nicht bewegt werden? Vergleiche Funktionsstellung und Kontrakturstellung.",
        glossarBegriffe: ["Kontraktur", "Funktionsstellung", "Neutralnull-Methode"],
      },
      contentB1: {
        title: "Was passiert ohne Bewegung?",
        body: "Was passiert mit Herrn Bauers Knien, wenn niemand sie bewegt? Vergleiche die zwei Stellungen.",
        glossarBegriffe: ["Kontraktur", "Funktionsstellung"],
      },
      question: {
        fragetext:
          "Vergleiche Funktionsstellung und Kontrakturstellung für Knie- und Sprunggelenk.",
        comparison: {
          instruction: "Vergleiche für jedes Gelenk die Funktionsstellung mit der Kontrakturstellung.",
          columns: [
            { label: "Funktionsstellung (Ziel)" },
            { label: "Kontrakturstellung (Gefahr)" },
          ],
          rows: [
            {
              criterion: "Kniegelenk",
              values: [
                "Streckung 0° bei Rückenlage (Bett), 90° Beugung wenn Rollstuhl",
                "Beugestellung ≥ 20° dauerhaft — kann nicht mehr gestreckt werden",
              ],
              valuesB1: [
                "Knie gerade (Bett) oder rechtwinklig (Rollstuhl)",
                "Knie bleibt gebeugt — kann nicht mehr gestreckt werden",
              ],
              highlight: 1,
            },
            {
              criterion: "Sprunggelenk",
              values: [
                "Fußhebebewegung 0° — Fuß steht senkrecht zum Unterschenkel",
                "Spitzfuß (Plantarflexion ≥ 20°) — Hacke berührt Boden nicht mehr",
              ],
              valuesB1: [
                "Fuß normal — Hacke berührt Boden",
                "Spitzfuß — Hacke kann den Boden nicht mehr berühren",
              ],
              highlight: 1,
            },
            {
              criterion: "Zeitraum bis zur Kontraktur",
              values: [
                "Regelmäßige passive Bewegung verhindert Kontraktur dauerhaft",
                "Bereits nach 1–2 Wochen Immobilität können erste Kontrakturen entstehen",
              ],
              valuesB1: [
                "Bewegung verhindert Kontraktur",
                "Ohne Bewegung: Kontraktur schon nach 1–2 Wochen möglich",
              ],
              highlight: 1,
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 35,
};

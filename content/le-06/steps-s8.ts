// Session 8: "Pruefung bestehen — Alles zusammen" — LE 06
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB15: Fallvergleich alle 3 Patienten + Neuer Patient (Frau Weber, 68, Parkinson)
// TB16: Pruefungsvorbereitung + Reflexion
// Bloom: B4-B6, 22 Steps, ~30 Min
// Interleaving: ~15% (LE-04, LE-08)

import type { ContentStep } from "../_types";

export const STEPS_S8: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE — Neue Patientin Frau Weber (Parkinson)
  // =============================================================
  {
    stepId: "le06-s8-tb15-01",
    phase: "s8",
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-372", "Q2 S.392-444"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Neue Patientin: Frau Weber",
      body: "Frau Weber, 68 Jahre, Morbus Parkinson. Zunehmende Gehstoerung und Tremor. Lebt allein in einer Altbauwohnung im 2. Stock ohne Aufzug. Aufnahme auf deine Station zur Diagnostik und Mobilisationsplanung.",
      fallbezug: "Neuer Patient zum Transfer: Alles was du in 7 Sessions gelernt hast, muss jetzt angewendet werden.",
    },
    contentB1: {
      title: "Neue Patientin: Frau Weber",
      body: "Frau Weber ist 68 Jahre alt. Sie hat Parkinson. Sie kann immer schlechter laufen und zittert. Sie lebt allein in einer Wohnung im 2. Stock. Kein Aufzug.",
      fallbezug: "Neuer Patient. Du musst alles anwenden, was du gelernt hast.",
    },
    question: {
      fragetext: "Frau Weber wird auf deine Station aufgenommen. Was brauchst du als Erstes?",
      patientName: "Frau Weber",
      dialogPhases: [
        {
          context: "Frau Weber sitzt im Rollstuhl, ihre Haende zittern leicht. Sie laechelt unsicher: 'Ich bin Frau Weber. Mein Hausarzt hat mich hergeschickt, weil ich immer oefter stolpere. Letzte Woche bin ich in der Kueche hingefallen.'",
          contextB1: "Frau Weber sitzt im Rollstuhl. Ihre Haende zittern. Sie sagt: 'Ich stolpere immer oefter. Letzte Woche bin ich in der Kueche gefallen.'",
          speaker: "Frau Weber",
          options: [
            {
              text: "Willkommen, Frau Weber! Ich moechte als Erstes drei Dinge erfassen: Ihren Barthel-Index, um Ihre Selbststaendigkeit einzuschaetzen, den Timed-Up-and-Go-Test fuer das Sturzrisiko, und eine Sturzanamnese. Darf ich gleich anfangen?",
              textB1: "Willkommen! Ich mache zuerst drei Tests: Wie viel koennen Sie allein? Wie sicher gehen Sie? Und ich frage nach Stuerzen. Ist das okay?",
              patientResponse: "Ja, machen Sie ruhig. Ich moechte einfach wieder sicher laufen koennen.",
              patientResponseB1: "Ja, das ist okay. Ich moechte wieder sicher laufen.",
              score: 3,
              feedback: "Perfekt! Barthel-Index, TUG-Test und Sturzanamnese sind die drei Saeulen der Ersterfassung bei Mobilitaetsproblemen. Du zeigst systematisches Vorgehen und informierst die Patientin vorab — das ist professionelle Pflegeprozess-Kompetenz.",
              feedbackB1: "Super! Du machst drei wichtige Tests: Barthel-Index, Gehtest und Sturzfragen. Das ist genau richtig.",
            },
            {
              text: "Hallo Frau Weber! Ich bringe Sie erstmal in Ihr Zimmer. Den Rest machen wir morgen.",
              textB1: "Hallo! Ich bringe Sie ins Zimmer. Morgen machen wir weiter.",
              patientResponse: "Morgen? Aber ich stolpere doch staendig... Kann man nicht heute schon was machen?",
              patientResponseB1: "Morgen erst? Aber ich stolpere doch die ganze Zeit...",
              score: 1,
              feedback: "Die Ersterfassung sollte bei Aufnahme stattfinden, nicht am naechsten Tag! Frau Weber hat aktive Sturzgefahr (letzter Sturz vor einer Woche). Barthel-Index und Sturzrisiko-Assessment gehoeren zur Aufnahmeroutine.",
              feedbackB1: "Die Tests muessen heute gemacht werden, nicht morgen! Sie ist sturzgefaehrdet.",
            },
            {
              text: "Frau Weber, haben Sie Schmerzen? Ich messe erstmal Blutdruck und Temperatur.",
              textB1: "Haben Sie Schmerzen? Ich messe Blutdruck und Temperatur.",
              patientResponse: "Nein, keine Schmerzen. Nur dieses Zittern und die Unsicherheit beim Gehen.",
              patientResponseB1: "Nein, keine Schmerzen. Nur das Zittern und unsicheres Gehen.",
              score: 2,
              feedback: "Vitalzeichen sind bei Aufnahme Standard — das ist nicht falsch. Aber bei einer Patientin mit Mobilitaetsproblemen und aktueller Sturzanamnese sind Barthel-Index, TUG-Test und Sturzerfassung priorisiert. Vitalzeichen koennen parallel erhoben werden.",
              feedbackB1: "Blutdruck messen ist okay. Aber bei Sturzgefahr sind Barthel-Index und Gehtest wichtiger.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ANWENDUNG — MC Multi-Select Risiken
  // =============================================================
  {
    stepId: "le06-s8-tb15-02",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-400", "Q1 S.346"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Risiko-Assessment Frau Weber",
      body: "Die Ergebnisse liegen vor: TUG-Test 22 Sekunden, Barthel-Index 55. Welche Risiken bestehen?",
    },
    contentB1: {
      title: "Welche Risiken hat Frau Weber?",
      body: "Gehtest: 22 Sekunden. Barthel-Index: 55. Was bedeutet das?",
    },
    question: {
      fragetext: "Frau Weber: TUG-Test 22 Sekunden, Barthel-Index 55. Welche Risiken bestehen? (Mehrfachauswahl)",
      multiSelect: true,
      optionen: [
        {
          text: "Erhoehtes Sturzrisiko (TUG >= 20 Sekunden)",
          isCorrect: true,
          explanation: "Richtig! TUG >= 20 Sekunden = erhoehtes Sturzrisiko. Frau Weber hat 22 Sekunden — plus Parkinson-bedingte Gangunsicherheit und einen Sturz letzte Woche.",
          explanationB1: "Richtig! 22 Sekunden beim Gehtest = hohes Sturzrisiko.",
        },
        {
          text: "Kontrakturgefahr (eingeschraenkte Mobilitaet durch Parkinson)",
          isCorrect: true,
          explanation: "Richtig! Parkinson fuehrt zu Rigiditaet (Muskelsteifheit) und reduzierter Bewegung. Ohne regelmaessige Bewegungsuebungen steigt das Kontrakturrisiko, besonders an Fingern, Handgelenken und Hueftgelenken.",
          explanationB1: "Richtig! Parkinson macht die Muskeln steif. Ohne Uebungen werden die Gelenke steif.",
        },
        {
          text: "Thromboserisiko (reduzierte Mobilitaet)",
          isCorrect: true,
          explanation: "Richtig! Barthel-Index 55 zeigt eingeschraenkte Selbststaendigkeit. Frau Weber bewegt sich weniger — Virchow-Trias Faktor 1 (verlangsamter Blutfluss) ist gegeben.",
          explanationB1: "Richtig! Frau Weber bewegt sich wenig. Das kann zu Blutgerinnseln fuehren.",
        },
        {
          text: "Dekubitusrisiko (eingeschraenkte Positionswechsel)",
          isCorrect: true,
          explanation: "Richtig! Parkinson-Tremor und Rigiditaet erschweren selbststaendige Positionswechsel. Bei laengerem Liegen oder Sitzen entsteht Druckbelastung an Praedilektionsstellen.",
          explanationB1: "Richtig! Frau Weber kann sich schwer allein drehen. Die Haut kann kaputt gehen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 3: ANWENDUNG — Careplan Frau Weber
  // =============================================================
  {
    stepId: "le06-s8-tb15-03",
    phase: "s8",
    stepType: "careplan",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-372", "Q2 S.392-444", "Q3"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    contentC1: {
      title: "Pflegeplanung: Frau Weber",
      body: "Erstelle einen Pflegeplan fuer Frau Weber. Durchlaufe alle Schritte des Pflegeprozesses.",
    },
    contentB1: {
      title: "Pflegeplan fuer Frau Weber",
      body: "Mache einen Plan fuer Frau Weber. Was ist das Problem? Was ist das Ziel? Was machst du?",
    },
    question: {
      fragetext: "Erstelle einen Pflegeplan fuer Frau Weber.",
      careplan: {
        patientName: "Frau Weber",
        situation: "68 Jahre, Morbus Parkinson, zunehmende Gehstoerung, Tremor, Barthel-Index 55, TUG 22s, lebt allein im 2. Stock ohne Aufzug, Sturz letzte Woche in der Kueche.",
        situationB1: "Frau Weber, 68, Parkinson, kann schlecht laufen, zittert, Barthel 55, letzter Sturz vor einer Woche, lebt allein, 2. Stock, kein Aufzug.",
        steps: [
          {
            phase: "problem",
            prompt: "Welches ist das zentrale Pflegeproblem bei Frau Weber?",
            promptB1: "Was ist das Hauptproblem von Frau Weber?",
            options: [
              {
                text: "Erhoehte Sturzgefahr und eingeschraenkte Mobilitaet durch Morbus Parkinson mit Gangstörung und Tremor",
                isCorrect: true,
                explanation: "Richtig! Das zentrale Problem verbindet die Grunderkrankung (Parkinson) mit den konkreten Auswirkungen (Sturzgefahr, Mobilitaetseinschraenkung). Alle anderen Risiken (Kontraktur, Thrombose, Dekubitus) folgen daraus.",
                explanationB1: "Richtig! Frau Weber kann wegen Parkinson nicht sicher laufen und kann stuerzen.",
              },
              {
                text: "Frau Weber lebt allein",
                isCorrect: false,
                explanation: "Allein leben ist ein Risikofaktor, aber nicht das zentrale Pflegeproblem. Das Problem ist die eingeschraenkte Mobilitaet durch Parkinson — egal ob allein oder nicht.",
                explanationB1: "Allein leben ist ein Problem, aber nicht das Hauptproblem. Das Hauptproblem ist die Gehstoerung.",
              },
              {
                text: "Frau Weber hat Schmerzen",
                isCorrect: false,
                explanation: "Schmerzen wurden nicht berichtet. Das zentrale Problem ist die Mobilitaetseinschraenkung durch Parkinson (Tremor, Gangunsicherheit, Rigiditaet).",
                explanationB1: "Frau Weber hat keine Schmerzen. Das Problem ist das unsichere Gehen.",
              },
            ],
          },
          {
            phase: "ziel",
            prompt: "Formuliere ein SMART-Pflegeziel fuer die Mobilitaet.",
            promptB1: "Was ist das Ziel fuer Frau Weber?",
            options: [
              {
                text: "Frau Weber geht bis Tag 7 mit Rollator sicher 50 Meter auf dem Stationsflur ohne Gleichgewichtsverlust",
                isCorrect: true,
                explanation: "SMART: Spezifisch (Rollator, 50m, Stationsflur), Messbar (50m, ohne Gleichgewichtsverlust), Attraktiv (Sicherheit), Realistisch (Barthel 55, Rollator), Terminiert (Tag 7).",
                explanationB1: "Gutes Ziel! Klar, messbar und mit Zeitangabe: 50 Meter mit Rollator in 7 Tagen.",
              },
              {
                text: "Frau Weber soll besser laufen",
                isCorrect: false,
                explanation: "Nicht SMART! 'Besser' ist nicht messbar. Wann? Wie weit? Mit welchem Hilfsmittel? Ein Pflegeziel muss konkret, messbar und terminiert sein.",
                explanationB1: "'Besser laufen' ist zu unklar. Sage genau: wie weit, womit, bis wann.",
              },
              {
                text: "Frau Weber stuerzt nicht mehr",
                isCorrect: false,
                explanation: "Ein Null-Sturz-Ziel ist unrealistisch. Ausserdem nicht SMART formuliert: Kein Zeitrahmen, keine konkreten Massnahmen, nicht messbar im Verlauf.",
                explanationB1: "'Nie wieder stuerzen' ist nicht realistisch. Sage besser ein konkretes Ziel.",
              },
            ],
          },
          {
            phase: "massnahme",
            prompt: "Welche Massnahmen planst du? (Denke an Kinaesthetik, Prophylaxen, Hilfsmittel)",
            promptB1: "Was machst du fuer Frau Weber? (Bewegung, Schutz vor Stuerzen, Hilfsmittel)",
            options: [
              {
                text: "Kinaesthetische Mobilisation 2x taeglich, Sturzprophylaxe (Rollator, feste Schuhe, Beleuchtung), Kontrakturprophylaxe (Fingeruebungen), Thromboseprophylaxe (MTS, Beinuebungen), Dekubitusprophylaxe (2h Positionswechsel)",
                isCorrect: true,
                explanation: "Vollstaendig! Alle 5 Prophylaxen plus kinaesthetische Mobilisation. Bei Parkinson besonders wichtig: Fingeruebungen gegen Kontraktur (Rigiditaet) und regelmaessige Positionswechsel.",
                explanationB1: "Richtig! Alle wichtigen Massnahmen: Bewegung, Sturzschutz, Uebungen fuer die Finger, Struempfe, Umlagern.",
              },
              {
                text: "Rollstuhl und Bettruhe bis die Diagnostik abgeschlossen ist",
                isCorrect: false,
                explanation: "Bettruhe verschlimmert alle Risiken! Frau Weber braucht Mobilisation, nicht Immobilisation. Die Diagnostik laeuft parallel — Bewegung ist Teil der Therapie.",
                explanationB1: "Nein! Im Bett bleiben macht alles schlimmer. Frau Weber muss sich bewegen.",
              },
              {
                text: "Nur Physiotherapie bestellen",
                isCorrect: false,
                explanation: "Physiotherapie ist wichtig, aber reicht nicht allein. Pflege hat eigene Aufgaben: Kinaesthetische Mobilisation, Sturzprophylaxe, Positionierung, Dokumentation. Interprofessionell heisst: ZUSAMMEN, nicht delegieren.",
                explanationB1: "Nur Physiotherapie reicht nicht. Du musst auch selbst Uebungen und Schutz planen.",
              },
            ],
          },
          {
            phase: "evaluation",
            prompt: "Wie evaluierst du den Erfolg nach 7 Tagen?",
            promptB1: "Wie pruefst du nach 7 Tagen, ob der Plan funktioniert?",
            options: [
              {
                text: "Erneuter TUG-Test, Barthel-Index-Reevaluation, Sturzprotokoll pruefen (Stuerze?), Gehstrecke messen, Frau Weber nach subjektiver Sicherheit fragen",
                isCorrect: true,
                explanation: "Vollstaendige Evaluation: Objektive Daten (TUG, Barthel, Gehstrecke) UND subjektive Einschaetzung (Sicherheitsgefuehl). Das Sturzprotokoll zeigt ob Stuerze aufgetreten sind.",
                explanationB1: "Richtig! Tests wiederholen, Stuerze pruefen, Frau Weber fragen wie sie sich fuehlt.",
              },
              {
                text: "Einfach schauen ob es besser geworden ist",
                isCorrect: false,
                explanation: "'Einfach schauen' ist keine Evaluation. Du brauchst messbare Kriterien: TUG-Test (hat sich die Zeit verbessert?), Barthel-Index (hat sich der Score veraendert?), Sturzprotokoll (Stuerze ja/nein?).",
                explanationB1: "Nicht einfach schauen. Du musst Tests machen und Zahlen vergleichen.",
              },
              {
                text: "Den Arzt fragen ob Frau Weber entlassen werden kann",
                isCorrect: false,
                explanation: "Die aerztliche Einschaetzung ist wichtig, aber die Pflegeevaluation ist eigenstaendig. Du hast eigene Kriterien: TUG, Barthel, Gehstrecke, Sturzprotokoll. Pflege evaluiert Pflegeziele — das ist vorbehaltene Taetigkeit.",
                explanationB1: "Du musst selbst pruefen, ob dein Plan funktioniert. Nicht nur den Arzt fragen.",
              },
            ],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 4: ANWENDUNG — Branching Frau Weber Toilette
  // =============================================================
  {
    stepId: "le06-s8-tb15-04",
    phase: "s8",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-400", "Q1 S.346-347"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Frau Weber will zur Toilette",
      body: "Frau Weber steht auf und sagt: 'Ich muss zur Toilette.' Barthel-Index 55, TUG 22 Sekunden. Was tust du?",
      fallbezug: "Frau Weber, 68, Parkinson, erhoehtes Sturzrisiko.",
    },
    contentB1: {
      title: "Frau Weber muss zur Toilette",
      body: "Frau Weber will zur Toilette gehen. Barthel 55, Gehtest 22 Sekunden. Was machst du?",
      fallbezug: "Frau Weber, Parkinson, hohes Sturzrisiko.",
    },
    question: {
      fragetext: "Frau Weber will allein zur Toilette. TUG 22s, Barthel 55. Was tust du?",
      branchingOptions: [
        {
          text: "Ich begleite Sie mit dem Rollator. Ich gehe neben Ihnen und sichere Sie am Becken. Im Bad bleibe ich vor der Tuer — falls Sie mich brauchen, klingeln Sie.",
          feedback: "Richtig! Du begleitest mit Rollator (Hilfsmittel passend zum Barthel 55), sicherst am Becken (Kinaesthetik: Masse, nicht Zwischenraum), und respektierst die Privatsphaere im Bad. Sturzprophylaxe + Autonomie + Wuerde.",
          feedbackB1: "Richtig! Du gehst mit, sicherst sie, aber laesst sie im Bad allein. Das ist Sturzschutz und Respekt.",
          isCorrect: true,
        },
        {
          text: "Gehen Sie ruhig allein, Sie haben ja den Rollator. Ich bin hier wenn etwas ist.",
          feedback: "Zu riskant! TUG 22 Sekunden = erhoehtes Sturzrisiko. Bei Parkinson kann ein Freezing (ploetzliches Einfrieren der Bewegung) jederzeit auftreten. Ohne Begleitung ist ein Sturz sehr wahrscheinlich.",
          feedbackB1: "Zu gefaehrlich! Frau Weber kann jederzeit stuerzen. Du musst mitgehen.",
          isCorrect: false,
        },
        {
          text: "Ich bringe Ihnen eine Bettschussel. Bei Ihrem Sturzrisiko duerfen Sie nicht aufstehen.",
          feedback: "Zu einschraenkend! Barthel-Index 55 zeigt: Frau Weber KANN mit Hilfe zur Toilette. Eine Bettpfanne nimmt ihr unnoetig Autonomie und Wuerde. Ausserdem: Mobilitaet ist Prophylaxe — Bettruhe verschlimmert alle Risiken.",
          feedbackB1: "Nein! Frau Weber kann zur Toilette gehen, mit Hilfe. Im Bett bleiben ist schlecht fuer sie.",
          isCorrect: false,
        },
        {
          text: "Ich hole den Rollstuhl und fahre Sie zur Toilette.",
          feedback: "Nicht optimal. Der Rollstuhl ist bei Barthel 55 nicht noetig — Frau Weber kann mit Rollator gehen. Das Gehen ist sogar therapeutisch: es trainiert Gleichgewicht und Kraft. Rollstuhl = weniger Eigenmobilitaet.",
          feedbackB1: "Der Rollstuhl ist nicht noetig. Frau Weber kann mit dem Rollator gehen. Das ist besser fuer sie.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 5: ANWENDUNG — Fallvergleich 3 Patienten
  // =============================================================
  {
    stepId: "le06-s8-tb15-05",
    phase: "s8",
    stepType: "comparison",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-372", "Q2 S.392-444", "Q5"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Drei Patienten im Vergleich",
      body: "Vergleiche die Mobilisation bei deinen drei Leitfall-Patienten. Was aendert sich bei den kinaesthetischen Prinzipien?",
    },
    contentB1: {
      title: "Drei Patienten vergleichen",
      body: "Vergleiche deine drei Patienten. Was ist bei jedem anders?",
    },
    question: {
      fragetext: "Vergleiche die Mobilisation bei 3 Patienten:",
      comparison: {
        instruction: "Vergleiche Kinaesthetik, Hauptrisiko, Hilfsmittel, Kommunikation und Prophylaxe-Schwerpunkt bei deinen 3 Leitfall-Patienten.",
        columns: [
          { label: "Liam (8 Mon., Bronchitis)", icon: "baby" },
          { label: "Frau Becker (79, Hueft-TEP)", icon: "elderly" },
          { label: "Herr Schmidt (56, Hemiplegie)", icon: "rehabilitation" },
        ],
        rows: [
          {
            criterion: "Kinaesthetik-Besonderheit",
            values: [
              "Infant Handling: Ueber die Seite aufheben, spiralig, Fuesse zuerst ablegen",
              "Spiralige Mobilisation an Bettkante, Massen stuetzen (Schulter/Becken), postoperative Belastungsgrenzen",
              "Bobath-Konzept: Betroffene rechte Seite einbeziehen, Nachttisch rechts, Ansprache von rechts",
            ],
            valuesB1: [
              "Baby ueber die Seite hochheben, nicht parallel",
              "Spiralig drehen, an Schulter und Becken helfen",
              "Bobath: Rechte (kranke) Seite einbeziehen",
            ],
          },
          {
            criterion: "Hauptrisiko",
            values: [
              "Pneumonie (Bronchitis, Lage), vestibulare Ueberreizung bei falschem Handling",
              "Sturz (TUG 25s), Thrombose (Virchow-Trias: alle 3 Faktoren), Dekubitus",
              "Kontraktur rechter Arm/Hand (Spitzfuss, Krallenhand), Sturz (Hemiplegie), Frustration/Verweigerung",
            ],
            valuesB1: [
              "Lungenentzuendung, falsche Lage",
              "Stuerzen, Blutgerinnsel, Druckstellen",
              "Steife Gelenke rechts, Stuerzen, keine Motivation",
            ],
          },
          {
            criterion: "Hilfsmittel",
            values: [
              "Kein Mobilitaetshilfsmittel. Positionierung: Oberkörperhochlage, Drainagelagerung",
              "Rollator, Anti-Thrombose-Struempfe (MTS), Heparin s.c., erhoehter Toilettensitz",
              "Rollstuhl (aktuell), Ziel: Rollator. Schienen fuer rechte Hand. Sensormatte nachts",
            ],
            valuesB1: [
              "Keine. Oberkörper hoch lagern.",
              "Rollator, Struempfe, Heparin-Spritzen",
              "Rollstuhl jetzt, spaeter Rollator. Handschiene.",
            ],
          },
          {
            criterion: "Kommunikation",
            values: [
              "Mit Mutter kommunizieren (Edukation: Lagerung zuhause, SIDS-Praevention). Nonverbal mit Liam.",
              "Eindeutige Sprache, Schritt-fuer-Schritt, Entlassungsberatung (Stolperfallen, Haltegriffe)",
              "Motivation trotz Frustration, Autonomie respektieren, Risiken erklaeren, interprofessionell (Physio + Arzt)",
            ],
            valuesB1: [
              "Mit der Mutter sprechen, Baby kann noch nicht verstehen",
              "Einfach und klar sprechen, Tipps fuer zuhause",
              "Motivieren, nicht zwingen, mit Physiotherapeut zusammenarbeiten",
            ],
          },
          {
            criterion: "Prophylaxe-Schwerpunkt",
            values: [
              "Pneumonieprophylaxe (Oberkörperhochlage, Inhalation), SIDS-Praevention (Rueckenlage beim Schlafen)",
              "Thrombose (MTS + Heparin + Mobilisation), Dekubitus (30-Grad-Seitenlage), Sturz (Umgebung, TUG)",
              "Kontraktur (taegliche Bewegungsuebungen Hand/Arm), Sturz (Sensormatte, Begleitung), Thrombose (Mobilisation)",
            ],
            valuesB1: [
              "Lunge schuetzen, Rueckenlage beim Schlafen",
              "Blutgerinnsel-Schutz, Haut-Schutz, Sturz-Schutz",
              "Gelenke bewegen, vor Stuerzen schuetzen",
            ],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: CHECKPOINT — Pruefungs-MC Virchow-Trias
  // =============================================================
  {
    stepId: "le06-s8-tb16-01",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Pruefungsfrage: Virchow-Trias",
      body: "Pruefungsformat — beantworte die Frage wie in der echten Pruefung.",
    },
    contentB1: {
      title: "Pruefungsfrage",
      body: "Beantworte die Frage wie in einer Pruefung.",
    },
    question: {
      fragetext: "Nenne die 3 Faktoren der Virchow-Trias.",
      optionen: [
        {
          text: "Verlangsamter Blutfluss, Gefaesswandschaedigung, veraenderte Blutzusammensetzung",
          isCorrect: true,
          explanation: "Richtig! Die Virchow-Trias beschreibt die 3 Risikofaktoren fuer eine Thrombose: 1) Verlangsamter Blutfluss (z.B. durch Immobilitaet), 2) Gefaesswandschaedigung (z.B. durch OP), 3) Veraenderte Blutzusammensetzung (z.B. durch Gerinnungsstoerung).",
          explanationB1: "Richtig! 3 Gruende fuer Blutgerinnsel: Langsames Blut, kaputte Gefaesse, veraendertes Blut.",
        },
        {
          text: "Fieber, Schmerzen, Schwellung",
          isCorrect: false,
          explanation: "Das sind Symptome einer Entzuendung (Rubor, Dolor, Tumor, Calor, Functio laesa), nicht die Virchow-Trias. Die Trias beschreibt URSACHEN einer Thrombose, nicht Symptome.",
          explanationB1: "Das sind Zeichen einer Entzuendung, nicht der Virchow-Trias.",
        },
        {
          text: "Immobilitaet, Alter, Uebergewicht",
          isCorrect: false,
          explanation: "Das sind Risikofaktoren fuer viele Erkrankungen, aber nicht die Virchow-Trias. Die Trias ist spezifisch: verlangsamter Blutfluss + Gefaesswandschaedigung + veraenderte Blutzusammensetzung.",
          explanationB1: "Das sind allgemeine Risiken, nicht die Virchow-Trias.",
        },
        {
          text: "Dekubitus, Kontraktur, Pneumonie",
          isCorrect: false,
          explanation: "Das sind Komplikationen bei Immobilitaet, nicht die Virchow-Trias. Thrombose ist EINE dieser Komplikationen — und die Virchow-Trias erklaert ihre 3 Ursachen.",
          explanationB1: "Das sind Folgen von Immobilitaet, nicht die Virchow-Trias.",
        },
      ],
    },
  },

  // =============================================================
  // Step 7: CHECKPOINT — Pruefungs-MC Dekubitus Grad III
  // =============================================================
  {
    stepId: "le06-s8-tb16-02",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Pruefungsfrage: Dekubitus",
      body: "Pruefungsformat — Dekubitus-Klassifikation nach EPUAP/NPUAP.",
    },
    contentB1: {
      title: "Pruefungsfrage: Dekubitus",
      body: "Frage ueber Dekubitus-Grade.",
    },
    question: {
      fragetext: "Dekubitus Grad III nach EPUAP/NPUAP: Was ist sichtbar?",
      optionen: [
        {
          text: "Subkutanes Fettgewebe ist sichtbar, aber KEIN Knochen, keine Sehne, kein Muskel",
          isCorrect: true,
          explanation: "Richtig! Grad III = Verlust aller Hautschichten. Subkutanes Fettgewebe ist sichtbar. Knochen, Sehnen und Muskeln sind noch NICHT freigelegt — das waere Grad IV.",
          explanationB1: "Richtig! Grad III: Alle Hautschichten kaputt. Man sieht Fettgewebe. Aber KEINE Knochen.",
        },
        {
          text: "Knochen, Sehnen oder Muskeln sind freigelegt",
          isCorrect: false,
          explanation: "Das ist Grad IV! Bei Grad IV liegt vollstaendiger Gewebeverlust vor mit freiliegendem Knochen, Sehne oder Muskel. Grad III zeigt nur subkutanes Fettgewebe.",
          explanationB1: "Das ist Grad IV, nicht Grad III. Bei Grad III sieht man nur Fettgewebe.",
        },
        {
          text: "Nur eine nicht wegdrueckbare Roetung bei intakter Haut",
          isCorrect: false,
          explanation: "Das ist Grad I! Fingertest: Roetung bleibt bei Druck bestehen, Haut ist aber noch intakt. Grad III ist wesentlich schwerwiegender.",
          explanationB1: "Das ist Grad I. Nur Roetung, Haut noch ganz. Grad III ist viel schlimmer.",
        },
        {
          text: "Blasenbildung oder flaches Geschwuer",
          isCorrect: false,
          explanation: "Das ist Grad II! Teilzerstoerung der Haut mit Blasenbildung oder flachem Ulkus. Grad III geht tiefer — alle Hautschichten sind zerstoert.",
          explanationB1: "Das ist Grad II. Blasen oder flache Wunde. Grad III geht tiefer.",
        },
      ],
    },
  },

  // =============================================================
  // Step 8: CHECKPOINT — Pruefungs-MC Bobath
  // =============================================================
  {
    stepId: "le06-s8-tb16-03",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Pruefungsfrage: Bobath-Konzept",
      body: "Pruefungsformat — Bobath-Konzept bei neurologischen Patienten.",
    },
    contentB1: {
      title: "Pruefungsfrage: Bobath",
      body: "Frage zum Bobath-Konzept.",
    },
    question: {
      fragetext: "Bobath-Konzept: Warum stellst du den Nachttisch auf die betroffene Seite?",
      optionen: [
        {
          text: "Um Reize fuer die betroffene Seite zu setzen und Neuroplastizitaet zu foerdern",
          isCorrect: true,
          explanation: "Richtig! Das Bobath-Konzept nutzt gezielt Reize auf der betroffenen Seite, um das Gehirn zur Reorganisation anzuregen (Neuroplastizitaet). Nachttisch, Besuch und Ansprache von der betroffenen Seite foerdern die Wahrnehmung und Integration der betroffenen Koerperhaelfte.",
          explanationB1: "Richtig! Die kranke Seite braucht Reize. Dann kann das Gehirn neue Wege lernen.",
        },
        {
          text: "Aus aesthetischen Gruenden — es sieht symmetrischer aus",
          isCorrect: false,
          explanation: "Aesthetik ist nicht der Grund. Der Nachttisch steht auf der betroffenen Seite, damit der Patient sich dorthin drehen und greifen muss — das trainiert die Wahrnehmung und Nutzung der betroffenen Seite.",
          explanationB1: "Nicht wegen Aussehen. Die kranke Seite soll trainiert werden.",
        },
        {
          text: "Weil auf der gesunden Seite kein Platz ist",
          isCorrect: false,
          explanation: "Platzgruende sind nicht der Grund. Es ist eine gezielte therapeutische Massnahme: Die betroffene Seite wird durch Reize (Nachttisch, Besuch, Ansprache) aktiviert.",
          explanationB1: "Nicht wegen Platz. Es ist eine Therapie-Massnahme.",
        },
        {
          text: "Weil der Patient es so wuenscht",
          isCorrect: false,
          explanation: "Patientenwuensche sind wichtig, aber hier geht es um ein therapeutisches Konzept. Bobath-Prinzip: Die betroffene Seite wird ABSICHTLICH einbezogen, um Kompensation zu vermeiden und Neuroplastizitaet zu foerdern.",
          explanationB1: "Nicht weil der Patient es will. Es ist ein therapeutisches Prinzip.",
        },
      ],
    },
  },

  // =============================================================
  // Step 9: ANWENDUNG — Timer Blitz-Runde
  // =============================================================
  {
    stepId: "le06-s8-tb16-04",
    phase: "s8",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-372", "Q2 S.392-444"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Blitz-Runde: 10 Fragen in 90 Sekunden",
      body: "Pruefungsstress simulieren! Alle Themen der LE auf einen Blick. Wie schnell bist du?",
    },
    contentB1: {
      title: "Schnellrunde! 10 Fragen",
      body: "90 Sekunden fuer 10 Fragen. Wie viele schaffst du?",
    },
    question: {
      fragetext: "Beantworte so schnell wie moeglich!",
      timeLimitSeconds: 90,
      timerVariant: "blitz",
      timerQuestions: [
        {
          question: "Kinaesthetik: Wo greifst du NICHT an?",
          options: ["Schulter", "Achselhoehle", "Becken", "Kopf"],
          correctIndex: 1,
        },
        {
          question: "Welche Bewegung ist natuerlicher?",
          options: ["Spiralige", "Parallele", "Lineare", "Keine"],
          correctIndex: 0,
        },
        {
          question: "TUG-Test: 15 Sekunden = ?",
          options: ["Normal", "Leichtes Risiko", "Erhoehtes Risiko", "Bettlaegeig"],
          correctIndex: 1,
        },
        {
          question: "Dekubitus Grad I = ?",
          options: ["Blasen", "Knochen sichtbar", "Nicht wegdrueckbare Roetung", "Fettgewebe sichtbar"],
          correctIndex: 2,
        },
        {
          question: "Heparin wird gespritzt wo?",
          options: ["Intravenoeos", "Intramuskulaer", "Subkutan", "Oral"],
          correctIndex: 2,
        },
        {
          question: "Bobath: Betroffene Seite wird...?",
          options: ["Ignoriert", "Einbezogen", "Fixiert", "Geschont"],
          correctIndex: 1,
        },
        {
          question: "7 Massen: Was gehoert NICHT dazu?",
          options: ["Kopf", "Taille", "Becken", "Brustkorb"],
          correctIndex: 1,
        },
        {
          question: "Barthel-Index Maximalwert?",
          options: ["50", "80", "100", "120"],
          correctIndex: 2,
        },
        {
          question: "Kontraktur am Fuss = ?",
          options: ["Plattfuss", "Spitzfuss", "Senkfuss", "Hallux"],
          correctIndex: 1,
        },
        {
          question: "30-Grad-Seitenlage entlastet...?",
          options: ["Nur Fersen", "Trochanter + Kreuzbein", "Nur Schulter", "Stirn"],
          correctIndex: 1,
        },
      ],
    },
  },

  // =============================================================
  // Step 10: ANWENDUNG — Freetext Frau Weber Sturz
  // =============================================================
  {
    stepId: "le06-s8-tb15-06",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.400", "Q3", "Q1 S.346-347"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Frau Weber ist gestuerzt",
      body: "Tag 3: Frau Weber ist im Bad gestuerzt. Sie hat versucht, sich am Waschbecken festzuhalten, ist aber ausgerutscht. Prellung am linken Ellbogen. Erstelle: 1) Sturzprotokoll, 2) Angepassten Mobilisationsplan, 3) Entlassungsempfehlung.",
      fallbezug: "Frau Weber, 68, Parkinson, Tag 3, Sturz im Bad.",
    },
    contentB1: {
      title: "Frau Weber ist gefallen",
      body: "Frau Weber ist am 3. Tag im Bad gestuerzt. Sie hat sich am Ellbogen verletzt. Schreibe: 1) Was ist passiert? 2) Neuer Plan 3) Was braucht sie zuhause?",
      fallbezug: "Frau Weber, Tag 3, Sturz im Bad, Prellung am Ellbogen.",
    },
    question: {
      fragetext: "Erstelle: 1) Sturzprotokoll, 2) Angepassten Mobilisationsplan, 3) Entlassungsempfehlung fuer Frau Weber.",
      musterantwort: "1) Sturzprotokoll: Datum 17.04.2026, 09:15 Uhr. Ort: Bad, Zimmer 14. Hergang: Patientin wollte sich am Waschbecken hochziehen, Fuesse rutschten auf nassem Boden weg. Fiel auf linke Seite. Verletzungen: Prellung linker Ellbogen, keine offene Wunde, Beweglichkeit erhalten. Vitalzeichen: RR 130/78, Puls 92. Massnahmen: Kuehlung Ellbogen, Arzt informiert, Roentgen Ellbogen angeordnet, Antirutschmatte fuer Bad bestellt, Begleitung Bad ab sofort Pflicht. 2) Angepasster Mobilisationsplan: Begleitung bei ALLEN Transfers und Toilettengaengen. Rollator auch im Zimmer nutzen. Antirutschmatten Bad und Dusche. Haltegriffe pruefen. Kinaesthetische Mobilisation weiter 2x taeglich, zusaetzlich Gleichgewichtstraining mit Physiotherapie. 3) Entlassungsempfehlung: Wohnraumanpassung dringend: Antirutschmatten Bad/Kueche, Haltegriffe Bad und Flur, Nachtlicht, Schwellen entfernen. Rollator fuer innen UND aussen. Ambulanter Pflegedienst 1x taeglich fuer Koerperpflege. Notrufknopf. Physiotherapie ambulant 2x/Woche. Ergotherapie fuer Feinmotorik (Tremor).",
      bewertungskriterien: [
        "Sturzprotokoll vollstaendig (Datum, Ort, Hergang, Verletzung, Vitalzeichen, Massnahmen)",
        "Mobilisationsplan angepasst (mehr Begleitung, Antirutschmatten, Gleichgewichtstraining)",
        "Entlassungsempfehlung konkret (Wohnraumanpassung, Hilfsmittel, ambulante Versorgung)",
        "Zusammenhang zwischen Sturz und Anpassung erkennbar",
      ],
      satzanfaengeB1: [
        "1) Sturzprotokoll: Am ... um ... Uhr ist Frau Weber ...",
        "Verletzung: Am linken Ellbogen ...",
        "Ich habe gemacht: ...",
        "2) Neuer Plan: Ab jetzt muss Frau Weber ...",
        "3) Fuer zuhause braucht sie: ...",
      ],
    },
  },

  // =============================================================
  // Step 11: ANWENDUNG — Errorspot Pflegedokumentation
  // =============================================================
  {
    stepId: "le06-s8-tb16-05",
    phase: "s8",
    stepType: "errorspot",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q2 S.410-416", "Q4", "Q1 S.347", "Q1 S.360-368"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fehler in der Dokumentation",
      body: "Die folgende Pflegedokumentation fuer Frau Weber enthaelt 4 fachliche Fehler. Finde sie!",
    },
    contentB1: {
      title: "Finde die 4 Fehler",
      body: "Dieser Text ueber Frau Weber hat 4 Fehler. Finde sie!",
    },
    question: {
      fragetext: "Finde die 4 Fehler in der Pflegedokumentation:",
      errorspot: {
        instruction: "Markiere die 4 fehlerhaften Stellen in der Dokumentation fuer Frau Weber.",
        text: "Frau Weber, 68 Jahre, Parkinson. MTS nicht noetig da Parkinson keine Thrombosegefahr darstellt. Positionierung alle 4 Stunden. Gehstock links empfohlen (betroffene Seite). Schlafmittel bei Bedarf verordnet.",
        errors: [
          {
            start: 38,
            end: 95,
            correction: "MTS angezeigt da Parkinson durch Immobilitaet Thromboserisiko erhoeht",
            explanation: "Falsch! Parkinson fuehrt zu Immobilitaet — und Immobilitaet ist Virchow-Trias Faktor 1 (verlangsamter Blutfluss). MTS sind bei eingeschraenkter Mobilitaet indiziert.",
            explanationB1: "Falsch! Parkinson macht weniger Bewegung. Das erhoht das Thromboserisiko. MTS sind noetig!",
          },
          {
            start: 97,
            end: 127,
            correction: "Positionierung alle 2 Stunden (individuell angepasst)",
            explanation: "Alle 4 Stunden ist zu selten! Der DNQP-Standard empfiehlt individuell angepasste Intervalle, in der Regel alle 2 Stunden bei Patienten mit eingeschraenkter Eigenbewegung.",
            explanationB1: "Alle 4 Stunden ist zu selten! Alle 2 Stunden ist richtig.",
          },
          {
            start: 129,
            end: 170,
            correction: "Rollator empfohlen (Gehstock bei Parkinson nicht ausreichend, da beidseitige Stuetzung noetig)",
            explanation: "Ein Gehstock reicht bei Parkinson mit Gangunsicherheit nicht aus! Der Rollator bietet beidseitige Stuetzung und Bremsen. Bei Barthel 55 und TUG 22s ist der Rollator das passende Hilfsmittel.",
            explanationB1: "Ein Gehstock reicht nicht! Frau Weber braucht einen Rollator mit Bremsen.",
          },
          {
            start: 172,
            end: 210,
            correction: "Schlafmittel nur als letztes Mittel — bei Sturzrisiko kontraindiziert, erst Schlafhygiene",
            explanation: "'Bei Bedarf' Schlafmittel bei einer sturzgefaehrdeten Patientin ist gefaehrlich! Schlafmittel erhoehen das Sturzrisiko erheblich. Zuerst nicht-medikamentoese Schlafhygiene (Licht, Laerm, Schmerzen, Gewohnheiten).",
            explanationB1: "Schlaftabletten sind gefaehrlich bei Sturzrisiko! Erst andere Massnahmen versuchen.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 12: ANWENDUNG — Conceptmap Immobilitaet
  // =============================================================
  {
    stepId: "le06-s8-tb16-06",
    phase: "s8",
    stepType: "conceptmap",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.392-444"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Alles haengt zusammen",
      body: "Immobilitaet hat viele Folgen — und alle haengen zusammen. Verbinde die Knoten richtig!",
    },
    contentB1: {
      title: "Alles haengt zusammen",
      body: "Wenn ein Patient sich nicht bewegt, hat das viele Folgen. Verbinde die Woerter richtig!",
    },
    question: {
      fragetext: "Verbinde die Konzepte: Was fuehrt wozu? Was verhindert was?",
      conceptmap: {
        instruction: "Verbinde die Knoten: 'fuehrt zu', 'verhindert', 'besteht aus'. Immobilitaet steht im Zentrum.",
        nodes: [
          { id: "immob", label: "Immobilitaet", fixed: true },
          { id: "throm", label: "Thrombose", fixed: false },
          { id: "kontr", label: "Kontraktur", fixed: false },
          { id: "dekub", label: "Dekubitus", fixed: false },
          { id: "pneum", label: "Pneumonie", fixed: false },
          { id: "obstip", label: "Obstipation", fixed: false },
          { id: "mobil", label: "Mobilisation", fixed: true },
          { id: "virch", label: "Virchow-Trias", fixed: false },
        ],
        correctConnections: [
          { from: "immob", to: "throm", label: "fuehrt zu" },
          { from: "immob", to: "kontr", label: "fuehrt zu" },
          { from: "immob", to: "dekub", label: "fuehrt zu" },
          { from: "immob", to: "pneum", label: "fuehrt zu" },
          { from: "immob", to: "obstip", label: "fuehrt zu" },
          { from: "mobil", to: "throm", label: "verhindert" },
          { from: "mobil", to: "kontr", label: "verhindert" },
          { from: "mobil", to: "dekub", label: "verhindert" },
          { from: "mobil", to: "pneum", label: "verhindert" },
          { from: "virch", to: "throm", label: "erklaert" },
        ],
        availableLabels: ["fuehrt zu", "verhindert", "erklaert"],
      },
    },
  },

  // =============================================================
  // Step 13: ANWENDUNG — Matrix Prophylaxe-Priorisierung
  // =============================================================
  {
    stepId: "le06-s8-tb16-07",
    phase: "s8",
    stepType: "matrix",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.392-444"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Prophylaxe-Priorisierung fuer Frau Weber",
      body: "Ordne die Prophylaxen in die Matrix ein: Wie dringend und wie haeufig muss jede durchgefuehrt werden?",
    },
    contentB1: {
      title: "Was ist am wichtigsten fuer Frau Weber?",
      body: "Sortiere die Massnahmen: Was ist dringend? Was muss oft gemacht werden?",
    },
    question: {
      fragetext: "Ordne die Prophylaxen in die 2x2-Matrix ein (Dringlichkeit x Haeufigkeit bei Frau Weber):",
      matrix: {
        instruction: "Ziehe jede Prophylaxe in den richtigen Quadranten fuer Frau Weber (Parkinson, Barthel 55, TUG 22s).",
        axisX: { label: "Dringlichkeit", low: "Niedrig", high: "Hoch" },
        axisY: { label: "Haeufigkeit", low: "Selten", high: "Oft" },
        items: [
          { id: "sturz", text: "Sturzprophylaxe", correctQuadrant: 1 },
          { id: "kontr", text: "Kontrakturprophylaxe", correctQuadrant: 1 },
          { id: "throm", text: "Thromboseprophylaxe", correctQuadrant: 2 },
          { id: "dekub", text: "Dekubitusprophylaxe", correctQuadrant: 2 },
          { id: "pneum", text: "Pneumonieprophylaxe", correctQuadrant: 4 },
          { id: "schlaf", text: "Schlafhygiene", correctQuadrant: 3 },
        ],
      },
    },
  },

  // =============================================================
  // Step 14: ANWENDUNG — ChatSim Frau Weber
  // =============================================================
  {
    stepId: "le06-s8-tb15-07",
    phase: "s8",
    stepType: "chatSim",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347", "Q2 S.392-444"],
    track: "vertiefung",
    modus: "praxis-sim",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Gespraech mit Frau Weber",
      body: "Frau Weber fragt dich: 'Warum muss ich denn immer aufstehen? Mir ist doch schwindelig.' Erklaere ihr die Wichtigkeit der Mobilisation patientenverstaendlich.",
    },
    contentB1: {
      title: "Frau Weber fragt",
      body: "Frau Weber fragt: 'Warum muss ich immer aufstehen? Mir ist schwindelig.' Erklaere es ihr einfach.",
    },
    question: {
      fragetext: "Erklaere Frau Weber, warum Mobilisation trotz Schwindel wichtig ist.",
      chatSim: {
        patientName: "Frau Weber",
        situation: "Frau Weber, 68, Parkinson, Tag 4. Barthel 55, TUG 22s. Hat Angst vor Stuerzen seit dem Sturz im Bad. Fragt, warum sie immer aufstehen muss.",
        situationB1: "Frau Weber, 68, Parkinson. Sie hat Angst vor Stuerzen. Sie fragt, warum sie immer aufstehen muss.",
        systemPrompt: "Du bist Frau Weber, 68 Jahre, Morbus Parkinson. Du hast Angst vor Stuerzen seit dem Sturz im Bad. Du fragst: 'Warum muss ich immer aufstehen? Mir ist doch schwindelig.' Du bist freundlich aber aengstlich. Du verstehst einfache Erklaerungen. Wenn der Schueler gut erklaert (Prophylaxen, Sturzschutz, Hilfsmittel), wirst du zuversichtlicher. Wenn er Fachbegriffe benutzt ohne zu erklaeren, fragst du nach. Nach 3-5 Turns fasst du zusammen was du verstanden hast.",
        maxTurns: 5,
        evaluationCriteria: [
          "Erklaert WARUM Mobilisation wichtig ist (Prophylaxen: Thrombose, Kontraktur, Dekubitus, Pneumonie)",
          "Benennt Schutz-Massnahmen (Rollator, Begleitung, Antirutschmatten)",
          "Spricht patientenverstaendlich (keine unerklaerten Fachbegriffe)",
          "Nimmt die Angst ernst (Sandwich-Prinzip)",
          "Vermittelt: Bewegung ist Schutz, nicht Gefahr",
        ],
      },
    },
  },

  // =============================================================
  // Step 15: INTERLEAVING — LE-04 FEM bei Frau Weber
  // =============================================================
  {
    stepId: "le06-s8-sn-01",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q2 S.400"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Rueckblick LE-04: Recht und Freiheit",
      body: "Frau Weber sagt: 'Fixieren Sie mich doch im Rollstuhl, dann kann ich nicht mehr fallen.' Was sagt das Recht?",
    },
    contentB1: {
      title: "Was sagt das Recht?",
      body: "Frau Weber will im Rollstuhl fixiert werden. Darf man das?",
    },
    question: {
      fragetext: "Frau Weber will im Rollstuhl fixiert werden, damit sie nicht stuerzt. Was ist rechtlich korrekt?",
      optionen: [
        {
          text: "Fixierung ist eine freiheitsbeschraenkende Massnahme und braucht eine richterliche Genehmigung",
          isCorrect: true,
          explanation: "Richtig! Fixierung im Rollstuhl ist eine FEM (freiheitsbeschraenkende Massnahme). Sie braucht eine richterliche Genehmigung — auch wenn die Patientin selbst darum bittet. Alternativen muessen zuerst geprueft werden: Rollator mit Bremsen, Begleitung, Sturzhelm.",
          explanationB1: "Richtig! Fixierung braucht eine Genehmigung vom Gericht. Auch wenn die Patientin es will.",
        },
        {
          text: "Wenn die Patientin es selbst will, darf man sofort fixieren",
          isCorrect: false,
          explanation: "Falsch! Auch bei Einwilligung der Patientin bleibt die Fixierung eine FEM und unterliegt strengen rechtlichen Regelungen. Es muessen immer zuerst Alternativen geprueft werden.",
          explanationB1: "Falsch! Auch wenn die Patientin es will, braucht man eine Genehmigung.",
        },
        {
          text: "Der Arzt entscheidet allein ueber Fixierungen",
          isCorrect: false,
          explanation: "Der Arzt kann keine Fixierung allein anordnen. FEM benoetigen eine richterliche Genehmigung (ausser bei akuter Gefahr fuer kurze Zeit). Die Entscheidung ist nicht allein aerztlich.",
          explanationB1: "Der Arzt entscheidet das nicht allein. Ein Richter muss zustimmen.",
        },
        {
          text: "Fixierung ist bei Sturzgefahr immer erlaubt",
          isCorrect: false,
          explanation: "Absolut falsch! Sturzgefahr allein rechtfertigt keine Fixierung. Es gibt viele Alternativen: Niedrigbett, Sensormatten, Sturzhelm, Rollator, Begleitung. Fixierung ist immer das letzte Mittel.",
          explanationB1: "Falsch! Sturzgefahr heisst nicht automatisch Fixierung. Es gibt viele andere Moeglichkeiten.",
        },
      ],
    },
  },

  // =============================================================
  // Step 16: INTERLEAVING — LE-08 Ernaehrung bei Immobilitaet
  // =============================================================
  {
    stepId: "le06-s8-sn-02",
    phase: "s8",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Rueckblick LE-08: Ernaehrung und Immobilitaet",
      body: "Frau Weber isst seit der Aufnahme wenig. Warum ist Eiweissmangel bei Immobilitaet doppelt gefaehrlich?",
    },
    contentB1: {
      title: "Warum ist Eiweiss wichtig?",
      body: "Frau Weber isst wenig. Warum ist das bei wenig Bewegung besonders gefaehrlich?",
    },
    question: {
      fragetext: "Warum ist Eiweissmangel bei immobilen Patienten doppelt gefaehrlich?",
      optionen: [
        {
          text: "Muskelabbau (Proteolyse) bei Bettlaegerigkeit PLUS Eiweissmangel senkt die Gewebetoleranz und erhoeht das Dekubitusrisiko",
          isCorrect: true,
          explanation: "Richtig! Doppeltes Risiko: 1) Immobilitaet = Muskelabbau durch Proteolyse (Muskeln werden abgebaut wenn sie nicht benutzt werden). 2) Eiweissmangel = geringere Gewebetoleranz, das heisst die Haut ist empfindlicher gegen Druck. Beides zusammen erhoeht das Dekubitusrisiko massiv.",
          explanationB1: "Richtig! Ohne Bewegung werden Muskeln schwaecher. Ohne Eiweiss wird die Haut duenner. Beides zusammen = Dekubitus-Gefahr!",
        },
        {
          text: "Eiweissmangel macht muede",
          isCorrect: false,
          explanation: "Muedigkeit kann eine Folge sein, ist aber nicht der Hauptgrund fuer die doppelte Gefahr. Das Problem ist: Muskelabbau + geringere Gewebetoleranz = erhoehtes Dekubitusrisiko.",
          explanationB1: "Muede werden ist nicht der Hauptgrund. Das Problem ist Muskelschwaeche und duenne Haut.",
        },
        {
          text: "Eiweissmangel ist nur bei Kindern gefaehrlich",
          isCorrect: false,
          explanation: "Eiweissmangel ist in jedem Alter gefaehrlich, besonders aber bei immobilen aelteren Patienten: Muskelabbau (Sarkopenie) plus Dekubitusrisiko durch reduzierte Gewebetoleranz.",
          explanationB1: "Nein! Eiweissmangel ist auch bei Erwachsenen gefaehrlich. Besonders wenn sie sich wenig bewegen.",
        },
        {
          text: "Eiweiss hat keine Bedeutung bei Immobilitaet",
          isCorrect: false,
          explanation: "Im Gegenteil! Bei Immobilitaet ist Eiweiss BESONDERS wichtig: um dem Muskelabbau entgegenzuwirken und die Gewebetoleranz (Dekubitusprophylaxe) aufrechtzuerhalten.",
          explanationB1: "Falsch! Eiweiss ist bei wenig Bewegung sogar besonders wichtig.",
        },
      ],
    },
  },

  // =============================================================
  // Step 17: ANWENDUNG — Freetext Wochenplan (Bloom B6)
  // =============================================================
  {
    stepId: "le06-s8-tb16-08",
    phase: "s8",
    stepType: "freetext",
    bloomLevel: 6,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-372", "Q2 S.392-444", "Q3", "Q5"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Challenge: Wochenplan fuer Frau Weber",
      body: "Erstelle einen Wochenplan fuer Frau Weber: Montag bis Freitag, je 3 Schwerpunkte pro Tag. Beruecksichtige: Kinaesthetik, alle 5 Prophylaxen, Transfer-Training, Entlassungsvorbereitung. Bloom-Stufe 6: Erschaffen!",
    },
    contentB1: {
      title: "Wochenplan fuer Frau Weber",
      body: "Schreibe einen Plan fuer 5 Tage. Jeden Tag 3 Schwerpunkte. Was uebst du mit Frau Weber?",
    },
    question: {
      fragetext: "Erstelle einen Wochenplan (Mo-Fr) fuer Frau Weber mit je 3 Schwerpunkten pro Tag.",
      musterantwort: "Montag: 1) Barthel-Index + TUG-Test (Baseline), 2) Kinaesthetische Erstmobilisation (Bett→Bettkante→Stand mit Rollator), 3) Sturzprophylaxe (Umgebung: Antirutschmatten, Beleuchtung, Klingel). Dienstag: 1) Kontrakturprophylaxe (Fingeruebungen, Handgelenk, aktiv mit Physiotherapie), 2) Transfer-Training Bett→Rollstuhl (5-Schritt-Verfahren, Rollator), 3) Thromboseprophylaxe (MTS anziehen ueben, Beinuebungen im Bett). Mittwoch: 1) Gehtraining Stationsflur mit Rollator (Distanz steigern), 2) Dekubitusprophylaxe (Positionierungsplan, Hautinspektion), 3) Schlafhygiene besprechen (Gewohnheiten erfragen, Umgebung optimieren). Donnerstag: 1) Transfer Bad mit Begleitung (Duschhocker, Haltegriffe), 2) Entlassungsberatung mit Sohn (Wohnraumanpassung besprechen), 3) Pneumonieprophylaxe (Atemuebungen, Oberkörperhochlage). Freitag: 1) TUG-Test Re-Evaluation (Fortschritt messen), 2) Entlassungscheckliste (Hilfsmittel, Notrufknopf, ambulanter Pflegedienst), 3) Abschlussgespraech (Frau Weber erklaert selbst ihre Uebungen — Teach-Back).",
      bewertungskriterien: [
        "5 Tage mit je 3 Schwerpunkten",
        "Alle 5 Prophylaxen vorkommen (Sturz, Thrombose, Kontraktur, Dekubitus, Pneumonie)",
        "Kinaesthetik und Transfer-Training enthalten",
        "Entlassungsvorbereitung integriert",
        "Realistische Steigerung der Anforderungen ueber die Woche",
      ],
      satzanfaengeB1: [
        "Montag: 1) ..., 2) ..., 3) ...",
        "Dienstag: 1) ..., 2) ..., 3) ...",
        "Mittwoch: 1) ..., 2) ..., 3) ...",
        "Donnerstag: 1) ..., 2) ..., 3) ...",
        "Freitag: 1) ..., 2) ..., 3) ...",
      ],
    },
  },

  // =============================================================
  // Step 18: REFLEXION — Abschlussgespraech mit Praxisanleiterin
  // =============================================================
  {
    stepId: "le06-s8-tb16-09",
    phase: "s8",
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Abschlussgespraech",
      body: "Die Praxisanleiterin setzt sich mit dir zusammen fuer ein Abschlussgespraech ueber die Lerneinheit Mobilitaet.",
    },
    contentB1: {
      title: "Abschlussgespraech",
      body: "Die Praxisanleiterin redet mit dir ueber das, was du gelernt hast.",
    },
    question: {
      fragetext: "Die Praxisanleiterin fragt: 'Was hast du in dieser Lerneinheit am meisten verstanden? Und wo brauchst du noch Uebung?'",
      patientName: "Praxisanleiterin",
      dialogPhases: [
        {
          context: "Die Praxisanleiterin laechelt: 'Du hast in den letzten Wochen viel ueber Mobilitaet gelernt. Was war fuer dich der wichtigste Aha-Moment? Und worin fuehlst du dich noch unsicher?'",
          contextB1: "Die Praxisanleiterin fragt: 'Was hast du am meisten gelernt? Und was ist noch schwer fuer dich?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Am meisten hat mich beeindruckt, wie alles zusammenhaengt: Immobilitaet fuehrt gleichzeitig zu Thrombose, Kontraktur, Dekubitus und Pneumonie. Die Kinaesthetik hat mir gezeigt, dass ich Patienten unterstuetze statt zu uebernehmen. Unsicher bin ich noch bei der Bobath-Umsetzung — das moechte ich in der Praxis mehr ueben.",
              textB1: "Ich habe gelernt: Alles haengt zusammen. Nicht bewegen = viele Probleme. Kinaesthetik hilft, Patienten selbst machen zu lassen. Bobath moechte ich noch mehr ueben.",
              patientResponse: "Das ist eine reife Reflexion! Du erkennst Zusammenhaenge und weisst wo du staerker werden willst. Bobath ueben wir im naechsten Praxiseinsatz gezielt.",
              patientResponseB1: "Sehr gut! Du weisst was du gelernt hast und was du noch ueben willst.",
              score: 3,
              feedback: "Exzellente Selbsteinschaetzung! Du verbindest verschiedene Themen, erkennst den Kinaesthetik-Grundsatz (Unterstuetzen statt Uebernehmen) und benennst ehrlich eine Schwaeche. Das zeigt professionelle Reflexionskompetenz.",
              feedbackB1: "Super! Du weisst was du gut kannst und was du noch ueben musst. Das ist professionell.",
            },
            {
              text: "Alles war interessant. Ich glaube, ich kann jetzt alles.",
              textB1: "Alles war gut. Ich kann jetzt alles.",
              patientResponse: "Hmm... das freut mich, aber sei ehrlich: Gibt es wirklich keinen Bereich, in dem du dich noch unsicher fuehlst? Selbstkritik ist eine wichtige Kompetenz.",
              patientResponseB1: "Wirklich alles? Gibt es nichts, was du noch ueben moechtest?",
              score: 1,
              feedback: "Zu unkritisch! Niemand kann nach einer Lerneinheit 'alles'. Professionelle Reflexion bedeutet: Staerken erkennen UND Schwaechen benennen. Das ist keine Schwaeche — das ist Lernkompetenz.",
              feedbackB1: "Sei ehrlich! Es ist gut, Schwaechen zu benennen. Das hilft dir beim Lernen.",
            },
            {
              text: "Ehrlich gesagt war es viel Stoff. Ich bin mir nicht sicher, was ich wirklich behalten habe.",
              textB1: "Es war sehr viel. Ich weiss nicht, was ich behalten habe.",
              patientResponse: "Das ist ehrlich! Lass uns zusammen ueberlegen: Was kannst du konkret benennen, was du jetzt besser verstehst als vorher?",
              patientResponseB1: "Das ist ehrlich. Was weisst du jetzt besser als vorher?",
              score: 2,
              feedback: "Ehrlichkeit ist gut! Aber versuche, konkreter zu werden: Was hast du DEFINITIV verstanden? Was muss wiederholt werden? Eine strukturierte Selbsteinschaetzung hilft mehr als ein allgemeines 'es war viel'.",
              feedbackB1: "Ehrlich sein ist gut. Aber sage auch konkret, was du gelernt hast.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 19: REFLEXION — Rubrik-Selfrating
  // =============================================================
  {
    stepId: "le06-s8-tb16-10",
    phase: "s8",
    stepType: "selfrating",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Kompetenz-Selbsteinschaetzung",
      body: "Schaetze deine Kompetenz in 5 Bereichen ein: Anfaenger, Fortgeschritten, Kompetent oder Experte. Sei ehrlich — die Einschaetzung hilft der Plattform, deine naechsten Lerneinheiten zu planen.",
    },
    contentB1: {
      title: "Wie gut bist du?",
      body: "Schaetze dich selbst ein. 4 Stufen: Anfaenger, Fortgeschritten, Gut, Sehr gut. Sei ehrlich!",
    },
    question: {
      fragetext: "Schaetze deine Kompetenz in diesen 5 Bereichen ein:",
      selfratingVariant: "rubrik",
    },
  },

  // =============================================================
  // Step 20: REFLEXION — Tiefe Reflexion
  // =============================================================
  {
    stepId: "le06-s8-tb16-11",
    phase: "s8",
    stepType: "reflection",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Mobilisation ist mehr als nur aufstehen",
      body: "Ein letzter Gedanke zum Abschluss der Lerneinheit.",
    },
    contentB1: {
      title: "Mehr als nur aufstehen",
      body: "Ein letzter Gedanke.",
    },
    question: {
      fragetext: "'Mobilisation ist mehr als nur aufstehen.' Was bedeutet dieser Satz fuer dich nach 8 Sessions? Nenne 3 Aspekte, die dir vorher nicht bewusst waren.",
      reflection: {
        prompt: "'Mobilisation ist mehr als nur aufstehen.' Was bedeutet dieser Satz fuer dich nach 8 Sessions? Nenne 3 Aspekte, die dir vorher nicht bewusst waren.",
        placeholder: "Mobilisation bedeutet fuer mich jetzt...",
        systemPrompt: "Der Schueler reflektiert ueber 8 Sessions Mobilitaet. Er soll 3 Aspekte nennen, die ihm vorher nicht bewusst waren. Moegliche Aspekte: Prophylaxen (nicht nur Sturz, sondern 5 Komplikationen), Kommunikation (Wie man spricht ist genauso wichtig wie Was man tut), Kinaesthetik (Unterstuetzen statt Uebernehmen), Autonomie (Patientenwille vs. Prophylaxe), Dokumentation (rettet Leben), Zusammenhaenge (alles haengt zusammen). Bewerte mit Sandwich-Prinzip.",
      },
    },
  },

  // =============================================================
  // Step 21: REFLEXION — Gesamtzusammenfassung LE-06
  // =============================================================
  {
    stepId: "le06-s8-tb16-12",
    phase: "s8",
    stepType: "summary",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-372", "Q2 S.392-444", "Q3", "Q4", "Q5"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    audioUrl: "audio:zusammenfassung",
    contentC1: {
      title: "LE-06 Komplett — Alles auf einen Blick",
      body: "Du hast in 8 Sessions die komplette Lerneinheit 'Menschen in ihrer Mobilitaet unterstuetzen' durchgearbeitet. Hier ist dein Gesamtueberblick:\n\nKinaesthetik: 7 Massen, 6 Zwischenraeume, spiralige Bewegung, 6 Praxisregeln\nPositionierung: 7 Grundpositionen, 6 Positionierungsarten + Indikationen, Infant Handling\nProphylaxen: Sturz (TUG, Massnahmen, Protokoll), Thrombose (Virchow-Trias, MTS, Heparin), Kontraktur (Bewegungsuebungen, Spitzfuss/Krallenhand), Pneumonie (Atemuebungen, Oberkörperhochlage), Dekubitus (EPUAP Grad I-IV, 30-Grad-Seitenlage)\nBobath: Betroffene Seite einbeziehen, Neuroplastizitaet\nTransfer: 5-Schritt-Verfahren, Hilfsmittel (Rollator, Rutschbrett, Drehscheibe)\nAssessment: Barthel-Index (0-100), TUG-Test (<10/10-19/>=20s)\nKommunikation: Eindeutig, Schritt-fuer-Schritt, Entlassungsberatung\nDokumentation: Mobilisationsplan, Sturzprotokoll, Positionierungsprotokoll",
    },
    contentB1: {
      title: "Alles gelernt!",
      body: "Du hast alle 8 Sessions geschafft! Hier ist alles zusammen:\n\nKinaesthetik: 7 Massen, spiralige Bewegung, 6 Regeln\nPositionen: 7 Grundpositionen, 6 Lagerungs-Arten, Baby richtig hochheben\nSchutz vor: Stuerzen, Blutgerinnseln, steifen Gelenken, Lungenentzuendung, Druckstellen\nBobath: Kranke Seite einbeziehen\nTransfer: Vom Bett in den Rollstuhl in 5 Schritten\nTests: Barthel-Index und Geh-Test\nSprechen: Klar und Schritt fuer Schritt\nAufschreiben: 3 verschiedene Protokolle",
    },
    question: {
      fragetext: "Gesamtzusammenfassung LE-06",
      summary: {
        reflexionRueckbezug: "8 Sessions, 3 Leitfaelle, 1 Transfer-Patientin — du hast gelernt, Menschen aller Altersstufen in ihrer Mobilitaet zu unterstuetzen.",
        kernaussagen: [
          "Kinaesthetik: 7 Massen stuetzen, 6 Zwischenraeume frei lassen, spiralig statt parallel",
          "5 Prophylaxen: Sturz, Thrombose, Kontraktur, Pneumonie, Dekubitus — alles haengt mit Immobilitaet zusammen",
          "Bobath bei neurologischen Patienten: Betroffene Seite einbeziehen, nicht kompensieren",
          "Assessment: Barthel-Index (0-100) und TUG-Test (Sturzrisiko) sind die Basis fuer den Pflegeplan",
          "Kommunikation: Eindeutige Sprache, Schritt-fuer-Schritt, Entlassungsberatung",
          "Dokumentation: Mobilisationsplan, Sturzprotokoll, Positionierungsprotokoll — rettet Leben",
          "Autonomie: Patientenwille respektieren, aber Risiken erklaeren. Motivation statt Zwang.",
        ],
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Abschluss-Selfrating
  // =============================================================
  {
    stepId: "le06-s8-tb16-13",
    phase: "s8",
    stepType: "selfrating",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Pruefungsreife-Check",
      body: "Wie bereit fuehlst du dich fuer eine Pruefung ueber Mobilitaet? Welches Thema willst du wiederholen? Die Plattform empfiehlt dir basierend auf deiner Einschaetzung passende Spaced-Repetition-Einheiten.",
    },
    contentB1: {
      title: "Bist du bereit fuer die Pruefung?",
      body: "Wie sicher fuehlst du dich? Welches Thema willst du nochmal ueben?",
    },
    question: {
      fragetext: "Wie bereit fuehlst du dich fuer eine Pruefung ueber Mobilitaet?",
    },
  },
];

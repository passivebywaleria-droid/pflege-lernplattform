// CE-02 Situation Baby Emilia — Phase 4: Säuglingsbad, Wickeln, Mutter begleiten
// Steps: 7 Kern + 2 Optional · Bloom: B4-B5 · Zeit: ~25-40 Min
// Komplikation K1: Mutter Laura weint · Komplikation K2: Emilia schreit
// Quelle: content/ce-02/situationen/ls-emilia-saeugling/phase-durchfuehren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_EMILIA_SAEUGLING_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-emilia-durchfuehren",
  phase: "durchfuehren",
  titel: "Säuglingsbad, Wickeln & Mutter begleiten",
  titelB1: "Durchführen — Baden, Wickeln, Laura helfen",
  kontext:
    "Es ist 10:00 Uhr. Emilia hat eine kleine Trinkmahlzeit hinter sich — besser als erwartet, 40 ml in zwei Versuchen. Die Windel ist nass, Stuhl gelblich-pastös, Turgor stabil. Jetzt: Säuglingsbad. Das ist auch ein Lehrmoment für Laura — sie hat Emilia noch nie richtig gebadet, nur Katzenwäsche gemacht. Du wirst das Bad durchführen und Laura dabei anleiten. Andrea schaut kurz rein, geht aber dann wieder — du bist verantwortlich.",
  kontextB1:
    "Es ist 10:00 Uhr. Emilia hat etwas getrunken — besser als erwartet. Jetzt: Säuglingsbad. Laura hat Emilia noch nie richtig gebadet. Du führst das Bad durch. Laura schaut zu und soll lernen. Andrea kommt kurz vorbei, geht dann wieder. Du bist verantwortlich.",
  kernSteps: [
    // Step 4.1 — Sorting: Bad vorbereiten
    {
      stepId: "ce02-emilia-dur-01-bad-vorbereitung-sortierung",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-emilia-dur-badvorbereitung",
      tag: "pflege",
      contentC1: {
        title: "Säuglingsbad vorbereiten — Reihenfolge",
        body: "Was bereitest du VOR dem Bad vor? Bringe die Schritte in die richtige Reihenfolge. Denke an Verbrühungsgefahr, Auskühlung und Laura.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Bad vorbereiten — was zuerst?",
        body: "Bringe die Schritte in die richtige Reihenfolge, bevor du mit dem Bad beginnst.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Vorbereitungsschritte in die richtige Reihenfolge.",
        sortItems: [
          "Eigene Hände waschen / desinfizieren (RKI: vor Patientenkontakt)",
          "Raumtemperatur prüfen: mindestens 24 °C, kein Luftzug",
          "Alle Materialien griffbereit legen: Handtuch, frische Windel, Kleidung",
          "Badewanne füllen — Wassertemperatur 37 °C mit Badethermometer messen",
          "Laura erklären was jetzt passiert und was sie beobachten soll",
          "Hände unmittelbar vor Hautkontakt nochmals desinfizieren",
          "Emilia ausziehen — erst dann ins Wasser",
        ],
      },
    },

    // Step 4.2 — Text (stepbystep): Infant Handling erklärt
    {
      stepId: "ce02-emilia-dur-02-infant-handling-erklaert",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-emilia-dur-infant-handling",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Infant Handling beim Säuglingsbad — 5 Prinzipien",
        body: "Bevor du anfängst: die 5 Prinzipien beim Säuglingsbad.\n\n**1. Kopf immer sicher halten:** Nacken liegt auf dem Unterarm, Daumen und Zeigefinger umfassen die Schulter.\n\n**2. Haltearm schafft feste Führung:** Der haltende Arm bleibt ruhig. Die freie Hand wäscht.\n\n**3. Bewegungen langsam und ankündigen:** Emilia braucht Zeit um sich anzupassen. \"Jetzt wasche ich deinen Rücken.\"\n\n**4. Reihenfolge: Gesicht → Körper → Haare:** Von oben nach unten — damit Schmutz nicht nach oben gelangt. Gesicht mit trockenem Waschlappen, Augen von innen nach außen.\n\n**5. Wassertemperatur prüfen:** Vor dem Eintauchen nochmals am Handgelenk prüfen. *(Hoehl/Kullick, 2019 — Infant Handling)*",
        glossarBegriffe: ["Infant Handling"],
      },
      contentB1: {
        title: "Säuglingsbad — 5 wichtige Regeln",
        body: "Bevor du anfängst — lerne diese 5 Regeln:\n\n**1. Kopf immer halten:** Nacken liegt auf deinem Unterarm.\n**2. Eine Hand hält, eine wäscht:** Der Haltearm bewegt sich nicht.\n**3. Langsam und ansagen:** Sage Emilia was du tust: \"Jetzt der Rücken.\"\n**4. Zuerst Gesicht, dann Körper, dann Haare:** Von oben nach unten.\n**5. Wasser prüfen:** 37 °C — nochmal am Handgelenk testen.",
        glossarBegriffe: ["Infant Handling"],
      },
    },

    // Step 4.3 — Dialog (5 Phasen): Bad durchführen + Laura-Zitat Z4
    {
      stepId: "ce02-emilia-dur-03-bad-durchfuehren",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-emilia-dur-bad-dialog",
      tag: "pflege",
      contentC1: {
        title: "Das Säuglingsbad — Schritt für Schritt",
        body: "Du hast alles vorbereitet. Laura schaut aufmerksam zu. Du beginnst mit dem Bad. Zwischendurch fragt Laura etwas.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Das Bad durchführen",
        body: "Du beginnst das Bad. Laura schaut zu. Zwischendurch fragt sie etwas.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wie reagierst du auf Lauras Frage?",
        patientName: "Laura K.",
        dialogPhases: [
          {
            context:
              "Du hast Emilias Gesicht gewaschen und beginnst mit dem Körper. Emilia ist zunächst still, dann beginnt sie leise zu quengeln. Laura schaut besorgt.",
            contextB1:
              "Du wäschst Emilias Körper. Emilia quengelt leise. Laura ist besorgt.",
            speaker: "Du",
            options: [
              {
                text: "\"Das ist ganz normal, Laura — Emilia gewöhnt sich gerade ans Wasser. Schau mal, wie sie nachher entspannt sein wird.\"",
                textB1:
                  "\"Das ist normal. Emilia gewöhnt sich an das Wasser. Gleich wird sie entspannter sein.\"",
                patientResponse:
                  "Laura nickt, beobachtet weiter. \"Okay. Ich dachte, ich mache etwas falsch.\"",
                patientResponseB1:
                  "Laura nickt. \"Ich dachte, ich habe etwas falsch gemacht.\"",
                score: 3,
                feedback:
                  "Du normalisierst Emilias Reaktion und schließt Lauras stille Schuldfrage aus ('ich mache etwas falsch'). Gleichzeitig gibst du eine Vorschau auf eine positive Reaktion — das hält Laura bei der Beobachtung.",
                feedbackB1:
                  "Sehr gut. Du erklärst, dass es normal ist. Und du nimmst Laura die Sorge, sie habe etwas falsch gemacht.",
              },
              {
                text: "\"Warte, ich mache jetzt weiter — Emilia ist etwas empfindlich.\"",
                textB1:
                  "\"Warte, ich mache weiter. Emilia ist empfindlich.\"",
                patientResponse:
                  "Laura tritt einen Schritt zurück. Sie schaut weg.",
                patientResponseB1:
                  "Laura tritt zurück. Sie schaut weg.",
                score: 0,
                feedback:
                  "Ausgrenzend. Du schickst Laura mental aus dem Zimmer — und erklärst ihr nichts. Das ist eine verpasste Gelegenheit für Mutter-Kind-Anleitung, die Lauras Selbstwirksamkeit unterstützt.",
                feedbackB1:
                  "Du schickst Laura weg. Das ist falsch. Laura soll dabei sein und lernen.",
              },
            ],
          },
          {
            context:
              "Emilia beruhigt sich wieder. Du wäschst den Rücken. Laura schaut fasziniert zu. Dann sagt sie:",
            contextB1:
              "Emilia wird ruhiger. Du wäschst den Rücken. Laura sagt:",
            speaker: "Laura K.",
            options: [
              {
                text: "\"Gerne — ich zeige dir jetzt genau was ich mache. Beim nächsten Bad bist du dran, ich helfe dir dabei.\"",
                textB1:
                  "\"Gerne. Ich zeige es dir jetzt. Beim nächsten Mal machst du es — ich bin dabei.\"",
                patientResponse:
                  "Lauras Gesicht hellt sich auf. \"Ja! Das wäre toll. Ich will das richtig lernen.\"",
                patientResponseB1:
                  "Laura freut sich. \"Ja! Das will ich richtig lernen.\"",
                score: 3,
                feedback:
                  "Anleitung statt Übernahme. Du gibst Laura Handlungskompetenz — sie soll nicht zuschauen, sondern lernen. Das ist Pflegeberatung: Befähigen statt Versorgen. *(Vgl. WHO Empowerment-Konzept)*",
                feedbackB1:
                  "Sehr gut. Du zeigst — und beim nächsten Mal macht Laura selbst. Das macht Laura sicherer.",
              },
              {
                text: "\"Heute nicht — ich mache das erst einmal alleine.\"",
                textB1:
                  "\"Heute nicht. Ich mache es erst alleine.\"",
                patientResponse:
                  "Laura nickt, aber sie wirkt enttäuscht. \"Okay…\"",
                patientResponseB1:
                  "Laura ist enttäuscht. \"Okay.\"",
                score: 1,
                feedback:
                  "Zu defensiv. Lauras Frage war ein Signal für Bereitschaft und Motivation — genau der Moment um Anleitung zu starten. 'Heute nicht' vergibt diese Chance.",
                feedbackB1:
                  "Diese Chance solltest du nutzen. Laura will lernen. Zeige es ihr jetzt.",
              },
              {
                text: "\"Du kannst jetzt gleich die Haare waschen.\"",
                textB1:
                  "\"Du kannst die Haare waschen.\"",
                patientResponse:
                  "\"Die… Haare? Ich weiß nicht wie…\"",
                patientResponseB1:
                  "\"Die Haare? Ich weiß nicht wie.\"",
                score: 1,
                feedback:
                  "Gute Absicht, aber kein schrittweiser Aufbau. Haare waschen beim Säugling ist eine spezifische Fertigkeit (Kopf halten, Wasser schützen). Ohne Erklärung davor zu übergeben ist zu viel auf einmal.",
                feedbackB1:
                  "Gute Idee — aber erkläre zuerst wie man es macht. Dann kann Laura es versuchen.",
              },
            ],
          },
          {
            context:
              "Das Bad ist fast fertig. Du hebst Emilia aus dem Wasser und wickelst sie schnell in das Handtuch. Emilia schreit kurz laut auf.",
            contextB1:
              "Das Bad ist fast fertig. Du hebst Emilia heraus und wickelst sie ins Handtuch. Emilia schreit kurz.",
            speaker: "Du",
            options: [
              {
                text: "\"Das ist ganz normal — der Temperaturwechsel überrascht sie kurz. Du kannst sie jetzt halten, Laura — sie beruhigt sich schnell auf deinem Arm.\"",
                textB1:
                  "\"Das ist normal — der Wechsel von warm zu kühl überrascht sie. Laura, du kannst sie jetzt nehmen — sie beruhigt sich schnell.\"",
                patientResponse:
                  "Laura nimmt Emilia. Emilia beruhigt sich tatsächlich rasch. Laura lächelt das erste Mal richtig.",
                patientResponseB1:
                  "Laura nimmt Emilia. Emilia wird ruhiger. Laura lächelt.",
                score: 3,
                feedback:
                  "Du erklärst (normales Verhalten), delegierst sinnvoll (Laura hält Emilia — erste Erfolgserfahrung) und schaffst einen positiven Moment. Das ist didaktische Mutter-Kind-Pflege.",
                feedbackB1:
                  "Sehr gut. Du erklärst, dann gibst du Laura Emilia — sie beruhigt Emilia selbst. Das ist ein wichtiger Moment für Laura.",
              },
              {
                text: "\"Ich halte sie jetzt bis sie ruhig ist.\"",
                textB1:
                  "\"Ich halte sie, bis sie ruhig ist.\"",
                patientResponse:
                  "Laura schaut zu. Emilia beruhigt sich nach kurzer Zeit.",
                patientResponseB1:
                  "Laura schaut nur zu.",
                score: 1,
                feedback:
                  "Du beruhigst Emilia — das ist korrekt. Aber du verpasst die Chance, Laura einzubeziehen. Emilia beruhigt sich auf dem Arm der Mutter sogar schneller — und Laura bekommt eine wichtige Erfolgserfahrung.",
                feedbackB1:
                  "Nicht falsch — aber Laura hätte jetzt Emilia halten können. Das wäre wichtig für sie.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.4 — Sequencing: Wickeln kinästhetisch
    {
      stepId: "ce02-emilia-dur-04-wickeln-kinaesthetik",
      phase: 4,
      stepType: "sequencing",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-emilia-dur-wickeln",
      tag: "pflege",
      contentC1: {
        title: "Wickeln — kinästhetisch korrekte Reihenfolge",
        body: "Bringe die Schritte beim Wickeln in die korrekte Reihenfolge. Wichtig: Nie an den Knöcheln hochheben — das schadet den Hüftgelenken. Becken-Griff ist Standard.",
        glossarBegriffe: ["Kinästhetik"],
      },
      contentB1: {
        title: "Wickeln — Schritt für Schritt",
        body: "Bringe die Schritte in die richtige Reihenfolge. Nie an den Knöcheln anheben — immer am Becken.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Schritte beim Wickeln in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "In welcher Reihenfolge wickelst du Emilia kinästhetisch korrekt?",
          items: [
            {
              id: "w1",
              label:
                "Emilia sicher auf der Wickelunterlage ablegen, nicht allein lassen",
            },
            {
              id: "w2",
              label:
                "Schmutzige Windel nach vorne klappen — Emilia am Becken anheben (NIE an Knöcheln ziehen)",
            },
            {
              id: "w3",
              label: "Reinigung von vorne nach hinten (Mädchen: immer von vorne nach hinten)",
            },
            {
              id: "w4",
              label: "Haut sanft trockentupfen, nicht reiben",
            },
            {
              id: "w5",
              label:
                "Frische Windel unterlegen, Becken sanft ablegen",
            },
            {
              id: "w6",
              label:
                "Windel schließen — nicht zu fest, 1-2 Finger Platz zwischen Bauch und Windel",
            },
            {
              id: "w7",
              label: "Kleidung anziehen, Emilia trösten",
            },
          ],
        },
      },
    },

    // Step 4.5 — Branching (HAUPT-KOMPLIKATION K1): Mutter weint
    {
      stepId: "ce02-emilia-dur-05-mutter-weint-branching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-emilia-dur-komplikation-mutter",
      tag: "pflege",
      contentC1: {
        title: "Komplikation: Laura weint",
        body: "Nach dem Bad sitzt Laura mit Emilia auf dem Bett. Sie schaut lange auf Emilia. Dann weint sie leise.\n\n> *\"Tut mir leid... ich weiß nicht was los ist mit mir. Ich bin einfach so müde. Und ich will das alles richtig machen für sie.\"*\n\nDu musst jetzt entscheiden.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Laura weint",
        body: "Nach dem Bad sitzt Laura mit Emilia. Sie weint leise.\n\n> *\"Tut mir leid... ich weiß nicht was mit mir los ist. Ich bin so müde. Und ich will alles richtig machen für sie.\"*\n\nWas machst du?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wie reagierst du auf Lauras Weinen?",
        branchingOptions: [
          {
            text: "\"Nimm dir ruhig einen Moment. Das ist alles gerade sehr viel — das ist ein normaler Moment nach einer schlaflosen Nacht.\"",
            isCorrect: true,
            feedback:
              "Genau richtig. Du validierst Lauras Erschöpfung, ohne sie wegzuerklären. 'Normaler Moment' nimmt die Scham ('Tut mir leid'). Du schaffst Raum — ohne einzugreifen oder zu bewerten. Das ist aktive Zuhörung, Schritt 1. Jetzt kannst du weiter aktiv zuhören.",
            feedbackB1:
              "Sehr gut. Du zeigst: Das ist okay. Das ist nicht peinlich. Emilia ist sicher — jetzt darf Laura kurz weinen.",
          },
          {
            text: "\"Ach, das ist doch alles gut gegangen! Emilia geht es gut — da musst du nicht weinen.\"",
            isCorrect: false,
            feedback:
              "Entwertend — das nennt man Bypassing. Du sprichst an Lauras Gefühl vorbei und erklärst es weg. Laura hört: 'Deine Emotion ist unberechtigt.' Das führt dazu, dass Laura sich noch mehr allein fühlt und ihre echten Bedürfnisse verbirgt. Emilias Wohlbefinden ändert nichts an Lauras Erschöpfung.",
            feedbackB1:
              "Nicht gut. Du sagst: Weinen ist nicht nötig. Aber Laura fühlt sich trotzdem so. Du nimmst ihr die Erlaubnis zu fühlen was sie fühlt.",
          },
          {
            text: "\"Ich hole kurz Schwester Andrea — die ist erfahrener mit solchen Situationen.\"",
            isCorrect: false,
            feedback:
              "Zwischen-Antwort. Unterstützung zu holen ist nie falsch — aber: Laura braucht gerade jemanden der da ist. Sofort rauszugehen schickt die Botschaft: 'Ich weiß nicht was ich mit dir anfangen soll.' Erstmal da sein, Raum halten — dann Andrea holen wenn nötig. Nicht umgekehrt.",
            feedbackB1:
              "Du hast den richtigen Instinkt — Hilfe holen ist okay. Aber erst kurz bei Laura bleiben. Dann Andrea holen wenn nötig.",
          },
        ],
      },
    },

    // Step 4.6 — Text (scenario): Beratung nach Komplikation
    {
      stepId: "ce02-emilia-dur-06-beratung-nach-komplikation",
      phase: 4,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-emilia-dur-beratung",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Aktive Zuhörung in der Praxis — 3 Elemente",
        body: "Du setzt dich zu Laura. Emilia schläft auf dem Arm der Mutter. Drei Elemente guter Beratung in dieser Situation:\n\n**1. Aktive Zuhörung — erst zuhören, nicht sofort Ratschläge:** Stelle eine offene Frage: \"Was macht dir gerade am meisten zu schaffen?\" Dann zuhören. Nicht unterbrechen. Nicht sofort lösungsorientiert sein.\n\n**2. Normalisieren ohne entwerten:** \"Viele Mütter nach schlaflosen Nächten fühlen sich genauso. Das bedeutet nicht, dass du versagst — das bedeutet, du gibst gerade alles.\" Nie sagen: 'Das kenne ich' ohne Bezug zu Laura.\n\n**3. Konkretes anbieten:** \"Was würde dir jetzt helfen? Ich passe auf Emilia auf, wenn du kurz schlafen willst — oder ich bringe dir etwas zu trinken.\" Konkrete kleine Angebote wirken mehr als allgemeine Beruhigungen.",
        fallbezug:
          "Laura ist 24, Erstgebärende, allein erziehend, eine Nacht nicht geschlafen. Ihr soziales Netz ist dünn. Sie braucht nicht nur Fakten — sie braucht das Gefühl: 'Ich schaffe das, und jemand sieht das.'",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Beratung nach dem Weinen — 3 Schritte",
        body: "Du setzt dich neben Laura. Emilia schläft. Jetzt: drei Schritte.\n\n**Schritt 1 — Erst zuhören:** Frage: \"Was macht dir gerade am meisten zu schaffen?\" Und dann: zuhören. Nicht sofort Tipps geben.\n\n**Schritt 2 — Normalisieren:** \"Viele Mütter fühlen sich genauso nach schlaflosen Nächten. Das bedeutet nicht, dass du versagst.\"\n\n**Schritt 3 — Konkretes anbieten:** \"Was würde dir jetzt helfen? Ich passe auf Emilia auf, wenn du kurz schlafen möchtest.\" Kleine konkrete Angebote helfen mehr als große Versprechen.",
        glossarBegriffe: [],
      },
    },

    // Step 4.7 — MC: Schlafposition abschließend
    {
      stepId: "ce02-emilia-dur-07-schlafposition-abschluss",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["AAP — American Academy of Pediatrics 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-emilia-dur-schlafposition",
      tag: "pflege",
      contentC1: {
        title: "Emilia zum Schlafen hinlegen — Lauras Frage",
        body: "Du legst Emilia nach dem Bad zum Schlafen hin. Laura fragt: \"Wie lege ich sie am besten hin?\"",
        glossarBegriffe: ["SIDS", "SIDS-Prävention"],
      },
      contentB1: {
        title: "Wie lege ich Emilia hin?",
        body: "Du legst Emilia schlafen. Laura fragt: \"Wie lege ich sie am besten hin?\"",
        glossarBegriffe: ["SIDS"],
      },
      question: {
        fragetext: "Was ist die korrekte Schlafposition?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Seitlage mit Stützkissen unter den Arm",
            isCorrect: false,
            explanation:
              "Falsch. Seitlage ist keine sichere Schlafposition für Säuglinge — sie können sich auf den Bauch drehen. SIDS-Risiko erhöht.",
            explanationB1:
              "Falsch. Seitenlage ist gefährlich — Emilia kann sich umdrehen. SIDS-Risiko.",
          },
          {
            text: "Bauchlage — so atmet Emilia besser",
            isCorrect: false,
            explanation:
              "Falsch und gefährlich. Bauchlage ist der stärkste bekannte SIDS-Risikofaktor. Auch bei Atemwegsproblemen gilt: Rückenlage, außer der Arzt ordnet ausdrücklich etwas anderes an.",
            explanationB1:
              "Falsch und gefährlich. Bauchlage ist das höchste SIDS-Risiko. Nie — außer auf ausdrückliche Arztanordnung.",
          },
          {
            text: "Rückenlage, ohne Kopfkissen, ohne lockere Bettwäsche in der Schlafumgebung",
            isCorrect: true,
            explanation:
              "Richtig. SIDS-Prävention nach AAP (2022): Rückenlage auf fester Matratze, kein Kissen, kein Kuscheltier im Schlafbereich, keine lockere Bettwäsche, Schlafsack statt Decke. Das gilt ausnahmslos für alle gesunden Säuglinge — auch bei leichten Atemwegsinfekten.",
            explanationB1:
              "Richtig. Rücken, feste Matratze, kein Kissen, kein Kuscheltier, kein lockere Decke. Das gilt immer.",
          },
          {
            text: "Schräglage mit 30° erhöhtem Oberkörper — besser für die Atmung",
            isCorrect: false,
            explanation:
              "Falsch. Schräglage birgt SIDS-Risiko durch Kopfabknicken — besonders wenn der Säugling rutscht. Nicht für Säuglinge empfohlen.",
            explanationB1:
              "Falsch. Diese Lage ist für Erwachsene, nicht für Emilia. Emilia braucht: Rückenlage, flach.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Step 4.8 — Text (checklist): Babyhaut — was kommt dran?
    {
      stepId: "ce02-emilia-dur-opt-babyhaut-pflege",
      phase: 4,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-dur-babyhaut",
      tag: "pflege",
      displayFormat: "checklist",
      contentC1: {
        title: "Babyhaut-Pflege — was ist erlaubt, was nicht?",
        body: "Checkliste: Was kommt ans Baby — was nicht?\n\n✓ Wasser allein (reicht für gesunde Babyhaut meist völlig)\n✓ pH-neutrale Baby-Waschlotion wenn nötig (sparsam)\n✗ Parfümierte Seifen oder Erwachsenen-Duschgel\n✗ Alkohol-haltige Pflegeprodukte (trocknen die Haut aus)\n✗ Körperpuder (Einatmungsgefahr — Lungenreizung möglich)\n✗ Cremes auf wunde Haut ohne ärztliche Anordnung *(Hoehl/Kullick, 2019)*",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was ist erlaubt beim Bad?",
        body: "Diese Checkliste zeigt: Was darf ans Baby — was nicht?\n\n✓ Wasser allein — das reicht meistens\n✓ Baby-Waschlotion (pH-neutral, sparsam)\n✗ Parfümierte Seife — nein\n✗ Alkohol-Produkte — nein (trocknet die Haut)\n✗ Puder — nein (Einatmungsgefahr)",
        glossarBegriffe: [],
      },
    },

    // Step 4.9 — Flipcard: Windeldermatitis
    {
      stepId: "ce02-emilia-dur-opt-windeldermatitis",
      phase: 4,
      stepType: "flipcard",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DGKJ S2k-Leitlinie Windeldermatitis 2021"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-dur-windeldermatitis",
      tag: "pflege",
      contentC1: {
        title: "Windeldermatitis — Ursache und Prävention",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Windeldermatitis"],
      },
      contentB1: {
        title: "Windeldermatitis",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Windeldermatitis"],
      },
      question: {
        fragetext:
          "Was ist Windeldermatitis — und wie verhindert man sie?",
        flipcard: {
          instruction: "Klappe die Karte um.",
          cards: [
            {
              front: "Was ist Windeldermatitis — und wie verhindert man sie?",
              back: "Windeldermatitis entsteht durch Kontakt der Haut mit Stuhl und Urin in der feuchten Windelumgebung. Prävention: Windeln häufig wechseln (alle 2-3 Stunden, sofort nach Stuhlgang), Haut nach Reinigung gut trockentupfen, Wundschutzpaste (z.B. Zinkoxid) bei Rötung. *(DGKJ S2k-Leitlinie 2021)*",
              backB1:
                "Windeldermatitis = gereizte rote Haut im Windelbereich. Ursache: Urin und Stuhl auf der Haut. Prävention: Windel wechseln alle 2-3 Stunden (sofort nach Stuhlgang), Haut gut trocknen, bei Rötung: Schutzcreme (Zinkoxid).",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 35,
};

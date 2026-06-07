// CE-02 Situation Frau Yilmaz — Phase 4: Durchführen
// Steps: 6 Kern + 1 InlineWissen + 2 Optional · Bloom: B2–B5 · Zeit: ~35–55 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-hueft-tep/phase-durchfuehren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_HUEFT_TEP_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-yilmaz-durchführen",
  phase: "durchführen",
  titel: "Durchführen — Mobilisation",
  titelB1: "Frau Yilmaz steht auf",
  kontext:
    "30 Minuten nach der Metamizol-Gabe. Du bist zurück in Zimmer 12. Frau Yilmaz ist noch im Bett, Kopfteil 30° erhöht. Du hast ihr angekündigt: 'Wir versuchen es jetzt.' Mustafa sitzt auf seinem Stuhl. Du hast das Bett auf Arbeitshöhe gestellt, die Unterarmgehstützen stehen bereit. Frau Wendt ist auf dem Flur und weiß, dass du jetzt anfängst.",
  kontextB1:
    "30 Minuten nach dem Schmerzmittel. Du bist zurück bei Frau Yilmaz. Sie liegt noch im Bett. Mustafa sitzt daneben. Du hast gesagt: 'Wir versuchen es jetzt.' Das Bett steht auf der richtigen Höhe. Die Gehstützen sind bereit. Frau Wendt ist auf dem Flur.",
  kernSteps: [
    // InlineWissen — Orthostase / Orthostatische Hypotonie
    // Position: VOR Step 4.1 — Der Sequencing-Step erwähnt Orthostase im Schellong-Schritt,
    // und Step 4.2 ist ein Branching zu orthostatischer Hypotonie. Schüler muss den
    // Mechanismus verstehen, bevor er ihn in der Reihenfolge einordnet und darauf reagiert.
    {
      stepId: "ce02-yilmaz-dur-iw-orthostase",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Freeman R. et al. (2011): Consensus statement on the definition of orthostatic hypotension — Autonomic Neuroscience",
        "DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege",
        "Schellong F. (1947): Regulationsprüfung des Kreislaufs",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-dur-orthostase-grundlagen",
      tag: "krankheitslehre",
      themaPrimaer: "mobilisation",
      themenSekundaer: ["kreislauf"],
      transition: "Du verstehst jetzt den Mechanismus. Bringe die Mobilisationsschritte in die richtige Reihenfolge — inklusive Schellong-Test.",
      contentC1: {
        title: "Orthostase und orthostatische Hypotonie: Warum wird Frau Yilmaz schwindelig?",
        body: "",
        glossarBegriffe: [
          "Orthostase", "Orthostatische Hypotonie", "Schellong-Test",
          "Blutdruckregulation", "Blutdruckabfall",
        ],
      },
      contentB1: {
        title: "Schwindel beim Aufstehen: Warum passiert das?",
        body: "",
        glossarBegriffe: ["Orthostase", "Schwindel beim Aufstehen", "Schellong-Test", "Blutdruckabfall"],
      },
      inlineWissen: {
        bausteinRef: "orthostase-hypotonie",
        storyAufhaenger:
          "Gleich versuchst du, Frau Yilmaz zum ersten Mal aufzustehen. Aber es gibt ein Risiko, das du kennen musst: orthostatische Hypotonie — ein plötzlicher Blutdruckabfall beim Lagewechsel. Bei Frau Yilmaz kommen mehrere Risikofaktoren zusammen.",
        storyAufhaengerB1:
          "Gleich steht Frau Yilmaz zum ersten Mal auf. Aber es kann passieren, dass ihr dabei schwindelig wird. Der Blutdruck fällt plötzlich ab. Das heißt: orthostatische Hypotonie. Warum passiert das?",
        kerntext:
          "**Orthostase** bedeutet 'aufrechte Körperhaltung'. Beim Aufstehen versacken ca. 500–800 ml Blut in die Beinvenen (Schwerkraft). Normalerweise reagiert der Körper sofort: Herzfrequenz steigt, Gefäße verengen sich, Blutdruck bleibt stabil.\n\n**Orthostatische Hypotonie** entsteht, wenn diese Gegenregulation versagt:\n• Blutdruckabfall ≥ 20 mmHg systolisch ODER ≥ 10 mmHg diastolisch innerhalb von 3 Minuten nach dem Aufstehen (Freeman et al. 2011, AAS-Konsensus)\n• Symptome: Schwindel, Schwarzwerden, Übelkeit, Blässe, Synkope (Ohnmacht)\n\n**Risikofaktoren bei Frau Yilmaz:**\n• **Bettlägerigkeit (3 Tage)** — Gefäßregulation ist 'eingerostet', Baroreflexe gedämpft\n• **Postoperative Volumenverschiebung** — Blutverlust bei OP, Flüssigkeitsumverteilung\n• **Schmerz** — autonome Aktivierung (Sympathikus) kann paradox den Kreislauf destabilisieren\n• **Alter (79 J.)** — Baroreflex-Empfindlichkeit nimmt mit dem Alter ab\n\n**Schellong-Test** (Schellong 1947): Blutdruck liegend messen → ≥ 1 Min sitzen → Blutdruck sitzend messen. Differenz ≥ 20/10 mmHg = orthostatische Hypotonie → Patient hinlegen, Versuch verschieben.\n\n**Pflegerische Konsequnz:** Niemals nach OP-Bettlägerigkeit direkt aufstehen lassen. Immer stufenweise: Liegen → Sitzen → Stehen. Und IMMER vorher den Schellong-Test machen.",
        kerntextB1:
          "**Orthostase** bedeutet: aufrecht stehen.\n\nWenn du aufstehst, fließt Blut in die Beine (Schwerkraft). Normalerweise reagiert der Körper: Das Herz schlägt schneller, die Gefäße werden enger, der Blutdruck bleibt stabil.\n\n**Orthostatische Hypotonie** = Der Körper schafft das nicht. Der Blutdruck fällt plötzlich ab.\n• Schwindelgefühl, schwarz vor Augen, Übelkeit, Blässe\n• Wenn der Blutdruck um 20 mmHg oder mehr fällt = orthostatische Hypotonie\n\n**Warum passiert das bei Frau Yilmaz?**\n• Sie liegt seit 3 Tagen → der Körper hat sich ans Liegen gewöhnt\n• Die OP → Blutverlust, Körper ist geschwächt\n• Schmerzen → der Kreislauf ist durcheinander\n• Sie ist 79 → ältere Menschen haben das öfter\n\n**Schellong-Test:** Blutdruck im Liegen messen. Dann mindestens 1 Minute sitzen. Dann Blutdruck sitzend messen. Wenn der Unterschied zu groß ist: wieder hinlegen, später nochmal versuchen.\n\n**Regel:** Nie direkt aufstehen nach langem Liegen. Immer stufenweise: Liegen → Sitzen → Stehen.",
        faustregel:
          "**Liegen → Sitzen → Schellong → Stehen.** Nie eine Stufe überspringen — der Kreislauf braucht Zeit zum Aufwachen.",
        faustregelB1:
          "Erst liegen, dann sitzen, dann Blutdruck messen, dann stehen. Nie eine Stufe überspringen.",
        karteikarte: {
          vorderseite: "Was ist orthostatische Hypotonie, welche Grenzwerte gelten, und warum ist Frau Yilmaz besonders gefährdet?",
          rueckseite: "Orthostatische Hypotonie = Blutdruckabfall ≥ 20 mmHg systolisch oder ≥ 10 mmHg diastolisch innerhalb 3 Min nach Lagewechsel (Freeman et al. 2011). Symptome: Schwindel, Synkope. Frau Yilmaz: 3 Tage Bettlägerigkeit (Baroreflex gedämpft), postoperativer Volumenverlust, Schmerz, Alter 79. Schellong-Test: RR liegend → ≥ 1 Min sitzen → RR sitzend. Pflege: stufenweise Mobilisation, nie direkt aufstehen.",
          vorderseiteB1: "Was bedeutet orthostatische Hypotonie? Warum passiert es Frau Yilmaz?",
          rueckseiteB1: "Blutdruck fällt beim Aufstehen um mehr als 20 mmHg. Schwindel, schwarz vor Augen. Frau Yilmaz: 3 Tage gelegen, OP, Schmerzen, 79 Jahre alt. Schellong-Test vorher machen. Immer stufenweise: Liegen → Sitzen → Stehen.",
        },
      },
    },

    // Step 4.1 — Sequencing: Reihenfolge der Mobilisation
    {
      stepId: "ce02-yilmaz-dur-01-mobilisation-reihenfolge",
      phase: 4,
      stepType: "sequencing",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege",
        "Deutsche Gesellschaft für Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Hüfte",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-dur-mobilisationsreihenfolge",
      tag: "pflege",
      contentC1: {
        title: "Reihenfolge der ersten Mobilisation nach Hüft-TEP",
        body: "Bevor du anfängst: Die Reihenfolge der ersten Mobilisation nach Hüft-TEP ist nicht beliebig. Sie folgt kinästhetischen Prinzipien und der Lagerungsvorschrift. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Kinästhetik", "Orthostase", "Unterarmgehstützen", "Lagerungsvorschrift"],
      },
      contentB1: {
        title: "In welcher Reihenfolge lässt du Frau Yilmaz aufstehen?",
        body: "Das Aufstehen nach einer Hüft-OP hat eine genaue Reihenfolge. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Gehstützen", "Schwindel", "Schmerz"],
      },
      question: {
        fragetext:
          "Bringe die Schritte der ersten Mobilisation nach Hüft-TEP in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "Sortiere die Schritte in der richtigen Reihenfolge — von der Vorbereitung bis zum Aufstehen.",
          items: [
            {
              id: "s1",
              label: "Bett auf Bettkanten-Höhe einstellen (damit Füße beim Hinsetzen den Boden berühren). RR liegend messen (Ausgangswert für Schellong).",
            },
            {
              id: "s2",
              label: "Frau Yilmaz ankündigen was passiert: \"Ich begleite Sie. Sie machen die Bewegung — Sie sagen das Tempo.\"",
            },
            {
              id: "s3",
              label: "Oberkörper aktiv aufrichten lassen (Kopfteil hoch ODER Frau Yilmaz richtet sich seitlich auf — Pflege sichert seitlich am Becken/Rumpf, NICHT unter den Achseln)",
            },
            {
              id: "s4",
              label: "Operiertes Bein (rechts) zuerst in Streckung über die Bettkante führen — gesundes Bein folgt nach. Adduktion/Innenrotation vermeiden (Luxationsschutz). Patientin dreht aktiv mit, Pflege begleitet.",
            },
            {
              id: "s5",
              label: "Schellong-Test: ≥ 1 Min an der Bettkante sitzen, Schwindel abfragen, RR sitzend messen. Differenz < 20 mmHg systolisch (und < 10 mmHg diastolisch) → Aufstehen erlaubt; Differenz ≥ 20/10 mmHg → hinlegen, Versuch verschieben.",
            },
            {
              id: "s6",
              label: "Aufstehen: Pflegekraft auf OP-Seite (rechts), eine Hand am Beckengurt/Hüftgurt, eine Hand am Rumpf. Frau Yilmaz drückt sich aktiv hoch und greift dann zu den Unterarmgehstützen. Teilbelastung rechts max. 20 kg.",
            },
            {
              id: "s7",
              label: "Sofort Schmerz-Reassessment: \"NRS jetzt?\"",
            },
            {
              id: "s8",
              label: "Wenn NRS ≤ 5: kurz stehen oder erste Schritte; wenn NRS ≥ 7: sofort hinsetzen, Plan anpassen",
            },
          ],
        },
      },
    },

    // Step 4.2 — Branching: Orthostatische Hypotonie (Komplikation 1)
    {
      stepId: "ce02-yilmaz-dur-02-orthostatisch-branching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-dur-orthostatische-hypotonie",
      tag: "krankheitslehre",
      contentC1: {
        title: "Komplikation 1: Orthostatische Hypotonie",
        body: "Frau Yilmaz sitzt seit 2 Minuten an der Bettkante. Plötzlich sagt sie leise: \"Mir ist schwindelig. Das dreht sich.\"\n\nSie greift nach deinem Arm. Ihr Gesicht wird blass. Was tust du jetzt?\n\nHintergrund: Orthostatische Hypotonie = Blutdruckabfall beim Lagewechsel. Bei Frau Yilmaz mehrere Risikofaktoren: Bettlägerigkeit (Gefäßregulation gedämpft), postoperative Volumenverschiebung, schmerzbedingte autonome Aktivierung. (Antidiabetika selbst senken den RR nicht primär — sie können aber durch Hypoglykämie Schwindel auslösen, was differenzialdiagnostisch zu beachten ist.)",
        fallbezug:
          "Das ist keine seltene Komplikation — sie ist bei Hüft-TEP-Patienten sehr häufig. Deine Reaktion in den nächsten 10 Sekunden entscheidet über Sicherheit.",
        glossarBegriffe: ["Orthostatische Hypotonie", "Blutdruckabfall", "Kreislaufregulation"],
      },
      contentB1: {
        title: "Komplikation: Frau Yilmaz wird schwindelig",
        body: "Frau Yilmaz sitzt 2 Minuten an der Bettkante. Dann sagt sie: \"Mir ist schwindelig. Das dreht sich.\"\n\nSie greift deinen Arm. Ihr Gesicht wird blass.\n\nDas nennt man: Orthostatischer Schwindel (= Schwindel beim Aufstehen, weil der Blutdruck kurz fällt). Gründe bei Frau Yilmaz: Sie hat lange gelegen, der Körper hat noch nach der OP. Was machst du jetzt?",
        fallbezug:
          "Das passiert oft nach einer OP. Du musst schnell und richtig reagieren.",
        glossarBegriffe: ["Schwindel beim Aufstehen", "Blutdruckabfall"],
      },
      question: {
        fragetext: "Frau Yilmaz wird schwindelig an der Bettkante. Was tust du jetzt?",
        branchingOptions: [
          {
            text: "Frau Yilmaz sofort sicher hinlegen, Beine leicht erhöht lagern, Kreislauf stabilisieren, RR messen",
            isCorrect: true,
            feedback:
              "Genau. Sicherheit zuerst, dann Ursache verstehen. RR liegend (vor Aufstehen gemessen): 128/78 mmHg. RR sitzend jetzt: 98/62 mmHg. Differenz systolisch 30 mmHg, diastolisch 16 mmHg — beide Werte überschreiten den Standard-Schwellenwert für orthostatische Hypotonie (≥ 20 mmHg systolisch oder ≥ 10 mmHg diastolisch innerhalb 3 Min, AAS-Konsensus 2011 / DGN Schellong-Test). Maßnahme: hinlegen, warten, nächster Versuch in 20–30 Min. Dann: Frau Wendt informieren.",
            feedbackB1:
              "Richtig. Sie liegt jetzt sicher. Blutdruck messen. Beine leicht hochlagern. Dann warten. RR liegend war 128/78, jetzt sitzend 98/62 — der Blutdruck ist um 30 mmHg gefallen. Schon ab 20 mmHg ist es Orthostase. In 20–30 Minuten erneut versuchen. Frau Wendt informieren.",
          },
          {
            text: "Warten — das geht gleich vorbei, ein bisschen Schwindel ist normal",
            isCorrect: false,
            feedback:
              "Schwindel bei orthostatischer Hypotonie ist KEIN 'normaler' Schwindel. Ein ungesicherter Sturz aus dieser Position — sitzend auf Bettkante nach Hüft-TEP — kann zur Re-Fraktur oder Luxation führen. Das Warten ist kein geduldiges Handeln, sondern ein Risiko. Sofort reagieren: hinlegen, sichern.",
            feedbackB1:
              "Nicht warten. Dieser Schwindel ist gefährlich. Wenn sie jetzt fällt, kann das neue Hüftgelenk beschädigt werden. Sofort: sicher hinlegen.",
          },
          {
            text: "Frau Wendt rufen — ich bin überfordert",
            isCorrect: false,
            feedback:
              "Frau Wendt zu rufen ist keine Niederlage — im Zweifelsfall ist das richtig. Aber in der Zeit, bis sie kommt, kannst du bereits die wichtigste Maßnahme eingeleitet haben: Frau Yilmaz sicher hinlegen. Pflege bedeutet nicht Warten auf Anweisung — sondern situationsgerechtes Handeln im Rahmen der Kompetenz. Schritt 1: hinlegen. Schritt 2: Frau Wendt informieren.",
            feedbackB1:
              "Frau Wendt zu rufen ist ok — aber zuerst: Frau Yilmaz hinlegen und sichern. Das kannst du. Dann Frau Wendt informieren.",
          },
        ],
      },
    },

    // Step 4.3 — Dialog: Zweiter Aufstehversuch (4 Phasen)
    {
      stepId: "ce02-yilmaz-dur-03-dialog-zweiter-versuch",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-dur-kommunikation-zweiter-versuch",
      tag: "pflege",
      contentC1: {
        title: "25 Minuten später: Der zweite Versuch",
        body: "Frau Yilmaz liegt wieder. RR jetzt stabil. Du erklärst ihr was passiert ist. Dann: zweiter Aufstehversuch. Wie kommunizierst du — und wie reagierst du wenn es klappt?",
        glossarBegriffe: ["Orthostatische Hypotonie", "Aufklärung", "NRS"],
      },
      contentB1: {
        title: "25 Minuten später: nochmal",
        body: "Frau Yilmaz liegt wieder im Bett. Der Blutdruck ist stabil. Du erklärst ihr was passiert ist. Dann: zweiter Versuch. Wie sagst du es ihr?",
        glossarBegriffe: ["Blutdruck", "Schwindel"],
      },
      question: {
        fragetext: "Wähle deine Antwort.",
        patientName: "Frau Yilmaz",
        dialogPhases: [
          {
            context:
              "Du erklärst Frau Yilmaz was passiert ist. Wie formulierst du die Erklärung der orthostatischen Hypotonie?",
            contextB1:
              "Du erklärst Frau Yilmaz warum ihr schwindelig wurde. Wie sagst du es?",
            speaker: "Du",
            options: [
              {
                text: "\"Das ist normal nach einer OP. Der Körper muss sich erst daran gewöhnen, wieder aufzustehen.\"",
                textB1:
                  "\"Das ist normal nach einer OP. Ihr Körper lernt gerade wieder aufzustehen.\"",
                patientResponse:
                  "Frau Yilmaz nickt. \"Ah — das kenne ich nicht. Mein Körper muss das lernen?\"",
                patientResponseB1:
                  "Frau Yilmaz nickt. \"Mein Körper muss das lernen?\"",
                score: 3,
                feedback:
                  "Genau das ist die richtige Balance: verständlich, nicht dramatisiert, erklärend. Frau Yilmaz versteht, dass ihr Körper gerade etwas Neüs lernt. Das nimmt die Scham ('Ich bin so schwach') und erklärt warum der zweite Versuch trotzdem sinnvoll ist.",
                feedbackB1:
                  "Genau richtig. Sie versteht: Das ist nicht ihre Schuld. Ihr Körper lernt das gerade. Das nimmt die Scham weg und macht Mut für den zweiten Versuch.",
              },
              {
                text: "\"Der Blutdruck ist kurz abgefallen. Das passiert manchmal, keine Sorge.\"",
                textB1:
                  "\"Der Blutdruck ist kurz gefallen. Das passiert manchmal.\"",
                patientResponse:
                  "Frau Yilmaz schaut unsicher. \"Blutdruck? Ist das gefährlich?\"",
                patientResponseB1:
                  "Frau Yilmaz schaut unsicher. \"Ist das schlimm?\"",
                score: 2,
                feedback:
                  "Du bist auf dem richtigen Weg — die Information \"Blutdruck ist abgefallen\" ist sachlich korrekt und ehrlich. Allerdings wirkt das angehängte \"keine Sorge\" wie ein Abwimmeln, weil Frau Yilmaz ja deutlich gespürt hat, dass etwas passiert ist. Besser ist es, weil sie die körperliche Erfahrung selbst spürt: kurz erklären was orthostatische Hypotonie ist, warum das nach Bettlägerigkeit normal ist und stattdessen eine konkrete Sicherheits-Aussage geben (z.B. \"Wir messen jetzt erst Ihren Blutdruck im Liegen, dann beim Sitzen — deshalb passiert es beim zweiten Versuch nicht mehr.\").",
                feedbackB1:
                  "Du bist nah dran — der Hinweis auf den Blutdruck ist richtig. Allerdings ist \"keine Sorge\" zu wenig, weil Frau Yilmaz den Schwindel selbst gefühlt hat. Stattdessen besser: erklären, was passiert ist und warum der zweite Versuch jetzt sicherer ist — deshalb messen wir vorher den Blutdruck.",
              },
              {
                text: "\"Das ist wegen Ihrer Diabetesmedikamente. Die müssen angepasst werden.\"",
                textB1:
                  "\"Das ist wegen Ihrer Diabetes-Tabletten. Die müssen geändert werden.\"",
                patientResponse:
                  "Frau Yilmaz macht sich Sorgen. \"Wieder andere Tabletten? Das verstehe ich nicht.\"",
                patientResponseB1:
                  "Frau Yilmaz macht sich Sorgen. \"Wieder neue Tabletten?\"",
                score: 0,
                feedback:
                  "Du hast erkannt, dass Medikamente eine Rolle spielen können — und das ist grundsätzlich ein guter Reflex. Allerdings stimmt die Aussage in dieser Form nicht, weil orale Antidiabetika selbst nicht primär den Blutdruck senken. Die Hauptursache der Orthostase ist die 3-tägige Bettlägerigkeit (gedämpfter Baroreflex) plus postoperative Volumen-Verschiebung. Stattdessen erklärst du Frau Yilmaz: \"Ihr Körper hat sich an das Liegen gewöhnt — beim Aufstehen muss er die Blutdruck-Regulation erst wieder lernen. Deshalb passiert es heute, ist aber nicht gefährlich.\" Fehlinformationen zu Medikamenten können bei diabetischen Patientinnen unnötige Therapie-Sorgen auslösen.",
                feedbackB1:
                  "Du denkst an Medikamente — das ist ein guter Reflex. Allerdings sind die Diabetes-Tabletten nicht der Hauptgrund, weil sie keine Blutdruck-Senker sind. Stattdessen sag ihr besser: \"Ihr Körper hat sich ans Liegen gewöhnt. Das Aufstehen muss er wieder lernen.\" Das stimmt — und macht ihr keine Angst um ihre Tabletten.",
              },
            ],
          },
          {
            context:
              "Zweiter Aufstehversuch. Frau Yilmaz steht. Sie sagt überrascht: \"Ach — es geht. Es geht doch. Das hätte ich nicht gedacht.\" NRS jetzt: 4. Wie lange lässt du sie stehen?",
            contextB1:
              "Frau Yilmaz steht! Sie sagt: \"Es geht doch!\" NRS jetzt: 4. Wie lange stehst du?",
            speaker: "Du",
            options: [
              {
                text: "Sofort wieder hinsetzen — es war schon schwierig genug.",
                textB1:
                  "Sofort wieder hinsetzen — der erste Versuch war schwer genug.",
                patientResponse:
                  "Frau Yilmaz nickt und setzt sich wieder hin. \"Ja, ich bin müde.\"",
                patientResponseB1:
                  "Frau Yilmaz setzt sich. \"Ja, ich bin müde.\"",
                score: 1,
                feedback:
                  "Vorsicht ist gut — aber hier übersiehst du die Chance. NRS 4 im Stehen ist ein Erfolg. Jetzt sofort hinzusetzen verpasst die Möglichkeit, diesen Erfolg zu verankern — fachlich und emotional. Frau Yilmaz hat gerade ihre eigene Überraschung erlebt.",
                feedbackB1:
                  "Vorsicht ist gut — aber NRS 4 ist gut. Sie kann noch kurz stehen. Das Stehen ist ein Erfolg — den soll sie spüren.",
              },
              {
                text: "Kurz stehen lassen, NRS fragen, dann langsam 1–2 Schritte wenn NRS ≤ 5.",
                textB1:
                  "Kurz stehen lassen, NRS fragen, dann 1–2 kleine Schritte wenn der Schmerz ok ist.",
                patientResponse:
                  "Frau Yilmaz macht zwei kleine Schritte. Langsam, vorsichtig. Sie schaut auf ihre Füße.",
                patientResponseB1:
                  "Frau Yilmaz macht zwei Schritte. Langsam. Sie schaut nach unten.",
                score: 3,
                feedback:
                  "Genau — jeder Schritt ist ein Erfolg. Das Ziel heute ist nicht der Marathon, das Ziel ist: aufgestanden. NRS ≤ 5 im Stehen = Erfolg. Das dokumentierst du, das stärkt Frau Yilmaz' Selbstvertrauen.",
                feedbackB1:
                  "Genau richtig. Zwei Schritte ist ein großer Erfolg für heute. NRS 4 — das ist ok. Das schreibst du auf. Das ist ein guter Tag.",
              },
              {
                text: "Jetzt direkt zum Stuhl gehen — das schafft sie.",
                textB1:
                  "Jetzt direkt zum Stuhl gehen — sie kann das.",
                patientResponse:
                  "Frau Yilmaz zögert. \"Bis zum Stuhl? Das ist … weit.\"",
                patientResponseB1:
                  "Frau Yilmaz zögert. \"Bis zum Stuhl? Das ist weit.\"",
                score: 1,
                feedback:
                  "Guter Enthusiasmus — aber zu viel auf einmal. Tag 3 nach Hüft-TEP, gestern NRS 7, heute Orthostase. Zwei Schritte sind heute der richtige Erfolg. Den Stuhl nehmen wir morgen.",
                feedbackB1:
                  "Du bist optimistisch — gut! Aber heute: zwei Schritte sind der Erfolg. Den Stuhl schafft sie morgen.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.4 — Branching: Mustafa interveniert (Komplikation 2)
    {
      stepId: "ce02-yilmaz-dur-04-mustafa-branching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-dur-angehörige-intervention",
      tag: "pflege",
      contentC1: {
        title: "Komplikation 2: Ehemann Mustafa interveniert",
        body: "Frau Yilmaz steht zum ersten Mal. Du stehst auf der OP-Seite (rechts), eine Hand am Beckengurt, eine Hand am Rumpf. Dann — Mustafa steht auf. Er macht einen Schritt auf Frau Yilmaz zu, will nach ihrem Arm greifen. Er sagt laut auf Türkisch (Übersetzung unten):\n\n\"Sie soll ins Bett. Sie ist krank. Warum macht ihr das mit ihr?\"\n\nMustafas Reaktion ist Liebe, kein Angriff. Er sieht seine kranke Frau stehen und glaubt, ihr zu helfen wenn er sie wieder hinlegt. Was tust du?",
        fallbezug:
          "Diese Situation ist häufig bei älteren Patienten mit pflegenden Angehörigen. Die richtige Reaktion entscheidet über Vertrauen — und über die Sicherheit der Mobilisation.",
        glossarBegriffe: ["Angehörige", "Nonverbale Kommunikation", "Interkulturelle Pflege"],
      },
      contentB1: {
        title: "Komplikation: Mustafa greift ein",
        body: "Frau Yilmaz steht. Du bist dabei. Dann — Mustafa steht auf. Er will nach ihr greifen. Er sagt auf Türkisch: \"Sie soll ins Bett! Sie ist krank!\"\n\nEr macht das aus Liebe. Er hat Angst um seine Frau. Was machst du?",
        fallbezug:
          "Mustafa meint es gut. Aber er versteht nicht, dass Aufstehen wichtig ist. Du musst das regeln — schnell und ruhig.",
        glossarBegriffe: ["Angehörige", "Gesten", "Türkisch"],
      },
      question: {
        fragetext: "Mustafa greift ein und will Frau Yilmaz ins Bett zurücklegen. Was tust du?",
        branchingOptions: [
          {
            text: "Ruhig, klar, nonverbal: Hebe die Hand (Stopp-Geste), lächle ihn gleichzeitig an. Frau Yilmaz erst sicher zurück ans Bett/auf den Stuhl begleiten — DANN über Frau Yilmaz: \"Frau Yilmaz, könnten Sie Ihrem Mann kurz sagen, dass alles gut ist und Sie selbst entschieden haben aufzustehen?\"",
            isCorrect: true,
            feedback:
              "Sicherheit zuerst — dann Kommunikation. Frau Yilmaz steht nach Hüft-TEP zum ersten Mal (NRS 4, gerade aktiv stabilisiert). Wenn sie als Vermittlerin im Stehen reden soll, verliert sie den Fokus auf Stand und Schmerz → Sturz- und Luxationsgefahr (DNQP Sturzprophylaxe; ABCDE). Reihenfolge: 1. Stopp-Geste + Lächeln Richtung Mustafa, 2. Frau Yilmaz sicher zurück zum Stuhl/Bett, 3. erst dann Frau Yilmaz als Vermittlerin aktivieren. Mustafas Reaktion ist Liebe, kein Angriff. Wichtig: Angehörige greifen instinktiv unter die Achseln — erkläre Mustafa (über Frau Yilmaz als Dolmetscherin) warum das bei Hüft-TEP gefährlich ist: Schultergelenk-Risiko und unkontrollierte Belastung der operierten Hüfte. Sichern am Becken/Rumpf ist der korrekte Griff (Kinästhetik nach Hatch/Maietta).",
            feedbackB1:
              "Genau richtig — aber in der richtigen Reihenfolge. Erst: Stopp-Geste + Lächeln Richtung Mustafa. Dann: Frau Yilmaz sicher hinsetzen — sie steht ja erst zum ersten Mal. Erst wenn sie sicher sitzt, bittest du sie, Mustafa zu erklären. Sicherheit kommt vor Reden. Und: Erkläre Mustafa über Frau Yilmaz, dass er nicht unter den Achseln greifen soll — das ist gefährlich für die Hüfte. Sichern geht seitlich am Becken.",
          },
          {
            text: "Direkt auf Türkisch via Übersetzungs-App: 'Bitte nicht stören.'",
            isCorrect: false,
            feedback:
              "Technologie nutzen ist ein guter Instinkt. Aber: Tone und Formulierung sind entscheidend. 'Bitte nicht stören' klingt hart und abweisend — nicht einladend. Besser: 'Ihre Frau ist mutig. Alles gut.' Und: Frau Yilmaz als Vermittlerin einbeziehen bleibt wichtig.",
            feedbackB1:
              "Kein schlechter Instinkt. Aber 'Bitte nicht stören' klingt harsch. Besser: 'Alles gut. Ihre Frau ist mutig.' Und: Frau Yilmaz selbst erklären lassen.",
          },
          {
            text: "Frau Wendt rufen — das ist zu komplex für mich allein.",
            isCorrect: false,
            feedback:
              "Im Zweifelsfall Frau Wendt holen ist ok. Aber in dieser Sekunde kannst du selbst handeln: Stopp-Geste, Lächeln, Frau Yilmaz bitten zu vermitteln. Das dauert 10 Sekunden — nicht 2 Minuten auf Frau Wendt warten. Handeln zuerst, informieren danach.",
            feedbackB1:
              "Frau Wendt holen ist ok — aber du kannst selbst handeln. Stopp-Geste und Lächeln dauern 10 Sekunden. Dann Frau Yilmaz bitten, es zu erklären. Danach kannst du Frau Wendt informieren.",
          },
        ],
      },
    },

    // InlineWissen — 30°-Mikrolagerung
    // Position: VOR Step 4.5 (MC Lagerung) und Step 4.6 (Timer Umlagerungsintervall) —
    // definiert 30°-Mikrolagerung, Mikrolagerung, 30°-Lagerung, Umlagern,
    // Umlagerungsintervall, Umlagerungsrhythmus.
    {
      stepId: "ce02-yilmaz-dur-04b-30grad-mikrolagerung",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
        "Deutsche Gesellschaft für Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Hüfte",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-dur-30grad-positionierung",
      tag: "pflege",
      themaPrimaer: "positionierung",
      themenSekundaer: ["mobilisation", "dekubitus"],
      transition: "Du kennst die 30°-Regel. Welche Lagerung wählst du jetzt für Frau Yilmaz?",
      contentC1: {
        title: "30°-Mikrolagerung: Dekubitusschutz UND Hüft-TEP-Sicherheit",
        body: "",
        glossarBegriffe: [
          "30°-Mikrolagerung", "Mikrolagerung", "30°-Lagerung", "Lagerung",
          "Umlagern", "Umlagerungsintervall", "Umlagerungsrhythmus",
          "Dekubitusprophylaxe", "Trochanter",
        ],
      },
      contentB1: {
        title: "30°-Lagerung: Steißbein entlasten + Hüfte schützen",
        body: "",
        glossarBegriffe: ["30°-Lagerung", "Lagerung", "Druckentlastung", "Umlagern"],
      },
      inlineWissen: {
        bausteinRef: "positionierung-30-grad-mikrolagerung",
        storyAufhaenger:
          "Frau Yilmaz ist nach dem Aufstehversuch wieder im Bett. Zwei Probleme gleichzeitig: Dekubitus Kategorie I am Steißbein (Druck muss weg) und Hüft-TEP-Lagerungsvorschrift (Hüftwinkel < 90°). Gibt es eine Lagerung, die beides gleichzeitig löst?",
        storyAufhaengerB1:
          "Frau Yilmaz liegt wieder im Bett. Zwei Probleme: Die Druckwunde am Steißbein (Druck muss weg). Und: Die Hüfte darf nicht zu stark gebeugt werden. Gibt es eine Lagerung, die beides schafft?",
        kerntext:
          "**Mikrolagerung** = kleine, gezielte Lage-Veränderung um wenige Grad — der Patient wird nicht komplett gewendet, sondern nur leicht gekippt. Reicht oft, um Druck von einer Stelle zu nehmen.\n\n**30°-Mikrolagerung** = die Standard-Form der Mikrolagerung mit einem 30°-Keil oder Kissen. Der Patient liegt schräg, das Steißbein ist frei.\n\n**30°-Lagerung** = umgangs-sprachlich gleichbedeutend mit 30°-Mikrolagerung.\n\n**Umlagern** = den Patienten von einer Position in eine andere bringen, um Druck zu entlasten.\n\n**Umlagerungsintervall** = der Zeitabstand zwischen zwei Umlagerungen. Standard nach DNQP 2024: alle 2 Stunden bei Risikopatienten.\n\n**Umlagerungsrhythmus** = die geplante Abfolge von Lagerungs-Positionen über den Tag (z.B. 30° links → Rückenlage mit Fersen-frei → 30° rechts).\n\n**Die 30°-Mikrolagerung** ist die Lösung für genau dieses Problem (NPUAP/EPUAP 2019):\n\n• **Prinzip:** Der Patient wird leicht zur Seite gekippt — nur 30°, nicht 90°. Das Steißbein liegt frei, der Trochanter wird nicht belastet.\n\n• **Warum nicht 90° Seitenlage?** Bei 90° liegt der Trochanter direkt auf — neue Druckstelle. Außerdem: Hüftwinkel bei 90°-Seitenlage ist schwer kontrollierbar (Luxationsgefahr).\n\n• **Warum nicht Rückenlage?** In Rückenlage liegt das Steißbein direkt auf der Matratze — genau dort, wo Frau Yilmaz bereits Kategorie I hat.\n\n• **Umlagerungsrhythmus bei Frau Yilmaz:** 30° links → 2h → 30° rechts → 2h → kurz Rückenlage (mit Fersen-frei-Lagerung) → wieder 30°.\n\n• **Kissen zwischen die Beine:** Auch in 30°-Lagerung Keil oder Kissen zwischen die Beine — Adduktionsprophylaxe.",
        kerntextB1:
          "**Mikrolagerung** = den Patienten nur ein bisschen drehen — nicht ganz auf die Seite.\n\n**30°-Mikrolagerung** = die Standard-Form. Mit einem Kissen wird der Mensch leicht gekippt, etwa 30 Grad.\n\n**30°-Lagerung** = das gleiche.\n\n**Umlagern** = den Patienten in eine andere Position bringen.\n\n**Umlagerungsintervall** = wie oft umgelagert wird. Standard: alle 2 Stunden.\n\n**Umlagerungsrhythmus** = der Plan für den ganzen Tag (z.B. 2h links, 2h Rückenlage, 2h rechts).\n\n**Warum 30°?**\n\n• Steißbein hat keinen Druck = Druckwunde wird besser\n• Hüfte ist sicher = Gelenk geschützt\n• Auf voller Seite (90°) liegt die Hüfte auf = neue Druckstelle\n• Auf dem Rücken liegt das Steißbein auf = Wunde wird schlimmer\n\n**Wie oft?** Alle 2 Stunden wechseln. Kissen zwischen die Beine.",
        faustregel:
          "**30° ist der goldene Winkel** — Steißbein frei, Trochanter geschont, Hüft-TEP sicher. Alle 2 Stunden umlagern.",
        faustregelB1:
          "30 Grad ist die beste Lagerung: Steißbein hat keinen Druck, Hüfte ist sicher, alle 2 Stunden wechseln.",
        karteikarte: {
          vorderseite:
            "Warum ist die 30°-Mikrolagerung bei Frau Yilmaz die beste Wahl — und warum nicht 90° Seitenlage oder Rückenlage?",
          rueckseite:
            "30°: Steißbein entlastet + Trochanter geschont + Hüftwinkel < 90°. 90° Seitenlage: Trochanter belastet (neue Druckstelle) + Hüftwinkel unkontrollierbar. Rückenlage: Steißbein belastet (Kategorie I verschlechtert sich). Umlagerungsintervall alle 2 Stunden (DNQP 2024). Kissen zwischen die Beine (Adduktionsprophylaxe). Faustregel: **30° ist der goldene Winkel.**",
        },
      },
    },

    // Step 4.5 — MC: Lagerung nach Mobilisation
    {
      stepId: "ce02-yilmaz-dur-05-lagerung-nach-mobilisation",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
        "Deutsche Gesellschaft für Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Hüfte",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-dur-lagerung-tep-dekubitus",
      tag: "pflege",
      contentC1: {
        title: "Welche Lagerung nach dem Aufstehversuch?",
        body: "Frau Yilmaz ist nach dem Aufstehversuch wieder im Bett. Du denkst an die Druckstelle am Steißbein. Gleichzeitig ist die Lagerungsvorschrift der Hüft-TEP aktiv. Beides musst du berücksichtigen. Welche Lagerung wählst du?",
        fallbezug:
          "Zwei Anforderungen gleichzeitig: Dekubitus-Prophylaxe am Steißbein UND Luxationsprophylaxe der Hüfte. Die Lösung liegt im Kompromiss.",
        glossarBegriffe: ["30°-Mikrolagerung", "Luxationsprophylaxe", "Dekubitusprophylaxe", "Trochanter"],
      },
      contentB1: {
        title: "Wie soll Frau Yilmaz jetzt liegen?",
        body: "Frau Yilmaz ist wieder im Bett. Du denkst an die rote Druckstelle am Steißbein. Und du denkst an die Hüft-OP — das Hüftgelenk darf nicht zu stark gebeugt werden. Welche Lagerung ist richtig?",
        glossarBegriffe: ["30°-Lagerung", "Druckentlastung", "Hüftgelenk"],
      },
      question: {
        fragetext:
          "Welche Lagerung wählst du — unter Berücksichtigung der Hüft-TEP-Lagerungsvorschrift UND des Dekubitus Kategorie I am Steißbein?",
        optionen: [
          {
            text: "Rückenlage, Kopf flach — Steißbein liegt druckfrei, Hüftwinkel 0°",
            isCorrect: false,
            explanation:
              "In Rückenlage liegt das Steißbein direkt auf — das ist kein Druckentlastung, das ist das Gegenteil. Steißbein und Fersen liegen auf. Der Hüftwinkel ist zwar gut (0°), aber die Dekubitus-Prophylaxe ist nicht erfüllt.",
            explanationB1:
              "In der Rückenlage liegt das Steißbein auf der Matratze — das ist nicht gut für die Druckwunde. Das hilft nicht.",
          },
          {
            text: "30°-Mikrolagerung auf die linke Seite (gesunde Seite) — Steißbein entlastet, Hüftwinkel < 90°",
            isCorrect: true,
            explanation:
              "Genau — die 30°-Mikrolagerung ist der Kompromiss: Steißbein wird entlastet, und der Hüftwinkel bleibt weit unter 90°. Bei 90°-Seitenlage wäre das Hüftgelenk in ungünstigem Winkel. Die 30°-Regel kommt aus dem NPUAP/EPUAP-Standard (2019) — sie ist speziell entwickelt, um Steißbein UND Trochanter gleichzeitig zu schonen.",
            explanationB1:
              "Genau richtig. 30° auf die linke Seite: Das Steißbein hat keinen Druck mehr. Und der Hüftwinkel ist unter 90° — das schützt das neue Gelenk. Beides erfüllt.",
          },
          {
            text: "Linke Seite 90°, da Steißbein so am besten entlastet ist",
            isCorrect: false,
            explanation:
              "Bei 90° Seitenlage liegt der Trochanter auf dem Bett — neues Druckrisiko. Außerdem ist der Hüftwinkel bei Seitenlage 90° nicht kontrollierbar. Die 30°-Mikrolagerung ist die richtige Wahl (NPUAP/EPUAP 2019).",
            explanationB1:
              "Bei 90° Seitenlage liegt die Hüfte auf der Seite auf — das macht eine neue Druckstelle. Außerdem: der Hüftwinkel ist nicht mehr kontrollierbar. 30° ist besser.",
          },
          {
            text: "Frau Yilmaz soll die Liegeposition selbst wählen",
            isCorrect: false,
            explanation:
              "Frau Yilmaz' Wunsch ist wichtig — aber bei Hüft-TEP und Dekubitus Kategorie I hat die medizinische Sicherheit Vorrang. Du kannst und sollst ihr erklären warum die Lagerung wichtig ist. Entscheiden tust du gemeinsam mit ihr — aber innerhalb der sicheren Optionen.",
            explanationB1:
              "Ihr Wunsch ist wichtig — aber nicht jede Position ist sicher. Du erklärst ihr die Regeln und entscheidet gemeinsam — aber innerhalb der sicheren Möglichkeiten.",
          },
        ],
      },
    },

    // Step 4.6 — Timer: Umlagerungsplan erstellen
    {
      stepId: "ce02-yilmaz-dur-06-umlagerungs-timer",
      phase: 4,
      stepType: "timer",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-dur-umlagerungsintervall",
      tag: "pflege",
      contentC1: {
        title: "Umlagerungsintervall festlegen",
        body: "Frau Yilmaz liegt jetzt in 30°-Mikrolagerung. Du weißt: Dekubitus-Prophylaxe bedeutet konsequnte Druckentlastung. Aber wie oft musst du sie umlagern? Wähle den richtigen Zeitintervall.",
        glossarBegriffe: ["Umlagerungsintervall", "Dekubitusprophylaxe", "DNQP"],
      },
      contentB1: {
        title: "Wie oft muss Frau Yilmaz umgelagert werden?",
        body: "Frau Yilmaz liegt in der 30°-Lagerung. Um Druckwunden zu vermeiden, muss sie regelmäßig umgelagert werden. Wie oft?",
        glossarBegriffe: ["Umlagern", "Druckwunden-Prophylaxe"],
      },
      question: {
        fragetext:
          "Stelle den richtigen Umlagerungsintervall für Frau Yilmaz ein.",
        timerVariant: "standard",
        timeLimitSeconds: 30,
        timerQuestions: [
          {
            question:
              "Wie lange darf Frau Yilmaz in einer Position liegen — bevor umgelagert wird?",
            options: [
              "1 Stunde",
              "2 Stunden",
              "3 Stunden",
              "4 Stunden",
              "6 Stunden",
            ],
            correctIndex: 1,
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Step 4.7 (Optional) — WordOrder: Antiemboliestrümpfe anlegen
    {
      stepId: "ce02-yilmaz-dur-07-antiembolie-optional",
      phase: 4,
      stepType: "wordorder",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität"],
      track: "vertiefung",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-dur-antiemboliestrupmpfe",
      tag: "pflege",
      contentC1: {
        title: "Antiemboliestrümpfe anlegen — richtige Reihenfolge",
        body: "Das Anlegen von Antiemboliestrümpfen ist eine pflegerische Aufgabe (§ 3 Abs. 2 PflBG). Die Reihenfolge ist wichtig — der häufigste Fehler ist das falsche Umstülpen. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Antiemboliestrümpfe", "Kompressionsstrümpfe", "Thromboseprophylaxe"],
      },
      contentB1: {
        title: "Antiemboliestrümpfe — in welcher Reihenfolge?",
        body: "Antiemboliestrümpfe schützen vor Thrombosen. Du musst sie richtig anziehen. Bringe die Wörter in die richtige Reihenfolge.",
        glossarBegriffe: ["Thrombosen-Schutzstrümpfe"],
      },
      question: {
        fragetext:
          "Bringe die Schritte zum Anlegen von Antiemboliestrümpfen in die richtige Reihenfolge.",
        wordorder: {
          instruction:
            "Sortiere die Schritte in der richtigen Reihenfolge — von der Vorbereitung bis zur Kontrolle.",
          words: [
            "Größe messen (vorher)",
            "Strumpf umstülpen",
            "Ferse anpassen",
            "Strumpf über Bein ziehen",
            "Knitter prüfen",
          ],
          correctOrder: [0, 1, 2, 3, 4],
          hint: "Der häufigste Fehler: Strumpf nicht umstülpen. Das erzeugt Scherkräfte auf der Haut.",
        },
      },
    },

    // Step 4.8 (Optional) — TableFillIn: Schmerzprotokoll führen
    {
      stepId: "ce02-yilmaz-dur-08-schmerzdoku-optional",
      phase: 4,
      stepType: "tablefillin",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB (Behandlungsdokumentation)"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-dur-schmerzprotokoll",
      tag: "pflege",
      contentC1: {
        title: "Schmerzprotokoll: Verlaufsdokumentation",
        body: "Jede Schmerzmessung und jede Maßnahme muss dokumentiert werden. Trage die NRS-Werte in die Verlaufstabelle ein — basierend auf dem bisherigen Verlauf der Situation.",
        glossarBegriffe: ["NRS", "Schmerzprotokoll", "Verlaufsdokumentation"],
      },
      contentB1: {
        title: "Schmerzdokumentation ausfüllen",
        body: "Du musst die Schmerzen aufschreiben. Fülle die Tabelle aus.",
        glossarBegriffe: ["NRS", "Schmerzdokumentation"],
      },
      question: {
        fragetext: "Trage die NRS-Werte in die Verlaufstabelle ein.",
        tablefillin: {
          instruction:
            "Fülle die Lücken in der Schmerzprotokoll-Tabelle aus. Nutze die Informationen aus dem bisherigen Situationsverlauf.",
          headers: ["Zeit", "Schmerz NRS", "Ort", "massnahme", "Ergebnis"],
          rows: [
            [
              { value: "08:15", isBlank: false },
              { value: "6", isBlank: true, options: ["4", "6", "8", "10"] },
              { value: "Steißbein, Bein", isBlank: false },
              { value: "Metamizol 500 mg oral", isBlank: false },
              { value: "—", isBlank: false },
            ],
            [
              { value: "09:00", isBlank: false },
              { value: "6", isBlank: true, options: ["4", "6", "7", "9"] },
              { value: "Bein beim Aufstehen", isBlank: false },
              { value: "Aufstehversuch 1 — Orthostase (RR sitzend 98/62 vs. liegend 128/78), abgebrochen", isBlank: false },
              { value: "—", isBlank: false },
            ],
            [
              { value: "09:30", isBlank: false },
              { value: "4", isBlank: true, options: ["2", "4", "6", "8"] },
              { value: "Bein im Stehen", isBlank: false },
              { value: "Aufstehversuch 2 — erfolgreich, 3 Schritte", isBlank: false },
              { value: "—", isBlank: false },
            ],
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 40,
};

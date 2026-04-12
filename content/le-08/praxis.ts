// LE-08 Praxis-Tab: 5 Simulationsübungen
// Quelle: content/le-08/unterrichtsentwurf.md (Themenblöcke 5-9)

import type { PraxisUebung, ContentStep } from "../_types";

export const LE08_PRAXIS: PraxisUebung[] = [
  // === Übung 1: Dialog-Simulation — Essen anreichen bei Dysphagie ===
  {
    uebungId: "praxis-01",
    typ: "dialog-sim",
    titel: "Essen anreichen bei Dysphagie",
    titelB1: "Essen geben bei Schluckproblemen",
    beschreibungC1:
      "Sie reichen einer Patientin mit Dysphagie das Mittagessen an. Beachten Sie Positionierung, Konsistenz und Aspirationsprophylaxe.",
    beschreibungB1:
      "Sie geben einer Patientin mit Schluck-Problemen das Essen. Achten Sie auf die richtige Position und das richtige Essen.",
    bloomLevel: 4,
    steps: [
      {
        stepId: "praxis-01-s01",
        phase: "s1",
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 474-475"],
        track: "basis",
        modus: "praxis-sim",
        lernziel: "ce02-le08-anreichen",
        themenblockPhase: "PRAXIS_DIALOG",
        tag: "pflege",
        contentC1: {
          title: "Situation: Elisabeth Kramer, Mittagessen",
          body: "Elisabeth Kramer (82 J., Demenz, Dysphagie Grad II) sitzt im Rollstuhl am Tisch. Das Mittagessen wurde geliefert: Kartoffelpueree, passiertes Gemuese, Joghurt. Sie bemerken, dass Frau Kramer im Rollstuhl nach hinten gerutscht ist und der Kopf ueberstreckt ist.",
        },
        contentB1: {
          title: "Situation: Frau Kramer, Mittagessen",
          body: "Frau Kramer (82 Jahre, Demenz, Schluck-Probleme) sitzt im Rollstuhl am Tisch. Das Mittagessen ist da: Kartoffelbrei, pueriertes Gemuese, Joghurt. Sie sehen: Frau Kramer ist nach hinten gerutscht. Ihr Kopf ist nach hinten gestreckt.",
        },
      },
      {
        stepId: "praxis-01-s02",
        phase: "s1",
        stepType: "mc",
        bloomLevel: 3,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 474"],
        track: "basis",
        modus: "challenge",
        lernziel: "ce02-le08-positionierung",
        themenblockPhase: "PRAXIS_DIALOG",
        tag: "pflege",
        contentC1: {
          title: "Erste Massnahme vor dem Anreichen",
          body: "Frau Kramer sitzt im Rollstuhl mit ueberstrecktem Kopf. Was ist Ihre erste Massnahme?",
        },
        contentB1: {
          title: "Was machen Sie zuerst?",
          body: "Frau Kramer sitzt im Rollstuhl. Ihr Kopf ist nach hinten. Was machen Sie zuerst?",
        },
        question: {
          fragetext: "Was ist Ihre erste Massnahme, bevor Sie mit dem Anreichen beginnen?",
          optionen: [
            {
              text: "Frau Kramer aufrecht positionieren (mindestens 70 Grad), Kinn zur Brust, Fuesse aufstellen",
              isCorrect: true,
              explanation:
                "Korrekt! Vor dem Anreichen MUSS die Positionierung stimmen: Oberkoerper mindestens 70 Grad, Kinn leicht zur Brust (Chin-Tuck), Fuesse haben Bodenkontakt. Eine Ueberstreckung des Kopfes oeffnet den Kehlkopfeingang und erhoeht die Aspirationsgefahr massiv (I Care Pflege S. 474).",
              explanationB1:
                "Richtig! Vor dem Essen muss die Position stimmen: Oberkoerper hoch (mindestens 70 Grad), Kinn nach unten zur Brust, Fuesse auf dem Boden. Wenn der Kopf nach hinten geht, kann Essen in die Lunge kommen.",
            },
            {
              text: "Mundpflege durchfuehren, um die Speichelproduktion anzuregen",
              isCorrect: false,
              explanation:
                "Mundpflege ist wichtig, aber NICHT die erste Massnahme. Die gefaehrliche Ueberstreckung des Kopfes muss zuerst korrigiert werden — Aspirationsgefahr!",
            },
            {
              text: "Das Essen portionieren und mundgerecht vorbereiten",
              isCorrect: false,
              explanation:
                "Die Vorbereitung des Essens ist wichtig, aber die Positionierung hat Prioritaet. Bei ueberstrecktem Kopf darf KEIN Essen angereicht werden.",
            },
            {
              text: "Frau Kramer ansprechen und zum Essen motivieren",
              isCorrect: false,
              explanation:
                "Kommunikation ist essenziell, aber die Sicherheit geht vor. Erst positionieren, dann ansprechen und motivieren.",
            },
          ],
        },
      },
      {
        stepId: "praxis-01-s03",
        phase: "s1",
        stepType: "dialog",
        bloomLevel: 4,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 474-475"],
        track: "basis",
        modus: "story",
        lernziel: "ce02-le08-anreichen-dysphagie",
        themenblockPhase: "PRAXIS_DIALOG",
        tag: "pflege",
        contentC1: {
          title: "Dialog: Essen anreichen",
          body: "Frau Kramer ist jetzt korrekt positioniert. Sie beginnen mit dem Anreichen des Mittagessens.",
        },
        contentB1: {
          title: "Gespraech: Essen geben",
          body: "Frau Kramer sitzt jetzt richtig. Sie beginnen mit dem Essen-Geben.",
        },
        question: {
          fragetext: "Wie gehen Sie vor?",
          patientName: "Elisabeth Kramer",
          dialogPhases: [
            {
              context:
                "Frau Kramer schaut auf den Teller, aber greift nicht zu. Sie wirkt unsicher.",
              contextB1:
                "Frau Kramer schaut auf den Teller. Sie nimmt nichts. Sie sieht unsicher aus.",
              speaker: "Pflegefachperson",
              options: [
                {
                  text: "Frau Kramer, schauen Sie — heute gibt es Kartoffelpueree und Gemuese. Moechten Sie zuerst das Pueree probieren?",
                  textB1:
                    "Frau Kramer, schauen Sie — heute gibt es Kartoffelbrei und Gemuese. Wollen Sie zuerst den Brei?",
                  patientResponse:
                    "Sie nickt langsam und oeffnet den Mund ein wenig.",
                  patientResponseB1:
                    "Sie nickt und oeffnet den Mund ein bisschen.",
                  score: 3,
                  feedback:
                    "Sehr gut! Sie benennen die Speisen (Orientierung bei Demenz), bieten eine Auswahl an und warten auf Zustimmung. Das respektiert die Autonomie.",
                  feedbackB1:
                    "Sehr gut! Sie sagen, was es gibt. Sie fragen, was sie zuerst moechte. Das ist respektvoll.",
                },
                {
                  text: "So Frau Kramer, Mund auf, jetzt wird gegessen!",
                  patientResponse:
                    "Frau Kramer dreht den Kopf weg und presst die Lippen zusammen.",
                  score: 0,
                  feedback:
                    "Unguenstig! Kommandoton verletzt die Wuerde und kann Abwehrreaktionen ausloesen. Bei Demenz: ruhig, langsam, Wahlmoeglichkeiten geben.",
                  feedbackB1:
                    "Nicht gut! Befehle machen Angst. Frau Kramer macht den Mund zu. Besser: ruhig sprechen, fragen was sie moechte.",
                },
                {
                  text: "Ich lege den Loeffel in Ihre Hand — versuchen Sie es selbst, ich helfe wenn noetig.",
                  patientResponse:
                    "Frau Kramer greift unsicher nach dem Loeffel. Nach zwei Versuchen schafft sie es, etwas Pueree zum Mund zu fuehren.",
                  score: 2,
                  feedback:
                    "Guter Ansatz! Selbststaendigkeit foerdern nach dem Grundsatz: So viel Hilfe wie noetig, so wenig wie moeglich. Bei Demenz Grad II aber auf Aspirationsrisiko achten.",
                  feedbackB1:
                    "Gute Idee! Sie lassen Frau Kramer selbst essen. Das ist gut. Aber achten Sie auf Verschlucken.",
                },
              ],
            },
            {
              context:
                "Frau Kramer hustet ploetzlich beim Schlucken des Gemueses. Ihr Gesicht wird rot.",
              contextB1:
                "Frau Kramer hustet ploetzlich beim Gemuese. Ihr Gesicht wird rot.",
              speaker: "Pflegefachperson",
              options: [
                {
                  text: "Sofort Essensgabe stoppen! Frau Kramer, husten Sie kraeftig. Oberkoerper nach vorne beugen.",
                  textB1:
                    "Sofort aufhoeren mit Essen! Frau Kramer, husten Sie stark. Oberkoerper nach vorne.",
                  patientResponse:
                    "Frau Kramer hustet kraeftig und befoerdert ein Gemuesestueck heraus. Die Atmung normalisiert sich.",
                  patientResponseB1:
                    "Frau Kramer hustet stark. Ein Stueck Gemuese kommt heraus. Sie kann wieder normal atmen.",
                  score: 3,
                  feedback:
                    "Korrekt! Erste Hilfe bei Aspiration: 1) Essensgabe sofort stoppen, 2) Husten lassen (koerpereigener Schutzreflex), 3) Oberkoerper nach vorne (Schwerkraft hilft). Bei anhaltendem Husten: 5 Schulterblattschlaege, dann Arzt rufen (I Care Pflege S. 475).",
                  feedbackB1:
                    "Richtig! Bei Verschlucken: 1) Aufhoeren mit Essen, 2) Husten lassen, 3) nach vorne beugen. Wenn es nicht besser wird: auf den Ruecken klopfen und Arzt rufen.",
                },
                {
                  text: "Schnell ein Glas Wasser geben, damit sie nachspuelen kann.",
                  patientResponse:
                    "Frau Kramer verschluckt sich am Wasser zusaetzlich. Der Husten wird schlimmer.",
                  score: 0,
                  feedback:
                    "GEFAEHRLICH! Bei Aspiration NIEMALS Fluessigkeit geben — das verschlimmert die Situation! Erst wenn der Hustenreiz vorbei ist, kleine Schlucke anbieten.",
                  feedbackB1:
                    "GEFAEHRLICH! Bei Verschlucken KEIN Wasser geben! Das macht es schlimmer.",
                },
                {
                  text: "Frau Kramer beruhigen und auf den Ruecken klopfen.",
                  patientResponse:
                    "Sie klopfen zwischen die Schulterblaetter. Nach einigen Schlaegen hustet Frau Kramer das Gemuesestueck heraus.",
                  score: 2,
                  feedback:
                    "Teilweise richtig! Schulterblattschlaege sind die zweite Stufe der Ersten Hilfe bei Aspiration. Die erste Stufe ist aber: Husten lassen! Der Hustenreflex ist der effektivste Schutzmechanismus.",
                  feedbackB1:
                    "Halb richtig! Auf den Ruecken klopfen hilft. Aber zuerst soll der Patient husten! Husten ist der beste Schutz.",
                },
              ],
            },
          ],
        },
      },
      {
        stepId: "praxis-01-s04",
        phase: "s1",
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 474"],
        track: "basis",
        modus: "sortierstation",
        lernziel: "ce02-le08-anreichen-reihenfolge",
        themenblockPhase: "PRAXIS_DIALOG",
        tag: "pflege",
        contentC1: {
          title: "Reihenfolge: Essen anreichen bei Schluckstoerung",
          body: "Bringen Sie die Schritte beim Essen anreichen in die richtige Reihenfolge.",
        },
        contentB1: {
          title: "Reihenfolge: Essen geben bei Schluck-Problemen",
          body: "Was kommt zuerst, was kommt danach? Sortieren Sie die Schritte.",
        },
        question: {
          fragetext: "Ordnen Sie die Schritte beim Anreichen bei Dysphagie in die korrekte Reihenfolge.",
          sequencing: {
            instruction: "Ordnen Sie die Schritte beim Anreichen bei Dysphagie.",
            items: [
              { id: "a", label: "Haende desinfizieren, Patientin begruessen" },
              { id: "b", label: "Oberkoerper mindestens 70 Grad positionieren, Kinn zur Brust (Chin-Tuck)" },
              { id: "c", label: "Speisen benennen, Konsistenz pruefen (passiert/pueriert)" },
              { id: "d", label: "Kleinen Loeffel von vorne reichen, Schlucken abwarten (leerer Mund!)" },
              { id: "e", label: "Zwischen den Bissen Pausen einhalten, Mund kontrollieren" },
              { id: "f", label: "Nach dem Essen: Mundpflege, Oberkoerper 30 Min. hochlassen" },
            ],
          },
        },
      },
    ],
  },

  // === Uebung 2: Pflegeplanung — Mangelernaehrung bei Elisabeth Kramer ===
  {
    uebungId: "praxis-02",
    typ: "pflegeplan",
    titel: "Pflegeplanung: Mangelernaehrung",
    titelB1: "Pflegeplan schreiben: Zu wenig Essen",
    beschreibungC1:
      "Erstellen Sie einen vollstaendigen Pflegeplan fuer Elisabeth Kramer (BMI 17,8) nach dem PESR-Schema: Problem, Etiologie, Symptome, Ressourcen.",
    beschreibungB1:
      "Schreiben Sie einen Pflegeplan fuer Frau Kramer. Sie ist zu duenn (BMI 17,8). Was ist das Problem? Was koennen Sie tun?",
    bloomLevel: 5,
    steps: [
      {
        stepId: "praxis-02-s01",
        phase: "s1",
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 456-461"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-le08-pflegeplan-mangel",
        themenblockPhase: "PFLEGEPLANUNG",
        tag: "pflege",
        contentC1: {
          title: "Fallbeschreibung: Elisabeth Kramer",
          body: "Elisabeth Kramer, 82 Jahre, Demenz (mittelgradig), Dysphagie Grad II. Aufnahme ins Pflegeheim vor 2 Wochen. Gewicht: 48 kg bei 164 cm (BMI 17,8 = Untergewicht). MNA-Score: 14/30 (Mangelernaehrung). Gewichtsverlust: 4 kg in 3 Monaten (8,3%). Trinkmenge gestern: 800 ml (Bedarf: 1.680 ml). Isst nur wenige Loeffel pro Mahlzeit, dreht dann den Kopf weg. Frueher: liebte Apfelkuchen und Kaffee.",
        },
        contentB1: {
          title: "Ueber Frau Kramer",
          body: "Frau Kramer, 82 Jahre, hat Demenz und Schluck-Probleme. Sie ist seit 2 Wochen im Pflegeheim. Gewicht: 48 kg, Groesse: 164 cm (BMI 17,8 = zu duenn). Sie hat 4 kg in 3 Monaten verloren. Sie trinkt zu wenig: nur 800 ml gestern. Sie isst nur wenige Loeffel, dann will sie nicht mehr. Frueher hat sie Apfelkuchen und Kaffee geliebt.",
        },
      },
      {
        stepId: "praxis-02-s02",
        phase: "s1",
        stepType: "mc",
        bloomLevel: 4,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 456-461", "DNQP Expertenstandard Ernaehrungsmanagement"],
        track: "basis",
        modus: "challenge",
        lernziel: "ce02-le08-pflegediagnose",
        themenblockPhase: "PFLEGEPLANUNG",
        tag: "pflege",
        contentC1: {
          title: "Pflegediagnose formulieren",
          body: "Waehlen Sie die prioritaere Pflegediagnose fuer Frau Kramer.",
        },
        contentB1: {
          title: "Was ist das Pflege-Problem?",
          body: "Was ist das wichtigste Pflege-Problem bei Frau Kramer?",
        },
        question: {
          fragetext: "Welche Pflegediagnose ist fuer Frau Kramer prioritaer?",
          optionen: [
            {
              text: "Mangelernaehrung b/d kognitive Beeintraechtigung und Dysphagie a/d BMI 17,8, Gewichtsverlust 8,3% in 3 Monaten, MNA 14/30",
              isCorrect: true,
              explanation:
                "Korrekt! Die Pflegediagnose nach PESR: Problem = Mangelernaehrung, Etiologie = Demenz + Dysphagie, Symptome = BMI unter 18,5, Gewichtsverlust ueber 5% in 3 Mo., MNA unter 17. Dies erfuellt alle Kriterien des DNQP Expertenstandards Ernaehrungsmanagement.",
              explanationB1:
                "Richtig! Das Haupt-Problem ist: Frau Kramer isst zu wenig. Warum? Wegen Demenz und Schluck-Problemen. Zeichen: BMI zu niedrig, hat viel Gewicht verloren, MNA-Test zeigt Mangel-Ernaehrung.",
            },
            {
              text: "Fluessigkeitsdefizit b/d eingeschraenkte Trinkmenge a/d 800 ml/Tag",
              isCorrect: false,
              explanation:
                "Fluessigkeitsdefizit ist ein wichtiges Zusatzproblem, aber die Mangelernaehrung ist prioritaer — der BMI und der massive Gewichtsverlust zeigen eine akute Gefaehrdung.",
            },
            {
              text: "Aspirationsgefahr b/d Dysphagie Grad II",
              isCorrect: false,
              explanation:
                "Aspirationsgefahr ist ein Risiko-Problem und muss beachtet werden — aber die manifeste Mangelernaehrung mit messbaren Defiziten hat hoehere Prioritaet als ein Risiko.",
            },
            {
              text: "Selbstversorgungsdefizit Essen b/d kognitive Beeintraechtigung",
              isCorrect: false,
              explanation:
                "Teilweise korrekt — Frau Kramer braucht Unterstuetzung beim Essen. Aber das Kernproblem ist nicht die Selbstversorgung, sondern der manifeste Ernaehrungsmangel.",
            },
          ],
        },
      },
      {
        stepId: "praxis-02-s03",
        phase: "s1",
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 456-461", "DNQP Expertenstandard Ernaehrungsmanagement"],
        track: "basis",
        modus: "schreibtisch",
        lernziel: "ce02-le08-pflegeplan-schreiben",
        themenblockPhase: "PFLEGEPLANUNG",
        tag: "pflege",
        contentC1: {
          title: "Pflegeziele und Massnahmen formulieren",
          body: "Formulieren Sie fuer Frau Kramer: 1) Ein realistisches Nahziel (2 Wochen) und 2) mindestens 3 konkrete Pflegemassnahmen. Beziehen Sie die Ressource Vorliebe fuer Apfelkuchen ein.",
        },
        contentB1: {
          title: "Ziele und Massnahmen schreiben",
          body: "Schreiben Sie fuer Frau Kramer: 1) Ein Ziel fuer 2 Wochen und 2) mindestens 3 Massnahmen. Denken Sie an: Frau Kramer liebt Apfelkuchen!",
        },
        question: {
          fragetext: "Formulieren Sie Pflegeziele (SMART) und Massnahmen fuer Elisabeth Kramer.",
          reflection: {
            prompt: "Formulieren Sie Pflegeziele (SMART) und Massnahmen fuer Elisabeth Kramer.",
            placeholder: "Nahziel: Frau Kramer nimmt innerhalb von 2 Wochen...\nMassnahme 1: ...\nMassnahme 2: ...\nMassnahme 3: ...",
            systemPrompt: "Bewerte den Pflegeplan nach PESR-Schema. Erwarte: SMART-Ziel (messbar, zeitgebunden), mind. 3 Massnahmen (Ernaehrungsanpassung, Trinknahrung/ONS, Gewichtskontrolle). Bonus: Nutzung der Ressource Apfelkuchen, Einbezug Biografiearbeit bei Demenz.",
          },
        },
      },
    ],
  },

  // === Uebung 3: Beratungsgespraech — Angehoerige ===
  {
    uebungId: "praxis-03",
    typ: "beratung",
    titel: "Angehoerigen-Beratung: Er isst nichts mehr!",
    titelB1: "Gespraech mit Ehefrau: Er isst nicht mehr!",
    beschreibungC1:
      "Fuehren Sie ein Beratungsgespraech mit der Ehefrau von Walter Bergmann (Demenz, PEG). Sie bringt Kuchen mit und versteht nicht, warum er ihn nicht essen darf.",
    beschreibungB1:
      "Sprechen Sie mit der Ehefrau von Herrn Bergmann. Er hat Demenz und eine Magen-Sonde. Die Ehefrau hat Kuchen mitgebracht.",
    bloomLevel: 4,
    steps: [
      {
        stepId: "praxis-03-s01",
        phase: "s1",
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "KB-II",
        quellen: ["I Care Pflege S. 467-469"],
        track: "basis",
        modus: "story",
        lernziel: "ce02-le08-beratung-angehoerige",
        themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
        tag: "pflege",
        contentC1: {
          title: "Situation: Besuch auf der Pflegestation",
          body: "Helga Bergmann (78 J.) besucht ihren Mann Walter (81 J., fortgeschrittene Demenz, PEG seit 4 Wochen). Sie hat seinen Lieblingskuchen (Streuselkuchen) mitgebracht. Walter reagiert auf den Geruch, oeffnet den Mund. Helga sagt zu Ihnen: Sehen Sie, er will doch essen! Warum darf er das nicht? Diese Schlaeuche sind doch Unsinn!",
        },
        contentB1: {
          title: "Situation: Besuch im Pflegeheim",
          body: "Frau Bergmann (78 Jahre) besucht ihren Mann Walter (81 Jahre, schwere Demenz, Magen-Sonde seit 4 Wochen). Sie hat Streuselkuchen mitgebracht. Walter riecht den Kuchen und oeffnet den Mund. Frau Bergmann sagt: Sehen Sie, er will essen! Warum darf er nicht? Die Schlaeuche sind doch Unsinn!",
        },
      },
      {
        stepId: "praxis-03-s02",
        phase: "s1",
        stepType: "dialog",
        bloomLevel: 4,
        kompetenzbereich: "KB-II",
        quellen: ["I Care Pflege S. 467-469", "I Care Pflege S. 475"],
        track: "basis",
        modus: "story",
        lernziel: "ce02-le08-beratung-empathie",
        themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
        tag: "pflege",
        contentC1: {
          title: "Beratungsgespraech mit Frau Bergmann",
          body: "Frau Bergmann steht mit dem Kuchen am Bett ihres Mannes. Sie ist emotional aufgewuehlt. Walter streckt die Hand nach dem Kuchen aus.",
        },
        contentB1: {
          title: "Gespraech mit Frau Bergmann",
          body: "Frau Bergmann steht mit dem Kuchen am Bett. Sie ist aufgeregt. Walter greift nach dem Kuchen.",
        },
        question: {
          fragetext: "Wie reagieren Sie auf Frau Bergmanns Wunsch?",
          patientName: "Helga Bergmann",
          dialogPhases: [
            {
              context:
                "Frau Bergmann haelt Ihnen den Kuchen hin: Bitte, nur ein kleines Stueck! Er hat immer so gern Streuselkuchen gegessen.",
              contextB1:
                "Frau Bergmann sagt: Bitte, nur ein kleines Stueck Kuchen! Er hat Kuchen immer so gern gegessen.",
              speaker: "Pflegefachperson",
              options: [
                {
                  text: "Frau Bergmann, ich verstehe Sie sehr gut. Es ist schwer zu sehen, dass Ihr Mann nicht mehr normal essen kann. Setzen wir uns kurz zusammen — ich erklaere Ihnen, warum wir so vorsichtig sein muessen.",
                  textB1: "Frau Bergmann, ich verstehe Sie. Es ist schwer. Setzen wir uns. Ich erklaere es Ihnen.",
                  patientResponse: "Frau Bergmann setzt sich. Ihre Augen werden feucht: Es ist einfach so traurig. Er war immer ein Geniesser.",
                  patientResponseB1: "Frau Bergmann setzt sich. Sie weint fast: Es ist so traurig. Er hat immer gerne gegessen.",
                  score: 3,
                  feedback: "Empathisch und professionell! Sie validieren die Emotionen (Sandwich-Prinzip: erst Verstaendnis zeigen), bieten einen geschuetzten Gespraechsrahmen an und bereiten die Aufklaerung vor.",
                  feedbackB1: "Sehr gut! Sie zeigen Verstaendnis. Sie nehmen sich Zeit. Das ist wichtig fuer ein gutes Gespraech.",
                },
                {
                  text: "Das geht leider nicht. Herr Bergmann hat eine schwere Schluckstoerung und darf nichts oral zu sich nehmen.",
                  patientResponse: "Frau Bergmann reagiert abweisend: Das sagen Sie alle! Aber er will doch essen — sehen Sie das nicht?",
                  score: 1,
                  feedback: "Fachlich korrekt, aber empathisch unzureichend. Sie gehen nicht auf die Emotionen ein und blockieren sofort. Angehoerige in einer Krisensituation brauchen erst emotionale Annahme, dann Sachinformation.",
                  feedbackB1: "Die Information stimmt. Aber Sie haben kein Verstaendnis gezeigt. Frau Bergmann fuehlt sich nicht gehoert.",
                },
                {
                  text: "Na gut, ein kleines Stueck kann ja nicht schaden. Aber passen Sie auf, dass er sich nicht verschluckt.",
                  patientResponse: "Walter beisst in den Kuchen. Nach wenigen Sekunden beginnt er heftig zu husten. Kruemel gelangen in die Atemwege.",
                  score: 0,
                  feedback: "GEFAEHRLICH! Bei Dysphagie und PEG-Indikation ist orale Nahrungsaufnahme fester Konsistenz kontraindiziert. Streuselkuchen = kruemelig = hoechstes Aspirationsrisiko! Sie haften als Pflegefachkraft (I Care Pflege S. 475).",
                  feedbackB1: "GEFAEHRLICH! Herr Bergmann hat schwere Schluck-Probleme. Kuchen mit Kruemeln ist sehr gefaehrlich!",
                },
              ],
            },
            {
              context: "Frau Bergmann fragt: Aber wenn er den Kuchen riecht und den Mund oeffnet — heisst das nicht, dass er essen kann?",
              contextB1: "Frau Bergmann fragt: Aber er riecht den Kuchen und oeffnet den Mund — kann er dann nicht essen?",
              speaker: "Pflegefachperson",
              options: [
                {
                  text: "Der Geruchssinn und der Mundoeffnungsreflex funktionieren noch gut — das ist sogar eine Ressource! Das Problem liegt beim Schlucken: der Kehldeckel schliesst nicht mehr zuverlaessig. Wir koennen aber Geschmackserlebnisse schaffen — z.B. Mundpflege mit Apfelsaft oder Geschmackstupfer.",
                  textB1: "Riechen und Mund oeffnen funktioniert noch — das ist gut! Das Problem ist das Schlucken: Essen kann in die Lunge kommen. Aber wir koennen etwas tun: den Mund mit Apfelsaft pflegen. So schmeckt er etwas.",
                  patientResponse: "Frau Bergmann nickt langsam: Geschmackstupfer... das klingt gut. Kann ich das machen?",
                  patientResponseB1: "Frau Bergmann nickt: Geschmackstupfer... das ist eine gute Idee. Kann ich das machen?",
                  score: 3,
                  feedback: "Exzellent! Sie erklaeren verstaendlich den pathophysiologischen Grund (Kehldeckelschluss), validieren die Beobachtung als Ressource und bieten eine konkrete Alternative an. Geschmackstupfer sind eine anerkannte Methode zur Lebensqualitaet bei PEG-Patienten.",
                  feedbackB1: "Sehr gut! Sie erklaeren warum das Schlucken nicht geht. Sie zeigen eine Loesung: Geschmackstupfer.",
                },
                {
                  text: "Nein, der Mundoeffnungsreflex ist leider nur ein Reflex und sagt nichts ueber die Schluckfaehigkeit aus.",
                  patientResponse: "Frau Bergmann schweigt und schaut traurig auf den Kuchen.",
                  score: 1,
                  feedback: "Fachlich korrekt, aber Sie bieten keine Alternative an. Angehoerige brauchen nicht nur Verbote, sondern auch Loesungen.",
                  feedbackB1: "Stimmt, aber Sie zeigen keine Loesung. Besser: eine Alternative anbieten.",
                },
              ],
            },
          ],
        },
      },
      {
        stepId: "praxis-03-s03",
        phase: "s1",
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "KB-II",
        quellen: ["I Care Pflege S. 467-469"],
        track: "vertiefung",
        modus: "schreibtisch",
        lernziel: "ce02-le08-ethik-reflexion",
        themenblockPhase: "REFLEXION",
        tag: "pflege",
        contentC1: {
          title: "Reflexion: Ethische Dimension",
          body: "Reflektieren Sie: Wie laesst sich das Recht auf Lebensqualitaet (Geschmackserleben, Wuensche der Angehoerigen) mit der Schutzpflicht (Aspirationsprophylaxe) vereinbaren?",
        },
        contentB1: {
          title: "Nachdenken: Was ist richtig?",
          body: "Denken Sie nach: Herr Bergmann soll geschuetzt werden (kein Verschlucken). Aber er soll auch Freude haben (Geschmack). Wie geht beides zusammen?",
        },
        question: {
          fragetext: "Wie vereinbaren Sie Lebensqualitaet und Sicherheit bei PEG-Patienten mit Demenz?",
          reflection: {
            prompt: "Wie vereinbaren Sie Lebensqualitaet und Sicherheit bei PEG-Patienten mit Demenz?",
            placeholder: "Meiner Meinung nach kann man Lebensqualitaet und Sicherheit vereinbaren, indem...",
            systemPrompt: "Bewerte die Reflexion auf ethisches Denken. Erwarte: Abwaegung Autonomie vs. Fuersorge, konkrete Loesungsansaetze (Geschmackstupfer, basale Stimulation, Biografiearbeit), Einbezug Patientenverfuegung. Bonus: Hinweis auf ethische Fallbesprechung im Team.",
          },
        },
      },
    ],
  },

  // === Uebung 4: Sprechuebung — Fachbegriffe Ernaehrung ===
  {
    uebungId: "praxis-04",
    typ: "sprechuebung",
    titel: "Fachbegriffe Ernaehrung aussprechen",
    titelB1: "Fachwoerter zum Thema Essen ueben",
    beschreibungC1:
      "Sprechen Sie 8 zentrale Fachbegriffe der Ernaehrungspflege korrekt aus. Whisper STT prueft Ihre Aussprache.",
    beschreibungB1:
      "Sprechen Sie 8 wichtige Fachwoerter zum Thema Essen. Die App prueft, ob Sie richtig sprechen.",
    bloomLevel: 3,
    steps: [
      {
        stepId: "praxis-04-s01",
        phase: "s1",
        stepType: "speech",
        bloomLevel: 1,
        kompetenzbereich: "KB-V",
        quellen: ["I Care Pflege Kap. 18"],
        track: "basis",
        modus: "praxis-sim",
        lernziel: "ce02-le08-fachsprache",
        themenblockPhase: "ANWENDUNG",
        tag: "pflege",
        contentC1: {
          title: "Fachbegriffe nachsprechen",
          body: "Sprechen Sie die folgenden Fachbegriffe laut und deutlich nach. Achten Sie auf korrekte Betonung.",
        },
        contentB1: {
          title: "Fachwoerter nachsprechen",
          body: "Sprechen Sie die Woerter laut nach. Sprechen Sie langsam und deutlich.",
        },
        question: {
          fragetext: "Sprechen Sie den Fachbegriff laut aus.",
          speech: {
            speechType: "nachsprechen",
            zielwort: "Dysphagie",
            bewertungshinweis: "Korrekte Aussprache: dys-fa-GIE (Betonung auf letzter Silbe). Bedeutung: Schluckstoerung.",
          },
        },
      },
      {
        stepId: "praxis-04-s02",
        phase: "s1",
        stepType: "speech",
        bloomLevel: 1,
        kompetenzbereich: "KB-V",
        quellen: ["I Care Pflege Kap. 18"],
        track: "basis",
        modus: "praxis-sim",
        lernziel: "ce02-le08-fachsprache",
        themenblockPhase: "ANWENDUNG",
        tag: "pflege",
        contentC1: {
          title: "Fachbegriff: Aspiration",
          body: "Sprechen Sie den Begriff Aspiration korrekt aus.",
        },
        contentB1: {
          title: "Fachwort: Aspiration",
          body: "Sprechen Sie das Wort Aspiration laut aus.",
        },
        question: {
          fragetext: "Sprechen Sie den Fachbegriff laut aus.",
          speech: {
            speechType: "nachsprechen",
            zielwort: "Aspiration",
            bewertungshinweis: "Korrekte Aussprache: as-pi-ra-TION. Bedeutung: Eindringen von Material in die Atemwege.",
          },
        },
      },
      {
        stepId: "praxis-04-s03",
        phase: "s1",
        stepType: "speech",
        bloomLevel: 1,
        kompetenzbereich: "KB-V",
        quellen: ["I Care Pflege Kap. 18"],
        track: "basis",
        modus: "praxis-sim",
        lernziel: "ce02-le08-fachsprache",
        themenblockPhase: "ANWENDUNG",
        tag: "pflege",
        contentC1: {
          title: "Fachbegriff: Perkutane endoskopische Gastrostomie",
          body: "Sprechen Sie den vollstaendigen Begriff und die Abkuerzung PEG aus.",
        },
        contentB1: {
          title: "Fachwort: PEG (Magen-Sonde)",
          body: "Sprechen Sie perkutane endoskopische Gastrostomie laut aus.",
        },
        question: {
          fragetext: "Sprechen Sie den Fachbegriff laut aus.",
          speech: {
            speechType: "nachsprechen",
            zielwort: "perkutane endoskopische Gastrostomie",
            bewertungshinweis: "Korrekte Aussprache: per-ku-TAN-e en-do-SKO-pische gas-tro-sto-MIE. Abkuerzung: PEG.",
          },
        },
      },
      {
        stepId: "praxis-04-s04",
        phase: "s1",
        stepType: "speech",
        bloomLevel: 1,
        kompetenzbereich: "KB-V",
        quellen: ["I Care Pflege Kap. 18"],
        track: "basis",
        modus: "praxis-sim",
        lernziel: "ce02-le08-fachsprache",
        themenblockPhase: "ANWENDUNG",
        tag: "pflege",
        contentC1: {
          title: "Fachbegriff: Exsikkose",
          body: "Sprechen Sie den Begriff Exsikkose korrekt aus.",
        },
        contentB1: {
          title: "Fachwort: Exsikkose (Austrocknung)",
          body: "Sprechen Sie das Wort Exsikkose laut aus.",
        },
        question: {
          fragetext: "Sprechen Sie den Fachbegriff laut aus.",
          speech: {
            speechType: "nachsprechen",
            zielwort: "Exsikkose",
            bewertungshinweis: "Korrekte Aussprache: ex-si-KO-se. Bedeutung: Austrocknung des Koerpers.",
          },
        },
      },
    ],
  },

  // === Uebung 5: Prozedur — Sondennahrung verabreichen ===
  {
    uebungId: "praxis-05",
    typ: "prozedur",
    titel: "Sondennahrung ueber PEG verabreichen",
    titelB1: "Sonden-Essen ueber PEG geben",
    beschreibungC1:
      "Fuehren Sie die Bolus-Gabe ueber PEG-Sonde durch. Beachten Sie Hygiene, Lagekontrolle und Komplikationsprophylaxe.",
    beschreibungB1:
      "Geben Sie Essen ueber die Magen-Sonde (PEG). Achten Sie auf Sauberkeit und die richtige Reihenfolge.",
    bloomLevel: 3,
    steps: [
      {
        stepId: "praxis-05-s01",
        phase: "s1",
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 465-467"],
        track: "basis",
        modus: "sortierstation",
        lernziel: "ce02-le08-peg-bolus",
        themenblockPhase: "PRAXIS_DIALOG",
        tag: "pflege",
        contentC1: {
          title: "Reihenfolge: Bolus-Gabe ueber PEG",
          body: "Bringen Sie die Arbeitsschritte der Bolus-Gabe ueber PEG in die korrekte Reihenfolge.",
        },
        contentB1: {
          title: "Reihenfolge: Essen ueber Magen-Sonde geben",
          body: "Sortieren Sie die Schritte: Was kommt zuerst, was kommt danach?",
        },
        question: {
          fragetext: "Ordnen Sie die Schritte der PEG-Bolus-Gabe.",
          sequencing: {
            instruction: "Ordnen Sie die Schritte der PEG-Bolus-Gabe.",
            items: [
              { id: "a", label: "Haendedesinfektion, Material vorbereiten" },
              { id: "b", label: "Oberkoerper mindestens 30 Grad hochlagern" },
              { id: "c", label: "Sondenlage pruefen (Aspiration von Mageninhalt, pH-Test)" },
              { id: "d", label: "Sonde mit 20-30 ml Wasser spuelen (Durchgaengigkeit)" },
              { id: "e", label: "Sondennahrung (Raumtemperatur!) langsam per Spritze applizieren (max. 30 ml/Min)" },
              { id: "f", label: "Sonde mit 20-30 ml Wasser nachspuelen, Klemme schliessen" },
              { id: "g", label: "Oberkoerperhochlagerung mindestens 30 Grad fuer 30 Min. beibehalten, dokumentieren" },
            ],
          },
        },
      },
      {
        stepId: "praxis-05-s02",
        phase: "s1",
        stepType: "mc",
        bloomLevel: 3,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 467-469"],
        track: "basis",
        modus: "challenge",
        lernziel: "ce02-le08-peg-komplikationen",
        themenblockPhase: "PRAXIS_DIALOG",
        tag: "pflege",
        contentC1: {
          title: "Komplikationen erkennen",
          body: "Waehrend der Bolus-Gabe klagt Herr Bergmann ueber Uebelkeit und Sie bemerken eine Vorwoelbung der Bauchdecke um die PEG-Einstichstelle.",
        },
        contentB1: {
          title: "Probleme erkennen",
          body: "Beim Essen-Geben ueber die Sonde wird Herrn Bergmann uebel. Sein Bauch ist dick um die Sonde herum.",
        },
        question: {
          fragetext: "Was ist Ihre Reaktion?",
          optionen: [
            {
              text: "Sofort Sondenkost stoppen, Sonde oeffnen (Entlastung), Arzt informieren — V.a. Dislokation oder Peritonitis",
              isCorrect: true,
              explanation:
                "Korrekt! Uebelkeit + Vorwoelbung um die Einstichstelle deutet auf eine Sondendislokation hin — die Nahrung laeuft moeglicherweise in die Bauchoehle (Peritonitis-Gefahr!). Sofortmassnahmen: 1) Zufuhr stoppen, 2) Sonde oeffnen zur Druckentlastung, 3) Arzt sofort informieren (I Care Pflege S. 467).",
              explanationB1:
                "Richtig! Wenn der Bauch dick wird um die Sonde, stimmt etwas nicht. Vielleicht ist die Sonde verrutscht. Sofort aufhoeren, Sonde oeffnen, Arzt rufen.",
            },
            {
              text: "Bolus-Gabe verlangsamen und abwarten, ob die Uebelkeit nachlaesst",
              isCorrect: false,
              explanation:
                "GEFAEHRLICH! Bei Vorwoelbung der Bauchdecke um die Einstichstelle ist Abwarten kontraindiziert. Sofort stoppen und Arzt verstaendigen.",
            },
            {
              text: "Anti-Emetikum verabreichen und die restliche Nahrung danach geben",
              isCorrect: false,
              explanation:
                "Die Uebelkeit ist hier ein Warnsignal, nicht ein blosses Symptom. Eigenstaendige Medikamentengabe ohne Arztanordnung ist zudem nicht erlaubt.",
            },
          ],
        },
      },
      {
        stepId: "praxis-05-s03",
        phase: "s1",
        stepType: "mc",
        bloomLevel: 3,
        kompetenzbereich: "KB-I",
        quellen: ["I Care Pflege S. 467"],
        track: "basis",
        modus: "challenge",
        lernziel: "ce02-le08-peg-pflege",
        themenblockPhase: "PRAXIS_DIALOG",
        tag: "pflege",
        contentC1: {
          title: "PEG-Einstichstellen-Pflege",
          body: "Waehlen Sie die korrekte Aussage zur PEG-Einstichstellenpflege.",
        },
        contentB1: {
          title: "Pflege um die Sonde",
          body: "Was ist richtig bei der Pflege um die Sonde am Bauch?",
        },
        question: {
          fragetext: "Welche Aussage zur PEG-Einstichstellenpflege ist korrekt?",
          optionen: [
            {
              text: "Halteplatte taeglich um 360 Grad drehen und 1 cm vor-/zurueckschieben, Einstichstelle mit NaCl 0,9% reinigen",
              isCorrect: true,
              explanation:
                "Korrekt! Die taegliche Rotation (360 Grad) und das leichte Vor-/Zurueckschieben verhindert ein Einwachsen (Buried-Bumper-Syndrom). Reinigung mit steriler NaCl 0,9% — KEIN Octenisept in den Stichkanal! (I Care Pflege S. 467)",
              explanationB1:
                "Richtig! Jeden Tag die Platte drehen (einmal ganz herum) und die Sonde ein bisschen rein und raus bewegen. Die Stelle mit Kochsalz-Loesung sauber machen.",
            },
            {
              text: "Einstichstelle mit Desinfektionsmittel (Octenisept) reinigen und luftdicht abkleben",
              isCorrect: false,
              explanation:
                "Octenisept darf NICHT in den Stichkanal gelangen — Gewebeschaeden! Die Einstichstelle soll ab dem 10. Tag offen bleiben (Luftkontakt foerdert Heilung).",
            },
            {
              text: "Halteplatte fest fixieren und nicht bewegen, um Dislokation zu vermeiden",
              isCorrect: false,
              explanation:
                "Genau das Gegenteil! Eine fixierte Platte ohne Bewegung fuehrt zum gefaehrlichen Buried-Bumper-Syndrom — die innere Halteplatte waechst in die Magenwand ein.",
            },
          ],
        },
      },
    ],
  },
];

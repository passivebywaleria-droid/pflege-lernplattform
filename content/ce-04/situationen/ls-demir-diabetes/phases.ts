// CE-04 Situation „Herr Demir" — 6 Beratungsphasen (wahrnehmen→…→dokumentieren)
// Wendet an: kultursensible-kommunikation, beratung, gespraechsfuehrung, kommunikationsmodelle
// Quellen: Kommunikation im Gesundheitswesen; I Care Pflege (ISAB, kultursensibel)

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) WAHRNEHMEN
export const CE04_SIT_DEMIR_WAHRNEHMEN: SituationsPhase = {
  phaseId: "ce04-demir-wahrnehmen",
  phase: "wahrnehmen",
  titel: "Im Zimmer ankommen",
  titelB1: "Du kommst ins Zimmer",
  kontext:
    "Du kommst zur Diabetes-Beratung. Herr Demir sitzt auf dem Bett, seine Tochter Elif auf dem Stuhl daneben. Als du dich vorstellst, nickt Herr Demir freundlich, schaut aber schnell zur Seite. Auf deine erste Frage antwortet Elif: 'Fragen Sie mich, ich erkläre ihm das dann.'",
  kontextB1:
    "Du kommst zur Diabetes-Beratung. Herr Demir sitzt auf dem Bett. Seine Tochter Elif sitzt daneben. Du stellst dich vor. Herr Demir nickt freundlich, schaut aber schnell weg. Auf deine erste Frage antwortet Elif: 'Fragen Sie mich, ich erkläre es ihm.'",
  kernSteps: [
    {
      stepId: "ce04-demir-wahr-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (kulturelle Unterschiede, selektive Interpretation)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce04-demir-wahrnehmen-nonverbal",
      tag: "pflege",
      contentC1: {
        title: "Was nimmst du wahr?",
        body: "Herr Demir schaut weg, lächelt höflich und lässt die Tochter antworten. Wie deutest du dieses Verhalten — fachlich und kultursensibel?",
        glossarBegriffe: ["selektive Interpretation", "Proxemik"],
      },
      contentB1: {
        title: "Was nimmst du wahr?",
        body: "Herr Demir schaut weg, lächelt höflich und lässt die Tochter antworten. Wie deutest du das — fachlich und kultursensibel?",
        glossarBegriffe: ["selektive Interpretation"],
      },
      question: {
        fragetext: "Wie ordnest du das Verhalten von Herrn Demir ein?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Er ist wohl nicht so interessiert — ich konzentriere mich auf die Tochter, die ja ohnehin antwortet.",
            isCorrect: false,
            explanation:
              "Vorschnell. Wegschauen kann Respekt, Verlegenheit oder Scham bedeuten — nicht Desinteresse. Eine einzelne Geste so zu deuten ist eine selektive Interpretation, die du gerade interkulturell vermeiden sollst. Und: Der Patient ist Herr Demir, nicht die Tochter.",
            explanationB1:
              "Falsch. Wegschauen kann Respekt oder Scham heißen — nicht Desinteresse. Ein einzelnes Zeichen darfst du nicht zu schnell deuten.",
          },
          {
            text: "Mehrdeutige Signale: Wegschauen und Lächeln können kulturell Respekt, Verlegenheit oder Scham heißen. Ich deute nichts vorschnell, sondern beziehe ihn selbst aktiv ein.",
            isCorrect: true,
            explanation:
              "Richtig. Nonverbale Zeichen sind kulturell unterschiedlich; keine selektive Interpretation. Wichtig ist, Herrn Demir selbst anzusprechen (nicht nur über die Tochter), um ihn als Person ernst zu nehmen.",
            explanationB1:
              "Richtig. Körpersprache ist in jeder Kultur anders. Deute nichts zu schnell. Sprich Herrn Demir selbst an — nicht nur die Tochter.",
          },
          {
            text: "Die Tochter ist die Ansprechpartnerin — ich führe die Beratung mit ihr, das spart Zeit.",
            isCorrect: false,
            explanation:
              "Nein. Der Patient ist Herr Demir — er hat ein Recht darauf, selbst informiert und einbezogen zu werden (Selbstbestimmung). Die Tochter als alleinige Mittlerin zu nehmen übergeht ihn und ist bei medizinischen Inhalten zudem unzuverlässig.",
            explanationB1:
              "Nein. Der Patient ist Herr Demir. Er hat das Recht, selbst informiert zu werden. Nur mit der Tochter zu reden übergeht ihn.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 2) EINSCHÄTZEN
export const CE04_SIT_DEMIR_EINSCHAETZEN: SituationsPhase = {
  phaseId: "ce04-demir-einschaetzen",
  phase: "einschaetzen",
  titel: "Sprache und Bedarf einschätzen",
  titelB1: "Sprache und Bedarf einschätzen",
  kontext:
    "Es wird klar: Herr Demir versteht alltägliches Deutsch, aber die medizinischen Inhalte (Diabetes, Medikamente, Werte) übersteigen sein Sprachniveau. Elif will gerne übersetzen — es geht heute auch um seine Ängste und um Körperliches.",
  kontextB1:
    "Du merkst: Herr Demir versteht einfaches Deutsch. Aber die medizinischen Themen (Diabetes, Medikamente, Werte) versteht er nicht gut. Elif will übersetzen. Es geht auch um Ängste und um den Körper.",
  kernSteps: [
    {
      stepId: "ce04-demir-eins-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (fremdsprachliche Herausforderungen, Dolmetscher)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce04-demir-sprachmittlung",
      tag: "pflege",
      contentC1: {
        title: "Wer übersetzt?",
        body: "Elif (28) möchte für ihren Vater übersetzen. Es geht um die Diagnose, um Ängste und um körperliche Themen. Wie entscheidest du dich?",
        glossarBegriffe: ["Dolmetscher/Sprachmittler"],
      },
      contentB1: {
        title: "Wer übersetzt?",
        body: "Elif möchte für ihren Vater übersetzen. Es geht um die Diagnose, um Ängste und um den Körper. Wie entscheidest du?",
        glossarBegriffe: ["Dolmetscher/Sprachmittler"],
      },
      question: {
        fragetext: "Wie gehst du mit der Sprachbarriere um?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Für ein wichtiges Aufklärungs- und Beratungsgespräch ziehe ich einen professionellen Dolmetscher (oder Kollegen mit Sprachkenntnissen) hinzu — die Tochter bleibt unterstützend dabei.",
            isCorrect: true,
            explanation:
              "Richtig. Bei Aufklärung, Diagnosen und Tabuthemen sollte professionell gedolmetscht werden. Angehörige (zumal das eigene Kind) werden mit belastenden Inhalten überfordert, und Fachliches/Intimes geht verloren oder wird gefiltert.",
            explanationB1:
              "Richtig. Bei wichtigen Themen holst du einen professionellen Dolmetscher. Angehörige werden überfordert, und Wichtiges geht verloren.",
          },
          {
            text: "Elif übersetzt alles — sie kennt ihren Vater am besten und es geht schneller.",
            isCorrect: false,
            explanation:
              "Problematisch. Die Tochter mit der Diagnose und den Ängsten ihres Vaters zu belasten ist nicht angemessen; bei Tabu-/Intimthemen filtert oder beschönigt sie womöglich. Für Wichtiges braucht es professionelle Sprachmittlung.",
            explanationB1:
              "Schwierig. Die Tochter wird mit den Sorgen ihres Vaters überfordert. Bei heiklen Themen übersetzt sie vielleicht nicht alles. Für Wichtiges brauchst du einen Profi.",
          },
          {
            text: "Ich spreche einfach lauter und langsamer Deutsch — dann wird er es schon verstehen.",
            isCorrect: false,
            explanation:
              "Lautstärke ersetzt keine Sprachkenntnis und kann sogar als unfreundlich/aggressiv wirken. Bei medizinischen Inhalten braucht es echte Sprachmittlung, ergänzt durch einfache Sprache und visuelle Hilfen.",
            explanationB1:
              "Lauter reden hilft nicht und kann unhöflich wirken. Bei medizinischen Themen brauchst du einen Dolmetscher, einfache Sprache und Bilder.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 3) INFORMIEREN
export const CE04_SIT_DEMIR_INFORMIEREN: SituationsPhase = {
  phaseId: "ce04-demir-informieren",
  phase: "informieren",
  titel: "Verständlich informieren",
  titelB1: "Verständlich informieren",
  kontext:
    "Über einen hinzugezogenen Telefon-Dolmetscher (alternativ eine Kollegin mit Türkischkenntnissen) erklärst du Herrn Demir, was Diabetes bedeutet. Er fragt leise: 'Zucker… ist das schlimm?'",
  kontextB1:
    "Über einen Telefon-Dolmetscher (oder eine Kollegin mit Türkisch) erklärst du, was Diabetes ist. Herr Demir fragt leise: 'Zucker… ist das schlimm?'",
  kernSteps: [
    {
      stepId: "ce04-demir-info-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.2",
      quellen: ["I Care Pflege, Kap. 22 (Informieren — patientengerecht)", "Kommunikation im Gesundheitswesen, Kap. 2 (patientengerechte Sprache)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce04-demir-informieren-verstaendlich",
      tag: "pflege",
      contentC1: {
        title: "Wie erklärst du Diabetes?",
        body: "Herr Demir fragt: 'Zucker… ist das schlimm?' Wie informierst du ihn fachlich korrekt UND verständlich?",
        glossarBegriffe: ["patientengerechte Sprache", "ISAB (Informieren/Schulen/Anleiten/Beraten)"],
      },
      contentB1: {
        title: "Wie erklärst du Diabetes?",
        body: "Herr Demir fragt: 'Zucker… ist das schlimm?' Wie erklärst du es richtig UND verständlich?",
        glossarBegriffe: ["patientengerechte Sprache"],
      },
      question: {
        fragetext: "Welche Information ist patientengerecht?",
        mcVariant: "standard",
        optionen: [
          {
            text: "'Bei Diabetes ist zu viel Zucker im Blut. Mit Tabletten, Bewegung und gutem Essen können Sie gut damit leben. Wir gehen das zusammen Schritt für Schritt an.' — in einfachen Sätzen, über den Dolmetscher.",
            isCorrect: true,
            explanation:
              "Richtig. Patientengerechte Sprache: einfache Sätze, kein Fachjargon, der Sache angemessen und ermutigend. Du nimmst die Sorge ('ist das schlimm?') ernst und gibst Orientierung.",
            explanationB1:
              "Richtig. Einfache Sätze, keine Fachwörter, ehrlich und ermutigend. Du nimmst seine Sorge ernst.",
          },
          {
            text: "'Sie haben einen Diabetes mellitus Typ 2 mit einem pathologischen Nüchternblutzucker; ohne suffiziente Stoffwechseleinstellung drohen mikro- und makrovaskuläre Folgekomplikationen.'",
            isCorrect: false,
            explanation:
              "Fachjargon zum 'Glänzen' — für Herrn Demir unverständlich und angsteinflößend. Patientengerechte Kommunikation passt sich dem Sprachniveau des Patienten an, gerade bei Sprachbarriere.",
            explanationB1:
              "Zu viele Fachwörter — unverständlich und macht Angst. Sprich einfach, besonders bei Sprachbarriere.",
          },
          {
            text: "'Das ist nicht so wild, machen Sie sich keine Gedanken.' — um ihn nicht zu beunruhigen.",
            isCorrect: false,
            explanation:
              "Verharmlosung ist keine Information. Sie nimmt Herrn Demir nicht ernst und gefährdet die Therapietreue. Ehrlich, aber ermutigend informieren ist der richtige Weg.",
            explanationB1:
              "Verharmlosen ist keine echte Information. Sei ehrlich, aber ermutigend.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 7,
};

// ═══════════════════════════════════════════ 4) BERATEN
export const CE04_SIT_DEMIR_BERATEN: SituationsPhase = {
  phaseId: "ce04-demir-beraten",
  phase: "beraten",
  titel: "Das Beratungsgespräch",
  titelB1: "Das Beratungsgespräch",
  kontext:
    "Für das persönliche Gespräch habt ihr einen geschützten Rahmen geschaffen: Die Sprachmittlung übernimmt der Dolmetscher, Elif wartet auf eigenen Wunsch kurz draußen — so kann ihr Vater offen über Belastendes sprechen, ohne sie zu belasten. Du möchtest mit Herrn Demir besprechen, wie er den Alltag mit Diabetes gestaltet. Er wehrt leise ab: 'Es geht schon. Machen Sie sich keine Mühe. Meine Tochter sagt mir das schon zu Hause.'",
  kontextB1:
    "Für das persönliche Gespräch habt ihr einen ruhigen, geschützten Rahmen: Der Dolmetscher übersetzt, Elif wartet kurz draußen — so kann ihr Vater offen reden. Du willst mit Herrn Demir über den Alltag mit Diabetes sprechen. Er wehrt leise ab: 'Es geht schon. Machen Sie sich keine Mühe. Meine Tochter sagt mir das zu Hause.'",
  kernSteps: [
    {
      stepId: "ce04-demir-ber-01",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 1/2 (personenzentriert/Rogers, indirekte Kommunikation, aktives Zuhören)"],
      track: "basis",
      modus: "story",
      lernziel: "ce04-demir-beraten-personenzentriert",
      tag: "pflege",
      contentC1: {
        title: "„Es geht schon, machen Sie sich keine Mühe.“",
        body: "Herr Demir lächelt und wehrt ab. In einer indirekten Kommunikation ist 'Es geht schon' nicht unbedingt ein echtes Nein — dahinter können Scham, Angst oder das Gefühl stecken, zur Last zu fallen.\n\n> \"Es geht schon. Machen Sie sich keine Mühe.\"",
        glossarBegriffe: ["indirekte Kommunikation", "personenzentrierte Gesprächsführung", "aktives Zuhören"],
      },
      contentB1: {
        title: "„Es geht schon, machen Sie sich keine Mühe.“",
        body: "Herr Demir lächelt und wehrt ab. Bei indirekter Kommunikation ist 'Es geht schon' oft kein echtes Nein — dahinter steckt vielleicht Scham, Angst oder das Gefühl, zur Last zu fallen.\n\n> \"Es geht schon. Machen Sie sich keine Mühe.\"",
        glossarBegriffe: ["indirekte Kommunikation", "aktives Zuhören"],
      },
      question: {
        fragetext: "Wie reagierst du?",
        patientName: "Herr Demir",
        dialogPhases: [
          {
            context: "Herr Demir wehrt höflich ab, lächelt, schaut weg.\n\n\"Es geht schon. Machen Sie sich keine Mühe.\"",
            contextB1: "Herr Demir wehrt höflich ab, lächelt, schaut weg.\n\n\"Es geht schon. Machen Sie sich keine Mühe.\"",
            speaker: "Du",
            options: [
              {
                text: "\"Gut, dann lassen wir das — Ihre Tochter macht das ja zu Hause.\"",
                textB1: "\"Gut, dann lassen wir das — Ihre Tochter macht das zu Hause.\"",
                patientResponse: "Herr Demir nickt erleichtert, wirkt aber gleichzeitig allein gelassen. Das Gespräch ist beendet, seine Fragen bleiben offen.",
                patientResponseB1: "Herr Demir nickt erleichtert, wirkt aber allein gelassen. Das Gespräch ist vorbei, seine Fragen bleiben offen.",
                score: 0,
                feedback: "Du hast das höfliche 'Es geht schon' als echtes Nein genommen. Bei indirekter Kommunikation ist das ein Trugschluss: Du lässt einen verunsicherten Menschen mit einer neuen Diagnose allein. Seine Selbstständigkeit (und die Therapietreue) leidet.",
                feedbackB1: "Du hast das höfliche 'Es geht schon' als echtes Nein verstanden. Aber bei indirekter Kommunikation steckt oft mehr dahinter. Du lässt ihn mit der neuen Diagnose allein. Beim nächsten Mal: frag behutsam nach, statt sofort aufzugeben.",
              },
              {
                text: "\"Das ist wichtig für Ihre Gesundheit, das müssen Sie lernen.\"",
                textB1: "\"Das ist wichtig für Ihre Gesundheit, das müssen Sie lernen.\"",
                patientResponse: "Herr Demir zieht sich weiter zurück. \"Ja, ja.\" Er stimmt zu, aber nur, um das unangenehme Gespräch zu beenden.",
                patientResponseB1: "Herr Demir zieht sich zurück. \"Ja, ja.\" Er stimmt nur zu, um das Gespräch zu beenden.",
                score: 1,
                feedback: "Gut gemeint, aber Druck ('müssen') übergeht seine Selbstbestimmung und erzeugt bei einem ohnehin verunsicherten, schambesetzten Menschen Widerstand oder Schein-Zustimmung (er sagt 'Ja', meint aber 'Nein'). Personenzentriert heißt: erst verstehen, was ihn zurückhält, nicht überreden — die Entscheidung bleibt seine.",
                feedbackB1: "Gut gemeint, aber Druck ('müssen') übergeht sein Recht, selbst zu entscheiden. Er macht Widerstand oder stimmt nur zum Schein zu. Besser: erst verstehen, was ihn zurückhält.",
              },
              {
                text: "\"Ich merke, das ist gerade viel für Sie. Sagen Sie mir: Was macht Ihnen am meisten Sorgen?\"",
                textB1: "\"Ich sehe, das ist gerade viel für Sie. Sagen Sie mir: Was macht Ihnen am meisten Sorgen?\"",
                patientResponse: "Herr Demir hält inne, schaut dich zum ersten Mal an. Leise: \"Ich will meiner Familie nicht zur Last fallen. Und… ich habe Angst vor den Spritzen.\"",
                patientResponseB1: "Herr Demir hält inne und schaut dich zum ersten Mal an. Leise: \"Ich will meiner Familie nicht zur Last fallen. Und ich habe Angst vor den Spritzen.\"",
                score: 3,
                feedback: "Ideal. Du sprichst das Gefühl an (Verbalisieren von Emotionen), nimmst Druck heraus und stellst eine offene Frage — personenzentriert nach Rogers. Damit öffnet sich Herr Demir und nennt das eigentliche Thema (Scham, Angst). Genau hier beginnt echte Beratung.",
                feedbackB1: "Perfekt. Du sprichst sein Gefühl an und stellst eine offene Frage — personenzentriert (Rogers). So öffnet sich Herr Demir und sagt, was ihn wirklich bewegt (Scham, Angst). Hier beginnt echte Beratung.",
              },
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 5) EVALUIEREN
export const CE04_SIT_DEMIR_EVALUIEREN: SituationsPhase = {
  phaseId: "ce04-demir-evaluieren",
  phase: "evaluieren",
  titel: "War die Beratung erfolgreich?",
  titelB1: "War die Beratung gut?",
  kontext:
    "Herr Demir hat seine Ängste benannt (Spritzen-Angst, Sorge zur Last zu fallen). Ihr habt einen ersten kleinen Schritt vereinbart. Wie bewertest du den Beratungserfolg?",
  kontextB1:
    "Herr Demir hat seine Ängste gesagt (Angst vor Spritzen, Sorge zur Last zu fallen). Ihr habt einen kleinen ersten Schritt vereinbart. War die Beratung gut?",
  kernSteps: [
    {
      stepId: "ce04-demir-eval-01",
      phase: 5,
      stepType: "mc",
      bloomLevel: 5,
      kompetenzbereich: "II.2",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (personenzentriert)", "I Care Pflege, Kap. 22 (Beratung — Selbstständigkeit/Mündigkeit)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce04-demir-evaluieren",
      tag: "pflege",
      contentC1: {
        title: "Woran misst du den Erfolg?",
        body: "Welches Kriterium zeigt am besten, dass die Beratung wirksam war?",
        glossarBegriffe: ["Selbstbestimmung", "non-direktive Beratung"],
      },
      contentB1: {
        title: "Woran misst du den Erfolg?",
        body: "Welches Kriterium zeigt am besten, dass die Beratung gut war?",
        glossarBegriffe: ["Selbstbestimmung"],
      },
      question: {
        fragetext: "Was ist das beste Zeichen für eine wirksame Beratung?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Herr Demir hat sich geöffnet, seine eigentlichen Sorgen genannt und einen für IHN machbaren nächsten Schritt mitentschieden.",
            isCorrect: true,
            explanation:
              "Richtig. Wirksame (personenzentrierte) Beratung stärkt Selbstständigkeit und Mündigkeit: Der Mensch bringt sein Anliegen ein und entscheidet mit. Das Vertrauen und der eigene Schritt sind die Basis für Therapietreue.",
            explanationB1:
              "Richtig. Gute Beratung stärkt die Selbstständigkeit: Er sagt seine Sorgen und entscheidet selbst mit. Das schafft Vertrauen.",
          },
          {
            text: "Herr Demir hat zu allem 'Ja' gesagt, was du vorgeschlagen hast.",
            isCorrect: false,
            explanation:
              "Ein 'Ja' zu allem — gerade bei indirekter Kommunikation — kann reine Höflichkeit oder Schein-Zustimmung sein, nicht Verständnis oder echte Entscheidung. Das ist kein Erfolgskriterium.",
            explanationB1:
              "Ein 'Ja' zu allem kann nur Höflichkeit sein, nicht echtes Verstehen. Das ist kein gutes Zeichen.",
          },
          {
            text: "Du hast alle geplanten Inhalte in der vorgesehenen Zeit durchgesprochen.",
            isCorrect: false,
            explanation:
              "Vollständigkeit und Tempo sagen nichts über Wirksamkeit. Eine Beratung, die am Menschen vorbeigeht, bleibt folgenlos — auch wenn 'alles gesagt' wurde.",
            explanationB1:
              "Alles gesagt zu haben heißt nicht, dass es angekommen ist. Tempo ist kein Erfolg.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 6) DOKUMENTIEREN
export const CE04_SIT_DEMIR_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ce04-demir-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren und reflektieren",
  titelB1: "Dokumentieren und nachdenken",
  kontext:
    "Du dokumentierst das Beratungsgespräch und denkst über deine eigene Rolle nach.",
  kontextB1:
    "Du dokumentierst das Gespräch und denkst über deine Rolle nach.",
  kernSteps: [
    {
      stepId: "ce04-demir-doku-01",
      phase: 6,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (interkulturelle Kompetenz)", "I Care Pflege (kultursensibel; Kulturgebundenheit)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce04-demir-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Im Gespräch mit Herrn Demir trafen mehrere Dinge zusammen: eine Sprachbarriere, indirekte Kommunikation, Scham — und vielleicht deine eigene Erwartung, wie ein Gespräch 'normalerweise' läuft. Reflektiere, was du daraus für die nächste kultursensible Beratung mitnimmst.",
        glossarBegriffe: ["Kulturgebundenheit", "kulturelle Kompetenz"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Im Gespräch mit Herrn Demir kam vieles zusammen: Sprachbarriere, indirekte Kommunikation, Scham — und vielleicht deine eigene Erwartung, wie ein Gespräch 'normal' läuft. Was nimmst du für die nächste kultursensible Beratung mit?",
        glossarBegriffe: ["kulturelle Kompetenz"],
      },
      question: {
        fragetext: "Reflektiere das Gespräch mit Herrn Demir.",
        reflection: {
          prompt:
            "Schreibe 4-6 Sätze: 1) Was hat den Wendepunkt im Gespräch gebracht (von 'Es geht schon' zu echtem Austausch)? 2) Wo hättest du fast vorschnell interpretiert (Wegschauen, 'Es geht schon')? 3) Wo hast du gemerkt, dass deine EIGENE Erwartung kulturell geprägt ist? 4) Was nimmst du für die nächste Beratung mit Sprachbarriere mit?",
          placeholder:
            "Der Wendepunkt war … Fast vorschnell gedeutet hätte ich … Meine eigene Prägung zeigte sich … Mitnehmen würde ich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip. Erkennt der Schüler den Wendepunkt (Gefühl ansprechen + offene Frage = personenzentriert, statt das höfliche 'Nein' wörtlich zu nehmen)? Reflektiert er die Gefahr selektiver Interpretation (Wegschauen ≠ Desinteresse; indirektes 'Es geht schon' ≠ echtes Nein) UND die eigene Kulturgebundenheit? Zieht er eine konkrete Konsequenz für die nächste Beratung (professionelle Sprachmittlung, behutsames Nachfragen, Selbstbestimmung wahren)? Lob für eine differenzierte Bloom-5-Reflexion. Niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

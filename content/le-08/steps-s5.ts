// Session 5: "Wenn Essen zur Gewissensfrage wird" — LE 08 Menschen aller Altersstufen bei der Ernährung unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB8: Ernährung bei Demenz und im Alter, Ethik + TB9: Flüssigkeitsbilanz, Kostformen
// Leitfall: Walter Bergmann (84, Demenz, PEG), Elisabeth Kramer (42, Magensonde)
// Bloom: B2-B5, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S5: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE — Tutorial-Cutscene: Herr Bergmann am Tisch
  // =============================================================
  {
    stepId: "le08-s5-tb8-01",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 455-456"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Wenn Essen zur Gewissensfrage wird",
      body: "Pflegeheim 'Sonnenschein'. Herr Bergmann (84, mittelschwere Demenz) sitzt am Mittagstisch. Vor ihm steht Kartoffelpüree mit Soße. Er schiebt den Teller weg und steht auf. Seine Frau Helga sitzt daneben und weint leise: 'Er hat doch immer so gern Apfelkuchen gegessen.'",
      fallbezug: "Herr Bergmann (84, Demenz, PEG seit 4 Wochen) — Essverhalten bei Demenz, Angehörige in Not.",
      glossarBegriffe: ["Fingerfood"],
    },
    contentB1: {
      title: "Herr Bergmann will nicht essen",
      body: "Pflegeheim. Herr Bergmann (84 Jahre, Demenz) sitzt am Tisch. Er schiebt das Essen weg und steht auf. Seine Frau Helga weint: 'Er hat doch immer gern Kuchen gegessen.'",
      fallbezug: "Herr Bergmann hat Demenz. Er isst nicht mehr richtig. Seine Frau ist traurig.",
    },
    question: {
      fragetext: "Was machst du zuerst?",
      patientName: "Pflegekraft",
      dialogPhases: [
        {
          context: "Herr Bergmann steht auf und läuft umher. Das Essen wird kalt. Frau Bergmann schaut dich hilfesuchend an.",
          contextB1: "Herr Bergmann steht auf. Das Essen wird kalt. Frau Bergmann schaut dich an.",
          speaker: "Frau Bergmann",
          options: [
            {
              text: "Ich kümmere mich erst um Frau Bergmann und spreche mit ihr. Dann schaue ich, wie ich Herrn Bergmann zum Essen motivieren kann — vielleicht mit Fingerfood zum Mitnehmen.",
              textB1: "Ich spreche zuerst mit Frau Bergmann. Dann gebe ich Herrn Bergmann kleine Häppchen zum Mitnehmen.",
              patientResponse: "Danke, dass Sie sich Zeit nehmen. Können Sie denn überhaupt etwas tun?",
              patientResponseB1: "Danke. Können Sie ihm helfen?",
              score: 3,
              feedback: "Sehr gut! Du priorisierst die emotionale Situation (Frau Bergmann) und hast gleichzeitig eine pflegerische Lösung (Fingerfood). Bei Demenz ist Eat-by-walking oft wirksamer als am Tisch sitzen.",
              feedbackB1: "Sehr gut! Du kümmerst dich um die Ehefrau UND hast eine Idee für Herrn Bergmann: Kleine Häppchen, die er im Gehen essen kann.",
            },
            {
              text: "Ich setze Herrn Bergmann wieder an den Tisch und sage ihm, er soll essen.",
              textB1: "Ich setze ihn wieder hin.",
              patientResponse: "Er steht sofort wieder auf und wird unruhig.",
              patientResponseB1: "Er steht sofort wieder auf.",
              score: 1,
              feedback: "Bei mittelschwerer Demenz ist Zwang am Tisch kontraproduktiv. Herr Bergmann versteht möglicherweise die Situation nicht mehr. Unruhe am Tisch ist ein typisches Zeichen — Eat-by-walking wäre besser.",
              feedbackB1: "Zurücksetzen hilft nicht. Herr Bergmann hat Demenz. Er versteht nicht, warum er sitzen soll. Besser: Kleine Häppchen zum Mitnehmen.",
            },
            {
              text: "Ich rufe den Arzt an — vielleicht braucht er ein Medikament gegen die Unruhe.",
              textB1: "Ich rufe den Arzt. Vielleicht braucht er Medizin.",
              patientResponse: "Ein Beruhigungsmittel? Mein Mann soll doch nicht ruhiggestellt werden!",
              patientResponseB1: "Nein! Nicht ruhigstellen!",
              score: 1,
              feedback: "Medikamente gegen Unruhe beim Essen sind keine angemessene Lösung. Erst pflegerische Maßnahmen ausschöpfen: Fingerfood, Eat-by-walking, ruhige Umgebung, bekannte Gerichte, Routinen.",
              feedbackB1: "Medizin ist hier nicht die Lösung. Erst pflegerische Ideen versuchen: Kleine Häppchen, Essen im Gehen, Ruhe.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ERKLÄRUNG — Ernährungsprobleme bei Demenz (Checkliste)
  // =============================================================
  {
    stepId: "le08-s5-tb8-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "checklist",
    contentC1: {
      title: "Ernährungsprobleme bei Demenz",
      body: "Menschen mit Demenz haben besondere Schwierigkeiten beim Essen:\n\n❌ **Nahrung wird nicht als Nahrung erkannt** — der Patient weiß nicht, was der Teller vor ihm bedeutet\n❌ **Vergisst zu essen** — kommt nicht auf die Idee, etwas zu essen, auch wenn er Hunger hat\n❌ **Unruhe am Tisch** — kann nicht stillsitzen, steht auf, läuft umher\n❌ **Motorische Probleme** — kann Besteck nicht mehr benutzen\n❌ **Schluckstörungen** — stille Aspiration! Kein Hustenreflex, aber Nahrung gelangt in die Lunge\n\n**Wichtig:** Mahlzeiten geben dem Tag Struktur und haben eine hohe soziale Bedeutung! Gemeinsames Essen ist mehr als Nahrungsaufnahme — es ist Lebensqualität.",
      glossarBegriffe: ["Altersanorexie", "Fingerfood"],
    },
    contentB1: {
      title: "Warum Menschen mit Demenz schlecht essen",
      body: "Menschen mit Demenz haben Probleme beim Essen:\n\n❌ **Erkennen das Essen nicht** — sie wissen nicht, was auf dem Teller ist\n❌ **Vergessen zu essen** — sie denken nicht daran\n❌ **Können nicht still sitzen** — sie stehen auf und laufen herum\n❌ **Können kein Besteck benutzen** — die Hände machen nicht mehr mit\n❌ **Können schlecht schlucken** — Essen kommt in die Lunge, aber man sieht es nicht!\n\n**Wichtig:** Gemeinsam essen gibt dem Tag Ordnung. Es macht den Tag schöner.",
    },
  },

  // =============================================================
  // Step 3: ERKLÄRUNG — Reveal: 5 Maßnahmen bei Demenz
  // =============================================================
  {
    stepId: "le08-s5-tb8-03",
    phase: "s5",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "5 Maßnahmen bei Demenz-Ernährung",
      body: "Entdecke, was du tun kannst, wenn ein Mensch mit Demenz nicht essen will.",
    },
    contentB1: {
      title: "5 Ideen wenn ein Demenz-Patient nicht isst",
      body: "Entdecke 5 Dinge, die du tun kannst.",
    },
    question: {
      fragetext: "Tippe auf die Karten und entdecke die Maßnahmen!",
      reveal: {
        instruction: "Decke die 5 Maßnahmen auf.",
        cards: [
          {
            id: "r1",
            label: "Fingerfood",
            content: "Kleine Häppchen, die man mit den Fingern greifen kann. Brot, Obststücke, Käsewürfel, Frikadellen. Besonders gut für unruhige Patienten, die im Gehen essen (Eat-by-walking).",
            contentB1: "Kleine Stücke, die man mit den Fingern nehmen kann: Brot, Obst, Käse. Gut für Patienten, die herumlaufen und im Gehen essen.",
          },
          {
            id: "r2",
            label: "Kontrastreiche Teller",
            content: "Farbige Teller (rot, blau) helfen, das Essen sichtbar zu machen. Weißes Essen auf weißem Teller wird von Demenz-Patienten oft nicht erkannt!",
            contentB1: "Bunte Teller helfen! Weißes Essen auf einem weißen Teller — das sieht der Patient nicht. Besser: rote oder blaue Teller.",
          },
          {
            id: "r3",
            label: "Bekannte Gerichte",
            content: "Gerichte aus der Kindheit oder Lieblingsessen wecken Erinnerungen und stimulieren den Appetit. Fragen Sie die Angehörigen, was der Patient früher gern gegessen hat!",
            contentB1: "Gerichte von früher helfen. Frage die Familie: Was hat er immer gern gegessen? Lieblingsessen weckt Erinnerungen.",
          },
          {
            id: "r4",
            label: "Ruhige Umgebung",
            content: "Kein Fernseher, keine Hektik, keine Visite beim Essen. Ruhige Musik kann beruhigend wirken. Feste Essenszeiten geben Struktur.",
            contentB1: "Kein Lärm beim Essen. Kein Fernseher. Ruhige Musik hilft. Immer zur gleichen Zeit essen.",
          },
          {
            id: "r5",
            label: "Eat-by-walking",
            content: "Manche Demenz-Patienten können nicht am Tisch sitzen. Lösung: Fingerfood an verschiedenen Stationen auf dem Flur bereitstellen. Der Patient nimmt im Vorbeigehen etwas mit.",
            contentB1: "Manche Patienten können nicht sitzen. Lösung: Kleine Häppchen auf dem Flur hinstellen. Der Patient nimmt sich etwas im Vorbeigehen.",
          },
        ],
        revealMode: "free",
      },
    },
  },

  // =============================================================
  // Step 4: CHECKPOINT — MC: Fingerfood (Brilliant-Prinzip)
  // =============================================================
  {
    stepId: "le08-s5-tb8-04",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Herr Bergmann steht auf und geht",
      body: "Herr Bergmann steht während des Mittagessens auf und läuft durch den Flur.",
    },
    contentB1: {
      title: "Herr Bergmann läuft herum",
      body: "Herr Bergmann steht beim Essen auf und läuft durch den Flur.",
    },
    question: {
      fragetext: "Was ist die beste Maßnahme?",
      mcVariant: "anticipation",
      optionen: [
        {
          text: "Fingerfood zum Mitnehmen anbieten (Eat-by-walking)",
          isCorrect: true,
          explanation: "Richtig! Bei unruhigen Demenz-Patienten, die nicht am Tisch sitzen können, ist Fingerfood die beste Lösung. Brot, Obststücke, Käsewürfel — alles, was man im Gehen essen kann.",
          explanationB1: "Richtig! Wenn ein Patient mit Demenz nicht sitzen kann, gib ihm kleine Häppchen zum Mitnehmen. Das nennt man Eat-by-walking.",
        },
        {
          text: "Zurück an den Tisch setzen und ermahnen",
          isCorrect: false,
          explanation: "Zwang am Tisch ist kontraproduktiv bei Demenz. Der Patient versteht möglicherweise die Situation nicht mehr. Unruhe verstärkt sich durch Druck. Fingerfood ist die pflegerische Lösung.",
          explanationB1: "Nein! Zurücksetzen und schimpfen hilft nicht. Der Patient versteht die Situation nicht. Besser: Kleine Häppchen zum Mitnehmen.",
        },
        {
          text: "Essen weglassen — er hat keinen Hunger",
          isCorrect: false,
          explanation: "Falsch! Dass Herr Bergmann aufsteht, bedeutet nicht, dass er keinen Hunger hat. Bei Demenz kann das Erkennen von Essen gestört sein. Es braucht kreative Lösungen, kein Aufgeben.",
          explanationB1: "Nein! Aufstehen heißt nicht 'kein Hunger'. Bei Demenz erkennt der Patient das Essen manchmal nicht. Man muss kreativ sein.",
        },
        {
          text: "Beruhigungsmittel geben lassen",
          isCorrect: false,
          explanation: "Medikamente zur Sedierung sind keine Lösung für Essensunruhe! Erst alle pflegerischen Maßnahmen ausschöpfen. Sedierung schränkt die Lebensqualität ein und kann Schluckstörungen verschlimmern.",
          explanationB1: "Nein! Medizin zum Beruhigen ist falsch. Erst pflegerische Ideen versuchen. Beruhigungsmittel können das Schlucken noch schwerer machen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 5: ANDERS ERKLÄRT — Flipcards: Problem → Lösung (nur B/C)
  // =============================================================
  {
    stepId: "le08-s5-tb8-05",
    phase: "s5",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "pflege",
    contentC1: {
      title: "Problem → Lösung bei Demenz-Ernährung",
      body: "Drehe die Karten: Vorne steht das Problem, hinten die Lösung.",
    },
    contentB1: {
      title: "Problem → Lösung",
      body: "Drehe die Karten! Vorne: das Problem. Hinten: die Lösung.",
    },
    question: {
      fragetext: "Finde die Lösung zu jedem Problem!",
      flipcard: {
        instruction: "Tippe auf eine Karte, um die Lösung zu sehen.",
        cards: [
          {
            front: "Patient erkennt das Essen nicht",
            back: "Farbige Teller verwenden (Kontrast!), bekannte Gerichte anbieten, beim Anreichen zeigen und benennen: 'Das ist Kartoffelpüree.'",
            backB1: "Bunte Teller benutzen. Essen zeigen und sagen was es ist: 'Das sind Kartoffeln.'",
          },
          {
            front: "Patient vergisst zu essen",
            back: "Feste Essenszeiten einhalten (Struktur!), regelmäßig erinnern, Essen sichtbar hinstellen, Gerüche nutzen (frischer Kaffee, frisches Brot).",
            backB1: "Immer zur gleichen Zeit essen. Oft erinnern. Das Essen so hinstellen, dass der Patient es sieht und riecht.",
          },
          {
            front: "Patient ist unruhig am Tisch",
            back: "Eat-by-walking: Fingerfood an Stationen im Flur. Nicht zwingen am Tisch zu sitzen. Kurze Essenszeiten, mehrere kleine Mahlzeiten.",
            backB1: "Fingerfood im Flur hinstellen. Nicht zum Sitzen zwingen. Lieber viele kleine Portionen.",
          },
          {
            front: "Patient hat Schluckstörungen",
            back: "Andickungsmittel verwenden, passierte Kost, Logopädin einbeziehen (F.O.T.T.), CAVE: Stille Aspiration möglich (kein Husten, aber Nahrung in der Lunge)!",
            backB1: "Getränke andicken. Essen pürieren. Logopädin fragen. Achtung: Verschlucken ohne Husten möglich!",
          },
        ],
        shuffled: false,
      },
    },
  },

  // =============================================================
  // Step 6: ERKLÄRUNG — PEG bei Demenz: Ethisches Dilemma (Pro/Contra)
  // =============================================================
  {
    stepId: "le08-s5-tb8-06",
    phase: "s5",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179; DNQP 2017a"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "procontra",
    contentC1: {
      title: "PEG bei fortgeschrittener Demenz: Pro und Contra",
      body: "**Das ethische Dilemma:** Soll bei einem Menschen mit fortgeschrittener Demenz eine PEG-Sonde gelegt werden?\n\n**PRO PEG:**\n- Angehörige wollen nicht, dass der Patient 'verhungert'\n- Sicherstellung der Nährstoffzufuhr\n- Entlastung des Pflegeteams beim Anreichen\n\n**CONTRA PEG:**\n- Cochrane Review: PEG verlängert bei fortgeschrittener Demenz NICHT die Lebenszeit\n- PEG verbessert NICHT die Lebensqualität\n- Komplikationen: Aspiration (auch bei PEG!), Infektion, Unruhe → Patient zieht an der Sonde\n- Der Patient hat möglicherweise den Wunsch geäußert, keine Sonden zu wollen\n\n**Die Evidenz ist eindeutig:** Bei fortgeschrittener Demenz bringt eine PEG keinen nachweisbaren Nutzen. Trotzdem ist es eine der häufigsten ethischen Fragen in der Pflege.\n\nDie Frage ist nicht 'PEG ja oder nein?' — sondern: 'Was hätte der Patient gewollt?'",
      glossarBegriffe: ["PEG"],
    },
    contentB1: {
      title: "PEG bei Demenz: Dafür oder dagegen?",
      body: "**Das Problem:** Soll ein Mensch mit schwerer Demenz eine Sonde in den Magen bekommen?\n\n**Dafür:**\n- Die Familie will nicht, dass er 'verhungert'\n- Er bekommt genug Nährstoffe\n\n**Dagegen:**\n- Studien zeigen: Die Sonde hilft NICHT bei schwerer Demenz\n- Der Patient lebt nicht länger\n- Es gibt Probleme: Infektion, der Patient zieht an der Sonde\n- Vielleicht wollte der Patient keine Sonde\n\n**Wichtig:** Die Sonde hilft nicht bei schwerer Demenz. Das zeigen Studien. Aber die Familie hat Angst. Das ist eine schwierige Situation.",
    },
  },

  // =============================================================
  // Step 7: ANWENDUNG — Branching: Angehörigen-Gespräch PEG-Ethik
  // =============================================================
  {
    stepId: "le08-s5-tb8-07",
    phase: "s5",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 179; DNQP 2017a"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Frau Bergmanns Forderung",
      body: "Frau Bergmann kommt zum Pflegeteam: 'Mein Mann darf nicht verhungern! Legen Sie eine Sonde!'",
      fallbezug: "Ethisches Dilemma: Angehörigenwunsch vs. Evidenzlage bei PEG und Demenz.",
    },
    contentB1: {
      title: "Frau Bergmann will eine Sonde",
      body: "Frau Bergmann sagt: 'Mein Mann muss eine Sonde bekommen! Er darf nicht verhungern!'",
      fallbezug: "Die Ehefrau will eine Sonde. Aber die Forschung sagt: Das hilft nicht bei schwerer Demenz.",
    },
    question: {
      fragetext: "Was sagst du zu Frau Bergmann?",
      branching: {
        situation: "Frau Bergmann steht weinend vor dir. Sie fordert, dass eine PEG-Sonde gelegt wird.",
        situationB1: "Frau Bergmann weint. Sie will eine Sonde für ihren Mann.",
        options: [
          {
            text: "Ich verstehe Ihre Sorge, Frau Bergmann. Es zeigt, wie sehr Sie Ihren Mann lieben. Lassen Sie uns gemeinsam die Möglichkeiten besprechen — was medizinisch sinnvoll ist und was Ihr Mann gewollt hätte.",
            textB1: "Ich verstehe Ihre Sorge. Sie lieben Ihren Mann. Lassen Sie uns zusammen überlegen, was am besten ist.",
            outcome: "Frau Bergmann beruhigt sich etwas: 'Er hat immer gesagt, er will keine Schläuche, wenn es soweit ist. Aber jetzt... kann ich denn einfach zusehen?' Du bietest an, gemeinsam mit dem Arzt und der Logopädin zu sprechen.",
            outcomeB1: "Frau Bergmann wird ruhiger: 'Er hat gesagt, er will keine Schläuche. Aber kann ich einfach zusehen?' Du schlägst vor, mit dem Arzt zu sprechen.",
            score: 3,
          },
          {
            text: "Das ist verboten. Die Studien zeigen, dass eine PEG bei Demenz nichts bringt.",
            textB1: "Das geht nicht. Studien sagen: PEG hilft nicht bei Demenz.",
            outcome: "Frau Bergmann wird wütend: 'Soll er etwa verhungern?! Sie haben kein Herz!' Das Gespräch ist gescheitert. Sachlich korrekt, aber empathielos.",
            outcomeB1: "Frau Bergmann wird wütend: 'Soll er verhungern?!' Sie geht. Das Gespräch ist gescheitert.",
            score: 1,
          },
          {
            text: "Der Arzt entscheidet das. Ich sage ihm Bescheid.",
            textB1: "Das muss der Arzt entscheiden. Ich sage ihm Bescheid.",
            outcome: "Du schiebst die Verantwortung ab. Frau Bergmann fühlt sich nicht gehört. Als Pflegekraft hast du eine eigene Stimme in der ethischen Fallbesprechung!",
            outcomeB1: "Du gibst die Verantwortung ab. Frau Bergmann fühlt sich allein. Du darfst auch mitreden!",
            score: 1,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 8: ERKLÄRUNG — Rechtliche Entscheidungskette (stepbystep)
  // =============================================================
  {
    stepId: "le08-s5-tb8-08",
    phase: "s5",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179; § 1901a BGB"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "stepbystep",
    contentC1: {
      title: "Wer entscheidet über die PEG?",
      body: "**Schritt 1:** Ist der Patient einwilligungsfähig?\n→ Ja: Der Patient entscheidet selbst. Punkt.\n\n**Schritt 2:** Patient ist NICHT einwilligungsfähig?\n→ Gibt es eine **Patientenverfügung** (§ 1901a BGB)? Wenn ja: Diese gilt!\n\n**Schritt 3:** Keine Patientenverfügung vorhanden?\n→ Hat der Patient einen **Betreuer oder Bevollmächtigten**? Dieser entscheidet nach dem **mutmaßlichen Willen** des Patienten.\n\n**Schritt 4:** Kein Betreuer bestellt?\n→ Das **Betreuungsgericht** wird eingeschaltet.\n\n**Bei Demenz und PEG:** Ethische Fallbesprechung im interdisziplinären Team: Arzt, Pflege, Logopädin, Angehörige, ggf. Ethikkomitee. Gemeinsam klären: Was hätte der Patient gewollt?",
    },
    contentB1: {
      title: "Wer entscheidet über die Sonde?",
      body: "**Schritt 1:** Kann der Patient selbst entscheiden?\n→ Ja: Er entscheidet selbst.\n\n**Schritt 2:** Der Patient kann nicht selbst entscheiden?\n→ Hat er eine **Patientenverfügung**? Wenn ja: Das was dort steht, gilt.\n\n**Schritt 3:** Keine Patientenverfügung?\n→ Hat er einen **Betreuer**? Der Betreuer entscheidet, was der Patient gewollt hätte.\n\n**Schritt 4:** Kein Betreuer?\n→ Das **Gericht** entscheidet.\n\n**Bei Demenz:** Alle sprechen zusammen: Arzt, Pflege, Familie. Was hätte der Patient gewollt?",
    },
  },

  // =============================================================
  // Step 9: ANWENDUNG — Dialog: Ethische Fallbesprechung
  // =============================================================
  {
    stepId: "le08-s5-tb8-09",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-III",
    quellen: ["I Care Pflege S. 179; DNQP 2017a"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Die ethische Fallbesprechung",
      body: "Im Besprechungsraum sitzen: der Arzt, die Logopädin, die Stationsleitung, du als Pflegekraft und Frau Bergmann. Es geht um die Frage: PEG für Herrn Bergmann?",
      fallbezug: "Interprofessionelle Zusammenarbeit bei ethischen Fragen.",
    },
    contentB1: {
      title: "Alle sprechen zusammen",
      body: "Im Raum sitzen: der Arzt, die Logopädin, die Chefin, du und Frau Bergmann. Frage: Soll Herr Bergmann eine Sonde bekommen?",
      fallbezug: "Alle Fachleute besprechen gemeinsam, was das Beste für Herrn Bergmann ist.",
    },
    question: {
      fragetext: "Frau Bergmann sagt unter Tränen: 'Er hat immer gesagt: Wenn ich nicht mehr weiß wer ich bin, will ich keine Schläuche.' Was bedeutet das für die Entscheidung?",
      patientName: "Ethische Fallbesprechung",
      dialogPhases: [
        {
          context: "Die Logopädin berichtet: Schluckfähigkeit stark eingeschränkt, stille Aspiration wahrscheinlich. Der Arzt sagt: 'Medizinisch ist eine PEG möglich.' Dann wendet sich Frau Bergmann an dich.",
          contextB1: "Die Logopädin sagt: Herr Bergmann kann nicht gut schlucken. Der Arzt sagt: 'Eine Sonde ist möglich.' Frau Bergmann schaut dich an.",
          speaker: "Team-Besprechung",
          options: [
            {
              text: "Das ist eine mündliche Patientenverfügung. Herr Bergmann hat klar geäußert, dass er keine Sonden will. Das müssen wir respektieren — auch wenn es für die Familie schwer ist.",
              textB1: "Herr Bergmann hat gesagt: keine Schläuche. Das müssen wir respektieren. Auch wenn es schwer ist.",
              patientResponse: "Die Stationsleitung nickt: 'Der mutmaßliche Wille des Patienten hat Vorrang.' Der Arzt stimmt zu. Frau Bergmann weint, versteht es aber.",
              patientResponseB1: "Alle stimmen zu. Frau Bergmann weint, aber sie versteht es.",
              score: 3,
              feedback: "Genau richtig! Der mutmaßliche Wille des Patienten ist die wichtigste Grundlage. Herr Bergmann hat sich klar geäußert. Als Pflegekraft bringst du diese Information ein — das ist deine Aufgabe im Team.",
              feedbackB1: "Richtig! Was der Patient gesagt hat, zählt. Auch wenn er es jetzt nicht mehr sagen kann. Du hast als Pflegekraft das Recht, das zu sagen.",
            },
            {
              text: "Vielleicht hat er das damals nicht so ernst gemeint. Man weiß ja nicht, wie man sich wirklich fühlt wenn es soweit ist.",
              textB1: "Vielleicht hat er das nicht ernst gemeint.",
              patientResponse: "Die Stationsleitung runzelt die Stirn: 'Der mutmaßliche Wille des Patienten ist ernst zu nehmen — auch wenn er vor langer Zeit geäußert wurde.'",
              patientResponseB1: "Die Chefin sagt: 'Was der Patient gesagt hat, müssen wir ernst nehmen.'",
              score: 1,
              feedback: "Vorsicht! Den Patientenwillen zu relativieren ist problematisch. Natürlich gibt es Unsicherheiten — aber deshalb gibt es die ethische Fallbesprechung. Grundsätzlich gilt der geäußerte Wille.",
              feedbackB1: "Vorsicht! Was der Patient gesagt hat, muss man ernst nehmen. Deshalb spricht man im Team darüber.",
            },
            {
              text: "Das muss der Arzt entscheiden, nicht wir.",
              textB1: "Das muss der Arzt sagen.",
              patientResponse: "Der Arzt schüttelt den Kopf: 'Das ist eine gemeinsame Entscheidung. Die Pflege kennt den Patienten am besten — Ihre Einschätzung ist wichtig.'",
              patientResponseB1: "Der Arzt sagt: 'Nein, das entscheiden wir zusammen. Die Pflege kennt den Patienten am besten.'",
              score: 1,
              feedback: "Nein! Die ethische Entscheidung ist eine INTERPROFESSIONELLE Aufgabe. Pflege hat hier genauso eine Stimme wie der Arzt. Du kennst den Patienten im Alltag am besten!",
              feedbackB1: "Nein! Du darfst auch mitreden! Die Pflege kennt den Patienten oft am besten. Deine Meinung ist wichtig.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 10: ERKLÄRUNG — Basale Stimulation als Alternative (scenario)
  // =============================================================
  {
    stepId: "le08-s5-tb8-10",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "scenario",
    contentC1: {
      title: "Genuss ohne Risiko: Basale Stimulation",
      body: "**Szene:** Frau Bergmann besucht ihren Mann nach der Teambesprechung. Sie hat Apfelmus mitgebracht.\n\nDu zeigst ihr, wie sie **Geschmack auf die Lippen tupfen** kann — ein kleiner Klecks Apfelmus auf einem Mundpflegestäbchen. Herr Bergmann lächelt.\n\n**Basale Stimulation beim Essen:**\n- Geschmack auf die Lippen tupfen (Apfelmus, Honig, Lieblingsspeisen)\n- Orale Stimulation mit Rosenhonig-Stäbchen\n- Angenehme Düfte einsetzen (frischer Kaffee, frisches Brot)\n- Lieblingslied beim Essen abspielen\n- Ehefrau einbeziehen — sie tupft den Geschmack auf die Lippen\n\nSo kann Herr Bergmann Genuss erleben — ohne Aspirationsrisiko.",
    },
    contentB1: {
      title: "Geschmack ohne Gefahr",
      body: "**Szene:** Frau Bergmann besucht ihren Mann. Sie hat Apfelmus mitgebracht.\n\nDu zeigst ihr: Ein kleines bisschen Apfelmus auf ein Stäbchen. Auf die Lippen tupfen. Herr Bergmann lächelt.\n\n**Was du tun kannst:**\n- Geschmack auf die Lippen tupfen\n- Angenehme Düfte: frischer Kaffee, frisches Brot\n- Lieblingsmusik beim Essen spielen\n- Frau Bergmann mitmachen lassen\n\nSo kann Herr Bergmann das Essen genießen — ohne Gefahr.",
    },
  },

  // =============================================================
  // Step 11: ANWENDUNG — Swipe: Ethik-Mythen klären
  // =============================================================
  {
    stepId: "le08-s5-tb8-11",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 175, 179; DNQP 2017a"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Ethik-Check: Stimmt das?",
      body: "Wische nach rechts für 'Richtig' und nach links für 'Falsch'.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Richtig nach rechts, falsch nach links!",
    },
    question: {
      fragetext: "Wische!",
      swipe: {
        instruction: "Stimmt die Aussage? Wische nach rechts (richtig) oder links (falsch).",
        cards: [
          {
            statement: "Nahrungsverweigerung ist immer ein Grund für Zwangsernährung.",
            statementB1: "Wenn ein Patient nicht essen will, muss man ihn zwangsernähren.",
            isCorrect: false,
            explanation: "Falsch! Jeder einwilligungsfähige Patient hat das Recht, Nahrung abzulehnen. Zwangsernährung gibt es nur in der Psychiatrie unter eng definierten Bedingungen und mit richterlicher Genehmigung.",
            explanationB1: "Falsch! Jeder Patient darf 'Nein' sagen. Zwang beim Essen ist nur ganz selten erlaubt — und nur mit einem Richter.",
          },
          {
            statement: "Die Patientenverfügung hat Vorrang vor dem Angehörigenwunsch.",
            statementB1: "Was der Patient vorher aufgeschrieben hat, gilt mehr als der Wunsch der Familie.",
            isCorrect: true,
            explanation: "Richtig! Die Patientenverfügung drückt den Willen des Patienten aus. Dieser hat nach § 1901a BGB Vorrang — auch wenn die Angehörigen etwas anderes wollen.",
            explanationB1: "Richtig! Was der Patient aufgeschrieben hat, gilt. Auch wenn die Familie etwas anderes will.",
          },
          {
            statement: "Medikamente im Essen verstecken ist bei Demenz erlaubt.",
            statementB1: "Bei Demenz darf man Medizin ins Essen mischen.",
            isCorrect: false,
            explanation: "Falsch! Medikamente ohne Wissen des Patienten im Essen zu verstecken ist nach § 223 StGB Körperverletzung — auch bei Demenz. Erst Alternativen prüfen: Saftform, Schmelztablette, Motivation.",
            explanationB1: "Falsch! Medizin im Essen verstecken ist verboten! Auch bei Demenz. Das ist eine Straftat. Es gibt andere Möglichkeiten.",
          },
          {
            statement: "PEG verlängert bei fortgeschrittener Demenz die Lebenszeit.",
            statementB1: "Eine PEG-Sonde hilft Menschen mit schwerer Demenz länger zu leben.",
            isCorrect: false,
            explanation: "Falsch! Cochrane Review zeigt: PEG verlängert bei fortgeschrittener Demenz NICHT die Lebenszeit und verbessert NICHT die Lebensqualität. Die Evidenz ist eindeutig.",
            explanationB1: "Falsch! Studien zeigen: Die Sonde hilft nicht bei schwerer Demenz. Der Patient lebt nicht länger.",
          },
          {
            statement: "Basale Stimulation kann Genuss ermöglichen, ohne Aspirationsrisiko.",
            statementB1: "Man kann Geschmack auf die Lippen tupfen, ohne Gefahr.",
            isCorrect: true,
            explanation: "Richtig! Geschmack auf die Lippen tupfen, orale Stimulation, angenehme Düfte — das ermöglicht Genuss ohne Aspirationsrisiko. Eine wertvolle Alternative zur PEG.",
            explanationB1: "Richtig! Geschmack auf die Lippen ist sicher. Der Patient kann genießen, ohne sich zu verschlucken.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 12: REFLEXION — Ethische Reflexion (Bloom B5)
  // =============================================================
  {
    stepId: "le08-s5-tb8-12",
    phase: "s5",
    stepType: "reflection",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179; DNQP 2017a"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Wie gehst du mit diesem Dilemma um?",
      body: "Herr Bergmanns Frau weint und sagt: 'Er darf nicht verhungern.' Du weißt, dass die Evidenz gegen eine PEG spricht. Gleichzeitig siehst du ihren Schmerz.",
    },
    contentB1: {
      title: "Was fühlst du dabei?",
      body: "Frau Bergmann weint. Sie hat Angst, dass ihr Mann verhungert. Aber die Forschung sagt: Die Sonde hilft nicht.",
    },
    question: {
      fragetext: "Wie gehst du mit diesem Widerspruch um? Was würdest du fühlen?",
      reflection: {
        prompt: "Schreibe 3-4 Sätze: Wie gehst du mit dem Widerspruch um zwischen der Evidenz (PEG hilft nicht bei Demenz) und dem Schmerz der Angehörigen?",
        placeholder: "Das ist eine der schwierigsten Situationen in der Pflege...",
        systemPrompt: "Der Schüler reflektiert über ein ethisches Dilemma. Bewerte empathisch. Es gibt keine falsche Antwort. Bestätige die emotionale Belastung. Wertschätze ehrliche Reflexion. Wenn der Schüler unsicher ist: Das ist normal und zeigt Verantwortungsbewusstsein. Hinweis: Das Team trägt die Entscheidung gemeinsam — keine Pflegekraft muss das allein aushalten.",
      },
    },
  },

  // =============================================================
  // Step 13: SZENE — Übergang TB9: Flüssigkeitsbilanz
  // =============================================================
  {
    stepId: "le08-s5-tb9-01",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 462-463"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-bilanz",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Zurück bei Frau Kramer: Die Bilanz",
      body: "Szenenwechsel. Frau Kramer hat jetzt eine Magensonde. Die Stationsleitung kommt zu dir: 'Erstelle bitte die Flüssigkeitsbilanz für heute.'",
      fallbezug: "Frau Kramer (42, MS) — jetzt mit Magensonde. Flüssigkeitsbilanz als praktische Aufgabe.",
      glossarBegriffe: ["Flüssigkeitsbilanz", "Bilanzierung"],
    },
    contentB1: {
      title: "Frau Kramer: Wie viel Flüssigkeit?",
      body: "Frau Kramer hat jetzt einen Schlauch durch die Nase. Die Chefin sagt: 'Schreibe auf, wie viel Flüssigkeit sie bekommt und wie viel sie ausscheidet.'",
      fallbezug: "Frau Kramer hat jetzt eine Sonde. Du musst aufschreiben, was rein und raus geht.",
    },
    question: {
      fragetext: "Was zählt alles zur Einfuhr?",
      patientName: "Stationsleitung",
      dialogPhases: [
        {
          context: "Die Stationsleitung erklärt dir die Flüssigkeitsbilanz. 'Denk daran: Einfuhr ist nicht nur das, was die Patientin trinkt!'",
          contextB1: "Die Chefin erklärt dir: Einfuhr ist nicht nur das Trinken!",
          speaker: "Stationsleitung",
          options: [
            {
              text: "Zur Einfuhr gehören: orale Flüssigkeit, Infusionen und der Wasseranteil der Sondennahrung.",
              textB1: "Einfuhr: Trinken + Infusion + Wasser in der Sondennahrung.",
              patientResponse: "Genau! Den Wasseranteil der Sondennahrung vergessen viele. Standard-Sondennahrung besteht zu 80% aus Wasser!",
              patientResponseB1: "Richtig! Viele vergessen: Die Sondennahrung ist auch zu 80% Wasser!",
              score: 3,
              feedback: "Perfekt! Der Wasseranteil der Sondennahrung wird häufig vergessen — das ist der typischste Fehler bei der Bilanzierung.",
              feedbackB1: "Sehr gut! Die meisten vergessen das Wasser in der Sondennahrung. Du hast es gewusst!",
            },
            {
              text: "Zur Einfuhr gehören: orale Flüssigkeit und Infusionen.",
              textB1: "Einfuhr: Trinken und Infusionen.",
              patientResponse: "Fast! Aber du vergisst den Wasseranteil der Sondennahrung! 1000 ml Sondenkost enthalten ca. 800 ml Wasser.",
              patientResponseB1: "Fast! Aber die Sondennahrung hat auch Wasser. Das musst du dazurechnen!",
              score: 2,
              feedback: "Guter Ansatz! Aber der Wasseranteil der Sondennahrung muss unbedingt einbezogen werden. Standard-Sondenkost enthält ca. 80% Wasser.",
              feedbackB1: "Fast richtig! Aber du hast das Wasser in der Sondennahrung vergessen. Das muss auch aufgeschrieben werden.",
            },
            {
              text: "Nur das, was die Patientin trinkt.",
              textB1: "Nur was sie trinkt.",
              patientResponse: "Nein, das reicht nicht! Einfuhr = ALLES was an Flüssigkeit in den Körper kommt: Trinken, Infusionen, Wasser in der Sondennahrung.",
              patientResponseB1: "Nein! Es kommt auch Flüssigkeit über die Infusion und die Sonde. Das muss alles aufgeschrieben werden.",
              score: 1,
              feedback: "Leider zu wenig. Die Flüssigkeitsbilanz erfasst ALLE Flüssigkeit: oral, Infusion, Wasseranteil der Sondennahrung. Nur so ist die Bilanz korrekt.",
              feedbackB1: "Das reicht nicht. Alles was an Flüssigkeit in den Körper kommt, muss aufgeschrieben werden: Trinken, Infusion, Sondennahrung.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 14: ERKLÄRUNG — Flüssigkeitsbilanz (procontra)
  // =============================================================
  {
    stepId: "le08-s5-tb9-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 462-463"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-bilanz",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    displayFormat: "procontra",
    contentC1: {
      title: "Flüssigkeitsbilanz: Einfuhr vs. Ausfuhr",
      body: "**Einfuhr** (Was kommt rein?)\n- Orale Flüssigkeit (Trinken, Suppe)\n- Infusionen (i.v.)\n- Wasseranteil der Sondennahrung (ca. 80%!)\n- Spülwasser der Sonde\n\n**Ausfuhr** (Was geht raus?)\n- Urin (wichtigste Messgröße)\n- Drainagen (Wundsekret)\n- Erbrechen\n- Stuhlgang (bei Durchfall relevant!)\n- Geschätzter Schweiß (Fieber: +500 ml pro 1°C über 37°C)\n\n**Positive Bilanz** = Einfuhr > Ausfuhr → z.B. Ödeme bei Herzinsuffizienz\n**Negative Bilanz** = Ausfuhr > Einfuhr → z.B. Exsikkose, Dehydratation\n\nDokumentation: Jede Menge exakt erfassen! Einfuhr-/Ausfuhrprotokoll über 24 Stunden.",
      glossarBegriffe: ["Flüssigkeitsbilanz", "Exsikkose"],
    },
    contentB1: {
      title: "Was kommt rein? Was geht raus?",
      body: "**Was kommt rein?** (Einfuhr)\n- Was der Patient trinkt\n- Infusionen\n- Wasser in der Sondennahrung (80%!)\n- Spülwasser\n\n**Was geht raus?** (Ausfuhr)\n- Urin (am wichtigsten)\n- Erbrechen\n- Durchfall\n- Schweiß (bei Fieber: mehr Schweiß!)\n\n**Wenn mehr reinkommt als rausgeht** = der Körper hat zu viel Wasser (Schwellung)\n**Wenn mehr rausgeht als reinkommt** = der Körper trocknet aus\n\nAlles genau aufschreiben! Über 24 Stunden.",
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG — Tablefillin: Bilanzierungsbogen
  // =============================================================
  {
    stepId: "le08-s5-tb9-03",
    phase: "s5",
    stepType: "tablefillin",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 462-463"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-bilanz",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Bilanzierungsbogen ausfüllen",
      body: "Frau Kramer: 800 ml oral getrunken, 500 ml Infusion, 1000 ml Sondennahrung (80% Wasser). Ausfuhr: 1200 ml Urin, 200 ml Erbrechen. Fülle den Bogen aus!",
    },
    contentB1: {
      title: "Bilanz ausrechnen",
      body: "Frau Kramer hat getrunken: 800 ml. Infusion: 500 ml. Sondennahrung: 1000 ml (80% ist Wasser). Sie hat 1200 ml Urin und 200 ml Erbrechen. Rechne!",
    },
    question: {
      fragetext: "Fülle die Lücken im Bilanzierungsbogen aus!",
      tablefillin: {
        instruction: "Berechne die fehlenden Werte und wähle die richtige Antwort.",
        headers: ["Position", "Menge (ml)"],
        rows: [
          [
            { value: "Orale Flüssigkeit", isBlank: false },
            { value: "800", isBlank: false },
          ],
          [
            { value: "Infusion", isBlank: false },
            { value: "500", isBlank: false },
          ],
          [
            { value: "Wasseranteil Sonde (80% von 1000 ml)", isBlank: false },
            { value: "800", isBlank: true, options: ["600", "800", "1000", "500"] },
          ],
          [
            { value: "GESAMTEINFUHR", isBlank: false },
            { value: "2100", isBlank: true, options: ["1300", "2100", "2300", "1800"] },
          ],
          [
            { value: "Urin", isBlank: false },
            { value: "1200", isBlank: false },
          ],
          [
            { value: "Erbrechen", isBlank: false },
            { value: "200", isBlank: false },
          ],
          [
            { value: "GESAMTAUSFUHR", isBlank: false },
            { value: "1400", isBlank: true, options: ["1000", "1200", "1400", "1600"] },
          ],
          [
            { value: "BILANZ (Einfuhr - Ausfuhr)", isBlank: false },
            { value: "+700", isBlank: true, options: ["-700", "+700", "+300", "+1100"] },
          ],
        ],
      },
    },
  },

  // =============================================================
  // Step 16: ERKLÄRUNG — Kostformen (Glossar)
  // =============================================================
  {
    stepId: "le08-s5-tb9-04",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 470-471"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-kostformen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "glossary",
    contentC1: {
      title: "5 Kostformen auf einen Blick",
      body: "**Vollkost:** Ausgewogene, vollwertige Kost für Gesunde. Alles erlaubt.\n\n**Leichte Vollkost:** Gut verträglich, keine blähenden oder stark fettigen Lebensmittel. Bei Magen-Darm-Beschwerden.\n\n**Passierte Kost:** Alles püriert. Bei Schluckstörungen (Dysphagie), nach Zahn-OPs.\n\n**Flüssigkost:** Nur Flüssiges — Brühe, Tee, Säfte. Prä- und postoperativ, kurzfristig.\n\n**Wunschkost:** Der Patient isst, was er möchte. In der Palliativpflege, bei Tumorerkrankungen. Lebensqualität vor Ernährungsregeln!\n\n**Spezialdiäten:** Diabeteskost, Dialysekost (eiweißreduziert + kaliumarm), glutenfreie Kost (Zöliakie), laktosefreie Kost.",
      glossarBegriffe: ["Kostform"],
    },
    contentB1: {
      title: "5 Arten von Essen im Krankenhaus",
      body: "**Normales Essen (Vollkost):** Alles erlaubt. Für gesunde Patienten.\n\n**Leichte Kost:** Essen, das den Magen nicht belastet. Nichts Fettiges, nichts Blähendes.\n\n**Püriertes Essen:** Alles ist zu Brei gemacht. Für Patienten mit Schluckproblemen.\n\n**Flüssiges Essen:** Nur Suppe, Tee, Saft. Vor und nach Operationen.\n\n**Wunschkost:** Der Patient bestimmt was er essen will. Für sehr kranke Menschen am Lebensende.",
    },
  },

  // =============================================================
  // Step 17: ANWENDUNG — Matching: Erkrankung → Kostform
  // =============================================================
  {
    stepId: "le08-s5-tb9-05",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 470-471"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le08-kostformen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Erkrankung → Kostform zuordnen",
      body: "Welche Kostform passt zu welcher Erkrankung?",
    },
    contentB1: {
      title: "Welches Essen für welche Krankheit?",
      body: "Ordne die richtige Art von Essen zur Krankheit.",
    },
    question: {
      fragetext: "Verbinde Erkrankung und Kostform!",
      matchingPairs: [
        { left: "Dysphagie nach Schlaganfall", right: "Passierte Kost" },
        { left: "Zöliakie", right: "Glutenfreie Kost" },
        { left: "Dialyse-Patient", right: "Eiweißreduziert + Kaliumarm" },
        { left: "Post-OP Tag 1", right: "Flüssigkost" },
        { left: "Terminale Krebserkrankung", right: "Wunschkost" },
      ],
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Calculation: Bilanz Herr Bergmann
  // =============================================================
  {
    stepId: "le08-s5-tb9-06",
    phase: "s5",
    stepType: "calculation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 462-463, 453"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-bilanz",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Bilanz berechnen: Herr Bergmann",
      body: "Herr Bergmann: 1500 ml Sondennahrung (80% Wasser = 1200 ml) + 300 ml Spülwasser. Ausfuhr: 1400 ml Urin + 500 ml geschätzter Schweiß (Fieber 38,2°C). Berechne die Bilanz!",
      fallbezug: "Herr Bergmann (84, Demenz, PEG, Fieber) — negative Bilanz erkennen.",
    },
    contentB1: {
      title: "Rechne: Herr Bergmanns Bilanz",
      body: "Herr Bergmann bekommt: 1200 ml Wasser (aus der Sondennahrung) + 300 ml Spülwasser = 1500 ml rein. Raus: 1400 ml Urin + 500 ml Schweiß (Fieber). Wie ist die Bilanz?",
      fallbezug: "Herr Bergmann hat Fieber. Kommt genug Flüssigkeit rein?",
    },
    question: {
      fragetext: "Wie ist die Flüssigkeitsbilanz?",
      calculation: {
        instruction: "Berechne: Einfuhr (1200 ml + 300 ml) minus Ausfuhr (1400 ml + 500 ml). Gib das Ergebnis ein.",
        formula: "Bilanz = Einfuhr - Ausfuhr = (1200 + 300) - (1400 + 500)",
        correctValue: -400,
        unit: "ml",
        tolerance: 0,
        explanation: "Einfuhr: 1200 ml (Wasseranteil Sonde) + 300 ml (Spülwasser) = 1500 ml. Ausfuhr: 1400 ml (Urin) + 500 ml (Schweiß bei Fieber) = 1900 ml. Bilanz = 1500 - 1900 = -400 ml. Das ist eine negative Bilanz! Maßnahme: Arzt informieren, Flüssigkeitszufuhr erhöhen. Bei Fieber: +500 ml pro 1°C über 37°C!",
        explanationB1: "Rein: 1200 + 300 = 1500 ml. Raus: 1400 + 500 = 1900 ml. Bilanz: 1500 - 1900 = -400 ml. Das ist zu wenig! Der Körper trocknet aus. Arzt rufen, mehr Flüssigkeit geben!",
      },
    },
  },

  // =============================================================
  // Step 19: PRAXIS_DIALOG — Kultursensible Ernährung (Herr Öztürk)
  // =============================================================
  {
    stepId: "le08-s5-tb9-07",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 175, 187"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-kostformen",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    contentC1: {
      title: "Religiöse Ernährungsvorschriften respektieren",
      body: "Herr Öztürk (74, Muslim), Tischnachbar von Herrn Bergmann, hat versehentlich Schweinefleisch-Soße auf den Kartoffeln bekommen. Er ist aufgebracht: 'Ihr respektiert mich nicht!'",
    },
    contentB1: {
      title: "Herr Öztürk ist wütend",
      body: "Herr Öztürk isst kein Schweinefleisch (halal). Er hat aus Versehen Soße mit Schweinefleisch bekommen. Er ist sauer: 'Ihr respektiert mich nicht!'",
    },
    question: {
      fragetext: "Wie reagierst du?",
      patientName: "Herr Öztürk",
      dialogPhases: [
        {
          context: "Herr Öztürk schiebt den Teller wütend weg. Andere Bewohner schauen. Die Situation ist angespannt.",
          contextB1: "Herr Öztürk ist wütend. Die anderen Bewohner schauen.",
          speaker: "Herr Öztürk",
          options: [
            {
              text: "Herr Öztürk, das tut mir wirklich leid. Das hätte nicht passieren dürfen. Ich bringe Ihnen sofort ein neues Essen ohne Schweinefleisch. Und ich spreche mit der Küche, damit das nicht wieder passiert.",
              textB1: "Das tut mir leid, Herr Öztürk. Das war falsch. Ich hole sofort neues Essen. Und ich sage der Küche Bescheid.",
              patientResponse: "Danke. Aber das passiert nicht zum ersten Mal! Können Sie nicht ein Schild auf meinen Teller machen?",
              patientResponseB1: "Danke. Aber das passiert zu oft!",
              score: 3,
              feedback: "Sehr gut! Du entschuldigst dich aufrichtig, handelst sofort und planst eine Lösung. Religiöse Ernährungsvorschriften sind kein 'Sonderwunsch' — sie gehören zur Würde des Patienten.",
              feedbackB1: "Sehr gut! Du entschuldigst dich, holst neues Essen und sprichst mit der Küche. Das ist respektvoll.",
            },
            {
              text: "Das war keine Absicht, Herr Öztürk. Fehler passieren.",
              textB1: "Das war keine Absicht. Fehler passieren.",
              patientResponse: "Für Sie vielleicht ein Fehler. Für mich ist es eine Frage des Respekts!",
              patientResponseB1: "Für mich ist das kein kleiner Fehler!",
              score: 1,
              feedback: "Die Absicht mag stimmen, aber 'Fehler passieren' bagatellisiert die Situation. Für Herrn Öztürk ist Halal-Ernährung keine Kleinigkeit. Besser: Entschuldigung + sofortige Lösung + Prävention.",
              feedbackB1: "Das klingt so, als wäre es egal. Für Herrn Öztürk ist es aber sehr wichtig. Besser: Entschuldigung und neues Essen.",
            },
            {
              text: "Wir können nicht für jeden extra kochen. Es gibt Standardessen.",
              textB1: "Wir können nicht für jeden extra kochen.",
              patientResponse: "Herr Öztürk steht wütend auf und geht. Er verweigert das Mittagessen.",
              patientResponseB1: "Herr Öztürk geht wütend weg. Er isst nichts mehr.",
              score: 0,
              feedback: "Komplett falsch! Religiöse Ernährungsvorschriften sind ein Grundrecht und keine Extra-Wünsche. Die Achtung der Würde und Autonomie (KB IV) gilt für JEDEN Pflegeempfänger, unabhängig von der Religion.",
              feedbackB1: "Falsch! Jeder Patient hat das Recht auf Essen, das zu seiner Religion passt. Das ist kein Extra-Wunsch!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 20: ANWENDUNG — Freetext: Stellungnahme PEG (Bloom B5)
  // =============================================================
  {
    stepId: "le08-s5-tb8-13",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179; DNQP 2017a"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Deine pflegerische Stellungnahme",
      body: "Formuliere eine Stellungnahme: Sollte Herr Bergmann eine PEG bekommen?",
      fallbezug: "Herr Bergmann (84, Demenz, PEG seit 4 Wochen). Seine Frau wünscht sich eine Sonde. Er hat mündlich geäußert, keine Schläuche zu wollen.",
    },
    contentB1: {
      title: "Deine Meinung",
      body: "Schreibe auf: Soll Herr Bergmann eine Sonde bekommen? Was denkst du?",
      fallbezug: "Seine Frau will eine Sonde. Er hat gesagt: keine Schläuche. Was denkst du?",
    },
    question: {
      fragetext: "Formuliere in 4-5 Sätzen deine pflegerische Stellungnahme. Berücksichtige: Evidenzlage, Patientenverfügung, Angehörigenwunsch, Lebensqualität.",
      freetext: {
        prompt: "Formuliere deine Stellungnahme zur Frage: Sollte Herr Bergmann (84, mittelschwere Demenz) eine PEG bekommen?",
        promptB1: "Was ist deine Meinung? Sollte Herr Bergmann eine Sonde in den Magen bekommen? Schreibe 3-4 Sätze.",
        satzanfaenge: [
          "Meiner Einschätzung nach...",
          "Die Evidenz zeigt...",
          "Herr Bergmann hat geäußert...",
          "Stattdessen schlage ich vor...",
        ],
        systemPrompt: "Bewerte die Stellungnahme nach: 1) Bezug auf Evidenz (Cochrane: PEG bei Demenz verlängert nicht die Lebenszeit), 2) Patientenwille (mündliche Äußerung: keine Schläuche), 3) Empathie für Angehörige, 4) Alternativ-Vorschlag (z.B. basale Stimulation). Sandwich-Prinzip. Es gibt verschiedene vertretbare Positionen, aber die Evidenz und der Patientenwille sind die stärksten Argumente.",
      },
    },
  },

  // =============================================================
  // Step 21: ANWENDUNG — ChatSim: Gespräch mit Frau Bergmann (Bloom B5)
  // =============================================================
  {
    stepId: "le08-s5-tb8-14",
    phase: "s5",
    stepType: "chatSim",
    bloomLevel: 5,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 179; DNQP 2017a"],
    track: "vertiefung",
    modus: "praxis-sim",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Gespräch mit Frau Bergmann",
      body: "Übe das Gespräch mit Frau Bergmann. Sie ist emotional und hat Angst, dass ihr Mann verhungert.",
      fallbezug: "Angehörigen-Beratung bei PEG und Demenz — eine der schwierigsten Situationen in der Pflege.",
    },
    contentB1: {
      title: "Übe das Gespräch",
      body: "Sprich mit Frau Bergmann. Sie hat Angst und ist traurig. Du erklärst ihr, was am besten für ihren Mann ist.",
      fallbezug: "Frau Bergmann braucht Hilfe. Du erklärst ihr alles in Ruhe.",
    },
    question: {
      fragetext: "Führe ein empathisches Beratungsgespräch mit Frau Bergmann.",
      chatSim: {
        patientName: "Frau Helga Bergmann",
        situation: "Frau Bergmann (78) besucht ihren Mann Walter (84, mittelschwere Demenz) im Pflegeheim. Walter hat eine PEG-Sonde. Frau Bergmann ist verzweifelt: 'Er hat doch immer so gern gegessen. Darf er wirklich gar nichts mehr probieren?' Die Logopädin hat festgestellt: Schluckfähigkeit stark eingeschränkt, stille Aspiration wahrscheinlich.",
        situationB1: "Frau Bergmann besucht ihren Mann. Er hat eine Sonde. Sie fragt: 'Darf er gar nichts mehr essen?'",
        systemPrompt: "Du bist Frau Helga Bergmann, 78 Jahre alt, Ehefrau von Walter. Du bist emotional, traurig und ängstlich. Du hast Schuldgefühle ('Hätte ich früher etwas tun sollen?'). Du reagierst auf: 1) Empathie → wirst ruhiger, öffnest dich, 2) Fakten ohne Empathie → wirst wütend ('Sie haben kein Herz!'), 3) Basale Stimulation → bist interessiert ('Kann ich das auch machen?'), 4) Patientenverfügung → erinnerst dich: 'Er hat mal gesagt, keine Schläuche wenn es soweit ist.' Sprich B1-Deutsch wenn der Schüler einfach spricht.",
        maxTurns: 5,
        evaluationCriteria: [
          "Empathie: Nimmt Gefühle der Angehörigen ernst",
          "Information: Erklärt Evidenz zu PEG bei Demenz verständlich",
          "Alternative: Erwähnt basale Stimulation als Genuss-Möglichkeit",
          "Patientenwille: Fragt nach oder erinnert an Patientenverfügung",
          "Partnerschaftlich: Bezieht Frau Bergmann als Teil des Teams ein",
        ],
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary
  // =============================================================
  {
    stepId: "le08-s5-bk-01",
    phase: "s5",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179, 455-456, 462-471; DNQP 2017a"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Session 5 — Zusammenfassung",
      body: "Heute ging es um die schwierigsten Themen der Ernährungspflege: Demenz, Ethik und die Frage 'Was hätte der Patient gewollt?'",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Heute ging es um schwere Themen: Essen bei Demenz, die Frage nach der Sonde und Respekt für alle Patienten.",
    },
    question: {
      fragetext: "Was nimmst du aus dieser Session mit?",
      summary: {
        reflexionRueckbezug: "Du hast heute Demenz-Ernährung, das ethische Dilemma der PEG-Sonde und die Flüssigkeitsbilanz kennengelernt. Nächste Session: Die Prüfung! Ein neuer Patient, komplexe Situationen — zeig was du gelernt hast.",
        kernaussagen: [
          "Demenz-Ernährung: Fingerfood, Eat-by-walking, kontrastreiche Teller, bekannte Gerichte.",
          "PEG bei fortgeschrittener Demenz: Verlängert NICHT die Lebenszeit (Cochrane Review).",
          "Patientenverfügung hat Vorrang vor Angehörigenwunsch.",
          "Basale Stimulation: Geschmack auf Lippen tupfen = Genuss ohne Aspirationsrisiko.",
          "Flüssigkeitsbilanz: Einfuhr (oral + Infusion + Sondenwasser) minus Ausfuhr (Urin + Erbrechen + Schweiß).",
          "Kostformen: Vollkost, Leichte Vollkost, Passiert, Flüssig, Wunschkost.",
          "Kultursensible Ernährung: Religiöse Vorschriften respektieren!",
        ],
      },
    },
  },
];

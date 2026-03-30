// Session 7: "Andere Patienten, gleiche Prinzipien" — LE 01
// Generiert vom Content-Generator v2
// Themen: Transfer auf neue Patienten, Rollen, Teamarbeit, Ethik
// Leitfaelle: Ahmed Al-Rashid (78, syrisch) + Jonas Berger (8, nach OP)
// Bloom: B3-B5, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S7: ContentStep[] = [
  // =============================================================
  // Step 1: MC — Pruefungs-Recall (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s7-01",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeprozess — Recall",
      body: "Der Pflegeprozess nach Fiechter und Meier ist ein systematischer Kreislauf mit 6 Schritten.",
    },
    contentB1: {
      title: "Pflegeprozess — Was weisst du noch?",
      body: "Der Pflegeprozess hat 6 Schritte. Die Schritte kommen immer in der gleichen Reihenfolge.",
    },
    question: {
      fragetext: "Welcher Schritt des Pflegeprozesses kommt NACH der Informationssammlung?",
      optionen: [
        {
          text: "Pflegeprobleme und Ressourcen erkennen",
          isCorrect: true,
          explanation: "Richtig. Nach der Informationssammlung werden Probleme und Ressourcen identifiziert — das ist Schritt 2 nach Fiechter und Meier.",
          explanationB1: "Richtig! Zuerst sammelt man Informationen. Dann erkennt man die Probleme.",
        },
        {
          text: "Pflegeziele festlegen",
          isCorrect: false,
          explanation: "Pflegeziele kommen erst in Schritt 3 — nach der Problemerkennung. Ohne erkannte Probleme kann man keine Ziele formulieren.",
          explanationB1: "Pflegeziele kommen spaeter. Zuerst muss man die Probleme erkennen.",
        },
        {
          text: "Massnahmen durchfuehren",
          isCorrect: false,
          explanation: "Das Durchfuehren ist Schritt 5. Vorher muessen Probleme erkannt, Ziele gesetzt und Massnahmen geplant werden.",
          explanationB1: "Massnahmen kommen erst spaeter. Es gibt noch drei Schritte davor.",
        },
        {
          text: "Evaluation",
          isCorrect: false,
          explanation: "Die Evaluation ist der letzte Schritt (Schritt 6) des Pflegeprozesses — die Wirkungspruefung.",
          explanationB1: "Evaluation ist der letzte Schritt. Er kommt ganz am Ende.",
        },
      ],
    },
  },

  // =============================================================
  // Step 2: Dialog — Herr Al-Rashid einfuehren (STORY)
  // =============================================================
  {
    stepId: "le01-s7-02",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-249"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Neuer Patient: Herr Al-Rashid",
      body: "Ahmed Al-Rashid, 78, syrischer Ingenieur im Ruhestand. Oberschenkelhalsfraktur nach Sturz, postoperativer Tag 3.",
      fallbezug: "Chirurgische Station, Vormittag. Die Pflegefachkraft stellt sich vor.",
    },
    contentB1: {
      title: "Ein neuer Patient: Herr Al-Rashid",
      body: "Herr Al-Rashid ist 78 Jahre alt. Er kommt aus Syrien. Er hat sich den Oberschenkel gebrochen.",
      fallbezug: "Herr Al-Rashid liegt auf der Station. Die Pflegerin kommt zu ihm.",
    },
    question: {
      fragetext: "Wie reagierst du auf Herrn Al-Rashids Wunsch?",
      patientName: "Herr Al-Rashid",
      dialogPhases: [
        {
          context: "Die Pflegefachkraft betritt das Zimmer zur Koerperpflege. Herr Al-Rashid liegt im Bett, Blick abgewandt.",
          contextB1: "Die Pflegerin kommt ins Zimmer. Sie will Herrn Al-Rashid bei der Koerperpflege helfen.",
          speaker: "Herr Al-Rashid",
          options: [
            {
              text: "Guten Morgen, Herr Al-Rashid. Ich bin hier fuer die Koerperpflege.",
              textB1: "Guten Morgen. Ich helfe Ihnen beim Waschen.",
              patientResponse: "Bitte... Mann. Ich moechte Mann.",
              patientResponseB1: "Bitte... ein Mann. Ich moechte einen Mann.",
              score: 2,
              feedback: "Herr Al-Rashid aeussert deutlich seinen Wunsch nach einem maennlichen Pfleger. Seine Koerpersprache — abgewandter Blick, angespannte Schultern — verstaerkt die Botschaft.",
              feedbackB1: "Herr Al-Rashid moechte einen Mann. Er schaut weg und ist angespannt.",
            },
            {
              text: "Ich verstehe. Ich schaue, ob ein maennlicher Kollege verfuegbar ist.",
              textB1: "Ich verstehe. Ich frage, ob ein Mann helfen kann.",
              patientResponse: "Ja... danke. Danke.",
              patientResponseB1: "Ja... danke.",
              score: 3,
              feedback: "Du respektierst seine Praeferenz und suchst eine Loesung. Das entspricht kulturkongruenter Pflege nach Leininger.",
              feedbackB1: "Sehr gut! Du respektierst seinen Wunsch und suchst eine Loesung.",
            },
            {
              text: "In Deutschland ist es normal, dass Frauen pflegen. Das muessen Sie akzeptieren.",
              textB1: "In Deutschland pflegen auch Frauen. Das ist normal.",
              patientResponse: "...",
              patientResponseB1: "...",
              score: 0,
              feedback: "Diese Reaktion ignoriert Herrn Al-Rashids kulturelle Werte und verletzt das Prinzip der Autonomie. Die Pflegebeziehung wird beschaedigt.",
              feedbackB1: "Das ist nicht gut. Man muss die Wuensche des Patienten respektieren.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 3: Swipe — Reaktionen bewerten (CHALLENGE, Brilliant-Prinzip)
  // =============================================================
  {
    stepId: "le01-s7-03",
    phase: "s7",
    stepType: "swipe",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.133-135", "Q7 S.285"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Kulturelle Barrieren in der Pflege",
      body: "Herr Al-Rashid lehnt die Koerperpflege durch eine weibliche Pflegekraft ab. Verschiedene Reaktionen sind moeglich.",
    },
    contentB1: {
      title: "Was wuerdest du tun?",
      body: "Herr Al-Rashid moechte keinen weiblichen Pfleger. Was ist die richtige Reaktion?",
    },
    question: {
      fragetext: "Ist diese Reaktion professionell?",
      swipe: {
        instruction: "Wische nach rechts fuer 'professionell' und nach links fuer 'unprofessionell'.",
        cards: [
          {
            statement: "Seinen Wunsch ignorieren und die Koerperpflege trotzdem durchfuehren.",
            statementB1: "Den Wunsch ignorieren und trotzdem waschen.",
            isCorrect: false,
            explanation: "Das verletzt die Autonomie des Patienten und die Pflege-Charta Art. 1 (Selbstbestimmung). Kulturelle Praeferenzen bei der Koerperpflege beruehren die Wuerde.",
            explanationB1: "Das ist falsch. Der Patient darf selbst entscheiden. Seine Wuerde ist wichtig.",
          },
          {
            statement: "Einen maennlichen Kollegen fuer die Koerperpflege organisieren.",
            statementB1: "Einen maennlichen Kollegen fragen, ob er helfen kann.",
            isCorrect: true,
            explanation: "Kulturkongruente Pflege nach Leininger: Die Organisation anpassen, um kulturelle Beduerfnisse zu respektieren, ohne die Pflegequalitaet zu senken.",
            explanationB1: "Richtig! Man kann die Pflege anders organisieren und den Wunsch respektieren.",
          },
          {
            statement: "Dem Patienten erklaeren, dass in Deutschland Gleichberechtigung gilt und er sich anpassen muss.",
            statementB1: "Dem Patienten sagen, dass er sich an deutsche Regeln halten muss.",
            isCorrect: false,
            explanation: "Gleichberechtigung bedeutet nicht, kulturelle Beduerfnisse bei der Intimhygiene zu ignorieren. Respekt und Wuerde gelten fuer alle.",
            explanationB1: "Das ist falsch. Respekt gilt fuer alle Menschen, egal woher sie kommen.",
          },
          {
            statement: "Die Koerperpflege komplett weglassen, weil der Patient sie ablehnt.",
            statementB1: "Gar nicht mehr waschen, weil der Patient nicht will.",
            isCorrect: false,
            explanation: "Pflegeverweigerung ist keine Loesung. Die Pflege-Charta Art. 4 fordert qualifizierte Pflege. Die Loesung liegt in kreativer Organisation, nicht im Unterlassen.",
            explanationB1: "Das ist falsch. Pflege weglassen ist keine Loesung. Man muss einen anderen Weg finden.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 4: Text — Perspektivwechsel + Leininger (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s7-04",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.133-135"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Pflegebeziehung aus Patientensicht",
      body: "Bei Yasemin ging es um die Rolle der Pflegenden. Bei Herrn Al-Rashid sehen wir die andere Seite: Wie erlebt der Pflegeempfaenger die Situation? Leininger betont kulturkongruente Pflege — Kultur beeinflusst, wie Menschen Gesundheit, Schmerz und Koerperkontakt erleben.",
    },
    contentB1: {
      title: "Wie fuehlt sich der Patient?",
      body: "Yasemin war die Pflegende. Herr Al-Rashid ist der Patient. Kultur beeinflusst, wie Menschen Pflege erleben. Leininger sagt: Pflege muss zur Kultur passen.",
    },
  },

  // =============================================================
  // Step 5: Branching — Al-Rashid verweigert Koerperpflege (PRAXIS-SIM)
  // =============================================================
  {
    stepId: "le01-s7-05",
    phase: "s7",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q4 S.133-135", "Q7 S.285"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethik trifft Kultur",
      body: "Herr Al-Rashid verweigert die Koerperpflege durch die Pflegefachkraft. Gleichzeitig muss der Wundverband am Oberschenkel gewechselt werden — das ist medizinisch notwendig.",
      fallbezug: "Postoperativer Tag 3. Der Verband muss gewechselt werden, aber Herr Al-Rashid lehnt die weibliche Pflegekraft ab.",
    },
    contentB1: {
      title: "Ein schwieriges Problem",
      body: "Herr Al-Rashid will keine Frau bei der Koerperpflege. Aber der Verband muss gewechselt werden. Was tust du?",
      fallbezug: "Tag 3 nach der Operation. Der Verband muss heute gewechselt werden.",
    },
    question: {
      fragetext: "Wie handelst du in dieser Situation?",
      branchingOptions: [
        {
          text: "In Deutschland machen das alle Pflegekraefte, egal ob Mann oder Frau.",
          feedback: "Herr Al-Rashid fuehlt sich nicht respektiert. Er verweigert auch den Verbandwechsel. Die Wunde wird nicht versorgt — das Infektionsrisiko steigt. Du hast das Prinzip der Autonomie verletzt.",
          feedbackB1: "Herr Al-Rashid fuehlt sich nicht verstanden. Er will jetzt gar keine Pflege mehr. Das ist gefaehrlich fuer seine Wunde.",
          isCorrect: false,
        },
        {
          text: "Einen maennlichen Kollegen fuer die Koerperpflege organisieren. Den Verbandwechsel erklaeren und sein Einverstaendnis einholen.",
          feedback: "Du respektierst die kulturelle Praeferenz UND stellst die medizinische Versorgung sicher. Nach Leininger ist das kulturkongruente Pflege: kreative Organisation statt Ignoranz oder Unterwerfung.",
          feedbackB1: "Sehr gut! Du respektierst seinen Wunsch und sorgst trotzdem fuer die Wunde. So geht gute Pflege.",
          isCorrect: true,
        },
        {
          text: "Die Koerperpflege komplett weglassen — wenn er nicht will, hat er Pech.",
          feedback: "Pflege weglassen verletzt die Pflege-Charta Art. 4 (qualifizierte Pflege). Respekt vor kulturellen Werten darf nie zur Vernachlaessigung fuehren.",
          feedbackB1: "Das ist falsch. Pflege einfach weglassen ist nie richtig. Der Patient braucht Hilfe.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 6: Hotspot — Nonverbale Signale bei Al-Rashid (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s7-06",
    phase: "s7",
    stepType: "hotspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322", "Q5 S.250"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    imageUrl: "/images/le-01/al-rashid-bett.svg",
    imageAlt: "Herr Al-Rashid liegt im Krankenbett, Blick abgewandt, Schultern angespannt",
    contentC1: {
      title: "Nonverbale Signale erkennen",
      body: "Herr Al-Rashid liegt im Bett. Seine Koerpersprache verraet mehr als seine Worte. Systematische Beobachtung ist die Kernkompetenz der Pflege.",
    },
    contentB1: {
      title: "Was siehst du?",
      body: "Herr Al-Rashid liegt im Bett. Schau genau hin: Sein Koerper zeigt dir etwas.",
    },
    question: {
      fragetext: "Welche nonverbalen Signale zeigt Herr Al-Rashid?",
      hotspot: {
        imageUrl: "/images/le-01/al-rashid-bett.svg",
        imageAlt: "Herr Al-Rashid im Krankenbett",
        instruction: "Tippe auf die Stellen, an denen du nonverbale Signale erkennst.",
        zones: [
          { id: "lippen", x: 48, y: 18, radius: 8, label: "Zusammengekniffene Lippen — moegliches Zeichen fuer Schmerz oder Anspannung" },
          { id: "blick", x: 35, y: 15, radius: 8, label: "Abgewandter Blick — Vermeidung von Blickkontakt, Scham oder Unbehagen" },
          { id: "schultern", x: 50, y: 35, radius: 10, label: "Angespannte Schultern — koerperlicher Ausdruck von Stress oder Abwehr" },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: Comparison — Yasemin vs. Al-Rashid (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s7-07",
    phase: "s7",
    stepType: "comparison",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-249", "Q4 S.133-135"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    imageUrl: "/images/le-01/perspektiven-vergleich.svg",
    imageAlt: "Vergleichstabelle Pflegende vs. Pflegeempfaenger",
    contentC1: {
      title: "Zwei Perspektiven — ein Thema",
      body: "Pflegebeziehung hat immer zwei Seiten. Bei Yasemin sahen wir die Perspektive der Pflegenden, bei Herrn Al-Rashid die des Pflegeempfaengers.",
    },
    contentB1: {
      title: "Zwei Seiten der Pflege",
      body: "Yasemin ist die Pflegende. Herr Al-Rashid ist der Patient. Beide erleben die Pflege anders.",
    },
    question: {
      fragetext: "Vergleiche die beiden Perspektiven auf die Pflegebeziehung.",
      comparison: {
        instruction: "Welche Gemeinsamkeiten und Unterschiede erkennst du?",
        columns: [
          { label: "Yasemin (Pflegende)", icon: "👩‍⚕️" },
          { label: "Herr Al-Rashid (Patient)", icon: "🧓" },
        ],
        rows: [
          {
            criterion: "Herausforderung",
            values: ["Balance zwischen Empathie und Distanz", "Kulturelle Werte werden nicht respektiert"],
            valuesB1: ["Wie nah darf ich sein?", "Meine Kultur wird nicht beachtet"],
          },
          {
            criterion: "Betroffenes Thema",
            values: ["Professionelle Naehe und Distanz", "Wuerde und Autonomie"],
            valuesB1: ["Naehe und Distanz", "Wuerde und Selbstbestimmung"],
          },
          {
            criterion: "Loesung",
            values: ["Reflexion, Kommunikation, Priorisierung", "Organisation anpassen, Kultur respektieren"],
            valuesB1: ["Nachdenken und reden", "Pflege anders organisieren"],
          },
          {
            criterion: "Ethisches Prinzip",
            values: ["Benefizienz (Wohltun)", "Autonomie (Selbstbestimmung)"],
            valuesB1: ["Gutes tun", "Selbst entscheiden"],
            highlight: 1,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 8: Dialog — Jonas Berger einfuehren (STORY)
  // =============================================================
  {
    stepId: "le01-s7-08",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    contentC1: {
      title: "Neuer Patient: Jonas Berger",
      body: "Jonas Berger, 8 Jahre, Grundschueler. Appendektomie vor einem Tag. Seine Eltern arbeiten tagsuebers.",
      fallbezug: "Kinderchirurgische Station, Tag 1 nach OP. Jonas liegt allein im Zimmer.",
    },
    contentB1: {
      title: "Ein neuer Patient: Jonas",
      body: "Jonas ist 8 Jahre alt. Er hatte eine Blinddarm-OP. Seine Eltern sind bei der Arbeit.",
      fallbezug: "Jonas liegt allein im Zimmer. Es ist sein erster Tag nach der OP.",
    },
    question: {
      fragetext: "Wie reagierst du auf Jonas?",
      patientName: "Jonas Berger",
      dialogPhases: [
        {
          context: "Die Pflegekraft kommt zur Visite. Jonas liegt still im Bett, das Gesicht ist blass, die Lippen zusammengepresst.",
          contextB1: "Die Pflegerin kommt zu Jonas. Er liegt ganz still. Sein Gesicht ist blass.",
          speaker: "Jonas",
          options: [
            {
              text: "Hallo Jonas! Wie geht es dir heute?",
              textB1: "Hallo Jonas! Wie geht es dir?",
              patientResponse: "Mir gehts gut.",
              patientResponseB1: "Mir gehts gut.",
              score: 1,
              feedback: "Jonas sagt 'gut', aber sein blasses Gesicht und die gepressten Lippen sprechen eine andere Sprache. Kinder verschweigen oft Schmerzen, um tapfer zu wirken.",
              feedbackB1: "Jonas sagt 'gut'. Aber sein Gesicht zeigt etwas anderes. Kinder sagen oft nicht, wenn sie Schmerzen haben.",
            },
            {
              text: "Jonas, ich sehe, dass dein Gesicht ganz blass ist. Zeig mir mal auf der Skala, wie weh es tut.",
              textB1: "Jonas, du siehst blass aus. Zeig mir, wie stark dein Bauch weh tut.",
              patientResponse: "...ein bisschen.",
              patientResponseB1: "...ein bisschen.",
              score: 3,
              feedback: "Du beobachtest genau und nutzt ein altersgerechtes Assessment. Die KUSS-Skala eignet sich fuer Kinder besser als die numerische Schmerzskala.",
              feedbackB1: "Sehr gut! Du schaust genau hin und fragst auf eine Weise, die ein Kind versteht.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 9: Timeline — Jonas' Komplikationskette (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s7-09",
    phase: "s7",
    stepType: "timeline",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-beobachtung",
    imageUrl: "/images/le-01/komplikationskette.svg",
    imageAlt: "Zeitstrahl mit Jonas' Komplikationskette von Tag 1 bis Tag 5",
    contentC1: {
      title: "Komplikationskette bei Jonas",
      body: "Was passiert, wenn Schmerzen nicht erkannt werden? Eine Kettenreaktion zeigt, wie ein verschwiegenes Problem weitere Probleme nach sich zieht.",
    },
    contentB1: {
      title: "Was passiert, wenn man Schmerzen nicht erkennt?",
      body: "Jonas hat Schmerzen. Aber niemand merkt es. Dann passieren immer mehr Probleme.",
    },
    question: {
      fragetext: "Verfolge die Komplikationskette von Tag 1 bis Tag 5.",
      timeline: {
        instruction: "Lies die Ereignisse und erkenne, wo die Kette haette unterbrochen werden koennen.",
        events: [
          {
            id: "tag1",
            time: "Tag 1",
            title: "Schmerzen verschwiegen",
            description: "Jonas sagt 'Mir gehts gut', obwohl er Schmerzen hat. Blasses Gesicht, gepresste Lippen.",
            descriptionB1: "Jonas sagt 'Mir gehts gut'. Aber er hat Schmerzen. Sein Gesicht ist blass.",
            highlight: true,
          },
          {
            id: "tag2",
            time: "Tag 2",
            title: "Schonatmung",
            description: "Jonas liegt nur flach, bewegt sich kaum, atmet flach. Kein Husten, kein Aufstehen, isst wenig.",
            descriptionB1: "Jonas liegt ganz still. Er atmet flach. Er isst wenig.",
          },
          {
            id: "tag3",
            time: "Tag 3",
            title: "Obstipation",
            description: "Seit 2 Tagen kein Stuhlgang. Bauch geblaeht. Erst jetzt sagt Jonas: 'Mein Bauch tut weh' — gemeint sind die OP-Schmerzen von Tag 1.",
            descriptionB1: "Jonas hat seit 2 Tagen nicht auf Toilette gekonnt. Sein Bauch tut weh.",
          },
          {
            id: "tag5",
            time: "Tag 5",
            title: "Emotionaler Zusammenbruch",
            description: "Nachtschwester findet Jonas weinend: 'Ich will zu Mama. Warum bin ich immer allein?'",
            descriptionB1: "Jonas weint nachts allein. Er vermisst seine Mama.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: Slider — Wann haette man eingreifen koennen? (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s7-10",
    phase: "s7",
    stepType: "slider",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    contentC1: {
      title: "Der entscheidende Moment",
      body: "Fruehe Beobachtung kann Komplikationsketten verhindern. Je frueher ein Problem erkannt wird, desto einfacher ist die Loesung.",
    },
    contentB1: {
      title: "Wann haette man helfen koennen?",
      body: "Wenn man frueher hinschaut, kann man Probleme frueher loesen.",
    },
    question: {
      fragetext: "An welchem Tag haette die Pflegekraft die Kette unterbrechen koennen?",
      slider: {
        instruction: "Waehle den Tag, an dem die Beobachtung den Unterschied gemacht haette.",
        unit: "Tag",
        min: 1,
        max: 5,
        step: 1,
        correctValue: 1,
        tolerance: 0,
        explanation: "Bereits an Tag 1 zeigten Mimik und Koerpersprache Schmerzen an. Ein altersgerechtes Schmerzassessment (KUSS-Skala) haette die gesamte Kette verhindert.",
        explanationB1: "Schon an Tag 1! Das blasse Gesicht und die gepressten Lippen zeigten Schmerzen. Mit der richtigen Frage haette man sofort helfen koennen.",
      },
    },
  },

  // =============================================================
  // Step 11: MC — Altersgerechtes Assessment (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s7-11",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Assessment bei Kindern",
      body: "Jonas sagt 'Mir gehts gut', aber seine Mimik zeigt Schmerzen. Das Pflegeprozess-Modell verlangt eine systematische Datenerhebung — auch bei Kindern.",
    },
    contentB1: {
      title: "Schmerzerfassung bei Kindern",
      body: "Jonas sagt, es geht ihm gut. Aber sein Gesicht zeigt Schmerzen. Wie misst man Schmerzen bei einem Kind?",
    },
    question: {
      fragetext: "Welches Schmerzassessment ist fuer einen 8-Jaehrigen wie Jonas geeignet?",
      optionen: [
        {
          text: "KUSS-Skala (Kindliche Unbehagens- und Schmerzskala)",
          isCorrect: true,
          explanation: "Die KUSS-Skala erfasst Schmerzen bei Kindern ueber Beobachtung: Weinen, Gesichtsausdruck, Rumpfhaltung, Beinhaltung, Unruhe. Sie eignet sich besonders fuer Kinder, die Schmerzen nicht benennen koennen.",
          explanationB1: "Richtig! Die KUSS-Skala ist fuer Kinder gemacht. Man beobachtet das Kind: Weint es? Wie ist sein Gesicht?",
        },
        {
          text: "NRS (Numerische Rating-Skala, 0-10)",
          isCorrect: false,
          explanation: "Die NRS verlangt abstrakte Zahleneinschaetzung. Fuer 8-Jaehrige ist das oft zu schwer — besonders wenn sie wie Jonas 'tapfer' sein wollen und die Zahl niedrig ansetzen.",
          explanationB1: "Die Zahlenskala ist fuer Kinder schwierig. Ein Kind sagt vielleicht '2', obwohl es '7' fuehlt.",
        },
        {
          text: "VAS (Visuelle Analogskala)",
          isCorrect: false,
          explanation: "Die VAS (Linie von 0-10 cm) erfordert abstraktes Denken und ist fuer juengere Kinder ungeeignet. Bei einem 8-Jaehrigen waere eine Gesichter-Skala besser.",
          explanationB1: "Diese Skala ist fuer Kinder zu schwer. Kinder koennen mit einer Linie wenig anfangen.",
        },
        {
          text: "Keine Skala noetig — das Kind sagt ja, es geht ihm gut",
          isCorrect: false,
          explanation: "Die verbale Aussage allein reicht nicht — besonders bei Kindern. Systematische Beobachtung ist die Kernkompetenz der Pflege. Die Mimik zeigt mehr als die Worte.",
          explanationB1: "Falsch! Kinder sagen oft nicht die Wahrheit ueber Schmerzen. Man muss genau hinschauen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 12: Categorize — Beobachtung bei verschiedenen Altersgruppen (SORTIERSTATION)
  // =============================================================
  {
    stepId: "le01-s7-12",
    phase: "s7",
    stepType: "categorize",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-beobachtung",
    contentC1: {
      title: "Beobachtung ueber Altersgruppen hinweg",
      body: "Systematische Beobachtung ist bei jedem Patienten zentral. Aber was man beobachtet, haengt auch vom Alter ab.",
    },
    contentB1: {
      title: "Beobachtung bei verschiedenen Altersgruppen",
      body: "Man beobachtet bei Kindern etwas anderes als bei alten Menschen. Manches ist aber gleich.",
    },
    question: {
      fragetext: "Ordne die Beobachtungsmerkmale der richtigen Gruppe zu.",
      categories: [
        { name: "Gilt fuer 8-Jaehrige" },
        { name: "Gilt fuer 82-Jaehrige" },
        { name: "Gilt fuer beide" },
      ],
      categoryItems: [
        { text: "Spielverhalten beobachten", correctCategory: 0 },
        { text: "Sturzrisiko einschaetzen", correctCategory: 1 },
        { text: "Mimik und Gestik beobachten", correctCategory: 2 },
        { text: "Eltern als Informationsquelle einbeziehen", correctCategory: 0 },
        { text: "Vitalzeichen kontrollieren", correctCategory: 2 },
        { text: "Verwirrtheit oder Desorientiertheit erkennen", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // Step 13: Text — Rollen und Rollenkonflikte (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s7-13",
    phase: "s7",
    stepType: "text",
    bloomLevel: 4,
    kompetenzbereich: "KB-III",
    quellen: ["Q6 S.267-270"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Rollen und Rollenkonflikte",
      body: "Jeder Mensch hat mehrere Rollen gleichzeitig. Bei Interrollenkonflikten widersprechen sich verschiedene Rollen. Yasemin ist Auszubildende UND Vertrauensperson — das kann kollidieren. Herr Al-Rashid hat kulturelle Rollenerwartungen, die mit dem Krankenhaus-Setting kollidieren. Tuckman beschreibt 5 Teamphasen: Forming, Storming, Norming, Performing, Adjourning.",
    },
    contentB1: {
      title: "Verschiedene Rollen",
      body: "Jeder Mensch hat mehrere Rollen. Manchmal passen sie nicht zusammen. Yasemin ist Auszubildende und gleichzeitig Vertrauensperson. In Teams gibt es 5 Phasen nach Tuckman.",
    },
    wusstestDuDas: "Der Begriff Interrollenkonflikt beschreibt, wenn zwei verschiedene Rollen einer Person sich widersprechen — z.B. Pflegekraft und Mutter sein.",
  },

  // =============================================================
  // Step 14: Reveal — Tuckmans 5 Phasen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s7-14",
    phase: "s7",
    stepType: "reveal",
    bloomLevel: 3,
    kompetenzbereich: "KB-III",
    quellen: ["Q6 S.270"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Teamphasen nach Tuckman",
      body: "Jedes Pflegeteam durchlaeuft typische Entwicklungsphasen. Das Wissen darueber hilft, Konflikte einzuordnen und Geduld zu bewahren.",
    },
    contentB1: {
      title: "Wie Teams sich entwickeln",
      body: "Jedes Team durchlaeuft 5 Phasen. Es ist normal, dass es am Anfang schwierig ist.",
    },
    question: {
      fragetext: "Decke die 5 Teamphasen nach Tuckman auf.",
      reveal: {
        instruction: "Tippe auf jede Karte, um die Phase zu entdecken.",
        revealMode: "sequential",
        cards: [
          {
            id: "forming",
            label: "Phase 1: Forming",
            content: "Orientierung — Das Team lernt sich kennen. Hoeflichkeit, Unsicherheit, vorsichtiges Abtasten.",
            contentB1: "Kennenlernen. Alle sind hoeflich und unsicher.",
            icon: "👋",
          },
          {
            id: "storming",
            label: "Phase 2: Storming",
            content: "Konfrontation — Unterschiedliche Meinungen treffen aufeinander. Konflikte und Machtkampf gehoeren dazu.",
            contentB1: "Konflikte. Die Menschen sind verschiedener Meinung. Das ist normal.",
            icon: "⚡",
          },
          {
            id: "norming",
            label: "Phase 3: Norming",
            content: "Regelbildung — Das Team einigt sich auf gemeinsame Normen und Ablaeufe. Zusammenarbeit wird besser.",
            contentB1: "Regeln. Das Team einigt sich. Alle wissen, wie es laeuft.",
            icon: "📋",
          },
          {
            id: "performing",
            label: "Phase 4: Performing",
            content: "Leistung — Das Team arbeitet effektiv zusammen. Starkes Wir-Gefuehl, offene Kommunikation, gegenseitige Anerkennung.",
            contentB1: "Gute Zusammenarbeit. Das Team funktioniert gut und hilft sich gegenseitig.",
            icon: "🏆",
          },
          {
            id: "adjourning",
            label: "Phase 5: Adjourning",
            content: "Aufloesung — Das Team loest sich auf, z.B. am Ende eines Praxiseinsatzes oder bei Personalwechsel.",
            contentB1: "Abschied. Das Team loest sich auf. Das passiert z.B. am Ende eines Einsatzes.",
            icon: "👋",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 15: Matching — Tuckman-Phasen + Pflege-Situation (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s7-15",
    phase: "s7",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-III",
    quellen: ["Q6 S.270"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Teamphasen erkennen",
      body: "In der Pflege durchlaufen Teams diese Phasen immer wieder — bei neuen Kollegen, neuen Auszubildenden oder nach Umstrukturierungen.",
    },
    contentB1: {
      title: "Welche Phase ist das?",
      body: "Jede Situation im Team passt zu einer Phase. Ordne richtig zu.",
    },
    question: {
      fragetext: "Ordne jede Pflege-Situation der passenden Tuckman-Phase zu.",
      matchingPairs: [
        { left: "Neue Kollegin im Team — alle sind freundlich-zurueckhaltend", right: "Forming" },
        { left: "Streit ueber den Dienstplan — wer macht Nachtdienst?", right: "Storming" },
        { left: "Team einigt sich auf feste Uebergabezeiten", right: "Norming" },
        { left: "Station laeuft reibungslos, alle unterstuetzen sich", right: "Performing" },
        { left: "Praxiseinsatz endet, Auszubildende wird verabschiedet", right: "Adjourning" },
      ],
    },
  },

  // =============================================================
  // Step 16: Timer — Speed-Fragen + Interleaving (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s7-16",
    phase: "s7",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q6 S.270", "Q7 S.285"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Speed-Runde: Transfer + Interleaving",
      body: "Schnelle Fragen aus verschiedenen Themenbereichen — auch aus frueheren Sessions.",
    },
    contentB1: {
      title: "Schnelle Fragen",
      body: "Beantworte die Fragen so schnell wie moeglich. Manche Fragen kommen aus frueheren Sessions.",
    },
    question: {
      fragetext: "Beantworte jede Frage in 15 Sekunden.",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Welche Tuckman-Phase ist von Konflikten gepraegt?",
          options: ["Forming", "Storming", "Norming"],
          correctIndex: 1,
        },
        {
          question: "Wie reagierst du auf kulturelle Pflegepraeferenzen?",
          options: ["Ignorieren", "Organisation anpassen", "Patient erziehen"],
          correctIndex: 1,
        },
        {
          question: "INTERLEAVING: Was ist ein Dekubitus?",
          options: ["Lungenentzuendung", "Druckgeschwuer", "Knochenbruch"],
          correctIndex: 1,
        },
        {
          question: "INTERLEAVING: Welche Prophylaxe verhindert Lungenentzuendungen bei bettlaegerigen Patienten?",
          options: ["Dekubitusprophylaxe", "Thromboseprophylaxe", "Pneumonieprophylaxe"],
          correctIndex: 2,
        },
        {
          question: "Welches ethische Prinzip betrifft 'nicht schaden'?",
          options: ["Autonomie", "Nonmalefizienz", "Benefizienz"],
          correctIndex: 1,
        },
      ],
    },
  },

  // =============================================================
  // Step 17: Branching — Fixierung bei Demenz (PRAXIS-SIM, B5)
  // =============================================================
  {
    stepId: "le01-s7-17",
    phase: "s7",
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285", "Q7 S.283-284"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethisches Dilemma: Fixierung",
      body: "Eine 85-jaehrige Patientin mit Demenz zieht sich immer wieder den Venenzugang heraus. Die Aerztin ordnet eine Fixierung der Haende an. Als Pflegefachkraft zweifelst du an der Massnahme.",
      fallbezug: "Nachtdienst. Die Patientin ist unruhig und zieht zum dritten Mal den Venenzugang.",
    },
    contentB1: {
      title: "Schwere Entscheidung: Festbinden?",
      body: "Eine alte Patientin mit Demenz zieht sich immer die Nadel aus dem Arm. Die Aerztin sagt: Haende festbinden. Ist das richtig?",
      fallbezug: "Die Patientin ist nachts unruhig. Sie zieht sich immer die Nadel raus.",
    },
    question: {
      fragetext: "Wie gehst du mit der Fixierungsanordnung um?",
      branchingOptions: [
        {
          text: "Die Anordnung sofort umsetzen — die Aerztin hat das entschieden.",
          feedback: "Pflegefachkraefte haben eine eigenstaendige Verantwortung. Blindes Befolgen einer Anordnung ohne Pruefung von Alternativen ist ethisch problematisch. Autonomie der Patientin und Pflege-Charta Art. 2 (Unversehrtheit) muessen abgewogen werden.",
          feedbackB1: "Einfach machen, weil die Aerztin es sagt? Pflegende muessen auch selber nachdenken. Es gibt vielleicht bessere Loesungen.",
          isCorrect: false,
        },
        {
          text: "Alternativen vorschlagen: 1:1-Betreuung, Armschiene statt Fixierung, Venenzugang an anderer Stelle.",
          feedback: "Du waegst die ethischen Prinzipien ab: Autonomie und Unversehrtheit der Patientin gegen die medizinische Notwendigkeit. Alternativen zur Fixierung pruefen entspricht dem Prinzip der Nonmalefizienz.",
          feedbackB1: "Sehr gut! Du suchst nach besseren Loesungen, bevor du jemanden festhindest. Das ist professionelle Pflege.",
          isCorrect: true,
        },
        {
          text: "Die Anordnung verweigern — Fixierung ist immer falsch.",
          feedback: "Grundsaetzliche Verweigerung ohne Alternativvorschlag ist nicht professionell. Es gibt Situationen, in denen Fixierung als letztes Mittel noetig sein kann — aber erst nach Pruefung aller Alternativen.",
          feedbackB1: "Einfach nein sagen ist auch nicht richtig. Man muss eine bessere Loesung anbieten.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 18: Crossword — Gesamtbegriffe S7 (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s7-18",
    phase: "s7",
    stepType: "crossword",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Kreuzwortraetsel: Transfer-Session",
      body: "Teste dein Wissen aus dieser Session mit einem Kreuzwortraetsel.",
    },
    contentB1: {
      title: "Kreuzwortraetsel",
      body: "Finde die richtigen Woerter. Die Hinweise helfen dir.",
    },
    question: {
      fragetext: "Loese das Kreuzwortraetsel mit Begriffen aus dieser Session.",
      crosswordWords: [
        { word: "TRAJEKT", clue: "Verlaufsmodell chronischer Erkrankungen nach Corbin und Strauss" },
        { word: "STORMING", clue: "Tuckman-Phase mit Konflikten und Machtkampf" },
        { word: "LEININGER", clue: "Theoretikerin der kulturkongruenten Pflege" },
        { word: "AUTONOMIE", clue: "Ethisches Prinzip: Selbstbestimmung des Patienten" },
        { word: "FORMING", clue: "Erste Tuckman-Phase: Kennenlernen und Orientierung" },
        { word: "KUSS", clue: "Schmerzskala fuer Kinder: Kindliche Unbehagens- und Schmerz..." },
      ],
    },
  },

  // =============================================================
  // Step 19: Reflection — OQ4 Ethik + Kultur (SCHREIBTISCH, B5)
  // =============================================================
  {
    stepId: "le01-s7-19",
    phase: "s7",
    stepType: "reflection",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285", "Q4 S.133-135", "Q7 S.283-284"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethische Reflexion: Kultur und Pflege",
      body: "Herr Al-Rashid lehnt Koerperpflege durch eine weibliche Pflegekraft ab. Eine Kollegin sagt: 'In Deutschland muss er das akzeptieren.'",
    },
    contentB1: {
      title: "Deine Meinung: Kultur und Pflege",
      body: "Herr Al-Rashid will keine Frau bei der Koerperpflege. Eine Kollegin sagt: 'In Deutschland muss er das akzeptieren.'",
    },
    question: {
      fragetext: "Wie beurteilst du die Aussage der Kollegin? Begruende deine Antwort.",
      reflection: {
        prompt: "Wie beurteilst du die Aussage der Kollegin? Welche ethischen Prinzipien sind betroffen? Was wuerdest du tun?",
        placeholder: "Ich bin nicht einverstanden mit dieser Aussage, weil...",
        systemPrompt: "Bewerte die Antwort auf Basis von: 1) Ethisches Prinzip korrekt benannt (Autonomie, Wuerde) 2) Kulturelle Perspektive beruecksichtigt (Leininger) 3) Praktische Loesung vorgeschlagen. Musterantwort: Die Aussage ignoriert Autonomie und Pflege-Charta Art. 1. Kulturelle Praeferenzen beruehren die Wuerde. Loesung: maennlichen Kollegen organisieren, mit Patient kommunizieren.",
      },
      musterantwort: "Die Aussage ignoriert das Prinzip der Autonomie und die Pflege-Charta Art. 1 (Selbstbestimmung). Kulturelle Praeferenzen bei der Koerperpflege beruehren die Wuerde und Intimsphaere. Leininger betont kulturkongruente Pflege. Loesung: maennliche Pflegekraft organisieren, wenn moeglich. Sonst mit dem Patienten eine akzeptable Loesung erarbeiten.",
      bewertungskriterien: [
        "Ethisches Prinzip korrekt benannt (Autonomie, Wuerde)",
        "Kulturelle Perspektive beruecksichtigt (Leininger)",
        "Praktische Loesung vorgeschlagen",
      ],
      satzanfaengeB1: [
        "Ich bin nicht einverstanden mit dieser Aussage, weil...",
        "Der Patient hat das Recht...",
        "Eine bessere Loesung waere...",
      ],
    },
  },

  // =============================================================
  // Step 20: Confidence — Selbsteinschaetzung (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s7-20",
    phase: "s7",
    stepType: "confidence",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Selbsteinschaetzung: Transfer",
      body: "Pruefe, wie sicher du dich nach dieser Session fuehlst.",
    },
    contentB1: {
      title: "Wie sicher bist du jetzt?",
      body: "Schaetze dich ein: Was kannst du nach dieser Session?",
    },
    question: {
      fragetext: "Wie sicher fuehlst du dich bei diesen Aussagen?",
      confidenceCards: [
        {
          statement: "Ich kann Kommunikation auf Kinder anpassen.",
          statementB1: "Ich weiss, wie man mit Kindern ueber Schmerzen spricht.",
          isTrue: true,
          explanation: "Kinder brauchen altersgerechte Assessments wie die KUSS-Skala und eine aufmerksame Beobachtung nonverbaler Signale.",
          explanationB1: "Bei Kindern muss man genau hinschauen und passende Methoden nutzen.",
        },
        {
          statement: "Ich erkenne kulturelle Barrieren in der Pflegebeziehung.",
          statementB1: "Ich erkenne, wenn ein Patient wegen seiner Kultur Probleme hat.",
          isTrue: true,
          explanation: "Kulturelle Praeferenzen beeinflussen die Pflegebeziehung. Leininger betont kulturkongruente Pflege.",
          explanationB1: "Kultur beeinflusst, wie Menschen Pflege erleben. Das muss man beachten.",
        },
        {
          statement: "Ich kenne Tuckmans 5 Teamphasen.",
          statementB1: "Ich kenne die 5 Phasen, die ein Team durchlaeuft.",
          isTrue: true,
          explanation: "Forming, Storming, Norming, Performing, Adjourning — diese Phasen helfen, Teamkonflikte einzuordnen.",
          explanationB1: "Kennenlernen, Konflikte, Regeln, gute Arbeit, Abschied — das sind die 5 Phasen.",
        },
        {
          statement: "Ich kann ethische Dilemmata in der Pflege analysieren.",
          statementB1: "Ich kann bei schwierigen Entscheidungen die ethischen Prinzipien anwenden.",
          isTrue: true,
          explanation: "Ethische Dilemmata erfordern die Abwaegung der 4 Prinzipien: Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit.",
          explanationB1: "Bei schwierigen Fragen prueft man: Selbstbestimmung, Wohltun, Nicht-Schaden, Gerechtigkeit.",
        },
      ],
    },
  },

  // =============================================================
  // Step 21: Freetext — OQ3 Jonas Pflegeprozess (SCHREIBTISCH, B4)
  // =============================================================
  {
    stepId: "le01-s7-21",
    phase: "s7",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79", "Q8 S.321-322"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeprozess auf Jonas anwenden",
      body: "Jonas liegt nach der OP im Bett und sagt 'Mir gehts gut'. Sein Gesicht ist blass, die Lippen zusammengepresst.",
      fallbezug: "Kinderchirurgische Station, Tag 1 nach Appendektomie.",
    },
    contentB1: {
      title: "Pflegeprozess bei Jonas",
      body: "Jonas sagt 'Mir gehts gut'. Aber er hat Schmerzen. Was machst du?",
      fallbezug: "Jonas liegt nach der Blinddarm-OP im Bett.",
    },
    question: {
      fragetext: "Welche 3 Schritte des Pflegeprozesses wendest du bei Jonas an? Beschreibe konkret.",
      musterantwort: "Schritt 1 (Informationssammlung): Beobachtung der Mimik — blasses Gesicht und gepresste Lippen deuten auf Schmerzen. Altersgerechtes Assessment mit KUSS-Skala durchfuehren. Schritt 2 (Probleme erkennen): Verdecktes Pflegeproblem — Schmerzen, die Jonas nicht benennt. Schritt 3 (Ziel): Jonas aeussert Schmerzen frei und erhaelt adaequate Schmerztherapie.",
      bewertungskriterien: [
        "Beobachtung korrekt gedeutet (Mimik zeigt Schmerz)",
        "Mindestens 3 Schritte des Pflegeprozesses benannt",
        "Altersgerechte Anpassung erkannt (KUSS-Skala fuer Kind)",
      ],
      satzanfaengeB1: [
        "Zuerst beobachte ich...",
        "Dann erkenne ich das Problem...",
        "Mein Ziel ist...",
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Session-Abschluss (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s7-22",
    phase: "s7",
    stepType: "summary",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Das Wichtigste aus Session 7",
      body: "Du hast gelernt, Gelerntes auf neue Patienten zu uebertragen — mit unterschiedlichem Alter, unterschiedlicher Kultur und unterschiedlichen Herausforderungen.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Du hast geueebt, dein Wissen bei verschiedenen Patienten anzuwenden.",
    },
    question: {
      fragetext: "Zusammenfassung der Session.",
      summary: {
        reflexionRueckbezug: "In Session 1 hast du gefragt: Was ist Pflege? Heute hast du gesehen: Pflege bedeutet, gleiche Prinzipien bei ganz verschiedenen Menschen anzuwenden.",
        kernaussagen: [
          "Gleiche Pflegeprinzipien gelten bei verschiedenen Patienten — unabhaengig von Alter und Kultur.",
          "Kulturelle Werte respektieren, OHNE die Pflegequalitaet zu vernachlaessigen — das ist kulturkongruente Pflege nach Leininger.",
          "Fruehe Beobachtung kann Komplikationsketten verhindern — wie bei Jonas gezeigt.",
          "Ethische Dilemmata erfordern Abwaegung: Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit.",
          "Teams entwickeln sich in 5 Phasen nach Tuckman — Konflikte gehoeren dazu.",
        ],
      },
    },
  },
];

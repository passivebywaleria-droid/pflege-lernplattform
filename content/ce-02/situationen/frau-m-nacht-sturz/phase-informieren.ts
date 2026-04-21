// CE-02 Situation Frau M. — Phase 1: Informieren & Ankommen
// Steps: 5 · Bloom: B2-B3 · Zeit: ~15-25 Min
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-frau-m-informieren",
  phase: "informieren",
  titel: "Informieren & Ankommen",
  titelB1: "Ankommen bei Frau M.",
  kontext:
    "Du stehst auf dem Flur der internistischen Station. Es ist 02:48 Uhr. Frau Keller hat dich gerade zu Zimmer 14 geschickt. Du weißt: Frau M., 82, Pneumonie, ist gerade gestürzt. Mehr noch nicht. In den nächsten Minuten entscheidet sich, wie die Situation für Frau M. weitergeht — emotional und fachlich.",
  kontextB1:
    "Du stehst im Flur der internistischen Station. Es ist 02:48 Uhr. Frau Keller schickt dich zu Zimmer 14. Du weißt: Frau M., 82 Jahre, Pneumonie, ist gerade gestürzt. Mehr nicht. Was du jetzt tust, ist wichtig.",
  kernSteps: [
    // Step 1.1 — SBAR-Übergabe
    {
      stepId: "ce02-frau-m-info-01-uebergabe-sbar",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Krankenhausflur in der Nachtschicht, Pflegekraft flüstert, warmes gedämpftes Licht",
      bildhinweis:
        "Night shift hospital corridor, nurse whispering, soft warm overhead lighting, calm atmosphere, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Übergabe auf dem Flur",
        body: "Frau Keller flüstert auf dem Flur: _\"Frau M., Zimmer 14, grad gestürzt, links neben dem Bett, ansprechbar, klagt über Hüftschmerz. Ich übernehme die Infusion nebenan — schau du mal.\"_ Du liest kurz die Pflegeübergabe in SBAR-Struktur: **S**ituation — Sturz vor 7 Min. **B**ackground — Pneumonie Tag 3, Parkinson II. **A**ssessment — ansprechbar, orientiert, Hüftschmerz links. **R**ecommendation — Assessment + Arzt informieren falls nötig. SBAR ist die Standard-Struktur für klinische Übergaben — sie macht Übergaben vollständig und klar.",
        fallbezug:
          "Frau M. (82, Pneumonie Tag 3) ist in der Nacht gestürzt. Du bist Nachtdienst im 2. Ausbildungsdrittel, arbeitest mit Frau Keller (examinierte Pflegekraft).",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Die Übergabe",
        body: "Frau Keller flüstert: _\"Frau M., Zimmer 14. Sie ist gerade gestürzt, links neben dem Bett. Sie ist wach und klagt über Schmerzen in der Hüfte. Ich gehe zu einem anderen Patienten — schau du mal nach ihr.\"_ Du bekommst eine kurze Pflege-Übergabe (SBAR-Struktur): **S** = Sturz vor 7 Minuten. **B** = Pneumonie Tag 3, Parkinson. **A** = wach, orientiert, Schmerzen in der linken Hüfte. **R** = Assessment machen, Arzt rufen wenn nötig. SBAR ist ein Standard — so bleibt die Übergabe klar und vollständig.",
        fallbezug:
          "Frau M. ist 82. Sie ist seit 3 Tagen im Krankenhaus wegen Lungenentzündung. Heute Nacht ist sie gestürzt. Du bist Schülerin im Nachtdienst.",
        glossarBegriffe: [],
      },
    },

    // Step 1.2 — Confidence VOR Betreten
    {
      stepId: "ce02-frau-m-info-02-vor-betreten",
      phase: 1,
      stepType: "confidence",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-frau-m-info-confidence-vorher",
      tag: "pflege",
      contentC1: {
        title: "Wie sicher fühlst du dich?",
        body: "Bevor du das Zimmer betrittst: Mach einen Moment Pause. Das ist eine herausfordernde Situation — nachts, allein, mit einer gerade gestürzten Patientin. Wir fragen dich jetzt nach deiner ehrlichen Selbsteinschätzung. Es gibt kein richtig oder falsch.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wie sicher fühlst du dich?",
        body: "Bevor du ins Zimmer gehst: Kurz stehenbleiben. Die Situation ist schwer — nachts, alleine, bei einer gestürzten Patientin. Wie sicher fühlst du dich gerade? Es gibt kein richtig oder falsch.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie sicher fühlst du dich, jetzt in das Zimmer zu gehen und bei Frau M. das Erstgespräch zu führen?",
        confidenceCards: [
          {
            statement:
              "Sehr unsicher — ich weiß nicht genau, was ich als erstes tun soll",
            isTrue: false,
            explanation:
              "Das ist in Ordnung — genau dafür arbeiten wir die Schritte jetzt gemeinsam durch.",
          },
          {
            statement: "Mittelmäßig — ich habe eine Idee, bin aber nicht sicher",
            isTrue: false,
            explanation:
              "Eine gute Ausgangsposition — du hast Vorwissen, wir vertiefen es gleich.",
          },
          {
            statement: "Sicher — ich weiß, worauf es ankommt",
            isTrue: true,
            explanation:
              "Super — die nächsten Steps helfen dir, dein Vorgehen zu systematisieren.",
          },
        ],
      },
    },

    // Step 1.3 — MC erste Priorität (fallstrick)
    {
      stepId: "ce02-frau-m-info-03-erste-prioritaet",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-frau-m-info-prioritaet",
      tag: "pflege",
      contentC1: {
        title: "Erste Priorität beim Betreten",
        body: "Du stehst vor der Zimmertür von Frau M. Du weißt: Sie ist gestürzt, sie ist ansprechbar, sie klagt über Hüftschmerz. Jetzt entscheidet sich, was als erstes passiert.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Du stehst vor dem Zimmer von Frau M. Sie ist gestürzt. Sie ist wach. Sie hat Schmerzen in der Hüfte. Was tust du als erstes?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Was tust du beim Betreten des Zimmers ZUERST?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Blutdruck messen",
            isCorrect: false,
            explanation:
              "Nicht ganz — Vitalzeichen sind wichtig, aber zuerst brauchst du den Überblick: Ist Frau M. wach? Orientiert? Gibt es sichtbare Verletzungen? Das Messen kommt als Teil des strukturierten Assessments, nach der ersten Einschätzung.",
            explanationB1:
              "Nicht ganz. Blutdruck ist wichtig, aber nicht zuerst. Zuerst schaust du: Ist Frau M. wach? Wo hat sie Schmerzen? Danach misst du Blutdruck.",
          },
          {
            text: "Licht voll einschalten, Frau M. begrüßen, Bewusstsein prüfen",
            isCorrect: true,
            explanation:
              "Genau. Das ist der Kern der Ersteinschätzung: Licht (damit du sehen kannst — aber bewusst gedämpft, kein Schockmoment mitten in der Nacht), begrüßen (Würde, Beruhigung), Bewusstsein prüfen (ist sie wach, orientiert zu Person/Ort/Zeit?). Diese drei Handlungen laufen fast gleichzeitig ab und geben dir in Sekunden einen strukturierten Eindruck.",
            explanationB1:
              "Richtig. Das ist das Wichtigste zuerst: Licht an (damit du sehen kannst), Frau M. ansprechen (freundlich, beruhigend), prüfen ob sie wach ist. Das dauert nur Sekunden und zeigt dir, wie es ihr geht.",
          },
          {
            text: "Nachtschwester rufen",
            isCorrect: false,
            explanation:
              "Nicht ganz — du BIST die erste Pflegeperson vor Ort (Frau Keller hat dich bewusst geschickt). Hilfe holen ist später sinnvoll, wenn du eine Verletzung vermutest oder beim Transfer eine zweite Person brauchst. Zuerst machst du dir selbst ein Bild.",
            explanationB1:
              "Nicht ganz. Du bist selbst die erste Pflegekraft vor Ort. Erst schaust du selbst, was passiert ist. Hilfe holst du später, wenn du sie brauchst.",
          },
          {
            text: "Frau M. sofort ins Bett heben",
            isCorrect: false,
            explanation:
              "Nein — das ist gefährlich. Nach einem Sturz musst du FIRST Verletzungen ausschließen (Hüftfraktur zeigt sich durch Bein-Verkürzung + Außenrotation — dann nicht bewegen!). Unsanftes Aufheben kann einen nicht erkannten Bruch massiv verschlimmern. Merke: Prüfen vor Bewegen. Der Patient ist auf dem Boden erstmal sicher.",
            explanationB1:
              "Nein — das ist gefährlich! Nach einem Sturz musst du zuerst schauen, ob etwas gebrochen ist. Bei Hüftbruch (Bein ist kürzer und dreht nach außen) darfst du NICHT bewegen. Immer: Prüfen kommt vor Bewegen.",
          },
        ],
      },
    },

    // Step 1.4 — Dialog (3 Phasen)
    {
      stepId: "ce02-frau-m-info-04-zimmer-betreten",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-info-dialog",
      tag: "pflege",
      contentC1: {
        title: "Das Zimmer betreten",
        body: "Du betrittst das Zimmer. Du knipst das indirekte Licht an (nicht die Deckenleuchte — Frau M. ist gerade gestürzt, kein Schockmoment). Du kniest auf Augenhöhe zu Frau M. am Boden. Sie liegt neben dem Bett. Sie ist bei Bewusstsein, ihre Hände sind im Schoß gefaltet. Sie sieht dich an.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Ins Zimmer gehen",
        body: "Du gehst ins Zimmer. Du machst das kleine Licht an (nicht das große — das ist zu hell für Frau M. nach dem Schreck). Du gehst in die Knie, damit du auf ihrer Höhe bist. Frau M. liegt neben dem Bett. Sie ist wach. Ihre Hände sind im Schoß gefaltet. Sie schaut dich an.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Frau M.",
        patientName: "Frau M.",
        dialogPhases: [
          {
            context:
              "Frau M. blickt dich an. Ihre Stimme ist leise, ihre Hände liegen gefaltet im Schoß. Sie sagt:",
            contextB1:
              "Frau M. schaut dich an. Sie spricht leise. Ihre Hände sind gefaltet. Sie sagt:",
            speaker: "Frau M.",
            options: [
              {
                text: "\"Sie machen gar keine Umstände, Frau M. Lassen Sie uns in Ruhe schauen, wie es Ihnen geht.\"",
                textB1:
                  "\"Sie machen keine Umstände. Wir schauen jetzt in Ruhe, wie es Ihnen geht.\"",
                patientResponse:
                  "Frau M. atmet hörbar aus. Ihre Schultern sinken leicht. \"Danke. Das ist so ungewohnt für mich, hier auf dem Boden…\"",
                patientResponseB1:
                  "Frau M. atmet aus. Die Schultern werden weicher. \"Danke. Es ist so komisch, hier auf dem Boden zu liegen.\"",
                score: 3,
                feedback:
                  "Validierend und würdevoll. Du nimmst ihr das Gefühl der Last. Gleichzeitig bleibst du professionell und kündigst das strukturierte Vorgehen an. Genau die richtige Tonlage für Phase 1.",
                feedbackB1:
                  "Richtig gut. Du zeigst: Sie ist keine Last. Du sagst auch: Jetzt schauen wir strukturiert nach. Die Mischung ist perfekt.",
              },
              {
                text: "\"Kein Problem, solche Stürze passieren hier jede Woche. Legen wir los, damit Sie wieder ins Bett kommen.\"",
                textB1:
                  "\"Kein Problem, das passiert hier oft. Schnell, damit Sie wieder ins Bett kommen.\"",
                patientResponse:
                  "Frau M. schaut zur Seite. Sie schweigt einen Moment. Dann: \"Ja … natürlich.\"",
                patientResponseB1:
                  "Frau M. schaut weg. Sie ist kurz still. Dann sagt sie: \"Ja, natürlich.\"",
                score: 1,
                feedback:
                  "Gut gemeint — aber problematisch. 'Passiert jede Woche' kann entwertend wirken ('ist ja nichts Besonderes'). 'Damit Sie wieder ins Bett kommen' erzeugt Zeitdruck. Frau M. wird sich nicht ernst genommen fühlen.",
                feedbackB1:
                  "Nicht so gut. 'Passiert jede Woche' ist nicht schön für sie. 'Schnell, damit Sie wieder ins Bett kommen' macht Druck. Frau M. fühlt sich dann nicht wichtig.",
              },
              {
                text: "\"Sie haben Glück, es ist ja nichts passiert. Machen Sie sich keine Sorgen.\"",
                textB1:
                  "\"Sie haben Glück, es ist nichts passiert. Machen Sie sich keine Sorgen.\"",
                patientResponse:
                  "Frau M. zögert. \"Woher wissen Sie, dass nichts passiert ist? Ich habe solche Schmerzen in der Hüfte …\"",
                patientResponseB1:
                  "Frau M. zögert. \"Wie wissen Sie, dass nichts passiert ist? Meine Hüfte tut so weh …\"",
                score: 0,
                feedback:
                  "Fehlinformation. Du weißt noch nicht, ob etwas passiert ist — die Verletzungsprüfung steht noch aus. Solche Aussagen können rechtlich und ethisch problematisch sein. Frau M. spürt die Leere hinter der Beruhigung.",
                feedbackB1:
                  "Das war falsch. Du weißt noch nicht, ob etwas passiert ist. Du hast noch nicht nachgeschaut. Solche Worte sind gefährlich — Frau M. merkt das.",
              },
            ],
          },
          {
            context:
              "Du setzt dich neben Frau M. auf den Boden, Rücken zur Wand, damit ihr auf einer Ebene seid. Du fragst ruhig:",
            contextB1:
              "Du setzt dich neben Frau M. auf den Boden. Ihr seid auf einer Höhe. Du fragst ruhig:",
            speaker: "Du",
            options: [
              {
                text: "\"Frau M., wo tut es weh? Und können Sie alles bewegen?\"",
                textB1:
                  "\"Frau M., wo tut es weh? Können Sie alles bewegen?\"",
                patientResponse:
                  "\"Die linke Hüfte, innen. Und ich glaube, meine Zehen kann ich bewegen …\" — sie probiert es.",
                patientResponseB1:
                  "\"Die linke Hüfte, innen. Meine Zehen bewegen sich, glaube ich …\" — sie probiert es.",
                score: 3,
                feedback:
                  "Klar, konkret, sicher. Mit zwei Fragen bekommst du zwei wichtige Informationen: Schmerzlokalisation (linke Hüfte — möglicher Bereich für eine Hüftfraktur) und grobe Motorik (Zehenbewegung — keine schwere Rückenmarkverletzung).",
                feedbackB1:
                  "Sehr gut. Zwei Fragen, zwei wichtige Antworten: Wo tut es weh (linke Hüfte — Hüftbruch möglich?), kann sie bewegen (Zehen gehen — kein Rückenschaden).",
              },
              {
                text: "\"Versuchen Sie bitte, sich hochzusetzen, dann sehe ich mehr.\"",
                textB1:
                  "\"Bitte setzen Sie sich hoch, dann sehe ich besser.\"",
                patientResponse:
                  "Frau M. versucht es — zieht sofort die Luft scharf ein: \"Nein, das tut zu weh …\"",
                patientResponseB1:
                  "Frau M. versucht es. Sie zieht die Luft scharf ein: \"Nein, es tut weh …\"",
                score: 1,
                feedback:
                  "Zu früh. Bewegung vor Verletzungs-Assessment ist genau das, was du vermeiden sollst. Eine Hüftfraktur könnte sich jetzt verschlimmern. Immer erst fragen (schmerzt es irgendwo?), dann aktiv bewegen lassen — kontrolliert, Schritt für Schritt.",
                feedbackB1:
                  "Zu früh. Erst fragen, dann bewegen. Ein Hüftbruch kann jetzt schlimmer werden. Erst fragen: 'Wo tut es weh?' — dann langsam bewegen.",
              },
              {
                text: "\"Ist Ihnen schlecht? Schwindelig?\"",
                textB1:
                  "\"Ist Ihnen übel? Schwindelig?\"",
                patientResponse:
                  "\"Nein, eigentlich nicht. Nur die Hüfte — und dass ich mich so schäme.\"",
                patientResponseB1:
                  "\"Nein, eigentlich nicht. Nur die Hüfte — und ich schäme mich so.\"",
                score: 2,
                feedback:
                  "Nicht schlecht — Orthostase/Schwindel ist eine plausible Frage (wichtig bei Parkinson + Medikamenten). Aber: Die Hüftschmerzen waren schon in der Übergabe erwähnt — priorisiert fragen wäre 'Wo tut es weh?' zuerst, dann Allgemeinzustand.",
                feedbackB1:
                  "Nicht schlecht — aber die Hüftschmerzen waren schon bekannt. Erst fragen: 'Wo tut es weh?' Dann: 'Schwindelig?'",
              },
            ],
          },
          {
            context:
              "Du hast jetzt: ansprechbar, orientiert, keine sichtbare Deformität, Schmerz linke Hüfte, kann Zehen bewegen. Du entscheidest:",
            contextB1:
              "Du weißt jetzt: Frau M. ist wach und orientiert. Keine sichtbare Verletzung. Schmerz in der linken Hüfte. Sie kann die Zehen bewegen. Du entscheidest:",
            speaker: "Du",
            options: [
              {
                text: "Ich lasse sie auf dem Boden, hole eine Decke, melde kurz an Frau Keller und mache strukturiertes Assessment.",
                textB1:
                  "Ich lasse sie auf dem Boden, hole eine Decke, sage kurz Frau Keller Bescheid und mache das Assessment.",
                patientResponse:
                  "Frau M. nickt. \"Ja, danke. Ich bleibe einfach erstmal liegen, das ist in Ordnung.\"",
                patientResponseB1:
                  "Frau M. nickt. \"Ja, danke. Ich bleibe liegen, das ist ok.\"",
                score: 3,
                feedback:
                  "Perfekt. Struktur vor Hektik. Patientin bleibt in sicherer Position, Wärme (Decke), Kommunikation an Team (Frau Keller), dann systematisches Assessment. Genau das Vorgehen, das DNQP 2022 und das ABCDE-Prinzip vorsehen.",
                feedbackB1:
                  "Genau richtig. Struktur ist wichtiger als Eile. Frau M. liegt sicher. Decke für Wärme. Frau Keller informiert. Dann Schritt für Schritt schauen.",
              },
              {
                text: "Wir heben sie vorsichtig sofort ins Bett — sie wird sich am Boden nicht wohlfühlen.",
                textB1:
                  "Wir heben sie jetzt vorsichtig ins Bett. Auf dem Boden ist es nicht schön.",
                patientResponse:
                  "Frau M. zögert. \"Wenn Sie meinen …\"",
                patientResponseB1:
                  "Frau M. zögert. \"Wenn Sie das sagen …\"",
                score: 0,
                feedback:
                  "Risiko-Entscheidung. Ohne vollständiges Assessment und ohne zweite Kraft ist der Transfer gefährlich. Auch Würde ist gut gemeint, aber Sicherheit hat Vorrang. Erst Assessment komplett, dann Transfer mit zwei Personen.",
                feedbackB1:
                  "Gefährliche Entscheidung. Du hast noch nicht alles geprüft. Du bist allein. Erst alles prüfen, dann heben — mit zweiter Person.",
              },
              {
                text: "Ich rufe sofort den Arzt, weil sie Hüftschmerzen hat.",
                textB1:
                  "Ich rufe sofort den Arzt, weil sie Schmerzen in der Hüfte hat.",
                patientResponse:
                  "Frau M. sagt leise: \"Muss das jetzt sein? Ist das so schlimm?\"",
                patientResponseB1:
                  "Frau M. fragt leise: \"Muss das jetzt sein? Ist es so schlimm?\"",
                score: 1,
                feedback:
                  "Zu früh für Arzt-Ruf. Erst braucht es ein vollständiges Assessment (VZ, Schmerz-Skala, Beweglichkeit, Deformitäten). Erst dann SBAR-Anruf an Arzt mit klarer Empfehlung. Sonst wirkt es hektisch und du kannst keine informierte Übergabe geben.",
                feedbackB1:
                  "Zu früh. Erst alles prüfen: Blutdruck, Schmerz, Bewegung. Dann Arzt anrufen mit SBAR. So weiß der Arzt genau, was los ist.",
              },
            ],
          },
        ],
      },
    },

    // Step 1.5 — Sorting: erste Assessment-Reihenfolge
    {
      stepId: "ce02-frau-m-info-05-was-pruefe-ich",
      phase: 1,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-info-assessment-reihenfolge",
      tag: "pflege",
      contentC1: {
        title: "Erste Assessment-Reihenfolge",
        body: "Du hast Frau M. begrüßt, Bewusstsein geprüft, erste Fragen gestellt. Jetzt folgt das strukturierte Assessment. Sortiere die folgenden Schritte in die richtige Reihenfolge — nach Priorität (ABCDE-ähnlich) und Sicherheitslogik.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was prüfe ich als nächstes?",
        body: "Du hast Frau M. begrüßt. Du weißt: Sie ist wach. Jetzt prüfst du weiter. In welcher Reihenfolge? Sortiere die Schritte.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die ersten Assessment-Schritte in der richtigen Reihenfolge.",
        sortItems: [
          "Bewusstsein und Ansprechbarkeit prüfen (wach? orientiert?)",
          "Grobe Verletzungsprüfung am Boden (Blutung? Deformität? Schmerzen?)",
          "Vitalzeichen messen (RR, HF, SpO2, Temp)",
          "Transfer planen und vorbereiten (2-Personen, Decke, Schmerzmedikation bei Bedarf)",
          "Arzt informieren falls nötig (SBAR: Sturz, Hintergrund, Status, Empfehlung)",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};

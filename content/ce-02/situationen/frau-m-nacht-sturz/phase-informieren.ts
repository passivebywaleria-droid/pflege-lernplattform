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
    "02:48 Uhr. Du stehst auf dem Flur der internistischen Station und spürst, wie das Linoleum unter deinen Schuhen leicht klebt — frisch gewischt, irgendwann zwischen Mitternacht und jetzt. Die Notbeleuchtung tönt den Gang in ein gedämpftes Apricot, nur am Schwesternzimmer fällt ein streifenhelles Rechteck Neonlicht auf den Boden. Aus Zimmer 11 hörst du das gleichmäßige Surren eines Sauerstoffkonzentrators, weiter hinten ein leises Husten, dann wieder Stille. Diese Art Stille, die nachts auf einer Station nie ganz Stille ist: Kühlschränke summen, Infusomaten piepen leise im Halbschlaf, irgendwo schließt eine Tür. Du atmest ein. Es riecht nach Desinfektionsmittel, nach kaltem Kaffee aus der Stationsküche, nach den Veilchen-Bonbons, die Frau Keller jeden Dienst dabeihat. Vor 90 Sekunden hat sie dir auf dem Weg zu Zimmer 12 zugenickt: 'Frau M., Vierzehn, ist gestürzt. Schau du.' Mehr Zeit war nicht. Sie ist jetzt in der Tür gegenüber verschwunden, du hörst sie murmeln, das ruhige Auf-und-Ab ihrer Stimme, und merkst, dass sie auf dich vertraut, ohne dass sie es ausgesprochen hat. Dein Puls liegt höher als sonst, du merkst es am Hals, ein leichtes Pochen unter dem Kragen des Kasaks. Frau M., 82 Jahre, Pneumonie Tag drei — mehr weißt du nicht. Kein Pflegebogen vor Augen, keine Diagnoseliste, kein Arzneimittel-Plan. Du bist im 2. Ausbildungsdrittel, das ist deine vierte Nachtschicht überhaupt, und du bist gerade allein für Zimmer 14 zuständig. In deiner linken Brusttasche der schmale Notizblock mit drei eng beschriebenen Seiten von der heutigen Übergabe — über Frau M. steht nur eine halbe Zeile. Drei Schritte trennen dich noch von der angelehnten Tür. Hinter ihr: eine Frau, die du noch nie gesehen hast, am Boden liegend, vielleicht mit Schmerzen, vielleicht mit Angst, vielleicht in einer Pose, die dich an deine eigene Großmutter erinnern wird. Du gehst noch nicht hinein. Erst die Übergabe sauber im Kopf, erst SBAR strukturieren. Was hat Frau Keller wirklich gesagt? Welche Information fehlt dir? Welche Frage musst du im Zimmer als erstes klären — Bewusstsein, Atmung, Schmerz? Du stehst still, eine Hand am Türrahmen, das Holz kühl und glatt unter den Fingern, und merkst, wie diese Sekunden schwerer wiegen als die ganze Stunde davor. Im Hintergrund piept ein Aufzug irgendwo im Haus. In den nächsten Minuten entscheidet sich, wie die Nacht für Frau M. weitergeht — fachlich, körperlich und emotional. Und auch: wie du als Schülerin durch diese Tür gehst.",
  kontextB1:
    "02:48 Uhr. Du stehst auf dem Flur. Das Licht ist gedämpft. Es ist warm und still. Du riechst Desinfektion und Kaffee. In Zimmer 11 surrt ein Gerät. Eine Tür schließt leise. Frau Keller hat dich vor einer Minute zu Zimmer 14 geschickt. Sie sagte nur: 'Frau M., 14, ist gestürzt. Schau du.' Mehr nicht. Du atmest ein. Dein Puls ist schneller als sonst. Frau M. ist 82 Jahre alt. Sie hat eine Lungenentzündung, Tag drei. Mehr weißt du nicht. Du bist Schülerin im 2. Ausbildungsdrittel. Das ist deine vierte Nachtschicht. Du bist allein für Zimmer 14. Drei Schritte sind es noch bis zur Tür. Sie steht offen. Hinter der Tür liegt eine Frau am Boden. Vielleicht hat sie Schmerzen. Vielleicht hat sie Angst. Du gehst noch nicht rein. Erst denkst du nach. Was hat Frau Keller genau gesagt? Was musst du wissen? Du nutzt SBAR — eine Struktur für Übergaben. Du stehst still, eine Hand am Türrahmen. Diese Sekunden sind wichtig. Was du jetzt tust, ist wichtig — für Frau M. und für dich.",
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
        // FIX (walkthrough B-02): Setting-Zeile mit \n\n vom Body getrennt,
        // sonst triggert displayFormat="scenario" den body-Duplikat-Fallback in step-text.tsx:404.
        // FIX (walkthrough B-14): Markdown-Underscore-Italics entfernt (Renderer parst kein Markdown).
        body: "02:48 Uhr, Flur der internistischen Station.\n\nFrau Keller flüstert: \"Frau M., Zimmer 14, grad gestürzt, links neben dem Bett, ansprechbar, klagt über Hüftschmerz. Ich übernehme die Infusion nebenan — schau du mal.\" Du liest kurz die Pflegeübergabe in SBAR-Struktur: **S**ituation — Sturz vor 7 Min. **B**ackground — Pneumonie Tag 3, Parkinson II. **A**ssessment — ansprechbar, orientiert, Hüftschmerz links. **R**ecommendation — Assessment + Arzt informieren falls nötig. SBAR ist die Standard-Struktur für klinische Übergaben — sie macht Übergaben vollständig und klar.",
        fallbezug:
          "Frau M. (82, Pneumonie Tag 3) ist in der Nacht gestürzt. Du bist Nachtdienst im 2. Ausbildungsdrittel, arbeitest mit Frau Keller (examinierte Pflegekraft).",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Die Übergabe",
        // FIX (walkthrough B-02): Setting-Zeile mit \n\n vom Body getrennt.
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "02:48 Uhr, Flur der Station.\n\nFrau Keller flüstert: \"Frau M., Zimmer 14. Sie ist gerade gestürzt, links neben dem Bett. Sie ist wach und klagt über Schmerzen in der Hüfte. Ich gehe zu einem anderen Patienten — schau du mal nach ihr.\" Du bekommst eine kurze Pflege-Übergabe (SBAR-Struktur): **S** = Sturz vor 7 Minuten. **B** = Pneumonie Tag 3, Parkinson. **A** = wach, orientiert, Schmerzen in der linken Hüfte. **R** = Assessment machen, Arzt rufen wenn nötig. SBAR ist ein Standard — so bleibt die Übergabe klar und vollständig.",
        fallbezug:
          "Frau M. ist 82. Sie ist seit 3 Tagen im Krankenhaus wegen Lungenentzündung. Heute Nacht ist sie gestürzt. Du bist Schülerin im Nachtdienst.",
        glossarBegriffe: [],
      },
    },

    // Step 1.2 — Selbsteinschätzung VOR Betreten
    // FIX (walkthrough B-01): stepType confidence → selfrating, confidenceCards entfernt.
    // confidence bewertet Aussagen mit isTrue/isFalse — bei subjektiver Selbsteinschätzung
    // erzeugte das "Falsch!"-Feedback bei ehrlicher Antwort. selfrating nutzt 5-Punkt-Skala
    // ohne Richtig/Falsch-Logik (StepSelfrating-Renderer).
    {
      stepId: "ce02-frau-m-info-02-vor-betreten",
      phase: 1,
      stepType: "selfrating",
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
              "Genau. Das ist der Kern der Ersteinschätzung: Licht voll einschalten (Verletzungs-Beurteilung braucht volle Sicht — keine Inspektion ohne ausreichende Beleuchtung), aber so positioniert oder von der Bett-Leselampe, dass es Frau M. nicht direkt blendet. Begrüßen (Würde, Beruhigung), Bewusstsein prüfen (ansprechbar, orientiert zu Person/Ort/Zeit). Diese drei Handlungen laufen fast gleichzeitig ab.",
            explanationB1:
              "Richtig. Das ist das Wichtigste zuerst: Licht hell an, damit du sie genau ansehen kannst — aber das Licht soll ihr nicht direkt in die Augen scheinen. Frau M. ansprechen (freundlich, ruhig). Prüfen, ob sie wach ist und weiß, wo sie ist. Das dauert nur Sekunden.",
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
        body: "Du betrittst das Zimmer und schaltest das Licht ein — hell genug für die Verletzungs-Beurteilung, aber so positioniert, dass es Frau M. nicht direkt blendet. Du kniest auf Augenhöhe zu Frau M. am Boden. Sie liegt halb seitlich neben dem Bett, hat eine Hand auf der linken Hüfte, die andere stützt sich am Boden ab. Sie ist bei Bewusstsein, ansprechbar, atmet ruhig. Sie sieht dich an.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Ins Zimmer gehen",
        body: "Du gehst ins Zimmer und machst das Licht an. Hell genug, damit du sie genau ansehen kannst — aber nicht direkt ins Gesicht. Du gehst in die Knie, damit du auf ihrer Höhe bist. Frau M. liegt halb auf der Seite neben dem Bett. Eine Hand liegt auf der linken Hüfte. Mit der anderen stützt sie sich auf dem Boden ab. Sie ist wach. Sie atmet ruhig. Sie schaut dich an.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Frau M.",
        patientName: "Frau M.",
        dialogPhases: [
          {
            context:
              "Frau M. blickt dich an. Ihre Stimme ist leise, ihre Hände liegen gefaltet im Schoß. \"Es tut mir furchtbar leid, dass ich Sie jetzt um diese Zeit in Anspruch nehmen muss. Ich wollte nur kurz auf die Toilette. Ich weiß wirklich nicht, wie das passieren konnte.\"",
            contextB1:
              "Frau M. schaut dich an. Sie spricht leise. Ihre Hände sind gefaltet. \"Es tut mir leid, dass ich Sie nachts störe. Ich wollte nur zur Toilette. Ich weiß nicht, wie das passieren konnte.\"",
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
                  // FIX (walkthrough B-08): Sandwich-Prinzip — Anerkennung vor Kritik.
                  "Du hast freundlich reagiert — das ist gut. Aber: Du weißt noch nicht, ob etwas passiert ist. Du hast noch nicht nachgeschaut. Solche Worte beruhigen ohne Wissen — und Frau M. merkt das. Beim nächsten Mal: Erst schauen, dann sprechen.",
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
                text: "\"Frau M., wo tut es weh? Und auf einer Skala von 0 bis 10 — wie stark? Können Sie alles bewegen?\"",
                textB1:
                  "\"Frau M., wo tut es weh? Wie stark — von 0 bis 10? Können Sie alles bewegen?\"",
                patientResponse:
                  "\"Die linke Hüfte, innen. Eine Sechs vielleicht, wenn ich mich nicht bewege. Und ich glaube, meine Zehen kann ich bewegen …\" — sie probiert es.",
                patientResponseB1:
                  "\"Die linke Hüfte, innen. Eine Sechs, wenn ich still liege. Meine Zehen bewegen sich, glaube ich …\" — sie probiert es.",
                score: 3,
                feedback:
                  "Klar, konkret, sicher. Drei Informationen in einem Atemzug: Schmerzlokalisation (linke Hüfte — möglicher Bereich für eine Hüftfraktur), Schmerzintensität (NRS 6 — moderat bis stark, dokumentationspflichtig nach DNQP-Schmerz, im SBAR-Anruf an Arzt erwähnen), grobe Motorik (Zehenbewegung — keine schwere Rückenmarkverletzung).",
                feedbackB1:
                  "Sehr gut. Drei wichtige Antworten in einer Frage: Wo tut es weh (linke Hüfte — Hüftbruch möglich?), wie stark (NRS 6 — das ist nicht wenig, das musst du dokumentieren und dem Arzt sagen), kann sie bewegen (Zehen gehen — kein Rückenschaden).",
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
                  "Gute Frage — Orthostase/Schwindel ist genauso wichtig wie Schmerz-Lokalisation, gerade bei Parkinson + Z-Substanz. Beide Fragen gehören zur Erstuntersuchung. Nur die Reihenfolge: Hüftschmerzen waren schon in der Übergabe erwähnt — also zuerst Schmerz-Lokalisation und NRS, dann Schwindel/Übelkeit als nächste Frage.",
                feedbackB1:
                  "Gute Frage — Schwindel zu fragen ist genauso wichtig wie Schmerz, gerade bei Parkinson + Schlaftablette. Beide gehören zur Untersuchung. Aber: Die Hüftschmerzen waren schon bekannt. Erst 'Wo und wie stark tut es weh?', dann 'Schwindelig?'",
              },
            ],
          },
          {
            context:
              "Du hast jetzt: ansprechbar, orientiert, keine sichtbare Deformität, Schmerz linke Hüfte (NRS 6), kann Zehen bewegen. Du entscheidest:",
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

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
      transition: "Sturz. Das Wort hallt nach. Aber was genau ist ein Sturz eigentlich?",
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

    // Step 1.1b — Inline-Wissen \"Was ist ein Sturz?"
    // PILOT (Inline-Wissen v1, 2026-04-26): Themen-Baustein als 60-Sek-Lese-Karte.
    // Der Schüler hat in Step 1.1 SBAR-Übergabe gehört: "Frau M. ist gestürzt." Bevor er
    // die Selbsteinschätzung gibt, klärt dieser Baustein die Kern-Definition — und macht
    // bewusst, dass auch Beinahe-Stürze zählen (relevant für die Anamnese in Step 1.4+).
    {
      stepId: "ce02-frau-m-info-01b-was-ist-sturz",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 1,
      kompetenzbereich: "I.1",
      quellen: [
        "WHO 2007 — Global Report on Falls Prevention",
        "DNQP 2022 — Expertenstandard Sturzprophylaxe",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-info-sturz-definition",
      tag: "pflege",
      transition: "Du weißt jetzt was ein Sturz ist. Aber wie sicher fühlst du dich damit?",
      contentC1: {
        title: "Was zählt eigentlich als Sturz?",
        body: "",
        glossarBegriffe: ["Sturz", "Beinahe-Sturz", "Near-Miss"],
      },
      contentB1: {
        title: "Was ist ein Sturz?",
        body: "",
        glossarBegriffe: ["Sturz", "Beinahe-Sturz"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-was-ist-ein-sturz",
        storyAufhaenger:
          "Frau Keller hat dir gerade zugerufen: \"Frau M. ist gestürzt.\" Aber bevor du das Zimmer betrittst — bist du sicher, was alles als Sturz zählt? Auch Frau M.s Tochter Birgit erzählt manchmal: \"Mama hat sich am Schrank festgehalten — fast wäre sie gefallen.\" Ist das ein Sturz?",
        storyAufhaengerB1:
          "Frau Keller hat gesagt: \"Frau M. ist gestürzt.\" Aber was ist eigentlich ein Sturz genau? Und was ist mit Beinahe-Stürzen — zum Beispiel wenn sich jemand am Schrank festhält und fast fällt?",
        kerntext:
          "**Die WHO-Definition:** Ein Sturz ist ein Ereignis, bei dem die betroffene Person **unbeabsichtigt auf dem Boden oder einer tieferen Ebene landet** (WHO 2007).\n\n**Drei Aspekte sind wichtig:**\n\n• **Unbeabsichtigt** — wer sich bewusst hinsetzt, stürzt nicht.\n\n• **Tiefere Ebene** — auch vom Stuhl rutschen ist ein Sturz.\n\n• **Ereignis** — kein Prozess, ein Moment.\n\n**Beinahe-Stürze zählen mit.** Der DNQP 2022 ergänzt die WHO-Definition: Wer sich gerade noch abfangen kann oder von einer Pflegekraft aufgefangen wird — das ist auch ein Sturzereignis und muss dokumentiert werden.\n\n**Warum?** Studien zeigen: Wer einen Beinahe-Sturz hatte, hat in den **nächsten 6 Monaten ein 2-3 fach erhöhtes Risiko** für einen echten Sturz.\n\n**Bei Frau M. heißt das:** Heute Nacht ihr erster echter Sturz. Wenn dir Birgit später erzählt, dass Mama vor zwei Wochen schon mal beinahe gefallen ist — gehört das in die Dokumentation.",
        kerntextB1:
          "**Die WHO-Definition:** Ein Sturz ist, wenn jemand **unabsichtlich** auf den Boden fällt. Auch das Rutschen vom Stuhl ist ein Sturz.\n\n**Der DNQP 2022 sagt:** Auch **Beinahe-Stürze** sind Stürze. Beinahe-Sturz heißt: Der Mensch hält sich gerade noch fest — zum Beispiel am Schrank.\n\n**Warum ist das wichtig?**\n\nStudien zeigen: Wer einmal beinahe gefallen ist, fällt in den **nächsten 6 Monaten 2 bis 3 Mal so oft wirklich**.\n\nDu musst es deshalb aufschreiben — auch wenn nichts passiert ist.",
        faustregel: "Jeder Beinahe-Sturz ist ein angekündigter Sturz.",
        faustregelB1: "Auch Beinahe-Stürze sind Stürze. Du schreibst sie auf — auch wenn nichts passiert ist.",
        spektrum: [
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz, nächtliche Desorientierung",
            kurzbeschreibung:
              "Steht nachts orientierungslos auf, weiß nicht wo er ist. Sein Sturz ist nicht 'unabsichtlich im Sinne von ungeplant', sondern aus kognitiver Verwirrung — zählt aber genauso.",
          },
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Akut post-OP, Hüft-TEP",
            kurzbeschreibung:
              "Bei ihr ist die Sturzgefahr nicht alters- sondern situationsbedingt: frische OP, Schmerz, Bewegungseinschränkung. Erstmobilisation am 1. POT braucht engmaschige Begleitung.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Ambulant, COPD + Stolperfallen zuhause",
            kurzbeschreibung:
              "Sie wohnt allein, ist mehrfach beinahe gestolpert (Teppich, Telefonkabel). Beinahe-Stürze sind bei ihr Alltagserfahrung — kommen aber nur in die Doku, wenn sie es erzählt.",
          },
        ],
        sonstBox:
          "Nicht in unseren Patienten-Geschichten vertreten, aber wichtig zu kennen: **Synkope** (kurze Bewusstlosigkeit durch Kreislaufabfall, oft kardial), **Drop-Attacks** (plötzlicher Tonusverlust ohne Bewusstlosigkeit, vertebrobasiläre Insuffizienz), **vestibuläre Schwindelattacken**. Diese werden in der Notfallmedizin (CE-06) und Neurologie behandelt.",
        sonstBoxB1:
          "Andere Sturz-Ursachen, die wir hier nicht vertieft behandeln: **Synkope** (kurze Bewusstlosigkeit), **Drop-Attacks** (plötzliches Hinfallen ohne Vorwarnung), **Schwindelattacken vom Innenohr**. Mehr dazu lernst du im CE-06 (Notfälle).",
        karteikarte: {
          vorderseite:
            "Frau M. ist heute Nacht gestürzt — Birgit erzählt dir später, dass Mama sich vor 2 Wochen 'kurz am Schrank festgehalten' hat. Was zählt davon als Sturz?",
          rueckseite:
            "Beides. Die WHO definiert Sturz als unbeabsichtigtes Landen auf dem Boden / tieferer Ebene. Der DNQP 2022 ergänzt: Auch **Beinahe-Stürze** zählen — Risiko in den nächsten 6 Monaten 2-3x erhöht. Spektrum: Bauer (Demenz, nächtliche Desorientierung), Yilmaz (post-OP, situationsbedingt), Kovac (ambulant, Stolperfallen). Faustregel: **Jeder Beinahe-Sturz ist ein angekündigter Sturz.**",
        },
      },
    },

    // Step 1.2 — Selbsteinschätzung VOR Betreten (crowdPoll mit Seed-Daten)
    // FIX (Pilot 2026-04-28): Smiley-selfrating war didaktisch zu wenig — User wollte
    // konkrete Pill-Buttons mit Crowd-Vergleich (\"65 andere Schüler haben gewählt...").
    // crowdPoll nutzt Seed-Daten bis echte Schüler-Daten in der DB sind.
    {
      stepId: "ce02-frau-m-info-02-vor-betreten",
      phase: 1,
      stepType: "crowdPoll",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-frau-m-info-confidence-vorher",
      tag: "pflege",
      transition: "Gut. Ehrlich mit dir selbst. Jetzt: was tust du als erstes, wenn du die Tür öffnest?",
      contentC1: {
        title: "Wie geht es dir gerade?",
        body: "Bevor du das Zimmer betrittst: Kurz Pause. Nachts, allein, gerade gestürzte Patientin — das ist herausfordernd.\n\nWähle was am besten passt. Es gibt kein richtig oder falsch — danach siehst du, was andere Schüler*innen gewählt haben.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wie fühlst du dich?",
        body: "Bevor du reingehst: Kurz Pause. Nachts, allein, gestürzte Patientin — das ist nicht einfach.\n\nWähle was am besten passt. Es gibt kein richtig oder falsch.\n\nDanach siehst du, was andere Schüler*innen gewählt haben.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie fühlst du dich, jetzt zu Frau M. zu gehen?",
        crowdPoll: {
          question: "Wie fühlst du dich, jetzt zu Frau M. zu gehen?",
          questionB1: "Wie fühlst du dich, jetzt zu Frau M. zu gehen?",
          inputType: "choice",
          allowMultiple: false,
          options: [
            {
              id: "sicher",
              text: "Sicher — ich weiß, was zu tun ist",
              textB1: "Sicher — ich weiß, was ich tun muss",
            },
            {
              id: "halbsicher",
              text: "Halb sicher — Grundgerüst klar, Details unsicher",
              textB1: "Halb sicher — die wichtigsten Sachen klar, Details unsicher",
            },
            {
              id: "unsicher",
              text: "Unsicher — möchte erst mehr lernen, bevor ich etwas falsch mache",
              textB1: "Unsicher — ich möchte erst mehr lernen",
            },
            {
              id: "nervös",
              text: "Anfangs nervös, dann routiniert — sobald ich anfange, läuft es",
              textB1: "Anfangs nervös, danach geht es — wenn ich anfange, läuft es",
            },
          ],
          seedResponses: [
            {
              text: "Halb sicher — Grundgerüst klar, Details unsicher",
              count: 79,
              highlight: true,
            },
            {
              text: "Anfangs nervös, dann routiniert",
              count: 69,
            },
            {
              text: "Unsicher — möchte erst mehr lernen",
              count: 60,
            },
            {
              text: "Sicher — ich weiß, was zu tun ist",
              count: 39,
            },
          ],
          totalVotes: 247,
          fazit:
            "\"Halb sicher\" ist die häufigste Antwort — und sie ist ehrlich. Studien zeigen: Wer sich vor einer komplexen Pflegesituation als \"sehr sicher\" einschätzt, überschätzt sich oft. Eine gesunde Portion Unsicherheit ist ein Profi-Reflex. Du gehst gleich rein — strukturiert, mit Plan, im 2-Personen-Setting (Frau Keller im Nachbarzimmer). Du musst nicht alles wissen, du musst gut beobachten und richtig priorisieren.",
          fazitB1:
            "\"Halb sicher\" ist die häufigste Antwort. Das ist ehrlich. Studien sagen: Wer \"sehr sicher\" sagt, überschätzt sich oft. Etwas unsicher zu sein ist normal und gut — du achtest dann mehr auf Details. Du gehst gleich rein. Frau Keller ist im Nachbarzimmer. Du musst nicht alles wissen — du musst gut hinschauen und das Wichtigste zuerst tun.",
        },
      },
    },

    // Step 1.3 — MC erste Priorität (fallstrick)
    {
      stepId: "ce02-frau-m-info-03-erste-priorität",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-frau-m-info-priorität",
      tag: "pflege",
      transition: "Licht an. Bewusstsein prüfen. Begrüßen. Richtig. Aber Frau M. hat mehr als einen Risikofaktor.",
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

    // Step 1.3b — Inline-Wissen \"Sturz-Risikofaktoren — Anker + Spektrum"
    // PILOT (Inline-Wissen v2, 2026-04-26): Themen-Baustein zu Risikofaktoren.
    // Schüler hat in Step 1.3 die Erst-Priorität verstanden (Licht + Bewusstsein + Begrüßen).
    // Bevor er den Dialog mit Frau M. führt, soll er wissen: Welche Risikofaktoren bringt
    // Frau M. mit? Und wie unterscheidet sich das von anderen Patient(inn)en mit Sturz-Risiko?
    {
      stepId: "ce02-frau-m-info-03b-risikofaktoren-spektrum",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2022 — Expertenstandard Sturzprophylaxe",
        "Beers-Liste 2023",
        "PRISCUS 2.0 (Holt et al. 2022)",
        "DGN 2024 — S3-LL Parkinson-Krankheit",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-info-risikofaktoren",
      tag: "pflege",
      transition: "Mit diesem Wissen im Kopf öffnest du die Tür. Das Licht fällt ins Zimmer.",
      contentC1: {
        title: "Sturz-Risikofaktoren bei Frau M. — und bei anderen",
        body: "",
        glossarBegriffe: [
          "Risikofaktor",
          "intrinsisch",
          "extrinsisch",
          "Polypharmazie",
          "Bradykinese",
          "Posturale Instabilität",
        ],
      },
      contentB1: {
        title: "Warum stürzt Frau M.?",
        body: "",
        glossarBegriffe: ["Risikofaktor", "Polypharmazie", "Parkinson"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-risikofaktoren-spektrum",
        storyAufhaenger:
          "Du gehst gleich rein zu Frau M. Aber halt kurz inne: Warum ist sie überhaupt gestürzt? Mit 82, Parkinson Stadium II, Pneumonie Tag 3 — kommen mehrere Risikofaktoren zusammen. Stürze haben fast nie eine einzige Ursache.",
        storyAufhaengerB1:
          "Bevor du zu Frau M. ins Zimmer gehst: Warum ist sie eigentlich gestürzt? Frau M. hat viele Sachen, die zusammen zum Sturz führen. Stürze haben fast nie nur **einen** Grund.",
        kerntext:
          "Der DNQP 2022 unterscheidet **zwei Gruppen** von Risikofaktoren. Frau M. zeigt aus beiden mehrere.\n\n**Intrinsisch (im Patienten):**\n\n• **Alter > 75** — Frau M. ist 82.\n\n• **Morbus Parkinson Stadium II** — ihr Hauptfaktor: Bradykinese (verlangsamte Bewegung), Rigor (Steifigkeit), beginnende posturale Instabilität (Gleichgewicht).\n\n• **Akute Erkrankung** — Pneumonie Tag 3, Schwächung durch Infekt + Antibiose.\n\n• **Polypharmazie wahrscheinlich** — L-Dopa-Präparat, evtl. Antibiotikum, evtl. Schlafmittel (PRISCUS-Check fällig).\n\n• **Erstmaliger Sturz jetzt** — ab heute Nacht automatisch hohes Sturzrisiko (DNQP 2022).\n\n**Extrinsisch (in der Umgebung):**\n\n• Nachts — schlechte Beleuchtung beim Aufstehen.\n\n• Klinik-Umgebung — sie kennt den Weg zur Toilette nicht so wie zuhause.\n\n• Bett-Höhe? Rufknopf in Reichweite gewesen?\n\n**Faktoren addieren sich.** Frau M. hat heute Nacht **mindestens 5 zusammenwirkende Risikofaktoren** — kein Einzelfaktor erklärt den Sturz allein.",
        kerntextB1:
          "Der DNQP 2022 sagt: Es gibt **zwei Arten** von Risiken.\n\n**Im Patienten (intrinsisch):**\n\n• **Alter über 75** — Frau M. ist 82.\n\n• **Parkinson Stadium II** — der Hauptgrund: Sie bewegt sich langsam, ist steif, das Gleichgewicht wird schlechter.\n\n• **Akute Krankheit** — Lungenentzündung Tag 3, sie ist geschwächt.\n\n• **Polypharmazie** — sie nimmt mehrere Medikamente. Manche machen schwindlig oder müde.\n\n• **Erster Sturz heute Nacht** — ab jetzt automatisch hohes Risiko (DNQP 2022).\n\n**In der Umgebung (extrinsisch):**\n\n• Nachts — wenig Licht.\n\n• Krankenhaus — sie kennt den Weg zur Toilette nicht.\n\n**Die Risiken addieren sich.** Frau M. hat heute mindestens 5 Risiken zusammen.",
        faustregel:
          "Stürze haben fast nie eine Ursache — sie haben einen Risiko-Cocktail. 4+ gleichzeitige Faktoren = hohes Risiko.",
        faustregelB1:
          "Stürze haben fast nie nur einen Grund. Wer 4 oder mehr Risiken zusammen hat, ist sehr sturzgefährdet.",
        spektrum: [
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz + Sundowning",
            kurzbeschreibung:
              "Bei ihm ist die **Kognition** der Hauptfaktor. Er steht nachts orientierungslos auf — nicht weil er gestolpert ist, sondern weil er nicht weiß, dass er im Krankenhaus ist. Sein Sturzschutz ist Beziehungsgestaltung + Validation, nicht Bettgitter.",
          },
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Hüft-TEP, akute post-OP-Mobilität",
            kurzbeschreibung:
              "Bei ihr ist es nicht Alter oder Medikamente — es ist die **frische Operation**: Schmerz, Bewegungsangst, Lagerungsregeln (keine Adduktion, keine Innenrotation, max. 90° Hüftflexion). Erstmobilisation am 1. POT braucht engmaschige Begleitung.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Polyneuropathie + Bariatrik",
            kurzbeschreibung:
              "Diabetes-Folge: Sie spürt ihre Füße kaum (sensorische Polyneuropathie). Plus bariatrisches Equipment-Risiko bei BMI 38 (Schwerlast-Bett, Lifter ab >150 kg, Mobilisation mit 2-3 Helfern).",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Halbseiten-Lähmung + Neglect",
            kurzbeschreibung:
              "Tag 5 nach Apoplex: Hemiparese rechts, beginnender Neglect der betroffenen Seite. Er übersieht Hindernisse rechts. Sein Sturzrisiko ist räumlich-sensorisch, nicht primär muskulär.",
          },
        ],
        sonstBox:
          "Risikofaktoren, die wir hier nicht über einen Patienten lehren, aber wichtig sind: **Synkope durch Herzrhythmusstörung** (Vorhofflimmern, AV-Block — siehe CE-06 Notfallmedizin), **Drop-Attacks** (vertebrobasiläre Insuffizienz), **akute Hypoglykämie** bei Diabetes (CE-05 Endokrinologie), **Vestibulärer Schwindel** (Innenohr, BPLS, M. Menière). Diese kommen meist akut, nicht als chronisches Risiko-Profil.",
        sonstBoxB1:
          "Andere Sturz-Ursachen, die wir nicht im Detail behandeln: **Herzrhythmusstörungen** (Herz schlägt unregelmäßig, kurze Bewusstlosigkeit — siehe CE-06), **plötzliches Hinfallen ohne Vorwarnung** (Drop-Attacks), **Unterzucker bei Diabetes** (CE-05), **Schwindel vom Innenohr**.",
        karteikarte: {
          vorderseite:
            "Birgit fragt dich am Morgen: \"Warum ist Mama gestürzt? Ist das einfach das Alter?\" — Was sagst du?",
          rueckseite:
            "Nein — Stürze sind multifaktoriell. Bei Frau M. mind. 5 Faktoren: Alter > 75, Parkinson II (Hauptfaktor: Bradykinese, posturale Instabilität), akute Pneumonie, Polypharmazie, nächtliche Klinikumgebung.\n\nSpektrum bei anderen:\n• Bauer (Demenz) → Kognition + Sundowning\n• Yilmaz (Hüft-TEP) → akute post-OP-Mobilität\n• Schmidt → Polyneuropathie + Bariatrik\n• Petrov → Halbseiten-Lähmung + Neglect\n\nFaustregel: **4+ Faktoren = hohes Risiko, kein Patient hat alle, jeder hat eigene.** (DNQP 2022, PRISCUS 2.0, Holt et al. 2022)",
        },
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
      transition: "Frau M. hat dir vertraut. Jetzt: systematisch prüfen, bevor du sie bewegst.",
      contentC1: {
        title: "Das Zimmer betreten",
        // FIX (Pilot 2026-04-28): body geleert um Dialog-Doppel-Narration zu vermeiden.
        // Setting + Patient-Reaktion komplett in dialogPhases[0].context — sonst wurden
        // zwei narrative Bubbles direkt nacheinander gezeigt (body via parseGestikUndSpeech
        // + context als Phase-Setup).
        body: "",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Ins Zimmer gehen",
        body: "",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Frau M.",
        patientName: "Frau M.",
        dialogPhases: [
          {
            context:
              "Du betrittst das Zimmer und schaltest das Licht ein — hell genug für die Verletzungs-Beurteilung, aber so positioniert, dass es Frau M. nicht direkt blendet. Du kniest auf Augenhöhe zu ihr am Boden. Sie liegt halb seitlich neben dem Bett, hat eine Hand auf der linken Hüfte, die andere stützt sich am Boden ab. Sie ist bei Bewusstsein, ansprechbar, atmet ruhig. Ihre Stimme ist leise, ihre Hände liegen gefaltet im Schoß. \"Es tut mir furchtbar leid, dass ich Sie jetzt um diese Zeit in Anspruch nehmen muss. Ich wollte nur kurz auf die Toilette. Ich weiß wirklich nicht, wie das passieren konnte.\"",
            contextB1:
              "Du gehst ins Zimmer und machst das Licht an. Hell genug, damit du sie genau ansehen kannst — aber nicht direkt ins Gesicht. Du gehst in die Knie, damit du auf ihrer Höhe bist. Frau M. liegt halb auf der Seite neben dem Bett. Eine Hand liegt auf der linken Hüfte. Mit der anderen stützt sie sich am Boden ab. Sie ist wach. Sie atmet ruhig. Sie spricht leise: \"Es tut mir leid, dass ich Sie nachts störe. Ich wollte nur zur Toilette. Ich weiß nicht, wie das passieren konnte.\"",
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
                  "\"Die linke Hüfte, innen. Eine Sechs vielleicht, wenn ich mich bewege. Und ich glaube, meine Zehen kann ich bewegen …\" — sie probiert es.",
                patientResponseB1:
                  "\"Die linke Hüfte, innen. Eine Sechs, wenn ich mich bewege. Meine Zehen bewegen sich, glaube ich …\" — sie probiert es.",
                score: 3,
                feedback:
                  "Klar, konkret, sicher. Drei Informationen in einem Atemzug: Schmerzlokalisation (linke Hüfte — möglicher Bereich für eine Hüftfraktur), Schmerzintensität (NRS 6 — mäßiger Schmerz, interventions- und dokumentationspflichtig nach DNQP-Schmerz, im SBAR-Anruf an Arzt erwähnen), grobe Motorik (Zehenbewegung — keine schwere Rückenmarkverletzung).",
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
      stepId: "ce02-frau-m-info-05-was-prüfe-ich",
      phase: 1,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-info-assessment-reihenfolge",
      tag: "pflege",
      transition: "Noch ein Werkzeug brauchst du, bevor Phase 2 beginnt: die Schmerzskala.",
      contentC1: {
        title: "Erste Assessment-Reihenfolge",
        body: "Du hast Frau M. begrüßt, Bewusstsein geprüft, erste Fragen gestellt. Jetzt folgt das strukturierte Assessment.\n\nSortiere die folgenden Schritte in die richtige Reihenfolge — nach Priorität (ABCDE-ähnlich) und Sicherheitslogik.",
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

    // Step 1.5b — Inline-Wissen \"NRS-Schmerzskala"
    // PILOT (Inline-Wissen v3, 2026-04-26): Letzter Step in Phase 1 — Vorbereitung für
    // Phase 2 (Beobachten), wo der Schüler Frau M. konkret nach Schmerzen fragen muss.
    // Frau M. bagatellisiert Schmerz (\"ist etwas unangenehm" bei NRS 8). Der Schüler braucht
    // die NRS-Mechanik bevor er fragt.
    {
      stepId: "ce02-frau-m-info-05b-nrs-schmerzskala",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2020 — Expertenstandard Schmerzmanagement in der Pflege bei akuten Schmerzen",
        "Büttner/Finke 2000 — KUSS-Skala",
        "Warden 2003 — PAINAD",
        "Basler 2006 — BESD (Beurteilung von Schmerzen bei Demenz)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-info-nrs",
      tag: "pflege",
      contentC1: {
        title: "NRS — die Schmerzskala, die du gleich brauchst",
        body: "",
        glossarBegriffe: ["NRS", "Numeric Rating Scale", "VAS", "KUSS", "BESD", "Schmerzassessment"],
      },
      contentB1: {
        title: "Wie misst man Schmerzen?",
        body: "",
        glossarBegriffe: ["NRS", "Schmerz-Skala"],
      },
      inlineWissen: {
        bausteinRef: "schmerz-nrs-grundlagen",
        storyAufhaenger:
          "Du gehst gleich rein und wirst Frau M. nach ihren Schmerzen fragen. Sie hat sich die Hand auf die linke Hüfte gelegt — aber sie wird vermutlich sagen: \"Es ist etwas unangenehm.\" Das ist ihr Stil. Wie kriegst du den echten Wert?",
        storyAufhaengerB1:
          "Du gehst gleich zu Frau M. Sie hat Schmerzen in der Hüfte. Aber sie wird sagen: \"Es ist etwas unangenehm.\" Wie misst du den echten Schmerz?",
        kerntext:
          "Die **NRS (Numeric Rating Scale)** ist der Goldstandard im Schmerzassessment für orientierte Erwachsene (DNQP 2020).\n\n**Du fragst genau so:**\n\n\"Auf einer Skala von 0 bis 10 — 0 ist gar kein Schmerz, 10 ist der stärkste vorstellbare Schmerz — wie stark ist Ihr Schmerz gerade?\"\n\n**Schwellenwerte (Pflicht-Wissen):**\n\n• **NRS 0–3** = leicht — Beobachtung, ggf. nicht-medikamentös (Lagerung, Eis, Wärme).\n\n• **NRS 4–6** = mäßig — **interventionspflichtig**: Bedarfsanalgesie ansprechen, dokumentieren.\n\n• **NRS 7–10** = stark — **sofort handeln**, Arzt informieren, SBAR.\n\n**Wichtig — kein Bagatellisieren.**\n\nEine NRS von 5 ist NICHT \"ein bisschen\". Sie ist mäßiger Schmerz, dokumentations- und interventionspflichtig.\n\n**Bei Frau M.:** Du erwartest einen Wert um 7-8 (Hüftschmerz nach Sturz) — sie wird ihn aber als \"etwas unangenehm\" verschleiern. Frag konkret nach der Zahl, nicht nach dem Adjektiv.\n\n**Re-Assessment:** Nach jeder Intervention (Lagerung, Analgetikum) erneut messen — typisch nach **30 Min bei oraler**, nach **15 Min bei i.v.-Gabe**.",
        kerntextB1:
          "Die **NRS (Numeric Rating Scale)** ist die wichtigste Schmerz-Skala bei wachen Erwachsenen (DNQP 2020).\n\n**Du fragst genau so:**\n\n\"Auf einer Skala von 0 bis 10 — 0 ist kein Schmerz, 10 ist der stärkste — wie stark ist Ihr Schmerz?\"\n\n**Was die Zahlen bedeuten:**\n\n• **0–3** = leicht — beobachten, evtl. Lagerung oder Wärme.\n\n• **4–6** = mäßig — **du musst handeln**: Bedarfsmedikament ansprechen, dokumentieren.\n\n• **7–10** = stark — **sofort handeln**, Arzt rufen.\n\n**Wichtig:**\n\nNRS 5 ist NICHT \"ein bisschen\". Es ist mäßiger Schmerz und muss behandelt werden.\n\n**Bei Frau M.:** Sie wird vielleicht sagen \"etwas unangenehm\" — aber sie hat wahrscheinlich NRS 7 oder 8. Frag immer nach der Zahl, nicht nach Worten.\n\n**Nach Behandlung:** Schmerz nochmal messen — nach **30 Min bei Tablette**, nach **15 Min bei Spritze**.",
        faustregel:
          "NRS ≥ 4 ist nicht 'wenig'. Es ist mäßiger Schmerz — IMMER dokumentations- und interventionspflichtig.",
        faustregelB1:
          "NRS 4 oder mehr ist NICHT wenig Schmerz. Du musst handeln — Bedarfsmedikament fragen, aufschreiben.",
        spektrum: [
          {
            patientName: "Lukas (2,5 Jahre, Verbrühung)",
            situationsId: "ls-lukas-verbrühung",
            hauptfaktor: "KUSS-Skala statt NRS",
            kurzbeschreibung:
              "Bei Säuglingen + Kleinkindern (< 4 J.) kann man keine NRS verwenden — sie verstehen Skalen nicht. Stattdessen: **KUSS (Kindliche Unbehagens- und Schmerz-Skala)** mit 5 Beobachtungs-Items à 0-2 Punkten = max. 10. Ab Score ≥ 4 interventionspflichtig.",
          },
          {
            patientName: "Herr Bauer (Demenz, fortgeschritten)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "BESD/PAINAD bei Demenz",
            kurzbeschreibung:
              "Bei Demenz-Patient(inn)en, die NRS nicht mehr zuverlässig zuordnen können, nutzt du **BESD (Beurteilung von Schmerzen bei Demenz)** oder **PAINAD** — Beobachtung von Atmung, Lautäußerung, Mimik, Körpersprache, Trostbarkeit.",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Schmerz im Bewegungs-Kontext",
            kurzbeschreibung:
              "Bei post-OP-Schmerz: NRS in Ruhe **und** in Bewegung getrennt erheben. Mobilisation gelingt nur bei NRS-in-Bewegung ≤ 3-4 — sonst Analgesie 30 Min vor Mobilisation einplanen.",
          },
        ],
        sonstBox:
          "Andere Schmerz-Skalen, die du kennen solltest: **VAS (Visual Analog Scale)** = 10cm-Strich ohne Zahlen, Patient markiert (gleichwertig zu NRS, aber bei Sehminderung schwierig). **Faces Pain Scale** = Smileys von neutral bis weinend (Kinder ab 4 J., bei Sprachbarriere). **CPOT** = bei beatmeten/sedierten Intensivpatienten.",
        sonstBoxB1:
          "Andere Schmerz-Skalen: **VAS** = 10-cm-Linie ohne Zahlen, Patient zeigt mit Stift. **Smiley-Skala** = Gesichter von freundlich bis weinend, gut für Kinder. **CPOT** = für Patienten auf Intensiv, die nicht sprechen können.",
        karteikarte: {
          vorderseite:
            "Frau M. (82, Hüftschmerz nach Sturz) sagt: \"Es ist etwas unangenehm.\" Du fragst sie nach NRS. Sie sagt: \"Vielleicht eine 8.\" — Was bedeutet das, was tust du?",
          rueckseite:
            "NRS 8 = **starker Schmerz**, sofort handeln. Schritte: Lagerung optimieren (entlastend), Bedarfsanalgesie nach AVO besprechen, Arzt informieren (SBAR), nach Wirkbeginn (15-30 Min) re-assessen.\n\nSchwellenwerte (DNQP 2020):\n• 0-3 leicht — beobachten\n• 4-6 mäßig — interventionspflichtig\n• 7-10 stark — sofort handeln\n\nAlternative Skalen: KUSS (Kleinkinder < 4 Jahre), BESD/PAINAD (Demenz, Bauer), VAS, CPOT (Intensiv). Faustregel: **NRS ≥ 4 ist NIE \"wenig\".**",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 23,
};

// CE-02 Situation Frau M. — Phase 4: Maßnahmen durchführen
// Steps: 7 · Bloom: B4-B5 · Herzstück der Situation (2 Branchings)
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-frau-m-durchfuehren",
  phase: "durchfuehren",
  titel: "Maßnahmen durchführen",
  titelB1: "Maßnahmen umsetzen",
  kontext:
    "03:14 Uhr. Frau Keller hat den Türrahmen kurz mit der Hüfte angeschoben und steht jetzt neben dir. Sie riecht nach Veilchen-Bonbon, ihr Kasak ist an der Schulter leicht gebügelt, die Ärmel hochgekrempelt. Sie wirft einen Blick auf Frau M., einen auf dich, sagt halblaut: 'Ok. Was hast du?' — und du merkst, dass jetzt nicht die Zeit für Selbstzweifel ist. Du gehst durch deinen Plan, Stichpunkt für Stichpunkt. Sie nickt, ergänzt eine Sache, dann: 'Gut. Mach.' Du führst jetzt — gemeinsam mit Frau Keller. Frau M. liegt noch in derselben Position, aber sie zittert leicht, der Boden ist kalt, ihre Füße in dünnen Wollsocken sind weiß. Ihr werdet sie hochbringen — nicht heben, sondern kinästhetisch begleiten: Frau M. macht die Bewegung selbst, ihr sichert über Seitlage und Kniestand, wie du es im Skills-Lab geübt hast. Aber: Du hast es noch nie nachts mit einer realen 82-Jährigen getan. Dein Herz schlägt höher, du fühlst es bis in die Kehle. Du hockst dich an ihre rechte Seite, sprichst leise: 'Frau M., wir gehen jetzt vorsichtig hoch — gemeinsam. Sie machen die Bewegung, ich begleite. Erst zur Seite, dann auf die Knie, dann ans Bett. Sie sagen das Tempo. Ja?' Sie nickt. Ihre Augen sind wach. Du spürst die Wärme ihres Oberkörpers durch die dünne Baumwolle, ihre Hand ist leicht. Frau Keller ist links, stützt das linke Becken und kontrolliert die Hüfte. Drei, zwei, eins — und es geht. Langsam. Geräuschlos. Sie atmet kurz ein, einmal stöhnt sie leise, du fragst sofort nach den Schmerzen — NRS 5. Das ist moderater Schmerz, kein 'im Rahmen' — du wirst das im SBAR-Anruf an den Arzt erwähnen und Bedarfsanalgesie ansprechen. Im Bett dann: zudecken, Kopfteil leicht hoch, Rufknopf in die Hand. Aber das ist nur Schritt eins. Vor dir liegt jetzt die zweite Schwelle: SBAR-Anruf an den diensthabenden Arzt. Die Stimme am Telefon hörbar müde. Du hast genau diese Sätze. Danach: Schellong-Test vor erster Mobilisation — RR im Liegen messen, mindestens eine Minute am Bettrand sitzen lassen, dann erst RR im Stehen, erst dann Standversuch. Und dann ein Moment, den keine Checkliste vorhersagt: Frau M. greift nach deiner Hand, schaut dich an, fragt: 'Sind Sie böse auf mich, dass ich gestürzt bin?' Du hältst inne. Was sagst du? Später, gegen 04:30, wirst du mit ihr über den Hüftprotektor sprechen — sie weiß noch nicht, dass es so etwas gibt. Im Hintergrund klappert leise der Medikamentenwagen auf dem Flur, Frau Keller hat ihre Hand kurz auf deine Schulter gelegt und genickt, ein wortloses 'mach weiter'. Vor dem Fenster zieht eine Krankenwagensirene langsam vorbei, fern, gedämpft. Die nächsten 90 Minuten sind nicht Routine. Sie sind das Herzstück dieser Schicht — fachlich präzise und menschlich aufmerksam. Beides, gleichzeitig. Du wirst entscheiden müssen, manchmal in Sekunden, manchmal in Minuten, immer mit Frau M. als Mensch im Mittelpunkt.",
  kontextB1:
    "03:14 Uhr. Frau Keller ist da. Sie steht neben dir. Sie sagt leise: 'Ok. Was hast du?' Du erklärst deinen Plan. Sie nickt. Sie sagt: 'Gut. Mach.' Du führst jetzt — gemeinsam mit Frau Keller. Frau M. liegt noch auf dem Boden. Sie zittert ein bisschen. Der Boden ist kalt. Ihre Füße sind weiß. Ihr bringt sie hoch. Nicht heben. Frau M. macht die Bewegung selbst — ihr begleitet und sichert. Über die Seite, auf die Knie, ins Bett. Das nennt man Kinästhetik. Du hast es geübt. Aber heute ist es echt. Dein Herz schlägt schnell. Du hockst dich neben Frau M. Du sagst leise: 'Frau M., wir gehen jetzt gemeinsam hoch. Sie machen die Bewegung, ich begleite. Sie sagen das Tempo. Ja?' Sie nickt. Frau Keller ist auf der anderen Seite. Sie stützt die linke Seite und das Becken. Drei, zwei, eins. Es geht. Langsam. Frau M. stöhnt einmal kurz. Du fragst nach den Schmerzen. 5 von 10. Das ist nicht wenig — du wirst das dem Arzt sagen und nach Schmerzmedikation fragen. Im Bett: zudecken, Kopf hoch, Rufknopf in ihre Hand. Aber das ist erst Schritt eins. Jetzt rufst du den Arzt an. Du benutzt SBAR. Du hast die Sätze im Kopf. Danach: Schellong-Test. Du misst Blutdruck im Liegen. Dann setzt sich Frau M. an den Bettrand. Sie wartet mindestens eine Minute. Du misst wieder. Erst dann: Aufstehen. Und dann: Frau M. nimmt deine Hand. Sie schaut dich an. Sie fragt: 'Sind Sie böse auf mich?' Du hältst inne. Was sagst du? Später um 04:30 redest du mit ihr über den Hüftprotektor. Sie kennt das Wort nicht. Wie bringst du es ein? Die nächsten 90 Minuten sind keine Routine. Du musst fachlich richtig sein und gleichzeitig menschlich da sein. Beides — gleichzeitig.",
  kernSteps: [
    // Step 4.1 — Sorting: Transfer vom Boden
    {
      stepId: "ce02-frau-m-dur-01-transfer-vom-boden",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022", "Kinästhetik-Prinzipien"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-dur-transfer",
      tag: "pflege",
      bildkategorie: "szene",
      imageAlt:
        "Ältere Frau auf dem Krankenhausboden neben dem Bett, Pflegekraft kniet unterstützend, ruhige kontrollierte Atmosphäre",
      bildhinweis:
        "Elderly woman on hospital floor next to bed, nurse kneeling beside her in supportive posture, calm controlled atmosphere, respectful professional setting, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Transfer von Frau M. vom Boden ins Bett",
        body: "Frau M. liegt noch immer neben dem Bett. Keine sichtbare Hüftfraktur-Zeichen (keine Verkürzung, keine Außenrotation), Schmerzen NRS 4/10. Du hast Frau Keller dazugeholt. Jetzt: Transfer über Seitlage und Kniestand (kinästhetisches Prinzip — nicht heben, sondern bewegen lassen). Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Frau M. vom Boden ins Bett",
        body: "Frau M. liegt noch neben dem Bett. Keine sichtbaren Zeichen für einen Hüftbruch. Schmerzen: 4 von 10. Frau Keller ist da. Jetzt bringst du sie ins Bett — nicht heben, sondern führen (Kinästhetik). Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Sortiere die Transfer-Schritte in die richtige Reihenfolge.",
        sortItems: [
          "Kurzes Assessment Wirbelsäule/Hüfte — keine Fraktur-Zeichen?",
          "Frau M. informieren, was jetzt passiert",
          "Frau Keller dazuholen für 2-Personen-Transfer",
          "Kinästhetischer Transfer über Seitlage und Kniestand (Bewegung führen, nicht heben)",
          "Im Bett: Lagerung prüfen, Schmerz-Reassessment",
        ],
      },
    },

    // Step 4.2 — Freetext (kurz, SBAR)
    {
      stepId: "ce02-frau-m-dur-02-arzt-sbar",
      phase: 4,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022", "SBAR-Standard"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-frau-m-dur-sbar",
      tag: "pflege",
      contentC1: {
        title: "SBAR-Anruf beim diensthabenden Arzt",
        body: "Frau M. ist im Bett, Vitalzeichen stabil, Schmerz NRS 4 in linker Hüfte. Du rufst jetzt den diensthabenden Arzt an. Formuliere in 2-3 Sätzen die Situation in SBAR-Struktur. Die KI prüft, ob alle 4 Elemente (S, B, A, R) enthalten sind.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Arzt anrufen — SBAR",
        body: "Frau M. liegt im Bett. Vitalzeichen sind stabil. Schmerz: 4 von 10 in der Hüfte. Du rufst den Arzt an. Schreibe in 2-3 Sätzen, was du sagst. Benutze SBAR: Situation, Background (Hintergrund), Assessment (Einschätzung), Recommendation (Empfehlung).",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Schreibe den SBAR-Anruf an den diensthabenden Arzt in 2-3 Sätzen.",
        musterantwort:
          "S — Sturz heute Nacht 02:40 Uhr, Zimmer 14, Frau M. 82. B — Pneumonie Tag 3, Parkinson II, neu Zolpidem seit 2 Tagen, HCT bekannt. A — ansprechbar, orientiert, Hüftschmerz links NRS 4, keine sichtbare Deformität, VZ stabil (RR 135/82, HF 78, SpO2 95 %). R — Bitte Arzt-Visite und Medikamentenreview, speziell Zolpidem.",
        bewertungskriterien: [
          "S (Situation): Sturz, Zeit, Ort, Patientin genannt",
          "B (Background): Hintergrund — Pneumonie, Parkinson, Zolpidem neu",
          "A (Assessment): Einschätzung — ansprechbar/orientiert, Schmerz, Vitalzeichen",
          "R (Recommendation): Empfehlung — Visite + Medikamentenreview Zolpidem",
        ],
        satzanfaengeB1: [
          "Situation: Um [Uhrzeit] ist Frau M. gestürzt …",
          "Hintergrund: Sie ist im Krankenhaus wegen …",
          "Einschätzung: Sie ist wach und orientiert, hat …",
          "Empfehlung: Bitte kommen Sie zur Visite und …",
        ],
      },
    },

    // Step 4.2b — Pflegewagen: Material für die erste Mobilisation vorbereiten
    {
      stepId: "ce02-frau-m-dur-02b-mobi-vorbereitung",
      phase: 4,
      stepType: "pflegewagen",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022", "I Care Pflege"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-mobi-vorbereitung",
      tag: "pflege",
      contentC1: {
        title: "Material vorbereiten — erste Mobilisation",
        body: "Frau M. liegt jetzt im Bett, der Arzt ist informiert. Bevor du sie zum ersten Aufstehen nach dem Sturz mobilisierst, richtest du dein Material her. Was brauchst du wirklich — und was nicht?",
        glossarBegriffe: ["Schellong-Test", "Trochanter major", "Orthostase"],
      },
      contentB1: {
        title: "Material vorbereiten",
        body: "Frau M. liegt jetzt im Bett. Der Arzt weiß Bescheid. Jetzt bereitest du Marianne vor, dass sie das erste Mal aufsteht. Was legst du auf den Wagen? Was brauchst du nicht?",
        glossarBegriffe: ["Schellong-Test"],
      },
      question: {
        fragetext:
          "Welches Material brauchst du für Mariannes erste Mobilisation? Tippe ein Material an, dann auf den passenden Bereich.",
        pflegewagen: {
          fragetext:
            "Welches Material brauchst du für Mariannes erste Mobilisation? Tippe ein Material an, dann auf den passenden Bereich.",
          fragetextB1:
            "Was brauchst du für die erste Mobilisation? Tippe ein Material an. Dann tippe auf den richtigen Bereich.",
          zonen: [
            {
              id: "wagen",
              label: "Mobilisations-Wagen",
              labelB1: "Auf den Wagen",
              beschreibung: "Was du JETZT für Marianne brauchst",
              beschreibungB1: "Was du jetzt brauchst",
              variant: "primary",
            },
            {
              id: "weglegen",
              label: "Brauche ich jetzt nicht",
              labelB1: "Brauche ich nicht",
              beschreibung: "Gehört nicht zur Mobilisation",
              beschreibungB1: "Nicht für jetzt",
              variant: "discard",
            },
          ],
          items: [
            {
              id: "socken",
              label: "Antirutsch-Socken",
              labelB1: "Anti-Rutsch-Socken",
              icon: "Footprints",
              korrekteZoneId: "wagen",
              erklaerung:
                "Schützen vor Ausrutschen auf glattem Linoleum — Standard bei jedem Mobilisations-Versuch nach Sturz (DNQP).",
              erklaerungB1:
                "Sie schützen vor dem Ausrutschen. Das ist wichtig nach einem Sturz.",
            },
            {
              id: "hueftprotektor",
              label: "Hüftprotektor",
              labelB1: "Hüft-Schutz",
              icon: "ShieldCheck",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Im Akut-Setting nach Sturz nicht primär — die Indikation muss erst geprüft werden (Akzeptanz, Hauttoleranz, Gangbild). Das wird später in Ruhe besprochen, nicht spontan beim ersten Aufstehen. Siehe MC-Step im Anschluss.",
              erklaerungB1:
                "Jetzt nicht. Erst muss man prüfen, ob Frau M. das gut findet, ob die Haut den Schutz verträgt und wie sie geht. Das macht ihr später in Ruhe.",
            },
            {
              id: "rrmanschette",
              label: "Blutdruckmanschette",
              labelB1: "Blutdruck-Manschette",
              icon: "Gauge",
              korrekteZoneId: "wagen",
              erklaerung:
                "Schellong-Test vor dem Aufstehen: messen im Liegen, im Sitzen, im Stehen. Orthostase ist die häufigste Sturzursache bei älteren Menschen unter Z-Substanzen.",
              erklaerungB1:
                "Du misst den Blutdruck im Liegen, im Sitzen, im Stehen. So findest du heraus, ob der Kreislauf stabil ist.",
            },
            {
              id: "rufknopf",
              label: "Notrufkabel in Reichweite",
              labelB1: "Notruf-Kabel",
              icon: "BellRing",
              korrekteZoneId: "wagen",
              erklaerung:
                "Marianne muss jederzeit Hilfe rufen können — auch wenn du den Raum kurz verlässt, um etwas zu holen.",
              erklaerungB1:
                "Marianne muss immer Hilfe rufen können. Das Kabel ist wichtig.",
            },
            {
              id: "wasser",
              label: "Trinkglas Wasser",
              labelB1: "Glas Wasser",
              icon: "GlassWater",
              korrekteZoneId: "wagen",
              erklaerung:
                "Dehydratation verstärkt Orthostase. Vor und nach dem Aufstehen trinken stabilisiert den Kreislauf.",
              erklaerungB1:
                "Wasser hilft dem Kreislauf. Marianne trinkt vor und nach dem Aufstehen.",
            },
            {
              id: "brille",
              label: "Brille",
              labelB1: "Brille",
              icon: "Glasses",
              korrekteZoneId: "wagen",
              erklaerung:
                "Marianne hat Katarakt. Ohne Brille verschlechtert sich die Tiefenwahrnehmung — das Sturzrisiko steigt deutlich.",
              erklaerungB1:
                "Marianne sieht ohne Brille schlecht. Sie braucht die Brille zum sicheren Aufstehen.",
            },
            {
              id: "buch",
              label: "Buch",
              labelB1: "Buch",
              icon: "Book",
              korrekteZoneId: null,
              erklaerung:
                "Das Buch ist für die Pause später — bei der Mobilisation lenkt es nur ab.",
              erklaerungB1:
                "Das Buch ist für später. Jetzt nicht wichtig.",
            },
            {
              id: "spray",
              label: "Putzspray",
              labelB1: "Putz-Spray",
              icon: "SprayCan",
              korrekteZoneId: null,
              erklaerung:
                "Reinigung gehört nicht zur Mobilisationsvorbereitung. Anderer Arbeitsbereich, andere Zeit.",
              erklaerungB1:
                "Putzen machst du jetzt nicht. Das ist eine andere Aufgabe.",
            },
            {
              id: "schere",
              label: "Verbandschere",
              labelB1: "Verband-Schere",
              icon: "Scissors",
              korrekteZoneId: null,
              erklaerung:
                "Frau M. hat keine offene Wunde, die einen Verbandwechsel braucht. Die Schere wäre für andere Patient:innen.",
              erklaerungB1:
                "Marianne hat keine Wunde. Die Schere brauchst du nicht.",
            },
          ],
          begruendung:
            "Sturzprophylaxe nach Sturz folgt einem klaren Standard (DNQP): Sicherheit zuerst (Antirutsch-Socken, Brille, Notruf), Kreislauf-Stabilisierung (Schellong-Test, Wasser). Frakturschutz wie der Hüftprotektor wird nicht spontan beim ersten Aufstehen eingeführt — die Indikation klärt ihr später in Ruhe (siehe MC-Step im Anschluss).",
          begruendungB1:
            "Nach einem Sturz brauchst du jetzt: Schutz (Socken, Brille), Sicherheit (Notruf), Kreislauf-Hilfe (Blutdruck, Wasser). Den Hüft-Schutz besprichst du später in Ruhe — nicht jetzt beim ersten Aufstehen.",
        },
      },
    },

    // Step 4.3 — Branching (GROSS, 3 Pfade): Mobilisation-Hauptbranching
    {
      stepId: "ce02-frau-m-dur-03-mobilisation-hauptbranching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-dur-mobilisation-haupt",
      tag: "pflege",
      contentC1: {
        title: "HAUPT-BRANCHING: Mobilisation zur Toilette?",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. ist zurück im Bett. Schmerz NRS 4/10. Sie wendet sich zu dir und sagt:\n\n> \"Ich muss wirklich dringend zur Toilette. Ich halte das nicht mehr.\"\n\nEs ist 03:30 Uhr. Was tust du? Hier gibt es drei realistische Optionen — deine Wahl prägt die nächsten Schritte.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "WICHTIGE ENTSCHEIDUNG: Zur Toilette?",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. ist im Bett. Schmerz: 4 von 10. Sie sagt:\n\n> \"Ich muss wirklich zur Toilette. Ich kann nicht mehr warten.\"\n\nEs ist 03:30 Uhr. Was tust du? Drei Möglichkeiten. Welche wählst du?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wie reagierst du auf Frau M.s Wunsch zur Toilette?",
        branchingOptions: [
          {
            text: "Ich hole den Toilettenstuhl ans Bett, mache 2-Personen-Transfer mit Frau Keller und bleibe bei Frau M., bis sie fertig ist.",
            feedback:
              "Perfekt. Du respektierst ihre Würde (keine Bettpfanne für eine orientierte Frau), gibst ihrem Bedürfnis nach (akut, kein Aufschieben), sicherst den Transfer (2 Personen nach frischem Sturz), und bleibst präsent (Sturz-Prävention + Beruhigung). Das ist der richtige Pfad. Als Nächstes erlebst du das Dialog-Gespräch am Bettrand mit Frau M.'s Parkinson-Hinweis.",
            feedbackB1:
              "Perfekt. Du denkst an alles: Würde (kein Bettpfanne), akutes Bedürfnis (jetzt gehen), Sicherheit (2 Personen nach dem Sturz), Frau M. nicht allein lassen. Das ist richtig. Jetzt geht es zum Dialog am Bettrand.",
            isCorrect: true,
          },
          {
            text: "Ich gebe ihr die Bettpfanne, das ist sicherer.",
            feedback:
              "Gut gemeint, aber problematisch. Frau M. ist eine orientierte, ehemals selbstständige Frau. Eine Bettpfanne in dieser Situation wäre eine **Entwürdigung**, die sie noch tiefer in die Scham treibt ('jetzt werde ich wie ein Säugling behandelt'). Fachlich: Sicherheit ist wichtig, aber nicht um den Preis der Würde. Der Toilettenstuhl + 2-Personen-Transfer ist beides: sicher UND würdevoll. Überdenke deine Wahl.",
            feedbackB1:
              "Gut gemeint, aber nicht gut. Frau M. ist wach und war zuhause selbstständig. Eine Bettpfanne wäre für sie peinlich und entwürdigend. Fachlich: Sicher sein ist wichtig — aber nicht um den Preis ihrer Würde. Besser: Toilettenstuhl + 2 Personen. Das ist beides — sicher UND würdevoll.",
            isCorrect: false,
          },
          {
            text: "Sie soll warten, bis morgen früh die Physio kommt.",
            feedback:
              "Das geht nicht. Drei Probleme: (1) Würde — Frau M. hat akutes Bedürfnis, Warten ist respektlos. (2) Fachlich — Harnverhalt über Stunden kann Harnwegsinfekt fördern (bei ohnehin pneumonie-belasteter Immunlage gefährlich). (3) Zeitrahmen — Physio kommt erst ab 8 Uhr, das sind 4,5 Stunden. Als Nachtdienst-Pflege musst DU jetzt eine Lösung finden. Der richtige Weg: Toilettenstuhl + 2-Personen-Transfer.",
            feedbackB1:
              "Das geht nicht. Drei Gründe: (1) Würde — Frau M. muss jetzt. Warten ist respektlos. (2) Fachlich — wenn sie den Urin zurückhält, kann eine Blasenentzündung kommen. Sie hat schon Pneumonie. (3) Zeit — Physio kommt erst um 8 Uhr, das sind 4,5 Stunden. Du musst jetzt eine Lösung finden. Richtig: Toilettenstuhl + 2 Personen.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.4 — Dialog (4 Phasen): Mobilisation
    {
      stepId: "ce02-frau-m-dur-04-dialog-mobilisation",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-dur-dialog-mobilisation",
      tag: "pflege",
      contentC1: {
        title: "Gespräch am Bettrand",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt am Bettrand, Füße auf dem Boden. Du hast den Schellong-Test abgewartet: RR im Liegen 138/82, dann mindestens eine Minute Sitzen mit Beinen unten — RR im Sitzen 132/80, kein Schwindel. Kreislauf stabil, Aufstehen jetzt vertretbar. Frau Keller steht bereit mit dem Toilettenstuhl. Frau M. sagt leise:\n\n> \"Geben Sie mir einen Moment. Meine Beine fühlen sich an, als gehörten sie mir nicht ganz. Wenn ich kurz warte, wird es besser — das kenne ich so vom Parkinson, das ist normal.\"",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Reden am Bettrand",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt auf der Bettkante. Füße am Boden. Du hast den Schellong-Test gemacht: Blutdruck im Liegen 138/82, im Sitzen (nach 1 Minute) 132/80. Der Kreislauf ist stabil. Sie kann sicher aufstehen. Frau Keller steht bereit mit dem Toilettenstuhl. Frau M. sagt leise:\n\n> \"Geben Sie mir einen Moment. Meine Beine fühlen sich an, als wären sie nicht meine. Wenn ich warte, wird es besser — das kenne ich vom Parkinson, das ist normal.\"",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort und dein Verhalten.",
        patientName: "Frau M.",
        dialogPhases: [
          {
            context:
              "Du nimmst wahr, dass Frau M. gerade etwas Wichtiges sagt. Du reagierst:",
            contextB1:
              "Du siehst: Frau M. sagt etwas Wichtiges. Wie antwortest du?",
            speaker: "Du",
            options: [
              {
                text: "\"Das machen wir, Frau M. Nehmen Sie sich die Zeit, die Sie brauchen. Ich warte hier mit Ihnen.\"",
                textB1:
                  "\"Natürlich, Frau M. Nehmen Sie sich Zeit. Ich warte bei Ihnen.\"",
                patientResponse:
                  "Frau M. atmet tief ein und aus. \"Danke. Richard, mein Mann, hatte das auch so gesagt — Zeit lassen hilft.\"",
                patientResponseB1:
                  "Frau M. atmet tief. \"Danke. Mein Mann sagte immer: Zeit lassen hilft.\"",
                score: 3,
                feedback:
                  "Ideal. Validierend, präsent, ohne Zeitdruck. Frau M. fühlt sich sicher. Der Satz 'Richard, mein Mann' zeigt dir: Sie öffnet sich. Solche Momente schaffen Vertrauen, das du in den nächsten Stunden brauchst.",
                feedbackB1:
                  "Perfekt. Du gibst ihr Zeit. Du bist da. Frau M. fühlt sich sicher. Sie spricht sogar über ihren Mann — das heißt: Sie vertraut dir jetzt mehr.",
              },
              {
                text: "\"Wir müssen aber auch weiterkommen — sonst dauert das bis morgen früh.\"",
                textB1:
                  "\"Wir müssen auch weitermachen, sonst dauert es bis morgen.\"",
                patientResponse:
                  "Frau M. versteift sich. \"Natürlich. Ich versuche mein Bestes.\"",
                patientResponseB1:
                  "Frau M. wird steif. \"Natürlich. Ich gebe mir Mühe.\"",
                score: 1,
                feedback:
                  "Zeitdruck ist in dieser Situation destruktiv. Frau M. spürt: Sie macht Umstände. Sie versteift sich, was orthostatische Dysregulation verschlimmern kann (Schwindel beim Aufstehen). Gerade jetzt braucht sie Raum, nicht Tempo.",
                feedbackB1:
                  "Zeitdruck ist hier falsch. Frau M. denkt: 'Ich mache Umstände.' Sie wird angespannt. Das macht das Aufstehen gefährlicher (sie wird schwindelig). Sie braucht Ruhe, keinen Druck.",
              },
              {
                text: "\"Soll ich Ihnen die Beine etwas massieren, dann geht es schneller?\"",
                textB1:
                  "\"Soll ich Ihnen die Beine massieren, dann geht es schneller?\"",
                patientResponse:
                  "Frau M. lächelt höflich. \"Das ist nett, aber nein danke. Warten reicht.\"",
                patientResponseB1:
                  "Frau M. lächelt höflich. \"Das ist lieb, aber nein danke. Warten ist gut.\"",
                score: 2,
                feedback:
                  "Gut gemeint, aber übereifrig. Frau M. hat dir gerade gesagt, dass sie Zeit braucht (Parkinson-bedingt). Eine Massage ändert das nicht und könnte als Bevormundung wirken. Besser: Einfach da sein, Ruhe aushalten.",
                feedbackB1:
                  "Lieb gemeint, aber zu viel. Frau M. hat gesagt: Warten hilft. Massage bringt nichts und kann bevormundend wirken. Besser: Einfach da sein, die Stille aushalten.",
              },
            ],
          },
          {
            context:
              "Nach 2 Minuten Stille sagt Frau M. leise: 'Jetzt geht es.' Wie gehst du weiter?",
            contextB1:
              "Nach 2 Minuten Stille sagt Frau M.: 'Jetzt geht es.' Wie machst du weiter?",
            speaker: "Du",
            options: [
              {
                text: "\"Perfekt. Ich stehe neben Ihnen, Frau Keller auf der anderen Seite. Wir führen die Bewegung, Sie sagen das Tempo vor.\"",
                textB1:
                  "\"Perfekt. Ich stehe neben Ihnen, Frau Keller auf der anderen Seite. Wir helfen, Sie bestimmen das Tempo.\"",
                patientResponse:
                  "Frau M. nickt fest. \"Ja. Drei, zwei, eins.\" — sie steht auf.",
                patientResponseB1:
                  "Frau M. nickt fest. \"Drei, zwei, eins.\" — sie steht auf.",
                score: 3,
                feedback:
                  "Optimal. 2-Personen-Transfer mit klarer Rollenverteilung. Wichtig: 'Sie sagen das Tempo vor' — das gibt Frau M. die Kontrolle zurück, die sie nach dem Sturz verloren hat. Kinästhetische Prinzipien werden eingehalten.",
                feedbackB1:
                  "Sehr gut. 2 Personen zum Helfen. Klare Rollen. Wichtig: 'Sie bestimmen das Tempo.' Das gibt Frau M. die Kontrolle. Nach dem Sturz hat sie das Gefühl: Alles passiert mit ihr, nicht durch sie. Du gibst ihr die Kontrolle zurück.",
              },
              {
                text: "\"Gut — ich nehme Sie unter den Achseln und helfe Ihnen hoch, dann gehen wir langsam.\"",
                textB1:
                  "\"Gut — ich nehme Sie unter den Achseln und helfe Ihnen hoch. Dann gehen wir langsam.\"",
                patientResponse:
                  "Frau M.: \"Oh — äh, ja…\"",
                patientResponseB1:
                  "Frau M.: \"Oh — ja…\"",
                score: 1,
                feedback:
                  "Problematisch. 'Unter den Achseln nehmen' ist a) kinästhetisch falsch (Hebeln statt Bewegung führen — dein Rücken plus Schultergelenk-Risiko bei Frau M.) und b) entmachtet sie (sie wird zum Objekt, verliert die Kontrolle). Korrekt: Frau M. macht die Bewegung selbst, du sicherst seitlich am Becken/Rumpf, Frau Keller auf der anderen Seite. Tempo bestimmt die Patientin.",
                feedbackB1:
                  // FIX (walkthrough B-08): Sandwich-Prinzip — Loben vor Korrigieren.
                  "Du willst Frau M. helfen — das ist richtig. Aber 'Unter den Achseln' passt hier nicht. Erstens: Dein Rücken leidet. Zweitens: Frau M.s Schulter kann verletzt werden (sie ist 82 mit Osteoporose). Drittens: Sie wird zum Objekt, verliert die Kontrolle. Besser: Sie macht die Bewegung selbst, du und Frau Keller sichern seitlich. Du bist nah dran!",
              },
            ],
          },
          {
            context:
              "Frau M. steht sicher, du und Frau Keller stützen. Sie setzt sich auf den Toilettenstuhl. Nach 2 Minuten ist sie fertig. Transfer zurück ins Bett. Sie sagt:",
            contextB1:
              "Frau M. steht sicher. Du und Frau Keller stützen. Sie geht zum Toilettenstuhl. Danach zurück ins Bett. Sie sagt:",
            speaker: "Frau M.",
            options: [
              {
                text: "\"Das war weniger schlimm, als ich dachte. Danke, dass Sie das so ruhig gemacht haben.\"",
                textB1:
                  "\"Das war nicht so schlimm wie ich dachte. Danke, dass Sie ruhig waren.\"",
                patientResponse: "(Frau M. ist sichtlich erleichtert.)",
                patientResponseB1: "(Frau M. ist erleichtert.)",
                score: 3,
                feedback:
                  "Das ist der Kernmoment. Frau M. hat einen ersten Mini-Erfolg gegen die Post-Fall-Angst erlebt. Diesen Moment musst du jetzt gleich in Worte fassen (nächster Dialog-Schritt).",
                feedbackB1:
                  "Das ist ein wichtiger Moment. Frau M. hat einen kleinen Erfolg. Sie hat die Angst etwas besiegt. Halte das fest — erzähle es ihr später.",
              },
              {
                text: "\"Bitte sagen Sie niemandem, dass ich so umständlich bin.\"",
                textB1:
                  "\"Bitte sagen Sie niemandem, dass ich so umständlich bin.\"",
                patientResponse: "(Frau M. schaut beschämt.)",
                patientResponseB1: "(Frau M. schaut beschämt.)",
                score: 2,
                feedback:
                  "Wichtiger Moment. Frau M. zeigt offen ihre Scham — und zeigt damit Vertrauen zu dir. Die fachlich richtige Reaktion ist sofortige Validierung: 'Sie sind nicht umständlich, Frau M. Sie sind eine 82-jährige Frau, die nach einem Sturz das erste Mal aufsteht — und Sie machen das sehr gut.' Die Aussage hat zwei Teile: 1. Beschämung explizit zurückweisen ('nicht umständlich'). 2. Realität benennen (Sturz + Alter + erstmaliges Aufstehen). Damit nimmst du der Scham die Grundlage.",
                feedbackB1:
                  "Wichtig. Frau M. schämt sich. Sie zeigt dir das offen — sie vertraut dir. Was du jetzt sagst: 'Sie sind nicht umständlich, Frau M. Sie sind 82, Sie sind gestürzt, und Sie stehen das erste Mal wieder auf. Sie machen das sehr gut.' Zwei Teile: 1. 'Nicht umständlich' (Scham widersprechen). 2. Realität benennen (Alter, Sturz, erstes Aufstehen). So nimmst du der Scham den Boden.",
              },
            ],
          },
          {
            context:
              "Frau M. ist zurück im Bett. Wie schließt du den Transfer ab?",
            contextB1: "Frau M. liegt wieder im Bett. Wie endest du?",
            speaker: "Du",
            options: [
              {
                text: "\"Frau M., ich will Ihnen kurz sagen: Das haben Sie richtig gut gemacht. Drei Minuten warten, ruhig aufgestanden, Tempo selbst bestimmt — genau so macht man das. Erzählen Sie mir das morgen früh nochmal, ja?\"",
                textB1:
                  "\"Frau M., das haben Sie sehr gut gemacht. Warten, ruhig aufstehen, Tempo selbst bestimmen — so ist es richtig. Erzählen Sie mir das morgen nochmal, ja?\"",
                patientResponse:
                  "Frau M. sieht dich an. Ihre Augen werden feucht. \"Das werde ich. Danke.\"",
                patientResponseB1:
                  "Frau M. schaut dich an. Tränen kommen. \"Das mache ich. Danke.\"",
                score: 3,
                feedback:
                  "Hervorragend. Positive Verstärkung, konkret (nicht 'gut gemacht' allgemein, sondern die 3 richtigen Dinge benannt), und Anker für morgen ('erzählen Sie mir das nochmal'). Das wirkt gegen das Post-Fall-Syndrom — ein konkret erinnerter Erfolg.",
                feedbackB1:
                  "Super. Lob ist konkret (3 Sachen benannt, nicht nur 'gut'). Und: 'Erzählen Sie morgen nochmal' macht einen Anker für morgen. Das ist wichtig gegen die Post-Fall-Angst — sie erinnert sich an einen Erfolg.",
              },
              {
                text: "\"So, geschafft — schlafen Sie gut.\"",
                textB1: "\"Geschafft — schlafen Sie gut.\"",
                patientResponse: "Frau M. nickt kurz.",
                patientResponseB1: "Frau M. nickt.",
                score: 1,
                feedback:
                  "Du lässt eine wichtige Chance ungenutzt. Ein strukturierter Abschluss mit positiver Verstärkung hilft gegen das Post-Fall-Syndrom. Beim nächsten Mal: Erfolge benennen.",
                feedbackB1:
                  "Chance verpasst. Mit Lob kann man die Angst kleiner machen. Nächstes Mal: Sag konkret, was sie gut gemacht hat.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.5 — Branching (Klein, 2 Pfade): Balance-Check
    {
      stepId: "ce02-frau-m-dur-05-balance-check-kleinbranching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-dur-balance",
      tag: "pflege",
      contentC1: {
        title: "Schwindel beim Aufstehen — was tust du?",
        body: "Anders als im Hauptbranching: Hier lagst du mit Pfad A richtig und Frau M. ist bereits unterwegs zum Toilettenstuhl. Beim zweiten Schritt vom Bett weg wird sie plötzlich kurz schwindelig und greift nach deinem Arm. Ihre Knie zittern.",
        glossarBegriffe: ["Orthostatische Dysregulation"],
      },
      contentB1: {
        title: "Schwindel beim Aufstehen",
        body: "Beim zweiten Schritt zum Toilettenstuhl wird Frau M. schwindelig. Sie greift deinen Arm. Ihre Knie zittern. Was machst du?",
        glossarBegriffe: ["Orthostatische Dysregulation"],
      },
      question: {
        fragetext: "Wie reagierst du auf Frau M.s Schwindel?",
        branchingOptions: [
          {
            text: "Ich setze sie sofort wieder hin (zurück auf die Bettkante), hole Frau Keller dazu und mache ein Reassessment.",
            feedback:
              "Genau richtig. Bei Schwindel NACH frischem Sturz + Parkinson + Sedierung durch Zolpidem ist Sicherheit die absolute Priorität. Setzen = sicherer Untergrund. Reassessment = Schweregrad prüfen. Frau Keller dazu = 2-Personen-Unterstützung. Mögliche Ursachen: Orthostase (Blutdruckabfall), Restwirkung Zolpidem, Muskelzittern nach Schrecken. Nicht weitergehen!",
            feedbackB1:
              "Richtig. Nach dem Sturz + Parkinson + Zolpidem ist Sicherheit wichtig. Setzen = sicherer. Reassessment = prüfen wie schlimm. Frau Keller dazu = 2 Personen. Mögliche Gründe: Blutdruck fällt, Zolpidem wirkt noch, Muskeln zittern vom Schreck. Nicht weitergehen!",
            isCorrect: true,
          },
          {
            text: "Ich sage ihr, sie soll tief atmen, und wir gehen langsam weiter zum Toilettenstuhl.",
            feedback:
              "Gefährlich. Bei Schwindel NACH frischem Sturz, Parkinson und Restwirkung Zolpidem ist 'weitergehen' keine Option — das Sturzrisiko ist akut. Ein zweiter Sturz in derselben Nacht wäre traumatisch (Post-Fall-Syndrom verstärken) und fachlich vermeidbar. Tief atmen hilft bei leichter Nervosität, nicht bei echter Orthostase. Richtiger Weg: Sofort sicheren Untergrund, Reassessment, 2. Person.",
            feedbackB1:
              "Gefährlich. Nach dem Sturz + Parkinson + Zolpidem ist 'weitergehen' falsch. Ein zweiter Sturz in derselben Nacht wäre sehr schlimm. Tief atmen hilft bei Nervosität, nicht bei echter Orthostase. Richtig: Sofort hinsetzen, schauen, 2. Person holen.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.6 — Text (scenario): Beratung gegen Angst
    {
      stepId: "ce02-frau-m-dur-06-beratung-angst",
      phase: 4,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022 Kriterium 2 Information & Beratung"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-dur-beratung",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Beratung gegen Sturzangst — 3 Bausteine",
        body: "Nach der Toilette, zurück im Bett. Frau M. ist erleichtert, aber immer noch leicht zittrig. Du setzt dich kurz zu ihr. Jetzt: Beratung gegen die Sturzangst in 3 Bausteinen.\n\n**Baustein 1 — Ursache benennen.** Nicht 'das Alter', sondern konkret: 'Das Zolpidem hat zu stark gewirkt. Ich melde das morgen dem Arzt, dann wird es wahrscheinlich abgesetzt oder getauscht.' Ursache-Aufklärung gibt Kontroll-Gefühl zurück.\n\n**Baustein 2 — Gemeinsamen Plan für morgen.** 'Morgen kommt die Physio vorbei und übt mit Ihnen das sichere Aufstehen. Das werden wir dreimal machen, bevor Sie nach Hause gehen. Dann haben Sie wieder Sicherheit.' Plan = Struktur, Struktur = Kontrolle.\n\n**Baustein 3 — Konkrete Sicherheitsmaßnahmen.** 'Heute Nacht lassen wir das Nachtlicht an. Die Klingel liegt hier, in Ihrer Reichweite. Wenn Sie zur Toilette müssen, drücken Sie — ich komme. Der Toilettenstuhl bleibt neben dem Bett stehen.' Konkrete Sicherheit, die Frau M. sehen und anfassen kann.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
      contentB1: {
        title: "Gegen die Angst — 3 Schritte",
        body: "Frau M. ist zurück im Bett. Sie ist etwas entspannter, aber immer noch zittrig. Du setzt dich zu ihr. Die Beratung hat 3 Teile:\n\n**Teil 1 — Grund erklären.** Nicht 'das Alter'. Sondern konkret: 'Das Zolpidem hat zu stark gewirkt. Morgen sage ich es dem Arzt. Er setzt es wahrscheinlich ab.' Wenn sie die Ursache kennt, fühlt sie sich weniger hilflos.\n\n**Teil 2 — Plan für morgen.** 'Morgen kommt die Physio. Sie üben das Aufstehen. Dreimal, bevor Sie nach Hause gehen. Dann sind Sie wieder sicher.' Ein Plan gibt Struktur. Struktur gibt Kontrolle.\n\n**Teil 3 — Konkrete Sicherheit heute Nacht.** 'Das Nachtlicht bleibt an. Die Klingel liegt hier. Der Toilettenstuhl steht neben dem Bett. Wenn Sie müssen, drücken Sie — ich komme.' Frau M. soll die Sicherheit sehen und anfassen können.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
    },

    // Step 4.7 — MC (fallstrick): Hüftprotektor
    {
      stepId: "ce02-frau-m-dur-07-hueftprotektor-option",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-frau-m-dur-hueftprotektor",
      tag: "pflege",
      contentC1: {
        title: "Hüftprotektor für Frau M.?",
        body: "Frau M. hat Osteoporose (T-Wert -3,1) und gerade einen Sturz hinter sich. Würdest du ihr für den Rest des Aufenthalts einen Hüftprotektor empfehlen? Das ist eine nuancierte Frage — nicht alle 'Ja'-Antworten sind gleich richtig.",
        glossarBegriffe: ["Hüftprotektor"],
      },
      contentB1: {
        title: "Hüftprotektor für Frau M.?",
        body: "Frau M. hat schwache Knochen (Osteoporose) und ist gerade gestürzt. Soll sie einen Hüftprotektor tragen? Die Antwort ist nicht einfach Ja oder Nein.",
        glossarBegriffe: ["Hüftprotektor"],
      },
      question: {
        fragetext:
          "Würdest du Frau M. für den Rest des Aufenthalts einen Hüftprotektor empfehlen?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ja, grundsätzlich für alle über 80.",
            isCorrect: false,
            explanation:
              "Nicht ganz — das ist eine Generalisierung. Hüftprotektoren sind keine Universal-Lösung für alle Älteren. Empfohlen werden sie bei **Hochrisiko-Patienten** (Sturzrisiko + Osteoporose + oft Demenz/Pflegeheim). Frau M. hat zwar Osteoporose — aber sie ist akut im Krankenhaus, nicht in Langzeitpflege. Außerdem: Compliance-Problem (Inkontinenz, Komfort).",
            explanationB1:
              "Nicht ganz — das ist zu allgemein. Hüftprotektoren sind nicht für alle Alten. Sie sind für Menschen mit sehr hohem Risiko: Sturzgefahr + Osteoporose + oft Demenz/Pflegeheim. Frau M. hat Osteoporose — aber sie ist im Krankenhaus, nicht in Langzeitpflege. Und: Viele tragen sie nicht regelmäßig.",
          },
          {
            text: "Nein, Hüftprotektoren sind nach einem Sturz kontraindiziert.",
            isCorrect: false,
            explanation:
              "Nein, das ist falsch. Hüftprotektoren haben keine Kontraindikation nach Sturz — im Gegenteil, bei Hochrisiko-Patienten werden sie oft erst nach einem Sturz-Ereignis verordnet (Sekundärprophylaxe). Das Problem ist die Indikation und Compliance, nicht eine Kontraindikation.",
            explanationB1:
              "Nein, das stimmt nicht. Hüftprotektoren sind nach Stürzen nicht verboten. Oft werden sie erst nach einem Sturz empfohlen, um weitere Brüche zu verhindern. Das Problem ist die Entscheidung: Wem nützt es?",
          },
          {
            text: "Bei diesem akuten Aufenthalt eher nicht — Compliance schlecht, Fokus auf Medikamentenreview + Umgebung; für Entlassung nach Hause ggf. mit Tochter besprechen.",
            isCorrect: true,
            explanation:
              "Genau — nuancierte, evidenzbasierte Antwort. Im Akut-Setting ist der Nutzen fraglich: Compliance ist bei neuer Versorgung schwer herzustellen, die Hauptrisiken (Zolpidem, Umgebung) werden bereits adressiert. Für **zu Hause** — wo sie allein lebt und weiter stürzen könnte — ist ein Hüftprotektor eine Option, die mit der Tochter (und ggf. Ergotherapie für Gesamt-Hilfsmittel-Beratung) besprochen werden sollte. Das respektiert auch Frau M.s Autonomie.",
            explanationB1:
              "Sehr gut — kluge Antwort. Jetzt im Krankenhaus bringt er wenig: Sie muss erst lernen, ihn zu tragen. Die wichtigeren Sachen (Zolpidem, sichere Umgebung) machen wir schon. Aber: Für **zu Hause** ist es sinnvoll — sie wohnt alleine. Also: Mit ihr und der Tochter besprechen.",
          },
          {
            text: "Nur wenn sie eine Hüftfraktur hätte.",
            isCorrect: false,
            explanation:
              "Nein — logisch falsch. Eine Hüftfraktur wird nicht mit einem Hüftprotektor behandelt (da braucht es OP). Hüftprotektoren sind **präventiv** — sie verhindern Frakturen beim nächsten Sturz, sie behandeln keine bestehenden. Die Indikation ist hochrisiko + osteoporotisch + sturzgefährdet, BEVOR etwas passiert.",
            explanationB1:
              "Nein — das ist falsch. Ein Hüftbruch wird operiert, nicht mit einem Protektor behandelt. Hüftprotektoren sind zum Vorbeugen: Sie schützen beim nächsten Sturz. Sie behandeln nichts.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 45,
};

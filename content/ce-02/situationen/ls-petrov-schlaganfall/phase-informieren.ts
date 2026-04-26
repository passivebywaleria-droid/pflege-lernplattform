// CE-02 Situation Petrov — Phase 1: Informieren
// Steps: 5 · Bloom: B2-B3 · Zeit: ~20-30 Min
// Quelle: phase-informieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-petrov-informieren",
  phase: "informieren",
  titel: "Informieren & Vorbereiten",
  titelB1: "Herrn Petrov kennenlernen",
  kontext:
    "Es ist 07:15 Uhr, Frühschicht auf der neurologischen Normalstation. Frau Wegner, deine Praxisanleiterin, bringt dich vor Zimmer 112 zum Stehen. Sie flüstert: \"Viktor Petrov, 58, gestern von der Stroke Unit verlegt. Ischämischer Apoplex links, Hemiparese rechts, Dysphagie, leichte Aphasie. Hat einen Blasenkatheter. Frühschicht heißt: Körperpflege, Mobilisation, Frühstück anreichen, Kathetercheck. Er versteht alles, kann aber kaum sprechen. Ich bin nebenan — du machst das.\" Du nimmst die Patientenakte und liest kurz. Fünf Tage nach dem Schlaganfall. Ein 58-jähriger Ingenieur.",
  kontextB1:
    "Es ist 07:15 Uhr. Du bist in der Früh-Schicht. Frau Wegner ist deine Praxisanleiterin. Sie bringt dich vor Zimmer 112. Sie sagt leise: \"Viktor Petrov, 58 Jahre. Er hatte einen Schlaganfall (= Apoplex). Das war vor 5 Tagen. Sein rechter Arm und sein rechtes Bein sind schwach (= Hemiparese). Er kann schlecht schlucken (= Dysphagie). Er hat Schwierigkeiten beim Sprechen (= Aphasie). Er hat einen Katheter in der Blase (= BVK). Er versteht alles. Aber er kann kaum antworten. Ich bin nebenan. Du machst das.\" Du nimmst die Akte von Herrn Petrov und liest.",
  kernSteps: [
    // Step 1.1 — SBAR-Akte (text, scenario)
    {
      stepId: "ce02-petrov-info-01-akte-sichten",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["AWMF S3-Leitlinie Schlaganfall (021-023)", "§ 4 PflBG"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Pflegeschüler hält Patientenakte, blickt auf Stationsflur, Frühschicht-Atmosphäre",
      bildhinweis:
        "Hospital ward morning shift, nursing student holding patient chart, soft morning light through corridor windows, calm professional atmosphere, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Die Akte — SBAR-Übergabe",
        body: "Du hältst die Akte in der Hand. Frau Wegner hat dir eine SBAR-Kurzübergabe gegeben.\n\n**S** — Situation: Herr Petrov, 58, ischämischer Apoplex Tag 5. Gestern von Stroke Unit verlegt.\n**B** — Background: Hemiparese rechts (Arm funktionell komplett ausgefallen, Bein partiell). Dysphagie Grad 2 nach GUSS: breiige Konsistenz sicher, Dünnflüssiges aspirationsgefährdet. Aphasie: versteht alles, spricht kaum. BVK seit Tag 1.\n**A** — Assessment: Stabile Vitalzeichen, keine Dekubituszeichen. Orale Ernährung mit angedicktener Flüssigkeit (IDDSI Level 2) + Kostform B möglich. Pneumonieprophylaxe aktiv.\n**R** — Recommendation: Körperpflege nach Bobath, Mobilisation (Bettkante anstreben), Frühstück anreichen, Kathetercheck, Vitalzeichen.\n\nSBAR macht Übergaben vollständig und klar — jede Pflegekraft weltweit liest dasselbe heraus.",
        fallbezug:
          "Herr Petrov, 58, Ischämischer Apoplex Tag 5, Hemiparese rechts, Dysphagie, Aphasie, BVK. Du übernimmst ihn für die Frühschicht.",
        glossarBegriffe: ["SBAR", "Apoplex", "Hemiparese", "Dysphagie", "BVK"],
      },
      contentB1: {
        title: "Die Akte lesen",
        body: "Du liest die Akte von Herrn Petrov. Das ist die Situation (= S):\nHerr Petrov, 58 Jahre alt. Er hatte einen Schlaganfall. Das war vor 5 Tagen.\nDas ist der Hintergrund (= B):\nRechter Arm: bewegt sich nicht. Rechtes Bein: nur ein wenig bewegbar.\nSchlucken ist schwach (= Dysphagie Grad 2). Sprechen ist schwer (= Aphasie).\nEr hat einen Blasen-Katheter (= BVK).\nDas ist dein Auftrag (= A + R):\nDu machst die Körper-Pflege. Du hilfst beim Frühstück. Du kontrollierst den Katheter.\nDu misst die Vitalzeichen (= Blutdruck, Puls, Temperatur, Atmung).",
        fallbezug:
          "Herr Petrov ist 58. Er hatte vor 5 Tagen einen Schlaganfall. Du betreust ihn in der Früh-Schicht.",
        glossarBegriffe: ["Schlaganfall", "Hemiparese", "Dysphagie", "BVK"],
      },
    },

    // Step 1.2 — MC Pflegeprozess-Einordnung
    {
      stepId: "ce02-petrov-info-02-pflegeprozess-check",
      phase: 1,
      stepType: "mc",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981 — Pflegeprozess"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-info-pflegeprozess",
      tag: "pflege",
      contentC1: {
        title: "Pflegeprozess einordnen",
        body: "Bevor du das Zimmer betrittst: Du hast die Akte gelesen, Frau Wegner hat die Übergabe gemacht. In welchem Schritt des Pflegeprozesses befindest du dich gerade?",
        glossarBegriffe: ["Pflegeprozess"],
      },
      contentB1: {
        title: "Wo bist du gerade im Pflege-Prozess?",
        body: "Du hast die Akte gelesen. Frau Wegner hat gesprochen. In welchem Schritt bist du gerade?",
        glossarBegriffe: ["Pflegeprozess"],
      },
      question: {
        fragetext:
          "Bevor du das Zimmer betrittst: In welchem Schritt des Pflegeprozesses befindest du dich gerade?",
        optionen: [
          {
            text: "Planen — weil du die Maßnahmen schon kennst",
            isCorrect: false,
            explanation:
              "Planen kommt nach dem Einschätzen. Du hast noch nicht selbst beobachtet, du kennst nur die Übergabe. Erst sammeln, dann einordnen, dann planen.",
            explanationB1:
              "Planen kommt später. Zuerst sammelst du Informationen. Dann planst du.",
          },
          {
            text: "Informationssammlung — weil du dir ein Bild machst, bevor du handelst",
            isCorrect: true,
            explanation:
              "Genau. Du liest die Akte, hörst die Übergabe, machst dir ein erstes Bild — das ist Schritt 1 des Pflegeprozesses nach Fiechter/Meier (1981): Informationssammlung. Handeln kommt erst danach.",
            explanationB1:
              "Richtig. Du sammelst zuerst alle Informationen. Dann planst du. Handeln ohne Informationen ist gefährlich.",
          },
          {
            text: "Durchführen — weil die Schicht beginnt und du anfangen musst",
            isCorrect: false,
            explanation:
              "Handeln ohne Informationssammlung ist ein häufiger Fehler — die Priorisierung fehlt dann. Du weißt noch nicht genug über Herrn Petrov um sicher zu handeln.",
            explanationB1:
              "Nein. Erst sammeln, dann handeln. Handeln ohne Wissen ist nicht sicher.",
          },
          {
            text: "Evaluieren — weil du den gestrigen Tag nachbereitest",
            isCorrect: false,
            explanation:
              "Evaluieren passiert am Ende — wenn du prüfst ob deine Ziele erreicht wurden. Am Anfang der Schicht stehst du noch ganz am Anfang des Pflegeprozesses.",
            explanationB1:
              "Evaluieren ist der letzte Schritt. Das machst du am Ende der Schicht.",
          },
        ],
      },
    },

    // Step 1.3 — Flipcard Schlaganfall-Akutwissen (3 Karten)
    {
      stepId: "ce02-petrov-info-03-schlaganfall-akutwissen",
      phase: 1,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "GUSS (Trapl M. et al. 2007, Stroke 38:2948-2952)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-info-schlaganfall-basics",
      tag: "krankheitslehre",
      contentC1: {
        title: "3 Karten — Orientierungswissen",
        body: "Kurze Flipcards als Basis für die Situation. Drehe jede Karte um — sie geben dir das nötige Hintergrundwissen für die nächsten Stunden mit Herrn Petrov.",
        glossarBegriffe: [
          "Apoplex",
          "Hemiparese",
          "Dysphagie",
          "MCA",
          "GUSS",
        ],
      },
      contentB1: {
        title: "3 Karten zum Lernen",
        body: "Drehe jede Karte um. Du lernst das Wichtigste über Herrn Petrovs Schlaganfall.",
        glossarBegriffe: ["Schlaganfall", "Hemiparese", "Dysphagie"],
      },
      question: {
        fragetext: "Drehe jede Karte um und lies die Rückseite.",
        flipcard: {
          instruction: "Karte umdrehen und Erklärung lesen.",
          cards: [
            {
              front: "Was ist ein ischämischer Apoplex?",
              back: "Unterbrechung der Blutversorgung eines Hirnbereichs durch Gefäßverschluss. Beim linken MCA-Infarkt: rechte Körperhälfte betroffen + Sprachzentrum (Broca-Areal). Akuttherapie: i.v.-Lyse bis 4,5 Stunden nach Symptombeginn. (AWMF S3 Schlaganfall)",
              backB1:
                "Ein Blutgefäß im Gehirn ist verstopft. Das Blut kommt nicht mehr durch. Ein Teil des Gehirns bekommt keinen Sauerstoff. Er stirbt ab. Bei Herrn Petrov: Die linke Seite des Gehirns ist betroffen. Deshalb funktioniert die rechte Körperseite nicht gut. Das Sprachzentrum liegt auch links. Deshalb kann er kaum sprechen.",
              category: "krankheitslehre",
            },
            {
              front: "Was ist Hemiparese?",
              back: "Halbseitige Muskelschwäche (nicht vollständige Lähmung = Plegie). Hemi = halb, Parese = Schwäche. Bei Herrn Petrov: Arm funktionell komplett ausgefallen (kein gezielter Griff), Bein partiell (Anheben möglich, Belasten kaum, Fuß-Dorsalflexion schwach). (DNQP Mobilität 2020)",
              backB1:
                "Hemi = halb. Parese = Schwäche. Herr Petrovs rechter Arm: Er kann ihn nicht bewegen. Herr Petrovs rechtes Bein: Er kann es ein wenig heben. Aber er kann nicht darauf stehen.",
              category: "krankheitslehre",
            },
            {
              front: "Was ist Dysphagie — und was bedeutet Grad 2 bei Herrn Petrov?",
              back: "Schluckstörung. GUSS-Assessment (Trapl et al. 2007) klassifiziert Schweregrade. Grad 2: breiige Konsistenz sicher schluckbar. Dünnflüssige Getränke: Husten + feuchte Stimme nach dem Schlucken → Aspirationsgefahr. Ernährung: IDDSI Level 2 (Flüssigkeiten) + Kostform B (weich, zerteilbar). (IDDSI 2019; GUSS Trapl 2007)",
              backB1:
                "Dysphagie bedeutet: Schlucken ist schwierig. Herr Petrov hat Dysphagie Grad 2 (nach GUSS-Test). Er schluckt breies Essen sicher. Aber dünne Flüssigkeit ist gefährlich. Sie kann in die Lunge kommen (= Aspiration).",
              category: "krankheitslehre",
            },
          ],
        },
      },
    },

    // Step 1.4 — Dialog: Zimmer betreten (3 Phasen)
    {
      stepId: "ce02-petrov-info-04-zimmer-betreten",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP Mobilität 2020", "Bobath B. 1990 Adult Hemiplegia"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-info-dialog",
      tag: "pflege",
      contentC1: {
        title: "Das Zimmer betreten",
        body: "Du betrittst das Zimmer. Herr Petrov liegt leicht aufgerichtet (Oberkörper ca. 30°), schaut dich an. Du stellst dich vor. Er hat Aphasie — versteht alles, spricht kaum. Jede Formulierung zählt.",
        glossarBegriffe: ["Aphasie", "Kommunikation"],
      },
      contentB1: {
        title: "Ins Zimmer gehen",
        body: "Du gehst ins Zimmer. Herr Petrov ist wach. Er schaut dich an. Er hat Aphasie — er versteht alles, aber er kann kaum sprechen. Wie stellst du dich vor?",
        glossarBegriffe: ["Aphasie"],
      },
      question: {
        fragetext: "Wähle deine Reaktion.",
        patientName: "Herr Petrov",
        dialogPhases: [
          {
            context:
              "Du betrittst das Zimmer. Das Licht ist bereits an. Herr Petrov liegt leicht aufgerichtet, schaut dich ruhig an. Du stellst dich vor.",
            contextB1:
              "Du gehst ins Zimmer. Herr Petrov ist wach. Er schaut dich an. Wie stellst du dich vor?",
            speaker: "Du",
            options: [
              {
                text: "\"Guten Morgen, Herr Petrov. Ich bin [Name], Pflegeschüler. Frau Wegner schickt mich — wir machen heute zusammen Ihre Morgenpflege.\" (Augenkontakt, langsam gesprochen)",
                textB1:
                  "\"Guten Morgen, Herr Petrov. Ich bin [Name], Pflegeschüler. Frau Wegner schickt mich. Wir machen heute zusammen Ihre Morgenpflege.\"",
                patientResponse:
                  "Herr Petrov nickt. Er schaut dich ruhig an. Dann, nach einer Pause: \"Morgen... besser?\"",
                patientResponseB1:
                  "Herr Petrov nickt. Er schaut dich an. Nach kurzer Pause sagt er: \"Morgen... besser?\"",
                score: 3,
                feedback:
                  "Genau richtig. Kurze, klare Sätze — essenziell bei Aphasie. Du sagst wer du bist, warum du hier bist und was kommt. Herr Petrov kann sich orientieren. Langsam sprechen + Augenkontakt = Respekt für seine eingeschränkte Kommunikation.",
                feedbackB1:
                  "Sehr gut. Kurze Sätze. Du sagst wer du bist und was kommt. Das ist wichtig bei Aphasie. Herr Petrov kann alles verstehen — er braucht klare, kurze Sätze.",
              },
              {
                text: "\"Hallo, ich bin neu hier, also keine Sorge, ich mach das schon.\"",
                textB1:
                  "\"Hallo. Ich bin neu, aber keine Sorge, das wird schon.\"",
                patientResponse:
                  "Herr Petrov schaut dich kurz an, dann zur Decke. Keine Reaktion.",
                patientResponseB1:
                  "Herr Petrov schaut kurz, dann zur Decke. Er sagt nichts.",
                score: 1,
                feedback:
                  "Zu beiläufig. Du gibst keine Orientierung: Wer bist du? Was kommt jetzt? Warum bist du hier? Für einen Aphasie-Patienten ist Struktur besonders wichtig — er kann nachfragen, aber nicht so wie andere Patienten es könnten.",
                feedbackB1:
                  "Nicht gut. Du sagst nicht: Wer bist du? Was kommt jetzt? Herr Petrov braucht kurze, klare Informationen. Er kann nicht gut nachfragen.",
              },
              {
                text: "\"Guten Morgen! Können Sie mir sagen, wie es Ihnen heute geht?\"",
                textB1:
                  "\"Guten Morgen! Wie geht es Ihnen heute?\"",
                patientResponse:
                  "Herr Petrov öffnet den Mund. Schließt ihn wieder. Greift frustriert an sein rechtes Bein.",
                patientResponseB1:
                  "Herr Petrov öffnet den Mund. Schließt ihn. Er greift an sein Bein — er ist frustriert.",
                score: 1,
                feedback:
                  "Sozial üblich, aber bei Broca-Aphasie ungeeignet. \"Wie geht es Ihnen?\" ist eine offene Frage — die braucht eine offene Antwort. Herr Petrov versteht die Frage, kann aber keine vollständige Antwort formulieren. Du siehst die Frustration. Merke: Ja/Nein-Fragen bevorzugen, z.B. \"Haben Sie Schmerzen? — Nicken oder Kopfschütteln.\"",
                feedbackB1:
                  "Höflich gemeint, aber zu schwer für Herrn Petrov. \"Wie geht es Ihnen?\" ist eine offene Frage. Er kann kaum sprechen. Frage besser: \"Haben Sie Schmerzen?\" — das kann er mit Nicken oder Kopfschütteln beantworten.",
              },
            ],
          },
          {
            context:
              "Herr Petrov hat geantwortet: \"Morgen... besser?\" Er schaut auf seinen rechten Arm, dann zu dir. Du willst ihm kurz erklären wie der heutige Morgen aussieht.",
            contextB1:
              "Herr Petrov hat gefragt: \"Morgen... besser?\" Er schaut auf seinen Arm. Du erklärst ihm, was heute passiert.",
            speaker: "Du",
            options: [
              {
                text: "\"Ich weiß nicht ob es morgen besser ist. Was ich weiß: Wir arbeiten heute zusammen daran. Körperpflege, ein bisschen Sitzen an der Bettkante — das hilft Ihrem Arm und Ihrer Lunge. Schritt für Schritt.\"",
                textB1:
                  "\"Ich weiß es nicht. Aber heute machen wir: Waschen, Sitzen an der Bett-Kante. Das ist gut für den Arm und für die Lunge. Schritt für Schritt.\"",
                patientResponse:
                  "Herr Petrov nickt langsam. Er schaut wieder auf seinen Arm.",
                patientResponseB1:
                  "Herr Petrov nickt. Er schaut auf seinen Arm.",
                score: 3,
                feedback:
                  "Ehrlich und handlungsorientiert. Du versprichst nichts, das du nicht halten kannst — und gibst gleichzeitig Struktur und Hoffnung. Der Hinweis auf Bettkante und Lunge zeigt ihm: Du weißt was du tust, und du erklärst warum.",
                feedbackB1:
                  "Sehr gut. Ehrlich: Du weißt es nicht. Aber du sagst was heute passiert. Das gibt Herrn Petrov Struktur.",
              },
              {
                text: "\"Ja, jeden Tag wird es besser! Sie machen das super!\"",
                textB1:
                  "\"Ja, jeden Tag wird es besser! Sie machen das toll!\"",
                patientResponse:
                  "Herr Petrov schaut dich kurz an. Dann wendet er sich ab.",
                patientResponseB1:
                  "Herr Petrov schaut kurz. Dann weg.",
                score: 0,
                feedback:
                  "Unehrlich. Herr Petrov ist 58, Ingenieur — er merkt wenn jemand schönredet. Er versteht jeden Satz, jede leere Floskel. Falsche Versprechen machen die Kommunikation kaputt. Lieber ehrlich mit Perspektive als optimistisch ohne Basis.",
                feedbackB1:
                  "Nicht gut. Das ist nicht ehrlich. Herr Petrov versteht alles. Er merkt, wenn jemand nicht die Wahrheit sagt. Sage die Wahrheit — mit Hoffnung.",
              },
              {
                text: "\"Das können nur die Ärzte sagen. Fragen Sie die beim Morgenvisite.\"",
                textB1:
                  "\"Das sagen die Ärzte. Fragen Sie die.\"",
                patientResponse:
                  "Herr Petrov nickt kurz. Kein weiterer Blickkontakt.",
                patientResponseB1:
                  "Herr Petrov nickt kurz. Kein Augenkontakt mehr.",
                score: 1,
                feedback:
                  "Nicht falsch — Ärzten die Prognose überlassen ist richtig. Aber du hast die Möglichkeit verpasst, ihm zu sagen was heute passiert. Herr Petrov bleibt ohne Orientierung für den Morgen. Besseres Sandwich: Ärzte für die Prognose + du für den heutigen Plan.",
                feedbackB1:
                  "Nicht komplett falsch — Ärzte entscheiden über die Prognose. Aber: Sage auch was heute passiert. Herr Petrov braucht Orientierung.",
              },
            ],
          },
          {
            context:
              "Du hast dich vorgestellt und erklärt was heute kommt. Herr Petrov nickt. Jetzt willst du sicherstellen, dass er dich versteht und mitentscheiden kann.",
            contextB1:
              "Du hast Herrn Petrov erklärt, was heute passiert. Er nickt. Jetzt prüfst du ob er dich versteht.",
            speaker: "Du",
            options: [
              {
                text: "\"Herr Petrov, ich erkläre Ihnen jeden Schritt bevor ich ihn tue. Wenn Sie möchten, dass ich aufhöre oder warte — schütteln Sie den Kopf. Ist das okay?\"",
                textB1:
                  "\"Herr Petrov, ich erkläre immer was ich mache. Wenn Sie wollen, dass ich stoppe — schütteln Sie den Kopf. Okay?\"",
                patientResponse:
                  "Herr Petrov nickt. Einmal, klar, mit Blickkontakt.",
                patientResponseB1:
                  "Herr Petrov nickt. Klar, mit Blick auf dich.",
                score: 3,
                feedback:
                  "Perfekt. Du schaffst Kontrollmöglichkeiten für jemanden, dem Kontrolle genommen wurde. Das Kopfschütteln als Signal ist konkret, einfach, non-verbal — passt genau zur Aphasie. Du respektierst seine Autonomie trotz eingeschränkter Kommunikation. Das Bobath-Prinzip fängt hier an: bei der Würde.",
                feedbackB1:
                  "Sehr gut. Du gibst Herrn Petrov Kontrolle zurück. Er kann Kopf schütteln — das ist ein klares Signal. Das ist wichtig: Er versteht alles. Er soll auch mitentscheiden können.",
              },
              {
                text: "\"Dann fangen wir an — Waschen zuerst, dann Frühstück. Dauert ungefähr eine Stunde.\"",
                textB1:
                  "\"Fangen wir an. Waschen, dann Frühstück. Circa eine Stunde.\"",
                patientResponse:
                  "Herr Petrov schaut zur Decke. Seine linke Hand schließt sich zur Faust.",
                patientResponseB1:
                  "Herr Petrov schaut zur Decke. Er macht die linke Hand zur Faust.",
                score: 1,
                feedback:
                  "Zu schnell. Du übst Kontrolle aus ohne sie zu teilen. Herr Petrov hat keine Möglichkeit, auf deinen Plan Einfluss zu nehmen. Er merkt das — seine Körpersprache sagt es dir. Besser: Erst fragen, ob er einverstanden ist, bevor du anfängst.",
                feedbackB1:
                  "Zu schnell. Du fragst nicht ob er einverstanden ist. Herr Petrov hat keine Wahl. Das ist nicht gut.",
              },
              {
                text: "\"Alles klar? Dann los.\"",
                textB1:
                  "\"Alles klar? Los!\"",
                patientResponse:
                  "Herr Petrov schaut dich an. Kein Nicken, kein Schütteln.",
                patientResponseB1:
                  "Herr Petrov schaut. Keine Antwort.",
                score: 0,
                feedback:
                  "\"Alles klar?\" ist eine geschlossene Frage, die Zustimmung voraussetzt — und keinen Raum für Einwände lässt. Für einen Aphasie-Patienten ist das besonders problematisch: Er kann nicht spontan widersprechen. Frag konkret und gib ihm Signalmöglichkeiten.",
                feedbackB1:
                  "\"Alles klar?\" gibt Herrn Petrov keine Möglichkeit zu antworten. Er hat Aphasie. Frage konkret: \"Ist das okay — nicken oder Kopf schütteln?\"",
              },
            ],
          },
        ],
      },
    },

    // Step 1.5 — Matching: Kommunikation mit Aphasie-Patienten
    {
      stepId: "ce02-petrov-info-05-aphasie-kommunikation",
      phase: 1,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: [
        "Bobath B. 1990 Adult Hemiplegia",
        "DNQP Mobilität 2020",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-petrov-info-aphasie-kommunikation",
      tag: "pflege",
      contentC1: {
        title: "Kommunikation mit Aphasie-Patienten",
        body: "Du hast jetzt die ersten Minuten mit Herrn Petrov hinter dir. Ordne jede Kommunikationsregel ihrer fachlichen Begründung zu. Alle 5 Regeln sind gleichwertig wichtig — es gibt keine Rangfolge, sondern jede Regel adressiert einen anderen Aspekt der Aphasie-Kommunikation.",
        glossarBegriffe: ["Broca-Aphasie", "nonverbale Kommunikation"],
      },
      contentB1: {
        title: "Wie kommunizierst du mit Herrn Petrov?",
        body: "Herr Petrov hat Aphasie. Ordne jede Regel der richtigen Begründung zu. Alle Regeln sind gleich wichtig.",
        glossarBegriffe: ["Aphasie"],
      },
      question: {
        fragetext:
          "Ordne jede Kommunikationsregel der passenden Begründung zu.",
        matchingPairs: [
          {
            left: "Kurze, einfache Sätze verwenden (max. 5-7 Wörter)",
            right:
              "Reduziert die kognitive Sprachverarbeitung — bei Broca-Aphasie ist Verstehen leichter als Produzieren, lange Sätze ermüden trotzdem",
          },
          {
            left: "Ja/Nein-Fragen stellen — keine offenen Fragen",
            right:
              "Patient kann mit Nicken/Kopfschütteln antworten, ohne Wörter formulieren zu müssen",
          },
          {
            left: "Zeit lassen für die Reaktion (10-15 Sekunden warten)",
            right:
              "Sprachverarbeitung dauert bei Aphasie länger — vorschnelles Antworten oder Helfen blockiert die Eigenleistung",
          },
          {
            left: "Blickkontakt halten — nicht wegschauen während er antwortet",
            right:
              "Nonverbale Signale (Mimik, Gestik) ergänzen die wenigen Wörter und zeigen Wertschätzung",
          },
          {
            left: "Nicht laut sprechen — normale Lautstärke wählen",
            right:
              "Aphasie ist eine Sprach-, keine Hörstörung — lautes Sprechen wirkt entwürdigend und hilft nicht",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 25,
};

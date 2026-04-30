// CE-02 Situation Lukas — Phase 4: Durchführen
// Steps: 7 (inkl. 2 Komplikations-Branchings) · Bloom: B4–B5 · Zeit: ~30–40 Min
// Quelle: phase-durchfuehren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-lukas-durchführen",
  phase: "durchführen",
  titel: "Durchführen — Verbandwechsel, Komplikationen, Elternanleitung",
  titelB1: "Verbandwechsel und was dazwischen kommt",
  kontext:
    "Lukas ist wach. Er liegt jetzt auf dem Kinderbett, Sandra sitzt auf der Bettkante neben ihm. Kevin steht am Fenster. Die Sozialarbeiterin wurde für 15 Uhr angekündigt — das hat Kathrin den Eltern erklärt, du warst dabei.\n\nJetzt geht es an die Versorgung: Verbandwechsel, Mundpflege, Trinkangebot. Drei Aufgaben, eine nach der anderen. Alle drei brauchen kindgerechte Vorbereitung — nicht nur die Materialien, sondern auch die Art wie du mit Lukas sprichst, wie du ihn ablenkst, wie du Sandra einbeziehst.\n\nLukas schaut das Verbandset an, das du trägst. Er sieht die Schere. Er fängt an zu weinen — noch bevor du etwas getan hast.\n\nUnd dann klopft jemand: Die Sozialarbeiterin Frau Fink ist zehn Minuten früher als geplant. Kevin wird sofort laut.\n\nZwei Komplikationen. Eine nach der anderen.",
  kontextB1:
    "Lukas ist wach. Er liegt auf dem Bett. Sandra sitzt neben ihm. Kevin steht am Fenster. Frau Fink kommt um 15 Uhr.\n\nJetzt: Verbandwechsel, Mundpflege, Trinkangebot. Lukas sieht deine Schere — er fängt sofort an zu weinen. Dann klopft es: Frau Fink ist 10 Minuten zu früh. Kevin wird laut. Zwei Probleme hintereinander.",
  kernSteps: [
    // Step 4.0b — Inline-Wissen: Kindgerechte Maßnahmen-Vorbereitung
    // Phase 4 beginnt. Bevor der Schüler die Reihenfolge der Vorbereitung sortiert (Step 4.1),
    // braucht er das Grundwissen: Wie bereitet man ein Kleinkind auf eine schmerzhafte Maßnahme vor?
    {
      stepId: "ce02-lukas-dur-00b-kindgerechte-vorbereitung",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Hoehl/Kullick 2019 — Kinderkrankenpflege",
        "DGV 2023 — Leitlinie Thermische Verletzungen",
        "AWMF S3-LL 2021 — Analgesie, Sedierung und Delirmanagement",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-dur-kindgerechte-vorbereitung",
      tag: "pflege",
      themaPrimaer: "säuglingspflege",
      themenSekundaer: ["schmerz"],
      transition: "Du weißt jetzt wie man Lukas vorbereitet. Bringe die Schritte in die richtige Reihenfolge.",
      contentC1: {
        title: "Kindgerechte Vorbereitung — Ankündigen, nicht überrumpeln",
        body: "",
        glossarBegriffe: ["Ablenkung als Pflegetechnik", "Prozedurale Angst", "Bedarfsanalgesie"],
      },
      contentB1: {
        title: "Wie bereitest du Lukas auf den Verbandwechsel vor?",
        body: "",
        glossarBegriffe: ["Ablenkung (= Distraction)", "Bedarfsanalgesie (= Schmerzmittel bei Bedarf)"],
      },
      inlineWissen: {
        bausteinRef: "säuglingspflege-kindgerechte-vorbereitung",
        storyAufhaenger:
          "Lukas sieht die Schere auf deinem Verbandwagen — und fängt an zu weinen. Noch bevor du irgendetwas getan hast. Kleinkinder reagieren auf visuelle Reize, nicht auf Erklärungen. Wie gehst du damit um?",
        storyAufhaengerB1:
          "Lukas sieht die Schere — und weint sofort. Du hast noch gar nichts gemacht. Wie bereitest du ein Kind auf eine schmerzhafte Maßnahme vor?",
        kerntext:
          "**3 Säulen der kindgerechten Vorbereitung (Hoehl/Kullick 2019):**\n\n**1. Ankündigung statt Überraschung**\n• Kurz, konkret, altersgerecht: \"Ich schaue deinen Arm an. Das kitzelt kurz. Mama ist dabei.\"\n• NICHT: \"Das tut gar nicht weh\" — das ist eine Lüge, das Kind merkt es.\n• Zeitfenster: Bei 2-3-Jährigen max. 1-2 Minuten vor der Maßnahme ankündigen. Zu früh = Angst baut sich auf.\n\n**2. Ablenkung als aktive Pflegetechnik**\n• Seifenblasen, Musik, Knisterfolie, Handpuppe — sensorische Reize die das Schmerzerleben reduzieren.\n• Ablenkung **begleitet** die Maßnahme, **ersetzt** aber nicht die Ankündigung. Ablenkung ohne Ankündigung = Hinterlist.\n• Bezugsperson (Sandra) als Ablenkungsunterstützung einbeziehen.\n\n**3. Material aus dem Sichtfeld**\n• Schere, Pinzette, Spritze: außerhalb von Lukas' Blickfeld vorbereiten.\n• Verbandmaterial erst zeigen wenn Ablenkung aktiv ist.\n• Bedarfsanalgesie: Wirkzeit prüfen BEVOR die Maßnahme beginnt — nicht erst wenn das Kind schreit.\n\n**Prozedurale Angst:** Kinder entwickeln nach negativen Erfahrungen Angst vor medizinischen Maßnahmen (konditioniert). Jeder Verbandwechsel bei Lukas prägt seine Einstellung zu Pflege für Jahre.",
        kerntextB1:
          "**3 Regeln für kindgerechte Vorbereitung:**\n\n**1. Ankündigen**\n• Kurz sagen was du machst: \"Ich schaue deinen Arm an. Mama ist dabei.\"\n• NICHT sagen: \"Das tut nicht weh\" — das merkt das Kind.\n• Bei 2-3-Jährigen: 1-2 Minuten vorher ankündigen.\n\n**2. Ablenken**\n• Seifenblasen, Musik, Knisterfolie — das lenkt vom Schmerz ab.\n• Sandra macht die Ablenkung.\n• Ablenkung ERSETZT die Ankündigung NICHT.\n\n**3. Material verstecken**\n• Schere und Verband nicht zeigen bevor du bereit bist.\n• Schmerzmittel-Wirkung prüfen BEVOR du anfängst.\n\n**Wichtig:** Jeder Verbandwechsel prägt Lukas. Gute Erfahrung = weniger Angst beim nächsten Mal. Schlechte Erfahrung = mehr Angst.",
        faustregel:
          "Ankündigen, ablenken, Material verstecken — in dieser Reihenfolge. Nie überrumpeln.",
        faustregelB1:
          "Erst sagen was du machst. Dann ablenken. Material verstecken. Nie überrumpeln.",
        spektrum: [
          {
            patientName: "Emilia (4 Monate, Bronchiolitis)",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Säugling — Ablenkung funktioniert anders",
            kurzbeschreibung:
              "Bei Emilia (4 Monate) funktioniert verbale Ankündigung nicht. Stattdessen: Pucken (Einwickeln gibt Sicherheit), Non-nutritives Saugen (Schnuller), Hautkontakt (Känguru-Methode). Ablenkung über taktile Reize statt visuelle.",
          },
          {
            patientName: "Herr Bauer (82, Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz — ähnliche Prinzipien wie bei Kleinkindern",
            kurzbeschreibung:
              "Herr Bauer versteht Ankündigungen nicht immer. Aber das Prinzip ist gleich: kurze, klare Sätze, ruhige Stimme, Berührung ankündigen bevor man anfasst. Basale Stimulation (beruhigende Waschung) nutzt denselben Ansatz: vorhersehbar, rhythmisch, sicher.",
          },
          {
            patientName: "Frau M. (82, Sturz)",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Erwachsene — ausführlichere Ankündigung möglich",
            kurzbeschreibung:
              "Bei Frau M. (orientiert, sprachfähig) kannst du ausführlicher ankündigen: Was passiert, warum, wie lange. Bei Lukas hast du 1-2 Sätze. Das Prinzip bleibt: Vorhersehbarkeit reduziert Angst.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Lukas sieht die Schere und weint sofort — obwohl du noch nichts getan hast. Was sind die 3 Säulen der kindgerechten Maßnahmen-Vorbereitung?",
          rueckseite:
            "1. **Ankündigung** — kurz, konkret, max. 1-2 Min vorher bei 2-3-Jährigen. Nie lügen (\"tut nicht weh\").\n2. **Ablenkung** — Seifenblasen, Musik, Bezugsperson. Begleitet die Maßnahme, ersetzt nicht die Ankündigung.\n3. **Material aus Sichtfeld** — Schere/Pinzette verstecken. Analgesie-Wirkzeit vorher prüfen.\n\nSpektrum: Emilia (Pucken, Schnuller), Bauer (kurze Sätze, Basale Stimulation), Frau M. (ausführliche Erklärung möglich).\n\nFaustregel: **Ankündigen, ablenken, Material verstecken — nie überrumpeln.**",
        },
      },
    },

    // Step 4.1 — Sequencing: Vorbereitung Verbandwechsel
    {
      stepId: "ce02-lukas-dur-01-vorbereitung-kinder",
      phase: 4,
      stepType: "sequencing",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DGV 2023", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-lukas-dur-vorbereitung",
      tag: "pflege",
      contentC1: {
        title: "Vorbereitung auf den Verbandwechsel — richtige Reihenfolge",
        body: "Ein Verbandwechsel bei einem Kleinkind mit Verbrühung ist kein Routine-Eingriff. Die Reihenfolge der Vorbereitung hat direkte Auswirkung auf Lukas' Angst und Schmerzerleben. Sortiere die Schritte.",
        glossarBegriffe: ["Bedarfsanalgesie", "Ablenkung als Pflegetechnik"],
      },
      contentB1: {
        title: "Vorbereitung in der richtigen Reihenfolge",
        body: "Was machst du zuerst, bevor du den Verband wechselst? Sortiere die Schritte.",
        glossarBegriffe: ["Analgesie (= Schmerzmittel)"],
      },
      question: {
        fragetext:
          "Sortiere die Vorbereitungsschritte für den Verbandwechsel bei Lukas in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "Bringe die Schritte in die richtige Reihenfolge — von zuerst bis zuletzt.",
          items: [
            {
              id: "v1",
              label:
                "Schmerzmittel-Wirkzeit prüfen — ist die Analgesie gerade aktiv?",
            },
            {
              id: "v2",
              label:
                "Material vorbereiten außerhalb von Lukas' Sichtfeld (Schere, Auflage, NaCl)",
            },
            {
              id: "v3",
              label:
                "Sandra einbeziehen: Was kann sie während des Wechsels tun?",
            },
            {
              id: "v4",
              label:
                "Lukas kindgerecht ankündigen: \"Ich schaue kurz deinen Arm an — Mama ist dabei\"",
            },
            {
              id: "v5",
              label:
                "Ablenkungsmittel bereitstellen und aktivieren: Seifenblasen, ruhige Musik, Knisterfolie",
            },
            {
              id: "v6",
              label: "Erst dann mit dem Verbandwechsel beginnen",
            },
          ],
        },
      },
    },

    // Step 4.2 — Dialog (3 Phasen): Ablenkung und Ankündigung
    {
      stepId: "ce02-lukas-dur-02-ablenkung-dialog",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019", "DGV 2023"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-dur-ablenkung",
      tag: "pflege",
      contentC1: {
        title: "Ablenkung und Ankündigung — Lukas beruhigen",
        body: "Du machst Seifenblasen. Lukas schaut. Er hört auf zu weinen — für einen Moment. Sandra lacht kurz. Du nutzt den Moment. Was tust du jetzt?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Lukas ist kurz ruhig — was machst du?",
        body: "Du machst Seifenblasen. Lukas schaut. Er weint kurz nicht mehr. Sandra lacht. Du nutzt den Moment. Was machst du jetzt?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Lukas ist kurz abgelenkt — wie nutzt du den Moment?",
        patientName: "Lukas",
        dialogPhases: [
          {
            context:
              "Lukas schaut den Seifenblasen nach. Er sagt: \"Bah-bah!\" — seine Augen sind groß. Sandra hält seine rechte Hand. Du hast jetzt 30–60 Sekunden Fenster. Was machst du?",
            contextB1:
              "Lukas schaut die Seifenblasen an. Er sagt: \"Bah-bah!\" Er weint kurz nicht. Was machst du jetzt?",
            speaker: "Du",
            options: [
              {
                text: "Sofort mit dem Verband beginnen während er abgelenkt ist — nutze das Fenster!",
                textB1: "Sofort anfangen während er abgelenkt ist.",
                patientResponse:
                  "Lukas dreht sich um als er die Berührung spürt. Er schreit auf: \"Nein! Mama!\" und schlägt nach deiner Hand.",
                patientResponseB1:
                  "Lukas spürt die Berührung. Er schreit: \"Nein! Mama!\" und schlägt nach dir.",
                score: 0,
                feedback:
                  "Kein Einverständnis, keine Ankündigung — das ist ein Vertrauensbruch. 'Ablenkung ausnutzen' fühlt sich für das Kind wie Hinterlist an. Lukas reagiert mit Abwehr — schlagen, schreien. Das macht den Verbandwechsel schwerer, nicht leichter. Ablenkung ist eine Technik, kein Trick. Sie begleitet die Handlung, ersetzt aber nie die Ankündigung.",
                feedbackB1:
                  "Das ist ein Fehler. Du hast nicht angekündigt. Lukas fühlt sich getäuscht. Er schreit und schlägt. Das macht alles schwerer.",
              },
              {
                text: "Lukas ansprechen: \"Ich schaue jetzt kurz deinen Arm an. Das kitzelt kurz. Mama ist dabei.\" — dann langsam beginnen.",
                textB1:
                  "Sagen: \"Ich schaue deinen Arm an. Kitzelt kurz. Mama ist dabei.\" Dann langsam anfangen.",
                patientResponse:
                  "Lukas schaut dich kurz an. Dann zu den Seifenblasen. Sandra sagt: \"Mama ist da, Luki.\" Er zieht die Schulter ein — aber er schlägt nicht.",
                patientResponseB1:
                  "Lukas schaut dich an. Dann zu den Seifenblasen. Sandra sagt: \"Mama ist da.\" Lukas zieht die Schulter ein. Er schlägt nicht.",
                score: 3,
                feedback:
                  "Richtig. Drei Elemente: (1) Ankündigung ('Ich schaue jetzt'), (2) Vorhersehbarkeit ('kitzelt kurz'), (3) Sicherheit ('Mama ist dabei'). Lukas kann sich nicht verbally wehren — aber er kann sich vorbereiten. Das reduziert die Abwehr. Ablenkung bleibt aktiv (Seifenblasen laufen weiter), begleitet die Handlung.",
                feedbackB1:
                  "Richtig. Du sagst: Was passiert. Wie lang. Mama ist dabei. Das gibt Lukas Sicherheit. Er wehrt sich weniger.",
              },
              {
                text: "Sandra fragen ob Lukas den Verband selbst anfassen möchte — dann vielleicht kooperiert er.",
                textB1:
                  "Sandra fragen: Soll Lukas selbst anfassen dürfen?",
                patientResponse:
                  "Sandra schaut unsicher. Lukas sieht dich anschauen — und fängt wieder an zu weinen.",
                patientResponseB1:
                  "Sandra schaut unsicher. Lukas sieht dich — er weint wieder.",
                score: 1,
                feedback:
                  "Gut gemeint — aber zu viel auf einmal. 'Lukas anfassen lassen' ist eine gute Idee für spätere Phasen wenn die Wunde sich verändert und Lukas vertraut. Jetzt ist die Wunde akut, die Schmerzen sind hoch, Lukas ist 2,5 Jahre alt. Erst: Ankündigen und mit Seifenblasen-Ablenkung beginnen.",
                feedbackB1:
                  "Gut gemeint — aber jetzt zu schwierig. Lukas ist 2,5 Jahre und hat Schmerzen. Erst ankündigen, dann beginnen.",
              },
            ],
          },
          {
            context:
              "Kathrin löst langsam den alten Verband. Du hältst die Seifenblasen und hältst Blickkontakt zu Lukas. Er wimmert — aber er schlägt nicht. Kathrin fragt dich leise: \"Was prüfen wir beim Lösen zuerst?\"",
            contextB1:
              "Kathrin löst den Verband. Du machst Seifenblasen. Lukas wimmert. Kathrin fragt dich: \"Was prüfen wir zuerst?\"",
            speaker: "Du",
            options: [
              {
                text: "\"Ob die Blasen noch intakt sind — oder ob eine geplatzt ist.\"",
                textB1: "\"Ob die Blasen noch ganz sind.\"",
                patientResponse:
                  "Kathrin nickt: \"Genau. Intakte Blasen bleiben. Was noch?\"",
                patientResponseB1:
                  "Kathrin nickt: \"Genau. Intakte Blasen bleiben. Was noch?\"",
                score: 3,
                feedback:
                  "Richtig. Intakte Blasen bieten natürlichen Wundschutz — nicht öffnen. Wenn eine Blase geplatzt ist, ändert sich das Management (offene Wundfläche → sorgfältige Abdeckung). Das ist das erste was du beim Lösen des Verbands visuell prüfst.",
                feedbackB1:
                  "Richtig. Ganze Blasen schützen die Wunde — nicht öffnen. Wenn eine geplatzt ist: anders behandeln.",
              },
              {
                text: "\"Den Schmerzscore — KUSS jetzt neu erheben.\"",
                textB1: "\"Den Schmerzscore neu messen — KUSS.\"",
                patientResponse:
                  "Kathrin: \"Das kommt nach dem Wechsel. Zuerst: Was schauen wir beim Lösen an?\"",
                patientResponseB1:
                  "Kathrin: \"Das kommt danach. Zuerst: Was schauen wir an der Wunde?\"",
                score: 1,
                feedback:
                  "KUSS nach dem Verbandwechsel — das stimmt. Aber beim Lösen des Verbands schaust du zuerst auf die Wunde selbst: Blasen intakt? Zeichen von Infektion? Wundexsudat Menge und Farbe?",
                feedbackB1:
                  "KUSS kommt nach dem Wechsel. Beim Lösen schaust du zuerst auf die Wunde.",
              },
            ],
          },
          {
            context:
              "Verbandwechsel abgeschlossen. Lukas wimmert, greift nach Sandras Hand. Du prüfst KUSS nach dem Wechsel. Was ist die korrekte Reihenfolge jetzt?",
            contextB1:
              "Verbandwechsel fertig. Lukas wimmert. Was machst du jetzt?",
            speaker: "Du",
            options: [
              {
                text: "KUSS erheben, Ergebnis dokumentieren, Lukas loben ('Gut gemacht!'), Sandra loben ('Du hast das toll gemacht'), nächsten Schritt ankündigen.",
                textB1:
                  "KUSS messen, aufschreiben, Lukas loben, Sandra loben, nächsten Schritt ansagen.",
                patientResponse:
                  "Lukas hört dich loben. Er schluchzt noch — aber schaut dich an. Sandra sagt: \"Danke.\"",
                patientResponseB1:
                  "Lukas hört das Lob. Er schluchzt. Er schaut dich an. Sandra sagt: \"Danke.\"",
                score: 3,
                feedback:
                  "Vollständig und strukturiert. KUSS dokumentiert den Ausgangswert für Evaluation. Lob für Lukas — auch wenn er nicht versteht was du sagst, Ton und Augenkontakt wirken. Lob für Sandra — sie hat aktiv geholfen und braucht diese Rückmeldung. Ankündigung: was kommt als nächstes (Mundpflege, Trinken) — Orientierung gibt Sicherheit.",
                feedbackB1:
                  "Alles richtig. Messen, aufschreiben, loben, ankündigen. Das ist die gute Reihenfolge.",
              },
              {
                text: "Sofort weitermachen mit Mundpflege — keine Zeit verlieren.",
                textB1: "Sofort weitermachen mit Mundpflege.",
                patientResponse:
                  "Lukas zieht sich zurück. Er weint wieder — er hat keine Pause bekommen.",
                patientResponseB1:
                  "Lukas weint wieder. Er hatte keine Pause.",
                score: 0,
                feedback:
                  "Kein Übergang. Lukas braucht eine Erholungspause nach dem Verbandwechsel — auch wenn du weitermachen möchtest. Ohne Pause akkumuliert sich Stress und Angst. Jede Maßnahme beginnt mit Stabilisierung des Kindes.",
                feedbackB1:
                  "Lukas braucht eine Pause. Kein Kind hält mehrere Maßnahmen ohne Erholung dazwischen aus.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.3 — Branching: Komplikation 1 — Lukas schreit
    {
      stepId: "ce02-lukas-dur-03-komplikation-lukas-schreit",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DGV 2023", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-lukas-dur-komplikation-schmerz",
      tag: "pflege",
      contentC1: {
        title: "Komplikation 1 — Lukas schreit, Sandra sagt: Aufhören!",
        body: "Beim ersten Lösen des alten Verbands schreit Lukas laut auf und wehrt sich mit dem gesunden rechten Arm. Er dreht sich weg. Sandra sagt: \"Aufhören! Er hat zu viel Schmerzen!\" Was tust du?",
        glossarBegriffe: ["Bedarfsanalgesie", "KUSS-Skala"],
      },
      contentB1: {
        title: "Lukas schreit — was tust du?",
        body: "Beim Verbandwechsel schreit Lukas laut. Er dreht sich weg. Sandra sagt: \"Aufhören! Er hat zu viel Schmerzen!\" Was tust du?",
        glossarBegriffe: ["Bedarfsanalgesie (= Schmerzmittel bei Bedarf)"],
      },
      question: {
        fragetext: "Lukas schreit, Sandra sagt Aufhören — was tust du?",
        branchingOptions: [
          {
            text: "\"Ich muss das machen, er gewöhnt sich dran.\"",
            isCorrect: false,
            feedback:
              "Ethisch problematisch und fachlich falsch. Kinder 'gewöhnen' sich nicht an Schmerz beim Verbandwechsel — sie lernen, dass Behandlung Schmerz bedeutet, und die Abwehr wird stärker. Das ist Retraumatisierung. Pflege ohne adäquate Analgesie ist eine Verletzung des Kindeswohls. Außerdem: Sandra hat einen validen Einwand — sie kennt Lukas. Ihre Reaktion muss ernst genommen werden.",
            feedbackB1:
              "Das ist falsch. Kinder gewöhnen sich nicht daran. Das macht alles schlimmer. Sandras Reaktion muss ernst genommen werden.",
          },
          {
            text: "Pause machen. Lukas beruhigen. KUSS-Skala prüfen. Arzt fragen ob Bedarfs-Analgesie gegeben werden kann. Dann neuer Versuch mit Sandra als aktive Unterstützung.",
            isCorrect: true,
            feedback:
              "Richtig. Vier Schritte: (1) Pause — Schutz des Kindes hat Vorrang. (2) Beruhigen — Lukas und Sandra. (3) KUSS reassessment — zeigt dir den Schmerzscore jetzt, gibt Grundlage für Arzt-Gespräch. (4) Bedarfsanalgesie anfragen — wenn die Wirkzeit des Schmerzmittels abgelaufen ist oder nicht ausreicht, muss Arzt informiert werden. Dann neuer Anlauf mit Sandra aktiv eingebunden (Ablenkung + Halt geben).",
            feedbackB1:
              "Richtig. Pause. Beruhigen. KUSS prüfen. Arzt fragen. Dann neuer Versuch mit Sandra.",
          },
          {
            text: "Sandra soll Lukas festhalten, dann geht es schneller.",
            isCorrect: false,
            feedback:
              "Falsch — wegen des Motivs. Therapeutisches Halten durch Eltern (mit Einverständnis, ruhiger Stimme, als beruhigender Halt — nicht als Zwang) ist bei kindgerechten Maßnahmen eine etablierte Technik (Hoehl/Kullick 2019). Es geht aber um das Kindeswohl — nicht um Geschwindigkeit. 'Damit es schneller geht' macht aus Halt einen Zwang gegen den Willen des Kindes. Rechtlich wichtig: Festhalten gegen den erkennbaren Willen eines Kindes ohne Notfallsituation kann als freiheitsentziehende Maßnahme gewertet werden. Hier liegt kein Notfall vor; die richtige Antwort ist: Pause, KUSS-Reassessment, Bedarfsanalgesie. Wenn Lukas nach der Pause kooperiert, kann Sandra ihn beruhigend halten — als Sicherheit, nicht als Fixierung.",
            feedbackB1:
              "Falsch — wegen des Grundes. Eltern dürfen ihr Kind beruhigend halten — als Sicherheit. Aber nicht 'damit es schneller geht'. Wichtig: Festhalten gegen den Willen des Kindes ohne Notfall kann rechtlich als Fixierung gelten. Hier ist kein Notfall. Erst Pause, Schmerzmittel und Beruhigung. Wenn Lukas dann kooperiert, kann Sandra ihn ruhig halten.",
          },
        ],
      },
    },

    // Step 4.4 — Text (stepbystep): Verbandwechsel korrekt
    {
      stepId: "ce02-lukas-dur-04-verbandwechsel-korrekt",
      phase: 4,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DGV 2023", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-dur-verbandwechsel",
      tag: "krankheitslehre",
      displayFormat: "stepbystep",
      transition: "Verbandwechsel geschafft. Jetzt: Was darf Lukas im Mund haben — und was nicht?",
      contentC1: {
        title: "Verbandwechsel Grad 2a — korrekte Durchführung",
        body: "Nach der Pause. Arzt hat Bedarfsanalgesie freigegeben. Lukas ist ruhiger. Der korrekte Verbandwechsel:\n\n1. **Blasen nicht öffnen** (wenn intakt) — intakte Blasen bieten natürlichen Wundschutz, Öffnung erhöht Infektionsrisiko\n2. **NaCl-0,9-%-Spülung NUR bei Bedarf** — bei Verschmutzung, Wundsekretkrusten oder Belägen. Bei sauberer, intakter Wundfläche keine routinemäßige Spülung — sie irritiert das fragile Wundbett unnötig (DGV 2023: minimale Manipulation)\n3. **Hydroaktive Wundauflage anlegen** (z. B. Mepilex-ähnlich) — haftet nicht an der Wunde, schmerzarmer nächster Wechsel\n4. **Locker wickeln** — kein Abschnüren, Lukas muss Arm bewegen können\n5. **Schmerzkontrolle nach dem Wechsel** — KUSS-Skala erheben, Ergebnis dokumentieren\n\nQuelle: _(DGV-Leitlinie Thermische Verletzungen 2023; Hoehl/Kullick 2019, kindgerechte Wundversorgung mit sparsamer Wundreinigung)_",
        glossarBegriffe: ["NaCl 0,9 %", "Hydroaktive Wundauflage", "Mepilex"],
      },
      contentB1: {
        title: "Verbandwechsel — Schritt für Schritt",
        body: "Nach der Pause. Lukas ist ruhiger. Jetzt der Verbandwechsel:\n\n1. Blasen nicht aufmachen — wenn sie ganz sind, schützen sie die Wunde\n2. Wunde NUR spülen wenn sie schmutzig ist — mit NaCl (= Salzwasser 0,9 %). Bei sauberer Wunde nicht spülen (das reizt die Wunde)\n3. Wundauflage anlegen die nicht klebt\n4. Locker wickeln — Lukas muss den Arm bewegen können\n5. Danach: KUSS-Skala prüfen und aufschreiben",
        glossarBegriffe: ["NaCl 0,9 % (= Kochsalzlösung, 0,9 %)", "Hydroaktive Wundauflage"],
      },
    },

    // Step 4.4b — Inline-Wissen: Mundpflege bei Kleinkindern
    // Schüler hat den Verbandwechsel abgeschlossen. Bevor die MC zur Mundpflege kommt (4.5),
    // muss er wissen: Was darf man bei Kleinkindern unter 6 Jahren NICHT verwenden?
    {
      stepId: "ce02-lukas-dur-04b-mundpflege-kleinkind",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DGKJ 2022 — Mundpflege im Kindesalter",
        "Hoehl/Kullick 2019 — Kinderkrankenpflege",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-dur-mundpflege-grundlagen",
      tag: "pflege",
      themaPrimaer: "mundpflege",
      themenSekundaer: ["säuglingspflege"],
      transition: "Gut. Jetzt weißt du was geht und was nicht. Was bietest du Lukas an?",
      contentC1: {
        title: "Mundpflege bei Kleinkindern — was ist erlaubt, was nicht?",
        body: "",
        glossarBegriffe: ["Chlorhexidin", "Octenidin", "Mundpflege", "Soor"],
      },
      contentB1: {
        title: "Mundpflege bei Lukas — was ist erlaubt?",
        body: "",
        glossarBegriffe: ["Chlorhexidin", "Octenidin", "Soor (= Pilz im Mund)"],
      },
      inlineWissen: {
        bausteinRef: "mundpflege-kleinkind-grundlagen",
        storyAufhaenger:
          "Lukas' Mundschleimhaut ist leicht trocken. Er hat seit dem Unfall kaum getrunken. Du überlegst: Mundspülung? Zahnpflege? Was ist bei einem 2,5-Jährigen erlaubt — und was nicht?",
        storyAufhaengerB1:
          "Lukas' Mund ist trocken. Er hat kaum getrunken. Was kannst du für seinen Mund tun — und was darfst du nicht?",
        kerntext:
          "**Mundpflege bei Kindern unter 6 Jahren (DGKJ 2022):**\n\n**NICHT erlaubt:**\n\n• **Chlorhexidin-Mundspülungen** — Schluckgefahr (Kinder unter 6 können nicht zuverlässig ausspucken), Schleimhautreizung, bei Verschlucken Übelkeit und Erbrechen. DGKJ 2022 kontraindiziert bei <6 J.\n\n**Erlaubt und empfohlen:**\n\n• **Octenidin-Lösung** (z.B. Octenisept) — antiseptisch, schmeckt mild, bei Verschlucken ungefährlich.\n\n• **Schluckbare Lösungen** — Kamille oder Salbei in kleiner Menge, befeuchtet die Schleimhaut.\n\n• **Wattestäbchen mit Wasser** — sanftes Auswischen bei trockener Mundschleimhaut.\n\n• **Trinkangebote** — das Beste gegen trockene Schleimhäute: Flüssigkeit von innen.\n\n**Warum ist das bei Lukas relevant?**\n\nTrockene Mundschleimhaut + Schmerzstress + reduzierte Trinkmenge = **Soor-Risiko** (Candidose). Pilze siedeln sich auf trockenen, geschädigten Schleimhäuten leichter an. Deshalb: aktive Mundpflege, nicht abwarten.",
        kerntextB1:
          "**Mundpflege bei Kindern unter 6 Jahren:**\n\n**NICHT erlaubt:**\n\n• **Chlorhexidin-Mundspülung** — Kinder unter 6 können nicht richtig ausspucken. Gefahr beim Schlucken.\n\n**Erlaubt:**\n\n• **Octenidin** — antiseptisch, schmeckt mild, darf geschluckt werden.\n\n• **Kamille oder Salbei** — in kleiner Menge, befeuchtet den Mund.\n\n• **Wattestäbchen mit Wasser** — sanft den Mund auswischen.\n\n• **Trinken anbieten** — das Beste gegen trockenen Mund.\n\n**Warum bei Lukas wichtig?** Trockener Mund + wenig Trinken + Stress = Risiko für **Soor** (= Pilzinfektion im Mund). Deshalb: aktive Mundpflege.",
        faustregel:
          "Kein Chlorhexidin unter 6 Jahren. Octenidin oder Kamille — die darf das Kind schlucken.",
        faustregelB1:
          "Kein Chlorhexidin unter 6 Jahren. Octenidin oder Kamille sind sicher.",
        spektrum: [
          {
            patientName: "Herr Petrov (Schlaganfall)",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Aspirationsrisiko bei Mundpflege",
            kurzbeschreibung:
              "Herr Petrov hat eine Schluckstörung (Dysphagie). Mundpflege bei ihm muss mit Absaugbereitschaft erfolgen — Aspirationsrisiko. Bei Lukas besteht kein Aspirationsrisiko, aber die Grundregel ist dieselbe: Patient kann schlucken → schluckbare Mittel verwenden.",
          },
          {
            patientName: "Emilia (4 Monate, Bronchiolitis)",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Säugling — Mundpflege noch eingeschränkter",
            kurzbeschreibung:
              "Bei Emilia (4 Monate) ist Mundpflege auf Befeuchtung mit Muttermilch-getränktem Tupfer oder sterilem Wasser beschränkt. Keine Antiseptika, keine Lösungen — rein mechanisch-befeuchtend.",
          },
          {
            patientName: "Herr Bauer (82, Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Mundpflege bei Kooperationsproblem",
            kurzbeschreibung:
              "Herr Bauer kooperiert bei der Mundpflege nicht immer. Prinzip wie bei Lukas: kurz, ruhig, mit Ankündigung. Bei Demenz-Patienten: Chlorhexidin nur bei SICHERER Ausspuckfähigkeit — sonst Octenidin.",
          },
        ],
        sonstBox:
          "Erweiterte Mundpflege-Optionen bei Risikopatienten: **Nystatin** (bei Soor-Nachweis, Arztverordnung), **Dexpanthenol-Lösung** (bei Stomatitis/Mukositis, z.B. nach Chemotherapie — CE-05/CE-07), **Caphosol** (künstlicher Speichel bei Strahlentherapie-bedingter Xerostomie). Bei Lukas aktuell nicht relevant — aber bei Kindern auf der Onkologie (CE-10) zentrales Thema.",
        sonstBoxB1:
          "Mehr Mundpflege-Mittel: **Nystatin** bei Soor (Arzt muss es verordnen). **Dexpanthenol** bei Entzündung im Mund. **Künstlicher Speichel** bei Strahlentherapie. Für Lukas jetzt nicht nötig — aber bei Kindern mit Krebs (CE-10) sehr wichtig.",
        karteikarte: {
          vorderseite:
            "Lukas (2,5 J.) hat eine leicht trockene Mundschleimhaut. Eine Kollegin greift zur Chlorhexidin-Mundspülung. Was sagst du?",
          rueckseite:
            "Chlorhexidin ist bei Kindern unter 6 Jahren kontraindiziert (DGKJ 2022): Schluckgefahr, Schleimhautreizung, Übelkeit bei Verschlucken. Alternative: Octenidin (antiseptisch, schlucksicher) oder Kamille/Salbei in kleiner Menge.\n\nSpektrum: Petrov (Aspiration), Emilia (nur Wasser/Muttermilch-Tupfer), Bauer (Chlorhexidin nur bei sicherem Ausspucken).\n\nFaustregel: **Kein Chlorhexidin unter 6 Jahren. Octenidin oder Kamille — schlucksicher.**",
        },
      },
    },

    // Step 4.5 — MC: Mundpflege und Trinkangebot
    {
      stepId: "ce02-lukas-dur-05-mundpflege-trinkangebot",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DGKJ 2022", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-lukas-dur-trinken",
      tag: "pflege",
      contentC1: {
        title: "Mundpflege und Trinkangebot — was bietest du Lukas an?",
        body: "Verbandwechsel erledigt. Lukas' Mundschleimhaut ist leicht trocken. Er hat in den letzten 4 Stunden 80 ml getrunken — zu wenig für seinen Bedarf (Ziel: > 1160 ml/Tag). Was bietest du Lukas als nächstes an?",
        glossarBegriffe: ["Mundpflege Kleinkind", "Chlorhexidin"],
      },
      contentB1: {
        title: "Lukas trinkt zu wenig — was machst du?",
        body: "Lukas hat in 4 Stunden nur 80 ml getrunken. Die Mundschleimhaut ist trocken. Was bietest du ihm an?",
        glossarBegriffe: ["Chlorhexidin"],
      },
      question: {
        fragetext: "Was bietest du Lukas als nächstes an?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Nichts — er soll selbst signalisieren wenn er Hunger oder Durst hat.",
            isCorrect: false,
            explanation:
              "Falsch. Mit 2,5 Jahren und unter Schmerzstress kann Lukas Durst nicht zuverlässig kommunizieren. Warten ist keine Strategie. Die Pflegeperson muss aktiv Trinkanbote machen.",
            explanationB1:
              "Falsch. Lukas kann nicht sagen wenn er Durst hat. Du musst aktiv anbieten.",
          },
          {
            text: "Trinken spielerisch anbieten — kleiner Becher, Sandra fragen welches Lieblingsgetränk, in kleinen Schlucken",
            isCorrect: true,
            explanation:
              "Richtig. Spielerisches Trinkangebot mit bekanntem Getränk (z. B. Apfelsaft) senkt die Hemmschwelle. Kleiner Becher gibt Lukas Kontrolle. Sandra einbeziehen (kennt die Vorlieben). Kleine Schlucke bei trockener Schleimhaut — kein hastiges Trinken.",
            explanationB1:
              "Richtig. Kleiner Becher, Lieblingsgetränk von Sandra erfragen, kleine Schlucke. Das funktioniert bei Kleinkindern am besten.",
          },
          {
            text: "Mundpflege mit Wattestäbchen — erst wenn er 6 Stunden nichts getrunken hat.",
            isCorrect: false,
            explanation:
              "Mundpflege mit Wattestäbchen ist eine Maßnahme — aber 6 Stunden warten ist zu lang. Jetzt ist die Mundhöhle trocken, Trinken ist die erste Wahl. Mundpflege ergänzt Trinken, ersetzt es nicht.",
            explanationB1:
              "6 Stunden warten ist zu lang. Jetzt ist schon die Mundschleimhaut trocken. Erst Trinken anbieten.",
          },
          {
            text: "Mundspülung mit Chlorhexidin-Lösung.",
            isCorrect: false,
            explanation:
              "Falsch. Chlorhexidin-Mundspülungen sind bei Kindern unter 6 Jahren nicht empfohlen — Schluckgefahr, Schleimhautreizung (DGKJ 2022). Bei Lukas (2,5 J.) ist Chlorhexidin kontraindiziert. Kindgerechte Alternativen für die Mundpflege: Octenidin oder eine schluckbare Kamillen-/Salbei-Lösung in kleiner Menge.",
            explanationB1:
              "Falsch. Chlorhexidin ist bei Kindern unter 6 Jahren nicht erlaubt — zu gefährlich. Bessere Alternative für Lukas: Octenidin oder Kamille — die kann er ohne Gefahr schlucken.",
          },
        ],
      },
    },

    // Step 4.6 — Branching: Komplikation 2 — Vater Kevin wird laut
    {
      stepId: "ce02-lukas-dur-06-komplikation-vater-laut",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["§ 4 KKG 2012", "Kommunikationsmodelle"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-lukas-dur-deeskalation-kevin",
      tag: "pflege",
      contentC1: {
        title: "Komplikation 2 — Kevin wird laut als Frau Fink klopft",
        body: "Frau Fink klopft — zehn Minuten früher als geplant. Kevin sieht sie an der Tür und wird sofort laut: \"Das ist eine Unverschämtheit! Wir werden angezeigt wegen einem Unfall! Das lass ich mir nicht gefallen!\" Er steht auf, seine Stimme ist laut. Lukas zuckt zusammen — und fängt wieder an zu weinen. Was tust du?",
        glossarBegriffe: ["Deeskalation", "Raumwechsel als Technik"],
      },
      contentB1: {
        title: "Kevin wird laut — was tust du?",
        body: "Frau Fink klopft. Kevin sieht sie — er wird sofort laut. Lukas weint wieder. Was machst du?",
        glossarBegriffe: ["Deeskalation"],
      },
      question: {
        fragetext:
          "Kevin wird laut, Lukas weint — was ist deine erste Handlung?",
        branchingOptions: [
          {
            text: "\"Herr K., beruhigen Sie sich sofort!\"",
            isCorrect: false,
            feedback:
              "'Beruhigen Sie sich' eskaliert fast immer — bei Menschen in emotionaler Ausnahmesituation wirkt es bevormundend und als Kritik. Kevin hört: 'Du bist falsch.' Sein Lautsein wird lauter. Lukas weint mehr. Die Formulierung 'sofort' macht es noch schlimmer.",
            feedbackB1:
              "'Beruhigen Sie sich' macht es schlimmer. Kevin fühlt sich nicht ernst genommen. Er wird lauter.",
          },
          {
            text: "\"Herr K., ich sehe dass Sie das sehr trifft. Gehen wir kurz auf den Flur — für Lukas.\"",
            isCorrect: true,
            feedback:
              "Deeskalation durch drei Techniken: (1) Empathie zuerst ('ich sehe dass Sie das sehr trifft') — keine Kritik, Wahrnehmung seiner Emotion. (2) Raumwechsel ('auf den Flur') — weg aus der Situation, die Lukas belastet. (3) Kindorientierung als Argument ('für Lukas') — Kevin liebt Lukas. Das ist das stärkste Argument. Auf dem Flur kann Frau Fink ruhig den Ablauf erklären, Kevin wird ruhiger wenn er merkt dass niemand ihn verurteilt.",
            feedbackB1:
              "Richtig. Du sagst: Ich sehe deinen Gefühl. Lass uns rausgehen — für Lukas. Kevin liebt Lukas. Das ist das stärkste Argument.",
          },
          {
            text: "Den Arzt rufen und abwarten — das ist nicht deine Aufgabe.",
            isCorrect: false,
            feedback:
              "Keine Handlung ist auch eine Handlung — Lukas ist im Zimmer und wird durch Kevins Lautsein weiter belastet. Warten verstärkt die Situation. Kommunikation und Deeskalation sind Teil der Pflegerolle, nicht nur des Arztes.",
            feedbackB1:
              "Warten ist keine Lösung. Lukas weint. Die Situation verschlimmert sich. Deeskalation ist auch deine Aufgabe.",
          },
        ],
      },
    },

    // Step 4.7 — Text (scenario): Elternanleitung
    {
      stepId: "ce02-lukas-dur-07-elternanleitung",
      phase: 4,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-dur-elternanleitung",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Elternanleitung — Sandra als Co-Pflegerin",
        body: "Nach dem Gespräch mit Frau Fink. Kevin ist ruhiger — er hat verstanden dass das Screening kein Vorwurf ist. Sandra möchte beim nächsten Verbandwechsel aktiv dabei helfen.\n\nElternanleitung ist eine Pflege-Aufgabe, keine Vereinfachung. Sie ist therapeutisch für das Kind (vertraute Person = weniger Angst) und stärkend für die Eltern (Handlungsfähigkeit zurückgewinnen statt ohnmächtig zuschauen).\n\n**Was Sandra beim nächsten Verbandwechsel tun kann:**\n- Ablenkung übernehmen (Seifenblasen, Musik, ruhige Stimme — das kann nur Sandra so wie Sandra)\n- Lukas halten wenn er es erlaubt — nicht fixieren, aber halten\n- Signale lesen: 'Bah-bah!' heißt Seifenblasen. 'Nein!' heißt: Pause. 'Mama!' heißt: näher kommen\n- Trinken anbieten nach dem Wechsel\n\n**Was Sandra nicht tun soll:** Lukas gegen seinen Willen festhalten. Eigene Schuldgefühle in die Situation einbringen ('Mama ist so traurig, das tut mir leid...'). Anleitung ist eine Kooperation, keine Delegation von Verantwortung.",
        fallbezug:
          "Lukas K., 2,5 J., Verbrühung Grad 2a. Sandra (28) wird in die Pflege einbezogen — mit klarer Rolle und ohne Überforderung.",
        glossarBegriffe: ["Elternanleitung", "Familienzentrierte Pflege"],
      },
      contentB1: {
        title: "Sandra beim nächsten Verbandwechsel",
        body: "Sandra möchte helfen. Das ist gut. Eltern einbeziehen ist wichtig — für Lukas und für Sandra.\n\n**Was Sandra tun kann:**\n- Seifenblasen oder Musik machen\n- Lukas halten wenn er es will — nicht festhalten\n- Signale lesen: 'Bah-bah!' = Seifenblasen. 'Nein!' = Pause. 'Mama!' = näher kommen\n- Danach Trinken anbieten\n\n**Was Sandra nicht tun soll:** Lukas festhalten gegen seinen Willen. Die eigene Traurigkeit zeigen während des Verbandwechsels — das macht Lukas noch ängstlicher.",
        fallbezug:
          "Lukas K., 2,5 J. Sandra wird als Co-Pflegerin angeleitet.",
        glossarBegriffe: ["Familienzentrierte Pflege"],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 35,
};

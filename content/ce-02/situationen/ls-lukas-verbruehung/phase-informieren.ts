// CE-02 Situation Lukas — Phase 1: Informieren & Ankommen
// Steps: 5 · Bloom: B2–B3 · Zeit: ~15–25 Min
// Quelle: phase-informieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-lukas-informieren",
  phase: "informieren",
  titel: "Informieren & Ankommen",
  titelB1: "Ankommen bei Lukas und den Eltern",
  kontext:
    "Du betrittst Zimmer 3 der Kinderstation. Lukas sitzt auf Sandras Schoß. Sein linker Arm ist mit einem provisorischen feuchten Verband aus der Notaufnahme abgedeckt. Er weint nicht mehr laut — nur noch schluchzend. Sandra hält ihn fest, ihr Gesicht ist verweint. Kevin steht neben dem Bett, Arme verschränkt, schaut dich abwartend an.\n\nAuf dem Nachttisch liegt die Notaufnahmekarte mit wenigen Angaben: Lukas K., 2,5 J., Verbrühung 2a, ~15 % KOF, Erstversorgung durchgeführt, Schmerzmittel i.v. verabreicht. Du hast fünf Minuten bevor Kathrin kommt.\n\nDein erstes Ziel: Vertrauen aufbauen — bei Lukas, bei Sandra, und auch bei Kevin. Das gelingt nicht mit einer Checkliste in der Hand, sondern durch ruhige Präsenz, klare Worte und den ersten echten Blick auf Kind und Eltern. Gleichzeitig sammelst du Informationen: Unfallhergang, Erstversorgung, Vorerkrankungen, Entwicklungsstand, Allergien — und du führst das standardmäßige Kinderschutz-Screening durch, das bei jeder Verbrühung eines Kleinkindes stattfindet.",
  kontextB1:
    "Du gehst in Zimmer 3. Lukas sitzt auf dem Schoß von Sandra. Sein linker Arm hat einen Verband. Lukas schluchzt leise. Sandra hat geweint. Ihr Gesicht ist blass. Kevin steht neben dem Bett. Er schaut dich abwartend an.\n\nDu hast 5 Minuten bevor Kathrin kommt. Dein erstes Ziel: Vertrauen aufbauen. Das gelingt durch ruhige Präsenz und klare Worte.\n\nDu sammelst auch Informationen: Wie ist der Unfall passiert? Was haben die Eltern zuerst getan? Hat Lukas Vorerkrankungen? Hat er Allergien? Du führst auch das Kinderschutz-Screening durch — das ist Standard bei jeder Verbrühung eines kleinen Kindes.",
  kernSteps: [
    // Step 1.1 — MC: Erstbegegnung — was tust du zuerst?
    {
      stepId: "ce02-lukas-info-01-erstbegegnung-prio",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-lukas-info-erstbegegnung",
      tag: "pflege",
      contentC1: {
        title: "Was tust du ZUERST?",
        body: "Du betrittst das Zimmer. Lukas weint, Sandra ist aufgewühlt, Kevin schaut dich abwartend an. Du hast fünf Minuten bevor Kathrin kommt.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Du gehst in das Zimmer. Lukas weint. Sandra ist aufgewühlt. Kevin schaut dich an. Was machst du ZUERST?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Du betrittst das Zimmer — was tust du ZUERST?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Verband abschauen und die Wunde einschätzen",
            isCorrect: false,
            explanation:
              "Nicht so. Wundinspektion ohne Vorbereitung und Beziehungsaufbau verstärkt das Abwehrverhalten von Lukas. Er hat Angst vor Berührung — wenn du sofort anfasst, schlägt er um sich. Vertrauen kommt vor Information.",
            explanationB1:
              "Nicht so. Wenn du zuerst den Verband anschaust: Lukas hat Angst. Er wehrt sich. Erst vorstellen, dann schauen.",
          },
          {
            text: "Dich vorstellen, kurz erklären was du jetzt machst, Lukas auf Augenhöhe ansprechen",
            isCorrect: true,
            explanation:
              "Richtig. Vertrauen kommt vor Informationssammlung. Dich vorstellen gibt Sicherheit. Kurz erklären was du tust gibt Kontrolle zurück. Auf Augenhöhe zu Lukas gehen — nicht über ihn hinweg sprechen — zeigt Respekt auch dem kleinen Patienten gegenüber. Erst dann folgt die strukturierte Aufnahme.",
            explanationB1:
              "Richtig. Vertrauen kommt zuerst — dann Information. Dich vorstellen, erklären was du tust, auf Augenhöhe zu Lukas. Das braucht nur 30 Sekunden — aber es ändert alles.",
          },
          {
            text: "Sofort die Aufnahmedaten abfragen",
            isCorrect: false,
            explanation:
              "Nicht als erstes. Formale Aufnahme erst nach erstem Kontakt. Wenn du sofort Daten abfragst, fühlt sich das kalt an — Sandra und Kevin werden dir nicht vertrauen. Und Lukas sieht: Du interessierst dich nicht für ihn.",
            explanationB1:
              "Nicht zuerst. Das fühlt sich kalt an. Die Eltern vertrauen dir dann nicht.",
          },
          {
            text: "Kevin fragen was passiert ist",
            isCorrect: false,
            explanation:
              "Kevin ist gerade angespannt und defensiv. Ihn als erstes direkt anzusprechen ohne vorher Beziehung aufgebaut zu haben, kann schnell eskalieren. Besser: Erst alle begrüßen, Lukas einbeziehen, dann strukturiert den Unfallhergang erfassen.",
            explanationB1:
              "Kevin ist gerade angespannt. Ihn als erstes zu fragen kann schwierig werden. Erst alle begrüßen — dann Fragen stellen.",
          },
        ],
      },
    },

    // Step 1.2 — Text (scenario): Unfallhergang aufnehmen
    {
      stepId: "ce02-lukas-info-02-unfallhergang-aufnehmen",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022", "GNPI 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-info-unfallhergang",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Kinderstation, junge Mutter hält weinendes Kleinkind auf dem Schoß, Pflegeperson kniet auf Augenhöhe, ruhige Atmosphäre",
      bildhinweis:
        "Pediatric hospital room, young mother holding toddler on her lap with bandaged arm, nurse kneeling at child eye level, warm soft light, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Unfallhergang aufnehmen",
        body: "Du hast dich vorgestellt. Sandra atmet hörbar aus. Du bittest sie zu erzählen.\n\nSandra berichtet: **S** = Verbrühung linker Arm + Thorax, heute 09:20 Uhr. **B** = Lukas 2,5 J., bisher gesund, keine Vorerkrankungen, keine Allergien, U-Heft liegt vor. **A** = KUSS 8/10 bei Aufnahme, Schmerzmittel i.v. bereits verabreicht, provisorische Abdeckung angelegt. **R** = Aufnahme + Wundversorgung + Flüssigkeitsbilanz + Kinderschutz-Screening.\n\nWas Sandra als erstes erzählt: \"Ich hab nur kurz nicht hingeschaut. Eine Sekunde. Das war alles meine Schuld.\"\n\nWichtig — und das sagst du Sandra jetzt: **\"Sie haben das schnell und richtig gemacht.\"** Sandra hat die nasse Kleidung sofort entfernt, kurz lokal mit lauwarmem Wasser gekühlt (~8 Min) und Lukas dann warm zugedeckt — genau das ist nach aktueller DGV/GNPI-Empfehlung der Standard für Kleinkinder. Bei Kindern unter 8 Jahren bzw. >10 % KOF gilt: nur kurz lokal kühlen (max. 10 Min), lauwarmes Wasser (~20 °C), Wärmeerhalt am Restkörper — sonst droht Hypothermie und der Schock verstärkt sich. Das ist keine Beruhigung aus der Luft — das ist eine fachliche Rückmeldung. Sandra muss das wissen, und Kevin auch. Dieser Satz ist Kommunikation — nicht nur Befund.",
        fallbezug:
          "Lukas K., 2,5 J., Verbrühung Grad 2a ~15 % KOF linker Arm + Thorax. Du bist Pflegeschüler/in im 2. Ausbildungsdrittel auf der Kinderstation. Praxisanleiterin Kathrin kommt in 5 Minuten.",
        glossarBegriffe: ["SBAR", "KOF (Körperoberfläche)", "KUSS-Skala"],
      },
      contentB1: {
        title: "Was Sandra erzählt",
        body: "Du hast dich vorgestellt. Sandra erzählt:\n\nLukas hat heute Morgen um 9:20 Uhr eine Teetasse vom Tisch gezogen. Der heiße Tee ist auf seinen linken Arm und Oberkörper gefallen. Sandra hat sofort die nasse Kleidung ausgezogen. Dann hat sie die Stelle kurz mit lauwarmem Wasser gekühlt — etwa 8 Minuten, nur lokal. Dann hat sie Lukas warm zugedeckt und den Notruf gerufen.\n\nWichtig: Du sagst Sandra jetzt: **\"Sie haben das schnell und richtig gemacht.\"** Bei kleinen Kindern darf man nicht zu lange kühlen. Kinder kühlen schnell aus — das ist gefährlich (Hypothermie = zu kalter Körper). Die Regel: kurz lokal kühlen (max. 10 Minuten), lauwarmes Wasser, Restkörper warm halten. Sandra hat das genau so gemacht. Sandra braucht das zu hören.\n\nLukas hat keine Vorerkrankungen. Er hat keine Allergien. Das Impfheft liegt vor. Er hat in der Notaufnahme schon Schmerzmittel in die Vene bekommen (i.v.). Der Verband wurde schon angelegt.",
        fallbezug:
          "Lukas K., 2,5 J., Verbrühung Grad 2a. Du bist Schüler/in im 2. Ausbildungsdrittel auf der Kinderstation.",
        glossarBegriffe: ["KUSS-Skala", "KOF (Körperoberfläche)", "Hypothermie"],
      },
    },

    // Step 1.3 — Dialog (3 Phasen): Kinderschutz-Screening ansprechen
    {
      stepId: "ce02-lukas-info-03-kinderschutz-erklaeren",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["§ 4 KKG 2012", "§ 8a SGB VIII", "DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-info-kinderschutz",
      tag: "pflege",
      contentC1: {
        title: "Kinderschutz-Screening ansprechen",
        body: "Du musst das Kinderschutz-Screening ansprechen. Bei jeder Verbrühung eines Kleinkindes über 10 % KOF ist das Standard (§ 4 KKG 2012) — nicht weil die Eltern verdächtig sind, sondern weil dies der Abklärungsprozess ist. Kevin reagiert sofort defensiv.",
        glossarBegriffe: ["§ 4 KKG", "Kinderschutz-Screening"],
      },
      contentB1: {
        title: "Kinderschutz-Screening erklären",
        body: "Du musst Kevin und Sandra sagen: Es kommt noch ein Gespräch zum Kinderschutz. Das ist Pflicht bei jeder Verbrühung eines kleinen Kindes. Kevin hört das — und reagiert sofort laut.",
        glossarBegriffe: ["§ 4 KKG", "Kinderschutz-Screening"],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Kevins Reaktion.",
        patientName: "Kevin",
        dialogPhases: [
          {
            context:
              "Du erklärst Sandra und Kevin, dass bei jeder Verbrühung eines Kleinkindes ein standardisiertes Gespräch mit einer Sozialarbeiterin stattfindet. Kevin hört das. Er wird sofort laut:",
            contextB1:
              "Du sagst Kevin und Sandra: Es kommt ein Gespräch zum Kinderschutz. Das ist bei jedem kleinen Kind mit Verbrühung so. Kevin hört das. Er reagiert sofort:",
            speaker: "Kevin",
            options: [
              {
                text: "\"Das ist Vorschrift — ich kann das nicht ändern.\"",
                textB1: "\"Das ist Vorschrift. Ich kann nichts daran ändern.\"",
                patientResponse:
                  "Kevin verschränkt die Arme. \"Vorschrift. Klar. Dann sind wir jetzt Verdächtige.\" Er dreht sich weg.",
                patientResponseB1:
                  "Kevin macht die Arme vor der Brust. \"Vorschrift. Klar. Dann sind wir Verdächtige.\" Er dreht sich weg.",
                score: 0,
                feedback:
                  "Das stimmt zwar rechtlich — aber es eskaliert die Situation. 'Vorschrift' vermittelt: Bürokratie statt Fürsorge. Kevin fühlt sich nicht gehört. Er dreht sich weg, und du hast die Beziehung zu ihm verloren. Beim nächsten Mal: Fürsorge in den Vordergrund, Regelwerk in den Hintergrund.",
                feedbackB1:
                  "Das stimmt, aber Kevin fühlt sich nicht ernst genommen. 'Vorschrift' klingt kalt. Kevin dreht sich weg. Du hast das Gespräch verloren.",
              },
              {
                text: "\"Bei jeder Verbrühung eines kleinen Kindes führen wir dieses Gespräch — nicht weil wir zweifeln, sondern weil uns wichtig ist dass es Lukas gut geht. Das ist eine Abklärung, kein Vorwurf.\"",
                textB1:
                  "\"Bei jeder Verbrühung eines kleinen Kindes führen wir dieses Gespräch. Nicht weil wir zweifeln. Weil uns Lukas wichtig ist. Das ist keine Beschuldigung.\"",
                patientResponse:
                  "Kevin schaut dich an. Kurze Pause. \"Und was bedeutet das jetzt praktisch?\"",
                patientResponseB1:
                  "Kevin schaut dich an. Kurze Pause. \"Was bedeutet das für uns?\"",
                score: 3,
                feedback:
                  "Gut. Transparent und nicht anklagend. Du nennst den Standard, du benennst das Ziel (Lukas' Wohlbefinden), du entkräftest den impliziten Vorwurf direkt. Kevin fragt nach — das ist Kooperation. Jetzt kannst du den Ablauf erklären.",
                feedbackB1:
                  "Richtig. Du sagst klar: Das ist Standard. Nicht Verdacht. Lukas steht im Mittelpunkt. Kevin fragt jetzt nach — das ist gut. Er kooperiert.",
              },
              {
                text: "\"Keine Sorge, das ist nichts Schlimmes.\"",
                textB1: "\"Keine Sorge. Das ist nicht schlimm.\"",
                patientResponse:
                  "Kevin schaut skeptisch. \"Nichts Schlimmes. Ich weiß nicht. Fühlt sich nicht so an.\"",
                patientResponseB1:
                  "Kevin schaut skeptisch. \"Nicht schlimm. Für mich fühlt es sich schlimm an.\"",
                score: 1,
                feedback:
                  "Zu verharmlosend. Kevin fühlt sich nicht ernst genommen — er spürt dass etwas bedeutsam ist, und du sagst das Gegenteil. Das wirkt unehrlich. Besser: Die Bedeutung anerkennen, aber klar machen was Abklärung bedeutet (kein Vorwurf, kein Verdacht).",
                feedbackB1:
                  "Nicht gut. Kevin fühlt sich nicht ernst genommen. Er spürt: Das ist ernst. Du sagst: Kein Problem. Das wirkt nicht ehrlich.",
              },
            ],
          },
          {
            context:
              "Kevin hat gefragt: 'Was bedeutet das jetzt praktisch?' Du erklärst:",
            contextB1: "Kevin fragt: 'Was bedeutet das für uns?' Du erklärst:",
            speaker: "Du",
            options: [
              {
                text: "\"Heute Nachmittag kommt Frau Fink, unsere Sozialarbeiterin. Sie führt ein kurzes Gespräch mit euch — ohne Lukas dabei. Sie schaut sich an: Gibt es Unterstützungsbedarf? Gibt es Ressourcen die ihr braucht? Es geht nicht um Schuld, sondern darum, wie es euch als Familie gerade geht.\"",
                textB1:
                  "\"Heute Nachmittag kommt Frau Fink. Sie ist Sozialarbeiterin. Sie redet kurz mit euch — ohne Lukas. Sie fragt: Braucht ihr Hilfe? Wie geht es euch? Nicht: Was habt ihr falsch gemacht.\"",
                patientResponse:
                  "Kevin nickt langsam. Sandra sagt leise: \"Okay. Wenn das für Lukas wichtig ist.\"",
                patientResponseB1:
                  "Kevin nickt. Sandra sagt leise: \"Okay. Wenn das für Lukas gut ist.\"",
                score: 3,
                feedback:
                  "Klar, konkret, ressourcenorientiert. Du erklärst den Ablauf (Frau Fink, heute Nachmittag, ohne Lukas), du nennst den Fokus (Unterstützungsbedarf), und du nimmst den Vorwurfs-Frame wieder weg. Sandra signalisiert Kooperation — Kevin auch (langsames Nicken).",
                feedbackB1:
                  "Sehr gut. Du erklärst klar was passiert. Wer kommt, wann, wozu. Kevin nickt. Sandra sagt Ja. Du hast die Situation stabilisiert.",
              },
              {
                text: "\"Das wird die Sozialarbeiterin euch dann erklären.\"",
                textB1:
                  "\"Das erklärt euch dann die Sozialarbeiterin.\"",
                patientResponse:
                  "Kevin runzelt die Stirn. \"Also wissen Sie auch nicht was da passiert.\"",
                patientResponseB1:
                  "Kevin runzelt die Stirn. \"Also wissen Sie das auch nicht.\"",
                score: 1,
                feedback:
                  "Abschieben. Kevin hat direkt gefragt — und du gibst die Verantwortung weiter. Das wirkt unsicher und erzeugt Misstrauen. Du weißt den Ablauf: Erkläre ihn kurz selbst, dann kommt Frau Fink mit Details.",
                feedbackB1:
                  "Abschieben ist nicht gut. Kevin hat gefragt. Du weißt die Antwort. Erkläre sie kurz — dann kommt Frau Fink mit Details.",
              },
            ],
          },
          {
            context:
              "Sandra fragt dich leise, während Kevin kurz aus dem Zimmer geht: \"Meinen die, wir haben was falsch gemacht?\"",
            contextB1:
              "Sandra fragt leise: \"Denken die hier, wir haben etwas falsch gemacht?\"",
            speaker: "Du",
            options: [
              {
                text: "\"Nein. Was du heute Morgen gemacht hast — sofort Kühlen, sofort Notruf — das war genau richtig. Das Screening ist Standard für alle Kinder mit Verbrühung. Es geht um Lukas, nicht um euch als Eltern.\"",
                textB1:
                  "\"Nein. Du hast heute Morgen alles richtig gemacht — sofort Kühlen, sofort Notruf. Das Gespräch ist für alle kleinen Kinder mit Verbrühung. Es geht um Lukas.\"",
                patientResponse:
                  "Sandra nickt. Eine Träne läuft. \"Danke. Das hilft.\"",
                patientResponseB1:
                  "Sandra nickt. Eine Träne läuft ihr übers Gesicht. \"Danke. Das hilft.\"",
                score: 3,
                feedback:
                  "Sandwich-Prinzip in der Praxis: Erst die fachliche Bestätigung (Kühlen + Notruf = richtig), dann der Kontext (Standard für alle), dann der Fokus (Lukas, nicht die Eltern). Sandra fühlt sich entlastet. Das ist Beziehungsarbeit.",
                feedbackB1:
                  "Sehr gut. Du bestätigst: Du hast alles richtig gemacht. Du erklärst: Das gilt für alle Kinder. Sandra fühlt sich entlastet. Das ist gute Kommunikation.",
              },
              {
                text: "\"Das weiß ich nicht, das entscheidet die Sozialarbeiterin.\"",
                textB1:
                  "\"Das weiß ich nicht. Das entscheidet Frau Fink.\"",
                patientResponse:
                  "Sandra zieht sich zurück. \"Okay.\" Sie schaut zum Boden.",
                patientResponseB1:
                  "Sandra zieht sich zurück. \"Okay.\" Sie schaut weg.",
                score: 0,
                feedback:
                  "Du weißt mehr als du sagst. Sandra hat etwas Falsches getan? Nein — sie hat alles richtig gemacht. Das weißt du aus dem Unfallhergang. Eine Abschiebung an Frau Fink lässt Sandra mit ihrer Angst allein. Das schadet dem Vertrauen.",
                feedbackB1:
                  "Du weißt mehr. Sandra hat alles richtig gemacht — das weißt du schon. Sage es ihr. Sonst bleibt sie mit ihrer Angst allein.",
              },
            ],
          },
        ],
      },
    },

    // Step 1.4 — Highlight: U-Heft-Impfstatus
    {
      stepId: "ce02-lukas-info-04-u-heft-impfstatus",
      phase: 1,
      stepType: "highlight",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["STIKO 2024", "GNPI 2022"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-info-u-heft",
      tag: "krankheitslehre",
      contentC1: {
        title: "U-Heft sichten — was ist relevant?",
        body: "Sandra hat das U-Heft mitgebracht. Vor dir liegt eine vereinfachte Darstellung der Seiten. Markiere alle Informationen, die für Lukas' aktuelle Situation medizinisch relevant sind.",
        glossarBegriffe: ["U-Untersuchungen", "Tetanus-Impfung", "STIKO"],
      },
      contentB1: {
        title: "U-Heft anschauen — was ist wichtig?",
        body: "Sandra hat das U-Heft dabei. Markiere alles, das für Lukas jetzt wichtig ist.",
        glossarBegriffe: ["U-Untersuchungen", "Tetanus-Impfung"],
      },
      question: {
        fragetext:
          "Markiere alle Informationen im U-Heft, die für Lukas' aktuelle Situation medizinisch relevant sind.",
        highlightSegments: [
          {
            text: "Gewicht 13,2 kg, Körperlänge 92 cm (U6-Eintragung, 18 Monate)",
            isError: true,
            reason:
              "Relevant — aktuelles Gewicht wird für Flüssigkeits- und Medikamentenberechnung gebraucht (Holliday-Segar-Regel, Schmerzmedikation nach kg/KG).",
            reasonB1:
              "Wichtig — das Gewicht brauchen wir für Medikamente und Flüssigkeitsberechnung.",
          },
          {
            text: "U6 (18 Monate) — unauffällig, Entwicklungsstand altersentsprechend",
            isError: true,
            reason:
              "Relevant — zeigt, dass Lukas' Entwicklungsstand (Sprache, Motorik) beim letzten Check normal war. Das ist Teil des Kinderschutz-Screenings: Entwicklungsstand entspricht Alter → kein Hinweis auf chronische Vernachlässigung.",
            reasonB1:
              "Relevant — zeigt: Lukas hat sich normal entwickelt. Das ist wichtig für das Kinderschutz-Gespräch.",
          },
          {
            text: "U7 (24 Monate) — noch nicht durchgeführt, steht noch aus",
            isError: false,
            reason:
              "Kein direkter Befund — U7 steht noch aus (Lukas ist 30 Monate alt, U7 wäre bei 24 Monaten gewesen). Das wird dem Kinderarzt nach Entlassung gemeldet. In der akuten Situation kein Handlungsbedarf.",
          },
          {
            text: "Impfstatus: Tetanus-Auffrischung zuletzt bei U5 (9 Monate) — Grundimmunisierung vollständig",
            isError: true,
            reason:
              "Sehr relevant — bei offener Wundfläche muss Tetanus-Schutz geprüft sein. Grundimmunisierung vollständig → kein akuter Handlungsbedarf. Wenn Impfstatus unklar oder unvollständig wäre, müsste der Arzt informiert werden.",
            reasonB1:
              "Sehr wichtig — bei offener Wunde: Ist Lukas gegen Tetanus geimpft? Ja, vollständig. Gut.",
          },
          {
            text: "Keine bekannten Allergien laut Eintragung",
            isError: true,
            reason:
              "Relevant — Allergien beeinflussen Wundauflage-Wahl und Schmerzmedikation. 'Keine bekannten Allergien' ist ein positiver Befund.",
            reasonB1:
              "Wichtig — keine Allergien. Das ist gut für die Wundversorgung.",
          },
          {
            text: "Beratungsinhalt U6: Sicherheit im Haushalt, Sturzsicherung, Giftzentrale",
            isError: false,
            reason:
              "Standard-Beratungsinhalt — nicht akut relevant. Die Beratung hat stattgefunden (wie überall bei U6). Kein Befund für den aktuellen Fall.",
          },
        ],
      },
    },

    // Step 1.5 — Sorting: Informationssammlung Reihenfolge
    {
      stepId: "ce02-lukas-info-05-aufnahme-reihenfolge",
      phase: 1,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022", "§ 4 KKG 2012"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-lukas-info-reihenfolge",
      tag: "pflege",
      contentC1: {
        title: "Reihenfolge der Informationssammlung",
        body: "Du führst die Aufnahme von Lukas durch. Bringe die folgenden Informationsbausteine in die richtige Reihenfolge — nach Priorität für die akute Versorgung.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was fragst du als nächstes?",
        body: "Du sprichst mit Sandra. In welcher Reihenfolge sammelst du die Informationen? Sortiere die Karten.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Bringe die Informationsbausteine in die richtige Reihenfolge — nach Priorität für die Aufnahme.",
        sortItems: [
          "Unfallhergang + Zeitpunkt (wann, wie, womit?)",
          "Erstversorgung zuhause (Kühlung korrekt?)",
          "Vorerkrankungen, Allergien, aktuelle Medikamente",
          "Entwicklungsstand (Sprache, Motorik altersgerecht?)",
          "Familienanamnese: Weitere Unfälle? Frühere Krankenhausbesuche?",
          "Kinderschutz-Screening einleiten und Ablauf erklären",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};

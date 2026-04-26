// CE-02 Situation Herr Nguyen — Phase 4: Durchführen
// Steps: 7 Kern + 3 Optional · Bloom: B4–B5 · Zeit: ~40–60 Min
// 3 Komplikationen: K1 Scham/Würde, K2 Angehörige/Angst, K3 Beutel undicht
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/phase-durchfuehren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-nguyen-stoma-durchfuehren",
  phase: "durchfuehren",
  titel: "Durchführen — Beutelwechsel und was dazwischen passiert",
  titelB1: "Durchführen — Der Beutelwechsel",
  kontext:
    "Du hast das Material vorbereitet: Handschuhe, Zellstoff, lauwarmes Wasser (bei Bedarf milde pH-neutrale Waschlotion), neue Stomaplatte in der richtigen Größe (60 mm — aus dem Patientenblatt), Schutzpaste, neuer Beutel. Tochter Linh übersetzt deine Ankündigung: 'Ich werde jetzt den Beutel wechseln. Das dauert etwa 10 Minuten. Du kannst die ganze Zeit schauen oder wegschauen — das entscheidest du.' Herr Nguyen nickt. Schlägt die Augen nieder. Ehefrau Mai bleibt am Fenster — du fragst Linh, ob sie dabei bleiben darf. Linh fragt. Herr Nguyen nickt wieder, knapp.",
  kontextB1:
    "Du hast alles bereit: Handschuhe, Wasser, neue Stomaplatte, Schutzpaste, neuer Beutel. Linh übersetzt: 'Ich wechsle jetzt den Beutel. Du kannst schauen oder wegschauen — du entscheidest.' Herr Nguyen nickt. Er schlägt die Augen nieder. Ehefrau Mai bleibt am Fenster.",
  kernSteps: [
    // Step 4.1 — Sorting: Material-Check vor Beutelöffnen
    {
      stepId: "ce02-nguyen-dur-01-beutel-vorbereitung",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-dur-vorbereitung",
      tag: "pflege",
      contentC1: {
        title: "Material-Check: Was muss VOR dem Öffnen des Beutels passiert sein?",
        body: "Bevor du den alten Beutel öffnest, müssen bestimmte Schritte abgeschlossen sein. Reihenfolge mit fachlicher Begründung — besonders: Würdeschutz für Herrn Nguyen und den Zimmernachbarn.",
        glossarBegriffe: ["Intimsphäre", "Würdeschutz"],
      },
      contentB1: {
        title: "Was machst du VOR dem Öffnen des Beutels?",
        body: "Bevor du den Beutel öffnest — was muss fertig sein? Sortiere die Schritte.",
        glossarBegriffe: ["Würde", "Vorbereitung"],
      },
      question: {
        fragetext:
          "Bringe die Vorbereitungsschritte in die richtige Reihenfolge, bevor du den alten Beutel öffnest.",
        sortItems: [
          "Handschuhe anziehen",
          "Zimmer abschirmen: Vorhang zum Zimmernachbarn ziehen, Tür schließen",
          "Herrn Nguyen und Angehörige informieren, was jetzt passiert — und dass er wegschauen kann",
          "Material griffbereit auf sauberer Unterlage neben dem Bett bereitlegen",
          "Bett auf arbeitstaugliche Höhe bringen (Rückenschutz Pflegekraft, aber Herrn Nguyen informieren)",
        ],
      },
    },

    // Step 4.2 — Dialog (4 Phasen): Beutelwechsel-Kommunikation
    {
      stepId: "ce02-nguyen-dur-02-beutelwechsel-dialog",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-nguyen-dur-kommunikation",
      tag: "pflege",
      contentC1: {
        title: "Wie viel erklärst du — und wann bist du still?",
        body: "Du hast den alten Beutel geöffnet und entfernst ihn von oben nach unten — die andere Hand hält die Haut sanft gegen, damit nichts einreißt. Herr Nguyen schaut zur Seite. Du erklärst leise was du tust — Linh übersetzt in Kurzform. Aber: Wie viel ist richtig?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was sagst du beim Beutelwechsel?",
        body: "Du wechselst den Beutel. Eine Hand zieht von oben nach unten, die andere hält die Haut. Herr Nguyen schaut zur Seite. Du erklärst kurz was du tust — Linh übersetzt. Wie viel erklärst du?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Welche Kommunikations-Strategie ist beim Beutelwechsel von Herrn Nguyen richtig?",
        patientName: "Herr Nguyen",
        dialogPhases: [
          {
            context:
              "Du öffnest den alten Beutel. Herr Nguyen hat die Augen halb geschlossen. Linh sitzt dabei. Wie kommunizierst du während des Wechsels?",
            contextB1:
              "Du öffnest den alten Beutel. Herr Nguyen schaut zur Seite. Wie kommunizierst du?",
            speaker: "Du",
            options: [
              {
                text: "Jeden Schritt ausführlich kommentieren: 'Jetzt löse ich die alte Platte. Das kann etwas ziehen. Jetzt reinige ich das Stoma. Das fühlt sich so an...'",
                textB1:
                  "Jeden Schritt laut erklären: 'Jetzt löse ich die Platte. Jetzt reinige ich das Stoma...'",
                patientResponse:
                  "Herr Nguyen zieht die Schultern leicht hoch. Er atmet kurz durch den Mund.",
                patientResponseB1:
                  "Herr Nguyen zieht die Schultern hoch. Er atmet kurz durch den Mund.",
                score: 2,
                feedback:
                  "Transparenz ist grundsätzlich wichtig und richtig — der Patient soll wissen was passiert. Bei Herrn Nguyen aber mit Schamthema zu viel: laufende Echtzeit-Kommentierung jedes Schritts wird als aufdringlich erlebt. Beim nächsten Mal: kurze Ankündigungen am Anfang jeder Handlung, dazwischen Stille zulassen. Das wahrt Würde und gibt trotzdem Orientierung.",
                feedbackB1:
                  "Du machst etwas Wichtiges richtig: du erklärst, was passiert. Bei Herrn Nguyen ist es aber zu viel auf einmal. Beim nächsten Mal: kurze Sätze am Anfang, dazwischen Stille. Dann fühlt er sich nicht überfordert.",
              },
              {
                text: "Kurze sachliche Sätze zu Beginn und bei wichtigen Momenten, dazwischen Stille lassen: 'Ich löse jetzt die alte Platte. Kurz warten...' — dann Stille — 'Fast fertig.'",
                textB1:
                  "Kurze Sätze: 'Ich löse jetzt die Platte.' Dann Stille. 'Fast fertig.'",
                patientResponse:
                  "Herr Nguyen atmet ruhiger. Die Schultern sind weniger angespannt.",
                patientResponseB1:
                  "Herr Nguyen atmet ruhiger. Er entspannt sich leicht.",
                score: 3,
                feedback:
                  "Richtig. Knappe Erklärungen am Anfang jeder Handlung geben Herrn Nguyen Kontrolle und Würde (er weiß was kommt), ohne ihn zu überfluten. Stille zwischen den Erklärungen respektiert seinen Rückzug. Das ist die richtige Balance zwischen Transparenz und Rücksichtnahme.",
                feedbackB1:
                  "Richtig. Kurze Sätze geben Herrn Nguyen Kontrolle. Stille dazwischen respektiert ihn.",
              },
              {
                text: "Schweigen — nur handeln. Reden würde ihn nur ablenken.",
                textB1:
                  "Schweigen. Reden stört ihn nur.",
                patientResponse:
                  "Herr Nguyen wirkt angespannt. Er dreht den Kopf noch weiter zur Wand.",
                patientResponseB1:
                  "Herr Nguyen wirkt angespannt. Er dreht den Kopf zur Wand.",
                score: 0,
                feedback:
                  "Nicht richtig. Vollständiges Schweigen lässt den Patienten im Unklaren — er weiß nicht was als nächstes kommt, was Angst und Kontrollverlust verstärkt. Auch wenn Herr Nguyen wegschaut: kurze Ankündigungen geben ihm Würde und ermöglichen informierte Duldung. 'Nichts sagen' ist keine würdevolle Pflege.",
                feedbackB1:
                  "Nicht richtig. Schweigen macht Herrn Nguyen unsicher. Er weiß nicht was als nächstes kommt. Kurze Ankündigungen sind wichtig.",
              },
            ],
          },
          {
            context:
              "Du hast den alten Beutel entfernt. Stoma und Haut werden gereinigt und getrocknet. Herr Nguyen atmet regelmäßig, schaut noch zur Seite. Was machst du jetzt?",
            contextB1:
              "Der alte Beutel ist weg. Du reinigst Stoma und Haut. Herr Nguyen atmet ruhig. Was sagst du?",
            speaker: "Du",
            options: [
              {
                text: "'Das Stoma sieht gut aus — rosig und gesund. Das ist ein gutes Zeichen.' (Linh übersetzt kurz.)",
                textB1:
                  "'Das Stoma sieht gut aus — rosig und gesund.' (Linh übersetzt.)",
                patientResponse:
                  "Linh übersetzt leise. Herr Nguyen nickt kaum merklich.",
                patientResponseB1:
                  "Linh übersetzt. Herr Nguyen nickt leicht.",
                score: 3,
                feedback:
                  "Richtig. Ein kurzes positives Feedback zum Stoma-Befund ist fachlich korrekt und gibt Herrn Nguyen eine erste Orientierung: Sein Körper tut gerade etwas Gesundes. Das ist ein kleiner, wichtiger Baustein auf dem Weg zur Körperbild-Akzeptanz — nicht als falscher Optimismus, sondern als sachliche Information.",
                feedbackB1:
                  "Gut. Du gibst ihm eine Information, die gut ist. 'Das Stoma ist rosig' — das ist positiv und korrekt.",
              },
              {
                text: "Nichts sagen — erst fertig werden, dann reden.",
                textB1:
                  "Erst fertig werden, dann reden.",
                patientResponse:
                  "Herr Nguyen wartet ruhig. Er weiß nicht was als nächstes kommt.",
                patientResponseB1:
                  "Herr Nguyen wartet. Er weiß nicht was passiert.",
                score: 1,
                feedback:
                  "Nicht falsch — aber eine Chance verpasst. Ein ruhiger Kommentar zum Stoma-Befund ('sieht gut aus') gibt Herrn Nguyen eine sachliche Information und baut minimalst Vertrauen auf. Vollständiges Schweigen ist zwar nicht falsch, aber nicht optimal bei einem Patienten der sich schämt und Orientierung braucht.",
                feedbackB1:
                  "Nicht falsch — aber ein kurzes Wort wäre besser. Herr Nguyen braucht Orientierung.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.3 — Branching (K1): Scham und Würde
    {
      stepId: "ce02-nguyen-dur-03-k1-scham",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: ["Ethik-Kodex ICN (2021)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-nguyen-dur-koerperbild-wuerde",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 1 — 'Ich bin kein richtiger Mann mehr'",
        body: "Mitten im Beutelwechsel, du trocknest die Haut rund um das Stoma. Herr Nguyen sagt leise, auf Deutsch, ohne Linh anzusehen: **'Ich bin kein richtiger Mann mehr.'** Du hörst es. Linh hört es. Ehefrau Mai schaut auf. Was tust du?",
        fallbezug:
          "Patientenzitat Z3. Dieses Zitat ist das emotionale Zentrum dieser Lernsituation. Der Umgang damit bestimmt, ob Herr Nguyen einen ersten Schritt in Richtung Körperbild-Akzeptanz machen kann.",
        glossarBegriffe: ["Körperbild", "Würde", "Spiegeln"],
      },
      contentB1: {
        title: "KOMPLIKATION 1 — 'Ich bin kein richtiger Mann mehr'",
        body: "Während du die Haut trocknest sagt Herr Nguyen leise auf Deutsch: **'Ich bin kein richtiger Mann mehr.'** Linh hört es. Ehefrau Mai schaut auf. Was tust du?",
        glossarBegriffe: ["Körperbild", "Würde"],
      },
      question: {
        fragetext: "Herr Nguyen sagt: 'Ich bin kein richtiger Mann mehr.' Was tust du?",
        branchingOptions: [
          {
            text: "'Das ist doch nicht so. Sie sind noch derselbe Mensch.'",
            feedback:
              "Entwertend — auch wenn gut gemeint. Diese Antwort minimiert Herrn Nguyens Erleben. Er hat nicht gesagt 'Ich fühle mich anders' — er hat gesagt 'Ich bin kein richtiger Mann mehr.' Das ist kein Irrtum den du korrigieren kannst, sondern ein tiefer Schmerz der gehört werden will. 'Das ist doch nicht so' sagt: Dein Erleben ist falsch. Das ist das Gegenteil von würdevoller Begegnung.",
            feedbackB1:
              "Nicht gut. Du versuchst ihn zu beruhigen — aber du wertest sein Erleben ab. Er fühlt so. Das ist real.",
            isCorrect: false,
          },
          {
            text: "Kurz Pause machen. Handgriff stoppen. Ihn anschauen: 'Das muss sich sehr schwer anfühlen. Darf ich kurz mit Ihnen darüber reden, wenn wir fertig sind?'",
            feedback:
              "Richtig. Vier Elemente dieser Reaktion sind entscheidend: 1) Pause — Körper und Wort trennen (er spricht, du hörst), 2) Blickkontakt — Würde und Präsenz, 3) Spiegeln statt falscher Trost ('Das muss sich schwer anfühlen' = du nimmst es ernst ohne es zu bewerten), 4) Raum lassen ('Darf ich?') — nicht aufdrängen, Einverständnis einholen. Das ist pflegetherapeutisches Handeln nach dem ICN-Ethik-Kodex.",
            feedbackB1:
              "Richtig. Du machst Pause. Du schaust ihn an. Du sagst: 'Das klingt schwer.' Das ist Spiegeln — du nimmst sein Gefühl ernst ohne es zu bewerten. Dann bietest du ein Gespräch an — aber du drängst nicht.",
            isCorrect: true,
          },
          {
            text: "'Viele Patienten fühlen so am Anfang. Es wird besser.'",
            feedback:
              "Allgemeinplatz — keine echte Begegnung. Diese Antwort ist gut gemeint, aber sie verallgemeinert und verspricht. Herr Nguyen wird gerade nicht als Individuum mit seiner Geschichte wahrgenommen — sondern als 'einer von vielen'. Außerdem: 'Es wird besser' ist eine Versprechung die du nicht halten kannst. Körperbild-Akzeptanz nach Stoma kann Wochen bis Monate dauern und ist nicht garantiert.",
            feedbackB1:
              "Nicht gut. 'Viele fühlen so' — Herr Nguyen ist nicht 'viele'. 'Es wird besser' — das weißt du nicht. Echte Begegnung sieht anders aus.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.4 — Dialog (3 Phasen, K2): Ehefrau-Angst
    {
      stepId: "ce02-nguyen-dur-04-k2-angehoerige",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-nguyen-dur-angehoerige",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 2 — 'Mama hat Angst'",
        body: "Du hast den neuen Beutel angebracht. Alles dicht. Herr Nguyen atmet durch. In diesem Moment spricht Linh: **'Mama hat Angst. Was wenn der Beutel zuhause ausläuft? Was wenn sie es falsch macht?'** Du schaust zur Ehefrau — sie nickt. Was tust du?",
        fallbezug: "Patientenzitat Z4. Ehefrau Mai wird die Hauptpflegeperson zuhause. Ihre Angst ist kein Nebenthema — es ist Entlassungsmanagement.",
        glossarBegriffe: ["Entlassungsmanagement", "Angehörigen-Anleitung", "Stomatherapeut"],
      },
      contentB1: {
        title: "KOMPLIKATION 2 — 'Mama hat Angst'",
        body: "Du hast den neuen Beutel angebracht. Linh sagt: **'Mama hat Angst. Was wenn der Beutel zuhause ausläuft?'** Ehefrau Mai nickt. Was tust du?",
        fallbezug:
          "Ehefrau Mai muss zuhause den Beutel wechseln. Ihre Angst ist real.",
        glossarBegriffe: ["Angehörigen-Anleitung", "Stomatherapeut"],
      },
      question: {
        fragetext:
          "Linh sagt: 'Mama hat Angst. Was wenn der Beutel zuhause ausläuft?' Wie reagierst du?",
        patientName: "Linh / Ehefrau Mai",
        dialogPhases: [
          {
            context:
              "Du hast den neuen Beutel angebracht. Linh übersetzt die Angst ihrer Mutter. Ehefrau Mai schaut dich an. Was sagst du?",
            contextB1:
              "Der neue Beutel sitzt. Linh sagt: Mama hat Angst vor dem Beutelwechsel zuhause. Was sagst du?",
            speaker: "Du",
            options: [
              {
                text: "'Das macht der Stomatherapeut mit ihr — da muss ich mich nicht drum kümmern.'",
                textB1:
                  "'Das macht der Stomatherapeut. Das ist nicht meine Aufgabe.'",
                patientResponse:
                  "Linh übersetzt. Ehefrau Mai schaut auf ihre Hände. Sie sagt nichts.",
                patientResponseB1:
                  "Linh übersetzt. Ehefrau Mai schaut weg.",
                score: 0,
                feedback:
                  "Zu passiv und fachlich falsch. Angehörigen-Anleitung ist eine pflegerische Aufgabe — auch wenn der Stomatherapeut die Hauptanleitung übernimmt. Hier und jetzt: Ehefrau Mai hat gezeigt, dass sie Angst hat. Die richtige Reaktion ist: Kontextualisierung (was kommt, von wem), nicht Abweisung. Die Weichenstellung für das Entlassungsmanagement liegt bei der Pflegekraft.",
                feedbackB1:
                  "Nicht richtig. Die Angst von Ehefrau Mai ist real und sie braucht eine Antwort — nicht 'das ist nicht mein Problem'.",
              },
              {
                text: "'Frau Mai, heute kommen wir zusammen mit dem Stomatherapeuten — da können Sie alles fragen. Ich zeige Ihnen jetzt schon, wie der Beutel aussieht, wenn er richtig sitzt.' (Linh übersetzt.)",
                textB1:
                  "'Frau Mai, heute kommt der Stomatherapeut. Dort können Sie alles fragen. Ich zeige Ihnen jetzt schon: So sieht der Beutel aus, wenn er richtig sitzt.' (Linh übersetzt.)",
                patientResponse:
                  "Linh übersetzt. Ehefrau Mai hebt den Kopf. Sie nickt langsam. Noch unsicher, aber ein kleines Stück weniger allein.",
                patientResponseB1:
                  "Linh übersetzt. Ehefrau Mai hebt den Kopf. Sie nickt. Noch Angst, aber etwas ruhiger.",
                score: 3,
                feedback:
                  "Richtig. Zwei Elemente gleichzeitig: 1) Entlastung jetzt ('Der Stomatherapeut wird das erklären — Sie müssen das nicht alleine herausfinden'), 2) Erste Orientierung jetzt ('So sieht ein richtig sitzender Beutel aus'). Das ist Entlassungsmanagement bereits im Akutkontext. Angehörigen-Anleitung ist eine eigenständige pflegerische Aufgabe mit geplanter Struktur — kein Nebenprodukt.",
                feedbackB1:
                  "Richtig. Du gibst ihr zwei Dinge: Entlastung (der Stomatherapeut kommt) und eine erste Orientierung jetzt.",
              },
              {
                text: "'Ich erkläre ihr jetzt gleich alles — Schritt für Schritt.'",
                textB1:
                  "'Ich erkläre ihr jetzt alles.'",
                patientResponse:
                  "Linh übersetzt. Ehefrau Mai nickt, wirkt aber überfordert. Sie schaut mehrfach zwischen dir und dem Stoma hin und her.",
                patientResponseB1:
                  "Linh übersetzt. Ehefrau Mai nickt, aber sie wirkt sehr überfordert.",
                score: 1,
                feedback:
                  "Gut gemeint — aber überfordert alle Beteiligten. Mitten im Beutelwechsel, ohne Stomatherapeuten, ohne strukturiertes Anleitungskonzept, über Linh als Übersetzerin: Das ist zu viel auf einmal. Ehefrau Mai kann diese Informationsmenge nicht verarbeiten. Außerdem: Die Hauptanleitung ist Aufgabe des Stomatherapeuten (Fachkraft), nicht der Pflegekraft im Akut-Kontext.",
                feedbackB1:
                  "Gut gemeint — aber zu viel auf einmal. Jetzt ist nicht der richtige Moment für die komplette Anleitung.",
              },
            ],
          },
          {
            context:
              "Du hast entschieden, den Stomatherapeuten als Hauptanleitenden einzusetzen. Aber du kannst Mai jetzt schon etwas zeigen. Was?",
            contextB1:
              "Du zeigst Ehefrau Mai jetzt etwas Erstes. Was?",
            speaker: "Du",
            options: [
              {
                text: "Zeige wie der Beutel aussieht wenn er richtig sitzt: Kein Spalt zwischen Platte und Haut, Beutel hängt nach unten, Dichtung fühlt sich fest an. Linh übersetzt kurz.",
                textB1:
                  "Zeige: Kein Spalt zwischen Platte und Haut. Beutel hängt nach unten. Dicht. Linh übersetzt.",
                patientResponse:
                  "Ehefrau Mai beugt sich leicht vor. Sie schaut konzentriert. Sie zeigt auf die Platte: fragt auf Vietnamesisch, Linh übersetzt: 'Sieht das immer so aus — der Rand hier?'",
                patientResponseB1:
                  "Ehefrau Mai schaut konzentriert. Sie fragt (Linh übersetzt): 'Sieht das immer so aus?'",
                score: 3,
                feedback:
                  "Richtig. Eine kurze visuelle Orientierung ('so sieht richtig aus') gibt Ehefrau Mai ein Referenzbild für zuhause. Das ist nicht die vollständige Anleitung — das ist der erste Orientierungsschritt. Ehefrau Mais Frage zeigt: Sie lernt aktiv.",
                feedbackB1:
                  "Gut. Du zeigst ihr etwas Konkretes. Sie kann es sehen und merken: 'So muss es aussehen.'",
              },
              {
                text: "Zeige ihr alle 8 Schritte des Beutelwechsels jetzt, damit sie für zuhause vorbereitet ist.",
                textB1:
                  "Erkläre ihr jetzt alle 8 Schritte des Beutelwechsels.",
                patientResponse:
                  "Ehefrau Mai wirkt zunehmend überfordert. Linh übersetzt Schritt 3, aber Ehefrau Mai schüttelt den Kopf und sagt etwas auf Vietnamesisch. Linh: 'Mama sagt, das ist zu viel.'",
                patientResponseB1:
                  "Ehefrau Mai wirkt überfordert. Linh: 'Mama sagt, das ist zu viel.'",
                score: 0,
                feedback:
                  "Zu viel auf einmal — genau das, was vermieden werden sollte. Lernen unter Stress und ohne Üben führt nicht zu Kompetenz. Ehefrau Mai braucht strukturierte Anleitung in mehreren Sitzungen (mit dem Stomatherapeuten, mit Zeit, ohne Druck) — nicht eine Informations-Flut jetzt.",
                feedbackB1:
                  "Zu viel. Lernen braucht Zeit. Das alles auf einmal ist zu viel.",
              },
            ],
          },
          {
            context:
              "Ehefrau Mai hat ihre erste Orientierung bekommen. Wie schließt du diesen Moment ab?",
            contextB1:
              "Ehefrau Mai hat etwas gesehen. Was sagst du zum Abschluss?",
            speaker: "Du",
            options: [
              {
                text: "'Um 10 Uhr kommt Herr Baum, der Stomatherapeut. Er erklärt Ihnen alles in Ruhe — auch wie sie den Beutel zuhause selbst wechseln. Ich sage ihm, dass Sie dabei sein möchten.' (Linh übersetzt.)",
                textB1:
                  "'Um 10 Uhr kommt Herr Baum, der Stomatherapeut. Er erklärt alles. Ich sage ihm, dass Sie dabei sein möchten.' (Linh übersetzt.)",
                patientResponse:
                  "Ehefrau Mai nickt. Ein kleines erleichtertes Ausatmen.",
                patientResponseB1:
                  "Ehefrau Mai nickt. Sie atmet erleichtert aus.",
                score: 3,
                feedback:
                  "Richtig. Du gibst ihr einen konkreten Termin, eine Fachkraft und die Zusicherung, dass du sie einplanst. Das nimmt die Ungewissheit ('wann? wer? wie?') und gibt ihr Orientierung für die nächsten zwei Stunden. Entlassungsmanagement beginnt hier — nicht am Entlassungstag.",
                feedbackB1:
                  "Richtig. Du gibst ihr: Wann? Um 10 Uhr. Wer? Herr Baum. Wirst du dabei sein? Ja. Das ist Entlastung.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.5 — Branching (K3): Beutel undicht
    {
      stepId: "ce02-nguyen-dur-05-k3-undicht",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-nguyen-dur-leckage",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 3 — Beutel undicht",
        body: "20 Minuten nach dem Wechsel ruft Herr Nguyen. Der Beutel ist an der Unterseite undicht — Stomainhalt auf der Bauch-Haut, Bettlaken kontaminiert. Du betrittst das Zimmer. Was tust du zuerst?",
        fallbezug:
          "Leckage ist die häufigste Stoma-Komplikation. Häufige Ursache: falsch angepasste Plattengröße oder Faltenwurf der Haut. Quelle: FG SKM 2023.",
        glossarBegriffe: ["Leckage", "Stomaplatte", "Mazerierung"],
      },
      contentB1: {
        title: "KOMPLIKATION 3 — Der Beutel läuft aus",
        body: "20 Minuten nach dem Wechsel ruft Herr Nguyen. Der Beutel ist undicht — Stuhl auf der Bauchhaut, Bettlaken nass. Du gehst ins Zimmer. Was tust du zuerst?",
        glossarBegriffe: ["Leckage", "Stomaplatte"],
      },
      question: {
        fragetext:
          "Der Beutel ist undicht und Stomainhalt ist auf die Haut gelangt. Was tust du ZUERST?",
        branchingOptions: [
          {
            text: "Sofort den Beutel abermals wechseln.",
            feedback:
              "Falsche Priorität. Stomainhalt auf der Haut ist aggressiv — bei Kolostoma leicht alkalisch, bei Ileostoma enzymatisch und stark hautaggressiv. Jede Minute, die der Inhalt auf der Haut bleibt, erhöht das Mazerierungsrisiko. Die Haut muss zuerst gereinigt und getrocknet werden — dann wird beurteilt ob und wie die Platte neu angelegt werden muss.",
            feedbackB1:
              "Nicht zuerst. Erst die Haut reinigen — der Stuhl beschädigt die Haut. Dann den Beutel neu anlegen.",
            isCorrect: false,
          },
          {
            text: "Haut sofort reinigen und gründlich trocknen — dann Beutel und Platte beurteilen, ob neu angelegt werden muss.",
            feedback:
              "Richtig. Haut vor Beutel — das ist die Prioritätsreihenfolge bei Leckage. Stomainhalt auf Haut = Mazerationsgefahr = sofort handeln. Nach der Hautreinigung: Beurteilen wo die Leckage war (Platte-Haut-Übergang? Beutel-Platten-Verbindung? Falsch angepasste Plattengröße?). Dann Konsequenz: Platte neu anpassen, Stoma nochmals ausmessen. Quelle: FG SKM 2023.",
            feedbackB1:
              "Richtig. Erst die Haut reinigen und trocknen. Dann schauen: Warum war der Beutel undicht? Dann neu anlegen.",
            isCorrect: true,
          },
          {
            text: "Arzt rufen — das ist eine Komplikation.",
            feedback:
              "Zu früh. Leckage ist die häufigste Stoma-Komplikation und gehört zum normalen Pflegealltag — sie ist keine medizinische Notfallkomplikation. Die Pflege kann und soll eigenständig handeln: Haut reinigen, Ursache beurteilen, Platte neu anlegen. Der Arzt wird nur informiert wenn Zeichen von Hautschädigung, Stomaprolaps oder anderen Komplikationen vorliegen.",
            feedbackB1:
              "Zu früh. Leckage ist häufig und du kannst selbst handeln: Haut reinigen, neu anlegen. Der Arzt kommt nur wenn Komplikationen sichtbar sind.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.6 — Sorting: Ganzkörperpflege-Reihenfolge
    {
      stepId: "ce02-nguyen-dur-06-ganzkörperpflege",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Thiemes Pflege, 14. Aufl."],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-dur-koerperpflege",
      tag: "pflege",
      contentC1: {
        title: "Ganzkörperpflege: Reihenfolge nach Hygiene-Grundsatz",
        body: "Du führst jetzt die Ganzkörperpflege durch. Herr Nguyen ist geschwächt, kann nicht selbst waschen. Welche Körperbereiche werden in welcher Reihenfolge gewaschen? Wichtig: Die Stomaversorgung läuft NICHT als Schritt der GKP, sondern als eigenständige Maßnahme — eigenes Set, eigene Schüssel, vor oder nach der GKP. Sortiere die GKP-Schritte.",
        glossarBegriffe: ["von sauber zu unrein", "Kreuzkontamination"],
      },
      contentB1: {
        title: "Ganzkörperpflege: In welcher Reihenfolge waschen?",
        body: "Du wäschst Herrn Nguyen. Er kann es nicht alleine. Wichtig: Die Stomapflege ist ein eigener Vorgang — nicht Teil der Ganzkörperpflege. Sortiere die Schritte der GKP.",
        glossarBegriffe: ["Hygiene", "Stoma"],
      },
      question: {
        fragetext:
          "Sortiere die Körperbereiche in die richtige Pflegereihenfolge nach 'von sauber zu unrein'. Die Stomaregion ist eine eigenständige Maßnahme (eigenes Set) — sie steht hier am Ende als getrennter Hinweis.",
        sortItems: [
          "Gesicht + Hals (sauberster Bereich — zuerst)",
          "Arme + Rumpf vorne (oberhalb des Stomas zuerst)",
          "Rücken (eigene Schüssel, Positionswechsel)",
          "Beine",
          "Genitale + Perianalbereich (letzter Bereich der GKP — unreinster)",
          "Stomaregion vor oder nach der GKP als eigenständige Maßnahme — eigenes Set, eigene Schüssel, eigenes Tuch (nicht in die GKP integrieren, kein 'schmutziger' Bereich, sondern getrennter Pflegevorgang)",
        ],
      },
    },

    // Step 4.7 — MC: Erste Mobilisation planen
    {
      stepId: "ce02-nguyen-dur-07-mobilisation-planung",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP — Expertenstandard Dekubitusprophylaxe, 3. Aktualisierung (2017)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-nguyen-dur-mobilisation",
      tag: "krankheitslehre",
      contentC1: {
        title: "Erste Mobilisation — 4. postoperativer Tag",
        body: "Herr Nguyen ist jetzt gewaschen und versorgt. Durch Linh lässt er ausrichten: Er möchte aufsetzen. Wie planst du die erste Mobilisation für diesen Moment — 4. postoperativer Tag, Stoma, Schmerz NRS 3/10, BMI 19?",
        glossarBegriffe: ["Mobilisation", "NRS", "Orthostase", "Bettkante"],
      },
      contentB1: {
        title: "Herr Nguyen möchte aufsetzen — wie planst du?",
        body: "Herr Nguyen möchte aufsetzen. 4. Tag nach der OP. Schmerz NRS 3/10. BMI 19. Wie gehst du vor?",
        glossarBegriffe: ["Mobilisation", "Bettkante", "Schwindel"],
      },
      question: {
        fragetext:
          "Herr Nguyen möchte aufsetzen. Schmerz NRS 3/10. 4. Tag post-OP. Wie planst du die Mobilisation?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich bringe ihn sofort auf den Stuhl — Bewegung ist das Wichtigste.",
            isCorrect: false,
            explanation:
              "Zu schnell. Post-OP-Mobilisation folgt einem Stufenprinzip: Bettkante → Aufstehen → kurze Schritte → Stuhl. Direkt auf den Stuhl ohne Vorstufen ist bei BMI 19 + Schmerz NRS 3 + Ramipril (Orthostase-Risiko) zu risikoreich. Schwindel beim Aufstehen kann zu Sturz führen.",
            explanationB1:
              "Zu schnell. Man muss in Schritten vorgehen: erst Bettkante, dann Aufstehen, dann Stuhl. Direkt auf den Stuhl kann gefährlich sein.",
          },
          {
            text: "Schellong-Modus: RR liegend messen und dokumentieren → an die Bettkante setzen, 1–3 Min warten, RR sitzend messen → erst dann ans Aufstehen denken. Bei RR-Abfall ≥20 mmHg systolisch oder Schwindel: zurücklegen.",
            isCorrect: true,
            explanationB1:
              "Richtig. Das ist der Schellong-Test: erst Blutdruck im Liegen messen — dann an die Bettkante setzen — 1 bis 3 Minuten warten — Blutdruck im Sitzen messen — dann erst aufstehen. Wenn der Blutdruck stark abfällt oder Herr Nguyen Schwindel hat: zurücklegen.",
            explanation:
              "Richtig. Bei Ramipril (Orthostase-Risiko) + Mangelernährung + 4. Tag post-OP ist ein strukturierter Schellong-Test der Standard, nicht eine 5-Minuten-Pause-und-fühlen. Ablauf: 1) RR liegend dokumentieren, 2) an Bettkante setzen (1–3 Min), 3) RR sitzend dokumentieren, 4) bei stabilem Kreislauf → Aufstehen versuchen, 5) bei RR-Abfall ≥20 mmHg systolisch / ≥10 mmHg diastolisch oder Symptomen (Schwindel, Übelkeit, Blässe): zurücklegen, Arzt informieren. NRS 3/10 ist tolerierbar — Schmerz vor Mobilisation prüfen, ggf. Bedarfsanalgesie 30 Min vorher. Quelle: DNQP Sturzprophylaxe; Pflege heute Kap. Mobilisation/Orthostase.",
          },
          {
            text: "Mobilisation erst wenn Schmerz NRS < 2.",
            isCorrect: false,
            explanation:
              "NRS < 2 ist kein realistisches Ziel bei frischer post-OP-Situation mit Stoma. Warten auf NRS < 2 bedeutet oft: keine Mobilisation. Das erhöht Dekubitus- und Thromboserisiko. NRS 3/10 ist tolerierbar für Mobilisation — wichtig ist: Schmerzschutz (Metamizol 30 Min vor geplanter Mobilisation), dann vorsichtig beginnen.",
            explanationB1:
              "NRS 3/10 ist tolerierbar. Warten auf NRS < 2 ist nicht realistisch. Schmerzmittel geben (30 Min vorher), dann mobilisieren.",
          },
          {
            text: "Nur die Physiotherapeutin darf Herrn Nguyen mobilisieren.",
            isCorrect: false,
            explanation:
              "Falsch. Erste Mobilisation (Bettkante, kurze Schritte) ist eine pflegerische Aufgabe — kein Physiotherapie-Vorbehalt. Die Physiotherapeutin unterstützt Aufbau und komplexe Übungen, aber die Pflege ist für die tägliche Mobilisations-Pflege verantwortlich. Delegieren ist hier falsch.",
            explanationB1:
              "Nicht richtig. Die Pflegekraft kann Herrn Nguyen mobilisieren — an die Bettkante ist Pflege-Aufgabe. Die Physio hilft bei komplexeren Übungen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // 4.opt-1 — Text (stepbystep): Schutzpaste erklärt
    {
      stepId: "ce02-nguyen-dur-opt1-schutzpaste-erklaeren",
      phase: 4,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-dur-schutzpaste",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Schutzpaste — was, warum, wie?",
        body: "Die Schutzpaste (auch Stomapaste, Hautschutzpaste) ist ein wichtiger Bestandteil der Stoma-Versorgung.\n\n**Was:** Eine zähflüssige Paste auf Pektin-Basis (z.B. Stomahesive-Paste von ConvaTec, Cohesive-Paste von Coloplast).\n\n**Warum:** Stomainhalt enthält Enzyme und Bakterien, die die Haut angreifen. Die Schutzpaste bildet eine Barriere + füllt kleine Unebenheiten der Haut aus → die Stomaplatte sitzt dichter, das Leckage-Risiko sinkt.\n\n**Wie:** 1) Dünn auftragenüberall um die Stomaöffnung (kein Häufen), 2) Ring-förmig, ca. 2–3 mm dick, 3) Kurz antrocknen lassen (1–2 Min), 4) Dann Stomaplatte aufsetzen. Wichtig: Paste NICHT auf das Stoma selbst auftragen.",
        glossarBegriffe: ["Schutzpaste", "Pektin", "Stomaplatte"],
      },
      contentB1: {
        title: "Schutzpaste — was ist das?",
        body: "Schutzpaste schützt die Haut rund um das Stoma.\n\nWarum: Der Stuhl aus dem Stoma greift die Haut an. Die Schutzpaste schützt die Haut davor.\n\nWie: 1) Dünn auftragen — rund um die Stomaöffnung, 2) Ring-Form, 3) Kurz trocknen lassen, 4) Dann die Stomaplatte aufsetzen. Nicht auf das Stoma selbst auftragen.",
        glossarBegriffe: ["Schutzpaste", "Stomaplatte"],
      },
    },

    // 4.opt-2 — Reflection: Kulturelle Sensibilität
    {
      stepId: "ce02-nguyen-dur-opt2-kulturelle-sensibilitaet",
      phase: 4,
      stepType: "reflection",
      bloomLevel: 3,
      kompetenzbereich: "III.2",
      quellen: ["Ethik-Kodex ICN (2021)"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-dur-reflexion-koerperbild",
      tag: "pflege",
      contentC1: {
        title: "Reflexion: Körperbild-Veränderung und eigene Haltung",
        body: "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr.' Diese Reflexionsfrage hat kein richtig oder falsch — die KI gibt Sandwich-Feedback auf deine Antwort.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Reflexion: Was denkst du?",
        body: "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr.' Diese Frage hat kein richtig oder falsch.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Herr Nguyen hat gesagt 'Ich bin kein richtiger Mann mehr.' Wie hättest du diese Situation vor dieser Lernsituation wahrscheinlich beantwortet? Was weißt du jetzt, was du damals nicht wusstest?",
        reflection: {
          prompt:
            "Wie hättest du auf Herrn Nguyens Aussage reagiert, bevor du diese Lernsituation durchgespielt hast? Was hat sich verändert?",
          placeholder:
            "Ich hätte wahrscheinlich... Jetzt weiß ich...",
          systemPrompt:
            "Schüler/in reflektiert den Umgang mit Scham, Körperbild-Veränderung und würdevoller Pflege. Sandwich-Feedback: Stärken benennen, dann konkrete Verbesserung ('Beim nächsten Mal...'), dann Ermutigung. Keine Wertung moralischer Art. Fokus: Was hat der/die Schüler/in gelernt?",
        },
      },
    },

    // 4.opt-3 — Categorize: Leckage-Ursachen
    {
      stepId: "ce02-nguyen-dur-opt3-leckage-ursachen",
      phase: 4,
      stepType: "categorize",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "vertiefung",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-dur-leckage-ursachen",
      tag: "pflege",
      contentC1: {
        title: "Leckage-Ursachen kategorisieren",
        body: "Wo läuft ein Stoma-Beutel aus? Und was ist die Konsequenz für jede Ursache?",
        glossarBegriffe: ["Leckage", "Stomaplatte", "Faltenwurf"],
      },
      contentB1: {
        title: "Warum läuft ein Stoma-Beutel aus?",
        body: "Es gibt verschiedene Gründe für Leckage. Sortiere die Ursachen.",
        glossarBegriffe: ["Leckage", "Stomaplatte"],
      },
      question: {
        fragetext:
          "Ordne jede Ursache der passenden Leckage-Stelle zu.",
        categories: [
          { name: "Platte-Haut-Übergang" },
          { name: "Beutel-Platten-Verbindung" },
          { name: "Falsch angepasste Plattengröße" },
        ],
        categoryItems: [
          { text: "Stomaplatte klebt nicht mehr — Haut gereizt oder feucht", correctCategory: 0 },
          { text: "Schutzpaste fehlt oder unzureichend — Haut-Unebenheiten nicht ausgefüllt", correctCategory: 0 },
          { text: "Beutel löst sich von der Platte — Verbindungsring beschädigt", correctCategory: 1 },
          { text: "Stoma-Ausschnitt zu groß — Stomainhalt trifft auf Haut unter der Platte", correctCategory: 2 },
          { text: "Stoma-Ausschnitt zu klein — Stoma eingeklemmt, Output geht seitlich raus", correctCategory: 2 },
        ],
      },
    },
  ],
  geschaetzteDauer: 50,
};

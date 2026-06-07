// CE-02 Situation Herr Nguyen — Phase 4: Durchführen
// Steps: 7 Kern + 3 Optional · Bloom: B4–B5 · Zeit: ~40–60 Min
// 3 Komplikationen: K1 Scham/Würde, K2 Angehörige/Angst, K3 Beutel undicht
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/phase-durchfuehren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-nguyen-stoma-durchführen",
  phase: "durchführen",
  titel: "Durchführen — Beutelwechsel und was dazwischen passiert",
  titelB1: "Durchführen — Der Beutelwechsel",
  kontext:
    "Du hast das Material vorbereitet: Handschuhe, Zellstoff, lauwarmes Wasser (bei Bedarf milde pH-neutrale Waschlotion), Schablone und Stift zum Anzeichnen der Lochgröße, neue Stomaplatte zum individuellen Zuschneiden, Schutzpaste, neuer Beutel. Wichtig: Die Lochgröße der Stomaplatte wird bei jedem Wechsel neu mit der Schablone gemessen — das Stoma schwillt in den ersten 6–8 Wochen post-OP ab. Ein Wert aus dem Patientenblatt von vor 3 Tagen ist bereits veraltet. Heute (4. POD) misst du: Stoma 60 mm rund — du zeichnest 62 mm an (Stoma + 2 mm Sicherheitsabstand) und schneidest die Platte zu. Tochter Linh übersetzt deine Ankündigung: 'Ich werde jetzt den Beutel wechseln. Das dauert etwa 10 Minuten. Du kannst die ganze Zeit schauen oder wegschauen — das entscheidest du.' Herr Nguyen nickt. Schlägt die Augen nieder. Ehefrau Mai bleibt am Fenster — du fragst Linh, ob sie dabei bleiben darf. Linh fragt. Herr Nguyen nickt wieder, knapp.",
  kontextB1:
    "Du hast alles bereit: Handschuhe, Wasser, Schablone (= Schablone zum Messen), neue Stomaplatte (du schneidest sie selbst zu), Schutzpaste, neuer Beutel. **Wichtig:** Die Lochgröße misst du jedes Mal neu. Das Stoma wird in den ersten 6–8 Wochen kleiner. Heute misst du: Stoma 60 mm. Du zeichnest 62 mm an (immer ca. 2 mm größer als das Stoma — sonst klemmt die Platte) und schneidest. Linh übersetzt: 'Ich wechsle jetzt den Beutel. Du kannst schauen oder wegschauen — du entscheidest.' Herr Nguyen nickt. Er schlägt die Augen nieder. Ehefrau Mai bleibt am Fenster.",
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
        body: "**Würdeschutz** = pflegerische Maßnahmen, die die Würde des Patienten wahren — z.B. Sichtschutz, Türen schließen, Ankündigung jeder Handlung, Wahlfreiheit ermöglichen.\n\nBevor du den alten Beutel öffnest, müssen bestimmte Schritte abgeschlossen sein. Reihenfolge mit fachlicher Begründung — besonders: Würdeschutz für Herrn Nguyen und den Zimmernachbarn.",
        glossarBegriffe: ["Intimsphäre", "Würdeschutz"],
      },
      contentB1: {
        title: "Was machst du VOR dem Öffnen des Beutels?",
        body: "**Würdeschutz** = was du tust, damit Herr Nguyen seine Würde behält — Vorhang zuziehen, Tür schließen, vorher sagen was du tust, ihn entscheiden lassen.\n\nBevor du den Beutel öffnest — was muss fertig sein? Sortiere die Schritte.",
        glossarBegriffe: ["Würde", "Vorbereitung", "Würdeschutz"],
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

    // Step 4.1a — InlineWissen: Stoma-Durchmesser
    // Position: VOR Step 4.1b (MC: Lochgröße messen)
    // Grund: "Stoma-Durchmesser" wird in Step 4.1b als zentraler Messwert verwendet
    {
      stepId: "ce02-nguyen-dur-iw-stoma-durchmesser",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
        "WCET — International Ostomy Guideline Recommendations (2020)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-dur-stoma-durchmesser",
      tag: "pflege",
      themaPrimaer: "stuhlausscheidung",
      themenSekundaer: ["pflegeprozess"],
      transition:
        "Stoma-Durchmesser und seine Bedeutung verstanden. Jetzt: Wie bestimmst du die Lochgröße konkret?",
      contentC1: {
        title: "Stoma-Durchmesser — warum Millimeter zählen",
        body: "",
        glossarBegriffe: ["Stoma-Durchmesser", "Messschablone", "Abschwellung", "Stoma"],
      },
      contentB1: {
        title: "Stoma-Durchmesser — warum jeder Millimeter wichtig ist",
        body: "",
        glossarBegriffe: ["Stoma-Durchmesser", "Schablone", "Stoma"],
      },
      inlineWissen: {
        bausteinRef: "stoma-durchmesser",
        storyAufhaenger:
          "Du stehst mit der Messschablone bereit. Das Stoma von Herrn Nguyen sieht rund aus — aber ist es wirklich kreisrund? Oder eher oval? Und warum entscheiden 2 Millimeter über gesunde Haut oder Mazerierung?",
        kerntext:
          "**Was ist der Stoma-Durchmesser?** Der gemessene Querschnitt des Stomas an seiner breitesten Stelle — angegeben in Millimetern. Er bestimmt die Lochgröße der Hautschutzplatte.\n\n**Wie misst du?**\n\n1. Messschablone flach auf das Stoma legen\n2. Den kleinsten Kreis finden, der das Stoma **vollständig** umschließt — ohne die Stomaschleimhaut einzuklemmen\n3. Durchmesser ablesen (z. B. 60 mm)\n4. **Nicht vergessen:** Manche Stomata sind nicht kreisrund, sondern oval → dann längsten UND kürzesten Durchmesser messen und die Platte oval zuschneiden\n\n**Warum Millimeter zählen (FG SKM 2023):**\n\n• **Lochgröße = Stoma-Durchmesser + 2 mm** (Sicherheitsabstand)\n• +2 mm: Stoma nicht eingeklemmt, Haut geschützt\n• +5 mm: 3 mm nackter Hautring freiliegend → Stomainhalt auf Haut → Mazerierung\n• 0 mm (exakt): Platte klemmt Stomaschleimhaut ab → Durchblutungsstörung → livide Verfärbung → im Extremfall Nekrose\n\n**Veränderung über Zeit:**\n\n• Unmittelbar post-OP: Stoma ödematös, am größten\n• Woche 1–4: Abschwellung, Durchmesser kann um 5–10 mm abnehmen\n• Woche 6–8: Endgröße erreicht → ab dann Standardplatte möglich\n\nBei Herrn Nguyen heute (4. POD): Stoma misst 60 mm → Plattenloch 62 mm.",
        kerntextB1:
          "**Was ist der Stoma-Durchmesser?** Wie groß das Stoma ist — in Millimetern gemessen.\n\n**Wie misst du?**\n1. Schablone auf das Stoma legen\n2. Den passenden Kreis finden\n3. Durchmesser ablesen (z. B. 60 mm)\n4. Manche Stomata sind oval → dann längsten und kürzesten Durchmesser messen\n\n**Warum jeder Millimeter wichtig ist:**\n• Loch = Stoma + 2 mm → richtig\n• Loch = Stoma + 5 mm → Haut liegt frei → Stuhl auf der Haut\n• Loch = genau Stoma-Größe → Platte klemmt das Stoma ab → gefährlich\n\n**Das Stoma wird kleiner:**\n• Kurz nach der OP: am größten (geschwollen)\n• Nach 6–8 Wochen: Endgröße erreicht",
        faustregel:
          "**+2 mm = Goldzone.** Jeder Millimeter mehr ist offene Haut. Jeder weniger ist Stoma-Abklemmung. Messen, nicht schätzen.",
        faustregelB1:
          "+2 mm ist genau richtig. Mehr = Haut frei. Weniger = Stoma eingeklemmt.",
        karteikarte: {
          vorderseite: "Herrn Nguyens Stoma misst 60 mm am 4. POD. Wie groß schneidest du das Loch — und warum genau diese Größe?",
          rueckseite:
            "Loch = 62 mm (Stoma-Durchmesser 60 mm + 2 mm Sicherheitsabstand). +2 mm: Stoma nicht eingeklemmt, Haut geschützt. Zu groß (+5 mm): 3 mm nackte Haut → Mazerierung. Zu eng (0 mm): Abklemmung → Nekrose-Risiko. Stoma schwillt 6–8 Wochen ab → bei jedem Wechsel neu messen. **+2 mm = Goldzone.**",
          vorderseiteB1: "Wie groß ist das Loch in der Platte wenn das Stoma 60 mm misst?",
          rueckseiteB1:
            "62 mm (Stoma + 2 mm). Zu groß = Stuhl auf Haut. Zu klein = Stoma eingeklemmt.",
        },
      },
    },

    // Step 4.1b — MC: Lochgröße der Hautschutzplatte messen (Anti-Pattern: Wert aus Patientenblatt)
    {
      stepId: "ce02-nguyen-dur-01b-lochgrösse-messen",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-nguyen-dur-lochgrösse",
      tag: "pflege",
      contentC1: {
        title: "Hautschutzplatte zuschneiden — wie bestimmst du die Lochgröße?",
        body: "Bevor du die neue Hautschutzplatte aufklebst, musst du das Loch passgenau zuschneiden. Im Patientenblatt vom Tag der OP steht: 'Stoma 60 mm rund'. Heute ist der 4. POD. Wie bestimmst du die Lochgröße der neuen Platte?",
        glossarBegriffe: ["Hautschutzplatte", "Schablone", "Stoma-Durchmesser"],
      },
      contentB1: {
        title: "Wie groß muss das Loch in der Platte sein?",
        body: "Du schneidest die neue Hautschutzplatte. Im Patientenblatt steht: 'Stoma 60 mm'. Heute ist der 4. Tag nach der Operation. Wie bestimmst du die Lochgröße?",
        glossarBegriffe: ["Hautschutzplatte", "Schablone"],
      },
      question: {
        fragetext:
          "Wie bestimmst du die Lochgröße der neuen Hautschutzplatte für Herrn Nguyen?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Wert aus dem Patientenblatt übernehmen: 60 mm — wurde bei der OP gemessen.",
            isCorrect: false,
            explanation:
              "Falsch — typischer Anfänger-Fehler. Das Stoma schwillt in den ersten 6–8 Wochen post-OP ab. Ein Wert von Tag 0 ist am 4. POD bereits veraltet. Wenn das Loch zu groß ist, trifft Stomainhalt direkt auf die Haut → Mazerierung + Leckage. Wenn zu klein, klemmt die Platte das Stoma ab → Durchblutungsstörung. Quelle: FG SKM 2023.",
            explanationB1:
              "Falsch. Das Stoma wird in den ersten 6–8 Wochen kleiner. Der Wert von der Operation passt heute nicht mehr. Du musst neu messen.",
          },
          {
            text: "Stoma jetzt mit der Messschablone ausmessen, dann Loch + 2 mm Sicherheitsabstand auf die Platte zeichnen und ausschneiden.",
            isCorrect: true,
            explanation:
              "Richtig. Standard nach FG SKM 2023: Bei jedem Wechsel mit Schablone neu messen — das Stoma schwillt in den ersten 6–8 Wochen ab. Lochgröße = Stoma-Durchmesser + 2 mm Sicherheitsabstand. Das verhindert sowohl Hautkontakt mit Stomainhalt (zu groß) als auch Abklemmung des Stomas (zu klein). Heute bei Herrn Nguyen: Stoma misst 60 mm → du zeichnest 62 mm an.",
            explanationB1:
              "Richtig. Du misst das Stoma jeden Tag neu mit der Schablone. Lochgröße = Stoma + 2 mm. Heute bei Herrn Nguyen: 60 mm Stoma → 62 mm Loch. Das ist der Standard.",
          },
          {
            text: "Etwas größer schneiden (Stoma + 5 mm), damit kein Druck auf das Stoma kommt.",
            isCorrect: false,
            explanation:
              "Zu groß. Bei +5 mm liegt zwischen Platte und Stoma ein Hautstreifen frei, auf den Stomainhalt direkt trifft → schnelle Mazerierung und Hauteinrisse. Standard ist +2 mm. Diese 2 mm reichen, damit nichts klemmt — und schützen gleichzeitig die Haut.",
            explanationB1:
              "Zu groß. 5 mm zu viel — dann ist Haut frei und der Stuhl greift sie an. Standard ist 2 mm größer als das Stoma.",
          },
          {
            text: "Genau in der Stoma-Größe (60 mm) zuschneiden — dann sitzt es perfekt.",
            isCorrect: false,
            explanation:
              "Zu eng. Eine 1:1-Passung klemmt das Stoma ab — das gefährdet die Durchblutung der Stomaschleimhaut. Folge: livide Verfärbung, im schlimmsten Fall Stomanekrose — ein chirurgischer Notfall. Außerdem reibt die Plattenkante an der empfindlichen Schleimhaut. 2 mm Sicherheitsabstand ist Pflicht.",
            explanationB1:
              "Zu eng. Wenn das Loch genau gleich groß ist, klemmt die Platte das Stoma ab. Das ist gefährlich. Loch = Stoma + 2 mm.",
          },
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
        body: "Du hast den alten Beutel geöffnet und entfernst ihn von oben nach unten (Schwerkraft hält den Stuhl im Beutel zurück, statt nach oben über das Stoma zu laufen) — die andere Hand hält die Haut sanft gegen, damit nichts einreißt. Herr Nguyen schaut zur Seite. Du erklärst leise was du tust — Linh übersetzt in Kurzform. Aber: Wie viel ist richtig?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was sagst du beim Beutelwechsel?",
        body: "Du wechselst den Beutel. Eine Hand zieht von oben nach unten — so läuft der Stuhl nach unten in den Beutel und nicht über das Stoma. Die andere Hand hält die Haut. Herr Nguyen schaut zur Seite. Du erklärst kurz — Linh übersetzt. Wie viel erklärst du?",
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
                  "Transparenz ist grundsätzlich wichtig und richtig — der Patient soll wissen was passiert. Bei Herrn Nguyen aber mit Schamthema zu viel: laufende Echtzeit-Kommentierung jedes Schritts wird als aufdringlich erlebt. Praxis-Tipp: Kurze Ankündigungen am Anfang jeder Handlung ('Jetzt lege ich den neuen Beutel an'), dazwischen Stille zulassen. Das wahrt Würde und gibt trotzdem Orientierung.",
                feedbackB1:
                  "Du machst etwas Wichtiges richtig: du erklärst, was passiert. Bei Herrn Nguyen ist es aber zu viel auf einmal. Praxis-Tipp: Kurze Sätze am Anfang ('Jetzt lege ich den neuen Beutel an'), dazwischen Stille. Dann fühlt er sich nicht überfordert.",
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
                  "Du hast erkannt, dass Herr Nguyen Ruhe braucht — der Impuls ist nachvollziehbar. Aber vollständiges Schweigen lässt den Patienten im Unklaren, weil er nicht weiß was als nächstes kommt — das verstärkt Angst und Kontrollverlust. Stattdessen: Auch wenn Herr Nguyen wegschaut, kurze Ankündigungen geben ihm Würde und ermöglichen informierte Duldung. Stille darf sein, aber begleitet von Orientierungs-Sätzen.",
                feedbackB1:
                  "Du hast erkannt, dass Herr Nguyen Ruhe braucht — verständlich. Aber Schweigen macht ihn unsicher, weil er nicht weiß was als nächstes kommt. Stattdessen: Kurze Ankündigungen geben ihm Sicherheit.",
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
                  "Richtig. Ein kurzes positives Feedback zum Stoma-Befund ist fachlich korrekt, weil es Herrn Nguyen eine erste Orientierung gibt: Sein Körper tut gerade etwas Gesundes. Deshalb ist das ein kleiner, wichtiger Baustein auf dem Weg zur Körperbild-Akzeptanz — nicht beschwichtigend, sondern als sachliche Information.",
                feedbackB1:
                  "Gut. Du gibst ihm eine Information, die hilft. 'Das Stoma ist rosig' — das ist positiv und korrekt.",
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
                  "Du hast einen wichtigen Punkt erkannt — fokussiertes Arbeiten ist gut. Aber eine Chance verpasst, weil ein ruhiger Kommentar zum Stoma-Befund ('sieht gut aus') Herrn Nguyen eine sachliche Information gibt und Vertrauen aufbaut. Stattdessen: Sachlicher Kurzkommentar während des Wechsels — das ist nicht Plauderei, sondern Würdeschutz.",
                feedbackB1:
                  "Du hast erkannt, dass Konzentration wichtig ist — gut. Aber ein kurzes Wort wäre besser, weil Herr Nguyen Orientierung braucht. Stattdessen: Sag kurz 'Das Stoma sieht gut aus' — das hilft ihm.",
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
      lernziel: "ce02-nguyen-dur-körperbild-würde",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 1 — 'Ich bin kein richtiger Mann mehr'",
        body: "**Körperbild-Akzeptanz** = der innere Prozess, bei dem ein Patient die Veränderung seines Körpers (z.B. nach einer Stoma-OP) als Teil von sich annimmt. Akzeptanz braucht Wochen bis Monate und kann nicht erzwungen werden — sie wird durch Würde, Offenheit und Geduld der Pflege ermöglicht.\n\nMitten im Beutelwechsel, du trocknest die Haut rund um das Stoma. Herr Nguyen sagt leise, auf Deutsch, ohne Linh anzusehen: **'Ich bin kein richtiger Mann mehr.'** Du hörst es. Linh hört es. Ehefrau Mai schaut auf. Was tust du?",
        fallbezug:
          "Patientenzitat Z3. Dieses Zitat ist das emotionale Zentrum dieser Lernsituation. Der Umgang damit bestimmt, ob Herr Nguyen einen ersten Schritt in Richtung Körperbild-Akzeptanz machen kann.",
        glossarBegriffe: ["Körperbild", "Würde", "Spiegeln", "Körperbild-Akzeptanz"],
      },
      contentB1: {
        title: "KOMPLIKATION 1 — 'Ich bin kein richtiger Mann mehr'",
        body: "**Körperbild-Akzeptanz** = wenn ein Patient annimmt, dass sein Körper sich verändert hat (z.B. nach einer Stoma-OP). Das braucht Zeit — Wochen oder Monate.\n\nWährend du die Haut trocknest sagt Herr Nguyen leise auf Deutsch: **'Ich bin kein richtiger Mann mehr.'** Linh hört es. Ehefrau Mai schaut auf. Was tust du?",
        glossarBegriffe: ["Körperbild", "Würde", "Körperbild-Akzeptanz"],
      },
      question: {
        fragetext: "Herr Nguyen sagt: 'Ich bin kein richtiger Mann mehr.' Was tust du?",
        branchingOptions: [
          {
            text: "'Das ist doch nicht so. Sie sind noch derselbe Mensch.'",
            feedback:
              "Du wolltest Herrn Nguyen Trost spenden — der Impuls ist menschlich. Aber entwertend, weil diese Antwort sein Erleben minimiert. Er hat nicht gesagt 'Ich fühle mich anders' — er hat gesagt 'Ich bin kein richtiger Mann mehr.' Das ist kein Irrtum den du korrigieren kannst, sondern ein tiefer Schmerz der gehört werden will. Stattdessen: Spiegeln statt Korrigieren. Sein Erleben anerkennen und Raum lassen — das ist würdevolle Begegnung.",
            feedbackB1:
              "Du wolltest ihn beruhigen — der Impuls ist gut gemeint. Aber: Du wertest sein Erleben ab, weil er sich wirklich so fühlt. Stattdessen: Sein Gefühl ernst nehmen, ohne es zu bewerten.",
            isCorrect: false,
          },
          {
            text: "Kurz Pause machen. Handgriff stoppen. Ihn anschauen: 'Das muss sich sehr schwer anfühlen. Darf ich kurz mit Ihnen darüber reden, wenn wir fertig sind?'",
            feedback:
              "Richtig. Vier Elemente dieser Reaktion sind entscheidend, weil sie Würde herstellen: 1) Pause — Körper und Wort trennen (er spricht, du hörst), 2) Blickkontakt — Würde und Präsenz, 3) Spiegeln statt beschwichtigender Antwort ('Das muss sich schwer anfühlen' = du nimmst es ernst ohne es zu bewerten), 4) Raum lassen ('Darf ich?') — nicht aufdrängen, Einverständnis einholen. Deshalb ist das pflegetherapeutisches Handeln nach dem ICN-Ethik-Kodex.",
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
      stepId: "ce02-nguyen-dur-04-k2-angehörige",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-nguyen-dur-angehörige",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 2 — 'Mama hat Angst'",
        body: "**Selbstversorgung** = der Patient versorgt sein Stoma selbstständig (Beutelwechsel, Hautpflege, Materialwahl) — das langfristige Ziel jeder Stoma-Anleitung.\n\n**Empowerment** = pflegerischer Ansatz, bei dem die Pflegekraft den Patienten befähigt, selbst zu handeln, statt ihn zu übernehmen. Der Patient bekommt Wissen, Fertigkeiten und Selbstvertrauen.\n\nDu hast den neuen Beutel angebracht. Alles dicht. Herr Nguyen atmet durch. In diesem Moment spricht Linh: **'Mama hat Angst. Was wenn der Beutel zuhause ausläuft? Was wenn sie es falsch macht?'** Du schaust zur Ehefrau — sie nickt. Wichtig: Primäres Ziel der Stoma-Anleitung ist die Selbstversorgung durch Herrn Nguyen — Ehefrau Mai ist unterstützende Begleiterin und Backup, nicht Hauptpflegeperson. Erst wenn Herr Nguyen es körperlich/sprachlich nicht schaffen kann, übernimmt Mai. Was tust du?",
        fallbezug: "Patientenzitat Z4. Mais Angst ist real und legitim — aber die Botschaft an sie und an Herrn Nguyen ist: Wir leiten zuerst dich, Herr Nguyen, an. Mai darf zuschauen und mitlernen für den Backup-Fall. Empowerment vor Übernahme.",
        glossarBegriffe: ["Entlassungsmanagement", "Selbstversorgung", "Empowerment", "Stomatherapeut"],
      },
      contentB1: {
        title: "KOMPLIKATION 2 — 'Mama hat Angst'",
        body: "**Selbstversorgung** = Herr Nguyen versorgt sein Stoma selbst (Beutel wechseln, Haut pflegen).\n\n**Empowerment** = die Pflegekraft macht den Patienten stark, damit er es selbst kann — nicht 'wir machen das für ihn'.\n\nDu hast den neuen Beutel angebracht. Linh sagt: **'Mama hat Angst. Was wenn der Beutel zuhause ausläuft?'** Ehefrau Mai nickt. Wichtig: Herr Nguyen lernt zuerst — er soll den Beutel selbst wechseln. Mai schaut zu und ist Backup. Was tust du?",
        fallbezug:
          "Ziel: Herr Nguyen versorgt sein Stoma selbst. Mai hilft nur, wenn Herr Nguyen es nicht kann.",
        glossarBegriffe: ["Selbstversorgung", "Stomatherapeut", "Empowerment"],
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
                  "Du hast die Aufgabentrennung erkannt — der Gedanke ist nicht ganz daneben. Aber zu passiv, weil Angehörigen-Anleitung eine pflegerische Aufgabe ist — auch wenn der Stomatherapeut die Hauptanleitung übernimmt. Hier und jetzt hat Ehefrau Mai gezeigt, dass sie Angst hat. Stattdessen: Kontextualisierung (was kommt, von wem), nicht Abweisung — die Weichenstellung für das Entlassungsmanagement liegt deshalb bei der Pflegekraft.",
                feedbackB1:
                  "Du hast erkannt, dass es Spezialisten gibt — der Gedanke ist nicht falsch. Aber: Die Angst von Ehefrau Mai ist real und sie braucht jetzt eine Antwort, weil Angehörigen-Anleitung auch Pflege-Aufgabe ist. Stattdessen: Du erklärst, was kommt und wann.",
              },
              {
                text: "'Frau Mai, ich verstehe Ihre Sorge. Wichtig zu wissen: Wir leiten zuerst Herrn Nguyen an — er soll den Beutel selbst wechseln können. Sie sind dabei und lernen mit, falls er Hilfe braucht. Heute kommt der Stomatherapeut, da können Sie und Herr Nguyen gemeinsam alles fragen.' (Linh übersetzt.)",
                textB1:
                  "'Frau Mai, ich verstehe Ihre Sorge. Aber: Zuerst lernt Herr Nguyen den Beutelwechsel — er soll es selbst machen. Sie sind dabei und helfen, wenn er nicht kann. Heute kommt der Stomatherapeut.' (Linh übersetzt.)",
                patientResponse:
                  "Linh übersetzt. Ehefrau Mai hebt den Kopf. Sie nickt langsam. Herr Nguyen schaut kurz zu Mai, dann wieder weg. Linh ergänzt leise: 'Mama findet das gut.'",
                patientResponseB1:
                  "Linh übersetzt. Mai hebt den Kopf. Sie nickt. Herr Nguyen schaut kurz zu Mai. Linh sagt: 'Mama findet das gut.'",
                score: 3,
                feedback:
                  "Richtig. Drei Elemente: 1) Anerkennen der Sorge (validieren statt abtun), 2) Klarstellen des Ziels: Selbstversorgung durch Herrn Nguyen ist primär — Empowerment statt Übernahme; das entspricht dem FG-SKM-Standard zur Stomatherapie und der DNQP-Beziehungsgestaltung. 3) Mai als unterstützende Begleitung positionieren, nicht als Hauptpflegeperson — das nimmt Druck weg und stärkt gleichzeitig Herrn Nguyens Würde und Selbstwirksamkeit.",
                feedbackB1:
                  "Richtig. Du machst drei Dinge: Du sagst 'Ich verstehe Ihre Angst' (das hilft Mai). Du sagst 'Herr Nguyen lernt zuerst' (das stärkt ihn). Und du sagst 'Sie helfen wenn er nicht kann' (Mai weiß: ich bin nicht alleine zuständig).",
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
                  "Du hast Mais Angst ernst genommen und reagiert — der Impuls ist richtig. Aber überfordert alle Beteiligten, weil mitten im Beutelwechsel, ohne Stomatherapeuten, ohne strukturiertes Anleitungskonzept und über Linh als Übersetzerin zu viel auf einmal kommt. Ehefrau Mai kann diese Informationsmenge nicht verarbeiten. Stattdessen: Die Hauptanleitung ist Aufgabe des Stomatherapeuten (Fachkraft) — du verweist konkret darauf, mit Termin und Sicherheit.",
                feedbackB1:
                  "Du wolltest helfen und zeigen, dass du dich kümmerst — gut. Aber zu viel auf einmal, weil Ehefrau Mai das nicht aufnehmen kann. Stattdessen: Heute gibt der Stomatherapeut die Anleitung, du verweist auf den Termin.",
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
              {
                text: "'Das wird schon. Machen Sie sich keine Sorgen.' (Linh übersetzt.)",
                textB1:
                  "'Das wird schon. Keine Sorge.' (Linh übersetzt.)",
                patientResponse:
                  "Ehefrau Mai nickt, aber schaut unsicher auf ihre Hände.",
                patientResponseB1:
                  "Ehefrau Mai nickt. Sie wirkt nicht beruhigt.",
                score: 1,
                feedback:
                  "Zu vage. 'Das wird schon' ist eine Floskel ohne Inhalt. Ehefrau Mai braucht konkrete Information: Wann kommt wer, was passiert dann, darf sie dabei sein? Ohne diese Eckpunkte bleibt die Angst.",
                feedbackB1:
                  "Zu allgemein. 'Das wird schon' hilft nicht. Sie braucht konkrete Antworten: Wann? Wer? Darf sie dabei sein?",
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
        body: "**Faltenwurf** = Hautfalten oder Narben rund um das Stoma, durch die die Hautschutzplatte nicht plan aufliegt — eine häufige Leckage-Ursache (Details kommen im Optional-Step).\n\n20 Minuten nach dem Wechsel ruft Herr Nguyen. Der Beutel ist an der Unterseite undicht — Stomainhalt auf der Bauch-Haut, Bettlaken kontaminiert. Du betrittst das Zimmer. Was tust du zuerst?",
        fallbezug:
          "Leckage ist die häufigste Stoma-Komplikation. Häufige Ursache: nicht passende Plattengröße oder Faltenwurf der Haut. Quelle: FG SKM 2023.",
        glossarBegriffe: ["Leckage", "Stomaplatte", "Mazerierung", "Faltenwurf"],
      },
      contentB1: {
        title: "KOMPLIKATION 3 — Der Beutel läuft aus",
        body: "**Faltenwurf** = Falten in der Haut rund um das Stoma. Die Klebeplatte liegt dann nicht glatt → der Beutel wird undicht.\n\n20 Minuten nach dem Wechsel ruft Herr Nguyen. Der Beutel ist undicht — Stuhl auf der Bauchhaut, Bettlaken nass. Du gehst ins Zimmer. Was tust du zuerst?",
        glossarBegriffe: ["Leckage", "Stomaplatte", "Faltenwurf"],
      },
      question: {
        fragetext:
          "Der Beutel ist undicht und Stomainhalt ist auf die Haut gelangt. Was tust du ZUERST?",
        branchingOptions: [
          {
            text: "Sofort den Beutel abermals wechseln.",
            feedback:
              "Du hast erkannt, dass schnelles Handeln wichtig ist — der Impuls stimmt. Aber die Priorität ist anders, weil Stomainhalt auf der Haut aggressiv ist (bei Kolostoma leicht alkalisch, bei Ileostoma enzymatisch stark hautaggressiv). Jede Minute, die der Inhalt auf der Haut bleibt, erhöht das Mazerierungsrisiko. Stattdessen: Haut zuerst reinigen und trocknen — dann wird beurteilt, ob und wie die Platte neu angelegt werden muss.",
            feedbackB1:
              "Du hast erkannt, dass es schnell gehen muss — gut. Aber: Erst die Haut reinigen, weil der Stuhl die Haut angreift. Stattdessen: Haut zuerst, dann den Beutel neu anlegen.",
            isCorrect: false,
          },
          {
            text: "Haut sofort reinigen und gründlich trocknen — dann Beutel und Platte beurteilen, ob neu angelegt werden muss.",
            feedback:
              "Richtig. Haut vor Beutel — das ist die Prioritätsreihenfolge bei Leckage, weil Stomainhalt auf Haut akute Mazerationsgefahr bedeutet. Nach der Hautreinigung: Beurteilen wo die Leckage war (Platte-Haut-Übergang? Beutel-Platten-Verbindung? Plattengröße zu groß oder zu klein?). Deshalb dann Platte neu anpassen, Stoma nochmals ausmessen. Quelle: FG SKM 2023.",
            feedbackB1:
              "Richtig. Erst die Haut reinigen und trocknen, weil der Stuhl die Haut angreift. Stattdessen wird der Beutel danach neu angelegt.",
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
      lernziel: "ce02-nguyen-dur-körperpflege",
      tag: "pflege",
      contentC1: {
        title: "Ganzkörperpflege: Reihenfolge nach Hygiene-Grundsatz",
        body: "**Von sauber zu unrein** = Hygiene-Prinzip der Ganzkörperpflege: Du beginnst beim saubersten Körperbereich (Gesicht) und arbeitest dich zum unreinsten (Genital-/Perianalbereich) vor. So vermeidest du, dass Keime von Bereichen mit hoher Bakterien-Belastung in saubere Bereiche getragen werden (Kreuzkontamination).\n\nDu führst jetzt die Ganzkörperpflege durch. Herr Nguyen ist geschwächt, kann nicht selbst waschen. Welche Körperbereiche werden in welcher Reihenfolge gewaschen? Wichtig: Die Stomaversorgung läuft NICHT als Schritt der GKP, sondern als eigenständige Maßnahme — eigenes Set, eigene Schüssel, vor oder nach der GKP. Sortiere die GKP-Schritte.",
        glossarBegriffe: ["von sauber zu unrein", "Kreuzkontamination"],
      },
      contentB1: {
        title: "Ganzkörperpflege: In welcher Reihenfolge waschen?",
        body: "**Von sauber zu unrein** = Hygiene-Regel: Du wäschst zuerst die saubersten Bereiche (Gesicht), zuletzt die unsaubersten (Genital). So wandern keine Keime mit.\n\nDu wäschst Herrn Nguyen. Er kann es nicht alleine. Wichtig: Die Stomapflege ist ein eigener Vorgang — nicht Teil der Ganzkörperpflege. Sortiere die Schritte der GKP.",
        glossarBegriffe: ["Hygiene", "Stoma", "von sauber zu unrein"],
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
        body: "**NRS** (= Numeric Rating Scale) = ein numerisches Bewertungs-Instrument mit Werten von 0 bis 10 zur Beurteilung von Schmerz. 0 = keine Schmerzen, 10 = stärkster vorstellbarer Schmerz. Pflege-Standard.\n\nHerr Nguyen ist jetzt gewaschen und versorgt. Durch Linh lässt er ausrichten: Er möchte aufsetzen. Wie planst du die erste Mobilisation für diesen Moment — 4. postoperativer Tag, Stoma, Schmerz NRS 3/10, BMI 19?",
        glossarBegriffe: ["Mobilisation", "NRS", "Orthostase", "Bettkante", "NRS (= Numeric Rating Scale)"],
      },
      contentB1: {
        title: "Herr Nguyen möchte aufsetzen — wie planst du?",
        body: "**NRS** = Numeric Rating Scale = ein Bewertungs-Werkzeug von 0 bis 10 für Schmerz. 0 = kein Schmerz, 10 = stärkster Schmerz. Standard in der Pflege.\n\nHerr Nguyen möchte aufsetzen. 4. Tag nach der OP. Schmerz NRS 3/10. BMI 19. Wie gehst du vor?",
        glossarBegriffe: ["Mobilisation", "Bettkante", "Schwindel", "NRS"],
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
              "Du hast erkannt, dass Mobilisation wichtig ist — fachlich richtig. Aber zu schnell, weil Post-OP-Mobilisation einem Stufenprinzip folgt: Bettkante → Aufstehen → kurze Schritte → Stuhl. Stattdessen: Direkt auf den Stuhl ohne Vorstufen ist bei BMI 19 + Schmerz NRS 3 + Ramipril (Orthostase-Risiko) zu risikoreich. Deshalb können Schwindel beim Aufstehen zu Sturz führen.",
            explanationB1:
              "Du hast erkannt, dass Bewegung wichtig ist — gut. Aber zu schnell, weil man in Schritten vorgehen muss: erst Bettkante, dann Aufstehen, dann Stuhl. Stattdessen: Direkt auf den Stuhl kann gefährlich sein.",
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
              "Du hast erkannt, dass Schmerz die Mobilisation beeinflusst — fachlich richtig. Aber NRS < 2 ist kein realistisches Ziel bei frischer post-OP-Situation mit Stoma, weil Warten auf NRS < 2 oft keine Mobilisation bedeutet — und das erhöht Dekubitus- und Thromboserisiko. Stattdessen: NRS 3/10 ist tolerierbar — Schmerzschutz (Metamizol 30 Min vor Mobilisation), dann vorsichtig beginnen.",
            explanationB1:
              "Du hast erkannt, dass Schmerz wichtig ist — gut. Aber: NRS 3/10 ist tolerierbar, weil Warten auf NRS < 2 nicht realistisch ist. Stattdessen: Schmerzmittel geben (30 Min vorher), dann mobilisieren.",
          },
          {
            text: "Nur die Physiotherapeutin darf Herrn Nguyen mobilisieren.",
            isCorrect: false,
            explanation:
              "Du hast die Rollenklarheit erkannt — der Gedanke ist nicht ganz daneben. Aber unzutreffend, weil die erste Mobilisation (Bettkante, kurze Schritte) eine pflegerische Aufgabe ist — kein Physiotherapie-Vorbehalt. Stattdessen: Die Physiotherapeutin unterstützt Aufbau und komplexe Übungen, die Pflege ist für die tägliche Mobilisations-Pflege verantwortlich. Deshalb: Pflege übernimmt die Bettkante, Physio die Aufbauübungen.",
            explanationB1:
              "Du hast erkannt, dass es Spezialisten gibt — der Gedanke ist verständlich. Aber: Die Pflegekraft kann Herrn Nguyen an die Bettkante mobilisieren, weil das Pflege-Aufgabe ist. Stattdessen: Pflege macht die Bettkante, Physio hilft bei komplexeren Übungen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // 4.opt-1 — Text (stepbystep): Schutzpaste erklärt
    {
      stepId: "ce02-nguyen-dur-opt1-schutzpaste-erklären",
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
        glossarBegriffe: ["Schutzpaste", "Pektin", "Stomaplatte", "Haut", "Leckage", "Risiko", "Stoma"],
      },
      contentB1: {
        title: "Schutzpaste — was ist das?",
        body: "Schutzpaste schützt die Haut rund um das Stoma.\n\nWarum: Der Stuhl aus dem Stoma greift die Haut an. Die Schutzpaste schützt die Haut davor.\n\nWie: 1) Dünn auftragen — rund um die Stomaöffnung, 2) Ring-Form, 3) Kurz trocknen lassen, 4) Dann die Stomaplatte aufsetzen. Nicht auf das Stoma selbst auftragen.",
        glossarBegriffe: ["Schutzpaste", "Stomaplatte", "Haut", "Stoma"],
      },
    },

    // 4.opt-2 — Reflection: Kulturelle Sensibilität
    {
      stepId: "ce02-nguyen-dur-opt2-kulturelle-sensibilität",
      phase: 4,
      stepType: "reflection",
      bloomLevel: 3,
      kompetenzbereich: "III.2",
      quellen: ["Ethik-Kodex ICN (2021)"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-dur-reflexion-körperbild",
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

    // 4.opt-2b — InlineWissen: Faltenwurf
    // Position: VOR Step opt-3 (Categorize: Leckage-Ursachen)
    // Grund: "Faltenwurf" wird in opt-3 als Leckage-Ursache in der Kategorisierung verwendet
    {
      stepId: "ce02-nguyen-dur-iw-faltenwurf",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
        "WCET — International Ostomy Guideline Recommendations (2020)",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-dur-faltenwurf",
      tag: "pflege",
      themaPrimaer: "stuhlausscheidung",
      themenSekundaer: ["haut"],
      transition:
        "Faltenwurf als Leckage-Ursache verstanden. Jetzt: Kategorisiere alle Leckage-Ursachen.",
      contentC1: {
        title: "Faltenwurf — warum die Bauchdecke nicht immer glatt ist",
        body: "",
        glossarBegriffe: ["Faltenwurf", "Stomaplatte", "Leckage", "Ursache"],
      },
      contentB1: {
        title: "Faltenwurf — Hautfalten um das Stoma",
        body: "",
        glossarBegriffe: ["Faltenwurf", "Leckage", "Ursache"],
      },
      inlineWissen: {
        bausteinRef: "faltenwurf",
        storyAufhaenger:
          "Herrn Nguyens Beutel war heute Morgen undicht — an der Unterseite. Du hast ihn neu angelegt. Aber warum war er undicht? Eine häufige Ursache, die Anfänger übersehen: Faltenwurf. Die Bauchhaut rund um das Stoma ist nicht immer glatt — und genau da kann die Platte nicht dicht sitzen.",
        kerntext:
          "**Was ist ein Faltenwurf?** Hautfalten oder Narben in der Umgebung des Stomas, die verhindern, dass die Hautschutzplatte plan aufliegt. Die Platte 'schwebt' über der Falte → es entsteht ein Spalt → Stomainhalt kriecht unter die Platte → Leckage und Mazerierung.\n\n**Ursachen für Faltenwurf bei Stoma-Patienten:**\n\n• **OP-Narben:** Die Bauchdeckenwunde erzeugt Narbenzug → die Haut zieht sich zusammen\n• **Gewichtsveränderung:** Bei Gewichtsverlust (wie bei Herrn Nguyen: 6 kg in 3 Monaten) verliert die Bauchhaut Spannung → Falten entstehen\n• **Bauchdeckenschwäche:** Bei älteren Patienten reduzierter Muskeltonus\n• **Stoma-Position:** Wenn das Stoma nicht in der optimalen Position liegt (Markierung durch Stomatherapeut vor OP idealerweise im Sitzen, Stehen und Liegen)\n\n**Lösungen:**\n\n• **Schutzpaste:** Füllt kleine Unebenheiten und Falten aus → Platte sitzt dichter\n• **Konvexe Platte:** Hat eine Wölbung nach innen → drückt das Stoma leicht heraus → besser bei eingezogenem Stoma oder Faltenwurf\n• **Gürtel-System:** Hält die Platte mit leichtem Druck an → kompensiert Faltenwurf teilweise\n• **Stomatherapeut einbeziehen:** Individuelle Lösung mit Spezialversorgung bei persistierendem Faltenwurf\n\n**Bei Herrn Nguyen:** Der Gewichtsverlust (6 kg) + post-OP-Narbe können Faltenwurf rechts vom Stoma verursachen. Deshalb war die Leckage an der Unterseite — die Platte saß dort nicht plan.",
        kerntextB1:
          "**Was ist ein Faltenwurf?** Hautfalten rund um das Stoma. Die Platte kann dort nicht glatt aufliegen → es entsteht eine Lücke → Stuhl kriecht unter die Platte → Leckage.\n\n**Warum gibt es Faltenwurf?**\n• OP-Narben ziehen die Haut zusammen\n• Gewichtsverlust → Bauchhaut wird schlaff\n• Bei älteren Patienten: Bauchmuskeln sind schwächer\n\n**Was hilft?**\n• **Schutzpaste:** Füllt die Falten aus\n• **Konvexe Platte:** Hat eine Wölbung → drückt das Stoma leicht raus\n• **Gürtel:** Hält die Platte fester\n• **Stomatherapeut fragen:** Er findet die beste Lösung\n\n**Bei Herrn Nguyen:** Er hat abgenommen. Die Bauchhaut hat Falten. Deshalb war der Beutel undicht.",
        faustregel:
          "**Falte unter der Platte = Spalt = Leckage.** Schutzpaste füllt, konvexe Platte drückt — Stomatherapeut entscheidet.",
        faustregelB1:
          "Hautfalte unter der Platte = Lücke = Beutel undicht. Schutzpaste oder konvexe Platte helfen.",
        karteikarte: {
          vorderseite: "Herrn Nguyens Beutel war an der Unterseite undicht. Was ist 'Faltenwurf' — und warum kann er die Ursache sein?",
          rueckseite:
            "Faltenwurf = Hautfalten/Narben rund ums Stoma → Platte liegt nicht plan → Spalt → Stomainhalt unter der Platte → Leckage + Mazerierung. Ursachen: OP-Narben, Gewichtsverlust, Bauchdeckenschwäche. Lösungen: Schutzpaste (Falten füllen), konvexe Platte (Stoma herausdrücken), Gürtelsystem, Stomatherapeut. **Falte = Spalt = Leckage.**",
          vorderseiteB1: "Was ist Faltenwurf beim Stoma?",
          rueckseiteB1:
            "Hautfalten rund ums Stoma. Die Platte liegt nicht glatt auf → Lücke → Beutel wird undicht. Schutzpaste oder konvexe Platte helfen.",
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
        body: "Wo läuft ein Stoma-Beutel aus? Und was ist die Konsequnz für jede Ursache?",
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

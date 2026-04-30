// CE-02 Situation Baby Emilia — Phase 1: Informieren & Aufnahmegespräch
// Steps: 5 Kern + 3 Optional · Bloom: B2-B3 · Zeit: ~15-25 Min
// Quelle: content/ce-02/situationen/ls-emilia-saeugling/phase-informieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_EMILIA_SAEUGLING_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-emilia-informieren",
  phase: "informieren",
  titel: "Informieren & Aufnahmegespräch",
  titelB1: "Informieren: Ankommen im Zimmer",
  kontext:
    "Du stehst vor Zimmer 8 der Kinderstation. Es ist 07:45 Uhr, Frühdienst. Schwester Andrea hat dir gerade erklärt: Baby Emilia (4 Monate) wurde heute Nacht wegen Bronchiolitis aufgenommen. Die Mutter ist dabei. Du wirst jetzt das Aufnahmegespräch führen — Andrea beobachtet, greift nur ein wenn nötig. Das Ziel der nächsten 20 Minuten: Vertrauen aufbaün, Informationen sammeln, den Ist-Zustand verstehen.",
  kontextB1:
    "Du stehst vor Zimmer 8. Es ist 07:45 Uhr. Schwester Andrea hat dir erklärt: Emilia (4 Monate) ist krank. Die Diagnose ist Bronchiolitis (= Entzündung der kleinen Atemwege). Die Mutter ist dabei. Du führst jetzt das Aufnahmegespräch. Andrea schaut zu. Sie hilft nur wenn nötig. Dein Ziel in den nächsten 20 Minuten: Vertrauen aufbaün. Informationen sammeln. Verstehen was gerade los ist.",
  kernSteps: [
    // Step 1.1 — SBAR-Übergabe (scenario)
    {
      stepId: "ce02-emilia-info-01-vorbereitung-akte",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019", "AWMF S2k-Leitlinie Bronchiolitis 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-emilia-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Pflegekraft liest Aufnahmedokumentation auf dem Stationsflur, Kinderstation, Frühdienst, ruhige Atmosphäre",
      bildhinweis:
        "Nurse reading admission paperwork in children's ward corridor, early morning shift, warm soft lighting, calm professional setting, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Aufnahmedokumentation — Emilia K.",
        body: "Du nimmst kurz die Aufnahmedokumentation zur Hand.\n\nEmilia K., 4 Monate, 5,6 kg. Diagnose: Bronchiolitis RSV. Mutter stillt vollständig. Fieber 38,2 °C bei Aufnahme um 03:15 Uhr. Die Pflegeübergabe folgt der SBAR-Struktur: **S** = Säugling mit Trinkschwäche und Fieber, bisher 3 nasse Windeln in 12 Stunden. **B** = bisher gesundes Kind, Erstgebärende 24 Jahre, allein erziehend. **A** = leicht erhöhte Atemfrequenz, noch kein Sauerstoffbedarf, Turgor noch erhalten. **R** = Flüssigkeitsstatus engmaschig überwachen, Mutter begleiten. Du liest die Übergabe — und betrittst dann das Zimmer.",
        fallbezug:
          "Emilia (4 Mo, Bronchiolitis RSV) ist heute Nacht aufgenommen worden. Du bist Pflegeschüler im 1. Ausbildungsdrittel, dritter Tag auf der Kinderstation. Schwester Andrea begleitet dich.",
        glossarBegriffe: ["Bronchiolitis", "RSV", "SBAR", "Tachypnoe"],
      },
      contentB1: {
        title: "Aufnahmedokumentation lesen",
        body: "Du liest die Übergabe. Das ist die SBAR-Struktur (= ein Übergabe-Schema).\n\n**S** = Situation: Emilia trinkt wenig. Sie hat Fieber. Nur 3 nasse Windeln in 12 Stunden. **B** = Background (= Hintergrund): Emilia war bisher gesund. **A** = Assessment (= Einschätzung): Emilia atmet etwas schnell. Sie braucht noch keinen Sauerstoff. Turgor (= Hautspannung) ist noch normal. **R** = Recommendation (= Empfehlung): Beobachte die Flüssigkeit sehr regelmäßig (= engmaschig). Danach gehst du ins Zimmer.",
        fallbezug:
          "Emilia (4 Monate, Bronchiolitis) ist heute Nacht aufgenommen worden. Du bist Pflegeschüler. Es ist dein dritter Tag auf der Kinderstation.",
        glossarBegriffe: ["Bronchiolitis", "RSV", "SBAR"],
      },
    },

    // Step 1.2 — MC: Erster Schritt beim Betreten
    {
      stepId: "ce02-emilia-info-02-erste-beobachtung",
      phase: 1,
      stepType: "mc",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-emilia-info-erster-schritt",
      tag: "pflege",
      contentC1: {
        title: "Erste Priorität beim Betreten",
        body: "Du betrittst das Zimmer. Emilia liegt auf dem Arm der Mutter. Beide schauen dich sofort an. Was ist dein erster Schritt?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Du betrittst das Zimmer. Emilia liegt auf dem Arm der Mutter. Beide schauen dich an. Was tust du zuerst?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Was ist dein erster Schritt beim Betreten des Zimmers?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Sofort Emilia untersuchen, Mutter dabei stehen lassen",
            isCorrect: false,
            explanation:
              "Nicht ganz. Untersuchung ohne Vorstellung fühlt sich für Mütter bedrohlich an — besonders bei einer erschöpften Erstmutter. Beziehungsaufbau kommt vor Assessment. Du bekommst bessere Informationen wenn die Mutter dir vertraut.",
            explanationB1:
              "Nicht ganz. Zuerst vorstellen — dann untersuchen. Eine Mutter die dich nicht kennt, gibt dir nicht alle wichtigen Informationen.",
          },
          {
            text: "Dich vorstellen, Mutter begrüßen, kurz erklären was als nächstes passiert",
            isCorrect: true,
            explanation:
              "Genau. Beziehungsaufbau kommt vor dem Assessment — besonders bei einer erschöpften, alleinstehenden Erstmutter. Du schaffst Vertrauen, und das verbessert die Qualität aller folgenden Informationen.",
            explanationB1:
              "Richtig. Zuerst vorstellen und begrüßen. Das schafft Vertrauen. Mit Vertrauen bekommst du bessere Informationen.",
          },
          {
            text: "Direkt fragen: \"Hat das Baby heute getrunken?\"",
            isCorrect: false,
            explanation:
              "Direkt, aber ohne Beziehungsaufbau. Laura kennt dich nicht. Ohne kurze Vorstellung wirkt eine Sofort-Frage kalt — und Laura wird möglicherweise weniger offen antworten.",
            explanationB1:
              "Direkt, aber zu schnell. Du musst dich erst vorstellen. Dann kannst du Fragen stellen.",
          },
          {
            text: "Zuerst Emilias Fieber messen",
            isCorrect: false,
            explanation:
              "Vitalzeichen sind wichtig — aber nicht ohne vorherige Vorstellung. Das Messen ohne Anrede und Erklärung wirkt mechanisch und überfordernd für die Mutter.",
            explanationB1:
              "Nicht zuerst messen. Erst vorstellen, dann Maßnahmen. Sonst weiß Laura nicht einmal, wer du bist.",
          },
        ],
      },
    },

    // Step 1.3 — Dialog (4 Phasen): Aufnahmegespräch
    {
      stepId: "ce02-emilia-info-03-aufnahmegespräch-dialog",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-emilia-info-dialog",
      tag: "pflege",
      contentC1: {
        title: "Aufnahmegespräch mit Mutter Laura",
        body: "Du hast dich vorgestellt. Emilia liegt auf Lauras Arm. Laura schaut dich mit großen Augen an. Jetzt sprichst du sie an.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Gespräch mit Laura",
        body: "Du hast dich vorgestellt. Laura schaut dich an. Jetzt sprichst du sie an.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Lauras Aussage.",
        patientName: "Laura K.",
        dialogPhases: [
          {
            context:
              "Laura schaut dich an. Sie sagt mit ruhiger, aber angespannter Stimme:",
            contextB1:
              "Laura schaut dich an. Sie spricht ruhig, aber ihre Stimme ist angespannt:",
            speaker: "Laura K.",
            options: [
              {
                text: "\"Ich verstehe die Sorge — das wollen wir jetzt gemeinsam genau anschauen. Darf ich ein paar Fragen stellen?\"",
                textB1:
                  "\"Ich verstehe das. Das schauen wir jetzt zusammen an. Darf ich ein paar Fragen stellen?\"",
                patientResponse:
                  "Laura atmet aus. \"Ja, bitte. Ich bin froh, dass jemand kommt.\"",
                patientResponseB1:
                  "Laura atmet aus. \"Ja. Ich bin froh, dass du da bist.\"",
                score: 3,
                feedback:
                  "Validierend und strukturiert. Du nimmst Lauras Sorge ernst, ohne sie zu entwerten — und gibst gleichzeitig eine klare Richtung vor. Das ist die richtige Mischung für den Erstkontakt mit einer erschöpften Mutter.",
                feedbackB1:
                  "Sehr gut. Du nimmst die Sorge ernst. Du zeigst: Jetzt schauen wir gemeinsam. Laura vertraut dir.",
              },
              {
                text: "\"Das ist normal bei Bronchiolitis, keine Sorge.\"",
                textB1:
                  "\"Das ist normal. Keine Sorge.\"",
                patientResponse:
                  "Laura zieht die Augenbrauen zusammen. \"Normal? Aber sie trinkt gar nichts mehr…\"",
                patientResponseB1:
                  "Laura ist nicht überzeugt. \"Normal? Sie trinkt wirklich kaum noch etwas.\"",
                score: 0,
                feedback:
                  "Zu früh und entwertend. Du hast Emilia noch nicht untersucht — also weißt du noch nicht ob es 'normal' ist. Und 'keine Sorge' entzieht der Mutter die Berechtigung ihrer Empfindung. Laura wird sich nicht ernst genommen fühlen.",
                feedbackB1:
                  "Nicht gut. Du hast Emilia noch nicht angeschaut. Und 'keine Sorge' sagt: Deine Sorge ist falsch. Das stimmt nicht und verletzt Laura.",
              },
              {
                text: "\"Wann genau hat sie aufgehört zu trinken?\"",
                textB1:
                  "\"Wann hat sie aufgehört zu trinken?\"",
                patientResponse:
                  "\"Vor… zwei Tagen ungefähr. Zuerst dachte ich es ist ein schlechter Tag.\"",
                patientResponseB1:
                  "\"Vor zwei Tagen. Zuerst dachte ich, es ist ein schlechter Tag.\"",
                score: 1,
                feedback:
                  "Direkt und informationsorientiert — aber ohne Validierung. Laura hat dir gerade gesagt sie macht sich große Sorgen. Zuerst diese Sorge anerkennen, dann die Sachfrage — in dieser Reihenfolge. Deine Frage ist gut als Folgefrage nach Antwort B.",
                feedbackB1:
                  "Direkt — aber du hast Lauras Sorge übersprungen. Erst anerkennen, dann fragen. Deine Frage ist gut als zweite Frage.",
              },
            ],
          },
          {
            context:
              "Laura nickt und antwortet auf deine Fragen. Du sammelst Informationen. Dann sagt sie plötzlich:",
            contextB1:
              "Laura antwortet. Du sammelst Informationen. Dann sagt sie:",
            speaker: "Laura K.",
            options: [
              {
                text: "\"Ich höre dich, Laura. Das ist eine wichtige Beobachtung — ich schreibe das auf.\"",
                textB1:
                  "\"Ich höre dich. Das ist wichtig — ich notiere das.\"",
                patientResponse:
                  "Laura nickt, entspannt sich ein wenig. \"Gut. Ich wollte sicher sein, dass das jemand weiß.\"",
                patientResponseB1:
                  "Laura nickt etwas entspannter. \"Danke. Ich wollte, dass das jemand hört.\"",
                score: 3,
                feedback:
                  "Aktive Zuhörung + Handlungsankündigung. Du zeigst Laura dass ihre Information zählt — und dass du sie dokumentierst. Das gibt ihr das Gefühl: 'Ich bin nicht allein damit.'",
                feedbackB1:
                  "Sehr gut. Du hörst zu und zeigst: Diese Information ist wichtig. Laura fühlt sich gehört.",
              },
              {
                text: "\"Das kenne ich — Mütter machen sich immer Sorgen.\"",
                textB1:
                  "\"Das kenne ich — Mütter machen sich immer Sorgen.\"",
                patientResponse:
                  "Laura schaut kurz weg. Dann: \"Ja… natürlich.\"",
                patientResponseB1:
                  "Laura schaut weg. \"Ja… natürlich.\"",
                score: 0,
                feedback:
                  "Relativierend. 'Immer Sorgen' klingt wie 'das gehört dazu — deine Sorge ist nicht besonders'. Laura fühlt sich in eine Schublade gesteckt statt gehört.",
                feedbackB1:
                  "Nicht gut. Das klingt: 'Du machst dir als Mutter halt immer Sorgen.' Das wertet Laura ab. Sie fühlt sich nicht ernst genommen.",
              },
            ],
          },
        ],
      },
    },

    // Step 1.4 — Sorting: Anamnesefragen priorisieren
    {
      stepId: "ce02-emilia-info-04-anamnesefragen-sortierung",
      phase: 1,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019", "AWMF S2k-Leitlinie Bronchiolitis 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-emilia-info-anamnese",
      tag: "pflege",
      contentC1: {
        title: "Anamnesefragen — in welcher Reihenfolge?",
        body: "Du sammelst Informationen beim Aufnahmegespräch. Sortiere die Fragen nach Priorität — wichtigste zuerst. Logik: Wir starten beim Hauptbeschwerden-Leitsymptom (hier Trinkschwäche, weil die Atmung makroskopisch noch unauffällig ist — keine Einziehungen, keine Tachypnoe > 60/min). Bei kritischer Atemnot würde nach ABCDE die Atmung zuerst kommen.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Welche Fragen sind am wichtigsten?",
        body: "Du sammelst Informationen. Bringe die Fragen in die richtige Reihenfolge — wichtigste zuerst. Hier startest du beim Hauptproblem: Trinkschwäche. Die Atmung ist im Moment noch okay (keine Einziehungen, Atemfrequenz im Normbereich). Wenn Emilia stark atemnot wäre, müsste die Atmung zuerst gefragt werden (ABCDE).",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Anamnesefragen nach Priorität (wichtigste zuerst).",
        sortItems: [
          "Seit wann hat Emilia Trinkschwäche — und wie viel trinkt sie noch?",
          "Wie oft und wie viel hat sie bisher täglich getrunken (normal)?",
          "Wann war die letzte nasse Windel?",
          "Fieberverlauf — wann begann es, wie hoch war es maximal?",
          "Atemveränderungen — hat Laura Veränderungen beim Atmen bemerkt?",
          "Impfstatus und Vorerkrankungen?",
        ],
      },
    },

    // Step 1.5 — Text (quote): Stillen-Zitat und Information
    {
      stepId: "ce02-emilia-info-05-stillen-zitat",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "V.1",
      quellen: ["WHO 2023 — Breastfeeding Recommendations"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-emilia-info-stillen",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Lauras Frage zum Stillen",
        body: "Laura fragt:\n\n> \"Ich stille bisher komplett. Aber wenn sie nicht trinkt — soll ich aufhören? Ist meine Milch das Problem?\"\n\nDiese Frage ist häufig und verständlich — und sie berührt Lauras Selbstbild als Mutter. Die Antwort: Muttermilch ist bei Bronchiolitis kein Problem — sie enthält Antikörper, die aktiv helfen. Das Trinken ist durch die Nasenatmungs-Behinderung erschwert, nicht durch die Milch. Emilia ist obligate Nasenatmerin — sie kann nicht gleichzeitig saugen und durch den Mund atmen. Diese Information ist nicht nur fachlich richtig, sie entlastet Laura erheblich. *(WHO, 2023 — Breastfeeding bleibt bei Atemwegsinfekten ausdrücklich empfohlen)*",
        glossarBegriffe: ["Obligate Nasenatmer", "Antikörper"],
      },
      contentB1: {
        title: "Lauras Frage zum Stillen",
        body: "Laura fragt:\n\n> \"Ich stille bisher komplett. Aber wenn Emilia nicht trinkt — ist meine Milch das Problem?\"\n\nDeine Antwort: Nein. Lauras Milch ist nicht das Problem. Muttermilch enthält Antikörper (= Abwehrstoffe). Sie helfen Emilia. Das Problem ist die verstopfte Nase. Säuglinge atmen nur durch die Nase (= obligate Nasenatmer). Saugen und Atmen gleichzeitig ist für Emilia gerade sehr anstrengend. Diese Information ist sehr wichtig für Laura — sie nimmt ihr einen Teil der Schuld.",
        glossarBegriffe: ["Obligate Nasenatmer", "Antikörper"],
      },
    },
  ],
  optionaleSteps: [
    // Step 1.6 — Flipcard: Was ist Bronchiolitis?
    {
      stepId: "ce02-emilia-info-opt-bronchiolitis-was-ist",
      phase: 1,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["AWMF S2k-Leitlinie Bronchiolitis 2022", "Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-info-bronchiolitis-grundwissen",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist Bronchiolitis?",
        body: "Klapp die Karte um, um die Antwort zu sehen.",
        glossarBegriffe: ["Bronchiolitis", "RSV"],
      },
      contentB1: {
        title: "Was ist Bronchiolitis?",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Bronchiolitis", "RSV"],
      },
      question: {
        fragetext: "Was ist Bronchiolitis?",
        flipcard: {
          instruction: "Klappe die Karte um.",
          cards: [
            {
              front: "Was ist Bronchiolitis?",
              back: "Eine Entzündung der kleinen Atemwege (Bronchiolen) — meist durch RSV-Viren. Häufigster Grund für Krankenhausaufnahme bei Säuglingen unter 12 Monaten. Symptome: Husten, Schnupfen, erschwertes Atmen, Fieber, Trinkschwäche. *(AWMF S2k 2022; Hoehl/Kullick 2019)*",
              backB1:
                "Bronchiolitis = Entzündung der kleinen Atemwege. RSV ist ein Virus — er macht diese Atemwege krank. Sehr häufig bei Babys unter 1 Jahr. Zeichen: Husten, Schnupfen, Fieber, schlechtes Trinken, schnelles Atmen.",
            },
          ],
        },
      },
    },

    // Step 1.7 — Text (stepbystep): SBAR erklärt
    {
      stepId: "ce02-emilia-info-opt-sbar-erklärt",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-info-sbar",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "SBAR — das Übergabe-Schema",
        body: "SBAR steht für vier Schritte einer klinischen Übergabe:\n\n**S — Situation:** Was ist gerade das Problem? (Emilia: Trinkschwäche und Fieber)\n**B — Background:** Was ist der Hintergrund? (bisher gesundes Kind, Erstgebärende)\n**A — Assessment:** Wie schätze ich die Situation ein? (leicht erhöhte Atemfrequenz, kein Sauerstoffbedarf)\n**R — Recommendation:** Was empfehle ich? (Flüssigkeitsstatus engmaschig überwachen)\n\nSBAR macht Übergaben vollständig, klar und sicher — auch wenn man in der Nacht schläfrig ist.",
        glossarBegriffe: ["SBAR"],
      },
      contentB1: {
        title: "SBAR — das Übergabe-Schema",
        body: "SBAR ist ein Schema für Übergaben. Es hat 4 Schritte:\n\n**S** = Situation: Was ist das Problem? (Emilia trinkt wenig, hat Fieber)\n**B** = Background (= Hintergrund): Was ist der Hintergrund? (bisher gesundes Kind, junge Mutter)\n**A** = Assessment (= Einschätzung): Wie ist der Zustand? (atmet schnell, kein Sauerstoff nötig)\n**R** = Recommendation (= Empfehlung): Was soll gemacht werden? (Flüssigkeit beobachten)\n\nSBAR: So vergisst man nichts bei der Übergabe.",
        glossarBegriffe: ["SBAR"],
      },
    },

    // Step 1.8 — Text (analogy): Obligate Nasenatmer erklärt
    {
      stepId: "ce02-emilia-info-opt-obligate-nasenatmer",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-info-obligate-nasenatmer",
      tag: "krankheitslehre",
      displayFormat: "analogy",
      contentC1: {
        title: "Warum trinkt Emilia so wenig? — Die Analogie",
        body: "Stell dir vor, du müsstest essen und gleichzeitig nur durch die Nase atmen — und deine Nase wäre vollständig verstopft. Genau das ist Emilias Problem: Säuglinge sind obligate Nasenatmer. Sie können (noch) nicht durch den Mund atmen. Wenn die Nase voll Schleim ist, müssen sie beim Saugen die Brust oder die Flasche kurz loslassen, um zu atmen. Das Trinken wird zur Erschöpfungsaufgabe. Emilia trinkt nicht weil sie es nicht will — sondern weil es anstrengend ist.",
        glossarBegriffe: ["Obligate Nasenatmer"],
      },
      contentB1: {
        title: "Warum trinkt Emilia so wenig?",
        body: "Stell dir vor: Du musst essen. Und gleichzeitig atmen. Aber deine Nase ist zu. Jedes Mal wenn du kaün willst, musst du den Mund öffnen — aber dann kannst du nicht atmen. Das ist Emilias Problem. Säuglinge atmen nur durch die Nase (= obligate Nasenatmer). Emilias Nase ist voll Schleim. Saugen und Atmen gleichzeitig ist für sie gerade sehr anstrengend. Sie trinkt nicht weil sie nicht will — sondern weil es schwer ist.",
        glossarBegriffe: ["Obligate Nasenatmer"],
      },
    },
  ],
  geschaetzteDauer: 20,
};

// CE-02 Situation Frau Yilmaz — Phase 1: Informieren
// Steps: 5 Kern + 1 Optional · Bloom: B2–B3 · Zeit: ~20–35 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-hueft-tep/phase-informieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_HUEFT_TEP_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-yilmaz-informieren",
  phase: "informieren",
  titel: "Informieren & Vorbereiten",
  titelB1: "Vorbereiten bei Frau Yilmaz",
  kontext:
    "Du stehst im Stationszimmer der orthopädischen Station. Es ist 7:40 Uhr. Frau Wendt, deine Praxisanleiterin, hat dir gerade die Übergabe für Frau Yilmaz gegeben. Du weißt: Frau Ayşe Yilmaz, 79 Jahre, 3. Tag nach Hüft-TEP rechts. Gestern war der erste Aufstehversuch — er wurde abgebrochen (NRS 7, Schmerz zu stark nach 2 Minuten an der Bettkante). Frau Wendt sagt: 'Heute muss der Aufstehversuch klappen — Tag 3 ist der optimale Zeitpunkt nach dieser OP-Art. Schau zuerst wie es ihr geht, dann planen wir gemeinsam. Ich bin nebenan.' Du hast 5 Minuten, bevor du das Zimmer betrittst.",
  kontextB1:
    "Du stehst im Stationszimmer. Es ist 7:40 Uhr. Frau Wendt gibt dir die Übergabe für Frau Yilmaz. Frau Yilmaz ist 79 Jahre alt. Vor 3 Tagen wurde sie am Hüftgelenk operiert (= Hüft-TEP). Gestern wollte sie aufstehen. Das hat nicht geklappt. Sie hatte starke Schmerzen. Frau Wendt sagt: 'Heute muss es klappen. Schau zuerst wie es ihr geht.' Du hast 5 Minuten vor dem Zimmerbetreten.",
  kernSteps: [
    // Step 1.1 — Übergabe lesen (SBAR)
    {
      stepId: "ce02-yilmaz-info-01-uebergabe-lesen",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2020", "Leonard M., Graham S., Bonacum D. (2004): SBAR — BMJ Qual Saf"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Pflegekraft liest Pflegedokumentation im Stationszimmer, Frühdienstlicht, ruhige orthopädische Station",
      bildhinweis:
        "Nurse reading patient file at nursing station desk, early morning light, calm orthopedic ward, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Übergabe: SBAR für Frau Yilmaz",
        body: "7:40 Uhr, Stationszimmer der orthopädischen Station.\n\nFrau Wendt hat dir kurz die Übergabe gegeben. Vor dir liegt die verkürzte SBAR-Dokumentation:\n\n**S — Situation:** Frau Yilmaz, Zi. 12, 79 J., 3. post-OP-Tag nach Hüft-TEP rechts (Oberschenkelhalsbruch nach Sturz). Redon-Drainage in situ, Fördermenge heute Morgen 40 ml serös-blutig.\n\n**B — Background:** Diabetes mellitus Typ 2 (orale Antidiabetika), Adipositas (BMI 34). Analgesie: Metamizol 4× tgl., Ibuprofen bei Bedarf. Fondaparinux 2,5 mg s.c. tgl. seit OP-Tag. Lagerungsvorschrift aktiv (Hüftbeugung < 90°, kein Überkreuzen). Sprache: Türkisch/Deutsch (mit Akzent, versteht alles).\n\n**A — Assessment:** Gestern erster Aufstehversuch abgebrochen — Schmerz NRS 7 nach 2 Min. an Bettkante. Haut Steiß und Fersen noch unauffällig laut Nachtdienst. Schlaf unruhig, mehrfach geläutet.\n\n**R — Recommendation:** Heute erneuter Aufstehversuch geplant. Schmerzassessment vor Mobilisation. Ehemann Mustafa anwesend, kommuniziert nur auf Türkisch.\n\nDu hast die Übergabe gelesen. Eine Information fällt dir besonders auf: Der Aufstehversuch ist gestern gescheitert. Bevor du das Zimmer betrittst — was weißt du jetzt über die Herausforderung, die heute vor dir liegt?",
        fallbezug:
          "Frau Yilmaz (79, Hüft-TEP Tag 3) wartet auf dich. Der erste Aufstehversuch gestern ist gescheitert. Heute muss es klappen.",
        glossarBegriffe: ["SBAR", "Hüft-TEP", "Redon-Drainage", "Fondaparinux", "Antikoagulation"],
      },
      contentB1: {
        title: "Die Übergabe — was weißt du über Frau Yilmaz?",
        body: "7:40 Uhr. Du liest die Übergabe für Frau Yilmaz.\n\n**S — Situation:** Frau Yilmaz, Zimmer 12, 79 Jahre. Vor 3 Tagen wurde sie am Hüftgelenk operiert (= Hüft-TEP). Sie hat noch einen Schlauch an der Wunde (= Redon-Drainage). Heute Morgen hat der Schlauch 40 ml Wundflüssigkeit gefördert.\n\n**B — Background:** Sie hat Zucker-Krankheit (= Diabetes Typ 2) und Übergewicht (BMI 34). Sie bekommt Schmerzmittel (Metamizol). Sie bekommt täglich ein Blut-Verdünnungs-Mittel (= Fondaparinux). Sie darf das Hüftgelenk nicht über 90° beugen.\n\n**A — Assessment:** Gestern wollte sie aufstehen — das hat nicht geklappt. Nach 2 Minuten hatte sie starke Schmerzen (NRS 7). Haut noch ok laut Nachtdienst. Sie hat schlecht geschlafen.\n\n**R — Recommendation:** Heute erneut versuchen aufzustehen. Vorher Schmerz messen. Ehemann Mustafa ist da — er spricht nur Türkisch.\n\nDu hast die Übergabe gelesen. Was fällt dir auf?",
        fallbezug:
          "Frau Yilmaz ist 79 Jahre. Vor 3 Tagen wurde sie operiert. Gestern hat das Aufstehen nicht geklappt. Heute versuchst du es mit ihr.",
        glossarBegriffe: ["Hüft-TEP", "Redon-Drainage", "NRS", "Fondaparinux"],
      },
    },

    // Step 1.2 — Prioritäten setzen (MC)
    {
      stepId: "ce02-yilmaz-info-02-priorität-setzen",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2020"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-info-priorität",
      tag: "pflege",
      contentC1: {
        title: "Erste Priorität beim Betreten des Zimmers",
        body: "Du stehst vor Zimmer 12. Frau Yilmaz wartet. Ehemann Mustafa ist auch da. Das Ziel des Tages ist der Aufstehversuch. Aber was ist beim ersten Betreten deine wichtigste Aufgabe?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Du stehst vor Zimmer 12. Frau Yilmaz ist drin. Ihr Mann Mustafa auch. Du weißt: Heute soll sie aufstehen. Aber was machst du zuerst, wenn du hereingehst?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Was ist beim ersten Betreten des Zimmers DEINE wichtigste Aufgabe?",
        optionen: [
          {
            text: "Sofort den Aufstehversuch ankündigen, damit keine Zeit verloren geht",
            isCorrect: false,
            explanation:
              "Du denkst an das Ziel — das ist gut. Aber Effizienz ohne Beziehung funktioniert in der Pflege selten. Wenn Frau Yilmaz sich überrumpelt fühlt, wird der Aufstehversuch wahrscheinlich erneut scheitern. Zuerst die Situation einschätzen — dann den Plan machen.",
            explanationB1:
              "Du denkst ans Ziel — gut. Aber wenn du gleich mit dem Aufstehen anfängst, fühlt sich Frau Yilmaz überrumpelt. Das kann dazu führen, dass sie wieder 'Nein' sagt. Zuerst: Wie geht es ihr?",
          },
          {
            text: "Frau Yilmaz begrüßen, kurz prüfen wie es ihr geht, dann gemeinsam planen",
            isCorrect: true,
            explanation:
              "Genau — der erste Eindruck entscheidet über das Vertrauen. Wer gleich mit dem Aufstehversuch anfängt, bevor er weiß wie es Frau Yilmaz geht, riskiert, dass die Mobilisation scheitert — nicht wegen des Schmerzes, sondern wegen fehlendem Vertrauen. Begrüßen, hören, dann gemeinsam vorgehen.",
            explanationB1:
              "Genau richtig. Erst begrüßen, hören wie es ihr geht — dann gemeinsam planen. So baut sich Vertrauen auf.",
          },
          {
            text: "Zuerst die Redon-Drainage kontrollieren — das ist medizinisch am dringlichsten",
            isCorrect: false,
            explanation:
              "Die Drainage ist wichtig und wird kontrolliert — aber nicht zuerst. Die Drainage gibt dir Informationen, entscheidet aber nicht über das Handeln in den nächsten Minuten. Medizinisch ist alles stabil. Der Mensch vor dir ist die erste Priorität.",
            explanationB1:
              "Die Drainage ist wichtig — aber nicht die erste Priorität jetzt. Frau Yilmaz ist stabil. Zuerst: Wie geht es ihr? Dann die Drainage.",
          },
          {
            text: "Den Ehemann bitten, das Zimmer kurz zu verlassen",
            isCorrect: false,
            explanation:
              "Ehemann Mustafa wegzuschicken wäre ein Fehler. Er gibt Frau Yilmaz Sicherheit — in einem fremden, deutschen Krankenhaus, nach einer schweren OP. Den Angehörigen einzubeziehen (auch wenn er kein Deutsch spricht) ist Teil der ganzheitlichen Pflege. Kommunikation mit Händen und Füßen ist besser als keine Kommunikation.",
            explanationB1:
              "Nein — Mustafa wegzuschicken wäre falsch. Er ist für Frau Yilmaz eine wichtige Unterstützung. Auch ohne gemeinsame Sprache kann man Respekt zeigen. Er bleibt.",
          },
        ],
      },
    },

    // Step 1.3 — Dialog Zimmerbetreten (3 Entscheidungspunkte)
    {
      stepId: "ce02-yilmaz-info-03-dialog-begrüssung",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2020"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-info-dialog",
      tag: "pflege",
      contentC1: {
        title: "Zimmer 12: Das erste Gespräch",
        body: "Du betrittst Zimmer 12. Frau Yilmaz liegt im Bett, das Kopfteil ist leicht erhöht. Ehemann Mustafa sitzt auf dem Stuhl rechts neben ihr, nickt dir zu. Du tritt näher heran. Noch bevor du ein Wort sagst, schaut Frau Yilmaz dich an und sagt:",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Zimmer 12: Das erste Gespräch",
        body: "Du gehst in Zimmer 12. Frau Yilmaz liegt im Bett. Das Kopfteil ist ein bisschen hochgestellt. Mustafa sitzt daneben und nickt dir zu. Du gehst näher ran. Frau Yilmaz schaut dich an — und sagt sofort:",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Frau Yilmaz.",
        patientName: "Frau Yilmaz",
        dialogPhases: [
          {
            context:
              "Frau Yilmaz sagt, bevor du ein Wort sagst: \"Können wir das nicht morgen machen? Es tut weh.\"",
            contextB1:
              "Frau Yilmaz sagt sofort: \"Können wir das nicht morgen machen? Es tut weh.\"",
            speaker: "Frau Yilmaz",
            options: [
              {
                text: "\"Frau Yilmaz, ich verstehe Sie — aber heute müssen wir aufstehen, das ist medizinisch wichtig.\"",
                textB1:
                  "\"Ich verstehe Sie — aber heute müssen wir aufstehen. Das ist medizinisch wichtig.\"",
                patientResponse:
                  "Frau Yilmaz schweigt einen Moment. Sie dreht den Kopf zur Seite. \"Ja … wenn Sie meinen.\"",
                patientResponseB1:
                  "Frau Yilmaz schweigt. Sie dreht den Kopf weg. \"Ja … wenn Sie das sagen.\"",
                score: 1,
                feedback:
                  "Du hast recht, dass Mobilisation heute medizinisch sinnvoll ist — aber dieser erste Satz läuft direkt gegen ihre Angst. Sie hört: 'Wir machen das, ob du willst oder nicht.' Das erzeugt Widerstand. Erster Schritt: bestätigen, dann informieren.",
                feedbackB1:
                  "Du meinst es gut. Aber dieser Satz macht Druck. Frau Yilmaz hört: 'Ich muss.' Das ist keine gute Basis. Erst: ihre Angst bestätigen. Dann: erklären.",
              },
              {
                text: "\"Guten Morgen, Frau Yilmaz. Ich höre Sie — das tut weh. Darf ich mich kurz zu Ihnen setzen?\"",
                textB1:
                  "\"Guten Morgen, Frau Yilmaz. Ich höre Sie — das tut weh. Darf ich mich kurz zu Ihnen setzen?\"",
                patientResponse:
                  "Frau Yilmaz atmet hörbar aus. Ihre Schultern sinken leicht. \"Ja, bitte.\"",
                patientResponseB1:
                  "Frau Yilmaz atmet aus. Die Schultern werden weicher. \"Ja, bitte.\"",
                score: 3,
                feedback:
                  "Genau das ist Gesprächsführung in der Pflege. Du bestätigst zuerst was sie sagt — das signalisiert: Ich höre dich. Dann fragst du um Erlaubnis, dich zu setzen — das gibt ihr Kontrolle. Frau Yilmaz entspannt sich ein bisschen.",
                feedbackB1:
                  "Sehr gut. Du bestätigst: 'Das tut weh.' Das zeigt: Du hörst zu. Dann fragst du um Erlaubnis. Das gibt Frau Yilmaz Kontrolle. Sie entspannt sich.",
              },
              {
                text: "\"Erst schauen wir, wie es Ihnen geht, dann entscheiden wir gemeinsam.\"",
                textB1:
                  "\"Erst schauen wir gemeinsam, wie es Ihnen geht. Dann entscheiden wir.\"",
                patientResponse:
                  "Frau Yilmaz schaut dich an. \"Das klingt … ja, gut.\"",
                patientResponseB1:
                  "Frau Yilmaz schaut dich an. \"Ja … das klingt gut.\"",
                score: 2,
                feedback:
                  "Gut — du bietest gemeinsames Entscheiden an. Das ist respektvoll. Was noch besser wäre: zuerst ihre Aussage 'das tut weh' direkt bestätigen. 'Ich höre Sie' kommt vor 'dann entscheiden wir'.",
                feedbackB1:
                  "Gut — du bietest gemeinsames Entscheiden an. Noch besser wäre: zuerst sagen 'Ich höre Sie, das tut weh.' Dann erst den Plan.",
              },
            ],
          },
          {
            context:
              "Du sitzt jetzt neben Frau Yilmaz. Du lächelst auch kurz Mustafa zu — er nickt zurück. Wie beziehst du Mustafa ein?",
            contextB1:
              "Du sitzt jetzt neben Frau Yilmaz. Du schaust kurz zu Mustafa. Wie beziehst du ihn ein?",
            speaker: "Du",
            options: [
              {
                text: "Kurz nicken und bei Frau Yilmaz weitermachen — er versteht ja sowieso nichts",
                textB1:
                  "Nur kurz nicken und weitermachen — er versteht sowieso nichts",
                patientResponse:
                  "Frau Yilmaz entspannt sich ein bisschen. Mustafa schaut zu.",
                patientResponseB1:
                  "Frau Yilmaz entspannt sich. Mustafa schaut stumm zu.",
                score: 0,
                feedback:
                  "Mustafa ist Ehemann — kein Möbelstück. Er beobachtet alles. Wenn du ihn ignorierst, wird er unruhiger — und das überträgt sich auf Frau Yilmaz. Auch ohne gemeinsame Sprache kann man Respekt zeigen.",
                feedbackB1:
                  "Nicht so gut. Mustafa ist wichtig für Frau Yilmaz. Wenn du ihn ignorierst, wird er unruhiger. Das bemerkt Frau Yilmaz — und sie wird auch unruhiger.",
              },
              {
                text: "Frau Yilmaz fragen: \"Darf ich Ihren Mann kurz grüßen?\" und ihm dann ein paar Gesten machen (Lächeln, Nicken, Hand aufs Herz)",
                textB1:
                  "Frau Yilmaz fragen: \"Darf ich Ihren Mann kurz grüßen?\" Dann: Lächeln, Nicken, Hand aufs Herz zu Mustafa",
                patientResponse:
                  "Frau Yilmaz nickt. Mustafa schaut überrascht auf, lächelt leicht zurück.",
                patientResponseB1:
                  "Frau Yilmaz nickt. Mustafa schaut auf. Er lächelt ein bisschen zurück.",
                score: 3,
                feedback:
                  "Mustafa ist Ehemann — kein Möbelstück. Auch ohne gemeinsame Sprache kann man Respekt und Vertrauen zeigen. Frau Yilmaz sieht, dass ihr Mann einbezogen wird — das stärkt ihr Vertrauen in dich.",
                feedbackB1:
                  "Sehr gut. Auch ohne Worte kann man Respekt zeigen. Frau Yilmaz sieht: Du beziehst Mustafa ein. Das gibt ihr ein gutes Gefühl.",
              },
              {
                text: "Den Dolmetscher-Service anrufen — ohne Sprache geht das nicht richtig",
                textB1:
                  "Den Dolmetscher-Service anrufen — ohne Dolmetscher geht das nicht",
                patientResponse:
                  "Frau Yilmaz sagt: \"Das dauert manchmal 30 Minuten …\"",
                patientResponseB1:
                  "Frau Yilmaz sagt: \"Das dauert 30 Minuten …\"",
                score: 1,
                feedback:
                  "Der Dolmetscher-Service ist sinnvoll — aber nicht für diesen Moment. Für die Begrüßung reicht nonverbale Kommunikation: Lächeln, Nicken, Blickkontakt. Den Dolmetscher brauchst du wenn es komplex wird — z.B. wenn Mustafa aktiv interveniert.",
                feedbackB1:
                  "Der Dolmetscher ist manchmal nötig — aber nicht jetzt. Für die Begrüßung reicht ein Lächeln und ein Nicken. Der Dolmetscher kommt, wenn es wirklich wichtig wird.",
              },
            ],
          },
        ],
      },
    },

    // Step 1.4 — Matching: Lagerungsregeln nach Hüft-TEP
    {
      stepId: "ce02-yilmaz-info-04-lagerungsregel-prüfen",
      phase: 1,
      stepType: "matching",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Deutsche Gesellschaft für Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Hüfte"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-info-lagerungsregeln",
      tag: "pflege",
      contentC1: {
        title: "Lagerungsregeln nach Hüft-TEP — Begründungen zuordnen",
        body: "Vor der Mobilisation musst du die Lagerungsvorschriften genau kennen — nicht nur auswendig, sondern auch warum. Die DGU S2k-Leitlinie Endoprothetik Hüfte (2022) nennt drei zentrale Bewegungsverbote für die ersten 6–12 Wochen post-OP: keine Hüftflexion über 90°, keine Adduktion über die Körpermittellinie, keine Innenrotation des operierten Beins. Ordne jede Lagerungsregel dem richtigen Grund zu.",
        glossarBegriffe: ["Luxation", "Luxationsprophylaxe", "Adduktion", "Innenrotation", "Flexion"],
      },
      contentB1: {
        title: "Lagerungsregeln — warum sind sie wichtig?",
        body: "Frau Yilmaz hat genaue Regeln, wie sie liegen und sich bewegen darf. Diese Regeln schützen das neue Hüftgelenk in den ersten 6–12 Wochen. Drei Verbote: 1. Hüfte nicht über 90° beugen. 2. Beine nicht über die Mitte kreuzen (= Adduktion). 3. Operiertes Bein nicht nach innen drehen (= Innenrotation). Ordne jede Regel dem richtigen Grund zu.",
        glossarBegriffe: ["Luxation", "Adduktion", "Innenrotation", "Flexion"],
      },
      question: {
        fragetext: "Ordne die Lagerungsregeln nach Hüft-TEP dem richtigen Grund zu.",
        matchingPairs: [
          {
            left: "Hüftbeugung < 90°",
            right: "Luxationsprävention 1 — Oberschenkel darf den Beckenwinkel nicht überschreiten (DGU 2022)",
          },
          {
            left: "Keine Beinkreuzung über die Mittellinie",
            right: "Luxationsprävention 2 — Adduktionsverbot: Bein darf nicht über die Körpermitte geführt werden",
          },
          {
            left: "Operiertes Bein nicht nach innen drehen (Fußspitze nach außen)",
            right: "Luxationsprävention 3 — Innenrotationsverbot, gilt 6–12 Wochen post-OP (DGU 2022)",
          },
          {
            left: "Kissen zwischen die Beine in Rücken- und Seitenlage",
            right: "Mechanische Adduktionsprophylaxe im Schlaf — verhindert ungewolltes Überkreuzen, hält Bein in leichter Abduktion",
          },
          {
            left: "Kopflagerung max. 30°",
            right: "Zwei Gründe: Scherkräfte am Steißbein reduzieren (Dekubitusprophylaxe — NPUAP/EPUAP 2019) UND übermäßige Hüftbeugung beim Aufsitzen vermeiden (kein universeller Hüft-TEP-Standard, aber bei Frau Yilmaz wegen Dekubitus Kat. I sinnvoll)",
          },
        ],
      },
    },

    // Step 1.5 — Selfrating: Wie gut kennst du die Situation?
    {
      stepId: "ce02-yilmaz-info-05-ziel-formulieren",
      phase: 1,
      stepType: "selfrating",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2020"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-yilmaz-info-selbsteinschätzung",
      tag: "pflege",
      contentC1: {
        title: "Wie gut kennst du die Situation?",
        body: "Bevor wir weitermachen: Du hast die Übergabe gelesen, Frau Yilmaz begrüßt und erste Einschätzungen gemacht. Wie gut kennst du die Situation von Frau Yilmaz jetzt? Ehrliche Selbsteinschätzung — kein richtig oder falsch. Die Antwort wird in Phase 5 gespiegelt.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wie gut kennst du die Situation?",
        body: "Du hast die Übergabe gelesen und Frau Yilmaz begrüßt. Wie gut kennst du ihre Situation jetzt? Es gibt kein richtig oder falsch — nur deine ehrliche Einschätzung.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie gut kennst du die Situation von Frau Yilmaz — medizinisch und emotional?",
        selfratingVariant: "rubrik",
      },
      wusstestDuDas:
        "Frau Yilmaz sagt nicht direkt 'Nein'. Sie sagt: 'Vielleicht morgen?' Das ist ihre kulturell geprägte Art, Grenzen zu setzen. Eine gute Pflegekraft hört das heraus — und antwortet nicht mit Erklärungen, sondern zuerst mit Bestätigung.",
    },
  ],
  optionaleSteps: [
    // Step 1.6 (Optional) — SBAR-Übung (FillIn)
    {
      stepId: "ce02-yilmaz-info-06-sbar-optional",
      phase: 1,
      stepType: "fillin",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Leonard M., Graham S., Bonacum D. (2004): SBAR — BMJ Qual Saf"],
      track: "vertiefung",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-info-sbar-schema",
      tag: "pflege",
      contentC1: {
        title: "SBAR-Übung: Lückentext",
        body: "Das SBAR-Schema kennst du jetzt aus der Übergabe. Fülle die Lücken im SBAR-Schema aus — nutze die Informationen aus dem Kontext von Frau Yilmaz.",
        glossarBegriffe: ["SBAR"],
      },
      contentB1: {
        title: "SBAR — Lücken ausfüllen",
        body: "Das SBAR-Schema hilft bei der Übergabe. Fülle die Lücken aus. Nutze die Informationen, die du über Frau Yilmaz kennst.",
        glossarBegriffe: ["SBAR"],
      },
      question: {
        fragetext: "Fülle die Lücken im SBAR-Schema aus.",
        fillin: {
          sentence:
            "S — Situation: Frau Yilmaz, 79 J., Tag ___ nach Hüft-TEP rechts. B — Background: Diabetes Typ 2, ___, Lagerungsvorschriften aktiv. A — Assessment: Aufstehversuch gestern gescheitert (NRS ___). R — Recommendation: Erneuter Aufstehversuch heute, vorher ___.",
          options: ["3", "Adipositas (BMI 34)", "7", "Schmerzassessment"],
          correctIndex: 0,
        },
      },
    },
  ],
  geschaetzteDauer: 25,
};

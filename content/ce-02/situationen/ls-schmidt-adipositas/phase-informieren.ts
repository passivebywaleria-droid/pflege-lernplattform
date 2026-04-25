// CE-02 Situation Frau Schmidt — Phase 1: Informieren & Ankommen
// Steps: 5 · Bloom: B2–B3 · Zeit: ~15–25 Min
// Quelle: phase-informieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-informieren",
  phase: "informieren",
  titel: "Informieren & Ankommen",
  titelB1: "Ankommen bei Frau Schmidt",
  kontext:
    "Es ist 08:30 Uhr, Frühdienst auf der Inneren Station. Du stehst auf dem Flur, noch außerhalb von Zimmer 8. Frau Bayraktar hat dir Frau Schmidt übergeben — kurz, mündlich. Du weißt: 68 Jahre, Adipositas, Diabetes, seit drei Tagen hier. Mehr noch nicht. Bevor du eintrittst, liest du die Pflegeübergabe im System. Und noch etwas beschäftigt dich: Du bist dir nicht sicher, wie du mit jemandem über Ernährung sprichst, dem anzusehen ist, dass das Essen in ihrem Leben eine besondere Rolle spielt. Das ist keine einfache Situation.",
  kontextB1:
    "Es ist 08:30 Uhr. Du arbeitest im Frühdienst. Du stehst vor Zimmer 8. Frau Schmidt liegt dort. Deine Praxisanleiterin sagt: \"Geh zu Frau Schmidt. Mach die Morgenpflege.\" Du weißt: Frau Schmidt ist 68 Jahre alt. Sie hat Diabetes (= Zucker-Krankheit) und starkes Übergewicht (= Adipositas). Sie ist seit 3 Tagen im Krankenhaus. Du liest zuerst die Pflegeübergabe im Computer. Dann gehst du ins Zimmer.",
  kernSteps: [
    // Step 1.1 — Übergabedaten lesen (text/scenario)
    {
      stepId: "ce02-schmidt-info-01-uebergabedaten",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2017): Expertenstandard Ernährungsmanagement"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Pflegerin liest Übergabedaten am Stationscomputer vor einem Krankenhauszimmer, Frühdienst, warmes Morgenlicht",
      bildhinweis:
        "Hospital ward early morning, nurse reading patient notes at a computer station outside room 8, calm professional atmosphere, soft warm light, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Übergabe im System — Frau Schmidt, Zimmer 8",
        body: "08:30 Uhr, Flur der Inneren Station.\n\nDu liest die Pflegeübergabe in SBAR-Struktur: **S** — Situation: Frau Schmidt (68 J., weiblich) ist seit 3 Tagen stationär wegen entgleistem Blutzucker (BZ 398 mg/dl bei Einlieferung). **B** — Hintergrund: Diabetes Typ 2 (seit 8 Jahren, bisher diätetisch, heute Metformin 500 mg 2× tgl. neu angesetzt), Adipositas Grad II (BMI 38), diabetisches Fußsyndrom Kategorie 1 nach Wagner-Armstrong, Belastungsinkontinenz seit 2 Jahren, Albumin 31 g/l (Norm: 35–52 g/l), NRS 2002 Score 3. **A** — Aktuelles: ansprechbar, wach, kooperativ, klagt über Schwäche, BZ heute nüchtern 187 mg/dl. **R** — Reaktion: Morgenpflege, BZ messen, Ernährungsgespräch vorbereiten. SBAR ist die Standard-Struktur für klinische Übergaben — vollständig und klar.",
        fallbezug:
          "Frau Schmidt (68 J., Adipositas Grad II, Diabetes Typ 2) ist seit 3 Tagen stationär. Du bist Pflegeschülerin im 2. Ausbildungsdrittel, Frühdienst.",
        glossarBegriffe: ["NRS 2002", "Albumin", "Wagner-Armstrong-Klassifikation"],
      },
      contentB1: {
        title: "Die Übergabe lesen",
        body: "08:30 Uhr, Flur der Inneren Station.\n\nDu liest die Pflegeübergabe (SBAR-Struktur): **S** = Situation: Frau Schmidt ist seit 3 Tagen hier. Der Blutzucker (= BZ) war bei der Einlieferung sehr hoch: 398 mg/dl. Jetzt nüchtern: 187 mg/dl. **B** = Hintergrund: Sie hat Diabetes Typ 2, starkes Übergewicht (BMI 38). Sie hat ein Fußsyndrom (Kategorie 1 nach Wagner = erste Risse an der Haut, keine Wunde). Sie hat Belastungs-Inkontinenz (= sie verliert manchmal Urin bei Bewegung). Albumin (= Eiweiß im Blut) ist zu niedrig: 31 g/l. **A** = Aktuelles: Sie ist wach und ansprechbar. Sie fühlt sich schwach. **R** = Reaktion: Du machst die Morgenpflege. Dann misst du den Blutzucker. Dann sprichst du mit ihr über Ernährung.",
        fallbezug:
          "Frau Schmidt ist 68 Jahre alt. Sie ist seit 3 Tagen im Krankenhaus. Du bist Schülerin im Frühdienst.",
        glossarBegriffe: ["NRS 2002", "Albumin", "Wagner-Armstrong-Klassifikation"],
      },
    },

    // Step 1.2 — Selbsteinschätzung (selfrating/confidence)
    {
      stepId: "ce02-schmidt-info-02-selbsteinschaetzung",
      phase: 1,
      stepType: "selfrating",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2017): Expertenstandard Ernährungsmanagement"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-schmidt-info-confidence-vorher",
      tag: "pflege",
      contentC1: {
        title: "Wie sicher fühlst du dich?",
        body: "Bevor du das Zimmer betrittst: Mach einen Moment Pause. Das Thema Übergewicht und Ernährung ist heikel — viele Pflegende sind unsicher, wie sie es ansprechen, ohne zu verletzen. Es gibt kein richtig oder falsch — nur ehrliche Selbsteinschätzung. Wir spiegeln diese Antwort am Ende der Situation.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wie sicher fühlst du dich?",
        body: "Bevor du ins Zimmer gehst: Kurz innehalten. Das Thema Übergewicht und Ernährung ist nicht einfach. Wie sicher fühlst du dich, mit Frau Schmidt darüber zu sprechen? Es gibt kein richtig oder falsch.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie sicher fühlst du dich im Umgang mit dem Thema Übergewicht und Ernährung in einem Pflegegespräch?",
      },
    },

    // Step 1.3 — MC: erste Priorität (Bloom B3)
    {
      stepId: "ce02-schmidt-info-03-erstpriorisierung",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2017): Expertenstandard Ernährungsmanagement"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-schmidt-info-prioritaet",
      tag: "pflege",
      contentC1: {
        title: "Erste Priorität beim Betreten",
        body: "Du betrittst Zimmer 8. Was tust du beim Betreten ZUERST?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Du betrittst Zimmer 8. Was machst du als erstes?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Du betrittst Zimmer 8. Was tust du ZUERST?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Den Blutzucker messen — das hat Frau Bayraktar zuerst genannt.",
            isCorrect: false,
            explanation:
              "Auch der BZ kommt dran — aber zuerst die Person wahrnehmen, nicht als Gerät ankommen. Frau Schmidt ist ein Mensch, keine Messstation. Erst begrüßen, dann Handlungen.",
            explanationB1:
              "Auch BZ ist wichtig — aber nicht zuerst. Zuerst kommt der Mensch, dann die Aufgabe. Begrüßen ist immer der erste Schritt.",
          },
          {
            text: "Dich vorstellen, Frau Schmidt begrüßen und fragen wie die Nacht war.",
            isCorrect: true,
            explanation:
              "Richtig. Jede Pflegebegegnung beginnt mit der Person — Begrüßung, Vorstellung, kurzes Wahrnehmen wie es der Patientin geht. Das schafft Vertrauen und ist die Basis für alles Folgende.",
            explanationB1:
              "Richtig! Zuerst kommt der Mensch. Begrüßen, vorstellen, fragen wie die Nacht war. Danach kommen die Aufgaben.",
          },
          {
            text: "Die Beine und Füße von Frau Schmidt inspizieren — diabetisches Fußsyndrom ist dringend.",
            isCorrect: false,
            explanation:
              "Die Fußinspektion ist wichtig — aber sie kommt im Rahmen der Morgenpflege, nicht als allererstes beim Betreten. Frau Schmidt würde sich wie ein Untersuchungsobjekt fühlen, nicht wie eine Patientin, die wahrgenommen wird.",
            explanationB1:
              "Füße schauen ist wichtig — aber nicht als erstes. Das kommt später bei der Morgenpflege. Zuerst: Frau Schmidt begrüßen.",
          },
          {
            text: "Erklären, was heute auf dem Plan steht.",
            isCorrect: false,
            explanation:
              "Auch das kommt — aber erst nach der Begrüßung. Wer zuerst den Tagesplan vorliest, bevor er 'Guten Morgen' sagt, nimmt die Patientin nicht als Person wahr.",
            explanationB1:
              "Den Plan erklären ist gut — aber erst nach der Begrüßung. Erst: guten Morgen sagen, fragen wie die Nacht war. Dann: was heute passiert.",
          },
        ],
      },
    },

    // Step 1.4 — Dialog: Zimmer betreten (3 Optionen)
    {
      stepId: "ce02-schmidt-info-04-zimmer-betreten",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP (2017): Expertenstandard Ernährungsmanagement"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-info-dialog",
      tag: "pflege",
      contentC1: {
        title: "Das Zimmer betreten",
        body: "Du betrittst das Zimmer. Frau Schmidt sitzt aufrecht im Bett, schaut kurz auf. Die Hände liegen locker auf der Decke. Du wählst deine Eröffnung.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Ins Zimmer gehen",
        body: "Du gehst ins Zimmer. Frau Schmidt sitzt aufrecht im Bett. Sie schaut dich an. Du wählst eine Begrüßung.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Begrüßung für Frau Schmidt.",
        patientName: "Frau Schmidt",
        dialogPhases: [
          {
            context:
              "Frau Schmidt sitzt aufrecht im Bett, schaut dich kurz an. Du trittst ein.",
            contextB1:
              "Frau Schmidt sitzt im Bett. Sie schaut dich an. Du gehst zu ihr.",
            speaker: "Du",
            options: [
              {
                text: "\"Guten Morgen, Frau Schmidt, ich bin heute für Sie zuständig. Wie geht es Ihnen?\"",
                textB1:
                  "\"Guten Morgen, Frau Schmidt! Wie geht es Ihnen heute Morgen?\"",
                patientResponse:
                  "Frau Schmidt nickt. \"Na ja — schlechter als daheim. Aber ich mecker nicht.\" Sie macht einen kurzen Witz: \"Mir sagt ja keiner, was ich essen soll. Hauptsache satt.\"",
                patientResponseB1:
                  "Frau Schmidt nickt. \"Na ja — nicht so gut wie daheim. Aber ich mecker nicht.\" Sie sagt: \"Mir sagt ja keiner was ich essen soll. Hauptsache satt.\"",
                score: 3,
                feedback:
                  "Validierend und würdevoll. Du stellst dich vor, zeigst Kontinuität (\"heute für Sie zuständig\") und fragst nach ihrem Befinden — das ist die richtige Eröffnung. Frau Schmidts erstes Zitat zeigt echten Frust hinter dem Humor.",
                feedbackB1:
                  "Sehr gut. Freundlich, klar, du fragst wie es ihr geht. Frau Schmidts Witz zeigt: Hinter dem Humor steckt echter Frust über Ernährung.",
              },
              {
                text: "\"Guten Morgen — wir fangen direkt mit dem Zucker an, okay?\"",
                textB1:
                  "\"Guten Morgen — wir messen jetzt gleich den Blutzucker, okay?\"",
                patientResponse:
                  "Frau Schmidt schaut kurz weg. \"Ja … wenn Sie meinen.\" Die Begrüßung ist vorbei, bevor sie begonnen hat.",
                patientResponseB1:
                  "Frau Schmidt schaut kurz weg. \"Ja … wenn Sie sagen.\" Sie wirkt nicht wohl.",
                score: 1,
                feedback:
                  "Aufgabenorientiert, aber die Beziehung bleibt auf der Strecke. Frau Schmidt ist kein Messgerät. \"Direkt mit dem Zucker anfangen\" signalisiert: Die Aufgabe ist wichtiger als die Person. Das erschwert das spätere Ernährungsgespräch erheblich.",
                feedbackB1:
                  "Nicht gut. Du beginnst sofort mit der Aufgabe. Frau Schmidt fühlt sich wie ein Mess-Objekt, nicht wie eine Person. Das macht das Gespräch danach schwerer.",
              },
              {
                text: "\"Guten Morgen! Ich bin Schülerin, aber das macht nichts, ich weiß was ich tu.\"",
                textB1:
                  "\"Guten Morgen! Ich bin noch Schülerin, aber keine Sorge, ich weiß was ich mache.\"",
                patientResponse:
                  "Frau Schmidt schaut sie leicht verunsichert an. \"Schülerin? Na gut, wenn das okay ist …\"",
                patientResponseB1:
                  "Frau Schmidt sieht unsicher aus. \"Schülerin? Na, wenn das okay ist …\"",
                score: 0,
                feedback:
                  "Unprofessionell und kontraproduktiv. \"Das macht nichts\" klingt nach Rechtfertigung. Frau Schmidt wird verunsichert statt beruhigt. Korrekt wäre: dich als Pflegeschülerin vorstellen — ohne \"aber\", ohne Entschuldigung. Schülerinnen sind Teil des Teams.",
                feedbackB1:
                  "Das klingt unsicher. \"Das macht nichts\" macht es schlimmer. Frau Schmidt ist jetzt besorgt. Besser: \"Ich bin Pflegeschülerin und arbeite heute mit.\" — ohne \"aber\", ohne \"keine Sorge\".",
              },
            ],
          },
        ],
      },
    },

    // Step 1.5 — Sorting: Bekannt vs. noch offen
    {
      stepId: "ce02-schmidt-info-05-vorwissen-sortieren",
      phase: 1,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2017): Expertenstandard Ernährungsmanagement"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-info-informationsluecken",
      tag: "pflege",
      contentC1: {
        title: "Was weißt du — was weißt du noch nicht?",
        body: "Sortieraufgabe: Was weißt du jetzt schon über Frau Schmidt — und was weißt du noch nicht? Sortiere die Karten in zwei Gruppen: Bekannt (aus der Übergabe) vs. Noch offen (muss im Assessment erhoben werden).",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Sortier-Aufgabe: Was weißt du schon?",
        body: "Was weißt du schon über Frau Schmidt? Was weißt du noch nicht? Sortiere die Karten.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere: Was ist aus der Übergabe bekannt? Was muss im Assessment noch erhoben werden?",
        sortItems: [
          "Bekannt: BMI 38, Adipositas Grad II",
          "Bekannt: Diagnosen (Diabetes Typ 2, Fußsyndrom Kategorie 1, Belastungsinkontinenz)",
          "Bekannt: Aktuelle BZ-Werte (nüchtern 187 mg/dl, postprandial 298 mg/dl)",
          "Bekannt: Metformin 500 mg 2× tgl. neu angesetzt heute",
          "Bekannt: Albumin 31 g/l, NRS 2002 Score 3",
          "Noch offen: Ernährungsgewohnheiten zuhause (was isst sie täglich?)",
          "Noch offen: Bewegungsbiografie und Mobilität im Alltag",
          "Noch offen: Wie geht sie mit der Inkontinenz zuhause um?",
          "Noch offen: Was weiß Frau Schmidt über Diabetes und Ernährung?",
          "Noch offen: Motivation und Bereitschaft zur Ernährungsänderung",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};

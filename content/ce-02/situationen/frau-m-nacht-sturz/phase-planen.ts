// CE-02 Situation Frau M. — Phase 3: Pflege planen
// Steps: 5 · Bloom: B3-B5
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_PLANEN: SituationsPhase = {
  phaseId: "ls-frau-m-planen",
  phase: "planen",
  titel: "Pflege planen",
  titelB1: "Plan machen",
  kontext:
    "Es ist 03:11 Uhr. Frau M. liegt zugedeckt auf dem Boden, eine Wolldecke unter dem Kopf, die du aus dem Schrank geholt hast. Sie atmet jetzt ruhiger, die Schmerzen liegen stabil bei NRS 4. Du hast ihr gesagt, dass du gleich Hilfe holst, dass nichts gebrochen ist, soweit du es jetzt sehen kannst, dass sie nicht allein ist. Sie hat genickt und kurz deine Hand gedrückt, ihre Finger waren kühl. Jetzt der Moment, der in keiner Lehrbuch-Phase auftaucht und doch der wichtigste ist: Du gehst zwei Schritte zurück bis zur Fensterbank. Draußen tiefe Nacht, eine Straßenlaterne wirft ein gelbes Quadrat ans Fenster, sonst nichts. Du atmest dreimal bewusst aus, so wie es Frau Schnell in der Schule beigebracht hat. Dein Kopf war in den letzten zwölf Minuten im Sammeln — Sehen, Hören, Befragen, Prüfen. Jetzt muss er sortieren. Vor deinem inneren Auge das Risiko-Profil von Frau M. wie ein gespanntes Netz: 82 Jahre, Parkinson Stadium II, Osteoporose, Katarakt rechts. Zolpidem seit 48 Stunden — PRISCUS 2.0 rot. HCT morgens, Nykturie zwei- bis dreimal pro Nacht. Pneumonie Tag drei, leichter Fieberverlauf. Fremdes Bett, fremde Toilette, fremder Boden. Und du kennst jetzt auch die unsichtbaren Faktoren: Frau M. wollte nicht klingeln, weil sie nachts 'niemanden stören' wollte. Sie hat das ihrer Tochter so versprochen, sich nicht 'aufzudrängen'. Die Frage ist nicht mehr nur was — sondern wann. Was muss in den nächsten zehn Minuten passieren, bevor sie wieder einschläft? Was diese Nacht? Was bis zur Entlassung? Was heißt das für die Umgebung, was für die Medikation, was für sie als Person? Du holst aus deiner Brusttasche den Stift, drehst ihn zwischen den Fingern. Du hörst hinter dir Frau M. leise atmen, gleichmäßig, ein vorsichtiges Geräusch. Auf dem Flur klappert ein Wagen, jemand öffnet eine Tür. Frau Keller kommt gleich vorbei, das hat sie versprochen. Du hast vielleicht drei Minuten, in denen alles strukturiert sein muss: kurzfristig, mittelfristig, langfristig. Sofort, diese Nacht, bis Entlassung. Eine gute Planung jetzt verhindert den nächsten Sturz — den heute Nacht und den in zwei Wochen zuhause.",
  kontextB1:
    "Es ist 03:11 Uhr. Frau M. liegt zugedeckt auf dem Boden. Eine Decke ist unter ihrem Kopf. Sie atmet ruhiger. Die Schmerzen sind stabil bei 4 von 10. Du hast ihr gesagt: 'Ich hole Hilfe. Sie sind nicht allein.' Sie hat genickt und kurz deine Hand gedrückt. Jetzt gehst du zwei Schritte zurück zum Fenster. Draußen ist es dunkel. Eine Lampe leuchtet auf der Straße. Du atmest dreimal tief aus. Dein Kopf war voll mit Sehen und Fragen. Jetzt musst du sortieren. Du denkst an die Risiken von Frau M.: 82 Jahre. Parkinson. Osteoporose. Katarakt. Zolpidem seit 2 Tagen — gefährlich. HCT macht sie nachts pinkeln. Lungenentzündung. Fremdes Krankenhaus. Und: Frau M. wollte nicht klingeln. Sie wollte 'nicht stören'. Sie hat das ihrer Tochter versprochen. Die Frage ist nicht nur: Was machst du? Sondern: Wann machst du was? Was muss SOFORT passieren — bevor sie wieder schläft? Was diese Nacht? Was bis zur Entlassung? Was ist mit der Umgebung? Was mit den Medikamenten? Was mit Frau M. selbst? Du nimmst deinen Stift in die Hand. Du hörst Frau M. ruhig atmen. Im Flur klappert ein Wagen. Frau Keller kommt gleich. Du hast vielleicht drei Minuten Zeit. Eine gute Planung jetzt verhindert den nächsten Sturz — heute Nacht und auch zuhause in zwei Wochen.",
  kernSteps: [
    // Step 3.1 — Matrix (2x3)
    {
      stepId: "ce02-frau-m-plan-01-kurzfristig-langfristig",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-plan-matrix",
      tag: "pflege",
      contentC1: {
        title: "Maßnahmen-Matrix: Zeit × Ebene",
        body: "Ordne die Maßnahmen in eine Matrix ein. Zwei Dimensionen: **Wann** (sofort / diese Nacht / bis Entlassung) und **wo** (Person / Umgebung / Medikation). In dieser einfachen 2×2-Darstellung: X-Achse = Zeit, Y-Achse = Ebene.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Maßnahmen sortieren",
        body: "Sortiere die Maßnahmen in zwei Dimensionen: **Wann** (sofort oder später) und **Was** (Umgebung oder Medikation/Person).",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne die Maßnahmen in die Matrix ein. X-Achse: Jetzt (sofort) ↔ Später (bis Entlassung). Y-Achse: Umgebung ↔ Medikation/Person.",
        matrix: {
          instruction:
            "Ordne jede Maßnahme einem Quadranten zu: Jetzt+Umgebung (Q1), Jetzt+Medi/Person (Q2), Später+Umgebung (Q3), Später+Medi/Person (Q4).",
          axisX: { label: "Zeitachse", low: "Jetzt (sofort)", high: "Später (bis Entlassung)" },
          axisY: { label: "Ebene", low: "Medikation/Person", high: "Umgebung" },
          items: [
            { id: "m1", text: "Nachtlicht am Bett anschalten", correctQuadrant: 2 },
            { id: "m2", text: "Arzt informieren wegen Zolpidem", correctQuadrant: 1 },
            { id: "m3", text: "Bett-Höhe auf niedrigste Position stellen", correctQuadrant: 2 },
            { id: "m4", text: "Physiotherapie für Mobilisations-Aufbau anfordern", correctQuadrant: 4 },
            { id: "m5", text: "Rutschfeste Socken anziehen", correctQuadrant: 2 },
            { id: "m6", text: "Hüftprotektor für zuhause mit Tochter besprechen", correctQuadrant: 4 },
            { id: "m7", text: "Toilettenstuhl ans Bett stellen", correctQuadrant: 2 },
            { id: "m8", text: "Augenarzt-Termin nach Katarakt-OP sichern", correctQuadrant: 4 },
            { id: "m9", text: "Sturzprotokoll anfertigen", correctQuadrant: 1 },
          ],
        },
      },
    },

    // Step 3.2 — Sequencing: Umgebung anpassen
    {
      stepId: "ce02-frau-m-plan-02-umgebung-anpassen",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-frau-m-plan-umgebung",
      tag: "pflege",
      contentC1: {
        title: "Umgebungsanpassung bis zum nächsten Schlaf",
        body: "Bevor Frau M. wieder einschläft, muss die Umgebung sicher sein. Bringe die Schritte in die sinnvolle Reihenfolge.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Zimmer sicher machen",
        body: "Bevor Frau M. wieder schläft, machst du das Zimmer sicher. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Umgebungsanpassungen in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "In welcher Reihenfolge führst du die Umgebungsanpassungen durch?",
          items: [
            { id: "u1", label: "Bett-Höhe auf niedrigste Position stellen" },
            { id: "u2", label: "Nachtlicht am Bett einschalten" },
            { id: "u3", label: "Weg zum WC räumen — Infusionsständer beiseite" },
            { id: "u4", label: "Klingel in Reichweite legen und testen" },
            { id: "u5", label: "Rutschfeste Socken anziehen" },
          ],
        },
      },
    },

    // Step 3.3 — Branching (Mini, 3 Pfade): Fixierung-nein
    {
      stepId: "ce02-frau-m-plan-03-fixierung-nein",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["§ 1906a BGB", "DNQP 2022"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-plan-fixierung",
      tag: "pflege",
      contentC1: {
        title: "Die Bettgitter-Entscheidung",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Die Nachtschwester, die an der Tür auftaucht, blickt auf Frau M. und sagt leise:\n\n\"Machen wir doch ein Bettgitter hoch, dann ist sie sicher. Bei der Frau weiß man nie.\"\n\nDie Bettgitter sind hochfahrbar. Beide Seiten sind verfügbar. Frau M. ist orientiert, aber geschwächt. Du musst jetzt entscheiden. Es ist 03:15 Uhr.",
        glossarBegriffe: ["Fixierung", "§ 1906a BGB"],
      },
      contentB1: {
        title: "Bettgitter hochziehen?",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Die Nachtschwester sagt leise:\n\n\"Wir machen ein Bettgitter hoch, dann ist sie sicher.\"\n\nBeide Bettgitter sind möglich. Frau M. ist wach und orientiert. Es ist 03:15 Uhr. Wie reagierst du?",
        glossarBegriffe: ["Fixierung", "§ 1906a BGB"],
      },
      question: {
        fragetext:
          "Wie antwortest du der Kollegin, die beide Bettgitter hochziehen möchte?",
        branchingOptions: [
          {
            text: "\"Ja, sofort hoch — Sicherheit geht vor.\"",
            feedback:
              "Diese Entscheidung ist rechtlich und fachlich problematisch. Beidseitige Bettgitter ohne Zustimmung der orientierten Patientin sind eine **freiheitsentziehende Maßnahme** (§ 1906a BGB). Sie braucht richterliche Genehmigung oder informierte Einwilligung. Zusätzlich: Bettgitter verhindern keine Stürze — sie erhöhen die Fall-Höhe und können Verletzungen verschlimmern (Patienten klettern darüber). Frau M. könnte diese Entscheidung später als Eingriff in ihre Würde empfinden. Besser: Zustimmung einholen ODER Alternativen (Niederflur-Bett, Sturzmatte, Bewegungsmelder).",
            feedbackB1:
              "Diese Entscheidung ist falsch und rechtlich gefährlich. Beide Bettgitter ohne Frau M.s Erlaubnis sind **Fixierung** (§ 1906a BGB). Man braucht Erlaubnis vom Gericht oder von ihr selbst. Außerdem: Bettgitter verhindern keine Stürze — Patienten klettern darüber und fallen tiefer. Besser: Frau M. fragen ODER niedriges Bett, Sturzmatte, Bewegungsmelder.",
            isCorrect: false,
          },
          {
            text: "\"Nein, das ist rechtlich ohne ihre Zustimmung nicht erlaubt — und es schützt sie nicht. Wir nehmen stattdessen Bett niedrig, Nachtlicht, Klingel in Reichweite und ich bleibe die erste Stunde in der Nähe.\"",
            feedback:
              "Hervorragend. Du hast die rechtliche Kernregel verstanden: Beidseitige Bettgitter ohne Zustimmung = freiheitsentziehende Maßnahme (§ 1906a BGB). Du lieferst gleich Alternativen (DNQP 2022-konform): Niedriges Bett (reduziert Fallhöhe), Nachtlicht (verhindert Orientierungs-Sturz), Klingel (ermöglicht Hilfe), Präsenz (beruhigt Frau M.). Das ist fachlich + rechtlich + ethisch richtig. Als Pflegefachperson hast du Aufklärungs- und Widerspruchs-Pflicht gegenüber Kolleg:innen.",
            feedbackB1:
              "Sehr gut. Du hast die Regel verstanden: Bettgitter ohne Erlaubnis sind verboten (§ 1906a BGB). Du hast gute Alternativen: Bett niedrig, Nachtlicht, Klingel, du bleibst in der Nähe. Das ist richtig — rechtlich und fachlich. Als Pflegefachkraft musst du solchen Vorschlägen widersprechen.",
            isCorrect: true,
          },
          {
            text: "\"Ich frage den Arzt morgen früh, dann entscheiden wir.\"",
            feedback:
              "Zwischen-Antwort. Du hast das Bauchgefühl richtig — du zögerst bei der Fixierung. Aber: Frau M. braucht JETZT eine sichere Nacht, nicht morgen. Und: Auch der Arzt darf keine Bettgitter ohne Zustimmung anordnen. Das ist ein rechtliches Thema. Richtig wäre: Sofortmaßnahmen ohne Fixierung (Bett niedrig, Nachtlicht, Klingel, ggf. Präsenz), und am Morgen strukturiertes Gespräch mit Arzt + Frau M. über dauerhafte Lösungen.",
            feedbackB1:
              "Du bist auf dem richtigen Weg — du zögerst. Aber: Frau M. braucht SOFORT eine sichere Nacht. Und: Auch der Arzt darf Bettgitter nicht einfach anordnen. Das ist rechtlich. Mach jetzt: Bett niedrig, Nachtlicht, Klingel. Morgen: Gespräch mit Arzt und Frau M.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 3.4 — Text (scenario): Angst adressieren
    {
      stepId: "ce02-frau-m-plan-04-angst-adressieren",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022", "Tinetti et al., Studies on Falls in Elderly"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-plan-angst",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Post-Fall-Angst adressieren",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt jetzt im Bett, die Hände wieder gefaltet. Sie blickt dich an und sagt leise:\n\n> \"Ich habe Angst, ehrlich gesagt. Nicht vor Ihnen, bitte verstehen Sie mich nicht falsch. Ich habe Angst, wieder aufzustehen. Wenn ich nochmal falle — was ist dann mit meiner Wohnung?\"\n\nDas ist der Beginn eines **Post-Fall-Syndroms**: Sturzangst → Bewegungsvermeidung → Muskelabbau (1-2 %/Tag!) → Gleichgewichts-Verlust → erhöhtes Sturzrisiko. Ein Teufelskreis. Deine Aufgabe jetzt: **Angst validieren**, nicht kleinreden. Gleichzeitig Perspektive geben: Die Ursache ist identifizierbar und veränderbar (Zolpidem). Das ist nicht 'das Alter' — das sind konkrete Faktoren, die du benennen kannst. Merke: Aktivität ist die Therapie. Aber sie braucht Zeit, Erfolge und Sicherheit.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
      contentB1: {
        title: "Frau M.s Angst ernst nehmen",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt im Bett. Sie faltet die Hände. Sie sagt leise:\n\n> \"Ich habe Angst. Nicht vor Ihnen. Ich habe Angst, wieder aufzustehen. Wenn ich noch einmal falle — was ist dann mit meiner Wohnung?\"\n\nDas ist **Post-Fall-Angst** — der Anfang eines Teufelskreises: Angst → weniger Bewegung → schwächere Muskeln → schlechteres Gleichgewicht → neues Sturzrisiko. Deine Aufgabe: **Angst ernst nehmen**. Nicht sagen: 'Das wird schon.' Und: Perspektive geben. Sage: 'Der Grund ist kein Alter — es war die Tablette. Die kann man ändern.' Merke: Bewegung ist die Therapie. Aber: langsam, mit Erfolgen, sicher.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
    },

    // Step 3.5 — Matching: Interprofessionelles Team
    {
      stepId: "ce02-frau-m-plan-05-interprof-team",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-plan-team",
      tag: "pflege",
      contentC1: {
        title: "Wer macht was? — Interprofessionelle Zusammenarbeit",
        body: "Sturzprophylaxe ist Teamarbeit. Ordne die Aufgaben den richtigen Berufsgruppen zu.",
        glossarBegriffe: ["Interprofessionell"],
      },
      contentB1: {
        title: "Wer macht was im Team?",
        body: "Bei der Sturzprophylaxe arbeiten viele Berufe zusammen. Welche Aufgabe gehört zu welcher Gruppe?",
        glossarBegriffe: ["Interprofessionell"],
      },
      question: {
        fragetext:
          "Ordne jede Aufgabe der richtigen Berufsgruppe zu.",
        matchingPairs: [
          {
            left: "Arzt",
            right:
              "Medikamentenreview Zolpidem + HCT, Grunderkrankungen behandeln",
          },
          {
            left: "Physiotherapie",
            right: "Mobilisations-Aufbau, Balance-Training, Gangschule",
          },
          {
            left: "Pflege",
            right:
              "Umgebungsanpassung, Nachtbetreuung, Beratung + Koordination",
          },
          {
            left: "Ergotherapie",
            right: "Hilfsmittelberatung für Zuhause (Haltegriffe, Toilettenstuhl)",
          },
          {
            left: "Apotheker",
            right:
              "Brown-Bag-Review für Entlassung (alle Medikamente + Interaktionen)",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 30,
};

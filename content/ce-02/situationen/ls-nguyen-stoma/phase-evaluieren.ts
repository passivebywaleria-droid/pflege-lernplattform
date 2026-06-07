// CE-02 Situation Herr Nguyen — Phase 5: Evaluieren
// Steps: 4 Kern + 2 Optional · Bloom: B4–B5 (mit B6-Anteil) · Zeit: ~15–25 Min
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/phase-evaluieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-nguyen-stoma-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — Was hat der Morgen gebracht?",
  titelB1: "Evaluieren — Was hat sich verändert?",
  kontext:
    "Szenen-Sprung: Es ist 12:30 Uhr. Der Stomatherapeut Herr Baum war da — zwei Stunden lang. Ehefrau Mai hat zugeschaut, Linh hat übersetzt. Herr Nguyen hat beim zweiten Beutelwechsel um 11 Uhr für drei Sekunden auf sein Stoma geschaut. Du kommst wieder in Zimmer 6. Frau Santos-Weber fragt dich: 'Na? Wie war das bei Herrn Nguyen?' Du weißt: Du wirst ihr jetzt berichten — und du wirst selbst einschätzen, was gut war und was du beim nächsten Mal anders machen würdest.",
  kontextB1:
    "Es ist 12:30 Uhr. Stomatherapeut Herr Baum war da. Ehefrau Mai hat zugeschaut. Herr Nguyen hat beim zweiten Beutelwechsel kurz auf sein Stoma geschaut — drei Sekunden. Frau Santos-Weber fragt dich: 'Wie war das bei Herrn Nguyen?' Du berichtest jetzt — fachlich und persönlich.",
  kernSteps: [
    // Step 5.1 — Categorize: Stoma-Situation evaluieren
    {
      stepId: "ce02-nguyen-eval-01-stoma-assessment",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-eval-stoma",
      tag: "pflege",
      contentC1: {
        title: "Evaluierung: Was hat sich verändert — was bleibt offen?",
        body: "**Beinübungen** = aktive oder unterstützte Bewegungen der Beine im Bett (Fußkreisen, Fußheben, Zehenspitzen-Hacken-Wechsel) zur Aktivierung der Bein-Muskelpumpe und damit zur Thromboseprophylaxe.\n\nSortiere die Ereignisse und Beobachtungen des Morgens in vier Kategorien. Bloom 4 — Analysieren und Bewerten.",
        glossarBegriffe: ["Evaluation", "Verlauf", "Beinübungen"],
      },
      contentB1: {
        title: "Was hat sich heute verändert?",
        body: "**Beinübungen** = Bewegungen der Beine im Bett (z.B. Fußkreisen). Sie verhindern Blutgerinnsel in den Beinen.\n\nSortiere die Ereignisse des Morgens: Was ist besser? Was ist gleich geblieben? Was ist noch offen?",
        glossarBegriffe: ["Beinübungen"],
      },
      question: {
        fragetext:
          "Ordne jede Beobachtung der passenden Evaluationskategorie zu.",
        categories: [
          { name: "Verbessert seit Aufnahme" },
          { name: "Unverändert (kein Rückschritt, aber noch Handlungsbedarf)" },
          { name: "Noch offen / ausstehend" },
          { name: "Neue Erkenntnis" },
        ],
        categoryItems: [
          {
            text: "Beutel sitzt dicht — erste Leckage behoben und Ursache (Plattengröße) behoben",
            correctCategory: 0,
          },
          {
            text: "Stoma rosig, Haut um Stoma leicht gerötet (kein Rückschritt, aber Beobachtung nötig)",
            correctCategory: 1,
          },
          {
            text: "Ernährungsberaterin wurde angefordert — Termin noch nicht bestätigt",
            correctCategory: 2,
          },
          {
            text: "Herr Nguyen hat beim 2. Beutelwechsel mit Herrn Baum für 3 Sekunden auf sein Stoma geschaut",
            correctCategory: 3,
          },
          {
            text: "Ehefrau Mai hat erste Beutelwechsel-Demonstration durch Herrn Baum gesehen — Angehörigen-Anleitung begonnen",
            correctCategory: 0,
          },
          {
            text: "Thromboseprophylaxe: Heparin heute Morgen gegeben, Beinübungen noch nicht durchgeführt",
            correctCategory: 2,
          },
        ],
      },
    },

    // Step 5.2 — Calculation: Ernährungsbilanz
    {
      stepId: "ce02-nguyen-eval-02-ernährung-bilanz",
      phase: 5,
      stepType: "calculation",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020, AWMF-Register 073-003)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-eval-ernährung-bilanz",
      tag: "krankheitslehre",
      contentC1: {
        title: "Ernährungsbilanz: Wie viel Kcal hat Herr Nguyen bekommen?",
        body: "Du findest das Ernährungsprotokoll der letzten 24 Stunden. Berechne den ungefähren Kcal-Gesamtbetrag.\n\nErnährungsprotokoll: Gestern 200 ml Tee (0 kcal), 100 ml Brühe (~20 kcal), 3 Löffel Haferschleim (~60 kcal). Heute Morgen: 150 ml Tee (0 kcal), 50 g Zwieback (~60 kcal), 150 ml Trinknahrung (Fresubin 2 kcal/ml = 300 kcal).\n\nRichtwert post-OP für Herrn Nguyen: 1500–2000 kcal/d (BMI 19, Stressstoffwechsel, Mangelernährung). Quelle: (DGEM 2020)",
        glossarBegriffe: ["Energiebedarf", "Stressstoffwechsel", "Trinknahrung"],
      },
      contentB1: {
        title: "Wie viel hat Herr Nguyen gegessen?",
        body: "Das Ernährungsprotokoll der letzten 24 Stunden: Tee (0 kcal), Brühe (ca. 20 kcal), 3 Löffel Haferschleim (ca. 60 kcal), Zwieback (ca. 60 kcal), 150 ml Trinknahrung (ca. 300 kcal). Wie viel kcal gesamt?",
        glossarBegriffe: ["Kalorien", "Trinknahrung"],
      },
      question: {
        fragetext:
          "Berechne den ungefähren Gesamt-Kcal-Betrag der letzten 24 Stunden für Herrn Nguyen.",
        calculation: {
          instruction:
            "Addiere die Kalorien aus dem Ernährungsprotokoll der letzten 24h. Gib den Wert in kcal ein.",
          formula: "Tee + Brühe + Haferschleim + Tee + Zwieback + Trinknahrung",
          correctValue: 440,
          unit: "kcal",
          tolerance: 50,
          explanation:
            "Gesamtbetrag: 0 + 20 + 60 + 0 + 60 + 300 = 440 kcal. Richtwert für Herrn Nguyen post-OP: 1500–2000 kcal/d. Das Ernährungsdefizit ist erheblich: ~1100–1600 kcal täglich zu wenig. Aufgabentrennung: Pflege fordert die Ernährungsberaterin an, dokumentiert Intake und Defizit, bietet im Rahmen der Anordnung Trinknahrung an und eskaliert an den Arzt. Erweiterte Maßnahmen (Trinknahrung erhöhen, parenterale Ernährung) sind ausschließlich ärztliche Anordnung — die Pflege bereitet die Information auf, ordnet aber nicht selbst an. Quelle: DGEM 2020.",
          explanationB1:
            "Gesamt: ca. 440 kcal. Herr Nguyen braucht 1500–2000 kcal pro Tag. Er hat viel zu wenig gegessen. Aufgaben: Pflege schreibt es auf, fordert die Ernährungsberaterin an und informiert den Arzt. Mehr Trinknahrung oder Infusion zur Ernährung — das ordnet der Arzt an, nicht die Pflege.",
        },
      },
    },

    // Step 5.3 — Text (quote): Zitat Z6 — 'Nicht so schlimm'
    {
      stepId: "ce02-nguyen-eval-03-zitat-reflexion",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "III.2",
      quellen: ["Ethik-Kodex ICN (2021)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-nguyen-eval-körperbild",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Ein Satz, der zählt",
        body: "Nach dem Nachmittag — Herr Nguyen, langsam, sucht nach Worten:\n\n> **'Danke. Das... war nicht so schlimm. Wie ich dachte.'**\n\nHerr Nguyen hat nicht gesagt: 'Es ist mir jetzt egal.' Er hat gesagt: 'Nicht so schlimm wie ich dachte.' Das ist der erste Schritt. Körperbild-Akzeptanz nach Stoma-Anlage ist ein Prozess, der Wochen bis Monate dauert. Pflege setzt die Grundlage durch Würde, Transparenz und Geduld — nicht durch falschen Optimismus. Dieser Satz ist kein Endpunkt — er ist ein Anfang.",
        fallbezug:
          "Patientenzitat Z6. Dieser Satz ist die fachliche und menschliche Evaluation des Morgens.",
        glossarBegriffe: ["Körperbild-Akzeptanz", "Würde", "Evaluation", "Pflege", "Stoma", "Transparenz"],
      },
      contentB1: {
        title: "Was Herr Nguyen sagt",
        body: "Nach dem Nachmittag sagt Herr Nguyen langsam:\n\n> **'Danke. Das... war nicht so schlimm. Wie ich dachte.'**\n\nHerr Nguyen sagt nicht: 'Es ist mir egal.' Er sagt: 'Nicht so schlimm wie ich dachte.' Das ist der erste Schritt. Das Körperbild verändert sich langsam — Wochen bis Monate. Pflege macht das durch Würde und Geduld möglich.",
        fallbezug:
          "Patientenzitat Z6. Ein kleiner Satz — aber er bedeutet viel.",
        glossarBegriffe: ["Körperbild", "Würde", "Pflege", "Stoma"],
      },
    },

    // Step 5.4 — Freetext (kurz): Offene Reflexionsfrage
    {
      stepId: "ce02-nguyen-eval-04-freetext-reflexion",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: [
        "PflAPrV Anlage 1, Kompetenzbereich II.1 — Reflexion und Begründung pflegerischen Handelns",
        "I Care Pflege (Thieme): Pflegeprozess und Pflegeplanung",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-eval-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Deine Reflexion — kein richtig oder falsch",
        body: "Du hast heute Morgen bei Herrn Nguyen erlebt, was er gesagt hat: 'Ich bin kein richtiger Mann mehr.' Und wie du reagiert hast — oder reagiert hättest. Die KI gibt Sandwich-Feedback auf deine Antwort (keine Note, keine Bewertung, Lern-Feedback).",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Deine Reflexion",
        body: "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr.' Wie bist du damit umgegangen? Was würdest du beim nächsten Mal anders machen?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Herr Nguyen hat gesagt 'Ich bin kein richtiger Mann mehr.' Wie bist du damit umgegangen — und was hättest du rückblickend vielleicht anders gemacht?",
        musterantwort:
          "Ich habe kurz pausiert und ihn angeschaut. Ich habe gesagt: 'Das muss sich sehr schwer anfühlen.' Ich habe nicht falsch getröstet. Rückblickend: Ich hätte vielleicht früher Raum für seine Emotionen geschaffen — schon beim ersten Begrüßen, nicht erst beim Zitat. Und ich hätte Herrn Nguyen öfter direkt angesprochen (über Linh), statt nur die Tochter.",
        bewertungskriterien: [
          "Hat der/die Schüler/in das Prinzip 'Spiegeln statt falscher Trost' benannt?",
          "Hat er/sie eine konkrete Handlung beschrieben (Pause, Blickkontakt, Frage)?",
          "Gibt es einen Rückblick auf das eigene Handeln ('hätte anders gemacht')?",
          "Wurde die Kulturell-Sensibilität (Würde, Männlichkeit, Körperbild) thematisiert?",
        ],
        satzanfaengeB1: [
          "Ich habe... gemacht.",
          "Ich hätte... anders gemacht.",
          "Ich habe gelernt, dass...",
        ],
      },
    },
  ],
  optionaleSteps: [
    // 5.opt-1 — TrueFalse: Thromboseprophylaxe-Check
    {
      stepId: "ce02-nguyen-eval-opt1-thrombose-check",
      phase: 5,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP — Expertenstandard Dekubitusprophylaxe, 3. Aktualisierung (2017)",
      ],
      track: "vertiefung",
      modus: "puzzle",
      lernziel: "ce02-nguyen-eval-thrombose",
      tag: "pflege",
      contentC1: {
        title: "Thromboseprophylaxe — Vollständigkeits-Check",
        body: "**Thrombose-Schutz** = umgangssprachlich für Thromboseprophylaxe = alle Maßnahmen, die das Entstehen von Blutgerinnseln verhindern (Heparin, Kompression, Mobilisation, Beinübungen).\n\nEvaluiere: Hat heute alles stattgefunden, was zur Thromboseprophylaxe gehört?",
        glossarBegriffe: ["Thromboseprophylaxe", "Beinübungen", "Heparin", "Thrombose-Schutz"],
      },
      contentB1: {
        title: "Thrombose-Schutz — was ist passiert?",
        body: "**Thrombose-Schutz** = alle Maßnahmen gegen Blutgerinnsel (Heparin-Spritze, Bewegung, Strümpfe).\n\nWas wurde heute für den Thrombose-Schutz getan? Und was fehlt noch?",
        glossarBegriffe: ["Thrombose-Schutz", "Heparin", "Beinübungen"],
      },
      question: {
        fragetext:
          "Evaluiere die Thromboseprophylaxe für Herrn Nguyen heute. Was stimmt?",
        trueFalseCards: [
          {
            statement:
              "Heparin s.c. wurde heute Morgen korrekt verabreicht — Injektionsstelle laterale Oberschenkelaußenseite (Wunde und Stoma vermieden, ≥5 cm Abstand).",
            isTrue: true,
            explanation:
              "Prüfen: Im Pflegeprotokoll sollten Injektionsstelle und Uhrzeit dokumentiert sein. Bei Herrn Nguyen ist die periumbilikale Bauchdecke wegen frischer Wunde + Stoma kaum sicher nutzbar — daher Ausweich auf laterale Oberschenkelaußenseite (für NMH freigegeben) oder kontralateralen Oberbauch mit ≥5 cm Abstand zu Wunde und Stoma. Korrekte Durchführung + Rotation der Stelle = pharmakologische Thromboseprophylaxe gewährleistet.",
          },
          {
            statement:
              "Beinübungen wurden heute Morgen durch die Pflegekraft angeleitet.",
            isTrue: false,
            explanation:
              "Noch offen. Beinübungen (Fußkreisen, Fußheben, Zehenspitzen-Hacken-Wechsel) sind eine pflegerische Aufgabe bei eingeschränkter Mobilisation. Heute noch nicht durchgeführt — in der Nachmittagsschicht nachtragen, dokumentieren und an Frühdienst morgen weitergeben.",
          },
          {
            statement:
              "Erste Mobilisation (Bettkante 5 Minuten) ist heute gelungen — zählt als physikalische Thromboseprophylaxe.",
            isTrue: true,
            explanation:
              "Richtig. Auch kurze Mobilisationsschritte (Bettkante sitzen, kurzes Aufstehen) aktivieren die Muskelpumpe der Beine und reduzieren venöse Stase. Die 5-Minuten-Bettkanten-Mobilisation heute ist ein Beitrag zur physikalischen Thromboseprophylaxe.",
          },
          {
            statement:
              "Kompressionsstrümpfe wurden angelegt.",
            isTrue: false,
            explanation:
              "Noch offen — Herr Nguyen hatte heute Morgen Schmerzen beim Anlegen. Bei angeordneten MTPS (medizinische Thromboseprophylaxe-Strümpfe) ist 'auf den Nachmittag verschoben' keine angemessene Lösung: Maßnahmen-Auslassung dokumentieren, Ursache (Schmerz) an Arzt zurückmelden, Schmerztherapie anpassen (z.B. Bedarfsanalgesie 30 Min vor Anlage), dann erneut anlegen. Eskalation ist hier wichtiger als Verschiebung — die fehlende Kompressions-Wirkung erhöht das Thromboserisiko bei Tumor + post-OP zusätzlich. Quelle: AWMF S3-Leitlinie VTE-Prophylaxe.",
          },
        ],
      },
    },

    // 5.opt-2 — Slider: Dekubitus-Risiko heute vs. gestern
    {
      stepId: "ce02-nguyen-eval-opt2-haut-verlauf",
      phase: 5,
      stepType: "slider",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP — Expertenstandard Dekubitusprophylaxe, 3. Aktualisierung (2017)",
      ],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-nguyen-eval-dekubitus",
      tag: "pflege",
      contentC1: {
        title: "Dekubitus-Risiko heute vs. gestern — deine Einschätzung",
        body: "**Dekubitus-Risiko** = das Risiko, ein Druckgeschwür (Dekubitus) zu entwickeln. Wird mit Assessment-Instrumenten wie der Braden-Skala quantifiziert.\n\nHerr Nguyen wurde heute Morgen erstmals an der Bettkante mobilisiert. Die Ernährungsberaterin ist noch nicht da. Wie schätzt du sein Dekubitus-Risiko heute im Vergleich zu gestern ein?",
        glossarBegriffe: ["Braden-Skala", "Dekubitusrisiko", "Dekubitus-Risiko"],
      },
      contentB1: {
        title: "Ist das Dekubitus-Risiko heute besser oder schlechter?",
        body: "**Dekubitus-Risiko** = das Risiko, ein Druckgeschwür zu bekommen. Wird mit der Braden-Skala gemessen.\n\nHeute wurde Herr Nguyen kurz mobilisiert. Die Ernährungsberaterin ist noch nicht da. Ist das Risiko für ein Druckgeschwür heute besser, gleich oder schlechter als gestern?",
        glossarBegriffe: ["Dekubitus-Risiko"],
      },
      question: {
        fragetext:
          "Wie hat sich das Dekubitus-Risiko von Herrn Nguyen heute verändert? Schätze auf der Skala.",
        slider: {
          instruction:
            "Schiebe den Regler: -2 = deutlich schlechter, 0 = unverändert, +2 = deutlich verbessert.",
          unit: "Veränderung",
          min: -2,
          max: 2,
          step: 1,
          correctValue: 0,
          tolerance: 1,
          explanation:
            "Erwartet: unverändert bis leicht verbessert (0 bis +1). Begründung: Die erste Mobilisation (Bettkante) ist ein positiver Schritt — aber die Mangelernährung (440 kcal von 1500–2000 kcal/d notwendig) und das wenige Unterhautfettgewebe bleiben. Die Braden-Skala ändert sich erst bei nachhaltiger Verbesserung von Aktivität + Ernährung — nicht nach einem Morgen.",
          explanationB1:
            "Das Risiko ist ungefähr gleich geblieben. Die Mobilisation war gut — aber Herr Nguyen isst noch zu wenig und hat wenig Fettgewebe. Das braucht Zeit.",
        },
      },
    },
  ],
  geschaetzteDauer: 20,
};

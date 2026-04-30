// CE-02 Situation Frau Schmidt — Phase 1: Informieren & Ankommen
// Steps: 5 + 2 Inline-Wissen · Bloom: B1–B3 · Zeit: ~20–30 Min
// Quelle: phase-informieren.md + inline-wissen-generator

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-informieren",
  phase: "informieren",
  titel: "Informieren & Ankommen",
  titelB1: "Ankommen bei Frau Schmidt",
  kontext:
    "Es ist 08:30 Uhr, Frühdienst auf der Inneren Station. Du stehst auf dem Flur, noch außerhalb von Zimmer 8. Frau Bayraktar hat dir Frau Schmidt übergeben — kurz, mündlich. Du weißt: 68 Jahre, Adipositas, Diabetes, seit drei Tagen hier. Mehr noch nicht. Bevor du eintrittst, liest du die Pflegeübergabe im System. Und noch etwas beschäftigt dich: Du bist dir nicht sicher, wie du mit jemandem über Ernährung sprichst, bei dem das Thema sichtbar Bedeutung hat — ohne dass du die Geschichte dahinter kennst. Das ist keine einfache Situation.",
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
        body: "08:30 Uhr, Flur der Inneren Station.\n\nDu liest die Pflegeübergabe in SBAR-Struktur: **S** — Situation: Frau Schmidt (68 J., weiblich) ist seit 3 Tagen stationär wegen entgleistem Blutzucker (BZ 398 mg/dl bei Einlieferung). **B** — Hintergrund: Diabetes Typ 2 (seit 8 Jahren, bisher diätetisch, heute Metformin 500 mg 2× tgl. neu angesetzt), Adipositas Grad II (BMI 38), diabetisches Fußsyndrom Wagner Grad 1 (Wagner-Armstrong 1A), Belastungsinkontinenz seit 2 Jahren, Albumin 31 g/l (Norm: 35–52 g/l), NRS-2002-Score 1 + GLIM-Diagnose Mangelernährung Stadium 1. **A** — Aktuelles: ansprechbar, wach, kooperativ, klagt über Schwäche, BZ heute nüchtern 187 mg/dl. **R** — Reaktion: Morgenpflege, BZ messen, Ernährungsgespräch vorbereiten. SBAR ist die Standard-Struktur für klinische Übergaben — vollständig und klar.",
        fallbezug:
          "Frau Schmidt (68 J., Adipositas Grad II, Diabetes Typ 2) ist seit 3 Tagen stationär. Du bist Pflegeschülerin im 2. Ausbildungsdrittel, Frühdienst.",
        glossarBegriffe: ["NRS 2002", "Albumin", "Wagner-Armstrong-Klassifikation"],
      },
      contentB1: {
        title: "Die Übergabe lesen",
        body: "08:30 Uhr, Flur der Inneren Station.\n\nDu liest die Pflegeübergabe (SBAR-Struktur): **S** = Situation: Frau Schmidt ist seit 3 Tagen hier. Der Blutzucker (= BZ) war bei der Einlieferung sehr hoch: 398 mg/dl. Jetzt nüchtern: 187 mg/dl. **B** = Hintergrund: Sie hat Diabetes Typ 2, Adipositas Grad II (BMI 38). Sie hat ein Fußsyndrom (Wagner Grad 1 = erste Risse an der Haut, keine Wunde). Sie hat Belastungs-Inkontinenz (= sie verliert manchmal Urin bei Bewegung). Albumin (= Eiweiß im Blut) ist zu niedrig: 31 g/l. **A** = Aktuelles: Sie ist wach und ansprechbar. Sie fühlt sich schwach. **R** = Reaktion: Du machst die Morgenpflege. Dann misst du den Blutzucker. Dann sprichst du mit ihr über Ernährung.",
        fallbezug:
          "Frau Schmidt ist 68 Jahre alt. Sie ist seit 3 Tagen im Krankenhaus. Du bist Schülerin im Frühdienst.",
        glossarBegriffe: ["NRS 2002", "Albumin", "Wagner-Armstrong-Klassifikation"],
      },
    },

    // Step 1.1b — Inline-Wissen: NRS-2002 Ernährungsscreening
    // Schüler hat gerade die SBAR-Übergabe gelesen (Step 1.1) und NRS-2002-Score 1 gesehen.
    // Bevor er die Selbsteinschätzung gibt, klärt dieser Baustein: Was ist NRS-2002 überhaupt?
    // Das Verständnis wird in Phase 2 (Step 2.3 Categorize) direkt angewendet.
    {
      stepId: "ce02-schmidt-info-01b-nrs2002-screening",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 1,
      kompetenzbereich: "I.1",
      quellen: [
        "Kondrup J. et al. (2003): NRS 2002 — ESPEN Guidelines for Nutritional Screening",
        "DNQP (2017): Expertenstandard Ernährungsmanagement zur Sicherstellung und Förderung der oralen Ernährung",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-schmidt-info-nrs2002",
      tag: "pflege",
      themaPrimaer: "ernährungsassessment",
      themenSekundaer: ["ernährungsgrundlagen"],
      transition: "NRS-2002 liefert eine Zahl. Aber wie sicher bist du selbst im Umgang mit Adipositas und Ernährung?",
      contentC1: {
        title: "NRS 2002 — das Screening-Werkzeug aus der Übergabe",
        body: "",
        glossarBegriffe: ["NRS 2002", "Ernährungsscreening", "ESPEN"],
      },
      contentB1: {
        title: "Was ist NRS 2002?",
        body: "",
        glossarBegriffe: ["NRS 2002", "Ernährungsscreening"],
      },
      inlineWissen: {
        bausteinRef: "ernährungsassessment-nrs-2002",
        storyAufhaenger:
          "In der Übergabe stand: \"NRS-2002-Score 1\". Das klingt nach wenig. Aber was genau bedeutet NRS 2002 — und warum reicht ein niedriger Score bei Frau Schmidt trotzdem nicht aus, um Entwarnung zu geben?",
        storyAufhaengerB1:
          "In der Übergabe stand: \"NRS-2002-Score 1\". Was ist NRS 2002? Und warum bedeutet Score 1 bei Frau Schmidt trotzdem nicht \"alles okay\"?",
        kerntext:
          "Das **NRS 2002 (Nutritional Risk Screening)** ist das Standard-Screening-Werkzeug der ESPEN (Kondrup 2003). Es wird bei **jeder stationären Aufnahme** innerhalb von 24 Stunden durchgeführt.\n\n**3 Achsen werden geprüft:**\n\n• **Ernährungsstatus** (0-3 Punkte) — BMI, Gewichtsverlust in den letzten 3 Monaten, Nahrungsaufnahme letzte Woche.\n\n• **Erkrankungsschwere** (0-3 Punkte) — je schwerer die Erkrankung, desto höher der Nährstoffbedarf.\n\n• **Alter ≥ 70 Jahre** — automatisch +1 Punkt (erhöhte Vulnerabilität).\n\n**Schwellenwert: ≥ 3 Punkte** = Ernährungsintervention indiziert.\n\n**Achtung bei Frau Schmidt:** NRS-Score 1, weil BMI 38 (kein Untergewicht!), kein Gewichtsverlust, Nahrungsaufnahme unverändert. Aber NRS erkennt eine versteckte Mangelernährung bei Adipositas NICHT zuverlässig — dafür braucht es die nachgelagerte GLIM-Diagnostik.",
        kerntextB1:
          "**NRS 2002** ist ein Test-Werkzeug. Es prüft: Ist ein Patient in Gefahr, schlecht ernährt zu sein?\n\n**3 Punkte werden geprüft:**\n\n• **Ernährungs-Zustand** — Wie ist das Gewicht? Hat der Patient abgenommen? Isst er genug?\n\n• **Krankheits-Schwere** — Je kränker, desto mehr Nährstoffe braucht der Körper.\n\n• **Alter über 70** — Ältere Menschen bekommen automatisch 1 Punkt mehr.\n\n**Ab 3 Punkte:** Ernährungs-Hilfe ist nötig.\n\n**Bei Frau Schmidt:** Score 1. Klingt gut — ist es aber nicht. NRS erkennt versteckten Eiweiß-Mangel bei Übergewicht NICHT. Dafür gibt es einen anderen Test: GLIM.",
        faustregel:
          "NRS 2002 ist das Screening, nicht die Diagnose. Ein niedriger Score schließt Mangelernährung bei Adipositas NICHT aus.",
        faustregelB1:
          "NRS 2002 ist nur der erste Test. Ein niedriger Score heißt bei Übergewicht NICHT: alles okay.",
        spektrum: [
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Dysphagie + reduzierte Nahrungsaufnahme",
            kurzbeschreibung:
              "Nach Schlaganfall kann er kaum schlucken. Nahrungsaufnahme um 75 % reduziert. NRS-Score 4 — Ernährungsintervention sofort indiziert. Bei ihm ist NRS aussagekräftig, weil Untergewicht + reduzierte Zufuhr klar messbar sind.",
          },
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Post-OP Katabolismus",
            kurzbeschreibung:
              "Nach Hüft-TEP: Erkrankungsschwere 2-3, Appetitlosigkeit, Alter 79 = +1 Punkt. NRS-Score oft ≥ 3. Proteinbedarf steigt post-OP auf 1,5 g/kg/Tag.",
          },
          {
            patientName: "Herr Nguyen",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Stoma + gestörte Resorption",
            kurzbeschreibung:
              "Nach Kolon-OP mit Stoma: hoher Flüssigkeits- und Elektrolytverlust. NRS fängt die Resorptionsstörung als Erkrankungsschwere ein — Score ≥ 3.",
          },
          {
            patientName: "Emilia (Säugling)",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Pädiatrisches Screening",
            kurzbeschreibung:
              "Bei Kindern wird NICHT NRS 2002 verwendet, sondern **STRONGkids** oder **STAMP**. NRS 2002 ist nur für Erwachsene validiert.",
          },
        ],
        sonstBox:
          "Weitere Screening-Werkzeuge neben NRS 2002: **MNA (Mini Nutritional Assessment)** — speziell für geriatrische Patienten ≥ 65, umfasst auch Mobilität und Kognition. **MUST (Malnutrition Universal Screening Tool)** — für ambulante Settings. **SGA (Subjective Global Assessment)** — Experten-Assessment, kein Score-basiertes Screening.",
        sonstBoxB1:
          "Andere Test-Werkzeuge: **MNA** — für ältere Patienten (ab 65). **MUST** — für Patienten zuhause. **SGA** — für Experten. NRS 2002 wird im Krankenhaus bei Erwachsenen verwendet.",
        karteikarte: {
          vorderseite:
            "Bei Frau Schmidt (BMI 38, Albumin 31 g/l) ergibt NRS 2002 nur 1 Punkt. Reicht das als Entwarnung?",
          rueckseite:
            "Nein. NRS 2002 erkennt versteckte Mangelernährung bei Adipositas nicht zuverlässig — Schwelle ≥ 3 greift nicht, weil BMI hoch + kein Gewichtsverlust. Nachgelagerte GLIM-Diagnostik nötig.\n\nSpektrum: Petrov (Dysphagie, NRS 4), Yilmaz (post-OP, NRS ≥ 3), Nguyen (Stoma, NRS ≥ 3), Emilia (Kinder: STRONGkids, nicht NRS).\n\nFaustregel: **NRS 2002 ist das Screening, nicht die Diagnose.**",
        },
      },
    },

    // Step 1.2 — Selbsteinschätzung (selfrating/confidence)
    {
      stepId: "ce02-schmidt-info-02-selbsteinschätzung",
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

    // Step 1.3 — MC: Wie viele Daten kennst du vor dem Betreten? (F-01 Fix)
    {
      stepId: "ce02-schmidt-info-03-erstpriorisierung",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "Aktionsbündnis Patientensicherheit: SBAR-Übergabe",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-schmidt-info-vorbereitung",
      tag: "pflege",
      contentC1: {
        title: "Vor dem Betreten — was musst du wissen?",
        body: "Bevor du das Zimmer betrittst: Was musst du aus der SBAR-Übergabe MINIMAL wissen, damit du Frau Schmidt sicher pflegen kannst? Wähle das vollständigste Set.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was musst du wissen — vor dem Zimmer?",
        body: "Was musst du aus der Übergabe wissen, BEVOR du ins Zimmer gehst? Wähle was wirklich gebraucht wird.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was musst du aus der SBAR-Übergabe wissen, BEVOR du das Zimmer betrittst — als minimale Sicherheits-Basis?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Nur Name und Zimmernummer — alles andere frage ich Frau Schmidt selbst.",
            isCorrect: false,
            explanation:
              "Zu wenig. Patientensicherheit verlangt Mindestwissen aus der Übergabe BEVOR du Pflege durchführst: aktuelle Diagnosen (Diabetes! Fußsyndrom!), aktuelle Medikamente (Metformin neu!), kritische Werte (BZ 187 nüchtern), Allergien, Sturzrisiko. Wer das nicht kennt, gefährdet die Patientin.",
            explanationB1:
              "Zu wenig. Du brauchst mehr Infos: Welche Krankheit? Welche Medikamente? Welche Werte? Sonst kann es gefährlich werden.",
          },
          {
            text: "Aktuelle Diagnosen, neue Medikamente, kritische Werte (BZ-Trend), bekannte Risiken (Sturz, Inkontinenz, Fußsyndrom) und das Tagesziel der Schicht.",
            isCorrect: true,
            explanation:
              "Richtig. Das ist das Mindestwissen für sichere Pflege. SBAR-Übergabe liefert genau das: Situation (warum stationär), Background (Diagnosen + Medikamente), Assessment (aktuelle Werte + Risiken), Recommendation (Tagesziel). Diese Daten brauchst du IM KOPF wenn du das Zimmer betrittst — nicht erst nachschlagen während der Pflege.",
            explanationB1:
              "Richtig! Du musst wissen: Welche Krankheit? Welche neuen Medikamente? Welche Werte? Welche Risiken? Welches Ziel heute? Das ist die Basis für sichere Pflege.",
          },
          {
            text: "Alle Befunde der letzten 6 Monate — vollständige Krankengeschichte.",
            isCorrect: false,
            explanation:
              "Zu viel und unrealistisch. Eine SBAR-Übergabe ist KURZ und FOKUSSIERT auf das aktuell Relevante. Vollständige Krankengeschichte liest du nur bei Bedarf nach — vor dem Betreten brauchst du das aktuelle Lagebild, nicht die Lebensgeschichte.",
            explanationB1:
              "Zu viel. Eine SBAR-Übergabe ist kurz. Du musst nur das Wichtige für HEUTE wissen — nicht alles aus 6 Monaten.",
          },
          {
            text: "Nur was die Praxisanleiterin mir mündlich gesagt hat, das System lese ich nicht.",
            isCorrect: false,
            explanation:
              "Riskant. Mündliche Übergaben sind unvollständig (vergessene Details, Missverständnisse). Die schriftliche SBAR-Dokumentation im System ist verbindlich und vollständig. Beides zusammen = sichere Übernahme.",
            explanationB1:
              "Falsch. Mündlich allein reicht nicht — du musst auch im System lesen. Beide Quellen zusammen sind sicher.",
          },
        ],
      },
    },

    // Step 1.3b — Inline-Wissen: BMI-Berechnung und Adipositas-Grade
    // Schüler hat in Step 1.1 BMI 38 gelesen und in Step 1.3 die SBAR-Prioritäten sortiert.
    // Bevor er Frau Schmidt im Dialog (Step 1.4) begegnet, soll er wissen: Was bedeutet BMI 38
    // konkret? Und warum ist Adipositas Grad II pflegerisch relevant?
    {
      stepId: "ce02-schmidt-info-03b-bmi-adipositas",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "WHO (2000): Obesity — Preventing and Managing the Global Epidemic",
        "DAG (2014): S3-Leitlinie Adipositas — Prävention und Therapie",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-schmidt-info-bmi-grade",
      tag: "krankheitslehre",
      themaPrimaer: "ernährungsassessment",
      themenSekundaer: ["ernährungsgrundlagen"],
      transition: "BMI 38, Grad II. Du weißt jetzt was das bedeutet. Jetzt klopfst du an.",
      contentC1: {
        title: "BMI 38 — was bedeutet das für Frau Schmidt?",
        body: "",
        glossarBegriffe: ["BMI", "Adipositas", "Body-Mass-Index"],
      },
      contentB1: {
        title: "Was bedeutet BMI 38?",
        body: "",
        glossarBegriffe: ["BMI", "Adipositas"],
      },
      inlineWissen: {
        bausteinRef: "ernährungsassessment-bmi-kategorien",
        storyAufhaenger:
          "In der Übergabe stand: \"BMI 38, Adipositas Grad II.\" Du weißt, dass BMI etwas mit Gewicht und Größe zu tun hat. Aber was genau bedeutet Grad II — und warum ist das für deine Pflege heute relevant?",
        storyAufhaengerB1:
          "In der Übergabe stand: \"BMI 38\". Was heißt das genau? Und warum ist das für die Pflege wichtig?",
        kerntext:
          "Der **BMI (Body-Mass-Index)** berechnet sich aus **Gewicht (kg) geteilt durch Größe (m) zum Quadrat** (WHO 2000).\n\nFrau Schmidt: 98 kg bei 1,60 m = 98 / (1,60 x 1,60) = 98 / 2,56 = **38,3**.\n\n**WHO-Klassifikation:**\n\n• BMI 18,5–24,9 = Normalgewicht\n\n• BMI 25,0–29,9 = Übergewicht\n\n• BMI 30,0–34,9 = **Adipositas Grad I**\n\n• BMI 35,0–39,9 = **Adipositas Grad II** (Frau Schmidt)\n\n• BMI ≥ 40,0 = **Adipositas Grad III** (Adipositas per magna)\n\n**Pflegerische Konsequnzen bei Grad II:**\n\n• Belastungsgrenze beachten — Bett, Rollstuhl, Toilettenstuhl (Maximalgewicht prüfen!)\n\n• Hautfalten-Pflege — Intertrigo-Risiko in allen Falten\n\n• Mobilisation — Sturzrisiko erhöht (Polyneuropathie + Körperschwerpunkt)\n\n• Würde — das Gespräch über Gewicht ist für Patient(inn)en belastend. Stigmatisierung vermeiden.",
        kerntextB1:
          "Der **BMI** zeigt, ob jemand Normal-Gewicht, Übergewicht oder Adipositas hat.\n\n**So rechnet man:** Gewicht (kg) geteilt durch Größe (m) mal Größe (m).\n\nFrau Schmidt: 98 kg, 1,60 m groß. 98 geteilt durch 2,56 = **38**.\n\n**Was die Zahlen bedeuten:**\n\n• BMI 18,5–24,9 = Normal-Gewicht\n\n• BMI 25–29,9 = Übergewicht\n\n• BMI 30–34,9 = Adipositas Grad I\n\n• BMI 35–39,9 = **Adipositas Grad II** (= Frau Schmidt)\n\n• BMI ab 40 = Adipositas Grad III\n\n**Für die Pflege heißt das:**\n\n• Bett und Stuhl prüfen — halten sie das Gewicht?\n\n• Haut-Falten pflegen — Gefahr von Intertrigo\n\n• Vorsichtig über das Thema sprechen — Frau Schmidt fühlt sich schnell verurteilt",
        faustregel:
          "BMI ist eine Zahl, kein Urteil. Pflegerisch zählt: Belastungsgrenzen, Hautfalten, Würde.",
        faustregelB1:
          "BMI zeigt den Grad des Übergewichts. Für die Pflege wichtig: Bett-Grenze, Haut-Falten, kein Verurteilen.",
        spektrum: [
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Kachexie-Risiko nach Apoplex",
            kurzbeschreibung:
              "BMI 21 — noch Normalgewicht, aber Dysphagie führt schnell zu Gewichtsverlust. Bei ihm ist BMI-Monitoring ein Frühwarnsignal Richtung Untergewicht, nicht Übergewicht.",
          },
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "BMI und OP-Risiko",
            kurzbeschreibung:
              "BMI 34 — Adipositas Grad I (WHO: 30,0–34,9). OP-Risiko erhöht: Wundheilungsstörung, Thrombose. Zusätzlich: Diabetes mellitus Typ 2 verstärkt das perioperative Risiko.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Ungewollter Gewichtsverlust",
            kurzbeschreibung:
              "BMI 19 — am unteren Normalrand. COPD-bedingte Katabolie. Bei ihr ist der BMI-Trend abwärts das Problem, nicht der Absolutwert.",
          },
        ],
        sonstBox:
          "BMI hat Grenzen: Bei Amputierten muss korrigiert werden (Stumpflänge). Bei Ödemen/Aszites ist BMI verfälscht (Wassergewicht). Bei Bodybuildern zeigt BMI \"Übergewicht\" obwohl Muskelmasse gemeint ist. Deshalb wird BMI im klinischen Setting IMMER zusammen mit klinischem Blick, Umfangsmessung (Waist-to-Hip-Ratio) und Labor interpretiert.",
        sonstBoxB1:
          "BMI stimmt nicht immer: Bei fehlendem Arm oder Bein muss anders gerechnet werden. Bei Wassereinlagerungen (Ödeme) wiegt man mehr als man \"wirklich\" wiegt. BMI allein reicht nie — immer mit Blutbild und Blick auf den Patienten zusammen beurteilen.",
        karteikarte: {
          vorderseite:
            "Frau Schmidt hat BMI 38. Welcher Adipositas-Grad ist das — und was bedeutet es pflegerisch?",
          rueckseite:
            "BMI 38 = **Adipositas Grad II** (WHO-Schwelle: 35,0–39,9). Pflegerisch: Belastungsgrenzen von Bett/Stuhl prüfen, Hautfalten-Inspektion (Intertrigo-Risiko), Mobilisation mit Sturzrisiko-Bewusstsein, Gespräch über Gewicht ohne Stigmatisierung.\n\nSpektrum: Petrov (BMI 21, Kachexie-Risiko), Yilmaz (BMI 34, OP-Risiko), Kovac (BMI 19, Gewichtsverlust-Trend).\n\nFaustregel: **BMI ist eine Zahl, kein Urteil.**",
        },
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
      lernziel: "ce02-schmidt-info-informationslücken",
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
          "Bekannt: Albumin 31 g/l, NRS-2002-Score 1, GLIM-Diagnose Mangelernährung Stadium 1",
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

// CE-02 Situation Frau Schmidt — Phase 2: Beobachten & Assessment
// Steps: 8 · Bloom: B3–B4 · Zeit: ~30–40 Min
// Quelle: phase-beobachten.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Assessment",
  titelB1: "Schauen und Einschätzen",
  kontext:
    "Frau Schmidt hat nach der Begrüßung kurz erzählt, sie sei müde, habe aber gut geschlafen. Du beginnst jetzt das strukturierte Assessment — Blutzucker, NRS 2002, Haut, Fuß, Inkontinenz. Frau Schmidt schaut dich skeptisch an, als du sagst, du würdest heute \"ganz viele Fragen stellen und auch schauen wollen, wie die Haut aussieht\". Sie nickt aber.",
  kontextB1:
    "Frau Schmidt sagt: Sie ist müde, aber hat gut geschlafen. Jetzt machst du das Assessment (= Einschätzung des Zustands). Du prüfst: Blutzucker, Ernährungs-Risiko, Haut, Füße, Harnverlust. Du sagst: \"Ich möchte heute viel schauen und fragen.\" Frau Schmidt nickt. Sie schaut dich skeptisch an.",
  kernSteps: [
    // Step 2.1 — TrueFalse: Brilliant-Prinzip — Adipositas ≠ gut ernährt
    {
      stepId: "ce02-schmidt-beob-01-brilliantfrage",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Cederholm T. et al. (2019): GLIM-Kriterien — Global Leadership Initiative on Malnutrition",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-schmidt-beob-adipositas-paradox",
      tag: "krankheitslehre",
      contentC1: {
        title: "Wahr oder falsch — bevor das Assessment beginnt",
        body: "Brilliant-Prinzip: Bevor du das Assessment beginnst, eine Frage die viele falsch beantworten. Aktiviere dein Vorwissen.",
        glossarBegriffe: ["Albumin", "Proteinmangelernährung"],
      },
      contentB1: {
        title: "Wahr oder falsch?",
        body: "Bevor das Assessment beginnt: eine Frage, die viele falsch beantworten. Denk kurz nach.",
        glossarBegriffe: ["Albumin", "Proteinmangelernährung"],
      },
      question: {
        fragetext:
          "Wahr oder falsch: Wer adipös ist, kann nicht gleichzeitig mangelernährt sein. Ein hoher BMI bedeutet ausreichende Nährstoffversorgung.",
        trueFalseCards: [
          {
            statement:
              "Wer adipös ist (BMI ≥ 30), kann nicht gleichzeitig an Proteinmangelernährung leiden. Ein hoher BMI zeigt ausreichende Nährstoffversorgung an.",
            isTrue: false,
            explanation:
              "Falsch. Das ist das zentrale Paradox dieser Situation. Adipositas bedeutet: zu viel Energie (Kalorien) gespeichert. Aber der Körper braucht nicht nur Energie — er braucht Protein für Wundheilung, Immunabwehr und Ödemprophylaxe. Fertigprodukte enthalten viel Kohlenhydrate und Fett, aber oft wenig Protein. Frau Schmidt hat BMI 38 — und Albumin 31 g/l (Norm: 35–52 g/l). Wichtig: Albumin ist ein HINWEIS, kein Beweis — bei Akuterkrankung/Inflammation sinkt Albumin auch ohne reine Proteinmangel-Ursache (Akut-Phase-Negativ-Protein). Deshalb gehört zur Diagnose immer das NRS-2002-Screening und im zweiten Schritt die GLIM-Kriterien. (Cederholm et al., GLIM-Kriterien, 2019)",
          },
        ],
      },
    },

    // Step 2.2 — Sequencing: Blutzucker messen
    {
      stepId: "ce02-schmidt-beob-02-bz-messen",
      phase: 2,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DDG (2023): Praxisempfehlungen Diabetes Typ 2",
        "RKI-KRINKO (2016): Händehygiene in Einrichtungen des Gesundheitswesens",
        "§ 630e BGB — Aufklärungspflicht vor medizinischer Maßnahme",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-schmidt-beob-bz-messen",
      tag: "pflege",
      contentC1: {
        title: "Blutzucker messen — richtige Reihenfolge",
        body: "Du misst jetzt den Nüchtern-BZ bei Frau Schmidt. Bringe die Schritte in die korrekte Reihenfolge.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Blutzucker messen — Schritt für Schritt",
        body: "Blutzucker messen bei Frau Schmidt. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Bringe die Schritte zum Blutzucker-Messen in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "Richtige Reihenfolge für die BZ-Messung bei Frau Schmidt. Wichtig: Aufklärung kommt zuerst (§ 630e BGB), erst danach Hygiene-Vorbereitung (RKI 2016).",
          items: [
            { id: "bz1", label: "Frau Schmidt informieren: \"Ich messe jetzt Ihren Blutzucker\" und Einverständnis abwarten" },
            { id: "bz2", label: "Hände waschen und Handschuhe anziehen" },
            { id: "bz3", label: "Fingerkuppe seitlich stechen — nicht die Mitte (weniger schmerzhaft)" },
            { id: "bz4", label: "Bluttropfen auf den Teststreifen auftragen" },
            { id: "bz5", label: "Ergebnis ablesen und dokumentieren (187 mg/dl nüchtern)" },
            { id: "bz6", label: "Lanzette in die Stichschutzbox entsorgen" },
          ],
        },
      },
    },

    // Step 2.3 — Categorize: NRS 2002 Assessment
    {
      stepId: "ce02-schmidt-beob-03-nrs-2002",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "Cederholm T. et al. (2019): GLIM-Kriterien",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-beob-nrs",
      tag: "pflege",
      contentC1: {
        title: "NRS 2002 — Ernährungsrisiko-Screening",
        body: "Ordne Frau Schmidts Daten den NRS-2002-Kategorien zu. Bloom 4: Daten in ein Screening-Werkzeug übersetzen und das Paradox verstehen.",
        glossarBegriffe: ["NRS 2002", "Albumin"],
      },
      contentB1: {
        title: "NRS 2002 — Ernährungs-Risiko prüfen",
        body: "NRS 2002 (= Ernährungs-Risiko-Screening) — du prüfst das Risiko für Mangel-Ernährung. Ordne Frau Schmidts Daten zu.",
        glossarBegriffe: ["NRS 2002", "Albumin"],
      },
      question: {
        fragetext:
          "Ordne Frau Schmidts Daten den NRS-2002-Kategorien zu und bestimme den Gesamtscore.",
        categories: [
          { name: "Ernährungsstatus-Score (0, 1 oder 2 Punkte)" },
          { name: "Schweregrad der Erkrankung (0, 1 oder 2 Punkte)" },
          { name: "Altersscore (0 oder 1 Punkt)" },
        ],
        categoryItems: [
          {
            text: "BMI 38 — auf den ersten Blick Score 0 (kein Gewichtsverlust, kein Untergewicht)",
            correctCategory: 0,
          },
          {
            text: "Albumin 31 g/l — Hinweis auf Proteinmangel trotz Übergewicht → NRS-Gesamtbewertung korrigieren!",
            correctCategory: 0,
          },
          {
            text: "Diabetes entgleist, stationäre Aufnahme nötig → Score 1",
            correctCategory: 1,
          },
          {
            text: "Alter 68 Jahre → kein Altersscore (Altersscore gilt ab 70 J.)",
            correctCategory: 2,
          },
        ],
      },
    },

    // Step 2.4 — Text/beforeafter: Das Albumin-Paradox
    {
      stepId: "ce02-schmidt-beob-04-albumin-paradox",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Cederholm T. et al. (2019): GLIM-Kriterien — Global Leadership Initiative on Malnutrition",
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-schmidt-beob-albumin",
      tag: "krankheitslehre",
      displayFormat: "beforeafter",
      contentC1: {
        title: "Das Albumin-Paradox — Vorher und Nachher",
        body: "**Vorher (vor dem Blutbefund):** \"Frau Schmidt ist adipös — BMI 38. Sie isst genug. Sie ist sicher gut ernährt.\"\n\n**Nachher (mit dem Befund):** Albumin 31 g/l — Proteinmangel trotz Übergewicht. NRS-Score 3 — Ernährungsintervention indiziert.\n\nDas Paradox: Frau Schmidt isst energiereiche, aber proteinarme Kost (Fertigprodukte, Kohlenhydrate, Fette). Der Körper braucht Protein — nicht nur für Muskeln, sondern für Wundheilung, Immunabwehr und Ödemprophylaxe. Albumin ist ein Protein im Blut — ein Indikator für den Eiweißstatus. Normwert: 35–52 g/l. Frau Schmidt: 31 g/l. Adipositas ≠ gut ernährt. (Cederholm et al., GLIM-Kriterien, 2019)\n\nFrau Schmidt sagt: \"Ich esse doch genug — schauen Sie mich an! Wie kann ich da Eiweiß-Mangel haben? Das versteh ich nicht.\"",
        fallbezug:
          "Frau Schmidt hat NRS-Score 3 — Ernährungsintervention ist indiziert. Die Ernährungsberaterin kommt nachmittags.",
        glossarBegriffe: ["Albumin", "Proteinmangelernährung", "NRS 2002"],
      },
      contentB1: {
        title: "Das Albumin-Paradox",
        body: "**Vorher:** \"Frau Schmidt hat Übergewicht — sie ist sicher gut ernährt.\"\n\n**Nachher (nach dem Blutbefund):** Albumin 31 g/l — das ist zu niedrig!\n\nWas bedeutet das? Frau Schmidt isst viel Kohlenhydrate (= Zucker und Stärke) und Fett. Aber sie isst wenig Protein (= Eiweiß). Zum Beispiel: Fertig-Pizza. Der Körper braucht Protein für: Wunden heilen, das Immunsystem stärken, Ödeme (= Wassereinlagerungen) verhindern.\n\nFrau Schmidt sagt: \"Ich esse doch genug — schauen Sie mich an! Wie kann ich da Eiweiß-Mangel haben? Das versteh ich nicht.\"",
        glossarBegriffe: ["Albumin", "Proteinmangelernährung"],
      },
    },

    // Step 2.5 — Hotspot: Haut-Inspektion Adipositas
    {
      stepId: "ce02-schmidt-beob-05-haut-inspektion",
      phase: 2,
      stepType: "hotspot",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S2k-Leitlinie Intertrigo DDG (2022)",
        "DNQP (2017): Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-schmidt-beob-haut",
      tag: "anatomie",
      bildkategorie: "anatomie",
      imageAlt:
        "Medizinische Illustration einer adipösen Patientin von hinten, Markierungspunkte für Intertrigo- und Dekubitusrisikostellen",
      bildhinweis:
        "Medical illustration of an overweight female patient from behind and side view, showing anatomical risk zones for intertrigo and pressure sores: submammary folds, inguinal folds, abdominal hanging fold, sacrum area, clean educational style, no text no labels",
      contentC1: {
        title: "Haut-Inspektion — gefährdete Stellen markieren",
        body: "Markiere auf dem Bild: Wo sind die gefährdeten Stellen für Intertrigo und Dekubitus bei Adipositas? Du hast vier Hauptstellen zu finden.",
        glossarBegriffe: ["Intertrigo", "Dekubitus", "Mazerierung"],
      },
      contentB1: {
        title: "Haut anschauen — wo ist sie gefährdet?",
        body: "Bild: Rücken und Seite einer Patientin mit Übergewicht. Wo ist die Haut gefährdet? Markiere die Stellen.",
        glossarBegriffe: ["Intertrigo", "Dekubitus"],
      },
      question: {
        fragetext:
          "Markiere alle gefährdeten Hautstellen für Intertrigo und Dekubitus bei Adipositas.",
        hotspot: {
          imageUrl: "/images/ce-02/haut-adipositas-risikostellen.svg",
          imageAlt:
            "Adipöse Patientin — Risikostellen für Intertrigo und Dekubitus",
          instruction:
            "Tippe auf alle Stellen, die bei Adipositas besonders gefährdet sind.",
          zones: [
            {
              id: "submammaer",
              x: 50,
              y: 28,
              radius: 8,
              label:
                "Submammäre Falte — feucht, warm, Reibung → Intertrigo-Risiko",
            },
            {
              id: "leistenbeuge",
              x: 42,
              y: 60,
              radius: 8,
              label:
                "Leistenbeuge — Falte zwischen Bauch und Oberschenkel, häufig feucht",
            },
            {
              id: "abdomen-haengefalte",
              x: 50,
              y: 52,
              radius: 8,
              label:
                "Abdomen-Hängefalte — bei starkem Übergewicht, oft chronisch feucht",
            },
            {
              id: "steissbein",
              x: 50,
              y: 75,
              radius: 8,
              label:
                "Steißbein — Druckpunkt beim Sitzen und Liegen → Dekubitusrisiko",
            },
          ],
        },
      },
    },

    // Step 2.6 — MC: Fußinspektion + K.O.-Wissen Podologe
    {
      stepId: "ce02-schmidt-beob-06-fussinspektion",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Deutsche Diabetes Gesellschaft / DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
        "AWMF S3-Leitlinie NVL Typ-2-Diabetes (2023): Fußversorgung und Podologie",
        "Wagner F.W. (1979) / Armstrong D.G. (1996): Wagner-Armstrong-Klassifikation",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-schmidt-beob-fuss-podologe",
      tag: "pflege",
      contentC1: {
        title: "Fußinspektion — was tust du als nächstes?",
        body: "Du inspizierst Frau Schmidts Füße. Du siehst: trockene Haut plantar, erste Rissbildung am großen Zeh, verdickte Nägel, keine offene Wunde (Wagner-Armstrong Kategorie 1). Frau Schmidt sagt: \"Die Füße pflege ich selbst. Schon immer. Die Nägel schneide ich mir zweimal im Jahr, das reicht doch.\" Was ist deine nächste Handlung?",
        glossarBegriffe: ["Diabetisches Fußsyndrom", "Podologe", "Wagner-Armstrong-Klassifikation"],
      },
      contentB1: {
        title: "Fußinspektion — was machst du?",
        body: "Du schaust dir Frau Schmidts Füße an. Du siehst: Die Haut ist trocken und rissig an der Fußsohle. Die Nägel sind verdickt und lang. Keine offene Wunde. Frau Schmidt sagt: \"Die Füße pflege ich selbst. Die Nägel schneide ich zweimal im Jahr, das reicht doch.\" Was tust du jetzt?",
        glossarBegriffe: ["Diabetisches Fußsyndrom", "Podologe"],
      },
      question: {
        fragetext:
          "Du siehst Wagner-1-Befund am Fuß. Frau Schmidt möchte ihre Nägel selbst schneiden. Was ist deine nächste Handlung?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Nägel jetzt kürzen — die sind zu lang und das ist Pflege-Aufgabe.",
            isCorrect: false,
            explanation:
              "K.O.-Fehler. Jede Verletzung (auch kleinste!) am Diabetikerfuß kann sich zu einer schwer heilenden Wunde entwickeln. Wundinfektionen beim Diabetiker heilen 3–5× langsamer (DDG 2023). Nagelpflege beim diabetischen Fußsyndrom ist ausschließlich Aufgabe von Podologinnen — nicht der Pflege.",
            explanationB1:
              "Das ist falsch und gefährlich! Jede kleine Verletzung am Fuß eines Diabetikers kann sehr gefährlich werden. Wunden heilen beim Diabetiker viel langsamer (bis zu 5× langsamer). Nur ein Podologe (= Fußpflege-Spezialist) darf die Nägel schneiden.",
          },
          {
            text: "Frau Schmidt erklären, dass bei diabetischem Fußsyndrom Nagelpflege ausschließlich durch eine Podologin erfolgen darf, und einen Überweisungsantrag anregen.",
            isCorrect: true,
            explanation:
              "Richtig. Das ist K.O.-Wissen: Diabetisches Fußsyndrom + Nagelpflege durch Pflege = kontraindiziert. Die Pflege inspiziert, berichtet, berät — aber greift nicht mit Nagelschere oder Feile ein. Du erklärst Frau Schmidt warum, und leitest die Podologen-Überweisung ein. (DDG 2023, AWMF NVL Typ-2-Diabetes 2023)",
            explanationB1:
              "Richtig! Bei Diabetes darf die Pflege die Nägel NICHT schneiden. Das macht nur ein Podologe (= Fußpflege-Spezialist). Du erklärst Frau Schmidt warum und beantragst eine Überweisung.",
          },
          {
            text: "Die Nägel erst nächste Woche anschauen — heute zu viel anderes.",
            isCorrect: false,
            explanation:
              "Zu passiv. Wagner-1-Befund (erste Rissbildung) ist dokumentationspflichtig und erfordert sofortige Einleitung einer Podologen-Überweisung. Aufschieben erhöht das Infektionsrisiko.",
            explanationB1:
              "Das reicht nicht. Der Befund muss jetzt dokumentiert werden und ein Podologen-Termin muss jetzt angefragt werden. Warten ist falsch.",
          },
          {
            text: "Mit der Feile leicht bearbeiten — das ist kein richtiges Schneiden.",
            isCorrect: false,
            explanation:
              "K.O.-Fehler. Auch Feilen ist eine Intervention am Diabetikerfuß die Verletzungsrisiko birgt. Die Kompetenzgrenze gilt für alle invasiven Nagelpflege-Handlungen — Schneiden, Feilen, Einreißen. Nur Podologe.",
            explanationB1:
              "Auch das ist falsch. Feilen ist auch eine Handlung am Fuß. Bei Diabetikern gilt: Keine Nagelpflege durch die Pflege — auch nicht mit der Feile.",
          },
        ],
      },
    },

    // Step 2.7 — Dialog: Inkontinenz-Assessment (2 Phasen)
    {
      stepId: "ce02-schmidt-beob-07-inkontinenz-assessment",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: [
        "ICS — International Continence Society: Klassifikation Belastungsinkontinenz",
        "AWMF S2k-Leitlinie (2023): Diagnostik und Therapie Harninkontinenz bei Frauen",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-beob-inkontinenz",
      tag: "pflege",
      contentC1: {
        title: "Inkontinenz ansprechen — behutsam",
        body: "Du sprichst das Thema Inkontinenz an. Frau Schmidt ist leicht angespannt — das Thema ist ihr unangenehm. Du wählst deinen Einstieg.",
        glossarBegriffe: ["Belastungsinkontinenz"],
      },
      contentB1: {
        title: "Inkontinenz ansprechen",
        body: "Du fragst Frau Schmidt über das Thema Harnverlust. Das ist für sie unangenehm. Du wählst wie du anfängst.",
        glossarBegriffe: ["Belastungsinkontinenz"],
      },
      question: {
        fragetext:
          "Wie sprichst du das Thema Inkontinenz bei Frau Schmidt an?",
        patientName: "Frau Schmidt",
        dialogPhases: [
          {
            context:
              "Du bist bei Frau Schmidt, das Assessment läuft. Du weißt aus der Übergabe: Belastungsinkontinenz seit 2 Jahren. Du fragst:",
            contextB1:
              "Du weißt: Frau Schmidt verliert manchmal Urin. Das ist ihr unangenehm. Du fragst jetzt:",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Schmidt, ich möchte Sie noch etwas fragen, das manchmal unangenehm ist — haben Sie manchmal Probleme, den Harndrang rechtzeitig zu kontrollieren?\"",
                textB1:
                  "\"Frau Schmidt, darf ich etwas fragen, das manchmal schwierig ist — haben Sie manchmal Probleme, den Urin zu halten?\"",
                patientResponse:
                  "Frau Schmidt schweigt kurz. Sie schaut weg. Dann leise: \"Ja. Schon seit zwei Jahren. Aber ich rede nicht gerne drüber.\"",
                patientResponseB1:
                  "Frau Schmidt schweigt kurz. Sie schaut weg. Dann: \"Ja. Schon seit 2 Jahren. Aber ich rede nicht gerne drüber.\"",
                score: 3,
                feedback:
                  "Gut eröffnet. Die Ankündigung \"das manchmal unangenehm ist\" signalisiert Verständnis vorab — das senkt die Schambarriere. Dein Einstieg ist respektvoll und klar.",
                feedbackB1:
                  "Gut. Du kündigst an dass es unangenehm sein kann — das hilft Frau Schmidt. Die Frage ist klar und respektvoll.",
              },
              {
                text: "\"Haben Sie eine Inkontinenz? Das steht in der Übergabe.\"",
                textB1:
                  "\"Sie haben Inkontinenz, das steht in der Übergabe. Stimmt das?\"",
                patientResponse:
                  "Frau Schmidt schaut kurz irritiert. \"Ich weiß ja selbst was ich hab.\"",
                patientResponseB1:
                  "Frau Schmidt schaut irritiert. \"Ich weiß ja selbst was ich hab.\"",
                score: 0,
                feedback:
                  "Zu konfrontativ und entwürdigend. \"Das steht in der Übergabe\" macht das Problem zu einem Akteneintrag, nicht zu einem menschlichen Thema. Frau Schmidt fühlt sich nicht gefragt, sondern überführt. Besser: Einfühlsam einleiten.",
                feedbackB1:
                  "Das ist nicht gut. \"Steht in der Übergabe\" klingt kalt. Frau Schmidt fühlt sich nicht gehört — sie fühlt sich überführt. Besser: Sanft fragen, nicht konfrontieren.",
              },
              {
                text: "\"Das muss ich auch noch fragen — haben Sie Inkontinenz?\"",
                textB1:
                  "\"Ich muss das noch fragen: haben Sie Inkontinenz?\"",
                patientResponse:
                  "Frau Schmidt zuckt leicht zusammen. \"Ja … schon.\"",
                patientResponseB1:
                  "Frau Schmidt antwortet kurz: \"Ja … schon.\"",
                score: 1,
                feedback:
                  "\"Muss ich auch noch\" klingt wie eine Abarbeitung — als ob das Thema lästig wäre. Frau Schmidt spürt das. Das Thema verdient einen eigenen, ruhigen Einstieg.",
                feedbackB1:
                  "\"Muss ich auch noch\" klingt wie Abarbeitung. Das Thema ist für Frau Schmidt wichtig und schwierig. Es verdient einen eigenen ruhigen Moment.",
              },
            ],
          },
          {
            context:
              "Frau Schmidt schweigt. Sie schaut weg. Die Stille hält an. Du reagierst:",
            contextB1:
              "Frau Schmidt schweigt kurz. Sie schaut weg. Was sagst du jetzt?",
            speaker: "Du",
            options: [
              {
                text: "\"Das ist sehr häufig bei Frauen in Ihrem Alter — das müssen Sie nicht alleine tragen.\"",
                textB1:
                  "\"Das haben viele Frauen. Das müssen Sie nicht alleine tragen.\"",
                patientResponse:
                  "Frau Schmidt atmet leicht aus. \"Wissen Sie — ich geh schon seit 2 Jahren nicht mehr in den Sportverein. Wegen dem. Das ist das Schlimmste.\"",
                patientResponseB1:
                  "Frau Schmidt atmet aus. \"Ich geh schon 2 Jahre nicht mehr in den Sportverein. Wegen dem. Das ist das Schlimmste.\"",
                score: 3,
                feedback:
                  "Normalisierung senkt die Schambarriere. Du machst das Thema nicht kleiner — du machst Frau Schmidt größer: Sie ist nicht allein damit. Das öffnet das Gespräch. (ICS, Klassifikation Belastungsinkontinenz)",
                feedbackB1:
                  "Sehr gut. \"Das haben viele Frauen\" — normalisieren (= normal machen) hilft Frau Schmidt. Sie fühlt sich weniger allein. Das öffnet das Gespräch.",
              },
              {
                text: "Schweigen — Stille zulassen, nichts sagen.",
                textB1:
                  "Du wartest still. Du sagst nichts.",
                patientResponse:
                  "Frau Schmidt schaut weiter weg. Die Stille wächst. Sie sagt gar nichts mehr.",
                patientResponseB1:
                  "Frau Schmidt schweigt weiter. Das Gespräch stockt.",
                score: 1,
                feedback:
                  "Kurze Stille zulassen kann hilfreich sein — aber hier braucht Frau Schmidt ein Signal dass du das Thema ernst nimmst und kein Urteil fällst. Stille allein reicht nicht.",
                feedbackB1:
                  "Stille kann manchmal helfen — aber Frau Schmidt braucht jetzt ein Signal: Ich urteile nicht. Das Signal ist ein Satz, keine Stille.",
              },
              {
                text: "\"Das ist wichtig für unsere Dokumentation, bitte antworten Sie.\"",
                textB1:
                  "\"Das ist wichtig für die Dokumentation. Bitte antworten Sie.\"",
                patientResponse:
                  "Frau Schmidt schaut kalt zurück. \"Dann schreiben Sie, was Sie wollen.\"",
                patientResponseB1:
                  "Frau Schmidt schaut weg. \"Dann schreiben Sie was Sie wollen.\"",
                score: 0,
                feedback:
                  "Schamverstärkend und respektlos. Das Thema wird zur Verwaltungsaufgabe degradiert. Frau Schmidt schließt sich komplett. Dokumentation ist eine Aufgabe der Pflege — keine Druckmittel gegen Patienten.",
                feedbackB1:
                  "Das ist sehr schlecht. Frau Schmidt wird unter Druck gesetzt. Das verletzt ihre Würde. Dokumentation ist deine Aufgabe — kein Argument gegen die Patientin.",
              },
            ],
          },
        ],
      },
    },

    // Step 2.8 — Categorize: Assessment-Zusammenfassung
    {
      stepId: "ce02-schmidt-beob-08-assessment-zusammenfassung",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-beob-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Assessment-Zusammenfassung — was hat welche Priorität?",
        body: "Du hast das Assessment abgeschlossen. Ordne die erhobenen Befunde in drei Kategorien: Was braucht sofortige Maßnahmen? Was beobachtest du täglich? Was planst du für die Entlassung?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Befunde sortieren — was ist wann wichtig?",
        body: "Sortiere alle Befunde in 3 Gruppen: Was muss sofort passieren? Was schaust du täglich? Was planst du für die Entlassung?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne jeden Befund der richtigen Kategorie zu.",
        categories: [
          { name: "Sofortmaßnahme nötig" },
          { name: "Täglich beobachten" },
          { name: "Entlassungsplanung" },
        ],
        categoryItems: [
          {
            text: "Diabetisches Fußsyndrom Wagner 1 → Podologen-Überweisung einleiten",
            correctCategory: 0,
          },
          {
            text: "Albumin 31 g/l, NRS-Score 3 → Ernährungsintervention starten",
            correctCategory: 0,
          },
          {
            text: "BZ-Tagesprofil (nüchtern, postprandial)",
            correctCategory: 1,
          },
          {
            text: "Hautfalten täglich inspizieren (submammär, Leisten, Abdomen)",
            correctCategory: 1,
          },
          {
            text: "Inkontinenz-Häufigkeit und Bewältigungsstrategie beobachten",
            correctCategory: 1,
          },
          {
            text: "Ernährungsberatung ambulant nach Entlassung koordinieren",
            correctCategory: 2,
          },
          {
            text: "Ambulante Podologie für nach dem Krankenhausaufenthalt",
            correctCategory: 2,
          },
          {
            text: "Gynäkologie-Überweisung für Inkontinenz-Behandlung",
            correctCategory: 2,
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 35,
};

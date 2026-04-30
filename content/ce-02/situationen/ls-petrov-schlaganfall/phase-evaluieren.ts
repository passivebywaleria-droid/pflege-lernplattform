// CE-02 Situation Petrov — Phase 5: Evaluieren
// Steps: 5 · Bloom: B4-B5 · Zeit: ~15-25 Min
// Quelle: phase-evaluieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-petrov-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — Ziele erreicht?",
  titelB1: "Auswerten — Was hat gewirkt?",
  kontext:
    "10:30 Uhr. Die Frühschicht neigt sich dem Ende. Frau Wegner kommt ins Zimmer und nickt dir zu: \"Gut gemacht. Zeig mir deine Evaluation.\" Du gehst systematisch durch — zielgeleitet, nicht nach Gefühl.\n\nHerr Petrov sitzt am Bettrand, die Beine hängen herunter. Er hält mit der linken Hand die Bettkante. Er schaut zum Fenster. Nach 13 Minuten an der Bettkante hat er den linken Daumen hochgezeigt.",
  kontextB1:
    "Es ist 10:30 Uhr. Die Früh-Schicht ist fast vorbei. Frau Wegner kommt ins Zimmer. Sie nickt dir zu: \"Gut gemacht. Zeig mir deine Evaluation.\" Evaluation (= Auswertung): Hast du deine Pflege-Ziele erreicht? Du prüfst das systematisch — nicht nach Gefühl. Herr Petrov sitzt am Bett-Rand. Er hält die Bett-Kante mit der linken Hand. Er schaut zum Fenster. Er hat den Daumen nach oben gezeigt — nach 13 Minuten.",
  kernSteps: [
    // Step 5.1 — Categorize: Ziel-Check
    {
      stepId: "ce02-petrov-eval-01-zielcheck",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Fiechter/Meier 1981 — Pflegeprozess",
        "DNQP Mobilität 2020",
        "IDDSI 2019",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-petrov-eval-zielcheck",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele: erreicht — teilweise — nicht erreicht?",
        body: "Vier Pflegeziele aus Phase 3 — ordne jeden Ist-Zustand der richtigen Kategorie zu. Evaluation ist Ist-Soll-Vergleich mit Konsequnz — nicht \"gut\" oder \"schlecht\".",
        glossarBegriffe: ["Evaluation", "Pflegeziel", "SMART"],
      },
      contentB1: {
        title: "Hast du deine Pflege-Ziele erreicht?",
        body: "Du prüfst 4 Pflege-Ziele. Was ist passiert? Ordne den Ist-Zustand der richtigen Kategorie zu.",
        glossarBegriffe: ["Evaluation", "Pflegeziel"],
      },
      question: {
        fragetext:
          "Ordne den Ist-Zustand jedes Pflegeziels der richtigen Bewertungskategorie zu.",
        categories: [
          { name: "Erreicht" },
          { name: "Teilweise erreicht" },
          { name: "Nicht erreicht — Konsequnz nötig" },
        ],
        categoryItems: [
          {
            text: "Ziel: Keine Aspiration. → Komplikation K1 aufgetreten: Verschlucken beim Trinken. Gestoppt, stabilisiert, kein Röntgenbefund.",
            correctCategory: 1,
          },
          {
            text: "Ziel: 10 Min an Bettkante. → Herr Petrov saß 13 Minuten.",
            correctCategory: 0,
          },
          {
            text: "Ziel: Atembeobachtung stabil. → Hörbares Atemgeräusch unauffällig, Atemfrequenz 17/Min, kein hörbares Rasseln am Bett.",
            correctCategory: 0,
          },
          {
            text: "Ziel: Katheter-Bilanz dokumentiert. → 1.800 ml/24h, Urin goldgelb, Beutel hängt korrekt.",
            correctCategory: 0,
          },
        ],
      },
    },

    // Step 5.2 — MC: Schluckstatus nach Aspiration
    {
      stepId: "ce02-petrov-eval-02-schluckstatus-neu",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "IDDSI 2019",
        "DGG/DGN 2020 Neurogene Dysphagie",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-eval-schluckstatus-konsequnz",
      tag: "krankheitslehre",
      contentC1: {
        title: "Konsequnz nach dem Aspirationsereignis",
        body: "Beim Frühstück kam es zu einem Aspirationsereignis. Was ist die richtige Konsequnz für die Mittagsmahlzeit?",
        glossarBegriffe: [
          "IDDSI",
          "Schlucktherapeutin",
          "Dysphagie",
          "Konsistenz",
        ],
      },
      contentB1: {
        title: "Was machst du jetzt für das Mittag-Essen?",
        body: "Beim Frühstück hat Herr Petrov sich verschluckt. Was machst du jetzt für das Mittag-Essen?",
        glossarBegriffe: ["IDDSI", "Schlucktherapeutin"],
      },
      question: {
        fragetext:
          "Beim Frühstück kam es zu einem Aspirationsereignis. Was ist jetzt die richtige Konsequnz für die Mittagsmahlzeit?",
        optionen: [
          {
            text: "Essen ganz stoppen bis zur ärztlichen Anordnung",
            isCorrect: false,
            explanation:
              "Zu radikal. Das Aspirationsereignis war ein Einzelereignis mit sofortiger Stabilisierung — keine manifeste Aspiration mit Atemkomplikation. Kompletter Essensstopp ohne ärztliche Rücksprache ist erst bei wiederholter Aspiration oder klinischen Zeichen einer Aspirationspneumonie indiziert.",
            explanationB1:
              "Zu viel. Das Verschlucken war einmal — danach war er stabil. Essen komplett stoppen ist zu früh ohne Arzt.",
          },
          {
            text: "Schlucktherapeutin und Arzt informieren — gemeinsam über Konsistenzanpassung (ggf. IDDSI Level 3) entscheiden",
            isCorrect: true,
            explanation:
              "Richtig. Stufenkonzept nach IDDSI 2019: Level 2 (mäßig verdickt) → Level 3 (stark verdickt) als mögliche nächste Anpassung. Die Schlucktherapeutin ist die Primäransprechpartnerin bei Dysphagie-Verschlechterung — die Konsistenzanpassung ist eine interdisziplinäre Entscheidung (Schlucktherapeutin + Arzt), keine pflegerische Eigenkompetenz. Pflege beobachtet, dokumentiert und informiert proaktiv. (IDDSI 2019; DGG/DGN 2020)",
            explanationB1:
              "Richtig. Informiere die Schluck-Therapeutin und den Arzt. Sie entscheiden gemeinsam, ob die Flüssigkeit dicker gemacht wird (= Level 3). Die Konsistenz-Änderung ist nicht deine Entscheidung allein — du beobachtest und informierst.",
          },
          {
            text: "Normales Essen anbieten — er hat ja danach wieder ruhig geatmet",
            isCorrect: false,
            explanation:
              "Falsch. Stille Aspiration (= Flüssigkeit gelangt in die Atemwege ohne Husten) ist möglich. Nach einem Aspirationsereignis ist das Risiko erhöht. Zurück zu Level 2 (oder höher) — auf keinen Fall zu unkontrollierter Konsistenz.",
            explanationB1:
              "Falsch. Er hat sich verschluckt — das Risiko ist jetzt höher. Zurück zu normaler Flüssigkeit ist nicht sicher.",
          },
          {
            text: "Nur noch Sondenkost — oral essen ist zu gefährlich",
            isCorrect: false,
            explanation:
              "Zu früh für Sondenkost. Die Entscheidung für Sondenernährung ist interdisziplinär und braucht mehr als ein Aspirationsereignis als Grundlage. Zuerst: Konsistenz anpassen + Schlucktherapeutin evaluieren lassen.",
            explanationB1:
              "Zu früh. Eine Sonde ist eine große Entscheidung. Zuerst: Konsistenz anpassen und die Schluck-Therapeutin fragen.",
          },
        ],
      },
    },

    // Step 5.3 — Slider: Mobilisations-Prognose (Neuroplastizität)
    {
      stepId: "ce02-petrov-eval-03-mobilisations-fortschritt",
      phase: 5,
      stepType: "slider",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "DGG 2022 S1-Leitlinie Frühmobilisation",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-eval-neuroplastizität",
      tag: "anatomie",
      transition: "Prognose macht Hoffnung. Jetzt noch eine offene Frage: Der Katheter. Bleibt er oder geht er?",
      contentC1: {
        title: "Schätzfrage: Anteil mit Gehfähigkeit nach Reha",
        body: "Pflegerische Kraft-Beurteilung erfolgt mit der MRC-Skala (0-5 nach Janda) — keine Prozentwerte. Diese Schätzfrage zielt auf einen anderen Prognose-Marker: Welcher prozentuale Anteil aller Schlaganfall-Patienten mit Hemiparese erreicht nach 3-6 Monaten intensiver Frührehabilitation wieder eine Gehfähigkeit (mit oder ohne Hilfsmittel)?",
        glossarBegriffe: [
          "Neuroplastizität",
          "Rehabilitation",
          "Frühmobilisation",
          "MRC-Skala",
        ],
      },
      contentB1: {
        title: "Schätzfrage: Wie viele Patienten gehen wieder?",
        body: "Pflege bewertet Muskel-Kraft mit der MRC-Skala 0-5 (nicht in Prozent). Diese Frage ist anders: Wie viele Schlaganfall-Patienten mit Halbseiten-Schwäche können nach 3-6 Monaten Reha wieder gehen — in Prozent aller Patienten?",
        glossarBegriffe: ["Neuroplastizität", "Reha", "MRC-Skala"],
      },
      question: {
        fragetext:
          "Welcher Anteil der Schlaganfall-Patienten mit Hemiparese erreicht nach 3-6 Monaten intensiver Frührehabilitation eine Gehfähigkeit (mit/ohne Hilfsmittel)?",
        slider: {
          instruction: "Schätze den realistischen Prozentwert.",
          unit: "%",
          min: 0,
          max: 100,
          step: 5,
          correctValue: 70,
          tolerance: 15,
          explanation:
            "60-80 % der Schlaganfall-Patienten mit Hemiparese erreichen nach 3-6 Monaten intensiver Frührehabilitation eine Gehfähigkeit mit oder ohne Hilfsmittel (AWMF S3 Schlaganfall; vgl. Copenhagen Stroke Study, Jorgensen et al. 1995). Hinweis zur pflegerischen Kraft-Beurteilung: Das machst du im Alltag NICHT in Prozent, sondern mit der MRC-Skala 0-5 (0 = keine Bewegung, 1 = sichtbare Kontraktion ohne Bewegung, 2 = Bewegung unter Ausschluss der Schwerkraft, 3 = gegen Schwerkraft, 4 = gegen leichten Widerstand, 5 = volle Kraft). Frühmobilisation ab Tag 1 verbessert die Prognose erheblich; Neuroplastizität ist in den ersten 3 Monaten am stärksten. Was du heute tust (Bobath, Bettkante, Atemübungen) beeinflusst direkt die Funktion morgen. (AWMF S3 Schlaganfall; DGG 2022)",
          explanationB1:
            "Etwa 60-80 von 100 Schlaganfall-Patienten mit Halbseiten-Schwäche können nach Monaten Reha wieder gehen — mit oder ohne Hilfe. Pflege bewertet Kraft sonst mit der MRC-Skala 0-5: 0 = keine Bewegung, 5 = volle Kraft. In den ersten 3 Monaten kann das Gehirn neue Wege bilden. Was du heute tust ist wichtig für morgen.",
        },
      },
    },

    // Step 5.3b — Inline-Wissen: Katheter-Indikationsprüfung (Wiederbegegnung)
    // Vertiefte Wiederbegegnung aus Phase 1 (BVK-Grundlagen) + Phase 2 (CAUTI-Prävention).
    // Jetzt: Wie entscheidet man ob der Katheter raus kann?
    {
      stepId: "ce02-petrov-eval-03b-katheter-indikation",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "III.2",
      quellen: [
        "KRINKO 2015 — Prävention katheter-assoziierter Harnwegsinfektionen",
        "CDC/HICPAC 2019 — CAUTI Prevention",
        "§ 4 PflBG — Vorbehaltene Tätigkeiten",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-eval-katheter-indikation",
      tag: "pflege",
      themaPrimaer: "harnausscheidung",
      themenSekundaer: ["blasenkatheter"],
      transition: "Du weißt jetzt wann ein Katheter gehen kann — und wann nicht. Jetzt die Entscheidung für Herrn Petrov.",
      contentC1: {
        title: "Wann darf der Katheter raus? — Indikationsprüfung",
        body: "",
        glossarBegriffe: ["Indikationsprüfung", "BVK", "Restharn", "Toilettentraining"],
      },
      contentB1: {
        title: "Wann kann der Katheter raus?",
        body: "",
        glossarBegriffe: ["Katheter", "Indikation"],
      },
      inlineWissen: {
        bausteinRef: "harnausscheidung-katheter-indikation",
        wiederbegegnung: {
          basisBausteinId: "harnausscheidung-bvk-grundlagen",
          basisPatient: "Herr Petrov",
          vertiefung:
            "Du kennst BVK-Grundlagen aus Phase 1 und die 5 Hygieneregeln aus Phase 2. Jetzt die nächste Frage: Wann kann der Katheter raus? Und wer entscheidet das?",
          vertiefungB1:
            "Du kennst den Katheter aus Phase 1 und die Hygiene-Regeln aus Phase 2. Jetzt: Wann kann der Katheter raus? Wer entscheidet?",
        },
        storyAufhaenger:
          "Der Katheter liegt seit 5 Tagen. Herr Petrov hat heute 13 Minuten an der Bettkante gesessen. Er wird mobiler. Die Frage drängt sich auf: Braucht er den Katheter noch? Oder ist jeder weitere Tag nur noch Risiko ohne Nutzen?",
        storyAufhaengerB1:
          "Der Katheter liegt seit 5 Tagen. Herr Petrov wird mobiler — 13 Minuten an der Bett-Kante. Braucht er den Katheter noch? Oder schadet er jetzt mehr als er hilft?",
        kerntext:
          "**Wer entscheidet?** Die Entfernung eines BVK ist eine ärztliche Anordnung. Aber: Pflege beobachtet täglich und kommuniziert proaktiv. § 4 PflBG: Pflegeprozesssteuerung ist Pflegekompetenz.\n\n**Indikations-Checkliste (KRINKO 2015):**\n\n• Kann der Patient zur Toilette gebracht werden oder ein Urinal nutzen? Bei Herrn Petrov: Er sitzt an der Bettkante → Urinal im Sitzen möglich?\n\n• Ist die Bilanzierung noch zwingend nötig? Bei stabilem Kreislauf und oraler Aufnahme: oft nicht mehr.\n\n• Gibt es eine urologische oder chirurgische Indikation? Bei Apoplex: in der Regel nein.\n\n• Restharn-Problematik? Nach BVK-Entfernung: Restharnkontrolle per Ultraschall (nicht Katheter!) innerhalb 6-8 h.\n\n**Der Prozess:**\n\n1. Pflege beobachtet und dokumentiert (Urin unauffällig, Patient wird mobiler)\n\n2. Pflege meldet dem Arzt: \"Indikation BVK prüfen — Tag 5, Mobilisation begonnen, Urin unauffällig\"\n\n3. Arzt ordnet Entfernung an\n\n4. Pflege entfernt BVK, startet Toilettentraining (alle 2-3 h anbieten)\n\n5. Restharnkontrolle nach 6-8 h",
        kerntextB1:
          "**Wer entscheidet?** Der Arzt gibt die Anordnung. Aber: Du als Pflege beobachtest und sagst Bescheid.\n\n**Wann kann der Katheter raus?**\n\n• Kann Herr Petrov ein Urinal benutzen? Er sitzt an der Bett-Kante — vielleicht möglich.\n\n• Braucht er noch eine genaue Urin-Messung? Wenn der Kreislauf stabil ist: oft nicht mehr.\n\n• Ist der Urin unauffällig? Goldgelb, genug Menge, keine Rötung an der Eintrittsstelle.\n\n**So geht es:**\n\n1. Du beobachtest und schreibst auf.\n\n2. Du sagst dem Arzt: \"Tag 5, Mobilisation begonnen, Urin normal — Katheter noch nötig?\"\n\n3. Der Arzt sagt: \"Raus.\" Du entfernst ihn.\n\n4. Danach: Alle 2-3 Stunden Toilette anbieten.\n\n5. Nach 6-8 Stunden: Ultraschall-Kontrolle ob Restharnung zurückbleibt.",
        faustregel: "Pflege sieht den Patienten am häufigsten. Pflege erkennt zuerst wann der Katheter gehen kann.",
        faustregelB1: "Du siehst Herrn Petrov am häufigsten. Du erkennst als erstes: Der Katheter muss raus.",
        spektrum: [
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Post-OP, BVK-Entfernung am 1.-2. POT",
            kurzbeschreibung:
              "Standard bei Hüft-TEP: BVK am 1.-2. postoperativen Tag entfernen, wenn die Patientin aufstehen kann. Klare Regel, wenig Diskussion nötig.",
          },
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz, BVK als Fixierung",
            kurzbeschreibung:
              "Bei Bauer ist der BVK ein ethisches Problem: Er versteht ihn nicht, zieht daran, ist dadurch unruhig. Hier ist die Entfernung nicht nur medizinisch sondern auch ethisch dringend — Alternativen (Kondomurinal, Inkontinenzversorgung) früh prüfen.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Ambulant, Selbstkatheterismus",
            kurzbeschreibung:
              "Kovac braucht keinen Dauerkatheter — sie führt den intermittierenden Einmalkatheter selbst durch (ISK). Anleitung zur Selbstkatheterisierung ist eine pflegerische Kompetenz.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Herr Petrov hat 13 Minuten an der Bettkante gesessen, Urin ist unauffällig, Tag 5. Wie kommunizierst du die Katheter-Frage?",
          rueckseite:
            "Proaktive Kommunikation: An Praxisanleiterin melden, gemeinsam Arzt informieren: \"Tag 5, Mobilisation begonnen, Urin unauffällig — Indikation BVK prüfen.\" Arzt ordnet an, Pflege entfernt + startet Toilettentraining. Restharnkontrolle per Ultraschall nach 6-8 h. Spektrum: Yilmaz (Standard-Entfernung 1.-2. POT), Bauer (ethisches Problem, Kondomurinal prüfen), Kovac (ISK ambulant). Faustregel: **Pflege erkennt zuerst wann der Katheter gehen kann.**",
        },
      },
    },

    // Step 5.4 — Branching: Katheter-Entscheidung (Klein-Branching)
    {
      stepId: "ce02-petrov-eval-04-katheter-entscheidung",
      phase: 5,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: [
        "KRINKO 2015 Prävention katheter-assoziierter Harnwegsinfektionen",
        "CDC/HICPAC 2019 CAUTI-Prävention",
        "§ 4 PflBG",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-petrov-eval-katheter-management",
      tag: "pflege",
      contentC1: {
        title: "Proaktives Katheter-Management",
        body: "Der BVK liegt seit 5 Tagen. Laut Arztanordnung: Re-Evaluation nach 14 Tagen. Du weißt: Jeder Tag mit BVK = erhöhtes CAUTI-Risiko. Was tust du?",
        glossarBegriffe: ["CAUTI", "BVK", "KRINKO", "proaktiv"],
      },
      contentB1: {
        title: "Der Katheter — was tust du?",
        body: "Der Katheter liegt seit 5 Tagen. Der Arzt hat gesagt: Kontrolle nach 14 Tagen. Du weißt: Jeder Tag mit Katheter erhöht das Risiko für eine Harnwegs-Infektion. Was tust du?",
        glossarBegriffe: ["CAUTI", "BVK", "Katheter"],
      },
      question: {
        fragetext:
          "BVK liegt seit 5 Tagen — Arztanordnung: Re-Evaluation in 14 Tagen. Jeder Kathetertag = erhöhtes CAUTI-Risiko. Was tust du?",
        branchingOptions: [
          {
            text: "Ich warte die 14 Tage ab — Arztanordnung ist Arztanordnung.",
            isCorrect: false,
            feedback:
              "Passiv-Abwarten ohne aktive Beobachtung und Kommunikation ist keine Pflegequalität. KRINKO 2015 empfiehlt: BVK so früh wie möglich entfernen — täglich neu beurteilen ob er noch nötig ist. Pflegerische Aufgabe: Beobachten, dokumentieren, proaktiv kommunizieren. Eine Arztanordnung gibt das Datum als Maximum, nicht als Pflicht.",
            feedbackB1:
              "Einfach warten ist nicht Pflege-Qualität. Jeder Tag mit Katheter erhöht das Risiko. Du beobachtest aktiv und sagst dem Arzt Bescheid.",
          },
          {
            text: "Ich melde Frau Wegner (Praxisanleiterin) den Befund + meinen Vorschlag, dass wir den Arzt heute über die mögliche frühere Entfernung informieren — und gehe das Gespräch ggf. mit ihr gemeinsam.",
            isCorrect: true,
            feedback:
              "Proaktive Kommunikation im realen Hierarchie-Workflow — genau richtig. Als Pflegeschülerin im 2./3. AD führst du selten allein die Arzt-Kommunikation; du meldest deiner Praxisanleiterin den Befund (Tag 5, unauffällig, kein klinischer Infektionsverdacht) und deinen Vorschlag, sie spricht oder begleitet das Gespräch mit dem Arzt. Das ist pflegerische Eigenverantwortung nach § 4 PflBG und entspricht KRINKO 2015: Katheter so früh wie möglich entfernen. Du arbeitest nicht gegen die Anordnung — du ergänzt sie mit aktueller Beobachtung.",
            feedbackB1:
              "Richtig. Du sagst Frau Wegner Bescheid: \"Der Katheter liegt seit 5 Tagen. Der Urin ist unauffällig. Können wir den Arzt fragen, ob wir früher entfernen?\" Sie spricht mit dem Arzt — oder ihr macht das gemeinsam. Das ist proaktiv. Jeder Tag weniger mit Katheter = weniger Risiko.",
          },
          {
            text: "Ich entferne den Katheter selbst — 5 Tage ist lang genug.",
            isCorrect: false,
            feedback:
              "Nein. BVK-Entfernung ist ärztliche Anordnungspflicht — du kannst das nicht eigenständig entscheiden. Pflegerische Aufgabe ist das Vorbereiten, Beobachten, Informieren. Die Entfernung selbst ist dann durchführbar — aber nur nach Anordnung.",
            feedbackB1:
              "Nein. Du darfst das nicht alleine entscheiden. Erst den Arzt informieren. Der Arzt gibt die Anordnung — dann kannst du den Katheter entfernen.",
          },
        ],
      },
    },

    // Step 5.5 — Reflection: Natalyas Frage
    {
      stepId: "ce02-petrov-eval-05-reflexion-natalya",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "ICN 2021 Code of Ethics for Nurses",
        "§ 630f BGB — Behandlungsdokumentation",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-petrov-eval-reflexion-angehörige",
      tag: "pflege",
      contentC1: {
        title: "Reflexion: \"Wird er wieder normal?\"",
        body: "Stell dir vor, Natalya fragt dich beim Weggehen:\n\n\"Wird er wieder normal?\"\n\nDu bist Pflegeschüler. Du kennst die Prognose nicht. Du darfst Hoffnung geben — aber keine Versprechen machen. Wie antwortest du — und was sagst du nicht?",
        glossarBegriffe: ["Prognose", "Autonomie", "Aufklärungspflicht"],
      },
      contentB1: {
        title: "Reflexion: Was sagst du Natalya?",
        body: "Natalya fragt dich beim Weggehen: \"Wird er wieder normal?\" Du bist Pflege-Schüler. Du weißt die Prognose (= Vorhersage) nicht. Was sagst du?",
        glossarBegriffe: ["Prognose"],
      },
      question: {
        reflection: {
          prompt:
            "Wie antwortest du auf Natalyas Frage? Bedenke: Ehrlichkeit ohne Entmutigung. Keine medizinischen Prognose-Aussagen als Pflegeschüler. Verweis auf das richtige Team. Anerkennung ihrer Rolle.",
          placeholder:
            "\"Ich kann Ihnen das nicht sagen — aber...\"",
          systemPrompt:
            "Prüfe die Reflexion auf folgende Kriterien: 1) Ehrlich — keine falschen Versprechen. 2) Nicht entmutigend — Hoffnung bleibt. 3) Verweis auf Arzt/Reha-Team für die Prognose. 4) Anerkennung von Natalyas Rolle und Kraft. 5) Keine medizinischen Prognose-Aussagen (Prozente, Zeitrahmen) vom Pflegeschüler. Feedback: Sandwich-Prinzip (was gut war + was fehlt + Ermutigung).",
        },
        fragetext:
          "Wie antwortest du Natalya auf die Frage: \"Wird er wieder normal?\"",
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 22,
};

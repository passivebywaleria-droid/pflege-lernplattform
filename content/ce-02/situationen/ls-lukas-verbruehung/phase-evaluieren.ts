// CE-02 Situation Lukas — Phase 5: Evaluieren
// Steps: 4 · Bloom: B4–B5 · Zeit: ~10–20 Min
// Szenen-Sprung: nächster Morgen, Frühdienst
// Quelle: phase-evaluieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-lukas-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — War die Versorgung erfolgreich?",
  titelB1: "Was hat sich verändert?",
  kontext:
    "Szenen-Sprung: Es ist der nächste Morgen. Lukas hat die Nacht auf der Kinderstation verbracht, Sandra hat neben ihm geschlafen. Kevin ist nach Hause gefahren und ist jetzt wieder da — ruhiger als gestern. Das Gespräch mit Frau Fink hat geholfen: Sie hat erklärt was passiert ist, was die Einschätzung ergeben hat (keine konkreten Anhaltspunkte für Kindeswohlgefährdung), und was der nächste Schritt ist (Abschlussdokumentation, Entlassung mit Anschreiben an Kinderarzt).\n\nDu übernimmst Lukas im Frühdienst. Kathrin begleitet dich.\n\nJetzt ist Evaluation: War die gestrige Versorgung erfolgreich? Was hat sich verändert? Was fehlt noch?",
  kontextB1:
    "Es ist der nächste Morgen. Lukas hat die Nacht in der Klinik geschlafen. Sandra war dabei. Kevin ist jetzt wieder da — ruhiger. Das Gespräch mit Frau Fink hat geholfen: Kein Verdacht, alles dokumentiert.\n\nDu übernimmst Lukas im Frühdienst. Kathrin ist dabei. Jetzt schaust du: Was hat die gestrige Versorgung gebracht? Was muss noch gemacht werden?",
  kernSteps: [
    // Step 5.0b — Inline-Wissen: Wundheilungsphasen
    // Phase 5 beginnt — nächster Morgen. Bevor der Schüler evaluiert welche Pflegeziele
    // erreicht sind (Step 5.1), braucht er das Grundwissen: Was sind die Phasen der
    // Wundheilung — und woran erkenne ich ob die Heilung normal verläuft?
    {
      stepId: "ce02-lukas-eval-00b-wundheilungsphasen",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DGV 2023 — Leitlinie Thermische Verletzungen",
        "DNQP 2024 — Expertenstandard Pflege von Menschen mit chronischen Wunden",
        "Hoehl/Kullick 2019 — Kinderkrankenpflege",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-eval-wundheilung-grundlagen",
      tag: "krankheitslehre",
      themaPrimaer: "haut",
      themenSekundaer: [],
      transition: "Du kennst die Phasen. Jetzt: Wo steht Lukas am Morgen danach?",
      contentC1: {
        title: "Wundheilung — die 3 Phasen erkennen",
        body: "",
        glossarBegriffe: ["Exsudationsphase", "Granulationsphase", "Epithelisierungsphase", "Infektionszeichen"],
      },
      contentB1: {
        title: "Wie heilt eine Wunde? Die 3 Phasen",
        body: "",
        glossarBegriffe: ["Wundheilung", "Infektionszeichen"],
      },
      inlineWissen: {
        bausteinRef: "haut-wundheilungsphasen",
        storyAufhaenger:
          "Es ist der nächste Morgen. Du übernimmst Lukas im Frühdienst und sollst den Wundstatus beurteilen: Heilt die Wunde normal? Bevor du hinschaust — was sind die 3 Phasen der Wundheilung, und was ist bei Lukas am Tag 2 zu erwarten?",
        storyAufhaengerB1:
          "Es ist der nächste Morgen. Du schaust nach Lukas' Wunde. Heilt sie normal? Was sind die 3 Phasen der Wundheilung?",
        kerntext:
          "**3 Phasen der Wundheilung (DGV 2023, DNQP 2024):**\n\n**Phase 1: Exsudation (Tag 1-3)**\n• Wunde nässt — das ist normal. Exsudat transportiert Immunzellen und Wachstumsfaktoren.\n• Leichte Rötung + Wärme in der Wundumgebung = physiologisch.\n• Bei Lukas (Tag 2): Erwarten wir klares bis leicht gelbliches Exsudat, intakte Blasen, keine Rötungsausbreitung.\n\n**Phase 2: Granulation (Tag 3-21)**\n• Neue Gefäße sprießen (rosa-rotes, körniges Gewebe = Granulationsgewebe).\n• Wunde füllt sich von unten auf.\n• Bei Grad 2a: Diese Phase ist kurz — die Dermis ist nur oberflächlich betroffen.\n\n**Phase 3: Epithelisierung (ab Tag 7-14)**\n• Neue Hautzellen wandern über die Wundfläche.\n• Wunde schließt sich von den Rändern her.\n• Bei Lukas (Grad 2a): Vollständige Heilung in **10-14 Tagen** ohne Narbenbildung.\n\n**Alarmsignale — Infektion erkennen:**\n• Zunehmendes Rötungsareal um die Wunde (**Rötungswall**)\n• Eitriges, übelriechendes Exsudat (trüb, grünlich)\n• Fieber (>38,5 °C bei Kindern)\n• Zunehmender Schmerz statt abnehmender (KUSS steigt)\n\nBei Lukas heute Morgen sollte KEINES dieser Zeichen vorliegen — die Heilung verläuft planmäßig.",
        kerntextB1:
          "**3 Phasen der Wundheilung:**\n\n**Phase 1 (Tag 1-3): Nässende Phase**\n• Die Wunde nässt — das ist normal.\n• Leichte Rötung + Wärme um die Wunde herum = normal.\n\n**Phase 2 (Tag 3-21): Neue Haut wächst**\n• Rosa Gewebe entsteht (= Granulation).\n• Die Wunde füllt sich von unten.\n\n**Phase 3 (ab Tag 7): Wunde schließt sich**\n• Neue Hautzellen wandern über die Wunde.\n• Bei Lukas: Wunde heilt in **10-14 Tagen**.\n\n**Wann ist es gefährlich?**\n• Rötung breitet sich aus (= Rötungswall)\n• Eiter (trübes, grünes Wundwasser, riecht schlecht)\n• Fieber (über 38,5 °C)\n• Schmerz wird stärker statt schwächer",
        faustregel:
          "Exsudation → Granulation → Epithelisierung. Nässende Wunde am Tag 2 = normal. Rötungswall + Eiter + Fieber = Alarm.",
        faustregelB1:
          "Tag 1-3: Wunde nässt (normal). Tag 7-14: Wunde schließt sich. Eiter, Fieber, zunehmender Schmerz = Arzt rufen.",
        spektrum: [
          {
            patientName: "Frau Yilmaz (Dekubitus Kat. II)",
            situationsId: "ls-yilmaz-spirale2",
            hauptfaktor: "Chronische Wunde — verlangsamte Heilung",
            kurzbeschreibung:
              "Bei Frau Yilmaz' Dekubitus dauert die Heilung Wochen bis Monate — die Phasen sind dieselben, aber verzögert. Häufig stagniert die Granulation. Die Hauptmaßnahme dort ist Druckentlastung — ohne die heilt nichts.",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "OP-Wunde — primäre Wundheilung",
            kurzbeschreibung:
              "Frau Yilmaz' OP-Naht heilt primär (Wundränder liegen aneinander). Bei Lukas heilt die Verbrühung sekundär (offene Wundfläche, keine Naht). Sekundäre Heilung dauert länger und braucht feuchte Wundbehandlung.",
          },
          {
            patientName: "Frau Schmidt (Polyneuropathie)",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Wundheilungsstörung bei Diabetes",
            kurzbeschreibung:
              "Bei Frau Schmidt (Diabetes, Polyneuropathie) ist die Wundheilung generell verlangsamt — Mikroangiopathie schränkt die Gefäß-Neubildung in Phase 2 ein. Lukas hat keine Grunderkrankung → normale Heilungstempo.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Es ist Tag 2 nach Lukas' Verbrühung. Du siehst klares Exsudat, leichte Rötung um die Wunde, intakte Blasen. Ist das normal — und in welcher Heilungsphase befindet sich die Wunde?",
          rueckseite:
            "Ja, normal. Tag 2 = **Exsudationsphase** (Phase 1, Tag 1-3): Wunde nässt, Immunzellen werden transportiert, leichte Rötung + Wärme physiologisch.\n\n3 Phasen: Exsudation (1-3d) → Granulation (3-21d) → Epithelisierung (ab 7d). Grad 2a: vollständige Heilung in 10-14 Tagen.\n\nAlarmsignale: Rötungswall, Eiter, Fieber >38,5 °C, zunehmender Schmerz.\n\nSpektrum: Yilmaz/Dekubitus (chronisch, verzögert), Yilmaz/Hüft-TEP (primäre Heilung), Schmidt (Diabetes, verlangsamt).\n\nFaustregel: **Nässend am Tag 2 = normal. Rötungswall + Eiter + Fieber = Alarm.**",
        },
      },
    },

    // Step 5.1 — Categorize: Ziele erreicht / nicht erreicht
    {
      stepId: "ce02-lukas-eval-01-wundstatus",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DGV 2023", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-lukas-eval-wundstatus",
      tag: "krankheitslehre",
      contentC1: {
        title: "Pflegeziele evaluieren — was ist erreicht?",
        body: "Lukas' Befund heute Morgen wird beschrieben. Ordne jedes Ziel einer Kategorie zu: Erreicht, Teilweise erreicht, oder Noch offen. **KUSS** = Kindliche Unbehagens- und Schmerz-Skala (Büttner/Finke 2000), Schmerzmessung für Kinder 0–4 Jahre. **Rötungswall** = sich ausbreitendes Rötungsareal um die Wunde herum, klassisches Infektionszeichen (zusammen mit Schmerz, Wärme, Schwellung — Calor, Rubor, Dolor, Tumor). **Rötungswall (= Entzündungszeichen um die Wunde)** ist Alarmsignal — Arzt informieren. **Elterndynamik** = Verlauf der elterlichen Reaktion über die Zeit (typisches Muster: Schock → Schuld → Suche nach Kontrolle → Kooperation, Hoehl/Kullick 2019).",
        glossarBegriffe: ["Epithelisierung", "Exsikkose", "Rötungswall", "KUSS", "Rötungswall (= Entzündungszeichen um die Wunde)", "Elterndynamik"],
      },
      contentB1: {
        title: "Was ist besser? Was fehlt noch?",
        body: "Lukas' Zustand heute Morgen. Sortiere: Ist das Ziel erreicht, teilweise erreicht, oder noch offen? **KUSS** = Schmerz-Skala für kleine Kinder. **Rötungswall** = breite Rötung um die Wunde — Zeichen einer Entzündung, Arzt rufen. **Elterndynamik** = wie die Eltern reagieren über die Zeit.",
        glossarBegriffe: ["Rötungswall (= Entzündungszeichen um die Wunde)", "KUSS", "Rötungswall", "Elterndynamik"],
      },
      question: {
        fragetext:
          "Ordne jeden Befund / jedes Ziel der richtigen Evaluationskategorie zu.",
        categories: [
          { name: "Ziel erreicht" },
          { name: "Teilweise erreicht" },
          { name: "Ziel noch offen" },
        ],
        categoryItems: [
          {
            text: "Wundstatus: Blasen am linken Unterarm noch intakt, kein Rötungswall, kein Eiter, kein übler Geruch",
            correctCategory: 0,
          },
          {
            text: "Schmerzreduktion: KUSS-Skala jetzt 3/10 (gestern Aufnahme: 8/10, nach Analgesie: 6/10)",
            correctCategory: 0,
          },
          {
            text: "Trinkmenge: Nacht 380 ml getrunken — besser als gestern, aber noch unter Tagesziel (1160 ml)",
            correctCategory: 1,
          },
          {
            text: "Elterndynamik: Sandra erholt, Kevin kooperativer, beide haben geschlafen",
            correctCategory: 0,
          },
          {
            text: "Entlassung vorbereiten: Wundversorgungsplan für Kinderarzt, Elternanleitung Verbandwechsel zuhause",
            correctCategory: 2,
          },
          {
            text: "Kinderschutz-Dokumentation: Frau Fink hat Screening abgeschlossen, kein Anhaltspunkt — Dokumentation liegt vor",
            correctCategory: 0,
          },
        ],
      },
    },

    // Step 5.2 — Timeline: KUSS-Verlauf
    {
      stepId: "ce02-lukas-eval-02-kuss-verlauf",
      phase: 5,
      stepType: "timeline",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Büttner/Finke 2000"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-eval-kuss-verlauf",
      tag: "pflege",
      contentC1: {
        title: "KUSS-Verlauf über 24 Stunden",
        body: "**KUSS** = Kindliche Unbehagens- und Schmerz-Skala (Büttner/Finke 2000), Score 0–10 über 5 Beobachtungs-Kategorien. Schaue dir den KUSS-Verlauf von Lukas über die letzten 24 Stunden an. Ordne die Maßnahmen den Momenten zu, in denen der Schmerzscore deutlich gefallen ist.",
        glossarBegriffe: ["KUSS-Skala", "Bedarfsanalgesie", "KUSS"],
      },
      contentB1: {
        title: "Wie hat sich der Schmerz verändert?",
        body: "**KUSS** = Schmerz-Skala für kleine Kinder. Lukas' Schmerzscore (KUSS) über 24 Stunden. Was hat den Schmerz gesenkt?",
        glossarBegriffe: ["KUSS-Skala (= Schmerzmessung für Kinder)", "KUSS"],
      },
      question: {
        fragetext:
          "Schaue dir den KUSS-Verlauf an. Was hat den Schmerz wann gesenkt?",
        timeline: {
          instruction:
            "KUSS-Datenpunkte über 24 Stunden — welche Maßnahmen haben welche Wirkung gezeigt?",
          events: [
            {
              id: "t1",
              time: "09:20 Uhr (Unfall) → Aufnahme",
              title: "KUSS 8/10",
              description:
                "Direkt nach dem Unfall bzw. bei Aufnahme. Sehr starker Schmerz, Schmerzmittel beginnt erst zu wirken. Lukas weint laut, greift nach Sandra.",
              descriptionB1:
                "Direkt nach dem Unfall bzw. bei Aufnahme. Schmerz sehr stark. Lukas weint.",
              highlight: true,
            },
            {
              id: "t2",
              time: "10:00 Uhr (Notaufnahme, i.v.-Analgesie)",
              title: "KUSS 6/10",
              description:
                "Nach i.v.-Schmerzmittelgabe in der Notaufnahme. Signifikante Reduktion — Analgesie wirkt. Lukas wimmert noch, ist aber nicht mehr im Maximalschmerz.",
              descriptionB1:
                "Nach Schmerzmittel in die Vene. Lukas wimmert noch — aber besser.",
            },
            {
              id: "t3",
              time: "13:30 Uhr (Verbandwechsel + Bedarfsanalgesie)",
              title: "KUSS 4/10",
              description:
                "Nach Pause + Bedarfsanalgesie + Ablenkung mit Seifenblasen + Sandra aktiv eingebunden. Lukas hat kurz geweint beim Lösen — danach aber ruhiger.",
              descriptionB1:
                "Nach Pause, neüm Schmerzmittel und Seifenblasen. Lukas ist ruhiger.",
            },
            {
              id: "t4",
              time: "18:00 Uhr (Schmerzmittel, reguläres Schema)",
              title: "KUSS 3/10",
              description:
                "Regelmäßige Analgesie nach Schema. Lukas hat 80 ml getrunken, Sandra ist entspannter. Wundruhe nach dem Verbandwechsel wirkt.",
              descriptionB1:
                "Schmerzmittel nach Plan. Lukas trinkt etwas. Sandra ist ruhiger.",
            },
            {
              id: "t5",
              time: "Nacht (06:00 Uhr Frühdienst)",
              title: "KUSS 3/10",
              description:
                "Schmerz stabil auf niedrigem Niveau. Kein Anstieg in der Nacht. 380 ml Trinkmenge über die Nacht — besser als gestern, Ziel noch nicht erreicht.",
              descriptionB1:
                "Schmerz stabil. Nacht war gut. Lukas hat mehr getrunken.",
              highlight: false,
            },
          ],
        },
      },
    },

    // Step 5.3 — Text (quote): Elterndynamik
    {
      stepId: "ce02-lukas-eval-03-elterndynamik",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-eval-elterndynamik",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Elterndynamik im Verlauf",
        body: "Heute Morgen fragt Kevin als erstes: \"Wie viel muss Lukas heute noch trinken? Ich könnte ihm das anbieten wenn Sandra schläft.\"\n\nDas ist ein Zeichen. Kevin, der gestern laut wurde und Frau Fink anfuhr — fragt heute nach dem Trinkangebot für Lukas. Er sucht aktiv nach einer Rolle.\n\nWie verändert sich die Elterndynamik im Verlauf einer Kinderstation-Aufnahme? Schock → Schuld → Suche nach Kontrolle → Kooperation. Nicht jede Familie schafft alle Stufen in einem Kurzaufenthalt. Aber Kevins Frage zeigt: Er ist in der Phase 'Suche nach Kontrolle' — und das ist der Übergang zur Kooperation.\n\nDie Pflegeperson kann diesen Verlauf aktiv unterstützen: durch Einbeziehung statt Ausschluss, durch Erklärung statt Bürokratiesprache, durch konkretes Lob für richtiges Verhalten ('Sie haben gestern Abend gut auf die Seifenblasen reagiert — das hat sehr geholfen').\n\nQuelle: _(Hoehl/Kullick 2019, Kap. Familienzentrierte Pflege)_",
        glossarBegriffe: ["Familienzentrierte Pflege", "Elterndynamik", "Trinken", "Verlauf"],
      },
      contentB1: {
        title: "Kevin fragt heute Morgen",
        body: "Kevin fragt heute Morgen: \"Wie viel muss Lukas trinken? Ich könnte anbieten wenn Sandra schläft.\"\n\nDas ist ein gutes Zeichen. Gestern war Kevin laut und defensiv. Heute sucht er eine Aufgabe für Lukas.\n\nEltern in der Klinik durchlaufen oft: Schock → Schuld → Suche nach Kontrolle → Kooperation. Kevin ist jetzt in 'Suche nach Kontrolle'. Das ist gut — du kannst ihm eine Aufgabe geben.\n\nWie? Erklären, einbeziehen, loben wenn etwas klappt. 'Die Seifenblasen gestern haben Lukas wirklich geholfen — danke.'",
        glossarBegriffe: ["Trinken", "Verlauf"],
      },
    },

    // Step 5.4 — Freetext: Offene Reflexionsfrage
    {
      stepId: "ce02-lukas-eval-04-reflexion-freetext",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "PflAPrV Anlage 1, Kompetenzbereich II.1 — Reflexion und Begründung pflegerischen Handelns",
        "DNQP (2020): Expertenstandard Schmerzmanagement in der Pflege bei akuten Schmerzen, 2. Aktualisierung",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-lukas-eval-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Deine Reflexion",
        body: "Was hat dich in dieser Situation am meisten überrascht — und was würdest du beim nächsten Mal anders machen? Schreibe 2–3 Sätze. Es gibt keine Musterlösung — deine ehrliche Antwort ist die richtige.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Was hat dich überrascht? Was würdest du beim nächsten Mal anders machen? Schreibe 2–3 Sätze — auf Deutsch, so wie du kannst.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was hat dich in dieser Situation am meisten überrascht — und was würdest du beim nächsten Mal anders machen?",
        musterantwort:
          "Überraschend war für mich, wie wichtig die Kommunikation mit Kevin war — ich hatte erwartet, dass die Wundversorgung das Schwierigste sein würde. Beim nächsten Mal würde ich früher und klarer das Kinderschutz-Screening erklären, bevor Kevin davon überrascht wird. Außerdem würde ich die Pause beim Verbandwechsel früher einplanen statt erst reagieren wenn Lukas schreit.",
        bewertungskriterien: [
          "Bezug auf konkrete Situation (Lukas, Kevin, Verbandwechsel, Kinderschutz)",
          "Ehrliche Reflexion — kein allgemeines 'ich mache alles gut'",
          "Mindestens eine konkrete Handlungsänderung für das nächste Mal",
        ],
        satzanfaengeB1: [
          "Überraschend war für mich ...",
          "Ich hätte beim nächsten Mal ... anders gemacht.",
          "Was ich gelernt habe: ...",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 15,
};

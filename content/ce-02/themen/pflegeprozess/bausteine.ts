// CE-02 Thema Pflegeprozess — Wissensbausteine (15 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/pflegeprozess/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥3)
// Stufe 2 = Hinweis (mittlere Schüler, Bloom 2-3)
// Stufe 3 = Erklärung als ContentStep (schwache Schüler, Bloom 1-2)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_PFLEGEPROZESS_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: pflegeprozess-definition (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeprozess-definition",
    themaId: "pflegeprozess",
    titel: "Definition: Was ist der Pflegeprozess?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du begleitest Frau Schmidt (72) zum ersten Mal. Was möchtest du zuerst herausfinden — und was tust du danach?",
      antwort:
        "Der Pflegeprozess beschreibt 6 aufeinanderfolgende Schritte: Informationssammlung → Erkennen von Problemen und Ressourcen → Festlegen von Pflegezielen → Planung der Pflegemaßnahmen → Durchführung → Evaluation. Fiechter und Meier entwickelten dieses 6-Schritte-Modell 1981 — es ist heute Standard in der deutschsprachigen Pflege.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Pflegeprozess beschreibt 6 aufeinanderfolgende Schritte: Informationssammlung → Erkennen von Problemen und Ressourcen → Festlegen von Pflegezielen → Planung der Pflegemaßnahmen → Durchführung → Evaluation.",
      textB1:
        "Diese 6 Schritte helfen dir, den Überblick zu behalten — von der ersten Begegnung bis zur Kontrolle ob die Pflege geholfen hat.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-definition",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Definition: Was ist der Pflegeprozess?",
          body: "Fiechter und Meier entwickelten 1981 das **6-Schritte-Modell** des Pflegeprozesses, das heute in der deutschsprachigen Pflege als Standard gilt. Es ist ein systematisches, zielorientiertes Verfahren zur Steuerung und Dokumentation der individuellen Pflege. Jeder Schritt liefert Informationen für den nächsten — so entsteht ein strukturiertes Vorgehen statt Routinehandeln. Die 6 Schritte: **(1) Informationen sammeln → (2) Probleme und Ressourcen erkennen → (3) Pflegeziele festlegen → (4) Pflegemaßnahmen planen → (5) Durchführen → (6) Evaluieren.** Gesetzliche Grundlage: § 4 PflBG.",
          glossarBegriffe: ["Pflegeprozess"],
        },
        contentB1: {
          title: "Was ist der Pflegeprozess?",
          body: "Der Pflegeprozess ist ein Plan in **6 Schritten**. Du sammelst zuerst Informationen, erkennst dann Probleme und Stärken der Person, legst Ziele fest, planst was du tust, führst es durch und schaust am Ende ob es geholfen hat. So arbeitest du nicht nach Gefühl, sondern nach System.",
          glossarBegriffe: ["Pflegeprozess"],
        },
      },
    },
    glossarBegriffe: ["Pflegeprozess"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: regelkreis-charakter (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "regelkreis-charakter",
    themaId: "pflegeprozess",
    titel: "Regelkreis-Charakter des Pflegeprozesses",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr Braun liegt seit 3 Tagen bei euch. Du hast einen Pflegeplan erstellt. Morgen hat sich sein Zustand verändert — was tust du mit dem Plan?",
      antwort:
        "Der Pflegeprozess ist ein Regelkreis: Nach der Evaluation (Schritt 6) fließen neue Erkenntnisse zurück in die Informationssammlung — der Prozess beginnt von vorn. Pflegeziele und Maßnahmen werden angepasst. Das unterscheidet professionelle Pflege von Routinehandeln: Sie reagiert kontinuierlich auf Veränderungen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Pflegeprozess ist kein lineares 'einmal-und-fertig'-Modell, sondern ein Regelkreis: Nach der Evaluation fließen neue Erkenntnisse zurück in die Informationssammlung — der Prozess beginnt von vorn.",
      textB1:
        "Der Pflegeprozess ist ein Kreislauf. Wenn du am Ende (Schritt 6) schaust ob etwas geholfen hat, beginnst du danach wieder von vorn — mit neuen Informationen über die Person.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-regelkreis",
        tag: "pflege",
        displayFormat: "analogy",
        contentC1: {
          title: "Regelkreis-Charakter des Pflegeprozesses",
          body: "Der **Regelkreis-Charakter** des Pflegeprozesses bedeutet: Die Evaluation (Schritt 6) ist kein Endpunkt. Erkenntnisse aus der Evaluation — ob Ziele erreicht wurden, ob sich der Zustand verändert hat — fließen direkt zurück in Schritt 1. Pflegeziele und Maßnahmen werden angepasst. Das unterscheidet professionelle Pflege von Routinehandeln: Sie reagiert **kontinuierlich** auf Veränderungen. Lineares Modell: Anfang → Ende (keine Rückkopplung). Regelkreis: Evaluation → neues Assessment → Anpassung → Evaluation …",
          glossarBegriffe: ["Regelkreis"],
        },
        contentB1: {
          title: "Der Pflegeprozess ist ein Kreislauf",
          body: "Stell dir den Pflegeprozess wie einen **Kreis** vor, nicht wie eine gerade Linie. Nach dem letzten Schritt schaust du: Hat es geholfen? Hat sich etwas verändert? Dann gehst du zurück zum Anfang und passt alles an. Das ist wichtig — Menschen verändern sich, und die Pflege muss sich mitverändern.",
          glossarBegriffe: ["Regelkreis"],
        },
      },
    },
    glossarBegriffe: ["Regelkreis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: vorbehaltene-taetigkeit (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "vorbehaltene-taetigkeit",
    themaId: "pflegeprozess",
    titel: "Vorbehaltene Tätigkeiten — § 4 PflBG",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du arbeitest als Pflegehilfskraft auf Station. Darf deine Praxisanleiterin dir sagen, dass du allein einen Pflegeplan erstellen sollst — oder ist das ihre Aufgabe?",
      antwort:
        "Laut § 4 PflBG ist die Steuerung und Gestaltung des Pflegeprozesses eine vorbehaltene Tätigkeit — sie darf nur von examinierten Pflegefachpersonen selbstständig ausgeführt werden. Pflegehilfskräfte dürfen nicht eigenverantwortlich planen, sondern führen unter Aufsicht durch.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Laut § 4 PflBG (Pflegeberufegesetz) ist die Steuerung und Gestaltung des Pflegeprozesses eine vorbehaltene Tätigkeit — sie darf nur von examinierten Pflegefachpersonen selbstständig ausgeführt werden.",
      textB1:
        "Nur examinierte Pflegefachpersonen dürfen den Pflegeprozess selbstständig steuern. Das steht im Gesetz. Pflegehilfskräfte helfen dabei — aber die Verantwortung liegt bei der Fachkraft.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-gesetz",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Vorbehaltene Tätigkeiten — § 4 PflBG",
          body: "§ 4 PflBG definiert **vorbehaltene Tätigkeiten** als Aufgaben, die exklusiv Pflegefachpersonen vorbehalten sind. Dazu gehören: **(1) Erhebung und Feststellung** des individuellen Pflegebedarfs, **(2) Organisation, Gestaltung und Steuerung** des Pflegeprozesses sowie **(3) Analyse, Evaluation, Sicherung und Entwicklung** der Qualität. Diese Aufgaben dürfen nicht an unexaminiertes Personal delegiert werden, da sie fachliche Urteilskompetenz erfordern. Gültig seit 2020.",
          glossarBegriffe: ["Vorbehaltene Tätigkeit", "PflBG"],
        },
        contentB1: {
          title: "Was darf nur die Fachkraft allein?",
          body: "Das Gesetz (§ 4 PflBG) legt fest: Nur wer die Pflegeausbildung abgeschlossen hat, darf den Pflegeprozess **allein** leiten. Das bedeutet: Du als examinierte Pflegefachperson entscheidest, was gepflegt wird, wie geplant wird und ob die Pflege geholfen hat. Hilfskräfte führen durch — aber du trägst die Verantwortung.",
          glossarBegriffe: ["Vorbehaltene Tätigkeit", "PflBG"],
        },
      },
    },
    glossarBegriffe: ["Vorbehaltene Tätigkeit", "PflBG"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: informationssammlung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "informationssammlung",
    themaId: "pflegeprozess",
    titel: "Schritt 1: Informationen sammeln",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du triffst Frau Yilmaz zum ersten Mal. Du siehst, dass sie Schmerzen hat — sie sagt aber nichts. Was kannst du alles herausfinden, und wie?",
      antwort:
        "Die Informationssammlung (Schritt 1) nutzt vier Quellen: direkte Befragung der betroffenen Person, indirekte Befragung von Angehörigen oder Bezugspersonen, objektive Beobachtung durch die Pflegeperson sowie vorhandene Dokumente (Arztbriefe, Vorbefunde). Diskrepanzen zwischen subjektiven Angaben und objektiven Befunden sind selbst wichtige Informationen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Informationssammlung (Schritt 1) nutzt vier Quellen: direkte Befragung der betroffenen Person, indirekte Befragung von Angehörigen oder Bezugspersonen, objektive Beobachtung durch die Pflegeperson sowie vorhandene Dokumente (Arztbriefe, Vorbefunde).",
      textB1:
        "Du sammelst Informationen auf vier Wegen: Du fragst die Person selbst (direkt), du fragst Angehörige (indirekt), du beobachtest (z.B. Körpersprache, Haut, Bewegung) und du liest vorhandene Unterlagen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-schritt1",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schritt 1: Informationen sammeln",
          body: "Die Informationssammlung ist die **Basis** aller weiteren Pflegeprozessschritte. Vier Quellen: **(1) Direkte Befragung** der Person selbst (subjektive Daten: Selbstauskunft, Erleben). **(2) Indirekte Befragung** von Angehörigen oder Bezugspersonen. **(3) Objektive Beobachtung** durch die Pflegeperson (Hautfarbe, Beweglichkeit, Mimik). **(4) Dokumente** (Arztbriefe, Vorbefunde, Pflegeberichte). Diskrepanzen zwischen subjektiven Angaben und objektiven Befunden — z.B. 'Ich habe keine Schmerzen' bei sichtbarer Schonhaltung — sind selbst wichtige Informationen.",
          glossarBegriffe: ["Informationssammlung", "Objektive Information", "Subjektive Information"],
        },
        contentB1: {
          title: "Wie sammelst du Informationen?",
          body: "Warum vier Wege? Weil eine Quelle allein nicht reicht. Manchmal kann oder will eine Person nicht alles sagen. Dann helfen **Angehörige** oder deine eigene **Beobachtung**. Und wenn das Gesagte nicht zum Gesehenen passt — das ist auch eine wichtige Information für dich.",
          glossarBegriffe: ["Informationssammlung", "Objektive Information", "Subjektive Information"],
        },
      },
    },
    glossarBegriffe: ["Informationssammlung", "Objektive Information", "Subjektive Information"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: pflegeanamnese (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeanamnese",
    themaId: "pflegeprozess",
    titel: "Pflegeanamnese — das strukturierte Erstgespräch",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast 30 Minuten für das erste Gespräch mit Herrn Petrov (65). Was willst du wissen? Was fragst du zuerst?",
      antwort:
        "Die Pflegeanamnese ist das strukturierte Erstgespräch zu Beginn des Pflegeprozesses. Sie dauert maximal 30 Minuten und erhebt neben Gesundheitszustand auch biografische Informationen — Lebensgewohnheiten, Vorlieben, wichtige Bezugspersonen. Ganzheitlichkeit ist entscheidend.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Pflegeanamnese ist das strukturierte Erstgespräch zu Beginn des Pflegeprozesses. Sie dauert in der Regel maximal 30 Minuten und erhebt neben Gesundheitszustand auch biografische Informationen — Lebensgewohnheiten, Vorlieben, wichtige Bezugspersonen.",
      textB1:
        "Die Pflegeanamnese ist das erste Gespräch mit der Person. Du fragst nicht nur 'Was tut weh?', sondern auch 'Wie lebst du normalerweise?' — denn gute Pflege kennt den Menschen, nicht nur die Diagnose.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-schritt1",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Pflegeanamnese — das strukturierte Erstgespräch",
          body: "Die Pflegeanamnese strukturiert die direkte Befragung in Schritt 1. Ziel ist ein **ganzheitliches Bild**: Neben dem aktuellen Gesundheitszustand werden Alltagsgewohnheiten, Selbstpflegefähigkeiten, Ressourcen, soziale Einbindung und biografisch relevante Informationen erfasst. Zeitrahmen: **max. 30 Minuten** — schützt vor Überforderung. Besonders bei Menschen mit Demenz oder eingeschränkter Kommunikationsfähigkeit sind biografische Informationen unverzichtbar. Die Pflegeanamnese ist eine vorbehaltene Tätigkeit (§ 4 PflBG).",
          glossarBegriffe: ["Pflegeanamnese", "Biografie"],
        },
        contentB1: {
          title: "Das erste Gespräch: Wer ist diese Person?",
          body: "In **30 Minuten** lernst du die Person kennen — als Mensch, nicht nur als Patient. Du fragst: Was kann sie selbst noch? Was mag sie? Wer ist ihr wichtig? Diese Informationen helfen dir, Pflege so zu gestalten, dass sie zu dieser Person passt — nicht zu einem anonymen 'Zimmer 7'.",
          glossarBegriffe: ["Pflegeanamnese", "Biografie"],
        },
      },
    },
    glossarBegriffe: ["Pflegeanamnese", "Biografie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: schritt-2-probleme-ressourcen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schritt-2-probleme-ressourcen",
    themaId: "pflegeprozess",
    titel: "Schritt 2: Probleme UND Ressourcen erkennen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr Kaya (58) nach Hüft-OP: Er kann nicht allein aufstehen, isst wenig, macht aber täglich selbstständig Atemübungen. Was ist ein Problem — und was ist eine Ressource?",
      antwort:
        "In Schritt 2 werden drei Kategorien unterschieden: aktuelle Pflegeprobleme (bestehen jetzt), Risikoprobleme (könnten entstehen) und Gesundheitsförderungspotenziale (Ressourcen, die gestärkt werden können). Ressourcen sind gleichwertig mit Problemen — eine rein defizitorientierte Sichtweise verkennt das Empowerment-Prinzip professioneller Pflege.",
    },
    stufe2: {
      typ: "hinweis",
      text: "In Schritt 2 werden drei Kategorien unterschieden: aktuelle Pflegeprobleme (bestehen jetzt), Risikoprobleme (könnten entstehen) und Gesundheitsförderungspotenziale (Ressourcen, die gestärkt werden können). Die Unterscheidung ist entscheidend für die Zielplanung.",
      textB1:
        "Du unterscheidest: Was ist jetzt ein Problem? Was könnte ein Problem werden? Und was kann die Person gut — was können wir stärken? Alle drei Punkte gehören in Schritt 2.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-schritt2",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schritt 2: Probleme UND Ressourcen erkennen",
          body: "Die Problemidentifikation in Schritt 2 erfordert pflegefachliches Urteilsvermögen. Drei Kategorien: **(1) Aktuelle Pflegeprobleme** — bestehen jetzt (z.B. Schmerzen, Immobilität). **(2) Risikoprobleme** — könnten entstehen, präventive Maßnahmen nötig (z.B. Dekubitusrisiko). **(3) Gesundheitsförderungspotenziale / Ressourcen** — Stärken die gestärkt werden können. **Ressourcen sind gleichwertig mit Problemen** — sie sind die Basis aller Pflegeziele. Eine rein problem-zentrierte Sichtweise verkennt das Empowerment-Prinzip professioneller Pflege.",
          glossarBegriffe: ["Pflegeproblem (aktuell)", "Risikoproblem", "Ressource"],
        },
        contentB1: {
          title: "Probleme und Stärken — beides zählt",
          body: "Schritt 2 ist nicht nur 'Was läuft schief?' — sondern auch 'Was klappt gut?' Ressourcen sind genauso wichtig wie Probleme. Wenn Herr Kaya selbstständig Atemübungen macht, ist das eine Stärke — und die nutzt du, wenn du Ziele planst. Professionelle Pflege **stärkt**, was da ist — sie repariert nicht nur, was fehlt.",
          glossarBegriffe: ["Pflegeproblem (aktuell)", "Risikoproblem", "Ressource"],
        },
      },
    },
    glossarBegriffe: ["Pflegeproblem (aktuell)", "Risikoproblem", "Ressource"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: schritt-3-ziele-smart (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schritt-3-ziele-smart",
    themaId: "pflegeprozess",
    titel: "Schritt 3: Pflegeziele nach SMART formulieren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du planst ein Pflegeziel für Frau Meier: 'Frau Meier soll mehr trinken.' Was fehlt an diesem Ziel — und wie würdest du es besser formulieren?",
      antwort:
        "Das SMART-Prinzip (Doran, 1981): Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch, Terminiert. 'Mehr trinken' ist weder messbar (wie viel?) noch terminiert (bis wann?). Besser: 'Frau Meier trinkt bis Freitag täglich mindestens 1,5 Liter Flüssigkeit.'",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegeziele werden nach dem SMART-Prinzip formuliert (Doran, 1981): Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch, Terminiert. Zusätzlich unterscheidet man Nah-, Teil- und Fernziele nach dem zeitlichen Horizont.",
      textB1:
        "Ein gutes Pflegeziel sagt genau: Wer? Was? Wie viel? Bis wann? 'Frau Meier soll mehr trinken' ist zu ungenau — 'Frau Meier trinkt bis Freitag täglich mindestens 1,5 Liter' ist SMART.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Doran SMART, 1981", "Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-schritt3",
        tag: "pflege",
        displayFormat: "mnemonic",
        contentC1: {
          title: "Schritt 3: Pflegeziele nach SMART formulieren",
          body: "Das **SMART-Prinzip** (Doran, 1981) ist das Standardframework für Pflegezielformulierungen: **S**pezifisch (konkrete Person, konkretes Verhalten) — **M**essbar (quantifizierbar oder beobachtbar) — **A**ttraktiv/Akzeptiert (von der Person mitgetragen) — **R**ealistisch (erreichbar) — **T**erminiert (konkreter Zeitrahmen). Pflegeziele werden aus den identifizierten Problemen und Ressourcen (Schritt 2) abgeleitet. Zeitliche Differenzierung: Nahziele (Stunden/Tage), Teilziele (Wochen), Fernziele (Monate/Entlassung).",
          glossarBegriffe: ["SMART-Prinzip", "Nahziel", "Teilziel", "Fernziel"],
        },
        contentB1: {
          title: "Was ist ein gutes Pflegeziel?",
          body: "**SMART** ist eine Checkliste für gute Ziele: **S** = konkret für diese Person. **M** = du kannst später nachprüfen ob es erreicht wurde. **A** = die Person will dieses Ziel selbst. **R** = das Ziel ist erreichbar — kein Wunschdenken. **T** = es gibt ein Datum. Schlechtes Ziel: 'Patient soll sich besser fühlen.' Gutes Ziel: 'Frau Meier trinkt bis Freitag täglich 1,5 Liter.'",
          glossarBegriffe: ["SMART-Prinzip", "Nahziel", "Teilziel", "Fernziel"],
        },
      },
    },
    glossarBegriffe: ["SMART-Prinzip", "Nahziel", "Teilziel", "Fernziel"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: schritt-4-planung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schritt-4-planung",
    themaId: "pflegeprozess",
    titel: "Schritt 4: Pflegemaßnahmen planen — 5-W-Regel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du weißt jetzt das Ziel: Frau Meier trinkt täglich 1,5 Liter bis Freitag. Was musst du jetzt konkret planen, damit das klappt?",
      antwort:
        "In Schritt 4 werden Pflegemaßnahmen nach der 5-W-Regel geplant: Wer führt durch? Wann? Wie oft? Wie (Art und Weise)? Womit (Material, Hilfsmittel)? Der Pflegeplan ist das Ergebnis dieses Schritts und muss für alle im Team verständlich sein.",
    },
    stufe2: {
      typ: "hinweis",
      text: "In Schritt 4 werden Pflegemaßnahmen nach der 5-W-Regel geplant: Wer führt durch? Wann? Wie oft? Wie (Art und Weise)? Womit (Material, Hilfsmittel)? Der Pflegeplan ist das Ergebnis dieses Schritts.",
      textB1:
        "Du planst jetzt konkret: Wer macht was — wann — wie oft — wie — und womit? Diese fünf Fragen helfen dir, einen Pflegeplan zu schreiben, den alle im Team verstehen und umsetzen können.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-schritt4",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schritt 4: Pflegemaßnahmen planen — 5-W-Regel",
          body: "Die **Pflegeplanung** (Schritt 4) übersetzt die Pflegeziele (Schritt 3) in konkrete Handlungsanweisungen. Die **5-W-Regel** strukturiert jeden Eintrag: **Wer** (welche Berufsgruppe/Qualifikation ist zuständig?) — **Wann** (Uhrzeit, Schicht, Häufigkeit) — **Wie oft** (Frequenz) — **Wie** (Technik, Kommunikation, Hilfsmittel) — **Womit** (benötigtes Material). Ein vollständiger Pflegeplan ist interprofessionell lesbar und ermöglicht Kontinuität — unabhängig davon, wer gerade Dienst hat.",
          glossarBegriffe: ["Pflegeplanung", "5-W-Regel", "Pflegeplan"],
        },
        contentB1: {
          title: "Der Pflegeplan — für alle im Team",
          body: "Der **Pflegeplan** ist ein Teamdokument. Nicht nur du liest ihn — auch deine Kolleginnen und Kollegen im Spätdienst. Deshalb muss jede Maßnahme so klar sein, dass alle sie genauso umsetzen. Die **5 W** helfen dabei: **W**er — **W**ann — **W**ie oft — **W**ie — **W**omit. Kein Spielraum für Missverständnisse.",
          glossarBegriffe: ["Pflegeplanung", "5-W-Regel", "Pflegeplan"],
        },
      },
    },
    glossarBegriffe: ["Pflegeplanung", "5-W-Regel", "Pflegeplan"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: schritt-5-durchfuehrung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schritt-5-durchfuehrung",
    themaId: "pflegeprozess",
    titel: "Schritt 5: Durchführen und dokumentieren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast die Lagerung bei Frau Hoffmann durchgeführt. Was machst du direkt danach — und warum?",
      antwort:
        "In Schritt 5 wird die geplante Pflegemaßnahme durchgeführt. Unmittelbar danach folgt der Durchführungsnachweis — die schriftliche Dokumentation, dass und wann die Maßnahme stattgefunden hat. 'Was nicht dokumentiert ist, hat nicht stattgefunden.' Beobachtungen während der Durchführung fließen als neue Informationen in den Regelkreis zurück.",
    },
    stufe2: {
      typ: "hinweis",
      text: "In Schritt 5 wird die geplante Pflegemaßnahme durchgeführt. Unmittelbar nach der Durchführung folgt der Durchführungsnachweis — die schriftliche Dokumentation, dass und wann die Maßnahme stattgefunden hat.",
      textB1:
        "Du führst die Maßnahme durch — und dokumentierst sie sofort danach. 'Was nicht dokumentiert ist, hat nicht stattgefunden.' Das schützt dich und sichert die Kontinuität.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-schritt5",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schritt 5: Durchführen und dokumentieren",
          body: "Schritt 5 ist die **Umsetzung des Pflegeplans**. Die Pflegedurchführung folgt dem Plan aus Schritt 4 — Abweichungen werden begründet dokumentiert. Der **Durchführungsnachweis** (Handzeichen, Zeitangabe, ggf. Beobachtungen) ist rechtlich bedeutsam: Er belegt, dass die geplante Maßnahme tatsächlich erbracht wurde. Beobachtungen während der Durchführung (z.B. Veränderungen im Zustand) fließen als neue Informationen zurück in den **Regelkreis**.",
          glossarBegriffe: ["Durchführungsnachweis"],
        },
        contentB1: {
          title: "Durchführen — und sofort aufschreiben",
          body: "Du führst durch — und du schreibst auf. Kein Schreiben bedeutet rechtlich: Es hat nicht stattgefunden. Das ist keine Bürokratie — es schützt die Person und dich. Wenn du dabei merkst, dass sich der Zustand verändert hat, ist das eine neue Information — die gehört dokumentiert und fließt zurück in den Pflegeprozess.",
          glossarBegriffe: ["Durchführungsnachweis"],
        },
      },
    },
    glossarBegriffe: ["Durchführungsnachweis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: schritt-6-evaluation (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schritt-6-evaluation",
    themaId: "pflegeprozess",
    titel: "Schritt 6: Evaluation — Soll-Ist-Abgleich",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Meier sollte bis Freitag täglich 1,5 Liter trinken. Es ist Freitag. Sie hat im Schnitt 1,1 Liter getrunken. Ziel erreicht?",
      antwort:
        "In Schritt 6 wird überprüft, ob die Pflegeziele erreicht wurden — durch einen Soll-Ist-Abgleich. Drei Ergebnisse: Ziel vollständig erreicht → Maßnahmen abschließen; Ziel teilweise erreicht → anpassen; Ziel nicht erreicht → Ursachen analysieren und neu planen. Das Ergebnis fließt zurück in Schritt 1 (Regelkreis).",
    },
    stufe2: {
      typ: "hinweis",
      text: "In Schritt 6 wird überprüft, ob die Pflegeziele erreicht wurden — durch einen Soll-Ist-Abgleich. Das Ergebnis entscheidet: Maßnahme abschließen (Ziel erreicht), anpassen (teilweise erreicht) oder neu planen (nicht erreicht).",
      textB1:
        "Du vergleichst: Was haben wir geplant (Soll)? Was ist wirklich passiert (Ist)? Wenn das Ziel nicht erreicht wurde, passt du den Plan an — du beginnst den Regelkreis von vorn.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-schritt6",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schritt 6: Evaluation — Soll-Ist-Abgleich",
          body: "Die **Evaluation** (Schritt 6) ist der Qualitätssicherungsschritt des Pflegeprozesses. Soll (formuliertes SMART-Ziel) vs. Ist (tatsächlicher Zustand). Drei Ergebnisse: **(1) Ziel vollständig erreicht** → Maßnahme abschließen, ggf. neue Ziele definieren. **(2) Ziel teilweise erreicht** → Maßnahmen anpassen (z.B. Häufigkeit, Art). **(3) Ziel nicht erreicht** → Ursachenanalyse und Neuplanung (zurück zu Schritt 2-3). Das Ergebnis fließt zurück in Schritt 1 — **Regelkreis**. Ohne Evaluation ist der Pflegeprozess unvollständig.",
          glossarBegriffe: ["Evaluation", "Soll-Ist-Abgleich"],
        },
        contentB1: {
          title: "Hat es geholfen? — Die Evaluation",
          body: "'Ziel teilweise erreicht' ist keine Niederlage — es ist eine **Information**. Frau Meier trinkt 1,1 statt 1,5 Liter. Jetzt fragst du: Warum? Mag sie das Wasser nicht? Vergisst sie es? Die Antwort bestimmt, was du als nächstes anpasst. Das ist professionelle Pflege: nicht starr am Plan festhalten, sondern **reagieren**.",
          glossarBegriffe: ["Evaluation", "Soll-Ist-Abgleich"],
        },
      },
    },
    glossarBegriffe: ["Evaluation", "Soll-Ist-Abgleich"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: pflegeprozess-modelle-vergleich (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeprozess-modelle-vergleich",
    themaId: "pflegeprozess",
    titel: "WHO, ANA und Fiechter/Meier im Vergleich",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Deine Kollegin aus den USA spricht von 'nur 5 Schritten' im Pflegeprozess. Du kennst 6. Wer hat recht — und warum unterscheiden sich die Modelle?",
      antwort:
        "Drei Hauptmodelle: WHO-Modell (1973, 4 Schritte), ANA-Modell (5 Schritte — mit Pflegediagnose als eigenem Schritt), Fiechter/Meier (1981, 6 Schritte). Alle beschreiben denselben Denkprozess, unterteilen ihn unterschiedlich fein. Für die deutsche Pflegeausbildung gilt das 6-Schritte-Modell.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Es gibt historisch drei Hauptmodelle: WHO-Modell (1973, 4 Schritte), ANA-Modell (5 Schritte) und Fiechter/Meier (1981, 6 Schritte). Der Unterschied liegt in der Aufteilung: Schritt 2 ist bei WHO Teil der Informationssammlung, bei ANA 'Nursing Diagnosis', bei Fiechter/Meier eigenständiger Schritt.",
      textB1:
        "Alle drei Modelle beschreiben denselben Denkprozess — sie unterteilen ihn nur unterschiedlich fein. Im deutschen Raum gilt das 6-Schritte-Modell.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["WHO 1973", "ANA Nursing Process Standards, 2021", "Fiechter/Meier, 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-modelle",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "WHO, ANA und Fiechter/Meier im Vergleich",
          body: "**WHO-Modell (1973)**: 4 Schritte — Assessment, Planning, Implementation, Evaluation. Erster internationaler Standard, breite Phasen. **ANA-Modell (2021)**: 5 Schritte — Assessment, Nursing Diagnosis, Planning, Implementation, Evaluation. Pflegediagnose als eigenständiger Schritt. **Fiechter/Meier (1981)**: 6 Schritte — deutschsprachiger Standard, verbindlich in DE. Problemidentifikation und Zielformulierung als eigene Schritte. Für die deutsche Pflegeausbildung gilt: **6 Schritte nach Fiechter/Meier**.",
          glossarBegriffe: ["WHO-Modell (1973)", "ANA-Modell", "Pflegediagnose (Nursing Diagnosis)", "NANDA-I"],
        },
        contentB1: {
          title: "Warum gibt es 3 verschiedene Modelle?",
          body: "Alle drei sagen dasselbe — nur in unterschiedlicher Genauigkeit. **WHO (1973)**: 4 Schritte — internationaler Überblick. **ANA (2021)**: 5 Schritte — US-amerikanisch, mit eigenem Schritt 'Pflegediagnose'. **Fiechter/Meier (1981)**: 6 Schritte — detaillierter, für den deutschen Alltag. Für deine Ausbildung und Prüfung gilt: **6 Schritte.**",
          glossarBegriffe: ["WHO-Modell (1973)", "ANA-Modell", "Pflegediagnose (Nursing Diagnosis)", "NANDA-I"],
        },
      },
    },
    glossarBegriffe: ["WHO-Modell (1973)", "ANA-Modell", "Pflegediagnose (Nursing Diagnosis)", "NANDA-I"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: theorie-vs-praxis-transfer (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "theorie-vs-praxis-transfer",
    themaId: "pflegeprozess",
    titel: "Pflegeprozess in der Praxis — Theorie-Praxis-Transfer",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du lernst den Pflegeprozess in der Schule. Auf Station siehst du: Die Kolleginnen und Kollegen 'machen einfach' — kein sichtbares Modell, kein Formular in der Hand. Läuft da kein Pflegeprozess?",
      antwort:
        "Der Pflegeprozess beschreibt WIE gepflegt wird (Denkstruktur), nicht was in jedem Fall getan werden muss. In der Praxis ist er mal explizit (schriftlicher Plan) und mal implizit (routiniertes Handeln erfahrener Fachkräfte). Das Risiko im Praxisalltag: Routinen ohne Reflexion werden nicht mehr an veränderte Situationen angepasst.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Pflegeprozess beschreibt NICHT was gepflegt wird, sondern WIE — also die Denkstruktur professionellen Handelns. Auch implizites, routiniertes Pflegehandeln folgt dieser Logik — es ist nur nicht immer sichtbar formalisiert.",
      textB1:
        "Das Modell ist im Kopf — nicht immer auf Papier. Erfahrene Pflegefachpersonen denken den Pflegeprozess, auch wenn sie ihn nicht laut nennen. Du lernst die Struktur, damit du sie später automatisch anwendest.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-transfer",
        tag: "pflege",
        displayFormat: "analogy",
        contentC1: {
          title: "Pflegeprozess in der Praxis",
          body: "Der Pflegeprozess ist ein **Denkmodell**, keine Formularausfüllpflicht. In der Praxis ist er mal explizit (schriftlicher Pflegeplan, dokumentierte Evaluation) und mal implizit (routiniertes Handeln erfahrener Fachkräfte). Beides ist professionell — wenn die Denkstruktur dahintersteht. Das Risiko: Routinen ohne Reflexion werden nicht mehr an veränderte Situationen angepasst. Der Pflegeprozess schützt vor dem **'Wir machen das immer so'** — er zwingt zur individuellen Begründung jeder Maßnahme.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Warum sieht man den Pflegeprozess nicht immer?",
          body: "Auf Station wirkt vieles automatisch — und das ist gut so. Aber hinter der Routine steckt die Denkstruktur des Pflegeprozesses: Warum machen wir das? Für diesen Menschen? Mit diesem Ziel? Wenn die Antwort nur **'wir machen das immer so'** ist — dann fehlt der Pflegeprozess. Du lernst ihn jetzt explizit, damit er später dein innerer Kompass wird.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: digitale-pflegedokumentation (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "digitale-pflegedokumentation",
    themaId: "pflegeprozess",
    titel: "Digitale Pflegedokumentation und SIS",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du arbeitest auf Station. Alle Dokumentation läuft über ein Tablet — kein Papier mehr. Was ändert sich dadurch für den Pflegeprozess? Was bleibt gleich?",
      antwort:
        "Die digitale Pflegedokumentation verändert das Medium, nicht die Logik. Der Pflegeprozess läuft unverändert ab. Seit 2014 gibt es die Strukturierte Informationssammlung (SIS) als standardisiertes Erstassessment für die stationäre Langzeitpflege — 5 Themenfelder, ersetzt viele alte Einzelformulare.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die digitale Pflegedokumentation verändert das Medium, nicht die Logik. Der Pflegeprozess läuft unverändert ab. Eingeführt wurde 2014 die Strukturierte Informationssammlung (SIS) als neues Eingangsinstrument für den Pflegeprozess (BMG SIS 2014).",
      textB1:
        "Auf dem Tablet oder auf Papier — der Pflegeprozess ist derselbe. Das SIS-Formular (seit 2014) ist das digitale Eingangsgespräch — es ersetzt viele alte Formulare.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["BMG SIS 2014", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-digital",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Digitale Pflegedokumentation und SIS",
          body: "Seit 2014 wird die **Strukturierte Informationssammlung (SIS)** bundesweit in der stationären Langzeitpflege eingeführt (BMG SIS 2014). Die SIS ist das standardisierte Erstassessment — 5 Themenfelder: Kognition, Kommunikation, Mobilität, Selbstversorgung, krankheitsbezogene Anforderungen. **Vorteile** digitaler Dokumentation: sofortige Verfügbarkeit, weniger Medienbrüche, Lesbarkeit. **Nachteile**: Technikabhängigkeit, Datenschutzrisiken, Risiko der Formulardominanz. Der Pflegeprozess selbst bleibt nach § 4 PflBG unverändert — das digitale System ist sein Werkzeug, nicht sein Ersatz.",
          glossarBegriffe: ["SIS (Strukturierte Informationssammlung)", "Digitale Pflegedokumentation", "NBA (Neues Begutachtungsassessment)"],
        },
        contentB1: {
          title: "Tablet statt Papier — was ändert sich?",
          body: "Seit 2014 gibt es die **SIS** — ein Formular (digital), das du beim ersten Gespräch mit einem neuen Bewohner ausfüllst. Fünf Themenfelder: Was kann er selbst? Was braucht er? Was ist ihm wichtig? Vorteil: Alle auf Station sehen dieselben Infos. Nachteil: Du darfst nicht vergessen zu **denken** — nur Felder anklicken reicht nicht.",
          glossarBegriffe: ["SIS (Strukturierte Informationssammlung)", "Digitale Pflegedokumentation", "NBA (Neues Begutachtungsassessment)"],
        },
      },
    },
    glossarBegriffe: ["SIS (Strukturierte Informationssammlung)", "Digitale Pflegedokumentation", "NBA (Neues Begutachtungsassessment)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: pflegeprozess-in-der-praxis (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeprozess-in-der-praxis",
    themaId: "pflegeprozess",
    titel: "Pflegeprozess unter Zeitdruck — Priorisierung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frühschicht. Du hast 8 Bewohner, eine Kollegin ist krank ausgefallen. Kein Zeitdruck? Nein — echter Zeitdruck. Wie wendest du den Pflegeprozess an, wenn du keine Zeit für ausführliche Planung hast?",
      antwort:
        "Der Pflegeprozess läuft in drei Intensitätsstufen: Routinehandeln (implizite Prozesslogik), angepasstes Handeln bei Veränderungen (neues Symptom), vollständige Neubewertung bei Statusveränderung (Sturz, Fieber). Priorisierung ist Kernkompetenz nach § 4 PflBG — Zeitdruck rechtfertigt keine unsichere Versorgung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Professionelle Pflege unter Zeitdruck bedeutet nicht: Pflegeprozess weglassen. Es bedeutet: Priorisieren lernen. Welche Informationen sind jetzt kritisch? Welche Maßnahmen sind dringend? Der Pflegeprozess ist ein Denk-Werkzeug — auch in 10 Sekunden.",
      textB1:
        "Du hast Zeitdruck. Trotzdem: kurz denken, dann handeln. Wer braucht jetzt was? Was kann warten? Was darf nicht fehlen? Das ist Pflegeprozess in der Praxis.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-14",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981", "§ 4 PflBG", "DNQP"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-praxis",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Pflegeprozess unter Zeitdruck — 3 Intensitätsstufen",
          body: "Der Pflegeprozess in der Praxis ist keine vollständige Schreibübung bei jedem Kontakt. Er läuft in **3 Intensitätsstufen** ab: **(1) Routinehandeln** mit impliziter Prozesslogik (tägliche Körperpflege). **(2) Angepasstes Handeln** bei Veränderungen (neu aufgetretenes Symptom). **(3) Vollständige Neubewertung** bei Statusveränderung (Sturz, Fieberanstieg). **Priorisierung** ist Kernkompetenz nach § 4 PflBG: nicht alles gleichzeitig — sondern das Richtige zur richtigen Zeit. Zeitdruck rechtfertigt keine unsichere Versorgung — er fordert effizientes Denken.",
          glossarBegriffe: ["Priorisierung (Pflege)", "Klinische Statusveränderung"],
        },
        contentB1: {
          title: "Zeitdruck — und trotzdem richtig handeln",
          body: "Manche Dinge laufen fast automatisch — das ist gut so. Aber wenn etwas **Neues** passiert (Sturz, Fieber, Schmerz), dann musst du neu denken: Was ist das? Was braucht dieser Mensch jetzt? Was tue ich zuerst? Zeitdruck heißt nicht: Kopf ausschalten. Es heißt: **schnell und trotzdem richtig** denken.",
          glossarBegriffe: ["Priorisierung (Pflege)", "Klinische Statusveränderung"],
        },
      },
    },
    glossarBegriffe: ["Priorisierung (Pflege)", "Klinische Statusveränderung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: verbindung-zur-pflegeplanung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "verbindung-zur-pflegeplanung",
    themaId: "pflegeprozess",
    titel: "Vom Pflegeprozess zur Pflegeplanung — PESR-Format",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast jetzt den Pflegeprozess verstanden — 6 Schritte, Regelkreis, Denkmodell. Was kommt als nächstes? Wie wird aus dem Prozess ein konkreter Plan für diesen einen Menschen?",
      antwort:
        "Der Pflegeprozess ist die Methode — die Pflegeplanung ist das Ergebnis. Das PESR-Format (Problem, Etiologie, Symptom, Ressource) überführt den Pflegeprozess in die schriftliche Pflegeplanung. PESR macht aus dem Denken (Schritte 1-2) ein dokumentiertes, teamlesbares Pflegeproblem.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Pflegeprozess ist die Methode — die Pflegeplanung ist das Ergebnis. Schritt 3 (Pflegemaßnahmen planen) und Schritt 4 (Durchführen) werden in der Pflegeplanung schriftlich fixiert. Das zentrale Werkzeug: PESR-Format (Problem, Etiologie, Symptom, Ressource).",
      textB1:
        "Pflegeprozess = wie du denkst. Pflegeplanung = was du aufschreibst. Aus deinem Denken wird ein Plan — für jeden Patienten einzeln. Das PESR-Format hilft dabei.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-15",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier, 1981", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-planung",
        tag: "pflege",
        displayFormat: "mnemonic",
        contentC1: {
          title: "Vom Pflegeprozess zur Pflegeplanung — PESR-Format",
          body: "Die **Pflegeplanung** ist die schriftliche Umsetzung des Pflegeprozesses für einen individuellen Patienten (§ 4 PflBG). Sie dokumentiert: Pflegeprobleme mit Ursachen, Ressourcen, messbare Pflegeziele und konkrete Pflegemaßnahmen. Das **PESR-Format** strukturiert Pflegeprobleme: **P** = Problem (was ist beeinträchtigt?) — **E** = Etiologie (Ursache) — **S** = Symptom (sichtbare Zeichen) — **R** = Ressource (Stärke des Patienten). PESR überführt den Pflegeprozess (Denken) in die Pflegeplanung (Aufschreiben) — Kommunikationsinstrument für das gesamte Team.",
          glossarBegriffe: ["PESR-Format", "Pflegeplanung", "Pflegeproblem"],
        },
        contentB1: {
          title: "PESR — dein Plan in vier Buchstaben",
          body: "Pflegeprozess (Denken) + Pflegeplanung (Aufschreiben) = professionelle Pflege. Das **PESR-Format** hilft dir: **P** = Was ist das Problem? **E** = Warum hat er es? **S** = Was siehst du? **R** = Was kann er selbst? Dann: Ziel. Dann: Maßnahmen. Dieser Plan gilt für das ganze Team — alle lesen ihn, alle arbeiten damit.",
          glossarBegriffe: ["PESR-Format", "Pflegeplanung", "Pflegeproblem"],
        },
      },
    },
    glossarBegriffe: ["PESR-Format", "Pflegeplanung", "Pflegeproblem"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: wahrnehmung-wahrnehmungsfehler (Bloom 2) — Rahmenlehrplan CE02-LE1-W2/W3
  // Lernergebnis-First-Nachzug 2026-06-12 (Wahrnehmungs-Lücke geschlossen)
  // ═══════════════════════════════════════════
  {
    bausteinId: "wahrnehmung-wahrnehmungsfehler",
    themaId: "pflegeprozess",
    titel: "Wahrnehmung & Wahrnehmungsfehler in der Pflegeeinschätzung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "In der Übergabe hörst du über einen neuen Patienten: \"Der ist eh nur wehleidig.\" Du gehst zu ihm. Wie könnte dieser eine Satz deine eigene Beobachtung verfälschen — noch bevor du ihn richtig angeschaut hast?",
      antwort:
        "Beobachten ist ein aktiver Vorgang der Wahrnehmung — und was du erwartest, beeinflusst, was du siehst. Der Satz löst eine selektive Wahrnehmung aus: Du suchst eher nach Bestätigung (\"sieht ja gar nicht so schlimm aus\") und übersiehst Hinweise, die dagegen sprechen. Eine vorschnelle Zuschreibung wird so zum Wahrnehmungsfehler, der zu einer falschen Einschätzung und damit zu falscher Pflege führt. Gegenstrategie: kriterienorientiert und methodisch beobachten, mehrere Sinne nutzen, im Team abgleichen — und die eigene Erwartung bewusst in Frage stellen.",
    },
    stufe2: {
      typ: "hinweis",
      text:
        "Beobachtung im Pflegeprozess ist ein aktiver Vorgang der Wahrnehmung: kriterienorientiert, absichtlich, methodisch. Sie hängt nicht nur von den Sinnesorganen ab, sondern auch von Umwelt- und psychologischen Faktoren. Vier typische Fehler: selektive Wahrnehmung (du siehst, was du erwartest), Halo-Effekt (eine auffällige Eigenschaft überstrahlt alles andere), Vorurteil/Stigmatisierung (starre Zuschreibung → fehlerhafte Schlüsse), Wahrnehmungstäuschung (Wahrnehmung ≠ Realität).",
      textB1:
        "Beobachten ist aktive Arbeit, kein einfaches Hinschauen. Achtung: Was du erwartest, verändert, was du siehst. Vier häufige Fehler: 1) du siehst, was du erwartest (selektive Wahrnehmung), 2) eine auffällige Sache überdeckt alles (Halo-Effekt), 3) \"der ist eh so\" → du schaust nicht genau hin (Vorurteil), 4) deine Sinne täuschen dich (Wahrnehmungstäuschung). Besser: nach festen Kriterien beobachten, mehrere Sinne nutzen, im Team nachfragen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeprozess-wb-16-wahrnehmung",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Pflege heute Kap. 2.2/2.3", "Pflege heute Kap. 39 (Kommunikation)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeprozess-wahrnehmung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Wahrnehmung & Wahrnehmungsfehler in der Pflegeeinschätzung",
          body: "**Beobachten ist kein passives Sehen — es ist aktive Arbeit.** Im Pflegeprozess ist Beobachtung ein **aktiver Vorgang der Wahrnehmung**: Du richtest deine Aufmerksamkeit **kriterienorientiert** auf das, was beim Patienten wichtig ist — absichtlich, methodisch, zielgerichtet. Deine Beobachtungsfähigkeit hängt nicht nur von deinen Sinnesorganen ab, **sondern auch von Umwelt- und psychologischen Faktoren**. Genau darin liegt die Gefahr: Was du erwartest, beeinflusst, was du siehst — und **falsche Wahrnehmung führt zu falscher Einschätzung und damit zu falscher Pflege.**\n\n**Vier typische Wahrnehmungs- und Beurteilungsfehler:**\n- **Selektive Wahrnehmung:** Deine Einstellung steuert, welche Informationen du suchst oder übersiehst, wie du sie bewertest und was du dir merkst. Du findest oft das, was du erwartest.\n- **Halo-Effekt (Überstrahlung):** Eine auffällige Eigenschaft überstrahlt alle anderen — das Auffällige fällt auf, der leise Hinweis auf etwas anderes geht unter.\n- **Vorurteil/Stigmatisierung:** Eine starre Zuschreibung (\"der ist eh ...\") führt zu fehlerhaften Schlussfolgerungen — und wird selbst dann nicht korrigiert, wenn die Beobachtung widerspricht. Vorurteile können sich auf Herkunft, Alter, Gewicht, Suchterkrankung oder psychische Erkrankung richten.\n- **Wahrnehmungstäuschung:** Deine Wahrnehmung entspricht nicht der Realität — möglich bei allen Sinnen, verstärkt durch Müdigkeit oder Stress; beim Patienten auch durch Medikamente oder neurologische/psychische Erkrankungen.\n\n**Die Gegenstrategie:** kriterienorientiert statt nach Bauchgefühl, methodisch, mehrere Sinne nutzen, im Team abgleichen — und die eigene Erwartung bewusst in Frage stellen.",
          glossarBegriffe: ["Wahrnehmung", "selektive Wahrnehmung", "Halo-Effekt", "Vorurteil", "Wahrnehmungstäuschung", "Beobachtung"],
        },
        contentB1: {
          title: "Wahrnehmung & Wahrnehmungsfehler",
          body: "**Beobachten ist aktive Arbeit, kein einfaches Hinschauen.** Im Pflegeprozess schaust du mit Absicht und nach festen Kriterien. Achtung: **Was du erwartest, verändert, was du siehst.** Wenn du falsch wahrnimmst, schätzt du falsch ein — und pflegst falsch.\n\n**Vier häufige Fehler:**\n- **Selektive Wahrnehmung:** Du siehst, was du erwartest.\n- **Halo-Effekt:** Eine auffällige Sache überdeckt alles andere.\n- **Vorurteil:** \"Der ist eh so\" → du schaust nicht mehr genau hin.\n- **Wahrnehmungstäuschung:** Deine Sinne täuschen dich (z. B. bei Müdigkeit).\n\n**Besser:** nach festen Kriterien beobachten, mehrere Sinne nutzen, im Team nachfragen.",
          glossarBegriffe: ["Wahrnehmung", "selektive Wahrnehmung", "Halo-Effekt", "Vorurteil", "Beobachtung"],
        },
      },
    },
    glossarBegriffe: ["Wahrnehmung", "selektive Wahrnehmung", "Halo-Effekt", "Vorurteil", "Wahrnehmungstäuschung", "Beobachtung"],
    karteikarten: [],
  },
];

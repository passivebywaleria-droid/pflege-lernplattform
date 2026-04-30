// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 2: Beobachten & Risiken erkennen
// Steps: 9 (5 Kern + 2 Inline-Wissen + 2 Optional) · Bloom: B2-B4
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-beobachten.md
// Pipeline v9 — 2026-04-23
// Inline-Wissen: 2 Bausteine (kontraktur-prophylaxe Grundlagen, sturz-prophylaxe Wiederbegegnung Schmerz)

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-bauer-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Risiken erkennen",
  titelB1: "Schauen und Risiken finden",
  kontext:
    "Herr Bauer hat sich etwas beruhigt. Er sitzt noch im Bett, schaut dich manchmal an, manchmal an die Wand. Du hast kurz seine Hand gehalten — das hat geholfen. Jetzt musst du beobachten: Was hat der Sturz hinterlassen? Was zeigt sein Körper dir heute Morgen? Menschen mit Demenz können Schmerzen oft nicht verbalisieren. Sie sagen nicht 'mein Knie tut weh' — sie zeigen es durch Abwehr, durch veränderte Mimik, durch ein Zucken beim Bewegen. Du lernst heute, wie man beobachtet, wenn Worte fehlen.",
  kontextB1:
    "Herr Bauer ist etwas ruhiger. Er sitzt im Bett. Du hast seine Hand gehalten — das hat geholfen. Jetzt schaust du: Was hat der Sturz hinterlassen? Was zeigt sein Körper dir heute Morgen? Menschen mit Demenz sagen nicht immer: \"Ich habe Schmerzen.\" Sie zeigen es mit dem Gesicht, mit der Körperhaltung. Du lernst heute: Wie beobachte ich, wenn jemand nicht sprechen kann?",
  kernSteps: [
    // Inline-Wissen: Koerperbeobachtung nach Sturz \u2014 Schonhaltung und Aussenrotation
    {
      stepId: "ce02-bauer-beob-00b-körperbeobachtung",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022 \u2014 Sturzprophylaxe", "I Care Pflege \u2014 Körperbeobachtung"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-00b-körperbeobachtung",
      tag: "anatomie",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["kontraktur-prophylaxe"],
      transition: "Du weisst jetzt worauf du achtest. Schau dir Herrn Bauer an \u2014 bevor du irgendetwas misst.",
      contentC1: {
        title: "Körperbeobachtung nach Sturz \u2014 Schonhaltung und Aussenrotation",
        body: "",
        glossarBegriffe: ["Schonhaltung", "Aussenrotation", "Körperbeobachtung"],
      },
      contentB1: {
        title: "Worauf achtest du nach einem Sturz?",
        body: "",
        glossarBegriffe: ["Schonhaltung", "Aussenrotation"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-körperbeobachtung",
        storyAufhaenger: "Gleich schaust du Herrn Bauer an \u2014 noch bevor du irgendetwas misst. Was verraten dir Haltung, Mimik und Beinstellung ueber mögliche Verletzungen? Zwei Begriffe musst du kennen.",
        storyAufhaengerB1: "Du schaust gleich Herrn Bauer an. Was verraten Haltung und Beinstellung ueber Verletzungen?",
        kerntext: "Nach einem Sturz ist die **Körperbeobachtung** der erste diagnostische Schritt \u2014 vor jeder Messung (DNQP 2022).\n\n**Schonhaltung** = Der Patient hält eine Körperregion unbewusst ruhig oder in einer bestimmten Position, um Schmerz zu vermeiden. Bei Herrn Bauer: Er hält das rechte Bein leicht angewinkelt und bewegt es nicht aktiv.\n\n**Aussenrotation** = Das Bein ist nach aussen gedreht (Fussspitze zeigt nach aussen statt zur Decke). Hinweis auf:\n\u2022 Hüftfraktur (klassisches Zeichen: verkürztes, aussenrotiertes Bein)\n\u2022 Muskuläre Schonung nach Sturz\n\u2022 Kontraktur (bei längerer Immobilität)\n\nBei Herrn Bauer: Aussenrotation rechts + Schonhaltung + angespannte Mimik = Schmerzhinweis, auch wenn er es nicht sagen kann.\n\n**Systematik:** Kopf \u2192 Wirbelsäule \u2192 Becken \u2192 Extremitäten. Seitenvergleich (rechts vs. links). Immer BESD beobachten während der Inspektion.",
        kerntextB1: "Nach einem Sturz schaust du zuerst den Körper an \u2014 bevor du etwas misst.\n\n**Schonhaltung** = Er hält eine Stelle ruhig, weil es wehtut. Herrn Bauers rechtes Bein ist angewinkelt \u2014 er bewegt es nicht.\n\n**Aussenrotation** = Das Bein ist nach aussen gedreht. Kann auf eine Hüftverletzung hinweisen.\n\nBei Herrn Bauer: Bein nach aussen gedreht + er bewegt es nicht + sein Gesicht ist angespannt = Er hat wahrscheinlich Schmerzen.\n\nImmer schauen: Kopf \u2192 Rücken \u2192 Beine. Rechte und linke Seite vergleichen.",
        faustregel: "Schonhaltung + Aussenrotation + angespannte Mimik = Schmerzhinweis. Erst beobachten, dann messen.",
        faustregelB1: "Bein nach aussen gedreht + er bewegt es nicht + Gesicht angespannt = wahrscheinlich Schmerzen. Erst schauen, dann messen.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Herrn Bauers rechtes Bein ist leicht nach aussen gedreht und er bewegt es nicht. Was sagt dir das?",
          rueckseite: "**Aussenrotation** (Bein nach aussen gedreht) + **Schonhaltung** (Bein nicht aktiv bewegt) = Schmerzhinweis. Mögliche Ursachen: Hüftfraktur (klassisch: verkürztes, aussenrotiertes Bein), muskuläre Schonung, beginnende Kontraktur. Immer Seitenvergleich (rechts vs. links) + BESD beobachten.",
        },
      },
    },

    // Step 2.1 — Brilliant-Frage: Erstblick
    {
      stepId: "ce02-bauer-beob-01-brilliant-erstblick",
      phase: 2,
      stepType: "freetext",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-beob-erstblick",
      tag: "pflege",
      bildkategorie: "szene",
      imageAlt:
        "Älterer Mann sitzt im Krankenbett, linkes Bein angewinkelt, rechtes Bein leicht nach außen gedreht, Gesichtsausdruck angespannt, Decke zur Hälfte abgeworfen",
      bildhinweis:
        "Elderly man sitting in hospital bed, left leg bent, right leg slightly externally rotated, tense facial expression, blanket half-thrown aside, morning light through window, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Was nimmst du wahr — vor jeder Messung?",
        body: "BRILLIANT-FRAGE: Bevor du irgendetwas misst oder untersuchst — schau dir Herrn Bauer kurz an. Sein Gesicht, seine Haltung, wie er die Beine hält. Was fällt dir auf?",
        glossarBegriffe: ["Schonhaltung", "Außenrotation"],
      },
      contentB1: {
        title: "Was siehst du — bevor du etwas misst?",
        body: "BEOBACHTUNGS-FRAGE: Schau Herrn Bauer an. Schau sein Gesicht an. Schau wie er sitzt. Schau wie er die Beine hält. Beschreibe in 2-3 Sätzen: Was fällt dir auf?",
        glossarBegriffe: ["Schonhaltung"],
      },
      question: {
        fragetext:
          "Beschreibe in 2–3 Sätzen: Was nimmst du wahr, bevor du irgendetwas messst? (Haltung, Mimik, Beinstellung)",
        musterantwort:
          "Das rechte Bein ist leicht nach außen gedreht — möglicher Hinweis auf Schonhaltung nach Sturz oder Kontraktur. Herrn Bauers Gesichtsausdruck ist angespannt, die Augenbrauen etwas zusammengezogen. Die Decke ist zur Hälfte weggeworfen — er war unruhig.",
        bewertungskriterien: [
          "Beinstellung beschrieben (Außenrotation / Anwinkelung)",
          "Gesichtsausdruck / Mimik erwähnt",
          "Körperhaltung oder Spannung beschrieben",
        ],
      },
    },

    // Inline-Wissen: Vitalzeichen, ABCDE-Schema und Synkope \u2014 Grundlagen der Ersteinschaetzung
    {
      stepId: "ce02-bauer-beob-01b-vitalzeichen-abcde",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022 \u2014 Sturzprophylaxe", "ERC 2021 \u2014 ABCDE-Systematic Approach"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-01b-vitalzeichen-abcde",
      tag: "pflege",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["basale-stimulation"],
      transition: "Vitalzeichen, ABCDE, Synkope \u2014 alles im Kopf. Jetzt bringe die Schritte in die richtige Reihenfolge.",
      contentC1: {
        title: "Vitalzeichen, ABCDE-Schema und Synkope \u2014 Grundlagen der Ersteinschätzung",
        body: "",
        glossarBegriffe: ["Vitalzeichen", "ABCDE-Schema", "Synkope", "Schmerzsignal"],
      },
      contentB1: {
        title: "Was sind Vitalzeichen? Was ist das ABCDE-Schema?",
        body: "",
        glossarBegriffe: ["Vitalzeichen", "ABCDE", "Synkope", "Schmerzsignal"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-vitalzeichen-abcde",
        storyAufhaenger: "Bevor du die Sturz-Assessment-Reihenfolge sortierst, brauchst du drei Grundbegriffe: Vitalzeichen, ABCDE-Schema und Synkope. Denn die Reihenfolge der Untersuchung ergibt sich aus der Logik: Kreislaufproblem ausschließen, BEVOR du Extremitäten bewegst.",
        storyAufhaengerB1: "Bevor du die Sturz-Untersuchung sortierst, musst du drei Begriffe kennen: Vitalzeichen, ABCDE-Schema und Synkope.",
        kerntext: "**Vitalzeichen** sind die Basismesswerte des Körpers: Blutdruck (RR), Herzfrequenz (Puls), Atemfrequenz, Sauerstoffsättigung (SpO2), Körpertemperatur. Sie zeigen in Sekunden ob der Kreislauf stabil ist.\n\n**ABCDE-Schema** (ERC 2021) ist die Reihenfolge der Ersteinschätzung bei jedem Notfall/Sturz:\n\u2022 **A** = Airway (Atemweg frei?)\n\u2022 **B** = Breathing (Atmung regelmässig?)\n\u2022 **C** = Circulation (Kreislauf: RR, Puls, SpO2)\n\u2022 **D** = Disability (Bewusstsein, Orientierung, Pupillen)\n\u2022 **E** = Exposure (Körper entkleiden, Verletzungen suchen)\n\n**Synkope** = kurzzeitiger Bewusstseinsverlust durch Minderdurchblutung des Gehirns (z. B. Blutdruckabfall beim Aufstehen). Bei Herrn Bauer: Mirtazapin kann orthostatische Hypotonie verursachen \u2014 eine Synkope als Sturzursache muss vor Bewegung der Extremitäten ausgeschlossen werden.\n\n**Schmerzsignal** bei Demenz: Kein verbales \"Es tut weh\" \u2014 sondern Grimassieren, Schlagen, Steifwerden, Stöhnlaute. Jedes Abwehrverhalten bei Berührung ist ein potenzielles Schmerzsignal.",
        kerntextB1: "**Vitalzeichen** = die wichtigsten Körperwerte: Blutdruck, Puls, Sauerstoff im Blut, Atemfrequenz, Temperatur.\n\n**ABCDE-Schema** = Reihenfolge bei Notfall/Sturz:\n\u2022 A = Atemweg frei?\n\u2022 B = Atmet er normal?\n\u2022 C = Kreislauf (Blutdruck, Puls)\n\u2022 D = Bewusstsein (wach? orientiert?)\n\u2022 E = Körper anschauen (Verletzungen)\n\n**Synkope** = kurze Ohnmacht durch Kreislaufproblem. Herr Bauer nimmt Mirtazapin \u2014 das kann den Blutdruck senken. Deshalb: Erst Kreislauf prüfen, dann Beine bewegen.\n\n**Schmerzsignal bei Demenz:** Nicht \"Es tut weh\" \u2014 sondern: Grimasse, Schlagen, steif werden, Stöhnen.",
        faustregel: "ABCDE = zuerst Kreislauf, dann Extremitäten. Synkope als Sturzursache ausschließen bevor du bewegst. Schmerzsignal bei Demenz = Verhalten beobachten.",
        faustregelB1: "ABCDE = zuerst Kreislauf prüfen. Synkope = kurze Ohnmacht. Schmerz bei Demenz erkennt man am Verhalten.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Warum misst du bei Herrn Bauer nach dem Sturz zuerst Vitalzeichen \u2014 bevor du sein Knie bewegst?",
          rueckseite: "ABCDE-Schema: Circulation (C) vor Exposure (E). Synkope (Blutdruckabfall als Sturzursache) muss ausgeschlossen werden bevor Extremitäten bewegt werden. Mirtazapin verursacht orthostatische Hypotonie (PRISCUS). Vitalzeichen: RR, Puls, SpO2, Atemfrequenz, Temperatur. Schmerzsignal bei Demenz: Grimasse, Abwehr, Stöhnen \u2014 nicht verbal.",
        },
      },
    },

    // Step 2.2 — Sequencing: Sturz-Assessment-Reihenfolge
    {
      stepId: "ce02-bauer-beob-02-sturz-assessment",
      phase: 2,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022, Kriterium 3b"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-beob-assessment-reihenfolge",
      tag: "pflege",
      contentC1: {
        title: "Sturz-Folge-Assessment — richtige Reihenfolge",
        body: "Lege die Reihenfolge des strukturierten Sturz-Folge-Assessments fest. Orientierung: ABCDE-Schema (Bewusstsein und Vitalzeichen zuerst — eine Synkope kann Sturzursache sein und muss vor Bewegung der Extremitäten ausgeschlossen werden) und DNQP Sturzprophylaxe 2022, Kriterium 3b. Hinweis: Vitalzeichen und Verletzungscheck fließen später ins Sturzprotokoll (Phase 6) — saubere Erfassung jetzt = solide Dokumentation am Ende. Was kommt wann?",
        glossarBegriffe: ["BESD-Skala", "Assessment", "Vitalzeichen", "ABCDE-Schema", "Synkope", "Sturzprotokoll"],
      },
      contentB1: {
        title: "Sturz-Assessment — welche Reihenfolge?",
        body: "In welcher Reihenfolge prüfst du nach einem Sturz? Wichtig: Erst Bewusstsein und Vitalzeichen (RR, Puls) prüfen — sonst weißt du nicht, ob ein Kreislaufproblem den Sturz ausgelöst hat. Erst dann den Körper bewegen. Hinweis: Was du jetzt misst, schreibst du später ins Sturzprotokoll.",
        glossarBegriffe: ["BESD-Skala", "Vitalzeichen", "ABCDE", "Sturzprotokoll"],
      },
      question: {
        fragetext:
          "Sortiere die Assessment-Schritte in die richtige Reihenfolge (1 = zuerst).",
        sequencing: {
          instruction: "Ziehe die Karten in die richtige Reihenfolge.",
          items: [
            {
              id: "a1",
              label: "Ansprechbarkeit und grobe Orientierung prüfen (wach? reagiert er?)",
            },
            {
              id: "a2",
              label: "Vitalzeichen messen (RR, Puls, SpO₂) — Synkope/Kollaps als Sturzursache ausschließen",
            },
            {
              id: "a3",
              label: "Kopf und Wirbelsäule — Sturzrichtung beachten",
            },
            {
              id: "a4",
              label:
                "Schmerzerfassung mit BESD-Skala bei Demenz (Verhalten beobachten, nicht fragen)",
            },
            {
              id: "a5",
              label: "Extremitäten: Arme und Beine soweit möglich bewegen lassen",
            },
            {
              id: "a6",
              label: "Hämatome und Hautdefekte sichtbar prüfen",
            },
          ],
        },
      },
    },

    // Step 2.2b — Inline-Wissen: Kontraktur-Prophylaxe Grundlagen
    // Bevor der Schueler Herrn Bauers Knie prueft (Dialog 2.3), muss er wissen:
    // Was ist eine Kontraktur? Warum ist Herr Bauer gefaehrdet? Was beobachte ich?
    {
      stepId: "ce02-bauer-beob-02b-kontraktur-grundlagen",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2014 — Expertenstandard Erhaltung und Förderung der Mobilität",
        "DNQP 2018 — Kontrakturenprophylaxe (Hinweispapier)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-kontraktur-grundlagen",
      tag: "pflege",
      themaPrimaer: "kontraktur-prophylaxe",
      themenSekundaer: ["basale-stimulation"],
      transition: "Kontraktur im Kopf? Gut. Jetzt geht es an Herrn Bauers rechtes Knie.",
      contentC1: {
        title: "Kontraktur — was passiert wenn Gelenke nicht bewegt werden",
        body: "",
        glossarBegriffe: ["Kontraktur", "Streckdefizit", "Funktionsstellung", "Immobilität"],
      },
      contentB1: {
        title: "Was ist eine Kontraktur?",
        body: "",
        glossarBegriffe: ["Kontraktur", "Streckdefizit"],
      },
      inlineWissen: {
        bausteinRef: "kontraktur-prophylaxe-grundlagen",
        storyAufhaenger:
          "Herrn Bauers rechtes Knie hat ein Streckdefizit von 20 Grad — das heißt, es lässt sich nicht mehr komplett strecken. 20 Grad klingt nach wenig. Aber wenn daraus 40 werden, kann er nicht mehr stehen. Das nennt man Kontraktur.",
        storyAufhaengerB1:
          "Herrn Bauers rechtes Knie geht nicht mehr ganz gerade. Es fehlen 20 Grad. Wenn es schlimmer wird, kann er nicht mehr stehen. Das heißt Kontraktur.",
        kerntext:
          "Eine **Kontraktur** ist eine dauerhafte Versteifung eines Gelenks durch Verkürzung von Muskeln, Sehnen oder Gelenkkapsel (DNQP 2018).\n\n**Warum ist Herr Bauer gefährdet?**\n\n• **Immobilität** — er liegt oder sitzt den grössten Teil des Tages. Bewegung findet nur während der Pflege statt.\n\n• **Demenz** — er versteht Aufforderungen zur Bewegung nicht. Aktive Übungen sind kaum möglich.\n\n• **Abwehr bei Pflege** — passive Bewegung wird erschwert wenn er sich gegen Berührung wehrt.\n\n• **Schmerz** — Schonhaltung nach Sturz (rechtes Knie) verstärkt die Immobilität.\n\n**Zeitfaktor:**\n\nKontrakturen entwickeln sich ab **1-2 Wochen Immobilität** (bei aelteren Menschen schneller). Das Streckdefizit von 20 Grad bei Herrn Bauer zeigt: der Prozess hat bereits begonnen.\n\n**Beobachtungszeichen:**\n\n• Widerstand beim passiven Bewegen (nicht Schmerz, nicht Abwehr — mechanisch)\n\n• Dauerhaft gebeugte Haltung\n\n• Abnehmender Bewegungsumfang (Vergleich rechts/links)",
        kerntextB1:
          "Eine **Kontraktur** ist wenn ein Gelenk dauerhaft steif wird (DNQP 2018).\n\n**Warum ist Herr Bauer gefährdet?**\n\n• Er bewegt sich fast nicht — er liegt oder sitzt den ganzen Tag.\n\n• Er versteht nicht wenn du sagst: \"Beuge dein Knie.\"\n\n• Er wehrt sich wenn du ihn anfasst.\n\n• Er hat Schmerzen im rechten Knie nach dem Sturz — er bewegt es noch weniger.\n\n**Wie schnell passiert das?**\n\nNach 1-2 Wochen ohne Bewegung kann ein Gelenk schon steifer werden. Herrn Bauers Knie hat schon 20 Grad verloren.\n\n**Was beobachtest du?**\n\n• Widerstand beim Bewegen (nicht weil es wehtut, sondern weil das Gelenk blockiert)\n\n• Das Bein bleibt immer gebeugt\n\n• Weniger Bewegung als gestern",
        faustregel:
          "1-2 Wochen Immobilität genügen für erste Kontrakturen. Was heute nicht bewegt wird, lässt sich morgen schwerer bewegen.",
        faustregelB1:
          "Schon nach 1-2 Wochen ohne Bewegung kann ein Gelenk steif werden. Heute nicht bewegt = morgen noch steifer.",
        spektrum: [
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese + Spastik",
            kurzbeschreibung:
              "Nach Schlaganfall: Die gelähmte Seite entwickelt Spastik — Muskeln verkürzen sich aktiv. Kontrakturrisiko ist hier besonders hoch weil die gesunde Seite kompensiert und die betroffene Seite vernachlässigt wird.",
          },
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Post-OP Ruhigstellung",
            kurzbeschreibung:
              "Nach Hüft-TEP: Bewegungseinschränkung (keine Adduktion, keine Innenrotation, max. 90 Grad Hüftflexion für 6-12 Wochen). Kontrakturgefahr im Hüftgelenk wenn Physiotherapie nicht früh beginnt.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "COPD + Inaktivität",
            kurzbeschreibung:
              "Ambulant: Frau Kovac bewegt sich wegen Atemnot kaum. Sprunggelenk-Kontraktur (Spitzfuss) droht wenn sie dauerhaft nur sitzt. Frühe Mobilisation und Physiotherapie sind entscheidend.",
          },
        ],
        sonstBox:
          "Kontrakturarten nach Ursache: **arthrogen** (Gelenkkapsel verklebt), **myogen** (Muskel verkürzt), **tendinogen** (Sehne verkürzt), **neurogen** (Spastik bei ZNS-Schädigung). Bei Herrn Bauer wahrscheinlich myogen + arthrogen. Messmethode: **Neutralnull-Methode** — Vergleich mit Gegenseite, Dokumentation in Grad.",
        sonstBoxB1:
          "Kontrakturen können verschiedene Ursachen haben: Gelenk verklebt, Muskel verkürzt, Sehne verkürzt, oder Spastik nach Hirnschädigung. Bei Herrn Bauer sind wahrscheinlich Muskel und Gelenk betroffen. Gemessen wird in Grad — Vergleich mit dem anderen Knie.",
        karteikarte: {
          vorderseite:
            "Herrn Bauers rechtes Knie hat ein Streckdefizit von 20 Grad. Warum ist das gefährlich und wie schnell verschlechtert es sich?",
          rueckseite:
            "20 Grad Streckdefizit = beginnende Kontraktur (Gelenk kann nicht mehr voll gestreckt werden). **Ab 1-2 Wochen Immobilität** können erste Kontrakturen entstehen (DNQP 2018). Risikofaktoren Bauer: Immobilität, Demenz (versteht Übungen nicht), Abwehr bei Pflege, Schonhaltung nach Sturz. Spektrum: Petrov (Spastik), Yilmaz (post-OP), Kovac (Inaktivität). Faustregel: **Heute nicht bewegt = morgen schwerer zu bewegen.**",
        },
      },
    },

    // Step 2.3 — Dialog: Knie-Kontraktur-Prüfung
    {
      stepId: "ce02-bauer-beob-03-knie-kontraktur",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022",
        "Bienstein C./Fröhlich A. (2021)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-bauer-beob-gelenkprüfung",
      tag: "pflege",
      contentC1: {
        title: "Gelenkbeweglichkeit prüfen",
        body: "Du möchtest die Gelenkbeweglichkeit von Herrn Bauers Knien prüfen. Er reagiert auf Sprache kaum. Du nährst dich behutsam seinem rechten Knie. Was passiert?",
        glossarBegriffe: ["Kontraktur", "Schmerzsignal", "BESD-Skala"],
      },
      contentB1: {
        title: "Knie prüfen",
        body: "Du willst Herrn Bauers Knie prüfen. Er hört auf Worte kaum. Du gehst langsam zu seinem rechten Knie hin. Was passiert?",
        glossarBegriffe: ["Kontraktur", "Schmerzsignal"],
      },
      question: {
        fragetext:
          "Herr Bauer zeigt beim Bewegen seines rechten Knies ein Schmerzsignal. Wie reagierst du?",
        patientName: "Herr Bauer",
        dialogPhases: [
          {
            context:
              "Du nimmst behutsam Herrn Bauers rechtes Knie. Beim langsamen Beugen zieht er scharf die Luft ein und sagt:",
            contextB1:
              "Du hältst Herrn Bauers rechtes Knie. Du beugst es langsam. Er zieht die Luft ein und sagt:",
            speaker: "Herr Bauer",
            options: [
              {
                text: "Ich halte inne, sage ruhig: 'Ich mache kurz Pause, Herr Bauer', und warte. Dann prüfe ich minimal weiter, ohne Schmerzen zu provozieren.",
                textB1:
                  "Ich stoppe. Ich sage ruhig: 'Pause, Herr Bauer.' Ich warte. Dann prüfe ich vorsichtig weiter.",
                patientResponse:
                  "Herr Bauer entspannt sich leicht nach der Pause. Er schaut zur Seite.",
                patientResponseB1:
                  "Herr Bauer wird etwas ruhiger nach der Pause.",
                score: 3,
                feedback:
                  "Richtig. Schmerzsignal bei Demenz ernst nehmen — auch ohne vollständige Verbalisierung. Innehalten, ankündigen, dann minimal weiterprüfen um das Bewegungsausmaß einzuschätzen, nicht um Schmerzen zu provozieren. Das entspricht dem BESD-Prinzip: Verhalten als Schmerz-Indikator.",
                feedbackB1:
                  "Sehr gut. Du hörst das Schmerzsignal. Du machst Pause. Du sagst, was du tust. Das ist wichtig bei Demenz: Er versteht nicht immer Worte — aber er spürt ob du rücksichtsvoll bist.",
              },
              {
                text: "Ich mache weiter — das Assessment muss vollständig sein, auch wenn es kurz wehtut.",
                textB1:
                  "Ich mache weiter. Das Assessment ist wichtig.",
                patientResponse:
                  "Herr Bauer schlägt nach deiner Hand.",
                patientResponseB1:
                  "Herr Bauer schlägt nach dir.",
                score: 0,
                feedback:
                  "Falsch. Schmerz bei Demenz-Patienten ist ein Stopsignal — nicht zu übergehen. Zwang führt zu Agitation, Vertrauensverlust und kann Verletzungen verschlimmern. Assessment ist wichtig, aber Würde und Schutz haben Vorrang vor Vollständigkeit.",
                feedbackB1:
                  "Falsch. Schmerz ist ein Stopsignal. Nicht übergehen. Er schlägt nach dir — weil er Angst hat. Zuerst stoppen, dann behutsam weiterschauen.",
              },
              {
                text: "Ich breche das Assessment ab und komme später wieder.",
                textB1:
                  "Ich höre auf und komme später wieder.",
                patientResponse:
                  "Herr Bauer bleibt sitzen. Er schaut weg.",
                patientResponseB1:
                  "Herr Bauer schaut weg.",
                score: 1,
                feedback:
                  "Manchmal sinnvoll — aber hier: Assessment nach Sturz ist dringlich, Schmerzerfassung gehört dazu. Besser: kurz innehalten, ankündigen, dann minimal weitermachen. Abbrechen ist der letzte Ausweg, nicht die erste Reaktion.",
                feedbackB1:
                  "Manchmal ok — aber hier ist das Assessment nach dem Sturz wichtig. Besser: kurze Pause, dann behutsam weiterschauen. Ganz aufhören ist die letzte Option.",
              },
            ],
          },
        ],
      },
    },

    // Inline-Wissen: Dreifach-Risiko: Exsikkose, Hautschaeden und Sturzgefahr
    {
      stepId: "ce02-bauer-beob-03b-exsikkose-hautrisiken",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022 \u2014 Sturzprophylaxe", "DNQP 2024 \u2014 Dekubitusprophylaxe", "DNQP 2023 \u2014 Mundpflege"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-03b-exsikkose-hautrisiken",
      tag: "pflege",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["dekubitus-prophylaxe", "kontraktur-prophylaxe", "mundpflege"],
      transition: "Du kennst jetzt die drei Risiko-Bereiche. Finde sie im Pflegebericht.",
      contentC1: {
        title: "Dreifach-Risiko: Exsikkose, Hautschäden und Sturzgefahr",
        body: "",
        glossarBegriffe: ["Exsikkose", "Soor", "Miktionsprotokoll", "Dekubitusgefahr", "Sturzrisiko", "Kontrakturrisiko", "Inkontinenz-assoziierte Dermatitis", "Haut", "Risiko"],
      },
      contentB1: {
        title: "Drei Risiken auf einmal: Austrocknung, Haut und Sturz",
        body: "",
        glossarBegriffe: ["Exsikkose", "Soor", "Miktionsprotokoll", "Dekubitusgefahr", "Sturzrisiko", "Kontraktur", "Haut"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-dreifach-risiko",
        storyAufhaenger: "Herr Bauer hat nicht ein Risiko \u2014 er hat drei gleichzeitig: Er trinkt zu wenig (Exsikkose), seine Haut leidet unter Feuchtigkeit und Immobilität, und er stürzt nachts. Diese drei Risiken verstärken sich gegenseitig.",
        storyAufhaengerB1: "Herr Bauer hat drei Risiken gleichzeitig: Er trinkt zu wenig, seine Haut ist gefährdet, und er stürzt nachts.",
        kerntext: "Bei Herrn Bauer ueberlagern sich **drei Risikobereiche** (DNQP 2022/2023/2024):\n\n**1. Exsikkose (Austrocknung)**\nTrinkmenge 900 ml/Tag = deutlich unter dem Bedarf (ca. 1500 ml). Folgen: trockene Mundschleimhaut, erhöhtes **Soor**-Risiko (Mundpilz bei trockener Schleimhaut), Verwirrtheit verstärkt. **Miktionsprotokoll** = Dokumentation von Urinausscheidung + Trinkmenge \u2014 zeigt das Gleichgewicht.\n\n**2. Hautrisiken**\n\u2022 **Dekubitusgefahr** \u2014 Immobilität + Mangelernährung + Inkontinenz. Sakrum und Fersen sind Prädilektionsstellen.\n\u2022 **Inkontinenz-assoziierte Dermatitis (IAD)** \u2014 Hautentzündung durch Dauerfeuchtigkeit im Inkontinenz-Pad. Nicht dasselbe wie Dekubitus, aber häufig verwechselt.\n\u2022 **Kontrakturrisiko** \u2014 Immobilität + Schonhaltung nach Sturz = Gelenke versteifen.\n\n**3. Sturzrisiko** (weiterhin hoch)\nDemenz + Mirtazapin + Inkontinenz-Drang nachts + Desorientierung. Kein Einzelereignis \u2014 strukturelles Risiko.\n\nDiese drei Bereiche verstärken sich: Exsikkose \u2192 Verwirrtheit \u2192 Sturzrisiko steigt. Inkontinenz \u2192 IAD + nächtliches Aufstehen \u2192 Sturzrisiko steigt. Immobilität \u2192 Kontraktur + Dekubitus.",
        kerntextB1: "Herr Bauer hat **drei Risiken gleichzeitig**:\n\n**1. Austrocknung (Exsikkose)**\nEr trinkt nur 900 ml am Tag. Zu wenig. Mund wird trocken \u2192 **Soor** (Pilz im Mund) droht. **Miktionsprotokoll** = aufschreiben wie viel er trinkt und wie viel Urin er hat.\n\n**2. Haut-Risiken**\n\u2022 **Dekubitusgefahr** \u2014 er liegt viel, bewegt sich wenig.\n\u2022 **IAD** \u2014 Haut entzündet weil das Inkontinenz-Pad feucht ist.\n\u2022 **Kontrakturrisiko** \u2014 Gelenke werden steif weil er sich nicht bewegt.\n\n**3. Sturzrisiko** \u2014 Demenz + Medikament + Inkontinenz-Drang nachts.\n\nDiese drei verstärken sich: Wenig trinken \u2192 verwirrter \u2192 mehr Sturze. Inkontinenz \u2192 Haut leidet + nachts aufstehen \u2192 mehr Sturze.",
        faustregel: "Exsikkose, Hautschäden und Sturzgefahr verstärken sich gegenseitig. Miktionsprotokoll zeigt das Gleichgewicht. IAD ist nicht Dekubitus \u2014 aber genauso ernst.",
        faustregelB1: "Drei Risiken auf einmal: Austrocknung + Haut + Sturz. Sie verstärken sich gegenseitig.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Herrn Bauers Trinkmenge beträgt 900 ml/Tag, seine Inkontinenzversorgung ist 3x nass, und er stürzt nachts. Wie hängen diese drei Risiken zusammen?",
          rueckseite: "Dreifach-Risiko: 1) **Exsikkose** (900 ml < 1500 ml Bedarf) \u2192 trockene Mundschleimhaut, Soor-Risiko, verstärkte Verwirrtheit. 2) **Hautrisiken**: Dekubitusgefahr (Immobilität), IAD (Inkontinenz-Feuchtigkeit), Kontrakturrisiko (Schonhaltung). 3) **Sturzrisiko** (Demenz + Mirtazapin + Inkontinenz-Drang). Wechselwirkung: Exsikkose \u2192 Verwirrtheit \u2192 Sturzrisiko. Miktionsprotokoll = Monitoring-Instrument.",
        },
      },
    },

    // Step 2.4 — Highlight: Pflegebericht der letzten 3 Tage
    {
      stepId: "ce02-bauer-beob-04-haut-trinkprotokoll",
      phase: 2,
      stepType: "highlight",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Förderung Harnkontinenz 2014",
        "DNQP Mundpflege 2023",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-risikofaktoren-pflege",
      tag: "krankheitslehre",
      contentC1: {
        title: "Pflegebericht der letzten 3 Tage — Risiken finden",
        body: "Du bekommst den Pflegebericht der letzten 3 Tage als Textblock. Markiere alle Zeilen, die dir als Risikofaktoren für Exsikkose oder Hautprobleme auffallen. BRILLIANT-VARIANTE: erst markieren, dann erklären wir.",
        glossarBegriffe: [
          "Exsikkose",
          "Soor",
          "Miktionsprotokoll",
          "Dekubitusgefahr",
        ],
      },
      contentB1: {
        title: "Pflegebericht lesen — Risiken markieren",
        body: "Du liest den Pflegebericht der letzten Tage. Markiere alle Stellen, die auf Risiken für Austrocknung (Exsikkose) oder Hautprobleme hinweisen.",
        glossarBegriffe: ["Exsikkose", "Soor", "Risiko"],
      },
      question: {
        fragetext:
          "Markiere alle Textstellen, die auf Exsikkose- oder Hautrisiken hinweisen.",
        highlightSegments: [
          {
            text: "Tag 1 (Fr): Stimmung unruhig, Körperpflege mit Mühe abgeschlossen.",
            isError: false,
          },
          {
            text: " Trinkmenge: 900 ml.",
            isError: true,
            reason:
              "Deutlich unter dem Trinkziel von 1500 ml — Exsikkosegefahr. Tagestrinkziel sollte Pflege aktiv begleiten.",
            reasonB1:
              "Zu wenig. Ziel ist 1500 ml. 900 ml = Austrocknung droht.",
          },
          {
            text: " Inkontinenzversorgung 2× gewechselt, Haut im Intimbereich unauffällig.",
            isError: false,
          },
          {
            text: "\n\nTag 2 (Sa): Mondscheinpflege um 03:00 Uhr, sehr unruhig, wollte weglaufen.",
            isError: false,
          },
          {
            text: " Mundschleimhaut leicht trocken notiert.",
            isError: true,
            reason:
              "Hinweis auf beginnende Austrocknung der Mundschleimhaut — Soor-Prophylaxe-Bedarf, Mundpflege intensivieren.",
            reasonB1:
              "Trocken im Mund = Zeichen für Austrocknung. Mundpflege wichtiger machen.",
          },
          {
            text: " Trinkprotokoll nicht geführt.",
            isError: true,
            reason:
              "Lückenhafte Dokumentation — ohne Trinkprotokoll kann die Pflegeplanung die Exsikkosegefahr nicht steürn.",
            reasonB1:
              "Kein Trinkprotokoll geführt = niemand weiß wie viel er getrunken hat. Gefährlich.",
          },
          {
            text: "\n\nTag 3 (So): Inkontinenzversorgung 3× nass gewechselt in der Nacht,",
            isError: true,
            reason:
              "Hinweis auf hohe nächtliche Inkontinenz-Frequenz / nächtliche Polyurie. Der Wechsel selbst ist Schutzmaßnahme — das Risiko liegt in der Feuchtigkeitsbelastung der Haut zwischen den Wechseln (IAD-Risiko, DNQP Förderung Harnkontinenz / Hinweispapier IAD). Zusätzlich = nächtliche Toilettengang-Auslöser → Sturzrisiko-Faktor (passt zum Sturzereignis 02:30 Uhr).",
            reasonB1:
              "3× Wechsel nachts = er ist nachts oft nass. Der Wechsel selbst schützt die Haut. Aber die Zeit dazwischen reizt die Haut (IAD = Wundsein durch Feuchtigkeit). Außerdem: Wenn er nachts viel Urin hat, steht er auf — und kann stürzen.",
          },
          {
            text: " kein Urinprotokoll geführt.",
            isError: true,
            reason:
              "Ohne Miktionsprotokoll fehlen Daten für Flüssigkeitsbilanz und Inkontinenz-Management.",
            reasonB1:
              "Kein Urinprotokoll = man weiß nicht wie viel Urin er hat. Das fehlt für die Pflege.",
          },
          {
            text: " Schlaf unruhig, Sturz letzte Nacht 02:30 Uhr.",
            isError: false,
          },
        ],
      },
    },

    // Step 2.4b — Inline-Wissen: Schmerz bei Demenz — BESD statt NRS (Wiederbegegnung)
    // NRS wurde bei Frau M. eingefuehrt. Herr Bauer kann NRS nicht zuverlaessig nutzen.
    // Hier: Wiederbegegnung mit Demenz-spezifischer Vertiefung (BESD/PAINAD).
    {
      stepId: "ce02-bauer-beob-04b-schmerz-besd-wiederbegegnung",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2020 — Expertenstandard Schmerzmanagement akut",
        "Basler B. et al. (2006): BESD-Skala",
        "Warden V. et al. (2003): PAINAD",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-besd-wiederbegegnung",
      tag: "pflege",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["basale-stimulation", "ganzkörperpflege"],
      transition: "Schmerzerfassung läuft bei Herrn Bauer ueber Beobachtung, nicht ueber Fragen. Jetzt: Risiken sortieren.",
      contentC1: {
        title: "Schmerz bei Demenz — warum NRS hier nicht reicht",
        body: "",
        glossarBegriffe: ["BESD", "PAINAD", "NRS", "Schmerzerfassung bei Demenz"],
      },
      contentB1: {
        title: "Wie misst man Schmerz bei Demenz?",
        body: "",
        glossarBegriffe: ["BESD", "NRS", "Schmerz"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-schmerz-bei-demenz",
        wiederbegegnung: {
          basisBausteinId: "schmerz-nrs-grundlagen",
          basisPatient: "Frau M.",
          vertiefung:
            "NRS kennst du von Frau M. — bei Herrn Bauer funktioniert das nicht zuverlässig. Er kann Zahlen nicht mehr sicher zuordnen (FAST 6a). Statt zu fragen \"Auf einer Skala von 0 bis 10...\" beobachtest du sein **Verhalten**: Mimik, Körperhaltung, Laute, Abwehr. Dafür gibt es die **BESD-Skala** (Basler 2006) — 5 Kategorien, je 0-2 Punkte, Gesamtwert ab 3 = Schmerz wahrscheinlich.",
          vertiefungB1:
            "NRS kennst du von Frau M. Bei Herrn Bauer funktioniert die Zahlen-Skala nicht — er versteht sie nicht mehr. Stattdessen beobachtest du sein Verhalten: Gesicht, Körper, Geräusche. Das heißt BESD-Skala. Ab 3 Punkten = Schmerz wahrscheinlich.",
        },
        storyAufhaenger:
          "Du hast gerade Herrn Bauers Knie geprüft — er hat scharf die Luft eingezogen. Aber auf die Frage \"Wo tut es weh?\" sagt er nur: \"Die Bestellung!\" NRS funktioniert hier nicht. Wie misst du seinen Schmerz?",
        storyAufhaengerB1:
          "Herr Bauer hat gerade bei der Knieprüfung die Luft eingezogen. Aber er kann dir nicht sagen wo es wehtut. Wie misst du seinen Schmerz?",
        kerntext:
          "Die **BESD-Skala** (Beurteilung von Schmerzen bei Demenz, Basler 2006) erfasst Schmerz ueber **Verhaltensbeobachtung**.\n\n**5 Kategorien, je 0-2 Punkte:**\n\n• **Atmung** — normal (0), gelegentlich erschwert (1), stoßweise/Cheyne-Stokes (2)\n\n• **Negative Lautäußerung** — keine (0), gelegentlich stöhnen (1), wiederholt rufen/schreien (2)\n\n• **Gesichtsausdruck** — lächelnd/neutral (0), traurig/ängstlich (1), Grimassieren (2)\n\n• **Körpersprache** — entspannt (0), angespannt (1), Steifheit/Abwehr/Schlagen (2)\n\n• **Trost** — nicht nötig (0), Beruhigung durch Stimme/Berührung möglich (1), nicht beruhigbar (2)\n\n**Bewertung:** Gesamtwert ≥ 3 → Schmerz wahrscheinlich → Maßnahmen einleiten.\n\n**Bei Herrn Bauer heute (alle 5 Kategorien):** Atmung: normal (0), Lautäußerung: gelegentliches Stöhnen (1), Gesichtsausdruck: Grimassieren beim Kniebewegen (2), Körpersprache: Schlagen nach Pflegekraft (2), Trost: beruhigbar durch Handhalten (1) = **BESD 6/10** → deutlicher Hinweis auf Schmerz.\n\n**Wann erheben?** In Ruhe UND bei Bewegung (Pflege, Transfer, Mobilisation). Immer beides dokumentieren.",
        kerntextB1:
          "Die **BESD-Skala** misst Schmerz bei Demenz durch **Beobachtung**.\n\n**5 Bereiche, je 0-2 Punkte:**\n\n• **Atmung** — normal? oder stoßweise?\n\n• **Geräusche** — stöhnt er? schreit er?\n\n• **Gesicht** — neutral? traurig? Grimasse?\n\n• **Körper** — entspannt? steif? schlägt er?\n\n• **Trost** — wird er ruhig wenn du ihn berührst?\n\n**Ergebnis:** Ab 3 Punkten = Schmerz wahrscheinlich.\n\n**Bei Herrn Bauer heute:** Atmung normal (0), gelegentliches Stöhnen (1), Grimasse beim Kniebewegen (2), Schlagen (2), beruhigbar durch Handhalten (1) = BESD 6 → Er hat Schmerzen.\n\n**Wann messen?** In Ruhe UND bei Bewegung (Pflege, Transfer). Beides aufschreiben.",
        faustregel:
          "Bei Demenz: Nicht fragen sondern beobachten. BESD ab 3 Punkten = Schmerz — auch wenn der Patient \"nichts sagt\".",
        faustregelB1:
          "Bei Demenz misst du Schmerz durch Beobachtung, nicht durch Fragen. BESD ab 3 = Schmerz.",
        spektrum: [
          {
            patientName: "Frau M.",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "NRS — orientiert, kann Zahlen zuordnen",
            kurzbeschreibung:
              "Frau M. ist orientiert und kann NRS nutzen. Aber sie bagatellisiert: sagt \"etwas unangenehm\" bei NRS 8. Bei ihr: immer nach der Zahl fragen, nicht nach dem Adjektiv.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Aphasie — Sprache eingeschränkt",
            kurzbeschreibung:
              "Nach Schlaganfall: er versteht NRS, kann aber Zahlen nicht aussprechen (Aphasie). Lösung: Zeigeskala (Finger auf Zahl zeigen) oder Faces Pain Scale.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Polyneuropathie",
            kurzbeschreibung:
              "Diabetische Polyneuropathie: Sie spürt Schmerz an den Füßen NICHT obwohl Gewebe geschädigt ist. Schmerzerfassung hier paradox: normaler NRS, aber trotzdem Wunden.",
          },
        ],
        sonstBox:
          "Weitere Fremd-Assessment-Instrumente: **PAINAD** (Pain Assessment in Advanced Dementia, Warden 2003) — dem BESD sehr ähnlich, international häufiger verwendet. **ECPA** (Echelle Comportementale de la Douleur pour Personnes Agees) — französischer Ursprung, 11 Items, differenzierter aber aufwendiger. **ZOPA** (Zurich Observation Pain Assessment) — für beatmete/sedierte Patienten auf Intensivstation.",
        sonstBoxB1:
          "Andere Schmerz-Beobachtungs-Skalen: **PAINAD** — ähnlich wie BESD, international häufiger. **ECPA** — aus Frankreich, mehr Details, mehr Aufwand. **ZOPA** — für Patienten auf der Intensivstation.",
        karteikarte: {
          vorderseite:
            "Herr Bauer (Demenz FAST 6a) grimassiert beim Kniebewegen und schlägt nach dir. NRS ist nicht möglich. Welche Skala nutzt du und was ist das Ergebnis?",
          rueckseite:
            "**BESD-Skala** (Basler 2006): 5 Kategorien je 0-2 Punkte (Atmung, Lautäußerung, Gesicht, Körper, Trost). Herrn Bauer: Atmung normal (0) + Stöhnen (1) + Grimasse (2) + Schlagen (2) + beruhigbar (1) = **BESD 6/10 → Schmerz wahrscheinlich**. Maßnahme: Schmerzintervention einleiten, Arzt informieren. NRS funktioniert bei FAST 6a nicht zuverlässig (Zahlen-Zuordnung gestört). Spektrum: Frau M. (NRS, bagatellisiert), Petrov (Aphasie → Zeigeskala), Schmidt (Polyneuropathie → schmerzfrei trotz Schaden). Faustregel: **Bei Demenz: Beobachten statt Fragen. BESD ≥ 3 = Schmerz.**",
        },
      },
    },

    // Step 2.5 — Categorize: Risikofaktoren nach 3 Kategorien
    {
      stepId: "ce02-bauer-beob-05-risiken-einordnen",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022", "DNQP Kontrakturprophylaxe 2014"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-beob-risikokategorien",
      tag: "pflege",
      contentC1: {
        title: "Risikofaktoren kategorisieren",
        body: "Kategorisiere die Risikofaktoren von Herrn Bauer in drei Gruppen: Sturzrisiko, Kontrakturrisiko, Hautrisiko. Manche Faktoren gelten für mehrere Kategorien — ordne sie der wichtigsten zu.",
        glossarBegriffe: [
          "Sturzrisiko",
          "Kontrakturrisiko",
          "Exsikkose",
          "Inkontinenz-assoziierte Dermatitis",
        ],
      },
      contentB1: {
        title: "Risiken sortieren",
        body: "Sortiere die Risiko-Karten in drei Gruppen: Sturzrisiko, Kontraktur-Risiko (Gelenke werden steif), Haut-Risiko.",
        glossarBegriffe: ["Sturzrisiko", "Kontraktur", "Haut"],
      },
      question: {
        fragetext:
          "Ordne jeden Risikofaktor der passenden Risikokategorie zu.",
        categories: [
          { name: "Sturzrisiko" },
          { name: "Kontrakturrisiko" },
          { name: "Hautrisiko" },
        ],
        categoryItems: [
          {
            text: "Demenz-Desorientierung und Nachtaktivität",
            correctCategory: 0,
          },
          { text: "Mirtazapin (Antidepressivum mit dosisabhängiger Sedierung, PRISCUS-Liste)", correctCategory: 0 },
          {
            text: "Inkontinenz mit Drangsymptomatik nachts",
            correctCategory: 0,
          },
          { text: "Weglauftendenz und unbegleitetes Aufstehen", correctCategory: 0 },
          {
            text: "Streckdefizit rechtes Knie 20°, linkes Knie 10°",
            correctCategory: 1,
          },
          { text: "Schonhaltung nach Sturz", correctCategory: 1 },
          {
            text: "Abwehr bei aktiver Bewegung (Pflege-Abwehr)",
            correctCategory: 1,
          },
          { text: "Trinkmenge 900–1100 ml täglich (Exsikkose)", correctCategory: 2 },
          { text: "Inkontinenzversorgung häufig nass (Feuchtigkeit)", correctCategory: 2 },
          {
            text: "Eingeschränkte Mobilität (Immobilitätsgefahr)",
            correctCategory: 2,
          },
        ],
      },
    },
  ],

  optionaleSteps: [
    // Step 2.6 — Erklär-Step: BESD-Skala
    {
      stepId: "ce02-bauer-beob-06-besd-skala",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Basler B. et al. (2006): BESD-Skala"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-besd",
      tag: "krankheitslehre",
      displayFormat: "stepbystep",
      contentC1: {
        title: "BESD-Skala — Schmerz bei Demenz erfassen",
        body: "Die BESD-Skala (Beurteilung von Schmerzen bei Demenz) erfasst Schmerz über Verhaltensbeobachtung — weil Demenz-Patienten Schmerz oft nicht verbalisieren können. 5 Kategorien, je 0–2 Punkte:\n\n1. Atmung — verändert, stoßweise (0–2)\n2. Negative Lautäußerungen — Stöhnen, Schreien (0–2)\n3. Gesichtsausdruck — Grimassieren, Stirnrunzeln (0–2)\n4. Körpersprache — Steifheit, Abwehr, Schonhaltung (0–2)\n5. Trost — beruhigbar oder nicht (0–2)\n\nGesamtwert ≥ 3 = Schmerz wahrscheinlich → Maßnahmen einleiten. Bei Herrn Bauer: BESD vor und nach Bewegungsübungen.",
        glossarBegriffe: ["BESD-Skala", "Schmerzerfassung", "Verhaltensbeobachtung"],
      },
      contentB1: {
        title: "BESD: Schmerz erkennen ohne Worte",
        body: "Herr Bauer kann Schmerzen nicht gut beschreiben. Die BESD-Skala hilft: Du beobachtest sein Verhalten. 5 Bereiche, je 0–2 Punkte:\n\n1. Atmung — normal oder verändert?\n2. Geräusche — stöhnt er? schreit er?\n3. Gesicht — zieht er die Stirn zusammen?\n4. Körper — steif? Abwehr?\n5. Trost — wird er ruhig wenn du ihn beruhigst?\n\nWert ≥ 3 = Schmerz wahrscheinlich. Dann musst du handeln.",
        glossarBegriffe: ["BESD-Skala", "Schmerz", "Verhalten beobachten"],
      },
    },

    // Step 2.7 — Comparison: Funktionsstellung vs. Kontrakturstellung
    {
      stepId: "ce02-bauer-beob-07-kontraktur-neutral-null",
      phase: 2,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontrakturprophylaxe 2014", "Neutralnull-Methode"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-beob-kontraktur-stellung",
      tag: "anatomie",
      contentC1: {
        title: "Funktionsstellung vs. Kontrakturstellung",
        body: "Was droht Herrn Bauer wenn die Kniegelenke nicht bewegt werden? Vergleiche Funktionsstellung und Kontrakturstellung.",
        glossarBegriffe: ["Kontraktur", "Funktionsstellung", "Neutralnull-Methode"],
      },
      contentB1: {
        title: "Was passiert ohne Bewegung?",
        body: "Was passiert mit Herrn Bauers Knien, wenn niemand sie bewegt? Vergleiche die zwei Stellungen.",
        glossarBegriffe: ["Kontraktur", "Funktionsstellung"],
      },
      question: {
        fragetext:
          "Vergleiche Funktionsstellung und Kontrakturstellung für Knie- und Sprunggelenk.",
        comparison: {
          instruction: "Vergleiche für jedes Gelenk die Funktionsstellung mit der Kontrakturstellung.",
          columns: [
            { label: "Funktionsstellung (Ziel)" },
            { label: "Kontrakturstellung (Gefahr)" },
          ],
          rows: [
            {
              criterion: "Kniegelenk",
              values: [
                "Streckung 0° bei Rückenlage (Bett), 90° Beugung wenn Rollstuhl",
                "Beugestellung ≥ 20° dauerhaft — kann nicht mehr gestreckt werden",
              ],
              valuesB1: [
                "Knie gerade (Bett) oder rechtwinklig (Rollstuhl)",
                "Knie bleibt gebeugt — kann nicht mehr gestreckt werden",
              ],
              highlight: 1,
            },
            {
              criterion: "Sprunggelenk",
              values: [
                "Fußhebebewegung 0° — Fuß steht senkrecht zum Unterschenkel",
                "Spitzfuß (Plantarflexion ≥ 20°) — Hacke berührt Boden nicht mehr",
              ],
              valuesB1: [
                "Fuß normal — Hacke berührt Boden",
                "Spitzfuß — Hacke kann den Boden nicht mehr berühren",
              ],
              highlight: 1,
            },
            {
              criterion: "Zeitraum bis zur Kontraktur",
              values: [
                "Regelmäßige passive Bewegung verhindert Kontraktur dauerhaft",
                "Bereits nach 1–2 Wochen Immobilität können erste Kontrakturen entstehen",
              ],
              valuesB1: [
                "Bewegung verhindert Kontraktur",
                "Ohne Bewegung: Kontraktur schon nach 1–2 Wochen möglich",
              ],
              highlight: 1,
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 35,
};

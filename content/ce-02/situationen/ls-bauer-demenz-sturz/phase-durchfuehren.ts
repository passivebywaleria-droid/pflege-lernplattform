// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 4: Maßnahmen durchführen
// Steps: 11 (6 Kern + 2 Inline-Wissen + 3 Optional) · Bloom: B2-B5 · Komplikationen: 2
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-durchfuehren.md
// Pipeline v9 — 2026-04-23
// Inline-Wissen: 2 Bausteine (ganzkörperpflege beruhigende Waschung Vertiefung, kontraktur-prophylaxe Wiederbegegnung)

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-bauer-durchfuehren",
  phase: "durchfuehren",
  titel: "Maßnahmen durchführen",
  titelB1: "Pflege durchführen",
  kontext:
    "Frau Meier, deine Praxisanleiterin, ist jetzt wieder da. Ihr macht heute die Morgenroutine bei Herrn Bauer gemeinsam — du übernimmst aber den Gesprächsteil, weil du bereits Kontakt hergestellt hast. Der Raum ist vorbereitet: warm, ruhig, das Tageslicht durchs Fenster reicht aus (kein direkter Deckenfluter ins Gesicht — Reizreduktion bei Demenz nach VIPS-Modell). Hautinspektion ist abgeschlossen (Phase 2), jetzt geht es um die Beziehungsgestaltung. Herrn Bauers Lieblingsmusik läuft leise (Freddy Quinn, \"Junge komm bald wieder\"). Dann beginnt es: Du näherst dich mit dem feuchten Waschlappen seinem Gesicht — und Herr Bauer schlägt nach deiner Hand. Das ist nicht Böswilligkeit. Das ist Angst. Dein Job ist nicht, die Pflege um jeden Preis durchzusetzen. Dein Job ist, einen Weg zu finden der für beide funktioniert.",
  kontextB1:
    "Frau Meier (deine Anleiterin) ist wieder da. Ihr pflegt Herrn Bauer heute zusammen. Der Raum ist warm und ruhig. Tageslicht reicht — kein helles Licht direkt ins Gesicht (das macht bei Demenz Stress). Hautinspektion ist schon fertig (Phase 2). Musik läuft leise (Freddy Quinn). Du gehst mit dem Waschlappen zu Herrn Bauers Gesicht — und er schlägt nach deiner Hand. Das ist kein Angriff. Das ist Angst. Dein Job: Einen Weg finden, der für Herrn Bauer und dich funktioniert.",
  kernSteps: [
    // Step 4.1 — Erklär-Step: Beruhigende Waschung
    {
      stepId: "ce02-bauer-dur-01-basale-vorbereitung",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Bienstein C./Fröhlich A. (2021)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-dur-basale-stimulation",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Beruhigende Ganzkörperwaschung — Basale Stimulation",
        body: "Was versteht man unter einer beruhigenden Ganzkörperwaschung im Sinne der Basalen Stimulation? 5 Prinzipien:\n\n1. Bewegungen in Haarwuchsrichtung führen — von Schulter zur Hand, von Hüftgelenk zum Fuß. Das aktiviert das Körperschema des Patienten.\n2. Körpertemperatur-angepasstes Wasser (nicht zu kalt, nicht zu heiß).\n3. Reihenfolge nach Hygiene: vom sauberen zum unreinen Bereich (Gesicht/Augen zuerst, Genital- und Analbereich zuletzt) — innerhalb dieses Rahmens jeden Körperabschnitt in Haarwuchsrichtung waschen.\n4. Jeden Handgriff kurz ankündigen — ruhige Stimme: \"Ich wasche jetzt deinen rechten Arm.\"\n5. Pausieren wenn Abwehr kommt — nie gegen Widerstand waschen.\n\nQuelle: Bienstein C./Fröhlich A. (2021): Basale Stimulation in der Pflege. Huber. I Care Pflege, Kapitel Körperpflege.",
        glossarBegriffe: ["Basale Stimulation", "Körperschema", "beruhigende Waschung"],
      },
      contentB1: {
        title: "Wie wäscht man richtig bei Demenz?",
        body: "Das nennt man beruhigende Waschung — eine Methode aus der Basalen Stimulation. 5 Regeln:\n\n1. Wasche in Richtung der Haare (z. B. von der Schulter zur Hand).\n2. Wasser angenehm warm.\n3. Reihenfolge nach Hygiene: erst Gesicht (sauber), zuletzt Genital- und Analbereich (unrein).\n4. Immer ankündigen: \"Jetzt wasche ich deinen rechten Arm.\"\n5. Wenn er sich wehrt: stoppen, warten.\n\nQuelle: Bienstein C./Fröhlich A. (2021).",
        glossarBegriffe: ["Basale Stimulation", "beruhigende Waschung", "ankündigen"],
      },
    },

    // Step 4.1b — Inline-Wissen: Ganzkörperpflege — Haarwuchsrichtung und Koerperschema
    // Vertiefung des Konzepts beruhigende Waschung: WARUM in Haarwuchsrichtung?
    // Was macht das mit dem Koerperschema? Warum beruhigt das bei Demenz?
    {
      stepId: "ce02-bauer-dur-01b-waschung-koerperschema",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Bienstein C./Froehlich A. (2021): Basale Stimulation in der Pflege",
        "Froehlich A. (2023): Basale Stimulation — Das Konzept. 10. Aufl.",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-dur-koerperschema",
      tag: "pflege",
      themaPrimaer: "ganzkörperpflege",
      themenSekundaer: ["basale-stimulation"],
      transition: "Haarwuchsrichtung, Koerperschema, ruhiger Druck — alles im Kopf? Jetzt kommt die Praxis: Herr Bauer wehrt sich.",
      contentC1: {
        title: "Warum Haarwuchsrichtung? — Was Beruehrung im Gehirn macht",
        body: "",
        glossarBegriffe: ["Koerperschema", "Propriozeption", "Haarwuchsrichtung"],
      },
      contentB1: {
        title: "Warum in Haarrichtung waschen?",
        body: "",
        glossarBegriffe: ["Koerperschema", "Haarwuchsrichtung"],
      },
      inlineWissen: {
        bausteinRef: "ganzkoerperpflege-haarwuchsrichtung-koerperschema",
        storyAufhaenger:
          "Du hast gerade gelesen: beruhigende Waschung geht in Haarwuchsrichtung. Aber warum genau? Was passiert im Koerper wenn du von der Schulter zur Hand waeschst — und was passiert wenn du es umgekehrt machst?",
        storyAufhaengerB1:
          "Du weißt jetzt: In Haarrichtung waschen beruhigt. Aber warum? Was passiert im Koerper?",
        kerntext:
          "**In Haarwuchsrichtung waschen** (z. B. Schulter → Hand) aktiviert das **Koerperschema** — die innere Landkarte des Koerpers im Gehirn (Bienstein/Froehlich 2021).\n\n**Was passiert neurophysiologisch?**\n\n• Gleichmaessiger, ruhiger Druck in Haarwuchsrichtung stimuliert **langsam leitende C-Taktil-Fasern** — diese senden Signale an den Inselcortex (Bereich fuer Koerperwahrnehmung und Emotionsregulation).\n\n• Die Wirkung: Herzfrequenz sinkt, Atemfrequenz wird regelmaessiger, Muskeltonus nimmt ab.\n\n• **Gegen** Haarwuchsrichtung (Hand → Schulter) aktiviert **schnell leitende A-beta-Fasern** — die Wirkung ist belebend, aufweckend.\n\n**Fuer Herrn Bauer heißt das:**\n\n• Morgens beruhigende Waschung: Schulter → Hand, Huefte → Fuß. Er ist agitiert — du willst ihn beruhigen.\n\n• Druck: gleichmaessig, nicht zu leicht (Kitzeln loest Abwehr aus), nicht zu fest.\n\n• Tempo: langsam, vorhersehbar, rhythmisch.\n\n• Pause: Wenn er die Augen schließt und der Muskeltonus nachlässt — das ist der Moment der Wirkung.",
        kerntextB1:
          "**In Haarrichtung waschen** (Schulter → Hand) beruhigt den Koerper.\n\n**Warum?**\n\n• Ruhiger Druck in Haarrichtung sendet Signale an das Gehirn: \"Alles ist sicher.\"\n\n• Herzschlag wird langsamer. Atmung wird ruhiger. Muskeln werden weicher.\n\n• **Gegen** Haarrichtung (Hand → Schulter) weckt auf — das ist belebend.\n\n**Fuer Herrn Bauer:**\n\n• Morgens: Schulter → Hand, Huefte → Fuß (beruhigend — er ist aufgeregt)\n• Druck: gleichmaessig, nicht zu leicht, nicht zu fest\n• Tempo: langsam\n• Wenn er die Augen schließt und weicher wird — es wirkt",
        faustregel:
          "In Haarwuchsrichtung = beruhigend. Gegen Haarwuchsrichtung = belebend. Bei Agitation: immer beruhigend.",
        faustregelB1:
          "Mit dem Haarwuchs = beruhigt. Gegen den Haarwuchs = weckt auf. Herr Bauer ist aufgeregt = mit dem Haarwuchs waschen.",
        spektrum: [
          {
            patientName: "Frau M.",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Parkinson — Rigor",
            kurzbeschreibung:
              "Bei Frau M. hilft beruhigende Waschung gegen den erhoehten Muskeltonus (Rigor bei Parkinson). Haarwuchsrichtung: Muskeltonus sinkt, Bewegung wird leichter — guenstiger Moment fuer Transfer.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese — Neglect-Seite",
            kurzbeschreibung:
              "Bei Neglect nach Schlaganfall: Die vergessene Koerperseite gezielt in Haarwuchsrichtung waschen — somatische Stimulation hilft dem Gehirn, die betroffene Seite wieder wahrzunehmen.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "COPD + Angst",
            kurzbeschreibung:
              "Bei Atemnot-Angst (COPD): Beruhigende Rueckenwaesche in Haarwuchsrichtung kann die Atemfrequenz senken — Atemlenkung ueber den Koerper statt ueber Worte.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Warum beruhigt es Herrn Bauer wenn du in Haarwuchsrichtung waeschst (Schulter → Hand)? Nenne den neurophysiologischen Mechanismus.",
          rueckseite:
            "Gleichmaessiger Druck in Haarwuchsrichtung stimuliert **C-Taktil-Fasern** (langsam leitend) → Signal an Inselcortex → **Herzfrequenz sinkt, Atemfrequenz reguliert sich, Muskeltonus nimmt ab**. Gegen Haarwuchsrichtung: A-beta-Fasern (schnell) → belebend. Regel: Agitation → beruhigend (in Haarwuchsrichtung). Apathie → belebend (gegen Haarwuchsrichtung). (Bienstein/Froehlich 2021) Faustregel: **In Haarwuchsrichtung = beruhigend. Gegen = belebend.**",
        },
      },
    },

    // Step 4.2 — Branching: KOMPLIKATION 1 — Abwehr bei Pflege
    {
      stepId: "ce02-bauer-dur-02-abwehr-komplikation",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: [
        "Feil N. / de Klerk-Rubin V. (2012)",
        "Bienstein C./Fröhlich A. (2021)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-bauer-dur-abwehr-deeskalation",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 1: Abwehr bei der Gesichtswäsche",
        body: "Du beginnst mit der Gesichtswäsche. Herr Bauer schlägt nach deiner Hand, zieht die Decke über sich. Er sagt: \"Nein! Nein!\" — Was machst du?",
        glossarBegriffe: ["Validation", "Deeskalation", "Würde", "Autonomie"],
      },
      contentB1: {
        title: "KOMPLIKATION 1: Er schlägt nach dir",
        body: "Du willst Herrn Bauers Gesicht waschen. Er schlägt nach deiner Hand. Er zieht die Decke ran. Er sagt: \"Nein! Nein!\" — Was machst du?",
        glossarBegriffe: ["Deeskalation", "Würde"],
      },
      question: {
        fragetext: "Wähle deine Reaktion auf Herrn Bauers Abwehr.",
        branchingOptions: [
          {
            text: "Ich ziehe die Decke weg und mache weiter — Hygiene ist medizinisch notwendig.",
            feedback:
              "Das ist Zwang — und rechtlich sowie ethisch nicht erlaubt. Zwangspflege verletzt die Würde des Patienten und verstärkt die Abwehr. Körperliche Pflege gegen den Willen eines Patienten ist nur in absoluten Notfällen (unmittelbare Lebensgefahr) rechtfertigbar — nicht bei der Morgentoilette. Herr Bauer kann seinen Willen nicht verbal formulieren, aber er zeigt ihn deutlich: Nein. Das gilt.",
            feedbackB1:
              "Das ist falsch. Zwang bei der Pflege ist verboten — auch wenn Pflege wichtig ist. Er zeigt dir mit dem Schlagen: \"Nein.\" Dieser Wille gilt, auch wenn er ihn nicht erklären kann.",
            isCorrect: false,
          },
          {
            text: "Ich halte inne, stelle den Waschlappen ab, sage ruhig: \"Herr Bauer, ich mache jetzt Pause. Das ist okay.\" Dann warte ich 2 Minuten.",
            feedback:
              "Richtig — Deeskalation durch Pause. Du erkennst sein Signal, respektierst seinen Willen, gibst ihm Raum. Die Pause durchbricht den Angst-Kreislauf. Danach kannst du einen neuen Anlauf versuchen — mit anderer Strategie (Ressource nutzen: Berührung, Musik, Handführung).",
            feedbackB1:
              "Sehr gut. Du stoppst. Du sagst was du tust. Du gibst ihm Zeit. Das nennt man Deeskalation — den Kreislauf aus Angst und Abwehr durchbrechen.",
            isCorrect: true,
          },
          {
            text: "Ich breche die Pflege ab und komme in einer Stunde wieder.",
            feedback:
              "Manchmal sinnvoll — wenn der Zeitraum wirklich genutzt wird um die Strategie zu ändern (z. B. Musik einschalten, Tochter informieren, Ressource vorbereiten). Aber: Assessment ist heute Morgen noch unvollständig und der Pflegebedarf hoch. Abbrechen ist nicht die erste Wahl. Besser: kurze Pause, dann neuer Anlauf mit anderer Strategie.",
            feedbackB1:
              "Manchmal ok — wenn du in einer Stunde mit einer anderen Strategie wiederkommst. Aber hier ist die Pflege heute früh dringend. Besser: kurze Pause, dann anderer Versuch.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.3 — Dialog: Deeskalation und zweiter Versuch
    {
      stepId: "ce02-bauer-dur-03-deeskalation-ressource",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "Feil N. / de Klerk-Rubin V. (2012)",
        "Bienstein C./Fröhlich A. (2021)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-bauer-dur-ressource-nutzen",
      tag: "pflege",
      contentC1: {
        title: "Deeskalation — Ressourcen nutzen",
        body: "Du hast pausiert. Jetzt versuchst du eine andere Strategie: Du nimmst Herrn Bauers Hand, berührst sanft seinen Unterarm von außen, summst leise. Nach etwa 90 Sekunden lässt er die Decke los. Er sagt: \"Du bist nett.\" Jetzt machst du einen neuen Anlauf mit der Gesichtswäsche — aber beginnst mit der Stirn (weniger intim als Mund/Gesicht).",
        glossarBegriffe: ["Ressourcen", "Handführung", "Basale Stimulation"],
      },
      contentB1: {
        title: "Zweiter Versuch — mit Ressource",
        body: "Du hast kurz Pause gemacht. Jetzt versuchst du es anders: Du hältst seine Hand. Du berührst sanft seinen Arm. Du summst leise. Nach einer Weile sagt er: \"Du bist nett.\" Jetzt versuchst du wieder: Gesicht waschen — aber du fängst mit der Stirn an.",
        glossarBegriffe: ["Ressource", "Basale Stimulation"],
      },
      question: {
        fragetext:
          "Wie leitest du den zweiten Wasch-Versuch ein — nachdem Herr Bauer sich beruhigt hat?",
        patientName: "Herr Bauer",
        dialogPhases: [
          {
            context:
              "Herr Bauer hat die Decke losgelassen. Er schaut dich an. Du möchtest jetzt die Stirn waschen. Wie kündigst du an?",
            contextB1:
              "Herr Bauer ist ruhiger. Er schaut dich an. Du möchtest seine Stirn waschen. Was sagst du?",
            speaker: "Du",
            options: [
              {
                text: "\"Herr Bauer, ich wasche jetzt kurz die Stirn — nur die Stirn. Ich halte Ihre Hand dabei.\"",
                textB1:
                  "\"Herr Bauer, ich wasche jetzt kurz deine Stirn — nur die Stirn. Ich halte deine Hand.\"",
                patientResponse:
                  "Herr Bauer schaut dich an. Er protestiert nicht. Du beginnst mit der Stirn, er duldet es.",
                patientResponseB1:
                  "Herr Bauer schaut dich an. Er sagt nichts. Du fängst an.",
                score: 3,
                feedback:
                  "Richtig. Du kündigst an (was genau), beschränkst auf eine Körperstelle (Stirn — am wenigsten intim), bietest Handführung an (Kontrolle zurückgeben). Das sind drei Validation-Prinzipien gleichzeitig.",
                feedbackB1:
                  "Sehr gut. Du sagst was du tust. Du sagst: Nur die Stirn. Du hältst seine Hand. Er fühlt: Er hat Kontrolle. Das hilft.",
              },
              {
                text: "Ich fange einfach schweigend an — Worte verwirren ihn ohnehin.",
                textB1:
                  "Ich fange an ohne zu reden — Worte verwirren ihn.",
                patientResponse:
                  "Herr Bauer schrickt zusammen als der Waschlappen sein Gesicht berührt, ohne Ankündigung.",
                patientResponseB1:
                  "Herr Bauer erschrickt, weil er es nicht erwartet hat.",
                score: 0,
                feedback:
                  "Falsch. Auch wenn Herr Bauer Sprache nicht vollständig verarbeiten kann, helfen kurze Ankündigungen — er spürt Tonfall und Absicht. Ohne Ankündigung ist jede Berührung am Gesicht ein Schreckreiz. Immer ankündigen.",
                feedbackB1:
                  "Falsch. Auch bei Demenz: Immer ankündigen. Er versteht vielleicht nicht alle Worte — aber er hört den Tonfall. Ohne Ankündigung erschrickt er.",
              },
              {
                text: "\"Darf ich Ihr Gesicht waschen?\" — ich frage ihn direkt um Erlaubnis.",
                textB1:
                  "\"Darf ich dein Gesicht waschen?\" — ich frage ihn.",
                patientResponse:
                  "Herr Bauer sagt: \"Nein.\" Du bist wieder am Ausgangspunkt.",
                patientResponseB1:
                  "Herr Bauer sagt: \"Nein.\" Du stehst wieder am Anfang.",
                score: 1,
                feedback:
                  "Gut gemeint, aber bei Demenz problematisch. Offene Fragen mit Ja/Nein-Antwortmöglichkeit aktivieren oft das \"Nein\" — weil Nein einfacher ist als die Situation zu verarbeiten. Besser: ankündigen was du tust, nicht ob du es tust. \"Ich wasche jetzt...\" statt \"Darf ich...\"",
                feedbackB1:
                  "Gut gemeint — aber bei Demenz funktioniert das oft nicht. \"Darf ich?\" bekommt oft \"Nein\" zur Antwort. Besser: Ankündigen was du tust.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.3b — Inline-Wissen: Kontraktur-Prophylaxe — passive Bewegung bei Demenz (Wiederbegegnung)
    // Kontraktur-Grundlagen wurden in Phase 2 (2.2b) gelehrt. Hier: konkrete
    // Ausfuehrung der passiven Kniebewegung bei einem Patienten der sich wehrt.
    {
      stepId: "ce02-bauer-dur-03b-kontraktur-passive-bewegung",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2018 — Kontrakturenprophylaxe (Hinweispapier)",
        "Bienstein C./Froehlich A. (2021)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-dur-kontraktur-passive-bewegung",
      tag: "pflege",
      themaPrimaer: "kontraktur-prophylaxe",
      themenSekundaer: ["basale-stimulation", "ganzkörperpflege"],
      transition: "Passive Bewegung vorbereitet. Jetzt: Die richtige Reihenfolge der Uebungen.",
      contentC1: {
        title: "Passive Kniebewegung bei Demenz — wie ohne Abwehr?",
        body: "",
        glossarBegriffe: ["passive Bewegung", "aktiv-assistiv", "Schmerzgrenze", "Kontraktur-Prophylaxe"],
      },
      contentB1: {
        title: "Knie bewegen ohne Abwehr?",
        body: "",
        glossarBegriffe: ["passive Bewegung", "Schmerzgrenze"],
      },
      inlineWissen: {
        bausteinRef: "kontraktur-prophylaxe-passive-bewegung-demenz",
        wiederbegegnung: {
          basisBausteinId: "kontraktur-prophylaxe-grundlagen",
          basisPatient: "Herr Bauer (Phase 2)",
          vertiefung:
            "Kontraktur-Grundlagen kennst du aus Phase 2 — Streckdefizit 20 Grad rechts, 10 Grad links, Immobilitaet als Hauptursache. Jetzt die Praxisfrage: Wie fuehrst du passive Kniebewegung bei einem Patienten durch, der sich wehrt? Die Antwort: **Integration in die Koerperpflege** — Bewegung ist kein separater Programmpunkt, sondern Teil der Waschung (Bienstein/Froehlich 2021).",
          vertiefungB1:
            "Kontraktur kennst du aus Phase 2 — Herrn Bauers Knie werden steifer. Jetzt: Wie bewegst du seine Knie, wenn er sich wehrt? Antwort: Baue die Bewegung in die Pflege ein — beim Waschen, beim Abtrocknen, nicht als extra Uebung.",
        },
        storyAufhaenger:
          "Herr Bauer liegt jetzt entspannter nach der Gesichtswaesche. Sein Muskeltonus ist gesunken. Gleich kommen die Beine dran — und damit die Chance, seine Knie zu bewegen. Aber wie machst du das, wenn er bei jeder ueberraschenden Bewegung zuschlaegt?",
        storyAufhaengerB1:
          "Herr Bauer ist jetzt ruhiger. Gleich kommen die Beine dran. Jetzt kannst du seine Knie bewegen. Aber wie — ohne dass er sich wehrt?",
        kerntext:
          "**Passive Bewegung bei Demenz** gelingt am besten **waehrend der Koerperpflege** — nicht als separater Uebungsblock (Bienstein/Froehlich 2021).\n\n**5 Regeln fuer Herrn Bauer:**\n\n• **Zeitpunkt:** Waehrend du seine Beine waeschst. Die Beruehrung der Waschung ist die Einleitung — die Bewegung folgt fließend.\n\n• **Tempo:** Sein Tempo, nicht deines. Langsam beugen, 3-5 Sekunden halten, langsam zurueck.\n\n• **Schmerzgrenze:** BESD beobachten waehrend der Bewegung. Grimasse, Steifwerden, Laute = stoppen. **Nie ueber die Schmerzgrenze.**\n\n• **Umfang:** Maximal bis zum aktuellen Bewegungsende — nicht darueber hinaus druecken. Bei Herrn Bauer rechts: Streckung bis ca. 20 Grad vor Null (das ist seine Grenze).\n\n• **Wiederholung:** 3-5 Wiederholungen pro Gelenk, 2x taeglich (morgens + abends bei Koerperpflege).\n\n**Dokumentation:** Bewegungsumfang in Grad, BESD-Wert waehrend Bewegung, Kooperationsgrad. Vergleich mit Vortag — Verbesserung oder Verschlechterung?",
        kerntextB1:
          "**Knie bewegen bei Demenz** funktioniert am besten **waehrend dem Waschen** — nicht extra.\n\n**5 Regeln:**\n\n• **Wann:** Waehrend du seine Beine waeschst. Die Waschung leitet ein — die Bewegung folgt.\n\n• **Wie schnell:** Langsam. 3-5 Sekunden halten.\n\n• **Schmerzgrenze:** Beobachte sein Gesicht (BESD). Grimasse = stoppen.\n\n• **Wie weit:** Nur bis dahin wo es jetzt geht — nicht weiter druecken.\n\n• **Wie oft:** 3-5 Mal pro Knie, morgens und abends.\n\n**Aufschreiben:** Wie weit ging es (in Grad)? Hat er Schmerzen gezeigt? Hat er mitgemacht?",
        faustregel:
          "Passive Bewegung bei Demenz: in die Pflege integrieren, nicht als extra Uebung. Die Waschung oeffnet die Tuer — die Bewegung nutzt den Moment.",
        faustregelB1:
          "Knie bewegen bei Demenz: Beim Waschen mitmachen, nicht extra. Der Moment der Waschung ist der richtige Moment.",
        spektrum: [
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese — Bobath-Konzept",
            kurzbeschreibung:
              "Bei Hemiparese: passive/aktiv-assistive Bewegung nach Bobath-Konzept — die gelaehmte Seite wird in alltagsnahe Bewegungen integriert (z. B. Arm fuehren beim Waschen). Ziel: kortikale Reorganisation, nicht nur Kontraktur-Praevention.",
          },
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Post-OP Physiotherapie",
            kurzbeschreibung:
              "Nach Hueft-TEP: Physiotherapie fuehrt aktiv-assistive Uebungen ab Tag 1 (CPM-Schiene, isometrische Uebungen). Pflege unterstuetzt mit Lagerung und Motivation — aber die Bewegungsfuehrung liegt beim Physio.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "COPD + Angst vor Bewegung",
            kurzbeschreibung:
              "Ambulant: Frau Kovac vermeidet Bewegung aus Angst vor Atemnot (Dyspnoe-Spirale). Kontrakturrisiko Sprunggelenk. Loesung: Atemtechniken + Bewegung kombinieren — 'beim Ausatmen bewegen'.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Wie fuehrst du passive Kniebewegung bei Herrn Bauer (Demenz FAST 6a, Abwehr) durch, ohne Eskalation zu provozieren?",
          rueckseite:
            "**Integration in Koerperpflege** (Bienstein/Froehlich 2021): Bewegung waehrend der Beinwaesche, nicht als separater Block. 5 Regeln: 1) Zeitpunkt = waehrend Waschung, 2) Tempo = Patient bestimmt, 3) Schmerzgrenze = BESD beobachten, nie uebergehen, 4) Umfang = nur bis aktuelle Grenze (rechts 20 Grad vor Null), 5) Wiederholung = 3-5x pro Gelenk, 2x/Tag. Spektrum: Petrov (Bobath), Yilmaz (Physio fuehrt), Kovac (Dyspnoe-Spirale). Faustregel: **Die Waschung oeffnet die Tuer — die Bewegung nutzt den Moment.**",
        },
      },
    },

    // Step 4.4 — Sequencing: Bewegungsübungen nach Körperpflege
    {
      stepId: "ce02-bauer-dur-04-bewegungsuebungen",
      phase: 4,
      stepType: "sequencing",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontrakturprophylaxe 2014"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-dur-bewegung",
      tag: "anatomie",
      contentC1: {
        title: "Bewegungsübungen — richtige Reihenfolge",
        body: "Herrn Bauer liegt entspannt nach der Körperpflege. Jetzt: Bewegungsübungen für Knie und Sprunggelenk. Sortiere die Reihenfolge.",
        glossarBegriffe: ["Spitzfußprophylaxe", "aktiv-assistiv", "passiv"],
      },
      contentB1: {
        title: "Bewegungsübungen — welche Reihenfolge?",
        body: "Nach der Pflege machst du Bewegungsübungen mit Herrn Bauer. In welcher Reihenfolge?",
        glossarBegriffe: ["Spitzfuß", "Knie", "Bewegung"],
      },
      question: {
        fragetext:
          "Sortiere die Bewegungsübungen in die richtige Reihenfolge (1 = zuerst).",
        sequencing: {
          instruction: "Ziehe die Karten in die richtige Reihenfolge.",
          items: [
            {
              id: "e1",
              label:
                "Füße kreisen lassen (aktiv-assistiv — du hilfst, er macht mit soweit möglich)",
            },
            {
              id: "e2",
              label:
                "Passive Knieflexion im Bett (Beugung im Kniegelenk, bis zur schmerzfreien Grenze — BESD beachten)",
            },
            {
              id: "e3",
              label:
                "Spitzfußprophylaxe: Fußsohle gegen weiches Brett oder Kissen stellen (5–10 Min)",
            },
            {
              id: "e4",
              label:
                "Ferse unterpolstern (Lagerungsrolle unter den Unterschenkel, Ferse frei — Eigengewicht foerdert Streckung)",
            },
          ],
        },
      },
    },

    // Step 4.5 — MC: Mundpflege bei Demenz
    {
      stepId: "ce02-bauer-dur-05-mundpflege",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Mundpflege 2023"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-bauer-dur-mundpflege",
      tag: "pflege",
      contentC1: {
        title: "Mundpflege bei Demenz und Trinkverweigerung",
        body: "Herrn Bauers Mundschleimhaut ist trocken, er trinkt wenig. Welche Mundpflege-Intervention ist bei einem Menschen mit Demenz und Trinkverweigerung am geeignetsten?",
        glossarBegriffe: [
          "Soor-Prophylaxe",
          "Mundpflege",
          "Aspirationsgefahr",
          "Chlorhexidin",
        ],
      },
      contentB1: {
        title: "Wie pflege ich den Mund?",
        body: "Herrn Bauers Mund ist trocken. Er trinkt wenig. Welche Mundpflege ist richtig?",
        glossarBegriffe: ["Soor", "Mundpflege", "Aspiration"],
      },
      question: {
        fragetext:
          "Welche Mundpflege-Maßnahme ist bei Herrn Bauer (Demenz, Trinkverweigerung, trockene Mundschleimhaut) am besten geeignet?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Mundspülung mit Chlorhexidin 3× täglich",
            isCorrect: false,
            explanation:
              "Chlorhexidin ist ein Arzneimittel — nicht Standard-Mundpflege ohne ärztliche Anordnung. Bei trockener Schleimhaut ist Befeuchtung die Priorität, nicht antiseptische Behandlung.",
            explanationB1:
              "Chlorhexidin ist ein Medikament. Das brauchst du eine Anordnung vom Arzt. Hier geht es zuerst darum, den Mund feucht zu halten.",
          },
          {
            text: "Feuchte Mundschwämmchen oder Wattestäbchen sanft auf die Mundschleimhaut auftragen",
            isCorrect: true,
            explanation:
              "Richtig. Befeuchtung der Schleimhaut mit feuchten Wattestäbchen oder Mundschwämmchen ist schonend, kooperativ möglich, günstig. Bei sachgerechter Anwendung (Schwämmchen festsitzend, Pflegekraft führt, Patient nicht alleine lassen) ist das Aspirationsrisiko gering — bei Schluckbeißen oder Beißen kann sich der Schwamm ablösen (FDA-Warnung 2017), deshalb sicheren Sitz prüfen und nicht alleine lassen. Keine ärztliche Anordnung nötig. Ideal bei Trinkverweigerung.",
            explanationB1:
              "Richtig. Feuchte Wattestäbchen oder Schwämmchen befeuchten den Mund sanft. Er muss dabei nicht schlucken. Wichtig: Du hältst den Schwamm fest und bleibst dabei — sonst kann sich ein Stück lösen (kleines Aspirationsrisiko). Kein Arzt nötig.",
          },
          {
            text: "Zähne zweimal täglich bürsten mit Fluorid-Zahnpasta, auch wenn er sich wehrt",
            isCorrect: false,
            explanation:
              "Falsch. Zahnbürste bei Abwehr = Aspirationsgefahr (Zahnpasta, Speichel) + Würdeverletzung. Bei Abwehr: erst Deeskalation, dann Versuch mit Wattestäbchen. Zwang ist kein Pflegemittel.",
            explanationB1:
              "Falsch. Wenn er sich wehrt und du trotzdem bürstest — kann er Zahnpasta schlucken oder sich verschlucken (Aspiration). Das ist gefährlich.",
          },
          {
            text: "Wenn er nicht trinkt, kann die Mundschleimhaut nicht befeuchtet werden — abwarten.",
            isCorrect: false,
            explanation:
              "Falsch. Mundpflege ist auch ohne Trinken möglich — und notwendig. Trockene Schleimhaut = erhöhtes Soor-Risiko, Entzündungen, Schluckbeschwerden. Die Pflege handelt aktiv.",
            explanationB1:
              "Falsch. Mundpflege geht auch ohne Trinken. Trockener Mund macht Pilzinfektionen (Soor) wahrscheinlicher. Du musst handeln.",
          },
        ],
      },
    },

    // Step 4.6 — Branching: KOMPLIKATION 2 — Mobilisation
    {
      stepId: "ce02-bauer-dur-06-mobilisation-komplikation",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022",
        "Feil N. / de Klerk-Rubin V. (2012)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-bauer-dur-mobilisation-abwehr",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 2: Abwehr bei der ersten Mobilisation",
        body: "Du und Frau Meier möchten Herrn Bauer an den Bettrand setzen — erste Mobilisation nach Sturz. Beim Aufsetzen wird er sehr unruhig, greift nach dem Bettgitter, schreit. Frau Meier flüstert: \"Was machst du?\" — Was ist deine Entscheidung?",
        glossarBegriffe: ["Mobilisation", "Abwehr", "Patientenwille", "Demenz"],
      },
      contentB1: {
        title: "KOMPLIKATION 2: Er will nicht aufsetzen",
        body: "Du und Frau Meier wollen Herrn Bauer aufsetzen (erste Mobilisation nach Sturz). Er wird sehr unruhig. Er schreit. Er greift nach dem Bettgitter. Frau Meier fragt dich: \"Was machst du?\"",
        glossarBegriffe: ["Mobilisation", "Abwehr", "Patientenwille"],
      },
      question: {
        fragetext:
          "Herrn Bauer wird bei der Mobilisation sehr agitiert. Was ist deine Entscheidung?",
        branchingOptions: [
          {
            text: "Wir legen ihn sofort zurück und dokumentieren: Mobilisation heute nicht möglich.",
            feedback:
              "Konservativ — und für den Moment richtig. Aber: nur abbrechen ohne Plan reicht nicht. Was passiert morgen? Die Mobilisation ist medizinisch notwendig nach einem Sturz. Besser: Abbruch mit sofortigem Plan — anderen Zeitpunkt wählen, Strategie ändern (Musik, Ressource vorbereiten, Schritt für Schritt ankündigen), Pflegedokumentation führen.",
            feedbackB1:
              "Für den Moment ok — du hörst auf. Aber: Was ist der Plan für morgen? Mobilisation ist wichtig. Dokumentiere, was passiert ist, und plane einen neuen Versuch mit anderer Strategie.",
            isCorrect: false,
          },
          {
            text: "Ich erkläre Herrn Bauer ruhig was wir machen, warte bis er ruhiger ist, versuche dann Mobilisation mit Musik und langsamerer Vorbereitung.",
            feedback:
              "Richtig. Zweiter Versuch mit geänderter Strategie: Validation (erklären ohne Erwartung der Antwort), Ressource (Musik), verlangsamt und angepasst. Das entspricht dem Prinzip: Abbruch ist temporär, nicht endgültig. Pflegebedarf bleibt — also kreative Lösung suchen.",
            feedbackB1:
              "Richtig. Du pausierst kurz. Dann versuchst du es anders: Mit ruhiger Stimme erklären. Mit Musik. Langsamer. Das nennt sich: Strategie wechseln statt aufgeben.",
            isCorrect: true,
          },
          {
            text: "Wir setzen ihn trotz Schreien zügig auf den Bettrand — je schneller, desto kürzer der Stress für ihn.",
            feedback:
              "Falsch. Mobilisation gegen massive Abwehr ist Zwang — kinästhetisch und ethisch nicht vertretbar. Sturzrisiko steigt (er kann sich entwinden, fallen), Vertrauensverlust ist sicher, BESD verschlechtert sich. \"Schnell hinter sich bringen\" ist kein anerkanntes Prinzip — Kinästhetik nach Hatch/Maietta verlangt: Patient bewegt sich selbst, Pflege begleitet im Tempo des Patienten.",
            feedbackB1:
              "Falsch. Schnell und gegen seinen Willen ist Zwang. Das ist gefährlich — er kann sich wehren, runterfallen. Und: Er verliert Vertrauen in dich. Bei Demenz: nie schneller machen als der Patient mitkommt.",
            isCorrect: false,
          },
        ],
      },
    },
  ],

  optionaleSteps: [
    // Step 4.7 — Analogy: Basale Stimulation erklärt
    {
      stepId: "ce02-bauer-dur-07-basale-analogy",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Bienstein C./Fröhlich A. (2021)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-dur-basale-konzept",
      tag: "pflege",
      displayFormat: "analogy",
      contentC1: {
        title: "Basale Stimulation — Sprache ohne Worte",
        body: "Was genau ist Basale Stimulation? Eine Analogie hilft: Wenn ein Kleinkind Angst hat, helfen Worte oft wenig — aber eine Umarmung, eine ruhige Berührung, ein vertrauter Geruch helfen sofort. Das Körpergefühl ist mächtiger als Sprache. Bei Menschen mit schwerer Demenz ist es ähnlich: Der Körper erinnert sich, auch wenn das Gedächtnis vergisst. Herrn Bauer kann nicht mehr sagen, was er fühlt — aber sein Körper reagiert auf ruhige, strukturierte Berührungen mit Entspannung. Das ist die Grundidee der Basalen Stimulation nach Andreas Fröhlich (1978): Sinneskanäle aktivieren, die intakt sind — auch wenn Sprache und Kognition versagen. Quelle: Fröhlich A. (2023). Basale Stimulation — Das Konzept. 10. Aufl.",
        glossarBegriffe: ["Basale Stimulation", "Sinneskanäle", "Körperschema"],
      },
      contentB1: {
        title: "Basale Stimulation — was ist das?",
        body: "Stell dir ein kleines Kind vor, das Angst hat. Worte helfen oft nicht viel. Aber: Eine Umarmung hilft. Eine ruhige Berührung hilft. Ein bekannter Geruch hilft. Das Körpergefühl ist stärker als Worte. Bei Menschen mit Demenz ist es ähnlich. Herrn Bauers Gedächtnis vergisst vieles — aber sein Körper reagiert auf ruhige Berührungen. Das nennt man Basale Stimulation: den Körper ansprechen wenn Worte nicht mehr helfen.",
        glossarBegriffe: ["Basale Stimulation"],
      },
    },

    // Step 4.8 — Reflection: Inkontinenz und Würde
    {
      stepId: "ce02-bauer-dur-08-inkontinenz-wuerde",
      phase: 4,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Kitwood T. (1997)"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-dur-wuerde-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Würde vs. Hygiene — ein echter Konflikt",
        body: "Herrn Bauers Inkontinenzversorgung ist voll. Er schlägt nach dir bei jedem Wechsel. Wie gehst du mit der Spannung um zwischen: 'Er hat Anspruch auf Hygiene' und 'Er lehnt die Maßnahme ab'? Gibt es eine richtige Antwort?",
        glossarBegriffe: ["Würde", "Selbstbestimmung", "Verhältnismäßigkeit", "Patientenwille"],
      },
      contentB1: {
        title: "Darf ich das — wenn er Nein sagt?",
        body: "Herrn Bauers Inkontinenzversorgung ist voll. Er schlägt nach dir wenn du sie wechseln willst. Was machst du? Er braucht Hygiene — aber er sagt Nein. Was ist richtig?",
        glossarBegriffe: ["Würde", "Pflege", "Patientenwille"],
      },
      question: {
        fragetext:
          "Herrn Bauers Inkontinenzversorgung muss gewechselt werden. Er lehnt es jedes Mal ab und schlägt nach dir. Wie gehst du mit diesem Spannungsfeld um? Gibt es eine richtige Antwort?",
        reflection: {
          prompt:
            "Schreibe frei was du denkst. Es gibt kein Richtig oder Falsch — wir wollen deine ehrliche Einschätzung.",
          placeholder:
            "Meine Gedanken zu diesem Dilemma: Würde vs. Hygiene bei Demenz...",
          systemPrompt:
            "Der Schüler reflektiert das ethische Dilemma zwischen Hygiene-Notwendigkeit und Ablehnungsrecht bei Demenz. Gib Sandwich-Feedback: 1) Was der Schüler gut erkannt hat, 2) Ergänzende Perspektive (Verhältnismäßigkeit, minimaler Eingriff, Dokumentationspflicht, Teamkommunikation), 3) Ermutigung.",
        },
      },
    },

    // Step 4.9 — Timer: Trinken ohne Druck
    {
      stepId: "ce02-bauer-dur-09-trinken-strategie",
      phase: 4,
      stepType: "timer",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Förderung Harnkontinenz 2014"],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-bauer-dur-trinken-praxis",
      tag: "krankheitslehre",
      contentC1: {
        title: "3 Minuten: Herrn Bauer zum Trinken bewegen",
        body: "Du hast 3 Minuten Zeit, Herrn Bauer zum Trinken zu bewegen — ohne Aufforderung, ohne Druck. Du hast: eine Tasse alkoholfreies Malzgetränk (Malzbier ohne Alkohol — Mirtazapin verbietet Alkohol), Geduld und seine Hand. Was tust du? Schreibe nach dem Timer auf, wie du es gemacht hast.",
        glossarBegriffe: ["Trinkmanagement bei Demenz", "Biographiearbeit"],
      },
      contentB1: {
        title: "3 Minuten: Herrn Bauer trinken lassen",
        body: "Du hast 3 Minuten. Du willst Herrn Bauer zum Trinken bringen — aber ohne zu sagen: 'Trinken Sie!' Das klappt nicht. Du hast: alkoholfreies Malzbier in einer Tasse, Geduld, seine Hand. Was machst du?",
        glossarBegriffe: ["Trinken", "Biographie", "Demenz"],
      },
      question: {
        fragetext:
          "Nach dem Timer: Beschreibe kurz, wie du vorgegangen bist. Was hat funktioniert?",
        timeLimitSeconds: 180,
        musterantwort:
          "Tasse in die Hand geben (nicht fragen), still daneben sitzen, eventuell leise summen. Keine Aufforderung. Wenn er trinkt: kurz loben. Wenn nicht: akzeptieren und später erneut versuchen.",
      },
    },
  ],
  geschaetzteDauer: 45,
};

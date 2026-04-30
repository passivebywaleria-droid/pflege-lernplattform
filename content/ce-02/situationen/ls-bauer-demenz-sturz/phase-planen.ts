// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 3: Pflege planen
// Steps: 7 (4 Kern + 1 Inline-Wissen + 2 Optional) · Bloom: B2-B4
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-planen.md
// Pipeline v9 — 2026-04-23
// Inline-Wissen: 1 Baustein (ganzkörperpflege bei Demenz — Vorbereitung Morgenpflege)

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_PLANEN: SituationsPhase = {
  phaseId: "ls-bauer-planen",
  phase: "planen",
  titel: "Pflege planen",
  titelB1: "Plan machen",
  kontext:
    "Du hast Herrn Bauer beobachtet. Du hast Informationen gesammelt. Jetzt musst du entscheiden, was zu tun ist — nicht nach Bauchgefühl, sondern nach System. Der Pflegeprozess verlangt, dass du Ziele formulierst, bevor du handelst. Was soll nach einer Woche anders sein als heute? Drei Problemfelder warten auf deinen Plan: 1) Sturzgefahr — Herr Bauer ist letzte Nacht gestürzt. 2) Körperpflege und Kontraktur — er lehnt Pflege ab. 3) Trinken und Mundschleimhaut — 900 ml sind zu wenig.",
  kontextB1:
    "Du weißt jetzt: Herr Bauer hat drei große Probleme. Erstens: Er kann wieder stürzen. Zweitens: Seine Knie werden steifer, weil er Körperpflege ablehnt. Drittens: Er trinkt zu wenig. Für jedes Problem brauchst du: ein Ziel und eine Maßnahme.",
  kernSteps: [
    // Inline-Wissen: Pflegeprozess und Pflegeziele \u2014 messbar formulieren
    {
      stepId: "ce02-bauer-plan-00b-pflegeprozess-ziele",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier (1981): Pflegeprozess-Modell", "DNQP 2022"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-00b-pflegeprozess-ziele",
      tag: "pflege",
      themaPrimaer: "pflegeprozess",
      themenSekundaer: ["pflegeplanung"],
      transition: "Du kennst den Pflegeprozess. Jetzt: Formuliere Ziele für Herrn Bauer.",
      contentC1: {
        title: "Pflegeprozess und Pflegeziele \u2014 messbar formulieren",
        body: "",
        glossarBegriffe: ["Pflegeziel", "Pflegeprozess", "messbar"],
      },
      contentB1: {
        title: "Was ist ein Pflegeziel? Wie schreibt man es?",
        body: "",
        glossarBegriffe: ["Pflegeziel", "Pflegeprozess", "messbar"],
      },
      inlineWissen: {
        bausteinRef: "pflegeprozess-ziele-grundlagen",
        storyAufhaenger: "Du planst jetzt die Pflege für Herrn Bauer. Der **Pflegeprozess** nach Fiechter/Meier (1981) hat 6 Schritte: Informieren \u2192 Erkennen \u2192 Planen \u2192 Durchführen \u2192 Evaluieren \u2192 Dokumentieren. Du bist gerade bei Schritt 3: Planen.",
        storyAufhaengerB1: "Du planst jetzt die Pflege. Der Pflegeprozess hat 6 Schritte. Du bist bei Schritt 3: Planen.",
        kerntext: "Der **Pflegeprozess** (Fiechter/Meier 1981) ist ein 6-Schritte-Kreislauf: Informieren \u2192 Erkennen \u2192 Planen \u2192 Durchführen \u2192 Evaluieren \u2192 Dokumentieren. Jeder Schritt baut auf dem vorherigen auf.\n\nEin **Pflegeziel** beschreibt, was der Patient in einem bestimmten Zeitraum zeigen oder können soll. Damit ein Ziel ueberprüfbar ist, muss es **messbar** sein:\n\n\u2022 **Wer?** \u2014 Herr Bauer (nicht: \"die Pflege\")\n\u2022 **Was?** \u2014 konkretes Verhalten oder Zustand\n\u2022 **Wann?** \u2014 Zeitrahmen (z. B. in 7 Tagen)\n\u2022 **Wie viel?** \u2014 Zahl oder beobachtbares Kriterium\n\nBeispiel: \"Herr Bauer stürzt in den nächsten 7 Tagen nicht erneut\" ist messbar. \"Herr Bauer soll sicherer sein\" ist NICHT messbar.",
        kerntextB1: "Der **Pflegeprozess** hat 6 Schritte: Informieren \u2192 Erkennen \u2192 Planen \u2192 Durchführen \u2192 Überprüfen \u2192 Aufschreiben.\n\nEin **Pflegeziel** sagt: Was soll der Patient in X Tagen zeigen?\n\nDas Ziel muss **messbar** sein:\n\u2022 Wer? \u2014 Herr Bauer\n\u2022 Was? \u2014 was genau soll anders sein\n\u2022 Wann? \u2014 in wie vielen Tagen\n\u2022 Wie viel? \u2014 eine Zahl oder ein Zeichen\n\nGut: \"Herr Bauer stürzt in 7 Tagen nicht.\" Schlecht: \"Herr Bauer soll sicherer sein.\"",
        faustregel: "Ein Pflegeziel muss messbar sein: Wer + Was + Wann + Wie viel. \"Soll sicherer sein\" ist kein Ziel \u2014 \"stürzt in 7 Tagen nicht\" ist eines.",
        faustregelB1: "Ein Pflegeziel muss messbar sein: Wer, Was, Wann, Wie viel.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Formuliere ein messbares Pflegeziel für Herrn Bauer (Sturzgefahr). Was macht ein Ziel messbar?",
          rueckseite: "Messbar = Wer + Was + Wann + Wie viel. Beispiel: \"Herr Bauer stürzt in 7 Tagen nicht (Maßnahmen: Nachtlicht, Niedrigbett, Toilettenangebot).\" Pflegeprozess nach Fiechter/Meier (1981): 6-Schritte-Kreislauf.",
        },
      },
    },

    // Step 3.1 — Freetext: Pflegeziele formulieren
    {
      stepId: "ce02-bauer-plan-01-ziele-formulieren",
      phase: 3,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier (1981): Pflegeprozess-Modell"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-plan-pflegeziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele formulieren",
        body: "Formuliere für ZWEI der drei Problemfelder je ein messbares Pflegeziel. Hinweis: Ein Pflegeziel nennt, was der Patient in X Tagen zeigen/können/erleben soll — konkret und überprüfbar.",
        glossarBegriffe: ["Pflegeziel", "Pflegeprozess", "messbar"],
      },
      contentB1: {
        title: "Pflegeziele schreiben",
        body: "Schreibe für ZWEI Probleme je ein Pflegeziel. Ein Pflegeziel sagt: Was soll Herr Bauer in X Tagen zeigen oder schaffen? Es muss messbar sein (= man kann prüfen ob es erreicht wurde).",
        glossarBegriffe: ["Pflegeziel", "messbar"],
      },
      question: {
        fragetext:
          "Formuliere für zwei der drei Problemfelder (Sturzgefahr / Kontraktur / Trinken) je ein messbares Pflegeziel.",
        musterantwort:
          "Sturzgefahr: Herr Bauer stürzt in den nächsten 7 Tagen nicht erneut, nachdem Nachtlicht, Niedrigbett und Toilettenangebot vor dem Schlafengehen eingeführt wurden. — Trinken: Herr Bauer nimmt täglich mindestens 1300 ml Flüssigkeit zu sich, ermöglicht durch Malzbier-Angebot und Trinkprotokoll.",
        bewertungskriterien: [
          "Pflegeziel ist messbar (konkrete Zahl oder beobachtbares Verhalten)",
          "Zeitrahmen genannt (z. B. in 7 Tagen)",
          "Patientenorientiert formuliert (nicht: 'die Pflege soll...')",
        ],
        satzanfaengeB1: [
          "Herr Bauer stürzt in den nächsten ... Tagen nicht, weil ...",
          "Herr Bauer trinkt täglich mindestens ... ml, indem ...",
          "Herrn Bauers Knie können sich ... bewegen nach ...",
        ],
      },
    },

    // Inline-Wissen: Sturzschutz bei Demenz \u2014 Massnahmen die wirken
    {
      stepId: "ce02-bauer-plan-01b-sturzschutz-maßnahmen",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022 \u2014 Sturzprophylaxe"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-01b-sturzschutz-maßnahmen",
      tag: "pflege",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["basale-stimulation"],
      transition: "Du kennst die Maßnahmen. Jetzt: Ordne sie den Risikofaktoren zu.",
      contentC1: {
        title: "Sturzschutz bei Demenz \u2014 Maßnahmen die wirken",
        body: "",
        glossarBegriffe: ["Sturzprophylaxe", "Niedrigbett", "Sensormatte", "Nachtlicht"],
      },
      contentB1: {
        title: "Wie schützt man Herrn Bauer vor Stürzen?",
        body: "",
        glossarBegriffe: ["Sturzprophylaxe", "Niedrigbett", "Sensormatte", "Nachtlicht"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-maßnahmen-demenz",
        storyAufhaenger: "Herr Bauer braucht Sturzschutz \u2014 aber nicht mit Bettgittern. Welche Maßnahmen wirken bei Demenz?",
        storyAufhaengerB1: "Wie schützt man Herrn Bauer nachts vor Stürzen?",
        kerntext: "**Sturzprophylaxe bei Demenz** (DNQP 2022) setzt auf Umgebungsanpassung statt Fixierung:\n\n\u2022 **Niedrigbett** \u2014 Bett auf niedrigste Position (ca. 20 cm ueber Boden). Sturzhöhe reduziert = Verletzungsrisiko sinkt. Keine Genehmigung nötig.\n\n\u2022 **Sensormatte** \u2014 Alarmiert wenn der Patient das Bett verlässt. Kein Fixierungsmittel \u2014 schränkt Bewegungsfreiheit nicht ein.\n\n\u2022 **Nachtlicht** \u2014 LED-Orientierungslicht mit Bewegungssensor. Reduziert Desorientierung bei nächtlichem Aufstehen.\n\n\u2022 Toilettengang vor dem Schlafengehen anbieten \u2014 reduziert nächtlichen Harndrang als Aufsteh-Ausloser.\n\n\u2022 Rutschfeste Socken \u2014 wenn er barfuss aufsteht.\n\n**Verboten ohne richterliche Genehmigung:** Bettgitter beidseitig hoch = Freiheitsentziehung. Niedrigbett + Sensormatte + Nachtlicht erreichen dasselbe Schutzniveau \u2014 ohne Fixierung.",
        kerntextB1: "**Sturzschutz bei Demenz:** Nicht mit Gittern, sondern mit Umgebung:\n\n\u2022 **Niedrigbett** \u2014 Bett ganz runter (20 cm ueber Boden). Weniger hoch = weniger Verletzung.\n\u2022 **Sensormatte** \u2014 Alarm wenn er aufsteht. Schränkt Bewegung nicht ein.\n\u2022 **Nachtlicht** \u2014 Licht mit Bewegungssensor. Er sieht wo er ist.\n\u2022 Toilette vor dem Schlafen anbieten.\n\u2022 Rutschfeste Socken.\n\nBettgitter beidseitig = verboten ohne Genehmigung.",
        faustregel: "Sturzschutz bei Demenz: Niedrigbett + Sensormatte + Nachtlicht. Nicht Bettgitter \u2014 das ist Fixierung.",
        faustregelB1: "Sturzschutz: Bett runter, Matte, Licht. Nicht Gitter \u2014 das ist verboten.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Welche 4 Sturzschutz-Maßnahmen sind bei Herrn Bauer (Demenz) sinnvoll und rechtlich unbedenklich?",
          rueckseite: "1) Niedrigbett (keine Genehmigung nötig). 2) Sensormatte (keine Fixierung). 3) Nachtlicht mit Sensor. 4) Toilettengang vor dem Schlafen. NICHT: Bettgitter beidseitig (= FEM, braucht richterliche Genehmigung nach Paragraph 1831 BGB).",
        },
      },
    },

    // Step 3.2 — Matching: Sturzprophylaxe-Maßnahmen
    {
      stepId: "ce02-bauer-plan-02-sturzprophylaxe-maßnahmen",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-bauer-plan-sturzschutz",
      tag: "pflege",
      contentC1: {
        title: "Sturzschutz-Maßnahmen zuordnen",
        body: "Welche Sturzschutz-Maßnahme gehört zu welchem Sturzrisiko? Ordne die 5 Paare zu.",
        glossarBegriffe: ["Sturzprophylaxe", "Niedrigbett", "Sensormatte"],
      },
      contentB1: {
        title: "Welche Maßnahme passt wozu?",
        body: "Verbinde jede Maßnahme mit ihrem passenden Sturzrisiko.",
        glossarBegriffe: ["Sturzprophylaxe", "Nachtlicht", "Niedrigbett"],
      },
      question: {
        fragetext:
          "Ordne jede Sturzschutz-Maßnahme dem passenden Risikofaktor zu.",
        matchingPairs: [
          {
            left: "Nachtlicht + Sensormatte am Bett",
            right: "Desorientierung in der Nacht",
          },
          {
            left: "Niedrigbett-Position zur Nacht",
            right: "Sturzfolgen reduzieren (Höhe verringern)",
          },
          {
            left: "Tagesstruktur mit Beschäftigungsangeboten",
            right: "Unruhe und Weglauftendenz",
          },
          {
            left: "Toilettengang vor dem Schlafengehen anbieten",
            right: "Nächtlicher Harndrang als Aufsteh-Auslöser",
          },
          {
            left: "Rutschfeste Socken",
            right: "Bodenkontakt beim unerwarteten Aufstehen",
          },
        ],
      },
    },

    // Step 3.2b — Inline-Wissen: Ganzkörperpflege bei Demenz
    // Bevor der Schueler den Bewegungsablauf der Morgenpflege plant (3.3), muss er
    // verstehen: Ganzkörperpflege bei Demenz ist NICHT nur Hygiene — sie ist
    // Beziehungsgestaltung, Schmerzbeobachtung und Kontraktur-Prophylaxe in einem.
    {
      stepId: "ce02-bauer-plan-02b-ganzkörperpflege-demenz",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Bienstein C./Fröhlich A. (2021): Basale Stimulation in der Pflege",
        "DNQP 2018 — Beziehungsgestaltung bei Demenz",
        "Kitwood T. (1997): Dementia Reconsidered",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-ganzkörperpflege",
      tag: "pflege",
      themaPrimaer: "ganzkörperpflege",
      themenSekundaer: ["basale-stimulation", "kontraktur-prophylaxe"],
      transition: "Ganzkörperpflege ist bei Herrn Bauer mehr als Hygiene. Jetzt: der konkrete Bewegungsablauf.",
      contentC1: {
        title: "Ganzkörperpflege bei Demenz — drei Ziele in einer Handlung",
        body: "",
        glossarBegriffe: ["Ganzkörperpflege", "Initialberührung", "Beziehungsgestaltung", "Bewegung", "Kontrakturprophylaxe", "Spitzfuss", "Spitzfussprophylaxe", ],
      },
      contentB1: {
        title: "Wie pflege ich Herrn Bauer?",
        body: "",
        glossarBegriffe: ["Ganzkörperpflege", "Beziehungsgestaltung"],
      },
      inlineWissen: {
        bausteinRef: "ganzkörperpflege-bei-demenz",
        storyAufhaenger:
          "Morgen früh wirst du Herrn Bauer waschen. Er hat heute bei der Gesichtswäsche zugeschlagen. Er trinkt wenig. Seine Knie werden steifer. Die Ganzkörperpflege ist deine einzige Gelegenheit, drei Probleme gleichzeitig anzugehen — aber nur wenn du sie richtig planst.",
        storyAufhaengerB1:
          "Morgen früh wäschst du Herrn Bauer. Heute hat er zugeschlagen als du sein Gesicht waschen wolltest. Seine Knie werden steifer. Er trinkt zu wenig. Die Morgen-Pflege ist deine Chance, drei Probleme auf einmal zu lösen.",
        kerntext:
          "Ganzkörperpflege bei Menschen mit Demenz verfolgt **drei Ziele gleichzeitig** (Bienstein/Fröhlich 2021, Kitwood 1997):\n\n**1. Beziehungsgestaltung (DNQP 2018)**\n\n• Initialberührung an immer gleicher Stelle (z. B. Schulter) — Wiedererkennungs-Signal\n• Jeden Handgriff ankündigen: \"Ich wasche jetzt deinen rechten Arm\"\n• Nie gegen Widerstand waschen — Pause ist legitim\n• Biografische Ressourcen nutzen: Lieblingsmusik, vertraute Gerüche\n\n**2. Schmerzbeobachtung (BESD während Pflege)**\n\n• Jede Berührung ist eine diagnostische Gelegenheit: Reagiert er mit Grimasse? Abwehr? Steifheit?\n• BESD in Ruhe VOR der Pflege, dann WAEHREND der Pflege (Bewegung) erheben\n\n**3. Kontraktur-Prophylaxe (integriert)**\n\n• Arme und Beine während der Waschung aktiv-assistiv bewegen\n• Fußsohlenstimulation beim Abtrocknen (Spitzfuß-Prophylaxe)\n• Maximaler Bewegungsumfang nutzen — nicht ueber Schmerzgrenze\n\n**Reihenfolge nach Hygiene:**\n\nGesicht → Hände/Arme → Brust → Bauch → Rücken → Beine/Fueße → Genital → Anal\n(sauber → unrein, DNQP Hygienestandard)",
        kerntextB1:
          "Ganzkörperpflege bei Demenz hat **drei Ziele auf einmal**:\n\n**1. Beziehung aufbauen**\n\n• Immer an der gleichen Stelle anfassen (z. B. Schulter) — so erkennt er dich wieder\n• Immer sagen was du tust: \"Ich wasche jetzt deinen Arm\"\n• Stoppen wenn er sich wehrt\n• Musik anmachen die er mag\n\n**2. Schmerz beobachten**\n\n• Jede Berührung zeigt dir: Hat er Schmerzen? Grimasse? Steifheit? Abwehr?\n• BESD vor der Pflege und während der Pflege messen\n\n**3. Gelenke bewegen**\n\n• Arme und Beine beim Waschen bewegen\n• Fußsohlen beim Abtrocknen stimulieren\n• Nicht ueber die Schmerzgrenze gehen\n\n**Reihenfolge:** Gesicht zuerst → Arme → Brust → Bauch → Rücken → Beine → Genitalbereich zuletzt (sauber nach unrein)",
        faustregel:
          "Ganzkörperpflege bei Demenz ist nicht Hygiene — sie ist Beziehung, Schmerzbeobachtung und Kontraktur-Prophylaxe in einem Handlungsablauf.",
        faustregelB1:
          "Die Morgen-Pflege ist bei Demenz drei Dinge gleichzeitig: Beziehung, Schmerzbeobachtung, Gelenkbewegung.",
        spektrum: [
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Post-OP Einschränkung",
            kurzbeschreibung:
              "Nach Hüft-TEP: Ganzkörperpflege im Bett mit Bewegungseinschränkung (keine Adduktion, max. 90 Grad). Patientin ist orientiert und kooperativ — Hauptherausforderung ist die Lagerungsregel, nicht die Beziehung.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese — betroffene Seite integrieren",
            kurzbeschreibung:
              "Nach Schlaganfall: Die betroffene Seite wird bei der Pflege gezielt einbezogen (Bobath-Konzept). Waschen der gelähmten Hand MIT der gelähmten Hand führen — Körperschema aktivieren.",
          },
          {
            patientName: "Emilia (Säugling)",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Säugling, Bronchiolitis",
            kurzbeschreibung:
              "Bei Säugling: Baden/Waschen ist somatische Stimulation pur. Wassertemperatur 37 Grad, kurze Dauer, Haut-zu-Haut-Kontakt danach. Saubere-nach-unrein-Reihenfolge gilt auch hier (Nabelrest → Genitalbereich zuletzt).",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Bariatrik + Hautfalten",
            kurzbeschreibung:
              "Bei BMI 38: besondere Aufmerksamkeit auf Hautfalten (Intertrigo-Risiko). Körperpflege-Herausforderung: Zugang zu allen Hautpartien, Equipment-Bedarf (Schwerlast-Bett, Lifter). Pflege-Beziehung: Scham ansprechen, nicht ignorieren.",
          },
        ],
        sonstBox:
          "Unterschied beruhigende vs. belebende Waschung (Bienstein/Fröhlich 2021): **Beruhigend** = in Haarwuchsrichtung (von peripher nach zentral: Schulter → Hand), Wassertemperatur körperwarm. **Belebend** = gegen Haarwuchsrichtung (Hand → Schulter), Wasser etwas kühler. Bei Herrn Bauer morgens: beruhigend (er ist agitiert). Abends oder bei Apathie: belebend könnte sinnvoll sein.",
        sonstBoxB1:
          "Zwei Arten der Waschung: **Beruhigend** = in Haarrichtung waschen (von Schulter zur Hand), warmes Wasser. **Belebend** = gegen Haarrichtung (von Hand zur Schulter), kühler. Bei Herrn Bauer morgens: beruhigend (weil er aufgeregt ist).",
        karteikarte: {
          vorderseite:
            "Du planst die Ganzkörperpflege bei Herrn Bauer (Demenz FAST 6a, Kontrakturgefahr, Sturzfolge). Welche drei Ziele verfolgst du gleichzeitig?",
          rueckseite:
            "1. **Beziehungsgestaltung**: Initialberührung, Ankündigung, Biografiearbeit (Musik), keine Zwangspflege (DNQP 2018, Kitwood 1997)\n2. **Schmerzbeobachtung**: BESD in Ruhe + bei Bewegung während der Pflege\n3. **Kontraktur-Prophylaxe**: Arme/Beine aktiv-assistiv bewegen, Fußsohlenstimulation\n\nReihenfolge: sauber → unrein (Gesicht zuerst, Genital/Anal zuletzt). Beruhigende Waschung: in Haarwuchsrichtung, körperwarmes Wasser (Bienstein/Fröhlich 2021). Faustregel: **Ganzkörperpflege bei Demenz = Beziehung + Schmerzbeobachtung + Kontraktur-Prophylaxe in einem.**",
        },
      },
    },
// Step 3.3 — Sequencing: Bewegungsablauf Morgenpflege planen
    {
      stepId: "ce02-bauer-plan-03-bewegungsplan",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bienstein C./Fröhlich A. (2021)",
        "DNQP Kontrakturprophylaxe 2014",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-plan-bewegungsablauf",
      tag: "pflege",
      contentC1: {
        title: "Bewegungsablauf Morgenpflege planen",
        body: "Plane den Bewegungsablauf für die Morgenpflege bei Herrn Bauer. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Basale Stimulation", "Spitzfußprophylaxe", "Kontrakturprophylaxe"],
      },
      contentB1: {
        title: "Reihenfolge der Morgenpflege",
        body: "Bringe die Schritte der Morgenpflege in die richtige Reihenfolge.",
        glossarBegriffe: ["Basale Stimulation", "Spitzfuß", "Bewegung"],
      },
      question: {
        fragetext:
          "Sortiere die Schritte des Bewegungsablaufs bei der Morgenpflege in die richtige Reihenfolge (1 = zuerst).",
        sequencing: {
          instruction: "Ziehe die Karten in die richtige Reihenfolge.",
          items: [
            {
              id: "b1",
              label:
                "Raum vorbereiten — Pflegemittel bereitstellen, Zimmer angenehm warm",
            },
            {
              id: "b2",
              label:
                "Kontakt herstellen — Namen nennen, ankündigen was du tust",
            },
            {
              id: "b3",
              label:
                "Körperpflege mit Basaler Stimulation (beruhigend, in Haarwuchsrichtung)",
            },
            {
              id: "b4",
              label:
                "Passive Kniebewegung während/nach Pflege — maximal bis schmerzfreie Grenze",
            },
            {
              id: "b5",
              label:
                "Spitzfuß-Prophylaxe: Fußsohle gegen Brett oder weiches Kissen stellen",
            },
            {
              id: "b6",
              label:
                "Lagerungskontrolle — Knie nicht dauerhaft flektiert lassen, auspolstern",
            },
          ],
        },
      },
    },

    // Inline-Wissen: Interprofessionelle Zusammenarbeit \u2014 wer macht was?
    {
      stepId: "ce02-bauer-plan-03b-interprofessionell",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022 \u2014 Sturzprophylaxe", "Paragraph 63 SGB V"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-03b-interprofessionell",
      tag: "pflege",
      themaPrimaer: "pflegeprozess",
      themenSekundaer: ["sturz-prophylaxe", "kontraktur-prophylaxe"],
      transition: "Du kennst die Zuständigkeiten. Jetzt: Ordne die Maßnahmen in die Matrix.",
      contentC1: {
        title: "Interprofessionelle Zusammenarbeit \u2014 wer macht was?",
        body: "",
        glossarBegriffe: ["Interdisziplinär", "Physiotherapie", "Mirtazapin", "Arzt", "Pflege"],
      },
      contentB1: {
        title: "Wer hilft bei Herrn Bauer? Pflege, Arzt, Physiotherapie",
        body: "",
        glossarBegriffe: ["Physiotherapie", "Mirtazapin", "Arzt", "Pflege"],
      },
      inlineWissen: {
        bausteinRef: "pflegeprozess-interprofessionell",
        storyAufhaenger: "Herrn Bauers Pflege ist kein Ein-Personen-Job. Mindestens drei Berufsgruppen müssen zusammenarbeiten: Pflege, Arzt, Physiotherapie. Wer ist wofür zuständig?",
        storyAufhaengerB1: "Drei Berufsgruppen arbeiten bei Herrn Bauer zusammen: Pflege, Arzt, Physiotherapie. Wer macht was?",
        kerntext: "**Interdisziplinär** (auch: interprofessionell) = mehrere Berufsgruppen arbeiten gemeinsam am Pflegeplan.\n\n**Pflege** \u2014 Koordiniert den Pflegeprozess, führt Körperpflege, Sturzprophylaxe, Dokumentation durch. Erkennt Veränderungen zuerst.\n\n**Arzt** \u2014 Medikamentenänderungen, Diagnostik. Bei Herrn Bauer: **Mirtazapin**-Dosis prüfen. Mirtazapin ist ein Antidepressivum mit dosisabhängiger Sedierung (PRISCUS-Liste 2023 = potenziell inadäquat bei Älteren). Es verursacht nächtliche Gangunsicherheit und orthostatische Hypotonie \u2014 beides Sturzrisikofaktoren.\n\n**Physiotherapie** \u2014 Fuehrt passives Durchbewegen der Kniegelenke durch, gibt Empfehlungen für Lagerung, plant Mobilisation.\n\nDie Pflege koordiniert \u2014 aber entscheidet nicht ueber Medikamente (Arzt-Vorbehalt).",
        kerntextB1: "**Interdisziplinär** = verschiedene Berufsgruppen arbeiten zusammen.\n\n**Pflege** \u2014 macht die tägliche Pflege, Sturzschutz, Dokumentation.\n\n**Arzt** \u2014 aendert Medikamente, macht Diagnostik. Bei Herrn Bauer: **Mirtazapin** (Schlafmittel) prüfen \u2014 es macht ihn nachts unsicher auf den Beinen.\n\n**Physiotherapie** \u2014 bewegt seine Knie, plant die Mobilisation.\n\nDie Pflege koordiniert \u2014 aber Medikamente ändern darf nur der Arzt.",
        faustregel: "Interdisziplinär = Pflege + Arzt + Physiotherapie gemeinsam. Mirtazapin prüfen lassen \u2014 PRISCUS-Liste, Sturzrisiko.",
        faustregelB1: "Zusammenarbeit: Pflege + Arzt + Physiotherapie. Mirtazapin prüfen \u2014 macht ihn unsicher auf den Beinen.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Welche drei Berufsgruppen sind für Herrn Bauer zuständig und was ist die Rolle der Pflege?",
          rueckseite: "Pflege: Koordination, Körperpflege, Sturzprophylaxe, Dokumentation. Arzt: Mirtazapin-Dosis prüfen (PRISCUS 2023, dosisabhängige Sedierung). Physiotherapie: passives Durchbewegen Knie, Mobilisationsplanung. Pflege koordiniert, entscheidet nicht ueber Medikamente.",
        },
      },
    },

    // Step 3.4 — Matrix: Interprofessionelle Zuständigkeiten
    {
      stepId: "ce02-bauer-plan-04-interprofessionell",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022",
        "Interdisziplinäre Pflegestandards",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-plan-interprofessionalität",
      tag: "pflege",
      contentC1: {
        title: "Interprofessionelle Matrix: Wer macht was wann?",
        body: "Ordne jede Maßnahme in die Matrix ein: Zeilen = Berufsgruppe (Pflege / Physiotherapie / Arzt), Spalten = Zeitrahmen (Heute / Diese Woche).",
        glossarBegriffe: [
          "Interdisziplinär",
          "Physiotherapie",
          "Mirtazapin",
        ],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Ordne die Maßnahmen zu: Wer macht es (Pflege, Physiotherapie, Arzt)? Und wann (Heute oder Diese Woche)?",
        glossarBegriffe: ["Physiotherapie", "Arzt", "Pflege"],
      },
      question: {
        fragetext:
          "Ordne jede Maßnahme einem Quadranten zu: Pflege/Heute (Q1), Arzt/Heute (Q2), Pflege/Diese Woche (Q3), Physiotherapie/Diese Woche (Q4).",
        matrix: {
          instruction:
            "Ordne jede Maßnahme einem Quadranten zu. Achse X: Heute ↔ Diese Woche. Achse Y: Pflege ↔ Arzt/Physio.",
          axisX: {
            label: "Zeitrahmen",
            low: "Heute (sofort)",
            high: "Diese Woche",
          },
          axisY: {
            label: "Berufsgruppe",
            low: "Pflege",
            high: "Arzt / Physiotherapie",
          },
          items: [
            {
              id: "p1",
              text: "Nachtlicht und Niedrigbett einrichten",
              correctQuadrant: 1,
            },
            {
              id: "p2",
              text: "Sturzprotokoll vervollständigen",
              correctQuadrant: 1,
            },
            {
              id: "p3",
              text: "Trinkprotokoll einführen",
              correctQuadrant: 1,
            },
            {
              id: "p4",
              text: "Mirtazapin-Dosis prüfen lassen (Antidepressivum mit dosisabhängiger Sedierung, PRISCUS-Liste — Sturzrisiko)",
              correctQuadrant: 2,
            },
            {
              id: "p5",
              text: "Tochter Ingrid über Sturzgeschehen informieren",
              correctQuadrant: 1,
            },
            {
              id: "p6",
              text: "Passives Durchbewegen Knie täglich durch Physio",
              correctQuadrant: 4,
            },
          ],
        },
      },
    },
  ],

  optionaleSteps: [
    // Step 3.5 — Checklist: Trinken bei Demenz
    {
      stepId: "ce02-bauer-plan-05-trinken-strategie",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Förderung Harnkontinenz 2014"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-trinken",
      tag: "krankheitslehre",
      displayFormat: "checklist",
      contentC1: {
        title: "Trinkmenge erhöhen bei Demenz — 5 Strategien",
        body: "Herr Bauer trinkt auf Aufforderung nicht. Wie erhöhst du die Trinkmenge trotzdem? 5 Strategien die funktionieren:\n\n✓ Tasse in die Hand geben — nicht bitten: Er trinkt bereitwilliger wenn er eine Tasse in der Hand hält.\n✓ Lieblingsgetränk: alkoholfreies Malzgetränk (Malzbier, Malztrunk — nicht zu verwechseln mit alkoholhaltigem Bier; Alkohol wäre wegen Mirtazapin kontraindiziert) aus Biographie bereitstellen — erhöht Trinkmotivation.\n✓ Trinken im sozialen Kontext: Frühstück, Mittagessen — kein isoliertes Trinken.\n✓ Flüssigkeitsreiche Lebensmittel: Suppe, Joghurt, Wassermelone — zählen zur Flüssigkeitsbilanz.\n✓ Miktionsprotokoll führen — um die Tendenz zu erkennen und den Plan zu justieren.\n\nQuelle: DNQP Förderung der Harnkontinenz (2014).",
        glossarBegriffe: ["Flüssigkeitsbilanz", "Miktionsprotokoll", "Exsikkose"],
      },
      contentB1: {
        title: "Wie trinkt Herr Bauer mehr?",
        body: "Herr Bauer trinkt nicht, wenn man ihn bittet. Wie geht das trotzdem? 5 Strategien:\n\n✓ Tasse in die Hand geben — er trinkt dann besser.\n✓ Alkoholfreies Malzgetränk (Malzbier ohne Alkohol) anbieten — das mag er (aus seiner Lebensgeschichte). Wichtig: Kein Alkohol — er nimmt Mirtazapin.\n✓ Beim Essen trinken — nicht alleine.\n✓ Suppe und Joghurt geben — das zählt auch als Trinken.\n✓ Aufschreiben wie viel er trinkt — dann weißt du wie es sich verändert.",
        glossarBegriffe: ["Flüssigkeit", "Exsikkose"],
      },
    },

    // Inline-Wissen: Freiheitsentziehende Massnahmen \u2014 Recht und Pflege
    {
      stepId: "ce02-bauer-plan-05b-freiheitsentziehung",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Paragraph 1831 BGB", "DNQP 2022 \u2014 Sturzprophylaxe"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-05b-freiheitsentziehung",
      tag: "pflege",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["pflegeprozess"],
      transition: "Rechtliche Grundlagen im Kopf? Prüfe dein Wissen.",
      contentC1: {
        title: "Freiheitsentziehende Maßnahmen \u2014 Recht und Pflege",
        body: "",
        glossarBegriffe: ["Freiheitsentziehende Maßnahme", "Paragraph 1831 BGB", "Richterliche Genehmigung", "Freiheitsentziehung", "Genehmigung", "Bettgitter"],
      },
      contentB1: {
        title: "Was darf die Pflege? Was ist Freiheitsentziehung?",
        body: "",
        glossarBegriffe: ["Freiheitsentziehung", "Bettgitter", "Genehmigung"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-freiheitsentziehung",
        storyAufhaenger: "Frau Meier fragt dich: \"Sollen wir bei Herrn Bauer das Bettgitter hochstellen? Er ist ja schon einmal gestürzt.\" Das klingt vernünftig \u2014 ist aber rechtlich hochsensibel.",
        storyAufhaengerB1: "Frau Meier fragt: \"Sollen wir das Bettgitter hochstellen?\" Das klingt logisch \u2014 ist aber kompliziert.",
        kerntext: "**Freiheitsentziehende Maßnahme (FEM)** = jede Maßnahme die die Bewegungsfreiheit eines Menschen gegen seinen Willen einschränkt (Paragraph 1831 BGB).\n\nBeispiele: **Bettgitter beidseitig** hoch, Fixiergurt, abgeschlossene Tuer, sedierende Medikamente zur Ruhigstellung.\n\n**Paragraph 1831 Abs. 4 BGB:** FEM erfordert **IMMER** eine Genehmigung des Betreuungsgerichts. Auch der gesetzliche Betreuer kann FEM nicht allein einwilligen \u2014 er **beantragt** sie beim Gericht:\n\u2022 Betreuer beantragt beim **Betreuungsgericht** die Genehmigung\n\u2022 Gericht pr\u00fcft Erforderlichkeit und genehmigt (oder lehnt ab)\n\u2022 Ohne richterliche Genehmigung keine FEM zul\u00e4ssig\n\u2022 **Einzige Ausnahme:** Akute Notlage (rechtfertigender Notstand, Paragraph 34 StGB) \u2014 kurzzeitig erlaubt, danach sofort Genehmigung beantragen.\n\n**Bettgitter bei Herrn Bauer:**\n\u2022 Beidseitig hoch = FEM = braucht richterliche Genehmigung (auch wenn Betreuerin Ingrid zustimmt \u2014 sie allein reicht nicht).\n\u2022 Einseitig hoch (Patient kann auf der anderen Seite raus) = je nach Auslegung keine FEM.\n\u2022 Bessere Alternative: Niedrigbett + Sensormatte \u2014 kein FEM, gleicher Schutz.\n\n**Frau Meier soll also NICHT einfach das Gitter hochstellen.** Ohne richterliche Genehmigung keine FEM — auch nicht mit Ingrids Zustimmung allein (Paragraph 1831 Abs. 4 BGB). Alternativen nutzen.",
        kerntextB1: "**Freiheitsentziehung** = Maßnahmen die Bewegung einschränken, obwohl der Patient das nicht will.\n\nBeispiele: **Bettgitter** beidseitig hoch, Fixiergurt, abgeschlossene Tuer.\n\n**Was sagt das Gesetz (Paragraph 1831 Abs. 4 BGB)?** FEM braucht **IMMER** eine Genehmigung vom Gericht (Betreuungsgericht). Auch die Betreuerin (Ingrid) kann das nicht allein erlauben \u2014 sie muss es beim Gericht beantragen.\n\u2022 Nur in akuter Gefahr (Notstand): kurz erlaubt, dann sofort Genehmigung beantragen.\n\n**Bettgitter bei Herrn Bauer:**\n\u2022 Beide Seiten hoch = Freiheitsentziehung = Genehmigung nötig.\n\u2022 Bessere Lösung: Niedrigbett + Sensormatte = kein Gitter nötig.",
        faustregel: "Bettgitter beidseitig = FEM = richterliche Genehmigung nötig (Paragraph 1831 BGB). Alternative: Niedrigbett + Sensormatte \u2014 kein FEM, gleicher Schutz.",
        faustregelB1: "Bettgitter beidseitig hoch = verboten ohne Genehmigung. Besser: Bett runter + Matte.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Darf das Bettgitter bei Herrn Bauer (Demenz, Sturzrisiko) ohne Genehmigung hochgestellt werden?",
          rueckseite: "Nein. Bettgitter beidseitig = FEM nach Paragraph 1831 Abs. 4 BGB. Braucht IMMER richterliche Genehmigung des Betreuungsgerichts — auch Betreuerin Ingrid kann allein nicht einwilligen, sie beantragt beim Gericht. Alternative: Niedrigbett + Sensormatte (keine FEM). Nur bei akuter Notlage (Paragraph 34 StGB) kurzzeitig erlaubt.",
        },
      },
    },

    // Step 3.6 — TrueFalse: Freiheitsentziehung rechtlich
    {
      stepId: "ce02-bauer-plan-06-freiheitsentziehung",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 1831 BGB", "DNQP Sturzprophylaxe 2022"],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-bauer-plan-rechtliches",
      tag: "pflege",
      contentC1: {
        title: "Freiheitsentziehende Maßnahmen — richtig/falsch?",
        body: "Rechtliche Fragen rund um Sturzschutz bei Demenz. Welche Aussagen stimmen?",
        glossarBegriffe: [
          "Freiheitsentziehende Maßnahme",
          "§ 1831 BGB",
          "Richterliche Genehmigung",
        ],
      },
      contentB1: {
        title: "Darf ich das? — Rechtliche Fragen",
        body: "Was darf die Pflege bei Herrn Bauer tun? Welche Aussagen stimmen?",
        glossarBegriffe: ["Freiheitsentziehung", "Genehmigung", "Bettgitter"],
      },
      question: {
        fragetext: "Richtig oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Ein Bettgitter darf bei Herrn Bauer ohne Genehmigung hochgestellt werden, wenn er in der Nacht weglaufen will.",
            isTrue: false,
            explanation:
              "Falsch — Bettgitter ist eine freiheitsentziehende Maßnahme. § 1831 Abs. 4 BGB verlangt IMMER eine richterliche Genehmigung des Betreuungsgerichts — auch der gesetzliche Betreuer kann nicht allein einwilligen, sondern beantragt die Genehmigung beim Gericht. Nur in unmittelbarer Notlage (akute Selbstverletzungs- oder Lebensgefahr, rechtfertigender Notstand nach § 34 StGB) kurzzeitig erlaubt — danach muss umgehend eine richterliche Genehmigung beantragt werden. \"Akute Sturzgefahr\" als Dauerzustand bei Demenz reicht hierfür nicht aus.",
          },
          {
            statement:
              "Ein Niedrigbett (Pflegebett in unterster Position) ist keine freiheitsentziehende Maßnahme.",
            isTrue: true,
            explanation:
              "Richtig — ein Niedrigbett schränkt die Bewegungsfreiheit nicht ein. Es ist eine Sicherheitsmaßnahme ohne Fixierung. Keine Genehmigung erforderlich, aber Einwilligung des Betreuers ist empfehlenswert.",
          },
          {
            statement:
              "Sensormatten am Boden neben dem Bett (Alarm bei Bodenberührung) gelten als freiheitsentziehende Maßnahme.",
            isTrue: false,
            explanation:
              "Falsch — Sensormatten schränken die Bewegungsfreiheit nicht ein. Sie lösen nur Alarm aus. Sie gelten nach herrschender Rechtsauffassung nicht als Fixierung. Einwilligung des Betreuers wird dennoch empfohlen. Rechtliche Grauzone: In Kombination mit verschlossener Stationstür haben einzelne Gerichte Sensormatten als Teil einer FEM eingestuft.",
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};

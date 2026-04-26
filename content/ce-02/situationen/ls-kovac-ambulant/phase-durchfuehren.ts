// CE-02 Situation Kovač — Phase 4: Durchführen — Atemübungen, Bewegung, Komplikationen
// Steps: 7 (inkl. 2 Komplikationen mit Branching) · Bloom: B4-B5 · Zeit: ~30-45 Min
// Quelle: phase-durchfuehren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-durchfuehren",
  phase: "durchfuehren",
  titel: "Durchführen & Reagieren",
  titelB1: "Übungen machen und auf Probleme reagieren",
  kontext:
    "Es ist jetzt 08:00 Uhr. Du hast 30 Minuten bis du gehen musst. Der Plan steht: Atemübungen mit Lippenbremse, Bewegungsübungen für Knie und Sprunggelenke im Sitzen, Trinkprotokoll für heute festlegen, und kurze Schlafhygiene-Vorbesprechung fürs Abendgespräch. Frau Kovač sitzt im Sessel. Du beginnst mit den Atemübungen — sanft, weil du weißt: zu schnell, und sie wird kurzatmig.",
  kontextB1:
    "Es ist 08:00 Uhr. Du hast noch 30 Minuten. Jetzt machst du die geplanten Übungen mit Frau Kovač. Atem-Übungen, Bewegungs-Übungen, Trinken besprechen. Und dann passiert etwas Unerwartetes — zweimal.",
  kernSteps: [
    // Step 4.1 — Atemübungen Schritt-für-Schritt
    {
      stepId: "ce02-kovac-dur-01-atemuebungen-erklaert",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-dur-atemübungen",
      tag: "krankheitslehre",
      displayFormat: "stepbystep",
      bildkategorie: "prozedur",
      bildhinweis:
        "Ältere Frau im Sessel macht Atemübungen mit Lippenbremse, Pflegekraft sitzt daneben, freundlich anleitend, morgendliches Licht, illustrativer medizinischer Stil, kein Text",
      imageAlt:
        "Pflegekraft leitet ältere Patientin bei Atemübungen mit Lippenbremse an",
      contentC1: {
        title: "Lippenbremse und Kontaktatmung — Schritt für Schritt",
        body: "**Schritt 1 — Position einstellen**\nFrau Kovač sitzt aufrecht im Sessel mit Rückenlehne, leicht vorgeneigt. Hände locker auf den Oberschenkeln. Schultern bewusst entspannen.\n\n**Schritt 2 — Einatmen**\nEinatmen durch die Nase — ruhig und langsam (ca. 2 Sekunden). Kein Schulterheben. Der Bauch hebt sich leicht.\n\n**Schritt 3 — Ausatmen mit Lippenbremse**\nLippen leicht schließen — wie beim Auspusten einer Kerze oder durch einen Strohhalm. Ausatmen 4 Sekunden. Das ist doppelt so lang wie das Einatmen. Das Pfeifen ist gewollt.\n\n**Schritt 4 — Kontaktatmung**\nDu legst die Hände sanft seitlich auf den unteren Brustkorb. Die Hände **folgen** der Ausatemphase passiv — sie drücken nicht. Es geht um Wahrnehmung (propriozeptiver Reiz), nicht um mechanische Atemunterstützung.\n\n**Achtung:** Bei akuter Atemnot oder Exazerbation diese Übung **nicht** anwenden — externer Druck auf den Brustkorb ist dann kontraindiziert. Stattdessen nur Lippenbremse + Kutschersitz.\n\n**Wichtig:** Nie mehr als 3–5 Wiederholungen am Stück bei COPD III. Danach Pause und Befindlichkeit erfragen. Quelle: (GOLD-Report COPD 2023; Pflege Heute 7. Aufl. Kapitel Atmung)",
        fallbezug:
          "Frau Kovač hat gestern nur 3 Minuten geschafft bevor sie erschöpft war. Heute startest du ruhiger — 3 Wiederholungen, dann kurze Pause und Beobachtung.",
        glossarBegriffe: [
          "Lippenbremse",
          "Kontaktatmung",
          "PEEP-Effekt",
          "Propriozeptiv",
        ],
      },
      contentB1: {
        title: "Atem-Übungen — so geht das",
        body: "**Schritt 1 — Hinsetzen**\nFrau Kovač sitzt aufrecht im Sessel. Leicht vorgeneigt. Hände auf den Knien.\n\n**Schritt 2 — Einatmen**\nDurch die Nase einatmen — ruhig und langsam (2 Sekunden). Keine Schultern hochziehen.\n\n**Schritt 3 — Ausatmen mit Lippenbremse**\nLippen leicht schließen — wie durch einen Strohhalm ausatmen (4 Sekunden). Doppelt so lang wie einatmen.\n\n**Schritt 4 — Kontaktatmung**\nDu legst deine Hände sanft auf den unteren Brustkorb. Die Hände **folgen** der Ausatmung — du drückst nicht. Das hilft der Patientin, ihre eigene Atmung zu spüren.\n\n**Achtung:** Wenn sie gerade akut Atemnot hat — diese Übung **nicht** machen. Dann nur Lippenbremse + Kutschersitz.\n\n**Wichtig:** Nur 3–5 Wiederholungen — dann Pause. Bei COPD ist die Lunge schnell erschöpft.",
        fallbezug:
          "Gestern hat Frau Kovač nur 3 Minuten durchgehalten. Heute machst du es langsamer und ruhiger.",
        glossarBegriffe: ["Lippenbremse", "Kontaktatmung"],
      },
    },

    // Step 4.2 — Atemübung MC
    {
      stepId: "ce02-kovac-dur-02-atemuebung-ausfuehren-mc",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-kovac-ambulant-dur-lippenbremse-check",
      tag: "krankheitslehre",
      contentC1: {
        title: "Lippenbremse — was zeigt dir, dass sie funktioniert?",
        body: "Frau Kovač macht die ersten 3 Wiederholungen mit. Du beobachtest. Was ist das wichtigste Zeichen, dass die Lippenbremse korrekt ausgeführt wird?",
        glossarBegriffe: ["Lippenbremse", "PEEP-Effekt"],
      },
      contentB1: {
        title: "Wie erkennst du eine richtige Lippenbremse?",
        body: "Frau Kovač macht die Übung. Du schaust zu. Was zeigt dir: Sie macht es richtig?",
        glossarBegriffe: ["Lippenbremse"],
      },
      question: {
        fragetext:
          "Was ist das wichtigste Zeichen, dass die Lippenbremse korrekt ausgeführt wird?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Die Patientin atmet schneller als vorher.",
            isCorrect: false,
            explanation:
              "Tachypnoe ist kein Ziel, sondern ein Warnsignal. Schnellere Atmung zeigt erhöhte Atemarbeit — das Gegenteil von dem, was die Lippenbremse bewirken soll.",
            explanationB1:
              "Falsch. Schnellere Atmung ist ein Warnsignal. Die Lippenbremse soll die Atmung ruhiger machen, nicht schneller.",
          },
          {
            text: "Die Ausatmungsphase ist länger als die Einatmungsphase und ein leises Pfeifen ist hörbar.",
            isCorrect: true,
            explanation:
              "Richtig. Das ist das Wirkprinzip der Lippenbremse: Die verlängerte Ausatmung (Verhältnis 1:2 — 2 Sek ein, 4 Sek aus) erzeugt einen erhöhten intrabronchialen Druck (PEEP-Effekt) und verhindert das Kollabieren der kleinen Atemwege. Das leise Pfeifen bestätigt: Die Lippen sind richtig positioniert.",
            explanationB1:
              "Richtig. Die Ausatmung dauert länger als die Einatmung. Und man hört ein leises Pfeifen durch die Lippen. Das zeigt: Es funktioniert.",
          },
          {
            text: "Die Patientin hustet nach der Übung.",
            isCorrect: false,
            explanation:
              "Husten nach Atemübung kann vorkommen (Sekretmobilisation), ist aber kein Wirkzeichen. Als Ziel der Lippenbremse ist Husten nicht vorgesehen.",
            explanationB1:
              "Husten kann nach der Übung passieren, ist aber kein Zeichen dafür, dass die Übung richtig ist.",
          },
          {
            text: "Der Brustkorb hebt sich stark beim Einatmen.",
            isCorrect: false,
            explanation:
              "Costovertebrale Atmung allein ist nicht das Ziel. Die Lippenbremse soll Zwerchfell und untere Thoraxanteile aktivieren — das Heben der oberen Brust (Atemhilfsmuskulatur) ist eher ein Zeichen erhöhter Atemarbeit.",
            explanationB1:
              "Falsch. Wenn sich der Brustkorb oben stark hebt, arbeitet die Lunge zu viel. Die Lippenbremse soll das verhindern.",
          },
        ],
      },
    },

    // Step 4.3 — KOMPLIKATION 1: Kurzatmigkeit Branching
    {
      stepId: "ce02-kovac-dur-03-komplikation-kurzatmigkeit",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-kovac-ambulant-dur-komplikation-dyspnoe",
      tag: "pflege",
      contentC1: {
        title: "Komplikation 1 — Kurzatmigkeit",
        body: "Nach der 4. Wiederholung lehnt sich Frau Kovač zurück. Ihre Atemfrequenz steigt auf ca. 22/Min, leichte Lippenzyanose ist sichtbar. Sie sagt:\n\n**\"Warten Sie kurz. Wenn ich schnell mach, wird mir schwindelig. Ich kenn das schon.\"**\n\nWas tust du?",
        glossarBegriffe: [
          "Lippenzyanose",
          "Tachypnoe",
          "SpO2",
          "Kutschersitz",
          "Notarzt",
        ],
      },
      contentB1: {
        title: "Frau Kovač bekommt Atemnot",
        body: "Nach 4 Übungen lehnt sich Frau Kovač zurück. Ihre Atmung ist schneller. Ihre Lippen sind leicht blau. Sie sagt:\n\n**\"Warten Sie kurz. Wenn ich schnell mach, wird mir schwindelig. Ich kenn das schon.\"**\n\nWas machst du jetzt?",
        glossarBegriffe: ["Lippenzyanose", "Notarzt"],
      },
      question: {
        fragetext: "Frau Kovač bekommt Kurzatmigkeit nach der Atemübung — was tust du?",
        branchingOptions: [
          {
            text: "Ich unterbreche sofort die Übung, lasse sie aufrecht sitzen, öffne das Fenster für Frischluft, bleibe bei ihr und beobachte. Wenn die Zyanose zunimmt oder SpO2 unter 88 % fällt — Notarzt.",
            isCorrect: true,
            feedback:
              "Richtig. Das ist die korrekte Reaktion bei Belastungsdyspnoe bei COPD III:\n1. Übung sofort stoppen (keine weitere Belastung)\n2. Aufrechte Position sichern — Kutschersitz wenn Frau Kovač es kann\n3. Frischluft (Fenster)\n4. Bei ihr bleiben und beobachten\n5. Eskalationskriterien im Kopf: SpO2 <88 %, zunehmende Zyanose, Bewusstseinstrübung → Notarzt\nQuelle: (GOLD-Report COPD 2023)",
            feedbackB1:
              "Richtig. Übung stoppen. Aufrecht sitzen lassen. Fenster auf. Bei ihr bleiben. Wenn es schlimmer wird — Notarzt.",
          },
          {
            text: "Ich sage: 'Noch eine Runde, dann hören wir auf.' Sie kennt das ja schon.",
            isCorrect: false,
            feedback:
              "Nicht korrekt und gefährlich. Bei sichtbarer Lippenzyanose (Zeichen von Sauerstoffmangel) und erhöhter Atemfrequenz ist Weitermachen kontraindiziert. 'Sie kennt das ja schon' ist kein Freifahrtschein — auch bekannte Symptome können eskalieren. Merke: Zyanose = sofort stoppen. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Falsch und gefährlich. Die blauen Lippen zeigen: zu wenig Sauerstoff. Das ist ein Warnsignal. Sofort stoppen. Nicht weitermachen.",
          },
          {
            text: "Ich rufe sofort den Notarzt — bei sichtbarer Lippenzyanose und allein in der Wohnung ist mir das zu unsicher.",
            isCorrect: true,
            feedback:
              "Auch korrekt — und im Zweifel nie falsch. In der ambulanten Solo-Situation gilt: Wer 112 wählt, hat nicht 'zu früh' gehandelt. Lippenzyanose + AF ~22/Min ist ein klinisches Warnzeichen, du bist allein, du hast kein SpO2-Wert, kein Backup im Nebenraum. Optimal wäre: Erstmaßnahmen (Übung stoppen + aufrechte Position + Frischluft) machst du **parallel** zum Notarzt-Anruf — nicht entweder/oder. Pfad A ist die didaktisch elegantere Reihenfolge (erst entlasten, dann eskalieren bei <5 Min keine Besserung), aber 112 wählen ist im Zweifel immer richtig. Faustregel ambulant: lieber einmal zu viel anrufen als einmal zu spät. Quelle: (GOLD-Report COPD 2023; ABCDE-Schema)",
            feedbackB1:
              "Auch richtig. Du bist allein in der Wohnung. Du siehst blaue Lippen. Im Zweifel ist 112 nie falsch. Noch besser: Erst stoppen, aufrecht setzen, Fenster auf — und gleichzeitig (parallel) Notarzt rufen. Aber: 112 anzurufen ist nie ein Fehler. Lieber einmal zu viel als einmal zu spät.",
          },
        ],
      },
    },

    // Step 4.4 — Bewegungsübungen Sorting
    {
      stepId: "ce02-kovac-dur-04-bewegung-knie-im-sitzen",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Erhaltung und Förderung der Mobilität 2017/2024",
        "MDS/Medizinischer Dienst 2018",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-kovac-ambulant-dur-bewegungsübungen",
      tag: "pflege",
      contentC1: {
        title: "Bewegungsübungen im Sitzen — in welcher Reihenfolge?",
        body: "Frau Kovač hat sich erholt. Jetzt kommen die Bewegungsübungen für Knie und Sprunggelenke — im Sitzen, schonend. Welche Reihenfolge ist klinisch sinnvoll?",
        glossarBegriffe: [
          "Kontraktur",
          "Sprunggelenkmobilisation",
          "Wadenmuskel-Pumpe",
        ],
      },
      contentB1: {
        title: "Welche Reihenfolge bei den Bewegungs-Übungen?",
        body: "Frau Kovač hat sich erholt. Jetzt kommen Übungen für Knie und Sprunggelenke. Sitzen ist sicherer als Stehen. Sortiere die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Kontraktur", "Wadenmuskel-Pumpe"],
      },
      question: {
        fragetext:
          "Sortiere die Schritte der Bewegungsübung im Sitzen — von Anfang bis Ende.",
        sortItems: [
          "Warm-up: Füße kreisen — Sprunggelenke mobilisieren, 10× je Seite",
          "Knie: langsam strecken so weit möglich (Extensionsdefizit respektieren), halten 3 Sek, zurück — 5× je Seite",
          "Fersenwippe: Ferse heben und senken — Wadenmuskel-Pumpe aktivieren (10×)",
          "Bewusste Pause: Frau Kovač nach Schmerzen fragen (VAS 0–10)",
          "Abschluss: Beine kurz ausschütteln, Befindlichkeit erfragen",
        ],
      },
    },

    // Step 4.5 — KOMPLIKATION 2: Sohn ruft an — Datenschutz Branching
    {
      stepId: "ce02-kovac-dur-05-komplikation-sohn-datenschutz",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["DSGVO 2018 Art. 4 + Art. 9", "§ 203 StGB"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-kovac-ambulant-dur-datenschutz",
      tag: "pflege",
      contentC1: {
        title: "Komplikation 2 — Sohn Darko ruft an",
        body: "Mitten in den Bewegungsübungen klingelt das Telefon. Frau Kovač sagt:\n\n**\"Das ist mein Darko. Darf ich kurz?\"**\n\nSie telefoniert 2 Minuten. Dann hält sie dir das Telefon hin: \"Er möchte mit Ihnen sprechen. Er fragt wie es mir geht.\"\n\nWas tust du?",
        glossarBegriffe: [
          "DSGVO",
          "Schweigepflicht",
          "Schweigepflichtsentbindung",
          "Gesundheitsdaten",
        ],
      },
      contentB1: {
        title: "Sohn Darko möchte mit dir sprechen",
        body: "Frau Kovač telefoniert mit ihrem Sohn Darko. Dann hält sie dir das Telefon hin: \"Er möchte mit Ihnen sprechen. Er fragt wie es mir geht.\"\n\nWas machst du?",
        glossarBegriffe: ["Datenschutz", "Schweigepflicht"],
      },
      question: {
        fragetext:
          "Frau Kovač gibt dir das Telefon — ihr Sohn Darko möchte Auskunft über ihren Gesundheitszustand. Was sagst du?",
        branchingOptions: [
          {
            text: "\"Herr Kovač, guten Morgen. Ich kann am Telefon **keine Auskunft zum Gesundheitszustand** Ihrer Mutter geben. Bitte wenden Sie sich an den Pflegedienst — dort kann mit schriftlicher Einwilligung Ihrer Mutter ein regelmäßiger Austausch geregelt werden. Ich gebe Ihnen gern die Nummer.\"",
            isCorrect: true,
            feedback:
              "Richtig. Ohne dokumentierte Schweigepflichtsentbindung von Frau Kovač darf keine Pflegekraft Gesundheitsdaten an Dritte weitergeben — auch nicht an Angehörige. Wichtig: DSGVO Art. 4 Nr. 15 schützt Gesundheitsdaten **nicht erst ab Diagnose-Detail**, sondern ab jeder Information über den Gesundheitszustand. Auch ein 'wohlauf' oder 'es geht ihr gut' ist bereits eine Gesundheitsauskunft und juristisch problematisch.\n\nKorrekt: Nur die Tatsache des Besuchs erwähnen, **keine Aussage zum Zustand**, und an den Pflegedienst verweisen — dort kann mit schriftlicher Einwilligung von Frau Kovač ein Austausch geregelt werden (auch dauerhaft, z.B. 1×/Woche Anruf). Das ist die DSGVO-saubere und gleichzeitig angehörigenfreundliche Lösung. Quelle: (DSGVO 2018 Art. 4 Nr. 15, Art. 9; § 203 StGB)",
            feedbackB1:
              "Richtig. Du gibst **keine** Information über Frau Kovačs Gesundheit am Telefon — auch nicht 'es geht ihr gut'. Das Gesetz sagt: Auch das ist eine Gesundheits-Information. Du sagst nur: 'Ich kann nichts dazu sagen am Telefon. Bitte beim Pflegedienst melden.' Dort kann Darko mit der schriftlichen Erlaubnis seiner Mutter regelmäßig informiert werden.",
          },
          {
            text: "Ich erzähle Darko kurz den Zustand seiner Mutter — er macht sich bestimmt Sorgen.",
            isCorrect: false,
            feedback:
              "Nicht erlaubt. Sorgen rechtfertigen keine Datenweitergabe ohne schriftliche Schweigepflichtsentbindung. Gesundheitsdaten sind nach DSGVO Art. 9 besonders schützenswert. Die Weitergabe ohne Einwilligung ist eine Datenschutzverletzung — der Pflegedienst kann haftbar werden, und es ist ein Verstoß gegen § 203 StGB (Schweigepflicht). Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Nicht erlaubt. Auch wenn Darko sich sorgt — du darfst das nicht ohne die schriftliche Erlaubnis seiner Mutter. Das ist Datenschutz. Geh zurück zu Pfad A.",
          },
          {
            text: "Ich gebe das Telefon zu Frau Kovač zurück: Sie entscheidet, was ich sagen darf.",
            isCorrect: false,
            feedback:
              "Guter Ansatz — die Grundhaltung stimmt. Aber: Auch eine mündliche Erlaubnis von Frau Kovač am Telefon reicht nicht. Die Schweigepflichtsentbindung muss schriftlich dokumentiert und beim Pflegedienst hinterlegt sein. 'Sie entscheiden' ist die richtige Haltung — aber die korrekte Umsetzung ist: Pflegedienst anrufen, Formular vorlegen, dann kann Darko regelmäßig informiert werden. Für heute bleibt: keine Auskunft per Telefon. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Die Idee ist gut — Frau Kovač entscheidet. Aber: Das muss schriftlich beim Pflegedienst hinterlegt sein. Mündlich am Telefon reicht nicht. Heute: keine Auskunft geben. Pfad A ist richtig.",
          },
        ],
      },
    },

    // Step 4.6 — Trinkgespräch Dialog
    {
      stepId: "ce02-kovac-dur-06-trinkmenge-vereinbaren",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: [
        "DNQP Kontinenzförderung in der Pflege 2014",
        "GOLD-Report COPD 2023",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-kovac-ambulant-dur-trinken",
      tag: "pflege",
      contentC1: {
        title: "Das Trinkgespräch — Hindernis und Lösung",
        body: "Die Übungen sind gemacht. Du zeigst Frau Kovač das Trinkprotokoll von gestern (800 ml) und erklärst. Dann kommt ihr Einwand. Wie gehst du damit um?",
        glossarBegriffe: [
          "Motivierende Gesprächsführung",
          "Flüssigkeitsbilanz",
          "Exsikkose",
        ],
      },
      contentB1: {
        title: "Gespräch über das Trinken",
        body: "Du zeigst Frau Kovač das Trinkprotokoll. 800 ml — zu wenig. Du erklärst warum sie mehr trinken sollte. Dann sagt sie etwas. Wähle die richtige Antwort.",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
      question: {
        fragetext: "Führe das Trinkgespräch mit Frau Kovač.",
        patientName: "Frau Kovač",
        dialogPhases: [
          {
            context:
              "Du zeigst Frau Kovač das Trinkprotokoll von gestern — 800 ml. Du sagst ihr, warum mehr Flüssigkeit wichtig ist.",
            contextB1:
              "Du zeigst das Trinkprotokoll: 800 ml gestern. Du erklärst warum sie mehr trinken soll.",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Kovač, gestern haben Sie 800 ml getrunken. Das ist deutlich weniger als Ihr Körper braucht — vor allem damit der Schleim in der Lunge dünnflüssiger wird und sich beim Husten leichter löst.\"",
                textB1:
                  "\"Frau Kovač, gestern haben Sie 800 ml getrunken. Das ist zu wenig. Wenn Sie mehr trinken, wird der Schleim in der Lunge flüssiger. Dann können Sie ihn leichter abhusten.\"",
                patientResponse:
                  "\"Ich trink nicht gern viel, weil ich dann dauernd muss. Das ist mir unangenehm.\"",
                patientResponseB1:
                  "\"Ich trink nicht gern viel. Dann muss ich ständig auf die Toilette. Das ist mir unangenehm.\"",
                score: 3,
                feedback:
                  "Gut — du verbindest die Empfehlung mit einer Erklärung die für Frau Kovač direkt relevant ist (Husten erleichtern). Jetzt kommt ihr Einwand — wie antwortest du?",
                feedbackB1:
                  "Gut. Du erklärst warum es wichtig ist. Frau Kovač hört zu. Aber sie hat einen Einwand.",
              },
            ],
          },
          {
            context:
              "Frau Kovač sagt: \"Ich trink nicht gern viel, weil ich dann dauernd muss. Das ist mir unangenehm.\" Du wählst deine Antwort.",
            contextB1:
              "Frau Kovač sagt: \"Ich will nicht so viel trinken. Dann muss ich dauernd zur Toilette. Das ist mir peinlich.\" Du antwortest.",
            speaker: "Frau Kovač",
            options: [
              {
                text: "\"Das verstehe ich, Frau Kovač. Wir verteilen das über den Tag — je ein Becher morgens, mittags, nachmittags. Nicht auf einmal alles.\"",
                textB1:
                  "\"Das verstehe ich. Wir machen das anders: ein Becher morgens, einer mittags, einer nachmittags. Nicht alles auf einmal.\"",
                patientResponse:
                  "\"Hmm. Das klingt machbar. Einen Becher schaffe ich schon.\"",
                patientResponseB1:
                  "\"Hmm. So könnte ich das schaffen. Einen Becher, das ist ok.\"",
                score: 3,
                feedback:
                  "Richtig. Motivierende Gesprächsführung: Hindernis anerkennen, dann realistische Lösung anbieten. Du zwingst sie nicht — du machst es machbar. Quelle: (DNQP Kontinenzförderung 2014)",
                feedbackB1:
                  "Richtig. Du verstehst ihr Problem. Und du machst es einfacher — nicht alles auf einmal. Das nennt man motivierende Gesprächsführung.",
              },
              {
                text: "\"Das ist aber wichtig, also bitte schon trinken, Frau Kovač.\"",
                textB1:
                  "\"Das ist wichtig. Sie müssen mehr trinken, Frau Kovač.\"",
                patientResponse:
                  "\"Wenn Sie das sagen.\" — Frau Kovač nickt ohne Begeisterung.",
                patientResponseB1:
                  "Frau Kovač nickt. Aber sie wirkt nicht überzeugt.",
                score: 0,
                feedback:
                  "Nicht gut. Du ignorierst ihr Hindernis und machst Druck. Frau Kovač wird trinken weil du es sagst — nicht weil sie es will. Die nächste Kollegin wird wieder ein schlechtes Trinkprotokoll sehen.",
                feedbackB1:
                  "Nicht gut. Du ignorierst ihr Problem. Das macht sie nicht wirklich motiviert.",
              },
              {
                text: "\"Das besprechen wir beim Arzt — ich notiere es.\"",
                textB1:
                  "\"Das muss der Arzt entscheiden. Ich schreibe es auf.\"",
                patientResponse:
                  "Frau Kovač nickt. \"Gut. Dann warte ich.\"",
                patientResponseB1:
                  "Frau Kovač nickt. \"Dann warte ich.\"",
                score: 1,
                feedback:
                  "Nicht falsch — aber unnötig. Das Trinkgespräch ist pflegerische Beratung, nicht ärztliche Entscheidung. Du kannst das jetzt lösen. Weiter bis abends zu warten bedeutet: Frau Kovač trinkt heute Morgen weiterhin zu wenig.",
                feedbackB1:
                  "Nicht falsch, aber unnötig. Du kannst das jetzt besprechen. Beim Arzt warten bedeutet: noch mehr Stunden ohne Trinken.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.7 — Schlafhygiene Vorgespräch + Confidence
    {
      stepId: "ce02-kovac-dur-07-schlafhygiene-vorgespraech",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-dur-schlaf-vorbereitung",
      tag: "anatomie",
      displayFormat: "scenario",
      contentC1: {
        title: "Vorgespräch Schlafhygiene — heute Abend",
        body: "Du packst deine Sachen zusammen. Bevor du gehst, sagst du zu Frau Kovač:\n\n\"Frau Kovač, heute Abend möchte ich mit Ihnen besprechen, warum das Fernsehen nach Mitternacht Ihren Schlaf beeinflusst. Nicht weil ich Ihnen sage, was Sie tun sollen — sondern damit Sie verstehen, was im Körper passiert.\"\n\nFrau Kovač nickt: \"Na gut.\"\n\n**Hintergrundwissen für heute Abend:**\nFernsehen (Blaulicht) hemmt die Melatonin-Ausschüttung der Zirbeldrüse. Melatonin ist der körpereigene Schlaf-Schalter — seine Produktion ist bei älteren Menschen ohnehin reduziert. Unregelmäßige Schlafzeiten stören den zirkadianen Rhythmus (innere Uhr). Bei Frau Kovač potenziert COPD das Problem: Hypoxie in der Nacht und morgendlicher Husten stören den Tiefschlaf zusätzlich.",
        fallbezug:
          "Frau Kovačs TV-Ritual begann nach Josips Tod — es ist ihr Weg, nicht allein einzuschlafen. Das darfst du im Gespräch nicht übergehen. Aufklärung heißt: Erklären, warum es den Schlaf beeinflusst — und dann gemeinsam schauen, was möglich ist.",
        glossarBegriffe: [
          "Melatonin",
          "Zirkadianer Rhythmus",
          "Blaulicht",
          "Zirbeldrüse",
        ],
      },
      contentB1: {
        title: "Was machst du vor dem Gehen?",
        body: "Du packst deine Sachen. Du sagst Frau Kovač:\n\n\"Heute Abend möchte ich mit Ihnen über den Schlaf sprechen. Nicht um Ihnen zu sagen was Sie tun sollen. Sondern damit Sie verstehen was im Körper passiert.\"\n\nFrau Kovač sagt: \"Na gut.\"\n\n**Warum beeinflusst Fernsehen den Schlaf?**\nFernsehen sendet blaues Licht. Dieses Licht sagt dem Körper: Es ist Tag. Deshalb macht der Körper kein Melatonin (= das Schlaf-Hormon). Ohne Melatonin kommt der Schlaf nicht. Bei älteren Menschen gibt es ohnehin schon weniger Melatonin.\n\nDazu kommt: Unregelmäßige Schlafzeiten stören die innere Uhr des Körpers.",
        glossarBegriffe: ["Melatonin", "Zirkadianer Rhythmus"],
      },
      wusstestDuDas:
        "Frau Kovačs Fernsehen bis Mitternacht begann nach dem Tod ihres Mannes Josip. Es ist ihr Weg, nicht allein einzuschlafen. Reine Schlafentzieher-Kritik ohne dieses Verständnis würde das Gespräch scheitern lassen.",
    },
  ],
  optionaleSteps: [
    // Opt-4.A — Glossar Phase 4
    {
      stepId: "ce02-kovac-dur-opt-a-glossar",
      phase: 4,
      stepType: "text",
      bloomLevel: 1,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "krankheitslehre",
      displayFormat: "glossary",
      contentC1: {
        title: "Fachbegriffe Phase 4",
        body: "**Lippenbremse:** Ausatmungstechnik bei COPD. Lippen leicht schließen, langsam ausatmen. Erzeugt PEEP (Positive End-Expiratory Pressure) — verhindert Atemwegskollaps.\n\n**Kutschersitz:** Sitzposition mit vorgeneigtem Oberkörper und abgestützten Unterarmen. Fixiert die Atemhilfsmuskulatur und reduziert Atemarbeit.\n\n**PEEP-Effekt:** Erhöhter Druck am Ende der Ausatmung — hält die kleinen Atemwege offen.\n\n**Melatonin:** Schlafhormon der Zirbeldrüse. Wird durch Dunkelheit ausgeschüttet. Blaulicht hemmt die Ausschüttung.\n\n**Zirkadiane Rhythmik:** Innere Uhr des Körpers — regelt Schlaf-Wach-Rhythmus, Hormonausschüttung und Körpertemperatur über 24 Stunden.",
        glossarBegriffe: [
          "Lippenbremse",
          "Kutschersitz",
          "PEEP-Effekt",
          "Melatonin",
          "Zirkadiane Rhythmik",
        ],
      },
      contentB1: {
        title: "Was bedeuten diese Wörter?",
        body: "**Lippenbremse** = Ausatem-Technik bei COPD. Lippen fast geschlossen, langsam ausatmen wie durch einen Strohhalm. Hilft der Lunge.\n\n**Kutschersitz** = Sitzposition. Leicht vorgeneigt. Arme abgestützt. Erleichtert die Atmung.\n\n**Melatonin** = das Schlaf-Hormon. Wird nachts gemacht. Fernsehen stört das.\n\n**Zirkadiane Rhythmik** = die innere Uhr des Körpers. Sie sagt dem Körper: jetzt schlafen, jetzt aufwachen.",
        glossarBegriffe: [
          "Lippenbremse",
          "Kutschersitz",
          "Melatonin",
          "Zirkadiane Rhythmik",
        ],
      },
    },
    // Opt-4.B — GOLD-Warnsignale Flipcard
    {
      stepId: "ce02-kovac-dur-opt-b-gold-warnsignale",
      phase: 4,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "vertiefung",
      modus: "puzzle",
      tag: "krankheitslehre",
      contentC1: {
        title: "COPD — wann ist es ein Notfall?",
        body: "Nicht jede Atemnot bei COPD ist ein Notfall. Aber diese Zeichen sind es. Lerne die GOLD-Warnsignale.",
        glossarBegriffe: ["SpO2", "Bewusstseinstrübung", "Zyanose"],
      },
      contentB1: {
        title: "Wann musst du sofort den Notarzt rufen?",
        body: "Bei COPD gibt es Zeichen, bei denen du sofort den Notarzt rufst. Lerne diese Zeichen.",
        glossarBegriffe: ["SpO2", "Bewusstseinstrübung"],
      },
      question: {
        fragetext:
          "Drehe die Karten um — lerne die COPD-Warnsignale für den Notaruf.",
        flipcard: {
          instruction:
            "Lerne die 4 K.O.-Warnsignale bei COPD die sofortiges Handeln erfordern.",
          cards: [
            {
              front: "SpO2 unter 88 % (trotz Ruhe und Lageänderung)",
              back: "Kritisch. 88–92 % ist der **therapeutische Zielkorridor unter Sauerstoffgabe** bei akuter Exazerbation — nicht der Normalwert im stabilen Zustand. Unter 88 % auch nach Ruhe und Lageoptimierung = Gewebehypoxie droht. Sofortig: Notarzt rufen, Lagerung optimieren, parallel weiter beobachten.",
              backB1:
                "Kritisch. Zu wenig Sauerstoff im Blut. Sofort Notarzt rufen.",
            },
            {
              front: "Zunehmende Lippenzyanose (Lippen blau, trotz Ruhe)",
              back: "Zeichen von Sauerstoffmangel in der Peripherie. Wenn die Ruhe nicht hilft: Notarzt.",
              backB1:
                "Blaue Lippen trotz Ruhe = Notarzt. Sauerstoffmangel ist gefährlich.",
            },
            {
              front: "Bewusstseinstrübung (unruhig, verwirrt, nicht ansprechbar)",
              back: "Sofortiger Notarufgrund. Kann auf CO2-Narkose hinweisen (hyperkapnische Krise) bei COPD III/IV.",
              backB1: "Wenn Frau Kovač verwirrt oder nicht ansprechbar ist: sofort Notarzt.",
            },
            {
              front: "Keine Besserung nach 5–10 Min Ruhe und Lageänderung",
              back: "Wenn Übung stoppen, Kutschersitz und Frischluft keine Besserung bringen: Notarzt. Eskalation nach Plan.",
              backB1:
                "Wenn es nach Ruhe nicht besser wird: Notarzt rufen.",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 35,
};

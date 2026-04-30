// CE-02 Situation Kovač — Phase 4: Durchführen — Atemübungen, Bewegung, Komplikationen
// Steps: 7 (inkl. 2 Komplikationen mit Branching) · Bloom: B4-B5 · Zeit: ~30-45 Min
// Quelle: phase-durchfuehren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-durchführen",
  phase: "durchführen",
  titel: "Durchführen & Reagieren",
  titelB1: "Übungen machen und auf Probleme reagieren",
  kontext:
    "Es ist jetzt 08:00 Uhr. Du hast 30 Minuten bis du gehen musst. Der Plan steht: Atemübungen mit Lippenbremse, Bewegungsübungen für Knie und Sprunggelenke im Sitzen, Trinkprotokoll für heute festlegen, und kurze Schlafhygiene-Vorbesprechung fürs Abendgespräch. Frau Kovač sitzt im Sessel. Du beginnst mit den Atemübungen — sanft, weil du weißt: zu schnell, und sie wird kurzatmig.",
  kontextB1:
    "Es ist 08:00 Uhr. Du hast noch 30 Minuten. Jetzt machst du die geplanten Übungen mit Frau Kovač. Atem-Übungen, Bewegungs-Übungen, Trinken besprechen. Und dann passiert etwas Unerwartetes — zweimal.",
  kernSteps: [
    // Step 4.1 — Atemübungen Schritt-für-Schritt
    {
      stepId: "ce02-kovac-dur-01-atemübungen-erklärt",
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
        body: "**Schritt 1 — Position einstellen**\nFrau Kovač sitzt aufrecht im Sessel mit Rückenlehne, leicht vorgeneigt. Hände locker auf den Oberschenkeln. Schultern bewusst entspannen.\n\n**Schritt 2 — Einatmen**\nEinatmen durch die Nase — ruhig und langsam (ca. 2 Sekunden). Kein Schulterheben. Der Bauch hebt sich leicht.\n\n**Schritt 3 — Ausatmen mit Lippenbremse**\nLippen leicht schließen — wie beim Auspusten einer Kerze oder durch einen Strohhalm. Ausatmen 4 Sekunden. Das ist doppelt so lang wie das Einatmen. Das Pfeifen ist gewollt.\n\n**Schritt 4 — Kontaktatmung**\nFrage Frau Kovac, ob du die Hände auflegen darfst (Einwilligung vor Berührung, besonders in der Wohnung der Patientin). Du legst die Hände sanft seitlich auf den unteren Brustkorb. Die Hände **folgen** der Ausatemphase passiv — sie drücken nicht. Es geht um Wahrnehmung (propriozeptiver Reiz), nicht um mechanische Atemunterstützung.\n\n**Achtung:** Bei akuter Atemnot oder Exazerbation diese Übung **nicht** anwenden — externer Druck auf den Brustkorb ist dann kontraindiziert. Stattdessen nur Lippenbremse + Kutschersitz.\n\n**Wichtig:** Nie mehr als 3–5 Wiederholungen am Stück bei COPD III. Danach Pause und Befindlichkeit erfragen. Quelle: (GOLD-Report COPD 2023; Pflege Heute 7. Aufl. Kapitel Atmung)",
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
        body: "**Schritt 1 — Hinsetzen**\nFrau Kovač sitzt aufrecht im Sessel. Leicht vorgeneigt. Hände auf den Knien.\n\n**Schritt 2 — Einatmen**\nDurch die Nase einatmen — ruhig und langsam (2 Sekunden). Keine Schultern hochziehen.\n\n**Schritt 3 — Ausatmen mit Lippenbremse**\nLippen leicht schließen — wie durch einen Strohhalm ausatmen (4 Sekunden). Doppelt so lang wie einatmen.\n\n**Schritt 4 — Kontaktatmung**\nFrage Frau Kovac, ob du die Hände auflegen darfst. Du legst deine Hände sanft auf den unteren Brustkorb. Die Hände **folgen** der Ausatmung — du drückst nicht. Das hilft der Patientin, ihre eigene Atmung zu spüren.\n\n**Achtung:** Wenn sie gerade akut Atemnot hat — diese Übung **nicht** machen. Dann nur Lippenbremse + Kutschersitz.\n\n**Wichtig:** Nur 3–5 Wiederholungen — dann Pause. Bei COPD ist die Lunge schnell erschöpft.",
        fallbezug:
          "Gestern hat Frau Kovač nur 3 Minuten durchgehalten. Heute machst du es langsamer und ruhiger.",
        glossarBegriffe: ["Lippenbremse", "Kontaktatmung"],
      },
    },

    // Inline-Wissen: Tachypnoe — VOR Step 4.2 (MC nutzt den Begriff)
    {
      stepId: "ce02-kovac-dur-iw-tachypnoe",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023", "I Care Pflege 2020"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-dur-tachypnoe",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist Tachypnoe?",
        body: "",
        glossarBegriffe: ["Tachypnoe"],
      },
      contentB1: {
        title: "Was bedeutet Tachypnoe?",
        body: "",
        glossarBegriffe: ["Tachypnoe"],
      },
      inlineWissen: {
        bausteinRef: "tachypnoe",
        storyAufhaenger:
          "Du leitest Frau Kovač bei den Atemübungen an. Gleich wirst du beurteilen müssen, ob die Lippenbremse funktioniert — und wann schnelle Atmung ein Warnsignal ist. Dafür musst du den Unterschied zwischen normaler und zu schneller Atmung kennen.",
        storyAufhaengerB1:
          "Frau Kovač macht gleich Atemübungen. Du beobachtest ihre Atmung. Wann ist sie zu schnell? Dafür gibt es einen Fachbegriff.",
        kerntext:
          "**Tachypnoe** bedeutet eine **erhöhte Atemfreqünz** — definiert als **>20 Atemzüge pro Minute** beim Erwachsenen. Normal sind 12–20/Min in Ruhe.\n\nTachypnoe ist ein **Vitalzeichen-Warnsignal**, kein eigenes Krankheitsbild. Sie zeigt an, dass der Körper mehr Saürstoff braucht oder mehr CO2 abatmen muss. Mögliche Ursachen bei Frau Kovač:\n- **COPD-Exazerbation** (Atemwege verengt → kompensatorisch schnellere Atmung)\n- **Herzinsuffizienz-Dekompensation** (Lungenödem → erschwerter Gasaustausch)\n- **Belastung** (z.B. nach Atemübungen bei geschwächter Atempumpe)\n- **Infektion/Fieber** (erhöhter Saürstoffbedarf)\n\nWichtig: Tachypnoe allein ist kein Notfall — aber in Kombination mit **Zyanose, Bewusstseinstrübung oder SpO2 <88 %** wird es zum Eskalationskriterium.\n\nQuelle: (GOLD-Report COPD 2023; I Care Pflege 2020)",
        kerntextB1:
          "**Tachypnoe** = **zu schnelle Atmung**. Normal: 12–20 Atemzüge pro Minute. Mehr als 20 pro Minute = Tachypnoe.\n\nDas ist ein Warnsignal. Es zeigt: Der Körper braucht mehr Saürstoff. Bei Frau Kovač kann das kommen von:\n- COPD wird schlimmer\n- Herz arbeitet schlecht\n- Sie hat sich angestrengt\n- Sie hat eine Infektion\n\nTachypnoe allein ist noch kein Notfall. Aber wenn dazu **blaue Lippen** oder **Verwirrtheit** kommen — dann sofort handeln.",
        faustregel:
          "Atemfreqünz >20/Min = Tachypnoe. Allein ein Warnsignal. Mit Zyanose oder Bewusstseinstrübung = Notfall.",
        faustregelB1:
          "Mehr als 20 Atemzüge pro Minute = zu schnell (Tachypnoe). Bei blaün Lippen oder Verwirrtheit dazu: Notfall.",
        karteikarte: {
          vorderseite: "Frau Kovač atmet nach den Atemübungen 22-mal pro Minute. Wie heißt das — und wann wird es zum Notfall?",
          rueckseite: "Tachypnoe = Atemfreqünz >20/Min (normal: 12–20/Min). Kompensatorisches Zeichen bei erhöhtem O2-Bedarf. Bei COPD III nach Belastung häufig. Notfall-Eskalation: wenn zusätzlich Zyanose, Bewusstseinstrübung oder SpO2 <88 %. Allein = beobachten. In Kombination = sofort handeln.",
          vorderseiteB1: "Was ist Tachypnoe? Wann musst du den Notarzt rufen?",
          rueckseiteB1: "Tachypnoe = Atmung schneller als 20/Min. Allein: beobachten. Mit blaün Lippen oder Verwirrtheit: sofort Notarzt.",
        },
      },
    },

    // Step 4.2 — Atemübung MC
    {
      stepId: "ce02-kovac-dur-02-atemübung-ausführen-mc",
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
        glossarBegriffe: ["Lippenbremse", "PEEP-Effekt", "Tachypnoe"],
      },
      contentB1: {
        title: "Wie erkennst du eine richtige Lippenbremse?",
        body: "Frau Kovač macht die Übung. Du schaust zu. Was zeigt dir: Sie macht es richtig?",
        glossarBegriffe: ["Lippenbremse", "Tachypnoe"],
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
              "Richtig. Die Ausatmung daürt länger als die Einatmung. Und man hört ein leises Pfeifen durch die Lippen. Das zeigt: Es funktioniert.",
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

    // Inline-Wissen: Zyanose — VOR Step 4.3 (Komplikation erwähnt Lippenzyanose)
    {
      stepId: "ce02-kovac-dur-iw-zyanose",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["I Care Pflege 2020", "GOLD-Report COPD 2023"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-dur-zyanose",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist Zyanose?",
        body: "",
        glossarBegriffe: ["Zyanose"],
      },
      contentB1: {
        title: "Was bedeutet Zyanose?",
        body: "",
        glossarBegriffe: ["Zyanose"],
      },
      inlineWissen: {
        bausteinRef: "zyanose",
        storyAufhaenger:
          "Gleich wird etwas passieren: Frau Kovačs Lippen werden sich bläulich verfärben. Das ist kein Zufall — es ist ein klinisches Zeichen das du erkennen und richtig einordnen musst. Bevor die Situation eintritt: Was zeigt dir blaue Haut?",
        storyAufhaengerB1:
          "Gleich passiert etwas: Frau Kovačs Lippen werden blau. Das ist ein wichtiges Zeichen. Bevor es soweit ist — lerne, was das bedeutet.",
        kerntext:
          "**Zyanose** ist eine **bläulich-violette Verfärbung** von Haut und Schleimhäuten durch Saürstoffmangel im Blut (erhöhtes desoxygeniertes Hämoglobin >5 g/dl).\n\nMan unterscheidet:\n- **Zentrale Zyanose** (Lippen, Zunge, Mundschleimhaut) = Saürstoffmangel im arteriellen Blut → **immer ernst**, deutet auf respiratorische Insuffizienz, Lungenödem oder Herzfehler\n- **Periphere Zyanose** (Finger, Zehen, Nasenspitze) = verlangsamte Durchblutung → kann auch bei Kälte oder schlechter Durchblutung auftreten\n\nBei Frau Kovač (COPD III + Herzinsuffizienz) ist **Lippenzyanose** ein Zeichen der **zentralen Zyanose** — die Lunge schafft es nicht mehr, das Blut ausreichend mit Saürstoff zu sättigen. Das ist immer ein Eskalationskriterium: Beobachten, SpO2 messen wenn möglich, bei Zunahme Notarzt.\n\nQuelle: (I Care Pflege 2020; GOLD-Report COPD 2023)",
        kerntextB1:
          "**Zyanose** = **blaue Haut** durch zu wenig Saürstoff im Blut.\n\nEs gibt 2 Arten:\n- **Zentrale Zyanose** (blaue Lippen, Zunge) = zu wenig Saürstoff im Blut aus der Lunge → **immer ernst nehmen**\n- **Periphere Zyanose** (blaue Finger, Zehen) = schlechte Durchblutung → kann auch bei Kälte passieren\n\nBei Frau Kovač sind blaue Lippen ein Zeichen, dass die Lunge nicht genug Saürstoff ins Blut bringt. Das ist gefährlich.",
        faustregel:
          "Blaue Lippen = zentrale Zyanose = Saürstoffmangel im arteriellen Blut. Immer ernst nehmen, nie ignorieren.",
        faustregelB1:
          "Blaue Lippen = zu wenig Saürstoff im Blut. Immer ernst nehmen!",
        karteikarte: {
          vorderseite: "Frau Kovačs Lippen sind bläulich verfärbt. Wie heißt das — und was zeigt es an?",
          rueckseite: "Zyanose = bläulich-violette Verfärbung durch Saürstoffmangel. Lippenzyanose = zentrale Zyanose (arteriell) → respiratorische Insuffizienz. Bei COPD III: Lunge kann Blut nicht ausreichend oxygenieren. Eskalation: SpO2 messen, bei Zunahme oder <88 % → Notarzt. Periphere Zyanose (Finger/Zehen) kann auch kältebedingt sein.",
          vorderseiteB1: "Was bedeuten blaue Lippen bei Frau Kovač?",
          rueckseiteB1: "Blaue Lippen = Zyanose = zu wenig Saürstoff. Die Lunge schafft es nicht. Sofort beobachten. Bei Verschlechterung: Notarzt.",
        },
      },
    },

    // Inline-Wissen: Bewusstseinstrübung — VOR Step 4.3 (Eskalationskriterium im Branching)
    {
      stepId: "ce02-kovac-dur-iw-bewusstseinstrübung",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023", "I Care Pflege 2020"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-dur-bewusstseinstrübung",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist Bewusstseinstrübung?",
        body: "",
        glossarBegriffe: ["Bewusstseinstrübung"],
      },
      contentB1: {
        title: "Was bedeutet Bewusstseinstrübung?",
        body: "",
        glossarBegriffe: ["Bewusstseinstrübung"],
      },
      inlineWissen: {
        bausteinRef: "bewusstseinstrübung",
        storyAufhaenger:
          "Wenn Frau Kovač nach den Atemübungen nicht nur kurzatmig wird, sondern auch unruhig, verwirrt oder nicht mehr richtig antwortet — dann ist das ein Notfall. Aber was genau passiert im Körper, wenn das Bewusstsein eintrübt?",
        storyAufhaengerB1:
          "Wenn Frau Kovač plötzlich verwirrt wird oder nicht mehr richtig antwortet — das ist gefährlich. Aber warum passiert das? Was bedeutet Bewusstseinstrübung?",
        kerntext:
          "**Bewusstseinstrübung** ist eine qualitative Bewusstseinsstörung — der Patient ist wach, aber **desorientiert, verlangsamt, verwirrt oder unruhig**. Es ist keine Bewusstlosigkeit (quantitative Störung), sondern eine Vorstufe.\n\nBei COPD III kann Bewusstseinstrübung ein Zeichen der **hyperkapnischen Krise** sein: Die Lunge schafft es nicht mehr, genug CO2 abzuatmen → CO2 steigt im Blut → das Gehirn reagiert mit Verwirrtheit, Unruhe, Somnolenz → im schlimmsten Fall CO2-Narkose (Koma).\n\nWichtig für die Praxis: **Bewusstseinstrübung bei COPD = sofortiger Notarufgrund.** Es ist kein \"die ist halt müde\" — es kann eine lebensbedrohliche Situation anzeigen.\n\nAssessment: Ansprechen → Antwort beurteilen (klar? verzögert? inadäquat?) → Orientierung prüfen (Person, Ort, Zeit, Situation). Bei Auffälligkeiten = 112.\n\nQuelle: (GOLD-Report COPD 2023; I Care Pflege 2020)",
        kerntextB1:
          "**Bewusstseinstrübung** = Die Person ist wach, aber **verwirrt, langsam oder unruhig**. Sie antwortet nicht richtig. Sie weiß vielleicht nicht mehr wo sie ist.\n\nBei COPD kann das passieren, wenn zu viel CO2 im Blut ist (weil die Lunge das CO2 nicht mehr rausatmen kann). Das Gehirn reagiert dann mit Verwirrtheit.\n\n**Wenn Frau Kovač plötzlich verwirrt ist oder nicht richtig antwortet: Sofort 112 rufen!** Das ist kein \"sie ist halt müde\" — das kann lebensgefährlich sein.",
        faustregel:
          "Bewusstseinstrübung bei COPD = CO2-Krise bis zum Beweis des Gegenteils. Sofort 112 — nicht abwarten.",
        faustregelB1:
          "Verwirrt + COPD = Notfall. Sofort 112 rufen. Nicht warten.",
        karteikarte: {
          vorderseite: "Frau Kovač wird nach den Atemübungen unruhig und antwortet verzögert. Was könnte das sein — und was tust du?",
          rueckseite: "Bewusstseinstrübung = qualitative Bewusstseinsstörung (wach, aber desorientiert/verwirrt/verlangsamt). Bei COPD III: mögliche hyperkapnische Krise (CO2-Retention → Gehirn reagiert). Sofortiger Notarufgrund (112). Assessment: Ansprechen, Orientierung prüfen (Person/Ort/Zeit). Nicht abwarten — CO2-Narkose ist lebensbedrohlich.",
          vorderseiteB1: "Frau Kovač wird plötzlich verwirrt. Was könnte passiert sein?",
          rueckseiteB1: "Bewusstseinstrübung: Sie ist wach aber verwirrt. Bei COPD kann zu viel CO2 im Blut sein. Das ist ein Notfall. Sofort 112 rufen.",
        },
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
        body: "Nach der 4. Wiederholung lehnt sich Frau Kovač zurück. Ihre Atemfreqünz steigt auf ca. 22/Min, **leichte Lippenzyanose** ist sichtbar. Sie sagt:\n\n**\"Warten Sie kurz. Wenn ich schnell mach, wird mir schwindelig. Ich kenn das schon.\"**\n\n**Wichtig zur Befund-Hierarchie:** AF 22/Min allein wäre bei COPD III nach Belastung noch im Erwartungsbereich. Aber **Lippenzyanose** ist das relevantere Kriterium — sichtbare Zyanose zeigt peripheren Saürstoffmangel und ist immer ernst zu nehmen. Befund-Reihenfolge: Zyanose > Bewusstseinslage > Atemfreqünz.\n\nWas tust du?",
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
            text: "Ich unterbreche sofort die Übung, lasse sie aufrecht sitzen (Kutschersitz wenn möglich), bleibe bei ihr und beobachte SpO2/Atmung/Zyanose. Wenn keine Besserung in 3-5 Minuten oder die Zyanose zunimmt oder SpO2 unter 88 % fällt — Notarzt.",
            isCorrect: true,
            feedback:
              "Richtig. Das ist die korrekte didaktische Reihenfolge bei Belastungsdyspnoe bei COPD III:\n1. **Übung sofort stoppen** — keine weitere Belastung der erschöpften Atempumpe\n2. **Aufrechte Position sichern** — Kutschersitz wenn Frau Kovač es kann (fixiert die Atemhilfsmuskulatur, reduziert die Atemarbeit)\n3. **Lippenbremse anleiten** — falls Frau Kovač sie noch nicht spontan macht\n4. **Bei ihr bleiben und beobachten** — Atemfreqünz, Lippenfarbe, Bewusstseinslage\n5. **Frischluft** nur wenn raumklimatisch sinnvoll (Sommer/warme Räume) — im Winter Fenster nicht aufreißen, kalte Luft kann bei COPD einen Bronchospasmus auslösen. Stattdessen: ruhige, nicht-schwüle Raumluft sicherstellen\n6. **Eskalationskriterien im Kopf:** keine Besserung in 3-5 Min, SpO2 <88 %, zunehmende Zyanose, Bewusstseinstrübung → Notarzt rufen — und Erstmaßnahmen weiter durchführen\n\nKernpunkt: Erstmaßnahme ist **Stoppen + Ruhe + aufrechte Position**, nicht das Fenster. Quelle: (GOLD-Report COPD 2023)",
            feedbackB1:
              "Richtig. Erst Übung stoppen. Aufrecht sitzen lassen (Kutschersitz). Lippenbremse anleiten. Bei ihr bleiben. Beobachten: wird es besser oder schlimmer?\n\n**Achtung Fenster:** Im Sommer ist Frischluft hilfreich. Im Winter NICHT — kalte Luft kann bei COPD die Bronchien zusammenziehen. Dann Fenster nur kurz oder gar nicht.\n\nWenn nach 3-5 Min keine Besserung: Notarzt rufen.",
          },
          {
            text: "Ich sage: 'Noch eine Runde, dann hören wir auf.' Sie kennt das ja schon.",
            isCorrect: false,
            feedback:
              "Nicht korrekt und gefährlich. Bei sichtbarer Lippenzyanose (Zeichen von Saürstoffmangel) und erhöhter Atemfreqünz ist Weitermachen kontraindiziert. 'Sie kennt das ja schon' ist kein Freifahrtschein — auch bekannte Symptome können eskalieren. Merke: Zyanose = sofort stoppen. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Falsch und gefährlich. Die blaün Lippen zeigen: zu wenig Saürstoff. Das ist ein Warnsignal. Sofort stoppen. Nicht weitermachen.",
          },
          {
            text: "Ich rufe sofort den Notarzt — bei sichtbarer Lippenzyanose und allein in der Wohnung ist mir das zu unsicher.",
            isCorrect: true,
            feedback:
              "Auch korrekt — und im Zweifel nie falsch. In der ambulanten Solo-Situation gilt: Wer 112 wählt, hat nicht 'zu früh' gehandelt. Lippenzyanose + AF ~22/Min ist ein klinisches Warnzeichen, du bist allein, du hast kein SpO2-Wert, kein Backup im Nebenraum. Optimal wäre: Erstmaßnahmen (Übung stoppen + aufrechte Position + Frischluft) machst du **parallel** zum Notarzt-Anruf — nicht entweder/oder. Pfad A ist die didaktisch elegantere Reihenfolge (erst entlasten, dann eskalieren bei <5 Min keine Besserung), aber 112 wählen ist im Zweifel immer richtig. Faustregel ambulant: lieber einmal zu viel anrufen als einmal zu spät. Quelle: (GOLD-Report COPD 2023; ABCDE-Schema)",
            feedbackB1:
              "Auch richtig. Du bist allein in der Wohnung. Du siehst blaue Lippen. Im Zweifel ist 112 nie falsch. Noch besser: Erst stoppen, aufrecht setzen (Kutschersitz), Lippenbremse anleiten — und gleichzeitig (parallel) Notarzt rufen. Aber: 112 anzurufen ist nie ein Fehler. Lieber einmal zu viel als einmal zu spät.",
          },
        ],
      },
    },

    // Inline-Wissen: Wadenmuskel-Pumpe — VOR Step 4.4 (Sorting nutzt den Begriff)
    {
      stepId: "ce02-kovac-dur-iw-wadenmuskelpumpe",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "I Care Pflege 2020",
        "DNQP Erhaltung und Förderung der Mobilität 2017/2024",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-dur-wadenmuskelpumpe",
      tag: "anatomie",
      contentC1: {
        title: "Was ist die Wadenmuskel-Pumpe?",
        body: "",
        glossarBegriffe: ["Wadenmuskel-Pumpe"],
      },
      contentB1: {
        title: "Was bedeutet Wadenmuskel-Pumpe?",
        body: "",
        glossarBegriffe: ["Wadenmuskel-Pumpe"],
      },
      inlineWissen: {
        bausteinRef: "wadenmuskelpumpe",
        storyAufhaenger:
          "Frau Kovač sitzt viel und trägt keine Kompressionsstrümpfe — ihr Blut staut sich in den Beinvenen. Gleich kommt eine Übung gegen genau dieses Problem. Aber warum funktioniert die Übung? Die Antwort liegt in einem einfachen Mechanismus: der Wadenmuskel-Pumpe.",
        storyAufhaengerB1:
          "Frau Kovač sitzt viel. Das Blut in ihren Beinen fließt schlecht zurück. Gleich kommt eine Übung dagegen. Warum hilft diese Übung? Das erklärt die Wadenmuskel-Pumpe.",
        kerntext:
          "Die **Wadenmuskel-Pumpe** (auch: Muskelpumpe der Wade) ist der wichtigste Mechanismus für den **venösen Rückfluss** aus den Beinen zum Herzen. Beim Anspannen der Wadenmuskulatur werden die tiefen Beinvenen komprimiert — das Blut wird nach oben gedrückt. Venenklappen verhindern den Rückfluss.\n\nBei **Immobilität** (langes Sitzen, Bettlägerigkeit) fällt die Wadenmuskel-Pumpe aus → venöse Stase → Thromboserisiko steigt (Virchow-Trias: Stase als Risikofaktor).\n\nDie **Fersenwippe** (Fersen heben und senken im Sitzen) aktiviert die Wadenmuskel-Pumpe gezielt — auch wenn die Patientin nicht gehen kann. Bei Frau Kovač (Herzinsuffizienz + Ödeme + keine Kompression + langes Sitzen) ist diese Übung eine wichtige nicht-medikamentöse Thromboseprophylaxe.\n\nQuelle: (I Care Pflege 2020; DNQP Mobilität 2017/2024)",
        kerntextB1:
          "**Wadenmuskel-Pumpe** = Wenn du die Wadenmuskel anspannst (z.B. Ferse hoch und runter), drückt der Muskel das Blut in den Beinvenen nach oben Richtung Herz. Kleine Klappen in den Venen sorgen dafür, dass das Blut nicht zurückfließt.\n\nWenn Frau Kovač viel sitzt und sich nicht bewegt, funktioniert die Pumpe nicht → Blut staut sich → Thrombosegefahr.\n\nDie **Fersenwippe** (Ferse hoch, Ferse runter) aktiviert die Pumpe — auch im Sitzen. Das hilft gegen Blutstau.",
        faustregel:
          "Wadenmuskel-Pumpe = der Motor für den venösen Rückfluss. Fersenwippe im Sitzen = die einfachste Thromboseprophylaxe ohne Strümpfe.",
        faustregelB1:
          "Wadenmuskeln anspannen pumpt das Blut hoch. Fersenwippe im Sitzen = einfacher Schutz gegen Thrombose.",
        karteikarte: {
          vorderseite: "Frau Kovač sitzt viel und trägt keine Kompressionsstrümpfe. Was ist die Wadenmuskel-Pumpe — und welche Übung aktiviert sie?",
          rueckseite: "Wadenmuskel-Pumpe = Kontraktion der Wadenmuskulatur komprimiert tiefe Beinvenen → Blut wird nach oben gedrückt, Venenklappen verhindern Rückfluss. Bei Immobilität fällt die Pumpe aus → venöse Stase → Thromboserisiko. Fersenwippe (Fersen heben/senken im Sitzen) aktiviert die Pumpe gezielt. Einfachste nicht-medikamentöse Thromboseprophylaxe.",
          vorderseiteB1: "Was macht die Wadenmuskel-Pumpe? Wie kann Frau Kovač sie im Sitzen aktivieren?",
          rueckseiteB1: "Die Wadenmuskeln drücken das Blut in den Beinvenen nach oben. Ferse heben und senken = Wadenmuskel-Pumpe aktivieren = Schutz gegen Thrombose.",
        },
      },
    },

    // Inline-Wissen: Kinästhetik — VOR Step 4.4 (Sorting-Prinzip: Patientin bewegt sich selbst)
    {
      stepId: "ce02-kovac-dur-iw-kinästhetik",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hatch/Maietta: Kinästhetik — Gesundheitsentwicklung und menschliche Aktivitäten 2003"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-dur-kinästhetik",
      tag: "pflege",
      contentC1: {
        title: "Was ist Kinästhetik?",
        body: "",
        glossarBegriffe: ["Kinästhetik"],
      },
      contentB1: {
        title: "Was bedeutet Kinästhetik?",
        body: "",
        glossarBegriffe: ["Kinästhetik"],
      },
      inlineWissen: {
        bausteinRef: "kinästhetik",
        storyAufhaenger:
          "Gleich machst du Bewegungsübungen mit Frau Kovač. Du wirst sie dabei NICHT bewegen — sie bewegt sich selbst, du begleitest nur. Das ist kein Sparmodell, sondern ein fundiertes Konzept: Kinästhetik.",
        storyAufhaengerB1:
          "Gleich kommen Bewegungsübungen. Wichtig: Du machst die Bewegung NICHT für Frau Kovač. Sie bewegt sich selbst. Du hilfst nur mit Worten. Warum? Das heißt Kinästhetik.",
        kerntext:
          "**Kinästhetik** (nach Hatch und Maietta) ist ein Bewegungskonzept in der Pflege. Das Grundprinzip: **Der Patient bewegt sich selbst — die Pflegekraft begleitet, sichert und gibt verbale Impulse.** Passive Mobilisation (die Pflegekraft bewegt den Patienten) wird nur eingesetzt, wenn aktive Bewegung nicht möglich ist.\n\nWarum ist das therapeutisch besser?\n- **Eigenbewegung** aktiviert die Tiefensensibilität (Propriozeption) → der Patient spürt seinen Körper besser\n- **Selbstwirksamkeit** bleibt erhalten → der Patient erlebt sich nicht als hilflos\n- **Muskulatur** wird aktiv genutzt → Kontrakturprophylaxe wirksamer als passive Durchbewegung\n- **Pflegekraft-Rücken** wird geschont → kein Heben, kein Ziehen\n\nBei Frau Kovač (84, Kontrakturen, COPD) bedeutet das: Du sagst ihr, welche Bewegung sie machen soll. Du gibst das Tempo vor. Du sicherst, dass sie nicht rutscht. Aber **sie führt jede Bewegung selbst aus**.\n\nQuelle: (Hatch/Maietta 2003; DNQP Mobilität 2017/2024)",
        kerntextB1:
          "**Kinästhetik** = Ein Bewegungskonzept in der Pflege. Die wichtigste Regel: **Der Patient bewegt sich selbst. Du hilfst nur mit Worten.**\n\nWarum nicht selber bewegen?\n- Der Patient spürt seinen Körper besser (Eigenwahrnehmung)\n- Der Patient fühlt sich nicht hilflos\n- Muskeln arbeiten aktiv → besser gegen Versteifung (Kontraktur)\n- Dein Rücken wird geschont — kein Heben!\n\nBei Frau Kovač heißt das: Du sagst ihr was sie tun soll. Sie macht es. Du schaust hin und sicherst sie.",
        faustregel:
          "Kinästhetik = Patient bewegt sich selbst, Pflegekraft begleitet verbal und sichert. Nie die Bewegung für den Patienten machen, solange er sie selbst ausführen kann.",
        faustregelB1:
          "Kinästhetik: Der Patient bewegt sich selbst. Du sagst was er tun soll und sicherst. Nicht für ihn bewegen!",
        karteikarte: {
          vorderseite: "Bei den Bewegungsübungen mit Frau Kovač machst du die Bewegungen nicht für sie. Wie heißt dieses Konzept — und warum ist Eigenbewegung besser?",
          rueckseite: "Kinästhetik (Hatch/Maietta): Patient bewegt sich aktiv selbst, Pflegekraft begleitet verbal + sichert. Vorteile: Propriozeption, Selbstwirksamkeit, aktive Kontrakturprophylaxe, Rückenschonung Pflegekraft. Passive Mobilisation nur wenn aktive Bewegung nicht möglich ist.",
          vorderseiteB1: "Was ist Kinästhetik? Warum bewegt sich Frau Kovač selbst?",
          rueckseiteB1: "Kinästhetik = Patient bewegt sich selbst. Pflege begleitet mit Worten. Vorteile: Patient spürt sich besser, fühlt sich nicht hilflos, Muskeln arbeiten aktiv. Pflege-Rücken wird geschont.",
        },
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
        body: "Frau Kovač hat sich erholt. Jetzt kommen die Bewegungsübungen für Knie und Sprunggelenke — im Sitzen, schonend.\n\n**Pflicht-Prinzip — Kinästhetik (Hatch/Maietta):**\nFrau Kovač **macht alle Bewegungen selbst aktiv**. Du **begleitest und sicherst verbal**, du **greifst nicht** in die Bewegung ein. Bei einer 84-jährigen mit Kontrakturen ist Eigenbewegung das therapeutische Wirkprinzip — nicht die passive Mobilisation durch dich. Du gibst Tempo-Vorgaben, korrigierst verbal, sicherst durch deine Anwesenheit. Frau Kovač bestimmt das Tempo.\n\nWelche Reihenfolge ist klinisch sinnvoll?",
        glossarBegriffe: [
          "Kontraktur",
          "Sprunggelenkmobilisation",
          "Wadenmuskel-Pumpe",
          "Kinästhetik",
        ],
      },
      contentB1: {
        title: "Welche Reihenfolge bei den Bewegungs-Übungen?",
        body: "Frau Kovač hat sich erholt. Jetzt kommen Übungen für Knie und Sprunggelenke. Sitzen ist sicherer als Stehen.\n\n**Wichtig — Kinästhetik:** Frau Kovač **bewegt sich selbst**. Du **machst die Bewegung NICHT für sie**. Du sagst was sie machen soll. Du schaust hin. Du sicherst (z.B. dass sie nicht vom Sessel rutscht). Aber: Sie führt die Bewegung — du nicht. Sie bestimmt das Tempo.\n\nSortiere die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Kontraktur", "Wadenmuskel-Pumpe", "Kinästhetik"],
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
              "Richtig. Ohne dokumentierte Schweigepflichtsentbindung von Frau Kovač darf keine Pflegekraft Gesundheitsdaten an Dritte weitergeben — auch nicht an Angehörige. Wichtig: DSGVO Art. 4 Nr. 15 schützt Gesundheitsdaten **nicht erst ab Diagnose-Detail**, sondern ab jeder Information über den Gesundheitszustand. Auch ein 'wohlauf' oder 'es geht ihr gut' ist bereits eine Gesundheitsauskunft und juristisch problematisch.\n\nKorrekt: Nur die Tatsache des Besuchs erwähnen, **keine Aussage zum Zustand**, und an den Pflegedienst verweisen — dort kann mit schriftlicher Einwilligung von Frau Kovač ein Austausch geregelt werden (auch daürhaft, z.B. 1×/Woche Anruf). Das ist die DSGVO-saubere und gleichzeitig angehörigenfreundliche Lösung. Quelle: (DSGVO 2018 Art. 4 Nr. 15, Art. 9; § 203 StGB)",
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
              "Vertretbarer Sofort-Schritt — die Grundhaltung ist genau richtig (Frau Kovač entscheidet, Patientenautonomie wird respektiert). In der häuslichen Praxis ist das oft die deeskalierendste Reaktion und wird tatsächlich häufig so gewählt.\n\n**Aber juristisch unvollständig:** Eine mündliche Erlaubnis von Frau Kovač am Telefon reicht für eine sichere Datenweitergabe nicht aus. § 203 StGB und DSGVO Art. 9 verlangen eine **dokumentierte** Schweigepflichtsentbindung — schriftlich, mit Datum, beim Pflegedienst hinterlegt. Wenn du jetzt am Telefon Auskunft gibst (auch mit Frau Kovačs mündlichem 'Ja, sagen Sie's ihm'), und sie morgen vergisst, dass sie es erlaubt hat, oder ein Konflikt im Familiensystem entsteht — dann fehlt dir der Nachweis.\n\n**Sauberer Weg:** Pfad A heute (keine Auskunft), und in den nächsten Tagen mit Frau Kovač das Formular durchgehen. Sie entscheidet — schriftlich. Dann kann Darko regelmäßig informiert werden. Bonus: Siehe Phase 3, optionalen Step zu Angehörigen-Einbindung.\n\nFazit: Haltung richtig, Umsetzung heute noch nicht haltbar. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Die Idee ist gut — Frau Kovač entscheidet. Du hast die richtige Haltung. **Aber:** Mündlich am Telefon reicht nicht. Das Gesetz sagt: Schweigepflicht-Erlaubnis muss **schriftlich** sein und beim Pflegedienst liegen. Sonst hast du keinen Beweis falls Frau Kovač später sagt: 'Das hab ich nicht erlaubt.'\n\n**Besser:** Heute Pfad A (keine Auskunft). Nächste Tage: mit Frau Kovač das Formular ausfüllen. Dann darf Darko regelmäßig informiert werden.\n\nGeh zurück zu Pfad A.",
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
                  "\"Ich trink nicht gern viel, weil ich dann daürnd muss. Das ist mir unangenehm.\"",
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
              "Frau Kovač sagt: \"Ich trink nicht gern viel, weil ich dann daürnd muss. Das ist mir unangenehm.\" Du wählst deine Antwort.",
            contextB1:
              "Frau Kovač sagt: \"Ich will nicht so viel trinken. Dann muss ich daürnd zur Toilette. Das ist mir peinlich.\" Du antwortest.",
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
      stepId: "ce02-kovac-dur-07-schlafhygiene-vorgespräch",
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
          "Frau Kovačs TV-Ritual begann nach Josips Tod — es ist ihr Weg, nicht allein einzuschlafen. Das darfst du im Gespräch nicht übergehen. Aufklärung heißt: Erklären, warum es den Schlaf beeinflusst — und dann gemeinsam schaün, was möglich ist.",
        glossarBegriffe: [
          "Melatonin",
          "Zirkadianer Rhythmus",
          "Blaulicht",
          "Zirbeldrüse",
        ],
      },
      contentB1: {
        title: "Was machst du vor dem Gehen?",
        body: "Du packst deine Sachen. Du sagst Frau Kovač:\n\n\"Heute Abend möchte ich mit Ihnen über den Schlaf sprechen. Nicht um Ihnen zu sagen was Sie tun sollen. Sondern damit Sie verstehen was im Körper passiert.\"\n\nFrau Kovač sagt: \"Na gut.\"\n\n**Warum beeinflusst Fernsehen den Schlaf?**\nFernsehen sendet blaüs Licht. Dieses Licht sagt dem Körper: Es ist Tag. Deshalb macht der Körper kein Melatonin (= das Schlaf-Hormon). Ohne Melatonin kommt der Schlaf nicht. Bei älteren Menschen gibt es ohnehin schon weniger Melatonin.\n\nDazu kommt: Unregelmäßige Schlafzeiten stören die innere Uhr des Körpers.",
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
              back: "Kritisch. 88–92 % ist der **therapeutische Zielkorridor unter Saürstoffgabe** bei akuter Exazerbation — nicht der Normalwert im stabilen Zustand. Unter 88 % auch nach Ruhe und Lageoptimierung = Gewebehypoxie droht. Sofortig: Notarzt rufen, Lagerung optimieren, parallel weiter beobachten.",
              backB1:
                "Kritisch. Zu wenig Saürstoff im Blut. Sofort Notarzt rufen.",
            },
            {
              front: "Zunehmende Lippenzyanose (Lippen blau, trotz Ruhe)",
              back: "Zeichen von Saürstoffmangel in der Peripherie. Wenn die Ruhe nicht hilft: Notarzt.",
              backB1:
                "Blaue Lippen trotz Ruhe = Notarzt. Saürstoffmangel ist gefährlich.",
            },
            {
              front: "Bewusstseinstrübung (unruhig, verwirrt, nicht ansprechbar)",
              back: "Sofortiger Notarufgrund. Kann auf CO2-Narkose hinweisen (hyperkapnische Krise) bei COPD III/IV.",
              backB1: "Wenn Frau Kovač verwirrt oder nicht ansprechbar ist: sofort Notarzt.",
            },
            {
              front: "Keine Besserung nach 5–10 Min Ruhe und Lageänderung",
              back: "Wenn Übung stoppen, Kutschersitz und Lippenbremse keine Besserung bringen: Notarzt. Eskalation nach Plan.",
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

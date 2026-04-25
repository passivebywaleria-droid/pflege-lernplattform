// CE-02 Thema Enterale & parenterale Ernährung — Wissensbausteine (14 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/enterale-ernaehrung/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Kompetenzbereich: III.2 (ärztliche Anordnung)
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥3)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (Bloom 1-2, alle Schüler)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_ENTERALE_ERNAEHRUNG_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: enteral-vs-parenteral (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-enteral-vs-parenteral",
    themaId: "enterale-ernaehrung",
    titel: "Enteral vs. parenteral — Grundregel der DGEM",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient kann nicht mehr schlucken, aber sein Magen-Darm-Trakt funktioniert noch. Gibt man ihm besser Nährlösung über eine Vene oder über eine Sonde in den Magen? Warum?",
      antwort:
        "Enteral heißt: Nährstoffe über den Magen-Darm-Trakt. Parenteral heißt: über die Vene, am Darm vorbei. Grundregel der DGEM: 'If the gut works, use it' — enteral ist immer erste Wahl, weil der Darm aktiv bleibt, das GALT trainiert wird, Zottenatrophie verhindert wird und das Infektionsrisiko (kein zentraler Venenkatheter) sinkt. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Enteral heißt: Nährstoffe über den Magen-Darm-Trakt. Parenteral heißt: über die Vene, am Darm vorbei. Grundregel der DGEM: Wenn der Darm funktioniert, wird er benutzt — enteral ist immer erste Wahl.",
      textB1:
        "Enteral heißt: Essen durch den Magen oder Darm. Parenteral heißt: direkt in die Vene, ohne Magen. Die Regel: Wenn der Darm arbeitet, nutzen wir ihn. Enteral ist meistens besser als parenteral.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-01",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "ESPEN Guidelines on Enteral Nutrition (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-enteral-vs-parenteral",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Enteral vs. parenteral — Grundregel der DGEM",
          body: "**Enterale Ernährung** bezeichnet jede Nährstoffzufuhr, die über den Magen-Darm-Trakt erfolgt — normales Essen, Trinknahrung oder Sondenkost. **Parenterale Ernährung** dagegen umgeht den Darm vollständig und liefert Glukose, Aminosäuren und Fette direkt ins venöse Blut.\n\n**Warum ist enteral fast immer die bessere Wahl?**\n- **Physiologisch**: Der Darm bleibt aktiv, die Darmschleimhaut wird ernährt — Zottenatrophie wird verhindert.\n- **Immunologisch**: Das darmassoziierte Immunsystem (GALT) bleibt trainiert — Infektionsrisiko sinkt.\n- **Weniger Komplikationen**: Keine zentralen Venenkatheter nötig, kein Sepsis-Risiko.\n- **Günstiger & einfacher**.\n\nDie DGEM-Leitlinie formuliert es klar: *'If the gut works, use it.'* Parenteral wird nur gewählt, wenn der Darm nicht mehr resorbiert — etwa bei Kurzdarmsyndrom, Ileus oder schwerer Mukositis. (DGEM S3-Leitlinie Klinische Ernährung, 2013/2020)",
          glossarBegriffe: ["enteral", "parenteral", "Zottenatrophie", "GALT"],
        },
        contentB1: {
          title: "Enteral vs. parenteral — Grundregel der DGEM",
          body: "**Enteral** bedeutet: Essen geht durch den Magen und Darm. Auch wenn man eine Sonde hat — das ist enteral. **Parenteral** bedeutet: Die Nährstoffe gehen direkt ins Blut. Der Darm wird dabei nicht benutzt.\n\n**Warum ist enteral fast immer besser?**\n- Der Darm bleibt **aktiv** und gesund.\n- Das **Abwehrsystem im Darm** bleibt stark.\n- Weniger **Infektionen**.\n- Einfacher und billiger.\n\nDie Regel der Fachgesellschaft ist klar: Wenn der Darm noch arbeitet, nutzen wir ihn. Parenteral nehmen wir nur, wenn der Darm nicht mehr funktioniert.",
          glossarBegriffe: ["enteral", "parenteral", "Zottenatrophie", "GALT"],
        },
      },
    },
    glossarBegriffe: ["enteral", "parenteral", "Zottenatrophie", "GALT"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: sondenformen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-sondenformen",
    themaId: "enterale-ernaehrung",
    titel: "Sondenformen: NG, NJ, PEG, PEJ",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient braucht voraussichtlich 2 Wochen eine Sonde — ein anderer mindestens 6 Monate. Welche Lösung würdest du für wen vorschlagen und warum?",
      antwort:
        "Kurzzeitig (<4 Wochen): nasogastrale Sonde (Nase → Magen) oder nasojejunale Sonde (Nase → Dünndarm, bei Aspirationsrisiko). Langzeitig (>4 Wochen): PEG (perkutane endoskopische Gastrostomie, Bauchdecke → Magen) oder PEJ (→ Jejunum). Die 4-Wochen-Grenze ist die Faustregel der DGEM. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kurzzeitig (<4 Wochen): nasogastrale Sonde (Nase → Magen) oder nasojejunale Sonde (Nase → Dünndarm, bei Aspirationsrisiko). Langzeitig (>4 Wochen): PEG (perkutane endoskopische Gastrostomie, Bauchdecke → Magen) oder PEJ (→ Jejunum).",
      textB1:
        "Kurze Zeit (unter 4 Wochen): Sonde durch die Nase in den Magen (NG-Sonde) oder in den Dünndarm (NJ-Sonde). Lange Zeit (über 4 Wochen): PEG (Schlauch durch den Bauch in den Magen) oder PEJ (in den Dünndarm).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-02",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-sondenformen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Sondenformen: NG, NJ, PEG, PEJ",
          body: "Die Sondenform richtet sich nach **zwei Fragen**: Wie lange wird sie gebraucht? Wo soll sie enden?\n\n**Nasogastrale Sonde (NG-Sonde)** — Ein dünner Schlauch durch ein Nasenloch in den Magen. Kurzzeitig einsetzbar (<4 Wochen), weil sie bei Dauergebrauch Nasendruckstellen und Schluckbeschwerden macht.\n\n**Nasojejunale Sonde (NJ-Sonde)** — Endet im Jejunum (Dünndarm). Indikation: hohes **Aspirationsrisiko**, Magenentleerungsstörung, akute Pankreatitis. Vorteil: umgeht den Magen.\n\n**PEG (perkutane endoskopische Gastrostomie)** — Endoskopisch gelegter Schlauch durch die Bauchdecke in den Magen. Für **Langzeit-Ernährung (>4 Wochen)**. Klassische Indikationen: Schluckstörung nach Schlaganfall, Tumoren im Mund-Rachen-Bereich, Koma.\n\n**PEJ (perkutane endoskopische Jejunostomie)** — Wie PEG, aber Endpunkt im Dünndarm. Bei dauerhaftem Aspirationsrisiko oder nach Magenresektion. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["PEG", "PEJ", "nasogastrale Sonde (NG-Sonde)", "nasojejunale Sonde (NJ-Sonde)", "Jejunum", "Gastrostomie"],
        },
        contentB1: {
          title: "Sondenformen: NG, NJ, PEG, PEJ",
          body: "Welche Sonde man wählt, hängt von **zwei Fragen** ab: Wie lange? Wohin?\n\n**NG-Sonde** (nasogastral) — Ein Schlauch durch die Nase in den Magen. Für kurze Zeit (unter 4 Wochen).\n\n**NJ-Sonde** (nasojejunal) — Durch die Nase bis in den Dünndarm. Man nimmt sie, wenn der Patient sich leicht verschluckt oder der Magen nicht richtig arbeitet.\n\n**PEG** — Ein Schlauch direkt durch die Bauchdecke in den Magen. Für lange Zeit (über 4 Wochen). Typisch nach Schlaganfall mit Schluckstörung.\n\n**PEJ** — Wie PEG, aber der Schlauch endet im Dünndarm.",
          glossarBegriffe: ["PEG", "PEJ", "nasogastrale Sonde (NG-Sonde)", "nasojejunale Sonde (NJ-Sonde)", "Jejunum"],
        },
      },
    },
    glossarBegriffe: ["PEG", "PEJ", "nasogastrale Sonde (NG-Sonde)", "nasojejunale Sonde (NJ-Sonde)", "Jejunum", "Gastrostomie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: lagekontrolle-ph (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-lagekontrolle",
    themaId: "enterale-ernaehrung",
    titel: "Lagekontrolle NG-Sonde: pH-Test vs. Luftinsufflation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Schülerin soll die Lage der NG-Sonde prüfen und bläst Luft mit einer Spritze hinein und horcht mit dem Stethoskop am Bauch. Der Bauch 'blubbert'. Ist die Sonde damit sicher im Magen?",
      antwort:
        "Nein — die Luftinsufflation ist nicht mehr Standard (DGEM-Leitlinie). Geräusche können auch bei Fehllage in Lunge oder Speiseröhre entstehen. Goldstandard ist der pH-Test vom aspirierten Mageninhalt: pH <5,5 spricht für Magenlage. Bei Zweifel (z.B. PPI-Therapie) ist Röntgen die definitive Kontrolle. Prüfung vor jeder Gabe + 1× pro Schicht. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die alte 'Luftinsufflation' ist nicht mehr Standard — sie ist unsicher (Lunge macht auch Geräusche). Goldstandard: pH-Test vom aspirierten Mageninhalt mit Teststreifen. pH <5,5 spricht für Magenlage. Bei Zweifel: Röntgen zur definitiven Lagekontrolle.",
      textB1:
        "Die alte Methode mit Luft und Stethoskop ist nicht sicher. Heute nimmt man etwas Flüssigkeit aus der Sonde und testet den pH-Wert. Wenn der pH unter 5,5 ist, ist die Sonde im Magen. Bei Unsicherheit wird geröntgt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "ESPEN Guidelines on Enteral Nutrition (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-lagekontrolle",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Lagekontrolle NG-Sonde: pH-Test vs. Luftinsufflation",
          body: "Eine falsch liegende Sonde ist lebensgefährlich: Wird Nahrung versehentlich in die **Lunge** appliziert, entsteht eine Aspirationspneumonie. Deshalb muss **vor jeder Gabe** und **einmal pro Schicht** die Lage geprüft werden.\n\n**Nicht mehr empfohlen** — die sogenannte Luftinsufflation (Luft einblasen + auskultieren). Sie führt zu Fehlinterpretationen: Geräusche können auch bei Lage in der Lunge oder im Ösophagus entstehen.\n\n**Goldstandard — pH-Messung:**\n1. 5-10 ml Flüssigkeit aus der Sonde aspirieren.\n2. Einen Tropfen auf einen **pH-Teststreifen** geben.\n3. **pH <5,5** → Magenlage wahrscheinlich (Magensäure). **pH >6** → Verdacht auf Bronchial- oder Darmlage.\n\n**Einschränkung:** PPI-Therapie (z.B. Pantoprazol) hebt den pH. Dann ist die pH-Messung unzuverlässig.\n\n**Bei Unsicherheit oder nach Neuanlage**: **Röntgen-Thorax** zur definitiven Lagekontrolle. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)",
          glossarBegriffe: ["Aspiration", "pH-Wert", "Luftinsufflation", "Protonenpumpenhemmer (PPI)", "Ösophagus"],
        },
        contentB1: {
          title: "Lagekontrolle NG-Sonde: pH-Test vs. Luftinsufflation",
          body: "Eine falsch liegende Sonde kann tödlich sein: Wenn das Essen in die **Lunge** kommt, bekommt der Patient eine schwere Lungenentzündung. Darum prüfen wir die Lage:\n- **Vor jeder Gabe**.\n- **Einmal pro Schicht**.\n\n**Alte Methode** (Luft einblasen und horchen): Die ist **nicht mehr sicher**. Man hört Geräusche auch dann, wenn die Sonde falsch liegt.\n\n**Neue Methode — pH-Wert-Test:**\n1. Mit einer Spritze etwas Flüssigkeit aus der Sonde ziehen.\n2. Einen Tropfen auf einen **Teststreifen** geben.\n3. **pH unter 5,5** → Sonde ist im Magen. **pH über 6** → Vorsicht, vielleicht in der Lunge oder im Darm.\n\n**Bei Zweifel**: **Röntgen** machen lassen.",
          glossarBegriffe: ["Aspiration", "pH-Wert", "Luftinsufflation", "Protonenpumpenhemmer (PPI)"],
        },
      },
    },
    glossarBegriffe: ["Aspiration", "pH-Wert", "Luftinsufflation", "Protonenpumpenhemmer (PPI)", "Ösophagus"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: applikationsformen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-applikation",
    themaId: "enterale-ernaehrung",
    titel: "Applikationsformen: Bolus, Schwerkraft, Pumpe",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient hat eine PEG in den Magen, ein anderer eine PEJ in den Dünndarm. Warum darf man bei dem einen Bolus geben, bei dem anderen aber nicht?",
      antwort:
        "Der Magen kann ein größeres Volumen (200-400 ml) auf einmal aufnehmen — das imitiert eine Mahlzeit (Bolus). Der Dünndarm kann das nicht: zu viel auf einmal führt zum Dumping-Syndrom (Durchfall, Kreislaufprobleme). Bei Dünndarm-Sonden (NJ, PEJ) ist deshalb immer die Pumpe Pflicht. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Applikationsformen: Bolus (Spritze, 200-400 ml mehrmals täglich) — nur Magen-Sonden, imitiert Mahlzeiten. Schwerkraft (Tropfenregulierung, 1-3 h pro 'Mahlzeit'). Pumpe (20-150 ml/h kontinuierlich) — Pflicht bei Dünndarm-Sonden, kein Bolus möglich.",
      textB1:
        "Drei Wege, Sondenkost zu geben: Bolus (mit Spritze, wie eine Mahlzeit) — nur in den Magen. Schwerkraft (läuft langsam mit Tropfen, 1-3 Stunden). Pumpe (konstant und langsam) — muss sein bei Sonden, die im Dünndarm enden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-04",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "ESPEN Guidelines on Enteral Nutrition (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-applikation",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Applikationsformen: Bolus, Schwerkraft, Pumpe",
          body: "**Bolusgabe** — Mehrmals täglich (meist 5-7×) werden 200-400 ml Sondenkost mit einer Blasenspritze über 15-30 Minuten gegeben. Das imitiert eine Mahlzeit. Vor- und nachher mit **20-50 ml Wasser spülen**. **Nur bei Magen-Sonden** (NG-Sonde, PEG) möglich — der Magen kann ein größeres Volumen aufnehmen.\n\n**Schwerkraft-Applikation** — Die Sondenkost läuft aus einem Beutel per Tropfenzahl über 1-3 Stunden langsam in die Sonde. Geschwindigkeit wird mit einer Rollenklemme reguliert.\n\n**Pumpen-Applikation** — Eine Ernährungspumpe fördert die Sondenkost gleichmäßig mit 20-150 ml/h kontinuierlich. **Pflicht bei Dünndarm-Sonden** (NJ, PEJ), weil der Dünndarm kein größeres Volumen auf einmal resorbieren kann — sonst Dumping-Syndrom mit Durchfall und Kreislaufproblemen. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["Bolus", "Dumping-Syndrom", "Ernährungspumpe", "Rollenklemme"],
        },
        contentB1: {
          title: "Applikationsformen: Bolus, Schwerkraft, Pumpe",
          body: "Drei Wege, Sondenkost zu geben:\n\n**Bolus** — Mit einer großen Spritze werden 200-400 ml langsam über 15-30 Minuten eingegeben. Das ist wie eine **Mahlzeit**. Vorher und nachher mit **20-50 ml Wasser spülen**. **Nur bei Magen-Sonden** (NG, PEG).\n\n**Schwerkraft** — Die Nahrung läuft von einem Beutel langsam durch den Schlauch, über **1-3 Stunden**. Eine Klemme regelt die Geschwindigkeit.\n\n**Pumpe** — Eine **Pumpe** drückt die Nahrung konstant rein, zum Beispiel 50 ml pro Stunde. **Immer nötig** bei Dünndarm-Sonden (NJ, PEJ). Warum? Der Dünndarm kann nicht so viel auf einmal — sonst kommt Durchfall.",
          glossarBegriffe: ["Bolus", "Dumping-Syndrom", "Ernährungspumpe", "Rollenklemme"],
        },
      },
    },
    glossarBegriffe: ["Bolus", "Dumping-Syndrom", "Ernährungspumpe", "Rollenklemme"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: sondenkost-typen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-sondenkost-typen",
    themaId: "enterale-ernaehrung",
    titel: "Sondenkost-Typen: Energie und Spezialformen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Diabetiker, ein Dialysepatient und ein untergewichtiger Tumorpatient bekommen alle Sondenkost. Meinst du, sie bekommen dieselbe Nahrung? Warum oder warum nicht?",
      antwort:
        "Nein — Sondenkost gibt es in verschiedenen Zusammensetzungen: normokalorisch (1,0 kcal/ml, Standard), hochkalorisch (1,5-2,0 kcal/ml), mit/ohne Ballaststoffe und Spezialnahrungen (Diabetes: langsame KH, Niere: eiweißarm, Lunge: fettreich, Immunonutrition). Die Auswahl trifft der Arzt nach Diagnose und Bedarf. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Sondenkost ist standardisierte Industrie-Nahrung. Es gibt: hochkalorisch (1,5-2,0 kcal/ml, bei Untergewicht), normokalorisch (1,0 kcal/ml, Standard), mit/ohne Ballaststoffe und Spezialnahrung (Diabetes, Niere, Lunge, Immunsystem).",
      textB1:
        "Sondenkost ist fertige Nahrung aus der Industrie. Es gibt verschiedene Typen: hochkalorisch (viel Energie, bei dünnen Patienten), normal (Standard), mit Ballaststoffen und Spezial (für Diabetes, Niere oder Lunge).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-05",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 2,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "ESPEN Guidelines on Enteral Nutrition (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-sondenkost-typen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Sondenkost-Typen: Energie und Spezialformen",
          body: "Sondenkost ist kein 'pürierter Eintopf' — sie ist **standardisierte, sterile Industrienahrung** mit definierter Zusammensetzung.\n\n**Energiedichte:**\n- **Normokalorisch** (1,0 kcal/ml) — Standard bei normalem Bedarf.\n- **Hochkalorisch** (1,5-2,0 kcal/ml) — bei Untergewicht oder Flüssigkeitsrestriktion (Herzinsuffizienz, Dialyse).\n- **Niederkalorisch** (0,5-0,9 kcal/ml) — selten, nur bei sehr geringem Energiebedarf.\n\n**Ballaststoffe:**\n- **Ohne Ballaststoffe** — initial, bei akuter Erkrankung, Darm-OP.\n- **Mit Ballaststoffen** — Standard für Langzeit, fördert Darmflora und verhindert Durchfall.\n\n**Spezial-Nahrungen:**\n- **Diabetes-Formel** — langsam resorbierbare Kohlenhydrate.\n- **Nieren-Formel** — eiweißarm, elektrolytadaptiert.\n- **Lungen-Formel** — fettreich (weniger CO₂ bei Stoffwechsel).\n- **Immunonutrition** — mit Arginin, Glutamin, Omega-3 (bei schwerer Krankheit).\n\nDie Auswahl erfolgt **durch den Arzt** nach ärztlicher Anordnung. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["kcal (Kilokalorie)", "Ballaststoffe", "Immunonutrition"],
        },
        contentB1: {
          title: "Sondenkost-Typen: Energie und Spezialformen",
          body: "Sondenkost ist **fertige, saubere Nahrung** aus der Industrie — kein püriertes Essen aus der Küche.\n\n**Wie viel Energie hat die Nahrung?**\n- **Normal**: 1 kcal pro ml.\n- **Hochkalorisch**: 1,5 bis 2 kcal pro ml — für dünne Patienten oder wenn man wenig trinken darf.\n\n**Mit oder ohne Ballaststoffe?**\n- **Ohne** am Anfang, nach einer OP am Darm.\n- **Mit** für längere Zeit, gut für den Darm.\n\n**Spezielle Nahrung:**\n- **Diabetes** — mit langsamen Kohlenhydraten.\n- **Niere** — wenig Eiweiß.\n- **Lunge** — mehr Fett, weniger CO₂ beim Verdauen.\n\nDer **Arzt entscheidet**, welche Nahrung passt.",
          glossarBegriffe: ["kcal (Kilokalorie)", "Ballaststoffe", "Immunonutrition"],
        },
      },
    },
    glossarBegriffe: ["kcal (Kilokalorie)", "Ballaststoffe", "Immunonutrition"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: peg-pflege-tagesroutine (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-peg-pflege",
    themaId: "enterale-ernaehrung",
    titel: "PEG-Pflege: Tagesroutine in 4 Schritten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine PEG sitzt seit 2 Jahren bei einem Patienten. Die Krankenschwester schaut jeden Tag nur kurz drauf, wischt aber nichts ab und dreht den Schlauch nie. Was könnte in Monaten passieren?",
      antwort:
        "Ohne tägliches Mobilisieren wächst die innere Halteplatte in die Magenwand ein: Buried-Bumper-Syndrom. Das erfordert eine endoskopische oder operative Entfernung. Zusätzlich drohen Infektionen der Einstichstelle durch unzureichende Reinigung. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "PEG-Pflege täglich: 1) Mobilisieren — PEG-Schlauch rein-drücken, drehen, rausziehen (gegen Buried-Bumper-Syndrom). 2) Reinigen mit sauberem Wasser oder NaCl. 3) Äußere Halteplatte spannungsfrei — sonst Druckstellen. 4) Einstichstelle inspizieren.",
      textB1:
        "PEG jeden Tag pflegen: 1) Schlauch bewegen — reinschieben, drehen, rausziehen. Gegen Buried-Bumper. 2) Mit sauberem Wasser abwischen. 3) Halteplatte locker — nicht zu eng, sonst Druckstelle. 4) Haut anschauen um die Sonde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-06",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-peg-pflege",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "PEG-Pflege: Tagesroutine in 4 Schritten",
          body: "Die PEG braucht **tägliche Pflege**, sonst drohen zwei Hauptkomplikationen: **Infektion** der Einstichstelle und **Buried-Bumper-Syndrom** (die innere Halteplatte wächst in die Magenwand ein).\n\n**Tägliche Routine** (nach den ersten 7-10 Tagen nach Anlage):\n\n1. **Mobilisieren der Sonde:**\n   - Sonde **1-2 cm in den Magen schieben**, um 360° drehen, wieder zurückziehen.\n   - Zweck: Verhindert Verwachsung der inneren Halteplatte mit der Magenschleimhaut (= Buried-Bumper).\n\n2. **Reinigung der Einstichstelle:**\n   - Mit **klarem Wasser** oder **NaCl 0,9%** abwischen, trocken tupfen.\n   - Keine aggressiven Desinfektionsmittel im Dauergebrauch (Hautschäden).\n\n3. **Äußere Halteplatte prüfen:**\n   - Muss **spannungsfrei** aufliegen — ein Finger Platz zwischen Platte und Haut.\n   - Zu fest → Druckstelle und Nekrose. Zu locker → Sonde rutscht nach innen.\n\n4. **Einstichstelle inspizieren:**\n   - Rötung, Schwellung, Austritt von Flüssigkeit/Eiter dokumentieren, Arzt informieren.\n\nIn den **ersten 7-10 Tagen** nach PEG-Anlage: **steril verbinden**, noch nicht drehen. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["Buried-Bumper-Syndrom", "Halteplatte", "Einstichstelle", "Mobilisieren (PEG)"],
        },
        contentB1: {
          title: "PEG-Pflege: Tagesroutine in 4 Schritten",
          body: "Die PEG braucht **jeden Tag Pflege** — sonst gibt es zwei Probleme: **Infektion** oder das **Buried-Bumper-Syndrom** (die innere Platte wächst in den Magen ein).\n\n**Tägliche Pflege** (nach den ersten 7-10 Tagen):\n\n1. **Schlauch bewegen:**\n   - **1-2 cm nach innen schieben**, um sich selbst **drehen**, wieder **zurückziehen**.\n   - Warum? Damit die innere Platte **nicht festwächst**.\n\n2. **Haut reinigen:**\n   - Mit **klarem Wasser** oder **Kochsalz** abwischen, trocken tupfen.\n\n3. **Äußere Platte prüfen:**\n   - **Locker** — ein Finger muss darunter passen. Zu fest gibt eine Druckstelle.\n\n4. **Haut anschauen:**\n   - Ist sie rot? Geschwollen? Kommt Eiter raus? Dann **Arzt informieren**.\n\n**Erste 7-10 Tage**: steriler Verband, noch **nicht** drehen.",
          glossarBegriffe: ["Buried-Bumper-Syndrom", "Halteplatte", "Einstichstelle"],
        },
      },
    },
    glossarBegriffe: ["Buried-Bumper-Syndrom", "Halteplatte", "Einstichstelle", "Mobilisieren (PEG)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: komplikation-aspiration (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-aspiration",
    themaId: "enterale-ernaehrung",
    titel: "Aspiration: Prophylaxe und Sofortmaßnahmen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient mit NG-Sonde liegt flach im Bett und bekommt Bolus-Nahrung. Plötzlich hustet er stark, wird blass und bekommt schlecht Luft. Was ist passiert und was machst du als erstes?",
      antwort:
        "Aspiration — Nahrung ist in die Atemwege gelangt. Sofortmaßnahmen: Gabe sofort stoppen, Oberkörper hoch, Kopf zur Seite, Mund absaugen wenn möglich, Arzt alarmieren. Prophylaxe: Oberkörperhochlagerung 30-45° während der Gabe und 30-60 Min danach, Magenrest messen, bei hohem Risiko Pumpe statt Bolus. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Aspiration = Nahrung gelangt in die Atemwege. Lebensgefährlich — kann Aspirationspneumonie oder akute Atemnot auslösen. Prophylaxe: Oberkörper 30-45° hoch während der Gabe und 30-60 Min danach. Sofortmaßnahme bei Aspiration: Gabe stoppen, Oberkörper hoch, Arzt.",
      textB1:
        "Aspiration heißt: Essen kommt in die Lunge. Das ist lebensgefährlich. Vorbeugen: Oberkörper auf 30-45° heben — während der Gabe und 30-60 Minuten danach. Sofort bei Aspiration: Nahrung stoppen, aufrecht hinsetzen, Arzt rufen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-07",
        phase: 1,
        stepType: "branching",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-aspiration",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Aspiration: Prophylaxe und Sofortmaßnahmen",
          body: "Aspiration ist die **gefährlichste Akut-Komplikation** der enteralen Ernährung. Nahrung oder Mageninhalt gelangen in die Atemwege — Folgen reichen von akuter Atemnot über **Aspirationspneumonie** bis zum Ersticken.\n\n**Risikofaktoren:**\n- Liegende oder flache Position während oder nach der Gabe.\n- Gestörte Schluckreflexe (Schlaganfall, Bewusstseinstrübung).\n- Gastroösophagealer Reflux.\n- Erhöhter Magenrest.\n- Bolus-Gabe bei hohem Aspirationsrisiko.\n\n**Prophylaxe** (DGEM-Leitlinie):\n1. **Oberkörperhochlagerung 30-45°** während der gesamten Gabe.\n2. **30-60 Minuten nach Gabe** weiter hochlagern.\n3. **Pumpen-Applikation** bei hohem Risiko (kein Bolus).\n4. **Nasojejunale Sonde** statt nasogastral erwägen.\n5. **Magenrest messen** vor jeder Bolusgabe.\n\n**Sofortmaßnahmen bei Verdacht auf Aspiration:**\n- Nahrungsgabe **sofort stoppen**.\n- Oberkörper hoch, Kopf zur Seite.\n- Mund und Rachen absaugen wenn möglich.\n- **Arzt alarmieren**, ggf. Röntgen-Thorax, Antibiotika bei Pneumonie. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["Aspiration", "Aspirationspneumonie", "Magenrest"],
        },
        contentB1: {
          title: "Aspiration: Prophylaxe und Sofortmaßnahmen",
          body: "Aspiration heißt: Essen kommt in die **Lunge**. Das ist lebensgefährlich. Der Patient kann ersticken oder eine schwere **Lungenentzündung** bekommen.\n\n**Wer ist gefährdet?**\n- Patienten, die **flach liegen**.\n- Patienten mit **Schluckstörung** (z.B. nach Schlaganfall).\n- Patienten, die **wenig wach** sind.\n\n**Wie verhindert man Aspiration?**\n1. **Oberkörper hoch** auf 30-45° während der Gabe.\n2. **Noch 30-60 Minuten** nach der Gabe weiter hoch bleiben.\n3. **Pumpe** statt Bolus bei Risiko.\n4. **Magenrest prüfen** vor jeder Gabe.\n\n**Wenn Aspiration passiert:**\n- **Sofort Nahrung stoppen**.\n- Patient **aufrecht** hinsetzen.\n- Mund **absaugen**.\n- **Arzt rufen**.",
          glossarBegriffe: ["Aspiration", "Aspirationspneumonie", "Magenrest"],
        },
      },
    },
    glossarBegriffe: ["Aspiration", "Aspirationspneumonie", "Magenrest"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: komplikation-durchfall (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-durchfall",
    themaId: "enterale-ernaehrung",
    titel: "Durchfall bei Sondenkost: Ursachen und Maßnahmen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient bekommt seit 3 Tagen Sondenkost — und hat jetzt 5× Durchfall pro Tag. Die Pflegekraft denkt 'das ist bei Sonde normal'. Stimmt das oder könnte das verschiedene Ursachen haben?",
      antwort:
        "Durchfall ist nicht normal — fast immer gibt es eine behebbare Ursache: zu schnelle Applikationsrate, Hyperosmolarität, Kontamination (>4-6 h gehängt), Antibiotika (C. difficile!), Sorbit in flüssigen Medikamenten, Laktose-Intoleranz, Pankreasinsuffizienz. Erste Maßnahme: Rate reduzieren, Ursache suchen, Arzt informieren — nicht komplett stoppen. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Durchfall bei Sondenkost ist nicht normal — meist behebbar. Ursachen: zu schnelle Applikation, zu kalte Nahrung, Hyperosmolarität, Hygienefehler (kontaminierte Nahrung), Antibiotika-assoziiert (C. difficile!), Laktose-Intoleranz oder Sorbit in Medikamenten.",
      textB1:
        "Durchfall mit Sonde ist kein normales Problem. Gründe: Nahrung läuft zu schnell, zu kalt, zu viel Zucker, Hygiene schlecht, Antibiotika haben den Darm gestört, Laktose-Unverträglichkeit oder Medikamente mit Sorbit. Meistens kann man es lösen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-08",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "ESPEN Guidelines on Enteral Nutrition (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-durchfall",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Durchfall bei Sondenkost: Ursachen und Maßnahmen",
          body: "Durchfall ist die häufigste Komplikation der Sondenernährung (bis zu 30% der Patienten). Er ist **nicht schicksalhaft** — fast immer gibt es eine Ursache.\n\n**Häufigste Ursachen:**\n1. **Zu schnelle Applikation** — Pumpenrate zu hoch oder Bolus zu schnell. Lösung: Rate reduzieren.\n2. **Hyperosmolare Sondenkost** — zu konzentriert. Bei Start: niedrigere Kalorienstufe, Steigerung über Tage.\n3. **Kühl applizierte Nahrung** — immer Zimmertemperatur (nicht aufwärmen!).\n4. **Kontamination** — Nahrung nicht länger als 4-6 h hängen lassen, Hände und Überleitungssystem sauber.\n5. **Antibiotika-assoziiert** — Darmflora gestört. **Vorsicht: Clostridium-difficile-Diarrhoe** — Stuhlprobe, Isolation!\n6. **Sorbit in Medikamenten** — viele flüssige Medikamente enthalten Sorbit (abführend).\n7. **Laktose-Intoleranz** — laktosefreie Formel wählen.\n8. **Pankreasinsuffizienz** — Enzymsubstitution.\n\n**Maßnahmen:** Ursachensuche, Applikationsrate reduzieren, Hygienestandards prüfen, Stuhlprobe bei Antibiotika-Anamnese, Arzt informieren. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["Hyperosmolarität", "Clostridium difficile (C. difficile)", "Sorbit", "Laktose-Intoleranz", "Pankreasinsuffizienz"],
        },
        contentB1: {
          title: "Durchfall bei Sondenkost: Ursachen und Maßnahmen",
          body: "Durchfall bei Sondenkost ist **häufig** (fast jeder dritte Patient) — aber **nicht normal**. Es gibt fast immer einen Grund.\n\n**Häufige Gründe:**\n1. **Nahrung läuft zu schnell** → Pumpenrate runter.\n2. **Zu viel Kalorien/Zucker** auf einmal → am Anfang langsam steigern.\n3. **Nahrung zu kalt** → Zimmertemperatur.\n4. **Schmutzige Überleitung** → nicht länger als 4-6 Stunden hängen lassen.\n5. **Antibiotika** haben den Darm kaputtgemacht → **Stuhlprobe** (Vorsicht **C. difficile**!).\n6. **Sorbit** in flüssigen Medikamenten → macht auch Durchfall.\n7. **Laktose-Intoleranz** → laktosefreie Nahrung.\n\n**Was machst du?** Ursache suchen, **Rate reduzieren**, Hygiene prüfen, Arzt informieren.",
          glossarBegriffe: ["Hyperosmolarität", "Clostridium difficile (C. difficile)", "Sorbit", "Laktose-Intoleranz"],
        },
      },
    },
    glossarBegriffe: ["Hyperosmolarität", "Clostridium difficile (C. difficile)", "Sorbit", "Laktose-Intoleranz", "Pankreasinsuffizienz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: komplikation-sondenverstopfung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-sondenverstopfung",
    themaId: "enterale-ernaehrung",
    titel: "Sondenverstopfung: Prophylaxe und Intervention",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die PEG einer Patientin lässt sich nicht mehr spülen — die Spritze gibt keinen Widerstand. Was hat der Kollege vor der letzten Gabe wahrscheinlich vergessen? Und was versuchst du jetzt?",
      antwort:
        "Vergessenes Spülen — Nahrungsreste oder Medikamente haben das Lumen verstopft. Jetzt: warmes Wasser mit 20-50 ml Spritze, sanfter Druck und Zug im Wechsel. Kein Cola, keine Gewalt (Leckage-Gefahr). Wenn nichts hilft: Sonde wechseln lassen. Prophylaxe: immer 20-50 ml Wasser vor und nach jeder Gabe/Medikation. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Sonde verstopft meist durch vergessenes Spülen. Prophylaxe: 20-50 ml Wasser vor UND nach jeder Gabe/Medikamentengabe. Bei Verstopfung: warmes Wasser, sanfter Druck (keine Gewalt!). Nie Cola oder scharfe Mittel — Empfehlung ohne Evidenz und gefährlich.",
      textB1:
        "Sonde verstopft, wenn man vergisst zu spülen. Immer 20-50 ml Wasser vor und nach Nahrung oder Medikamenten. Wenn sie trotzdem zu ist: mit warmem Wasser probieren, sanft drücken. Keine Gewalt — Sonde kann platzen. Kein Cola.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-09",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-sondenverstopfung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Sondenverstopfung: Prophylaxe und Intervention",
          body: "**Verstopfung der Sonde** ist eine häufige, aber vermeidbare Komplikation. Ursache: Nahrungsreste, zermörserte Tabletten oder ausgeflockte Medikamente verkleben das Lumen.\n\n**Prophylaxe ist alles:**\n- **Vor und nach jeder Gabe** mit **20-50 ml Wasser** spülen.\n- **Vor und nach jeder Medikamentengabe** ebenfalls spülen.\n- **Medikamente einzeln** geben, nicht zusammen mischen.\n- Tabletten nur mörsern, wenn sie nicht magensaftresistent oder retardiert sind.\n- **Bei kontinuierlicher Pumpe**: alle 4-6 Stunden spülen.\n\n**Was tun bei Verstopfung?**\n1. **Warmes Wasser** mit 20-50 ml Spritze, sanfter Druck und Zug im Wechsel.\n2. Falls ineffektiv: **Pankreasenzym-Lösung** (nach Arztanordnung).\n3. **KEIN Cola, kein Ananassaft** — veraltete Tipps ohne Evidenz, können die Sonde schädigen.\n4. **Keine Gewalt** — zu hoher Druck reißt die Sonde, es entsteht eine Leckage.\n5. Wenn nichts hilft: Sonde muss gewechselt werden. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["Lumen", "mörsern", "retardiert", "magensaftresistent", "Pankreasenzym"],
        },
        contentB1: {
          title: "Sondenverstopfung: Prophylaxe und Intervention",
          body: "Eine Sonde **verstopft**, wenn Essen oder Tabletten im Schlauch kleben bleiben.\n\n**Vorbeugen ist das Wichtigste:**\n- **Vor und nach jeder Gabe** mit **20-50 ml Wasser** spülen.\n- **Auch nach Medikamenten** spülen.\n- **Tabletten einzeln** geben, nicht mischen.\n\n**Wenn die Sonde verstopft ist:**\n1. **Warmes Wasser** in der Spritze, sanft drücken und ziehen.\n2. **Keine Gewalt** — sonst platzt der Schlauch.\n3. **Kein Cola** oder saurer Saft — das ist ein alter Tipp, er hilft nicht und kann die Sonde kaputtmachen.\n4. Wenn es nicht besser wird: Sonde **wechseln lassen**.\n\nMerke: Spülen schützt die Sonde — jedes Mal.",
          glossarBegriffe: ["Lumen", "mörsern", "retardiert", "magensaftresistent"],
        },
      },
    },
    glossarBegriffe: ["Lumen", "mörsern", "retardiert", "magensaftresistent", "Pankreasenzym"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: refeeding-syndrom (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-refeeding",
    themaId: "enterale-ernaehrung",
    titel: "Refeeding-Syndrom: Pathophysiologie und Prophylaxe",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient mit Magersucht hat 4 Wochen fast nichts gegessen. Jetzt soll er wieder ernährt werden. Die junge Ärztin will die volle Kalorienmenge sofort geben. Würdest du das unterstützen? Warum?",
      antwort:
        "Nein — das ist lebensgefährlich. Schnelle Wiederernährung nach langer Mangelernährung löst das Refeeding-Syndrom aus: Insulin-getriebene Elektrolytverschiebung (Phosphat, Kalium, Magnesium rauschen in die Zellen), Risiko: Herzstillstand. Prophylaxe: 10-20 kcal/kg/Tag am Anfang, Steigerung über 5-7 Tage, Thiamin + Elektrolyte substituieren, täglich Labor. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Refeeding-Syndrom = lebensgefährliche Elektrolytverschiebung bei schneller Nahrungszufuhr nach langer Mangelernährung. Insulin-getrieben: Phosphat, Kalium, Magnesium rauschen in die Zellen — Plasmaspiegel crashen. Folge: Herz-, Atmungs-, Neurologische Störungen, Tod.",
      textB1:
        "Refeeding-Syndrom = gefährliche Probleme mit Elektrolyten (wie Kalium und Phosphat), wenn man nach langer Mangelernährung zu schnell wieder füttert. Die Stoffe rauschen in die Zellen. Im Blut fehlen sie. Es kann zu Herzstillstand kommen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-10",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "ESPEN Guidelines on Enteral Nutrition (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-refeeding",
        tag: "krankheitslehre",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Refeeding-Syndrom: Pathophysiologie und Prophylaxe",
          body: "Das **Refeeding-Syndrom** ist eine der gefährlichsten, aber wenig bekannten Komplikationen der künstlichen Ernährung. Es tritt auf, wenn Patienten **nach längerer Mangelernährung** (meist >5-10 Tage ohne adäquate Kalorien) **zu schnell** wieder ernährt werden.\n\n**Pathophysiologie:**\nWährend des Hungerns geht der Körper auf Fettverbrennung um, Zellen geben Elektrolyte (Phosphat, Kalium, Magnesium) ab. Bei plötzlicher Kohlenhydratzufuhr steigt Insulin rasch — es treibt Elektrolyte **zurück in die Zellen**. Die Plasmaspiegel **crashen**.\n\n**Symptome:**\n- **Hypophosphatämie** → Muskelschwäche, Atemversagen, Herzinsuffizienz.\n- **Hypokaliämie** → Arrhythmien, Herzstillstand.\n- **Hypomagnesiämie** → Krampfanfälle, Arrhythmien.\n- Thiaminmangel → Wernicke-Enzephalopathie.\n\n**Risikogruppen:** Anorexia nervosa, Tumorpatienten, Alkoholkranke, chronisch Kranke mit BMI <18,5.\n\n**Prophylaxe (DGEM):**\n- **Langsamer Start**: 10-20 kcal/kg/Tag am ersten Tag, Steigerung über **5-7 Tage**.\n- **Elektrolyte und Thiamin** vor und während Ernährung substituieren.\n- Laborkontrolle **täglich** in den ersten Tagen. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)",
          glossarBegriffe: ["Refeeding-Syndrom", "Hypophosphatämie", "Hypokaliämie", "Thiamin (Vitamin B1)", "Wernicke-Enzephalopathie", "Elektrolyte"],
        },
        contentB1: {
          title: "Refeeding-Syndrom: Pathophysiologie und Prophylaxe",
          body: "Das **Refeeding-Syndrom** ist eine sehr **gefährliche** Komplikation. Sie passiert, wenn Patienten nach langem Hungern **zu schnell** wieder Nahrung bekommen.\n\n**Was passiert?**\nDer Körper hat während des Hungerns **Elektrolyte** (wie Phosphat und Kalium) aus den Zellen benutzt. Wenn plötzlich viel Zucker kommt, **rauscht alles in die Zellen zurück**. Im Blut fehlen dann wichtige Stoffe.\n\n**Symptome:**\n- **Muskel-Schwäche**, schlechter atmen können.\n- **Herzprobleme**, unregelmäßiger Puls, **Herzstillstand**.\n- **Krampfanfälle**.\n\n**Wer hat Risiko?**\n- Patienten mit **Magersucht**.\n- Tumor-Patienten.\n- **Alkohol-Kranke**.\n- Patienten, die lange (über 5-10 Tage) fast nichts gegessen haben.\n\n**Was tun?**\n- **Langsam beginnen** (wenig Kalorien am Anfang, über 5-7 Tage steigern).\n- **Elektrolyte und Vitamin B1** **vorher** geben.\n- **Blut-Werte** jeden Tag kontrollieren.",
          glossarBegriffe: ["Refeeding-Syndrom", "Hypophosphatämie", "Hypokaliämie", "Thiamin (Vitamin B1)", "Elektrolyte"],
        },
      },
    },
    glossarBegriffe: ["Refeeding-Syndrom", "Hypophosphatämie", "Hypokaliämie", "Thiamin (Vitamin B1)", "Wernicke-Enzephalopathie", "Elektrolyte"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: parenterale-grundzuege (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-parenteral",
    themaId: "enterale-ernaehrung",
    titel: "Parenterale Ernährung: peripher vs. zentral",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient bekommt keine enterale Ernährung, weil sein Darm nicht arbeitet. Er soll Nährlösung in die Vene bekommen. Kannst du dir vorstellen, warum man manchmal eine Armvene nimmt und manchmal einen Katheter direkt ins Herz legt?",
      antwort:
        "Periphervenös (Armvene): nur kurzfristig (max. 7-10 Tage), isoosmolare Lösung (bis 800 mosmol/l), sonst Venenreizung (Phlebitis). Zentralvenös (ZVK/Port): langfristig, hyperosmolare Lösungen möglich, volles Bedarfsniveau. Zentralvenös höheres Komplikationsrisiko (Katheter-Sepsis, Pneumothorax). (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Parenteral = Vene. Periphervenös (Armvene): nur kurzfristig, isoosmolare Lösung (800 mosmol/l), maximal 7-10 Tage. Zentralvenös (ZVK, Port): langfristig, hyperosmolare Lösungen möglich. Höheres Infektionsrisiko als enteral — v.a. Katheter-Sepsis.",
      textB1:
        "Parenteral = in die Vene. Armvene (periphervenös): nur kurz (7-10 Tage), verdünnte Lösung. Katheter in eine große Vene zum Herz (ZVK, Port): länger, darf auch konzentriert sein. Infektionsrisiko höher als bei enteral.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-11",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-parenteral",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Parenterale Ernährung: peripher vs. zentral",
          body: "Parenterale Ernährung liefert Glukose, Aminosäuren, Fettemulsionen, Elektrolyte und Vitamine **direkt intravenös** — bei nicht-funktionsfähigem Magen-Darm-Trakt.\n\n**Periphervenöse parenterale Ernährung (PPE)**\n- Über eine **Armvene** (Verweilkanüle).\n- Lösung muss **isoosmolar** bleiben (bis ~800 mosmol/l), sonst Venenreizung, Phlebitis.\n- **Nur kurzfristig** (max. 7-10 Tage).\n- Deckt keinen vollständigen Bedarf — eher Überbrückung.\n\n**Zentralvenöse parenterale Ernährung (ZPE)**\n- Über einen **ZVK** (Vena subclavia, jugularis, femoralis) oder **Portkatheter**.\n- **Hyperosmolare Lösungen** (bis 2000 mosmol/l) möglich, volle Bedarfsdeckung.\n- **Langzeit-Ernährung** möglich (Wochen bis Jahre).\n- **Höheres Komplikationsrisiko**: Pneumothorax bei Anlage, **Katheter-Sepsis**, Thrombose.\n\n**Hygieneregeln (streng):**\n- **Aseptisches Arbeiten** bei jedem Verbandwechsel.\n- **Separates Infusionssystem** nur für parenterale Ernährung.\n- **Keine Medikamente** über denselben Lumen.\n- Tägliche Inspektion der Einstichstelle.\n\n(DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["periphervenös", "zentralvenös", "ZVK", "Port", "Osmolarität", "Phlebitis", "Katheter-Sepsis"],
        },
        contentB1: {
          title: "Parenterale Ernährung: peripher vs. zentral",
          body: "Parenterale Ernährung geht **direkt in die Vene** — wenn der Darm nicht mehr arbeitet.\n\n**Armvene** (periphervenös)\n- Normaler Venenzugang im Arm.\n- Nur **verdünnte** Lösung (sonst wird die Vene entzündet).\n- Nur für **kurze Zeit** (bis 10 Tage).\n\n**Große Vene zum Herz** (zentralvenös — ZVK oder Port)\n- Katheter in eine große Vene (Hals oder Schulter).\n- Auch **konzentrierte** Lösungen möglich.\n- Für **lange Zeit** (Wochen bis Jahre).\n- **Hohes Infektionsrisiko** — der Katheter führt direkt ins Blut.\n\n**Hygiene ist sehr wichtig:**\n- **Steril arbeiten** beim Verband.\n- **Eigener Zugang** nur für die Ernährung.\n- **Keine Medikamente** darüber geben.\n- Jeden Tag die Stelle **anschauen**.",
          glossarBegriffe: ["periphervenös", "zentralvenös", "ZVK", "Port", "Osmolarität", "Phlebitis", "Katheter-Sepsis"],
        },
      },
    },
    glossarBegriffe: ["periphervenös", "zentralvenös", "ZVK", "Port", "Osmolarität", "Phlebitis", "Katheter-Sepsis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: peg-indikationen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-peg-indikationen",
    themaId: "enterale-ernaehrung",
    titel: "PEG-Indikationen: wann sinnvoll, wann umstritten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche Art von Patienten brauchen deiner Meinung nach eine PEG? Nenne 3 typische Situationen — wo das Schlucken oder Essen dauerhaft nicht mehr geht.",
      antwort:
        "Klassische PEG-Indikationen: 1) Neurogene Dysphagie (Schlaganfall, ALS, Parkinson spät). 2) HNO-/Ösophagus-Tumoren (vor/während Bestrahlung). 3) Koma/Wachkoma. 4) Schwere Mukositis bei Chemo. Umstritten: fortgeschrittene Demenz (DGN/DGG/DGP 2014: keine Indikation im Endstadium). Voraussetzung immer: >4 Wochen Dauer. (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Klassische PEG-Indikationen: 1) Schluckstörung (Dysphagie) nach Schlaganfall, ALS, Parkinson spät. 2) Tumoren im Mund-/Rachen-/Speiseröhrenbereich (vor/während Bestrahlung). 3) Koma/Wachkoma. 4) Schwere Demenz — hier aber ethisch umstritten (siehe Baustein 13).",
      textB1:
        "Wer braucht typisch eine PEG? 1) Schlaganfall mit Schluckstörung. 2) Tumor im Mund, Hals oder Speiseröhre. 3) Koma. 4) Schwere Demenz — aber hier ist es ethisch schwierig (oft nicht hilfreich, nur Leiden verlängernd).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-12",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "DGN/DGG/DGP-Stellungnahme PEG bei Demenz (2014)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-peg-indikationen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "PEG-Indikationen: wann sinnvoll, wann umstritten",
          body: "Eine PEG ist indiziert, wenn eine **orale Ernährung dauerhaft unmöglich oder unsicher** ist — und eine voraussichtliche Behandlungsdauer von **>4 Wochen** zu erwarten ist.\n\n**Klassische Indikationen:**\n\n1. **Neurogene Dysphagie**\n   - Nach **Schlaganfall** mit persistierender Schluckstörung.\n   - **Amyotrophe Lateralsklerose (ALS)** — progrediente Schluckschwäche.\n   - Morbus Parkinson im fortgeschrittenen Stadium.\n\n2. **Tumoren im oberen Gastrointestinaltrakt**\n   - **HNO-Tumoren** — vor und während Strahlentherapie.\n   - **Ösophagus-Karzinom** mit Stenose.\n\n3. **Bewusstseinsstörungen**\n   - **Koma / Wachkoma**.\n   - Langzeit-Beatmung mit eingeschränkter oraler Aufnahme.\n\n4. **Schwere Mukositis** bei Chemo-/Strahlentherapie.\n\n**Ethisch umstritten:** PEG bei **fortgeschrittener Demenz** — DGN/DGG/DGP 2014: keine Indikation im Endstadium. (DGEM S3-Leitlinie, 2013/2020)",
          glossarBegriffe: ["Dysphagie", "ALS (Amyotrophe Lateralsklerose)", "HNO-Tumor", "Bulbärsymptomatik", "Mukositis"],
        },
        contentB1: {
          title: "PEG-Indikationen: wann sinnvoll, wann umstritten",
          body: "Eine PEG ist sinnvoll, wenn ein Patient **dauerhaft nicht mehr schlucken** kann — und das voraussichtlich **länger als 4 Wochen**.\n\n**Typische Gründe:**\n\n1. **Schluckstörung durch Gehirn-Krankheit**\n   - Nach **Schlaganfall**.\n   - **ALS** (Muskel-Krankheit).\n   - **Parkinson** in spätem Stadium.\n\n2. **Tumor im Mund, Hals oder Speiseröhre**\n   - Vor oder während **Bestrahlung**.\n\n3. **Koma** oder **Wachkoma**.\n\n4. **Schwere Entzündung im Mund** durch Chemotherapie.\n\n**Schwierig:** PEG bei **schwerer Demenz** — hier ist es oft **nicht hilfreich** (mehr dazu in Baustein 13).",
          glossarBegriffe: ["Dysphagie", "ALS (Amyotrophe Lateralsklerose)", "HNO-Tumor", "Mukositis"],
        },
      },
    },
    glossarBegriffe: ["Dysphagie", "ALS (Amyotrophe Lateralsklerose)", "HNO-Tumor", "Bulbärsymptomatik", "Mukositis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: ethik-peg-demenz (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-ethik-demenz",
    themaId: "enterale-ernaehrung",
    titel: "PEG bei fortgeschrittener Demenz: Ethik und Recht",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 89-jährige Frau mit schwerer Demenz (Endstadium) isst und trinkt kaum noch. Die Tochter möchte eine PEG 'damit Mama nicht verhungert'. Was überlegst du? Welche Fragen stellen sich ethisch?",
      antwort:
        "Studien (DGN/DGG/DGP 2014, Cochrane Sampson 2009): keine Lebensverlängerung, keine weniger Aspirationspneumonien, Lebensqualität sinkt (Fixierung). Nahrungsverweigerung im Endstadium = Teil des Sterbens. Entscheidend: Patientenverfügung (§ 1901a BGB) oder mutmaßlicher Wille. Alternative: Comfort Feeding Only (kleine Mengen, Mundpflege, Nähe). Beenden ≠ aktive Sterbehilfe (BÄK 2011).",
    },
    stufe2: {
      typ: "hinweis",
      text: "PEG bei fortgeschrittener Demenz (Endstadium): Studien zeigen keine Lebensverlängerung, keine Reduktion von Aspirationspneumonien, aber Verlust an Lebensqualität (Fixierung, Hautreizung, Infektionen). Patientenverfügung (§ 1901a BGB) und mutmaßlicher Wille entscheiden — nicht 'Verhungern'-Angst.",
      textB1:
        "Bei schwerer Demenz am Lebensende hilft eine PEG meistens nicht. Studien sagen: Kein längeres Leben, keine weniger Lungenentzündungen, aber weniger Lebensqualität. Wichtig: Was wollte der Patient, als er noch entscheiden konnte (Patientenverfügung)?",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "III.2",
        quellen: [
          "DGN/DGG/DGP-Stellungnahme PEG bei Demenz (2014)",
          "Cochrane Review Sampson et al. (2009)",
          "§ 1901a BGB (Patientenverfügung)",
          "Bundesärztekammer: Grundsätze zur ärztlichen Sterbebegleitung (2011)",
        ],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-ethik-demenz",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "PEG bei fortgeschrittener Demenz: Ethik und Recht",
          body: "Die Entscheidung über eine PEG bei fortgeschrittener Demenz ist eine der schwierigsten in der Pflege.\n\n**Was zeigt die Evidenz? (DGN/DGG/DGP 2014; Cochrane Sampson 2009)**\n- **Keine Lebensverlängerung** bei Patienten mit schwerer Demenz.\n- **Keine Reduktion von Aspirationspneumonien** — im Gegenteil, Aspirationsrate kann steigen.\n- **Keine Verbesserung** der Wund- oder Hautheilung.\n- **Kein Komfortgewinn** — oft das Gegenteil (Fixierung, weil Patient die Sonde zieht).\n\n**Warum der Mythos 'Ohne PEG verhungert er'?**\nBei **früher/mittlerer Demenz** mit vorübergehender Schluckstörung kann die PEG hilfreich sein. Im **Endstadium** der Demenz ist **Nahrungsverweigerung Teil des Sterbeprozesses**.\n\n**Rechtlicher Rahmen:**\n- **Patientenverfügung** (§ 1901a BGB) ist **bindend**, wenn sie auf die aktuelle Situation zutrifft.\n- Fehlt eine Patientenverfügung: **Mutmaßlicher Wille** ermitteln (Betreuer, Angehörige, frühere Äußerungen).\n- **Künstliche Ernährung am Lebensende** ist medizinische Maßnahme — Beenden ist **kein aktives Töten** (Bundesärztekammer 2011).\n\n**Alternative:** **Comfort Feeding Only** — kleine Mengen Lieblingsspeisen anbieten, Mundpflege, Nähe, Musik. Würde statt Sonde. (DGN/DGG/DGP 2014)",
          glossarBegriffe: ["Patientenverfügung", "mutmaßlicher Wille", "Comfort Feeding Only", "Endstadium", "künstliche Ernährung"],
        },
        contentB1: {
          title: "PEG bei fortgeschrittener Demenz: Ethik und Recht",
          body: "Die Entscheidung 'PEG ja oder nein' bei schwerer Demenz ist **sehr schwierig**. Viele Angehörige sagen: 'Ohne Sonde verhungert Mama.' Aber **Studien zeigen**: Bei schwerer Demenz am Lebensende bringt die PEG **fast nichts**.\n\n**Was sagen die Studien?**\n- Der Patient lebt **nicht länger**.\n- Er bekommt **nicht weniger Lungenentzündungen**.\n- Die **Haut heilt nicht besser**.\n- Oft **mehr Leiden** — der Patient will die Sonde weg, wird dafür festgebunden.\n\n**Was ist rechtlich wichtig?**\n- **Patientenverfügung** (was der Patient früher schriftlich wollte) ist **bindend**.\n- Gibt es keine: Was hätte er **vermutlich** gewollt? Dazu reden Angehörige und Betreuer.\n- **Keine PEG legen** ist **nicht 'Töten'** — sondern **Akzeptanz des Lebensendes**.\n\n**Alternative: 'Comfort Feeding Only'**\n- Kleine Mengen der **Lieblingsspeise** anbieten, wenn er will.\n- **Mundpflege**, Gespräche, **Nähe**.\n- Würde statt Schlauch.",
          glossarBegriffe: ["Patientenverfügung", "mutmaßlicher Wille", "Comfort Feeding Only", "Endstadium"],
        },
      },
    },
    glossarBegriffe: ["Patientenverfügung", "mutmaßlicher Wille", "Comfort Feeding Only", "Endstadium", "künstliche Ernährung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: hygiene-sondenkostgabe (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "enterale-ernaehrung-hygiene",
    themaId: "enterale-ernaehrung",
    titel: "Hygiene bei Sondenkostgabe: Standards und Hängedauer",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Kollegin hängt morgens um 8 Uhr einen 500-ml-Beutel Sondenkost auf. Um 17 Uhr fragt sie, ob der Rest für die nächste Gabe reicht. Was hältst du davon?",
      antwort:
        "Das ist ein Hygiene-Fehler — nach 4-6 Stunden Hängedauer bei Raumtemperatur vermehren sich Bakterien exponentiell. Nach 9 Stunden muss der Rest verworfen werden. Außerdem: Überleitungssystem alle 24 h wechseln, Hände desinfizieren, aseptisch arbeiten am Konnektor, Nahrung nur bei Raumtemperatur (30 Min vorher aus dem Kühlschrank, nie Mikrowelle). (DGEM S3-Leitlinie, 2013/2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Sondenkost-Hygiene: Hände desinfizieren, aseptisches Arbeiten beim Ansetzen. Beutel/Flasche max. 4-6 h hängen (Raumtemperatur fördert Bakterien). Überleitungssystem alle 24 h wechseln. Nahrung aus Kühlschrank: 30 Min vor Gabe rausnehmen — nicht erwärmen.",
      textB1:
        "Hygiene bei Sondenkost: Hände waschen und desinfizieren. Sauber arbeiten beim Aufhängen. Maximal 4-6 Stunden hängen lassen — sonst wachsen Bakterien. Neuer Schlauch alle 24 Stunden. Nicht erwärmen, aber aus dem Kühlschrank 30 Min vorher rausnehmen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-enterale-wb-14",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["DGEM S3-Leitlinie Klinische Ernährung (2013/2020)", "ESPEN Guidelines on Enteral Nutrition (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-enterale-hygiene",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Hygiene bei Sondenkostgabe: Standards und Hängedauer",
          body: "Kontaminierte Sondenkost ist eine **häufige Ursache für Durchfall und Infektionen** — besonders bei immungeschwächten Patienten. Strenge Hygiene ist Pflicht.\n\n**Vor der Gabe:**\n1. **Hände desinfizieren**, Einmalhandschuhe bei Bedarf.\n2. **Anbruchsdatum und Haltbarkeit** prüfen (offene Flaschen meist 24 h haltbar gekühlt).\n3. **Nahrung bei Raumtemperatur** applizieren: Aus dem Kühlschrank **30 Min vorher** rausnehmen. **Nicht** in Mikrowelle/Wasserbad erwärmen.\n4. **Aseptisches Arbeiten** am Konnektor — Sonde nicht mit Fingern oder unsteriler Fläche berühren.\n\n**Während der Gabe:**\n5. **Hängedauer max. 4-6 h** bei geschlossenen Systemen, **max. 8 h** bei Pumpen mit sterilem Beutel.\n6. **Überleitungssystem alle 24 h** komplett wechseln.\n\n**Nach der Gabe:**\n7. **20-50 ml Wasser** zum Spülen.\n8. Offenes Gebinde **beschriften** (Anbruchsdatum/-zeit, Kürzel).\n\nBei Verdacht auf Kontamination (trüb, Geruch, Ausflockung): **nicht verwenden**, verwerfen. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)",
          glossarBegriffe: ["Kontamination", "Konnektor", "aseptisch", "Überleitungssystem", "Anbruchsdatum"],
        },
        contentB1: {
          title: "Hygiene bei Sondenkostgabe: Standards und Hängedauer",
          body: "Schmutzige Sondenkost macht **Durchfall** und **Infektionen** — besonders bei schwachen Patienten. Darum ist Hygiene sehr wichtig.\n\n**Vor der Gabe:**\n1. **Hände waschen und desinfizieren**.\n2. **Haltbarkeit prüfen** (offene Flasche meist 24 h im Kühlschrank).\n3. **Raumtemperatur**: Aus dem Kühlschrank **30 Minuten vorher** rausnehmen. **Nicht erwärmen** — auch nicht in der Mikrowelle.\n4. **Sauber anschließen** — die Sonde nicht anfassen.\n\n**Während der Gabe:**\n5. **Maximal 4-6 Stunden** hängen lassen — danach wachsen Bakterien.\n6. **Schlauch alle 24 Stunden wechseln**.\n\n**Nach der Gabe:**\n7. **20-50 ml Wasser spülen**.\n8. Offene Flasche **beschriften** (wann geöffnet, wer).\n\nWenn die Nahrung **trüb ist, komisch riecht oder Flocken hat**: **wegwerfen**.",
          glossarBegriffe: ["Kontamination", "Konnektor", "aseptisch", "Überleitungssystem", "Anbruchsdatum"],
        },
      },
    },
    glossarBegriffe: ["Kontamination", "Konnektor", "aseptisch", "Überleitungssystem", "Anbruchsdatum"],
    karteikarten: [],
  },
];

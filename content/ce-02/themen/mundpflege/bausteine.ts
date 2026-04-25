// CE-02 Thema Mundpflege & Soor-/Parotitis-Prophylaxe — Wissensbausteine (14 Bausteine)
// Quelle: content/ce-02/themen/mundpflege/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Bloom-Verteilung: 1-2: 21% (3) | 3-4: 57% (8) | 5-6: 22% (3)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_MUNDPFLEGE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: mundhoehle-anatomie (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-mundhoehle-anatomie",
    themaId: "mundpflege",
    titel: "Anatomie der Mundhöhle",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Öffne kurz deinen Mund und fühle mit der Zunge nach. Welche Strukturen kannst du unterscheiden? Zähle auf, was du entdeckst.",
      antwort:
        "Die Mundhöhle (Cavitas oris) enthält: Zähne (28-32), Zunge (Muskelkörper mit Geschmacksknospen), Mundschleimhaut (mehrschichtiges Plattenepithel, erneuert sich alle 10-14 Tage), Gaumen (hart vorn / weich hinten mit Uvula), Wangen und Lippen. Drei große Speicheldrüsenpaare münden hinein: Parotis (vor dem Ohr), Submandibularis (unter dem Unterkiefer), Sublingualis (unter der Zunge). Zusammen produzieren sie 0,5 bis 1,5 Liter Speichel pro Tag. (Anatomie-Standardwissen)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Mundhöhle beginnt an den Lippen und endet am Rachenring. Sie enthält: Zähne, Zunge, Mundschleimhaut, harter/weicher Gaumen, Uvula. Drei große Speicheldrüsenpaare münden hinein: Parotis, Submandibularis, Sublingualis.",
      textB1:
        "Der Mund beginnt an den Lippen. Er endet am Rachen. Im Mund sind: Zähne, Zunge, Schleimhaut, oben ein harter und ein weicher Teil (Gaumen). Drei Paar Speicheldrüsen geben Speichel in den Mund.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-01",
        phase: 1,
        stepType: "labelImage",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["Anatomie-Standardwissen"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-anatomie",
        tag: "anatomie",
        displayFormat: "stepbystep",
        bildhinweis:
          "Schematische Schnittzeichnung Mundhöhle von der Seite: Zähne, Zunge, Gaumen (hart/weich), Uvula, Speicheldrüsen-Ausführungsgänge beschriften.",
        bildkategorie: "anatomie",
        contentC1: {
          title: "Anatomie der Mundhöhle",
          body: "Die **Mundhöhle** (Cavitas oris) ist der Anfang des Verdauungstrakts und gleichzeitig wichtig für Atmung, Sprache und Geschmack.\n\n**Aufbau:**\n- **Zähne** — ein Erwachsener hat 28 bis 32 Zähne (vier Weisheitszähne fakultativ)\n- **Zunge** (Lingua) — beweglicher Muskelkörper, trägt Geschmacksknospen\n- **Mundschleimhaut** — rosa, feucht, gut durchblutet; erneuert sich alle 10-14 Tage\n- **Gaumen** — harter Gaumen vorn (Knochen), weicher Gaumen hinten (Muskel + Uvula)\n- **Wangen und Lippen** — begrenzen die Mundhöhle seitlich und vorn\n\n**Speicheldrüsen — drei Paare:**\n- Parotis (Ohrspeicheldrüse) — vor dem Ohr, mündet gegenüber dem oberen zweiten Backenzahn\n- Submandibularis — unter dem Unterkiefer\n- Sublingualis — unter der Zunge\n\nAlle Speicheldrüsen zusammen produzieren etwa 0,5 bis 1,5 Liter Speichel pro Tag.",
          glossarBegriffe: ["Mundhöhle", "Parotis", "Sublingualis"],
        },
        contentB1: {
          title: "Anatomie der Mundhöhle",
          body: "Der **Mund** ist der Anfang vom Verdauungsweg. Du brauchst ihn zum Essen, Atmen und Sprechen.\n\n**Was ist im Mund?**\n- **Zähne** — Erwachsene haben 28 bis 32 Zähne\n- **Zunge** — ein Muskel. Sie schmeckt und hilft beim Sprechen\n- **Mundschleimhaut** — die rosa, feuchte Haut im Mund\n- **Gaumen** — das Dach im Mund. Vorne hart (Knochen), hinten weich\n- **Wangen und Lippen** — die Seiten und die Vorderseite\n\n**Speicheldrüsen:** Drei Paar Drüsen machen Speichel.\n- Eine vor dem Ohr (Parotis)\n- Eine unter dem Kiefer\n- Eine unter der Zunge\n\nPro Tag kommt 0,5 bis 1,5 Liter Speichel zusammen.",
          glossarBegriffe: ["Mundhöhle", "Parotis"],
        },
      },
    },
    glossarBegriffe: ["Mundhöhle", "Parotis", "Sublingualis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: funktionen-mund (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-funktionen-mund",
    themaId: "mundpflege",
    titel: "Fünf Funktionen des Mundes",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was alles macht der Mund den ganzen Tag — nicht nur beim Essen? Nenne mindestens vier verschiedene Aufgaben.",
      antwort:
        "Der Mund hat fünf Kernfunktionen: Nahrungsaufnahme (Kauen), Geschmack (Zunge), Schluckbeginn, Sprechen (Artikulation), und Atmung (Zweitweg). Jede dieser Funktionen fällt weg oder ist gestört, wenn die Mundpflege vernachlässigt wird.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Mund hat fünf Kernfunktionen: Nahrungsaufnahme (Kauen), Geschmack (Zunge), Schluckbeginn, Sprechen (Artikulation), und Atmung (Zweitweg). Jede dieser Funktionen fällt weg oder ist gestört, wenn die Mundpflege vernachlässigt wird.",
      textB1:
        "Der Mund hat fünf Aufgaben: essen (kauen), schmecken, schlucken starten, sprechen, atmen. Wenn die Mundpflege schlecht ist, funktionieren diese Aufgaben nicht mehr gut. Das merkt der Patient sofort.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Anatomie-Standardwissen"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-funktionen",
        tag: "anatomie",
        displayFormat: "checklist",
        contentC1: {
          title: "Fünf Funktionen des Mundes",
          body: "Der Mund erfüllt **fünf zentrale Funktionen**, die alle zusammenhängen:\n\n1. **Nahrungsaufnahme** — Zähne zerkleinern mechanisch, Speichel bindet die Nahrung zum Bissen\n2. **Geschmack** — Geschmacksknospen auf der Zunge erkennen süß, sauer, salzig, bitter, umami\n3. **Schluckbeginn** — orale Phase des Schluckvorgangs: Zungenpresse schiebt den Bissen nach hinten\n4. **Sprache** — Zunge, Lippen, Zähne und Gaumen bilden Laute (Artikulation)\n5. **Atmung** — Mundatmung als Zweitweg, besonders bei verstopfter Nase\n\n**Warum ist das pflegerisch wichtig?** Fällt eine Funktion aus (z.B. Kauen bei Parese), sind oft auch die anderen betroffen. Ein trockener Mund führt zu Sprechproblemen, Schluckstörungen und Geschmacksverlust — alles gleichzeitig. Mundpflege wirkt daher auf mehrere Funktionen.",
          glossarBegriffe: ["Artikulation", "Geschmacksknospen"],
        },
        contentB1: {
          title: "Fünf Funktionen des Mundes",
          body: "Der Mund hat **fünf Aufgaben**:\n\n1. **Essen** — die Zähne zerkleinern, der Speichel bindet den Bissen\n2. **Schmecken** — die Zunge erkennt süß, sauer, salzig, bitter, umami\n3. **Schlucken starten** — die Zunge drückt den Bissen nach hinten\n4. **Sprechen** — Zunge, Lippen und Zähne formen die Laute\n5. **Atmen** — zusätzlich zur Nase, wenn die Nase zu ist\n\n**Wichtig für die Pflege:** Wenn eine Aufgabe nicht mehr geht, sind oft auch die anderen gestört. Ein trockener Mund macht Sprechen, Essen und Schmecken gleichzeitig schwer. Gute Mundpflege hilft bei allen Aufgaben.",
          glossarBegriffe: ["Artikulation", "Geschmacksknospen"],
        },
      },
    },
    glossarBegriffe: ["Artikulation", "Geschmacksknospen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: speichel-aufgaben (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-speichel-aufgaben",
    themaId: "mundpflege",
    titel: "Sechs Aufgaben des Speichels",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was würde passieren, wenn von heute auf morgen kein Speichel mehr produziert würde? Überlege drei konkrete Probleme, die sofort auftauchen würden.",
      antwort:
        "Speichel hat sechs Kernaufgaben: Befeuchten der Schleimhaut, Bindung des Bissens, Verdauungsbeginn (Alpha-Amylase), Schutz der Zähne (Remineralisation), antimikrobielle Wirkung (Lysozym, IgA), und Spülung der Mundhöhle. Pro Tag: 0,5 bis 1,5 Liter.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Speichel hat sechs Kernaufgaben: Befeuchten der Schleimhaut, Bindung des Bissens, Verdauungsbeginn (Alpha-Amylase), Schutz der Zähne (Remineralisation), antimikrobielle Wirkung (Lysozym, IgA), und Spülung der Mundhöhle. Pro Tag: 0,5 bis 1,5 Liter.",
      textB1:
        "Speichel macht sechs Aufgaben: Mund feucht halten, den Bissen kleben, Essen vorverdauen, Zähne schützen, Bakterien abwehren, den Mund spülen. Pro Tag produziert der Körper 0,5 bis 1,5 Liter Speichel.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-03",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Physiologie-Standardwissen"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-speichel",
        tag: "anatomie",
        displayFormat: "checklist",
        contentC1: {
          title: "Sechs Aufgaben des Speichels",
          body: "Speichel ist weit mehr als bloss Fluessigkeit im Mund. Er erfuellt **sechs zentrale Aufgaben**:\n\n1. **Befeuchten** — Schleimhäute bleiben geschmeidig, Sprechen und Schlucken werden möglich\n2. **Bissbindung** — Speichel macht aus der zerkauten Nahrung einen gleitfähigen Bissen (Bolus)\n3. **Verdauungsbeginn** — das Enzym Alpha-Amylase spaltet Stärke bereits im Mund\n4. **Zahnschutz** — Mineralien im Speichel (Calcium, Phosphat) remineralisieren den Zahnschmelz; der Speichel neutralisiert Säuren nach dem Essen\n5. **Antimikrobielle Abwehr** — Lysozym, Laktoferrin und sekretorisches IgA hemmen Bakterien und Pilze\n6. **Spülung** — Nahrungsreste und abgelöste Zellen werden weggeschwemmt\n\n**Produktion:** Ein gesunder Erwachsener produziert 0,5 bis 1,5 Liter Speichel pro Tag. Nachts sinkt die Produktion stark — darum schmecken Mund und Atem morgens anders. Das ist pflegerisch wichtig: Wer nachts über den Mund atmet, hat morgens eine extrem trockene und keimbesiedelte Mundhöhle.",
          glossarBegriffe: ["Alpha-Amylase", "Lysozym", "Remineralisation"],
        },
        contentB1: {
          title: "Sechs Aufgaben des Speichels",
          body: "Speichel ist viel mehr als Flüssigkeit. Er hat **sechs Aufgaben**:\n\n1. **Mund feucht halten** — sonst tut Sprechen und Schlucken weh\n2. **Bissen kleben** — so rutscht das Essen den Schlund hinunter\n3. **Essen vorverdauen** — ein Enzym (Alpha-Amylase) spaltet Stärke schon im Mund\n4. **Zähne schützen** — Mineralien im Speichel machen den Zahnschmelz hart\n5. **Bakterien abwehren** — Eiweiße im Speichel (Lysozym, IgA) töten Keime\n6. **Mund spülen** — Essensreste werden weggewaschen\n\n**Wie viel?** Pro Tag 0,5 bis 1,5 Liter. Nachts macht der Körper viel weniger Speichel. Darum ist der Mund morgens trocken und riecht anders. Das ist wichtig bei Patienten, die nachts durch den Mund atmen — morgens ist ihr Mund sehr trocken.",
          glossarBegriffe: ["Alpha-Amylase", "Lysozym", "Remineralisation"],
        },
      },
    },
    glossarBegriffe: ["Alpha-Amylase", "Lysozym", "Remineralisation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: zahnpflege-standard (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-zahnpflege-standard",
    themaId: "mundpflege",
    titel: "Grundstandard tägliche Zahnpflege",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie oft putzt du selbst deine Zähne und wie lange? Was ist der Unterschied zwischen irgendwie geputzt und richtig geputzt?",
      antwort:
        "Empfehlung DGZMK 2023: Mindestens 2x täglich, je mindestens 2 Minuten, weiche bis mittelharte Bürste, fluoridhaltige Zahnpasta (1.000-1.500 ppm). Technik: KAI-Methode (Kauflächen, Außenflächen, Innenflächen), von hinten nach vorn. Plus 1x täglich Zahnseide oder Interdentalbürste. Nach saurem Essen 30 Minuten warten vor dem Putzen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Empfehlung der Bundeszahnärztekammer: Zähne mindestens zweimal täglich, jeweils mindestens zwei Minuten, mit fluoridhaltiger Zahnpasta und einer weichen Bürste. Zusätzlich einmal täglich Zahnseide oder Interdentalbürsten für die Zahnzwischenräume.",
      textB1:
        "Die Empfehlung: Zähne mindestens zweimal am Tag putzen, jedes Mal mindestens zwei Minuten. Mit einer weichen Bürste und Zahnpasta mit Fluorid. Einmal am Tag die Zahnzwischenräume reinigen (Zahnseide oder kleine Bürste).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGZMK S3-Leitlinie Kariesprophylaxe 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-zahnpflege",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Grundstandard tägliche Zahnpflege",
          body: "Die **S3-Leitlinie Kariesprophylaxe** (DGZMK 2023) empfiehlt ein klares Grundstandard-Bündel:\n\n**Häufigkeit und Dauer:**\n- mindestens zweimal täglich putzen\n- jeweils mindestens zwei Minuten\n- morgens und abends (abends besonders wichtig, weil nachts die Speichelproduktion sinkt)\n\n**Material:**\n- weiche bis mittelharte Bürste (harte Bürsten schädigen das Zahnfleisch)\n- fluoridhaltige Zahnpasta (Erwachsene 1.000-1.500 ppm Fluorid)\n- elektrische Zahnbürste ist gleichwertig, bei Tremor oder eingeschränkter Handmotorik oft besser\n\n**Technik (KAI-Methode):** K wie Kauflächen, A wie Außenflächen, I wie Innenflächen — immer systematisch von hinten nach vorn.\n\n**Ergänzend:**\n- einmal täglich Zahnseide oder Interdentalbürsten\n- nach saurem Essen (Obst, Säfte) mindestens 30 Minuten warten vor dem Putzen, sonst wird aufgeweichter Schmelz abgetragen",
          glossarBegriffe: ["Fluorid", "KAI-Methode", "Interdentalbürste"],
        },
        contentB1: {
          title: "Grundstandard tägliche Zahnpflege",
          body: "Das ist die **Grundregel** für gesunde Zähne (DGZMK 2023):\n\n**Wie oft und wie lange?**\n- mindestens zweimal am Tag\n- jedes Mal mindestens zwei Minuten\n- morgens und abends — abends besonders wichtig\n\n**Was brauchst du?**\n- eine weiche Bürste (harte Bürsten verletzen das Zahnfleisch)\n- Zahnpasta mit Fluorid\n- eine elektrische Bürste ist genauso gut\n\n**Wie putzen? Die KAI-Regel:**\n- **K** wie Kauflächen\n- **A** wie Außenflächen\n- **I** wie Innenflächen\n- immer von hinten nach vorne\n\n**Zusätzlich:**\n- einmal am Tag die Zahnzwischenräume reinigen (Zahnseide oder kleine Bürste)\n- nach Obst oder Saft 30 Minuten warten vor dem Putzen",
          glossarBegriffe: ["Fluorid", "KAI-Methode", "Interdentalbürste"],
        },
      },
    },
    glossarBegriffe: ["Fluorid", "KAI-Methode", "Interdentalbürste"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: zahnprothese-pflege (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-zahnprothese-pflege",
    themaId: "mundpflege",
    titel: "Zahnprothesen richtig pflegen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Zahnprothese kann man herausnehmen — warum muss sie trotzdem jeden Tag gereinigt werden und sogar öfter als eigene Zähne?",
      antwort:
        "Zahnprothesen werden nach jeder Mahlzeit entnommen und gereinigt, nachts in einem trockenen, gut belüfteten Behälter (oder auf Wunsch in Wasser) aufbewahrt. Zusätzlich einmal täglich gründliche Reinigung mit Prothesenbürste und mildem Reiniger.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Zahnprothesen werden nach jeder Mahlzeit entnommen und gereinigt, nachts in einem trockenen, gut belüfteten Behälter oder in Wasser aufbewahrt. Einmal täglich gründliche Reinigung mit Prothesenbürste und mildem Reiniger.",
      textB1:
        "Zahnprothesen müssen nach jedem Essen herausgenommen und gereinigt werden. Nachts kommen sie in einen trockenen Behälter oder ein Glas Wasser. Einmal am Tag gründlich mit einer speziellen Bürste reinigen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGP/DGPPN Leitlinie Mundgesundheit 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-prothese",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Zahnprothesen richtig pflegen",
          body: "Zahnprothesen bieten Bakterien und Candida-Pilzen eine ideale Besiedlungsfläche — rauer Kunststoff, warm, feucht. Ohne tägliche Reinigung entstehen schnell **Prothesenstomatitis** und **Soor**.\n\n**Grundstandard (DGP/DGPPN 2019):**\n\n**Nach jeder Mahlzeit:**\n- Prothese entnehmen und mit Wasser abspülen\n- dabei über einem gefüllten Waschbecken oder Handtuch arbeiten — sie ist bruchempfindlich\n\n**Einmal täglich gründlich:**\n- mit spezieller Prothesenbürste (nicht die normale Zahnbürste) und mildem Reiniger bürsten\n- besonders die Innenseite (Druckfläche zum Gaumen)\n- Kontrolle auf Risse, scharfe Kanten, Beläge\n\n**Nachts:**\n- entnehmen und in einem trockenen, gut belüfteten Behälter oder in Wasser aufbewahren\n- Reinigungstabletten nur nach Bedarf, nicht täglich\n\n**Pflegerisch wichtig:** Auch der Mund wird gereinigt, wenn die Prothese draußen ist — sonst bleibt die Schleimhaut darunter mit Belägen bedeckt.",
          glossarBegriffe: ["Prothesenstomatitis", "Soor", "Candida albicans"],
        },
        contentB1: {
          title: "Zahnprothesen richtig pflegen",
          body: "Auf der Prothese wachsen schnell Bakterien und Pilze. Darum muss sie jeden Tag gereinigt werden, sonst gibt es **Soor** oder **Prothesenstomatitis** (= entzündete Mundschleimhaut).\n\n**Regeln:**\n\n**Nach jedem Essen:**\n- Prothese herausnehmen\n- mit Wasser abspülen\n- dabei ein Handtuch unterlegen — sie kann leicht brechen\n\n**Einmal am Tag gründlich:**\n- mit einer speziellen Prothesenbürste und mildem Reiniger\n- besonders die Innenseite\n- auf Risse und scharfe Kanten achten\n\n**In der Nacht:**\n- herausnehmen\n- in einen trockenen Behälter oder ein Glas Wasser legen\n\n**Wichtig:** Auch den Mund putzen, wenn die Prothese draußen ist!",
          glossarBegriffe: ["Prothesenstomatitis", "Soor"],
        },
      },
    },
    glossarBegriffe: ["Prothesenstomatitis", "Soor", "Candida albicans"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: mundinspektion-systematisch (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-mundinspektion",
    themaId: "mundpflege",
    titel: "Systematische Mundinspektion",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du sollst bei einem Patienten den Mund inspizieren. In welcher Reihenfolge gehst du vor — und worauf achtest du konkret? Beschreibe deinen Plan.",
      antwort:
        "Die systematische Mundinspektion läuft in fester Reihenfolge: Lippen, Zähne/Prothese, Zahnfleisch, Wangenschleimhaut, Gaumen, Zunge (ober- und unterseits), Mundboden. Beobachtet werden Farbe, Feuchtigkeit, Beläge, Verletzungen, Schmerzen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die systematische Mundinspektion läuft in fester Reihenfolge: Lippen, Zähne/Prothese, Zahnfleisch, Wangenschleimhaut, Gaumen, Zunge (ober- und unterseits), Mundboden. Beobachtet werden Farbe, Feuchtigkeit, Beläge, Verletzungen, Schmerzen.",
      textB1:
        "Du schaust den Mund in einer festen Reihenfolge an: Lippen — Zähne oder Prothese — Zahnfleisch — Wangen innen — Gaumen — Zunge oben und unten — Mundboden. Achte auf Farbe, Feuchtigkeit, Beläge, Verletzungen und Schmerzen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-06",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGP/DGPPN Leitlinie Mundgesundheit 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-inspektion",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Systematische Mundinspektion",
          body: "Eine strukturierte Mundinspektion dauert zwei bis drei Minuten und erkennt Probleme, bevor der Patient sie selbst spürt.\n\n**Vorbereitung:** Handschuhe, gute Beleuchtung (Taschenlampe oder Stirnlampe), Einmal-Spatel, Einverständnis des Patienten einholen.\n\n**Reihenfolge (von außen nach innen):**\n1. **Lippen** — rissig? Eingerissene Mundwinkel (Rhagaden — Anzeichen für Mangel oder Soor)?\n2. **Zähne oder Prothese** — Beläge, lockere Zähne, schlecht sitzende Prothese, Druckstellen\n3. **Zahnfleisch** — Rötung, Blutung (Anzeichen Gingivitis/Parodontitis)\n4. **Wangenschleimhaut beidseits** — weiße Beläge (Soor)? Aphthen? Biss-Spuren?\n5. **Gaumen (hart und weich)** — Rötung unter der Prothese (Prothesenstomatitis)?\n6. **Zunge** — Belag, Farbe (himbeerrot = Flüssigkeitsmangel), Risse\n7. **Mundboden** — geschwollene Speicheldrüsenausführungsgänge?\n\n**Dokumentation:** immer in SBAR oder strukturiertem Kurzbericht (Befund, Lokalisation, Handlung). (DGP/DGPPN 2019)",
          glossarBegriffe: ["Rhagaden", "Gingivitis", "Parodontitis", "Aphthe", "Prothesenstomatitis"],
        },
        contentB1: {
          title: "Systematische Mundinspektion",
          body: "Eine gute Mundinspektion dauert zwei bis drei Minuten. So findest du Probleme, bevor der Patient sie spürt.\n\n**Was brauchst du?** Handschuhe, gutes Licht (Taschenlampe), einen Einmal-Spatel, Einverständnis des Patienten.\n\n**So gehst du vor:**\n\n1. **Lippen** — rissig? Einrisse in den Mundwinkeln?\n2. **Zähne/Prothese** — Beläge? Locker? Prothese drückt?\n3. **Zahnfleisch** — rot? Blutet?\n4. **Wangen innen** — weiße Beläge (Soor)? Kleine Wunden?\n5. **Gaumen** — oben hart und weich anschauen\n6. **Zunge** — Belag? Farbe? Risse?\n7. **Mundboden** — Schwellung?\n\n**Dokumentieren:** Was hast du gesehen? Wo? Was machst du damit? Immer aufschreiben.",
          glossarBegriffe: ["Rhagaden", "Gingivitis", "Aphthe", "Lackzunge"],
        },
      },
    },
    glossarBegriffe: ["Rhagaden", "Gingivitis", "Parodontitis", "Aphthe", "Prothesenstomatitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: soor-erkennen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-soor-erkennen",
    themaId: "mundpflege",
    titel: "Soor erkennen und einordnen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du öffnest den Mund einer 82-jährigen Patientin mit Chemotherapie. Auf der Zunge und am Gaumen siehst du weißliche, leicht abwischbare Beläge. Was ist dein Verdacht — und warum gerade bei dieser Patientin?",
      antwort:
        "Soor ist eine Infektion der Mundschleimhaut mit Candida albicans. Typisch: weißliche, abwischbare Beläge auf geröteter Schleimhaut (anders als Essensreste, die einfach wegzuwischen sind). Häufig bei Immunsuppression, Antibiotika, Xerostomie.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Soor ist eine Infektion der Mundschleimhaut mit Candida albicans. Typisch: weißliche, abwischbare Beläge auf geröteter Schleimhaut. Häufig bei Immunsuppression, Antibiotika, Xerostomie.",
      textB1:
        "Soor ist eine Infektion mit dem Pilz Candida. Man sieht weiße Beläge im Mund. Darunter ist die Schleimhaut rot. Der Belag lässt sich abwischen, kommt aber schnell wieder. Soor tritt oft bei Abwehrschwäche auf (Chemo, Antibiotika).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-07",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGP/DGPPN Leitlinie Mundgesundheit 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-soor",
        tag: "krankheitslehre",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Soor erkennen und einordnen",
          body: "**Soor** (orale Candidose) ist eine Infektion der Mundschleimhaut durch den Hefepilz **Candida albicans**. Candida gehört bei vielen Menschen zur normalen Mundflora — wird aber pathogen, wenn das Immunsystem oder die Speichelabwehr geschwächt ist.\n\n**Typische Zeichen:**\n- weißliche, cremige oder milchähnliche Beläge auf der Schleimhaut\n- Beläge lassen sich abwischen, darunter liegt eine **gerötete, leicht blutende** Fläche\n- Lokalisation: Wangenschleimhaut, Zunge, Gaumen, Mundwinkel (Rhagaden)\n- subjektiv: Brennen, Geschmacksstörung, Schmerzen beim Essen, Zungenkleben\n\n**Risikofaktoren (DGP/DGPPN 2019):**\n- Immunsuppression (Chemotherapie, HIV, Steroide)\n- Antibiotikatherapie (stört die bakterielle Mundflora)\n- Diabetes mellitus (Zucker im Speichel)\n- Xerostomie / Mundtrockenheit\n- Zahnprothesen (besonders bei schlechter Hygiene)\n- Säuglinge und sehr alte Menschen\n\n**Abgrenzung wichtig:** Essensreste wischt man einmal weg und sie kommen nicht wieder. Soor-Beläge sitzen wiederkehrend auf geröteter Schleimhaut.",
          glossarBegriffe: ["Soor", "Candida albicans", "Xerostomie", "Rhagaden"],
        },
        contentB1: {
          title: "Soor erkennen und einordnen",
          body: "**Soor** ist eine Infektion im Mund mit dem Pilz **Candida**. Der Pilz ist bei vielen Menschen normalerweise im Mund. Wenn die Abwehr schwach ist, wird er krank.\n\n**Wie erkennst du Soor?**\n- weiße Beläge auf der Schleimhaut (wie Milch oder Quark)\n- die Beläge kann man abwischen — darunter ist die Schleimhaut **rot und empfindlich**\n- der Patient sagt: brennt, schmeckt komisch, tut beim Essen weh\n- oft auch eingerissene Mundwinkel\n\n**Wer bekommt Soor? (Risikofaktoren)**\n- Chemotherapie, HIV, Kortison (= Abwehr schwach)\n- Antibiotika (tötet gute Bakterien)\n- Diabetes (Zucker im Speichel)\n- trockener Mund\n- Zahnprothesen\n- Babys und sehr alte Menschen\n\n**Aufpassen:** Essensreste wischt man einmal weg. Soor kommt wieder.",
          glossarBegriffe: ["Soor", "Candida albicans", "Xerostomie"],
        },
      },
    },
    glossarBegriffe: ["Soor", "Candida albicans", "Xerostomie", "Rhagaden"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: soor-prophylaxe (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-soor-prophylaxe",
    themaId: "mundpflege",
    titel: "Soor-Prophylaxe: das 3-Säulen-Prinzip",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du weißt jetzt, was Soor ist und welche Risiken dazu führen. Leite daraus selbst drei konkrete Pflegemaßnahmen ab, die Soor verhindern können — und erkläre kurz, warum jede hilft.",
      antwort:
        "Soor-Prophylaxe ruht auf drei Säulen: (1) Speichelfluss anregen (Trinken, Kauen, zuckerfreie Bonbons), (2) mechanische Reinigung (Zähne putzen, Zunge, Prothese), (3) lokale Befeuchtung (Wasser, 0,9 % NaCl, keine alkoholhaltigen oder süßen Lösungen).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Soor-Prophylaxe ruht auf drei Säulen: (1) Speichelfluss anregen (Trinken, Kauen, zuckerfreie Bonbons), (2) mechanische Reinigung (Zähne putzen, Zunge, Prothese), (3) lokale Befeuchtung (Wasser, 0,9 % NaCl, keine alkoholhaltigen oder süßen Lösungen).",
      textB1:
        "Soor-Prophylaxe hat drei Teile: 1) Speichel anregen (trinken, kauen, zuckerfreie Bonbons). 2) Mund reinigen (Zähne, Zunge, Prothese). 3) Mund befeuchten (Wasser, Kochsalzlösung — keine alkoholhaltigen oder süßen Lösungen).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-08",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGP/DGPPN Leitlinie Mundgesundheit 2019", "Cochrane Weening-Verbree et al. 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-soor-prophylaxe",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Soor-Prophylaxe: das 3-Säulen-Prinzip",
          body: "Soor-Prophylaxe folgt dem Prinzip: **Speichel + Mechanik + Befeuchtung**. Die DGP/DGPPN 2019 und die Cochrane-Übersicht von Weening-Verbree et al. 2023 zeigen: Keine Einzelmaßnahme wirkt allein — das Bündel entscheidet.\n\n**Säule 1 — Speichelfluss anregen:**\n- ausreichend trinken (1,5 bis 2 Liter täglich, wenn keine Einschränkung)\n- Kaubewegungen (feste Kost, wenn Schlucken möglich)\n- zuckerfreie (saure) Bonbons, zuckerfreier Kaugummi\n- bei Xerostomie: Speichelersatzmittel\n\n**Säule 2 — Mechanische Reinigung:**\n- Zähne zweimal täglich, weiche Bürste, Fluorid-Paste\n- Zunge reinigen (Zungenschaber oder weiche Bürste)\n- Prothese nach jedem Essen abspülen, einmal täglich gründlich\n\n**Säule 3 — Befeuchtung:**\n- Wasser, 0,9-prozentige Kochsalzlösung, ungesüßter Tee\n- KEIN Alkohol (trocknet zusätzlich aus)\n- KEINE zuckerhaltigen Tees oder Glycerin-Lösungen (Nährboden für Pilze)\n\n**Besondere Risikogruppen:** Intubierte erhalten alle 4 bis 6 Stunden Mundpflege mit Chlorhexidin (evidenzbasiert, Cochrane 2023). Bei Chemopatienten zusätzlich regelmäßige Inspektion.",
          glossarBegriffe: ["Chlorhexidin", "Xerostomie", "Soor"],
        },
        contentB1: {
          title: "Soor-Prophylaxe: das 3-Säulen-Prinzip",
          body: "Soor-Prophylaxe hat **drei Säulen** (DGP/DGPPN 2019):\n\n**Säule 1 — Speichel anregen:**\n- viel trinken (1,5 bis 2 Liter, wenn erlaubt)\n- feste Kost kauen (wenn Schlucken geht)\n- zuckerfreie, saure Bonbons\n- zuckerfreier Kaugummi\n- bei sehr trockenem Mund: künstlichen Speichel\n\n**Säule 2 — Mund reinigen:**\n- Zähne zweimal am Tag, weiche Bürste, Fluorid\n- Zunge putzen (Schaber oder weiche Bürste)\n- Prothese nach jedem Essen abspülen, einmal am Tag gründlich reinigen\n\n**Säule 3 — Befeuchten:**\n- Wasser, Kochsalzlösung (0,9 %), ungesüßter Tee\n- **Kein Alkohol** (trocknet aus)\n- **Keine Zucker-Lösungen** (Pilze lieben Zucker)\n\n**Besondere Gruppen:** Beatmete Patienten bekommen alle 4 bis 6 Stunden Mundpflege mit Chlorhexidin.",
          glossarBegriffe: ["Chlorhexidin", "Xerostomie", "Soor"],
        },
      },
    },
    glossarBegriffe: ["Chlorhexidin", "Xerostomie", "Soor"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: parotitis-prophylaxe (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-parotitis-prophylaxe",
    themaId: "mundpflege",
    titel: "Parotitis erkennen und vorbeugen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient nach Kiefer-Operation darf für drei Tage nicht kauen. Welche Drüse droht sich zu entzünden — und warum gerade dann?",
      antwort:
        "Parotitis ist die Entzündung der Ohrspeicheldrüse (Parotis). Bei fehlender Kaubewegung fließt kein Speichel — Bakterien wandern aus der Mundhöhle den Ausführungsgang hinauf in die Drüse. Prophylaxe: Speichelfluss anregen (Kauen, Saures, Trinken), Mundhygiene.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Parotitis ist die Entzündung der Ohrspeicheldrüse (Parotis). Bei fehlender Kaubewegung fließt kein Speichel — Bakterien wandern aus der Mundhöhle den Ausführungsgang hinauf in die Drüse. Prophylaxe: Speichelfluss anregen (Kauen, Saures, Trinken), Mundhygiene.",
      textB1:
        "Parotitis ist die Entzündung der Ohrspeicheldrüse. Sie entsteht, wenn jemand nicht kaut — dann fließt kein Speichel und Bakterien wandern in die Drüse. Die Prophylaxe: Speichel anregen (kauen, Saures, trinken) und Mundhygiene.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-09",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["I Care Pflege (Thieme) 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-parotitis",
        tag: "krankheitslehre",
        displayFormat: "scenario",
        contentC1: {
          title: "Parotitis erkennen und vorbeugen",
          body: "**Parotitis** bezeichnet die Entzündung der **Ohrspeicheldrüse** (Glandula parotidea). Pflegerisch relevant ist vor allem die **bakterielle Parotitis** bei fehlender Kaubewegung — nicht die virale Form (Mumps).\n\n**Pathomechanismus:**\n- kein Kauen, reduzierter Speichelfluss\n- Ausführungsgang der Parotis (mündet innen in der Wange, gegenüber dem oberen zweiten Backenzahn) ist nicht gespült\n- Mundbakterien wandern den Gang hinauf, besiedeln die Drüse — retrograde Infektion\n\n**Klinik:**\n- einseitige schmerzhafte Schwellung vor dem Ohr\n- Rötung, Überwärmung, Kauschmerz\n- Fieber, reduziertes Allgemeinbefinden\n- evtl. Eiter am Ausführungsgang sichtbar\n\n**Risikogruppen:**\n- postoperativ mit Kauverbot (Kiefer-OP, Nahrungskarenz)\n- Patienten mit Bewusstseinsstörung, Intubation, PEG-Sondenernährung\n- schwer kranke Menschen ohne orale Nahrungsaufnahme\n- Exsikkose\n\n**Prophylaxe:**\n- Speichelfluss anregen: zuckerfreie Bonbons, Kaugummi, saure Lutschtabletten, wenn erlaubt\n- regelmäßige Mundpflege (systematische Inspektion, Befeuchtung)\n- Trinken nach Verordnung",
          glossarBegriffe: ["Parotis", "Parotitis"],
        },
        contentB1: {
          title: "Parotitis erkennen und vorbeugen",
          body: "**Parotitis** ist die Entzündung der **Ohrspeicheldrüse**. Diese Drüse liegt vor dem Ohr. Für die Pflege wichtig: die Form, die bei fehlendem Kauen entsteht (nicht Mumps).\n\n**Wie entsteht sie?**\n- Der Patient kaut nicht\n- Es fließt kein Speichel\n- Der Gang der Drüse (im Mund, gegenüber dem oberen Backenzahn) wird nicht gespült\n- Bakterien wandern in die Drüse\n- Die Drüse entzündet sich\n\n**Was siehst du?**\n- Schwellung vor dem Ohr (meist nur auf einer Seite)\n- Rötung, warm, tut beim Kauen weh\n- Fieber, Patient fühlt sich schlecht\n- manchmal kommt Eiter aus dem Gang im Mund\n\n**Wer hat Risiko?**\n- nach Operation am Kiefer\n- Patienten mit Beatmung oder PEG-Sonde\n- sehr kranke Patienten ohne Essen durch den Mund\n- Patienten mit zu wenig Flüssigkeit\n\n**Prophylaxe:**\n- Kauen anregen (zuckerfreie Bonbons, Kaugummi, saure Lutschtabletten)\n- regelmäßige Mundpflege\n- trinken",
          glossarBegriffe: ["Parotis", "Parotitis"],
        },
      },
    },
    glossarBegriffe: ["Parotis", "Parotitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: xerostomie (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-xerostomie",
    themaId: "mundpflege",
    titel: "Xerostomie: Mundtrockenheit erkennen und handeln",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Patientin sagt: Mein Mund fühlt sich an wie Watte. Ich kann kaum sprechen. Welche Ursachen kommen dir in den Sinn — und warum ist das mehr als ein Komfort-Problem?",
      antwort:
        "Xerostomie = objektive Mundtrockenheit (Ruhespeichelfluss < 0,1 ml/min). Ursachen: Medikamente (über 500 Präparate: Opioide, Antidepressiva, Diuretika, Anticholinergika), Bestrahlung Kopf-Hals, Erkrankungen (Sjögren-Syndrom, Diabetes), Mundatmung, Alter. Klinische Zeichen: trockene Schleimhaut, Lackzunge, Rhagaden, schnelle Karies, Soor. Xerostomie ist zentraler Risikofaktor für Soor und Mukositis. (DGP/DGPPN 2019)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Xerostomie ist der Fachbegriff für Mundtrockenheit. Ursachen sind vielfältig: Medikamente (Opioide, Antidepressiva, Diuretika), Bestrahlung, Dehydratation, Mundatmung. Folgen: Kariesrisiko, Soor, Schluckstörung, Sprechstörung, Geschmacksverlust.",
      textB1:
        "Xerostomie ist das Fachwort für einen trockenen Mund. Gründe: Medikamente (Opioide, Antidepressiva, Diuretika), Bestrahlung, zu wenig Flüssigkeit, Mundatmung. Folgen: mehr Karies, Soor, Probleme beim Schlucken und Sprechen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGP/DGPPN Leitlinie Mundgesundheit 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-xerostomie",
        tag: "krankheitslehre",
        displayFormat: "crossref",
        contentC1: {
          title: "Xerostomie erkennen und handeln",
          body: "**Xerostomie** ist das subjektive und objektive Zeichen verringerter Speichelproduktion. Definition objektiv: Ruhespeichelfluss unter 0,1 ml pro Minute (Normalwert 0,3 bis 0,4 ml/min).\n\n**Ursachen (DGP/DGPPN 2019):**\n- **Medikamente (über 500 Präparate):** Opioide, Antidepressiva (besonders trizyklische), Diuretika, Anticholinergika, Antihistaminika, Neuroleptika\n- **Bestrahlung:** besonders im Kopf-Hals-Bereich — irreversibler Drüsenschaden\n- **Erkrankungen:** Sjögren-Syndrom, Diabetes mellitus, Fieber, Niereninsuffizienz\n- **Verhaltensfaktoren:** Mundatmung (z.B. Sauerstoffbrille), unzureichende Trinkmenge\n- **Alter:** altersbedingter Rückgang ab dem 70. Lebensjahr\n\n**Klinische Zeichen:**\n- trockene, glänzende Schleimhaut, klebt am Spatel\n- Lackzunge (glatt, himbeerrot)\n- Rhagaden an den Mundwinkeln\n- schnellere Karies, gehäuft Soor\n- Schlucken und Sprechen erschwert\n\n**Folgen:** Gestörte Lebensqualität, gestörter Geschmack, erhöhtes Infektions- und Kariesrisiko. Xerostomie ist zentraler **Risikofaktor** für Soor und Mukositis — daher immer erkennen und behandeln.",
          glossarBegriffe: ["Xerostomie", "Sjögren-Syndrom", "Lackzunge"],
        },
        contentB1: {
          title: "Xerostomie erkennen und handeln",
          body: "**Xerostomie** bedeutet: der Mund ist trocken. Das Fachwort kommt aus dem Griechischen: xeros (= trocken) und stoma (= Mund).\n\n**Ursachen:**\n- **Medikamente:** sehr viele (über 500!) — Opioide, Antidepressiva, Diuretika, Anticholinergika\n- **Bestrahlung:** am Kopf und Hals\n- **Krankheiten:** Sjögren-Syndrom, Diabetes, Fieber, Nierenschwäche\n- **Verhalten:** durch den Mund atmen (Sauerstoffbrille), wenig trinken\n- **Alter:** ab etwa 70 Jahren nimmt der Speichel ab\n\n**Was siehst du?**\n- Schleimhaut ist trocken und glänzt\n- Zunge ist rot und glatt (Lackzunge)\n- eingerissene Mundwinkel\n- schneller Karies, oft Soor\n- Schlucken und Sprechen ist schwer\n\n**Warum ist das wichtig?**\nXerostomie ist ein großer Risikofaktor für Soor und Mukositis. Deshalb immer erkennen und etwas dagegen tun.",
          glossarBegriffe: ["Xerostomie", "Sjögren-Syndrom", "Lackzunge"],
        },
      },
    },
    glossarBegriffe: ["Xerostomie", "Sjögren-Syndrom", "Lackzunge"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: bewusstseinseingeschraenkt (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-bewusstseinseingeschraenkt",
    themaId: "mundpflege",
    titel: "Mundpflege bei bewusstseinseingeschränkten Patienten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sollst einem bewusstlosen Patienten den Mund pflegen. Der Patient kann nicht spucken, nicht schlucken, nichts sagen. Welche drei Gefahren siehst du — und wie entscheidest du, was zu tun ist?",
      antwort:
        "Bei bewusstseinseingeschränkten Patienten (Koma, schwere Demenz, Intubation) gilt: Aspirationsgefahr zuerst. Kopf leicht seitlich, kleine Wasser- oder Kochsalzmengen, abgesaugte Schwämmchen oder weiche Tupfer, keine Flüssigkeit in Schluckposition. Absauggerät bereithalten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei bewusstseinseingeschränkten Patienten (Koma, schwere Demenz, Intubation) gilt: Aspirationsgefahr zuerst. Kopf leicht seitlich, kleine Wasser- oder Kochsalzmengen, abgesaugte Schwämmchen oder weiche Tupfer, keine Flüssigkeit in Schluckposition. Absauggerät bereithalten.",
      textB1:
        "Bei bewusstlosen Patienten zuerst: Aspirationsgefahr! Kopf leicht zur Seite drehen, nur kleine Mengen Wasser oder Kochsalzlösung verwenden, mit Schwämmchen oder weichen Tupfern reinigen, niemals große Mengen Flüssigkeit. Absauggerät bereit halten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-11",
        phase: 1,
        stepType: "branching",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DGP/DGPPN Leitlinie Mundgesundheit 2019", "Cochrane Weening-Verbree et al. 2023"],
        track: "vertiefung",
        modus: "praxis-sim",
        lernziel: "ce02-mundpflege-bewusstlos",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Mundpflege bei bewusstseinseingeschränkten Patienten",
          body: "Bei **Bewusstseinseinschränkung** (Koma, schwere Demenz, Intubation, Narkose, am Lebensende) ist Mundpflege zwingend notwendig — aber die **Aspirationsgefahr** ist real und potenziell lebensbedrohlich.\n\n**Grundprinzip:** So wenig Flüssigkeit wie möglich, so viel wie nötig.\n\n**Konkrete Regeln (DGP/DGPPN 2019):**\n\n**Vorbereitung:**\n- Absauggerät anschließen und testen\n- Oberkörper 30 bis 45 Grad hoch (wenn erlaubt), Kopf leicht zur Seite\n- Handschuhe, Einmal-Spatel, weiche Tupfer oder Schwämmchen\n- Befeuchtungsmittel: Wasser, 0,9 % NaCl, Salbeitee\n\n**Durchführung:**\n- Tupfer nur leicht feucht, nicht tropfnass\n- systematisch: Wangen — Gaumen — Zunge — Zähne/Prothese\n- bei Intubierten: alle 4 bis 6 Stunden, möglichst Chlorhexidin (Cochrane 2023)\n- bei Schluckstörung keine Bolus-Flüssigkeit, sondern tropfenweise feuchte Tupfer\n\n**Bei Risikozeichen:**\n- Husten, Gurgeln, Atemveränderung — sofort absaugen\n- Inspektion auf Druckstellen durch Tubus (Lippenwinkel, Zunge)\n\n**Ethik:** Auch bei nicht ansprechbaren Menschen gilt: Mundpflege ist Basispflege und Würde — nicht verzichtbar, nur vorsichtig durchzuführen.",
          glossarBegriffe: ["Aspiration", "Chlorhexidin"],
        },
        contentB1: {
          title: "Mundpflege bei bewusstseinseingeschränkten Patienten",
          body: "Bei **bewusstseinsgestörten Patienten** (Koma, schwere Demenz, Beatmung, am Lebensende) ist die Mundpflege wichtig — aber gefährlich, weil der Patient nicht schlucken kann. Die Gefahr: **Aspiration** (Flüssigkeit geht in die Lunge).\n\n**Grundregel:** So wenig Flüssigkeit wie möglich.\n\n**Vorbereitung:**\n- Absauggerät anschließen und testen\n- Kopf 30 bis 45 Grad hoch stellen, leicht zur Seite drehen\n- Handschuhe, Einmal-Spatel, weiche Tupfer oder Schwämmchen\n- zum Befeuchten: Wasser, Kochsalzlösung, Salbeitee\n\n**Durchführung:**\n- Tupfer nur leicht feucht, nicht tropfnass\n- Reihenfolge: Wangen — Gaumen — Zunge — Zähne/Prothese\n- Bei beatmeten Patienten alle 4 bis 6 Stunden mit Chlorhexidin\n\n**Achtung:**\n- Wenn der Patient hustet oder anders atmet: sofort absaugen\n- Lippen und Zunge auf Druckstellen durch den Tubus prüfen\n\n**Wichtig für die Würde:** Auch wer nicht ansprechbar ist, hat ein Recht auf Mundpflege. Man macht sie nur vorsichtig.",
          glossarBegriffe: ["Aspiration", "Chlorhexidin"],
        },
      },
    },
    glossarBegriffe: ["Aspiration", "Chlorhexidin"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: mundpflege-lebensende (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-lebensende",
    themaId: "mundpflege",
    titel: "Mundpflege am Lebensende",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 78-jährige Patientin ist in der Sterbephase. Sie trinkt nichts mehr. Ihre Angehörige fragt: Soll ich ihr nicht doch Wasser geben? Sie hat doch Durst! Wie antwortest du — und was ist das Ziel der Mundpflege jetzt?",
      antwort:
        "In der Sterbephase wird das Durstgefühl zentral-nerval reduziert. Was den Patienten belastet, ist nicht der Flüssigkeitsmangel im Körper, sondern die trockene Mundschleimhaut. Zwangstrinken oder unnötige Infusionen verlängern eher das Leiden (Lungenödem, Aspiration). Ziel: Komfortpflege — feuchte Schleimhaut, Geruchsfreiheit, Wohlbefinden. Maßnahmen: Lieblingsgetränk in kleinen Mengen, feuchte Schwämmchen, Lippenpflege mit Panthenol. Angehörige einbeziehen. Patientenverfügung beachten. (DGP, S3-Leitlinie Palliativmedizin, 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Am Lebensende ist Mundpflege keine Flüssigkeitszufuhr, sondern Komfortpflege. Ziel: feuchte Schleimhaut, Geruchsfreiheit, Wohlbefinden. Kleine Mengen Wunschgetränk (wenn erlaubt), Schwämmchen mit Wasser oder Lieblingsgetränk, Lippenpflege. Angehörige einbeziehen.",
      textB1:
        "Am Lebensende geht es bei der Mundpflege um Wohlbefinden, nicht um Trinken. Das Ziel: Schleimhaut feucht halten, kein schlechter Geruch, der Patient fühlt sich wohl. Kleine Mengen Wunschgetränk, Schwämmchen, Lippenpflege. Angehörige helfen lassen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-12",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DGP S3-Leitlinie Palliativmedizin 2020"],
        track: "vertiefung",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-lebensende",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Mundpflege am Lebensende",
          body: "In der **Sterbephase** verändert sich das Ziel der Mundpflege grundlegend. Es geht nicht mehr um Prophylaxe gegen Soor oder Parotitis, sondern um **Lebensqualität** in den letzten Stunden und Tagen.\n\n**Physiologischer Hintergrund:**\n- Durstgefühl wird in der Sterbephase zentral-nerval reduziert\n- Flüssigkeitsgabe verlängert nicht das Leben, sondern oft das Leiden (Lungenödem, Aspiration)\n- Mundtrockenheit ist das zentrale Symptom — nicht der Flüssigkeitsmangel im Körper\n\n**Pflegeziel:** feuchte, geruchsfreie Mundhöhle, die dem Patienten Wohlbefinden gibt.\n\n**Maßnahmen (in Anlehnung an die Leitlinie Palliativmedizin S3, DGP 2020):**\n- alle 15 bis 30 Minuten kleine Mengen des Lieblingsgetränks anbieten (Kaffee, Bier, Saft — wenn noch gewünscht)\n- feuchte Schwämmchen oder Tupfer mit Wasser, Salbeitee, Lieblingsgetränk\n- Lippenpflege mit fettender Salbe (Panthenol, Vaseline)\n- kein Zwang zum Schlucken\n\n**Angehörige einbeziehen:** Oft wollen Angehörige aktiv etwas tun. Mundpflege ist eine Aufgabe, die sie behutsam übernehmen können — mit Anleitung. Das gibt Nähe in der letzten Zeit.\n\n**Ethik:** Nicht gegen den erklärten Willen. Kein Zwangstrinken über Infusion, wenn der Patient das ablehnt (Patientenverfügung beachten).",
          glossarBegriffe: ["Aspiration"],
        },
        contentB1: {
          title: "Mundpflege am Lebensende",
          body: "Am **Lebensende** ändert sich das Ziel der Mundpflege. Es geht nicht mehr um Vorbeugung (Soor), sondern um **Wohlbefinden** in den letzten Tagen und Stunden.\n\n**Warum?**\n- In der Sterbephase spürt der Körper keinen Durst mehr\n- Viel Flüssigkeit verlängert nicht das Leben — sie kann Leiden vergrößern (Wasser in der Lunge, Aspiration)\n- Was den Patienten wirklich belastet, ist der trockene Mund\n\n**Ziel:** Der Mund ist feucht. Er riecht nicht schlecht. Der Patient fühlt sich wohl.\n\n**Maßnahmen:**\n- alle 15 bis 30 Minuten kleine Mengen vom **Lieblingsgetränk** (Kaffee, Bier, Saft — wenn gewünscht)\n- feuchte Schwämmchen oder Tupfer mit Wasser, Salbeitee oder Lieblingsgetränk\n- Lippen mit Panthenol oder Vaseline pflegen\n- **Kein Zwang zum Schlucken**\n\n**Angehörige einbinden:** Angehörige wollen oft etwas tun. Mundpflege können sie lernen und übernehmen. Das gibt Nähe.\n\n**Ethik:** Nicht gegen den Willen des Patienten. Patientenverfügung beachten. Keine Infusion mit Gewalt.",
          glossarBegriffe: ["Xerostomie", "Parodontitis"],
        },
      },
    },
    glossarBegriffe: ["Xerostomie", "Parodontitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: risikoassessment (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-risikoassessment",
    themaId: "mundpflege",
    titel: "Risikoassessment Mundgesundheit",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du übernimmst eine Station mit sechs Patienten. Wer hat das höchste Risiko für Mundgesundheitsprobleme — und an welchen drei Kriterien erkennst du das schon aus dem Übergabebericht?",
      antwort:
        "Drei Kriterien-Gruppen bestimmen das Mundgesundheitsrisiko: (1) Fähigkeit zur Selbstpflege (kognitiv, motorisch), (2) Speichelfaktor (Medikamente, Bestrahlung, Mundatmung), (3) Immunstatus (Chemo, Steroide, Diabetes). Wer mehrere Kriterien erfüllt, braucht tägliche Inspektion.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Kriterien-Gruppen bestimmen das Mundgesundheitsrisiko: (1) Fähigkeit zur Selbstpflege (kognitiv, motorisch), (2) Speichelfaktor (Medikamente, Bestrahlung, Mundatmung), (3) Immunstatus (Chemo, Steroide, Diabetes). Wer mehrere Kriterien erfüllt, braucht tägliche Inspektion.",
      textB1:
        "Drei Gruppen von Risiko-Kriterien: 1) Kann der Patient selbst putzen? (kognitiv, motorisch) 2) Gibt es Speichel-Probleme? (Medikamente, Bestrahlung, Mundatmung) 3) Ist die Abwehr schwach? (Chemo, Kortison, Diabetes) Mehrere zusammen = hohes Risiko.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-13",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGP/DGPPN Leitlinie Mundgesundheit 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mundpflege-risiko",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Risikoassessment Mundgesundheit",
          body: "Das Mundgesundheitsrisiko lässt sich systematisch einschätzen. **Drei Kriterien-Gruppen** (nach DGP/DGPPN 2019):\n\n**Gruppe 1 — Selbstpflegefähigkeit:**\n- kognitiv: Demenz, Delir, Bewusstseinsstörung\n- motorisch: Parese, Tremor, Kontrakturen, Frakturen der oberen Extremität\n- emotional: Depression, Verweigerung\n\n**Gruppe 2 — Speichelfaktoren:**\n- Medikamente mit Xerostomie-Potenzial (Opioide, Antidepressiva, Diuretika, Anticholinergika)\n- Bestrahlung Kopf-Hals\n- dauerhafte Mundatmung (Sauerstoffbrille, nasale Obstruktion)\n- Dehydratation\n- höheres Alter\n\n**Gruppe 3 — Immunstatus / Lokalfaktoren:**\n- Chemotherapie, Radiatio\n- Steroide, Biologicals, HIV\n- Diabetes mellitus (Zucker im Speichel)\n- Prothesen (Biofilm-Fläche)\n- bestehende Karies oder Parodontitis\n\n**Handlung je nach Risikostufe:**\n- **Niedrig** (0 Kriterien): Mundpflege wie bei Gesunden, Inspektion 1x pro Woche\n- **Mittel** (1-2 Kriterien): tägliche Inspektion, strukturierte Mundpflege\n- **Hoch** (3+ Kriterien oder Chemo/Intubation): Inspektion 1-2x täglich, Prophylaxebündel voll umsetzen, ggf. Chlorhexidin\n\nWichtig: Risiko kann sich täglich ändern (neue Medikamente, neue Diagnose). Darum bei jeder Übergabe neu einschätzen.",
          glossarBegriffe: ["Radiatio", "Parodontitis", "Biofilm"],
        },
        contentB1: {
          title: "Risikoassessment Mundgesundheit",
          body: "Das Mund-Risiko schätzt du systematisch ein. **Drei Gruppen** von Fragen (DGP/DGPPN 2019):\n\n**Gruppe 1 — Kann der Patient selbst putzen?**\n- Kopf: Demenz, verwirrt, bewusstlos?\n- Hände: Lähmung, Zittern, Gips?\n- Gefühl: depressiv, lehnt ab?\n\n**Gruppe 2 — Gibt es Speichel-Probleme?**\n- Medikamente (Opioide, Antidepressiva, Diuretika)\n- Bestrahlung am Kopf\n- Atmet durch den Mund (Sauerstoffbrille)?\n- zu wenig trinken?\n- hohes Alter?\n\n**Gruppe 3 — Ist die Abwehr schwach?**\n- Chemotherapie, Bestrahlung\n- Kortison, HIV\n- Diabetes (Zucker im Speichel)\n- Prothese\n- schon Karies oder Entzündung?\n\n**Was machst du dann?**\n- **0 Risiken:** einmal pro Woche schauen\n- **1 bis 2 Risiken:** jeden Tag schauen, strukturiert pflegen\n- **3+ oder Chemo/Beatmung:** ein- bis zweimal täglich schauen, volle Prophylaxe, bei Beatmung Chlorhexidin\n\n**Achtung:** Das Risiko kann sich jeden Tag ändern — bei jeder Übergabe neu einschätzen.",
          glossarBegriffe: ["Radiatio", "Parodontitis", "Biofilm"],
        },
      },
    },
    glossarBegriffe: ["Radiatio", "Parodontitis", "Biofilm"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: pflegeplanung (Bloom 6)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mundpflege-pflegeplanung",
    themaId: "mundpflege",
    titel: "Pflegeplanung Mundpflege: Herr Kaya",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr Kaya, 72 Jahre, 14 Tage nach Schlaganfall, halbseitige Lähmung rechts, Zahnprothese, trinkt wenig, seit gestern beginnende Schluckstörung. Er kann die Prothese nicht mehr selbst reinigen. Plane seine Mundpflege: Ziel, Maßnahmen, Häufigkeit, Sicherheit. Begründe jede Entscheidung.",
      antwort:
        "Pflegeplanung Mundpflege folgt dem 6-Schritte-Regelkreis (Fiechter/Meier): Informationen sammeln — Probleme/Ressourcen — Ziele — Maßnahmen — Durchführung — Evaluation. Wichtig: SMART-Ziele, individuelle Anpassung, Schluckstatus beachten, Angehörige einbeziehen, dokumentieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegeplanung Mundpflege folgt dem 6-Schritte-Regelkreis (Fiechter/Meier): Informationen sammeln — Probleme/Ressourcen — Ziele — Maßnahmen — Durchführung — Evaluation. Wichtig: SMART-Ziele, individuelle Anpassung, Schluckstatus beachten, Angehörige einbeziehen, dokumentieren.",
      textB1:
        "Die Pflegeplanung für Mundpflege geht in sechs Schritten: 1) Infos sammeln. 2) Probleme und Ressourcen notieren. 3) Ziele setzen. 4) Maßnahmen planen. 5) Durchführen. 6) Bewerten. Wichtig: genaue Ziele, Schluckstatus beachten, Angehörige mitnehmen, alles dokumentieren.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mundpflege-wb-14",
        phase: 1,
        stepType: "careplan",
        bloomLevel: 6,
        kompetenzbereich: "I.1",
        quellen: ["Fiechter/Meier 1981", "§ 113 SGB XI"],
        track: "vertiefung",
        modus: "schreibtisch",
        lernziel: "ce02-mundpflege-planung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Pflegeplanung Mundpflege: Herr Kaya",
          body: "Eine Pflegeplanung für Mundpflege folgt dem **Pflegeprozess nach Fiechter/Meier (1981)**. Am Beispiel Herr Kaya:\n\n**1. Informationssammlung:** Alter, Grunderkrankung, Medikamente, Schluckstatus, bisherige Mundpflege, eigene Zähne oder Prothese, Angehörige, Vorlieben.\n\n**2. Pflegediagnose (PESR-Schema):**\n- **Problem:** unzureichende Mundhygiene\n- **Ätiologie:** halbseitige Lähmung rechts + beginnende Schluckstörung\n- **Symptome:** Prothesenbeläge, trockene Schleimhaut, Mundgeruch\n- **Ressourcen:** Patient kooperativ, Ehefrau täglich da, linke Hand funktioniert\n\n**3. SMART-Ziele:**\n- Nahziel (3 Tage): Mundschleimhaut feucht, keine Beläge auf Prothese\n- Fernziel (14 Tage): Patient reinigt Prothese mit linker Hand unter Anleitung selbst\n\n**4. Maßnahmen:**\n- 3x täglich systematische Mundinspektion (Pflegekraft)\n- 2x täglich Zähne/Prothese weiche Bürste, Fluorid-Paste\n- nach jeder Mahlzeit Prothese abspülen\n- Speichelfluss anregen: zuckerfreier Kaugummi nach Freigabe Logopädie (Schluckstatus)\n- Sicherheit bei Schluckstörung: Oberkörper 45°, Tupfer statt Bolus-Flüssigkeit\n- Ehefrau einweisen\n\n**5. Durchführung** mit Handzeichen und Zeitangabe.\n\n**6. Evaluation** nach 3 Tagen: Ziel erreicht? Neue Probleme? Anpassung?\n\n**Dokumentation:** strukturiert in SIS oder Pflegebericht — sachlich, chronologisch, nachvollziehbar. (§ 113 SGB XI)",
          glossarBegriffe: ["PESR-Schema", "SMART-Ziel", "SIS", "Pflegeprozess"],
        },
        contentB1: {
          title: "Pflegeplanung Mundpflege: Herr Kaya",
          body: "Die **Pflegeplanung für Mundpflege** hat sechs Schritte (Fiechter/Meier 1981). So sieht es bei Herrn Kaya aus:\n\n**1. Informationen sammeln:** Alter, Krankheit, Medikamente, Schlucken, bisherige Mundpflege, eigene Zähne oder Prothese, Familie, was er mag.\n\n**2. Pflegediagnose (PESR):**\n- **Problem:** Mund ist nicht gut gepflegt\n- **Ursache:** halbseitige Lähmung rechts + beginnende Schluckstörung\n- **Zeichen:** Belag auf Prothese, trockener Mund, Mundgeruch\n- **Ressourcen:** Patient macht mit, Ehefrau kommt jeden Tag, linke Hand geht\n\n**3. Ziele (SMART — genau, messbar, realistisch, zeitlich):**\n- In 3 Tagen: Schleimhaut feucht, Prothese ohne Belag\n- In 14 Tagen: Patient reinigt die Prothese mit der linken Hand selbst\n\n**4. Maßnahmen:**\n- 3x am Tag Mund ansehen (Pflegekraft)\n- 2x am Tag Zähne/Prothese mit weicher Bürste + Fluorid\n- nach jedem Essen Prothese abspülen\n- Speichel anregen: zuckerfreier Kaugummi — aber erst nach Freigabe von der Logopädin (wegen Schlucken)\n- Sicherheit bei Schluckstörung: Kopf 45° hoch, Tupfer statt Flüssigkeit\n- Ehefrau einlernen\n\n**5. Durchführung** mit Kürzel und Uhrzeit dokumentieren.\n\n**6. Bewerten** nach 3 Tagen: Ziel erreicht? Neue Probleme? Plan anpassen?\n\n**Dokumentation:** In SIS oder Pflegebericht. Sachlich, chronologisch, verständlich. (§ 113 SGB XI)",
          glossarBegriffe: ["PESR-Schema", "SMART-Ziel", "SIS", "Pflegeprozess"],
        },
      },
    },
    glossarBegriffe: ["PESR-Schema", "SMART-Ziel", "SIS", "Pflegeprozess"],
    karteikarten: [],
  },
];

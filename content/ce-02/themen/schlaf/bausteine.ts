// CE-02 Thema Schlaf & Schlafhygiene — Wissensbausteine (9 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/schlaf/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥3)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (Bloom 1-2, alle Schüler)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_SCHLAF_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: schlafphysiologie-zyklen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-zyklen-nrem-rem",
    themaId: "schlaf",
    titel: "Schlafphasen: NREM und REM",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du schläfst 8 Stunden. Ist der Schlaf die ganze Zeit gleich tief — oder verändert er sich im Laufe der Nacht? Beschreibe, was du vermutest.",
      antwort:
        "Der Schlaf läuft in Zyklen von ca. 90 Minuten. Jeder Zyklus hat zwei Hauptphasen: NREM-Schlaf (Non-Rapid Eye Movement, 3 Stadien N1-N3) und REM-Schlaf (Rapid Eye Movement, Traumphase). Pro Nacht durchläuft der Mensch 4-6 Zyklen. Tiefschlaf (N3) dominiert die erste Nachthälfte, REM die zweite. (AASM 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Schlaf läuft in Zyklen von ca. 90 Minuten. Jeder Zyklus hat zwei Hauptphasen: NREM-Schlaf (Non-Rapid Eye Movement, 3 Stadien N1-N3) und REM-Schlaf (Rapid Eye Movement, Traumphase). Pro Nacht durchläuft der Mensch 4-6 Zyklen. (AASM 2020)",
      textB1:
        "Schlaf läuft in Zyklen. Ein Zyklus dauert ungefähr 90 Minuten. Pro Nacht hat der Mensch 4 bis 6 Zyklen. Jeder Zyklus hat zwei Teile: den NREM-Schlaf (3 Stadien) und den REM-Schlaf (Traumschlaf mit schnellen Augenbewegungen).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-01",
        phase: 1,
        stepType: "diagram",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["AASM Scoring Manual 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-zyklen",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Schlafphasen: NREM und REM",
          body: "Der menschliche Schlaf ist nach AASM-Klassifikation in zwei Hauptformen gegliedert: **NREM** (Non-Rapid Eye Movement) und **REM** (Rapid Eye Movement). Ein vollständiger Zyklus dauert etwa **90 Minuten**, pro Nacht folgen **4-6 Zyklen** aufeinander.\n\n**NREM-Schlaf** (~75-80% der Schlafzeit) gliedert sich in drei Stadien:\n- **N1** (Einschlafstadium, 2-5%): Übergang vom Wachzustand, Muskeltonus sinkt\n- **N2** (stabiler Leichtschlaf, 45-55%): Schlafspindeln und K-Komplexe im EEG\n- **N3** (Tiefschlaf / Slow-Wave-Sleep, 15-25%): Deltawellen, körperliche Regeneration, Wachstumshormonausschüttung\n\n**REM-Schlaf** (~20-25%): schnelle Augenbewegungen, muskuläre Atonie (Schutz vor Ausleben von Träumen), intensive Traumtätigkeit, Gedächtniskonsolidierung.\n\nIn der ersten Nachthälfte überwiegt der Tiefschlaf (N3), in der zweiten Nachthälfte werden die REM-Phasen länger. Mit zunehmendem Alter nehmen N3 und REM ab. (AASM Scoring Manual 2020)",
          glossarBegriffe: ["NREM-Schlaf", "REM-Schlaf", "Schlafzyklus", "Hypnogramm", "Slow-Wave-Sleep (SWS)"],
        },
        contentB1: {
          title: "Schlafphasen: NREM und REM",
          body: "Dein Schlaf läuft nicht gleich tief die ganze Nacht. Er läuft in **Zyklen**. Ein Zyklus dauert ungefähr **90 Minuten**. Pro Nacht hast du **4 bis 6 Zyklen**.\n\n**Es gibt zwei Haupt-Phasen:**\n\n**1. NREM-Schlaf** (etwa 75-80% der Nacht) — hat 3 Stadien:\n- **N1**: Einschlafen, du kannst leicht geweckt werden\n- **N2**: Stabiler Schlaf, der Körper entspannt sich\n- **N3**: Tiefschlaf — der Körper erholt sich am meisten\n\n**2. REM-Schlaf** (etwa 20-25% der Nacht): schnelle Augenbewegungen, starke Träume, die Muskeln sind wie gelähmt.\n\n**Wichtig:** In der ersten Nachthälfte ist der Tiefschlaf (N3) am längsten. In der zweiten Nachthälfte werden die REM-Phasen länger. Alte Menschen haben weniger Tiefschlaf.",
          glossarBegriffe: ["NREM-Schlaf", "REM-Schlaf", "Schlafzyklus"],
        },
      },
    },
    glossarBegriffe: ["NREM-Schlaf", "REM-Schlaf", "Schlafzyklus", "Hypnogramm", "Slow-Wave-Sleep (SWS)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: zirkadianer-rhythmus (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-zirkadianer-rhythmus",
    themaId: "schlaf",
    titel: "Zirkadianer Rhythmus und innere Uhr",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum wirst du abends müde, auch wenn du den ganzen Tag im Bett liegst? Was in deinem Körper steuert das eigentlich?",
      antwort:
        "Der zirkadiane Rhythmus ist die innere Uhr des Körpers mit einer Periode von ca. 24 Stunden. Zentral gesteuert vom Nucleus suprachiasmaticus (SCN) im Hypothalamus. Licht ist der wichtigste Taktgeber (Zeitgeber), über Melatonin reguliert. Im Krankenhaus fehlen oft klare Licht-Dunkel-Signale — das erhöht das Delir-Risiko. (Borbély 1982; AASM 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der zirkadiane Rhythmus ist die innere Uhr des Körpers mit einer Periode von ca. 24 Stunden. Zentral gesteuert vom Nucleus suprachiasmaticus (SCN) im Hypothalamus. Licht ist der wichtigste Taktgeber (Zeitgeber), über Melatonin reguliert.",
      textB1:
        "Dein Körper hat eine innere Uhr. Sie dauert etwa 24 Stunden — deshalb heißt sie zirkadian (circa = ungefähr, dies = Tag). Die Uhr sitzt im Gehirn. Licht ist das wichtigste Signal. Das Hormon Melatonin macht abends müde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-02",
        phase: 1,
        stepType: "timeline",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Borbély A. 1982", "AASM 2020", "DGSM S3-Leitlinie 2017"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-zirkadian",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Zirkadianer Rhythmus und innere Uhr",
          body: "Der zirkadiane Rhythmus (von lat. *circa* = ungefähr, *dies* = Tag) ist die endogene 24-Stunden-Uhr des Menschen. Zentraler Taktgeber ist der **Nucleus suprachiasmaticus (SCN)** im Hypothalamus. Er steuert Schlaf-Wach-Rhythmus, Körpertemperatur, Hormonausschüttung und Stoffwechsel.\n\n**Wichtigste Zeitgeber (Entrainer):**\n- **Licht** (stärkster Zeitgeber): Helles Licht am Morgen synchronisiert den SCN\n- **Melatonin**: Zirbeldrüsen-Hormon, wird abends bei Dunkelheit ausgeschüttet, Höhepunkt gegen 3 Uhr nachts\n- **Essenszeiten, soziale Aktivität, körperliche Bewegung** (schwächere Zeitgeber)\n\n**Zwei-Prozess-Modell** (Borbély 1982):\n- **Prozess S** (Schlafdruck): steigt mit Wachzeit, sinkt im Schlaf\n- **Prozess C** (zirkadianer Prozess): 24-Stunden-Kurve unabhängig vom Schlaf\n\n**Klinische Relevanz:** Im Krankenhaus fehlen oft klare Licht-Dunkel-Signale → Verlust des Rhythmus, Delir-Risiko steigt. (Borbély 1982; AASM 2020)",
          glossarBegriffe: ["Zirkadianer Rhythmus", "Nucleus suprachiasmaticus (SCN)", "Melatonin", "Zeitgeber", "Delir"],
        },
        contentB1: {
          title: "Zirkadianer Rhythmus und innere Uhr",
          body: "Dein Körper hat eine **innere Uhr**. Sie läuft ungefähr **24 Stunden**. Man nennt sie **zirkadianer Rhythmus** (*zirka* = ungefähr, *dies* = Tag). Die Uhr sitzt im Gehirn, im **Nucleus suprachiasmaticus**.\n\n**Die Uhr steuert:**\n- Wann du müde wirst\n- Deine Körpertemperatur (niedrig in der Nacht)\n- Deine Hormone\n\n**Was stellt die Uhr?**\n- **Licht** ist das wichtigste Signal. Helles Licht am Morgen weckt dich.\n- **Melatonin** ist ein Hormon. Es wird abends im Dunkeln gebildet. Es macht dich müde.\n- Auch Essenszeiten und Bewegung helfen.\n\n**Wichtig für die Pflege:** Im Krankenhaus gibt es oft kein klares Licht-Dunkel-Signal (Nacht-Schicht, Monitore, immer Licht). Dann ist die innere Uhr kaputt. Das kann zu Verwirrtheit führen (**Delir**).",
          glossarBegriffe: ["Zirkadianer Rhythmus", "Melatonin", "Zeitgeber", "Delir"],
        },
      },
    },
    glossarBegriffe: ["Zirkadianer Rhythmus", "Nucleus suprachiasmaticus (SCN)", "Melatonin", "Zeitgeber", "Delir"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: schlafbedarf-altersabhaengig (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-bedarf-alter",
    themaId: "schlaf",
    titel: "Schlafbedarf: altersabhängig",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie viele Stunden Schlaf brauchst du pro Nacht? Schätze auch: Wie viel schläft ein Neugeborenes, wie viel eine 80-jährige Frau?",
      antwort:
        "Der Schlafbedarf ist altersabhängig: Neugeborene 14-17 h, Kleinkinder 11-14 h, Schulkinder 9-11 h, Jugendliche 8-10 h, Erwachsene 7-9 h, Ältere 7-8 h. Die individuelle Bandbreite ist groß. Qualität ist wichtiger als reine Stundenzahl. (National Sleep Foundation 2015)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Schlafbedarf ist altersabhängig: Neugeborene 14-17 h, Kleinkinder 11-14 h, Schulkinder 9-11 h, Jugendliche 8-10 h, Erwachsene 7-9 h, Ältere 7-8 h. Die individuelle Bandbreite ist groß. Qualität ist wichtiger als reine Stundenzahl.",
      textB1:
        "Der Schlafbedarf ist je nach Alter anders: Neugeborene 14-17 Stunden, Kleinkinder 11-14, Schulkinder 9-11, Erwachsene 7-9, alte Menschen 7-8. Jeder Mensch ist etwas anders. Die Qualität ist wichtiger als die genauen Stunden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-03",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["National Sleep Foundation 2015", "AASM 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-bedarf",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schlafbedarf: altersabhängig",
          body: "Der Schlafbedarf verändert sich über die Lebensspanne. Die National Sleep Foundation (2015, Expertenkonsens mit 18 Fachgesellschaften) empfiehlt:\n\n| Altersgruppe | Empfohlen |\n|---|---|\n| Neugeborene (0-3 Mon) | 14-17 h |\n| Säuglinge (4-11 Mon) | 12-15 h |\n| Kleinkinder (1-2 J) | 11-14 h |\n| Vorschulkinder (3-5 J) | 10-13 h |\n| Schulkinder (6-13 J) | 9-11 h |\n| Jugendliche (14-17 J) | 8-10 h |\n| Erwachsene (18-64 J) | 7-9 h |\n| Ältere (65+ J) | 7-8 h |\n\n**Veränderungen im Alter:**\n- Tiefschlaf (N3) nimmt ab — bei Über-65-Jährigen oft unter 10%\n- Schlafphasen werden fragmentierter, mehr nächtliche Wachphasen\n- Phasenvorverlagerung: frühes Einschlafen, frühes Aufwachen\n\n**Wichtig:** Die **Schlafqualität** ist klinisch wichtiger als die reine Stundenzahl. (National Sleep Foundation 2015; AASM 2020)",
          glossarBegriffe: ["Schlafbedarf", "Schlaffragmentierung", "Phasenvorverlagerung"],
        },
        contentB1: {
          title: "Schlafbedarf: altersabhängig",
          body: "Der Schlafbedarf ändert sich im Leben.\n\n**So viel Schlaf brauchen Menschen:**\n- Neugeborene (0-3 Monate): **14-17 Stunden**\n- Kleinkinder (1-2 Jahre): **11-14 Stunden**\n- Schulkinder (6-13 Jahre): **9-11 Stunden**\n- Jugendliche (14-17): **8-10 Stunden**\n- Erwachsene (18-64): **7-9 Stunden**\n- Alte Menschen (65+): **7-8 Stunden**\n\n**Was ändert sich im Alter?**\n- **Weniger Tiefschlaf** (N3)\n- Mehr Wach-Phasen in der Nacht\n- Alte Menschen gehen oft **früh ins Bett** und stehen **früh auf**\n- Der Schlaf ist oft **unruhiger**\n\n**Wichtig:** Die Qualität ist wichtiger als die Stunden. Jemand kann 6 Stunden gut schlafen — das reicht oft.",
          glossarBegriffe: ["Schlafbedarf", "Schlaffragmentierung", "Phasenvorverlagerung"],
        },
      },
    },
    glossarBegriffe: ["Schlafbedarf", "Schlaffragmentierung", "Phasenvorverlagerung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: insomnie (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-insomnie",
    themaId: "schlaf",
    titel: "Insomnie: Einschlaf-, Durchschlaf- und Früh-Erwachen-Störung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Patientin sagt dir: 'Ich schlafe schon seit Wochen so schlecht.' Welche drei Fragen würdest du ihr stellen, um herauszufinden, was genau los ist?",
      antwort:
        "Insomnie ist die häufigste Schlafstörung: Probleme beim Einschlafen, Durchschlafen oder frühzeitiges Erwachen — mindestens 3 Nächte pro Woche über 3 Monate mit Beeinträchtigung am Tag. Definition nach DGSM S3-Leitlinie und ICSD-3.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Insomnie ist die häufigste Schlafstörung: Probleme beim Einschlafen, Durchschlafen oder frühzeitiges Erwachen — mindestens 3 Nächte pro Woche über 3 Monate mit Beeinträchtigung am Tag. Definition nach DGSM S3-Leitlinie und ICSD-3.",
      textB1:
        "Insomnie heißt Schlafstörung. Es gibt drei Arten: Probleme beim Einschlafen, beim Durchschlafen oder zu früh aufwachen. Für die Diagnose: mindestens 3 Nächte pro Woche, mehr als 3 Monate, und Probleme am Tag (müde, schlecht konzentriert).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-04",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGSM S3-Leitlinie 2017", "ICSD-3 (AASM 2023)", "RKI GEDA 2019/2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-insomnie",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Insomnie: Einschlaf-, Durchschlaf- und Früh-Erwachen-Störung",
          body: "Die **Insomnie** ist die häufigste Schlafstörung. Laut RKI-Gesundheitsdaten (GEDA 2019/2020) berichten ca. **24% der Erwachsenen in Deutschland** regelmäßig über Ein- oder Durchschlafstörungen, ca. **6% erfüllen die klinischen Kriterien** einer chronischen Insomnie.\n\n**Diagnostische Kriterien nach DGSM S3-Leitlinie (2017) und ICSD-3 (AASM 2023):**\n\n1. **Ein-, Durchschlafstörung** oder **frühmorgendliches Erwachen**\n2. Mindestens **3 Nächte pro Woche**\n3. Über mindestens **3 Monate** (kürzer = Kurzzeit-Insomnie)\n4. **Tagesbeeinträchtigung** (Müdigkeit, Konzentration, Stimmung, Leistung, Antrieb)\n5. Ausreichende Schlafgelegenheit vorhanden\n\n**Drei Typen:**\n- **Einschlafinsomnie**: Einschlaflatenz > 30 Min\n- **Durchschlafinsomnie**: Nächtliches Erwachen > 30 Min oder mehrfach\n- **Früh-Erwachen-Insomnie**: Erwachen > 30 Min vor gewünschter Zeit\n\n**Ursachen**: Stress, Angst, Depression, Schmerzen, Medikamente, Hospitalisierung, Schichtarbeit, schlechte Schlafhygiene. (DGSM S3-Leitlinie 2017; ICSD-3 2023)",
          glossarBegriffe: ["Insomnie", "Einschlaflatenz", "Komorbidität", "Hospitalisierung"],
        },
        contentB1: {
          title: "Insomnie: Einschlaf-, Durchschlaf- und Früh-Erwachen-Störung",
          body: "**Insomnie** heißt: Der Schlaf ist gestört.\n\n**Drei Arten:**\n1. **Einschlafstörung**: Du brauchst mehr als 30 Minuten zum Einschlafen\n2. **Durchschlafstörung**: Du wachst nachts auf und kannst nicht wieder einschlafen\n3. **Frühes Aufwachen**: Du wachst zu früh auf und kannst nicht wieder einschlafen\n\n**Wann ist es eine echte Insomnie?** Wenn alle Punkte stimmen:\n- Mindestens **3 Nächte pro Woche**\n- Über mehr als **3 Monate**\n- **Am Tag** hast du Probleme: müde, unkonzentriert, schlechte Stimmung\n\n**Wie häufig?** In Deutschland haben ungefähr **24%** der Erwachsenen manchmal Schlafprobleme. Ungefähr **6%** haben eine echte chronische Insomnie.\n\n**Ursachen:** Stress, Angst, Depression, Schmerzen, Medikamente, Schichtarbeit, Krankenhaus. Manchmal gibt es keine klare Ursache.",
          glossarBegriffe: ["Insomnie", "Einschlaflatenz", "Komorbidität", "Hospitalisierung"],
        },
      },
    },
    glossarBegriffe: ["Insomnie", "Einschlaflatenz", "Komorbidität", "Hospitalisierung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: hypersomnie-und-parasomnien (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-hypersomnie-parasomnie",
    themaId: "schlaf",
    titel: "Hypersomnie und Parasomnien",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Kennst du jemanden, der nachts redet, schlafwandelt oder Albträume hat? Oder jemanden, der tagsüber einfach einschläft, obwohl er nachts genug schläft? Was könnte dahinter stecken?",
      antwort:
        "Hypersomnie bedeutet krankhafte Tagesschläfrigkeit trotz ausreichender Nachtschlaf-Dauer (z.B. Narkolepsie, Schlafapnoe). Parasomnien sind unerwünschte Ereignisse während des Schlafs: NREM-Parasomnien (Schlafwandeln, Pavor nocturnus) oder REM-Parasomnien (Albträume, RBD). (ICSD-3)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Hypersomnie = krankhafte Tagesschläfrigkeit trotz ausreichender Nachtschlaf-Dauer (z.B. Narkolepsie, Schlafapnoe). Parasomnien = unerwünschte Ereignisse während des Schlafs: NREM-Parasomnien (Schlafwandeln, Pavor nocturnus) oder REM-Parasomnien (Albträume). (ICSD-3)",
      textB1:
        "Zwei weitere Gruppen von Schlafstörungen: Hypersomnie = zu müde am Tag, auch wenn die Nacht normal war. Parasomnien = komische Sachen im Schlaf: Schlafwandeln, Schreien, Albträume. Man unterscheidet NREM- und REM-Parasomnien.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-05",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["ICSD-3 (AASM 2023)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-hypersomnie-parasomnie",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Hypersomnie und Parasomnien",
          body: "Nach **ICSD-3** (International Classification of Sleep Disorders, AASM) gibt es 7 Hauptkategorien von Schlafstörungen. Neben der Insomnie die häufigsten:\n\n**Hypersomnien** — übermäßige Tagesschläfrigkeit trotz normaler Nachtschlaf-Dauer:\n- **Narkolepsie Typ 1 / 2**: plötzliche Schlafattacken, Kataplexie (Muskelverlust durch Emotionen), Hypocretin-Mangel\n- **Idiopathische Hypersomnie**: anhaltende Müdigkeit, nicht erholsamer langer Schlaf\n- **Sekundär** (z.B. bei obstruktiver Schlafapnoe)\n\n**Parasomnien** — unerwünschte Phänomene während des Schlafs, eingeteilt nach Schlafphase:\n\n| NREM-Parasomnien (meist 1. Nachthälfte, N3) | REM-Parasomnien (meist 2. Nachthälfte) |\n|---|---|\n| Schlafwandeln (Somnambulismus) | Albträume (Nightmare Disorder) |\n| Pavor nocturnus (Nachtschreck) | REM-Schlafverhaltensstörung (RBD) |\n| Schlaftrunkenheit | Schlafparalyse |\n\n**Schlafbezogene Bewegungsstörungen**: z.B. Restless-Legs-Syndrom (RLS).\n\n(ICSD-3, AASM 2023)",
          glossarBegriffe: ["Hypersomnie", "Narkolepsie", "Kataplexie", "Parasomnie", "Somnambulismus (Schlafwandeln)", "Pavor nocturnus", "REM-Schlafverhaltensstörung (RBD)", "Restless-Legs-Syndrom (RLS)"],
        },
        contentB1: {
          title: "Hypersomnie und Parasomnien",
          body: "Es gibt viele Arten von Schlafstörungen. Neben der **Insomnie** die wichtigsten:\n\n**Hypersomnie** = zu müde am Tag:\n- **Narkolepsie**: Man schläft plötzlich am Tag ein. Manchmal mit Muskelverlust bei Gefühlen (Kataplexie)\n- **Schlafapnoe**: Atem setzt nachts aus, man schläft schlecht — siehe eigener Baustein\n\n**Parasomnien** = komische Sachen im Schlaf:\n\n**NREM-Parasomnien (früh in der Nacht, Tiefschlaf):**\n- Schlafwandeln (Somnambulismus)\n- Nachtschreck (Pavor nocturnus) — Kinder schreien, sind aber nicht wach\n- Schlaftrunkenheit: halb wach, verwirrt\n\n**REM-Parasomnien (spät in der Nacht, Traumphase):**\n- Albträume\n- **REM-Schlafverhaltensstörung (RBD)**: Der Patient lebt Träume aus, schlägt um sich\n- Schlaflähmung: wach, aber kann sich nicht bewegen\n\nDazu: **Restless Legs** (unruhige Beine).",
          glossarBegriffe: ["Hypersomnie", "Narkolepsie", "Parasomnie", "Somnambulismus (Schlafwandeln)", "Pavor nocturnus"],
        },
      },
    },
    glossarBegriffe: ["Hypersomnie", "Narkolepsie", "Kataplexie", "Parasomnie", "Somnambulismus (Schlafwandeln)", "Pavor nocturnus", "REM-Schlafverhaltensstörung (RBD)", "Restless-Legs-Syndrom (RLS)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: schlafapnoe-erkennen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-apnoe-erkennen",
    themaId: "schlaf",
    titel: "Obstruktive Schlafapnoe erkennen und Pflege-Assessment",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient erzählt dir: 'Ich schnarche laut, meine Frau sagt, ich höre mittendrin auf zu atmen. Und tagsüber bin ich immer so müde.' Woran denkst du sofort — und welche Frage stellst du als nächstes?",
      antwort:
        "Obstruktive Schlafapnoe (OSA) — nächtliche Atemaussetzer durch Kollaps der oberen Atemwege. STOP-BANG-Screening (8 Fragen) ist der schnellste Pflege-Test. Leitsymptome: lautes Schnarchen, beobachtete Atempausen, Tagesmüdigkeit. (DGSM S3-Leitlinie SBAS)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Obstruktive Schlafapnoe (OSA) — nächtliche Atemaussetzer durch Kollaps der oberen Atemwege. STOP-BANG-Screening (8 Fragen) ist der schnellste Pflege-Test. Leitsymptome: lautes Schnarchen, beobachtete Atempausen, Tagesmüdigkeit. (DGSM S3-Leitlinie SBAS)",
      textB1:
        "Obstruktive Schlafapnoe (OSA) — der Patient hat Atempausen in der Nacht. Die Atemwege fallen zusammen. Die Pflege fragt mit dem STOP-BANG-Fragebogen. Zeichen: laut schnarchen, Atempausen (vom Partner gesehen), am Tag müde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGSM S3-Leitlinie SBAS 2017/2020", "AASM Scoring Manual 2020", "Chung F. et al. 2008"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-apnoe",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Obstruktive Schlafapnoe erkennen und Pflege-Assessment",
          body: "Die **obstruktive Schlafapnoe (OSA)** ist die wichtigste schlafbezogene Atmungsstörung. Durch wiederholten Kollaps der oberen Atemwege entstehen **Apnoen** (Atemaussetzer ≥10 Sek) und **Hypopnoen** (flache Atmung). Folge: Sauerstoffabfall, Weck-Reaktionen (Arousals), fragmentierter Schlaf.\n\n**Schweregrad nach Apnoe-Hypopnoe-Index (AHI):**\n- AHI 5-15 = leicht, 15-30 = mittel, >30 = schwer\n\n**STOP-BANG-Fragebogen** (8 Fragen, in der Pflege gut einsetzbar):\n- **S**noring — lautes Schnarchen?\n- **T**ired — tagsüber müde?\n- **O**bserved — Atempausen beobachtet?\n- **P**ressure — hoher Blutdruck?\n- **B**MI > 35?\n- **A**ge > 50?\n- **N**eck — Halsumfang > 40 cm?\n- **G**ender — männlich?\n\n**≥3 Ja = erhöhtes Risiko** → an Schlaflabor verweisen.\n\n**Therapie-Goldstandard**: **nCPAP** (nasale kontinuierliche Überdruckbeatmung) über Maske. In der Pflege: Maskensitz prüfen, Adhärenz unterstützen.\n\n(DGSM S3-Leitlinie SBAS 2017/2020; AASM Scoring Manual 2020)",
          glossarBegriffe: ["Obstruktive Schlafapnoe (OSA)", "Apnoe", "Hypopnoe", "Apnoe-Hypopnoe-Index (AHI)", "Arousal", "STOP-BANG", "CPAP (continuous positive airway pressure)"],
        },
        contentB1: {
          title: "Obstruktive Schlafapnoe erkennen und Pflege-Assessment",
          body: "**Obstruktive Schlafapnoe (OSA)** heißt: In der Nacht setzt die Atmung immer wieder **kurz aus**. Die Atemwege fallen zusammen. Der Sauerstoff sinkt. Das Gehirn weckt den Patienten kurz auf. Er merkt es oft nicht — aber der Schlaf ist kaputt.\n\n**Zeichen:**\n- Lautes **Schnarchen**\n- **Atempausen** (der Partner sieht sie)\n- Tagsüber sehr **müde**\n- Morgens **Kopfschmerzen**\n- **Bluthochdruck**\n\n**STOP-BANG-Fragebogen** (8 Ja/Nein-Fragen):\n- **S**nore (schnarchen?)\n- **T**ired (müde?)\n- **O**bserved apnea (Atempausen?)\n- **P**ressure (hoher Blutdruck?)\n- **B**MI über 35?\n- **A**lter über 50?\n- **N**ackenumfang über 40 cm?\n- **G**eschlecht: Mann?\n\n**3 oder mehr Ja → Risiko hoch** → zum Schlaflabor.\n\n**Therapie:** Der Patient trägt nachts eine **CPAP-Maske**. Sie bläst Luft in die Atemwege. Die Pflege prüft: Sitzt die Maske gut? Nutzt er sie auch wirklich?",
          glossarBegriffe: ["Obstruktive Schlafapnoe (OSA)", "Apnoe", "Hypopnoe", "STOP-BANG", "CPAP (continuous positive airway pressure)"],
        },
      },
    },
    glossarBegriffe: ["Obstruktive Schlafapnoe (OSA)", "Apnoe", "Hypopnoe", "Apnoe-Hypopnoe-Index (AHI)", "Arousal", "STOP-BANG", "CPAP (continuous positive airway pressure)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: stoerfaktoren-stationaer (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-stoerfaktoren-stationaer",
    themaId: "schlaf",
    titel: "Schlaf-Störfaktoren im Krankenhaus und Sleep Bundle",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir eine Nacht auf einer Station vor — zwischen 22 Uhr und 6 Uhr. Sammle mindestens 5 Dinge, die den Schlaf eines Patienten stören können.",
      antwort:
        "Hospitalisierte Patienten schlafen durchschnittlich nur 5-6 Stunden und wachen 6-10× pro Nacht auf. Hauptstörfaktoren: Lärm (Monitore, Kollegen, Mitpatient), Licht (Flurlicht, Taschenlampe), Pflegeaktionen (Vitalzeichen, Medikation), Schmerz, Angst. Sleep Bundle als Gegenstrategie. (Kamdar et al. 2012)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Hospitalisierte Patienten schlafen durchschnittlich nur 5-6 Stunden und wachen 6-10× pro Nacht auf. Hauptstörfaktoren: Lärm (Monitore, Kollegen, Mitpatient), Licht (Flurlicht, Taschenlampe), Pflegeaktionen (Vitalzeichen, Medikation), Schmerz, Angst.",
      textB1:
        "Im Krankenhaus schlafen Patienten schlecht: oft nur 5-6 Stunden, mit 6-10 Wachphasen pro Nacht. Warum? Lärm (Geräte, Personal, Mitpatient), Licht (Flur, Taschenlampe), Pflege-Aktionen (Blutdruck, Medikamente), Schmerz, Angst.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-07",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Kamdar et al. 2012", "DGSM 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-stoerfaktoren",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schlaf-Störfaktoren im Krankenhaus und Sleep Bundle",
          body: "Schlaf im Krankenhaus oder Pflegeheim ist regelhaft **gestört**. Patienten schlafen im Mittel **5-6 Stunden/Nacht** (vor Aufnahme: 7-8 Stunden), mit **6-10 Arousals pro Stunde** (gesund: 1-2).\n\n**Hauptstörfaktoren nach Kategorien:**\n\n**Umgebung:**\n- **Lärm**: Monitore, Tür-Quietschen, Flurgespräche, Telefon. Die WHO empfiehlt nächtlich < 35 dB — Realität oft 50-60 dB.\n- **Licht**: Flurlicht durch Türspalt, Taschenlampen bei Kontrollrunden, Monitor-LEDs\n- **Mitpatient**: Schnarchen, Husten, Unruhe, Rufglocke\n\n**Medizinisch/Pflegerisch:**\n- Vitalzeichenkontrollen nachts\n- Medikamentengabe zur Nacht\n- Blutabnahmen morgens 5-6 Uhr\n- Infusionspumpen-Alarme, Lagerungen\n\n**Psychisch:**\n- Schmerzen, Angst vor Diagnose/OP\n- Desorientierung (besonders bei Demenz: **Sundowning**)\n\n**Pflege-Strategie: Sleep Bundle** (evidenzbasiert):\n1. Zimmerrunden reduzieren (wenn klinisch vertretbar)\n2. Nachts nur Flüsterton, Türen sanft schließen\n3. Monitore stumm/auf Station\n4. Medikamentenzeiten clustern\n5. Patient aktiv nach Schlafgewohnheiten fragen\n\n(Kamdar et al. 2012; DGSM 2020)",
          glossarBegriffe: ["Arousal", "Sleep Bundle", "Sundowning"],
        },
        contentB1: {
          title: "Schlaf-Störfaktoren im Krankenhaus und Sleep Bundle",
          body: "Patienten im Krankenhaus schlafen **viel schlechter** als zu Hause. Im Schnitt nur **5-6 Stunden**. Sie wachen **6-10 Mal pro Stunde** kurz auf.\n\n**Störfaktoren — in Kategorien:**\n\n**Umgebung:**\n- **Lärm**: Monitore, Türen, Kollegen im Flur, Telefon\n- **Licht**: Flur, Taschenlampe bei Kontrolle, Monitor-Lämpchen\n- **Mitpatient**: schnarcht, hustet, klingelt\n\n**Medizinisch/Pflegerisch:**\n- Blutdruck messen in der Nacht\n- Medikamente zur Nacht\n- Blutabnahme früh morgens um 5-6 Uhr\n- Infusionspumpe piept\n\n**Psychisch:**\n- **Schmerzen**, Angst vor der Diagnose oder OP\n- **Verwirrtheit** (besonders bei Demenz: **Sundowning** — abends schlimmer)\n\n**Was hilft? (Sleep Bundle):**\n1. Weniger Zimmerrunden, wenn möglich\n2. In der Nacht nur **flüstern**, Türen leise schließen\n3. **Monitore** leise stellen\n4. Medikamente zusammen geben\n5. Patient **fragen**, wie er zu Hause schläft",
          glossarBegriffe: ["Sleep Bundle", "Sundowning"],
        },
      },
    },
    glossarBegriffe: ["Arousal", "Sleep Bundle", "Sundowning"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: schlafhygiene-massnahmen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-hygiene-massnahmen",
    themaId: "schlaf",
    titel: "Schlafhygiene: nicht-medikamentöse Maßnahmen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 72-jährige Patientin klagt auf Station: 'Ich kann nicht einschlafen.' Was könntest du ohne ein Schlafmittel konkret tun oder empfehlen? Sammle 4 Maßnahmen.",
      antwort:
        "Schlafhygiene = nicht-medikamentöse Maßnahmen für besseren Schlaf. Kern: regelmäßiger Rhythmus, abendliche Reizreduktion, Bett nur für Schlaf, Koffein/Alkohol meiden, körperliche Bewegung tagsüber, kühles/dunkles/leises Schlafzimmer. Bei chronischer Insomnie: KVT-I = erste Wahl. (DGSM S3-Leitlinie)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Schlafhygiene = nicht-medikamentöse Maßnahmen für besseren Schlaf. Kern: regelmäßiger Rhythmus, abendliche Reizreduktion, Bett nur für Schlaf, Koffein/Alkohol meiden, körperliche Bewegung tagsüber, kühles/dunkles/leises Schlafzimmer. (DGSM S3-Leitlinie)",
      textB1:
        "Schlafhygiene = Tipps für besseren Schlaf ohne Medikamente. Die wichtigsten: Immer gleiche Zeiten, abends ruhig werden, Bett nur zum Schlafen, Kaffee und Alkohol abends meiden, tagsüber bewegen, Zimmer kühl, dunkel und leise.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGSM S3-Leitlinie 2017/2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-hygiene",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schlafhygiene: nicht-medikamentöse Maßnahmen",
          body: "Die **Schlafhygiene** ist laut DGSM S3-Leitlinie die Basis-Intervention bei Schlafstörungen — vor jeder Pharmakotherapie.\n\n**Rhythmus (zirkadian):**\n- **Feste Aufsteh-Zeit**, auch am Wochenende und bei schlechter Nacht\n- Feste Bettgeh-Zeit nur bei echter Müdigkeit\n- Kein Mittagsschlaf > 30 Min, nicht nach 15 Uhr\n\n**Abends (reizarme Phase):**\n- **2 h vor dem Schlafen**: keine schweren Mahlzeiten, kein intensiver Sport\n- **1 h vor dem Schlafen**: kein Bildschirm (Blaulicht hemmt Melatonin) oder Blaulichtfilter einschalten\n- **Abendroutine**: immer gleich (Lesen, Dusche, Musik)\n\n**Bett-Konditionierung (Stimulus-Kontrolle):**\n- **Bett nur zum Schlafen (+ Sex)** — kein Arbeiten, kein Fernsehen im Bett\n- Wenn nach 20 Min nicht eingeschlafen: **aufstehen**, ruhige Tätigkeit, wiederkommen bei Müdigkeit\n\n**Substanzen:**\n- **Kein Koffein** nach 14 Uhr (Halbwertszeit 5-6 h)\n- **Kein Alkohol** zum Einschlafen (stört REM, fragmentiert Schlaf)\n\n**Schlafumgebung:**\n- **Temperatur 16-19 °C** (kühl), **Dunkelheit**, **Ruhe**\n\n**Wichtig:** Schlafhygiene wirkt nach **2-3 Wochen konsequenter Anwendung**. Bei chronischer Insomnie ist **KVT-I** die Therapie der ersten Wahl. (DGSM S3-Leitlinie 2017/2020)",
          glossarBegriffe: ["Schlafhygiene", "Stimulus-Kontrolle", "KVT-I (Kognitive Verhaltenstherapie für Insomnie)", "Halbwertszeit", "Blaulicht"],
        },
        contentB1: {
          title: "Schlafhygiene: nicht-medikamentöse Maßnahmen",
          body: "**Schlafhygiene** heißt: Dinge tun, damit du besser schläfst — **ohne Tabletten**. Die DGSM sagt: **immer zuerst Schlafhygiene** probieren, dann Medikamente.\n\n**Rhythmus:**\n- **Immer zur gleichen Zeit aufstehen** (auch am Wochenende)\n- Nur ins Bett gehen, wenn du **wirklich müde** bist\n- Mittagsschlaf: höchstens **30 Minuten**, nicht nach 15 Uhr\n\n**Abends:**\n- **2 Stunden vor dem Schlafen**: nicht mehr viel essen, kein Sport\n- **1 Stunde vor dem Schlafen**: **kein Handy, kein Fernseher** (Blaulicht stört)\n- Immer die gleiche **Abendroutine** (Lesen, Duschen, Musik)\n\n**Bett nur zum Schlafen:**\n- Im Bett **nicht arbeiten, nicht fernsehen**\n- Kannst du nach **20 Minuten** nicht einschlafen: **aufstehen**, etwas Ruhiges tun, wieder hinlegen, wenn du müde wirst\n\n**Keine Wachmacher:**\n- **Kein Kaffee** nach 14 Uhr\n- **Kein Alkohol** zum Einschlafen\n\n**Zimmer:**\n- **Kühl**: 16-19 °C, **dunkel**, **leise**\n\n**Wichtig:** Schlafhygiene wirkt nicht sofort. Nach **2-3 Wochen** merkst du, dass es besser wird. Bei chronischer Insomnie hilft **KVT-I** am besten — **besser als Schlafmittel**.",
          glossarBegriffe: ["Schlafhygiene", "Stimulus-Kontrolle", "KVT-I (Kognitive Verhaltenstherapie für Insomnie)", "Blaulicht"],
        },
      },
    },
    glossarBegriffe: ["Schlafhygiene", "Stimulus-Kontrolle", "KVT-I (Kognitive Verhaltenstherapie für Insomnie)", "Halbwertszeit", "Blaulicht"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: medikamentoese-schlafmittel (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "schlaf-medikamente-risiken",
    themaId: "schlaf",
    titel: "Schlafmittel: Risiken und Pflege-Beobachtung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 82-jähriger Patient bekommt seit der Aufnahme jede Nacht eine Schlaftablette (Zolpidem 10 mg). Nach einer Woche stürzt er beim Aufstehen zur Toilette. Welchen Zusammenhang siehst du — und was wäre eine bessere Strategie gewesen?",
      antwort:
        "Schlafmittel sind bei Älteren kritisch: Benzodiazepine und Z-Substanzen (Zolpidem, Zopiclon) stehen auf der Beers-Liste als potenziell inadäquate Medikation. Risiken: Sturz (+40-60%), Delir, Abhängigkeit (bereits nach 2-4 Wochen), Hangover-Effekt. Zuerst immer Schlafhygiene und Ursachen-Analyse. (Beers-Liste AGS 2023; DGSM 2017)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Schlafmittel sind bei Älteren kritisch: Benzodiazepine und Z-Substanzen (Zolpidem, Zopiclon) stehen auf der Beers-Liste als potenziell inadäquate Medikation. Risiken: Sturz (+40-60%), Delir, Abhängigkeit (bereits nach 2-4 Wochen), Hangover-Effekt.",
      textB1:
        "Schlafmittel sind für alte Menschen riskant. Das gilt besonders für Benzodiazepine und sogenannte Z-Substanzen (Zolpidem, Zopiclon). Gefahren: Stürze, Verwirrtheit (Delir), Abhängigkeit schon nach 2-4 Wochen, morgens noch müde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-schlaf-wb-09",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Beers-Liste AGS 2023", "DGSM S3-Leitlinie 2017/2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-schlaf-medikamente",
        tag: "krankheitslehre",
        displayFormat: "procontra",
        contentC1: {
          title: "Schlafmittel: Risiken und Pflege-Beobachtung",
          body: "Medikamentöse Schlafmittel (Hypnotika) sind laut **DGSM S3-Leitlinie** und **Beers-Liste (AGS 2023)** **nur die letzte Wahl** nach nicht-medikamentöser Therapie.\n\n**Substanzgruppen:**\n\n**1. Benzodiazepine (z.B. Lorazepam, Diazepam, Temazepam):**\n- Wirkung: GABA-Rezeptor, anxiolytisch + sedierend\n- **Probleme**: Abhängigkeit (innerhalb 2-4 Wochen), Toleranz, Muskelrelaxation (Sturzrisiko!), paradoxe Erregung bei Älteren\n\n**2. Z-Substanzen (Zolpidem, Zopiclon, Zaleplon):**\n- Ähnliche Probleme wie Benzos, Marketing-Versprechen 'weniger abhängig' — stimmt nicht\n- **Stürze +40-60%** bei älteren Patienten\n\n**3. Sedierende Antidepressiva (z.B. Mirtazapin, Trazodon):**\n- Geringere Abhängigkeitsgefahr\n\n**4. Sedierende Antihistaminika (z.B. Diphenhydramin):**\n- **Anticholinerge Effekte** (Delir, Mundtrockenheit, Harnverhalt) bei Älteren\n- Beers-Liste: **nicht bei Über-65-Jährigen**\n\n**5. Melatonin (retardiert):**\n- Sinnvoll bei Rhythmusstörungen, geringes Nebenwirkungsprofil\n\n**Pflegerische Beobachtung bei Hypnotika:**\n- **Sturzrisiko!**: Nachtlicht anmachen, Rufanlage griffbereit\n- **Nächtliche Toilettengänge**: Begleitung anbieten\n- **Morgendlicher Hangover**: Vorsicht beim Aufstehen\n- **Paradoxe Wirkung**: Agitation statt Sedierung — sofort melden\n- **Delir-Zeichen** beobachten (CAM-Screening)\n\n(Beers-Liste AGS 2023; DGSM S3-Leitlinie 2017/2020)",
          glossarBegriffe: ["Hypnotikum", "Benzodiazepin", "Z-Substanz", "Beers-Liste", "Anticholinerg", "Paradoxe Wirkung", "Hangover-Effekt"],
        },
        contentB1: {
          title: "Schlafmittel: Risiken und Pflege-Beobachtung",
          body: "**Schlafmittel sind die letzte Lösung** — nicht die erste. Die **DGSM** und die **Beers-Liste** sagen: Erst Schlafhygiene, dann KVT-I, dann erst Medikamente.\n\n**Die wichtigsten Gruppen:**\n\n**1. Benzodiazepine** (z.B. Lorazepam, Diazepam):\n- **Abhängig** schon nach **2-4 Wochen**\n- **Muskeln werden schwach** → Sturzrisiko hoch\n- Bei alten Menschen manchmal **paradox** (werden unruhig statt müde)\n\n**2. Z-Substanzen** (Zolpidem, Zopiclon, Zaleplon):\n- **Gleiche Risiken** wie Benzodiazepine\n- **Stürze +40-60%** bei alten Menschen\n- Auch abhängig\n\n**3. Sedierende Antidepressiva** (Mirtazapin, Trazodon):\n- Weniger Abhängigkeit\n\n**4. Antihistaminika** (Diphenhydramin, frei verkäuflich):\n- Bei alten Menschen **NICHT geeignet** (Beers-Liste)\n- Kann **Delir** (Verwirrtheit) machen\n\n**5. Melatonin** (als Tablette):\n- Wenig Nebenwirkungen, hilft bei **Rhythmusstörungen**\n\n**Was muss die Pflege beachten?**\n- **Sturzrisiko!** Rufanlage bereithalten, Nachtlicht anmachen\n- **Nachtgang zur Toilette?** Patient **begleiten**\n- **Morgens noch müde?** (Hangover) — Vorsicht beim Aufstehen\n- **Verwirrtheit beobachten** (Delir möglich)\n- Manche werden **unruhig statt müde** (paradoxe Wirkung) — melden!",
          glossarBegriffe: ["Hypnotikum", "Benzodiazepin", "Z-Substanz", "Beers-Liste", "Anticholinerg", "Paradoxe Wirkung", "Hangover-Effekt"],
        },
      },
    },
    glossarBegriffe: ["Hypnotikum", "Benzodiazepin", "Z-Substanz", "Beers-Liste", "Anticholinerg", "Paradoxe Wirkung", "Hangover-Effekt"],
    karteikarten: [],
  },
];

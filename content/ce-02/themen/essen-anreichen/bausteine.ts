// CE-02 Thema Essen & Trinken anreichen — Wissensbausteine (13 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/essen-anreichen/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Kompetenzbereich: II.1 Kommunikation
// Cluster D (Ernährung)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_ESSEN_ANREICHEN_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: vorbereitung-sitzposition (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-vorbereitung",
    themaId: "essen-anreichen",
    titel: "Vorbereitung & Sitzposition",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient soll im Bett essen. Welche 3 Dinge müssen stimmen, bevor du überhaupt anfängst — damit er sicher essen kann und nicht sich verschluckt? Denk an Körper, Umgebung und Speise.",
      antwort:
        "Drei Säulen vor dem Anreichen: Sitzposition über 60° (Aspirationsschutz), ruhige Umgebung (Fernseher aus, Licht an, Serviette bereit) und Temperaturkontrolle der Speise (am Innenarm fühlen — nicht zu heiß). (DGE 2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Säulen vor dem Anreichen: **Sitzposition über 60°** (Aspirationsschutz), **ruhige Umgebung** (Fernseher aus, Licht an, Serviette bereit) und **Temperaturkontrolle** der Speise (am Innenarm fühlen — nicht zu heiß). (DGE 2024)",
      textB1:
        "Drei Dinge musst du prüfen: Der Patient **sitzt über 60 Grad** aufrecht. Das Zimmer ist **ruhig** (Fernseher aus, Licht an). Das Essen hat die **richtige Temperatur** — fühl es kurz am Innenarm, nicht zu heiß.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["DGE (2024) Ernährung im Alter", "Expertenstandard Ernährungsmanagement DNQP 2017"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-vorbereitung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Vorbereitung & Sitzposition",
          body: "Die Vorbereitung entscheidet über Sicherheit und Würde beim Anreichen:\n\n**Sitzposition**: Oberkörper mindestens 60° aufrecht, besser 90°. Bei Bettlägerigkeit: Bettkopfteil hoch, Kissen im Rücken, Füße stabil. Grund: Die Schwerkraft unterstützt den Schluckakt, der Bolus rutscht Richtung Ösophagus statt Richtung Trachea.\n\n**Umgebung**: Fernseher und Radio aus, Licht hell genug zum Sehen der Speise, Tisch oder Bett-Tisch im bequemen Abstand. Ablenkung erhöht das Aspirationsrisiko.\n\n**Material**: Serviette oder Schutztuch (keine Lätzchen im Erwachsenenpflege — Würde!), passendes Besteck, Getränk griffbereit.\n\n**Speisecheck**: Temperatur am Innenarm prüfen (wie bei Babyflasche), Konsistenz passt zur Kostform des Patienten, optisch erkennbar arrangiert. (DGE 2024; Expertenstandard Ernährungsmanagement DNQP 2017)",
          glossarBegriffe: ["Aspiration", "Bolus", "Ösophagus", "Trachea"],
        },
        contentB1: {
          title: "Vorbereitung & Sitzposition",
          body: "Gute Vorbereitung ist wichtig, damit der Patient sicher essen kann und seine Würde behält:\n\n**Sitzen**: Der Oberkörper muss mindestens 60 Grad hoch sein, besser 90 Grad. Grund: So läuft das Essen durch die Schwerkraft richtig nach unten — in die Speiseröhre, nicht in die Lunge.\n\n**Zimmer**: Fernseher aus. Radio aus. Licht an — er muss das Essen gut sehen. Ablenkung ist gefährlich: Wer beim Sprechen isst, verschluckt sich leichter.\n\n**Material**: Serviette bereit — **kein Lätzchen** bei Erwachsenen, das ist respektlos. Getränk und Besteck in Reichweite.\n\n**Essen prüfen**: Temperatur am Innenarm fühlen. Passt die Konsistenz zu dem, was der Patient essen darf?",
          glossarBegriffe: ["Aspiration", "Bolus"],
        },
      },
    },
    glossarBegriffe: ["Aspiration", "Bolus", "Ösophagus", "Trachea"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: augenhoehe-wuerde (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-augenhoehe",
    themaId: "essen-anreichen",
    titel: "Augenhöhe & Würde",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du reichst einer älteren Frau Suppe an und stehst dabei. Sie muss zu dir hochschauen. Was macht das mit ihr — innerlich? Was solltest du anders machen?",
      antwort:
        "Auf Augenhöhe anreichen — du setzt dich neben oder vor den Patienten. Stehen über dem Bett erzeugt Machtgefälle und Unwohlsein. Würde im Mittelpunkt: Der Patient soll nicht hochschauen müssen. (WHO 2015)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Auf **Augenhöhe** anreichen — du setzt dich neben oder vor den Patienten. Stehen über dem Bett erzeugt Machtgefälle und Unwohlsein. Würde im Mittelpunkt: Der Patient soll nicht hochschauen müssen. (WHO 2015)",
      textB1:
        "Setz dich hin. Du bist **auf Augenhöhe** mit dem Patienten. Wenn du stehst, muss er hochschauen. Das macht ihn klein. Das ist nicht gut. Setz dich neben das Bett oder vor den Stuhl.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["WHO (2015) Mealtime Care and Dignity in Care of Older People", "§ 1901a BGB"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-augenhoehe",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Augenhöhe & Würde",
          body: "Würde beim Anreichen heißt: **Augenhöhe, Blickkontakt, Tempo des Patienten**.\n\n**Augenhöhe**: Du setzt dich hin. Auf einem Hocker neben dem Bett oder auf einem Stuhl vor dem Tisch. Nie von oben herab anreichen. Nie mit gekreuzten Armen danebenstehen und warten. Der Patient soll sich nicht wie ein Kind behandelt fühlen.\n\n**Blickkontakt**: Du schaust ihn an, nicht dein Handy oder deine Kollegin im Zimmer. Das Essen ist eine intime Situation, besonders wenn er gefüttert werden muss.\n\n**Tempo**: Der Patient bestimmt das Tempo. Nie drängen, nie 'schnell noch den letzten Löffel'. Wer hetzt, erhöht das Aspirationsrisiko und verletzt die Würde gleichzeitig. (WHO 2015; § 1901a BGB)",
          glossarBegriffe: ["Aspiration"],
        },
        contentB1: {
          title: "Augenhöhe & Würde",
          body: "Würde heißt: **Augenhöhe, Blickkontakt, sein Tempo**.\n\n**Augenhöhe**: Du **setzt dich hin** — auf einen Hocker oder Stuhl. Nie über dem Patienten stehen. Er soll sich nicht klein fühlen.\n\n**Blickkontakt**: Du schaust ihn an. Nicht aufs Handy. Nicht aus dem Fenster. Nicht zur Kollegin. Essen ist **persönlich** — besonders wenn jemand gefüttert werden muss.\n\n**Sein Tempo**: Der Patient sagt, wann der nächste Bissen kommt. Nie drängen. Nie 'schnell noch einen Löffel'. Hetzen ist gefährlich (Aspiration) und respektlos.",
          glossarBegriffe: ["Aspiration"],
        },
      },
    },
    glossarBegriffe: ["Aspiration"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: aspirationsschutz-technik (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-aspirationsschutz",
    themaId: "essen-anreichen",
    titel: "Aspirationsschutz-Technik",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie muss der Kopf des Patienten beim Schlucken stehen — nach vorne oder nach hinten gebeugt? Und warum? Denk an den Weg, den das Essen nehmen soll.",
      antwort:
        "Der Kopf ist leicht nach vorne geneigt, Kinn Richtung Brust. So verschließt die Epiglottis die Luftröhre besser. Nie Kopf nach hinten — dann ist die Trachea offen, Aspirationsrisiko steigt. Kleine Bissen, kein Druck, Ruhe zwischen den Happen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Kopf ist **leicht nach vorne geneigt**, Kinn Richtung Brust. So verschließt die Epiglottis die Luftröhre besser. **Nie** Kopf nach hinten — dann ist die Trachea offen, Aspirationsrisiko steigt. Kleine Bissen, kein Druck, Ruhe zwischen den Happen.",
      textB1:
        "Kopf **leicht nach vorne** beugen — Kinn Richtung Brust. So macht der Kehldeckel die Luftröhre zu. **Kopf nie nach hinten** — sonst ist der Weg zur Lunge frei. Kleine Bissen. Zeit lassen zwischen den Happen. Kein Druck.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "II.1",
        quellen: ["DGG/DGN S1-Leitlinie Neurogene Dysphagie (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-aspirationsschutz",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Aspirationsschutz-Technik",
          body: "Aspirationsschutz beim Anreichen hat vier Regeln:\n\n**1. Kopfposition**: Kinn Richtung Brust, leicht nach vorn. Anatomie dahinter: Die Epiglottis (Kehldeckel) verschließt beim Schluckakt die Trachea. Bei Kopf-nach-hinten bleibt der Weg zur Lunge offen — Aspirationsgefahr. Bei Schlaganfallpatienten mit halbseitiger Schwäche: Kopf zur **nicht-gelähmten Seite** drehen, der Bolus rutscht dann über die intakte Pharynx-Seite.\n\n**2. Kleine Bissen**: Ein halber Teelöffel, nicht überladen. Der Schluckakt braucht Zeit, große Bissen überfordern den Rachen.\n\n**3. Schluck abwarten**: Erst wenn du den Adamsapfel heben und senken siehst — dann der nächste Happen. Nie nachschieben.\n\n**4. Kein Druck**: Patient bestimmt das Tempo. Wer hetzt, provoziert Verschlucken. Zwischendurch: Atempause, Husten ist erlaubt und wichtig. (DGG/DGN S1-LL Neurogene Dysphagie 2020)",
          glossarBegriffe: ["Epiglottis", "Aspiration", "Reklination", "Bolus"],
        },
        contentB1: {
          title: "Aspirationsschutz-Technik",
          body: "Vier Regeln zum Schutz vor Verschlucken (Aspiration):\n\n**1. Kopf vor**: Kinn zur Brust. So macht der **Kehldeckel** (Epiglottis) den Weg zur Lunge zu. Kopf nach hinten ist gefährlich — dann ist der Weg zur Lunge offen. Bei Schlaganfall: Kopf zur **gesunden Seite** drehen, dann läuft das Essen über die gesunde Seite im Rachen.\n\n**2. Kleine Bissen**: Ein halber Teelöffel. Nicht mehr. Große Bissen sind zu viel zum Schlucken.\n\n**3. Warte auf den Schluck**: Du siehst den Adamsapfel hoch und runter gehen. Erst dann der nächste Happen. Nie vorher.\n\n**4. Kein Druck**: Der Patient bestimmt das Tempo. Husten ist gut — es reinigt die Atemwege. Lass Pausen zwischen den Happen.",
          glossarBegriffe: ["Epiglottis", "Aspiration", "Reklination"],
        },
      },
    },
    glossarBegriffe: ["Epiglottis", "Aspiration", "Reklination", "Bolus"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: dysphagie-zeichen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-dysphagie-zeichen",
    themaId: "essen-anreichen",
    titel: "Dysphagie-Zeichen erkennen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient nach Schlaganfall isst seinen Pudding. Nach 3 Löffeln hörst du, dass seine Stimme plötzlich 'gurgelnd' klingt. Was könnte passiert sein? Was tust du als nächstes?",
      antwort:
        "Dysphagie (Schluckstörung) — gurgelnde Stimme nach dem Schlucken ist ein Warnzeichen (Nasses-Stimme-Zeichen). Speisereste auf den Stimmbändern. Sofort stopp, Pflegekraft informieren, GUSS-Test oder 3-Schluck-Test durch geschultes Personal, Logopädie-Konsil. (DGG/DGN S1-LL 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Dysphagie** = Schluckstörung. Warnzeichen beim Anreichen: Husten, Räuspern, Nahrungsreste im Mund, **gurgelnde Stimme** nach dem Schlucken (Nasses-Stimme-Zeichen), verlängerte Essensdauer, Angst vor dem Schlucken. Ursachen: Schlaganfall, Parkinson, Demenz, Kopf-Hals-Tumor.",
      textB1:
        "**Dysphagie** = Schluckstörung. Zeichen beim Essen: Husten, Räuspern, Essen bleibt im Mund, **gurgelnde Stimme** nach dem Schlucken (klingt nass), Essen dauert sehr lang, Angst vorm Schlucken. Häufige Ursachen: Schlaganfall, Parkinson, Demenz, Tumor im Mund-Hals-Bereich.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "II.1",
        quellen: ["DGG/DGN S1-Leitlinie Neurogene Dysphagie (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-dysphagie-zeichen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Dysphagie-Zeichen erkennen",
          body: "**Dysphagie** bedeutet Schluckstörung. Sie betrifft ca. 50% aller Schlaganfallpatienten in der Akutphase, 60% der Parkinson-Patienten im Verlauf, viele Patienten mit fortgeschrittener Demenz und alle mit Kopf-Hals-Tumoren.\n\n**Warnzeichen beim Essen/Trinken:**\n- **Husten** oder Räuspern während oder nach dem Schlucken\n- **Nahrungsreste im Mund** nach dem Schluckakt (Taschenbildung in den Wangen)\n- **Nasse, gurgelnde Stimme** nach dem Schlucken (Zeichen: Speisereste auf den Stimmbändern)\n- **Verlängerte Essensdauer** (>45 Min für eine normale Portion)\n- **Austritt von Speichel oder Speisen** aus dem Mund (Leaking)\n- **Angst vor dem Essen**, Verweigerung, Gewichtsverlust\n- **Wiederkehrende Pneumonien** (stiller Aspirations-Hinweis)\n\n**Komplikationen**: Aspirationspneumonie, Mangelernährung, Dehydration, sozialer Rückzug (Scham beim Essen).\n\n**Konsequenz**: Jedes dieser Zeichen → **stopp**, Pflegekraft informieren, **GUSS-Test** oder 3-Schluck-Test durch geschultes Personal, Logopädie-Konsil. Kein erzwungenes Weiteressen. (DGG/DGN S1-LL 2020)",
          glossarBegriffe: ["Dysphagie", "Aspirationspneumonie", "Leaking", "Stille Aspiration"],
        },
        contentB1: {
          title: "Dysphagie-Zeichen erkennen",
          body: "**Dysphagie** heißt Schluckstörung. Sie tritt oft auf bei:\n- **Schlaganfall** (Hälfte der Patienten am Anfang)\n- **Parkinson** (60% im Verlauf)\n- **Demenz** (fortgeschritten)\n- **Tumor im Mund-Hals-Bereich**\n\n**Zeichen, die du beim Essen siehst:**\n- **Husten** beim Schlucken oder danach\n- **Essen bleibt im Mund** (zwischen Wange und Zahn)\n- **Gurgelnde Stimme** nach dem Schlucken — klingt wie nass\n- **Essen dauert sehr lang** (über 45 Minuten)\n- **Speichel oder Essen läuft raus**\n- **Angst vorm Essen**, er will nichts mehr\n- **Oft Lungenentzündung** — Hinweis auf stille Aspiration\n\n**Was passieren kann**: Lungenentzündung (Aspirationspneumonie), zu wenig essen und trinken (Mangelernährung, Austrocknung), Scham → kein Essen mehr in Gesellschaft.\n\n**Was du tust**: Aufhören. Pflegekraft rufen. **GUSS-Test** oder 3-Schluck-Test machen lassen. Logopädie organisieren. Nie zwingen.",
          glossarBegriffe: ["Dysphagie", "Aspirationspneumonie", "Leaking", "Stille Aspiration"],
        },
      },
    },
    glossarBegriffe: ["Dysphagie", "Aspirationspneumonie", "Leaking", "Stille Aspiration"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: guss-test (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-guss-test",
    themaId: "essen-anreichen",
    titel: "GUSS-Test — Schlucken strukturiert prüfen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast den Verdacht, dass Herr Becker nach seinem Schlaganfall nicht sicher schlucken kann. Wie prüfst du das — strukturiert, Schritt für Schritt, ohne ihn zu gefährden?",
      antwort:
        "GUSS-Test (Gugging Swallowing Screen, Trapl 2007): Vier Stufen, jede muss bestanden werden. Start: trockener Schluck (Speichel). Dann: Pudding (halbfest). Dann: Wasser (dünn). Dann: festes Brot. Bei Versagen → stopp + Logopädie.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**GUSS-Test** (Gugging Swallowing Screen, Trapl 2007): Vier Stufen, jede muss bestanden werden. Start: **trockener Schluck** (Speichel). Dann: **Pudding** (halbfest). Dann: **Wasser** (dünn). Dann: **festes Brot**. Bei Versagen → stopp + Logopädie.",
      textB1:
        "**GUSS-Test** — so prüfst du das Schlucken in 4 Stufen: Zuerst **trockener Schluck** (nur Speichel). Dann **Pudding** (dickflüssig). Dann **Wasser**. Dann **Brot** (fest). Jede Stufe muss klappen. Wenn eine nicht klappt: **stopp** und Logopädie holen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-05",
        phase: 1,
        stepType: "timeline",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["Trapl M. et al. (2007): GUSS — Stroke 38:2948-2952"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-guss-test",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "GUSS-Test — Schlucken strukturiert prüfen",
          body: "Der **GUSS-Test** (Gugging Swallowing Screen) wurde 2007 von Trapl et al. in Wien entwickelt und validiert (Stroke 2007;38:2948-2952). Er ist das **Standard-Screening** für Dysphagie bei Schlaganfallpatienten und findet heute breite Anwendung.\n\n**Voraussetzung**: Patient ist wach, sitzt über 60°, kann auf Ansprache reagieren, kann 1× willkürlich husten.\n\n**Vier Stufen** (aufsteigende Schwierigkeit, jede muss bestanden werden):\n\n**Stufe 1 — Indirekter Schluck (trocken)**: Speichel schlucken lassen. Beobachten: Schluckakt da? Husten? Stimme nach Schlucken klar?\n\n**Stufe 2 — Halbfeste Konsistenz**: 1/3 Teelöffel Pudding oder Joghurt. Dann auf 5 TL steigern. Beobachten: Schluckverzögerung (>2 sek)? Husten? Stimmveränderung? Leaking?\n\n**Stufe 3 — Flüssige Konsistenz**: 3, 5, 10, 20 ml Wasser. Gleiche Kriterien.\n\n**Stufe 4 — Feste Konsistenz**: Trockenes Brot. 5× testen. Gleiche Kriterien.\n\n**Punkte 0-20**: 0-9 = schwere Dysphagie (nur Logopädie, orale Kost verboten), 10-14 = mittelschwere Dysphagie (angepasste Kost), 15-19 = leichte Dysphagie, 20 = keine Dysphagie.\n\n**Regel**: Bei **jedem** Versagen einer Stufe → sofort stopp, nächste Stufen NICHT durchführen, Logopädie-Konsil. (Trapl et al., 2007)",
          glossarBegriffe: ["GUSS-Test", "Dysphagie", "Leaking"],
        },
        contentB1: {
          title: "GUSS-Test — Schlucken strukturiert prüfen",
          body: "Der **GUSS-Test** heißt Gugging Swallowing Screen (Dr. Trapl, 2007). Mit diesem Test prüfst du, ob ein Patient sicher schlucken kann — besonders nach Schlaganfall.\n\n**Vorher prüfen**: Patient ist wach. Er sitzt aufrecht (über 60°). Er kann auf Fragen antworten. Er kann einmal husten.\n\n**Vier Stufen** — jede muss klappen:\n\n**Stufe 1 — Speichel schlucken**: Nur Speichel. Schluckt er? Hustet er? Ist die Stimme danach klar?\n\n**Stufe 2 — Pudding**: Kleine Löffel Pudding. Schluckt er schnell genug? Kein Husten?\n\n**Stufe 3 — Wasser**: Kleine Mengen: 3, 5, 10, 20 ml.\n\n**Stufe 4 — Brot**: Trockenes Brot. 5 Mal probieren.\n\n**Punkte 0-20**: 0-9 = schwer krank (nichts essen, nur Logopädie). 10-14 = mittel (angepasstes Essen). 15-19 = leicht. 20 = gesund.\n\n**Wichtig**: Wenn eine Stufe **nicht klappt** — **sofort aufhören**. Nächste Stufe **nicht** machen. **Logopädie rufen**.",
          glossarBegriffe: ["GUSS-Test", "Dysphagie"],
        },
      },
    },
    glossarBegriffe: ["GUSS-Test", "Dysphagie", "Leaking"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: iddsi-framework (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-iddsi",
    themaId: "essen-anreichen",
    titel: "IDDSI-Framework — internationale Konsistenzstandards",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie kannst du international eindeutig sagen, wie dick ein Getränk für einen Dysphagie-Patienten sein soll — sodass eine Kollegin in Wien, Ankara oder New York dasselbe versteht?",
      antwort:
        "IDDSI (International Dysphagia Diet Standardisation Initiative, 2019) — internationaler Standard. Flüssigkeiten: Level 0-4 (dünn → extrem dick). Nahrung: Level 3-7 (flüssig → normal). Dazwischen Überschneidung Level 3/4. Getestet mit Flow-Test (10 ml Spritze).",
    },
    stufe2: {
      typ: "hinweis",
      text: "**IDDSI** (International Dysphagia Diet Standardisation Initiative, 2019) — internationaler Standard. Flüssigkeiten: Level **0-4** (dünn → extrem dick). Nahrung: Level **3-7** (flüssig → normal). Dazwischen Überschneidung Level 3/4. Getestet mit Flow-Test (10 ml Spritze).",
      textB1:
        "**IDDSI** ist ein internationaler Standard für Dysphagie-Kost (seit 2019). **Getränke**: Level 0-4 (von dünn bis sehr dick). **Essen**: Level 3-7 (von flüssig bis normal). Getestet wird mit einer **10-ml-Spritze** (Flow-Test).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-06",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 3,
        kompetenzbereich: "II.1",
        quellen: ["IDDSI (2019) International Dysphagia Diet Standardisation Initiative"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-iddsi",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "IDDSI-Framework — internationale Konsistenzstandards",
          body: "**IDDSI** = International Dysphagia Diet Standardisation Initiative. Das 2019 eingeführte Framework ersetzt alle alten nationalen Konsistenz-Bezeichnungen ('Nektar', 'Honig', 'Pudding') durch standardisierte Level 0-7.\n\n**Getränke/Flüssigkeiten (Level 0-4)**:\n- **Level 0 — Thin**: normales Wasser, Saft\n- **Level 1 — Slightly Thick**: leicht angedickt (ähnlich Nektar in alter Nomenklatur)\n- **Level 2 — Mildly Thick**: Sirup-Konsistenz\n- **Level 3 — Moderately Thick**: Honig-ähnlich, läuft langsam\n- **Level 4 — Extremely Thick**: Pudding-Konsistenz, Löffel steht\n\n**Nahrung (Level 3-7)** — Überschneidung mit Getränken bei 3/4:\n- **Level 3 — Liquidised**: dickflüssig wie Sahne\n- **Level 4 — Pureed**: Püree, kein Kauen nötig\n- **Level 5 — Minced & Moist**: fein gehackt + feucht\n- **Level 6 — Soft & Bite-Sized**: weich, mundgerecht geschnitten\n- **Level 7 — Regular**: normale Kost\n\n**Flow-Test**: Standardisierter Test mit **10-ml-Spritze**: Wie viel ml läuft in 10 Sek durch? Level 1: 1-4 ml übrig. Level 2: 4-8 ml übrig. Level 3: >8 ml übrig.\n\n**Warum IDDSI?** Weltweit einheitlich — eine Pflegekraft in Berlin, Istanbul oder Toronto meint genau dasselbe. Keine Missverständnisse bei Kostformanordnungen mehr. (IDDSI, 2019)",
          glossarBegriffe: ["IDDSI", "Flow-Test", "Dysphagie", "Andickungspulver"],
        },
        contentB1: {
          title: "IDDSI-Framework — internationale Konsistenzstandards",
          body: "**IDDSI** ist ein internationaler Standard für Dysphagie-Kost. Seit 2019. Er ersetzt alte Namen wie 'Nektar' oder 'Honig'. Stattdessen gibt es **Nummern (Level) 0 bis 7**.\n\n**Getränke** (Level 0 bis 4):\n- **Level 0** — dünn (Wasser, Saft)\n- **Level 1** — leicht angedickt\n- **Level 2** — angedickt wie Sirup\n- **Level 3** — dick wie Honig (läuft langsam)\n- **Level 4** — sehr dick wie Pudding (Löffel steht)\n\n**Essen** (Level 3 bis 7):\n- **Level 3** — dickflüssig wie Sahne\n- **Level 4** — Püree (kein Kauen)\n- **Level 5** — klein gehackt + feucht\n- **Level 6** — weich, mundgerecht geschnitten\n- **Level 7** — normale Kost\n\n**Flow-Test** prüft die Konsistenz: Eine 10-ml-Spritze füllen. Wie viel läuft in 10 Sekunden durch? Das zeigt das Level.\n\n**Warum gibt es IDDSI?** Weltweit **gleich**. Pflegekräfte in allen Ländern verstehen sich. Kein Durcheinander mehr bei Namen wie 'Nektar' oder 'Honig'.",
          glossarBegriffe: ["IDDSI", "Flow-Test"],
        },
      },
    },
    glossarBegriffe: ["IDDSI", "Flow-Test", "Dysphagie", "Andickungspulver"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: andicken-getraenke (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-andicken",
    themaId: "essen-anreichen",
    titel: "Getränke andicken — Schritt für Schritt",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Dein Patient hat Dysphagie und braucht angedickten Tee. Wie machst du das sicher? Was passiert im Becher, wenn du zu viel Pulver nimmst — oder zu wenig?",
      antwort:
        "Andickungspulver (z.B. Resource ThickenUp, Thick&Easy) — Menge nach Herstellerangabe in mg pro 100 ml Flüssigkeit. Einrühren, 2 Minuten warten, erneut umrühren, dann IDDSI-Level prüfen (Flow-Test). Zu viel = Klümpchen, zu wenig = zu dünn.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Andickungspulver** (z.B. Resource ThickenUp, Thick&Easy) — Menge nach Herstellerangabe in mg pro 100 ml Flüssigkeit. Einrühren, **2 Minuten warten**, erneut umrühren, dann IDDSI-Level prüfen (Flow-Test). Zu viel = Klümpchen, zu wenig = zu dünn.",
      textB1:
        "**Andickungspulver** gibt es als Fertigprodukt. Menge steht auf der Packung (mg pro 100 ml). So geht's: Pulver in die Flüssigkeit geben. Gut umrühren. **2 Minuten warten**. Nochmal rühren. Dann prüfen, ob es passt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "II.1",
        quellen: ["IDDSI (2019)", "Hersteller-Fachinfos (Nestlé, Fresenius, Nutricia)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-andicken",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Getränke andicken — Schritt für Schritt",
          body: "**Andickungsmittel** sind Pulver aus modifizierter Stärke oder Xanthan, die Flüssigkeit binden ohne den Geschmack stark zu verändern. Marken in Deutschland: Resource ThickenUp Clear (Nestlé), Thick&Easy (Fresenius), Nutilis Clear (Nutricia).\n\n**Dosierung**: Streng nach Herstellerangabe. Typisch: 1 gestrichener Löffel pro 100 ml für Level 2 (Mildly Thick), 2 Löffel für Level 3 (Moderately Thick), 3 Löffel für Level 4 (Extremely Thick). Genaue Werte **immer** auf der Packung nachlesen.\n\n**Vorgehen (Schritt-für-Schritt)**:\n1. Flüssigkeit in Becher füllen (Zimmertemperatur, keine kohlensäurehaltigen Getränke)\n2. Pulver gleichmäßig einstreuen, **nicht** klumpenweise\n3. 20-30 Sekunden kräftig umrühren\n4. **2 Minuten ruhen lassen** — Stärke/Xanthan quillt\n5. Nochmal kurz umrühren\n6. **IDDSI-Level prüfen**: Flow-Test oder mit Löffel — läuft/fällt es wie angefordert?\n\n**Häufige Fehler**:\n- Pulver auf warme Flüssigkeit: löst schlechter auf → Klumpen\n- Nicht warten: Konsistenz stimmt noch nicht, beim Schlucken dickt es nach\n- Kohlensäure: CO2 zerstört die Struktur\n\n**Medikamente** niemals im angedickten Getränk geben, außer Absprache mit Apotheke — manche Wirkstoffe binden an Stärke/Xanthan. (IDDSI 2019; Hersteller-Fachinfos)",
          glossarBegriffe: ["Andickungspulver", "IDDSI", "Flow-Test"],
        },
        contentB1: {
          title: "Getränke andicken — Schritt für Schritt",
          body: "**Andickungspulver** macht Getränke dick. Marken: Resource ThickenUp, Thick&Easy, Nutilis. Die Menge steht auf der Packung.\n\n**So geht's Schritt für Schritt**:\n\n1. Getränk in den Becher (normal kalt oder lauwarm, **keine Sprudel-Getränke**).\n2. Pulver **gleichmäßig** einstreuen (nicht alles auf einen Punkt).\n3. 20-30 Sekunden gut umrühren.\n4. **2 Minuten warten** — das Pulver quillt.\n5. Noch einmal kurz umrühren.\n6. **Prüfen**: Wie fließt es? Passt es zum IDDSI-Level, das der Patient braucht?\n\n**Typische Fehler**:\n- Pulver in heißes Getränk → **Klumpen**\n- Nicht warten → es dickt nach, der Patient bekommt zu dick\n- **Sprudel-Getränke** → Kohlensäure zerstört die Dicke\n\n**Medikamente** nie einfach reinmischen — frag die Apotheke.",
          glossarBegriffe: ["Andickungspulver", "Flow-Test"],
        },
      },
    },
    glossarBegriffe: ["Andickungspulver", "IDDSI", "Flow-Test"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: spezielle-becher (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-becher",
    themaId: "essen-anreichen",
    titel: "Spezielle Trinkhilfen bei Dysphagie",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Dein Patient mit Dysphagie darf seinen Kopf nicht nach hinten kippen. Aber beim Trinken aus einem normalen Becher muss der Kopf ganz hinten sein, um den letzten Schluck zu bekommen. Wie löst du das?",
      antwort:
        "Nasenschlitzbecher — Becher mit Ausschnitt für die Nase. Der Becher kann gekippt werden, ohne dass der Kopf nach hinten muss. Alternative: Ausgussbecher mit Schnabel (wie kleiner Krug). Für Halbseitenlähmung: Becher mit zwei Griffen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Nasenschlitzbecher** — Becher mit Ausschnitt für die Nase. Der Becher kann gekippt werden, **ohne dass der Kopf nach hinten muss**. Alternative: **Ausgussbecher** mit Schnabel (wie kleiner Krug). Für Halbseitenlähmung: Becher mit zwei Griffen.",
      textB1:
        "Es gibt besondere Becher für Dysphagie-Patienten. Der **Nasenschlitzbecher** hat einen Ausschnitt für die Nase. So kannst du den Becher kippen — **der Kopf bleibt unten**. Der **Ausgussbecher** hat einen kleinen Schnabel zum Trinken.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-08",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["DGG/DGN S1-Leitlinie Neurogene Dysphagie (2020)", "Hilfsmittelverzeichnis GKV"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-becher",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Spezielle Trinkhilfen bei Dysphagie",
          body: "Spezielle Trinkhilfen lösen das Problem: Normaler Becher erzwingt Kopf-Reklination am Ende — Aspirationsgefahr.\n\n**Nasenschlitzbecher**: Becher mit halbkreisförmigem Ausschnitt am oberen Rand, der Platz für die Nase schafft. Ergebnis: Der Becher kippt, der Boden geht nach oben, aber **der Kopf bleibt in leichter Vornüberneigung**. Typischer Einsatz: Schlaganfall, Parkinson, Demenz mit Dysphagie.\n\n**Ausgussbecher (Schnabelbecher)**: Deckel mit kleinem Ausguss. Kontrollierte kleine Mengen pro Schluck. Für Patienten mit Koordinationsproblemen, leichter Dysphagie oder Halbseitenlähmung. Nachteil: Vorsicht mit heißen Getränken — der Schnabel verdeckt die Temperatur.\n\n**Doppelgriff-Becher**: Zwei Henkel für beide Hände — bei Halbseitenlähmung, Zittern, Kraftminderung.\n\n**Trinkhalm**: Nur auf ärztliche/logopädische Empfehlung. Manche Patienten saugen zu schnell → Aspirationsgefahr. Andere profitieren, weil sie kontrollierter schlucken.\n\n**Pflegerichtlinie**: Das Hilfsmittel wird über Logopädie und Ergotherapie angepasst. Nicht einfach 'irgendeinen Becher' nehmen. (DGG/DGN 2020)",
          glossarBegriffe: ["Nasenschlitzbecher", "Ausgussbecher", "Reklination", "Aspiration"],
        },
        contentB1: {
          title: "Spezielle Trinkhilfen bei Dysphagie",
          body: "Es gibt 4 besondere Becher für Dysphagie-Patienten:\n\n**1. Nasenschlitzbecher**: Ein **Ausschnitt für die Nase** ist im Becher. So kannst du den Becher hochkippen — **der Kopf bleibt unten**. Gut bei Schlaganfall, Parkinson, Demenz.\n\n**2. Ausgussbecher (Schnabelbecher)**: Becher mit **Deckel und kleinem Schnabel**. Nur kleine Schlucke pro Mal. Gut bei Koordinationsproblemen oder Halbseitenlähmung. **Vorsicht bei heißen Getränken** — der Schnabel versteckt die Temperatur.\n\n**3. Doppelgriff-Becher**: **Zwei Henkel** — für beide Hände. Gut bei einseitiger Lähmung oder Zittern.\n\n**4. Trinkhalm**: **Nur auf Anordnung** — nicht einfach so. Manche Patienten saugen zu schnell und verschlucken sich.\n\nDie **Logopädie** oder **Ergotherapie** sagt, welcher Becher passt.",
          glossarBegriffe: ["Nasenschlitzbecher", "Ausgussbecher", "Reklination"],
        },
      },
    },
    glossarBegriffe: ["Nasenschlitzbecher", "Ausgussbecher", "Reklination", "Aspiration"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: kommunikation-beim-anreichen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-kommunikation",
    themaId: "essen-anreichen",
    titel: "Kommunikation beim Anreichen — KB II.1",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Çelik, 82 Jahre, isst ungern. Sie dreht den Kopf weg, wenn du den Löffel bringst. Wie sprichst du mit ihr — damit sie sich nicht gedrängt fühlt, aber trotzdem vielleicht einen Bissen isst? Finde drei konkrete Sätze.",
      antwort:
        "Kommunikationsregeln: Den Patienten fragen was er möchte (nicht für ihn entscheiden). Ankündigen vor jeder Handlung ('Ich bringe jetzt die Suppe'). Offene Fragen statt Ja/Nein ('Was schmeckt dir?'). Nicht zwei Dinge gleichzeitig — Essen ODER sprechen, nicht beides.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kommunikationsregeln: **1.** Den Patienten fragen was er möchte (nicht für ihn entscheiden). **2.** Ankündigen vor jeder Handlung ('Ich bringe jetzt die Suppe'). **3.** Offene Fragen statt Ja/Nein ('Was schmeckt dir?'). **4.** Nicht zwei Dinge gleichzeitig — Essen ODER sprechen, nicht beides.",
      textB1:
        "Reden beim Essen: **1.** Fragen, was er möchte — **nicht** einfach entscheiden. **2.** Sagen, was du machst ('Ich bringe jetzt Suppe'). **3.** **Offene Fragen** stellen ('Wie schmeckt es?') statt nur ja/nein. **4.** Nicht **essen und reden gleichzeitig**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-09",
        phase: 1,
        stepType: "dialog",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["WHO (2015) Mealtime Care and Dignity", "§ 1901a BGB"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-kommunikation",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Kommunikation beim Anreichen — KB II.1",
          body: "Essen ist eine **kommunikative Situation**, kein technischer Vorgang. KB II.1 (Kommunikation) steht im Zentrum.\n\n**Die fünf Kommunikationsregeln beim Anreichen**:\n\n**1. Autonomie wahren — fragen statt entscheiden**:\n'Möchtest du mit der Suppe anfangen oder lieber mit dem Brot?' statt 'Wir machen jetzt erst die Suppe.'\n\n**2. Ankündigen vor jeder Handlung**:\n'Ich komme jetzt mit dem Löffel.' Der Patient ist nicht überrascht, besonders bei Sehbehinderung oder Demenz wichtig.\n\n**3. Offene Fragen bei der Rückmeldung**:\n'Wie schmeckt dir das?' statt 'Schmeckt's?'. Offen eingeladen → mehr Information für dich.\n\n**4. Einmal-Aktivität — nie zwei Dinge gleichzeitig**:\n**Entweder** sprechen **oder** essen. Wer beim Kauen spricht, aspiriert leichter. Pausen sind Ruhemomente, keine Pflicht-Unterhaltung. Schweigen ist ok.\n\n**5. Tempo beachten — nonverbal lesen**:\nBlickkontakt zum Bissen, leichtes Nicken = bereit. Gesicht abwenden, Mund nicht öffnen, Hand heben = **Stopp**. Das Zeichen respektieren — immer. Niemals 'nur noch einen Löffel' gegen sichtbaren Widerstand.\n\n**Bei Ablehnung**: Nicht drängen. Pause machen. Anderes anbieten. Später wieder versuchen. **Essensverweigerung kann Zeichen sein für**: Schmerz, Übelkeit, schlechter Geschmack, psychische Belastung, sensorische Überforderung — oder die **Autonomie-Entscheidung**, die respektiert werden muss. (§ 1901a BGB Patientenverfügung)",
          glossarBegriffe: ["Aspiration", "Dysphagie"],
        },
        contentB1: {
          title: "Kommunikation beim Anreichen — KB II.1",
          body: "Essen ist **Kommunikation**, nicht nur eine Aufgabe. Fünf Regeln, wie du redest und zuhörst:\n\n**1. Fragen — nicht bestimmen**:\nSag: 'Möchtest du zuerst die Suppe oder das Brot?' — **nicht**: 'Jetzt essen wir die Suppe.'\n\n**2. Ansagen, was du machst**:\n'Ich komme jetzt mit dem Löffel.' So ist der Patient **nicht überrascht**. Besonders wichtig bei Demenz oder schlechtem Sehen.\n\n**3. Offene Fragen**:\nSag: '**Wie** schmeckt dir das?' — **nicht**: 'Schmeckt es?' Offene Fragen geben dir mehr Information.\n\n**4. Eins nach dem anderen — nie beides gleichzeitig**:\n**Entweder** reden **oder** essen. Wer beim Kauen spricht, verschluckt sich leicht. Pausen sind ok — auch **Schweigen** ist ok.\n\n**5. Auf Körpersprache achten**:\nKopf weg, Mund zu, Hand hoch = **STOPP**. Immer respektieren. Niemals 'nur noch einen Löffel' gegen den Willen.\n\n**Wenn er nicht will**: Nicht drängen. Pause. Etwas anderes anbieten. Später probieren. **Ablehnung kann heißen**: Schmerz, Übelkeit, anderer Geschmack, Stress — oder er **will einfach nicht**. Das ist sein Recht.",
          glossarBegriffe: ["Aspiration"],
        },
      },
    },
    glossarBegriffe: ["Aspiration", "Dysphagie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: kinder-essen-anreichen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-kinder",
    themaId: "essen-anreichen",
    titel: "Essen anreichen bei Kindern",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 4-jähriges Kind in der Kinderklinik will sein Gemüse nicht essen. Wie gehst du anders vor als bei einem Erwachsenen? Nenne drei Besonderheiten.",
      antwort:
        "Bei Kindern: Wunschkost wenn möglich, spielerisch anreichen ('Das Auto fährt in den Tunnel'), kein Druck — Abwehr wird respektiert, kein Zwang. Kleine Portionen öfter statt eine große. Eltern als Partner einbeziehen. Reihenfolge darf das Kind mitbestimmen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei Kindern: **Wunschkost** wenn möglich, **spielerisch** anreichen ('Das Auto fährt in den Tunnel'), **kein Druck** — Abwehr wird respektiert, kein Zwang. Kleine Portionen öfter statt eine große. Eltern als Partner einbeziehen. Reihenfolge darf das Kind mitbestimmen.",
      textB1:
        "Bei Kindern: **Wunschkost** — was mag es gern? **Spielerisch** — 'das Auto fährt in den Tunnel'. **Kein Druck** — wenn es **stop** sagt: stop. **Kleine Portionen** öfter, nicht eine große. Die **Eltern** fragen, was funktioniert.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "II.1",
        quellen: ["DGE (2024) Ernährung im Alter", "Expertenstandard Ernährungsmanagement DNQP 2017"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-kinder",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Essen anreichen bei Kindern",
          body: "Kinder sind keine kleinen Erwachsenen — das gilt auch beim Essen. **Entwicklungspsychologisch** ist Essensverweigerung ab ca. 2 Jahren (Trotzphase) bis Schulalter normal. Nicht jede Ablehnung ist ein Problem.\n\n**Pflegerische Prinzipien**:\n\n**Wunschkost**: Was mag das Kind? Mit Eltern besprechen. Kinderklinik-Küchen haben oft eine Wunschkost-Karte. Lieblingsessen ist nicht 'ungesund' in einer akuten Situation — erst mal essen, dann feintunen.\n\n**Spielerisch, nicht ernst**: 'Der Löffel ist ein Flugzeug und er landet gleich im Mund.' Kleine Geschichten um den Bissen. Fingerfood ab 1 Jahr: Karottensticks, Apfelschnitz, Käsewürfel — das Kind darf selbst.\n\n**Kein Druck, keine Bestrafung**: 'Du bekommst keinen Nachtisch, wenn du das nicht isst' ist **pädagogisch schädlich** und bei kranken Kindern zusätzlich belastend. Wenn Abwehr kommt: Pause. Anderes anbieten. Später.\n\n**Kleine Portionen, öfter**: Kinder haben kleine Mägen. 5-6 kleine Mahlzeiten pro Tag sind besser als 3 große.\n\n**Eltern einbeziehen**: Sie kennen das Kind. Sie wissen, welches Kuscheltier beim Essen hilft oder welches Lied hilft. Partner, nicht Störfaktor.\n\n**Wenn das Kind wirklich nicht isst** über mehrere Mahlzeiten: Kinderärztin informieren — es kann Schmerzen, Übelkeit, psychische Belastung (Klinikstress!) dahinter sein.",
          glossarBegriffe: ["Fingerfood"],
        },
        contentB1: {
          title: "Essen anreichen bei Kindern",
          body: "Kinder essen anders als Erwachsene. Bei Kindern ist Essensverweigerung **oft normal** — vor allem ab 2 Jahren (Trotzphase).\n\n**Was wichtig ist**:\n\n**Wunschkost**: Was mag das Kind? **Eltern fragen**. Die Küche hat oft eine Wunschkost-Karte. Das Lieblingsessen ist erlaubt — erst mal essen, dann langsam anderes.\n\n**Spielerisch**: 'Der Löffel ist ein Flugzeug — er fliegt in den Mund!' Kleine Geschichten. **Fingerfood** ab 1 Jahr: Karotten-Stäbchen, Apfel-Stücke, Käse — das Kind isst selbst.\n\n**Kein Druck, keine Strafe**: Sätze wie 'Dann kein Nachtisch' sind **schlecht**. Wenn es 'nein' sagt: **Pause**. Etwas anderes anbieten. Später probieren.\n\n**Kleine Portionen, oft**: 5 oder 6 kleine Mahlzeiten am Tag sind besser als 3 große. Kinder haben **kleine Mägen**.\n\n**Eltern mitmachen**: Sie kennen das Kind. Sie wissen, wann es gut isst. Sie sind **Partner**, kein Problem.\n\n**Wenn es gar nichts isst**: Über mehrere Mahlzeiten nichts — dann **Kinderärztin** informieren. Vielleicht hat es Schmerzen, Übelkeit oder **Stress** im Krankenhaus.",
          glossarBegriffe: ["Fingerfood"],
        },
      },
    },
    glossarBegriffe: ["Fingerfood"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: demenz-essen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-demenz",
    themaId: "essen-anreichen",
    titel: "Essen anreichen bei Demenz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr Wagner, 84, mit fortgeschrittener Demenz, sitzt vor einem Teller mit 3 Komponenten (Fleisch, Kartoffel, Gemüse). Er fängt nicht an zu essen, schaut nur. Was könnte das Problem sein? Was änderst du?",
      antwort:
        "Bei Demenz: Fingerfood (einfacher als Besteck), erkennbare Einzel-Speisen (1 Komponente pro Teller, keine Mischungen), ruhige Umgebung (keine Animation, kein Fernseher), vertraute Speisen aus Biografie. Gewicht engmaschig, bei Problemen MNA-Assessment.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei Demenz: **Fingerfood** (einfacher als Besteck), **erkennbare Einzel-Speisen** (1 Komponente pro Teller, keine Mischungen), **ruhige Umgebung** (keine Animation, kein Fernseher), **vertraute Speisen** aus Biografie. Gewicht engmaschig, bei Problemen MNA-Assessment und evtl. Essen-auf-Rädern-Alternative.",
      textB1:
        "Bei Demenz: **Fingerfood** (keine Gabel nötig). **Eine Speise auf einmal** (nicht alles auf einen Teller mischen). **Ruhe** (Fernseher aus, keine Musik). Speisen, die er **kennt** (aus seinem Leben). Bei Problemen: MNA-Test und andere Lösungen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["DGE (2024) Ernährung im Alter", "Expertenstandard Ernährungsmanagement DNQP 2017", "DGN S3-LL Demenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-demenz",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Essen anreichen bei Demenz",
          body: "Menschen mit Demenz haben spezifische Herausforderungen beim Essen, die mit dem Krankheitsverlauf zunehmen: **Agnosie** (Speisen nicht mehr als solche erkennen), **Apraxie** (Besteck nicht mehr benutzen können), **Antriebsstörungen**, gestörtes Sättigungsgefühl, Ablenkbarkeit.\n\n**Pflegerische Anpassungen**:\n\n**Fingerfood statt Besteck**: Ab mittlerer Demenz (Stadium 5-6 GDS) kann Besteck-Apraxie auftreten. Lösung: Alles was mit Fingern gegessen werden kann — Brötchen, Käsewürfel, Gurken-Sticks, hartgekochte Eier-Viertel, Obstspalten, belegte Mini-Brote. **Mundgerecht vorbereitet**. Das erhält Selbstständigkeit und Würde.\n\n**Eine Komponente pro Teller**: Bei Apraxie/Agnosie überfordert ein Teller mit Fleisch+Kartoffel+Sauce+Gemüse. Lösung: Nacheinander servieren — erst Suppe, dann Hauptgang in einzelnen Portionen, dann Nachtisch. Einzelne Speisen sind erkennbarer.\n\n**Ruhige Umgebung, keine Animation**: Demenz-Patienten sind schnell ablenkbar. **Fernseher aus**, keine Durchsagen, keine Besucher im Raum, kein Personal-Kommen-und-Gehen. Essen in kleinen Tischgruppen (Esszimmer, nicht Bett).\n\n**Biografie-orientierte Speisen**: 'Was hat Herr Wagner früher gern gegessen?' — Angehörige fragen. Vertraute Gerichte werden besser akzeptiert als Neues.\n\n**Assessment**: MNA (Mini Nutritional Assessment) alle 3 Monate. Gewichtsverlust >5% in 3 Monaten = Alarm. (DGE 2024; Expertenstandard Ernährungsmanagement DNQP 2017)",
          glossarBegriffe: ["Agnosie", "Apraxie", "MNA", "Fingerfood"],
        },
        contentB1: {
          title: "Essen anreichen bei Demenz",
          body: "Menschen mit **Demenz** haben beim Essen oft Probleme:\n- Sie **erkennen** das Essen nicht mehr (Agnosie)\n- Sie können **Besteck nicht mehr benutzen** (Apraxie)\n- Sie sind **schnell abgelenkt**\n- Sie fühlen **Hunger und Sättigung** nicht mehr richtig\n\n**Was hilft**:\n\n**Fingerfood**: Alles, was man **mit den Fingern** essen kann. Brötchen, Käsewürfel, Gurken-Sticks, Eier, Obst-Stücke. Mundgerecht vorbereiten. Er kann **selber** essen — das ist Würde.\n\n**Eine Speise pro Teller**: Nicht Fleisch + Kartoffel + Gemüse zusammen. Das ist zu viel. Nacheinander servieren: **Erst** Suppe, **dann** Hauptgang, **dann** Nachtisch.\n\n**Ruhe**: **Fernseher aus**. Keine laute Musik. Keine Besucher im Raum beim Essen. Demenz-Patienten können sich sonst nicht auf das Essen konzentrieren.\n\n**Vertraute Speisen**: Was hat er **früher** gern gegessen? **Angehörige fragen**. Bekannte Gerichte isst er besser.\n\n**Checken**: Alle 3 Monate **MNA-Test** (prüft Ernährung). Gewicht verliert er >5%? → Arzt informieren.",
          glossarBegriffe: ["Agnosie", "Apraxie", "MNA", "Fingerfood"],
        },
      },
    },
    glossarBegriffe: ["Agnosie", "Apraxie", "MNA", "Fingerfood"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: beobachtung-waehrend-essen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-beobachtung",
    themaId: "essen-anreichen",
    titel: "Beobachtung während des Essens — drei Ebenen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Während du einem Dysphagie-Patienten Essen anreichst, musst du **drei Dinge gleichzeitig** beobachten, um zu sehen, ob er sicher isst. Welche drei? Warum gerade diese?",
      antwort:
        "Drei Beobachtungsebenen parallel: 1. Mundbewegungen (Kauen, Zungenbewegung, Lippenverschluss). 2. Schluckakt (Heben/Senken des Adamsapfels, Stimme nach Schluck prüfen). 3. Atmung (Frequenz, Husten, Atemmuster).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Beobachtungsebenen parallel: **1. Mundbewegungen** (Kauen, Zungenbewegung, Lippenverschluss). **2. Schluckakt** (Heben/Senken des Adamsapfels, Stimme nach Schluck prüfen). **3. Atmung** (Frequenz, Husten, Atemmuster).",
      textB1:
        "Drei Dinge gleichzeitig beobachten: **1. Mund** (Kauen? Lippen geschlossen? Zunge bewegt sich?). **2. Schlucken** (Adamsapfel geht hoch? Stimme klar danach?). **3. Atmung** (normal? Husten? Schneller?).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-12",
        phase: 1,
        stepType: "matching",
        bloomLevel: 3,
        kompetenzbereich: "II.1",
        quellen: ["DGG/DGN S1-Leitlinie Neurogene Dysphagie (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-beobachtung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Beobachtung während des Essens — drei Ebenen",
          body: "Während des Anreichens bist du **aktive Beobachterin** — parallel zum Handeln. Drei Ebenen laufen gleichzeitig:\n\n**1. Mundbewegungen**:\n- **Lippenverschluss** beim Kauen — sonst tritt Speichel/Speise aus (Leaking)\n- **Kaubewegung** — kaut er oder schiebt er nur? Bei fehlendem Kauen → Konsistenz prüfen, evtl. Level anpassen\n- **Zungenbewegung** — Zunge formt Bolus und schiebt ihn Richtung Rachen\n- **Taschenbildung**: Bleibt Essen seitlich in der Wange? Zeichen für einseitige Schwäche\n\n**2. Schluckakt**:\n- **Adamsapfel** sichtbar heben und senken = Schluckreflex ausgelöst\n- **Verzögerung** >2 Sek zwischen Bissen-Nehmen und Schlucken = auffällig\n- **Stimme prüfen** nach Schluck: 'Sag mal Aaah' — klare oder gurgelnde Stimme?\n- **Mehrfach-Schluck**: Manche schlucken einen Bissen in 3-4 Portionen — das ist kompensatorisch ok, aber dokumentieren\n\n**3. Atmung**:\n- **Atemfrequenz** vor dem Essen merken, während Essen vergleichen\n- **Husten** = Warnzeichen, aber auch **Schutzreflex** (positiv bewerten)\n- **Zyanose**, Atemnot, Keuchen = sofort stopp\n- **Stille Aspiration** erkennen: Atmung verändert sich subtil, Patient hustet nicht\n\nNach dem Essen **zweimal prüfen**: Mund leer? Stimme klar nach 'Aaah'? Dann erst gehen. Pneumonie-Risiko erhöht bis 30 Min nach der Mahlzeit — Oberkörper hoch halten. (DGG/DGN 2020)",
          glossarBegriffe: ["Leaking", "Stille Aspiration", "Aspiration", "Dysphagie"],
        },
        contentB1: {
          title: "Beobachtung während des Essens — drei Ebenen",
          body: "Beim Anreichen **beobachtest du gleichzeitig** drei Dinge:\n\n**1. Mund**:\n- **Lippen zu**? (sonst läuft Essen raus = Leaking)\n- **Kaut er**? Oder schiebt er nur? Nicht-Kauen = Konsistenz anpassen\n- **Zunge** bewegt sich? Die Zunge schiebt das Essen nach hinten\n- **Bleibt Essen** in der Wange? Zeichen für einseitige Lähmung\n\n**2. Schlucken**:\n- **Adamsapfel** geht **hoch und runter** = er hat geschluckt\n- Dauert es **länger als 2 Sekunden**? Das ist auffällig\n- **Stimme prüfen**: 'Sag mal Aaah' — klar oder **nass/gurgelnd**?\n- **Mehrfach-Schlucken** (3-4 Mal für einen Bissen)? Das ist ok, aber aufschreiben\n\n**3. Atmung**:\n- **Atmung vor dem Essen** merken — dann mit während vergleichen\n- **Husten** = Warnung, aber auch **Schutz** (reinigt Lunge)\n- **Blau werden** (Zyanose), keuchen, Atemnot → **sofort stopp**\n- **Stille Aspiration**: keine Symptome, aber Atmung ändert sich leise\n\n**Nach dem Essen**: Mund leer? Stimme klar? **30 Minuten** Oberkörper hoch lassen — wegen Lungenentzündungs-Risiko.",
          glossarBegriffe: ["Leaking", "Stille Aspiration"],
        },
      },
    },
    glossarBegriffe: ["Leaking", "Stille Aspiration", "Aspiration", "Dysphagie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: dokumentation-essen-trinken (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "essen-anreichen-dokumentation",
    themaId: "essen-anreichen",
    titel: "Dokumentation Essen & Trinken",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Becker hat heute Mittag nur die Hälfte ihrer Portion gegessen, hat zweimal gehustet und 200 ml Tee getrunken. Was **musst** du dokumentieren — und warum gerade das? Was könnte fehlen?",
      antwort:
        "Dokumentieren: Essmenge (Portion in ¼, ½, ¾, voll oder in Gramm), Trinkmenge (ml exakt), Auffälligkeiten (Husten, Verweigerung, Schmerzen, Würge-Reflex), Konsistenz (IDDSI-Level, Andickung?), Selbstständigkeit (selbst/Teilhilfe/Vollhilfe). Unterschrift/Kürzel + Uhrzeit.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Dokumentieren: **Essmenge** (Portion in ¼, ½, ¾, voll oder in Gramm), **Trinkmenge** (ml exakt), **Auffälligkeiten** (Husten, Verweigerung, Schmerzen, Würge-Reflex), **Konsistenz** (IDDSI-Level, Andickung?), **Selbstständigkeit** (selbst/Teilhilfe/Vollhilfe). Unterschrift/Kürzel + Uhrzeit.",
      textB1:
        "Du schreibst auf: **Wie viel gegessen** (Viertel, Hälfte, ganz — oder Gramm), **wie viel getrunken** (in ml), **Was aufgefallen ist** (Husten, hat nicht gewollt, Schmerzen), **welche Konsistenz** (IDDSI-Level), **ob selbst** oder Hilfe. Dazu: dein Kürzel + Uhrzeit.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-essen-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "II.1",
        quellen: [
          "Expertenstandard Ernährungsmanagement (DNQP, 2. Aktualisierung 2017)",
          "§ 630f BGB Dokumentationspflicht",
        ],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-essen-dokumentation",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Dokumentation Essen & Trinken",
          body: "Dokumentation beim Essen/Trinken ist **rechtlich und pflegerisch Pflicht** — Grundlage für Ernährungsstatus-Bewertung, Flüssigkeitsbilanz, frühe Erkennung von Problemen.\n\n**Pflicht-Bestandteile pro Mahlzeit**:\n\n**1. Essmenge**: In Standardangaben (¼, ½, ¾, voll) oder in Gramm. Bei kritischen Patienten: genauer (z.B. '100 g Pudding von 200 g'). Gesamttagesmenge ist wichtig, nicht jede Mahlzeit exakt.\n\n**2. Trinkmenge**: In ml, **exakt**. Ziel bei gesunden Erwachsenen ca. 1,5-2 l/24h. Bilanz bei herz-/nierenkranken Patienten: Ein-/Ausfuhr-Bilanz.\n\n**3. Konsistenz (IDDSI-Level)**: Besonders bei Dysphagie. 'Tee Level 2 (mildly thick)', 'Kost Level 4 (pureed)'.\n\n**4. Selbstständigkeit**: selbstständig / mit Teilhilfe / mit Vollhilfe. Für Assessment der Pflegestufe und Mobilitätsfortschritt wichtig.\n\n**5. Auffälligkeiten**: Husten, Verweigerung, Würge-Reflex, Schmerzen beim Schlucken, Leaking, lange Essdauer, psychisches Befinden ('apathisch', 'freut sich auf Nachtisch').\n\n**6. Assessment-Parameter** (je nach Patient): Gewicht wöchentlich, MNA alle 3 Monate, BMI, Hautzeichen (Dehydration, Mangelernährung).\n\n**7. Kürzel + Uhrzeit + Datum**: Pflicht — §§ 630f BGB Dokumentationspflicht.\n\n**Warum so viel?** Ernährung steuert Wundheilung, Immunsystem, Medikamentenwirkung, Pflegeverlauf. Eine schlechte Dokumentation macht Probleme unsichtbar — z.B. schleichende Exsikkose durch zu wenig Trinken, die erst beim Sturz auffällt. (Expertenstandard Ernährungsmanagement DNQP 2017; § 630f BGB)",
          glossarBegriffe: ["Exsikkose", "MNA", "IDDSI", "Expertenstandard Ernährungsmanagement"],
        },
        contentB1: {
          title: "Dokumentation Essen & Trinken",
          body: "Dokumentation beim Essen ist **Pflicht** — nach dem Gesetz (§ 630f BGB) und für gute Pflege.\n\n**Was musst du aufschreiben**:\n\n**1. Essmenge**: **Wie viel gegessen**? Ein Viertel, die Hälfte, alles? Oder in Gramm bei kritischen Patienten.\n\n**2. Trinkmenge**: In **ml**, **genau**. Ziel: 1,5-2 Liter am Tag. Bei Herz- oder Nierenkranken: Ein-/Ausfuhr-Bilanz.\n\n**3. Konsistenz**: Welches **IDDSI-Level**? 'Tee Level 2', 'Essen Level 4 (Püree)'.\n\n**4. Selbstständigkeit**: selbst / mit etwas Hilfe / mit ganz viel Hilfe?\n\n**5. Auffälligkeiten**: **Husten**, **Verweigerung**, **Schmerzen**, Essen ist lange im Mund, Essen läuft raus, Stimmung ('freut sich', 'ist traurig').\n\n**6. Messwerte** (je nach Patient): **Gewicht** jede Woche, **MNA-Test** alle 3 Monate.\n\n**7. Kürzel + Uhrzeit + Datum**: **immer** — das ist **Pflicht**.\n\n**Warum so viel?** Gute Ernährung hilft bei: **Wundheilung**, **Immunsystem**, **Medikamente wirken richtig**, **keine Stürze** (wegen Austrocknung). Wer schlecht dokumentiert, merkt Probleme zu spät — zum Beispiel wenn jemand zu wenig trinkt und dann stürzt.",
          glossarBegriffe: ["Exsikkose", "MNA", "IDDSI"],
        },
      },
    },
    glossarBegriffe: ["Exsikkose", "MNA", "IDDSI", "Expertenstandard Ernährungsmanagement"],
    karteikarten: [],
  },
];

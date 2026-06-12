// CE-02 Thema Harnausscheidung & Inkontinenz — Wissensbausteine (20 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/harnausscheidung/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥3)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (Bloom 1-2, alle Schüler)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_HARNAUSSCHEIDUNG_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: urin-normalwerte (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-urin-normalwerte",
    themaId: "harnausscheidung",
    titel: "Urin-Normalwerte: Menge, Farbe, Geruch, pH",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du schaust in die Toilette eines Patienten: Der Urin ist klar und strohgelb. Was sagt dir das über den Menschen — und was, wenn er plötzlich dunkelbraun wird?",
      antwort:
        "Normalurin ist klar, strohgelb, pH 5-7, spezifisches Gewicht 1010-1025 g/l, Menge 1500-2000 ml/24h. Dunkelbraun deutet auf Hämaturie, Dehydration oder Leberproblem hin. Die Farbe ist kostenloses Assessment. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Normalurin ist klar, strohgelb, pH 5-7, spezifisches Gewicht 1010-1025 g/l. Ein Erwachsener scheidet pro Tag 1500-2000 ml aus. Die Farbe verrät viel: dunkelgelb = zu wenig getrunken, rötlich = Blut oder Rote Bete möglich.",
      textB1:
        "Gesunder Urin sieht so aus: klar, hellgelb. Ein Erwachsener macht pro Tag etwa 1,5 bis 2 Liter Urin. Die Farbe sagt dir viel: dunkel = du trinkst zu wenig. Rot = vielleicht Blut. Orange = vielleicht Leberproblem.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023", "ICS International Continence Society"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-normalwerte",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Urin-Normalwerte: Menge, Farbe, Geruch, pH",
          body: "Die Urinbeurteilung ist ein tägliches Pflege-Assessment — mit bloßem Auge, ohne Labor. Merke dir diese Normalwerte:\n\n**Menge (Erwachsener):** 1500-2000 ml in 24 Stunden. Bei Kindern deutlich weniger, altersabhängig.\n\n**Farbe:** Klar und strohgelb. Die Farbe kommt vom Urochrom. Je konzentrierter, desto dunkler.\n\n**Geruch:** Leicht aromatisch, nicht unangenehm.\n\n**pH-Wert:** 5 bis 7 (leicht sauer). Mischkost verschiebt eher nach sauer, vegetarische Kost nach alkalisch.\n\n**Spezifisches Gewicht:** 1010-1025 g/l. Höher bei Exsikkose, niedriger bei hoher Trinkmenge.\n\n**Schaum:** Leichter, schnell zerfallender Schaum ist normal. Stehender, fester Schaum = möglicher Hinweis auf Eiweiß im Urin. (AWMF 2023)",
          glossarBegriffe: ["Miktion", "Oligurie", "Polyurie"],
        },
        contentB1: {
          title: "Urin-Normalwerte: Menge, Farbe, Geruch, pH",
          body: "So sieht gesunder Urin aus. Lern die Werte auswendig — du nutzt sie jeden Tag:\n\n**Menge:** Ein Erwachsener macht **1,5 bis 2 Liter** pro Tag.\n\n**Farbe:** Klar und hellgelb. Dunkler heißt: zu wenig getrunken.\n\n**Geruch:** Leicht, nicht stark. Starker Geruch ist ein Warnsignal.\n\n**pH-Wert:** 5 bis 7 (leicht sauer).\n\n**Schaum:** Ein bisschen Schaum ist okay. Viel Schaum = vielleicht Eiweiß im Urin — Arzt fragen.\n\nDu brauchst kein Labor dafür. Du schaust hin — und merkst dir, was normal ist.",
          glossarBegriffe: ["Miktion", "Oligurie", "Polyurie"],
        },
      },
    },
    glossarBegriffe: ["Miktion", "Oligurie", "Polyurie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: pathologische-urinmenge (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-pathologische-urinmenge",
    themaId: "harnausscheidung",
    titel: "Pathologische Urinmengen: Oligurie, Anurie, Polyurie",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K. hat in den letzten 24 Stunden nur 300 ml Urin im Messbecher. Warum ist das ein Alarmsignal — und wovor warnt dich das?",
      antwort:
        "300 ml in 24h ist Oligurie (<500 ml/24h). Ursachen: Exsikkose, akutes Nierenversagen, Herzinsuffizienz, Schock. Die Pflege führt die Bilanz — sie erkennt es zuerst. Sofort Arzt informieren, Vitalzeichen messen, Trinkmenge prüfen. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pathologische Mengen: Oligurie = unter 500 ml/24h (Nierenversagen, Exsikkose, Schock). Anurie = unter 100 ml/24h (Notfall). Polyurie = über 2500 ml/24h (Diabetes mellitus, Diabetes insipidus, Diuretika). Jede Abweichung dokumentieren.",
      textB1:
        "Diese 3 Wörter musst du kennen: Oligurie = zu wenig Urin (unter 500 ml/Tag). Anurie = fast kein Urin (unter 100 ml/Tag — Notfall!). Polyurie = zu viel Urin (über 2,5 Liter/Tag). Alles dokumentieren und Arzt melden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-urinmenge",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pathologische Urinmengen: Oligurie, Anurie, Polyurie",
          body: "Die Urinmenge ist ein harter klinischer Parameter. Drei pathologische Muster musst du sofort erkennen:\n\n**Oligurie — unter 500 ml in 24 Stunden.** Ursachen: Flüssigkeitsmangel (Exsikkose), akutes Nierenversagen, Herzinsuffizienz, Schock. Maßnahme: Trinkmenge prüfen, Vitalzeichen, Haut-Turgor, Arzt informieren.\n\n**Anurie — unter 100 ml in 24 Stunden.** Das ist ein **Notfall**. Entweder die Niere produziert nichts (Nierenversagen) oder der Abfluss ist blockiert (Harnverhalt, Stein). Sofort Arzt alarmieren.\n\n**Polyurie — über 2500 ml in 24 Stunden.** Häufige Ursachen: entgleister Diabetes mellitus (Zucker zieht Wasser), Diabetes insipidus (Hormonmangel), Diuretika-Therapie. Kombiniert mit Polydipsie (starker Durst) → an Diabetes denken. Blutzucker messen. (AWMF 2023)",
          glossarBegriffe: ["Oligurie", "Anurie", "Polyurie"],
        },
        contentB1: {
          title: "Pathologische Urinmengen: Oligurie, Anurie, Polyurie",
          body: "Drei Wörter — drei verschiedene Probleme:\n\n**Oligurie** = weniger als 500 ml Urin pro Tag. Ursache: zu wenig getrunken, Niere krank, Herz schwach. Was tun: Trinkmenge prüfen, Vitalzeichen messen, Arzt informieren.\n\n**Anurie** = weniger als 100 ml pro Tag. Das ist ein **Notfall**. Entweder macht die Niere nichts mehr. Oder der Urin kann nicht raus (Stein, Verstopfung). Sofort Arzt rufen.\n\n**Polyurie** = mehr als 2,5 Liter pro Tag. Oft ist Zucker im Blut zu hoch (Diabetes). Der Patient hat auch starken Durst. Blutzucker messen — Arzt rufen.",
          glossarBegriffe: ["Oligurie", "Anurie", "Polyurie"],
        },
      },
    },
    glossarBegriffe: ["Oligurie", "Anurie", "Polyurie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: urinfarbe-und-geruch (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-farbe-geruch",
    themaId: "harnausscheidung",
    titel: "Urinfarbe und -geruch: klinische Bedeutung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du leerst den Dauerkatheter. Der Urin riecht süßlich wie Nagellackentferner. Was geht dir durch den Kopf — und welchen Wert willst du sofort wissen?",
      antwort:
        "Süßlich riechender Urin = Ketonurie — Hinweis auf entgleisten Diabetes mellitus (Ketoazidose möglich!). Sofort Blutzucker messen, Arzt informieren. Dieser Geruch ist nie normal und immer ein Warnsignal. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Urin ist ein Fenster zum Stoffwechsel. Dunkelgelb = Dehydration. Rötlich = Blut (Hämaturie), Rhabarber oder Medikamente. Orange = Bilirubin (Leber). Grünlich = bestimmte Medikamente. Milchig = Eiter (Pyurie). Süßlich riechend = Ketonurie (Diabetes!).",
      textB1:
        "Die Farbe vom Urin verrät viel. Dunkel = zu wenig getrunken. Rot = Blut oder Rote Bete. Orange = vielleicht Leberproblem. Grün = oft Medikamente. Milchig = Infektion. Süß, wie Nagellack = Achtung Diabetes — Blutzucker messen!",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-03",
        phase: 1,
        stepType: "matching",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-farbe-geruch",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Urinfarbe und -geruch: klinische Bedeutung",
          body: "Die Urinbeurteilung läuft bei jeder Schicht mit — du musst nichts extra tun, nur **hinschauen und riechen**.\n\n**Farbe — was sie verrät:**\n- **Dunkelgelb / bernsteinfarben** → Exsikkose, zu wenig Trinkmenge.\n- **Rötlich / rotbraun** → **Hämaturie** (Blut) ist der wichtigste Grund. Aber auch Rote Bete, Rhabarber, Rifampicin färben so. Immer Teststreifen.\n- **Orange** → erhöhtes Bilirubin → Leber- oder Gallenwegsproblem.\n- **Grün bis blaugrün** → Medikamente (z.B. Propofol), selten Pseudomonas.\n- **Milchig-weißlich** → **Pyurie** (Eiter, Harnwegsinfekt) oder Chylurie.\n\n**Geruch — typische Muster:**\n- **Süßlich, nach Nagellack / Obst** → **Ketonurie** (Hinweis auf entgleisten Diabetes — Blutzucker messen!).\n- **Stechend ammoniakalisch** → Harnwegsinfekt, bakterielle Zersetzung.\n- **Faulig** → Infektion oder Fistel zum Darm.\n\nJede Auffälligkeit dokumentieren und dem Arzt melden. (AWMF 2023)",
          glossarBegriffe: ["Hämaturie", "Ketonurie", "Proteinurie"],
        },
        contentB1: {
          title: "Urinfarbe und -geruch: klinische Bedeutung",
          body: "Schau genau hin und riech — das reicht oft schon.\n\n**Farbe:**\n- **Dunkel gelb**: Patient trinkt zu wenig.\n- **Rot**: vielleicht Blut. Aber auch Rote Bete oder Medikamente. Nachfragen!\n- **Orange**: vielleicht Leberproblem.\n- **Grün**: oft von Medikamenten.\n- **Milchig weiß**: oft Eiter oder Bakterien — Harnwegsinfekt.\n\n**Geruch:**\n- **Süß, wie Nagellackentferner**: Achtung — vielleicht Diabetes mit hohem Zucker. Blutzucker messen!\n- **Stark nach Ammoniak**: oft Harnwegsinfekt.\n- **Faul, stinkend**: Infektion oder Verbindung zum Darm.\n\nAlles dokumentieren. Arzt informieren, wenn es neu ist.",
          glossarBegriffe: ["Hämaturie", "Ketonurie"],
        },
      },
    },
    glossarBegriffe: ["Hämaturie", "Ketonurie", "Proteinurie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: miktionsstoerungen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-miktionsstoerungen",
    themaId: "harnausscheidung",
    titel: "Miktionsstörungen: Pollakisurie, Nykturie, Dysurie, Strangurie, Harnverhalt",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr B. sagt: 'Ich muss alle 30 Minuten aufs Klo, aber es kommt nur ein Tropfen — und es brennt.' Welche 3 Wörter beschreiben genau, was Herr B. erlebt?",
      antwort:
        "Pollakisurie (häufiges Wasserlassen in kleinen Portionen), Dysurie (schmerzhaftes Wasserlassen — brennend), Strangurie (krampfartig). Diese drei kommen klassisch beim Harnwegsinfekt zusammen. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Miktionsstörungen haben eigene Fachbegriffe: Pollakisurie = häufiges Wasserlassen in kleinen Mengen. Nykturie = nächtliches Wasserlassen (>1x/Nacht). Dysurie = schmerzhaftes Wasserlassen. Strangurie = schmerzhaft-krampfartig. Harnverhalt = Blase voll, keine Entleerung.",
      textB1:
        "Du brauchst diese 5 Wörter: Pollakisurie = oft aufs Klo, wenig Urin. Nykturie = nachts aufstehen zum Pipi. Dysurie = es tut weh beim Pipi. Strangurie = es krampft dabei. Harnverhalt = Blase voll, aber nichts kommt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-04",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023", "ICS International Continence Society"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-miktionsstoerungen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Miktionsstörungen: Pollakisurie, Nykturie, Dysurie, Strangurie, Harnverhalt",
          body: "Die Miktionsstörungen sind ein Prüfungsthema — die Fachbegriffe musst du sicher beherrschen:\n\n**Pollakisurie** — häufiges Wasserlassen in **kleinen Portionen**. Die Gesamtmenge bleibt oft normal. Typisch bei Harnwegsinfekt, Reizblase, Prostatahyperplasie.\n\n**Nykturie** — nächtliches Wasserlassen (mehr als 1 Mal pro Nacht). Ursachen: Herzinsuffizienz, Prostatavergrößerung, Diabetes.\n\n**Dysurie** — **schmerzhaftes** Wasserlassen, meist brennend. Klassisches Zeichen des Harnwegsinfekts.\n\n**Strangurie** — **schmerzhaft-krampfartiges** Wasserlassen. Verstärkung der Dysurie, oft bei Zystitis.\n\n**Harnverhalt (Retention)** — die Blase ist gefüllt, kann aber nicht entleert werden. Blase tastbar, druckschmerzhaft. Ursachen: Prostatahyperplasie, Medikamente (Anticholinergika, Opioide), nach OPs. **Notfall** — katheterisieren. (AWMF 2023)",
          glossarBegriffe: ["Pollakisurie", "Harnverhalt"],
        },
        contentB1: {
          title: "Miktionsstörungen: Pollakisurie, Nykturie, Dysurie, Strangurie, Harnverhalt",
          body: "Diese 5 Fachwörter brauchst du für das ganze Berufsleben:\n\n**Pollakisurie** — oft aufs Klo gehen müssen, aber nur wenig Urin kommt. Oft bei Blasenentzündung.\n\n**Nykturie** — nachts mehr als 1-mal aufstehen, um Urin zu lassen.\n\n**Dysurie** — **Schmerz** beim Pipi machen. Brennt. Klassisch: Harnwegsinfekt.\n\n**Strangurie** — **Krampf** beim Pipi machen. Schlimmer als Dysurie.\n\n**Harnverhalt** — die Blase ist **ganz voll**, aber der Patient kann nicht pinkeln. Blase ist tastbar, tut weh. Das ist ein **Notfall**. Der Arzt muss einen Katheter legen.",
          glossarBegriffe: ["Pollakisurie", "Harnverhalt"],
        },
      },
    },
    glossarBegriffe: ["Pollakisurie", "Harnverhalt"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: urin-pathologische-beimengungen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-beimengungen",
    themaId: "harnausscheidung",
    titel: "Urin-Teststreifen: pathologische Beimengungen deuten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was vermutest du, wenn der Teststreifen im Urin Eiweiß, Zucker und Blut gleichzeitig anzeigt? Denk an 3 mögliche Organsysteme.",
      antwort:
        "Eiweiß (Proteinurie) = Niere (Glomerulus geschädigt), Zucker (Glukosurie) = Diabetes mellitus (Blutzucker über Nierenschwelle ~180 mg/dl), Blut (Hämaturie) = Harnwege (Infekt, Stein, Tumor). Alle drei gemeinsam kann auch auf diabetische Nephropathie hindeuten. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Teststreifen-Befunde: Hämaturie (Blut) bei HWI, Steinen, Tumor. Proteinurie (Eiweiß) bei Nierenerkrankung, Schwangerschafts-Präeklampsie. Glukosurie (Zucker) bei Diabetes. Leukozyturie + Nitrit bei HWI. Ketonurie bei Diabetes-Entgleisung oder Hungern.",
      textB1:
        "Der Teststreifen zeigt dir: Blut (Hämaturie — Niere, Blase, Stein). Eiweiß (Proteinurie — Niere kaputt). Zucker (Glukosurie — Diabetes). Leukozyten + Nitrit (Harnwegsinfekt). Ketone (Diabetes entgleist oder Hunger).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-beimengungen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Urin-Teststreifen: pathologische Beimengungen deuten",
          body: "Der Urin-Teststreifen ist deine schnellste Diagnostik. Diese 5 Befunde musst du deuten können:\n\n**Hämaturie — Blut im Urin.** Makrohämaturie (sichtbar rot) oder Mikrohämaturie (nur im Test). Ursachen: Harnwegsinfekt, Nierensteine, Tumor, Verletzung, Gerinnungsstörung. Immer ärztlich abklären.\n\n**Proteinurie — Eiweiß im Urin.** Die Niere filtert normalerweise kein Eiweiß aus. Befund = Niere krank (Glomerulonephritis, diabetische Nephropathie) oder in der Schwangerschaft **Präeklampsie** — gefährlich!\n\n**Glukosurie — Zucker im Urin.** Ab Blutzucker ca. 180 mg/dl wird die Niere 'durchlässig'. Hinweis auf **Diabetes mellitus**.\n\n**Leukozyturie + Nitrit** — weiße Blutkörperchen und Nitrit deuten auf **Harnwegsinfekt**. Nitrit entsteht durch bakterielle Aktivität.\n\n**Ketonurie** — Ketonkörper im Urin. Bei entgleistem Diabetes (Ketoazidose — lebensgefährlich!), langem Fasten oder extremem Sport. (AWMF 2023)",
          glossarBegriffe: ["Hämaturie", "Proteinurie", "Glukosurie", "Ketonurie"],
        },
        contentB1: {
          title: "Urin-Teststreifen: pathologische Beimengungen deuten",
          body: "Der Teststreifen sagt dir schnell, was im Urin ist:\n\n**Blut (Hämaturie)** — kann viele Gründe haben: Harnwegsinfekt, Nierenstein, Tumor, Verletzung. Immer zum Arzt.\n\n**Eiweiß (Proteinurie)** — die Niere ist normalerweise ein Sieb: Eiweiß bleibt im Blut. Wenn Eiweiß im Urin ist, ist die Niere krank. In der Schwangerschaft ist es ein **Warnzeichen**.\n\n**Zucker (Glukosurie)** — Hinweis auf **Diabetes**. Blutzucker messen!\n\n**Leukozyten + Nitrit** — Harnwegsinfekt.\n\n**Ketone (Ketonurie)** — Diabetes ist stark entgleist, oder der Patient isst lange nichts. Arzt rufen!",
          glossarBegriffe: ["Hämaturie", "Proteinurie", "Glukosurie", "Ketonurie"],
        },
      },
    },
    glossarBegriffe: ["Hämaturie", "Proteinurie", "Glukosurie", "Ketonurie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: kontinenz-definition (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-kontinenz-definition",
    themaId: "harnausscheidung",
    titel: "Kontinenz und Inkontinenz: Definition nach ICS und DNQP",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wann würdest du einen Menschen 'kontinent' nennen? Schreib in eigenen Worten, was das genau heißt — und was es NICHT heißt.",
      antwort:
        "Kontinenz = willkürliche Kontrolle über Zeitpunkt und Ort der Blasenentleerung. Drei Bedingungen: Harndrang spüren, ihn aufschieben können, rechtzeitig die Toilette erreichen. Inkontinenz = jeder unfreiwillige Harnverlust mit Leidensdruck — kein normales Alterssymptom, sondern behandelbares Problem. (ICS; DNQP 2014)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kontinenz ist nach ICS die Fähigkeit, bewusst zu entscheiden, wann und wo die Blase entleert wird. Inkontinenz = unwillkürlicher Harnverlust, der für die Person ein Problem darstellt. Inkontinenz ist kein Alter, sondern ein behandelbares Symptom.",
      textB1:
        "Kontinenz heißt: du entscheidest selbst, wann und wo du Urin lässt. Nicht die Blase entscheidet — du entscheidest. Inkontinenz heißt: Urin geht ungewollt ab. Das ist nicht normal im Alter. Man kann es behandeln.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz", "ICS International Continence Society"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-kontinenz-def",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Kontinenz und Inkontinenz: Definition nach ICS und DNQP",
          body: "Der Expertenstandard des DNQP (2014) setzt den Rahmen für unser pflegerisches Handeln:\n\n**Kontinenz** ist die Fähigkeit, **bewusst** und **willkürlich** zu entscheiden, wann, wo und wie die Blase entleert wird. Drei Bedingungen müssen erfüllt sein: die Person spürt den Harndrang, sie kann ihn **aufschieben**, und sie erreicht rechtzeitig die Toilette.\n\n**Inkontinenz** definiert die ICS (International Continence Society) als **jeden unfreiwilligen Harnverlust**, der für die betroffene Person ein **soziales oder hygienisches Problem** darstellt. Der Leidensdruck gehört zur Definition.\n\nPflegerisch wichtig: Inkontinenz ist **kein normales Alterssymptom**, sondern ein **behandelbares Problem**. Etwa jede dritte Frau über 65 und jeder fünfte Mann über 65 sind betroffen — aber viele schweigen aus Scham. (DNQP 2014; ICS)",
          glossarBegriffe: ["Kontinenz", "Inkontinenz"],
        },
        contentB1: {
          title: "Kontinenz und Inkontinenz: Definition nach ICS und DNQP",
          body: "So definieren wir Kontinenz und Inkontinenz:\n\n**Kontinenz** heißt: Du hast die Blase unter Kontrolle. Drei Sachen müssen klappen:\n1. Du spürst, wann du zur Toilette musst.\n2. Du kannst es **aushalten** (aufschieben).\n3. Du kommst rechtzeitig zur Toilette.\n\n**Inkontinenz** heißt: Urin geht ungewollt ab. Das ist ein **Leiden** für den Menschen — sozial und mit der Hygiene.\n\nWichtig: Inkontinenz ist **nicht einfach das Alter**. Es ist ein **Problem, das man behandeln kann**. Viele ältere Menschen haben Inkontinenz, aber sie schämen sich und reden nicht darüber. Du sprichst es aktiv an.",
          glossarBegriffe: ["Kontinenz", "Inkontinenz"],
        },
      },
    },
    glossarBegriffe: ["Kontinenz", "Inkontinenz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: belastungsinkontinenz (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-belastungsinkontinenz",
    themaId: "harnausscheidung",
    titel: "Belastungsinkontinenz: Mechanismus, Ursachen, Therapie",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau L., 62, lacht herzhaft über einen Witz — und merkt, dass sie einen Schluck Urin verloren hat. Beim nächsten Husten genauso. Welche Inkontinenzform tippst du — und was ist die anatomische Schwachstelle?",
      antwort:
        "Belastungsinkontinenz. Urinverlust bei körperlicher Belastung (Husten, Niesen, Lachen, Heben) ohne vorherigen Harndrang. Anatomische Schwachstelle: Beckenboden — nach Schwangerschaften, Wechseljahren (Östrogenmangel), Übergewicht. Therapie 1. Wahl: Beckenbodentraining. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Belastungsinkontinenz (früher 'Stressinkontinenz') = Urinverlust bei körperlicher Belastung ohne Harndrang: Husten, Niesen, Lachen, Sport, Heben. Ursache: Beckenbodenschwäche — nach Geburten, Wechseljahre, Übergewicht, Prostata-OP. Therapie: Beckenbodentraining.",
      textB1:
        "Belastungsinkontinenz = Urin geht ab bei Anstrengung: Husten, Niesen, Lachen, schweres Heben. Kein Harndrang vorher! Ursache: Der Beckenboden ist schwach. Häufig nach Geburten, in den Wechseljahren oder bei Übergewicht. Training hilft.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023", "ICS International Continence Society"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-belastungsinkontinenz",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Belastungsinkontinenz: Mechanismus, Ursachen, Therapie",
          body: "Die **Belastungsinkontinenz** (ICS-Terminologie) ist die häufigste Form bei Frauen. Früher hieß sie 'Stressinkontinenz' — das Wort 'Stress' meint hier **körperlichen Druck**, nicht Psyche.\n\n**Mechanismus:** Bei Husten, Niesen, Lachen, Sport oder Heben steigt der Druck in der Bauchhöhle und damit auf die Blase. Ein **gesunder Beckenboden** würde den Urin durch Gegenspannung des Schließmuskels halten. Ist der Beckenboden geschwächt — nach Schwangerschaften und Geburten, in den Wechseljahren (Östrogenmangel), bei Übergewicht, nach Prostata-OP beim Mann — reicht diese Gegenspannung nicht mehr.\n\n**Leitsymptom:** Urinverlust **ohne Harndrang**.\n\n**Grade:** Grad 1 (bei Husten/Niesen), Grad 2 (bei Gehen/Treppensteigen), Grad 3 (im Liegen, in Ruhe).\n\n**Therapie:** **Beckenbodentraining** (Kegel-Übungen) ist Mittel der ersten Wahl, Gewichtsreduktion, Östrogensalbe, bei Versagen OP. (AWMF 2023)",
          glossarBegriffe: ["Belastungsinkontinenz"],
        },
        contentB1: {
          title: "Belastungsinkontinenz: Mechanismus, Ursachen, Therapie",
          body: "**Belastungsinkontinenz** ist die häufigste Inkontinenz bei Frauen.\n\n**Was passiert:** Bei **Anstrengung** (Husten, Niesen, Lachen, Heben, Sport) drückt es auf die Blase. Der **Beckenboden** (die Muskeln unten im Becken) müssten dagegen halten. Sind die Muskeln schwach, geht Urin ab.\n\n**Wichtig:** Die Frau hat **keinen Drang** vorher. Sie sagt: 'Ich musste gar nicht — es war einfach weg.'\n\n**Warum schwacher Beckenboden?** Nach Geburten, in den Wechseljahren, bei Übergewicht. Bei Männern oft nach Prostata-OP.\n\n**Was hilft:** **Beckenbodentraining** (Kegel-Übungen) — das kann jede Frau lernen. Abnehmen hilft. Bei schweren Fällen: kleine OP.",
          glossarBegriffe: ["Belastungsinkontinenz"],
        },
      },
    },
    glossarBegriffe: ["Belastungsinkontinenz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: dranginkontinenz (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-dranginkontinenz",
    themaId: "harnausscheidung",
    titel: "Dranginkontinenz: Detrusor-Überaktivität, Trigger, Therapie",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr N. erzählt: 'Ich schließe die Wohnungstür auf — und schaffe es nicht mehr bis zum WC. Der Drang kommt plötzlich, wie ein Schalter.' Welche Inkontinenzform — und was macht die Blase da?",
      antwort:
        "Dranginkontinenz (Urge Incontinence). Der Detrusor-Muskel zieht sich unwillkürlich zusammen (überaktive Blase, OAB). Typische Trigger: Schlüssel im Schloss (Latchkey-Urgency), Wasserrauschen, Kälte. Therapie: Blasentraining (Intervalle verlängern), Anticholinergika, ggf. Botox. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Dranginkontinenz (Urge) = plötzlicher, starker Harndrang, der nicht unterdrückbar ist — Urinverlust auf dem Weg zur Toilette. Ursache: überaktiver Detrusor-Muskel (zieht sich unkontrolliert zusammen). Trigger: Schlüssel, Wasserrauschen, Kälte. Therapie: Blasentraining.",
      textB1:
        "Dranginkontinenz = plötzlicher, sehr starker Drang. Du schaffst es nicht mehr zur Toilette. Ursache: Der Blasenmuskel (Detrusor) zieht sich unkontrolliert zusammen. Bekannte Auslöser: Schlüssel umdrehen, Wasser hören, Kälte. Training hilft.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-08",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023", "ICS International Continence Society"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-dranginkontinenz",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Dranginkontinenz: Detrusor-Überaktivität, Trigger, Therapie",
          body: "Die **Dranginkontinenz** (englisch: Urge Incontinence) ist die zweithäufigste Form — besonders bei älteren Menschen.\n\n**Mechanismus:** Der **Detrusor-Muskel** (die Muskelschicht der Blasenwand) zieht sich **unwillkürlich** zusammen, obwohl die Blase noch nicht voll ist. Das erzeugt plötzlichen, imperativen Harndrang.\n\n**Typische Auslöser ('Triggers'):** Schlüssel im Türschloss (sogenannte 'Latchkey-Urgency'), Wasserrauschen, Kälte, kaltes Wasser an den Händen.\n\n**Ursachen:** überaktive Blase (Overactive Bladder, OAB), Blasenentzündung, neurologische Erkrankungen (Schlaganfall, Parkinson, Multiple Sklerose).\n\n**Abgrenzung zur Belastungsinkontinenz:** Hier **mit** starkem Drang, dort **ohne** Drang.\n\n**Therapie:** **Blasentraining** (Miktionsintervalle langsam verlängern, Miktionsprotokoll 3 Tage), Anticholinergika (z.B. Oxybutynin), Beta-3-Agonist Mirabegron, bei Therapieversagen Botox-Injektion. (AWMF 2023)",
          glossarBegriffe: ["Dranginkontinenz", "Detrusor"],
        },
        contentB1: {
          title: "Dranginkontinenz: Detrusor-Überaktivität, Trigger, Therapie",
          body: "**Dranginkontinenz** ist die zweithäufigste Inkontinenz — oft bei älteren Menschen.\n\n**Was passiert:** Der **Blasenmuskel** zieht sich plötzlich zusammen, obwohl die Blase noch nicht voll ist. Der Patient hat **plötzlich starken Drang** — und kommt nicht mehr zur Toilette.\n\n**Typische Auslöser:** Schlüssel umdrehen an der Tür, Wasser laufen hören, kalte Hände.\n\n**Wichtig:** Dranginkontinenz = **mit** Drang. Belastungsinkontinenz = **ohne** Drang.\n\n**Was hilft:** **Blasentraining** (langsam länger einhalten), Medikamente, in schweren Fällen Botox in die Blase.",
          glossarBegriffe: ["Dranginkontinenz", "Detrusor"],
        },
      },
    },
    glossarBegriffe: ["Dranginkontinenz", "Detrusor"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: mischinkontinenz (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-mischinkontinenz",
    themaId: "harnausscheidung",
    titel: "Mischinkontinenz: Belastung + Drang — Diagnostik und Therapie-Priorisierung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau W., 74, verliert Urin beim Husten UND bei plötzlichem starkem Drang. Welche Form hat sie — und warum ist die Therapie hier schwieriger?",
      antwort:
        "Mischinkontinenz = Kombination aus Belastungs- und Dranginkontinenz. Häufig bei Frauen über 60. Das 3-Tage-Miktionsprotokoll zeigt, welche Komponente überwiegt. Therapie richtet sich nach dem führenden Anteil — meist zuerst den Drang behandeln (weil unberechenbar), parallel Beckenbodentraining. Dauer 3-6 Monate. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Mischinkontinenz = Kombination aus Belastungs- und Dranginkontinenz. Häufig bei älteren Frauen. Diagnostik: Was überwiegt? Miktionsprotokoll hilft. Therapie richtet sich nach dem führenden Anteil — oft zunächst Drang behandeln, dann Beckenboden trainieren.",
      textB1:
        "Mischinkontinenz heißt: Die Patientin hat beides gleichzeitig — Urinverlust bei Husten UND plötzlichen starken Drang. Oft bei älteren Frauen. Erst behandelst du das, was mehr stört — meist den Drang. Dann den Beckenboden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023", "DNQP (2014) Expertenstandard Förderung der Harnkontinenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-mischinkontinenz",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Mischinkontinenz: Belastung + Drang — Diagnostik und Therapie-Priorisierung",
          body: "Die **Mischinkontinenz** ist keine eigene dritte Form — sie ist eine **Kombination** aus Belastungs- und Dranginkontinenz. Besonders häufig bei Frauen über 60 Jahre.\n\n**Klinisch:** Die Patientin beschreibt beides — Urinverlust bei Husten/Niesen und plötzlich starken Harndrang. Oft überwiegt eine Komponente.\n\n**Diagnostik:** Ein **3-Tage-Miktionsprotokoll** zeigt das Muster — wann kommt der Urinverlust? Bei Belastung? Bei Drang? Wie groß sind die Portionen?\n\n**Therapie:** Immer die **belastendere Komponente zuerst** behandeln. Meist ist das der Drang (weil er unberechenbar ist). Also: Zuerst Blasentraining + Anticholinergika, parallel Beckenbodentraining. Therapie dauert 3-6 Monate. (AWMF 2023)",
          glossarBegriffe: ["Miktionsprotokoll"],
        },
        contentB1: {
          title: "Mischinkontinenz: Belastung + Drang — Diagnostik und Therapie-Priorisierung",
          body: "**Mischinkontinenz** = **beide Formen zusammen**. Die Patientin hat Belastungsinkontinenz **und** Dranginkontinenz.\n\nDas passiert oft bei älteren Frauen. Meist ist eine Form schlimmer als die andere.\n\n**Wie findet man das heraus?** Mit einem **Miktionsprotokoll** — 3 Tage lang alles aufschreiben: Wann war der Urinverlust? Bei Husten? Bei Drang?\n\n**Was tun?** Erst das behandeln, was mehr stört. Meistens ist das der **Drang**. Also erst Blasentraining + Medikament, gleichzeitig Beckenbodentraining. Es dauert 3 bis 6 Monate. Geduld haben.",
          glossarBegriffe: ["Miktionsprotokoll"],
        },
      },
    },
    glossarBegriffe: ["Miktionsprotokoll"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: ueberlaufinkontinenz (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-ueberlaufinkontinenz",
    themaId: "harnausscheidung",
    titel: "Überlaufinkontinenz: Mechanismus, Ursachen, Komplikationen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 76-jähriger Mann mit Prostatahyperplasie verliert ständig tropfenweise Urin. Die Blase wirkt im Ultraschall prall voll — trotz ständigem Tröpfeln. Was passiert da — und warum ist das gefährlich?",
      antwort:
        "Überlaufinkontinenz (paradoxe Inkontinenz): Blase ist chronisch überfüllt (Restharn oft >400 ml). Abfluss ist durch Prostatahyperplasie behindert. Druck übersteigt Verschlussdruck → Urin tropft über. Gefahr: Harnstau in Nieren → Hydronephrose → Nierenversagen. Sofort Einmalkatheter. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Überlaufinkontinenz (auch 'paradoxe Inkontinenz') = Urinverlust bei chronisch überfüllter Blase. Blase ist voll, kann sich aber nicht entleeren → Urin tropft über. Ursachen: Prostatahyperplasie (häufig!), Detrusorschwäche, neurologisch. Gefahr: Niere kaputt — sofort katheterisieren.",
      textB1:
        "Überlaufinkontinenz = die Blase ist ganz voll, aber der Urin kommt nicht richtig raus. Nur einzelne Tropfen gehen ab. Oft bei Männern mit Prostata-Problem. Gefahr: Die Niere kann kaputtgehen. Der Arzt muss einen Katheter legen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-ueberlaufinkontinenz",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Überlaufinkontinenz: Mechanismus, Ursachen, Komplikationen",
          body: "Die **Überlaufinkontinenz** — oft auch **paradoxe Inkontinenz** genannt — ist pathophysiologisch etwas ganz anderes als Belastung oder Drang:\n\n**Mechanismus:** Die Blase ist chronisch **überfüllt** (Restharn oft >400 ml). Der Abfluss ist **behindert** — oder der Detrusor kann nicht mehr kontrahieren. Der intravesikale Druck übersteigt irgendwann den Verschlussdruck der Harnröhre, und Urin **tropft unkontrolliert über**. Die Blase wird aber nie richtig leer.\n\n**Hauptursachen:** Prostatahyperplasie (häufigste Ursache beim Mann), Harnröhrenstriktur, Diabetes mellitus mit autonomer Neuropathie (Detrusor schwach), Medikamente (Anticholinergika, Opioide), nach Operationen.\n\n**Gefahren:** Rückstau bis in die Nieren → **Hydronephrose** → Nierenversagen. Harnwegsinfekte durch Restharn.\n\n**Maßnahmen:** **Sofortiger Einmalkatheter** zur Entlastung. Ursachen-Therapie. (AWMF 2023)",
          glossarBegriffe: ["Überlaufinkontinenz", "Restharn"],
        },
        contentB1: {
          title: "Überlaufinkontinenz: Mechanismus, Ursachen, Komplikationen",
          body: "**Überlaufinkontinenz** ist etwas ganz anderes als die anderen Formen.\n\n**Was passiert:** Die Blase ist **ganz voll**. Aber der Urin kann **nicht richtig raus**. Irgendwann wird der Druck so hoch, dass Urin **tropfenweise** über den Widerstand übergeht — wie ein überlaufendes Glas.\n\n**Warum passiert das?** Prostata ist zu groß (häufigste Ursache beim Mann). Narben in der Harnröhre. Diabetes — der Nerv zur Blase ist geschädigt. Medikamente (Morphin, manche andere).\n\n**Gefahren:** Urin staut zurück bis in die **Niere** → Niere kaputt. Und viele **Harnwegsinfekte**.\n\n**Was tun?** Sofort **Katheter** legen — der Arzt. Dann die Ursache behandeln.",
          glossarBegriffe: ["Überlaufinkontinenz", "Restharn"],
        },
      },
    },
    glossarBegriffe: ["Überlaufinkontinenz", "Restharn"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: reflex-und-funktionelle-inkontinenz (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-reflex-funktionell",
    themaId: "harnausscheidung",
    titel: "Reflexinkontinenz und funktionelle Inkontinenz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Frau mit Demenz ist körperlich völlig in der Lage, zur Toilette zu gehen — aber sie findet das WC im Pflegeheim nicht mehr. Ist das Inkontinenz? Wenn ja: welche?",
      antwort:
        "Ja — funktionelle Inkontinenz. Blase und Nerven sind intakt. Aber äußere Umstände (Demenz, fehlende Orientierung) verhindern den rechtzeitigen Toilettengang. Pflegerisch: sehr gut therapierbar durch Toilettenplan, Beschilderung, Nachtlicht. (DNQP 2014; ICS)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Reflexinkontinenz = unwillkürliche Blasenentleerung bei neurologischer Schädigung (Querschnittlähmung, MS) — Patient spürt den Drang nicht. Funktionelle Inkontinenz = körperlich kontinent, aber durch Umstände (Demenz, Immobilität, fehlende Orientierung) keine Toilette rechtzeitig.",
      textB1:
        "Zwei weitere Formen: Reflexinkontinenz = Die Nerven sind kaputt (Querschnitt, MS). Die Blase entleert sich ohne Drang-Gefühl. Funktionelle Inkontinenz = Der Körper könnte, aber der Mensch findet die Toilette nicht (Demenz, Immobilität).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-11",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz", "ICS International Continence Society"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-reflex-funktionell",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Reflexinkontinenz und funktionelle Inkontinenz",
          body: "Zwei weitere ICS-Formen, die im Alltag oft vorkommen:\n\n**Reflexinkontinenz** — unwillkürliche Blasenentleerung durch Störung der **nervalen Steuerung**. Die Blase entleert sich **reflexhaft** bei bestimmter Füllung, ohne dass der Patient den Drang bewusst wahrnimmt. Ursachen: **Querschnittlähmung**, **Multiple Sklerose**, Rückenmarkstumor. Der Patient lernt ggf. Triggering-Techniken oder **intermittierenden Selbstkatheterismus**.\n\n**Funktionelle Inkontinenz** — die Blase und die Nerven sind **intakt**. Der Patient ist rein blasentechnisch kontinent, verliert aber trotzdem Urin, weil er die Toilette **nicht rechtzeitig erreicht oder findet**. Ursachen: **Demenz** (findet WC nicht), **Immobilität** (kann nicht aufstehen), fehlende Orientierung in fremder Umgebung.\n\n**Pflegerisches Ziel:** Funktionelle Inkontinenz ist oft **vermeidbar**: Toilettenplan, klare Beschilderung, Nachtlicht, Griffe, nahe Toilette. (DNQP 2014)",
          glossarBegriffe: ["Kontinenzprofil"],
        },
        contentB1: {
          title: "Reflexinkontinenz und funktionelle Inkontinenz",
          body: "Zwei weitere Inkontinenz-Formen:\n\n**Reflexinkontinenz** — die **Nerven** sind kaputt. Die Blase entleert sich **von selbst**, der Patient spürt den Drang **nicht**. Häufig bei: **Querschnittlähmung**, **Multiple Sklerose** (MS).\n\n**Funktionelle Inkontinenz** — die Blase ist **ganz gesund**. Die Nerven sind gesund. Aber der Mensch **findet die Toilette nicht** oder **kommt nicht rechtzeitig**. Ursachen: **Demenz**, **kann nicht laufen**, fremde Umgebung, WC zu weit weg.\n\n**Wichtig:** Funktionelle Inkontinenz kannst du als Pflegende **oft vermeiden**: Toilettenplan, WC beschildern, Nachtlicht, Griffe, nahe Toilette.",
          glossarBegriffe: ["Kontinenzprofil"],
        },
      },
    },
    glossarBegriffe: ["Kontinenzprofil"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: ueberlaufblase-abgrenzung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-ueberlaufblase-abgrenzung",
    themaId: "harnausscheidung",
    titel: "Überlaufblase vs. Überlaufinkontinenz: klinische Abgrenzung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du tastest den Unterbauch eines 78-jährigen Patienten — die Blase wölbt sich deutlich, ist druckempfindlich. Der Patient sagt: 'Ich habe keinen Drang.' Letzte Miktion vor 12 Stunden. Überlaufblase oder Überlaufinkontinenz — und warum ist der Unterschied wichtig?",
      antwort:
        "Überlaufblase (akuter Harnverhalt): akutes Ereignis, prall voll (>500 ml oft >1 Liter), keine Miktion möglich, starke Schmerzen, Notfall — sofort Arzt/Einmalkatheter. Überlaufinkontinenz: chronisch überfüllt, Urin tropft über, oft keine Schmerzen (Gewöhnung), Nieren werden langsam geschädigt. Beide katheterisieren. (AWMF 2023)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Wichtige Abgrenzung: Überlaufblase = akute prall gefüllte Blase, Patient kann nicht urinieren (Harnverhalt) — Notfall. Überlaufinkontinenz = chronisches Zustandsbild, bei dem aus überfüllter Blase tropfenweise Urin abgeht — ebenfalls behandlungsbedürftig, aber nicht so akut.",
      textB1:
        "Überlaufblase = Blase ist akut prall voll, gar kein Urin kommt. Das ist ein Notfall — sofort Arzt. Überlaufinkontinenz = Blase ist chronisch voll, Urin tropft raus. Auch schlimm, aber nicht so akut. Unterschied: Notfall vs. chronisch.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-12",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k-Leitlinie 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-ueberlaufblase-abgrenzung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Überlaufblase vs. Überlaufinkontinenz: klinische Abgrenzung",
          body: "Dieser Unterschied ist **prüfungsrelevant** und **klinisch entscheidend**:\n\n**Überlaufblase (akuter Harnverhalt)**\n- **Akutes** Ereignis: Blase prall gefüllt (>500 ml, oft >1 Liter).\n- **Keine** Miktion möglich — nichts kommt.\n- Symptome: **starke Schmerzen im Unterbauch**, Unruhe, tastbare Blase.\n- **Notfall — sofort Arzt informieren, Einmalkatheter**.\n\n**Überlaufinkontinenz (paradoxe Inkontinenz)**\n- **Chronisch** überfüllte Blase (Restharn dauerhaft hoch).\n- **Tropfenweiser** Urinabgang — der Patient hat scheinbar 'normal' Urin.\n- Oft **keine Schmerzen**, weil die Blase sich an die Dauerdehnung gewöhnt hat.\n- Patient merkt das Problem **nicht** — aber Nieren werden langsam geschädigt.\n- Diagnose via **Restharn-Sonographie** (>100 ml pathologisch).\n\n**Merkhilfe:** Überlaufblase = akuter Notfall mit Schmerz. Überlaufinkontinenz = chronisches Dauertropfen ohne Schmerz. Beides katheterisieren. (AWMF 2023)",
          glossarBegriffe: ["Restharn", "Harnverhalt"],
        },
        contentB1: {
          title: "Überlaufblase vs. Überlaufinkontinenz: klinische Abgrenzung",
          body: "Diesen Unterschied musst du in der Prüfung können:\n\n**Überlaufblase**\n- Die Blase ist **plötzlich** prall voll.\n- **Kein** Urin kommt raus.\n- **Starke Schmerzen** im Unterbauch.\n- Du kannst die Blase fühlen.\n- Das ist ein **Notfall** — sofort Arzt.\n\n**Überlaufinkontinenz**\n- Die Blase ist **seit Wochen/Monaten** zu voll.\n- **Urin tropft** langsam raus.\n- **Keine Schmerzen** — der Patient merkt lange nichts.\n- Langsam geht die **Niere kaputt**.\n- Diagnose: **Ultraschall** zeigt viel Restharn.\n\n**Merke:** Überlaufblase = **Notfall mit Schmerz**. Überlaufinkontinenz = **Dauertropfen ohne Schmerz**.",
          glossarBegriffe: ["Restharn", "Harnverhalt"],
        },
      },
    },
    glossarBegriffe: ["Restharn", "Harnverhalt"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: kontinenzprofile (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-kontinenzprofile",
    themaId: "harnausscheidung",
    titel: "5 Kontinenzprofile nach DNQP (2014)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau S. verliert Urin, aber sie kann ihre Einlage allein wechseln. Frau T. verliert Urin und braucht dabei Pflegehilfe. Beides ist Inkontinenz — aber pflegerisch sehr unterschiedlich. Welche 5 Profile unterscheidet der DNQP?",
      antwort:
        "DNQP 5 Profile: 1. Kontinent, 2. Unabhängig kontinent (trocken mit eigenen Hilfsmitteln), 3. Abhängig kontinent (trocken nur mit Pflegehilfe), 4. Unabhängig nicht-kontinent (verliert Urin, kompensiert selbstständig), 5. Abhängig nicht-kontinent (verliert Urin, braucht Pflege). Ziel: immer ein Profil nach oben bringen. (DNQP 2014)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der DNQP unterscheidet 5 Kontinenzprofile: 1. Kontinent, 2. Unabhängig kontinent (trocken mit eigenen Hilfsmitteln), 3. Abhängig kontinent (trocken mit Pflegehilfe), 4. Unabhängig nicht-kontinent (verliert Urin, selbstständig), 5. Abhängig nicht-kontinent (verliert trotz Pflege).",
      textB1:
        "Der DNQP hat 5 Stufen der Kontinenz: (1) kontinent, (2) selbst trocken mit Hilfsmitteln, (3) trocken nur mit Pflege, (4) verliert Urin, macht selbst, (5) verliert Urin trotz Pflegehilfe. Ziel: Den Menschen eine Stufe nach oben bringen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-13",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-kontinenzprofile",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "5 Kontinenzprofile nach DNQP (2014)",
          body: "Der DNQP-Expertenstandard 'Förderung der Harnkontinenz' (2014) definiert **5 Kontinenzprofile** — nicht 'kontinent oder nicht', sondern ein **Spektrum**:\n\n**1. Kontinent** — kein unwillkürlicher Harnverlust, keine Hilfsmittel, keine Hilfe nötig.\n\n**2. Unabhängig kontinent** — der Betroffene bleibt trocken mit **selbst organisierten Maßnahmen** (z.B. nutzt selbst Toilettenplan, wechselt selbstständig Einlage).\n\n**3. Abhängig kontinent** — der Betroffene bleibt trocken, aber **nur durch personelle Hilfe** (Toilettengang mit Hilfe).\n\n**4. Unabhängig nicht-kontinent** — unwillkürlicher Urinverlust, aber der Betroffene **kompensiert selbstständig** (wechselt Einlage selbst).\n\n**5. Abhängig nicht-kontinent** — unwillkürlicher Urinverlust, und der Betroffene **braucht Pflege** (Einlagen wechseln durch Pflegekraft).\n\n**Pflegerisches Ziel:** Immer versuchen, den Menschen ein **Profil nach oben** zu bringen — z.B. von 5 nach 3 durch Toilettentraining. Das ist messbarer Erfolg. (DNQP 2014)",
          glossarBegriffe: ["Kontinenzprofil"],
        },
        contentB1: {
          title: "5 Kontinenzprofile nach DNQP (2014)",
          body: "Der DNQP sagt: Inkontinenz ist nicht **ja oder nein**. Es gibt **5 Stufen**:\n\n**1. Kontinent** — keine Probleme, nichts nötig.\n\n**2. Unabhängig kontinent** — bleibt trocken, macht alles selbst (eigener Toilettenplan, eigene Einlage).\n\n**3. Abhängig kontinent** — bleibt trocken, **aber nur mit Pflegehilfe** (Pflege führt zur Toilette).\n\n**4. Unabhängig nicht-kontinent** — verliert Urin, **macht alles selbst** (wechselt eigene Einlage).\n\n**5. Abhängig nicht-kontinent** — verliert Urin, **braucht Pflegehilfe** für Einlagen und Intimpflege.\n\n**Dein Ziel als Pflegende:** Den Menschen **eine Stufe nach oben** bringen — z.B. von 5 auf 3 durch Training. Das ist ein **messbarer Erfolg**.",
          glossarBegriffe: ["Kontinenzprofil"],
        },
      },
    },
    glossarBegriffe: ["Kontinenzprofil"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: miktionsprotokoll (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-miktionsprotokoll",
    themaId: "harnausscheidung",
    titel: "Miktionsprotokoll: Goldstandard der Kontinenz-Diagnostik",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sollst für eine Bewohnerin das Kontinenztraining starten. Vor dem Training brauchst du eine Grundlage, um den Erfolg später messen zu können. Welches Werkzeug nutzt du, und welche 4 Informationen notierst du mindestens?",
      antwort:
        "Miktionsprotokoll (bladder diary) über 3 Tage: Uhrzeit jeder Miktion, Miktionsvolumen (ml!), Trinkmenge, Drangintensität, Urinverlust mit Auslöser, Nykturie-Episoden. Zeigt Miktionsfrequenz, funktionelle Blasenkapazität, Inkontinenzform — ist Grundlage des Trainingsplans. (DNQP 2014)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das Miktionsprotokoll (auch Trink-/Ausscheidungsprotokoll) über 3 Tage ist Basis jedes Kontinenztrainings. Pflicht: Uhrzeit der Miktion, Menge (in ml), Trinkmenge, Drang-Gefühl (ja/nein), Urinverlust (ja/nein) — und wobei? Das Protokoll zeigt das Muster.",
      textB1:
        "Das Miktionsprotokoll ist das wichtigste Werkzeug. 3 Tage lang schreibst du auf: Uhrzeit, wie viel Urin, wie viel getrunken, Drang ja/nein, Urinverlust ja/nein. Daraus siehst du das Muster — und kannst das Training planen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-14",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-miktionsprotokoll",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Miktionsprotokoll: Goldstandard der Kontinenz-Diagnostik",
          body: "Das **Miktionsprotokoll** (international: bladder diary) ist der **Goldstandard** der Kontinenz-Diagnostik — einfach, kostenlos, aussagekräftig.\n\n**Mindest-Dauer:** **3 zusammenhängende Tage** (weniger liefert kein belastbares Muster).\n\n**Was wird dokumentiert?**\n1. **Uhrzeit** jeder Miktion\n2. **Miktionsvolumen** (Messbecher!)\n3. **Trinkmenge** mit Uhrzeit\n4. **Drangintensität** (0-10 oder ja/nein)\n5. **Urinverlust** (ja/nein), Menge geschätzt\n6. **Auslöser** (Husten? Spontan?)\n7. **Nykturie-Episoden**\n\n**Was zeigt das Protokoll?**\n- **Miktionsfrequenz** pro Tag (normal: 4-8x)\n- **Funktionelle Blasenkapazität** (größte Einzelportion)\n- **Nykturie** (wie oft nachts?)\n- **Inkontinenzform** (Drang vs. Belastung vs. funktionell)\n\nDaraus ergibt sich der Therapieplan. Nach 4-6 Wochen erneutes Protokoll zur Erfolgskontrolle. (DNQP 2014)",
          glossarBegriffe: ["Miktionsprotokoll"],
        },
        contentB1: {
          title: "Miktionsprotokoll: Goldstandard der Kontinenz-Diagnostik",
          body: "Das **Miktionsprotokoll** ist dein wichtigstes Werkzeug. Einfach, kostenlos, sehr aussagekräftig.\n\n**Dauer:** **3 Tage** am Stück.\n\n**Du schreibst für jeden Gang auf:**\n1. **Uhrzeit**\n2. **Wie viel Urin?** (Messbecher!)\n3. **Wie viel getrunken?** (mit Uhrzeit)\n4. **Starker Drang?** (ja/nein)\n5. **Urin-Verlust?** (ja/nein, wie viel)\n6. **Wobei?** (Husten? Plötzlich?)\n\n**Was du dann siehst:**\n- Wie oft pro Tag aufs Klo? (normal 4-8 mal)\n- Wie viel passt in die Blase?\n- Wie oft nachts?\n- Welche Form der Inkontinenz?\n\nDaraus macht ihr den **Trainingsplan**. Nach 4-6 Wochen: neues Protokoll als Kontrolle.",
          glossarBegriffe: ["Miktionsprotokoll"],
        },
      },
    },
    glossarBegriffe: ["Miktionsprotokoll"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: kontinenztraining-massnahmen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-kontinenztraining",
    themaId: "harnausscheidung",
    titel: "4 Kontinenz-Trainings nach DNQP: Zuordnung und Vorgehen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau B. hat Dranginkontinenz, Herr K. hat Belastungsinkontinenz, Frau M. hat Demenz und findet die Toilette nicht. Drei Patienten, drei verschiedene Trainings. Welches Training passt zu wem — und warum?",
      antwort:
        "Frau B.: Blasentraining (Intervalle verlängern, Detrusor beruhigen). Herr K.: Beckenbodentraining (Kegel, 3 Monate!, Schließmuskel stärken). Frau M.: Toilettentraining (feste Zeiten, Pflege führt — unabhängig vom Drang-Gefühl). Alle: Miktionsprotokoll als Grundlage. (DNQP 2014)",
    },
    stufe2: {
      typ: "hinweis",
      text: "4 Trainings-Formen nach DNQP: Blasentraining (Intervalle verlängern, bei Drang), Beckenbodentraining (Kegel, bei Belastung), Toilettentraining (feste Zeiten, bei Demenz/Immobilität), Gewohnheitstraining (individuelles Muster aus Protokoll). Jedes Training braucht Miktionsprotokoll als Grundlage.",
      textB1:
        "4 Trainings nach DNQP: Blasentraining (länger aushalten) bei Drang. Beckenboden-Training (Kegel-Übungen) bei Belastung. Toilettentraining (feste Uhrzeiten) bei Demenz. Gewohnheitstraining (Muster aus Protokoll) wenn feste Zeiten nicht passen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-15",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-kontinenztraining",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "4 Kontinenz-Trainings nach DNQP: Zuordnung und Vorgehen",
          body: "Der DNQP-Expertenstandard (2014) nennt vier evidenzbasierte Trainings — jedes passt zu einer anderen Inkontinenzform:\n\n**1. Blasentraining** (bei Drang- und Mischinkontinenz)\n- Ziel: **Miktionsintervalle verlängern**, Detrusor 'beruhigen'.\n- Vorgehen: Ausgangs-Intervall aus Protokoll (z.B. 60 min) → **jede Woche um 15 min verlängern** → Ziel 3-4 Std.\n- Strategien beim Drang: ruhig sitzen, durch den Mund atmen, Beckenboden kurz anspannen.\n\n**2. Beckenbodentraining (Kegel-Übungen)** (bei Belastungsinkontinenz)\n- Übung: 3×10 Wiederholungen pro Tag, **Anspannen 5 Sek + Entspannen 10 Sek**.\n- Dauer: mindestens **3 Monate** bis spürbarer Erfolg.\n\n**3. Toilettentraining** (bei Demenz, kognitiver Einschränkung, Immobilität)\n- **Feste Zeiten** (meist alle 2-3 Std), Pflege führt zur Toilette.\n\n**4. Gewohnheitstraining** (bei unregelmäßigem Muster)\n- Individuelle Zeitpunkte aus dem Protokoll: Toilette genau **15 Min vor** der typischen Inkontinenz-Episode.\n\n**Pflichtschritt vor jedem Training:** Miktionsprotokoll 3 Tage. (DNQP 2014)",
          glossarBegriffe: ["Miktionsprotokoll"],
        },
        contentB1: {
          title: "4 Kontinenz-Trainings nach DNQP: Zuordnung und Vorgehen",
          body: "Der DNQP beschreibt **4 Trainings**. Zu jeder Inkontinenzform passt eins:\n\n**1. Blasentraining** (bei **Drang**inkontinenz)\n- Der Patient **hält den Drang aus** — erst kurz, dann länger.\n- Aus dem Protokoll siehst du den Start (z.B. alle 60 Min). Jede Woche **15 Min länger** aushalten.\n\n**2. Beckenboden-Training / Kegel-Übungen** (bei **Belastungs**inkontinenz)\n- **3x täglich 10 Übungen**: 5 Sekunden anspannen, 10 Sekunden locker.\n- Dauert **3 Monate**, dann merkst du den Erfolg.\n\n**3. Toilettentraining** (bei **Demenz**, wenig Beweglichkeit)\n- **Feste Zeiten** — z.B. alle 2-3 Stunden zur Toilette gehen.\n- Du führst — der Patient muss nicht fragen.\n\n**4. Gewohnheitstraining** (wenn Zeiten nicht regelmäßig sind)\n- Aus dem Protokoll: **15 Min vor** dem typischen Urin-Verlust zur Toilette.\n\n**Immer zuerst: 3-Tage-Miktionsprotokoll.**",
          glossarBegriffe: ["Miktionsprotokoll"],
        },
      },
    },
    glossarBegriffe: ["Miktionsprotokoll"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: hwi-prophylaxe (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-hwi-prophylaxe",
    themaId: "harnausscheidung",
    titel: "HWI-Prophylaxe: Maßnahmen und Katheter-Indikation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K., 72, liegt im Krankenhaus. Was kannst du als Pflegende tun, damit sie keinen Harnwegsinfekt bekommt? Nenne 4 konkrete Maßnahmen.",
      antwort:
        "1. Ausreichende Trinkmenge (1,5-2 L/Tag). 2. Vollständige Blasenentleerung (nicht aufschieben — Restharn = Bakteriennährboden). 3. Korrekte Wischrichtung (vorne nach hinten, Frauen!). 4. Katheter nur bei zwingender Indikation (jeder Katheter-Tag = Infektionsrisiko ca. 3-10%/Tag). (DNQP 2014; RKI 2022)",
    },
    stufe2: {
      typ: "hinweis",
      text: "HWI-Prophylaxe: 1. Trinken — 1,5-2 L/Tag. 2. Wischrichtung vorne nach hinten (Frauen). 3. Blase vollständig entleeren, nicht aufschieben. 4. Nach Geschlechtsverkehr urinieren. 5. Intimhygiene täglich, aber nicht übertrieben (pH-sauer). Katheter nur bei zwingender Indikation.",
      textB1:
        "5 einfache Regeln gegen Harnwegsinfekt: 1. Viel trinken (1,5-2 Liter). 2. Nach Toilette vorne nach hinten wischen (bei Frauen). 3. Blase leer machen, nicht lange aushalten. 4. Nach Sex Urin lassen. 5. Intimhygiene täglich, aber nicht mit Seife.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-16",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz", "RKI (2022) nosokomiale Infektionen"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-hwi-prophylaxe",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "HWI-Prophylaxe: Maßnahmen und Katheter-Indikation",
          body: "Harnwegsinfekte (HWI) gehören zu den **häufigsten Infektionen** überhaupt. Im Krankenhaus sind sie die **häufigste nosokomiale Infektion**, meist katheterassoziiert (RKI 2022).\n\n**Prophylaxe-Maßnahmen (DNQP 2014):**\n\n1. **Ausreichende Trinkmenge** — 1,5-2 L/Tag. Viel Urinproduktion spült Keime aus.\n\n2. **Vollständige Blasenentleerung** — nicht aufschieben, bei Drang zur Toilette. Restharn = Bakteriennährboden.\n\n3. **Korrekte Wischrichtung (Frauen!)** — **von vorne nach hinten**, um Darmkeime nicht in die Harnröhre zu verschleppen.\n\n4. **Miktion nach Geschlechtsverkehr** — spült die Harnröhre.\n\n5. **Intimhygiene** — täglich mit klarem Wasser oder milder pH-5-Waschlotion. Keine Intimsprays, keine aggressiven Seifen.\n\n6. **Katheter nur bei zwingender Indikation** — jeder Katheter-Tag = ca. 3-10% Infektionsrisiko. Niemals als Inkontinenzlösung.\n\n7. **Warmhalten** — kalte Füße begünstigen Infekte. (DNQP 2014; RKI 2022)",
          glossarBegriffe: ["Nosokomiale Infektion"],
        },
        contentB1: {
          title: "HWI-Prophylaxe: Maßnahmen und Katheter-Indikation",
          body: "Harnwegsinfekte sind die **häufigste Infektion im Krankenhaus**. Du kannst sie verhindern:\n\n**7 einfache Regeln:**\n\n1. **Viel trinken** — 1,5 bis 2 Liter am Tag.\n\n2. **Blase ganz leer machen** — nicht lange aushalten. Wenn was übrig bleibt, wachsen Bakterien.\n\n3. **Vorne nach hinten wischen** (bei Frauen). Nicht umgekehrt — sonst kommen Darmkeime in die Harnröhre.\n\n4. Nach **Sex** auf die Toilette gehen und Urin lassen.\n\n5. **Intimhygiene** täglich — **nur mit Wasser oder milder Waschlotion**.\n\n6. **Katheter nur, wenn es sein muss** — jeder Tag mit Katheter = mehr Risiko.\n\n7. **Warm halten** — keine kalten Füße.\n\n**Zeichen von HWI:** Brennen, oft Pipi, trüber Urin, Bauchschmerzen, Fieber → **sofort melden**.",
          glossarBegriffe: ["Nosokomiale Infektion"],
        },
      },
    },
    glossarBegriffe: ["Nosokomiale Infektion"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 17: inkontinenz-hilfsmittel (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-hilfsmittel",
    themaId: "harnausscheidung",
    titel: "Inkontinenz-Hilfsmittel: Auswahl, Versorgung, Würde",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 67-jährige Patientin mit Belastungsinkontinenz lehnt Einlagen ab: 'Das tragen nur alte Leute!' Was weißt du über Hilfsmittelversorgung — und was tust du als Pflegende, um ihre Würde zu wahren?",
      antwort:
        "Hilfsmittel sind laut § 33 SGB V Kassenleistung bei ärztlicher Verordnung. Einlagen, Vorlagen, Einmalhosen sind verschiedene Systeme — je nach Verlustmenge. Autonomie geht vor Hygiene: Wunsch des Patienten respektieren, Scham ansprechen, gemeinsam eine Lösung suchen. Hilfsmittel = letztes Mittel, nicht erste Wahl. (DNQP 2014; § 33 SGB V)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Inkontinenz-Hilfsmittel nach § 33 SGB V: Einlagen (leichte Mengen), Vorlagen/Einlegesysteme (mittlere Mengen), Einmalhosen (starke Inkontinenz). Wechselintervall: je nach Füllstand, mindestens alle 4h. Hautzustand beobachten. Hilfsmittel wahren Würde, ersetzen aber nicht Kontinenztraining.",
      textB1:
        "Es gibt verschiedene Hilfsmittel: Einlagen (wenig Verlust), Vorlagen (mehr Verlust), Einmalhosen (viel Verlust). Die Kasse zahlt bei ärztlicher Verordnung. Wichtig: Haut beobachten, regelmäßig wechseln. Hilfsmittel = Unterstützung, kein Ersatz für Training.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-17",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz", "§ 33 SGB V (Hilfsmittelversorgung)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-hilfsmittel",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Inkontinenz-Hilfsmittel: Auswahl, Versorgung, Würde",
          body: "Inkontinenz-Hilfsmittel sind nach **§ 33 SGB V** Kassenleistung bei ärztlicher Verordnung.\n\n**Produktarten — je nach Verlustmenge:**\n- **Einlagen** (anatomisch geformt): für leichte Tropf-Inkontinenz, besonders bei Männern.\n- **Vorlagen** (rechteckig): mittlere Mengen, in Netz-Fixierhose oder Slip eingelegt.\n- **Einmalhosen / Windelhosen**: starke Inkontinenz, nächtlich oder bei Immobilität.\n- **Klebebandagen**: für bettlägerige Patienten mit starker Inkontinenz.\n\n**Auswahl nach Funktion:** Wer geht? Wer liegt? Wie viel verliert er? Tag oder Nacht?\n\n**Wechselintervall:** mindestens alle **4 Stunden** oder bei Füllung — niemals sparen auf Kosten der Haut!\n\n**Hautzustand:** Nach jedem Wechsel prüfen — Rötung, Mazeration (aufgeweichte Haut), Pilz. Hochrisikogebiet für Inkontinenz-assoziierte Dermatitis (IAD).\n\n**Würde:** Hilfsmittel werden oft abgelehnt (Scham). Gespräch führen: aktiv, ohne Bewertung. Hilfsmittel = letzte Versorgung, nicht erste Wahl — Training hat Vorrang. (DNQP 2014; § 33 SGB V)",
          glossarBegriffe: ["Inkontinenz", "Kontinenzprofil"],
        },
        contentB1: {
          title: "Inkontinenz-Hilfsmittel: Auswahl, Versorgung, Würde",
          body: "Es gibt verschiedene Hilfsmittel — je nachdem, wie viel Urin der Patient verliert:\n\n- **Einlagen**: wenig Verlust (Tropfen). Oft für Männer.\n- **Vorlagen**: mehr Verlust (mittel). In eine Unterhose eingelegt.\n- **Einmalhosen**: viel Verlust. Wie eine Windel. Für bettlägerige Patienten oder nachts.\n\n**Krankenkasse zahlt** — der Arzt muss es verschreiben (§ 33 SGB V).\n\n**Was die Pflege macht:**\n- Wechsel **mindestens alle 4 Stunden** oder wenn voll.\n- Haut nach jedem Wechsel kontrollieren — rot, aufgeweicht, gereizt?\n- Intimbereich sauber und trocken halten.\n\n**Wichtig:** Viele Patienten schämen sich. Rede ruhig mit ihnen. Einlagen und Co. helfen — aber das Kontinenztraining ist besser.",
          glossarBegriffe: ["Inkontinenz"],
        },
      },
    },
    glossarBegriffe: ["Inkontinenz", "Kontinenzprofil"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 18: inkontinenz-psychosozial (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-psychosozial",
    themaId: "harnausscheidung",
    titel: "Psychosoziale Dimension der Inkontinenz: Scham, Isolation, Beratungsgespräch",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Patientin hat seit Monaten Inkontinenz, sucht aber keine Hilfe. Sie sagt: 'Das müssen Sie mir nicht erklären, ich kenne mein Problem.' Wie begegnetest du ihr — und warum ist das Beratungsgespräch trotzdem so wichtig?",
      antwort:
        "Inkontinenz verursacht sozialen Rückzug, Depression, Isolation. Viele Betroffene warten durchschnittlich 6-7 Jahre vor dem ersten Arztbesuch. Das Gespräch ist oft der erste Schritt. Nicht überreden — aber Information anbieten: 'Es gibt Behandlungsmöglichkeiten.' Würde und Autonomie wahren. (DNQP 2014; ICS)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Inkontinenz führt häufig zu Scham, sozialem Rückzug, Depression, Angst vor Geruch und öffentlichen Blamagen. Viele warten Jahre vor dem Arztbesuch. Pflegerische Aufgabe: Thema aktiv und ohne Wertung ansprechen, informieren, ermutigen Hilfe zu suchen. Würde und Intimsphäre schützen.",
      textB1:
        "Inkontinenz macht viele Menschen traurig und einsam. Aus Scham gehen sie nicht zum Arzt — manchmal jahrelang. Deine Aufgabe als Pflegende: ruhig und ohne Urteil mit dem Patienten reden. Zeigen: Es gibt Hilfe. Du bist nicht allein.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-18",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz", "ICS International Continence Society"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-psychosozial",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Psychosoziale Dimension der Inkontinenz: Scham, Isolation, Beratungsgespräch",
          body: "Inkontinenz ist medizinisch behandelbar — aber psychosozial eine der belastendsten Erkrankungen.\n\n**Folgen für die Person:**\n- **Sozialer Rückzug** (Angst vor Geruch, Blamage in der Öffentlichkeit)\n- **Depression** und Angststörungen\n- **Partnerschaftsprobleme** (Sexualleben betroffen)\n- **Schlafstörungen** (Nykturie)\n- **Sturz-Risiko** (Eile zur Toilette)\n\n**Zahlen:** Betroffene warten im Schnitt **6-7 Jahre** vor dem ersten Arztbesuch. Viele Pflegebedürftige schweigen, weil sie Inkontinenz als 'normal' hinnehmen oder Scham empfinden.\n\n**Pflegerische Aufgabe:**\n- **Aktiv ansprechen** — nicht warten bis der Patient fragt.\n- **Ohne Wertung**: 'Das ist häufig und gut behandelbar.'\n- **Informieren**: Welche Hilfe gibt es? Wer ist zuständig?\n- **Ermutigen**: Arzt aufsuchen, Kontinenzberatung in Anspruch nehmen.\n- **Intimsphäre schützen**: Diskretion, Tür schließen, keine Kommentare in Hörweite Dritter.\n- **Würde bewahren**: Person ist mehr als ihr Ausscheidungsproblem. (DNQP 2014; ICS)",
          glossarBegriffe: ["Inkontinenz", "Kontinenzprofil"],
        },
        contentB1: {
          title: "Psychosoziale Dimension der Inkontinenz: Scham, Isolation, Beratungsgespräch",
          body: "Inkontinenz ist mehr als ein körperliches Problem. Sie macht Menschen **traurig, ängstlich und einsam**.\n\n**Was passiert:**\n- Der Mensch geht nicht mehr aus — **Angst** vor Unfall.\n- Er redet mit niemandem darüber — **Scham**.\n- Er wird depressiv.\n- Er wartet jahrelang, bevor er zum Arzt geht.\n\n**Was du als Pflegende tust:**\n- Das Thema **aktiv ansprechen** — warte nicht, bis der Patient fragt.\n- **Ruhig und ohne Urteil**: 'Das kommt sehr häufig vor. Es gibt gute Hilfe.'\n- Ihn **ermutigen**: Arzt aufsuchen, Hilfe annehmen.\n- **Privatsphäre** schützen: Tür zu, leise reden, kein Kommentar in Anwesenheit anderer.\n- Den Menschen als **ganzen Menschen** sehen — nicht nur das Problem.",
          glossarBegriffe: ["Inkontinenz"],
        },
      },
    },
    glossarBegriffe: ["Inkontinenz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 19: inkontinenz-pflegerisches-assessment (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-pflegerisches-assessment",
    themaId: "harnausscheidung",
    titel: "Pflegerisches Inkontinenz-Assessment: Ersterfassung und Pflegeplanung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du nimmst eine neue Bewohnerin auf. Sie hat Inkontinenz. Der Arztbrief sagt: 'Dranginkontinenz.' Welche Schritte machst du in welcher Reihenfolge — und wie planst du das Kontinenztraining?",
      antwort:
        "1. Inkontinenzform bestätigen (Anamnese, Symptome erfragen). 2. Miktionsprotokoll 3 Tage (Muster erkennen). 3. Kontinenzprofil bestimmen (DNQP 1-5). 4. Risikofaktoren erheben (Medikamente, Mobilität, Kognition). 5. Ziel festlegen (realistisch, z.B. 'von Profil 5 auf 3'). 6. Blasentraining starten (Intervalle verlängern). 7. Nach 4-6 Wochen Erfolgskontrolle. (DNQP 2014)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegerisches Inkontinenz-Assessment: Inkontinenzform erfragen, Miktionsprotokoll 3 Tage, Kontinenzprofil (DNQP 1-5) bestimmen, Risikofaktoren (Medikamente, Mobilität, Kognition) erheben, Ziel setzen, Training planen, nach 4-6 Wochen kontrollieren.",
      textB1:
        "So gehst du vor: Erst fragen (welche Form?). Dann 3 Tage Protokoll. Dann Profil (1-5) bestimmen. Dann Training planen (welches Training passt?). Nach 4-6 Wochen kontrollieren. Immer mit dem Patienten zusammen entscheiden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-19",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2014) Expertenstandard Förderung der Harnkontinenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-assessment",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Pflegerisches Inkontinenz-Assessment: Ersterfassung und Pflegeplanung",
          body: "Das pflegerische Assessment bei Inkontinenz folgt einer klaren Struktur nach DNQP:\n\n**Schritt 1 — Ursache und Form erfassen:**\n- Welche Inkontinenzform (Belastung, Drang, Misch, Überlauf, Reflex, funktionell)?\n- Seit wann? Auslöser? Menge des Verlustes?\n- Medikamente (Diuretika, Anticholinergika, Opioide → Risikofaktoren!)\n\n**Schritt 2 — Miktionsprotokoll (3 Tage):**\n- Zeigt Muster, Frequenz, Blasenkapazität, Inkontinenzform.\n\n**Schritt 3 — Kontinenzprofil bestimmen (DNQP 1-5):**\n- Aktuelles Profil = Ausgangspunkt. Realistisches Ziel festlegen.\n\n**Schritt 4 — Risikofaktoren erheben:**\n- Mobilität, Kognition (Demenz?), Umgebung (WC-Distanz, Nachtlicht?).\n\n**Schritt 5 — Training planen:**\n- Passendes Training auswählen (Blasen-, Beckenboden-, Toiletten-, Gewohnheitstraining).\n\n**Schritt 6 — Erfolgskontrolle:**\n- Nach 4-6 Wochen neues Protokoll. Hat sich das Kontinenzprofil verbessert?\n\n**Pflegeziel:** Kein Absolutziel 'kontinent' — sondern 'ein Profil nach oben'. Das ist messbar und realistisch. (DNQP 2014)",
          glossarBegriffe: ["Miktionsprotokoll", "Kontinenzprofil", "Inkontinenz"],
        },
        contentB1: {
          title: "Pflegerisches Inkontinenz-Assessment: Ersterfassung und Pflegeplanung",
          body: "So läuft das Assessment ab — Schritt für Schritt:\n\n**1. Fragen:** Welche Form? Seit wann? Wie viel Verlust? Medikamente?\n\n**2. 3-Tage-Miktionsprotokoll** führen — Muster erkennen.\n\n**3. Kontinenzprofil** bestimmen (1-5 nach DNQP). Wo steht der Patient jetzt?\n\n**4. Risikofaktoren** prüfen: Kann er zur Toilette? Findet er sie? Welche Medikamente?\n\n**5. Training planen** — welches passt? Blasentraining, Beckenboden, Toilettentraining?\n\n**6. Ziel setzen**: z.B. 'in 6 Wochen von Profil 5 auf Profil 3'.\n\n**7. Nach 4-6 Wochen kontrollieren**: Hat es geholfen? Neues Protokoll.\n\nImmer zusammen mit dem Patienten entscheiden — nicht über seinen Kopf hinweg.",
          glossarBegriffe: ["Miktionsprotokoll", "Kontinenzprofil"],
        },
      },
    },
    glossarBegriffe: ["Miktionsprotokoll", "Kontinenzprofil", "Inkontinenz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 20: sauberkeitsentwicklung (Bloom 2) — AP-3 LE9 (kindliche Sauberkeitsentwicklung)
  // ═══════════════════════════════════════════
  {
    bausteinId: "harnausscheidung-sauberkeitsentwicklung",
    themaId: "harnausscheidung",
    titel: "Kindliche Sauberkeitsentwicklung: Trockenwerden",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 2,5-jähriges Kind, das zu Hause schon 'trocken' war, nässt im Krankenhaus plötzlich wieder ein. Die Mutter ist beunruhigt. Wie ordnest du das ein — und ab wann ist Einnässen wirklich abklärungsbedürftig?",
      antwort:
        "Sauberwerden ist ein Entwicklungsprozess (körperliche UND seelische Reife), beginnt im 2.-3. Lebensjahr und ist meist mit 3 Jahren tagsüber beherrscht — mit individuellen Unterschieden. Vorübergehendes Wiedereinnässen in Ausnahmesituationen (Krankenhaus, Geschwisterkind) ist eine normale Regression. Abklärungsbedürftig: Kinder ab 5 Jahren, die nie sauber waren, oder ein Rückfall nach längerer trockener Phase → ärztliche Abklärung. (Hoehl/Kullick, Kap. 15.4.1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Sauberkeitsgewöhnung beginnt im 2.-3. Lebensjahr (wenn das Kind Blasenfüllung/Stuhldrang wahrnimmt), meist mit 3 Jahren tagsüber beherrscht, nachts oft erst mit 4-5 Jahren — individuell verschieden. Förderlich: gelassene Eltern, gute Beziehung, kein Druck, kein Schimpfen/Strafen, kein übermäßiges Lob (Ausscheiden ist normal). Trinkmenge nie reduzieren. Wiedereinnässen in Ausnahmesituationen ist normal. Zum Arzt: ab 5 Jahren primär inkontinent oder Rückfall nach trockener Phase. (Hoehl/Kullick, Kap. 15.4.1)",
      textB1:
        "Ein Kind wird meist mit 2-3 Jahren tagsüber trocken, nachts oft erst mit 4-5 Jahren. Jedes Kind ist anders. Wichtig: kein Druck, kein Schimpfen, kein großes Lob — aufs Klo gehen ist normal. Trinkmenge nie kleiner machen. Wenn ein Kind im Krankenhaus oder nach der Geburt eines Geschwisters wieder einnässt, ist das normal. Zum Arzt: Kinder ab 5 Jahren, die nie trocken waren oder plötzlich wieder einnässen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-harn-wb-20-sauberkeit",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick: Gesundheits- und Kinderkrankenpflege, Kap. 15.4.1 (Sauberkeitsgewöhnung) + Entwicklungstabelle Selbstständigkeit"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-harn-sauberkeitsentwicklung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Kindliche Sauberkeitsentwicklung: Trockenwerden",
          body: "Trockenwerden ist keine Leistung, die man 'antrainieren' kann, sondern ein **Entwicklungsprozess**. Voraussetzung sind **körperliche Reife** (das Kind nimmt die Blasenfüllung und den Stuhldrang wahr und kann den Schließmuskel steuern) **und seelische Bereitschaft**.\n\n**Zeitlicher Korridor (individuell verschieden):**\n- **ab ~24 Monaten:** Die Eltern können mit dem Toilettentraining beginnen; das Kind nimmt Blasen-/Stuhldrang allmählich wahr\n- **ab ~30 Monaten:** Das Kind benutzt das Töpfchen selbst, braucht aber noch Hilfe beim Abputzen\n- **ab ~3 Jahren:** tagsüber oft trocken, setzt sich selbst auf die Toilette — die Sauberkeitsgewöhnung ist in der Regel mit 3 Jahren beherrscht\n- **ab ~4 Jahren:** evtl. auch **nachts trocken**, putzt sich selbstständig ab und spült\n- **ab ~5 Jahren:** ausgeprägtes **Schamgefühl** — das Kind möchte nicht mehr von anderen im Genitalbereich gewaschen werden\n\n**Wie Eltern (und Pflege) unterstützen:**\n- **Gelassene Haltung** und eine **gute Eltern-Kind-Beziehung** wirken förderlich\n- **Kein Druck, kein zu früher Beginn** — beides verlangsamt den Lernprozess und kann zu Entwicklungsstörungen führen\n- **Nicht schimpfen oder strafen**, wenn das Kind sich zu spät gemeldet hat\n- Bei Erfolg **kein übermäßiges Lob** — das signalisiert dem Kind, dass Ausscheiden ein **ganz normaler Vorgang** ist\n- **Baumwollwindeln/-tücher** in die Windel legen, damit das Kind die unangenehme **nasse Windel wahrnimmt**\n- **Trinkmengen niemals reduzieren** — Kinder brauchen ausreichend Flüssigkeit\n\n**Regression ist normal:** Auch ein längst sauberes Kind kann in **Ausnahmesituationen** (Krankenhausaufenthalt, Geburt eines Geschwisterkindes) **vorübergehend wieder einnässen**. Das ist kein Rückschritt der Erziehung, sondern eine Stressreaktion.\n\n**Wann zum Arzt?** Kinder ab **5 Jahren**, die **nie sauber** waren (primäre Inkontinenz), oder die nach einer trockenen Phase **wieder einnässen**, sollten einem Arzt vorgestellt werden, um die Ursache abzuklären. (Hoehl/Kullick, Kap. 15.4.1)",
          glossarBegriffe: ["Sauberkeitsentwicklung", "Enuresis", "Miktion"],
        },
        contentB1: {
          title: "Kindliche Sauberkeitsentwicklung: Trockenwerden",
          body: "Trockenwerden kann man nicht erzwingen. Es ist ein **Entwicklungsprozess**. Das Kind muss **körperlich reif** sein (es spürt, wann die Blase voll ist) **und innerlich bereit**.\n\n**Ungefährer Zeit-Korridor (jedes Kind ist anders):**\n- **ab ~24 Monaten:** Eltern können mit dem Töpfchen anfangen\n- **ab ~30 Monaten:** Kind benutzt das Töpfchen selbst, braucht Hilfe beim Abputzen\n- **ab ~3 Jahren:** tagsüber oft trocken — meist ist das Sauberwerden mit 3 Jahren geschafft\n- **ab ~4 Jahren:** vielleicht auch **nachts trocken**, putzt sich selbst ab\n- **ab ~5 Jahren:** das Kind **schämt sich** — es will nicht mehr von anderen im Intimbereich gewaschen werden\n\n**Wie man hilft:**\n- **Ruhig bleiben**, gute Beziehung\n- **Kein Druck, nicht zu früh** — das macht es schwerer\n- **Nicht schimpfen**, wenn es zu spät kommt\n- Bei Erfolg **nicht übertrieben loben** — aufs Klo gehen ist normal\n- **Baumwollwindel** in die Windel legen, damit das Kind die **nasse Windel spürt**\n- **Trinken nie reduzieren** — Kinder brauchen Flüssigkeit\n\n**Wieder einnässen ist oft normal:** Im **Krankenhaus** oder wenn ein **Geschwisterkind** kommt, nässen auch trockene Kinder manchmal wieder ein. Das ist Stress, kein Rückschritt.\n\n**Wann zum Arzt?** Kinder ab **5 Jahren**, die **nie trocken** waren oder plötzlich wieder einnässen — dann die Ursache abklären lassen.",
          glossarBegriffe: ["Sauberkeitsentwicklung", "Enuresis", "Miktion"],
        },
      },
    },
    glossarBegriffe: ["Sauberkeitsentwicklung", "Enuresis", "Miktion"],
    karteikarten: [],
  },
];

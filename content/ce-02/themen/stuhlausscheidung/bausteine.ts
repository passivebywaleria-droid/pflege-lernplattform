// CE-02 Thema Stuhlausscheidung & Stomapflege — Wissensbausteine
// Naming-Standard: CE02_THEMA_STUHLAUSSCHEIDUNG_*
// Pipeline v9 — 2026-04-23

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_STUHLAUSSCHEIDUNG_BAUSTEINE: Wissensbaustein[] = [
  // ─── B1: stuhlausscheidung-normwerte ───────────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-normwerte",
    themaId: "stuhlausscheidung",
    titel: "Normwerte der Stuhlausscheidung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie oft gehst du selbst auf die Toilette für 'großes Geschäft'? Jeden Tag? Seltener? Und was wäre für dich auffällig?",
      antwort:
        "Normal ist eine riesige Spannweite: 3× pro Woche bis 3× pro Tag gilt als regelrecht. Farbe braun (Sterkobilin), Menge 100–200 g/Tag, Form geformt bis weich.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Normal ist eine riesige Spannweite: 3× pro Woche bis 3× pro Tag gilt als regelrecht. Die Farbe ist braun (durch Sterkobilin, ein Abbauprodukt des Gallenfarbstoffs), die Menge etwa 100–200 g pro Tag, die Form geformt bis weich.",
      textB1:
        "Normal ist ganz unterschiedlich: von 3× pro Woche bis 3× pro Tag ist alles okay. Die Farbe ist braun. Das kommt vom Gallensaft. Die Menge ist etwa 100 bis 200 Gramm am Tag. Der Stuhl ist geformt und weich.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-01",
        phase: 3,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["Heaton Bristol Stool Scale, 1997"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Normwerte der Stuhlausscheidung (Frequenz, Menge, Farbe) kennen und das individuelle Gewohnheitsmuster als Referenz verstehen.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Normwerte der Stuhlausscheidung",
          body: "Stuhl ist das Endprodukt der Verdauung. Er besteht zu etwa 75 % aus Wasser, der Rest ist unverdaute Nahrung (vor allem Ballaststoffe), abgeschilferte Darmzellen und Bakterien (~1/3 des Trockengewichts). Die **braune Farbe** entsteht durch **Sterkobilin**, ein Abbauprodukt von Bilirubin (Gallenfarbstoff). Die **Normwerte im Überblick**: Frequenz zwischen 3× pro Woche und 3× pro Tag (individuell sehr variabel), Menge etwa 100–200 g pro Tag, Form geformt aber weich, typischer Geruch (durch Schwefelverbindungen aus Eiweißabbau). Wichtig: 'Normal' ist eine Spannweite — der Vergleich mit dem **Gewohnheitsmuster des Patienten** ist wichtiger als absolute Zahlen. (Heaton Bristol Stool Scale, 1997)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Normwerte der Stuhlausscheidung",
          body: "Stuhl entsteht am Ende der Verdauung. Er besteht zu 75 % aus Wasser. Der Rest ist: unverdaute Nahrung, tote Darmzellen und Bakterien. Die Farbe ist **braun**. Das kommt vom Gallensaft (Sterkobilin). **Normal** sind diese Werte: Wie oft? Zwischen 3× pro Woche und 3× pro Tag. Wie viel? 100 bis 200 Gramm am Tag. Wie sieht er aus? Geformt und weich. Wichtig: 'Normal' ist bei jedem Menschen anders. Frage den Patienten: 'Wie ist das bei Ihnen normal?' Die eigene Gewohnheit ist wichtiger als die Zahl.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Sterkobilin", "Bilirubin", "Ballaststoffe"],
    karteikarten: [],
  },

  // ─── B2: stuhlausscheidung-bristol ────────────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-bristol",
    themaId: "stuhlausscheidung",
    titel: "Bristol Stool Scale",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du sollst dokumentieren, wie der Stuhl eines Patienten aussieht. 'Weich' oder 'fest' reicht dem Arzt nicht. Wie könntest du die Form so beschreiben, dass jeder Kollege sie sich genau vorstellen kann?",
      antwort:
        "Die Bristol Stool Scale (Heaton 1997) beschreibt 7 Typen. Typ 3–5 gilt als normal, Typ 1–2 als Obstipation, Typ 6–7 als Diarrhoe.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **Bristol Stool Scale** (Heaton 1997) beschreibt 7 Typen: Typ 1–2 sind harte Kugeln/klumpige Wurst = Obstipation, Typ 3–5 sind rissige Wurst, glatte Wurst und weiche Klümpchen = normal, Typ 6–7 sind breiig und wässrig = Diarrhoe.",
      textB1:
        "Die **Bristol-Skala** zeigt 7 Typen von Stuhl. Typ 1 und 2 sind hart wie Kugeln (Verstopfung). Typ 3, 4 und 5 sind normal (geformte Wurst bis weiche Klümpchen). Typ 6 und 7 sind ganz weich oder flüssig (Durchfall).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-02",
        phase: 3,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Heaton Bristol Stool Scale, 1997"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Die 7 Typen der Bristol Stool Scale kennen, Normalbereich (Typ 3–5) und pathologische Bereiche (Typ 1–2, Typ 6–7) unterscheiden und in der Dokumentation anwenden.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Bristol Stool Scale",
          body: "Die **Bristol Stool Scale** wurde 1997 von Heaton und Lewis in Bristol entwickelt und ist heute der **internationale Standard** für die Beschreibung der Stuhlform. Sie bildet die **Darmtransitzeit** ab: harter Stuhl = langsamer Transit, flüssiger Stuhl = schneller Transit.\n\nDie 7 Typen:\n- **Typ 1** — einzelne harte Klumpen, wie Nüsse → Obstipation\n- **Typ 2** — wurstförmig, aber klumpig → Obstipation\n- **Typ 3** — wurstförmig mit Rissen → normal-fest\n- **Typ 4** — glatte Wurst, wie eine Schlange → **Idealtyp**\n- **Typ 5** — weiche Klümpchen mit klaren Rändern → normal-weich\n- **Typ 6** — flockige Stücke, zerfasert → leichte Diarrhoe\n- **Typ 7** — komplett flüssig, keine festen Anteile → Diarrhoe\n\nEinsatz: bei jeder Dokumentation der Ausscheidung, besonders bei Obstipation, Diarrhoe, Stoma-Patienten oder unter Laxantien-Therapie.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Bristol Stool Scale",
          body: "Die **Bristol-Skala** kommt aus England. Sie hilft, den Stuhl genau zu beschreiben. Es gibt 7 Typen:\n- **Typ 1** — harte kleine Kugeln (wie Nüsse) → Verstopfung\n- **Typ 2** — wurstförmig, aber klumpig → Verstopfung\n- **Typ 3** — Wurst mit Rissen auf der Oberfläche → normal\n- **Typ 4** — glatte, weiche Wurst → **der beste Typ**\n- **Typ 5** — weiche Klümpchen → normal\n- **Typ 6** — breiig, zerfasert → leichter Durchfall\n- **Typ 7** — flüssig, wie Wasser → Durchfall\n\nJeder Kollege versteht, wie der Stuhl aussieht. Wir benutzen die Skala beim Dokumentieren, besonders bei Verstopfung, Durchfall und Stoma-Patienten.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Bristol-Skala", "Darmtransitzeit"],
    karteikarten: [],
  },

  // ─── B3: stuhlausscheidung-mekonium ───────────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-mekonium",
    themaId: "stuhlausscheidung",
    titel: "Mekonium — Erster Stuhl des Neugeborenen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wusstest du, dass Neugeborene in den ersten 2 Tagen einen ganz besonderen Stuhl haben — er ist fast schwarz. Was könnte der Grund dafür sein? Was ist da drin, wenn das Baby doch noch nichts gegessen hat?",
      antwort:
        "Mekonium ist der erste Stuhl: schwarz-grünlich, zähklebig, geruchlos. Enthält Fruchtwasser, Darmzellen, Gallenfarbstoff, Lanugohaare. Abgang in den ersten 24–48 Stunden.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Mekonium** ist der erste Stuhl eines Neugeborenen. Es ist schwarz-grünlich, zähklebig und geruchlos. Es enthält Fruchtwasser, Darmzellen, Gallenfarbstoff und Haare (Lanugo). Der Abgang erfolgt normalerweise in den ersten 24–48 Stunden.",
      textB1:
        "**Mekonium** ist der erste Stuhl eines Babys nach der Geburt. Er ist schwarz-grün, klebrig und riecht nicht. Er enthält Reste aus dem Bauch der Mutter: Fruchtwasser, alte Darmzellen und Haare (Lanugo).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-03",
        phase: 3,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Fachliteratur Neonatologie"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Mekonium erkennen, Inhalt benennen und wissen, ab wann das Ausbleiben pathologisch ist.",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Mekonium — Erster Stuhl des Neugeborenen",
          body: "**Mekonium** (auch 'Kindspech') ist der erste Stuhl eines Neugeborenen. Es bildet sich bereits im Mutterleib und wird in den ersten 24–48 Stunden nach der Geburt ausgeschieden.\n\n**Aussehen:** schwarz-grünlich bis dunkelgrün, zähklebig (teerartig), geruchlos.\n\n**Inhalt:** verschlucktes Fruchtwasser, abgeschilferte Darmepithelzellen, Gallenfarbstoffe, Darmsekrete, Lanugohaare.\n\n**Klinische Bedeutung:**\n- **Ausbleiben** > 48 Stunden → Verdacht auf Darmverschluss oder **Morbus Hirschsprung** (angeborene Aganglionose)\n- **Mekonium im Fruchtwasser** (grünliches Fruchtwasser bei Geburt) → fetaler Stress, Aspirationsgefahr\n\nNach einigen Tagen wechselt der Stuhl zu **Übergangsstuhl** (gelb-grün) und beim gestillten Kind zu **Muttermilchstuhl** (goldgelb, dünnflüssig, süßlich).",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Mekonium — Erster Stuhl des Neugeborenen",
          body: "**Mekonium** ist der erste Stuhl eines Neugeborenen. Ein anderes Wort ist **Kindspech**.\n\n**Wie sieht es aus?** Schwarz-grün, sehr klebrig (wie Teer), riecht nicht.\n\n**Wann kommt es?** In den ersten 24 bis 48 Stunden nach der Geburt.\n\n**Was ist drin?** Reste aus dem Bauch der Mutter: Fruchtwasser, tote Darmzellen, Haare (Lanugo).\n\n**Wichtig für die Pflege:**\n- Kommt das Mekonium nicht innerhalb von 48 Stunden? Dann Arzt holen — es könnte ein Darmverschluss sein.\n- Ist das Fruchtwasser grün bei der Geburt? Dann hatte das Baby Stress — dokumentieren.\n\nNach ein paar Tagen wird der Stuhl normal: bei Muttermilch-Babys goldgelb und weich.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Mekonium", "Lanugo", "Muttermilchstuhl", "Morbus Hirschsprung"],
    karteikarten: [],
  },

  // ─── B4: stuhlausscheidung-diarrhoe-def ───────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-diarrhoe-def",
    themaId: "stuhlausscheidung",
    titel: "Diarrhoe — Definition und Hauptkomplikationen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient sagt: 'Ich habe Durchfall.' Was möchtest du genauer wissen, bevor du ihm glaubst — und warum reicht 'weich' nicht aus?",
      antwort:
        "Diarrhoe ist definiert als mehr als 3 ungeformte Stühle pro Tag oder Stuhlmenge über 250 g/24 h. Hauptgefahr: Dehydratation und Elektrolytverlust.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Diarrhoe** ist definiert als **mehr als 3 ungeformte, dünnflüssige Stühle pro Tag** oder einer Stuhlmenge über 250 g/Tag. Kernproblem: **Flüssigkeits- und Elektrolytverlust** — vor allem bei Kindern und alten Menschen kritisch (Dehydratationsgefahr).",
      textB1:
        "**Diarrhoe** heißt auf Deutsch **Durchfall**. Das heißt: mehr als 3× am Tag dünnflüssiger Stuhl. Oder mehr als 250 Gramm am Tag. Das Hauptproblem ist: Der Körper verliert viel Wasser und Salze. Das ist gefährlich, besonders für Kinder und alte Menschen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-04",
        phase: 3,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["WHO", "S3-Leitlinie Gastrointestinale Infektionen 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Diarrhoe korrekt definieren, Hauptkomplikationen benennen und pflegerische Prioritäten ableiten.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Diarrhoe — Definition und Hauptkomplikationen",
          body: "**Diarrhoe (Durchfall)** — Definition nach WHO und S3-Leitlinie: mindestens **3 ungeformte Stühle pro Tag** oder Stuhlmenge über **250 g pro 24 h** (Bristol-Typ 6–7).\n\n**Pathophysiologie:** Der Dünndarm sezerniert ~9 Liter Flüssigkeit pro Tag. Normalerweise wird fast alles resorbiert. Bei Diarrhoe ist dieses Gleichgewicht gestört.\n\n**Hauptkomplikation:** **Dehydratation** und **Elektrolytverlust** (Kalium, Natrium, Bikarbonat). Risikogruppen: Säuglinge, Kleinkinder, Hochbetagte, Immunsupprimierte.\n\n**Warnzeichen:**\n- Exsikkose (stehende Hautfalten, trockene Schleimhäute, eingefallene Augen)\n- Oligurie\n- Blutbeimengungen oder Schleim\n- Hohes Fieber\n- Diarrhoe > 3 Tage (Erwachsene) / > 24 h (Säuglinge)\n\n**Pflegerische Prioritäten:** Flüssigkeits-Bilanz, orale Rehydratation (Glucose + Elektrolyte), Hautschutz perianal, Kontakt-Isolation bei infektiösem Verdacht.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Diarrhoe — Definition und Hauptkomplikationen",
          body: "**Diarrhoe** heißt **Durchfall**. Die Definition:\n- Mehr als 3× pro Tag dünnflüssiger Stuhl, ODER\n- Mehr als 250 Gramm Stuhl am Tag\n\n**Warum ist das gefährlich?** Der Körper verliert viel **Wasser und Salze**. Besonders schlimm für Babys, kleine Kinder und alte Menschen.\n\n**Warnzeichen** (Patient sofort dem Arzt zeigen):\n- Haut trocken, Hautfalten bleiben stehen\n- Mund ganz trocken\n- Augen eingefallen\n- Patient pinkelt kaum noch\n- Blut oder Schleim im Stuhl\n- Hohes Fieber\n- Durchfall > 3 Tage (Erwachsene) oder > 1 Tag (Babys)\n\n**Das Wichtigste in der Pflege:** Trinken!, Genau aufschreiben (Häufigkeit, Menge, Trinkmenge), Haut am Po schützen.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Diarrhoe", "Dehydratation", "Exsikkose", "Elektrolyte", "Oligurie", "orale Rehydratation"],
    karteikarten: [],
  },

  // ─── B5: stuhlausscheidung-diarrhoe-arten ─────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-diarrhoe-arten",
    themaId: "stuhlausscheidung",
    titel: "Diarrhoe-Arten — Dauer und Mechanismus",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Zwei Patienten haben Durchfall. Patient A hat ihn seit 2 Tagen mit Fieber nach einem Restaurantbesuch. Patient B hat seit 6 Monaten immer wieder Durchfall mit Blut. Ist das dieselbe Krankheit — oder etwas ganz anderes?",
      antwort:
        "Diarrhoe wird nach Dauer (akut/persistierend/chronisch) und Mechanismus (osmotisch/sekretorisch/entzündlich/motil) klassifiziert.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Diarrhoe-Formen nach Dauer und Mechanismus: **akut** (meist infektiös, < 2 Wochen), **chronisch** (> 4 Wochen, oft CED oder Malabsorption), **osmotisch** (durch Laxantien, Laktose), **sekretorisch** (Cholera, VIPom — enterotoxisch), **entzündlich** (Blut/Schleim, CED).",
      textB1:
        "Es gibt **verschiedene Arten** von Durchfall: **akut** (kurz, meist Magen-Darm-Infekt), **chronisch** (lang, über 4 Wochen), **osmotisch** (zu viel Zucker oder Laxantien ziehen Wasser in den Darm), **sekretorisch** (der Darm gibt selbst Wasser ab, z.B. Cholera).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-05",
        phase: 3,
        stepType: "matrix",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["S3-Leitlinie Gastrointestinale Infektionen 2023", "RKI 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Diarrhoe nach Dauer und Pathomechanismus klassifizieren und die hygienischen Konsequenzen (insb. C. difficile) ableiten.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Diarrhoe-Arten — Dauer und Mechanismus",
          body: "Diarrhoe wird nach **Dauer** und **Pathomechanismus** eingeteilt:\n\n**Nach Dauer:**\n- **Akut** — bis 2 Wochen. Meist infektiös (Norovirus, Rotavirus, Salmonellen, Campylobacter, C. difficile)\n- **Persistierend** — 2–4 Wochen\n- **Chronisch** — über 4 Wochen. Ursachen: CED, Malabsorption (Zöliakie, Laktose-Intoleranz), Tumoren\n\n**Nach Mechanismus:**\n- **Osmotisch** — unresorbierbare Stoffe ziehen Wasser in den Darm. Typisch bei Laxantien (Macrogol), Laktose-Intoleranz. **Sistiert beim Fasten.**\n- **Sekretorisch** — aktive Wassersekretion. Typisch bei **Cholera** (Reiswasserstuhl). **Persistiert auch beim Fasten.**\n- **Entzündlich/Exsudativ** — Blut, Schleim, Eiter. CED, Shigellen, EHEC, C. difficile\n- **Motilitätsstörung** — beschleunigte Transitzeit. Hyperthyreose, Reizdarm\n\nWichtig: Bei **Clostridioides difficile** wirkt Händealkohol **nicht** — nur Waschen mit Wasser und Seife!",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Diarrhoe-Arten — Dauer und Mechanismus",
          body: "Durchfall hat **verschiedene Arten** — nach Zeit und Ursache:\n\n**Nach Zeit:**\n- **Akut**: kurz, bis 2 Wochen. Oft Magen-Darm-Infekt.\n- **Chronisch**: lang, über 4 Wochen. Oft Morbus Crohn, Colitis ulcerosa oder Unverträglichkeit.\n\n**Nach Ursache:**\n- **Osmotisch**: Stoff zieht Wasser in den Darm (Laxantien, Laktose). **Hört auf beim Fasten.**\n- **Sekretorisch**: Darm gibt selbst Wasser ab (Cholera). **Hört NICHT auf beim Fasten.**\n- **Entzündlich**: Blut oder Schleim (Morbus Crohn).\n\n**Wichtig für die Pflege:** Bei Magen-Darm-Infekt Isolation + Hände mit Seife waschen. Bei **Clostridium difficile** hilft Handalkohol **nicht** — nur Wasser und Seife!",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["osmotische Diarrhoe", "sekretorische Diarrhoe", "Clostridioides difficile", "Cholera", "Reiswasserstuhl", "CED"],
    karteikarten: [],
  },

  // ─── B6: stuhlausscheidung-obstipation-def ────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-obstipation-def",
    themaId: "stuhlausscheidung",
    titel: "Obstipation — Definition und Rom-IV-Kriterien",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient sagt: 'Ich bin verstopft.' Welche Fragen stellst du, um zu entscheiden, ob das wirklich eine Obstipation ist — oder nur ein persönliches Gefühl?",
      antwort:
        "Obstipation liegt vor, wenn mind. 2 von 6 Rom-IV-Kriterien zutreffen: < 3 Stühle/Woche, harter Stuhl, starkes Pressen, Gefühl unvollständiger Entleerung, Blockadegefühl, manuelle Manöver.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Obstipation** ist nicht nur 'selten Stuhlgang'. Nach **Rom-IV-Kriterien** liegt sie vor, wenn **mindestens 2 von 6 Merkmalen** zutreffen: < 3 Stühle pro Woche, harter Stuhl (Bristol 1–2), starkes Pressen, Gefühl unvollständiger Entleerung, Blockadegefühl, manuelle Unterstützung nötig.",
      textB1:
        "**Obstipation** heißt **Verstopfung**. Das ist mehr als 'selten Stuhlgang'. Wenn **2 oder mehr** von diesen Zeichen stimmen, ist es Obstipation: weniger als 3× pro Woche Stuhlgang, harter Stuhl, starkes Pressen, Gefühl 'es kommt nicht alles raus', Blockadegefühl.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-06",
        phase: 3,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k Chronische Obstipation, 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Obstipation korrekt definieren (Rom-IV), Rote Flaggen kennen und Komplikationen benennen.",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Obstipation — Definition und Rom-IV-Kriterien",
          body: "**Obstipation** ist nicht gleichzusetzen mit 'selten Stuhlgang'. Die **Rom-IV-Kriterien** definieren Obstipation, wenn **mindestens 2 von 6 Merkmalen** in ≥ 25 % der Stuhlgänge über **3 Monate** vorliegen:\n\n1. **Weniger als 3 Stuhlgänge pro Woche**\n2. **Harter oder klumpiger Stuhl** (Bristol 1–2)\n3. **Starkes Pressen** erforderlich\n4. **Gefühl der unvollständigen Entleerung**\n5. **Gefühl der analen Blockade**\n6. **Manuelle Manöver** zur Entleerung nötig\n\n**Häufigkeit:** 10–15 % der Allgemeinbevölkerung, 30–60 % der Altenheimbewohner (AWMF 2022).\n\n**Komplikationen:** Hämorrhoiden, Analfissuren, Koprostase, paradoxe Diarrhoe, Sub-/Ileus.\n\n**Rote Flagge:** Neu aufgetretene Obstipation nach dem 50. Lebensjahr + Blutbeimengung / Gewichtsverlust → **Kolon-Karzinom ausschließen!**",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Obstipation — Definition und Rom-IV-Kriterien",
          body: "**Obstipation** heißt **Verstopfung**. Die **Rom-IV-Kriterien** sagen: Wenn **2 von 6 Zeichen** stimmen (über 3 Monate), ist es Obstipation:\n\n1. **Weniger als 3× pro Woche** Stuhlgang\n2. **Harter Stuhl** (Bristol Typ 1–2)\n3. **Stark pressen** müssen\n4. Gefühl **'es kommt nicht alles raus'**\n5. Gefühl **'da ist etwas blockiert'**\n6. **Mit der Hand nachhelfen** müssen\n\n**Häufigkeit:** 10–15 % aller Menschen. Im Altenheim sogar 30–60 %.\n\n**ACHTUNG — rote Flagge:** Wenn **nach dem 50. Lebensjahr** plötzlich Verstopfung neu auftritt, mit **Blut** oder **Gewichtsverlust** — **immer dem Arzt melden**! Das kann Darmkrebs sein.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Obstipation", "Rom-IV-Kriterien", "Koprostase", "Slow-Transit", "Outlet-Obstruction", "Hämorrhoiden", "Analfissur"],
    karteikarten: [],
  },

  // ─── B7: stuhlausscheidung-paradoxe-diarrhoe ──────────────────────────────
  {
    bausteinId: "stuhlausscheidung-paradoxe-diarrhoe",
    themaId: "stuhlausscheidung",
    titel: "Paradoxe Diarrhoe bei Koprostase",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 82-jähriger Heimbewohner hat seit einigen Tagen 'Durchfall' — mehrmals täglich kleine flüssige Mengen in der Windel. Was könnte überraschenderweise die **Ursache** sein — und warum wäre Imodium gegen den Durchfall hier **gefährlich**?",
      antwort:
        "Paradoxe Diarrhoe: Harter Stuhl sitzt fest im Rektum (Koprostase), dünnflüssiger Stuhl läuft als Überlauf vorbei. Loperamid verschlimmert die Koprostase bis zum Ileus.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **paradoxe Diarrhoe** ist eine **täuschende Situation**: Im Rektum/Sigma sitzt eine **harte Stuhlmasse (Koprostase)**, oberhalb davon sammelt sich **dünnflüssiger Stuhl**, der an der Masse vorbei als 'Überlauf' abgeht. Patient hat **Obstipation** — es sieht aus wie Durchfall.",
      textB1:
        "Die **paradoxe Diarrhoe** ist eine **Falle**: Im Darm unten sitzt **harter Stuhl fest** (Koprostase). Oberhalb sammelt sich dünner Stuhl. Dieser **läuft außen an der harten Masse vorbei** — wie bei einem verstopften Abfluss. Der Patient hat **Verstopfung**, aber es sieht aus wie Durchfall.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-07",
        phase: 3,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k Chronische Obstipation, 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Paradoxe Diarrhoe erkennen, Pathomechanismus erklären und kontraindizierte Therapie (Loperamid) begründen.",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Paradoxe Diarrhoe bei Koprostase",
          body: "Die **paradoxe Diarrhoe** (Überlaufinkontinenz bei Koprostase) ist eine häufig verkannte Form der Obstipation, besonders bei alten, immobilen oder demenzkranken Patienten.\n\n**Pathomechanismus:**\n1. Harter Stuhl sammelt sich im Rektum/Sigma → **Koprostase** (Fäkalom)\n2. Dahinter (proximal) staut sich flüssiger Stuhl auf\n3. Reizung der Darmwand → vermehrte Schleimproduktion\n4. Flüssiger Stuhl sickert an der festen Masse vorbei → unkontrollierter Abgang\n\n**Klinisches Bild:** Häufige kleine dünnflüssige Stuhlabgänge, Stuhlschmieren, geblähter druckempfindlicher Bauch, rektale Untersuchung tastet harte Massen, Appetitlosigkeit, Übelkeit, Unruhe.\n\n**Warum kein Loperamid:** Loperamid hemmt die Peristaltik → Koprostase massiv verschlimmert bis zum Ileus.\n\n**Therapie:** Manuelle Ausräumung + Einläufe, danach Stufenplan gegen Obstipation.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Paradoxe Diarrhoe bei Koprostase",
          body: "Die **paradoxe Diarrhoe** ist eine **Falle** — sieht aus wie Durchfall, ist aber **Verstopfung**.\n\n**Was passiert im Darm?**\n1. Im Darm unten sammelt sich **harter Stuhl** — er bleibt stecken (**Koprostase**)\n2. Oberhalb sammelt sich **dünner Stuhl**\n3. Der dünne Stuhl **läuft außen vorbei** an dem harten Klumpen\n4. Er kommt in kleinen Mengen heraus — oft in die Windel\n\n**Wer bekommt das?** Alte Menschen die viel liegen, Menschen mit Demenz, Patienten mit Opioiden.\n\n**Was merkst du?** Kleine Mengen dünner Stuhl, harter aufgetriebener Bauch, kein Appetit, Unruhe.\n\n**WICHTIG:** Keine Durchfall-Medikamente geben (kein Imodium)! Arzt melden. Einlauf oder manuelle Ausräumung. Danach Plan gegen Verstopfung.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["paradoxe Diarrhoe", "Koprostase", "Fäkalom", "Stuhlschmieren", "Loperamid", "Ileus"],
    karteikarten: [],
  },

  // ─── B8: stuhlausscheidung-obstipationsursachen ────────────────────────────
  {
    bausteinId: "stuhlausscheidung-obstipationsursachen",
    themaId: "stuhlausscheidung",
    titel: "Obstipation — 5 Hauptursachen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du pflegst Herrn K., 72 Jahre, bettlägerig, trinkt kaum, bekommt Morphin gegen Schmerzen. Seit 5 Tagen kein Stuhlgang. Welche 3 Ursachen fallen dir spontan ein?",
      antwort:
        "Immobilität, Trinkmangel, Opioide (OIC bei >90% aller Opioid-Patienten → prophylaktisch Laxans obligat), Ballaststoffmangel, Kolonerkrankungen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Obstipation entsteht fast immer durch eine Kombination aus Immobilität, Trinkmangel, ballaststoffarmer Ernährung und/oder Medikamenten — jede Ursache ist pflegerisch beeinflussbar.",
      textB1:
        "Meistens kommen mehrere Dinge zusammen: wenig Bewegung, zu wenig trinken, wenig Ballaststoffe, Morphin-ähnliche Mittel (OIC) und manchmal Darmerkrankungen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-08",
        phase: 3,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k Chronische Obstipation, 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Die 5 häufigsten Ursachen einer Obstipation benennen und insbesondere OIC als obligate Prophylaxeindikation erkennen.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Obstipation — 5 Hauptursachen",
          body: "**Obstipation: Die 5 häufigsten Ursachen**\n\n**1. Immobilität:** Körperbewegung regt die Darmperistaltik an. Wer liegt, hat eine träge Darmtätigkeit — besonders Ältere und Bettlägerige.\n\n**2. Trinkmangel:** Der Dickdarm entzieht dem Stuhl Wasser. Bei Dehydration wird der Stuhl zu hart und zu trocken.\n\n**3. Ballaststoffmangel:** Ballaststoffe quellen auf, binden Wasser und geben dem Stuhl Volumen. Ohne sie fehlt der 'Sog'.\n\n**4. Medikamente — Opioide:** Morphin und andere Opioide hemmen die Darmperistaltik direkt. **Opioid-induzierte Obstipation (OIC) = fast immer!** Prophylaktisch Laxans geben!\n\n**5. Kolonerkrankungen und organische Ursachen:** Tumore, Narben, M. Hirschsprung, Hypothyreose, Diabetes mellitus.\n\n**Merke:** Selten hat ein Patient nur eine Ursache — meist ist es ein Zusammenspiel. (AWMF S2k 2022)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Obstipation — 5 Hauptursachen",
          body: "**Obstipation — Warum verstopft der Darm?**\n\nMeistens kommen mehrere Dinge zusammen:\n\n- **Wenig Bewegung:** Wer liegt, hat einen trägen Darm. Bewegung 'massiert' den Darm.\n- **Zu wenig trinken:** Der Dickdarm nimmt dem Stuhl Wasser weg. Wenig trinken = harter Stuhl.\n- **Wenig Ballaststoffe:** Gemüse, Vollkorn und Hülsenfrüchte bringen Volumen. Ohne sie zu wenig Stuhl.\n- **Morphin und Schmerzpflaster (Opioide):** Diese Mittel bremsen den Darm aktiv. Fast alle Patienten mit Opioiden brauchen **gleichzeitig** ein Abführmittel.\n- **Krankheiten:** Manche Darmerkrankungen, Schilddrüsenunterfunktion oder Darmnarben.\n\nWenn du diese Risikofaktoren siehst — **melde es früh**, warte nicht bis Tag 5.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Obstipation", "Peristaltik", "Opioide", "OIC", "Ballaststoffe", "Kolonerkrankung", "Megakolon", "Dehydration"],
    karteikarten: [],
  },

  // ─── B9: stuhlausscheidung-obstipation-massnahmen ─────────────────────────
  {
    bausteinId: "stuhlausscheidung-obstipation-massnahmen",
    themaId: "stuhlausscheidung",
    titel: "Nicht-medikamentöse Maßnahmen bei Obstipation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau B., 68 Jahre, nach Hüft-OP, liegt viel, trinkt ca. 800 ml/Tag, isst Weißbrot. Drei Tage kein Stuhlgang. Bevor du ein Laxans nimmst — was machst du zuerst?",
      antwort:
        "5 nicht-medikamentöse Maßnahmen vor dem Laxans: Flüssigkeit 1,5–2 l/Tag, Bewegung, Ballaststoffe + Flüssigkeit, Toilettentraining nach Frühstück (gastrokolischer Reflex), Bauchmassage im Uhrzeigersinn.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Vor dem Griff zur Tablette stehen fünf pflegerische Maßnahmen — Trinken, Bewegung, Ballaststoffe, Toilettentraining und Bauchmassage — deren Kombination bei leichter Obstipation ausreicht.",
      textB1:
        "Zuerst die 5 Schritte: mehr trinken (warm morgens!), Bewegung, Ballaststoffe + Flüssigkeit, morgens nach dem Frühstück zur Toilette, Bauchmassage im Uhrzeigersinn. Erst wenn das nicht reicht — Abführmittel.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-09",
        phase: 3,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k Chronische Obstipation, 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Nicht-medikamentöse Maßnahmen bei Obstipation priorisiert planen und den gastrokolischen Reflex für das Toilettentraining nutzen.",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Nicht-medikamentöse Maßnahmen bei Obstipation",
          body: "**Nicht-medikamentöse Maßnahmen bei Obstipation — Stufenplan**\n\n**Schritt 1 — Flüssigkeit:** Ziel 1,5–2 l/Tag, warm ist besser. Warme Getränke regen den Defäkationsreflex an. Morgens nüchtern 1 Glas warmes Wasser.\n\n**Schritt 2 — Bewegung:** Auch im Bett: Beine wechselseitig anwinkeln, Rumpfrotation, aufstehen → Stuhl. Jede Bewegung = Peristaltikstimulation.\n\n**Schritt 3 — Ballaststoffe steigern:** Ziel 30 g/Tag. Vollkornbrot, Haferflocken, Flohsamenschalen (10–20 g/Tag), Trockenobst. Immer mit ausreichend Flüssigkeit!\n\n**Schritt 4 — Toilettentraining:** Defäkationsreflex ist am stärksten 20–30 Min nach dem Frühstück (gastrokolischer Reflex). Regelmäßig zur Toilette — auch ohne Drang, mit Fußbank (30°-Hockstellung).\n\n**Schritt 5 — Bauchmassage:** Im Uhrzeigersinn entlang des Dickdarms (Colon ascendens → transversum → descendens), 5–10 Min, 1–2×/Tag.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Nicht-medikamentöse Maßnahmen bei Obstipation",
          body: "**Was tust du bei Verstopfung — bevor du ein Abführmittel gibst?**\n\n**1. Mehr trinken:** Ziel 1,5–2 Liter. Warmes Wasser oder Tee morgens nüchtern hilft am besten.\n\n**2. Bewegung:** Auch im Bett Beine bewegen, aufstehen wenn möglich. Bewegung 'weckt' den Darm auf.\n\n**3. Mehr Ballaststoffe:** Vollkornbrot, Haferflocken, Pflaumen, Flohsamen (mit viel Trinken!). Ziel: 30 g Ballaststoffe am Tag.\n\n**4. Toilettenroutine:** Am besten 20–30 Min nach dem Frühstück zur Toilette — dann ist der Darm am aktivsten. Fußbank unter die Füße stellen.\n\n**5. Bauchmassage:** Sanft im Uhrzeigersinn den Bauch massieren — entlang des Dickdarms.\n\nWenn das nach 2–3 Tagen nicht hilft, dann kommt ein Abführmittel.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["gastrokolischer Reflex", "Defäkationsreflex", "Flohsamenschalen", "Ballaststoffe", "Bauchmassage", "Hockstellung"],
    karteikarten: [],
  },

  // ─── B10: stuhlausscheidung-laxantien-stufenplan ──────────────────────────
  {
    bausteinId: "stuhlausscheidung-laxantien-stufenplan",
    themaId: "stuhlausscheidung",
    titel: "Laxanzien-Stufenplan",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Dein Arzt fragt dich: 'Was würdest du bei Herrn M. nehmen — er hat seit 4 Tagen keinen Stuhlgang, trinkt wenig, bekommt Morphin?' Was schlägst du vor?",
      antwort:
        "Laxanzien werden nach Stufenplan eingesetzt: osmotische Mittel zuerst (Macrogol = 1. Wahl), dann stimulierende, Quellmittel als Dauertherapie, Einlauf bei akuter Koprostase.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Laxanzien werden nach einem Stufenplan eingesetzt — osmotische Mittel zuerst, dann stimulierende, Quellmittel als Dauertherapie, Einlauf bei akuter Koprostase.",
      textB1:
        "Abführmittel gibt es in 4 Arten. Zuerst immer die nicht-medikamentösen Maßnahmen. Dann Macrogol. Dann Bisacodyl kurz. Flohsamen für Dauerhilfe. Einlauf erst bei hartem Stuhl der steckt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-10",
        phase: 3,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S2k Chronische Obstipation, 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Die 4 Laxanziengruppen nach Wirkprinzip unterscheiden und den Stufenplan anwenden.",
        tag: "krankheitslehre",
        displayFormat: "checklist",
        contentC1: {
          title: "Laxanzien-Stufenplan",
          body: "**Laxanzien-Stufenplan — 4 Gruppen**\n\n**Gruppe 1 — Osmotische Laxanzien (1. Wahl):**\n- **Macrogol (PEG):** Bindet Wasser im Darm, weicht Stuhl auf. Wirkt nach 1–2 Tagen. Sehr gut verträglich, Dauertherapie möglich. Standard bei OIC.\n- **Lactulose:** Osmotisch + bakteriell fermentiert → Gasbildung (Blähungen, Bauchkrämpfe). Wirkt nach 1–3 Tagen.\n\n**Gruppe 2 — Stimulierende Laxanzien (kurzfristig):**\n- **Bisacodyl** (Dulcolax): Regt Peristaltik direkt an. Oral 6–12 h, Zäpfchen 20–60 Min. Nicht als Dauertherapie!\n- **Natriumpicosulfat:** Ähnlich Bisacodyl, als Tropfen.\n\n**Gruppe 3 — Quellmittel (Dauertherapie):**\n- **Flohsamenschalen (Psyllium)**, Leinsamen. Brauchen viel Flüssigkeit! Wirken nach 2–3 Tagen.\n\n**Gruppe 4 — Einlauf/Klysmen (Koprostase):**\n- Mikroklistier: 5–10 ml rektal, wirkt 5–15 Min\n- Hoher Einlauf: 500–1000 ml, bei Koprostase im Sigma\n\n**Stufenplan:** nicht-medikamentös → Macrogol → Bisacodyl (kurzfristig) → Einlauf bei Koprostase.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Laxanzien-Stufenplan",
          body: "**Abführmittel — 4 Arten**\n\n**Art 1 — Wasser im Darm halten (Macrogol, Lactulose):**\nHalten Wasser im Darm. Stuhl wird weicher. Macrogol wird besser vertragen (keine Gasbildung). Kann lange gegeben werden.\n\n**Art 2 — Darm direkt anregen (Bisacodyl):**\nStößt den Darm an. Zäpfchen wirkt schneller (20–60 Min) als Tablette (6–12 h). Nur kurze Zeit nehmen!\n\n**Art 3 — Quellen und Volumen (Flohsamen):**\nQuillt im Darm auf. Wichtig: viel trinken dazu! Hilft als Dauerhilfe.\n\n**Art 4 — Einlauf (Klysma):**\nBei hartem Stuhl der steckt. Kleine Menge Wasser direkt in den Darm. Wirkt schnell.\n\n**Merke:** Erst nicht-medikamentöse Maßnahmen. Dann Macrogol. Dann Bisacodyl kurz. Einlauf bei echter Koprostase. Bei Morphin: Macrogol immer sofort dazu.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Macrogol", "Lactulose", "Bisacodyl", "Natriumpicosulfat", "Flohsamenschalen", "Klysmen", "Koprostase", "osmotisch", "OIC"],
    karteikarten: [],
  },

  // ─── B11: stuhlausscheidung-meteorismus-flatulenz ─────────────────────────
  {
    bausteinId: "stuhlausscheidung-meteorismus-flatulenz",
    themaId: "stuhlausscheidung",
    titel: "Meteorismus und Flatulenz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau S., 75 Jahre, klagt über einen aufgetriebenen, harten Bauch und häufigen Windabgang. Kein Stuhlgang seit 2 Tagen. Was fällt dir ein, was die Ursache sein könnte?",
      antwort:
        "Meteorismus = Gasansammlung im Darm. Flatulenz = übermäßiger Windabgang (>20×/Tag). Ursachen: Ernährung, Darmträgheit, Malabsorption, Aerophagie.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Blähungen entstehen durch Gasbildung im Darm — meist durch Ernährung, Darmträgheit oder Darmerkrankungen; pflegerische Maßnahmen reduzieren sie zuverlässig.",
      textB1:
        "**Meteorismus** = der Bauch ist aufgebläht und gespannt. **Flatulenz** = viele Winde (>20×/Tag pathologisch). Woher? Bestimmte Speisen, langsamer Darm, Luft schlucken, Unverträglichkeiten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-11",
        phase: 3,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fachliteratur Gastroenterologie"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Meteorismus und Flatulenz unterscheiden, Ursachen benennen und pflegerische Maßnahmen einleiten.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Meteorismus und Flatulenz",
          body: "**Meteorismus und Flatulenz**\n\n**Definitionen:**\n- **Meteorismus:** Übermäßige Gasansammlung im Darm → aufgetriebener, gespannter Bauch (Perkussion: Tympanie)\n- **Flatulenz:** Übermäßiger Windabgang (>20×/Tag gilt als pathologisch)\n\n**Häufige Ursachen:**\n- Ernährung: Hülsenfrüchte, Kohl, Zwiebeln, kohlensäurehaltige Getränke → bakterielle Fermentation → Gase (H₂, CH₄, CO₂)\n- Darmträgheit/Obstipation: Verlangsamte Passage → mehr Fermentation\n- Reizdarmsyndrom (RDS): erhöhte Gasproduktion + viszerale Hypersensitivität\n- Malabsorption: Zöliakie, Laktose-/Fruktoseintoleranz\n- Aerophagie: Luft schlucken beim schnellen Essen\n\n**Pflegerische Maßnahmen:**\n1. Blähende Speisen reduzieren (Hülsenfrüchte, Kohl, Kohlensäure)\n2. Wärmeapplikation: Wärmflasche auf Bauch → Entspannung der Darmmuskulatur\n3. Bauchmassage im Uhrzeigersinn\n4. Bewegung fördern\n5. Kümmel-/Fenchel-/Anistee (Karminativa)\n6. Bei Obstipation: Ursache behandeln\n7. Simethicon bei ärztlicher Anordnung\n\n**Warnsignal Ileus:** Plötzlicher starker Meteorismus + Schmerzen + kein Wind + kein Stuhl → **sofort Arzt rufen!**",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Meteorismus und Flatulenz",
          body: "**Blähungen — was ist das und was kannst du tun?**\n\n**Meteorismus** = der Bauch ist aufgebläht. **Flatulenz** = viele Winde.\n\n**Woher kommen Blähungen?**\n- Bohnen, Erbsen, Kohl, Zwiebeln → Gase entstehen im Darm\n- Kohlensäure in Getränken\n- Langsamer Darm (Verstopfung)\n- Zu schnell essen, Luft schlucken\n- Manchmal: Unverträglichkeit (Milch, Weizen, Fruchtzucker)\n\n**Was tust du als Pflegekraft?**\n1. Blähende Speisen weglassen oder reduzieren\n2. Wärmflasche auf den Bauch — entspannt den Darm, Winde können abgehen\n3. Bauchmassage im Uhrzeigersinn\n4. Bewegung — auch Beine im Bett bewegen hilft\n5. Kümmel- oder Fencheltee\n6. Wenn Verstopfung die Ursache ist — dagegen behandeln\n\n**ACHTUNG:** Plötzlich harter Bauch + Schmerzen + kein Stuhl + kein Wind = **Darmverschluss → sofort Arzt!**",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Meteorismus", "Flatulenz", "Aerophagie", "Karminativa", "Simethicon", "Reizdarmsyndrom", "Laktoseintoleranz", "Zöliakie"],
    karteikarten: [],
  },

  // ─── B12: stuhlausscheidung-pathologische-befunde ─────────────────────────
  {
    bausteinId: "stuhlausscheidung-pathologische-befunde",
    themaId: "stuhlausscheidung",
    titel: "Pathologische Stuhlbefunde — 4 Muster",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du wechselst die Betteinlage bei Herrn F. und siehst schwarzen, teerartigen Stuhl. Dein erster Gedanke?",
      antwort:
        "Schwarzer teeriger Stuhl = Melaena = obere GI-Blutung. Notfall — sofort Arzt informieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Farbe, Konsistenz und Geruch des Stuhls sind diagnostische Signale — vier pathologische Befundmuster haben klar unterschiedliche Ursachen und Dringlichkeiten.",
      textB1:
        "4 wichtige Stuhlbefunde: Teerstuhl (schwarz) = Notfall. Rotes Blut = Arzt informieren. Hell/fettig/schwimmt = Abklärung. Grau/wässrig (Reiswasserstuhl) = Meldepflicht + Isolation.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-12",
        phase: 3,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGVS Leitlinie CED", "WHO Cholera-Leitlinie 2017"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Melaena, Hämatochezie, Steatorrhoe und Reiswasserstuhl erkennen, zuordnen und die Dringlichkeit der pflegerischen Reaktion ableiten.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pathologische Stuhlbefunde — 4 Muster",
          body: "**Pathologische Stuhlbefunde — 4 Muster**\n\n**1. Melaena (Teerstuhl):**\n- Farbe: schwarz, teerartig, klebrig, übelriechend\n- Ursache: Blutung im **oberen GI-Trakt** (Ösophagus, Magen, Duodenum) — Blut wird zu schwarzem Hämatin umgebaut\n- Dringlichkeit: **Notfall! Arzt sofort informieren.**\n- Merkregel: Oben = schwarz (weit gereist, umgebaut)\n\n**2. Hämatochezie (rektale Blutung):**\n- Farbe: hellrot bis dunkelrot, frisches Blut am oder im Stuhl\n- Ursache: Blutung im **unteren GI-Trakt** (Hämorrhoiden, Karzinom, CED)\n- Dringlichkeit: Arzt informieren, Menge + Farbe dokumentieren\n- Merkregel: Unten = rot (kurzer Weg, frisch)\n\n**3. Steatorrhoe (Fettstuhl):**\n- Farbe: hell(grau)farben, voluminös, fettig-glänzend, schwimmt, übelriechend\n- Ursache: Fettmalabsorption — Pankreasinsuffizienz, Zöliakie, Cholestase\n- Dringlichkeit: Arzt informieren, Stuhldiagnostik\n\n**4. Reiswasserstuhl (choleraähnlich):**\n- Farbe: wässrig, grau-weiß, massiv, geruchsarm\n- Ursache: Cholera (Vibrio cholerae)\n- Dringlichkeit: **Meldepflicht (IfSG)! Isolation! Notfall-Rehydration!**",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Pathologische Stuhlbefunde — 4 Muster",
          body: "**4 wichtige Stuhlbefunde**\n\n**1. Teerstuhl (Melaena) — schwarz, teerartig:**\nDas Blut kam von **oben** (Magen, Speiseröhre). Durch Magensäure schwarz geworden. **Notfall — sofort Arzt rufen!**\n\n**2. Rotes Blut im Stuhl (Hämatochezie) — hellrot bis dunkelrot:**\nDas Blut kommt von **unten** (Darm, After) — noch frisch und rot. Menge und Farbe genau beobachten und melden.\n\n**3. Fettiger, heller Stuhl (Steatorrhoe) — hell, fettig, schwimmt:**\nDer Darm nimmt kein Fett mehr auf. Mögliche Ursache: Bauchspeicheldrüse, Zöliakie. Arzt informieren.\n\n**4. Reiswasserstuhl — wässrig, grau-weiß:**\nMassenweise dünner Stuhl — mögliche Ursache: Cholera. **Meldepflicht! Isolation! Viel Flüssigkeit! Sofort Arzt!**\n\n**Merkregel:** Oben = schwarz (Melaena). Unten = rot (Hämatochezie).",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Melaena", "Hämatochezie", "Steatorrhoe", "Reiswasserstuhl", "Hämatin", "Pankreasinsuffizienz", "Cholestase", "Cholera", "Meldepflicht"],
    karteikarten: [],
  },

  // ─── B13: stuhlausscheidung-stoma-arten ───────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-stoma-arten",
    themaId: "stuhlausscheidung",
    titel: "Stomaarten — Kolostomie, Ileostomie, Urostomie",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hörst: 'Patient mit Ileostomie'. Was erwartest du bei der Stomaversorgung — und was erwartest du, wenn es eine Kolostomie wäre?",
      antwort:
        "Ileostomie = Dünndarm → dünnflüssig, kontinuierlich, Enzyme reizt Haut. Kolostomie = Dickdarm → breiig bis geformt, 1–2×/Tag. Grundlegend verschiedene Versorgungsanforderungen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Stoma ist eine künstliche Körperöffnung — je nach Stomaart unterscheiden sich Ausscheidung, Konsistenz und Versorgungsbedarf grundlegend.",
      textB1:
        "3 Stomaarten: **Kolostomie** (Dickdarm, breiig, 1–2×/Tag), **Ileostomie** (Dünndarm, dünnflüssig immer, reizt Haut), **Urostomie** (Harn, fließt immer).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-13",
        phase: 3,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["FG SKM Stoma Handlungsempfehlungen 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Die drei Stomaarten (Kolostomie, Ileostomie, Urostomie) sowie endständige und doppelläufige Anlageformen unterscheiden und benennen.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Stomaarten — Kolostomie, Ileostomie, Urostomie",
          body: "**Stomaarten — Überblick**\n\n**1. Kolostomie (Dickdarmstoma):**\n- Anlage im Dickdarm oder Sigma\n- Ausscheidung: breiig bis geformt, 1–2×/Tag, odorierend\n- Indikationen: Rektumkarzinom, M. Hirschsprung, Divertikulitis\n- Endständig oder doppelläufig\n\n**2. Ileostomie (Dünndarmstoma):**\n- Anlage im terminalen Ileum\n- Ausscheidung: dünnflüssig bis breiig, kontinuierlich, hohe Enzymaktivität → Hautreizung!\n- Volumen: 800–1500 ml/Tag, Elektrolytverluste (Na, K) beachten!\n- Indikationen: Colitis ulcerosa, M. Crohn, FAP\n- Immer hautschützende Basisplatte + häufigerer Wechsel nötig\n\n**3. Urostomie (Harnableitung):**\n- Harnleiter werden in ein Darmsegment (Ileum-Conduit) eingeleitet\n- Ausscheidung: Urin, kontinuierlich\n- Indikation: Harnblasen-Ca., neurogene Blasenentleerungsstörung\n- Urostomie-Beutel mit Ablassventil\n\n**Anlageformen:**\n- **Endständig:** Darmende dauerhaft ausgeleitet — keine Rückverlagerung\n- **Doppelläufig (Loop-Stoma):** Darmschlinge herausgezogen, zuführend + abführend → protektiv, rückverlagerbar",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Stomaarten — Kolostomie, Ileostomie, Urostomie",
          body: "**3 Stomaarten — was ist der Unterschied?**\n\n**Kolostomie** = Stoma aus dem **Dickdarm**\n- Stuhl ist schon eingedickt → breiig bis geformt\n- Riecht\n- Meist 1–2× täglich\n\n**Ileostomie** = Stoma aus dem **Dünndarm**\n- Stuhl ist noch sehr dünn und fließt fast immer\n- Viel Volumen — 800–1500 ml täglich!\n- Enthält Verdauungssäfte → reizt die Haut stark\n- Braucht besonders guten Hautschutz\n\n**Urostomie** = Harnableitung\n- Urin fließt kontinuierlich\n- Spezieller Urostomiebeutel mit Ablassventil\n\n**Endständig** = dauerhaft am Ende nach außen. **Doppelläufig** = Darmschlinge 'gefaltet', kann zurückverlagert werden.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Kolostomie", "Ileostomie", "Urostomie", "Ileum-Conduit", "endständig", "doppelläufig", "Loop-Stoma", "Hartmann-OP", "FAP"],
    karteikarten: [],
  },

  // ─── B14: stuhlausscheidung-beutelsysteme ─────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-beutelsysteme",
    themaId: "stuhlausscheidung",
    titel: "Beutelsysteme in der Stomaversorgung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du übernimmst einen Patienten mit Ileostomie. Im Schrank findest du sowohl ausstreifbare als auch geschlossene Beutel. Welchen nimmst du — und warum?",
      antwort:
        "Ausstreifbarer Beutel für Ileostomie (hohes kontinuierliches Volumen). Geschlossener Beutel für Kolostomie (1–2×/Tag, geformt).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Wahl des richtigen Beutelsystems ist entscheidend für Hautgesundheit und Lebensqualität — Auswahl nach Stomaart, Ausscheidungsvolumen und Stomamorphologie.",
      textB1:
        "Ausstreifbar = Ileostomie (viel, dünnflüssig). Geschlossen = Kolostomie (wenig, geformt). Zweiteilig = Platte 2–5 Tage, Beutel täglich — schont Haut.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-14",
        phase: 3,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["FG SKM Stoma Handlungsempfehlungen 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Einteilige und zweiteilige Systeme, ausstreifbare und geschlossene Beutel unterscheiden und wissen, wann konvexe Basisplatten indiziert sind.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Beutelsysteme in der Stomaversorgung",
          body: "**Beutelsysteme — Übersicht**\n\n**System 1 — Einteilig:** Basisplatte und Beutel fest verbunden — immer komplett wechseln. Einfacher, flacheres Profil. Für: einfache Stomata, stabile Haut.\n\n**System 2 — Zweiteilig:** Basisplatte und Beutel getrennt (Flansch). Beutel wechseln ohne Basisplatte zu entfernen. Platte bleibt 2–5 Tage; Beutel täglich. Hautschonung!\n\n**Beuteltypen:**\n- **Ausstreifbar (offen):** Beutelunterseite öffenbar → Inhalt ausleeren ohne Wechsel. Standard bei **Ileostomie** (hohes kontinuierliches Volumen)\n- **Geschlossen:** Komplett wechseln wenn voll. Für **Kolostomie** (1–2×/Tag, geformt)\n- **Urostomiebeutel:** Mit Ablassventil + Rückschlagventil\n\n**Basisplattenform:**\n- **Plan (flach):** Standard für regelrechtes Stoma\n- **Konvex:** Indiziert bei **eingesunkenem Stoma (Retraktion)** — hebt das Stoma heraus, verbessert Dichtigkeit",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Beutelsysteme in der Stomaversorgung",
          body: "**Welchen Beutel benutze ich — wann?**\n\n**Einteilig:** Platte und Beutel zusammen. Immer komplett wechseln.\n\n**Zweiteilig:** Platte bleibt 2–5 Tage, Beutel täglich wechseln. Gut für empfindliche Haut.\n\n**Ausstreifbarer Beutel:** Unten kann man ihn aufmachen und entleeren. Gut bei Ileostomie — viel und oft.\n\n**Geschlossener Beutel:** Komplett wechseln wenn voll. Gut bei Kolostomie (1–2×/Tag, geformt).\n\n**Urostomiebeutel:** Für Urin, mit Ablassventil unten.\n\n**Konvexe Basisplatte:** Wenn das Stoma zu flach oder eingesunken ist — die Platte ist leicht gewölbt und drückt die Haut nach unten, damit das Stoma besser heraussteht und dicht bleibt.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Basisplatte", "Flansch", "einteiliges System", "zweiteiliges System", "ausstreifbar", "Urostomiebeutel", "konvex", "Retraktion"],
    karteikarten: [],
  },

  // ─── B15: stuhlausscheidung-stoma-hautschutz ──────────────────────────────
  {
    bausteinId: "stuhlausscheidung-stoma-hautschutz",
    themaId: "stuhlausscheidung",
    titel: "Hautschutz in der Stomaversorgung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du versorgst das Ileostomie-Stoma von Frau A. Die Haut rund ums Stoma ist gerötet, nässt leicht. Was tust du bevor du die Basisplatte anlegst?",
      antwort:
        "Nässende Haut trocknen (Stoma-Puder), Unebenheiten füllen (alkoholfreie Stomapaste), dann Basisplatte exakt zuschneiden (Stomadurchmesser +2–3 mm).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Perristomale Haut ist die kritischste Zone — schon geringe Stuhl- oder Urinkontakte führen zu Mazeration und Nekrosen; gezielter Hautschutz ist primäre Pflegeaufgabe.",
      textB1:
        "5 Hautschutzprodukte: Basisplatte (Grundschutz), Konvexplatte (Retraktion), Stomapaste (Lücken füllen, auf Alkohol achten!), Stoma-Puder (nässende Haut trocknen), Hautschutzring (Abdichtung).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-15",
        phase: 3,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["FG SKM Stoma Handlungsempfehlungen 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Die 5 Hautschutzprodukte in der Stomaversorgung benennen und situationsgerecht einsetzen.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Hautschutz in der Stomaversorgung",
          body: "**Hautschutz in der Stomaversorgung — Produktübersicht**\n\n**1. Basisplatte (Hautschutzplatte/Rondelle):**\n- Kern des Systems, Hydrokolloid, quillt bei Feuchtigkeit leicht auf\n- Zuschnitt: Stomadurchmesser **+2–3 mm Rand** (nicht zu groß = ungeschützte Haut!)\n- Tragezeit: 2–5 Tage\n\n**2. Konvexplatte:**\n- Nach innen gewölbt, Indikation: Retraktion (flaches, eingesunkenes Stoma)\n\n**3. Stoma-Paste (Stomapaste):**\n- Zum **Auffüllen von Unebenheiten** rund ums Stoma → verbessert Plattenhaftung\n- Enthält oft Alkohol → auf gereizte Haut: **alkoholfreie Variante!**\n\n**4. Stoma-Puder:**\n- Für **nässende, gereizte Haut**: trocknet Wundfläche → ermöglicht Plattenhaftung\n- Überschuss abpusten, dann Hautschutzfilm drüber\n\n**5. Hautschutzring/-platte:**\n- Weiche, formbare Hydrokolloid-Ringe → dichtet ab bei Narben/Falten\n\n**Grundregel:** Trockene, intakte, reizstofffreie Haut ist Voraussetzung für gute Plattenhaftung.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Hautschutz in der Stomaversorgung",
          body: "**Was schützt die Haut rund ums Stoma?**\n\n**Basisplatte (Rondelle):** Klebende Platte direkt auf die Haut. Schützt vor Stuhl/Urin. Wichtig: genaue Größe ausschneiden — **nicht zu groß**, sonst kommt Haut in Kontakt mit Ausscheidungsinhalt. Öffnung = Stomadurchmesser + 2–3 mm Rand.\n\n**Konvexplatte:** Wie die Basisplatte, aber leicht nach innen gewölbt — für eingesunkene Stomata.\n\n**Stoma-Paste:** Füllt Lücken und Falten rund ums Stoma. Bessere Plattenhaftung. Vorsicht: Manche enthalten **Alkohol** — auf gereizter Haut alkoholfreie nehmen!\n\n**Stoma-Puder:** Trocknet nässende, gereizte Haut. Erst Puder drauf, überschuss abpusten, dann Hautschutzfilm — dann die Platte.\n\n**Hautschutzring:** Weicher Ring der ums Stoma abdichtet — besonders bei Narben oder Falten.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Basisplatte", "Rondelle", "Konvexplatte", "Stomapaste", "Stomaputder", "Hautschutzring", "Hydrokolloid", "Mazeration", "perristomal"],
    karteikarten: [],
  },

  // ─── B16: stuhlausscheidung-stoma-komplikationen ──────────────────────────
  {
    bausteinId: "stuhlausscheidung-stoma-komplikationen",
    themaId: "stuhlausscheidung",
    titel: "Stomakomplikationen — 6 häufige Probleme",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du versorgst ein Stoma und siehst: Das Stoma schaut kaum noch aus der Haut heraus. Gestern war es noch prominent. Was könnte das sein — und was tust du?",
      antwort:
        "Retraktion (Einsinken des Stomas) → konvexes Beutelsystem, Stomatherapeut hinzuziehen. Nekrose (livide/schwarz) = chirurgischer Notfall — sofort Arzt!",
    },
    stufe2: {
      typ: "hinweis",
      text: "Stomakomplikationen entstehen früh oder spät — die Pflegekraft erkennt sie oft als erste und muss wissen, wann sie handeln und wann sie eskalieren muss.",
      textB1:
        "6 Komplikationen: Nekrose = schwarz = Notfall. Retraktion = eingesunken = konvex. Prolaps = rausgefallen = Stomatherapeut. Stenose = eng = Arzt. Hernienversorgungsgürtel. Hautreizung = Ursache suchen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-16",
        phase: 3,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["FG SKM Stoma Handlungsempfehlungen 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Sechs Stomakomplikationen erkennen und die pflegerische Erstreaktion benennen — insb. Nekrose als Notfall.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Stomakomplikationen — 6 häufige Probleme",
          body: "**Stomakomplikationen — 6 häufige Probleme**\n\n**1. Retraktion (Einsinken):** Stoma zieht sich unter Hautniveau zurück → Leckage. Pflege: Konvexsystem, Stomatherapeut.\n\n**2. Prolaps (Vorfallen):** Stoma prolabiert weit hervor (bis 10–20 cm). Pflege: flaches Lager, kein Reponieren ohne Anleitung, Stomatherapeut + Chirurg.\n\n**3. Stenose (Verengung):** Stomaeingang zu eng → Ausscheidungsbehinderung. Pflege: Arzt informieren (ärztliche Bougierung, ggf. OP).\n\n**4. Nekrose:** Stomagewebe livide/schwarz → Ischämie. Pflege: **NOTFALL — sofort ärztlich! Operationsindikation.**\n\n**5. Parastomale Hernie:** Darmvorfall neben dem Stoma → sichtbare Wölbung. Pflege: Hernienversorgungsgürtel, kein Heben, OP-Indikation prüfen.\n\n**6. Perristomale Hautreizung (häufigste Komplikation):** Rötung, Erosion, Mazeration. Ursachen: Leckage, falsch zugeschnittene Platte, Allergie, Pilz. Pflege: Ursache identifizieren, Zuschnitt korrigieren, Puder + Hautschutzfilm, Stomatherapeut.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Stomakomplikationen — 6 häufige Probleme",
          body: "**6 Probleme am Stoma**\n\n**1. Retraktion (Einsinken):** Stoma zieht sich nach innen zurück. Konvexes System hilft. Stomatherapeut hinzuziehen.\n\n**2. Prolaps (Vorfallen):** Stoma fällt weit heraus. Nie mit Gewalt zurückschieben. Patient flach legen. Stomatherapeut + Arzt.\n\n**3. Stenose (Verengung):** Stomaeingang zu eng. Arzt informieren.\n\n**4. Nekrose (Absterben):** Stoma ist livide bis schwarz. **Sofort Arzt rufen — Notfall!** Jede Stunde zählt.\n\n**5. Parastomale Hernie (Vorwölbung neben Stoma):** Kein schweres Heben. Hernienversorgungsgürtel. Arzt beurteilt OP-Indikation.\n\n**6. Hautreizung (häufigste Komplikation):** Haut rund ums Stoma ist rot, nässt oder wund. Ursache suchen: Leckage? Platte falsch zugeschnitten? Allergie? Ursache beheben.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Retraktion", "Prolaps", "Stenose", "Nekrose", "parastomale Hernie", "Mazeration", "Leckage", "Stomatherapeut", "Bougierung"],
    karteikarten: [],
  },

  // ─── B17: stuhlausscheidung-stoma-beratung ────────────────────────────────
  {
    bausteinId: "stuhlausscheidung-stoma-beratung",
    themaId: "stuhlausscheidung",
    titel: "Stoma-Beratung — Psychosozial, Selbstversorgung, Ernährung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr T., 55 Jahre, bekommt morgen sein Stoma. Er sagt: 'Ich weiß nicht ob ich jemals wieder schwimmen gehe.' Wie gehst du auf diese Aussage ein?",
      antwort:
        "Normalisieren ohne zu verharmlosen: 'Viele Stomaträger führen ein vollständig normales Leben — schwimmen, reisen, arbeiten.' ILCO empfehlen. Selbstversorgung schrittweise aufbauen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Stoma verändert Körperbild, Intimsphäre und Lebensplanung — Beratung ist genauso wichtig wie technische Versorgung; Selbstversorgung ist das übergeordnete Rehabilitationsziel.",
      textB1:
        "Stoma-Beratung = 3 Dimensionen: Psyche (zuhören, normalisieren, ILCO) + Selbstversorgung schrittweise + Ernährung je Stomaart.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-17",
        phase: 3,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["FG SKM Stoma Handlungsempfehlungen 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Psychosoziale Begleitaspekte bei Stomaträgern erkennen, Selbstversorgung schrittweise fördern und Ernährungsempfehlungen je Stomaart geben.",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Stoma-Beratung — Psychosozial, Selbstversorgung, Ernährung",
          body: "**Stoma-Beratung — drei Dimensionen**\n\n**1. Psychosoziale Begleitung:**\n- Stoma verändert das Körperbild — Scham, Ekel, Angst vor sozialer Ablehnung, Partnerschaftsprobleme\n- Pflegeaufgabe: Normalisieren ohne zu verharmlosen — 'Viele Stomaträger führen ein vollständig normales Leben'\n- Selbsthilfegruppe empfehlen (ILCO), Psychologe bei Bedarf\n\n**2. Selbstversorgung fördern — schrittweise:**\n- Ziel: Patient versorgt Stoma selbstständig vor Entlassung\n- Stufenmodell: Zuschauen → Assistieren → Selbst mit Begleitung → Selbst ohne Hilfe\n- Stomatherapeutin als Kooperationspartnerin\n\n**3. Ernährungstipps je Stomaart:**\n\n**Kolostomie:** Blähende Speisen reduzieren, regelmäßige Mahlzeiten, ausreichend trinken.\n\n**Ileostomie:** 2–3 l Flüssigkeit/Tag obligat! Isotone Getränke, Elektrolytsubstitution. Vorsicht: Ballaststoffe und blähende Speisen.\n\n**Urostomie:** 2–2,5 l/Tag → Harnwegsinfekte verhindern.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Stoma-Beratung — Psychosozial, Selbstversorgung, Ernährung",
          body: "**Stoma-Beratung — was Patienten brauchen**\n\n**Körperbild und Psyche:**\nViele Patienten schämen sich, haben Angst vor Geruch oder Leckage. Das ist normal.\n\nWas du tun kannst:\n- Zuhören — ohne sofort Lösungen anzubieten\n- Normalisieren: 'Viele Stomaträger gehen schwimmen, reisen, arbeiten'\n- Selbsthilfegruppe empfehlen (ILCO)\n- Bei starker Belastung: Psychologen einbeziehen\n\n**Selbstversorgung:** Das Ziel: Patient kann sein Stoma selbst versorgen bevor er nach Hause geht. Schrittweise: zuerst zuschauen, dann helfen, dann selbst machen.\n\n**Essen — je nach Stomaart:**\n- **Kolostomie:** Blähende Speisen reduzieren. Regelmäßige Mahlzeiten.\n- **Ileostomie:** Viel trinken! 2–3 Liter täglich. Elektrolytgetränke.\n- **Urostomie:** Viel trinken (2–2,5 l) um Infekte zu verhindern.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Körperbild", "ILCO", "Stomatherapeutin", "Elektrolytverlust", "Selbstversorgung", "psychosozial", "Harnwegsinfekt"],
    karteikarten: [],
  },

  // ─── B18: stuhlausscheidung-rektale-applikation ───────────────────────────
  {
    bausteinId: "stuhlausscheidung-rektale-applikation",
    themaId: "stuhlausscheidung",
    titel: "Rektale Applikationsformen — Suppositorium, Klysma, Einlauf",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sollst einem Patienten ein Bisacodyl-Zäpfchen geben. Was überprüfst du bevor du es einführst — und wie lagerst du den Patienten?",
      antwort:
        "Kontraindikationen prüfen (Anastomosen, Proktitis, Thrombopenie). Linksseitenlage. Zäpfchen mit runder Seite zuerst, 2–4 cm tief. 5–10 Min warten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Rektale Applikationen sind Standardmaßnahmen in der Pflege — korrekte Technik, Lagerung und Kontraindikationskenntnis sind Pflicht.",
      textB1:
        "3 rektale Maßnahmen: Zäpfchen (runde Seite zuerst, 5–10 Min warten), Klysma (5–10 ml, 5–10 Min warten), Einlauf (500–1000 ml warm, Kniebrust-Lage, 10–15 Min halten).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-stuhlausscheidung-wb-18",
        phase: 3,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fachliteratur Pflegepraxis"],
        track: "basis",
        modus: "entdecker",
        lernziel:
          "Suppositorien, Klysmen und Einläufe korrekt durchführen, Kontraindikationen kennen und Einwirkzeiten einhalten.",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Rektale Applikationsformen — Suppositorium, Klysma, Einlauf",
          body: "**Rektale Applikationsformen — Überblick**\n\n**1. Suppositorium (Zäpfchen):**\n- Anwendung: Bisacodyl, Paracetamol, Antiemetika, Glycerol-Supp. (Laxans)\n- Technik: Linksseitenlage, Schutzhandschuhe, **abgerundete Spitze zuerst**, 2–4 cm tief, danach 5–10 Min liegen\n- KI: Rektumkarzinom, akute Proktitis, Anal-/Rektum-OP, Thrombopenie (<20.000), Koagulopathie, Neutropenie\n\n**2. Klysmen/Mikroklistiere:**\n- Anwendung: 5–10 ml fertig portioniert (Klysma Fresenius, Freka Clyss)\n- Technik: Linksseitenlage, Kanüle 5–7 cm, Inhalt langsam eindrücken, 5–10 Min Wartezeit\n- Wirkung: 5–15 Min nach Applikation\n\n**3. Hoher Einlauf:**\n- Anwendung: Koprostase, OP-/Koloskopievorbereitung\n- Technik: Linksseitenlage → Kniebrust-Lage, 500–1000 ml körperwarmes Wasser/NaCl, Sonde 10–15 cm, 5–15 Min halten\n- KI: V.a. Perforation, akute Entzündung, **frische Anastomosen**",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Rektale Applikationsformen — Suppositorium, Klysma, Einlauf",
          body: "**Drei rektale Maßnahmen**\n\n**1. Zäpfchen (Suppositorium):**\n- Patient liegt auf der **linken Seite**\n- Schutzhandschuhe anziehen\n- Zäpfchen mit der **runden Spitze zuerst** einführen, 2–4 cm tief\n- Patient soll **5–10 Min** liegen bleiben\n- Wann NICHT? Bei Darmoperationen, Entzündungen im After-Bereich, sehr niedrigen Blutplättchen.\n\n**2. Klysma (Mikroklistier):**\nKleine fertige Flasche, 5–10 ml in den Darm. Wirkt nach 5–15 Min. Einfacher als ein großer Einlauf.\n\n**3. Einlauf (hoher Einlauf):**\nGroße Menge warmes Wasser (500–1000 ml). Patient liegt zuerst links, dann Kniebrust-Lage. Wasser **5–15 Min halten**, dann Toilette.\n\nWann NICHT? Bei Verdacht auf Darmperforation oder frischen Nähten im Darm.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: ["Suppositorium", "Klysma", "Klistier", "Kniebrust-Lage", "Koprostase", "Kontraindikation", "Thrombopenie", "Anastomose", "Proktitis"],
    karteikarten: [],
  },
];

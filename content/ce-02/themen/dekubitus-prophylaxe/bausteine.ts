// CE-02 Thema Dekubitus-Prophylaxe — Wissensbausteine (14 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/dekubitus-prophylaxe/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥3)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (schwächere Schüler)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_DEKUBITUS_PROPHYLAXE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: dekubitus-prophylaxe-definition (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-definition",
    themaId: "dekubitus-prophylaxe",
    titel: "Definition: Was ist ein Dekubitus?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was passiert mit der Haut, wenn sie lange auf etwas Hartes drückt? Stell dir vor, du sitzt 6 Stunden auf einer Holzbank ohne dich zu bewegen.",
      antwort:
        "Ein Dekubitus ist eine lokale Schädigung der Haut und des darunterliegenden Gewebes durch anhaltenden Druck oder Scherkräfte. Er entsteht meist über Knochenvorsprüngen — Steißbein, Ferse, Trochanter. Laut DNQP 2017/2024 ist Dekubitus 'weitgehend vermeidbar'. (NPUAP/EPUAP 2019)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Dekubitus ist eine lokale Schädigung der Haut und des darunterliegenden Gewebes durch anhaltenden Druck oder Scherkräfte. Er entsteht meist über Knochenvorsprüngen — Steißbein, Ferse, Trochanter. (NPUAP/EPUAP 2019)",
      textB1:
        "Ein Dekubitus ist eine Wunde. Sie entsteht, wenn zu lange Druck auf die Haut wirkt. Die Haut und das Gewebe darunter werden kaputt. Meistens an Stellen, wo ein Knochen nah unter der Haut liegt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP/PPPIA (2019)", "DNQP (2017/2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-definition",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Definition: Was ist ein Dekubitus?",
          body: "Ein Dekubitus ist definiert als **lokale Schädigung der Haut und/oder des darunterliegenden Gewebes**, meist über einem Knochenvorsprung, verursacht durch **Druck allein oder Druck in Kombination mit Scherkräften**. Der Mechanismus: Anhaltender Druck komprimiert Kapillargefäße, die Sauerstoff- und Nährstoffversorgung bricht zusammen, Zellen sterben ab. Scherkräfte (parallele Gegenbewegung zweier Gewebeschichten, z.B. beim Hochrutschen im Bett) verstärken den Schaden auf tieferer Ebene. Wichtige Risikofaktoren: **Immobilität, Sensibilitätsverlust, Mangelernährung, Feuchtigkeit, höheres Alter**. Der Expertenstandard DNQP 2017/2024 nennt Dekubitus 'weitgehend vermeidbar'. (NPUAP/EPUAP 2019)",
          glossarBegriffe: ["Dekubitus", "Scherkräfte", "Ischämie"],
        },
        contentB1: {
          title: "Was ist ein Dekubitus?",
          body: "Ein Dekubitus ist eine Wunde an der Haut. Sie entsteht, weil zu lange Druck auf eine Stelle wirkt. So läuft es ab: Der Druck drückt die kleinen Blutgefäße zu. Die Haut bekommt keinen Sauerstoff mehr. Die Zellen sterben. Auch **Scherkräfte** machen es schlimmer. Scherkräfte heißt: Zwei Schichten bewegen sich gegeneinander — zum Beispiel, wenn der Patient im Bett nach unten rutscht. Wer hat ein hohes Risiko? Menschen, die sich wenig bewegen, wenig essen, alt sind oder viel schwitzen. Der DNQP sagt: Dekubitus kann man meistens vermeiden.",
          glossarBegriffe: ["Dekubitus", "Scherkräfte"],
        },
      },
    },
    glossarBegriffe: ["Dekubitus", "Scherkräfte", "Ischämie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: dekubitus-prophylaxe-kategorien (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-kategorien",
    themaId: "dekubitus-prophylaxe",
    titel: "Dekubitus-Kategorien I–IV + Sonderformen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn ein Dekubitus schlimmer wird — was verändert sich mit der Zeit? Beschreibe in eigenen Worten von 'ganz leicht' bis 'sehr schlimm'.",
      antwort:
        "Die NPUAP/EPUAP-Klassifikation kennt 4 Kategorien: I = nicht-wegdrückbare Rötung bei intakter Haut (Fingertest: bleibt rot). II = Blase oder flache offene Wunde. III = Hautverlust bis Unterhautfettgewebe. IV = Muskel/Knochen/Sehne freiliegend. Sonderformen: 'Nicht einstufbar' + Deep Tissue Injury. Kategorie geht NIE zurück — einmal IV bleibt IV.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die NPUAP/EPUAP-Klassifikation kennt 4 Kategorien: I = nicht-wegdrückbare Rötung (Haut intakt), II = Teilverlust der Haut (Blase/Erosion), III = Hautverlust bis ins Unterhautfettgewebe, IV = Verlust bis Muskel/Knochen/Sehnen sichtbar.",
      textB1:
        "Ein Dekubitus hat 4 Stufen: Kategorie I = rote Stelle, die nicht weggeht (Haut noch ganz). Kategorie II = Blase oder offene Stelle. Kategorie III = tiefe Wunde mit Fett. Kategorie IV = Wunde bis zum Muskel oder Knochen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-02",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-kategorien",
        tag: "pflege",
        contentC1: {
          title: "Dekubitus-Kategorien I–IV + Sonderformen",
          body: "Die internationale Klassifikation (NPUAP/EPUAP 2019) unterscheidet 4 Kategorien plus 2 Sondertypen:\n\n**Kategorie I** — Nicht-wegdrückbare Rötung bei intakter Haut. Der **Fingertest** ist der Schlüssel: Drückt man auf die Rötung und sie bleibt rot (wird nicht weiß) = Dekubitus I. Bei dunkler Haut zeigt sich oft nur eine Verhärtung, Wärme oder Farbänderung.\n\n**Kategorie II** — Teilverlust der Haut: Es zeigt sich eine flache, offene Wunde (Erosion) oder eine intakte/geöffnete Blase. Die Dermis ist betroffen, Subkutis intakt.\n\n**Kategorie III** — Verlust der Haut bis ins Unterhautfettgewebe. Fettgewebe kann sichtbar werden. Faszien, Muskeln, Knochen nicht freigelegt.\n\n**Kategorie IV** — Vollständiger Hautverlust mit freiliegendem Muskel, Knochen oder Sehne.\n\n**Sondertypen:** 'Nicht einstufbar' (vollständig mit Belag bedeckt) und 'Deep Tissue Injury' (violette/kastanienfarbene intakte Haut mit tiefer Gewebeschädigung darunter). (NPUAP/EPUAP 2019)",
          glossarBegriffe: ["Fingertest", "Deep Tissue Injury"],
        },
        contentB1: {
          title: "Dekubitus-Kategorien",
          body: "Ein Dekubitus hat 4 Kategorien und 2 Sonderformen:\n\n**Kategorie I**: Rote Stelle, die nicht weggeht. Haut ist noch ganz. Der **Fingertest**: Du drückst auf die rote Stelle. Bleibt sie rot = Dekubitus. Bei dunkler Haut: Wärme oder harte Stelle.\n\n**Kategorie II**: Blase oder kleine offene Wunde. Nicht tief.\n\n**Kategorie III**: Tiefere Wunde. Das Fett unter der Haut ist zu sehen.\n\n**Kategorie IV**: Sehr tiefe Wunde. Muskel, Knochen oder Sehne sind zu sehen.\n\n**Sonderformen**: 'Nicht einstufbar' (Wunde mit Belag, man sieht nicht, wie tief). **Deep Tissue Injury** (lila Stelle, Haut noch ganz, aber innen ist Gewebe kaputt).",
          glossarBegriffe: ["Fingertest", "Deep Tissue Injury"],
        },
      },
    },
    glossarBegriffe: ["Fingertest", "Deep Tissue Injury"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: dekubitus-prophylaxe-entstehung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-entstehung",
    themaId: "dekubitus-prophylaxe",
    titel: "Entstehungsmechanismus: Druck × Zeit + Scherkräfte",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient liegt 4 Stunden ohne Umlagerung im Bett. Was passiert in seiner Haut und im Gewebe darunter? Beschreibe die Kette bis zur Wunde.",
      antwort:
        "Druck × Zeit = Dekubitus. Die Intensität (wie hoch) und die Dauer (wie lange) entscheiden gemeinsam. Dazu kommen Scherkräfte (parallele Verschiebung) und Friktion (Reibung). Auch kurzer, sehr hoher Druck kann ausreichen. Kapillardruck >32 mmHg → Ischämie → Zellschädigung nach 30-120 Min → Nekrose → Dekubitus.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Druck × Zeit = Dekubitus. Die Intensität (wie hoch) und die Dauer (wie lange) entscheiden gemeinsam. Dazu kommen Scherkräfte (parallele Verschiebung) und Friktion (Reibung). Wichtig: Auch kurzer, sehr hoher Druck kann ausreichen.",
      textB1:
        "Druck und Zeit machen den Dekubitus. Zwei Dinge entscheiden: Wie stark drückt es (Intensität) und wie lange (Dauer). Dazu: Scherkräfte (gegeneinander verschieben) und Reibung. Auch kurzer, starker Druck reicht.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-03",
        phase: 1,
        stepType: "diagram",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-entstehung",
        tag: "pflege",
        contentC1: {
          title: "Entstehungsmechanismus: Druck × Zeit",
          body: "Die Entstehung folgt einer klaren Kette: **Druck** komprimiert die Kapillargefäße in der Haut und im Gewebe. Bei normaler Gewebsdurchblutung liegt der Kapillardruck bei ca. 32 mmHg. Wird dieser Wert überschritten, bricht die Sauerstoffversorgung der Zellen zusammen (Ischämie). Nach ca. 30-120 Minuten beginnt die Zellschädigung. Ohne Druckentlastung sterben Zellen ab (Nekrose) — und es entsteht ein Dekubitus.\n\n**Zusätzliche Faktoren:**\n- **Scherkräfte**: Parallele Verschiebung zwischen Gewebeschichten (z.B. beim Hochrutschen im Bett). Sie schädigen die tiefen Gewebe stärker als reiner Druck.\n- **Friktion (Reibung)**: Oberflächliche Haut-Abscheuerung — fördert Kategorie-II-Dekubiti.\n- **Feuchtigkeit**: Mazeriert die Haut und senkt ihre Widerstandskraft.\n\n**Formel im Kopf**: Druck + Zeit + Scherkräfte + Feuchtigkeit = Dekubitus-Risiko. (NPUAP/EPUAP 2019)",
          glossarBegriffe: ["Ischämie", "Nekrose", "Friktion", "Mazeration"],
        },
        contentB1: {
          title: "So entsteht ein Dekubitus",
          body: "So entsteht ein Dekubitus:\n\n**Schritt 1** — Der Druck drückt die kleinen Blutgefäße in der Haut zu.\n**Schritt 2** — Die Zellen bekommen keinen Sauerstoff mehr (Ischämie).\n**Schritt 3** — Nach 30 bis 120 Minuten ohne Umlagern fangen die Zellen an zu sterben.\n**Schritt 4** — Ohne Hilfe wird daraus eine Wunde.\n\n**Dazu kommen:**\n- **Scherkräfte**: Wenn der Patient im Bett nach unten rutscht, verschieben sich die Schichten. Das macht tiefe Schäden.\n- **Reibung**: Die Haut scheuert an der Matratze. Macht oberflächliche Wunden.\n- **Feuchtigkeit**: Nasse Haut ist schwächer. Urin oder Schweiß machen sie kaputt.\n\nMerke: Druck + Zeit + Scherkräfte + Nässe = Wunde.",
          glossarBegriffe: ["Ischämie", "Nekrose", "Friktion"],
        },
      },
    },
    glossarBegriffe: ["Ischämie", "Nekrose", "Friktion", "Mazeration"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: dekubitus-prophylaxe-praedilektion (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-praedilektion",
    themaId: "dekubitus-prophylaxe",
    titel: "Prädilektionsstellen: Wo entsteht Dekubitus?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir einen Patienten in Rückenlage vor. Wo drückt sein Körper am stärksten auf die Matratze?",
      antwort:
        "Prädilektionsstellen: In Rückenlage Sakrum (~46%), Fersen (~19%), Schulterblätter, Hinterhaupt. In Seitenlage: Trochanter major, Malleolus, Ohr. Im Sitzen: Tuber ischiadicum. Geräte-assoziierte Dekubiti (MDRPI): Nasenrücken, Ohren, Hinterkopf — machen bis zu 34% aller Krankenhausdekubiti aus.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Prädilektionsstellen sind Körperstellen mit wenig Gewebe über dem Knochen. Je nach Lage: In Rückenlage Sakrum (46%), Fersen (19%), Schulterblätter, Hinterhaupt. In Seitenlage: Trochanter, Malleolen. Im Sitzen: Sitzbeinhöcker, Steißbein.",
      textB1:
        "Prädilektionsstellen = typische Wundstellen. Sie liegen da, wo wenig Gewebe über dem Knochen ist. In Rückenlage: Steißbein (46%), Ferse (19%), Schulterblatt, Hinterkopf. Seitenlage: Hüftknochen, Knöchel. Im Sitzen: Gesäß.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-04",
        phase: 1,
        stepType: "hotspot",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP/PPPIA (2019)", "RKI (2023)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-praedilektion",
        tag: "pflege",
        contentC1: {
          title: "Prädilektionsstellen",
          body: "Prädilektionsstellen sind Körperregionen, an denen sich aufgrund der Anatomie häufig Dekubiti bilden: wenig Weichteilpolster über einem **Knochenvorsprung**.\n\n**In Rückenlage** (häufigste Dekubitus-Lokalisationen weltweit):\n- **Sakrum/Steißbein** (~46% aller Dekubiti)\n- **Ferse** (~19%)\n- Hinterhaupt, Schulterblätter, Ellenbogen\n\n**In Seitenlage**:\n- **Trochanter major** (Hüftknochen)\n- Malleolus (Knöchel außen)\n- Ohrmuschel, Schulter\n\n**Im Sitzen (z.B. Rollstuhl)**:\n- **Sitzbeinhöcker** (Tuber ischiadicum)\n- Steißbein\n\n**Sonderstellen durch Medizinprodukte**:\n- Nasenrücken (Sauerstoffbrille), Ohren (O₂-Schlauch), Hinterkopf (Beatmung), Genitalbereich (Dauerkatheter)\n\nDiese **geräte-assoziierten Dekubiti** (MDRPI) machen bis zu 34% aller Dekubiti im Krankenhaus aus. (NPUAP/EPUAP 2019, RKI 2023)",
          glossarBegriffe: ["Prädilektionsstellen", "MDRPI"],
        },
        contentB1: {
          title: "Typische Wundstellen",
          body: "Prädilektionsstellen sind die typischen Wundstellen. Dort ist wenig Fleisch über dem Knochen.\n\n**In Rückenlage:** Steißbein (46% — am häufigsten!), Ferse (19%), Hinterkopf, Schulterblatt.\n\n**In Seitenlage:** Hüftknochen (Trochanter), äußerer Knöchel, Ohr, Schulter.\n\n**Im Sitzen:** Sitzknochen, Steißbein.\n\n**Durch Geräte:**\n- Nase (Sauerstoffbrille)\n- Ohren (Schlauch von der Sauerstoffbrille)\n- Hinterkopf (bei Beatmung)\n- Im Intimbereich (Dauerkatheter)\n\nDiese Dekubiti durch Geräte sind heute sehr häufig: bis zu 34% aller Dekubiti im Krankenhaus. Wichtig: Auch diese Stellen bewusst anschauen.",
          glossarBegriffe: ["Prädilektionsstellen", "MDRPI"],
        },
      },
    },
    glossarBegriffe: ["Prädilektionsstellen", "MDRPI"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: dekubitus-prophylaxe-braden (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-braden",
    themaId: "dekubitus-prophylaxe",
    titel: "Braden-Skala: Risikoeinschätzung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie könntest du in wenigen Minuten einschätzen, wie hoch das Dekubitus-Risiko eines Patienten ist? Welche 5-6 Dinge würdest du beobachten?",
      antwort:
        "Die Braden-Skala (Braden & Bergstrom 1987) hat 6 Items: sensorische Wahrnehmung, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Gesamtwert 6-23 Punkte. <18 = Risiko. Je niedriger der Wert, desto höher das Risiko. Klinische Einschätzung führt — kein reiner Cut-off.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Braden-Skala ist das international am häufigsten genutzte Risiko-Instrument. Sie hat 6 Items (sensorische Wahrnehmung, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte) — Gesamtwert 6-23 Punkte. Risiko: <18 Punkte.",
      textB1:
        "Die Braden-Skala ist ein Werkzeug, das die Pflege nutzt. Sie hat 6 Punkte: Sinne, Feuchtigkeit, Aktivität, Mobilität, Essen, Reibung. Jeder bekommt Punkte. Zusammen: 6-23 Punkte. Weniger als 18 = Risiko.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-05",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Braden B.J., Bergstrom N. (1987)", "DNQP (2017/2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-braden",
        tag: "pflege",
        contentC1: {
          title: "Braden-Skala",
          body: "Die **Braden-Skala** (Braden & Bergstrom 1987) ist das am besten validierte Instrument zur Einschätzung des Dekubitus-Risikos. Sie bewertet 6 Bereiche mit je 1-4 Punkten (außer Reibung/Scherkräfte: 1-3):\n\n1. **Sensorische Wahrnehmung** (1 fehlend — 4 uneingeschränkt): Kann der Patient Druck spüren und darauf reagieren?\n2. **Feuchtigkeit** (1 konstant feucht — 4 selten feucht): Wie oft ist die Haut nass?\n3. **Aktivität** (1 bettlägerig — 4 läuft regelmäßig): Wie mobil ist der Patient?\n4. **Mobilität** (1 vollständig immobil — 4 uneingeschränkt): Kann er sich selbst bewegen?\n5. **Ernährung** (1 sehr schlecht — 4 ausgezeichnet): Wie gut isst er?\n6. **Reibung und Scherkräfte** (1 Problem — 3 kein Problem): Rutscht er beim Hochziehen?\n\n**Gesamtwert:** 6 (höchstes Risiko) bis 23 (kein Risiko). Grenzwerte: ≤9 sehr hohes Risiko, 10-12 hohes Risiko, 13-14 mittleres Risiko, 15-18 geringes Risiko, 19-23 kein Risiko.\n\n**Wichtig:** Der DNQP-Expertenstandard 2017/2024 stellt klar — kein einzelnes Instrument ist Pflicht. Klinische Einschätzung ist führend.",
          glossarBegriffe: ["Braden-Skala"],
        },
        contentB1: {
          title: "Braden-Skala",
          body: "Die **Braden-Skala** ist ein Werkzeug, um das Dekubitus-Risiko einzuschätzen.\n\n**Sie hat 6 Bereiche** mit je 1-4 Punkten (nur Reibung: 1-3):\n\n1. **Sensorik**: Spürt er Druck? (1 = nein, 4 = ja)\n2. **Feuchtigkeit**: Ist die Haut oft nass? (1 = immer, 4 = selten)\n3. **Aktivität**: Wie viel bewegt er sich? (1 = nur liegen, 4 = läuft)\n4. **Mobilität**: Kann er sich selbst bewegen? (1 = nein, 4 = ja)\n5. **Ernährung**: Wie gut isst er? (1 = sehr schlecht, 4 = gut)\n6. **Reibung/Scherkräfte**: Rutscht er beim Hochziehen? (1 = ja, 3 = nein)\n\n**Gesamt:** 6 bis 23 Punkte. Wenig Punkte = hohes Risiko. <18 = Risiko.\n\n**Wichtig:** Der DNQP 2017/2024 sagt: Werkzeuge helfen, aber die Pflegekraft denkt selbst.",
          glossarBegriffe: ["Braden-Skala"],
        },
      },
    },
    glossarBegriffe: ["Braden-Skala"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: dekubitus-prophylaxe-dnqp (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-dnqp",
    themaId: "dekubitus-prophylaxe",
    titel: "DNQP-Expertenstandard: 5 Kriterien",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du bist Qualitätsbeauftragte in einem Pflegeheim. Welche 5 Punkte müssen deine Pflegekräfte erfüllen, damit möglichst keine Dekubiti entstehen?",
      antwort:
        "Der DNQP-Expertenstandard Dekubitusprophylaxe (2017, 2. Aktualisierung 2024) definiert 5 Kriterien: K1 Risikoeinschätzung (in 2h nach Aufnahme), K2 Hautbeurteilung, K3 Bewegung/Druckentlastung (individuell, keine starre 2h-Regel mehr!), K4 Hilfsmittel, K5 Information/Anleitung. Rechtlich verbindlich über § 113a SGB XI.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der DNQP-Expertenstandard Dekubitusprophylaxe (2017, 2. Aktualisierung 2024) definiert 5 Kriterien: (1) Risikoeinschätzung, (2) Haut-/Gewebebeurteilung, (3) Bewegung/Druckentlastung, (4) Hilfsmittel, (5) Information/Edukation des Patienten.",
      textB1:
        "Der DNQP-Expertenstandard Dekubitusprophylaxe (2017/2024) hat 5 Kriterien: (1) Risiko einschätzen, (2) Haut anschauen, (3) Druck entlasten (Bewegung), (4) Hilfsmittel nutzen, (5) Patient informieren und anleiten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-06",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2017/2024)", "§ 113a SGB XI"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-dnqp",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "DNQP-Expertenstandard Dekubitusprophylaxe",
          body: "Der **Expertenstandard 'Dekubitusprophylaxe in der Pflege'** des DNQP (Erstversion 2010, aktuell 2. Aktualisierung 2024) ist für alle Pflegeeinrichtungen in Deutschland **rechtlich verbindlich** (§ 113a SGB XI). Er definiert 5 Kriterien:\n\n**K1 — Risikoeinschätzung**: Alle Patienten innerhalb 2h nach Aufnahme einschätzen. Re-Assessment bei Zustandsveränderung.\n\n**K2 — Haut- und Gewebebeurteilung**: Regelmäßige Inspektion gefährdeter Stellen, besonders der Prädilektionsstellen. Dokumentation.\n\n**K3 — Bewegungsförderung und Druckentlastung**: Individueller Bewegungsplan. Umlagerung, Mikrobewegungen, Mobilisation. **Keine feste 2h-Regel mehr** (Aktualisierung 2024) — Zeit individuell bestimmen.\n\n**K4 — Druckverteilende Hilfsmittel**: Wechseldruck-, Weichlagerungsmatratzen. Risikobasierte Auswahl.\n\n**K5 — Information, Anleitung, Beratung**: Patient und Angehörige informieren, anleiten zur Mitbestimmung.\n\n**Rechtliche Bedeutung**: Abweichung vom Standard muss begründet werden. (DNQP 2017/2024)",
          glossarBegriffe: ["DNQP-Expertenstandard"],
        },
        contentB1: {
          title: "DNQP-Expertenstandard",
          body: "Der **Expertenstandard Dekubitusprophylaxe** vom DNQP (2017, neue Version 2024) gilt für alle Pflegeeinrichtungen in Deutschland. Das Gesetz § 113a SGB XI sagt: Man muss ihn befolgen.\n\n**Er hat 5 Kriterien:**\n\n**K1 — Risiko einschätzen**: Innerhalb von 2 Stunden nach Aufnahme. Bei Veränderung neu.\n\n**K2 — Haut anschauen**: Regelmäßig die gefährdeten Stellen kontrollieren. Aufschreiben.\n\n**K3 — Bewegung und Druck entlasten**: Individueller Plan. Umlagern, kleine Bewegungen, laufen. **Nicht mehr feste 2 Stunden** (neue Version 2024) — jeder Patient braucht seinen eigenen Zeitabstand.\n\n**K4 — Hilfsmittel nutzen**: Wechseldruckmatratze, Weichlagerung — je nach Risiko.\n\n**K5 — Information und Anleitung**: Patient und Angehörige informieren. Gemeinsam entscheiden.\n\n**Wichtig:** Wenn man vom Standard abweicht, muss man das begründen können.",
          glossarBegriffe: ["DNQP-Expertenstandard"],
        },
      },
    },
    glossarBegriffe: ["DNQP-Expertenstandard"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: dekubitus-prophylaxe-lagerung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-lagerung",
    themaId: "dekubitus-prophylaxe",
    titel: "Druckentlastung und Lagerungsrhythmus",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein bettlägeriger Patient liegt auf dem Rücken. Du hast 12 Stunden Dienst. Wann und wie oft lagerst du ihn um? Begründe.",
      antwort:
        "Der DNQP 2024 hat die starre 2h-Regel aufgegeben. Individueller Lagerungsrhythmus je nach Patient, Unterlage und Risiko. Dazu: Mikrobewegungen (alle 15-30 Min kleine Lageveränderungen) sind genauso wichtig wie komplette Umlagerungen. Absolute No-Gos: Ringkissen, Massage, Franzbranntwein.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der DNQP 2024 hat die starre 2h-Regel aufgegeben. Individueller Lagerungsrhythmus je nach Patient, Unterlage und Risiko. Dazu: Mikrobewegungen (alle 15-30 Min kleine Lageveränderungen) sind genauso wichtig wie komplette Umlagerungen.",
      textB1:
        "Der DNQP 2024 sagt nicht mehr: 'Alle 2 Stunden umlagern'. Stattdessen: Individueller Zeitabstand für jeden Patienten. Genauso wichtig: Mikrobewegungen (kleine Bewegungen alle 15-30 Minuten) — nicht nur komplette Umlagerung.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-07",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)", "Cochrane Moore (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-lagerung",
        tag: "pflege",
        contentC1: {
          title: "Druckentlastung und Lagerungsrhythmus",
          body: "Die Druckentlastung ist das **Kernstück** der Dekubitusprophylaxe. Der DNQP-Standard 2024 gibt die starre 2h-Regel auf und fordert **individuelle Bewegungsplanung**:\n\n1. **Individueller Zeitabstand** — Richtwert 2-4h, aber je nach Patient und Unterlage (auf Wechseldruckmatratze: 4-6h möglich; auf Standard-Matratze: oft 2h nötig).\n2. **30°-Schräglagerung** statt 90°-Seitenlage — reduziert Druck auf Trochanter deutlich.\n3. **Mikrobewegungen** — kleine Lageveränderungen (Kissen leicht verschieben) alle 15-30 Min.\n4. **Aktivitätsförderung** — jede Form von Mobilisation ist Druckentlastung: Aufsitzen, Bettkante, Stehen, Gehen.\n5. **Nie auf eine rote Stelle legen.**\n\n**Lagerungshilfen:** Freilagerung von Fersen (Kissen unter Waden), 30°-Schräglagerung.\n\n**Fehler vermeiden:** Kein Ringkissen (komprimiert randständig), kein Reiben/Massieren geröteter Stellen. (DNQP 2024, Cochrane Moore 2022)",
          glossarBegriffe: ["30°-Schräglagerung", "Mikrobewegung"],
        },
        contentB1: {
          title: "Umlagern und Druckentlasten",
          body: "Druckentlastung ist das **Wichtigste** bei der Dekubitusprophylaxe. Der DNQP 2024 hat die feste 2-Stunden-Regel weggenommen. Jetzt gilt: **Individuell planen.**\n\n**5 Regeln:**\n\n1. **Individueller Zeitabstand** — Als Richtwert 2-4 Stunden. Auf einer Wechseldruckmatratze oft 4-6 Stunden. Auf normaler Matratze meist 2 Stunden.\n2. **30°-Schräglagerung** statt 90°-Seitenlage — drückt weniger auf den Hüftknochen.\n3. **Mikrobewegungen** — kleine Bewegungen alle 15-30 Minuten. Kissen leicht verschieben.\n4. **Aktivität fördern** — Aufsetzen, Bettkante, Stehen, Gehen. Jede Bewegung entlastet.\n5. **Nie auf eine rote Stelle legen!**\n\n**Verboten:** Kein Ringkissen. Nicht massieren bei roter Stelle!",
          glossarBegriffe: ["30°-Schräglagerung", "Mikrobewegung"],
        },
      },
    },
    glossarBegriffe: ["30°-Schräglagerung", "Mikrobewegung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: dekubitus-prophylaxe-hilfsmittel (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-hilfsmittel",
    themaId: "dekubitus-prophylaxe",
    titel: "Druckverteilende Hilfsmittel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche Hilfsmittel kennst du zur Druckentlastung? Welches nimmst du für einen Patienten mit Braden 9 und welches für einen mit Braden 16?",
      antwort:
        "Druckverteilende Hilfsmittel: Standard-Matratze (Braden ≥ 15), Weichlagerungsmatratze (Braden 12-14), Wechseldruckmatratze (Braden ≤ 12 oder bestehender Dekubitus). Zusätzlich: Positionierungskissen, Fersenschützer. Wichtig: Hilfsmittel ersetzen KEINE Bewegung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Druckverteilende Hilfsmittel: Standard-Matratze (Braden ≥ 15), Weichlagerungsmatratze (Braden 12-14), Wechseldruckmatratze (Braden ≤ 12 oder bestehender Dekubitus). Zusätzlich: Positionierungskissen, Fersenschützer.",
      textB1:
        "Hilfsmittel für die Druckentlastung: Normale Matratze (bei wenig Risiko), Weichlagerungsmatratze (mittleres Risiko), Wechseldruckmatratze (hohes Risiko oder schon ein Dekubitus). Dazu: Kissen, Fersenschützer.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-08",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-hilfsmittel",
        tag: "pflege",
        contentC1: {
          title: "Druckverteilende Hilfsmittel",
          body: "Druckverteilende Hilfsmittel werden **risikobasiert** ausgewählt:\n\n**Standard-Schaumstoffmatratze** — für Patienten ohne oder mit geringem Risiko (Braden ≥ 15).\n\n**Weichlagerungsmatratze (Schaumstoff, Visco-elastisch)** — für mittleres Risiko (Braden 12-14). Vorteil: Geräuschlos, günstig. Nachteil: 'Ertrinkungsgefühl'.\n\n**Wechseldruckmatratze (Air-Luft-System)** — für hohes Risiko (Braden ≤ 12) oder bestehenden Dekubitus. Vorteil: Automatische Druckentlastung. Nachteil: Geräuschbelastung.\n\n**Zusätzliche Hilfsmittel:**\n- **Fersenschützer / -kissen** — Ferse frei schweben lassen\n- **Positionierungskissen** (V/A/I/U-Form)\n- **Gleitlaken** (gegen Scherkräfte beim Hochziehen)\n- **Sitzkissen** für Rollstuhlfahrer (Roho, Vicair)\n\n**Wichtig**: Hilfsmittel ersetzen **KEINE Bewegung**. Auch mit Wechseldruckmatratze bleibt regelmäßiges Umlagern nötig. (DNQP 2024)",
          glossarBegriffe: ["Wechseldruckmatratze"],
        },
        contentB1: {
          title: "Druckentlastende Hilfsmittel",
          body: "Es gibt verschiedene Matratzen — je nach Risiko:\n\n**Normale Matratze** — bei wenig Risiko (Braden 15 oder mehr).\n\n**Weichlagerungsmatratze** — bei mittlerem Risiko (Braden 12-14). Sie ist weich und verteilt den Druck.\n\n**Wechseldruckmatratze** — bei hohem Risiko (Braden 12 oder weniger) oder wenn schon ein Dekubitus da ist. Luft in der Matratze wechselt — mal ist eine Stelle aufgeblasen, mal die andere.\n\n**Weitere Hilfsmittel:**\n- **Fersenschützer** — Ferse schwebt frei\n- **Positionierungskissen**\n- **Gleitlaken** (hilft beim Hochziehen ohne Scherkräfte)\n- **Sitzkissen** für Rollstuhl\n\n**Wichtig:** Die Matratze **ersetzt das Umlagern nicht**.",
          glossarBegriffe: ["Wechseldruckmatratze"],
        },
      },
    },
    glossarBegriffe: ["Wechseldruckmatratze"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: dekubitus-prophylaxe-haut-ernaehrung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-haut-ernaehrung",
    themaId: "dekubitus-prophylaxe",
    titel: "Hautpflege und Ernährung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Zwei Patienten haben das gleiche Sturzrisiko, aber Patient A isst gut und trinkt viel, Patient B ist mangelernährt. Wer hat das höhere Dekubitus-Risiko? Warum?",
      antwort:
        "Patient B hat das höhere Risiko. Eiweiß (1,2-1,5 g/kg KG/d) ist Grundbaustein für Gewebereparatur und Immunabwehr. Flüssigkeit (30-35 ml/kg KG/d) hält die Haut elastisch. Hautpflege: pH-neutrale Reinigung (kein Alkohol, keine Seife), bei Bedarf eincremen (W/O-Emulsion). Nie massieren bei geröteten Stellen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Hautpflege: pH-neutrale Reinigung, keine Seife, keine Alkoholbasis, bei trockener Haut bedarfsgerecht eincremen (W/O-Emulsion). Ernährung: Eiweiß (1,2-1,5 g/kg KG/d) und Flüssigkeit (30-35 ml/kg KG/d) sind kritisch.",
      textB1:
        "Hautpflege: pH-neutral waschen (kein Alkohol, keine Seife). Trockene Haut eincremen. Ernährung: Genug Eiweiß (1,2-1,5 g/kg Körpergewicht am Tag) und Trinken (30-35 ml/kg am Tag). Beides schützt die Haut.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-09",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)", "NPUAP/EPUAP/PPPIA (2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-haut-ernaehrung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Hautpflege und Ernährung",
          body: "Hautpflege und Ernährung sind oft unterschätzte Prophylaxe-Faktoren.\n\n**Hautpflege-Prinzipien:**\n- **pH-neutrale Reinigung** (Syndet, pH 5,5) — erhält den Säureschutzmantel\n- **Keine Seife** — alkalisch, schädigt Säureschutzmantel\n- **Kein Franzbranntwein, kein reiner Alkohol** — trocknet aus\n- **Bei trockener Haut**: W/O-Emulsion (Wasser-in-Öl) einmal täglich\n- **Bei feuchter Haut (Inkontinenz)**: Schutzfilme (Zinkpaste, barriereaktive Cremes)\n- **Nie massieren** bei geröteten Stellen\n\n**Ernährung — die unsichtbare Prophylaxe:**\n- **Eiweiß**: 1,2-1,5 g/kg KG/Tag — Grundbaustein für Gewebereparatur und Immunabwehr\n- **Flüssigkeit**: 30-35 ml/kg KG/Tag (Ausnahme: Herzinsuffizienz, Niereninsuffizienz)\n- **Mikronährstoffe**: Vitamin C (Kollagen-Synthese), Zink (Wundheilung)\n\n**Screening:** MNA (Mini Nutritional Assessment) bei älteren Patienten; NRS-2002 im Krankenhaus.",
          glossarBegriffe: ["Mazeration"],
        },
        contentB1: {
          title: "Hautpflege und gute Ernährung",
          body: "Hautpflege und gutes Essen helfen, Dekubitus zu verhindern.\n\n**Hautpflege:**\n- **pH-neutral waschen** — mit milder Waschlotion (kein Alkohol, keine Seife)\n- **Kein Franzbranntwein** (trocknet die Haut aus)\n- Bei **trockener Haut**: einmal am Tag eincremen\n- Bei **Inkontinenz**: Schutzcreme (z.B. Zinkpaste)\n- **Nie reiben oder massieren** bei roten Stellen\n\n**Ernährung — die stille Prophylaxe:**\n- **Eiweiß**: 1,2-1,5 Gramm pro kg Körpergewicht am Tag. Eiweiß ist das Baumaterial für die Haut.\n- **Trinken**: 30-35 ml pro kg Körpergewicht am Tag (Ausnahme: Herz- oder Nierenkrank)\n- **Vitamine**: Vitamin C und Zink helfen bei der Wundheilung",
          glossarBegriffe: ["Mazeration"],
        },
      },
    },
    glossarBegriffe: ["Mazeration"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: dekubitus-prophylaxe-wundversorgung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-wundversorgung",
    themaId: "dekubitus-prophylaxe",
    titel: "Wundversorgung: T-I-M-E-Prinzip",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient hat jetzt einen Dekubitus Grad II. Was denkst du — was muss als erstes passieren? Warum?",
      antwort:
        "T-I-M-E-Prinzip: T=Tissue (Débridement), I=Infection/Inflammation, M=Moisture (feuchte Wundbehandlung), E=Edge (Wundrand schützen). Absolute Pflicht: Druckentlastung der betroffenen Region — keine Heilung ohne. Bei Sakrum-Dekubitus: Nicht in Rückenlage. Bei Fersen-Dekubitus: Ferse frei schweben lassen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei bestehendem Dekubitus: Druckentlastung ist oberstes Gebot — sonst heilt keine Wunde. Dann: Feuchte Wundbehandlung (Hydrokolloid, Hydrogel — NICHT trocknen). Dokumentation: Kategorie, Größe, Wundgrund, Exsudat, Foto.",
      textB1:
        "Bei einem Dekubitus: Zuerst Druck wegnehmen — sonst heilt die Wunde nicht. Dann: Feuchte Wundbehandlung (Hydrokolloid, Hydrogel — NICHT austrocknen!). Aufschreiben: Kategorie, Größe, Wundgrund, Flüssigkeit, Foto.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-10",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP/PPPIA (2019)", "EWMA"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-wundversorgung",
        tag: "pflege",
        contentC1: {
          title: "Wundversorgung: T-I-M-E-Prinzip",
          body: "Bei einem bestehenden Dekubitus gilt das **T-I-M-E-Prinzip** in der Wundversorgung:\n\n**T — Tissue (Gewebe)**: Abgestorbenes Gewebe (Nekrose) fördert Infektion. **Débridement** (mechanisch, autolytisch, enzymatisch) je nach Wundzustand.\n\n**I — Infection/Inflammation**: Zeichen erkennen (Rubor, Dolor, Tumor, Calor), Abstrich bei Verdacht, Antibiotika nach Arztanordnung.\n\n**M — Moisture**: **Feuchte Wundbehandlung** ist Standard. Verbände nach Exsudat-Menge:\n- **Hydrokolloide** (wenig Exsudat, Kategorie II)\n- **Hydrogele** (trockene/nekrotische Wunden)\n- **Alginate** (stark exsudierend)\n- **Schaumstoffe** (moderat exsudierend, gut zum Druckschutz)\n\n**E — Edge (Wundrand)**: Wundrand schützen (Barriereprodukte), Mazeration vermeiden.\n\n**ABSOLUTE PFLICHT:** **Druckentlastung der betroffenen Region** — keine Heilung ohne. Bei Sakrum-Dekubitus: Nicht in Rückenlage. Bei Fersen-Dekubitus: Ferse frei schweben lassen. (NPUAP/EPUAP 2019, EWMA)",
          glossarBegriffe: ["Débridement", "T-I-M-E-Prinzip"],
        },
        contentB1: {
          title: "Wundversorgung: T-I-M-E",
          body: "Bei einem Dekubitus hilft das **T-I-M-E-Prinzip**:\n\n**T — Gewebe**: Totes Gewebe muss weg (**Débridement**). Sonst kommt es zu einer Infektion.\n\n**I — Infektion**: Zeichen schauen (Rötung, Schmerz, Schwellung, Wärme). Bei Verdacht: Abstrich. Antibiotika, wenn der Arzt es sagt.\n\n**M — Feuchtigkeit**: **Feuchte Wundbehandlung** — das ist heute Standard. Welcher Verband?\n- **Hydrokolloid** — wenig Flüssigkeit, Kategorie II\n- **Hydrogel** — trockene oder schwarze Wunden\n- **Alginat** — viel Flüssigkeit\n- **Schaumstoff** — mittlere Flüssigkeit, schützt vor Druck\n\n**E — Wundrand**: Den Rand schützen (mit Schutzcreme).\n\n**ABSOLUT WICHTIG:** **Den Druck von der Wunde nehmen** — sonst heilt nichts.",
          glossarBegriffe: ["Débridement", "T-I-M-E-Prinzip"],
        },
      },
    },
    glossarBegriffe: ["Débridement", "T-I-M-E-Prinzip"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: dekubitus-prophylaxe-fehler (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-fehler",
    themaId: "dekubitus-prophylaxe",
    titel: "Häufige Fehler: Obsolete Praktiken",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche 'Hausmittel' oder 'Tricks' aus der Pflege hast du schon gehört, die angeblich Dekubitus verhindern? Was denkst du — sind sie richtig?",
      antwort:
        "Häufige Fehler: Massage geröteter Stellen (schädigt Gewebe), Eisbehandlung (Vasokonstriktion), Franzbranntwein (trocknet aus), Ringkissen (komprimiert randständig), Puder bei feuchter Haut (verklumpt), Föhnen (austrocknend), starre 2h-Regel (seit DNQP 2024 abgelöst), Uro-Kondom, Cortison-Salbe, Fersenbälle. Alle obsolet oder schädlich.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Häufige Fehler in der Praxis: (1) Massage/Eisbehandlung geröteter Stellen, (2) Franzbranntwein, (3) Ringkissen, (4) Föhnen oder Puder bei feuchter Haut, (5) Starre 2h-Regel ohne Individualisierung.",
      textB1:
        "Typische Fehler in der Pflege: (1) Massieren oder Eis auf rote Stellen, (2) Franzbranntwein, (3) Ringkissen, (4) Föhnen oder Puder bei feuchter Haut, (5) Immer feste 2 Stunden umlagern.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-11",
        phase: 1,
        stepType: "swipe",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)", "Cochrane Moore (2022)", "NPUAP/EPUAP/PPPIA (2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-fehler",
        tag: "pflege",
        contentC1: {
          title: "Häufige Fehler: Obsolete Praktiken",
          body: "Diese Praktiken sind **obsolet oder kontraindiziert** (trotz teils noch weit verbreiteter Anwendung):\n\n**1. Massieren geröteter Stellen** — schädigt bereits geschwächtes Gewebe, beschleunigt Dekubitus-Entstehung.\n\n**2. Eisbehandlung** — Vasokonstriktion verschlimmert die Minderdurchblutung.\n\n**3. Franzbranntwein** — trocknet Haut aus, schädigt Säureschutzmantel.\n\n**4. Ringkissen** — komprimieren randständige Gefäße, verschlechtern die Durchblutung.\n\n**5. Puder (Babypuder) bei feuchter Haut** — verklumpt, schafft feuchte Nischen, fördert Hautreizung.\n\n**6. Föhnen** — austrocknend, kein Evidenz-Nachweis.\n\n**7. Starre 2h-Regel** — seit DNQP 2024 abgelöst durch individuelle Bewegungsplanung.\n\n**8. Uro-Kondom** bei Inkontinenz (Männer) — kann Dekubitus am Penis verursachen (MDRPI).\n\n**9. Cortison-Salbe** auf Dekubitus — immunsuppressiv, hemmt Wundheilung.\n\n**10. 'Fersenbälle'** aus Gaze — tauglos, entlastet nicht. (DNQP 2024, Cochrane Moore 2022)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Verbotene Praktiken",
          body: "Diese Dinge sind **verboten** oder falsch (auch wenn viele sie noch machen):\n\n**1. Massieren** von roten Stellen — macht das Gewebe noch kaputter.\n**2. Eis** auf rote Stellen — Gefäße ziehen sich zusammen, Durchblutung wird schlechter.\n**3. Franzbranntwein** — trocknet die Haut aus.\n**4. Ringkissen** — drücken am Rand.\n**5. Puder (Babypuder)** bei feuchter Haut — verklebt, macht Hautreizung.\n**6. Föhnen** — trocknet aus, bringt nichts.\n**7. Starre 2-Stunden-Regel** — der DNQP 2024 sagt: Jeder Patient braucht einen individuellen Zeitabstand.\n**8. Uro-Kondom** bei Männern mit Inkontinenz — kann Dekubitus machen.\n**9. Cortison-Creme** auf Dekubitus — hemmt die Heilung.\n**10. 'Fersenbälle'** aus Mullbinde — entlasten nicht.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: dekubitus-prophylaxe-dokumentation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-dokumentation",
    themaId: "dekubitus-prophylaxe",
    titel: "Dokumentation beim Dekubitus",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient bekommt trotz Prophylaxe einen Dekubitus. Angehörige fragen: 'Wie konnte das passieren?' Welche Unterlagen brauchst du, um das nachvollziehbar zu machen?",
      antwort:
        "Pflegedokumentation beim Dekubitus: Assessment (Braden + klinisch), Risiko-Plan (Maßnahmen konkret), Wunddokumentation (Kategorie, Größe, Wundgrund, Exsudat, Foto, Datum), Durchführung (Umlagerung, Hautkontrolle), Evaluation. Grundsatz: 'Was nicht dokumentiert ist, gilt als nicht getan' (MDK-Prüfung, SGB XI).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegedokumentation beim Dekubitus: Assessment (Braden + klinisch), Risiko-Plan (Maßnahmen konkret), Wunddokumentation (Kategorie, Größe, Wundgrund, Exsudat, Foto, Datum), Durchführung (Umlagerung, Hautkontrolle), Evaluation.",
      textB1:
        "Aufschreiben beim Dekubitus: Einschätzung (Braden + Beobachtung), Plan (was ich mache), Wunde (Kategorie, Größe, Wundgrund, Flüssigkeit, Foto, Datum), Durchführung (Umlagerungen, Hautkontrolle), Auswertung.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2017/2024)", "SGB XI"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-dokumentation",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Dokumentation beim Dekubitus",
          body: "Dokumentation ist beim Dekubitus besonders wichtig — sowohl **rechtlich** ('Was nicht dokumentiert ist, gilt als nicht getan') als auch **fachlich** (Verlauf nachvollziehbar).\n\n**Was muss dokumentiert werden:**\n\n**1. Assessment bei Aufnahme** (innerhalb 2h): Braden-Skala (Gesamtwert + einzelne Items), klinische Einschätzung, Hautstatus-Erstbefund (alle Prädilektionsstellen)\n\n**2. Risikomanagement-Plan**: Bewegungsplan (individueller Zeitabstand), Hilfsmittel-Wahl, Maßnahmen Hautpflege + Ernährung\n\n**3. Bei bestehendem Dekubitus — Wunddokumentation** (pro Verbandswechsel): Kategorie (I-IV), Größe (Länge × Breite × Tiefe in cm), Wundgrund (Anteile rot/gelb/schwarz/rosa in %), Wundrand, Exsudat (Menge, Farbe, Geruch), Foto mit Maßstab (Zustimmung!), Datum + Unterschrift\n\n**4. Durchführung**: Jede Umlagerung, Hautinspektion, Verbandswechsel\n\n**5. Evaluation**: Wöchentlich: Heilungs- oder Verschlechterungs-Verlauf\n\n**Rechtlich wichtig:** SGB XI, MDK-Prüfung, Haftung bei fehlender Dokumentation.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Aufschreiben beim Dekubitus",
          body: "Dokumentation ist beim Dekubitus sehr wichtig. Es gibt einen Satz: **'Was nicht aufgeschrieben ist, wurde nicht gemacht.'**\n\n**Was muss aufgeschrieben werden:**\n\n**1. Einschätzung bei Aufnahme** (innerhalb 2 Stunden): Braden-Skala, Pflegerische Einschätzung, Haut genau anschauen\n\n**2. Plan**: Wann wird umgelagert, welche Matratze, Hautpflege + Ernährung\n\n**3. Bei bestehendem Dekubitus — pro Verbandswechsel**: Kategorie (I bis IV), Größe (Länge × Breite × Tiefe in cm), Wundgrund (rot/gelb/schwarz/rosa in %), Wundrand, Flüssigkeit (viel/wenig, Farbe, Geruch), Schmerzen, Foto mit Maßstab (Patient muss einverstanden sein!), Datum + Unterschrift\n\n**4. Durchführung**: Jede Umlagerung, jede Hautkontrolle, jeder Verband\n\n**5. Auswertung**: Wöchentlich — heilt die Wunde oder wird sie schlechter?\n\n**Rechtlich wichtig:** SGB XI, MDK prüft. Ohne Dokumentation: Haftung.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: dekubitus-prophylaxe-praevalenz (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-praevalenz",
    themaId: "dekubitus-prophylaxe",
    titel: "Prävalenz in Deutschland",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie viele Patienten in einem deutschen Krankenhaus haben deiner Schätzung nach einen Dekubitus? Welche Altersgruppe ist am stärksten betroffen?",
      antwort:
        "Dekubitus-Prävalenz in Deutschland: ~12,5% im Krankenhaus (DNQP-Daten), 5-8% in Pflegeheimen, 3-5% ambulant, bis 20% auf Intensivstation. Hauptrisikogruppe: ≥ 80 Jahre + Immobilität + Mangelernährung + Inkontinenz + Multimorbidität. Kosten Kategorie III-IV: 10.000-30.000 €. DNQP: weitgehend vermeidbar.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Dekubitus-Prävalenz in Deutschland: ~12,5% im Krankenhaus (DNQP-Daten), 5-8% in Pflegeheimen. Am stärksten betroffen: Menschen ≥ 80 Jahre. Hauptursachen: Immobilität, Mangelernährung, Inkontinenz, Multimorbidität.",
      textB1:
        "Dekubitus in Deutschland: ~12,5% aller Patienten im Krankenhaus haben einen. In Pflegeheimen: 5-8%. Am meisten betroffen: Menschen ab 80 Jahren. Gründe: wenig Bewegung, wenig Essen, Inkontinenz, viele Krankheiten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-13",
        phase: 1,
        stepType: "diagram",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2017/2024)", "RKI (2023)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-praevalenz",
        tag: "pflege",
        displayFormat: "news",
        contentC1: {
          title: "Dekubitus-Prävalenz in Deutschland",
          body: "**Dekubitus-Prävalenz in Deutschland (aktuelle Daten):**\n\n- **Akutkrankenhaus**: ~12,5% (DNQP-Daten, nationale Benchmark-Erhebung)\n- **Pflegeheim**: 5-8%\n- **Ambulante Pflege**: 3-5%\n- **Intensivstation**: bis zu 20% (hochrisiko-Setting)\n\n**Risikogruppen:**\n- **Alter ≥ 80 Jahre**: Prävalenz steigt stark\n- **Immobilität** (bettlägerig, Rollstuhl-gebunden)\n- **Neurologische Erkrankungen** (Schlaganfall, Demenz, Querschnitt)\n- **Mangelernährung** (BMI < 18,5 oder Gewichtsverlust > 10%)\n- **Inkontinenz**\n- **Multimorbidität** (≥ 3 chronische Erkrankungen)\n\n**Kosten:** Ein Dekubitus Kategorie III-IV kostet im Schnitt ~10.000-30.000 € pro Fall.\n\n**Qualitätsindikator:** Dekubitus-Prävalenz ist ein Haupt-**Qualitätsindikator** in der MDK-Prüfung. DNQP: Dekubitus 'weitgehend vermeidbar'. (DNQP 2017/2024, RKI 2023)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Wie oft gibt es Dekubitus in Deutschland?",
          body: "**Zahlen aus Deutschland:**\n\n- **Im Krankenhaus**: etwa **12,5% der Patienten** haben einen.\n- **Im Pflegeheim**: 5 bis 8%.\n- **In der häuslichen Pflege**: 3 bis 5%.\n- **Intensivstation**: bis zu 20% — hier ist das Risiko am höchsten.\n\n**Wer hat das höchste Risiko?**\n- **Ab 80 Jahren** steigt die Zahl stark\n- **Bettlägerige** oder **Rollstuhlfahrer**\n- Menschen mit **Schlaganfall, Demenz, Querschnitt**\n- **Mangelernährung**\n- **Inkontinenz**\n- Menschen mit **vielen Krankheiten gleichzeitig**\n\n**Kosten:** Ein schwerer Dekubitus (Kategorie III oder IV) kostet **10.000 bis 30.000 Euro** pro Fall.\n\n**Wichtig:** Der DNQP sagt: **Die meisten Dekubiti kann man verhindern.**",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: dekubitus-prophylaxe-information (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "dekubitus-prophylaxe-information",
    themaId: "dekubitus-prophylaxe",
    titel: "Information und Beratung des Patienten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 82-jähriger Patient sagt: 'Ich will nicht ständig gedreht werden. Lassen Sie mich einfach in Ruhe!' Wie reagierst du? Welche 3 Argumente kannst du ihm geben?",
      antwort:
        "Autonomie respektieren — kein Zwingen (das wäre rechtlich Nötigung). Aufklären über Konsequenzen. Alternativen anbieten: Mikrobewegungen? Anderer Zeitpunkt? Ursache erfragen: Schmerz? Müdigkeit? Scham? Dokumentieren: Aufklärung + Ablehnung schriftlich. Bei wiederholter Ablehnung: Arzt informieren. Grundlage: DNQP K5 — Partizipative Entscheidungsfindung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der DNQP K5 fordert: Information, Anleitung, Beratung. Patient und Angehörige werden aktiv einbezogen. Partizipative Entscheidungsfindung — nicht 'ich weiß, was gut für dich ist', sondern 'lass uns das gemeinsam besprechen'.",
      textB1:
        "Der DNQP-Standard sagt: Patienten und Angehörige werden informiert und angeleitet. Man entscheidet gemeinsam. Nicht: 'Ich weiß besser, was für dich gut ist.' Sondern: 'Lass uns zusammen schauen, was sinnvoll ist.'",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-deku-wb-14",
        phase: 1,
        stepType: "dialog",
        bloomLevel: 5,
        kompetenzbereich: "V.1",
        quellen: ["DNQP (2024) K5", "§ 1831 BGB"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dekubitus-information",
        tag: "pflege",
        contentC1: {
          title: "Information und Beratung des Patienten",
          body: "Die **Information und Anleitung** von Patient und Angehörigen ist Kriterium 5 des DNQP-Expertenstandards.\n\n**Ziele:** Patient versteht sein Risiko und die Prophylaxe-Maßnahmen. Patient wirkt aktiv mit (Mikrobewegungen, Rückmeldung zu Schmerzen). Angehörige können zu Hause weiter prophylaxieren. **Selbstbestimmung** wird gewahrt (ein Patient hat das Recht auf abgelehnte Maßnahmen — mit dokumentierter Aufklärung).\n\n**Inhalte der Beratung:**\n1. Was ist ein Dekubitus? — laienverständlich\n2. Wie entsteht er? — Druck + Zeit\n3. Warum gerade ich? — individuelle Risikofaktoren\n4. Was tun wir? — konkrete Maßnahmen\n5. Was kannst du tun? — Eigenbewegungen, Rückmeldung, Ernährung\n6. Was kann die Familie tun?\n\n**Kommunikation bei Ablehnung** ('Lass mich in Ruhe'):\n- **Nicht Druck ausüben** — Autonomie respektieren\n- **Grund erfragen** (Schmerz? Müdigkeit? Scham?)\n- **Alternativen anbieten** (Mikrobewegungen? Anderer Zeitpunkt?)\n- **Dokumentieren** — bei wiederholter Ablehnung: Entscheidung schriftlich, Arzt informieren\n\n**Kultursensibel**: Bei fremdsprachigen Patienten ggf. Dolmetscher einbeziehen, einfache Sprache, Bilder nutzen.",
          glossarBegriffe: ["Partizipative Entscheidungsfindung"],
        },
        contentB1: {
          title: "Patienten informieren und beraten",
          body: "Das **5. Kriterium** des DNQP sagt: Patient und Angehörige werden **informiert und angeleitet**.\n\n**Ziele:** Patient versteht, was ein Dekubitus ist und wie man ihn verhindert. Patient macht aktiv mit. Familie kann zu Hause weiter helfen. Der Patient **darf auch ablehnen** — das ist sein Recht.\n\n**Was besprichst du mit dem Patienten?**\n1. Was ist ein Dekubitus? — einfach erklären\n2. Wie entsteht er? — Druck + Zeit\n3. Warum habe ich das Risiko? — was ist bei ihm persönlich\n4. Was machen wir? — Umlagern, Matratze, Hautpflege\n5. Was kannst du selbst tun? — kleine Bewegungen, sag Bescheid, gut essen und trinken\n6. Was kann die Familie tun?\n\n**Wenn der Patient NICHT will ('Lass mich in Ruhe!'):**\n- **Nicht zwingen** — er hat das Recht zu nein sagen\n- **Fragen, warum**: Hat er Schmerzen? Ist er müde? Schämt er sich?\n- **Alternativen anbieten**: Vielleicht nur kleine Bewegungen? Später?\n- **Aufschreiben** — wenn er öfter ablehnt: Schriftlich festhalten, den Arzt informieren",
          glossarBegriffe: ["Partizipative Entscheidungsfindung"],
        },
      },
    },
    glossarBegriffe: ["Partizipative Entscheidungsfindung"],
    karteikarten: [],
  },
];

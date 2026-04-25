// CE-02 Thema Ganzkörperpflege — Wissensbausteine (19 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/ganzkörperpflege/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_GANZKOERPERPFLEGE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: grundprinzipien-intimsphaere (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-grundprinzipien",
    themaId: "ganzkörperpflege",
    titel: "Grundprinzipien: Intimsphäre und Würde",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du bist krank im Bett und eine fremde Person soll dich waschen. Welche drei Dinge wären dir am wichtigsten, damit du dich nicht unwohl fühlst?",
      antwort:
        "Ganzkörperpflege berührt die Intimsphäre. Leitplanken: Sichtschutz (Tür/Paravent), Raumtemperatur 22-24 °C, Wassertemperatur 37-40 °C, Vorlieben respektieren (Seife, Reihenfolge) und gleichgeschlechtliche Pflege, wenn gewünscht.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ganzkörperpflege berührt die Intimsphäre. Leitplanken: Sichtschutz (Tür/Paravent), Raumtemperatur 22-24 °C, Wassertemperatur 37-40 °C, Vorlieben respektieren (Seife, Reihenfolge) und gleichgeschlechtliche Pflege, wenn gewünscht.",
      textB1:
        "Waschen ist sehr privat. Wichtig ist: Die Tür zu, damit niemand reinschaut. Das Zimmer warm (22-24 °C). Das Wasser angenehm warm (37-40 °C). Frage, was der Patient mag. Wenn gewünscht: Mann wäscht Mann, Frau wäscht Frau.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-grundprinzipien",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Grundprinzipien: Intimsphäre und Würde",
          body: "Ganzkörperpflege ist eine der intimsten Handlungen in der Pflege. Du dringst in die Privatsphäre eines Menschen ein — oft fremd, oft abhängig. Die Leitprinzipien schützen die Würde:\n\n**Sichtschutz**: Tür schließen, Paravent bei Mehrbettzimmern nutzen, Fenster mit Sichtschutz versehen. Niemand darf unerwartet reinsehen.\n\n**Raumtemperatur 22-24 °C**: Ein nasser Körper kühlt schnell aus. Zu kalt = Gänsehaut, Unwohlsein, bei alten Menschen Kreislaufprobleme.\n\n**Wassertemperatur 37-40 °C**: Am eigenen Unterarm prüfen (nicht am Handrücken — dort ist die Haut weniger empfindlich). Bei Sensibilitätsstörungen (Diabetes, Schlaganfall) immer mit Thermometer.\n\n**Vorlieben respektieren**: Welche Seife? Welche Reihenfolge? Haarewaschen heute oder morgen? Du fragst — du entscheidest nicht allein.\n\n**Gleichgeschlechtliche Pflege**: Immer anbieten, nicht aufzwingen. Kulturelle und religiöse Gründe ernst nehmen. (Juchli ATLs, 1987)",
          glossarBegriffe: ["Intimsphäre", "Paravent", "Sensibilitätsstörung"],
        },
        contentB1: {
          title: "Grundprinzipien: Intimsphäre und Würde",
          body: "Ganzkörperpflege ist sehr privat. Du machst etwas, das normalerweise niemand für einen Menschen tut. Deshalb gibt es Regeln:\n\n**Sichtschutz**: Tür zu. Paravent im Mehrbettzimmer. Niemand darf reingucken.\n\n**Raumtemperatur 22-24 °C**: Ein nasser Körper wird schnell kalt. Das ist unangenehm. Alte Menschen können auch Kreislauf-Probleme bekommen.\n\n**Wassertemperatur 37-40 °C**: Prüfe mit deinem Unterarm. Bei Diabetes oder Schlaganfall: nimm ein Thermometer. Dort spürt die Haut heiß nicht richtig.\n\n**Frage nach Vorlieben**: Welche Seife? In welcher Reihenfolge? Willst du heute Haare waschen?\n\n**Gleichgeschlechtliche Pflege**: Wenn der Patient möchte: Mann wäscht Mann, Frau wäscht Frau. Besonders wichtig bei manchen Kulturen und Religionen.",
          glossarBegriffe: ["Intimsphäre", "Paravent", "Sensibilitätsstörung"],
        },
      },
    },
    glossarBegriffe: ["Intimsphäre", "Paravent", "Sensibilitätsstörung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: reihenfolge-bettwaschung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-reihenfolge",
    themaId: "ganzkörperpflege",
    titel: "Reihenfolge der Bettwaschung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum solltest du bei der Bettwaschung nicht erst die Füße und dann das Gesicht waschen? Welche Reihenfolge ergibt hygienisch Sinn?",
      antwort:
        "Regel: von sauber nach schmutzig, von oben nach unten, Intim zuletzt mit frischem Wasser. Reihenfolge: Gesicht → Haare → Ohren → Hals → Brust/Bauch → Arme → Rücken → Beine → Intim. Zwei Waschlappen: einer für Gesicht/Körper, einer für Intim.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Regel: von sauber nach schmutzig, von oben nach unten, Intimbereich zuletzt mit frischem Wasser. Reihenfolge: Gesicht → Haare → Ohren → Hals → Brust/Bauch → Arme → Rücken → Beine → Intim. Zwei Waschlappen: einer für Gesicht/Körper, einer für Intim.",
      textB1:
        "Regel: von sauber nach schmutzig, von oben nach unten, Intimbereich zuletzt. Reihenfolge: Gesicht → Haare → Ohren → Hals → Brust/Bauch → Arme → Rücken → Beine → Intim. Für Intim: frisches Wasser und ein extra Waschlappen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-02",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege", "RKI/KRINKO (2022): Händehygiene"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-reihenfolge",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Reihenfolge der Bettwaschung",
          body: "Die Reihenfolge der Ganzkörperwaschung im Bett folgt einem einfachen Prinzip: **von sauber nach schmutzig, von oben nach unten**. Das schützt den Patienten vor der Verschleppung von Keimen (z.B. aus dem Intimbereich ins Gesicht).\n\n**Standard-Reihenfolge:**\n1. **Gesicht** — nur mit klarem Wasser, keine Seife (trocknet aus)\n2. **Haare** — je nach Bedarf, beachte HWS-Stellung\n3. **Ohren** — nur Ohrmuschel, nichts in den Gehörgang\n4. **Hals** — Hautfalten besonders beachten\n5. **Brust und Bauch** — bei Frauen Unterbrustfalte\n6. **Arme** — Richtung Herz (venöser Rückfluss)\n7. **Rücken** — Patient auf Seite lagern, gute Gelegenheit für Dekubitus-Check\n8. **Beine** — Richtung Herz\n9. **Intim** — **zuletzt mit frischem Wasser und zweitem Waschlappen**\n\nDer Intimbereich kommt zuletzt, weil dort die meiste Keimbesiedelung ist. Zweimal Wasser wechseln ist nicht übertrieben — es ist Standard. (Juchli ATLs, 1987; RKI/KRINKO 2022)",
          glossarBegriffe: ["HWS", "Keimbesiedelung", "venöser Rückfluss", "Intimpflege"],
        },
        contentB1: {
          title: "Reihenfolge der Bettwaschung",
          body: "Die Reihenfolge beim Waschen folgt einer Regel: **von oben nach unten, von sauber nach schmutzig**. So kommen keine Keime vom Intimbereich ins Gesicht.\n\n**So läuft es ab:**\n1. **Gesicht** — nur Wasser, keine Seife\n2. **Haare** — wenn nötig\n3. **Ohren** — nur außen, nichts in den Gehörgang\n4. **Hals** — auch die Hautfalten\n5. **Brust und Bauch** — bei Frauen unter der Brust\n6. **Arme** — in Richtung Herz waschen\n7. **Rücken** — Patient zur Seite drehen, Haut anschauen\n8. **Beine** — auch in Richtung Herz\n9. **Intimbereich** — **zum Schluss, mit neuem Wasser und neuem Waschlappen**\n\nDer Intimbereich kommt zuletzt, weil dort viele Keime sind. Wasser wechseln ist Pflicht.",
          glossarBegriffe: ["HWS", "Keimbesiedelung", "venöser Rückfluss", "Intimpflege"],
        },
      },
    },
    glossarBegriffe: ["HWS", "Keimbesiedelung", "venöser Rückfluss", "Intimpflege"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: waschtechnik-lange-zuege (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-waschtechnik",
    themaId: "ganzkörperpflege",
    titel: "Waschtechnik: Lange Züge statt Kreisbewegungen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du siehst eine Kollegin, die mit kleinen Kreisbewegungen wäscht. Eine andere wäscht mit langen Zügen von unten nach oben. Welche Technik ist besser — und warum?",
      antwort:
        "Lange Züge in eine Richtung sind Standard (Prinzip aus Bobath und Kinästhetik). Sie aktivieren das Körperbild, sind angenehm, vermeiden Hautreizung. Kreisbewegungen verwirren die Körperwahrnehmung und können die Haut reizen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Lange Züge in eine Richtung sind Standard (Prinzip aus Bobath und Kinästhetik). Sie aktivieren das Körperbild, sind angenehm, vermeiden Hautreizung. Kreisbewegungen verwirren die Körperwahrnehmung und können die Haut reizen.",
      textB1:
        "Wasch immer mit langen Zügen in eine Richtung. Das ist angenehm und gut für den Körper. Kleine Kreisbewegungen sind nicht gut: Sie reizen die Haut und verwirren das Körpergefühl. Denke an Bobath und Kinästhetik.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-03",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bobath B. (1990): Adult Hemiplegia — Evaluation and Treatment", "Fröhlich A. (1998): Basale Stimulation"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-waschtechnik",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Waschtechnik: Lange Züge statt Kreisbewegungen",
          body: "Die Waschtechnik folgt zwei Konzepten: **Bobath** und **Kinästhetik**. Beide haben gemeinsam: Der Patient soll seinen Körper **klar wahrnehmen**, nicht nur 'passiv geputzt' werden.\n\n**Lange Züge in eine Richtung:**\n- An Armen und Beinen: **zum Herzen hin** (venöser Rückfluss)\n- Am Rumpf: großflächig, gleichmäßig\n- Erzeugen ein klares Körperbild — der Patient spürt 'Das ist mein Arm'\n- Geeignet für Menschen mit Halbseitenlähmung, Demenz, reduziertem Bewusstsein\n\n**Keine Kreisbewegungen:**\n- Verwirren die Körperwahrnehmung\n- Können Haut reizen (besonders bei Altershaut, Hautpilz)\n- Erinnern eher an 'Wischen' als an Pflege\n\n**Druck:** Nicht zu leicht (kitzelt), nicht zu fest (schmerzhaft). **Mittlerer Druck** aktiviert Muskelspindeln und wirkt beruhigend. (Bobath 1990; Fröhlich Basale Stimulation 1998)",
          glossarBegriffe: ["Bobath-Konzept", "Kinästhetik", "venöser Rückfluss"],
        },
        contentB1: {
          title: "Waschtechnik: Lange Züge statt Kreisbewegungen",
          body: "Beim Waschen denkst du an zwei Ideen: **Bobath** und **Kinästhetik**. Beide sagen: Der Patient soll seinen Körper **spüren**, nicht nur geputzt werden.\n\n**Lange Züge in eine Richtung:**\n- Arme und Beine: **zum Herzen hin** (gut für das Blut)\n- Am Rumpf: groß und gleichmäßig\n- Der Patient fühlt: 'Das ist mein Arm, das ist mein Bein'\n- Besonders wichtig bei Schlaganfall, Demenz oder wenig Bewusstsein\n\n**Keine kleinen Kreise:**\n- Verwirrt den Körper\n- Reizt die Haut, besonders bei alter Haut\n- Fühlt sich nicht wie Pflege an\n\n**Druck:** Nicht zu leicht (kitzelt). Nicht zu fest (tut weh). **Mittelstark** ist gut. Das hilft auch beim Entspannen.",
          glossarBegriffe: ["Bobath-Konzept", "Kinästhetik", "venöser Rückfluss"],
        },
      },
    },
    glossarBegriffe: ["Bobath-Konzept", "Kinästhetik", "venöser Rückfluss"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: haendehygiene-5-momente (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-haendehygiene",
    themaId: "ganzkörperpflege",
    titel: "Händehygiene: Die 5 Momente der WHO",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du kommst ins Zimmer einer Patientin, misst den Blutdruck, berührst kurz einen Zettel auf dem Tisch, hilfst bei der Nahrungsaufnahme und verlässt dann das Zimmer. An wie vielen Stellen musst du deine Hände desinfizieren?",
      antwort:
        "Die WHO kennt 5 Momente der Händedesinfektion: 1) vor Patientenkontakt, 2) vor aseptischer Tätigkeit, 3) nach Kontakt mit Körperflüssigkeiten, 4) nach Patientenkontakt, 5) nach Kontakt mit der Patientenumgebung. Gilt auch bei handschuhfreier Arbeit.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die WHO kennt 5 Momente der Händedesinfektion: 1) vor Patientenkontakt, 2) vor aseptischer Tätigkeit, 3) nach Kontakt mit Körperflüssigkeiten, 4) nach Patientenkontakt, 5) nach Kontakt mit der Patientenumgebung. Gilt auch bei handschuhfreier Arbeit.",
      textB1:
        "Die WHO sagt: 5 Momente zum Hände desinfizieren. 1) Vor dem Patienten. 2) Vor sterilen Sachen. 3) Nach Kontakt mit Blut, Urin, Stuhl. 4) Nach dem Patienten. 5) Nach Kontakt mit Sachen vom Patienten (Bett, Tisch).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["WHO (2009): My 5 Moments for Hand Hygiene — SAVE LIVES Campaign", "RKI/KRINKO (2022): Händehygiene"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-haendehygiene",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Händehygiene: Die 5 Momente der WHO",
          body: "Die **5 Momente der Händehygiene** sind das Herzstück der Infektionsprävention (WHO, 2009; RKI/KRINKO 2022):\n\n**Moment 1 — Vor Patientenkontakt** (Schutz des Patienten): Bevor du ihn berührst — Blutdruck messen, begrüßen, zudecken.\n\n**Moment 2 — Vor aseptischer Tätigkeit** (Schutz des Patienten): Bevor du etwas Steriles machst — Katheter, Verbandswechsel, Injektion, Mundpflege.\n\n**Moment 3 — Nach Kontakt mit Körperflüssigkeiten** (Schutz von dir und anderen): Blut, Urin, Stuhl, Erbrochenes, Sputum — auch wenn du Handschuhe trugst.\n\n**Moment 4 — Nach Patientenkontakt** (Schutz von dir und anderen): Nachdem du ihn berührt hast.\n\n**Moment 5 — Nach Kontakt mit Patientenumgebung** (Schutz von dir und anderen): Bett, Nachttisch, Infusionsständer — auch ohne Patientenberührung.\n\n**Wichtig:** Desinfektion (30 Sekunden, alle Flächen) ist effektiver als Händewaschen. Händewaschen nur bei sichtbarer Verschmutzung oder nach Toilettengang. (WHO SAVE LIVES Campaign 2009)",
          glossarBegriffe: ["Händedesinfektion", "Aseptisch", "Nosokomial"],
        },
        contentB1: {
          title: "Händehygiene: Die 5 Momente der WHO",
          body: "Die WHO hat **5 Momente** für Hände-Desinfektion festgelegt (WHO 2009):\n\n**1. Vor Patientenkontakt** — Bevor du den Patienten anfasst (z.B. Blutdruck messen).\n\n**2. Vor sterilen Arbeiten** — Bevor du etwas Steriles tust (z.B. Katheter, Verband, Mundpflege).\n\n**3. Nach Körperflüssigkeiten** — Nach Blut, Urin, Stuhl, Spucke, Erbrochenem. Auch wenn du Handschuhe hattest.\n\n**4. Nach Patientenkontakt** — Nachdem du den Patienten angefasst hast.\n\n**5. Nach Patientenumgebung** — Nach Kontakt mit Bett, Tisch oder Infusionsständer.\n\n**Wichtig:** **Desinfizieren** (30 Sekunden, alle Seiten der Hand) ist besser als Waschen. Waschen nur, wenn die Hände schmutzig sind oder nach der Toilette.",
          glossarBegriffe: ["Händedesinfektion", "Aseptisch", "Nosokomial"],
        },
      },
    },
    glossarBegriffe: ["Händedesinfektion", "Aseptisch", "Nosokomial"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: aktivierende-pflege-ressourcen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-aktivierend",
    themaId: "ganzkörperpflege",
    titel: "Aktivierende Pflege und Ressourcenorientierung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K. (78, Zustand nach Schlaganfall rechts) könnte mit der linken Hand selbst ihr Gesicht waschen — aber es dauert 10 Minuten. Du hast noch 5 weitere Patienten. Was machst du? Begründe.",
      antwort:
        "Aktivierende Pflege heißt: Was kann der Patient selbst? Das nutzt du — auch wenn es länger dauert. Ressourcenorientierung schlägt Zeitersparnis. Der Patient behält Selbstständigkeit, Muskelkraft, Selbstwert. Du übernimmst nur, was er wirklich nicht kann.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Aktivierende Pflege heißt: Was kann der Patient selbst? Das nutzt du — auch wenn es länger dauert. Ressourcenorientierung schlägt Zeitersparnis. Der Patient behält Selbstständigkeit, Muskelkraft, Selbstwert. Du übernimmst nur, was er wirklich nicht kann.",
      textB1:
        "Aktivierende Pflege fragt: Was kann der Patient selbst? Das machst du zuerst — auch wenn es länger dauert. So bleibt der Patient stark und selbstständig. Du hilfst nur, was er wirklich nicht allein schafft. Das nennt man ressourcenorientiert.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-aktivierend",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Aktivierende Pflege und Ressourcenorientierung",
          body: "**Aktivierende Pflege** (nach dem Konzept der Ressourcenorientierung) ist ein Grundprinzip moderner Pflege. Leitfrage: **Was kann der Patient selbst?**\n\n**Prinzipien:**\n- **Ressourcen nutzen**: Jede noch vorhandene Fähigkeit wird aktiv eingesetzt. Auch wenn es länger dauert.\n- **Selbstständigkeit erhalten**: Was nicht genutzt wird, geht verloren (use it or lose it). Das betrifft Muskelkraft, Bewegungsabläufe, Alltagskompetenz.\n- **Würde schützen**: Selbst waschen zu dürfen = Kontrolle über den eigenen Körper = Würde.\n\n**Konkret bei der Ganzkörperpflege:**\n- Gesicht selbst waschen (wenn eine Hand funktioniert)\n- Zähne selbst putzen\n- Sich selbst mit Handtuch abtrocknen\n- Beim Drehen mithelfen (Bettgitter greifen, Bein anstellen)\n\n**Gegenmodell — übernehmende Pflege**: Die Pflegekraft macht alles, weil es schneller geht. Folge: Der Patient wird abhängiger, verliert Kraft und Selbstwertgefühl. **Nicht erlaubt als Standard.** (Juchli ATLs, 1987)\n\n**Dokumentation:** Ressourcen und Einschränkungen explizit nennen — z.B. 'Wäscht Gesicht selbst (links), Rumpf und Beine durch Pflege'.",
          glossarBegriffe: ["Aktivierende Pflege", "Ressourcenorientierung"],
        },
        contentB1: {
          title: "Aktivierende Pflege und Ressourcenorientierung",
          body: "**Aktivierende Pflege** bedeutet: Du fragst **'Was kann der Patient selbst?'** und lässt ihn das auch machen.\n\n**Drei Gründe:**\n- **Ressourcen nutzen**: Was der Patient noch kann, soll er nutzen. Auch wenn es länger dauert.\n- **Selbstständigkeit erhalten**: Was man nicht nutzt, verliert man. Muskeln werden schwach.\n- **Würde schützen**: Sich selbst waschen zu können = ein Stück Freiheit.\n\n**Beispiele beim Waschen:**\n- Gesicht selbst waschen (mit der gesunden Hand)\n- Zähne selbst putzen\n- Sich selbst abtrocknen\n- Beim Drehen mithelfen\n\n**Das Gegenteil — übernehmende Pflege**: Die Pflegekraft macht alles. Der Patient wird immer schwächer. **Das ist nicht gut.**\n\n**Dokumentieren:** 'Wäscht Gesicht selbst mit links. Rumpf und Beine übernimmt die Pflege.'",
          glossarBegriffe: ["Aktivierende Pflege", "Ressourcenorientierung"],
        },
      },
    },
    glossarBegriffe: ["Aktivierende Pflege", "Ressourcenorientierung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: intimpflege-frau (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-intimpflege-frau",
    themaId: "ganzkörperpflege",
    titel: "Intimpflege Frau: Richtung und Hygiene",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum wird bei der Intimpflege der Frau immer 'von vorne nach hinten' gewischt — und welche Komplikation soll das verhindern?",
      antwort:
        "Bei der Frau: Immer von vorne nach hinten (Vulva zu Anus). Grund: Verschleppung von Darmkeimen (v.a. E. coli) in die Harnröhre wird vermieden — Schutz vor aufsteigenden Harnwegsinfekten (HWI). Frisches Wasser, eigener Waschlappen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei der Frau: Immer von vorne nach hinten (Vulva zu Anus). Grund: Verschleppung von Darmkeimen (v.a. E. coli) in die Harnröhre wird vermieden — Schutz vor aufsteigenden Harnwegsinfekten (HWI). Frisches Wasser, eigener Waschlappen.",
      textB1:
        "Bei der Frau: Immer von vorne nach hinten wischen. Also von der Scheide zum After. Der Grund: Keime aus dem Darm dürfen nicht zur Harnröhre kommen. Sonst gibt es eine Harnwegs-Infektion. Frisches Wasser, extra Waschlappen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["RKI/KRINKO (2022): Krankenhaushygiene"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-intimpflege-frau",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Intimpflege Frau: Richtung und Hygiene",
          body: "Die Intimpflege der Frau folgt einer klaren anatomischen Logik: **Richtung immer von vorne (Vulva) nach hinten (Anus)**.\n\n**Warum?** Die weibliche Harnröhre ist mit nur 3-5 cm sehr kurz. Darmkeime (v.a. **E. coli**) haben einen extrem kurzen Weg in die Blase — aufsteigende Harnwegsinfekte entstehen schnell.\n\n**Praktisches Vorgehen:**\n1. **Frisches, sauberes Wasser** (nicht das Waschwasser vom Körper)\n2. **Eigener Waschlappen** (nur für Intim, dann in den Wäschekorb)\n3. **Große Schamlippen spreizen** und zwischen großen und kleinen Schamlippen reinigen\n4. **Jeder Wischzug nur einmal nutzen** (danach wenden oder neuer Lappen)\n5. **Richtung: vorne → hinten**, nie zurück\n6. **Gut trocknen** — feuchte Hautfalten fördern Pilzinfektionen (Soor, Intertrigo)\n\nBei Frauen mit Dauerkatheter: Besondere Reinigung um den Katheter und am Meatus (Harnröhreneingang). (RKI Krankenhaushygiene 2022)",
          glossarBegriffe: ["Intimpflege", "Keimbesiedelung", "Intertrigo"],
        },
        contentB1: {
          title: "Intimpflege Frau: Richtung und Hygiene",
          body: "Bei der Intimpflege der Frau wischt du **immer von vorne nach hinten**.\n\n**Warum?** Die Harnröhre der Frau ist sehr kurz (3-5 cm). Keime aus dem Darm (besonders **E. coli**) haben einen kurzen Weg in die Blase. So entsteht eine **Harnwegs-Infektion**.\n\n**So machst du es:**\n1. **Frisches Wasser** holen (nicht das Waschwasser vom Körper)\n2. **Neuer Waschlappen** nur für Intim\n3. **Große Schamlippen** zur Seite schieben und dazwischen reinigen\n4. **Jeder Wisch nur einmal** (dann neuer Zug)\n5. **Richtung: vorne nach hinten** — nie zurück\n6. **Gut trocknen** — nasse Hautfalten machen Pilze\n\nBei Frauen mit Katheter: besonders um den Katheter reinigen.",
          glossarBegriffe: ["Intimpflege", "Keimbesiedelung", "Intertrigo"],
        },
      },
    },
    glossarBegriffe: ["Intimpflege", "Keimbesiedelung", "Intertrigo"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: intimpflege-mann-vorhaut (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-intimpflege-mann",
    themaId: "ganzkörperpflege",
    titel: "Intimpflege Mann: Vorhaut und Paraphimose",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum ist es bei einem Mann mit Dauerkatheter besonders wichtig, die Vorhaut zurückzuschieben, zu reinigen — und wieder vorzuschieben? Was passiert, wenn man das vergisst?",
      antwort:
        "Vorhaut zurück → reinigen → wieder vor. Wird das vergessen, schnürt die Vorhaut die Eichel ein: Paraphimose — venöser Abfluss gestört, Schwellung, Schmerz, im schlimmsten Fall Nekrose — Notfall. Bei Dauerkathetern besonders hohes Risiko.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei der Intimpflege des Mannes: Vorhaut vorsichtig zurückschieben, Eichel reinigen, dann Vorhaut wieder nach vorne ziehen. Sonst droht Paraphimose — eine schmerzhafte, gefährliche Einklemmung der Eichel. Besonders wichtig bei Dauerkatheter-Trägern.",
      textB1:
        "Bei der Intimpflege des Mannes: Vorhaut vorsichtig zurückschieben, Eichel waschen, Vorhaut wieder nach vorne ziehen. Wenn du das Zurückziehen vergisst, kann die Vorhaut einklemmen. Das nennt man Paraphimose. Sehr schmerzhaft.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["RKI/KRINKO (2022): Krankenhaushygiene"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-intimpflege-mann",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Intimpflege Mann: Vorhaut und Paraphimose",
          body: "Die Intimpflege des Mannes hat eine anatomische Besonderheit: die **Vorhaut** (Präputium). Ohne regelmäßige Reinigung sammelt sich unter der Vorhaut **Smegma** — eine weißliche Ansammlung aus Talg, Urinresten und Epithelzellen, idealer Nährboden für Bakterien.\n\n**Vorgehen:**\n1. **Vorhaut vorsichtig zurückschieben** — nie mit Gewalt (bei Phimose nicht erzwingen!)\n2. **Eichel (Glans) und Vorhauttasche reinigen** — mildes Wasser, keine scharfen Seifen\n3. **Gut abspülen und trocknen**\n4. **Vorhaut wieder nach vorne ziehen** — **wichtigster Schritt!**\n\n**Gefahr Paraphimose:** Bleibt die Vorhaut zurückgezogen, kann sie die Eichel einschnüren wie ein Gummiring. Folge: Venöser Abfluss gestört → Schwellung → Schmerz → im schlimmsten Fall Nekrose der Eichel. Medizinischer Notfall.\n\n**Bei Dauerkathetern:** Täglich reinigen, auch den Bereich direkt am Katheter. Krustenbildung am Meatus entfernen. Paraphimose-Risiko besonders hoch, weil die Vorhaut oft 'vergessen' wird. (RKI Krankenhaushygiene 2022)",
          glossarBegriffe: ["Smegma", "Paraphimose"],
        },
        contentB1: {
          title: "Intimpflege Mann: Vorhaut und Paraphimose",
          body: "Die Intimpflege des Mannes ist besonders wegen der **Vorhaut**. Ohne Reinigung sammelt sich darunter **Smegma** — weißliche Ablagerungen aus Talg, Urin und Hautzellen. Dort wachsen Bakterien.\n\n**So machst du es:**\n1. **Vorhaut vorsichtig zurückschieben** — nie mit Kraft! Manche Männer haben eine enge Vorhaut (Phimose).\n2. **Eichel und Innenseite waschen** — mildes Wasser, keine scharfe Seife\n3. **Gut abspülen und abtrocknen**\n4. **Vorhaut wieder nach vorne ziehen** — **das ist das Wichtigste!**\n\n**Gefahr Paraphimose:** Wenn die Vorhaut zurückgezogen bleibt, schnürt sie die Eichel ab. Dann schwillt die Eichel, tut weh, und es kann ein **Notfall** werden. Darum: **immer vorziehen!**\n\n**Bei Katheter-Trägern:** jeden Tag reinigen, auch um den Katheter. Sonst entstehen dort Krusten.",
          glossarBegriffe: ["Smegma", "Paraphimose"],
        },
      },
    },
    glossarBegriffe: ["Smegma", "Paraphimose"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: augenpflege (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-augenpflege",
    themaId: "ganzkörperpflege",
    titel: "Augenpflege: Richtung und Material",
    stufe1: {
      typ: "denkfrage",
      frage:
        "In welche Richtung wischt du bei der Augenpflege — zum Ohr hin oder zur Nase hin? Und warum könnte das medizinische Konsequenzen haben?",
      antwort:
        "Augenpflege: Von außen nach innen (Ohr → Nase). Grund: Tränenkanal mündet im inneren Lidwinkel. Verschleppung von Erregern in den Kanal wird vermieden. Pro Auge ein eigener Tupfer. Bei Entzündung: steriles Material.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Augenpflege: Von außen nach innen (Ohr → Nase). Grund: Ein eventueller Erreger (z.B. bei Konjunktivitis) soll nicht in den Tränenkanal verschleppt werden. Pro Auge ein eigener Tupfer/Wattepad. Bei Entzündung: steriles Material.",
      textB1:
        "Augen wäschst du von außen nach innen — vom Ohr zur Nase. Grund: Bei einer Bindehaut-Entzündung sollen die Keime nicht in den Tränenkanal kommen. Pro Auge ein eigener Tupfer. Bei Entzündung: steril.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["RKI/KRINKO (2022): Krankenhaushygiene"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-augenpflege",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Augenpflege: Richtung und Material",
          body: "Die Augenpflege folgt einer anatomisch begründeten Richtung: **von außen (lateraler Lidwinkel, Richtung Ohr) nach innen (medialer Lidwinkel, Richtung Nase)**.\n\n**Warum diese Richtung?** Im **medialen Lidwinkel** (Nasenseite) liegt die Öffnung des **Tränenkanals** (Ductus nasolacrimalis), der zur Nasenhöhle führt. Wischt man von innen nach außen, schiebt man Sekret und Erreger (z.B. bei **Konjunktivitis**) in den Tränenkanal — aufsteigende Infektion möglich.\n\n**Material und Vorgehen:**\n1. Bei Routinepflege: **Wattepad oder Tupfer mit klarem Wasser** (kein Leitungswasser bei Entzündung — NaCl 0,9% oder sterile Lösung)\n2. **Pro Auge ein eigener Tupfer** — keine Keim-Verschleppung zwischen den Augen\n3. **Augenlider geschlossen halten** während des Wischens\n4. **Eine Wischbewegung pro Tupfer** — dann wegwerfen\n5. **Bei Verkrustungen** (z.B. morgens): Tupfer kurz auflegen, Krusten einweichen, dann abwischen\n\n**Bei Entzündung (Konjunktivitis):** Sterile Kompressen + physiologische Kochsalzlösung. Arzt informieren. Hygiene streng. (RKI/KRINKO 2022)",
          glossarBegriffe: ["Keimbesiedelung", "Aseptisch"],
        },
        contentB1: {
          title: "Augenpflege: Richtung und Material",
          body: "Augen wäschst du **von außen nach innen** — also **vom Ohr zur Nase**.\n\n**Warum diese Richtung?** An der Nasenseite liegt der **Tränenkanal**, der zur Nase führt. Wenn du von innen nach außen wischst, schiebst du Keime in den Tränenkanal. Dann kann die Infektion in die Nase kommen. Besonders schlimm bei einer **Bindehaut-Entzündung** (Konjunktivitis).\n\n**Material und Ablauf:**\n1. Bei normaler Pflege: **Wattepad mit klarem Wasser**. Bei Entzündung: **Kochsalzlösung** (steril).\n2. **Pro Auge ein eigener Tupfer** — keine Keime vom einen ins andere Auge.\n3. **Augenlider schließen lassen** beim Wischen.\n4. **Eine Bewegung pro Tupfer** — dann wegwerfen.\n5. **Verkrustungen** (morgens): Tupfer auflegen, einweichen, dann abwischen.\n\nBei **Entzündung**: steriles Material, Arzt informieren.",
          glossarBegriffe: ["Keimbesiedelung", "Aseptisch"],
        },
      },
    },
    glossarBegriffe: ["Keimbesiedelung", "Aseptisch"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: ohren-und-nasenpflege (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-ohren-nase",
    themaId: "ganzkörperpflege",
    titel: "Ohren- und Nasenpflege",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum solltest du bei der Ohrpflege niemals ein Wattestäbchen in den Gehörgang einführen? Was kann passieren?",
      antwort:
        "Trommelfell-Perforation, Cerumen-Pfropf tiefer schieben (Hörminderung), Infektionsrisiko (Otitis externa). Daher: nur Ohrmuschel (Auricula) reinigen, nichts in den Gehörgang einführen — auch kein Wattestäbchen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ohren: Nur die Ohrmuschel reinigen — nie etwas in den Gehörgang einführen. Gefahr: Trommelfell-Verletzung, Cerumen-Pfropf tiefer schieben. Nase: Verkrustungen vorsichtig lösen (feuchter Tupfer). Bei O2-Sonde oder Magensonde besonders beobachten.",
      textB1:
        "Ohren: Nur die Ohrmuschel (außen) waschen. Nie etwas in den Gehörgang stecken! Sonst kann das Trommelfell kaputt gehen. Nase: Krusten mit feuchtem Tupfer lösen. Besonders wichtig bei Sauerstoff-Brille oder Magensonde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-ohren-nase",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Ohren- und Nasenpflege",
          body: "**Ohrenpflege:**\nNur die sichtbare **Ohrmuschel (Auricula)** wird gereinigt — mit Waschlappen oder Tupfer. Hinter dem Ohr und in den Falten besonders gründlich (Schweiß, Hautschuppen). **Niemals Wattestäbchen oder andere Gegenstände in den Gehörgang**. Gründe:\n- **Trommelfell-Perforation** möglich\n- **Cerumen (Ohrenschmalz) wird tiefer geschoben**, Pfropf verursacht Hörminderung\n- **Infektionsrisiko** (Otitis externa)\n\nCerumen ist eine natürliche Reinigungsfunktion des Ohres. Es wird durch Kaubewegungen selbstständig nach außen transportiert. Bei Hörgeräte-Trägern: Gerät herausnehmen, reinigen, Ohrmuschel inspizieren.\n\n**Nasenpflege:**\nBei mobilen Patienten meist unproblematisch. Bei pflegebedürftigen, liegenden oder mit Sonden versorgten Patienten: **Verkrustungen** an den Nasenöffnungen bilden sich oft. Vorgehen:\n1. **Feuchter Tupfer** auflegen, einweichen\n2. Vorsichtig **nach außen abwischen**\n3. **Bei Nasensonden (Magensonde, O2-Sonde)**: Druckstellen prüfen (Dekubitus am Nasenflügel möglich!), Fixierung kontrollieren, Fixierpflaster ggf. erneuern. (Juchli ATLs, 1987)",
          glossarBegriffe: ["Cerumen"],
        },
        contentB1: {
          title: "Ohren- und Nasenpflege",
          body: "**Ohrenpflege:**\nNur die **Ohrmuschel** (außen) waschen — mit Waschlappen oder Tupfer. Hinter dem Ohr: oft schwitzig, gründlich waschen. **Nie Wattestäbchen in den Gehörgang!** Grund:\n- Das **Trommelfell** kann verletzt werden\n- **Ohrenschmalz** wird tiefer geschoben — Hörprobleme\n- **Infektion** im Ohr\n\nOhrenschmalz reinigt das Ohr von allein durch Kauen. Bei Hörgeräten: herausnehmen, reinigen.\n\n**Nasenpflege:**\nBei mobilen Patienten leicht. Bei Sonden-Trägern (Magensonde, Sauerstoff) bilden sich oft **Krusten**:\n1. **Feuchten Tupfer auflegen** — Kruste einweichen\n2. **Nach außen abwischen** (vorsichtig)\n3. **Bei Sonden**: Druckstellen am Nasenflügel prüfen (Dekubitus!), Pflaster kontrollieren.",
          glossarBegriffe: ["Cerumen"],
        },
      },
    },
    glossarBegriffe: ["Cerumen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: haarpflege-im-bett (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-haarpflege",
    themaId: "ganzkörperpflege",
    titel: "Haarpflege im Bett",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr S. (82, Zustand nach Halswirbel-Operation) soll im Bett die Haare gewaschen bekommen. Worauf musst du bei der Kopfhaltung besonders achten — und warum?",
      antwort:
        "HWS-Status klären: Nach HWS-OP ist Überstreckung meist kontraindiziert — Rücksprache mit dem Arzt. Alternative: Trockenshampoo oder Haarwaschhaube. Wenn Überstreckung möglich: Nackenrolle, warmes Wasser (37-40 °C), Augenschutz, mildes Shampoo.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Haarwäsche im Bett: Haarwaschschale oder -wanne nutzen. Kopf leicht überstrecken — aber HWS-Beschwerden ausschließen (Halswirbelsäule-OP, Rheuma, Arthrose!). Temperatur und Augen schützen (Handtuch über Augen). Warmes Wasser, mildes Shampoo.",
      textB1:
        "Haare waschen im Bett: Mit Haarwaschschale. Kopf leicht nach hinten. Vorsicht bei HWS-Problemen (Wirbel-OP, Rheuma)! Handtuch über die Augen (gegen Seife). Warmes Wasser, mildes Shampoo. Nach dem Waschen: gut abtrocknen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-haarpflege",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Haarpflege im Bett",
          body: "Haare waschen im Bett ist aufwendig, aber wichtig für Wohlbefinden und Hautgesundheit der Kopfhaut.\n\n**Vorbereitung:**\n1. **Haarwaschschale (Auffangwanne)** unter den Kopf — Wasser läuft in einen Eimer\n2. Wasserkanne mit warmem Wasser (37-40 °C)\n3. Handtuch rollen, in den Nacken legen (Polster)\n4. **Augenschutz**: zweites Handtuch oder Waschlappen über die Augen\n5. Mildes Shampoo, ggf. Spülung bei langen Haaren\n\n**Durchführung:**\n- Kopf **leicht überstrecken** — aber **KEINE Überstreckung bei HWS-Problemen** (Z.n. HWS-OP, Rheuma, schwere Arthrose, Bandscheibenvorfall HWS). Im Zweifel Arzt fragen oder Trockenshampoo verwenden.\n- Haare nass machen, Shampoo einmassieren, gründlich ausspülen\n- **Nach dem Waschen sofort Trockentuch um den Kopf**\n- **Föhnen** bei Temperatur-empfindlichen Patienten vorsichtig (Verbrennungsgefahr)\n\n**Alternativen bei Bett-Gebundenheit oder HWS-Risiko:**\n- **Trockenshampoo** (Spray oder Pulver)\n- **Haarwaschhauben** (fertig getränkt, erwärmbar) (Juchli ATLs, 1987)",
          glossarBegriffe: ["Sensibilitätsstörung"],
        },
        contentB1: {
          title: "Haarpflege im Bett",
          body: "Haare im Bett waschen ist eine größere Sache, aber wichtig für das Wohlgefühl.\n\n**Vorbereitung:**\n1. **Haarwaschschale** unter den Kopf — das Wasser läuft in einen Eimer\n2. Kanne mit warmem Wasser (37-40 °C)\n3. Ein zusammengerolltes Handtuch in den Nacken\n4. Ein Handtuch über die **Augen** (gegen Seife)\n5. Mildes Shampoo\n\n**Waschen:**\n- Kopf **leicht nach hinten** — aber **NICHT bei HWS-Problemen** (Wirbel-OP, Rheuma, Arthrose). Frag im Zweifel den Arzt oder nimm **Trockenshampoo**.\n- Haare nass machen, Shampoo einreiben, gut ausspülen\n- Sofort Handtuch um den Kopf\n- **Beim Föhnen vorsichtig** — nicht zu heiß (Verbrennung)\n\n**Wenn Wasser nicht geht:**\n- **Trockenshampoo** (Spray oder Pulver)\n- **Haarwasch-Hauben** (fertig, kann man warm machen)",
          glossarBegriffe: ["Sensibilitätsstörung"],
        },
      },
    },
    glossarBegriffe: ["Sensibilitätsstörung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: nagelpflege-fingernaegel-fussnaegel (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-nagelpflege",
    themaId: "ganzkörperpflege",
    titel: "Nagelpflege: Finger- und Fußnägel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Fingernägel rund, Fußnägel gerade — warum die unterschiedliche Schnittform? Welche Komplikation will man mit dem geraden Schnitt am Fußnagel verhindern?",
      antwort:
        "Fingernägel: rund oder oval, zwei Millimeter länger als die Fingerkuppe. Fußnägel: gerade — so wird der Unguis incarnatus (eingewachsener Nagel) vermieden. Feile bevorzugt, Schere nur in Ausnahmen. Nie in die Nagelecken schneiden.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Fingernägel: rund oder oval, zwei Millimeter länger als die Fingerkuppe. Fußnägel: gerade — so wird der Unguis incarnatus (eingewachsener Nagel) vermieden. Feile bevorzugt, Schere nur in Ausnahmen. Nie in die Nagelecken schneiden.",
      textB1:
        "Fingernägel rund schneiden. Fußnägel gerade schneiden. Bei Fußnägeln: gerade verhindert eingewachsene Nägel (sehr schmerzhaft). Lieber mit Feile arbeiten. Nicht in die Ecken schneiden. Vorher Nägel aufweichen (Wasserbad).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-11",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-nagelpflege",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Nagelpflege: Finger- und Fußnägel",
          body: "Die **Schnittform** unterscheidet sich aus anatomischen Gründen:\n\n**Fingernägel — rund oder oval:**\n- Folgt der natürlichen Fingerkuppe\n- Länge: ca. 2 mm über die Fingerkuppe hinaus\n- Zu kurz = Schmerz, weil das Nagelbett freiliegt\n- Zu lang = Keimfalle, Verletzungsgefahr beim Patientenkontakt\n\n**Fußnägel — gerade:**\n- Schnittform **senkrecht, nicht rund**\n- Grund: **Unguis incarnatus (eingewachsener Nagel)** verhindern\n- Beim runden Schneiden wachsen die Nagelecken in den seitlichen Nagelwall — Entzündung, Schmerz, im schlimmsten Fall Chirurgie\n- Nicht in die Nagelecken schneiden\n- Länge: bis zur Zehenkuppe, nicht kürzer\n\n**Werkzeug:**\n- **Feile (bevorzugt)**: Keine scharfe Kante, gleichmäßiges Formen\n- **Nagelknipser**: Für dicke Fußnägel, in kleinen Schritten\n- **Schere nur in Ausnahmen** (Verletzungsgefahr bei unruhigen Patienten)\n\n**Vorbereitung:** Nägel 5-10 Minuten in warmem Wasser aufweichen — leichter zu schneiden. Bei älteren, verhornten Nägeln (Onychogrypose) ggf. Podologie einschalten. (Juchli ATLs, 1987)",
          glossarBegriffe: ["Unguis incarnatus", "Diabetisches Fußsyndrom"],
        },
        contentB1: {
          title: "Nagelpflege: Finger- und Fußnägel",
          body: "Die **Schnittform** ist für Finger und Füße anders:\n\n**Fingernägel rund:**\n- Passt zur Fingerkuppe\n- Länge: etwa 2 mm länger als die Kuppe\n- Zu kurz = tut weh\n- Zu lang = Keime, Verletzungen\n\n**Fußnägel gerade:**\n- **Gerade, nicht rund**\n- Grund: **eingewachsene Nägel verhindern** (Unguis incarnatus)\n- Bei rundem Schnitt wachsen die Ecken in die Haut — Entzündung, Schmerz, manchmal Operation\n- **Nicht in die Ecken schneiden**\n- Länge: bis zur Zehenkuppe\n\n**Werkzeug:**\n- **Feile (am besten)**: keine scharfe Kante\n- **Nagelknipser**: für dicke Fußnägel, kleine Stücke\n- **Schere nur in Ausnahmen** (Unfall-Gefahr)\n\n**Vorher:** Nägel 5-10 Minuten in warmes Wasser — werden weicher. Bei alten, dicken Nägeln: **Podologie** holen.",
          glossarBegriffe: ["Unguis incarnatus", "Diabetisches Fußsyndrom"],
        },
      },
    },
    glossarBegriffe: ["Unguis incarnatus", "Diabetisches Fußsyndrom"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: diabetes-fusspflege-podologe (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-diabetes-fuss",
    themaId: "ganzkörperpflege",
    titel: "Diabetes-Fußpflege: Wann muss der Podologe ran?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau B. hat seit 20 Jahren Typ-2-Diabetes. Ihre Fußnägel sind lang. Darfst du sie schneiden? Begründe deine Entscheidung mit dem, was in einem Diabetes-Fuß besonders ist.",
      antwort:
        "Nein — Frau B. bekommt eine Podologie-Überweisung. Grund: Diabetes-Neuropathie (Füße spüren nichts) + Mikroangiopathie (Wunden heilen nicht). Kleinste Verletzung → diabetisches Fußsyndrom → häufigste Ursache nicht-unfallbedingter Amputationen. Du wäschst, cremst (nicht zwischen Zehen), inspizierst täglich.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei Diabetes mellitus: Fußnägel-Schnitt nur durch Podologe. Grund: Diabetes führt zu Neuropathie (Gefühllosigkeit) und Mikroangiopathie (schlechte Wundheilung). Kleinste Verletzung kann zum diabetischen Fußsyndrom (Ulkus, Amputation) führen.",
      textB1:
        "Bei Diabetes: Fußnägel schneidet nur der Podologe. Grund: Diabetes macht die Füße gefühllos (Neuropathie) und die Wundheilung schlecht. Kleine Wunden heilen nicht und werden zum diabetischen Fußsyndrom — Ulkus, Amputation.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF-S3-Leitlinie NVL Typ-2-Diabetes (2023): Fußsyndrom"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-diabetes-fuss",
        tag: "krankheitslehre",
        displayFormat: "news",
        contentC1: {
          title: "Diabetes-Fußpflege: Wann muss der Podologe ran?",
          body: "Der **diabetische Fuß** ist eine der gefährlichsten Spätfolgen des Diabetes mellitus. Zwei Mechanismen wirken zusammen:\n\n**1. Diabetische Neuropathie:**\nSchädigung der peripheren Nerven durch dauerhaft hohe Blutzucker-Werte. Folge: **Gefühllosigkeit** an Füßen und Zehen. Ein kleiner Schnitt wird nicht bemerkt. Druckstellen werden nicht wahrgenommen.\n\n**2. Diabetische Mikroangiopathie:**\nSchädigung der kleinen Blutgefäße. Folge: **Mangeldurchblutung** im Gewebe. Wunden bekommen zu wenig Sauerstoff und Nährstoffe — sie heilen kaum.\n\n**Konsequenz für die Pflege:**\nDas Schneiden von Fußnägeln, Entfernen von Hornhaut oder Hühneraugen ist bei Diabetes **Podologie-Tätigkeit**.\n\n**Pflegekraft darf:**\n- Füße waschen, abtrocknen (besonders Zehenzwischenräume!)\n- Haut eincremen (nicht zwischen die Zehen — Pilzrisiko)\n- Füße inspizieren — **tägliche Hautkontrolle!**\n\n**Pflegekraft darf NICHT bei Diabetes:**\n- Nägel schneiden\n- Hornhaut entfernen\n- Hühneraugen behandeln\n\nBei Auffälligkeiten (Rötung, Wunde, Druckstelle): sofort Arzt informieren. Diabetisches Fußsyndrom ist die häufigste Ursache nicht-unfallbedingter Amputationen in Deutschland. (AWMF-S3-NVL Typ-2-Diabetes, 2023)",
          glossarBegriffe: ["Diabetisches Fußsyndrom", "Sensibilitätsstörung"],
        },
        contentB1: {
          title: "Diabetes-Fußpflege: Wann muss der Podologe ran?",
          body: "Der **diabetische Fuß** ist eine gefährliche Folge von Diabetes. Zwei Gründe:\n\n**1. Die Nerven sind kaputt (Neuropathie):**\nZu hoher Blutzucker schädigt die Nerven in den Füßen. Folge: **Die Füße spüren nichts mehr**. Ein Schnitt wird nicht bemerkt.\n\n**2. Die Durchblutung ist schlecht (Mikroangiopathie):**\nDie kleinen Gefäße sind beschädigt. Folge: **Wunden heilen nicht**.\n\n**Was bedeutet das für die Pflege?**\nFußnägel schneiden = **nur Podologe**.\n\n**Pflegekraft darf:**\n- Füße waschen und abtrocknen (besonders **zwischen den Zehen**!)\n- Füße eincremen (nicht zwischen den Zehen — Pilz-Gefahr)\n- Füße **jeden Tag** anschauen\n\n**Pflegekraft darf NICHT:**\n- Nägel schneiden\n- Hornhaut entfernen\n- Hühneraugen behandeln\n\nBei **Rötung oder Wunde**: sofort Arzt. Der diabetische Fuß ist die häufigste Ursache für Amputationen in Deutschland.",
          glossarBegriffe: ["Diabetisches Fußsyndrom", "Sensibilitätsstörung"],
        },
      },
    },
    glossarBegriffe: ["Diabetisches Fußsyndrom", "Sensibilitätsstörung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: erysipel-erkennen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-erysipel",
    themaId: "ganzkörperpflege",
    titel: "Erysipel erkennen und handeln",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Beim Waschen fällt dir am rechten Unterschenkel eine scharf begrenzte Rötung auf. Die Stelle ist warm und schmerzhaft. Der Patient hat Fieber. Was könnte das sein — und wie dringend handelst du?",
      antwort:
        "Erysipel (Wundrose) — dringend: Arzt sofort informieren. Leitsymptome: scharf begrenzte feuerrote Schwellung, Überwärmung, Schmerz, Fieber. Therapie: Antibiotikum. Bis dahin Bein hochlagern, Temperatur messen, dokumentieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Erysipel (Wundrose) ist eine bakterielle Haut-Infektion (meist Streptokokken). Leitsymptome: scharf begrenzte, feuerrote Schwellung, Überwärmung, Schmerz, oft Fieber und Krankheitsgefühl. Häufig am Unterschenkel (Eintrittspforte: kleine Hautverletzung). Arzt sofort informieren.",
      textB1:
        "Erysipel (Wundrose) ist eine Infektion der Haut durch Bakterien (meist Streptokokken). Zeichen: rote, scharf begrenzte Stelle, warm, schmerzhaft, oft Fieber. Meistens am Unterschenkel. Eintritt: kleine Wunde. Arzt sofort rufen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Deutsche Dermatologische Gesellschaft (2020): S2k-Leitlinie Erysipel"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-erysipel",
        tag: "krankheitslehre",
        displayFormat: "scenario",
        contentC1: {
          title: "Erysipel erkennen und handeln",
          body: "**Erysipel** (Wundrose) ist eine akute bakterielle Infektion der oberen Dermis und der oberflächlichen Lymphgefäße. Erreger meist **β-hämolysierende Streptokokken der Gruppe A**, seltener Staphylokokken.\n\n**Klassische Leitsymptome (DDG 2020):**\n- **Rötung** — feuerrot, **scharf begrenzt** (oft zungenförmig)\n- **Schwellung** — überwärmt, druckempfindlich\n- **Schmerz** — oft stark\n- **Allgemeinsymptome** — Fieber (meist >38,5 °C), Schüttelfrost, Krankheitsgefühl\n\n**Häufige Lokalisation:** Unterschenkel (80%), Gesicht. Eintrittspforte: Interdigitalmykose (Fußpilz), kleine Verletzung, Ulcus cruris, Dekubitus.\n\n**Warum ist Erysipel ein Notfall?**\n- Unbehandelt: Ausbreitung, Sepsis möglich\n- Therapie: **Antibiotikum** (meist Penicillin) — je früher, desto besser\n- **Pflegekraft-Aufgabe:** Erkennen, **sofort Arzt informieren**, bis zur Diagnose **Hochlagerung**, Kühlung in Absprache\n\n**Abgrenzung:** Rötung bei Dekubitus I ist **diffus**, nicht scharf begrenzt, und ohne Fieber. Erysipel-Rötung lässt sich von gesunder Haut **klar abgrenzen**. (Deutsche Dermatologische Gesellschaft S2k-Leitlinie Erysipel, 2020)",
          glossarBegriffe: ["Erysipel", "Intertrigo"],
        },
        contentB1: {
          title: "Erysipel erkennen und handeln",
          body: "**Erysipel** (Wundrose) ist eine **bakterielle Haut-Infektion**. Meistens durch **Streptokokken**.\n\n**Die 4 Haupt-Zeichen:**\n- **Rötung** — feuerrot, **scharf begrenzt** (wie mit Stift gezogen)\n- **Schwellung** — dicke, warme Stelle\n- **Schmerz** — oft stark\n- **Fieber** — meist über 38,5 °C, Schüttelfrost, Patient fühlt sich krank\n\n**Wo?** Meistens am Unterschenkel (80%). Manchmal im Gesicht. **Eintritt:** Kleine Wunde, Fußpilz zwischen den Zehen.\n\n**Warum ist das dringend?**\n- Ohne Behandlung breitet es sich aus — bis zur **Blutvergiftung (Sepsis)**\n- Behandlung: **Antibiotikum** — je schneller, desto besser\n\n**Was tust du?**\n- **Arzt sofort rufen**\n- Bein **hochlegen**\n\n**Unterschied zu Dekubitus:** Dekubitus-Rötung ist **nicht scharf begrenzt**, kein Fieber.",
          glossarBegriffe: ["Erysipel", "Intertrigo"],
        },
      },
    },
    glossarBegriffe: ["Erysipel", "Intertrigo"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: hautbeobachtung-beim-waschen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-hautbeobachtung",
    themaId: "ganzkörperpflege",
    titel: "Hautbeobachtung beim Waschen als Assessment",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Pflege-Experten sagen: 'Die Ganzkörperwaschung ist das beste Assessment überhaupt.' Warum? Überlege, welche Informationen du gleichzeitig sammelst, wenn du jemanden wäschst.",
      antwort:
        "Beim Waschen siehst du den ganzen Körper — das gibt es sonst nie. Du beobachtest: Hautfarbe, Rötungen, Wunden, Druckstellen, Ödeme, Turgor, Ekchymosen (Blutergüsse), Narben, Exantheme. Kombiniert mit Gespräch (Schmerz? Juckreiz?) = lückenloses Assessment.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Beim Waschen siehst du den ganzen Körper — das gibt es sonst nie. Du beobachtest: Hautfarbe, Rötungen, Wunden, Druckstellen, Ödeme, Turgor, Ekchymosen (Blutergüsse), Narben, Exantheme. Kombiniert mit Gespräch (Schmerz? Juckreiz?) = lückenloses Assessment.",
      textB1:
        "Beim Waschen siehst du den ganzen Körper — sonst nie. Du siehst: Farbe der Haut, Rötungen, Wunden, Druckstellen, Schwellung (Ödem), trockene Haut, blaue Flecken, Narben, Ausschlag. Dazu: Gespräch (Schmerz? Juckt es?). Perfektes Assessment.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-14",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2017/2024): Expertenstandard Dekubitusprophylaxe"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-hautbeobachtung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Hautbeobachtung beim Waschen als Assessment",
          body: "Die Ganzkörperwaschung ist das **wertvollste Routine-Assessment** in der Pflege. In keiner anderen Situation siehst du den Patienten so komplett. Was du beobachtest:\n\n**Hautbeobachtung:**\n- **Farbe**: blass (Anämie?), zyanotisch (O2-Mangel?), gelblich (Ikterus?), gerötet (Entzündung? Dekubitus?)\n- **Trockenheit vs. Feuchtigkeit**: Dehydration? Schweißausbrüche?\n- **Turgor**: Elastizität testen (Falte am Handrücken) — bei schlecht = Exsikkose\n- **Wunden, Kratzer, Druckstellen**: Dekubitus? Erysipel? Ulcus cruris?\n- **Ekchymosen**: Neue Blutergüsse? Hinweis auf Sturz, Gerinnungsstörung, Medikamente\n- **Ödeme**: Beine geschwollen? Herzinsuffizienz?\n- **Exantheme**: Ausschlag — Medikamentenreaktion? Infektion?\n\n**Körperliche Beobachtung:**\n- Mimik und Kommunikation (Schmerz, Orientierung)\n- Kraft und Beweglichkeit (aktivierende Pflege)\n- Atmung (Frequenz, Tiefe, Schmerz beim Einatmen)\n\n**Dokumentation:** Jede Auffälligkeit **schriftlich**, ggf. mit Foto (bei Einverständnis). Den Pflegebericht nutzen — 'Beim Waschen auffällig: ...' (DNQP Dekubitusprophylaxe 2017/2024)",
          glossarBegriffe: ["Turgor", "Intertrigo", "Erysipel"],
        },
        contentB1: {
          title: "Hautbeobachtung beim Waschen als Assessment",
          body: "Die **Ganzkörperwaschung** ist das **beste Routine-Assessment** in der Pflege. Du siehst den Patienten komplett. Das gibt es sonst nicht.\n\n**Was du an der Haut beobachtest:**\n- **Farbe**: blass (wenig Blut?), blau (wenig Sauerstoff?), gelb (Leber-Problem?), rot (Entzündung?)\n- **Trocken oder nass**: wenig getrunken? viel geschwitzt?\n- **Spannung** (Turgor): Falte am Handrücken — bleibt sie stehen = zu wenig Flüssigkeit\n- **Wunden, Kratzer, Druckstellen**: Dekubitus? Infektion?\n- **Blaue Flecken**: neu? Sturz? Medikament?\n- **Geschwollene Beine** (Ödem): Herz-Problem?\n- **Hautausschlag**: Medikament? Infektion?\n\n**Was du am Menschen siehst:**\n- **Gesicht**: Schmerz? Orientierung?\n- **Kraft und Beweglichkeit**: Was kann er noch selbst?\n- **Atmung**: schnell? flach? schmerzhaft?\n\n**Dokumentieren:** Alles, was auffällt. 'Beim Waschen aufgefallen: ...' Pflegekräfte sehen Veränderungen oft als Erste — vor dem Arzt.",
          glossarBegriffe: ["Turgor", "Intertrigo", "Erysipel"],
        },
      },
    },
    glossarBegriffe: ["Turgor", "Intertrigo", "Erysipel"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: beruhigende-vs-belebende-waschung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-waschformen",
    themaId: "ganzkörperpflege",
    titel: "Beruhigende vs. belebende Waschung (Basale Stimulation)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr F. ist unruhig, greift ständig in die Luft, schläft seit 2 Nächten kaum. Frau G. wirkt müde, reagiert kaum, liegt apathisch im Bett. Welche Waschform würdest du bei wem wählen — und warum wirkt sie anders?",
      antwort:
        "Herr F. (unruhig) → beruhigende Waschung (mit Haarwuchsrichtung, warm 37-38 °C, langsam) — aktiviert Parasympathikus, senkt Puls und Muskeltonus, fördert Schlaf. Frau G. (apathisch) → belebende Waschung (gegen Haarwuchsrichtung, kühler 22-25 °C, zügiger) — aktiviert Sympathikus, fördert Wachheit.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Basale Stimulation nach Fröhlich/Bienstein kennt zwei Waschformen: Beruhigende Waschung = MIT der Haarwuchsrichtung (aktiviert Parasympathikus, senkt Erregung). Belebende Waschung = GEGEN die Haarwuchsrichtung (aktiviert Sympathikus, steigert Wachheit).",
      textB1:
        "Basale Stimulation (nach Fröhlich) hat zwei Waschformen: Beruhigend = mit der Haarrichtung waschen (macht ruhig). Belebend = gegen die Haarrichtung waschen (macht wach). Sehr unterschiedliche Wirkung, gleiche Reihenfolge.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-15",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Fröhlich A. (1998): Basale Stimulation — das Konzept"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-waschformen",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Beruhigende vs. belebende Waschung (Basale Stimulation)",
          body: "Die **Basale Stimulation** (Konzept nach Fröhlich/Bienstein) nutzt bewusste Reize bei der Ganzkörperpflege. Zwei gegensätzliche Waschformen sind besonders bekannt:\n\n**Beruhigende Ganzkörperwaschung:**\n- **Richtung: MIT der Haarwuchsrichtung** (d.h. vom Körperzentrum weg, z.B. an den Armen von der Schulter zur Hand)\n- **Temperatur: körperwarm** (37-38 °C)\n- **Tempo: langsam, gleichmäßig**\n- **Druck: mittelschwer, großflächig**\n- **Wirkung:** Aktivierung des **Parasympathikus** — Puls senkt sich, Atmung wird ruhiger, Muskeltonus sinkt, Schlaf wird gefördert\n- **Indikation:** Unruhe, Schlafprobleme, Angst, nach Aufregung, bei Sterbenden\n\n**Belebende Ganzkörperwaschung:**\n- **Richtung: GEGEN die Haarwuchsrichtung** (zum Körperzentrum hin, z.B. an den Armen von der Hand zur Schulter)\n- **Temperatur: kühler (22-25 °C)**\n- **Tempo: zügiger, akzentuierter**\n- **Wirkung:** Aktivierung des **Sympathikus** — Wachheit, Muskeltonus steigt, Kreislauf aktiviert\n- **Indikation:** Apathie, müde Patienten, Antriebsarmut, nach längerer Ruhephase\n\n**Wichtig:** Die Wirkung ist **spürbar**, aber **nicht medikamentös**. (Fröhlich Basale Stimulation, 1998)",
          glossarBegriffe: ["Basale Stimulation"],
        },
        contentB1: {
          title: "Beruhigende vs. belebende Waschung (Basale Stimulation)",
          body: "**Basale Stimulation** (nach Fröhlich) arbeitet mit Reizen beim Waschen. Es gibt zwei Formen:\n\n**Beruhigende Waschung:**\n- **Richtung: mit der Haarwuchsrichtung** (vom Körper weg, z.B. Schulter zur Hand)\n- **Wasser: warm** (37-38 °C)\n- **Tempo: langsam**\n- **Wirkung:** Puls ruhig, Atmung ruhig, Muskeln entspannen, besserer Schlaf\n- **Für wen?** Unruhige Patienten, Schlafprobleme, Angst, Sterbende\n\n**Belebende Waschung:**\n- **Richtung: gegen die Haarwuchsrichtung** (zum Körper hin, z.B. Hand zur Schulter)\n- **Wasser: kühler** (22-25 °C)\n- **Tempo: schneller**\n- **Wirkung:** wacher, Muskeln stärker, Kreislauf kommt in Schwung\n- **Für wen?** Müde, apathische Patienten, nach langer Ruhe\n\n**Wichtig:** Die Wirkung ist spürbar, aber kein Medikament.",
          glossarBegriffe: ["Basale Stimulation"],
        },
      },
    },
    glossarBegriffe: ["Basale Stimulation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: dokumentation-ganzkoerperpflege (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-dokumentation",
    themaId: "ganzkörperpflege",
    titel: "Dokumentation der Ganzkörperpflege",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was genau musst du nach der Ganzkörperpflege schriftlich festhalten? Denke nicht nur an 'was gemacht wurde', sondern auch an 'was aufgefallen ist'.",
      antwort:
        "Dokumentation hat drei Teile: 1) Durchgeführtes (Wer, was, wann — aktivierend oder übernehmend?). 2) Ressourcen des Patienten (was konnte er selbst?). 3) Auffälligkeiten (Haut, Schmerz, Befinden, Veränderung seit gestern). Regel: 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.'",
    },
    stufe2: {
      typ: "hinweis",
      text: "Dokumentation hat drei Teile: 1) Durchgeführtes (Wer, was, wann — aktivierend oder übernehmend?). 2) Ressourcen des Patienten (was konnte er selbst?). 3) Auffälligkeiten (Haut, Schmerz, Befinden, Veränderung seit gestern). Regel: 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.'",
      textB1:
        "Du dokumentierst drei Dinge: 1) Was gemacht wurde (Wer, was, wann — hat der Patient mitgemacht?). 2) Ressourcen (was konnte er selbst?). 3) Auffälligkeiten (Haut, Schmerz, Veränderung). Regel: Nicht dokumentiert = nicht gemacht.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-16",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Expertenstandards"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-dokumentation",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Dokumentation der Ganzkörperpflege",
          body: "Die Dokumentation nach der Ganzkörperpflege ist nicht Formalität, sondern **Teil der Pflegeleistung**. Grundprinzip: **'Was nicht dokumentiert ist, gilt als nicht durchgeführt.'** (Rechtsprechung BGH — Beweislast)\n\n**Drei Ebenen der Dokumentation:**\n\n**1. Durchgeführte Maßnahme**\n- Art (Bettwaschung, Teilwaschung, Dusche, basale Stimulation beruhigend/belebend)\n- Datum, Uhrzeit, Handzeichen\n- Aktivierungsgrad (vollständig selbstständig / teilselbstständig / übernahme)\n\n**2. Ressourcen und Einschränkungen**\n- Was konnte der Patient selbst (z.B. 'Gesicht und Zähne selbstständig mit linker Hand')?\n- Was brauchte Unterstützung?\n\n**3. Auffälligkeiten (Assessment-Ergebnisse)**\n- Hautveränderungen (Rötung, Druckstelle, Wunde, blauer Fleck) mit Lokalisation und Beschreibung\n- Schmerzäußerung (NRS-Wert, Lokalisation, Auslöser)\n- Allgemeinbefinden (orientiert, unruhig, apathisch, Atem auffällig)\n\n**Sprache:** Sachlich, wertfrei, beobachtungsbezogen. Nicht: 'Patient wie immer mürrisch.' Besser: 'Patient spricht heute leiser, reagiert verzögert.'",
          glossarBegriffe: ["Aktivierende Pflege", "Ressourcenorientierung"],
        },
        contentB1: {
          title: "Dokumentation der Ganzkörperpflege",
          body: "Die Dokumentation nach dem Waschen ist nicht nur 'Formular ausfüllen' — es ist **Teil der Pflege**. Regel: **Nicht dokumentiert = nicht gemacht.** (Gericht hat das entschieden)\n\n**Du dokumentierst drei Sachen:**\n\n**1. Was wurde gemacht?**\n- Art (Bettwaschung, Dusche, basale Stimulation beruhigend oder belebend)\n- Datum, Uhrzeit, deine Unterschrift (Handzeichen)\n- Hat der Patient mitgemacht oder übernimmst du alles?\n\n**2. Was konnte der Patient selbst?**\n- Zum Beispiel: 'Gesicht und Zähne selbst mit links'\n- Wie war die Tagesform?\n\n**3. Was ist dir aufgefallen?**\n- Veränderungen an der Haut (Rötung, Druckstelle, Wunde, blauer Fleck) — wo genau?\n- Schmerz (Skala 0-10, wo, wann?)\n- Allgemein: wach, unruhig, müde, Atmung?\n\n**Sprache:** Sachlich, kein Urteil. Nicht: 'Patient wie immer schlecht gelaunt.' Besser: 'Patient spricht leiser, reagiert später.'",
          glossarBegriffe: ["Aktivierende Pflege", "Ressourcenorientierung"],
        },
      },
    },
    glossarBegriffe: ["Aktivierende Pflege", "Ressourcenorientierung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 17: teilkoerperwaesche-indikation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-teilwaesche",
    themaId: "ganzkörperpflege",
    titel: "Teilkörperwäsche: Indikation und Priorisierung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr T. (84) ist sehr schwach und klagt über Kreislaufprobleme. Trotzdem müsste er gewaschen werden. Was ist dein Vorgehen — und wie weit musst du waschen?",
      antwort:
        "Bei Herrn T. Teilkörperwäsche: Gesicht, Mund, Achseln, Intim, Hände — das Wichtigste für Hygiene und Wohlbefinden. Arme, Beine, Rücken verteilen oder verschieben. Kreislauf beobachten, Pausen, ggf. abbrechen. Dokumentieren: Warum, welche Bereiche, Plan für Rest.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei Kreislauf-Schwäche, starkem Schmerz, akuter Verschlechterung: Teilkörperwäsche statt Ganzkörperwäsche. Priorität: Gesicht, Intim, Hände, Achseln — die Stellen mit stärkster Geruchsbildung und Schleimhäuten. Rest verschieben oder nur abschnittsweise.",
      textB1:
        "Bei Kreislauf-Problem, Schmerz oder wenn es dem Patienten schlecht geht: Nicht alles waschen. Nur Gesicht, Intim, Hände, Achseln — das ist wichtig für Hygiene und Geruch. Den Rest später machen oder stückweise.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-17",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-teilwaesche",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Teilkörperwäsche: Indikation und Priorisierung",
          body: "Die **Teilkörperwäsche** ist keine 'halbe Arbeit', sondern eine **bewusste Anpassung** an den Zustand des Patienten. Prinzip: **So viel wie nötig, so wenig wie möglich belastend.**\n\n**Indikationen für Teilkörperwäsche:**\n- **Kreislauf-Instabilität** (Hypotonie, Orthostase)\n- **Starke Schmerzen** (jede Bewegung schmerzt)\n- **Schwere Erschöpfung** (postoperativ, schwere Infektion)\n- **Palliativsituation** (Ruhe wichtiger als Routine)\n- **Fieber, reduzierter AZ**\n- **Demenz mit hoher Abwehr** (Gewalt vermeiden)\n\n**Priorität bei Teilkörperwäsche:**\n1. **Gesicht, Augen, Mund** — Hygiene, Wohlgefühl\n2. **Achselhöhlen** — Geruchsbildung (Apokrine Drüsen)\n3. **Intimbereich** — Infektionsprophylaxe, besonders bei Inkontinenz\n4. **Hände** — Kontaktkeime, Essbereitschaft\n5. **Hautfalten** (Leiste, Bauchfalten, unter der Brust) — Intertrigo-Prophylaxe\n\n**Später oder abschnittsweise:**\n- Arme, Beine, Rücken — verteilen auf mehrere Tage wenn nötig\n\n**Dokumentieren:** Begründung warum Teilwäsche, welche Bereiche, wann vollständig geplant. (Juchli ATLs 1987)",
          glossarBegriffe: ["Intertrigo", "Aktivierende Pflege"],
        },
        contentB1: {
          title: "Teilkörperwäsche: Indikation und Priorisierung",
          body: "Die **Teilkörperwäsche** ist keine 'halbe Pflege'. Sie ist **Anpassung an den Zustand**. Regel: **So viel wie nötig, so wenig wie belastet.**\n\n**Wann Teilwäsche?**\n- **Kreislauf-Problem** (Schwindel, niedriger Blutdruck)\n- **Starke Schmerzen** (jede Bewegung tut weh)\n- **Sehr müde oder schwach** (nach OP, schwer krank)\n- **Palliativ** (Ruhe wichtiger als Routine)\n- **Fieber, schlechter Zustand**\n- **Demenz mit Abwehr** (nicht zwingen)\n\n**Was waschen (in dieser Reihenfolge)?**\n1. **Gesicht, Augen, Mund** — Wohlgefühl\n2. **Achselhöhlen** — Geruch\n3. **Intim** — Infektion vorbeugen, besonders bei Inkontinenz\n4. **Hände** — Keime, Essen\n5. **Hautfalten** (Leiste, Bauch, unter der Brust) — gegen Pilze\n\n**Später oder stückweise:**\n- Arme, Beine, Rücken — über mehrere Tage verteilen\n\n**Dokumentieren:** Warum nur Teilwäsche? Welche Stellen? Wann vollständig geplant?",
          glossarBegriffe: ["Intertrigo", "Aktivierende Pflege"],
        },
      },
    },
    glossarBegriffe: ["Intertrigo", "Aktivierende Pflege"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 18: duschen-baden-kontraindikationen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-duschen-baden",
    themaId: "ganzkörperpflege",
    titel: "Duschen und Baden: Kontraindikationen und Unterschiede",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau L. hat eine frische Operationswunde am Bauch. Sie möchte heute duschen. Was antwortest du — und was sind Kontraindikationen für Duschen oder Baden in der Pflege?",
      antwort:
        "Frau L. darf nicht duschen, solange die OP-Wunde frisch ist (< 48 h, bis Epithelisierung). Grund: Infektionsgefahr, Wunddehiszenz. Alternative: Waschen im Bett oder Stehen, Bauch aussparen oder mit wasserdichter Folie schützen. Nach 48 h + Arzt-Ok: Duschen mit Wundschutz.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Duschen/Baden nur wenn: Kreislauf stabil, keine frischen Wunden (< 48 h, solange nicht epithelisiert), kein Fieber >38,5 °C. Nicht bei: akuter Thrombose, frischer Wunde ohne Schutz, dekompensierter Herzinsuffizienz, schweren Infektionen. Duschen schonender als Baden.",
      textB1:
        "Duschen oder Baden geht nur wenn: Kreislauf stabil, keine frischen Wunden (weniger als 48 Stunden alt), kein Fieber über 38,5 °C. Nicht bei: akuter Thrombose, offener Wunde, schwacher Herz, schwerer Infektion. Duschen ist schonender als Baden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-18",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-duschen-baden",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Duschen und Baden: Kontraindikationen und Unterschiede",
          body: "**Duschen** und **Baden** sind angenehme Pflege-Formen — aber **nicht für jeden Patienten zu jeder Zeit** geeignet.\n\n**Kontraindikationen (nicht erlaubt):**\n- **Frische Operationswunden** oder **nicht-verschlossene Wunden** (< 48 h, bis Epithelisierung). Ohne wasserdichte Folie Infektionsgefahr.\n- **Akute Thrombose** — warmes Wasser weitet Gefäße, Embolie-Gefahr steigt\n- **Dekompensierte Herzinsuffizienz** — Wasser-Druck auf Thorax zusätzliche Kreislauf-Belastung\n- **Fieber >38,5 °C** — Kreislauf unter Stress, zusätzliche Belastung vermeiden\n- **Starke Kreislauf-Instabilität** (z.B. Hypotonie bei Sepsis)\n- **Schwere Hauterkrankungen** (ausgedehntes Erysipel, Pemphigus)\n\n**Duschen vs. Baden:**\n- **Duschen (bevorzugt):** kürzere Belastung, weniger Wärmebelastung, leichter zu unterstützen\n- **Baden:** mehr Entspannung, aber höherer Kreislauf-Stress (Temperatur, Wasser-Druck), Ein- und Aussteigen riskant\n\n**Praktische Regeln:**\n- Temperatur 35-38 °C (nicht heißer!)\n- Dauer max 15-20 Min\n- Rutschmatte, Haltegriffe\n- Pflegekraft in Rufnähe\n- Kreislauf vorher und nachher messen\n- Bei OP-Wunde: wasserdichte Folie, nach Absprache mit Arzt (Juchli ATLs 1987)",
          glossarBegriffe: ["Erysipel", "Sensibilitätsstörung"],
        },
        contentB1: {
          title: "Duschen und Baden: Kontraindikationen und Unterschiede",
          body: "**Duschen** und **Baden** sind angenehm — aber **nicht für jeden Patienten**.\n\n**Nicht erlaubt bei:**\n- **Frische Operations-Wunden** (weniger als 48 h alt, bis Wunde zu) — ohne Schutz Infektion\n- **Akute Thrombose** — warmes Wasser = Gefäße weit = Embolie-Gefahr\n- **Schwaches Herz** (dekompensierte Herzschwäche) — Wasser drückt auf Brust\n- **Fieber über 38,5 °C** — zusätzliche Belastung\n- **Starke Kreislauf-Probleme**\n- **Schwere Haut-Erkrankungen**\n\n**Duschen vs. Baden:**\n- **Duschen (besser):** kürzer, weniger Stress, leichter\n- **Baden:** entspannend, aber mehr Stress fürs Herz, Ein- und Aussteigen gefährlich\n\n**Regeln:**\n- Wasser 35-38 °C (nicht heiß!)\n- Max 15-20 Minuten\n- Rutsch-Matte, Griffe\n- Pflegekraft in der Nähe\n- Blutdruck vorher und nachher\n- Bei Wunde: wasserdichte Folie, **Arzt fragen**",
          glossarBegriffe: ["Erysipel", "Sensibilitätsstörung"],
        },
      },
    },
    glossarBegriffe: ["Erysipel", "Sensibilitätsstörung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 19: hautpflege-nach-waschen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ganzkoerperpflege-hautpflege-nach",
    themaId: "ganzkörperpflege",
    titel: "Hautpflege nach dem Waschen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum solltest du nach der Ganzkörperpflege sorgfältig abtrocknen — besonders Hautfalten? Welche Komplikation will man damit verhindern?",
      antwort:
        "Feuchte Hautfalten = Intertrigo und Candida-Befall (Pilzinfektion). Technik: Tupfen, nicht Reiben. Hautfalten einzeln anheben und trocknen: unter der Brust (submammär), Leisten (inguinal), Bauchfalten, zwischen den Zehen (interdigital).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Nach dem Waschen: Hautfalten sorgfältig abtrocknen (nicht reiben — tupfen). Feuchtigkeit in Falten = Intertrigo (Wundsein, Pilzbefall). Gefährdete Stellen: unter der Brust, Leisten, Bauchfalten, zwischen Zehen. Hautpflege individuell (trocken = Fettcreme, fettig = leichte Lotion).",
      textB1:
        "Nach dem Waschen: Hautfalten gut abtrocknen (tupfen, nicht reiben). Feuchte Haut = Intertrigo (wund, Pilz). Wichtig: unter der Brust, in den Leisten, am Bauch, zwischen den Zehen. Hautpflege nach Bedarf: trockene Haut = Fettcreme.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-gkp-wb-19",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Juchli L. (1987): Grundlagen der Pflege (ATLs)", "Deutsche Dermatologische Gesellschaft (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-gkp-hautpflege-nach",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Hautpflege nach dem Waschen",
          body: "Nach dem Waschen ist **Abtrocknen** mindestens so wichtig wie das Waschen selbst. Zwei Ziele: Haut-Integrität sichern und Komplikationen vermeiden.\n\n**Abtrocknen-Technik:**\n- **Tupfen, nicht reiben** — besonders bei empfindlicher (alter, Kortison-belasteter) Haut\n- **Hautfalten einzeln** anheben und trocknen\n- **Zwischen den Zehen** extra prüfen (Pilzprävention)\n- **Frisches, weiches Handtuch** — keine rauen, alten Tücher\n\n**Typische Intertrigo-Stellen:**\n- **Submammär** (unter der Brust) — besonders bei adipösen Frauen\n- **Inguinal** (Leisten)\n- **Axillär** (Achselhöhlen)\n- **Abdominell** (Bauchfalten bei Adipositas)\n- **Interdigital** (zwischen den Zehen)\n\nIntertrigo entsteht durch Feuchtigkeit + Reibung + Wärme = idealer Pilz-Nährboden (Candida albicans). Frühzeichen: Rötung, Juckreiz, weißlicher Belag.\n\n**Hautpflege nach dem Abtrocknen:**\n- **Trockene Haut**: Fettige Creme oder Öl (z.B. Linola fett, Bepanthen)\n- **Normale Haut**: Leichte Lotion bei Bedarf\n- **Fettige/feuchte Haut**: Keine Creme auf feuchte Stellen\n- **Intertrigo-Risiko**: Leinen-Kompressen in die Falte einlegen (saugen Feuchtigkeit)\n- **Diabetes-Fuß**: Nicht zwischen die Zehen cremen (Pilz) (Juchli ATLs 1987)",
          glossarBegriffe: ["Intertrigo", "Diabetisches Fußsyndrom"],
        },
        contentB1: {
          title: "Hautpflege nach dem Waschen",
          body: "Nach dem Waschen ist **Abtrocknen genauso wichtig** wie das Waschen. Ziel: **gesunde Haut erhalten**.\n\n**Wie abtrocknen?**\n- **Tupfen, nicht reiben** — besonders bei dünner, alter Haut\n- **Hautfalten einzeln** anheben und trocknen\n- **Zwischen den Zehen** nicht vergessen (Pilz-Gefahr)\n- **Frisches, weiches Handtuch**\n\n**Wo ist Intertrigo (Wundsein) häufig?**\n- **Unter der Brust** (besonders bei dicken Frauen)\n- **In den Leisten**\n- **In den Achseln**\n- **Am Bauch** (Falten bei Übergewicht)\n- **Zwischen den Zehen**\n\nIntertrigo entsteht, wenn die Falte **feucht + warm + gerieben** wird = **Pilz** wächst (Candida). Zeichen: Rötung, Jucken, weißer Belag.\n\n**Hautpflege danach:**\n- **Trockene Haut**: fettige Creme (z.B. Linola fett)\n- **Normale Haut**: leichte Lotion bei Bedarf\n- **Fettige Haut**: keine Creme auf nasse Stellen\n- **Falten mit Intertrigo-Risiko**: Leinen-Kompressen einlegen\n- **Diabetes-Füße**: **nicht zwischen die Zehen** cremen\n\n**Immer fragen:** Was hat der Patient bisher benutzt? Gibt es Allergien?",
          glossarBegriffe: ["Intertrigo", "Diabetisches Fußsyndrom"],
        },
      },
    },
    glossarBegriffe: ["Intertrigo", "Diabetisches Fußsyndrom"],
    karteikarten: [],
  },
];

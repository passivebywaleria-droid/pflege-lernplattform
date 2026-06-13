// CE-04 Thema Konflikt & Deeskalation — Wissensbausteine (4 Bausteine, 3 Stufen)
// Lernergebnis-First (specs/ce-04/kommunikation-build-plan.md)
// Deckt: LE1-W4 (Konfliktgespräche+Regeln herausstellen), LE1-K3 (Konflikte analysieren+Deeskalation), LE1-K4 (asymmetrische Kommunikation)
// Quelle: Kommunikation im Gesundheitswesen Kap. 1/2/4 (verbatim belegt)

import type { Wissensbaustein } from "../../../_types";

export const CE04_THEMA_KONFLIKT_DEESKALATION_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: konfliktgespraech-fuehren (Bloom 4) — LE1-W4
  // ═══════════════════════════════════════════
  {
    bausteinId: "konflikt-deeskalation-konfliktgespraech",
    themaId: "konflikt-deeskalation",
    titel: "Konfliktgespräche führen: Regeln und vier Phasen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Im Team gibt es Streit um den Dienstplan — zwei Kolleginnen reden nicht mehr miteinander. Du sollst ein klärendes Gespräch moderieren. Womit fängst du an: mit deiner Lösung, oder mit etwas anderem?",
      antwort:
        "Nicht mit deiner Lösung. Ein konstruktives Konfliktgespräch folgt vier Phasen: 1) Klärung der Thematik, 2) Beschreibung des Problems und Formulierung eines Ziels, 3) gemeinsam eine Lösung finden, 4) Reflexion der Möglichkeiten. Klärende Fragen ('Was genau möchten Sie erreichen?') und Ich-Botschaften statt Vorwürfen halten das Gespräch sachlich. (Kommunikation im Gesundheitswesen, Kap. 2/4)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein konstruktives Konflikt-/Klärungsgespräch läuft in vier Phasen (Büttner & Quindel): 1) Klärung der Thematik, 2) Problembeschreibung + Zielformulierung, 3) Lösung finden, 4) Reflexion der gefundenen Möglichkeiten. Prinzipien: zuerst klären statt lösen, klärende Fragen zur Zieldefinition stellen, Ich-Botschaften statt Du-Vorwürfen nutzen, sachlich bleiben, eine gute Feedback-Kultur pflegen, Rollen klären. (Kommunikation im Gesundheitswesen, Kap. 2/4)",
      textB1:
        "Ein gutes Konfliktgespräch hat vier Phasen: 1) Worum geht es? 2) Problem beschreiben und ein Ziel festlegen. 3) Zusammen eine Lösung finden. 4) Überlegen, ob die Lösung passt. Wichtig: erst klären, dann lösen. Stell klärende Fragen ('Was möchten Sie erreichen?'). Nutze Ich-Botschaften statt Vorwürfe. Bleib sachlich.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-konflikt-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (Beratungs-/Klärungsgespräch, vier Phasen nach Büttner & Quindel)", "Kommunikation im Gesundheitswesen, Kap. 4 (Konflikte im Team konstruktiv lösen)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-konflikt-konfliktgespraech",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Konfliktgespräche führen",
          body: "Konflikte gehören zum Team- und Pflegealltag — entscheidend ist, sie **konstruktiv** zu lösen statt zu vermeiden oder eskalieren zu lassen (Kommunikation im Gesundheitswesen, Kap. 4).\n\n**Die vier Phasen eines Klärungsgesprächs** (nach Büttner & Quindel):\n1. **Klärung der Thematik** — worum geht es überhaupt?\n2. **Beschreibung des Problems** und **Formulierung eines Ziels** — was soll erreicht werden?\n3. **Lösung finden** — gemeinsam, nicht vorgegeben\n4. **Reflexion** der gefundenen Möglichkeiten\n\n**Klärende Fragen zur Zieldefinition** helfen, den eigentlichen Konflikt herauszuarbeiten:\n- *'Was ist es genau, was Sie möchten?'*\n- *'Was zeichnet das Problem aus? Können Sie ihm einen Namen geben?'*\n- *'Wie soll es sein, wenn das Problem gelöst ist?'*\n\n**Prinzipien und Regeln:**\n- **Erst klären, dann lösen** — nicht mit der eigenen Lösung starten.\n- **Ich-Botschaften statt Du-Vorwürfe** — sie reduzieren Konfliktpotenzial.\n- **Sachlich bleiben**, bezugnehmende Gesprächstechniken (Paraphrase, Verbalisieren) einsetzen.\n- **Feedback-Kultur** und **Rollenklärung** im Team pflegen — viele Konflikte entstehen aus unklaren Rollen.\n- **Wertschätzung** auch im Konflikt: den Menschen achten, das Problem benennen. (Kommunikation im Gesundheitswesen, Kap. 2/4)",
          glossarBegriffe: ["Konfliktgespräch", "Feedback-Kultur", "Ich-Botschaft"],
        },
        contentB1: {
          title: "Konfliktgespräche führen",
          body: "Konflikte gibt es immer — wichtig ist, sie **gut zu lösen** statt sie zu vermeiden oder eskalieren zu lassen (Kommunikation im Gesundheitswesen, Kap. 4).\n\n**Die vier Phasen eines Klärungsgesprächs:**\n1. **Worum geht es?** (Thema klären)\n2. **Problem beschreiben** und ein **Ziel** festlegen\n3. **Lösung finden** — gemeinsam\n4. **Überlegen**, ob die Lösung passt\n\n**Klärende Fragen** helfen:\n- *'Was möchten Sie genau erreichen?'*\n- *'Wie soll es sein, wenn das Problem gelöst ist?'*\n\n**Regeln:**\n- **Erst klären, dann lösen.**\n- **Ich-Botschaften statt Vorwürfe.**\n- **Sachlich bleiben**, wiederholen und Gefühle ansprechen.\n- **Rollen klären** im Team — viele Konflikte kommen von unklaren Rollen.\n- **Wertschätzung** auch im Streit: den Menschen achten, das Problem benennen.",
          glossarBegriffe: ["Konfliktgespräch", "Feedback-Kultur", "Ich-Botschaft"],
        },
      },
    },
    glossarBegriffe: ["Konfliktgespräch", "Feedback-Kultur", "Ich-Botschaft"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: deeskalation-strategien (Bloom 4) — LE1-K3
  // ═══════════════════════════════════════════
  {
    bausteinId: "konflikt-deeskalation-strategien",
    themaId: "konflikt-deeskalation",
    titel: "Deeskalation: Wenn Emotionen hochkochen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Angehöriger schreit dich im Flur an: 'Hier kümmert sich ja keiner!' Dein erster Impuls ist, dich zu rechtfertigen oder zurückzuschnauzen. Warum ist beides falsch — und was hilft wirklich?",
      antwort:
        "Beides eskaliert. Bei starken Emotionen gilt: erst durchatmen (eine sofortige Reaktion erwartet niemand), nicht lachen, nicht aggressiv kontern, nicht wortlos fliehen. Starke Emotionen müssen zuerst verbal Raum bekommen — erst wenn der Mensch sich verstanden fühlt, kann er wieder Informationen aufnehmen. Dann kannst du deine Sicht darlegen. Bei körperlicher Aggression: Selbstschutz und sofortige Unterstützung. (Kommunikation im Gesundheitswesen, Kap. 2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Deeskalation bei starken Emotionen: 1) Durchatmen — keine sofortige Reaktion ist nötig; Lachen, aggressive Antworten oder wortlose Flucht untergraben die eigene Kompetenz. 2) Der Emotion verbal Raum geben — erst wenn der Mensch sich verstanden fühlt, ist er wieder aufnahmefähig. 3) Dann die eigene Sichtweise/Bedingungen darlegen. 4) Persönliche Abgrenzung angemessen kommunizieren. 5) Bei körperlicher Aggression: präventiver und sofortiger Selbstschutz, festgelegte Abläufe, Mitarbeiterschulung. (Kommunikation im Gesundheitswesen, Kap. 2)",
      textB1:
        "Wenn jemand sehr wütend ist: 1) Erst durchatmen — du musst nicht sofort antworten. Nicht lachen, nicht zurückschreien, nicht weglaufen. 2) Lass das Gefühl zu: Erst wenn der Mensch sich verstanden fühlt, kann er wieder zuhören. 3) Dann sag ruhig deine Sicht. 4) Grenz dich freundlich, aber klar ab. 5) Bei körperlicher Aggression: schütze dich und hol sofort Hilfe.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-konflikt-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (Umgang mit starken Emotionen und Aggression; Selbstschutz)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-konflikt-deeskalation",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Deeskalation: Wenn Emotionen hochkochen",
          body: "Wütende, verzweifelte oder aggressive Patienten und Angehörige gehören zum Pflegealltag. Deeskalation heißt: die Situation **beruhigen**, statt sie anzuheizen (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Schritt für Schritt:**\n1. **Durchatmen** — niemand erwartet eine sofortige kommunikative Reaktion. **Lachen, aggressive Antworten oder eine wortlose Flucht sind erfolglos** und untergraben deine Kompetenz.\n2. **Der Emotion verbal Raum geben** — starke Gefühle müssen **primär Raum bekommen**. Erst wenn sich der Mensch **verstanden fühlt**, ist er wieder in der Lage, Informationen aufzunehmen. ('Ich sehe, dass Sie sehr aufgebracht sind.')\n3. **Verstehen vor Erklären** — Realitäten lassen sich schwer wegdiskutieren. Fühlt der Patient sich zuerst verstanden, kannst du **danach deine Sichtweise** darlegen oder die geltenden Bedingungen erläutern.\n4. **Persönliche Abgrenzung** darf kommuniziert werden — aber **angemessen** und im Sinne der Arbeitsanforderungen. Brauchst du sofort Distanz, sprich es aus.\n5. **Bei körperlicher Aggression:** Es braucht **präventive bzw. sofortige Unterstützung zum Schutz der eigenen Person**. Dafür gibt es festgelegte betriebliche Abläufe und regelmäßige Mitarbeiterschulungen.\n\n**Merke:** Niemand muss das Risiko einer eigenen Verletzung in Kauf nehmen — Selbstschutz hat Vorrang. (Kommunikation im Gesundheitswesen, Kap. 2)",
          glossarBegriffe: ["Deeskalation", "Selbstschutz", "Verbalisieren von Emotionen"],
        },
        contentB1: {
          title: "Deeskalation: Wenn Emotionen hochkochen",
          body: "Wütende oder verzweifelte Patienten und Angehörige gibt es oft. Deeskalation heißt: die Lage **beruhigen**, nicht anheizen (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Schritt für Schritt:**\n1. **Durchatmen** — du musst nicht sofort antworten. **Lachen, zurückschreien oder weglaufen** hilft nicht.\n2. **Gefühl zulassen** — sag: 'Ich sehe, dass Sie sehr aufgebracht sind.' Erst wenn der Mensch sich **verstanden** fühlt, kann er wieder zuhören.\n3. **Erst verstehen, dann erklären** — danach sag ruhig deine Sicht.\n4. **Grenz dich ab** — freundlich, aber klar. Brauchst du Abstand, sag es.\n5. **Bei körperlicher Aggression:** Schütze dich und hol **sofort Hilfe**. Dafür gibt es feste Regeln im Betrieb und Schulungen.\n\n**Wichtig:** Niemand muss sich verletzen lassen — dein Schutz geht vor.",
          glossarBegriffe: ["Deeskalation", "Selbstschutz", "Verbalisieren von Emotionen"],
        },
      },
    },
    glossarBegriffe: ["Deeskalation", "Selbstschutz", "Verbalisieren von Emotionen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: asymmetrische-kommunikation (Bloom 2) — LE1-K4
  // ═══════════════════════════════════════════
  {
    bausteinId: "konflikt-deeskalation-asymmetrie",
    themaId: "konflikt-deeskalation",
    titel: "Asymmetrische Kommunikation: das Machtgefälle erkennen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Patientin im Krankenhausbett, im Nachthemd, mit wenig Wissen über ihre Erkrankung — du in Dienstkleidung, stehend, mit allen Informationen. Sind eure Rollen im Gespräch gleich? Und was bedeutet das für dich?",
      antwort:
        "Nein, die Rollen sind ungleich — das ist eine asymmetrische (komplementäre) Kommunikationsstruktur mit einem Machtgefälle: Wissen, Kleidung, Körperhaltung, Hausrecht liegen bei dir. Das ist normal und nicht schlecht, aber du musst es erkennen. Wer das Gefälle übersieht, wirkt schnell herablassend; wer es bewusst gestaltet (Augenhöhe, Information teilen), schützt die Würde des Patienten. (Watzlawick; Kommunikation im Gesundheitswesen, Kap. 1/4)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Asymmetrische (komplementäre) Kommunikation liegt vor, wenn die Gesprächspartner ungleiche Rollen/Macht haben — z.B. Pflegekraft–Patient (Wissen, Kleidung, Hausrecht), Arzt–Pflege, Vorgesetzte–Auszubildende. Watzlawicks 5. Axiom: Kommunikation ist symmetrisch (gleichwertig) oder komplementär (ergänzend/ungleich). Asymmetrie ist nicht per se schlecht, aber sie muss erkannt werden: Wer sie übersieht, wirkt herablassend; bewusst gestaltet (Augenhöhe, Information teilen, Selbstbestimmung achten) schützt sie die Würde. (Kommunikation im Gesundheitswesen, Kap. 1/4)",
      textB1:
        "Asymmetrische Kommunikation heißt: Die Gesprächspartner sind nicht gleich stark — z.B. Pflegekraft und Patient (du hast Wissen, Kleidung, das 'Hausrecht'), oder Chef und Azubi. Watzlawick nennt das 'komplementär'. Das ist nicht schlecht, aber du musst es merken: Wer das übersieht, wirkt von oben herab. Wer es bewusst gestaltet (Augenhöhe, Wissen teilen), schützt die Würde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-konflikt-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (symmetrische/komplementäre Kommunikation, Watzlawick)", "Kommunikation im Gesundheitswesen, Kap. 4 (Rollen und Hierarchie im Team)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-konflikt-asymmetrie",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Asymmetrische Kommunikation",
          body: "Nicht jede Kommunikation findet zwischen Gleichen statt. Nach Watzlawicks 5. Axiom ist Kommunikation **symmetrisch** (gleichwertig) oder **komplementär** (ergänzend, ungleich). Ungleiche Strukturen nennt man **asymmetrisch** (Kommunikation im Gesundheitswesen, Kap. 1/4).\n\n**Wo Asymmetrie in der Pflege auftritt:**\n- **Pflegekraft – Patient:** Du hast das Fachwissen, die Dienstkleidung, stehst (er liegt), kennst die Abläufe, 'verwaltest' Informationen. Der Patient ist abhängig und oft verunsichert.\n- **Arzt – Pflege**, **Vorgesetzte – Auszubildende:** Hierarchien im Team erzeugen ebenfalls asymmetrische Strukturen.\n\n**Warum du das erkennen musst:**\n- Asymmetrie ist **nicht per se schlecht** — sie entsteht aus Rollen und Wissen.\n- Aber: Wer das Gefälle **übersieht**, wirkt schnell **herablassend** oder bevormundend.\n- Wer es **bewusst gestaltet**, schützt die Würde: auf **Augenhöhe** gehen (hinsetzen), **Informationen teilen** statt sie zu 'besitzen', **Selbstbestimmung** achten, **nicht über den Kopf des Patienten hinweg** reden.\n\n**Identifizieren:** Frag dich in einem Gespräch — wer hat hier Wissen, Status, Handlungsmacht? Und nutze diese Asymmetrie **verantwortungsvoll**, statt sie auszuspielen. (Kommunikation im Gesundheitswesen, Kap. 1/4)",
          glossarBegriffe: ["asymmetrische Kommunikation", "komplementäre Kommunikation", "Machtgefälle"],
        },
        contentB1: {
          title: "Asymmetrische Kommunikation",
          body: "Nicht immer reden zwei Gleiche miteinander. Watzlawick sagt: Kommunikation ist **symmetrisch** (gleich) oder **komplementär** (ungleich). Ungleich nennt man **asymmetrisch** (Kommunikation im Gesundheitswesen, Kap. 1/4).\n\n**Wo das in der Pflege passiert:**\n- **Pflegekraft – Patient:** Du hast Wissen, Dienstkleidung, stehst (er liegt), kennst die Abläufe. Der Patient ist abhängig und oft unsicher.\n- **Arzt – Pflege**, **Chef – Azubi:** auch hier sind die Rollen ungleich.\n\n**Warum du das erkennen musst:**\n- Ungleich ist **nicht automatisch schlecht** — es kommt von Rollen und Wissen.\n- Aber: Wer es **übersieht**, wirkt schnell **von oben herab**.\n- Wer es **bewusst gestaltet**, schützt die Würde: **auf Augenhöhe** gehen (hinsetzen), **Wissen teilen**, **mitentscheiden lassen**, **nicht über den Kopf** des Patienten reden.\n\n**Erkennen:** Frag dich — wer hat hier Wissen, Status, Macht? Nutze das **verantwortungsvoll**, spiel es nicht aus.",
          glossarBegriffe: ["asymmetrische Kommunikation", "komplementäre Kommunikation", "Machtgefälle"],
        },
      },
    },
    glossarBegriffe: ["asymmetrische Kommunikation", "komplementäre Kommunikation", "Machtgefälle"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: konflikt-reflexion (Bloom 5) — LE1-K3 (Anwendung/Reflexion)
  // ═══════════════════════════════════════════
  {
    bausteinId: "konflikt-deeskalation-reflexion",
    themaId: "konflikt-deeskalation",
    titel: "Einen Konflikt analysieren und deeskalieren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Denk an einen Konflikt, den du erlebt hast. Wenn du ihn jetzt mit dem Gelernten zerlegst — auf welcher Ebene lag er wirklich (Sache, Beziehung, ungleiche Rollen, ungehörte Emotion)? Und welche Deeskalation hätte gepasst?",
      antwort:
        "Oft liegt ein Konflikt nicht auf der Sachebene, sondern darunter: ein verletzter Beziehungsaspekt, eine ungehörte Emotion oder eine nicht erkannte Asymmetrie. Wer das analysiert (Watzlawick, Vier-Ohren, asymmetrische Struktur), findet die eigentliche Störungsquelle — und kann gezielt deeskalieren (Emotion Raum geben, auf Augenhöhe, Ich-Botschaften, vier Phasen). (Kommunikation im Gesundheitswesen, Kap. 1/2/4)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Konfliktanalyse: Auf welcher Ebene liegt der Konflikt? Sache, Beziehung (Watzlawick), welches 'Ohr' (Schulz von Thun), ungehörte Emotion, asymmetrische Struktur? Daraus folgt die Deeskalation: Emotion verbal Raum geben, sich verstanden fühlen lassen, Ich-Botschaften, Augenhöhe herstellen, das Klärungsgespräch in vier Phasen führen. Analyse vor Lösung.",
      textB1:
        "Konflikt analysieren: Wo liegt er wirklich? Bei der Sache? Bei der Beziehung? Bei einem ungehörten Gefühl? Bei ungleichen Rollen? Dann passt die Deeskalation: Gefühl zulassen, sich verstanden fühlen lassen, Ich-Botschaften, Augenhöhe, das Klärungsgespräch in vier Phasen. Erst analysieren, dann lösen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-konflikt-wb-04",
        phase: 1,
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1/2/4 (Konfliktanalyse und Deeskalation)"],
        track: "basis",
        modus: "schreibtisch",
        lernziel: "ce04-konflikt-reflexion",
        tag: "pflege",
        contentC1: {
          title: "Einen Konflikt analysieren und deeskalieren",
          body: "Wer einen Konflikt **lösen** will, muss ihn zuerst **analysieren** — sonst behandelt man das Symptom statt der Ursache (Kommunikation im Gesundheitswesen, Kap. 1/2/4).\n\n**Analyse-Fragen:**\n- Liegt der Konflikt auf der **Sachebene** — oder darunter?\n- Ist der **Beziehungsaspekt** verletzt (Watzlawick)? Wurde mit dem falschen **'Ohr'** gehört (Schulz von Thun)?\n- Gibt es eine **ungehörte Emotion**, die erst Raum braucht?\n- Liegt eine **asymmetrische Struktur** (Machtgefälle) zugrunde, die nicht erkannt wurde?\n\n**Daraus folgt die Deeskalation:**\n- der **Emotion verbal Raum geben**, sich **verstanden fühlen** lassen\n- **Ich-Botschaften** statt Vorwürfe\n- **Augenhöhe** herstellen, das Machtgefälle nicht ausspielen\n- das **Klärungsgespräch in vier Phasen** führen (klären → Problem/Ziel → Lösung → Reflexion)\n\nSo wird aus 'irgendwie schlichten' ein **gezieltes, fachlich begründetes** Vorgehen.",
          glossarBegriffe: ["Konfliktgespräch", "Deeskalation", "asymmetrische Kommunikation"],
        },
        contentB1: {
          title: "Einen Konflikt analysieren und deeskalieren",
          body: "Wer einen Konflikt **lösen** will, muss ihn erst **verstehen** — sonst behandelt man nur das Symptom (Kommunikation im Gesundheitswesen, Kap. 1/2/4).\n\n**Frag dich:**\n- Geht es um die **Sache** — oder steckt mehr dahinter?\n- Ist die **Beziehung** verletzt? Wurde mit dem falschen **'Ohr'** gehört?\n- Gibt es ein **Gefühl**, das erst Raum braucht?\n- Sind die **Rollen ungleich** (Machtgefälle)?\n\n**Dann deeskalierst du gezielt:**\n- **Gefühl zulassen**, sich **verstanden fühlen** lassen\n- **Ich-Botschaften** statt Vorwürfe\n- **Augenhöhe** herstellen\n- das **Klärungsgespräch in vier Phasen** führen\n\nSo wird aus 'irgendwie schlichten' ein **klares, begründetes** Vorgehen.",
          glossarBegriffe: ["Konfliktgespräch", "Deeskalation", "asymmetrische Kommunikation"],
        },
        question: {
          fragetext: "Analysiere einen selbst erlebten Konflikt und entwirf, wie du ihn deeskalieren würdest.",
          reflection: {
            prompt:
              "Schreibe 4-6 Sätze: 1) Schildere kurz einen Konflikt (Praxis, Schule, privat). 2) Analysiere ihn: Auf welcher Ebene lag er wirklich (Sache, Beziehung, ungehörte Emotion, ungleiche Rollen)? Nutze ein Modell (Watzlawick / Vier-Ohren / Asymmetrie). 3) Entwirf eine Deeskalations-/Lösungsstrategie: Welche konkreten Schritte würdest du gehen?",
            placeholder:
              "Der Konflikt war … Analysiert mit … lag er eigentlich auf der Ebene … Deeskalieren würde ich, indem ich …",
            systemPrompt:
              "Bewerte im Sandwich-Prinzip. Analysiert der Schüler den Konflikt modellgestützt (erkennt er die EIGENTLICHE Ebene unter der Sachebene: Beziehungsaspekt, ungehörte Emotion, Asymmetrie) statt nur zu beschreiben? Entwirft er eine zur Analyse PASSENDE Deeskalation (Emotion Raum geben, Ich-Botschaften, Augenhöhe, vier Phasen) — nicht beliebige Tipps? Lob für die Verbindung von Analyse und Strategie (Bloom 4/5). Niemals abwertend.",
          },
        },
      },
    },
    glossarBegriffe: ["Konfliktgespräch", "Deeskalation", "asymmetrische Kommunikation"],
    karteikarten: [],
  },
];

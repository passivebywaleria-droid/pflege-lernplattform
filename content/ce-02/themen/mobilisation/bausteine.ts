// CE-02 Thema Mobilisation & Transfer — Wissensbausteine (15 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/mobilisation/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_MOBILISATION_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: mobilisation-begriff-folgen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-begriff-folgen",
    themaId: "mobilisation",
    titel: "Definition: Mobilisation und Folgen der Immobilität",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du liegst 2 Wochen krank im Bett. Was verändert sich bis dahin in deinem Körper? Nenne mindestens 3 Dinge.",
      antwort:
        "Mobilisation ist jede pflegerische Maßnahme, die einen Menschen in Bewegung bringt oder hält — vom Drehen im Bett bis zum Gehen. Fehlt sie, drohen 5 typische Folgen: Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz. (DNQP 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Mobilisation ist jede pflegerische Maßnahme, die einen Menschen in Bewegung bringt oder hält — vom Drehen im Bett bis zum Gehen. Fehlt sie, drohen 5 typische Folgen: Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz. (DNQP 2020)",
      textB1:
        "Mobilisation heißt: Du hilfst einem Menschen, sich zu bewegen. Das geht vom Drehen im Bett bis zum Gehen. Ohne Bewegung entstehen 5 Gefahren: Druckwunde, Blutgerinnsel, Lungenentzündung, steife Gelenke, Sturz.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-begriff-folgen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Mobilisation und Folgen der Immobilität",
          body: "**Mobilisation** bezeichnet alle Maßnahmen, die darauf zielen, einen Menschen in Bewegung zu bringen, seine vorhandene Bewegungsfähigkeit zu erhalten oder zurückzugewinnen. Die Spannweite reicht vom **passiven Drehen im Bett** über das **Aufsetzen an die Bettkante**, das **Stehen** bis zum **begleiteten Gehen**.\n\nFehlt Bewegung länger als 24-72 Stunden, beginnen Umbauprozesse im Körper:\n\n- **Haut** → Dekubitus durch Druck\n- **Gefäße** → tiefe Beinvenenthrombose durch Stase (Virchow-Trias)\n- **Lunge** → Pneumonie durch flache Atmung und Sekretstau\n- **Gelenke** → Kontraktur durch Verkürzung von Muskeln und Sehnen\n- **Muskeln** → Sarkopenie: pro Woche Bettruhe bis zu 10 % Muskelmasse-Verlust bei älteren Menschen\n\nDie DNQP 2020 definiert als Ziel: **Mobilitätsverlust vermeiden — erhalten — zurückgewinnen.**",
          glossarBegriffe: ["Mobilisation", "Sarkopenie"],
        },
        contentB1: {
          title: "Mobilisation und Folgen der Immobilität",
          body: "**Mobilisation** heißt: Bewegung fördern. Das fängt klein an — zum Beispiel den Patienten im Bett drehen. Und es geht weiter bis zum Gehen.\n\nWenn ein Mensch lange liegt, passiert viel Schlimmes im Körper:\n\n- **Haut** → Wunde durch Druck (Dekubitus)\n- **Blut** → Gerinnsel in den Beinvenen (Thrombose)\n- **Lunge** → Lungenentzündung (Pneumonie)\n- **Gelenke** → werden steif (Kontraktur)\n- **Muskeln** → werden schwächer (bis zu 10 % pro Woche bei alten Menschen)\n\nDer DNQP sagt: **Bewegung erhalten, fördern, zurückbringen.** Darum ist Mobilisation so wichtig.",
          glossarBegriffe: ["Mobilisation", "Sarkopenie"],
        },
      },
    },
    glossarBegriffe: ["Mobilisation", "Sarkopenie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: mobilisation-dnqp-kriterien (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-dnqp-kriterien",
    themaId: "mobilisation",
    titel: "DNQP-Expertenstandard Mobilität — 6 Kriterien",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein neuer Patient kommt auf die Station. Welche Schritte gehst du durch, damit er seine Bewegungsfähigkeit erhält oder zurückbekommt? Nenne die Reihenfolge.",
      antwort:
        "Der Expertenstandard Mobilität (DNQP 2020) nennt 6 Kriterien: 1. Mobilität einschätzen, 2. informieren und beraten, 3. Maßnahmen planen, 4. Maßnahmen durchführen, 5. evaluieren, 6. dokumentieren und überleiten. Er gilt in jedem Pflegesetting.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Expertenstandard Mobilität (DNQP 2020) nennt **6 Kriterien**: 1. Mobilität einschätzen, 2. informieren und beraten, 3. Maßnahmen planen, 4. Maßnahmen durchführen, 5. evaluieren, 6. dokumentieren und überleiten. Er gilt in jedem Pflegesetting.",
      textB1:
        "Der DNQP-Standard Mobilität hat **6 Schritte**: 1. Bewegung einschätzen, 2. Patient informieren, 3. Maßnahmen planen, 4. Maßnahmen durchführen, 5. Ergebnis prüfen, 6. aufschreiben und weitergeben. Das gilt überall — Klinik, Heim, zu Hause.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-02",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2020"],
        track: "basis",
        modus: "sortierstation",
        lernziel: "ce02-mob-dnqp-kriterien",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "DNQP-Expertenstandard Mobilität — 6 Kriterien",
          body: "Der **DNQP-Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege (2020)** ist national verbindlich und gliedert sich in 6 Kriterien:\n\n**K1 — Einschätzung:** Bei Aufnahme und bei jeder Zustandsveränderung wird die Mobilität systematisch eingeschätzt. Instrumente: **Tinetti-Test** (Balance und Gehen), **Timed Up and Go (TUG)** (über 14 Sek = erhöhtes Sturzrisiko), **Barthel-Index** (Selbstständigkeit bei ATL), **Esslinger Transferskala** (speziell für Transfers).\n\n**K2 — Information und Beratung:** Patient und Angehörige erfahren, welche Risiken Immobilität hat und welche Ressourcen der Patient selbst einbringen kann.\n\n**K3 — Planung:** Gemeinsam mit dem Patienten SMART-Ziele setzen.\n\n**K4 — Durchführung:** Aktive, assistive und passive Übungen; Transfers nach Kinästhetik oder Bobath; Hilfsmittel einsetzen.\n\n**K5 — Evaluation:** Fortschritt messen, Plan bei Bedarf anpassen.\n\n**K6 — Dokumentation und Überleitung:** Alles schriftlich festhalten und beim Setting-Wechsel weitergeben. (DNQP 2020)",
          glossarBegriffe: ["DNQP", "Expertenstandard", "Tinetti-Test", "Timed Up and Go (TUG)", "Barthel-Index", "SMART-Ziel"],
        },
        contentB1: {
          title: "DNQP-Expertenstandard Mobilität — 6 Kriterien",
          body: "Der **DNQP-Expertenstandard Mobilität (2020)** hat 6 Kriterien:\n\n**K1 — Einschätzen:** Was kann der Patient noch? Tests wie Tinetti, Timed Up and Go, Barthel-Index.\n\n**K2 — Beraten:** Patient und Familie informieren. Welche Risiken gibt es? Was kann er selbst?\n\n**K3 — Planen:** Ziele festlegen. Regel SMART: genau, messbar, machbar, wichtig, mit Zeit.\n\n**K4 — Durchführen:** Übungen aktiv, assistiv oder passiv. Transfers mit Kinästhetik oder Bobath.\n\n**K5 — Prüfen:** Klappt es? Wenn nicht: Plan ändern.\n\n**K6 — Aufschreiben und weitergeben:** Alles dokumentieren. Beim Wechsel in ein Heim oder nach Hause: Info weitergeben.",
          glossarBegriffe: ["DNQP", "Expertenstandard", "Tinetti-Test", "Barthel-Index", "SMART-Ziel"],
        },
      },
    },
    glossarBegriffe: ["DNQP", "Expertenstandard", "Tinetti-Test", "Timed Up and Go (TUG)", "Barthel-Index", "SMART-Ziel"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: mobilisation-stufen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-stufen",
    themaId: "mobilisation",
    titel: "Stufenaufbau der Mobilisation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient liegt 3 Tage im Bett. Er soll heute wieder aufstehen. In welcher Reihenfolge gehst du die Schritte durch — und warum?",
      antwort:
        "Mobilisation folgt einem Stufenaufbau: 1. Bewegung im Bett, 2. Aufsitzen an der Bettkante, 3. Stehen vor dem Bett, 4. Gehen am Platz, 5. Gehstrecke. Jede Stufe wird erst stabil beherrscht, bevor die nächste begonnen wird. (DNQP 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Mobilisation folgt einem **Stufenaufbau**: 1. Bewegung im Bett, 2. Aufsitzen an der Bettkante, 3. Stehen vor dem Bett, 4. Gehen am Platz, 5. Gehstrecke. Jede Stufe wird erst stabil beherrscht, bevor die nächste begonnen wird. (DNQP 2020)",
      textB1:
        "Mobilisation macht man in **5 Stufen**: 1. Im Bett bewegen, 2. an die Bettkante setzen, 3. aufstehen, 4. auf der Stelle gehen, 5. ein paar Schritte gehen. Erst eine Stufe sicher können — dann die nächste beginnen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-03",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2020"],
        track: "basis",
        modus: "sortierstation",
        lernziel: "ce02-mob-stufen",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Stufenaufbau der Mobilisation",
          body: "Der Stufenaufbau der Mobilisation folgt dem physiologischen Prinzip **vom Liegen zum Gehen**. Jede Stufe testet Kreislauf, Gleichgewicht und Muskelkraft neu.\n\n**Stufe 1 — Bewegung im Bett:** Aktive oder assistive Bewegungen der Extremitäten, Drehen zur Seite, Aufsetzen mit Rückenlehne.\n\n**Stufe 2 — Bettkante:** Aufsitzen mit herabhängenden Beinen. **Orthostase-Check**: 2-3 Minuten sitzen lassen, Blutdruck und Puls kontrollieren. Bei Schwindel zurücklegen.\n\n**Stufe 3 — Stehen:** Vor dem Bett stehen, Halt bieten (Bett oder Pflegekraft). Erst wenn der Patient sich sicher fühlt — weiter.\n\n**Stufe 4 — Gehen am Platz:** Gewichtsverlagerung von Bein zu Bein, noch ohne Gehstrecke.\n\n**Stufe 5 — Gehstrecke:** Wenige Schritte mit Begleitung und Hilfsmittel (Rollator, Gehstock).\n\n**Regel:** Jede Stufe erst stabil beherrschen, dann nächste Stufe. Rückschritte sind normal. (DNQP 2020)",
          glossarBegriffe: ["Orthostase-Check", "Orthostatische Dysregulation", "Gewichtsverlagerung"],
        },
        contentB1: {
          title: "Stufenaufbau der Mobilisation",
          body: "Die **5 Stufen** der Mobilisation:\n\n**Stufe 1 — Im Bett bewegen:** Arme und Beine bewegen, sich drehen, mit der Rückenlehne aufsetzen.\n\n**Stufe 2 — An die Bettkante:** Der Patient sitzt mit den Beinen runter. Du misst 2-3 Minuten lang Blutdruck und Puls (Orthostase-Check). Bei Schwindel: wieder hinlegen.\n\n**Stufe 3 — Stehen:** Vor dem Bett stehen. Du gibst Halt. Erst wenn er sicher steht — weiter.\n\n**Stufe 4 — Auf der Stelle gehen:** Das Gewicht von einem Bein auf das andere verlagern.\n\n**Stufe 5 — Gehen:** Ein paar Schritte mit Hilfsmittel und Begleitung.\n\n**Regel:** Erst eine Stufe sicher können — dann die nächste beginnen. Rückschritte sind okay.",
          glossarBegriffe: ["Orthostase-Check", "Gewichtsverlagerung"],
        },
      },
    },
    glossarBegriffe: ["Orthostase-Check", "Orthostatische Dysregulation", "Gewichtsverlagerung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: mobilisation-fruehmobilisation (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-fruehmobilisation",
    themaId: "mobilisation",
    titel: "Frühmobilisation — Wirksamkeit und Voraussetzungen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum ist die Frühmobilisation nach einer Operation die wirksamste Einzelmaßnahme, um Komplikationen zu vermeiden? Welche Mechanismen wirken da gleichzeitig?",
      antwort:
        "Frühmobilisation (= Bewegung innerhalb der ersten 24-48 Stunden nach OP) senkt das Risiko für Thrombose, Pneumonie, Dekubitus, Muskelabbau und Obstipation gleichzeitig. Sie ist laut DGG (2022) und DNQP (2020) die wirksamste Einzelmaßnahme der Pflege.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Frühmobilisation (= Bewegung innerhalb der ersten 24-48 Stunden nach OP) senkt das Risiko für Thrombose, Pneumonie, Dekubitus, Muskelabbau und Obstipation gleichzeitig. Sie ist laut DGG (2022) und DNQP (2020) die **wirksamste Einzelmaßnahme** der Pflege.",
      textB1:
        "Frühmobilisation heißt: In den ersten 24-48 Stunden nach einer OP schon bewegen. Das verhindert viele Probleme auf einmal: Thrombose, Lungenentzündung, Druckwunden, Muskelabbau, Verstopfung. Die **stärkste** Einzelmaßnahme der Pflege.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGG 2022", "DNQP 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-fruehmobilisation",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Frühmobilisation — Wirksamkeit und Voraussetzungen",
          body: "**Frühmobilisation** bezeichnet bewegungsfördernde Maßnahmen innerhalb der ersten **24-48 Stunden** nach einem kritischen Ereignis (OP, Herzinfarkt, Schlaganfall — sofern stabil). Sie ist laut DNQP (2020) und DGG (2022) die **wirksamste Einzelmaßnahme** der Pflege, weil sie auf 5 Systeme gleichzeitig wirkt:\n\n1. **Gefäße** — Bewegung erhöht den venösen Rückstrom, senkt das Thromboserisiko\n2. **Lunge** — Aufrechte Position vertieft die Atmung, Sekret wird mobilisiert\n3. **Haut** — Druckentlastung, Wechsel der Körperposition vermindert Dekubitusrisiko\n4. **Muskeln** — Bereits nach 24 Stunden Bettruhe beginnt der Muskelabbau, Bewegung bremst ihn\n5. **Darm** — Mobilisation fördert die Peristaltik, verhindert Obstipation\n\n**Voraussetzung:** Schmerzen NRS ≤ 3, Kreislauf stabil, Patient wach und orientiert.\n\n**Ausnahmen:** instabiler Kreislauf, frische Fraktur ohne Versorgung, ärztliche Bettruheanordnung. (DGG 2022)",
          glossarBegriffe: ["Frühmobilisation"],
        },
        contentB1: {
          title: "Frühmobilisation — Wirksamkeit und Voraussetzungen",
          body: "**Frühmobilisation** heißt: Bewegung in den **ersten 24-48 Stunden** nach einer OP oder einer schweren Erkrankung. Sie ist die **wichtigste** Einzelmaßnahme der Pflege. Warum? Weil sie auf 5 Probleme gleichzeitig wirkt:\n\n1. **Blut** → Bewegung schickt das Blut zurück zum Herz. Kein Gerinnsel.\n2. **Lunge** → Aufrecht sitzen oder stehen macht tiefer atmen. Keine Lungenentzündung.\n3. **Haut** → Druck weg, neue Position. Keine Druckwunde.\n4. **Muskeln** → Schon nach 24 Stunden Liegen bauen Muskeln ab. Bewegung bremst das.\n5. **Darm** → Bewegung bringt den Darm in Gang. Keine Verstopfung.\n\n**Voraussetzung:** Schmerzen klein (NRS höchstens 3), Kreislauf stabil, Patient wach.\n\n**Ausnahmen:** Kreislauf instabil, frische Verletzung noch nicht versorgt, Arzt sagt 'Bettruhe'.",
          glossarBegriffe: ["Frühmobilisation"],
        },
      },
    },
    glossarBegriffe: ["Frühmobilisation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: mobilisation-transfer-bett-stuhl (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-transfer-bett-stuhl",
    themaId: "mobilisation",
    titel: "Transfer Bett → Stuhl in 3 Phasen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du möchtest einen Patienten aus dem Bett in den Sessel bringen. Welche Vorbereitungen triffst du, bevor du überhaupt anfängst? Denk an Umgebung, Patient und dich selbst.",
      antwort:
        "Beim Transfer vom Bett zum Stuhl gilt: Vorbereitung entscheidet. Stuhl in Greifnähe stellen (Bremse!), Schuhe mit rutschfester Sohle, Schmerzen prüfen, Patient informieren, eigene Körperhaltung bewusst einnehmen (Kinästhetik), Hilfsmittel bereitlegen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Beim Transfer vom Bett zum Stuhl gilt: **Vorbereitung entscheidet**. Stuhl in Greifnähe stellen (Bremse!), Schuhe mit rutschfester Sohle, Schmerzen prüfen, Patient informieren, eigene Körperhaltung bewusst einnehmen (Kinästhetik), Hilfsmittel bereitlegen.",
      textB1:
        "Beim Transfer vom Bett zum Stuhl ist die **Vorbereitung** am wichtigsten: Stuhl nah ans Bett (Bremse anziehen!), feste Schuhe an, Schmerzen prüfen, Patient informieren, deine eigene Haltung gut, Hilfsmittel bereit.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2020", "Hatch/Maietta"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-transfer-bett-stuhl",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Transfer Bett → Stuhl in 3 Phasen",
          body: "Der **Transfer Bett → Stuhl** folgt einem festen Ablauf in 3 Phasen:\n\n**Phase 1 — Vorbereitung (am wichtigsten):**\n- Bett auf **Hüfthöhe** der Pflegekraft bringen (rückengerecht)\n- Stuhl im 45-90°-Winkel zum Bett stellen, **Bremse anziehen**\n- Patient hat **feste, rutschfeste Schuhe** an (keine Schlappen!)\n- **Schmerzen** erfragen (NRS), ggf. Schmerzmittel vorher geben\n- Patient **informieren**: 'Ich helfe dir gleich in den Sessel — bist du einverstanden?'\n- **Hilfsmittel** bereitlegen (Rutschbrett, Gleitmatte, ggf. Lifter)\n\n**Phase 2 — Durchführung:**\n- Patient **an die Bettkante** bringen — Orthostase-Check\n- Fuß des Patienten vor den Fuß der Pflegekraft setzen (**Stoppfunktion**)\n- Patient fasst an der Pflegekraft zu (**Schulterblätter**, nicht Hals!)\n- Mit **Gewichtsverlagerung** (Kinästhetik) nach vorne-oben aufstehen\n- Gemeinsam drehen, ohne Drehbewegung der Wirbelsäule der Pflegekraft\n- Langsam in den Stuhl setzen\n\n**Phase 3 — Nachbereitung:**\n- Patient **bequem positionieren** (Rücken, Beine, Arme)\n- **Rufanlage** in Reichweite\n- **Dokumentieren**: Uhrzeit, Hilfsmittel, Reaktion des Patienten. (DNQP 2020)",
          glossarBegriffe: ["Transfer", "Gewichtsverlagerung", "Stoppfunktion", "Orthostase-Check"],
        },
        contentB1: {
          title: "Transfer Bett → Stuhl in 3 Phasen",
          body: "**Transfer Bett → Stuhl** in 3 Phasen:\n\n**Phase 1 — Vorbereitung (am wichtigsten):**\n- Bett hoch stellen (auf deine Hüfthöhe)\n- Stuhl nah ans Bett (45-90°), **Bremse anziehen**\n- Patient trägt **feste Schuhe** mit rutschfester Sohle (keine Schlappen!)\n- **Schmerzen** fragen (NRS), wenn nötig: Schmerzmittel geben\n- Patient **informieren**: 'Ich helfe dir gleich aufstehen — okay?'\n- **Hilfsmittel** bereitlegen: Rutschbrett, Gleitmatte, Lifter\n\n**Phase 2 — Durchführung:**\n- Patient an die Bettkante bringen — Blutdruck messen\n- Deinen Fuß **vor** den Fuß des Patienten stellen (**Stoppfunktion**)\n- Patient fasst an deine **Schulterblätter** (NICHT an deinen Hals!)\n- Mit **Gewichtsverlagerung** aufstehen (Kinästhetik)\n- Zusammen drehen — dein Rücken bleibt gerade\n- Langsam in den Stuhl setzen\n\n**Phase 3 — Nachbereitung:**\n- Patient gut positionieren\n- **Klingel** in Reichweite legen\n- **Dokumentieren**: Uhrzeit, Hilfsmittel, wie war die Reaktion",
          glossarBegriffe: ["Transfer", "Gewichtsverlagerung", "Stoppfunktion"],
        },
      },
    },
    glossarBegriffe: ["Transfer", "Gewichtsverlagerung", "Stoppfunktion", "Orthostase-Check"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: mobilisation-hilfsmittel-gehen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-hilfsmittel-gehen",
    themaId: "mobilisation",
    titel: "Gehhilfsmittel: Gehstock, UAG, Rollator, Rollstuhl",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welches Gehhilfsmittel würdest du einem Patienten empfehlen, der 1. kaum noch Kraft im linken Bein hat, 2. nach der Hüft-OP unsicher aufsteht, 3. sich gar nicht mehr stehen kann? Begründe je nach Fall.",
      antwort:
        "4 Hilfsmittel nach Stabilität: Gehstock (geringste Unterstützung, gesunde Seite halten), Unterarmgehstütze (UAG) für Teilbelastung einer Seite, Rollator (4 Räder, große Standfläche) für unsichere Patienten, Rollstuhl bei fehlender Steh-/Gehfähigkeit.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**4 Hilfsmittel nach Stabilität:** Gehstock (geringste Unterstützung, gesunde Seite halten), **Unterarmgehstütze (UAG)** für Teilbelastung einer Seite, **Rollator** (4 Räder, große Standfläche) für unsichere Patienten, **Rollstuhl** bei fehlender Steh-/Gehfähigkeit.",
      textB1:
        "**4 Hilfsmittel** nach Stabilität: **Gehstock** (wenig Hilfe, in der gesunden Hand), **Unterarmgehstütze (UAG)** wenn eine Seite wenig belasten darf, **Rollator** (4 Räder) für unsichere Patienten, **Rollstuhl** wenn Stehen nicht geht.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2020", "BGW 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-hilfsmittel-gehen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Gehhilfsmittel: Gehstock, UAG, Rollator, Rollstuhl",
          body: "Gehhilfsmittel unterscheiden sich nach der **Menge an Unterstützung** und dem **Einsatzgebiet**:\n\n**Gehstock** (geringste Unterstützung):\n- **Einsatz:** leichte Unsicherheit, Arthrose, mäßige Schwäche auf einer Seite\n- **Regel:** In der **gesunden** Hand — der Stock verlängert den gesunden Arm, die betroffene Seite wird entlastet\n- **Höhe:** Handgelenkshöhe beim aufrechten Stehen (ca. Trochanter-Höhe)\n\n**Unterarmgehstütze (UAG)**:\n- **Einsatz:** vorübergehende Entlastung einer Seite (nach Fraktur, nach OP)\n- **Regel:** **Teilbelastung** möglich — Patient erhält eine Prozentvorgabe vom Arzt\n- Immer paarweise im 3-Punkt-Gang\n\n**Rollator** (4 Räder):\n- **Einsatz:** unsicheres Gehen, Sturzangst, fehlende Balance\n- **Wichtig:** Rollator bleibt **vor** dem Patienten, **Bremsen** vor dem Hinsetzen prüfen\n\n**Rollstuhl**:\n- **Einsatz:** Stehen/Gehen nicht (mehr) möglich\n- **Abwägung:** Nicht zu früh — wer im Rollstuhl sitzt, verlernt das Gehen. Immer parallel Mobilisation weiter. (DNQP 2020)",
          glossarBegriffe: ["Rollator", "Unterarmgehstütze (UAG)", "Teilbelastung"],
        },
        contentB1: {
          title: "Gehhilfsmittel: Gehstock, UAG, Rollator, Rollstuhl",
          body: "**4 Gehhilfen** — nach Stabilität geordnet:\n\n**Gehstock** (wenig Hilfe):\n- Für leichte Unsicherheit oder Arthrose\n- Regel: **In der gesunden Hand** — entlastet die kranke Seite\n- Höhe: Handgelenk im aufrechten Stand\n\n**Unterarmgehstütze (UAG)**:\n- Wenn eine Seite weniger belasten darf (nach Bruch, nach OP)\n- Der Arzt sagt, wie viel Gewicht erlaubt ist\n- Immer **zwei** Stützen zusammen\n\n**Rollator** (4 Räder):\n- Für unsicheres Gehen, Angst zu fallen\n- Hat Sitz, Korb, Bremsen\n- Wichtig: Rollator immer **vor** dem Patienten, **Bremsen** prüfen vor dem Hinsetzen\n\n**Rollstuhl**:\n- Wenn Stehen und Gehen nicht mehr geht\n- **Achtung:** Nicht zu früh. Weiter mobilisieren.",
          glossarBegriffe: ["Rollator", "Unterarmgehstütze (UAG)", "Teilbelastung"],
        },
      },
    },
    glossarBegriffe: ["Rollator", "Unterarmgehstütze (UAG)", "Teilbelastung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: mobilisation-transferhilfsmittel (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-transferhilfsmittel",
    themaId: "mobilisation",
    titel: "Transferhilfsmittel: Rutschbrett, Drehscheibe, Gleitmatte, Lifter",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 95 kg schwerer Patient kann nicht allein stehen und muss vom Bett in den Rollstuhl. Welches Hilfsmittel wählst du — und warum nicht ein anderes?",
      antwort:
        "Transferhilfsmittel überbrücken die Lücke zwischen aktivem Patienten und vollständiger Unterstützung: Rutschbrett (Patient rutscht selbst), Drehscheibe (kleine Rotation im Stand), Gleitmatte (im Bett verschieben), Lifter (Patient wird komplett angehoben).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Transferhilfsmittel überbrücken die Lücke zwischen aktivem Patienten und vollständiger Unterstützung: **Rutschbrett** (Patient rutscht selbst), **Drehscheibe** (kleine Rotation im Stand), **Gleitmatte** (im Bett verschieben), **Lifter** (Patient wird komplett angehoben).",
      textB1:
        "Transferhilfsmittel helfen beim Umsetzen: **Rutschbrett** (Patient rutscht selbst, z. B. Bett → Rollstuhl), **Drehscheibe** (kleines Drehen im Stehen), **Gleitmatte** (verschieben im Bett), **Lifter** (Patient wird hochgehoben, wenn er nichts mehr kann).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["BGW 2019", "DNQP 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-transferhilfsmittel",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Transferhilfsmittel: Rutschbrett, Drehscheibe, Gleitmatte, Lifter",
          body: "Transferhilfsmittel gliedern sich nach der **verbleibenden Aktivität** des Patienten:\n\n**Rutschbrett (Gleitbrett):**\n- **Einsatz:** Patient sitzt, kann Bein nicht anheben\n- Patient rutscht langsam über das Brett in Richtung Ziel (Rollstuhl, Stuhl)\n- **Vorteil:** Patient bleibt aktiv, keine Hebekraft nötig\n\n**Drehscheibe:**\n- **Einsatz:** Patient kann stehen, aber **nicht drehen** (z. B. nach Hüft-TEP, bei Parkinson)\n- Patient steht auf der Scheibe, Pflegekraft dreht ihn\n- **Vorteil:** Vermeidet Drehbewegung der Hüfte/Wirbelsäule\n\n**Gleitmatte:**\n- **Einsatz:** Patient soll **im Bett** verschoben werden\n- Matte unterlegen — Patient gleitet fast ohne Reibung\n- **Vorteil:** Keine Scherkräfte (wichtig für Dekubitusprophylaxe)\n\n**Lifter (Patientenlifter):**\n- **Einsatz:** Patient kann **nicht stehen** und ist **zu schwer** (> 40 kg Faustregel laut BGW)\n- **Wichtig:** Tragkraft beachten, Gurt passt, immer zu zweit\n\n**Grundregel laut BGW (2019):** Lieber ein Hilfsmittel zu viel als ein Rückenschaden für dich.",
          glossarBegriffe: ["Rutschbrett (Gleitbrett)", "Drehscheibe", "Gleitmatte", "Patientenlifter"],
        },
        contentB1: {
          title: "Transferhilfsmittel: Rutschbrett, Drehscheibe, Gleitmatte, Lifter",
          body: "4 **Transferhilfsmittel** — nach Aktivität des Patienten:\n\n**Rutschbrett:**\n- Für Patienten, die sitzen können, aber das Bein nicht hochheben\n- Patient rutscht selbst hinüber — du musst nicht heben\n\n**Drehscheibe:**\n- Für Patienten, die stehen, aber **nicht drehen** können (z. B. nach Hüft-OP)\n- Du drehst die Scheibe — nicht den Patienten\n\n**Gleitmatte:**\n- Zum **Verschieben im Bett** (höher, zur Seite)\n- Keine Scherkräfte (wichtig gegen Druckwunden)\n\n**Lifter** (Patientenlifter):\n- Wenn der Patient **nicht stehen kann** und **zu schwer** ist (ab ca. 40 kg, BGW)\n- Tragkraft prüfen, Gurt passt, **immer zu zweit** arbeiten\n\n**Faustregel BGW 2019:** Lieber ein Hilfsmittel zu viel als ein kaputter Rücken.",
          glossarBegriffe: ["Rutschbrett (Gleitbrett)", "Drehscheibe", "Gleitmatte", "Patientenlifter"],
        },
      },
    },
    glossarBegriffe: ["Rutschbrett (Gleitbrett)", "Drehscheibe", "Gleitmatte", "Patientenlifter"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: mobilisation-bobath (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-bobath",
    themaId: "mobilisation",
    titel: "Bobath-Konzept — Betroffene Seite einbeziehen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Schlaganfall-Patient hat eine halbseitige Lähmung links. Die meisten Pfleger greifen ihn auf der gesunden (rechten) Seite an, damit er stabil ist. Was ist daran falsch — und was sagt das Bobath-Konzept?",
      antwort:
        "Das Bobath-Konzept (Berta und Karel Bobath, 1948 ff.) fordert: betroffene Seite einbeziehen, nicht ignorieren. Gewicht, Berührung, Aufmerksamkeit gehen zur gelähmten Seite — so lernt das Gehirn, diese Seite wieder zu integrieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das **Bobath-Konzept** (Berta und Karel Bobath, 1948 ff.) fordert: **betroffene Seite einbeziehen**, nicht ignorieren. Gewicht, Berührung, Aufmerksamkeit gehen zur gelähmten Seite — so lernt das Gehirn, diese Seite wieder zu integrieren. Angewendet bei Schlaganfall.",
      textB1:
        "Das **Bobath-Konzept** (Bobath, 1948) sagt: Bei einem Schlaganfall mit halbseitiger Lähmung — **die kranke Seite einbeziehen**, nicht weglassen. Berühren, Gewicht darauf geben, Aufmerksamkeit dorthin. So lernt das Gehirn wieder.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Bobath B./K. 1948 ff."],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-bobath",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Bobath-Konzept — Betroffene Seite einbeziehen",
          body: "Das **Bobath-Konzept** wurde in den 1940er-Jahren vom Ehepaar **Berta Bobath** (Physiotherapeutin) und **Karel Bobath** (Neurologe) entwickelt. Heute vor allem für Erwachsene nach **Schlaganfall** (Apoplex).\n\n**Grundprinzip:** Nach einem Schlaganfall ist eine Körperhälfte gelähmt (**Hemiparese/Hemiplegie**). Das Gehirn **vernachlässigt die betroffene Seite** ('Neglect'). Bobath fordert: Die betroffene Seite wird **bewusst einbezogen**.\n\n**Praktische Regeln in der Pflege:**\n\n1. **Bett immer von der betroffenen Seite anstellen** — der Patient wendet Kopf und Rumpf dorthin\n2. **Alle Sinne von der betroffenen Seite reizen**: Pflegekraft spricht von dieser Seite, berührt zuerst dort\n3. **Transfers über die betroffene Seite**: Umdrehen, Aufstehen, Gehen beginnt auf dieser Seite\n4. **Lagerung in Aktivität** — nicht ruhigstellen mit Kissen, sondern Bewegung zulassen\n5. **Gewichtsverlagerung zur betroffenen Seite** — nicht die gesunde Seite allein belasten\n\n**Wichtig:** Bobath ist kein Rezept, sondern ein **24-Stunden-Konzept** — alle Pflegekräfte müssen geschult sein. (Bobath/Bobath)",
          glossarBegriffe: ["Bobath-Konzept", "Hemiparese", "Neglect"],
        },
        contentB1: {
          title: "Bobath-Konzept — Betroffene Seite einbeziehen",
          body: "Das **Bobath-Konzept** (Berta und Karel Bobath, 1948) ist für Menschen nach **Schlaganfall** mit Lähmung auf einer Seite.\n\n**Die Idee:** Eine Körperseite ist gelähmt. Die gesunde Seite macht oft alles. Das Gehirn **vergisst die kranke Seite**. Das heißt **Neglect**. Bobath sagt: Die kranke Seite **immer einbeziehen**.\n\n**So machst du es praktisch:**\n\n1. **Bett von der kranken Seite zugänglich machen** — der Patient schaut dorthin\n2. **Alles von der kranken Seite machen**: sprechen, berühren, Sachen hinlegen\n3. **Transfers über die kranke Seite**: Umdrehen, Aufstehen, Gehen — immer dorthin\n4. **Lagerung in Bewegung** — nicht mit Kissen feststellen\n5. **Gewicht auf die kranke Seite** — nicht nur die gesunde belasten\n\n**Wichtig:** Bobath gilt **24 Stunden**. Jede Berührung wirkt. Alle Pfleger müssen es wissen.",
          glossarBegriffe: ["Bobath-Konzept", "Hemiparese", "Neglect"],
        },
      },
    },
    glossarBegriffe: ["Bobath-Konzept", "Hemiparese", "Neglect"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: mobilisation-arbeitsschutz (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-arbeitsschutz",
    themaId: "mobilisation",
    titel: "Arbeitsschutz und rückengerechtes Arbeiten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Nenne 3 Gründe, warum die Pflege den schwersten Rückenverschleiß aller Berufe in Deutschland hat. Was könnte dagegen helfen?",
      antwort:
        "Das Arbeitsschutzgesetz (ArbSchG § 3, § 5) und die Lastenhandhabungsverordnung (LasthandhabV § 2) verpflichten den Arbeitgeber zur Gefährdungsbeurteilung. Rückenschonendes Arbeiten heißt: Bett auf Hüfthöhe, Hilfsmittel nutzen, Kinästhetik statt Heben. (BGW 2019)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das Arbeitsschutzgesetz (ArbSchG § 3, § 5) und die Lastenhandhabungsverordnung (LasthandhabV § 2) verpflichten den Arbeitgeber zur Gefährdungsbeurteilung. Rückenschonendes Arbeiten heißt: Bett auf Hüfthöhe, Hilfsmittel nutzen, Kinästhetik statt Heben. (BGW 2019)",
      textB1:
        "Das Arbeitsschutzgesetz (ArbSchG § 3, § 5) sagt: Der Chef muss Gefahren prüfen. Für deinen Rücken heißt das: Bett auf deine **Hüfthöhe** hochstellen, **Hilfsmittel nutzen**, **Kinästhetik** statt Heben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["ArbSchG", "BGW 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-arbeitsschutz",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Arbeitsschutz und rückengerechtes Arbeiten",
          body: "**Rechtliche Basis:**\n- **§ 3 ArbSchG**: Arbeitgeber muss Gefährdungen ermitteln und Maßnahmen festlegen\n- **§ 5 ArbSchG**: Gefährdungsbeurteilung ist Pflicht\n- **§ 2 LasthandhabV**: Manuelles Heben nur zulässig, wenn nicht durch Hilfsmittel ersetzbar\n- **§ 15 ArbSchG**: Pflegekraft ist **verpflichtet**, bereitgestellte Hilfsmittel zu **benutzen**\n\n**Warum das so wichtig ist (BGW 2019):**\n- Pflegeberufe haben einen der höchsten Krankenstände in Deutschland (ca. 6,9 % in der Altenpflege)\n- Muskel-Skelett-Erkrankungen sind Hauptursache für Frühberentung in der Pflege\n\n**8 Regeln für deinen Rücken:**\n1. **Bett auf Hüfthöhe** bringen — nicht gebeugt arbeiten\n2. **Kinästhetik** statt Hebetechniken\n3. **Hilfsmittel konsequent einsetzen** — Gleitmatte, Rutschbrett, Lifter\n4. **Zu zweit** bei Transfers über 40 kg (Faustregel BGW)\n5. **Gewichtsverlagerung** statt Heben\n6. **Pausen** zur Erholung\n7. **Feste Schuhe** mit rutschfester Sohle\n8. **Rückenschule** nutzen\n\n**Dein Recht:** Wenn kein Lifter vorhanden ist, kannst du die Mobilisation **begründet verweigern** (§ 15 ArbSchG). (BGW 2019)",
          glossarBegriffe: ["ArbSchG", "BGW (Berufsgenossenschaft für Gesundheitsdienst und Wohlfahrtspflege)"],
        },
        contentB1: {
          title: "Arbeitsschutz und rückengerechtes Arbeiten",
          body: "**Rechtliche Basis:**\n- **§ 3 ArbSchG**: Der Chef muss Gefahren für dich prüfen\n- **§ 5 ArbSchG**: Gefährdungsbeurteilung ist **Pflicht**\n- **§ 2 LasthandhabV**: Heben ist nur erlaubt, wenn kein Hilfsmittel da ist\n- **§ 15 ArbSchG**: Du **musst** Hilfsmittel benutzen, wenn sie da sind\n\n**8 Regeln für deinen Rücken:**\n1. **Bett hochstellen** — auf deine Hüfthöhe. Nie gebeugt arbeiten.\n2. **Kinästhetik** statt Heben\n3. **Hilfsmittel** benutzen — Gleitmatte, Rutschbrett, Lifter\n4. **Zu zweit** bei Patienten über 40 kg (Faustregel BGW)\n5. **Gewicht verlagern** statt heben\n6. **Pausen** machen\n7. **Feste Schuhe** mit rutschfester Sohle\n8. **Rückenschule** nutzen\n\n**Dein Recht:** Wenn kein Lifter da ist, darfst du die Mobilisation **begründet ablehnen** (§ 15 ArbSchG).",
          glossarBegriffe: ["ArbSchG", "BGW (Berufsgenossenschaft für Gesundheitsdienst und Wohlfahrtspflege)"],
        },
      },
    },
    glossarBegriffe: ["ArbSchG", "BGW (Berufsgenossenschaft für Gesundheitsdienst und Wohlfahrtspflege)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: mobilisation-sturzangst (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-sturzangst",
    themaId: "mobilisation",
    titel: "Post-Fall-Syndrom und Sturzangst",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K., 82, ist vor 3 Wochen gestürzt. Seitdem weigert sie sich, allein aufzustehen. Sie klammert sich an dich, wenn du sie mobilisierst. Was passiert in ihr — und was darfst du auf keinen Fall tun?",
      antwort:
        "Das Post-Fall-Syndrom bezeichnet die psychische Folge eines Sturzes: massive Sturzangst, Vermeidung von Bewegung, Rückzug. Die Folge: Muskelabbau, neue Stürze, Teufelskreis. Behandlung: Angst ernst nehmen, in kleinen Schritten mobilisieren, Sicherheit vermitteln. (Tinetti 1988)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das **Post-Fall-Syndrom** bezeichnet die psychische Folge eines Sturzes: massive Sturzangst, Vermeidung von Bewegung, Rückzug. Die Folge: Muskelabbau, neue Stürze, Teufelskreis. Behandlung: Angst ernst nehmen, in kleinen Schritten mobilisieren, Sicherheit vermitteln. (Tinetti 1988)",
      textB1:
        "Das **Post-Fall-Syndrom** ist die **seelische Folge** eines Sturzes: große Angst, keine Bewegung mehr, Rückzug. Dann baut der Körper Muskeln ab, es gibt mehr Stürze. Ein Teufelskreis. Was hilft: Angst ernst nehmen, ganz kleine Schritte, Sicherheit geben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Tinetti M. 1988", "DNQP Sturzprophylaxe 2013"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-sturzangst",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Post-Fall-Syndrom und Sturzangst",
          body: "Das **Post-Fall-Syndrom** beschreibt die **psychische Reaktion** auf einen Sturz: pathologische Sturzangst, Vermeidungsverhalten, Rückzug. Die Folge ist ein **Teufelskreis**:\n\n**Sturz → Angst → Vermeidung → Muskelabbau → neuer Sturz → noch mehr Angst**\n\nNach Tinetti (1988) entwickeln bis zu **50 %** der älteren Menschen nach einem Sturz diese Angst.\n\n**Pflegerische Maßnahmen:**\n\n1. **Angst ernst nehmen** — nicht abtun. Angst ist ein Symptom.\n2. **Ursachen klären** — Sturz aufarbeiten\n3. **Kleine Schritte** — erst Bettkante, dann Stehen, dann kurze Strecken. Erfolgserlebnisse aufbauen.\n4. **Sicherheit vermitteln** — Körperkontakt, ruhige Stimme, klare Ansagen\n5. **Hilfsmittel geben** — Rollator ist Sicherheit, keine Schwäche\n6. **Nicht überfordern** — aber auch nicht unterfordern\n7. **Assessment** — mit Falls-Efficacy-Scale die Angst messbar machen\n\n**Keine Zwangsmobilisation.** Das verschlimmert die Angst. (Tinetti 1988)",
          glossarBegriffe: ["Post-Fall-Syndrom"],
        },
        contentB1: {
          title: "Post-Fall-Syndrom und Sturzangst",
          body: "Das **Post-Fall-Syndrom** ist die **Angst nach einem Sturz**.\n\n**So läuft der Teufelskreis:**\n\nSturz → Angst → keine Bewegung → Muskeln weg → neuer Sturz → noch mehr Angst\n\nNach Tinetti (1988) bekommen bis zu **50 %** der älteren Menschen nach einem Sturz diese Angst.\n\n**Was du tun kannst:**\n\n1. **Angst ernst nehmen** — nicht sagen 'Das wird schon'. Angst ist ein Symptom.\n2. **Sturz besprechen** — Was ist passiert? Was hat geholfen?\n3. **Kleine Schritte** — erst Bettkante, dann Stehen mit Halt, dann kurze Strecken.\n4. **Sicherheit geben** — Körperkontakt, ruhige Stimme, klare Sätze\n5. **Hilfsmittel geben** — Rollator ist **Sicherheit**, keine Schwäche\n6. **Nicht zu viel auf einmal** — aber **auch nicht zu wenig**\n7. **Assessment** — Falls-Efficacy-Test\n\n**Niemals mit Zwang mobilisieren.** Das macht die Angst schlimmer.",
          glossarBegriffe: ["Post-Fall-Syndrom"],
        },
      },
    },
    glossarBegriffe: ["Post-Fall-Syndrom"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: mobilisation-schmerzen-kreislauf (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-schmerzen-kreislauf",
    themaId: "mobilisation",
    titel: "Mobilisation bei Schmerzen und Kreislaufüberwachung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du willst Herrn P. (Zustand nach Knie-OP gestern) zum ersten Mal aufstehen lassen. Er hat NRS 5. Was machst du — und was überwachst du während der Mobilisation?",
      antwort:
        "Vor Mobilisation: NRS ≤ 3 anstreben (ggf. Schmerzmittel 30-60 Min vorher). Während Mobilisation: Kreislauf überwachen (Blässe, Schwitzen, Schwindel), RR und Puls vorher und an der Bettkante messen. Abbruchkriterien: RR-Abfall > 20 mmHg systolisch, Schwindel, Synkope.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Vor Mobilisation: **NRS ≤ 3** anstreben (ggf. Schmerzmittel 30-60 Min vorher). Während Mobilisation: **Kreislauf überwachen** (Blässe, Schwitzen, Schwindel), RR und Puls vorher und an der Bettkante messen. Abbruchkriterien: RR-Abfall > 20 mmHg systolisch, Schwindel, Synkope.",
      textB1:
        "Vor Mobilisation: **Schmerzen niedrig** (NRS höchstens 3) — ggf. Schmerzmittel 30-60 Min vorher geben. Während: **Kreislauf prüfen** (Blässe, Schwitzen, Schwindel), RR und Puls. Abbruch bei: RR fällt stark, Schwindel, Ohnmacht.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["S3-Leitlinie Schmerz 2020", "DNQP 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-schmerzen-kreislauf",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Mobilisation bei Schmerzen und Kreislaufüberwachung",
          body: "Schmerz und Kreislauf sind die **zwei häufigsten Abbruchgründe** für eine Mobilisation — und gleichzeitig vermeidbar, wenn vorher gut geprüft wird.\n\n**Schmerzmanagement vor Mobilisation:**\n- **Schmerz erfassen** mit NRS (0-10)\n- **Ziel**: NRS ≤ 3 vor der Mobilisation (S3-Leitlinie Schmerz)\n- Bei höheren Werten: ärztlich verordnete Schmerzmittel geben, **30-60 Min** warten\n\n**Kreislaufüberwachung:**\n- **Vor Mobilisation**: RR und Puls messen (Baseline)\n- **An der Bettkante** (2-3 Min): erneut messen (**Orthostase-Check**)\n- **Während Gehstrecke**: Warnzeichen beachten: Blässe, Schwitzen (kalter Schweiß), Schwindel, Übelkeit, Puls > 120/min, Zittern der Knie\n\n**Abbruchkriterien:**\n- RR-Abfall systolisch > **20 mmHg**\n- RR-Abfall diastolisch > **10 mmHg**\n- Puls > 120/min in Ruhe\n- Synkope oder Präsynkope\n- Starke Schmerzen (NRS > 5)\n\n**Bei Abbruch:** Patient hinlegen, Beine hochlagern, Vitalwerte engmaschig messen, Arzt informieren, dokumentieren. (S3-Leitlinie Schmerz 2020)",
          glossarBegriffe: ["Orthostase-Check", "Orthostatische Dysregulation"],
        },
        contentB1: {
          title: "Mobilisation bei Schmerzen und Kreislaufüberwachung",
          body: "Schmerz und Kreislauf sind die **zwei häufigsten Gründe**, eine Mobilisation abzubrechen.\n\n**Schmerz vor der Mobilisation:**\n- **Schmerz messen** mit NRS (0-10)\n- **Ziel**: NRS höchstens 3\n- Bei mehr: **Schmerzmittel** vom Arzt geben, **30-60 Minuten** warten\n\n**Kreislauf überwachen:**\n- **Vorher**: RR und Puls messen (Ausgangswert)\n- **An der Bettkante** (2-3 Min sitzen): nochmal messen (**Orthostase-Check**)\n- **Beim Gehen**: Warnzeichen beachten: Blässe, Schwitzen (kalter Schweiß), Schwindel, Übelkeit, Puls über 120, Knie zittern\n\n**Abbruch-Gründe:**\n- RR fällt stark (mehr als 20 oben oder 10 unten)\n- Puls über 120 in Ruhe\n- Ohnmacht oder fast Ohnmacht\n- Starke Schmerzen (NRS über 5)\n\n**Bei Abbruch:** Hinlegen, Beine hoch, Vitalwerte messen, Arzt informieren, aufschreiben.",
          glossarBegriffe: ["Orthostase-Check"],
        },
      },
    },
    glossarBegriffe: ["Orthostase-Check", "Orthostatische Dysregulation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: mobilisation-beratung-ablehnung (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-beratung-ablehnung",
    themaId: "mobilisation",
    titel: "Beratung und Umgang mit Ablehnung der Mobilisation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr S., 78, lehnt die Mobilisation ab: 'Lass mich in Ruhe, ich will liegen bleiben.' Wie reagierst du? Was darfst du, was darfst du nicht — und welche ethischen Überlegungen spielen eine Rolle?",
      antwort:
        "Selbstbestimmung (§ 630d BGB) gilt auch gegen den fachlichen Rat. Pflegepflichten bei Ablehnung: aufklären (Konsequenzen), Ursache erfragen (Schmerz? Depression? Müdigkeit?), Alternativen anbieten, dokumentieren, Arzt informieren. Kein Zwang bei einwilligungsfähigen Patienten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Selbstbestimmung (§ 630d BGB) gilt auch gegen den fachlichen Rat. Pflegepflichten bei Ablehnung: **aufklären** (Konsequenzen), **Ursache erfragen** (Schmerz? Depression? Müdigkeit?), **Alternativen** anbieten, **dokumentieren**, **Arzt informieren**. **Kein Zwang** bei einwilligungsfähigen Patienten.",
      textB1:
        "Selbstbestimmung (§ 630d BGB) gilt auch, wenn Patient gegen Rat entscheidet. Bei Ablehnung: **aufklären** (was passiert, wenn nicht?), **Grund fragen** (Schmerz? Traurigkeit? Müde?), **Alternativen** geben, **aufschreiben**, **Arzt** sagen. **Kein Zwang**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-12",
        phase: 1,
        stepType: "dialog",
        bloomLevel: 5,
        kompetenzbereich: "V.1",
        quellen: ["§ 630d BGB", "§ 1906a BGB", "DNQP 2020"],
        track: "basis",
        modus: "story",
        lernziel: "ce02-mob-beratung-ablehnung",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Beratung und Umgang mit Ablehnung der Mobilisation",
          body: "Die Mobilisation ist ein **pflegerischer Vorschlag**, keine Verpflichtung des Patienten. Nach **§ 630d BGB** braucht jede pflegerische Maßnahme die **Einwilligung** des einwilligungsfähigen Patienten.\n\n**Ablehnung ist ein Signal, kein Problem:**\n\nOft verbirgt sich hinter 'Lass mich in Ruhe' ein anderes Bedürfnis:\n- **Schmerzen** (nicht benannt)\n- **Angst** (Sturzangst, Post-Fall-Syndrom)\n- **Depression** (antriebslos)\n- **Scham** (Blöße im Bett)\n- **Erschöpfung** (schlechter Schlaf)\n- **Fehlende Information** (warum überhaupt?)\n\n**Vorgehen in 5 Schritten:**\n\n1. **Zuhören, nicht widersprechen** — 'Das höre ich. Kannst du mir sagen, warum?'\n2. **Ursache erfragen** — offene Fragen stellen\n3. **Informieren** — laienverständlich über Konsequenzen aufklären\n4. **Alternativen anbieten** — 'Vielleicht nur bis zur Bettkante? Nach dem Kaffee?'\n5. **Dokumentieren und Arzt informieren** — bei wiederholter Ablehnung\n\n**Wann ist Zwang erlaubt?** Nur bei Einwilligungsunfähigkeit mit richterlichem Beschluss (§ 1906a BGB). Für eine routinemäßige Mobilisation: **nie**. (§ 630d BGB)",
          glossarBegriffe: ["Einwilligung"],
        },
        contentB1: {
          title: "Beratung und Umgang mit Ablehnung der Mobilisation",
          body: "Die Mobilisation ist ein **Angebot**, keine Pflicht. Nach **§ 630d BGB** muss der Patient **zustimmen**. Er darf Nein sagen.\n\n**Nein ist ein Signal, kein Problem:**\n\nHinter 'Lass mich in Ruhe' steckt oft etwas anderes:\n- **Schmerzen** (er sagt es nicht)\n- **Angst** (vor Stürzen)\n- **Depression** (antriebslos, traurig)\n- **Scham** (nackt im Bett)\n- **Müdigkeit** (schlechter Schlaf)\n- **Keine Infos** (warum überhaupt?)\n\n**Was du tun kannst — 5 Schritte:**\n\n1. **Zuhören, nicht streiten** — 'Ich höre dich. Sagst du mir, warum?'\n2. **Grund erfragen** — offene Fragen, ernst nehmen\n3. **Aufklären** — einfach erklären, was passiert, wenn nicht\n4. **Alternativen geben** — 'Vielleicht nur zur Bettkante? Nach dem Kaffee?'\n5. **Aufschreiben und Arzt informieren** — wenn er öfter ablehnt\n\n**Wann ist Zwang erlaubt?** Nur wenn der Patient **nicht selbst entscheiden kann** und Gefahr in Verzug ist — mit Gerichtsbeschluss. Normale Mobilisation: **nie mit Zwang**.",
          glossarBegriffe: ["Einwilligung"],
        },
      },
    },
    glossarBegriffe: ["Einwilligung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: mobilisation-plan-dokumentieren (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-plan-dokumentieren",
    themaId: "mobilisation",
    titel: "Mobilisationsplan erstellen und dokumentieren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du planst die Mobilisation von Frau M., 70 Jahre, 3 Tage nach Hüft-TEP. Was gehört alles in den Mobilisationsplan? Formuliere ein SMART-Ziel für die erste Woche.",
      antwort:
        "Der Mobilisationsplan folgt dem 6-Schritte-Pflegeprozess: Assessment (TUG, Tinetti, Barthel) → SMART-Ziele mit Patient → konkrete Maßnahmen (Zeit, Hilfsmittel, Begleitung) → Durchführung → Evaluation → Dokumentation. PESR-Schema bei Pflegediagnose. (DNQP 2020)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der **Mobilisationsplan** folgt dem 6-Schritte-Pflegeprozess: Assessment (TUG, Tinetti, Barthel) → SMART-Ziele mit Patient → konkrete Maßnahmen (Zeit, Hilfsmittel, Begleitung) → Durchführung → Evaluation → Dokumentation. **PESR-Schema** bei Pflegediagnose. (DNQP 2020)",
      textB1:
        "Der **Mobilisationsplan** hat 6 Schritte: 1. Einschätzen (Tinetti, TUG, Barthel), 2. **SMART-Ziele** mit dem Patienten, 3. Maßnahmen planen (Zeit, Hilfsmittel, wer?), 4. Machen, 5. Prüfen, 6. Aufschreiben. Pflegediagnose nach **PESR** formulieren.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2020", "Fiechter V./Meier M. 1981"],
        track: "basis",
        modus: "schreibtisch",
        lernziel: "ce02-mob-plan-dokumentieren",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Mobilisationsplan erstellen und dokumentieren",
          body: "Der **Mobilisationsplan** ist Teil des Pflegeprozesses nach Fiechter/Meier (1981) und umfasst 6 Schritte:\n\n**1. Assessment:**\n- **Tinetti-Test**, **Timed Up and Go (TUG)**, **Barthel-Index**, **Esslinger Transferskala**\n- **Ressourcen-orientiert** dokumentieren: 'Kann selbstständig im Bett drehen, benötigt Unterstützung beim Aufsetzen'\n\n**2. Pflegediagnose (PESR-Schema):**\n- **P**roblem: z. B. 'Beeinträchtigte Mobilität' (NANDA 00085)\n- **Ä**tiologie: 'bedingt durch Hüft-TEP rechts vor 3 Tagen, Schmerzen bei Belastung'\n- **S**ymptome: 'Kann ohne Hilfe nicht aufstehen, NRS 4 bei Belastung'\n- **R**essourcen: 'Motiviert, gute Armkraft, Angehörige unterstützen'\n\n**3. SMART-Ziele** (gemeinsam mit Patient):\nBeispiel: 'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator und Begleitung schmerzarm (NRS ≤ 3).'\n\n**4. Maßnahmen:** Wer, Wann, Wie oft, Wie (Hilfsmittel), Womit\n\n**5. Evaluation:** Tägliche Kontrolle: Wird das Ziel erreicht? Plan anpassen.\n\n**6. Dokumentation:**\n- **Pflegebericht** (chronologisch, sachlich): 'Frau M. mobilisiert mit Rollator, 7 Schritte, schmerzarm, NRS 2, gutes Befinden.'\n\n**Grundsatz:** 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.' (DNQP 2020)",
          glossarBegriffe: ["Pflegeprozess (nach Fiechter/Meier)", "PESR-Schema", "SMART-Ziel"],
        },
        contentB1: {
          title: "Mobilisationsplan erstellen und dokumentieren",
          body: "Der **Mobilisationsplan** hat 6 Schritte (nach Fiechter/Meier, 1981):\n\n**1. Einschätzen:**\n- Tests: **Tinetti**, **TUG**, **Barthel**\n- **Ressourcen** aufschreiben: 'Kann selbst im Bett drehen, braucht Hilfe beim Aufsetzen'\n\n**2. Pflegediagnose (PESR):**\n- **P**roblem: 'Bewegung eingeschränkt'\n- **Ä**tiologie: 'wegen Hüft-OP vor 3 Tagen, Schmerzen'\n- **S**ymptome: 'Kann allein nicht aufstehen, NRS 4 bei Bewegung'\n- **R**essourcen: 'Motiviert, starke Arme, Familie hilft'\n\n**3. SMART-Ziele** (mit dem Patienten):\nBeispiel: 'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator, Begleitung, schmerzarm (NRS höchstens 3).'\n\n**4. Maßnahmen:** Wer? Wann? Wie oft? Wie? Womit?\n\n**5. Prüfen:** Jeden Tag: Wird das Ziel erreicht? Plan ändern wenn nötig.\n\n**6. Aufschreiben:**\n- **Pflegebericht** (sachlich): 'Frau M. mobilisiert mit Rollator, 7 Schritte, schmerzarm, NRS 2, gut gelaunt.'\n\n**Wichtigste Regel:** 'Was nicht aufgeschrieben ist, ist nicht passiert.'",
          glossarBegriffe: ["Pflegeprozess (nach Fiechter/Meier)", "PESR-Schema", "SMART-Ziel"],
        },
      },
    },
    glossarBegriffe: ["Pflegeprozess (nach Fiechter/Meier)", "PESR-Schema", "SMART-Ziel"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: wirbelsaeule-aufbau (Bloom 2) — AP-2 LE6 #7/#8 (Bewegungsapparat)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-wirbelsaeule-aufbau",
    themaId: "mobilisation",
    titel: "Die Wirbelsäule: Aufbau, Abschnitte und Pflege-Relevanz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Drei Fragen, eine Antwort: Warum entsteht am Steißbein so leicht ein Dekubitus? Warum hebst du schwere Lasten 'aus den Knien mit geradem Rücken'? Und warum wird ein Mensch im Alter kleiner?",
      antwort:
        "Alle drei hängen am Bau der Wirbelsäule. Kreuz- und Steißbein bilden am unteren Ende einen Knochenvorsprung direkt unter der Haut — in Rückenlage eine Dekubitus-Prädilektionsstelle. Beim Heben aus den Knien bleibt die natürliche Lendenlordose erhalten, die Bandscheiben werden gleichmäßig belastet. Und im Alter nehmen die Bandscheiben weniger Wasser auf, werden flacher — die Körpergröße sinkt. (I Care Anatomie, Kap. 13.7.1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Wirbelsäule (Columna vertebralis) ist das Achsenskelett: 7 Hals- (C1-C7), 12 Brust- (Th1-Th12), 5 Lendenwirbel (L1-L5), Kreuzbein (5 verschmolzene Sakralwirbel) und Steißbein — insgesamt 32-34 Wirbel. Doppel-S-Krümmung: Hals- und Lendenlordose (nach vorn), Brust- und Sakralkyphose (nach hinten). Der Wirbelkanal schützt das Rückenmark, Bandscheiben federn als Stoßdämpfer. Die Krümmungen entstehen erst durch den aufrechten Gang; im Alter verlieren die Bandscheiben Wasser (Körpergröße sinkt, Spondylarthrose). (I Care Anatomie, Kap. 13.7.1)",
      textB1:
        "Die Wirbelsäule ist die Mittelsäule des Körpers. Sie hat 7 Halswirbel, 12 Brustwirbel, 5 Lendenwirbel, das Kreuzbein und das Steißbein. Sie ist doppelt-S-förmig gebogen. Innen läuft ein Kanal, der das Rückenmark schützt. Zwischen den Wirbeln liegen Bandscheiben — sie federn wie Stoßdämpfer. Die Biegungen entstehen erst, wenn ein Kind laufen lernt. Im Alter werden die Bandscheiben flacher — der Mensch wird kleiner.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-14-wirbelsaeule",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["I Care Anatomie, Kap. 13.7.1 (Wirbelsäule / Columna vertebralis)", "I Care Anatomie, Kap. 13 (Bandscheiben, Spondylarthrose)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-wirbelsaeule",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Die Wirbelsäule: Aufbau, Abschnitte und Pflege-Relevanz",
          body: "Die **Wirbelsäule (Columna vertebralis)** ist das **Achsenskelett**: Sie verbindet Kopf, Ober- und Unterkörper, ermöglicht die Rumpfbewegungen und **umschließt schützend das Rückenmark** (I Care Anatomie, Kap. 13.7.1).\n\n**Die 5 Abschnitte (von oben nach unten):**\n- **Halswirbelsäule (HWS):** 7 Halswirbel (C1-C7)\n- **Brustwirbelsäule (BWS):** 12 Brustwirbel (Th1-Th12)\n- **Lendenwirbelsäule (LWS):** 5 Lendenwirbel (L1-L5)\n- **Kreuzbein (Os sacrum):** 5 zu einem Knochen verschmolzene Sakralwirbel — verbindet die Wirbelsäule mit dem Becken\n- **Steißbein (Os coccygis):** 3-5 zurückgebildete Wirbel\n\nInsgesamt **32-34 Wirbel**. Bis auf Atlas (C1) und Axis (C2) folgen alle dem gleichen Bauprinzip: **Wirbelkörper, Wirbelbogen, Dorn- und Querfortsätze, Gelenkfortsätze**. Die übereinanderliegenden Wirbellöcher bilden den **Wirbelkanal**, der das **Rückenmark** enthält. Atlas (ringförmig) und Axis (mit Dens) ermöglichen das **Drehen und Nicken des Kopfes**.\n\n**Die Doppel-S-Form:** Hals- und Lendenwirbelsäule sind nach vorn gekrümmt (**Lordose**), Brust- und Kreuzbein nach hinten (**Kyphose**). *Merkhilfe: Lordose = L = an HaLs und Lende.* Die Krümmungen federn Stöße ab.\n\n**Bandscheiben:** Zwischen den Wirbelkörpern liegen die Bandscheiben als **Stoßdämpfer**. Unter Belastung (Stehen, Sitzen) geben sie Wasser ab — die Körpergröße kann **tagsüber um bis zu 2 cm** abnehmen und regeneriert nachts im Liegen.\n\n**Entwicklung:** Die Krümmungen **entstehen erst durch den aufrechten Gang**. Beim Säugling ist die Wirbelsäule noch relativ gerade (leichte Gesamt-Kyphose). Die Halslordose bildet sich mit der **Kopfkontrolle**, die Lendenlordose mit dem **freien Laufen**.\n\n**Im Alter:** Die Bandscheiben können weniger Wasser aufnehmen, werden **flacher** — die **Körpergröße nimmt ab**, und durch die Mehrbelastung der kleinen Wirbelgelenke entsteht häufig eine **Spondylarthrose** (Verschleiß), die bei Älteren normal ist.\n\n**Pflege-Relevanz:**\n- **Kreuz- und Steißbein** sind Knochenvorsprünge direkt unter der Haut → in Rückenlage eine **Dekubitus-Prädilektionsstelle**\n- **Dein eigener Rücken:** Lasten **aus den Knien mit geradem Rücken** heben — so bleibt die Lendenlordose erhalten und die Bandscheiben werden gleichmäßig belastet (Vorbeugung von Hexenschuss/Bandscheibenschaden)\n- **Bei HWS-Problemen** (nach OP, Rheuma): **keine Überstreckung** des Kopfes (z.B. bei der Haarwäsche) (I Care Anatomie, Kap. 13.7.1)",
          glossarBegriffe: ["Wirbelsäule (Columna vertebralis)", "Lordose und Kyphose", "Bandscheibe"],
        },
        contentB1: {
          title: "Die Wirbelsäule: Aufbau, Abschnitte und Pflege-Relevanz",
          body: "Die **Wirbelsäule** ist die Mittelsäule des Körpers. Sie verbindet Kopf, Oberkörper und Unterkörper und **schützt das Rückenmark** (I Care Anatomie, Kap. 13.7.1).\n\n**Die 5 Abschnitte (von oben nach unten):**\n- **Halswirbelsäule:** 7 Halswirbel (C1-C7)\n- **Brustwirbelsäule:** 12 Brustwirbel (Th1-Th12)\n- **Lendenwirbelsäule:** 5 Lendenwirbel (L1-L5)\n- **Kreuzbein:** 5 zusammengewachsene Wirbel — verbindet die Wirbelsäule mit dem Becken\n- **Steißbein:** 3-5 kleine Wirbel-Reste\n\nZusammen sind das **32-34 Wirbel**. Innen bilden die Wirbel einen Kanal — darin liegt das **Rückenmark**. Die obersten zwei Halswirbel (Atlas und Axis) lassen den **Kopf drehen und nicken**.\n\n**Die Doppel-S-Form:** Hals und Lende sind nach vorn gebogen (**Lordose**), Brust und Kreuzbein nach hinten (**Kyphose**). *Merke: Lordose = L = HaLs und Lende.* Die Biegung federt Stöße ab.\n\n**Bandscheiben:** Zwischen den Wirbeln liegen Bandscheiben — sie federn wie **Stoßdämpfer**. Tagsüber drückt es Wasser heraus (man wird bis zu 2 cm kleiner), nachts füllen sie sich wieder.\n\n**Entwicklung:** Die Biegungen kommen erst, wenn das Kind **aufrecht geht**. Ein Baby hat eine fast gerade Wirbelsäule. Die Halsbiegung kommt mit dem **Kopfhalten**, die Lendenbiegung mit dem **Laufen**.\n\n**Im Alter:** Die Bandscheiben werden **flacher** — der Mensch wird kleiner, und die kleinen Gelenke nutzen sich ab (Spondylarthrose).\n\n**Wichtig für die Pflege:**\n- **Kreuz- und Steißbein** stehen unter der Haut hervor → in Rückenlage **Dekubitus-Gefahr**\n- **Dein Rücken:** schwer heben **aus den Knien mit geradem Rücken**\n- **Bei HWS-Problemen:** den Kopf **nicht überstrecken**",
          glossarBegriffe: ["Wirbelsäule (Columna vertebralis)", "Lordose und Kyphose", "Bandscheibe"],
        },
      },
    },
    glossarBegriffe: ["Wirbelsäule (Columna vertebralis)", "Lordose und Kyphose", "Bandscheibe"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: gelenklehre (Bloom 2) — AP-2 LE6 #10 (Gelenktypen, Bewegungsebenen)
  // ═══════════════════════════════════════════
  {
    bausteinId: "mobilisation-gelenklehre",
    themaId: "mobilisation",
    titel: "Gelenke: Typen und Bewegungen — Grundlage für Mobilisation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum kann die Schulter in alle Richtungen kreisen, das Knie aber nur beugen und strecken? Und warum brauchst du Begriffe wie 'Flexion' oder 'Abduktion', wenn du eine Bewegungsübung dokumentierst?",
      antwort:
        "Die Bewegungsfreiheit hängt vom Gelenktyp ab: Das Schultergelenk ist ein Kugelgelenk (3 Achsen, alle Richtungen), Knie und Ellenbogen sind Scharniergelenke (1 Achse, nur beugen/strecken). Die Fachbegriffe beschreiben Bewegungen eindeutig — wichtig für Dokumentation, Bewegungsausmaß und Kontrakturprophylaxe. (I Care Anatomie, Kap. 13)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Echte Gelenke werden nach Form in 6 Typen eingeteilt: Kugelgelenk (Schulter/Hüfte, 3 Achsen), Scharniergelenk (Knie/Ellenbogen, 1 Achse), Sattelgelenk (Daumen), Eigelenk (Handgelenk), Radgelenk (Drehung Elle/Speiche), planes Gelenk (Wirbelbogengelenke). Straffe Gelenke (Amphiarthrosen) sind kaum beweglich (z.B. Kreuzbein-Darmbein-Gelenk). Bewegungen heißen u.a. Flexion/Extension, Abduktion/Adduktion, Pronation/Supination — sie laufen in der Sagittal-, Frontal- oder Transversalebene ab. (I Care Anatomie, Kap. 13)",
      textB1:
        "Gelenke gibt es in 6 Formen. Das Kugelgelenk (Schulter, Hüfte) bewegt in alle Richtungen. Das Scharniergelenk (Knie, Ellenbogen) beugt und streckt nur. Es gibt auch Sattel-, Ei-, Rad- und plane Gelenke. Manche Gelenke sind sehr fest und bewegen kaum (straffe Gelenke). Bewegungen haben Fachnamen: Flexion = beugen, Extension = strecken, Abduktion = abspreizen, Adduktion = heranführen. So kannst du Bewegungen genau aufschreiben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-mob-wb-15-gelenke",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["I Care Anatomie, Kap. 13 (Gelenktypen, Tab. 13.1 Bewegungen, Tab. 13.2 Gelenktypen)", "I Care Anatomie, Kap. 1 (Körperebenen)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-mob-gelenklehre",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Gelenke: Typen und Bewegungen",
          body: "Gelenke verbinden Knochen beweglich. Wie weit und in welche Richtung sich ein Gelenk bewegen lässt, hängt von seiner **Form** ab (I Care Anatomie, Kap. 13).\n\n**Die 6 Typen echter Gelenke (mit Gelenkspalt):**\n- **Kugelgelenk** — z.B. Schulter, Hüfte. **3 Bewegungsachsen** → größte Beweglichkeit (in alle Richtungen)\n- **Scharniergelenk** — z.B. Knie, Ellenbogen, Fingergelenke. **1 Achse** → nur Beugen und Strecken\n- **Sattelgelenk** — z.B. Daumengrundgelenk\n- **Eigelenk** — z.B. Handgelenk\n- **Radgelenk** — z.B. zwischen Elle und Speiche → Drehbewegung (Unterarm)\n- **Planes Gelenk** — z.B. Wirbelbogengelenke → kleine Verschiebungen\n\n**Straffe Gelenke (Amphiarthrosen):** durch viele straffe Bänder fest fixiert, kaum beweglich — z.B. das **Kreuzbein-Darmbein-Gelenk**.\n\n**Bewegungen haben Fachbegriffe (I Care, Tab. 13.1):**\n- **Flexion** (Beugen) / **Extension** (Strecken)\n- **Abduktion** (Abspreizen vom Körper weg) / **Adduktion** (Heranführen zum Körper)\n- **Pronation** (Einwärtsdrehung) / **Supination** (Auswärtsdrehung)\n- **Anteversion/Retroversion** (Anheben nach vorn/hinten); **Inklination/Reklination** (Wirbelsäule vor-/zurückneigen)\n\n**Bewegungsebenen:** Eine Bewegung läuft in einer der drei Körperebenen ab — **Sagittalebene** (vorne-hinten), **Frontalebene** (seitlich), **Transversalebene** (Drehung um die Längsachse).\n\n**Pflege-Relevanz:**\n- **Bewegungsübungen** (aktiv/passiv) zur **Kontrakturprophylaxe**: jedes Gelenk in seinem **physiologischen Bewegungsausmaß** bewegen — nie gegen die natürliche Achse\n- **Dokumentation:** eindeutige Begriffe ('Knie 0-90° Flexion') statt 'Bein bewegt'\n- **Transfer und Kinästhetik:** Bewegungen entlang der natürlichen Gelenkachsen führen — das schützt Patient und deinen Rücken (I Care Anatomie, Kap. 13)",
          glossarBegriffe: ["Gelenktypen", "Bewegungsebenen", "Amphiarthrose (straffes Gelenk)"],
        },
        contentB1: {
          title: "Gelenke: Typen und Bewegungen",
          body: "Gelenke verbinden Knochen so, dass sie sich bewegen können. Wie weit und wohin sich ein Gelenk bewegt, hängt von seiner **Form** ab (I Care Anatomie, Kap. 13).\n\n**Die 6 Gelenk-Formen:**\n- **Kugelgelenk** — Schulter, Hüfte. Bewegt **in alle Richtungen**\n- **Scharniergelenk** — Knie, Ellenbogen. **Nur beugen und strecken**\n- **Sattelgelenk** — Daumen\n- **Eigelenk** — Handgelenk\n- **Radgelenk** — Unterarm (Drehen)\n- **Planes Gelenk** — kleine Wirbelgelenke (kleine Verschiebung)\n\n**Straffe Gelenke** sind sehr fest und bewegen kaum — zum Beispiel das **Kreuzbein-Darmbein-Gelenk**.\n\n**Bewegungen haben Fachnamen:**\n- **Flexion** = beugen / **Extension** = strecken\n- **Abduktion** = vom Körper wegspreizen / **Adduktion** = an den Körper heranführen\n- **Pronation/Supination** = nach innen/außen drehen\n\n**Bewegungsebenen:** vorne-hinten (Sagittal), seitlich (Frontal), Drehung (Transversal).\n\n**Wichtig für die Pflege:**\n- **Bewegungsübungen** gegen **Kontrakturen** (Versteifung): jedes Gelenk in seinem normalen Umfang bewegen — **nie gegen die natürliche Richtung**\n- **Aufschreiben** mit klaren Begriffen ('Knie 0-90° Flexion')\n- **Beim Transfer**: Gelenke in ihre natürliche Richtung bewegen — das schützt den Patienten und deinen Rücken",
          glossarBegriffe: ["Gelenktypen", "Bewegungsebenen", "Amphiarthrose (straffes Gelenk)"],
        },
      },
    },
    glossarBegriffe: ["Gelenktypen", "Bewegungsebenen", "Amphiarthrose (straffes Gelenk)"],
    karteikarten: [],
  },
];

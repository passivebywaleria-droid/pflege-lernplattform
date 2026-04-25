# Phase 4 — Maßnahmen durchführen

**situationId:** ls-schmidt-adipositas
**Phase:** durchfuehren
**Zeit:** ~35–50 Min
**Bloom:** B4–B5
**Kern-Frage:** Wie führe ich ein Ernährungsgespräch, das nicht belehrt sondern verbindet? Und wie pflege ich die Haut sicher — auch dort, wo es unangenehm ist?
**Steps:** 8 (inkl. 1 großes Branching + 1 kleines Branching)

---

## Kontext

Es ist 09:45 Uhr. Morgenpflege ist abgeschlossen. Frau Schmidt liegt frisch gewaschen im Bett, wirkt etwas entspannter. Du setzt dich auf den Stuhl. Du weißt: Die Ernährungsberaterin kommt am Nachmittag — ihr Gespräch jetzt ist die Vorbereitung, nicht der Ersatz. Deine Aufgabe: Frau Schmidt verstehen, nicht erziehen.

**kontextB1:** Es ist 09:45 Uhr. Die Morgenpflege ist fertig.
Frau Schmidt liegt sauber und frisch im Bett. Sie wirkt ruhiger.
Du setzt dich auf den Stuhl neben ihr Bett.
Du weißt: Heute Nachmittag kommt die Ernährungs-Beraterin.
Dein Gespräch jetzt ist eine Vorbereitung — kein Ersatz.
Deine Aufgabe: Frau Schmidt verstehen. Nicht erziehen.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.1 | `dur-01-haut-hautfalten` | **sorting** | B4 | Hautpflege Hautfalten korrekt durchführen. Frau Schmidt ist kooperativ. Karten sortieren: [Handschuhe anziehen, Falte anheben] → [Inspektion: Rötung? Feuchtigkeit? Geruch?] → [Trocken tupfen (nicht reiben!) mit weichem Tuch] → [Hautschutzpräparat dünn auftragen wenn keine offene Wunde] → [Befund sofort notieren]. Bloom 4: Handlungsplanung + Risikobewusstsein (Reihenfolge hat Konsequenzen). Falsch-Feedback bei „Reiben": Reibung erhöht Verletzungsgefahr bei bereits sensibilisierter Haut. (AWMF Leitlinie Intertrigo DDG 2022) | pflege |
| 4.2 | `dur-02-makronährstoffe-erklaert` | **text` (displayFormat: `analogy`) | B3 | Erklär-Step: Makronährstoffe verständlich erklärt — als Vorbereitung auf das Gespräch mit Frau Schmidt. Analogie: Kohlenhydrate = Kurzzeit-Kraftstoff, Fette = Langzeit-Reserve, Proteine = Baumaterial. Kurzer C1-Text (~170 Wörter): Warum Protein für Frau Schmidt so wichtig ist — Albumin-Mangel, Wundheilung, Immunabwehr. DGE-Empfehlung für Erwachsene: 0,8 g Protein pro kg Körpergewicht täglich (DGE D-A-CH 2024), bei Erkrankung oft höher nach ärztlicher Absprache. Fertigpizza: viel Kohlenhydrat, viel Fett, wenig Protein. | krankheitslehre |
| 4.3 | `dur-03-ernaehrungsgespraech-hauptbranching` | **branching** (GROSSES Branching, 3 Pfade + Re-Entry) | B5 | **HAUPT-BRANCHING.** Du beginnst das Gespräch mit Frau Schmidt. _„Frau Schmidt, ich würde gerne mit Ihnen über Ihre Ernährung sprechen. Nicht um zu kritisieren — sondern um zu verstehen."_ Frau Schmidt sagt: **Zitat Z5:** _„Salat? Ich bin doch kein Kaninchen. Aber wenn Sie sagen, was ich konkret machen soll — ich mein's ernst."_ **Du wählst deinen Ansatz:** Pfad A: _„Super, dann fangen wir mit einer Diät-Liste an. Kein Weißbrot, keine Pizza, kein Zucker..."_ → Frau Schmidt schaltet innerlich ab. Feedback: Verbotslisten aktivieren Abwehr. Ernährungsumstellung braucht Biographie-Verständnis, nicht Verbote. → Re-Entry: Erkläre zuerst. Pfad B: _„Was essen Sie zuhause so — erzählen Sie mir mal von einem normalen Tag."_ → richtiger Pfad. Frau Schmidt öffnet sich. Sie erzählt von Fertigessen, vom Alleine-Essen, davon dass Kochen keine Freude mehr macht. → Weiter zu Step 4.4. Pfad C: _„Das überlasse ich lieber der Ernährungsberaterin am Nachmittag. Ich sage ihr dann was Sie gesagt haben."_ → Feedback: Pflege ist Teil des Teams, nicht Durchlaufstation. Erste Beziehung zu Thema entsteht jetzt, nicht nachmittags. → Re-Entry. **Trigger für Baustein `ernaehrungsgrundlagen-beratungsgespraech`.** | pflege |
| 4.4 | `dur-04-protein-konkret` | **categorize` | B4 | Nach Pfad B: Frau Schmidt hat erzählt. Jetzt bringst du konkrete Informationen. Kategorisierungsaufgabe (gleichzeitig für den Schüler als Lernformat): Was enthält viel Protein? Karten sortieren in „hoher Proteingehalt" vs. „niedriger Proteingehalt": Fertigpizza (niedrig), Hüttenkäse 200g (hoch: ~26g), Ei (hoch: ~6g), Weißbrot (niedrig), Hähnchenbrustfilet 100g (hoch: ~31g), Kartoffeln (mittel), Vollkornbrot (mittel), Naturjoghurt (hoch: ~10g pro 150g). Frau Schmidt: „Das alles esse ich auch, nur in anderen Mengen." Didaktisch: Keine Verbote — Mengen verschieben. Quelle: (DGE D-A-CH 2024) | krankheitslehre |
| 4.5 | `dur-05-diabetes-ernaehrung` | **mc` (Single-Choice) | B4 | _„Was ist die wichtigste Ernährungsempfehlung bei Diabetes Typ 2 für Frau Schmidt?"_ A) Keine Kohlenhydrate essen — strikte ketogene Ernährung. B) Kohlenhydrate über den Tag verteilen, komplexe Kohlenhydrate bevorzugen, Süßgetränke meiden (DDG Praxisempfehlungen 2023). C) Fette stark reduzieren — Fette erhöhen den Blutzucker. D) Proteine meiden — zu viel Protein belastet die Nieren. **Richtig: B.** Falsch-Feedback bei A: Keto ist bei Typ-2-Diabetes nicht generell empfohlen und nicht für alle Patienten geeignet — immer mit Diabetologen besprechen. Falsch-Feedback bei C: Fette erhöhen den BZ nicht direkt (keine Glukose), können aber indirekt über Gewicht und Insulinresistenz wirken. Falsch-Feedback bei D: Protein ist bei Frau Schmidt gerade das, was fehlt — Nierenbelastung ist erst relevant bei fortgeschrittener Nephropathie. | krankheitslehre |
| 4.6 | `dur-06-fuss-arztmeldung` | **chatSim` | B5 | Chat-Simulation: Du meldest den Fuß-Befund dem Stationsarzt. Du tippst eine kurze Nachricht in die Simulation: Was meldest du, an wen, warum jetzt? Erwartete Elemente: Patientenname + Zimmer, Befund (Rissbildung plantar, verdickte Nägel, kein Ulkus, Wagner 1), Deine Einschätzung (diabetisches Fußsyndrom → Podologe nötig, Pflege darf nicht schneiden), deine Bitte (Podologen-Überweisung). KI-Feedback: Vollständigkeit, Dringlichkeit richtig eingeschätzt, DARF-NICHT-Begründung genannt? | pflege |
| 4.7 | `dur-07-bz-postprandial` | **calculation` | B3 | Rechenaufgabe: Frau Schmidt hat heute Mittag gegessen und du misst den BZ 2h danach: 254 mg/dl. Zielwert postprandial: < 180 mg/dl (DDG 2023). Um wie viel mg/dl weicht der aktuelle Wert vom Ziel ab? (74 mg/dl). Was bedeutet das — informierst du den Arzt? Ja, weil Zielwert deutlich überschritten und Trend wichtig für Metformin-Dosierung. Bloom 3: Berechnen + Handlungsschluss. | pflege |
| 4.8 | `dur-08-inkontinenz-versorgung-kleinbranching` | **branching` (Klein-Branching) | B5 | Frau Schmidt sagt beim Wechsel der Inkontinenzversorgung plötzlich: _„Ich möchte das selbst machen. Ich bin nicht hilflos."_ Was tust du? A) _„Das geht nicht, wir müssen das dokumentieren, also machen wir es."_ → Feedback: Autonomie verletzt, rechtlich falsch. Frau Schmidt hat das Recht auf Selbstpflege soweit möglich (§ 2 PflBG — ressourcenorientiert). B) _„Natürlich. Zeigen Sie mir, wie Sie es machen — ich helfe nur wenn Sie wollen."_ → richtiger Pfad. Frau Schmidt macht es selbst, du unterstützt dezent und beobachtest ob sie es schafft. C) Schweigen und abwarten. → Feedback: Ambiguität ist keine Entscheidung — Frau Schmidt braucht eine Reaktion, keine Pause. | pflege |

---

## Optionale Steps (Sequencer wählt)

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 4.9 | `dur-09-motivierende-gespraechsfuehrung` | **text` (displayFormat: `checklist`) | B2 | B1-Schüler | Grundprinzipien motivierender Gesprächsführung bei Ernährungsthemen: 1) Fragen statt sagen. 2) Ambivalenz normalisieren. 3) Kleine Schritte stärken. 4) Nicht urteilen. |
| 4.10 | `dur-10-ernaehrungsprotokoll-beispiel` | **reveal` | B3 | Mittlere | Beispiel-Ernährungsprotokoll: Was isst Frau Schmidt laut eigener Auskunft? Ergebnis-Reveal: Gesamtkalorien OK (ca. 2.200 kcal), Protein aber nur 42g/Tag (Bedarf ca. 72g/Tag bei 90 kg Idealgewicht). Zahlenreveal macht Paradox greifbar. |

---

## Komplikationen

| # | Trigger | Beschreibung | Step-Typ |
|---|---------|-------------|----------|
| K1 | nach dur-01 (Hautfalte sehr feucht mit Rötung) | Mögliche beginnende Intertrigo — Branching: Wann Arzt rufen vs. Pflege behandeln? | branching |
| K2 | nach dur-03 Pfad A | Frau Schmidt will das Gespräch abbrechen: „Ich weiß selbst was ich essen soll." — Dialog-Step: Wie gehst du damit um? | dialog |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| dur-03-pfad-A (Verbotsliste) | `ernaehrungsgrundlagen-beratungsgespraech` | Stufe 2–3 |
| dur-04-sortierung-Fehler | `ernaehrungsgrundlagen-makronährstoffe` | Stufe 2–3 |
| dur-05-falsch (A) | `ernaehrungsgrundlagen-diabeteskost` | Stufe 3 |
| dur-06-chatSim-unvollständig | `ganzkörperpflege-diabetischer-fuss` | Stufe 3 (Pflicht-Wiederholung) |

---

---

## B1-Versionen der Kern-Steps

### Step 4.1 — bodyB1
Haut-Pflege der Haut-Falten — bringe in die richtige Reihenfolge:
1. Handschuhe anziehen, Falte vorsichtig auseinander halten
2. Schauen: Ist die Haut gerötet? Feucht? Riecht sie?
3. Trocken tupfen mit einem weichen Tuch — nicht reiben! Reiben verletzt die Haut.
4. Haut-Schutz-Creme dünn auftragen (nur wenn keine offene Wunde)
5. Befund sofort notieren: Was hast du gesehen?
Falsch bei "Reiben": Das schadet der Haut. Die Haut ist dort schon empfindlich.

### Step 4.2 — bodyB1
Makro-Nährstoffe (= Haupt-Nährstoffe) einfach erklärt:
- **Kohlenhydrate** (= Zucker und Stärke) = schnelle Energie. Zum Beispiel: Brot, Nudeln, Reis.
- **Fette** = lang andauernde Energie. Zum Beispiel: Öl, Käse, Nüsse.
- **Protein** (= Eiweiß) = Baumaterial für den Körper. Zum Beispiel: Fleisch, Eier, Hülsenfrüchte.
Frau Schmidt braucht mehr Protein. Warum?
Protein hilft: Wunden heilen, Immunsystem stärken, Ödeme (= Wasser-Einlagerungen) verhindern.
Eine Fertig-Pizza hat viel Kohlenhydrate und Fett — aber wenig Protein.
Empfehlung (DGE 2024): Erwachsene brauchen ca. 0,8 g Protein pro kg Körpergewicht pro Tag.

### Step 4.3 — bodyB1 (Haupt-Branching)
Du sagst: "Frau Schmidt, darf ich über das Essen sprechen? Nicht um zu kritisieren."
Du sagst weiter: "Ich möchte nur verstehen."
Frau Schmidt sagt: "Salat? Ich bin kein Kaninchen."
Sie sagt dann: "Aber wenn Sie sagen was ich machen soll — ich mein's ernst."
Du wählst deinen Ansatz:
**Pfad A:** "Dann fangen wir mit Verboten an. Kein Weißbrot, keine Pizza, kein Zucker..."
→ Frau Schmidt hört innerlich auf zu zuhören. Verbots-Listen helfen nicht.
→ Versuche es nochmal: Frage zuerst — erkläre danach.
**Pfad B:** "Was essen Sie zuhause so? Erzählen Sie mir mal von einem normalen Tag." ← Das ist richtig!
→ Frau Schmidt erzählt. Sie isst Fertig-Essen. Sie kocht nicht mehr gerne — seit der Scheidung.
→ Das ist wichtig! Du verstehst jetzt warum.
**Pfad C:** "Das mache ich lieber der Ernährungs-Beraterin. Die kommt Nachmittag."
→ Nein! Die erste Beziehung zum Thema entsteht JETZT. Nicht am Nachmittag.

### Step 4.4 — bodyB1
Was hat viel Protein? Sortiere:
**Viel Protein:** Hüttenkäse (26 g pro 200 g), Ei (6 g pro Stück), Hähnchen-Brust (31 g pro 100 g), Naturjoghurt (10 g pro 150 g)
**Wenig Protein:** Fertig-Pizza, Weißbrot
**Mittel:** Kartoffeln, Vollkornbrot
Frau Schmidt: "Das esse ich auch — nur in anderen Mengen."
Das ist gut! Du musst nichts verbieten. Mengen verschieben reicht.

### Step 4.5 — bodyB1
Was ist die wichtigste Ernährungs-Empfehlung bei Diabetes Typ 2?
A) Keine Kohlenhydrate essen — strikte Diät.
B) Kohlenhydrate über den Tag verteilen. Lieber Vollkorn als Weißbrot. Keine Süßgetränke. ← Das ist richtig!
C) Fette stark reduzieren — Fette erhöhen den Blutzucker.
D) Protein (= Eiweiß) meiden — das belastet die Nieren.
**Richtig ist B.** Gleichmäßige Kohlenhydrate = gleichmäßiger Blutzucker.

### Step 4.6 — bodyB1
Du meldest den Fuß-Befund dem Stationsarzt. Was schreibst du?
Wichtige Punkte:
- Name und Zimmer: Frau Schmidt, Zimmer 8
- Befund: Trockene, rissige Haut an der Fußsohle. Verdickte Nägel. Keine offene Wunde. Wagner-Kategorie 1.
- Deine Einschätzung: Diabetisches Fußsyndrom — Podologe (= Fußpflege-Spezialist) nötig. Pflege darf Nägel NICHT schneiden.
- Deine Bitte: Bitte eine Überweisung zum Podologen anordnen.
KI prüft: Hast du alle Punkte genannt? Ist die Dringlichkeit klar?

### Step 4.7 — bodyB1
Frau Schmidt hat heute Mittag gegessen. Du misst den Blutzucker 2 Stunden danach.
Ergebnis: 254 mg/dl.
Ziel nach dem Essen: unter 180 mg/dl.
Rechne: 254 mg/dl − 180 mg/dl = **74 mg/dl** über dem Ziel.
Was machst du? Du informierst den Arzt.
Warum? Der Wert ist deutlich zu hoch. Der Arzt muss prüfen ob Metformin ausreicht.

### Step 4.8 — bodyB1 (Klein-Branching)
Frau Schmidt sagt beim Wechsel der Inkontinenz-Versorgung: "Ich möchte das selbst machen. Ich bin nicht hilflos."
Was tust du?
A) "Das geht nicht. Wir müssen das dokumentieren."
   → Nein! Frau Schmidt hat das Recht, selbst zu entscheiden. Das ist ihr Körper.
B) "Natürlich. Zeigen Sie mir wie Sie es machen." ← Das ist richtig!
   Du sagst: "Ich helfe nur wenn Sie möchten."
   Du beobachtest diskret. Frau Schmidt macht es selbst.
C) Du sagst nichts und wartest.
   → Nein! Frau Schmidt braucht eine Antwort.

---

## Komplikations-Texte B1

### K1 — situationB1
Du schaust die Haut-Falte unter der Brust an.
Die Falte ist sehr feucht und die Haut ist gerötet.
Das könnte eine beginnende Intertrigo sein (= Entzündung in Haut-Falten).
Was tust du jetzt: Arzt rufen oder selbst behandeln?
Pflege darf: trocknen, beobachten, dokumentieren, Haut-Schutz auftragen.
Pflege muss Arzt informieren wenn: die Haut nässt, riecht oder offene Stellen hat.

### K2 — situationB1
Nach Pfad A sagt Frau Schmidt: "Ich weiß selbst was ich essen soll."
Sie will das Gespräch beenden.
Was tust du?
Versuche ruhig: "Ich möchte Sie nicht belehren. Ich möchte verstehen wie es bei Ihnen zuhause ist."
Verbote wirken nicht. Verstehen wirkt.

---

## Phase-4-Abschluss

_Zwischenseite:_ „Frau Schmidt hat heute mehr geredet als in drei Tagen zuvor. Sie hat erklärt warum Salat-Verbote nicht helfen, du hast erklärt warum Protein wichtig ist. Der Fuß-Befund ist gemeldet. Die Haut ist gepflegt. Zeit für die Frage: Hat das was gebracht?"

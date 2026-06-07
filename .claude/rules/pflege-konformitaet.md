# Pflege-Konformität — Pflicht-Patterns für Content

> Wird automatisch bei jeder Content-Erstellung geladen. Verstöße sind K.O.-Kriterium im pflege-validator-Agent.

## Grundprinzip

**Werte ≠ Fachlichkeit.** „Würde wahren", „Sandwich-Feedback", „Validierung" sind echte Pflege-Werte — aber sie ersetzen NICHT fachliche Korrektheit. Ein KI-Generator optimiert leicht auf „klingt empathisch" statt „ist pflegerisch korrekt". Genau das soll diese Regel verhindern.

## Anti-Patterns (NIEMALS so schreiben)

| Anti-Pattern | Warum falsch | Korrekt |
|--------------|-------------|---------|
| „Indirektes Licht / gedämpftes Licht / kein Schockmoment" beim Sturz | Verletzungsbeurteilung braucht volle Sicht (DNQP Sturz, ABCDE) | „Licht voll einschalten — hell genug für Verletzungs-Inspektion, aber nicht direkt blendend" |
| „NRS 5/6, ok, im Rahmen" o. ä. | NRS ≥ 4 ist mod. Schmerz, dokumentations- und interventionspflichtig (DNQP Schmerz) | „NRS X — ist nicht 'wenig'. Im SBAR-Anruf erwähnen, Bedarfsanalgesie ansprechen." |
| „Ich führe die Bewegung / ziehe Sie hoch / hebe Sie" | Kinästhetik nach Hatch/Maietta = Patient bewegt sich selbst, Pflege begleitet | „Sie machen die Bewegung, ich begleite und sichere. Sie sagen das Tempo." |
| „3 Min warten = Orthostase-Prävention" ohne RR-Messung | Schellong-Test: RR liegen → ≥1 Min sitzen → RR sitzen → erst dann Aufstehen | „Schellong abgewartet: RR liegen X/Y, RR sitzen X/Y. Kreislauf stabil." |
| „Unter den Achseln greifen" | Risiko Schultergelenk + Pflege-Rücken — kinästhetisch falsch | Seitlich am Becken/Rumpf sichern, Patient bewegt selbst |
| „Sie haben Glück, ist ja nichts passiert" | Fehlinformation vor Assessment, rechtlich/ethisch problematisch | Erst Verletzung ausschließen, dann sprechen |
| Bettgitter beidseitig hoch ohne ärztliche Anordnung | Gilt rechtlich als Fixierung | Einseitig + Patient kann selbst raus |
| „Sie sagt:" als Phase-context-Ende ohne Patientenzitat | Lässt User raten was Patient sagt | Direktes Zitat in `"..."` einfügen |

## Pflicht-Muster pro Step-Typ

### Multiple Choice (`mc`)
- Score-3-Option = pflegefachlich korrekte Antwort, mit Standard-Verweis im `explanation`
- Distraktoren = realistische Anfänger-Fehler, keine Karikaturen
- `explanation` für JEDE Option — nicht nur die richtigen
- Bei mehreren „richtigen" Antworten: Reihenfolge/Priorität explizit begründen

### Sorting / Sequencing
- Reihenfolge muss einem Standard folgen (DNQP, ABCDE, SBAR, Kinästhetik-Stufen)
- Im body-Text die Quelle nennen
- Bei Mehrdeutigkeit: nur EINE Reihenfolge zulassen oder Toleranz dokumentieren

### Categorize / Pflegewagen
- Kategorisierungs-Logik konsistent zur Realität (steril/unsteril/sauber)
- Distraktoren plausibel (was Anfänger fälschlich für richtig halten)
- KEIN Item das in einem Step „korrekt" und im nächsten „falsch" ist (siehe Cross-Step-Konsistenz unten)

### Highlight / ErrorSpot
- Markierte Stellen müssen tatsächlich Fehler/Schlüssel-Informationen sein
- Erklärung pro Segment — nicht nur „falsch", sondern WAS und WARUM falsch

### Branching
- Score-Pfade müssen wirklich zu unterschiedlichen Konsequenzen führen
- Patient-Reaktion realistisch zur Pflege-Antwort

### TrueFalse
- Aussagen unzweideutig — nicht „ist meistens so"
- Erklärung mit Standard-Verweis

### Freetext (KI-bewertet)
- Bewertungskriterien fachlich orientiert (z.B. „SBAR alle 4 Elemente?")
- Musterantwort vorbildlich, mit Standards-Bezug

### Selfrating / Confidence
- KEINE Wahr/Falsch-Validierung — Selbsteinschätzung ist subjektiv
- Sprache nicht bewertend („Sie haben sich falsch eingeschätzt")

## Pflicht-Muster für Dialog-Steps

### context (Phase-Bühnenanweisung)
- Beschreibung der Szene (Bühnenanweisung) — wird als graue Narration gerendert
- Eingebettete Patient-Aussage in `"..."` — wird als Patient-Bubble gerendert
- KEIN trailing „Sie sagt:" ohne Folge-Speech

### body (Step-Setup)
- Pflege-Aktion-Beschreibung + ggf. Patient-Erstaussage in `"..."`
- Wird im Dialog-Renderer initial in den Chat eingespeist
- Konkrete Werte (NRS, RR-Werte) statt vager Begriffe

### options[].text (Pflege-Antwort)
- Realistisch — was eine Schülerin in 2./3. AD wirklich sagen würde
- Score-3-Option = vorbildliche Pflegekommunikation (validierend, fachlich präzise)
- Score-1/2-Optionen = plausible Anfänger-Fehler (nicht plumpe Karikaturen)
- Score-0-Optionen = klar gefährliche/falsche Aussagen mit echten Konsequenzen

### options[].feedback
- Kein Generic-Filler („das war nicht optimal")
- Konkret WAS falsch / richtig war
- Bei falschen Antworten: konkreten Verbesserungsvorschlag inkl. wörtlichem Lehrtext
- Sandwich-Prinzip im B1-Feedback: Anerkennen → Korrigieren → Ermutigen
- Standards explizit nennen (DNQP, Kinästhetik, SBAR)

### options[].patientResponse
- Body-Language vor `"..."` getrennt — Parser splittet automatisch
- Realistische Reaktion zum Score (Score 3 → erleichtert; Score 0 → distanziert)
- Konsequenz im Verhalten zeigen, nicht nur in Worten

## Pflicht-Felder im Datenmodell

- `quellen: string[]` — Primärquellen (DNQP-Standard, I Care Kapitel, Kommunikation-Lehrbuch)
- `bloomLevel: 1-6` — kognitive Anforderungsstufe
- `kompetenzbereich: "I.1" | "II.2" | ...` — Bezug zu PflBG-Kompetenzbereichen
- B1-Variante für jeden Lerntext (`textB1`, `feedbackB1`, `bodyB1`)

## Cross-Step-Konsistenz

- Wenn Pflegewagen-Step Item X als „korrekt" markiert, darf nachfolgender MC X nicht als „falsch" zeigen
- Patient-Daten (Alter, Diagnose, NRS-Wert) konsistent durch alle Phasen
- Zeit-Sprünge logisch (kein „Schritt 1: Aufstehen" + nächste Phase „nach 2h Schlaf")

## Standards-Mapping (Recherche-Indexes)

- **DNQP-Expertenstandards**: Sturzprophylaxe, Schmerzmanagement, Dekubitus, Ernährung, Kontinenz, Demenz, Beziehungsgestaltung
- **Kinästhetik (Hatch/Maietta)**: Patient bewegt sich selbst, Pflege begleitet/sichert
- **SBAR**: Situation, Background, Assessment, Recommendation — strukturierte Übergabe
- **ABCDE**: Airway, Breathing, Circulation, Disability, Exposure — Erstuntersuchung Notfall
- **Watzlawick / Schulz von Thun**: Kommunikations-Modelle, Validierung, gewaltfreie Kommunikation

## Mechanisierte Checks (Pre-Filter, Pipeline v10)

Diese Anti-Patterns sind als harte Regex-Checks in `scripts/pflege-anti-pattern-check.ts` umgesetzt (12 Patterns, inkl. NRS≥4-ok, Schellong-ohne-RR, Fixierung/Bettgitter-beidseitig, „Glück gehabt" vor Assessment, unter-Achseln, Heben/Ziehen). Der Check ist ein **Pre-Filter** — er kann „empfehlen" nicht von „über Falsches lehren" unterscheiden (Distraktoren/Fragen/Kommentare werden via `skipInDistraktor`/ignoreIf/Kommentar-Skip ausgenommen). Der semantische `pflege-validator` bleibt die letzte Instanz.

**Quellenbindung (Pipeline v10):** Kernfakten brauchen verifizierte Verbatim-Belege (`scripts/zitat-verifizierer.ts --check-file`), Content darf keine ungedeckten Instrumente/Standards enthalten (`scripts/faktentreue-check.ts`). Grounding-Quellen: `recherche/dnqp-standards-index/` + `recherche/*-volltext/` (Lesereihenfolge-Extraktion, NICHT die `-layout`-Indexe).

## Trigger für pflege-validator

- Bei JEDER neuen Situation (nach didaktik-pruefer)
- Bei JEDER Content-Änderung in `phase-*.ts` Files
- Vor jedem Live-Deploy
- Output: `content/{ce}/{situation}/pflege-review.json` + `.md`

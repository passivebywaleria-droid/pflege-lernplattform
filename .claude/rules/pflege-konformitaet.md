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

Diese Anti-Patterns sind als harte Regex-Checks in `scripts/pflege-anti-pattern-check.ts` umgesetzt. Der Check ist ein **Pre-Filter** — er kann „empfehlen" nicht von „über Falsches lehren" unterscheiden (Distraktoren/Fragen/Kommentare werden via `skipInDistraktor`/ignoreIf/Kommentar-Skip ausgenommen). Der semantische `pflege-validator` bleibt die letzte Instanz.

### Pattern-Register (Sync-Anker — Drift-Guard)

Jede `id` im Skript MUSS hier stehen und umgekehrt. Der Test `tests/unit/pflege-anti-pattern-sync.test.ts` schlägt fehl, wenn Skript und dieses Register auseinanderlaufen (löst W8: zwei Wahrheitsquellen). Beim Hinzufügen/Entfernen eines Patterns BEIDE Stellen ändern.

| AP-ID | Severity | Kurz |
|-------|----------|------|
| `AP-LICHT-INDIREKT` | HOCH | „Indirektes/gedämpftes Licht" bei Sturz verhindert Verletzungs-Inspektion |
| `AP-SCHOCKMOMENT` | MITTEL | „Kein Schockmoment" — Pseudo-Empathie |
| `AP-NRS-OK` | HOCH | NRS ≥ 4 als „ok" bagatellisiert moderaten Schmerz |
| `AP-ICH-FUEHRE-NUR` | HOCH | „Ich führe die Bewegung" — kinästhetisch falsch |
| `AP-HEBEN-ZIEHEN` | HOCH | „Ich hebe/ziehe Sie hoch" — kinästhetisch falsch |
| `AP-UNTER-ACHSELN` | HOCH | „Unter den Achseln greifen" — Schultergelenk-Risiko |
| `AP-SAGT-OHNE-ZITAT` | MITTEL | „Sie sagt:" am Zeilenende ohne Patientenzitat |
| `AP-MIN-WARTE-OHNE-RR` | HOCH | „X Min warten" für Orthostase ohne RR = kein Schellong |
| `AP-HUEFTE-SCHUETZEN-VAGE` | NIEDRIG | „Schützt die Hüfte" — zu vage |
| `AP-SIE-STATT-DU-PFLEGE` | MITTEL | „Sie" statt „du" an Lernende |
| `AP-GLUECK-VOR-ASSESSMENT` | HOCH | „Glück gehabt" vor abgeschlossenem Assessment |
| `AP-BETTGITTER-BEIDSEITIG` | HOCH | Beidseitige Bettgitter ohne Genehmigung (FeM, § 1831 Abs. 4 BGB) |
| `AP-2H-LAGERUNG-STARR` | MITTEL | Starre/pauschale 2-Stunden-Lagerungsregel statt individuellem Intervall (DNQP Dekubitus) |
| `AP-DEKUBITUS-MASSAGE` | HOCH | Massieren/Reiben gefährdeter/geröteter Hautstellen als Prophylaxe (obsolet, DNQP 2017) |
| `AP-DEKUBITUS-HAUTMYTHOS` | HOCH | Franzbranntwein / „Eisen und Föhnen" der Haut — schädlich (Pflege Heute) |
| `AP-OPIOID-ATEMDEPRESSION-MYTHOS` | HOCH | Opioide vorenthalten aus Angst vor Atemdepression / „beschleunigt das Sterben" (Aulbert) |

**Quellenbindung (Pipeline v10):** Kernfakten brauchen verifizierte Verbatim-Belege (`scripts/zitat-verifizierer.ts --check-file`), Content darf keine ungedeckten Instrumente/Standards enthalten (`scripts/faktentreue-check.ts` — ab Kernfakten-Coverage ≥ 80 % scharf/exit 1). Grounding-Quellen: `recherche/dnqp-standards-index/` + `recherche/*-volltext/` (Lesereihenfolge-Extraktion, NICHT die `-layout`-Indexe).

**Step-Level-Grounding (W2/W5, Stage 2):** Jeder claim-tragende Step trägt `kernfaktId: ["F-XX"]`; geprüft mit `scripts/step-grounding-check.ts <ce>` (Auto-Strict pro Situation, Dangling-Refs = Fehler). Vor Live-Deploy zusätzlich der semantische Stützt-Check `scripts/stuetzt-check.ts --file <kernfakten.md>` (3 LLM-Lenses, Mehrheits-Entscheid „stützt das Zitat den KONKRETEN Claim?"; braucht `NEBIUS_API_KEY`).

## Standards-Currency (W6 / Teil D, Stage 4)

Normen/Standards ändern ihre gültige Fassung — veraltete Fassungen im Content sind ein Fehler (Rechtssicherheit). Die **Standards-Currency-Registry** `recherche/standards-currency.json` (`{ norm, pattern, status, ersetztDurch, datumAbloesung, grund, beleg }`) führt die abgelösten Fassungen; `scripts/standards-currency-check.ts <ce> [--include-plans]` flaggt deren autoritative Verwendung (Korrektiv-/historischer Kontext „vormals …" wird ausgenommen). Hätte den §1906a→§1831-Drift automatisch gefangen.

- **Bekannt veraltet:** §§ 1906/1906a BGB → §§ 1831/1832 BGB (Betreuungsrechtsreform 01.01.2023). Immer die aktuelle Fassung verwenden.
- **Neue Norm-Ablösung eintragen:** nur mit verifiziertem Beleg — sonst in die `BESCHAFFUNG`-Liste der Registry, NICHT erfinden.

## Adversariales Klinik-Panel (W6, Stage 4)

Der Einzel-Validator ist durch ein **Panel mit 4 parallelen, unabhängigen Lenses** ersetzt (`scripts/klinik-panel.ts <ce>` → `content/{ce}/klinik-panel-report.md`): (1) Arzneimittel/Zahlen (W1), (2) Recht & Ethik (Currency), (3) DNQP/Standard (Grounding W2), (4) Konsistenz. Jeder Befund literaturbelegt + dedupliziert; K.O. bei ≥1 HOCH. Der **semantische `pflege-validator`** ist der 5. Lens (Distraktor-vs-Empfehlung), die **Gründerin** der menschliche Backstop. Siehe `.claude/agents/klinik-panel.md`.

## Coverage-Tiefe (W10, Stage 4)

Präsenz reicht nicht: `scripts/lernergebnis-tiefe.ts <ce-nummer>` leitet pro Lernergebnis aus dem Bloom-Level der zugeordneten Steps eine **Tiefe-Stufe** ab (Bloom 1-2 → berührt, 3-4 → geübt, 5-6 → geprüft). Gate: jedes LE mind. „geübt" (motorisch/einstellung by-design befreit). Braucht das Recheck-Mapping `specs/{ce}/lernergebnis-mapping.json` (`{ "<leId>": ["<stepId>"] }`); ohne Mapping Warn-Modus.

## Trigger für pflege-validator

- Bei JEDER neuen Situation (nach didaktik-pruefer)
- Bei JEDER Content-Änderung in `phase-*.ts` Files
- Vor jedem Live-Deploy
- Output: `content/{ce}/{situation}/pflege-review.json` + `.md`

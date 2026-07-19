# DESIGN — Wissen in Steps statt Lese-Wand davor

> **Status:** Analyse + Design-Optionen (2026-07-16). KEIN Code geändert.
> **Auftrag:** Walerias Idee (specs/START-PROMPT-PILOT-UX-V2.md, Punkt 5) — Wissens-Tabs nicht als
> eigener Lese-Step VOR der Anwendung, sondern on-demand AM Anwendungs-Step.
> **Mockups:** `specs/mockups/wissen-in-steps/option-{a,b,c}-*.html` (klickbar, iPhone-Viewport)
> **Entscheidung:** Waleria wählt Option — dann Pipeline-Sync-Plan (Abschnitt 6) umsetzen.

---

## 1. Ausgangslage: Was die Messung wirklich zeigt

Wagner hat **5 Wissens-Tabs** (nicht 3 — die gemessenen 215/265/327 W aus dem Walkthrough waren nur
drei davon). Exakte Nachmessung (C1, Pflicht-Hauptteil = Story-Aufhänger + Kerntext + Faustregel;
Spektrum/Sonst-Box sind heute schon eingeklappt):

| # | Step | Titel | Aufhänger | Kerntext | Faustregel | **Pflicht gesamt** | Lesezeit C1* |
|---|------|-------|-----------|----------|------------|--------------------|--------------|
| 1 | `erk-01b-hks-erkennen` | HKS erkennen | 40 W | 142 W | 19 W | **201 W** | ~62 s |
| 2 | `ala-00b-rettungskette` | Rettungskette | 45 W | 244 W | 21 W | **310 W** | ~95 s |
| 3 | `erm-00b-no-flow` | No-Flow-Zeit | 33 W | 195 W | 19 W | **247 W** | ~78 s |
| 4 | `ueb-01b-als` | ALS-Prinzip | 33 W | 157 W | 21 W | **211 W** | ~66 s |
| 5 | `ref-00b-kpr-recht` | KPR Recht/Ethik | 34 W | 184 W | 26 W | **244 W** | ~76 s |
|   |  |  |  |  |  | **Σ 1.213 W** | **~6,3 Min** |

*Zeit-Modell v3: 17 Z/s C1 + 5 s Pause; B1 (12 Z/s) entsprechend ~50 % länger.

Kontext: Wagner hat 17 Steps, davon 12 Antwort-Steps und 5 Lese-Steps — **29 % der Screens sind
Lese-Wände**, und die Anwendungs-Steps selbst haben nur 82–105 W. Die Tabs sind der „too much"-Kern.

### 1.1 Was braucht der Schüler VOR der Antwort — Tab für Tab

Pro Tab geprüft: Welcher Anwendungs-Step folgt, und welcher Teil des Kerntexts ist dafür
Voraussetzung (vs. Vertiefung/Begründung, die on-demand bleiben kann)?

| Tab | Nächste Anwendung | Vorab wirklich nötig | on-demand möglich |
|-----|-------------------|----------------------|-------------------|
| 1 HKS erkennen | `erk-02` TrueFalse „Puls tasten?" | Nur der Puls-Absatz (~57 W). Besonderheit: Der Tab kommt NACH dem Hook `erk-01`, dessen MC-Erklärungen die Schnappatmung bereits vollständig lehren — 2 von 3 Kernabsätzen sind Wiederholung. | ~70 % |
| 2 Rettungskette | `ala-01` MC Delegation | Faustregel + Reihenfolge der 4 Glieder + Zwei-Helfer-Aufteilung (~90 W) | Kammerflimmern-Warum-Absatz (~70 W) + Rest, ~65 % |
| 3 No-Flow | `erm-01` Sorting HDM-Technik | **Stärkster Fall für Vorab-Wissen:** die 4 Qualitätskriterien mit Zahlen (5–6 cm, 100–120/min, Entlastung, harte Unterlage, ~100 W) — genau das sortiert der Schüler gleich | No-Flow-Prinzip-Absatz trägt erst `erm-02/03`, ~55 % |
| 4 ALS | `ueb-02` MC „Deine Rolle" | Faustregel + Rollen-Absatz (~75 W) | Zugang/Adrenalin/reversible Ursachen, ~65 % |
| 5 KPR-Recht | `ref-01b` MC Frau-Kellner-Transfer | Grundsatz „im Zweifel reanimieren" + Ausnahme „gültige Verfügung + ärztliche Anordnung" (~55 W) | § 323c, Abbruchgrenzen, ~75 % |

**Befund:** Vorab nötig sind pro Tab **~50–100 Wörter** (Faustregel + genau ein Kernabsatz).
60–75 % jedes Tabs können on-demand bleiben. Die Pflicht-Lese-Last der Situation ließe sich von
~1.213 W auf **~380 W senken (−69 %)**, ohne dass ein einziger gegroundeter Satz gestrichen wird.

### 1.2 Struktur-Beobachtungen

- **Story-Aufhänger ist im Situations-Flow redundant** (33–45 W pro Tab): Er rekonstruiert die
  Szene, in der der Schüler gerade steckt („Herr Wagner liegt vor dir …"). Für den Themen-Bausteine-Tab
  (Nachschlagewerk außerhalb der Situation) bleibt er wertvoll — inline ist er doppelt.
- **Faustregel ist bereits der destillierte Vorab-Kern** (19–26 W) — das Format existiert schon,
  es steht heute nur ganz UNTEN in der Lese-Wand statt oben am Anwendungs-Step.
- **Spektrum + Karteikarte + Wiederbegegnung hängen an den Daten** (`InlineWissenData`), nicht an
  der Darstellung — sie überleben jede Präsentations-Änderung unverändert.

---

## 2. Architektur-Grundsatz (gilt für alle Optionen)

**Das Content-Datenmodell bleibt unangetastet. Nur die Präsentation im Player ändert sich.**

Der inlineWissen-Step bleibt als Datenobjekt in `phases.ts` (mit `kernfaktId`, `quellen`,
`bloomLevel`, `karteikarte`, `wiederbegegnung`, `bausteinRef`). Ein neues optionales Feld steuert
den Anzeige-Modus, z. B.:

```ts
// content/_types.ts — ContentStep (nur für stepType "inlineWissen")
praesentation?: "eigenerStep" | "amAnwendungsStep";  // Default: "eigenerStep"
```

Der Player hängt bei `"amAnwendungsStep"` den Baustein an den **nächsten Antwort-Step derselben
Phase** (Chip/Anker/Sheet) statt einen eigenen Screen zu rendern.

Warum so und nicht anders — verifiziert an der Pipeline:

- **Grounding bleibt grün:** `step-grounding-check.ts` prüft `kernfaktId` an Steps — die Steps
  existieren weiter. Kein einziger Beleg wandert.
- **Tiefe-Gate (W10) unberührt:** `specs/ce-06/lernergebnis-mapping.json` referenziert **keinen
  einzigen** `-00b/-01b`-Wissens-Step (geprüft: nur `erk-01/02`, `ala-01`, `erm-01/02/03`,
  `ueb-01`, `ref-01/02`). Die Tiefe kommt aus den Anwendungs-Steps.
- **Karteikarten-Auto-Gen (`karteikarten-auto-gen.ts`) liest `inlineWissen` aus den Steps** — bleibt.
- **Default = heutiges Verhalten** → die anderen 10 CE-06-Situationen und CE-02 brauchen KEINE
  Migration am Tag 1. Wagner wird Pilot, Rest folgt nach Freigabe.

---

## 3. Die drei Optionen

Alle drei Mockups nutzen echten Wagner-Content (Tab 2 „Rettungskette", 310 W — der schwerste Fall —
plus Anwendungs-Step `ala-01`).

### Option A — „Spickzettel-Chip" (Wissen komplett on-demand)

`mockups/wissen-in-steps/option-a-spickzettel-chip.html`

Der Wissens-Step verschwindet als Screen. Am Anwendungs-Step sitzt ein Chip
**„📖 Pflege-Wissen: Die Rettungskette"** (Sage, mit „Neu"-Punkt beim ersten Kontakt). Tap öffnet
ein Bottom-Sheet mit dem vollen Baustein (ohne Story-Aufhänger; Kerntext, Faustregel, Spektrum).
Nach einer falschen Antwort bietet das Feedback „Im Spickzettel nachlesen" an.

- Wagner: 17 → **12 Screens**. Pflicht-Lese-Last der Tabs: **0 W** (alles freiwillig).
- Maximal spielerisch: Der Schüler HANDELT sofort, Wissen ist Werkzeug statt Hürde.
- Kehrt das didaktische Prinzip komplett um → Anwendung vor Wissen (Details Abschnitt 4).

### Option B — „Kompakt-Karte" (konservativ: Step bleibt, schrumpft)

`mockups/wissen-in-steps/option-b-kompakt-karte.html`

Der Wissens-Step bleibt im Flow, zeigt aber nur noch: Titel + **Faustregel prominent** + 3
Kern-Bullets (~65 W, „ca. 30 Sek"). Der volle Kerntext + Spektrum liegen im Akkordeon
(„Den ganzen Baustein lesen · ca. 1:30 Min"). Der Anwendungs-Step bekommt einen
Rücksprung-Link „Pflege-Wissen nochmal ansehen".

- Wagner bleibt bei 17 Screens; Pflicht-Lese-Last der Tabs: ~1.213 → **~325 W** (−73 %).
- Wissen-vor-Anwendung-Prinzip bleibt formal vollständig erhalten.
- Neuer Content-Baustein nötig: `kernBullets` (3 × ~15–20 W) — **neues Pflichtfeld für alle
  bestehenden Tabs** (größter Content-Migrationsaufwand der drei Optionen).
- Risiko Akkordeon-Blindheit: Der Kerntext wird faktisch zum on-demand-Text — dann ist B nur
  ein halbherziges A mit extra Screen.

### Option C — „Faustregel-Anker + Spickzettel" (Hybrid) ⭐ Empfehlung

`mockups/wissen-in-steps/option-c-faustregel-anker.html`

Kein eigener Lese-Step. Drei Bausteine am Anwendungs-Step:

1. **Faustregel-Anker** über der Frage: Sage-Karte „💡 Merk dir · Die Rettungskette" mit der
   Faustregel (~20 W). Beim ERSTEN Kontakt mit dem Baustein aufgeklappt, danach (und bei
   Folge-Steps zum selben Baustein) eingeklappt auf eine Zeile.
2. **Spickzettel-Sheet**: Link im Anker öffnet den vollen Baustein (wie Option A).
3. **Feedback-Vertiefung**: Nach einer falschen Antwort erscheint der zur Frage passende
   Kerntext-Absatz als „📖 Aus dem Pflege-Wissen"-Block direkt im AnswerSheet — Wissen kommt im
   Moment der höchsten Aufnahmebereitschaft.

- Wagner: 17 → **12 Screens**. Pflicht-Lese-Last: ~1.213 → **~105 W** (5 Faustregeln).
- Wissen-vor-Anwendung bleibt **minimal erfüllt** (Faustregel = Advance Organizer sichtbar vor
  der Frage), die Vertiefung wandert dorthin, wo sie nachweislich wirkt (Feedback-Moment).
- Feedback-Vertiefung ist in v1 optional weglassbar (dann C = A + Anker); mit ihr braucht der
  Content pro Tab eine Zuordnung Kernabsatz → Anwendungs-Step (moderater Mehraufwand).

---

## 4. Folgen-Analyse

### 4.1 Didaktik (Prinzip „Wissen vor Anwendung", dokumentiert in `step-inline-wissen.tsx`)

| | A Spickzettel | B Kompakt-Karte | C Anker |
|---|---|---|---|
| Prinzip-Status | **Gekippt** → „Anwendung vor Wissen" (Retrieval-first / produktives Scheitern). Lernpsychologisch vertretbar (Testing-Effekt), aber Bruch mit dokumentierter Linie | Vollständig erhalten | Minimal erhalten: Faustregel als Advance Organizer VOR der Frage, Vertiefung on-demand + im Feedback |
| Risiko schwache/B1-Schüler | Raten ohne Grundlage → Frust; „Was-soll-ich-wissen"-Lücke kehrt zurück | gering | gering — Faustregel gibt Halt, Sheet ist einen Tap entfernt |
| Fehleranalyse-Signal (VISION: „Warum falsch?") | Falsch = nicht gewusst ODER nicht gelesen — ambig. ABER: Chip-Öffnung ist ein neues messbares Signal („liest vor Antwort" vs. „liest nie") | wie heute | wie A, plus: Anker-Aufklappen ist messbar |
| Neues Adaptivitäts-Signal | ✅ Spickzettel-Nutzung pro Schüler → „bei diesem Schüler funktionieren Texte / funktioniert Ausprobieren" (VISION: KI merkt sich was funktioniert) | ⚠️ nur Akkordeon-Öffnung | ✅ wie A |
| Spoiler-Problem | entfällt (Wissen nur on-demand) | Faustregel + Bullets können die MC-Antwort vorwegnehmen | **Achtung:** Die Rettungsketten-Faustregel beantwortet `ala-01` fast wörtlich. Beim Erstkontakt ist das gewolltes Scaffolding (worked example → fading), aber es braucht eine Regisseur-Regel: „Spoilert die Faustregel die Antwort, startet der Anker eingeklappt" ODER die Frage wird schwerer gemacht |

**Didaktische Einordnung:** Der heutige Gold-Standard („Tab VOR Anwendung") wurde für die
LESE-Darbietung entworfen. Walerias Beobachtung trifft einen echten Punkt: 6+ Minuten Pflichttext
in einer Akutsituation zerstören genau die Dramaturgie („Sekunden zählen!"), die die Situation
didaktisch trägt. Option C löst den Widerspruch, statt das Prinzip zu opfern.

### 4.2 Pipeline-Sync (die 7 Stellen aus `.claude/rules/pipeline-sync.md`)

Betroffen bei **jeder** Option (Aufwand: A ≈ C < B, weil B ein neues Pflicht-Contentfeld bringt):

| # | Stelle | Was ändert sich |
|---|--------|-----------------|
| 1 | `didaktik-regisseur.md` | Platzierungsregel „Wissens-Tab VOR Anwendungs-Step" → „Wissens-Baustein wird am Anker-Step gerendert (nächster Antwort-Step der Phase)". Sessionplan-Spalte `praesentation`. Bei C zusätzlich: Spoiler-Regel (4.1) + Zuordnung Kernabsatz→Step |
| 2 | `content-generator.md` | Template: neues Feld `praesentation`; bei B: `kernBullets`-Regel; bei C: optional `feedbackVertiefung`-Zuordnung. Story-Aufhänger-Regel („entfällt in der Inline-Darbietung, bleibt im Themen-Tab") |
| 3 | `didaktik-pruefer.md` | Kriterium „jeder Tab hat Anwendung danach" (Variante D) bleibt; neu: „jeder inline dargebotene Baustein hat einen Anker-Step in derselben Phase". Lese-Last-Kriterien anpassen |
| 3b | `pflege-validator.md` | Inhaltlich unverändert (prüft dieselben Texte) — nur Hinweis, dass Faustregel isoliert am Step erscheint und allein stehen können muss (fachlich vollständig, kein gefährliches Halbwissen) |
| 3c | `pflege-konformitaet.md` | Kein neues Anti-Pattern; ggf. Pflicht-Muster „Faustregel muss ohne Kerntext fachlich korrekt bestehen" |
| 4 | `didaktik-loop/GESAMT-PROMPT-v2.md` | Schritte Regisseur + Generator entsprechend |
| 5 | `specs/ADAPTIVER-THEMENBOGEN.md` | Phasen-Modell: Darbietungsform der Stufe-3-Bausteine |
| 6 | `content/_types.ts` | `praesentation?: "eigenerStep" \| "amAnwendungsStep"`; bei B `kernBullets?: string[]` (+B1); bei C optional `feedbackVertiefung?: { stepId: string; absatz: string }[]` |
| 7 | `memory/MEMORY.md` | Entscheidung + Stand |

Zusätzlich betroffene **Scripts** (nicht Teil der 7, geprüft):

- **Unverändert:** `step-grounding-check.ts`, `lernergebnis-tiefe.ts` (Mapping zeigt nur auf
  Anwendungs-Steps — verifiziert), `karteikarten-auto-gen.ts`, `zitat-verifizierer`, Klinik-Panel.
- **Anzupassen:** `student-walkthrough.ts` (Lese-Last-/Monotonie-Metriken rechnen inlineWissen als
  Screen), `inline-wissen-zeit.ts`, `content-walkthrough-validator.ts`, `situation-qa.ts`,
  `calculate-step-time.ts`/Budget (siehe 4.3), `extract-wissens-tabs.ts` (Themen-Tab-Export bleibt
  Quelle des Nachschlagewerks — Story-Aufhänger dort behalten).

### 4.3 Budget-Modell (`calculate-content-budget.ts`)

Heute gilt: „Wissen-Tab = stilles Nachschlagewerk, zählt NICHT ins Budget" — aber die
inlineWissen-STEPS stecken faktisch in `geschaetzteDauer` der Phasen (Wagner: 43 Min inkl. Tabs)
und damit in der erlebten Session-Länge. Das Budget-Skript kennt den Step-Typ gar nicht
(kein `inlineWissen` in `calculate-step-time.ts` — Lücke, unabhängig von dieser Entscheidung).

- **A/C machen das Modell ehrlicher:** On-demand-Wissen IST das Nachschlagewerk-Modell, nur einen
  Tap entfernt. Pflichtzeit der Situation sinkt um ~5–6 Min (C1) bzw. ~8–9 Min (B1);
  `geschaetzteDauer` der 5 Wagner-Phasen muss neu gerechnet werden.
- **B:** Pflichtzeit sinkt um ~4–5 Min; der Step zählt weiter als Screen.
- Folgeeffekt für die UE-Deckungs-Rechnung (Content-Sizing): Situationen werden „kürzer" —
  die freiwerdende Zeit gehört laut Modell in mehr Anwendungs-Steps, nicht in mehr Text.

### 4.4 Play-then-Gate

Verifiziert (Kommentar in `phases.ts` + Memory): Lese-Steps zählen NICHT als Antwort-Steps,
das soft-Gate sitzt am 2. Antwort-Step.

- **A/C:** Gate-Position in Antwort-Steps unverändert (weiterhin `erk-02`). Der Gast erreicht das
  Gate aber schneller (Screen 2 statt 3) und hat bis dahin GEHANDELT statt gelesen — für den
  Demo-Sog eher ein Plus. Kein Code-Risiko, da die Gate-Logik eh nur Antwort-Steps zählt.
- **B:** komplett unverändert.

### 4.5 Spaced-Repetition-Marker / Karteikarten / Wiederbegegnung

- `karteikarte` und `wiederbegegnung` hängen an `InlineWissenData` → **in allen Optionen erhalten**
  (Datenmodell bleibt, Abschnitt 2).
- **Neue Entscheidung nötig (A/C):** Gilt der Baustein als „begegnet", wenn der Schüler den
  Spickzettel nie geöffnet hat? Empfehlung: **Ja** — der Anker-Step wendet den Stoff an, die
  Anwendung ist die Begegnung. Karteikarte wird wie bisher nach Situations-Abschluss erzeugt;
  zusätzlich Flag `spickzettelGeoeffnet` als Signal für die Spaced-Rep-Priorisierung
  (nie geöffnet + Anker-Step falsch beantwortet = früh wiederholen).
- **Wiederbegegnungs-Karten** (kompakte Variante) passen sogar besser in den Anker/Chip als in
  einen eigenen Screen — sie sind schon heute nur 1–3 Sätze.
- Der **Themen-Wissens-Tab** (Nachschlagewerk auf CE-Ebene, `extract-wissens-tabs.ts`) bleibt in
  allen Optionen die vollständige Referenz inkl. Story-Aufhänger — dort stört die Länge nicht.

---

## 5. Options-Vergleich kompakt

| Kriterium | A Spickzettel | B Kompakt-Karte | C Anker ⭐ |
|---|---|---|---|
| Pflicht-Lese-Last Tabs (Wagner, C1) | 0 W | ~325 W | ~105 W |
| Screens Wagner | 12 | 17 | 12 |
| Wissen-vor-Anwendung | ✗ gekippt | ✓ voll | ✓ minimal (Faustregel) |
| Schutz schwacher/B1-Schüler | ⚠️ | ✓ | ✓ |
| Neues Adaptivitäts-Signal | ✓ | (✓) | ✓ |
| Content-Migrationsaufwand | gering (Anker-Zuordnung, meist automatisch „nächster Step") | **hoch** (kernBullets für alle Tabs, alle CEs, ×B1) | gering–mittel (v1 ohne Feedback-Vertiefung = wie A) |
| Player-Aufwand | Chip + Sheet | Renderer-Umbau Kompakt-Karte | Anker + Sheet + AnswerSheet-Block |
| Doku-/Prinzip-Änderung | groß | keine | klein (Präzisierung) |
| Dramaturgie Akutsituation | ✓✓ | ⚠️ Flow-Bruch bleibt | ✓✓ |

## 6. Empfehlung

**Option C, pilotiert an Wagner**, in zwei Stufen:

1. **v1 (klein):** Faustregel-Anker + Spickzettel-Sheet, Feld `praesentation` mit Default
   `eigenerStep` (keine Migration anderer Situationen nötig). Story-Aufhänger entfällt in der
   Sheet-Darstellung. Walkthrough + Screenshots an Waleria, dann Rest CE-06.
2. **v2 (nach Pilot-Erfahrung):** Feedback-Vertiefung (Kernabsatz→Step-Zuordnung) + Spickzettel-
   Nutzung als Adaptivitäts-Signal (zahlt direkt auf Wette 2 „adaptive Mechanik" ein).

Warum nicht A: kippt das dokumentierte Prinzip ohne Not — der Anker kostet fast nichts und schützt
B1-/schwache Schüler. Warum nicht B: höchster Content-Aufwand, behält den Flow-Bruch und läuft
praktisch doch auf on-demand hinaus (Akkordeon-Blindheit).

### Offene Entscheidungen für Waleria

1. **Spoiler-Frage:** Darf die Faustregel die erste Antwort „verraten" (Scaffolding beim
   Erstkontakt) — oder soll der Anker bei Spoiler-Gefahr eingeklappt starten?
2. **„Begegnet"-Regel:** Karteikarte auch erzeugen, wenn der Spickzettel nie geöffnet wurde?
   (Empfehlung: ja, siehe 4.5)
3. **Story-Aufhänger:** inline streichen (Empfehlung — die Situation IST der Aufhänger) oder als
   erste Zeile im Sheet behalten?
4. **Pilot-Umfang:** nur Wagner, oder gleich Wagner + Ríos (der Demo-Pfad)?

---

## 7. Anhang: Messdaten-Reproduktion

```bash
# Wort-Zählung der 5 Wagner-Tabs (Grundlage von Abschnitt 1):
npx tsx -e "import { CE06_SIT_WAGNER_ERKENNEN as a, CE06_SIT_WAGNER_ALARMIEREN as b, \
CE06_SIT_WAGNER_ERSTMASSNAHMEN as c, CE06_SIT_WAGNER_UEBERGEBEN as d, \
CE06_SIT_WAGNER_REFLEKTIEREN as e } from './content/ce-06/situationen/ls-wagner-reanimation/phases'; \
..." # (Wörter = split(/\s+/) auf storyAufhaenger + kerntext + faustregel, C1)
```

- Antwort-Steps Wagner (12): `erk-01`, `erk-02`, `ala-01`, `erm-01`, `erm-02`, `erm-03`,
  `ueb-01`, `ueb-02-als-rolle`, `ref-01b-kpr-fall`, `ref-01`, `ref-02`, `ref-03-notfallplan`
- Lese-Steps (5): `erk-01b`, `ala-00b`, `erm-00b`, `ueb-01b`, `ref-00b`
- `lernergebnis-mapping.json`: 14 Wagner-Referenzen, ausschließlich Anwendungs-Steps

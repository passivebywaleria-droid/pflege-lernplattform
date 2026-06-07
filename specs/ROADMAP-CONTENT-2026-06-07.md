# Roadmap — Pflegefachlicher Content in Menge & Qualität

**Datum:** 2026-06-07 · **Rev. 2** (Selbstkritik eingearbeitet: 11 Justierungen)
**Status:** Aktiv — Master-Plan
**Grundlagen:** `CONTENT-SIZING-2026-06-07.md` (Menge), Memory `project_pflegefachliche_qualitaet_empfehlungen` (Qualität), `project_content_sizing_modell`, `project_pipeline_neu_vor_naechsten_ces`

---

## Leitprinzip

Zwei Workstreams, die NICHT unabhängig sind:
- **Qualität** — Generierung quellengebunden machen (Halluzinations-Sicherheit).
- **Menge** — ~974 h Content über 11 CE bauen (heute ~8 % gebaut, nur CE-02 mit ~82 h).

**Kritische Reihenfolge:** Erst die Pipeline härten, DANN in Menge generieren. Sonst werden ~990 h Content mit der heutigen „generieren-dann-prüfen"-Pipeline produziert und backen Fehler im großen Stil ein. Das ist auch die bestehende Projekt-Regel (`project_pipeline_neu_vor_naechsten_ces`).

**Goldstandard-Strategie:** CE-02 ist die einzige real gebaute CE. Sie wird zuerst auf 100 % + quellengebunden gebracht und dient dann als Blaupause/Kalibrier-Referenz für die Massengenerierung.

**Pilot-Tor (Rev. 2):** Die teure Skalierung (Phase 4, ~800 h) startet ERST nach einem echten Schul-Pilot mit CE-02 + einer zweiten CE. Kein All-or-Nothing — das Modell wird an echten Schülern validiert, bevor die Hauptinvestition läuft.

**Vier Querschnitts-Prinzipien (Rev. 2), gelten in ALLEN Phasen:**
1. **Adaptivität als Content-Zwang** — Abundanz heißt *mehrere alternative Darstellungen pro Lernziel* (Bild/Text/Fall, B1/C1, Bloom 2/5), NICHT mehr lineare Steps. Sonst hat die Adaptiv-Engine nichts zum Auswählen → USP verfehlt.
2. **Zentrale Fakten-Basis** — Kernfakten CE-übergreifend in einem Pool; CE referenzieren statt duplizieren (verhindert Widersprüche + Mehrfach-Verifikation).
3. **„Fertig" = Quality-Gate bestanden**, nicht Stunden erreicht. Stunden = Mengen-Indikator, Gate = Done-Kriterium.
4. **B1-Schicht skaliert mit** — jeder Content braucht B1-Variante (Sprach-Achse), nicht nachträglich.

---

## Phasen-Übersicht

| Phase | Ziel | Ergebnis | Größe |
|-------|------|----------|-------|
| 0 | Fundament, Sicherung & Entscheidungen | Diff committet, Punkte geklärt, Tracking steht | klein |
| 1 | Pipeline-Härtung + vertikaler Schnitt | Pipeline v10, an 1 Thema **komplett** bewiesen | mittel |
| 2 | Gold-Standard & Retro-Validierung | Mess-Baseline, CE-02-Findings gefixt | mittel |
| 3 | CE-02 auf 100 % + 2. Pilot-CE | Goldstandard + launch-fähiger Ausschnitt | groß |
| **🚪 PILOT-TOR** | **Echter Schul-Pilot** | **0,55-Faktor validiert, Modell bestätigt** | **Gate** |
| 4 | Skalierung 9 CE | ~800 h Content, KB-Ziele erreicht | sehr groß |
| 5 | Experten-Anker & Dauerbetrieb | Dozentin-Review, Versionierung, Messung | laufend |
| P | Produkt-Track (parallel) | Nachweis-Export pro KB, Adaptiv-Engine | parallel |

---

## PHASE 0 — Fundament, Sicherung & Entscheidungen

**Ziel:** Bestehende Arbeit sichern, offene Stellschrauben festziehen.

### Schritte
- **0.0 (zuerst!)** Uncommitteten Diff sichern. Der Pilot-Branch hat 30+ geänderte Dateien (Memory: „Git-Commit groß!" offen). Committen, bevor irgendetwas Neues startet — sonst Konflikt-Chaos.
- **0.1** Beleg-Format *korrigiert* (Rev. 2, verifiziert): `recherche/`-Indexe sind Volltext, aber chapter-level OHNE verlässliche Seitenzahlen. Beleg = `{ werk, quelldatei, woertlichesZitat }` — KEINE Seitenzahl. Vorteil: Verifizierer kann das Zitat per String-Match in der Quelldatei prüfen → automatisierbar.
- **0.2** Glossar-Fallback-Quelle wählen (Pschyrembel Pflege 2023 / Roche Lexikon Pflege) für Begriffe ohne Lehrbuch-Treffer.
- **0.3** Per-CE-Stunden: KB-Raster (Abschnitt 1 der Sizing-Spec) als verbindliche Zielgröße bestätigen; exakte Multi-CE-LE-Aufteilung nur falls Schul-Nachweis sie verlangt.
- **0.4** Tracking: `measure-content.ts` als wöchentlicher Fortschritts-Check gegen KB-Ziele.
- **0.5** Zentrale Fakten-Basis aufsetzen (Querschnitt-Prinzip 2): Pool-Struktur für CE-übergreifende Kernfakten anlegen, damit Phase 1+4 referenzieren statt duplizieren.
- **0.6 ✅ erledigt (2026-06-07):** ~70 `bausteine-plan.md` über 9 CE (~300k Wörter) auditiert. Ergebnis: **wertvoller Vorlauf** — jeder Plan hat schon bausteinId, Bloom-Metadaten, `quelleFakten` (echte Zitate, z.B. „ESC Guidelines 2021"), Stufe 1/2/3, Misconceptions→Distraktoren, Karteikarte, Glossar-Beitrag. **Fehlt für Rev. 2:** v2-Stil (Lehr-Patient + Anker+Spektrum + Aha-Moment), passagen-genaue Verbatim-Belege (statt dokument-level), Inline-Wissen-Integration. → Phase 4 ist **Refactor v1→v2 + Beleg-Härtung + TS-Generierung**, NICHT von Null. Senkt den Aufwand spürbar (Fakten-/Recherche-Schicht für 9 CE großteils vorhanden).

### Exit-Kriterium
Diff committet, Entscheidungen dokumentiert, Fakten-Pool-Struktur steht, Plan-Audit liegt vor.

---

## PHASE 1 — Pipeline-Härtung: Quellenbindung (Herzstück)

**Ziel:** Generierung quellengebunden. Jeder Fakt rückführbar auf eine abgerufene Buchpassage. Umsetzung der Empfehlungen 1–3 + 7.

### Schritte
- **1.1 ✅ Beleg-Format definiert + Vertikalschnitt bewiesen (2026-06-07):** Markdown-Beleg-Block pro Kernfakt:
  ```
  **Beleg:**
  - Quelle: `dnqp-standards-index/<datei>.txt`
  - Zitat: "<verbatim aus Primärquelle>"
  ```
  Verifizierer-Modus `--check-file <kernfakten.md>` parst alle Beleg-Blöcke + prüft jedes Zitat. Bewiesen an `sturz-prophylaxe.md` F-02: 2 DNQP-Zitate, beide ✅. (TS-Interface-Feld `belege[]` an Baustein folgt in 1.2, wenn Belege in den generierten Content fließen.)
- **1.1b ✅ Machbarkeits-Befund (2026-06-07) — MULTI-SOURCE-Grounding nötig:** Test an allen 11 sturz-Fakten ergab:
  - DNQP-**Auszüge sind Auszüge**: nur ~3/11 Fakten direkt im DNQP-Auszug (F-02, F-04 Kraft/Balance, F-05 Umgebung). Hüftprotektoren/Fixierung/Dokumentation/Sturzangst: 0 Treffer.
  - **Lehrbücher füllen die Lücken**: Pflege heute deckt Fixierung (38 Dateien), Hüftprotektoren, Sturzphobie (=Post-Fall-Syndrom, anderer Begriff!). → Fakt gegen JEDE Primärquelle belegen, die es sagt, nicht nur DNQP.
  - **PREREQUISITE:** Lehrbuch-Quellen müssen in LESEREIHENFOLGE re-extrahiert werden (`scripts/extract-grounding-sources.sh`) — die bestehenden `-layout`-Indexe verschränken Sätze → Verbatim-Match scheitert. Pflege heute re-extrahiert (971k Wörter, sauber). Bewiesen: F-08 Fixierung matcht gegen Pflege heute. Multi-Source-Check (DNQP + Pflege heute) PASS.
  - **Restlücke:** Wenige Fakten zitieren Quellen ohne lokalen Volltext (WHO-Report, Cochrane, Beers-Liste) → entweder beschaffen oder Digest-level akzeptieren.
- **1.2 `dozentin-recherche`-Agent umbauen:** statt frei „in eigenen Worten paraphrasieren" → pro Fakt die passende Passage über ALLE re-extrahierten Grounding-Quellen (`*-volltext/`, `dnqp-standards-index/`) suchen, wörtlich zitieren, DANN paraphrasieren MIT Beleg. Flexible Begriffssuche (Synonyme: Post-Fall-Syndrom=Sturzphobie). Regel: kein Fakt ohne verbatim-Zitat; ungedeckte Fakten als „Quelle beschaffen" markieren statt erfinden. Abschluss: `--check-file` muss PASS sein.
- **1.3 ✅ `scripts/zitat-verifizierer.ts` gebaut + bewiesen (2026-06-07):** prüft jedes `woertlichesZitat` per String-Match (normalisiert) gegen die zitierte Quelldatei. Self-Test PASS gegen echte DNQP-**Primärquelle** (S1-Standardkriterium + Prozesskriterium matchen verbatim; erfundenes Zitat abgelehnt). Plus geplanter adversarialer KI-Check „passt Paraphrase zum Zitat?".
- **1.3b ✅ DNQP-Primärquellen beschafft (2026-06-07):** 10 Original-Auszüge von dnqp.de heruntergeladen + Volltext extrahiert (~32k Wörter) → `recherche/dnqp-standards-index/` (lokal, gitignored). Reproduzierbar via `scripts/fetch-dnqp-standards.sh`. **Löst die Primär-vs-Digest-Frage:** jetzt echte Primärquelle für DNQP-Themen (Sturz/Dekubitus/Ernährung/Kontinenz/Haut/Mund/Schmerz/Wunden/Demenz/Entlassung), nicht mehr second-hand-Zusammenfassung. **Praxis-Regel:** kurze zusammenhängende Verbatim-Phrasen zitieren (lange mehrzeilige scheitern an Tabellen-Spalten der Extraktion).
- **1.4 Neuer `scripts/faktentreue-check.ts`:** parst finalen `.ts`-Content, extrahiert jeden Zahlen-/Schwellenwert-/Standard-Claim, gleicht gegen die Kernfakten-Datei ab. Claim nicht in Kernfakten → Fail. Macht „kein erfundener Content" zur erzwungenen Invariante.
- **1.5 `content-generator` verschärfen:** nur Fakten mit Beleg-ID dürfen in Steps; fehlt der Beleg → STOPP statt selbst ergänzen.
- **1.6 Mechanisierbare Anti-Patterns** (NRS≥4, Schellong-Ablauf, Bettgitter, „unter Achseln greifen") in `scripts/pflege-anti-pattern-check.ts` als harte Checks (Empfehlung 7).
- **1.7 Pipeline-Sync:** alle 7 Stellen aus `pipeline-sync.md` updaten (Regisseur, Generator, Prüfer, pflege-validator, pflege-konformitaet, GESAMT-PROMPT, _types, Memory).

### Exit-Kriterium (Rev. 2: vollständiger vertikaler Schnitt)
Pipeline v10 dokumentiert + an EINEM Thema (`sturz-prophylaxe`) die GANZE Kette bewiesen — nicht nur die Fakten-Schicht: Kernfakten mit Zitat-Beleg → Verifizierer PASS → Bausteine → Situation+Steps (mit ≥2 alternativen Darstellungen pro Lernziel, B1+C1) → Faktentreue-Check + Quality-Gate PASS. So lernen wir, was an der echten Generierung schwer ist, bevor wir für alles härten.

---

## PHASE 2 — Gold-Standard & Retro-Validierung

**Ziel:** Qualität messbar machen + bestehenden CE-02-Content nachhärten.

### Schritte
- **2.1 Gold-Standard-Testset** bauen: 30–50 Items, je hälftig pflegefachlich korrekt und absichtlich falsch (echte Anfänger-Fehler). Dient als Validator-Benchmark.
- **2.2 Validator-Trefferquote messen:** Faktentreue-Check + adversariale Validierung gegen das Testset → Baseline-Zahl. Ziel: ≥ X % Erkennung (Schwelle in 2.1 festlegen).
- **2.3 Bestehenden CE-02-Content retro-validieren:** alle 10 Situationen + 25 Themen durch die neuen Checks. Findings sammeln.
- **2.4 CE-02-Findings fixen** (alle Severities, gemäß `feedback_pflege_findings`).
- **2.5 Fehlende 21/25 CE-02-Kernfakten** als Lücke notieren (wird in Phase 3 geschlossen).

### Exit-Kriterium
Gold-Standard existiert, Validator-Baseline gemessen, bestehender CE-02-Content faktentreue-PASS.

---

## PHASE 3 — CE-02 auf 100 % (Goldstandard fertigstellen)

**Ziel:** Eine vollständige, quellengebundene CE als Blaupause. Heute 65 % (~65 h von ~99 h).

### Schritte
- **3.1 Fehlende 21 Kernfakten-Dateien** für CE-02-Themen generieren — gehärtete Pipeline, parallel (1 Agent/Thema), je Verifizierer-PASS.
- **3.2 Content-Lücke schließen (+34 h):** zusätzliche Steps/Blickwinkel/Fälle pro Thema bis Ziel ~99 h. Abundanz in der Darbietungs-Schicht (Zwei-Schichten-Prinzip), Fakten bleiben endlich.
- **3.3 Inline-Wissen v2 + Karteikarten** über alle 10 Situationen vollständig (Anker + Spektrum, Auto-Karteikarten).
- **3.4 Voll-Validierung:** Pflege-Validator (Plan+Code) + Faktentreue + Dozentin-Stichprobe + measure-content (Ziel ≥ 99 h).

- **3.5 Zweite Pilot-CE** (Empfehlung: CE-05, größte CE, I-schwer) auf launch-fähiges Niveau — mind. genug für einen mehrwöchigen Schul-Pilot. Muss NICHT 100 % sein, aber echte Schüler müssen mehrere Wochen durchlaufen können.

### Exit-Kriterium
CE-02 = 100 % Stunden-Ziel, 25/25 Kernfakten mit Beleg, alle Checks PASS (Quality-Gate, nicht nur Stunden), Dozentin-Freigabe. CE-05 launch-fähig. → Generator-Blaupause + Pilot-Material stehen.

---

## 🚪 PILOT-TOR — Echter Schul-Pilot (Rev. 2)

**Ziel:** Das Modell an echten Schülern validieren, BEVOR die ~800-h-Hauptinvestition startet. Größte Risikoreduktion des ganzen Plans.

### Schritte
- **PT.1** 1–2 Schulklassen über mehrere Wochen mit CE-02 + CE-05 lernen lassen.
- **PT.2 0,55-Dichte-Faktor validieren:** echte Durchlaufzeiten messen vs. `measure-content`-Schätzung. Faktor korrigieren — das skaliert auf das gesamte Mengen-Ziel (~1056 h könnte sich auf 700 h oder 1500 h verschieben).
- **PT.3** Lernerfolg + Engagement + Adaptivität prüfen: Greift „6 Wege zum Ziel" wirklich? Halten Schüler durch?
- **PT.4** Dozentin-Feedback aus echtem Einsatz.

### Gate-Entscheidung
Nur bei PASS startet Phase 4. Bei Problemen: Pipeline/Content-Modell nachjustieren statt blind skalieren.

---

## PHASE 4 — Skalierung: die 9 verbleibenden CE (~800 h)

**Ziel:** Plattform inhaltlich füllen. Reihenfolge nach KB-Gewicht: **Bereich I (54 %) zuerst.**

### Bau-Reihenfolge (nach Wirkung; CE-05 schon im Pilot)
1. **CE-08** (300 h) — kritische Lebenssituationen/Palliativ
2. **CE-07** (230 h) + **CE-10** (230 h) — Reha / Kinder
3. **CE-04** (210 h) + **CE-09** (210 h) — Prävention / Lebenswelt
4. **CE-11** (190 h) — Psychiatrie
5. **CE-06** (150 h) — Akut/Notfall
6. **CE-01** (100 h) + **CE-03** (100 h) — Berufsstart / Kommunikation

### Schritte pro CE (Fließband, gehärtete Pipeline)
- **4.x.1** Kernfakten mit Zitat-Beleg in zentralen Pool → Verifizierer-PASS; bereits vorhandene Fakten referenzieren statt neu generieren (Prinzip 2)
- **4.x.2** Bausteine v2 (Lehr-Patient + Anker+Spektrum) aus vorhandenem `bausteine-plan.md` heben (Audit aus 0.6)
- **4.x.3** Situationen + Steps (Hauptlernweg — heute überall 0), mit ≥2 alternativen Darstellungen pro Lernziel (Prinzip 1)
- **4.x.4** Inline-Wissen + Karteikarten + B1-Variante (Prinzip 4)
- **4.x.5** Done = Quality-Gate + Faktentreue PASS (Prinzip 3), dann measure-content gegen CE-Ziel

### Parallelisierung & Integrations-Disziplin
Agent-Teams / Workflows, 1 Thema oder 1 Situation pro Agent, Worktree-Isolation. **Pro CE ein Branch + Merge-Gate** (Validierung muss PASS sein vor Merge) — sonst Chaos wie der aktuelle 30-Dateien-Diff.

### Exit-Kriterium
Jeder der 15 KB erreicht sein Stunden-Ziel (KB-Raster). `measure-content.ts --all` ≥ ~1056 h gesamt, alle CE Quality-Gate PASS.

---

## PHASE 5 — Experten-Anker & Dauerbetrieb (laufend ab Phase 2)

### Schritte
- **5.1 Dozentin-Review-Queue:** alle HOCH-Findings + Stichprobe pro CE an echte Pflegepädagogin zum Abzeichnen (Empfehlung 5). Wirksamster nicht-technischer Hebel.
- **5.2 Leitlinien-Versionierung:** jeder Fakt `standard+version+jahr`, Check flaggt veraltetes (>5 J. / revidierte Leitlinie) (Empfehlung 6).
- **5.3 Lernende Anti-Pattern-Bibliothek:** jedes bestätigte Finding → `pflege-konformitaet.md` + Skript-Check (Empfehlung 7, fortlaufend).
- **5.4 Dichte-Faktor:** schon im Pilot-Tor (PT.2) validiert; hier laufend nachkalibrieren.
- **5.5 Regenerations-Workflow:** wenn eine Leitlinie revidiert wird → über den Zitat-Beleg alle betroffenen Fakten finden und gezielt neu generieren (nicht alles neu bauen). Der Zitat-Beleg macht das auffindbar.

---

## PHASE P — Produkt-Track (parallel zum Content, Rev. 2)

**Begründung:** Content allein liefert nicht „Schüler lernt die ganze Theorie". Diese Features sind Voraussetzung dafür, dass der Content seine Wirkung entfaltet — und der Pilot sie testet.

### Schritte
- **P.1 Lernzeit-Nachweis-Export pro Kompetenzbereich** (PDF für die Schule) — die explizite Schul-Anforderung. Summiert gemessene Zeit pro KB über CE-Grenzen (KB-Tags existieren schon).
- **P.2 Adaptiv-Engine** — wählt aus den alternativen Darstellungen (Prinzip 1) pro Schüler. Ohne sie ist die Abundanz wirkungslos.
- **P.3 Fortschritts-Visualisierung pro KB** — Schüler + Lehrer sehen Stand gegen Curriculum-Ziel.
- **P.4 Hetzner-Migration auf EIGENEN Server (DSGVO, vor dem Pilot zwingend)** — aktuell Vercel (Hobby verbietet kommerzielle Nutzung; Vercel hostet nicht in DE).
  - **Entscheidung: dedizierter VPS in eigenem Hetzner-Projekt** (NICHT auf der lumeries-Box mitlaufen). Begründung: Minderjährigen-PII + gesundheitsnah + AVV mit Schulen → Isolation (Blast-Radius), DSGVO-Datentrennung nachweisbar, eigene Ressourcen, getrennte Lifecycles. Co-Hosting hätte Caddy-Port-Konflikt + geteilten Blast-Radius mit lumeries (Stripe/Telegram/Admin-Secrets/GA).
  - **Sizing:** CX22 (2 vCPU/4 GB, ~€4–5/Mon) reicht für Pilot (KI-Last extern via Nebius); CX32 (4 vCPU/8 GB) als Puffer.
  - **Setup:** lumeries-Muster 1:1 kopieren (`/opt/lumeries/docker-compose.yml` + `Caddyfile`, siehe `reference_hetzner_deployment`) — eigener Caddy (kein Port-Konflikt), `output: standalone` ist schon gesetzt. Abweichungen: **lokaler Postgres-Container** (Drizzle, DSGVO-sauberer als Supabase) + **KEIN Google Analytics** (Tracker verboten).
  - Aufwand ~0,5–1 Tag. Auslöser = Pilot-Tor (echte Schüler-PII).

---

## Aufwands-Größenordnung (Rev. 2, grob)

Für Ressourcen-Entscheidung — keine Präzision, nur Magnitude:

| | Gebaut | Faktor zum Ziel |
|---|--------|------------------|
| CE-02 (~82 h Content) | ✅ vorhanden | 1× (Referenz) |
| Gesamt-Ziel ~1056 h | ~8 % | **~13× CE-02** |
| Phase 4 allein (~765 h) | 0 % | **~9× CE-02** |

**Lesart:** Der Vollausbau ist ein ~13-faches des bisher Gebauten. Das ist der zentrale Grund für (a) das Pilot-Tor — erst validieren, dann investieren — und (b) aggressive Parallelisierung + Wiederverwendung (zentrale Fakten-Basis, vorhandene Pläne). Konkrete Wochen/Token-Kosten erst nach Phase 1 schätzbar (dann ist 1 Thema durch die gehärtete Pipeline gemessen).

---

## Abhängigkeiten (kritischer Pfad)

```
Phase 0 ─► Phase 1 ─► Phase 2 ─► Phase 3 ─► 🚪 PILOT-TOR ─► Phase 4
                         └─────► Phase 5 (läuft parallel ab Phase 2)
Phase P (Produkt) ───────────────► nötig fürs Pilot-Tor ───┘
```

- Phase 1 ist Voraussetzung für ALLES danach (keine Massengenerierung ohne Härtung).
- Phase 3 (CE-02-Blaupause) vor Pilot-Tor → Generator kalibriert sich daran.
- **Pilot-Tor vor Phase 4** → ~800-h-Investition erst nach echter Validierung.
- Phase P (mind. P.1 Nachweis + P.2 Engine) muss vor dem Pilot-Tor stehen.
- Phase 5 ist Querschnitt, startet sobald die Checks (Phase 2) existieren.

---

## Risiken & Gegenmaßnahmen

| Risiko | Gegenmaßnahme |
|--------|---------------|
| Massengenerierung skaliert Fehler | Phase 1 zwingend vor Phase 4; Faktentreue-Check als Gate |
| `recherche/`-Index deckt einen Fakt nicht | Glossar-Fallback (0.2) + Cross-Reference; Fakt als „ungedeckt" markieren statt erfinden |
| Dozentin-Kapazität begrenzt | Nur HOCH-Findings + Stichprobe statt 100 % Review |
| Plan-Markdown wird für „gebaut" gehalten | `measure-content.ts` zählt nur `.ts`; Status-Tabellen entsprechend |
| Abundanz sprengt Prüf-Aufwand | Zwei-Schichten-Prinzip: nur Fakten-Schicht wird teuer verifiziert |
| Linearer Content → Adaptiv-Engine wirkungslos | Prinzip 1: ≥2 alternative Darstellungen pro Lernziel, als Design-Zwang in jedem Step |
| 0,55-Faktor falsch → gesamtes Mengen-Ziel falsch | Pilot-Tor PT.2 validiert früh an echten Schülern, vor der Hauptinvestition |
| ~800 h mit unbestätigtem Modell gebaut | Pilot-Tor als Gate: Phase 4 startet nur bei PASS |
| Fakten widersprechen sich über CE | Zentrale Fakten-Basis (Prinzip 2): referenzieren statt duplizieren |
| Parallel-Bau erzeugt Merge-Chaos | Pro-CE-Branch + Merge-Gate (Validierung PASS vor Merge) |
```

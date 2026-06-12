# Plan: Lernergebnis-First-Pipeline (statt Themen-First)

**Datum:** 2026-06-12 · **Status:** PLAN (nicht umgesetzt) · **Auslöser:** CE-02-Coverage-Audit (43 % VOLL, systematische Lücken) + Root-Cause „Content wurde gegen selbstgemachten Themen-Katalog gemessen, nie gegen den Rahmenplan".

## Prinzip
Die **offiziellen Lernergebnisse des Rahmenplans** werden zur maschinenlesbaren Wahrheitsquelle — INPUT für Generierung und MASSSTAB für Vollständigkeit. Der Themen-Katalog wird abgeleitet, nicht Ausgangspunkt. Einmal bauen, auf alle 11 CE anwenden.

---

## Phase 0 — Quelle absichern (klein, zuerst)
- Herausgeber des Curriculum-Volltexts verifizieren: **Fachkommission nach § 53 PflBG** (Rahmenpläne, 1./2. Aufl. 2020)? Falls unser PDF ein Schul-/Landescurriculum ist → offiziellen Fachkommissions-Rahmenplan beschaffen (frei verfügbar) und als Quelle nehmen.
- Output: bestätigte, autoritative Quelldatei.

## Phase 1 — Lernergebnis-Katalog (die Curriculum-Spec)
- Aus dem Curriculum-Volltext pro CE extrahieren → `specs/curriculum/ce-{NN}-lernergebnisse.json` (+ `.md` für Menschen).
- Schema pro Lernergebnis:
  ```
  { id, ce, le, text (VERBATIM), typ: wissen|koennen|einstellung,
    bloomVerb, bloomStufe (1-6), altersbezug: bool, kompetenzbereich,
    motorisch: bool }   // motorisch=true → Plattform kann nur kognitiv vorbereiten
  ```
- **Verbatim-verifiziert** gegen den Volltext (Pattern vom `zitat-verifizierer` wiederverwenden) → kein halluziniertes Lernergebnis.
- In EINEM Durchlauf für alle 11 CE (reines Parsen, günstig). ~mehrere hundert Lernergebnisse.
- **Das ist die neue Wahrheitsquelle.**

## Phase 2 — Coverage-Validator (der Massstab)
- `scripts/lernergebnis-coverage.ts` + Prüf-Agent.
- Input: CE-Lernergebnis-Katalog + Content der CE (kernfakten/situationen/themen).
- Pro Lernergebnis: **Abdeckung** (VOLL/TEILWEISE/FEHLT) + **Bloom erreicht?** (passt der Step-Typ zum geforderten Verb?) + **Altersabdeckung** + **motorisch-Ausnahme** (kognitiv erfüllt zählt, Handausführung ist praxispflichtig, kein Plattform-Malus).
- Hybrid wie die Grounding-Pipeline: deterministischer Grep-Vorfilter + LLM-Urteil pro Lernergebnis.
- Output: `content/ce-{NN}/lernergebnis-coverage.json` + `.md`.
- **Wird Pipeline-Gate:** eine CE ist erst „live-reif", wenn Coverage den Schwellenwert erreicht (Schwelle = Entscheidung).

## Phase 3 — Pipeline-Integration (Themen-First → Lernergebnis-First)
- Generierungs-Reihenfolge dreht: Der Lernergebnis-Katalog ist der **Auftrag** an Regisseur/Dozentin („decke diese Lernergebnisse auf diesen Bloom-Stufen für diese Altersgruppen"), nicht ein selbstgemachter Themen-Katalog.
- Die 7 Pipeline-Sync-Stellen aktualisieren (Regel `pipeline-sync.md`): `didaktik-regisseur`, `content-generator`, `didaktik-pruefer`, `pflege-validator`, `GESAMT-PROMPT-v2`, `ADAPTIVER-THEMENBOGEN`, `content/_types.ts`, `MEMORY.md`.
- Coverage-Validator als Pflicht-Stufe (analog `zitat-verifizierer`).

## Phase 4 — CE-02 als Pilot-Retrofit (Beweis)
- Neuen Validator auf CE-02 laufen lassen → die 13 FEHLT + 34 TEILWEISE bestätigen (Abgleich mit `specs/ce-02/lernergebnis-coverage-2026-06-12.md`).
- Fehlende Inhalte über den neuen Lernergebnis-First-Flow generieren:
  - **Wahrnehmung**-Block (Wahrnehmungsgesetze/-fehler) — kritisch
  - **Grundlagen-Strang** Anatomie/Physiologie (Bewegungsapparat/Herz-Kreislauf, Verdauung, Urogenital)
  - **Reflexions-Steps** für Einstellungsziele (Ekel-Legitimität, Pflegeprozess als Beziehungsprozess, eigene Biografie, Aufwand/Nutzen Doku)
  - **Alters-Breite** Kind/Säugling (Sensomotorik, Sauberkeitsentwicklung, Saug-Schluck)
  - Einzellücken (Augentropfen, Brille/Hörgerät, altersbed. Geschmack, Seh-/Hörbehinderung, MDK-Grundsatzstellungnahme)
  - **SIS-Widerspruch** vereinheitlichen (2014/6 Themenfelder)
- Validator erneut → Ziel-Coverage. CE-02 = Referenz-Implementierung.
- **Separater Track (NICHT hier gebündelt, größer):** visuelle Skill-Sequenzen (`medical-svg`) + Sprechübungen (Whisper).

## Phase 5 — Rollout-Bereitschaft CE 01, 03–11
- Mit Katalog + Validator + Pipeline ist jede weitere CE gleich auditierbar/füllbar. **Jetzt nur bereit — nicht ausgeführt.**

---

## Risiken
- **Quellenautorität** (Phase 0) — auf falschem Curriculum bauen wäre fatal.
- **Motorische/visuelle Lernergebnisse** — Textplattform kann sie nur kognitiv erfüllen; Validator muss das sauber trennen (kein Plattform-Malus, aber Kennzeichnungspflicht „Praxis nötig").
- **Aufwand** — Katalog+Validator = die eigentliche Engineering-Arbeit (einmalig). CE-02-Retrofit = Content-Generierung (Agenten-Flotte).

## Reihenfolge-Empfehlung
Maschinerie zuerst (Phase 0→1→2→3), dann CE-02 als Pilot (Phase 4). NICHT CE-02 von Hand fixen — sonst wiederholen wir den Fehler 11×.

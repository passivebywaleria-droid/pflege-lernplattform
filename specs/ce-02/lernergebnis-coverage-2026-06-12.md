# CE-02 Lernergebnis-Coverage-Matrix (Rahmenlehrplan § 53 PflBG)

> ## ✅ RE-VALIDIERUNG 2026-06-13 — Stand nach Lücken-Worklist (AP-1..4) + Recheck-Fixes
>
> Erneut mit 5 Prüf-Agenten (je 1 LE, leIndex 1–5 = Rahmenplan-LE 5–9) gegen den aktualisierten Content geprüft. **Alle FEHLT geschlossen.**
>
> | LE | VOLL | TEILWEISE | FEHLT (vorher→jetzt) |
> |----|------|-----------|----------------------|
> | 5 Pflegeprozess | 11 | 3 | 4 → **0** |
> | 6 Mobilität | 14 | 5 | 4 → **0** |
> | 7 Körperpflege | 13 | 0 | 2 → **0** |
> | 8 Ernährung | 7 | 9 | 2 → **0** (W6 Säugling-Saug/Schluck nachgebaut) |
> | 9 Ausscheidung | 6 | 7 | 1 → **0** (W1 äußere Genitalorgane nachgebaut) |
> | **Σ** | **~51** | **~24** | **13 → 0** |
>
> **Recheck-Fixes (2026-06-13):** LE8 W6 → `saeuglingspflege-saug-schluck-stoerung` (B21); LE9 W1 → `harnausscheidung-aeussere-genitalorgane` (B22); LE5 E1 „diskutieren" → echter reflection-Step `ce02-kovac-dok-035-aufwand-nutzen-reflexion`; Rechtsstand §1831→§1831 BGB.
>
> **Verbleibende TEILWEISE sind by-design / nicht-FEHLT:** (a) motorische Können-Ziele (Blutdruck messen, Katheter/Stoma/Beutel wechseln, UAG demonstrieren) — Plattform deckt nur kognitiv vor, Handausführung bleibt Praxis; (b) „aller Altersstufen"-Breite in einzelnen Ziele weiterhin erwachsenen-/geriatrie-betont; (c) wenige Wissens-Bündelungen (W5 Pflegediagnose-Funktion, W8 Mangelernährung↔Dekubitus-Kausalkette, soziale Dimension Bewegungseinschränkung) — Inhalt verstreut vorhanden, nicht als eigener Step gebündelt. Keine davon blockiert „0 FEHLT".

**Erstellt:** 2026-06-12 · **Quelle:** Fachkommission-Rahmenlehrplan CE 02 „Zu pflegende Menschen in der Bewegung und Selbstversorgung unterstützen", Lerneinheiten 5–9 (`recherche/curriculum-generalistik-volltext/`)
**Methode:** 5 Prüf-Agenten, je 1 LE, Abgleich offizielle Lernergebnisse (Wissen/Können/Einstellung) gegen `specs/ce-02/kernfakten/` + `content/ce-02/situationen/` + `content/ce-02/themen/`. Bewertung pro Lernergebnis: Abdeckung (VOLL/TEILWEISE/FEHLT) + Bloom-Stufe erreicht? + Altersstufen.

## Gesamtbilanz (83 Lernergebnisse)

| LE | Titel | VOLL | TEILWEISE | FEHLT | n |
|----|-------|------|-----------|-------|---|
| 5 | Pflege prozesshaft gestalten | 5 | 5 | 4 | 14 |
| 6 | Mobilität (aller Altersstufen) | 9 | 8 | 4 | 21 |
| 7 | Haut- und Körperpflege | 11 | 3 | 2 | 16 |
| 8 | Ernährung | 6 | 10 | 2 | 18 |
| 9 | Ausscheidung | 5 | 8 | 1 | 14 |
| **Σ** | | **36 (43 %)** | **34 (41 %)** | **13 (16 %)** | **83** |

## Muster (LE-übergreifend)

### 1. Anatomie/Physiologie-Grundlagen systematisch schwach
Kein dedizierter Grundlagen-Strang. Funktional gestreift, aber als Lektion fehlend:
- **Wahrnehmung / Wahrnehmungsgesetze / Wahrnehmungsfehler** (LE5 #2/#3) — FEHLT komplett, eigenständiger RLP-Wissensblock
- Herz-Aufbau, Wirbelsäule + alters-/entwicklungsbedingte Veränderungen, sensomotorische Kindesentwicklung (LE6 #2/#7/#8/#9) — FEHLT
- Arterien/Venen-Anatomie, Puls-Physiologie, systematische Gelenk-Bewegungslehre (LE6) — nur funktional
- Verdauungsorgan-Topografie (LE8 #1), Urogenital-Topografie (LE9 #1/#2) — nur funktional

### 2. Einstellungs-/Reflexionsziele unterbedient (Bloom-Lücke)
Inhalt oft da, aber kein Reflexions-/Diskussions-Step-Format → Bloom-Verb „diskutieren/reflektieren" nicht erreicht:
- **Legitimität professioneller Ekelgefühle** (LE9 #13) — FEHLT (Ekel nur als Patientenemotion); RLP-Fish-bowl-Ziel
- Pflegeprozess als **Beziehungsprozess** (LE5 #10) — FEHLT (nur Problemlösungsprozess gelehrt)
- Aufwand/Nutzen Doku diskutieren (LE5 #14), eigene Bewegungs- (LE6 #21) / Essbiografie (LE8 #18) reflektieren — Inhalt da, Step-Format fehlt

### 3. „Aller Altersstufen" nur teilweise eingelöst
Stark adult-/geriatrie-zentriert. Kind/Säugling-Entwicklung lückenhaft:
- Sensomotorische Meilensteine + entwicklungsfördernder Säuglings-Transfer (LE6) fehlen
- Kindliche **Sauberkeitsentwicklung/Trockenwerden** (LE9) — 0 Treffer
- Säugling separat statt integriert geplant (LE7 K3, LE8)

### 4. Kleinere konkrete Einzellücken
Augentropfen verabreichen (LE7 K8), Umgang mit Brille/Hörgerät (LE7 K7), Auswirkung Seh-/Hörbehinderung (LE7 W4), altersbedingte Geschmacksveränderung (LE8 #3), MDK-Grundsatzstellungnahme (LE5 #13), Geschichte des Pflegeprozesses (LE5 #1, nur dünn).

### 5. Daten-Konsistenzfehler (vor Live-Deploy fixen)
**SIS**: Kernfakten „seit 2016 / 6 Gliederungspunkte" vs. Content „BMG SIS 2014 / 5 Themenfelder". Korrekt: Konzept Beikirch 2014, Rollout ab 2015/16, **6 Themenfelder**.

## Stärken (ehrlich)
- **Angewandte Pflegepraxis stark**: Prophylaxen, Transfer/Kinästhetik, Assessment-Instrumente (MNA/NRS/PEMU) mit aktiven Step-Typen (calculation, sorting, branching, freetext) — Bloom bei Können oft ÜBER Niveau.
- **Einstellungsziele, wo umgesetzt, didaktisch hervorragend**: Scham/Würde/Intimität/Kultur in `ls-nguyen-stoma`, `frau-m-nacht-sturz`.
- **Motorische Skills** (durchführen/wechseln/katheterisieren) sind plattformfremd — kognitiv gut vorbereitet, Handausführung bleibt Praxis (kein Vorwurf, aber Kennzeichnungspflicht).

## Empfehlung (Priorität)
1. **Wahrnehmung/Wahrnehmungsfehler** (LE5) — neuer Themenblock, kritisch.
2. **Anatomie/Physiologie-Grundlagenstrang** (Bewegungsapparat/Herz-Kreislauf, Verdauung, Urogenital) — als eigene Wissens-Bausteine.
3. **Reflexions-Steps** für die Einstellungsziele (Ekel-Legitimität, Beziehungsprozess, eigene Biografie, Aufwand/Nutzen).
4. **Alters-Perspektive** Kind/Säugling systematisch (Sensomotorik, Sauberkeitsentwicklung, Saug-Schluck).
5. Einzellücken + SIS-Widerspruch.
6. **Visuelle/prozedurale Ebene** (Bild-Sequenzen Handgriffe) + **Sprechübungen** — siehe Vorbefund 2026-06-12.

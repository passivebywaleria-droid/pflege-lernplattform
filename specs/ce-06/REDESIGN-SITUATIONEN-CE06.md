# CE-06 — Situations-Redesign (curriculum-first, Wissens-Tabs verzahnt)

> **Ansatz (entschieden 2026-07-12):** Redesign + Wiederverwendung. Jede Situation
> wird curriculum-first neu **architektiert** — nicht von Null neu geschrieben. Die
> validierten Anwendungs-Steps + belegten Kernfakten bleiben als Baumaterial; korrigiert
> werden die **Kompetenz-Architektur (KB-Marker)** und der **Wissens-Rhythmus** (Tabs an
> designten Beats). Wagner ist das Template; die anderen 8 folgen dem Muster.

## Warum überhaupt Redesign statt Retrofit

Retrofit (Tabs dazwischenschieben) erzeugt Stückwerk: Wissen und Anwendung bauen nicht
aufeinander auf. Beim Lesen von Wagner zeigten sich zwei Defekte, die ein Retrofit NICHT
behebt:

1. **KB-Marker falsch kategorisiert.** Kernhandlungen (erkennen, Herzdruckmassage, AED)
   trugen `II.1` (Kommunikation) statt `I.4` (die pflegerische Akuthandlung = LE1-Schwerpunkt).
   Teils sogar KB außerhalb des LE1-Sets (`I.1`, `I.2`). → Kompetenznachweis nicht führbar.
2. **Wissens-Korridor 10 %** (1 Tab / 10 Steps) statt 20–30 %; Wissen kam nicht vor der
   Anwendung.

## Die KB-Regel (verbindlich, präzisiert)

Der `kompetenzbereich`-Marker jedes Steps MUSS aus dem **Schwerpunkt-Set der LE** stammen
(aus `specs/curriculum/ce-XX-lernergebnisse.json`: `kompetenzbereichPrimaer` + `…Sekundaer`).
Nie ein KB außerhalb dieses Sets, nie fachlich geraten.

- **Wissens-Tabs (inlineWissen):** immer der **LE-Primär-Schwerpunkt** (LE1 = I.4).
- **Anwendungs-Steps:** der KB, den der Step **tatsächlich** trainiert — aber NUR aus dem
  LE-Set. Kern-Akuthandlung → Primär-Schwerpunkt (I.4); echte Kommunikation → II.1;
  Team/interprofessionell → III.2; Reflexion des eigenen Handelns → V.2.
- **Coverage-Ziel:** über die ganze Situation sollen die Schwerpunkte der LE nachweisbar
  abgedeckt sein. Das macht den Kompetenznachweis pro KB führbar.

> LE1-Schwerpunkt-Set (Rahmenlehrplan): **I.4** (primär) · II.1 · II.3 · III.2 · V.2.

## Wagner — Soll-Arc (Template)

13 Steps, 3 Wissens-Tabs (23 %). **Fett = neu**, sonst wiederverwendet (Marker korrigiert).

| # | Phase | Step | Typ | Bloom | KB alt → **neu** | Kernfakt | Rolle |
|---|-------|------|-----|-------|------------------|----------|-------|
| 1 | erkennen | erk-01 | mc | 4 | II.1 → **I.4** | F-01/02/09 | Hook (Antizipation) |
| 2 | erkennen | erk-01b HKS | **inlineWissen** | 2 | I.4 ✓ | F-01/02/03 | Wissen (da) |
| 3 | erkennen | erk-02 Puls | truefalse | 3 | II.1 → **I.4** | F-03 | anwenden |
| 4 | alarmieren | **A · Rettungskette** | **inlineWissen** | 2 | **I.4** | F-04/05/11 | **Wissen (neu)** |
| 5 | alarmieren | ala-01 | mc | 4 | II.1 ✓ | F-04/05 | anwenden (Delegation = Komm.) |
| 6 | erstmassnahmen | **B · No-Flow-Zeit** | **inlineWissen** | 2 | **I.4** | F-06/07/08 | **Wissen (neu)** |
| 7 | erstmassnahmen | erm-01 HDM | sorting | 3 | II.1 → **I.4** | F-06/07/08 | anwenden |
| 8 | erstmassnahmen | erm-02 AED | branching | 5 | II.1 → **I.4** | F-11/05 | anwenden (Fall-Beat) |
| 9 | erstmassnahmen | erm-03 Wechsel | branching | 4 | I.1 → **III.2** | F-06/07 | anwenden (Team) |
| 10 | uebergeben | ueb-01 SBAR | mc | 4 | I.1 → **II.1** | F-07→(kein Kernfakt nötig) | anwenden (Kommunikation) |
| 11 | reflektieren | ref-01 | reflection | 5 | I.2 → **V.2** | — | Reflexion (E1) |
| 12 | reflektieren | ref-02 CIRS | mc | 4 | I.2 → **III.2** | F-11 | Systemsicherheit |

**KB-Coverage Wagner (nachweisbar):** I.4 (Kern, 7 Steps) · II.1 (2) · III.2 (2) · V.2 (1)
= **4 von 5** LE1-Schwerpunkten. II.3 deckt eine andere LE1-Situation.
**Bloom:** Wissens-Tabs 2, Anwendung 3–5 → Steigerung sichtbar.
**Wissens-Korridor:** 3/13 = **23 %** ✓.

### Anmerkung ueb-01 (SBAR) Kernfakt — KORRIGIERT
`kernfaktId: ["F-07"]` ist RICHTIG: bare `F-07` löst über `themaPrimaer: "notfallassessment"`
auf **notfallassessment/F-07 = SBAR** (Leonard 2004) auf — NICHT auf reanimation-bls/F-07
(Kompressionsfrequenz). Also behalten. KB **II.1** (Kommunikation). Lehre: bare F-IDs immer
über das themaPrimaer lesen, bevor man sie „sachfremd" nennt.

## Die 2 neuen Wissens-Tabs (Bau literatur-first)

### A — „Die Rettungskette in der Hand" (P2, vor ala-01)
- **KB** I.4 · **Bloom** 2 · **Kernfakten** F-04 (Notruf zuerst), F-05 (Einzelhelfer bleibt),
  F-11 (AED so früh wie möglich).
- **Lehrkern:** die 4 Glieder erkennen → alarmieren → drücken → defibrillieren; der Notruf
  hat Priorität (phone-first); der Einzelhelfer bleibt beim Patienten und delegiert namentlich,
  statt selbst Geräte zu holen. WARUM: jede Sekunde ohne Kompression ist No-Flow-Zeit.
- **Spektrum:** Einzelhelfer ohne zweite Person · zwei Helfer (delegieren) · beobachteter
  Kollaps mit griffbereitem AED.
- **Faustregel:** „Erst das Team rufen (lassen), dann drücken — und nie den Patienten allein
  lassen, um Geräte zu holen."

### B — „Warum Drücken alles ist: die No-Flow-Zeit" (P3, vor erm-01)
- **KB** I.4 · **Bloom** 2 · **Kernfakten** F-06 (5–6 cm + vollständige Entlastung),
  F-07 (100–120/min), F-08 (30:2).
- **Lehrkern:** die Herzdruckmassage ersetzt für Minuten die Pumpe des Herzens; Qualität =
  tief, schnell, vollständig entlasten, kaum unterbrechen. Jede Pause = No-Flow = Gehirn ohne
  Blut. Deshalb 30:2 knapp halten und bei Ermüdung wechseln (verbindet erm-01/02/03).
- **Spektrum:** zu flach/zu langsam (Ermüdung) · Pause für Puls-Check (No-Flow-Falle) ·
  tief + schnell + durchlaufend (Ziel).
- **Faustregel:** „Drücke hart, drücke schnell, lass vollständig los — und hör so gut wie nie auf."

Beide nach dem Gold-Standard-Aufbau (Antizipation → WARUM belegt → Regel → mentales Modell
→ Faustregel → Spektrum → Karteikarte), paraphrasiert (Abstandstest 0), Glossar-Begriffe
markiert, kein Antwort-Step (verschiebt das Play-then-Gate nicht).

## Template-Regeln für die anderen 8 Situationen

1. LE-Schwerpunkt-Set aus dem Katalog holen → **KB-Marker aller Steps** dagegen prüfen/korrigieren.
2. **Wissens-Landkarte der LE** → welche Wissens-Chunks trägt DIESE Situation? Tabs an den
   Beats „vor der ersten Anwendung des Chunks".
3. **Korridor 20–30 %** Wissens-Tabs; Wissen vor Anwendung; Bloom-Steigerung sichtbar.
4. Validierte Anwendungs-Steps **wiederverwenden**, nur Marker + Reihenfolge anfassen.
5. Nach dem Redesign erneut: tsc + Gates + pflege-validator/klinik-panel.

## Reihenfolge
Wagner (Pilot-Einstieg, Template) → Ríos → Lehmann → Novak (LE1 komplett) → dann LE2–LE5.

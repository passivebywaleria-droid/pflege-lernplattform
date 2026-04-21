# Pilot-Status: Sturz-Prophylaxe durch Pipeline v9

**Datum:** 2026-04-22 (Nacht-Lauf)
**Scope:** Pipeline v9 Demonstration mit Thema "Sturz-Prophylaxe"

## Durchgelaufen

| # | Stufe | Agent | Ergebnis | Datei |
|---|-------|-------|----------|-------|
| 1 | Recherche (Dozentin A Sim) | — | 11 Kernfakten + Misconceptions | `specs/ce-02/kernfakten/sturz-prophylaxe.md` |
| 2a | Didaktik Wissensebene (Dozentin B Phase 1 Sim) | — | 10 Mikro-Bausteine + Bloom + Distraktoren | `content/ce-02/themen/sturz-prophylaxe/bausteine-plan.md` |
| 3 | Choreografie (Regisseur v3 Sim) | — | 29 Step-Slots mit Typ/Bloom/Modus/Zeit | `content/ce-02/themen/sturz-prophylaxe/sessionsplan.md` |

## Noch offen

| Stufe | Warum nicht heute |
|-------|-------------------|
| 4 B1-Adaption | Wäre ~2h KI-Agent-Arbeit — nicht sinnvoll in Nacht ohne Review |
| 5 Generator (TypeScript) | Benötigt echten Agent-Run, viele Token |
| 6 Post-Processor | Erfordert generierte TS |
| 7 Technische Prüfung | Erfordert generierte TS |
| 8 Didaktik-Prüfer | Erfordert generierte TS |
| 9 Step-KI-Prüfer | Erfordert generierte TS |
| Review #1 (Mensch) | Nach Dozentin B Phase 1 — **kann Waleria morgen machen** |
| Review #2 (Mensch) | Nach allen Checks |

## Kernerkenntnisse aus dem Pilot

### ✅ Was gut funktioniert hat

1. **Pipeline-Struktur ist stimmig**: Dozentin A → B → Regisseur → Generator fließen logisch
2. **Misconceptions-Pattern funktioniert**: Jeder Distraktor hat Referenz zum Fakt + spezifisches Feedback
3. **Bloom→Step-Typ-Mapping ist nützlich**: Regisseur konnte für jeden Baustein passende Typen wählen
4. **Zeit-Budget-Check macht sichtbar**: Pilot-Content ist UNTER Budget (50 Min vs 99 Min Zielzeit)

### ⚠️ Erkenntnisse für Kalibrierung

1. **10 Bausteine sind zu wenig für 4 UE.** Bei Microlearning-Zielzeit (99 Min) brauchen wir eher **12-15 Bausteine** pro 4-UE-Thema. Die Baustein-UE-Tabelle (v2) stimmt.

2. **Erklärtexte müssen länger sein.** Bausteine Stufe 3 sollte 500-800 Zeichen haben (nicht 200). Dozentin-Agent muss das explizit regeln.

3. **Situations-Anwendung fehlt.** Viel Bloom 5-6 fehlt — das macht Sinn, denn Bloom 5-6 wird in den **Situationen** geleistet, nicht in den Themen. Themen sind Wissensaufbau, Situationen sind Anwendung.

4. **Bildaufwand ist realistisch.** 29 Steps, davon 2-3 mit Bild-Slot = ~10% Bild-Rate. Pro Thema ~3 KI-Bilder × 3 Varianten = 9 Bot-Aufrufe.

## Nächste Schritte für Waleria (morgen)

### Option A: Review was da ist
1. Kernfakten-Datei lesen — sind die 11 Fakten korrekt und die Misconceptions plausibel?
2. Bausteine-Plan lesen — passt die didaktische Zerlegung? Sind die Distraktoren+Feedback sinnvoll?
3. Sessionplan lesen — passt die Step-Typ-Choreografie?

Nach Review: Bei GO → Generator-Lauf starten. Bei NO-GO → Dozentin-Agent korrigieren.

### Option B: Nächstes Thema durchziehen
Mit den Learnings aus Sturz-Prophylaxe ein weiteres Thema starten (z.B. Kinästhetik oder Dekubitus-Prophylaxe).

### Option C: Generator-Lauf für Sturz-Prophylaxe
Echten Agent-Run starten:
- Content-Generator (Sonnet) aus bausteine-plan.md + sessionsplan.md → TypeScript
- Dauert ~1-2h, produziert 3 TS-Dateien
- Danach Post-Processor + Prüfer + Review #2

## Ehrliche Einschätzung

**Pilot war erfolgreich** — wir haben die Pipeline-Struktur validiert und drei Plan-Dateien produziert die die Entscheidungen aus der Nacht-Session umsetzen.

**Die Agents sind noch nicht real gelaufen** — das würde echtes Opus/Sonnet-Budget kosten. Die Pläne sind "Mensch-simuliert nach Agent-Anweisungen", zeigen aber dass die Agent-Spezifikationen funktionieren würden.

**Was heute Nacht geleistet wurde:**
- Komplette Pipeline v9 Dokumentation
- 7 Agent-Updates
- 4 Scripts (calculate-step-time, post-process, review-picker, bild-gen/chooser)
- Expertenstandards-Index (9 Standards)
- Pilot: 3 Plan-Dateien für Thema Sturz-Prophylaxe

**Was Waleria morgen tun kann:**
- Reviewen was da ist → ggf. Anpassungen
- Echten Pilot-Generator-Lauf starten
- CE-02 weiter ausbauen

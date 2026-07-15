# Pflege-Review (B1-Re-Lens): ls-yildiz-thoraxschmerz

**Geprüft:** 2026-07-15
**Lens:** pflege-validator (5. semantischer Lens)
**File:** `content/ce-06/situationen/ls-yildiz-thoraxschmerz/phases.ts` (735 Z., 5 Phasen)
**Kontext:** C1 war bereits PASS. **Nur B1-Felder geändert** (reine Sprachsanierung). Deterministische Gates grün. Fokus: hat die B1-Vereinfachung fachlich Falsches oder Irreführendes eingeführt?

## Prüfachsen (vom Auftrag)

| Achse | Ergebnis | Beleg |
|-------|----------|-------|
| Angina pectoris vs. akutes Koronarsyndrom | B1 fachlich treu (ausbleibende Besserung = Warnzeichen sauber erhalten) | Z. 70, 123 |
| Nitrat-Wirkung / Kompetenzgrenze | Korrekt: Wirkstoff im Nitrospray; Kreislauf-Absacken bei niedrigem RR; nur auf Arztanordnung | Z. 273, 549 |
| Oberkörperhochlagerung ≠ Schocklage | Korrekt begründet (venöser Rückstrom / Lungenstauung), Schocklage explizit falsch | Z. 418, 502 |
| Pulsoximetrie | Korrekt vereinfacht („Sauerstoff-Wert im Blut, Clip am Finger") | Z. 189, 419 |
| „Zeit ist Herzmuskel" | In allen B1-Feldern korrekt übertragen | Z. 273, 350 |
| Abbruch-Grenze RR<90 & Puls>100 | Verbatim-treu (F-07) in B1 erhalten | Z. 419, 423, 586 |

## Findings

### F-B1-01 (NIEDRIG): Terminologie-Inkonsistenz „normale" vs. „stabile" Angina
- **Stelle:** Zeile 70, `explanationB1` (ce06-yildiz-erk-01)
- **Problem:** B1 schreibt „Eine **normale** Angina pectoris bessert sich auf Ruhe und Nitrat". C1 und der Wissens-Tab (Z. 123) verwenden konsistent „**stabile** Angina pectoris". Zulässige B1-Vereinfachung, aber leicht inkonsistent zum Tab derselben Situation.
- **Empfehlung:** Optional „normale" → „bekannte/stabile". Kein fachlicher Fehler, nicht blockierend.

### F-B1-02 (NIEDRIG, nicht neu durch B1): ACS = „Fachname für Herzinfarkt"
- **Stelle:** Z. 57/70/123/337, mehrere contentB1/explanationB1/kerntextB1
- **Problem:** B1 setzt ACS mit „Herzinfarkt" gleich. Streng fachlich umfasst das ACS auch die instabile Angina. Die Gleichsetzung ist jedoch **wortgleich zur bereits als PASS bewerteten C1-Parenthese** „akutes Koronarsyndrom (Herzinfarkt)" und im Fallkontext (Infarktverdacht) didaktisch vertretbar. **Nicht durch die B1-Sanierung neu eingeführt.**
- **Empfehlung:** Belassen (Konsistenz mit C1). Kein Handlungsbedarf.

## Positiv geprüft (keine Findings)

- Keine falsche Beruhigung — B1 warnt aktiv gegen „wird schon wieder" (Z. 273/312).
- Kompetenzgrenze (O2/Nitro/Schmerzmittel nur auf Arztanordnung) in B1 unverändert korrekt.
- „du"-Anrede durchgängig, kein „Sie" an Lernende.
- Kein Anti-Pattern (kein indirektes Licht, keine NRS-Bagatellisierung, kein Heben/Ziehen, kein Glück-vor-Assessment, kein Bettgitter-Verstoß).
- kardiogener Schock in B1 sachlich korrekt glossiert (Herz pumpt zu schwach → Gehirn zu wenig Blut).

## Zusammenfassung
- **0 HOCH · 0 MITTEL · 2 NIEDRIG**
- **Durch die B1-Sanierung neu eingeführte Fehler: 0**
- Alle sicherheitskritischen Kernaussagen sind in B1 fachlich treu zur PASS-C1 erhalten.
- **K.O.-Verdikt: PASS**

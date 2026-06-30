# Beschaffungsliste — Referenzwerte (W1 Zahlen-Validator)

> Gründerin-Regel: Die Range-DB (`recherche/referenzwerte.json`) wird **ausschließlich
> aus unserem Korpus** (`recherche/`) befüllt — jeder Wert verbatim belegt. **Was im
> Korpus fehlt, steht hier** und wird NICHT erfunden. Diese Liste ist die Bestellung an
> die Gründerin / Dozentin.
>
> Stand: 2026-06-30 · Korpus-Recherche + Verifikation (grep) durch Chat 0 (Pipeline-Härtung).

---

## In der DB vorhanden (verbatim belegt) — kein Bedarf

**Erwachsene (alle 7 Vitalwerte vollständig belegt):**
Blutdruck syst./diast., Puls, Atemfrequenz, Körpertemperatur, SpO2, Blutzucker nüchtern
(mg/dl + mmol/l). Quelle überwiegend `icare-examen-kompakt-volltext` (Tab. 14.3/14.4/14.6/14.7
+ KOMPAKT-Kästen), Blutzucker zusätzlich `pflege-heute-volltext` / `icare-krankheitslehre-volltext`.

**Kinder (Puls + Atemfrequenz je Altersstufe belegt):**
Neugeborenes, Säugling, Kleinkind, Schulkind, Jugendlicher — aus Tab. 14.3 / 14.6.

---

## Offene Lücken — bitte beschaffen / freigeben

| # | Größe | Zielgruppe | Was fehlt | Folge im Validator | Vorschlag |
|---|-------|-----------|-----------|--------------------|-----------|
| 1 | **Blutzucker nüchtern** | Erwachsen | **Untergrenze** (Hypoglykämie-Schwelle, z.B. < 70 mg/dl / < 3,9 mmol/l) | `min=null` → zu niedrige Norm-Claims werden NICHT geprüft | Hypoglykämie-Definition aus Diabetes-/Innere-Quelle nachliefern |
| 2 | **SpO2** | Erwachsen | Tabellierter **Normbereich** (z.B. 95–100 %) statt Einzelwert | DB nutzt min=93 (kritische Schwelle) als Floor — funktioniert, aber konservativ | optional: Pulsoxymetrie-Normbereich aus Pneumologie-/Anästhesie-Quelle |
| 3 | **SpO2** | Kinder | Pädiatrischer SpO2-Normwert (altersbezogen) | Kein Kinder-SpO2-Eintrag → SpO2-Norm-Claims in Kinder-Kontext werden übersprungen (+geloggt) | aus Kinderkrankenpflege (Hoehl/Kullick) nachliefern |
| 4 | **Körpertemperatur** | Kinder | Eigene kindliche Temperatur-Normtabelle | Kein Kinder-Temp-Eintrag → Temp-Norm-Claims in Kinder-Kontext übersprungen (+geloggt) | aus Kinderkrankenpflege nachliefern |
| 5 | **Blutzucker** | Kinder | Pädiatrischer Normbereich (nur Neugeborenen-Hypoglykämie-Schwelle < 45 mg/dl belegt, kein Normbereich) | Kein Kinder-BZ-Eintrag → übersprungen | aus Neonatologie/Pädiatrie nachliefern |
| 6 | **Blutdruck** | Kinder | Nur **Punkt-Werte** je Altersstufe belegt (z.B. Kleinkind 90/60), **kein Normband** | Kein Kinder-RR-Eintrag (Band nicht aus Punktwert ableitbar ohne Erfindung) → übersprungen | pädiatrische RR-Perzentilen/Normbänder beschaffen |

---

## Redaktionell zu klären (Quellen-Diskrepanzen im Korpus)

- **Kleinkind RR diastolisch:** Tab. 14.4 = 60, Tab. 33.1 = 50. (Aktuell kein Kinder-RR in DB → irrelevant bis #6 geklärt.)
- **Jugendlicher Atemfrequenz:** Tab. 14.6 = 16–22, Tab. 33.1 = 10–22. DB nutzt 16–22 (plausibler); bei Beschaffung gegenprüfen.

---

## Arbeitsweise beim Nachtragen

1. Beleg verbatim per `grep -n` im Korpus finden (Datei + Zeile + exaktes Zitat).
2. Eintrag in `recherche/referenzwerte.json` ergänzen (Schema: `id, groesse, physEinheit,
   position, zielgruppe, altersMarker, aliasse, min, max, quelle{datei,zeile,zitat}, hinweis`).
3. `npx tsx scripts/klinik-zahlen-check.ts ce-02 --strict` laufen lassen, Findings prüfen.
4. Diese Lücke aus der Tabelle oben streichen.

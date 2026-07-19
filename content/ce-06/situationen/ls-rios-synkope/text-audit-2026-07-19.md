# Text-Audit ls-rios-synkope — 2026-07-19

> Voll-Audit aller Texte (Auftrag Waleria: „jeden Text in jedem Schritt").
> Geprüft: 12 Steps + patient.ts + situationen.ts-Eintrag, C1 UND B1.
> Linsen: Halbwissen/Scope · fachliche Korrektheit (wörtlich gegen I care 3. Aufl.) ·
> B1-Drift · Konsistenz. Prüfer: pflege-validator-Agent (audit-rios).

**Ergebnis: 0 HOCH · 1 MITTEL · 4 NIEDRIG — K.O.-Verdikt PASS.**
Alle Zahlen gegroundet (BZ <50 Def / <70 Symptome / 48 / 120, Glukose 40 % i.v. =
ärztlich, Status epilepticus >5 min, tonisch-klonisch). B1 ohne gefährlichen Drift.
Patient-Daten konsistent. Distraktoren korrekt falsch.

## Findings

### F-01 (MITTEL) — Teaser widerspricht dem eigenen Fall ✅ GEFIXT 2026-07-19
`situationen.ts` Teaser: „…kommt von allein wieder zu sich" — FALSCH für diesen Fall:
Ríos bleibt bewusstseinsgetrübt (Schmerzreiz-Reaktion, Phase 1–3), Phase-4-kontext
wörtlich: „Nach der ärztlich verabreichten Glukose klart Herr Ríos auf". Er kommt
NICHT von allein zurück. Untergräbt die Kern-Sicherheitsbotschaft (schwere
Hypoglykämie ist behandlungspflichtig). Beleg: I care 3. Aufl. „Hypoglykämie …
< 50 mg/dl"; „Intravenös wird hochprozentige Glukoselösung gespritzt".
Fix: Teaser umformuliert — ohne „von allein", Widerspruch beseitigt.

### F-02 (NIEDRIG) — Titel „Synkope" als didaktischer Twist
Der Fall ist definitionsgemäß keine Synkope (selbstlimitierend), sondern
hypoglykämische Bewusstseinstrübung. Als Präsentations-Bild („sieht aus wie
Synkope, ist Hypoglykämie") vertretbar → kein Muss-Fix, Entscheidung Gründerin.

### F-03 (NIEDRIG) — erm-03: Seitenlage + Beine hoch
Beides gleichzeitig physisch nicht voll umsetzbar; Text priorisiert korrekt den
Atemweg und qualifiziert. Vertretbar; optionale Präzisierung möglich.

### F-04 (NIEDRIG) — abschlussText „Gemessen statt geraten"
Leicht verkürzt (entscheidend war Messen UND ärztliche Glukose i.v.); als
Merk-Botschaft legitim. Beobachtung, kein Fix nötig.

### F-05 (NIEDRIG / kein Fehler) — erm-02 Shunt-Realismus
Lehrsatz korrekt (Pflege punktiert nicht eigenmächtig, Glukose i.v. ärztlich).
Nuance: während laufender Dialyse existiert die Dialyse-Linie als Zugang.
Keine Änderung nötig.

## Nachtrag (2026-07-19, Waleria-Entscheidung)
- F-02 ✅ GEFIXT: Titel „Synkope während der Dialyse" → **„Kollaps während der
  Dialyse"** (B1: „Kollaps bei der Dialyse"). Begründung: Titel ist der
  Erinnerungsanker und widersprach der eigenen Synkope-Definition des Falls
  (kommt von allein zurück — Ríos nicht). situationId bleibt ls-rios-synkope
  (URLs/Fortschritt unangetastet). Der Hypoglykämie-Twist bleibt im Spielverlauf.

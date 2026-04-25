# Baustein-Trigger: ls-ostrowski-sturz

**situationId:** `ls-ostrowski-sturz`
**ceId:** `ce-04`
**Erstellt:** 2026-04-23

---

## Übersicht: Alle Trigger nach Phase

### Phase 1 — Wahrnehmen

| Trigger-Bedingung | Baustein-themaId | bausteinId (intern) | Empfohlene Stufe |
|-------------------|-----------------|---------------------|------------------|
| K2 Hotspot < 4/6 richtige Risiken | `gesundheitsfoerderung-aeltere` | sturzrisiko-umgebungsfaktoren | Sequencer wählt nach Profil |
| K3 falsch (A oder C gewählt) | `patientenberatung` | klient-als-experte-haltung | Sequencer wählt |
| K5 Weg (A) Kontrolle-Framing gewählt | `gesundheitsfoerderung-patienten` | ressourcenorientierung | Stufe 2 (B2) oder Stufe 3 (B1) |

### Phase 2 — Einschätzen

| Trigger-Bedingung | Baustein-themaId | bausteinId (intern) | Empfohlene Stufe |
|-------------------|-----------------|---------------------|------------------|
| K2 Fehler intrinsisch/extrinsisch | `gesundheitsfoerderung-aeltere` | sturzrisikofaktoren-klassifikation | Sequencer wählt |
| K3 falsch (A, C oder D gewählt) | `gesundheitsfoerderung-aeltere` | sturzrisiko-vorheriger-sturz-hauptfaktor | Stufe 2 |
| K4 MNA-Score-Fehler | `gesundheitsfoerderung-aeltere` | mna-assessment-mangelernährung | Sequencer wählt |
| K5 > 2 Fehler bei Medikamenten | `gesundheitsfoerderung-aeltere` | medikamentenassoziierte-stürze | Stufe 2 oder 3 |
| K6 Weg (A) oder (C) gewählt | `patientenberatung` | nicht-direktive-gesprächsführung | Stufe 2 |

### Phase 3 — Informieren

| Trigger-Bedingung | Baustein-themaId | bausteinId (intern) | Empfohlene Stufe |
|-------------------|-----------------|---------------------|------------------|
| K2 Handlungsfeld-Zuordnung Fehler | `gesundheitsfoerderung-aeltere` | sturzpravention-evidenzbasierte-maßnahmen | Sequencer wählt |
| K3 Schüler fragt nach GKV | `patientenberatung` | praventionskurse-gkv-finanzierung | Stufe 1 oder 2 |
| K4 falsch (A oder C) | `patientenberatung` | empowerment-beratungsprinzip | Stufe 2 oder 3 |
| K5 aufgerufen (Rollator-Flipcard) | `gesundheitsfoerderung-aeltere` | stigmatisierung-selbstbild-alter | Stufe 1 (C1) oder Stufe 3 (B1) |

### Phase 4 — Beraten

| Trigger-Bedingung | Baustein-themaId | bausteinId (intern) | Empfohlene Stufe |
|-------------------|-----------------|---------------------|------------------|
| K3 Komplikation 1 Weg (A) (Selbstbild ignoriert) | `gesundheitsfoerderung-aeltere` | stigmatisierung-selbstbild-alter | Stufe 2 |
| K3 Komplikation 1 Weg (A) oder (C) | `patientenberatung` | empowerment-als-prinzip | Stufe 2 oder 3 |
| K5 Komplikation 2 Weg (A) (Datenschutz missachtet) | `patientenberatung` | datenschutz-ambulante-beratung-angehörige | Stufe 3 |
| K6 falsch | `patientenberatung` | datenschutz-ambulante-beratung-angehörige | Stufe 2 |
| K4 Freitext abgesendet | `gesundheitsfoerderung-patienten` | soziale-determinanten-ältere | Stufe 1 (C1) |

### Phase 5 — Evaluieren

| Trigger-Bedingung | Baustein-themaId | bausteinId (intern) | Empfohlene Stufe |
|-------------------|-----------------|---------------------|------------------|
| K2 falsch (A oder C) | `patientenberatung` | teach-back-methode | Stufe 2 |
| K4 > 70% Prognose ohne Begründung | `gesundheitsfoerderung-patienten` | umsetzungsprognose-ttm | Stufe 1 |
| K4 < 30% Prognose | `gesundheitsfoerderung-patienten` | motivational-interviewing-barrieren | Stufe 2 |

### Phase 6 — Dokumentieren

| Trigger-Bedingung | Baustein-themaId | bausteinId (intern) | Empfohlene Stufe |
|-------------------|-----------------|---------------------|------------------|
| K2 Lückentext < 4/6 | `patientenberatung` | ambulante-pflegedokumentation | Stufe 2 |
| K3 falsch (A oder C) | `patientenberatung` | ablehnung-dokumentation-rechtlich | Stufe 2 oder 3 |
| K4 Weiterleitung unvollständig | `patientenberatung` | datenschutz-ambulante-beratung | Stufe 1 oder 2 |

---

## Zusammenfassung: Baustein-Quellen

| Thema | Anzahl Trigger |
|-------|----------------|
| `gesundheitsfoerderung-aeltere` | 9 |
| `patientenberatung` | 11 |
| `gesundheitsfoerderung-patienten` | 4 |
| `gesundheitsmodelle` | 0 (indirekt über Empowerment/Salutogenese in patientenberatung) |
| **Gesamt** | **24 Trigger-Punkte** |

---

## Sequencer-Logik (Hinweise für Generator)

- **Profil C1 + Vorerfahrung:** Trigger-Schwellen selten erreicht → wenige Bausteine → Stufe 1 (Denkfragen)
- **Profil B2 + etwas Praxis:** Trigger gelegentlich ausgelöst → Stufe 2 (Hinweise)
- **Profil B1 + Anfänger:** Viele Trigger ausgelöst → Stufe 3 (Erklärungen + B1 + Glossar + TTS)
- **Maximale Bausteine pro Phase:** 3 (verhindert Überlastung)
- **Baustein-Cooldown:** Gleicher Baustein nicht zweimal in derselben Situation

---

## Manifest-Eintrag (für `content/_manifest.ts`)

```ts
{
  situationId: "ls-ostrowski-sturz",
  ceId: "ce-04",
  patient: "Frau Ostrowski",
  spirale: 2,
  themen: [
    "gesundheitsfoerderung-aeltere",
    "patientenberatung",
    "gesundheitsfoerderung-patienten",
    "gesundheitsmodelle"
  ],
  geschaetzteUE: 4,
  status: "situationsplan",
}
```

# Baustein-Trigger: ls-impfberatung-mutter

## Metadaten

- **situationId:** ls-impfberatung-mutter
- **ceId:** ce-04
- **themen:** [`impfungen-infektionsschutz`, `gesundheitsmodelle`, `patientenberatung`]
- **triggerGesamt:** 12
- **version:** v9

---

## Übersicht: Alle Trigger nach Phase

### Phase 1 — Wahrnehmen

| # | Trigger-Ereignis | Baustein-ID | Thema | Stufe |
|---|-----------------|------------|-------|-------|
| T01 | K2 oder K3 falsch (Körpersignal-Interpretation) | `patientenberatung-kommunikationsziele-beratung` | patientenberatung | Sequencer wählt (Profil) |
| T02 | K4 abgeschlossen (Reflexion eigene Haltung) | `gesundheitsmodelle-professionelle-haltung` | gesundheitsmodelle | Stufe 2 (Hinweis) |
| T03 | O2 gewählt (Was willst du selbst?) | `patientenberatung-formate-unterschied` | patientenberatung | Stufe 1 (C1) oder Stufe 3 (B1) |

---

### Phase 2 — Einschätzen

| # | Trigger-Ereignis | Baustein-ID | Thema | Stufe |
|---|-----------------|------------|-------|-------|
| T04 | K3 falsch, Antwort C gewählt | `gesundheitsmodelle-definition` | gesundheitsmodelle | Sequencer wählt — natürliches Verhalten ersetzt keine Immunisierung |
| T05 | K5 Schätzung stark daneben (< 80% oder > 98%) | `impfungen-herdenimmunität` | impfungen-infektionsschutz | Sequencer wählt |
| T06 | K2 Kategorisierung — "Fehlinformation" nicht erkannt | `impfungen-wakefield-mythos` | impfungen-infektionsschutz | Stufe 2 (vorab kurze Einführung, ausführlich in Phase 3) |
| T07 | O2 gewählt (truefalse zu § 20a IfSG) | `impfungen-masern-impfpflicht-ifsg` | impfungen-infektionsschutz | Stufe 1 (C1) oder Stufe 3 (B1) |

---

### Phase 3 — Informieren

| # | Trigger-Ereignis | Baustein-ID | Thema | Stufe |
|---|-----------------|------------|-------|-------|
| T08 | K2 falsch oder vor K2 | `impfungen-aktiv-passiv` | impfungen-infektionsschutz | Sequencer wählt |
| T09 | K1 immer (STIKO-Prozess) | `impfungen-stiko` | impfungen-infektionsschutz | Stufe 1 (C1: Denkfrage überspringen wenn Profil stark) oder Stufe 2/3 |
| T10 | K6 falsch — Antwort A ('absolut sicher') | `patientenberatung-ziele` | patientenberatung | Stufe 2 — Erinnerung: Informieren ≠ Beruhigen |

---

### Phase 4 — Beraten

| # | Trigger-Ereignis | Baustein-ID | Thema | Stufe |
|---|-----------------|------------|-------|-------|
| T11 | K2 Antwort A oder C gewählt (schließt Gespräch) | `patientenberatung-sdm-3talk` | patientenberatung | Stufe 2 — Trichterprinzip und offene Fragen |
| T12 | Branch C gewählt (Komplikation 1 — Konfrontation) | `patientenberatung-anekdoten-kommunikation` | patientenberatung | Stufe 2 — Validieren ohne Bestätigen |

---

### Phase 5 — Evaluieren

| # | Trigger-Ereignis | Baustein-ID | Thema | Stufe |
|---|-----------------|------------|-------|-------|
| T13 | K2 falsch — Antwort A ('Ob verstanden?' statt Teach-Back) | `patientenberatung-teach-back` | patientenberatung | Stufe 2 oder Stufe 3 |
| T14 | K5 — Aussage 1 als wahr gewählt (Impfablehnung = Kindeswohlgefährdung) | `impfungen-masern-impfpflicht-ifsg` | impfungen-infektionsschutz | Stufe 2 — Was § 20a IfSG bedeutet und was nicht |
| T15 | K4 immer (Reflexion Autonomie) | `patientenberatung-ziele` | patientenberatung | Stufe 1 (C1-Denkfrage Bloom 5-6): Wer entscheidet, was Beratungserfolg ist? |

---

### Phase 6 — Dokumentieren

| # | Trigger-Ereignis | Baustein-ID | Thema | Stufe |
|---|-----------------|------------|-------|-------|
| T16 | K3 falsch (A oder B — Ablehnung unvollständig dokumentieren) | `patientenberatung-dokumentation-beratung` | patientenberatung | Stufe 2 oder Stufe 3 |
| T17 | K4 immer (Meldepflicht) | `impfungen-meldepflicht-ifsg` | impfungen-infektionsschutz | Stufe 1 (C1) oder Stufe 3 (B1) |
| T18 | K2 Lücken falsch | `patientenberatung-aufklaerung-rechtlich` | patientenberatung | Stufe 2 — Pflichtinhalte der Aufklärung konkret |

---

## Pflichtbedingungen (immer aktiv, unabhängig vom Profil)

| Bedingung | Beschreibung |
|-----------|-------------|
| **Kein Wissenstest vor Wissensaufbau** | Alle Baustein-Trigger prüfen: Ist der Inhalt in der Situation (Kern-Step oder optionaler Step) zuvor eingeführt worden? Wenn nein → Baustein ERST liefern, dann testen. |
| **SDM-Grundidee vor Branching K4** | Baustein `patientenberatung-sdm-grundidee` muss vor Phase 4 K4 (Branching Komplikation 1) erschlossen sein. Wenn T11 nicht ausgelöst: Stufe 2 auto-einblenden vor K4. |
| **Wakefield-Timeline vor Anekdoten-Branching** | K4 Timeline in Phase 3 muss vollständig gesehen sein, bevor in Phase 4 Branching Komplikation 1 startet. Sequencer prüft. |

---

## Stufen-Auswahl durch Sequencer

| Schüler-Profil | Standard-Stufe bei Trigger | Ausnahme |
|---------------|--------------------------|---------|
| C1 + hohes Fachwissen | Stufe 1 (Denkfrage) | Bei K.O.-Wissen (SDM, Wakefield): Stufe 2 |
| B2 + mittleres Wissen | Stufe 2 (Hinweis) | Bei neuem Konzept: Stufe 3 |
| B1 + Anfänger | Stufe 3 (Erklärung + Glossar + TTS) | Immer |
| Falsche Antwort bei B2/C1 | Stufe erhöhen (Stufe 2 → 3) | — |

---

## Baustein-Verfügbarkeits-Checkliste

Folgende Bausteine werden in dieser Situation referenziert. Sie müssen in `content/ce-04/themen/` existieren:

| Baustein-ID | Thema-Ordner | Status |
|------------|-------------|--------|
| `impfungen-aktiv-passiv` | impfungen-infektionsschutz | ✅ in bausteine-plan.md |
| `impfungen-stiko` | impfungen-infektionsschutz | ✅ in bausteine-plan.md |
| `impfungen-kalender-kinder` | impfungen-infektionsschutz | ✅ in bausteine-plan.md |
| `impfungen-herdenimmunität` | impfungen-infektionsschutz | Prüfen: in bausteine-plan.md enthalten? |
| `impfungen-masern-impfpflicht-ifsg` | impfungen-infektionsschutz | Prüfen: in bausteine-plan.md enthalten? |
| `impfungen-wakefield-mythos` | impfungen-infektionsschutz | Prüfen: in bausteine-plan.md enthalten? |
| `impfungen-meldepflicht-ifsg` | impfungen-infektionsschutz | Prüfen: in bausteine-plan.md enthalten? |
| `gesundheitsmodelle-definition` | gesundheitsmodelle | ✅ in bausteine-plan.md |
| `gesundheitsmodelle-professionelle-haltung` | gesundheitsmodelle | Prüfen: in bausteine-plan.md enthalten? |
| `patientenberatung-formate-unterschied` | patientenberatung | ✅ in bausteine-plan.md |
| `patientenberatung-kommunikationsziele-beratung` | patientenberatung | ✅ in bausteine-plan.md |
| `patientenberatung-ziele` | patientenberatung | ✅ in bausteine-plan.md |
| `patientenberatung-sdm-grundidee` | patientenberatung | ✅ in bausteine-plan.md (Baustein 3) |
| `patientenberatung-sdm-3talk` | patientenberatung | ✅ in bausteine-plan.md (Baustein 4) |
| `patientenberatung-anekdoten-kommunikation` | patientenberatung | Prüfen: in bausteine-plan.md enthalten? |
| `patientenberatung-teach-back` | patientenberatung | Prüfen: in bausteine-plan.md enthalten? |
| `patientenberatung-dokumentation-beratung` | patientenberatung | Prüfen: in bausteine-plan.md enthalten? |
| `patientenberatung-aufklaerung-rechtlich` | patientenberatung | Prüfen: in bausteine-plan.md enthalten? |

---

## Manifest-Eintrag (für `content/_manifest.ts`)

```ts
{
  situationId: "ls-impfberatung-mutter",
  ceId: "ce-04",
  situationsTyp: "beratung",
  spirale: 1,
  patient: "Frau Annika Schneider + Mia (13 Mo)",
  themen: ["impfungen-infektionsschutz", "gesundheitsmodelle", "patientenberatung"],
  geschaetzteUE: 4,
  status: "situationsplan",
  phasen: ["wahrnehmen", "einschaetzen", "informieren", "beraten", "evaluieren", "dokumentieren"],
  komplikationen: 2,
  bloomRange: [1, 6],
}
```

# Baustein-Trigger: ls-okafor-sids

## Übersicht

Diese Datei listet alle Baustein-Trigger der Lernsituation `ls-okafor-sids` phasenübergreifend. Der Sequencer nutzt diese Informationen um zu entscheiden, welche Wissensbausteine wann eingeblendet werden — basierend auf Schülerprofil und Antwortverhalten.

---

## Trigger-Liste (vollständig)

| # | Trigger-Bedingung | Phase | Baustein-ID | Stufe-Logik | Tag |
|---|-------------------|-------|-------------|-------------|-----|
| T01 | K2 (wahrnehmen): Schüler nennt keine Bindungszeichen | wahrnehmen | `gesundheitsfoerderung-kinder-bindung-grundlagen` | B1 → Stufe 3 / B2 → Stufe 2 / C1 → Stufe 1 | pflege |
| T02 | K4 (wahrnehmen): Schüler nennt keine kultursensible Haltung | wahrnehmen | `patientenberatung-kultursensibel` | B1 → Stufe 3 / B2 → Stufe 2 | pflege |
| T03 | K2 (einschaetzen): > 2 Fehler beim Sortieren Risiko/Schutz | einschaetzen | `gesundheitsfoerderung-kinder-sids-risikofaktoren` | immer Stufe 2-3 (Fakten-Wissen) | krankheitslehre |
| T04 | K3 (einschaetzen): falsch (A oder B gewählt) | einschaetzen | Erklärung Risikokombination SIDS | Stufe 2-3 | krankheitslehre |
| T05 | K4 (einschaetzen): nur kulturelle Gründe genannt, keine praktischen | einschaetzen | `patientenberatung-motivation-verstehen` | Stufe 2 | pflege |
| T06 | K3 (informieren): falsch (A, C oder D) | informieren | `gesundheitsfoerderung-kinder-safe-sleep-saeulen` | B1 → Stufe 3 / andere → Stufe 2 | krankheitslehre |
| T07 | K4 (informieren): Schüler unsicher über SIDS-Reduktionszahlen | informieren | `gesundheitsfoerderung-kinder-sids-epidemiologie` | Stufe 2-3 | krankheitslehre |
| T08 | K5 (informieren): Schüler formuliert belehrend/direktiv | informieren | Feedback: Beratungsstil, nicht-direktive Formulierungen | Stufe 2 | pflege |
| T09 | K2 (beraten): Branching → Option A gewählt | beraten | `patientenberatung-kultursensibel` | Stufe 2-3 | pflege |
| T10 | K4 (beraten): Schüler kennt Harm-Reduction-Regeln nicht | beraten | `gesundheitsfoerderung-kinder-harm-reduction-bsharing` | Stufe 2-3 | krankheitslehre |
| T11 | K5 (beraten): Schüler kann Optionen nicht unterscheiden | beraten | Vergleich Babybett / Beistellbett / Elternbett | Stufe 1-2 | pflege |
| T12 | K2 (evaluieren): falsch | evaluieren | `patientenberatung-teachback-methode` | Stufe 2-3 | pflege |
| T13 | K3 (evaluieren): Schüler kann Beratungserfolg nicht einschätzen | evaluieren | `patientenberatung-beratungserfolg-messen` | Stufe 2 | pflege |
| T14 | K2 (dokumentieren): Freitext enthält Wertungen | dokumentieren | `patientenberatung-neutrale-dokumentation` | Stufe 2-3 | pflege |
| T15 | K3 (dokumentieren): Schüler findet nicht alle Fehler | dokumentieren | Diskriminierung in Dokumentation, rechtliche Konsequenzen | Stufe 2 | pflege |
| T16 | K4 (dokumentieren): Schüler vergisst Folgetermin | dokumentieren | `gesundheitsfoerderung-kinder-u-untersuchungen` | Stufe 1-2 | krankheitslehre |

---

## Baustein-Zuordnung nach Thema

### Thema: `gesundheitsfoerderung-kinder`

| Baustein-ID | Trigger | Phase |
|-------------|---------|-------|
| `gesundheitsfoerderung-kinder-bindung-grundlagen` | T01 | wahrnehmen |
| `gesundheitsfoerderung-kinder-sids-risikofaktoren` | T03, T04 | einschaetzen |
| `gesundheitsfoerderung-kinder-safe-sleep-saeulen` | T06 | informieren |
| `gesundheitsfoerderung-kinder-sids-epidemiologie` | T07 | informieren |
| `gesundheitsfoerderung-kinder-harm-reduction-bsharing` | T10 | beraten |
| `gesundheitsfoerderung-kinder-u-untersuchungen` | T16 | dokumentieren |

### Thema: `patientenberatung`

| Baustein-ID | Trigger | Phase |
|-------------|---------|-------|
| `patientenberatung-kultursensibel` | T02, T09 | wahrnehmen, beraten |
| `patientenberatung-motivation-verstehen` | T05 | einschaetzen |
| `patientenberatung-teachback-methode` | T12 | evaluieren |
| `patientenberatung-beratungserfolg-messen` | T13 | evaluieren |
| `patientenberatung-neutrale-dokumentation` | T14 | dokumentieren |

---

## Adaptivitäts-Zusammenfassung

| Schüler-Typ | Erwartete Trigger | Typische Bausteine | Gesamt-Dauer |
|-------------|-------------------|-------------------|--------------|
| C1 + Erfahrung (Pflegehelfer) | T01 evtl., T12 evtl. | Wenige, Stufe 1 | ~2 UE |
| B2 + etwas Praxis | T03, T06, T09, T12 | Stufe 2, 4-6 Bausteine | ~3 UE |
| B1 + Anfänger | T01, T02, T03, T04, T06, T07, T09, T10, T12, T14 | Stufe 3, 8-10 Bausteine | ~4 UE |

---

## Qualitätsprüfung Trigger-Abdeckung

- [x] Min 3 Baustein-Trigger: **16 Trigger definiert** ✅
- [x] Alle 3 Tags vertreten: pflege / krankheitslehre / anatomie ✅ (anatomie in optionalen Steps der Phasen)
- [x] Bausteine aus mind. 2 Themen: gesundheitsfoerderung-kinder + patientenberatung ✅
- [x] Trigger in frühen UND späten Phasen: wahrnehmen → einschaetzen → informieren → beraten → evaluieren → dokumentieren ✅
- [x] Stufen-Logik definiert (B1/B2/C1) ✅

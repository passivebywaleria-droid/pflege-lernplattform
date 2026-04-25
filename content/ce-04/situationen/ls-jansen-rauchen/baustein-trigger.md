# Baustein-Trigger: ls-jansen-rauchen

## Metadaten

- **situationId:** ls-jansen-rauchen
- **ceId:** ce-04
- **pipelineVersion:** v9
- **erstellt:** 2026-04-23

---

## Übersicht Trigger-Logik

Der Sequencer aktiviert Wissensbausteine, wenn Schüler:innen bei bestimmten Steps Schwierigkeiten haben oder wenn das Profil (Sprachniveau, Bloom-Level) es nahelegt. Diese Tabelle definiert, welche Bausteine wann erscheinen.

---

## Trigger-Tabelle

| Phase | Trigger-Bedingung | Baustein (bausteinId) | Stufe (Sequencer wählt) |
|-------|-------------------|-----------------------|-------------------------|
| wahrnehmen | KS-2 falsch (Direkte Ansprache statt Beobachtung) | `patientenberatung-gespraech-beziehung` | 2 oder 3 |
| wahrnehmen | KS-4 falsch (Ambivalenz nicht erkannt) | `patientenberatung-stadien-veraenderung` | je nach Profil |
| wahrnehmen | KS-5 unvollständig (Entzugssymptome) | `eigengesundheit-rauchen` | Stufe 2 oder 3 |
| wahrnehmen | OS-4 zeigt fehlendes Haltungsreflexion | `eigengesundheit-haltung-sucht` | 1 oder 2 |
| einschaetzen | KS-2 falsch (TTM-Stadium verwechselt) | `patientenberatung-stadien-veraenderung` | je nach Profil |
| einschaetzen | KS-3 nicht geöffnet / schnell übersprungen | `patientenberatung-stadien-veraenderung` | Stufe 3 (TTM-Erklärung vollständig) |
| einschaetzen | KS-5 nicht verstanden (Health Literacy) | `patientenberatung-health-literacy` | 2 oder 3 |
| einschaetzen | KS-6 falsch (kardiovask. Risiko) | `gesundheitsfoerderung-patienten-herz-risiko` | je nach Profil |
| einschaetzen | KS-7 falsch (Beratungsstrategie bei Stadium 3) | `patientenberatung-stadien-veraenderung` | Stufe 1 oder 2 |
| informieren | KS-3 falsch (CO-Hämoglobin-Effekt) | `gesundheitsfoerderung-patienten-rauchen-zeitverlauf` | je nach Profil |
| informieren | KS-5 Fehler (Erstattungsgrundlagen) | `patientenberatung-gkv-leistungen-praevg` | 2 oder 3 |
| informieren | KS-6 Option B gewählt (Druck im Gespräch) | `patientenberatung-mi-rule` | Stufe 2 oder 3 (RULE vollständig) |
| beraten | KS-2 falsch (RULE-Zuordnung) | `patientenberatung-mi-rule` | je nach Profil |
| beraten | K1 Option A gewählt (Verteidigen) | `patientenberatung-mi-rule` (Resist-Teil) | Stufe 2 |
| beraten | K1 Option C gewählt (Themawechsel zu früh) | `patientenberatung-mi-rule` (Listen-Teil) | Stufe 2 |
| beraten | K2 Option A oder B gewählt (E-Zigaretten falsch) | `gesundheitsfoerderung-patienten-e-zigaretten` | je nach Profil |
| beraten | KS-4 Freetext zeigt Deficit-Sprache | `patientenberatung-empowerment` | 2 oder 3 |
| beraten | KS-5 Fehler (SDM-Optionen) | `patientenberatung-shared-decision` | je nach Profil |
| beraten | KS-9 falsch | `patientenberatung-formate-unterschied` | Stufe 2 |
| evaluieren | KS-2 Option C gewählt (Teach-Back nicht erkannt) | `patientenberatung-teach-back` | je nach Profil |
| evaluieren | KS-3 falsch ("Nie wieder" als Erfolgskriterium) | `patientenberatung-stadien-veraenderung` | 2 |
| dokumentieren | KS-2 Fehler nicht vollständig erkannt | `patientenberatung-dokumentation-beratung` | 2 oder 3 |
| dokumentieren | KS-3 Pflegebericht unvollständig | `patientenberatung-dokumentation-beratung` | Stufe 3 (mit Template) |
| dokumentieren | KS-4 falsch (Weitergabe-Motiv) | `patientenberatung-teamkommunikation` | 2 |
| dokumentieren | OS-2 falsch (Datenschutz Angehörige) | `patientenberatung-datenschutz` | je nach Profil |

---

## Baustein-Quellliste (referenzierte Themen)

| bausteinId (kurz) | Thema-Ordner | Vollständige bausteinId |
|-------------------|-------------|------------------------|
| stadien-veraenderung | `patientenberatung` | `patientenberatung-stadien-veraenderung` |
| mi-rule | `patientenberatung` | `patientenberatung-mi-rule` |
| health-literacy | `patientenberatung` | `patientenberatung-health-literacy` |
| teach-back | `patientenberatung` | `patientenberatung-teach-back` |
| shared-decision | `patientenberatung` | `patientenberatung-shared-decision` |
| empowerment | `patientenberatung` | `patientenberatung-empowerment` |
| formate-unterschied | `patientenberatung` | `patientenberatung-formate-unterschied` |
| gkv-leistungen-praevg | `patientenberatung` | `patientenberatung-gkv-leistungen-praevg` |
| dokumentation-beratung | `patientenberatung` | `patientenberatung-dokumentation-beratung` |
| teamkommunikation | `patientenberatung` | `patientenberatung-teamkommunikation` |
| datenschutz | `patientenberatung` | `patientenberatung-datenschutz` |
| gespraech-beziehung | `patientenberatung` | `patientenberatung-gespraech-beziehung` |
| herz-risiko | `gesundheitsfoerderung-patienten` | `gesundheitsfoerderung-patienten-herz-risiko` |
| rauchen-zeitverlauf | `gesundheitsfoerderung-patienten` | `gesundheitsfoerderung-patienten-rauchen-zeitverlauf` |
| e-zigaretten | `gesundheitsfoerderung-patienten` | `gesundheitsfoerderung-patienten-e-zigaretten` |
| eigengesundheit-rauchen | `eigengesundheit` | `eigengesundheit-rauchen` |
| eigengesundheit-haltung-sucht | `eigengesundheit` | `eigengesundheit-haltung-sucht` |

---

## Trigger-Typen

| Typ | Beschreibung |
|-----|-------------|
| `fehler-trigger` | Schüler:in gibt falsche Antwort → Sequencer zeigt Baustein passend zum Fehler |
| `profil-trigger` | Basierend auf Sprachprofil (B1 → Stufe 3, C1 → Stufe 1) |
| `konfidenz-trigger` | Selfrating/Confidence-Step niedrig → proaktiv Baustein einblenden |
| `vertiefungs-trigger` | Schüler:in korrekt aber schnell → Stufe 1 (Denkfrage) als Herausforderung |

---

## Adaption nach Schülerprofil

| Profil | Wie viele Bausteine werden typisch aktiviert? | Welche Stufe? |
|--------|-----------------------------------------------|---------------|
| C1 + Vorerfahrung | 2-4 Bausteine (Vertiefung) | Stufe 1 (Denkfragen) |
| B2 + etwas Praxis | 5-8 Bausteine (Erklärung bei Fehler) | Stufe 2 |
| B1 + Anfänger:in | 9-14 Bausteine (umfassende Unterstützung) | Stufe 3 (mit B1-Text + TTS) |

---

## Minimale Trigger-Garantie

Laut Regel Phase 2: **Min 3 Baustein-Trigger** vorhanden.

Diese Situation hat **24 definierte Trigger** (8 in beraten-Phase allein) — deutlich über dem Minimum. Damit ist maximale Adaptivität gewährleistet.

---

## Hinweis für den Generator

Die referenzierten bausteinIds müssen aus den `bausteine-plan.md`-Dateien der genannten Themen-Ordner korrekt importiert werden. Wenn ein bausteinId noch nicht existiert (z.B. `patientenberatung-stadien-veraenderung` ist im Baustein-Plan als "patientenberatung-formate-unterschied" gelistet), muss der Generator den exakten Id aus dem Plan nehmen — **nicht erfinden**.

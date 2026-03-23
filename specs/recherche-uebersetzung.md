# Recherche: Übersetzung Pflegefachbegriffe DE→AR / DE→TR

**Stand:** 2026-03-21
**Umfang:** 200–400 Pflegefachbegriffe (Fachbegriffe gemäß PflBG-Curriculum)
**Ziel:** Medizinisch akkurate Übersetzung für Pflegeschüler in Deutschland

---

## 1. Tool-Vergleich: Hauptkandidaten

### DeepL Pro API — Empfehlung #1 für DE→TR
- Unterstützt Arabisch (DE→AR) und Türkisch (DE→TR) nativ
- **Glossar-Feature**: Eigene Terminologie hinterlegen (z.B. "Dekubitus" → feste AR-Entsprechung)
  - Morphologische Anpassung: beachtet Kasus, Genus, Tempus — kein simples Find & Replace
  - Glossare über REST-API verwaltbar
- Studie (BMC Medical Informatics, 2025): DeepL erreichte Likert-Rating 1.28 bei medizinischer Terminologie (Human Phenotype Ontology, DE), vergleichbar mit GPT-3.5
- **Kosten**: $25/Mio. Zeichen — bei 400 Begriffen × ~30 Zeichen ≈ 0,30 $ einmalig
- **Schwäche DE→AR**: Arabisch ist für DeepL eine neuere Sprache; Qualität schwächer als für europäische Sprachen
- Fazit: Sehr gut für DE→TR; für DE→AR nur mit nachgelagertem LLM-Review

### Claude 3.5 / GPT-4o — Empfehlung #1 für DE→AR
- Claude 3.5: 78% der Übersetzungen als "gut" bewertet (höchster Wert aller LLMs im 2025-Test, 11 Sprachpaare)
- GPT-4o: vergleichbar stark, leicht besser bei konsistenter Fachterminologie
- **Stärke**: Kontext-Prompt möglich — "Du bist medizinischer Übersetzer, generalistisches Pflegestudium Deutschland, Zielgruppe arabischsprachige Pflegeschüler..."
- **Mit Glossar-Prompt**: Wenn bekannte Referenzbegriffe übergeben werden (WHO-ICD-11-Terme), steigt Qualität deutlich
- Kosten: Claude API ~$3/Mio. Input-Token; 400 Begriffe ≈ $0,01 einmalig
- **Limit**: Für sehr seltene Pflegebegriffe ohne Trainingsdaten unzuverlässig — Verifizierung nötig

### Google Translate / Azure Translator / Amazon Translate
- Google: Breit verfügbar, DE→AR und DE→TR unterstützt, aber keine medizinische Spezialisierung
- Azure Custom Translator: Custom-Modelle trainierbar, BLEU-Score als Metrik; aufwendiger Setup
- Amazon Translate: Custom Terminology-Feature, günstiger ($15/Mio. Zeichen), aber schwächere Basis für medizinische AR/TR
- **Fazit**: Alle drei als Baseline nutzbar, aber ohne Custom-Anpassung deutlich unter DeepL/LLM-Niveau
- Für ein 400-Begriffe-Glossar lohnt Custom-Training nicht

---

## 2. Spezialisierte medizinische Ressourcen

### WHO ICD-11 — Primäre Referenz (kostenlos)
- ICD-11 Browser verfügbar in: Arabisch, Türkisch, Englisch, Deutsch + 6 weitere
- API verfügbar: `https://id.who.int/icd/entity` — Terme, Synonyme, Definitionen abrufbar
- ~17.000 Diagnose-Codes, >120.000 kodierbare Terme
- **Nutzung**: Diagnose-/Krankheitsbegriffe (Dekubitus, Pneumonie) gegen ICD-11 cross-referenzieren
- Limitation: Pflegespezifische Handlungsbegriffe (Verbandwechsel, Mobilisation) fehlen

### SNOMED CT (systematisierte medizinische Nomenklatur)
- Größte medizinische Terminologie-Datenbank weltweit
- Arabische und türkische Extensionen teilweise vorhanden
- Kostenpflichtig für kommerzielle Nutzung; für gemeinnützige Bildung ggf. Freilizenz möglich

### Care to Translate (App)
- 130+ Sprachen, alle Übersetzungen von Muttersprachlern mit medizinischem Hintergrund manuell verifiziert
- Bestätigung eines Arztes (Karolinska University Hospital): "Beeindruckende Arabisch-Qualität"
- Einsatz: Als Verifikationsreferenz für fertige Übersetzungen; keine direkte API-Integration bekannt
- Relevant für: Patientenkommunikation (nicht primär Fachterminologie)

### tıp doc Pflege (Setzer Verlag)
- Vorhandene 6-seitige Karte mit 134 Pflegebegriffen: Deutsch–Arabisch–Türkisch
- Inhalte: Körperpflege, Bettzeug, Ernährung, Aktivitäten
- **Sofort nutzbar als Basis-Glossar** — direkt kaufbar (Printformat)
- URL: setzer-verlag.com/tp-doc-pflege

### IMED-KOMM-EU
- Projekt für interkulturelles medizinisches Kommunikationstraining in Europa
- Glossare für ausländische Pflegekräfte vorhanden (DE + Herkunftssprachen)
- Primär: Griechisch, Polnisch, Rumänisch, Spanisch — kein AR/TR bestätigt
- Frei zugänglich: imed-komm.eu/node/64

### arabdict.com / almaany.com
- arabdict: DE↔AR Wörterbuch, allgemein; medizinische Terme vorhanden aber nicht kuratiert
- almaany.com: Enthält eigenständiges EN↔AR Medical Dictionary (Appendix)
- **Zuverlässigkeit für Fachsprache**: Mittel — für Basisanatomie brauchbar, für Pflegehandlungen unzuverlässig
- Nutzung: Spot-Check-Tool, kein Primary Source

---

## 3. Empfohlener Workflow (3-Phasen)

### Phase 1: Basis-Glossar erstellen (1–2 Tage)
1. Pflegebegriffe aus I Care / Curriculum exportieren (200–400 Terme)
2. ICD-11-API abfragen: Für alle Diagnose-/Krankheitsbegriffe offizielle AR+TR-Terme beziehen
3. tıp doc Pflege-Karte kaufen: 134 Terme als verifizierter Seed-Datensatz

### Phase 2: LLM-Übersetzung mit Kontext-Prompt (Stunden, ~$1–2 gesamt)
```
System-Prompt:
"Du bist ein medizinischer Übersetzer mit Spezialisierung auf Pflegefachsprache.
Übersetze die folgenden deutschen Pflegefachbegriffe ins Arabische/Türkische.
Kontext: Generalistische Pflegeausbildung in Deutschland (PflBG 2020).
Zielgruppe: Pflegeschüler mit arabischer/türkischer Muttersprache.
Verwende medizinische Standardterminologie (ICD-11-konform wenn möglich).
Vermeide umgangssprachliche Formulierungen.
Gib für jeden Begriff: 1) Standardübersetzung, 2) Alternative falls vorhanden, 3) Kurznotiz bei Besonderheiten."
```
- Werkzeug: Claude 3.5 Sonnet API (für Batch-Verarbeitung; ~400 Terme = 1 API-Call)
- Parallelansatz: GPT-4o für dieselbe Liste als Crosscheck

### Phase 3: Qualitätssicherung ohne Muttersprachler (Back-Translation)
1. **Back-Translation**: Übersetztes AR/TR-Glossar erneut mit Claude/DeepL zurück auf Deutsch übersetzen
   - Diskrepanzen zwischen Original-DE und Rück-DE markieren → manuell prüfen
   - Akzeptanzkriterium: <5% semantische Abweichung
2. **Kreuzreferenz**: Alle Diagnose-/Anatomie-Begriffe gegen ICD-11 AR/TR prüfen
3. **DeepL-Glossar-Konsistenz**: DeepL mit finaler Glossar-Datei konfigurieren → Konsistenz in Plattformtexten sichern
4. **Optionale Profi-Prüfung** (empfohlen für Launch): 1–2 h mit arabisch-/türkischsprachiger Pflegefachkraft
   - Pflegelehrer aus bisheriger Schule der Gründerin anfragen
   - Kosten: 50–100 € für Spot-Check von kritischen Begriffen

---

## 4. Genauigkeitserwartungen (realistisch)

| Kategorie | DE→TR | DE→AR | Methode |
|---|---|---|---|
| Anatomie / ICD-Diagnosen | 97–99% | 95–97% | ICD-11 + LLM |
| Pflegehandlungen (Verbandwechsel etc.) | 90–95% | 85–92% | LLM + Back-Translation |
| Kommunikationsphrasen | 85–92% | 82–90% | LLM + Care to Translate |
| Gesetzliche Fachbegriffe (PflBG) | 85–90% | 80–88% | LLM — kein Referenzkorpus |

**Wichtig**: 99%+ rein automatisch ist bei medizinischer Fachsprache DE→AR nicht erreichbar.
Realistisches Ziel: 93–96% mit kombiniertem Workflow; 98%+ mit professionellem Spot-Check.

---

## 5. Integration in die Plattform (technisch)

- **Glossar-Datei**: JSON oder CSV (Begriff_DE, Begriff_AR, Begriff_TR, ICD11_Code, Quelle)
- **DeepL Glossar API**: Automatisch anwenden bei dynamisch generierten Texten
- **i18n-Namespace**: Separate `nursing-glossary.json` per Sprache in `/public/locales/`
- Keine API-Kosten im Betrieb (statisches Glossar), nur einmalige Generierungskosten

---

## 6. Kostenübersicht (einmalig)

| Schritt | Kosten |
|---|---|
| tıp doc Pflege-Karte (134 Terme) | ~15 € |
| Claude API (400 Terme × 2 Sprachen × 2 Passes) | ~$2–5 |
| DeepL API Pro (ggf. Plattformtexte) | $25/Mio. Zeichen |
| Optionaler Profi-Spot-Check | 50–100 € |
| **Gesamt** | **~70–120 €** |

---

## Quellen
- [BMC Medical Informatics: GPT vs DeepL for medical terminology (2025)](https://bmcmedinformdecismak.biomedcentral.com/articles/10.1186/s12911-025-03075-8)
- [DeepL Healthcare](https://www.deepl.com/en/industries/healthcare)
- [DeepL Glossar-Feature](https://www.deepl.com/en/features/glossary)
- [DeepL API Pricing 2025](https://nicolalazzari.ai/articles/harnessing-deepls-capabilities-insightful-analysis-and-api-mastery-for-enhanced-machine-translation)
- [WHO ICD-11 Multilingual Browser](https://www.who.int/standards/classifications/classification-of-diseases)
- [Care to Translate](https://www.caretotranslate.com/)
- [tıp doc Pflege (Setzer Verlag)](https://setzer-verlag.com/tp-doc-pflege)
- [IMED-KOMM-EU Glossare](https://www.imed-komm.eu/node/64)
- [almaany Medical Dictionary AR](https://www.almaany.com/appendix.php?language=english&category=Medical)
- [Back-Translation als QA-Methode (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6800023/)
- [ATA: Online Resources for Medical Translators (Arabic)](https://www.atanet.org/wp-content/uploads/2020/10/ataWebinar139_arabic_medical_handout.pdf)
- [LLM Translation Comparison 2025](https://localizejs.com/articles/the-3-best-llms-for-translation)

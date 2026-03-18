# Nebius AI als LLM-Provider: Vollständige Recherche
## Pflege-Lernplattform — Adaptive KI-Funktionen

**Erstellt:** 2026-03-16
**Zweck:** Bewertung von Nebius AI als günstigen, DSGVO-konformen LLM-Provider
**Analysiert von:** Tech- und Kosten-Analyst
**Status:** Abgeschlossen

---

## 1. Unternehmens-Profil

### Wer ist Nebius?

Nebius Group N.V. ist ein börsennotiertes Technologieunternehmen (NASDAQ: NBIS), das im August 2024 aus der internationalen Restrukturierung von Yandex N.V. hervorging. Yandex — einst die größte russische Suchmaschine — trennte sich nach dem russischen Angriffskrieg auf die Ukraine (2022) vollständig von seinen russischen Assets. Die nicht-russischen Geschäftsbereiche wurden unter dem neuen Namen Nebius Group weitergeführt.

**Kernfakten:**
- Gründung als Nebius: August 2024 (NASDAQ-Relisting 21. August 2024)
- CEO: Arkady Volozh (Yandex-Mitgründer)
- Rechtsform: N.V. (Naamloze Vennootschap) — Niederländische Aktiengesellschaft
- Hauptsitz: Amsterdam, Niederlande
- Mitarbeiter: ca. 1.000+ (ehemalige Yandex-Mitarbeiter aus internationalen Teams)
- Börse: NASDAQ (Ticker: NBIS)
- Investoren: NVIDIA hat 2 Milliarden USD investiert (strategische Partnerschaft)

### Was macht Nebius?

Nebius fokussiert sich ausschließlich auf AI-Infrastruktur: GPU-Cloud, Inference-as-a-Service und AI-Entwicklungstools. Das Unternehmen baut und betreibt eigene Rechenzentren und bietet darüber hinaus Nebius AI Studio an — eine Plattform für den Zugriff auf Open-Source-LLMs via API.

**Wichtige Einordnung:** Nebius ist kein russisches Unternehmen mehr. Die vollständige Trennung von Yandex Russia wurde 2024 vollzogen. Rechtssitz und operative Führung liegen in den Niederlanden (EU).

---

## 2. Verfügbare Modelle

### Modellangebot (Stand März 2026)

Nebius AI Studio bietet 60+ Open-Source-Modelle an — ausschließlich gehostete Modelle (keine proprietären Eigenentwicklungen wie OpenAIs GPT oder Anthropics Claude). Alle Modelle sind Open-Source-Gewichte, die auf Nebius-eigener GPU-Infrastruktur betrieben werden.

#### Große Sprachmodelle (LLMs) — Text/Instruction

| Modell | Parameter | Stärke | Einsatzbereich |
|---|---|---|---|
| Meta Llama 3.3 70B Instruct | 70B | Vielseitiges Allround-Modell | Erklärungen, Quiz, Zusammenfassungen |
| Meta Llama 3.1 405B Instruct | 405B | Höchste Qualität Open-Source | Komplexe Lernpfade, Prüfungsvorbereitung |
| DeepSeek R1-0528 | ~670B MoE | Reasoning/Denken | Schritt-für-Schritt-Erklärungen |
| DeepSeek V3-0324 | ~670B MoE | Schnelles Allround-Modell | Quiz-Generierung, Übersetzungen |
| QwQ-32B | 32B | Reasoning | Erklärungen, komplexe Fragen |
| Alibaba Qwen 2.5 (diverse) | 7B–72B | Mehrsprachig stark | Arabisch/Türkisch/Russisch Übersetzungen |
| Mistral (diverse) | 7B–8x22B | Europäisch, effizient | Standard-Aufgaben |
| Google Gemma 3 27B | 27B | Multimodal, 128K Kontext | Lange Dokumente (Pflegeleitlinien) |
| NousResearch Hermes-4/3 405B | 405B | Instruction-Following | Lernplan-Generierung |
| GLM-4.5 | — | Allround | Text-Aufgaben allgemein |

#### Spezialisierte Modelle

| Modell | Typ | Relevanz |
|---|---|---|
| NVIDIA Nemotron Nano 2 VL | Vision-Language | Bilder in Lernmaterialien |
| Qwen2.5-Coder-7B | Code | Nicht relevant für Pflege |
| OpenbioLLM (gelistet in älteren Quellen) | Biomedizinisch | Potenziell relevant |
| FLUX Schnell / FLUX Dev | Text-to-Image | Illustrationen für Lernmaterialien |
| Embedding-Modelle | Vektoren | RAG/Suchfunktionen |

**Hinweis zu medizinischen Modellen:** Ältere Quellen (litellm-Dokumentation) erwähnen OpenbioLLM als verfügbar auf Nebius. Das aktuelle Modellangebot sollte unter [studio.nebius.ai](https://studio.nebius.ai) geprüft werden, da neue Modelle monatlich hinzukommen.

#### Zugang zu Hugging Face Hub

Nebius ist offizieller Inference-Provider auf dem Hugging Face Hub. Das bedeutet: Alle auf Nebius verfügbaren Modelle können direkt über die Hugging Face Python/JS SDKs angesprochen werden — ohne API-Wechsel.

---

## 3. Token-Preise: Detaillierter Vergleich

### Nebius Preise (Token Factory, Stand März 2026)

Nebius unterscheidet zwischen zwei Endpoint-Typen:
- **Fast**: Optimiert für niedrige Latenz (Echtzeit-Interaktion)
- **Base**: Optimiert für Kosten (Batch-Verarbeitung, Quiz-Generierung)
- **Batch**: Automatisch 50% Rabatt auf Base-Preise

| Modell | Input ($/1M) | Output ($/1M) | Typ |
|---|---|---|---|
| Llama 3.1 8B Instruct | $0,02 | $0,06 | Base |
| Llama 3.1 8B Instruct | $0,03 | $0,09 | Fast |
| Llama 3.3 70B Instruct | $0,13 | $0,40 | Base |
| Llama 3.3 70B Instruct | $0,25 | $0,75 | Fast |
| Llama 3.1 405B Instruct | $1,00 | $3,00 | Base |
| QwQ-32B (Reasoning) | $0,15 | $0,45 | Base |
| QwQ-32B (Reasoning) | $0,50 | $1,50 | Fast |
| DeepSeek V3-0324 | $0,50 | $1,50 | Base |
| DeepSeek V3-0324 | $0,75 | $2,25 | Fast |
| DeepSeek R1-0528 | $0,80 | $2,40 | Base |
| DeepSeek R1-0528 | $2,00 | $6,00 | Fast |
| GLM-4.5 | $0,60 | $2,20 | Base |
| Hermes-4-405B | $1,00 | $3,00 | Base |
| Qwen2.5-Coder-7B | $0,03 | $0,09 | Base |

**Batch-Inferenz:** Jedes Modell im Batch-Modus = 50% des Base-Preises. Llama 3.3 70B Base im Batch = $0,065 Input / $0,20 Output pro 1M Tokens.

### Vergleich: Nebius vs. Markt ($/1M Tokens, Stand März 2026)

#### Qualitäts-Kategorie (gehobene Modelle)

| Provider / Modell | Input | Output | Verhältnis Output/Input |
|---|---|---|---|
| **Anthropic Claude Opus 4.6** | $5,00 | $25,00 | 5x |
| **Anthropic Claude Haiku 4.5** | $1,00 | $5,00 | 5x |
| **OpenAI GPT-5.2** | $1,75 | $14,00 | 8x |
| **OpenAI GPT-5 Nano** | $0,05 | $0,40 | 8x |
| **Google Gemini 3.1 Pro** | $2,00–4,00 | $12,00–18,00 | 6x |
| **Google Gemini 3 Flash** | $0,50 | $3,00 | 6x |
| **xAI Grok 4** | $3,00 | $15,00 | 5x |
| **DeepSeek V3.2-Exp (direkt)** | $0,28 | $0,42 | 1,5x |
| **Nebius Llama 405B Base** | $1,00 | $3,00 | 3x |
| **Nebius DeepSeek V3 Base** | $0,50 | $1,50 | 3x |
| **Nebius DeepSeek R1 Base** | $0,80 | $2,40 | 3x |

#### Budget-Kategorie (kleine Modelle für Routine-Aufgaben)

| Provider / Modell | Input | Output |
|---|---|---|
| **Nebius Llama 3.1 8B Base** | $0,02 | $0,06 |
| **Nebius Llama 3.3 70B Base** | $0,13 | $0,40 |
| **Google Gemini 3 Flash** | $0,50 | $3,00 |
| **OpenAI GPT-5 Nano** | $0,05 | $0,40 |
| **Anthropic Claude Haiku 4.5** | $1,00 | $5,00 |

**Kernbotschaft:** Nebius Llama 3.3 70B Base ist bei $0,13/$0,40 — das ist:
- **7,7x günstiger** im Input als Claude Haiku 4.5
- **50x günstiger** im Output als Claude Opus 4.6
- **2,5x günstiger** im Output als Google Gemini 3 Flash

Für Routine-Aufgaben (Quiz-Generierung, Erklärungen, einfache Übersetzungen) reicht Llama 3.3 70B völlig aus.

---

## 4. DSGVO-Status

### Rechtsgrundlage

Nebius Group N.V. ist als **niederländische Aktiengesellschaft** direkt dem EU-Recht und damit der DSGVO unterworfen. Als EU-Unternehmen ist Nebius gleichzeitig Verantwortlicher und möglicher Auftragsverarbeiter nach Art. 28 DSGVO.

### Rechenzentren (EU-Regionen)

| Region | Standort | Code |
|---|---|---|
| **Finnland** (Primär-EU) | Helsinki-Umgebung | eu-north1 |
| **Frankreich** | Paris | eu-west1 |
| **Island** | — | eu-north2 (private/select-access) |
| **UK** | Süd-England | uk-south1 (ab Q4 2025) |
| USA (Missouri) | Kansas City | us-central1 |
| Israel | — | me-west1 |

**Für DSGVO-Anforderungen:** EU-Regionen eu-north1 (Finnland) und eu-west1 (Frankreich) sind vollständig innerhalb der EU. Daten können so konfiguriert werden, dass sie die EU nicht verlassen.

### Zertifizierungen (verifiziert über Trust Center)

| Zertifikat | Status |
|---|---|
| **SOC 2 Type II** (inkl. HIPAA) | Vorhanden |
| **SOC 3** | Vorhanden |
| **ISO/IEC 27001** (Informationssicherheit) | Vorhanden |
| **ISO/IEC 27018** (Cloud-Datenschutz) | Vorhanden |
| **ISO/IEC 27701** (Datenschutzmanagement) | Vorhanden |
| **ISO/IEC 27799** (Gesundheitsinformatik) | Vorhanden — besonders relevant für Pflegedaten |
| **ISO 22301** (Business Continuity) | Vorhanden |
| **NIS 2** | Vorhanden |
| **DORA** | Vorhanden |

**ISO/IEC 27799** ist die internationale Norm für Informationssicherheit im Gesundheitswesen. Dass Nebius diese Zertifizierung hält, ist für eine Pflegelernplattform ein starkes Signal.

### DPA (Data Processing Agreement)

- Enterprise-Kunden erhalten **Custom DPAs** (laut Enterprise-Seite)
- Standard-Nutzungsbedingungen enthalten Datenschutz-Klauseln
- **Zero-Retention Inference**: Für Enterprise-Tier bietet Nebius Token Factory Inference ohne Datenspeicherung an — bedeutet: Anfragen werden verarbeitet, aber nicht gespeichert
- Kontakt für Datenschutzfragen: privacy@nebius.com

**Einschätzung DSGVO:** Nebius ist als EU-Unternehmen mit EU-Rechenzentren, ISO 27799-Zertifizierung und DPA-Option einer der DSGVO-freundlichsten AI-Provider auf dem Markt — deutlich besser positioniert als OpenAI (US-Unternehmen, US-Serverstandard) oder Anthropic (US-Unternehmen).

---

## 5. Relevanz für die Pflege-Lernplattform

### Mögliche Anwendungsfälle

| Funktion | Modell-Empfehlung | Endpoint-Typ |
|---|---|---|
| Quiz-Fragen generieren (aus Lerntext) | Llama 3.3 70B Base | Batch |
| Antwort-Feedback erklären | Llama 3.3 70B Fast | Fast (Echtzeit) |
| Lernstoff vereinfachen | Llama 3.1 8B Fast | Fast |
| Übersetzung DE→AR/TR/RU | Qwen 2.5 72B (mehrsprachig stark) | Base |
| Lernpfad-Personalisierung | Llama 3.3 70B Base | Batch |
| Prüfungsvorbereitung (komplexe Fragen) | DeepSeek R1 oder QwQ-32B | Base |
| Pflege-Fachbegriffe erklären | Llama 3.3 70B Fast | Fast |
| Dokument-Zusammenfassung (Pflegeleitlinien) | Gemma 3 27B (128K Kontext) | Base |

### Token-Hochrechnung: Kosten bei verschiedenen Schülerzahlen

#### Annahmen
- Durchschnittliche Lernsession: 45 Minuten
- AI-Anfragen pro Session: 20 Anfragen
- Tokens pro Anfrage: ~500 Input + ~800 Output = 1.300 Tokens
- Tokens pro Session: 20 × 1.300 = 26.000 Tokens
- Sessions pro Schüler/Monat: 15 (ca. 3 pro Woche)
- Tokens pro Schüler/Monat: 15 × 26.000 = 390.000 Tokens

**Empfohlenes Modell für Produktion:** Llama 3.3 70B Base ($0,13 Input / $0,40 Output)
- Gewichtung: 40% Input-heavy, 60% Output-heavy
- Effektiver Mischpreis: ca. $0,29 / 1M Tokens

| Schüler | Tokens/Monat | Kosten/Monat (Nebius) | Kosten/Monat (Claude Haiku) | Kosten/Monat (GPT-5 Nano) |
|---|---|---|---|---|
| **100 Schüler** | 39 Mio. | **~$11,30** | ~$62,00 | ~$17,50 |
| **500 Schüler** | 195 Mio. | **~$56,55** | ~$312,00 | ~$87,75 |
| **2.000 Schüler** | 780 Mio. | **~$226,20** | ~$1.248,00 | ~$351,00 |
| **10.000 Schüler** | 3,9 Mrd. | **~$1.131,00** | ~$6.240,00 | ~$1.755,00 |

*Berechnung: Input 40% × $0,13 + Output 60% × $0,40 = $0,052 + $0,24 = $0,292 pro 1M Tokens. Bei Batch-Modus (möglich für asynchrone Generierung): Halbierung auf ~$0,146 pro 1M.*

**Mit Batch-Inferenz (asynchrone Quiz-Generierung, nicht Echtzeit):**

| Schüler | Tokens/Monat | Kosten/Monat (Nebius Batch) |
|---|---|---|
| 100 Schüler | 39 Mio. | **~$5,70** |
| 500 Schüler | 195 Mio. | **~$28,25** |
| 2.000 Schüler | 780 Mio. | **~$113,00** |

#### Einordnung in die Gesamtkosten

Für 500 Schüler kostet Nebius-AI ca. $56/Monat (Echtzeit) oder $28/Monat (teilweise Batch). Das entspricht bei einem Schulpreis von z.B. €199/Monat pro Schule (5 Schulen × 100 Schüler) weniger als **2% der Einnahmen** für den AI-Anteil.

#### Upgrade auf 405B für Premium-Funktionen

Für besonders hochwertige Anwendungen (adaptive Lernpfad-Planung, komplexe Prüfungsfragen):

| Schüler | Llama 405B Base ($1,00/$3,00) Kosten/Monat |
|---|---|
| 100 Schüler | ~$85 |
| 500 Schüler | ~$425 |
| 2.000 Schüler | ~$1.700 |

Empfehlung: Llama 405B nur für Premium-Funktionen (Prüfungssimulation, individuelle Lernpfade), Standard-Aufgaben mit 70B abdecken.

---

## 6. Entwickler-Erfahrung (DX) und SDK

### OpenAI-kompatible API

Der wichtigste Aspekt für die Implementierung: Nebius AI Studio nutzt die **OpenAI-kompatible API**. Das bedeutet:

```python
# Wechsel von OpenAI zu Nebius: nur Base-URL und API-Key ändern
from openai import OpenAI

client = OpenAI(
    base_url="https://api.studio.nebius.ai/v1/",
    api_key="NEBIUS_API_KEY"
)

response = client.chat.completions.create(
    model="meta-llama/Llama-3.3-70B-Instruct",
    messages=[{"role": "user", "content": "Erkläre den Pflegeprozess"}],
    max_tokens=512,
)
```

**Konsequenz:** Kein Re-Engineering der Plattform nötig, wenn man z.B. von OpenAI zu Nebius wechselt. Ein Drop-in-Replacement in der Konfiguration.

### Integrationen (Q1–Q2 2025)

| Integration | Zweck | Relevanz für Pflege-Plattform |
|---|---|---|
| **Hugging Face Hub** | Modell-Zugriff | Direkter Zugriff auf alle Modelle |
| **LlamaIndex** | RAG-Framework | Pflegeleitlinien als Wissensbasis |
| **LiteLLM** | Multi-Provider-Abstraktion | Provider-Wechsel ohne Code-Änderung |
| **Helicone** | Observability/Logging | Kosten- und Qualitäts-Monitoring |
| **Postman** | API-Testing | Entwicklung/Testing |

### Playground und Fine-Tuning

- Web-Playground auf studio.nebius.ai für schnelles Testing
- Fine-Tuning von Modellen auf eigene Daten möglich (z.B. auf Pflegefach-Terminologie)
- Embedding-Modelle für semantische Suche in Lernmaterialien verfügbar

### SLA und Reliability (Token Factory)

- **99,9% Uptime SLA** (Token Factory, kostenpflichtig)
- Dedicated Endpoints: sub-second Inference, Autoscaling
- Durchsatz: 100M+ Tokens/Minute skalierbar
- Gratis-Credits: $1 beim Start (Playground/API)

---

## 7. Risiken

### Risiko 1: Yandex-Herkunft und Reputationsrisiko

**Situation:** Nebius stammt aus Yandex N.V., der niederländischen Holding des russischen Tech-Konzerns. Die vollständige Trennung von russischen Assets wurde 2024 vollzogen.

**Risiko-Level: MITTEL**
- Rechtlich: Vollständige Trennung vollzogen, niederländisches Unternehmen
- Reputatorisch: In Bildungseinrichtungen könnte die Yandex-Verbindung auf Skepsis stoßen, besonders in sicherheitssensiblen Bereichen
- Empfehlung: Im Schulen-Pitch nicht proaktiv erwähnen, aber transparent sein wenn gefragt. Zertifizierungen (ISO 27799, SOC2) in den Vordergrund stellen.

### Risiko 2: Vendor Lock-in

**Situation:** Nebius hostet Open-Source-Modelle. Alle verfügbaren Modelle (Llama, Mistral, DeepSeek etc.) sind bei anderen Providern (Together AI, Groq, Fireworks, selbst-gehostet) ebenfalls verfügbar.

**Risiko-Level: NIEDRIG**
- OpenAI-kompatible API ermöglicht einfachen Provider-Wechsel
- Kein proprietäres Modell-Lock-in (im Gegensatz zu GPT-4 oder Claude)
- LiteLLM als Abstraktionsschicht eliminiert Lock-in vollständig

### Risiko 3: Startup-Stabilität

**Situation:** Nebius ist ein relativ junges Unternehmen (Relaunch 2024), obwohl es auf Yandex-Infrastruktur aufbaut.

**Risiko-Level: MITTEL**
- Positiv: NVIDIA-Investment von $2 Mrd. ist ein starkes Stabilitätssignal
- Positiv: Börsennotiert (NASDAQ: NBIS), also Transparenzpflicht
- Positiv: Etablierte GPU-Infrastruktur (nicht von Null aufgebaut)
- Negativ: Weniger Support-Erfahrung als OpenAI/Anthropic (die seit Jahren Enterprise-Support anbieten)
- Negativ: Für Enterprise-Features (Custom DPA, Dedicated Slack) sind vermutlich Mindestvolumina nötig

### Risiko 4: Modell-Qualität vs. proprietäre Modelle

**Situation:** Nebius bietet nur Open-Source-Modelle an. GPT-5 und Claude Opus 4.6 sind aktuell qualitativ führend.

**Risiko-Level: NIEDRIG-MITTEL für die Pflege-Plattform**
- Für Standard-Aufgaben (Quiz-Generierung, Erklärungen, einfache Übersetzungen) ist Llama 3.3 70B ausreichend
- Für hochkomplexe medizinische Fragen (die gesetzlich ohnehin nicht von KI allein beantwortet werden sollten) könnten 405B-Modelle oder proprietäre Modelle besser sein
- DeepSeek R1 und QwQ-32B haben starke Reasoning-Fähigkeiten, die für Prüfungsvorbereitung geeignet sind

### Risiko 5: Support und SLA für Kleinstunternehmen

**Situation:** Das 99,9% SLA und Dedicated Support scheinen primär für Enterprise-Kunden (Großvolumen) zu sein.

**Risiko-Level: MITTEL**
- Für kleine Startups gibt es vermutlich nur Standard-Support
- Community und Dokumentation vorhanden, aber möglicherweise nicht auf OpenAI-Niveau
- Token Factory 99,9% SLA gilt für zahlende Kunden, nicht für Free-Tier

### Risiko 6: Datenspeicherung bei Inference

**Situation:** Standardmäßig ist unklar, ob Nebius Inference-Anfragen loggt.

**Risiko-Level: MITTEL**
- Laut Trust Center: Zero-Retention Inference für Enterprise verfügbar
- Für Standard-Tier: Datenschutzerklärung und AVV prüfen, bevor Schülerdaten durch API gehen
- **Wichtig:** Keine personenbezogenen Schülerdaten direkt in Prompts übergeben — nur anonymisierte Lernfragen, keine Namen/IDs

---

## 8. Empfehlung

### Bewertungsmatrix

| Kriterium | Gewichtung | Bewertung | Score |
|---|---|---|---|
| Preis | 30% | Sehr günstig (7–50x günstiger als Anthropic/OpenAI) | 9/10 |
| DSGVO-Konformität | 25% | EU-Unternehmen, EU-Server, ISO 27799, Custom DPA | 8/10 |
| Modell-Qualität für Pflege | 20% | Llama 70B/405B ausreichend, kein proprietäres Top-Modell | 7/10 |
| Developer Experience | 15% | OpenAI-kompatibel, gute Integrationen | 8/10 |
| Stabilität/Risiko | 10% | Yandex-Herkunft, jung, aber NVIDIA-backed | 6/10 |
| **Gesamt-Score** | 100% | | **7,9/10** |

### Empfehlung: BEDINGT JA

**Nebius ist für die Pflege-Lernplattform empfehlenswert als primärer LLM-Provider**, unter folgenden Bedingungen:

#### Bedingung 1: Strikte Datenhygiene
Schülerdaten (Namen, IDs, Lernstände) dürfen NICHT in API-Anfragen eingehen. Prompts müssen anonymisiert sein:

```
FALSCH: "Max Mustermann aus Klasse 3b hat Frage X falsch beantwortet. Erkläre..."
RICHTIG: "Ein Lernender hat folgende Antwort gegeben: [anonymisierter Text]. Erkläre..."
```

#### Bedingung 2: EU-Region explizit konfigurieren
Bei Nebius AI Studio die EU-Region (eu-north1 oder eu-west1) für alle Anfragen setzen. Dies muss in der API-Konfiguration und ggf. im AVV festgehalten werden.

#### Bedingung 3: Custom DPA verhandeln
Sobald die Plattform produktiv geht und Schulen zahlen: Custom DPA mit Nebius abschließen, das Zero-Retention Inference garantiert.

#### Bedingung 4: LiteLLM als Abstraktionsschicht
Um Provider-Lock-in zu vermeiden und einfachen Wechsel zu ermöglichen:

```python
# LiteLLM: Ein Interface, alle Provider
import litellm
response = litellm.completion(
    model="nebius/meta-llama/Llama-3.3-70B-Instruct",
    messages=[...],
    api_base="https://api.studio.nebius.ai/v1/"
)
```

#### Empfohlene Modell-Strategie

| Funktion | Modell | Modus | Begründung |
|---|---|---|---|
| Echtzeit-Erklärungen | Llama 3.3 70B Fast | Fast | Gutes Preis-Leistungs-Verhältnis, schnell |
| Quiz-Generierung | Llama 3.3 70B Base | Batch | 50% Rabatt, nicht zeitkritisch |
| Mehrsprachige Inhalte | Qwen 2.5 72B | Base | Stark in Arabisch/Türkisch/Russisch |
| Komplexe Prüfungsfragen | DeepSeek R1 Base | Base | Reasoning-Stärke, Batch-fähig |
| Dokument-Analyse (Leitlinien) | Gemma 3 27B | Base | 128K Kontext für lange Dokumente |

#### Fallback-Strategie

Für den Fall, dass Nebius-Qualität bei bestimmten Aufgaben nicht ausreicht:
- LiteLLM ermöglicht nahtlosen Wechsel zu OpenAI, Anthropic oder Groq
- A/B-Testing: Nebius vs. OpenAI für dieselbe Aufgabe, Qualitätsvergleich
- OpenAI GPT-5 Nano ($0,05/$0,40) als Fallback für einfache Aufgaben wenn Llama zu schwach

### Zusammenfassung in einem Satz

**Nebius AI bietet EU-konformes, Open-Source-basiertes LLM-Hosting zu Preisen, die 7–50x unter denen von Anthropic oder OpenAI liegen, mit ausreichender Qualität für alle Routine-Lernaufgaben der Pflegeausbildung — und ist damit der empfohlene primäre AI-Provider für die Pflege-Lernplattform.**

---

## Quellen

- [Nebius Token Factory Preisseite](https://nebius.com/token-factory/prices)
- [Nebius Trust Center / Zertifizierungen](https://nebius.com/trust-center)
- [Nebius AI Studio](https://nebius.com/ai-studio)
- [Nebius Token Factory Enterprise](https://nebius.com/services/token-factory/enterprise-grade-inference)
- [Nebius SLA-Dokumentation](https://docs.nebius.com/legal/sla)
- [Nebius Group Wikipedia](https://en.wikipedia.org/wiki/Nebius_Group)
- [TechCrunch: The curious case of Nebius](https://techcrunch.com/2024/11/24/the-curious-case-of-nebius-the-publicly-traded-ai-infrastructure-startup/)
- [NVIDIA invests $2 billion in Nebius](https://thenextweb.com/news/nvidia-invests-2-billion-in-nebius)
- [Artificial Analysis: Nebius Intelligence & Price](https://artificialanalysis.ai/providers/nebius)
- [LLM API Pricing Comparison 2025](https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025)
- [LiteLLM: Nebius AI Studio](https://docs.litellm.ai/docs/providers/nebius)
- [Nebius Q1 2025 Studio Updates](https://nebius.com/blog/posts/q1-2025-studio-updates)
- [Nebius Token Factory Launch (BusinessWire)](https://www.businesswire.com/news/home/20251105549683/en/Nebius-Launches-Nebius-Token-Factory-to-Deliver-Production-AI-Inference-at-Scale)

---

*Erstellt: 2026-03-16 | Alle Preise: Stand März 2026 | Modellverfügbarkeit: regelmäßig auf studio.nebius.ai prüfen*

# CE-06 · LE1 — Wissens-Verteilungs-Karte (Template)

> **Didaktik-Grundlage:** `specs/DIDAKTIK-WISSENSNETZ.md` (Leitprinzip „ein Kern-Wissen,
> mehrere Begegnungen"). Diese Karte ist das Muster, nach dem jede LE verteilt wird:
> erst das Wissen aus den Lernergebnissen, dann Heimat-Situationen, dann das Wiederbegegnungs-Netz.

## 1. Welches Wissen fordert LE1? (aus den Lernergebnissen)

LE1-Schwerpunkt-Set (Rahmenlehrplan): **I.4** primär · II.1 · II.3 · III.2 · V.2.

| Lernergebnis | Bloom | Wissens-Atome |
|---|---|---|
| W1 (wissen) | 2 | Recht/Ethik Erste Hilfe · Katastrophensituationen · BLS-Ablauf · ALS-Prinzipien · Kammerflimmern Ursache/Symptomatik · KPR-Indikation · AED-Wirkprinzip |
| K1 (können) | 2 | Erste Hilfe: Wunden/Blutung/Sturz · Hitze/Verbrennung/Erfrierung/Verätzung |
| K2 (können) | 2 | lebenserhaltende Sofortmaßnahmen |
| K3 (können) | 2 | Synkope · Apoplex · epileptischer Anfall (+ Hypoglykämie-Differenzial) |
| K4 (können) | 2 | psychotische Erregungszustände |
| K5 (können) | 4 | Notfallpläne analysieren + Aufgabenfeld Pflege |
| E1 (einstellung) | 5 | eigene Gefühle/Erfahrungen reflektieren |

## 2. Heimat-Situationen (jede besitzt eine Leitsymptomatik tief)

| Situation | Leitsymptomatik (tief) | Lernergebnis |
|---|---|---|
| **Wagner** | Herz-Kreislauf-Stillstand / Reanimation | W1(Rea-Teile), K2, E1 |
| **Ríos** | Synkope / Hypoglykämie → **Neuro-Differenzial** | K3 |
| **Lehmann** | Sturz / Wunden / Blutung / SHT | K1(Trauma-Teile) |
| **Novak** | psychotische Erregung | K4 |
| **NEU: thermisch/chemisch** | Hitze/Verbrennung/Erfrierung/Verätzung | K1(Rest) |
| **NEU: Differenzierungs-Capstone** | „Jemand liegt am Boden — was ist es?" | interleavt K2/K3/K4 |

## 3. Wiederbegegnungs-Netz (dasselbe Wissen, andere Perspektive)

| Kern-Wissen | Heimat (tief) | Wiederbegegnung (Retrieval, andere Perspektive) |
|---|---|---|
| Schnappatmung / HKS erkennen | Wagner | Ríos (Kontrast: Kreislauf kommt zurück); Capstone |
| Synkope vs. Ernstes | Ríos | Wagner (Spektrum); Lehmann (Sturz **durch** Synkope?) |
| KPR-Indikation / „wann NICHT reanimieren" | Wagner | **LE5 Erlemann** (Therapieziel/Patientenverfügung — ganz andere Perspektive) |
| Bewusstlosen-Ersteinschätzung | geteilt | jede LE1-Situation startet mit „was ist das?" |
| No-Flow-Zeit / Minimalunterbrechung | Wagner | überall wo Reanimation vorkommt (LE2 Yıldız) |

Umsetzung im Schema: `WiederbegegnungEintrag` + `spektrum[]`; Wiederbegegnung als **aktives
Abrufen** (erst fragen, dann bestätigen), nicht passive Erinnerung.

## 4. Gap-Status (Stand 2026-07-12) + Verteilung

| Wissen | Status | Maßnahme |
|---|---|---|
| BLS / Kammerflimmern / AED | ✅ Wagner (3 Tabs) | — |
| K2 / E1 | ✅ Wagner | — |
| Synkope / Hypoglykämie | ✅ Ríos | — |
| Sturz/Wunden/Blutung | ✅ Lehmann | — |
| psychotische Erregung | ✅ Novak | — |
| **KPR-Indikation + Recht/Ethik** | 🔴 fehlt (kein Kernfakt) | neuer Wagner-Tab, Kernfakt zuerst; Wiederbegegnung LE5 |
| **ALS-Prinzip** | 🔴 nicht gelehrt (F-10 da) | leichter Tab in Wagner „übergeben" |
| **K3 Apoplex + Krampfanfall** | 🔴 kein Zuhause | Ríos → Neuro-Differenzial ausbauen |
| **K1 thermisch/chemisch** | 🔴 kein Zuhause | eigene kleine Situation |
| **K5 Notfallpläne (Bloom 4)** | 🔴 kein Zuhause | Analyse-Beat an Wagner „reflektieren" (knüpft an CIRS) |
| Katastrophensituationen | ✅ LE4 Radtke | nur querverlinken, nicht duplizieren |

## 5. Bau-Reihenfolge

1. **Wagner fertig:** Kernfakten (KPR-Indikation, Recht/Ethik) recherchieren → KPR-Tab +
   Notfallplan-Analyse-Beat + leichter ALS-Tab. Marker-Korrektur der 10 Altsteps (KB-Set).
2. **Wiederbegegnungs-Links** setzen (Wagner↔Ríos↔LE5).
3. **Ríos → Neuro-Differenzial** (Apoplex + Krampfanfall).
4. **Thermisch/chemische Notfälle** (neue Situation).
5. **Differenzierungs-Capstone** (interleavt alles).

Nach jedem Schritt: tsc + Abstandstest + pflege-validator/klinik-panel.

# Quellen-Einkaufsliste — Grounding auf hohe Latte

**Datum:** 2026-06-10
**Quelle:** ⚠️-Marker in CE-02-Kernfakten (27) + Semantik-Audit TEILWEISE-Fälle
**Ziel:** Jede ⚠️/TEILWEISE-Teilaussage gegen eine echte Primärquelle belegen (R1–R4).

---

## A) Frei verfügbar — beschaffen + lesereihenfolge-extrahieren (wie DNQP-Auszüge)

| Quelle | Schaltet frei | Status |
|--------|---------------|--------|
| **AWMF S3-Leitlinie VTE-Prophylaxe** (003-001) | thrombose F-07 Heparin-Technik?, Risiko-Assessment, MTPS, pAVK-KI | ⬜ |
| **AWMF/DGEM S3 Klinische Ernährung** + **ESPEN Refeeding** | enterale F-10/11 Refeeding, ernaehrungsassessment | ⬜ |
| **RKI/KRINKO — Prävention katheterassoziierter Harnwegsinfektionen** | blasenkatheter (KRINKO/CDC/EAUN) | ⬜ |
| **RKI/KRINKO — nosokomiale Pneumonie / Surveillance** | pneumonie F-12 Fallzahl | ⬜ |
| **DGE D-A-CH Referenzwerte** (dge.de) | ernaehrungsgrundlagen F-02/03/04/08/10/11 (Nährstoff-Zahlen, Vit-D 20µg/800IE), Atwater | ⬜ |
| **IDDSI Framework** (iddsi.org, frei) | essen-anreichen F-06 IDDSI-Level | ⬜ |
| **WHO Falls Report 2007** | sturz F-01 (haben DNQP-Definition schon), Statistik | ⬜ |
| **AWMF S2k Dekubitus / EPUAP-NPIAP-PPPIA Quick Reference** | dekubitus F-04 Kategorien, F-08 Braden, F-13 Hilfsmittel | ⬜ (EPUAP Quick Ref frei) |

## B) Frei, aber Einzel-Artikel (oft frei als PDF auffindbar)

| Quelle | Schaltet frei | Status |
|--------|---------------|--------|
| **Trapl et al. 2007 — GUSS** (Stroke, teils frei) | pneumonie F-10, essen-anreichen F-05 | ⬜ |
| **Leonard et al. 2004 — SBAR** (BMJ Qual Saf, frei) | pflegedoku F-07 SBAR | ⬜ |
| **WHO 2007 High-5s — ISBAR** | pflegedoku F-08 ISBAR | ⬜ |

## C) Kostenpflichtig / Lizenz nötig — Gründerin/Dozentin entscheidet

| Quelle | Schaltet frei | Hinweis |
|--------|---------------|---------|
| **Cochrane Review Sturzprävention** (Sherrington et al.) | sturz F-04 Trainings-Überlegenheit/Dosierung | Abstract frei, Volltext Lizenz |
| **Braden & Bergstrom 1987** | dekubitus F-08 6 Bereiche | Journal, paywalled |
| **Podsiadlo & Richardson 1991 — TUG** | assessments F-09 Schwellen | Journal, paywalled |
| **Heaton/Lewis 1997 — Bristol-Skala** | stuhlausscheidung F-02 | Journal, paywalled |
| **Hoehl/Kullick Kinderkrankenpflege 5. Aufl.** | saeuglingspflege F-01/05/06 | Lehrbuch, Kauf (prüfen ob in recherche/icare/ vorhanden) |
| **NANDA-I / NIC / NOC Klassifikationsbücher** | assessments F-11 | Lehrbücher, Kauf |
| **DNQP-Methodenpapier (6 Standardkriterien-Aufbau)** | assessments F-12 (S-P-E haben wir aus Auszug) | tlw. frei auf dnqp.de |

---

## Vorgehen
1. **A + B beschaffen** (frei) → `scripts/extract-grounding-sources.sh` erweitern → `recherche/<quelle>-volltext/`.
2. ⚠️/TEILWEISE-Fakten gegen die neuen Quellen re-grounden (Fix-Agenten).
3. **C** als Gründerin-/Dozentin-Entscheidung (Kauf/Lizenz/Institutionszugang) — bis dahin bleiben diese Detail-Aussagen ehrlich ⚠️ markiert.
4. Re-Audit → STÜTZT-Quote messen.

**Realismus:** A/B heben einen Großteil; ein Rest (C, v.a. urheberrechtlich geschützte Skalen-Originalarbeiten + Klassifikations-Lehrbücher) bleibt ⚠️, bis lizenziert. Das ist konform zu R3 (sichtbar statt kaschiert).

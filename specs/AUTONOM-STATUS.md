# Autonom-Status — lebende Queue & Metriken

**Letzter Lauf:** 2026-06-10 (Setup) · **Phase:** CE-02 auf hohe Latte heben (vor Skalierung auf CE-05+)

---

## Metriken (ehrlich, beim letzten Selbst-Check)

| Metrik | Wert | Ziel |
|--------|------|------|
| CE-02 Themen mit Kernfakten | 25/25 | 25/25 ✅ |
| Fakten gesamt | 353 | — |
| **STÜTZT-Quote (Semantik-Audit)** | ~51 % (vor Fix) → **neu messen** | ≥ 90 % |
| STÜTZT-NICHT | 23 gefixt → **neu messen** | 0 |
| Freie Primärquellen integriert | 8 (AWMF-VTE, RKI-KRINKO, ASPEN, SBAR, IDDSI, EPUAP, DGE×2) | alle freien |
| ⚠️ ehrliche Lücken | ~33 | nur lizenzpflichtig/Dozentin |

**Letzte ehrliche Selbst-Einschätzung:** „halluzinationssicher fundiert" — aber NICHT „pflegefachlich top": nur ~51 % der Fakten voll quellengedeckt (Stand vor jüngsten Fixes — muss neu gemessen werden), kein Dozentin-Review, Detail-Zahlen teils nur lizenzpflichtig belegbar.

---

## QUEUE (oberste Zeile = nächstes Paket)

1. **Voll-Semantik-Audit CE-02 neu** (alle 25 Themen, adversarial) → echte STÜTZT-Quote nach den jüngsten Fixes messen + STÜTZT-NICHT-Liste neu.
2. **Restliche STÜTZT-NICHT fixen** (aus 1) — echtes Zitat / ⚠️ / entschärfen.
3. **TEILWEISE auflösen** (~140, batchweise pro Thema): Zweitzitat aus vorhandenem Korpus (Pflege heute / 8 Primärquellen) für die ungedeckte Teilaussage; wo nicht im Korpus → ⚠️ mit konkreter Quelle.
4. **Weitere FREIE Quellen prüfen/beschaffen:** ESPEN-Vollleitlinie (klin. Ernährung), WHO Falls Report 2007, weitere AWMF-S3 (Dekubitus, Ernährung), RKI nosokomiale Pneumonie (pneumonie F-12 Fallzahl). Jede via fetch-leitlinien.sh-Muster, dann betroffene Fakten re-grounden.
5. **Re-Audit** → STÜTZT-Quote gegen Ziel ≥ 90 % prüfen.
6. Wenn ≥ 90 % + 0 STÜTZT-NICHT + Rest sauber ⚠️ → **CE-02 fertig genug** → Übergabe (siehe Eskalationen), DANN erst Queue für CE-05/weitere CE öffnen.

---

## ESKALATIONEN (geloggt, NICHT blockierend — Gründerin/Dozentin)

- **Lizenzpflichtige Quellen kaufen/zugänglich machen** (deckeln die STÜTZT-Quote): Cochrane Volltext (Sturzprävention), Braden & Bergstrom 1987, Podsiadlo & Richardson 1991 (TUG), Heaton/Lewis 1997 (Bristol), Hoehl/Kullick Kinderkrankenpflege, NANDA-I/NIC/NOC, GUSS/Trapl 2007.
- **Dozentin-Review** (R6) — das menschliche „pflegefachlich korrekt"-Siegel. Pflicht vor Live/Förder.
- **git push** — Gründerin pusht im Terminal (Sandbox-Push hängt).
- **Hetzner-Server + Deploy** — vor Schul-Pilot (siehe `reference_hetzner_deployment`).

---

## LOG (neueste oben — jeder Lauf trägt 1 Zeile ein)
- 2026-06-10 Setup: Playbook + Status + Zeitplan eingerichtet. 8 freie Quellen integriert; STÜTZT-NICHT-Erstrunde (23) gefixt. Nächstes: Voll-Re-Audit.

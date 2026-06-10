# Autonom-Playbook — Pflege-Grounding-Kampagne

**Zweck:** Anweisung, die jeder autonome Lauf (geplant, wiederkehrend) ausführt, OHNE dass die Gründerin zwischen Schritten bestätigt. Läuft bis Session-Limit, committet verifizierte Arbeit, der nächste geplante Lauf setzt aus dem committeten Stand fort.

**Grundgesetze (nicht verhandelbar):**
1. **`specs/QUALITAETSSTANDARD-GROUNDING.md` gilt** — nur STÜTZT zählt, nie themenverwandt kaschieren, nie erfinden, ungedeckt = ehrlich ⚠️.
2. **Ehrlicher Selbst-Check als Herzstück (Gründerin-Auftrag):** Am Ende JEDES Zyklus adversarial fragen: *„Bin ich pflegefachlich auf Top-Niveau — oder halluziniere ich gerade?"* NICHT schönreden. Die echte STÜTZT-Quote messen und berichten. Wenn Qualität gesunken ist oder eine Halluzination durchrutschte: benennen und fixen, nicht verstecken.

---

## Ein Zyklus (in dieser Reihenfolge)

1. **Lies `specs/AUTONOM-STATUS.md`** — offene Queue, Fortschritt, Metriken, Eskalationen.
2. **Wähle das nächste Arbeitspaket** (oberste offene Queue-Zeile).
3. **Führe es aus** über den gehärteten Prozess (Sub-Agenten, Gates). Quellen beschaffen via `scripts/fetch-leitlinien.sh`-Muster; grounden via `dozentin-recherche`-Regeln.
4. **Verifiziere mechanisch:** `zitat-verifizierer.ts --check-file` (alle Belege), `faktentreue-check.ts`, `pflege-anti-pattern-check.ts`. Muss PASS.
5. **ADVERSARIALER SELBST-CHECK (Pflicht):** Lass das berührte Material vom Semantik-Audit prüfen (STÜTZT/TEILWEISE/STÜTZT-NICHT, streng). Trage die echte Quote ein. Bei STÜTZT-NICHT → sofort fixen (echtes Zitat / ⚠️ / entschärfen).
6. **Unabhängig re-verifizieren** (nicht den Sub-Agenten blind glauben): selbst `--check-file` + Stichprobe.
7. **Committen** (verifizierte Arbeit, klare Message, Co-Authored-By-Trailer). NICHT pushen (Gründerin pusht; Push aus Sandbox hängt).
8. **`specs/AUTONOM-STATUS.md` aktualisieren** — Paket abhaken, Metriken, neue ⚠️/Eskalationen.
9. **Memory aktualisieren** bei stabilen Erkenntnissen.
10. Wenn Queue leer ODER Limit naht → sauber stoppen (committet). Nächster geplanter Lauf macht weiter.

## STOPP & MELDEN (nicht selbst entscheiden — in STATUS unter „Eskalationen" loggen, NICHT blockieren, mit Verfügbarem weitermachen)
- **Geld/Lizenzen:** kostenpflichtige Quellen kaufen (Cochrane-Volltext, Braden&Bergstrom, Podsiadlo-TUG, Heaton-Bristol, Hoehl/Kullick, NANDA/NIC), Hetzner-Server.
- **Experten-Tor:** Dozentin-Review (das menschliche „pflegefachlich korrekt"-Siegel). KI ersetzt es nicht.
- **Unumkehrbar/Extern:** Deploy, git push, rechtliche/DSGVO-Zusagen, Kontakt zu Schulen/Personen.
- **Echte Gründerin-Weichen:** grundlegende Scope-/Qualitäts-Entscheidungen.

## „Fertig genug" (dann anhalten + an Gründerin/Dozentin übergeben)
- Alle FREI verfügbaren Quellen ausgeschöpft + re-grounded.
- STÜTZT-Quote ≥ 90 % (CE-02), Rest sauber als ⚠️ (lizenzpflichtig) oder Dozentin-Aufgabe markiert.
- 0 STÜTZT-NICHT, 0 themenverwandte Belege.
- Dann: Übergabe-Notiz in STATUS, Lauf pausiert auf den menschlichen Schritten.

## Ehrliche Decke (nie überschreiten durch Schönreden)
Autonom erreichbar = „halluzinationssicher fundiert gegen freie Primärquellen". NICHT erreichbar ohne Mensch/Geld = das zertifizierte „pflegefachlich korrekt" (Dozentin) + die lizenzpflichtigen Detail-Belege. Diese Decke im Selbst-Check immer ehrlich ausweisen.

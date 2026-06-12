# CE-02 Lücken-Worklist (Rahmenlehrplan-Coverage abarbeiten)

**Quelle:** `specs/ce-02/lernergebnis-coverage-2026-06-12.md` (43 % VOLL / 41 % TEILWEISE / 16 % FEHLT)
**Prinzip:** unsere Struktur (CE → Themen + Situationen), nicht LE. „LExy" = nur Curriculum-Herkunft.
**Qualitätsbar pro Item:** belegt (Korpus) · professioneller Ton · B1-Variante · richtige Bloom-Stufe · Wissens-Rhythmus-Regel ([[wissens-rhythmus-korridor]]).

---

## ✅ Erledigt (Session 2026-06-12)
- [x] Wahrnehmung & Wahrnehmungsfehler (LE5 W2/W3) — Baustein 16 + Bauer-MC `beob-01c`
- [x] Pflegeprozess als Beziehungsprozess (LE5 K3) — Baustein 17
- [x] Doku Aufwand/Nutzen diskutieren (LE5 E1) — Baustein 18
- [x] SIS-Themenfelder 5→6 korrigiert (Konsistenzfehler)
- [x] Reihenfolge: Wahrnehmungs-MC vorgezogen · Summaries in Kern-Fluss (nguyen, spirale2)

---

## AP-1 — Haltungs-/Reflexions-Steps (hoher Wert, klein, klar zuerst)
Inhalt oft da, nur das Reflexions-/Diskussions-Format fehlt → Bloom „diskutieren/reflektieren".
- [x] **Ekel-Legitimität** „Dürfen sich Pflegende ekeln?" (LE9 E13/E14) → reflection-Step in `ls-nguyen-stoma` oder `ls-schmidt` (Ausscheidung/Intim). Quelle: pflege-konformitaet (Würde), kommunikation-Korpus. *groß im Wert, klein im Bau*
- [x] **Eigene Essbiografie reflektieren** (LE8 E4) → reflection in `ls-schmidt-adipositas`. Quelle: I Care Ernährung/Biografie.
- [ ] **Eigenes Bewegungs-/Gesundheitsverhalten** (LE6 #21) → reflection (Kinästhetik-/Rückenschutz-Kontext, z. B. `ls-yilmaz-hueft-tep`).
- [ ] **Nahrungsverweigerung diskutieren** + **Essen im Krankenhaus** (LE8 E2/E3) → je 1 reflection/freetext.

## AP-2 — Anatomie/Physiologie-Grundlagen-Strang (GROSS, systematische Lücke)
Kein dedizierter Grundlagen-Strang. Quelle durchgängig: **I Care Anatomie** (haben wir als Volltext).
- [ ] Bewegungsapparat: **Wirbelsäule** (Aufbau/Abschnitte + alters-/entwicklungsbedingt), **Gelenklehre** (Gelenktypen, Bewegungsebenen) (LE6 #7/#8/#10)
- [ ] **Herz-Aufbau + Herzzyklus**, **Arterien/Venen-Anatomie**, **Puls-Physiologie** (LE6 #2/#3/#4)
- [ ] **Verdauungsorgan-Topografie** (LE8 #1)
- [ ] **Urogenital-Topografie** (Niere/Harnleiter/Blase/Harnröhre, äußere Organe) (LE9 #1/#2)
- *Ort offen:* eigenes Thema „Anatomie-Grundlagen" ODER Bausteine in mobilisation/ernährung/ausscheidung. **Vor Bau entscheiden.** Aufwand: 4–6 Wahrnehmung-große Bauten → aufteilen.

## AP-3 — Alters-Breite Kind/Säugling (mittel)
Quelle: **kinderkrankenpflege**-Korpus (haben wir).
- [ ] **Sensomotorische Meilensteine** + entwicklungsfördernder Säuglings-Transfer (LE6) → `ls-emilia-saeugling` / saeuglingspflege-Thema
- [ ] **Kindliche Sauberkeitsentwicklung/Trockenwerden** (LE9, 0 Treffer) → emilia / harnausscheidung-Thema

## AP-4 — Klein-Lücken (mechanisch, schnell)
- [ ] **Augentropfen verabreichen** (LE7 K8) → ganzkörperpflege-Thema / Situation. Quelle: I Care.
- [ ] **Brille/Hörgerät-Umgang** (LE7 K7) → ganzkörperpflege
- [ ] **Seh-/Hörbehinderung → Auswirkung auf Körperpflege** (LE7 W4) → ganzkörperpflege
- [ ] **Altersbedingte Geschmacks-/Geruchsveränderung** (LE8 #3) → ernährung-Thema. Quelle: I Care/Pflege heute.
- [ ] **MDK-Grundsatzstellungnahme** (LE5 #13) → pflegedokumentation (Quellen-Referenz). Quelle: GA/Pflege heute.
- [ ] **Geschichte des Pflegeprozesses** vertiefen (LE5 #1, nur dünn) → pflegeprozess-Thema.

---

## Empfohlene Abarbeitungs-Reihenfolge
**AP-1 (Reflexionen, Quick Wins) → AP-4 (Klein-Lücken) → AP-3 (Alters) → AP-2 (Anatomie, groß, in 4 Teilbauten).**
Nach jedem AP: tsc + commit; nach AP-1+4 zusammen deployen + reviewen.

## Tracking
Worklist hier abhaken. Nach Abschluss aller AP: Coverage-Validator (manuell/Agenten) erneut → Ziel: 0 FEHLT, TEILWEISE deutlich runter.

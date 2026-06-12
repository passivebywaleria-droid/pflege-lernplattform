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
- [x] **Eigenes Bewegungs-/Gesundheitsverhalten** (LE6 #21) → reflection `dur-06b-eigener-rueckenschutz` in `ls-yilmaz-hueft-tep` (Kinästhetik/Rückenschutz).
- [x] **Nahrungsverweigerung diskutieren** + **Essen im Krankenhaus** (LE8 E2/E3) → reflection `dur-10-nahrungsverweigerung-reflexion` in `ls-petrov-schlaganfall` (DNQP Ernährung, §630d BGB).

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

## AP-4 — Klein-Lücken (mechanisch, schnell) — ✅ KOMPLETT
- [x] **Augentropfen verabreichen** (LE7 K8) → `ganzkoerperpflege-augentropfen` (B20). Pflege heute Kap. 35.1.5.
- [x] **Brille/Hörgerät-Umgang** (LE7 K7) → `ganzkoerperpflege-brille-hoergeraet` (B21). Pflege heute Kap. 10.5/6.4.
- [x] **Seh-/Hörbehinderung → Auswirkung auf Körperpflege** (LE7 W4) → `ganzkoerperpflege-sinneseinschraenkung` (B22). Pflege heute Kap. 10.5/10.6.
- [x] **Altersbedingte Geschmacks-/Geruchsveränderung** (LE8 #3) → `ernaehrungsgrundlagen-sinne-im-alter` (B17). Pflege heute Kap. 7, I Care.
- [x] **MDK-Grundsatzstellungnahme** (LE5 #13) → `pflegedokumentation-mdk-grundsatzstellungnahme` (B15). MDK 2005 (im Rahmenplan zitiert), I Care Kap. 2/3.
- [x] **Geschichte des Pflegeprozesses** (LE5 #1) → `pflegeprozess-geschichtliche-hintergruende` (B19). Prüfungswissen (WHO/Yura&Walsh, Fiechter/Meier, ADPIE, Strukturmodell).

---

## Empfohlene Abarbeitungs-Reihenfolge
**AP-1 (Reflexionen, Quick Wins) → AP-4 (Klein-Lücken) → AP-3 (Alters) → AP-2 (Anatomie, groß, in 4 Teilbauten).**
Nach jedem AP: tsc + commit; nach AP-1+4 zusammen deployen + reviewen.

## Tracking
Worklist hier abhaken. Nach Abschluss aller AP: Coverage-Validator (manuell/Agenten) erneut → Ziel: 0 FEHLT, TEILWEISE deutlich runter.

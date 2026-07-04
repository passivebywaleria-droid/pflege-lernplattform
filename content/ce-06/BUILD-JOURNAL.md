# CE-06 Build-Journal — In Akutsituationen sicher handeln

> Naht-Versicherung über Sessions (MASTER-BUILDPLAN §4). Was gebaut ist, was offen ist,
> welche Patienten/Fakten fest verdrahtet sind. Nächster Chat bootet hieraus weiter.
>
> Stand: 2026-07-04 · Branch: pilot/frau-m-inline-wissen-v1

---

## Status: LE1 + LE2 KOMPLETT (6 Situationen) — gate-green, DEPLOYED (Hetzner, HTTP 200)
> Live: https://178-105-176-161.nip.io/de/lernen/situation/ls-wagner-reanimation?ce=ce-06

CE-06 = das Demo-Wow-Stück (Branching unter Zeitdruck). Welle 1 liefert die Reanimations-
Leitsituation voll gegroundet und durch alle deterministischen Klinik-Gates.

**CE-06 ist NICHT rahmenplan-vollständig** — 35 LE, davon 4 gedeckt (LE1). Das Tiefe-Gate
(`scripts/lernergebnis-tiefe.ts 6`) ist bewusst FAIL (31 LE offen). Wie CE-04 → Status 🟡 Pilot.

---

## Gebaut (Welle 1)

### Grounding (Kernfakten, verbatim-verifiziert)
- `specs/ce-06/kernfakten/reanimation-bls.md` — F-01…F-11 (14 Belege, alle ✅ `zitat-verifizierer`)
- `specs/ce-06/kernfakten/notfallassessment.md` — F-01…F-07 (ABCDE, GCS, Schock, SBAR; 8 Belege ✅)
- Grounding-Quellen: `recherche/pflege-heute-volltext/` + `recherche/notfallmedizin-volltext/`
  (neu extrahiert via `scripts/extract-grounding-sources.sh` — Notfallmedizin-Eintrag ergänzt)
  + `recherche/leitlinien-volltext/sbar-leonard-2004.txt`.

### Situation `ls-wagner-reanimation` (SituationsTyp: akutsituation, 5 Phasen)
- Patient: **Klaus Wagner, 67**, m. Instabile Angina pectoris, Z.n. 2 Infarkten (2019/2023),
  Typ-2-Diabetes, **Vorhofflimmern unter Apixaban** (NICHT Eliquis-Markenname → Wirkstoff),
  Adipositas BMI 31. Setting: kardiologische Normalstation, Kollaps im Flur, 08:15.
  patientId: `pat-wagner-rea`. Ton: liebenswürdig, will niemandem zur Last fallen.
- Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
- 9 Steps, davon 8 claim-tragend (alle `kernfaktId`-gegroundet). Demo-Wow = `erm-02`
  (Branching: AED „Schock empfohlen" unter Zeitdruck, „Alle weg!" + Sichtkontrolle).

### Verdrahtung
- `content/ce-06/index.ts`, `content/ce-06/situationen.ts`, `.../ls-wagner-reanimation/{patient,phases,index}.ts`
- `content/content-loader.ts` → CE_MODULES `"ce-06"` registriert
- `content/_manifest.ts` → CE-06 `situationen: ["ls-wagner-reanimation"]`, `status: "steps"`
- `specs/ce-06/lernergebnis-mapping.json` (W10-Tiefe-Gate), `lernergebnis-coverage-scaffold.md` (Bilanz LE1)

### Gate-Status (Welle 1)
| Gate | Ergebnis |
|------|----------|
| `zitat-verifizierer --check-file` (beide Kernfakten) | ✅ 22/22 Belege |
| `step-grounding-check ce-06` | ✅ 8/8 claim-tragend gegroundet |
| `klinik-zahlen-check ce-06` | ✅ 0 Out-of-Range |
| `standards-currency-check ce-06 --include-plans` | ✅ 0 veraltete Norm |
| `faktentreue-check ce-06` | ✅ (WARN-Modus, Coverage 25% < 80%; SBAR gedeckt) |
| `pflege-anti-pattern-check` (ce-06) | ✅ 0 Treffer in ce-06 |
| `klinik-panel ce-06` | ✅ 0 HOCH |
| `pflege-validator` (semantisch, Wagner) | → `content/ce-06/pflege-review-wagner.md` |
| tsc / vitest(564) / build / eslint | ✅ |
| `lernergebnis-tiefe 6` | ❌ 31 LE offen (by-design Welle 1) |

---

## Offen — nächste Wellen (Reihenfolge-Vorschlag)

**✅ LE1-K3 GEBAUT (2026-07-03):** Situation `ls-rios-synkope` (Miguel Ríos, 63, Synkope/schwere
Hypoglykämie während Dialyse). Kernfakten `neurologische-akutsituationen.md` (F-01..F-07, 9 Belege ✅).
Kritisch entschärft ggü. altem Katalog-Plan: **kein FAST-Schema** (Korpus-Homonym Trauma-Sonografie),
**keine pauschale Trendelenburg** (bei Hirndruck/Atemnot/Übelkeit kontraindiziert, F-07), **Shunt-
Widerspruch gelöst** (G40% i.v. = ärztlich, Pflege punktiert Shunt nicht eigenmächtig), **keine
ml-Dosis behauptet**, Hypoglykämie **<50 mg/dl** (pflege-heute-Beleg, nicht ADA <70). Kern-Wow:
Branching „orale Glukose bei Bewusstseinstrübung → STOPP Aspiration". Alle Gates grün, Validator läuft.

**✅ LE1-K1 GEBAUT (2026-07-03):** Situation `ls-lehmann-sturz-sht` (Anneliese Lehmann, 86,
Sturz + Kopfplatzwunde im Heim, Demenz, Osteoporose, Apixaban). Kernfakten
`traumatologische-erstversorgung.md` (F-01..F-08, 11 Belege ✅, inkl. BGB §1831 aus bgb-1831.txt).
Kern: SHT unter Antikoagulation → verzögerte Hirnblutung → zwingend 112/CT. Anti-Pattern nur als
FALSCHE Optionen (gedämpftes Licht / „Glück gehabt" / unter Achseln / beidseitiges Bettgitter=FeM) →
anti-pattern-check 0 Treffer. Currency §1831 (nicht §1906). „Cushing-Trias" bewusst vermieden.
Deckt K1 für Sturz/Wunde/Blutung; Hitze/Verbrennung/Erfrierung/Verätzung noch offen.

**✅ LE1-K4 GEBAUT (2026-07-03):** `ls-novak-erregung` (Novak, 34, paranoide Schizophrenie +
Pneumonie/Fieber). Kernfakten `psychische-akutsituationen.md` (F-01..F-08, 15 Belege ✅).
Leitplanke: akute Erregung nicht automatisch psychiatrisch (organische Ursachen zuerst).
Recht: auf somat. Station **§1831 BGB / Gefahr im Verzug**, PsychKG nur bei psychiatrischer
Unterbringung. **→ LE1 vollständig (7/7).**

**✅ LE2 BEGONNEN (2026-07-03):** `ls-yildiz-thoraxschmerz` (Yıldız, 62, Herzinfarkt/ACS).
Kernfakten `herz-kreislauf-akut.md` (F-01..F-08, 14 Belege ✅). Deckt LE2-W3/K1/K3 (+W2 teilw).
Kritisch: Oberkörper HOCH statt Schocklage (Preload), abflachen bei RR<90&Puls>100 (verbatim),
O2/Nitro nur ärztlich, ACS bessert nicht auf Nitro.

**✅ LE2 KOMPLETT (2026-07-04):** `ls-gruber-schock` (Herbert Gruber, 69, hypovolämischer Schock
bei oberer GI-Blutung/Ulcus unter NSAR). Kernfakten `schock-und-kreislauf.md` (F-01..F-14, 52 Belege ✅
zitat-verifizierer; Quellen pflege-heute Kap. 14.5/3.5/33.10.3 + I-care-Anatomie Kap. 6/7 + kommunikation).
Deckt **W1** (Anatomie Herz-Kreislauf/Zentralisation), **W2** (Schocksysteme voll: hypovoläm/kardiogen/
obstruktiv/distributiv), **W3-Rest** (Notfallmed/Katecholamin-Perfusor, Reizleitung Sinusknoten, Elektrolyte/
Kalium, O2-Systeme, Infusion), **K1** (Monitor/Branching), **K2** (Pflegewagen PVK/ZVK-Material), **K4**
(familiäres Coping Freetext bloom 6), **E1** (apparate-dominierter Intensiv-Kontext, reflection).
Kern-Falle: **Autotransfusionslage-Ausnahme bei oberer GI-Blutung** (Beine-hoch ist hier FALSCH, F-06).
Weitere Leitplanken: Katecholamine/Perfusor + Infusionsrate nur ärztlich (als Wirkstoff, keine Dosen),
i.v.-Kalium langsam/ZVK (Bolus-Distraktor = gefährlich-falsch), Patient nüchtern (orale Distraktoren).
12 Steps, alle claim-tragenden `kernfaktId`-gegroundet (11/11). pflege-validator PASS (0 HOCH); 1 MITTEL +
4 NIEDRIG gefixt (durchgängig MC-Längen-Bias entschärft, Pflegewagen-Balance 5:3, Zeitangabe-Tell entfernt).
Alle Gates grün. **Damit LE1 (7/7) + LE2 (8/8) komplett** — Coverage 19/35 LE. **Deployed (Hetzner, HTTP 200):**
https://178-105-176-161.nip.io/de/lernen/situation/ls-gruber-schock?ce=ce-06

**Welle 2 (Rest):**
- LE1-K1-Rest: Hitzeerschöpfung/Verbrennungen/Erfrierungen/Verätzungen (eigene Situation oder Bausteine).
- LE3 Abdomen/Stoma (7) · LE4 Katastrophen/Triage (6) · LE5 Organspende (7).

**Welle 3 — LE2 Intensiv/Schock/Herz-Kreislauf (8 LE):** Anatomie Herz-Kreislauf, Schockarten
(F-04/F-05 vorhanden), Notfallmedikamente, Infusion/Perfusor, O2-Gabe, ZVK/PVK-Material,
atemunterstützende Lagerung. Quellen: pflege-heute Kap. 14/16, I-Care Anatomie, Krankheitslehre.
- Anaphylaxie-Situation `ls-jusufi-anaphylaxie` HIER: **Achtung Adrenalin-Route** — pflege-heute
  (7. Aufl.) schreibt beim anaphylakt. Schock „Adrenalin i. v."; aktuelle Leitlinien (ERC/AWMF)
  = **Adrenalin i.m. 0,5 mg** first-line. Route/Dosis sauber gegen aktuelle Leitlinie grounden,
  NICHT blind aus pflege-heute übernehmen. Ggf. Beschaffungsliste.

**Welle 4 — LE3 Abdomen/Stoma/Drainagen (7 LE):** Paetz Chirurgie, I-Care Krankheitslehre.
**Welle 5 — LE4 Katastrophen/Triage/Brandschutz (6 LE) + LE5 Organspende/Hirntod (7 LE):**
LE5 stark rechtlich/ethisch (TPG, Hirntoddiagnostik) — Currency-Gate wichtig.

## Feste Konventionen (Drift-Guard für Folge-Sessions)
- Antikoagulanzien immer als **Wirkstoff** (Apixaban), nicht Markenname.
- Akut-Phasen-Set: `erkennen`/`alarmieren`/`erstmassnahmen`/`uebergeben`/`reflektieren` (AkutPhase).
- Jeder claim-tragende Step MUSS `kernfaktId` tragen (Auto-Strict pro Situation aktiv, sobald ≥1 Grounding).
- Patienten CE-06 bisher: Wagner (67, Rea), Ríos (63, Synkope), Lehmann (86, Sturz/SHT), Novak (34, Psychose),
  Yıldız (62, Herzinfarkt), Gruber (69, hypovoläm. Schock/GI-Blutung). Frei/geplant: Jusufi (Anaphylaxie, Welle 3),
  Pfeiffer (Prüfung).
- Schock-Grounding: pflege-heute Kap. 14.5 sauber belegt (4 Schockformen, Autotransfusionslage + Ausnahme
  Kopf/Lunge/oberer GI-Trakt, Schockindex >1 nur hypovoläm, O2 6–8 l/min, Katecholamin-Perfusor). Anatomie/
  Reizleitung in I-care-Anatomie Kap. 6/7 (Sinusknoten→AV→His→Tawara→Purkinje, HZV ca. 5 l/min).
- Reanimations-Zahlen sind in pflege-heute sauber belegt (5–6 cm, 100–120/min, 30:2, Adrenalin 3–5 min).

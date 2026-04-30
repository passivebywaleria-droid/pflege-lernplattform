// Auto-generiert von scripts/karteikarten-auto-gen.ts
// Nicht manuell bearbeiten — wird bei jedem Lauf überschrieben.

export interface AutoKarteikarte {
  id: string;
  bausteinRef: string;
  themaPrimaer: string;
  vorderseite: string;
  rueckseite: string;
  situationsId: string;
}

export const KARTEIKARTEN_AUTO: AutoKarteikarte[] = [
  {
    id: "kk-auto-ernährungsassessment-formen-mangel",
    bausteinRef: "ernährungsassessment-formen-mangel",
    themaPrimaer: "ernährungsassessment",
    vorderseite: "Frau Schmidt hat NRS-Score 1, aber GLIM-Diagnose Mangelernährung Stadium 1. Wie ist das möglich?",
    rueckseite: "NRS 2002 erkennt Mangelernährung bei Adipositas schlecht (kein Untergewicht, kein Gewichtsverlust). GLIM prüft tiefer: min 1 phänotypisches Kriterium (reduzierte Muskelmasse) + min 1 ätiologisches (einseitige Kost + Inflammation) = Diagnose.\n\nSpektrum: Petrov (Dysphagie, GLIM eindeutig), Bauer (Demenz, vergisst essen), Kovac (COPD, Katabolie).\n\nFaustregel: **GLIM findet was NRS übersieht.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-haut-entzündungszeichen-5",
    bausteinRef: "haut-entzündungszeichen-5",
    themaPrimaer: "haut",
    vorderseite: "Bei Frau Schmidt (BMI 38) findest du in der submammären Falte Rötung und feuchte Haut. Ist das Intertrigo oder Dekubitus?",
    rueckseite: "**Intertrigo.** Entsteht durch Feuchtigkeit + Reibung in Hautfalten. Submammär = typische Intertrigo-Stelle bei Adipositas. Dekubitus entsteht durch Druck auf Knochen-Prominenzen (Sakrum, Trochanter, Fersen).\n\n5 Entzündungszeichen: Rubor, Dolor, Calor, Tumor, Functio läsa.\n\nSpektrum: Yilmaz (unter Verband), Bauer (IAD bei Inkontinenz), Emilia (Windeldermatitis).\n\nFaustregel: **Intertrigo = Feuchtigkeit + Reibung in Falten.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-ernährungsassessment-dokumentation",
    bausteinRef: "ernährungsassessment-dokumentation",
    themaPrimaer: "ernährungsassessment",
    vorderseite: "Im Pflegebericht steht: \"Frau Schmidt hat gut gegessen.\" Reicht das als Ernährungsdokumentation?",
    rueckseite: "Nein. \"Gut gegessen\" ist nicht quantifizierbar. Ein Ernährungsprotokoll dokumentiert: **Was** (Art), **wie viel** (Menge), **wann** (Zeitpunkt), **Besonderheiten** (Appetit, Hilfe). DNQP 2017: Pflicht bei Ernährungsintervention.\n\nSpektrum: Petrov (IDDSI-Stufe), Nguyen (Stoma-Bilanz), Emilia (Trinkmenge in ml).\n\nFaustregel: **Menge, Art, Zeitpunkt — sonst kann die Beraterin nicht arbeiten.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-ernährungsgrundlagen-proteine",
    bausteinRef: "ernährungsgrundlagen-proteine",
    themaPrimaer: "ernährungsgrundlagen",
    vorderseite: "Frau Schmidt (BMI 38, 1,60 m) hat Proteinmangel. Wie berechnest du ihren Bedarf — und warum nicht mit 98 kg?",
    rueckseite: "Bei Adipositas: **Idealgewicht** als Basis (BMI 22 bei 1,60 m = 56 kg). Istgewicht 98 kg führt zu Überschätzung.\n\n- Gesund: 0,8 g x 56 = 45 g/Tag (DGE 2024)\n- Mangelernährung: 1,2 g x 56 = **67 g/Tag** (ESPEN 2017)\n\nSpektrum: Petrov (Dysphagie, IDDSI-Konsistenz), Yilmaz (post-OP, 1,5 g/kg), Emilia (Säugling, 1,5-2,0 g/kg).\n\nFaustregel: **Idealgewicht nehmen, nicht Istgewicht.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-ernährungsgrundlagen-kohlenhydrate",
    bausteinRef: "ernährungsgrundlagen-kohlenhydrate",
    themaPrimaer: "ernährungsgrundlagen",
    vorderseite: "Frau Schmidt frühstückt Toastbrot mit Marmelade. Was schlägst du stattdessen vor — und warum?",
    rueckseite: "Vollkornbrot statt Toast. GI Weißbrot ~75, Vollkorn ~65. Niedrigerer GI = langsamerer BZ-Anstieg = bessere Kontrolle bei Insulinresistenz. DDG 2023: KH verteilen + komplex bevorzugen. Kein Verzicht — Tausch.\n\nSpektrum: Petrov (Stress-Hyperglykämie), Kovac (COPD: zu viel KH = mehr CO2), Emilia (Laktose = physiologisch).\n\nFaustregel: **Nicht weniger KH — bessere.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-ernährungsassessment-laborwerte",
    bausteinRef: "ernährungsassessment-laborwerte",
    themaPrimaer: "ernährungsassessment",
    vorderseite: "Frau Schmidts Albumin ist nach 5 Tagen Ernährungsumstellung nicht gestiegen. Ist das ein Zeichen von Therapieversagen?",
    rueckseite: "Nein. Albumin hat eine **HWZ von 17-20 Tagen** — Anstieg frühestens nach 2-3 Wochen sichtbar. Bei akuter Inflammation (entgleister Diabetes) sinkt Albumin sogar zusätzlich (Akut-Phase-Negativ-Protein). Bessere kurzfristige Marker: BZ-Tagesprofil, Präalbumin (HWZ 2-3 Tage), klinischer Eindruck.\n\nSpektrum: Petrov (wöchentlich), Yilmaz (post-OP Abfall), Kovac (ambulant alle 3 Monate).\n\nFaustregel: **Nach 5 Tagen Albumin bewerten = zu früh.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-ernährungsassessment-nrs-2002",
    bausteinRef: "ernährungsassessment-nrs-2002",
    themaPrimaer: "ernährungsassessment",
    vorderseite: "Bei Frau Schmidt (BMI 38, Albumin 31 g/l) ergibt NRS 2002 nur 1 Punkt. Reicht das als Entwarnung?",
    rueckseite: "Nein. NRS 2002 erkennt versteckte Mangelernährung bei Adipositas nicht zuverlässig — Schwelle ≥ 3 greift nicht, weil BMI hoch + kein Gewichtsverlust. Nachgelagerte GLIM-Diagnostik nötig.\n\nSpektrum: Petrov (Dysphagie, NRS 4), Yilmaz (post-OP, NRS ≥ 3), Nguyen (Stoma, NRS ≥ 3), Emilia (Kinder: STRONGkids, nicht NRS).\n\nFaustregel: **NRS 2002 ist das Screening, nicht die Diagnose.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-ernährungsassessment-bmi-kategorien",
    bausteinRef: "ernährungsassessment-bmi-kategorien",
    themaPrimaer: "ernährungsassessment",
    vorderseite: "Frau Schmidt hat BMI 38. Welcher Adipositas-Grad ist das — und was bedeutet es pflegerisch?",
    rueckseite: "BMI 38 = **Adipositas Grad II** (WHO-Schwelle: 35,0–39,9). Pflegerisch: Belastungsgrenzen von Bett/Stuhl prüfen, Hautfalten-Inspektion (Intertrigo-Risiko), Mobilisation mit Sturzrisiko-Bewusstsein, Gespräch über Gewicht ohne Stigmatisierung.\n\nSpektrum: Petrov (BMI 21, Kachexie-Risiko), Yilmaz (BMI 28, OP-Risiko), Kovac (BMI 19, Gewichtsverlust-Trend).\n\nFaustregel: **BMI ist eine Zahl, kein Urteil.**",
    situationsId: "ls-schmidt-adipositas",
  },
  {
    id: "kk-auto-dekubitus-prophylaxe-haut-ernährung",
    bausteinRef: "dekubitus-prophylaxe-haut-ernährung",
    themaPrimaer: "dekubitus-prophylaxe",
    vorderseite: "Warum hat Frau Schmidt (BMI 38, Albumin 31 g/l) ein erhöhtes Dekubitus-Risiko — obwohl sie mobil ist?",
    rueckseite: "3 Faktoren: 1) Erhöhter Auflagedruck durch Eigengewicht (Sakrum, Fersen). 2) Scherkraft in Hautfalten (Intertrigo + Druck gleichzeitig). 3) Proteinmangel trotz Adipositas (Albumin 31 g/l) = verzögerte Wundheilung.\n\nBraden: Ernährungs-Score nicht falsch hoch bewerten. EPUAP 2019: 1,25-1,5 g Protein/kg Idealgewicht/Tag.\n\nFaustregel: **Ernährung ist Dekubitus-Prophylaxe.**",
    situationsId: "ls-schmidt-adipositas",
  },
];

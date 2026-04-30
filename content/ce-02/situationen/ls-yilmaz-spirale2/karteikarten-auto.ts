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
    id: "kk-auto-dekubitus-prophylaxe-entstehung",
    bausteinRef: "dekubitus-prophylaxe-entstehung",
    themaPrimaer: "dekubitus-prophylaxe",
    vorderseite: "Erkläre die 3 Mechanismen der Dekubitus-Entstehung am Beispiel von Frau Yilmaz (BMI 34, Sakrum, 14 Tage post-OP).",
    rueckseite: "1) Druck: Körpergewicht (BMI 34) auf Sakrum (Knochenvorsprung). 2) Scherkräfte: Verschiebung der Hautschichten beim Transfer/Hochrutschen. 3) Zeit: 14 Tage ueberwiegend Rückenlage, gelegentlich Umlagerung abgelehnt.\n\nVerstärker: Neuropathie (kein Schmerzsignal), Diabetes (Mikrozirkulation), Inkontinenz (Mazeration).\n\nSpektrum: Bauer (Demenz-Immobilität), Schmidt (BMI 38), Petrov (Spastik-Scherkräfte).\n\nFaustregel: **Dekubitus = Druck x Zeit. Umlagerung bricht die Gleichung.**",
    situationsId: "ls-yilmaz-spirale2",
  },
  {
    id: "kk-auto-dekubitus-prophylaxe-braden-skala",
    bausteinRef: "dekubitus-prophylaxe-braden-skala",
    themaPrimaer: "dekubitus-prophylaxe",
    vorderseite: "Frau Yilmaz hat Braden-Score 14 (mässiges Risiko). Trotzdem ist ein Dekubitus Kat. II entstanden. Was sagt das ueber die Braden-Skala?",
    rueckseite: "Die Braden-Skala misst Risiko, nicht Ergebnis. Score 13-14 = mässiges Risiko = Prophylaxe ist Pflicht. Wenn Prophylaxe lückenhaft (Schichtausfall, Ablehnung, fehlende Dokumentation), entsteht Dekubitus trotz moderatem Score.\n\n6 Subskalen: Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Score 6-23 (niedriger = höher Risiko).\n\nFaustregel: **Braden ≤ 14 = Prophylaxe Pflicht. Nur konsequnte Maßnahmen schützen.**",
    situationsId: "ls-yilmaz-spirale2",
  },
  {
    id: "kk-auto-pflegedokumentation-wunddoku-schema",
    bausteinRef: "pflegedokumentation-wunddoku-schema",
    themaPrimaer: "pflegedokumentation",
    vorderseite: "Nenne die 6 Pflicht-Elemente einer standardkonformen Wunddokumentation (Merkhilfe!) und erkläre, was bei Frau Yilmaz heute (Tag 17) jeweils einzutragen wäre.",
    rueckseite: "L-G-F-E-R-A:\nL = Sakrum, zentral\nG = 1,5 x 2,5 cm (rückläufig ggue. 2x3 cm Tag 14)\nF = Rosa-granulativ (Heilungszeichen)\nE = Minimal, serös\nR = Nicht mazeriert (verbessert)\nA = Hydrokolloid-Verband erneuert, Foto mit Einwilligung\n\nPlus: Datum + Uhrzeit, Handzeichen, NRS (0 — Neuropathie), Patientin kooperiert.\n\nFaustregel: **L-G-F-E-R-A + Datum + Schmerz + Foto.**",
    situationsId: "ls-yilmaz-spirale2",
  },
  {
    id: "kk-auto-dekubitus-prophylaxe-feuchte-wundbehandlung",
    bausteinRef: "dekubitus-prophylaxe-feuchte-wundbehandlung",
    themaPrimaer: "dekubitus-prophylaxe",
    vorderseite: "Warum hat Dr. Kirchner Hydrokolloid-Verband für Frau Yilmaz (Dekubitus Kat. II, flache Erosion, wenig Exsudat) angeordnet — und nicht einen trockenen Mullverband?",
    rueckseite: "Feuchte Wundbehandlung (Winter 1962): 50 % schnellere Heilung. Hydrokolloid bildet Gel bei Kontakt mit Exsudat, hält Wunde feucht, fördert Granulation + Epithelialisierung. Trockener Mullverband: verklebt, zerstört Wundgrund beim Wechsel, keine Feuchtigkeitsregulation.\n\nSpektrum: Petrov (Schaumverband wegen Spastik), Kovac (ambulant, Hydrokolloid einfach für Angehörige), Bauer (Demenz, Verband abdecken).\n\nFaustregel: **Feucht heilt schneller. Hydrokolloid = Standard bei Kat. II.**",
    situationsId: "ls-yilmaz-spirale2",
  },
  {
    id: "kk-auto-pflegedokumentation-qualitätssicherung",
    bausteinRef: "pflegedokumentation-qualitätssicherung",
    themaPrimaer: "pflegedokumentation",
    vorderseite: "Bei Frau Yilmaz wurde die Roetung gesehen aber nicht dokumentiert. Was sind die 3 Konsequnzen — und welche Funktionen hat Pflegedokumentation?",
    rueckseite: "Konsequnzen: 1) Nächste Schicht nicht informiert (12-24h Verzögerung). 2) Kein rechtlicher Nachweis (§ 630f BGB). 3) Qualitätsereignis nicht nachvollziehbar (Donabedian).\n\n3 Funktionen: Rechtlich (Beweislastumkehr), Kommunikativ (Schichtübergabe), Qualitätssichernd (Prozessqualität messbar).\n\nSpektrum: Frau M. (Sturzprotokoll), Nguyen (Stoma-Doku), Kovac (ambulant, Schnittstellenkommunikation).\n\nFaustregel: **Was nicht dokumentiert ist, existiert nicht.**",
    situationsId: "ls-yilmaz-spirale2",
  },
  {
    id: "kk-auto-dekubitus-prophylaxe-was-ist-dekubitus",
    bausteinRef: "dekubitus-prophylaxe-was-ist-dekubitus",
    themaPrimaer: "dekubitus-prophylaxe",
    vorderseite: "Frau Yilmaz hat eine flache offene Wunde am Sakrum, 2x3 cm, kein Nekroseanteil. Welche Dekubitus-Kategorie ist das — und warum ist der Übergang von Kategorie I zu II so wichtig?",
    rueckseite: "Kategorie II (NPUAP/EPUAP 2019): Teilverlust der Haut — flache Erosion oder Blase. Der Übergang I zu II markiert den Wechsel von Prophylaxe zu Therapie: Haut ist offen, Wundversorgung nötig.\n\nSpektrum: Bauer (Demenz, Immobilität), Petrov (Hemiparese, Neglect), Schmidt (Adipositas, Neuropathie), Kovac (ambulant, Sitzbeinhocker).\n\nFaustregel: **Ab Kategorie II ist die Haut offen — aus Prophylaxe wird Therapie.**",
    situationsId: "ls-yilmaz-spirale2",
  },
  {
    id: "kk-auto-haut-inspektion-grundlagen",
    bausteinRef: "haut-inspektion-grundlagen",
    themaPrimaer: "haut",
    vorderseite: "Du inspizierst die Haut von Frau Yilmaz am Sakrum. Nenne die 5 Kriterien der systematischen Hautinspektion und erkläre, wann der Fingertest anwendbar ist.",
    rueckseite: "5 Kriterien: Farbe, Temperatur, Konsistenz, Integrität, Feuchtigkeit. Fingertest: nur bei intakter Haut — 3 Sek drücken, bleibt rot = Kategorie I (DNQP 2024). Bei offener Haut (ab Kat. II) nicht mehr anwendbar.\n\nSpektrum: Bauer (Demenz, wehrt Inspektion ab), Petrov (Hemiparese, Neglect), Emilia (Säugling, Hinterkopf).\n\nFaustregel: **Gutes Licht, 5 Kriterien, Fingertest nur bei intakter Haut.**",
    situationsId: "ls-yilmaz-spirale2",
  },
  {
    id: "kk-auto-positionierung-30-vs-135",
    bausteinRef: "positionierung-30-vs-135",
    themaPrimaer: "positionierung",
    vorderseite: "Frau Yilmaz hat Dekubitus Kat. II am Sakrum + Hüft-TEP rechts. Warum ist 135-Grad-Lagerung die richtige Wahl und warum fallen 30 Grad und 90 Grad aus?",
    rueckseite: "30 Grad: nur Teilentlastung — bei offener Wunde nicht ausreichend. 90 Grad: Trochanter-Belastung + Hüft-TEP rechts kontraindiziert. 135 Grad: Sakrum komplett frei, kein Trochanter-Druck, Hüft-TEP oben in Abduktion.\n\nSpektrum: Bauer (30 Grad wegen Demenz-Akzeptanz), Petrov (30 Grad + Bobath), Schmidt (135 Grad mit Schwerlast-Equipment).\n\nFaustregel: **Bei offenem Sakrum-Dekubitus: immer 135 Grad. 30 Grad reicht nicht.**",
    situationsId: "ls-yilmaz-spirale2",
  },
];

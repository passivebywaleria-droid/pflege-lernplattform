// LE-01 Lern-Snack: Kompakte Kernfakten pro Kapitel (Checklisten-Format)
// Jedes Item = 1 prüfbarer Fakt, den der Schüler abhaken kann

import type { LernSnack } from "../_types";

export const LE01_LERN_SNACK: LernSnack[] = [

  // ── Kap 1: Geschichte der Pflege ──────────────────────────
  {
    kapitelId: "le01-kap-01",
    titel: "Geschichte der Pflege",
    titelB1: "Pflege-Geschichte",
    tag: "pflege",
    items: [
      { id: "le01-snack-k01-01", faktC1: "Pflege als Beruf existiert seit der Antike — bereits um 500 v. Chr. in Indien dokumentiert", faktB1: "Pflege gibt es schon sehr lange — seit etwa 500 v. Chr.", kapitelRef: "le01-kap-01" },
      { id: "le01-snack-k01-02", faktC1: "Florence Nightingale gründete 1860 die erste Krankenpflegeschule in England", faktB1: "Florence Nightingale hat 1860 die erste Pflege-Schule gegründet", kapitelRef: "le01-kap-01" },
      { id: "le01-snack-k01-03", faktC1: "Agnes Karll forderte 1903 eine dreijährige Pflegeausbildung und gründete die erste deutsche Berufsorganisation", faktB1: "Agnes Karll wollte 1903 eine 3-jährige Ausbildung für Pflege", kapitelRef: "le01-kap-01" },
      { id: "le01-snack-k01-04", faktC1: "1906 führte Preußen die erste staatliche Prüfung für Pflegepersonen ein", faktB1: "1906 gab es die erste staatliche Pflege-Prüfung in Preußen", kapitelRef: "le01-kap-01" },
      { id: "le01-snack-k01-05", faktC1: "In der NS-Zeit (1933–1945) waren Pflegende am Euthanasie-Programm beteiligt — eine historische Mahnung", faktB1: "In der NS-Zeit halfen Pflegekräfte beim Töten von kranken Menschen", kapitelRef: "le01-kap-01" },
    ],
  },

  // ── Kap 2: Was ist Pflege? ──────────────────────────
  {
    kapitelId: "le01-kap-02",
    titel: "Was ist Pflege?",
    titelB1: "Was bedeutet Pflege?",
    tag: "pflege",
    items: [
      { id: "le01-snack-k02-01", faktC1: "Die ICN-Definition (2002) beschreibt Pflege als Förderung von Gesundheit, Verhütung von Krankheit und Betreuung Kranker", faktB1: "Der ICN sagt: Pflege fördert Gesundheit und kümmert sich um kranke Menschen", kapitelRef: "le01-kap-02" },
      { id: "le01-snack-k02-02", faktC1: "Laienpflege (durch Angehörige) und professionelle Pflege ergänzen sich — ersetzen sich nicht", faktB1: "Pflege durch Familie und Pflege durch Fachkräfte gehören zusammen", kapitelRef: "le01-kap-02" },
      { id: "le01-snack-k02-03", faktC1: "Eine Profession zeichnet sich aus durch: wissenschaftliche Grundlage, Ethikkodex, Berufsverbände und Autonomie", faktB1: "Ein Beruf ist eine Profession wenn er Wissenschaft, Regeln und eigene Verbände hat", kapitelRef: "le01-kap-02" },
      { id: "le01-snack-k02-04", faktC1: "Vorbehaltene Tätigkeiten (§ 4 PflBG) dürfen nur Pflegefachpersonen ausführen", faktB1: "Manche Aufgaben dürfen nur Pflegefachkräfte machen (steht im Gesetz)", kapitelRef: "le01-kap-02" },
      { id: "le01-snack-k02-05", faktC1: "2017 waren in Deutschland 3,4 Millionen Menschen pflegebedürftig — Tendenz steigend", faktB1: "3,4 Millionen Menschen in Deutschland brauchen Pflege (2017)", kapitelRef: "le01-kap-02" },
    ],
  },

  // ── Kap 3: Pflegeverständnis ──────────────────────────
  {
    kapitelId: "le01-kap-03",
    titel: "Pflegeverständnis",
    titelB1: "Was verstehen wir unter Pflege?",
    tag: "pflege",
    items: [
      { id: "le01-snack-k03-01", faktC1: "Das Pflegeverständnis beschreibt, wie Pflege von Personen, Einrichtungen oder der Gesellschaft aufgefasst wird", faktB1: "Pflegeverständnis = wie Menschen über Pflege denken", kapitelRef: "le01-kap-03" },
      { id: "le01-snack-k03-02", faktC1: "Es gibt individuelles, institutionelles und gesellschaftliches Pflegeverständnis", faktB1: "Jeder Mensch, jede Einrichtung und die Gesellschaft haben ein eigenes Bild von Pflege", kapitelRef: "le01-kap-03" },
      { id: "le01-snack-k03-03", faktC1: "Das Berufsverständnis beinhaltet Selbstbild, Werte und Haltung einer Berufsgruppe", faktB1: "Das Berufsverständnis zeigt: Wie sehen Pflegekräfte ihren eigenen Beruf?", kapitelRef: "le01-kap-03" },
      { id: "le01-snack-k03-04", faktC1: "Pflegetheorien und Pflegemodelle bilden die wissenschaftliche Grundlage der Profession", faktB1: "Pflege-Theorien sind die Wissenschaft hinter dem Beruf", kapitelRef: "le01-kap-03" },
      { id: "le01-snack-k03-05", faktC1: "Reflexion des eigenen Pflegeverständnisses ist Teil der professionellen Entwicklung", faktB1: "Über das eigene Bild von Pflege nachdenken = professionell werden", kapitelRef: "le01-kap-03" },
    ],
  },

  // ── Kap 4: Berufspolitik ──────────────────────────
  {
    kapitelId: "le01-kap-04",
    titel: "Berufspolitik",
    titelB1: "Wer vertritt die Pflegekräfte?",
    tag: "pflege",
    items: [
      { id: "le01-snack-k04-01", faktC1: "Der DBfK (Deutscher Berufsverband für Pflegeberufe) ist der größte Pflegeberufsverband in Deutschland", faktB1: "Der DBfK ist der größte Verband für Pflegekräfte in Deutschland", kapitelRef: "le01-kap-04" },
      { id: "le01-snack-k04-02", faktC1: "Gewerkschaften (z. B. ver.di) verhandeln Tarifverträge und Arbeitsbedingungen", faktB1: "Gewerkschaften kämpfen für bessere Bezahlung und Arbeitszeiten", kapitelRef: "le01-kap-04" },
      { id: "le01-snack-k04-03", faktC1: "Pflegekammern können berufsrechtliche Verfahren einleiten — Berufsverbände nur appellieren", faktB1: "Pflegekammern können Strafen geben — Berufsverbände können nur bitten", kapitelRef: "le01-kap-04" },
      { id: "le01-snack-k04-04", faktC1: "Der Deutsche Pflegerat (DPR) ist der Dachverband aller Pflegeberufsverbände", faktB1: "Der Deutsche Pflegerat vereint alle Pflege-Verbände unter einem Dach", kapitelRef: "le01-kap-04" },
      { id: "le01-snack-k04-05", faktC1: "Berufspolitisches Engagement ist Teil der professionellen Verantwortung jeder Pflegefachperson", faktB1: "Jede Pflegekraft sollte sich für bessere Bedingungen einsetzen", kapitelRef: "le01-kap-04" },
    ],
  },

  // ── Kap 5: PflBG und generalistische Ausbildung ──────────────────────────
  {
    kapitelId: "le01-kap-05",
    titel: "PflBG und Ausbildung",
    titelB1: "Das Pflege-Gesetz",
    tag: "pflege",
    items: [
      { id: "le01-snack-k05-01", faktC1: "Das Pflegeberufegesetz (PflBG) trat am 1. Januar 2020 in Kraft", faktB1: "Das Pflegeberufegesetz gibt es seit 2020", kapitelRef: "le01-kap-05" },
      { id: "le01-snack-k05-02", faktC1: "Die generalistische Ausbildung ersetzt die drei alten Berufsbilder (Kranken-, Kinderkranken-, Altenpflege)", faktB1: "Früher gab es 3 verschiedene Pflege-Ausbildungen — jetzt nur noch eine", kapitelRef: "le01-kap-05" },
      { id: "le01-snack-k05-03", faktC1: "Die Ausbildung dauert 3 Jahre mit Theorie und Praxis in wechselnden Einsätzen", faktB1: "Die Ausbildung dauert 3 Jahre: Theorie in der Schule und Praxis im Krankenhaus", kapitelRef: "le01-kap-05" },
      { id: "le01-snack-k05-04", faktC1: "Nach dem 2. Ausbildungsjahr kann man sich für Kinderkranken- oder Altenpflege spezialisieren", faktB1: "Nach 2 Jahren kann man wählen: Kinderpflege oder Altenpflege", kapitelRef: "le01-kap-05" },
      { id: "le01-snack-k05-05", faktC1: "Vorbehaltene Tätigkeiten (§ 4 PflBG): Pflegeprozess, Diagnosen und Qualitätssicherung", faktB1: "Nur Pflegefachkräfte dürfen: Pflegeprozess, Pflege-Diagnosen und Qualität sichern", kapitelRef: "le01-kap-05" },
      { id: "le01-snack-k05-06", faktC1: "Der EU-Berufsanerkennungsrichtlinie folgend wird der Abschluss in allen EU-Ländern anerkannt", faktB1: "Der Abschluss gilt in allen EU-Ländern", kapitelRef: "le01-kap-05" },
    ],
  },

  // ── Kap 6: Kompetenz und Handlungskompetenz ──────────────────────────
  {
    kapitelId: "le01-kap-06",
    titel: "Kompetenz",
    titelB1: "Was bedeutet Kompetenz?",
    tag: "pflege",
    items: [
      { id: "le01-snack-k06-01", faktC1: "Kompetenz = Fähigkeit, in wechselnden Situationen angemessen und eigenständig zu handeln", faktB1: "Kompetenz bedeutet: Man kann in verschiedenen Situationen richtig handeln", kapitelRef: "le01-kap-06" },
      { id: "le01-snack-k06-02", faktC1: "Fachkompetenz, Sozialkompetenz, Selbstkompetenz und Methodenkompetenz bilden zusammen die Handlungskompetenz", faktB1: "4 Teile zusammen = Handlungskompetenz: Fach + Sozial + Selbst + Methode", kapitelRef: "le01-kap-06" },
      { id: "le01-snack-k06-03", faktC1: "Fachkompetenz = Wissen und Fertigkeiten aus dem Fachgebiet anwenden können", faktB1: "Fachkompetenz = Fachwissen haben und anwenden können", kapitelRef: "le01-kap-06" },
      { id: "le01-snack-k06-04", faktC1: "Sozialkompetenz = mit anderen kommunizieren, kooperieren und Konflikte lösen können", faktB1: "Sozialkompetenz = gut mit anderen Menschen zusammenarbeiten", kapitelRef: "le01-kap-06" },
      { id: "le01-snack-k06-05", faktC1: "Kompetenzentwicklung ist ein lebenslanger Prozess — sie endet nicht mit der Ausbildung", faktB1: "Man lernt nie aus — Kompetenz entwickelt sich das ganze Leben", kapitelRef: "le01-kap-06" },
    ],
  },

  // ── Kap 7: Pflegeprozess ──────────────────────────
  {
    kapitelId: "le01-kap-07",
    titel: "Pflegeprozess",
    titelB1: "Der Pflege-Prozess",
    tag: "pflege",
    items: [
      { id: "le01-snack-k07-01", faktC1: "Der Pflegeprozess ist ein Regelkreis mit 6 Phasen nach Fiechter und Meier (1981)", faktB1: "Der Pflege-Prozess hat 6 Schritte — sie bilden einen Kreis", kapitelRef: "le01-kap-07" },
      { id: "le01-snack-k07-02", faktC1: "Phase 1: Informationssammlung — direkte/indirekte, objektive/subjektive Daten erheben", faktB1: "Schritt 1: Alle Informationen über den Patienten sammeln", kapitelRef: "le01-kap-07" },
      { id: "le01-snack-k07-03", faktC1: "Phase 2: Pflegeprobleme und Ressourcen erkennen — was braucht Hilfe, was ist Stärke?", faktB1: "Schritt 2: Probleme und Stärken des Patienten finden", kapitelRef: "le01-kap-07" },
      { id: "le01-snack-k07-04", faktC1: "Pflegeziele müssen SMART sein: spezifisch, messbar, akzeptiert, realistisch, terminiert", faktB1: "Pflege-Ziele müssen SMART sein: genau, messbar, vom Patienten akzeptiert, erreichbar, mit Zeitangabe", kapitelRef: "le01-kap-07" },
      { id: "le01-snack-k07-05", faktC1: "Phase 6: Evaluation — Zielerreichung prüfen, bei Bedarf Prozess erneut durchlaufen", faktB1: "Schritt 6: Prüfen — Hat die Pflege geholfen? Wenn nicht: von vorn anfangen", kapitelRef: "le01-kap-07" },
      { id: "le01-snack-k07-06", faktC1: "Der Pflegeprozess gehört zu den vorbehaltenen Tätigkeiten (§ 5 Abs. 3 PflBG)", faktB1: "Nur Pflegefachkräfte dürfen den Pflege-Prozess steuern (steht im Gesetz)", kapitelRef: "le01-kap-07" },
    ],
  },

  // ── Kap 8: Berufsethik ──────────────────────────
  {
    kapitelId: "le01-kap-08",
    titel: "Berufsethik",
    titelB1: "Ethik in der Pflege",
    tag: "pflege",
    items: [
      { id: "le01-snack-k08-01", faktC1: "Der ICN-Ethikkodex (seit 1953, zuletzt 2021) definiert vier Verantwortungsbereiche für Pflegende", faktB1: "Der ICN hat Regeln für richtiges Verhalten in der Pflege — seit 1953", kapitelRef: "le01-kap-08" },
      { id: "le01-snack-k08-02", faktC1: "4 ethische Prinzipien nach Beauchamp & Childress: Autonomie, Wohltun, Nicht-Schaden, Gerechtigkeit", faktB1: "4 Grundsätze der Ethik: Selbstbestimmung, Gutes tun, nicht schaden, Gerechtigkeit", kapitelRef: "le01-kap-08" },
      { id: "le01-snack-k08-03", faktC1: "Autonomie = das Recht des Patienten, Behandlungen abzulehnen — auch gegen ärztlichen Rat", faktB1: "Autonomie = Der Patient darf selbst entscheiden — auch Nein sagen", kapitelRef: "le01-kap-08" },
      { id: "le01-snack-k08-04", faktC1: "Ethische Konflikte entstehen, wenn Prinzipien kollidieren (z. B. Autonomie vs. Fürsorge)", faktB1: "Manchmal passen die 4 Grundsätze nicht zusammen — das ist ein ethischer Konflikt", kapitelRef: "le01-kap-08" },
      { id: "le01-snack-k08-05", faktC1: "Pflegekammern können berufsrechtliche Konsequenzen durchsetzen — Berufsverbände nur empfehlen", faktB1: "Pflegekammern können Strafen geben — Berufsverbände können nur empfehlen", kapitelRef: "le01-kap-08" },
    ],
  },

  // ── Kap 9: Selbstpflege ──────────────────────────
  {
    kapitelId: "le01-kap-09",
    titel: "Selbstpflege",
    titelB1: "Auf sich selbst achten",
    tag: "pflege",
    items: [
      { id: "le01-snack-k09-01", faktC1: "Pflegekräfte haben ein erhöhtes Risiko für Burnout, Rückenschmerzen und emotionale Erschöpfung", faktB1: "Pflegekräfte werden oft krank: Burnout, Rückenschmerzen, Erschöpfung", kapitelRef: "le01-kap-09" },
      { id: "le01-snack-k09-02", faktC1: "Wer andere pflegt, muss zuerst auf die eigene Gesundheit achten", faktB1: "Zuerst auf sich selbst achten — dann auf andere", kapitelRef: "le01-kap-09" },
      { id: "le01-snack-k09-03", faktC1: "Die Eisenhower-Methode teilt Aufgaben in 4 Kategorien: wichtig/dringend, wichtig/nicht dringend, etc.", faktB1: "Die Eisenhower-Methode sortiert Aufgaben: Was ist wichtig? Was ist dringend?", kapitelRef: "le01-kap-09" },
      { id: "le01-snack-k09-04", faktC1: "Entspannungstechniken wie PMR (Progressive Muskelentspannung) können Stress im Arbeitsalltag reduzieren", faktB1: "PMR (= Muskeln anspannen und entspannen) hilft gegen Stress", kapitelRef: "le01-kap-09" },
      { id: "le01-snack-k09-05", faktC1: "Kollegiale Beratung und Supervision sind professionelle Wege zur Stressbewältigung", faktB1: "Mit Kollegen reden und Supervision nutzen hilft gegen Stress", kapitelRef: "le01-kap-09" },
    ],
  },
];

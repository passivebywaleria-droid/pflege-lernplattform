// Frau-M.-Situation · Step-Daten aus dem Repo verdichtet.
// Quelle: content/ce-02/situationen/frau-m-nacht-sturz/phase-*.ts
// Wir nutzen die echten Texte (nicht das B1-TTS-Vereinfachte) und kürzen
// bewusst auf das, was in 390×780 lesbar bleibt.

const FRAUM = {
  patient: {
    name: 'Marianne M.',
    age: 82,
    label: 'Frau M.',
    setting: 'Internistische Station · Pneumologie',
    context: 'Tag 3 postop. n. Pneumonie · Nachtschicht 02:48',
    diagnosen: ['Pneumonie rechts unten', 'M. Parkinson (H&Y II)', 'Hypertonie', 'Osteoporose'],
  },
  phaseTitles: ['Informieren', 'Beobachten', 'Planen', 'Durchführen', 'Dokumentieren', 'Evaluieren'],
  phaseTitlesShort: ['Info', 'Beob.', 'Plan', 'Durchf.', 'Doku', 'Eval.'],
};

// ── Step 0 · Szene · Phasen-Intro „Informieren & Ankommen" ──
const STEP_SCENE = {
  phase: 0, kind: 'Phase 1 · Informieren & Ankommen',
  type: 'scene',
  step: 1, total: 30,
  title: 'Ankommen bei Frau M.',
  time: '02:48 Uhr',
  setting: 'Internistische Station · Nachtschicht',
  // Verkürzte Fassung des C1-Kontext aus phase-informieren.ts
  paragraphs: [
    'Du stehst auf dem Flur und spürst, wie das Linoleum unter deinen Schuhen leicht klebt — frisch gewischt, irgendwann zwischen Mitternacht und jetzt.',
    'Die Notbeleuchtung tönt den Gang in ein gedämpftes Apricot. Aus Zimmer 11 surrt ein Sauerstoffkonzentrator, weiter hinten ein leises Husten, dann wieder Stille.',
    'Vor 90 Sekunden hat Frau Keller dir auf dem Weg zugenickt: „Frau M., Vierzehn, ist gestürzt. Schau du."',
    'Mehr Zeit war nicht. Sie ist gegenüber verschwunden — du hörst sie murmeln und merkst, dass sie auf dich vertraut.',
    'Frau M., 82 Jahre, Pneumonie Tag drei — mehr weißt du nicht. Dein Puls liegt höher als sonst.',
  ],
  meta: [
    { l: 'Du', v: '2. Ausbildungsdrittel · 4. Nachtschicht' },
    { l: 'Zimmer', v: '14 · 2-Bett · Pneumologie' },
    { l: 'Vor dir', v: 'Eine Frau am Boden — du hast sie noch nie gesehen' },
  ],
  bloom: 'B2 · Verstehen',
  duration: '~20 Min',
  steps: 5,
};

// ── Step 1.1 · Text/Scenario · SBAR-Übergabe ──────────────
const STEP_SBAR = {
  phase: 0, kind: 'Informieren · Übergabe',
  type: 'text',
  step: 1, total: 30,
  fall: 'Frau Keller flüstert dir auf dem Flur zu — du hast 15 Sekunden, bevor sie weiter muss.',
  title: 'Übergabe auf dem Flur',
  body: 'Frau Keller: „Frau M., Zimmer 14, grad gestürzt, links neben dem Bett, ansprechbar, klagt über Hüftschmerz. Ich übernehme die Infusion nebenan — schau du mal."',
  sbar: [
    { l: 'S', t: 'Sturz vor 7 Min, neben Bett' },
    { l: 'B', t: 'Pneumonie Tag 3, Parkinson II' },
    { l: 'A', t: 'Ansprechbar, orient., Hüftschmerz li.' },
    { l: 'R', t: 'Assessment, Arzt bei Bedarf' },
  ],
};

// ── Step 1.2 · Selfrating · Selbsteinschätzung vor Betreten
const STEP_CONFIDENCE = {
  phase: 0, kind: 'Informieren · Selbsteinschätzung',
  type: 'selfrating',
  step: 2, total: 30,
  title: 'Wie sicher fühlst du dich?',
  sub: 'Bevor du das Zimmer betrittst — kein richtig oder falsch.',
  question: 'Wie sicher fühlst du dich, jetzt das Erstgespräch mit Frau M. zu führen?',
};

// ── Step 1.3 · MC · Erste Priorität (fallstrick)
const STEP_MC = {
  phase: 0, kind: 'Informieren · Multiple Choice',
  type: 'mc',
  step: 3, total: 30,
  title: 'Was tust du beim Betreten ZUERST?',
  hint: 'Fallstrick: Es klingen mehrere plausibel.',
  options: [
    { t: 'Blutdruck messen', correct: false },
    { t: 'Licht einschalten, begrüßen, Bewusstsein prüfen', correct: true },
    { t: 'Nachtschwester rufen', correct: false },
    { t: 'Frau M. sofort ins Bett heben', correct: false, danger: true },
  ],
  selected: 1, // gewählte Antwort beim Snapshot
};

// ── Step 1.4 · Dialog (3 Phasen) — wir zeigen Phase 1 mit Optionen
const STEP_DIALOG = {
  phase: 0, kind: 'Informieren · Dialog',
  type: 'dialog',
  step: 4, total: 30,
  title: 'Frau M. spricht zu dir',
  context: 'Frau M. blickt dich an. Stimme leise, Hände gefaltet im Schoß.',
  patientLine: '„Es tut mir furchtbar leid, dass ich Sie um diese Zeit in Anspruch nehme. Ich wollte nur kurz auf die Toilette."',
  options: [
    { t: '„Sie machen gar keine Umstände. Lassen Sie uns in Ruhe schauen, wie es Ihnen geht."', score: 3 },
    { t: '„Kein Problem, solche Stürze passieren hier jede Woche."', score: 1 },
    { t: '„Sie haben Glück, es ist ja nichts passiert."', score: 0 },
  ],
};

// ── Step 1.5 · Sorting · Assessment-Reihenfolge
const STEP_SORT = {
  phase: 0, kind: 'Informieren · Reihenfolge',
  type: 'sorting',
  step: 5, total: 30,
  title: 'Sortiere die Assessment-Schritte',
  items: [
    'Bewusstsein und Ansprechbarkeit prüfen',
    'Grobe Verletzungsprüfung (Blutung, Deformität, Schmerz)',
    'Vitalzeichen messen (RR, HF, SpO₂, Temp)',
    'Transfer planen (2-Personen, Decke, Schmerzmedikation)',
    'Arzt informieren bei Bedarf (SBAR)',
  ],
};

// ── Step 2.1 · Highlight · Medikamente
const STEP_HIGHLIGHT = {
  phase: 1, kind: 'Beobachten · Markieren',
  type: 'highlight',
  step: 6, total: 30,
  title: 'Markiere Sturz-relevante Wirkstoffe',
  sub: 'Frau M.s aktuelle Medikation. Vor der Erklärung: Was fällt dir auf?',
  meds: [
    { name: 'Levodopa/Benserazid', dose: '3× 125 mg · Parkinson', flagged: true, hit: true, reason: 'Orthostase' },
    { name: 'Ramipril', dose: '5 mg morgens · RR', flagged: true, hit: true, reason: 'RR-Senker → Orthostase' },
    { name: 'Hydrochlorothiazid', dose: '12,5 mg · RR', flagged: true, hit: true, reason: 'Nykturie!' },
    { name: 'Zolpidem (Stilnox)', dose: '10 mg z. N. · seit 2 Tagen', flagged: true, hit: true, reason: 'PRISCUS-PIM · Hauptauslöser', primary: true },
    { name: 'Ampicillin/Sulbactam i.v.', dose: '3× 3 g · Pneumonie', flagged: false, hit: false },
  ],
};

// ── Step 2.4 · Categorize · intrinsisch/extrinsisch
const STEP_CATEGORIZE = {
  phase: 1, kind: 'Beobachten · Risiken kategorisieren',
  type: 'categorize',
  step: 9, total: 30,
  title: 'Sturz-Risikofaktoren ordnen',
  sub: 'Welche Faktoren gehören zu Frau M.?',
  buckets: [
    { name: 'intrinsisch', items: ['Parkinson · Gangstörung', 'Zolpidem-Restwirkung', 'Nykturie (HCT)', 'Visus reduziert (Katarakt)'] },
    { name: 'extrinsisch', items: ['Bett zu hoch', 'Bettgitter unten', 'Klingel außer Reichweite', 'Toilettenlicht aus'] },
  ],
};

// ── Step 4.3 · Branching · Mobilisation Hauptbranching
const STEP_BRANCHING = {
  phase: 3, kind: 'Durchführen · Entscheidungspunkt',
  type: 'branching',
  step: 18, total: 30,
  title: 'Mobilisation — wie gehst du vor?',
  sub: 'Frau M. ist sicher am Boden, NRS 4/10. Wie weiter?',
  paths: [
    { l: 'A', t: 'Toilettenstuhl ans Bett, 2-Personen-Transfer, nicht allein lassen', tag: 'empfohlen', tone: 'good' },
    { l: 'B', t: 'Bettpfanne reichen — bleibt im Bett', tag: 'Würde verletzt', tone: 'warn' },
    { l: 'C', t: 'Bis morgen warten, Frühdienst übernimmt', tag: 'Risiko', tone: 'bad' },
  ],
};

// ── Step 6.x · Freitext · Sturzprotokoll
const STEP_PROTOCOL = {
  phase: 4, kind: 'Dokumentieren · Sturzprotokoll',
  type: 'freetext',
  step: 26, total: 30,
  title: 'Sturzprotokoll dokumentieren',
  sub: 'DGUV / hausinternes Sturzprotokoll · 5 Pflichtfelder',
  fields: [
    { l: 'Zeitpunkt', v: '02:48 Uhr · 22.04.2026' },
    { l: 'Ort', v: 'Zimmer 14, links neben Bett' },
    { l: 'Verletzungsstatus', v: 'NRS 4/10 li. Hüfte, keine sichtb. Deformität' },
    { l: 'Vermutete Ursachen', v: 'Zolpidem-Sedierung + Nykturie (HCT) + unbek. Setting' },
    { l: 'Sofortmaßnahme', v: '2-Pers.-Transfer, RR-Kontrolle, Arzt informiert (SBAR)' },
  ],
};

// ── Step 6 · Done · Reflektieren-Abschluss
const STEP_DONE = {
  phase: 5, kind: 'Evaluieren · Situation geschafft',
  type: 'done',
  step: 30, total: 30,
  title: 'Situation geschafft',
  sub: 'Du hast alle 6 Phasen der Pflege-Spirale durchlaufen.',
  stats: [
    { l: 'Schritte', v: '30/30' },
    { l: 'Dialog-Score', v: '7 / 9' },
    { l: 'Mastery „Sturz-Prophylaxe"', v: '+18%' },
  ],
  trigger: '11 Bausteine getriggert · Auslöser: Zolpidem (PRISCUS 2.0)',
};

Object.assign(window, {
  FRAUM, STEP_SCENE, STEP_SBAR, STEP_CONFIDENCE, STEP_MC, STEP_DIALOG, STEP_SORT,
  STEP_HIGHLIGHT, STEP_CATEGORIZE, STEP_BRANCHING, STEP_PROTOCOL, STEP_DONE,
});

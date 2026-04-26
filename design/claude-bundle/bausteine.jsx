// Wissensbausteine — Sub-Einheiten innerhalb eines Themas.
// 3 Kern-Screens: ThemaMitBausteinen, BausteinIntro, BausteinAbschluss
// + Karten-Varianten für Galerie + Flow-Wrapper.
//
// Visuell: ChatGPT-Palette (Teal #218C71 + Linen #F8F5F0, Inter).

const BC = window.CGPT;
const BF = "Inter, -apple-system, system-ui, sans-serif";

// ─────────────────────────────────────────────
// DATEN — ein Beispiel-Thema mit 5 Bausteinen
// ─────────────────────────────────────────────
const BAUSTEINE_DATA = [
  {
    id: 1,
    nr: '01',
    titel: 'Schmerz verstehen',
    untertitel: 'Was Schmerz ist und wie er wirkt',
    dauer: 6,
    steps: 5,
    mastery: 4, // gemeistert
    status: 'done',
    phasen: ['Info', 'Refl.'],
    lernziele: [
      'Akuten und chronischen Schmerz unterscheiden',
      'Die Schmerz-Spirale erklären',
      'Eigene Haltung zu Schmerz reflektieren',
    ],
    stepArten: ['Text', 'Karteikarte', 'Multiple Choice', 'Reflektion', 'Feedback'],
  },
  {
    id: 2,
    nr: '02',
    titel: 'VAS & NRS im Alltag',
    untertitel: 'Schmerz messbar machen',
    dauer: 8,
    steps: 7,
    mastery: 3, // sicher
    status: 'done',
    phasen: ['Info', 'Plan', 'Durchf.'],
    lernziele: [
      'VAS- und NRS-Skala korrekt anwenden',
      'Ruhe- und Bewegungsschmerz erfassen',
      'Werte verlässlich dokumentieren',
    ],
    stepArten: ['Text', 'Slider', 'Hotspot', 'TableFillIn', 'Feedback'],
  },
  {
    id: 3,
    nr: '03',
    titel: 'Schmerz und Bewegung',
    untertitel: 'Mobilisation trotz Schmerz',
    dauer: 12,
    steps: 9,
    mastery: 2, // vertraut — IN BEARBEITUNG
    status: 'in-progress',
    progress: 4, // 4 von 9 Steps gemacht
    phasen: ['Plan', 'Entsch.', 'Durchf.'],
    lernziele: [
      'Mobilisations-Plan an Schmerzlevel anpassen',
      'Vor-/Nach-Schmerz dokumentieren',
      'Eigeninitiative der Patient:in fördern',
    ],
    stepArten: ['Text', 'Multiple Choice', 'Sortieren', 'Dialog', 'Reflektion'],
  },
  {
    id: 4,
    nr: '04',
    titel: 'Medikation sicher',
    untertitel: 'WHO-Stufenschema und Bedarfsmedikation',
    dauer: 10,
    steps: 8,
    mastery: 1, // versucht
    status: 'attempted',
    phasen: ['Info', 'Entsch.', 'Kontr.'],
    lernziele: [
      'WHO-Stufen-1/2/3 anwenden',
      'Wechselwirkungen erkennen',
      'Bedarfsmedikation einschätzen',
    ],
    stepArten: ['Text', 'Multiple Choice', 'Calculation', 'Hotspot', 'TrueFalse'],
  },
  {
    id: 5,
    nr: '05',
    titel: 'Dokumentation',
    untertitel: 'Schmerzverlauf nachvollziehbar machen',
    dauer: 7,
    steps: 6,
    mastery: 0,
    status: 'locked',
    phasen: ['Kontr.', 'Refl.'],
    lernziele: [
      'Pflegerische Verlaufsdokumentation',
      'Übergaben präzise formulieren',
      'Pflegevisite vorbereiten',
    ],
    stepArten: ['Text', 'FillIn', 'Reihenfolge', 'WordOrder', 'Reflektion'],
  },
];

const MASTERY_LABELS = ['Neu', 'Versucht', 'Vertraut', 'Sicher', 'Gemeistert'];
const MASTERY_COLORS = ['#A09890', '#D4AE88', '#B8A894', '#3E5A6A', '#218C71'];

// ─────────────────────────────────────────────
// HELPER — Mastery Ring
// ─────────────────────────────────────────────
function MasteryRing({ level = 0, size = 38, stroke = 3, animate = false, fromLevel = 0 }) {
  const c = MASTERY_COLORS[level];
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const target = level / 4;
  const [progress, setProgress] = React.useState(animate ? fromLevel / 4 : target);
  React.useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setProgress(target), 200);
    return () => clearTimeout(t);
  }, [animate, target]);
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke="rgba(26,24,21,0.08)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke={c} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - progress)}
        style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.4s ease' }} />
    </svg>
  );
}

// ─── Baustein-Karte (reich) ─────────────────────
function BausteinCard({ b, onOpen, highlight = false }) {
  const c = BC;
  const isLocked = b.status === 'locked';
  const isProgress = b.status === 'in-progress';
  const isDone = b.status === 'done';
  const progressPct = isProgress ? Math.round((b.progress / b.steps) * 100) : 0;

  return (
    <div onClick={!isLocked ? onOpen : undefined} style={{
      background: c.bgWhite,
      border: `1px solid ${highlight ? c.accent : c.borderStrong}`,
      borderRadius: 14,
      padding: '14px 14px 12px',
      marginBottom: 10,
      cursor: isLocked ? 'default' : 'pointer',
      opacity: isLocked ? 0.55 : 1,
      boxShadow: highlight ? `0 0 0 3px ${c.accentSoft}` : 'none',
      position: 'relative',
    }}>
      {/* Top Row */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
        <div style={{ position: 'relative', width: 38, height: 38, flexShrink: 0 }}>
          <MasteryRing level={b.mastery} size={38} />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700,
            color: isDone ? MASTERY_COLORS[b.mastery] : c.text2,
          }}>
            {isDone && b.mastery >= 3 ? '✓' : isLocked ? '🔒' : b.nr}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600 }}>
            Baustein {b.nr}
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3, marginTop: 2, color: c.text }}>
            {b.titel}
          </div>
          <div style={{ fontSize: 12, color: c.text3, marginTop: 2, lineHeight: 1.4 }}>
            {b.untertitel}
          </div>
        </div>
      </div>

      {/* Meta Row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: c.text3,
        paddingTop: 10, borderTop: `1px dashed ${c.borderStrong}`,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Dot color={MASTERY_COLORS[b.mastery]} /> {MASTERY_LABELS[b.mastery]}
        </span>
        <span style={{ width: 1, height: 10, background: c.borderStrong }} />
        <span>{b.steps} Schritte</span>
        <span style={{ width: 1, height: 10, background: c.borderStrong }} />
        <span>~{b.dauer} min</span>
        <div style={{ flex: 1 }} />
        {!isLocked && (
          <span style={{ color: c.accent, fontWeight: 600, fontSize: 12 }}>
            {isProgress ? 'Fortsetzen' : isDone ? 'Wiederholen' : 'Starten'} ›
          </span>
        )}
      </div>

      {/* Progress Bar (nur wenn in Bearbeitung) */}
      {isProgress && (
        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: c.text3, marginBottom: 4 }}>
            <span>Fortschritt</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', color: c.accent, fontWeight: 600 }}>
              {b.progress}/{b.steps}
            </span>
          </div>
          <div style={{ height: 4, background: '#E8DFD5', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ width: `${progressPct}%`, height: '100%', background: c.accent, borderRadius: 999 }} />
          </div>
        </div>
      )}
    </div>
  );
}

function Dot({ color, size = 6 }) {
  return <span style={{ width: size, height: size, borderRadius: 999, background: color, display: 'inline-block' }} />;
}

// ─────────────────────────────────────────────
// SCREEN A — Thema-Detail mit Baustein-Liste
// ─────────────────────────────────────────────
function ThemaMitBausteinen({ onOpen, onBack, focusId = 3 }) {
  const c = BC;
  const totalSteps = BAUSTEINE_DATA.reduce((s, b) => s + b.steps, 0);
  const doneSteps = BAUSTEINE_DATA.reduce((s, b) => {
    if (b.status === 'done') return s + b.steps;
    if (b.status === 'in-progress') return s + (b.progress || 0);
    return s;
  }, 0);
  const overallPct = Math.round((doneSteps / totalSteps) * 100);

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: BF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      {/* Header */}
      <div style={{ padding: '10px 16px 14px', borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer', padding: 0 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Thema 02 · CE 04</div>
          <div style={{ width: 24 }} />
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginBottom: 4, textWrap: 'pretty' }}>
          Schmerzmanagement postoperativ
        </div>
        <div style={{ fontSize: 12, color: c.text3, marginBottom: 14 }}>
          5 Bausteine · ~43 min · Pflegerische Versorgung nach Hüft-OP
        </div>
        {/* Overall Progress */}
        <div style={{
          background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 10,
          padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ position: 'relative', width: 36, height: 36 }}>
            <MasteryRing level={2} size={36} stroke={3} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: c.accent }}>
              {overallPct}%
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: c.text }}>
              {doneSteps} von {totalSteps} Schritten erledigt
            </div>
            <div style={{ fontSize: 11, color: c.text3, marginTop: 1 }}>
              2 Bausteine gemeistert · 1 in Bearbeitung
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', padding: '0 16px', borderBottom: `1px solid ${c.borderStrong}`, fontSize: 13, background: c.bg }}>
        {['Bausteine', 'Glossar', 'Karten'].map((t, i) => (
          <div key={t} style={{
            padding: '10px 0', marginRight: 22,
            borderBottom: i === 0 ? `2px solid ${c.accent}` : '2px solid transparent',
            color: i === 0 ? c.accent : c.text3, fontWeight: i === 0 ? 600 : 400,
          }}>{t}</div>
        ))}
      </div>

      {/* Liste */}
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 16px 20px' }}>
        {BAUSTEINE_DATA.map(b => (
          <BausteinCard
            key={b.id}
            b={b}
            highlight={b.id === focusId}
            onOpen={() => onOpen && onOpen(b)}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SCREEN B — Baustein-Intro
// Lernziele + „Was du danach kannst" + Step-Vorschau + Start
// ─────────────────────────────────────────────
function BausteinIntro({ baustein = BAUSTEINE_DATA[2], onStart, onBack }) {
  const c = BC;
  const b = baustein;
  const isResume = b.status === 'in-progress';

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: BF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '10px 16px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer', padding: 0 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Baustein {b.nr}</div>
          <div style={{ width: 24 }} />
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '4px 16px 16px' }}>
        {/* Hero */}
        <div style={{
          padding: '20px 18px',
          background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
          borderRadius: 16,
          color: '#fff',
          marginBottom: 18,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Deko-Pattern */}
          <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', right: -20, top: -20, opacity: 0.18 }}>
            <circle cx="60" cy="60" r="58" fill="none" stroke="#fff" strokeWidth="1" />
            <circle cx="60" cy="60" r="40" fill="none" stroke="#fff" strokeWidth="1" />
            <circle cx="60" cy="60" r="22" fill="none" stroke="#fff" strokeWidth="1" />
          </svg>
          <div style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.8, fontWeight: 600 }}>
            Baustein {b.nr} · Wissen
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginTop: 6, textWrap: 'pretty' }}>
            {b.titel}
          </div>
          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 6, lineHeight: 1.45 }}>
            {b.untertitel}
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 14, fontSize: 11, opacity: 0.9 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 13 }}>◷</span> ~{b.dauer} min
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 13 }}>≡</span> {b.steps} Schritte
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Dot color="#fff" size={7} /> {MASTERY_LABELS[b.mastery]}
            </span>
          </div>
        </div>

        {/* Lernziele */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
            Was du danach kannst
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {b.lernziele.map((z, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'flex-start',
                padding: '12px 14px',
                background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 10,
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: 10, flexShrink: 0,
                  background: c.accentSoft, color: c.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, marginTop: 1,
                }}>{i + 1}</div>
                <div style={{ fontSize: 13, lineHeight: 1.45, color: c.text }}>{z}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-Vorschau */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>
              Was dich erwartet
            </div>
            <div style={{ fontSize: 11, color: c.text3 }}>{b.stepArten.length} Schritt-Typen</div>
          </div>
          <div style={{
            background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12,
            padding: '6px 0',
          }}>
            {b.stepArten.map((art, i) => {
              const done = isResume && i < (b.progress || 0);
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px',
                  borderBottom: i < b.stepArten.length - 1 ? `1px solid ${c.borderStrong}` : 'none',
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 11, flexShrink: 0,
                    background: done ? c.accent : '#F0E9DD',
                    color: done ? '#fff' : c.text3,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, fontVariantNumeric: 'tabular-nums',
                  }}>{done ? '✓' : i + 1}</div>
                  <div style={{ flex: 1, fontSize: 13, color: done ? c.text3 : c.text, textDecoration: done ? 'line-through' : 'none' }}>
                    {art}
                  </div>
                  {done && <span style={{ fontSize: 10, color: c.accent, fontWeight: 600 }}>FERTIG</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Phasen */}
        <div style={{
          padding: '12px 14px', background: c.bgWhite, border: `1px solid ${c.border}`,
          borderRadius: 10, fontSize: 12, color: c.text2, lineHeight: 1.5,
        }}>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
            Pflege-Phasen
          </div>
          Dieser Baustein deckt: <strong style={{ color: c.text }}>{b.phasen.join(' · ')}</strong>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
        <button onClick={onStart} style={{
          width: '100%', background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: BF, cursor: 'pointer',
        }}>
          {isResume ? `Fortsetzen ab Schritt ${(b.progress || 0) + 1}` : 'Baustein starten'}
        </button>
        {isResume && (
          <div style={{ textAlign: 'center', fontSize: 11, color: c.text3, marginTop: 8 }}>
            Du hast {b.progress} von {b.steps} Schritten gemacht
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SCREEN C — Baustein-Abschluss
// Mastery-Update animiert + Was-du-gelernt + Nächster Baustein
// ─────────────────────────────────────────────
function BausteinAbschluss({ baustein = BAUSTEINE_DATA[2], onNext, onBack, fromMastery = 2, toMastery = 3 }) {
  const c = BC;
  const b = baustein;
  const next = BAUSTEINE_DATA.find(x => x.id === b.id + 1);
  const [showCelebrate, setShowCelebrate] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setShowCelebrate(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: BF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '10px 16px 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer', padding: 0 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Baustein {b.nr} abgeschlossen</div>
          <div style={{ width: 24 }} />
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '24px 16px 16px' }}>
        {/* Celebrate */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto 14px' }}>
            {/* Konzentrische Kreise */}
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: 'absolute', inset: -i * 8 + 'px',
                border: `1px solid ${c.accent}`,
                borderRadius: '50%',
                opacity: showCelebrate ? 0.18 - i * 0.05 : 0,
                transform: showCelebrate ? 'scale(1)' : 'scale(0.6)',
                transition: `all ${0.6 + i * 0.15}s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
              }} />
            ))}
            <div style={{
              position: 'absolute', inset: 14,
              borderRadius: '50%',
              background: c.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: showCelebrate ? 'scale(1)' : 'scale(0.5)',
              opacity: showCelebrate ? 1 : 0,
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
              boxShadow: '0 8px 24px rgba(33,140,113,0.25)',
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M5 12 L10 17 L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{
                    strokeDasharray: 30,
                    strokeDashoffset: showCelebrate ? 0 : 30,
                    transition: 'stroke-dashoffset 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
                  }} />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.25, marginBottom: 4 }}>
            Baustein abgeschlossen
          </div>
          <div style={{ fontSize: 13, color: c.text3 }}>
            „{b.titel}"
          </div>
        </div>

        {/* Mastery-Update Card */}
        <div style={{
          background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
          padding: '16px 16px 14px', marginBottom: 16,
        }}>
          <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
            Dein Fortschritt
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
              <MasteryRing level={toMastery} fromLevel={fromMastery} size={56} stroke={4} animate />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontWeight: 700, color: MASTERY_COLORS[toMastery],
              }}>✓</div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, color: c.text3, marginBottom: 4 }}>Mastery jetzt</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: c.text, marginBottom: 6 }}>
                {MASTERY_LABELS[toMastery]}
              </div>
              {/* Stufen-Indikator */}
              <div style={{ display: 'flex', gap: 4 }}>
                {MASTERY_LABELS.map((_, i) => (
                  <div key={i} style={{
                    flex: 1, height: 4, borderRadius: 999,
                    background: i <= toMastery ? MASTERY_COLORS[i] : '#E8DFD5',
                    opacity: i === toMastery ? 1 : i <= fromMastery ? 0.6 : 1,
                    transition: 'all 0.4s ease',
                  }} />
                ))}
              </div>
              <div style={{ fontSize: 11, color: c.accent, marginTop: 6, fontWeight: 600 }}>
                {MASTERY_LABELS[fromMastery]} → {MASTERY_LABELS[toMastery]}
              </div>
            </div>
          </div>
        </div>

        {/* Was du gelernt hast */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
            Was du jetzt kannst
          </div>
          <div style={{
            background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12,
            padding: '4px 0',
          }}>
            {b.lernziele.map((z, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'flex-start',
                padding: '12px 14px',
                borderBottom: i < b.lernziele.length - 1 ? `1px solid ${c.borderStrong}` : 'none',
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 9, flexShrink: 0,
                  background: c.accent, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700, marginTop: 1,
                }}>✓</div>
                <div style={{ fontSize: 13, lineHeight: 1.45, color: c.text }}>{z}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Mini */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16,
        }}>
          {[
            { v: b.steps, l: 'Schritte' },
            { v: `${b.dauer}m`, l: 'Lernzeit' },
            { v: '+1', l: 'Stufe' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '10px 8px', background: c.bgWhite, border: `1px solid ${c.border}`,
              borderRadius: 10, textAlign: 'center',
            }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: c.accent, fontVariantNumeric: 'tabular-nums' }}>{s.v}</div>
              <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.4, textTransform: 'uppercase', marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Nächster Baustein Vorschau */}
        {next && (
          <div style={{
            background: `linear-gradient(180deg, ${c.bgWhite} 0%, ${c.accentSoft} 100%)`,
            border: `1px solid ${c.border}`, borderRadius: 12,
            padding: '14px',
          }}>
            <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
              Als Nächstes
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 18, flexShrink: 0,
                background: c.bgWhite, border: `1.5px solid ${c.accent}`,
                color: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
              }}>{next.nr}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: c.text, lineHeight: 1.3 }}>{next.titel}</div>
                <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>
                  {next.steps} Schritte · ~{next.dauer} min
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTAs */}
      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}`, display: 'flex', gap: 8 }}>
        <button onClick={onBack} style={{
          flex: '0 0 auto', padding: '14px 18px',
          background: 'transparent', color: c.accent, border: `1.5px solid ${c.accent}`,
          borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: BF, cursor: 'pointer',
        }}>Übersicht</button>
        <button onClick={onNext} style={{
          flex: 1, background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: BF, cursor: 'pointer',
        }}>{next ? `Baustein ${next.nr} starten` : 'Thema abschließen'}</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// FLOW WRAPPER — interaktiver Walkthrough
// Übersicht → Intro → (fake Lernen) → Abschluss → zurück
// ─────────────────────────────────────────────
function BausteineFlow() {
  const [screen, setScreen] = React.useState('uebersicht');
  const [activeBaustein, setActiveBaustein] = React.useState(BAUSTEINE_DATA[2]);

  if (screen === 'uebersicht') {
    return <ThemaMitBausteinen
      onOpen={(b) => { setActiveBaustein(b); setScreen('intro'); }}
      onBack={() => setScreen('uebersicht')}
      focusId={activeBaustein.id}
    />;
  }
  if (screen === 'intro') {
    return <BausteinIntro
      baustein={activeBaustein}
      onStart={() => setScreen('abschluss')}
      onBack={() => setScreen('uebersicht')}
    />;
  }
  return <BausteinAbschluss
    baustein={activeBaustein}
    fromMastery={Math.max(0, activeBaustein.mastery - 1)}
    toMastery={Math.min(4, activeBaustein.mastery + 1)}
    onBack={() => setScreen('uebersicht')}
    onNext={() => {
      const next = BAUSTEINE_DATA.find(x => x.id === activeBaustein.id + 1);
      if (next) { setActiveBaustein(next); setScreen('intro'); }
      else setScreen('uebersicht');
    }}
  />;
}

// Standalone wrappers für DesignCanvas
function ThemaUebersicht() { return <ThemaMitBausteinen focusId={3} />; }
function BausteinIntroDemo() { return <BausteinIntro baustein={BAUSTEINE_DATA[2]} />; }
function BausteinIntroNeu() { return <BausteinIntro baustein={BAUSTEINE_DATA[3]} />; }
function BausteinAbschlussDemo() {
  return <BausteinAbschluss baustein={BAUSTEINE_DATA[2]} fromMastery={1} toMastery={2} />;
}
function BausteinAbschlussMastered() {
  return <BausteinAbschluss baustein={BAUSTEINE_DATA[1]} fromMastery={2} toMastery={3} />;
}

Object.assign(window, {
  BAUSTEINE_DATA, MASTERY_LABELS, MASTERY_COLORS, MasteryRing,
  BausteinCard,
  ThemaMitBausteinen, BausteinIntro, BausteinAbschluss,
  BausteineFlow,
  ThemaUebersicht, BausteinIntroDemo, BausteinIntroNeu,
  BausteinAbschlussDemo, BausteinAbschlussMastered,
});

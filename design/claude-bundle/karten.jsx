// Karteikarten-Lernmodus — Anki-style Spaced Repetition
// Flip-Karte (Frage → Antwort), 4 Bewertungs-Buttons, Session-Progress, Abschluss-Screen.

const KC = window.CGPT;
const KF = "Inter, -apple-system, system-ui, sans-serif";

// Demo-Karten — mehrere Themen
const KARTEN_DECK = [
  { id: 1, front: 'Was misst die VAS-Skala?',
    back: 'Visuelle Analog-Skala für Schmerz: 0 (kein Schmerz) bis 10 (stärkster vorstellbarer Schmerz). Patient:in markiert auf einer Linie.',
    tag: 'Schmerz', stage: 'lernen' },
  { id: 2, front: 'Hüft-TEP: Beugelimit in den ersten 6 Wochen?',
    back: 'Maximal 90° Hüftbeugung. Keine Innenrotation, keine Adduktion über Mittellinie.',
    tag: 'Mobilisation', stage: 'neu' },
  { id: 3, front: 'WHO-Stufenschema: Stufe 1 — was?',
    back: 'Nicht-Opioide: Paracetamol, NSAR (Ibuprofen, Diclofenac), Metamizol. Bei leichten bis mittleren Schmerzen.',
    tag: 'Medikation', stage: 'reife' },
  { id: 4, front: 'Welche RR-Werte sind kontraindiziert für Mobilisation?',
    back: 'Systolisch < 100 mmHg oder > 180 mmHg. Bei Werten dazwischen — vorsichtig mobilisieren, eng kontrollieren.',
    tag: 'Mobilisation', stage: 'lernen' },
  { id: 5, front: 'Was ist der Unterschied zwischen Ruhe- und Bewegungsschmerz?',
    back: 'Ruheschmerz: ohne Belastung, oft Dauerschmerz. Bewegungsschmerz: bei Aktivierung. Die Differenz ist oft wichtiger als die absolute Zahl.',
    tag: 'Schmerz', stage: 'neu' },
];

// ─── FLIP-KARTE ─────────────────────────
function FlipCard({ karte, flipped, onFlip }) {
  const c = KC;
  return (
    <div onClick={onFlip} style={{
      width: '100%', aspectRatio: '3/4', position: 'relative',
      cursor: 'pointer', perspective: 1000,
    }}>
      <div style={{
        position: 'absolute', inset: 0, transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Front */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 16,
          padding: '24px 22px', display: 'flex', flexDirection: 'column',
          boxShadow: '0 6px 24px rgba(26,24,21,0.06)',
        }}>
          <div style={{
            fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase',
            fontWeight: 700, marginBottom: 12,
          }}>{karte.tag} · Frage</div>
          <div style={{
            flex: 1, fontSize: 22, fontWeight: 600, lineHeight: 1.3,
            color: c.text, textWrap: 'pretty',
            display: 'flex', alignItems: 'center',
          }}>{karte.front}</div>
          <div style={{
            fontSize: 11, color: c.text3, textAlign: 'center', marginTop: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: 4,
              border: `1px solid ${c.text3}`, position: 'relative' }}>
              <span style={{ position: 'absolute', inset: 2, fontSize: 9, lineHeight: '10px', textAlign: 'center' }}>↺</span>
            </span>
            Tippen zum Umdrehen
          </div>
        </div>
        {/* Back */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 16,
          padding: '24px 22px', display: 'flex', flexDirection: 'column',
          boxShadow: '0 6px 24px rgba(26,24,21,0.06)',
        }}>
          <div style={{
            fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase',
            fontWeight: 700, marginBottom: 12,
          }}>{karte.tag} · Antwort</div>
          <div style={{
            fontSize: 14, color: c.text2, lineHeight: 1.55, marginBottom: 12,
            opacity: 0.7, fontStyle: 'italic',
          }}>{karte.front}</div>
          <div style={{
            flex: 1, fontSize: 16, lineHeight: 1.5, color: c.text, textWrap: 'pretty',
          }}>{karte.back}</div>
        </div>
      </div>
    </div>
  );
}

// ─── KARTEN-SESSION ─────────────────────
function KartenSession({ onDone, onBack }) {
  const c = KC;
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [bewertungen, setBewertungen] = React.useState([]);
  const karte = KARTEN_DECK[idx];

  const bewerten = (b) => {
    setBewertungen([...bewertungen, b]);
    if (idx >= KARTEN_DECK.length - 1) {
      setTimeout(() => onDone && onDone([...bewertungen, b]), 200);
      return;
    }
    setFlipped(false);
    setTimeout(() => setIdx(idx + 1), 250);
  };

  const buttons = [
    { label: 'Wieder',  sub: '<1m',  color: '#C96B5C', value: 'wieder' },
    { label: 'Schwer',  sub: '6m',   color: '#D4956A', value: 'schwer' },
    { label: 'Gut',     sub: '1d',   color: '#3E5A6A', value: 'gut' },
    { label: 'Einfach', sub: '4d',   color: c.accent,  value: 'einfach' },
  ];

  const remaining = KARTEN_DECK.length - idx;

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: KF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '10px 16px 12px', borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer', padding: 0 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            Karte {idx + 1} / {KARTEN_DECK.length}
          </div>
          <button style={{ background: 'transparent', border: 'none', fontSize: 14, color: c.text2 }}>⏸</button>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {KARTEN_DECK.map((_, i) => (
            <div key={i} style={{
              flex: 1, height: 3, borderRadius: 999,
              background: i < idx ? c.accent : i === idx ? c.accent : '#E8DFD5',
              opacity: i < idx ? 0.5 : 1,
            }} />
          ))}
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px 16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <FlipCard karte={karte} flipped={flipped} onFlip={() => setFlipped(true)} />
        </div>
      </div>

      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
        {!flipped ? (
          <button onClick={() => setFlipped(true)} style={{
            width: '100%', background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
            padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: KF, cursor: 'pointer',
          }}>Antwort zeigen</button>
        ) : (
          <div>
            <div style={{ fontSize: 10, color: c.text3, textAlign: 'center', marginBottom: 8, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600 }}>
              Wie gut wusstest du das?
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 6 }}>
              {buttons.map(b => (
                <button key={b.value} onClick={() => bewerten(b.value)} style={{
                  background: c.bgWhite, border: `1.5px solid ${b.color}`,
                  color: b.color, borderRadius: 10, padding: '10px 4px',
                  fontFamily: KF, cursor: 'pointer', display: 'flex',
                  flexDirection: 'column', gap: 2, alignItems: 'center',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{b.label}</div>
                  <div style={{ fontSize: 9, opacity: 0.7 }}>{b.sub}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SESSION-ABSCHLUSS ──────────────────
function KartenAbschluss({ bewertungen = ['gut','schwer','gut','einfach','gut'], onBack }) {
  const c = KC;
  const counts = bewertungen.reduce((acc, b) => { acc[b] = (acc[b]||0)+1; return acc; }, {});
  const total = bewertungen.length;
  const score = ((counts.einfach||0)*4 + (counts.gut||0)*3 + (counts.schwer||0)*2 + (counts.wieder||0)*1) / (total*4);

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: KF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ flex: 1, overflow: 'auto', padding: '24px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{
            width: 96, height: 96, margin: '0 auto 14px', borderRadius: '50%',
            background: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(33,140,113,0.25)',
          }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path d="M5 12 L10 17 L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 4 }}>Sitzung beendet</div>
          <div style={{ fontSize: 13, color: c.text3 }}>{total} Karten in ~6 min</div>
        </div>

        <div style={{ background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14, padding: '16px', marginBottom: 16 }}>
          <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
            Verteilung
          </div>
          {[
            { key: 'einfach', label: 'Einfach', color: c.accent },
            { key: 'gut',     label: 'Gut',     color: '#3E5A6A' },
            { key: 'schwer',  label: 'Schwer',  color: '#D4956A' },
            { key: 'wieder',  label: 'Wieder',  color: '#C96B5C' },
          ].map(b => {
            const n = counts[b.key]||0;
            const pct = total ? (n/total)*100 : 0;
            return (
              <div key={b.key} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                  <span style={{ color: c.text2 }}>{b.label}</span>
                  <span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{n}</span>
                </div>
                <div style={{ height: 6, background: '#E8DFD5', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: b.color, transition: 'width 1s ease' }} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ background: c.accentSoft, borderRadius: 12, padding: '14px', fontSize: 13, color: c.text2, lineHeight: 1.5 }}>
          <strong style={{ color: c.text }}>Nächste Sitzung:</strong> morgen um 14:00 — {(counts.wieder||0) + (counts.schwer||0) + 3} Karten erwartet.
        </div>
      </div>
      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
        <button onClick={onBack} style={{
          width: '100%', background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: KF, cursor: 'pointer',
        }}>Fertig</button>
      </div>
    </div>
  );
}

// Standalone für Galerie
function KartenSessionFront() { const [f,setF] = React.useState(false); return <div style={{width:'100%',height:'100%'}}><KartenSession /></div>; }
function KartenSessionBack() {
  // Variante mit aufgedeckter Karte
  return <KartenSessionWithFlipped />;
}
function KartenSessionWithFlipped() {
  const c = KC;
  const karte = KARTEN_DECK[0];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: KF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '10px 16px 12px', borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 22, color: c.text2 }}>‹</div>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Karte 1 / 5</div>
          <div style={{ fontSize: 14, color: c.text2 }}>⏸</div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[0,1,2,3,4].map(i => <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i === 0 ? c.accent : '#E8DFD5' }} />)}
        </div>
      </div>
      <div style={{ flex: 1, padding: '20px 16px', display: 'flex', alignItems: 'center' }}>
        <FlipCard karte={karte} flipped={true} onFlip={() => {}} />
      </div>
      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
        <div style={{ fontSize: 10, color: c.text3, textAlign: 'center', marginBottom: 8, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600 }}>
          Wie gut wusstest du das?
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 6 }}>
          {[
            { label: 'Wieder',  sub: '<1m', color: '#C96B5C' },
            { label: 'Schwer',  sub: '6m',  color: '#D4956A' },
            { label: 'Gut',     sub: '1d',  color: '#3E5A6A' },
            { label: 'Einfach', sub: '4d',  color: c.accent },
          ].map(b => (
            <button key={b.label} style={{
              background: c.bgWhite, border: `1.5px solid ${b.color}`, color: b.color,
              borderRadius: 10, padding: '10px 4px', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', fontFamily: KF,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700 }}>{b.label}</div>
              <div style={{ fontSize: 9, opacity: 0.7 }}>{b.sub}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function KartenAbschlussDemo() { return <KartenAbschluss />; }

// Voll-Flow
function KartenFlow() {
  const [screen, setScreen] = React.useState('session');
  const [bew, setBew] = React.useState([]);
  if (screen === 'session') return <KartenSession onDone={(b) => { setBew(b); setScreen('done'); }} onBack={() => {}} />;
  return <KartenAbschluss bewertungen={bew} onBack={() => setScreen('session')} />;
}

Object.assign(window, {
  KARTEN_DECK, FlipCard, KartenSession, KartenAbschluss, KartenFlow,
  KartenSessionFront, KartenSessionBack, KartenSessionWithFlipped, KartenAbschlussDemo,
});

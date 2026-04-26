// Fehlende Step-Typen — Teil 1: Quiz, Sort, Mark
// Alle in ChatGPT-Palette (CGPT aus steps-cgpt.jsx). Mechanik wie im Live-Repo,
// visuell auf Teal #218C71 + Inter umgestellt.

const C = window.CGPT;
const F = "Inter, -apple-system, system-ui, sans-serif";

// =============== Mini-Helpers ===============
function Btn({ children, onClick, variant = 'primary', disabled, style = {} }) {
  const isPrimary = variant === 'primary';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%',
        background: disabled ? '#E8DFD5' : isPrimary ? C.accent : 'transparent',
        color: disabled ? C.text3 : isPrimary ? '#fff' : C.accent,
        border: isPrimary ? 'none' : `1.5px solid ${C.accent}`,
        borderRadius: 10,
        padding: '14px',
        fontSize: 15,
        fontWeight: 600,
        fontFamily: F,
        cursor: disabled ? 'default' : 'pointer',
        ...style,
      }}
    >{children}</button>
  );
}

function StepShell({ kind, title, body, children, footer, scrollable = true }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: C.bg, fontFamily: F, color: C.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <window.StatusSpacer />
      <window.MiniStepHeader />
      <div style={{ flex: 1, overflow: scrollable ? 'auto' : 'hidden', padding: '18px 16px 16px' }}>
        <div style={{ fontSize: 10, color: C.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>{kind}</div>
        {title && <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 10 }}>{title}</div>}
        {body && <div style={{ fontSize: 13, lineHeight: 1.55, color: C.text2, marginBottom: 14 }}>{body}</div>}
        {children}
      </div>
      <div style={{ padding: '12px 16px 20px', background: C.bgWhite, borderTop: `1px solid ${C.borderStrong}` }}>
        {footer || <Btn>Weiter</Btn>}
      </div>
    </div>
  );
}

// Re-use StepHeader from steps-cgpt (kleinerer Variante als Wrapper)
function MiniStepHeader() {
  return (
    <div style={{ padding: '10px 16px 14px', borderBottom: `1px solid ${C.borderStrong}`, background: C.bg }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontSize: 22, color: C.text2 }}>‹</div>
        <div style={{ fontSize: 11, color: C.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Mobilisation · 4/7</div>
        <div style={{ fontSize: 16, color: C.text2 }}>⋯</div>
      </div>
      <div style={{ display: 'flex', gap: 4, width: '100%' }}>
        {[0,1,2,3,4,5].map(i => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 999,
            background: i < 2 ? C.accent : i === 2 ? C.accent : '#E8DFD5',
            opacity: i < 2 ? 0.5 : 1,
            boxShadow: i === 2 ? `0 0 0 3px ${C.accentSoft}` : 'none' }} />
        ))}
      </div>
    </div>
  );
}

// =============== TRUE/FALSE ===============
function StepTrueFalse() {
  const [picked, setPicked] = React.useState(null);
  const correct = true;
  const isCorrect = picked === correct;
  return (
    <StepShell kind="Wahr · Falsch" title="Stimmt diese Aussage?"
      body={'„Bei einer Hüft-TEP gilt für die ersten 6 Wochen eine Beugelimitierung von max. 90°."'}>      {picked === null ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <button onClick={() => setPicked(true)} style={tfBtn(C, '#3E5A6A')}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>✓</div>
            <div>Wahr</div>
          </button>
          <button onClick={() => setPicked(false)} style={tfBtn(C, '#C96B5C')}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>✗</div>
            <div>Falsch</div>
          </button>
        </div>
      ) : (
        <div style={{ padding: 14, borderRadius: 10,
          background: isCorrect ? 'rgba(62,90,106,0.10)' : 'rgba(201,107,92,0.10)',
          border: `1px solid ${isCorrect ? '#3E5A6A' : '#C96B5C'}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6, color: isCorrect ? '#3E5A6A' : '#C96B5C' }}>
            {isCorrect ? 'Richtig ✓' : 'Falsch — die Aussage stimmt'}
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: C.text2 }}>
            Postoperativ nach Hüft-TEP gelten typischerweise: keine Beugung &gt;90°, keine Innenrotation, keine Adduktion über Mittellinie.
          </div>
        </div>
      )}
    </StepShell>
  );
}
function tfBtn(c, color) {
  return {
    padding: '24px 12px', background: c.bgWhite, border: `1.5px solid ${c.borderStrong}`,
    borderRadius: 12, fontSize: 14, fontWeight: 600, color, fontFamily: F, cursor: 'pointer',
  };
}

// =============== FILL-IN ===============
function StepFillIn() {
  const opts = ['unter 90°', 'unter 60°', 'unter 120°', 'unter 45°'];
  const [picked, setPicked] = React.useState(null);
  return (
    <StepShell kind="Lücke füllen" title="Vervollständige den Satz">
      <div style={{ padding: 14, background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 14, lineHeight: 1.7, color: C.text, marginBottom: 14 }}>
        Nach Hüft-TEP darf das Hüftgelenk in den ersten 6 Wochen <span style={{
          display: 'inline-block', minWidth: 80, padding: '2px 10px', margin: '0 2px',
          background: picked !== null ? C.accentSoft : '#F5EFE5',
          border: `1.5px ${picked !== null ? 'solid' : 'dashed'} ${picked !== null ? C.accent : C.text3}`,
          borderRadius: 6, fontWeight: 600, color: C.accent, textAlign: 'center',
        }}>{picked !== null ? opts[picked] : '___'}</span> gebeugt werden.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {opts.map((o, i) => (
          <button key={i} onClick={() => setPicked(i)} style={{
            padding: '12px', background: picked === i ? C.accent : C.bgWhite,
            color: picked === i ? '#fff' : C.text, border: `1px solid ${picked === i ? C.accent : C.border}`,
            borderRadius: 10, fontSize: 13, fontWeight: 600, fontFamily: F, cursor: 'pointer',
          }}>{o}</button>
        ))}
      </div>
    </StepShell>
  );
}

// =============== SLIDER ===============
function StepSlider() {
  const [val, setVal] = React.useState(80);
  const correct = 90, tol = 10;
  const ok = Math.abs(val - correct) <= tol;
  return (
    <StepShell kind="Wert schätzen · Slider" title="Bei welchem RR-systolisch ist die Mobilisation kontraindiziert?"
      body="Schiebe den Regler auf den richtigen Wert.">
      <div style={{ background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: '20px 16px' }}>
        <div style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, color: C.accent, marginBottom: 4, fontVariantNumeric: 'tabular-nums' }}>{val}</div>
        <div style={{ textAlign: 'center', fontSize: 12, color: C.text3, marginBottom: 16 }}>mmHg systolisch</div>
        <input type="range" min="60" max="200" value={val} onChange={e => setVal(+e.target.value)}
          style={{ width: '100%', accentColor: C.accent }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.text3, marginTop: 6 }}>
          <span>60</span><span>130</span><span>200</span>
        </div>
      </div>
      <div style={{ marginTop: 12, padding: 10, background: ok ? 'rgba(62,90,106,0.08)' : C.accentSoft, borderRadius: 8, fontSize: 12, color: C.text2 }}>
        {ok ? '✓ Im richtigen Bereich (80–100 mmHg ist Grenze)' : 'Hinweis: Werte unter 100 systolisch sind kritisch.'}
      </div>
    </StepShell>
  );
}

// =============== HOTSPOT ===============
function StepHotspot() {
  const zones = [
    { x: 30, y: 25, ok: false, label: 'Schulter' },
    { x: 50, y: 60, ok: true, label: 'Hüfte' },
    { x: 28, y: 78, ok: false, label: 'Knie' },
  ];
  const [picked, setPicked] = React.useState(null);
  return (
    <StepShell kind="Hotspot · Anatomie" title="Wo liegt die OP-Stelle?"
      body="Tippe auf die richtige Region.">
      <div style={{ position: 'relative', aspectRatio: '3/4', background: 'linear-gradient(180deg, #F5EFE5 0%, #EDE6D9 100%)', borderRadius: 12, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
        {/* Stilisierte Körper-Silhouette */}
        <svg viewBox="0 0 100 130" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <ellipse cx="50" cy="14" rx="9" ry="11" fill="#D4C8B4" />
          <path d="M 38 25 Q 36 50 40 90 L 44 120 L 50 120 L 50 25 Z" fill="#D4C8B4" />
          <path d="M 62 25 Q 64 50 60 90 L 56 120 L 50 120 L 50 25 Z" fill="#C9BCA8" />
          <path d="M 38 25 L 26 35 L 22 60 L 26 70" stroke="#C9BCA8" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M 62 25 L 74 35 L 78 60 L 74 70" stroke="#D4C8B4" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
        {zones.map((z, i) => (
          <button key={i} onClick={() => setPicked(i)}
            style={{
              position: 'absolute', left: `${z.x}%`, top: `${z.y}%`,
              transform: 'translate(-50%, -50%)',
              width: 40, height: 40, borderRadius: 20,
              background: picked === i ? (z.ok ? 'rgba(62,90,106,0.25)' : 'rgba(201,107,92,0.25)') : 'rgba(33,140,113,0.18)',
              border: `2px solid ${picked === i ? (z.ok ? '#3E5A6A' : '#C96B5C') : C.accent}`,
              cursor: 'pointer',
            }} />
        ))}
        {picked !== null && (
          <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, padding: 8, background: 'rgba(255,255,255,0.95)', borderRadius: 6, fontSize: 11, fontWeight: 600, color: zones[picked].ok ? '#3E5A6A' : '#C96B5C', textAlign: 'center' }}>
            {zones[picked].ok ? `✓ Richtig — ${zones[picked].label}` : `✗ Das ist die ${zones[picked].label}`}
          </div>
        )}
      </div>
    </StepShell>
  );
}

// =============== SWIPE ===============
function StepSwipe() {
  const cards = [
    { stmt: 'Hüfte beugen <90°', ok: true },
    { stmt: 'Beine über Mittellinie überschlagen', ok: false },
    { stmt: 'Stehen mit Stütze', ok: true },
  ];
  const [idx, setIdx] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const card = cards[idx];
  if (!card) {
    return (
      <StepShell kind="Swipe · Erlaubt/Verboten" title="Fertig">
        <div style={{ textAlign: 'center', padding: 30 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>✓</div>
          <div style={{ fontSize: 14, color: C.text2 }}>{results.filter(Boolean).length}/{cards.length} richtig sortiert</div>
        </div>
      </StepShell>
    );
  }
  function swipe(dir) {
    const correct = dir === 'right' ? card.ok : !card.ok;
    setResults([...results, correct]);
    setIdx(idx + 1);
  }
  return (
    <StepShell kind="Swipe · Erlaubt/Verboten" title="Erlaubt nach Hüft-TEP?"
      body={`Swipe rechts = erlaubt, links = verboten. Karte ${idx + 1}/${cards.length}`}>
      <div style={{ position: 'relative', height: 220, marginBottom: 14 }}>
        <div style={{
          position: 'absolute', inset: 0, padding: 24, background: C.bgWhite,
          border: `2px solid ${C.border}`, borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, fontWeight: 600, color: C.text, textAlign: 'center', lineHeight: 1.4,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}>{card.stmt}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <button onClick={() => swipe('left')} style={{ padding: 14, background: C.bgWhite, border: `1.5px solid #C96B5C`, borderRadius: 10, color: '#C96B5C', fontWeight: 600, fontFamily: F, cursor: 'pointer' }}>
          ← Verboten
        </button>
        <button onClick={() => swipe('right')} style={{ padding: 14, background: C.bgWhite, border: `1.5px solid #3E5A6A`, borderRadius: 10, color: '#3E5A6A', fontWeight: 600, fontFamily: F, cursor: 'pointer' }}>
          Erlaubt →
        </button>
      </div>
    </StepShell>
  );
}

// =============== ERROR-SPOT ===============
function StepErrorSpot() {
  const text = [
    { t: 'Frau Mertens wird ', err: false },
    { t: 'mit beiden Beinen über Kreuz', err: true, why: 'Adduktion nach Hüft-TEP verboten' },
    { t: ' aus dem Bett mobilisiert. Die Pflegekraft führt sie ', err: false },
    { t: 'auf der nicht operierten Seite', err: false },
    { t: ' und lässt sie ', err: false },
    { t: 'tief in den Stuhl sinken', err: true, why: 'Hüfte würde >90° beugen' },
    { t: '.', err: false },
  ];
  const [marked, setMarked] = React.useState(new Set());
  const [checked, setChecked] = React.useState(false);
  function toggle(i) {
    if (checked) return;
    const n = new Set(marked);
    n.has(i) ? n.delete(i) : n.add(i);
    setMarked(n);
  }
  const errors = text.filter(s => s.err).length;
  const hits = [...marked].filter(i => text[i].err).length;
  return (
    <StepShell kind="Fehler finden" title="Welche Aussagen sind falsch?"
      body="Tippe auf die fehlerhaften Stellen.">
      <div style={{ padding: 14, background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 14, lineHeight: 1.7, color: C.text }}>
        {text.map((seg, i) => {
          const m = marked.has(i);
          const showOk = checked && m && seg.err;
          const showWrong = checked && m && !seg.err;
          const showMissed = checked && !m && seg.err;
          let bg = 'transparent', col = C.text;
          if (showOk) bg = 'rgba(62,90,106,0.18)';
          else if (showWrong) { bg = 'rgba(201,107,92,0.18)'; col = '#C96B5C'; }
          else if (showMissed) bg = 'rgba(212,149,106,0.30)';
          else if (m) bg = 'rgba(160,152,144,0.30)';
          return (
            <span key={i} onClick={() => toggle(i)} style={{
              background: bg, color: col, padding: '1px 3px', borderRadius: 4,
              cursor: checked ? 'default' : 'pointer',
              textDecoration: showWrong ? 'line-through' : 'none',
            }}>{seg.t}</span>
          );
        })}
      </div>
      {checked && (
        <div style={{ marginTop: 12, padding: 12, background: hits === errors ? 'rgba(62,90,106,0.10)' : 'rgba(212,149,106,0.10)', border: `1px solid ${hits === errors ? '#3E5A6A' : C.amber}`, borderRadius: 10, fontSize: 12, color: C.text2 }}>
          <strong>{hits}/{errors} Fehler gefunden.</strong> {text.filter(s => s.err).map(s => s.why).join('. ')}.
        </div>
      )}
      {!checked && <div style={{ marginTop: 12 }}><Btn onClick={() => setChecked(true)}>Prüfen</Btn></div>}
    </StepShell>
  );
}

// =============== SORTING (drag-to-sort) ===============
function StepSorting() {
  const [order, setOrder] = React.useState(['Sitzbalance prüfen', 'An Bettrand', 'Stand', 'Erste Schritte']);
  const ROW_H = 52; // 44 + 8 gap
  const [drag, setDrag] = React.useState(null);
  // drag = { idx, startY, currentY, pointerId } | null

  function onPointerDown(e, idx) {
    e.preventDefault();
    e.target.setPointerCapture?.(e.pointerId);
    setDrag({ idx, startY: e.clientY, currentY: e.clientY, pointerId: e.pointerId });
  }
  function onPointerMove(e) {
    if (!drag) return;
    e.preventDefault();
    setDrag(d => ({ ...d, currentY: e.clientY }));
  }
  function onPointerUp() {
    if (!drag) return;
    const dy = drag.currentY - drag.startY;
    const shift = Math.round(dy / ROW_H);
    const newIdx = Math.max(0, Math.min(order.length - 1, drag.idx + shift));
    if (newIdx !== drag.idx) {
      const n = [...order];
      const [item] = n.splice(drag.idx, 1);
      n.splice(newIdx, 0, item);
      setOrder(n);
    }
    setDrag(null);
  }

  const dy = drag ? drag.currentY - drag.startY : 0;
  const shift = drag ? Math.round(dy / ROW_H) : 0;
  const dropIdx = drag ? Math.max(0, Math.min(order.length - 1, drag.idx + shift)) : -1;

  return (
    <StepShell kind="Reihenfolge" title="Bringe die Schritte der Mobilisation in die richtige Reihenfolge"
      body="Ziehe die Karten mit dem Finger an die richtige Position.">
      <div
        style={{ position: 'relative', touchAction: 'none', userSelect: 'none' }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {order.map((t, i) => {
          const isDragging = drag?.idx === i;
          let translateY = 0;
          if (drag && !isDragging) {
            // Make space: items between original idx and dropIdx shift
            if (drag.idx < dropIdx && i > drag.idx && i <= dropIdx) translateY = -ROW_H;
            else if (drag.idx > dropIdx && i < drag.idx && i >= dropIdx) translateY = ROW_H;
          }
          return (
            <div key={t}
              style={{
                position: 'relative',
                marginBottom: 8,
                transform: isDragging ? `translateY(${dy}px) scale(1.02)` : `translateY(${translateY}px)`,
                transition: isDragging ? 'none' : 'transform 0.18s ease',
                zIndex: isDragging ? 10 : 1,
              }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 12px 12px 14px',
                background: C.bgWhite,
                border: `1px solid ${isDragging ? C.accent : C.border}`,
                borderRadius: 10,
                boxShadow: isDragging ? '0 12px 28px rgba(0,0,0,0.15)' : '0 1px 0 rgba(0,0,0,0.02)',
                opacity: isDragging ? 0.96 : 1,
              }}>
                <div style={{ width: 24, height: 24, borderRadius: 12, background: C.accentSoft, color: C.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>{i + 1}</div>
                <div style={{ flex: 1, fontSize: 13, color: C.text }}>{t}</div>
                <div
                  onPointerDown={(e) => onPointerDown(e, i)}
                  style={{
                    width: 36, height: 36, marginRight: -6,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: C.text3, cursor: 'grab', touchAction: 'none',
                  }}
                  aria-label="Verschieben"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="6" cy="4" r="1.4" fill="currentColor"/>
                    <circle cx="12" cy="4" r="1.4" fill="currentColor"/>
                    <circle cx="6" cy="9" r="1.4" fill="currentColor"/>
                    <circle cx="12" cy="9" r="1.4" fill="currentColor"/>
                    <circle cx="6" cy="14" r="1.4" fill="currentColor"/>
                    <circle cx="12" cy="14" r="1.4" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StepShell>
  );
}

// =============== CATEGORIZE ===============
function StepCategorize() {
  const items = ['Wundsekret prüfen', 'Vitalzeichen', 'Mobilisation', 'Schmerz erfassen', 'Verbandwechsel'];
  const cats = [
    { name: 'Vor Mobilisation', col: C.accent },
    { name: 'Während', col: '#3E5A6A' },
    { name: 'Nach', col: C.amber },
  ];
  const [pool, setPool] = React.useState(items);
  const [sorted, setSorted] = React.useState({ 0: [], 1: [], 2: [] });
  const drop = (catIdx) => {
    if (pool.length === 0) return;
    setSorted(s => ({ ...s, [catIdx]: [...s[catIdx], pool[0]] }));
    setPool(p => p.slice(1));
  };
  return (
    <StepShell kind="Zuordnen · Kategorien" title="Sortiere die Maßnahmen">
      {pool.length > 0 && (
        <div style={{ padding: '14px 16px', background: C.accentSoft, border: `1.5px solid ${C.accent}`, borderRadius: 12, marginBottom: 10, textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>{pool.length} übrig</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{pool[0]}</div>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginBottom: 12 }}>
        {cats.map((c, i) => (
          <button key={i} onClick={() => drop(i)} disabled={pool.length === 0}
            style={{ padding: '14px 6px', background: C.bgWhite, border: `1.5px solid ${c.col}`, borderRadius: 10, fontSize: 11, fontWeight: 700, color: c.col, fontFamily: F, cursor: pool.length === 0 ? 'default' : 'pointer', opacity: pool.length === 0 ? 0.4 : 1 }}>
            {c.name}
          </button>
        ))}
      </div>
      {cats.map((cat, i) => sorted[i].length > 0 && (
        <div key={i} style={{ marginBottom: 8, padding: 10, background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: cat.col, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>{cat.name}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {sorted[i].map(t => <span key={t} style={{ fontSize: 11, padding: '4px 8px', background: C.bg, border: `1px solid ${C.border}`, borderRadius: 6 }}>{t}</span>)}
          </div>
        </div>
      ))}
    </StepShell>
  );
}

// =============== COMPARISON ===============
function StepComparison() {
  return (
    <StepShell kind="Vergleich" title="Hüft-TEP vs. Knie-TEP" body="Wichtige Unterschiede in der postoperativen Mobilisation.">
      <div style={{ background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: C.accentSoft, fontSize: 11, fontWeight: 700, color: C.accent, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          <div style={{ padding: 10 }}>Aspekt</div>
          <div style={{ padding: 10, borderLeft: `1px solid ${C.border}` }}>Hüfte</div>
          <div style={{ padding: 10, borderLeft: `1px solid ${C.border}` }}>Knie</div>
        </div>
        {[
          ['Beugung', 'max 90°', 'voll erlaubt'],
          ['Belastung', 'TB ab Tag 1', 'VB ab Tag 1'],
          ['Lagerung', 'Abduktionskissen', 'Streckschiene'],
          ['Reha-Start', 'Tag 1', 'Tag 1'],
        ].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: `1px solid ${C.border}`, fontSize: 12 }}>
            <div style={{ padding: 10, fontWeight: 600, color: C.text2 }}>{row[0]}</div>
            <div style={{ padding: 10, borderLeft: `1px solid ${C.border}`, color: C.text }}>{row[1]}</div>
            <div style={{ padding: 10, borderLeft: `1px solid ${C.border}`, color: C.text }}>{row[2]}</div>
          </div>
        ))}
      </div>
    </StepShell>
  );
}

// =============== MATRIX (2-Achsen-Zuordnung) ===============
function StepMatrix() {
  const yAxis = ['Akut', 'Chronisch'];
  const xAxis = ['Niedrig', 'Hoch'];
  const items = ['Wundinfekt', 'Diabetes', 'Sturzrisiko', 'Hypertonie'];
  const [placed, setPlaced] = React.useState({}); // item -> {x,y}
  const [sel, setSel] = React.useState(null);
  function place(x, y) {
    if (!sel) return;
    setPlaced(p => ({ ...p, [sel]: { x, y } }));
    setSel(null);
  }
  return (
    <StepShell kind="Matrix · 2 Achsen" title="Ordne nach Verlauf × Risiko"
      body="Wähle ein Element, dann eine Zelle.">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
        {items.filter(i => !placed[i]).map(i => (
          <button key={i} onClick={() => setSel(i)} style={{
            padding: '6px 10px',
            background: sel === i ? C.accent : C.bgWhite,
            color: sel === i ? '#fff' : C.text,
            border: `1px solid ${sel === i ? C.accent : C.border}`,
            borderRadius: 999, fontSize: 12, fontWeight: 600, fontFamily: F, cursor: 'pointer',
          }}>{i}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 4 }}>
        <div />
        {xAxis.map(x => <div key={x} style={{ fontSize: 10, fontWeight: 700, color: C.text3, textAlign: 'center', padding: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{x}</div>)}
        {yAxis.map((y, yi) => (
          <React.Fragment key={y}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.text3, alignSelf: 'center', textTransform: 'uppercase', letterSpacing: 0.5 }}>{y}</div>
            {xAxis.map((x, xi) => {
              const here = Object.entries(placed).filter(([_, p]) => p.x === xi && p.y === yi).map(([n]) => n);
              return (
                <button key={xi} onClick={() => place(xi, yi)} disabled={!sel}
                  style={{
                    minHeight: 70, padding: 6,
                    background: sel ? C.accentSoft : C.bgWhite,
                    border: `1px ${sel ? 'dashed' : 'solid'} ${sel ? C.accent : C.border}`,
                    borderRadius: 8, cursor: sel ? 'pointer' : 'default',
                    display: 'flex', flexDirection: 'column', gap: 3,
                  }}>
                  {here.map(n => <span key={n} style={{ fontSize: 10, padding: '3px 6px', background: C.accentSoft, color: C.accent, borderRadius: 4, fontWeight: 600 }}>{n}</span>)}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </StepShell>
  );
}

// =============== TABLE-FILL-IN ===============
function StepTableFillIn() {
  const headers = ['Phase', 'Tag', 'Mobilisation'];
  const [cells, setCells] = React.useState({ '0,1': '', '1,2': '', '2,2': '' });
  const rows = [
    ['Akut', '__1__', 'Bettkante'],
    ['Mobil.', 'Tag 2–4', '__2__'],
    ['Reha', 'ab Tag 5', '__3__'],
  ];
  const opts = ['Tag 1', 'Aufstehen + erste Schritte', 'Treppensteigen'];
  return (
    <StepShell kind="Tabelle füllen" title="Mobilisationsplan nach Hüft-TEP">
      <div style={{ background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', background: C.accentSoft, fontSize: 11, fontWeight: 700, color: C.accent, textTransform: 'uppercase' }}>
          {headers.map((h, i) => <div key={i} style={{ padding: 10, borderLeft: i ? `1px solid ${C.border}` : 'none' }}>{h}</div>)}
        </div>
        {rows.map((row, ri) => (
          <div key={ri} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', borderTop: `1px solid ${C.border}`, fontSize: 12 }}>
            {row.map((cell, ci) => {
              const blank = cell.startsWith('__');
              const k = `${ri},${ci}`;
              return (
                <div key={ci} style={{ padding: 8, borderLeft: ci ? `1px solid ${C.border}` : 'none', color: C.text }}>
                  {blank ? (
                    <div style={{ minHeight: 24, padding: '4px 6px', background: cells[k] ? C.accentSoft : '#F5EFE5', border: `1px ${cells[k] ? 'solid' : 'dashed'} ${cells[k] ? C.accent : C.text3}`, borderRadius: 4, fontSize: 11, color: C.accent, fontWeight: 600 }}>
                      {cells[k] || '—'}
                    </div>
                  ) : cell}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: C.text3, marginBottom: 6 }}>Tippe auf eine Option, um die nächste Lücke zu füllen:</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {opts.map((o, i) => {
          const used = Object.values(cells).includes(o);
          return (
            <button key={o} disabled={used} onClick={() => {
              const slots = ['0,1', '1,2', '2,2'];
              const next = slots.find(s => !cells[s]);
              if (next) setCells(c => ({ ...c, [next]: o }));
            }} style={{
              padding: '6px 10px', background: used ? '#E8DFD5' : C.accent, color: used ? C.text3 : '#fff',
              border: 'none', borderRadius: 999, fontSize: 11, fontWeight: 600, fontFamily: F, cursor: used ? 'default' : 'pointer',
            }}>{o}</button>
          );
        })}
      </div>
    </StepShell>
  );
}

// =============== WORD-ORDER (Satz bauen) ===============
function StepWordOrder() {
  const correct = ['Frau', 'Mertens', 'wird', 'auf', 'der', 'nicht', 'operierten', 'Seite', 'mobilisiert'];
  const [words] = React.useState(() => [...correct].sort(() => Math.random() - 0.5));
  const [picked, setPicked] = React.useState([]);
  const remaining = words.filter(w => {
    const total = words.filter(x => x === w).length;
    const used = picked.filter(x => x === w).length;
    return used < total;
  });
  return (
    <StepShell kind="Satzbau" title="Bringe die Wörter in die richtige Reihenfolge">
      <div style={{ minHeight: 80, padding: 12, background: C.bgWhite, border: `1.5px ${picked.length === 0 ? 'dashed' : 'solid'} ${C.border}`, borderRadius: 12, marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 6, alignContent: 'flex-start' }}>
        {picked.length === 0 ? (
          <span style={{ fontSize: 12, color: C.text3, alignSelf: 'center' }}>Tippe auf Wörter unten…</span>
        ) : picked.map((w, i) => (
          <button key={i} onClick={() => setPicked(p => p.filter((_, j) => j !== i))} style={{
            padding: '6px 10px', background: C.accent, color: '#fff', border: 'none', borderRadius: 6,
            fontSize: 13, fontWeight: 600, fontFamily: F, cursor: 'pointer',
          }}>{w}</button>
        ))}
      </div>
      <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>Verfügbare Wörter</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {remaining.map((w, i) => (
          <button key={i} onClick={() => setPicked(p => [...p, w])} style={{
            padding: '6px 10px', background: C.bgWhite, color: C.text, border: `1px solid ${C.border}`, borderRadius: 6,
            fontSize: 13, fontWeight: 500, fontFamily: F, cursor: 'pointer',
          }}>{w}</button>
        ))}
      </div>
    </StepShell>
  );
}

// =============== HIGHLIGHT (im Text markieren) ===============
function StepHighlight() {
  const segs = [
    { t: 'Bei der Übergabe nennt die Pflegekraft: ', err: false },
    { t: '„Frau Mertens, 78 J., Hüft-TEP rechts."', err: false },
    { t: ' Dann fügt sie hinzu: ', err: false },
    { t: '„War schon immer schwierig."', err: true, why: 'Wertende Bemerkung gehört nicht in die Übergabe' },
    { t: ' Vitalzeichen werden ', err: false },
    { t: 'nicht genannt', err: true, why: 'Vitalzeichen sind in SBAR Pflicht' },
    { t: ', bevor sie übergibt: ', err: false },
    { t: '„Schmerz 4/10 in Bewegung, RR 130/85."', err: false },
  ];
  const [marked, setMarked] = React.useState(new Set());
  return (
    <StepShell kind="Markieren · Highlight" title="Was passt nicht zur sachlichen Übergabe?">
      <div style={{ padding: 14, background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 14, lineHeight: 1.7 }}>
        {segs.map((s, i) => {
          const m = marked.has(i);
          return (
            <span key={i} onClick={() => {
              const n = new Set(marked);
              n.has(i) ? n.delete(i) : n.add(i);
              setMarked(n);
            }} style={{
              background: m ? 'rgba(212,149,106,0.35)' : 'transparent',
              padding: '1px 2px', borderRadius: 3, cursor: 'pointer',
            }}>{s.t}</span>
          );
        })}
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: C.text3 }}>
        {marked.size} markiert
      </div>
    </StepShell>
  );
}

// =============== LABEL-IMAGE ===============
function StepLabelImage() {
  const labels = ['Pfanne', 'Schaft', 'Kopf', 'Femur'];
  const targets = [
    { x: 32, y: 30, label: 'Pfanne' },
    { x: 50, y: 38, label: 'Kopf' },
    { x: 50, y: 60, label: 'Schaft' },
    { x: 60, y: 80, label: 'Femur' },
  ];
  const [placed, setPlaced] = React.useState({});
  const [sel, setSel] = React.useState(null);
  return (
    <StepShell kind="Bild beschriften" title="Hüftendoprothese – Komponenten">
      <div style={{ position: 'relative', aspectRatio: '4/5', background: 'linear-gradient(180deg, #F5EFE5, #EDE6D9)', borderRadius: 12, border: `1px solid ${C.border}`, overflow: 'hidden', marginBottom: 12 }}>
        <svg viewBox="0 0 100 130" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <ellipse cx="32" cy="30" rx="14" ry="10" fill="#C9BCA8" />
          <circle cx="50" cy="38" r="8" fill="#A09890" />
          <rect x="46" y="42" width="8" height="38" fill="#8A8278" />
          <rect x="42" y="80" width="16" height="40" rx="8" fill="#D4C8B4" />
        </svg>
        {targets.map((t, i) => (
          <button key={i} onClick={() => {
            if (sel) {
              setPlaced(p => ({ ...p, [i]: sel }));
              setSel(null);
            }
          }} style={{
            position: 'absolute', left: `${t.x}%`, top: `${t.y}%`, transform: 'translate(-50%,-50%)',
            padding: '4px 8px', minWidth: 30,
            background: placed[i] ? C.accent : 'rgba(255,255,255,0.9)',
            color: placed[i] ? '#fff' : C.text2,
            border: `1.5px ${placed[i] ? 'solid' : 'dashed'} ${C.accent}`,
            borderRadius: 6, fontSize: 10, fontWeight: 600, fontFamily: F, cursor: 'pointer',
          }}>{placed[i] || '?'}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {labels.filter(l => !Object.values(placed).includes(l)).map(l => (
          <button key={l} onClick={() => setSel(l)} style={{
            padding: '6px 12px',
            background: sel === l ? C.accent : C.bgWhite,
            color: sel === l ? '#fff' : C.text,
            border: `1px solid ${sel === l ? C.accent : C.border}`,
            borderRadius: 999, fontSize: 12, fontWeight: 600, fontFamily: F, cursor: 'pointer',
          }}>{l}</button>
        ))}
      </div>
    </StepShell>
  );
}

Object.assign(window, {
  MiniStepHeader, StepShell,
  StepTrueFalse, StepFillIn, StepSlider, StepHotspot, StepSwipe, StepErrorSpot,
  StepSorting, StepCategorize, StepComparison, StepMatrix, StepTableFillIn, StepWordOrder,
  StepHighlight, StepLabelImage,
});

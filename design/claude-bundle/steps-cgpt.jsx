// Step-Typen Gallery · V1 mit ChatGPT-Palette (Teal #10A37F + warm Off-White)
// Rendert alle typischen Step-Typen eines Pflege-Lern-Moduls.

const CGPT = {
  bg: '#F8F5F0', bgWhite: '#FFFFFF',
  text: '#1A1815', text2: '#4E4740', text3: '#8A8278',
  border: 'rgba(33,140,113,0.14)', borderStrong: 'rgba(26,24,21,0.10)',
  accent: '#218C71', accentSoft: 'rgba(33,140,113,0.10)',
  success: '#3E5A6A', error: '#C96B5C', amber: '#D4956A',
  m: ['#A09890', '#D4AE88', '#B8A894', '#3E5A6A', '#218C71'],
};

const FONT = "Inter, -apple-system, system-ui, sans-serif";

// Shared header across steps
function StepHeader({ title = 'Mobilisation', phase = 2, step = 4, total = 7 }) {
  const c = CGPT;
  return (
    <div style={{ padding: '10px 16px 14px', borderBottom: `1px solid ${c.borderStrong}`, background: c.bg }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontSize: 22, color: c.text2 }}>‹</div>
        <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Situation 3 · Schritt {step}/{total}</div>
        <div style={{ fontSize: 16, color: c.text2 }}>⋯</div>
      </div>
      <div style={{ display: 'flex', gap: 4, width: '100%' }}>
        {['Info', 'Plan', 'Entsch.', 'Durchf.', 'Kontr.', 'Refl.'].map((p, i) => {
          const done = i < phase, active = i === phase;
          return (
            <div key={i} style={{ flex: 1 }}>
              <div style={{
                height: 4, width: '100%', borderRadius: 999,
                background: done ? c.accent : active ? c.accent : '#E8DFD5',
                opacity: done ? 0.5 : 1,
                boxShadow: active ? `0 0 0 3px ${c.accentSoft}` : 'none',
              }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Generic step frame
function StepFrame({ kind, children }) {
  const c = CGPT;
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: FONT, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusSpacer />
      <StepHeader />
      <div style={{ flex: 1, overflow: 'auto', padding: '18px 16px 16px' }}>
        <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
          {kind}
        </div>
        {children}
      </div>
      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
        <button style={{
          width: '100%', background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: FONT,
        }}>Weiter</button>
      </div>
    </div>
  );
}

// 1. Text-Step (Info)
function StepText() {
  const c = CGPT;
  return (
    <StepFrame kind="Info · Text">
      <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>
        Schmerzerfassung vor Mobilisation
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: c.text2, marginBottom: 16 }}>
        Frau Mertens zeigt am Tag 2 nach Hüft-OP eine leichte Schonhaltung. Erfasse den Schmerz <strong style={{ color: c.text }}>in Ruhe und in Bewegung</strong> — das VAS-Protokoll liefert in unter 30&nbsp;Sekunden eine belastbare Zahl.
      </div>
      <div style={{ padding: 14, background: c.accentSoft, borderRadius: 10, borderLeft: `3px solid ${c.accent}` }}>
        <div style={{ fontSize: 10, color: c.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Merke</div>
        <div style={{ fontSize: 13, lineHeight: 1.5, color: c.text }}>
          Die Differenz zwischen Ruhe- und Bewegungsschmerz ist oft wichtiger als die absolute Zahl.
        </div>
      </div>
    </StepFrame>
  );
}

// 2. Multiple Choice
function StepMC() {
  const c = CGPT;
  const [sel, setSel] = React.useState(1);
  const opts = [
    'Transfer an die Bettkante üben',
    'Schmerzmedikation kontrollieren',
    'Vitalzeichen dokumentieren',
    'Nahrungsaufnahme anbieten',
  ];
  return (
    <StepFrame kind="Entscheiden · Multiple Choice">
      <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>
        Welche Maßnahme hat jetzt Priorität?
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {opts.map((t, i) => {
          const s = sel === i;
          return (
            <div key={i} onClick={() => setSel(i)} style={{
              background: c.bgWhite, border: `1px solid ${s ? c.accent : c.borderStrong}`,
              borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: s ? `0 0 0 3px ${c.accentSoft}` : 'none', cursor: 'pointer',
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${s ? c.accent : c.text3}`,
                background: s ? c.accent : 'transparent', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{s && <div style={{ width: 6, height: 6, borderRadius: 3, background: '#fff' }} />}</div>
              <div style={{ fontSize: 14, lineHeight: 1.35 }}>{t}</div>
            </div>
          );
        })}
      </div>
    </StepFrame>
  );
}

// 3. Confidence (Selbsteinschätzung)
function StepConfidence() {
  const c = CGPT;
  const [n, setN] = React.useState(3);
  return (
    <StepFrame kind="Selbsteinschätzung">
      <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, marginBottom: 8 }}>
        Wie sicher fühlst du dich beim Transfer?
      </div>
      <div style={{ fontSize: 13, color: c.text3, marginBottom: 24 }}>
        Nur du siehst diese Antwort.
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
        {[1, 2, 3, 4, 5].map((v) => {
          const active = n === v;
          const filled = v <= n;
          return (
            <button key={v} onClick={() => setN(v)} style={{
              flex: 1, aspectRatio: '1', borderRadius: '50%',
              border: `1.5px solid ${filled ? c.accent : c.borderStrong}`,
              background: filled ? c.accent : c.bgWhite,
              color: filled ? '#fff' : c.text3,
              fontSize: 18, fontWeight: 600, fontFamily: FONT,
              transform: active ? 'scale(1.08)' : 'scale(1)', transition: 'all 0.2s',
            }}>{v}</button>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
        <span>unsicher</span><span>sehr sicher</span>
      </div>
    </StepFrame>
  );
}

// 4. Karteikarte (Flip)
function StepFlashcard() {
  const c = CGPT;
  const [flipped, setFlipped] = React.useState(false);
  return (
    <StepFrame kind="Karteikarte · Vorderseite">
      <div onClick={() => setFlipped(!flipped)} style={{
        background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 14,
        padding: '40px 22px', minHeight: 260, cursor: 'pointer',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', boxShadow: '0 4px 20px rgba(26,24,21,0.04)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 12, right: 14, fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
          {flipped ? 'Antwort' : 'Frage'} · tippen zum Drehen
        </div>
        {!flipped ? (
          <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3 }}>
            Was bedeutet „VAS" in der Schmerz­erfassung?
          </div>
        ) : (
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: c.accent, marginBottom: 10 }}>Visuelle Analog-Skala</div>
            <div style={{ fontSize: 13, color: c.text2, lineHeight: 1.5 }}>
              Eine 10&nbsp;cm lange Linie von „kein Schmerz" bis „stärkster vorstellbarer Schmerz". Patient:in markiert subjektives Empfinden.
            </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <button style={{ flex: 1, padding: '10px', border: `1px solid ${c.borderStrong}`, background: c.bgWhite, borderRadius: 8, fontSize: 12, color: c.text2 }}>Nochmal</button>
        <button style={{ flex: 1, padding: '10px', border: `1px solid ${c.accent}`, background: c.bgWhite, borderRadius: 8, fontSize: 12, color: c.accent, fontWeight: 600 }}>Gewusst</button>
      </div>
    </StepFrame>
  );
}

// 5. Feedback (richtig/falsch)
function StepFeedback() {
  const c = CGPT;
  return (
    <StepFrame kind="Feedback · Richtig">
      <div style={{
        background: c.accentSoft, borderRadius: 14, padding: 20, marginBottom: 16,
        borderLeft: `3px solid ${c.accent}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 16, background: c.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700 }}>✓</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: c.accent }}>Richtig!</div>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: c.text }}>
          Schmerzmedikation vor der Mobilisation ist die Priorität — ohne Schmerzfreiheit wird der Transfer traumatisch erlebt.
        </div>
      </div>
      <div style={{ padding: 14, background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10 }}>
        <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.8, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
          Weiterdenken
        </div>
        <div style={{ fontSize: 13, color: c.text2, lineHeight: 1.5 }}>
          Was könnte passieren, wenn du die Mobilisation trotz VAS&nbsp;6 durchführst?
        </div>
      </div>
    </StepFrame>
  );
}

// 6. Ordering (Reihenfolge)
function StepOrder() {
  const c = CGPT;
  const items = ['Schmerz erfassen', 'Hilfsmittel bereitlegen', 'Patient informieren', 'Transfer durchführen', 'Dokumentieren'];
  return (
    <StepFrame kind="Reihenfolge · Drag to sort">
      <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>
        Bringe die Schritte in die richtige Reihenfolge:
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((t, i) => (
          <div key={i} style={{
            background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10,
            padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 26, height: 26, borderRadius: 13, background: c.accentSoft, color: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{i + 1}</div>
            <div style={{ flex: 1, fontSize: 13 }}>{t}</div>
            <div style={{ color: c.text3, fontSize: 18, letterSpacing: -2 }}>⋮⋮</div>
          </div>
        ))}
      </div>
    </StepFrame>
  );
}

// 7. Reflection (Freitext)
function StepReflect() {
  const c = CGPT;
  return (
    <StepFrame kind="Reflektion · Freitext">
      <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.35, marginBottom: 8 }}>
        Wie hast du die Situation erlebt?
      </div>
      <div style={{ fontSize: 12, color: c.text3, marginBottom: 14 }}>
        Schreibe ein paar Zeilen — das hilft dir beim nächsten Mal.
      </div>
      <div style={{
        background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10,
        padding: 14, minHeight: 140, fontSize: 13, lineHeight: 1.5, color: c.text2,
      }}>
        Frau Mertens hatte sichtlich Angst vor dem Transfer. Beim zweiten Versuch habe ich ihr erklärt,
        was wir Schritt für Schritt tun — das hat geholfen…
        <span style={{ color: c.accent, animation: 'blink 1s infinite' }}>|</span>
      </div>
      <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {['Angst', 'Vertrauen', 'Tempo', 'Kommunikation'].map((t) => (
          <span key={t} style={{
            fontSize: 11, padding: '5px 10px', borderRadius: 999,
            background: c.accentSoft, color: c.accent, fontWeight: 500,
          }}>+ {t}</span>
        ))}
      </div>
    </StepFrame>
  );
}

// 8. Video-Step
function StepVideo() {
  const c = CGPT;
  return (
    <StepFrame kind="Video · 2:14 min">
      <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 12 }}>
        Transfer ins Bett — Demonstration
      </div>
      <div style={{
        background: '#1A1815', borderRadius: 12, aspectRatio: '16/10', position: 'relative',
        backgroundImage: 'repeating-linear-gradient(135deg, #2A2520 0 10px, #1E1A17 10px 20px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 10,
      }}>
        <div style={{ width: 60, height: 60, borderRadius: 30, background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: c.text, paddingLeft: 4 }}>▶</div>
        <div style={{ position: 'absolute', bottom: 8, right: 10, fontSize: 10, color: '#fff', fontFamily: 'ui-monospace, monospace', background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: 3 }}>2:14</div>
      </div>
      <div style={{ fontSize: 12, color: c.text3, lineHeight: 1.5 }}>
        Achte besonders darauf, wie die Pflegekraft den Patienten vor jedem Schritt ankündigt.
      </div>
    </StepFrame>
  );
}

// 9. Drag-to-match (Zuordnen)
function StepMatch() {
  const c = CGPT;
  const pairs = [
    { l: 'VAS 0-3', r: 'leicht', done: true },
    { l: 'VAS 4-6', r: 'mäßig', done: true },
    { l: 'VAS 7-10', r: 'stark', done: false },
  ];
  return (
    <StepFrame kind="Zuordnen">
      <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>
        Ordne die Schmerzstärken zu:
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {pairs.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ flex: 1, padding: '12px 14px', background: c.bgWhite, border: `1px solid ${p.done ? c.accent : c.borderStrong}`, borderRadius: 10, fontSize: 13, fontWeight: 500 }}>
              {p.l}
            </div>
            <div style={{ color: p.done ? c.accent : c.text3, fontSize: 16 }}>
              {p.done ? '→' : '⋯'}
            </div>
            <div style={{ flex: 1, padding: '12px 14px', background: p.done ? c.accentSoft : c.bgWhite, border: `1px dashed ${p.done ? c.accent : c.borderStrong}`, borderRadius: 10, fontSize: 13, color: p.done ? c.accent : c.text3, fontWeight: p.done ? 600 : 400 }}>
              {p.done ? p.r : '(hierher ziehen)'}
            </div>
          </div>
        ))}
      </div>
    </StepFrame>
  );
}

// 10. Progress/Done (Abschluss)
function StepDone() {
  const c = CGPT;
  return (
    <StepFrame kind="Phase abgeschlossen">
      <div style={{ textAlign: 'center', padding: '30px 10px 20px' }}>
        <div style={{ width: 72, height: 72, margin: '0 auto 20px', borderRadius: 36, background: c.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 700 }}>✓</div>
        <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>Phase „Entscheiden" geschafft</div>
        <div style={{ fontSize: 13, color: c.text3, lineHeight: 1.5 }}>
          Du bist bei <strong style={{ color: c.text }}>3 von 6 Phasen</strong> angekommen.
        </div>
      </div>
      <div style={{ background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 12, padding: 16, marginTop: 8 }}>
        <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.8, textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Dein Fortschritt</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <div style={{ fontSize: 13 }}>Mastery in diesem Thema</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: c.accent }}>+18%</div>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: '#E8DFD5', overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', background: c.accent, borderRadius: 3 }} />
        </div>
      </div>
    </StepFrame>
  );
}

Object.assign(window, {
  CGPT, StepText, StepMC, StepConfidence, StepFlashcard, StepFeedback,
  StepOrder, StepReflect, StepVideo, StepMatch, StepDone,
});

// V1 Situation-Screen mit variabler Palette.
// Nimmt eine Palette als prop; rendert exakt das V1-Konservativ-Layout.

function V1SituationPalette({ palette }) {
  const c = palette;
  const font = "Inter, -apple-system, system-ui, sans-serif";
  const [sel, setSel] = React.useState(1);
  const opts = [
    'Transfer an die Bettkante üben',
    'Schmerzmedikation kontrollieren',
    'Vitalzeichen dokumentieren',
    'Nahrungsaufnahme anbieten',
  ];

  // Phasen bar using palette colors
  const PhasenRow = () => (
    <div style={{ display: 'flex', gap: 4, width: '100%' }}>
      {['Info', 'Plan', 'Entsch.', 'Durchf.', 'Kontr.', 'Refl.'].map((p, i) => {
        const done = i < 2;
        const active = i === 2;
        const bg = done ? c.success : active ? c.accent : '#E8DFD5';
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{
              height: 6, width: '100%', borderRadius: 999, background: bg,
              boxShadow: active ? `0 0 0 3px ${c.accent}22` : 'none',
            }} />
            <div style={{
              fontSize: 9, letterSpacing: 0.3, fontWeight: active ? 600 : 400,
              color: active ? c.accent : done ? c.success : c.text3,
            }}>{p}</div>
          </div>
        );
      })}
    </div>
  );

  // Mastery pill with palette colors
  const Mastery = ({ level = 2 }) => (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <div style={{ display: 'flex', gap: 2 }}>
        {c.m.map((col, i) => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: 999,
            background: i <= level ? col : '#E8DFD5',
          }} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: font, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusSpacer />
      {/* Sticky Header */}
      <div style={{ padding: '10px 16px 14px', background: c.bg, borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 22, color: c.text2 }}>‹</div>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Situation 3 · CE 04</div>
          <div style={{ fontSize: 16, color: c.text2 }}>⋯</div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 22, flexShrink: 0,
            background: `repeating-linear-gradient(135deg, ${c.accent}33 0 8px, ${c.accent}22 8px 16px)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 600, color: c.accent,
          }}>FM</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.25 }}>Mobilisation nach Hüft-OP</div>
            <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>Frau Mertens · Tag 2 postoperativ</div>
          </div>
        </div>
        <PhasenRow />
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto', padding: '20px 16px 20px' }}>
        <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
          Entscheiden · Schritt 4 von 7
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, marginBottom: 14, textWrap: 'pretty' }}>
          Welche Maßnahme hat jetzt Priorität?
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {opts.map((t, i) => {
            const s = sel === i;
            return (
              <div key={i} onClick={() => setSel(i)} style={{
                background: c.bgWhite, border: `1px solid ${s ? c.accent : c.borderStrong}`,
                borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: s ? `0 0 0 3px ${c.accent}22` : 'none', cursor: 'pointer',
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

        <div style={{ marginTop: 16, fontSize: 12, color: c.text3 }}>Tipp: Schmerzen hemmen die Mobilisation.</div>

        {/* Inline Mastery preview */}
        <div style={{ marginTop: 20, padding: 12, background: c.bgWhite, borderRadius: 10, border: `1px solid ${c.borderStrong}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>Dein Fortschritt</div>
            <Mastery level={2} />
          </div>
          <div style={{ fontSize: 11, color: c.success, fontWeight: 600 }}>+12%</div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
        <button style={{
          width: '100%', background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: font,
        }}>Weiter</button>
      </div>
    </div>
  );
}

// Palette swatch card — shows palette values + a name
function PaletteSwatch({ palette }) {
  const c = palette;
  return (
    <div style={{ width: '100%', padding: 16, background: c.bg, fontFamily: 'Inter, sans-serif', borderRadius: 8, border: `1px solid ${c.borderStrong}` }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: c.text, marginBottom: 2 }}>{c.name}</div>
      <div style={{ fontSize: 11, color: c.text3, marginBottom: 14 }}>{c.sub}</div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        {[c.accent, c.success].map((col, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{ height: 44, borderRadius: 6, background: col }} />
            <div style={{ fontSize: 9, color: c.text3, marginTop: 4, fontFamily: 'ui-monospace, monospace' }}>{col}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 3 }}>
        {c.m.map((col, i) => (
          <div key={i} style={{ flex: 1, height: 12, borderRadius: 6, background: col }} />
        ))}
      </div>
      <div style={{ fontSize: 9, color: c.text3, marginTop: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>Mastery</div>
    </div>
  );
}

window.V1SituationPalette = V1SituationPalette;
window.PaletteSwatch = PaletteSwatch;

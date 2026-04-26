// Variante 1 — KONSERVATIV (shadcn-nah)
// 3 Screens: CE-Übersicht, Thema-Detail, Situation-Lernseite (MC-Step)
// Support für Light + Dark via `dark` prop.

function V1Palette(dark) {
  return dark ? LERN_DARK : LERN;
}

// ─── Screen 1 · CE-Übersicht ──────────────────────────────
function V1CE({ dark = false, onOpen }) {
  const c = V1Palette(dark);
  const font = "Inter, -apple-system, system-ui, sans-serif";
  const situations = [
    { num: 1, title: 'Aufnahme postoperativ', patient: 'Herr K., 62', active: 5, done: [0, 1, 2, 3, 4] },
    { num: 2, title: 'Schmerzmanagement', patient: 'Frau M., 78', active: 3, done: [0, 1, 2] },
    { num: 3, title: 'Mobilisation & Transfer', patient: 'Frau M., 78', active: 2, done: [0, 1] },
    { num: 4, title: 'Entlassung planen', patient: 'Herr K., 62', active: -1, done: [] },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: font, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusSpacer />
      <div style={{ padding: '10px 16px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>CE 04</div>
          <div style={{ width: 24 }} />
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginTop: 10, textWrap: 'pretty' }}>
          Menschen in kritischen Lebens­situationen
        </div>
        <div style={{ fontSize: 12, color: c.text3, marginTop: 6, display: 'flex', gap: 8 }}>
          <span>32 UE</span><span>·</span><span>4 Situationen</span><span>·</span><span>12 Themen</span>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ display: 'flex', padding: '0 16px', borderBottom: `1px solid ${c.borderStrong}`, fontSize: 13 }}>
        <div style={{ padding: '10px 0', marginRight: 20, borderBottom: `2px solid ${c.rose}`, color: c.rose, fontWeight: 600 }}>Situationen</div>
        <div style={{ padding: '10px 0', color: c.text3 }}>Themen</div>
      </div>
      {/* List */}
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 16px 16px' }}>
        {situations.map((s) => (
          <div key={s.num} onClick={s.num === 3 ? onOpen : undefined} style={{
            background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 12,
            padding: 14, marginBottom: 10, cursor: s.num === 3 ? 'pointer' : 'default',
            boxShadow: s.num === 3 ? `0 0 0 2px ${c.rose}33` : 'none',
          }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
              <PhotoPlaceholder label={s.patient.split(',')[0]} w={44} h={44} style={{ borderRadius: 22, flexShrink: 0 }} dark={dark} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, color: c.rose, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600 }}>
                  Situation {String(s.num).padStart(2, '0')}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3, marginTop: 2 }}>{s.title}</div>
                <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>{s.patient}</div>
              </div>
              <MasteryPill level={Math.min(4, s.done.length)} label={false} dark={dark} />
            </div>
            <PhasenBar current={s.active} completed={s.done} compact dark={dark} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 2 · Thema-Detail (Bausteine) ──────────────────
function V1Thema({ dark = false, onOpen, onBack }) {
  const c = V1Palette(dark);
  const font = "Inter, system-ui, sans-serif";
  const bausteine = [
    { n: 1, t: 'Schmerz verstehen', m: 4 },
    { n: 2, t: 'VAS & NRS im Alltag', m: 3 },
    { n: 3, t: 'Schmerz und Bewegung', m: 2 },
    { n: 4, t: 'Medikation sicher', m: 1 },
    { n: 5, t: 'Dokumentation', m: 0 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: font, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusSpacer />
      <div style={{ padding: '10px 16px 12px', borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer' }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Thema 02</div>
          <div style={{ width: 24 }} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.25 }}>Schmerzmanagement postoperativ</div>
        <div style={{ fontSize: 12, color: c.text3, marginTop: 4 }}>5 Bausteine · ~40 min</div>
      </div>
      <div style={{ display: 'flex', padding: '0 16px', borderBottom: `1px solid ${c.borderStrong}`, fontSize: 13 }}>
        {['Bausteine', 'Glossar', 'Karteikarten'].map((t, i) => (
          <div key={t} style={{
            padding: '10px 0', marginRight: 18,
            borderBottom: i === 0 ? `2px solid ${c.rose}` : '2px solid transparent',
            color: i === 0 ? c.rose : c.text3, fontWeight: i === 0 ? 600 : 400,
          }}>{t}</div>
        ))}
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '10px 16px 16px' }}>
        {bausteine.map((b) => (
          <div key={b.n} onClick={b.n === 2 ? onOpen : undefined} style={{
            background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10,
            padding: '12px 14px', marginBottom: 8,
            display: 'flex', alignItems: 'center', gap: 12,
            cursor: b.n === 2 ? 'pointer' : 'default',
            boxShadow: b.n === 2 ? `0 0 0 2px ${c.rose}33` : 'none',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 14, flexShrink: 0,
              background: b.m >= 3 ? c.sage : b.m >= 1 ? `${c.rose}22` : dark ? '#2E2724' : '#EDE3D9',
              color: b.m >= 3 ? '#fff' : b.m >= 1 ? c.rose : c.text3,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 600,
            }}>{b.m >= 3 ? '✓' : b.n}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3 }}>{b.t}</div>
              <div style={{ marginTop: 4 }}><MasteryPill level={b.m} dark={dark} /></div>
            </div>
            <div style={{ color: c.text3, fontSize: 16 }}>›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 3 · Situation-Lernseite · MC-Step ─────────────
function V1Situation({ dark = false, onBack }) {
  const c = V1Palette(dark);
  const font = "Inter, system-ui, sans-serif";
  const [sel, setSel] = React.useState(1);
  const opts = [
    'Transfer an die Bettkante üben',
    'Schmerzmedikation kontrollieren',
    'Vitalzeichen dokumentieren',
    'Nahrungsaufnahme anbieten',
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: font, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusSpacer />
      <div style={{ padding: '10px 16px 14px', background: c.bg, borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer' }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Situation 3 · CE 04</div>
          <button style={{ background: 'transparent', border: 'none', fontSize: 16, color: c.text2 }}>⋯</button>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
          <PhotoPlaceholder label="Frau M." w={44} h={44} dark={dark} style={{ borderRadius: 22, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.25 }}>Mobilisation nach Hüft-OP</div>
            <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>Frau Mertens · Tag 2 postoperativ</div>
          </div>
        </div>
        <PhasenBar current={2} completed={[0, 1]} dark={dark} />
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '20px 16px 20px' }}>
        <div style={{ fontSize: 10, color: c.rose, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
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
                background: c.bgWhite, border: `1px solid ${s ? c.rose : c.borderStrong}`,
                borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: s ? `0 0 0 3px ${c.rose}22` : 'none', cursor: 'pointer',
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${s ? c.rose : c.text3}`,
                  background: s ? c.rose : 'transparent', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{s && <div style={{ width: 6, height: 6, borderRadius: 3, background: '#fff' }} />}</div>
                <div style={{ fontSize: 14, lineHeight: 1.35 }}>{t}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 16, fontSize: 12, color: c.text3 }}>Tipp: Schmerzen hemmen die Mobilisation.</div>
      </div>
      <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
        <button style={{
          width: '100%', background: c.rose, color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: font, cursor: 'pointer',
        }}>Weiter</button>
      </div>
    </div>
  );
}

// Simple hash-based router inside each artboard
function V1App({ dark = false, start = 'ce' }) {
  const [screen, setScreen] = React.useState(start);
  if (screen === 'ce') return <V1CE dark={dark} onOpen={() => setScreen('thema')} />;
  if (screen === 'thema') return <V1Thema dark={dark} onOpen={() => setScreen('situation')} onBack={() => setScreen('ce')} />;
  return <V1Situation dark={dark} onBack={() => setScreen('thema')} />;
}

Object.assign(window, { V1CE, V1Thema, V1Situation, V1App });

// Variante 2 — EDITORIAL SERIF
// 3 Screens: CE-Übersicht (Magazin), Thema-Detail, Situation mit Text-Step (3-Stufen-Switcher)

function V2Palette(dark) { return dark ? LERN_DARK : LERN; }
const V2_SERIF = "'Fraunces', Georgia, serif";
const V2_SANS = "'Inter', system-ui, sans-serif";

// ─── Screen 1 · CE-Übersicht (Magazin Masthead) ───────────
function V2CE({ dark = false, onOpen }) {
  const c = V2Palette(dark);
  const situations = [
    { num: '01', title: 'Aufnahme postoperativ', patient: 'Herr K., 62', active: 5, done: [0, 1, 2, 3, 4], m: 4 },
    { num: '02', title: 'Schmerzmanagement', patient: 'Frau M., 78', active: 3, done: [0, 1, 2], m: 3 },
    { num: '03', title: 'Mobilisation & Transfer', patient: 'Frau M., 78', active: 2, done: [0, 1], m: 2 },
    { num: '04', title: 'Entlassung planen', patient: 'Herr K., 62', active: -1, done: [], m: 0 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: V2_SANS }}>
      <StatusSpacer />
      <div style={{ padding: '10px 20px 14px', borderBottom: `2px solid ${c.text}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <div style={{ fontFamily: V2_SERIF, fontSize: 11, fontStyle: 'italic', color: c.text2 }}>Curriculare Einheit</div>
          <div style={{ fontSize: 10, letterSpacing: 1.5, color: c.text3, fontVariantNumeric: 'tabular-nums' }}>N° 04 · 32 UE</div>
        </div>
        <div style={{ fontFamily: V2_SERIF, fontSize: 26, lineHeight: 1.02, fontWeight: 400, letterSpacing: -0.8, textWrap: 'balance' }}>
          Menschen in kritischen Lebens­situationen
        </div>
        <div style={{ fontSize: 11, color: c.text3, marginTop: 8, display: 'flex', gap: 8 }}>
          <span>4 Situationen</span><span>·</span><span>12 Themen</span>
          <span>·</span><span style={{ color: c.sage, fontWeight: 600 }}>2 abgeschlossen</span>
        </div>
      </div>
      <div style={{ display: 'flex', borderBottom: `1px solid ${c.borderStrong}`, padding: '0 20px', fontSize: 12 }}>
        <div style={{ padding: '12px 0', marginRight: 22, borderBottom: `2px solid ${c.rose}`, color: c.rose, fontWeight: 600 }}>Situationen</div>
        <div style={{ padding: '12px 0', color: c.text3 }}>Themen</div>
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        {situations.map((s, i) => (
          <div key={s.num} onClick={s.num === '03' ? onOpen : undefined} style={{
            padding: '16px 20px',
            borderBottom: i < situations.length - 1 ? `1px solid ${c.border}` : 'none',
            display: 'flex', gap: 14, cursor: s.num === '03' ? 'pointer' : 'default',
            background: s.num === '03' ? (dark ? 'rgba(196,135,127,0.06)' : '#FFFBF7') : 'transparent',
          }}>
            <div style={{ flexShrink: 0, width: 36 }}>
              <div style={{ fontFamily: V2_SERIF, fontSize: 22, fontStyle: 'italic', color: c.rose, lineHeight: 1 }}>{s.num}</div>
              <div style={{ marginTop: 6 }}><MasteryPill level={s.m} label={false} dark={dark} /></div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: V2_SERIF, fontSize: 17, fontWeight: 500, lineHeight: 1.2, marginBottom: 4, textWrap: 'pretty' }}>{s.title}</div>
              <div style={{ fontSize: 11, color: c.text3, marginBottom: 8 }}>
                <span>{s.patient}</span>
                {s.active >= 0 && <><span> · </span><span style={{ color: c.rose }}>{PHASES_FULL[s.active]}</span></>}
              </div>
              <PhasenBar current={s.active} completed={s.done} compact dark={dark} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 20px 18px', borderTop: `1px solid ${c.borderStrong}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Zuletzt: Situation 03</div>
        <button style={{
          background: c.text, color: c.bg, border: 'none', borderRadius: 999,
          padding: '10px 18px', fontSize: 12, fontWeight: 600, fontFamily: V2_SANS,
        }}>Weiterlernen →</button>
      </div>
    </div>
  );
}

// ─── Screen 2 · Thema-Detail ──────────────────────────────
function V2Thema({ dark = false, onOpen, onBack }) {
  const c = V2Palette(dark);
  const bausteine = [
    { n: 1, t: 'Schmerz verstehen', m: 4 },
    { n: 2, t: 'VAS & NRS im Alltag', m: 3 },
    { n: 3, t: 'Schmerz & Mobilisation', m: 2 },
    { n: 4, t: 'Medikation sicher', m: 1 },
    { n: 5, t: 'Dokumentation', m: 0 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: V2_SANS }}>
      <StatusSpacer />
      <div style={{ padding: '8px 20px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div onClick={onBack} style={{ fontSize: 20, color: c.text2, cursor: 'pointer' }}>←</div>
          <div style={{ fontSize: 10, letterSpacing: 1.5, color: c.text3 }}>THEMA 02 · SITUATION 03</div>
          <div style={{ width: 20 }} />
        </div>
        <div style={{ fontFamily: V2_SERIF, fontStyle: 'italic', fontSize: 10, color: c.text3, letterSpacing: 0.5 }}>Thema</div>
        <div style={{ fontFamily: V2_SERIF, fontSize: 24, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.5, marginTop: 2, textWrap: 'pretty' }}>
          Schmerzmanagement postoperativ
        </div>
        <div style={{ fontSize: 11, color: c.text3, marginTop: 8, display: 'flex', gap: 8 }}>
          <span>5 Bausteine</span><span>·</span><span>~40 min</span>
        </div>
      </div>
      <div style={{ display: 'flex', padding: '0 20px', borderBottom: `1px solid ${c.borderStrong}`, fontSize: 12 }}>
        {['Bausteine', 'Glossar', 'Karteikarten'].map((t, i) => (
          <div key={t} style={{
            padding: '10px 0', marginRight: 20,
            borderBottom: i === 0 ? `2px solid ${c.rose}` : '2px solid transparent',
            color: i === 0 ? c.rose : c.text3, fontWeight: i === 0 ? 600 : 400,
          }}>{t}</div>
        ))}
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '10px 20px 20px' }}>
        {bausteine.map((b) => (
          <div key={b.n} onClick={b.n === 2 ? onOpen : undefined} style={{
            padding: '14px 0',
            borderBottom: `1px solid ${c.border}`,
            display: 'flex', alignItems: 'center', gap: 12,
            cursor: b.n === 2 ? 'pointer' : 'default',
          }}>
            <div style={{ fontFamily: V2_SERIF, fontSize: 18, fontStyle: 'italic', color: b.m >= 3 ? c.sage : b.m >= 1 ? c.rose : c.text3, width: 22, lineHeight: 1 }}>
              {String(b.n).padStart(2, '0')}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: V2_SERIF, fontSize: 15, fontWeight: 500, lineHeight: 1.3 }}>{b.t}</div>
              <div style={{ marginTop: 4 }}><MasteryPill level={b.m} dark={dark} /></div>
            </div>
            <div style={{ color: c.text3, fontSize: 16 }}>›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 3 · Situation · Text-Step (3 Stufen) ──────────
function V2Situation({ dark = false, onBack }) {
  const c = V2Palette(dark);
  const [stage, setStage] = React.useState(1);
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: V2_SANS }}>
      <StatusSpacer />
      <div style={{ padding: '8px 20px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div onClick={onBack} style={{ fontSize: 20, color: c.text2, cursor: 'pointer' }}>←</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <PhasenSpiral current={2} completed={[0, 1]} size={32} dark={dark} />
            <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.8, textTransform: 'uppercase' }}>3 / 6</div>
          </div>
        </div>
        <div style={{ fontSize: 10, color: c.rose, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>
          Situation · Mobilisation
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 20px 20px' }}>
        <div style={{ background: c.bgWhite, borderRadius: 16, padding: 22, border: `1px solid ${c.border}`, marginBottom: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: c.text3, marginBottom: 10 }}>
            Baustein 2 · Schmerz & Mobilisation
          </div>
          {stage === 0 && (
            <>
              <div style={{ fontFamily: V2_SERIF, fontSize: 24, lineHeight: 1.18, fontWeight: 400, letterSpacing: -0.3, marginBottom: 16, textWrap: 'pretty' }}>
                Warum ist die Schmerzerfassung <em style={{ color: c.rose, fontStyle: 'italic' }}>vor</em> der Mobilisation entscheidend?
              </div>
              <div style={{ fontSize: 13, color: c.text3, lineHeight: 1.5 }}>
                Denke kurz nach, bevor du weiter gehst.
              </div>
            </>
          )}
          {stage === 1 && (
            <>
              <div style={{ fontFamily: V2_SERIF, fontSize: 20, lineHeight: 1.25, fontWeight: 400, marginBottom: 14 }}>Ein Hinweis</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: c.text2, textWrap: 'pretty' }}>
                Denke an das VAS-Protokoll. Was passiert mit der Muskel­spannung, wenn die Patientin Schmerzen erwartet?
              </div>
              <div style={{ marginTop: 16, padding: 14, borderLeft: `3px solid ${c.sage}`, background: dark ? 'rgba(107,143,113,0.08)' : '#6B8F7108', borderRadius: 4, fontSize: 12, color: c.text2, fontStyle: 'italic', lineHeight: 1.5 }}>
                „Antizipatorische Schmerzen sind bei post-OP-Patient:innen häufig unterschätzt."
              </div>
            </>
          )}
          {stage === 2 && (
            <>
              <div style={{ fontFamily: V2_SERIF, fontSize: 20, lineHeight: 1.25, fontWeight: 400, marginBottom: 14 }}>Die Erklärung</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: c.text2 }}>
                Schmerz über VAS&nbsp;4 führt zu reflektorischer Schonhaltung. Die Muskulatur bleibt angespannt, der Transfer misslingt oder wird traumatisch erlebt. Erfasse deshalb <strong style={{ color: c.text }}>immer vor jeder Mobilisation</strong>.
              </div>
            </>
          )}
          <div style={{ display: 'flex', gap: 6, marginTop: 22, paddingTop: 14, borderTop: `1px dashed ${c.border}` }}>
            {['Denkfrage', 'Hinweis', 'Erklärung'].map((l, i) => (
              <button key={i} onClick={() => setStage(i)} style={{
                flex: 1, padding: '8px 4px', borderRadius: 8, border: 'none',
                background: stage === i ? c.text : 'transparent',
                color: stage === i ? c.bg : c.text3,
                fontSize: 11, fontFamily: V2_SANS, fontWeight: 500, cursor: 'pointer',
              }}>{l}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: c.text3 }}>
          <MasteryPill level={2} dark={dark} />
          <span>Baustein 2 / 5</span>
        </div>
      </div>
      <div style={{ padding: '10px 20px 18px', display: 'flex', gap: 10 }}>
        <button style={{ flex: 1, background: 'transparent', border: `1px solid ${c.borderStrong}`, borderRadius: 999, padding: '13px', fontSize: 13, color: c.text2, fontFamily: V2_SANS }}>Zurück</button>
        <button style={{ flex: 2, background: c.text, color: c.bg, border: 'none', borderRadius: 999, padding: '13px', fontSize: 13, fontWeight: 600, fontFamily: V2_SANS }}>Nächster Baustein →</button>
      </div>
    </div>
  );
}

function V2App({ dark = false, start = 'ce' }) {
  const [screen, setScreen] = React.useState(start);
  if (screen === 'ce') return <V2CE dark={dark} onOpen={() => setScreen('thema')} />;
  if (screen === 'thema') return <V2Thema dark={dark} onOpen={() => setScreen('situation')} onBack={() => setScreen('ce')} />;
  return <V2Situation dark={dark} onBack={() => setScreen('thema')} />;
}

Object.assign(window, { V2CE, V2Thema, V2Situation, V2App });

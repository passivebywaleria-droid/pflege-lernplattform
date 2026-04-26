// V1 · Situation-Flow — eine Situation als Sequenz mehrerer Step-Typen.
// Verwendet die Step-Komponenten-Logik aus steps-cgpt.jsx, aber mit echtem
// Schritt-für-Schritt-State, Phasen-Progress, Sticky-Header (Patient + 6 Phasen)
// und Weiter-Button, der den Flow voranbringt.

(function () {
  const C = (typeof CGPT !== 'undefined') ? CGPT : null;
  const FNT = "Inter, -apple-system, system-ui, sans-serif";

  // Flow-Definition — 7 Schritte verteilt auf die Phasen "Informieren → Entscheiden"
  // (Pflege-Spirale). Phase-Index 0..5: Info, Plan, Entsch., Durchf., Kontr., Refl.
  const FLOW = [
    { id: 'intro',      phase: 0, kind: 'Informieren · Text',           render: renderIntro },
    { id: 'flashcard',  phase: 0, kind: 'Karteikarte',                   render: renderFlashcard },
    { id: 'order',      phase: 1, kind: 'Planen · Reihenfolge',          render: renderOrder },
    { id: 'mc',         phase: 2, kind: 'Entscheiden · Multiple Choice', render: renderMC },
    { id: 'feedback',   phase: 2, kind: 'Feedback · Richtig',            render: renderFeedback, ctaLabel: 'Weiter' },
    { id: 'confidence', phase: 5, kind: 'Reflektieren · Selbsteinschätzung', render: renderConfidence },
    { id: 'done',       phase: 5, kind: 'Phase abgeschlossen',           render: renderDone, ctaLabel: 'Zum Thema' },
  ];

  // ─── Sticky Header (Patient + 6-Phasen-Bar) ─────────────
  function FlowHeader({ phase, step, total, onBack }) {
    const c = C;
    return (
      <div style={{ padding: '10px 16px 14px', background: c.bg, borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer', padding: 0 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            Situation 3 · Schritt {step}/{total}
          </div>
          <div style={{ fontSize: 16, color: c.text2 }}>⋯</div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
          <PhotoPlaceholder label="Frau M." w={40} h={40} style={{ borderRadius: 20, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.25 }}>Mobilisation nach Hüft-OP</div>
            <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>Frau Mertens · Tag 2 postoperativ</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, width: '100%' }}>
          {['Info', 'Plan', 'Entsch.', 'Durchf.', 'Kontr.', 'Refl.'].map((p, i) => {
            const done = i < phase, active = i === phase;
            return (
              <div key={i} style={{
                flex: 1, height: 4, borderRadius: 999,
                background: done || active ? c.accent : '#E8DFD5',
                opacity: done ? 0.45 : 1,
                boxShadow: active ? `0 0 0 3px ${c.accentSoft}` : 'none',
              }} />
            );
          })}
        </div>
      </div>
    );
  }

  // ─── Step renderers ─────────────────────────────────────
  function renderIntro() {
    const c = C;
    return (
      <div>
        <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>
          Schmerz erfassen vor Mobilisation
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: c.text2, marginBottom: 16 }}>
          Frau Mertens zeigt am Tag 2 nach Hüft-OP eine leichte Schonhaltung. Erfasse den Schmerz <strong style={{ color: c.text }}>in Ruhe und in Bewegung</strong> — die VAS liefert in unter 30&nbsp;Sekunden eine belastbare Zahl.
        </div>
        <div style={{ padding: 14, background: c.accentSoft, borderRadius: 10, borderLeft: `3px solid ${c.accent}` }}>
          <div style={{ fontSize: 10, color: c.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Merke</div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: c.text }}>
            Die Differenz zwischen Ruhe- und Bewegungsschmerz ist oft wichtiger als die absolute Zahl.
          </div>
        </div>
      </div>
    );
  }

  function renderFlashcard(state, set) {
    const c = C;
    const flipped = !!state.flipped;
    return (
      <div>
        <div onClick={() => set({ flipped: !flipped })} style={{
          background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 14,
          padding: '36px 22px', minHeight: 220, cursor: 'pointer',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', boxShadow: '0 4px 20px rgba(26,24,21,0.04)', position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: 12, right: 14, fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            {flipped ? 'Antwort' : 'Frage'} · tippen
          </div>
          {!flipped ? (
            <div style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3 }}>
              Was bedeutet „VAS" in der Schmerz­erfassung?
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: c.accent, marginBottom: 10 }}>Visuelle Analog-Skala</div>
              <div style={{ fontSize: 13, color: c.text2, lineHeight: 1.5 }}>
                Eine 10&nbsp;cm lange Linie von „kein Schmerz" bis „stärkster vorstellbarer Schmerz".
              </div>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <button onClick={() => set({ rating: 'again' })} style={pillBtn(c, state.rating === 'again')}>Nochmal</button>
          <button onClick={() => set({ rating: 'got' })} style={pillBtn(c, state.rating === 'got', true)}>Gewusst</button>
        </div>
      </div>
    );
  }

  function pillBtn(c, active, primary) {
    return {
      flex: 1, padding: '11px',
      border: `1px solid ${active ? c.accent : c.borderStrong}`,
      background: active && primary ? c.accentSoft : c.bgWhite,
      borderRadius: 9, fontSize: 12, fontFamily: FNT,
      color: active ? c.accent : c.text2,
      fontWeight: active ? 600 : 500,
      cursor: 'pointer',
    };
  }

  function renderOrder(state, set) {
    const c = C;
    const items = state.items || ['Schmerz erfassen', 'Hilfsmittel bereitlegen', 'Patient informieren', 'Transfer durchführen', 'Dokumentieren'];
    function move(i, dir) {
      const j = i + dir;
      if (j < 0 || j >= items.length) return;
      const next = items.slice();
      [next[i], next[j]] = [next[j], next[i]];
      set({ items: next });
    }
    return (
      <div>
        <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>
          Bringe die Schritte in die richtige Reihenfolge:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((t, i) => (
            <div key={t} style={{
              background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10,
              padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 24, height: 24, borderRadius: 12, background: c.accentSoft, color: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{i + 1}</div>
              <div style={{ flex: 1, fontSize: 13 }}>{t}</div>
              <button onClick={() => move(i, -1)} style={arrowBtn(c)}>↑</button>
              <button onClick={() => move(i, +1)} style={arrowBtn(c)}>↓</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  function arrowBtn(c) {
    return {
      width: 26, height: 26, borderRadius: 13, border: `1px solid ${c.borderStrong}`,
      background: 'transparent', color: c.text2, fontSize: 12, cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
    };
  }

  function renderMC(state, set) {
    const c = C;
    const sel = state.sel ?? null;
    const opts = [
      'Transfer an die Bettkante üben',
      'Schmerzmedikation kontrollieren',
      'Vitalzeichen dokumentieren',
      'Nahrungsaufnahme anbieten',
    ];
    return (
      <div>
        <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>
          Welche Maßnahme hat jetzt Priorität?
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {opts.map((t, i) => {
            const s = sel === i;
            return (
              <div key={i} onClick={() => set({ sel: i })} style={{
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
        <div style={{ marginTop: 14, fontSize: 12, color: c.text3 }}>Tipp: Schmerzen hemmen die Mobilisation.</div>
      </div>
    );
  }

  function renderFeedback() {
    const c = C;
    return (
      <div>
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
      </div>
    );
  }

  function renderConfidence(state, set) {
    const c = C;
    const n = state.n ?? 3;
    return (
      <div>
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
              <button key={v} onClick={() => set({ n: v })} style={{
                flex: 1, aspectRatio: '1', borderRadius: '50%',
                border: `1.5px solid ${filled ? c.accent : c.borderStrong}`,
                background: filled ? c.accent : c.bgWhite,
                color: filled ? '#fff' : c.text3,
                fontSize: 18, fontWeight: 600, fontFamily: FNT,
                transform: active ? 'scale(1.08)' : 'scale(1)', transition: 'all 0.2s',
                cursor: 'pointer',
              }}>{v}</button>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
          <span>unsicher</span><span>sehr sicher</span>
        </div>
      </div>
    );
  }

  function renderDone() {
    const c = C;
    return (
      <div>
        <div style={{ textAlign: 'center', padding: '24px 10px 16px' }}>
          <div style={{ width: 64, height: 64, margin: '0 auto 18px', borderRadius: 32, background: c.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700 }}>✓</div>
          <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>Situation geschafft</div>
          <div style={{ fontSize: 13, color: c.text3, lineHeight: 1.5 }}>
            Du hast alle 6 Phasen der Pflege-Spirale durchlaufen.
          </div>
        </div>
        <div style={{ background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 12, padding: 16, marginTop: 8 }}>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.8, textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Dein Fortschritt</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div style={{ fontSize: 13 }}>Mastery in „Schmerzmanagement"</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: c.accent }}>+18%</div>
          </div>
          <div style={{ height: 6, borderRadius: 3, background: '#E8DFD5', overflow: 'hidden' }}>
            <div style={{ width: '62%', height: '100%', background: c.accent, borderRadius: 3 }} />
          </div>
        </div>
      </div>
    );
  }

  // ─── Container ─────────────────────────────────────────
  function V1SituationFlow({ start = 0, onBack }) {
    const c = C;
    const [i, setI] = React.useState(start);
    const [stateMap, setStateMap] = React.useState({});
    const node = FLOW[i];
    const stepState = stateMap[node.id] || {};
    const setStepState = (patch) => setStateMap((m) => ({ ...m, [node.id]: { ...(m[node.id] || {}), ...patch } }));

    return (
      <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: FNT, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <StatusSpacer />
        <FlowHeader phase={node.phase} step={i + 1} total={FLOW.length} onBack={onBack} />
        <div style={{ flex: 1, overflow: 'auto', padding: '18px 16px 20px' }}>
          <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>
            {node.kind}
          </div>
          {node.render(stepState, setStepState)}
        </div>
        <div style={{ padding: '12px 16px 20px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}`, display: 'flex', gap: 10 }}>
          {i > 0 && (
            <button onClick={() => setI(i - 1)} style={{
              padding: '14px 18px', background: 'transparent', color: c.text2,
              border: `1px solid ${c.borderStrong}`, borderRadius: 10,
              fontSize: 14, fontWeight: 500, fontFamily: FNT, cursor: 'pointer',
            }}>Zurück</button>
          )}
          <button onClick={() => setI(Math.min(FLOW.length - 1, i + 1))} style={{
            flex: 1, background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
            padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: FNT, cursor: 'pointer',
          }}>{node.ctaLabel || 'Weiter'}</button>
        </div>
      </div>
    );
  }

  Object.assign(window, { V1SituationFlow, FLOW });
})();

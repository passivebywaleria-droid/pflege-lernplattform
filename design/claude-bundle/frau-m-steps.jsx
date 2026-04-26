// Frau-M.-Step-Renderer · ChatGPT-Palette · Mobile 390×780
// Zeigt 9 Snapshots aus den 6 Phasen der Lernsituation.

(function () {
  const C = (typeof CGPT !== 'undefined') ? CGPT : null;
  const FNT = "Inter, -apple-system, system-ui, sans-serif";

  // ── Sticky Header ──────────────────────────────
  function FrauMHeader({ phase, step, total, fall }) {
    const c = C;
    return (
      <div style={{ padding: '10px 16px 12px', background: c.bg, borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 22, color: c.text2 }}>‹</div>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            CE 02 · Sit. Frau M. · {step}/{total}
          </div>
          <div style={{ fontSize: 16, color: c.text2 }}>⋯</div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
          <PhotoPlaceholder label="Frau M." w={38} h={38} style={{ borderRadius: 19, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.25 }}>Marianne M., 82 · nächtl. Sturz</div>
            <div style={{ fontSize: 10, color: c.text3, marginTop: 1 }}>{FRAUM.patient.context}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, width: '100%' }}>
          {FRAUM.phaseTitlesShort.map((p, i) => {
            const done = i < phase, active = i === phase;
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <div style={{
                  height: 3, borderRadius: 999,
                  background: done || active ? c.accent : '#E8DFD5',
                  opacity: done ? 0.45 : 1,
                }} />
                <div style={{ fontSize: 8, color: active ? c.accent : c.text3, fontWeight: active ? 600 : 400, textAlign: 'center', letterSpacing: 0.2 }}>{p}</div>
              </div>
            );
          })}
        </div>
        {fall && (
          <div style={{ marginTop: 10, padding: '8px 10px', background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 8, fontSize: 11, color: c.text2, lineHeight: 1.4 }}>
            <span style={{ color: c.text3, fontWeight: 600, textTransform: 'uppercase', fontSize: 9, letterSpacing: 0.6, marginRight: 6 }}>Fall</span>
            {fall}
          </div>
        )}
      </div>
    );
  }

  function StepShell({ data, children, cta = 'Weiter' }) {
    const c = C;
    return (
      <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: FNT, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <StatusSpacer />
        <FrauMHeader phase={data.phase} step={data.step} total={data.total} fall={data.fall} />
        <div style={{ flex: 1, overflow: 'auto', padding: '16px 16px 20px' }}>
          <div style={{ fontSize: 9, color: c.accent, letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>
            {data.kind}
          </div>
          {children}
        </div>
        <div style={{ padding: '10px 16px 18px', background: c.bgWhite, borderTop: `1px solid ${c.borderStrong}` }}>
          <button style={{
            width: '100%', background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
            padding: '13px', fontSize: 14, fontWeight: 600, fontFamily: FNT,
          }}>{cta}</button>
        </div>
      </div>
    );
  }

  // ── 0 Szene · Phase-Intro ─────────────────────
  function FrauMScene() {
    const c = C, d = STEP_SCENE;
    return (
      <StepShell data={d} cta="In Zimmer 14 gehen">
        {/* Stimmungsbild-Platzhalter */}
        <div style={{
          borderRadius: 12, overflow: 'hidden', marginBottom: 16,
          aspectRatio: '16/9', position: 'relative',
          background: 'linear-gradient(180deg, #1A1410 0%, #2A1F18 60%, #3A2A1F 100%)',
          backgroundImage: 'repeating-linear-gradient(135deg, rgba(212,174,136,0.06) 0 8px, transparent 8px 16px), linear-gradient(180deg, #1A1410 0%, #2A1F18 60%, #3A2A1F 100%)',
        }}>
          {/* warmes Licht-Rechteck */}
          <div style={{ position: 'absolute', left: '60%', top: 0, bottom: 0, width: '20%', background: 'linear-gradient(90deg, transparent 0%, rgba(212,149,106,0.25) 50%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 10, fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: 'ui-monospace, monospace', letterSpacing: 0.5 }}>
            FLUR · 02:48 · NOTBELEUCHTUNG
          </div>
          <div style={{ position: 'absolute', top: 8, right: 10, fontSize: 18, color: '#D4956A', opacity: 0.6 }}>◐</div>
        </div>

        {/* Zeit-Setting Kapitel-Marker */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', marginBottom: 14 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: c.accent, fontVariantNumeric: 'tabular-nums', letterSpacing: -0.5 }}>{d.time}</div>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>{d.setting}</div>
        </div>

        <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginBottom: 14, textWrap: 'pretty', letterSpacing: -0.3 }}>
          {d.title}
        </div>

        {/* Erzähltext — erste Zeile mit etwas mehr Gewicht */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: c.text2 }}>
          {d.paragraphs.map((p, i) => (
            <div key={i} style={{
              marginBottom: 12,
              fontStyle: i === 0 ? 'normal' : 'normal',
              color: i === 0 ? c.text : c.text2,
              fontWeight: i === 0 ? 500 : 400,
            }}>
              {p}
            </div>
          ))}
        </div>

        {/* Meta-Block */}
        <div style={{ marginTop: 18, padding: 14, background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10 }}>
          {d.meta.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '6px 0', borderTop: i ? `1px solid ${c.borderStrong}` : 'none' }}>
              <div style={{ fontSize: 9, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 700, width: 64, flexShrink: 0, paddingTop: 2 }}>{m.l}</div>
              <div style={{ fontSize: 12, color: c.text, lineHeight: 1.4, flex: 1 }}>{m.v}</div>
            </div>
          ))}
        </div>

        {/* Phase-Footer */}
        <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '4px 9px', borderRadius: 999, background: c.accentSoft, color: c.accent, fontWeight: 600 }}>{d.bloom}</span>
          <span style={{ fontSize: 10, padding: '4px 9px', borderRadius: 999, background: c.accentSoft, color: c.accent, fontWeight: 600 }}>{d.steps} Schritte</span>
          <span style={{ fontSize: 10, padding: '4px 9px', borderRadius: 999, background: c.accentSoft, color: c.accent, fontWeight: 600 }}>{d.duration}</span>
        </div>
      </StepShell>
    );
  }

  // ── 1.1 SBAR ─────────────────────────────────
  function FrauMSBAR() {
    const c = C, d = STEP_SBAR;
    return (
      <StepShell data={d}>
        <div style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3, marginBottom: 12 }}>{d.title}</div>
        <div style={{ fontSize: 13, lineHeight: 1.55, color: c.text2, marginBottom: 14, fontStyle: 'italic' }}>
          {d.body}
        </div>
        <div style={{ background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '8px 12px', background: c.accentSoft, fontSize: 9, fontWeight: 700, color: c.accent, letterSpacing: 1, textTransform: 'uppercase' }}>SBAR-Struktur</div>
          {d.sbar.map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 12px', borderTop: i ? `1px solid ${c.borderStrong}` : 'none', alignItems: 'center' }}>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: c.accent, color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.l}</div>
              <div style={{ fontSize: 12, color: c.text, lineHeight: 1.4 }}>{row.t}</div>
            </div>
          ))}
        </div>
      </StepShell>
    );
  }

  // ── 1.2 Selfrating ────────────────────────────
  function FrauMConfidence() {
    const c = C, d = STEP_CONFIDENCE;
    const [n, setN] = React.useState(2);
    return (
      <StepShell data={d}>
        <div style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{d.title}</div>
        <div style={{ fontSize: 12, color: c.text3, marginBottom: 18, lineHeight: 1.5 }}>{d.sub}</div>
        <div style={{ fontSize: 13, color: c.text, marginBottom: 18, lineHeight: 1.5, fontWeight: 500 }}>{d.question}</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          {[1, 2, 3, 4, 5].map((v) => {
            const filled = v <= n;
            const active = n === v;
            return (
              <button key={v} onClick={() => setN(v)} style={{
                flex: 1, aspectRatio: '1', borderRadius: '50%',
                border: `1.5px solid ${filled ? c.accent : c.borderStrong}`,
                background: filled ? c.accent : c.bgWhite,
                color: filled ? '#fff' : c.text3,
                fontSize: 17, fontWeight: 600, fontFamily: FNT,
                transform: active ? 'scale(1.08)' : 'scale(1)', transition: 'all 0.2s',
              }}>{v}</button>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
          <span>unsicher</span><span>sehr sicher</span>
        </div>
        <div style={{ marginTop: 18, padding: 12, background: c.accentSoft, borderRadius: 8, fontSize: 11, color: c.text2, lineHeight: 1.5 }}>
          Nur du siehst diese Antwort — sie hilft uns, die nächsten Schritte für dich anzupassen.
        </div>
      </StepShell>
    );
  }

  // ── 1.3 MC ─────────────────────────────────────
  function FrauMMC() {
    const c = C, d = STEP_MC;
    const [sel, setSel] = React.useState(d.selected);
    return (
      <StepShell data={d}>
        <div style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>{d.title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {d.options.map((o, i) => {
            const s = sel === i;
            return (
              <div key={i} onClick={() => setSel(i)} style={{
                background: c.bgWhite, border: `1px solid ${s ? c.accent : c.borderStrong}`,
                borderRadius: 10, padding: '11px 13px', display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: s ? `0 0 0 3px ${c.accentSoft}` : 'none', cursor: 'pointer',
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${s ? c.accent : c.text3}`,
                  background: s ? c.accent : 'transparent', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{s && <div style={{ width: 6, height: 6, borderRadius: 3, background: '#fff' }} />}</div>
                <div style={{ fontSize: 13, lineHeight: 1.35 }}>{o.t}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 14, fontSize: 11, color: c.text3, fontStyle: 'italic' }}>{d.hint}</div>
      </StepShell>
    );
  }

  // ── 1.4 Dialog ────────────────────────────────
  function FrauMDialog() {
    const c = C, d = STEP_DIALOG;
    return (
      <StepShell data={d}>
        <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 10 }}>{d.title}</div>
        <div style={{ fontSize: 12, color: c.text3, marginBottom: 12, lineHeight: 1.5 }}>{d.context}</div>
        <div style={{
          background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 14,
          padding: '12px 14px', marginBottom: 16, position: 'relative',
          borderTopLeftRadius: 4,
        }}>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>Frau M.</div>
          <div style={{ fontSize: 13, color: c.text, lineHeight: 1.5 }}>{d.patientLine}</div>
        </div>
        <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>Deine Antwort</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {d.options.map((o, i) => (
            <div key={i} style={{
              background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10,
              padding: '11px 13px', fontSize: 12, color: c.text2, lineHeight: 1.45, cursor: 'pointer',
            }}>
              {o.t}
            </div>
          ))}
        </div>
      </StepShell>
    );
  }

  // ── 1.5 Sorting ───────────────────────────────
  function FrauMSort() {
    const c = C, d = STEP_SORT;
    return (
      <StepShell data={d}>
        <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 14 }}>{d.title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {d.items.map((t, i) => (
            <div key={i} style={{
              background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10,
              padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 24, height: 24, borderRadius: 12, background: c.accentSoft, color: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{i + 1}</div>
              <div style={{ flex: 1, fontSize: 12, lineHeight: 1.35 }}>{t}</div>
              <div style={{ color: c.text3, fontSize: 16, letterSpacing: -2 }}>⋮⋮</div>
            </div>
          ))}
        </div>
      </StepShell>
    );
  }

  // ── 2.1 Highlight ─────────────────────────────
  function FrauMHighlight() {
    const c = C, d = STEP_HIGHLIGHT;
    return (
      <StepShell data={d}>
        <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{d.title}</div>
        <div style={{ fontSize: 12, color: c.text3, marginBottom: 14, lineHeight: 1.5 }}>{d.sub}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {d.meds.map((m, i) => (
            <div key={i} style={{
              background: m.flagged ? (m.primary ? c.accentSoft : `${c.accent}10`) : c.bgWhite,
              border: `1px ${m.flagged ? 'solid' : 'solid'} ${m.flagged ? c.accent : c.borderStrong}`,
              borderRadius: 9, padding: '10px 12px',
              boxShadow: m.primary ? `0 0 0 2px ${c.accent}33` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: m.flagged ? c.accent : c.text }}>{m.name}</div>
                  <div style={{ fontSize: 10, color: c.text3, marginTop: 2 }}>{m.dose}</div>
                </div>
                {m.flagged && (
                  <div style={{ fontSize: 9, fontWeight: 700, color: c.accent, padding: '2px 6px', background: c.bgWhite, border: `1px solid ${c.accent}`, borderRadius: 999, whiteSpace: 'nowrap' }}>
                    {m.primary ? '★ markiert' : 'markiert'}
                  </div>
                )}
              </div>
              {m.flagged && m.reason && (
                <div style={{ fontSize: 10, color: c.text2, marginTop: 6, lineHeight: 1.4, paddingLeft: 0 }}>
                  → {m.reason}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, fontSize: 10, color: c.text3, fontStyle: 'italic' }}>
          4 von 5 markiert · Hauptauslöser identifiziert
        </div>
      </StepShell>
    );
  }

  // ── 2.4 Categorize ────────────────────────────
  function FrauMCategorize() {
    const c = C, d = STEP_CATEGORIZE;
    return (
      <StepShell data={d}>
        <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{d.title}</div>
        <div style={{ fontSize: 11, color: c.text3, marginBottom: 14, lineHeight: 1.5 }}>{d.sub}</div>
        {d.buckets.map((b, bi) => (
          <div key={bi} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 9, color: c.accent, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              {b.name === 'intrinsisch' ? '↳ in Frau M.' : '↳ in der Umgebung'}
            </div>
            <div style={{ background: c.accentSoft, borderRadius: 10, padding: 8, display: 'flex', flexWrap: 'wrap', gap: 6, border: `1px dashed ${c.accent}55` }}>
              {b.items.map((it, i) => (
                <div key={i} style={{
                  background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 8,
                  padding: '6px 10px', fontSize: 11, color: c.text,
                }}>{it}</div>
              ))}
            </div>
          </div>
        ))}
      </StepShell>
    );
  }

  // ── 4.3 Branching ─────────────────────────────
  function FrauMBranching() {
    const c = C, d = STEP_BRANCHING;
    const tone = (t) => t === 'good' ? c.accent : t === 'warn' ? c.amber : c.error;
    const toneSoft = (t) => t === 'good' ? c.accentSoft : t === 'warn' ? `${c.amber}1A` : `${c.error}1A`;
    return (
      <StepShell data={d} cta="Pfad A wählen">
        <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{d.title}</div>
        <div style={{ fontSize: 11, color: c.text3, marginBottom: 14, lineHeight: 1.5 }}>{d.sub}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {d.paths.map((p, i) => (
            <div key={i} style={{
              background: c.bgWhite, border: `1px solid ${tone(p.tone)}55`, borderRadius: 12, padding: 12,
              boxShadow: p.tone === 'good' ? `0 0 0 2px ${c.accent}22` : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <div style={{ width: 24, height: 24, borderRadius: 12, background: toneSoft(p.tone), color: tone(p.tone), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>{p.l}</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: tone(p.tone), letterSpacing: 0.8, textTransform: 'uppercase' }}>{p.tag}</div>
              </div>
              <div style={{ fontSize: 12, color: c.text, lineHeight: 1.45 }}>{p.t}</div>
            </div>
          ))}
        </div>
      </StepShell>
    );
  }

  // ── 6.x Sturzprotokoll ────────────────────────
  function FrauMProtocol() {
    const c = C, d = STEP_PROTOCOL;
    return (
      <StepShell data={d} cta="Speichern">
        <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{d.title}</div>
        <div style={{ fontSize: 11, color: c.text3, marginBottom: 14, lineHeight: 1.5 }}>{d.sub}</div>
        <div style={{ background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 10, overflow: 'hidden' }}>
          {d.fields.map((f, i) => (
            <div key={i} style={{ padding: '10px 12px', borderTop: i ? `1px solid ${c.borderStrong}` : 'none' }}>
              <div style={{ fontSize: 9, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>{f.l}</div>
              <div style={{ fontSize: 12, color: c.text, lineHeight: 1.45 }}>{f.v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, fontSize: 10, color: c.text3, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: c.accent }} />
          Pflichtfelder vollständig · Auto-Saved
        </div>
      </StepShell>
    );
  }

  // ── 6 Done ────────────────────────────────────
  function FrauMDone() {
    const c = C, d = STEP_DONE;
    return (
      <StepShell data={d} cta="Zur Situation-Übersicht">
        <div style={{ textAlign: 'center', padding: '20px 10px 10px' }}>
          <div style={{ width: 60, height: 60, margin: '0 auto 16px', borderRadius: 30, background: c.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 700 }}>✓</div>
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>{d.title}</div>
          <div style={{ fontSize: 12, color: c.text3, lineHeight: 1.5 }}>{d.sub}</div>
        </div>
        <div style={{ background: c.bgWhite, border: `1px solid ${c.borderStrong}`, borderRadius: 12, marginTop: 16, overflow: 'hidden' }}>
          {d.stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px', borderTop: i ? `1px solid ${c.borderStrong}` : 'none' }}>
              <div style={{ fontSize: 12, color: c.text2 }}>{s.l}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: c.accent, fontVariantNumeric: 'tabular-nums' }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: 12, background: c.accentSoft, borderRadius: 10, fontSize: 11, color: c.text2, lineHeight: 1.5 }}>
          <div style={{ fontSize: 9, color: c.accent, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 4 }}>Gelernt</div>
          {d.trigger}
        </div>
      </StepShell>
    );
  }

  Object.assign(window, {
    FrauMScene, FrauMSBAR, FrauMConfidence, FrauMMC, FrauMDialog, FrauMSort,
    FrauMHighlight, FrauMCategorize, FrauMBranching, FrauMProtocol, FrauMDone,
  });
})();

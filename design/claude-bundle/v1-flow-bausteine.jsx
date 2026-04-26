// V1-Flow MIT WISSENSBAUSTEINEN
// Vollständiger Flow: CE → Thema (Baustein-Liste) → Baustein-Intro → Step-Walkthrough → Baustein-Abschluss
// Nutzt die ChatGPT-Palette (CGPT) und die in bausteine.jsx + steps-cgpt.jsx + steps-extra-1.jsx definierten Komponenten.

const VFC = window.CGPT;
const VFF = "Inter, -apple-system, system-ui, sans-serif";

// ─────────────────────────────────────────────
// CE-Übersicht (ChatGPT-Palette, neu — ersetzt V1CE für den neuen Flow)
// ─────────────────────────────────────────────
function V1CE_CGPT({ onOpenThema }) {
  const c = VFC;
  const themen = [
    { nr: '01', titel: 'Postoperative Aufnahme', situationen: 2, bausteine: 4, mastery: 4 },
    { nr: '02', titel: 'Schmerzmanagement postoperativ', situationen: 3, bausteine: 5, mastery: 2, current: true },
    { nr: '03', titel: 'Mobilisation & Transfer', situationen: 2, bausteine: 4, mastery: 1 },
    { nr: '04', titel: 'Entlassung planen', situationen: 1, bausteine: 3, mastery: 0 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: VFF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '10px 16px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, padding: 0 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>CE 04</div>
          <div style={{ width: 24 }} />
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginTop: 10, textWrap: 'pretty' }}>
          Menschen in kritischen Lebens­situationen
        </div>
        <div style={{ fontSize: 12, color: c.text3, marginTop: 6, display: 'flex', gap: 8 }}>
          <span>32 UE</span><span>·</span><span>4 Themen</span><span>·</span><span>16 Bausteine</span>
        </div>
      </div>
      <div style={{ display: 'flex', padding: '0 16px', borderBottom: `1px solid ${c.borderStrong}`, fontSize: 13 }}>
        <div style={{ padding: '10px 0', marginRight: 22, borderBottom: `2px solid ${c.accent}`, color: c.accent, fontWeight: 600 }}>Themen</div>
        <div style={{ padding: '10px 0', color: c.text3 }}>Situationen</div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 16px 16px' }}>
        {themen.map(t => (
          <div key={t.nr} onClick={t.current ? onOpenThema : undefined} style={{
            background: c.bgWhite, border: `1px solid ${t.current ? c.accent : c.borderStrong}`, borderRadius: 12,
            padding: '14px', marginBottom: 10, cursor: t.current ? 'pointer' : 'default',
            boxShadow: t.current ? `0 0 0 3px ${c.accentSoft}` : 'none',
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ position: 'relative', width: 38, height: 38, flexShrink: 0 }}>
                <window.MasteryRing level={t.mastery} size={38} />
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: t.mastery >= 3 ? window.MASTERY_COLORS[t.mastery] : c.text2,
                }}>{t.mastery >= 3 ? '✓' : t.nr}</div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600 }}>
                  Thema {t.nr}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3, marginTop: 2 }}>{t.titel}</div>
                <div style={{ fontSize: 11, color: c.text3, marginTop: 4 }}>
                  {t.situationen} Situationen · {t.bausteine} Bausteine · {window.MASTERY_LABELS[t.mastery]}
                </div>
              </div>
              <div style={{ color: c.text3, fontSize: 16 }}>›</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Step-Walkthrough — kompakter Wrapper, der durch die Steps eines Bausteins führt
// Mit Sticky-Header (Patient + Phasen-Progress + Schritt-Indikator)
// ─────────────────────────────────────────────
function StepWalkthrough({ baustein, onComplete, onBack }) {
  const c = VFC;
  const b = baustein;
  // Konkrete Step-Komponenten pro Baustein. Alle aus steps-cgpt.jsx / steps-extra-1.jsx
  // Die Liste hat 5 Steps (Reihenfolge fest, demo-zwecke).
  const STEPS = [
    { kind: 'Text · Info',                    Comp: window.StepText,        phase: 0, label: 'Informieren' },
    { kind: 'Multiple Choice',                Comp: window.StepMC,          phase: 2, label: 'Entscheiden' },
    { kind: 'Wahr / Falsch',                  Comp: window.StepTrueFalse,   phase: 2, label: 'Entscheiden' },
    { kind: 'Slider · Wert schätzen',         Comp: window.StepSlider,      phase: 4, label: 'Kontrollieren' },
    { kind: 'Reflektion',                     Comp: window.StepReflect,     phase: 5, label: 'Reflektieren' },
  ].filter(s => s.Comp);

  const [idx, setIdx] = React.useState(0);
  const step = STEPS[idx];
  const isLast = idx >= STEPS.length - 1;

  // Wir rendern den eigenen Header + den Step-Body. Der Step-Comp bringt aber auch einen Header mit
  // (StepShell rendert MiniStepHeader). Um Doppel-Header zu vermeiden, blenden wir den ersten
  // Header-Block des Step-Comp via override aus: wir nutzen einen Wrapper-Container ohne StatusSpacer.
  //
  // Pragmatischer Weg: Wir geben den Step seinen eigenen Frame und stellen einen kleinen
  // Sticky-Indikator OBEN drüber (Patient + Phasen + Step-X/Y). Da die StepShell selbst
  // einen Mini-Header hat, ersetzen wir den per Overlay-Trick: wir hängen das Step-Component
  // in einen Container und überlagern unseren eigenen Header oben. Das ergibt visuell EINEN
  // konsistenten Header, weil der Step-Mini-Header darunter abgeschnitten wird (CSS).
  //
  // Eleganter: wir rendern den Step in einem Container, dessen erste 50px (der Step-Header)
  // per negativem margin-top weggeschnitten werden. Der Step bleibt voll funktional.

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: VFF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      <window.StatusSpacer />
      {/* Sticky-Header — Patient + Phasen + Step-Counter */}
      <div style={{ padding: '10px 16px 12px', background: c.bg, borderBottom: `1px solid ${c.borderStrong}`, zIndex: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer', padding: 0 }}>‹</button>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            Baustein {b.nr} · {idx + 1}/{STEPS.length}
          </div>
          <button style={{ background: 'transparent', border: 'none', fontSize: 16, color: c.text2 }}>⋯</button>
        </div>
        {/* Patient */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
          <window.PhotoPlaceholder label="Frau M." w={36} h={36} style={{ borderRadius: 18, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.25, color: c.text }}>
              {b.titel}
            </div>
            <div style={{ fontSize: 10, color: c.text3, marginTop: 1 }}>
              Frau Mertens · Tag 2 postoperativ
            </div>
          </div>
        </div>
        {/* 6-Phasen-Bar */}
        <div style={{ display: 'flex', gap: 4 }}>
          {['Info', 'Plan', 'Entsch.', 'Durchf.', 'Kontr.', 'Refl.'].map((p, i) => {
            const done = i < step.phase;
            const active = i === step.phase;
            return (
              <div key={i} style={{ flex: 1 }}>
                <div style={{
                  height: 4, width: '100%', borderRadius: 999,
                  background: done || active ? c.accent : '#E8DFD5',
                  opacity: done ? 0.5 : 1,
                  boxShadow: active ? `0 0 0 3px ${c.accentSoft}` : 'none',
                }} />
                {active && (
                  <div style={{ fontSize: 9, color: c.accent, marginTop: 2, textAlign: 'center', fontWeight: 600 }}>
                    {p}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Step-Counter Dots */}
        <div style={{ display: 'flex', gap: 4, marginTop: 10, justifyContent: 'center' }}>
          {STEPS.map((_, i) => (
            <div key={i} style={{
              width: i === idx ? 18 : 5, height: 5, borderRadius: 999,
              background: i <= idx ? c.accent : '#E8DFD5',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      {/* Step-Body — Step-Component in Clipping-Container, der den Step-eigenen Mini-Header schluckt */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        {/* Marker oben: zeigt Step-Typ */}
        <div style={{
          position: 'absolute', top: 8, left: 16, zIndex: 3,
          fontSize: 9, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600,
          background: c.bg, padding: '2px 6px', borderRadius: 4,
        }}>{step.kind}</div>

        {/* Step in eigenem Container — der Step bringt seinen eigenen Frame.
            Wir setzen den Step in einen scrollbaren Container und blenden seinen Mini-Header
            aus, indem wir den Container clipping-mäßig um die Header-Höhe nach oben verschieben. */}
        <div key={idx} style={{
          flex: 1, position: 'relative', overflow: 'hidden',
          // Step-Komponenten bringen StatusSpacer + MiniStepHeader (≈ 44 + 76 = 120px). Wegschneiden:
          marginTop: -120,
        }}>
          <step.Comp />
        </div>
      </div>

      {/* Bottom-Controls — überschreiben den step-eigenen "Weiter"-Button mit Walkthrough-Logik.
          Da der Step bereits einen "Weiter"-Button im Footer hat, decken wir den per absoluter
          Positionierung mit unserem eigenen Footer ab. */}
      <div style={{
        padding: '12px 16px 20px', background: c.bgWhite,
        borderTop: `1px solid ${c.borderStrong}`,
        display: 'flex', gap: 8,
        position: 'relative', zIndex: 5,
      }}>
        <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} style={{
          flex: '0 0 auto', padding: '14px 18px',
          background: 'transparent',
          color: idx === 0 ? c.text3 : c.accent,
          border: `1.5px solid ${idx === 0 ? c.borderStrong : c.accent}`,
          borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: VFF,
          cursor: idx === 0 ? 'default' : 'pointer',
        }}>Zurück</button>
        <button onClick={() => isLast ? onComplete() : setIdx(idx + 1)} style={{
          flex: 1, background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px', fontSize: 15, fontWeight: 600, fontFamily: VFF, cursor: 'pointer',
        }}>{isLast ? 'Baustein abschließen' : 'Weiter'}</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Hauptflow — V1 mit Bausteinen
// CE → Thema (Baustein-Liste) → Intro → StepWalkthrough → Abschluss → zurück zu Thema
// ─────────────────────────────────────────────
function V1AppWithBausteine({ start = 'ce' }) {
  const [screen, setScreen] = React.useState(start);
  const [activeBaustein, setActiveBaustein] = React.useState(window.BAUSTEINE_DATA[2]);

  if (screen === 'ce') {
    return <V1CE_CGPT onOpenThema={() => setScreen('thema')} />;
  }
  if (screen === 'thema') {
    return <window.ThemaMitBausteinen
      focusId={activeBaustein.id}
      onOpen={(b) => { setActiveBaustein(b); setScreen('intro'); }}
      onBack={() => setScreen('ce')}
    />;
  }
  if (screen === 'intro') {
    return <window.BausteinIntro
      baustein={activeBaustein}
      onStart={() => setScreen('walkthrough')}
      onBack={() => setScreen('thema')}
    />;
  }
  if (screen === 'walkthrough') {
    return <StepWalkthrough
      baustein={activeBaustein}
      onComplete={() => setScreen('abschluss')}
      onBack={() => setScreen('intro')}
    />;
  }
  return <window.BausteinAbschluss
    baustein={activeBaustein}
    fromMastery={Math.max(0, activeBaustein.mastery - 1)}
    toMastery={Math.min(4, activeBaustein.mastery + 1)}
    onBack={() => setScreen('thema')}
    onNext={() => {
      const next = window.BAUSTEINE_DATA.find(x => x.id === activeBaustein.id + 1);
      if (next) { setActiveBaustein(next); setScreen('intro'); }
      else setScreen('thema');
    }}
  />;
}

// Standalone-Wrappers für DesignCanvas (jeder Screen einzeln)
function V1CECgpt() { return <V1CE_CGPT />; }
function V1StepWalkthroughDemo() {
  return <StepWalkthrough baustein={window.BAUSTEINE_DATA[2]} onComplete={() => {}} onBack={() => {}} />;
}

Object.assign(window, {
  V1CE_CGPT, V1CECgpt, StepWalkthrough, V1StepWalkthroughDemo, V1AppWithBausteine,
});

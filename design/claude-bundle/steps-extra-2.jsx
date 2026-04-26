// Fehlende Step-Typen — Teil 2: Connect, Talk, Calc, Special
// ChatGPT-Palette · Inter · Mechanik wie Live-Repo

const C2 = window.CGPT;
const F2 = "Inter, -apple-system, system-ui, sans-serif";
const Shell = window.StepShell;

// =============== MEMORY ===============
function StepMemory() {
  const pairs = [
    ['VAS', 'Schmerzskala'],
    ['NRS', 'Numerisch 0–10'],
    ['BPS', 'Verhaltensbeob.'],
  ];
  const cards = React.useMemo(() => {
    const all = pairs.flatMap((p, i) => [
      { id: `a${i}`, text: p[0], pair: i },
      { id: `b${i}`, text: p[1], pair: i },
    ]);
    return all.sort(() => Math.random() - 0.5);
  }, []);
  const [flipped, setFlipped] = React.useState(new Set());
  const [matched, setMatched] = React.useState(new Set());
  function flip(id) {
    if (matched.has(id) || flipped.has(id)) return;
    const open = [...flipped].filter(x => !matched.has(x));
    if (open.length >= 2) return;
    const next = new Set(flipped); next.add(id);
    setFlipped(next);
    if (open.length === 1) {
      const first = cards.find(c => c.id === open[0]);
      const second = cards.find(c => c.id === id);
      if (first.pair === second.pair) {
        setTimeout(() => setMatched(m => new Set([...m, first.id, second.id])), 400);
      } else {
        setTimeout(() => {
          setFlipped(f => {
            const n = new Set(f); n.delete(open[0]); n.delete(id); return n;
          });
        }, 900);
      }
    }
  }
  return (
    <Shell kind="Memory · Paare" title="Finde die passenden Begriffe"
      body="Tippe zwei Karten, um sie umzudrehen.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {cards.map(c => {
          const isOpen = flipped.has(c.id) || matched.has(c.id);
          const isMatched = matched.has(c.id);
          return (
            <button key={c.id} onClick={() => flip(c.id)} style={{
              aspectRatio: '3/4',
              background: isMatched ? 'rgba(62,90,106,0.10)' : isOpen ? C2.bgWhite : C2.accent,
              color: isMatched ? '#3E5A6A' : isOpen ? C2.text : '#fff',
              border: `1.5px solid ${isMatched ? '#3E5A6A' : isOpen ? C2.border : C2.accent}`,
              borderRadius: 10, fontSize: 13, fontWeight: 600, fontFamily: F2,
              cursor: isOpen ? 'default' : 'pointer',
              padding: 6, textAlign: 'center', lineHeight: 1.2,
            }}>
              {isOpen ? c.text : '?'}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 12, textAlign: 'center', fontSize: 11, color: C2.text3 }}>
        {matched.size / 2} von {pairs.length} Paaren
      </div>
    </Shell>
  );
}

// =============== CONCEPT-MAP ===============
function StepConceptMap() {
  const nodes = [
    { id: 'a', x: 50, y: 18, t: 'Hüft-TEP' },
    { id: 'b', x: 18, y: 55, t: 'Mobilisation' },
    { id: 'c', x: 82, y: 55, t: 'Schmerz' },
    { id: 'd', x: 50, y: 88, t: 'Heilung' },
  ];
  const labels = ['fördert', 'reduziert', 'voraussetzt'];
  const [sel, setSel] = React.useState(null); // {from, label}
  const [edges, setEdges] = React.useState([]);
  function tap(id) {
    if (!sel) return;
    if (sel.from === id) return;
    setEdges([...edges, { from: sel.from, to: id, label: sel.label }]);
    setSel(null);
  }
  return (
    <Shell kind="Concept-Map" title="Verbinde die Begriffe"
      body="Wähle Start, Verb, dann Ziel.">
      <div style={{ position: 'relative', aspectRatio: '1', background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: 12, marginBottom: 10 }}>
        <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {edges.map((e, i) => {
            const a = nodes.find(n => n.id === e.from);
            const b = nodes.find(n => n.id === e.to);
            return (
              <g key={i}>
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={C2.accent} strokeWidth="0.6" />
                <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2} fontSize="3.5" fill={C2.accent} fontWeight="600" textAnchor="middle">{e.label}</text>
              </g>
            );
          })}
        </svg>
        {nodes.map(n => (
          <button key={n.id} onClick={() => sel ? tap(n.id) : setSel({ from: n.id })}
            style={{
              position: 'absolute', left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)',
              padding: '6px 10px',
              background: sel?.from === n.id ? C2.accent : C2.bgWhite,
              color: sel?.from === n.id ? '#fff' : C2.text,
              border: `1.5px solid ${C2.accent}`, borderRadius: 999,
              fontSize: 11, fontWeight: 600, fontFamily: F2, cursor: 'pointer',
            }}>{n.t}</button>
        ))}
      </div>
      {sel && !sel.label && (
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: C2.text3, alignSelf: 'center' }}>Verb:</span>
          {labels.map(l => (
            <button key={l} onClick={() => setSel({ ...sel, label: l })} style={{
              padding: '4px 10px', background: C2.accentSoft, color: C2.accent,
              border: `1px solid ${C2.accent}`, borderRadius: 999, fontSize: 11, fontWeight: 600, fontFamily: F2, cursor: 'pointer',
            }}>{l}</button>
          ))}
        </div>
      )}
    </Shell>
  );
}

// =============== TIMELINE ===============
function StepTimeline() {
  const ev = [
    { time: 'Tag 0', title: 'OP', desc: 'Hüft-TEP rechts implantiert' },
    { time: 'Tag 1', title: 'Erstmobilisation', desc: 'An der Bettkante, mit Pflege' },
    { time: 'Tag 3', title: 'Stehen + Gehen', desc: 'Mit Gehhilfe, kurze Strecken' },
    { time: 'Tag 7', title: 'Treppensteigen', desc: 'Mit Anleitung' },
    { time: 'Wo. 6', title: 'Vollbelastung', desc: 'Routinekontrolle Röntgen' },
  ];
  return (
    <Shell kind="Zeitleiste" title="Postoperativer Verlauf">
      <div style={{ position: 'relative', paddingLeft: 28 }}>
        <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: C2.border }} />
        {ev.map((e, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: 16 }}>
            <div style={{ position: 'absolute', left: -24, top: 4, width: 14, height: 14, borderRadius: 7, background: C2.accent, border: `3px solid ${C2.bg}`, boxShadow: `0 0 0 2px ${C2.accent}` }} />
            <div style={{ fontSize: 10, fontWeight: 700, color: C2.accent, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>{e.time}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: C2.text, marginBottom: 2 }}>{e.title}</div>
            <div style={{ fontSize: 12, color: C2.text2, lineHeight: 1.4 }}>{e.desc}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

// =============== DIAGRAM (Flow-Chart) ===============
function StepDiagram() {
  return (
    <Shell kind="Diagramm" title="Entscheidungsbaum: Mobilisation freigeben?">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, fontFamily: F2 }}>
        <DiagBox c={C2} kind="root">RR &gt; 100/60?</DiagBox>
        <DiagArrow c={C2} />
        <div style={{ display: 'flex', gap: 30, alignSelf: 'stretch', justifyContent: 'space-around' }}>
          <DiagBranch c={C2} label="Ja">
            <DiagBox c={C2} kind="ok">Schmerz &lt; 5?</DiagBox>
            <DiagArrow c={C2} />
            <DiagBox c={C2} kind="leaf">Mobil. starten</DiagBox>
          </DiagBranch>
          <DiagBranch c={C2} label="Nein">
            <DiagBox c={C2} kind="warn">Arzt informieren</DiagBox>
          </DiagBranch>
        </div>
      </div>
    </Shell>
  );
}
function DiagBox({ c, kind, children }) {
  const map = {
    root: { bg: c.accent, col: '#fff' },
    ok: { bg: c.bgWhite, col: c.text, b: c.accent },
    warn: { bg: 'rgba(212,149,106,0.15)', col: c.amber, b: c.amber },
    leaf: { bg: 'rgba(62,90,106,0.12)', col: '#3E5A6A', b: '#3E5A6A' },
  }[kind] || {};
  return (
    <div style={{ padding: '8px 14px', background: map.bg, color: map.col, border: map.b ? `1.5px solid ${map.b}` : 'none', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>
      {children}
    </div>
  );
}
function DiagArrow({ c }) {
  return <div style={{ width: 1, height: 12, background: c.text3 }} />;
}
function DiagBranch({ c, label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
      <div style={{ fontSize: 10, color: c.text3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
      {children}
    </div>
  );
}

// =============== REVEAL (Karten nacheinander aufdecken) ===============
function StepReveal() {
  const cards = [
    { icon: '👀', label: 'Beobachtung', detail: 'Patient zeigt Schonhaltung, vermeidet Belastung der re. Hüfte.' },
    { icon: '🩺', label: 'Befund', detail: 'VAS 6/10 in Bewegung, in Ruhe 3/10.' },
    { icon: '💊', label: 'Maßnahme', detail: 'Bedarfsmedikation, Mobilisation pausieren bis VAS &lt; 4.' },
  ];
  const [shown, setShown] = React.useState(0);
  return (
    <Shell kind="Reveal · Schritt für Schritt" title="Klinischer Blick: vom Sehen zum Handeln">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {cards.map((c, i) => {
          const visible = i <= shown;
          return (
            <div key={i} style={{
              padding: 14, background: visible ? C2.bgWhite : '#F0E9DC',
              border: `1px solid ${visible ? C2.border : '#E0D7C5'}`, borderRadius: 12,
              opacity: visible ? 1 : 0.5, transition: 'opacity 0.3s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: visible ? 6 : 0 }}>
                <div style={{ fontSize: 20 }}>{visible ? c.icon : '🔒'}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C2.accent, textTransform: 'uppercase', letterSpacing: 0.5 }}>{c.label}</div>
              </div>
              {visible && <div style={{ fontSize: 13, color: C2.text2, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: c.detail }} />}
            </div>
          );
        })}
      </div>
      {shown < cards.length - 1 && (
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setShown(shown + 1)} style={{
            width: '100%', padding: 12, background: C2.accentSoft, color: C2.accent,
            border: `1.5px solid ${C2.accent}`, borderRadius: 10, fontSize: 13, fontWeight: 600, fontFamily: F2, cursor: 'pointer',
          }}>Nächste Karte aufdecken</button>
        </div>
      )}
    </Shell>
  );
}

// =============== DIALOG (mit Patient) ===============
function StepDialog() {
  const lines = [
    { who: 'Patient', text: 'Ich habe so Angst aufzustehen. Was ist, wenn ich falle?' },
    { who: 'Du', opts: [
      'Keine Sorge, das wird schon.',
      'Das verstehe ich. Wir gehen es Schritt für Schritt an, ich bleibe bei Ihnen.',
      'Die meisten Patienten schaffen es problemlos.',
    ], correct: 1 },
  ];
  const [picked, setPicked] = React.useState(null);
  return (
    <Shell kind="Dialog · Frau Mertens" title="Wie reagierst du?">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ alignSelf: 'flex-start', maxWidth: '85%', padding: '10px 14px', background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: '14px 14px 14px 4px', fontSize: 13, color: C2.text }}>
          {lines[0].text}
        </div>
        <div style={{ fontSize: 10, color: C2.text3, marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Deine Antwort:</div>
        {lines[1].opts.map((o, i) => {
          const isPicked = picked === i;
          const showCorrect = picked !== null && i === lines[1].correct;
          const showWrong = isPicked && i !== lines[1].correct;
          return (
            <button key={i} onClick={() => setPicked(i)} disabled={picked !== null} style={{
              alignSelf: 'flex-end', maxWidth: '85%', textAlign: 'left',
              padding: '10px 14px',
              background: showCorrect ? 'rgba(62,90,106,0.12)' : showWrong ? 'rgba(201,107,92,0.12)' : isPicked ? C2.accent : C2.accentSoft,
              color: showCorrect ? '#3E5A6A' : showWrong ? '#C96B5C' : isPicked ? '#fff' : C2.accent,
              border: `1px solid ${showCorrect ? '#3E5A6A' : showWrong ? '#C96B5C' : C2.accent}`,
              borderRadius: '14px 14px 4px 14px', fontSize: 13, fontWeight: 500, fontFamily: F2, cursor: 'pointer',
            }}>{o}{showCorrect && ' ✓'}{showWrong && ' ✗'}</button>
          );
        })}
      </div>
    </Shell>
  );
}

// =============== CHAT-SIM (offene KI-Konversation) ===============
function StepChatSim() {
  const [msgs, setMsgs] = React.useState([
    { who: 'p', text: 'Schwester, mir tut das Bein weh.' },
  ]);
  const [draft, setDraft] = React.useState('');
  function send() {
    if (!draft.trim()) return;
    setMsgs(m => [...m, { who: 'u', text: draft.trim() }]);
    setDraft('');
    setTimeout(() => {
      setMsgs(m => [...m, { who: 'p', text: 'Eher links. Beim Aufstehen wird es schlimmer.' }]);
    }, 700);
  }
  return (
    <Shell kind="Chat-Simulation · KI-Patient" title="Schmerzanamnese mit Frau Mertens"
      body="Stelle gezielte Fragen — die KI antwortet wie eine Patientin." scrollable={true}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.who === 'p' ? 'flex-start' : 'flex-end',
            maxWidth: '85%',
            padding: '8px 12px',
            background: m.who === 'p' ? C2.bgWhite : C2.accent,
            color: m.who === 'p' ? C2.text : '#fff',
            border: m.who === 'p' ? `1px solid ${C2.border}` : 'none',
            borderRadius: m.who === 'p' ? '12px 12px 12px 3px' : '12px 12px 3px 12px',
            fontSize: 13,
          }}>{m.text}</div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6, padding: 8, background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: 10 }}>
        <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Frage stellen…"
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: 13, fontFamily: F2, color: C2.text, background: 'transparent' }} />
        <button onClick={send} style={{ padding: '6px 12px', background: C2.accent, color: '#fff', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600, fontFamily: F2, cursor: 'pointer' }}>Senden</button>
      </div>
    </Shell>
  );
}

// =============== SPEECH (Aussprache üben) ===============
function StepSpeech() {
  const [recording, setRecording] = React.useState(false);
  return (
    <Shell kind="Aussprache" title="Lies den Satz vor"
      body={'„Frau Mertens hat im rechten Hüftgelenk eine TEP."'}>      <div style={{ padding: 20, background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 16, lineHeight: 1.5, color: C2.text, fontWeight: 500 }}>
          Frau Mertens hat im rechten <span style={{ color: C2.accent, fontWeight: 700 }}>Hüftgelenk</span> eine <span style={{ color: C2.accent, fontWeight: 700 }}>TEP</span>.
        </div>
        <div style={{ fontSize: 11, color: C2.text3, marginTop: 6 }}>tee-eh-peh · Total-Endo-Prothese</div>
      </div>
      <button onClick={() => setRecording(!recording)} style={{
        width: '100%', padding: 18,
        background: recording ? '#C96B5C' : C2.accent,
        color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, fontFamily: F2, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      }}>
        <div style={{ width: 16, height: 16, borderRadius: 8, background: '#fff', opacity: recording ? 0.5 : 1 }} />
        {recording ? 'Aufnahme stoppen' : 'Aufnahme starten'}
      </button>
      {recording && (
        <div style={{ marginTop: 8, display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'flex-end', height: 30 }}>
          {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8].map((h, i) => (
            <div key={i} style={{ width: 4, height: `${h * 100}%`, background: C2.accent, borderRadius: 2, animation: 'pulse 0.8s infinite alternate', animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )}
    </Shell>
  );
}

// =============== CLOZE (Lückentext) ===============
function StepCloze() {
  const blanks = [
    { id: 1, correct: 'Adduktion', distractors: ['Abduktion', 'Flexion'] },
    { id: 2, correct: '90°', distractors: ['180°', '45°'] },
  ];
  const pool = blanks.flatMap(b => [b.correct, ...b.distractors]);
  const [filled, setFilled] = React.useState({});
  return (
    <Shell kind="Lückentext · Cloze" title="Vervollständige den Text">
      <div style={{ padding: 14, background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: 10, fontSize: 14, lineHeight: 1.8, color: C2.text, marginBottom: 14 }}>
        Nach Hüft-TEP ist die <ClozeBlank id={1} filled={filled} setFilled={setFilled} /> über die Mittellinie verboten. Die Hüfte darf maximal <ClozeBlank id={2} filled={filled} setFilled={setFilled} /> gebeugt werden.
      </div>
      <div style={{ fontSize: 10, color: C2.text3, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>Wörter</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {pool.filter(w => !Object.values(filled).includes(w)).map(w => (
          <button key={w} onClick={() => {
            const next = blanks.find(b => !filled[b.id]);
            if (next) setFilled(f => ({ ...f, [next.id]: w }));
          }} style={{
            padding: '6px 12px', background: C2.accentSoft, color: C2.accent,
            border: `1px solid ${C2.accent}`, borderRadius: 999, fontSize: 12, fontWeight: 600, fontFamily: F2, cursor: 'pointer',
          }}>{w}</button>
        ))}
      </div>
    </Shell>
  );
}
function ClozeBlank({ id, filled, setFilled }) {
  const v = filled[id];
  return (
    <span onClick={() => v && setFilled(f => { const n = { ...f }; delete n[id]; return n; })}
      style={{
        display: 'inline-block', minWidth: 70, padding: '2px 10px', margin: '0 2px',
        background: v ? C2.accentSoft : '#F5EFE5',
        border: `1.5px ${v ? 'solid' : 'dashed'} ${v ? C2.accent : C2.text3}`,
        borderRadius: 6, fontWeight: 600, color: v ? C2.accent : C2.text3,
        textAlign: 'center', cursor: v ? 'pointer' : 'default',
      }}>{v || '___'}</span>
  );
}

// =============== FREETEXT (KI-bewertet) ===============
function StepFreetext() {
  const [text, setText] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <Shell kind="Freitext · KI-Bewertung" title="Beschreibe in eigenen Worten"
      body="Wie erklärst du Frau Mertens, warum sie sich nicht bücken darf?">
      <textarea value={text} onChange={e => setText(e.target.value)} disabled={submitted}
        placeholder="Frau Mertens, weil…"
        style={{
          width: '100%', minHeight: 120, padding: 12, fontFamily: F2, fontSize: 13, lineHeight: 1.5,
          color: C2.text, background: C2.bgWhite, border: `1.5px solid ${C2.border}`, borderRadius: 10, resize: 'vertical', boxSizing: 'border-box',
        }} />
      <div style={{ marginTop: 6, fontSize: 10, color: C2.text3, textAlign: 'right' }}>{text.length} Zeichen</div>
      {submitted && (
        <div style={{ marginTop: 12, padding: 12, background: C2.accentSoft, border: `1px solid ${C2.accent}`, borderRadius: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C2.accent, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>KI-Feedback</div>
          <div style={{ fontSize: 12, color: C2.text2, lineHeight: 1.5 }}>
            Klare Erklärung 👍. Verbesserung: erwähne konkret, dass die Hüfte nicht über 90° gebeugt werden darf — das macht den Grund greifbarer.
          </div>
        </div>
      )}
      {!submitted && (
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setSubmitted(true)} disabled={text.length < 20} style={{
            width: '100%', padding: 14, background: text.length < 20 ? '#E8DFD5' : C2.accent,
            color: text.length < 20 ? C2.text3 : '#fff', border: 'none', borderRadius: 10,
            fontSize: 14, fontWeight: 600, fontFamily: F2, cursor: text.length < 20 ? 'default' : 'pointer',
          }}>Auswerten</button>
        </div>
      )}
    </Shell>
  );
}

// =============== BRANCHING (Was tust du?) ===============
function StepBranching() {
  const [path, setPath] = React.useState([]);
  const root = {
    q: 'Frau Mertens stürzt fast beim Aufstehen. Was tust du?',
    opts: [
      { t: 'Sofort den Arzt rufen', next: 'panic' },
      { t: 'Sie absitzen lassen, Vitalwerte messen', next: 'good' },
      { t: 'Sie liegend belassen', next: 'late' },
    ],
  };
  const branches = {
    panic: { fb: 'warn', text: 'Erst Patientin sichern und beobachten — Arzt nur bei klinisch relevanten Befunden.' },
    good: { fb: 'ok', text: 'Richtig — Sicherheit vor Aktion, dann strukturiert weiter (Vitalzeichen, Schmerz, Sturzrisiko).' },
    late: { fb: 'wrong', text: 'Sie ist nicht gestürzt — sie hin- legen ohne Anlass verstärkt Angst.' },
  };
  const last = path[path.length - 1];
  const r = last && branches[last];
  return (
    <Shell kind="Verzweigt · Was tust du?" title={root.q}>
      {!last ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {root.opts.map((o, i) => (
            <button key={i} onClick={() => setPath([o.next])} style={{
              padding: 14, textAlign: 'left', background: C2.bgWhite, border: `1.5px solid ${C2.border}`,
              borderRadius: 10, fontSize: 13, fontWeight: 500, color: C2.text, fontFamily: F2, cursor: 'pointer',
            }}>{o.t}</button>
          ))}
        </div>
      ) : (
        <div style={{
          padding: 14, borderRadius: 10,
          background: r.fb === 'ok' ? 'rgba(62,90,106,0.10)' : r.fb === 'warn' ? 'rgba(212,149,106,0.12)' : 'rgba(201,107,92,0.10)',
          border: `1.5px solid ${r.fb === 'ok' ? '#3E5A6A' : r.fb === 'warn' ? C2.amber : '#C96B5C'}`,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: r.fb === 'ok' ? '#3E5A6A' : r.fb === 'warn' ? C2.amber : '#C96B5C', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>
            {r.fb === 'ok' ? 'Gute Wahl' : r.fb === 'warn' ? 'Vorsicht' : 'Nicht ideal'}
          </div>
          <div style={{ fontSize: 13, color: C2.text2, lineHeight: 1.5 }}>{r.text}</div>
        </div>
      )}
    </Shell>
  );
}

// =============== CALCULATION ===============
function StepCalculation() {
  const [v, setV] = React.useState('');
  const correct = 21;
  const ok = parseFloat(v) === correct;
  return (
    <Shell kind="Pflegerechnen" title="Tropfengeschwindigkeit"
      body="Eine Infusion 500 ml soll in 8 h laufen. Tropffaktor 20 gtt/ml. Wie viele Tropfen pro Minute?">
      <div style={{ padding: 16, background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 11, color: C2.text3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>Formel</div>
        <div style={{ fontSize: 13, fontFamily: 'ui-monospace, Menlo', color: C2.text, lineHeight: 1.6 }}>
          (ml × Tropffaktor) ÷ (h × 60)
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 14, background: C2.bgWhite, border: `1.5px solid ${ok ? '#3E5A6A' : C2.border}`, borderRadius: 12 }}>
        <input type="number" value={v} onChange={e => setV(e.target.value)} placeholder="—"
          style={{ flex: 1, fontSize: 26, fontWeight: 700, color: C2.accent, border: 'none', outline: 'none', fontFamily: F2, fontVariantNumeric: 'tabular-nums', textAlign: 'right', background: 'transparent', minWidth: 0 }} />
        <span style={{ fontSize: 12, color: C2.text3, fontWeight: 600 }}>gtt/min</span>
      </div>
      {v && (
        <div style={{ marginTop: 10, padding: 10, fontSize: 12, color: ok ? '#3E5A6A' : C2.text3, background: ok ? 'rgba(62,90,106,0.08)' : 'transparent', borderRadius: 8 }}>
          {ok ? '✓ Richtig — (500 × 20) ÷ (8 × 60) = 10000 ÷ 480 ≈ 21' : 'Tipp: Erst Tropfen pro Stunde, dann durch 60.'}
        </div>
      )}
    </Shell>
  );
}

// =============== ESTIMATION (Schätzen mit Slider) ===============
function StepEstimation() {
  const [val, setVal] = React.useState(50);
  const correct = 75, tol = 15;
  const dist = Math.abs(val - correct);
  const ok = dist <= tol;
  return (
    <Shell kind="Schätzen" title="Wie viel % der Hüft-OPs sind elektiv?"
      body="Schätze auf der Skala — du musst nicht exakt sein.">
      <div style={{ background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: 12, padding: 16 }}>
        <div style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, color: C2.accent, fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>{val}%</div>
        <input type="range" min="0" max="100" value={val} onChange={e => setVal(+e.target.value)} style={{ width: '100%', accentColor: C2.accent }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C2.text3, marginTop: 4 }}>
          <span>0%</span><span>50%</span><span>100%</span>
        </div>
      </div>
      <div style={{ marginTop: 12, padding: 12, background: ok ? 'rgba(62,90,106,0.08)' : C2.accentSoft, border: `1px solid ${ok ? '#3E5A6A' : C2.border}`, borderRadius: 10, fontSize: 12, color: C2.text2, lineHeight: 1.5 }}>
        <strong style={{ color: ok ? '#3E5A6A' : C2.accent }}>Wusstest du?</strong> Etwa 75% aller Hüft-TEPs in Deutschland sind elektive Eingriffe wegen Coxarthrose, der Rest sind Frakturen.
      </div>
    </Shell>
  );
}

// =============== TIMER (Zeitlimit-Quiz) ===============
function StepTimer() {
  const [time, setTime] = React.useState(15);
  const [running, setRunning] = React.useState(true);
  React.useEffect(() => {
    if (!running || time === 0) return;
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [running, time]);
  const pct = (time / 15) * 100;
  return (
    <Shell kind="Zeitdruck" title="Schnellfrage in 15 Sek"
      body="Tippe die richtige Antwort an, bevor die Zeit abläuft.">
      <div style={{ height: 6, background: '#E8DFD5', borderRadius: 3, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ width: `${pct}%`, height: '100%', background: time < 5 ? '#C96B5C' : C2.accent, transition: 'width 1s linear' }} />
      </div>
      <div style={{ textAlign: 'center', fontSize: 48, fontWeight: 700, color: time < 5 ? '#C96B5C' : C2.accent, fontVariantNumeric: 'tabular-nums', marginBottom: 16 }}>
        {time}s
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: C2.text, marginBottom: 12 }}>Welcher Wert ist beim VAS „mittlerer Schmerz"?</div>
      {['1–3', '4–6', '7–10'].map(o => (
        <button key={o} onClick={() => setRunning(false)} style={{
          width: '100%', padding: 12, marginBottom: 6, background: C2.bgWhite,
          border: `1.5px solid ${C2.border}`, borderRadius: 10, fontSize: 14, fontWeight: 600, color: C2.text, fontFamily: F2, cursor: 'pointer',
        }}>{o}</button>
      ))}
    </Shell>
  );
}

// =============== CROSSWORD (Mini) ===============
function StepCrossword() {
  // 5x5 grid mit 2 Wörtern: HUFTE (horizontal) + TEP (vertikal)
  const grid = [
    ['', '', 'T', '', ''],
    ['', '', 'E', '', ''],
    ['H', 'Ü', 'F', 'T', 'E'],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];
  return (
    <Shell kind="Kreuzworträtsel" title="Pflege-Begriffe">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 36px)', gap: 2, background: C2.text3, padding: 2, borderRadius: 6 }}>
          {grid.flat().map((cell, i) => {
            const filled = cell !== '';
            return (
              <div key={i} style={{
                width: 36, height: 36, background: filled ? C2.bgWhite : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 700, color: filled ? C2.text : 'transparent',
              }}>{cell}</div>
            );
          })}
        </div>
      </div>
      <div style={{ background: C2.bgWhite, border: `1px solid ${C2.border}`, borderRadius: 10, padding: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C2.accent, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>Hinweise</div>
        <div style={{ fontSize: 12, color: C2.text2, lineHeight: 1.7 }}>
          <strong>Waagrecht:</strong> Großes Gelenk zw. Becken &amp; Femur (5)<br/>
          <strong>Senkrecht:</strong> Vollständiger Gelenkersatz (3)
        </div>
      </div>
    </Shell>
  );
}

// =============== CROWD-POLL ===============
function StepCrowdPoll() {
  const [picked, setPicked] = React.useState(null);
  const opts = [
    { t: 'Schmerz erfassen', pct: 62 },
    { t: 'Vitalzeichen', pct: 18 },
    { t: 'Mobilisation prüfen', pct: 14 },
    { t: 'Verband checken', pct: 6 },
  ];
  return (
    <Shell kind="Schwarmwissen" title="Was machst du als Erstes nach der Übergabe?"
      body="Vergleiche mit anderen Schüler:innen.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {opts.map((o, i) => {
          const isPicked = picked === i;
          return (
            <button key={i} onClick={() => setPicked(i)} style={{
              position: 'relative', overflow: 'hidden',
              padding: 14, background: C2.bgWhite,
              border: `1.5px solid ${isPicked ? C2.accent : C2.border}`, borderRadius: 10,
              fontSize: 13, fontWeight: 500, color: C2.text, fontFamily: F2, cursor: 'pointer',
              textAlign: 'left',
            }}>
              {picked !== null && (
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${o.pct}%`, background: isPicked ? C2.accentSoft : 'rgba(160,152,144,0.15)', zIndex: 0 }} />
              )}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{o.t}</span>
                {picked !== null && <span style={{ fontSize: 12, fontWeight: 700, color: isPicked ? C2.accent : C2.text2 }}>{o.pct}%</span>}
              </div>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 12, fontSize: 11, color: C2.text3, textAlign: 'center' }}>
          Basierend auf 1 248 Antworten · Letzte 30 Tage
        </div>
      )}
    </Shell>
  );
}

// =============== IMAGE-INTERACTION (Before/After-Slider) ===============
function StepImageInteraction() {
  const [pos, setPos] = React.useState(50);
  return (
    <Shell kind="Bild-Interaktion · Vorher/Nachher" title="Wundheilung Tag 0 → Tag 7"
      body="Schiebe den Slider, um den Verlauf zu vergleichen.">
      <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden', border: `1px solid ${C2.border}`, marginBottom: 12 }}>
        {/* Vorher */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #B07A72 0%, #8B5E58 100%)' }}>
          <div style={{ position: 'absolute', top: '40%', left: '30%', width: '40%', height: '6%', background: '#5C3A36', borderRadius: 3 }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, padding: '4px 10px', background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: 11, fontWeight: 600, borderRadius: 6 }}>Tag 0</div>
        </div>
        {/* Nachher (clipped) */}
        <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)`, background: 'linear-gradient(135deg, #D4AE88 0%, #B89172 100%)' }}>
          <div style={{ position: 'absolute', top: '40%', left: '30%', width: '40%', height: '4%', background: '#9B7456', borderRadius: 3 }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, padding: '4px 10px', background: 'rgba(33,140,113,0.85)', color: '#fff', fontSize: 11, fontWeight: 600, borderRadius: 6 }}>Tag 7</div>
        </div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, width: 2, background: '#fff', boxShadow: '0 0 8px rgba(0,0,0,0.5)', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 32, height: 32, background: '#fff', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: C2.text2, boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>⇆</div>
        </div>
      </div>
      <input type="range" min="0" max="100" value={pos} onChange={e => setPos(+e.target.value)} style={{ width: '100%', accentColor: C2.accent }} />
    </Shell>
  );
}

// =============== CARE-PLAN (Multi-Phase Pflegeplan) ===============
function StepCarePlan() {
  const phases = [
    { p: 'Informieren', q: 'Welches Hauptproblem?', a: 'Sturzangst nach Hüft-TEP' },
    { p: 'Planen', q: 'Welches Ziel?', a: 'Sicheres Gehen mit Gehhilfe in 3 Tagen' },
    { p: 'Durchführen', q: 'Welche Maßnahme?', a: 'Mobilisation 2× tgl., max. 30 Min.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <Shell kind="Pflegeplan" title="Frau Mertens, 78 J."
      body="Erarbeite einen Mini-Pflegeplan in 3 Phasen.">
      {phases.map((ph, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ marginBottom: 8, background: C2.bgWhite, border: `1px solid ${isOpen ? C2.accent : C2.border}`, borderRadius: 10, overflow: 'hidden' }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
              width: '100%', padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: F2,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: 11, background: isOpen ? C2.accent : C2.accentSoft, color: isOpen ? '#fff' : C2.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{i + 1}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C2.accent, textTransform: 'uppercase', letterSpacing: 0.5 }}>{ph.p}</div>
              </div>
              <div style={{ fontSize: 16, color: C2.text3 }}>{isOpen ? '−' : '+'}</div>
            </button>
            {isOpen && (
              <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${C2.border}`, paddingTop: 10 }}>
                <div style={{ fontSize: 12, color: C2.text3, marginBottom: 6 }}>{ph.q}</div>
                <div style={{ padding: 10, background: C2.bg, border: `1px solid ${C2.border}`, borderRadius: 8, fontSize: 13, color: C2.text, lineHeight: 1.5 }}>
                  {ph.a}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </Shell>
  );
}

Object.assign(window, {
  StepMemory, StepConceptMap, StepTimeline, StepDiagram, StepReveal,
  StepDialog, StepChatSim, StepSpeech, StepCloze, StepFreetext, StepBranching,
  StepCalculation, StepEstimation, StepTimer,
  StepCrossword, StepCrowdPoll, StepImageInteraction, StepCarePlan,
});

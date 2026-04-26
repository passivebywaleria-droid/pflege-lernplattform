/* global React */
const { useState } = React;

// ── ORIGINAL Live-Palette (aus globals.css gelesen) ──────────────
const ORIG = {
  bg: '#fafaf9',
  bgPrimary: '#ffffff',
  bgSecondary: '#faf9f7',
  textPrimary: '#1d1d1f',
  textSecondary: '#6e6e73',
  textTertiary: '#86868b',
  border: '#E5DFD6',
  divider: 'rgba(196, 135, 127, 0.10)',
  cardBg: '#fafaf9',
  accent: '#C4877F',          // warmes Rosa
  accentHover: '#B07A72',
  accentBg: 'rgba(196, 135, 127, 0.08)',
  success: '#6B8F71',         // gedämpftes Grün (matcha)
  warning: '#D4956A',         // Amber
  error: '#C96B5C',           // Rot-Orange
  info: '#9B7EA6',            // Lila
};

// 6 Phasen wie im Original (NICHT CLAUDE.md!)
const ORIG_PHASEN = [
  { id: 'informieren',   label: 'Informieren',   icon: '📋' },
  { id: 'beobachten',    label: 'Beobachten',    icon: '👁' },
  { id: 'planen',        label: 'Planen',        icon: '📝' },
  { id: 'durchfuehren',  label: 'Durchführen',   icon: '🩺' },
  { id: 'evaluieren',    label: 'Evaluieren',    icon: '📊' },
  { id: 'dokumentieren', label: 'Dokumentieren', icon: '📄' },
];

// ────────────────────────────────────────────────────────────────
// Sticky-Header — getreue Repro aus situation/[situationId]/page.tsx
// ────────────────────────────────────────────────────────────────
function OrigHeader({ titel, patient, spirale, currentPhase, completedPhases, diagnosenOpen, setDiagnosenOpen }) {
  return (
    <div style={{
      flexShrink: 0,
      background: ORIG.bgPrimary,
      borderBottom: `1px solid ${ORIG.border}80`,
    }}>
      <div style={{ padding: '12px 16px' }}>
        {/* Zurück-Link */}
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          fontSize: 13, color: ORIG.textSecondary, marginBottom: 8, textDecoration: 'none',
        }}>
          <span style={{ fontSize: 14 }}>←</span>
          Zurück zur Übersicht
        </a>

        {/* Patient-Info */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{
              fontSize: 17, fontWeight: 700, color: ORIG.textPrimary,
              margin: 0, lineHeight: 1.2,
            }}>
              {titel}
            </h1>
            <p style={{
              fontSize: 11, color: ORIG.textSecondary, margin: '2px 0 0 0',
            }}>
              Patient: {patient.name}, {patient.alter} · {patient.setting}
            </p>
          </div>
          <span style={{
            flexShrink: 0,
            borderRadius: 999,
            background: ORIG.accentBg,
            padding: '2px 8px',
            fontSize: 11, fontWeight: 600, color: ORIG.accent,
          }}>
            Spirale {spirale}
          </span>
        </div>

        {/* Diagnosen — einklappbar */}
        {patient.diagnosen.length > 0 && (
          <div style={{ marginBottom: 12 }}>
            <button
              onClick={() => setDiagnosenOpen(!diagnosenOpen)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: 11, color: ORIG.textSecondary, marginBottom: 4,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <span>Diagnosen ({patient.diagnosen.length})</span>
              <span style={{ fontSize: 9 }}>{diagnosenOpen ? '▲' : '▼'}</span>
            </button>
            {diagnosenOpen && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {patient.diagnosen.map((d) => (
                  <span key={d} style={{
                    borderRadius: 6,
                    background: ORIG.bg,
                    padding: '2px 8px',
                    fontSize: 10, color: ORIG.textSecondary,
                  }}>
                    {d}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Phasen-Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', paddingBottom: 8 }}>
          {ORIG_PHASEN.map((phase, idx) => {
            const isCompleted = completedPhases.includes(phase.id);
            const isCurrent = phase.id === currentPhase;
            const isLocked = !isCompleted && !isCurrent;
            return (
              <div key={phase.id} style={{ display: 'flex', alignItems: 'center' }}>
                {idx > 0 && (
                  <div style={{
                    height: 2, width: 16,
                    background: isCompleted ? ORIG.success : ORIG.border,
                  }} />
                )}
                <button
                  disabled={isLocked}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                    borderRadius: 12, padding: '8px 8px',
                    background: isCurrent ? ORIG.accentBg
                              : isCompleted ? `${ORIG.success}1a`
                              : ORIG.bg,
                    border: isCurrent ? `2px solid ${ORIG.accent}`
                          : isCompleted ? `1px solid ${ORIG.success}4d`
                          : `1px solid ${ORIG.border}`,
                    boxShadow: isCurrent ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    opacity: isLocked ? 0.5 : 1,
                    cursor: isLocked ? 'default' : 'pointer',
                    minWidth: 56,
                  }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1 }}>
                    {isCompleted ? '✓' : phase.icon}
                  </span>
                  <span style={{
                    fontSize: 10, fontWeight: 500, lineHeight: 1.1,
                    color: isCurrent ? ORIG.accent
                          : isCompleted ? ORIG.success
                          : ORIG.textTertiary,
                  }}>
                    {phase.label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// Phase-Sub-Header — Phase-Name + Step-Counter + Progress-Bar
// ────────────────────────────────────────────────────────────────
function PhaseSubHeader({ phaseLabel, phaseDesc, stepIdx, stepTotal }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div>
          <p style={{
            fontSize: 11, fontWeight: 600, color: ORIG.accent,
            textTransform: 'uppercase', letterSpacing: 1, margin: 0,
          }}>
            {phaseLabel}
          </p>
          <p style={{ fontSize: 11, color: ORIG.textTertiary, margin: '2px 0 0 0' }}>
            {phaseDesc}
          </p>
        </div>
        <span style={{ fontSize: 11, color: ORIG.textTertiary }}>
          {stepIdx + 1}/{stepTotal}
        </span>
      </div>
      <div style={{
        height: 4, borderRadius: 999, background: ORIG.border, marginBottom: 16,
      }}>
        <div style={{
          height: '100%', borderRadius: 999, background: ORIG.accent,
          width: `${((stepIdx + 1) / stepTotal) * 100}%`,
          transition: 'width 0.3s',
        }} />
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// Step: Text mit Carousel (StepText Repro, displayFormat=scenario)
// ────────────────────────────────────────────────────────────────
function OrigStepScenario() {
  return (
    <div style={{ color: ORIG.textPrimary }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 20 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: ORIG.textPrimary, margin: 0 }}>
          Übergabe an Frau M.
        </h2>
        <button style={{
          flexShrink: 0, marginTop: 4,
          width: 32, height: 32, borderRadius: 999,
          border: `1px solid ${ORIG.border}`, background: ORIG.bgPrimary,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }} aria-label="Vorlesen">
          <span style={{ fontSize: 14 }}>🔊</span>
        </button>
      </div>

      {/* Scenario displayFormat */}
      <div style={{
        borderRadius: 12, background: ORIG.cardBg,
        border: `1.5px solid ${ORIG.border}`, overflow: 'hidden',
      }}>
        <div style={{
          background: `${ORIG.warning}1a`,
          padding: '8px 16px',
          borderBottom: `1px solid ${ORIG.border}`,
        }}>
          <p style={{
            fontSize: 10, fontWeight: 700, color: ORIG.warning,
            textTransform: 'uppercase', letterSpacing: 2, margin: 0,
          }}>
            Situation
          </p>
        </div>
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: ORIG.textPrimary, margin: 0 }}>
            Nachtschicht, 02:48 Uhr — Stationsflur
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: `${ORIG.textPrimary}cc`, margin: 0, whiteSpace: 'pre-line' }}>
            Frau Keller übergibt dir Frau M., 78, Zimmer 14. Hüft-OP vor 6 Tagen, leichte Verwirrung in der Nacht. Sie hat bereits zweimal nach der Tochter gerufen.{'\n\n'}Du gehst gleich zu ihr — informiere dich erst über den aktuellen Stand.
          </p>
        </div>
      </div>

      {/* Fallbezug */}
      <div style={{
        marginTop: 20,
        borderRadius: 16, background: `${ORIG.accent}0d`,
        border: `1px solid ${ORIG.accent}26`,
        padding: 16,
      }}>
        <p style={{ fontSize: 13, fontWeight: 500, color: ORIG.accent, margin: '0 0 4px 0' }}>
          Fallbezug
        </p>
        <p style={{ fontSize: 13, color: `${ORIG.textPrimary}b3`, margin: 0 }}>
          Du übernimmst die Nachtschicht und triffst zum ersten Mal auf Frau M.
        </p>
      </div>

      {/* Glossar-Begriffe */}
      <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {['Delir', 'postoperativ', 'Orientierung'].map((b) => (
          <span key={b} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            borderRadius: 999, background: ORIG.cardBg,
            padding: '4px 12px', fontSize: 11, fontWeight: 500, color: ORIG.textSecondary,
          }}>
            {b}
          </span>
        ))}
      </div>

      <button style={{
        marginTop: 20,
        width: '100%', borderRadius: 16, background: ORIG.accent,
        padding: '16px 24px', fontSize: 15, fontWeight: 600, color: 'white',
        border: 'none', cursor: 'pointer',
      }}>
        Weiter
      </button>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// Step: Multiple Choice (StepMC Repro)
// ────────────────────────────────────────────────────────────────
function OrigStepMC() {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const optionen = [
    { text: 'Sie ist dehydriert und braucht zuerst Flüssigkeit', isCorrect: false, explanation: 'Dehydration kann Verwirrung verstärken, ist aber selten alleinige Ursache bei postoperativem Delir.' },
    { text: 'Postoperatives Delir — multifaktorielle Ursache', isCorrect: true, explanation: 'Richtig — nach Hüft-OP, Anästhesie, Schmerzen und Schlafentzug ist ein Delir die wahrscheinlichste Erklärung.' },
    { text: 'Sie hat eine beginnende Demenz', isCorrect: false, explanation: 'Ohne vorherige kognitive Auffälligkeiten unwahrscheinlich. Akute Verwirrung nach OP deutet eher auf ein Delir.' },
    { text: 'Sie sucht einfach Aufmerksamkeit', isCorrect: false, explanation: 'Diese Bewertung wäre fachlich falsch — die Symptome haben eine medizinische Ursache.' },
  ];
  const labels = ['A', 'B', 'C', 'D'];

  return (
    <div style={{ color: ORIG.textPrimary, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 8 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: ORIG.textPrimary, margin: 0 }}>
          Erste Einschätzung
        </h2>
        <p style={{ fontSize: 13, color: `${ORIG.textPrimary}b3`, lineHeight: 1.6, margin: 0 }}>
          Du liest die Übergabe-Notizen. Frau M. ist nachts unruhig, hat Halluzinationen erwähnt und kennt das Datum nicht.
        </p>
        <p style={{ fontSize: 13, fontWeight: 500, color: ORIG.textPrimary, margin: 0 }}>
          Was ist die wahrscheinlichste Ursache?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {optionen.map((opt, idx) => {
            const isSelected = selected.includes(idx);
            const showResult = submitted;
            const optCorrect = opt.isCorrect;
            let borderColor = ORIG.border;
            let bgColor = ORIG.bgPrimary;
            if (showResult && isSelected && optCorrect) { borderColor = ORIG.success; bgColor = `${ORIG.success}0d`; }
            else if (showResult && isSelected && !optCorrect) { borderColor = ORIG.error; bgColor = `${ORIG.error}0d`; }
            else if (showResult && !isSelected && optCorrect) { borderColor = `${ORIG.success}80`; bgColor = `${ORIG.success}0d`; }
            else if (isSelected) { borderColor = ORIG.accent; bgColor = `${ORIG.accent}0d`; }

            const circleBg = (showResult && optCorrect) ? ORIG.success
                          : (showResult && isSelected && !optCorrect) ? ORIG.error
                          : isSelected ? ORIG.accent
                          : ORIG.cardBg;
            const circleColor = (showResult && (optCorrect || isSelected)) || isSelected ? 'white' : ORIG.textSecondary;
            const circleContent = showResult && isSelected ? (optCorrect ? '✓' : '✗') : labels[idx];

            return (
              <button
                key={idx}
                onClick={() => !submitted && setSelected([idx])}
                style={{
                  width: '100%', borderRadius: 16,
                  border: `1.5px solid ${borderColor}`, background: bgColor,
                  padding: 16, textAlign: 'left', cursor: submitted ? 'default' : 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{
                    flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 32, height: 32, borderRadius: 999,
                    background: circleBg, color: circleColor,
                    fontSize: 13, fontWeight: 700,
                  }}>
                    {circleContent}
                  </span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 500, color: ORIG.textPrimary, margin: 0, lineHeight: 1.4 }}>
                      {opt.text}
                    </p>
                    {showResult && opt.explanation && (
                      <div style={{ marginTop: 8 }}>
                        {!isSelected && optCorrect && <p style={{ fontSize: 11, fontWeight: 600, color: ORIG.success, margin: '0 0 2px 0' }}>Richtige Antwort</p>}
                        {isSelected && !optCorrect && <p style={{ fontSize: 11, fontWeight: 600, color: ORIG.error, margin: '0 0 2px 0' }}>Deshalb nicht richtig:</p>}
                        {!isSelected && !optCorrect && <p style={{ fontSize: 11, fontWeight: 600, color: ORIG.textTertiary, margin: '0 0 2px 0' }}>Warum nicht:</p>}
                        <p style={{ fontSize: 12, color: ORIG.textSecondary, margin: 0, lineHeight: 1.5 }}>
                          {opt.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ paddingTop: 12, flexShrink: 0 }}>
        <button
          onClick={() => submitted ? setSubmitted(false) || setSelected([]) : setSubmitted(true)}
          disabled={selected.length === 0 && !submitted}
          style={{
            width: '100%', borderRadius: 16, background: ORIG.accent,
            padding: '16px 24px', fontSize: 15, fontWeight: 600, color: 'white',
            border: 'none', cursor: 'pointer',
            opacity: (selected.length === 0 && !submitted) ? 0.4 : 1,
          }}
        >
          {submitted ? 'Zurücksetzen' : 'Prüfen'}
        </button>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// Step: Confidence (StepConfidence Repro — Phase 1: Wahr/Falsch)
// ────────────────────────────────────────────────────────────────
function OrigStepConfidence() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 80, color: ORIG.textPrimary }}>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: ORIG.textPrimary, margin: 0 }}>
        Wahr oder Falsch?
      </h2>
      <p style={{ fontSize: 13, color: ORIG.textSecondary, margin: 0 }}>
        Aussage 1 von 4
      </p>

      <div style={{
        borderRadius: 16, background: ORIG.bgPrimary,
        border: `1.5px solid ${ORIG.border}`, padding: 24,
      }}>
        <p style={{ fontSize: 14, fontWeight: 500, color: ORIG.textPrimary, textAlign: 'center', margin: 0, lineHeight: 1.5 }}>
          „Ein postoperatives Delir tritt typischerweise erst nach 2 Wochen auf."
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <button style={{
          borderRadius: 16, border: `1.5px solid ${ORIG.success}`,
          background: `${ORIG.success}0d`, padding: '16px 24px',
          fontSize: 15, fontWeight: 600, color: ORIG.success, cursor: 'pointer',
        }}>
          Wahr
        </button>
        <button style={{
          borderRadius: 16, border: `1.5px solid ${ORIG.error}`,
          background: `${ORIG.error}0d`, padding: '16px 24px',
          fontSize: 15, fontWeight: 600, color: ORIG.error, cursor: 'pointer',
        }}>
          Falsch
        </button>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// Komplette Live-Repro Screen
// ────────────────────────────────────────────────────────────────
function OriginalScreen({ phaseId, stepIdx, stepTotal, phaseLabel, phaseDesc, completedPhases, children }) {
  const [diagnosenOpen, setDiagnosenOpen] = useState(true);
  return (
    <div style={{
      width: 390, height: 780,
      background: ORIG.bg,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: "'Poppins', system-ui, -apple-system, sans-serif",
    }}>
      <OrigHeader
        titel="Frau M. — Sturz in der Nacht"
        patient={{
          name: 'Frau M.',
          alter: '78 Jahre',
          setting: 'Zimmer 14',
          diagnosen: ['Z. n. Hüft-TEP', 'Hypertonie', 'leichte Demenz']
        }}
        spirale={2}
        currentPhase={phaseId}
        completedPhases={completedPhases}
        diagnosenOpen={diagnosenOpen}
        setDiagnosenOpen={setDiagnosenOpen}
      />
      <div style={{
        flex: 1, minHeight: 0, overflowY: 'auto',
        padding: '12px 16px',
      }}>
        <PhaseSubHeader
          phaseLabel={phaseLabel}
          phaseDesc={phaseDesc}
          stepIdx={stepIdx}
          stepTotal={stepTotal}
        />
        {children}
      </div>
    </div>
  );
}

Object.assign(window, {
  OriginalScreen, OrigStepScenario, OrigStepMC, OrigStepConfidence, ORIG, ORIG_PHASEN,
});

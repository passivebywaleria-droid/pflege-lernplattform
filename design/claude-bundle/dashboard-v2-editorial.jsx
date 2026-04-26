// Dashboard V2 — Editorial
// Typo-Mix (Fraunces für Greeting + große Zahlen), Asymmetrie, Marginalien.
// Streak-Heatmap als Hauptmotiv. Ruhig, gedruckte Magazin-Anmutung.
//
// Tone: kuratiert, langsam, persönlich.

const D2C = window.MUC;
const D2_SANS = "Inter, -apple-system, system-ui, sans-serif";
const D2_SERIF = "'Fraunces', 'Cormorant Garamond', Georgia, serif";

function Dashboard_V2_Editorial({ onTab = () => {}, onContinue }) {
  const c = D2C;
  const greet = window.useTimeOfDayGreeting();
  const aktive = window.BAUSTEINE_DATA.filter(b =>
    b.status === 'in-progress' || b.status === 'attempted'
  ).slice(0, 2);

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: D2_SANS, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />

      {/* Editorial-Header: kleine Eyebrow links, Datum rechts */}
      <div style={{ padding: '14px 20px 8px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: D2_SERIF, fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase',
          color: c.text3, fontStyle: 'italic',
        }}>
          № 24 · Donnerstag
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: 14,
          background: c.accent, color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700,
        }}>L</div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '0 20px 20px' }}>
        {/* Hero: editorial Greeting + Continue */}
        <div style={{ marginTop: 6, marginBottom: 24 }}>
          <div style={{
            fontFamily: D2_SERIF, fontSize: 38, lineHeight: 1.05, fontWeight: 400,
            color: c.text, letterSpacing: -0.5, animation: 'mu-soft-rise 700ms ease backwards',
          }}>
            {greet.text},<br/><em style={{ fontStyle: 'italic', color: c.accent }}>Lina.</em>
          </div>
          <div style={{
            fontSize: 13, color: c.text2, lineHeight: 1.55, marginTop: 12,
            maxWidth: 280, textWrap: 'pretty',
          }}>
            Du bist seit <b>12 Tagen</b> in Folge dabei.
            Heute warten <b>8 Karten</b> auf dich — und ein offener Baustein.
          </div>
        </div>

        {/* Asymmetrische Continue-Card: groß links, Marginalie rechts */}
        <div style={{ marginBottom: 26 }}>
          <div style={{
            fontFamily: D2_SERIF, fontStyle: 'italic', fontSize: 11, letterSpacing: 0.6,
            color: c.text3, marginBottom: 8,
          }}>
            ⟶ Wo du aufgehört hast
          </div>
          <div onClick={onContinue} style={{
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'flex-end',
            paddingBottom: 18, borderBottom: `1px solid ${c.borderStrong}`,
            cursor: 'pointer',
          }}>
            <div>
              <div style={{
                fontFamily: D2_SERIF, fontSize: 26, lineHeight: 1.15, fontWeight: 500,
                color: c.text, letterSpacing: -0.3,
              }}>
                Schmerz und Bewegung
              </div>
              <div style={{ fontSize: 11, color: c.text3, marginTop: 6, letterSpacing: 0.4 }}>
                Baustein 03 · Schritt 5/9 · ~7 min
              </div>
              <div style={{ marginTop: 12, height: 2, background: c.borderStrong, borderRadius: 999, overflow: 'hidden' }}>
                <div style={{
                  width: '44%', height: '100%', background: c.accent,
                  animation: 'mu-soft-rise 1200ms ease 200ms backwards',
                }} />
              </div>
            </div>
            <div style={{
              fontFamily: D2_SERIF, fontSize: 56, fontWeight: 300, color: c.accent,
              lineHeight: 1, letterSpacing: -2, fontVariantNumeric: 'tabular-nums',
            }}>
              <window.AnimatedNumber to={44} duration={1400} suffix="%" />
            </div>
          </div>
        </div>

        {/* Streak-Heatmap als Hero-Visual */}
        <div style={{ marginBottom: 26 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{
              fontFamily: D2_SERIF, fontSize: 18, fontWeight: 500, color: c.text, letterSpacing: -0.2,
            }}>
              Deine letzten 12 Wochen
            </div>
            <div style={{
              fontFamily: D2_SERIF, fontStyle: 'italic', fontSize: 11, color: c.text3,
            }}>~ 4× pro Woche</div>
          </div>
          <div style={{
            background: c.bgWhite, padding: '16px 14px', borderRadius: 6,
            border: `1px solid ${c.border}`,
          }}>
            <window.StreakHeatmap weeks={12} size={11} gap={3} color={c.accent} animate />
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1fr', gap: 10, alignItems: 'center',
            marginTop: 14,
          }}>
            <div>
              <div style={{ fontFamily: D2_SERIF, fontSize: 28, fontWeight: 400, color: c.accent, lineHeight: 1, letterSpacing: -0.5 }}>
                <window.AnimatedNumber to={12} duration={1100} />
              </div>
              <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
                Tage Streak
              </div>
            </div>
            <div style={{ width: 1, height: 28, background: c.borderStrong }} />
            <div>
              <div style={{ fontFamily: D2_SERIF, fontSize: 28, fontWeight: 400, color: c.text, lineHeight: 1, letterSpacing: -0.5 }}>
                <window.AnimatedNumber to={42} duration={1200} />
                <span style={{ fontSize: 14, color: c.text3, fontStyle: 'italic' }}>h</span>
              </div>
              <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
                Lernzeit
              </div>
            </div>
            <div style={{ width: 1, height: 28, background: c.borderStrong }} />
            <div>
              <div style={{ fontFamily: D2_SERIF, fontSize: 28, fontWeight: 400, color: '#3E5A6A', lineHeight: 1, letterSpacing: -0.5 }}>
                <window.AnimatedNumber to={3} duration={900} />
              </div>
              <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
                Gemeistert
              </div>
            </div>
          </div>
        </div>

        {/* Heute · numerische Liste */}
        <div style={{ marginBottom: 26 }}>
          <div style={{
            fontFamily: D2_SERIF, fontSize: 18, fontWeight: 500, color: c.text,
            letterSpacing: -0.2, marginBottom: 14,
          }}>
            Heute steht an
          </div>
          {[
            { num: '01', titel: 'Karteikarten wiederholen', sub: '8 Karten · ~5 min' },
            { num: '02', titel: 'Reflektion: gestern gelernt', sub: '2 min · überfällig', tag: 'jetzt' },
            { num: '03', titel: 'Schmerz und Bewegung — Schritt 5', sub: 'Baustein fortsetzen' },
          ].map(it => (
            <div key={it.num} style={{
              display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 14, alignItems: 'center',
              padding: '14px 0', borderBottom: `1px solid ${c.borderStrong}`,
            }}>
              <div style={{
                fontFamily: D2_SERIF, fontSize: 22, fontStyle: 'italic', fontWeight: 300,
                color: c.text3, letterSpacing: -0.5, lineHeight: 1,
              }}>{it.num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: c.text, lineHeight: 1.3 }}>{it.titel}</div>
                <div style={{ fontSize: 11, color: c.text3, marginTop: 3, fontStyle: 'italic', fontFamily: D2_SERIF }}>
                  {it.sub}
                </div>
              </div>
              {it.tag && (
                <div style={{
                  fontFamily: D2_SERIF, fontStyle: 'italic', fontSize: 12,
                  color: '#C96B5C', letterSpacing: 0.4,
                }}>{it.tag}</div>
              )}
              {!it.tag && <div style={{ color: c.text3, fontSize: 16 }}>›</div>}
            </div>
          ))}
        </div>

        {/* Aktive Bausteine — als Block-Quotes */}
        <div style={{ marginBottom: 26 }}>
          <div style={{
            fontFamily: D2_SERIF, fontSize: 18, fontWeight: 500, color: c.text,
            letterSpacing: -0.2, marginBottom: 14,
          }}>
            Im Fluss
          </div>
          {aktive.map((b, i) => {
            const pct = b.status === 'in-progress' ? Math.round((b.progress / b.steps) * 100) : 0;
            return (
              <div key={b.id} style={{
                paddingLeft: 16, borderLeft: `2px solid ${i === 0 ? c.accent : c.borderStrong}`,
                marginBottom: 16, paddingBottom: 4,
              }}>
                <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.7, textTransform: 'uppercase', fontWeight: 600 }}>
                  Baustein {String(b.nr).padStart(2, '0')}
                </div>
                <div style={{
                  fontFamily: D2_SERIF, fontSize: 18, fontWeight: 500, color: c.text,
                  letterSpacing: -0.2, marginTop: 2,
                }}>
                  {b.titel}
                </div>
                <div style={{ fontSize: 11, color: c.text3, marginTop: 4 }}>
                  {b.status === 'in-progress'
                    ? <>{b.progress}/{b.steps} Schritte · <window.AnimatedNumber to={pct} duration={1100} suffix="%" /></>
                    : `${window.MASTERY_LABELS[b.mastery]}`}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote-Footer als Marginalie */}
        <div style={{
          padding: '20px 0', borderTop: `1px solid ${c.borderStrong}`,
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: D2_SERIF, fontSize: 14, fontStyle: 'italic', color: c.text2,
            lineHeight: 1.5, maxWidth: 260, margin: '0 auto', textWrap: 'balance',
          }}>
            „Pflege ist die Kunst, mit Wissen menschlich zu handeln."
          </div>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 8, fontWeight: 600 }}>
            Virginia Henderson
          </div>
        </div>
      </div>
      <window.TabBar active="home" onTab={onTab} />
    </div>
  );
}

Object.assign(window, { Dashboard_V2_Editorial });

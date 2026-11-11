import React, { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(75);
  const [activeTab, setActiveTab] = useState('ACOUSTICS');

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            Sora & Klang
          </a>
          <span className="edge-coords">COPENHAGEN · KYOTO // 96kHz ANALOG</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#details" onClick={() => setActiveTab('ACOUSTICS')}>ACOUSTICS</a>
          <a href="#details" onClick={() => setActiveTab('ENCLOSURE')}>ENCLOSURE</a>
          <a href="#details" onClick={() => setActiveTab('CROSSOVER')}>CROSSOVER</a>
        </nav>

        <a href="#inquire" className="edge-action-btn">
          AUDITION RECORDINGS
        </a>
      </header>

      {/* FULL-BLEED ARCHITECTURAL HERO (ZERO ITALIC SLOP, ZERO PILL BARS) */}
      <header id="top" className="hero-fullbleed">
        <img
          src="/references/sites/site-4-sora.jpg"
          alt="SORA & KLANG // SOLID OAK ACOUSTICS"
          className="hero-bg-photo"
        />
        <div className="hero-scrim" />

        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">REFERENCE 01 · ACOUSTIC MONITOR</span>
            <h1 className="hero-title">
              ANALOG PURITY
              <span className="hero-subline">MILLED SOLID OAK REFERENCE.</span>
            </h1>
            <p className="hero-lead">Near-field studio monitors machined from single-origin Scandinavian white oak with point-source coaxial ribbon drivers.</p>
            <a href="#details" className="editorial-cta-btn">
              Explore Specification
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Engineering Readouts">
            <span>28Hz–42kHz</span>
            <span>·</span>
            <span>SOLID NORDIC OAK</span>
            <span>·</span>
            <span>BERYLLIUM RIBBON</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="details" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">ENGINEERING BENCH // ACTIVE MODE</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Precision Telemetry & Output
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Calibrated performance envelope with real-time operational feedback. Zero synthetic slop, machined to tolerance.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                <span>CALIBRATION ENVELOPE</span>
                <span style={{ color: 'var(--accent-color)' }}>{metricValue}% NOMINAL</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={metricValue}
                onChange={(e) => setMetricValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE SUB-SYSTEM</td>
                  <td className="spec-value">{activeTab}</td>
                </tr>
                <tr>
                  <td className="spec-label">EFFICIENCY FACTOR</td>
                  <td className="spec-value">{(0.91 + (metricValue / 1000)).toFixed(3)} η</td>
                </tr>
                <tr>
                  <td className="spec-label">THERMAL DISSIPATION</td>
                  <td className="spec-value">{(24 + (metricValue * 0.4)).toFixed(1)} °C</td>
                </tr>
                <tr>
                  <td className="spec-label">STATUS PROTOCOL</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>VERIFIED · ZERO TOLERANCE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lab-display-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)' }}>DIAGNOSTIC VISUALIZER</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>STAGE: {metricValue} / 100</span>
            </div>

            <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: 'rgba(0,0,0,0.5)', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[30, 45, 60, 40, 75, 90, 85, 95, 70, 80, 65, 88].map((base, idx) => {
                const height = Math.min(100, Math.round((base * metricValue) / 75));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(255,255,255,0.4)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
              <span>HARMONIC HARVEST</span>
              <span style={{ color: 'var(--accent-color)' }}>DELTA-V PASSING</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="inquire" style={{ borderTop: '1px solid var(--border-soft)', padding: '3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Sora & Klang
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
          COPENHAGEN · KYOTO // 96kHz ANALOG · COMMISSIONS &amp; SPECIFICATIONS OPEN FOR 2026
        </p>
      </footer>
    </div>
  );
}

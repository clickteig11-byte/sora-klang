import { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(75);
  const [activeTab, setActiveTab] = useState('ACOUSTICS');

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            Sora &amp; Klang
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

      {/* FULL-BLEED ARCHITECTURAL HERO */}
      <header id="top" className="hero-fullbleed">
        <img
          src="/references/sites/site-4-sora.jpg"
          alt="SORA &amp; KLANG // SOLID OAK ACOUSTICS"
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
            <p className="hero-lead">
              Near-field studio monitors machined from single-origin Scandinavian white oak with point-source coaxial ribbon drivers.
            </p>
            <a href="#details" className="editorial-cta-btn">
              Explore Specification
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Engineering Readouts">
            <span>32 Hz – 28 kHz</span>
            <span>·</span>
            <span>QUARTER-SAWN WHITE OAK</span>
            <span>·</span>
            <span>AES / IEC 60268-5</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="details" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">ENGINEERING BENCH // ACTIVE MODE</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--ink-primary)' }}>
              Acoustic Telemetry &amp; Calibration
            </h2>
            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Calibrated anechoic frequency response with neutral dispersion, precision CNC-machined from solid Appalachian white oak.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--ink-primary)' }}>
                <span>CALIBRATION ENVELOPE</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>{metricValue}% NOMINAL ({Math.round(65 + metricValue * 0.25)} dB SPL @ 1m)</span>
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
                  <td className="spec-label">FREQUENCY RANGE</td>
                  <td className="spec-value">32 Hz – 28 kHz (±1.5 dB)</td>
                </tr>
                <tr>
                  <td className="spec-label">TOTAL HARMONIC DISTORTION (THD+N)</td>
                  <td className="spec-value">&lt; 0.0018% @ 1 kHz</td>
                </tr>
                <tr>
                  <td className="spec-label">ENCLOSURE DAMPING</td>
                  <td className="spec-value">Quarter-sawn Appalachian White Oak &amp; Bitumen composite</td>
                </tr>
                <tr>
                  <td className="spec-label">CALIBRATION STANDARD</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>AES / IEC 60268-5 certified acoustic chamber</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lab-display-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 700 }}>ANECHOIC SPECTRUM ANALYZER</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>STAGE: {metricValue} / 100</span>
            </div>

            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: 'var(--surface-color)', padding: '1.25rem', border: '1px solid var(--border-soft)' }}>
              {[35, 48, 62, 52, 78, 88, 85, 92, 74, 82, 68, 76].map((base, idx) => {
                const height = Math.min(100, Math.round((base * metricValue) / 75));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(24, 21, 19, 0.15)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
              <span>ANECHOIC COHERENCE</span>
              <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>AES-60268 VERIFIED PASS</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="inquire" style={{ borderTop: '1px solid var(--border-soft)', padding: '4rem 3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.04em', color: 'var(--ink-primary)', fontWeight: 800 }}>
          Sora &amp; Klang
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>
          COPENHAGEN · KYOTO // 96kHz ANALOG · COMMISSIONS &amp; SPECIFICATIONS OPEN FOR 2026
        </p>
      </footer>
    </div>
  );
}

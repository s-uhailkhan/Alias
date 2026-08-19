import React from "react";

/**
 * Layten — Profile Card
 * Visual concept: a racing "form guide" card (turf green + brass trim)
 * fused with a terminal readout, nodding to horseracing, pool, and coding.
 */

const styles = `
.layten-card {
  --felt: #0B3D2E;
  --felt-dark: #06241A;
  --brass: #C9A227;
  --brass-soft: #E4C767;
  --paper: #F3ECD8;
  --ink: #14181A;
  --silk: #8C2F39;
  --term-green: #4CFF9A;

  width: 100%;
  max-width: 420px;
  margin: 32px auto;
  background: var(--felt);
  border: 2px solid var(--brass);
  border-radius: 6px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  font-family: 'Courier New', ui-monospace, monospace;
  color: var(--paper);
  overflow: hidden;
  position: relative;
}

.layten-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    var(--brass) 0 10px,
    transparent 10px 20px
  );
}

.layten-header {
  padding: 28px 24px 16px;
  border-bottom: 1px dashed rgba(228,199,103,0.5);
}

.layten-eyebrow {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brass-soft);
  margin: 0 0 6px;
}

.layten-name-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.layten-name {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.5px;
  margin: 0;
  color: var(--paper);
}

.layten-number {
  font-family: Georgia, serif;
  font-size: 34px;
  font-weight: 700;
  color: var(--silk);
  background: var(--paper);
  border-radius: 4px;
  padding: 2px 10px;
  line-height: 1;
}

.layten-tagline {
  margin: 8px 0 0;
  font-size: 13px;
  color: rgba(243,236,216,0.75);
}

.layten-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(228,199,103,0.35);
  border-bottom: 1px dashed rgba(228,199,103,0.5);
}

.layten-stat {
  background: var(--felt-dark);
  padding: 14px 18px;
}

.layten-stat-label {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--brass-soft);
  margin: 0 0 4px;
}

.layten-stat-value {
  font-size: 15px;
  color: var(--term-green);
  margin: 0;
}

.layten-form {
  padding: 20px 24px 26px;
}

.layten-form-title {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brass-soft);
  margin: 0 0 14px;
}

.layten-entry {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(243,236,216,0.08);
}

.layten-entry:last-child {
  border-bottom: none;
}

.layten-icon {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--brass);
  border-radius: 50%;
  color: var(--brass-soft);
}

.layten-entry-text {
  display: flex;
  flex-direction: column;
}

.layten-entry-title {
  font-family: Georgia, serif;
  font-size: 15px;
  color: var(--paper);
}

.layten-entry-sub {
  font-size: 11px;
  color: rgba(243,236,216,0.55);
}

.layten-footer {
  background: var(--felt-dark);
  padding: 12px 24px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(228,199,103,0.6);
  text-align: center;
}
`;

const HorseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 20c1-3 1-6 3-8 1-1 2-1 2-3 0-2-1-3-1-5 2 0 4 1 5 3 1-1 3-1 4 0 2 1 3 3 3 6 0 2-1 3-2 4l1 3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="15" cy="6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="8 6 3 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="16 6 21 12 16 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PoolIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
  </svg>
);

const Layten: React.FC = () => {
  return (
    <div className="layten-card">
      <style>{styles}</style>

      <div className="layten-header">
        <p className="layten-eyebrow">Runner Profile</p>
        <div className="layten-name-row">
          <h1 className="layten-name">Layten</h1>
          <span className="layten-number">01</span>
        </div>
        <p className="layten-tagline">Software Engineering Student — Durban, KZN</p>
      </div>

      <div className="layten-stats">
        <div className="layten-stat">
          <p className="layten-stat-label">Age</p>
          <p className="layten-stat-value">18</p>
        </div>
        <div className="layten-stat">
          <p className="layten-stat-label">Track</p>
          <p className="layten-stat-value">IT — Software Eng.</p>
        </div>
        <div className="layten-stat">
          <p className="layten-stat-label">Base</p>
          <p className="layten-stat-value">Durban</p>
        </div>
        <div className="layten-stat">
          <p className="layten-stat-label">Status</p>
          <p className="layten-stat-value">In Training</p>
        </div>
      </div>

      <div className="layten-form">
        <p className="layten-form-title">Form Guide</p>

        <div className="layten-entry">
          <span className="layten-icon"><HorseIcon /></span>
          <span className="layten-entry-text">
            <span className="layten-entry-title">Horseracing</span>
            <span className="layten-entry-sub">Studies the odds, backs the form</span>
          </span>
        </div>

        <div className="layten-entry">
          <span className="layten-icon"><CodeIcon /></span>
          <span className="layten-entry-text">
            <span className="layten-entry-title">Coding</span>
            <span className="layten-entry-sub">Builds and debugs for the long haul</span>
          </span>
        </div>

        <div className="layten-entry">
          <span className="layten-icon"><PoolIcon /></span>
          <span className="layten-entry-text">
            <span className="layten-entry-title">Pool</span>
            <span className="layten-entry-sub">Plays the angles, sinks the shot</span>
          </span>
        </div>
      </div>

      <div className="layten-footer">Entry confirmed — Durban, South Africa</div>
    </div>
  );
};

export default Layten;
import React from "react";

/**
 * camo.tsx
 * Profile card for Cameron Josiah — "The Brain" behind the operation.
 * Theme: command-console meets circuit trace, with a felt-green accent
 * (pool) and a solar-amber accent (the hustle).
 */

const PROFILE = {
  name: "Cameron Josiah",
  role: "The Brain",
  age: 23,
  location: "Durban, KwaZulu-Natal",
  study: {
    program: "Software Engineering",
    institution: "Careers IT",
  },
  hobbies: ["Pool", "Solar Sales"],
};

export default function Camo() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* Terminal-style top bar */}
        <div style={styles.topBar}>
          <div style={styles.dots}>
            <span style={{ ...styles.dot, background: "#F5A623" }} />
            <span style={{ ...styles.dot, background: "#3DDC84" }} />
            <span style={{ ...styles.dot, background: "#7C8F84" }} />
          </div>
          <span style={styles.topBarLabel}>profile://camo</span>
        </div>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.avatar}>
            <span style={styles.avatarInitials}>CJ</span>
          </div>
          <div>
            <h1 style={styles.name}>{PROFILE.name}</h1>
            <div style={styles.roleTag}>
              <span style={styles.roleDot} />
              {PROFILE.role.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Data rows */}
        <div style={styles.section}>
          <Row label="AGE" value={`${PROFILE.age}`} />
          <Row label="LOCATION" value={PROFILE.location} />
          <Row
            label="STUDIES"
            value={`${PROFILE.study.program} — ${PROFILE.study.institution}`}
          />
        </div>

        {/* Hobbies as chips */}
        <div style={styles.section}>
          <div style={styles.sectionLabel}>INTERESTS</div>
          <div style={styles.chipRow}>
            {PROFILE.hobbies.map((hobby) => (
              <span key={hobby} style={styles.chip}>
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Footer signature line */}
        <div style={styles.footer}>
          <span style={styles.footerText}>
            system status: <span style={{ color: "#3DDC84" }}>online</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.row}>
      <span style={styles.rowLabel}>{label}</span>
      <span style={styles.rowValue}>{value}</span>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0B0F0D",
    padding: "24px",
    fontFamily:
      "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, monospace",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#131A16",
    border: "1px solid #22302A",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 0 0 1px rgba(61,220,132,0.05), 0 20px 60px rgba(0,0,0,0.5)",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 14px",
    background: "#0F1512",
    borderBottom: "1px solid #22302A",
  },
  dots: { display: "flex", gap: "6px" },
  dot: { width: "9px", height: "9px", borderRadius: "50%", display: "inline-block" },
  topBarLabel: { color: "#7C8F84", fontSize: "11px", letterSpacing: "0.05em" },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "24px 20px 16px",
  },
  avatar: {
    width: "52px",
    height: "52px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #3DDC84, #1E8F52)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  avatarInitials: {
    color: "#0B0F0D",
    fontWeight: 700,
    fontSize: "18px",
  },
  name: {
    margin: 0,
    color: "#EAF2EC",
    fontSize: "19px",
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },
  roleTag: {
    marginTop: "4px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "11px",
    color: "#F5A623",
    letterSpacing: "0.08em",
  },
  roleDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#F5A623",
    display: "inline-block",
  },
  section: {
    padding: "12px 20px",
    borderTop: "1px solid #1B2620",
  },
  sectionLabel: {
    color: "#7C8F84",
    fontSize: "10px",
    letterSpacing: "0.1em",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    fontSize: "13px",
  },
  rowLabel: { color: "#7C8F84", letterSpacing: "0.06em" },
  rowValue: { color: "#EAF2EC", textAlign: "right", maxWidth: "65%" },
  chipRow: { display: "flex", flexWrap: "wrap", gap: "8px" },
  chip: {
    background: "#1B2620",
    border: "1px solid #2C3B33",
    color: "#3DDC84",
    fontSize: "12px",
    padding: "5px 10px",
    borderRadius: "6px",
  },
  footer: {
    padding: "12px 20px",
    borderTop: "1px solid #1B2620",
    background: "#0F1512",
  },
  footerText: { color: "#7C8F84", fontSize: "11px" },
};
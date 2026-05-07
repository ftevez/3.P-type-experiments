"use client";
import { useState, useEffect } from "react";

function Letter({ char, exploding }: { char: string; exploding: boolean }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(false);

  const scatter = () => {
    const angle = Math.random() * Math.PI * 2;
    const dist = 40 + Math.random() * 80;
    setOffset({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist });
    setRotation((Math.random() - 0.5) * 30);
    setHovered(true);
  };

  const snap = () => {
    setOffset({ x: 0, y: 0 });
    setRotation(0);
    setHovered(false);
  };

  useEffect(() => {
    if (exploding) scatter();
    else snap();
  }, [exploding]);

  return (
    <span
      onMouseEnter={scatter}
      onMouseLeave={snap}
      style={{
        display: "inline-block",
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg)`,
        transition: hovered
          ? "transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
        color: hovered ? "var(--rust)" : "var(--ink)",
      }}
    >
      {char}
    </span>
  );
}

const phrases = [
  "TYPOGRAPHY",
  "EXPERIMENT",
  "INTERACTION",
  "LETTERFORM",
  "KINETICS",
];

export default function KineticExperiment() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [staggerKey, setStaggerKey] = useState(0);

  const explodeAll = () => {
    setExploded(true);
    setTimeout(() => setExploded(false), 1200);
  };

  return (
    <div>
      <p className="font-mono" style={{ fontSize: "0.75rem", color: "var(--slate)", marginBottom: "3rem", letterSpacing: "0.05em" }}>
        ↑ Hover over individual letters to scatter them. They snap back when you leave.
      </p>

      <div style={{
        border: "1px solid var(--ink)",
        padding: "4rem 3rem",
        minHeight: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        position: "relative",
        overflow: "visible",
      }}>
        <div className="font-display" style={{
          fontSize: "clamp(3rem, 10vw, 8rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          lineHeight: 1,
          userSelect: "none",
        }}>
          {phrases[currentPhrase].split("").map((char, i) => (
            <Letter key={`${currentPhrase}-${i}`} char={char} exploding={exploded} />
          ))}
        </div>

        <span className="font-mono" style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          fontSize: "0.6rem",
          color: "var(--slate)",
          letterSpacing: "0.15em",
        }}>
          HOVER TO SCATTER
        </span>
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginBottom: "3rem" }}>
        <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--slate)", letterSpacing: "0.1em" }}>SWITCH WORD:</span>
        {phrases.map((phrase, i) => (
          <button
            key={phrase}
            onClick={() => setCurrentPhrase(i)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "4px 12px",
              border: "1px solid var(--ink)",
              background: i === currentPhrase ? "var(--ink)" : "transparent",
              color: i === currentPhrase ? "var(--paper)" : "var(--ink)",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {phrase}
          </button>
        ))}
      </div>

      <button
        onClick={explodeAll}
        style={{
          fontFamily: "'Unbounded', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "1rem 2rem",
          border: "2px solid var(--rust)",
          background: exploded ? "var(--rust)" : "transparent",
          color: exploded ? "var(--paper)" : "var(--rust)",
          cursor: "pointer",
          transition: "all 0.2s",
          marginBottom: "4rem",
        }}
      >
        {exploded ? "SCATTERED!" : "EXPLODE ALL"}
      </button>

      <div style={{ borderTop: "1px solid var(--ink)", paddingTop: "3rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--slate)", margin: 0 }}>
            STAGGERED ENTRANCE —
          </p>
          <button
            onClick={() => setStaggerKey(k => k + 1)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "2px 10px",
              border: "1px solid var(--ink)",
              background: "transparent",
              color: "var(--ink)",
              cursor: "pointer",
            }}
          >
            REPLAY
          </button>
        </div>
        <div key={staggerKey} style={{ overflow: "hidden" }}>
          {"STAGGERED TEXT".split("").map((char, i) => (
            <span
              key={i}
              className="font-serif animate-fade-up"
              style={{
                display: "inline-block",
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                animationDelay: `${i * 0.04}s`,
                opacity: 0,
                color: "var(--ink)",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

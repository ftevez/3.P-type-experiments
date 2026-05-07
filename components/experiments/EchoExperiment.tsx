"use client";
import { useState } from "react";

export default function EchoExperiment() {
  const [word, setWord] = useState("ECHO");
  const [layers, setLayers] = useState(8);
  const [spread, setSpread] = useState(18);
  const [hue, setHue] = useState(220);

  return (
    <div>
      <p className="font-mono" style={{ fontSize: "0.75rem", color: "var(--slate)", marginBottom: "3rem" }}>
        ↑ Adjust the controls to sculpt the echo. Watch a single word become infinite depth.
      </p>

      {/* Main echo display */}
      <div style={{
        border: "1px solid var(--ink)",
        padding: "5rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3rem",
        position: "relative",
        overflow: "hidden",
        minHeight: "340px",
        background: "#0a0a14",
      }}>
        {/* Radial glow */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, hsla(${hue}, 80%, 40%, 0.15) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Echo layers - render from back to front */}
        {Array.from({ length: layers }).map((_, i) => {
          const depth = layers - 1 - i;
          const scale = 1 + depth * (spread / 100);
          const opacity = (1 - depth / layers) * (depth === 0 ? 1 : 0.85);
          const blurAmount = depth * 0.4;
          return (
            <div
              key={i}
              className="font-display"
              style={{
                position: "absolute",
                fontSize: "clamp(2rem, 8vw, 5.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                userSelect: "none",
                pointerEvents: "none",
                transform: `scale(${scale})`,
                opacity,
                filter: blurAmount > 0 ? `blur(${blurAmount}px)` : "none",
                color: depth === 0
                  ? `hsl(${hue}, 90%, 75%)`
                  : `hsla(${hue + depth * 8}, 70%, 60%, 1)`,
                WebkitTextStroke: depth > 2 ? `${depth * 0.5}px hsla(${hue}, 80%, 50%, 0.3)` : "none",
                transition: "all 0.4s ease",
              }}
            >
              {word}
            </div>
          );
        })}

        {/* Front-most label */}
        <div className="font-display" style={{
          position: "relative",
          zIndex: 10,
          fontSize: "clamp(2rem, 8vw, 5.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: "white",
          userSelect: "none",
          textShadow: `0 0 40px hsla(${hue}, 100%, 70%, 0.8), 0 0 80px hsla(${hue}, 100%, 50%, 0.4)`,
        }}>
          {word}
        </div>

        {/* Corner info */}
        <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
          <span className="font-mono" style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em" }}>
            {layers} LAYERS · SPREAD {spread}%
          </span>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem",
      }}>
        {/* Word input */}
        <div>
          <label className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem", color: "var(--slate)" }}>
            WORD
          </label>
          <input
            value={word}
            onChange={(e) => setWord(e.target.value.toUpperCase().slice(0, 10))}
            maxLength={10}
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.75rem 1rem",
              border: "1px solid var(--ink)",
              background: "var(--paper)",
              color: "var(--ink)",
              outline: "none",
              width: "100%",
            }}
          />
        </div>

        {/* Layers */}
        <div>
          <label className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem", color: "var(--slate)" }}>
            LAYERS — {layers}
          </label>
          <input type="range" min={2} max={16} value={layers}
            onChange={(e) => setLayers(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--rust)" }}
          />
        </div>

        {/* Spread */}
        <div>
          <label className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem", color: "var(--slate)" }}>
            SPREAD — {spread}%
          </label>
          <input type="range" min={5} max={40} value={spread}
            onChange={(e) => setSpread(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--rust)" }}
          />
        </div>

        {/* Hue */}
        <div>
          <label className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem", color: "var(--slate)" }}>
            HUE — {hue}°
          </label>
          <input type="range" min={0} max={360} value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            style={{ width: "100%", accentColor: `hsl(${hue}, 80%, 50%)` }}
          />
        </div>
      </div>

      {/* Preset words */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--slate)", alignSelf: "center" }}>TRY:</span>
        {["ECHO", "VOID", "DEPTH", "FORM", "LIGHT", "WAVE"].map((w) => (
          <button key={w} onClick={() => setWord(w)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "3px 10px",
              border: "1px solid var(--ink)",
              background: word === w ? "var(--ink)" : "transparent",
              color: word === w ? "var(--paper)" : "var(--ink)",
              cursor: "pointer",
            }}>
            {w}
          </button>
        ))}
      </div>

      {/* Theory note */}
      <div style={{ borderTop: "1px solid var(--ink)", paddingTop: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div>
            <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--slate)", marginBottom: "1rem" }}>
              CONCEPT —
            </p>
            <p className="font-serif" style={{ fontSize: "1rem", lineHeight: 1.7, fontStyle: "italic" }}>
              "Repetition transforms. What begins as language becomes texture, then pattern, then pure visual form."
            </p>
          </div>
          <div>
            <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--slate)", marginBottom: "1rem" }}>
              TECHNIQUE —
            </p>
            <p className="font-mono" style={{ fontSize: "0.72rem", lineHeight: 1.8, color: "var(--slate)" }}>
              Each layer is scaled by a constant factor from the center. Opacity and blur decrease with depth. Chromatic hue shifts per layer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

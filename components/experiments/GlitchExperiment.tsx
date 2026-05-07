"use client";
import { useState, useEffect, useRef } from "react";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&░▒▓█▄▀■□▪▫";

function useGlitch(text: string, active: boolean, intensity: number) {
  const [displayed, setDisplayed] = useState(text);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setDisplayed(text);
      return;
    }

    iterRef.current = 0;
    const maxIter = text.length * 3;

    frameRef.current = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iterRef.current / 3) return char;
            if (Math.random() > intensity / 100) return char;
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      iterRef.current += 1;
      if (iterRef.current > maxIter) {
        clearInterval(frameRef.current!);
        setDisplayed(text);
      }
    }, 30);

    return () => { if (frameRef.current) clearInterval(frameRef.current); };
  }, [text, active, intensity]);

  return displayed;
}

const presets = ["GLITCH", "CORRUPTED", "DIGITAL DECAY", "ERROR 404", "SYSTEM FAILURE"];

export default function GlitchExperiment() {
  const [inputText, setInputText] = useState("GLITCH");
  const [glitching, setGlitching] = useState(false);
  const [intensity, setIntensity] = useState(50);
  const displayed = useGlitch(inputText.toUpperCase(), glitching, intensity);

  const triggerGlitch = () => {
    setGlitching(true);
    setTimeout(() => setGlitching(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) triggerGlitch();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="font-mono" style={{ fontSize: "0.75rem", color: "var(--slate)", marginBottom: "3rem" }}>
        ↑ Type anything below. The text auto-glitches. Hit the button for a full corruption cycle.
      </p>

      <div style={{
        background: "var(--ink)",
        border: "2px solid var(--rust)",
        padding: "4rem 3rem",
        minHeight: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative" }}>
          {/* Red channel */}
          <div className="font-display" style={{
            position: "absolute",
            inset: 0,
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 900,
            color: "rgba(255, 50, 50, 0.6)",
            transform: glitching ? `translate(${(Math.random() - 0.5) * 8}px, 0)` : "translate(3px, 0)",
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}>
            {displayed}
          </div>
          {/* Blue channel */}
          <div className="font-display" style={{
            position: "absolute",
            inset: 0,
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 900,
            color: "rgba(50, 150, 255, 0.6)",
            transform: "translate(-3px, 0)",
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}>
            {displayed}
          </div>
          <div className="font-display" style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 900,
            color: "var(--acid)",
            letterSpacing: "-0.02em",
            userSelect: "none",
            whiteSpace: "nowrap",
            position: "relative",
          }}>
            {displayed}
          </div>
        </div>

        <div style={{ position: "absolute", top: "1rem", right: "1rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <div style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: glitching ? "var(--rust)" : "#00ff88",
            boxShadow: glitching ? "0 0 8px var(--rust)" : "0 0 8px #00ff88",
          }} />
          <span className="font-mono" style={{ fontSize: "0.55rem", color: glitching ? "var(--rust)" : "#00ff88", letterSpacing: "0.15em" }}>
            {glitching ? "CORRUPTING" : "STABLE"}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          maxLength={16}
          placeholder="TYPE SOMETHING..."
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.75rem 1rem",
            border: "1px solid var(--ink)",
            background: "var(--paper)",
            color: "var(--ink)",
            outline: "none",
            width: "240px",
          }}
        />
        <button
          onClick={triggerGlitch}
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.75rem 1.5rem",
            border: "2px solid var(--rust)",
            background: glitching ? "var(--rust)" : "transparent",
            color: glitching ? "var(--paper)" : "var(--rust)",
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          CORRUPT
        </button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <label className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem", color: "var(--slate)" }}>
          INTENSITY — {intensity}%
        </label>
        <input type="range" min={1} max={100} value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          style={{ width: "240px", accentColor: "var(--rust)" }}
        />
      </div>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--slate)", alignSelf: "center" }}>PRESETS:</span>
        {presets.map((p) => (
          <button key={p} onClick={() => { setInputText(p); setTimeout(triggerGlitch, 100); }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "3px 10px",
              border: "1px solid var(--ink)",
              background: inputText === p ? "var(--ink)" : "transparent",
              color: inputText === p ? "var(--paper)" : "var(--ink)",
              cursor: "pointer",
            }}>
            {p}
          </button>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--ink)", paddingTop: "2.5rem" }}>
        <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--slate)", marginBottom: "1.5rem" }}>SYSTEM LOG —</p>
        <div style={{ background: "var(--ink)", padding: "1.5rem", fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", lineHeight: 1.8, color: "#00ff88" }}>
          <div>{`> INIT GLITCH_MODULE v2.4.1`}</div>
          <div>{`> LOADING CORRUPTION MATRIX...`}</div>
          <div>{`> APPLYING CHROMATIC ABERRATION`}</div>
          <div style={{ color: "var(--rust)" }}>{`> WARNING: SIGNAL DEGRADED`}</div>
          <div>{`> STATUS: ${glitching ? "CORRUPTING DATA_STREAM" : "AWAITING TRIGGER"}`}</div>
          <div>{`> █ _`}</div>
        </div>
      </div>
    </div>
  );
}

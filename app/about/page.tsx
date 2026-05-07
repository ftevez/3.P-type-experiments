export const metadata = {
  title: "About — Type Experiments",
  description: "About this project",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      <div style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>

        <div className="animate-fade-up" style={{ borderBottom: "1px solid var(--ink)", paddingBottom: "3rem", marginBottom: "4rem" }}>
          <span className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--slate)", display: "block", marginBottom: "1rem" }}>
            ABOUT THIS PROJECT
          </span>
          <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.9 }}>
            Making<br />
            <span style={{ WebkitTextStroke: "2px var(--ink)", color: "transparent" }}>Type</span><br />
            Move
          </h1>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
          <div className="animate-fade-up delay-200">
            <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--slate)", marginBottom: "1rem" }}>WHAT IS THIS —</p>
            <p className="font-serif" style={{ fontSize: "1.25rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              I started wondering what type could do if you actually touched it. Not scroll-triggered hero text — just letters with physics, bad behavior, and a reason to hover.
            </p>
            <p className="font-mono" style={{ fontSize: "0.8rem", lineHeight: 1.8, color: "var(--slate)" }}>
              None of this is practical. That's fine. I built these to understand how they'd feel, and they kept surprising me. Each one started as a single question and turned into an afternoon.
            </p>
          </div>

          <div className="animate-fade-up delay-400">
            <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--slate)", marginBottom: "1.5rem" }}>BUILT WITH —</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                ["Framework", "Next.js 16 (App Router)"],
                ["Language", "TypeScript"],
                ["Styling", "CSS Variables + Tailwind"],
                ["Fonts", "Unbounded · DM Serif · Space Mono"],
                ["Hosting", "Vercel"],
              ].map(([key, val]) => (
                <div key={key} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--mist)", padding: "0.75rem 0" }}>
                  <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--slate)", letterSpacing: "0.1em" }}>{key}</span>
                  <span className="font-mono" style={{ fontSize: "0.7rem", fontWeight: 700 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-up delay-500" style={{ borderTop: "1px solid var(--ink)", marginTop: "5rem", paddingTop: "3rem" }}>
          <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--slate)", marginBottom: "2rem" }}>EXPERIMENTS —</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { num: "001", title: "Kinetic Text", note: "Scatter and snap" },
              { num: "002", title: "Glitch Machine", note: "Chromatic corruption" },
              { num: "003", title: "Echo Chamber", note: "Layered depth" },
            ].map((e) => (
              <div key={e.num}>
                <div className="font-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--slate)", marginBottom: "0.25rem" }}>EXP.{e.num}</div>
                <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em" }}>{e.title}</div>
                <div className="font-serif" style={{ fontSize: "0.9rem", fontStyle: "italic", color: "var(--slate)", marginTop: "0.25rem" }}>{e.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-600" style={{ marginTop: "5rem", borderLeft: "3px solid var(--rust)", paddingLeft: "2rem" }}>
          <blockquote className="font-serif" style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", lineHeight: 1.5, fontStyle: "italic", margin: 0 }}>
            "I spent three hours making letters scatter correctly and felt unreasonably satisfied about it."
          </blockquote>
          <cite className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--slate)", display: "block", marginTop: "1rem" }}>
            — while building this
          </cite>
        </div>

      </div>
    </div>
  );
}

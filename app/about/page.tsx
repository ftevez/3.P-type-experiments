export const metadata = {
  title: "About — Type Experiments",
  description: "About this project",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>

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
            <p className="font-serif" style={{ fontSize: "1.25rem", lineHeight: 1.7 }}>
              Cool little type project; none of it is practical, just aesthetically pleasing to look at.
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

        <div className="animate-fade-up delay-500" style={{ borderTop: "1px solid var(--ink)", marginTop: "5rem", paddingTop: "3rem", paddingBottom: "1rem" }}>
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


      </div>
    </div>
  );
}

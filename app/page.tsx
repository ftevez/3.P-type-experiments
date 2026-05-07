import Link from "next/link";

const experiments = [
  {
    slug: "kinetic",
    number: "001",
    title: "Kinetic Text",
    subtitle: "Words in motion",
    description: "Type that responds to your cursor — letters scatter, orbit, and snap back. Physics-based interactions with pure React state.",
    tags: ["Motion", "Cursor", "CSS"],
    color: "var(--acid)",
  },
  {
    slug: "glitch",
    number: "002",
    title: "Glitch Machine",
    subtitle: "Corrupted language",
    description: "Enter any text and watch it dissolve into digital noise. Randomized glitch layers, scanlines, and chromatic aberration.",
    tags: ["Glitch", "Input", "Animation"],
    color: "var(--rust)",
  },
  {
    slug: "echo",
    number: "003",
    title: "Echo Chamber",
    subtitle: "Depth through repetition",
    description: "A single word echoes through layers of transparency and scale. Control depth, speed, and drift to create infinite typographic space.",
    tags: ["Layers", "Depth", "Interactive"],
    color: "#a0c4ff",
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      <section style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="animate-fade-up">
          <div className="font-display" style={{
            fontSize: "clamp(3rem, 10vw, 9rem)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}>
            <span style={{ display: "block" }}>Type</span>
            <span style={{ display: "block", WebkitTextStroke: "2px var(--ink)", color: "transparent" }}>Experi</span>
            <span style={{ display: "block" }}>ments</span>
          </div>
        </div>

        <div className="animate-fade-up delay-300" style={{ marginTop: "2rem", maxWidth: "520px" }}>
          <p className="font-mono" style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--slate)" }}>
            A laboratory for interactive typography. Three experiments exploring how text can move, break, and multiply.
          </p>
        </div>

        <div className="animate-fade-in delay-500" style={{
          marginTop: "3rem",
          overflow: "hidden",
          borderTop: "1px solid var(--ink)",
          borderBottom: "1px solid var(--ink)",
          padding: "0.6rem 0",
          background: "var(--ink)",
        }}>
          <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap", gap: "4rem" }}>
            {Array(8).fill("KINETIC · GLITCH · ECHO · TYPE · MOTION · LANGUAGE · FORM · ").map((t, i) => (
              <span key={i} className="font-display" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--acid)" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {experiments.map((exp, i) => (
            <Link key={exp.slug} href={`/experiments/${exp.slug}`} className="experiment-card animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.15}s`, opacity: 0, background: "var(--paper)", padding: "0", overflow: "hidden" }}>
              <div style={{ height: "4px", background: exp.color }} />
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--slate)", letterSpacing: "0.2em" }}>EXP.{exp.number}</span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: exp.color, display: "block" }} />
                </div>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1, marginBottom: "0.25rem" }}>{exp.title}</h2>
                <p className="font-serif" style={{ fontSize: "1rem", fontStyle: "italic", color: "var(--slate)", marginBottom: "1rem" }}>{exp.subtitle}</p>
                <p className="font-mono" style={{ fontSize: "0.75rem", lineHeight: 1.7, color: "var(--slate)", marginBottom: "1.5rem" }}>{exp.description}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {exp.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: "0.6rem" }}>{tag}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--ink)", paddingTop: "2rem", paddingBottom: "4rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
        {[{ value: "03", label: "Experiments" }, { value: "∞", label: "Interactions" }, { value: "01", label: "Obsession" }].map((s) => (
          <div key={s.label}>
            <div className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 200, letterSpacing: "-0.02em" }}>{s.value}</div>
            <div className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--slate)", marginTop: "0.25rem" }}>{s.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

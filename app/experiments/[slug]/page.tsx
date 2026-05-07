import { notFound } from "next/navigation";
import KineticExperiment from "@/components/experiments/KineticExperiment";
import GlitchExperiment from "@/components/experiments/GlitchExperiment";
import EchoExperiment from "@/components/experiments/EchoExperiment";

const experiments = {
  kinetic: {
    title: "Kinetic Text",
    number: "00",
    description: "Letters that respond to your cursor — scatter and snap.",
    component: KineticExperiment,
  },
  glitch: {
    title: "Glitch Machine",
    number: "01",
    description: "Text that dissolves into digital corruption.",
    component: GlitchExperiment,
  },
  echo: {
    title: "Echo Chamber",
    number: "02",
    description: "A word that echoes through infinite typographic depth.",
    component: EchoExperiment,
  },
};

export async function generateStaticParams() {
  return Object.keys(experiments).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = experiments[slug as keyof typeof experiments];
  if (!exp) return { title: "Not Found" };
  return {
    title: `${exp.title} — Type Experiments`,
    description: exp.description,
  };
}

export default async function ExperimentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = experiments[slug as keyof typeof experiments];
  if (!exp) notFound();

  const ExperimentComponent = exp.component;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      <div className="animate-fade-up" style={{ paddingTop: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--ink)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--slate)", display: "block", marginBottom: "0.5rem" }}>
              EXP {exp.number}
            </span>
            <h1 className="font-display" style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}>
              {exp.title}
            </h1>
          </div>
          <p className="font-serif" style={{
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "var(--slate)",
            maxWidth: "320px",
          }}>
            {exp.description}
          </p>
        </div>
      </div>

      <div className="animate-fade-up delay-200" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <ExperimentComponent />
      </div>
    </div>
  );
}

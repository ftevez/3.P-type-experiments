import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Type Experiments",
  description: "A collection of interactive typographic experiments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <footer style={{ borderTop: "1px solid var(--ink)", padding: "2rem", marginTop: "6rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <span className="font-display" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Type Experiments</span>
            <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--slate)" }}>Built with Next.js · 2025</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

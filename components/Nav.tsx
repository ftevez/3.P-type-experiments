"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "var(--paper)",
      borderBottom: "1px solid var(--ink)",
      padding: "1rem 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="font-display" style={{
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}>
            TYPE//EXP
          </span>
        </Link>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/" className="nav-link" style={{
            fontWeight: pathname === "/" ? "700" : "400",
          }}>
            Index
          </Link>
          <Link href="/experiments/kinetic" className="nav-link" style={{
            fontWeight: pathname?.includes("kinetic") ? "700" : "400",
          }}>
            Kinetic
          </Link>
          <Link href="/experiments/glitch" className="nav-link" style={{
            fontWeight: pathname?.includes("glitch") ? "700" : "400",
          }}>
            Glitch
          </Link>
          <Link href="/experiments/echo" className="nav-link" style={{
            fontWeight: pathname?.includes("echo") ? "700" : "400",
          }}>
            Echo
          </Link>
          <Link href="/about" className="nav-link" style={{
            fontWeight: pathname === "/about" ? "700" : "400",
          }}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import PortalNav, { type PortalTheme } from "../components/PortalNav";

const theme: PortalTheme = {
  bg: "#0A0F0C",
  text: "#D7F5E3",
  dim: "#5C7A67",
  accent: "#39FF88",
  accent2: "#1E8E4F",
  border: "#16261C",
  displayFont: "'JetBrains Mono', monospace",
  bodyFont: "'JetBrains Mono', monospace",
};

// Replace with your real projects — each stage is a short line, styled like a diff/log entry
const PROJECTS = [
  {
    name: "NPFL Insight",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/LeinadMori/npfl-insight",
    demo: "#",
    log: [
      { label: "Problem", line: "Nigerian league fans had no single source for live stats." },
      { label: "Research", line: "Audited 4 existing apps; found onboarding drop-off at signup." },
      { label: "Design", line: "Wireframed a scores-first home with zero required signup." },
      { label: "Development", line: "Built with React + Vite, live data via REST polling." },
      { label: "Result", line: "Shipped MVP; used as the base for later sports work." },
    ],
  },
  {
    name: "KlasXR",
    stack: ["React", "WebXR", "TypeScript"],
    github: "https://github.com/LeinadMori/klasxr",
    demo: "#",
    log: [
      { label: "Problem", line: "Nigerian curriculum has no VR-native learning tools." },
      { label: "Research", line: "Mapped curriculum topics best suited to spatial learning." },
      { label: "Design", line: "Prototyped low-poly 3D scenes for low-end device performance." },
      { label: "Development", line: "Built VR/AR modules aligned to the national curriculum." },
      { label: "Result", line: "In progress — core scene engine complete." },
    ],
  },
];

function CaseStudy({ project }: { project: (typeof PROJECTS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: `1px solid ${theme.border}`, borderRadius: "10px", overflow: "hidden", background: "#0D1410" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: theme.text,
          fontFamily: theme.bodyFont,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ color: theme.accent, fontSize: "13px" }}>$</span>
          <span style={{ fontWeight: 700, fontSize: "15px" }}>{project.name}</span>
          <div style={{ display: "flex", gap: "6px" }}>
            {project.stack.map((s) => (
              <span key={s} style={{ fontSize: "10px", color: theme.dim, border: `1px solid ${theme.border}`, borderRadius: "4px", padding: "2px 6px" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={16} color={theme.dim} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${theme.border}` }}>
              {project.log.map((entry, i) => (
                <div key={entry.label} style={{ display: "flex", gap: "12px", padding: "10px 0", fontSize: "13px" }}>
                  <span style={{ color: theme.accent2, width: "18px" }}>{i % 2 === 0 ? "+" : " "}</span>
                  <span style={{ color: theme.dim, width: "110px", flexShrink: 0 }}>{entry.label}</span>
                  <span style={{ color: theme.text }}>{entry.line}</span>
                </div>
              ))}
              <div style={{ display: "flex", gap: "18px", marginTop: "12px" }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: theme.dim, fontSize: "12px" }}>
                  <FaGithub size={13} /> Source
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: theme.accent, fontSize: "12px" }}>
                  <ExternalLink size={13} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FrontendLab() {
  return (
    <div style={{ minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: theme.bodyFont, backgroundImage: `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)`, backgroundSize: "36px 36px" }}>
      <PortalNav theme={theme} />

      <div style={{ padding: "80px 40px 40px", textAlign: "center" }}>
        <span style={{ color: theme.accent, fontSize: "12px", letterSpacing: "0.15em" }}>~/frontend-lab</span>
        <h1
          style={{
            fontFamily: theme.displayFont,
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            margin: "14px 0 10px",
          }}
        >
          Problem → Result.
        </h1>
        <p style={{ maxWidth: "460px", margin: "0 auto", color: theme.dim, fontSize: "13.5px", lineHeight: 1.7 }}>
          Every project below expands into its case study — the research, the tradeoffs, the shipped result.
        </p>
      </div>

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 40px 100px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {PROJECTS.map((p) => (
          <CaseStudy key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}
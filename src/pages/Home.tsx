import { useState, useEffect, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import brandLogo from "../assets/brand-logo.png";

// Each portal carries the accent color of the "room" it leads to.
// Hovering a card bleeds that color into the shared background —
// a preview of the mood shift before you actually step through.
const PORTALS = [
  {
    id: "ai-studio",
    label: "AI Studio",
    tag: "AI CONTENT CREATOR",
    description: "Commercials, campaigns, and images built prompt by prompt.",
    path: "/ai-studio",
    accent: "#A855F7",
    glow: "rgba(168,85,247,0.16)",
  },
  {
    id: "writing-desk",
    label: "Writing Desk",
    tag: "WRITER",
    description: "Sports journalism, short stories, poetry, brand copy.",
    path: "/writing-desk",
    accent: "#B08D57",
    glow: "rgba(176,141,87,0.16)",
  },
  {
    id: "frontend-lab",
    label: "Frontend Lab",
    tag: "FRONTEND DEVELOPER",
    description: "Case studies from idea to shipped, working product.",
    path: "/frontend-lab",
    accent: "#39FF88",
    glow: "rgba(57,255,136,0.14)",
  },
];

const ROLES = ["AI Content Creator", "Writer", "Software Engineering", "Story Engineer"];

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/irom-daniel" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/LeinadMori" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Leinad_Mori" },
  { icon: SiSubstack, label: "Substack", href: "https://substack.com/@leinadmori" },
];

export default function Home() {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const hoveredPortal = PORTALS.find((p) => p.id === hovered);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0B0C10",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background — tints toward the hovered portal's color */}
      <motion.div
        animate={{
          background: hoveredPortal
            ? `radial-gradient(ellipse at 75% 50%, ${hoveredPortal.glow} 0%, transparent 60%)`
            : "radial-gradient(ellipse at 75% 50%, rgba(168,85,247,0.05) 0%, transparent 60%)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #1a2332",
          position: "relative",
          zIndex: 5,
        }}
      >
        <span style={{ fontSize: "13px", color: "#3d4f63", letterSpacing: "0.15em" }}>DANIEL IROM</span>
        <div style={{ display: "flex", gap: "24px" }}>
          <button onClick={() => navigate("/about")} style={navLinkStyle}>About</button>
          <button onClick={() => navigate("/contact")} style={navLinkStyle}>Contact</button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "80px 40px 40px", textAlign: "center", position: "relative", zIndex: 5 }}>
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={brandLogo}
          alt="Daniel Irom"
          style={{ width: "94px", height: "84px", objectFit: "contain", margin: "0 auto 28px", borderRadius: "16px" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            letterSpacing: "-2px",
            color: "#fff",
            margin: "0 0 20px",
          }}
        >
          Stories. Systems. Screens.
        </motion.h1>

        <div style={{ height: "34px", marginBottom: "20px" }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={ROLES[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: "18px", color: "#A855F7", fontWeight: 500, margin: 0 }}
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p style={{ maxWidth: "480px", margin: "0 auto", color: "#8a94a3", fontSize: "15px", lineHeight: 1.7 }}>
          Three crafts, one storyteller. Step into the room that fits what you're here for.
        </p>
      </div>

      {/* Portal cards */}
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: "20px",
          padding: "20px 40px 60px",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 5,
        }}
      >
        {PORTALS.map((portal, i) => (
          <motion.div
            key={portal.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHovered(portal.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(portal.path)}
            whileHover={{ y: -6 }}
            style={{
              flex: "1 1 280px",
              maxWidth: "320px",
              minHeight: "260px",
              padding: "32px 28px",
              borderRadius: "18px",
              background: hovered === portal.id ? "#131a24" : "#0f141b",
              border: `1px solid ${hovered === portal.id ? portal.accent : "#1e2a36"}`,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "background 0.3s, border-color 0.3s",
              boxShadow: hovered === portal.id ? `0 0 40px ${portal.glow}` : "none",
            }}
          >
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: portal.accent, fontWeight: 600 }}>
                {portal.tag}
              </span>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "12px 0 10px",
                }}
              >
                {portal.label}
              </h3>
              <p style={{ fontSize: "13.5px", color: "#8a94a3", lineHeight: 1.6, margin: 0 }}>
                {portal.description}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "20px", color: portal.accent, fontSize: "13px", fontWeight: 600 }}>
              Enter <ArrowUpRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 40px",
          borderTop: "1px solid #1a2332",
          position: "relative",
          zIndex: 5,
        }}
      >
        <span style={{ fontSize: "12px", color: "#3d4f63" }}>© 2026 Daniel Irom.</span>
        <div style={{ display: "flex", gap: "22px" }}>
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{ color: "#3d4f63" }}>
              <Icon size={16} />
            </a>
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "#3d4f63" }}>Lagos, NG</span>
      </footer>
    </div>
  );
}

const navLinkStyle: CSSProperties = {
  background: "none",
  border: "none",
  color: "#8a94a3",
  fontSize: "13px",
  cursor: "pointer",
  fontFamily: "'Space Grotesk', sans-serif",
};
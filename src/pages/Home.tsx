import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import brandLogo from "../assets/brand-logo.png";

const NAV_CARDS = [
  { id: "about", label: "About", description: "The mind behind the brand", path: "/about" },
  { id: "work", label: "Experience", description: "Projects & case studies", path: "/work" },
  { id: "resume", label: "Resume", description: "Credentials & achievements", path: "/resume" },
  { id: "contact", label: "Contact", description: "Let's build something together", path: "/contact" },
  { id: "skills", label: "Technical Skills", description: "Stack, tools & expertise", path: "/skills" },
];

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/irom-daniel" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/LeinadMori" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Leinad_Mori" },
  { icon: SiSubstack, label: "Substack", href: "https://substack.com/@leinadmori" },
];

function MagneticCard({ card, index }: { card: (typeof NAV_CARDS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.1);
    y.set((e.clientY - cy) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.5, ease: "easeOut" }}
      style={{
        x: springX,
        y: springY,
        cursor: "pointer",
        marginBottom: "10px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(card.path)}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "14px",
          padding: "18px 22px",
          background: hovered
            ? "linear-gradient(135deg, #1a0d2e 0%, #1F2833 100%)"
            : "#161d27",
          border: `1px solid ${hovered ? "#A855F7" : "#1e2a36"}`,
          boxShadow: hovered
            ? "0 0 28px rgba(168,85,247,0.2), inset 0 0 40px rgba(168,85,247,0.03)"
            : "0 2px 8px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.07) 0%, transparent 70%)",
            }}
          />
        )}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.03em",
                color: hovered ? "#A855F7" : "#C5C6C7",
                transition: "color 0.3s",
              }}
            >
              {card.label}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: hovered ? "#9ca3af" : "#3d4f63",
                transition: "color 0.3s",
              }}
            >
              {card.description}
            </span>
          </div>

          <motion.div
            animate={{ x: hovered ? 0 : -6, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={16} style={{ color: "#A855F7" }} />
          </motion.div>
        </div>

        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            background: "linear-gradient(90deg, #6B21A8, #A855F7)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [blink, setBlink] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  const filtered = NAV_CARDS.filter(
    (c) =>
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && filtered.length === 1) navigate(filtered[0].path);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0B0C10",
        fontFamily: "'Space Grotesk', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* TOP SEARCH BAR */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "12px 32px",
          borderBottom: "1px solid #1a2332",
          background: "#0B0C10",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flex: 1,
            maxWidth: "600px",
            margin: "0 auto",
            background: "#131b24",
            border: "1px solid #1e2a36",
            borderRadius: "10px",
            padding: "10px 16px",
          }}
        >
          <Search size={14} style={{ color: "#3d4f63", flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search pages, skills, projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#C5C6C7",
              fontSize: "13px",
              caretColor: "#A855F7",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              padding: "2px 8px",
              borderRadius: "6px",
              background: "#0B0C10",
              color: "#3d4f63",
              border: "1px solid #1e2a36",
              flexShrink: 0,
            }}
          >
            ⌘K
          </span>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div style={{ display: "flex", flex: 1 }}>

        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            flex: "0 0 55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "60px 64px",
            borderRight: "1px solid #1a2332",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Purple glow background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at 10% 80%, rgba(168,85,247,0.07) 0%, transparent 55%), radial-gradient(ellipse at 90% 10%, rgba(107,33,168,0.05) 0%, transparent 50%)",
            }}
          />

          {/* LOGO BLOCK */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{ marginBottom: "36px" }}
          >
            {/* BRAND LOGO */}
            <img
              src={brandLogo}
              alt="I'm Irom brand logo"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "28px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                filter: "drop-shadow(0 0 28px rgba(168,85,247,0.6)) drop-shadow(0 0 60px rgba(168,85,247,0.2))",
                borderRadius: "20px",
              }}
            />

            {/* "I'm" label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}
            >
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>I'm</span>
              <div style={{ height: "1px", width: "32px", background: "#A855F7", opacity: 0.35 }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3.5rem, 7vw, 6rem)", lineHeight: 0.88, color: "#ffffff", letterSpacing: "-3px", margin: 0 }}
            >
              Irom<motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                style={{ color: "#A855F7" }}
              >.</motion.span>
            </motion.h1>
          </motion.div>

          {/* TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            style={{ marginBottom: "40px" }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "#C5C6C7",
                fontWeight: 300,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Engineer by logic.{" "}
              <span style={{ color: "#A855F7", fontWeight: 500 }}>
                Storyteller by nature.
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  background: "#A855F7",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                  opacity: blink ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              />
            </p>

            <p
              style={{
                marginTop: "16px",
                maxWidth: "380px",
                color: "#3d4f63",
                fontSize: "14px",
                lineHeight: 1.75,
              }}
            >
              Building systems that scale. Crafting narratives that resonate.
              Where code meets communication.
            </p>
          </motion.div>

          {/* CTA BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/work")}
            style={{
              alignSelf: "center",
              padding: "12px 28px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6B21A8 0%, #A855F7 100%)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.03em",
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 0 20px rgba(168,85,247,0.3)",
            }}
          >
            View My Work →
          </motion.button>
        </motion.div>

        {/* RIGHT PANEL — Nav Cards */}
        <div
          style={{
            flex: "0 0 45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 48px",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3d4f63",
              marginBottom: "16px",
              fontWeight: 500,
            }}
          >
            Navigate
          </motion.p>

          {filtered.map((card, i) => (
            <MagneticCard key={card.id} card={card} index={i} />
          ))}

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "#3d4f63", fontSize: "13px" }}
            >
              No pages match "{search}"
            </motion.p>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 40px",
          borderTop: "1px solid #1a2332",
        }}
      >
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>
          © 2026 I'm Irom. All rights reserved.
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              title={label}
              style={{ color: "#3d4f63", display: "flex", alignItems: "center" }}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>

        <span style={{ fontSize: "12px", color: "#1e2a36" }}>Lagos, NG</span>
      </motion.footer>
    </div>
  );
}

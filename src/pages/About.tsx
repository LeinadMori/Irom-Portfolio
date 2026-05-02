import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import brandLogo from "../assets/brand-logo.png";
import photo1 from "../assets/about-image01.png";
import photo2 from "../assets/about-image02.png";
import photo3 from "../assets/about-image03.jpg";

const SERVICES = [
  {
    title: "Software Development",
    description: "Building scalable, performant applications from backend systems to polished frontends. Clean code, modern stacks, real-world impact.",
    icon: "⌨",
  },
  {
    title: "PR & Communications",
    description: "Crafting strategic narratives that position brands, manage perception, and drive meaningful public engagement.",
    icon: "📡",
  },
  {
    title: "Content Writing",
    description: "Long-form articles, technical documentation, brand copy — words engineered to inform, persuade, and resonate.",
    icon: "✍",
  },
  {
    title: "AI Solutions",
    description: "Designing and integrating intelligent systems — from automation pipelines to AI-powered products that solve real problems.",
    icon: "◈",
  },
  {
    title: "Brand Strategy",
    description: "Defining identity, voice, and visual systems that make brands unmistakable in crowded markets.",
    icon: "◎",
  },
  {
    title: "Technical Consulting",
    description: "Advising teams on architecture decisions, tech stack selection, and engineering best practices that scale.",
    icon: "⬡",
  },
];

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/irom-daniel" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/LeinadMori" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Leinad_Mori" },
  { icon: SiSubstack, label: "Substack", href: "https://substack.com/@leinadmori" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export default function About() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#0B0C10",
      fontFamily: "'Space Grotesk', sans-serif",
      color: "#C5C6C7",
    }}>

      {/* TOP NAV */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 40px",
          borderBottom: "1px solid #1a2332",
          background: "#0B0C10",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            color: "#3d4f63",
            cursor: "pointer",
            fontSize: "13px",
            fontFamily: "'Space Grotesk', sans-serif",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#A855F7")}
          onMouseLeave={e => (e.currentTarget.style.color = "#3d4f63")}
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <img
          src={brandLogo}
          alt="I'm Irom"
          style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "8px" }}
        />

        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d4f63" }}>
          About
        </span>
      </motion.div>

      {/* HERO SECTION */}
      <section style={{ padding: "72px 64px 0", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "#A855F7" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>
            The mind behind the brand
          </span>
        </motion.div>

        {/* TWO COLUMN: Bio left, Collage right */}
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>

          {/* LEFT — Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ flex: "0 0 42%" }}
          >
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1,
              color: "#fff",
              letterSpacing: "-2px",
              marginBottom: "28px",
            }}>
              I'm Irom<span style={{ color: "#A855F7" }}>.</span>
            </h1>

            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#8a9bb0", marginBottom: "16px" }}>
              I'm a software engineer and communications strategist who lives at the intersection of
              technology and storytelling — building systems that work and narratives that land.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#8a9bb0", marginBottom: "16px" }}>
              With a background spanning software development, public relations, and AI integration,
              I bring a rare dual fluency: I speak both in code and in copy, turning complex ideas
              into products and stories that move people.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#8a9bb0", marginBottom: "40px" }}>
              Based in Lagos, Nigeria — building globally, thinking systemically, and always asking
              the question: <em style={{ color: "#A855F7" }}>what story does this solve?</em>
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "10px",
                background: "transparent",
                color: "#A855F7",
                border: "1px solid #A855F7",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Let's work together <ArrowUpRight size={14} />
            </motion.button>
          </motion.div>

          {/* RIGHT — Photo collage */}
          <div style={{ flex: 1, position: "relative", height: "480px" }}>

            {/* Photo 1 — large, top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: -1, zIndex: 10 }}
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "220px",
                height: "280px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid #1a2332",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                cursor: "pointer",
                zIndex: 3,
              }}
            >
              <img src={photo1} alt="Irom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(11,12,16,0.4) 0%, transparent 60%)",
              }} />
            </motion.div>

            {/* Photo 2 — medium, top right, slightly rotated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: 2, zIndex: 10 }}
              style={{
                position: "absolute",
                top: "30px",
                left: "200px",
                width: "180px",
                height: "230px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid #1a2332",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              <img src={photo2} alt="Irom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(11,12,16,0.3) 0%, transparent 60%)",
              }} />
            </motion.div>

            {/* Photo 3 — bottom center, slight tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
              style={{
                position: "absolute",
                top: "220px",
                left: "100px",
                width: "200px",
                height: "240px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid #A855F7",
                boxShadow: "0 0 32px rgba(168,85,247,0.2), 0 20px 60px rgba(0,0,0,0.5)",
                cursor: "pointer",
                zIndex: 4,
              }}
            >
              <img src={photo3} alt="Irom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(168,85,247,0.15) 0%, transparent 60%)",
              }} />
            </motion.div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{
                position: "absolute",
                top: "16px",
                right: "0px",
                background: "#161d27",
                border: "1px solid #1e2a36",
                borderRadius: "10px",
                padding: "10px 16px",
                zIndex: 5,
              }}
            >
              <p style={{ fontSize: "10px", color: "#3d4f63", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>Based in</p>
              <p style={{ fontSize: "13px", color: "#C5C6C7", fontWeight: 600, margin: "2px 0 0" }}>Lagos, Nigeria 🌍</p>
            </motion.div>

            {/* Floating stats tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "0px",
                background: "linear-gradient(135deg, #1a0d2e, #161d27)",
                border: "1px solid #A855F7",
                borderRadius: "10px",
                padding: "10px 16px",
                zIndex: 5,
              }}
            >
              <p style={{ fontSize: "10px", color: "#A855F7", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>Expertise</p>
              <p style={{ fontSize: "13px", color: "#fff", fontWeight: 600, margin: "2px 0 0" }}>Tech × Storytelling</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "96px 64px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "#A855F7" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>
            What I do
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff",
            letterSpacing: "-1px",
            marginBottom: "56px",
          }}
        >
          Services I render
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: "#A855F7" }}
              style={{
                background: "#0f1520",
                border: "1px solid #1a2332",
                borderRadius: "16px",
                padding: "28px 24px",
                transition: "border-color 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 24px rgba(168,85,247,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{
                fontSize: "24px",
                marginBottom: "16px",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1a0d2e, #1F2833)",
                borderRadius: "10px",
                border: "1px solid #2a1f40",
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#fff",
                marginBottom: "10px",
                letterSpacing: "-0.3px",
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: "13px",
                color: "#3d4f63",
                lineHeight: 1.75,
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 40px",
          borderTop: "1px solid #1a2332",
          marginTop: "auto",
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
              whileHover={{ scale: 1.2, color: "#A855F7" }}
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
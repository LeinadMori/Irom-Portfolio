import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import brandLogo from "../assets/brand-logo.png";
import heroImg from "../assets/about-image03.jpg";

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/iromdaniel" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/LeinadMori" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Leinad_Mori" },
  { icon: SiSubstack, label: "Substack", href: "https://substack.com/@leinadmori" },
];

const SKILL_BARS = [
  { name: "JavaScript / TypeScript", level: 88, color: "#A855F7" },
  { name: "React.js / Next.js", level: 85, color: "#7c3aed" },
  { name: "HTML & CSS / Tailwind", level: 92, color: "#9333ea" },
  { name: "Node.js / REST APIs", level: 75, color: "#a21caf" },
  { name: "Python", level: 65, color: "#c026d3" },
  { name: "MySQL / Databases", level: 70, color: "#A855F7" },
];

const SKILL_CARDS = [
  { category: "Programming Languages", color: "#A855F7", icon: "⌨", skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"] },
  { category: "Frameworks & Libraries", color: "#7c3aed", icon: "◈", skills: ["React.js", "Next.js", "Tailwind CSS", "SCSS", "Socket.io", "Convex", "Framer Motion"] },
  { category: "AI Tools", color: "#9333ea", icon: "◎", skills: ["ChatGPT / GPT-4", "Claude AI", "Midjourney", "ElevenLabs", "Runway ML", "LangChain", "Prompt Engineering"] },
  { category: "Tools & Software", color: "#a21caf", icon: "⬡", skills: ["Git / GitHub", "VS Code", "Figma", "Notion", "Asana", "Trello", "Slack", "Canva", "Mailchimp"] },
  { category: "Media & Content Tools", color: "#c026d3", icon: "✍", skills: ["Adobe Premiere", "Audacity", "Anchor FM", "Substack", "WordPress", "Canva", "Google Workspace"] },
  { category: "Soft Skills", color: "#A855F7", icon: "◑", skills: ["Technical Writing", "Public Speaking", "Project Management", "Client Relations", "Editorial Strategy", "Brand Communication"] },
];

const TAG_CLOUD = [
  { tag: "React.js", weight: 3 }, { tag: "TypeScript", weight: 3 },
  { tag: "Next.js", weight: 2 }, { tag: "Tailwind", weight: 2 },
  { tag: "GPT-4", weight: 3 }, { tag: "Python", weight: 2 },
  { tag: "Node.js", weight: 2 }, { tag: "Figma", weight: 1 },
  { tag: "Socket.io", weight: 1 }, { tag: "LangChain", weight: 2 },
  { tag: "Git", weight: 2 }, { tag: "Prompt Engineering", weight: 3 },
  { tag: "Content Strategy", weight: 2 }, { tag: "Sports Journalism", weight: 2 },
  { tag: "Brand Voice", weight: 1 }, { tag: "MySQL", weight: 1 },
  { tag: "Notion", weight: 1 }, { tag: "Canva", weight: 1 },
  { tag: "Claude AI", weight: 2 }, { tag: "Midjourney", weight: 1 },
  { tag: "Convex", weight: 1 }, { tag: "SCSS", weight: 1 },
];

const STATS = [
  { value: "6+", label: "Years Coding" },
  { value: "12+", label: "Tools Mastered" },
  { value: "4", label: "AI Platforms" },
  { value: "3", label: "Certifications" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" } }),
};

function SkillBar({ skill, index }: { skill: typeof SKILL_BARS[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{ marginBottom: "20px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "13px", color: "#C5C6C7", fontWeight: 500 }}>{skill.name}</span>
        <span style={{ fontSize: "12px", color: skill.color, fontWeight: 700 }}>{skill.level}%</span>
      </div>
      <div style={{ height: "6px", background: "#1a2332", borderRadius: "10px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: "easeOut" }}
          style={{ height: "100%", borderRadius: "10px", background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0B0C10", fontFamily: "'Space Grotesk', sans-serif", color: "#C5C6C7" }}>

      {/* TOP NAV */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 40px", borderBottom: "1px solid #1a2332", background: "#0B0C10", position: "sticky", top: 0, zIndex: 50 }}
      >
        <button onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", color: "#3d4f63", cursor: "pointer", fontSize: "13px", fontFamily: "'Space Grotesk', sans-serif" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#A855F7")}
          onMouseLeave={e => (e.currentTarget.style.color = "#3d4f63")}
        >
          <ArrowLeft size={14} /> Back
        </button>
        <img src={brandLogo} alt="I'm Irom" style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "8px" }} />
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d4f63" }}>Technical Skills</span>
      </motion.div>

      {/* HERO SECTION */}
      <section style={{ position: "relative", minHeight: "420px", overflow: "hidden", borderBottom: "1px solid #1a2332" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center 30%", filter: "brightness(0.2) saturate(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,12,16,0.7) 0%, rgba(107,33,168,0.3) 50%, rgba(11,12,16,0.9) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div style={{ position: "relative", zIndex: 2, padding: "60px 64px", maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}
          >
            <div style={{ width: "32px", height: "1px", background: "#A855F7" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Technical Skills & Toolkit</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1, color: "#fff", letterSpacing: "-2px", marginBottom: "16px", maxWidth: "600px" }}
          >
            Tools I use.<br /><span style={{ color: "#A855F7" }}>Craft I build with.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            style={{ fontSize: "14px", color: "#8a9bb0", maxWidth: "480px", lineHeight: 1.75, marginBottom: "48px" }}
          >
            A full-stack practitioner across code, content, and AI — here's every tool, language, and platform in my arsenal.
          </motion.p>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} style={{ display: "flex" }}>
            {STATS.map((stat, i) => (
              <div key={stat.label} style={{ padding: "16px 32px", borderLeft: i === 0 ? "1px solid #1a2332" : "none", borderRight: "1px solid #1a2332", borderTop: "1px solid #1a2332", borderBottom: "1px solid #1a2332", background: "rgba(15,21,32,0.8)", backdropFilter: "blur(8px)" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#A855F7", lineHeight: 1, marginBottom: "4px" }}>{stat.value}</div>
                <div style={{ fontSize: "11px", color: "#3d4f63", letterSpacing: "0.1em", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "80px 64px" }}>

        {/* SECTION 1 — Skill Bars + Tag Cloud side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginBottom: "80px" }}>

          {/* Skill Bars */}
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
            >
              <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Proficiency Levels</span>
            </motion.div>
            {SKILL_BARS.map((skill, i) => <SkillBar key={skill.name} skill={skill} index={i} />)}
          </div>

          {/* Tag Cloud */}
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
            >
              <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Skill Cloud</span>
            </motion.div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignContent: "flex-start" }}>
              {TAG_CLOUD.map((item, i) => (
                <motion.span
                  key={item.tag}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, borderColor: "#A855F7", color: "#A855F7" }}
                  style={{
                    padding: item.weight === 3 ? "8px 18px" : item.weight === 2 ? "6px 14px" : "5px 12px",
                    borderRadius: "20px",
                    fontSize: item.weight === 3 ? "13px" : item.weight === 2 ? "12px" : "11px",
                    fontWeight: item.weight === 3 ? 700 : item.weight === 2 ? 500 : 400,
                    background: item.weight === 3 ? "rgba(168,85,247,0.15)" : "rgba(168,85,247,0.06)",
                    color: item.weight === 3 ? "#A855F7" : item.weight === 2 ? "#8a9bb0" : "#3d4f63",
                    border: `1px solid ${item.weight === 3 ? "rgba(168,85,247,0.4)" : "rgba(168,85,247,0.15)"}`,
                    cursor: "default",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2 — Skill Cards Grid */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "#A855F7" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>All Categories</span>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: 600,
              background: activeCategory === null ? "#A855F7" : "transparent",
              color: activeCategory === null ? "#fff" : "#3d4f63",
              border: `1px solid ${activeCategory === null ? "#A855F7" : "#1a2332"}`,
              cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.2s",
            }}
          >
            All
          </button>
          {SKILL_CARDS.map(cat => (
            <button key={cat.category}
              onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
              style={{
                padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: 600,
                background: activeCategory === cat.category ? cat.color : "transparent",
                color: activeCategory === cat.category ? "#fff" : "#3d4f63",
                border: `1px solid ${activeCategory === cat.category ? cat.color : "#1a2332"}`,
                cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
                transition: "all 0.2s",
              }}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "80px" }}>
          {SKILL_CARDS
            .filter(cat => activeCategory === null || cat.category === activeCategory)
            .map((cat, i) => (
              <motion.div
                key={cat.category}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{ background: "#0f1520", border: "1px solid #1a2332", borderRadius: "16px", padding: "24px", position: "relative", overflow: "hidden", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = cat.color;
                  el.style.boxShadow = `0 0 24px ${cat.color}20`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#1a2332";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />

                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${cat.color}15`, border: `1px solid ${cat.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff", margin: 0, letterSpacing: "-0.2px" }}>{cat.category}</h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {cat.skills.map(skill => (
                    <span key={skill} style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 500, background: `${cat.color}10`, color: cat.color, border: `1px solid ${cat.color}25` }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* SECTION 3 — Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: "linear-gradient(135deg, #1a0d2e 0%, #0f1520 100%)", border: "1px solid #A855F740", borderRadius: "20px", padding: "48px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e80" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#22c55e", fontWeight: 600 }}>Currently Learning</span>
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#fff", letterSpacing: "-1px", marginBottom: "8px" }}>
              Always evolving the stack.
            </h2>
            <p style={{ fontSize: "13px", color: "#8a9bb0", margin: 0, maxWidth: "400px", lineHeight: 1.75 }}>
              Currently deepening expertise in AI agent frameworks, advanced TypeScript patterns, and backend systems with PostgreSQL and Docker.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", maxWidth: "300px", flexShrink: 0 }}>
            {["AI Agents", "Docker", "PostgreSQL", "LangGraph", "tRPC", "Supabase"].map(item => (
              <motion.span
                key={item}
                whileHover={{ scale: 1.05 }}
                style={{ padding: "8px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, background: "rgba(168,85,247,0.1)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)" }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", borderTop: "1px solid #1a2332", marginTop: "auto" }}
      >
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>© 2026 I'm Irom. All rights reserved.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} title={label}
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
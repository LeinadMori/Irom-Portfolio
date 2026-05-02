import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import brandLogo from "../assets/brand-logo.png";
import heroImg from "../assets/about-image01.png";

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/irom-daniel" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/LeinadMori" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Leinad_Mori" },
  { icon: SiSubstack, label: "Substack", href: "https://substack.com/@leinadmori" },
];

const STATS = [
  { value: "6+", label: "Years Active" },
  { value: "40+", label: "Projects Delivered" },
  { value: "12+", label: "Brands Served" },
  { value: "3", label: "Continents Reached" },
];

const DOMAINS = [
  { label: "Software & Web", color: "#A855F7" },
  { label: "AI & Automation", color: "#6B21A8" },
  { label: "Content & Copy", color: "#7c3aed" },
  { label: "PR & Brand", color: "#9333ea" },
  { label: "Sports Media", color: "#a21caf" },
];

const EXPERIENCES = [
  {
    category: "Software & Web Development",
    accent: "#A855F7",
    icon: "⌨",
    items: [
      {
        role: "Full-Stack Developer",
        org: "Freelance & Contract",
        period: "2023 — Present",
        description:
          "Designed and built production-grade web applications for clients across fintech, e-commerce, and media. Delivered responsive frontends, robust REST APIs, and cloud-deployed backends using React, Node.js, PostgreSQL, and AWS.",
        tags: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
        metric: { value: "20+", label: "Apps shipped" },
      },
      {
        role: "Frontend Engineer",
        org: "Tech Startup (Contract)",
        period: "2023 — 2024",
        description:
          "Led UI development for a SaaS dashboard serving 5,000+ users. Improved page load speed by 40% through code splitting and lazy loading. Collaborated with design and backend teams in two-week agile sprints.",
        tags: ["Vue.js", "Tailwind CSS", "Figma", "REST APIs"],
        metric: { value: "40%", label: "Performance gain" },
      },
    ],
  },
  {
    category: "AI & Automation",
    accent: "#7c3aed",
    icon: "◈",
    items: [
      {
        role: "AI Solutions Architect",
        org: "Independent Practice",
        period: "2024 — Present",
        description:
          "Built end-to-end AI-powered content pipelines and automation systems for brands and creators. Integrated LLMs into existing workflows, reducing manual content production time by over 60% for clients.",
        tags: ["OpenAI API", "LangChain", "Python", "Automation", "Prompt Engineering"],
        metric: { value: "60%", label: "Time saved" },
      },
      {
        role: "AI Content Strategist",
        org: "Media & Creator Economy",
        period: "2025 — Present",
        description:
          "Designed AI-assisted content strategies for digital creators and brands, blending human voice with machine efficiency. Delivered frameworks that scaled content output without sacrificing authenticity.",
        tags: ["GPT-4", "Claude", "Midjourney", "Content Systems"],
        metric: { value: "3x", label: "Output increase" },
      },
    ],
  },
  {
    category: "Content Writing & Copywriting",
    accent: "#9333ea",
    icon: "✍",
    items: [
      {
        role: "Senior Copywriter",
        org: "Agencies & Direct Clients",
        period: "2019 — Present",
        description:
          "Produced high-converting copy for landing pages, email campaigns, product launches, and brand narratives. Wrote across industries including fintech, health, lifestyle, and technology with measurable engagement results.",
        tags: ["Brand Copy", "Email Marketing", "SEO Writing", "UX Copy"],
        metric: { value: "150+", label: "Pieces published" },
      },
      {
        role: "Technical Writer",
        org: "Software Companies",
        period: "2021 — Present",
        description:
          "Authored developer documentation, API guides, and product wikis for software teams. Translated dense technical specifications into clear, user-friendly reference material adopted by engineering and product teams.",
        tags: ["API Docs", "Developer Guides", "Markdown", "Confluence"],
        metric: { value: "30+", label: "Docs authored" },
      },
    ],
  },
  {
    category: "PR & Brand Strategy",
    accent: "#a21caf",
    icon: "📡",
    items: [
      {
        role: "PR & Communications Strategist",
        org: "Brands & Founders",
        period: "2020 — Present",
        description:
          "Developed and executed PR campaigns for emerging brands and founders across Nigeria and the UK. Managed media relations, press releases, and crisis communications that shaped public perception and drove earned media.",
        tags: ["Media Relations", "Press Releases", "Crisis Comms", "Brand Positioning"],
        metric: { value: "25+", label: "Campaigns run" },
      },
      {
        role: "Brand Identity Consultant",
        org: "Startups & SMEs",
        period: "2021 — Present",
        description:
          "Helped early-stage startups and SMEs define their brand voice, visual identity, and positioning strategy. Delivered brand books and communication guidelines that created consistency across all touchpoints.",
        tags: ["Brand Voice", "Visual Identity", "Positioning", "Brand Books"],
        metric: { value: "15+", label: "Brands built" },
      },
    ],
  },
  {
    category: "Sports Media & Journalism",
    accent: "#c026d3",
    icon: "⚽",
    items: [
      {
        role: "Sports Writer & Analyst",
        org: "Sports Media Outlets",
        period: "2018 — Present",
        description:
          "Covered football, athletics, and sports business across Nigerian and international platforms. Produced match analysis, player profiles, and investigative sports journalism that reached audiences across West Africa and the diaspora.",
        tags: ["Football", "Sports Analysis", "Journalism", "Broadcast"],
        metric: { value: "200+", label: "Articles written" },
      },
      {
        role: "Sports Content Strategist",
        org: "Digital Sports Brands",
        period: "2022 — Present",
        description:
          "Built content strategies for sports-focused digital brands, leveraging data and storytelling to grow engaged audiences on social platforms. Combined sports knowledge with digital marketing to drive community growth.",
        tags: ["Social Media", "Sports Marketing", "Community Building", "Analytics"],
        metric: { value: "50K+", label: "Audience reached" },
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Work() {
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
            display: "flex", alignItems: "center", gap: "8px",
            background: "none", border: "none", color: "#3d4f63",
            cursor: "pointer", fontSize: "13px",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#A855F7")}
          onMouseLeave={e => (e.currentTarget.style.color = "#3d4f63")}
        >
          <ArrowLeft size={14} /> Back
        </button>
        <img src={brandLogo} alt="I'm Irom" style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "8px" }} />
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d4f63" }}>
          Experience
        </span>
      </motion.div>

      {/* HERO DASHBOARD SECTION */}
      <section style={{
        position: "relative",
        minHeight: "480px",
        overflow: "hidden",
        borderBottom: "1px solid #1a2332",
      }}>
        {/* Background hero image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "brightness(0.25) saturate(0.6)",
        }} />

        {/* Purple overlay gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(107,33,168,0.4) 0%, rgba(11,12,16,0.8) 60%, #0B0C10 100%)",
        }} />

        {/* Grid lines overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          padding: "60px 64px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}
          >
            <div style={{ width: "32px", height: "1px", background: "#A855F7" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>
              Experience & Work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1,
              color: "#fff",
              letterSpacing: "-2px",
              marginBottom: "16px",
              maxWidth: "600px",
            }}
          >
            Where I've been.<br />
            <span style={{ color: "#A855F7" }}>What I've built.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ fontSize: "14px", color: "#8a9bb0", maxWidth: "480px", lineHeight: 1.75, marginBottom: "48px" }}
          >
            A cross-domain practitioner with experience spanning software engineering,
            AI systems, communications, content, and sports media.
          </motion.p>

          {/* Domain tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px" }}
          >
            {DOMAINS.map((d) => (
              <span key={d.label} style={{
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: `1px solid ${d.color}`,
                color: d.color,
                background: `${d.color}15`,
              }}>
                {d.label}
              </span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{ display: "flex", gap: "0px" }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} style={{
                padding: "20px 32px",
                borderLeft: i === 0 ? "1px solid #1a2332" : "none",
                borderRight: "1px solid #1a2332",
                borderTop: "1px solid #1a2332",
                borderBottom: "1px solid #1a2332",
                background: "rgba(15,21,32,0.8)",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "#A855F7",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "11px", color: "#3d4f63", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE CARDS */}
      <section style={{ padding: "80px 64px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {EXPERIENCES.map((domain, di) => (
          <motion.div
            key={domain.category}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: di * 0.1, duration: 0.6 }}
            style={{ marginBottom: "72px" }}
          >
            {/* Domain header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "28px",
              paddingBottom: "20px",
              borderBottom: `1px solid ${domain.accent}30`,
            }}>
              <div style={{
                width: "40px", height: "40px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `${domain.accent}15`,
                border: `1px solid ${domain.accent}40`,
                borderRadius: "10px",
                fontSize: "18px",
              }}>
                {domain.icon}
              </div>
              <div>
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}>
                  {domain.category}
                </h2>
              </div>
              <div style={{ marginLeft: "auto", width: "60px", height: "1px", background: `${domain.accent}40` }} />
            </div>

            {/* Experience items */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {domain.items.map((item, ii) => (
                <motion.div
                  key={item.role}
                  custom={ii}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  style={{
                    background: "#0f1520",
                    border: "1px solid #1a2332",
                    borderRadius: "16px",
                    padding: "28px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = domain.accent;
                    el.style.boxShadow = `0 0 24px ${domain.accent}20`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#1a2332";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Top accent line */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(90deg, ${domain.accent}, transparent)`,
                  }} />

                  {/* Header row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div>
                      <h3 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700, fontSize: "15px",
                        color: "#fff", margin: "0 0 4px",
                      }}>
                        {item.role}
                      </h3>
                      <p style={{ fontSize: "12px", color: domain.accent, margin: 0, fontWeight: 500 }}>
                        {item.org}
                      </p>
                    </div>

                    {/* Metric badge */}
                    <div style={{
                      textAlign: "center",
                      background: `${domain.accent}15`,
                      border: `1px solid ${domain.accent}30`,
                      borderRadius: "10px",
                      padding: "8px 14px",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800, fontSize: "18px",
                        color: domain.accent, lineHeight: 1,
                      }}>
                        {item.metric.value}
                      </div>
                      <div style={{ fontSize: "9px", color: "#3d4f63", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>
                        {item.metric.label}
                      </div>
                    </div>
                  </div>

                  {/* Period */}
                  <p style={{
                    fontSize: "11px", color: "#3d4f63",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    marginBottom: "12px",
                  }}>
                    {item.period}
                  </p>

                  {/* Description */}
                  <p style={{ fontSize: "13px", color: "#8a9bb0", lineHeight: 1.75, marginBottom: "20px" }}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.tags.map(tag => (
                      <span key={tag} style={{
                        padding: "3px 10px",
                        borderRadius: "20px",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        background: "#131b24",
                        color: "#3d4f63",
                        border: "1px solid #1e2a36",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
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
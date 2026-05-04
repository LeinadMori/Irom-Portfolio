import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, MapPin, Mail, Phone, ExternalLink, Link } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import brandLogo from "../assets/brand-logo.png";

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/iromdaniel" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/LeinadMori" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Leinad_Mori" },
  { icon: SiSubstack, label: "Substack", href: "https://substack.com/@leinadmori" },
];

const STATS = [
  { value: "6+", label: "Years Experience" },
  { value: "40+", label: "Projects Done" },
  { value: "5", label: "Domains" },
  { value: "3", label: "Certifications" },
];

const SKILLS = [
  { category: "Programming & Web", color: "#A855F7", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "SCSS", "MySQL", "Git/GitHub", "Socket.io", "Convex"] },
  { category: "Tools & Platforms", color: "#7c3aed", items: ["Notion", "Asana", "Trello", "Slack", "Canva", "Google Workspace", "Mailchimp", "Microsoft Office", "Calendly"] },
  { category: "Administration", color: "#9333ea", items: ["Email & Calendar Management", "Travel Planning", "Proposal Writing", "Client Relations", "Task Management"] },
  { category: "Media & Content", color: "#c026d3", items: ["Sports Journalism", "Content Writing", "Podcast Hosting", "Live Presenting", "Social Media Strategy", "Editorial Work"] },
];

const EXPERIENCE = [
  {
    role: "Front-End Developer (Freelance)", org: "Remote", period: "2023 – Present", color: "#A855F7",
    points: ["Built StreamChat App — real-time chat platform with React.js, Node.js, and Socket.io.", "Integrated Convex backend for live synchronization and troubleshooting.", "Designed responsive UI components with light/dark themes using Next.js, Tailwind CSS, SCSS.", "Refactored ALX React projects with state management and testing (Jest & Enzyme)."],
  },
  {
    role: "Virtual Assistant", org: "Africa Sport Stream — Lagos, Nigeria", period: "Aug 2024 – Present", color: "#7c3aed",
    points: ["Managed proposals and project documentation, ensuring on-time submissions.", "Designed social media campaigns with Canva, boosting online engagement.", "Coordinated executive schedules, meetings, and project milestones."],
  },
  {
    role: "Personal Assistant", org: "Lagos, Nigeria", period: "May – Aug 2024", color: "#9333ea",
    points: ["Streamlined calendar and email systems, reducing scheduling conflicts by 50%.", "Oversaw travel arrangements and client communications for smooth operations."],
  },
  {
    role: "Virtual Assistant", org: "Confidential Executive", period: "Jan 2023 – Mar 2024", color: "#a21caf",
    points: ["Supported administrative tasks including calendar, bookings, and email handling.", "Created and managed social media content strategies for projects."],
  },
  {
    role: "Office Assistant & Sports Presenter", org: "Unizik FM 94.1 — Anambra, Nigeria", period: "2015 – 2022", color: "#c026d3",
    points: ["Coordinated academic and administrative events for faculty staff.", "Hosted live and recorded sports programs, interviewing athletes and reporting live events.", "Co-developed sports show scripts and editorial materials."],
  },
];

const MEDIA_ROLES = [
  { role: "Co-Host", org: "D Village Square Podcast", period: "2020 – Present" },
  { role: "Sports Writer", org: "Sportivation Media", period: "2025" },
  { role: "Sports Writer", org: "Africa Sport Stream", period: "2024" },
  { role: "Editorial Board Member", org: "Slam Magazine", period: "2015 – 2018" },
  { role: "Secretary General", org: "NYSC Community Development Service", period: "2019 – 2020" },
];

const EDUCATION = [
  { degree: "B.Sc. Mass Communication", institution: "Nnamdi Azikiwe University, Awka", period: "2014 – 2019", color: "#A855F7" },
  { degree: "Diploma, Social Work", institution: "Nnamdi Azikiwe University", period: "2014", color: "#7c3aed" },
  { degree: "Front-End Development Certification", institution: "ALX Africa", period: "2023 – 2024", color: "#9333ea" },
  { degree: "Virtual Assistance Certification", institution: "ALX Africa", period: "2024", color: "#a21caf" },
];

const TESTIMONIALS = [
  { quote: "Daniel brings a rare combination of technical precision and communication clarity. He doesn't just build — he thinks about the story behind every product.", name: "Client — Fintech Startup", role: "Product Lead" },
  { quote: "Working with Irom on our content strategy transformed how we communicate with our audience. Sharp, fast, and always on-brand.", name: "Client — Sports Media Brand", role: "Creative Director" },
  { quote: "One of the most organized and proactive virtual assistants I've worked with. Always three steps ahead.", name: "Client — Executive", role: "CEO" },
];

const CONTACT_INFO = [
  { icon: <MapPin size={13} />, text: "Lagos, Nigeria" },
  { icon: <Mail size={13} />, text: "iromdaniel@gmail.com" },
  { icon: <Phone size={13} />, text: "+234 813 022 7765" },
  { icon: <Link size={13} />, text: "linkedin.com/in/iromdaniel", href: "https://linkedin.com/in/iromdaniel" },
  { icon: <ExternalLink size={13} />, text: "github.com/LeinadMori", href: "https://github.com/LeinadMori" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" } }),
};

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0B0C10", fontFamily: "'Space Grotesk', sans-serif", color: "#C5C6C7" }}>

      {/* TOP NAV */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
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
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d4f63" }}>Resume</span>
      </motion.div>

      {/* HERO STRIP */}
      <section style={{ padding: "64px 64px 48px", maxWidth: "1200px", margin: "0 auto", width: "100%", borderBottom: "1px solid #1a2332" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "#A855F7" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Resume & Qualifications</span>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, color: "#fff", letterSpacing: "-2px", marginBottom: "20px" }}>
              Daniel Irom<span style={{ color: "#A855F7" }}>.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "#8a9bb0", maxWidth: "560px", lineHeight: 1.8, marginBottom: "24px" }}>
              Versatile professional with proven experience in Front-End Development, Virtual Assistance, and Sports Media. Bringing a unique blend of technical expertise, media storytelling, and operational efficiency to diverse roles across the globe.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "32px" }}>
              {CONTACT_INFO.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#3d4f63", fontSize: "12px" }}>
                  <span style={{ color: "#A855F7" }}>{item.icon}</span>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "#3d4f63", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#A855F7")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#3d4f63")}
                      >{item.text}</a>
                    : <span>{item.text}</span>
                  }
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <motion.a href="/IROM_S_Resume.pdf" download="Daniel_Irom_Resume.pdf"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 28px", borderRadius: "12px", background: "linear-gradient(135deg, #6B21A8 0%, #A855F7 100%)", color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 0 20px rgba(168,85,247,0.3)", whiteSpace: "nowrap" }}
            >
              <Download size={15} /> Download PDF
            </motion.a>
            <p style={{ fontSize: "11px", color: "#3d4f63", textAlign: "center", marginTop: "8px" }}>Full resume · PDF format</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: "flex" }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ padding: "16px 32px", borderLeft: i === 0 ? "1px solid #1a2332" : "none", borderRight: "1px solid #1a2332", borderTop: "1px solid #1a2332", borderBottom: "1px solid #1a2332", background: "#0f1520" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#A855F7", lineHeight: 1, marginBottom: "4px" }}>{stat.value}</div>
              <div style={{ fontSize: "11px", color: "#3d4f63", letterSpacing: "0.1em", textTransform: "uppercase" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "64px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>

          {/* LEFT COLUMN */}
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Work Experience</span>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "7px", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, #A855F7, #1a2332)" }} />
                {EXPERIENCE.map((exp, i) => (
                  <motion.div key={exp.role} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    style={{ paddingLeft: "28px", marginBottom: "32px", position: "relative" }}
                  >
                    <div style={{ position: "absolute", left: "0", top: "6px", width: "15px", height: "15px", borderRadius: "50%", background: exp.color, border: "2px solid #0B0C10", boxShadow: `0 0 8px ${exp.color}60` }} />
                    <div style={{ background: "#0f1520", border: "1px solid #1a2332", borderRadius: "12px", padding: "20px", borderLeft: `2px solid ${exp.color}` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <div>
                          <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#fff", margin: "0 0 2px" }}>{exp.role}</h3>
                          <p style={{ fontSize: "12px", color: exp.color, margin: 0, fontWeight: 500 }}>{exp.org}</p>
                        </div>
                        <span style={{ fontSize: "10px", color: "#3d4f63", background: "#131b24", padding: "3px 8px", borderRadius: "6px", border: "1px solid #1e2a36", whiteSpace: "nowrap", marginLeft: "8px" }}>{exp.period}</span>
                      </div>
                      <ul style={{ margin: 0, paddingLeft: "16px" }}>
                        {exp.points.map((pt, j) => (
                          <li key={j} style={{ fontSize: "12px", color: "#8a9bb0", lineHeight: 1.7, marginBottom: "4px" }}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Sports & Media Roles</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {MEDIA_ROLES.map((r, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0f1520", border: "1px solid #1a2332", borderRadius: "10px", padding: "12px 16px" }}
                  >
                    <div>
                      <span style={{ fontSize: "13px", color: "#C5C6C7", fontWeight: 600 }}>{r.role}</span>
                      <span style={{ fontSize: "12px", color: "#3d4f63", marginLeft: "8px" }}>— {r.org}</span>
                    </div>
                    <span style={{ fontSize: "10px", color: "#A855F7" }}>{r.period}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Education & Certifications</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {EDUCATION.map((edu, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    style={{ background: "#0f1520", border: "1px solid #1a2332", borderLeft: `2px solid ${edu.color}`, borderRadius: "10px", padding: "16px 20px" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: "13px", color: "#fff", margin: "0 0 4px" }}>{edu.degree}</h4>
                        <p style={{ fontSize: "12px", color: edu.color, margin: 0 }}>{edu.institution}</p>
                      </div>
                      <span style={{ fontSize: "10px", color: "#3d4f63", whiteSpace: "nowrap", marginLeft: "8px" }}>{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Core Skills</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {SKILLS.map((group, i) => (
                  <motion.div key={group.category} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <p style={{ fontSize: "11px", color: group.color, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>{group.category}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {group.items.map(skill => (
                        <span key={skill} style={{ padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 500, background: `${group.color}15`, color: group.color, border: `1px solid ${group.color}30` }}>{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ background: "#0f1520", border: "1px solid #1a2332", borderRadius: "12px", padding: "20px 24px", marginBottom: "48px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Additional Info</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Languages", value: "English (Fluent)" },
                  { label: "Hobbies", value: "Music, Sports Journalism, Tech Projects, Traveling, Reading" },
                  { label: "Location", value: "Lagos, Nigeria 🌍" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: "12px" }}>
                    <span style={{ fontSize: "12px", color: "#3d4f63", minWidth: "80px" }}>{item.label}</span>
                    <span style={{ fontSize: "12px", color: "#C5C6C7" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "24px", height: "1px", background: "#A855F7" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A855F7", fontWeight: 500 }}>Testimonials</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {TESTIMONIALS.map((t, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    style={{ background: "#0f1520", border: "1px solid #1a2332", borderLeft: "2px solid #A855F7", borderRadius: "10px", padding: "16px 20px" }}
                  >
                    <p style={{ fontSize: "13px", color: "#8a9bb0", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>"{t.quote}"</p>
                    <p style={{ fontSize: "12px", color: "#C5C6C7", fontWeight: 600, margin: "0 0 2px" }}>{t.name}</p>
                    <p style={{ fontSize: "11px", color: "#A855F7", margin: 0 }}>{t.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA STRIP */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ margin: "0 auto 64px", borderRadius: "20px", padding: "48px 56px", background: "linear-gradient(135deg, #1a0d2e 0%, #0f1520 100%)", border: "1px solid #A855F740", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", maxWidth: "1072px", width: "calc(100% - 128px)" }}
      >
        <div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#fff", letterSpacing: "-1px", marginBottom: "8px" }}>Liked what you see?</h2>
          <p style={{ fontSize: "14px", color: "#8a9bb0", margin: 0 }}>Let's build something remarkable together.</p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/contact")}
            style={{ padding: "12px 24px", borderRadius: "10px", background: "linear-gradient(135deg, #6B21A8 0%, #A855F7 100%)", color: "#fff", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", display: "flex", alignItems: "center", gap: "8px" }}
          >
            Let's Talk <ExternalLink size={14} />
          </motion.button>
          <motion.a href="/IROM_S_Resume.pdf" download="Daniel_Irom_Resume.pdf" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ padding: "12px 24px", borderRadius: "10px", background: "transparent", color: "#A855F7", border: "1px solid #A855F7", cursor: "pointer", fontSize: "14px", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
          >
            <Download size={14} /> Download CV
          </motion.a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", borderTop: "1px solid #1a2332", marginTop: "auto" }}
      >
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>© 2026 I'm Irom. All rights reserved.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} title={label} style={{ color: "#3d4f63", display: "flex", alignItems: "center" }}>
              <Icon size={17} />
            </motion.a>
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>Lagos, NG</span>
      </motion.footer>
    </div>
  );
}

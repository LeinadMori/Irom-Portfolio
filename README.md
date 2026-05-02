# I'm Irom — Personal Portfolio

> **Engineer by logic. Storyteller by nature.**

A modern, dark-themed personal portfolio built with React, TypeScript, and Framer Motion. Designed to reflect the dual identity of **I'm Irom** — a software engineer and communications strategist at the intersection of technology and storytelling.

---

## Live Preview

> Run locally with `npm run dev` → `http://localhost:5173`

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | Core framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility styling |
| Framer Motion | Page & component animations |
| React Router DOM | Multi-page routing |
| Lucide React | Icons |
| React Icons | Social media icons (FA6, SI) |
| EmailJS | Contact form email delivery |
| React Helmet Async | SEO & meta tags |

---

## Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── IROM_S_Resume.pdf        # Downloadable CV
├── src/
│   ├── assets/
│   │   ├── brand-logo.png       # I'm Irom brand logo
│   │   ├── about-image01.png    # About page photo 1
│   │   ├── about-image02.png    # About page photo 2
│   │   └── about-image03.jpg    # Skills page hero photo
│   ├── pages/
│   │   ├── Home.tsx             # Landing page — hero + nav cards
│   │   ├── About.tsx            # About — bio, photo collage, services
│   │   ├── Work.tsx             # Experience — dashboard, career timeline
│   │   ├── Resume.tsx           # Resume — timeline, skills, education
│   │   ├── Contact.tsx          # Contact — split layout + EmailJS form
│   │   └── Skills.tsx           # Technical skills — bars, cards, tag cloud
│   ├── App.tsx                  # Router setup
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles
├── tsconfig.json
├── tsconfig.app.json
├── vite.config.ts
└── tailwind.config.js
```

---

## Pages

### Home `/`
- Combined hero + navigation layout
- Left panel — brand logo, tagline with blinking cursor, CTA button
- Right panel — 5 magnetic nav cards with proximity hover animations
- Top — command-style search bar that filters nav cards
- Footer — LinkedIn, GitHub, Twitter/X, Substack

### About `/about`
- Sticky top nav with back button
- Bio section with scattered photo collage (3 photos, rotated, hover lift)
- Floating location and expertise tags
- 6 service cards in a 3-column grid with hover glow
- "Let's work together" CTA

### Experience `/work`
- Full-width hero with photo background, purple grid overlay
- Domain tags — Software, AI, Content, PR, Sports Media
- Stats bar — Years Active, Projects, Brands, Continents
- 5 domain sections each with 2 experience cards
- Metric badges per card, skill tags, color-coded by domain

### Resume `/resume`
- Hero strip with contact info and Download PDF button
- Stats bar — Years, Projects, Domains, Certifications
- Left column — work experience timeline, sports & media roles
- Right column — education, skills by category, additional info, testimonials
- CTA strip — "Liked what you see? Let's Talk"

### Contact `/contact`
- Split layout — left info panel, right form
- Left — heading, contact details, availability badge, social icons
- Right — form with Name, Phone, Email, Service dropdown, Subject, Message
- Purple focus glow on inputs, loading spinner on submit
- Green success / red error feedback messages
- Powered by EmailJS

### Technical Skills `/skills`
- Hero with photo background and animated stats
- Skill bars with animated fill and percentage labels
- Weighted tag cloud with hover interactions
- 6 category cards with live filter buttons
- "Currently Learning" strip at the bottom

---

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Eerie Black | `#0B0C10` | Page backgrounds |
| Gunmetal | `#1F2833` | Cards, sections |
| Silver | `#C5C6C7` | Body text |
| Electric Purple | `#A855F7` | Primary accent, CTAs |
| Deep Violet | `#6B21A8` | Gradient base |

---

## Typography

| Font | Weight | Usage |
|---|---|---|
| Syne | 700, 800 | Headings, display text |
| Space Grotesk | 300–700 | Body, UI, labels |

Both fonts are loaded via Google Fonts.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/LeinadMori/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## EmailJS Setup

The contact form uses [EmailJS](https://emailjs.com) to deliver messages to your inbox without a backend.

1. Create a free account at `emailjs.com`
2. Add a **Gmail service** → copy the **Service ID**
3. Create an **Email Template** with these variables:
   ```
   {{from_name}}, {{from_email}}, {{phone}}, {{service}}, {{subject}}, {{message}}
   ```
4. Copy your **Template ID** and **Public Key**
5. Open `src/pages/Contact.tsx` and replace:

```ts
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";
```

---

## Brand Identity

**I'm Irom** is the personal brand of **Daniel Irom** — a Lagos-based software engineer, content strategist, and sports media professional.

- **Logo concept** — A monogram merging a digital terminal cursor (tech) with a minimalist quill stroke (storytelling)
- **Aesthetic** — Global, high-tech, premium, dark
- **Tagline** — *Engineer by logic. Storyteller by nature.*

---

## Social Links

| Platform | Handle |
|---|---|
| LinkedIn | [linkedin.com/in/iromdaniel](https://linkedin.com/in/iromdaniel) |
| GitHub | [github.com/LeinadMori](https://github.com/LeinadMori) |
| Twitter/X | [@Leinad_Mori](https://x.com/Leinad_Mori) |
| Substack | [@leinadmori](https://substack.com/@leinadmori) |

---

## License

This project is personal and not open for redistribution. All content, images, and brand assets belong to **Daniel Irom**.

---

<p align="center">Built with 💜 by <strong>I'm Irom</strong> — Lagos, Nigeria 🌍</p>
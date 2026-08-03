Portfolio v2 — Three Rooms

Drop these into your existing irom-portfolio repo. Everything uses the same stack you already have (React Router, Framer Motion, lucide-react, react-icons) — no new dependencies needed.

Where files go
src/pages/Home.tsx          → replace your existing Home.tsx
src/pages/AIStudio.tsx      → new
src/pages/WritingDesk.tsx   → new
src/pages/FrontendLab.tsx   → new
src/components/PortalNav.tsx → new
Routes to add

In your router config (likely App.tsx):

tsx
import AIStudio from "./pages/AIStudio";
import WritingDesk from "./pages/WritingDesk";
import FrontendLab from "./pages/FrontendLab";

// alongside your existing routes:
<Route path="/ai-studio" element={<AIStudio />} />
<Route path="/writing-desk" element={<WritingDesk />} />
<Route path="/frontend-lab" element={<FrontendLab />} />

Your existing /about, /contact, /work, /skills, /resume routes are untouched — Home now points into the three rooms instead of that flat list. Per the direction in your notes, consider folding Resume into the About page as a download button rather than its own nav destination.

Fonts to add

Add these to your index.html <head> (Google Fonts), or your existing font-loading setup:

html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&family=Playfair+Display:wght@700&family=Source+Serif+4:opsz,wght@8..60,400&family=IBM+Plex+Mono:wght@400;600&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
What's placeholder and needs your real content
AI Studio — CAMPAIGNS array: swap in your actual ad names/categories, and eventually real thumbnails instead of blank cards.
Writing Desk — ARTICLES array: pull real titles from your Substack and clips, link each card to the actual piece.
Frontend Lab — PROJECTS array: currently has NPFL Insight and KlasXR as examples with placeholder case-study lines — replace with your real problem/research/design/dev/result notes and correct GitHub/demo links.
Design notes (why it's built this way)
Home stays in your existing dark/purple/Syne language as the neutral "lobby" — it doesn't try to be all three moods at once. Hovering a portal card tints the background toward that room's color, so the mood shift is felt before you click.
AI Studio keeps your existing purple accent (it's already cinematic) but deepens the background and adds a real typing-prompt moment tied to "Behind the Prompt."
Writing Desk breaks fully from the dark theme — warm paper, serif display, monospace bylines (typewriter reference), ink-navy/gold accents instead of the generic AI-orange so it doesn't read as a template.
Frontend Lab goes full monospace/terminal, and instead of decorative code-glow, each case study literally reads like a change-log — problem, research, design, dev, result as log lines. That's the one "risk" element in this set: lean into it if it fits your taste, or let me know and I can tone it down to something quieter.
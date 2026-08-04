// Single source of truth for everything in the Writing Desk.
// Add a new piece here and it automatically appears on the Writing Desk
// grid, its category page, and gets its own excerpt page — no new files needed.

export type Category =
  | "Sports Journalism"
  | "Short Stories"
  | "Poetry"
  | "Brand Copy"
  | "Essays";

export type Article = {
  slug: string; // used in the URL: /writing-desk/:slug
  title: string;
  category: Category;
  date: string;
  readTime: string;
  excerpt: string; // the opening paragraphs shown on your site
  externalUrl: string | null; // where "Continue Reading" points — null if the full piece lives only here
};

// Maps a Category to the slug used in /writing-desk/category/:categorySlug
export const CATEGORY_SLUGS: Record<Category, string> = {
  "Sports Journalism": "sports-journalism",
  "Short Stories": "short-stories",
  "Poetry": "poetry",
  "Brand Copy": "brand-copy",
  "Essays": "essays",
};

export const CATEGORIES: Category[] = [
  "Sports Journalism",
  "Short Stories",
  "Poetry",
  "Brand Copy",
  "Essays",
];

// PLACEHOLDER CONTENT — replace excerpt text and externalUrl with the real thing.
// excerpt: 2-4 sentences is enough — it's a teaser, not the full piece.
// externalUrl: the Substack / outlet link where the full piece lives.
//   Set to null only for pieces that exist ONLY on your portfolio (no external home).
export const ARTICLES: Article[] = [
  {
    slug: "the-weight-of-the-badge",
    title: "The Weight of the Badge",
    category: "Sports Journalism",
    date: "Jul 2026",
    readTime: "6 min",
    excerpt:
      "PLACEHOLDER — replace with the real opening 2-4 sentences of this piece. This is what visitors read on your site before choosing to continue on Substack.",
    externalUrl: "https://substack.com/@leinadmori/REPLACE-WITH-REAL-SLUG",
  },
  {
    slug: "diaspora-reconsidered",
    title: "Diaspora, Reconsidered",
    category: "Essays",
    date: "Jun 2026",
    readTime: "8 min",
    excerpt:
      "PLACEHOLDER — replace with the real opening 2-4 sentences of this essay.",
    externalUrl: "https://substack.com/@leinadmori/REPLACE-WITH-REAL-SLUG",
  },
  {
    slug: "a-short-story-about-rain",
    title: "A Short Story About Rain",
    category: "Short Stories",
    date: "May 2026",
    readTime: "4 min",
    excerpt:
      "PLACEHOLDER — replace with the real opening lines of this short story.",
    externalUrl: null,
  },
  {
    slug: "copy-for-a-coffee-brand",
    title: "Copy for a Coffee Brand",
    category: "Brand Copy",
    date: "Apr 2026",
    readTime: "2 min",
    excerpt:
      "PLACEHOLDER — replace with the real opening lines of this brand copy sample.",
    externalUrl: null,
  },
];
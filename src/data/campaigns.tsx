// Single source of truth for AI Studio. Add a campaign here and it
// automatically appears on the grid and gets its own detail page —
// no new files needed.

export type Campaign = {
    slug: string; // used in the URL: /ai-studio/:slug
    name: string;
    tag: string; // category, e.g. "Beverage", "Fashion"
    brief: string; // 1-2 sentences: what the client/concept asked for
    prompts: string[]; // the actual prompts you used, in order
    stills: string[]; // paths under /public/images/campaigns/, e.g. "/images/campaigns/chivita-1.jpg"
    videoSrc: string; // path under /public/videos/, e.g. "/videos/chivita-spec.mp4"
    posterSrc: string; // thumbnail shown before the video plays
  };
  
  // PLACEHOLDER CONTENT — replace with your real briefs, prompts, and file paths.
  // Drop your actual compressed video files in public/videos/
  // and stills in public/images/campaigns/, then update the paths below.
  export const CAMPAIGNS: Campaign[] = [
    {
      slug: "chivita-spec-commercial",
      name: "Chivita Spec Commercial",
      tag: "Beverage",
      brief:
        "PLACEHOLDER — one or two sentences on the concept: what the ad needed to communicate and why.",
      prompts: [
        "PLACEHOLDER — first prompt used, e.g. establishing shot",
        "PLACEHOLDER — second prompt, e.g. product hero shot",
        "PLACEHOLDER — third prompt, e.g. closing frame",
      ],
      stills: [],
      videoSrc: "/videos/chivita-spec.mp4",
      posterSrc: "/images/campaigns/chivita-poster.jpg",
    },
    {
      slug: "donut-brand-launch",
      name: "Donut Brand Launch",
      tag: "FMCG",
      brief: "PLACEHOLDER — concept summary.",
      prompts: ["PLACEHOLDER — prompt one", "PLACEHOLDER — prompt two"],
      stills: [],
      videoSrc: "/videos/Donut_bite_luxury_food_commercial_202607241436-222.mp4",
      posterSrc: "/images/campaigns/donut-poster.jpeg",
    },
    {
      slug: "coffee-campaign",
      name: "Coffee Campaign",
      tag: "Lifestyle",
      brief: "PLACEHOLDER — concept summary.",
      prompts: ["PLACEHOLDER — prompt one", "PLACEHOLDER — prompt two"],
      stills: [],
      videoSrc: "/videos/coffee-campaign.mp4",
      posterSrc: "/images/campaigns/coffee-poster.jpg",
    },
    {
      slug: "shoe-brand-film",
      name: "Shoe Brand Film",
      tag: "Fashion",
      brief: "PLACEHOLDER — concept summary.",
      prompts: ["PLACEHOLDER — prompt one", "PLACEHOLDER — prompt two"],
      stills: [],
      videoSrc: "/videos/shoe-brand-film.mp4",
      posterSrc: "/images/campaigns/shoe-poster.jpg",
    },
    {
      slug: "energy-drink-spot",
      name: "Energy Drink Spot",
      tag: "Beverage",
      brief: "PLACEHOLDER — concept summary.",
      prompts: ["PLACEHOLDER — prompt one", "PLACEHOLDER — prompt two"],
      stills: [],
      videoSrc: "/videos/energy-drink-spot.mp4",
      posterSrc: "/images/campaigns/energy-poster.jpg",
    },
  ];
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
  excerpt: string; // teaser shown on the Writing Desk grid + category pages
  body?: string[]; // full piece, paragraph by paragraph — set this for portfolio-exclusive pieces (externalUrl: null). If present, the excerpt page renders the full body instead of just the excerpt.
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
    category: "Short Stories",
    date: "Aug 2026",
    readTime: "7 min",
    excerpt:
      "Tunde had touched the badge before he ever wore it. That was the strange part nobody told you — that the first contact came in a locker room in Abuja, three hours before kickoff, when the kit man laid the jersey out on the bench like something that might bruise if handled wrong.",
    body: [
      "Tunde had touched the badge before he ever wore it. That was the strange part nobody told you — that the first contact came in a locker room in Abuja, three hours before kickoff, when the kit man laid the jersey out on the bench like something that might bruise if handled wrong, and Tunde reached out and pressed two fingers flat against the green eagle stitched over where his heart would sit.",
      "It weighed nothing. That was the joke his father would have made, if his father were the kind of man who joked about things like this. It's thread, Tunde. It's four grams of thread. And yet Tunde stood there with his fingers on it for longer than made sense, because it did not feel like four grams. It felt like it had weight the way a name has weight, the way a promise has weight — nothing you could put on a scale, everything you could feel in your chest at three in the morning when sleep wouldn't come.",
      "He was nineteen. Six days ago he had been playing for a second-division side in Enugu, the kind of club where the pitch flooded every rainy season and the changing rooms had one working shower between twenty-two players, and a scout with tired eyes and a clipboard had watched him for eleven minutes before writing something down and walking away without a word. Tunde had assumed, the way you assume the worst when you've been disappointed enough times, that the eleven minutes had gone badly. He found out four days later, from his coach, shouting across the training ground, that it had gone the opposite of badly.",
      "His mother had not believed him on the phone. She made him say it three times. Then she had gone quiet in a way he recognized — the particular silence of a woman doing arithmetic in her head, converting a sentence into what it actually meant for a family that had spent a decade doing arithmetic on everything, on school fees and transport money and whether there was enough for both rice and the light bill in the same week.",
      "\"Your grandfather listened to every match on that small transistor radio,\" she said finally. \"The one that only got one station if you held it at the window. You remember it?\"",
      "He remembered it. He remembered his grandfather's hand on the dial, adjusting it by fractions of an inch, chasing a signal that lived at the very edge of hearing, static swallowing half the commentary, the old man leaning his whole body toward the sound like it was something he could pull closer if he wanted it badly enough. Tunde had been six, seven, sitting on the floor beside him not understanding the football, only understanding that something about the sound of the crowd on that radio made his grandfather sit up straighter than he sat for anything else in his life.",
      "His grandfather had died four years before Tunde touched a badge that hadn't existed yet, in a country his grandfather had loved with the specific, uncomplicated fury of a man who had never once left it. Tunde thought about that in the locker room too — that the man who had taught him, without ever meaning to teach him anything, what it felt like to want something on the other side of a radio signal, would never see him wear the thing he'd wanted.",
      "That was the part of the weight nobody prepared you for. Not the crowd. Not the cameras, though there would be plenty of those tonight, more than he'd ever stood in front of. Not even the eleven other men in the tunnel with him, seasoned internationals who had done this so many times the jersey had become, for them, simply a jersey again. It was the absence sewn into the fabric alongside the eagle — every person who had wanted this and not gotten it, every grandfather bent toward a radio at the edge of a signal, every kid on a flooded pitch in Enugu who was exactly as good as Tunde and simply hadn't been standing in the eleven minutes the scout happened to watch.",
      "He pulled the jersey over his head in the tunnel, and for a moment the world went dark and close inside the fabric, and in that half-second of nothing he heard, absurdly, the static-hiss of an old transistor radio finding its signal.",
      "Then his head was through, and the tunnel noise rushed back in, and the eagle sat flat and small and impossibly heavy against his chest, and the referee's assistant was waving them forward, and somewhere in a house in Enugu his mother was already crying in front of a television she'd bought secondhand three years ago and had never once regretted, and Tunde ran out into the light carrying four grams of thread and the entire weight of everyone who had never gotten to.",
    ],
    externalUrl: null,
  },
  {
    slug: "what-my-grandmother-kept",
    title: "What My Grandmother Kept",
    category: "Short Stories",
    date: "Jul 29, 2026",
    readTime: "7 min",
    excerpt:
      "The last time Ndidi saw her grandmother's handwriting, it was on the back of a photograph, in ink so faded it looked like it had been written underwater. Enugu, 1962. Before the war took the rest. She found it while clearing out the Brooklyn apartment, three days after the funeral, in a shoebox that had survived four moves and one flood and, apparently, everything else.",
    externalUrl: "https://substack.com/@leinadmori/p-208955691",
  },
  {
    slug: "charcoal-dreams",
    title: "Charcoal Dreams",
    category: "Short Stories",
    date: "Jul 23, 2026",
    readTime: "7 min",
    excerpt:
      "Kayode was nine the first time his father caught him drawing. He had learned to listen for the specific rhythm of his father's slippers on the concrete outside — drag-slap, drag-slap that meant Baba was tired, and the quicker, harder step that meant something had gone wrong at the workshop that day.",
    externalUrl: "https://substack.com/@leinadmori/p-208171697",
  },
  {
    slug: "the-voice-that-isnt-yours",
    title: "The Voice That Isn't Yours",
    category: "Essays",
    date: "Jun 3, 2026",
    readTime: "6 min",
    excerpt:
      "There is a moment. You know this moment. You have lived this moment. Maybe you were nine years old, sitting in a classroom with your pencil already raised before the teacher finished the question. You knew the answer. You felt it burning in your chest. And then something stopped you.",
    externalUrl: "https://substack.com/@leinadmori/p-200421422",
  },
  {
    slug: "the-stories-africa-still-needs-to-tell",
    title: "The Stories Africa Still Needs to Tell",
    category: "Essays",
    date: "Jun 1, 2026",
    readTime: "5 min",
    excerpt:
      "Sit with a grandmother in the evening and listen to her speak. Watch how her hands move when she describes a battle her great-grandmother survived. Notice how her voice drops when she reaches the part the colonizers tried to erase. That voice — low, trembling, fierce — is where Africa's true history lives.",
    externalUrl: "https://substack.com/@leinadmori/p-200101684",
  },
  {
    slug: "africas-top-referee-ruled-out",
    title: "Africa's Top Referee Ruled Out of 2026 World Cup After US Entry Denial",
    category: "Sports Journalism",
    date: "Jun 9, 2026",
    readTime: "3 min",
    excerpt:
      "The 2026 FIFA World Cup has suffered an unexpected controversy before a ball has even been kicked, with acclaimed Somali referee Omar Abdulkadir Artan being denied entry into the United States and subsequently ruled out of the tournament.",
    body: [
      "The 2026 FIFA World Cup has suffered an unexpected controversy before a ball has even been kicked, with acclaimed Somali referee Omar Abdulkadir Artan being denied entry into the United States and subsequently ruled out of the tournament.",
      "Artan, widely regarded as one of Africa's finest match officials and the Confederation of African Football's (CAF) Best Male Referee of 2025, was set to make history as the first Somali referee ever selected to officiate at a FIFA World Cup. Instead, his dream has been cut short following a decision by United States immigration authorities.",
      "According to FIFA, Artan arrived in Miami from Istanbul but was refused entry by U.S. Customs and Border Protection despite reportedly holding a valid visa. The governing body later confirmed that the Somali official would be unable to participate in training activities or officiate matches during the tournament due to the immigration decision.",
      "The development has sparked disappointment across African football circles, where Artan's rise has been celebrated as one of the continent's most inspiring refereeing success stories.",
      "Born in Mogadishu, Somalia, Artan became a FIFA-listed referee in 2018 and steadily climbed through the ranks of African football. He made history in 2024 when he became the first Somali referee to officiate at the Africa Cup of Nations (AFCON). Since then, he has handled several high-profile CAF competitions, earning widespread praise for his performances and professionalism.",
      "His selection for the 2026 World Cup was viewed as a landmark achievement not only for Somalia but for African officiating as a whole. FIFA had named him among the referees chosen for the tournament, which is being hosted jointly by the United States, Canada and Mexico.",
      "However, U.S. authorities reportedly determined that Artan was inadmissible following a vetting process conducted upon his arrival. Officials did not publicly disclose the specific reasons behind the decision. The move comes amid broader immigration restrictions affecting several countries, including Somalia.",
      "FIFA has stressed that immigration decisions remain the responsibility of host nations and that the organization has no authority to override such rulings. The world football governing body confirmed that Artan's exclusion from the tournament would stand.",
      "The Somali government and football stakeholders have expressed frustration over the situation, arguing that the decision has deprived the country of a historic sporting milestone. Many supporters had hoped to see Artan become the first Somali official to take charge of matches on football's biggest stage.",
      "Despite the setback, Artan has remained gracious, thanking FIFA, CAF and those who supported his journey. Reports indicate that he remains determined to continue his refereeing career at the highest level and hopes that this disappointment will not define his legacy.",
      "For African football, the news represents a significant loss. Artan's presence at the World Cup would have showcased the growing quality of African refereeing and served as inspiration for aspiring officials across the continent.",
      "Instead, one of Africa's most respected referees will watch from afar as the tournament unfolds, leaving many to wonder what could have been a historic moment not only for Somalia but for African football as a whole.",
    ],
    externalUrl: null,
  },
  {
    slug: "super-eagles-watch-arokodare-onuachu-lookman",
    title: "Super Eagles Watch: Arokodare & Onuachu Deliver, Lookman Rides His Luck in Barcelona",
    category: "Sports Journalism",
    date: "Mar 4, 2026",
    readTime: "2 min",
    excerpt:
      "Nigeria's attacking depth was once again on full display across Europe as several Super Eagles stars made decisive contributions for their clubs in midweek action.",
    body: [
      "Nigeria's attacking depth was once again on full display across Europe as several Super Eagles stars made decisive contributions for their clubs in midweek action.",
      "At Molineux, Tolu Arokodare proved to be the spark Wolverhampton Wanderers needed. Introduced just after the hour mark, the Nigerian forward changed the tempo of the contest with his physical presence and intelligent link-up play. His perfectly timed through pass unlocked the defence and allowed Rodrigo Gomes to fire home the opener in what ended as a hard-fought 2–1 victory. Arokodare's impact off the bench continues to underline his growing confidence and importance in crucial moments.",
      "In Turkey, Paul Onuachu maintained his impressive scoring rhythm for Trabzonspor. The towering striker came on in the second half and wasted little time announcing his presence, powering home a decisive goal in a key cup encounter. Known for his aerial dominance and clinical finishing, Onuachu once again demonstrated why he remains one of Nigeria's most reliable attacking outlets in Europe.",
      "Meanwhile in Spain, Ademola Lookman endured a tense night at the Spotify Camp Nou as Atlético Madrid locked horns with FC Barcelona in a high-stakes encounter. The Nigerian winger faced relentless pressure from the hosts, with Atlético struggling for rhythm for large spells of the game. However, despite the difficult outing and defeat on the night, Atlético progressed on aggregate — a fortunate escape that keeps their season ambitions alive.",
      "From England to Turkey and Spain, Nigeria's forwards continue to shape outcomes across major competitions. For Nigerian football followers, the message is clear: Europe remains a proving ground — and the Super Eagles are answering the call.",
    ],
    externalUrl: null,
  },
  {
    slug: "say-my-name",
    title: "Say My Name",
    category: "Poetry",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "They flattened it in the mouth of a substitute teacher, folded four syllables into two, called it close enough and moved down the register like nothing had been lost.",
    body: [
      "They flattened it in the mouth of a substitute teacher,\nfolded four syllables into two,\ncalled it close enough\nand moved down the register like nothing had been lost.",
      "I let them, for years.\nAnswered to the shortened thing\nthe way a river answers to a smaller name\nonce it crosses a border\nand the map-makers decide it's easier that way.",
      "But a name is not a convenience.\nIt is a sentence someone spoke over you\nbefore you could speak for yourself \nmy mother's mouth shaping it in a hospital hallway,\nmy grandfather's mouth shaping it at a naming ceremony,\ngenerations of mouths\nagreeing this sound belongs to no one else alive.",
      "So when you ask me to say it again, slower,\nI will.\nNot because you asked kindly \nbecause I finally remembered\nit was never mine to shrink.",
    ],
    externalUrl: null,
  },
  {
    slug: "distance-measured-in-data",
    title: "Distance, Measured in Data",
    category: "Poetry",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "We have found new units for missing someone. Megabytes. Time zones. The six-hour gap between her lunch and my dinner.",
    body: [
      "We have found new units for missing someone.\nMegabytes. Time zones. The six-hour gap\nbetween her lunch and my dinner,\nthe lag before her face catches up to her voice\non a screen the size of my palm.",
      "I have learned to love her\nin fragments of bandwidth \na buffering smile,\na laugh that arrives half a second\nafter the joke that caused it,\nas if joy, too, has to travel\nand sometimes gets held at customs.",
      "Some nights the call drops entirely\nand I sit in the sudden quiet\ndoing the math I always do:\nit is not that far, really,\nit is one ocean,\nit is seven hours,\nit is a single flight I have not taken in three years\nbecause love, it turns out,\nis easier to send than to carry.",
    ],
    externalUrl: null,
  },
  {
    slug: "my-grandmothers-hands",
    title: "My Grandmother's Hands",
    category: "Poetry",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Her hands were a ledger no bank ever printed  every crease a transaction: this one for the child she buried, this one for the years she farmed alone.",
    body: [
      "Her hands were a ledger no bank ever printed \nevery crease a transaction:\nthis one for the child she buried,\nthis one for the years she farmed alone,\nthis one, faint, almost healed,\nfor a burn from a stove she never once complained about.",
      "I used to think hands like that\nbelonged only to hard women,\nwomen the world had worn down to function.",
      "I was wrong.",
      "Hard is not the word.\nThe word is fluent \nher hands spoke a language\nof kneading and mending and holding on,\na grammar I am only now,\nslowly, badly, learning to read,",
      "tracing my own palm some mornings\nlooking for the first sentence\nof a story I didn't know\nhad already been writing itself\ninto my skin.",
    ],
    externalUrl: null,
  },
  {
    slug: "lagos-at-dawn",
    title: "Lagos at Dawn",
    category: "Poetry",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Before the horns. Before the generators cough themselves awake and the whole city clears its throat in diesel and static.",
    body: [
      "Before the horns.\nBefore the generators cough themselves awake\nand the whole city clears its throat in diesel and static —\nthere is a version of this place\nthat belongs only to the early ones:\nthe bread seller arranging loaves like a choir,\nthe okada driver praying with his helmet still in his hand,\nthe ocean, three miles off,\nexhaling the night back out to sea.",
      "Nobody photographs this hour.\nIt doesn't sell the story\nthe world has already decided to tell about us \nchaos, noise, a city that never quite stops shouting.",
      "But I have stood on a balcony at five a.m.\nand watched Lagos hold its breath,\ngentle as anywhere,\ngentle as anyone \nbefore the day remembers\nit has eighteen million mouths to feed\nand starts, again, to roar.",
    ],
    externalUrl: null,
  },
  {
    slug: "what-the-water-remembers",
    title: "What the Water Remembers",
    category: "Poetry",
    date: "Aug 2026",
    readTime: "2 min",
    excerpt:
      "The ocean does not forget. It has held every name that was ever thrown overboard to lighten a ship, every prayer said in a language that had no word yet for what was happening.",
    body: [
      "The ocean does not forget.\nIt has held every name that was ever\nthrown overboard to lighten a ship,\nevery prayer said in a language\nthat had no word yet for what was happening,\nevery hand that reached for another hand\nand missed.",
      "We call it the Atlantic now,\na word flat and technical,\na word that fits neatly on a map,\nas if a grave that size\ncould be filed under geography.",
      "But some nights I stand at the shoreline\nand the water sounds less like water\nand more like a throat clearing,\nlike something enormous\ntrying, after centuries,\nto finally say the names back.",
      "I do not know all of them.\nNo one does. That is the wound\nand the water knows it too.",
      "But I say the ones I have \ninto the wind, into the dark,\nthe way you'd hand something fragile\nto someone you trust to carry it further than you can ",
      "and the water takes them,\nthe way it has always taken everything,\nand does not let them go.",
    ],
    externalUrl: null,
  },
  {
    slug: "aura-body-spray",
    title: "AURA  Body Spray",
    category: "Brand Copy",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Aura. Not a scent. A signal. You don't remember what she said. You remember how the room felt after she left it.",
    body: [
      "Tagline: Aura. Not a scent. A signal.",
      "You don't remember what she said. You remember how the room felt after she left it. That's not chemistry  that's presence, and presence isn't something you spray on, it's something you walk into a room already wearing. AURA isn't cologne. It's the five seconds before anyone knows your name.",
    ],
    externalUrl: null,
  },
  {
    slug: "aura-botanical-spritz",
    title: "AURA  Botanical Spritz",
    category: "Brand Copy",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Refresh the mood, not just the moment. Most drinks cool you down. AURA resets you.",
    body: [
      "Tagline: Refresh the mood, not just the moment.",
      "Most drinks cool you down. AURA resets you. A light botanical spritz built for the exact minute the day gets loud — the meeting that ran long, the message you haven't replied to, the heat that won't quit. One can. One shift in temperature, and in temper.",
    ],
    externalUrl: null,
  },
  {
    slug: "aura-coffee",
    title: "AURA  Coffee",
    category: "Brand Copy",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Before the noise starts, there's this. There's a version of you that only exists for the first ten minutes of the morning.",
    body: [
      "Tagline: Before the noise starts, there's this.",
      "There's a version of you that only exists for the first ten minutes of the morning  before the phone, before the group chat, before the world remembers you exist. AURA Coffee is built for that version. Slow-roasted, unhurried, made for the one cup you drink in silence on purpose.",
    ],
    externalUrl: null,
  },
  {
    slug: "stride-streetwear",
    title: "STRIDE  Streetwear",
    category: "Brand Copy",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Made for the walk, not the runway. STRIDE doesn't dress you for where you're going. It dresses you for how you get there.",
    body: [
      "Tagline: Made for the walk, not the runway.",
      "STRIDE doesn't dress you for where you're going. It dresses you for how you get there  the pace, the posture, the confidence that shows up in your shoulders before it shows up in your face. Built on real streets, tested by people who actually move through them.",
    ],
    externalUrl: null,
  },
  {
    slug: "pesaflow-fintech",
    title: "PesaFlow  Fintech App",
    category: "Brand Copy",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Money that moves at the speed of your life. You shouldn't have to think in bank hours.",
    body: [
      "Tagline: Money that moves at the speed of your life.",
      "You shouldn't have to think in bank hours. PesaFlow sends, saves, and splits in real time  no queues, no waiting three days for a transfer to \"process.\" Built for a generation that runs businesses from a phone in one hand and life in the other.",
    ],
    externalUrl: null,
  },
  {
    slug: "bloom-and-shea",
    title: "BLOOM & SHEA   Skincare",
    category: "Brand Copy",
    date: "Aug 2026",
    readTime: "1 min",
    excerpt:
      "Grown, not manufactured. Every ingredient in BLOOM & SHEA can be traced to a farm, a name, a person who grew it.",
    body: [
      "Tagline: Grown, not manufactured.",
      "Every ingredient in BLOOM & SHEA can be traced to a farm, a name, a person who grew it not a lab that synthesized it. Skincare the way it was practiced long before it became an industry: simple, sourced with care, and honest about what's actually in the jar.",
    ],
    externalUrl: null,
  },
];
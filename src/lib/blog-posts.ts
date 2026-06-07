export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-brew-phin-coffee",
    title: "How to Brew Vietnamese Phin Coffee: The Complete Guide",
    excerpt:
      "The phin filter is deceptively simple — four parts, no electricity, and it produces the richest, most aromatic cup you've ever had. Here's how to master it.",
    date: "2026-05-28",
    category: "Coffee",
    readTime: "6 min read",
    sections: [
      {
        heading: "What Is a Phin Filter?",
        paragraphs: [
          "The phin (pronounced 'feen') is a small, gravity-fed Vietnamese coffee filter. Unlike a French press or pour-over, it requires zero technique and zero electricity. You pour hot water over the grounds, walk away, and come back to something extraordinary.",
          "It has four pieces: a perforated base plate that sits on your cup, a brewing chamber, a gravity press that gently compresses the grounds, and a lid that traps the heat in while it drips.",
        ],
      },
      {
        heading: "The Grind",
        paragraphs: [
          "Vietnamese coffee is traditionally ground medium-coarse — coarser than espresso, finer than a French press. If you're using our Truong Son Signature Blend, it comes pre-ground to phin spec and ready to go.",
        ],
      },
      {
        heading: "Step-by-Step Brew",
        paragraphs: [
          "1. Preheat the phin with boiling water, then discard.",
          "2. Add 20g of coffee (about 2.5 tablespoons) to the chamber.",
          "3. Rest the gravity press on the grounds — don't tamp hard, just let it sit.",
          "4. Pour 30ml of 95°C water to bloom. Wait 30 seconds.",
          "5. Pour the remaining 150ml in a slow circular motion.",
          "6. Place the lid on and wait 5–8 minutes. This is not a race.",
          "7. Lift the phin off, stir, and taste.",
        ],
      },
      {
        heading: "Serving Options",
        paragraphs: [
          "Cà Phê Đen (Black): Just the phin brew. Bold, syrupy, and clean.",
          "Cà Phê Sữa Đá (Iced Milk Coffee): Add 2 tablespoons of sweetened condensed milk before brewing. When the coffee drips in, stir hard, pour over ice. This is the drink that converts people.",
          "Cà Phê Trứng (Egg Coffee): A Hanoi classic. Whip egg yolk with condensed milk and sugar until frothy, pour the phin beneath it, and sip through the foam. Yes, it's as good as it sounds.",
        ],
      },
      {
        heading: "Why We Love It",
        paragraphs: [
          "The phin doesn't ask you to be precise. No gooseneck kettle, no gram-level scales, no 37-step recipe. You pour hot water. You wait. You get an extraordinary coffee. In a world that wants everything faster, the phin is a quiet revolution.",
        ],
      },
    ],
  },
  {
    slug: "moving-family-abroad-tips",
    title: "Moving Your Family Abroad: 10 Things Nobody Tells You",
    excerpt:
      "We moved 12 people — two adults and ten kids — from the United States to Southeast Asia. Here's the honest, unfiltered version of what we wish we'd known.",
    date: "2026-05-15",
    category: "Real Living",
    readTime: "9 min read",
    sections: [
      {
        heading: "1. Your Kids Will Adapt Faster Than You Do",
        paragraphs: [
          "Within two weeks, our kids were navigating the local market, learning new words, and making friends across language barriers. Meanwhile, we were still googling how to read utility bills. Children's brains are wired for adaptation. Trust them — and let them teach you.",
        ],
      },
      {
        heading: "2. The Cost of Living Is More Complicated Than The Internet Suggests",
        paragraphs: [
          '"Vietnam is so cheap!" Yes and no. Street food is cheap. Local transport is cheap. But international schools, quality healthcare, Western groceries, and reliable fast internet all add up. Budget with your real lifestyle in mind, not the fantasy version.',
        ],
      },
      {
        heading: "3. Healthcare Is Better Than You Expect",
        paragraphs: [
          "We've had stitches, broken bones, and emergency room visits. Every time: seen quickly, treated well, bill a fraction of the US equivalent. Get international health insurance before you leave — but don't let healthcare fears be the reason you don't go.",
        ],
      },
      {
        heading: "4. Visas Are a Full-Time Job",
        paragraphs: [
          "Especially with 10 kids. Start researching 6 months before departure. Hire a local immigration lawyer in your destination country. It costs a few hundred dollars and saves weeks of confusion.",
        ],
      },
      {
        heading: "5. You Will Miss Specific Things. Not What You Think.",
        paragraphs: [
          "You won't miss your house. You'll miss your specific coffee shop. Your Tuesday night ritual. The neighbour who always brought food over. The specifics. That grief is real — make space for it.",
        ],
      },
      {
        heading: "6. Your Morning Routine Becomes Sacred",
        paragraphs: [
          "When everything is unfamiliar, your morning is the anchor. Ours is a phin filter, a quiet hour before the kids wake up, and stillness. Protect your morning ritual fiercely — it's what keeps you calibrated.",
        ],
      },
      {
        heading: "7. Community Is Built on Proximity, Not Culture",
        paragraphs: [
          "Our closest friends abroad are from countries we'd never visited before we moved. Shared experience and proximity build connection faster than shared nationality ever did.",
        ],
      },
      {
        heading: "8. The Packing List Is Not the Hard Part",
        paragraphs: [
          "People obsess over what to bring. The hard part is what to leave behind — the assumptions, the routines, the social scripts. A minimalist packing list helps. The real work is internal.",
        ],
      },
      {
        heading: "9. Homeschool or International School? Neither Is Obvious.",
        paragraphs: [
          "We've done both, and full homeschool years. Each has tradeoffs. Don't commit to a single approach before you arrive and see what's actually available.",
        ],
      },
      {
        heading: "10. You Will Not Want to Come Back",
        paragraphs: [
          "Not because home was bad. But because the person who left is not the person who would return. Growth is uncomfortable and irreversible. The us that left doesn't quite fit the life we left behind — and that's okay.",
          "Want the full packing list, budget breakdown, and visa guide? Download our free guide — it's everything we wished we'd had before we left.",
        ],
      },
    ],
  },
  {
    slug: "da-lat-vietnam-coffee-capital",
    title: "Đà Lạt: Vietnam's Coffee Capital in the Clouds",
    excerpt:
      "At 1,500 metres above sea level, surrounded by strawberry farms and pine forests, Đà Lạt grows the arabica that defines our Signature Blend. Here's the story.",
    date: "2026-05-05",
    category: "Origins",
    readTime: "5 min read",
    sections: [
      {
        heading: "A City Unlike Any Other in Vietnam",
        paragraphs: [
          "Đà Lạt doesn't feel like Vietnam. That's the first thing you notice. The air is cool. The streets are quiet. French colonial architecture lines the hills. You expect tropical heat and get mountain mist instead.",
          "At 1,500 metres in the Central Highlands, Đà Lạt has a climate that belongs in Europe — which is exactly why French colonial administrators planted coffee here in the early 1900s. And why the arabica that grows here is unlike anything else in Asia.",
        ],
      },
      {
        heading: "The Altitude Advantage",
        paragraphs: [
          "Coffee quality is largely determined by elevation. Higher altitude means slower cherry development, denser beans, and more complex flavour. Ethiopian and Colombian arabica are celebrated globally for exactly this reason.",
          "The beans on the Langbian Plateau develop a brightness and florality completely unlike the bold, low-altitude robusta Vietnam is famous for internationally. Bright, clean, stone fruit and jasmine. A completely different cup.",
        ],
      },
      {
        heading: "Our Connection",
        paragraphs: [
          "When we moved to Vietnam, we spent three months in Đà Lạt. We hiked the coffee farms. We drank cup after cup with farmers whose families had grown arabica for three generations. We understood, slowly, that Vietnamese coffee was not one thing — it was a country's worth of altitude and intention.",
          "The Truong Son Signature Blend captures the full length of Vietnam in one cup: Đà Lạt arabica from the highlands for brightness, Đắk Lắk robusta from the lowlands for depth.",
        ],
      },
      {
        heading: "If You Visit",
        paragraphs: [
          "Rent a motorbike. Drive into the highlands. Visit a coffee farm. Drink the local phin at dawn. Eat the strawberries straight from the field.",
          "When you get home, you'll understand exactly why our coffee tastes the way it does.",
        ],
      },
    ],
  },
  {
    slug: "ca-phe-sua-da-recipe",
    title: "Cà Phê Sữa Đá: The Vietnamese Iced Coffee Recipe That Changed Our Mornings",
    excerpt:
      "Strong, sweet, cold, and completely addictive. Once you understand why condensed milk is non-negotiable, you'll never make iced coffee any other way.",
    date: "2026-04-22",
    category: "Recipes",
    readTime: "4 min read",
    sections: [
      {
        heading: "What Makes It Different",
        paragraphs: [
          "Every country has iced coffee. Vietnam has cà phê sữa đá — and there is no comparison. Three things set it apart: the coffee, the milk, and the patience.",
          "The coffee is phin-brewed: slow-dripped, dark, concentrated, almost syrupy. The milk is sweetened condensed milk — not cream, not oat milk, not regular milk. This is non-negotiable. The way it integrates with robusta's bitterness is unlike anything else. The patience is the wait. You let the phin drip.",
        ],
      },
      {
        heading: "What You Need",
        paragraphs: [
          "1 phin filter, 20g Sunwake Signature Blend ground for phin, 2 tablespoons sweetened condensed milk, hot water at 95°C, a glass full of ice.",
        ],
      },
      {
        heading: "The Method",
        paragraphs: [
          "1. Add 2 tablespoons of condensed milk to the bottom of a tall glass.",
          "2. Set the phin on top. Add 20g of coffee. Rest the gravity press on the grounds.",
          "3. Pour 30ml of water to bloom. Wait 30 seconds.",
          "4. Add the remaining 150ml of water. Lid on. Wait 5–7 minutes.",
          "5. Remove the phin. Stir the coffee and condensed milk together until fully combined.",
          "6. Pour over ice. Drink immediately.",
        ],
      },
      {
        heading: "A Note on Condensed Milk",
        paragraphs: [
          "The Vietnamese standard is Longevity Brand (Ông Thọ), available at Asian grocery stores online. Any sweetened condensed milk works — the Vietnamese brands have a slightly richer, more caramelised quality that's worth seeking out.",
          "For a vegan version, coconut-based condensed milk works beautifully and adds a subtle tropical note that suits the phin.",
        ],
      },
    ],
  },
  {
    slug: "first-year-southeast-asia-family",
    title: "Real Living: Our First Year in Southeast Asia as a Family of 12",
    excerpt:
      "We said we'd try it for a year. Twelve people, two continents, no return ticket. Here's what actually happened.",
    date: "2026-04-10",
    category: "Real Living",
    readTime: "8 min read",
    sections: [
      {
        heading: "The Decision",
        paragraphs: [
          "We didn't leave because we were unhappy. We left because we were comfortable — and comfortable had started to feel like a slow shrinking. The house was paid for. The routines were set. The kids were in schools that were fine.",
          "Fine. That word kept coming up. So we put the house on the market in March, and boarded a one-way flight in August. Twelve of us. Two adults, ten kids from 4 to 18. Fourteen checked bags.",
        ],
      },
      {
        heading: "Month One: Chaos, Then Calibration",
        paragraphs: [
          "The first month was chaos in the best possible sense. Nothing worked the way it was supposed to. We couldn't read menus. The youngest kids thought the motorbikes were hilarious; we thought they were terrifying.",
          "By week three, something shifted. Our 10-year-old learned enough Vietnamese to bargain at the market. We found a coffee shop that became our office. The woman who ran it started making our order before we sat down. That's when it felt like a life, not an experiment.",
        ],
      },
      {
        heading: "Month Six: What We Stopped Missing",
        paragraphs: [
          "By month six, we had stopped missing most of what we thought we would. The big house — not really. Familiar grocery stores — we found better ones. What we still missed: specific friendships. The Sunday dinners with family. Those are real, and they don't stop being real.",
        ],
      },
      {
        heading: "Month Twelve: The Answer We Couldn't Give",
        paragraphs: [
          "At the one-year mark, someone asked: \"So are you coming back?\" We looked at each other for a long time.",
          "The honest answer is that the us who left doesn't quite fit the life we left behind. The kids are different people. We are different people. We're not coming back — we're expanding. Vietnam, and wherever comes next.",
        ],
      },
      {
        heading: "What We Built Here",
        paragraphs: [
          "A coffee brand out of the highlands. A homeschool curriculum out of whatever the week offered. Friendships with people from six countries. A version of family life we'd never have found if we'd stayed comfortable.",
          "If you're thinking about it — the move, the leap, the thought that keeps coming back — that thought is worth taking seriously.",
        ],
      },
    ],
  },
  {
    slug: "arabica-vs-robusta-vietnamese-coffee",
    title: "Arabica vs Robusta: Why Vietnamese Coffee Uses Both (and Why That's Brilliant)",
    excerpt:
      "The specialty coffee world spent decades telling you arabica is good and robusta is bad. Vietnamese coffee ignores that entirely — and produces something better than either alone.",
    date: "2026-04-01",
    category: "Coffee",
    readTime: "5 min read",
    sections: [
      {
        heading: "The Received Wisdom",
        paragraphs: [
          "The specialty coffee world has a story it tells: arabica is the good stuff. Robusta is cheap filler. Good roasters use arabica; bad ones cut with robusta. This story is useful for marketing. It is less useful for understanding coffee.",
        ],
      },
      {
        heading: "What Arabica Actually Is",
        paragraphs: [
          "Arabica (Coffea arabica) grows at altitude, has more complex aromatics, and less caffeine. It tends toward brightness, florality, and fruit. When grown well — high altitude, careful processing — it is extraordinary.",
          "When it's not: grown low, on exhausted soil, over-roasted to hide flaws — it's just expensive brown water.",
        ],
      },
      {
        heading: "What Robusta Actually Is",
        paragraphs: [
          "Robusta (Coffea canephora) is tougher, lower-altitude, and higher-caffeine — nearly double arabica's. It has a bolder, earthier profile: dark chocolate, toasted nuts, a characteristic bitterness specialty coffee called 'harsh' and moved on from.",
          "What they missed: robusta produces more crema when espresso-pulled, holds its character through milk and ice, and has a richness and body arabica cannot match at equivalent concentrations.",
        ],
      },
      {
        heading: "Vietnam's Brilliant Answer",
        paragraphs: [
          "Vietnam is the world's second-largest coffee producer, and produces primarily robusta — for good reason. Robusta thrives in the lower elevations of the Central Highlands. But in Đà Lạt at 1,500 metres, arabica grows beautifully.",
          "Vietnamese coffee culture arrived at something the specialty world is only now catching up to: blend them. Use arabica's brightness and complexity. Use robusta's body, caffeine, and crema. Build a cup that's more than either alone.",
        ],
      },
      {
        heading: "Our Blend",
        paragraphs: [
          "Truong Son is exactly this: Đà Lạt arabica for brightness and florality, Đắk Lắk robusta for depth and the hit. Together they produce a cup that works through a phin, through an espresso machine, and over ice with condensed milk — without losing what makes each bean distinct.",
          "If you've only ever had arabica-only blends, try it. It might change what you think coffee can be.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function DownloadPage() {
  const sections = [
    {
      number: "01",
      title: "Why We Left the US",
      content:
        "After years of rising costs, we did the math. Living in Southeast Asia as a family of 12 costs us roughly 40% of what we spent in the US — with a higher quality of life. Warm weather, fresh food, community, and adventure every day.",
    },
    {
      number: "02",
      title: "Our Monthly Budget Breakdown",
      content:
        "Housing: $800–1,200/mo for a large villa. Food: $600–900/mo eating mostly local. Transport: $150/mo (motorbikes + grab). Activities: $200/mo. Total: roughly $2,000–3,000/mo for the whole family. Compare that to US rent alone.",
    },
    {
      number: "03",
      title: "Visas for Large Families — What Actually Works",
      content:
        "Tourist visas (e-visa) are 90 days in Vietnam. We use a mix of visa runs and the Digital Nomad approach. Key tip: apply individually for each child — group applications get flagged. Budget $25/person for the e-visa.",
    },
    {
      number: "04",
      title: "Our Complete Packing List",
      content:
        "What we brought: 1 bag per person (45L max), laptop, school tablets, first aid kit, instant coffee for the road. What we ditched after week 1: excess clothes, physical books, anything that couldn't fit in a backpack. Everything else you can buy cheaper there.",
    },
    {
      number: "05",
      title: "Schooling 10 Kids Abroad",
      content:
        "We use a mix of Khan Academy, local tutors ($5–10/hr), and structured project-based learning. The kids learn more from living — markets, history, language — than any classroom. We dedicate 3–4 hours a day to structured learning, the rest is life.",
    },
    {
      number: "06",
      title: "The Apps We Can't Live Without",
      content:
        "Grab (transport + food delivery), Google Translate (camera mode is magic), Wise (transfer money without fees), WhatsApp (everything), and Airbnb for first arrivals before finding long-term rentals. Download offline maps before you land.",
    },
    {
      number: "07",
      title: "10 Mistakes We Made (So You Don't Have To)",
      content:
        "1. Overpacking. 2. Not learning basic Vietnamese phrases. 3. Booking too far in advance. 4. Ignoring the rainy season. 5. Not getting travel insurance. 6. Converting money at the airport. 7. Assuming Western food is available everywhere. 8. Not having enough cash. 9. Skipping the slow cooker mindset. 10. Trying to replicate our US routine instead of building a new one.",
    },
    {
      number: "08",
      title: "Our Morning Ritual — Sunwake Coffee",
      content:
        "No matter where we are, mornings start the same: Sunwake coffee brewed in the phin. There's something grounding about a ritual when everything else is new. We source our beans from the highlands of Đà Lạt — the same mountains we've hiked with our kids. Available at sunwake.co.",
    },
  ];

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1 bg-paper">

        {/* Cover */}
        <div className="bg-espresso text-cream py-20 px-5 text-center print:py-32">
          <p className="eyebrow text-amber mb-4">Free Guide — Sunwake Family</p>
          <h1 className="font-display text-5xl font-semibold leading-tight max-w-2xl mx-auto md:text-6xl">
            Moving Abroad with 10 Kids
          </h1>
          <p className="mt-4 text-xl text-cream/70 font-display italic">
            What We Wish We Knew
          </p>
          <p className="mt-6 text-cream/50 text-sm">A family of 12 · US → Southeast Asia</p>
        </div>

        {/* Print button */}
        <div className="text-center py-8 bg-sand print:hidden">
          <p className="text-sm text-espresso/60 mb-3">Save this guide as a PDF</p>
          <button
            onClick={() => window.print()}
            className="bg-amber px-8 py-3 text-sm font-semibold uppercase tracking-widest text-espresso hover:opacity-90 transition-opacity"
          >
            Download / Print PDF
          </button>
        </div>

        {/* Guide content */}
        <div className="mx-auto max-w-3xl px-5 py-16 space-y-14">
          {sections.map((s) => (
            <div key={s.number} className="border-l-4 border-amber pl-8">
              <p className="eyebrow text-amber mb-2">Section {s.number}</p>
              <h2 className="font-display text-2xl font-semibold text-espresso mb-4">
                {s.title}
              </h2>
              <p className="text-espresso/80 leading-relaxed">{s.content}</p>
            </div>
          ))}

          {/* CTA at bottom */}
          <div className="bg-espresso text-cream rounded-sm p-10 text-center print:hidden">
            <p className="font-display text-2xl font-semibold mb-2">
              Follow the journey
            </p>
            <p className="text-cream/70 mb-6">
              We share updates, travel tips, and coffee drops at Sunwake. Join the family.
            </p>
            <a
              href="/free-guide"
              className="inline-block bg-amber px-8 py-3 text-sm font-semibold uppercase tracking-widest text-espresso hover:opacity-90 transition-opacity"
            >
              Share with a friend
            </a>
          </div>
        </div>

      </main>
      <SiteFooter />
    </div>
  );
}

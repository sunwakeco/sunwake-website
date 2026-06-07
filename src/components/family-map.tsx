const STOPS = [
  {
    flag: "🇺🇸",
    city: "United States",
    detail: "Where we started",
    story:
      "Two adults, ten kids, one comfortable life — and a growing feeling that comfortable wasn't enough. We packed up everything and left.",
  },
  {
    flag: "✈️",
    city: "Pacific Crossing",
    detail: "August 2024",
    story:
      "Fourteen checked bags, a one-way ticket, and the kind of quiet that only exists between a decision and its consequences.",
  },
  {
    flag: "🇻🇳",
    city: "Hồ Chí Minh City",
    detail: "Vietnam — first stop",
    story:
      "Street coffee at 6am. The smell of phin filters everywhere. The city woke us up in ways we didn't know we needed.",
  },
  {
    flag: "⛰️",
    city: "Đà Lạt Highlands",
    detail: "1,500m above sea level",
    story:
      "Misty mornings, arabica rows as far as you can see, and the flavour that became Sunwake. This is where the coffee was born.",
  },
];

export function FamilyMap() {
  return (
    <section className="bg-espresso py-20 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-amber">Our Journey</p>
        <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
          US → Vietnam — the long way round
        </h2>
        <p className="mt-4 max-w-xl text-cream/60">
          12 people. 4 locations. One decision that changed everything. Hover
          each stop to read the story.
        </p>

        {/* Desktop: horizontal timeline */}
        <div className="mt-14 hidden md:block">
          <div className="relative flex items-start justify-between gap-4">
            {/* connecting line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-8 h-px border-t-2 border-dashed border-jade/30"
            />

            {STOPS.map((stop, i) => (
              <div key={i} className="group relative flex-1 text-center">
                {/* pin */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-jade/30 bg-espresso-soft text-3xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-amber group-hover:shadow-lg group-hover:shadow-amber/20">
                  {stop.flag}
                </div>

                <p className="mt-4 font-semibold text-cream">{stop.city}</p>
                <p className="eyebrow mt-1 text-jade/70">{stop.detail}</p>

                {/* story on hover */}
                <div className="pointer-events-none mx-auto mt-3 max-w-[180px] overflow-hidden text-sm leading-relaxed text-cream/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {stop.story}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical cards */}
        <div className="mt-10 space-y-5 md:hidden">
          {STOPS.map((stop, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-sm border border-jade/20 bg-espresso-soft/60 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-jade/30 bg-espresso text-2xl">
                {stop.flag}
              </div>
              <div>
                <p className="font-semibold text-cream">{stop.city}</p>
                <p className="eyebrow mt-0.5 text-jade/70">{stop.detail}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/50">
                  {stop.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ITEMS = [
  {
    name: "Sunwake Tote Bag",
    tag: "Lifestyle",
    price: "from $24",
    bg: "bg-tile-blush",
    emoji: "👜",
  },
  {
    name: "Phin Filter Cap",
    tag: "Headwear",
    price: "from $32",
    bg: "bg-tile-mist",
    emoji: "🧢",
  },
  {
    name: "Good Life Mug",
    tag: "Drinkware",
    price: "from $18",
    bg: "bg-tile-clay",
    emoji: "☕",
  },
  {
    name: "Highlands Hoodie",
    tag: "Apparel",
    price: "from $55",
    bg: "bg-tile-stone",
    emoji: "🌿",
  },
];

export function MerchPreview() {
  return (
    <section id="merch" className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-amber">Merch Store</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-semibold text-espresso md:text-5xl">
            Wear the good life
          </h2>
          <a
            href="/waitlist"
            className="inline-block border border-amber px-6 py-3 text-xs font-semibold uppercase tracking-widest text-amber transition-colors hover:bg-amber hover:text-cream"
          >
            Join the waitlist
          </a>
        </div>
        <p className="mt-4 max-w-xl text-espresso/60">
          Print-on-demand merch launching soon — zero inventory, ships worldwide.
          Get notified first when the store goes live.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className={`${item.bg} group relative overflow-hidden rounded-sm p-6`}
            >
              <div className="mb-4 text-4xl">{item.emoji}</div>
              <p className="eyebrow text-espresso/50">{item.tag}</p>
              <p className="mt-1 font-semibold text-espresso">{item.name}</p>
              <p className="mt-1 text-sm text-espresso/60">{item.price}</p>

              {/* coming soon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors group-hover:bg-espresso/10">
                <span className="eyebrow translate-y-2 rounded-sm bg-amber px-3 py-1.5 text-cream opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  Coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

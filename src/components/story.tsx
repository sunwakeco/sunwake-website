export function Story() {
  return (
    <section id="story" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <div className="relative h-80 overflow-hidden rounded-sm bg-jade-deep">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-jade via-jade-deep to-espresso"
            />
            <div className="absolute inset-0 flex items-end p-8">
              <p className="font-display text-2xl italic text-cream/90">
                &ldquo;From mist to cup — the whole length of Vietnam.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="eyebrow text-jade">From the Highlands</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-espresso md:text-5xl">
            Coffee the way Vietnam drinks it
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-espresso-soft">
            Most of the world only knows half of Vietnamese coffee. We bring you
            both halves — the brightness of the highlands and the backbone of the
            lowlands — roasted fresh and shipped within days.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-espresso-soft">
            Slow down, drip it through the phin, and taste the difference origin
            makes.
          </p>
          <a
            href="#collection"
            className="mt-8 inline-block border-b-2 border-amber pb-1 text-sm font-semibold uppercase tracking-widest text-espresso transition-colors hover:text-amber"
          >
            Read our origin story
          </a>
        </div>
      </div>
    </section>
  );
}

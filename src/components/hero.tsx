export function Hero() {
  return (
    <section
      id="blend"
      className="relative overflow-hidden bg-espresso text-cream"
    >
      {/* Warm gradient glow standing in for hero photography */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-amber/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-40 h-[32rem] w-[32rem] rounded-full bg-jade/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="eyebrow text-amber">Our Signature Blend</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Sunwake
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80">
            Highland Arabica from the misty slopes of Da Lat, married to bold
            Dak Lak Robusta. Built for the phin, unstoppable as an espresso.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="bg-amber px-7 py-3 text-sm font-semibold uppercase tracking-widest text-espresso transition-transform hover:-translate-y-0.5"
            >
              Shop the Blend
            </a>
            <a
              href="#story"
              className="border border-cream/40 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              How we brew the phin
            </a>
          </div>
        </div>

        {/* Stylised bag / phin placeholder */}
        <div className="relative mx-auto flex h-80 w-full max-w-sm items-center justify-center">
          <div className="absolute inset-0 rotate-3 rounded-sm border border-cream/15 bg-espresso-soft/60" />
          <div className="relative flex h-72 w-56 flex-col justify-between rounded-sm bg-cream p-6 text-espresso shadow-2xl">
            <div>
              <p className="eyebrow text-amber">Signature Blend</p>
              <p className="mt-2 font-display text-3xl font-semibold leading-tight">
                Truong Son
              </p>
            </div>
            <div className="space-y-1 text-xs text-espresso/70">
              <p>Da Lat Arabica · Dak Lak Robusta</p>
              <p>Caramel · Cocoa · Toasted nut</p>
              <p className="pt-2 font-semibold tracking-widest text-espresso">
                Sunwake · 12 OZ WHOLE BEAN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

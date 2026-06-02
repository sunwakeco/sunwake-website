export function Subscribe() {
  return (
    <section id="subscribe" className="bg-sand">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center">
        <p className="eyebrow text-amber">Never Run Dry</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-espresso md:text-5xl">
          Fresh bags on your schedule — save 10%
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-espresso-soft">
          Pick your rhythm, weekly to monthly. We roast, we ship, you brew.
          Change or pause it anytime — no fine print.
        </p>
        <a
          href="#collection"
          className="mt-8 bg-espresso px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition-transform hover:-translate-y-0.5"
        >
          Start a subscription
        </a>
      </div>
    </section>
  );
}

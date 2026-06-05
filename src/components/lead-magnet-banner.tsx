export function LeadMagnetBanner() {
  return (
    <section className="bg-jade text-cream py-14 px-5">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:justify-between">
        <div>
          <p className="eyebrow text-amber mb-2">Free Download</p>
          <h2 className="font-display text-3xl font-semibold leading-snug md:text-4xl">
            Moving Abroad with 10 Kids —<br className="hidden md:block" /> What We Wish We Knew
          </h2>
          <p className="mt-3 text-cream/75 max-w-lg">
            Our honest guide to budgets, visas, packing, schooling and the mistakes we made
            so your family doesn't have to.
          </p>
        </div>
        <a
          href="/free-guide"
          className="shrink-0 bg-amber px-8 py-4 text-sm font-semibold uppercase tracking-widest text-espresso transition-opacity hover:opacity-90"
        >
          Get the free guide →
        </a>
      </div>
    </section>
  );
}

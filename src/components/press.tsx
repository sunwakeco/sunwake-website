/**
 * NOTE FOR THE CLIENT: these are PLACEHOLDER quotes so the section has shape.
 * Replace them with real reviews/press before launch — never ship invented
 * testimonials.
 */
const QUOTES = [
  {
    quote:
      "Finally, Vietnamese coffee that takes itself as seriously as the third-wave roasters — without losing the soul of the phin.",
    source: "Placeholder — replace with real review",
  },
  {
    quote:
      "The blend does something rare: highland brightness and lowland depth in the same cup, and it holds up with condensed milk.",
    source: "Placeholder — replace with real review",
  },
];

export function Press() {
  return (
    <section className="bg-jade-deep text-cream">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="eyebrow text-amber">Word&rsquo;s Getting Around</p>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {QUOTES.map((item) => (
            <figure key={item.quote} className="flex flex-col">
              <span className="font-display text-5xl leading-none text-amber">
                &ldquo;
              </span>
              <blockquote className="mt-2 font-display text-xl italic leading-relaxed text-cream/90">
                {item.quote}
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-cream/50">
                {item.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

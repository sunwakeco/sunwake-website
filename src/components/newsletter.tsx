export function Newsletter() {
  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 py-16 md:flex-row md:justify-between md:text-left">
        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl font-semibold">Join the drip</h2>
          <p className="mt-2 text-cream/70">
            First access to new lots, brewing guides, and 10% off your first bag.
          </p>
        </div>

        {/* TODO: wire this form to the client's email provider (e.g. Klaviyo,
            Mailchimp, Resend) — currently a non-functional placeholder. */}
        <form className="flex w-full max-w-md gap-0" aria-label="Newsletter signup">
          <input
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email address"
            className="w-full border border-cream/30 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-amber focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 bg-amber px-6 py-3 text-sm font-semibold uppercase tracking-widest text-espresso transition-colors hover:bg-cream"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

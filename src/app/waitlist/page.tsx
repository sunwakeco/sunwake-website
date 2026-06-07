import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function WaitlistPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-espresso py-24 text-cream">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-amber/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-jade/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl px-5 text-center">
            <p className="eyebrow text-amber">Coffee Pre-Order</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-6xl">
              First access to Sunwake Coffee
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              We roast in small batches and ship to order. Join the waitlist and
              be the first to know when your roast is ready — before we open to
              the public.
            </p>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-5xl px-5">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: "☕",
                  title: "First access",
                  body: "Waitlist members get notified and can place orders before we open publicly. Small batches sell out.",
                },
                {
                  icon: "🌿",
                  title: "Launch discount",
                  body: "15% off your first order — waitlist exclusive. No code needed, automatically applied.",
                },
                {
                  icon: "✈️",
                  title: "Free shipping",
                  body: "Free US shipping on your first waitlist order, regardless of order size.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-sm border border-espresso/10 bg-paper p-6"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-4 font-semibold text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/60">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="bg-jade-deep py-16 text-cream">
          <div className="mx-auto max-w-lg px-5">
            <p className="eyebrow text-amber text-center">Join the Waitlist</p>
            <h2 className="mt-4 text-center font-display text-3xl font-semibold">
              Reserve your spot
            </h2>
            <p className="mt-3 text-center text-sm text-cream/60">
              No payment required now. We&apos;ll email you when your roast is
              ready.
            </p>

            <form
              action="/api/subscribe"
              method="POST"
              className="mt-10 space-y-4"
            >
              <input type="hidden" name="list" value="waitlist" />

              <div>
                <label
                  htmlFor="name"
                  className="eyebrow mb-2 block text-cream/70"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Heather"
                  className="w-full border border-cream/20 bg-espresso/40 px-4 py-3 text-cream placeholder-cream/30 outline-none focus:border-amber"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="eyebrow mb-2 block text-cream/70"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-cream/20 bg-espresso/40 px-4 py-3 text-cream placeholder-cream/30 outline-none focus:border-amber"
                />
              </div>

              <div>
                <label
                  htmlFor="roast"
                  className="eyebrow mb-2 block text-cream/70"
                >
                  Roast preference
                </label>
                <select
                  id="roast"
                  name="roast"
                  className="w-full border border-cream/20 bg-espresso/40 px-4 py-3 text-cream outline-none focus:border-amber"
                >
                  <option value="signature">
                    Truong Son — Signature Blend (recommended)
                  </option>
                  <option value="arabica">Mist — Highland Arabica only</option>
                  <option value="robusta">
                    Bold — Single-Origin Robusta
                  </option>
                  <option value="kit">Milk Coffee Kit</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-amber px-6 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition-opacity hover:opacity-90"
              >
                Reserve my spot
              </button>

              <p className="text-center text-xs text-cream/40">
                No spam. Unsubscribe any time.
              </p>
            </form>
          </div>
        </section>

        {/* About the coffee */}
        <section className="bg-sand py-16">
          <div className="mx-auto max-w-5xl px-5">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="eyebrow text-amber">About the Coffee</p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-espresso">
                  Roasted to order. Shipped within 48 hours.
                </h2>
                <p className="mt-5 leading-relaxed text-espresso/70">
                  We don&apos;t roast until you order. Every bag ships within 48
                  hours of roasting — no warehouse sitting, no stale coffee.
                  Highland beans, roasted fresh, on their way to you.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Da Lat Arabica · Dak Lak Robusta",
                    "Medium-dark roast, calibrated for the phin",
                    "Whole bean — ground to order on request",
                    "12 oz bags · Ships USPS Priority",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <span className="mt-0.5 text-amber">✓</span>
                      <span className="text-sm text-espresso/70">{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative flex h-72 w-52 flex-col justify-between rounded-sm bg-espresso p-6 shadow-2xl">
                  <div>
                    <p className="eyebrow text-amber">Waitlist Exclusive</p>
                    <p className="mt-2 font-display text-3xl font-semibold leading-tight text-cream">
                      Truong Son
                    </p>
                  </div>
                  <div className="space-y-1 text-xs text-cream/60">
                    <p>Da Lat Arabica · Dak Lak Robusta</p>
                    <p>Caramel · Cocoa · Toasted nut</p>
                    <p className="pt-2 font-semibold tracking-widest text-cream">
                      Sunwake · 12 OZ WHOLE BEAN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

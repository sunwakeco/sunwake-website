"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function FreeGuidePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    if (!res.ok) {
      setError("Something went wrong — please try again.");
      setLoading(false);
      return;
    }

    router.push("/free-guide/download");
  }

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-espresso text-cream py-20 px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-amber mb-4">Free Download</p>
            <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl">
              Moving Abroad with 10 Kids —<br className="hidden md:block" /> What We Wish We Knew
            </h1>
            <p className="mt-6 text-lg text-cream/75 leading-relaxed">
              We packed up our family of 12 and moved to Southeast Asia. Inside this free guide
              we share the 25 things that saved us — and the 10 mistakes we made so you don't have to.
            </p>
          </div>
        </section>

        {/* What's inside */}
        <section className="py-16 px-5 bg-paper">
          <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-12 items-start">

            <div>
              <p className="eyebrow text-amber mb-4">What's inside</p>
              <ul className="space-y-4 text-espresso">
                {[
                  "How we budgeted $X/month for a family of 12 abroad",
                  "The visa strategy that works for large families in SE Asia",
                  "Our complete packing list — what we brought, what we ditched",
                  "How we handle schooling for 10 kids on the road",
                  "The apps and tools we can't live without",
                  "Our honest cost breakdown: Vietnam vs. staying in the US",
                  "How Sunwake Coffee became part of our morning ritual abroad",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-amber text-lg">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-cream rounded-sm shadow-lg p-8 border border-sand">
              <h2 className="font-display text-2xl font-semibold text-espresso mb-2">
                Get the free guide
              </h2>
              <p className="text-sm text-espresso/60 mb-6">
                Instant download. No spam, ever. Just real family travel advice.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-espresso/70 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your first name"
                    className="w-full border border-sand bg-paper px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-espresso/70 mb-1">
                    Email address <span className="text-amber">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-sand bg-paper px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-amber focus:outline-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber px-6 py-4 text-sm font-semibold uppercase tracking-widest text-espresso transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Getting your guide…" : "Send me the free guide →"}
                </button>
              </form>
              <p className="mt-4 text-xs text-espresso/40 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="bg-espresso text-cream py-12 px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-semibold mb-2">
              Real family. Real move. Real advice.
            </p>
            <p className="text-cream/70">
              We are a family of 12 — two parents, ten kids — who left the US for Southeast Asia.
              This guide is everything we learned the hard way.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}

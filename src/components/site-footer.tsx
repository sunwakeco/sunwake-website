const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Signature Blend", href: "#collection" },
      { label: "Single Origin", href: "#collection" },
      { label: "Brew Kits", href: "#collection" },
      { label: "Subscriptions", href: "#subscribe" },
      { label: "Merch", href: "#merch" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How to brew a phin", href: "#story" },
      { label: "Our origin story", href: "#story" },
      { label: "Arabica vs. Robusta", href: "/blog/arabica-vs-robusta-vietnamese-coffee" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Sunwake", href: "#story" },
      { label: "Coffee Waitlist", href: "/waitlist" },
      { label: "Free Packing Guide", href: "/free-guide" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-espresso/10">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[0.25em] text-espresso">
              Sunwake
            </p>
            <p className="mt-3 max-w-xs text-sm text-espresso/60">
              Vietnamese signature-blend coffee. Roasted to order, shipped across
              the United States.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-jade">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-espresso/70 transition-colors hover:text-amber"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-espresso/10 pt-8 md:flex-row">
          <p className="font-display text-lg italic text-espresso/70">
            Brewed bold. Born in the highlands.
          </p>
          <p className="text-xs text-espresso/50">
            © 2026 Sunwake Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Signature Blend", href: "#collection" },
      { label: "Single Origin", href: "#collection" },
      { label: "Brew Kits", href: "#collection" },
      { label: "Subscriptions", href: "#subscribe" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How to brew a phin", href: "#story" },
      { label: "Our origin story", href: "#story" },
      { label: "Arabica vs. Robusta", href: "#story" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About PHIN", href: "#story" },
      { label: "Wholesale", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Shipping & returns", href: "#" },
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
              PHIN
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
            © 2026 PHIN Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

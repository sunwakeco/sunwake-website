const NAV = [
  { label: "The Blend", href: "#blend" },
  { label: "Shop", href: "#collection" },
  { label: "Our Story", href: "#story" },
  { label: "Blog", href: "/blog" },
  { label: "Merch", href: "#merch" },
  { label: "Waitlist", href: "/waitlist" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-espresso text-cream text-center text-xs tracking-wide py-2 px-4">
        Free US shipping over $40 · Roasted to order in small batches
      </div>

      {/* Main nav */}
      <div className="bg-cream/90 backdrop-blur-sm border-b border-espresso/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a
            href="#top"
            className="font-display text-2xl font-semibold tracking-[0.25em] text-espresso"
          >
            Sunwake
          </a>

          <ul className="hidden gap-8 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-espresso/80 transition-colors hover:text-amber"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#collection"
            className="border border-espresso bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-espresso transition-colors hover:bg-espresso hover:text-cream"
          >
            Shop the Blend
          </a>
        </nav>
      </div>
    </header>
  );
}

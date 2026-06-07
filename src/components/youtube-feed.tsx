const VIDEOS = [
  {
    id: "EM8OBFksnF4",
    title: "Living Slow in Southeast Asia",
    creator: "The Lost LeBlancs",
    tag: "Travel & Family",
  },
  {
    id: "kDzJ_XNOoPE",
    title: "Vietnamese Coffee: A Complete Guide",
    creator: "James Hoffmann",
    tag: "Coffee",
  },
  {
    id: "W3G_RnfPFOQ",
    title: "Morning Rituals for a Better Life",
    creator: "Exploring Alternatives",
    tag: "Wellness",
  },
];

export function YouTubeFeed() {
  return (
    <section className="bg-espresso py-20 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-amber">Watch &amp; Be Inspired</p>
        <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Real living, in motion
          </h2>
          <p className="max-w-sm text-sm text-cream/50">
            Creators who share our love for slow travel, great coffee, and the
            good life — from tropical mornings to highland harvests.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <div
              key={v.id}
              className="overflow-hidden rounded-sm border border-jade/20"
            >
              <div className="aspect-video w-full bg-espresso-soft">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-4">
                <span className="eyebrow text-amber">{v.tag}</span>
                <p className="mt-1 font-semibold leading-snug text-cream">
                  {v.title}
                </p>
                <p className="mt-1 text-sm text-cream/40">{v.creator}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-cream/25">
          Example creators — swap these for your own Sunwake channel videos once
          you&apos;re live
        </p>
      </div>
    </section>
  );
}

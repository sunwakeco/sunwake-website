import { BLOG_POSTS } from "@/lib/blog-posts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const CATEGORY_COLORS: Record<string, string> = {
  Coffee: "text-amber bg-amber/10",
  "Real Living": "text-jade-deep bg-jade/10",
  Origins: "text-jade bg-jade/10",
  Recipes: "text-coral bg-coral/10",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-espresso py-20 text-cream">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow text-amber">The Sunwake Blog</p>
            <h1 className="mt-5 font-display text-5xl font-semibold md:text-6xl">
              Stories, coffee &amp; real life
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Brewing guides, family travel, highland origins, and the honest
              version of life abroad — written from wherever we happen to be.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-sm border border-espresso/10 bg-cream transition-shadow hover:shadow-lg"
                >
                  {/* Colour bar by category */}
                  <div
                    className={`h-1.5 w-full ${post.category === "Coffee" ? "bg-amber" : post.category === "Real Living" ? "bg-jade" : post.category === "Origins" ? "bg-jade-deep" : "bg-mango"}`}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`eyebrow rounded-sm px-2 py-0.5 text-[10px] ${CATEGORY_COLORS[post.category] ?? "text-espresso bg-espresso/10"}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-espresso/40">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-espresso group-hover:text-amber transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso/60">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-espresso/10 pt-4">
                      <time className="text-xs text-espresso/40">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="text-xs font-semibold text-amber">
                        Read →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

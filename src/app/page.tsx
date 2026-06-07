import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { Subscribe } from "@/components/subscribe";
import { Products } from "@/components/products";
import { Press } from "@/components/press";
import { Newsletter } from "@/components/newsletter";
import { LeadMagnetBanner } from "@/components/lead-magnet-banner";
import { YouTubeFeed } from "@/components/youtube-feed";
import { FamilyMap } from "@/components/family-map";
import { MerchPreview } from "@/components/merch-preview";
import { SiteFooter } from "@/components/site-footer";
import { BLOG_POSTS } from "@/lib/blog-posts";

export default function Home() {
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Story />
        <FamilyMap />
        <LeadMagnetBanner />
        <Products />
        <Subscribe />
        <YouTubeFeed />

        {/* Blog preview */}
        <section className="bg-cream py-20" id="blog">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow text-jade">From the Blog</p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-espresso">
                  Stories worth reading
                </h2>
              </div>
              <a
                href="/blog"
                className="hidden text-sm font-semibold text-amber hover:underline md:block"
              >
                All posts →
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {recentPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-sm border border-espresso/10 bg-paper/30 transition-shadow hover:shadow-md"
                >
                  <div
                    className={`h-1 w-full ${post.category === "Coffee" ? "bg-amber" : post.category === "Real Living" ? "bg-jade" : post.category === "Origins" ? "bg-jade-deep" : "bg-mango"}`}
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="eyebrow text-jade/70">{post.category}</p>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-espresso group-hover:text-amber transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso/60">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-amber font-semibold">
                      Read {post.readTime} →
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <a href="/blog" className="text-sm font-semibold text-amber hover:underline">
                All posts →
              </a>
            </div>
          </div>
        </section>

        <MerchPreview />
        <Press />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}

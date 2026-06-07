import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/lib/blog-posts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-espresso py-16 text-cream">
          <div className="mx-auto max-w-3xl px-5">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-amber">{post.category}</span>
              <span className="text-xs text-cream/40">·</span>
              <span className="text-xs text-cream/40">{post.readTime}</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-cream/70">{post.excerpt}</p>
            <p className="mt-6 text-xs text-cream/40">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-coconut py-14">
          <div className="mx-auto max-w-3xl px-5">
            <article className="space-y-10">
              {post.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-display text-2xl font-semibold text-espresso">
                      {section.heading}
                    </h2>
                  )}
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((para, j) => (
                      <p
                        key={j}
                        className="leading-relaxed text-espresso/80"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            {/* CTA */}
            <div className="mt-14 rounded-sm bg-espresso p-8 text-cream">
              <p className="eyebrow text-amber">Enjoy the read?</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Try the coffee behind the story
              </h3>
              <p className="mt-3 text-cream/70">
                Our Truong Son Signature Blend — Da Lat arabica, Dak Lak robusta,
                roasted to order.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/#collection"
                  className="bg-amber px-6 py-3 text-xs font-semibold uppercase tracking-widest text-espresso hover:opacity-90 transition-opacity"
                >
                  Shop the Blend
                </a>
                <a
                  href="/blog"
                  className="border border-cream/40 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-cream hover:text-espresso transition-colors"
                >
                  ← Back to Blog
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

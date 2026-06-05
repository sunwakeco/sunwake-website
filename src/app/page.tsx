import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { Subscribe } from "@/components/subscribe";
import { Products } from "@/components/products";
import { Press } from "@/components/press";
import { Newsletter } from "@/components/newsletter";
import { LeadMagnetBanner } from "@/components/lead-magnet-banner";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Story />
        <LeadMagnetBanner />
        <Products />
        <Subscribe />
        <Press />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}

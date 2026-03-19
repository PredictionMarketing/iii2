import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Blog = () => (
  <div className="min-h-screen">
    <SiteHeader />
    <main className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="section-container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground">Blog</h1>
        <p className="mt-4 text-lg text-hero-muted max-w-2xl">
          Deep dives into email infrastructure, acquisition economics, and pipeline strategy.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <article
              key={i}
              className="rounded-xl border border-border/20 bg-hero/50 p-8 group hover:border-accent/30 transition-colors"
            >
              <p className="text-xs text-hero-muted uppercase tracking-wider">Coming soon</p>
              <h3 className="font-display text-xl font-semibold text-hero-foreground mt-2">
                Blog post loading...
              </h3>
              <p className="mt-3 text-sm text-hero-muted leading-relaxed">
                New content will appear here. Stay tuned for insights on building pipeline through owned email infrastructure.
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Blog;

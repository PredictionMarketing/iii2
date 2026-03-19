import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Play } from "lucide-react";

const Videos = () => (
  <div className="min-h-screen">
    <SiteHeader />
    <main className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="section-container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground">Videos</h1>
        <p className="mt-4 text-lg text-hero-muted max-w-2xl">
          Insights on email infrastructure, pipeline generation, and acquisition systems.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-border/20 bg-hero/50 overflow-hidden group"
            >
              <div className="aspect-video bg-hero flex items-center justify-center">
                <Play className="h-12 w-12 text-hero-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="p-6">
                <p className="text-sm text-hero-muted">Coming soon</p>
                <h3 className="font-display text-lg font-semibold text-hero-foreground mt-1">
                  Video content loading...
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Videos;

import { Link } from "react-router-dom";

const CALENDAR_URL = "https://calendly.com/tliantonio";

const SiteFooter = () => (
  <footer className="hero-section border-t border-border/20">
    <div className="section-container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <span className="font-display text-xl font-bold text-hero-foreground tracking-tight">
            III<span className="text-accent">infrastructure</span>
          </span>
          <p className="mt-4 text-sm text-hero-muted leading-relaxed max-w-xs">
            Email infrastructure that produces pipeline — not just sends.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-hero-foreground uppercase tracking-wider mb-4">Pages</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Home</Link>
            <Link to="/videos" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Videos</Link>
            <Link to="/blog" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Blog</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-hero-foreground uppercase tracking-wider mb-4">Get Started</h4>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            Book a Call →
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/20">
        <p className="text-xs text-hero-muted">© {new Date().getFullYear()} IIInfrastructure. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;

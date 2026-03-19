import { motion } from "framer-motion";

const CALENDAR_URL = "https://calendly.com/tliantonio";

const CTASection = () => (
  <section className="hero-section section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground">The Real Decision</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 text-left">
          <div className="rounded-xl border border-border/20 p-6">
            <p className="text-hero-muted text-sm mb-3">You can keep running email like most companies:</p>
            <ul className="space-y-2">
              {["shared infrastructure", "static lists", "rising costs", "no compounding"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-hero-muted text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <p className="text-hero-foreground text-sm mb-3 font-medium">
              Or you can run email as part of a system that:
            </p>
            <ul className="space-y-2">
              {["learns", "improves", "compounds"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-hero-foreground text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-hero-foreground">
            See If This Fits Your Growth Model
          </h3>
          <p className="mt-4 text-hero-muted">We'll walk through:</p>
          <ul className="mt-4 space-y-2 inline-block text-left">
            {[
              "your current email system",
              "where it's breaking",
              "your cost structure",
              "and whether this model makes sense",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-hero-foreground text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent px-10 py-4 text-lg font-bold text-accent-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              Book a Call →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

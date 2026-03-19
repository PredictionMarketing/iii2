import { motion } from "framer-motion";

const CALENDAR_URL = "https://calendly.com/tliantonio";

const HeroSection = () => (
  <section className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-hero-foreground">
          Email Marketing That Produces{" "}
          <span className="gradient-text">Pipeline</span> — Not Just Sends
        </h1>

        <p className="mt-6 text-lg md:text-xl text-hero-muted leading-relaxed max-w-2xl">
          Most email marketing fails because it's built on shared infrastructure, weak targeting, and systems that never learn.
        </p>
        <p className="mt-4 text-lg md:text-xl text-hero-foreground font-medium">
          IIInfrastructure uses email differently.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-10"
      >
        <p className="text-hero-muted mb-4">
          Email is the execution layer of a controlled acquisition system designed to:
        </p>
        <ul className="space-y-2 text-hero-foreground">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
            create qualified sales conversations
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
            improve performance over time
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
            and operate at a fundamentally better cost structure
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10"
      >
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
        >
          Book a Call →
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

import { motion } from "framer-motion";
import { Shield, Brain, BarChart3, DollarSign } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Single-Tenant Email Infrastructure",
    intro: "Your system runs on dedicated infrastructure.",
    bullets: [
      "no shared IPs",
      "no shared domains",
      "no contamination from other senders",
    ],
    result: [
      "control over reputation",
      "stable deliverability",
      "consistent sending conditions",
    ],
    closing: "You're no longer renting performance.\nYou're operating your own environment.",
  },
  {
    icon: Brain,
    title: "Identity Graph + Behavioral Targeting",
    intro: "This is not list-based outbound.\nThe system operates on a continuously expanding identity graph:",
    bullets: ["people", "companies", "roles", "behavioral signals", "intent signals"],
    result: [
      "who to contact",
      "when to contact them",
      "and why they are likely to respond",
    ],
    closing: "This is what fixes timing, targeting, and relevance.",
    resultIntro: "We don't just decide who fits your ICP.\nWe determine:",
  },
  {
    icon: BarChart3,
    title: "Email as a Learning System",
    intro: "Every send is part of a structured system.\nIt does three things:",
    bullets: [
      "Attempts a conversation",
      "Generates behavioral signal",
      "Improves future performance",
    ],
    closing: "Most email programs stop at step one.\nThis system compounds.",
  },
  {
    icon: DollarSign,
    title: "Economics That Let You Win",
    intro: "Most acquisition systems fail before they work.\nNot because they're wrong — because they become too expensive to continue.",
    bullets: [
      "paid media gets more expensive",
      "outbound teams don't scale efficiently",
      "tools and platforms stack costs",
      "testing gets cut short",
    ],
    closing: "So learning never happens.",
    result: [
      "controlled infrastructure lowers cost",
      "aligned incentives reduce waste",
      "continuous testing is economically viable",
    ],
    resultIntro: "III is built differently.",
    finalBullets: [
      "test more ICP segments",
      "test more messaging angles",
      "make more attempts",
      "and keep the system running",
    ],
    finalClosing:
      "Long enough to actually find what works.\n\nThis is the advantage:\nMost companies stop before they learn.\nThis system is built to keep going until it does.",
  },
];

const SolutionSection = () => (
  <section className="hero-section section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground">This Is What Changes</h2>
        <p className="mt-4 text-lg text-hero-muted">
          Email is still the channel.<br />
          But everything behind it is different.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-border/20 bg-hero/50 p-8"
          >
            <pillar.icon className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-display text-xl font-semibold text-hero-foreground mb-4">
              {pillar.title}
            </h3>
            <p className="text-hero-muted text-sm whitespace-pre-line mb-4">{pillar.intro}</p>
            <ul className="space-y-1.5 mb-4">
              {pillar.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-hero-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            {pillar.resultIntro && (
              <p className="text-hero-muted text-sm whitespace-pre-line mb-3">{pillar.resultIntro}</p>
            )}
            {pillar.result && (
              <ul className="space-y-1.5 mb-4">
                {pillar.result.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-hero-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            )}
            <p className="text-hero-muted text-sm whitespace-pre-line">{pillar.closing}</p>
            {pillar.finalBullets && (
              <>
                <p className="text-hero-muted text-sm mt-3 mb-2">This allows you to:</p>
                <ul className="space-y-1.5 mb-3">
                  {pillar.finalBullets.map((fb) => (
                    <li key={fb} className="flex items-start gap-2 text-sm text-hero-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {fb}
                    </li>
                  ))}
                </ul>
                <p className="text-hero-muted text-sm whitespace-pre-line">{pillar.finalClosing}</p>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;

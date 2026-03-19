import { motion } from "framer-motion";

const CALENDAR_URL = "https://calendly.com/tliantonio";

const WhatYouGetSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What You Actually Get</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          You are not buying email campaigns.
        </p>
        <p className="mt-2 text-lg text-foreground font-medium">
          You are getting a system that:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "identifies the right companies and decision-makers",
            "determines when they are most likely to engage",
            "tests what messaging creates movement",
            "turns responses into booked calls",
            "and improves continuously",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-16 grid md:grid-cols-2 gap-12"
      >
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">What This Produces</h3>
          <ul className="space-y-2">
            {[
              "qualified sales conversations",
              "consistent pipeline generation",
              "improving conversion rates",
              "better acquisition economics over time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-muted-foreground mb-4">Not:</h3>
          <ul className="space-y-2">
            {[
              "vanity metrics",
              "unqualified leads",
              "disconnected activity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-destructive/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Who This Is For */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 grid md:grid-cols-2 gap-12"
      >
        <div className="surface-card rounded-xl p-8">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Who This Is For</h3>
          <p className="text-muted-foreground mb-4">This works if:</p>
          <ul className="space-y-2">
            {[
              "your customers are valuable",
              "your sales process matters",
              "pipeline quality matters more than volume",
              "you want a system that improves",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-card rounded-xl p-8 border-destructive/30">
          <h3 className="font-display text-xl font-semibold text-muted-foreground mb-4">This is not for:</h3>
          <ul className="space-y-2">
            {[
              "low-ticket, high-volume models",
              "companies looking for instant scale without testing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhatYouGetSection;

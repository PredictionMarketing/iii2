import { motion } from "framer-motion";

const ProblemSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-muted-foreground mb-6">
          If you're investing in email, this is what you're actually dealing with today:
        </p>
        <ul className="space-y-3 text-foreground">
          {[
            "sending on shared IPs and domains you don't control",
            "list-based targeting that damages reputation when it's wrong",
            "poor timing with no behavioral signal",
            "static messaging that doesn't adapt",
            "no real learning loop",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-destructive shrink-0" />
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
        className="mt-12"
      >
        <p className="text-lg text-muted-foreground mb-4">And underneath all of it:</p>
        <p className="text-xl font-display font-semibold text-foreground">You're paying renter economics.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          {[
            "paying for tools",
            "paying for data",
            "paying for sending platforms",
            "paying for infrastructure you don't own",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 text-foreground">
          <p className="font-medium">Which means:</p>
          <p className="mt-2 text-muted-foreground">higher costs</p>
          <p className="text-muted-foreground">less control</p>
          <p className="text-muted-foreground">and no compounding advantage</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;

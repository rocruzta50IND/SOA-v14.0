"use client";

import { motion, Transition } from "framer-motion";

const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

const partners = [
  "Clifford Chance",
  "Skadden",
  "Latham & Watkins",
  "Sullivan & Cromwell",
  "White & Case"
];

export function SocialProof() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by the Vanguard
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="font-serif text-xl md:text-2xl font-semibold opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

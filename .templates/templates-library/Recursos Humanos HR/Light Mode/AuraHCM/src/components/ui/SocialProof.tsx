"use client";

import { motion } from "framer-motion";

const brands = [
  "GlobalCorp", "Nexus HR", "Vanguard", "Elite Partners", "Stellar Systems", "Aetheris"
];

export function SocialProof() {
  return (
    <section className="py-20 border-y border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            Trusted by Industry Leaders
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-40 grayscale">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="text-xl font-serif tracking-widest"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

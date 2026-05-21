"use client";

import { motion } from "framer-motion";

const brands = ["AETHERIS", "TECHFLOW", "NEOVALT", "NEXUS", "VELOCE", "STRATO"];

export default function SocialProof() {
  return (
    <section className="py-20 border-y border-border/30 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-center text-muted-foreground mb-12">
          Trusted by the world's most demanding infrastructures
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="font-serif text-2xl md:text-3xl tracking-tighter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

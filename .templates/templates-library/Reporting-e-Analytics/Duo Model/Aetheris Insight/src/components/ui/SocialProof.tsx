"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  "Aurelius Global", "Nexus Capital", "TechFlow Systems", "Lumina Strategic", "Vector Horizon"
];

export function SocialProof() {
  return (
    <section className="py-24 border-y border-border/50 bg-muted/30">
      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-[200px]">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground leading-tight block">
              Trusted by the world's most demanding portfolios.
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-16 gap-y-8">
            {PARTNERS.map((partner, index) => (
              <motion.span
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="font-serif text-2xl md:text-3xl tracking-tighter grayscale italic hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

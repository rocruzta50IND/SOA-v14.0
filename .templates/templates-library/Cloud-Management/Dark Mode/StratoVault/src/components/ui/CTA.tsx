"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-secondary/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-6xl md:text-9xl tracking-tighter leading-none mb-12">
            Ready to <br />
            <span className="text-primary italic">Transcendent.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-16">
            Join the elite 1% of enterprises operating at sovereign scale. 
            The future of cloud is not managed; it is orchestrated.
          </p>
          
          <Link href="/register">
            <button className="bg-foreground text-background hover:opacity-90 rounded-full px-16 py-6 text-sm font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-2xl shadow-primary/20">
              Inaugurate Your Vault
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

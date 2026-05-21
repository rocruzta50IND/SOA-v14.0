"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto bg-foreground text-background rounded-[40px] p-12 md:p-32 text-center relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary block mb-8">
            The Final Step
          </span>
          <h2 className="font-serif text-6xl md:text-8xl tracking-tighter leading-none mb-12">
            Ready to <span className="italic">Elevate</span> <br /> your workforce?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book a Strategy Call
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

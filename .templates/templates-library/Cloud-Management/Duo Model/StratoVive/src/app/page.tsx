"use client";

import { Navbar, Footer } from "@/components/ui/Layout";
import { Hero } from "@/components/ui/Hero";
import { Features } from "@/components/ui/Features";
import { Pricing } from "@/components/ui/Pricing";
import { FAQ } from "@/components/ui/FAQ";
import { motion } from "framer-motion";
import { Cloud, Server, Shield, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <Hero />
      
      {/* Social Proof / Logos */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by infrastructure teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
             <span className="text-xl font-bold tracking-tighter italic">GlobalCorp</span>
             <span className="text-xl font-bold tracking-tighter italic">TechFlow</span>
             <span className="text-xl font-bold tracking-tighter italic">Nexus</span>
             <span className="text-xl font-bold tracking-tighter italic">StellarData</span>
             <span className="text-xl font-bold tracking-tighter italic">Vortex Systems</span>
          </div>
        </div>
      </section>

      <Features />

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-6">Ready to upgrade your infrastructure?</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Join 2,000+ companies that have scaled their cloud operations with StratoVive. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/register"
                className="w-full sm:w-auto h-12 px-8 flex items-center justify-center rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Get Started Now
              </Link>
              <Link 
                href="/login"
                className="w-full sm:w-auto h-12 px-8 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Pricing />
      <FAQ />
      
      <Footer />
    </main>
  );
}

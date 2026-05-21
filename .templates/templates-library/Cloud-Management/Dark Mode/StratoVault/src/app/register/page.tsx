"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Visual / Editorial */}
      <section className="hidden lg:flex relative bg-foreground text-background flex-col justify-between p-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-primary)_0%,transparent_50%)] opacity-20" />
        
        <Link href="/" className="relative z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Terminal
        </Link>

        <div className="relative z-10">
          <Zap className="w-12 h-12 text-primary mb-12" />
          <h1 className="font-serif text-6xl xl:text-8xl tracking-tighter leading-none mb-8">
            Deploy Your <br />
            <span className="text-primary italic">First Node.</span>
          </h1>
          <p className="max-w-md text-xl opacity-60 font-serif leading-relaxed">
            Begin your journey towards absolute cloud sovereignty. 
            Automated provisioning starts here.
          </p>
        </div>

        <div className="relative z-10 pt-12 border-t border-background/10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            Enterprise Tier Onboarding
          </p>
        </div>
      </section>

      {/* Right Side: Sophisticated Form */}
      <section className="flex flex-col justify-center items-center p-8 lg:p-24 bg-background">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md space-y-12"
        >
          <div className="space-y-4">
            <h2 className="font-serif text-4xl tracking-tighter">Request Access</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
              Join the elite infrastructure network
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Alexander Sterling" 
                  className="w-full bg-transparent border-none outline-none text-sm p-0 placeholder:text-muted-foreground/30"
                />
              </div>
              <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Corporate Email</label>
                <input 
                  type="email" 
                  placeholder="asterling@globalcorp.io" 
                  className="w-full bg-transparent border-none outline-none text-sm p-0 placeholder:text-muted-foreground/30"
                />
              </div>
              <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Desired Domain</label>
                <input 
                  type="text" 
                  placeholder="vault.globalcorp.io" 
                  className="w-full bg-transparent border-none outline-none text-sm p-0 placeholder:text-muted-foreground/30"
                />
              </div>
            </div>

            <Link href="/dashboard" className="block w-full">
              <button className="w-full bg-foreground text-background hover:opacity-90 rounded-full py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-3">
                Provision Account
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </form>

          <div className="pt-8 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground tracking-wide">
              Already a node? <Link href="/login" className="text-primary font-bold hover:underline">Authenticate</Link>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

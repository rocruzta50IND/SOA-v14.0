"use client";

import { motion } from "framer-motion";
import { Zap, ChevronLeft, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background selection:bg-primary/30">
      {/* Left: Branding & Features */}
      <div className="hidden lg:flex relative flex-col justify-between p-12 overflow-hidden border-r border-white/5 bg-white/[0.01]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_var(--color-primary)_0%,_transparent_50%)] opacity-10" />
        
        <Link href="/" className="relative z-10 flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap size={20} className="text-white fill-current" />
          </div>
          StratoVive
        </Link>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl font-bold tracking-tighter max-w-md">Start building on the edge in seconds.</h2>
          <div className="space-y-6">
            {[
              "14-day free trial on any plan",
              "No credit card required to start",
              "Access to all premium features",
              "Unlimited global requests"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-muted-foreground font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs text-muted-foreground">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* Right: Auth Form */}
      <div className="flex items-center justify-center p-8 lg:p-12 relative">
        <Link 
          href="/" 
          className="absolute top-8 left-8 lg:left-12 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
        >
          <ChevronLeft size={16} /> Back
        </Link>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="w-full max-w-md space-y-8"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tighter mb-2">Create an account</h1>
            <p className="text-muted-foreground">Join 2,000+ teams scaling with StratoVive.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full h-11 flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Sign up with GitHub
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground font-semibold">Or use your email</span></div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="John"
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Work Email</label>
              <input 
                type="email" 
                placeholder="john@company.com"
                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Password</label>
              <input 
                type="password" 
                placeholder="Create a strong password"
                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            
            <div className="pt-2">
                <p className="text-[11px] text-muted-foreground leading-relaxed mb-6">
                    By clicking "Create Account", you agree to our <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
                <Link 
                  href="/dashboard"
                  className="flex items-center justify-center w-full h-11 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Create Account
                </Link>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

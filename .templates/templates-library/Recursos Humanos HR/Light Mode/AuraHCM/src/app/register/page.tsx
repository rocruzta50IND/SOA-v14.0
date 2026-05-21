"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex bg-background overflow-hidden">
      {/* Form Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-20 relative order-2 lg:order-1">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary block mb-4">
                Partnership
              </span>
              <h1 className="font-serif text-4xl md:text-5xl tracking-tighter mb-4">Join AuraHCM</h1>
              <p className="text-muted-foreground">
                Apply for an executive account and start your journey.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-muted/50 border border-border/50 rounded-none px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-muted/50 border border-border/50 rounded-none px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  Corporate Email
                </label>
                <input
                  type="email"
                  placeholder="jane.doe@globalcorp.com"
                  className="w-full bg-muted/50 border border-border/50 rounded-none px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="GlobalCorp Industries"
                  className="w-full bg-muted/50 border border-border/50 rounded-none px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="pt-4">
                <Link href="/dashboard">
                  <Button className="w-full" size="lg">
                    Request Invitation
                  </Button>
                </Link>
              </div>
            </form>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="font-bold text-foreground hover:text-primary transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Branding for mobile */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-full" />
          <span className="font-serif text-xl tracking-tighter">AuraHCM</span>
        </div>
      </div>

      {/* Visual Side */}
      <div className="hidden lg:flex flex-1 relative bg-foreground p-20 flex-col justify-between overflow-hidden order-1 lg:order-2">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full translate-y-1/2 translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-right"
        >
          <div className="flex items-center gap-2 mb-20 justify-end">
            <span className="font-serif text-3xl text-background tracking-tighter">AuraHCM</span>
            <div className="w-8 h-8 bg-primary rounded-full" />
          </div>
          
          <h2 className="font-serif text-7xl text-background tracking-tighter leading-none mb-8">
            The New <br /> Standard of <span className="italic text-primary">Trust.</span>
          </h2>
          <p className="max-w-md ml-auto text-muted-foreground/80 leading-relaxed">
            Join the most exclusive network of HR leaders and transform how your company scales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="relative z-10 text-right"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-background/60">
            ELITE NETWORK // ENTERPRISE READY
          </div>
        </motion.div>
      </div>
    </main>
  );
}

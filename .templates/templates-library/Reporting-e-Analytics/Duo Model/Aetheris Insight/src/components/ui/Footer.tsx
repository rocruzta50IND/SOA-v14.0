"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <Link href="/" className="group flex items-center gap-2 mb-8">
            <div className="size-6 bg-foreground rounded-none flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
              <div className="size-3 bg-background" />
            </div>
            <span className="font-serif text-lg tracking-tighter font-bold uppercase">Aetheris Insight</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Architecting clarity for the world's most sophisticated enterprise portfolios. 
            Boutique analytics, predictive intelligence, absolute certainty.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Solutions</h4>
          <ul className="space-y-4">
            {["Predictive Synthesis", "Global Mesh", "Liquidity Mapping", "High-Ticket Auditing"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors font-bold">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Corporate</h4>
          <ul className="space-y-4">
            {["Privacy Policy", "Data Sovereignty", "Partnership Program", "Legal"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors font-bold">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mb-4 md:mb-0">
          © 2026 Aetheris Insight AG. All Rights Reserved.
        </span>
        <div className="flex gap-8">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/30">Zurich</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/30">Singapore</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/30">New York</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-24 border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold tracking-tighter mb-8 block">
              LéxisLux
            </Link>
            <p className="text-muted-foreground max-w-sm font-sans leading-relaxed">
              The vanguard of legal intelligence. Crafting the future of elite legal operations with uncompromising precision.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-8">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-sans">
              <li><Link href="/cases" className="hover:text-primary transition-colors">Cases</Link></li>
              <li><Link href="/analytics" className="hover:text-primary transition-colors">Intelligence</Link></li>
              <li><Link href="/security" className="hover:text-primary transition-colors">Sovereignty</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-8">Firm</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-sans">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/legal" className="hover:text-primary transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:row items-center justify-between border-t border-border/50 pt-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 md:mb-0">
            © 2026 LexisLux Intelligence Systems. All rights reserved.
          </span>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground cursor-pointer hover:text-primary transition-colors">Twitter</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground cursor-pointer hover:text-primary transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

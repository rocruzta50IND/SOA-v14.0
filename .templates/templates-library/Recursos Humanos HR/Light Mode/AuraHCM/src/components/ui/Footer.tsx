"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="font-serif text-2xl tracking-tighter">AuraHCM</span>
            </div>
            <p className="max-w-xs text-muted-foreground leading-relaxed mb-8">
              Boutique Human Capital Management for the modern global enterprise. 
              Precision-engineered for the future of work.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Talent Cloud</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Performance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-border/30">
          <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
            © 2026 AURAHCM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

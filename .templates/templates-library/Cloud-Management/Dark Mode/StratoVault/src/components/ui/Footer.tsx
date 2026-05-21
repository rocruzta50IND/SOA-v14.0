import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-border/30 bg-background px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="font-serif text-2xl tracking-tighter">StratoVault.</div>
          <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-widest">
            The Sovereign Layer <br />
            of Enterprise Cloud.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6">Platform</h4>
          <ul className="space-y-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
            <li><Link href="#" className="hover:text-primary transition-colors">Infrastructure</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Governance</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6">Company</h4>
          <ul className="space-y-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
            <li><Link href="#" className="hover:text-primary transition-colors">Intelligence</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Partners</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Manifesto</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Protocol</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-6">Legal</h4>
          <ul className="space-y-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">SLA</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          © 2026 StratoVault Infrastructure Corp. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}

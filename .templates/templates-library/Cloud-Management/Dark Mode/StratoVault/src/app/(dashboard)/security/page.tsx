"use client";

import { motion } from "framer-motion";
import { SECURITY_LOGS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { 
  ShieldAlert, 
  Lock, 
  Eye, 
  UserX, 
  FileText, 
  Filter,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function SecurityPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <motion.div variants={fadeIn} className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">Protection</span>
          <h1 className="text-5xl font-serif tracking-tighter font-bold">Security <span className="text-muted-foreground/40">Nexus</span></h1>
        </div>
        <div className="flex gap-4">
           <button className="border border-border/40 hover:border-primary/40 rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all">
            Scan All Nodes
          </button>
          <button className="bg-foreground text-background rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
            New Firewall Rule
          </button>
        </div>
      </motion.div>

      {/* Security Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Threat Level", val: "LOW", sub: "Global Status", color: "text-emerald-500", icon: CheckCircle2 },
          { label: "Blocked Requests", val: "12,402", sub: "Last 1h", color: "text-primary", icon: ShieldAlert },
          { label: "Active Rules", val: "84", sub: "Custom policies", color: "text-foreground", icon: Lock },
          { label: "Compliance", val: "98%", sub: "SOC2 / HIPAA", color: "text-foreground", icon: FileText },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeIn} className="p-8 border border-border/40 bg-secondary/10 flex flex-col items-center text-center">
             <item.icon className={cn("w-6 h-6 mb-4", item.color)} />
             <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-muted-foreground mb-2">{item.label}</span>
             <span className={cn("text-2xl font-serif font-bold", item.color)}>{item.val}</span>
             <span className="text-[9px] text-muted-foreground uppercase tracking-widest mt-2">{item.sub}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Threats / Audit Log */}
        <motion.div variants={fadeIn} className="lg:col-span-2 p-10 border border-border/40 bg-secondary/5">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-serif text-2xl tracking-tight">Audit <span className="text-muted-foreground/30">Intelligence</span></h3>
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors">
               <Filter className="w-3 h-3" /> Filter Logs
            </button>
          </div>
          <div className="space-y-6">
            {SECURITY_LOGS.map((log) => (
              <div key={log.id} className="flex gap-6 py-6 border-b border-border/20 last:border-0 group">
                 <div className="flex flex-col items-center gap-2">
                    <div className={cn(
                      "w-2 h-2 rounded-none rotate-45",
                      log.severity === 'critical' ? "bg-rose-500" : log.severity === 'high' ? "bg-orange-500" : "bg-sky-500"
                    )} />
                    <div className="w-[1px] flex-1 bg-border/40" />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">{log.timestamp}</p>
                          <h4 className="text-sm font-bold tracking-tight">{log.event}</h4>
                       </div>
                       <span className={cn(
                          "text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 border border-border/40",
                          log.status === 'blocked' ? "text-rose-500 border-rose-500/20 bg-rose-500/5" : "text-amber-500 border-amber-500/20 bg-amber-500/5"
                       )}>
                          {log.status}
                       </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                       <div className="p-3 bg-background border border-border/20">
                          <span className="text-[8px] uppercase tracking-widest text-muted-foreground block mb-1">Source IP</span>
                          <span className="text-[10px] font-mono font-bold tracking-tighter">{log.source}</span>
                       </div>
                       <div className="p-3 bg-background border border-border/20">
                          <span className="text-[8px] uppercase tracking-widest text-muted-foreground block mb-1">Severity Score</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest">{log.severity}</span>
                       </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground hover:text-primary transition-colors py-4 border border-dashed border-border/40">
            Export Compliance Report
          </button>
        </motion.div>

        {/* Security Controls */}
        <div className="space-y-8">
           <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5">
              <h3 className="font-serif text-xl tracking-tight mb-8">Firewall <span className="text-muted-foreground/30">Matrix</span></h3>
              <div className="space-y-4">
                 {[
                   { name: "Global Deny-All", active: true },
                   { name: "SSH Rate Limiting", active: true },
                   { name: "SQLi Protection", active: true },
                   { name: "DDoS Deflector", active: false },
                 ].map((rule, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border/20 last:border-0">
                       <span className="text-[10px] uppercase tracking-widest font-bold">{rule.name}</span>
                       <div className={cn(
                          "w-8 h-4 border border-border/40 relative cursor-pointer transition-colors",
                          rule.active ? "bg-primary" : "bg-secondary"
                       )}>
                          <div className={cn(
                            "absolute top-0 w-3.5 h-full bg-background transition-all",
                            rule.active ? "right-0" : "left-0"
                          )} />
                       </div>
                    </div>
                 ))}
              </div>
           </motion.div>

           <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-primary/5 relative overflow-hidden group">
              <ShieldAlert className="absolute -right-4 -bottom-4 w-24 h-24 text-primary/10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                 <AlertTriangle className="w-5 h-5 text-primary mb-4" />
                 <h3 className="font-serif text-xl tracking-tight mb-4">Anomaly <span className="text-primary/50">Detection</span></h3>
                 <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">
                    AI-powered behavioral analysis is active. Currently monitoring 14,209 distinct node patterns.
                 </p>
                 <button className="mt-6 text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                    View Insights →
                 </button>
              </div>
           </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

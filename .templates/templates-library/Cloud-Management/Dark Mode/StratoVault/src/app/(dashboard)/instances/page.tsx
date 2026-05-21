"use client";

import { motion } from "framer-motion";
import { MOCK_INSTANCES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { 
  MoreHorizontal, 
  Terminal, 
  RefreshCw, 
  Power, 
  Cpu, 
  HardDrive 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function InstancesPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <motion.div variants={fadeIn} className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">Infrastructure</span>
          <h1 className="text-5xl font-serif tracking-tighter font-bold">Cloud <span className="text-muted-foreground/40">Instances</span></h1>
        </div>
        <div className="flex gap-4">
          <button className="border border-border/40 hover:border-primary/40 rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all">
            Import Config
          </button>
          <button className="bg-foreground text-background rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
            New Instance
          </button>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="border border-border/40 bg-secondary/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/40 bg-secondary/10">
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Instance Details</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Status</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Region & Type</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Performance</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_INSTANCES.map((instance) => (
              <tr key={instance.id} className="border-b border-border/20 last:border-0 hover:bg-secondary/10 transition-colors group">
                <td className="px-8 py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/30 flex items-center justify-center border border-border/40 group-hover:border-primary/40 transition-colors">
                      <Terminal className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-tight">{instance.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{instance.id} • {instance.ipAddress}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-8">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      instance.status === 'running' ? "bg-emerald-500 animate-pulse" : 
                      instance.status === 'restarting' ? "bg-amber-500" : "bg-muted-foreground"
                    )} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{instance.status}</span>
                  </div>
                </td>
                <td className="px-8 py-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest">{instance.region}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{instance.type}</p>
                </td>
                <td className="px-8 py-8">
                  <div className="space-y-3 w-48">
                    <div className="flex justify-between text-[8px] uppercase tracking-widest font-bold">
                      <span className="text-muted-foreground flex items-center gap-1"><Cpu className="w-2.5 h-2.5" /> CPU</span>
                      <span>{instance.cpuUsage}%</span>
                    </div>
                    <div className="h-1 bg-secondary/40 w-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${instance.cpuUsage}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={cn(
                          "h-full",
                          instance.cpuUsage > 80 ? "bg-rose-500" : "bg-primary"
                        )} 
                      />
                    </div>
                    <div className="flex justify-between text-[8px] uppercase tracking-widest font-bold">
                      <span className="text-muted-foreground flex items-center gap-1"><HardDrive className="w-2.5 h-2.5" /> RAM</span>
                      <span>{instance.memoryUsage}%</span>
                    </div>
                    <div className="h-1 bg-secondary/40 w-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${instance.memoryUsage}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-primary/40" 
                      />
                    </div>
                  </div>
                </td>
                <td className="px-8 py-8 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 border border-border/40 hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors">
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-2 border border-border/40 hover:border-rose-500/40 text-muted-foreground hover:text-rose-500 transition-colors">
                      <Power className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-2 border border-border/40 hover:border-foreground/40 text-muted-foreground hover:text-foreground transition-colors">
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-8 border-t border-border/40 bg-secondary/5 flex justify-between items-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Showing 5 of 124 instances across 4 regions</p>
          <div className="flex gap-2">
             <button className="px-4 py-2 border border-border/40 text-[10px] uppercase tracking-widest font-bold disabled:opacity-30" disabled>Prev</button>
             <button className="px-4 py-2 border border-border/40 text-[10px] uppercase tracking-widest font-bold hover:border-primary/40">Next</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

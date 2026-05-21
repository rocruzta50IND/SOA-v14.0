"use client";

import { motion } from "framer-motion";
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  LineChart, 
  Line 
} from "recharts";
import { NETWORK_HISTORY } from "@/lib/mock-data";
import { Activity, Globe, Wifi, ArrowUp, ArrowDown } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function NetworkingPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <motion.div variants={fadeIn} className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">Connectivity</span>
          <h1 className="text-5xl font-serif tracking-tighter font-bold">Network <span className="text-muted-foreground/40">Fabric</span></h1>
        </div>
        <div className="flex gap-4">
          <button className="bg-foreground text-background rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
            Configure VPC
          </button>
        </div>
      </motion.div>

      {/* Connectivity Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5 col-span-2">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-serif text-2xl tracking-tight">Throughput <span className="text-muted-foreground/30">Analytics</span></h3>
            <div className="flex gap-8">
               <div className="text-right">
                  <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground block">Peak Ingress</span>
                  <span className="text-xl font-serif font-bold">1.2 TB/s</span>
               </div>
               <div className="text-right">
                  <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground block">Peak Egress</span>
                  <span className="text-xl font-serif font-bold">0.8 TB/s</span>
               </div>
            </div>
          </div>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={NETWORK_HISTORY}>
                   <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(20 10% 10%)', border: '1px solid hsl(20 10% 20%)', borderRadius: '0px' }}
                   />
                   <Area type="monotone" dataKey="ingress" stroke="hsl(43 74% 49%)" fill="hsl(43 74% 49%)" fillOpacity={0.1} strokeWidth={2} />
                   <Area type="monotone" dataKey="egress" stroke="hsl(43 74% 49%)" fill="transparent" strokeDasharray="4 4" strokeWidth={1} />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5 flex flex-col justify-between">
           <div>
              <h3 className="font-serif text-2xl tracking-tight mb-2">Latency</h3>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Global Avg: 24ms</span>
           </div>
           <div className="h-[150px] mt-8">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={NETWORK_HISTORY}>
                    <Line type="stepAfter" dataKey="latency" stroke="hsl(43 74% 49%)" dot={false} strokeWidth={2} />
                 </LineChart>
              </ResponsiveContainer>
           </div>
           <div className="mt-10 space-y-4">
              {[
                { region: "US-East", lat: "12ms", status: "optimal" },
                { region: "EU-West", lat: "28ms", status: "optimal" },
                { region: "AP-South", lat: "84ms", status: "degraded" },
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-border/20 last:border-0">
                   <span className="text-[10px] uppercase tracking-widest font-bold">{r.region}</span>
                   <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold">{r.lat}</span>
                      <div className={`w-1 h-3 ${r.status === 'optimal' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                   </div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>

      {/* Global Distribution */}
      <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5 relative overflow-hidden">
         <Globe className="absolute -right-20 -bottom-20 w-96 h-96 text-primary/5 rotate-12" />
         <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-sm">
               <h3 className="font-serif text-2xl tracking-tight mb-4">Edge <span className="text-muted-foreground/30">Network</span></h3>
               <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider">
                  Deploying resources at the edge reduces global latency by 45%. StratoVault manages 120+ POPs across 40 countries.
               </p>
               <button className="mt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-primary hover:underline">
                  View Global Map →
               </button>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: "Transit In", val: "4.2 PB", icon: ArrowDown },
                 { label: "Transit Out", val: "3.8 PB", icon: ArrowUp },
                 { label: "Active Connections", val: "842k", icon: Wifi },
                 { label: "Network Uptime", val: "99.999%", icon: Activity },
               ].map((item, i) => (
                 <div key={i} className="p-6 border border-border/20 bg-background/40">
                    <item.icon className="w-4 h-4 text-primary mb-4" />
                    <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground block mb-2">{item.label}</span>
                    <span className="text-lg font-serif font-bold">{item.val}</span>
                 </div>
               ))}
            </div>
         </div>
      </motion.div>
    </motion.div>
  );
}

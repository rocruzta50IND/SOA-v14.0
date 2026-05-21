"use client";

import { motion } from "framer-motion";
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar, 
  Cell, 
  PieChart, 
  Pie 
} from "recharts";
import { 
  NETWORK_HISTORY, 
  COST_DATA, 
  RESOURCE_DISTRIBUTION, 
  MOCK_INSTANCES, 
  SECURITY_LOGS 
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  Shield, 
  Zap, 
  Database 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function DashboardPage() {
  const activeInstances = MOCK_INSTANCES.filter(i => i.status === 'running').length;
  const criticalThreats = SECURITY_LOGS.filter(s => s.severity === 'critical').length;

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-12"
    >
      {/* Header Section */}
      <motion.div variants={fadeIn} className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">System Overview</span>
          <h1 className="text-5xl font-serif tracking-tighter font-bold">Infrastructure <span className="text-muted-foreground/40">Vault</span></h1>
        </div>
        <div className="flex gap-4">
          <button className="bg-foreground text-background rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
            Deploy New Instance
          </button>
        </div>
      </motion.div>

      {/* Top Metrics Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Nodes", value: activeInstances, sub: "/ 05 total", icon: Zap, trend: "+2" },
          { label: "Network Load", value: "1.2 Gbps", sub: "Peak performance", icon: Activity, trend: "-12%" },
          { label: "Active Threats", value: criticalThreats, sub: "Last 24 hours", icon: Shield, trend: "0" },
          { label: "Storage Used", value: "64.2 TB", sub: "82% Capacity", icon: Database, trend: "+4.1 TB" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            variants={fadeIn}
            className="p-8 border border-border/40 bg-secondary/10 relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <stat.icon className="absolute -right-4 -top-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{stat.label}</span>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-3xl font-serif font-bold">{stat.value}</span>
                <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">{stat.sub}</span>
              </div>
              <div className={cn(
                "mt-4 text-[10px] font-bold flex items-center gap-1",
                stat.trend.startsWith('+') ? "text-emerald-500" : stat.trend.startsWith('-') ? "text-rose-500" : "text-muted-foreground"
              )}>
                {stat.trend.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : stat.trend.startsWith('-') ? <ArrowDownRight className="w-3 h-3" /> : null}
                {stat.trend}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Network Traffic - Minimalist Rechart */}
        <motion.div variants={fadeIn} className="lg:col-span-2 p-10 border border-border/40 bg-secondary/5">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-serif text-2xl tracking-tight">Global Ingress <span className="text-muted-foreground/30">&</span> Egress</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Ingress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary/30" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Egress</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={NETWORK_HISTORY}>
                <defs>
                  <linearGradient id="colorIngress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(43 74% 49%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(43 74% 49%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(20 10% 10%)', border: '1px solid hsl(20 10% 20%)', borderRadius: '0px' }}
                  itemStyle={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="ingress" 
                  stroke="hsl(43 74% 49%)" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorIngress)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="egress" 
                  stroke="hsl(43 74% 49%)" 
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  fillOpacity={0} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Resource Allocation - Pie Chart */}
        <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5">
          <h3 className="font-serif text-2xl tracking-tight mb-10">Resource <span className="text-muted-foreground/30">Ratio</span></h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={RESOURCE_DISTRIBUTION}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {RESOURCE_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: 'hsl(20 10% 10%)', border: '1px solid hsl(20 10% 20%)', borderRadius: '0px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-serif font-bold">100%</span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Utilized</span>
            </div>
          </div>
          <div className="mt-8 space-y-2">
            {RESOURCE_DISTRIBUTION.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Grid: Costs & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5">
          <h3 className="font-serif text-2xl tracking-tight mb-8">Financial <span className="text-muted-foreground/30">Trajectory</span></h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COST_DATA}>
                <Bar dataKey="total" fill="hsl(43 74% 49%)" radius={[0, 0, 0, 0]}>
                  {COST_DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === COST_DATA.length - 1 ? "hsl(43 74% 49%)" : "hsl(43 74% 20%)"} 
                    />
                  ))}
                </Bar>
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: 'hsl(20 10% 10%)', border: '1px solid hsl(20 10% 20%)', borderRadius: '0px' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between items-end mt-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Projected May</p>
              <p className="text-3xl font-serif font-bold">$27.5k</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">+16.5% vs Last Mo.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5">
          <h3 className="font-serif text-2xl tracking-tight mb-8">Security <span className="text-muted-foreground/30">Audit</span></h3>
          <div className="space-y-4">
            {SECURITY_LOGS.map((log) => (
              <div key={log.id} className="flex items-center justify-between py-3 border-b border-border/20 last:border-0 group cursor-pointer hover:bg-secondary/20 px-2 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-1 h-8",
                    log.severity === 'critical' ? "bg-rose-500" : log.severity === 'high' ? "bg-orange-500" : "bg-sky-500"
                  )} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold">{log.event}</p>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-1">{log.timestamp} • {log.source}</p>
                  </div>
                </div>
                <div className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 border border-border/40 bg-background group-hover:border-primary transition-colors">
                  {log.status}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground hover:text-primary transition-colors py-4">
            View All Audit Logs →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

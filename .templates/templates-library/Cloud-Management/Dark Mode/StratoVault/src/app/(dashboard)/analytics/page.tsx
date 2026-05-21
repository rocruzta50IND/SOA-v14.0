"use client";

import { motion } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from "recharts";
import { COST_DATA, RESOURCE_DISTRIBUTION } from "@/lib/mock-data";
import { TrendingUp, CreditCard, PieChart as PieIcon, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function AnalyticsPage() {
  const currentTotal = COST_DATA[COST_DATA.length - 1].total;
  const previousTotal = COST_DATA[COST_DATA.length - 2].total;
  const growth = ((currentTotal - previousTotal) / previousTotal * 100).toFixed(1);

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <motion.div variants={fadeIn} className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">Insights</span>
          <h1 className="text-5xl font-serif tracking-tighter font-bold">Analytics <span className="text-muted-foreground/40">Portal</span></h1>
        </div>
        <div className="flex gap-4">
          <button className="bg-foreground text-background rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
            Generate Report
          </button>
        </div>
      </motion.div>

      {/* Financial Overview Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5 col-span-2">
           <div className="flex justify-between items-start mb-12">
              <div>
                 <h3 className="font-serif text-2xl tracking-tight mb-2">Cost <span className="text-muted-foreground/30">Evolution</span></h3>
                 <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Monthly Expenditure by Category</p>
              </div>
              <div className="text-right">
                 <span className="text-3xl font-serif font-bold text-primary">${currentTotal.toLocaleString()}</span>
                 <span className="text-[10px] text-emerald-500 font-bold block mt-1">+{growth}% vs Last Month</span>
              </div>
           </div>
           <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={COST_DATA}>
                    <Tooltip 
                       contentStyle={{ backgroundColor: 'hsl(20 10% 10%)', border: '1px solid hsl(20 10% 20%)', borderRadius: '0px' }}
                    />
                    <Bar dataKey="compute" stackId="a" fill="hsl(43 74% 49%)" />
                    <Bar dataKey="storage" stackId="a" fill="hsl(43 74% 30%)" />
                    <Bar dataKey="networking" stackId="a" fill="hsl(43 74% 15%)" />
                 </BarChart>
              </ResponsiveContainer>
           </div>
           <div className="mt-8 flex gap-8">
              {[
                { label: "Compute", color: "bg-primary" },
                { label: "Storage", color: "bg-primary/60" },
                { label: "Networking", color: "bg-primary/30" },
              ].map((cat, i) => (
                <div key={i} className="flex items-center gap-2">
                   <div className={cn("w-2 h-2", cat.color)} />
                   <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground">{cat.label}</span>
                </div>
              ))}
           </div>
        </motion.div>

        <div className="space-y-8">
           <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5">
              <h3 className="font-serif text-xl tracking-tight mb-6 flex items-center gap-3">
                 <PieIcon className="w-5 h-5 text-primary" /> Resource Mix
              </h3>
              <div className="h-[200px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie
                          data={RESOURCE_DISTRIBUTION}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={4}
                          dataKey="value"
                          stroke="none"
                       >
                          {RESOURCE_DISTRIBUTION.map((entry, index) => (
                             <Cell key={index} fill={entry.color} />
                          ))}
                       </Pie>
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-3">
                 {RESOURCE_DISTRIBUTION.map((item, i) => (
                   <div key={i} className="flex justify-between items-center py-2 border-b border-border/10 last:border-0">
                      <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground">{item.name}</span>
                      <span className="text-xs font-bold">{item.value}%</span>
                   </div>
                 ))}
              </div>
           </motion.div>

           <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-foreground text-background">
              <TrendingUp className="w-6 h-6 mb-4" />
              <h3 className="font-serif text-xl tracking-tight mb-2">Efficiency <span className="opacity-50">Score</span></h3>
              <span className="text-4xl font-serif font-bold">92.4</span>
              <p className="text-[9px] uppercase tracking-widest mt-4 opacity-70 leading-relaxed">
                 Your infrastructure is 14% more efficient than industry standard.
              </p>
           </motion.div>
        </div>
      </div>

      {/* Forecast Table */}
      <motion.div variants={fadeIn} className="p-10 border border-border/40 bg-secondary/5">
         <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif text-2xl tracking-tight">Q3 <span className="text-muted-foreground/30">Projection</span></h3>
            <span className="text-[10px] uppercase tracking-widest font-bold px-4 py-1 border border-primary text-primary">High Accuracy</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { month: "June", val: "$28,900", confidence: "98%" },
              { month: "July", val: "$31,200", confidence: "94%" },
              { month: "August", val: "$34,500", confidence: "89%" },
              { month: "September", val: "$38,100", confidence: "82%" },
            ].map((f, i) => (
               <div key={i} className="p-6 bg-background border border-border/20">
                  <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground block mb-2">{f.month} Forecast</span>
                  <span className="text-xl font-serif font-bold block mb-4">{f.val}</span>
                  <div className="flex items-center gap-2">
                     <div className="h-0.5 bg-primary/20 flex-1">
                        <div className="h-full bg-primary" style={{ width: f.confidence }} />
                     </div>
                     <span className="text-[8px] font-bold text-muted-foreground">{f.confidence} Confidence</span>
                  </div>
               </div>
            ))}
         </div>
      </motion.div>
    </motion.div>
  );
}

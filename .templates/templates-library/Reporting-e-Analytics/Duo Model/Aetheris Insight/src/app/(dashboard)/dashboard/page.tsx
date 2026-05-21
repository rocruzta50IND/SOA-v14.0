"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { DASHBOARD_KPIS, REVENUE_CHART } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="p-12 space-y-16">
      {/* Header Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4 block">
            Intelligence Overview
          </span>
          <h1 className="font-serif text-6xl tracking-tighter leading-none mb-8">
            Executive <span className="italic">Summary</span>
          </h1>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DASHBOARD_KPIS.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  {kpi.label}
                </span>
                {kpi.trend > 0 ? (
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif tracking-tighter">{kpi.value}</span>
                <span className={cn(
                  "text-[10px] font-bold",
                  kpi.trend > 0 ? "text-primary" : "text-red-500"
                )}>
                  {kpi.trend > 0 ? "+" : ""}{kpi.trend}%
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                {kpi.trendLabel}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Chart Section */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl tracking-tighter mb-2">Revenue Growth</h2>
            <p className="font-sans text-sm text-muted-foreground tracking-wide">
              Historical performance across global nodes
            </p>
          </div>
          <button className="px-6 py-2 border border-border/50 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-secondary transition-colors">
            EXPAND DATA
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="h-[400px] w-full border border-border/30 p-8 bg-card/10 relative overflow-hidden group"
        >
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />
          
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE_CHART}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: 'var(--color-muted-foreground)', letterSpacing: '0.1em' }}
                dy={10}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--color-background)', 
                  border: '1px solid var(--color-border)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="var(--color-primary)" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                animationDuration={3000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </section>
    </div>
  );
}

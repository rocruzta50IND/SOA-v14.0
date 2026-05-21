"use client";

import { DASHBOARD_METRICS, RETENTION_CHART_DATA } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-16">
      <header className="flex flex-col gap-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
          Sovereign Oversight
        </p>
        <h1 className="font-playfair text-6xl tracking-tighter leading-none">
          Executive <span className="italic">Overview</span>
        </h1>
      </header>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {DASHBOARD_METRICS.map((metric, i) => (
          <div 
            key={metric.label}
            className="group relative p-8 border border-border/50 bg-card hover:border-primary/50 transition-all duration-700"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                0{i + 1} // {metric.label}
              </span>
              {metric.trend === "up" && <ArrowUpRight className="w-4 h-4 text-emerald-500" />}
              {metric.trend === "down" && <ArrowDownRight className="w-4 h-4 text-rose-500" />}
              {metric.trend === "neutral" && <Minus className="w-4 h-4 text-muted-foreground" />}
            </div>
            
            <div className="flex items-baseline gap-4">
              <span className="font-playfair text-5xl tracking-tighter">{metric.value}</span>
              <span className={cn(
                "text-xs font-bold",
                metric.trend === "up" ? "text-emerald-500" : 
                metric.trend === "down" ? "text-rose-500" : "text-muted-foreground"
              )}>
                {metric.change > 0 ? "+" : ""}{metric.change}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Retention Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-12 border border-border/50 bg-card relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
              Period: Jan - Jun 2026
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="font-playfair text-3xl tracking-tight mb-2">Talent Retention</h3>
            <p className="text-sm text-muted-foreground">Sustained institutional knowledge across elite cohorts.</p>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={RETENTION_CHART_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--color-background)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter)'
                  }}
                  cursor={{ stroke: 'var(--color-primary)', strokeWidth: 1 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="var(--color-primary)" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  animationDuration={2500}
                />
                <XAxis dataKey="date" hide />
                <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-12 border border-border/50 bg-primary text-primary-foreground flex flex-col justify-between">
          <div>
            <h3 className="font-playfair text-4xl tracking-tighter leading-none mb-6 italic">
              Aura Wisdom AI
            </h3>
            <p className="text-sm opacity-80 leading-relaxed font-light">
              "Predictive analysis suggests a 4% increase in engineering efficiency if current retention trends hold for the next quarter. Recommend expanding the elite mentoring program."
            </p>
          </div>
          
          <button className="w-full bg-background text-foreground py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-muted transition-colors">
            Generate Deep Report
          </button>
        </div>
      </div>
    </div>
  );
}

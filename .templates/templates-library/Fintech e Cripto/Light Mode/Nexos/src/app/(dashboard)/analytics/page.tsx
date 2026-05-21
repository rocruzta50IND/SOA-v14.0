"use client";

import { motion } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import { Calendar, TrendingUp, Users, Zap } from "lucide-react";
import { PERFORMANCE_CHART, ALLOCATION_CHART } from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Advanced Analytics</h1>
          <p className="text-muted-foreground mt-1">Deep-dive into performance metrics and network health.</p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          Last 30 Days
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Market Performance */}
        <div className="rounded-md border border-border bg-background p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Market Performance Index</h3>
            <p className="text-2xl font-black mt-1 tracking-tighter">84.2 <span className="text-sm font-medium text-emerald-500">+4.5%</span></p>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PERFORMANCE_CHART}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--color-border))" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: "hsl(var(--color-muted-foreground))" }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: "hsl(var(--color-muted-foreground))" }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: "hsl(var(--color-background))", border: "1px solid hsl(var(--color-border))", borderRadius: "4px" }}
                />
                <Line 
                  type="stepAfter" 
                  dataKey="value" 
                  stroke="hsl(var(--color-primary))" 
                  strokeWidth={2} 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Allocation Breakdown */}
        <div className="rounded-md border border-border bg-background p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Portfolio Weight Distribution</h3>
            <p className="text-2xl font-black mt-1 tracking-tighter">Balanced <span className="text-sm font-medium text-muted-foreground">Optimized</span></p>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ALLOCATION_CHART}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--color-border))" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: "hsl(var(--color-muted-foreground))" }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: "hsl(var(--color-muted-foreground))" }} 
                />
                <Tooltip 
                   cursor={{fill: 'hsl(var(--color-muted)/0.5)'}}
                   contentStyle={{ backgroundColor: "hsl(var(--color-background))", border: "1px solid hsl(var(--color-border))", borderRadius: "4px" }}
                />
                <Bar dataKey="value" fill="hsl(var(--color-primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Network Metrics */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { label: "Network Hashrate", value: "245.2 EH/s", icon: Zap, sub: "High Stability" },
             { label: "Unique Addresses", value: "1,204,500", icon: Users, sub: "+12k today" },
             { label: "Transaction Speed", value: "1.2s avg", icon: TrendingUp, sub: "Network Optimal" },
           ].map((item, i) => (
             <div key={i} className="rounded-md border border-border bg-background p-6 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</div>
                <div className="text-xl font-black mt-1 tracking-tighter">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
}

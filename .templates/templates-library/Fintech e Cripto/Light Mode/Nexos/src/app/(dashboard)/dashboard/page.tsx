"use client";

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
import { ArrowUpRight, ArrowDownRight, Minus, Wallet, TrendingUp, Activity, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_STATS, PERFORMANCE_CHART, MOCK_ASSETS } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Executive Overview</h1>
        <p className="text-muted-foreground mt-1">Real-time performance metrics and asset allocation.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_STATS.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="rounded-md border border-border bg-background p-6 shadow-sm"
          >
            <div className="flex items-center justify-between pb-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                {stat.label}
              </span>
              {stat.trend === "up" && <ArrowUpRight className="h-4 w-4 text-emerald-500" />}
              {stat.trend === "down" && <ArrowDownRight className="h-4 w-4 text-red-500" />}
              {stat.trend === "neutral" && <Minus className="h-4 w-4 text-muted-foreground" />}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter">{stat.value}</span>
              <span className={cn(
                "text-xs font-medium mt-1",
                stat.change > 0 ? "text-emerald-500" : stat.change < 0 ? "text-red-500" : "text-muted-foreground"
              )}>
                {stat.change > 0 ? "+" : ""}{stat.change}% <span className="text-muted-foreground font-normal">from last month</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart */}
        <div className="lg:col-span-2 rounded-md border border-border bg-background p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Portfolio Growth
              </h3>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_CHART}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--color-primary))" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="hsl(var(--color-primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--color-border))" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "hsl(var(--color-muted-foreground))" }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "hsl(var(--color-muted-foreground))" }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: "hsl(var(--color-background))", borderColor: "hsl(var(--color-border))", borderRadius: "8px" }}
                  itemStyle={{ color: "hsl(var(--color-foreground))" }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--color-primary))" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Allocation */}
        <div className="rounded-md border border-border bg-background p-6 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-6">
            <PieChart className="h-4 w-4" /> Asset Allocation
          </h3>
          <div className="space-y-6">
            {MOCK_ASSETS.slice(0, 4).map((asset) => (
              <div key={asset.id} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{asset.name}</span>
                  <span className="text-muted-foreground">{asset.allocation}%</span>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${asset.allocation}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            ))}
            <button className="w-full mt-4 text-xs font-bold uppercase tracking-widest text-primary hover:underline">
              View All Assets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

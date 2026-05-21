"use client";

import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  Database, 
  Globe, 
  Cpu 
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { MOCK_METRICS, COST_HISTORY, INFRASTRUCTURE_NODES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Infrastructure Overview
        </h1>
        <p className="text-muted-foreground">Monitor your global cloud operations in real-time.</p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_METRICS.map((metric, i) => (
          <div 
            key={metric.label} 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                {i === 0 && <Globe size={20} className="text-primary" />}
                {i === 1 && <Activity size={20} className="text-primary" />}
                {i === 2 && <Cpu size={20} className="text-primary" />}
                {i === 3 && <ShieldAlert size={20} className="text-primary" />}
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                metric.trend === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
              )}>
                {metric.trend === "up" ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {Math.abs(metric.change)}%
              </div>
            </div>
            
            <p className="text-sm font-medium text-muted-foreground mb-1">{metric.label}</p>
            <h3 className="text-2xl font-bold font-mono tracking-tight text-white">{metric.value}</h3>
          </div>
        ))}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Resource Consumption</h3>
              <p className="text-xs text-muted-foreground">Compute and Storage trends over the last 6 months</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-white">
                <div className="w-2 h-2 rounded-full bg-primary" /> Compute
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-white">
                <div className="w-2 h-2 rounded-full bg-primary/40" /> Storage
              </div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={COST_HISTORY}>
                <defs>
                  <linearGradient id="colorCompute" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="compute" 
                  stroke="var(--color-primary)" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorCompute)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="storage" 
                  stroke="rgba(79,70,229,0.4)" 
                  strokeWidth={2}
                  fillOpacity={0} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Nodes List */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Critical Nodes</h3>
            <button className="text-xs text-primary font-medium hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {INFRASTRUCTURE_NODES.slice(0, 4).map((node) => (
              <div key={node.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    node.status === "running" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                  )}>
                    {node.type === "compute" ? <Cpu size={20} /> : <Database size={20} />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white truncate max-w-[120px]">{node.name}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">{node.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-white">{node.cpuUsage}% CPU</p>
                  <p className="text-[10px] text-muted-foreground">{node.uptime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

function ShieldAlert({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

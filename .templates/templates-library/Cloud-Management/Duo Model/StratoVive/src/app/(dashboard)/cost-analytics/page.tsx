"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";
import { COST_HISTORY } from "@/lib/mock-data";
import { ArrowUpRight, TrendingUp, CreditCard, DollarSign } from "lucide-react";

const COLORS = ['#4f46e5', '#818cf8', '#c7d2fe', '#6366f1'];

const COST_BREAKDOWN = [
  { name: 'Compute', value: 18500 },
  { name: 'Storage', value: 6000 },
  { name: 'Network', value: 3500 },
];

export default function CostAnalyticsPage() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Cost Analytics
        </h1>
        <p className="text-muted-foreground">Analyze and optimize your cloud spending across regions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
              <DollarSign size={20} />
            </div>
            <p className="text-sm text-muted-foreground">Monthly Estimated Cost</p>
            <h3 className="text-3xl font-bold text-white mt-1">$28,000.00</h3>
          </div>
          <div className="flex items-center gap-2 mt-6 text-xs text-emerald-500 font-medium">
            <TrendingUp size={14} />
            <span>+12% from last month</span>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
              <CreditCard size={20} />
            </div>
            <p className="text-sm text-muted-foreground">Credits Remaining</p>
            <h3 className="text-3xl font-bold text-white mt-1">$4,250.00</h3>
          </div>
          <div className="mt-6 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[40%]" />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp size={80} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Cost per Resource</p>
            <h3 className="text-xl font-bold text-white mt-1">$21.80/day</h3>
            <p className="text-[10px] text-muted-foreground mt-1">Average across all nodes</p>
          </div>
          <button className="mt-6 text-xs text-primary font-medium flex items-center gap-1 hover:underline">
            Optimization Reports <ArrowUpRight size={12} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-8">Spend by Service</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COST_HISTORY}>
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
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{ 
                    backgroundColor: '#111', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="compute" stackId="a" fill="var(--color-primary)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="storage" stackId="a" fill="#818cf8" radius={[0, 0, 0, 0]} />
                <Bar dataKey="networking" stackId="a" fill="#c7d2fe" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-white mb-8 self-start">Service Distribution</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={COST_BREAKDOWN}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COST_BREAKDOWN.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(255,255,255,0.05)" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full mt-6 space-y-3">
            {COST_BREAKDOWN.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-white">${item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

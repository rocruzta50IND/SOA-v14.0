"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  MOCK_DASHBOARD_STATS, 
  MOCK_CHART_DATA, 
  MOCK_CASES 
} from "@/lib/mock-data";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { 
  ArrowUpRight, 
  Scale, 
  Users, 
  DollarSign, 
  Activity 
} from "lucide-react";

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function DashboardPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="space-y-12 pb-20"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          System Overview
        </span>
        <h2 className="font-serif text-5xl font-bold tracking-tighter">Legal Intelligence</h2>
      </motion.div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active AUM", value: `$${(MOCK_DASHBOARD_STATS.activeAUM / 1000000).toFixed(1)}M`, icon: DollarSign, trend: "+12.5%" },
          { label: "Active Cases", value: MOCK_DASHBOARD_STATS.activeCases, icon: Scale, trend: "+3 this month" },
          { label: "Pending Revenue", value: `$${(MOCK_DASHBOARD_STATS.pendingRevenue / 1000000).toFixed(2)}M`, icon: Activity, trend: "High Priority" },
          { label: "Client Satisfaction", value: `${MOCK_DASHBOARD_STATS.clientSatisfaction}%`, icon: Users, trend: "Elite Tier" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="p-8 border border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {stat.trend}
              </span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {stat.label}
            </p>
            <p className="font-serif text-4xl font-bold tracking-tighter">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Abstract Revenue Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Financial Performance
              </span>
              <h3 className="font-serif text-2xl font-bold">Revenue Projections</h3>
            </div>
            <button className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
              Full Report
            </button>
          </div>
          
          <div className="h-[400px] w-full border-t border-border/50 pt-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--color-card)', 
                    borderColor: 'var(--color-border)',
                    borderRadius: '0px',
                    fontSize: '12px'
                  }}
                  itemStyle={{ color: 'var(--color-foreground)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="var(--color-primary)" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Priority Cases List */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Critical Attention
            </span>
            <h3 className="font-serif text-2xl font-bold">High Priority Cases</h3>
          </div>
          
          <div className="space-y-4 border-t border-border/50 pt-8">
            {MOCK_CASES.filter(c => c.priority === 'high').slice(0, 4).map((caseItem) => (
              <div key={caseItem.id} className="group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-mono text-muted-foreground">{caseItem.reference}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-sm font-medium leading-snug mb-1 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {caseItem.client}
                  </span>
                  <span className="text-[10px] font-bold text-primary">
                    ${(caseItem.value / 1000000).toFixed(1)}M
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 border border-border/50 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-500">
            View All Cases
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

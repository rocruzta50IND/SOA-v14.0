"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { MOCK_CASES } from "@/lib/mock-data";
import { Search, Filter, Plus, MoreHorizontal } from "lucide-react";

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function CasesPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-12 pb-20"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex justify-between items-end">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio
          </span>
          <h2 className="font-serif text-5xl font-bold tracking-tighter">Case Management</h2>
        </div>
        
        <button className="bg-foreground text-background hover:opacity-80 rounded-full px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 flex items-center gap-3">
          <Plus className="w-4 h-4" />
          Initiate Case
        </button>
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={itemVariants} className="flex gap-4 border-b border-border/50 pb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Filter by reference, client or title..." 
            className="w-full bg-transparent border-none outline-none pl-8 text-sm placeholder:text-muted-foreground"
          />
        </div>
        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-border/50 hover:bg-muted transition-colors">
          <Filter className="w-3 h-3" />
          Filters
        </button>
      </motion.div>

      {/* Case Table */}
      <motion.div variants={itemVariants} className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Reference</th>
              <th className="text-left py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Case Title</th>
              <th className="text-left py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Client</th>
              <th className="text-left py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Status</th>
              <th className="text-right py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Value (USD)</th>
              <th className="py-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {MOCK_CASES.map((item) => (
              <tr key={item.id} className="group hover:bg-muted/30 transition-colors">
                <td className="py-6 font-mono text-xs text-muted-foreground">{item.reference}</td>
                <td className="py-6">
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.title}</p>
                </td>
                <td className="py-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.client}</p>
                </td>
                <td className="py-6">
                  <span className={cn(
                    "inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                    item.status === 'active' ? "border-primary text-primary" : "border-border text-muted-foreground"
                  )}>
                    {item.status}
                  </span>
                </td>
                <td className="py-6 text-right font-serif font-bold">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.value)}
                </td>
                <td className="py-6 text-right">
                  <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}

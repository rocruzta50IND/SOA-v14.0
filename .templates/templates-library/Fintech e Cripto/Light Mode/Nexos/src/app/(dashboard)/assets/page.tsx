"use client";

import { motion } from "framer-motion";
import { Search, Filter, ArrowUpRight, ArrowDownRight, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_ASSETS } from "@/lib/mock-data";

export default function AssetsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Digital Assets</h1>
          <p className="text-muted-foreground mt-1">Detailed inventory of your cryptographic holdings.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90">
            Add Asset
          </button>
        </div>
      </div>

      {/* Assets Table */}
      <div className="rounded-md border border-border bg-background shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Asset</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Balance</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Market Value</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">24h Change</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right">Allocation</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {MOCK_ASSETS.map((asset, index) => (
              <motion.tr 
                key={asset.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="hover:bg-muted/30 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                      {asset.symbol.substring(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{asset.name}</div>
                      <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  {asset.balance} {asset.symbol}
                </td>
                <td className="px-6 py-4 text-sm">
                  {asset.value}
                </td>
                <td className="px-6 py-4">
                  <div className={cn(
                    "flex items-center gap-1 text-sm font-medium",
                    asset.change24h > 0 ? "text-emerald-500" : asset.change24h < 0 ? "text-red-500" : "text-muted-foreground"
                  )}>
                    {asset.change24h > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {Math.abs(asset.change24h)}%
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-medium">{asset.allocation}%</span>
                    <div className="h-1 w-24 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${asset.allocation}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-md hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="h-4 w-4 text-muted-foreground" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

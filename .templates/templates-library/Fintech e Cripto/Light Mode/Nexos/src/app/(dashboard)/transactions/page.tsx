"use client";

import { motion } from "framer-motion";
import { Search, Download, CheckCircle2, Clock, XCircle, ArrowRightLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_TRANSACTIONS } from "@/lib/mock-data";

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Activity History</h1>
          <p className="text-muted-foreground mt-1">Audit log of all inbound and outbound transactions.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter by hash or asset..."
            className="h-10 w-full rounded-md border border-border bg-background pl-10 pr-4 text-sm outline-none focus:border-primary"
          />
        </div>
        <select className="h-10 rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary">
          <option>All Types</option>
          <option>Buy</option>
          <option>Sell</option>
          <option>Transfer</option>
        </select>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {MOCK_TRANSACTIONS.map((tx, index) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="flex items-center justify-between rounded-md border border-border bg-background p-4 shadow-sm hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "h-10 w-10 rounded-md flex items-center justify-center border",
                tx.type === "buy" ? "bg-emerald-50 border-emerald-100 text-emerald-600" :
                tx.type === "sell" ? "bg-red-50 border-red-100 text-red-600" :
                "bg-blue-50 border-blue-100 text-blue-600"
              )}>
                <ArrowRightLeft className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-tight">{tx.type} {tx.asset}</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">{tx.hash}</div>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="text-right">
                <div className="text-sm font-black">{tx.amount} {tx.asset}</div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">{tx.date}</div>
              </div>
              
              <div className="w-32 flex justify-end">
                <div className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                  tx.status === "completed" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                  tx.status === "pending" ? "bg-amber-50 text-amber-700 border-amber-100" :
                  "bg-red-50 text-red-700 border-red-100"
                )}>
                  {tx.status === "completed" && <CheckCircle2 className="h-3 w-3" />}
                  {tx.status === "pending" && <Clock className="h-3 w-3" />}
                  {tx.status === "failed" && <XCircle className="h-3 w-3" />}
                  {tx.status}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

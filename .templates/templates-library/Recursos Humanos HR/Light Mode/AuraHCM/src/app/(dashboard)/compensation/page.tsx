"use client";

import { COMPENSATION_HISTORY } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Wallet, Download, Calendar, ArrowUpRight } from "lucide-react";

export default function CompensationPage() {
  return (
    <div className="space-y-16">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            Capital Distribution
          </p>
          <h1 className="font-playfair text-6xl tracking-tighter leading-none">
            Executive <span className="italic">Ledger</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <button className="p-4 border border-border/50 rounded-full hover:bg-muted transition-colors">
            <Calendar className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="bg-foreground text-background hover:opacity-80 rounded-full px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 flex items-center gap-3">
            <Download className="w-4 h-4" />
            Export Statement
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-border/50 bg-card group hover:border-primary/50 transition-all duration-500">
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">Current Month Liability</p>
          <div className="flex items-baseline gap-2">
            <span className="font-playfair text-5xl tracking-tighter">$428.5k</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
        <div className="p-8 border border-border/50 bg-card group hover:border-primary/50 transition-all duration-500">
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">Bonus Pool Utilization</p>
          <div className="flex items-baseline gap-2">
            <span className="font-playfair text-5xl tracking-tighter">64%</span>
            <span className="text-xs text-muted-foreground font-bold">REMAINING</span>
          </div>
        </div>
        <div className="p-8 border border-border/50 bg-primary text-primary-foreground">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-4">Next Disbursement</p>
          <span className="font-playfair text-4xl tracking-tighter">May 31, 2026</span>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="border border-border/50 bg-card overflow-hidden">
        <div className="p-8 border-b border-border/50 flex justify-between items-center">
          <h3 className="font-playfair text-3xl tracking-tight italic">Transaction History</h3>
          <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Showing last 20 records</span>
        </div>
        
        <table className="w-full text-left">
          <thead className="bg-muted/50 border-b border-border/50">
            <tr>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Employee</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Amount</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Date</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Status</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {COMPENSATION_HISTORY.map((record) => (
              <tr key={record.id} className="hover:bg-muted/30 transition-colors group">
                <td className="px-8 py-6 font-medium tracking-tight">{record.employee}</td>
                <td className="px-8 py-6 font-playfair text-xl tracking-tighter">{record.amount}</td>
                <td className="px-8 py-6 text-sm text-muted-foreground">{record.date}</td>
                <td className="px-8 py-6">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold",
                    record.status === "paid" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {record.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <button className="text-[10px] uppercase tracking-widest font-bold text-primary hover:underline transition-all">
                    View Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

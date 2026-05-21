"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { MOCK_BILLING } from "@/lib/mock-data";
import { Download, CreditCard, Clock, CheckCircle } from "lucide-react";

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function BillingPage() {
  const totalOutstanding = MOCK_BILLING
    .filter(inv => inv.status !== 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

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
            Treasury
          </span>
          <h2 className="font-serif text-5xl font-bold tracking-tighter">Billing & Invoices</h2>
        </div>
        
        <div className="flex gap-4">
          <button className="border border-border/50 hover:bg-muted rounded-full px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500">
            Export History
          </button>
          <button className="bg-foreground text-background hover:opacity-80 rounded-full px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500">
            New Invoice
          </button>
        </div>
      </motion.div>

      {/* Financial Summary */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-border/50 bg-card/50">
          <Clock className="w-5 h-5 text-primary mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Outstanding Balance</p>
          <p className="font-serif text-4xl font-bold tracking-tighter">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalOutstanding)}</p>
        </div>
        <div className="p-8 border border-border/50 bg-card/50">
          <CheckCircle className="w-5 h-5 text-primary mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Collected (MTD)</p>
          <p className="font-serif text-4xl font-bold tracking-tighter">$412,000.00</p>
        </div>
        <div className="p-8 border border-border/50 bg-card/50">
          <CreditCard className="w-5 h-5 text-primary mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Projected Revenue</p>
          <p className="font-serif text-4xl font-bold tracking-tighter">$2,450,000.00</p>
        </div>
      </motion.div>

      {/* Invoice List */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Recent Transactions</h3>
        <div className="space-y-4">
          {MOCK_BILLING.map((invoice) => (
            <div key={invoice.id} className="group flex items-center justify-between p-6 border border-border/50 hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground mb-1">{invoice.id}</p>
                  <p className="text-sm font-medium">{invoice.caseRef}</p>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Due Date</p>
                  <p className="text-sm font-medium">{invoice.dueDate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-12">
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Amount</p>
                  <p className="text-sm font-serif font-bold tracking-tight">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(invoice.amount)}</p>
                </div>
                
                <span className={cn(
                  "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                  invoice.status === 'paid' ? "bg-primary/10 border-primary text-primary" : 
                  invoice.status === 'overdue' ? "bg-red-500/10 border-red-500 text-red-500" :
                  "bg-muted border-border text-muted-foreground"
                )}>
                  {invoice.status}
                </span>

                <button className="p-2 hover:bg-muted rounded-full transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

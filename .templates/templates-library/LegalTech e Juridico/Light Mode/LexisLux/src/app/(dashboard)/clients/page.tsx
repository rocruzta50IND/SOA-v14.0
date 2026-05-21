"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { MOCK_CLIENTS } from "@/lib/mock-data";
import { Building2, Mail, ExternalLink, Globe } from "lucide-react";

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function ClientsPage() {
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
            Relationships
          </span>
          <h2 className="font-serif text-5xl font-bold tracking-tighter">Client Directory</h2>
        </div>
        
        <button className="bg-foreground text-background hover:opacity-80 rounded-full px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500">
          Onboard Client
        </button>
      </motion.div>

      {/* Client Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {MOCK_CLIENTS.map((client) => (
          <div key={client.id} className="group p-8 border border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-700 relative overflow-hidden">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-full group-hover:bg-primary transition-colors duration-500">
                <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest px-3 py-1 border rounded-full",
                client.status === 'active' ? "border-primary text-primary" : "border-border text-muted-foreground"
              )}>
                {client.status}
              </span>
            </div>

            <div className="space-y-4 mb-12">
              <h3 className="font-serif text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{client.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{client.industry}</p>
            </div>

            <div className="pt-8 border-t border-border/30 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Total AUM</p>
                <p className="font-serif font-bold text-lg">${(client.totalRevenue / 1000000).toFixed(1)}M</p>
              </div>
              <div className="flex flex-col justify-end items-end gap-2">
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-3 h-3" />
                  Contact
                </button>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  Profiles
                </button>
              </div>
            </div>
            
            {/* Artistic background element */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
              <Globe className="w-48 h-48" />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPORT_HISTORY } from "@/lib/mock-data";
import { Download, FileText, Filter, Search, Clock, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExportCenterPage() {
  return (
    <div className="p-12 space-y-16">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12"
        >
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4 block">
              Artifact Retrieval
            </span>
            <h1 className="font-serif text-6xl tracking-tighter leading-none">
              Vault & <span className="italic">Exports</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="flex-1 md:w-64 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="SEARCH VAULT..." 
                  className="w-full bg-secondary/30 border border-border/50 py-3 pl-12 pr-4 text-[10px] uppercase tracking-widest font-bold focus:outline-none focus:border-primary/50 transition-colors"
                />
             </div>
             <button className="p-3 border border-border/50 hover:bg-secondary transition-colors">
                <Filter className="w-4 h-4" />
             </button>
          </div>
        </motion.div>

        {/* Export History Table */}
        <div className="border border-border/30 bg-card/10">
          <div className="grid grid-cols-6 px-8 py-6 border-b border-border/30 bg-secondary/20">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground col-span-2">Artifact Name</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Type</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Generated On</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Status</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground text-right">Actions</span>
          </div>

          <div className="divide-y divide-border/20">
            {EXPORT_HISTORY.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-6 items-center px-8 py-6 hover:bg-card/30 transition-all duration-300 group"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-10 h-10 border border-border/50 flex items-center justify-center bg-background group-hover:border-primary/30 transition-colors">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-sans font-bold tracking-tight">{job.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{job.size}</p>
                  </div>
                </div>
                
                <span className="font-mono text-xs font-bold text-primary">{job.type}</span>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                   <Clock className="w-3 h-3" />
                   <span className="text-xs">{job.date}</span>
                </div>

                <div className="flex items-center gap-2">
                   {job.status === 'completed' ? (
                     <CheckCircle2 className="w-3 h-3 text-primary" />
                   ) : job.status === 'failed' ? (
                     <XCircle className="w-3 h-3 text-red-500" />
                   ) : (
                     <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                   )}
                   <span className={cn(
                     "text-[10px] uppercase tracking-widest font-bold",
                     job.status === 'completed' ? "text-primary" :
                     job.status === 'failed' ? "text-red-500" : "text-blue-500"
                   )}>
                     {job.status}
                   </span>
                </div>

                <div className="flex justify-end">
                   <button 
                     disabled={job.status !== 'completed'}
                     className={cn(
                       "flex items-center gap-2 px-4 py-2 border transition-all duration-500 text-[9px] font-bold uppercase tracking-widest",
                       job.status === 'completed' 
                         ? "border-primary/30 text-primary hover:bg-primary hover:text-background" 
                         : "border-border/30 text-muted-foreground/30 cursor-not-allowed"
                     )}
                   >
                     <Download className="w-3 h-3" />
                     Download
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Integration Storage */}
      <section className="p-12 border border-border/50 bg-secondary/10 flex flex-col md:flex-row gap-12 items-center">
         <div className="flex-1 space-y-6">
            <h2 className="font-serif text-3xl tracking-tight">Automated Archiving</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Configure your intelligence nodes to automatically push artifacts to encrypted cloud storage 
              buckets upon completion. Supports AWS S3, Azure Blob, and Neural Vaults.
            </p>
            <div className="flex gap-4">
               {['AWS', 'AZURE', 'GCP'].map(cloud => (
                 <div key={cloud} className="px-4 py-2 border border-border/50 text-[10px] font-bold tracking-widest opacity-50">
                    {cloud}
                 </div>
               ))}
            </div>
         </div>
         <div className="w-full md:w-64 h-64 border border-border/50 p-8 flex flex-col justify-between bg-background">
            <div className="flex justify-between items-start">
               <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
               </div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">ACTIVE</span>
            </div>
            <div>
               <p className="text-xs text-muted-foreground mb-1">STORAGE USED</p>
               <p className="text-4xl font-serif tracking-tighter">84.2%</p>
               <div className="h-1 w-full bg-secondary mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '84.2%' }}
                    transition={{ duration: 2 }}
                    className="h-full bg-primary"
                  />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

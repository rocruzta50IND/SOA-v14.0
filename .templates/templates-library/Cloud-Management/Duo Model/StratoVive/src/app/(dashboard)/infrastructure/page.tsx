"use client";

import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Server, 
  Database, 
  Network, 
  HardDrive 
} from "lucide-react";
import { INFRASTRUCTURE_NODES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function InfrastructurePage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Infrastructure
          </h1>
          <p className="text-muted-foreground">Manage and monitor your global cluster resources.</p>
        </div>
        <button className="bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(79,70,229,0.3)] rounded-xl px-5 py-2.5 font-medium transition-all flex items-center gap-2">
          <Plus size={18} /> Provision Node
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white/5 border border-white/10 p-4 rounded-2xl">
        <div className="relative w-full sm:w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search by node name, ID, or tag..." 
            className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-white transition-all">
            <Filter size={16} /> Filter
          </button>
          <div className="h-8 w-[1px] bg-white/10 mx-1" />
          <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-white transition-all">
            Region: All
          </button>
        </div>
      </div>

      {/* Nodes Table */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Node Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Region</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">CPU / RAM</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Uptime</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {INFRASTRUCTURE_NODES.map((node) => (
                <tr key={node.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        node.status === "running" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                      )}>
                        {node.type === "compute" && <Server size={16} />}
                        {node.type === "database" && <Database size={16} />}
                        {node.type === "network" && <Network size={16} />}
                        {node.type === "storage" && <HardDrive size={16} />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{node.name}</p>
                        <p className="text-[10px] text-muted-foreground font-mono">{node.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-muted-foreground capitalize">{node.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full animate-pulse",
                        node.status === "running" ? "bg-emerald-500" : "bg-amber-500"
                      )} />
                      <span className={cn(
                        "text-xs font-medium",
                        node.status === "running" ? "text-emerald-500" : "text-amber-500"
                      )}>
                        {node.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-muted-foreground font-mono">{node.region}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground">CPU</span>
                        <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full rounded-full", node.cpuUsage > 80 ? "bg-red-500" : "bg-primary")} 
                            style={{ width: `${node.cpuUsage}%` }} 
                          />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-white w-6">{node.cpuUsage}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground">RAM</span>
                        <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full rounded-full", node.memoryUsage > 80 ? "bg-red-500" : "bg-primary/60")} 
                            style={{ width: `${node.memoryUsage}%` }} 
                          />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-white w-6">{node.memoryUsage}%</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-muted-foreground">{node.uptime}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted-foreground hover:text-white transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

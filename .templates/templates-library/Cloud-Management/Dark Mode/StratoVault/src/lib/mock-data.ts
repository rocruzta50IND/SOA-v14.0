/**
 * STRATOVAULT MOCK DATA ENGINE
 * 
 * This file contains strict TypeScript DTOs and realistic datasets 
 * representing the Enterprise Cloud Infrastructure.
 */

// --- DTOs (Data Transfer Objects) ---

export interface Instance {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'restarting' | 'terminated';
  type: string;
  region: string;
  cpuUsage: number;
  memoryUsage: number;
  uptime: string;
  ipAddress: string;
}

export interface NetworkMetric {
  timestamp: string;
  ingress: number;
  egress: number;
  latency: number;
}

export interface SecurityEvent {
  id: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  event: string;
  source: string;
  status: 'blocked' | 'monitored' | 'flagged';
}

export interface CostMetric {
  month: string;
  compute: number;
  storage: number;
  networking: number;
  total: number;
}

export interface ResourceDistribution {
  name: string;
  value: number;
  color: string;
}

// --- MOCK DATA ---

export const MOCK_INSTANCES: Instance[] = [
  {
    id: "inst-9421",
    name: "Production-DB-01",
    status: "running",
    type: "sv.ultra.8xlarge",
    region: "us-east-1",
    cpuUsage: 42,
    memoryUsage: 68,
    uptime: "45d 12h",
    ipAddress: "10.0.1.42"
  },
  {
    id: "inst-8812",
    name: "Edge-Worker-Alpha",
    status: "running",
    type: "sv.compute.4xlarge",
    region: "eu-west-3",
    cpuUsage: 89,
    memoryUsage: 45,
    uptime: "12d 04h",
    ipAddress: "10.4.2.11"
  },
  {
    id: "inst-3304",
    name: "Legacy-Vault-Backup",
    status: "stopped",
    type: "sv.storage.xlarge",
    region: "ap-southeast-1",
    cpuUsage: 0,
    memoryUsage: 0,
    uptime: "0d 0h",
    ipAddress: "192.168.1.104"
  },
  {
    id: "inst-7721",
    name: "ML-Training-Cluster",
    status: "running",
    type: "sv.gpu.v100",
    region: "us-west-2",
    cpuUsage: 98,
    memoryUsage: 92,
    uptime: "3d 18h",
    ipAddress: "10.2.1.88"
  },
  {
    id: "inst-1192",
    name: "Staging-API-Gateway",
    status: "restarting",
    type: "sv.standard.2xlarge",
    region: "us-east-1",
    cpuUsage: 12,
    memoryUsage: 34,
    uptime: "0d 2h",
    ipAddress: "10.0.2.15"
  }
];

export const NETWORK_HISTORY: NetworkMetric[] = [
  { timestamp: "00:00", ingress: 450, egress: 320, latency: 12 },
  { timestamp: "04:00", ingress: 380, egress: 290, latency: 15 },
  { timestamp: "08:00", ingress: 890, egress: 740, latency: 28 },
  { timestamp: "12:00", ingress: 1200, egress: 1100, latency: 45 },
  { timestamp: "16:00", ingress: 1150, egress: 1050, latency: 38 },
  { timestamp: "20:00", ingress: 650, egress: 580, latency: 22 },
  { timestamp: "23:59", ingress: 480, egress: 350, latency: 14 },
];

export const SECURITY_LOGS: SecurityEvent[] = [
  {
    id: "evt-001",
    timestamp: "2024-05-21 14:22:10",
    severity: "critical",
    event: "DDoS Attempt Detected",
    source: "45.12.88.192",
    status: "blocked"
  },
  {
    id: "evt-002",
    timestamp: "2024-05-21 13:45:05",
    severity: "medium",
    event: "Unauthorized SSH Login",
    source: "192.168.4.1",
    status: "flagged"
  },
  {
    id: "evt-003",
    timestamp: "2024-05-21 12:10:33",
    severity: "low",
    event: "Port Scan Detected",
    source: "88.21.44.12",
    status: "monitored"
  },
  {
    id: "evt-004",
    timestamp: "2024-05-21 11:05:00",
    severity: "high",
    event: "SQL Injection Pattern",
    source: "104.22.1.45",
    status: "blocked"
  }
];

export const COST_DATA: CostMetric[] = [
  { month: "Jan", compute: 12500, storage: 4500, networking: 2200, total: 19200 },
  { month: "Feb", compute: 14200, storage: 4700, networking: 2500, total: 21400 },
  { month: "Mar", compute: 13800, storage: 5100, networking: 2400, total: 21300 },
  { month: "Apr", compute: 15600, storage: 5200, networking: 2800, total: 23600 },
  { month: "May", compute: 18900, storage: 5500, networking: 3100, total: 27500 },
];

export const RESOURCE_DISTRIBUTION: ResourceDistribution[] = [
  { name: "Compute", value: 45, color: "hsl(43 74% 49%)" },
  { name: "Storage", value: 25, color: "hsl(43 74% 60%)" },
  { name: "Network", value: 20, color: "hsl(43 74% 70%)" },
  { name: "Support", value: 10, color: "hsl(43 74% 80%)" },
];

/**
 * STRATOVIVE MOCK DATABASE
 * Centralized DTOs and Mock Data for Cloud Infrastructure Management
 */

// --- DTOs (Interfaces) ---

export interface InfrastructureNode {
  id: string;
  name: string;
  type: 'compute' | 'storage' | 'network' | 'database';
  status: 'running' | 'degraded' | 'stopped' | 'provisioning';
  region: string;
  cpuUsage: number;
  memoryUsage: number;
  uptime: string;
  tags: string[];
}

export interface CostDataPoint {
  date: string;
  compute: number;
  storage: number;
  networking: number;
  total: number;
}

export interface SecurityEvent {
  id: string;
  timestamp: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  type: string;
  source: string;
  description: string;
  status: 'open' | 'investigating' | 'resolved';
}

export interface MetricCard {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
}

// --- MOCK DATA ---

export const MOCK_METRICS: MetricCard[] = [
  { label: "Active Instances", value: "1,284", change: 12.5, trend: "up" },
  { label: "Monthly Burn", value: "$42,890", change: -2.4, trend: "down" },
  { label: "Avg. Latency", value: "24ms", change: 5.1, trend: "up" },
  { label: "Security Score", value: "98/100", change: 0, trend: "up" },
];

export const INFRASTRUCTURE_NODES: InfrastructureNode[] = [
  {
    id: "node-01",
    name: "prod-api-cluster-01",
    type: "compute",
    status: "running",
    region: "us-east-1",
    cpuUsage: 45,
    memoryUsage: 62,
    uptime: "14d 6h",
    tags: ["production", "api"]
  },
  {
    id: "node-02",
    name: "stg-db-omega",
    type: "database",
    status: "degraded",
    region: "eu-west-1",
    cpuUsage: 88,
    memoryUsage: 94,
    uptime: "2d 12h",
    tags: ["staging", "sql"]
  },
  {
    id: "node-03",
    name: "edge-cdn-tokyo",
    type: "network",
    status: "running",
    region: "ap-northeast-1",
    cpuUsage: 12,
    memoryUsage: 24,
    uptime: "45d 1h",
    tags: ["edge", "cdn"]
  },
  {
    id: "node-04",
    name: "backup-vault-s3",
    type: "storage",
    status: "running",
    region: "us-west-2",
    cpuUsage: 5,
    memoryUsage: 15,
    uptime: "120d 8h",
    tags: ["backup", "cold-storage"]
  },
  {
    id: "node-05",
    name: "prod-redis-cache",
    type: "database",
    status: "running",
    region: "us-east-1",
    cpuUsage: 32,
    memoryUsage: 78,
    uptime: "8d 3h",
    tags: ["production", "cache"]
  }
];

export const COST_HISTORY: CostDataPoint[] = [
  { date: "Jan", compute: 12000, storage: 4500, networking: 2100, total: 18600 },
  { date: "Feb", compute: 13500, storage: 4800, networking: 2300, total: 20600 },
  { date: "Mar", compute: 15000, storage: 5200, networking: 2800, total: 23000 },
  { date: "Apr", compute: 14200, storage: 5100, networking: 2600, total: 21900 },
  { date: "May", compute: 16800, storage: 5500, networking: 3200, total: 25500 },
  { date: "Jun", compute: 18500, storage: 6000, networking: 3500, total: 28000 },
];

export const SECURITY_EVENTS: SecurityEvent[] = [
  {
    id: "evt-991",
    timestamp: "2026-05-21T10:45:00Z",
    severity: "high",
    type: "Brute Force Attempt",
    source: "192.168.1.45",
    description: "Multiple failed SSH login attempts detected on prod-api-cluster-01.",
    status: "investigating"
  },
  {
    id: "evt-990",
    timestamp: "2026-05-21T08:12:00Z",
    severity: "critical",
    type: "DDoS Attack",
    source: "Multiple (Botnet)",
    description: "Traffic spike detected on edge-cdn-tokyo exceeding 500Gbps.",
    status: "open"
  },
  {
    id: "evt-989",
    timestamp: "2026-05-20T22:30:00Z",
    severity: "medium",
    type: "IAM Permission Change",
    source: "admin-rodrigo",
    description: "Modified policy 'AdministratorAccess' for user 'dev-temp-01'.",
    status: "resolved"
  },
  {
    id: "evt-988",
    timestamp: "2026-05-20T15:10:00Z",
    severity: "low",
    type: "S3 Bucket Public Access",
    source: "automated-scanner",
    description: "Bucket 'public-assets-prod' has public read access enabled.",
    status: "resolved"
  }
];

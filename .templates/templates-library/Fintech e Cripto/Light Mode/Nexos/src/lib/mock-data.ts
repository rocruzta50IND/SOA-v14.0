/**
 * NEXOS MOCK DATABASE
 * Strictly visual mock data for Tier 1 Enterprise Fintech SaaS.
 */

export interface KPIStats {
  id: string;
  label: string;
  value: string;
  change: number;
  trend: "up" | "down" | "neutral";
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  value: string;
  change24h: number;
  allocation: number;
}

export interface Transaction {
  id: string;
  type: "buy" | "sell" | "transfer" | "receive";
  asset: string;
  amount: string;
  status: "completed" | "pending" | "failed";
  date: string;
  hash: string;
}

export interface ChartData {
  name: string;
  value: number;
}

// --- MOCK DATA ---

export const MOCK_STATS: KPIStats[] = [
  { id: "1", label: "Total Balance", value: "$1,284,592.00", change: 12.5, trend: "up" },
  { id: "2", label: "Monthly Yield", value: "$42,102.32", change: -2.4, trend: "down" },
  { id: "3", label: "Active Nodes", value: "24", change: 0, trend: "neutral" },
  { id: "4", label: "Volume (24h)", value: "$4.2M", change: 18.2, trend: "up" },
];

export const MOCK_ASSETS: Asset[] = [
  { id: "1", name: "Bitcoin", symbol: "BTC", balance: "12.450", value: "$845,210.00", change24h: 2.5, allocation: 45 },
  { id: "2", name: "Ethereum", symbol: "ETH", balance: "145.20", value: "$324,500.00", change24h: -1.2, allocation: 28 },
  { id: "3", name: "Solana", symbol: "SOL", balance: "1,240.00", value: "$112,000.00", change24h: 8.4, allocation: 15 },
  { id: "4", name: "USDC", symbol: "USDC", balance: "42,000.00", value: "$42,000.00", change24h: 0, allocation: 8 },
  { id: "5", name: "Chainlink", symbol: "LINK", balance: "840.00", value: "$12,400.00", change24h: -4.5, allocation: 4 },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: "tx_01", type: "receive", asset: "BTC", amount: "0.450", status: "completed", date: "2024-05-20 14:30", hash: "0x4f2e...3a1b" },
  { id: "tx_02", type: "sell", asset: "ETH", amount: "12.50", status: "completed", date: "2024-05-19 09:15", hash: "0x8a9b...c1d2" },
  { id: "tx_03", type: "buy", asset: "SOL", amount: "450.00", status: "pending", date: "2024-05-21 11:00", hash: "0x3e4f...g5h6" },
  { id: "tx_04", type: "transfer", asset: "USDC", amount: "5,000.00", status: "completed", date: "2024-05-18 16:45", hash: "0x1j2k...l3m4" },
  { id: "tx_05", type: "receive", asset: "LINK", amount: "120.00", status: "failed", date: "2024-05-17 12:20", hash: "0x5n6o...p7q8" },
  { id: "tx_06", type: "buy", asset: "BTC", amount: "0.120", status: "completed", date: "2024-05-16 10:10", hash: "0x9r0s...t1u2" },
];

export const PERFORMANCE_CHART: ChartData[] = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];

export const ALLOCATION_CHART: ChartData[] = [
  { name: "BTC", value: 45 },
  { name: "ETH", value: 28 },
  { name: "SOL", value: 15 },
  { name: "Stablecoins", value: 8 },
  { name: "Others", value: 4 },
];

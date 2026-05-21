import { Sidebar } from "@/components/ui/Sidebar";
import { Header } from "@/components/ui/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="pt-20 px-12 py-12 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

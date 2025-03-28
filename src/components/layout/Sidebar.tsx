
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, LineChart, PieChart, Activity, Globe, AreaChart, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Energy Production", icon: BarChart2, path: "/energy-production" },
  { title: "Energy Consumption", icon: LineChart, path: "/energy-consumption" },
  { title: "Carbon Emissions", icon: AreaChart, path: "/carbon-emissions" },
  { title: "Country Comparison", icon: Globe, path: "/country-comparison" },
  { title: "Forecasting", icon: Activity, path: "/forecasting" },
];

export function AppSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center gap-2">
        <Leaf className="w-6 h-6 text-primary" />
        <span className="font-bold text-lg">Green Energy</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={cn(
                    location.pathname === item.path && "bg-primary/10 text-primary"
                  )}>
                    <Link to={item.path}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
          Green Energy Dashboard v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="flex items-center p-4 border-b">
            <SidebarTrigger />
            <div className="ml-4">
              <h1 className="text-lg font-medium">Green Energy Dashboard</h1>
            </div>
          </div>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarLayout } from "@/components/layout/Sidebar";

// Pages
import Dashboard from "./pages/Index";
import EnergyProduction from "./pages/EnergyProduction";
import EnergyConsumption from "./pages/EnergyConsumption";
import CarbonEmissions from "./pages/CarbonEmissions";
import CountryComparison from "./pages/CountryComparison";
import Forecasting from "./pages/Forecasting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <SidebarLayout>
                <Dashboard />
              </SidebarLayout>
            } 
          />
          <Route 
            path="/energy-production" 
            element={
              <SidebarLayout>
                <EnergyProduction />
              </SidebarLayout>
            } 
          />
          <Route 
            path="/energy-consumption" 
            element={
              <SidebarLayout>
                <EnergyConsumption />
              </SidebarLayout>
            } 
          />
          <Route 
            path="/carbon-emissions" 
            element={
              <SidebarLayout>
                <CarbonEmissions />
              </SidebarLayout>
            } 
          />
          <Route 
            path="/country-comparison" 
            element={
              <SidebarLayout>
                <CountryComparison />
              </SidebarLayout>
            } 
          />
          <Route 
            path="/forecasting" 
            element={
              <SidebarLayout>
                <Forecasting />
              </SidebarLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

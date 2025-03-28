
import { useQuery } from "@tanstack/react-query";
import { fetchEnergyGenerationData } from "@/api/energyService";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { BarChart } from "@/components/charts/BarChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart2, Globe, Wind, Battery, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["energyGenerationData"],
    queryFn: fetchEnergyGenerationData,
  });

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-red-500">Error loading dashboard data</div>
      </div>
    );
  }

  // Prepare data for charts
  const renewableColors = [
    "#22c55e", // green-500
    "#16a34a", // green-600
    "#15803d", // green-700
    "#166534", // green-800
    "#14532d", // green-900
    "#1e3a8a", // blue-900
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Green Energy Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Renewable Capacity"
          value={data.keyStats.totalRenewableCapacity}
          description="Global installed capacity"
          icon={<Battery className="h-5 w-5" />}
          trend={{ value: 12.4, isPositive: true }}
        />
        <StatsCard
          title="Growth Rate"
          value={`${data.keyStats.growthRate}%`}
          description="Year-over-year increase"
          icon={<TrendingUp className="h-5 w-5" />}
          trend={{ value: 2.1, isPositive: true }}
        />
        <StatsCard
          title="CO2 Avoided"
          value={data.keyStats.co2Avoided}
          description="From renewable generation"
          icon={<Wind className="h-5 w-5" />}
          trend={{ value: 15.2, isPositive: true }}
        />
        <StatsCard
          title="Top Producer"
          value={data.keyStats.topProducer}
          description="Leading renewable energy producer"
          icon={<Globe className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <LineChart 
          title="Renewable Energy Growth (%)"
          data={data.renewablePercentage}
          xAxisDataKey="year"
          lines={[
            {
              dataKey: "percentage",
              stroke: "#16a34a",
              name: "Renewable %",
            },
          ]}
        />
        <PieChart 
          title="Global Energy Mix (2022)"
          data={data.energyMix}
          colors={renewableColors}
        />
      </div>

      <div className="mb-8">
        <AreaChart 
          title="Global Energy Generation by Source"
          data={data.globalTrends}
          xAxisDataKey="year"
          areas={[
            {
              dataKey: "wind",
              fill: "#bbf7d0",
              stroke: "#16a34a",
              name: "Wind",
            },
            {
              dataKey: "solar",
              fill: "#fef08a",
              stroke: "#ca8a04",
              name: "Solar",
            },
            {
              dataKey: "hydro",
              fill: "#bae6fd",
              stroke: "#0284c7",
              name: "Hydro",
            },
            {
              dataKey: "nuclear",
              fill: "#d8b4fe",
              stroke: "#9333ea",
              name: "Nuclear",
            },
            {
              dataKey: "coal",
              fill: "#d1d5db",
              stroke: "#4b5563",
              name: "Coal",
            },
            {
              dataKey: "gas",
              fill: "#fecaca",
              stroke: "#dc2626",
              name: "Gas",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Renewable Energy Production by Country"
          data={data.countriesData}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "wind",
              fill: "#16a34a",
              name: "Wind",
            },
            {
              dataKey: "solar",
              fill: "#ca8a04",
              name: "Solar",
            },
            {
              dataKey: "hydro",
              fill: "#0284c7",
              name: "Hydro",
            },
          ]}
        />
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Key Insights</h3>
        <ul className="list-disc list-inside space-y-2 text-green-700">
          <li>Renewable energy has grown consistently, reaching 40% of global electricity in 2022</li>
          <li>Wind and solar are the fastest-growing energy sources worldwide</li>
          <li>China leads global renewable energy production, followed by the US and Germany</li>
          <li>Coal usage is declining in most developed countries but still dominant in some regions</li>
          <li>CO2 emissions from electricity generation have plateaued and begun decreasing since 2019</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

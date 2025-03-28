
import { useQuery } from "@tanstack/react-query";
import { fetchForecastingData } from "@/api/energyService";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Calculator, TrendingUp, Zap, Globe } from "lucide-react";

const Forecasting = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["forecastingData"],
    queryFn: fetchForecastingData,
  });

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading forecasting data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-red-500">Error loading forecasting data</div>
      </div>
    );
  }

  // Transform the energy mix projection data for a grouped bar chart
  const transformedEnergyMixData = data.energyMixProjection.map(item => ({
    year: item.year.toString(),
    Wind: item.wind,
    Solar: item.solar,
    Hydro: item.hydro,
    Nuclear: item.nuclear,
    Coal: item.coal,
    Gas: item.gas
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Energy Forecasting</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Renewable Share by 2030"
          value={data.keyStats.projectedRenewableShare2030}
          description="Projected global renewable share"
          icon={<Calculator className="h-5 w-5" />}
          trend={{ value: 23, isPositive: true }}
        />
        <StatsCard
          title="Emissions Reduction"
          value={data.keyStats.emissionsReductionBy2030}
          description="Projected reduction by 2030"
          icon={<TrendingUp className="h-5 w-5" />}
          trend={{ value: 20, isPositive: true }}
        />
        <StatsCard
          title="Projected Investment"
          value={data.keyStats.projectedInvestmentBy2030}
          description="Total investment by 2030"
          icon={<Zap className="h-5 w-5" />}
          trend={{ value: 25, isPositive: true }}
        />
        <StatsCard
          title="Net Zero Countries"
          value={data.keyStats.netZeroCountries}
          description="Countries with net zero targets"
          icon={<Globe className="h-5 w-5" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <LineChart 
          title="Renewable Energy Share Projection"
          data={data.renewableProjections}
          xAxisDataKey="year"
          lines={[
            {
              dataKey: "actual",
              stroke: "#16a34a",
              name: "Actual (%)",
            },
            {
              dataKey: "projected",
              stroke: "#65a30d",
              name: "Projected (%)",
            },
          ]}
        />
        <LineChart 
          title="Carbon Emissions Projection"
          data={data.emissionsProjections}
          xAxisDataKey="year"
          lines={[
            {
              dataKey: "actual",
              stroke: "#0891b2",
              name: "Actual (GT)",
            },
            {
              dataKey: "projected",
              stroke: "#0ea5e9",
              name: "Projected (GT)",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Projected Global Energy Mix (%)"
          data={transformedEnergyMixData}
          xAxisDataKey="year"
          bars={[
            {
              dataKey: "Wind",
              fill: "#22c55e",
              name: "Wind",
            },
            {
              dataKey: "Solar",
              fill: "#eab308",
              name: "Solar",
            },
            {
              dataKey: "Hydro",
              fill: "#0ea5e9",
              name: "Hydro",
            },
            {
              dataKey: "Nuclear",
              fill: "#a855f7",
              name: "Nuclear",
            },
            {
              dataKey: "Coal",
              fill: "#64748b",
              name: "Coal",
            },
            {
              dataKey: "Gas",
              fill: "#ef4444",
              name: "Gas",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <LineChart 
          title="Projected Annual Renewable Energy Investment"
          data={data.investmentProjections}
          xAxisDataKey="year"
          lines={[
            {
              dataKey: "value",
              stroke: "#16a34a",
              name: "Investment ($B)",
            },
          ]}
        />
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Forecasting Insights</h3>
        <ul className="list-disc list-inside space-y-2 text-green-700">
          <li>Renewable energy is projected to reach 63% of global electricity generation by 2030</li>
          <li>Solar power is expected to become the largest source of renewable energy by 2035</li>
          <li>Carbon emissions from electricity generation are projected to decrease by 20% by 2030</li>
          <li>Annual investments in renewable energy are expected to double by 2030</li>
          <li>Coal usage is projected to decrease to less than 15% of global energy mix by 2035</li>
        </ul>
      </div>
    </div>
  );
};

export default Forecasting;

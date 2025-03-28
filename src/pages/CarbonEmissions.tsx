
import { useQuery } from "@tanstack/react-query";
import { fetchCarbonEmissionsData } from "@/api/energyService";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Zap, Gauge, Factory, CloudRain } from "lucide-react";

const CarbonEmissions = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carbonEmissionsData"],
    queryFn: fetchCarbonEmissionsData,
  });

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading carbon emissions data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-red-500">Error loading carbon emissions data</div>
      </div>
    );
  }

  const sectorColors = [
    "#16a34a", // Electricity
    "#ca8a04", // Transportation
    "#0284c7", // Industry
    "#9333ea", // Buildings
    "#dc2626", // Agriculture
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Carbon Emissions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Emissions"
          value={data.keyStats.totalEmissions}
          description="Global CO2 emissions in 2022"
          icon={<CloudRain className="h-5 w-5" />}
          trend={{ value: 1.4, isPositive: true }}
        />
        <StatsCard
          title="Per Capita Average"
          value={data.keyStats.perCapitaAverage}
          description="Global average per person"
          icon={<Gauge className="h-5 w-5" />}
          trend={{ value: 0.8, isPositive: true }}
        />
        <StatsCard
          title="Year-on-Year Change"
          value={`${data.keyStats.yearOnYearChange}%`}
          description="Increase from previous year"
          icon={<Zap className="h-5 w-5" />}
          trend={{ value: data.keyStats.yearOnYearChange, isPositive: true }}
        />
        <StatsCard
          title="Cumulative Emissions"
          value={data.keyStats.cumulativeEmissions}
          description="Historical CO2 emissions"
          icon={<Factory className="h-5 w-5" />}
          trend={{ value: 2.1, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <LineChart 
          title="Global Carbon Emissions Trend"
          data={data.globalEmissions}
          xAxisDataKey="year"
          lines={[
            {
              dataKey: "emissions",
              stroke: "#16a34a",
              name: "Emissions (GT)",
            },
          ]}
        />
        <PieChart 
          title="Carbon Emissions by Sector"
          data={data.sectorEmissions}
          colors={sectorColors}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Top 10 Emitting Countries"
          data={data.countryEmissions}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "emissions",
              fill: "#16a34a",
              name: "Emissions (GT)",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Emissions Intensity by Country (kg CO2/kWh)"
          data={data.emissionsIntensity}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "value",
              fill: "#059669",
              name: "Intensity (kg CO2/kWh)",
            },
          ]}
        />
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Emissions Insights</h3>
        <ul className="list-disc list-inside space-y-2 text-green-700">
          <li>Global carbon emissions increased by 1.4% in 2022 after a temporary decrease in 2020</li>
          <li>Electricity and heat production remain the largest source of emissions globally</li>
          <li>China, US, and India account for over 50% of global carbon emissions</li>
          <li>Countries with high renewable energy penetration show lower emissions intensity</li>
          <li>Per capita emissions vary significantly between developed and developing nations</li>
        </ul>
      </div>
    </div>
  );
};

export default CarbonEmissions;

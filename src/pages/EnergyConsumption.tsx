
import { useQuery } from "@tanstack/react-query";
import { fetchEnergyConsumptionData } from "@/api/energyService";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Factory, Car, Home, Building } from "lucide-react";

const EnergyConsumption = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["energyConsumptionData"],
    queryFn: fetchEnergyConsumptionData,
  });

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading energy consumption data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-red-500">Error loading energy consumption data</div>
      </div>
    );
  }

  const sectorColors = [
    "#16a34a", // Industrial
    "#ca8a04", // Transportation
    "#0284c7", // Residential
    "#9333ea", // Commercial
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Energy Consumption</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Industrial"
          value="8.5 TWh"
          description="Global consumption in 2022"
          icon={<Factory className="h-5 w-5" />}
          trend={{ value: 3.2, isPositive: true }}
        />
        <StatsCard
          title="Transportation"
          value="6.2 TWh"
          description="Global consumption in 2022"
          icon={<Car className="h-5 w-5" />}
          trend={{ value: 2.8, isPositive: true }}
        />
        <StatsCard
          title="Residential"
          value="4.3 TWh"
          description="Global consumption in 2022"
          icon={<Home className="h-5 w-5" />}
          trend={{ value: 1.5, isPositive: true }}
        />
        <StatsCard
          title="Commercial"
          value="3.8 TWh"
          description="Global consumption in 2022"
          icon={<Building className="h-5 w-5" />}
          trend={{ value: 1.9, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <LineChart 
          title="Global Energy Consumption Trend"
          data={data.globalConsumption}
          xAxisDataKey="year"
          lines={[
            {
              dataKey: "value",
              stroke: "#16a34a",
              name: "Consumption (TWh)",
            },
          ]}
        />
        <PieChart 
          title="Energy Consumption by Sector"
          data={data.sectorConsumption}
          colors={sectorColors}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Energy Consumption by Country"
          data={data.countryConsumption}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "value",
              fill: "#16a34a",
              name: "Consumption (TWh)",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Per Capita Energy Consumption (MWh)"
          data={data.perCapitaConsumption}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "value",
              fill: "#059669",
              name: "Per Capita (MWh)",
            },
          ]}
        />
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Consumption Insights</h3>
        <ul className="list-disc list-inside space-y-2 text-green-700">
          <li>Global energy consumption increased by 2.7% in 2022 compared to 2021</li>
          <li>Industrial sector remains the largest consumer of energy globally</li>
          <li>Developed countries have higher per capita consumption but slower growth rates</li>
          <li>Emerging economies show rapid growth in energy consumption</li>
          <li>The share of renewable energy in total consumption reached 28.2% in 2022</li>
        </ul>
      </div>
    </div>
  );
};

export default EnergyConsumption;

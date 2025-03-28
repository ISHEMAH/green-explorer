
import { useQuery } from "@tanstack/react-query";
import { fetchEnergyGenerationData } from "@/api/energyService";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Wind, Sun, Droplets, AtomIcon } from "lucide-react";

const EnergyProduction = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["energyGenerationData"],
    queryFn: fetchEnergyGenerationData,
  });

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading energy production data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-red-500">Error loading energy production data</div>
      </div>
    );
  }

  const renewableColors = [
    "#22c55e", // Wind
    "#eab308", // Solar
    "#0ea5e9", // Hydro
    "#a855f7", // Nuclear
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Energy Production</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Wind Energy"
          value="390 TWh"
          description="Global production in 2022"
          icon={<Wind className="h-5 w-5" />}
          trend={{ value: 5.4, isPositive: true }}
        />
        <StatsCard
          title="Solar Energy"
          value="290 TWh"
          description="Global production in 2022"
          icon={<Sun className="h-5 w-5" />}
          trend={{ value: 7.4, isPositive: true }}
        />
        <StatsCard
          title="Hydro Energy"
          value="420 TWh"
          description="Global production in 2022"
          icon={<Droplets className="h-5 w-5" />}
          trend={{ value: 2.4, isPositive: true }}
        />
        <StatsCard
          title="Nuclear Energy"
          value="325 TWh"
          description="Global production in 2022"
          icon={<AtomIcon className="h-5 w-5" />}
          trend={{ value: 1.6, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <LineChart 
          title="Renewable Energy Production Trends"
          data={data.globalTrends}
          xAxisDataKey="year"
          lines={[
            {
              dataKey: "wind",
              stroke: "#16a34a",
              name: "Wind",
            },
            {
              dataKey: "solar",
              stroke: "#ca8a04",
              name: "Solar",
            },
            {
              dataKey: "hydro",
              stroke: "#0284c7",
              name: "Hydro",
            },
            {
              dataKey: "nuclear",
              stroke: "#9333ea",
              name: "Nuclear",
            },
          ]}
        />
        <PieChart 
          title="Renewable Energy Mix (2022)"
          data={[
            { name: "Wind", value: 390 },
            { name: "Solar", value: 290 },
            { name: "Hydro", value: 420 },
            { name: "Nuclear", value: 325 },
          ]}
          colors={renewableColors}
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
            {
              dataKey: "nuclear",
              fill: "#9333ea", 
              name: "Nuclear",
            },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Production Growth Analysis</h3>
          <p className="text-green-700 mb-3">
            Wind and solar have seen the most dramatic growth in the last decade, with compound annual growth rates of 11% and 15% respectively.
          </p>
          <p className="text-green-700 mb-3">
            Hydro power remains the largest renewable energy source globally, but its growth has slowed to about 2% annually due to geographical limitations.
          </p>
          <p className="text-green-700">
            Nuclear energy has seen modest growth of 1-2% annually, with some countries phasing it out while others are investing in new plants.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Regional Leaders</h3>
          <ul className="space-y-2 text-green-700">
            <li className="flex items-center gap-2">
              <span className="font-semibold">Wind Energy:</span> China, USA, Germany
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">Solar Energy:</span> China, USA, Japan
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">Hydro Energy:</span> China, Brazil, Canada
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">Nuclear Energy:</span> USA, France, China
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnergyProduction;

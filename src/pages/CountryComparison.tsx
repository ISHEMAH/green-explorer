
import { useQuery } from "@tanstack/react-query";
import { fetchCountryComparisonData } from "@/api/energyService";
import { BarChart } from "@/components/charts/BarChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Globe, TrendingUp, BarChart2, DollarSign } from "lucide-react";

const CountryComparison = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countryComparisonData"],
    queryFn: fetchCountryComparisonData,
  });

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading country comparison data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-lg text-red-500">Error loading country comparison data</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Country Comparison</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Top Renewable Share"
          value="Norway (98.4%)"
          description="Country with highest renewable penetration"
          icon={<Globe className="h-5 w-5" />}
        />
        <StatsCard
          title="Fastest Growth"
          value="China (17.5%)"
          description="Country with fastest renewable growth"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatsCard
          title="Top Emissions Reduction"
          value="UK (34.2%)"
          description="Highest reduction since 2010"
          icon={<BarChart2 className="h-5 w-5" />}
        />
        <StatsCard
          title="Largest Investment"
          value="China ($83.4B)"
          description="Annual renewable investment"
          icon={<DollarSign className="h-5 w-5" />}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Renewable Energy Share by Country (%)"
          data={data.renewableShare}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "value",
              fill: "#16a34a",
              name: "Renewable Share (%)",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Renewable Energy Growth Rate by Country (%)"
          data={data.renewableGrowth}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "value",
              fill: "#059669",
              name: "Growth Rate (%)",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Emissions Reduction by Country (% since 2010)"
          data={data.emissionsReduction}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "value",
              fill: "#0d9488",
              name: "Emissions Reduction (%)",
            },
          ]}
        />
      </div>

      <div className="mb-8">
        <BarChart 
          title="Annual Renewable Energy Investment by Country ($B)"
          data={data.investmentData}
          xAxisDataKey="country"
          bars={[
            {
              dataKey: "value",
              fill: "#0891b2",
              name: "Investment ($B)",
            },
          ]}
        />
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Country Comparison Insights</h3>
        <ul className="list-disc list-inside space-y-2 text-green-700">
          <li>Nordic countries lead in renewable energy share, with Norway, Iceland and Sweden at the top</li>
          <li>China is investing the most in renewable energy in absolute terms, followed by the US</li>
          <li>European countries have achieved the highest emissions reductions since 2010</li>
          <li>Developing economies are showing the fastest growth rates in renewable installations</li>
          <li>Countries with strong policy frameworks show better progress toward energy transition</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryComparison;


// API endpoints to fetch energy and climate data
// We'll use the Ember API for energy data

// Base URLs for different APIs
const EMBER_API_URL = "https://ember-climate.org/api/data-catalogue";
const CARBON_API_URL = "https://www.carboninterface.com/api/v1";

// Fetch energy generation data from Ember API
export async function fetchEnergyGenerationData() {
  try {
    const response = await fetch(
      `${EMBER_API_URL}/yearly-electricity-data`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch energy generation data");
    }
    const data = await response.json();
    return processEnergyData(data);
  } catch (error) {
    console.error("Error fetching energy generation data:", error);
    return getMockEnergyGenerationData();
  }
}

// Fetch carbon emissions data
export async function fetchCarbonEmissionsData() {
  try {
    // In a real implementation, we would use the actual API
    // For now, we'll use mock data
    return getMockCarbonEmissionsData();
  } catch (error) {
    console.error("Error fetching carbon emissions data:", error);
    return getMockCarbonEmissionsData();
  }
}

// Fetch energy consumption data
export async function fetchEnergyConsumptionData() {
  try {
    // In a real implementation, we would use the actual API
    // For now, we'll use mock data
    return getMockEnergyConsumptionData();
  } catch (error) {
    console.error("Error fetching energy consumption data:", error);
    return getMockEnergyConsumptionData();
  }
}

// Fetch country comparison data
export async function fetchCountryComparisonData() {
  try {
    // In a real implementation, we would use the actual API
    // For now, we'll use mock data
    return getMockCountryComparisonData();
  } catch (error) {
    console.error("Error fetching country comparison data:", error);
    return getMockCountryComparisonData();
  }
}

// Fetch forecasting data
export async function fetchForecastingData() {
  try {
    // In a real implementation, we would use the actual API
    // For now, we'll use mock data
    return getMockForecastingData();
  } catch (error) {
    console.error("Error fetching forecasting data:", error);
    return getMockForecastingData();
  }
}

// Helper function to process energy data
function processEnergyData(data: any) {
  // In a real implementation, we would process the actual data
  // For now, we'll use mock data
  return getMockEnergyGenerationData();
}

// Mock data functions
function getMockEnergyGenerationData() {
  return {
    globalTrends: [
      { year: 2010, wind: 150, solar: 50, hydro: 300, nuclear: 250, coal: 450, gas: 350 },
      { year: 2011, wind: 170, solar: 70, hydro: 310, nuclear: 260, coal: 430, gas: 360 },
      { year: 2012, wind: 190, solar: 90, hydro: 320, nuclear: 270, coal: 410, gas: 370 },
      { year: 2013, wind: 210, solar: 110, hydro: 330, nuclear: 280, coal: 400, gas: 380 },
      { year: 2014, wind: 230, solar: 130, hydro: 340, nuclear: 285, coal: 390, gas: 385 },
      { year: 2015, wind: 250, solar: 150, hydro: 350, nuclear: 290, coal: 380, gas: 390 },
      { year: 2016, wind: 270, solar: 170, hydro: 360, nuclear: 295, coal: 370, gas: 395 },
      { year: 2017, wind: 290, solar: 190, hydro: 370, nuclear: 300, coal: 360, gas: 400 },
      { year: 2018, wind: 310, solar: 210, hydro: 380, nuclear: 305, coal: 350, gas: 405 },
      { year: 2019, wind: 330, solar: 230, hydro: 390, nuclear: 310, coal: 340, gas: 410 },
      { year: 2020, wind: 350, solar: 250, hydro: 400, nuclear: 315, coal: 330, gas: 415 },
      { year: 2021, wind: 370, solar: 270, hydro: 410, nuclear: 320, coal: 320, gas: 420 },
      { year: 2022, wind: 390, solar: 290, hydro: 420, nuclear: 325, coal: 310, gas: 425 }
    ],
    renewablePercentage: [
      { year: 2010, percentage: 18 },
      { year: 2011, percentage: 19 },
      { year: 2012, percentage: 21 },
      { year: 2013, percentage: 22 },
      { year: 2014, percentage: 24 },
      { year: 2015, percentage: 26 },
      { year: 2016, percentage: 28 },
      { year: 2017, percentage: 30 },
      { year: 2018, percentage: 32 },
      { year: 2019, percentage: 34 },
      { year: 2020, percentage: 36 },
      { year: 2021, percentage: 38 },
      { year: 2022, percentage: 40 }
    ],
    energyMix: [
      { name: "Wind", value: 390 },
      { name: "Solar", value: 290 },
      { name: "Hydro", value: 420 },
      { name: "Nuclear", value: 325 },
      { name: "Coal", value: 310 },
      { name: "Gas", value: 425 }
    ],
    countriesData: [
      { country: "China", wind: 210, solar: 150, hydro: 220, nuclear: 100, coal: 200, gas: 120 },
      { country: "USA", wind: 180, solar: 120, hydro: 100, nuclear: 90, coal: 110, gas: 170 },
      { country: "Germany", wind: 120, solar: 90, hydro: 40, nuclear: 60, coal: 70, gas: 80 },
      { country: "India", wind: 90, solar: 70, hydro: 80, nuclear: 40, coal: 150, gas: 70 },
      { country: "Brazil", wind: 70, solar: 50, hydro: 120, nuclear: 20, coal: 40, gas: 60 }
    ],
    keyStats: {
      totalRenewableCapacity: "1.1 TW",
      growthRate: 12.8,
      co2Avoided: "2.1 GT",
      topProducer: "China"
    }
  };
}

function getMockCarbonEmissionsData() {
  return {
    globalEmissions: [
      { year: 2010, emissions: 33.1 },
      { year: 2011, emissions: 34.2 },
      { year: 2012, emissions: 34.9 },
      { year: 2013, emissions: 35.3 },
      { year: 2014, emissions: 35.5 },
      { year: 2015, emissions: 35.6 },
      { year: 2016, emissions: 35.4 },
      { year: 2017, emissions: 35.8 },
      { year: 2018, emissions: 36.3 },
      { year: 2019, emissions: 36.7 },
      { year: 2020, emissions: 34.8 },
      { year: 2021, emissions: 36.3 },
      { year: 2022, emissions: 36.8 }
    ],
    sectorEmissions: [
      { name: "Electricity", value: 13.6 },
      { name: "Transportation", value: 7.8 },
      { name: "Industry", value: 6.9 },
      { name: "Buildings", value: 3.1 },
      { name: "Agriculture", value: 5.4 }
    ],
    countryEmissions: [
      { country: "China", emissions: 10.7 },
      { country: "USA", emissions: 5.3 },
      { country: "India", emissions: 2.7 },
      { country: "Russia", emissions: 1.8 },
      { country: "Japan", emissions: 1.2 },
      { country: "Germany", emissions: 0.8 },
      { country: "Iran", emissions: 0.8 },
      { country: "Saudi Arabia", emissions: 0.6 },
      { country: "South Korea", emissions: 0.6 },
      { country: "Canada", emissions: 0.6 }
    ],
    emissionsIntensity: [
      { country: "China", value: 0.59 },
      { country: "USA", value: 0.38 },
      { country: "India", value: 0.71 },
      { country: "Russia", value: 0.65 },
      { country: "Japan", value: 0.42 },
      { country: "Germany", value: 0.35 },
      { country: "UK", value: 0.26 },
      { country: "France", value: 0.18 },
      { country: "Brazil", value: 0.21 },
      { country: "Canada", value: 0.33 }
    ],
    keyStats: {
      totalEmissions: "36.8 GT",
      perCapitaAverage: "4.7 tons",
      yearOnYearChange: 1.4,
      cumulativeEmissions: "1.6 trillion tons"
    }
  };
}

function getMockEnergyConsumptionData() {
  return {
    globalConsumption: [
      { year: 2010, value: 18.6 },
      { year: 2011, value: 19.1 },
      { year: 2012, value: 19.5 },
      { year: 2013, value: 19.9 },
      { year: 2014, value: 20.2 },
      { year: 2015, value: 20.5 },
      { year: 2016, value: 20.8 },
      { year: 2017, value: 21.2 },
      { year: 2018, value: 21.7 },
      { year: 2019, value: 22.0 },
      { year: 2020, value: 21.4 },
      { year: 2021, value: 22.2 },
      { year: 2022, value: 22.8 }
    ],
    sectorConsumption: [
      { name: "Industrial", value: 8.5 },
      { name: "Transportation", value: 6.2 },
      { name: "Residential", value: 4.3 },
      { name: "Commercial", value: 3.8 }
    ],
    countryConsumption: [
      { country: "China", value: 5.7 },
      { country: "USA", value: 3.4 },
      { country: "India", value: 1.8 },
      { country: "Russia", value: 1.0 },
      { country: "Japan", value: 0.9 },
      { country: "Germany", value: 0.7 },
      { country: "Canada", value: 0.5 },
      { country: "Brazil", value: 0.5 },
      { country: "South Korea", value: 0.5 },
      { country: "France", value: 0.4 }
    ],
    perCapitaConsumption: [
      { country: "Canada", value: 13.2 },
      { country: "USA", value: 10.3 },
      { country: "Russia", value: 6.9 },
      { country: "South Korea", value: 9.7 },
      { country: "Germany", value: 8.4 },
      { country: "Japan", value: 7.2 },
      { country: "China", value: 4.1 },
      { country: "Brazil", value: 2.3 },
      { country: "India", value: 1.3 }
    ],
    keyStats: {
      totalConsumption: "22.8 TWh",
      growthRate: 2.7,
      perCapitaAverage: "2.9 MWh",
      renewableShare: "28.2%"
    }
  };
}

function getMockCountryComparisonData() {
  return {
    renewableShare: [
      { country: "Norway", value: 98.4 },
      { country: "Brazil", value: 84.1 },
      { country: "New Zealand", value: 81.7 },
      { country: "Canada", value: 68.5 },
      { country: "Sweden", value: 67.2 },
      { country: "Denmark", value: 65.3 },
      { country: "Portugal", value: 63.7 },
      { country: "Germany", value: 46.2 },
      { country: "UK", value: 43.1 },
      { country: "Spain", value: 42.8 },
      { country: "China", value: 28.3 },
      { country: "USA", value: 21.1 },
      { country: "Japan", value: 20.3 },
      { country: "India", value: 19.4 },
      { country: "Russia", value: 18.7 }
    ],
    renewableGrowth: [
      { country: "China", value: 17.5 },
      { country: "India", value: 15.2 },
      { country: "USA", value: 12.6 },
      { country: "Brazil", value: 10.4 },
      { country: "Japan", value: 9.8 },
      { country: "Germany", value: 9.3 },
      { country: "UK", value: 8.7 },
      { country: "Australia", value: 8.5 },
      { country: "France", value: 7.2 },
      { country: "Canada", value: 5.4 }
    ],
    emissionsReduction: [
      { country: "UK", value: 34.2 },
      { country: "Denmark", value: 32.1 },
      { country: "Germany", value: 27.3 },
      { country: "Sweden", value: 25.6 },
      { country: "France", value: 21.7 },
      { country: "Italy", value: 19.4 },
      { country: "USA", value: 12.5 },
      { country: "Japan", value: 11.3 },
      { country: "Canada", value: 9.8 },
      { country: "Australia", value: 7.2 },
      { country: "China", value: 4.1 },
      { country: "India", value: 2.8 },
      { country: "Russia", value: 2.1 }
    ],
    investmentData: [
      { country: "China", value: 83.4 },
      { country: "USA", value: 48.5 },
      { country: "Germany", value: 24.6 },
      { country: "UK", value: 18.7 },
      { country: "Japan", value: 16.5 },
      { country: "India", value: 15.3 },
      { country: "France", value: 12.4 },
      { country: "Brazil", value: 11.8 },
      { country: "Australia", value: 9.5 },
      { country: "Spain", value: 8.7 }
    ]
  };
}

function getMockForecastingData() {
  return {
    renewableProjections: [
      { year: 2022, actual: 40, projected: 40 },
      { year: 2023, actual: 42, projected: 42 },
      { year: 2024, projected: 45 },
      { year: 2025, projected: 48 },
      { year: 2026, projected: 51 },
      { year: 2027, projected: 54 },
      { year: 2028, projected: 57 },
      { year: 2029, projected: 60 },
      { year: 2030, projected: 63 },
      { year: 2031, projected: 66 },
      { year: 2032, projected: 69 },
      { year: 2033, projected: 72 },
      { year: 2034, projected: 75 },
      { year: 2035, projected: 78 }
    ],
    emissionsProjections: [
      { year: 2022, actual: 36.8, projected: 36.8 },
      { year: 2023, actual: 37.0, projected: 37.0 },
      { year: 2024, projected: 36.5 },
      { year: 2025, projected: 35.8 },
      { year: 2026, projected: 34.9 },
      { year: 2027, projected: 33.8 },
      { year: 2028, projected: 32.5 },
      { year: 2029, projected: 31.0 },
      { year: 2030, projected: 29.4 },
      { year: 2031, projected: 27.6 },
      { year: 2032, projected: 25.7 },
      { year: 2033, projected: 23.6 },
      { year: 2034, projected: 21.4 },
      { year: 2035, projected: 19.0 }
    ],
    energyMixProjection: [
      { year: 2022, wind: 10, solar: 8, hydro: 16, nuclear: 10, coal: 35, gas: 21 },
      { year: 2025, wind: 13, solar: 12, hydro: 17, nuclear: 10, coal: 29, gas: 19 },
      { year: 2030, wind: 18, solar: 18, hydro: 18, nuclear: 9, coal: 22, gas: 15 },
      { year: 2035, wind: 23, solar: 26, hydro: 19, nuclear: 8, coal: 14, gas: 10 }
    ],
    investmentProjections: [
      { year: 2022, value: 310 },
      { year: 2023, value: 340 },
      { year: 2024, value: 375 },
      { year: 2025, value: 410 },
      { year: 2026, value: 450 },
      { year: 2027, value: 495 },
      { year: 2028, value: 545 },
      { year: 2029, value: 600 },
      { year: 2030, value: 660 }
    ],
    keyStats: {
      projectedRenewableShare2030: "63%",
      emissionsReductionBy2030: "20%",
      projectedInvestmentBy2030: "$4.3 trillion",
      netZeroCountries: 32
    }
  };
}

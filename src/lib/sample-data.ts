// Proply Real Estate Dataset & Model Feature Definitions

export interface PropertyFormInputs {
  // Location & Property Details
  neighborhood: string;
  overallQual: number;
  overallCond: number;
  yearBuilt: number;
  houseStyle: string;

  // Building Information
  bldgType: string;
  foundation: string;
  exterior1st: string;
  heating: string;
  centralAir: string;

  // Area & Rooms
  grLivArea: number;
  lotArea: number;
  bedroomAbvGr: number;
  fullBath: number;
  halfBath: number;
  totRmsAbvGrd: number;

  // Garage & Basement Details
  totalBsmtSF: number;
  bsmtFinType1: string;
  garageCars: number;
  garageArea: number;
  garageType: string;
}

export const DEFAULT_PROPERTY_INPUTS: PropertyFormInputs = {
  neighborhood: "CollgCr",
  overallQual: 7,
  overallCond: 5,
  yearBuilt: 2003,
  houseStyle: "2Story",
  bldgType: "1Fam",
  foundation: "PConc",
  exterior1st: "VinylSd",
  heating: "GasA",
  centralAir: "Y",
  grLivArea: 1710,
  lotArea: 8450,
  bedroomAbvGr: 3,
  fullBath: 2,
  halfBath: 1,
  totRmsAbvGrd: 7,
  totalBsmtSF: 856,
  bsmtFinType1: "GLQ",
  garageCars: 2,
  garageArea: 548,
  garageType: "Attchd",
};

export const NEIGHBORHOOD_OPTIONS = [
  { value: "CollgCr", label: "College Creek", multiplier: 1.12 },
  { value: "Veenker", label: "Veenker Ridge", multiplier: 1.25 },
  { value: "Crawfor", label: "Crawford Heights", multiplier: 1.18 },
  { value: "NoRidge", label: "Northridge", multiplier: 1.35 },
  { value: "Mitchel", label: "Mitchell Estates", multiplier: 0.95 },
  { value: "Somerst", label: "Somerset Park", multiplier: 1.22 },
  { value: "NWAmes", label: "Northwest Ames", multiplier: 1.05 },
  { value: "OldTown", label: "Old Town District", multiplier: 0.85 },
  { value: "Edwards", label: "Edwards Sector", multiplier: 0.88 },
  { value: "Sawyer", label: "Sawyer Suburb", multiplier: 0.92 },
];

export const HOUSE_STYLE_OPTIONS = [
  { value: "1Story", label: "1-Story Ranch / Bungalow" },
  { value: "2Story", label: "2-Story Executive" },
  { value: "1.5Fin", label: "1.5-Story Finished" },
  { value: "SFoyer", label: "Split Foyer" },
  { value: "SLvl", label: "Split Level" },
];

export const BUILDING_TYPE_OPTIONS = [
  { value: "1Fam", label: "Single Family Detached" },
  { value: "2fmCon", label: "Two-Family Conversion" },
  { value: "Duplex", label: "Duplex Residence" },
  { value: "TwnhsE", label: "Townhouse End Unit" },
  { value: "Twnhs", label: "Townhouse Inside Unit" },
];

export const FOUNDATION_OPTIONS = [
  { value: "PConc", label: "Poured Concrete" },
  { value: "CBlock", label: "Cinder Block" },
  { value: "BrkTil", label: "Brick & Tile" },
  { value: "Slab", label: "Concrete Slab" },
  { value: "Stone", label: "Natural Stone" },
];

export const EXTERIOR_OPTIONS = [
  { value: "VinylSd", label: "Vinyl Siding" },
  { value: "HdBoard", label: "Hardboard Siding" },
  { value: "Wd Sdng", label: "Wood Siding" },
  { value: "MetalSd", label: "Metal Siding" },
  { value: "CemntBd", label: "Cement Board / Fibered" },
  { value: "BrkFace", label: "Brick Face" },
];

export const BASEMENT_FINISH_OPTIONS = [
  { value: "GLQ", label: "Good Living Quarters" },
  { value: "ALQ", label: "Average Living Quarters" },
  { value: "BLQ", label: "Below Average Rec Room" },
  { value: "Rec", label: "Average Rec Room" },
  { value: "LwQ", label: "Low Quality Living" },
  { value: "Unf", label: "Unfinished Space" },
];

export const GARAGE_TYPE_OPTIONS = [
  { value: "Attchd", label: "Attached to Home" },
  { value: "Detchd", label: "Detached Structure" },
  { value: "BuiltIn", label: "Built-In (Part of House)" },
  { value: "Basment", label: "Basement Level Garage" },
  { value: "None", label: "No Garage Facility" },
];

// Helper to format currency in Indian Rupees (₹)
export function formatINR(amount: number): string {
  if (isNaN(amount) || amount === 0) return "₹ 0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format numbers into Lakhs / Crores for Indian context
export function formatINRLakhsCrores(amount: number): string {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `₹ ${crores.toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `₹ ${lakhs.toFixed(2)} Lakhs`;
  }
  return formatINR(amount);
}

// Client-side valuation model estimation formula (used as interactive demo fallback before backend connection)
export function calculateClientValuation(inputs: PropertyFormInputs): {
  estimatedPriceINR: number;
  priceRangeMinINR: number;
  priceRangeMaxINR: number;
  pricePerSqFtINR: number;
  topDrivers: { feature: string; impactPercent: number; direction: "positive" | "negative" }[];
} {
  // Base valuation in USD converted to INR at ~85 INR/USD rate benchmark
  const USD_TO_INR = 85;

  // Linear / Ridge weight coefficients inspired by Ames Housing Random Forest Feature Importance weights
  let basePriceUSD = 45000;

  // Living Area: ~$72 per sq ft
  basePriceUSD += inputs.grLivArea * 72;

  // Overall Quality rating (1-10): exponential curve
  basePriceUSD += Math.pow(inputs.overallQual, 2.3) * 1800;

  // Overall Condition
  basePriceUSD += (inputs.overallCond - 5) * 2500;

  // Basement SF: ~$38 per sq ft
  basePriceUSD += inputs.totalBsmtSF * 38;

  // Garage Area & Capacity
  basePriceUSD += inputs.garageCars * 9000 + inputs.garageArea * 25;

  // Year Built: Age penalty / appreciation
  const currentYear = new Date().getFullYear();
  const age = Math.max(0, currentYear - inputs.yearBuilt);
  basePriceUSD += Math.max(-30000, (100 - age) * 450);

  // Bathrooms
  basePriceUSD += inputs.fullBath * 8500 + inputs.halfBath * 4200;

  // Lot Area factor
  basePriceUSD += Math.min(25000, inputs.lotArea * 1.8);

  // Neighborhood multiplier
  const nbrhdObj = NEIGHBORHOOD_OPTIONS.find((n) => n.value === inputs.neighborhood);
  const nbrhdMultiplier = nbrhdObj ? nbrhdObj.multiplier : 1.0;
  basePriceUSD *= nbrhdMultiplier;

  // Central Air
  if (inputs.centralAir === "Y") basePriceUSD += 6500;

  const estimatedPriceINR = Math.round(basePriceUSD * USD_TO_INR);
  const priceRangeMinINR = Math.round(estimatedPriceINR * 0.94);
  const priceRangeMaxINR = Math.round(estimatedPriceINR * 1.06);
  const pricePerSqFtINR = Math.round(estimatedPriceINR / (inputs.grLivArea || 1));

  // Feature Drivers
  const topDrivers = [
    {
      feature: `Overall Quality Rating (${inputs.overallQual}/10)`,
      impactPercent: Math.round(28 + inputs.overallQual * 1.2),
      direction: "positive" as const,
    },
    {
      feature: `Living Area (${inputs.grLivArea.toLocaleString()} sq.ft.)`,
      impactPercent: Math.round(24 + (inputs.grLivArea / 300)),
      direction: "positive" as const,
    },
    {
      feature: `Location: ${nbrhdObj?.label || inputs.neighborhood}`,
      impactPercent: Math.round(18 * nbrhdMultiplier),
      direction: nbrhdMultiplier >= 1.0 ? ("positive" as const) : ("negative" as const),
    },
    {
      feature: `Basement & Garage (${inputs.totalBsmtSF} sq.ft bsmt, ${inputs.garageCars} car garage)`,
      impactPercent: 14,
      direction: "positive" as const,
    },
  ];

  return {
    estimatedPriceINR,
    priceRangeMinINR,
    priceRangeMaxINR,
    pricePerSqFtINR,
    topDrivers,
  };
}

// Analytics Benchmark Demo Data
export const ANALYTICS_DEMO_DATA = {
  stats: {
    totalProperties: 1460,
    averagePriceINR: 15385000, // ₹ 1.53 Crore
    medianPriceINR: 13850000,  // ₹ 1.38 Crore
    maxPriceINR: 64175000,     // ₹ 6.41 Crore
  },

  priceDistribution: [
    { priceBracket: "< ₹50L", count: 42 },
    { priceBracket: "₹50L - ₹1Cr", count: 320 },
    { priceBracket: "₹1Cr - ₹1.5Cr", count: 540 },
    { priceBracket: "₹1.5Cr - ₹2.5Cr", count: 380 },
    { priceBracket: "₹2.5Cr - ₹4Cr", count: 145 },
    { priceBracket: "> ₹4Cr", count: 33 },
  ],

  priceByQuality: [
    { quality: "Q1 - Very Poor", avgPriceINR: 4250000 },
    { quality: "Q2 - Poor", avgPriceINR: 5100000 },
    { quality: "Q3 - Fair", avgPriceINR: 7400000 },
    { quality: "Q4 - Below Avg", avgPriceINR: 9200000 },
    { quality: "Q5 - Average", avgPriceINR: 11350000 },
    { quality: "Q6 - Above Avg", avgPriceINR: 13770000 },
    { quality: "Q7 - Good", avgPriceINR: 17680000 },
    { quality: "Q8 - Very Good", avgPriceINR: 23375000 },
    { quality: "Q9 - Excellent", avgPriceINR: 31200000 },
    { quality: "Q10 - Very Excellent", avgPriceINR: 37060000 },
  ],

  livingAreaScatterSample: [
    { grLivArea: 854, priceINR: 9137500, quality: 5 },
    { grLivArea: 1262, priceINR: 15427500, quality: 6 },
    { grLivArea: 1786, priceINR: 18997500, quality: 7 },
    { grLivArea: 1717, priceINR: 18487500, quality: 7 },
    { grLivArea: 2198, priceINR: 21250000, quality: 8 },
    { grLivArea: 1362, priceINR: 12155000, quality: 5 },
    { grLivArea: 1694, priceINR: 26095000, quality: 8 },
    { grLivArea: 2090, priceINR: 17000000, quality: 7 },
    { grLivArea: 1774, priceINR: 11041500, quality: 7 },
    { grLivArea: 1077, priceINR: 10030000, quality: 5 },
    { grLivArea: 1040, priceINR: 10965000, quality: 5 },
    { grLivArea: 2324, priceINR: 29325000, quality: 9 },
    { grLivArea: 912, priceINR: 12240000, quality: 5 },
    { grLivArea: 1494, priceINR: 23715000, quality: 7 },
    { grLivArea: 1253, priceINR: 13345000, quality: 6 },
    { grLivArea: 854, priceINR: 11220000, quality: 5 },
    { grLivArea: 1004, priceINR: 12665000, quality: 6 },
    { grLivArea: 1296, priceINR: 7650000, quality: 4 },
    { grLivArea: 1114, priceINR: 13515000, quality: 5 },
    { grLivArea: 1339, priceINR: 11815000, quality: 5 },
    { grLivArea: 4316, priceINR: 64175000, quality: 10 },
  ],

  priceByNeighborhood: [
    { neighborhood: "Northridge Heights", medianPriceINR: 26775000 },
    { neighborhood: "NoRidge", medianPriceINR: 25627500 },
    { neighborhood: "Stone Brook", medianPriceINR: 26350000 },
    { neighborhood: "Timberland", medianPriceINR: 19422500 },
    { neighborhood: "Veenker", medianPriceINR: 21037500 },
    { neighborhood: "Somerset", medianPriceINR: 19125000 },
    { neighborhood: "Crawford", medianPriceINR: 17892500 },
    { neighborhood: "College Creek", medianPriceINR: 16830000 },
    { neighborhood: "Gilbert", medianPriceINR: 15385000 },
    { neighborhood: "Northwest Ames", medianPriceINR: 13600000 },
    { neighborhood: "Old Town", medianPriceINR: 10115000 },
    { neighborhood: "Edwards", medianPriceINR: 10327500 },
  ],

  featureImportances: [
    { feature: "Overall Quality (OverallQual)", weightPercent: 32.4 },
    { feature: "Living Area (GrLivArea)", weightPercent: 24.1 },
    { feature: "Total Basement (TotalBsmtSF)", weightPercent: 12.8 },
    { feature: "Garage Capacity (GarageCars)", weightPercent: 8.5 },
    { feature: "Year Built (YearBuilt)", weightPercent: 7.2 },
    { feature: "Garage Area (GarageArea)", weightPercent: 5.6 },
    { feature: "Full Bathrooms (FullBath)", weightPercent: 4.8 },
    { feature: "Lot Area (LotArea)", weightPercent: 4.6 },
  ],
};

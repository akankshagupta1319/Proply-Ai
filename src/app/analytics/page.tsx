import React from "react";

import { BarChart3, AlertCircle, Database } from "lucide-react";

import { ChartsContainer } from "@/components/analytics/charts-container";
import { StatCards } from "@/components/analytics/stat-cards";

export const metadata = {
  title: "Real Estate Analytics",
  description: "Explore real estate pricing distributions, quality metrics, neighborhood benchmarks, and machine learning feature importances.",
};

export default function AnalyticsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-8 sm:py-12 space-y-10">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/60">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142D28]/10 text-[#142D28] dark:bg-[#B9F27C]/15 dark:text-[#B9F27C] text-xs font-semibold">
            <BarChart3 className="size-3.5" />
            <span>Market & Model Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
            Property Market Analytics
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Interactive breakdown of Ames housing dataset benchmarks, structural valuation trends, and feature importance weights.
          </p>
        </div>

        {/* Demo Data Notice Tag */}
        <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs shrink-0 font-medium">
          <AlertCircle className="size-4 shrink-0" />
          <div>
            <strong className="block font-bold">DEMO DATA NOTICE</strong>
            <span>Sourced from Ames Real Estate Dataset</span>
          </div>
        </div>
      </div>

      {/* Metric Stat Cards */}
      <StatCards />

      {/* Interactive Charts Dashboard */}
      <ChartsContainer />

      {/* Dataset & Methodology Disclaimer Footer */}
      <div className="p-6 rounded-3xl bg-muted/40 border border-border/60 space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <Database className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
          <span>Analytics Methodology & Data Standard</span>
        </div>
        <p className="leading-relaxed">
          The visual analytics dashboard displays sample data benchmarked from the Ames Real Estate Dataset (1,460 property observations, 79 explanatory features). Price metrics are converted to Indian Rupees (₹) for demonstration. Actual model metrics and metrics output will update dynamically upon connecting your live Python FastAPI backend.
        </p>
      </div>
    </div>
  );
}

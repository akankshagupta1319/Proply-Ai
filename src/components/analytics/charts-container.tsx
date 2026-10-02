"use client";

import React from "react";

import {
  BarChart3,
  Cpu,
  Layers,
  MapPin,
  ScatterChart as ScatterIcon,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ANALYTICS_DEMO_DATA, formatINRLakhsCrores } from "@/lib/sample-data";

export function ChartsContainer() {
  const {
    priceDistribution,
    priceByQuality,
    livingAreaScatterSample,
    priceByNeighborhood,
    featureImportances,
  } = ANALYTICS_DEMO_DATA;

  return (
    <div className="space-y-8">
      {/* Grid Row 1: Sale Price Distribution & Average Price by Quality */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Chart 1: Sale Price Distribution */}
        <div className="space-y-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-5 text-[#142D28] dark:text-[#B9F27C]" />
              <h3 className="font-display text-base font-bold text-foreground">
                Sale Price Distribution
              </h3>
            </div>
            <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Distribution of property counts across valuation brackets in Indian
            Rupees (₹).
          </p>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={priceDistribution}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                  opacity={0.5}
                />
                <XAxis
                  dataKey="priceBracket"
                  tick={{ fontSize: 11 }}
                  stroke="#8A938D"
                />
                <YAxis tick={{ fontSize: 11 }} stroke="#8A938D" />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any) => [`${value} Properties`, "Count"]}
                  contentStyle={{
                    backgroundColor: "#142D28",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="count" fill="#142D28" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Average Price by Quality */}
        <div className="space-y-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="size-5 text-[#142D28] dark:text-[#B9F27C]" />
              <h3 className="font-display text-base font-bold text-foreground">
                Average Price by Overall Quality
              </h3>
            </div>
            <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Relationship between structural rating (1-10) and average sale
            price.
          </p>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={priceByQuality}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                  opacity={0.5}
                />
                <XAxis
                  dataKey="quality"
                  tick={{ fontSize: 10 }}
                  stroke="#8A938D"
                />
                <YAxis
                  tickFormatter={(val) => `₹${(val / 10000000).toFixed(1)}Cr`}
                  tick={{ fontSize: 11 }}
                  stroke="#8A938D"
                />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any) => [
                    formatINRLakhsCrores(Number(value)),
                    "Avg Price",
                  ]}
                  contentStyle={{
                    backgroundColor: "#142D28",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="avgPriceINR"
                  fill="#3A6351"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Grid Row 2: Living Area vs Sale Price Scatter & Price by Neighborhood */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Chart 3: Living Area vs Sale Price Scatter Plot */}
        <div className="space-y-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2">
              <ScatterIcon className="size-5 text-[#142D28] dark:text-[#B9F27C]" />
              <h3 className="font-display text-base font-bold text-foreground">
                Living Area vs. Sale Price
              </h3>
            </div>
            <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Scatter distribution comparing above grade living sq.ft against
            valuation.
          </p>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                  opacity={0.5}
                />
                <XAxis
                  type="number"
                  dataKey="grLivArea"
                  name="Living Area"
                  unit=" sq.ft"
                  stroke="#8A938D"
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  type="number"
                  dataKey="priceINR"
                  name="Price"
                  tickFormatter={(val) => `₹${(val / 10000000).toFixed(1)}Cr`}
                  stroke="#8A938D"
                  tick={{ fontSize: 11 }}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any, name: any) => [
                    name === "Price"
                      ? formatINRLakhsCrores(Number(value))
                      : `${value} sq.ft`,
                    name,
                  ]}
                  contentStyle={{
                    backgroundColor: "#142D28",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Scatter
                  name="Properties"
                  data={livingAreaScatterSample}
                  fill="#B9F27C"
                >
                  {livingAreaScatterSample.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.quality >= 8 ? "#142D28" : "#A8C5A0"}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Price by Neighborhood */}
        <div className="space-y-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-[#142D28] dark:text-[#B9F27C]" />
              <h3 className="font-display text-base font-bold text-foreground">
                Median Price by Neighborhood
              </h3>
            </div>
            <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Neighborhood price rankings based on median historical property
            valuations.
          </p>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={priceByNeighborhood}
                layout="vertical"
                margin={{ top: 5, right: 10, left: 40, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#e5e7eb"
                  opacity={0.5}
                />
                <XAxis
                  type="number"
                  tickFormatter={(val) => `₹${(val / 10000000).toFixed(1)}Cr`}
                  stroke="#8A938D"
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  dataKey="neighborhood"
                  type="category"
                  tick={{ fontSize: 10 }}
                  stroke="#8A938D"
                  width={100}
                />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any) => [
                    formatINRLakhsCrores(Number(value)),
                    "Median Price",
                  ]}
                  contentStyle={{
                    backgroundColor: "#142D28",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="medianPriceINR"
                  fill="#A8C5A0"
                  radius={[0, 8, 8, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 3: Random Forest Feature Importance Rankings */}
      <div className="space-y-6 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between border-b border-border/50 pb-3">
          <div className="flex items-center gap-2.5">
            <Cpu className="size-6 text-[#142D28] dark:text-[#B9F27C]" />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Random Forest Feature Importance Weights
              </h3>
              <p className="text-xs text-muted-foreground">
                Relative influence score of property features extracted from
                model ensemble trees.
              </p>
            </div>
          </div>
          <span className="rounded bg-[#142D28]/10 px-2.5 py-1 font-mono text-[10px] font-bold text-[#142D28] dark:bg-[#B9F27C]/15 dark:text-[#B9F27C]">
            MODEL ANALYTICS
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featureImportances.map((item, idx) => (
            <div
              key={idx}
              className="space-y-1.5 rounded-2xl border border-border/40 bg-muted/40 p-3"
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-foreground">{item.feature}</span>
                <span className="font-mono font-bold text-[#142D28] dark:text-[#B9F27C]">
                  {item.weightPercent}%
                </span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#142D28] to-[#A8C5A0] transition-all duration-500 dark:from-[#B9F27C] dark:to-[#A8C5A0]"
                  style={{ width: `${item.weightPercent * 2.8}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

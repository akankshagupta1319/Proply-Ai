import React from "react";

import { Building2, TrendingUp, DollarSign, Award } from "lucide-react";

import { ANALYTICS_DEMO_DATA, formatINRLakhsCrores } from "@/lib/sample-data";

export function StatCards() {
  const { stats } = ANALYTICS_DEMO_DATA;

  const cardItems = [
    {
      title: "Total Properties Analyzed",
      value: stats.totalProperties.toLocaleString(),
      subtitle: "Ames Real Estate Dataset Benchmark",
      icon: Building2,
      color: "text-[#142D28] dark:text-[#B9F27C]",
    },
    {
      title: "Average Sale Price",
      value: formatINRLakhsCrores(stats.averagePriceINR),
      subtitle: "₹ 1,53,85,000 Mean Valuation",
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Median Sale Price",
      value: formatINRLakhsCrores(stats.medianPriceINR),
      subtitle: "₹ 1,38,50,000 50th Percentile",
      icon: DollarSign,
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Maximum Sale Price",
      value: formatINRLakhsCrores(stats.maxPriceINR),
      subtitle: "₹ 6,41,75,000 Peak Property Value",
      icon: Award,
      color: "text-[#142D28] dark:text-[#B9F27C]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardItems.map((item, idx) => {
        const IconComp = item.icon;
        return (
          <div
            key={idx}
            className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {item.title}
              </span>
              <div className={`p-2.5 rounded-2xl bg-muted ${item.color}`}>
                <IconComp className="size-5" />
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-foreground">
                {item.value}
              </div>
              <div className="text-[11px] text-muted-foreground font-mono mt-1">
                {item.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

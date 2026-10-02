import React from "react";

import { Cpu, BarChart3, LineChart, Sparkles } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: "Smart Predictions",
      badge: "Real-Time Inference",
      description:
        "Input key property features—such as square footage, room counts, building quality ratings, and garage specs—to receive instant algorithmic valuation estimates calibrated in Indian Rupees.",
      color: "from-[#142D28] to-[#3A6351]",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      badge: "Market Visualizations",
      description:
        "Explore real estate pricing distributions, neighborhood market benchmarks, quality rating impact, and structural correlations with interactive, responsive data charts.",
      color: "from-[#3A6351] to-[#A8C5A0]",
    },
    {
      icon: LineChart,
      title: "Intelligent Analytics",
      badge: "Model Interpretability",
      description:
        "Understand exactly what drives house prices. Proply extracts feature importances to show how living area, construction year, and quality impact final valuation.",
      color: "from-[#142D28] to-[#202923]",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-[#142D28] dark:text-[#B9F27C] text-xs font-semibold">
            <Sparkles className="size-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
            Built for Modern Real Estate Intelligence
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Combining machine learning models with real estate dataset features to provide comprehensive, data-backed property intelligence.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#142D28]/40 dark:hover:border-[#B9F27C]/40 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className={`size-12 rounded-2xl bg-gradient-to-tr ${item.color} text-[#B9F27C] flex items-center justify-center shadow-md`}>
                      <IconComp className="size-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-foreground group-hover:text-[#142D28] dark:group-hover:text-[#B9F27C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-text">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-[#142D28] dark:text-[#B9F27C]">
                  <span>Explore Feature</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

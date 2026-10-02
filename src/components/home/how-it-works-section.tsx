import React from "react";

import { Sliders, Binary, Award } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Sliders,
      title: "Input Property Specifications",
      description:
        "Provide property parameters including location neighborhood, overall quality & condition ratings, living area sq.ft, room counts, basement details, and garage capacity.",
    },
    {
      step: "02",
      icon: Binary,
      title: "Machine Learning Vectorization",
      description:
        "The feature payload is transformed and passed to our Random Forest Regressor trained on real estate dataset features, scaling variables and encoding categorical factors.",
    },
    {
      step: "03",
      icon: Award,
      title: "Receive Valuation & Key Insights",
      description:
        "Get instant, formatted valuation in Indian Rupees (₹), an estimated price range (±5%), price per sq.ft breakdown, and key feature driver analysis.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30 border-y border-border/60">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#142D28] dark:text-[#B9F27C]">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
            How Proply Valuation Works
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            From structural property parameters to precise algorithmic price estimation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-card rounded-3xl p-8 border border-border/70 shadow-sm space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-[#142D28] text-[#B9F27C] dark:bg-[#B9F27C] dark:text-[#142D28] flex items-center justify-center font-bold shadow-md">
                    <IconComponent className="size-6" />
                  </div>
                  <span className="text-4xl font-extrabold font-display text-muted-foreground/30">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-text">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

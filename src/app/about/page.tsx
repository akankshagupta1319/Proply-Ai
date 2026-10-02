import React from "react";

import { Info } from "lucide-react";

import { AboutContent } from "@/components/about/about-content";

export const metadata = {
  title: "About Proply & ML Methodology",
  description:
    "Learn about Proply house price prediction methodology, Ames dataset features, Random Forest algorithms, and tech stack.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-8 sm:py-12 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142D28]/10 text-[#142D28] dark:bg-[#B9F27C]/15 dark:text-[#B9F27C] text-xs font-semibold">
          <Info className="size-3.5" />
          <span>Machine Learning Methodology</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
          About PROPLY
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Understanding the data science pipeline, algorithmic decisions, and architecture behind our real estate valuation platform.
        </p>
      </div>

      <AboutContent />
    </div>
  );
}

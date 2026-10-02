import React from "react";

import Link from "next/link";

import { Sparkles, BarChart2, ShieldCheck, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Subtle Background Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] bg-[#A8C5A0]/15 dark:bg-[#B9F27C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142D28]/10 dark:bg-[#B9F27C]/15 text-[#142D28] dark:text-[#B9F27C] border border-[#142D28]/20 dark:border-[#B9F27C]/30 text-xs font-semibold tracking-wide uppercase shadow-xs">
              <Sparkles className="size-3.5 text-[#142D28] dark:text-[#B9F27C]" />
              <span>Machine Learning Property Valuation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
              Intelligence Behind <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#142D28] via-[#3A6351] to-[#A8C5A0] dark:from-[#B9F27C] dark:via-[#A8C5A0] dark:to-white bg-clip-text text-transparent">
                Every Property.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-text">
              Discover smarter property valuations powered by machine learning algorithms. Proply analyzes architectural features, area dimensions, structural quality, and location benchmarks to project accurate real estate prices.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/predict" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full bg-[#142D28] text-[#B9F27C] hover:bg-[#142D28]/95 dark:bg-[#B9F27C] dark:text-[#142D28] dark:hover:bg-[#B9F27C]/90 font-bold px-7 shadow-lg group">
                  <span>Predict Property Value</span>
                  <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/analytics" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-border hover:bg-muted font-semibold px-6">
                  <BarChart2 className="size-4 mr-2 text-[#142D28] dark:text-[#B9F27C]" />
                  <span>Explore Analytics</span>
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-border/60 grid grid-cols-3 gap-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                <span>Multi-Feature Model</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <TrendingUp className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                <span>Real-Time Valuation</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <ShieldCheck className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                <span>Data-Driven Accuracy</span>
              </div>
            </div>
          </div>

          {/* Right Hero Property Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card p-6 shadow-2xl space-y-6">
              {/* Header Image Badge */}
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-tr from-[#142D28] to-[#3A6351] p-6 text-white flex flex-col justify-between shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B9F27C] text-[#142D28]">
                    Sample Valuation
                  </span>
                  <span className="text-xs text-[#A8C5A0] font-mono">ID: PRP-2026-09</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Luxury Suburban Residence</h3>
                  <p className="text-xs text-[#A8C5A0] flex items-center gap-1 mt-0.5">
                    College Creek Sector • 2,198 sq.ft.
                  </p>
                </div>
              </div>

              {/* Live Metric Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-muted/60 border border-border/50">
                  <span className="text-xs text-muted-foreground uppercase font-semibold">Predicted Value</span>
                  <div className="text-xl font-extrabold text-[#142D28] dark:text-[#B9F27C] font-display mt-0.5">
                    ₹ 1,85,50,000
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">₹ 1.85 Cr</span>
                </div>
                <div className="p-4 rounded-2xl bg-muted/60 border border-border/50">
                  <span className="text-xs text-muted-foreground uppercase font-semibold">Price / sq.ft</span>
                  <div className="text-xl font-extrabold text-foreground font-display mt-0.5">
                    ₹ 8,440
                  </div>
                  <span className="text-[10px] text-muted-foreground">Top 15% Neighborhood</span>
                </div>
              </div>

              {/* Key Features Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-border/40">
                  <span className="text-muted-foreground">Overall Construction Quality</span>
                  <span className="font-semibold text-foreground">8 / 10 (Very Good)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/40">
                  <span className="text-muted-foreground">Year Built & Remodeled</span>
                  <span className="font-semibold text-foreground">2018 (Modern Construction)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-muted-foreground">Basement & Garage</span>
                  <span className="font-semibold text-foreground">1,100 sq.ft • 2-Car Garage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

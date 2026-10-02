"use client";

import React, { useState } from "react";

import Link from "next/link";

import { ArrowRight, Building, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  calculateClientValuation,
  DEFAULT_PROPERTY_INPUTS,
  formatINRLakhsCrores,
} from "@/lib/sample-data";

export function QuickTeaser() {
  const [sampleType, setSampleType] = useState<
    "standard" | "luxury" | "budget"
  >("standard");

  const sampleInputs = {
    standard: DEFAULT_PROPERTY_INPUTS,
    luxury: {
      ...DEFAULT_PROPERTY_INPUTS,
      neighborhood: "NoRidge",
      overallQual: 9,
      grLivArea: 2850,
      yearBuilt: 2021,
      garageCars: 3,
      totalBsmtSF: 1450,
    },
    budget: {
      ...DEFAULT_PROPERTY_INPUTS,
      neighborhood: "OldTown",
      overallQual: 5,
      grLivArea: 1150,
      yearBuilt: 1985,
      garageCars: 1,
      totalBsmtSF: 650,
    },
  };

  const currentValuation = calculateClientValuation(sampleInputs[sampleType]);

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#142D28]/30 bg-gradient-to-br from-[#142D28] to-[#202923] p-8 text-white shadow-2xl dark:border-[#B9F27C]/30 lg:p-12">
          {/* Subtle Glow */}
          <div className="pointer-events-none absolute top-0 right-0 size-96 rounded-full bg-[#B9F27C]/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Description */}
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B9F27C]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B9F27C]">
                <Sparkles className="size-3.5" />
                <span>Interactive Teaser</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Test Sample Property Profiles
              </h2>
              <p className="text-sm leading-relaxed text-[#A8C5A0]">
                Select a benchmark profile below to see how our valuation model
                adjusts price calculations in Indian Rupees (₹) based on
                structural attributes.
              </p>

              {/* Sample Profile Selector */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setSampleType("budget")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    sampleType === "budget"
                      ? "bg-[#B9F27C] text-[#142D28] shadow-md"
                      : "border border-[#264740] bg-[#202923] text-[#A8C5A0] hover:text-white"
                  }`}
                >
                  Budget Home (1,150 sq.ft)
                </button>
                <button
                  onClick={() => setSampleType("standard")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    sampleType === "standard"
                      ? "bg-[#B9F27C] text-[#142D28] shadow-md"
                      : "border border-[#264740] bg-[#202923] text-[#A8C5A0] hover:text-white"
                  }`}
                >
                  Standard Villa (1,710 sq.ft)
                </button>
                <button
                  onClick={() => setSampleType("luxury")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    sampleType === "luxury"
                      ? "bg-[#B9F27C] text-[#142D28] shadow-md"
                      : "border border-[#264740] bg-[#202923] text-[#A8C5A0] hover:text-white"
                  }`}
                >
                  Luxury Estate (2,850 sq.ft)
                </button>
              </div>
            </div>

            {/* Right Result Preview */}
            <div className="space-y-4 rounded-2xl border border-[#264740] bg-[#202923]/90 p-6 lg:col-span-5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8C5A0]">
                  <Building className="size-4 text-[#B9F27C]" />
                  Estimated Valuation
                </span>
                <span className="rounded bg-[#142D28] px-2 py-0.5 font-mono text-[10px] text-[#B9F27C]">
                  DEMO ESTIMATE
                </span>
              </div>

              <div>
                <div className="font-display text-3xl font-extrabold text-[#B9F27C]">
                  {formatINRLakhsCrores(currentValuation.estimatedPriceINR)}
                </div>
                <div className="mt-0.5 font-mono text-xs text-[#A8C5A0]">
                  Est Range:{" "}
                  {formatINRLakhsCrores(currentValuation.priceRangeMinINR)} –{" "}
                  {formatINRLakhsCrores(currentValuation.priceRangeMaxINR)}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#264740] pt-3 text-xs">
                <span className="text-[#A8C5A0]">Price / sq.ft:</span>
                <span className="font-mono font-bold text-white">
                  ₹ {currentValuation.pricePerSqFtINR.toLocaleString()}
                </span>
              </div>

              <Link href="/predict" className="block pt-2">
                <Button className="w-full rounded-xl bg-[#B9F27C] py-2.5 text-xs font-bold text-[#142D28] hover:bg-[#B9F27C]/90">
                  <span>Custom Property Prediction</span>
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";

import { ShieldCheck, Sparkles } from "lucide-react";

import { PredictionForm } from "@/components/predict/prediction-form";
import { PredictionResult } from "@/components/predict/prediction-result";
import { fetchFastAPIPrediction } from "@/lib/api-client";
import {
  calculateClientValuation,
  DEFAULT_PROPERTY_INPUTS,
  PropertyFormInputs,
} from "@/lib/sample-data";

export default function PredictPage() {
  const [inputs, setInputs] =
    useState<PropertyFormInputs>(DEFAULT_PROPERTY_INPUTS);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isFastApiConnected, setIsFastApiConnected] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [valuationResult, setValuationResult] = useState<{
    estimatedPriceINR: number;
    priceRangeMinINR: number;
    priceRangeMaxINR: number;
    pricePerSqFtINR: number;
    topDrivers: {
      feature: string;
      impactPercent: number;
      direction: "positive" | "negative";
    }[];
  } | null>(() => calculateClientValuation(DEFAULT_PROPERTY_INPUTS));

  const handleInputChange = (updated: Partial<PropertyFormInputs>) => {
    setInputs((prev) => ({ ...prev, ...updated }));
  };

  const handleCalculate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsCalculating(true);
    setApiError(null);

    try {
      if (isFastApiConnected) {
        const response = await fetchFastAPIPrediction(inputs);
        if (response.success && response.predicted_price_inr) {
          const estimated = Math.round(response.predicted_price_inr);
          setValuationResult({
            estimatedPriceINR: estimated,
            priceRangeMinINR:
              response.confidence_interval?.min_inr ||
              Math.round(estimated * 0.95),
            priceRangeMaxINR:
              response.confidence_interval?.max_inr ||
              Math.round(estimated * 1.05),
            pricePerSqFtINR: Math.round(estimated / (inputs.grLivArea || 1)),
            topDrivers: [
              {
                feature: `Quality Rating (${inputs.overallQual}/10)`,
                impactPercent: 32,
                direction: "positive",
              },
              {
                feature: `Above Grade Living Area (${inputs.grLivArea} sq.ft)`,
                impactPercent: 25,
                direction: "positive",
              },
              {
                feature: `Location (${inputs.neighborhood})`,
                impactPercent: 18,
                direction: "positive",
              },
            ],
          });
        } else {
          setApiError(
            response.error ||
              "Could not connect to FastAPI server on http://localhost:8000",
          );
          setValuationResult(calculateClientValuation(inputs));
        }
      } else {
        setValuationResult(calculateClientValuation(inputs));
      }
    } catch {
      setApiError("Error executing prediction model");
      setValuationResult(calculateClientValuation(inputs));
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-8 px-6 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#142D28]/10 px-3 py-1 text-xs font-semibold text-[#142D28] dark:bg-[#B9F27C]/15 dark:text-[#B9F27C]">
          <Sparkles className="size-3.5" />
          <span>Interactive Machine Learning Valuation</span>
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Predict Property Market Value
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Configure real estate specifications below to generate an algorithmic
          valuation estimate in Indian Rupees (₹).
        </p>
      </div>

      {/* Main Form & Result Layout */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <PredictionForm
            inputs={inputs}
            onChange={handleInputChange}
            onSubmit={handleCalculate}
          />
        </div>

        <div className="lg:col-span-5">
          <PredictionResult
            valuation={valuationResult}
            onCalculate={handleCalculate}
            isCalculating={isCalculating}
            isFastApiConnected={isFastApiConnected}
            onToggleFastApiMode={setIsFastApiConnected}
            apiError={apiError}
          />
        </div>
      </div>

      {/* Disclaimer Notice */}
      <div className="flex items-center justify-between rounded-2xl border border-border/50 bg-muted/40 p-4 text-xs text-muted-foreground gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 shrink-0 text-[#142D28] dark:text-[#B9F27C]" />
          <span>
            Model inputs correspond directly to supported features in our
            Random Forest regression pipeline.
          </span>
        </div>
        <span className="shrink-0 font-mono text-[10px]">
          Model Features: 18 Attributes
        </span>
      </div>
    </div>
  );
}

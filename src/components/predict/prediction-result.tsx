"use client";

import React from "react";

import { ArrowRight, Cpu, RefreshCw, ShieldAlert, Sparkles, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatINR, formatINRLakhsCrores } from "@/lib/sample-data";

interface PredictionResultProps {
  valuation: {
    estimatedPriceINR: number;
    priceRangeMinINR: number;
    priceRangeMaxINR: number;
    pricePerSqFtINR: number;
    topDrivers: {
      feature: string;
      impactPercent: number;
      direction: "positive" | "negative";
    }[];
  } | null;
  onCalculate: () => void;
  isCalculating: boolean;
  isFastApiConnected: boolean;
  onToggleFastApiMode: (enabled: boolean) => void;
  apiError?: string | null;
}

export function PredictionResult({
  valuation,
  onCalculate,
  isCalculating,
  isFastApiConnected,
  onToggleFastApiMode,
  apiError,
}: PredictionResultProps) {
  return (
    <div className="space-y-6 lg:sticky lg:top-28">
      {/* Prominent FastAPI Mode Switch Banner */}
      <div className="rounded-2xl border border-[#142D28]/30 dark:border-[#B9F27C]/30 bg-muted/70 p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
            <span className="text-xs font-bold text-foreground">
              Python FastAPI Backend Switch
            </span>
          </div>
          <button
            type="button"
            onClick={() => onToggleFastApiMode(!isFastApiConnected)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              isFastApiConnected ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-700"
            }`}
            role="switch"
            aria-checked={isFastApiConnected}
          >
            <span
              className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                isFastApiConnected ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-muted-foreground">Active Endpoint Mode:</span>
          <span
            className={`font-mono font-bold px-2 py-0.5 rounded ${
              isFastApiConnected
                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
            }`}
          >
            {isFastApiConnected ? "LIVE FASTAPI (http://localhost:8000)" : "CLIENT DEMO MODEL"}
          </span>
        </div>
      </div>

      {/* Primary Calculate CTA Box */}
      <div className="space-y-6 rounded-3xl border border-border/80 bg-card p-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <Cpu className="size-5 text-[#142D28] dark:text-[#B9F27C]" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Model Inference Engine
            </h3>
          </div>
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
              isFastApiConnected
                ? "border border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                : "bg-[#142D28]/10 text-[#142D28] dark:bg-[#B9F27C]/15 dark:text-[#B9F27C]"
            }`}
          >
            {isFastApiConnected ? "FastAPI Enabled" : "Demo Engine"}
          </span>
        </div>

        {/* Calculate Button */}
        <Button
          onClick={onCalculate}
          disabled={isCalculating}
          size="lg"
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#142D28] py-6 text-base font-extrabold text-[#B9F27C] shadow-lg hover:bg-[#142D28]/95 dark:bg-[#B9F27C] dark:text-[#142D28] dark:hover:bg-[#B9F27C]/90"
        >
          {isCalculating ? (
            <>
              <RefreshCw className="size-5 animate-spin" />
              <span>Calculating Model Valuation...</span>
            </>
          ) : (
            <>
              <Sparkles className="size-5" />
              <span>Calculate Property Value</span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>

        {/* Valuation Result Display */}
        {valuation ? (
          <div className="space-y-5 animate-in fade-in duration-300">
            {/* Primary Price Card */}
            <div className="relative space-y-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#142D28] to-[#202923] p-6 text-white shadow-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A8C5A0]">
                Estimated Property Value (INR)
              </span>
              <div>
                <div className="font-display text-3xl font-extrabold tracking-tight text-[#B9F27C] sm:text-4xl">
                  {formatINR(valuation.estimatedPriceINR)}
                </div>
                <div className="mt-1 font-mono text-sm font-semibold text-[#A8C5A0]">
                  ({formatINRLakhsCrores(valuation.estimatedPriceINR)})
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-[#264740] pt-3 text-xs">
                <div>
                  <span className="block text-[#8A938D]">
                    Confidence Range (±5%)
                  </span>
                  <span className="font-mono font-semibold text-white">
                    {formatINRLakhsCrores(valuation.priceRangeMinINR)} –{" "}
                    {formatINRLakhsCrores(valuation.priceRangeMaxINR)}
                  </span>
                </div>
                <div>
                  <span className="block text-[#8A938D]">Price per sq.ft</span>
                  <span className="font-mono font-semibold text-[#B9F27C]">
                    ₹ {valuation.pricePerSqFtINR.toLocaleString()} / sq.ft
                  </span>
                </div>
              </div>
            </div>

            {/* Top Value Drivers */}
            <div className="space-y-3 pt-2">
              <h4 className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span>Top Valuation Drivers</span>
                <span className="text-[10px] text-muted-foreground">
                  Impact Weight
                </span>
              </h4>
              <div className="space-y-2">
                {valuation.topDrivers.map((driver, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-muted/50 p-3 text-xs"
                  >
                    <span className="font-medium text-foreground">
                      {driver.feature}
                    </span>
                    <span className="font-mono font-bold text-[#142D28] dark:text-[#B9F27C]">
                      +{driver.impactPercent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2 py-8 text-center text-muted-foreground">
            <p className="text-sm font-medium">
              Click above to generate valuation
            </p>
            <p className="text-xs">Outputs are formatted in Indian Rupees (₹)</p>
          </div>
        )}

        {apiError && (
          <div className="space-y-1 rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-xs text-destructive">
            <div className="flex items-center gap-1.5 font-bold">
              <ShieldAlert className="size-4" />
              Backend Connection Notice
            </div>
            <p className="text-[11px] leading-relaxed">{apiError}</p>
            <p className="pt-1 text-[10px] opacity-80">
              Fell back to client-side demo valuation model. Make sure python backend is running on http://localhost:8000.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

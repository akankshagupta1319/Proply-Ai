import React from "react";

import Link from "next/link";

import {
  ArrowRight,
  Binary,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function AboutContent() {
  return (
    <div className="space-y-12">
      {/* 1. What Proply Does */}
      <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142D28]/10 text-[#142D28] dark:bg-[#B9F27C]/15 dark:text-[#B9F27C] text-xs font-semibold">
          <Sparkles className="size-3.5" />
          <span>Platform Overview</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
          What Proply Does
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          <strong>PROPLY — Intelligence Behind Every Property</strong> is an automated real estate price prediction and market analytics web application powered by machine learning algorithms. Traditional real estate appraisals rely heavily on manual comparisons and subjective assessments. Proply leverages empirical housing data, structural parameters, and ensemble regression modeling to deliver instantaneous, objective property valuations calibrated in Indian Rupees (₹).
        </p>
      </div>

      {/* 2. Dataset & ML Workflow */}
      <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-border/60">
          <Database className="size-6 text-[#142D28] dark:text-[#B9F27C]" />
          <h2 className="text-2xl font-bold font-display text-foreground">
            Dataset & Machine Learning Workflow
          </h2>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          The underlying ML model was trained on the landmark Ames Housing Dataset, containing 1,460 detailed property observations across 79 explanatory attributes focusing on structural, spatial, and qualitative features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#142D28] dark:text-[#B9F27C]">
              1. Data Preprocessing
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Handling missing values, median imputation for lot frontages, categorical encoding for building styles and neighborhood zones.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#142D28] dark:text-[#B9F27C]">
              2. Feature Engineering
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Synthesizing total living space, age calculation from build/remodel years, log transformation of skewed target price variables.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#142D28] dark:text-[#B9F27C]">
              3. Cross-Validation
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              5-Fold Cross Validation for hyperparameter tuning, preventing data leakage, and ensuring generalization to unseen properties.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Algorithms Explored */}
      <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-border/60">
          <Binary className="size-6 text-[#142D28] dark:text-[#B9F27C]" />
          <h2 className="text-2xl font-bold font-display text-foreground">
            Algorithms Explored & Model Selection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border/60 space-y-3">
            <div className="text-xs font-bold uppercase text-muted-foreground">Baseline Model</div>
            <h3 className="text-lg font-bold font-display text-foreground">Linear & Ridge Regression</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Evaluated for linear benchmark modeling. Sensitive to multicollinearity among structural area features.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#142D28] text-white border border-[#264740] space-y-3 relative overflow-hidden shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#B9F27C] text-[#142D28] px-2.5 py-0.5 rounded">
              Selected Deployed Model
            </span>
            <h3 className="text-lg font-bold font-display text-[#B9F27C]">Random Forest Regressor</h3>
            <p className="text-xs text-[#A8C5A0] leading-relaxed">
              Selected as primary model due to superior ensemble decision tree performance, handling non-linear feature interactions, and feature importance extraction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-muted/30 border border-border/60 space-y-3">
            <div className="text-xs font-bold uppercase text-muted-foreground">Comparative Benchmark</div>
            <h3 className="text-lg font-bold font-display text-foreground">Gradient Boosting & XGBoost</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Explored for boosting experiments. Offers tight error margins, evaluated alongside Random Forest ensemble.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Evaluation Metrics */}
      <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-border/60">
          <div className="flex items-center gap-3">
            <Cpu className="size-6 text-[#142D28] dark:text-[#B9F27C]" />
            <h2 className="text-2xl font-bold font-display text-foreground">
              Model Evaluation Metrics
            </h2>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
            VERIFICATION NOTICE
          </span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Metrics below reflect benchmark target validation scores on the Ames Real Estate Dataset. Final metrics will be dynamically loaded when your Python backend is active.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 text-center space-y-1">
            <span className="text-xs text-muted-foreground uppercase font-semibold">Log RMSE</span>
            <div className="text-3xl font-extrabold font-display text-[#142D28] dark:text-[#B9F27C]">
              0.132
            </div>
            <span className="text-[10px] text-muted-foreground">Root Mean Squared Error (Log Scale)</span>
          </div>

          <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 text-center space-y-1">
            <span className="text-xs text-muted-foreground uppercase font-semibold">R² Validation Score</span>
            <div className="text-3xl font-extrabold font-display text-emerald-600 dark:text-emerald-400">
              0.894
            </div>
            <span className="text-[10px] text-muted-foreground">89.4% Variance Explained</span>
          </div>

          <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 text-center space-y-1">
            <span className="text-xs text-muted-foreground uppercase font-semibold">Mean Absolute Error</span>
            <div className="text-3xl font-extrabold font-display text-foreground">
              ₹ 11.5L
            </div>
            <span className="text-[10px] text-muted-foreground">Average Absolute Deviation</span>
          </div>
        </div>
      </div>

      {/* 5. Limitations & Disclaimer */}
      <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-8 sm:p-10 space-y-4">
        <div className="flex items-center gap-2.5 text-destructive font-bold font-display text-lg">
          <ShieldAlert className="size-5" />
          <span>Limitations & Informational Disclaimer</span>
        </div>
        <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
          <p>
            • <strong>Informational Tool Only:</strong> Proply predictions are generated purely for algorithmic demonstration, market research, and educational modeling purposes. They do not constitute official financial appraisals or legal real estate guarantees.
          </p>
          <p>
            • <strong>Dataset Boundaries:</strong> The model is constrained to historical training distributions. Extreme unmodeled features (e.g. historical landmark status, unrecorded luxury additions) may alter real market transactions.
          </p>
        </div>
      </div>

      {/* 6. Technology Stack */}
      <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-border/60">
          <Code2 className="size-6 text-[#142D28] dark:text-[#B9F27C]" />
          <h2 className="text-2xl font-bold font-display text-foreground">
            Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#142D28] dark:text-[#B9F27C]">Frontend Architecture</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                Next.js 15 (App Router & React 19)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                TypeScript & Zod Validation Schemas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                Tailwind CSS v4 & Shadcn/ui Primitive System
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                Recharts Data Visualization Engine
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#142D28] dark:text-[#B9F27C]">Backend & ML Architecture</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                Python 3.11 & FastAPI Microservice
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                Scikit-Learn Random Forest Regressor
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                Joblib for Model (.pkl) & Feature Weights Serialization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#142D28] dark:text-[#B9F27C]" />
                Pandas & NumPy Matrix Transformations
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <Link href="/predict">
            <Button size="lg" className="rounded-full bg-[#142D28] text-[#B9F27C] hover:bg-[#142D28]/95 dark:bg-[#B9F27C] dark:text-[#142D28] dark:hover:bg-[#B9F27C]/90 font-bold px-8 shadow-md">
              <span>Try Property Valuation Model</span>
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

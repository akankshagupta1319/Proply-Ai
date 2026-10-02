import React from "react";

import Link from "next/link";

import { ArrowUpRight, ShieldCheck, Cpu, Database, BarChart3 } from "lucide-react";

import { ProplyLogo } from "@/components/ui/proply-logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/80 bg-[#142D28] text-[#F7F7F2] py-14 transition-colors">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#264740]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <ProplyLogo size="lg" className="[&_span]:text-white [&_span.text-xs]:text-[#A8C5A0]" />
            <p className="text-[#A8C5A0] text-sm max-w-md leading-relaxed font-text">
              Intelligence Behind Every Property. Proply harnesses machine learning algorithms to deliver accurate, feature-driven property price estimates and market insights.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#202923] text-[#B9F27C] border border-[#264740]">
                <Cpu className="size-3.5" /> Random Forest Model
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#202923] text-[#A8C5A0] border border-[#264740]">
                <Database className="size-3.5" /> Ames Dataset Benchmark
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#202923] text-[#F7F7F2] border border-[#264740]">
                <BarChart3 className="size-3.5" /> Predictive Analytics
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B9F27C]">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#A8C5A0]">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  Home Landing <ArrowUpRight className="size-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/predict" className="hover:text-white transition-colors flex items-center gap-1">
                  Property Valuation Tool <ArrowUpRight className="size-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="hover:text-white transition-colors flex items-center gap-1">
                  Market Analytics Dashboard <ArrowUpRight className="size-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1">
                  ML Architecture & Methodology <ArrowUpRight className="size-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Backend & Integration */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B9F27C]">
              Technical Stack
            </h4>
            <ul className="space-y-2 text-sm text-[#A8C5A0]">
              <li>Next.js 15 App Router & React 19</li>
              <li>Tailwind CSS v4 & Style System</li>
              <li>Recharts Interactive Visualizations</li>
              <li>Python 3.11 & FastAPI Bridge</li>
              <li>Scikit-Learn Random Forest Regressor</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A938D]">
          <div className="flex items-start gap-2.5 max-w-2xl">
            <ShieldCheck className="size-5 shrink-0 text-[#B9F27C] mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#A8C5A0]">Project Disclaimer:</strong> PROPLY is an intelligent real estate price estimation web application built with realistic sample data. Machine learning valuations shown on this frontend are for demonstration and structural modeling purposes. Connect your live trained model backend to execute real-time `.pkl` inference.
            </p>
          </div>
          <p className="shrink-0 text-center md:text-right text-[#A8C5A0]">
            © {new Date().getFullYear()} PROPLY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

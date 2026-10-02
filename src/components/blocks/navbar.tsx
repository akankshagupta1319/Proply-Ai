"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ProplyLogo } from "@/components/ui/proply-logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Predict Value", href: "/predict" },
  { label: "Analytics", href: "/analytics" },
  { label: "About ML", href: "/about" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(92%,860px)] rounded-full border border-border/60 bg-background/80 backdrop-blur-xl shadow-lg transition-all duration-300 px-5 py-2.5"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <ProplyLogo size="md" />

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1.5 bg-muted/40 p-1 rounded-full border border-border/40">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200",
                  isActive
                    ? "bg-[#142D28] text-[#F7F7F2] shadow-sm dark:bg-[#B9F27C] dark:text-[#142D28]"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <Link href="/predict" className="hidden sm:inline-flex">
            <Button
              size="sm"
              className="rounded-full bg-[#142D28] text-[#B9F27C] hover:bg-[#142D28]/90 dark:bg-[#B9F27C] dark:text-[#142D28] dark:hover:bg-[#B9F27C]/90 font-semibold text-xs shadow-md group gap-1.5"
            >
              <Sparkles className="size-3.5" />
              <span>Predict Value</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="text-foreground relative flex size-9 items-center justify-center rounded-full border border-border/50 md:hidden bg-background/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <div className="relative flex size-4 items-center justify-center">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-3xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all",
                  isActive
                    ? "bg-[#142D28] text-[#B9F27C] dark:bg-[#B9F27C] dark:text-[#142D28]"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <span>{item.label}</span>
                <ChevronRight className="size-4 opacity-60" />
              </Link>
            );
          })}
          <div className="pt-2 border-t border-border mt-1">
            <Link
              href="/predict"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#142D28] py-3 text-sm font-bold text-[#B9F27C] dark:bg-[#B9F27C] dark:text-[#142D28]"
            >
              <Sparkles className="size-4" />
              <span>Predict Property Value</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

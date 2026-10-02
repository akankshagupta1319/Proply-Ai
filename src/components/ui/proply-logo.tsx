import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface ProplyLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ProplyLogo({ className, iconOnly = false, size = "md" }: ProplyLogoProps) {
  const iconSizes = {
    sm: "size-6",
    md: "size-8",
    lg: "size-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 font-display group focus:outline-none", className)}
      aria-label="PROPLY - Home"
    >
      <div className={cn("relative flex items-center justify-center rounded-xl bg-[#142D28] text-[#B9F27C] shadow-md transition-transform duration-300 group-hover:scale-105 dark:bg-[#B9F27C] dark:text-[#142D28]", iconSizes[size])}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5/6"
        >
          {/* House Roof & Outline */}
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
          {/* Neural / ML Nodes in Doorway */}
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path d="M9.5 16h5" strokeWidth="1.8" />
          <path d="M12 12v4" strokeWidth="1.8" />
        </svg>
        <span className="absolute -top-1 -right-1 flex size-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9F27C] opacity-75 dark:bg-[#142D28]"></span>
          <span className="relative inline-flex rounded-full size-2.5 bg-[#B9F27C] dark:bg-[#142D28]"></span>
        </span>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className={cn("font-bold tracking-tight text-[#142D28] dark:text-white leading-none", textSizes[size])}>
            PROPLY
          </span>
          <span className="text-[10px] tracking-widest font-semibold uppercase text-[#8A938D] dark:text-[#A8C5A0] leading-none mt-0.5">
            Intelligence
          </span>
        </div>
      )}
    </Link>
  );
}

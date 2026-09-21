"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AmbientLightingProps {
  className?: string;
  variant?: "section" | "fixed";
  intensity?: "subtle" | "medium" | "strong";
}

export const AmbientLighting: React.FC<AmbientLightingProps> = ({
  className,
  variant = "section",
  intensity = "subtle",
}) => {
  const opacityMap = {
    subtle: {
      light: "opacity-40 dark:opacity-20",
      dark: "opacity-30 dark:opacity-25",
    },
    medium: {
      light: "opacity-60 dark:opacity-35",
      dark: "opacity-50 dark:opacity-40",
    },
    strong: {
      light: "opacity-80 dark:opacity-50",
      dark: "opacity-70 dark:opacity-60",
    },
  };

  const isFixed = variant === "fixed";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none select-none z-0 overflow-hidden inset-0",
        isFixed ? "fixed" : "absolute",
        className
      )}
    >
      {/* Top-Left Lighting Effect */}
      <div
        className={cn(
          "absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-[100px] sm:blur-[140px] transition-all duration-700",
          "bg-gradient-to-br from-blue-500/35 via-sky-400/20 to-transparent dark:from-blue-600/30 dark:via-indigo-500/20 dark:to-transparent",
          opacityMap[intensity].light
        )}
      />

      {/* Bottom-Right Lighting Effect */}
      <div
        className={cn(
          "absolute -bottom-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-[100px] sm:blur-[140px] transition-all duration-700",
          "bg-gradient-to-tl from-cyan-500/35 via-indigo-400/20 to-transparent dark:from-indigo-600/30 dark:via-blue-500/20 dark:to-transparent",
          opacityMap[intensity].dark
        )}
      />
    </div>
  );
};

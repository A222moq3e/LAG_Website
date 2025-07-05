import React from "react";
import { cn } from "../../lib/utils";

export default function StatCard({ icon, value, label, className, locale }) {
  return (
    <div
      className={cn(
        "bg-card backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 rounded-full main-bg-gradient flex items-center justify-center">
          {icon}
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">{value}</div>
          <div
            className={cn(
              "text-sm text-muted-foreground mt-1",
              locale === "ar" ? "font-medium" : ""
            )}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

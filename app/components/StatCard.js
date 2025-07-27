import React from "react";
import { cn } from "../../lib/utils";

export default function StatCard({
  icon,
  value,
  label,
  color = "#00C7D3",
  className,
  locale,
}) {
  return (
    <div className="group relative w-full">
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Main card */}
      <div
        className={cn(
          "relative bg-white/1 backdrop-blur-sm rounded-xl p-4 border-2 border-white/20 hover:border-[var(--stat-color)] transition-all duration-300 transform hover:scale-[1.02]",
          className
        )}
        style={{
          "--stat-color": color,
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition duration-300"
            style={{
              backgroundColor: `${color}15`,
              border: `1px solid ${color}50`,
            }}
          >
            <div className="[&>svg]:w-4 [&>svg]:h-4" style={{ color: color }}>
              {icon}
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-2xl font-bold transition duration-300"
              style={{ color: "white" }}
            >
              {value}
            </div>
            <div
              className={cn(
                "text-xs text-gray-300 mt-0.5",
                locale === "ar" ? "font-medium" : ""
              )}
            >
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

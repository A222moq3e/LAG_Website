import React from "react";
import { cn } from "../../lib/utils";

export default function StatCard({ icon, value, label, className, locale }) {
  return (
    <div className="group relative w-full">
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9D00FF]/20 to-[#00C7D3]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Main card */}
      <div
        className={cn(
          "relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#00C7D3]/30 transition-all duration-300 transform hover:scale-[1.02]",
          className
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-full main-bg-gradient flex items-center justify-center group-hover:shadow-lg transition duration-300">
            {icon}
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white group-hover:text-[#00C7D3] transition duration-300">
              {value}
            </div>
            <div
              className={cn(
                "text-sm text-gray-300 mt-1",
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

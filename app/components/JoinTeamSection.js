import React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

export default function JoinTeamSection({
  title,
  description,
  buttonText,
  locale,
  className,
}) {
  return (
    <div className="group relative w-full">
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9D00FF]/20 to-[#00C7D3]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Main section */}
      <section
        className={cn(
          "relative bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 hover:border-[#00C7D3]/30 transition-all duration-300 transform hover:scale-[1.02]",
          className
        )}
      >
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white group-hover:text-[#00C7D3] transition duration-300">
            {title}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          <div className="pt-4">
            <div className="group/button relative inline-block">
              {/* Button glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9D00FF]/40 to-[#00C7D3]/40 rounded-xl blur opacity-0 group-hover/button:opacity-100 transition duration-300"></div>

              <Link
                href={`/${locale}/contact-us`}
                className={cn(
                  "relative inline-flex items-center px-8 py-4 border border-white/10 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden group/button",
                  locale === "ar" ? "flex-row-reverse" : ""
                )}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(157, 0, 255, 0.9) 0%, rgba(0, 199, 211, 0.9) 100%)",
                }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/5 group-hover/button:bg-white/10 transition duration-300 rounded-xl"></div>

                {/* Button text */}
                <span className="relative z-10">{buttonText}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

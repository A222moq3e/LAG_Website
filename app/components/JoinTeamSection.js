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
            <Link
              href={`/${locale}/contact-us`}
              className={cn(
                "inline-flex items-center px-8 py-4 main-bg-gradient hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg",
                locale === "ar" ? "flex-row-reverse" : ""
              )}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

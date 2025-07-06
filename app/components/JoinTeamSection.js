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
    <section
      className={cn(
        "bg-gradient-card backdrop-blur-sm rounded-2xl p-12 border border-border/50 hover:border-accent transition-all duration-300",
        className
      )}
    >
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
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
  );
}

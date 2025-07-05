import React from "react";
import { cn } from "../../lib/utils";

export default function TeamMemberCard({
  name,
  position,
  specialization,
  description,
  avatarUrl,
  locale,
  className,
}) {
  const isArabic = locale === "ar";

  return (
    <div
      className={cn(
        "bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-start gap-6",
          isArabic ? "flex-row-reverse rtl" : "flex-row ltr"
        )}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Avatar */}
        <div className={cn("flex-shrink-0", isArabic ? "order-2" : "order-1")}>
          <div className="w-20 h-20 rounded-full main-bg-gradient p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full main-bg-gradient flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={cn(
            "flex-1 space-y-3",
            isArabic ? "text-right order-1" : "text-left order-2"
          )}
        >
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
            <p
              className="font-medium"
              style={{ color: "var(--primary-blue-light)" }}
            >
              {position}
            </p>
            <p className="text-sm text-muted-foreground">{specialization}</p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

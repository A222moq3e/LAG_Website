import Image from "next/image";
import { User } from "lucide-react";
import { cn } from "../../lib/utils";

export default function TeamMemberCard({
  name,
  position,
  avatarUrl,
  linkedinUrl,
  locale,
  className,
}) {
  const isArabic = locale === "ar";

  return (
    <div className="group relative w-full max-w-xs">
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9D00FF]/20 to-[#00C7D3]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Main card */}
      <div
        className={cn(
          "relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#00C7D3]/30 transition-all duration-300 transform hover:scale-[1.02]",
          className
        )}
      >
        {/* Profile section */}
        <div
          className="flex flex-col items-center space-y-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Profile image */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#00C7D3]/50 transition duration-300">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  priority={false}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#9D00FF]/20 to-[#00C7D3]/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-white/60" />
                </div>
              )}
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#00C7D3] rounded-full border-2 border-[#100087] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Name and position */}
          <div className="text-center space-y-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-[#00C7D3] transition duration-300">
              {name}
            </h3>
            <p className="text-sm text-gray-300 font-medium">{position}</p>
          </div>

          {/* LinkedIn button */}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 hover:text-[#00C7D3] transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-[#00C7D3]/50"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">
                {isArabic ? "تواصل" : "Connect"}
              </span>
            </a>
          )}

          {/* Decorative accent */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#9D00FF]/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

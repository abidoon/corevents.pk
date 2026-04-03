interface LogoProps {
  size?: number;
  variant?: "default" | "white" | "icon-only";
  className?: string;
}

export default function Logo({ size = 36, variant = "default", className = "" }: LogoProps) {
  const iconSize = size;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2D1B69" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="logoGradientWhite" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4C1D95" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Background square */}
        <rect
          width="40"
          height="40"
          rx="10"
          fill={variant === "white" ? "url(#logoGradientWhite)" : "url(#logoGradient)"}
        />

        {/* C arc */}
        <path
          d="M27 13C23.5 9 16.5 9 13 12C9 16 9 24 13 28C16.5 31 23.5 31 27 27"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Top node dot */}
        <circle cx="27" cy="13" r="3" fill="#F97316" />
        <circle cx="27" cy="13" r="1.5" fill="white" />

        {/* Bottom node dot */}
        <circle cx="27" cy="27" r="3" fill="#F97316" />
        <circle cx="27" cy="27" r="1.5" fill="white" />
      </svg>

      {/* Wordmark */}
      {variant !== "icon-only" && (
        <span
          style={{ fontSize: size * 0.56, lineHeight: 1 }}
          className={`font-bold tracking-tight ${
            variant === "white" ? "text-white" : "text-[#0F0825]"
          }`}
        >
          Cor<span className={variant === "white" ? "text-[#C4B5FD]" : "text-[#7C3AED]"}>events</span>
        </span>
      )}
    </div>
  );
}

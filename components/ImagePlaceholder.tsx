interface ImagePlaceholderProps {
  label: string;
  ratio?: string;
  className?: string;
  dark?: boolean;
}

export default function ImagePlaceholder({
  label,
  ratio = "aspect-[4/3]",
  className = "",
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex ${ratio} w-full items-center justify-center rounded-2xl border-2 border-dashed ${
        dark
          ? "border-white/25 bg-white/5"
          : "border-azure-200 bg-azure-50"
      } ${className}`}
    >
      <div
        className={`flex flex-col items-center gap-3 px-6 text-center ${
          dark ? "text-white/50" : "text-azure-400"
        }`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="M21 16l-5.5-5.5L4 21" />
        </svg>
        <span className="text-xs font-medium leading-relaxed tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}

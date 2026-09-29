import type { IconType } from "react-icons";

interface IconBadgeProps {
  icon: IconType;
  className?: string;
  size?: number;
  boxClassName?: string;
  /** Responsive icon sizing (e.g. "size-7 sm:size-10"); CSS overrides `size` */
  iconClassName?: string;
}

export default function IconBadge({
  icon: Icon,
  className = "",
  size = 22,
  boxClassName = "h-12 w-12",
  iconClassName,
}: IconBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${boxClassName} ${className}`}
    >
      <Icon size={size} className={iconClassName} />
    </span>
  );
}

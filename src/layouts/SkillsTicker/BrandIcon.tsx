// src/components/BrandIcon.tsx
import type { SimpleIcon } from "simple-icons";

export function BrandIcon({
  icon,
  className = "size-5.5",
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} shrink-0 fill-current`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

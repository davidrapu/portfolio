import type { BrandMark } from "../../data/brandIcons";

export function BrandIcon({
  icon,
  className = "size-5.5",
}: {
  icon: BrandMark;
  className?: string;
}) {
  return (
    <svg
      viewBox={icon.viewBox ?? "0 0 24 24"}
      className={`${className} shrink-0 fill-current`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

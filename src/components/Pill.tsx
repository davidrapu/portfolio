import type { ReactNode } from "react";

// Outlined tag for short labels (course modules, tech tags).
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-soft">
      {children}
    </span>
  );
}

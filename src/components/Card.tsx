import type { ReactNode } from "react";


export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`min-w-0 rounded-card border border-line bg-surface p-7 transition-colors duration-200 hover:border-[rgba(94,234,212,.35)] ${className}`}
    >
      {children}
    </article>
  );
}

// The small grey tag at the top of a card ("Education", "GitHub"…).
export function CardLabel({ children }: { children: ReactNode }) {
  return (
    <span className="self-start rounded-full bg-white/5 px-3 py-1.5 text-[12px] text-muted">
      {children}
    </span>
  );
}

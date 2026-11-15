import type { ReactNode } from "react";
import { externalLinkProps } from "../lib/links";
import { pressable } from "../lib/styles";

const base = `inline-flex h-12 items-center justify-center gap-2.5 rounded-button border border-line-strong bg-white/3 hover:border-white/40 ${pressable}`;


export function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a href={href} aria-label={label} className={`${base} w-12`} {...externalLinkProps(href)}>
      {children}
    </a>
  );
}


export function IconTextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`${base} px-4.5 font-mono text-[13px] tracking-[.08em]`}
      {...externalLinkProps(href)}
    >
      {children}
    </a>
  );
}

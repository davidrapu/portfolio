import { useEffect, useRef } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { pressable } from "../lib/styles";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Same box for real links and their highlighted copies, so the two layers line up exactly.
const linkBox =
  "rounded-full px-4 py-2.5 text-[14px] whitespace-nowrap max-[760px]:px-2.5";

// Active-section indicator, done as a clip-path reveal: a second copy of the links, styled as
// "active", sits on top and is clipped so only the active one shows. Moving the clip moves the
// highlight, and its background and text colour change in perfect sync (one element revealed,
// not two colours interpolated). Strong ease-in-out, 250ms: it's moving on screen.
export default function SectionNav({ className = "" }: { className?: string }) {
  const active = useActiveSection(sections.map((s) => s.id));
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const place = () => {
      const row = rowRef.current;
      const copy = copyRef.current;
      const link = active ? linkRefs.current[active] : null;
      if (!row || !copy) return;
      if (!link) {
        copy.style.opacity = "0"; // no section in view (e.g. the hero): hide the highlight
        return;
      }
      const left = link.offsetLeft;
      const right = row.offsetWidth - (left + link.offsetWidth);
      copy.style.clipPath = `inset(0 ${right}px 0 ${left}px round 999px)`;
      copy.style.opacity = "1";
      // On narrow screens the row can scroll sideways; keep the active link in view.
      // (Scrolls only the nav row. scrollIntoView would also cancel an in-progress page scroll.)
      const scroller = scrollerRef.current;
      if (scroller) {
        const outLeft = left < scroller.scrollLeft;
        const outRight = left + link.offsetWidth > scroller.scrollLeft + scroller.clientWidth;
        if (outLeft || outRight) scroller.scrollTo({ left: left - 8, behavior: "smooth" });
      }
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  return (
    <nav
      aria-label="Sections"
      className={`rounded-full border border-white/10 bg-white/3 p-1 ${className}`}
    >
      <div ref={scrollerRef} className="overflow-x-auto scrollbar-none">
        <div
          ref={rowRef}
          className="relative flex w-max gap-1 max-[760px]:w-full max-[760px]:justify-between"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              ref={(el) => {
                linkRefs.current[s.id] = el;
              }}
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              className={`${linkBox} text-muted hover:bg-white/5 hover:text-ink ${pressable}`}
            >
              {s.label}
            </a>
          ))}

          {/* The "active" copy. Decorative: screen readers get aria-current on the real link. */}
          <div
            ref={copyRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex gap-1 opacity-0 transition-[clip-path,opacity] duration-250 ease-in-out max-[760px]:justify-between motion-reduce:transition-none"
            style={{ clipPath: "inset(0 100% 0 0 round 999px)" }}
          >
            {sections.map((s) => (
              <span key={s.id} className={`${linkBox} bg-[#1F2526] text-ink`}>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

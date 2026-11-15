import { useEffect, useRef, type KeyboardEvent } from "react";
import { pressable } from "../../lib/styles";

export type ProjectTab = { id: string; label: string; count: number };

// Same box for the real tabs and their "active" copies, so the two layers line up exactly.
const tabBox =
  "inline-flex min-h-11 items-center gap-2 rounded-full px-[18px] py-2.5 text-[14px] font-medium whitespace-nowrap";
const countBox = "rounded-full px-[7px] py-0.5 font-mono text-[11px] font-medium";

// Featured / Others switcher.
// Active indicator: a clip-path reveal, like the header nav. A styled copy of the tabs sits on
// top and is clipped to the active one, so its background and text colour change in perfect sync.
// Keyboard: ←/→ move between tabs, Home/End jump to the ends; only the active tab is in the Tab order.
export default function ProjectTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: ProjectTab[];
  active: string;
  onChange: (id: string) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const placed = useRef(false);

  useEffect(() => {
    const place = () => {
      const row = rowRef.current;
      const copy = copyRef.current;
      const tab = tabRefs.current[active];
      if (!row || !copy || !tab) return;
      const left = tab.offsetLeft;
      const right = row.offsetWidth - (left + tab.offsetWidth);
      // First placement (page load) and resizes jump straight there; only tab changes animate.
      const animate = placed.current && copy.dataset.active !== active ? "" : "none";
      copy.style.transition = animate;
      copy.style.clipPath = `inset(0 ${right}px 0 ${left}px round 999px)`;
      if (animate === "none") {
        void copy.offsetWidth; // apply the jump before turning transitions back on
        copy.style.transition = "";
      }
      copy.dataset.active = active;
      placed.current = true;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const index = tabs.findIndex((t) => t.id === active);
    const next = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    onChange(tabs[next].id);
    tabRefs.current[tabs[next].id]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Project groups"
      className="rounded-full border border-white/10 bg-white/3 p-1"
    >
      <div ref={rowRef} className="relative flex gap-1">
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tab.id)}
              onKeyDown={onKeyDown}
              className={`${tabBox} cursor-pointer text-muted hover:text-ink ${pressable}`}
            >
              {tab.label}
              <span className={`${countBox} bg-white/8`}>{tab.count}</span>
            </button>
          );
        })}

        {/* The "active" copy. Decorative: screen readers get aria-selected on the real tab. */}
        <div
          ref={copyRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex gap-1 transition-[clip-path] duration-250 ease-in-out motion-reduce:transition-none"
          style={{ clipPath: "inset(0 100% 0 0 round 999px)" }}
        >
          {tabs.map((tab) => (
            <span key={tab.id} className={`${tabBox} bg-ink text-page`}>
              {tab.label}
              <span className={`${countBox} bg-page/12`}>{tab.count}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

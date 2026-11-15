import { useEffect, useRef, useState } from "react";
import { experience } from "../data/experience";

const listItemStyle =
  "relative grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] max-[760px]:grid-cols-[40px_minmax(0,1fr)]";
const listItemContentStyle =
  "row-start-1 flex flex-col gap-2 transition-[translate] ease-gentle motion-reduce:transition-none";
const listItemLeftStyle =
  "col-start-1 text-right max-[760px]:col-start-2 max-[760px]:text-left";
const listItemRightStyle = "col-start-3 max-[760px]:col-start-2";
// While its dot isn't lit, an entry sits pushed out toward its own side.
// On phones every entry sits right of the line, so they all slide to/from the right.
const hiddenToLeft =
  "-translate-x-12 max-[760px]:translate-x-8 motion-reduce:translate-x-0";
const hiddenToRight =
  "translate-x-12 max-[760px]:translate-x-8 motion-reduce:translate-x-0";
const shown = "translate-x-0";
// Arriving is slow and calm; leaving is quicker so scrolling back up doesn't feel sluggish.
const slideInTiming = "duration-[1400ms]";
const slideOutTiming = "duration-[700ms]";

// Each line of text fades on its own schedule.
const lineStyle =
  "transition-opacity ease-gentle motion-reduce:transition-none";
const fadeInTiming = "duration-[1100ms]";
const fadeOutTiming = "duration-[600ms]";
// Arriving: date → title → role → description, top line first.
const fadeInDelays = ["delay-0", "delay-[150ms]", "delay-[300ms]", "delay-[450ms]"];
// Leaving: the reverse, description first, so the entry is "un-written" back into its dot.
const fadeOutDelays = ["delay-[270ms]", "delay-[180ms]", "delay-[90ms]", "delay-0"];
const listItemDotStyle =
  "col-start-2 row-start-1 mt-1.5 size-3 justify-self-center rounded-full transition-colors duration-500 max-[760px]:col-start-1";

// How far down the screen the travelling dot sits (0 = top, 1 = bottom).
const DOT_SCREEN_POSITION = 0.6;
// How quickly the dot catches up with the scroll position each frame (0–1).
// Lower = smoother and slower to settle; 1 = sticks exactly to the scroll.
const DOT_FOLLOW_SPEED = 0.08;
// The line starts 8px below the top of the list and ends 8px above the bottom (top-2 / bottom-2).
const LINE_INSET = 8;

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const fillRef = useRef<HTMLSpanElement>(null); // teal part of the line
  const dotRef = useRef<HTMLSpanElement>(null); // the travelling dot
  // How many dots the travelling dot is past right now. Goes up and down with the scroll,
  // and decides which entries are lit and visible.
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    let shownProgress = 0; // where the dot is drawn; eases toward the scroll position
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Where the dot *should* be for the current scroll position (0 = top, 1 = bottom).
    const targetProgress = (rect: DOMRect) => {
      const anchor = window.innerHeight * DOT_SCREEN_POSITION;
      // Scroll positions where the dot is at the top and at the bottom of the timeline.
      const listTop = rect.top + window.scrollY;
      const start = listTop - anchor;
      const idealEnd = listTop + rect.height - anchor;
      // If the page ends before idealEnd (e.g. Experience is near the bottom),
      // finish the journey at the last scrollable pixel instead, so the last entry still appears.
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const end = Math.max(Math.min(idealEnd, maxScroll), start + 1);
      return Math.min(Math.max((window.scrollY - start) / (end - start), 0), 1);
    };

    const step = () => {
      frame = 0;
      // 1. Read everything from the layout first (reading after writing would force a re-layout).
      const rect = list.getBoundingClientRect();
      const dotTops = dotRefs.current.map((dot) =>
        dot ? dot.getBoundingClientRect().top - rect.top : Infinity,
      );
      const target = targetProgress(rect);

      // 2. Work out where the dot should be drawn: close part of the gap each frame,
      //    snapping when it's too small to see (or when motion is reduced).
      const gap = target - shownProgress;
      shownProgress =
        reduceMotion.matches || Math.abs(gap) < 0.0005
          ? target
          : shownProgress + gap * DOT_FOLLOW_SPEED;
      const travel = rect.height - 2 * LINE_INSET; // the line runs from 8px below the top to 8px above the bottom
      const dotY = LINE_INSET + shownProgress * travel;

      // 3. Then write: transforms only, set directly on the two elements (no layout, no restyle of the list).
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${shownProgress})`;
      if (dotRef.current) dotRef.current.style.transform = `translateY(${shownProgress * travel}px)`;

      // Entries react to where the dot is drawn, so they appear as it arrives and leave as it passes back.
      const count = dotTops.filter((top) => top <= dotY).length;
      setReached(count); // React skips the render when the number hasn't changed

      // Keep animating until the dot has caught up, then stop until the next scroll.
      if (shownProgress !== target) frame = requestAnimationFrame(step);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(step);
    };

    // Start the dot where the page already is (e.g. after a reload halfway down), without gliding.
    shownProgress = targetProgress(list.getBoundingClientRect());
    step();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-page px-6 py-24">
      <div className="mb-16 flex flex-col gap-3">
        <span className="font-mono text-[12px] tracking-[.14em] text-accent">
          01 // EXPERIENCE
        </span>
        <h2 className="text-[48px] tracking-[-0.03em] max-[760px]:text-[36px]">
          Experience
        </h2>
      </div>

      <ol
        ref={listRef}
        className="relative flex flex-col gap-14 before:absolute before:top-2 before:bottom-2 before:left-1/2 before:w-px before:bg-white/12 max-[760px]:before:left-5"
      >
        {/* Teal part of the line: full length, scaled down from the top to reach the dot */}
        <span
          ref={fillRef}
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-1/2 w-px origin-top bg-accent max-[760px]:left-5"
          style={{ transform: "scaleY(0)" }}
        />
        {/* The travelling dot: starts at the top of the line and is moved down with translateY */}
        <span
          ref={dotRef}
          aria-hidden="true"
          className="absolute top-2 left-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_var(--color-accent-glow),0_0_18px_rgba(45,212,191,.55)] max-[760px]:left-5"
        />

        {experience.map((entry, index) => {
          const fromLeft = index % 2 === 0;
          // The first entry is where the dot starts, so it's always lit and always shown.
          // Every other entry is shown only while the travelling dot is past its dot.
          const isActive = index === 0 || index < reached;
          // Class for one line of text. The timing classes belong to the state we're moving *to*,
          // so arriving uses the slow top-down cascade and leaving uses the quick reverse one.
          const line = (order: number) =>
            `${lineStyle} ${
              isActive
                ? `${fadeInTiming} ${fadeInDelays[order]} opacity-100`
                : `${fadeOutTiming} ${fadeOutDelays[order]} opacity-0 motion-reduce:opacity-100`
            }`;
          return (
            <li key={entry.org} className={listItemStyle}>
              <span
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
                aria-hidden="true"
                className={`${listItemDotStyle} ${isActive ? "bg-accent" : "bg-[#3A4442]"}`}
              />
              <div
                className={`${listItemContentStyle} ${fromLeft ? listItemLeftStyle : listItemRightStyle} ${
                  isActive
                    ? `${shown} ${slideInTiming}`
                    : `${fromLeft ? hiddenToLeft : hiddenToRight} ${slideOutTiming}`
                }`}
              >
                <span className={`text-[14px] text-faint ${line(0)}`}>
                  {entry.date}
                </span>
                <h3 className={`text-[24px] ${line(1)}`}>{entry.org}</h3>
                <span
                  className={`text-[14px] font-medium text-ink-soft ${line(2)}`}
                >
                  {entry.role}
                </span>
                <p
                  className={`text-[15px] leading-[1.6] text-muted ${line(3)}`}
                >
                  {entry.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

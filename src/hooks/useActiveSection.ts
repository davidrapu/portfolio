import { useEffect, useState } from "react";

// Which section is currently in the reading zone (a thin band ~40% down the screen).
// Returns its id, or null when none is (e.g. while the hero is on screen).
//
// Exception: when the page is scrolled to the very bottom, the last section counts as active.
// A short last section (like Contact) can never scroll up into the band, so without this
// its nav item could never light up.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const inZone = new Set<string>();

    const atPageBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const update = () => {
      if (atPageBottom() && sections.length > 0) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      // If two sections touch the band at once, the later one on the page wins.
      const current = sections.filter((s) => inZone.has(s.id)).at(-1);
      setActive(current?.id ?? null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inZone.add(entry.target.id);
          else inZone.delete(entry.target.id);
        }
        update();
      },
      // Shrink the viewport to a band from 40% to 45% down the screen.
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    // The band doesn't change as you reach the bottom, so also check on scroll.
    // (setActive with the same id doesn't re-render.)
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [key]);

  return active;
}

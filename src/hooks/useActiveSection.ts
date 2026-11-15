import { useEffect, useState } from "react";

// Which section is currently in the reading zone (a thin band ~40% down the screen).
// Returns its id, or null when none is (e.g. while the hero is on screen).
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const inZone = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inZone.add(entry.target.id);
          else inZone.delete(entry.target.id);
        }
        // If two sections touch the band at once, the later one on the page wins.
        const current = sections.filter((s) => inZone.has(s.id)).at(-1);
        setActive(current?.id ?? null);
      },
      // Shrink the viewport to a band from 40% to 45% down the screen.
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

import { useState } from "react";
import { skills } from "../../data/skills";
import { BrandIcon } from "./BrandIcon";
import { PauseIcon, PlayIcon } from "../../components/icons";
import { pressable } from "../../lib/styles";

function SkillList({ hidden = false }: { hidden?: boolean }) {
  return (
    // flex + shrink-0: one row that never squashes or wraps
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {skills.map((skill) => (
        <li
          key={skill.icon.slug}
          className="inline-flex shrink-0 items-center gap-2.5 border-r border-white/8 px-5.5 font-mono text-[13px] tracking-[.04em] whitespace-nowrap text-[#D9DED2]"
        >
          <BrandIcon icon={skill.icon} />
          {skill.label}
        </li>
      ))}
    </ul>
  );
}

export default function SkillsTicker() {
  // Moving content that runs for more than 5 seconds needs a way to stop it (WCAG 2.2.2).
  // Hover pauses it for mouse users; this button works for touch and keyboard too.
  const [paused, setPaused] = useState(false);

  return (
    <div
      role="region"
      aria-label="Skills"
      className="group relative w-full overflow-hidden border-y border-white/8 bg-black py-4"
    >
      {/* Edge fade: logos fade in on the right and out on the left instead of being cut off */}
      <div className="mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        {/* w-max: the track is as wide as its content (wider than the screen), not squeezed to fit */}
        <div
          className={`flex w-max animate-marquee motion-reduce:animate-none ${
            paused
              ? "[animation-play-state:paused]"
              : "group-hover:[animation-play-state:paused]"
          }`}
        >
          <SkillList />
          <SkillList hidden />
        </div>
      </div>

      {/* Hidden when the OS asks for reduced motion, because the ticker is already still then */}
      <button
        type="button"
        aria-pressed={paused}
        aria-label="Pause skills animation"
        onClick={() => setPaused((p) => !p)}
        className={`absolute top-1/2 right-3 inline-flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-black/85 text-muted hover:border-white/30 hover:text-ink motion-reduce:hidden ${pressable}`}
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </div>
  );
}

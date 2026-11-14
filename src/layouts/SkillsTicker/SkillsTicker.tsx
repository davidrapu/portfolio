import { skills } from "../../data/skills";
import { BrandIcon } from "./BrandIcon";

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
  return (
    // overflow-hidden: the window. Anything outside it is cut off.
    <div
      role="region"
      aria-label="Skills"
      className="group relative w-full overflow-hidden border-y border-white/8 bg-black py-4"
    >
      {/* w-max: the track is as wide as its content (wider than the screen), not squeezed to fit */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <SkillList />
        <SkillList hidden />
      </div>
    </div>
  );
}

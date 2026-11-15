import type { OtherProject as Project } from "../../data/projects";
import { externalLinkProps } from "../../lib/links";
import ProjectVisual from "./ProjectVisual";

// One row in the "Others" list: big dim name that brightens and slides on hover, with a tilted
// preview card that fades in over the row. Hover motion: 250ms, strong ease-out, transforms and
// opacity only. With reduced motion the preview still fades in, but nothing moves or tilts.
export default function OtherProject({ project, number }: { project: Project; number: number }) {
  const href = project.live ?? project.repo;

  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className="group/other relative grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-6 border-b border-white/10 px-2 py-9 text-ink hover:text-ink max-[900px]:grid-cols-[40px_minmax(0,1fr)] max-[900px]:px-1 max-[900px]:py-7"
    >
      <span className="font-mono text-[13px] font-medium text-dim transition-colors duration-150 group-hover/other:text-accent">
        {String(number).padStart(2, "0")}
      </span>
      <span className="flex min-w-0 flex-col gap-2">
        {/* leading-[1.05]: long names wrap onto two lines without the lines touching */}
        <span className="font-display text-[52px] leading-[1.05] font-medium tracking-[-0.03em] text-dim transition-[color,translate] duration-250 ease-out group-hover/other:text-ink motion-safe:group-hover/other:translate-x-2.5 max-[900px]:text-[34px] max-[900px]:text-ink">
          {project.title}
        </span>
        <span className="max-w-130 text-[14px] text-faint">{project.description}</span>
      </span>
      {/* Capped width so a long stack list wraps instead of squeezing the name column */}
      <span className="max-w-55 text-right font-mono text-[13px] text-muted max-[900px]:col-start-2 max-[900px]:max-w-none max-[900px]:text-left">
        {project.year} · {project.stack}
      </span>
      {/* Hover preview. Hidden below 1100px, where it would cover the description being read. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-55 z-2 aspect-16/10 w-85 -translate-y-1/2 -rotate-2 overflow-hidden rounded-button border border-white/16 opacity-0 shadow-preview transition-[opacity,rotate,scale] duration-250 ease-out group-hover/other:opacity-100 motion-safe:-rotate-4 motion-safe:scale-92 motion-safe:group-hover/other:-rotate-2 motion-safe:group-hover/other:scale-100 max-[1100px]:hidden"
      >
        <ProjectVisual visual={project.visual} title={project.title} />
      </span>
    </a>
  );
}

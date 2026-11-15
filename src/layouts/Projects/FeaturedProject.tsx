import type { FeaturedProject as Project } from "../../data/projects";
import { StarIcon } from "../../components/icons";
import { externalLinkProps } from "../../lib/links";
import ProjectVisual from "./ProjectVisual";

// Hover motion on the preview: 250ms (frame) / 300ms (zoom), strong ease-out, transforms only.
// Movement is wrapped in motion-safe:, so with reduced motion nothing moves (only colours change).
const frameStyle =
  "rounded-[18px] border border-white/16 bg-[#141A1B] p-2.5 transition-[translate,rotate] duration-250 ease-out";
// The solid offset shadow is its own layer moved with transform, instead of an animated
// box-shadow (which would repaint every frame).
const shadowStyle =
  "absolute inset-0 -z-10 rounded-[18px] bg-offset transition-[translate,rotate,background-color] duration-250 ease-out group-hover/preview:bg-offset-hover";
// Lifts toward the text and tilts; mirrored on flipped rows so it always leans away from the image's outer edge.
const lift = {
  normal: {
    frame: "motion-safe:group-hover/preview:-translate-x-1.5 motion-safe:group-hover/preview:-translate-y-1.5 motion-safe:group-hover/preview:-rotate-1",
    shadow: "translate-x-2.5 translate-y-2.5 motion-safe:group-hover/preview:translate-x-3 motion-safe:group-hover/preview:translate-y-3 motion-safe:group-hover/preview:-rotate-1",
  },
  flipped: {
    frame: "motion-safe:group-hover/preview:translate-x-1.5 motion-safe:group-hover/preview:-translate-y-1.5 motion-safe:group-hover/preview:rotate-1",
    shadow: "-translate-x-2.5 translate-y-2.5 motion-safe:group-hover/preview:-translate-x-3 motion-safe:group-hover/preview:translate-y-3 motion-safe:group-hover/preview:rotate-1",
  },
};

const buttonMotion =
  "transition-[color,background-color,border-color,box-shadow,translate,scale] duration-160 ease-out active:scale-97 motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5";
const solidButton = `inline-flex min-h-11 items-center gap-2.5 rounded-full bg-ink px-5 text-[14px] font-semibold text-page shadow-button hover:text-page hover:shadow-button-hover ${buttonMotion}`;
const outlineButton = `inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/22 px-5 text-[14px] font-semibold text-ink hover:border-white/50 hover:text-ink ${buttonMotion}`;
const techTag = "rounded-lg border border-white/14 px-[11px] py-[5px] text-[13px] text-ink-soft";

export default function FeaturedProject({ project, index }: { project: Project; index: number }) {
  // Every other row puts the image on the right.
  const flipped = index % 2 === 1;
  const motion = flipped ? lift.flipped : lift.normal;
  // The image opens the live site when there is one, otherwise the repo.
  const previewHref = project.live ?? project.repo;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`flex items-center gap-16 max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-8 ${
        flipped ? "flex-row-reverse" : ""
      }`}
    >
      {/* Mouse/touch shortcut only: the buttons below are the accessible way in, so this
          duplicate link is skipped by Tab and hidden from screen readers. */}
      <a
        href={previewHref}
        tabIndex={-1}
        aria-hidden="true"
        className="group/preview block min-w-0 flex-[1_1_56%]"
        {...externalLinkProps(previewHref)}
      >
        <div className="relative isolate">
          <div className={`${shadowStyle} ${motion.shadow}`} />
          <div className={`${frameStyle} ${motion.frame}`}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-surface-sunken">
              <ProjectVisual
                visual={project.visual}
                title={project.title}
                className="transition-[scale] duration-300 ease-out motion-safe:group-hover/preview:scale-[1.035]"
              />
            </div>
          </div>
        </div>
      </a>

      <div className="flex min-w-0 flex-[1_1_44%] flex-col gap-4">
        <span className="font-mono text-[12px] tracking-[.08em] text-faint uppercase">
          {number} / {project.year} · {project.category}
        </span>
        <h3 className="text-[44px] leading-[1.05] tracking-[-0.03em] [overflow-wrap:anywhere] max-[900px]:text-[34px]">
          {project.title}
        </h3>
        <p className="text-[18px] text-ink-soft">{project.tagline}</p>
        <p className="text-[15px] leading-[1.65] text-muted">{project.description}</p>
        <span className="inline-flex items-center gap-2 self-start rounded-lg border border-accent/40 bg-accent/12 px-3 py-[7px] text-[13px] font-medium text-accent-bright">
          <StarIcon />
          {project.highlight}
        </span>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className={techTag}>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-1.5 flex flex-wrap gap-2.5">
          <a className={solidButton} href={project.repo} {...externalLinkProps(project.repo)}>
            View on GitHub <span aria-hidden="true">→</span>
          </a>
          {project.live && (
            <a className={outlineButton} href={project.live} {...externalLinkProps(project.live)}>
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

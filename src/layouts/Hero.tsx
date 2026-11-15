import avatar from "../assets/avatar-cutout.webp";
import { IconLink, IconTextLink } from "../components/IconLink";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "../components/icons";

// ── Entrance on first load ──────────────────────────────────────────────────────────────
// One wave, top to bottom, finishing in about a second. Each element uses the `rise` keyframe
// (index.css): it fades in while travelling up by --rise (0px = fade only).
// The lead (first headline line) travels furthest; support elements travel less; decoration
// only fades. Gaps between starts shrink (100 → 90 → 70ms) so it reads as a wave, not a queue.
// Under reduced motion everything fades in together, with no movement and no delays.
const reduced = "motion-reduce:[--rise:0px] motion-reduce:[animation-delay:0ms]";
const enter = {
  badge: `[--rise:0px] animate-[rise_500ms_var(--ease-out)_both] ${reduced}`,
  title: `[--rise:16px] animate-[rise_700ms_var(--ease-out)_60ms_both] ${reduced}`,
  subtitle: `[--rise:12px] animate-[rise_650ms_var(--ease-out)_160ms_both] ${reduced}`,
  intro: `[--rise:8px] animate-[rise_600ms_var(--ease-out)_250ms_both] ${reduced}`,
  links: `[--rise:6px] animate-[rise_550ms_var(--ease-out)_320ms_both] ${reduced}`,
  avatarBackdrop: `[--rise:0px] animate-[rise_700ms_var(--ease-out)_both] ${reduced}`,
  avatarImage: `[--rise:40px] animate-[rise_900ms_var(--ease-out)_140ms_both] ${reduced}`,
  location: `[--rise:0px] animate-[rise_450ms_var(--ease-out)_520ms_both] ${reduced}`,
};

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-page items-center justify-between gap-12 px-6 pt-18 pb-24 max-[760px]:flex-col-reverse max-[760px]:items-start">
      <div className="flex max-w-170 flex-col gap-7">
        <span
          className={`inline-flex items-center gap-2.5 self-start rounded-full border border-white/12 bg-white/3 px-3.5 py-2 text-[13px] text-ink-soft before:size-2 before:rounded-full before:bg-accent before:shadow-[0_0_0_4px_var(--color-accent-glow)] ${enter.badge}`}
        >
          Open to software &amp; AI engineering roles
        </span>
        <h1 className="text-[clamp(40px,5.2vw,68px)] leading-[1.02] tracking-[-0.03em]">
          <span className={`block ${enter.title}`}>Hi, I’m David.</span>
          <span className={`block text-subtle ${enter.subtitle}`}>
            I build AI systems
            <br />
            people can rely on.
          </span>
        </h1>
        <p className={`max-w-140 text-[18px] leading-[1.6] text-muted ${enter.intro}`}>
          First-Class BSc Artificial Intelligence graduate from the University
          of Essex, now a Software Intern at Huawei in Lagos. I ship full-stack
          products with Python, TypeScript and React and the ML behind them.
        </p>
        <div className={`flex flex-wrap gap-2.5 ${enter.links}`}>
          <IconLink href="https://github.com/davidrapu" label="GitHub">
            <GitHubIcon />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/davidrapu" label="LinkedIn">
            <LinkedInIcon />
          </IconLink>
          <IconLink href="mailto:Daverapu47@yahoo.com" label="Email">
            <MailIcon />
          </IconLink>
          <IconTextLink href="#resume">
            RÉSUMÉ <DownloadIcon />
          </IconTextLink>
        </div>
      </div>

      <div className="relative h-120 w-95 flex-none max-[760px]:h-95 max-[760px]:w-75">
        <div
          className={`absolute -inset-x-10 -bottom-7.5 h-110 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,.28),transparent)] blur-[30px] ${enter.avatarBackdrop}`}
          aria-hidden="true"
        />
        <div
          className={`absolute bottom-0 left-0 size-95 rounded-full border border-[rgba(94,234,212,.28)] bg-[radial-gradient(circle_at_50%_35%,#163330_0%,#0E1A1A_55%,#0A0F10_100%)] shadow-[inset_0_0_60px_rgba(45,212,191,.12)] max-[760px]:size-75 ${enter.avatarBackdrop}`}
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden rounded-b-[190px] max-[760px]:rounded-b-[150px]">
          {/* width/height = the file's real size (770×640), so the browser reserves the space
              before it loads; fetchPriority: it's the biggest thing on the first screen */}
          <img
            className={`absolute -bottom-1.5 left-1/2 h-auto w-140 max-w-none -translate-x-1/2 drop-shadow-[0_18px_30px_rgba(0,0,0,.55)] max-[760px]:w-110 ${enter.avatarImage}`}
            src={avatar}
            width={770}
            height={640}
            fetchPriority="high"
            alt="Portrait of David Rapu"
          />
        </div>
        <div
          className={`absolute bottom-7 -left-7 flex items-center gap-2 rounded-button border border-white/10 bg-[#121617] px-3.5 py-2.5 text-[13px] text-ink-soft max-[760px]:-left-2 ${enter.location}`}
        >
          <MapPinIcon /> Lagos, Nigeria
        </div>
      </div>
    </section>
  );
}

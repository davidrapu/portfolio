export default function Header() {
  return (
    <header className="mx-auto max-w-page px-6 relative flex items-center justify-between gap-4 py-7">
      <a
        className="font-mono text-[14px] font-medium tracking-[.04em]"
        href="#top"
      >
        DAVID<span className="text-accent">.dev</span>
      </a>
      <nav
        className="flex gap-1 rounded-full border border-white/10 bg-white/3 p-1 max-[760px]:hidden"
        aria-label="Sections"
      >
        <a
          className="rounded-full px-4 py-2.5 text-[14px] text-muted hover:bg-white/5 hover:text-ink"
          href="#about"
        >
          About
        </a>
        <a
          className="rounded-full px-4 py-2.5 text-[14px] text-muted hover:bg-white/5 hover:text-ink"
          href="#experience"
        >
          Experience
        </a>
        <a
          className="rounded-full px-4 py-2.5 text-[14px] text-muted hover:bg-white/5 hover:text-ink"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="rounded-full px-4 py-2.5 text-[14px] text-muted hover:bg-white/5 hover:text-ink"
          href="#contact"
        >
          Contact
        </a>
      </nav>
      <a
        className="rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-page hover:bg-white hover:text-page"
        href="#contact"
      >
        Get in touch
      </a>
    </header>
  );
}

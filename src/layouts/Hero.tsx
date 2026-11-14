import avatar from "../assets/avatar-cutout.webp";

export default function Hero() {
  return (
    <section className="mx-auto max-w-page px-6 relative flex items-center justify-between gap-12 pt-18 pb-24 max-[760px]:flex-col-reverse max-[760px]:items-start">
      <div className="flex max-w-170 flex-col gap-7">
        <span className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/12 bg-white/3 px-3.5 py-2 text-[13px] text-ink-soft before:size-2 before:rounded-full before:bg-accent before:shadow-[0_0_0_4px_var(--color-accent-glow)]">
          Open to software &amp; AI engineering roles
        </span>
        <h1 className="text-[clamp(40px,5.2vw,68px)] leading-[1.02] tracking-[-0.03em]">
          Hi, I’m David.
          <br />
          <span className="text-subtle">
            I build AI systems
            <br />
            people can rely on.
          </span>
        </h1>
        <p className="max-w-140 text-[18px] leading-[1.6] text-muted">
          First-ClassName BSc Artificial Intelligence graduate from the
          University of Essex, now a Software Intern at Huawei in Lagos. I ship
          full-stack products with Python, TypeScript and React and the ML
          behind them.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            className="inline-flex size-12 items-center justify-center gap-2.5 rounded-button border border-line-strong bg-white/3 transition-colors duration-150 hover:border-white/40"
            href="https://github.com/davidrapu" 
            aria-label="GitHub" target="_blank" 
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
            </svg>
          </a>
          <a
            className="inline-flex size-12 items-center justify-center gap-2.5 rounded-button border border-line-strong bg-white/3 transition-colors duration-150 hover:border-white/40"
            href="https://www.linkedin.com/in/davidrapu"
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            className="inline-flex size-12 items-center justify-center gap-2.5 rounded-button border border-line-strong bg-white/3 transition-colors duration-150 hover:border-white/40"
            href="mailto:Daverapu47@yahoo.com"
            aria-label="Email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
          <a
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-button border border-line-strong bg-white/3 transition-colors duration-150 hover:border-white/40 w-auto px-4.5 font-mono text-[13px] tracking-[.08em]"
            href="#resume"
          >
            RÉSUMÉ{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative h-120 w-95 flex-none max-[760px]:h-95 max-[760px]:w-75">
        <div
          className="absolute -inset-x-10 -bottom-7.5 h-110 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,.28),transparent)] blur-[30px]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-0 left-0 size-95 rounded-full border border-[rgba(94,234,212,.28)] bg-[radial-gradient(circle_at_50%_35%,#163330_0%,#0E1A1A_55%,#0A0F10_100%)] shadow-[inset_0_0_60px_rgba(45,212,191,.12)] max-[760px]:size-75"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 overflow-hidden rounded-b-[190px] max-[760px]:rounded-b-[150px]">
          <img
            className="absolute -bottom-1.5 left-1/2 h-auto w-140 max-w-none -translate-x-1/2 drop-shadow-[0_18px_30px_rgba(0,0,0,.55)] max-[760px]:w-110"
            src={avatar}
            alt="Portrait of David Rapu"
          />
        </div>
        <div className="absolute bottom-7 -left-7 flex items-center gap-2 rounded-button border border-white/10 bg-[#121617] px-3.5 py-2.5 text-[13px] text-ink-soft max-[760px]:-left-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>{" "}
          Lagos, Nigeria
        </div>
      </div>
    </section>
  );
}

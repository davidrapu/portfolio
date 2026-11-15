import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "../components/icons";
import { EMAIL, EMAIL_HREF } from "../data/contact";
import { pressable } from "../lib/styles";

type CopyState = "idle" | "copied" | "failed";

// Label swap for the copy button: the two labels sit in the same grid cell and crossfade
// (150ms, strong ease-out). A 2px blur during the swap blends them, so you never see two
// distinct words overlapping.
const labelBase = "col-start-1 row-start-1 inline-flex items-center justify-center gap-2 transition-[opacity,filter] duration-150 ease-out";
const shownLabel = "opacity-100 blur-0";
const hiddenLabel = "opacity-0 blur-[2px]";

export default function Contact() {
  const [copy, setCopy] = useState<CopyState>("idle");
  const resetTimer = useRef<number | undefined>(undefined);

  // Don't leave a timer running if the section unmounts.
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  // Many visitors have no mail app set up, so a mailto: link alone can do nothing for them.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopy("copied");
    } catch {
      setCopy("failed"); // e.g. clipboard blocked; the address is still visible to copy by hand
    }
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopy("idle"), 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-page px-6 pt-24">
      {/* 28px radius on purpose: the one large closing card is rounder than the 22px content cards */}
      <div className="flex flex-col items-center gap-5 rounded-[28px] border border-line bg-surface px-12 py-16 text-center max-[760px]:px-6 max-[760px]:py-12">
        <span className="font-mono text-[12px] tracking-[.14em] text-accent">
          03 // CONTACT
        </span>
        <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.05] tracking-[-0.03em]">
          Let’s build something useful.
        </h2>
        <p className="max-w-130 text-[17px] leading-[1.6] text-muted">
          Open to software engineering and AI engineering roles. Based in Lagos,
          happy to work remotely or relocate.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {/* overflow-wrap: an email has no natural break points, so let it break anywhere
              rather than overflow a narrow phone */}
          <a
            className={`rounded-full bg-ink px-6.5 py-3.5 text-[15px] font-semibold text-page wrap-anywhere hover:bg-white hover:text-page ${pressable}`}
            href={EMAIL_HREF}
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className={`grid min-h-12 cursor-pointer rounded-full border border-white/22 px-5 text-[15px] font-semibold text-ink hover:border-white/50 ${pressable}`}
          >
            <span className={`${labelBase} ${copy === "idle" ? shownLabel : hiddenLabel}`}>
              <CopyIcon /> Copy email
            </span>
            <span
              aria-hidden="true"
              className={`${labelBase} text-accent-bright ${copy === "copied" ? shownLabel : hiddenLabel}`}
            >
              <CheckIcon /> Copied
            </span>
            <span
              aria-hidden="true"
              className={`${labelBase} text-muted ${copy === "failed" ? shownLabel : hiddenLabel}`}
            >
              Couldn’t copy
            </span>
          </button>
        </div>
        {/* Announces the result to screen readers (the visual label swap is hidden from them) */}
        <span aria-live="polite" className="sr-only">
          {copy === "copied" ? "Email address copied" : copy === "failed" ? "Couldn’t copy the email address" : ""}
        </span>
      </div>
    </section>
  );
}

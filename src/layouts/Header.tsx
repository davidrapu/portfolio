import { useScrolled } from "../hooks/useScrolled";
import { pressable } from "../lib/styles";
import SectionNav from "./SectionNav";

// Sticky, so the section indicator stays visible while scrolling. It's transparent at the top
// of the page (the hero glow shows through) and gets a blurred background once you scroll.
export default function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "border-white/6 bg-page/80 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-5">
        <a
          className="font-mono text-[14px] font-medium tracking-[.04em] transition-colors duration-150"
          href="#top"
        >
          DAVID<span className="text-accent">.dev</span>
        </a>
        {/* On phones the nav drops to its own full-width row under the logo */}
        <SectionNav className="max-[760px]:order-last max-[760px]:w-full" />
        <a
          className={`rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-page hover:bg-white hover:text-page ${pressable}`}
          href="#contact"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

import { EMAIL_HREF, GITHUB_URL, LINKEDIN_URL } from "../data/contact";
import { externalLinkProps } from "../lib/links";

const links = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Email", href: EMAIL_HREF },
];

// Bottom of every page: copyright on the left, every way to reach David on the right.
// Its padding is also what keeps the Contact card off the bottom edge of the window.
export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-page flex-wrap justify-between gap-4 px-6 pt-10 pb-16 text-[13px] text-faint">
      <span>© {new Date().getFullYear()} David Rapu</span>
      <nav aria-label="Social" className="flex gap-5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-muted transition-colors duration-150 hover:text-ink"
            {...externalLinkProps(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

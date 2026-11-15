import { Card, CardLabel } from "../components/Card";
import { Pill } from "../components/Pill";
import { featuredRepos, modules, techStack } from "../data/about";
import { externalLinkProps } from "../lib/links";

const GITHUB = "https://github.com/davidrapu";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-page px-6 pt-28 pb-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <Card className="col-span-2 flex flex-col gap-4 max-[760px]:col-auto">
          <CardLabel>Education</CardLabel>
          <h2 className="text-[30px] tracking-[-0.02em]">
            BSc Artificial Intelligence — First Class
          </h2>
          <p className="text-[15px] leading-[1.6] text-muted">
            University of Essex, Colchester · 2023 – 2026 · Dean’s List of
            Excellence
          </p>
          <div className="flex flex-wrap gap-2">
            {modules.map((module) => (
              <Pill key={module}>{module}</Pill>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col justify-between gap-6">
          <CardLabel>Featured result</CardLabel>
          <div>
            <div className="font-display text-[72px] leading-none font-semibold tracking-[-0.04em] text-accent">
              96.75%
            </div>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted">
              Test accuracy of Cognify’s Random Forest model for predicting
              cognitive-impairment risk.
            </p>
          </div>
        </Card>

        <Card className="flex flex-col gap-4.5">
          <div className="flex items-center justify-between">
            <CardLabel>GitHub</CardLabel>
            <a
              className="text-[13px] text-muted transition-colors duration-150 hover:text-ink"
              href={GITHUB}
              {...externalLinkProps(GITHUB)}
            >
              @davidrapu ↗
            </a>
          </div>
          <div>
            {featuredRepos.map((repo) => {
              const href = `${GITHUB}/${repo.name}`;
              return (
                <a
                  key={repo.name}
                  className="flex justify-between border-b border-white/6 py-3 font-mono text-[14px] transition-colors duration-150"
                  href={href}
                  {...externalLinkProps(href)}
                >
                  <span>{repo.name}</span>
                  <span className="text-[12px] text-faint">{repo.languages}</span>
                </a>
              );
            })}
          </div>
        </Card>

        <Card className="col-span-2 flex flex-col gap-5 max-[760px]:col-auto">
          <CardLabel>Tech stack</CardLabel>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-7 gap-y-5">
            {techStack.map((group) => (
              <div key={group.label}>
                <dt className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-accent">
                  {group.label}
                </dt>
                <dd className="text-[14px] leading-[1.55] text-ink-soft">
                  {group.items}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </section>
  );
}

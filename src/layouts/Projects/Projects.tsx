import { useState } from "react";
import { featuredProjects, otherProjects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import OtherProject from "./OtherProject";
import ProjectTabs from "./ProjectTabs";

type TabId = "featured" | "others";

const tabs = [
  { id: "featured", label: "Featured", count: featuredProjects.length },
  { id: "others", label: "Others", count: otherProjects.length },
];

// The panel that appears fades in over 200ms (opacity only, no stagger: it's tab content).
// It replays each time because un-hiding a panel restarts its CSS animation.
const panelFade = "[--rise:0px] animate-[rise_200ms_var(--ease-out)_both]";

export default function Projects() {
  const [tab, setTab] = useState<TabId>("featured");

  return (
    <section id="projects" className="mx-auto max-w-page px-6 py-24">
      <div className="mb-18 flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[12px] tracking-[.14em] text-accent">02 // PROJECTS</span>
          <h2 className="text-[48px] tracking-[-0.03em] max-[760px]:text-[36px]">Things I’ve built</h2>
          <p className="text-[16px] text-muted">
            Picked from my GitHub. The big ones first, then smaller builds.
          </p>
        </div>
        <ProjectTabs tabs={tabs} active={tab} onChange={(id) => setTab(id as TabId)} />
      </div>

      <div
        id="panel-featured"
        role="tabpanel"
        aria-labelledby="tab-featured"
        hidden={tab !== "featured"}
        className={`flex flex-col gap-32 ${panelFade}`}
      >
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.title} project={project} index={index} />
        ))}
      </div>

      <div
        id="panel-others"
        role="tabpanel"
        aria-labelledby="tab-others"
        hidden={tab !== "others"}
        className={`border-t border-white/10 ${panelFade}`}
      >
        {otherProjects.map((project, index) => (
          // Numbering continues after the featured list (06, 07…)
          <OtherProject
            key={project.title}
            project={project}
            number={featuredProjects.length + index + 1}
          />
        ))}
      </div>
    </section>
  );
}

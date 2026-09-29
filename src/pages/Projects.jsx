import React, { useState } from "react";
import SectionReveal from "../components/common/SectionReveal";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/projects/ProjectCard";
import { projects, allFilterTags } from "../data/projects";

const chip =
  "px-4 py-[7px] rounded-full border border-line bg-elevated text-muted text-[0.88rem] font-semibold " +
  "cursor-pointer transition-all duration-300 ease-signal " +
  "hover:border-accent hover:text-accent hover:-translate-y-0.5";

const chipActive = "bg-accent border-accent text-white";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.filterTags.includes(filter));

  return (
    <div className="pt-[calc(62px+4rem)] min-h-screen">
      <div className="w-full max-w-shell mx-auto px-6">
        <SectionReveal>
          <SectionHeading
            kicker="Portfolio"
            title="Projects"
            subtitle="Things I've designed, built, debugged, and deployed. Filter by technology — every card opens a short case study."
          />
        </SectionReveal>

        <SectionReveal>
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by technology">
            {allFilterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`${chip}${filter === tag ? ` ${chipActive}` : ""}`}
                aria-pressed={filter === tag}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 [&>*]:grid">
          {visible.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

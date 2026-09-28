import React, { useState } from "react";
import SectionReveal from "../components/common/SectionReveal";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/projects/ProjectCard";
import { projects, allFilterTags } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.filterTags.includes(filter));

  return (
    <div className="page">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            kicker="Portfolio"
            title="Projects"
            subtitle="Things I've designed, built, debugged, and deployed. Filter by technology — every card opens a short case study."
          />
        </SectionReveal>

        <SectionReveal>
          <div className="filter-bar" role="group" aria-label="Filter projects by technology">
            {allFilterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`filter-chip${filter === tag ? " active" : ""}`}
                aria-pressed={filter === tag}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="projects-grid">
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

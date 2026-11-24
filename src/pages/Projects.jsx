import React, { useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/projects/ProjectCard";
import { projects, allFilterTags } from "../data/projects";

// Colour lives on the variants only — a base class that also set text/bg
// would race them on CSS order.
const chip =
  "px-4 py-2 border text-[0.82rem] font-medium cursor-pointer transition-colors duration-200";

const chipIdle = "border-line-strong text-muted hover:border-accent hover:text-accent";

const chipActive = "border-accent bg-accent text-on-accent hover:bg-accent-strong hover:border-accent-strong";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.filterTags.includes(filter));

  return (
    <div className="pt-[calc(64px+3.5rem)] min-h-screen">
      <div className="w-full max-w-shell mx-auto px-6">
        <SectionHeading
          title="Projects"
          subtitle="Five apps I designed, built and deployed. Each card opens a short case study — what the problem was, how I solved it, and what shipped."
        />

        <div
          className="flex flex-wrap gap-2 mb-8"
          role="group"
          aria-label="Filter projects by technology"
        >
          {allFilterTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`${chip} ${filter === tag ? chipActive : chipIdle}`}
              aria-pressed={filter === tag}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 [&>*]:grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

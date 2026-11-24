import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../projects/ProjectCard";
import { featuredProjects } from "../../data/projects";
import { sectionTitle, btn } from "../../styles/classes";

export default function FeaturedProjects() {
  return (
    <section className="py-20 max-md:py-14" aria-label="Featured projects">
      <div className="w-full max-w-shell mx-auto px-6">
        <div className="mb-8">
          <h2 className={sectionTitle}>Recent work</h2>
          <p className="max-w-[52ch] mb-0">
            Two of the five. Each one opens a short case study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 [&>*]:grid">
          {featuredProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-start mt-8">
          <Link to="/projects" className={`${btn.base} ${btn.outline}`}>
            All projects
          </Link>
        </div>
      </div>
    </section>
  );
}

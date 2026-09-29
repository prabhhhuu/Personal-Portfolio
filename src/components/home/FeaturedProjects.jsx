import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SectionReveal from "../common/SectionReveal";
import ProjectCard from "../projects/ProjectCard";
import { featuredProjects } from "../../data/projects";
import { sectionTitle, btn } from "../../styles/classes";

/** "Selected work" preview on Home — first two featured projects. */
export default function FeaturedProjects() {
  return (
    <section className="py-24 max-md:py-16" aria-label="Featured projects">
      <div className="w-full max-w-shell mx-auto px-6">
        <SectionReveal>
          <div className="mb-10">
            <h2 className={sectionTitle}>Selected work</h2>
            <p className="max-w-[620px]">
              A couple of things I've built and shipped. The full collection lives on the projects
              page.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 [&>*]:grid">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <SectionReveal key={project.id} delay={index * 120}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="flex justify-center mt-10">
          <Link to="/projects" className={`${btn.base} ${btn.outline}`}>
            All projects <FiArrowRight aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

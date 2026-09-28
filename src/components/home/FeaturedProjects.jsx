import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SectionReveal from "../common/SectionReveal";
import ProjectCard from "../projects/ProjectCard";
import { featuredProjects } from "../../data/projects";

/** "Selected work" preview on Home — first two featured projects. */
export default function FeaturedProjects() {
  return (
    <section className="section" aria-label="Featured projects">
      <div className="container">
        <SectionReveal>
          <div className="section-head">
            <h2 className="section-title">Selected work</h2>
            <p className="section-subtitle">
              A couple of things I've built and shipped. The full collection lives on the projects
              page.
            </p>
          </div>
        </SectionReveal>

        <div className="projects-grid">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <SectionReveal key={project.id} delay={index * 120}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="featured-cta">
          <Link to="/projects" className="btn btn-outline">
            All projects <FiArrowRight aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

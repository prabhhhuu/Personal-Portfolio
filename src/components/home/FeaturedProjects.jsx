import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../projects/ProjectCard";
import { featuredProjects } from "../../data/projects";
import { recentRoles } from "../../data/experience";
import { sectionTitle, btn } from "../../styles/classes";

export default function FeaturedProjects() {
  return (
    <section className="py-20 max-md:py-14" aria-label="Recent work">
      <div className="w-full max-w-shell mx-auto px-6">
        <div className="mb-8">
          <h2 className={sectionTitle}>Recent work</h2>
          <p className="max-w-[52ch] mb-0">
            Two internships, newest first — then two of the five projects. Each
            project opens a short case study.
          </p>
        </div>

        <ul className="border-t border-line mb-12" aria-label="Recent roles">
          {recentRoles.map((role) => (
            <li
              key={role.id}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-8 gap-y-1 border-b border-line py-5"
            >
              <span className="annotation md:pt-1">{role.period}</span>
              <div>
                <h3 className="text-[1.02rem] mb-1">
                  {role.role}{" "}
                  <span className="text-muted font-normal">· {role.org}</span>
                </h3>
                <p className="text-muted text-[0.92rem] mb-0">{role.note}</p>
              </div>
            </li>
          ))}
        </ul>

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

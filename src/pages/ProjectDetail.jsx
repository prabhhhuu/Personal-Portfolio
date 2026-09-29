import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Badge from "../components/common/Badge";
import SectionReveal from "../components/common/SectionReveal";
import { getProjectById, projects } from "../data/projects";
import { btn, projectLink, tagList, card, heroGreeting } from "../styles/classes";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [imgError, setImgError] = useState(false);

  if (!project) {
    return (
      <div className="pt-[calc(62px+4rem)] min-h-screen">
        <div className="w-full max-w-shell mx-auto px-6 min-h-[70vh] flex flex-col items-center justify-center text-center gap-4">
          <h1>Project not found</h1>
          <p className="text-muted">That case study doesn't exist — it may have been renamed.</p>
          <Link to="/projects" className={`${btn.base} ${btn.primary}`}>
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="pt-[calc(62px+4rem)] min-h-screen">
      <article className="w-full max-w-shell mx-auto px-6">
        <SectionReveal>
          <Link to="/projects" className={`${projectLink} inline-flex mb-6`}>
            <FiArrowLeft aria-hidden="true" /> All projects
          </Link>

          <header className="border-b border-line pb-10 mb-10">
            <p className={heroGreeting}>{project.subtitle}</p>
            <h1>{project.title}</h1>
            <div className={tagList}>
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </header>
        </SectionReveal>

        <SectionReveal>
          <div className="rounded-card overflow-hidden border border-line mb-10 bg-accent-soft">
            {project.image && !imgError ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="aspect-video w-full flex flex-col items-center justify-center gap-2 text-accent"
                aria-hidden="true"
              >
                <FiImage className="text-4xl" />
                <span className="font-display font-bold text-[1.05rem] text-body">
                  {project.title}
                </span>
                <span className="text-muted text-xs">
                  add a screenshot at public/assets/projects/{project.id}/cover.png
                </span>
              </div>
            )}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div>
            <SectionReveal>
              <section className="mb-10">
                <h2 className="text-[1.3rem] mb-2">The problem</h2>
                <p>{project.problem}</p>
              </section>
            </SectionReveal>
            <SectionReveal>
              <section className="mb-10">
                <h2 className="text-[1.3rem] mb-2">The approach</h2>
                <p>{project.approach}</p>
              </section>
            </SectionReveal>
            <SectionReveal>
              <section className="mb-10">
                <h2 className="text-[1.3rem] mb-2">The result</h2>
                <p>{project.result}</p>
              </section>
            </SectionReveal>
            {project.gallery && project.gallery.length > 0 ? (
              <SectionReveal>
                <section className="mb-10">
                  <h2 className="text-[1.3rem] mb-2">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 [&>img]:rounded [&>img]:border [&>img]:border-line [&>img]:aspect-video [&>img]:object-cover [&>img]:w-full">
                    {project.gallery.map((src) => (
                      <img key={src} src={src} alt={`${project.title} additional screenshot`} loading="lazy" />
                    ))}
                  </div>
                </section>
              </SectionReveal>
            ) : null}
          </div>

          <aside>
            <SectionReveal direction="right">
              <div className="flex flex-col gap-4 bg-elevated border border-line rounded-card p-6 h-fit">
                <div>
                  <p className="text-xs uppercase tracking-[0.06em] text-muted font-semibold mb-0">
                    Stack
                  </p>
                  <div className={tagList}>
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.06em] text-muted font-semibold mb-0">
                    Links
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    {project.liveUrl ? (
                      <a className={projectLink} href={project.liveUrl} target="_blank" rel="noreferrer">
                        <FiExternalLink aria-hidden="true" /> Live demo
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a className={projectLink} href={project.repoUrl} target="_blank" rel="noreferrer">
                        <FiGithub aria-hidden="true" /> Source code
                      </a>
                    ) : null}
                    {!project.liveUrl && !project.repoUrl ? (
                      <a className={projectLink} href="https://github.com/prabhhhuu" target="_blank" rel="noreferrer">
                        <FiGithub aria-hidden="true" /> See GitHub for code
                      </a>
                    ) : null}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.06em] text-muted font-semibold mb-0">
                    Highlights
                  </p>
                  <ul className="timeline-points flex flex-col gap-1">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </aside>
        </div>

        <section className="mb-10 mt-16">
          <h2>More projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-lg:grid-cols-1">
            {others.map((other) => (
              <Link key={other.id} to={`/projects/${other.id}`} className={`${card} flex-col gap-1 p-6`}>
                <strong className="font-display">{other.title}</strong>
                <span className="text-muted text-[0.85rem]">{other.subtitle}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

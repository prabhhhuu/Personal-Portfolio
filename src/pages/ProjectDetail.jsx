import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Badge from "../components/common/Badge";
import SectionReveal from "../components/common/SectionReveal";
import { getProjectById, projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [imgError, setImgError] = useState(false);

  if (!project) {
    return (
      <div className="page">
        <div className="container notfound">
          <h1>Project not found</h1>
          <p className="muted">That case study doesn't exist — it may have been renamed.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="page">
      <article className="container">
        <SectionReveal>
          <Link to="/projects" className="project-link back-link">
            <FiArrowLeft aria-hidden="true" /> All projects
          </Link>

          <header className="detail-hero">
            <p className="hero-greeting">{project.subtitle}</p>
            <h1>{project.title}</h1>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </header>
        </SectionReveal>

        <SectionReveal>
          <div className="detail-cover">
            {project.image && !imgError ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="project-thumb-fallback" style={{ aspectRatio: "16 / 9" }}>
                <FiImage className="fallback-icon" />
                <span className="fallback-name">{project.title}</span>
                <span className="muted fallback-hint">
                  add a screenshot at public/assets/projects/{project.id}/cover.png
                </span>
              </div>
            )}
          </div>
        </SectionReveal>

        <div className="detail-meta-grid">
          <div>
            <SectionReveal>
              <section className="detail-section">
                <h2>The problem</h2>
                <p>{project.problem}</p>
              </section>
            </SectionReveal>
            <SectionReveal>
              <section className="detail-section">
                <h2>The approach</h2>
                <p>{project.approach}</p>
              </section>
            </SectionReveal>
            <SectionReveal>
              <section className="detail-section">
                <h2>The result</h2>
                <p>{project.result}</p>
              </section>
            </SectionReveal>
            {project.gallery && project.gallery.length > 0 ? (
              <SectionReveal>
                <section className="detail-section">
                  <h2>Gallery</h2>
                  <div className="gallery-grid">
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
              <div className="detail-facts">
                <div>
                  <p className="detail-fact-label">Stack</p>
                  <div className="project-tags">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="detail-fact-label">Links</p>
                  <div className="project-links" style={{ flexDirection: "column", alignItems: "flex-start" }}>
                    {project.liveUrl ? (
                      <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                        <FiExternalLink aria-hidden="true" /> Live demo
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer">
                        <FiGithub aria-hidden="true" /> Source code
                      </a>
                    ) : null}
                    {!project.liveUrl && !project.repoUrl ? (
                      <a className="project-link" href="https://github.com/prabhhhuu" target="_blank" rel="noreferrer">
                        <FiGithub aria-hidden="true" /> See GitHub for code
                      </a>
                    ) : null}
                  </div>
                </div>
                <div>
                  <p className="detail-fact-label">Highlights</p>
                  <ul className="timeline-points">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </aside>
        </div>

        <section className="detail-section" style={{ marginTop: "var(--space-6)" }}>
          <h2>More projects</h2>
          <div className="more-projects">
            {others.map((other) => (
              <Link key={other.id} to={`/projects/${other.id}`} className="card more-card">
                <strong>{other.title}</strong>
                <span className="muted">{other.subtitle}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

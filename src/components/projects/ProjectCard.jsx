import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Badge from "../common/Badge";
import { profile } from "../../data/profile";

/**
 * Card for the projects grid. Shows a thumbnail when available,
 * otherwise a branded fallback. Links to the detail page; live/code
 * links appear when the project provides them.
 */
export default function ProjectCard({ project }) {
  const { id, title, subtitle, short, tags, image, liveUrl, repoUrl } = project;
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <article className="card project-card">
      <Link
        to={`/projects/${id}`}
        className="project-thumb-link"
        aria-label={`View ${title} case study`}
      >
        {showImage ? (
          <img
            className="project-thumb"
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-thumb-fallback" aria-hidden="true">
            <FiImage className="fallback-icon" />
            <span className="fallback-name">{title}</span>
            <span className="muted fallback-hint">screenshot coming soon</span>
          </div>
        )}
      </Link>

      <div className="project-body">
        <div>
          <h3 className="project-title">
            <Link to={`/projects/${id}`} className="project-title-link">
              {title}
            </Link>
          </h3>
          <p className="project-subtitle">{subtitle}</p>
        </div>

        <p className="project-desc">{short}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="project-links">
          <Link to={`/projects/${id}`} className="project-link">
            Case study →
          </Link>
          {liveUrl ? (
            <a className="project-link" href={liveUrl} target="_blank" rel="noreferrer">
              <FiExternalLink aria-hidden="true" /> Live
            </a>
          ) : null}
          {repoUrl ? (
            <a className="project-link" href={repoUrl} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> Code
            </a>
          ) : null}
          {!liveUrl && !repoUrl ? (
            <a
              className="project-link"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" /> More on GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

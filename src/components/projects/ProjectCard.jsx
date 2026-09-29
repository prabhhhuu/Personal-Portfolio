import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Badge from "../common/Badge";
import { profile } from "../../data/profile";
import { card, projectLink, tagList } from "../../styles/classes";

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
    <article className={`${card} flex flex-col`}>
      <Link
        to={`/projects/${id}`}
        className="block"
        aria-label={`View ${title} case study`}
      >
        {showImage ? (
          <img
            className="aspect-video w-full object-cover bg-accent-soft"
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="aspect-video w-full flex flex-col items-center justify-center gap-2 text-accent"
            style={{ background: "linear-gradient(135deg, var(--accent-soft), transparent)" }}
            aria-hidden="true"
          >
            <FiImage className="text-4xl" />
            <span className="font-display font-bold text-[1.05rem] text-body">{title}</span>
            <span className="text-muted text-xs">screenshot coming soon</span>
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="m-0 text-[1.15rem]">
            <Link to={`/projects/${id}`} className="text-body hover:text-accent transition-colors duration-300">
              {title}
            </Link>
          </h3>
          <p className="text-[0.85rem] text-muted mt-0.5 mb-0">{subtitle}</p>
        </div>

        <p className="text-[0.93rem] m-0">{short}</p>

        <div className={tagList}>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <Link to={`/projects/${id}`} className={projectLink}>
            Case study →
          </Link>
          {liveUrl ? (
            <a className={projectLink} href={liveUrl} target="_blank" rel="noreferrer">
              <FiExternalLink aria-hidden="true" /> Live
            </a>
          ) : null}
          {repoUrl ? (
            <a className={projectLink} href={repoUrl} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> Code
            </a>
          ) : null}
          {!liveUrl && !repoUrl ? (
            <a
              className={projectLink}
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

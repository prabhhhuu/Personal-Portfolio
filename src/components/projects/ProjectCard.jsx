import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Badge from "../common/Badge";
import { profile } from "../../data/profile";
import { card, projectLink, tagList } from "../../styles/classes";

/**
 * Project entry as a sheet detail: full-bleed image, hairline frame,
 * no shadow, no lift. Links read as plain words.
 */
export default function ProjectCard({ project }) {
  const { id, title, subtitle, short, tags, image, liveUrl, repoUrl } = project;
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <article className={`${card} group`}>
      <Link to={`/projects/${id}`} className="block" aria-label={`Open ${title}`}>
        {showImage ? (
          <img
            className="aspect-[16/10] w-full object-cover border-b border-line"
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="aspect-[16/10] w-full flex flex-col items-center justify-center gap-2 text-accent border-b border-line"
            aria-hidden="true"
          >
            <FiImage className="text-3xl" />
            <span className="text-body text-[0.95rem]">{title}</span>
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="m-0 text-[1.16rem]">
            <Link
              to={`/projects/${id}`}
              className="text-body underline decoration-transparent underline-offset-4 group-hover:decoration-accent"
            >
              {title}
            </Link>
          </h3>
          <p className="annotation mt-1 mb-0">{subtitle}</p>
        </div>

        <p className="text-[0.93rem] m-0">{short}</p>

        <div className={tagList}>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-1">
          <Link to={`/projects/${id}`} className={projectLink}>
            Case study
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
            <a className={projectLink} href={profile.socials.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

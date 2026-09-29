import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { profile } from "../../data/profile";

const infoItem =
  "flex items-center gap-4 text-muted text-[0.95rem] [&>svg]:text-accent [&>svg]:text-[1.1rem] [&>svg]:shrink-0";

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      <a className={`${infoItem} text-body hover:text-accent transition-colors duration-300`} href={profile.socials.github} target="_blank" rel="noreferrer">
        <FiGithub aria-hidden="true" />
        <span>github.com/prabhhhuu</span>
      </a>
      <a className={`${infoItem} text-body hover:text-accent transition-colors duration-300`} href={profile.socials.linkedin} target="_blank" rel="noreferrer">
        <FiLinkedin aria-hidden="true" />
        <span>linkedin.com/in/sakthi-prabhu</span>
      </a>
      <a className={`${infoItem} text-body hover:text-accent transition-colors duration-300`} href={profile.socials.email}>
        <FiMail aria-hidden="true" />
        <span>{profile.email}</span>
      </a>
      <span className={infoItem}>
        <FiPhone aria-hidden="true" />
        <span>{profile.phone}</span>
      </span>
      <span className={infoItem}>
        <FiMapPin aria-hidden="true" />
        <span>{profile.location}</span>
      </span>
    </div>
  );
}

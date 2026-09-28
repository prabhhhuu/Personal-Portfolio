import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { profile } from "../../data/profile";

export default function SocialLinks() {
  return (
    <div className="info-list">
      <a className="info-item" href={profile.socials.github} target="_blank" rel="noreferrer">
        <FiGithub aria-hidden="true" />
        <span>github.com/prabhhhuu</span>
      </a>
      <a className="info-item" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
        <FiLinkedin aria-hidden="true" />
        <span>linkedin.com/in/sakthi-prabhu</span>
      </a>
      <a className="info-item" href={profile.socials.email}>
        <FiMail aria-hidden="true" />
        <span>{profile.email}</span>
      </a>
      <span className="info-item">
        <FiPhone aria-hidden="true" />
        <span>{profile.phone}</span>
      </span>
      <span className="info-item">
        <FiMapPin aria-hidden="true" />
        <span>{profile.location}</span>
      </span>
    </div>
  );
}

import React, { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import Button from "../common/Button";
import { profile } from "../../data/profile";

/**
 * Reusable hero block: greeting, name, role, tagline, CTAs and stats.
 * Used full-height on Home; `compact` variant for section tops.
 */
export default function Hero({ compact = false }) {
  const { name, role, tagline } = profile;
  const [avatarError, setAvatarError] = useState(false);
  const AVATAR_SRC = "/assets/avatar.webp"; // transparent-background portrait

  const stats = [
    { value: "4+", label: "Deployed projects" },
    { value: "2", label: "Internships" },
    { value: "1", label: "Open-source contribution" },
  ];

  if (compact) {
    return (
      <div className="section-head">
        <p className="hero-greeting">{tagline}</p>
        <h1>{name}</h1>
      </div>
    );
  }

  return (
    <section className="hero" aria-label="Introduction">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">{name}.</h1>
          <p className="hero-role">
            {role} · React.js · Node.js
          </p>
          <p className="hero-tagline">{tagline}</p>

          <div className="hero-actions">
            <Button to="/projects">View my work</Button>
            <Button to="/contact" variant="outline">
              Get in touch
            </Button>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <div className="hero-stat-value">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <FiArrowDown />
            <span>Scroll to explore</span>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-inner">
              {!avatarError ? (
                <img
                  className="avatar-photo"
                  src={AVATAR_SRC}
                  alt={`${name} portrait`}
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <span className="avatar-initials" aria-hidden="true">
                  SP
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import Button from "../common/Button";
import { profile } from "../../data/profile";
import { heroGreeting } from "../../styles/classes";

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
      <div className="mb-10">
        <p className={heroGreeting}>{tagline}</p>
        <h1>{name}</h1>
      </div>
    );
  }

  return (
    <section
      className="hero-glow min-h-[calc(100vh-62px)] flex items-center pt-[62px]"
      aria-label="Introduction"
    >
      <div className="w-full max-w-shell mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] items-center gap-16 text-center lg:text-left">
        <div className="hero-copy max-lg:mx-auto">
          <p className={heroGreeting}>Hi, my name is</p>
          <h1 className="text-[clamp(2.4rem,6vw,4rem)] mb-2">{name}.</h1>
          <p className="font-display text-[clamp(1.2rem,2.5vw,1.7rem)] text-muted mb-6">
            {role} · React.js · Node.js
          </p>
          <p className="max-w-[540px] text-[1.05rem] mb-10 max-lg:mx-auto">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-10 max-lg:justify-center">
            <Button to="/projects">View my work</Button>
            <Button to="/contact" variant="outline">
              Get in touch
            </Button>
          </div>

          <div className="flex gap-10 flex-wrap max-lg:justify-center">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <div className="font-display text-2xl font-bold text-body">
                  {stat.value}
                </div>
                <div className="text-[0.85rem] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div
            className="inline-flex items-center gap-2 text-muted text-sm mt-10 animate-bob max-lg:mx-auto lg:mx-0"
            aria-hidden="true"
          >
            <FiArrowDown />
            <span>Scroll to explore</span>
          </div>
        </div>

        <div className="flex justify-center max-lg:order-first">
          <div className="avatar-ring relative w-[min(320px,70vw)] max-lg:w-[min(220px,60vw)] aspect-square rounded-full p-1.5">
            <div
              className="relative z-[1] w-full h-full rounded-full overflow-hidden border-[6px] border-bg flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 28%, var(--accent-soft), transparent 68%), var(--bg-elevated)",
              }}
            >
              {!avatarError ? (
                <img
                  className="w-full h-full object-contain object-[center_bottom] pt-[6%] transition-transform duration-300 ease-signal hover:scale-[1.03]"
                  src={AVATAR_SRC}
                  alt={`${name} portrait`}
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <span
                  className="font-display text-[clamp(3rem,8vw,4.5rem)] font-bold text-accent tracking-[0.02em]"
                  aria-hidden="true"
                >
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

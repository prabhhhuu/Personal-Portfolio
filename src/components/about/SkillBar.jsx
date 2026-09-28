import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Animated proficiency bar. The fill animates to its target width once
 * the row scrolls into view (Intersection Observer via useScrollReveal).
 */
export default function SkillBar({ name, level }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.4 });

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-label">
        <span>{name}</span>
        <span className="muted">{level}%</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div className="skill-fill" style={{ width: visible ? `${level}%` : "0%" }} />
      </div>
    </div>
  );
}

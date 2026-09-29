import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Animated proficiency bar. The fill animates to its target width once
 * the row scrolls into view (Intersection Observer via useScrollReveal).
 */
export default function SkillBar({ name, level }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.4 });

  return (
    <div className="mb-4 last:mb-0" ref={ref}>
      <div className="flex justify-between text-[0.88rem] mb-1.5 text-body">
        <span>{name}</span>
        <span className="text-muted text-[0.8rem]">{level}%</span>
      </div>
      <div
        className="h-2 rounded-full bg-accent-soft overflow-hidden"
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

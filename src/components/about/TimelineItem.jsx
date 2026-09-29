import React from "react";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCodeBracket, HiOutlineSparkles } from "react-icons/hi2";
import { timelinePoints } from "../../styles/classes";

const icons = {
  Education: HiOutlineAcademicCap,
  Internship: HiOutlineBriefcase,
  "Open Source": HiOutlineSparkles,
  Project: HiOutlineCodeBracket,
};

/** One entry of the About-page timeline. */
export default function TimelineItem({ entry }) {
  const Icon = icons[entry.type] || HiOutlineCodeBracket;

  return (
    <li className="relative pb-10 last:pb-0">
      <span
        className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
        aria-hidden="true"
      />
      <div className="timeline-content">
        <span className="text-xs font-semibold text-accent uppercase tracking-[0.04em]">
          {entry.period}
        </span>
        <h3 className="mt-1 mb-0.5 text-[1.05rem]">{entry.title}</h3>
        <p className="text-muted text-[0.92rem] mb-4">
          <Icon aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 6 }} />
          {entry.org} · {entry.type}
        </p>
        {entry.points && entry.points.length > 0 && (
          <ul className={timelinePoints}>
            {entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

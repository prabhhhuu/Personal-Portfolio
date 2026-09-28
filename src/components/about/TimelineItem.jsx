import React from "react";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCodeBracket, HiOutlineSparkles } from "react-icons/hi2";

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
    <li className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" />
      <div className="timeline-content">
        <span className="timeline-period">{entry.period}</span>
        <h3 className="timeline-title">{entry.title}</h3>
        <p className="timeline-org">
          <Icon aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 6 }} />
          {entry.org} · {entry.type}
        </p>
        {entry.points && entry.points.length > 0 && (
          <ul className="timeline-points">
            {entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

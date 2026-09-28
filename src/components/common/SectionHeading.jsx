import React from "react";

/** Kicker + title + subtitle block used at the top of pages. */
export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="section-head">
      {kicker ? <p className="hero-greeting">{kicker}</p> : null}
      <h1>{title}</h1>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

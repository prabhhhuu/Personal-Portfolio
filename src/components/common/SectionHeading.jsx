import React from "react";
import { heroGreeting } from "../../styles/classes";

/** Kicker + title + subtitle block used at the top of pages. */
export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="mb-10">
      {kicker ? <p className={heroGreeting}>{kicker}</p> : null}
      <h1>{title}</h1>
      {subtitle ? <p className="max-w-[620px]">{subtitle}</p> : null}
    </div>
  );
}

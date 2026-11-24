import React from "react";

/** Page header: title, optional standfirst, hairline rule. No eyebrow label. */
export default function SectionHeading({ title, subtitle, action }) {
  return (
    <div className="mb-10 border-b border-line pb-5 flex items-end justify-between gap-8 flex-wrap">
      <div>
        <h1 className="m-0">{title}</h1>
        {subtitle ? <p className="mt-3 mb-0 max-w-[52ch]">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

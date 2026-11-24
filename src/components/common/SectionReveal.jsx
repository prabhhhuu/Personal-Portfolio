import React from "react";

/**
 * Layout wrapper for page sections. Entrances are intentionally static —
 * the only orchestrated motion on the site is the hero name.
 */
export default function SectionReveal({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

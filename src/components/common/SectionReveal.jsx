import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Fades/slides children in when they enter the viewport.
 * direction: "up" | "left" | "right" — pairs with reveal classes in index.css
 */
export default function SectionReveal({ children, direction = "up", delay = 0, className = "" }) {
  const { ref, visible } = useScrollReveal();

  const classes = [
    "reveal",
    direction !== "up" ? `reveal-${direction}` : "",
    visible ? "reveal-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

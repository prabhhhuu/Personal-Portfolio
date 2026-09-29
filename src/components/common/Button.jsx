import React from "react";
import { Link } from "react-router-dom";
import { btn } from "../../styles/classes";

/**
 * Shared button. Renders a Link (internal), anchor (external), or button.
 * variant: "primary" | "outline" | "ghost"
 */
export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const classes = `${btn.base} ${btn[variant] || ""} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
 );
}

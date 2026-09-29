import React from "react";
import { badge } from "../../styles/classes";

export default function Badge({ children, className = "" }) {
  return <span className={`${badge} ${className}`.trim()}>{children}</span>;
}

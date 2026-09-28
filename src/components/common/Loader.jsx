import React from "react";

export default function Loader({ label = "Loading…" }) {
  return (
    <div className="loader-wrap" role="status" aria-live="polite">
      <span className="loader" aria-hidden="true" />
      <span className="muted">{label}</span>
    </div>
  );
}

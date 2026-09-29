import React from "react";

export default function Loader({ label = "Loading…" }) {
  return (
    <div
      className="flex items-center gap-2 justify-center py-10"
      role="status"
      aria-live="polite"
    >
      <span
        className="w-[22px] h-[22px] rounded-full border-[3px] border-accent-soft border-t-accent animate-spin"
        aria-hidden="true"
      />
      <span className="text-muted">{label}</span>
    </div>
  );
}

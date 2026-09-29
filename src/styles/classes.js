/**
 * Shared Tailwind class strings — the single source of truth for
 * repeated component styles (replaces the old components.css classes).
 */

export const container = "w-full max-w-shell mx-auto px-6";

export const btn = {
  base:
    "inline-flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-[0.95rem] " +
    "border cursor-pointer transition-all duration-300 ease-signal " +
    "active:translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none",
  primary:
    "border-transparent bg-accent text-white hover:bg-accent-strong hover:text-white hover:-translate-y-0.5 hover:shadow-md",
  outline:
    "border-line text-body bg-transparent hover:border-accent hover:text-accent hover:-translate-y-0.5",
  ghost: "border-transparent text-muted bg-transparent hover:text-accent",
};

export const navSocial =
  "inline-flex items-center justify-center w-[34px] h-[34px] rounded-lg text-muted text-[1.05rem] " +
  "transition-all duration-300 ease-signal hover:text-accent hover:bg-accent-soft hover:-translate-y-0.5";

export const card =
  "bg-elevated border border-line rounded-card overflow-hidden transition-all duration-300 " +
  "ease-signal hover:-translate-y-1.5 hover:shadow-lg hover:border-accent";

export const badge =
  "inline-flex items-center px-2.5 py-[3px] rounded-full bg-accent-soft text-accent " +
  "text-xs font-semibold tracking-[0.02em]";

export const projectLink = "inline-flex items-center gap-1.5 text-sm font-semibold";

export const sectionTitle = "section-title flex items-center gap-4 mb-2";

export const heroGreeting =
  "text-accent font-semibold tracking-[0.04em] uppercase text-[0.85rem] mb-4 mt-2.5";

export const tagList = "flex flex-wrap gap-1.5";

export const timelinePoints =
  "timeline-points flex flex-col gap-1 [&>li]:relative [&>li]:pl-[18px] [&>li]:text-muted [&>li]:text-[0.93rem]";

export const formField =
  "[&>label]:block [&>label]:font-semibold [&>label]:text-sm [&>label]:mb-1.5 " +
  "[&>input]:w-full [&>input]:px-3.5 [&>input]:py-3 [&>input]:rounded [&>input]:border [&>input]:border-line " +
  "[&>input]:border-line [&>input]:bg-elevated [&>input]:text-body [&>input]:text-[0.95rem] " +
  "[&>input]:transition-all [&>input]:duration-300 [&>input]:ease-signal " +
  "[&>input:focus]:outline-none [&>input:focus]:border-accent " +
  "[&>input:focus]:shadow-[0_0_0_3px_var(--accent-soft)] " +
  "[&>textarea]:w-full [&>textarea]:px-3.5 [&>textarea]:py-3 [&>textarea]:rounded " +
  "[&>textarea]:border [&>textarea]:border-line [&>textarea]:bg-elevated [&>textarea]:text-body " +
  "[&>textarea]:text-[0.95rem] [&>textarea]:min-h-[140px] [&>textarea]:resize-y " +
  "[&>textarea]:transition-all [&>textarea]:duration-300 [&>textarea]:ease-signal " +
  "[&>textarea:focus]:outline-none [&>textarea:focus]:border-accent " +
  "[&>textarea:focus]:shadow-[0_0_0_3px_var(--accent-soft)]";

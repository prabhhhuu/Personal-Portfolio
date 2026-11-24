/**
 * Shared Tailwind class strings — single source of truth for repeated
 * component styles. Square geometry, hairline rules, no shadows.
 */

export const container = "w-full max-w-shell mx-auto px-6";

export const btn = {
  base:
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-none font-medium text-[0.95rem] " +
    "border cursor-pointer transition-colors duration-200 " +
    "disabled:opacity-50 disabled:cursor-not-allowed",
  primary: "border-accent bg-accent text-on-accent hover:border-accent-strong hover:bg-accent-strong",
  outline: "border-line-strong text-body bg-transparent hover:border-accent hover:text-accent",
  ghost: "border-transparent text-muted bg-transparent hover:text-accent",
};

export const navSocial =
  "inline-flex items-center justify-center w-9 h-9 border border-transparent text-muted text-[1.05rem] " +
  "transition-colors duration-200 hover:text-accent hover:border-line-strong";

export const card =
  "bg-elevated border border-line flex flex-col transition-colors duration-200 hover:border-accent";

export const badge =
  "inline-flex items-center border border-line px-2 py-1 text-[0.72rem] font-medium text-muted";

export const projectLink =
  "inline-flex items-center gap-1.5 text-[0.85rem] font-medium underline decoration-line underline-offset-4 " +
  "hover:decoration-accent";

export const sectionTitle = "section-title mb-3";

export const annotation = "annotation";

export const tagList = "flex flex-wrap gap-1.5";

export const timelinePoints =
  "timeline-points flex flex-col gap-1.5 [&>li]:relative [&>li]:pl-[18px] [&>li]:text-muted [&>li]:text-[0.93rem]";

export const formField =
  "[&>label]:block [&>label]:text-[0.85rem] [&>label]:mb-1.5 [&>label]:text-body " +
  "[&>input]:w-full [&>input]:px-3.5 [&>input]:py-3 [&>input]:rounded-none [&>input]:border [&>input]:border-line " +
  "[&>input]:bg-elevated [&>input]:text-body [&>input]:text-[0.95rem] " +
  "[&>input]:transition-colors [&>input]:duration-200 " +
  "[&>input:focus]:outline-none [&>input:focus]:border-accent " +
  "[&>textarea]:w-full [&>textarea]:px-3.5 [&>textarea]:py-3 [&>textarea]:rounded-none " +
  "[&>textarea]:border [&>textarea]:border-line [&>textarea]:bg-elevated [&>textarea]:text-body " +
  "[&>textarea]:text-[0.95rem] [&>textarea]:min-h-[140px] [&>textarea]:resize-y " +
  "[&>textarea]:transition-colors [&>textarea]:duration-200 " +
  "[&>textarea:focus]:outline-none [&>textarea:focus]:border-accent";

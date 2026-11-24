import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../../data/profile";
import { navSocial } from "../../styles/classes";

/**
 * Footer as a drawing title block: name, role, place, date — the sheet's
 * identification strip, then a thin rule and the utility line.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const updated = new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" });

  const fields = [
    ["Name", profile.name],
    ["Role", "Full-stack developer"],
    ["Based in", profile.location],
    ["Updated", updated],
  ];

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-20 border-t border-line">
      <div className="w-full max-w-shell mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
        {fields.map(([label, value]) => (
          <div key={label}>
            <p className="annotation m-0">{label}</p>
            <p className="m-0 mt-1 text-[0.95rem] text-body">{value}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="w-full max-w-shell mx-auto px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
          <p className="annotation m-0">
            © {year} {profile.name}
          </p>

          <div className="flex items-center gap-4">
            <a className="annotation hover:text-accent" href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="annotation hover:text-accent" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="annotation hover:text-accent" href={profile.socials.email}>
              Email
            </a>
            <button
              type="button"
              className={`${navSocial} border-line-strong`}
              onClick={backToTop}
              aria-label="Back to top"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

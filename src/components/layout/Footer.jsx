import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../../data/profile";
import { navSocial } from "../../styles/classes";

export default function Footer() {
  const year = new Date().getFullYear();

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-line py-10 mt-24">
      <div className="w-full max-w-shell mx-auto px-6 flex items-center justify-between gap-6 flex-wrap">
        <p className="m-0 text-sm">
          © {year} {profile.name} · Built with React
        </p>

        <div className="flex gap-2">
          <a className={navSocial} href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <FiGithub />
          </a>
          <a className={navSocial} href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <FiLinkedin />
          </a>
          <a className={navSocial} href={profile.socials.email} aria-label="Send email">
            <FiMail />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 bg-transparent border border-line rounded-full text-muted px-3.5 py-2 text-[0.85rem] font-semibold cursor-pointer transition-all duration-300 ease-signal hover:text-accent hover:border-accent hover:-translate-y-0.5"
          onClick={backToTop}
          aria-label="Back to top"
        >
          <FiArrowUp />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}

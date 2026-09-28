import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} {profile.name} · Built with React
        </p>

        <div className="footer-socials">
          <a
            className="nav-social"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub />
          </a>
          <a
            className="nav-social"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin />
          </a>
          <a
            className="nav-social"
            href={profile.socials.email}
            aria-label="Send email"
          >
            <FiMail />
          </a>
        </div>

        <button
          type="button"
          className="back-to-top"
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

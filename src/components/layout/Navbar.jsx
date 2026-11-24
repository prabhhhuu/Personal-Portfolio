import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiFileText, FiMail } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../../data/profile";
import { navSocial } from "../../styles/classes";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-[8px] border-b border-line transition-colors duration-200">
      <div className="w-full max-w-shell mx-auto px-6 h-full flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display font-semibold tracking-[-0.03em] text-body text-[1.05rem] hover:text-accent"
          onClick={close}
        >
          {profile.name}
        </Link>

        <nav
          className={`max-md:fixed max-md:top-16 max-md:left-0 max-md:right-0 max-md:flex-col max-md:items-stretch max-md:bg-elevated max-md:border-b max-md:border-line max-md:p-6 max-md:gap-4 ${
            open ? "max-md:flex" : "max-md:hidden"
          } flex items-center gap-7`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `nav-link relative py-1 text-[0.95rem] font-medium text-muted hover:text-body ${
                  isActive ? "active text-body" : ""
                }`
              }
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="max-md:border-l-0 max-md:ml-0 max-md:pl-0 max-md:border-t max-md:border-line max-md:pt-4 flex items-center gap-1 ml-1 pl-4 border-l border-line">
            <a
              className={navSocial}
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              className={navSocial}
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              className={navSocial}
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume (PDF)"
              title="Resume (PDF)"
            >
              <FiFileText />
            </a>
            <a className={navSocial} href={profile.socials.email} aria-label="Email">
              <FiMail />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex bg-transparent border border-line text-body text-xl cursor-pointer p-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  );
}

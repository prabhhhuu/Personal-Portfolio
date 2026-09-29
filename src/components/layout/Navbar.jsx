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
    <header className="fixed top-0 left-0 right-0 z-50 h-[62px] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-[10px] border-b border-line transition-colors duration-300 ease-signal">
      <div className="w-full max-w-shell mx-auto px-6 h-full flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-body text-[1.05rem] hover:text-accent" onClick={close}>
          <span
            className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-lg bg-accent-soft text-accent text-[0.85rem] font-bold"
            aria-hidden="true"
          >
            &lt;/&gt;
          </span>
          <span className="brand-name">Sakthi Prabhu</span>
        </Link>

        <nav
          className={`max-md:fixed max-md:top-[62px] max-md:left-0 max-md:right-0 max-md:flex-col max-md:items-stretch max-md:bg-elevated max-md:border-b max-md:border-line max-md:p-6 max-md:gap-4 max-md:transition-all max-md:duration-300 max-md:ease-signal max-md:-translate-y-3 max-md:opacity-0 max-md:invisible ${
            open
              ? "max-md:translate-y-0 max-md:opacity-100 max-md:visible"
              : ""
          } flex items-center gap-6`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `relative py-1 font-medium text-muted hover:text-body ${
                  isActive ? "active text-body" : ""
                }`
              }
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="max-md:border-l-0 max-md:ml-0 max-md:pl-0 max-md:justify-start flex items-center gap-2 ml-2 pl-4 border-l border-line">
            <a className={navSocial} href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FiGithub />
            </a>
            <a className={navSocial} href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FiLinkedin />
            </a>
            <a className={navSocial} href={profile.resumePath} target="_blank" rel="noreferrer" aria-label="Download resume (PDF)" title="Download resume">
              <FiFileText />
            </a>
            <a className={navSocial} href={profile.socials.email} aria-label="Send email">
              <FiMail />
            </a>
          </div>
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex bg-transparent border-none text-body text-2xl cursor-pointer p-1.5"
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

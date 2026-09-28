import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiFileText, FiMail } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../../data/profile";

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
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="brand-name">Sakthi Prabhu</span>
        </Link>

        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav-socials">
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
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              aria-label="Download resume (PDF)"
              title="Download resume"
            >
              <FiFileText />
            </a>
            <a
              className="nav-social"
              href={profile.socials.email}
              aria-label="Send email"
            >
              <FiMail />
            </a>
          </div>
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="hamburger"
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

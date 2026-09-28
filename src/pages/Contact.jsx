import React from "react";
import { FiFileText } from "react-icons/fi";
import SectionReveal from "../components/common/SectionReveal";
import SectionHeading from "../components/common/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import SocialLinks from "../components/contact/SocialLinks";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <div className="page">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            kicker="Contact"
            title="Let's build something"
            subtitle="Open to full-time roles, internships, and freelance work. The fastest way to reach me is email — or drop a message here."
          />
        </SectionReveal>

        <div className="contact-grid">
          <SectionReveal direction="left">
            <div className="contact-aside">
              <h3>Contact details</h3>
              <SocialLinks />
              <h3 style={{ marginTop: "var(--space-5)" }}>Resume</h3>
              <p className="muted">
                Prefer a PDF? Grab the latest copy of my resume.
              </p>
              <a className="btn btn-outline" href={profile.resumePath} target="_blank" rel="noreferrer">
                <FiFileText aria-hidden="true" /> Download resume
              </a>
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <ContactForm />
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

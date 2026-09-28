import React from "react";
import SectionReveal from "../components/common/SectionReveal";
import SectionHeading from "../components/common/SectionHeading";
import SkillBar from "../components/about/SkillBar";
import TimelineItem from "../components/about/TimelineItem";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { timeline, certifications } from "../data/timeline";

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            kicker="About"
            title="Who I am"
            subtitle="Full-stack developer who enjoys both sides of the stack — component-based React UIs on the front, Node.js services behind them."
          />
        </SectionReveal>

        <div className="about-grid">
          <SectionReveal direction="left">
            <div className="about-bio">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              <h3 className="cert-title">Certifications</h3>
              <ul className="cert-list">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div className="about-skills">
              <h3>Skills</h3>
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.id}>
                  <h4 className="skill-group-title">{group.title}</h4>
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        <SectionReveal>
          <div className="section-head" style={{ marginTop: "var(--space-6)" }}>
            <h2 className="section-title">Education & experience</h2>
            <p className="section-subtitle">
              Internships, open-source work, and education — newest first.
            </p>
          </div>
          <ul className="timeline">
            {timeline.map((entry) => (
              <TimelineItem key={entry.id} entry={entry} />
            ))}
          </ul>
        </SectionReveal>
      </div>
    </div>
  );
}

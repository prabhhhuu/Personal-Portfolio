import React from "react";
import SectionReveal from "../components/common/SectionReveal";
import SectionHeading from "../components/common/SectionHeading";
import SkillBar from "../components/about/SkillBar";
import TimelineItem from "../components/about/TimelineItem";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { timeline, certifications } from "../data/timeline";
import { sectionTitle } from "../styles/classes";

export default function About() {
  return (
    <div className="pt-[calc(62px+4rem)] min-h-screen">
      <div className="w-full max-w-shell mx-auto px-6">
        <SectionReveal>
          <SectionHeading
            kicker="About"
            title="Who I am"
            subtitle="Full-stack developer who enjoys both sides of the stack — component-based React UIs on the front, Node.js services behind them."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-start mb-16">
          <SectionReveal direction="left">
            <div className="about-bio">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              <h3 className="mt-10">Certifications</h3>
              <ul className="[&>li]:relative [&>li]:pl-5 [&>li]:text-muted [&>li]:mb-2 [&>li]:text-[0.93rem] cert-list">
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
                <div
                  className="bg-elevated border border-line rounded-card p-6"
                  key={group.id}
                >
                  <h4 className="text-base mb-4">{group.title}</h4>
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        <SectionReveal>
          <div className="mb-10 mt-16">
            <h2 className={sectionTitle}>Education &amp; experience</h2>
            <p className="max-w-[620px]">
              Internships, open-source work, and education — newest first.
            </p>
          </div>
          <ul className="timeline relative pl-6">
            {timeline.map((entry) => (
              <TimelineItem key={entry.id} entry={entry} />
            ))}
          </ul>
        </SectionReveal>
      </div>
    </div>
  );
}

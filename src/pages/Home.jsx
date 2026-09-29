import React from "react";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SectionReveal from "../components/common/SectionReveal";
import Button from "../components/common/Button";
import { sectionTitle } from "../styles/classes";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <section className="py-24 max-md:py-16" aria-label="About preview">
        <div className="w-full max-w-shell mx-auto px-6">
          <SectionReveal>
            <div className="mb-10">
              <h2 className={sectionTitle}>About me</h2>
              <p className="max-w-[620px]">
                Recent BCA graduate specialising in React.js and Node.js full-stack development —
                shipping responsive UIs, REST integrations, and small automations that run 24/7.
              </p>
            </div>
            <Button to="/about" variant="outline">
              More about me
            </Button>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

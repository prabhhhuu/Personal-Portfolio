import React from "react";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SectionReveal from "../components/common/SectionReveal";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <section className="section" aria-label="About preview">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <h2 className="section-title">About me</h2>
              <p className="section-subtitle">
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

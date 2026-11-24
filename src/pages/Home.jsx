import React from "react";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Button from "../components/common/Button";
import { sectionTitle } from "../styles/classes";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <section className="py-20 max-md:py-14 border-t border-line" aria-label="About preview">
        <div className="w-full max-w-shell mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-14 items-start">
          <h2 className={sectionTitle}>About me</h2>
          <div>
            <p className="max-w-[58ch]">
              Recent BCA graduate specialising in React.js and Node.js full-stack development —
              shipping responsive UIs, REST integrations, and small automations that run 24/7.
            </p>
            <Button to="/about" variant="outline">
              More about me
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

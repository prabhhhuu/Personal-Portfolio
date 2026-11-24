import React, { useState } from "react";
import Button from "../common/Button";
import { profile } from "../../data/profile";

/**
 * Hero as a sheet: the name is set on two lines at display width, the
 * portrait sits in a frame with crop marks, and a legend strip closes the
 * composition along the bottom rule.
 */
export default function Hero({ compact = false }) {
  const { name, role, tagline } = profile;
  const [avatarError, setAvatarError] = useState(false);

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  if (compact) {
    return (
      <div className="mb-10">
        <h1>{name}</h1>
        <p className="annotation mb-0">{role}</p>
      </div>
    );
  }

  // Top padding clears the 64px fixed navbar before the name starts.
  return (
    <section
      className="flex flex-col pt-[calc(64px+1.75rem)] lg:pt-[calc(64px+2.5rem)]"
      aria-label="Introduction"
    >
      <div className="flex-1 flex items-center pb-16 lg:pb-20">
        <div className="w-full max-w-shell mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-10 lg:gap-14 items-center">
          <div>
            <h1 className="hero-name m-0 text-[clamp(2.9rem,7.2vw,6rem)]">
              <span className="block">{firstName}</span>
              <span className="block">{lastName}</span>
            </h1>

            <p className="mt-8 mb-0 max-w-[42ch] text-[1.06rem]">{tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/projects">See projects</Button>
              <Button to="/contact" variant="outline">
                Write to me
              </Button>
            </div>
          </div>

          <figure className="m-0 relative justify-self-center lg:justify-self-end w-full max-w-[330px]">
            <span
              className="absolute -left-2.5 -top-2.5 w-7 h-7 border-l border-t border-accent"
              aria-hidden="true"
            />
            <span
              className="absolute -right-2.5 -top-2.5 w-7 h-7 border-r border-t border-accent"
              aria-hidden="true"
            />
            <span
              className="absolute -left-2.5 -bottom-2.5 w-7 h-7 border-l border-b border-accent"
              aria-hidden="true"
            />
            <span
              className="absolute -right-2.5 -bottom-2.5 w-7 h-7 border-r border-b border-accent"
              aria-hidden="true"
            />

            <div className="border border-line bg-elevated p-3">
              {!avatarError ? (
                <img
                  className="w-full aspect-[4/5] object-contain object-bottom"
                  src="/assets/avatar.webp"
                  alt={`${name} portrait`}
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div
                  className="w-full aspect-[4/5] flex items-center justify-center font-display text-6xl text-accent"
                  aria-hidden="true"
                >
                  SP
                </div>
              )}
            </div>
          </figure>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="w-full max-w-shell mx-auto px-6 py-4 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-2">
          <span className="annotation">Chennai, India</span>
          <span className="annotation">Open to full-time roles</span>
          <span className="annotation">
            Four deployed apps, two internships, one open-source contribution
          </span>
        </div>
      </div>
    </section>
  );
}

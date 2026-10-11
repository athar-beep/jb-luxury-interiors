"use client";

import { useEffect } from "react";

/**
 * A single, global scroll-reveal observer.
 * Adds `.is-in` to `.reveal` elements once they enter the viewport, then stops
 * observing them (reveals fire once). Falls back to immediately revealed if
 * IntersectionObserver is unavailable.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

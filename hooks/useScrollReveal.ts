import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealElements = () => {
      const elements = document.querySelectorAll<HTMLElement>(".reveal:not(.revealed)");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport, partially visible, or scrolled past
        if (rect.top <= window.innerHeight + 50 && rect.bottom >= -50) {
          el.classList.add("revealed");
        }
      });
    };

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("revealed"));
      return;
    }

    // Run initial reveal check immediately
    revealElements();

    // Setup IntersectionObserver for smooth scroll reveals
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "60px 0px 60px 0px" },
      );

      document.querySelectorAll<HTMLElement>(".reveal:not(.revealed)").forEach((element) => {
        observer?.observe(element);
      });
    } else {
      // Fallback: reveal all
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("revealed"));
    }

    // Handle hash jumps and dynamic scrolls
    window.addEventListener("scroll", revealElements, { passive: true });
    window.addEventListener("hashchange", revealElements, { passive: true });
    window.addEventListener("resize", revealElements, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", revealElements);
      window.removeEventListener("hashchange", revealElements);
      window.removeEventListener("resize", revealElements);
    };
  }, []);
}

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")),
      { threshold: 0.14 },
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

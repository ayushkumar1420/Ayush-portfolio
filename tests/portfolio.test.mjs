import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { siteConfig, navigationItems } from "../config/site.ts";
import { skillGroups, marqueeSkills } from "../data/skills.ts";

test("site configuration contains valid contact and social info", () => {
  assert.equal(siteConfig.name, "Ayush Kumar");
  assert.equal(siteConfig.role, "Full-Stack Web Developer");
  assert.equal(siteConfig.email, "ayushmaurya496@gmail.com");
  assert.equal(siteConfig.resumePath, "/Ayush-Kumar-Resume.pdf");
  assert.equal(siteConfig.portraitPath, "/ayush-portrait.png");
  assert.match(siteConfig.github, /^https:\/\/github\.com\//);
  assert.match(siteConfig.linkedin, /^https:\/\/www\.linkedin\.com\//);
  assert.equal(siteConfig.whatsapp, "");
  assert.equal(siteConfig.x, "");
});

test("navigation items include all major sections", () => {
  const expected = ["Home", "Skills", "Experience", "Projects", "Certificates", "Contact"];
  assert.deepEqual(Array.from(navigationItems), expected);
});

test("skills data is structured and marquee skills are populated", () => {
  assert.ok(skillGroups.length >= 6);
  assert.ok(marqueeSkills.length > 20);
  assert.ok(marqueeSkills.includes("React.js"));
  assert.ok(marqueeSkills.includes("Next.js"));
  assert.ok(marqueeSkills.includes("TypeScript"));
});

test("required public assets exist on disk", () => {
  const publicDir = path.resolve("public");
  assert.ok(fs.existsSync(path.join(publicDir, "Ayush-Kumar-Resume.pdf")), "Resume PDF must exist");
  assert.ok(fs.existsSync(path.join(publicDir, "ayush-portrait.png")), "Portrait image must exist");
  assert.ok(fs.existsSync(path.join(publicDir, "favicon.svg")), "Favicon SVG must exist");

  const certificates = [
    "design-to-deploy-workshop-2025.png",
    "mern-internship-2026.png",
    "ncet-csit-2026.png",
    "tech-yuva-2024.png"
  ];
  for (const cert of certificates) {
    assert.ok(fs.existsSync(path.join(publicDir, "certificates", cert)), `Certificate ${cert} must exist`);
  }

  const projects = [
    "ai-second-brain.png",
    "attendance-monitoring-system.png",
    "chat-app.png",
    "doodoo.png",
    "neublix-saas.png",
    "seat-lock-engine.png"
  ];
  for (const proj of projects) {
    assert.ok(fs.existsSync(path.join(publicDir, "projects", proj)), `Project shot ${proj} must exist`);
  }
});

test("PortfolioPage component defines contact form with Web3Forms integration", () => {
  const portfolioPageContent = fs.readFileSync(path.resolve("server/portfolio/PortfolioPage.tsx"), "utf8");
  assert.match(portfolioPageContent, /NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY/);
  assert.match(portfolioPageContent, /https:\/\/api\.web3forms\.com\/submit/);
  assert.match(portfolioPageContent, /\/Ayush-Kumar-Resume\.pdf/);
  assert.match(portfolioPageContent, /Seat Lock Engine/);
  assert.match(portfolioPageContent, /AI Second Brain/);
  assert.match(portfolioPageContent, /Neublix SaaS/);
  assert.match(portfolioPageContent, /DooDoo/);
  assert.match(portfolioPageContent, /WhatsApp — coming soon/);
  assert.match(portfolioPageContent, /X — coming soon/);
});

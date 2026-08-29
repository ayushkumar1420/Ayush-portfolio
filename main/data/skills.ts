import type { SkillGroup } from "@/main/types/portfolio";

export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "Redux", "Responsive Web Design"] },
  { title: "Backend & APIs", skills: ["Node.js", "Express.js", "REST API Design", "Socket.IO", "JWT Authentication", "Error Handling", "Webhooks"] },
  { title: "Databases & Infrastructure", skills: ["MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "Schema Design", "CRUD Operations"] },
  { title: "Tools, Cloud & Deployment", skills: ["Git", "GitHub", "Postman", "AWS", "Vercel", "Render", "CI/CD", "Docker", "Debugging and Troubleshooting"] },
  { title: "AI & Development Tools", skills: ["Gemini API", "Claude", "OpenAI Codex", "Antigravity", "Cursor", "RAG", "Vector Search", "AI-assisted Development"] },
  { title: "Design & Collaboration", skills: ["Figma", "Canva"] },
];

export const marqueeSkills = skillGroups.flatMap(({ skills }) => skills);

"use client";
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
const groups = [
  ["Languages", ["JavaScript", "TypeScript", "HTML5", "CSS3"]],
  [
    "Frontend",
    [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "Responsive Web Design",
    ],
  ],
  [
    "Backend & APIs",
    [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Socket.IO",
      "JWT Authentication",
      "Error Handling",
      "Webhooks",
    ],
  ],
  [
    "Databases & Infrastructure",
    [
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "Supabase",
      "Schema Design",
      "CRUD Operations",
    ],
  ],
  [
    "Tools, Cloud & Deployment",
    [
      "Git",
      "GitHub",
      "Postman",
      "AWS",
      "Vercel",
      "Render",
      "CI/CD",
      "Docker",
      "Debugging and Troubleshooting",
    ],
  ],
  [
    "AI & Development Tools",
    [
      "Gemini API",
      "Claude",
      "OpenAI Codex",
      "Antigravity",
      "Cursor",
      "RAG",
      "Vector Search",
      "AI-assisted Development",
    ],
  ],
  ["Design & Collaboration", ["Figma", "Canva"]],
] as const;
const all = groups.flatMap((x) => x[1]);
const projects = [
  [
    "01",
    "Seat Lock Engine",
    "High-Concurrency Backend",
    "A reservation engine built to prevent double-booking under heavy traffic using atomic Redis locks, TTL-based holds, MongoDB booking lifecycles, and safe rollback paths.",
    ["Node.js", "Redis", "MongoDB", "REST APIs"],
    "https://github.com/ayushkumar1420/seat-lock-engine",
    "seat-lock-engine.png",
  ],
  [
    "02",
    "AI Second Brain",
    "RAG / Knowledge System",
    "An AI learning workspace that retrieves relevant context through vector search to generate focused explanations with Gemini.",
    ["Gemini", "Vector Search", "RAG", "Full Stack"],
    "https://github.com/ayushkumar1420/AI-Second-Brain",
    "ai-second-brain.png",
  ],
  [
    "03",
    "Neublix SaaS",
    "AI / Creative SaaS",
    "A modern image-generation SaaS that transforms uploaded images into creative styles with authentication and a TypeScript-first product experience.",
    ["Next.js", "TypeScript", "AI", "SaaS"],
    "https://github.com/ayushkumar1420/Neublix-Saas",
    "neublix-saas.png",
  ],
  [
    "04",
    "Real-Time Chat Application",
    "Full Stack / Realtime",
    "A responsive messaging platform with live conversations, JWT-secured sessions, and predictable Zustand state management.",
    ["React", "Socket.IO", "Zustand", "Cloudinary"],
    "https://github.com/ayushkumar1420/chat-app",
    "chat-app.png",
  ],
  [
    "05",
    "Attendance Monitoring",
    "Computer Vision / Analytics",
    "An automated attendance system that recognizes student faces, records verified attendance, and produces useful reports.",
    ["Face Recognition", "Python", "Analytics", "Database"],
    "https://github.com/ayushkumar1420/Attendance-monitoring-system",
    "attendance-monitoring-system.png",
  ],
  [
    "06",
    "DooDoo — a Skribbl.io clone",
    "Multiplayer Game",
    "A Skribbl.io-inspired multiplayer drawing game with real-time rooms, collaborative gameplay, chat-based guessing, and an interactive canvas.",
    ["React", "Socket.IO", "Canvas", "Multiplayer"],
    "https://github.com/ayushkumar1420/Doodoo---a-skribble.io-clone",
    "doodoo.png",
  ],
] as const;
const certs = [
  [
    "01",
    "National Conference Participation",
    "Buddha Institute of Technology, Gorakhpur",
    "09–11 April 2026",
    "Validates presentation of “Automated Student Attendance Monitoring & Analysis System” at NCET-CSIT.",
    ["Research presentation", "Attendance systems"],
    "ncet-csit-2026.png",
    "",
  ],
  [
    "02",
    "Tech Yuva-2K24 Participation",
    "Buddha Institute of Technology, Gorakhpur",
    "17 October 2024",
    "Recognizes participation with the topic “Digital Codex” in the Innovative Ideas technical presentation event.",
    ["Innovation", "Presentation"],
    "tech-yuva-2024.png",
    "",
  ],
  [
    "03",
    "MERN Full Stack Developer Internship",
    "Softpro India Computer Technologies Pvt. Ltd.",
    "June–July 2026 · 45 days",
    "Certifies completion of a 45-day summer internship in MERN full-stack development with an A++ grade.",
    ["MERN", "Full-stack development"],
    "mern-internship-2026.png",
    "SPI/ST/2026/896",
  ],
  [
    "04",
    "Design to Deploy Workshop",
    "Softpro India Computer Technologies (P) Ltd.",
    "20 November 2025",
    "Validates participation in “Design to Deploy — A Full Stack Web Journey,” organized with Dr. APJ Abdul Kalam Technical University, Lucknow.",
    ["Full-stack web", "Deployment"],
    "design-to-deploy-workshop-2025.png",
    "",
  ],
] as const;
function ContactForm() {
  const [s, setS] = useState("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setS("sending");
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: new FormData(e.currentTarget),
        }),
        j = await r.json();
      if (!r.ok || !j.success) throw Error();
      e.currentTarget.reset();
      setS("success");
    } catch {
      setS("error");
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <input
        type="hidden"
        name="access_key"
        value="9ec9ccb7-7da0-46a0-8c1b-6789ad88a45f"
      />
      <input type="hidden" name="from_name" value="Ayush Kumar Portfolio" />
      <input
        className="botcheck"
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
      />
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="field-wide">
        Subject
        <input name="subject" required />
      </label>
      <label className="field-wide">
        Message
        <textarea name="message" required rows={4} />
      </label>
      <button className="form-submit" disabled={s === "sending"}>
        {s === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </button>
      <p className={"form-status " + s} aria-live="polite">
        {s === "success"
          ? "Thanks — your message has been sent."
          : s === "error"
            ? "Something went wrong. Please email Ayush directly."
            : ""}
      </p>
    </form>
  );
}
export default function Home() {
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) => e.isIntersecting && e.target.classList.add("revealed"),
        ),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((x) => o.observe(x));
    return () => o.disconnect();
  }, []);
  return (
    <main>
      <header className="topbar-wrap">
        <nav className="topbar">
          <a className="brand" href="#home">
            <span className="brand-mark">AK</span>
            <span>
              <strong>AYUSH KUMAR</strong>
              <small>PORTFOLIO / 2026</small>
            </span>
          </a>
          <div className="nav-links">
            {[
              "Home",
              "Skills",
              "Experience",
              "Projects",
              "Certificates",
              "Contact",
            ].map((x) => (
              <a href={"#" + x.toLowerCase()} key={x}>
                {x}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <section className="hero" id="home">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="hero-copy">
          <div className="availability hero-enter delay-1">
            <span />
            Available for opportunities
          </div>
          <h1 className="hero-name">
            <span className="name-line" data-text="AYUSH">
              AYUSH
            </span>
            <span className="name-line outline" data-text="KUMAR">
              KUMAR
            </span>
          </h1>
          <p className="hero-summary hero-enter delay-2">
            I engineer reliable full-stack products, real-time systems, and
            AI-powered experiences for the web.
          </p>
          <div className="hero-actions hero-enter delay-3">
            <a className="button button-dark" href="#projects">
              View my work <ArrowDownRight size={17} />
            </a>
            <a
              className="button button-light"
              href="/Ayush-Kumar-Resume.pdf"
              download
            >
              Download resume <Download size={17} />
            </a>
          </div>
        </div>
        <div className="portrait-shell hero-enter delay-2">
          <div className="portrait-frame">
            <img src="/ayush-portrait.png" alt="Ayush Kumar portrait" />
            <div className="scan-line" />
            <div className="portrait-grid" />
            <span className="scan-label">HOVER TO SCAN</span>
          </div>
          <div className="portrait-meta">
            <span>Full-stack systems</span>
            <small>NOW BUILDING</small>
          </div>
        </div>
      </section>
      <section className="statement reveal">
        <p className="eyebrow">What I build</p>
        <h2>
          Scalable web products, <span>real-time infrastructure</span>, and
          intelligent workflows designed to stay reliable when the pressure
          rises.
        </h2>
      </section>
      <div className="marquee">
        <div className="marquee-track">
          {[...all, ...all].map((x, i) => (
            <span key={x + i}>
              <i />
              {x}
            </span>
          ))}
        </div>
      </div>
      <section className="section skills-section" id="skills">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Capabilities / 01</p>
            <h2>
              Skills <span>Matrix</span>
            </h2>
          </div>
          <p>
            Full-stack engineering with a systems mindset, from polished
            interfaces to resilient APIs.
          </p>
        </div>
        <div className="skill-grid reveal">
          {groups.map(([h, t], i) => (
            <article
              className={
                "skill-card " +
                (i === 0 ? "featured " : "") +
                (i === 5 ? "dark-card" : "")
              }
              key={h}
            >
              <p className="card-index">
                {String(i + 1).padStart(2, "0")} — {h}
              </p>
              <h3>{h}</h3>
              <div className="tag-cloud">
                {t.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section chronicle-section" id="experience">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Journey / 02</p>
            <h2>
              Engineering <span>Chronicle</span>
            </h2>
          </div>
        </div>
        <div className="timeline reveal">
          <article>
            <div className="timeline-year">2023 — Present</div>
            <div>
              <p className="timeline-type">
                Independent Projects & Product Engineering
              </p>
              <h3>Full-Stack Web Developer</h3>
              <p>
                Building end-to-end applications across responsive React
                interfaces, Node.js services, real-time communication,
                databases, authentication, and production debugging.
              </p>
            </div>
          </article>
          <article>
            <div className="timeline-year">2023 — 2027</div>
            <div>
              <p className="timeline-type">
                Buddha Institute of Technology, Gorakhpur
              </p>
              <h3>B.Tech — Information Technology</h3>
              <p>
                Combining core computer-science education with independent
                full-stack projects, research presentation, and technical-event
                leadership.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="section projects-section" id="projects">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Selected work / 03</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
          </div>
          <p>
            Six builds across concurrency, AI, computer vision, SaaS, realtime
            communication, and multiplayer systems.
          </p>
        </div>
        <div className="projects-list">
          {projects.map(([n, title, cat, desc, tags, href, img], i) => (
            <div
              className="project-stack-item"
              style={{ zIndex: i + 1 }}
              key={title}
            >
              <article className="project-card reveal">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span>{n}</span>
                    {cat}
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="project-tags">
                    {tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a href={href} target="_blank" rel="noreferrer">
                    View source <ExternalLink size={16} />
                  </a>
                </div>
                <div className="project-visual">
                  <img
                    className="project-shot"
                    src={"/projects/" + img}
                    alt={title + " interface concept"}
                  />
                  <div className="mock-browser-bar">
                    <i />
                    <i />
                    <i />
                    <span>PROJECT / {n}</span>
                  </div>
                  <div className="visual-caption">
                    <span>Product interface concept</span>
                    <b>VIEW</b>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
      <section className="section certificates-section" id="certificates">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Credentials / 04</p>
            <h2>
              Certificates & <span>Milestones</span>
            </h2>
          </div>
          <p>
            Four verified credentials spanning technical events, research, a
            workshop, and a full-stack internship.
          </p>
        </div>
        <div className="stats reveal">
          <div>
            <strong>6</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Verified certificates</span>
          </div>
          <div>
            <strong>45</strong>
            <span>Internship days</span>
          </div>
        </div>
        <div className="certificate-grid">
          {certs.map(([id, title, issuer, date, desc, tags, img, cred]) => (
            <article className="certificate-card reveal" key={id}>
              <div className="certificate-top">
                <span>{id}</span>
                <small>{date}</small>
              </div>
              <h3>{title}</h3>
              <p className="issuer">{issuer}</p>
              <p>{desc}</p>
              {cred && <p className="credential">Credential ID: {cred}</p>}
              <div className="certificate-tags">
                {tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="certificate-link"
                href={"/certificates/" + img}
                target="_blank"
                rel="noreferrer"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-copy reveal">
          <p className="eyebrow">Get in touch / 05</p>
          <h2>
            Let&apos;s build something <span>reliable.</span>
          </h2>
          <p>
            I&apos;m open to full-stack opportunities, product collaborations,
            and ambitious technical projects.
          </p>
          <a className="direct-email" href="mailto:ayushmaurya496@gmail.com">
            <Mail size={17} />
            ayushmaurya496@gmail.com
          </a>
        </div>
        <div className="contact-panel reveal">
          <p>Write a message</p>
          <ContactForm />
        </div>
      </section>
      <footer>
        <div className="footer-name">AYUSH KUMAR</div>
        <div className="footer-card">
          <div>
            <p className="footer-title">Contact</p>
            <a href="mailto:ayushmaurya496@gmail.com">
              <Mail size={15} />
              ayushmaurya496@gmail.com
            </a>
            <a href="tel:+919335280820">
              <Phone size={15} />
              +91 9335280820
            </a>
            <p>
              <MapPin size={15} />
              Gorakhpur, Uttar Pradesh
            </p>
            <p>Remote and on-site opportunities</p>
          </div>
          <div>
            <p className="footer-title">Elsewhere</p>
            <a
              href="https://github.com/ayushkumar1420"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-kumar-83a969347"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="/Ayush-Kumar-Resume.pdf" download>
              Download resume
            </a>
            <span className="disabled-social">WhatsApp — coming soon</span>
            <span className="disabled-social">X — coming soon</span>
          </div>
          <div>
            <p className="footer-title">Navigate</p>
            {[
              "Home",
              "Skills",
              "Experience",
              "Projects",
              "Certificates",
              "Contact",
            ].map((x) => (
              <a href={"#" + x.toLowerCase()} key={x}>
                {x}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-title">A thoughtful web</p>
            <p>Building thoughtful, scalable products for the web.</p>
            <a className="back-top" href="#home">
              Back to top <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="footer-row">
          <p>© {new Date().getFullYear()} Ayush Kumar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

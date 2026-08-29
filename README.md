# Ayush Kumar — Developer Portfolio

A modern and responsive personal portfolio built with standard **Next.js** (App Router), **React**, and **TypeScript**, styled with modern CSS, and ready for direct deployment to **Vercel**.

Showcases full-stack engineering skills, project builds, credentials, certifications, downloadable resume, and an integrated Web3Forms contact form.

---

## Features

* **Responsive Design**: Fluid layouts optimized for desktop, tablet, and mobile devices.
* **Hero Section**: Typographic layout with scanline aesthetics and resume download.
* **Skills Matrix**: Categorized capability matrix across languages, frontend, backend, databases, cloud, and AI tools.
* **Marquee Banner**: Smooth, continuous skill ticker.
* **Engineering Chronicle**: Timeline detailing development journey, projects, and education.
* **Featured Projects**: Sticky overlapping cards with tech stacks and GitHub links.
* **Certificates & Milestones**: Verified credentials with external verification links.
* **Web3Forms Contact Form**: Functional contact form with validation, status feedback, and bot prevention.
* **Direct Links**: Email, telephone, GitHub, and LinkedIn links.
* **Accessibility**: Reduced-motion preference detection across animations.

---

## Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: Modern CSS & Tailwind CSS
* **Icons**: [Lucide React](https://lucide.dev/)
* **Contact API**: [Web3Forms](https://web3forms.com/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## Project Structure

```text
├── app/
│   ├── globals.css          # Global styles, variables, keyframes & theme
│   ├── layout.tsx           # Root layout with HTML shell & SEO metadata
│   └── page.tsx             # Thin entry rendering PortfolioPage
│
├── config/
│   └── site.ts              # Site navigation and profile configuration
│
├── data/
│   └── skills.ts            # Skills matrix and marquee items
│
├── hooks/
│   └── useScrollReveal.ts   # Scroll-reveal intersection observer hook
│
├── public/
│   ├── Ayush-Kumar-Resume.pdf
│   ├── ayush-portrait.png
│   ├── favicon.svg
│   ├── certificates/        # Credential & workshop certificates
│   └── projects/            # Project concept screenshots
│
├── server/
│   └── portfolio/
│       └── PortfolioPage.tsx # Portfolio page component & interactive sections
│
├── tests/
│   └── portfolio.test.mjs   # Node.js automated test suite
│
├── types/
│   └── portfolio.ts         # TypeScript interfaces and types
│
├── vendor/
│   └── shadcn-tailwind-4.13.0.css
│
├── .env.example             # Environment variable template
├── eslint.config.mjs        # ESLint flat configuration
├── next.config.ts           # Standard Next.js configuration
├── package.json             # Scripts & dependencies
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## Getting Started

### Prerequisites

* **Node.js**: `>=20.0.0` (or Node 22+)
* **npm**: `>=10.0.0`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayushkumar1420/Ayush-portfolio.git
   cd Ayush-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server (`localhost:3000`) |
| `npm run typecheck` | Runs TypeScript type checking (`tsc --noEmit`) |
| `npm run lint` | Lints the codebase with ESLint |
| `npm test` | Runs the automated Node.js test suite |
| `npm run build` | Builds the production application with `next build` |
| `npm start` | Starts the production server |

---

## Deploying to Vercel

This project is configured as a standard Next.js application for zero-config deployment on Vercel.

### Option 1: Vercel Dashboard (Recommended)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** → **Project**.
3. Import your portfolio repository.
4. Vercel automatically detects the **Next.js** framework preset:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./` (repository root)
   - **Build Command**: `next build` (or `npm run build`)
   - **Output Directory**: Default Next.js output (`.next`)
   - **Install Command**: `npm install`
5. In **Environment Variables**, add:
   - **Key**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value**: `your_web3forms_access_key`
   - **Environments**: Production, Preview, Development
6. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and add the environment variable when requested.

---

## Contact

* **Developer**: Ayush Kumar
* **Email**: [ayushmaurya496@gmail.com](mailto:ayushmaurya496@gmail.com)
* **Phone**: [+91 9335280820](tel:+919335280820)
* **GitHub**: [ayushkumar1420](https://github.com/ayushkumar1420)
* **LinkedIn**: [Ayush Kumar](https://www.linkedin.com/in/ayush-kumar-83a969347)


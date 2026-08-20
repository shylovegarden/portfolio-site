export type Project = {
  name: string;
  flagship: boolean;
  role: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string | null;
  liveLabel?: string;
  githubUrl: string;
  icon: string;
  accent: string;
};

export type CaseStudy = {
  project: string;
  role: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const siteConfig = {
  name: 'Jonah Eastin',
  title: 'Software Engineer · Full-Stack & Mobile',
  headline: ['Software Engineer.', 'Systems Thinker.', 'Production Builder.'],
  email: 'jonah@shyapps.com',
  siteUrl: 'https://jonaheastin.com',
  githubUrl: 'https://github.com/shylovegarden',
  linkedInUrl: 'https://linkedin.com/in/jonaheastin',
  location: 'Remote',
};

export const stats = [
  { value: '10+', label: 'Years Diagnosing Complex Systems' },
  { value: '4', label: 'Production Applications Shipped' },
  { value: '1', label: 'Live Product (shyapps.com)' },
  { value: 'Full-Stack', label: 'Mobile · Web · Cloud · AI' },
];

export const expertise = [
  {
    label: 'SYSTEMS DIAGNOSTICS',
    title: 'Precision Problem Solving',
    body: 'A decade of tracing failures in complex environments translates directly into rapid debugging, stable architecture, and robust application design.',
  },
  {
    label: 'AI-AUGMENTED ENGINEERING',
    title: 'High-Velocity Delivery',
    body: 'Leveraging modern AI tooling (Cursor, LLMs) to drastically accelerate the development cycle—shipping production-ready, highly complex applications efficiently without compromising on code quality.',
  },
  {
    label: 'END-TO-END ARCHITECTURE',
    title: 'From Concept to Cloud',
    body: 'Comprehensive ownership of the stack: designing intuitive mobile/web interfaces, structuring scalable backends, and managing cloud deployments to deliver polished products.',
  },
];

export const projects: Project[] = [
  {
    name: 'SHY',
    flagship: true,
    role: 'Lead Architect & Founder',
    tagline: 'Intentional connection, built for the real world.',
    description:
      'The Relationship Operating System (LifeOS). A production-grade mobile platform built with Flutter (BLoC/Provider) and Supabase. Features a complex backend with Postgres RLS, Realtime sync, Stripe monetization, and over 300 Edge Functions.',
    tech: ['Flutter', 'Supabase (RLS/Edge)', 'Stripe', 'Vertex AI', 'Google Cloud', 'Dart'],
    liveUrl: 'https://shyapps.com',
    liveLabel: 'Visit shyapps.com',
    githubUrl: 'https://github.com/shylovegarden',
    icon: '/shy-logo.png', // Using image path instead of emoji
    accent: '#3b82f6',
  },
  {
    name: 'DealerHunt PRO',
    flagship: false,
    role: 'Lead Developer',
    tagline: 'Multi-source vehicle-sourcing intelligence platform.',
    description:
      'Aggregates vehicle auction listings via Playwright/patchright scrapers running on GitHub Actions. Built on Next.js 15 (App Router) and Supabase Realtime, utilizing Gemini AI for automated vehicle valuation and profit scoring.',
    tech: ['Next.js 15', 'TypeScript', 'Playwright', 'Supabase Realtime', 'Gemini AI'],
    liveUrl: null,
    githubUrl: 'https://github.com/shylovegarden/DealerHunt-PRO',
    icon: '🚙',
    accent: '#0ea5e9',
  },
  {
    name: 'Stay Life',
    flagship: false,
    role: 'Architect & Builder',
    tagline: 'Focused digital environments for productivity.',
    description:
      'A streamlined productivity application designed to minimize digital friction. Highlights clean UI/UX principles, performant client-side state management, and secure cloud synchronization.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    liveUrl: null,
    githubUrl: 'https://github.com/shylovegarden/Life',
    icon: '🤠',
    accent: '#22d3ee',
  },
  {
    name: 'Zeus',
    flagship: false,
    role: 'Systems Engineer',
    tagline: 'High-performance Rust systems engineering.',
    description:
      'A systems-level project in Rust exploring bare-metal execution, hardware enclaves (SGX/SEV), and kernel bypass. Includes a custom package manager, cloud job queue (Axum+Tokio), and machine attestation simulation.',
    tech: ['Rust', 'Tokio/Axum', 'Systems Architecture', 'Hardware Enclaves'],
    liveUrl: null,
    githubUrl: 'https://github.com/shylovegarden/Zeus',
    icon: '⚡',
    accent: '#a78bfa',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    project: 'SHY',
    role: 'Founder & Lead Architect',
    problem:
      'Dating and social apps optimize for engagement, not meaningful connection. Users scroll endlessly with little context for who someone is or what they actually want.',
    approach: [
      'Designed a mobile-first Flutter app with Supabase for auth, realtime data, and scalable backend services.',
      'Built intentional matching signals (Gravity and Harmony) instead of swipe-only mechanics.',
      'Integrated Vertex AI for context-aware features while keeping privacy and user control first.',
      'Deployed production infrastructure on Google Cloud with a live public presence at shyapps.com.',
    ],
    outcomes: [
      'End-to-end product ownership from architecture through deployment.',
      'Live production app serving real users — not a prototype.',
      'Cross-platform mobile stack with cloud AI integration.',
    ],
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Architecture', value: 'Serverless Backend' },
      { label: 'AI Engine', value: 'Vertex AI Integration' },
    ],
    stack: ['Flutter', 'Supabase', 'Vertex AI', 'Stripe', 'Google Cloud'],
    links: [
      { label: 'Live app', href: 'https://shyapps.com' },
      { label: 'GitHub', href: 'https://github.com/shylovegarden' },
    ],
  },
  {
    project: 'DealerHunt PRO',
    role: 'Lead Developer',
    problem:
      'Automotive dealers and buyers lack a fast way to cut through market noise across fragmented auction sites and marketplaces.',
    approach: [
      'Engineered a scalable scraping engine using Playwright and FlareSolverr on GitHub Actions to bypass anti-bot protections.',
      'Built a Next.js 15 frontend to surface normalized deal data via Supabase Realtime.',
      'Integrated Gemini AI to automatically score vehicles for profit potential and generate instant teardown estimates.',
    ],
    outcomes: [
      'Professional-grade B2B-style web application architecture.',
      'Demonstrates full-stack TypeScript competency employers search for.',
      'Clear path to demo deployment on Vercel.',
    ],
    metrics: [
      { label: 'Status', value: 'Functional Architecture' },
      { label: 'Domain', value: 'B2B Automotive' },
      { label: 'Data', value: 'Real-time Sync' },
      { label: 'Frontend', value: 'Next.js App Router' },
    ],
    stack: ['Next.js 15', 'Playwright', 'Supabase Realtime', 'Gemini AI'],
    links: [{ label: 'GitHub', href: 'https://github.com/shylovegarden/DealerHunt-PRO' }],
  },
  {
    project: 'Stay Life',
    role: 'Architect & Builder',
    problem:
      'Digital productivity tools often create more friction than they solve, overwhelming users with complex features rather than focusing on execution.',
    approach: [
      'Engineered a minimalist interface focusing entirely on core productivity workflows.',
      'Implemented robust client-side state management for instantaneous UI response.',
      'Integrated Supabase for secure, real-time data synchronization across devices.',
    ],
    outcomes: [
      'Delivered a highly performant, distraction-free application.',
      'Demonstrated ability to build clean, maintainable frontend architectures.',
      'Showcased expertise in modern web stack fundamentals.',
    ],
    metrics: [
      { label: 'Status', value: 'Functional Repo' },
      { label: 'Focus', value: 'UI/UX & Performance' },
      { label: 'Backend', value: 'Supabase Data' },
      { label: 'Frontend', value: 'Vanilla JS/HTML/CSS' },
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    links: [{ label: 'GitHub', href: 'https://github.com/shylovegarden/Life' }],
  },
  {
    project: 'Zeus',
    role: 'Systems Engineer',
    problem:
      'Architected a high-performance systems platform exploring kernel bypass, hardware enclaves, and bare-metal execution.',
    approach: [
      'Implemented core execution logic in Rust for strict memory safety and predictable latency.',
      'Built an accompanying cloud service using Axum and Tokio for remote job orchestration.',
      'Designed a machine attestation simulator and researched hardware-level security primitives.',
    ],
    outcomes: [
      'Shows depth beyond typical web-only portfolios.',
      'Demonstrates willingness to work close to the metal when it matters.',
      'Strong talking point for performance-sensitive roles.',
    ],
    metrics: [
      { label: 'Language', value: 'Rust' },
      { label: 'Focus', value: 'Systems & Performance' },
      { label: 'Design', value: 'Memory Safe' },
      { label: 'Execution', value: 'Low-level compute' },
    ],
    stack: ['Rust', 'Systems Architecture'],
    links: [{ label: 'GitHub', href: 'https://github.com/shylovegarden/Zeus' }],
  },
];

export const resumeExperience = [
  {
    title: 'Founder & Lead Architect',
    company: 'SHY',
    period: '2024 – Present',
    location: 'Remote',
    bullets: [
      'Architected and shipped a production Flutter mobile app with Supabase backend and Vertex AI integration.',
      'Own full product lifecycle: system design, mobile development, cloud deployment, and iteration based on user feedback.',
      'Live product at shyapps.com — mobile (iOS/Android), backend services, and AI-assisted features.',
    ],
  },
  {
    title: 'Independent Software Engineer',
    company: 'Self-Directed Projects',
    period: '2023 – Present',
    location: 'Remote',
    bullets: [
      'Built DealerHunt PRO — TypeScript/Next.js dealer intelligence platform with Supabase and REST API integrations.',
      'Built Stay Life — minimalist productivity web app with Supabase backend.',
      'Built Zeus — Rust systems project focused on performance and diagnostic engineering.',
    ],
  },
  {
    title: 'Technical Diagnostics Specialist',
    company: 'Prior Career (10+ years)',
    period: 'Pre-2023',
    location: 'Remote',
    bullets: [
      'Diagnosed complex technical systems under time pressure — root-cause analysis, systematic troubleshooting, and clear documentation.',
      'Developed transferable skills in reliability thinking, failure isolation, and precision problem-solving.',
    ],
  },
];

export const resumeSkills = {
  languages: ['Dart', 'TypeScript', 'JavaScript', 'Rust', 'SQL', 'HTML/CSS'],
  frameworks: ['Flutter', 'Next.js', 'React', 'Tailwind CSS'],
  backend: ['Supabase', 'PostgreSQL', 'REST APIs', 'Google Cloud', 'Vertex AI'],
  practices: ['System design', 'Root-cause debugging', 'CI/CD', 'AI-augmented development', 'Mobile & web deployment'],
};

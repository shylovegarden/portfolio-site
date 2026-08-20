import type { Metadata } from 'next';
import Link from 'next/link';
import {
  resumeExperience,
  resumeSkills,
  siteConfig,
} from '@/content/portfolio';
import { PrintButton } from './PrintButton';
import './resume.css';

export const metadata: Metadata = {
  title: 'Resume — Jonah Eastin | Software Engineer',
  description:
    'Full resume for Jonah Eastin — Software Engineer & Diagnostic Systems Specialist. Flutter, TypeScript, Rust, Supabase, Vertex AI. 9+ years systems diagnostics. NVIDIA Inception. Available for full-time & contract roles.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Resume — Jonah Eastin | Software Engineer',
    description:
      'Flutter · TypeScript · Rust · Supabase · Vertex AI. 9+ years systems diagnostics. NVIDIA Inception. Available full-time & contract, remote.',
    url: 'https://jonaheastin.com/resume',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume — Jonah Eastin | Software Engineer',
    description:
      'Flutter · TypeScript · Rust · Supabase. NVIDIA Inception. Available for full-time & contract.',
  },
};

const skillCategoryLabels: Record<string, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  backend: 'Backend & Cloud',
  diagnostics: 'OEM Diagnostics',
  practices: 'Practices',
};

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-slate-950 text-slate-100">
      <div className="no-print fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            ← Back to portfolio
          </Link>
          <div className="flex gap-4 items-center">
            <a 
              href="/Jonah_Eastin_Resume.pdf" 
              download
              className="text-xs font-bold bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 px-3 py-1.5 rounded border border-blue-500/30 transition-colors"
            >
              ↓ PDF
            </a>
            <PrintButton />
          </div>
        </div>
      </div>

      <article className="resume-sheet max-w-3xl mx-auto px-6 py-20 print:py-0 print:px-0">

        {/* Header */}
        <header className="mb-8 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black tracking-tight mb-1">{siteConfig.name}</h1>
          <p className="text-lg text-blue-400 font-medium mb-1">
            Software Engineer &amp; Systems Diagnostics Specialist
          </p>
          <p className="text-sm text-slate-400 mb-4">
            English · Tigrinya · Amharic &nbsp;|&nbsp; U.S. Citizen · Valid Driver's License
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-400">
            <span>(314) 901-4011</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            <a href={siteConfig.siteUrl} className="hover:text-white">
              {siteConfig.siteUrl.replace('https://', '')}
            </a>
            <a href={siteConfig.githubUrl} className="hover:text-white">
              github.com/shylovegarden
            </a>
            <a href={siteConfig.linkedInUrl} className="hover:text-white">
              linkedin.com/in/jonah-eastin
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="resume-section-title">Summary</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Diagnostic and electronics repair specialist with 9+ years of hands-on technical experience,
            including 6+ years restoring electrically dead and flood-damaged vehicles for shops across
            Missouri, Texas, Arizona, and Indiana — approximately 40 full flood-vehicle recoveries,
            each requiring 10 or more control modules replaced, programmed, and returned to service.
            Works at the circuit-board level (UART/BDM bench programming, EEPROM recovery, chip-level
            processor transplants) in addition to factory-authorized OEM scan-tool diagnostics across
            GM, Stellantis, BMW, Mercedes-Benz, and Audi. Self-taught software developer with 4 live,
            publicly verifiable applications on GitHub — built on Flutter/Dart, TypeScript/Next.js,
            Rust, and Supabase. NVIDIA Inception Program member.
            Open to remote, hybrid, and nationwide roles.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="resume-section-title">Experience</h2>
          <div className="space-y-6">
            {resumeExperience.map((job) => (
              <div key={`${job.company}-${job.title}`}>
                <div className="flex flex-wrap justify-between gap-2 mb-1">
                  <h3 className="font-bold text-base">{job.title}</h3>
                  <span className="text-sm text-slate-500">{job.period}</span>
                </div>
                <p className="text-sm text-blue-400 mb-2">
                  {job.company} · {job.location}
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-8">
          <h2 className="resume-section-title">Selected Projects</h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <p className="font-bold text-slate-100">
                SHY — Relationship OS (LifeOS) · Live Production &nbsp;
                <span className="text-xs font-normal text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">NVIDIA Inception Member</span>
              </p>
              <p className="mt-0.5 text-slate-400">
                Flutter (BLoC/Provider) · Supabase (Postgres RLS + 300+ Edge Functions) · Vertex AI · Stripe ·{' '}
                <a href="https://shyapps.com" className="text-blue-400 hover:text-blue-300">shyapps.com</a>
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-100">DealerHunt-PRO — Multi-source vehicle sourcing intelligence platform · 900+ commits</p>
              <p className="mt-0.5 text-slate-400">Next.js 15 · TypeScript · Playwright/patchright scrapers (GitHub Actions) · Supabase Realtime · Gemini AI</p>
            </div>
            <div>
              <p className="font-bold text-slate-100">Zeus — Custom systems language compiler (Rust)</p>
              <p className="mt-0.5 text-slate-400">.zs → C + native binaries · Zero-heap enforcement · Z3-backed compile-time assertion proving · Axum/Tokio cloud service</p>
            </div>
            <div>
              <p className="font-bold text-slate-100">Stay Life — Minimalist productivity web app</p>
              <p className="mt-0.5 text-slate-400">HTML · CSS · JavaScript · Supabase</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="resume-section-title">Skills</h2>
          <dl className="space-y-3 text-sm">
            {Object.entries(resumeSkills).map(([category, items]) => (
              <div key={category} className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="font-semibold text-slate-400">
                  {skillCategoryLabels[category] ?? category}
                </dt>
                <dd className="text-slate-300">{(items as string[]).join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education */}
        <section>
          <h2 className="resume-section-title">Education</h2>
          <div className="text-sm text-slate-300 space-y-1">
            <p>
              <span className="font-semibold text-slate-100">Networking / Information Technology coursework</span>
              {' '}— St. Louis Community College (STLCC); coursework transferred to Fontbonne University, 2018
            </p>
            <p className="text-slate-400">Planning to enroll in an online bachelor's degree program in late 2026.</p>
          </div>
        </section>

      </article>
    </div>
  );
}

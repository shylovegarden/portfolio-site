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
  title: 'Resume',
  description:
    'Resume for Jonah Eastin — Software Engineer specializing in Flutter, TypeScript, Supabase, and production mobile/web applications.',
};

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-slate-950 text-slate-100">
      <div className="no-print fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            ← Back to portfolio
          </Link>
          <PrintButton />
        </div>
      </div>

      <article className="resume-sheet max-w-3xl mx-auto px-6 py-20 print:py-0 print:px-0">
        <header className="mb-8 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black tracking-tight mb-1">{siteConfig.name}</h1>
          <p className="text-lg text-blue-400 font-medium mb-4">{siteConfig.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
            <span>{siteConfig.location}</span>
            <span>{siteConfig.email}</span>
            <a href={siteConfig.siteUrl} className="hover:text-white">
              {siteConfig.siteUrl.replace('https://', '')}
            </a>
            <a href={siteConfig.githubUrl} className="hover:text-white">
              github.com/shylovegarden
            </a>
            <a href={siteConfig.linkedInUrl} className="hover:text-white">
              linkedin.com/in/jonaheastin
            </a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="resume-section-title">Summary</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Software engineer with 10+ years diagnosing complex technical systems and 4 shipped production applications.
            Specializes in Flutter mobile development, TypeScript/Next.js web apps, Supabase backends, and AI-integrated
            workflows (Vertex AI, Google Cloud). Ships end-to-end — from architecture and implementation to deployment.
            Based in St. Peters, MO; open to remote, hybrid, and St. Louis metro roles.
          </p>
        </section>

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

        <section className="mb-8">
          <h2 className="resume-section-title">Selected Projects</h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <p className="font-bold text-slate-100">SHY — Live production mobile app</p>
              <p>
                Flutter · Supabase · Vertex AI · Google Cloud ·{' '}
                <a href="https://shyapps.com" className="text-blue-400">
                  shyapps.com
                </a>
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-100">DealerHunt PRO — Dealer intelligence platform</p>
              <p>TypeScript · Next.js · Supabase · REST APIs</p>
            </div>
            <div>
              <p className="font-bold text-slate-100">Zeus — Rust systems project</p>
              <p>Performance engineering · diagnostic-first architecture</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="resume-section-title">Skills</h2>
          <dl className="space-y-3 text-sm">
            {Object.entries(resumeSkills).map(([category, items]) => (
              <div key={category} className="grid grid-cols-[120px_1fr] gap-2">
                <dt className="font-semibold text-slate-400 capitalize">{category}</dt>
                <dd className="text-slate-300">{items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </div>
  );
}

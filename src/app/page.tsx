'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  caseStudies,
  expertise,
  projects,
  siteConfig,
  stats,
} from '@/content/portfolio';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    const handleScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(100, pct));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/#expertise', label: 'Expertise' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#case-studies', label: 'Case Studies' },
    { href: '/resume', label: 'Resume' },
    { href: '/#coverage', label: 'Coverage' },
  ];

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-orb-3" />
      </div>
      <div className="noise" aria-hidden="true" />

      <main className="relative z-10 min-h-screen">
        <header className="fixed top-0 w-full z-50 nav-blur border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-black">JE</div>
              <span className="font-semibold text-[15px] tracking-tight">
                Jonah <span style={{ color: 'var(--accent-bright)' }}>Eastin</span>
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="animated-underline text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl"
              >
                Get in Touch
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg glass border"
                style={{ borderColor: 'var(--border)' }}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                aria-label="Toggle navigation"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileNavOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile nav dropdown */}
          {mobileNavOpen && (
            <nav className="lg:hidden px-6 py-4 flex flex-col gap-4 border-t" style={{ borderColor: 'var(--border)' }} aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-bold tracking-tight"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </header>

        <section className="relative pt-44 pb-32 px-6 lg:px-8 grid-pattern" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8" style={{ animation: 'fade-up 0.6s ease forwards' }}>
              <span
                className="status-pulse inline-flex items-center px-4 py-2 rounded-full text-sm font-medium glass border"
                style={{ borderColor: 'rgba(74,222,128,0.2)', color: '#86efac' }}
              >
                Available for Full-Time & Contract — Remote
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8"
            >
              {siteConfig.headline.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === 1 ? 'gradient-text glow-text' : ''}`}
                  style={{
                    ...(i !== 1 ? { color: 'var(--text-primary)' } : {}),
                    animation: `fade-up 0.7s ${0.1 + (i * 0.15)}s ease both`
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
              style={{ color: 'var(--text-secondary)', animation: 'fade-up 0.7s 0.2s ease both' }}
            >
              I build and deploy production mobile and web applications —{' '}
              <span className="font-mono text-blue-400 text-base">Flutter · TypeScript · Supabase · Vertex AI</span>.
              Ten years of systems diagnostics plus modern AI tooling means I ship reliably and debug fast.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: 'fade-up 0.7s 0.3s ease both' }}>
              <Link
                href="/#case-studies"
                className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-[15px] transition-all"
              >
                Read Case Studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass border font-semibold rounded-xl text-[15px] transition-all hover:border-blue-500/30"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                View Resume
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass border font-semibold rounded-xl text-[15px] transition-all hover:border-blue-500/30"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                Email Me
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-12" style={{ animation: 'fade-up 0.7s 0.4s ease both' }}>
              {['Flutter', 'Dart', 'Supabase', 'TypeScript', 'Next.js', 'Vertex AI', 'Rust', 'Google Cloud'].map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider" aria-hidden="true" />
        <section className="py-16 px-6 lg:px-8" aria-label="Key statistics">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`reveal reveal-delay-${i + 1} text-center`}>
                <div className="stat-number mb-1">{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="section-divider" aria-hidden="true" />

        <section id="expertise" className="py-32 px-6 lg:px-8" aria-labelledby="expertise-heading">
          <div className="max-w-6xl mx-auto">
            <div className="reveal mb-20">
              <div
                className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--accent-bright)' }}
              >
                <div className="w-8 h-px bg-blue-400" />
                Expertise
              </div>
              <h2 id="expertise-heading" className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What I Bring to a Team
              </h2>
              <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Deep troubleshooting experience, modern full-stack skills, and the discipline to ship production software —
                not just prototypes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal reveal-delay-${i + 1} gradient-border glass-hover shine p-8 rounded-2xl`}
                >
                  <div
                    className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: 'var(--accent-bright)' }}
                  >
                    {card.label}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-32 px-6 lg:px-8" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto">
            <div className="reveal mb-20">
              <div
                className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--accent-bright)' }}
              >
                <div className="w-8 h-px bg-blue-400" />
                Portfolio
              </div>
              <h2 id="projects-heading" className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Production Work
              </h2>
              <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Live products and functional architectures designed for scale, performance, and immediate business impact.
              </p>
            </div>

            <div className="space-y-6">
              {projects
                .filter((p) => p.flagship)
                .map((p) => (
                  <div
                    key={p.name}
                    className="reveal flagship-card shine overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-5 min-h-[480px]">
                      <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-8">
                            <span
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
                              style={{
                                background: 'rgba(59,130,246,0.12)',
                                color: '#93c5fd',
                                border: '1px solid rgba(59,130,246,0.2)',
                              }}
                            >
                              Flagship · Live
                            </span>
                            {p.name === 'SHY' && (
                              <img
                                src="/nvidia-inception.png"
                                alt="NVIDIA Inception Program Member"
                                className="h-7 object-contain opacity-90"
                                title="NVIDIA Inception Program Member"
                              />
                            )}
                            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                              {p.role}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 mb-3">
                            <span className="flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden" aria-hidden="true">
                              {p.icon.startsWith('/') ? (
                                <img src={p.icon} alt={`${p.name} logo`} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-5xl">{p.icon}</span>
                              )}
                            </span>
                            <h3 className="text-6xl font-black tracking-tight gradient-text">{p.name}</h3>
                          </div>
                          <p className="text-base font-medium mb-6 italic" style={{ color: 'var(--accent-bright)' }}>
                            {p.tagline}
                          </p>
                          <p
                            className="text-base leading-relaxed mb-8"
                            style={{ color: 'var(--text-secondary)', maxWidth: '480px' }}
                          >
                            {p.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-10">
                            {p.tech.map((t) => (
                              <span key={t} className="tech-badge">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {p.liveUrl && (
                            <a
                              href={p.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all"
                            >
                              {p.liveLabel}
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          )}
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 glass border font-semibold rounded-xl text-sm transition-all hover:border-blue-500/30"
                            style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                          >
                            GitHub Profile
                          </a>
                        </div>
                      </div>

                      {/* Right panel: real app preview */}
                      <a
                        href={p.liveUrl ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:col-span-2 relative flex items-end justify-center overflow-hidden group"
                        style={{ background: 'rgba(0,0,0,0.5)', minHeight: '300px' }}
                        aria-label={`Visit ${p.name} live app`}
                      >
                        {/* Ambient glow */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.18) 0%, transparent 70%)',
                          }}
                        />
                        {/* Phone mockup image */}
                        {p.name === 'SHY' ? (
                          <img
                            src="/shy-preview.png"
                            alt="SHY app live preview — click to visit shyapps.com"
                            className="relative z-10 w-[72%] max-w-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
                            style={{ marginBottom: '-2px', animation: 'float-subtle 6s ease-in-out infinite' }}
                          />
                        ) : (
                          <div className="relative z-10 flex flex-col items-center gap-4 pb-10">
                            <div className="flex items-center justify-center w-24 h-24 rounded-[1.5rem] overflow-hidden" style={{ filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.4))' }}>
                              {p.icon.startsWith('/') ? (
                                <img src={p.icon} alt={`${p.name} logo`} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-6xl">{p.icon}</span>
                              )}
                            </div>
                            <div className="text-2xl font-black tracking-widest gradient-text">{p.name}</div>
                          </div>
                        )}
                        {/* Click-to-visit overlay hint */}
                        <div
                          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: 'rgba(59,130,246,0.9)', color: '#fff' }}
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Visit Live
                        </div>
                        {/* Live dot bottom */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
                          <div className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            {p.liveUrl ? new URL(p.liveUrl).hostname : ''}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}

              <div className="grid md:grid-cols-3 gap-6">
                {projects
                  .filter((p) => !p.flagship)
                  .map((p, i) => (
                    <div
                      key={p.name}
                      className={`reveal reveal-delay-${i + 1} gradient-border glass-hover shine flex flex-col rounded-2xl group`}
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      {/* Terminal/Window Header */}
                      <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                        <span className="ml-2 text-[10px] font-mono tracking-wider" style={{ color: 'var(--text-muted)' }}>
                          {p.name.toLowerCase().replace(/\s+/g, '-')}.exe
                        </span>
                      </div>

                      <div className="p-8 flex flex-col flex-1 relative overflow-hidden">
                        {/* Subtle background glow on hover */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${p.accent}08 0%, transparent 70%)`
                          }}
                        />
                        
                        <div className="relative z-10 flex flex-col flex-1">
                          <div className="flex items-center gap-4 mb-6">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105"
                              style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}30` }}
                            >
                              {p.icon.startsWith('/') ? (
                                <img src={p.icon} alt={`${p.name} logo`} className="w-full h-full object-cover" />
                              ) : (
                                p.icon
                              )}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg leading-tight group-hover:text-white transition-colors">{p.name}</h4>
                              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--text-muted)' }}>
                                {p.role}
                              </p>
                            </div>
                          </div>

                          <p className="text-xs font-semibold mb-3" style={{ color: p.accent }}>
                            {p.tagline}
                          </p>
                          <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                            {p.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-8">
                            {p.tech.map((t) => (
                              <span key={t} className="tech-badge text-[10px]">
                                {t}
                              </span>
                            ))}
                          </div>

                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors mt-auto w-fit"
                            style={{ color: 'var(--text-secondary)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                          >
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-current">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                              </svg>
                            </span>
                            View Source
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="py-32 px-6 lg:px-8" aria-labelledby="case-studies-heading">
          <div className="max-w-6xl mx-auto">
            <div className="reveal mb-20">
              <div
                className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--accent-bright)' }}
              >
                <div className="w-8 h-px bg-blue-400" />
                Case Studies
              </div>
              <h2 id="case-studies-heading" className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Problem → Approach → Outcome
              </h2>
              <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                Deep dives into system design, architecture decisions, and the technical challenges solved in each project.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, i) => (
                <article
                  key={study.project}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} gradient-border glass-hover rounded-2xl overflow-hidden`}
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-bright)' }}>
                          {study.role}
                        </p>
                        <h3 className="text-3xl font-black tracking-tight">{study.project}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tech-badge hover:border-blue-500/40 transition-colors"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                          Problem
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                          Key Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {study.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                              <span style={{ color: 'var(--accent-bright)' }}>✓</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
                        Execution Pipeline
                      </h4>
                      <div className="flex flex-col md:flex-row gap-4 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-6 left-0 right-0 h-px overflow-hidden" style={{ background: 'var(--border)', zIndex: 0 }}>
                          <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-bright), transparent)', animation: 'pipeline-flow 3s linear infinite' }} />
                        </div>
                        
                        {study.approach.map((step, stepIndex) => (
                          <div key={step} className="flex-1 relative z-10 flex flex-row md:flex-col items-start gap-4 group">
                            {/* Node */}
                            <div className="relative">
                              <div
                                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black border transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                style={{ 
                                  background: 'var(--bg-main)', 
                                  color: 'var(--accent-bright)',
                                  borderColor: 'var(--border)'
                                }}
                              >
                                {stepIndex + 1}
                              </div>
                              {/* Mobile connecting line */}
                              {stepIndex !== study.approach.length - 1 && (
                                <div className="md:hidden absolute top-12 bottom-[-16px] left-1/2 w-px -translate-x-1/2 overflow-hidden" style={{ background: 'var(--border)' }}>
                                  <div className="w-full h-full" style={{ background: 'linear-gradient(180deg, transparent, var(--accent-bright), transparent)', animation: 'pipeline-flow-vertical 3s linear infinite' }} />
                                </div>
                              )}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 pt-1 md:pt-0">
                              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {step}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div
                          key={`${study.project}-${metric.label}`}
                          className="metric-card"
                        >
                          <div className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{metric.value}</div>
                          <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="coverage" className="py-32 px-6 lg:px-8" aria-labelledby="coverage-heading">
          <div className="section-divider mb-32" aria-hidden="true" />
          <div className="max-w-6xl mx-auto">
            <div className="reveal grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--accent-bright)' }}
                >
                  <div className="w-8 h-px bg-blue-400" />
                  Availability
                </div>
                <h2 id="coverage-heading" className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  Available Nationwide · Remote OK
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Fully equipped for distributed work. Open to remote roles nationwide and flexible hybrid arrangements.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Remote Nationwide',
                    'US Timezones (EST/CST/PST)',
                    'Asynchronous Workflows',
                    'Available for Travel',
                  ].map((city, cityIndex) => (
                    <div key={city} className={`reveal reveal-delay-${Math.min(cityIndex + 1, 4)} flex items-center gap-3`}>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--accent-bright)' }}
                      >
                        ✓
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: cityIndex === 0 ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                      >
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal gradient-border rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="p-10 grid-pattern relative" style={{ minHeight: '360px' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Outer spinning dashed ring */}
                      <div
                        className="absolute w-72 h-72 rounded-full border border-dashed opacity-10 spin-slow"
                        style={{ borderColor: 'var(--accent)' }}
                      />
                      {/* Mid ring */}
                      <div
                        className="absolute w-52 h-52 rounded-full border opacity-15 spin-slow-reverse"
                        style={{ borderColor: 'var(--cyan)', borderStyle: 'dotted' }}
                      />
                      {/* Center pill */}
                      <div
                        className="relative z-10 flex flex-col items-center gap-3 px-8 py-6 rounded-2xl glass border"
                        style={{ borderColor: 'rgba(96,165,250,0.2)' }}
                      >
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color: 'var(--accent-bright)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="font-bold text-base tracking-tight">Remote · Nationwide</div>
                        <div className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>EST / CST / PST &nbsp;·&nbsp; Async-ready</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-xs font-medium" style={{ color: '#86efac' }}>Open to Opportunities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" aria-labelledby="contact-heading">
          <div className="section-divider" aria-hidden="true" />

          <div className="py-32 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="reveal">
                <div
                  className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--accent-bright)' }}
                >
                  <div className="w-8 h-px bg-blue-400" />
                  Contact
                  <div className="w-8 h-px bg-blue-400" />
                </div>
                <h2 id="contact-heading" className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                  Let&apos;s Talk
                </h2>
                <p className="text-xl leading-relaxed mb-12 mx-auto max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                  Looking for a software engineer who ships production apps, debugs systematically, and moves fast with
                  AI-augmented workflows? I&apos;d love to hear about the role.
                </p>
              </div>

              <div className="reveal flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn-glow inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.email}
                </a>
                <a href="/resume" className="cta-link">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
                <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="cta-link">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" className="cta-link">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="section-divider" aria-hidden="true" />
          <div className="py-8 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-[10px] font-black">JE</div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  © {new Date().getFullYear()} Jonah Eastin · {siteConfig.location}
                </span>
              </div>
              <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                Software Engineer · Full-Stack & Mobile · Remote
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

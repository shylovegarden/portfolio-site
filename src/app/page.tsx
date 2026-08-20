'use client';

import { useEffect, useRef } from 'react';
import {
  caseStudies,
  expertise,
  projects,
  siteConfig,
  stats,
} from '@/content/portfolio';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

    return () => observerRef.current?.disconnect();
  }, []);

  const navLinks = [
    { href: '#expertise', label: 'Expertise' },
    { href: '#projects', label: 'Projects' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '/resume', label: 'Resume' },
    { href: '#coverage', label: 'Coverage' },
  ];

  return (
    <>
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
                <a
                  key={link.href}
                  href={link.href}
                  className="animated-underline text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl"
            >
              Get in Touch
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
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
              style={{ animation: 'fade-up 0.7s 0.1s ease both' }}
            >
              {siteConfig.headline.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === 1 ? 'gradient-text glow-text' : ''}`}
                  style={i !== 1 ? { color: 'var(--text-primary)' } : undefined}
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
              <a
                href="#case-studies"
                className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-[15px] transition-all"
              >
                Read Case Studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass border font-semibold rounded-xl text-[15px] transition-all hover:border-blue-500/30"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                View Resume
              </a>
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
                    className="reveal gradient-border shine overflow-hidden rounded-3xl"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className="grid lg:grid-cols-5 min-h-[480px]">
                      <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-8">
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

                      <div
                        className="lg:col-span-2 relative flex items-center justify-center overflow-hidden"
                        style={{ background: 'rgba(0,0,0,0.4)', minHeight: '300px' }}
                      >
                        <div className="absolute inset-0 grid-pattern opacity-30" />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.2) 0%, transparent 70%)',
                          }}
                        />
                        <div className="relative flex flex-col items-center gap-6 z-10">
                          <div className="flex items-center justify-center w-32 h-32 rounded-[2rem] overflow-hidden" style={{ filter: 'drop-shadow(0 0 40px rgba(59,130,246,0.5))' }}>
                            {p.icon.startsWith('/') ? (
                                <img src={p.icon} alt={`${p.name} logo`} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-8xl">{p.icon}</span>
                              )}
                          </div>
                          <div className="text-3xl font-black tracking-widest gradient-text">{p.name}</div>
                          {p.liveUrl && (
                            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                              Live on {new URL(p.liveUrl).hostname}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <div className="grid md:grid-cols-3 gap-6">
                {projects
                  .filter((p) => !p.flagship)
                  .map((p, i) => (
                    <div
                      key={p.name}
                      className={`reveal reveal-delay-${i + 1} gradient-border glass-hover shine flex flex-col p-8 rounded-2xl`}
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl overflow-hidden"
                          style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}25` }}
                        >
                          {p.icon.startsWith('/') ? (
                            <img src={p.icon} alt={`${p.name} logo`} className="w-full h-full object-cover" />
                          ) : (
                            p.icon
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg leading-tight">{p.name}</h4>
                          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            {p.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs font-medium italic mb-3" style={{ color: p.accent }}>
                        {p.tagline}
                      </p>
                      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {p.tech.map((t) => (
                          <span key={t} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                        style={{ color: 'var(--text-secondary)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        View on GitHub
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
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

                    <div className="mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                        Approach
                      </h4>
                      <ol className="space-y-3">
                        {study.approach.map((step, stepIndex) => (
                          <li key={step} className="flex gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <span
                              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                              style={{ background: 'rgba(59,130,246,0.15)', color: 'var(--accent-bright)' }}
                            >
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div
                          key={`${study.project}-${metric.label}`}
                          className="rounded-xl p-4 border"
                          style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}
                        >
                          <div className="text-lg font-bold mb-1">{metric.value}</div>
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
                    <div className="relative">
                      <div
                        className="w-72 h-72 rounded-full border border-dashed opacity-20 animate-spin"
                        style={{ borderColor: 'var(--accent)', animationDuration: '30s' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-2">🌎</div>
                          <div className="font-bold text-sm">Remote, US</div>
                          <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                            Available Worldwide
                          </div>
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
                  {siteConfig.email}
                </a>
                <a
                  href="/resume"
                  className="inline-flex items-center gap-2.5 px-8 py-4 glass border font-bold rounded-xl text-base transition-all hover:border-blue-500/30"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                >
                  Resume
                </a>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 glass border font-bold rounded-xl text-base transition-all hover:border-blue-500/30"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 glass border font-bold rounded-xl text-base transition-all hover:border-blue-500/30"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                >
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

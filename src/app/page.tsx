'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  // Scroll reveal effect
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

  const projects = [
    {
      name: 'SHY',
      flagship: true,
      role: 'Lead Architect & Founder',
      tagline: 'Love is simple — loving is simpler.',
      description:
        'A modern relationship and intent platform built for real-world connection. Replaces endless scrolling with richer context, intentional signals — Gravity and Harmony — and structured real-world planning.',
      tech: ['Flutter', 'Dart', 'Supabase', 'Vertex AI', 'Google Cloud', 'Dart FFI'],
      liveUrl: 'https://shyapps.com',
      liveLabel: 'Visit shyapps.com',
      githubUrl: 'https://github.com/Shyapps/SHY',
      icon: '💠',
      accent: '#3b82f6',
    },
    {
      name: 'DealerHunt PRO',
      flagship: false,
      role: 'Lead Developer',
      tagline: 'Precision intelligence for automotive markets.',
      description:
        'A professional-grade dealer intelligence platform that surfaces real deals in real-time. Built with a modern TypeScript stack and data pipelines that cut through market noise.',
      tech: ['TypeScript', 'Next.js', 'Supabase', 'REST APIs', 'Tailwind CSS'],
      liveUrl: null,
      githubUrl: 'https://github.com/shylovegarden/DealerHunt-PRO',
      icon: '🔍',
      accent: '#0ea5e9',
    },
    {
      name: 'Life',
      flagship: false,
      role: 'Architect & Builder',
      tagline: 'Clarity over noise.',
      description:
        'A clean, intentional life operating system designed to manage what actually matters. Built for personal productivity with a minimalist, distraction-free philosophy.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
      liveUrl: null,
      githubUrl: 'https://github.com/shylovegarden/Life',
      icon: '🌱',
      accent: '#22d3ee',
    },
    {
      name: 'Zeus',
      flagship: false,
      role: 'Systems Engineer',
      tagline: 'Diagnostic precision at the systems level.',
      description:
        'A high-performance systems project in Rust. Demonstrates low-level architecture thinking and diagnostic-first engineering applied to a modern systems-level problem.',
      tech: ['Rust', 'Systems Architecture', 'Performance Eng.'],
      liveUrl: null,
      githubUrl: 'https://github.com/shylovegarden/Zeus',
      icon: '⚡',
      accent: '#a78bfa',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years Diagnosing Complex Systems' },
    { value: '4', label: 'Shipped Production Apps' },
    { value: '60mi', label: 'St. Louis Metro Radius' },
    { value: '10×', label: 'AI-Augmented Velocity' },
  ];

  const expertise = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      label: 'DIAGNOSTIC DEPTH',
      title: 'Master-Level Root-Cause Analysis',
      body: '10+ years diagnosing complex technical systems — skills that translate directly into rapid architectural debugging and precision problem-solving that traditional CS graduates lack.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'AI FORCE MULTIPLIER',
      title: 'Ship 10× Faster With AI Toolchains',
      body: 'I don\'t just use AI — I architect with it. Cursor, Windsurf, and Vertex AI are integrated into every phase of my workflow, compressing weeks of work into days.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      label: 'SHIPPED & SCALED',
      title: 'Production Apps, Not Side Projects',
      body: 'Every project in my portfolio is fully architected, deployed, and production-ready. I build for real users, real constraints, and real markets — not academic exercises.',
    },
  ];

  return (
    <>
      {/* ── Background Mesh ── */}
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-orb-3" />
      </div>
      <div className="noise" aria-hidden="true" />

      <main className="relative z-10 min-h-screen">
        {/* ══════════════════════════════════════════
            NAVIGATION
        ══════════════════════════════════════════ */}
        <header className="fixed top-0 w-full z-50 nav-blur border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-black">JE</div>
              <span className="font-semibold text-[15px] tracking-tight">
                Jonah <span style={{ color: 'var(--accent-bright)' }}>Eastin</span>
              </span>
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {[
                { href: '#expertise', label: 'Expertise' },
                { href: '#projects', label: 'Projects' },
                { href: '#coverage', label: 'Coverage' },
              ].map((link) => (
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

            {/* CTA */}
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

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="relative pt-44 pb-32 px-6 lg:px-8 grid-pattern" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto">
            {/* Status badge */}
            <div className="mb-8" style={{ animation: 'fade-up 0.6s ease forwards' }}>
              <span className="status-pulse inline-flex items-center px-4 py-2 rounded-full text-sm font-medium glass border"
                style={{ borderColor: 'rgba(74,222,128,0.2)', color: '#86efac' }}>
                Available for Contract & FTE — St. Peters, MO
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8"
              style={{ animation: 'fade-up 0.7s 0.1s ease both' }}
            >
              <span className="block" style={{ color: 'var(--text-primary)' }}>Senior Diagnostic</span>
              <span className="block gradient-text glow-text">Engineer &</span>
              <span className="block" style={{ color: 'var(--text-primary)' }}>AI Architect.</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
              style={{ color: 'var(--text-secondary)', animation: 'fade-up 0.7s 0.2s ease both' }}
            >
              I architect and ship high-velocity cloud systems using{' '}
              <span className="font-mono text-blue-400 text-base">Flutter · Dart · Supabase · Vertex AI</span>.
              Based in St. Peters, MO — serving the entire Greater St. Louis metro.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4" style={{ animation: 'fade-up 0.7s 0.3s ease both' }}>
              <a
                href="#projects"
                className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-[15px] transition-all"
              >
                View Live Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="mailto:contact@jonaheastin.com"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass border font-semibold rounded-xl text-[15px] transition-all hover:border-blue-500/30"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                Connect via Email
              </a>
            </div>

            {/* Tech stack row */}
            <div className="flex flex-wrap gap-2 mt-12" style={{ animation: 'fade-up 0.7s 0.4s ease both' }}>
              {['Flutter', 'Dart', 'Supabase', 'TypeScript', 'Next.js', 'Vertex AI', 'Rust', 'Google Cloud'].map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
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

        {/* ══════════════════════════════════════════
            EXPERTISE
        ══════════════════════════════════════════ */}
        <section id="expertise" className="py-32 px-6 lg:px-8" aria-labelledby="expertise-heading">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="reveal mb-20">
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-bright)' }}>
                <div className="w-8 h-px bg-blue-400" />
                Why Me
              </div>
              <h2 id="expertise-heading" className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Why My Workflow Beats a Degree.
              </h2>
              <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                10+ years of diagnostic precision, combined with AI-augmented velocity — a combination that traditional education simply can't produce.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal reveal-delay-${i + 1} gradient-border glass-hover shine p-8 rounded-2xl`}
                >
                  <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: 'var(--accent-bright)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-400"
                      style={{ background: 'rgba(59,130,246,0.1)' }}>
                      {card.icon}
                    </div>
                    {card.label}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════════ */}
        <section id="projects" className="py-32 px-6 lg:px-8" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="reveal mb-20">
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-bright)' }}>
                <div className="w-8 h-px bg-blue-400" />
                Portfolio
              </div>
              <h2 id="projects-heading" className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Shipped. Live. Real.
              </h2>
              <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Production-deployed applications built with AI-augmented workflows. Real code, real users, real infrastructure.
              </p>
            </div>

            <div className="space-y-6">
              {/* ── SHY Flagship ── */}
              {projects.filter(p => p.flagship).map((p) => (
                <div
                  key={p.name}
                  className="reveal gradient-border shine overflow-hidden rounded-3xl"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="grid lg:grid-cols-5 min-h-[480px]">
                    {/* Content */}
                    <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-8">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
                            style={{ background: 'rgba(59,130,246,0.12)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.2)' }}>
                            ⭐ Flagship
                          </span>
                          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                            {p.role}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-5xl" aria-hidden="true">{p.icon}</span>
                          <h3 className="text-6xl font-black tracking-tight gradient-text">{p.name}</h3>
                        </div>
                        <p className="text-base font-medium mb-6 italic" style={{ color: 'var(--accent-bright)' }}>{p.tagline}</p>
                        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '480px' }}>
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-10">
                          {p.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          View on GitHub
                        </a>
                      </div>
                    </div>

                    {/* Visual Panel */}
                    <div className="lg:col-span-2 relative flex items-center justify-center overflow-hidden"
                      style={{ background: 'rgba(0,0,0,0.4)', minHeight: '300px' }}>
                      {/* Grid */}
                      <div className="absolute inset-0 grid-pattern opacity-30" />
                      {/* Glow */}
                      <div className="absolute inset-0" style={{
                        background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.2) 0%, transparent 70%)'
                      }} />
                      {/* Content */}
                      <div className="relative flex flex-col items-center gap-6 z-10">
                        <div className="text-8xl" style={{ filter: 'drop-shadow(0 0 40px rgba(59,130,246,0.5))' }}>
                          {p.icon}
                        </div>
                        <div className="text-3xl font-black tracking-widest gradient-text">{p.name}</div>
                        <div className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          Live on shyapps.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* ── 3 Other Projects ── */}
              <div className="grid md:grid-cols-3 gap-6">
                {projects.filter(p => !p.flagship).map((p, i) => (
                  <div
                    key={p.name}
                    className={`reveal reveal-delay-${i + 1} gradient-border glass-hover shine flex flex-col p-8 rounded-2xl`}
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}25` }}>
                        {p.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg leading-tight">{p.name}</h4>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.role}</p>
                      </div>
                    </div>

                    <p className="text-xs font-medium italic mb-3" style={{ color: p.accent }}>
                      {p.tagline}
                    </p>
                    <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {p.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                    </div>

                    {/* GitHub link */}
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            REGIONAL COVERAGE
        ══════════════════════════════════════════ */}
        <section id="coverage" className="py-32 px-6 lg:px-8" aria-labelledby="coverage-heading">
          <div className="section-divider mb-32" aria-hidden="true" />
          <div className="max-w-6xl mx-auto">
            <div className="reveal grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-bright)' }}>
                  <div className="w-8 h-px bg-blue-400" />
                  Regional Availability
                </div>
                <h2 id="coverage-heading" className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  St. Louis Regional Coverage
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Available for on-site, hybrid, or high-impact remote contract work. Full-coverage across the 60-mile St. Louis metropolitan area — from day one.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'St. Peters, MO (Home Base)',
                    'St. Charles, MO',
                    "O'Fallon, MO",
                    'Arnold, MO',
                    'Festus, MO',
                    'Greater St. Louis Metro',
                  ].map((city, i) => (
                    <div key={city} className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-center gap-3`}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{ background: 'rgba(59,130,246,0.1)', color: 'var(--accent-bright)' }}>
                        ✓
                      </div>
                      <span className="text-sm font-medium" style={{ color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Visual Map-ish element */}
              <div className="reveal gradient-border rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="p-10 grid-pattern relative" style={{ minHeight: '360px' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Outer ring */}
                      <div className="w-72 h-72 rounded-full border border-dashed opacity-20 animate-spin"
                        style={{ borderColor: 'var(--accent)', animationDuration: '30s' }} />
                      {/* Middle ring */}
                      <div className="absolute inset-8 rounded-full border border-dashed opacity-30"
                        style={{ borderColor: 'var(--accent-bright)', animationDuration: '20s' }} />
                      {/* Core */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-2">📍</div>
                          <div className="font-bold text-sm">St. Peters, MO</div>
                          <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>60-mile radius</div>
                        </div>
                      </div>
                      {/* Dots for cities */}
                      {[
                        { label: "O'Fallon", top: '10%', left: '40%' },
                        { label: 'St. Charles', top: '30%', left: '5%' },
                        { label: 'Arnold', bottom: '15%', left: '45%' },
                        { label: 'Festus', bottom: '5%', right: '20%' },
                      ].map((dot) => (
                        <div key={dot.label} className="absolute flex items-center gap-1.5" style={{ ...dot as React.CSSProperties }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{dot.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONTACT FOOTER
        ══════════════════════════════════════════ */}
        <footer id="contact" aria-labelledby="contact-heading">
          <div className="section-divider" aria-hidden="true" />

          {/* CTA Block */}
          <div className="py-32 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="reveal">
                <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-bright)' }}>
                  <div className="w-8 h-px bg-blue-400" />
                  Contact
                  <div className="w-8 h-px bg-blue-400" />
                </div>
                <h2 id="contact-heading" className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                  Let's Ship It.
                </h2>
                <p className="text-xl leading-relaxed mb-12 mx-auto max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                  Looking for a Senior Diagnostic Engineer and AI-Augmented Architect who can deliver at a velocity traditional teams can't match? Let's talk.
                </p>
              </div>

              <div className="reveal flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:contact@jonaheastin.com"
                  className="btn-glow inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@jonaheastin.com
                </a>
                <a
                  href="https://github.com/shylovegarden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 glass border font-bold rounded-xl text-base transition-all hover:border-blue-500/30"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  github.com/shylovegarden
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="section-divider" aria-hidden="true" />
          <div className="py-8 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-[10px] font-black">JE</div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  © {new Date().getFullYear()} Jonah Eastin · St. Peters, MO
                </span>
              </div>
              <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                Senior Diagnostic Engineer · AI-Augmented Architect · St. Louis Metro
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

import Link from "next/link";

export default function Home() {
  const projects = [
    {
      name: "SHY",
      flagship: true,
      role: "Lead Architect & Founder",
      description:
        "A modern relationship and intent platform built for real-world connection. Replaces endless scrolling with richer context, intentional signals (Gravity/Harmony), and structured real-world planning. Love is simple — loving is simpler.",
      tech: ["Flutter", "Dart", "Supabase", "Vertex AI", "Google Cloud"],
      liveUrl: "https://shyapps.com",
      liveLabel: "Visit shyapps.com",
      githubUrl: "https://github.com/Shyapps/SHY",
      icon: "💠",
    },
    {
      name: "DealerHunt PRO",
      flagship: false,
      role: "Lead Developer",
      description:
        "A professional-grade dealer intelligence platform built to cut through the noise in automotive markets. Leverages real-time data pipelines and modern TypeScript architecture to surface the deals others miss.",
      tech: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
      liveUrl: null,
      liveLabel: null,
      githubUrl: "https://github.com/shylovegarden/DealerHunt-PRO",
      icon: "🔍",
    },
    {
      name: "Life",
      flagship: false,
      role: "Architect & Builder",
      description:
        "A clean, intentional life operating system — built for clarity over noise. A personal productivity and organization platform designed to manage what actually matters.",
      tech: ["HTML", "CSS", "JavaScript", "Supabase"],
      liveUrl: null,
      liveLabel: null,
      githubUrl: "https://github.com/shylovegarden/Life",
      icon: "🌱",
    },
    {
      name: "Zeus",
      flagship: false,
      role: "Systems Engineer",
      description:
        "A high-performance systems project built in Rust. Demonstrates low-level architecture thinking and diagnostic-first engineering applied to a modern systems-level problem.",
      tech: ["Rust", "Systems Architecture", "Performance Engineering"],
      liveUrl: null,
      liveLabel: null,
      githubUrl: "https://github.com/shylovegarden/Zeus",
      icon: "⚡",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600/30 selection:text-white">
      {/* ── Navigation ── */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Jonah <span className="text-blue-500">Eastin</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#coverage" className="hover:text-blue-400 transition-colors">Coverage</a>
          </nav>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-28 px-6 max-w-5xl mx-auto overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Available · St. Peters, MO · 60-mile radius
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
            Jonah Eastin<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
              AI-Augmented Architect.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
            I architect and ship high-velocity cloud systems using Flutter, Dart, Supabase, and AI-driven workflows. Senior Diagnostic Engineer turned full-stack founder — serving the entire Greater St. Louis metro area.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] inline-flex items-center gap-2"
            >
              View Live Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a
              href="mailto:contact@jonaheastin.com"
              className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-colors"
            >
              Connect via Email
            </a>
          </div>
        </div>
      </section>

      {/* ── Why My Workflow Beats a Degree ── */}
      <section id="expertise" className="py-24 px-6 border-y border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Why My Workflow Beats a Degree</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Bypassing gatekeepers with diagnostic precision and AI-augmented velocity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                ),
                title: "Master-Level Diagnostics",
                body: "10+ years of deep root-cause analysis from advanced automotive and technical systems, applied directly to complex software architecture. I solve hard problems others miss.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
                title: "AI Force Multiplier",
                body: "I don't just use AI — I architect with it. Using Cursor, Windsurf, and cloud infrastructure, I ship robust production-ready code with extreme velocity.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                ),
                title: "Shipped, Market-Ready Products",
                body: "I am a builder and founder. My focus is on live, fully functional cloud architecture — not theoretical code.",
              },
            ].map((card) => (
              <div key={card.title} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Shipped Projects</h2>
          <p className="text-slate-400">Real code. Real products. Real users.</p>
        </div>

        <div className="space-y-8">
          {/* ── SHY Flagship ── */}
          {projects.filter(p => p.flagship).map((p) => (
            <div key={p.name} className="relative grid md:grid-cols-5 gap-0 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="md:col-span-3 p-10 md:p-14 space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20 uppercase tracking-wider">
                    Flagship · {p.role}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{p.icon}</span>
                  <h3 className="text-5xl font-extrabold tracking-tight">{p.name}</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      {p.liveLabel}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Visual panel */}
              <div className="md:col-span-2 bg-slate-950 flex items-center justify-center relative overflow-hidden min-h-[280px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/5" />
                <div className="relative flex flex-col items-center gap-3">
                  <span className="text-8xl">{p.icon}</span>
                  <span className="text-2xl font-black tracking-widest text-white/20">{p.name}</span>
                </div>
              </div>
            </div>
          ))}

          {/* ── Other 3 Projects Grid ── */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => !p.flagship).map((p) => (
              <div key={p.name} className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 group">
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <h4 className="text-2xl font-bold">{p.name}</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-slate-800 text-slate-400 text-xs rounded-md border border-slate-700">{t}</span>
                  ))}
                </div>
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors group-hover:gap-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  View on GitHub
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional Coverage ── */}
      <section id="coverage" className="py-24 px-6 border-y border-blue-900/20 bg-blue-900/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">St. Louis Regional Coverage</h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Available for on-site, hybrid, or high-impact contract work across{" "}
            <span className="text-white font-semibold">St. Charles · St. Peters · O'Fallon · Arnold · Festus</span>{" "}
            and the greater St. Louis metropolitan area.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["St. Peters, MO", "St. Charles, MO", "O'Fallon, MO", "Arnold, MO", "Festus, MO", "Greater St. Louis"].map((city) => (
              <span key={city} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Footer ── */}
      <footer id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">Let's Ship It.</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Looking for a Senior Diagnostic Engineer and AI-Augmented Architect? My workflow delivers at a velocity that traditional teams can't match. Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@jonaheastin.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-slate-950 font-bold rounded-xl transition-all shadow-2xl shadow-white/10 hover:shadow-white/20"
            >
              Contact for Opportunities
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a
              href="https://github.com/shylovegarden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>&copy; {new Date().getFullYear()} Jonah Eastin · St. Peters, MO</div>
          <div className="text-xs text-slate-600">Senior Diagnostic Engineer · AI-Augmented Architect · St. Louis Metro</div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#guarantee", label: "Guarantee" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    icon: "◎",
    title: "System Consulting & Planning",
    desc: "I analyze your business needs, design the system architecture, and choose the right technology for your budget and goals — before writing a single line of code.",
    points: ["Requirements analysis", "System architecture design", "Timeline & budget estimation"],
  },
  {
    icon: "◇",
    title: "Websites & Web Applications",
    desc: "I build websites and web apps with Next.js for speed and SEO, PHP frameworks for specialized backend systems, or WordPress for sites your team can update yourselves.",
    points: ["Next.js — fast, SEO-friendly, scalable", "PHP frameworks — specialized backend systems", "WordPress — manage your own content"],
  },
  {
    icon: "▢",
    title: "Mobile Applications",
    desc: "I build iOS and Android apps from a single codebase using Flutter — cutting development time and long-term maintenance cost without compromising the user experience.",
    points: ["Flutter — iOS & Android from one codebase", "Connects to your existing APIs & backend", "Ongoing support & updates after launch"],
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Understand your goals, budget, and timeline right from the start" },
  { step: "02", title: "System Design", desc: "Design the architecture and choose the right stack for the job" },
  { step: "03", title: "Build", desc: "Develop in short cycles so you can see progress along the way" },
  { step: "04", title: "Test", desc: "Check functionality and security before going live" },
  { step: "05", title: "Launch & Support", desc: "Deploy with documentation, plus support after handover" },
];

const PROJECTS = [
  {
    name: "TUTORRUS",
    url: "https://online.tutorrusstudy.com/",
    category: "E-LEARNING / LMS",
    desc: "An online learning platform for a university entrance exam tutoring school, supporting courses, video lessons, and payments.",
  },
  {
    name: "THAC",
    url: "https://thac.or.th/th",
    category: "INSTITUTIONAL",
    desc: "Website for the Thailand Arbitration Center, with tools to search for arbitrators and calculate fees.",
  },
  {
    name: "Pink School of Finance",
    url: "https://www.pinkschools.com/",
    category: "EDU / FINANCE",
    desc: "Website for an online CFA exam prep school, built for finance professionals and executives.",
  },
  {
    name: "Dhipaya Group Holdings",
    url: "https://www.dhipayagroup.co.th/",
    category: "CORPORATE",
    desc: "Corporate website for a publicly listed insurance holding company on the Stock Exchange of Thailand.",
  },
  {
    name: "Bua Concrete",
    url: "https://buaconcrete.asiacement.co.th/",
    category: "E-COMMERCE",
    desc: "An online concrete ordering platform, with member accounts and a payment flow for project customers.",
  },
  {
    name: "CCC — Calories Credit Challenge",
    url: "https://ccc.mots.go.th/",
    category: "GOV.TECH",
    desc: "A nationwide exercise rewards platform under Thailand's Ministry of Tourism and Sports, with LINE login.",
  },
];

const BADGES = [
  { label: "Next.js", cls: "top-[6%] left-[2%]", anim: "float-a" },
  { label: "Flutter", cls: "top-[14%] right-[0%]", anim: "float-b" },
  { label: "WordPress", cls: "bottom-[18%] left-[-4%]", anim: "float-c" },
  { label: "PHP", cls: "bottom-[6%] right-[6%]", anim: "float-d" },
];

function StatusDot({ className = "" }) {
  return (
    <span className={`relative inline-flex h-2 w-2 ${className}`}>
      <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-mint text-mint" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
    </span>
  );
}

function Eyebrow({ children, tone = "signal" }) {
  const toneCls = tone === "mint" ? "text-mint bg-mint/10 border-mint/20" : "text-signal bg-signal/10 border-signal/20";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-widest ${toneCls}`}>
      {children}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("tossapon.ph@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-body text-ink overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-xl tracking-tight text-ink">
            <span className="flex h-10 w-10 items-center justify-center rounded-[18px] bg-gradient-to-br from-signal to-mint text-base font-bold text-white shadow-md shadow-signal/20">
              Ω
            </span>
            Ohm
            <span className="hidden font-mono text-[11px] font-normal text-muted sm:inline">/dev.systems</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-muted transition-colors hover:text-signal"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="https://line.me/ti/p/zERBmbhlRM"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-signal px-6 py-3 text-[14px] font-semibold text-white shadow-md shadow-signal/25 transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Chat on LINE
          </a>

          <button
            aria-label="Open menu"
            className="text-ink md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-muted hover:text-signal"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://line.me/ti/p/zERBmbhlRM"
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full bg-signal px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Chat on LINE
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="blob-field">
          <div className="blob h-[420px] w-[420px] bg-signal/20 -top-40 -left-32" />
          <div className="blob h-[380px] w-[380px] bg-mint/20 top-10 right-[-140px]" />
          <div className="blob h-[300px] w-[300px] bg-signal2/20 bottom-[-120px] left-[30%]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-28 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          {/* Left: copy */}
          <div>
            <Eyebrow>FULL-STACK DEVELOPER &amp; SYSTEM CONSULTANT</Eyebrow>

            <h1 className="mt-6 font-display text-4xl leading-[1.2] tracking-tight sm:text-5xl md:text-[3.4rem]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-signal to-mint bg-clip-text text-transparent">Ohm</span>
              <br />
              I build systems, websites,
              <br />
              and apps that actually work
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              I help businesses plan systems, and build websites, web
              applications, and mobile apps — from architecture design
              through to real-world deployment. Every project comes with
              a quality guarantee.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://line.me/ti/p/zERBmbhlRM"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-signal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-signal/30 transition-transform hover:-translate-y-0.5"
              >
                Chat on LINE
              </a>
              <a
                href="#work"
                className="rounded-full border border-slate-200 px-8 py-4 text-sm font-semibold text-ink transition-colors hover:border-signal/50 hover:text-signal"
              >
                View my work
              </a>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <div className="font-display text-2xl text-ink">6+</div>
                <div className="mt-1 text-[12px] text-muted">Projects delivered</div>
              </div>
              <div>
                <div className="font-display text-2xl text-ink">3</div>
                <div className="mt-1 text-[12px] text-muted">Core tech stacks</div>
              </div>
              <div>
                <div className="font-display text-2xl text-ink">100%</div>
                <div className="mt-1 text-[12px] text-muted">Quality guaranteed</div>
              </div>
            </div>
          </div>

          {/* Right: avatar / badge cluster */}
          <div className="relative mx-auto hidden h-[380px] w-[380px] md:block">
            <svg className="spin-slow absolute inset-0" viewBox="0 0 380 380" fill="none">
              <circle cx="190" cy="190" r="172" stroke="#C9DFF6" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" />
            </svg>

            <div className="absolute inset-[38px] flex items-center justify-center rounded-full bg-gradient-to-br from-signal/10 via-white to-mint/10 shadow-[0_30px_70px_-20px_rgba(37,99,235,0.35)]">
              <div className="flex h-[210px] w-[210px] items-center justify-center rounded-full bg-gradient-to-br from-signal to-mint font-display text-6xl font-bold text-white shadow-inner">
                Ω
              </div>
            </div>

            {BADGES.map((b) => (
              <div
                key={b.label}
                className={`soft-card absolute ${b.cls} ${b.anim} rounded-full px-5 py-2.5 text-[13px] font-semibold text-ink`}
              >
                {b.label}
              </div>
            ))}

            <div className="soft-card absolute bottom-[-6px] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold text-mint">
              <StatusDot />
              Available for new projects
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-slate-100 bg-panel/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>SERVICES</Eyebrow>
            <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
              Three core services covering everything from planning to delivery
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="soft-card flex flex-col rounded-[32px] p-8 transition-shadow">
                <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-signal/10 text-2xl text-signal">
                  {s.icon}
                </span>
                <h3 className="mt-5 font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-slate-100 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-16 max-w-2xl">
            <Eyebrow tone="mint">PROCESS</Eyebrow>
            <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
              A 5-stage process, from your idea to something real people can use
            </h2>
          </div>

          <div className="relative grid gap-10 sm:grid-cols-5 sm:gap-4">
            <div className="timeline-line absolute left-0 right-0 top-6 hidden h-[2px] sm:block" />
            {PROCESS.map((p) => (
              <div key={p.step} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-4 ring-white">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-signal to-mint font-display text-sm font-bold text-white">
                    {p.step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="border-t border-slate-100 bg-panel/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-signal to-mint p-8 text-white sm:p-12">
            <div className="blob-field opacity-40">
              <div className="blob h-[260px] w-[260px] bg-white/30 -top-24 right-10" />
            </div>
            <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-mono text-[11px] tracking-widest">
                  QUALITY GUARANTEE
                </span>
                <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
                  Every project comes with a quality guarantee
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                  Every project is tested before going live, and includes a
                  support period after delivery to fix any development-related
                  issues — at no extra cost, within the agreed timeframe from
                  the start of the project.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Tested before launch", "Bug fixes after delivery", "System documentation", "Ongoing consultation"].map((t) => (
                  <div key={t} className="rounded-[22px] bg-white/10 p-4 backdrop-blur">
                    <div className="text-xl">✓</div>
                    <div className="mt-1 text-[12px] text-white/90">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>WORK</Eyebrow>
              <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
                Past projects — still live and running today
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium text-muted">
              <StatusDot />
              {PROJECTS.length} systems currently live
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="soft-card group flex flex-col justify-between overflow-hidden rounded-[32px] transition-transform hover:-translate-y-1"
              >
                <div
                  className={`h-2 w-full bg-gradient-to-r ${
                    i % 2 === 0 ? "from-signal to-signal2" : "from-mint to-signal2"
                  }`}
                />
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-panel px-3 py-1 font-mono text-[11px] tracking-wider text-muted">
                        {p.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-mint">
                        <StatusDot />
                        LIVE
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg text-ink group-hover:text-signal">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-[13px] font-semibold text-signal">
                    Visit website
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-signal/10 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-t border-slate-100 bg-panel/50">
        <div className="blob-field">
          <div className="blob h-[320px] w-[320px] bg-signal/15 top-0 left-[-100px]" />
          <div className="blob h-[280px] w-[280px] bg-mint/15 bottom-0 right-[-80px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <Eyebrow tone="mint">CONTACT</Eyebrow>
            <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Reach out on LINE or email — quick replies, and an initial
              consultation is free.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto]">
            <a
              href="https://line.me/ti/p/zERBmbhlRM"
              target="_blank"
              rel="noreferrer"
              className="soft-card flex flex-col justify-between rounded-[32px] p-7 transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-mint/10 text-lg text-mint">
                  💬
                </span>
                <p className="mt-4 font-display text-lg text-ink">Chat on LINE</p>
                <p className="mt-2 text-[13px] text-muted">Fastest way to reach me, great for quick questions</p>
              </div>
              <span className="mt-6 text-[13px] font-semibold text-mint">line.me/ti/p/zERBmbhlRM →</span>
            </a>

            <button
              onClick={copyEmail}
              className="soft-card flex flex-col justify-between rounded-[32px] p-7 text-left transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-signal/10 text-lg text-signal">
                  ✉️
                </span>
                <p className="mt-4 font-display text-lg text-ink">tossapon.ph@gmail.com</p>
                <p className="mt-2 text-[13px] text-muted">Best for longer project details or sending files</p>
              </div>
              <span className="mt-6 text-[13px] font-semibold text-signal">
                {copied ? "Copied ✓" : "Click to copy email →"}
              </span>
            </button>

            <div className="soft-card flex flex-col items-center justify-center gap-3 rounded-[32px] p-7">
              <span className="font-mono text-[11px] tracking-wider text-muted">SCAN TO ADD LINE</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr-line.jpg"
                alt="QR code to add Ohm on LINE"
                className="h-36 w-36 rounded-[22px] border border-slate-100 bg-white p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-[13px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Ohm — Software Developer &amp; System Architect</span>
          <span className="flex items-center gap-2 font-medium text-mint">
            <StatusDot />
            Available for new projects
          </span>
        </div>
      </footer>
    </main>
  );
}

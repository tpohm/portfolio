"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#guarantee", label: "Guarantee" },
  { href: "#work", label: "Work" },
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

const PRICING = [
  {
    name: "Starter",
    price: "฿10,000",
    priceNote: "starting from",
    tagline: "A clean one-page site to get your business online fast.",
    bestFor: "Personal brand or small business quick presence",
    features: [
      "1-page responsive website",
      "Hero, About, Services & Contact sections",
      "Built with WordPress or a lightweight static site",
      "Fully responsive — mobile & tablet friendly",
      "1 round of revisions",
      "Delivered in ~7 days",
    ],
    highlighted: false,
    cta: "Choose Starter",
  },
  {
    name: "Business",
    price: "฿25,000",
    priceNote: "starting from",
    tagline: "A multi-page company website you can manage yourself.",
    bestFor: "Small businesses that need a proper company site",
    features: [
      "Up to 5 pages (Home, About, Services, Portfolio, Contact)",
      "WordPress CMS — edit content yourself",
      "Contact form + Google Maps integration",
      "Basic on-page SEO setup",
      "2 rounds of revisions",
      "Delivered in ~14 days",
    ],
    highlighted: true,
    cta: "Choose Business",
  },
  {
    name: "Pro",
    price: "฿60,000",
    priceNote: "starting from",
    tagline: "A custom web application built for real workflows.",
    bestFor: "Businesses that need logins, dashboards, or data",
    features: [
      "Custom-built with Next.js",
      "Admin dashboard & user authentication",
      "Database & API integration",
      "Performance & SEO optimized",
      "3 rounds of revisions",
      "30 days of support after launch",
    ],
    highlighted: false,
    cta: "Choose Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "scoped to your project",
    tagline: "Full system consulting for multi-platform products.",
    bestFor: "Organizations that need web + mobile + backend",
    features: [
      "System architecture consulting included",
      "Web app + mobile app (Flutter) as one product",
      "Dedicated project timeline & milestones",
      "Scalable backend infrastructure",
      "SLA-based ongoing support",
      "Timeline scoped to project",
    ],
    highlighted: false,
    cta: "Request a quote",
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
    type: "web",
    desc: "An online learning platform for a university entrance exam tutoring school, supporting courses, video lessons, and payments.",
  },
  {
    name: "THAC",
    url: "https://thac.or.th/th",
    category: "INSTITUTIONAL",
    type: "web",
    desc: "Website for the Thailand Arbitration Center, with tools to search for arbitrators and calculate fees.",
  },
  {
    name: "Pink School of Finance",
    url: "https://www.pinkschools.com/",
    category: "EDU / FINANCE",
    type: "web",
    desc: "Website for an online CFA exam prep school, built for finance professionals and executives.",
  },
  {
    name: "Dhipaya Group Holdings",
    url: "https://www.dhipayagroup.co.th/",
    category: "CORPORATE",
    type: "web",
    desc: "Corporate website for a publicly listed insurance holding company on the Stock Exchange of Thailand.",
  },
  {
    name: "Bua Concrete",
    url: "https://buaconcrete.asiacement.co.th/",
    category: "E-COMMERCE",
    type: "web",
    desc: "An online concrete ordering platform, with member accounts and a payment flow for project customers.",
  },
  {
    name: "CCC — Calories Credit Challenge",
    url: "https://ccc.mots.go.th/",
    category: "GOV.TECH",
    type: "web",
    desc: "A nationwide exercise rewards platform under Thailand's Ministry of Tourism and Sports, with LINE login.",
  },
  {
    name: "CCC Mobile App",
    url: "https://play.google.com/store/apps/details?id=th.go.mots.ccc&hl=th",
    category: "MOBILE APP",
    type: "app",
    desc: "Companion Android app for the CCC exercise rewards platform, with GPS activity tracking, a leaderboard, and Health Connect integration.",
  },
  {
    name: "Smart People Management",
    url: "https://play.google.com/store/apps/details?id=com.tmadigital.samitivej&hl=th",
    category: "MOBILE APP",
    type: "app",
    desc: "An HR management app built for Samitivej, covering clock in/out, employee self-service, and cloud-based people management.",
  },
  {
    name: "Bua Concrete App",
    url: "https://play.google.com/store/apps/details?id=th.co.asiacement.buaconcrete",
    category: "MOBILE APP",
    type: "app",
    desc: "Companion Android app for ordering concrete, tracking real-time delivery, in-app payment, and a loyalty points program.",
  },
  {
    name: "Brewline POS",
    url: "https://pos-prototype-tp.vercel.app/pos",
    category: "PROTOTYPE",
    type: "prototype",
    image: "/pos-prototype.jpg",
    desc: "An interactive coffee shop POS prototype — item customization (size, hot/iced/blended, extra shots, syrups, toppings, sweetness level) with a live order summary and checkout flow.",
  },
  {
    name: "QR Ordering",
    url: "https://qr-ordering-neon.vercel.app/",
    category: "PROTOTYPE",
    type: "prototype",
    image: "/qr-ordering.jpg",
    desc: "A dine-in QR ordering prototype for restaurants — customers browse the menu and order by table from their phone, while staff manage the menu, stock status, and tables from an admin dashboard.",
  },
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

/* A consistent "real-looking" website mockup shown inside every device frame.
   Built entirely from divs/gradients (no screenshots), sized per device tier
   so text stays crisp at laptop, tablet, and phone scale. */
const SITE_SIZE = {
  lg: {
    pad: "p-5",
    logoDot: "h-6 w-6 text-[11px]",
    wordmark: "text-[13px]",
    showNav: true,
    navGap: "gap-5",
    navText: "text-[11px]",
    navBtn: "text-[11px] px-4 py-2",
    heroPad: "p-6",
    headline: "text-[22px] leading-[1.15]",
    sub: "text-[11px] mt-2",
    cta: "text-[11px] px-5 py-2.5 mt-4",
    features: true,
    featureCols: "grid-cols-3",
    featureIcon: "h-5 w-5 text-[10px]",
  },
  md: {
    pad: "p-3",
    logoDot: "h-4 w-4 text-[7px]",
    wordmark: "text-[8px]",
    showNav: false,
    navGap: "",
    navText: "",
    navBtn: "text-[7px] px-2.5 py-1.5",
    heroPad: "p-3",
    headline: "text-[11px] leading-[1.2]",
    sub: "text-[6.5px] mt-1.5",
    cta: "text-[7px] px-3 py-1.5 mt-2.5",
    features: true,
    featureCols: "grid-cols-1",
    featureIcon: "h-3 w-3 text-[6px]",
  },
  sm: {
    pad: "p-2",
    logoDot: "h-3 w-3 text-[5px]",
    wordmark: "text-[6px]",
    showNav: false,
    navGap: "",
    navText: "",
    navBtn: "text-[5.5px] px-2 py-1",
    heroPad: "p-2.5",
    headline: "text-[8px] leading-[1.2]",
    sub: "text-[5px] mt-1",
    cta: "text-[5.5px] px-2.5 py-1 mt-2",
    features: false,
    featureCols: "",
    featureIcon: "",
  },
};

function MiniSite({ size = "lg" }) {
  const s = SITE_SIZE[size];
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className={`flex items-center justify-between ${s.pad}`}>
        <div className="flex items-center gap-1.5">
          <span
            className={`flex items-center justify-center rounded-full bg-gradient-to-br from-signal to-mint font-bold text-white ${s.logoDot}`}
          >
            Ω
          </span>
          <span className={`font-bold tracking-wide text-ink ${s.wordmark}`} style={{ fontFamily: "var(--font-display)" }}>
            OHM
          </span>
        </div>
        {s.showNav && (
          <div className={`flex items-center font-medium text-slate-400 ${s.navGap} ${s.navText}`}>
            <span>Work</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        )}
        <span className={`rounded-full bg-ink font-semibold text-white ${s.navBtn}`}>Start</span>
      </div>

      <div
        className={`relative mx-2 mb-2 flex flex-1 flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-[#0E2A47] via-[#17406B] to-[#1FBF8F] ${s.heroPad}`}
      >
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
        <div className="absolute right-3 top-3 h-10 w-10 rounded-2xl border-2 border-white/20" />
        <span className={`relative max-w-[75%] font-bold text-white ${s.headline}`} style={{ fontFamily: "var(--font-display)" }}>
          Build Your Brand Online.
        </span>
        <span className={`relative max-w-[65%] text-white/70 ${s.sub}`}>
          Websites &amp; apps designed to convert.
        </span>
        <span className={`relative w-fit rounded-full bg-white font-semibold text-ink ${s.cta}`}>Get Started →</span>
      </div>

      {s.features && (
        <div className={`grid gap-1.5 px-2 pb-2 ${s.featureCols}`}>
          {(s.featureCols === "grid-cols-3" ? [0, 1, 2] : [0]).map((i) => (
            <div key={i} className="flex items-center gap-1.5 rounded-xl border border-slate-100 p-1.5">
              <span className={`flex shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint ${s.featureIcon}`}>
                ✓
              </span>
              <span className="h-1 w-full rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DeviceShowcase() {
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl">
      <div className="blob-field">
        <div className="blob h-[260px] w-[260px] bg-signal/25 top-[10%] left-[6%]" />
        <div className="blob h-[220px] w-[220px] bg-mint/25 bottom-[0%] right-[8%]" />
      </div>

      {/* Laptop */}
      <div className="absolute left-1/2 top-0 z-10 w-[68%] -translate-x-1/2">
        <div className="overflow-hidden rounded-t-[10%] border-[3%] border-b-0 border-slate-800 bg-slate-800 shadow-[0_40px_80px_-20px_rgba(14,42,71,0.45)]">
          <div className="flex items-center gap-[3%] bg-slate-800 px-[4%] py-[3%]">
            <span className="h-[10px] w-[10px] rounded-full bg-red-400" />
            <span className="h-[10px] w-[10px] rounded-full bg-yellow-400" />
            <span className="h-[10px] w-[10px] rounded-full bg-green-400" />
          </div>
          <div className="aspect-[16/10] w-full">
            <MiniSite size="lg" />
          </div>
        </div>
        <div className="mx-auto h-[3%] w-full rounded-b-[6%] bg-gradient-to-b from-slate-700 to-slate-800" />
        <div className="mx-auto h-[2%] w-[36%] rounded-b-[40%] bg-slate-600" />
      </div>

      {/* Tablet */}
      <div className="absolute bottom-[2%] left-[0%] z-20 w-[26%] -rotate-6">
        <div className="overflow-hidden rounded-[14%] border-[6%] border-slate-800 bg-slate-800 shadow-[0_30px_60px_-15px_rgba(14,42,71,0.5)]">
          <div className="aspect-[3/4] w-full">
            <MiniSite size="md" />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-[-2%] right-[2%] z-20 w-[15%] rotate-6">
        <div className="overflow-hidden rounded-[16%] border-[8%] border-slate-800 bg-slate-800 shadow-[0_30px_60px_-15px_rgba(14,42,71,0.5)]">
          <div className="aspect-[9/19] w-full">
            <MiniSite size="sm" />
          </div>
        </div>
      </div>

      <div className="soft-card absolute left-[2%] top-[4%] z-30 flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold text-ink">
        <StatusDot />
        Fully responsive
      </div>
      <div className="soft-card absolute right-[4%] top-[16%] z-30 rounded-full px-4 py-2 text-[12px] font-semibold text-signal">
        Built with Next.js
      </div>
    </div>
  );
}

const TYPE_LABEL = {
  web: "Visit website",
  app: "View on Google Play",
  prototype: "View live prototype",
};

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

  const webCount = PROJECTS.filter((p) => p.type === "web").length;
  const appCount = PROJECTS.filter((p) => p.type === "app").length;
  const prototypeCount = PROJECTS.filter((p) => p.type === "prototype").length;

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

      {/* HERO — unified banner: copy + device showcase side by side */}
      <section id="top" className="relative overflow-hidden">
        <div className="blob-field">
          <div className="blob h-[420px] w-[420px] bg-signal/15 -top-40 -left-32" />
          <div className="blob h-[380px] w-[380px] bg-mint/15 top-10 right-[-140px]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[0.95fr_1.15fr] lg:gap-8">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Eyebrow>FULL-STACK DEVELOPER &amp; SYSTEM CONSULTANT</Eyebrow>
            </div>

            <h1 className="mx-auto mt-6 max-w-xl font-display text-4xl leading-[1.2] tracking-tight sm:text-5xl lg:mx-0 lg:text-[2.85rem]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-signal to-mint bg-clip-text text-transparent">Ohm</span>
              <br />
              I build systems, websites, and apps that actually work
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              I help businesses plan systems, and build websites, web
              applications, and mobile apps — from architecture design
              through to real-world deployment. Every project comes with
              a quality guarantee.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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

            <div className="mx-auto mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-slate-100 pt-8 lg:mx-0">
              <div>
                <div className="font-display text-2xl text-ink">11+</div>
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

          {/* Right: device showcase, part of the same banner */}
          <div className="float-banner">
            <DeviceShowcase />
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

      {/* PRICING */}
      <section id="pricing" className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <Eyebrow tone="mint">PRICING</Eyebrow>
            <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
              Website packages, starting from ฿10,000
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Four straightforward packages so you know exactly what you get.
              Need something in between? Message me and I&apos;ll scope it for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[32px] p-8 ${
                  tier.highlighted
                    ? "border-2 border-signal bg-gradient-to-b from-signal/5 to-white shadow-[0_30px_60px_-20px_rgba(37,99,235,0.35)]"
                    : "soft-card"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-signal px-4 py-1.5 text-[11px] font-semibold text-white shadow-md">
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-xl text-ink">{tier.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{tier.tagline}</p>

                <div className="mt-6">
                  <div className="font-display text-3xl text-ink">{tier.price}</div>
                  <div className="mt-1 text-[12px] text-muted">{tier.priceNote}</div>
                </div>

                <div className="mt-4 rounded-2xl bg-panel px-4 py-3 text-[12px] text-muted">
                  Best for: <span className="font-medium text-ink">{tier.bestFor}</span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-muted">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint/15 text-[10px] text-mint">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://line.me/ti/p/zERBmbhlRM"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    tier.highlighted
                      ? "bg-signal text-white shadow-md shadow-signal/30"
                      : "border border-slate-200 text-ink hover:border-signal/50 hover:text-signal"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[12px] text-muted">
            Prices exclude domain and hosting. Final quotes depend on the number of pages and features needed.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-slate-100 bg-panel/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>PROCESS</Eyebrow>
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
      <section id="guarantee" className="border-t border-slate-100">
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
      <section id="work" className="border-t border-slate-100 bg-panel/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>WORK</Eyebrow>
              <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
                Websites, apps, and prototypes — still live and running today
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium text-muted">
              <StatusDot />
              {webCount} websites · {appCount} apps · {prototypeCount} prototype{prototypeCount !== 1 ? "s" : ""}
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
                {p.image ? (
                  <div className="relative h-40 w-full overflow-hidden bg-panel">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${
                      i % 2 === 0 ? "from-signal to-signal2" : "from-mint to-signal2"
                    }`}
                  />
                )}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] tracking-wider ${
                          p.type === "app"
                            ? "bg-mint/10 text-mint"
                            : p.type === "prototype"
                            ? "bg-signal2/10 text-signal2"
                            : "bg-panel text-muted"
                        }`}
                      >
                        {p.type === "app" && "📱"} {p.category}
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
                    {TYPE_LABEL[p.type]}
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
      <section id="contact" className="relative overflow-hidden border-t border-slate-100">
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

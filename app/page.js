"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "บริการ" },
  { href: "#process", label: "ขั้นตอนทำงาน" },
  { href: "#work", label: "ผลงาน" },
  { href: "#guarantee", label: "การรับประกัน" },
  { href: "#contact", label: "ติดต่อ" },
];

const SERVICES = [
  {
    icon: "◎",
    title: "รับปรึกษาวางแผนระบบ",
    desc: "วิเคราะห์โจทย์ธุรกิจ ออกแบบสถาปัตยกรรมระบบ เลือกเทคโนโลยีให้เหมาะกับงบและเป้าหมาย ก่อนลงมือสร้างจริงแม้แต่บรรทัดเดียว",
    points: ["วิเคราะห์ requirement", "ออกแบบ system architecture", "ประเมินระยะเวลาและงบประมาณ"],
  },
  {
    icon: "◇",
    title: "เว็บไซต์ & เว็บแอปพลิเคชัน",
    desc: "พัฒนาเว็บไซต์และเว็บแอปด้วย Next.js สำหรับงานที่ต้องการความเร็วและ SEO, PHP framework สำหรับระบบหลังบ้านเฉพาะทาง หรือ WordPress สำหรับเว็บที่ทีมคุณต้องอัปเดตเนื้อหาเอง",
    points: ["Next.js — เร็ว, SEO ดี, สเกลง่าย", "PHP framework — ระบบหลังบ้านเฉพาะทาง", "WordPress — จัดการเนื้อหาเองได้"],
  },
  {
    icon: "▢",
    title: "แอปพลิเคชันมือถือ",
    desc: "สร้างแอป iOS และ Android จาก codebase เดียวด้วย Flutter ลดเวลาพัฒนา ลดต้นทุนดูแลระยะยาว โดยไม่ลดทอนประสบการณ์การใช้งาน",
    points: ["Flutter — iOS และ Android จากโค้ดเดียว", "เชื่อมต่อ API และระบบหลังบ้านเดิมได้", "ดูแลและอัปเดตต่อเนื่องหลังส่งมอบ"],
  },
];

const PROCESS = [
  { step: "01", title: "รับฟังโจทย์", desc: "คุยเป้าหมาย งบประมาณ และ timeline ให้ชัดตั้งแต่ต้น" },
  { step: "02", title: "วางแผนระบบ", desc: "ออกแบบ architecture และเลือกสแต็กที่เหมาะกับงาน" },
  { step: "03", title: "พัฒนา", desc: "ลงมือสร้างเป็นรอบสั้น ๆ ให้เห็นความคืบหน้าตลอดทาง" },
  { step: "04", title: "ทดสอบ", desc: "ตรวจสอบการทำงานและความปลอดภัยก่อนใช้งานจริง" },
  { step: "05", title: "ส่งมอบ & ดูแลต่อ", desc: "ขึ้นระบบจริงพร้อมคู่มือ และซัพพอร์ตหลังส่งมอบ" },
];

const PROJECTS = [
  {
    name: "TUTORRUS",
    url: "https://online.tutorrusstudy.com/",
    category: "E-LEARNING / LMS",
    desc: "แพลตฟอร์มเรียนออนไลน์สำหรับสถาบันติวสอบเข้ามหาวิทยาลัย รองรับคอร์สเรียน วิดีโอ และระบบชำระเงิน",
  },
  {
    name: "THAC",
    url: "https://thac.or.th/th",
    category: "INSTITUTIONAL",
    desc: "เว็บไซต์สถาบันอนุญาโตตุลาการไทย พร้อมเครื่องมือค้นหาผู้ประนอมข้อพิพาทและคำนวณค่าธรรมเนียม",
  },
  {
    name: "Pink School of Finance",
    url: "https://www.pinkschools.com/",
    category: "EDU / FINANCE",
    desc: "เว็บไซต์สถาบันติวสอบ CFA ออนไลน์ สำหรับผู้บริหารและบุคลากรสายการเงิน",
  },
  {
    name: "Dhipaya Group Holdings",
    url: "https://www.dhipayagroup.co.th/",
    category: "CORPORATE",
    desc: "เว็บไซต์องค์กรของบริษัทโฮลดิ้งด้านประกันภัยที่จดทะเบียนในตลาดหลักทรัพย์แห่งประเทศไทย",
  },
  {
    name: "บัวคอนกรีต",
    url: "https://buaconcrete.asiacement.co.th/",
    category: "E-COMMERCE",
    desc: "ระบบสั่งซื้อคอนกรีตออนไลน์ พร้อมระบบสมาชิกและขั้นตอนการชำระเงินสำหรับลูกค้าโครงการ",
  },
  {
    name: "CCC — Calories Credit Challenge",
    url: "https://ccc.mots.go.th/",
    category: "GOV.TECH",
    desc: "แพลตฟอร์มสะสมแต้มออกกำลังกายระดับประเทศ ภายใต้กระทรวงการท่องเที่ยวและกีฬา พร้อมระบบเข้าสู่ระบบผ่าน LINE",
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
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-widest ${toneCls}`}>
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
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-signal to-mint text-sm font-bold text-white shadow-md shadow-signal/20">
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
            className="hidden rounded-full bg-signal px-5 py-2.5 text-[14px] font-semibold text-white shadow-md shadow-signal/25 transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            คุยผ่าน LINE
          </a>

          <button
            aria-label="เปิดเมนู"
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
                className="mt-2 rounded-full bg-signal px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                คุยผ่าน LINE
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

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-[3.4rem]">
              สวัสดีครับ ผม{" "}
              <span className="bg-gradient-to-r from-signal to-mint bg-clip-text text-transparent">Ohm</span>
              <br />
              รับวางระบบ สร้างเว็บ และแอป
              <br />
              ที่พร้อมใช้งานจริง
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              รับปรึกษาวางแผนระบบ พัฒนาเว็บไซต์ เว็บแอปพลิเคชัน และแอปมือถือ
              ให้ธุรกิจ ตั้งแต่ขั้นตอนออกแบบสถาปัตยกรรมไปจนถึงส่งมอบใช้งานจริง
              พร้อมรับประกันคุณภาพทุกงาน
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://line.me/ti/p/zERBmbhlRM"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-signal/30 transition-transform hover:-translate-y-0.5"
              >
                ปรึกษาโปรเจกต์ทาง LINE
              </a>
              <a
                href="#work"
                className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-signal/50 hover:text-signal"
              >
                ดูผลงานที่ผ่านมา
              </a>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <div className="font-display text-2xl font-bold text-ink">6+</div>
                <div className="mt-1 text-[12px] text-muted">โปรเจกต์ที่ส่งมอบแล้ว</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-ink">3</div>
                <div className="mt-1 text-[12px] text-muted">สแต็กเทคโนโลยีหลัก</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-ink">100%</div>
                <div className="mt-1 text-[12px] text-muted">รับประกันคุณภาพ</div>
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
                className={`soft-card absolute ${b.cls} ${b.anim} rounded-full px-4 py-2 text-[13px] font-semibold text-ink`}
              >
                {b.label}
              </div>
            ))}

            <div className="soft-card absolute bottom-[-6px] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold text-mint">
              <StatusDot />
              พร้อมรับงานใหม่
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-slate-100 bg-panel/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>SERVICES</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              สามบริการหลักที่ครอบคลุมงานตั้งแต่คิดจนถึงส่งมอบ
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="soft-card flex flex-col rounded-3xl p-7 transition-shadow">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/10 text-2xl text-signal">
                  {s.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h3>
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
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              ขั้นตอนทำงาน 5 ช่วง จากโจทย์ถึงของจริงที่ใช้งานได้
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
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="border-t border-slate-100 bg-panel/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-signal to-mint p-8 text-white sm:p-12">
            <div className="blob-field opacity-40">
              <div className="blob h-[260px] w-[260px] bg-white/30 -top-24 right-10" />
            </div>
            <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[11px] tracking-widest">
                  QUALITY GUARANTEE
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  รับประกันคุณภาพทุกงานที่ส่งมอบ
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                  ทุกโปรเจกต์ผ่านการทดสอบก่อนขึ้นระบบจริง และมีช่วงดูแลหลังส่งมอบ
                  เพื่อแก้ไขข้อผิดพลาดที่เกิดจากการพัฒนา โดยไม่มีค่าใช้จ่ายเพิ่มเติม
                  ในระยะเวลาที่ตกลงกันไว้ตั้งแต่ต้นโครงการ
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["ทดสอบก่อนส่งมอบ", "แก้ไขบั๊กหลังส่งมอบ", "คู่มือใช้งานระบบ", "ให้คำปรึกษาต่อเนื่อง"].map((t) => (
                  <div key={t} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
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
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                ผลงานที่ผ่านมา ยังทำงานอยู่จริงวันนี้
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium text-muted">
              <StatusDot />
              {PROJECTS.length} ระบบที่ยังใช้งานอยู่
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="soft-card group flex flex-col justify-between overflow-hidden rounded-3xl transition-transform hover:-translate-y-1"
              >
                <div
                  className={`h-2 w-full bg-gradient-to-r ${
                    i % 2 === 0 ? "from-signal to-signal2" : "from-mint to-signal2"
                  }`}
                />
                <div className="flex flex-1 flex-col justify-between p-6">
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
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink group-hover:text-signal">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-[13px] font-semibold text-signal">
                    เยี่ยมชมเว็บไซต์
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
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              เริ่มคุยโปรเจกต์ของคุณได้เลย
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              ทักมาคุยรายละเอียดงานได้ทั้งทาง LINE หรืออีเมล ตอบกลับไวและปรึกษาได้ฟรีในเบื้องต้น
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto]">
            <a
              href="https://line.me/ti/p/zERBmbhlRM"
              target="_blank"
              rel="noreferrer"
              className="soft-card flex flex-col justify-between rounded-3xl p-7 transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/10 text-lg text-mint">
                  💬
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-ink">คุยผ่าน LINE</p>
                <p className="mt-2 text-[13px] text-muted">ตอบกลับเร็วที่สุด เหมาะกับคำถามเร่งด่วน</p>
              </div>
              <span className="mt-6 text-[13px] font-semibold text-mint">line.me/ti/p/zERBmbhlRM →</span>
            </a>

            <button
              onClick={copyEmail}
              className="soft-card flex flex-col justify-between rounded-3xl p-7 text-left transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-signal/10 text-lg text-signal">
                  ✉️
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-ink">tossapon.ph@gmail.com</p>
                <p className="mt-2 text-[13px] text-muted">เหมาะกับรายละเอียดงานยาว ๆ หรือส่งไฟล์</p>
              </div>
              <span className="mt-6 text-[13px] font-semibold text-signal">
                {copied ? "คัดลอกแล้ว ✓" : "คลิกเพื่อคัดลอกอีเมล →"}
              </span>
            </button>

            <div className="soft-card flex flex-col items-center justify-center gap-3 rounded-3xl p-7">
              <span className="font-mono text-[11px] tracking-wider text-muted">SCAN TO ADD LINE</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr-line.jpg"
                alt="QR code สำหรับเพิ่มเพื่อน LINE ของ Ohm"
                className="h-36 w-36 rounded-2xl border border-slate-100 bg-white p-2"
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
            พร้อมรับงานใหม่
          </span>
        </div>
      </footer>
    </main>
  );
}

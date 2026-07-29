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
    tag: "MOD.01 — CONSULTING",
    title: "รับปรึกษาวางแผนระบบ",
    desc: "วิเคราะห์โจทย์ธุรกิจ ออกแบบสถาปัตยกรรมระบบ เลือกเทคโนโลยีให้เหมาะกับงบและเป้าหมาย ก่อนลงมือสร้างจริงแม้แต่บรรทัดเดียว",
    points: ["วิเคราะห์ requirement", "ออกแบบ system architecture", "ประเมินระยะเวลาและงบประมาณ"],
  },
  {
    tag: "MOD.02 — WEB",
    title: "เว็บไซต์ & เว็บแอปพลิเคชัน",
    desc: "พัฒนาเว็บไซต์และเว็บแอปด้วย Next.js สำหรับงานที่ต้องการความเร็วและ SEO, PHP framework สำหรับระบบหลังบ้านเฉพาะทาง หรือ WordPress สำหรับเว็บที่ทีมคุณต้องอัปเดตเนื้อหาเอง",
    points: ["Next.js — เร็ว, SEO ดี, สเกลง่าย", "PHP framework — ระบบหลังบ้านเฉพาะทาง", "WordPress — จัดการเนื้อหาเองได้"],
  },
  {
    tag: "MOD.03 — MOBILE",
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

function StatusDot({ className = "" }) {
  return (
    <span className={`relative inline-flex h-2 w-2 ${className}`}>
      <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-online text-online" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-online" />
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
    <main className="min-h-screen bg-base font-body text-ink overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-grid/60 bg-base/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-signal/50 bg-panel text-signal font-mono text-sm">
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
                className="font-mono text-[13px] text-muted transition-colors hover:text-signal"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="https://line.me/ti/p/zERBmbhlRM"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-sm border border-signal/40 bg-signal/10 px-4 py-2 font-mono text-[13px] text-signal transition-colors hover:bg-signal/20 md:inline-block"
          >
            คุยผ่าน LINE →
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
          <div className="border-t border-grid/60 bg-base px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-muted hover:text-signal"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://line.me/ti/p/zERBmbhlRM"
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-sm border border-signal/40 bg-signal/10 px-4 py-2 text-center font-mono text-sm text-signal"
              >
                คุยผ่าน LINE →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="bp-grid relative border-b border-grid/60">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-grid bg-panel px-3 py-1 font-mono text-[11px] tracking-wider text-muted">
            <StatusDot />
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.15] tracking-tight text-glow sm:text-5xl md:text-6xl">
            วางระบบให้คิดมาแล้ว
            <br />
            ก่อนเขียนโค้ดบรรทัดแรก
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Ohm รับปรึกษาวางแผนระบบ พัฒนาเว็บไซต์ เว็บแอปพลิเคชัน และแอปมือถือ
            ให้ธุรกิจ ตั้งแต่ขั้นตอนออกแบบสถาปัตยกรรมไปจนถึงส่งมอบใช้งานจริง
            พร้อมรับประกันคุณภาพทุกงาน
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://line.me/ti/p/zERBmbhlRM"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-signal px-6 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              ปรึกษาโปรเจกต์ทาง LINE
            </a>
            <a
              href="#work"
              className="rounded-sm border border-grid px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-signal/60 hover:text-signal"
            >
              ดูผลงานที่ผ่านมา
            </a>
          </div>

          {/* mini schematic pipeline */}
          <div className="mt-20 hidden items-center gap-0 font-mono text-[11px] text-muted md:flex">
            {["CONSULT", "DESIGN", "BUILD", "TEST", "DEPLOY"].map((s, i) => (
              <div key={s} className="flex items-center">
                <span className="rounded-sm border border-grid bg-panel px-3 py-1.5">{s}</span>
                {i < 4 && <span className="dotted-line mx-2 h-px w-10 opacity-70" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-grid/60 bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-signal">SERVICES</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              สามโมดูลหลักที่ครอบคลุมงานตั้งแต่คิดจนถึงส่งมอบ
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="bp-panel flex flex-col rounded-sm p-6">
                <span className="font-mono text-[11px] tracking-wider text-signal">{s.tag}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-grid pt-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 font-mono text-[12px] text-muted">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal" />
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
      <section id="process" className="border-b border-grid/60">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-signal">PROCESS</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              ขั้นตอนทำงาน 5 ช่วง จากโจทย์ถึงของจริงที่ใช้งานได้
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-grid bg-grid sm:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-base p-6">
                <span className="font-mono text-2xl font-semibold text-signal/70">{p.step}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="border-b border-grid/60 bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="bp-panel grid gap-10 rounded-sm p-8 sm:p-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-mono text-xs tracking-widest text-mint">QUALITY GUARANTEE</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                รับประกันคุณภาพทุกงานที่ส่งมอบ
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                ทุกโปรเจกต์ผ่านการทดสอบก่อนขึ้นระบบจริง และมีช่วงดูแลหลังส่งมอบ
                เพื่อแก้ไขข้อผิดพลาดที่เกิดจากการพัฒนา โดยไม่มีค่าใช้จ่ายเพิ่มเติม
                ในระยะเวลาที่ตกลงกันไว้ตั้งแต่ต้นโครงการ
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
              <div className="rounded-sm border border-grid bg-base p-4">
                <div className="text-2xl font-semibold text-online">✓</div>
                <div className="mt-1 text-[12px] text-muted">ทดสอบก่อนส่งมอบ</div>
              </div>
              <div className="rounded-sm border border-grid bg-base p-4">
                <div className="text-2xl font-semibold text-online">✓</div>
                <div className="mt-1 text-[12px] text-muted">แก้ไขบั๊กหลังส่งมอบ</div>
              </div>
              <div className="rounded-sm border border-grid bg-base p-4">
                <div className="text-2xl font-semibold text-online">✓</div>
                <div className="mt-1 text-[12px] text-muted">คู่มือใช้งานระบบ</div>
              </div>
              <div className="rounded-sm border border-grid bg-base p-4">
                <div className="text-2xl font-semibold text-online">✓</div>
                <div className="mt-1 text-[12px] text-muted">ให้คำปรึกษาต่อเนื่อง</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK — status board */}
      <section id="work" className="border-b border-grid/60">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="font-mono text-xs tracking-widest text-signal">WORK — LIVE SYSTEMS</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                ผลงานที่ผ่านมา ยังทำงานอยู่จริงวันนี้
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-[12px] text-muted">
              <StatusDot />
              {PROJECTS.length} SYSTEMS ONLINE
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-sm border border-grid bg-panel p-5 transition-colors hover:border-signal/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-wider text-muted">{p.category}</span>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-online">
                      <StatusDot />
                      LIVE
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink group-hover:text-signal">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 border-t border-grid pt-3 font-mono text-[12px] text-signal">
                  เยี่ยมชมเว็บไซต์
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bp-grid">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-signal">CONTACT</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
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
              className="bp-panel flex flex-col justify-between rounded-sm p-6 transition-colors hover:border-signal/50"
            >
              <div>
                <span className="font-mono text-[11px] tracking-wider text-signal">CHANNEL / LINE</span>
                <p className="mt-3 font-display text-lg font-semibold text-ink">คุยผ่าน LINE</p>
                <p className="mt-2 text-[13px] text-muted">ตอบกลับเร็วที่สุด เหมาะกับคำถามเร่งด่วน</p>
              </div>
              <span className="mt-6 font-mono text-[12px] text-signal">line.me/ti/p/zERBmbhlRM →</span>
            </a>

            <button
              onClick={copyEmail}
              className="bp-panel flex flex-col justify-between rounded-sm p-6 text-left transition-colors hover:border-signal/50"
            >
              <div>
                <span className="font-mono text-[11px] tracking-wider text-signal">CHANNEL / EMAIL</span>
                <p className="mt-3 font-display text-lg font-semibold text-ink">tossapon.ph@gmail.com</p>
                <p className="mt-2 text-[13px] text-muted">เหมาะกับรายละเอียดงานยาว ๆ หรือส่งไฟล์</p>
              </div>
              <span className="mt-6 font-mono text-[12px] text-signal">
                {copied ? "คัดลอกแล้ว ✓" : "คลิกเพื่อคัดลอกอีเมล →"}
              </span>
            </button>

            <div className="bp-panel flex flex-col items-center justify-center gap-3 rounded-sm p-6">
              <span className="font-mono text-[11px] tracking-wider text-signal">SCAN TO ADD LINE</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr-line.jpg"
                alt="QR code สำหรับเพิ่มเพื่อน LINE ของ Ohm"
                className="h-36 w-36 rounded-sm border border-grid bg-white p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-grid/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[12px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Ohm — Software Developer & System Architect</span>
          <span className="flex items-center gap-2">
            <StatusDot />
            SYSTEM STATUS: OPERATIONAL
          </span>
        </div>
      </footer>
    </main>
  );
}

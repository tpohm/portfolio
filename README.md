# Ohm Portfolio

เว็บไซต์ portfolio สำหรับนำเสนอบริการ (ที่ปรึกษาระบบ, เว็บไซต์/เว็บแอปด้วย Next.js/PHP/WordPress, แอปมือถือด้วย Flutter)
สร้างด้วย **Next.js 14 (App Router)** + **Tailwind CSS**

## รันทดสอบในเครื่องตัวเอง

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## แก้ไขเนื้อหา

- ข้อมูลบริการ / ขั้นตอนทำงาน / ผลงาน / โปรเจกต์ → แก้ในไฟล์ `app/page.js` (ค่าคงที่ SERVICES, PROCESS, PROJECTS ด้านบนไฟล์)
- สีและฟอนต์ → แก้ในไฟล์ `tailwind.config.js` และ `app/globals.css`
- QR code LINE → แทนที่ไฟล์ `public/qr-line.jpg`
- อีเมล/ลิงก์ LINE → ค้นหาคำว่า `tossapon.ph@gmail.com` และ `line.me/ti/p/zERBmbhlRM` ในไฟล์ `app/page.js` แล้วแก้เป็นของคุณ

## Deploy ขึ้น GitHub + Vercel

ดูขั้นตอนแบบละเอียดในข้อความที่ Claude สรุปให้ หรือสรุปสั้น ๆ:

1. สร้าง repo บน GitHub แล้ว push โค้ดนี้ขึ้นไป
2. เข้า https://vercel.com → New Project → Import repo จาก GitHub
3. ปล่อยค่า default ทั้งหมด (Vercel รู้จัก Next.js อัตโนมัติ) → กด Deploy
4. ได้ลิงก์ `https://ชื่อโปรเจกต์.vercel.app` ใช้พรีเซนต์ลูกค้าได้ทันที

import "./globals.css";

export const metadata = {
  title: "Ohm — Software Developer & System Architect",
  description:
    "รับปรึกษาวางแผนระบบ พัฒนาเว็บไซต์และเว็บแอปพลิเคชันด้วย Next.js, PHP, WordPress และแอปมือถือด้วย Flutter พร้อมรับประกันคุณภาพ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}

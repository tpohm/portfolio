import "./globals.css";

export const metadata = {
  title: "Ohm — Software Developer & System Architect",
  description:
    "System consulting and planning, website and web application development with Next.js, PHP, and WordPress, and mobile apps with Flutter — every project backed by a quality guarantee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Itim&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}

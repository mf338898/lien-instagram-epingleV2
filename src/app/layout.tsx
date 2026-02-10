import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Marketing Dojo",
  description: "Masterfully create content that grows your following and business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-[#0d0614] text-[#ededed]"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

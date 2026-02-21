import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Matthis Foveau | Immobilier & Investissement en Finistère",
  description:
    "Ne vendez pas au hasard. Estimation offerte, stratégie de vente en 5 étapes et méthode 'Carré de la Rentabilité'. Votre expert immobilier à Quimper, Brest et dans le Finistère.",
  keywords: [
    "Immobilier Finistère",
    "Matthis Foveau",
    "Estimation Quimper",
    "Investissement locatif",
    "Vente maison Brest",
    "Formation immobilier",
  ],
  icons: {
    icon: "/ALVLOGOV2.svg",
  },
  openGraph: {
    title: "Matthis Foveau | L'Immobilier autrement",
    description:
      "Sécurisez vos transactions et maximisez votre net vendeur. Découvrez une méthode éprouvée.",
    url: "https://site-immo-finistere.vercel.app/",
    siteName: "Matthis Foveau Immo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased bg-white text-slate-900 font-sans leading-relaxed">
        {children}
        <Script
          src="https://expert.jestimo.com/widget-jwt/11bS969998ccc10509Xy547671v7P111"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}

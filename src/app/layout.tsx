import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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

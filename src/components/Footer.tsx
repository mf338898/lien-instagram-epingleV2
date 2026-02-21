import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Accueil", href: "#hero" },
  { label: "La Méthode", href: "#roadmap" },
  { label: "Honoraires", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Estimation", href: "#estimation" },
  { label: "Mon Univers", href: "#about" },
];

const SOCIAL_ICONS = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center border-t border-slate-200 bg-white px-4 py-16 md:py-20">
      <p className="text-center text-xl font-bold text-slate-900 md:text-2xl">
        Prêt à concrétiser votre projet ?
      </p>
      <Link
        href="https://www.alvimmobilier.bzh/catalog/contact_us.php?form=1"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
      >
        Me contacter
      </Link>

      <div className="mb-4 mt-14 flex justify-center">
        <Image
          src="/ALVLOGOV2.svg"
          alt="ALV Immobilier"
          width={80}
          height={80}
          className="h-16 w-16 object-contain md:h-20 md:w-20"
        />
      </div>
      <p className="text-center text-sm font-medium text-slate-900">
        Matthis Foveau - ALV Immobilier
      </p>
      <p className="mb-10 mt-1 text-center text-sm text-slate-500">
        📍 Pleyben - Brest - Finistère
      </p>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {FOOTER_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-10 mt-8 flex items-center justify-center gap-6">
        {SOCIAL_ICONS.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-slate-900"
            aria-label={label}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-slate-500">
        © 2026 Matthis Foveau. Tous droits réservés.
      </p>
    </footer>
  );
}

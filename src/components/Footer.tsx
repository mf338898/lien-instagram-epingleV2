import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Accueil", href: "#hero" },
  { label: "La Méthode", href: "#roadmap" },
  { label: "Honoraires", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Formation", href: "#waitlist" },
  { label: "Mon Univers", href: "#about" },
];

const SOCIAL_ICONS = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer
      className="flex flex-col items-center px-4 py-16 md:py-20"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <p className="text-center text-xl font-bold text-white md:text-2xl">
        Prêt à concrétiser votre projet ?
      </p>
      <Link
        href="https://www.alvimmobilier.bzh/catalog/contact_us.php?form=1"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 rounded-full bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-purple-600 px-8 py-3.5 text-lg font-bold text-white transition-opacity hover:opacity-90"
      >
        Me contacter
      </Link>

      <div className="mb-4 mt-14 flex justify-center">
        <Image
          src="/ALV.svg"
          alt="ALV Immobilier"
          width={80}
          height={80}
          className="h-16 w-16 object-contain md:h-20 md:w-20"
        />
      </div>
      <p className="text-center text-sm font-medium text-white">
        Matthis Foveau - ALV Immobilier
      </p>
      <p className="mb-10 mt-1 text-center text-sm text-slate-400">
        📍 Pleyben - Brest - Finistère
      </p>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {FOOTER_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-white transition-colors hover:text-white/80 hover:underline"
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
            className="text-white transition-opacity hover:opacity-70"
            aria-label={label}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500">
        © 2026 Matthis Foveau. Tous droits réservés.
      </p>
    </footer>
  );
}

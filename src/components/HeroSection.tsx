import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Accueil", href: "#hero" },
  { label: "La Méthode", href: "#roadmap" },
  { label: "Honoraires", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Formation", href: "#waitlist" },
  { label: "Mon Univers", href: "#about" },
];

/** Image hero (colonne droite) : img natif pour garder le fond transparent (pas Next/Image). */
const HERO_IMAGE_SRC = "/mon-image.svg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen lg:min-h-0 bg-[radial-gradient(ellipse_at_center,_var(--hero-center)_0%,_var(--hero-edge)_70%)] px-4 pb-16 pt-6 md:px-6 md:pb-20 lg:px-8"
      style={{ backgroundAttachment: "scroll" }}
    >
      {/* Navbar */}
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="#" className="relative z-10 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ALV.svg"
            alt="ALV Immobilier"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-contain"
          />
        </Link>
        <nav
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:px-6 sm:py-3"
          aria-label="Main navigation"
        >
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm text-white sm:gap-4 sm:text-base">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-white/80 transition-colors whitespace-nowrap"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main: two columns */}
      <div className="mx-auto grid max-w-7xl gap-10 pt-12 lg:min-h-[80vh] lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-16">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2">
            <Sparkles className="h-4 w-4 text-white/90" aria-hidden />
            <span className="text-sm text-white/90">
              ✨ Conseiller Immobilier & Investisseur
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Estimation immobilière en{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837]"
            >
              Finistère
            </span>
          </h1>
          <p className="max-w-lg text-lg text-slate-300 sm:text-xl">
            Autour de Pleyben & Brest. Recevez un avis de valeur fiable basé sur{" "}
            <span className="font-semibold text-white">
              20 ans d&apos;expertise terrain
            </span>
            . Réponse sous 24h ouvrées.
          </p>
          {/* CTA block: Row 1 (logo + button), Row 2 (agency text) */}
          <div className="flex w-full flex-col gap-3">
            {/* Row 1: ALV logo + CTA button */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="https://www.alvimmobilier.bzh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/alv-immobilier-cover.svg"
                  alt="ALV Immobilier"
                  width={192}
                  height={77}
                  className="h-[4.8rem] w-48 object-contain"
                />
              </a>
              <Link
                href="https://www.alvimmobilier.bzh/catalog/contact_us.php?form=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_var(--btn-glow)] transition-opacity hover:opacity-95 bg-gradient-to-r from-[var(--btn-gradient-from)] to-[var(--btn-gradient-to)]"
              >
                Estimer mon bien (Gratuit)
              </Link>
            </div>

            {/* Row 2: Agency text, clickable to ALV site */}
            <a
              href="https://www.alvimmobilier.bzh/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-left text-sm text-slate-300 transition-colors hover:text-white/90"
            >
              <p className="text-[1.225rem] font-semibold text-white/90">
                Agence familiale & locale – ALV Immobilier
              </p>
              <p className="text-[1.05rem] italic text-slate-400">
                À vos côtés, depuis plus de 20 ans
              </p>
            </a>

            {/* Client testimonial */}
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <span className="flex text-amber-400" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </span>
              <p className="italic text-slate-400">
                &quot;Réactivité, professionnalisme et écoute. Une vente réalisée sereinement grâce à toute l&apos;équipe ALV.&quot;
              </p>
              <p className="font-semibold text-slate-300">
                – Famille Le Gall (Avis Google Vérifié)
              </p>
            </div>
          </div>
        </div>

        {/* Right column: image + gradient shape — background stops at ~shoulder, person pops out above */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-xl lg:left-1/4 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-3/4 lg:blur-2xl"
            aria-hidden
          />
          {/* Main right container: fixed height for anchoring, no overflow so person can extend above */}
          <div className="relative z-10 h-[400px] w-full max-w-md sm:h-[480px] lg:h-[600px] lg:max-w-lg">
            {/* Background shape: bottom-anchored, partial height, rounded and clipped */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-[50%] overflow-hidden rounded-[40px]">
              <Image
                src="/hero-shape-bg.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Person photo: full height, bottom-aligned, on top; no overflow clip so head extends above background */}
            <div className="absolute bottom-0 left-0 right-0 flex h-full justify-center items-end z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMAGE_SRC}
                alt="Matthis Foveau - Conseiller immobilier"
                width={400}
                height={600}
                className="max-h-full w-auto object-contain object-bottom"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

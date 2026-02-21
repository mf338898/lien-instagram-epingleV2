"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";
import { useJestimonlineModal } from "@/contexts/JestimonlineModalContext";

const NAV_LINKS: { label: string; href: string | null }[] = [
  { label: "Accueil", href: "#hero" },
  { label: "La Méthode", href: "#roadmap" },
  { label: "Honoraires", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Estimation", href: null },
  { label: "Mon Univers", href: "#about" },
];

/** Image hero (colonne droite) : img natif pour garder le fond transparent (pas Next/Image). */
const HERO_IMAGE_SRC = "/mon-image.svg";

export function HeroSection() {
  const { openModal } = useJestimonlineModal();

  return (
    <>
      {/* Navbar - fixed, design reference style */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md transition-all duration-300"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="#" className="relative z-10 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ALVLOGOV2.svg"
              alt="ALV Immobilier"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-contain"
            />
          </Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                {href ? (
                  <Link
                    href={href}
                    className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={openModal}
                    className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          {/* Mobile: simplified nav pill */}
          <div className="flex lg:hidden">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
              {NAV_LINKS.slice(0, 3).map(({ label, href }) =>
                href ? (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {label}
                  </Link>
                ) : (
                  <button
                    key={label}
                    type="button"
                    onClick={openModal}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-white px-4 pb-20 pt-32 md:px-6 lg:px-8 lg:pb-32 lg:pt-40"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[80vh] lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2">
              <Sparkles className="h-4 w-4 text-slate-600" aria-hidden />
              <span className="text-sm font-medium text-slate-600">
                ✨ Conseiller Immobilier & Investisseur
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Estimation immobilière en{" "}
              <span className="text-slate-500">Finistère</span>
            </h1>
            <p className="max-w-lg text-lg text-slate-600 sm:text-xl">
              Autour de Pleyben & Brest. Recevez un avis de valeur fiable basé sur{" "}
              <span className="font-semibold text-slate-900">
                20 ans d&apos;expertise terrain
              </span>
              . Réponse sous 48h ouvrées.
            </p>
            {/* CTA block */}
            <div className="flex w-full flex-col gap-3 pt-2">
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
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-center font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl sm:w-auto"
                >
                  Estimer mon bien (Gratuit)
                </button>
              </div>

              <a
                href="https://www.alvimmobilier.bzh/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-left text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <p className="text-[1.225rem] font-semibold text-slate-900">
                  Agence familiale & locale – ALV Immobilier
                </p>
                <p className="text-[1.05rem] italic text-slate-500">
                  À vos côtés, depuis plus de 20 ans
                </p>
              </a>

              <div className="mt-2 flex flex-col gap-1 text-sm">
                <span className="flex text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                  ))}
                </span>
                <p className="italic text-slate-500">
                  &quot;Réactivité, professionnalisme et écoute. Une vente réalisée sereinement grâce à toute l&apos;équipe ALV.&quot;
                </p>
                <p className="font-semibold text-slate-600">
                  – Famille Le Gall (Avis Google Vérifié)
                </p>
              </div>
            </div>
          </div>

          {/* Right column: image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 h-[400px] w-full max-w-md sm:h-[480px] lg:h-[600px] lg:max-w-lg">
              <div className="absolute bottom-0 left-1/2 h-[50%] w-[65%] -translate-x-1/2 overflow-hidden rounded-[40px]">
                <Image
                  src="/hero-shape-bg.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 flex h-full items-end justify-center">
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
    </>
  );
}

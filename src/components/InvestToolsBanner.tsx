"use client";

import React, { useState } from "react";
import Image from "next/image";

export function InvestToolsBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function closeModal() {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setEmail("");
  }

  return (
    <section className="w-full py-12 md:py-16">
      <div className="relative w-full overflow-visible rounded-none bg-gradient-to-r from-[#ff4b2b] via-[#ff416c] to-[#7b2cff] px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left column: text + CTA */}
          <div className="max-w-xl md:basis-3/5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80 md:text-sm">
              OUTILS POUR INVESTISSEURS
            </span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
              Téléchargez mon pack d&apos;analyse (Excel &amp; Checklists)
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/80 sm:text-base">
              Accédez gratuitement au calculateur de rentabilité et à la grille de
              visite terrain que j&apos;utilise pour sécuriser mes propres
              investissements.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:bg-slate-100"
            >
              Recevoir le pack (Offert)
            </button>
          </div>

          {/* Right column: (mobile image removed) */}
          <div className="mt-4 flex w-full justify-center md:mt-0 md:basis-2/5 md:justify-end" />
        </div>

        {/* Soft glow at the base of the banner */}
        <div
          className="pointer-events-none absolute inset-x-10 bottom-0 h-20 rounded-full bg-black/20 blur-2xl md:inset-x-32"
          aria-hidden
        />
      </div>

      {/* Lead capture modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-w-md w-full rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <h2 id="modal-title" className="pr-8 text-xl font-bold text-white sm:text-2xl">
                  Recevez votre Pack Investisseur
                </h2>
                <p className="mt-3 text-sm text-zinc-400 sm:text-base">
                  Entrez votre adresse email ci-dessous. Vous recevrez instantanément le calculateur Excel et les checklists par email.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="mt-4 w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
                <button
                  type="button"
                  onClick={() => setIsSubmitted(true)}
                  className="mt-5 w-full rounded-lg bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Envoyer le pack 🚀
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <h2 id="modal-title" className="mt-4 text-center text-xl font-bold text-white sm:text-2xl">
                  C&apos;est envoyé !
                </h2>
                <p className="mt-3 text-center text-sm text-zinc-400 sm:text-base">
                  Vérifiez votre boîte de réception (et vos spams), le lien de téléchargement arrive.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-semibold text-white transition-opacity hover:bg-white/15"
                >
                  Fermer
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

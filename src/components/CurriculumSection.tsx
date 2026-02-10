"use client";

import React from "react";
import Image from "next/image";
import {
  Plus,
  Minus,
  BrainCircuit,
  Square,
  Layers,
  Map,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CURRICULUM_MODULES = [
  {
    id: 1,
    label: "Module 1",
    title: "Les Fondations & Le Mindset",
    Icon: BrainCircuit as LucideIcon,
    lessons: [
      "Déconstruction du mythe de la rentabilité facile",
      "Pourquoi 90% des investisseurs échouent",
      "La règle d'or : La valeur de revente prime sur le cashflow",
    ],
  },
  {
    id: 2,
    label: "Module 2",
    title: "La Méthode du Carré",
    Icon: Square as LucideIcon,
    lessons: [
      "Ma méthode signature : Analyser sous 4 angles simultanés",
      "Rentabilité vs Remplissage : L'équilibre",
      "Qualité (Toiture/Façade) et Emplacement : Les critères physiques",
    ],
  },
  {
    id: 3,
    label: "Module 3",
    title: "Les Couches & La Négociation",
    Icon: Layers as LucideIcon,
    lessons: [
      "Activer les couches de valeur (Travaux, Division, Unicité)",
      "Mes scripts de négociation copiés-collés",
      "Acheter au prix \"où je prends\", pas au prix affiché",
    ],
  },
  {
    id: 4,
    label: "Module 4",
    title: "Plan d'Action & Terrain",
    Icon: Map as LucideIcon,
    lessons: [
      "Validation terrain : \"Est-ce que je peux y vivre ?\"",
      "Gestion des visites : Repérer les pièges",
      "Sécurisation des artisans et devis",
    ],
  },
  {
    id: 5,
    label: "Bonus",
    title: "Outils & Réseau",
    Icon: Hammer as LucideIcon,
    lessons: [
      "Accès complet à mes outils privés",
      "Calculateur de rentabilité Excel & Checklists terrain",
      "Accès à mon carnet d'adresses local (Finistère)",
    ],
  },
] as const;

export function CurriculumSection() {
  const [openId, setOpenId] = React.useState<number | null>(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState("");

  function closeModal() {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setEmail("");
  }

  return (
    <section
      id="waitlist"
      className="relative px-4 py-16 md:px-6 md:py-20 lg:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* CTA Banner */}
        <div
          className="relative flex min-h-[200px] flex-col justify-between gap-4 rounded-3xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-6 py-8 md:min-h-[220px] md:flex-row md:items-center md:justify-between md:px-8 md:py-10 lg:px-10"
          style={{
            boxShadow: "0 0 40px rgba(236, 72, 153, 0.2)",
          }}
        >
          <div className="relative z-10 flex flex-1 flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
                <p className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                  Ne vendez pas (et n&apos;achetez pas){" "}
                  <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    au hasard
                  </span>
                  .
                </p>
              <p className="mt-3 text-sm text-white/90 sm:text-base">
                Accédez bientôt à ma méthode d&apos;analyse &quot;Le Carré de la
                Rentabilité&quot;. Je vous dévoile comment j&apos;analyse la
                rentabilité et la valeur réelle d&apos;un bien en 15 minutes
                chrono.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="shrink-0 rounded-full bg-white px-6 py-3 text-center font-semibold text-black transition-opacity hover:opacity-90"
            >
              Rejoindre la liste d&apos;attente (Offert)
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Formation :{" "}
            <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
              Le Carré de la Rentabilité
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            Une méthode unique pour sécuriser vos investissements en Finistère.
            Bientôt disponible.
          </p>
        </header>

        {/* Accordion list */}
        <ul className="mt-10 space-y-4" role="list">
          {CURRICULUM_MODULES.map((mod) => {
            const isOpen = openId === mod.id;
            return (
              <li key={mod.id}>
                <div className="overflow-hidden rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : mod.id)}
                    className={`flex min-h-[60px] w-full items-center justify-between gap-4 bg-gradient-to-r from-purple-900 to-indigo-800 px-5 py-3 text-left md:px-6 ${
                      isOpen ? "rounded-t-xl" : ""
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`curriculum-content-${mod.id}`}
                    id={`curriculum-trigger-${mod.id}`}
                  >
                    <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-0.5">
                      <span className="font-bold text-white">
                        {mod.title}
                      </span>
                      <span className="text-sm text-white/70">
                        {mod.label}
                      </span>
                    </div>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white"
                      aria-hidden
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`curriculum-content-${mod.id}`}
                        role="region"
                        aria-labelledby={`curriculum-trigger-${mod.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden rounded-b-xl"
                      >
                        <div
                          className="divide-y divide-gray-800 bg-gray-950 px-5 py-4 md:px-6 md:py-5"
                          role="list"
                        >
                          {mod.lessons.map((lesson, idx) => (
                            <div
                              key={idx}
                              className="py-3 first:pt-0 last:pb-0"
                              role="listitem"
                            >
                              <p className="text-left text-gray-300">
                                {lesson}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Waitlist lead capture modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-w-md w-full rounded-2xl border border-white/10 bg-zinc-900 p-8"
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
                  Rejoindre la liste d&apos;attente VIP
                </h2>
                <p className="mt-3 text-sm text-zinc-400 sm:text-base">
                  Soyez averti en avant-première de la sortie de la formation &quot;Le Carré de la Rentabilité&quot; et bénéficiez d&apos;une remise de lancement exclusive.
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
                  M&apos;inscrire maintenant
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl" aria-hidden>
                    🎉
                  </span>
                </div>
                <h2 id="modal-title" className="mt-4 text-center text-xl font-bold text-white sm:text-2xl">
                  Vous êtes inscrit !
                </h2>
                <p className="mt-3 text-center text-sm text-zinc-400 sm:text-base">
                  Votre place est réservée. Vous recevrez un email dès l&apos;ouverture des portes.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-semibold text-white transition-opacity hover:bg-white/15"
                >
                  Retour au site
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

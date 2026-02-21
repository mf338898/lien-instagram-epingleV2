"use client";

import React from "react";
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
      className="relative bg-white px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* CTA Banner */}
        <div className="relative flex min-h-[200px] flex-col justify-between gap-4 rounded-2xl bg-slate-900 px-6 py-8 shadow-2xl md:min-h-[220px] md:flex-row md:items-center md:justify-between md:px-8 md:py-10 lg:px-10">
          <div className="relative z-10 flex flex-1 flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                Ne vendez pas (et n&apos;achetez pas){" "}
                <span className="text-slate-300">au hasard</span>.
              </p>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Accédez bientôt à ma méthode d&apos;analyse &quot;Le Carré de la
                Rentabilité&quot;. Je vous dévoile comment j&apos;analyse la
                rentabilité et la valeur réelle d&apos;un bien en 15 minutes
                chrono.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-center font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Rejoindre la liste d&apos;attente (Offert)
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Formation :{" "}
            <span className="text-brand-600">Le Carré de la Rentabilité</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
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
                    className={`flex min-h-[60px] w-full items-center justify-between gap-4 rounded-t-xl border border-slate-200 bg-white px-5 py-3 text-left shadow-sm transition-colors hover:border-slate-300 md:px-6 ${
                      isOpen ? "" : "rounded-xl"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`curriculum-content-${mod.id}`}
                    id={`curriculum-trigger-${mod.id}`}
                  >
                    <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-0.5">
                      <span className="font-semibold text-slate-900">
                        {mod.title}
                      </span>
                      <span className="text-sm text-slate-500">
                        {mod.label}
                      </span>
                    </div>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600"
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
                          className="divide-y divide-slate-200 border border-t-0 border-slate-200 bg-slate-50 px-5 py-4 md:px-6 md:py-5"
                          role="list"
                        >
                          {mod.lessons.map((lesson, idx) => (
                            <div
                              key={idx}
                              className="py-3 first:pt-0 last:pb-0"
                              role="listitem"
                            >
                              <p className="text-left text-slate-600">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-w-md w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <h2 id="modal-title" className="pr-8 text-xl font-bold text-slate-900 sm:text-2xl">
                  Rejoindre la liste d&apos;attente VIP
                </h2>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Soyez averti en avant-première de la sortie de la formation &quot;Le Carré de la Rentabilité&quot; et bénéficiez d&apos;une remise de lancement exclusive.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                />
                <button
                  type="button"
                  onClick={() => setIsSubmitted(true)}
                  className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  M&apos;inscrire maintenant
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl" aria-hidden>
                    🎉
                  </span>
                </div>
                <h2 id="modal-title" className="mt-4 text-center text-xl font-bold text-slate-900 sm:text-2xl">
                  Vous êtes inscrit !
                </h2>
                <p className="mt-3 text-center text-sm text-slate-600 sm:text-base">
                  Votre place est réservée. Vous recevrez un email dès l&apos;ouverture des portes.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 transition-colors hover:bg-slate-100"
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

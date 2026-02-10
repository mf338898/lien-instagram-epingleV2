"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS: { id: number; question: string; answer: string }[] = [
  {
    id: 0,
    question:
      "Pourquoi privilégiez-vous le mandat exclusif (et pas le mandat simple) ?",
    answer: `Parce qu'un bien diffusé "partout" finit souvent sur-exposé : plusieurs annonces, plusieurs prix, plusieurs discours… et au final une négociation plus dure.

Avec l'exclusivité, on gagne 3 choses :

Un message cohérent (un seul prix, un seul discours, une seule stratégie).

Un pilotage clair (reporting, retours de visites, ajustements rapides).

Un vrai investissement (temps, préparation, diffusion, qualification des acheteurs).

👉 Concrètement : je m'engage sur une obligation de moyens renforcée (stratégie + actions + suivi). Et surtout : on se fixe des points d'étape pour mesurer objectivement si la vente avance.`,
  },
  {
    id: 1,
    question:
      "En quoi votre estimation est-elle différente d'une estimation « rapide » ou d'un concurrent ?",
    answer: `Une estimation utile n'est pas un chiffre : c'est une stratégie de prix.

Mon avis de valeur est basé sur :

des comparables réellement vendus (et pas seulement des annonces),

l'analyse du micro-marché local,

l'état du bien, ses points forts/faiblesses, le DPE, les travaux possibles,

et la réalité des acheteurs (demande, budget, finançabilité).

Objectif : vendre au meilleur prix possible, sans laisser le temps jouer contre nous.`,
  },
  {
    id: 2,
    question: "Puis-je essayer de vendre seul en parallèle ?",
    answer: `Techniquement, oui. Stratégiquement, c'est souvent contre-productif.

Pourquoi ?

Les acheteurs comparent et repèrent vite les écarts (prix, infos, photos, conditions).

Ça fragilise la négociation ("si vous vendez seul, je prends moins cher").

Ça dilue le pilotage : on perd une stratégie unique.

👉 Pour défendre ton net vendeur, le plus efficace reste : un interlocuteur unique + une stratégie cohérente.`,
  },
  {
    id: 3,
    question:
      "Comment assurez-vous la visibilité (et surtout la qualité des contacts) ?",
    answer: `La visibilité n'est pas le vrai sujet : la qualité des acheteurs l'est.

Je travaille en 3 leviers :

Présentation : photos soignées, annonce claire, mise en avant des points différenciants.

Diffusion : portails + réseau ALV + fichier acquéreurs + relais local.

Qualification : je filtre et j'organise des visites avec des acquéreurs réellement finançables, pour éviter les visites "curieuses".

👉 Objectif : moins de visites, mais plus d'offres sérieuses.`,
  },
  {
    id: 4,
    question: "Si la vente ne se fait pas, est-ce que je vous dois quelque chose ?",
    answer: `Les honoraires d'agence sont dus uniquement si la vente se réalise (signature de l'acte authentique), selon les conditions prévues au mandat.

⚠️ À noter : il peut rester des frais indépendants de l'agence (ex : diagnostics obligatoires), qui dépendent du bien et de la réglementation.`,
  },
  {
    id: 5,
    question:
      "Je ne suis pas pressé : pourquoi ne pas « tester » un prix plus haut ?",
    answer: `Parce que l'immobilier a une logique simple : les meilleurs acheteurs se positionnent au début.

Un prix trop haut entraîne souvent :

moins de demandes qualifiées,

une période d'attente,

puis une baisse… et une négociation plus agressive.

👉 La bonne approche : un prix de lancement cohérent, avec un plan clair et une réévaluation à date fixe si les signaux marché ne sont pas bons (appels, visites, retours, offres).`,
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative px-4 py-16 md:px-6 md:py-20 lg:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          {/* Left column — sticky title + subtitle */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-6xl font-bold text-transparent md:text-7xl lg:text-8xl">
              Questions Fréquentes
            </h2>
            <p className="mt-6 text-lg text-slate-300 md:text-xl">
              Vendre est un métier. Voici pourquoi mes clients choisissent
              l&apos;exclusivité et la sérénité.
            </p>
          </div>

          {/* Right column — accordions */}
          <div className="space-y-5">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openIndex === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : item.id)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-trigger-${item.id}`}
                  >
                    <span className="min-w-0 flex-1 font-semibold text-white">
                      {item.question}
                    </span>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 text-white"
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
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-5 pb-4 pt-2 md:px-6 md:pb-5 md:pt-3">
                          <p className="whitespace-pre-line text-base text-slate-300">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

const steps: {
  badge: string;
  title: string;
  description: string;
  color: "white" | "yellow-400" | "green-500" | "blue-500" | "amber-700";
  image: string;
}[] = [
  {
    badge: "Étape 1 : Rencontre",
    title: "Estimation & Stratégie",
    description:
      "Je me déplace chez vous pour analyser les atouts de votre bien. Je vous remets un avis de valeur précis, basé sur le marché réel, pour fixer le bon prix de départ.",
    color: "white",
    image: "/icone-etape-1-audit.svg",
  },
  {
    badge: "Étape 2 : Visibilité",
    title: "Mise en Valeur",
    description:
      "Photos lumineuses, rédaction d'une annonce soignée et diffusion via l'agence ALV Immobilier. On ne vend pas juste des murs, on vend un coup de cœur.",
    color: "yellow-400",
    image: "/icone-etape-2-visibilite.svg",
  },
  {
    badge: "Étape 3 : Visites",
    title: "Visites Qualifiées",
    description:
      "Fini les curieux. Je vérifie la solidité du projet et le financement des acheteurs avant d'ouvrir votre porte. Vous gagnez du temps et de la tranquillité.",
    color: "green-500",
    image: "/icone-etape-3-visites.svg",
  },
  {
    badge: "Étape 4 : Accord",
    title: "Offre & Négociation",
    description:
      "Je réceptionne les offres et négocie pour vous afin d'obtenir le meilleur prix net vendeur. Je vérifie les dossiers bancaires pour éviter les refus de prêt.",
    color: "blue-500",
    image: "/icone-etape-4-nego.svg",
  },
  {
    badge: "Étape 5 : Acte",
    title: "Jusqu'à la Signature",
    description:
      "Gestion du dossier notaire, diagnostics et compromis. Je vous accompagne à chaque rendez-vous, jusqu'à la remise des clés et le champagne.",
    color: "amber-700",
    image: "/icone-etape-5-signature.svg",
  },
];

const colorClasses: Record<
  (typeof steps)[number]["color"],
  { text: string; bg: string }
> = {
  white: {
    text: "text-slate-700",
    bg: "bg-slate-100 border-slate-200",
  },
  "yellow-400": {
    text: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
  },
  "green-500": {
    text: "text-green-700",
    bg: "bg-green-50 border-green-200",
  },
  "blue-500": {
    text: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
  },
  "amber-700": {
    text: "text-amber-800",
    bg: "bg-amber-50 border-amber-200",
  },
};

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-3xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">
            Vendez votre bien en{" "}
            <span className="text-brand-600">5 étapes maîtrisées</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            De l&apos;estimation à la signature : un accompagnement rigoureux
            pour sécuriser votre transaction.
          </p>
        </header>

        <div className="relative mt-12 flex flex-col gap-8 xl:mt-16">
          {steps.map((step, index) => {
            const classes = colorClasses[step.color];

            return (
              <div key={step.badge} className="flex flex-col items-center">
                <div className="relative w-full max-w-2xl overflow-visible rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                    <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center sm:mb-0">
                      <Image
                        src={step.image}
                        alt=""
                        width={64}
                        height={64}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span
                        className={`inline-block rounded-full border px-3 py-1 text-sm font-medium ${classes.bg} ${classes.text}`}
                      >
                        {step.badge}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-slate-600 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <Image
                      src={`/arrow-${index + 1}.svg`}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain text-slate-300"
                      aria-hidden
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
  { text: string; bg: string; shadow: string }
> = {
  white: {
    text: "text-white",
    bg: "bg-white/20",
    shadow:
      "shadow-[0_0_32px_12px_rgba(255,255,255,0.35)] shadow-[0_0_48px_rgba(255,255,255,0.25)]",
  },
  "yellow-400": {
    text: "text-yellow-400",
    bg: "bg-yellow-400/20",
    shadow:
      "shadow-[0_0_32px_12px_rgba(250,204,21,0.45)] shadow-[0_0_48px_rgba(250,204,21,0.3)]",
  },
  "green-500": {
    text: "text-green-500",
    bg: "bg-green-500/20",
    shadow:
      "shadow-[0_0_32px_12px_rgba(34,197,94,0.45)] shadow-[0_0_48px_rgba(34,197,94,0.3)]",
  },
  "blue-500": {
    text: "text-blue-500",
    bg: "bg-blue-500/20",
    shadow:
      "shadow-[0_0_32px_12px_rgba(59,130,246,0.45)] shadow-[0_0_48px_rgba(59,130,246,0.3)]",
  },
  "amber-700": {
    text: "text-amber-700",
    bg: "bg-amber-700/20",
    shadow:
      "shadow-[0_0_32px_12px_rgba(180,83,9,0.45)] shadow-[0_0_48px_rgba(180,83,9,0.3)]",
  },
};

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative px-4 py-16 md:px-6 md:py-20 xl:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <div className="relative mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl">
            Vendez votre bien en{" "}
            <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
              5 étapes maîtrisées
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            De l&apos;estimation à la signature : un accompagnement rigoureux
            pour sécuriser votre transaction.
          </p>
        </header>

        {/* Main container: vertical stack, large gap for arrows */}
        <div className="relative mt-12 flex flex-col gap-y-24 xl:mt-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const classes = colorClasses[step.color];

            return (
              <div
                key={step.badge}
                className={`flex w-full relative ${isEven ? "justify-start" : "justify-end"}`}
              >
                {/* Card + arrow wrapper (relative so arrow is anchored to card) */}
                <div className="relative w-full max-w-[500px]">
                  {/* Card */}
                  <div className="relative w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md z-10">
                    {/* Floating icon: corner depends on alignment */}
                    <div
                      className={`absolute z-20 h-20 w-20 -top-6 sm:h-24 sm:w-24 sm:-top-8 md:h-28 md:w-28 md:-top-10 ${
                        isEven
                          ? "right-0 sm:-right-4 md:-right-10"
                          : "left-0 sm:-left-4 md:-left-10"
                      }`}
                      aria-hidden
                    >
                      <Image
                        src={step.image}
                        alt=""
                        width={112}
                        height={112}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <span
                      className={`inline-block rounded-full border border-current/30 px-3 py-1 text-sm font-medium ${classes.bg} ${classes.text}`}
                    >
                      {step.badge}
                    </span>

                    <h3
                      className={`mt-4 text-xl font-bold text-white sm:text-2xl ${isEven ? "pr-24" : "pl-24"}`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-slate-400 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting arrow: only between steps. Mobile: centered, on top. Desktop: zig-zag behind cards. */}
                  {index < steps.length - 1 && (
                    <Image
                      src={`/arrow-${index + 1}.svg`}
                      alt=""
                      width={192}
                      height={160}
                      className={`absolute z-20 w-24 h-auto object-contain -bottom-16 left-1/2 -translate-x-1/2
                        xl:w-56 xl:translate-x-0
                        ${index === 0 ? "xl:left-[508px] xl:top-[155px]" : ""}
                        ${index === 1 ? "xl:left-[-200px] xl:top-[186px] xl:scale-x-[-1]" : ""}
                        ${index === 2 ? "xl:left-[506px] xl:top-[164px] xl:scale-x-[-1]" : ""}
                        ${index === 3 ? "xl:left-[-197px] xl:top-[107px] xl:scale-x-[-1] xl:rotate-[360deg]" : ""}
                      `}
                      aria-hidden
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

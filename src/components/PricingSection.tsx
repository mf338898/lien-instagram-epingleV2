import Link from "next/link";
import { Check } from "lucide-react";

const PRICING_CARDS = [
  {
    id: "avis-valeur",
    headerGradient: "bg-gradient-to-r from-purple-700 to-purple-500",
    title: "Avis de Valeur",
    subtitle: "",
    price: "Offert",
    priceSubtext: "",
    buttonStyle: "ghost" as const,
    buttonText: "Demander mon estimation",
    badge: null as string | null,
    features: [
      "Visite physique du bien (Pleyben & alentours)",
      "Analyse comparative de marché précise",
      "Rendu oral sous 24h ouvrées",
      "Conseils de mise en valeur inclus",
    ],
    extraFeatureHighlight: null as string | null,
    orangeCheckFromIndex: null as number | null,
  },
  {
    id: "mandat-serenite",
    headerGradient:
      "bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837]",
    title: "Mandat Sérénité",
    subtitle: "",
    price: "% Honoraires",
    priceSubtext: "",
    buttonStyle: "gradient" as const,
    buttonText: "Vendre avec Matthis",
    badge: null as string | null,
    features: [
      "Reportage photo HDR & Visite Virtuelle",
      "Diffusion sur tous les portails (ALV)",
      "Filtrage drastique des acheteurs (Financement)",
      "Négociation & Accompagnement Notaire",
      "Espace propriétaire pour le suivi 24/7",
    ],
    extraFeatureHighlight: null as string | null,
    orangeCheckFromIndex: null as number | null,
    highlighted: true,
  },
  {
    id: "coaching-investisseur",
    headerGradient: "bg-gradient-to-r from-blue-500 to-green-500",
    title: "Coaching Investisseur",
    subtitle: "",
    price: "Sur Devis",
    priceSubtext: "",
    buttonStyle: "ghost" as const,
    buttonText: "Discuter de mon projet",
    badge: null as string | null,
    features: [
      "Accès à la formation 'Carré de la Rentabilité'",
      "Aide à la recherche de biens rentables",
      "Analyse des travaux & artisans",
      "Stratégie fiscale (LMNP, SCI...)",
    ],
    extraFeatureHighlight: null as string | null,
    orangeCheckFromIndex: null as number | null,
  },
];

function FeatureItem({
  text,
  highlight,
  checkClassName,
}: {
  text: string;
  highlight: string | null;
  checkClassName: string;
}) {
  if (highlight && text.includes(highlight)) {
    const parts = text.split(highlight);
    return (
      <li className="flex items-start gap-3">
        <span className={`shrink-0 ${checkClassName}`} aria-hidden>
          <Check className="h-5 w-5" />
        </span>
        <span className="text-slate-300">
          {parts[0]}
          <span className="text-orange-400">{highlight}</span>
          {parts[1]}
        </span>
      </li>
    );
  }
  return (
    <li className="flex items-start gap-3">
      <span className={`shrink-0 ${checkClassName}`} aria-hidden>
        <Check className="h-5 w-5" />
      </span>
      <span className="text-slate-300">{text}</span>
    </li>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Un accompagnement{" "}
            <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
              sur-mesure
            </span>
            .
          </h2>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            Que vous vendiez votre résidence principale ou cherchiez un
            investissement, j&apos;ai une solution adaptée.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PRICING_CARDS.map((card) => (
            <article
              key={card.id}
              className={`overflow-hidden rounded-xl border bg-purple-950/20 ${
                card.highlighted
                  ? "ring-2 ring-[#ff2d92]/50 md:-mt-2 md:scale-105"
                  : "border-white/10"
              }`}
            >
              <div
                className={`relative px-5 py-4 ${card.headerGradient}`}
              >
                {card.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                    {card.badge}
                  </span>
                )}
                <h3 className="font-bold text-white">{card.title}</h3>
                {card.subtitle ? (
                  <p className="mt-0.5 text-sm text-white/90">
                    {card.subtitle}
                  </p>
                ) : null}
              </div>
              <div className="px-5 py-6">
                <p className="text-3xl font-bold text-white">{card.price}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {card.priceSubtext}
                </p>
                <Link
                  href="https://www.alvimmobilier.bzh/catalog/contact_us.php?form=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    card.buttonStyle === "gradient"
                      ? "mt-4 flex w-full justify-center rounded-lg bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
                      : "mt-4 flex w-full justify-center rounded-lg border border-white px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
                  }
                >
                  {card.buttonText}
                </Link>
                <ul className="mt-6 space-y-3" role="list">
                  {card.features.map((text, idx) => (
                    <FeatureItem
                      key={text}
                      text={text}
                      highlight={
                        card.extraFeatureHighlight && text.includes(card.extraFeatureHighlight)
                          ? card.extraFeatureHighlight
                          : null
                      }
                      checkClassName={
                        card.orangeCheckFromIndex != null &&
                        idx >= card.orangeCheckFromIndex
                          ? "text-orange-400"
                          : "text-white"
                      }
                    />
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

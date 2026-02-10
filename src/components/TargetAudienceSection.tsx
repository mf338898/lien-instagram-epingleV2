import Link from "next/link";
import Image from "next/image";

const FOR_YOU_ITEMS = [
  "Vous vendez un bien en Finistère (Pleyben/Brest) et visez une transaction sécurisée au juste prix du marché.",
  "Vous êtes un acheteur (résidence principale) ou un propriétaire bailleur cherchant la sérénité avant tout.",
  "Vous voulez un interlocuteur unique, local et franc, qui s'engage à vous répondre sous 24h.",
  "Vous êtes prêt à entendre une réalité de marché basée sur 20 ans d'expertise terrain, pas sur des suppositions.",
  "Vous exigez une transparence totale sur les diagnostics techniques et les potentiels travaux à prévoir.",
] as const;

export function TargetAudienceSection() {
  return (
    <section
      id="target-audience"
      className="relative px-4 py-16 md:px-6 md:py-20 lg:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        {/* For You block */}
        <div className="py-8">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            L&apos;accompagnement ALV Immobilier est{" "}
            <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
              fait pour vous
            </span>{" "}
            si :
          </h2>
          <ul className="mt-8 space-y-5" role="list">
            {FOR_YOU_ITEMS.map((text) => (
              <li key={text} className="flex items-center gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center text-yellow-400"
                  style={{
                    filter: "drop-shadow(0 0 12px rgba(250, 204, 21, 0.5))",
                  }}
                  aria-hidden
                >
                  <Image src="/Gold.svg" alt="" width={32} height={32} className="h-8 w-8" aria-hidden />
                </span>
                <span className="text-lg text-white">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div
          className="my-12 h-px bg-gradient-to-r from-purple-500/80 to-transparent"
          aria-hidden
        />

        {/* Not For You block */}
        <div className="py-8">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Ce n&apos;est{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              pas pour vous
            </span>{" "}
            si :
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center text-red-500"
              style={{
                filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))",
              }}
              aria-hidden
            >
              <Image src="/qturh.svg" alt="" width={32} height={32} className="h-8 w-8" aria-hidden />
            </span>
            <span className="text-lg text-white">
              Vous souhaitez afficher un prix déconnecté du marché &quot;juste pour tester&quot;, ou vous cherchez un agent qui vous dira simplement &quot;oui&quot; pour obtenir le mandat sans stratégie réelle.
            </span>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="https://www.alvimmobilier.bzh/catalog/contact_us.php?form=1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Discuter de mon projet (Offert)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";

const OTHER_COURSES_ITEMS = [
  "Basé sur des moyennes, pas sur VOTRE bien",
  "Ne voit pas les travaux ni le charme",
  "Fourchette de prix souvent irréaliste (+/- 20%)",
  "Aucune stratégie de vente derrière",
  "Vos données sont revendues à 10 agences",
] as const;

const DOJO_ITEMS = [
  "Analyse réelle sur place (état, exposition, potentiel)",
  "Connaissance intime du secteur Pleyben/Châteaulin",
  "Stratégie marketing pour créer le 'Coup de Cœur'",
  "Accompagnement humain et bienveillant",
  "Confidentialité totale",
] as const;

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative px-4 py-16 md:px-6 md:py-20 lg:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pourquoi passer par un{" "}
            <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
              humain
            </span>{" "}
            ?
          </h2>
          <p className="mt-2 text-lg text-slate-300">
            La technologie c&apos;est bien, l&apos;expertise terrain
            c&apos;est mieux.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Other Courses (Villain) */}
          <article className="rounded-xl border border-white/5 bg-slate-950/80 p-6 md:p-8">
            <div className="flex justify-center">
              <Image
                src="/skull.png"
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 object-contain md:h-20 md:w-20"
              />
            </div>
            <h3 className="mt-4 text-center text-xl font-bold text-white">
              Estimations en Ligne (Robots)
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              {OTHER_COURSES_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 text-red-500" aria-hidden>
                    <X className="h-5 w-5" />
                  </span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Content Creation Dojo (Hero) - gradient border */}
          <div className="rounded-xl bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] p-[2px]">
            <article className="flex h-full flex-col rounded-[10px] bg-purple-950/40 p-6 shadow-[inset_0_0_30px_rgba(255,45,146,0.08)] md:p-8">
              <div className="flex justify-center">
                <Image
                  src="/ALV.svg"
                  alt="ALV Immobilier"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain drop-shadow-[0_0_15px_rgba(255,45,146,0.6)] md:h-20 md:w-20"
                />
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-white">
                Expertise ALV immobilier
              </h3>
              <ul className="mt-6 flex-1 space-y-3" role="list">
                {DOJO_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 text-orange-400" aria-hidden>
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://www.alvimmobilier.bzh/catalog/contact_us.php?form=1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Demander mon estimation
          </Link>
        </div>
      </div>
    </section>
  );
}

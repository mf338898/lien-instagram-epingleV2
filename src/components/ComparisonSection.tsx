"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
import { useJestimonlineModal } from "@/contexts/JestimonlineModalContext";

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
  const { openModal } = useJestimonlineModal();

  return (
    <section
      id="comparison"
      className="relative bg-slate-50 px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pourquoi passer par un{" "}
            <span className="text-brand-600">humain</span> ?
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            La technologie c&apos;est bien, l&apos;expertise terrain
            c&apos;est mieux.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300 md:p-8">
            <div className="flex justify-center">
              <Image
                src="/skull.png"
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 object-contain md:h-20 md:w-20"
              />
            </div>
            <h3 className="mt-4 text-center text-xl font-semibold text-slate-900">
              Estimations en Ligne (Robots)
            </h3>
            <ul className="mt-6 space-y-3" role="list">
              {OTHER_COURSES_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 text-red-500" aria-hidden>
                    <X className="h-5 w-5" />
                  </span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300 md:p-8">
            <div className="flex justify-center">
              <Image
                src="/ALVLOGOV2.svg"
                alt="ALV Immobilier"
                width={80}
                height={80}
                className="h-16 w-16 object-contain md:h-20 md:w-20"
              />
            </div>
            <h3 className="mt-4 text-center text-xl font-semibold text-slate-900">
              Expertise ALV immobilier
            </h3>
            <ul className="mt-6 flex-1 space-y-3" role="list">
              {DOJO_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 text-brand-600" aria-hidden>
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
          >
            Demander mon estimation
          </button>
        </div>
      </div>
    </section>
  );
}

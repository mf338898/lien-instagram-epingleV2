"use client";

import { Check, X } from "lucide-react";
import { useJestimonlineModal } from "@/contexts/JestimonlineModalContext";

const FOR_YOU_ITEMS = [
  "Vous vendez un bien en Finistère (Pleyben/Brest) et visez une transaction sécurisée au juste prix du marché.",
  "Vous êtes un acheteur (résidence principale) ou un propriétaire bailleur cherchant la sérénité avant tout.",
  "Vous voulez un interlocuteur unique, local et franc, qui s'engage à vous répondre sous 24h.",
  "Vous êtes prêt à entendre une réalité de marché basée sur 20 ans d'expertise terrain, pas sur des suppositions.",
  "Vous exigez une transparence totale sur les diagnostics techniques et les potentiels travaux à prévoir.",
] as const;

export function TargetAudienceSection() {
  const { openModal } = useJestimonlineModal();

  return (
    <section
      id="target-audience"
      className="relative bg-white px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="py-8">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
            L&apos;accompagnement ALV Immobilier est{" "}
            <span className="text-brand-600">fait pour vous</span> si :
          </h2>
          <ul className="mt-8 space-y-5" role="list">
            {FOR_YOU_ITEMS.map((text) => (
              <li key={text} className="flex items-start gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center text-green-600"
                  aria-hidden
                >
                  <Check className="h-6 w-6" />
                </span>
                <span className="text-lg text-slate-700">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="my-12 h-px bg-slate-200"
          aria-hidden
        />

        <div className="py-8">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Ce n&apos;est{" "}
            <span className="text-red-600">pas pour vous</span> si :
          </h2>
          <div className="mt-8 flex items-start gap-4">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center text-red-500"
              aria-hidden
            >
              <X className="h-6 w-6" />
            </span>
            <span className="text-lg text-slate-700">
              Vous souhaitez afficher un prix déconnecté du marché &quot;juste pour tester&quot;, ou vous cherchez un agent qui vous dira simplement &quot;oui&quot; pour obtenir le mandat sans stratégie réelle.
            </span>
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
            >
              Discuter de mon projet (Offert)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

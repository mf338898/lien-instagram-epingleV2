"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

type TabId = "transaction" | "location" | "gestion";

const TABS: { id: TabId; label: string }[] = [
  { id: "transaction", label: "Transaction" },
  { id: "location", label: "Location" },
  { id: "gestion", label: "Gestion" },
];

const TRANSACTION_ROWS: { range: string; fee: string }[] = [
  { range: "Jusqu'à 50 000 €", fee: "5 000 €" },
  { range: "50 001 – 75 000 €", fee: "9,80 %" },
  { range: "75 001 – 100 000 €", fee: "8,80 %" },
  { range: "100 001 – 150 000 €", fee: "7,80 %" },
  { range: "150 001 – 200 000 €", fee: "6,80 %" },
  { range: "200 001 – 300 000 €", fee: "5,80 %" },
  { range: "Au-delà de 300 001 €", fee: "5,00 %" },
];

const GESTION_BENEFITS = [
  "Encaissement des loyers",
  "Édition des quittances",
  "État des lieux d'entrée et de sortie",
  "Relances et suivi des impayés",
  "Liaison syndic et suivi d'entretien",
];

export function FeesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("transaction");

  return (
    <section
      id="pricing"
      className="relative px-4 py-16 md:px-6 md:py-20 lg:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Nos{" "}
            <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
              honoraires
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            Transparence totale sur les frais de transaction, location et gestion.
          </p>
        </header>

        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Types d'honoraires"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={
                  isActive
                    ? "rounded-lg bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] px-6 py-3 font-semibold text-white shadow-md transition-opacity hover:opacity-90"
                    : "rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          {activeTab === "transaction" && (
            <div
              id="panel-transaction"
              role="tabpanel"
              aria-labelledby="tab-transaction"
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/10">
                    <th className="px-6 py-4 font-semibold text-white">
                      Tranche de prix
                    </th>
                    <th className="px-6 py-4 font-semibold text-white">
                      Honoraires
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TRANSACTION_ROWS.map((row, i) => (
                    <tr
                      key={row.range}
                      className={
                        i % 2 === 0
                          ? "border-b border-white/5 bg-transparent"
                          : "border-b border-white/5 bg-white/5"
                      }
                    >
                      <td className="px-6 py-4 text-slate-200">{row.range}</td>
                      <td className="px-6 py-4 font-medium text-white">
                        {row.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "location" && (
            <div
              id="panel-location"
              role="tabpanel"
              aria-labelledby="tab-location"
              className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-12"
            >
              <div className="grid gap-10 md:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                    Part Locataire
                  </p>
                  <p className="mt-3 text-4xl font-bold text-white md:text-5xl">
                    <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
                      7,50 %
                    </span>
                  </p>
                  <p className="mt-2 text-slate-300">
                    du loyer annuel hors charges
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                    Part Propriétaire
                  </p>
                  <p className="mt-3 text-4xl font-bold text-white md:text-5xl">
                    <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
                      7,50 %
                    </span>
                  </p>
                  <p className="mt-2 text-slate-300">
                    du loyer annuel hors charges
                  </p>
                </div>
              </div>
              <p className="mt-8 text-center text-sm text-slate-400">
                Honoraires plafonnés à 11 €/m² (Loi ALUR).
              </p>
            </div>
          )}

          {activeTab === "gestion" && (
            <div
              id="panel-gestion"
              role="tabpanel"
              aria-labelledby="tab-gestion"
              className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-12"
            >
              <div className="text-center">
                <p className="text-5xl font-bold text-white md:text-6xl">
                  <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
                    6,50 %
                  </span>
                </p>
                <p className="mt-3 text-lg text-slate-300">
                  du loyer mensuel hors charges (Part Propriétaire)
                </p>
              </div>
              <ul className="mt-10 space-y-3" role="list">
                {GESTION_BENEFITS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="shrink-0 text-white" aria-hidden>
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

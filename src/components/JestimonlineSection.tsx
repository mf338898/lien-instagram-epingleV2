"use client";

const JESTIM_CONTAINER_ID = "jst__est_11bS969998ccc10509Xy547671v7P111";

export function JestimonlineSection() {
  return (
    <section
      id="estimation"
      className="bg-white px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Estimation immobilière{" "}
            <span className="text-brand-600">gratuite</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            Obtenez une estimation fiable de votre bien en quelques clics.
          </p>
        </header>

        <div className="mt-12 flex justify-center">
          <div
            id={JESTIM_CONTAINER_ID}
            className="min-h-[400px] w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
}

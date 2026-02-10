import Image from "next/image";

const BONUSES: Array<{
  image: string;
  alt: string;
  title: string;
  context: string;
  description: string;
  url?: string;
}> = [
  {
    image: "/le-moulin-de-brenizennec.png",
    alt: "Le Moulin de Brenizennec",
    title: "Le Moulin de Brenizennec",
    context: "Patrimoine & Rénovation",
    description:
      "Notre aventure familiale de rénovation d'un moulin du XIXème siècle en Bretagne. Chambres d'hôtes & Gîtes de charme.",
    url: "https://www.instagram.com/le_moulin_de_brenizennec?igsh=MTVlcXp4eTF0c3E3ag==",
  },
  {
    image: "/alize-foveau-nutrition.png",
    alt: "Alizé Foveau - Nutrition",
    title: "Alizé Foveau - Nutrition",
    context: "Santé & Terroir",
    description:
      "Diététicienne à domicile et ateliers 'De la ferme à l'assiette'. Basée à Plozévet.",
    url: "https://www.instagram.com/alize_bzh_?igsh=MW0wcTI1enRjcDR5Yw==",
  },
  {
    image: "/coraline-foveau-windsurf.png",
    alt: "Coraline Foveau - Windsurf",
    title: "Coraline Foveau - Windsurf",
    context: "Performance & Discipline",
    description:
      "Athlète mondiale en windsurf. La rigueur du haut niveau et l'esprit de voyage.",
    url: "https://www.instagram.com/cocofoveau?igsh=NTRsYXRudjZtdmVk",
  },
  {
    image: "/ELIOTT_FOVEAU.jpg",
    alt: "Eliott Foveau - Web",
    title: "Eliott Foveau - Web",
    context: "Digital & Design",
    description:
      "Créateur de sites web modernes et identités visuelles. L'art de se démarquer en ligne.",
    url: "https://www.linkedin.com/in/eliott-foveau-b3496a330",
  },
];

export function BonusesSection() {
  return (
    <section
      id="about"
      className="relative px-4 py-16 md:px-6 md:py-20 lg:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--hero-center) 0%, var(--hero-edge) 70%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Au-delà de l&apos;immobilier :{" "}
            <span className="bg-gradient-to-r from-[#ff2d92] via-[#ff6b35] to-[#ffc837] bg-clip-text text-transparent">
              Mon Univers
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            L&apos;immobilier est un métier de relations humaines. Découvrez
            mes projets, ma famille et les partenaires qui m&apos;inspirent au
            quotidien.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {BONUSES.map((bonus) => {
            const content = (
              <article
                key={bonus.title}
                className="overflow-hidden rounded-xl border border-white/10 bg-purple-950/20 transition-opacity hover:opacity-95"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={bonus.image}
                    alt={bonus.alt}
                    width={600}
                    height={340}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2 p-5 md:p-6">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-slate-400">{bonus.context}</p>
                  <p className="text-sm text-gray-300 md:text-base">
                    {bonus.description}
                  </p>
                </div>
              </article>
            );
            if (bonus.url) {
              return (
                <a
                  key={bonus.title}
                  href={bonus.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }
            return content;
          })}
        </div>
      </div>
    </section>
  );
}

import CTAButton from "@/components/CTAButton"

export default function Hero() {
  return (
    <section className="relative h-[95vh] mt-13 w-full">
      {/* Image de fond */}
      <div
        className="absolute  inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-restaurant.png')",
          backgroundPosition: "40% 30%",

        }}
      ></div>

      {/* Overlay bordeaux */}
      <div className="absolute inset-0"></div>

      {/* Contenu */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-[var(--primary)]">
        <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl">
          La Ferme d'Orthe
        </h1>
        <p className="mb-8 max-w-xl text-lg md:text-xl">
          Cuisine du terroir et produits frais depuis 1948.
        </p>
        <CTAButton text="Réserver une table" href="tel:0681627472" />
                {/* mettre maps */}

      </div>
    </section>
  )
}
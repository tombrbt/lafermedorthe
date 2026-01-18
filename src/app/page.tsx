import Hero from "@/components/Hero"
import Section from "@/components/Section"
import Gallery from "@/components/Gallery"
import CTAButton from "@/components/CTAButton"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero />

      {/* Section 1 : Notre philosophie */}
      <Section
        id="about"
        title="Notre philosophie"
        subtitle="Cuisine du terroir et produits frais"
        content={
          <>
            <p>À La Ferme d'Orthe, nous mettons en avant le savoir-faire de nos producteurs locaux et la richesse de notre terroir. 
            Chaque plat est préparé avec passion pour vous offrir une expérience culinaire authentique.</p> <br />
            <p>Michel et Mylène Labastie, vous accueillent le temps d'un déjeuner ou d'un diner dans leur restaurant. <br /> <br />
              Vous y découvrirez une cuisine simple qui rend homage à la qualité des produits que son chef prend soin de choisir. 
              En effet celui-ci met à l'honneur les produits locaux et les cuisine avec respect.</p> 
          </>
        }
        imageUrl="/images/philo.jpg"
        imageLeft={true}
        className="bg-[var(--beige)] "
      >
        <div className="mt-6 text-center md:text-left">
          <CTAButton text="Découvrir notre restaurant" href="/restaurant" />
        </div>
      </Section>

      {/* Section 2 : Menu dégustation */}
      <Section
        id="menu"
        title="Menu dégustation"
        subtitle="Un voyage gustatif"
        content="Découvrez notre menu dégustation qui change au fil des saisons, toujours avec des produits frais et de qualité. Des saveurs traditionnelles revisitées avec élégance."
        imageUrl="/images/Menuimg.png"
        imageLeft={false}
        className="bg-[var(--ivory)]  "
      >
        <div className="mt-6 text-center md:text-left">
          <CTAButton text="Voir le menu complet" href="http://www.lafermedorthe.fr/cartes/2024/240906_Carte.pdf" />
        </div>
      </Section>

      {/* Gallery */}
      <Gallery

        images={[
          "/images/gallery1.jpg",
          "/images/gallery2.jpg",
          "/images/gallery3.jpg",
          "/images/gallery4.jpg",
        ]}
      />
    </div>
  )
}

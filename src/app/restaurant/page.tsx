import Section from "@/components/Section"

export default function RestaurantPage() {
  return (
    <main>
      {/* Section Histoire */}
      <Section
        title="L’histoire de La Ferme d’Orthe"
        subtitle="Une maison de caractère"
        className="bg-[var(--beige)]  mt-6"
        

        content={
          <>
            <p className="mb-4">
            Le restaurant fût crée par les arrières grands-parents de Mylène qui transformèrent cette ferme en un Bar-Dancing en 1948 "chez Belin".
            Puis arriva la restauration avec le grand-père et ce fût alors "chez Henri" que l'on pouvait déguster des piballes, le saumon de l'Adour, l'alose, le salmis de palombes...
            </p>

            <p>
            Puis à l'heure de la retraite, Henri et Henriette Moulia, cédérent leur place à un gérant, puis à un second et 14 ans plus tard, le 6 avril 2006 Michel et Mylène renouèrent avec l'affaire familiale. <br /> 
            </p>

            <br />
            <p>
            C'est maintenant un restaurant traditionnel de par sa silhouette de ferme, ses murs en pierres apparentes, sa cheminée mais contemporaine de par sa cuisine que Michel propose toujours avec une petite touche d'originalité.
            </p>


          </>
        }
        imageUrl="/images/histoire.jpg"
        imageLeft={true}
        imageClassName="h-[520px]"

      />


    <div className="bg-[var(--beige)]">
  <hr className="mx-auto w-1/2 border-t border-gray-400" />
</div>

      {/* Section Chef */}
      <Section
        title="Le chef"
        subtitle="Un parcours guidé par la passion"
        className="bg-[var(--beige)] "

        content={
          <>
            <p className="mb-4">
            Michel LABASTIE, le chef a démarré son parcours à Pau, au Corona lors de son apprentissage. Amoureux de son métier il a ensuite voulu apprendre au contact des autres chefs tels <strong>Mr BOUISSOU </strong>à Uriage Les Bains , <strong>Antoine ANTUNES</strong> à Hendaye, <strong>Michel SARRAN</strong> à Toulouse et <strong>PANTXO</strong> à Arcangues. 
            <br />Puis est arrivée l'envie de proposer sa cuisine dans son restaurant.
            </p>

            <p>
            La cuisine de Michel LABASTIE est avant tout des produits de qualité et des cuissons justes, un peu d'originalité mais sans jamais dénaturer la noblesse du produit. <br />
            Natif de Pau, il aime mettre à l'honneur les produits locaux que ce soit ceux de la terre ou ceux de la mer. Sa carte varie au fil des saisons et il essaie de travailler essentiellement avec des producteurs les plus proches. <br />
            Son besoin de magnifier les produits locaux lui a apporté le titre de Maitre-Restaurateur.
            </p>

                <br />
            <p>
            Puis à l'heure de la retraite, Henri et Henriette Moulia, cédérent leur place à un gérant, puis à un second et 14 ans plus tard, le 6 avril 2006 Michel et Mylène renouèrent avec l'affaire familiale. <br /> <br />
            C'est maintenant un restaurant traditionnel de par sa silhouette de ferme, ses murs en pierres apparentes, sa cheminée mais contemporaine de par sa cuisine que Michel propose toujours avec une petite touche d'originalité.
            </p>

            
          </>
        }
        imageUrl="/images/chef.jpg"
        imageLeft={false}
        imageClassName="h-[650px]"

      />
    </main>
  )
}

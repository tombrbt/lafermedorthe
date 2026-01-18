export default function Footer() {
    return (
      <footer className="bg-[var(--ivory)] text-[var(--primary)] px-6 py-10">
        <div className="mx-auto max-w-6xl">
          {/* Top : Nom + liens rapides */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Nom / Logo */}
            <h2 className="font-serif text-xl">La Ferme d'Orthe</h2>
  
            {/* Liens */}
            <nav>
              <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wide">
                <li>
                  <a href="/menu" className="hover:text-beige">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-beige">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="/reservations" className="hover:text-beige">
                    Réservations
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-beige">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
  
          {/* Bottom : Mention légale */}
          <div className="mt-8 border-t border-ivory/30 pt-6 text-center text-xs text-ivory/70">
            <p>&copy; {new Date().getFullYear()} La Ferme d'Orthe. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
  }
  
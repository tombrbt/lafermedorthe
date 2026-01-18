export default function Header() {
    return (
        <header className="bg-[var(--ivory)] text-[var(--primary)] px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="font-serif text-2xl">La Ferme d'Orthe</h1>
          <nav>
            <ul className="flex space-x-6 font-serif text-base uppercase tracking-wide">
              <li><a href="/" className="hover:text-beige">Accueil</a></li>
              <li><a href="#about" className="hover:text-beige">À propos</a></li>
              <li><a href="#menu" className="hover:text-beige">Menu</a></li>
              <li><a href="#gallery" className="hover:text-beige">Galerie</a></li>
              <li><a href="tel:0681627472" className="hover:text-beige">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  